import { useEffect, useState } from "react";

function ImageFile() {
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
    <>
      <div className="text-center ml-32 mt-8 sm:mx-auto">
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </div>
      {/* {avatar && <p>{avatar.name}</p>} */}
      {/* {image && (
        <img className="mx-auto mt-8 w-96 h-96" src={image} alt="profile" />
      )} */}
    </>
  );
}

export default ImageFile;
