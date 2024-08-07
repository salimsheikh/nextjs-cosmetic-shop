import Image from "next/image";
import React from "react";

interface PropsType {
  img: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ img, title, desc }: PropsType) => {
  return <div className=" flex gap-4">
    <Image src={img} height={50} width={60} alt={title} />
    <div className="space-y-1">
        <h2 className="font-medium text-xl uppercase">{title}</h2>
        <p className="text-gray-600 text-[14px]">{desc}</p>
    </div>
  </div>;
};

export default FeatureCard;
