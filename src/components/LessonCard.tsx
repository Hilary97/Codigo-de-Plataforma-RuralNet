import React from 'react';
interface LessonCardProps {
  title: string;
  description: string;
  imageUrl: string;
  level: string;
  duration: string;
  onClick: () => void;
}
export function LessonCard({
  title,
  description,
  imageUrl,
  level,
  duration,
  onClick
}: LessonCardProps) {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer transform hover:-translate-y-1" onClick={onClick}>
      <div className="h-40 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
            {level}
          </span>
          <span className="text-gray-500 text-sm">{duration}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
}