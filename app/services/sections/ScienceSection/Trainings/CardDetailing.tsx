import { SlidingDiv } from '@/components/custom/SlidingDiv'
import { flowchartSteps } from '@/constants/flowchartSteps'
import { sciencetraining } from '@/constants/ScienceTraining'
import React from 'react'

export default function CardDetailing() {
  return (
    <div className="flex flex-col gap-6 text-sm sm:text-base md:text-lg xl:text-xl">
          {sciencetraining.map((step, i) =>
            <>
            <SlidingDiv repeat px={150} direction={i % 2 === 0 ? "left" : "right"} className="flex flex-col gap-2 p-6 shadow-md rounded-[20px]" key={step.title} style={{backgroundColor: step.color}}>
              <h1 className="font-semibold">{step.title}</h1>
              <p className='text-xs font-bold'>Duration: {step.duration}</p>
              <p>{step.objective}</p>
            </SlidingDiv>
            </> 
          )}
        </div>
  )
}
