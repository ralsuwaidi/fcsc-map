'use client';

import { Button } from "flowbite-react";
import { FaTimes } from 'react-icons/fa';
import EmiratesTab from "./tabItems/emirates";
import StatsTab from "./tabItems/stats";
import InvestTab from "./tabItems/invest";



export function GetSidebar(tabNumber) {
    switch (tabNumber) {
        case 0:
            return (
                    <EmiratesTab />
            );

        case 1:
            return (
                    <StatsTab />
            );

        case 2:
            return (
                    <InvestTab />
            );

        default:
            return null;
    }
}