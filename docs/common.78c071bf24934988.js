"use strict";(self.webpackChunkwebshop_client=self.webpackChunkwebshop_client||[]).push([[592],{3602:(C,i,r)=>{r.d(i,{h:()=>l});var u=r(7579),_=r(2722),m=r(5698),t=r(1571),d=r(7585),p=r(7977),g=r(6684),a=r(6895),O=r(5593);function h(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"p-button",6),t.NdJ("onClick",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.navigateToCheckout())}),t.qZA()()}}let l=(()=>{class o{constructor(e,n,s){this.cartService=e,this.ordersService=n,this.router=s,this.endSubs$=new u.x,this.isCheckout=!1,this.isCheckout=!!this.router.url.includes("checkout")}ngOnInit(){this._getOrderSummary()}navigateToCheckout(){this.router.navigate(["/checkout"])}ngOnDestroy(){this.endSubs$.next(null),this.endSubs$.complete()}_getOrderSummary(){this.cartService.cart$.pipe((0,_.R)(this.endSubs$)).subscribe(e=>{this.totalPrice=0,e&&e.items.map(n=>{this.ordersService.getProduct(n.productId).pipe((0,m.q)(1)).subscribe(s=>{this.totalPrice+=s.price*n.quantity})})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.N),t.Y36(p.N),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["orders-order-summary"]],decls:22,vars:9,consts:[[1,"order-summary"],[1,"summary-price"],[1,"free"],[1,"to-checkout"],["class","checkout-button",4,"ngIf"],[1,"checkout-button"],["label","Checkout",3,"onClick"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Order Summary"),t.qZA(),t.TgZ(3,"div",1)(4,"span"),t._uU(5,"Items Price"),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.TgZ(9,"div",1)(10,"span"),t._uU(11,"Packing & Shipping"),t.qZA(),t.TgZ(12,"span",2),t._uU(13,"Free"),t.qZA()(),t.TgZ(14,"div",3)(15,"div",1)(16,"span"),t._uU(17,"Total Price"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.ALo(20,"currency"),t.qZA()(),t.YNc(21,h,2,0,"div",4),t.qZA()()),2&e&&(t.xp6(7),t.Oqu(t.xi3(8,3,n.totalPrice,"EUR")),t.xp6(12),t.Oqu(t.xi3(20,6,n.totalPrice,"EUR")),t.xp6(2),t.Q6J("ngIf",!n.isCheckout))},dependencies:[a.O5,O.zx,a.H9],styles:[".order-summary[_ngcontent-%COMP%]{background-color:var(--surface-0);padding:15px;border:1px solid var(--surface-200)}.order-summary[_ngcontent-%COMP%]   .summary-price[_ngcontent-%COMP%]{display:flex;margin:15px 0}.order-summary[_ngcontent-%COMP%]   .summary-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:80%}.order-summary[_ngcontent-%COMP%]   .summary-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{width:20%;font-weight:600}.order-summary[_ngcontent-%COMP%]   .summary-price[_ngcontent-%COMP%]   span.free[_ngcontent-%COMP%]{color:green}.order-summary[_ngcontent-%COMP%]   .checkout-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%!important}@media (max-width: 768px){.order-summary[_ngcontent-%COMP%]{width:90%;margin:0 auto;padding:0 .5em}}"]}),o})()}}]);