import React from "react";
import IgImg1 from "../../assets/new/new1.jpg";
import IgImg2 from "../../assets/new/new2.jpeg";
import IgImg3 from "../../assets/new/new3.jpg";
import IgImg4 from "../../assets/new/new4.jpg";
import IgImg5 from "../../assets/new/new5.jpg";
import IgImg6 from "../../assets/new/new.jpg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-8">
      <p className="text-2xl font-bold mb-1">Follow us on Social Media</p>
      <p className="pb-3">@wearegupc</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
