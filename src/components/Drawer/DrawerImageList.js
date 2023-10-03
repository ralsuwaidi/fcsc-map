import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';


const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
    },
];

export default function DrawerImageList() {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                py: 1,
                overflow: 'auto',
                width: '100%',
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {data.map((item) => (
                <Box key={item.title} sx={{ backgroundColor: 'transparent' }} >
                    <AspectRatio ratio="1" sx={{ minWidth: 160, backgroundColor: 'white' }}>
                        <img
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.src}?h=120&fit=crop&auto=format`}
                            alt={item.title}
                            style={{ borderRadius: '8px', backgroundColor: 'white' }}
                        />
                    </AspectRatio>
                </Box>
            ))}
        </Box>
    );
}
