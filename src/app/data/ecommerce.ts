// Images
const productImg1 = "assets/images/product/img-01.png";
const productImg2 = "assets/images/product/img-02.png";
const productImg3 = "assets/images/product/img-03.png";
const productImg4 = "assets/images/product/img-04.png";
const productImg5 = "assets/images/product/img-05.png";
const productImg6 = "assets/images/product/img-06.png";
const productImg7 = "assets/images/product/img-07.png";
const productImg8 = "assets/images/product/img-08.png";
const productImg9 = "assets/images/product/img-09.png";
const productImg10 = "assets/images/product/img-10.png";
const productImg11 = "assets/images/product/img-11.png";

const appStore = "assets/images/brand/app-store.png";
const gmail = "assets/images/brand/gmail.png";
const android = "assets/images/brand/android.png";
const figma = "assets/images/brand/figma.png";
const meta = "assets/images/brand/meta.png";
const search = "assets/images/brand/search.png";
const telegram = "assets/images/brand/telegram.png";
const adwords = "assets/images/brand/adwords.png";

const avatar2 = "assets/images/users/avatar-2.png";
const avatar5 = "assets/images/users/avatar-5.png";
const avatar8 = "assets/images/users/avatar-8.png";
const userDummy = "assets/images/users/user-dummy-img.jpg";

// Product - ListView
const ListViewData = [
    {
        id: 1,
        productCode: "#TAD-232100071",
        img: productImg2,
        productName: "Smartest Printed T-shirt",
        category: "Fashion",
        price: "$79.99",
        stock: 500,
        revenue: "$24,365",
        status: "Scheduled"
    },
    {
        id: 2,
        productCode: "#TAD-232100072",
        img: productImg3,
        productName: "Mesh Ergonomic Black Chair",
        category: "Furniture",
        price: "$214.47",
        stock: 400,
        revenue: "$1,24,365",
        status: "Publish"
    },
    {
        id: 3,
        productCode: "#TAD-232100073",
        img: productImg5,
        productName: "Fastcolors Typography Men",
        category: "Fashion",
        price: "$119.12",
        stock: 600,
        revenue: "$80,321",
        status: "Inactive"
    },
    {
        id: 4,
        productCode: "#TAD-232100074",
        img: productImg6,
        productName: "Techel Black Bluetooth Soundbar",
        category: "Electronics",
        price: "$452.99",
        stock: 300,
        revenue: "$49,234",
        status: "Publish"
    },
    {
        id: 5,
        productCode: "#TAD-232100075",
        img: productImg7,
        productName: "Bovet Fleurier AIFSQ029",
        category: "Home Decor",
        price: "$119.99",
        stock: 240,
        revenue: "$20,784",
        status: "Publish"
    },
    {
        id: 6,
        productCode: "#TAD-232100076",
        img: productImg8,
        productName: "Iron 1000 W Dry",
        category: "Electronics",
        price: "$84.99",
        stock: 110,
        revenue: "$15,493",
        status: "Scheduled"
    },
    {
        id: 7,
        productCode: "#TAD-232100077",
        img: productImg9,
        productName: "Roar Twill Blue Baseball Cap",
        category: "Fashion",
        price: "$49.99",
        stock: 470,
        revenue: "$19,321",
        status: "Publish"
    },
    {
        id: 8,
        productCode: "#TAD-232100078",
        img: productImg10,
        productName: "Crop tops for Women western wear",
        category: "Fashion",
        price: "$129.99",
        stock: 206,
        revenue: "$21,307",
        status: "Inactive"
    },
    {
        id: 9,
        productCode: "#TAD-232100079",
        img: productImg11,
        productName: "Smartees Printed Men Round Neck White",
        category: "Fashion",
        price: "$410.43",
        stock: 230,
        revenue: "$22,012",
        status: "Scheduled"
    },
    {
        id: 10,
        productCode: "#TAD-232100080",
        img: productImg8,
        productName: "Aahwan Solid Women Beige Baggy Shorts",
        category: "Fashion",
        price: "$64.70",
        stock: 150,
        revenue: "$13,987",
        status: "Publish"
    }
];

