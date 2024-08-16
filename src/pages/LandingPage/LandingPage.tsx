import MostSoldItems from "@/components/LandingPage_Components/MostSoldItems/MostSoldItems"
import TopCarousel from "../../components/LandingPage_Components/Top_Carousel/TopCarousel"
import Categories from "@/components/LandingPage_Components/Categories/Categories"


export default function LandingPage() {
    return (
        <>
            <TopCarousel />
            <MostSoldItems />
            <Categories />
        </>
    )
}