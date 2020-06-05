import React, { useEffect } from "react";
import "./UpcomingActivities.css";
import Swiper from "swiper";
import { Button } from "react-bootstrap";

const UpcomingActivities = () => {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
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
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      lazy: true,
      //   slidesPerView: 2,
      //   spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <>
      <div className="center Swipeheader ">Upcoming Activities</div>
      <div className="center" style={{ height: "80vh" }}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                className="Swipeimage"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg"
                alt="news"
              />
              <span className="Swipetitle">Let’s Download Telegra m</span>
              <span className="Swipedescription">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div className=" center">
                <Button className="Swipebtn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                className="Swipeimage"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg"
                alt="news"
              />
              <span className="Swipetitle">Let’s Download Telegra m</span>
              <span className="Swipedescription">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div className=" center">
                <Button className="Swipebtn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                className="Swipeimage"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-2.jpg"
                alt="news"
              />
              <span className="Swipetitle">Let’s Download Telegra m</span>
              <span className="Swipedescription">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div className=" center">
                <Button className="Swipebtn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                className="Swipeimage"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg"
                alt="news"
              />
              <span className="Swipetitle">Let’s Download Telegra m</span>
              <span className="Swipedescription">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div className=" center">
                <Button className="Swipebtn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide">
              <img
                className="Swipeimage"
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-5.jpg"
                alt="news"
              />
              <span className="Swipetitle">Let’s Download Telegra m</span>
              <span className="Swipedescription">
                Justice League’s Snyder cut realesing exclusively on HBO Max and
                Telegram in 2021 .
              </span>
              <div className=" center">
                <Button className="Swipebtn" variant="outline">
                  Join Telegram
                </Button>
              </div>
            </div>
            <div className="swiper-slide"></div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default UpcomingActivities;
