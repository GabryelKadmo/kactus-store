import KitsPromocionais from './assets/images/KitsPromocionais.png';
import Masculinos from './assets/images/Masculinos.png';
import Femininos from './assets/images/Femininos.png';
import Fitness from './assets/images/Fitness.png';
import Meias from './assets/images/Meias.png';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Categories() {
    const items = [
        {
            image: KitsPromocionais,
            title: "Kits Promocionais",
        },
        {
            image: Masculinos,
            title: "Air Jordan Pink",
        },
        {
            image: Femininos,
            title: "Air Jordan Blue",
        },
        {
            image: Fitness,
            title: "Air Force One White",
        },
        {
            image: Meias,
            title: "Meias",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <p className="text-4xl font-[Poppins] font-semibold w-2/3 mt-20">CATEGORIAS</p>
            <div className="flex items-center justify-center mt-10 mb-28 w-2/3">
                <Carousel className="w-full">
                    <CarouselContent className="flex ">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none w-1/2 p-2 sm:w-1/4 sm:p-4"
                            >
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                    <div className="flex justify-center items-center h-36 sm:h-64">
                                        <img src={item.image} alt={item.title} className="object-cover" />
                                    </div>
                                    <div className="p-2 sm:p-4 text-center">
                                        <h3 
                                            className="text-base sm:text-xl font-bold mb-1 sm:mb-2 truncate w-full" 
                                            style={{ maxWidth: '12rem' }}
                                            title={item.title}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
