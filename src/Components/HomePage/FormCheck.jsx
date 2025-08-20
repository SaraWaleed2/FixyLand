import { Box, TextField, MenuItem, Typography, Container } from '@mui/material';
import Btn from '../Btn/Btn';

function FormCheck() {
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: "#e9f0ec" }}>
            <Box
                sx={{

                    position: 'relative',
                    top: '-30px',
                    left: { xs: 16, md: 24 },
                    right: 0,
                    zIndex: 2,
                    width: {xs:"97%",md:"90%"},
                    marginLeft: 'auto',
                    backgroundColor: 'rgba(59, 127, 109, 0.8)',
                    backdropFilter: 'blur(20px)',
                    p: 6,
                    borderRadius: '30px 0 0 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,

                }}
            >

                {/* ///////////////////////check in//////////////////// */}

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 160px' }}>
                    <Typography sx={{ color: 'white', mb: 1 }}>Check In</Typography>
                    <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 1,
                        }}
                    />
                </Box>

                {/* ///////////////////////check out//////////////////// */}

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 160px' }}>
                    <Typography sx={{ color: 'white', mb: 1 }}>Check Out</Typography>
                    <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 1,
                        }}
                    />
                </Box>

                {/* ///////////////////////rooms//////////////////// */}

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 160px' }}>
                    <Typography sx={{ color: 'white', mb: 1 }}>Room</Typography>
                    <TextField
                        select
                        defaultValue="Room 1"
                        fullWidth
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 1,
                        }}
                    >
                        <MenuItem value="Room 1">Room 1</MenuItem>
                        <MenuItem value="Room 2">Room 2</MenuItem>
                        <MenuItem value="Room 3">Room 3</MenuItem>
                    </TextField>
                </Box>

                {/* ///////////////////////Adults//////////////////// */}

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 160px' }}>
                    <Typography sx={{ color: 'white', mb: 1 }}>Adults</Typography>
                    <TextField
                        select
                        defaultValue="Adult 1"
                        fullWidth
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 1,
                        }}
                    >
                        <MenuItem value="Adult 1">Adult 1</MenuItem>
                        <MenuItem value="Adult 2">Adult 2</MenuItem>
                        <MenuItem value="Adult 3">Adult 3</MenuItem>
                    </TextField>
                </Box>

                {/* ///////////////////////children//////////////////// */}

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 160px' }}>
                    <Typography sx={{ color: 'white', mb: 1 }}>Children</Typography>
                    <TextField
                        select
                        defaultValue="child 1"
                        fullWidth
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 1,
                        }}
                    >
                        <MenuItem value="child 1"> 1</MenuItem>
                        <MenuItem value="child 2"> 2</MenuItem>
                        <MenuItem value="child 3"> 3</MenuItem>
                        <MenuItem value="child 4"> 4</MenuItem>
                        <MenuItem value="child 5"> 5</MenuItem>
                    </TextField>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: "center" }}>
                    <Btn btnContent='our services' bgColor='var(--secondary-color)' hoverBgColor='black' hoverTextColor='white' />
                </Box>
            </Box>
        </Container>
    );
}

export default FormCheck;
