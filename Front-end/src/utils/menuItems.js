import LogOut from "../assets/images/LogOut.png";
import AboutUs from "../assets/images/info.png";
import UserInfo from "../assets/images/User.png";
import Documentation from "../assets/images/Document.png";
import Projects from "../assets/images/Projects.png";
import CreateProject from "../assets/images/NewProject.png";
import LogIn from "../assets/images/LogIn.png";
import RegisterUser from "../assets/images/NewUser.png";

const registered = [
  {
    key: "LogOut",
    option: LogOut
  },
  {
    key: "AboutUs",
    option: AboutUs
  },
  {
    key: "UserInfo",
    option: UserInfo
  },
  {
    key: "Documentation",
    option: Documentation
  },
  {
    key: "Projects",
    option: Projects
  },
  {
    key: "CreateProject",
    option: CreateProject
  }
];

const unRegistered = [
  {
    key: "LogIn",
    option: LogIn
  },
  {
    key: "AboutUs",
    option: AboutUs
  },
  {
    key: "Documentation",
    option: Documentation
  },
  {
    key: "RegisterUser",
    option: RegisterUser
  }
];

export default registered;
export { unRegistered };
