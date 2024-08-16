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
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <p className="text-4xl font-[Poppins] font-semibold w-2/3">MAIS VENDIDOS</p>
            <div className="flex items-center justify-center mt-10 mb-28 w-2/3">
                <Carousel className="w-full">
                    <CarouselContent className="flex">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none w-1/2 p-2 sm:w-1/4 sm:p-4 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <div className="flex justify-center items-center h-36 sm:h-52">
                                        <img src={item.image} alt={item.title} className="object-contain h-full" />
                                    </div>
                                    <div className="p-2 sm:p-4">
                                        <h3 
                                            className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 truncate w-full" 
                                            style={{ maxWidth: '12rem' }} 
                                            title={item.title}
                                        >
                                            {item.title}
                                        </h3>
                                        <div className='flex flex-row gap-1 sm:gap-2'>
                                            <p className="text-sm sm:text-lg font-semibold">{item.currentPrice}</p>
                                            <p className="text-xs sm:text-sm text-red-500 line-through">{item.oldPrice}</p>
                                        </div>
                                        <p className="text-xs sm:text-sm font-normal">{item.installments}</p>
                                        <p className="text-green-500 text-xs sm:text-md font-semibold">{item.freeShipping}</p>
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
