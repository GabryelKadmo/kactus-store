import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselItem1 from "./assets/images/CarouselImage1.png"
import CarouselItem2 from "./assets/images/CarouselImage2.png"

export default function TopCarousel() {
    return (
        <div className="flex items-center justify-center mt-10 mb-28 overflow-hidden">
            <Carousel className="w-[95%] sm:w-4/5 md:w-2/3">
                <CarouselContent className="flex">
                    <CarouselItem className="flex-none w-full">
                        <img className="rounded-lg w-full h-auto" src={CarouselItem1} alt="Imagem do carrossel" />
                    </CarouselItem>
                    <CarouselItem className="flex-none w-full">
                        <img className="rounded-lg w-full h-auto" src={CarouselItem2} alt="Imagem do carrossel" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
