import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkContext } from "../../context/darkContext";
import { AuthContext } from "../../context/authContext";

function Navbar() {
  const { toggle, darkMode } = useContext(darkContext);
  const {  currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>THSocial</span>
        </Link>
        <HomeOutlinedIcon className="icon"></HomeOutlinedIcon>
        {darkMode ? (
          <WbSunnyOutlinedIcon
            className="icon"
            onClick={toggle}
          ></WbSunnyOutlinedIcon>
        ) : (
          <DarkModeOutlinedIcon
            className="icon"
            onClick={toggle}
          ></DarkModeOutlinedIcon>
        )}
        <GridViewOutlinedIcon className="icon"></GridViewOutlinedIcon>

        <div className="search">
          <SearchOutlinedIcon lassName="icon"></SearchOutlinedIcon>
          <input type={"text"} placeholder="Search..."></input>
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="icon"></PersonOutlinedIcon>
        <EmailOutlinedIcon className="icon"></EmailOutlinedIcon>
        <NotificationsNoneOutlinedIcon className="icon"></NotificationsNoneOutlinedIcon>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          ></img>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