const GridViewData = [
    {
        id: 1,
        productName: "Mesh Ergonomic Black Chair",
        img: productImg2,
        price: "$674.12",
        delPrice: "784.99",
        rating: "4.5",
        ratingNumber: "198",
        isFav: true
    },
    { id: 2, productName: "Fastcolors Typography Men", img: productImg3, price: "$341.99", delPrice: "784.99", rating: "4.5", ratingNumber: "150", isFav: false },
    { id: 3, productName: "Mesh Ergonomic Green Chair", img: productImg4, price: "$362.21", delPrice: "599.99", rating: "3.5", ratingNumber: "29", isFav: false },
    { id: 4, productName: "Techel Black Bluetooth Soundbar", img: productImg5, price: "$249.99", delPrice: "399.99", rating: "4.5", ratingNumber: "324", isFav: true },
    { id: 5, productName: "Bovet Fleurier AIFSQ029", img: productImg6, price: "$496.16", delPrice: "", rating: "4.5", ratingNumber: "195", isFav: false },
    { id: 6, productName: "Roar Twill Blue Baseball Cap", img: productImg8, price: "$674.12", delPrice: "784.99", rating: "2.5", ratingNumber: "485", isFav: true },
    { id: 7, productName: "Smartest Printed T-shirt", img: productImg1, price: "$89.99", delPrice: "", rating: "3.5", ratingNumber: "321", isFav: false },
    { id: 8, productName: "Crop tops for Women western wear", img: productImg10, price: "$145", delPrice: "299.99", rating: "4.5", ratingNumber: "1551", isFav: true },
];

const ProductReviewsData = [
    { id: 1, img: avatar2, customerName: "Aubrey Beer", date: "14 Jan, 2024", rating: "5", review: '"Nice product good quality and looking"', like: "15", dislike: "03" },
    { id: 2, img: userDummy, customerName: "Theodora Jones", date: "20 July, 2023", rating: "4", review: '"Amazing! Fast, to the point, professional and really amazing to work with them!!!"', like: "77", dislike: "26" },
    { id: 3, img: avatar5, customerName: "Jordane Dare", date: "07 Dec, 2023", rating: "5", review: '"Very nice design. Clean Code and easy customizable"', like: "31", dislike: "09" },
    { id: 4, img: avatar8, customerName: "avern Ratke", date: "10 Aug, 2023", rating: "5", review: '"The best templates which is supported multiple programming languages with beautiful templates. thank you for the valuable template."', like: "49", dislike: "17" },
];

// Cart
const ShoppingCartData = [
    { id: 1, img: productImg8, product: "Roar Twill Blue Baseball Cap", category: "Men's Fashion", color: "White/Blue", size: "L", price: 149.99, delPrice: "$299.99", quantity: 1, total: 149.99 },
    { id: 2, img: productImg4, product: "Mesh Ergonomic Green Chair", category: "Home, Kitchen, Pets", color: "Green", size: "M", price: 362.21, delPrice: "$599.99", quantity: 1, total: 362.21 },
    { id: 3, img: productImg1, product: "Smartest Printed T-shirt", category: "Unisex Fashion", color: "Black", size: "M", price: 89.99, quantity: 1, total: 89.99 },
];

