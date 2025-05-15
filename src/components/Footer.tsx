import React from 'react';
export function Footer() {
  return <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © 2025 Aprende herramientas digitales en tu comunidad rural - Curando el futuro juntos
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-300 transition">
              Acerca de
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              Contacto
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              Ayuda
            </a>
          </div>
        </div>
      </div>
    </footer>;
}