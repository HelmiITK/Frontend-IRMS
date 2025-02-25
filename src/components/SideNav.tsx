import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { HiClipboardList } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import AppBarComponent from "./SideNavComponent/AppBarComponent";
import SideBarComponent from "./SideNavComponent/SideBarComponent";
import { FaBuildingUser } from "react-icons/fa6";
import { PiBellRingingFill } from "react-icons/pi";
import { BiTask } from "react-icons/bi";

// validasi tipe data route dll
interface MenuItem {
  label: string;
  icon: JSX.Element;
  route?: string;
  children?: { label: string; route: string; icon: JSX.Element }[];
}

const menuSidebar: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <IoSpeedometerSharp />,
    route: "/dashboard",
  },
  {
    label: "User",
    icon: <FaBuildingUser />,
    children: [
      {
        label: "User Management",
        route: "user_management",
        icon: <FaUsers />,
      },
      {
        label: "User Alerts",
        route: "user_alerts",
        icon: <PiBellRingingFill />,
      },
    ],
  },
  {
    label: "Incident",
    icon: <HiClipboardList />,
    children: [
      {
        label: "Incident Report",
        route: "incident_report",
        icon: <HiClipboardList />,
      },
      {
        label: "My Incident Report",
        route: "my_incident_report",
        icon: <IoMdAddCircle />,
      },
      {
        label: "History My Incident Report",
        route: "history_my_incident_report",
        icon: <IoMdAddCircle />,
      },
    ],
  },

  {
    label: "Task",
    icon: <BiTask />,
    children: [
      {
        label: "Task Incident Report",
        route: "task_incident_report",
        icon: <IoWarning />,
      },
      {
        label: "History Task Incident Report",
        route: "history_task_incident_report",
        icon: <IoWarning />,
      },
    ],
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
