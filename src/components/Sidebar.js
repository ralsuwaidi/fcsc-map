'use client';

import { Label, TextInput } from 'flowbite-react';
import { HiMail, HiSearch } from 'react-icons/hi';

const statList = [
    {
        title: 'Population',
        content: '≈ 9.8 million people in 2021'
    },
    {
        title: 'Area',
        content: '71,023.6 km²'
    },
    {
        title: 'Location',
        content: 'The UAE overlooks the Arabian Gulf and borders the Kingdom of Saudi Arabia to the South and West and the Sultanate of Oman to the Southeast.'
    },
    {
        title: 'Population',
        content: 'The UAE time is 4 hours ahead of GMT'
    },
    {
        title: 'Currency',
        content: 'The Emirati Dirham is the official national currency. The US dollar is exchanged for the UAE Dirham at a rate of 3.67, and credit cards are widely accepted'
    },
    {
        title: 'Climate',
        content: 'The UAE has a warm and sunny weather most of the year, recording an ideal temperature from October to May.'
    },
    {
        title: 'Official Language',
        content: 'Arabic is the official language and English is widely spoken in public, markets and restaurants.'
    },
    {
        title: '200 Nationalities',
        content: 'The UAE hosts large foreign communities and all residents enjoy freedom of civil rights and practice of religion'
    },
    {
        title: 'Security and Safety',
        content: 'The UAE was ranked the third safest country in the world in 2020, offering residents and visitors highest levels of safety'
    }
]

export default function Sidebar(props) {
    return (
        <div class="absolute top-16 left-20 rounded p-3 bg-white w-[70vw] h-[60vh] overflow-y-auto">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            {props.children}

        </div >
    )
}


export function GetSidebar(tabNumber) {
    if (tabNumber == 0) {
        return (
            <Sidebar title="Basic Facts About the UAE">
                <div className="grid-cols-2 grid gap-2">
                    {statList.map((stat) => (
                        <div className=" w-28 bg-gray-100 rounded-lg p-1">
                            <div key={stat.title}>
                                <p className="text-sm font-semibold">{stat.title}</p>
                                <p className="text-xs pt-2">{stat.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Sidebar>
        )
    } else if (tabNumber == 1) {
        return (
            <Sidebar title="Basic Facts About the UAE">
                <div className="grid-cols-2 grid gap-2">
                    {statList.map((stat) => (
                        <div className=" w-28 bg-gray-100 rounded-lg p-1">
                            <div key={stat.title}>
                                <p className="text-sm font-semibold">{stat.title}</p>
                                <p className="text-xs pt-2">{stat.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Sidebar>
        )
    }
}