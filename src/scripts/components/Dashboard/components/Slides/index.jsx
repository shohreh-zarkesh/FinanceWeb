import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

//Components
import { Slide } from "./Components/Slide";

export function Slides() {
  let slides = [1, 2, 3];
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div>
      <Carousel
        sx={{ maxWidth: 320 }}
        mx="auto"
        withIndicators
        height={200}
        styles={{
          indicator: {
            width: 12,
            height: 4,
            transition: 'width 250ms ease',
  
            '&[data-active]': {
              width: 40,
            },
          },
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides.map((slide, index) => {
          return <Slide>text ={slide[index]}</Slide>;
        })}
      </Carousel>
    </div>
  );
}
