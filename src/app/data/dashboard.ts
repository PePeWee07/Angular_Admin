
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
const avatar10 = "assets/images/users/avatar-10.png";

const User1 = "assets/images/users/user-1.jpg";
const User2 = "assets/images/users/user-2.jpg";
const User3 = "assets/images/users/user-3.jpg";

const appStore = "assets/images/brand/app-store.png";
const telegram = "assets/images/brand/telegram.png";
const android = "assets/images/brand/android.png";
const slack = "assets/images/brand/slack.png";

const ProductsStatisticsData = [
    {
        "id": "productsCheck1",
        "productName": "SmartTech Pro-4K Ultra HD TV",
        "price": "$1,542.99",
        "income": "$12.36k",
        "sales": "3,217",
        "view": "21,451",
        "click": "16,287",
        "clickPercentage": "39.56%",
        "status": "Active"
    },
    {
        "id": "productsCheck2",
        "productName": "LuxeLeather Vintage Messenger Bag",
        "price": "$699.99",
        "income": "$22.88k",
        "sales": "7,321",
        "view": "32,151",
        "click": "27,485",
        "clickPercentage": "87.33%",
        "status": "Active"
    },
    {
        "id": "productsCheck3",
        "productName": "InfinityGlow LED Desk Lamp",
        "price": "$324.77",
        "income": "$21.10k",
        "sales": "8,245",
        "view": "33,415",
        "click": "25,430",
        "clickPercentage": "91.43%",
        "status": "Unactive"
    },
    {
        "id": "productsCheck4",
        "productName": "PowerPulse Wireless Earbuds",
        "price": "$99.00",
        "income": "$374",
        "sales": "2,987",
        "view": "41,123",
        "click": "46,963",
        "clickPercentage": "79.21%",
        "status": "Active"
    },
    {
        "id": "productsCheck5",
        "productName": "AdventureQuest Outdoor Backpack",
        "price": "$107.00",
        "income": "$8.22",
        "sales": "2,541",
        "view": "14,789",
        "click": "12,584",
        "clickPercentage": "39.04%",
        "status": "Unactive"
    },
    {
        "id": "productsCheck6",
        "productName": "FitLifePro Fitness Tracker",
        "price": "$111.99",
        "income": "$42.2k",
        "sales": "44,201",
        "view": "40,888",
        "click": "14,520",
        "clickPercentage": "68.41%",
        "status": "Active"
    },
    {
        "id": "productsCheck7",
        "productName": "ChefMaster Pro Cookware Set",
        "price": "$107.00",
        "income": "$8.22",
        "sales": "2,541",
        "view": "14,789",
        "click": "12,584",
        "clickPercentage": "39.04%",
        "status": "Unactive"
    },
    {
        "id": "productsCheck8",
        "productName": "PetPalace Pet Accessories",
        "price": "$1,542.99",
        "income": "$12.36k",
        "sales": "3,217",
        "view": "21,451",
        "click": "16,287",
        "clickPercentage": "39.56%",
        "status": "Active"
    },
    {
        "id": "productsCheck9",
        "productName": "MusicMuse Premium Headphones",
        "price": "$99.00",
        "income": "$374",
        "sales": "2,987",
        "view": "41,123",
        "click": "46,963",
        "clickPercentage": "79.21%",
        "status": "Active"
    },
    {
        "id": "productsCheck9",
        "productName": "WellnessWonders Yoga Mat",
        "price": "$324.77",
        "income": "$21.10k",
        "sales": "8,245",
        "view": "33,415",
        "click": "25,430",
        "clickPercentage": "91.43%",
        "status": "Unactive"
    },
    {
        "id": "productsCheck10",
        "productName": "SmartTech Pro-4K Ultra HD TV",
        "price": "$1,542.99",
        "income": "$12.36k",
        "sales": "3,217",
        "view": "21,451",
        "click": "16,287",
        "clickPercentage": "39.56%",
        "status": "Active"
    },
    {
        "id": "productsCheck11",
        "productName": "LuxeLeather Vintage Messenger Bag",
        "price": "$699.99",
        "income": "$22.88k",
        "sales": "7,321",
        "view": "32,151",
        "click": "27,485",
        "clickPercentage": "87.33%",
        "status": "Active"
    },
];

