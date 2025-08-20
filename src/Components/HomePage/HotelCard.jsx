import { Box, Grid, Typography } from "@mui/material"
import Btn from "../Btn/Btn"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

function HotelCard() {
    const news = [
        {
            imageUrl: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/blog/blog-1.jpg',
            category: 'Hotel',
            title: 'Most Expensive Hotel Rooms In New York',
            desc: 'Perspiciatis omnisite voluptat accusantium doloreque laudantium, totam aperiam.',
        },
        {
            imageUrl: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/blog/blog-2.jpg',
            category: 'Room',
            title: 'Our New Miami Beach Hotel Is Open',
            desc: 'Perspiciatis omnisite voluptat accusantium doloreque laudantium, totam aperiam.',
        },
        {
            imageUrl: 'https://pusinfotech.com/html/fixyland/main-file/assets/images/blog/blog-3.jpg',
            category: 'Resort',
            title: 'Guests Offers Exclusive Facilities To Services',
            desc: 'Perspiciatis omnisite voluptat accusantium doloreque laudantium, totam aperiam.',
        }
    ]

    const newsIcon = [
        { icon: <CalendarTodayIcon sx={{ color: "var(--primary-color)", fontSize: 18 }} />, info: "January 16, 2024" },
        { icon: <PersonIcon sx={{ color: "var(--primary-color)", fontSize: 18 }} />, info: "Admin" },
    ];

    return (
        <Grid container justifyContent={"center"} spacing={2}>
            {
                news.map((item, i) => {
                    return (
                        <Grid size={{ sx: 12, md: 3.5 }} key={i}>
                            <Box sx={{
                                borderRadius: 3, overflow: "hidden",
                                transition: "all 0.5s ease-in-out",
                                '&:hover .room': {
                                    transform: "scale(1.05) rotate(-1deg)",
                                }
                            }}>
                                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
                                    <Box
                                        className="room"
                                        component="img"
                                        src={item.imageUrl}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: 250,
                                            objectFit: "cover",
                                            borderRadius: 3,
                                            overflow: "hidden",
                                            transition: "all 0.5s ease-in-out",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 25,
                                            left: 25,
                                            background: "var(--primary-color)",
                                            color: "white",
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 1,
                                        }}
                                    >
                                        {item.category}
                                    </Box>
                                </Box>

                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: "700", mb: 2 ,fontSize:25}}>
                                        {item.title}
                                    </Typography>
                                    <Box sx={{ display: "flex", gap: 4 }}>
                                        {newsIcon.map((item, i) => (
                                            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                {item.icon}
                                                <Typography variant="body2">{item.info}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Typography variant="subtitle1" sx={{ mb: 1, color: "var(--gray-color)", my: 2 }}>
                                        {item.desc}
                                    </Typography>
                                    <Btn btnContent="Read More" bgColor="var(--primary-color)" hoverBgColor="black" hoverTextColor="white" btnColor="white" btnWidth='230' />
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }

        </Grid>
    )
}

export default HotelCard
