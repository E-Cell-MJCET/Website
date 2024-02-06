import Image from "next/image";
import React from "react";
import a1 from "../../public/assets/gallery/1.webp";
import a2 from "../../public/assets/gallery/2.webp";
import a3 from "../../public/assets/gallery/3.webp";
import a4 from "../../public/assets/gallery/4.webp";
import a5 from "../../public/assets/gallery/5.webp";
import a6 from "../../public/assets/gallery/6.webp";
import a7 from "../../public/assets/gallery/7.webp";
import a8 from "../../public/assets/gallery/8.webp";
import a9 from "../../public/assets/gallery/9.webp";
import b1 from "../../public/assets/gallery/10.webp";
import b2 from "../../public/assets/gallery/11.webp";
import b3 from "../../public/assets/gallery/12.webp";
import b4 from "../../public/assets/gallery/13.webp";
import b5 from "../../public/assets/gallery/14.webp";
import b6 from "../../public/assets/gallery/15.webp";
import b7 from "../../public/assets/gallery/16.webp";
import b8 from "../../public/assets/gallery/17.webp";
import b9 from "../../public/assets/gallery/18.webp";
import c1 from "../../public/assets/gallery/19.webp";
import c2 from "../../public/assets/gallery/20.webp";
import c3 from "../../public/assets/gallery/21.webp";
import c4 from "../../public/assets/gallery/22.webp";
import c5 from "../../public/assets/gallery/23.webp";
import c6 from "../../public/assets/gallery/24.webp";
import c7 from "../../public/assets/gallery/25.webp";
import c8 from "../../public/assets/gallery/26.webp";
import c9 from "../../public/assets/gallery/27.webp";

const GalleryTwo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  ">
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 ">
          <Image
            src={a4}
            alt=""
            className="h-[200px] w-[300px] border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300 object-cover"
          ></Image>
          <Image
            src={b2}
            alt=""
            className="h-[200px] w-[300px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
          ></Image>
        </div>
        <Image
          src={c5}
          alt=""
          className="h-[200px] w-[600px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
        ></Image>
        <div className="grid grid-cols-2 ">
          <Image
            src={b8}
            alt=""
            className="h-[200px] w-[300px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
          ></Image>
          <Image
            src={b5}
            alt=""
            className="h-[200px] w-[300px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
          ></Image>
        </div>
      </div>
      <div>
        {/* two */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src={b4}
            alt=""
            className="h-[200px] w-[600px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
          ></Image>
          <div className="grid grid-cols-2 ">
            <Image
              src={c1}
              alt=""
              className="h-[200px] w-[300px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
            ></Image>
            <Image
              src={c3}
              alt=""
              className="h-[200px] w-[300px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
            ></Image>
          </div>
          <Image
            src={c7}
            alt=""
            className="h-[200px] w-[600px] object-cover border-4 border-back-light dark:border-back-dark opacity-100 dark:opacity-100 dark:opacity-50 hover:opacity-70 delay-100 duration-300"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;
