import React from 'react';
import { Home2 } from './pages/Home2';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

export function App() {
  return <div className="flex flex-col min-h-screen bg-gray-300">
      <Header />
      <main className="flex-grow w-full">
        <Home />
        <Home2 />
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => window.location.href = '/Home2'}
        >
          Ir a Incio
        </button>
      </main>
      <Footer />
    </div>;
}