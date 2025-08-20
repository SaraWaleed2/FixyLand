import { Box, IconButton, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../../Btn/Btn";

function FixedHeader({ scrolled }) {
    const [navLinks, setNavLinks] = useState([
        { name: 'Home', path: '/' },
        { name: 'Pages', path: '/' },
        { name: 'Rooms & Suites', path: '/' },
        { name: 'Services', path: '/' },
        { name: 'Blog', path: '/' },
        { name: 'Contact', path: '/' }
    ]);

    const navLinksList = navLinks.map((link, i) => {
        return (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }} className="nav-list">
                <Link to={link.path}>
                    <span className="nav-links" style={{ color: scrolled ? "black" : 'white' }}>{link.name}</span>
                </Link>
                {i !== 5 && <ExpandMoreIcon className="expand-icon" sx={{ fontSize: '1.2rem', verticalAlign: 'middle' }} />}
            </div>
        )
    })

    return (
        <>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }} className="fixed-header">

                {/* //////////////////////////logo////////////////////////// */}

                <Box className='logo-box' sx={{ p: 1.4, backgroundColor: 'white' }}>
                    <img
                        src="/Images/logo.svg"
                        alt="Fixyland Logo"
                        className="logo"
                    />
                </Box>

                {/* //////////////////////////links////////////////////////// */}

                <Box
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                        gap: 4
                    }}
                >
                    {navLinksList}
                </Box>
                {/* //////////////////////////icons////////////////////////// */}

                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        gap: 2.5,
                        px: 2.5
                    }}
                >
                    <IconButton
                        sx={{
                            backgroundColor: "#e1e1e1a1",
                            color: scrolled ? "black" : "white",
                            p: 1.5,
                            transition: "0.7s",
                            "&:hover": { backgroundColor: "#e1e1e1c5", transform: "scale(0.9)" }
                        }}
                    >
                        <SearchIcon />
                    </IconButton>

                    <IconButton
                        sx={{
                            backgroundColor: "#e1e1e1a1",
                            color: scrolled ? "black" : "white",
                            p: 1.5,
                            transition: "0.7s",
                            "&:hover": { backgroundColor: "#e1e1e1c5", transform: "scale(0.9)" }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {
                        scrolled
                            ? <Btn btnContent='our services' bgColor='var(--secondary-color)' hoverBgColor='black' hoverTextColor='white' />
                            : <Btn btnContent='book your stay' />
                    }
                </Box>
                {/* //////////////////////////menu////////////////////////// */}

                <Box sx={{ display: { xs: 'flex', sm: 'none' }, pr: 2 }}>
                    <IconButton
                        sx={{
                            backgroundColor: "#e1e1e1a1",
                            color: scrolled ? "black" : "white",
                            p: 1.5,
                            transition: "0.7s",
                            "&:hover": { backgroundColor: "#e1e1e1c5", transform: "scale(0.9)" }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

            </Toolbar>
        </>

    )
}

export default FixedHeader
