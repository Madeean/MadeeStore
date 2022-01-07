import React, { useCallback } from 'react'
import Category from './category';
import TableBody from './TableBody';
// import Image from 'next/dist/client/image';
import {useEffect} from 'react';
import { getMemberOverview } from '../../../services/member';
import{toast} from 'react-toastify'
import {useState} from 'react'
import { HistoryTransactionTypes,TopupCategoriesTypes } from '../../../services/data-types';

export default function OverviewContent() {
    const IMG = process.env.NEXT_PUBLIC_IMG 
    const [count,setCount] =  useState([])
    const [data,setData] = useState([])

    const getMemberOverviewApi =useCallback(async()=>{
        const response = await getMemberOverview()
        if(response.error){
            toast.error(response.message)
        }else{
        setCount(response.data.count)
        setData(response.data.data)
        }
    },[])
    useEffect(()=>{
        getMemberOverviewApi()
    },[])
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            {count.map((item:TopupCategoriesTypes) => {
                                return <Category key={item._id} icon='ic-desktop' nominal={item.value}>{item.name}</Category>
                            })}
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item:HistoryTransactionTypes) =>{
                                    return <TableBody 
                                    key={item._id}
                                    title={item.historyVoucherTopup.gameName} 
                                    item={`${item.historyVoucherTopup.coinQuantity}  ${item.historyVoucherTopup.coinName}`}
                                    category={item.category.name} 
                                    harga={item.value} 
                                    status={item.status} 
                                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`} 
                                    />

                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}