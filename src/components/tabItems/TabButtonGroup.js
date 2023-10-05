import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';

export default function TabButtonGroup({ setTabNumber }) {
    return (
        <ButtonGroup spacing="0.5rem" aria-label="spacing button group" sx={{ width: "100%" }}>
            <Button onClick={() => setTabNumber(2)} sx={{ flexGrow: 1 }}>Invest</Button>
            <Button onClick={() => setTabNumber(0)} sx={{ flexGrow: 1 }}>Emirates</Button>
            <Button onClick={() => setTabNumber(1)} sx={{ flexGrow: 1 }}>Facts</Button>
        </ButtonGroup>
    );
}
