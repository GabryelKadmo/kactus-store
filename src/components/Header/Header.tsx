import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import KactusLogo from "./assets/images/actu’s.svg";
import emptyCart from "./assets/images/Seu carrinho está vazio.svg";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-2">
        <img src={KactusLogo} className="h-14" alt="Logo" />
        <div className="lg:hidden flex items-center space-x-4">
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setIsCartOpen(!isCartOpen)} className="text-gray-600 hover:text-gray-800 text-2xl">
                <RiShoppingCart2Line />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-80">
              <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <img src={emptyCart} alt="Seu carrinho esta vazio" />
              </div>
            </SheetContent>
          </Sheet>
          <button className="text-gray-600 hover:text-gray-800">
            Login
          </button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 py-4">
                <a href="#" className="text-gray-600">Home</a>
                <a href="#" className="text-gray-600">Produtos</a>
                <a href="#" className="text-gray-600">Novidades</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <nav className="flex space-x-8 font-Montserrat">
            <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline underline-offset-1">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline underline-offset-1">Produtos</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 hover:underline underline-offset-1">Novidades</a>
          </nav>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-2">
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setIsCartOpen(!isCartOpen)} className="text-gray-600 hover:text-gray-800 text-xl transform transition-transform duration-200 rounded bg-white p-2 hover:bg-slate-200">
                <RiShoppingCart2Line />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-80">
              <SheetHeader>
                <SheetTitle>Carrinho</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <img src={emptyCart} alt="Seu carrinho esta vazio" />
              </div>
            </SheetContent>
          </Sheet>
          <button className="font-[Montserrat] flex items-center space-x-2 text-base gap-1 text-gray-600 p-2 rounded transform transition-transform duration-200 hover:bg-slate-200">
            <FaUser />
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
