import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import HeadingOne from "@/components/ui/heading/heading-1"

const FeaturedSlider = () => {
  return (
    <div className="container">
      <HeadingOne className="mb-10 lg:mb-12" rightDescText="Top premium cars">
        Featured
      </HeadingOne>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square  items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute start-1 sm:start-5 hover:bg-primary" />
        <CarouselNext className="absolute end-1 sm:end-5 hover:bg-primary" />
      </Carousel>
    </div>
  )
}

export default FeaturedSlider
