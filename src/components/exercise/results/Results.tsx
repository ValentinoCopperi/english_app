"use client"

import React, { useEffect, useState } from 'react';
import { RotateCw } from 'lucide-react';

interface ResultsProps {
    cantidadTotal: number;
    cantidadCorrectas: number;
    onClose: () => void;
}

export default function Results({ cantidadTotal, cantidadCorrectas, onClose }: ResultsProps) {
    const [percentage, setPercentage] = useState(0);
    const finalPercentage = Math.round((cantidadCorrectas / cantidadTotal) * 100);

    useEffect(() => {
        let currentPercentage = 0;
        const increment = finalPercentage / 50;
        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= finalPercentage) {
                currentPercentage = finalPercentage;
                clearInterval(interval);
            }
            setPercentage(Math.round(currentPercentage));
        }, 20);
        return () => clearInterval(interval);
    }, [finalPercentage]);

    const handleTryAgain = () => {
        window.location.reload();
    };


    return (
        <div className="fixed h-screen w-screen inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Resultados</h2>
                <p className="text-6xl font-extrabold text-green-500 mb-4">{percentage}%</p>
                <p className="text-lg">Respuestas correctas: {cantidadCorrectas} de {cantidadTotal}</p>
                <div className="flex gap-4 justify-center mt-6">
                    <button
                        onClick={handleTryAgain}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none flex items-center gap-2"
                    >
                        <RotateCw size={16} />
                        Intentar de nuevo
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}