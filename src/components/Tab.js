'use client';

import { Button } from "flowbite-react";
import { FaTimes } from 'react-icons/fa';
import EmiratesTab from "./tabItems/emirates";
import StatsTab from "./tabItems/stats";
import InvestTab from "./tabItems/invest";

export default function Tab({ title, SidebarVisible, children }) {

    return (
        // In the component
        <div className="fixed top-0 left-0 w-full h-full p-3 bg-white overflow-y-auto z-20">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <Button color="light" size={'xs'} onClick={() => SidebarVisible(false)} className="d-flex fixed top-2 right-7 justify-content-center rounded-full  align-items-center bg-gray-100  border-0">
                <FaTimes size={20} />
            </Button>

            {children}
        </div>
    )
}

export function GetSidebar(tabNumber, sidebarVisible) {
    switch (tabNumber) {
        case 0:
            return (
                <Tab title="Emirates of the UAE" SidebarVisible={sidebarVisible}>
                    <EmiratesTab />
                </Tab>
            );

        case 1:
            return (
                <Tab title='Basic Facts About the UAE' SidebarVisible={sidebarVisible}>
                    <StatsTab />
                </Tab>
            );

        case 2:
            return (
                <Tab title='Invest in Tourism' SidebarVisible={sidebarVisible}>
                    <InvestTab />
                </Tab>
            );

        default:
            return null;
    }
}