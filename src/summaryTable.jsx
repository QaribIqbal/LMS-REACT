import { useContext, useEffect, useMemo, useState, useRef } from "react";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BlurText from "./blurText";
import { TaskContext } from "./TaskContext";

export default function RecentActivityTable() {
  const { tasks, addTask } = useContext(TaskContext);
  const [rows, setRows] = useState([]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && tasks.length === 0) {
      const defaultTasks = [
        {
          title: "Complete frontend UI",
          description:
            "Finish designing the user interface for the dashboard screen.",
          dueDate: "2025-07-01",
        },
        {
          title: "Write API integration logic",
          description:
            "Integrate backend APIs with the form submission module.",
          dueDate: "2025-07-03",
        },
        {
          title: "Team standup meeting",
          description:
            "Daily 15-minute sync with the development team via Zoom.",
          dueDate: "2025-06-29",
        },
        {
          title: "Fix login bug",
          description:
            "Resolve the issue where users are not redirected after login.",
          dueDate: "2025-06-30",
        },
        {
          title: "Prepare deployment checklist",
          description:
            "Document all steps and items needed before production deployment.",
          dueDate: "2025-07-05",
        },
      ];

      // Add each default task with a unique ID
      defaultTasks.forEach((task, index) => {
        addTask({
          id: index + 1, // Ensure unique ID
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
  // Prepare and format data
  useEffect(() => {
    const formattedTasks = tasks
      .map((task) => ({
        id: task.id,
        title: task.title,
        desc: task.desc,
        dueDate: task.dueDate,
        formattedDate: task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "N/A",
        status: task.status,
      }))
      // Sort by due date (newest first)
      .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))
      // Get top 5 most recent
      .slice(0, 5);

    setRows(formattedTasks);
  }, [tasks]); // Re-run when tasks change

  // Column definitions
  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 70,
        minWidth: 60,
        headerClassName: "table-header",
      
      },
      {
        field: "title",
        headerName: "Task",
        flex: 1.5,
        minWidth: 200,

        headerClassName: "table-header",
        renderCell: (params) => (
          <span className={params.row.status === "done" ? "line-through" : ""}>
            {params.value}
          </span>
        ),
      },
      {
        field: "desc",
        headerName: "Description",
        flex: 2.5,
            minWidth: 300,
        headerClassName: "table-header",
        renderCell: (params) => (
          <span className={params.row.status === "done" ? "line-through" : ""}>
            {params.value}
          </span>
        ),
      },
      {
        field: "formattedDate", // Correct field name
        headerName: "Due Date",
        flex: 1,
            minWidth: 120,
        headerClassName: "table-header",
      },
      {
        field: "status",
        headerName: "Status",
        flex: 0.8,
            minWidth: 120,

        headerClassName: "table-header",
        renderCell: (params) => (
          <span className={`status-badge ${params.value.toLowerCase()}`}>
            {params.value}
          </span>
        ),
      },
    ],
    []
  );

  return (
    <div className="p-0 m-0 mt-4">
      <BlurText
        text="To Do's"
        delay={180}
        animateBy="words"
        direction="top"
        className="display-6 fw-bolder mb-3 text-info-custom"
      />

      <Paper className="shadow theme hide-scrollbar" sx={{ height: 370, width: "100%" }}>
        <DataGrid
          className="theme overflow-auto hide-scrollbar"
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          sx={{
            border: 0,
              overflowY: "auto",          // still scrolls
     scrollbarWidth: "none", 
            "& .table-header": {
              backgroundColor: "inherit",
              fontWeight: "bold",
              scrollbarWidth: "none"
            },
            "& .status-badge": {
              padding: "4px 10px",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            },
            "& .status-badge.done": {
              backgroundColor: "#e3f2ed",
              color: "#0a8150",
            },
            "& .status-badge.pending": {
              backgroundColor: "#fef3e2",
              color: "#f79009",
            },
            "& .line-through": {
              textDecoration: "line-through",
              textDecorationColor: "darkgreen",
              textDecorationThickness: "2px",
            },
          }}
          disableRowSelectionOnClick
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
        />
      </Paper>
    </div>
  );
}
