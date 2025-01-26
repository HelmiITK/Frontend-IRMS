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
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { HiClipboardList } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import LogoKPI from "../assets/KPI_logo_2.png";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import LiveClockComponent from "./LiveClockComponent";
import { FaClock } from "react-icons/fa6";
import Flag from "react-world-flags";

const drawerWidth = 255;

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
  backgroundColor: "green",
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
  const [language, setLanguage] = useState("ID");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const settings = [
    { title: "Profile", icon: <FiUser />, color: "#000" },
    { title: "Logout", icon: <MdLogout />, color: "#f00" },
  ];
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);

    console.log(`Bahasa dipilih: ${lang}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="flex flex-row justify-between items-start">
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
          {/* header nav  */}
          <h1 className="text-white font-montserrat text-xl font-semibold text-start">
            PT KPI
          </h1>

          <div className="flex items-center gap-4">
            {/* language switcher */}
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className=" m-2"
                onClick={toggleDropdown}
              >
                🌐 {language == "ID" ? "ID" : "EN"}
              </div>
              {isDropdownOpen && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-md p-1 w-20 shadow-md text-black"
                >
                  <li>
                    <div
                      className="py-2 px-2"
                      onClick={() => handleLanguageChange("ID")}
                    >
                      <Flag
                        code="ID"
                        style={{ width: 25 }}
                        className="bg-black p-[1px]"
                      />
                      <a>ID</a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="py-2 px-2"
                      onClick={() => handleLanguageChange("EN")}
                    >
                      <Flag
                        code="us"
                        style={{ width: 25 }}
                        className="bg-black p-[1px]"
                      />
                      <a>EN</a>
                    </div>
                  </li>
                </ul>
              )}
            </div>

            {/* profile  */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <FaUserCircle className="w-8 h-8 text-white" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "40px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseUserMenu}
                    className="flex gap-2"
                  >
                    <Typography sx={{ color: setting.color }}>
                      {setting.icon}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center", color: setting.color }}
                    >
                      {setting.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
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
            <img src={LogoKPI} alt="logo kpi" className="w-8 h-8" />
            <p className="font-montserrat text-xs font-semibold text-green-700">
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
          {menuSidebar1.map((item, index) => (
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
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
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
                  className={`text-sm text-black ${
                    open ? "opacity-100" : "hidden"
                  }`}
                >
                  {item.label}
                </h1>
              </ListItemButton>
            </ListItem>
          ))}
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
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
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
                className={`text-sm text-black ${
                  open ? "opacity-100" : "hidden"
                }`}
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
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
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
                className={`text-sm text-black ${
                  open ? "opacity-100" : "hidden"
                }`}
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
