import cx from 'classnames';
import React from 'react';
import NumberFormat from 'react-number-format';


interface DeskripsiGame{
    title:string;
    category:string;
    item:string
    harga:number;
    status: string
    image:string;
}

export default function TableBody(props:DeskripsiGame) {
    const {title, category, item, harga, status, image} = props;
    const statusClass = cx({
        Pending: status == 'pending',
        Success: status == 'success',
        Failed: status == 'failed',
    })
    return (

        <tr className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={image}
                    width={80} height={60} alt="Mobile Legend"/>
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0"><NumberFormat value={harga} prefix='Rp. ' displayType='text' thousandSeparator='.' decimalSeparator=','/></p>
            </td>
            <td>
                <div>
                    <span className={`float-start icon-status ${status}` }></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {statusClass}</p>
                </div>
                
            </td>
        </tr>
        
    )
}
