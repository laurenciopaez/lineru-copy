import React from "react";
import { Image } from "react-bootstrap";

const ContenedorNews = ({
  title,
  urlToImage,
  publishedAt,
  description,
  url,
  author
}) => {
  return (
    <div className="flex flex-col items-center text-blank justify-center h-96  rounded shadow-lg mx-4 my-8 bg-white overflow-auto">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={urlToImage} className="w-full h-auto" alt={title} />
      </a>
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 text-black">{title}</h1>
        <p className="text-gray-700 text-base">{publishedAt}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-600 text-sm">{author}</p>
      </div>
    </div>
  );
};

export default ContenedorNews;
