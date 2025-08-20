import StarIcon from '@mui/icons-material/Star';
import { Box, Typography, Avatar, Divider } from "@mui/material";

function FeedbackCard({ item }) {
    
    return (
        <Box
            sx={{
                p: 3,
                mt: 2,
                borderRadius: "16px",
                backgroundColor: "#e9f0ec",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                maxWidth: "600px",
                mx: "auto",
                textAlign: "left",
                cursor:'grab'
            }}
        >

            <Box sx={{ display: "flex", mb: 2, gap: 0.2 }}>
                {Array.from({ length: item.rating }).map((_,i) => (
                    <span key={i}>
                        <StarIcon sx={{ color: "#ffd000ff", fontSize: 23 }} />
                    </span>
                ))}
            </Box>


            <Typography variant="body1" sx={{ mb: 3, color: "var(--gray-color)" }}>
                "{item.feedback}"
            </Typography>

            <Divider />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                <Avatar src={item.image} alt={item.name} sx={{ width: 65, height: 65 }} />
                <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "800" }}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--gray-color)" }}>
                        {item.role}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default FeedbackCard;
