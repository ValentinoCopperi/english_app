import React from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Pencil, VolumeX, ChevronLeft, Home } from 'lucide-react';
import Navigation from '@/components/layout/navigationBar/Navigation';


export default async function CategoryPage({ params }: { params: { level: 'beginner' | 'intermediate' | 'advanced' } }) {
    const level = params.level.toLowerCase() as 'beginner' | 'intermediate' | 'advanced';
    const types = ["Reading", "Multiple Choice", "One word", "Vocabulary"];
   

  

    const getIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'reading':
                return <BookOpen className="w-8 h-8" />;
            case 'multiple choice':
                return <Brain className="w-8 h-8" />;
            case 'one word':
                return <Pencil className="w-8 h-8" />;
            case 'vocabulary':
                return <VolumeX className="w-8 h-8" />;
            default:
                return null;
        }
    };

    const getColors = (type: string) => {
        switch (type.toLowerCase()) {
            case 'reading':
                return { 
                    background: 'bg-blue-600 hover:bg-blue-700', 
                    stroke: 'stroke-blue-300' 
                };
            case 'multiple choice':
                return { 
                    background: 'bg-emerald-600 hover:bg-emerald-700', 
                    stroke: 'stroke-emerald-300' 
                };
            case 'one word':
                return { 
                    background: 'bg-violet-600 hover:bg-violet-700', 
                    stroke: 'stroke-violet-300' 
                };
            case 'vocabulary':
                return { 
                    background: 'bg-orange-600 hover:bg-orange-700', 
                    stroke: 'stroke-orange-300' 
                };
            default:
                return { 
                    background: 'bg-gray-600', 
                    stroke: 'stroke-gray-300' 
                };
        }
    };

    return (
        <main className="min-h-screen  flex flex-col bg-gradient-to-b from-primary to-primary-foreground">
            {/* Navigation Bar */}
           <Navigation level={params.level} />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center flex-1 mt-10">
                <h1 className="mb-12 text-4xl font-bold capitalize text-center text-white">{level} Level Quizzes</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {types.map((type, i) => {
                        const { background, stroke } = getColors(type);
                        return (
                            <Link
                                key={i}
                                href={`/exercises/${level}/${type.toLowerCase().trim().replace(/ /g, "")}`}
                                className={`group relative p-9 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${background}`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 rounded-lg bg-white/20">
                                            {getIcon(type)}
                                        </div>
                                        <h2 className="text-xl font-semibold text-white">{type}</h2>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2 text-white" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}