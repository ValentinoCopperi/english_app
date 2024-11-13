import Navigation from '@/components/layout/navigationBar/Navigation'
import { ExerciseLevel, ExerciseType } from '@/interface/exercises/interface'
import React from 'react'
import Container from '@/components/exercise/Container';
import { AllTopics } from '@/interface/progress/interface';
import TitleAndIcon from '@/components/exercise/titleAndIcon/TitleAndIcon';

async function getData(level: string, type: string, topic: string) {

    try {

        const data = await import(`@/utils/${level}/${type}/data`);
        // Filtra el conjunto de ejercicios correspondiente al `topic`
        const topicKey = `${topic}Exercises`; // Ejemplo: "presentSimpleExercises"
        const exercises = data[topicKey] || []; // Accede al conjunto correcto

       
        return exercises;

    } catch (error) {

        console.log(error);

    }

}


export default async function HomeTopic({ params }: { params: { level: ExerciseLevel, type: ExerciseType, topic: AllTopics } }) {

    const data = await getData(params.level, params.type, params.topic);


    const getTopic = (topic: string): string => {

        switch (topic) {
            case "presentsimple": return "Present Simple"
            case "pastsimple": return "Past Simple"
            case "futuresimple": return "Future Simple"
            case "presentperfect": return "Present Perfect"
            case "phrasalverbs": return "Phrasal Verbs"
            default: return topic
        }

    }

 

    return (
        <div className='bg-gray-900 rounded-t-3xl'>

            <Navigation type={params.type} level={params.level} topic={getTopic(params.topic)} />


            <div className='text-center'>

                <TitleAndIcon type={params.type} />

            </div>

            <Container exercises={data} level={params.level} type={params.type} topic={params.topic} />

        </div>
    )
}
