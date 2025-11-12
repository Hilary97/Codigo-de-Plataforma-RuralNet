export interface lesson2 {
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
}export const lessonData2: lesson2[] = [{
  id: 'alfabeto',
  title: 'Establece Metas SMART: La Brújula de tu Progreso',
  description: 'Define objetivos de aprendizaje que sean Específicos, Medibles, Alcanzables, Relevantes y con un Tiempo definido (SMART).',
  imageUrl: 'https://media.slidesgo.com/storage/1869045/responsive-images/7-smart-goals-infographics___media_library_original_459_258.jpg',
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
  title: 'Adopta el Microaprendizaje: Pequeñas Dosis, Gran Impacto',
  description: 'Aprovecha la flexibilidad de la educación en línea estudiando en bloques de tiempo cortos y enfocados (15 a 30 minutos).',  
  imageUrl: 'https://www.shutterstock.com/image-photo/young-woman-student-texting-on-260nw-2375643135.jpg',
  level: 'Principiante',
  duration: '20 min'
}, {
  id: 'numeros',
  title: 'Fomenta el Aprendizaje Activo y Colaborativo',
  description: 'No solo consumas contenido; aplícalo. Participa en foros, resuelve ejercicios, haz simulaciones y trata de explicar lo aprendido a otra persona. La colaboración y la aplicación práctica consolidan el conocimiento.',
  imageUrl: 'https://i.blogs.es/33b436/zadarma-videollamada-a-cuatro/450_1000.jpeg',
  level: 'Intermedio',
  duration: '30 min'
}, {
  id: 'colores',
  title: 'Prioriza las Habilidades Blandas (Soft Skills)',
  description: 'El crecimiento profesional no es solo técnico. Dedica tiempo a desarrolar habilidades esenciales como la comunicación efectiva, el pensamiento crítico y la inteligencia emocional.',
  imageUrl: 'https://alejandraprado.com/wp-content/uploads/2023/11/mujer-asertiva.jpg',
  level: 'Intermedio',
  duration: '30 min'
}, {
  id: 'IA',
  title: 'Crea tu Hábito de Aprendizaje Constante (Lifelong Learning)',
  description: 'El mercado laboral evoluciona rápidamente. Para no quedarte atrás, haz del aprendizaje un hábito diario, no una obligación.',
  imageUrl: 'https://www.shutterstock.com/image-photo/organized-woman-managing-work-home-260nw-2554275549.jpg',
  level: 'Avanzado',
  duration: '40 min'

},  {
  id: 'tecnologia',
  title: 'Busca Feedback y Mentoría',
  description: 'No temas pedir retroalimentación sobre tu trabajo o desempeño. Si es posible, identifica a un mentor (un profesional con experiencia en tu área de estudio) que pueda guiarte.',
  imageUrl: 'https://blog.ucsp.edu.pe/hubfs/Inbound-Pregrado/orientacion%20profesional.jpg',
  level: 'Avanzado',
  duration: '40 min'
}];