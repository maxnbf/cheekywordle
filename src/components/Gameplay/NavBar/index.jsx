import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PeopleIcon from "@mui/icons-material/People";
import BarCharIcon from "@mui/icons-material/BarChart";
import Settings from "../Settings";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar(props) {
  const navigate = useNavigate();

  const name = useSelector((state) => state.auth.user_info.username);

  return (
    <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
      <HelpOutlineIcon
        onClick={() => {
          props.help(true);
        }}
        sx={{ cursor: "pointer" }}
      />
      <PeopleIcon
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/groups")}
      />
      <h1 className="text-3xl font-bold tracking-wider">{name}</h1>
      <BarCharIcon sx={{ cursor: "pointer" }} />
      <Settings
        sx={{ cursor: "pointer" }}
        darkness={props.darkness}
        dark={props.dark}
      />
    </div>
  );
}

export default NavBar;
