// import
import Dashboard from "views/Dashboard/Dashboard.js";
import SongManage from "views/RTL/SongManage.js";
import AlbumManage from "views/RTL/AlbumManage.js";
import ArtistManage from "views/RTL/ArtistManage.js";
import GenreManage from "views/RTL/GenreManage.js";
import SuperAdmin from "views/RTL/SuperAdmin/S_Admin.js";

import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
	HomeIcon,
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
		logout: "block",
		user: "block",
		admin: "block",
		superAdmin: "none",
	},
	{
		name: "PERSONAL PAGES",
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
				logout: "none",
				user: "block",
				admin: "block",
				superAdmin: "none",
			},
			{
				path: "/signin",
				name: "Sign In",
				rtlName: "لوحة القيادة",
				icon: <DocumentIcon color="inherit" />,
				component: SignIn,
				layout: "/auth",
				logout: "block",
				user: "none",
				admin: "none",
				superAdmin: "none",
			},
			{
				path: "/signup",
				name: "Sign Up",
				rtlName: "لوحة القيادة",
				icon: <RocketIcon color="inherit" />,
				secondaryNavbar: true,
				component: SignUp,
				layout: "/auth",
				logout: "block",
				user: "none",
				admin: "none",
				superAdmin: "none",
			},
			{
				path: "/manage-user_admin",
				name: "Manage Admin&User",
				rtlName: "لوحة القيادة",
				icon: <SupportIcon color="inherit" />,
				secondaryNavbar: true,
				component: SuperAdmin,
				layout: "/zingstm",
				logout: "block",
				user: "block",
				admin: "block",
			},
			{
				path: "/manage-song",
				name: "Manage Song",
				rtlName: "لوحة القيادة",
				icon: <SupportIcon color="inherit" />,
				secondaryNavbar: true,
				component: SongManage,
				layout: "/zingstm",
				logout: "block",
				user: "block",
				admin: "block",
				superAdmin: "none",
			},
			{
				path: "/manage-album",
				name: "Manage Album",
				rtlName: "لوحة القيادة",
				icon: <SupportIcon color="inherit" />,
				secondaryNavbar: true,
				component: AlbumManage,
				layout: "/zingstm",
				logout: "none",
				user: "none",
				admin: "block",
				superAdmin: "none",
			},
			{
				path: "/manage-artist",
				name: "Manage Artist",
				rtlName: "لوحة القيادة",
				icon: <SupportIcon color="inherit" />,
				secondaryNavbar: true,
				component: ArtistManage,
				layout: "/zingstm",
				logout: "none",
				user: "none",
				admin: "block",
				superAdmin: "none",
			},
			{
				path: "/manage-genre",
				name: "Manage Genre",
				rtlName: "لوحة القيادة",
				icon: <SupportIcon color="inherit" />,
				secondaryNavbar: true,
				component: GenreManage,
				layout: "/zingstm",
				logout: "none",
				user: "none",
				admin: "block",
				superAdmin: "none",
			},
		],
	},
];
export default dashRoutes;
