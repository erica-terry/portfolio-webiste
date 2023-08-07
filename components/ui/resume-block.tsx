'use client'

import React, { Dispatch, SetStateAction } from "react";
import Tags from "./tags";

interface Props {
    key: string
    tab: number
    setTab: Dispatch<SetStateAction<number>>
    resumeItem: ResumeItem
}

const ResumeBlock = (props: Props) => {
    return (

        <div key={props.key} className='pl-4 pt-2'>
            <div className="leading-snug tracking-tight mb-1"><span className="font-bold">{props.resumeItem.position}</span> — {props.resumeItem.employer}, {props.resumeItem.city}, {props.resumeItem.state}</div>
            <p className='text-gray-600 mb-2'>July 2016 - June 2023</p>
            <ul className='list-disc text-sm mb-6'>
                {props.resumeItem.list.map((i, k) => {
                    return (<li key={k} className="mb-1">{i}</li>)
                })}
            </ul>
            <Tags tags={props.resumeItem.tags} />
        </div>
    );
}

export default ResumeBlock;