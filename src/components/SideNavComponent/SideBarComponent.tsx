import { NavLink } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import { FaClock } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import LiveClockComponent from "./LiveClockComponent";

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
  children?: { label: string; route: string }[];
}

interface SideBarComponentProps {
  open: boolean;
  handleDrawerClose: () => void;
  menuSidebar: MenuItem[];
}

const SideBarComponent: React.FC<SideBarComponentProps> = ({
  open,
  handleDrawerClose,
  menuSidebar,
}) => {
  const theme = useTheme();

  return (
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
      <DrawerHeader className="flex flex-row lg:gap-5">
        <h1 className="font-montserrat text-xs font-semibold text-primary ">
          PT Kaltim Parna Industri
        </h1>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <LuChevronRight /> : <LuChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      {/* live clock */}
      <div className="flex items-center justify-center py-4">
        {open ? <LiveClockComponent /> : <FaClock className="text-primary" />}
      </div>
      <Divider />

      {/* sidebar  */}
      <ul>
        {menuSidebar.map((item, index) => (
          <li
            key={index}
            className="flex flex-col hover:bg-gray-50 duration-150 ease-linear"
          >
            {/* Parent route */}
            {item.route && (
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
                        isActive ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {open && (
                      <span className="text-sm lg:text-base">{item.label}</span>
                    )}
                  </>
                )}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      <Divider sx={{ marginInline: "25px", marginBottom: "6px" }} />
    </Drawer>
  );
};

export default SideBarComponent;
