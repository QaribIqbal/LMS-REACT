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
      image: "https://i.pravatar.cc/300?img=1",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
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
          className="custom-class mt-2"
        />
      </div>
      <div className="d-flex mx-auto mt-5">
        <ProfileCard
          name="Qarib Iqbal"
          title="Software Engineer"
          handle="qarib92"
          status="Online"
          contactText="Contact Me"
          avatarUrl="../public/WhatsApp Image 2025-06-30 at 5.26.12 PM.jpeg"
          iconUrl="../public/WhatsApp Image 2025-06-30 at 5.26.12 PM.jpeg"
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
            className="text-2xl mb-8"
          />
        </div>
        <div
          style={{ marginTop: "200px", height: "auto", position: "relative" }}
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
      <div
        style={{ marginTop: "300px", height: "auto", position: "relative" }}
      >
        {/* Fixed alignment for Testing Team */}
        <div className="d-flex justify-content-center w-100 mb-4">
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={0.5} 
            enableHover={true} 
            fontSize="clamp(2rem, 8vw, 3rem)"
          >
            Testing Team
          </FuzzyText>
        </div>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </>
  );
}

export default Team;