import React from 'react';
import {
    Box,
    Typography,
    Grid,
    TextField,
    IconButton,
    InputAdornment,
    Checkbox,
    FormControlLabel
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import BehanceIcon from '@mui/icons-material/Brush';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#111', color: '#fff', p: 6 }}>
            <Grid container spacing={4}>
                <Grid size={{xs:12,md:3}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                            component="img"
                            src="/src/assets/Images/logo.svg" // put your white logo path here
                            alt="Fixyland"
                            sx={{ width: 40, height: 40, mr: 1 }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Fixyland
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#aaa', mb: 3 }}>
                        Nam libero tempore cum soluta nobis eseligendi optio cumque nihil impedit quo minus maxime placeat facere
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#333' } }}><FacebookIcon sx={{ color: 'white' }} /></IconButton>
                        <IconButton sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#333' } }}><TwitterIcon sx={{ color: 'white' }} /></IconButton>
                        <IconButton sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#333' } }}><InstagramIcon sx={{ color: 'white' }} /></IconButton>
                        <IconButton sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#333' } }}><BehanceIcon sx={{ color: 'white' }} /></IconButton>
                    </Box>
                </Grid>

                {/* Explore links */}
                <Grid size={{xs:12,md:3}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>EXPLORE</Typography>
                    {['About Hotel', 'Pricing', 'Hotel Staff', 'Latest News', 'Contact Us'].map((text) => (
                        <Typography key={text} variant="body2" sx={{mb:1}}>
                            <Link to={'/'} style={{ color: '#aaa'}}>{text}</Link>
                        </Typography>
                    ))}
                </Grid>

                {/* Contact Info */}
                <Grid size={{xs:12,md:3}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>CONTACT</Typography>
                    <Typography variant="body2" sx={{ color: '#aaa', mb: 2 }}>
                        7631 Sabina Park, 115 Devon Isle,<br />Louisiana, USA
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        (+1) 987 654 3210
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>info@domain.com</Typography>
                </Grid>

                {/* Newsletter */}
                <Grid size={{xs:12,md:3}}>
                    <Box
                        sx={{
                            backgroundColor: '#1a1a1a',
                            borderRadius: 3,
                            p: 3,
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            NEWSLETTER
                        </Typography>

                        <TextField
                            placeholder="Ex. info@domain.com"
                            fullWidth
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SendIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                disableUnderline: false,
                                sx: { color: '#ccc' },
                            }}
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-input': { color: '#ccc' },
                                '& .MuiInput-underline:before': { borderBottomColor: '#444' },
                                '& .MuiInput-underline:hover:before': { borderBottomColor: '#666' },
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox defaultChecked sx={{ color: '#ccc' }} />}
                            label="I agree to all terms and policies"
                            sx={{ color: '#ccc' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
