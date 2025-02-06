import SideNav from "../../components/SideNav";
import Box from "@mui/material/Box";

const AddUserComponent = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="font-montserrat text-xl capitalize mt-14">
          add user
        </h1>
      </Box>
    </Box>
  );
};

export default AddUserComponent;
