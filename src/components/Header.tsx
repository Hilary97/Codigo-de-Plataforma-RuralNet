import React from 'react';
import { BookOpenIcon, MenuIcon } from 'lucide-react';
export function Header() {
  return <header className="sticky top-0 w-full bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenIcon size={28} />
          <h1 className="text-2xl font-bold">RuralNet</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-amber-200 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#lecciones" className="hover:text-amber-200 transition">
                Lecciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-200 transition">
                Ejercicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-200 transition">
                Recursos
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden">
          <MenuIcon size={24} />
        </button>
      </div>
    </header>;
}