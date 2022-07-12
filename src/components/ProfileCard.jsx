import { useEffect, useState } from "react";
import ImageFile from "./ImageFile";

function ProfileCard() {
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);
  return (
    <div className="mt-32">
      {image && (
        <img
          className="mx-auto rounded-full ring ring-black ring-offset-base-200 ring-offset-2 w-48 h-48 sm:w-32 sm:h-32"
          src={image}
          alt={avatar.name}
        />
      )}
      {!image && (
        <img
          className="mx-auto rounded-full ring ring-black ring-offset-base-200 ring-offset-2 w-48 h-48 sm:w-32 sm:h-32"
          src="/images/walter-white.jpg"
          alt={avatar.name}
        />
      )}
      {/* <h1 className="mt-6 text-4xl sm:text-3xl text-center">Walter White</h1> */}
      <div className="text-center ml-32 mt-8 sm:ml-0">
        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
