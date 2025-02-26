import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
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
import AddUserComponent from "./components/UserManagement/Action/AddUser/AddUserComponent";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import DetailUserComponent from "./components/UserManagement/Action/DetailUser/DetailUserComponent";
import EditUserComponent from "./components/UserManagement/Action/EditUser/EditUserComponent";
import Layout from "./layout/Layout";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./translations/LanguageProvider";

function App() {
  const [t] = useTranslation("global");
  const { changeLanguage } = useLanguage();

  return (
    <>
      <Router>
        <Routes>
          {/* nested routes  */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />

          <Route
            path="/dashboard"
            element={<Layout handleLanguageChange={changeLanguage} />}
          >
            <Route index element={<DashboardPage t={t} />} />
            <Route path="profile_user" element={<ProfileUserPage t={t}/>} />

            <Route path="user_management">
              <Route index element={<UserManagementPage />} />
              <Route path="add_user" element={<AddUserComponent />} />
              <Route path="detail_user" element={<DetailUserComponent />} />
              <Route path="edit_user" element={<EditUserComponent />} />
            </Route>

            <Route path="user_alerts" element={<UserAlertsPage />} />
            <Route path="incident_report" element={<IncidentReportPage />} />
            <Route
              path="my_incident_report"
              element={<MyIncidentReportPage />}
            />
            <Route
              path="history_my_incident_report"
              element={<HistoryMyIncidentReportPage />}
            />
            <Route
              path="task_incident_report"
              element={<TaskIncidentReportPage />}
            />
            <Route
              path="history_task_incident_report"
              element={<HistoryTaskIncidentReportPage />}
            />

            <Route path="result" element={<ResultPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
