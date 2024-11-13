'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/exercise/ui/Card"
import { RadioGroup, RadioGroupItem } from "@/components/exercise/ui/RadioGroup"
import { Label } from "@/components/exercise/ui/Label"
import { Button } from "@/components/exercise/ui/Button"
import Results from './results/Results'
import { Exercise, ExerciseType } from '@/interface/exercises/interface'
import { updateProgress } from '@/utils/progress/updateProgress'
import { AllTopics } from '@/interface/progress/interface'
import CountdownTimerDiv from './timer/Timer'


interface QuizProps {
    exercises: Exercise[],
    type: 'multiplechoice' | 'reading' | 'oneword' | 'vocabulary';
    level: 'beginner' | 'intermediate' | 'advanced';
    topic: AllTopics
}

export default function Component({ exercises, type, level, topic }: QuizProps) {

    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
    const [answeredId, setAnsweredId] = useState<number[]>([])
    const [correctsId, setCorrectId] = useState<number[]>([]);
    const [isFinish, setIsFinish] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState( () => {
        if(level === "beginner") return 320;
        if(level === "intermediate") return 230;
        return 200;
    });

    const handleAnswerChange = (exerciseId: number, answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [exerciseId]: answer
        }))
    }

    const handleSubmit = (exerciseId: number) => {
        const selectedAnswer = selectedAnswers[exerciseId];
        const exercise = exercises.find(ex => ex.id === exerciseId);

        let updatedCorrectsId = correctsId;

        if (exercise && selectedAnswer === exercise.correct_answer) {
            updatedCorrectsId = [...correctsId, exerciseId];
            setCorrectId(updatedCorrectsId);
        }

        const updatedAnsweredId = [...answeredId, exerciseId];
        setAnsweredId(updatedAnsweredId);

        if (updatedAnsweredId.length >= exercises.length) {
            setIsFinish(true);
            setShowResult(true);

            const progressPercentage = (updatedCorrectsId.length * 100) / exercises.length;
            updateProgress(progressPercentage, level, type, topic);
        }

    };

    const onClose = () => {
        setShowResult(false)
    }

    useEffect(() => {
        if (timeLeft === 0) {
            setIsFinish(true);
            setShowResult(true);
        }
    }, [timeLeft]);

    return (
        <div className="space-y-8 p-4">

            <CountdownTimerDiv timeLeft={timeLeft} setTimeLeft={setTimeLeft} />

            {exercises.map((ex) => (
                <Card key={ex.id} className={` 
                    ${(isFinish && correctsId.includes(ex.id)) && "border-green-600"} 
                    ${(isFinish && !correctsId.includes(ex.id)) && "border-red-600"} 
                    w-full max-w-2xl mx-auto`}>

                    <CardHeader>

                        <CardTitle className="text-xl font-bold">Pregunta {ex.id}</CardTitle>

                        {
                            ex.text && (
                                <p> {ex.text} </p>
                            )
                        }



                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-lg">{ex.question}</p>
                        <RadioGroup
                            onValueChange={(value) => handleAnswerChange(ex.id, value)}
                            value={selectedAnswers[ex.id]}
                        >
                            {ex.options.map((option, index) => (
                                <div key={index} className="flex items-center space-x-2 mb-2">
                                    <RadioGroupItem value={option} id={`option-${ex.id}-${index}`} />
                                    <Label htmlFor={`option-${ex.id}-${index}`}>{option}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={() => handleSubmit(ex.id)}
                            disabled={!selectedAnswers[ex.id] || answeredId.includes(ex.id) || isFinish}
                            className="w-full"
                        >
                            Enviar Respuesta
                        </Button>
                    </CardFooter>
                </Card>
            ))}

            {
                showResult && (
                    <Results cantidadTotal={exercises.length} cantidadCorrectas={correctsId.length} onClose={onClose} />
                )
            }

        </div>
    )
}