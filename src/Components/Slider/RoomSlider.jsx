import RoomCard from "./RoomCard";
import Slider from "./Slider";

const rooms = [
    {
        title: "Deluxe Rooms",
        price: "$800",
        image: "https://pusinfotech.com/html/fixyland/main-file/assets/images/instagram/image-1.jpg",
        guests: 2,
        beds: 2,
        baths: 1,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
        title: "Junior Rooms",
        price: "$400",
        image: "https://pusinfotech.com/html/fixyland/main-file/assets/images/instagram/image-2.jpg",
        guests: 2,
        beds: 2,
        baths: 1,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
        title: "Family Rooms",
        price: "$600",
        image: "https://pusinfotech.com/html/fixyland/main-file/assets/images/instagram/image-3.jpg",
        guests: 2,
        beds: 2,
        baths: 1,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
        title: "Deluxe Rooms",
        price: "$800",
        image: "https://pusinfotech.com/html/fixyland/main-file/assets/images/instagram/image-4.jpg",
        guests: 2,
        beds: 2,
        baths: 1,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
        title: "Junior Rooms",
        price: "$400",
        image: "https://pusinfotech.com/html/fixyland/main-file/assets/images/instagram/image-5.jpg",
        guests: 2,
        beds: 2,
        baths: 1,
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
];

function RoomSlider() {
    return (
        <Slider
            items={rooms}
            renderItem={(room) => <RoomCard room={room} />}
            breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        />
    );
}

export default RoomSlider;
