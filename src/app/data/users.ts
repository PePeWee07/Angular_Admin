// Images
const avatar1 = "assets/images/users/avatar-1.png";
const avatar2 = "assets/images/users/avatar-2.png";
const avatar3 = "assets/images/users/avatar-3.png";
const avatar4 = "assets/images/users/avatar-4.png";
const avatar5 = "assets/images/users/avatar-5.png";
const avatar6 = "assets/images/users/avatar-6.png";
const avatar7 = "assets/images/users/avatar-7.png";
const avatar8 = "assets/images/users/avatar-8.png";
const avatar9 = "assets/images/users/avatar-9.png";

const UserListViewData = [
    { id: 1, userId: "#TW1500001", name: "Marie Prohaska", img: avatar2, designation: "Graphic Designer", location: "United Kingdom", email: "prohaska@tailwick.com", phoneNumber: "853 565 9802", joiningDate: "04 Jan, 2023", status: "Verified" },
    { id: 2, userId: "#TW1500002", name: "Jaqueline Hammes", img: avatar3, designation: "ASP.Net Developer", location: "Brazil", email: "jaqueline@tailwick.com", phoneNumber: "546 6334 586", joiningDate: "18 Jan, 2023", status: "Waiting" },
    { id: 3, userId: "#TW1500003", name: "Marlene Hirthe", img: avatar4, designation: "Angular Developer", location: "Spain", email: "marlene@tailwick.com", phoneNumber: "141 654 9876", joiningDate: "04 Feb, 2023", status: "Verified" },
    { id: 4, userId: "#TW1500004", name: "Akeem Paucek", img: avatar5, designation: "Jr. Developer", location: "Mexico", email: "akeem.p@tailwick.com", phoneNumber: "783 962 3972", joiningDate: "12 Feb, 2023", status: "Rejected" },
    { id: 5, userId: "#TW1500005", name: "Stephon Trantow", img: avatar6, designation: "Full Stack Developer", location: "Spain", email: "akeem.p@tailwick.com", phoneNumber: "032 126 5833", joiningDate: "31 Feb, 2023", status: "Waiting" },
    { id: 6, userId: "#TW1500006", name: "Domenic Tromp", designation: "Team Leader", location: "Germany", email: "domenic@tailwick.com", phoneNumber: "612 6088 735", joiningDate: "27 Oct, 2023", status: "Verified" },
    { id: 7, userId: "#TW1500007", name: "Ethel Corwin", img: avatar7, designation: "Web Designer", location: "Italy", email: "ecorwin@tailwick.com", phoneNumber: "216 897 4978", joiningDate: "03 Aug, 2023", status: "Verified" },
    { id: 8, userId: "#TW1500008", name: "Rickie Cremin", img: avatar8, designation: "Web Designer", location: "France", email: "ecorwin@tailwick.com", phoneNumber: "388 946 3889", joiningDate: "01 July, 2023", status: "Waiting" },
    { id: 9, userId: "#TW1500009", name: "Reagan Larson", designation: "Team Leader", location: "Denmark", email: "reagan@tailwick.com", phoneNumber: "612 6088 735", joiningDate: "27 Oct, 2023", status: "Verified" },
    { id: 10, userId: "#TW1500010", name: "Glennie Langosh", img: avatar9, designation: "Project Manager", location: "Germany", email: "glennie@tailwick.com", phoneNumber: "357 716 8847", joiningDate: "11 Dec, 2023", status: "Rejected" }
];

const GridViewData = [
    { id: 1, img: avatar1, name: "Paula Keenan", username: "@Admin", address: "748 Luettgen Plain Suite South Winstonfort, NM", isActive: true },
    { id: 2, img: avatar2, name: "Marie Prohaska", username: "@Subscriber", address: "125 Ortiz Camp Suite 471 Rippinport, US", isActive: true },
    { id: 3, img: avatar3, name: "Jaqueline Hammes", username: "@Editor", address: "8716 Dell Manors New Ahmedmouth, WI", isActive: true },
    { id: 4, name: "Angus Bergstrom", username: "@Developer", address: "617 Powlowski Crossroad Apt. 716 New Victoria", isActive: true },
    { id: 5, img: avatar4, name: "Aurore Maggio", username: "@Subscriber", address: "8751 Boyer Courts Suite 532 West Fletcherside", isActive: false },
    { id: 6, name: "Andrea Pesina", username: "@Editor", address: "32 Maidstone Road WELLSBOROUGH", isActive: true },
    { id: 7, img: avatar5, name: "Daniel Miller", username: "@Subscriber", address: "431 Elk Rd Little Ticonderoga, NY", isActive: false },
    { id: 8, img: avatar6, name: "Ashley Wilson", username: "@Subscriber", address: "0816 Bradford Alley Lake Adamfort, ME", isActive: true },
    { id: 9, img: avatar7, name: "William Heineman", username: "@Author", address: "99614 Pollich Extension Apt. 938 South Alf, GA", isActive: true },
    { id: 10, img: avatar8, name: "Kara Miller", username: "@Subscriber", address: "755 Kody Plaza Apt. 138 East Reinholdberg, AR", isActive: true },
    { id: 11, name: "Mark Walton", username: "@Author", address: "895 Camylle Tunnel Lake Chasity, SC", isActive: true },
    { id: 12, name: "David Biggs", username: "@Subscriber", address: "75, Deccan Gymkhana, Alwar", isActive: false },
];

export { UserListViewData, GridViewData };