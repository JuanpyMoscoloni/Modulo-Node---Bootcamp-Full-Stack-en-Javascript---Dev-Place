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
                      className="mySwiper w-3/4 mb-4 mt-24 max-lg:w-full max-lg:p-0"
                  >
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt211e86a8a7352743/63aaffa47760ab1f00afffe4/Boxing_Day_AssetsPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"
                              alt="image slide 1"
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt1ed47d978aa17f7b/63ab121299beb9105fe6e2e0/Dunk_Low_General_BannersPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"
                              alt="image slide 2"
                          />
                      </SwiperSlide>
                      <SwiperSlide>
                          <img
                              className="object-fill w-full h-94"
                              src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blta07714ece0cb6f96/63864ac85bbc641099351e6e/AJ1_General_BannersPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"
                              alt="image slide 3"
                          />
                      </SwiperSlide>
                  </Swiper>
              </>
          );
      }