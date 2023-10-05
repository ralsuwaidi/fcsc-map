import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function OnLoadModal() {
    const [open, setOpen] = React.useState(true);
    return (
        <React.Fragment>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        mx: 2
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <img src="https://cdn-icons-png.flaticon.com/512/7670/7670812.png?ga=GA1.1.1554977491.1696483305" alt="Logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: 80 }} />

                    <Typography id="modal-desc" textColor="text.tertiary" sx={{ mt: 4, textAlign: 'center' }}>
                        Welcome to the freshly renovated, technologically advanced and visually stunning cartographic representation, illustrating the entirety of the geographical positions within United Arab Emirates' landscape that have been distinguished due to their inherent and undeniably cool characteristics, granting its viewers the privilege to appreciate this display in its full glory
                    </Typography>
                    <Button onClick={() => setOpen(false)} sx={{ width: "100%", mt: 3 }}>
                        Explore
                    </Button>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}
