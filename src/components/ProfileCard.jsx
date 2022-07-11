import React from "react";

function ProfileCard() {
  return (
    <div className="mt-32">
      <img
        className="mx-auto rounded-full ring ring-black ring-offset-base-200 ring-offset-2 w-48 h-48 sm:w-32 sm:h-32"
        src="/images/walter-white.jpg"
        alt="walter-white"
      />
      <h1 className="mt-6 text-4xl sm:text-3xl text-center">Walter White</h1>
    </div>
  );
}

export default ProfileCard;
