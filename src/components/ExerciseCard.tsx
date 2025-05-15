import React from 'react';
interface ExerciseCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  imageUrl?: string;
}
export function ExerciseCard({
  question,
  options,
  onSelect,
  imageUrl
}: ExerciseCardProps) {
  return <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{question}</h3>
      {imageUrl && <div className="mb-6 flex justify-center">
          <img src={imageUrl} alt="Exercise visual aid" className="max-h-48 rounded-lg" />
        </div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => <button key={index} onClick={() => onSelect(option)} className="bg-amber-50 hover:bg-amber-100 border border-amber-200 text-gray-800 py-3 px-4 rounded-lg text-left transition">
            {option}
          </button>)}
      </div>
    </div>;
}