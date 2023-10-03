import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import {
    Accessible,
    Toys,
    SettingsRemote
} from '@mui/icons-material';

export default function DrawerList() {
    return (
        <Card>
            <List
                size='md'
                sx={{
                    maxWidth: 300,
                    borderRadius: 'sm',
                }}
            >
                <ListItem>
                    <ListItemButton>
                        <ListItemDecorator>
                            <Accessible />
                        </ListItemDecorator>
                        Accessable Ramps and Doors
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemDecorator>
                            <Toys />
                        </ListItemDecorator>
                        Good for Kids
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemDecorator>
                            <SettingsRemote />
                        </ListItemDecorator>
                        Contactless Payment
                    </ListItemButton>
                </ListItem>
            </List>
        </Card>
    );
}
