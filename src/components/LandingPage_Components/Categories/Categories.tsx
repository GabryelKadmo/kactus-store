// import React from "react";
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
            // currentPrice: "R$ 169,99",
            // oldPrice: "R$ 399,99",
            // installments: "12x de R$ 17,99",
            // freeShipping: "Frete grátis",
        },
        {
            image: Masculinos,
            title: "Air Jordan Pink",
            // currentPrice: "R$ 169,00",
            // oldPrice: "R$ 479,01",
            // installments: "12x de R$ 17,99",
            // freeShipping: "Frete grátis",
        },
        {
            image: Femininos,
            title: "Air Jordan Blue",
            // currentPrice: "R$ 169,99",
            // oldPrice: "R$ 429,99",
            // installments: "12x de R$ 17,99",
            // freeShipping: "Frete grátis",
        },
        {
            image: Fitness,
            title: "Air Force One White",
            // currentPrice: "R$ 159,00",
            // oldPrice: "R$ 439,99",
            // installments: "12x de R$ 16,11",
            // freeShipping: "Frete grátis",
        },
        {
            image: Meias,
            title: "Meias",
            // currentPrice: "R$ 399,99",
            // oldPrice: "R$ 499,99",
            // installments: "10x de R$ 39,99",
            // freeShipping: "Frete grátis",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <p className="text-4xl font-[Poppins] font-semibold w-2/3 mb-4">CATEGORIAS</p>
            <div className="flex items-center justify-center mt-10 mb-28 w-2/3">
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                            >
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div className="flex justify-center items-center min-w-72 h-64">
                                        <img src={item.image} alt={item.title} className="object-cover" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
