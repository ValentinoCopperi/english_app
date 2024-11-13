"use client"

import React from "react";
import * as Progress from "@radix-ui/react-progress";
import { ExerciseType } from "@/interface/exercises/interface";

interface Props {
    per : number
    type : ExerciseType
}

const ProgressDemo = ( {per , type} : Props ) => {
	const [progress, setProgress] = React.useState(per);

    const getColors = (type: ExerciseType): { bg: string, hover: string, text: string } => {
        switch (type) {
            case 'reading':
                return {
                    bg: 'bg-blue-400/20',
                    hover: 'bg-blue-600',
                    text: 'text-blue-400'
                };
            case 'multiplechoice':
                return {
                    bg: 'bg-emerald-400/20',
                    hover: 'bg-emerald-600',
                    text: 'text-emerald-400'
                };
            case 'oneword':
                return {
                    bg: 'bg-violet-400/20',
                    hover: 'bg-violet-600',
                    text: 'text-violet-400'
                };
            case 'vocabulary':
                return {
                    bg: 'bg-orange-100/20',
                    hover: 'bg-orange-600',
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
		<Progress.Root
			className={`relative h-[15px] w-[150px] overflow-hidden rounded-full ${colors.bg}`}
			style={{
				// Fix overflow clipping in Safari
				// https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
				transform: "translateZ(0)",
			}}
			value={progress}
		>
			<Progress.Indicator
				className={`ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full ${colors.hover} transition-transform duration-[660ms]`}
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
};

export default ProgressDemo;
