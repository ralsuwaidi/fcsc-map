import React from "react";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Card from '@mui/joy/Card';
import DrawerButtonGroup from "./DrawerButtons";
import DrawerImageList from "./DrawerImageList";
import DrawerList from "./DrawerList";

function DrawerContent() {
    return (
        <div>
            <div className="mb-2">
                <p className="font-bold text-2xl w-36">Museum Of The Future</p>
                <p className=" text-gray-500 font-bold">متحف المستقبل</p>
                <p className="text-sm">Museum</p>
            </div>
            <DrawerButtonGroup />

            <div className="border-b mt-2 border-gray-200"></div>
            <div className="my-2 px-1 w-full">
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className="text-gray-400 capitalize text-sm">HOURS</p>
                        <p className="font-semibold text-green-400">Open</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className="text-gray-400 capitalize text-sm">RATING</p>
                        <p className="font-semibold text-yellow-400">3.5</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className="text-gray-400 capitalize text-sm">DISTANCE</p>
                        <p className="font-bold">700 m</p>
                    </div>
                </Stack>
            </div>
            <div className="border-b border-gray-200"></div>

            <DrawerImageList />

            <div >
                <p className="mt-2 font-semibold text-lg">Good to know</p>
                <DrawerList />
            </div>

            <div >
                <p className="mt-2 font-semibold text-lg">Details</p>
                <Card>
                    <p className=" text-gray-400">Hours</p>
                    <p className=" ">10:00AM - 9:00PM</p>
                    <p className=" text-green-400">Open</p>
                </Card>
            </div>

        </div>
    );
}



export default DrawerContent;
