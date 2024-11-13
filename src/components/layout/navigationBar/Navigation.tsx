import {  ExerciseType } from '@/interface/exercises/interface';
import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


interface Props {
    type?: ExerciseType,
    topic?: string,
    level: string
}


export default function Navigation({ type, level, topic }: Props) {

    const types: Record<ExerciseType, string> = {
        "multiplechoice": "Multiple Choice",
        "reading": "Reading",
        "oneword": "One word",
        "vocabulary": "Vocabulary"
    };

    const typeString = types[type as ExerciseType];


    return (
        <div className="aboslute top-0 left-0 w-full p-10 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
                    >
                        <Home className="w-6 h-6" />
                    </Link>
                    <span className="text-white/60">/</span>
                    <span className="text-white capitalize">{level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()}</span>

                    {type && (
                        <>
                            <span className="text-white/60">/</span>
                            <span className="text-white capitalize">{typeString}</span>

                            {topic && (
                                <>
                                    <span className="text-white/60">/</span>
                                    <span className="text-white capitalize">{topic}</span>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