// Orders
const OrderListData = [
    { id: 1, orderId: "#TWT5015100365", orderDate: "08 Jun, 2023", deliveryDate: "15 Jun, 2023", customerName: "Marie Prohaska", paymentMethod: "Credit Card", amount: "$541.32", deliveryStatus: "Delivered" },
    { id: 2, orderId: "#TWT5015100366", orderDate: "11 July, 2023", deliveryDate: "20 July, 2023", customerName: "Jaqueline Hammes", paymentMethod: "Paypal", amount: "$1,876.33", deliveryStatus: "Shipping" },
    { id: 3, orderId: "#TWT5015100367", orderDate: "21 Aug, 2023", deliveryDate: "24 Aug, 2023", customerName: "Marlene Hirthe", paymentMethod: "Visa Card", amount: "$15,023.99", deliveryStatus: "New" },
    { id: 4, orderId: "#TWT5015100368", orderDate: "28 Nov, 2023", deliveryDate: "02 Dec, 2023", customerName: "Reagan Larson", paymentMethod: "American Express", amount: "$783.56", deliveryStatus: "Delivered" },
    { id: 5, orderId: "#TWT5015100369", orderDate: "11 Oct, 2023", deliveryDate: "16 Oct, 2023", customerName: "Glennie Langosh", paymentMethod: "American Express", amount: "$986.49", deliveryStatus: "Pending" },
    { id: 6, orderId: "#TWT5015100370", orderDate: "16 Feb, 2023", deliveryDate: "22 Feb, 2023", customerName: "Rickie Cremin", paymentMethod: "COD", amount: "$741.32", deliveryStatus: "Delivered" },
    { id: 7, orderId: "#TWT5015100371", orderDate: "18 April, 2023", deliveryDate: "29 April, 2023", customerName: "Domenic Tromp", paymentMethod: "Credit Card", amount: "$1,386.49", deliveryStatus: "Shipping" },
    { id: 8, orderId: "#TWT5015100372", orderDate: "21 Jan, 2024", deliveryDate: "24 Jan, 2023", customerName: "Akeem Paucek", paymentMethod: "PayPal", amount: "$3,487.21", deliveryStatus: "New" },
    { id: 9, orderId: "#TWT5015100373", orderDate: "05 Oct, 2024", deliveryDate: "11 Oct, 2023", customerName: "David Gaby", paymentMethod: "COD", amount: "$5,986.11", deliveryStatus: "Return" },
    { id: 10, orderId: "#TWT5015100374", orderDate: "07 Oct, 2024", deliveryDate: "13 Oct, 2023", customerName: "Joel Freeleagus", paymentMethod: "American Express", amount: "$9,451.75", deliveryStatus: "Cancelled" },
];

// Sellers
const SellersData = [
    { id: 1, isFav: false, logo: adwords, companyName: "Themesdesign", name: "Paula Keenan", sales: "4.5k", products: "310", revenue: "$235.3k" },
    { id: 2, isFav: true, logo: appStore, companyName: "Nazox Fashion", name: "Kara Miller", sales: "2.3k", products: "67", revenue: "$152.8k" },
    { id: 3, isFav: false, logo: gmail, companyName: "4xM Infotech", name: "Daniel Miller", sales: "7.1k", products: "138", revenue: "$465.9k" },
    { id: 4, isFav: true, logo: android, companyName: "Extra Fashion", name: "Mark Walton", sales: "1.9k", products: "49", revenue: "$198.3k" },
    { id: 5, isFav: true, logo: figma, companyName: "Nesta Technologies", name: "William Heineman", sales: "4.8k", products: "172", revenue: "$746.1k" },
    { id: 6, isFav: false, logo: meta, companyName: "Digitech Galaxy", name: "David Biggs", sales: "9.2k", products: "674", revenue: "$14.4m" },
    { id: 7, isFav: false, logo: search, companyName: "Zoetic Fashion", name: "Jaqueline Hammes", sales: "1.8k", products: "112", revenue: "$132.4k" },
    { id: 8, isFav: false, logo: telegram, companyName: "Force Medicines", name: "Ashley Uilson", sales: "4.1k", products: "243", revenue: "$861.7k" }
];

export { ListViewData, GridViewData, OrderListData, SellersData, ProductReviewsData,ShoppingCartData };