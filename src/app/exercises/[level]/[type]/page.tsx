import TitleAndIcon from '@/components/exercise/titleAndIcon/TitleAndIcon';
import Navigation from '@/components/layout/navigationBar/Navigation';
import ProgressDemo from '@/components/progress/Progress';
import {  ExerciseType } from '@/interface/exercises/interface';
import { AllTopics,  } from '@/interface/progress/interface';
import { ArrowRight} from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';

export default async function HomeTypes({ params }: { params: { level: 'beginner' | 'intermediate' | 'advanced', type: 'multiplechoice' | 'reading' | 'oneword' | 'vocabulary' } }) {

    const getList = (type: ExerciseType): string[] => {
        switch (type) {
            case 'vocabulary':
                return ["Trips", "Family", "School", "Food", "Sports", "Weather", "Work"];
            case 'reading':
                return ["Stories", "Articles", "News", "Reviews", "Essays"];
            case 'oneword':
                return ["Synonyms", "Antonyms", "Phrasal Verbs", "Idioms"];
            case 'multiplechoice':
                return ["Present Simple", "Past Simple", "Future Simple", "Present Perfect"];
            default:
                return [];
        }
    };



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

    const colors = getColors(params.type);



    const usecookies = await cookies();

    const progress = usecookies.get('progress');

    const getPercentage = (topic: AllTopics | string) => {

        if (!progress) {
            return 0;
        }

        const progessData  = JSON.parse(progress.value);

        return progessData[params.level][params.type][topic];


    }

    return (
        <main className="min-h-screen flex flex-col  rounded-t-3xl">
            <Navigation type={params.type} level={params.level} />

            <div className="flex flex-col items-center justify-center flex-1 px-4 mt-10">
                <div className="text-center mb-12">
                    <TitleAndIcon type={params.type} />
                    <p className="text-white/80">
                        Select a topic to practice
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 max-w-6xl w-full">
                    {getList(params.type).map((item, index) => (
                        <Link
                            href={`/exercises/${params.level}/${params.type}/${item.toLowerCase().trim().replace(/ /g, "")}`}
                            key={index}
                            className="group"
                        >
                            <div className={`${colors.bg} ${colors.hover} backdrop-blur-sm rounded-xl p-6 transition-all duration-300 transform hover:scale-105`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">
                                        <h2 className="text-xl font-semibold text-white mb-2">
                                            {item}
                                        </h2>
                                        <p className="text-white/60 text-sm">
                                            {params.level.charAt(0).toUpperCase() + params.level.slice(1)} level
                                        </p>
                                    </div>
                                    <div className='flex space-x-1 items-center mr-4'>
                                        <span className='font-bold'>0</span>
                                        <ProgressDemo type={params.type} per={getPercentage(item.toLowerCase().trim().replace(/ /g, ""))}/>
                                        <span className='font-bold'>100</span>
                                    </div>
                                    <ArrowRight className={`w-6 h-6 ${colors.text} transform transition-transform duration-300 group-hover:translate-x-2`} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}