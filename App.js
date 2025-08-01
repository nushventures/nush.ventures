import React from 'react';
import './App.css';
import logo from '../public/logo.png';

function App() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#4A3B35] font-sans">
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <img src={logo} alt="nush.ventures" className="h-10" />
        <nav className="space-x-6">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to nush.ventures</h1>
        <p className="text-lg mb-10">Your curated corner for everything trending ✨</p>

        <section id="products">
          <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
            <img src="https://m.media-amazon.com/images/I/61U5T4zQHZL._SL1500_.jpg" alt="Plix Glowy Skin" className="rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">Plix Glowy Skin</h2>
            <p className="mb-4 text-sm">Plant-based beauty blend for radiant skin – trending everywhere!</p>
            <a href="#" className="bg-[#8B6D5C] text-white px-4 py-2 rounded inline-block">Buy Now</a>
          </div>
        </section>
      </main>

      <footer className="mt-20 p-4 text-sm text-center text-gray-500">
        &copy; 2025 nush.ventures. All rights reserved.
      </footer>
    </div>
  );
}

export default App;