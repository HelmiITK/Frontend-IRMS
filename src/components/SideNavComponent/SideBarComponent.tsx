import { NavLink } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import { FaClock } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import LiveClockComponent from "./LiveClockComponent";
import logoKpi from "../../assets/KPI_logo_2.png";
import { motion } from "framer-motion";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
// import Bumi from "../../pages/Three/Bumi";

const drawerWidth = 275; // Default drawer width for larger screens
const mobileDrawerWidth = 220; // Drawer width for mobile screens

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: mobileDrawerWidth, // Set to 220px on mobile screens
  },
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
  [theme.breakpoints.down("sm")]: {
    width: `calc(${theme.spacing(6)} + 1px)`, // Adjust for mobile
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

interface MenuItem {
  label: string;
  icon: JSX.Element;
  route?: string;
  children?: { label: string; route: string; icon: JSX.Element }[];
}

interface SideBarComponentProps {
  open: boolean;
  openDropdown: string | null;
  handleDrawerClose: () => void;
  toggleDropdown: (label: string) => void;
  menuSidebar: MenuItem[];
  handleHoverOpen: () => void;
}

const SideBarComponent: React.FC<SideBarComponentProps> = ({
  open,
  openDropdown,
  handleDrawerClose,
  handleHoverOpen,
  toggleDropdown,
  menuSidebar,
}) => {
  const theme = useTheme();

  // Animasi dropdown
  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.2 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleHoverOpen}
      // onMouseLeave={handleDrawerClose}
      sx={{
        "& .MuiDrawer-paper": {
          overflowX: "scroll", // Tambahkan ini untuk scroll horizontal
          whiteSpace: "nowrap", // Pastikan teks tetap dalam satu baris
        },
      }}
    >
      {/* header */}
      <DrawerHeader className="flex flex-row lg:gap-2">
        <div className="flex items-center gap-2">
          <img src={logoKpi} alt="" className="w-8 hidden lg:block" />
          <h1 className="font-montserrat text-xs font-semibold text-primary ">
            PT Kaltim Parna Industri
          </h1>
        </div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <LuChevronRight /> : <LuChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      {/* <Bumi /> */}

      {/* live clock */}
      <div className="flex items-center justify-center py-4">
        {open ? <LiveClockComponent /> : <FaClock className="text-primary" />}
      </div>
      <Divider />

      <div className="h-full flex flex-col justify-between">
        {/* sidebar  */}
        <ul>
          {menuSidebar.map((item, index) => (
            <li
              key={index}
              className="flex flex-col hover:bg-gray-50 duration-150 ease-linear capitalize"
            >
              {/* Parent route */}
              {item.route ? (
                <NavLink
                  to={item.route}
                  end
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 lg:px-6 transition ${
                      isActive ? "bg-primary text-white" : "text-gray-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`mr-3 text-lg ${
                          isActive ? "text-white" : "text-gray-700 "
                        }`}
                      >
                        {item.icon}
                      </span>
                      {open && (
                        <span className="text-sm lg:text-base">
                          {item.label}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ) : (
                <div
                  className={`flex items-center pl-6 pr-5 py-3 cursor-pointer ${
                    !open ? "justify-center" : "justify-between"
                  }`}
                  onClick={() => toggleDropdown(item.label)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-700">{item.icon}</span>
                    {open && (
                      <span className="text-sm lg:text-base text-gray-700 capitalize">
                        {item.label}
                      </span>
                    )}
                  </div>
                  {open &&
                    (openDropdown === item.label ? (
                      <FaChevronUp className="w-3 h-3 text-gray-500" />
                    ) : (
                      <FaChevronDown className="w-3 h-3 text-gray-500" />
                    ))}
                </div>
              )}

              {/* Dropdown Children route*/}
              {item.children && (
                <motion.ul
                  initial="closed"
                  animate={openDropdown === item.label ? "open" : "closed"}
                  variants={dropdownVariants}
                  className="ml-6 border-l-2 border-gray-300 pl-2 overflow-hidden"
                >
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={child.route}
                        className={({ isActive }) =>
                          `flex items-center gap-2 p-2 text-xs lg:text-sm transition  rounded capitalize ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                      >
                        <span>{child.icon}</span>
                        <span>{child.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
          <Divider sx={{ marginInline: "25px", marginBottom: "6px" }} />
        </ul>

        {/* logout */}
        <Link
          to={"/"}
          className="flex items-center gap-2 w-full px-4 justify-center"
        >
          <div className="flex items-center justify-center  gap-2 py-2 bg-gray-900 rounded-lg w-full hover:scale-95 hover:bg-black duration-150 ease-in-out">
            <IoLogOut className="text-xl text-white" />
            {open && <span className="text-white">logout</span>}
          </div>
        </Link>
      </div>
    </Drawer>
  );
};

export default SideBarComponent;
