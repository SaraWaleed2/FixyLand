import { Box } from "@mui/material";
import MarqueeRow from "./MarqueeRow";

const MaqueeBanner = () => {
    return (
        <Box sx={{ pt: 15, backgroundColor: "var(--bg-color)" }}>
            <MarqueeRow
                direction="left"
                bgColor="var(--primary-color)"
                skew={2.5}
                zIndex={2}
            />
            <MarqueeRow
                direction="right"
                bgColor="black"
                skew={-5}
                zIndex={1}
                top={-115}
            />
        </Box>
    );
};

export default MaqueeBanner;
