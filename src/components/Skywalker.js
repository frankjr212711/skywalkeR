import { Link } from "react-router-dom";
import { Hero } from "../Hero";
import "./Skywalker.css";
import {SkywalkerNav} from './SkywalkerNav'
import { SwiperHero } from "../SwiperHero";

const slides = [
  { url: "images/sky-img-01.jpg", title: "sky_img_01" },
  { url: "images/sky-img-02.jpg", title: "sky_img_02" },
  { url: "images/sky-img-03.jpg", title: "sky_img_03" },
  { url: "images/sky-img-04.jpg", title: "sky_img_04" },
];

export const Skywalker = () => {
  return (
    <>
    <SkywalkerNav/>
    </>
  );
};
