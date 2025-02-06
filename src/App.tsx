import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import UserManagementPage from "./pages/User/UserManagementPage";
import IncidentReportPage from "./pages/Incident Report/IncidentReportPage";
import UserAlertsPage from "./pages/User/UserAlertsPage";
import MyIncidentReportPage from "./pages/Incident Report/MyIncidentReportPage";
import HistoryMyIncidentReportPage from "./pages/Incident Report/HistoryMyIncidentReportPage";
import TaskIncidentReportPage from "./pages/Incident Report/TaskIncidentReportPage";
import HistoryTaskIncidentReportPage from "./pages/Incident Report/HistoryTaskIncidentReportPage";
import ResultPage from "./pages/Result/ResultPage";
import ProfileUserPage from "./pages/User/ProfileUserPage";
import AddUserComponent from "./components/UserComponents/AddUserComponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user_management" element={<UserManagementPage />} />
          <Route path="/user_alerts" element={<UserAlertsPage />} />
          <Route path="/profile_user" element={<ProfileUserPage/>}/>
          <Route path="/add_user" element={<AddUserComponent/>}/>

          <Route path="/incident_report" element={<IncidentReportPage />} />
          <Route
            path="/my_incident_report"
            element={<MyIncidentReportPage />}
          />
          <Route
            path="/history_my_incident_report"
            element={<HistoryMyIncidentReportPage />}
          />
          <Route
            path="/task_incident_report"
            element={<TaskIncidentReportPage />}
          />
          <Route
            path="/history_task_incident_report"
            element={<HistoryTaskIncidentReportPage />}
          />

          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
