'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function Carr() {

    return (<>
        <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop

        renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center opacity-30 p-3 cursor-pointer z-20 `}
                onClick={clickHandler}
              >
                <img src="/img/icons/ArrowLeft.png" alt="arrowleft"/> 
              </div>
            );
          }}

          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center opacity-30 p-3 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <img src="/img/icons/ArrowRight.png" alt="arrowright"/> 

              </div>
            );
          }}
        
        > 
        <div> 
            <img src="/img/01.png" alt="image1"/> 
        </div> 
        <div> 
            <img src="/img/02.png" alt="image2" /> 
        </div> 
        <div> 
            <img src="/img/03.png" alt="image3"/> 
        </div> 
        <div> 
            <img src="/img/04.png" alt="image4"/>
        </div> 
    </Carousel> 
    </>
    )
    
  }
