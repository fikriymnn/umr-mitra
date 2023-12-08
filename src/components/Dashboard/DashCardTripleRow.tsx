import React from "react";
import Image from "next/image";

function DashCardTripleRow({
  ratings,
  title,
  desc,
}: {
  ratings?: any;
  title?: any;
  desc?: any;
}) {
  const maxRating = 5;
  const rating = ratings;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      const isColored = i < rating;
      stars.push(
        <img
          key={i}
          src={isColored ? "/Star.svg" : "/StarGray.svg"}
          alt={`Star ${i + 1}`}
        />
      );
    }
    return stars;
  };
  return (
    <div className="bg-white rounded-md p-3 flex shadow-md">
      <div className="w-16 h-16 bg-slate-300 rounded-md"></div>
      <div className="flex flex-col justify-between ms-2">
        <p className="text-base font-semibold">{title}</p>
        <div className="flex">
          {renderStars()}
          <p className="pt-1 ps-3">
            &#40;{rating}&#47;{maxRating}&#41;
          </p>
        </div>
        <p className="text-[14px]">{desc}</p>
      </div>
    </div>
  );
}

export default DashCardTripleRow;
