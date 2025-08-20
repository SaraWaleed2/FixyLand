import { Typography, Grid, Container, Box, Avatar } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import './HomeStyle.css';

function AboutSection() {
    const aboutItems = [
        "24 -Hours Emergency Service",
        "It is a Long Established fact",
        "Comfortable Atmosphere",
        "Flexible and Cost-Effective",
        "Something by accident",
        "Get Free Consultation Anytime",
    ]
    const aboutItemsList = aboutItems.map((item, i) => {
        return (
            <Grid key={i} size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <CheckCircleOutlineOutlinedIcon sx={{ color: "var(--primary-color)", backgroundColor: "#c0ddd2", borderRadius: "50%" }} />
                <Typography variant="body1" sx={{ color: "var(--gray-color)" }}>{item}</Typography>
            </Grid>
        )
    })
    return (
        <Container maxWidth='xl' sx={{ backgroundColor: "var(--bg-color)", pt: 15 }}>
            <Grid container>

            {/* ////////////////Grid-images/////////////////// */}

                <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
                    
                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <img src="/src/assets/Images/about-1-1.jpg" alt="" className='about-img' style={{ borderRadius: "20px" }} />
                        <img src="/src/assets/Images/about-shape.png" className='about-circle' />
                        <img src="https://pusinfotech.com/html/fixyland/main-file/assets/images/about/batch.png" className='circle-rotate' />
                        <img src="/src/assets/Images/star.png" className='star-icon' />
                    </Box>

                </Grid>

            {/* ////////////////Grid-content/////////////////// */}

                <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', px: 5 ,mt:{xs:7} }}>
                    <span className='about-span'>About Fixyland</span>
                    <h2 className='about-title'>
                        World Class Luxury Hotel and<br />
                        Resort Near City
                    </h2>
                    <Typography variant="body1" sx={{ mb: 5, color: "var(--gray-color)" }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.
                    </Typography>

                    <Grid container spacing={2}>
                        {aboutItemsList}
                    </Grid>

                    <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar alt="CEO & Founder" src="https://pusinfotech.com/html/fixyland/main-file/assets/images/about/user.png"  sx={{ width: 56, height: 56 }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Robert L. Robinson
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                CEO & Founder
                            </Typography>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutSection;