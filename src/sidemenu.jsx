// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";
// import Chip from "@mui/material/Chip";
// import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";
// import { createTheme } from "@mui/material/styles";
// import CloudCircleIcon from "@mui/icons-material/CloudCircle";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
// import BarChartIcon from "@mui/icons-material/BarChart";
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { AppProvider } from "@toolpad/core/AppProvider";
// import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
// import { Account } from "@toolpad/core/Account";
// import { BrowserRouter, Link, Route, Routes } from "react-router";
// import Todo from "./todo.jsx";
// import Schedule from "./schedule.jsx";

// const NAVIGATION = [
//   {
//     kind: "header",
//     title: "Main items",
//   },
//   {
//     segment: "todo",
//     title: (
//       <Link
//         to="/todo"
//         style={{
//           textDecoration: "none", // remove underline
//           color: "inherit", // inherit from parent (usually black)
//         }}
//       >
//         My To-Dos
//       </Link>
//     ),
//     icon: <ChecklistRtlIcon />,
//   },
//   {
//     segment: "schedule",
//     title: (
//       <Link
//         to="/schedule"
//         style={{
//           textDecoration: "none", // remove underline
//           color: "inherit", // inherit from parent (usually black)
//         }}
//       >Schedule</Link>
//     ),
//     icon: <EditCalendarIcon />,
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Analytics",
//   },
//   {
//     segment: "reports",
//     title: "Reports",
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: "sales",
//         title: "Sales",
//         icon: <DescriptionIcon />,
//         path: "/reports/sales",
//       },
//       {
//         segment: "traffic",
//         title: "Traffic",
//         icon: <DescriptionIcon />,
//         path: "/reports/traffic",
//       },
//     ],
//   },
//   {
//     segment: "integrations",
//     title: "Integrations",
//     icon: <LayersIcon />,
//     path: "/integrations",
//   },
// ];

// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: true },
//   cssVariables: {
//     colorSchemeSelector: "class",
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// function SidebarFooter({ mini }) {
//   return (
//     <Typography
//       variant="caption"
//       sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
//     >
//       {mini ? "" : `© ${new Date().getFullYear()} Made with love by Qarib`}
//     </Typography>
//   );
// }

// SidebarFooter.propTypes = {
//   mini: PropTypes.bool.isRequired,
// };

// function CustomAppTitle() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <CloudCircleIcon fontSize="large" color="primary" />
//       <Typography variant="h6">Study Buddy</Typography>
//       <Chip size="small" label="BETA" color="info" />
//       <Tooltip title="Connected to production">
//         <CheckCircleIcon color="success" fontSize="small" />
//       </Tooltip>
//     </Stack>
//   );
// }

// function ToolbarActions() {
//   return (
//     <Stack direction="row">
//       <ThemeSwitcher />
//       <Account />
//     </Stack>
//   );
// }

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter("/dashboard");

//   const demoWindow = window ? window() : undefined;

//   return (
//     <BrowserRouter>
//       <AppProvider
//         navigation={NAVIGATION}
//         router={router}
//         theme={demoTheme}
//         window={demoWindow}
//         //      branding={{
//         //   logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
//         //   title: 'Study Buddy',
//         //   homeUrl: '/toolpad/core/introduction',
//         // }}
//       >
//         <DashboardLayout
//           slots={{
//             appTitle: CustomAppTitle,
//             toolbarActions: ToolbarActions, // Custom toolbar without search
//             sidebarFooter: SidebarFooter,
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<div>Page not found</div>} />
//             <Route path="/todo" element={<Todo></Todo>} />
//             <Route path="/schedule" element={<Schedule></Schedule>} />

//             {/* <Route path="/orders" element={<OrdersPage />} />
//           <Route path="/reports/sales" element={<SalesReportsPage />} />
//           <Route path="/reports/traffic" element={<TrafficReportsPage />} />
//           <Route path="/integrations" element={<IntegrationsPage />} /> */}

//             {/* Fallback route */}
//             <Route path="*" element={<div>Page not found</div>} />
//           </Routes>{" "}
//         </DashboardLayout>
//       </AppProvider>
//     </BrowserRouter>
//   );
// }
// sidemenu.jsx
import * as React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { Account } from "@toolpad/core/Account";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Todo from "./todo.jsx";
import Schedule from "./schedule.jsx";

const NAVIGATION = [
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
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
        path: "/reports/sales",
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
        path: "/reports/traffic",
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
    path: "/integrations",
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
          <Route path="/todo" element={<Todo />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route
            path="/reports/sales"
            element={<div>Sales Reports Page</div>}
          />
          <Route
            path="/reports/traffic"
            element={<div>Traffic Reports Page</div>}
          />
          <Route path="/integrations" element={<div>Integrations Page</div>} />
          <Route path="/" element={<Todo />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}
