import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { HiClipboardList } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import LogoKPI from "../assets/KPI_logo_2.png";
import { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import FullScreenComponent from "./SideNavComponent/FullScreenComponent";
import LiveClockComponent from "./SideNavComponent/LiveClockComponent";
import ProfileComponent from "./SideNavComponent/ProfileComponent";
import LanguageSwitcherComponent from "./SideNavComponent/LanguageSwitcherComponent";
import { NavLink, useLocation } from "react-router-dom";

const drawerWidth = 275;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1D8000",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// Hamburger Menu
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

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
    // children: ["add_user", "detail_user", "edit_user"],
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
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    // sidenav by MaterialUI
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="flex flex-row justify-between items-start">
          {/* Hamburger menu */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          {/* left header nav  */}
          {!open ? (
            <div className="flex flex-row items-center gap-2">
              <img
                src={LogoKPI}
                alt="logo"
                className="w-8 h-8 border rounded-full shadow-lg"
              />
              <h1 className="text-white font-montserrat text-xl font-semibold text-start">
                PT KPI
              </h1>
            </div>
          ) : (
            <>
              <div className="text-transparent"></div>
            </>
          )}

          {/* right nav link */}
          <div className="flex items-center gap-2 lg:flex lg:items-center lg:gap-4">
            {/* language switcher by daisyUI*/}
            <LanguageSwitcherComponent />
            {/* fullscreen  */}
            <FullScreenComponent />
            {/* profile  */}
            <ProfileComponent />
          </div>
        </Toolbar>
      </AppBar>

      {/* Sidebar list */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            overflowX: "scroll", // Tambahkan ini untuk scroll horizontal
            whiteSpace: "nowrap", // Pastikan teks tetap dalam satu baris
          },
        }}
      >
        {/* header */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center ml-2 gap-2 py-2">
            <img
              src={LogoKPI}
              alt="logo kpi"
              className="w-8 h-8 shadow-lg rounded-full"
            />
            <p className="font-montserrat text-sm font-semibold text-primary">
              PT Kaltim Parna Industri
            </p>
          </div>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </div>
        <Divider />
        {/* live clock */}
        <div className="flex items-center justify-center py-4">
          {open ? <LiveClockComponent /> : <FaClock className="text-primary" />}
        </div>
        <Divider />
        {/* sidebar  */}
        <ul>
          {menuSidebar.map((item, index) => {
            // Cek apakah ini menu parent yang memiliki child routes
            // const isParentActive =
            //   item.children &&
            //   item.children.some((child) =>
            //     currentPath.includes(`/${item.route}/${child}`)
            //   );

            // Cek apakah halaman saat ini adalah halaman utama dari menu
            const isCurrentRoute = currentPath.includes(`/${item?.route}`);

            return (
              <li key={index}>
                <NavLink
                  to={item?.route}
                  end
                  className={({ isActive }) => {
                    const active = isActive || isCurrentRoute;
                    return open
                      ? `flex items-center p-3 transition ${
                          active ? "bg-primary text-white" : "text-black"
                        }`
                      : `flex items-center justify-center p-3 pl-5 transition ${
                          active ? "bg-primary text-white" : "text-black"
                        }`;
                  }}
                >
                  <span className="mr-3 text-lg">{item?.icon}</span>
                  {open && <span className="ml-3">{item?.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Divider sx={{ marginInline: "25px", marginBottom: "6px" }} />
      </Drawer>
    </Box>
  );
};

export default SideNav;