const ProductOrdersData = [
    {
        id: "01",
        orderId: "#TWT5015100365",
        customerName: "Marie Prohaska",
        location: "Germany",
        orderDate: "08 Jun, 2023",
        payments: "Credit Card",
        quantity: "05",
        price: "$146.99",
        totalAmount: "$749.95",
        status: "Delivered"
    },
    {
        id: "02",
        orderId: "#TWT5015100366",
        customerName: "Jaqueline Hammes",
        location: "France",
        orderDate: "11 July, 2023",
        payments: "Paypal",
        quantity: "02",
        price: "$450.00",
        totalAmount: "$900.00",
        status: "Shipping"
    },
    {
        id: "03",
        orderId: "#TWT5015100367",
        customerName: "Marlene Hirthe",
        location: "Argentina",
        orderDate: "21 Aug, 2023",
        payments: "Visa Card",
        quantity: "03",
        price: "$147.23",
        totalAmount: "$294.46",
        status: "New"
    },
    {
        id: "01",
        orderId: "#TWT5015100365",
        customerName: "Marie Prohaska",
        location: "Germany",
        orderDate: "08 Jun, 2023",
        payments: "Credit Card",
        quantity: "05",
        price: "$146.99",
        totalAmount: "$749.95",
        status: "Delivered"
    },
    {
        id: "01",
        orderId: "#TWT5015100365",
        customerName: "Marie Prohaska",
        location: "Germany",
        orderDate: "08 Jun, 2023",
        payments: "Credit Card",
        quantity: "05",
        price: "$146.99",
        totalAmount: "$749.95",
        status: "Delivered"
    },
    {
        id: "01",
        orderId: "#TWT5015100365",
        customerName: "Marie Prohaska",
        location: "Germany",
        orderDate: "08 Jun, 2023",
        payments: "Credit Card",
        quantity: "05",
        price: "$146.99",
        totalAmount: "$749.95",
        status: "Delivered"
    },
    {
        id: "01",
        orderId: "#TWT5015100365",
        customerName: "Marie Prohaska",
        location: "Germany",
        orderDate: "08 Jun, 2023",
        payments: "Credit Card",
        quantity: "05",
        price: "$146.99",
        totalAmount: "$749.95",
        status: "Delivered"
    },

];

type WidgetData = {
    id: number;
    icon: string;
    price: number;
    name: string;
    description: string;
    chartId: string;
    chartColor: string; // Assuming that 'chartColor' is a string representing a CSS class
    decimals: number;
    suffix: string;
    series: {
        name: string;
        data: number[];
    }[];
};

//Dashboard Email
const widgetsData: WidgetData[] = [
    {
        id: 1,
        icon: "rocket",
        price: 1452,
        name: "SENT",
        description: "238 Emails",
        chartId: "sentEmail",
        chartColor: '["bg-custom-500"]',
        decimals: 0,
        suffix: '',
        series: [{
            name: 'Sent',
            data: [
                14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22
            ]
        }],
    },
    {
        id: 2,
        icon: "mousePointerClick",
        price: 92.74,
        name: "Open Rate",
        description: "60 Opened",
        chartId: "openRate",
        chartColor: '["bg-green-500"]',
        decimals: 2,
        suffix: '%',
        series: [{
            name: 'Open Rate',
            data: [
                38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33
            ]
        }],
    },
    {
        id: 3,
        icon: "MousePointerSquare",
        price: 3.79,
        name: "CLICKS RATE",
        description: "29 Clicks",
        chartId: "clickRate",
        chartColor: '["bg-red-500"]',
        decimals: 2,
        suffix: '%',
        series: [{
            name: 'Click Rate',
            data: [
                30, 24, 14, 20, 10, 5, 11, 26, 33, 38, 34, 27, 22
            ]
        }],
    },
    {
        id: 4,
        icon: "Goal",
        price: 4.06,
        name: "Click Through",
        description: "29 Click Through",
        decimals: 2,
        suffix: '%',
        chartId: "clickThrough",
        chartColor: '["bg-sky-500"]',
        series: [{
            name: 'Click Through',
            data: [
                11, 30, 24, 26, 33, 38, 14, 20, 10, 5, 34, 27, 22
            ]
        }],
    },
];

