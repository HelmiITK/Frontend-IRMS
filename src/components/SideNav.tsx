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
import { useLanguage } from "../translations/LanguageProvider";
import { TbBuildingBroadcastTower } from "react-icons/tb";

interface SideNavProps {
  handleLanguageChange: (lang: string) => void;
  t: (key: string) => string;
}

const SideNav: React.FC<SideNavProps> = ({ handleLanguageChange, t }) => {
  // validasi tipe data route dll
  interface MenuItem {
    label: string;
    icon: JSX.Element;
    route?: string;
    children?: { label: string; route: string; icon: JSX.Element }[];
  }

  const menuSidebar: MenuItem[] = [
    {
      label: `${t(`sidebar.parentRoute.route1`)}`,
      icon: <IoSpeedometerSharp />,
      route: "/dashboard",
    },
    {
      label: `${t(`sidebar.parentRoute.route2`)}`,
      icon: <FaBuildingUser />,
      children: [
        {
          label: `${t(`sidebar.childRoute.user.child1`)}`,
          route: "user_management",
          icon: <FaUsers />,
        },
        {
          label: `${t(`sidebar.childRoute.user.child2`)}`,
          route: "user_alerts",
          icon: <PiBellRingingFill />,
        },
      ],
    },
    {
      label: `${t(`sidebar.parentRoute.route3`)}`,
      icon: <HiClipboardList />,
      children: [
        {
          label: `${t(`sidebar.childRoute.incident.child1`)}`,
          route: "incident_report",
          icon: <HiClipboardList />,
        },
        {
          label: `${t(`sidebar.childRoute.incident.child2`)}`,
          route: "my_incident_report",
          icon: <IoMdAddCircle />,
        },
        {
          label: `${t(`sidebar.childRoute.incident.child3`)}`,
          route: "history_my_incident_report",
          icon: <IoMdAddCircle />,
        },
      ],
    },

    {
      label: `${t(`sidebar.parentRoute.route4`)}`,
      icon: <BiTask />,
      children: [
        {
          label: `${t(`sidebar.childRoute.task.child1`)}`,
          route: "task_incident_report",
          icon: <IoWarning />,
        },
        {
          label: `${t(`sidebar.childRoute.task.child2`)}`,
          route: "history_task_incident_report",
          icon: <IoWarning />,
        },
      ],
    },
    {
      label: `${t(`sidebar.parentRoute.route5`)}`,
      icon: <HiSpeakerphone />,
      route: "result",
    },
    {
      label: `${t(`sidebar.parentRoute.route6`)}`,
      icon: <TbBuildingBroadcastTower />,
      route: "broadcast",
    },
  ];
  const { language } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Fungsi untuk membuka sidebar saat hover
  const handleHoverOpen = () => {
    setOpen(true);
  };

  // Fungsi untuk menutup sidebar setelah hover
  const handleHoverClose = () => {
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
      <AppBarComponent
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        language={language}
        handleLanguageChange={handleLanguageChange}
      />

      {/* Sidebar list */}
      <SideBarComponent
        open={open}
        openDropdown={openDropdown}
        handleDrawerClose={handleHoverClose}
        toggleDropdown={toggleDropdown}
        menuSidebar={menuSidebar}
        handleHoverOpen={handleHoverOpen}
      />
    </Box>
  );
};

export default SideNav;
