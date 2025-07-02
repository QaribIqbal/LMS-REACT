import AnimatedContent from "./Animations/animate";
import BlurText from "./Animations/blurText";
import React, { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Typography,
  Box,
} from "@mui/material";

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}
function formatTime(timeSr) {
  const [hours, minutes] = timeSr.split(":");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  return `${formattedHours}:${minutes} ${ampm}`;
}
const defaultItems = [
  {
    id: 1,
    time: "09:00",
    location: "Conference Room A",
    person: "Dr. Smith",
    type: "Meeting",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 2,
    time: "11:00",
    location: "Room 204",
    person: "Students",
    type: "Class",
    date: new Date().toISOString().split("T")[0],
  },
  {
    id: 3,
    time: "14:00",
    location: "Auditorium",
    person: "Prof. Johnson",
    type: "Seminar",
    date: new Date().toISOString().split("T")[0],
  },
];

const headCells = [
  { id: "time", label: "Time" },
  { id: "location", label: "Location" },
  { id: "person", label: "Person / Audience" },
  { id: "type", label: "Type" },
  { id: "date", label: "Date" },
  { id: "actions", label: "Actions", sortable: false },
];

function descendingComparator(a, b, orderBy) {
  return String(b[orderBy]).localeCompare(String(a[orderBy]));
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function Schedule() {
  const [items, setItems] = useState(defaultItems);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("time");
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    id: "",
    time: "",
    location: "",
    person: "",
    type: "Class",
    date: "",
  });

  const sortedItems = useMemo(
    () => [...items].sort(getComparator(order, orderBy)),
    [items, order, orderBy]
  );

  const handleSort = (key) => {
    const isAsc = orderBy === key && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(key);
  };

  const handleFormChange = (e) =>
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (Object.values(formValues).some((v) => String(v).trim() === "")) return;
    if (formValues.id) {
      setItems((prev) =>
        prev.map((i) => (i.id === formValues.id ? formValues : i))
      );
    } else {
      setItems((prev) => [
        ...prev,
        { ...formValues, id: new Date().toISOString().split("T")[0] },
      ]);
    }
    setFormValues({
      id: "",
      time: "",
      location: "",
      person: "",
      type: "Class",
      date: "",
    });
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const current = items.find((i) => i.id === id);
    if (current) setFormValues(current);
    setShowForm(true);
  };

  const handleRemove = (id) => {
      setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const typeToVariant = (type) => {
    const t = type?.toLowerCase();
    return t === "meeting"
      ? "warning"
      : t === "class"
        ? "primary"
        : t === "seminar"
          ? "info"
          : "success";
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <Box sx={{ p: 3, mt: 4 }}>
     
      <BlurText
        text="My Schedule"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="display-6 fw-bolder mb-3 text-info-custom"
      />
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
      <Paper className="shadow mt-4" >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((cell) => (
                  <TableCell
                    key={cell.id}
                    sortDirection={orderBy === cell.id ? order : false}
                  >
                    {cell.sortable === false ? (
                      cell.label
                    ) : (
                      <TableSortLabel
                        active={orderBy === cell.id}
                        direction={orderBy === cell.id ? order : "asc"}
                        onClick={() => handleSort(cell.id)}
                      >
                        {cell.label}
                      </TableSortLabel>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedItems.map(({ id, time, location, person, type, date }) => (
                <TableRow key={id}>
                  <TableCell>{formatTime(time)}</TableCell>
                  <TableCell>{location}</TableCell>
                  <TableCell>{person}</TableCell>
                  <TableCell>
                    <Badge
                      bg={typeToVariant(type)}
                      pill
                      className="text-capitalize"
                      style={{ fontSize: "0.75rem", padding: "0.5rem 0.75rem" }}
                    >
                      {type}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(date)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      className="rounded-pill px-3"
                      onClick={() => handleEdit(id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-2 rounded-pill px-3"
                      onClick={() => handleRemove(id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Button
        variant="outline-success"
        className="mt-3 px-4"
        onClick={() => {
          setShowForm(true),
            setFormValues({
              id: "",
              time: "",
              location: "",
              person: "",
              type: "Class",
              date: "",
            });
        }}
      >
        + Add to Schedule
      </Button>

      {showForm && (
        <Box
          component="div"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(123, 118, 118, 0.07)",
            zIndex: 1040,
          }}
          onClick={() => setShowForm(false)}
        />
      )}
      {showForm && (
        <Box
          component="div"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 400,
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            boxShadow: 24,
            zIndex: 1045,
          }}
        >
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formValues.time}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formValues.location}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Person / Audience</Form.Label>
              <Form.Control
                type="text"
                name="person"
                value={formValues.person}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                name="type"
                value={formValues.type}
                onChange={handleFormChange}
              >
                <option>Meeting</option>
                <option>Class</option>
                <option>Seminar</option>
                <option>Personal</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Save
            </Button>
          </Form>
        </Box>
      )}
                        </AnimatedContent>

    </Box>
  );
}
