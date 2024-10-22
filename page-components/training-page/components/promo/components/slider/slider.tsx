import React, {ReactElement} from "react";
import {SliderProps} from "./slider.props";
import styles from "./slider.module.css";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import clsx from "clsx";
import Slide from "@/app/(gray)/training/components/promo/components/slide/slide";

const Slider = ({className}: SliderProps): ReactElement | null => {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 4000,
      }}
      pagination={{
        el: `.${styles.pagination}`,
        bulletClass: styles.paginationItem,
        bulletActiveClass: styles.active,
        renderBullet: function (index, className) {
          return `<span class="${className}"><span class="${styles.inner}"></span></span>`;
        },
      }}
      spaceBetween={1}
      slidesPerView={1}
      onAutoplayTimeLeft={function (swiper, timeLeft, percentage) {
        const activeBullet = swiper.pagination.bullets[swiper.activeIndex];

        if (!activeBullet) return;

        (activeBullet.querySelector(`.${styles.inner}`)! as HTMLElement).style.width = `${
          100 - percentage * 100
        }%`;
      }}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <div className={clsx(styles.pagination)}></div>
    </Swiper>
  );
};

export default Slider;
