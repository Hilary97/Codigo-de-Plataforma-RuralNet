import React, { useState } from 'react';
import { ExerciseCard } from '../components/ExerciseCard';
import { exercises } from '../utils/lessonData';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface ExerciseProps {
  lessonId: string;
}
export function Exercise({
  lessonId
}: ExerciseProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const lessonExercises = exercises.find(ex => ex.lessonId === lessonId);
  if (!lessonExercises || lessonExercises.questions.length === 0) {
    return <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl">
          No hay ejercicios disponibles para esta lección.
        </p>
      </div>;
  }
  const currentQuestion = lessonExercises.questions[currentQuestionIndex];
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
  };
  const handleNext = () => {
    if (currentQuestionIndex < lessonExercises.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ejercicios: {lessonId}
      </h1>
      <div className="mb-4 text-center">
        <span className="text-gray-600">
          Pregunta {currentQuestionIndex + 1} de{' '}
          {lessonExercises.questions.length}
        </span>
      </div>
      <ExerciseCard question={currentQuestion.question} options={currentQuestion.options} onSelect={handleAnswerSelect} imageUrl={currentQuestion.imageUrl} />
      {selectedAnswer && <div className="mt-6 flex flex-col items-center">
          <div className={`flex items-center p-4 rounded-lg ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isCorrect ? <>
                <CheckCircleIcon size={24} className="mr-2" />
                <span>¡Correcto!</span>
              </> : <>
                <XCircleIcon size={24} className="mr-2" />
                <span>
                  Incorrecto. La respuesta correcta es:{' '}
                  {currentQuestion.correctAnswer}
                </span>
              </>}
          </div>
          {currentQuestionIndex < lessonExercises.questions.length - 1 && <button onClick={handleNext} className="mt-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition">
              Siguiente Pregunta
            </button>}
          {currentQuestionIndex === lessonExercises.questions.length - 1 && <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
              Completar Ejercicios
            </button>}
        </div>}
    </div>;
}