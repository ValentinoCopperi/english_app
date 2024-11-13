import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Pencil, VolumeX } from 'lucide-react';
import Navigation from '@/components/layout/navigationBar/Navigation';

// Define types for the page params
type CategoryParams = {
    level: string;
};

// Define the component props type
type PageProps = {
    params: CategoryParams;
    searchParams: { [key: string]: string | string[] | undefined };
};

const CategoryPage = async ({ params }: PageProps) => {
    const level = params.level.toLowerCase();
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

    const getColors = (type: string): { background: string } => {
        switch (type.toLowerCase()) {
            case 'reading':
                return { 
                    background: 'bg-blue-600 hover:bg-blue-700'
                };
            case 'multiple choice':
                return { 
                    background: 'bg-emerald-600 hover:bg-emerald-700'
                };
            case 'one word':
                return { 
                    background: 'bg-violet-600 hover:bg-violet-700'
                };
            case 'vocabulary':
                return { 
                    background: 'bg-orange-600 hover:bg-orange-700'
                };
            default:
                return { 
                    background: 'bg-gray-600'
                };
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-b from-primary to-primary-foreground">
            <Navigation level={params.level} />

            <div className="flex flex-col items-center justify-center flex-1 mt-10">
                <h1 className="mb-12 text-4xl font-bold capitalize text-center text-white">{level} Level Quizzes</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {types.map((type, i) => {
                        const { background } = getColors(type);
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
};

export default CategoryPage;