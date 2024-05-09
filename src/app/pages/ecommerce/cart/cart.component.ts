import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { MDModalModule } from '../../../Component/modals';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { ShoppingCartData } from '../../../data';
import { ModalService } from '../../../Component/modals/modal.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, MDModalModule, LucideAngularModule, RouterModule],
  templateUrl: './cart.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class CartComponent {
  cartList: any;

  subtotal: any = 0;
  discount: any;
  discountRate = 0.12;
  shipping: any;
  shippingRate: any = this.subtotal != 0 ? '65.00' : '0';
  tax: any;
  taxRate = 0.18;
  totalprice: any;
  deleteId: any;

  constructor(private modalservice:ModalService){}

  ngOnInit(): void{
     // Fetch Data
     this.cartList = ShoppingCartData
     this.cartList.map((x: any) => {
       x['total'] = (x['quantity'] * x['price']).toFixed(2)
       this.subtotal += parseFloat(x['total'])
     })
     this.subtotal = this.subtotal.toFixed(2)
     this.discount = (this.subtotal * this.discountRate).toFixed(2)
     this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalprice = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
    
  }

   // Increment Decrement Quantity
   quantity: number = 0;
   calculateQty(id: any, quantity: any, i: any) {
     this.subtotal = 0;
     if (id == '0' && quantity > 1) {
      quantity--;
       this.cartList[i].quantity = quantity
       this.cartList[i].total = (this.cartList[i].quantity * this.cartList[i].price).toFixed(2)
     }
     if (id == '1') {
       quantity++;
       this.cartList[i].quantity = quantity
       this.cartList[i].total = (this.cartList[i].quantity * this.cartList[i].price).toFixed(2)
     }
     this.cartList.map((x: any) => {
       this.subtotal += parseFloat(x['total'])
     })
     this.subtotal = this.subtotal.toFixed(2)
     this.discount = (this.subtotal * this.discountRate).toFixed(2)
     this.tax = (this.subtotal * this.taxRate).toFixed(2);
     this.totalprice = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
  }
  
  confirmDelete(id: any,modalId:any) {
    this.deleteId = id;
    this.modalservice.open(modalId)
  }

  deleteCart() {
    this.cartList.splice(this.deleteId,1)
  }
}
