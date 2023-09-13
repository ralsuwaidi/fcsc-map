'use client';

import { Label, TextInput } from 'flowbite-react';
import { HiMail, HiSearch } from 'react-icons/hi';

export default function Search() {
    return (
        <div className="max-w-md">
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


