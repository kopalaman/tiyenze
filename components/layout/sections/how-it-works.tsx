import React, { FC } from "react"
import { CarFront, PhoneCall, Search, TextSelect } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export interface SectionHowItWorkProps {
  className?: string
  data?: (typeof DATA)[0][]
}

const DATA = [
  {
    id: 1,
    icon: <Search />,
    title: "Filter & Discover",
    desc: "Smart filtering and suggestions make it easy to find your vehicle",
  },
  {
    id: 2,
    icon: <TextSelect />,
    title: "View Specifications",
    desc: "Detailed vehicle specifications and buyer profiles",
  },
  {
    id: 3,
    icon: <PhoneCall />,
    title: "Request for purchase",
    desc: "Our customer chapions will contact you to promptly",
  },
  {
    id: 4,
    icon: <CarFront />,
    title: "Enjoy your car",
    desc: "Have fun and enjoy your 5-star quality vehicle",
  },
]

const HowItWorks: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DATA,
}) => {
  return (
    <div className={`${className}`}>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        {data.map((item: (typeof DATA)[number], index: number) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {/* <NcImage
              containerClassName="mb-4 sm:mb-10 max-w-[140px] mx-auto"
              className="rounded-3xl"
              src={item.img}
              sizes="150px"
              alt="HIW"
            /> */}
            {item.icon}
            <div className="text-center mt-auto space-y-5">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
