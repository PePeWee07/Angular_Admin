const chatUser = [
    {
        "id": 1,
        "chatMsg": "Sure, I have my pen and paper ready.",
        "avatar": "assets/images/users/avatar-7.png",
        "isSender": false,
    },
    {

        "id": 2,
        "chatMsg": "Great. Please read the notes of our last meeting for us.",
        "avatar": "assets/images/users/avatar-1.png",
        "isSender": true,

    },
    {
        "id": 3,
        "chatMsg": "Okay. First, we talked about the budget for next year.",
        "avatar": "assets/images/users/avatar-7.png",
        "attachments": [
            "assets/images/small/img-3.jpg",
            "assets/images/small/img-5.jpg"
        ],
        "isSender": false,
    },
    {
        "id": 4,
        "chatMsg": "I will budget is getting smaller every year.",
        "avatar": "assets/images/users/avatar-7.png",
        "isSender": false,
    },
    {
        "id": 5,
        "chatMsg": "Second, we talked about the new products we are going to sell.",
        "avatar": "assets/images/users/avatar-7.png",
        "isSender": false,
    },
    {

        "id": 6,
        "chatMsg": "O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.",
        "avatar": "assets/images/users/avatar-7.png",
        "isSender": false,

    },
    {
        "id": 7,
        "chatMsg": "Sorry, William. O.K. We have a few things to talk about today. Would you like to give your report.",
        "avatar": "assets/images/users/avatar-1.png",
        "isSender": true,
    },
    {
        "id": 8,
        "chatMsg": "Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year.",
        "avatar": "assets/images/users/avatar-7.png",
        "isSender": false,
    },
    {
        "id": 8,
        "chatMsg": "Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone.",
        "avatar": "assets/images/users/avatar-1.png",
        "isSender": true,
    }
]


const recentChats = [
    {
        "id": 1,
        "name": "Marie Prohaska",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "online",
        "message": "I will purchase it for support",
        "timestamp": "2 min ago",
        "role": "Angular Developer"
    },
    {
        "id": 2,
        "name": "Kara Miller",
        "avatar": "assets/images/users/user-1.jpg",
        "status": "online",
        "message": "Hey, how's it going?",
        "timestamp": "02:57 PM",
        "role": "React Developer"
    },
    {
        "id": 3,
        "name": "Mark Walton",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "offline",
        "message": "Hey, how's it going?",
        "timestamp": "Yesterday",
        "role": "NextJS Developer"
    }
]
const allConversations = [
    {
        "id": 4,
        "name": "Aurore Maggio",
        "avatar": "assets/images/users/user-2.jpg",
        "status": "offline",
        "role": "React Developer"
    },
    {
        "id": 5,
        "name": "Mark Walton",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "online",
        "role": "UI / UX Designer"
    },
    {
        "id": 6,
        "name": "Daniel Miller",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "offfline",
        "role": "ASP.Net Developer"
    },
    {
        "id": 7,
        "name": "Jaqueline Hammes",
        "avatar": "assets/images/users/user-3.jpg",
        "status": "offline",
        "role": "Angular Developer"
    },
    {
        "id": 8,
        "name": "Andrea Pesina",
        "avatar": "assets/images/users/avatar-8.png",
        "status": "offline",
        "role": "Laravel Developer"
    },
    {
        "id": 9,
        "name": "Bernard Pereira",
        "avatar": "assets/images/users/avatar-10.png",
        "status": "online",
        "role": "Web Designer"
    },
    {
        "id": 10,
        "name": "William Jones",
        "avatar": "assets/images/users/user-4.jpg",
        "status": "offline",
        "role": "Project Manager"
    }
]

const contact = [
    {
        "id": 1,
        "name": "Aurore Maggio",
        "avatar": "assets/images/users/user-2.jpg",
        "status": "offline",
        "role": "React Developer"
    },
    {
        "id": 2,
        "name": "Mark Walton",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "online",
        "role": "UI / UX Designer"
    },
    {
        "id": 3,
        "name": "Daniel Miller",
        "avatar": "assets/images/users/avatar-5.png",
        "status": "offfline",
        "role": "ASP.Net Developer"
    },
    {
        "id": 4,
        "name": "Jaqueline Hammes",
        "avatar": "assets/images/users/user-3.jpg",
        "status": "offline",
        "role": "Angular Developer"
    },
    {
        "id": 5,
        "name": "Andrea Pesina",
        "avatar": "assets/images/users/avatar-8.png",
        "status": "offline",
        "role": "Laravel Developer"
    },
    {
        "id": 6,
        "name": "Bernard Pereira",
        "avatar": "assets/images/users/avatar-10.png",
        "status": "online",
        "role": "Web Designer"
    },
    {
        "id": 7,
        "name": "William Jones",
        "avatar": "assets/images/users/user-4.jpg",
        "status": "offline",
        "role": "Project Manager"
    },
    {
        "id": 8,
        "name": "Andrea Pesina",
        "avatar": "assets/images/users/avatar-8.png",
        "status": "offline",
        "role": "Laravel Developer"
    },
    {
        "id": 9,
        "name": "Bernard Pereira",
        "avatar": "assets/images/users/avatar-10.png",
        "status": "online",
        "role": "Web Designer"
    },
    {
        "id": 10,
        "name": "William Jones",
        "avatar": "assets/images/users/user-4.jpg",
        "status": "offline",
        "role": "Project Manager"
    },
    {
        "id": 11,
        "name": "Andrea Pesina",
        "avatar": "assets/images/users/avatar-8.png",
        "status": "offline",
        "role": "Laravel Developer"
    },
    {
        "id": 12,
        "name": "Pearl Johnson",
        "avatar": "assets/images/users/avatar-8.png",
        "status": "offline",
        "role": "Team Leader"
    },
]


export { chatUser, recentChats, allConversations, contact }