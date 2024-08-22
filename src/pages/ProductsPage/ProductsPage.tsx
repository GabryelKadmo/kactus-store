import { useState } from 'react';
import { CiFilter } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  category: string; // Adicione uma propriedade de categoria
}

const products: Product[] = [
  {
    id: 1,
    image: 'https://imgcentauro-a.akamaihd.net/768x768/98582431.jpg',
    title: 'Tênis Esportivo',
    price: 199.99,
    rating: 4.5,
    category: 'Tênis', // Defina a categoria
  },
  {
    id: 2,
    image: 'https://imgcentauro-a.akamaihd.net/768x768/98598231.jpg',
    title: 'Sapato Social',
    price: 299.99,
    rating: 4.0,
    category: 'Sapato', // Defina a categoria
  },
  {
    id: 3,
    image: 'https://imgcentauro-a.akamaihd.net/768x768/98140451.jpg',
    title: 'Botina Country',
    price: 299.99,
    rating: 4.0,
    category: 'Botina', // Defina a categoria
  },
  {
    id: 4,
    image: 'https://imgcentauro-a.akamaihd.net/768x768/98582531.jpg',
    title: 'Sandália Havaiana',
    price: 299.99,
    rating: 4.0,
    category: 'Sandália', // Defina a categoria
  },
];

const categories = ['Tênis', 'Sapato', 'Botina', 'Sandália'];
const ratings = [1, 2, 3, 4, 5];

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((previous) =>
      previous.includes(category)
        ? previous.filter((c) => c !== category)
        : [...previous, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategories.length === 0 || selectedCategories.some(cat => product.title.includes(cat));
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const hasRating = selectedRating ? product.rating >= selectedRating : true;
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return inCategory && inPriceRange && hasRating && matchesSearchTerm;
  });

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-1/4 p-4 border-r">
        <h3 className="text-lg font-semibold mb-2">Categoria</h3>
        <div className="flex flex-col space-y-2 mb-4">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox h-4 w-4"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">Faixa de Preço</h3>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([parseFloat(e.target.value), priceRange[1]])
          }
          className="w-full mb-2"
        />
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], parseFloat(e.target.value)])
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>R$ {priceRange[0]}</span>
          <span>R$ {priceRange[1]}</span>
        </div>

        <h3 className="text-lg font-semibold mb-2">Avaliação</h3>
        <div className="flex flex-col space-y-2">
          {ratings.map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="form-radio"
              />
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.971c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.971a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-3/4 p-4">
        <div className="flex justify-end items-center mb-8">

          <div className="relative w-full">
            <input
              type="text"
              className="w-full p-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="lg:hidden  flex items-center">
            <button
              onClick={() => setIsSheetOpen(true)}
              className="flex items-center text-base text-gray-600 hover:text-gray-800 focus:outline-none transition-all duration-300"
            >
              <CiFilter className="w-5 h-5 mr-2" />
              Filtrar
            </button>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger />
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription>Escolha seus filtros</SheetDescription>
                </SheetHeader>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Categoria</h3>
                  <div className="flex flex-col space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="form-checkbox h-4 w-4"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Faixa de Preço</h3>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseFloat(e.target.value), priceRange[1]])
                    }
                    className="w-full mb-2"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseFloat(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Avaliação</h3>
                  <div className="flex flex-col space-y-2">
                    {ratings.map((rating) => (
                      <label key={rating} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                          className="form-radio"
                        />
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.971c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.971a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                            </svg>
                          ))}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md h-80 sm:h-96">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-48 object-contain rounded-t-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-700 mt-1">R$ {product.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.971c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.971a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
              <button className="mt-2 px-4 py-1 w-full transition duration-300 bg-green-700 text-white rounded-2xl hover:bg-green-600">
                Ver produto
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}