import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { lessons } from '../utils/lessonData';
interface LessonProps {
  lessonId: string;
}
export function Lesson({
  lessonId
}: LessonProps) {
  const lesson = lessons.find(l => l.id === lessonId);
  if (!lesson || !lesson.content) {
    return <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl">
          Lección no encontrada o contenido no disponible.
        </p>
      </div>;
  }
  return <div className="container mx-auto px-4 py-8">
      {/* Lesson header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mr-3">
            {lesson.level}
          </span>
          <span className="text-gray-500">{lesson.duration}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-xl text-gray-600">{lesson.description}</p>
      </div>
      {/* Lesson content */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        {lesson.content.sections.map((section, index) => <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {section.title}
            </h2>
            <p className="text-gray-700 mb-4">{section.text}</p>
            {section.examples && <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <h3 className="font-medium text-amber-800 mb-2">Ejemplos:</h3>
                <ul className="space-y-2">
                  {section.examples.map((example, i) => <li key={i} className="flex flex-col md:flex-row">
                      <span className="font-medium md:w-1/2">
                        {example.spanish}
                      </span>
                      {example.english && <span className="text-gray-600 md:w-1/2">
                          {example.english}
                        </span>}
                    </li>)}
                </ul>
              </div>}
          </div>)}
      </div>
      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button className="flex items-center text-gray-600 hover:text-red-500 transition">
          <ArrowLeftIcon size={20} className="mr-2" />
          Lección Anterior
        </button>
        <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition">
          Ejercicios
        </button>
        <button className="flex items-center text-gray-600 hover:text-red-500 transition">
          Siguiente Lección
          <ArrowRightIcon size={20} className="ml-2" />
        </button>
      </div>
    </div>;
}