// import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#161515] text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Kactu's</h1>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            Home
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            Sobre nós
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            Serviços
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            Contato
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-2 mt-4 md:mt-0">
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
