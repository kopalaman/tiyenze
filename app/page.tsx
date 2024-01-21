import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import HeroCarousel from "@/components/layout/hero-carousel"
import DiscoverMoreSlider from "@/components/layout/sections/discover-more"
import FeaturedSlider from "@/components/layout/sections/featured"
import HowItWorks from "@/components/layout/sections/how-it-works"

export default function IndexPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="container pt-4">
        <HeroCarousel />
      </section>
      <section className="relative space-y-16 my-16 lg:space-y-24 lg:my-24">
        <DiscoverMoreSlider />
      </section>

      <section className="relative space-y-16 my-16 lg:space-y-24 lg:my-24">
        <FeaturedSlider />
      </section>

      <section className="container space-y-16 my-16 lg:space-y-24 lg:my-24">
        <HowItWorks />
      </section>
    </div>
  )
}
