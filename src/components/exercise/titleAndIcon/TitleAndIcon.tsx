import { ExerciseType } from '@/interface/exercises/interface';
import { BookOpen, Brain, Pencil, VolumeX } from 'lucide-react';
import React from 'react'

interface Props {
    type: ExerciseType
}

export default function TitleAndIcon({ type }: Props) {

    const getIcon = (type: ExerciseType) => {
        switch (type) {
            case 'reading':
                return <BookOpen className="w-8 h-8" />;
            case 'multiplechoice':
                return <Brain className="w-8 h-8" />;
            case 'oneword':
                return <Pencil className="w-8 h-8" />;
            case 'vocabulary':
                return <VolumeX className="w-8 h-8" />;
            default:
                return null;
        }
    };

    const getTitle = (type: string): string => {

        switch (type) {
            case "multiplechoice": return "Multiple Choice";
            case "oneword": return "One Word";
            default: return type;

        }

    }

    const getColors = (type: ExerciseType): { bg: string, hover: string, text: string } => {
        switch (type) {
            case 'reading':
                return {
                    bg: 'bg-blue-600/20',
                    hover: 'hover:bg-blue-600/30',
                    text: 'text-blue-400'
                };
            case 'multiplechoice':
                return {
                    bg: 'bg-emerald-600/20',
                    hover: 'hover:bg-emerald-600/30',
                    text: 'text-emerald-400'
                };
            case 'oneword':
                return {
                    bg: 'bg-violet-600/20',
                    hover: 'hover:bg-violet-600/30',
                    text: 'text-violet-400'
                };
            case 'vocabulary':
                return {
                    bg: 'bg-orange-600/20',
                    hover: 'hover:bg-orange-600/30',
                    text: 'text-orange-400'
                };
            default:
                return {
                    bg: 'bg-gray-600/20',
                    hover: 'hover:bg-gray-600/30',
                    text: 'text-gray-400'
                };
        }
    };

    const colors = getColors(type);
    
    return (
        <>
            <div className={`p-2 rounded-lg ${colors.bg} inline-block mb-4`}>
                {getIcon(type)}
            </div>
            <h1 className={`text-4xl font-bold ${colors.text} mb-2 capitalize`}>
                {getTitle(type.replace(/([A-Z])/g, ' $1').trim())}
            </h1>

        </>
    )
}
