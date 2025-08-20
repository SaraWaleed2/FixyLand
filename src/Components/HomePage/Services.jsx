import { Box, Container, Grid, Typography } from "@mui/material";
import Btn from "../Btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle, faHotTub, faSwimmer, faSpa } from "@fortawesome/free-solid-svg-icons";
import Reveal from "../FramerMotion/Reveal ";

function Services() {
    const services = [
        {
            title: "Fitness Center",
            description: "lorem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse cteturs adipiscin",
            icon: faBicycle,
            bg: '/Images/services-1.jpg'
        },
        {
            title: "Jacuzzi",
            description: "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse cteturs adipiscin",
            icon: faHotTub,
            bg: 't/Images/services-2.jpg'
        },
        {
            title: "Swimming Pool",
            description: "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse cteturs adipiscin",
            icon: faSwimmer,
            bg: '/Images/services-3.jpg'
        },
        {
            title: "SPA Treatments",
            description: "orem npsum dolor sit conse cteturs adipisciorem npsum dolor sit conse cteturs adipiscin",
            icon: faSpa,
            bg: '/Images/services-4.jpg'
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 8, mt: 7 }}>
            <Grid container spacing={{ xs: 10, md: 0 }}>

                {/* /////////////////////////grid-info//////////////// */}

                <Grid size={{ sx: 12, md: 6 }}>
                    {/* /////////motion animation for btn ////////////////// */}
                    <Reveal type="slide-left">
                        <Box sx={{ width: "80%", mx: "auto" }}>
                            <span className="about-span">HOTEL SERVICES</span>
                            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: 35, my: 3 }}>
                                Get The Best Hotel<br />
                                Fixyland Services
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: "var(--gray-color)" }}>
                                Nulla vitae ex nunc. Morbi quis purus convallis, fermentum hioon metus volutpat design sodales purus. Nunc quis an mauris etion eros vulputate mattis Nulla vitae ex nunc.                        </Typography>
                            <Btn btnContent="View All" bgColor="var(--primary-color)" hoverBgColor="black" hoverTextColor="white" btnColor="white" />
                        </Box>
                    </Reveal>
                </Grid>

                {/* /////////////////////////grid-categories//////////////// */}

                <Grid size={{ sx: 12, md: 6 }}>
                    <Grid container spacing={1} >
                        {services.map((service, index) => (
                            <Grid size={{ sx: 12, md: 6 }} key={index}>
                                <Box
                                    className='services'
                                    sx={{
                                        position: "relative",
                                        py: 5,
                                        px: 4,
                                        borderRadius: 2,
                                        boxShadow: 3,
                                        height: "100%",
                                        width: '90%',
                                        backgroundColor: "#fff",
                                        color: index === 0 ? "#fff" : "#000",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                        overflow: "hidden",
                                        transition: "0.3s all ease",
                                        zIndex: 1,
                                        "&:hover": {
                                            color: "#fff",
                                        },
                                        "&::before": {
                                            content: "''",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundImage: `url(${service.bg})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            opacity: index === 0 ? 1 : 0,
                                            transition: "0.3s all ease",
                                            zIndex: -2,
                                        },
                                        "&:hover::before": {
                                            opacity: 1,
                                        },
                                        "&::after": {
                                            content: "''",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "#1f8f6ac4",
                                            opacity: index === 0 ? 1 : 0,
                                            transition: "opacity 0.4s ease",
                                            zIndex: -1,
                                        },
                                        "&:hover::after": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <FontAwesomeIcon
                                        className="service-icon"
                                        icon={service.icon}
                                        style={{
                                            fontSize: 60,
                                            color: index === 0 ? 'white' : "#000",
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 700, my: 1.5 }}>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" className="service-desc" sx={{ color: index === 0 ? "white" : "var(--gray-color)" }}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", mt: 5 }}>
                <span style={{ fontWeight: 400, color: 'var(--gray-color)' }}>Call us Today: (+1) 987 654 3210 <span style={{ margin: '0 40px' }}>OR</span> Email us: info@domain.com</span>
            </Box>
        </Container>
    );
}

export default Services;
