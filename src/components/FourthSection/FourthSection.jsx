import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContenedorNews from "./ContenedorNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FourthSection = () => {
  const news = useSelector((state) => state.news.allNews);
  console.log(news);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full bg-white pt-20 flex pb-20">
        <div className=" bg-slate-100 w-[80%] m-auto">
          <h1 className="text-black w-1/2 font-bold text-3xl justify-center text-center m-auto mt-10 mb-8">Miles de colombianos ya conocen Lineru</h1>
          <div className="m-auto w-1/3 justify-center content-center flex">
          <Button className="text-violet-700 mr-5 border-2 p-2 bg-slate-50">Prensa</Button>{" "}
          <Button className="text-violet-700 border-2 p-2 bg-slate-50">Usuarios</Button>
          </div>
         
          <Slider {...settings} className="mt-4 ">
            {news !== undefined && news.map((el, index) => (
              <div key={index} className="outline-none focus:outline-none ">
                <ContenedorNews
                  key={index}
                  title={el.title}
                  url={el.url}
                  urlToImage={el.urlToImage}
                  publishedAt={el.publishedAt}
                  description={el.description}
                  author={el.author}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
