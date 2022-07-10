import React from "react";

function ProfileCard() {
  return (
    <div className="mt-32">
      <img
        className="mx-auto rounded-full ring ring-black ring-offset-base-200 ring-offset-2 w-16 md:w-32 lg:w-48 h-16 md:h-32 lg:h-48"
        src="/images/walter-white.jpg"
        alt="walter-white"
      />
      <h1 className="mt-6 text-4xl text-center">Doğukan Çaltekin</h1>
    </div>
  );
}

export default ProfileCard;