const widgetsData2 = [
    {
        id: 1,
        title: "Delivered Rate",
        percentage: 100,
        chartId: "deliveredRate",
        dataChartColor: '["bg-sky-500"]',
        series: [{
            name: 'Delivered Rate',
            data: [
                11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22
            ]
        }],
    },
    {
        id: 2,
        title: "Hard Bounce Rate",
        percentage: 89,
        chartId: "hardBounceRate",
        dataChartColor: '["bg-green-500"]',
        series: [{
            name: 'Hard Bounce Rate',
            data: [
                14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22
            ]
        }],
    },
    {
        id: 3,
        title: "Unsubscribed Rate",
        percentage: 33,
        chartId: "unsubscribedRate",
        dataChartColor: '["bg-yellow-500"]',
        series: [{
            name: 'Unsubscribed Rate',
            data: [
                38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33
            ]
        }],
    },
    {
        id: 4,
        title: "Spam Report Rate",
        percentage: 11.8,
        decimals: 2,
        chartId: "spanReportRate",
        dataChartColor: '["bg-purple-500"]',
        series: [{
            name: 'Spam Report Rate',
            data: [
                30, 24, 14, 20, 10, 13, 11, 26, 33, 38, 34, 27, 22
            ]
        }],
    },
];

// Dashboard HR
const EmployeePerformanceData = [
    {
        id: 1,
        employeeId: "TW-1001",
        img: avatar10,
        checkboxId: "productsCheck1",
        name: "Kristen Redden",
        email: "kredden@tailwick.com",
        designation: "Designer",
        performance: "Good",
        isActive: true
    },
    {
        id: 2,
        employeeId: "TW-1002",
        img: avatar2,
        checkboxId: "productsCheck2",
        name: "Howard George",
        email: "george@tailwick.com",
        designation: "ASP.Net Developer",
        performance: "Low",
        isActive: true
    },
    {
        id: 3,
        employeeId: "TW-1003",
        img: avatar3,
        checkboxId: "productsCheck3",
        name: "Laura Carlson",
        email: "carlson15@tailwick.com",
        designation: "React Developer",
        performance: "Good",
        isActive: true
    },
    {
        id: 4,
        employeeId: "TW-1004",
        img: avatar4,
        checkboxId: "productsCheck4",
        name: "Joseph Hawkins",
        email: "joseph@tailwick.com",
        designation: "Angular Developer",
        performance: "Good",
        isActive: false
    },
    {
        id: 5,
        employeeId: "TW-1005",
        img: avatar5,
        checkboxId: "productsCheck5",
        name: "Jeremy Clifford",
        email: "joseph@tailwick.com",
        designation: "UI / UX Designer",
        performance: "Low",
        isActive: false
    }
];

const RecentPayrollData = [
    {
        id: 1,
        icon: "move-up-right",
        name: "Christopher Horn",
        amount: "$145.32",
        status: "Paid"
    },
    {
        id: 2,
        icon: "move-down-left",
        name: "Richard Peters",
        amount: "$4512.99",
        status: "Pending"
    },
    {
        id: 3,
        icon: "move-down-left",
        name: "James Perez",
        amount: "$879.99",
        status: "Paid"
    },
    {
        id: 4,
        icon: "move-up-right",
        name: "Myrtle Velez",
        amount: "$978.14",
        status: "Cancelled"
    },
    {
        id: 5,
        icon: "move-down-left",
        name: "Brad Castillo",
        amount: "$412.59",
        status: "Pending"
    },
    {
        id: 6,
        icon: "move-down-left",
        name: "Robert Jump",
        amount: "$666.99",
        status: "Paid"
    },
    {
        id: 7,
        icon: "move-up-right",
        name: "Myrtle Velez",
        amount: "$978.14",
        status: "Cancelled"
    },
    {
        id: 8,
        icon: "move-up-right",
        name: "Christopher Horn",
        amount: "$145.32",
        status: "Paid"
    },
    {
        id: 9,
        icon: "move-down-left",
        name: "Richard Peters",
        amount: "$4512.99",
        status: "Pending"
    },
    {
        id: 10,
        icon: "move-down-left",
        name: "James Perez",
        amount: "$879.99",
        status: "Paid"
    }
];

