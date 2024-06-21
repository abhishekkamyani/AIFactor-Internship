import React, { useEffect, useState } from "react";

const testimonials = [
  { title: "Abc", desc: "1 loremk klnjngjkfn", imagePath: "./images/1.jpg" },
  { title: "Def", desc: "2 loremk klnjngjkfn", imagePath: "./images/2.jpg" },
];
let current = 0;
export default function Carousel() {
//   const [current, setCurrent] = useState(0);
  const handleNext = () => {
    current = (current + 1) % testimonials.length;
    updateSlide();
  };
  console.log(current);
  const handlePrevious = () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    updateSlide();
  };

  const updateSlide = () => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        if (index === current) {
            slide.classList.remove("hidden");
            slide.classList.remove("opacity-0");
            console.log(index);
        }
        else{
            slide.classList.add("hidden");
            slide.classList.add("opacity-0");
        }
    })
  }

  updateSlide();

//   useEffect(() => {
//     const slides = document.querySelectorAll(".slide");
//     slides.forEach((slide, index) => {
//         if (index === current) {
//             slide.classList.remove("block");
//             slide.classList.add("opacity-100");
//             console.log(index);
//         }
//         else{
//             slide.classList.add("hidden");
//             slide.classList.add("opacity-0");
//         }
//     })

//     // console.log(slide);
//   }, [current]);
  return (
    <section className="bg-gray-400 relative container w-11/12 mx-auto">
      {testimonials.map((testimonial, index) => (
//        {/* <div className={`auto slide ${index!==current && "hidden"}`} key={index}> */}
        <div className="hidden slide duration-1000 transition-all opacity-0" key={index}>
          <div className="w-60 mx-auto">
            <img src={testimonial.imagePath} className="w-full" />
          </div>
          <h4 className="text-center my-10">{testimonial.title}</h4>
          <p className="text-center">{testimonial.desc} </p>
        </div>
      ))}

      <span
        onClick={handlePrevious}
        className="absolute top-1/2 cursor-pointer text-xl translate-y-[-50%]"
      >
        ◀
      </span>
      <span
        onClick={handleNext}
        className="absolute top-1/2 cursor-pointer text-xl right-0 translate-y-[-50%]"
      >
        ▶
      </span>
    </section>
  );
}
