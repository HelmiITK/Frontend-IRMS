// import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { HiClipboardList } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { IoWarning } from "react-icons/io5";

import { useLocation, useNavigate } from "react-router-dom";
import LogoKPI from "../assets/KPI_logo_2.png";
import { useState } from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import FullScreenComponent from "./SideNavComponent/FullScreenComponent";
import LiveClockComponent from "./SideNavComponent/LiveClockComponent";
import ProfileComponent from "./SideNavComponent/ProfileComponent";
import LanguageSwitcherComponent from "./SideNavComponent/LanguageSwitcherComponent";

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

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuSidebar1 = [
    {
      label: "Dashboard",
      icon: <IoSpeedometerSharp />,
      route: "/dashboard",
    },
    {
      label: "User Management",
      icon: <FaUsers />,
      route: "/user_management",
    },
    {
      label: "User Alerts",
      icon: <IoNotificationsSharp />,
      route: "/user_alerts",
    },
  ];

  const menuSidebar2 = [
    {
      label: "Incident Report",
      icon: <HiClipboardList />,
      route: "/incident_report",
    },
    {
      label: "My Incident Report",
      icon: <IoMdAddCircle />,
      route: "/my_incident_report",
    },
    {
      label: "History My Incident Report",
      icon: <IoMdAddCircle />,
      route: "/history_my_incident_report",
    },
    {
      label: "Task Incident Report",
      icon: <IoWarning />,
      route: "/task_incident_report",
    },
    {
      label: "History Task Incident Report",
      icon: <IoWarning />,
      route: "/history_task_incident_report",
    },
  ];

  const menuSidebar3 = [
    {
      label: "Result",
      icon: <HiSpeakerphone />,
      route: "/result",
    },
  ];
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
          <div className="flex items-center gap-4">
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

        {/* sidebar 1 */}
        <List>
          {menuSidebar1.map((item, index) => {
            const isActive =
              location.pathname.startsWith(item.route) ||
              (item.route === "/user_management" &&
                location.pathname.startsWith("/add_user"));
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => navigate(item.route)}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      backgroundColor: isActive ? "#1D8000" : "transparent", // Highlight active route
                      color: isActive ? "white" : "black", // Change text color
                      "&:hover": {
                        backgroundColor: isActive ? "#1D8000" : "#f4f4f4", // Hover effect for active route
                      },
                    },
                    open
                      ? { justifyContent: "initial" }
                      : { justifyContent: "center" },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        color: isActive ? "white" : "black", // Set icon color to white if active
                      },
                      open
                        ? {
                            mr: 2,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <h1
                    className={`text-sm ${
                      isActive ? "text-white" : "text-black"
                    } ${open ? "opacity-100" : "hidden"}`}
                  >
                    {item.label}
                  </h1>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ marginInline: "25px", marginBottom: "6px" }} />

        {/* sidebar 2 */}
        {menuSidebar2.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate(item.route)}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor:
                    location.pathname === item.route
                      ? "#1D8000"
                      : "transparent", // Highlight active route
                  color: location.pathname === item.route ? "white" : "black", // Change text color
                  "&:hover": {
                    backgroundColor:
                      location.pathname === item.route ? "#1D8000" : "#f4f4f4", // Hover effect for active route
                  },
                },
                open
                  ? { justifyContent: "initial" }
                  : { justifyContent: "center" },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    color: location.pathname === item.route ? "white" : "black", // Set icon color to white if active
                  },
                  open
                    ? {
                        mr: 2,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <h1
                className={`text-sm ${
                  location.pathname === item.route ? "text-white" : "text-black"
                } ${open ? "opacity-100" : "hidden"}`}
              >
                {item.label}
              </h1>
            </ListItemButton>
          </ListItem>
        ))}

        <Divider
          sx={{ marginInline: "25px", marginTop: "6px", marginBottom: "6px" }}
        />

        {/* sidebar 3 */}
        {menuSidebar3.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate(item.route)}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  backgroundColor:
                    location.pathname === item.route
                      ? "#1D8000"
                      : "transparent", // Highlight active route
                  color: location.pathname === item.route ? "white" : "black", // Change text color
                  "&:hover": {
                    backgroundColor:
                      location.pathname === item.route ? "#1D8000" : "#f4f4f4", // Hover effect for active route
                  },
                },
                open
                  ? { justifyContent: "initial" }
                  : { justifyContent: "center" },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                    color: location.pathname === item.route ? "white" : "black", // Set icon color to white if active
                  },
                  open
                    ? {
                        mr: 2,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <h1
                className={`text-sm ${
                  location.pathname === item.route ? "text-white" : "text-black"
                } ${open ? "opacity-100" : "hidden"}`}
              >
                {item.label}
              </h1>
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
    </Box>
  );
}
