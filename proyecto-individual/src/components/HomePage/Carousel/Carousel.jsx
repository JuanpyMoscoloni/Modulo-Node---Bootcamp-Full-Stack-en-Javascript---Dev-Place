      import React from "react";
      // Import Swiper React components
      import { Swiper, SwiperSlide } from "swiper/react";
      
      // Import Swiper styles
      import "swiper/css";
      import "swiper/css/navigation";
      
      // import required modules
      import { Navigation } from "swiper";
      
      export default function Carousel() {
          return (
              <>
                  <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper"
                  >
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://img.freepik.com/free-vector/sport-shoes-sneakers-set_74855-313.jpg"
                              alt="image slide 1"
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1334.jpg?w=996"
                              alt="image slide 2"
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1761.jpg?w=740"
                              alt="image slide 3"
                          />
                      </SwiperSlide>
                  </Swiper>
              </>
          );
      }