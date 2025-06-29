import * as React from "react";
import { useContext, useState, useEffect, useMemo, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import Button from "react-bootstrap/Button";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { TaskContext } from "./TaskContext.jsx"; // Make sure this path is correct

export default function Todo() {
  const { tasks, addTask, removeTask, updateStatus } = useContext(TaskContext);
  const [rows, setRows] = useState([]);
  const hasInitialized = useRef(false);

  // Initialize default tasks only once
  useEffect(() => {
    if (!hasInitialized.current && tasks.length === 0) {
      const defaultTasks = [
        {
          title: "Complete frontend UI",
          description: "Finish designing the user interface for the dashboard screen.",
          dueDate: "2025-07-01",
        },
        {
          title: "Write API integration logic",
          description: "Integrate backend APIs with the form submission module.",
          dueDate: "2025-07-03",
        },
        {
          title: "Team standup meeting",
          description: "Daily 15-minute sync with the development team via Zoom.",
          dueDate: "2025-06-29",
        },
        {
          title: "Fix login bug",
          description: "Resolve the issue where users are not redirected after login.",
          dueDate: "2025-06-30",
        },
        {
          title: "Prepare deployment checklist",
          description: "Document all steps and items needed before production deployment.",
          dueDate: "2025-07-05",
        },
      ];
      
      // Add each default task with a unique ID
      defaultTasks.forEach((task, index) => {
        addTask({
          id: Date.now() + index, // Ensure unique ID
          title: task.title,
          desc: task.description,
          dueDate: task.dueDate,
          status: "pending",
        });
      });
      
      // Mark as initialized
      hasInitialized.current = true;
    }
  }, [tasks, addTask]);

  // Rebuild rows when tasks change
  useEffect(() => {
    setRows(
      tasks.map((t) => ({
        id: t.id,
        title: t.title,
        desc: t.desc,
        dueDate: t.dueDate,
        status: t.status,
      }))
    );
  }, [tasks]);

  // Column definitions with line-through styling for done tasks
  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        flex: 0.7,
        sortable: true,
        type: "number",
      },
      {
        field: "title",
        headerName: "Task",
        flex: 1.5,
        sortable: true,
        renderCell: (params) => (
          <span
            style={{
              textDecoration:
                params.row.status === "done" ? "line-through" : "none",
            }}
          >
            {params.value}
          </span>
        ),
      },
      {
        field: "desc",
        headerName: "Description",
        flex: 3.5,
        sortable: true,
        renderCell: (params) => (
          <span
            style={{
              textDecoration:
                params.row.status === "done" ? "line-through" : "none",
            }}
          >
            {params.value}
          </span>
        ),
      },
      {
        field: "dueDate",
        headerName: "Due Date",
        flex: 1,
        sortable: true,
        type: "date",
        valueGetter: (params) =>
          params.row?.dueDate ? new Date(params.row.dueDate) : null,
        renderCell: (params) => (
          <span
            style={{
              textDecoration:
                params.row.status === "done" ? "line-through" : "none",
            }}
          >
            {params.row?.dueDate || "N/A"}
          </span>
        ),
      },
      {
        field: "markAsDone",
        headerName: "Done",
        flex: 0.7,
        sortable: false,
        renderCell: (params) =>
          params.row.status === "done" ? (
            <CheckBox
              color="success"
              onClick={() => updateStatus(params.row.id)}
            />
          ) : (
            <CheckBoxOutlineBlank onClick={() => updateStatus(params.row.id)} />
          ),
      },
      {
        field: "actions",
        headerName: "Actions",
        width: 130,
        sortable: false,
        renderCell: (params) => (
          <Button
            className="rounded-pill"
            variant="outline-danger"
            size="sm"
            onClick={() => removeTask(params.row.id)}
          >
            Remove
          </Button>
        ),
      },
    ],
    [removeTask, updateStatus]
  );

  // Dialog and form state
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDesc("");
    setDueDate("");
  };

  const handleSubmit = () => {
    addTask({
      id: Date.now() + Math.random(), // Ensure unique ID
      title,
      desc,
      dueDate,
      status: "pending",
    });
    handleClose();
  };

  return (
    <div className="p-4">
      <Typography
        variant="h5"
        color="primary"
        className="fw-bolder"
        gutterBottom
      >
        To Do's
      </Typography>

      <Paper
        className="mt-2"
        sx={{ minWidth: 900, height: 400, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          sx={{ border: 0 }}
        />
      </Paper>

      <Button
        className="mt-3 px-4"
        onClick={handleOpen}
        variant="outline-success"
        size="md"
      >
        + Add Task
      </Button>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { sx: { borderRadius: 2, p: 2 } } }}
      >
        <DialogTitle className="fw-normal">Add a New Task</DialogTitle>
        <DialogContent sx={{ display: "grid", gap: 2, pt: 1 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
            multiline
            minRows={2}
          />
          <TextField
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions sx={{ pr: 3, pb: 2 }}>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={handleSubmit}
            disabled={!title.trim()}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}