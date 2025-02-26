import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import LanguageSwitcherComponent from "./LanguageSwitcherComponent";
import FullScreenComponent from "./FullScreenComponent";
import ProfileComponent from "./ProfileComponent";
import LogoKPI from "../../assets/KPI_logo_2.png";
import { styled } from "@mui/material/styles";

const drawerWidth = 275; // Default drawer width for larger screens
const mobileDrawerWidth = 220;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#1D8000",
  marginLeft: open ? drawerWidth : 0, // Adjust based on open/closed state
  width: open
    ? `calc(100% - ${drawerWidth}px)` // Reduce width when drawer is open
    : "100%", // Full width when drawer is closed
  [theme.breakpoints.down("sm")]: {
    marginLeft: open ? mobileDrawerWidth : 0, // Adjust for mobile drawer
    width: open ? `calc(100% - ${mobileDrawerWidth}px)` : "100%",
  },
}));

interface AppBarComponentProps {
  handleDrawerOpen: () => void;
  open: boolean;
  language: string;
  handleLanguageChange: (lang: string) => void;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({
  handleDrawerOpen,
  open,
  language,
  handleLanguageChange,
}) => {
  return (
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
          <div className="hidden lg:block">
            <LanguageSwitcherComponent
              language={language}
              handleLanguageChange={handleLanguageChange}
            />
          </div>
          {/* fullscreen  */}
          <FullScreenComponent />
          {/* profile  */}
          <ProfileComponent
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
