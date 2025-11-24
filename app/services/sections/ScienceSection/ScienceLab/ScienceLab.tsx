import { CarouselSingle } from '@/components/custom/CarouselSingle'
import { ContentCard } from '@/components/custom/ContentCard'
import { CustomAccordion } from '@/components/custom/CustomAccordion'
import { FadeIn } from '@/components/custom/FadeIn'
import { HexagonPlayButton } from '@/components/custom/HexagonPlayButton'
import { MultiCarousel } from '@/components/custom/MultiCarousel'
import { SlidingDiv } from '@/components/custom/SlidingDiv'
import { MathLabEvents } from '@/constants/MathLabEvents'
import { packages } from '@/constants/packages'
import { sciencepackages } from '@/constants/sciencepakages'
import React from 'react'
import { Textbooks } from '../Publications/Textbooks'

export default function ScienceLab() {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
              <p>The Elements Learning (EL) Science Lab is a hands-on exploration space where students learn through observation, experimentation, and inquiry. Inspired by Faraday and Feynman, we encourage learners to see, touch, and test scientific ideas. Students work with real materials, conduct simple experiments, record findings, and use inductive reasoning to infer patterns and form explanations.</p>
            </div>
            {/* <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
              <MultiCarousel items={MathLabEvents} />
            </section> */}
            <CustomAccordion color="#55088C50" containerClass={"w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"} type="multiple"
            items={[
              {
                title: "Packages",
                id: "Packages",
                content: 
                
                <div className="flex flex-col gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
                  <p className="text-base md:text-lg xl:text-xl">We offer two packages in our Science Tamasha. Each package is tailored to meet the diverse needs of schools and educators.</p>    
                  <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                    {sciencepackages.map((pkg, i) => <ContentCard key={`package-${i}`} {...pkg} index={i} />)}
                  </div>
                </div>
    
              },
              {
                title: "Lab Manuals",
                id: "Lab Manuals",
                content: <Textbooks />
              },
            ]}
            />          
          </div>
        </FadeIn>
  )
}
