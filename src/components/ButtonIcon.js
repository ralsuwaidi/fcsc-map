'use client';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

export default function ButtonWithIcon(props) {
    return (
        <>
            <Button className='bg-white' size={'sm'} onClick={props.onClick}>
                <HiShoppingCart className=" text-gray-500 h-4 w-4" />
            </Button>
        </>
    )
}


