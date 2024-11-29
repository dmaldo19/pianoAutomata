import React, { useState, useEffect } from 'react';
import { Music, ArrowRight, ArrowLeft, Repeat, Info } from 'lucide-react';
import { MusicNote } from './components/MusicNote';
import { StateTransition } from './components/StateTransition';
import { InfoModal } from './components/InfoModal';
import { useMusicalFSM } from './hooks/useMusicalFSM';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const { currentNote, previousNote, playNote, processInput } = useMusicalFSM();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">Autómata Musical</h1>
            </div>
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
            >
              <Info className="h-6 w-6" />
              <span className="font-medium">Sobre la actividad adicional</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Teoría de Autómatas en la Música
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora cómo un autómata finito puede representar las transiciones entre notas musicales.
            Cada nota puede cambiar su estado según diferentes reglas musicales.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <MusicNote note={currentNote} onPlay={playNote} />
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => processInput('0')}
                  className="flex items-center justify-center space-x-2 p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Nota Anterior</span>
                </button>
                <button
                  onClick={() => processInput('1')}
                  className="flex items-center justify-center space-x-2 p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span>Semitono</span>
                </button>
                <button
                  onClick={() => processInput('2')}
                  className="flex items-center justify-center space-x-2 p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span>Tono</span>
                </button>
                <button
                  onClick={() => processInput('3')}
                  className="flex items-center justify-center space-x-2 p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors"
                >
                  <Repeat className="h-5 w-5" />
                  <span>Tercera Menor</span>
                </button>
              </div>
            </div>

            <StateTransition currentNote={currentNote} />
          </div>
        </div>
      </main>

      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  );
}

export default App;