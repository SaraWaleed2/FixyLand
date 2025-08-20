import { faBath, faBed, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import BtnLink from "../Btn/BtnLink";

function RoomCard({ room }) {
    const roomData = [
        { icon: <FontAwesomeIcon icon={faUsers} style={{ color: "var(--primary-color)" }} />, info: `${room.guests} Guests` },
        { icon: <FontAwesomeIcon icon={faBed} style={{ color: "var(--primary-color)" }} />, info: `${room.beds} Beds` },
        { icon: <FontAwesomeIcon icon={faBath} style={{ color: "var(--primary-color)" }} />, info: `${room.baths} Baths` },
    ];

    const roomDataList = roomData.map((room, i) => {
        return (
            <Box key={i} sx={{ display: "flex", gap: 1 }}>
                {room.icon}
                <Typography variant="body2" sx={{ mb: 1, color: "var(--gray-color)" }}>
                    {room.info}
                </Typography>
            </Box>
        )
    })
    return (
        <Box sx={{
            borderRadius: 3, overflow: "hidden", cursor: "grab",
            transition: "all 0.5s ease-in-out",
            '&:hover .room': {
                transform: "scale(1.05) rotate(-1deg)",
            }
        }}>
            <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
                <Box
                    className="room"
                    component="img"
                    src={room.image}
                    alt={room.title}
                    sx={{
                        width: "100%",
                        height: 350,
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
                    {room.price} / Night
                </Box>
            </Box>

            <Box sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                    {room.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 4 }}>
                    {roomDataList}
                </Box>
                <Typography variant="subtitle1" sx={{ mb: 1, color: "var(--gray-color)", my: 2 }}>
                    {room.desc}
                </Typography>
                <BtnLink btnContent='Read More' />
            </Box>
        </Box>
    );
}

export default RoomCard;
