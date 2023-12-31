import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import GetTemperature from './components/GetTemperature';
import {
    WbSunny,
} from '@mui/icons-material';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer({ children, isDrawerOpen, setDrawerOpen, headerText }) {


    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                sx={{
                    "& .MuiDrawer-paper": {
                        height: 'calc(100% - 128px)', top: 128,
                        maxWidth: { md: "600px" }, // Sets max-width for tablet and above
                        margin: { md: "auto" }, // Centers the drawer for tablet and above
                    }
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <div className='flex justify-between'>

                        <div className='flex'>
                            <p className='py-4 pl-4 pr-1 text-lg'>{headerText}</p>
                            <p className='text-green-500 h-full mt-5 p-0.5 border-green-500 text-xs'>beta</p>
                        </div>
                        <div className='mt-4 pr-6'>
                            <div className='px-2 '>
                                <WbSunny color='warning' fontSize='' /> <GetTemperature /> &deg;C
                            </div>
                        </div>
                    </div>

                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    {children}
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}


export default SwipeableEdgeDrawer;
