import React, { useState, useEffect } from "react";
import profImage from "../../assets/profile.png";
import "../../App.css";

function Profile() {
  return (
    <section
      id="profile"
      className="flex justify-between items-start w-full pt-16"
    >
      <div className="flex flex-col gap-5">
        <div className="img-div border-2 border-gray-400 bg-btn-opt shadow-xl">
          <img
            className="img-profile"
            // src="../../assets/profile-2.jpg"
            src={profImage}
            alt="Image"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-4xl font-bold text-txt-highlight">
            Hi, I am Rajan
          </h2>
          <p className="text-txt-secondary text-lg font-medium">
            I am a MERN stack developer, looking for internships.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
