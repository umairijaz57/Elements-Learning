import { FadeIn } from "@/components/custom/FadeIn"
import { MultiCarousel } from "@/components/custom/MultiCarousel"
import FlipCards from "./FlipCard";
import CardDetailing from "./CardDetailing";
import { sciencetraining } from "@/constants/ScienceTraining";

const Training = () => {
  
  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>At Elements Learning, we believe that effective science education begins with inquiry. Our science trainings focus on equipping teachers with the understanding, pedagogy, and practical tools needed to develop scientific thinking in students. Each training is rooted in experimentation, questioning, and discovery — ensuring teachers experience the same process of investigation they are meant to cultivate in their classrooms.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8] flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          <h3 className="px-4 text-2xl min-[900px]:text-4xl xl:text-6xl text-center font-bold uppercase">Our Training Pipeline</h3>
          <FlipCards data={sciencetraining} />
          <CardDetailing />
        </section>
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>By the end of the training, teachers gain a clear understanding of how to make science inquiry-driven, hands-on, and conceptually grounded. The program ensures alignment with Pakistan’s national curriculum while embedding global best practices in science pedagogy and lab-based learning.</p>
        </div>
        {/* <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={TrainingEvents} />
        </section> */}
      </div>
    </FadeIn>
  )
}
export default Training;
