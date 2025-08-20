import { Box, Typography, Grid, Avatar, Stack, Card, CardMedia, Container } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Btn from '../Btn/Btn';
import Reveal from '../FramerMotion/Reveal ';

const features = [
    {
        title: "Free Breakfast, Tea & Coffee",
        description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.",
    },
    {
        title: "Quality Foods & Drink",
        description: "It uses a dictionary of over Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum text.",
    },
    {
        title: "Restorent & Bar",
        description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
];

export default function FoodDrinkSection() {
    return (
        <Container maxWidth={false} disableGutters sx={{ width: "90%", mt: 20 }}>

            <Grid container spacing={2}>

                {/* //////////////////header/////////////////// */}

                <Grid size={{ sx: 12, md: 6 }}>
                    <span className='about-span'>
                        Food & Drink
                    </span>
                    <h2 style={{ fontWeight: '800', fontSize: '40px', margin: "10px 0" }}>
                        Quality Food And Drink Your Trip Are Enjoyable
                    </h2>
                    <Typography sx={{ color: 'var(--gray-color)', my: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at tellus feugiat congue quis ut nunc.
                        Semper ac dolor vitae accumsan. interdum hendrerit lacinia.
                    </Typography>


                    {features.map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 2, justifyContent: "center" }}>
                            <CheckCircleOutlineOutlinedIcon sx={{ color: "var(--primary-color)", backgroundColor: "#c0ddd2", borderRadius: "50%", mt: 1 }} />
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: "20px" }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'var(--gray-color)' }}>
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}

                    <Box sx={{ my: 5 }}>
                        <Btn btnContent="Learn More Hotels" bgColor="var(--primary-color)" hoverBgColor="black" hoverTextColor="white" btnColor="white" />
                    </Box>
                </Grid>

                {/* //////////////////content/////////////////// */}
                <Grid size={{ sx: 6, md: 6 }}>
                    {/* /////////motion animation  ////////////////// */}
                    <Reveal type='slide-right'>
                        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: "center", position: "relative" }}>
                            <Grid size={{ xs: 6, md: 6 }} sx={{ textAlign: "center", mt: 10 }}>
                                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image="/src/assets/Images/quality-food-1.jpg"
                                        alt="Food"
                                    />
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 6, md: 6 }} sx={{ mt: -5 }}>
                                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image="/src/assets/Images/quality-food-2.jpg"
                                        alt="Juice"
                                    />
                                </Card>
                            </Grid>

                            <Box sx={{ mt: 2, ml: 2, backgroundColor: "white", boxShadow: '1px 1px 1px #c1c1c1ff', p: 2, borderRadius: 2, textAlign: "center", position: "absolute", bottom: 50, right: 180, animation: 'animatedusers 3s linear infinite' }}>
                                <Typography variant="body1" sx={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                                    Popular Client
                                </Typography>
                                <Stack direction="row" spacing={-1.5} mt={1}>
                                    <Avatar src="https://pusinfotech.com/html/fixyland/main-file/assets/images/quality-food/user-4.png" sx={{ width: 45, height: 56 }} />
                                    <Avatar src="https://pusinfotech.com/html/fixyland/main-file/assets/images/quality-food/user-1.png" sx={{ width: 45, height: 56 }} />
                                    <Avatar src="https://pusinfotech.com/html/fixyland/main-file/assets/images/quality-food/user-3.png" sx={{ width: 45, height: 56 }} />
                                    <Avatar src="https://pusinfotech.com/html/fixyland/main-file/assets/images/testimonial/testimonial-user-2.png" sx={{ width: 45, height: 56 }} />
                                    <Avatar src="https://pusinfotech.com/html/fixyland/main-file/assets/images/testimonial/testimonial-user-1.png" sx={{ width: 45, height: 56 }} />
                                </Stack>
                            </Box>
                        </Grid>
                    </Reveal>
                </Grid>
            </Grid>
        </Container>
    );
}
