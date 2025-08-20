import { Container, Grid, Box, } from '@mui/material';
import StaffCard from './StaffCard';
import Reveal from '../FramerMotion/Reveal ';

function StaffSection() {
    const staff = [
        {
            name: "Michael Dean",
            role: "Chef Master",
            imageSrc: "https://pusinfotech.com/html/fixyland/main-file/assets/images/staff/staff-1.jpg"
        }, {
            name: "Arnold Taylor",
            role: "Room Clean",
            imageSrc: "https://pusinfotech.com/html/fixyland/main-file/assets/images/staff/staff-2.jpg"
        }, {
            name: "Michael Dean",
            role: "Assistant Chef",
            imageSrc: "https://pusinfotech.com/html/fixyland/main-file/assets/images/staff/staff-3.jpg"
        }, {
            name: "Michael Dean",
            role: "Supervisor",
            imageSrc: "https://pusinfotech.com/html/fixyland/main-file/assets/images/staff/staff-4.jpg"
        }
    ]

    return (
        <Box sx={{ backgroundColor: 'var(--primary-color)' }}>
            <Container sx={{ height: { xs: 1800, md: 'auto' } }}>
                {/* /////////motion animation////////////////// */}
                <Box sx={{ pt: 8, backgroundColor: 'var(--primary-color)', height: 520 }}>
                    <Reveal>
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <span className='about-span'>
                                Fixyland Staff
                            </span>
                            <h2 style={{ fontWeight: '800', fontSize: '35px', margin: "20px 0", color: 'white' }}>
                                Expert Staff Persons
                            </h2>
                        </Box>
                    </Reveal>
                    <Grid container spacing={2} justifyContent="space-between">
                        {
                            staff.map((staff, i) => {
                                return (
                                    <Grid item size={{ xs: 12, md: 3 }} key={i}>
                                        <StaffCard
                                            name={staff.name}
                                            role={staff.role}
                                            imageSrc={staff.imageSrc}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default StaffSection;
