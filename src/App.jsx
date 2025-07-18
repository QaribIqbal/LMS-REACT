// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from 'primereact/api';
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import DashboardLayoutBasic from "./sidemenu.jsx";
import { TaskProvider } from "./context.jsx";

function App() {
  return (
    <BrowserRouter>
      <PrimeReactProvider>
        <TaskProvider>
          <DashboardLayoutBasic />
        </TaskProvider>
      </PrimeReactProvider>
    </BrowserRouter>
  );
}

export default App;