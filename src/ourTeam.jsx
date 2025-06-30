import AnimatedContent from "./animate";
import FuzzyText from "./glitch";
import GradientText from "./colorText";
import ChromaGrid from "./ChromaGrid";
import ShinyText from "./Shinytext";
import React from "react";
import Squares from "./squares";
import RotatingText from "./rotatingText";
import ProfileCard from "./profileCard";
import BlurText from "./blurText";
import "./Team.css";

function Team() {
  const items = [
    {
      image: "/WhatsApp Image 2025-06-30 at 9.40.05 PM.jpeg",
      title: "Ch Faizan",
      subtitle: "Frontend Developer",
      handle: "@faizan125",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg,rgb(255, 245, 56), #000)",
      url: "https://www.facebook.com/people/Chaudhry-Faizan-Mehmood/pfbid0bSc36rr877BJBnwjjnDmmBg5LZMxdp1B9u4gZ6b4JAXDcnFQ9AXudZdv2qiHz9arl/?mibextid=wwXIfr&rdid=kK9DgFN5fAvw6Fpk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16Wf7oe9W2%2F%3Fmibextid%3DwwXIfr",
    },
    {
      image: "/Screenshot (703).png",
      title: "Ch irfan",
      subtitle: "UI/UX",
      handle: "@irfan70",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://www.youtube.com/watch?v=e_04ZrNroTo",
    },
    {
      image: "/tb.png",
      title: "Tabinda Aslam",
      subtitle: "Fronted Developer",
      handle: "@Tibi12",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg,rgb(248, 69, 239), #000)",
      url: "https://www.youtube.com/watch?v=e_04ZrNroTo",
    },
  ];
  const items2 = [
    {
      image: "/zayn.png",
      title: "Malik Zayn",
      subtitle: "QA Engineer",
      handle: "@Rohitluv",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg,rgb(246, 153, 59), #000)",
      url: "https://www.facebook.com/people/Malik-Zain/pfbid0ysJAsQ6q9ZW9EmnEnfMPSriiyUCLBknmLdHHAWQQTA3dNqAewPiYHpJU3mjyLNTKl/?mibextid=wwXIfr&rdid=483UaHHFc7VbsM6Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CG3A5E7qa%2F%3Fmibextid%3DwwXIfr",
    },

    {
      image: "me007.jpeg",
      title: "Qarib Iqbal",
      subtitle: "Full Stack Deveveloper",
      handle: "@Qarib92",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg,rgb(74, 159, 255), #000)",
      url: "https://github.com/QaribIqbal",
    },
    // {
    //   image: "/public/Me01.jpeg",
    //   title: "Qarib Iqbal",
    //   subtitle: "Full Stack Deveveloper",
    //   handle: "@Qarib92",
    //   borderColor: "#3B82F6",
    //   gradient: "linear-gradient(145deg,rgb(74, 159, 255), #000)",
    //   url: "https://github.com/QaribIqbal",
    // },
  ];
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      {/* Background squares */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-n1"
        style={{ zIndex: 0 }}
      >
        <Squares
          speed={0.4}
          squareSize={40}
          direction="down"
          borderColor="rgb(11, 65, 128)"
          hoverFillColor="inherit"
        />
      </div>
      {/* Top-center text container */}
      <div
        className="d-flex mx-auto align-items-center mt-3 mb-4"
        style={{ zIndex: 1, whiteSpace: "nowrap" }}
      >
        <h1
          className=" me-2"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "inherit",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          Meet our
        </h1>
        <RotatingText
          texts={["Team", "Brain", "Genius"]}
          mainClassName="rotating-text-container text-primary fw-bolder"
          staggerFrom="last"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-visible"
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 400,
            duration: 0.5,
          }}
          rotationInterval={3000}
          textStyle={{
            fontSize: "clamp(2rem, 8vw, 4rem)",
            margin: 0,
            padding: 0,
            lineHeight: 1,
          }}
        />
      </div>
      <div className="heading d-flex mx-auto mt-4 pt-4 h2 z-1">
        <ShinyText
          text="TEAM LEAD"
          disabled={false}
          speed={3}
          className="h-1 fw-bolder mt-2"
        />
      </div>
      <div className="d-flex mx-auto mt-5">
        <ProfileCard
          name="Qarib Iqbal"
          title="Software Engineer"
          handle="qarib92"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/WhatsApp Image 2025-06-30 at 5.26.12 PM-min-Photoroom.png"
          iconUrl="/WhatsApp Image 2025-06-30 at 5.26.12 PM.jpeg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
      <div className="container mt-4">
        <div className="">
          <BlurText
            text="Isn't this so cool?!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="fs-4 fw-bolder mb-8"
          />
        </div>
      </div>
      <div className="container mt-4">
        <div
          style={{ marginTop: "80px", height: "auto", position: "relative" }}
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="h2 mb-2 fw-bolder"
          >
            Front End Team
          </GradientText>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
      <div className="container">
        <div
          style={{ marginTop: "80px", height: "auto", position: "relative" }}
        >
          {/* Fixed alignment for Testing Team */}
          <div className="d-flex justify-content-center w-100 mb-4">
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize="clamp(2rem, 8vw, 2.5rem)"
            >
              Testing Team
            </FuzzyText>
          </div>
          <ChromaGrid
            items={items2}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className=" d-flex"
          />
        </div>
      </div>
      <div
        className="position-relative d-flex justify-content-center align-items-start mt-4 p-4 mb-4 z-3"
      >
        <div className="d-flex">
        <BlurText
          text={`"We’re excited to introduce our brand‑new Learning Management System—designed by fellow learners, just like you. With our platform you can effortlessly track your tasks, stay on top of your daily schedule, and instantly calculate your CGPA. Our goal is to give you one simple hub so you can spend less time worrying about deadlines and can focus on what matters most: Growing as a Student"`}
          delay={180}
          animateBy="words"
          direction="top"
          className="fs-2 fw-bold mb-0 mt-2 text-primary"
          style={{color:"inherit"}}
        ></BlurText>
       </div>
      </div>
    </>
  );
}

export default Team;
