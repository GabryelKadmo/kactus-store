import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#161515] text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold">Kactu's</h1>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
                        <a href="#" className="text-gray-400 hover:text-white transition mt-2 md:mt-0">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition mt-2 md:mt-0">
                            Sobre nós
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition mt-2 md:mt-0">
                            Serviços
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition mt-2 md:mt-0">
                            Contato
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-2xl text-gray-100 hover:text-white transition">
                            <FaWhatsapp />
                        </a>
                        <a href="#" className="text-2xl text-gray-100 hover:text-white transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; 2024 Kactu's. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