const UpcomingInterviewData = [
    {
        id: 1,
        name: "James Krogman",
        email: "james@tailwick.com",
        image: User1,
        date: "25 Nov",
        time: "02:41 PM",
        status: "Confirm"
    },
    {
        id: 2,
        name: "Michael Scott",
        email: "michaelScott@tailwick.com",
        image: User2,
        date: "05 Dec",
        time: "01:23 PM",
        status: "Re-scheduled"
    },
    {
        id: 3,
        name: "Denise Ledford",
        email: "ledford@tailwick.com",
        image: User3,
        date: "27 Nov",
        time: "11:59 PM",
        status: "Scheduled"
    },
    {
        id: 4,
        name: "Gladys Smith",
        email: "gap-4@tailwick.com",
        image: avatar5,
        date: "07 Dec",
        time: "05:19 PM",
        status: "Cancelled"
    }
];

const UpcomingScheduledData = [
    {
        id: 1,
        date: "28",
        month: "July",
        title: "Meeting with Designer",
        time: "09:57 AM",
        createdBy: "Admin"
    },
    {
        id: 2,
        date: "08",
        month: "June",
        title: "Developing Line Managers Conference",
        time: "10:54 AM",
        createdBy: "HR"
    },
    {
        id: 3,
        date: "17",
        month: "July",
        title: "Airplane in Las Vegas",
        time: "12:00 PM",
        createdBy: "HR"
    },
    {
        id: 4,
        date: "11",
        month: "Nov",
        title: "Hospitality Project Discuses",
        createdBy: "Admin"
    },
    {
        id: 5,
        date: "20",
        month: "Nov",
        title: "Gartner Digital Workplace",
        time: "03:49 PM",
        createdBy: "HR"
    },
    {
        id: 6,
        date: "04",
        month: "Dec",
        title: "Nordic People Analytics",
        time: "11:00 AM",
        createdBy: "Admin"
    },
    {
        id: 7,
        date: "17",
        month: "Jan",
        title: "CIPD Festival of Work",
        time: "01:29 PM",
        createdBy: "HR"
    }
];

// Dashborad Social Media
const activeFriendsData = [avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar10, avatar9, avatar4, avatar5, avatar1];

const storyData = [
    { id: 1, image: avatar1, username: "Your story", isActive: true },
    { id: 2, image: avatar2, username: "@zaria_muller", isActive: true },
    { id: 3, image: avatar3, username: "@christina", isActive: true },
    { id: 4, image: avatar4, username: "@blaze_herzog", isActive: true },
    { id: 5, image: avatar5, username: "@keon_rippin", isActive: true },
    { id: 6, image: avatar6, username: "@niko_watsica", isActive: true },
    { id: 7, image: avatar7, username: "@genesis", isActive: false },
    { id: 8, image: avatar8, username: "@brayan_herman", isActive: false },
    { id: 9, image: avatar9, username: "@logan", isActive: false },
    { id: 10, image: avatar10, username: "@gerhold", isActive: false },
    { id: 11, image: avatar2, username: "@fletcher", isActive: false },
    { id: 12, image: avatar2, username: "@fletcher", isActive: false },
    { id: 13, image: avatar3, username: "@christina", isActive: false },
];

const MessageData = [
    { id: 1, image: avatar3, name: "Louisa Howe", isActive: true },
    { id: 2, image: avatar4, name: "Everett Moore", isActive: true },
    { id: 3, image: avatar5, name: "Omari Welch", isActive: true },
    { id: 4, image: avatar6, name: "Paul Gerhold", isActive: true },
    { id: 5, image: avatar7, name: "Green Langworth", isActive: true },
    { id: 6, image: avatar8, name: "Lucie Beahan", isActive: false },
    { id: 7, image: avatar9, name: "Susana Dooley", isActive: false },
];

const PopularEventsData = [
    { id: 1, image: appStore, event: "Music Festivals" },
    { id: 2, image: telegram, event: "Conferences and Seminars" },
    { id: 3, image: android, event: "Business Networking Events" },
    { id: 4, image: slack, event: "Award Ceremonies" }
];

const UpcomingBirthdayData = [
    { id: 1, image: avatar3, name: "Louisa Howe", date: "Today" },
    { id: 2, image: avatar4, name: "Everett Moore", date: "Tomorrow" },
    { id: 3, image: avatar5, name: "Omari Welch", date: "13 Nov" },
    { id: 4, image: avatar6, name: "Paul Gerhold", date: "14 Nov" }
];

export {
    ProductsStatisticsData,
    ProductOrdersData,
    widgetsData,
    widgetsData2,
    EmployeePerformanceData, RecentPayrollData, UpcomingInterviewData, UpcomingScheduledData, activeFriendsData, storyData, MessageData, PopularEventsData, UpcomingBirthdayData
};