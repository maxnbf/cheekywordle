import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PeopleIcon from "@mui/icons-material/People";
import BarCharIcon from "@mui/icons-material/BarChart";
import Settings from "../Settings";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();

  return (
    <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
      <HelpOutlineIcon
        onClick={() => {
          props.help(true);
        }}
      />
      <PeopleIcon onClick={() => navigate("/groups")} />
      <h1 className="text-3xl font-bold tracking-wider">WORDLE</h1>
      <BarCharIcon />
      <Settings darkness={props.darkness} dark={props.dark} />
    </div>
  );
}

export default NavBar;
