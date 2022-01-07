import React from 'react'
import Link from 'next/link';
import classNames from 'classnames';

interface ButtonTabProps{
    title:string
    active:boolean
    onClick: ()=>void
}
export default function ButtonTab(props : ButtonTabProps) {
    const{title,active,onClick} = props;
    const BtnClass = classNames({
        "btn btn-status rounded-pill text-sm  me-3" : true,
        "btn-active" :active,
    });
    return (
        <button type='button' onClick={onClick} className={BtnClass}> {title} </button>

    )
}
