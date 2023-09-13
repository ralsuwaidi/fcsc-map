'use client';

import { Label, TextInput } from 'flowbite-react';
import { HiMail, HiSearch } from 'react-icons/hi';

export default function Sidebar() {
    return (
        <div className="w-48 h-48 bg-white">
            <TextInput
                id="email4"
                placeholder="Hotel, Mosque..."
                required
                rightIcon={HiSearch}
                type="email"
            />
        </div>
    )
}


