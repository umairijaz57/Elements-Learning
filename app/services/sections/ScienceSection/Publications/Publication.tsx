import { BulletList } from '@/components/custom/BulletList'
import { CustomAccordion } from '@/components/custom/CustomAccordion'
import { FadeIn } from '@/components/custom/FadeIn'
import { SlidingDiv } from '@/components/custom/SlidingDiv'
import React from 'react'
import { TextbooksPublications } from '../../MathSection/Publications/TextbooksPublications'
import { CarouselSingle } from '@/components/custom/CarouselSingle'
import { HexagonPlayButton } from '@/components/custom/HexagonPlayButton'
import { Textbooks } from './Textbooks'

export default function Publication() {
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
              <p className='text-center text-2xl lg:text-4xl'>۞سَنُرِيهِمْ ءَايَـٰتِنَا فِى ٱلْـَٔافَاقِ وَفِىٓ أَنفُسِهِمْ</p>
              <p className='text-center '>We will show them Our signs in the universe and within themselves - (41:53)</p>
            </div>
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
              <p className=''>At Elements Learning, we follow the spirit of Michael Faraday and Richard Feynman: science should be seen, touched, and tested. Learners begin with close observation and guided exploration, then use inductive reasoning to infer patterns and relationships from real phenomena. Through carefully designed hands-on experiments, they collect and analyze evidence, refine ideas into clear explanations, and apply those ideas to make predictions about new situations. We treat students as active investigators who ask questions, plan procedures, record results, and communicate findings so understanding is discovered rather than memorized.</p>
              <p className=''>Our publications support schools in bringing inquiry to life through practical materials that are structured, adaptable, and aligned to defined learning outcomes. They include the PBL Blueprints Series and the Elements Learning Science Lab series.</p>
            </div>
            {/* <SlidingDiv direction={"top"} className="pl-8 xs:pl-10 md:pl-24 lg:pl-32 xl:pl-52 py-4">
              <BulletList contentClass="text-base md:text-lg xl:text-xl"
              list={[
                {title: "Concrete", content: "Using physical manipulatives and objects to explore Mathematical ideas."},
                {title: "Pictorial", content: "Transitioning to visual representations such as diagrams and models to further conceptual understanding."},
                {title: "Abstract", content: "Finally, moving to abstract symbols and notations, solidifying students' mastery of concepts."}
              ]} />
            </SlidingDiv> */}
            <CustomAccordion containerClass={"w-full"} type="multiple" color="#55088C50" 
            items={[
              {
                title: "Lab Manuals",
                id: "Lab Manuals",
                content: <Textbooks />
              },
              {
                title: "Project Blueprints",
                id: "Project Blueprints",
                content: 
                <div className="py-2 xs:py-4 md:py-6 lg:py-8">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <SlidingDiv direction={"left"} className="sm:flex-[2_0_0] aspect-square bg-neutral-400">
                    <CarouselSingle containerClass={"size-full"} items={[
                          <img key={`popularMath-1`} src="/popularmath/1.jpg" alt="" className="size-full" />, 
                          <img key={`popularMath-2`} src="/popularmath/2.jpg" alt="" className="size-full" />, 
                          <img key={`popularMath-3`} src="/popularmath/3.jpg" alt="" className="size-full" />, 
                          <img key={`popularMath-4`} src="/popularmath/4.jpg" alt="" className="size-full" />,
                      ]}
                      nextButton={
                        <div className="size-10 lg:size-16 pr-2 xs:pr-0">
                          <HexagonPlayButton outerColor={"#55088C50"} innerColor={"#FFFFFF"}/>
                        </div>
                      } />
                    </SlidingDiv>
                    <SlidingDiv direction={"right"} className="flex-[3_0_0] flex flex-col p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-[#F3EEE8]">
                      <p>A structured, holistic PBL framework with 200+ projects across Grades 1–5. Blueprints are adaptable templates aligned to SLOs across the Intellectual, Spiritual, Physical, and Aesthetic dimensions, integrating Hunter’s Direct Instruction with Project-Based Learning. Each project includes objectives, prerequisite knowledge, material, instructions, assessment criteria, facilitation notes, and reflection prompts.
</p>
                    </SlidingDiv>
                  </div>
                </div>
              },
            ]}
            />          
          </div>
        </FadeIn>
  )
}
