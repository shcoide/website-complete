import React, { useEffect, useRef } from "react";
import {Swiper} from "swiper";
import 'swiper/swiper-bundle.css';


import "./landingpage.css";
const Landing = () => {
    const sliderRef = useRef(null);
    const thumbsRef = useRef(null);
  
  //   useEffect(() => {
  //     // Initialize Swiper instances
  //     sliderRef.current = new Swiper(".gallery-slider", {
  //       slidesPerView: 1,
  //       loop: true,
  //       loopedSlides: 6,
  //       noSwiping: true,
  //       keyboard: {
  //         enabled: true,
  //       },
  //       mousewheel: {
  //         thresholdDelta: 70,
  //       },
  //       noSwipingClass: "swiper-slide",
  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //       },
  //     });
  
  //     thumbsRef.current = new Swiper(".gallery-thumbs", {
  //       slidesPerView: "auto",
  //       spaceBetween: 10,
  //       centeredSlides: false,
  //       loop: true,
  //       slideToClickedSlide: true,
  //     });
  //   // Handle click event on the slides using a custom click handler
  //   const handleSlideClick = (event) => {
  //       // Get the clicked slide
  //       const clickedSlide = event.target.closest(".swiper-slide");
  //       console.log(clickedSlide,"redy")
  
  //       if (clickedSlide) {
  //         // Manually trigger the slide change
  //         const slideIndex = clickedSlide.getAttribute("data-swiper-slide-index");
  //         console.log(slideIndex,"gadkgu");
  //         if (slideIndex) {
  //           sliderRef.current.slideTo(parseInt(slideIndex));
  //         }
  //       }
  //     };
  
  //     // Add the click handler to all slides
  //     sliderRef.current.slides.forEach((slide) => {
  //       slide.addEventListener("click", handleSlideClick);
  //     });
  
  //     // Return cleanup function
  //     return () => {
  //       // Remove the click handler from all slides
  //       sliderRef.current.slides.forEach((slide) => {
  //         slide.removeEventListener("click", handleSlideClick);
  //       });
  
  //       // Destroy Swiper instance when component unmounts
  //       if (sliderRef.current) {
  //         sliderRef.current.destroy();
  //         sliderRef.current = null; // Clear the reference
  //       }
  //     };
  // }, []);
  useEffect(() => {
    // Initialize Swiper instances
    const slider = new Swiper(".gallery-slider", {
      slidesPerView: 1,
      loop: true,
      loopedSlides: 6,
      noSwiping: true,
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      noSwipingClass: "swiper-slide",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
    const thumbs = new Swiper(".gallery-thumbs", {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: false,
      loop: true,
      slideToClickedSlide: true,
    });
  
    // Handle click event on the slides using a custom click handler
    const handleSlideClick = (event) => {
      const clickedSlide = event.target.closest(".swiper-slide");
      if (clickedSlide) {
        const slideIndex = parseInt(clickedSlide.getAttribute("data-swiper-slide-index"), 10);
        if (!isNaN(slideIndex)) {
          // Manually trigger the slide change
          slider.slideTo(slideIndex);
        }
      }
    };
  
    // Add the click handler to the thumbs container
    thumbs.el.addEventListener("click", handleSlideClick);
  
    // Return cleanup function
    return () => {
      // Remove the click handler from the thumbs container
      thumbs.el.removeEventListener("click", handleSlideClick);
  
      // Destroy Swiper instances when the component unmounts
      slider.destroy();
      thumbs.destroy();
    };
  }, []);

  return (
    <>
    
      <div className="gallery">
        <div className="content">
          <span>every</span>
          <h1>picture</h1>
          <p>tells a story</p>
          <hr />
        </div>
        <div className="swiper-container gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Man sitting on a stone on the lake"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Lake"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557060416-1418aefb165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Fishermen"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Surfer"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1677108581323-7050fbfd528f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Two dogs playing"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Standing man"
              />
            </div>
          </div>
        </div>
        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Man sitting on a stone on the lake"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Lake"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1676557060416-1418aefb165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Fishermen"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Surfer"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1677108581323-7050fbfd528f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Two dogs playing"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Standing man"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
