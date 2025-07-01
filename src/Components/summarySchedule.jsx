import BlurText from "../Animations/blurText";
import React, { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
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
  // Removed Actions column
];

function descendingComparator(a, b, orderBy) {
  return String(b[orderBy]).localeCompare(String(a[orderBy]));
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function SummarySchedule() {
  const [items] = useState(defaultItems); // Removed setItems
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("time");

  const sortedItems = useMemo(
    () => [...items].sort(getComparator(order, orderBy)),
    [items, order, orderBy]
  );

  const handleSort = (key) => {
    const isAsc = orderBy === key && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(key);
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
    <Box sx={{ p: 0, mt: 4, m:0}}>
      <BlurText
        text="My Schedule"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="display-6 fw-bolder mb-3 text-info-custom"
      />

      <Paper className="shadow mt-4 " >
        <TableContainer className="hide-scrollbar">
          <Table  >
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
                  {/* Removed Actions buttons */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Removed Add to Schedule button */}
      {/* Removed form dialog */}
    </Box>
  );
}