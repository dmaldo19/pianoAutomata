import React from 'react';
import { Bolt, X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Sobre el Proyecto</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="prose">
          <p>
            Este proyecto demuestra cómo un autómata finito puede modelar las transiciones
            entre notas musicales. Un autómata finito es un modelo matemático que describe
            un sistema que puede estar en uno de varios estados, y que puede cambiar de un
            estado a otro en respuesta a algunas entradas externas.
          </p>
          <br />
          <h4 style={{fontWeight: "bold"}}>¿Cómo funciona?</h4>
          <ul>
            <li>Cada nota musical representa un estado en el autómata</li>
            <li>Las transiciones entre estados están definidas por reglas musicales</li>
            <li>Puedes moverte entre notas usando diferentes intervalos musicales</li>
            <li>El sistema mantiene un registro del estado actual (nota actual)</li>
          </ul>
          <br />
          <h4 style={{fontWeight: "bold"}}>Controles</h4>
          <ul>
            <li>Nota Anterior: Retrocede a la nota previa</li>
            <li>Semitono: Avanza medio tono</li>
            <li>Tono: Avanza un tono completo</li>
            <li>Tercera Menor: Avanza una tercera menor</li>
          </ul>
          <br />
          <h4 style={{fontWeight: "bold"}}>Intención Actividad Adicional</h4>
          <ul>
            <li>Con esta actividad adicional buscamos desarrollar más y mejor nuestro proyecto, </li>
            <li>dejando más en claro el cómo se relacionan los autómatas con las notas, y</li>
            <li>haciéndolo más intuitivo para el usuario.</li>
          </ul>
          <br />
          <h4 style={{fontWeight: "bold"}}>Integrantes:</h4>
          <ul>
            <li>Maldonado Melendez Diego Alberto</li>
            <li>Flores Fernández Lizbeth Alessandra</li>
            <li>Hernández Martínez José Ángel de Jesús</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
