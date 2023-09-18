'use client';

import { Button } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';


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


const emiratesList = [
    {
        title: "United Arab Emirates",
        content: "The United Arab Emirates is a federation of seven emirates, with Abu Dhabi as its capital, located in the Western Asia on the Eastern Coast of the Arabian Peninsula. The seven emirates are: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. The UAE was founded on 2nd December 1971, and celebrates the day as its National Day every year. The year 2021 coincides with the celebration of the 50th anniversary of its establishment.",
        image: "https://www.moec.gov.ae/documents/20121/354815/map.svg/1a492046-789a-c606-28c2-f81a0da25cae?t=1630476033220&download=true"
    },
    {
        title: "Abu Dhabi",
        content: "Abu Dhabi is the federal capital of the UAE and the largest of the seven emirates. It comprises three major regions and cities: Abu Dhabi, Al Ain and Al Dhafra. The Emirate of Abu Dhabi accounts for 85% of the total area of the UAE, and it’s one of the top safest cities in the world. The emirate has achieved an unprecedented economic growth in the past fifty years.",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_1.jpg/528d413d-8484-adf2-89fd-ecca55c429e5?t=1630491738790"
    },
    {
        title: "Dubai",
        content: "Dubai is globally known for its high-quality advanced infrastructure. In earlier times, Dubai used to be famous for fishing, pearl diving and simple agricultural activities. Today, it has emerged as a global trade hub and a major destination on the global tourism map. It gained its global reputation as the ‘City of Gold’, thanks to the booming global gold trade over the past decades",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_2.jpg/49f68baf-7b6a-eb59-708b-72bb8d5a310b?t=1630491598605"

    },
    {
        title: "Sharjah",
        content: "Sharjah is the third largest emirate in the UAE, and it is home to vast deserts, beaches and key archaeological sites that spread across the city. Sharjah was crowned the 'Capital of Islamic Culture' and 'Unique and Distinguished Tourist Destination'. It was also named the ‘Cultural Capital of the Arab world’ by UNESCO. Several places in the emirate overlook the Eastern Coast of the Gulf of Oman",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_3.jpg/e5a250d2-d979-ac27-b360-426b431d029b?t=1630491440672"

    },
    {
        title: "Ajman",
        content: "Sharjah is the third largest emirate in the UAE, and it is home to vast deserts, beaches and key archaeological sites that spread across the city. Sharjah was crowned the 'Capital of Islamic Culture' and 'Unique and Distinguished Tourist Destination'. It was also named the ‘Cultural Capital of the Arab world’ by UNESCO. Several places in the emirate overlook the Eastern Coast of the Gulf of Oman",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_4.jpg/24231173-9ff3-54bd-0d5f-76aca11fbdcc?t=1630491268916"

    },
    {
        title: "Umm Al Quwain",
        content: "Umm Al Quwain has its name derived from the phrase Umm Al Quwatain, which refers to its ‘two powers’ of richness of activities on land and water. Today, it is home to major archaeological sites and mangroves that stretch over more than seven kilometres. Al Seniah Island is one of the emirate’s largest islands, hosting a natural reserve for migratory birds in the relatively warm winter",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_5.jpg/8a17774b-7b9d-cdd8-c3a7-f0b09fc21c8e?t=1630491085734"

    },
    {
        title: "Ras Al Khaimah",
        content: "The Emirate of Ras Al Khaimah is characterised by its captivating natural sceneries, sprawling deserts and towering mountain ranges. It is home to prominent archaeological sites dating back to the third millennium BC. It includes Jebel Jais, the highest mountain in the UAE, and extended palm plantations, and provides an authentic reflection of Arab traditions and heritage. The city offers diverse recreational activities as well",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_6.jpg/b0396d10-2e63-d9b5-e361-905c2814f392?t=1630490769363"

    },
    {
        title: "Fujairah",
        content: "Fujairah is distinguished by its rugged landscape surrounded by Al Hajar Mountains, and hosts a sandy 70-km coastline overlooking captivating sceneries. The emirate receives visitors throughout the year due to its relatively low temperatures during the summer",
        image: "https://www.moec.gov.ae/documents/20121/354815/emirate_7.jpg/9a9471a3-ea11-39c7-1dbc-ff25d6ad6ab7?t=1630476581461"

    },
]


export default function Sidebar({ title, SidebarVisible, children }) {

    return (


        // In the component
        <div className="fixed top-0 left-0 w-full h-full p-3 bg-white overflow-y-auto z-20">
            <div className="flex justify-between items-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <Button color="light" size={'xs'} onClick={() => SidebarVisible(false)} className="d-flex justify-content-center align-items-center border-0">
                    <FaTimes size={20} />
                </Button>
            </div>
            {children}
        </div>
    )
}


export function GetSidebar(tabNumber, sidebarVisible) {
    switch (tabNumber) {
        case 0:
            return (
                <Sidebar title="Emirates of the UAE" SidebarVisible={sidebarVisible}>
                    {emiratesList.map((data) => (
                        <div className="max-w-sm mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={data.image} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.content}</p>
                            </div>
                        </div>
                    ))}
                </Sidebar>
            );

        case 1:
            return (
                <Sidebar title='Basic Facts About the UAE' SidebarVisible={sidebarVisible}>
                    <div className="grid-cols-2 grid gap-2">
                        {statList.map((stat) => (
                            <div className=" grow bg-gray-100 rounded-lg p-1">
                                <div key={stat.title}>
                                    <p className="text-sm font-semibold">{stat.title}</p>
                                    <p className="text-xs pt-2">{stat.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Sidebar>
            );

        case 2:
            return (
                <Sidebar title='Basic Facts About the UAE2' SidebarVisible={sidebarVisible}>
                    <div className="grid-cols-2 grid gap-2">
                        {statList.map((stat) => (
                            <div className=" grow bg-gray-100 rounded-lg p-1">
                                <div key={stat.title}>
                                    <p className="text-sm font-semibold">{stat.title}</p>
                                    <p className="text-xs pt-2">{stat.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Sidebar>
            );

        default:
            return null;
    }
}