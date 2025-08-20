import { Container, Grid, Box, } from '@mui/material';
import StaffCard from './StaffCard';

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
        <Container maxWidth='xl' sx={{ height: { xs: 1800, md: 'auto' } }}>
            <Box sx={{ pt: 8, backgroundColor: 'var(--primary-color)', height: 520 }}>
                <Box sx={{ textAlign: "center", mb: 6 }}>

                    {/* ///////////////////////////header/////////////////////// */}

                    <span className='about-span'>
                        Fixyland Staff
                    </span>
                    <h2 style={{ fontWeight: '800', fontSize: '35px', margin: "10px 0", color: 'white' }}>
                        Expert Staff Persons
                    </h2>
                </Box>
                
                {/* ///////////////////////////grid-content/////////////////////// */}
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
    );
};

export default StaffSection;
