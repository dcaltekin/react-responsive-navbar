import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <div>
      <Navbar activeTab={0} />
      <ProfileCard />
    </div>
  );
}

export default Home;
