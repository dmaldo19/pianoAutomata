import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StateTransitionProps {
  currentNote: string;
}

export const StateTransition: React.FC<StateTransitionProps> = ({ currentNote }) => {
  const getTransitionsForNote = (note: string) => {
    const transitions = {
      'DO': { 'Anterior': 'SI', 'Semitono': 'DO#', 'Tono': 'RE', 'Tercera': 'RE#' },
      'DO#': { 'Anterior': 'DO', 'Semitono': 'RE', 'Tono': 'RE#', 'Tercera': 'MI' },
      'RE': { 'Anterior': 'DO#', 'Semitono': 'RE#', 'Tono': 'MI', 'Tercera': 'FA' },
      'RE#': { 'Anterior': 'RE', 'Semitono': 'MI', 'Tono': 'FA', 'Tercera': 'FA#' },
      'MI': { 'Anterior': 'RE#', 'Semitono': 'FA', 'Tono': 'FA#', 'Tercera': 'SOL' },
      'FA': { 'Anterior': 'MI', 'Semitono': 'FA#', 'Tono': 'SOL', 'Tercera': 'SOL#' },
      'FA#': { 'Anterior': 'FA', 'Semitono': 'SOL', 'Tono': 'SOL#', 'Tercera': 'LA' },
      'SOL': { 'Anterior': 'FA#', 'Semitono': 'SOL#', 'Tono': 'LA', 'Tercera': 'LA#' },
      'SOL#': { 'Anterior': 'SOL', 'Semitono': 'LA', 'Tono': 'LA#', 'Tercera': 'SI' },
      'LA': { 'Anterior': 'SOL#', 'Semitono': 'LA#', 'Tono': 'SI', 'Tercera': 'DO' },
      'LA#': { 'Anterior': 'LA', 'Semitono': 'SI', 'Tono': 'DO', 'Tercera': 'DO#' },
      'SI': { 'Anterior': 'LA#', 'Semitono': 'DO', 'Tono': 'DO#', 'Tercera': 'RE' }
    };
    return transitions[note as keyof typeof transitions] || {};
  };

  const transitions = getTransitionsForNote(currentNote);

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Diagrama de Transiciones</h3>
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold text-gray-600 mb-2">Estado Actual</div>
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-xl font-bold">
            {currentNote}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(transitions).map(([type, nextNote]) => (
            <div key={type} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500">{type}</div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="font-semibold text-indigo-600">{nextNote}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Posibles Transiciones:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 0: Nota anterior</li>
            <li>• 1: Semitono siguiente</li>
            <li>• 2: Tono siguiente</li>
            <li>• 3: Tercera menor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};