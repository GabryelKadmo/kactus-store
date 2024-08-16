// import React from "react";
import tenisPreto1 from './assets/images/TenisPreto1.png';
import tenisRosa1 from './assets/images/TenisRosa1.png';
import tenisazul1 from './assets/images/TenisAzul1.png';
import tenisBranco1 from './assets/images/TenisBranco1.png';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function MostSoldItems() {
    const items = [
        {
            image: tenisPreto1,
            title: "Wave New Prophecy",
            currentPrice: "R$ 169,99",
            oldPrice: "R$ 399,99",
            installments: "12x de R$ 17,99",
            freeShipping: "Frete grátis",
        },
        {
            image: tenisRosa1,
            title: "Air Jordan Pink",
            currentPrice: "R$ 169,00",
            oldPrice: "R$ 479,01",
            installments: "12x de R$ 17,99",
            freeShipping: "Frete grátis",
        },
        {
            image: tenisazul1,
            title: "Air Jordan Blue",
            currentPrice: "R$ 169,99",
            oldPrice: "R$ 429,99",
            installments: "12x de R$ 17,99",
            freeShipping: "Frete grátis",
        },
        {
            image: tenisBranco1,
            title: "Air Force One White",
            currentPrice: "R$ 159,00",
            oldPrice: "R$ 439,99",
            installments: "12x de R$ 16,11",
            freeShipping: "Frete grátis",
        },
        // {
        //     image: "/path-to-image5.jpg",
        //     title: "Produto 5",
        //     currentPrice: "R$ 399,99",
        //     oldPrice: "R$ 499,99",
        //     installments: "10x de R$ 39,99",
        //     freeShipping: "Frete grátis",
        // },
    ];
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <p className="text-4xl font-[Poppins] font-semibold w-2/3 mb-4">MAIS VENDIDOS</p>
            <div className="flex items-center justify-center mt-10 mb-28 w-2/3">
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        {items.map((item, index) => (
                            <CarouselItem 
                                key={index} 
                                className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                            >
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div className="flex justify-center items-center min-w-56 h-52">
                                        <img src={item.image} alt={item.title} className="object-cover" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <div className='flex flex-row gap-2'>
                                            <p className="text-lg font-semibold">{item.currentPrice}</p>
                                            <p className="text-sm text-red-500 line-through">{item.oldPrice}</p>
                                        </div>
                                        <p className="text-sm font-normal">{item.installments}</p>
                                        <p className="text-green-500 text-md font-semibold">{item.freeShipping}</p>
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
