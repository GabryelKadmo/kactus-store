import MostSoldItems from "@/components/LandingPage_Components/MostSoldItems/MostSoldItems"
import TopCarousel from "../../components/LandingPage_Components/Top_Carousel/TopCarousel"
import Categories from "@/components/LandingPage_Components/Categories/Categories"
// import LandingPageImage1 from "./assets/images/LPimage1.png"
import LandingPageImage2 from "./assets/images/LPimage2.png"
// import LandingPageImage3 from "./assets/images/Leonardo_Phoenix_create_a_banner_for_a_shoe_store_where_the_pr_3.jpg"

export default function LandingPage() {
    return (
        <>
            <TopCarousel />
            <MostSoldItems />
            <div className="flex items-center justify-center w-full">
                <img className="rounded-lg  w-[95%] sm:w-4/5 md:w-2/3" src={LandingPageImage2} alt="Imagem do carrossel" />

            </div>
            <Categories />
            <div className="flex items-center justify-center w-full">
                {/* <img className="rounded-lg  w-2/3" src={LandingPageImage2} alt="Imagem do carrossel" /> */}

            </div>
        </>
    )
}