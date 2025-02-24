import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { HiClipboardList } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import AppBarComponent from "./SideNavComponent/AppBarComponent";
import SideBarComponent from "./SideNavComponent/SideBarComponent";

// validasi tipe data route dll
interface MenuItem {
  label: string;
  icon: JSX.Element;
  route: string;
}

const menuSidebar: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <IoSpeedometerSharp />,
    route: "/dashboard",
  },
  {
    label: "User Management",
    icon: <FaUsers />,
    route: "user_management",
  },
  {
    label: "User Alerts",
    icon: <IoNotificationsSharp />,
    route: "user_alerts",
  },
  {
    label: "Incident Report",
    icon: <HiClipboardList />,
    route: "incident_report",
  },
  {
    label: "My Incident Report",
    icon: <IoMdAddCircle />,
    route: "my_incident_report",
  },
  {
    label: "History My Incident Report",
    icon: <IoMdAddCircle />,
    route: "history_my_incident_report",
  },
  {
    label: "Task Incident Report",
    icon: <IoWarning />,
    route: "task_incident_report",
  },
  {
    label: "History Task Incident Report",
    icon: <IoWarning />,
    route: "history_task_incident_report",
  },
  {
    label: "Result",
    icon: <HiSpeakerphone />,
    route: "result",
  },
];

const SideNav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpen(true);
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    // sidenav by MaterialUI
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* app bar */}
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />

      {/* Sidebar list */}
      <SideBarComponent
        open={open}
        openDropdown={openDropdown}
        handleDrawerClose={handleDrawerClose}
        toggleDropdown={toggleDropdown}
        menuSidebar={menuSidebar}
      />
    </Box>
  );
};

export default SideNav;
