import AnimatedContent from "../Animations/animate";
import React, { useState, useMemo } from "react";
// import {motion} from 'framer-motion';
import BlurText from "../Animations/blurText";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Tabs,
  Tab,
  InputGroup,
  CloseButton,
} from "react-bootstrap";
import {
  PlusCircleFill,
  Trash3Fill,
  Calculator,
  InfoCircleFill,
} from "react-bootstrap-icons";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BootstrapCGPACalculator = () => {
  const [activeTab, setActiveTab] = useState("calculator");
  const [previousCgpa, setPreviousCgpa] = useState("");
  const [previousCredits, setPreviousCredits] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, grade: "A", credits: "3" },
    { id: 2, grade: "B+", credits: "3" },
    { id: 3, grade: "A-", credits: "4" },
  ]);
  const [results, setResults] = useState({
    semesterGpa: null,
    cumulativeCgpa: null,
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const gradePoints = useMemo(
    () => ({
      A: 4.0,
      "A-": 3.67,
      "B+": 3.33,
      B: 3.0,
      "B-": 2.67,
      "C+": 2.33,
      C: 2.0,
      "C-": 1.67,
      "D+": 1.33,
      D: 1.0,
      F: 0.0,
    }),
    []
  );

  const handleCourseChange = (id, field, value) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
    setIsCalculated(false);
  };

  const addCourse = () => {
    const newId =
      courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
    setCourses([...courses, { id: newId, grade: "A", credits: "3" }]);
    setIsCalculated(false);
  };

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
    setIsCalculated(false);
  };

  const calculateGpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const point = gradePoints[course.grade];
      if (!isNaN(credits) && point !== undefined) {
        totalCredits += credits;
        totalPoints += credits * point;
      }
    });

    const semesterGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

    const prevCreditsNum = parseFloat(previousCredits) || 0;
    const prevCgpaNum = parseFloat(previousCgpa) || 0;
    const prevTotalPoints = prevCreditsNum * prevCgpaNum;

    const cumulativeCredits = prevCreditsNum + totalCredits;
    const cumulativePoints = prevTotalPoints + totalPoints;
    const cumulativeCgpa =
      cumulativeCredits > 0 ? cumulativePoints / cumulativeCredits : 0;

    setResults({
      semesterGpa: semesterGpa.toFixed(2),
      cumulativeCgpa: cumulativeCgpa.toFixed(2),
    });
    setIsCalculated(true);
  };

  const clearAll = () => {
    setPreviousCgpa("");
    setPreviousCredits("");
    setCourses([{ id: 1, grade: "A", credits: "3" }]);
    setResults({ semesterGpa: null, cumulativeCgpa: null });
    setIsCalculated(false);
  };

  // Inline CSS for custom styling not covered by Bootstrap
  const customStyles = `.text-info-custom {
  color: rgb(30, 135, 240) !important;
}

/* Theme inheritance */

.theme {
  background-color: inherit !important;
  color: inherit !important;
}

.result-card:hover {
  /* if you want the card hover to also adapt */
  background-color: inherit !important;
  color: inherit !important;
}
`;
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <style>{customStyles}</style>
      <div className="py-5 theme">
        <Container>
          <header className="text-center mb-5">
            {/* <h1 className="display-4 fw-bold">CGPA Calculator</h1>
                        <p className="text-muted">A modern tool to forecast your academic performance.</p> */}
            <BlurText
              text="CGPA Calculator"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="display-4 fw-bold mb-3 text-info-custom"
            />

            {/* Replace subheader text with BlurText */}
            <BlurText
              text="A modern tool to forecast your academic performance."
              delay={200}
              animateBy="words"
              direction="bottom"
              className="text-grey"
            />
          </header>
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
          <Card className="shadow-lg rounded-4 border-secondary border-opacity-25 theme">
            <Card.Body className="p-lg-5 theme">
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-4 justify-content-center"
                variant="pills"
              >
                <Tab
                  eventKey="calculator"
                  title={
                    <>
                      <Calculator className="me-2" />
                      Calculator
                    </>
                  }
                >
                  <Form>
                    <Row className="g-4 mb-4 theme">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Previous CGPA</Form.Label>
                          <Form.Control
                            type="number"
                            max={4.0}
                            min={0.0}
                            placeholder="e.g., 3.50"
                            value={previousCgpa}
                            onChange={(e) => {
                              if (e.target.value > 4.0) {
                                setPreviousCgpa(4.0);
                              } else if (e.target.value < 0.0) {
                                setPreviousCgpa(0);
                              } else {
                                setPreviousCgpa(e.target.value);
                              }
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Previous Credits Earned</Form.Label>
                          <Form.Control
                          type="number"
                          placeholder="e.g., 60"
                          value={previousCredits}
                          // onChange={(e) => setPreviousCredits(e.target.value)}
                          onChange={(e) => {
                              if (e.target.value < 0.0) {
                                setPreviousCredits(0);
                              } else {
                                setPreviousCredits(e.target.value);
                              }
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <h5 className="text-center mb-3">
                      Current Semester Courses
                    </h5>
                    {courses.map((course, index) => (
                      <InputGroup className="mb-3 theme gap-2" key={course.id}>
                        <InputGroup.Text className="fw-bold theme">
                          #{index + 1}
                        </InputGroup.Text>
                        <Form.Select
                          value={course.grade}
                          onChange={(e) =>
                            handleCourseChange(
                              course.id,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          {Object.keys(gradePoints).map((grade) => (
                            <option key={grade} value={grade} className="theme">
                              {grade}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Select
                          value={course.credits}
                          onChange={(e) =>
                            handleCourseChange(
                              course.id,
                              "credits",
                              e.target.value
                            )
                          }
                        >
                          {[1, 2, 3, 4, 5].map((credit) => (
                            <option key={credit} value={credit}>
                              {credit} Credits
                            </option>
                          ))}
                        </Form.Select>
                        <Button
                          variant="outline-danger"
                          onClick={() => removeCourse(course.id)}
                        >
                          <Trash3Fill />
                        </Button>
                      </InputGroup>
                    ))}

                    <Button
                      variant="link"
                      onClick={addCourse}
                      className="p-0 text-decoration-none"
                    >
                      <PlusCircleFill className="me-2" />
                      Add Course
                    </Button>

                    {isCalculated && results.semesterGpa !== null && (
                      <Row className="mt-5 text-center">
                        <Col md={6} className="mb-3 mb-md-0">
                          <Card
                            bg="primary"
                            text="white"
                            className="result-card"
                          >
                            <Card.Body>
                              <Card.Title className="fs-6 text-primary-emphasis">
                                SEMESTER GPA (SGPA)
                              </Card.Title>
                              <p className="display-5 fw-bold mb-0">
                                {results.semesterGpa}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={6}>
                          <Card
                            bg="success"
                            text="white"
                            className="result-card"
                          >
                            <Card.Body>
                              <Card.Title className="fs-6 text-success-emphasis">
                                NEW CUMULATIVE CGPA
                              </Card.Title>
                              <p className="display-5 fw-bold mb-0">
                                {results.cumulativeCgpa}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    )}

                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5 pt-4 border-top border-secondary border-opacity-25">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={calculateGpa}
                        className="px-5"
                      >
                        Calculate
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="lg"
                        onClick={clearAll}
                        className="px-5"
                      >
                        Clear All
                      </Button>
                    </div>
                  </Form>
                </Tab>
                <Tab
                  eventKey="about"
                  title={
                    <>
                      <InfoCircleFill className="me-2" />
                      About & Grades
                    </>
                  }
                >
                  <div className="text-secondary">
                    <h3 className="text-theme">About This Calculator</h3>
                    <p>
                      This tool is for estimation purposes only and should not
                      be considered an official university calculation. It helps
                      you project your Semester GPA (SGPA) and new Cumulative
                      GPA (CGPA).
                    </p>
                    <hr className="my-4" />
                    <h4 className="text-theme">Grade Point Values</h4>
                    <Row>
                      {Object.entries(gradePoints).map(([grade, points]) => (
                        <Col xs={6} md={4} lg={3} key={grade} className="mb-3 theme">
                          <Card className="theme" bg="dark" text="white">
                            <Card.Body className="text-center p-2">
                              <span className="fw-bold">{grade}</span> ={" "}
                              <span className="text-primary">
                                {points.toFixed(2)}
                              </span>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>

          <footer className="text-center text-muted mt-5 theme">
            <p>
              Crafted with <FavoriteIcon style={{color:'red'}}></FavoriteIcon>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Qarib Iqbal Production. All
              Rights Reserved.
            </p>
          </footer>
                  </AnimatedContent>

        </Container>
      </div>
    </>
  );
};

export default BootstrapCGPACalculator;
