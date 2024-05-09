export interface productModel {
    id?: string;
    productCode?: string;
    img?: string;
    productName?: string;
    category?: string;
    price?: string;
    stock?: number;
    revenue?: string;
    status: boolean
}

export interface orderModel{
    id:any,
    orderId:string,
    orderDate:string,
    deliveryDate:string,
    customerName:string,
    paymentMethod:string,
    amount:string,
    deliveryStatus:string
}

export interface sellerModel {
    id: any,
    isFav: any,
    logo: any,
    companyName: string,
    name: string,
    sales: string,
    products: string,
    revenue:string
}