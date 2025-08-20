import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Lahiru delivered a robust full-stack solution for our business. His technical expertise and attention to detail were outstanding.",
    quote: `The project was completed ahead of schedule and exceeded our expectations. Communication was clear and professional throughout.`,
    name: "Freelance Client",
    designation: "Fiverr",
  },
  {
    message:
      "His UI/UX designs transformed our platform, making it more user-friendly and visually appealing.",
    quote: `Lahiru's understanding of user needs and modern design principles helped us achieve our goals efficiently.`,
    name: "Academic Supervisor",
    designation: "University of Ruhuna",
  },
  {
    message:
      "Reliable, creative, and highly skilled in both front-end and back-end development.",
    quote: `Lahiru's work ethic and technical skills make him a valuable asset for any team or project.`,
    name: "Project Manager",
    designation: "Startup Client",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
