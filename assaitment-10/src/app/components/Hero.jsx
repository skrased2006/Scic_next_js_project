"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome to MyShop</h1>
              <p className="mt-4 text-lg">Discover amazing products</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Best Quality</h1>
              <p className="mt-4 text-lg">Hand-picked products just for you</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Shop Smart</h1>
              <p className="mt-4 text-lg">Manage your items easily</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
