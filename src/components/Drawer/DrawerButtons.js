import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function DrawerButtonGroup() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                    flexGrow: 1,
                    width: '100%', // ensure full width is used
                },
            }}
        >
            <ButtonGroup variant="outlined" aria-label="outlined button group" fullWidth>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
            </ButtonGroup>
        </Box>
    );
}
