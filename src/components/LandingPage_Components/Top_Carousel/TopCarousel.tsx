import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselItem1 from "./assets/images/CarouselImage1.png";
import CarouselItem2 from "./assets/images/CarouselImage2.png";
import CarouselItem3 from "./assets/images/CarouselImage3.png";

export default function TopCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 10000);

        return () => clearInterval(interval);
    }, [totalItems]);

    return (
        <div className="flex items-center justify-center mt-10 mb-28 overflow-hidden">
            <Carousel className="w-[95%] sm:w-4/5 md:w-2/3">
                <CarouselContent
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    <CarouselItem className="flex-none w-full">
                        <img className="rounded-lg w-full h-auto" src={CarouselItem1} alt="Imagem do carrossel" />
                    </CarouselItem>
                    <CarouselItem className="flex-none w-full">
                        <img className="rounded-lg w-full h-auto" src={CarouselItem2} alt="Imagem do carrossel" />
                    </CarouselItem>
                    <CarouselItem className="flex-none w-full">
                        <img className="rounded-lg w-full h-auto" src={CarouselItem3} alt="Imagem do carrossel" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious onClick={() => setActiveIndex((activeIndex - 1 + totalItems) % totalItems)} />
                <CarouselNext onClick={() => setActiveIndex((activeIndex + 1) % totalItems)} />
            </Carousel>
        </div>
    );
}
