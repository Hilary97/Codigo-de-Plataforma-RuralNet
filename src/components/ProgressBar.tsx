import React from 'react';
interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
}
export function ProgressBar({
  progress,
  label
}: ProgressBarProps) {
  return <div className="w-full">
      {label && <p className="text-sm text-gray-600 mb-1">{label}</p>}
      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-500 to-green-400" style={{
        width: `${progress}%`
      }}></div>
      </div>
    </div>;
}