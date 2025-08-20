import Slider from "./Slider";
import FeedbackCard from "./FeedbackCard";

const feedbacks = [
    {
        name: "Bella Andrew", role: "Customer", image: "https://i.pravatar.cc/100?img=5", rating: 4, feedback: `Special treat to dine, It was wow experience food was really delicious!
        Outstanding dinner made by Master chef, food experience was unforgetable!` },
    {
        name: "John Smith", role: "Traveler", image: "https://i.pravatar.cc/100?img=12", rating: 4, feedback: `Special treat to dine, It was wow experience food was really delicious!
        Outstanding dinner made by Master chef, food experience was unforgetable!`},
    {
        name: "Sophia Lee", role: "Guest", image: "https://i.pravatar.cc/100?img=8", rating: 5, feedback: `Special treat to dine, It was wow experience food was really delicious!
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
