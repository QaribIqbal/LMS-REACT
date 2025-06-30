// In DashboardHome.jsx
import Ballpit from "./background";
import BlurText from "./blurText";
import CgpaCard from "./cgpaCard"; // Add this import
import RecentActivityTable from "./summaryTable";
import AnimatedContent from "./animate";
import SummarySchedule from "./summarySchedule";
function DashboardHome() {
  return (
    <div className="py-5 px-1 w-100 theme overflow-auto">
      <BlurText
        text="Dashboard"
        delay={180}
        animateBy="words"
        direction="top"
        className="display-6 fw-bold mb-0 text-info-custom mt-2"
      />
      <div
        style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Ballpit
            count={200}
            gravity={0.4}
            friction={0.9}
            wallBounce={0.95}
            followCursor={false}
            colors={[
              "rgb(103, 80, 164)",
              "rgb(156, 163, 175)",
              "rgb(31, 41, 55)",
              "rgb(96, 165, 250)",
              "rgb(59, 130, 246)",
              "rgb(147, 197, 253)",
            ]}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
          <div className="d-flex row mt-4">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                  <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={true}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                  >
                    <SummarySchedule />
                  </AnimatedContent>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                    <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0}
                    delay={0.5}
                  >
                  <RecentActivityTable />
                  </AnimatedContent>
                </div>
              </div>
            </div>
            <div className="mt-4 col-sm-12 col-md-12 col-lg-4 mb-4">
                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                  >
              <CgpaCard />
                  </AnimatedContent>
            </div>
          </div>

          {/* Add the Recent Tasks table below */}
          {/* <RecentActivityTable />
          <SummarySchedule/> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
