import { Box } from "@mui/material";
import HeroSection from "../Components/HomePage/HeroSection";
import FormCheck from "../Components/HomePage/FormCheck";
import AboutSection from "../Components/HomePage/AboutSection";
import MarqueeBanner from "../Components/MarqueeBanner/MarqueeBanner ";
import VideoSection from "../Components/HomePage/VideoSection";
import DiscountSection from "../Components/HomePage/DiscountSection";
import FeedbackSection from "../Components/HomePage/FeedbackSection";
import RoomsSection from "../Components/HomePage/RoomsSection";
import Services from "../Components/HomePage/Services";
import FoodDrinkSection from "../Components/HomePage/FoodDrinkSection";
import ExpertStaff from "../Components/HomePage/StaffSection";
import Logos from "../Components/HomePage/Logos";
import HotelNews from "../Components/HomePage/HotelNews";
import Gallary from "../Components/HomePage/Gallary";

export default function HomePage() {
    return (
        <>
            <Box>
                <HeroSection />
                <FormCheck />
                <AboutSection />
                <MarqueeBanner />
                <RoomsSection />
                <Services />
                <VideoSection />
                <FoodDrinkSection />
                <DiscountSection />
                <FeedbackSection />
                <ExpertStaff />
                <Logos/>
                <HotelNews/>
                <Gallary/>
            </Box>
        </>
    )
}
