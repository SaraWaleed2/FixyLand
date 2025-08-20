import Slider from "./Slider";
import FeedbackCard from "./FeedbackCard";

const feedbacks = [
    {
        name: "Bella Andrew", role: "Customer", image: "/src/assets/Images/user2.jpg", rating: 4, feedback: `Special treat to dine, It was wow experience food was really delicious!
        Outstanding dinner made by Master chef, food experience was unforgetable!` },
    {
        name: "John Smith", role: "Traveler", image: "/src/assets/Images/user3.jpg", rating: 4, feedback: `Special treat to dine, It was wow experience food was really delicious!
        Outstanding dinner made by Master chef, food experience was unforgetable!`},
    {
        name: "Sophia Lee", role: "Guest", image: "/src/assets/Images/user4.jpg", rating: 5, feedback: `Special treat to dine, It was wow experience food was really delicious!
        Outstanding dinner made by Master chef, food experience was unforgetable!` },
];

function FeedbackSlider() {
    return (
        <Slider
            items={feedbacks}
            renderItem={(item) => <FeedbackCard item={item} />}
        />
    );
}

export default FeedbackSlider;
