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
       
      </main>
      <Footer />
    </div>;
}