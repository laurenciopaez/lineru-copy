import React from "react";
import { Image } from "react-bootstrap";

const ContenedorNews = ({
  title,
  urlToImage,
  publishedAt,
  description,
  url,
}) => {
  return (
    <div className="text-black">
      <h1>{title}</h1>
      <a href={url}>
        <Image src={urlToImage} />
      </a>
      <div>
        <p>{publishedAt}</p>
        <p>{description}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default ContenedorNews;
