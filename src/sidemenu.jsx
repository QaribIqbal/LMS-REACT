import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { Account } from "@toolpad/core/Account";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Todo from "./todo.jsx";
import Schedule from "./schedule.jsx";
import CalculateIcon from '@mui/icons-material/Calculate';
import  DashboardIcon  from "@mui/icons-material/Dashboard";
import BootstrapCGPACalculator from "./cgpa.jsx";
import DashboardHome from "./dashboard.jsx";

const NAVIGATION = [
  { kind: "header", title: "Dashboard" },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard", // Added path property
  },
  { kind: "header", title: "Main items" },
  {
    segment: "todo",
    title: "My To‑Dos",
    icon: <ChecklistRtlIcon />,
    path: "/todo", // Added path property
  },
  {
    segment: "schedule",
    title: "Schedule",
    icon: <EditCalendarIcon />,
    path: "/schedule", // Added path property
  },
  { kind: "divider" },
  { kind: "header", title: "Tools" },
  {
    segment: "calculator",
    title: "CGPA Calculator",
    icon: <CalculateIcon />,
    path: "/calculator",
  },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: { colorSchemeSelector: "class" },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});

function useReactRouterAdapter() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  return {
    pathname: location.pathname,
    searchParams,
    navigate: (path) => navigate(path),
  };
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini ? "" : `© ${new Date().getFullYear()} Made with love by Qarib`}
    </Typography>
  );
}
SidebarFooter.propTypes = { mini: PropTypes.bool.isRequired };

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">Study Buddy</Typography>
      <Chip size="small" label="BETA" color="info" />
      <Tooltip title="Connected to production">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

function ToolbarActions() {
  return (
    <Stack direction="row">
      <ThemeSwitcher />
      <Account />
    </Stack>
  );
}

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useReactRouterAdapter();
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActions,
          sidebarFooter: SidebarFooter,
        }}
      >
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardHome/>}
          />
          <Route path="/todo" element={<Todo />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route
            path="/"
            element={
              <>
                <DashboardHome/>
              </>
            }
          />
          <Route path="/calculator" element={<BootstrapCGPACalculator />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}
