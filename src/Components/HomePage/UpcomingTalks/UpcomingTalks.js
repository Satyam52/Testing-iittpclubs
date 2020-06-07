import React, { useEffect } from "react";
import Swiper from "swiper";
import "./UpcomigTalks.css";
const UpcomingTalks = () => {
  useEffect(() => {
    var swiper1 = new Swiper("#UpcomingTalks-swiper-container", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 4,
      spaceBetween: 30,
      mousewheel: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      lazy: true,
    });
  });
  return (
    <>
      <div id="UpcomingTalks-center">
        <div className="center" id="UpcomingTalksheader">
          Upcoming Talks & Workshops
        </div>
        <div className="swiper-container" id="UpcomingTalks-swiper-container">
          <div className="swiper-wrapper">
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
            <div id="UpcomingTalks-swiper-slide" className="swiper-slide">
              <span id="UpcomingTalksText">
                {" "}
                Advanced Chaos Theory by Prof. P C Deshmuk{" "}
              </span>

              <span id="UpcomingTalksDate">
                Sunday, 5-12-2020, 2:00 pm at TC1 Transit Campus
              </span>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default UpcomingTalks;
