import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HeroCarousel() {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full h-80">
                <CardContent className="flex aspect-auto items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute start-1 sm:start-5 hover:bg-primary" />
      <CarouselNext className="absolute end-1 sm:end-5 hover:bg-primary" />
    </Carousel>
  )
}

export default HeroCarousel
