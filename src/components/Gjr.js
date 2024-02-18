import { Link } from "react-router-dom";
import { Hero } from "../Hero";
import { GjrNavbar } from "../GjrNavbar";

// import { SwiperHero } from "../SwiperHero";
import "./Gjr.css";

const slides = [
  { url: "images/gjr-img-01.jpg", title: "sky_img_01" },
  { url: "images/gjr-img-02.jpg", title: "sky_img_02" },
  { url: "images/gjr-img-03.jpg", title: "sky_img_03" },
  { url: "images/gjr-img-04.jpg", title: "sky_img_04" },
];

export const Gjr = () => {
  return (
    <>
      <GjrNavbar />

      <div className="gjr_better_life">
        <div className="gjr-better_life_content">
          <div className="life_text">
            <p>Life is better with storage!</p>
            <p>
              As on of the emerging fitted wardrobe companies, we believe that
              an organised life is a happy life. That's why our fitted furniture
              is built to last and is available in a variety of styles and
              finishes, from contemporary to classic.
            </p>
            <button data-text="BOOK A FREE DESIGN VISIT">
              BOOK A FREE DESIGN VISIT
            </button>
          </div>
          <div className="life_images_box">
            <div className="life_img_box">
              <img src="images/gjr-img-02.jpg" alt="" />
            </div>
            <div className="life_img_box">
              <img src="images/gjr-img-04.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="clever_solutions">
        <div className="clever_content">
          <div className="clever_text">
            <h1 className="title">Simple, clever storage solutions</h1>
            <p>
              From pull-out shoe racks to soft-close jewellery trays, our
              interiors are full of smart storage ideas to keep life organised.
              We're a furniture supplier you can trust, so explore our
              tailor-made collections below.
            </p>
          </div>
          <div className="clever_images_box">
            <div className="clever_img_box">
              <img src="images/gjr-img-02.jpg" alt="" />
              <div className="title">Fitted Wardrobes</div>
            </div>
            <div className="clever_img_box">
              <img src="images/gjr-img-03.jpg" alt="" />
              <div className="title">Living Spaces</div>
            </div>
            <div className="clever_img_box">
              <img src="images/gjr-img-02.jpg" alt="" />
              <div className="title">Living Spaces</div>
            </div>
            <div className="clever_img_box">
              <img src="images/gjr-img-01.jpg" alt="" />
              <div className="title">Living Spaces</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
