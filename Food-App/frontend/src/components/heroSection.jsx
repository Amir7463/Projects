import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Biryani from '../assets/biryani.jpg';
import Burger from '../assets/burger.jpg';
import Chaumin from '../assets/chaumin.jpg';
import Chaumin1 from '../assets/chicken-chaumin.jpg';
import Roll from '../assets/chicken-roll.jpg';
import Chap from '../assets/chiken-chap.jpg';
import fririce from '../assets/fririce.jpg';
import Kofta from '../assets/kofta.jpg';
import Lolipop from '../assets/lolipop.png';
import paratha from '../assets/paratha.jpg';
import menturian from '../assets/menturian.jpg';

const items = [
    { name: "Biryani", img: Biryani },
    { name: "Burger", img: Burger },
    { name: "Chaumin", img: Chaumin },
    { name: "Chicken Roll", img: Roll },
    { name: "Chaumin", img: Chaumin1 },
    { name: "Menturian", img: menturian },
    { name: "Chicken Chap", img: Chap },
    { name: "Fried Rice", img: fririce },
    { name: "Kofta", img: Kofta },
    { name: "Menturian", img: menturian },
    { name: "Lolipop", img: Lolipop },
    { name: "Paratha", img: paratha },
    { name: "Menturian", img: menturian },
];

export default function HeroSection() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full px-4 py-8 max-w-6xl mx-auto shadow-md my-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold font-sans text-orange-500">What's on your mind?</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-gray-100 rounded-full p-2 hover:bg-gray-300 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
            >
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[100px] text-center transform transition-transform duration-300 hover:scale-110">
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-full"
                        />
                        <p className="mt-2 text-sm font-medium">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}