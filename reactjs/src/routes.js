// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import SongManage from "views/RTL/SongManage.js";
import AlbumManage from "views/RTL/AlbumManage.js";
import ArtistManage from "views/RTL/ArtistManage.js";
import GenreManage from "views/RTL/GenreManage.js";

import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/zingstm",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/zingstm",
    logout: "block",
    user: "none",
    admin: "block",
  },
  // {
  //   path: "/admin",
  //   name: "Admin",
  //   rtlName: "آرتيإل",
  //   icon: <SupportIcon color="inherit" />,
  //   component: SongManage,
  //   layout: "/zingstm",
  // },
  {
    name: "ADMIN",
    category: "admin",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/manage-song",
        name: "Manage Song",
        rtlName: "لوحة القيادة",
        icon: <SupportIcon color="inherit" />,
        secondaryNavbar: true,
        component: SongManage,
        layout: "/zingstm",
      },
      {
        path: "/manage-album",
        name: "Manage Album",
        rtlName: "لوحة القيادة",
        icon: <SupportIcon color="inherit" />,
        secondaryNavbar: true,
        component: AlbumManage,
        layout: "/zingstm",
      },
      {
        path: "/manage-artist",
        name: "Manage Artist",
        rtlName: "لوحة القيادة",
        icon: <SupportIcon color="inherit" />,
        secondaryNavbar: true,
        component: ArtistManage,
        layout: "/zingstm",
      },
      {
        path: "/manage-genre",
        name: "Manage Genre",
        rtlName: "لوحة القيادة",
        icon: <SupportIcon color="inherit" />,
        secondaryNavbar: true,
        component: GenreManage,
        layout: "/zingstm",
      },
    ],
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/zingstm",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
