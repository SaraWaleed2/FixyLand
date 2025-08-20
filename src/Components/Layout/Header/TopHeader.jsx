import { useEffect, useState } from 'react';
import { AppBar, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import FixedHeader from './FixedHeader';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar
        elevation={0}
            className='top-header'
            sx={{
                position: 'fixed',
                zIndex: 1300,
                backgroundColor: scrolled ? 'white' : 'transparent',
                color: scrolled ? 'black' : 'white',
                transition: 'all 0.4s ease',
            }}
        >
            {!scrolled && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 4,
                        py: 1.5,
                        backgroundColor: 'var(--primary-color)',
                        fontSize: '14px',
                    }}
                >
                    <Box sx={{ display: { xs: 'none', md: "flex" }, justifyContent: "center", alignItems: "center", gap: 6 }}>
                        <span className='info-style'>7631 Sabina Park, 115 Devon Isle, USA</span>
                        <span className='info-style'>info@domain.com</span>
                        <span className='info-style'>(+1) 987 654 3210</span>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3, fontSize: '18px', justifyContent: "center", alignItems: "center", margin: { xs: "auto", md: "0" } }}>
                        <Link to={'/'} className='nav-icons'><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to={'/'} className='nav-icons'><FontAwesomeIcon icon={faXTwitter} /></Link>
                        <Link to={'/'} className='nav-icons'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to={'/'} className='nav-icons'><FontAwesomeIcon icon={faBehance} /></Link>
                    </Box>
                </Box>
            )}

            <FixedHeader scrolled={scrolled}/>
        </AppBar>
    );
};

export default TopHeader;
