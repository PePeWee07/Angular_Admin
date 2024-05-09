
// Image
const avatar3 = "assets/images/users/avatar-3.png";
const avatar5 = "assets/images/users/avatar-5.png";
const avatar7 = "assets/images/users/avatar-7.png";

const notification = [
    {
        id: 1,
        type: "follower",
        imageClassName: "size-10 rounded-md shrink-0 bg-slate-100",
        image: avatar3,
        boldName: "@willie_passem", name: "followed you",
        time: "4 sec",
        date: "Wednesday 03:42 PM"
    },
    {
        id: 2,
        type: "mention",
        imageClassName: "size-10 bg-yellow-100 rounded-md shrink-0",
        image: avatar5,
        boldName: "@caroline_jessica", name: "commented on your post",
        time: "15 min",
        description: "Amazing! Fast, to the point, professional and really amazing to work with them!!!",
        date: "Wednesday 03:42 PM",
    },
    {
        id: 3,
        type: "invite",
        imageClassName: "flex items-center justify-center size-10 bg-red-100 rounded-md shrink-0",
        name: "Successfully purchased a business plan for", price: "$199.99",
        time: "Yesterday",
        date: "Monday 11:26 AM"
    },
    {
        id: 4,
        type: "mention",
        boldName: "@scott", name: "liked your post",
        time: "1 Week",
        date: "Thursday 06:59 AM"
    },
]

const cart = [
    {
        "id": 1,
        "image": "assets/images/product/img-01.png",
        "name": "Cotton collar t-shirts for men",
        "price": 155.32,
        "category": "Fashion",
        "quantity": 2,
        "total": 310.64
    },
    {
        "id": 2,
        "image": "assets/images/product/img-03.png",
        "name": "Like style travel black handbag",
        "price": 349.95,
        "category": "Luggage",
        "quantity": 1,
        "total": 349.95
    },
    {
        "id": 3,
        "image": "assets/images/product/img-09.png",
        "name": "Blive Printed Men Round Neck",
        "price": 546.74,
        "category": "Fashion",
        "quantity": 4,
        "total": 2186.96
    }
]

export { notification,cart }
