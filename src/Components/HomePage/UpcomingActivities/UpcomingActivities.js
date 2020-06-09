import React, { useEffect } from "react";
import "./UpcomingActivities.css";
import Swiper from "swiper";
import { Button } from "react-bootstrap";

const UpcomingActivities = () => {
  useEffect(() => {
    var swiper = new Swiper("#UpcomingActivities-swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: "#UpcomingActivities-swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      lazy: true,
      //   slidesPerView: 3,
      //   spaceBetween: 30,
      navigation: {
        nextEl: "#UpcomingActivities-swiper-button-next",
        prevEl: "#UpcomingActivities-swiper-button-prev",
      },
    });
  }, []);

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      <div id="UpcomingActivitiescenter">
        <div className="UpcomingActivitiescenter" id="UpcomingActivitiesHeader">
          Upcoming Activities
        </div>
        <div
          className="swiper-container"
          id="UpcomingActivities-swiper-container"
        >
          <div id="wrapper1" className="swiper-wrapper">
            <div className="swiper-slide" id="UpcomingActivities-swiper-slide">
              <img
                id="UpcomingActivities-swipe-image"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"
                alt="news"
              />
              <span id="UpcomingActivities-swipe-title">
                Let’s Download Telegra m
              </span>
              <span id="UpcomingActivities-swipe-description">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div id="UpcomingActivitiescenter">
                <Button id="UpcomingActivities-swipe-btn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide" id="UpcomingActivities-swiper-slide">
              <img
                id="UpcomingActivities-swipe-image"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg"
                alt="news"
              />
              <span id="UpcomingActivities-swipe-title">
                Let’s Download Telegra m
              </span>
              <span id="UpcomingActivities-swipe-description">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div id="UpcomingActivitiescenter">
                <Button id="UpcomingActivities-swipe-btn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide" id="UpcomingActivities-swiper-slide">
              <img
                id="UpcomingActivities-swipe-image"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-2.jpg"
                alt="news"
              />
              <span id="UpcomingActivities-swipe-title">
                Let’s Download Telegram
              </span>
              <span id="UpcomingActivities-swipe-description">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div id="UpcomingActivitiescenter">
                <Button id="UpcomingActivities-swipe-btn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide" id="UpcomingActivities-swiper-slide">
              <img
                id="UpcomingActivities-swipe-image"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg"
                alt="news"
              />
              <span id="UpcomingActivities-swipe-title">
                Let’s Download Telegra m
              </span>
              <span id="UpcomingActivities-swipe-description">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div id="UpcomingActivitiescenter">
                <Button id="UpcomingActivities-swipe-btn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide" id="UpcomingActivities-swiper-slide">
              <img
                id="UpcomingActivities-swipe-image"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-5.jpg"
                alt="news"
              />
              <span id="UpcomingActivities-swipe-title">
                Let’s Download Telegra m
              </span>
              <span id="UpcomingActivities-swipe-description">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div id="UpcomingActivitiescenter">
                <Button id="UpcomingActivities-swipe-btn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
          </div>
          {width > 500 ? (
            <>
              <div
                className="swiper-button-next"
                id="UpcomingActivities-swiper-button-next"
              ></div>
              <div
                className="swiper-button-prev"
                id="UpcomingActivities-swiper-button-prev"
              ></div>
            </>
          ) : null}
          <div
            className="swiper-pagination"
            id="UpcomingActivities-swiper-pagination"
          ></div>
        </div>
      </div>
    </>
  );
};

export default UpcomingActivities;
