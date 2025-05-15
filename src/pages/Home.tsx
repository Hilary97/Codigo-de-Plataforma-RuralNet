import React, { useState } from 'react';
import { LessonCard } from '../components/LessonCard';
import { ProgressBar } from '../components/ProgressBar';
import { lessons } from '../utils/lessonData';
import { SearchIcon } from 'lucide-react';
export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredLessons = lessons.filter(lesson => lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || lesson.description.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-blue-400 to-green-300 text-white rounded-2xl p-8 mb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Bienvenido a RuralNet_Edu!
          </h1>
          <p className="text-xl mb-6">
            Comienza tu viaje en esta inovadora plataforma para el aprendizaje
            de herramientas digitales enfocada en tu necesidad, para tu progreso profesional y personal.
            
          </p>
          <button className="bg-white text-red-500 hover:bg-amber-100 font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:-translate-y-1">
            Comenzar Ahora
          </button>
        </div>
      </section>
      {/* Progress section */}
      <section className="mb-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tu Progreso</h2>
        <div className="space-y-4">
          <ProgressBar progress={15} label="Progreso total: 15%" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-amber-800 font-medium">
                Lecciones completadas
              </p>
              <p className="text-3xl font-bold text-gray-800">1/12</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium">
                Ejercicios completados
              </p>
              <p className="text-3xl font-bold text-gray-800">3/24</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-blue-800 font-medium">Días consecutivos</p>
              <p className="text-3xl font-bold text-gray-800">2</p>
            </div>
          </div>
        </div>
      </section>
      {/* Lessons section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Lecciones</h2>
          <div className="relative">
            <input type="text" placeholder="Buscar lecciones..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <SearchIcon size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(lesson => <LessonCard key={lesson.id} title={lesson.title} description={lesson.description} imageUrl={lesson.imageUrl} level={lesson.level} duration={lesson.duration} onClick={() => console.log(`Selected lesson: ${lesson.id}`)} />)}
        </div>
      </section>
    </div>;
}