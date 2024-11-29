import { useState, useCallback } from 'react';

const NOTES = {
  'DO': 261,
  'DO#': 277,
  'RE': 293,
  'RE#': 311,
  'MI': 329,
  'FA': 349,
  'FA#': 370,
  'SOL': 392,
  'SOL#': 415,
  'LA': 440,
  'LA#': 466,
  'SI': 494
};

const TRANSITIONS = {
  'DO': { '0': 'SI', '1': 'DO#', '2': 'RE', '3': 'RE#' },
  'DO#': { '0': 'DO', '1': 'RE', '2': 'RE#', '3': 'MI' },
  'RE': { '0': 'DO#', '1': 'RE#', '2': 'MI', '3': 'FA' },
  'RE#': { '0': 'RE', '1': 'MI', '2': 'FA', '3': 'FA#' },
  'MI': { '0': 'RE#', '1': 'FA', '2': 'FA#', '3': 'SOL' },
  'FA': { '0': 'MI', '1': 'FA#', '2': 'SOL', '3': 'SOL#' },
  'FA#': { '0': 'FA', '1': 'SOL', '2': 'SOL#', '3': 'LA' },
  'SOL': { '0': 'FA#', '1': 'SOL#', '2': 'LA', '3': 'LA#' },
  'SOL#': { '0': 'SOL', '1': 'LA', '2': 'LA#', '3': 'SI' },
  'LA': { '0': 'SOL#', '1': 'LA#', '2': 'SI', '3': 'DO' },
  'LA#': { '0': 'LA', '1': 'SI', '2': 'DO', '3': 'DO#' },
  'SI': { '0': 'LA#', '1': 'DO', '2': 'DO#', '3': 'RE' }
};

export const useMusicalFSM = () => {
  const [currentNote, setCurrentNote] = useState('DO');
  const [previousNote, setPreviousNote] = useState<string | null>(null);

  const playNote = useCallback(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(NOTES[currentNote as keyof typeof NOTES], audioContext.currentTime);

    // Aumentar el volumen y la duración
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(1.5, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2.5);
  }, [currentNote]);

  const processInput = useCallback((input: string) => {
    if (input in TRANSITIONS[currentNote as keyof typeof TRANSITIONS]) {
      setPreviousNote(currentNote);
      const nextNote = TRANSITIONS[currentNote as keyof typeof TRANSITIONS][input as keyof typeof TRANSITIONS[keyof typeof TRANSITIONS]];
      setCurrentNote(nextNote);
      return true;
    }
    return false;
  }, [currentNote]);

  return {
    currentNote,
    previousNote,
    playNote,
    processInput
  };
};