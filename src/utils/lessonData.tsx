import React from 'react';
export interface Lesson {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
  content?: {
    sections: {
      title: string;
      text: string;
      examples?: {
        spanish: string;
        english?: string;
      }[];
    }[];
  };
}
export const lessons: Lesson[] = [{
  id: 'alfabeto',
  title: 'Etica y seguridad en línea',
  description: 'Aprende a proteger tus datos personales y navegación segura.',
  imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  level: 'Principiante',
  duration: '15 min',
  content: {
    sections: [{
      title: 'Introducción al Alfabeto Español',
      text: 'El alfabeto español moderno tiene 27 letras. La pronunciación es bastante consistente, lo que facilita la lectura una vez que aprendes los sonidos básicos.'
    }, {
      title: 'Letras y Sonidos',
      text: 'Aquí están algunas letras con su pronunciación en español mexicano:',
      examples: [{
        spanish: "A - como en 'agua'",
        english: "like 'a' in father"
      }, {
        spanish: "E - como en 'elefante'",
        english: "like 'e' in bet"
      }, {
        spanish: "I - como en 'iglesia'",
        english: "like 'ee' in see"
      }, {
        spanish: "Ñ - como en 'niño'",
        english: "like 'ny' in canyon"
      }, {
        spanish: "R - como en 'perro'",
        english: "rolled 'r'"
      }]
    }]
  }
}, {
  id: 'saludos',
  title: 'Herramientas Digitales',
  description: 'Aprende a usar herramientas digitales para tu progreso profesional y personal.',  
  imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  level: 'Principiante',
  duration: '20 min'
}, {
  id: 'numeros',
  title: 'Oportunidades laborales',
  description: 'Explora las oportunidades laborales en el campo de la alfabetización digital.',
  imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  level: 'Intermedio',
  duration: '30 min'
}, {
  id: 'colores',
  title: 'Colores y Descripciones',
  description: 'Vocabulario sobre colores y adjetivos descriptivos comunes.',
  imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  level: 'Principiante',
  duration: '20 min'
}, {
  id: 'familia',
  title: 'La Familia',
  description: 'Aprende vocabulario relacionado con la familia y relaciones.',
  imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  level: 'Principiante',
  duration: '30 min'
}, {
  id: 'verbos',
  title: 'Verbos Básicos',
  description: 'Introducción a los verbos más comunes en español.',
  imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  level: 'Intermedio',
  duration: '35 min'
}];
export const exercises = [{
  lessonId: 'alfabeto',
  questions: [{
    id: 'q1',
    question: "¿Qué letra representa el sonido 'ñ' como en 'niño'?",
    options: ['N', 'Ñ', 'NY', 'NI'],
    correctAnswer: 'Ñ',
    imageUrl: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 'q2',
    question: '¿Cuántas letras tiene el alfabeto español moderno?',
    options: ['26', '27', '28', '29'],
    correctAnswer: '27'
  }]
}];