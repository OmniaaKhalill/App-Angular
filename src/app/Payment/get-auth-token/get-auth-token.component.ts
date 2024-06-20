import { Component } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { FormsModule } from '@angular/forms';
import { BillingData } from '../../models/BillingData/billing-data';

@Component({
  selector: 'app-get-auth-token',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-auth-token.component.html',
  styleUrl: './get-auth-token.component.css'
})
export class GetAuthTokenComponent {
  constructor(private paymentService:PaymentService){
  }

 token!:string
 orderId!:string
 amount= 200
 currency="EGP"
 paymentKey!:string


 

billing_Data =new BillingData("Clifford", "Nicolas","claudette09@exa.com","PKG","Jaskolskiburgh","q","w","e","r","t","i")

 paymentData = {
  auth_token: this.token, // Replace with the actual auth token
  amount_cents: `${this.amount * 100}`,
  expiration: 3600,
  order_id: this.orderId,
  billing_data: this.billing_Data,
  currency: this.currency,
  integration_id: 4598247,
  lock_order_when_paid: "false"

};

 getToken(){

  this.paymentService.authenticate().subscribe(authResponse => {
     this.token = authResponse.token;
    console.log( this.token)
 })

 }

 getOrederID(){

  this.paymentService.createOrder(this.token, this.amount, this.currency).subscribe(orderResponse => {
  this.orderId = orderResponse.id;

 })}

getPaymentKey(){
//  this.paymentService.generatePaymentKey(this.token,this.paymentData.amount_cents,this.paymentData.expiration,this.paymentData.order_id,this.billing_Data,this.paymentData.currency,this.paymentData.integration_id).subscribe(paymentKeyResponse => {
//   this.paymentKey = paymentKeyResponse
//   })
//   console.log(this.paymentKey)


this.paymentKey = "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb3hPREExTVRnM0xDSmhiVzkxYm5SZlkyVnVkSE1pT2pNME5UQXdNQ3dpWTNWeWNtVnVZM2tpT2lKRlIxQWlMQ0pwYm5SbFozSmhkR2x2Ymw5cFpDSTZORFU1T0RJME55d2liM0prWlhKZmFXUWlPakl4T1RNek16QXhOQ3dpWW1sc2JHbHVaMTlrWVhSaElqcDdJbVpwY25OMFgyNWhiV1VpT2lKRGJHbG1abTl5WkNJc0lteGhjM1JmYm1GdFpTSTZJazVwWTI5c1lYTWlMQ0p6ZEhKbFpYUWlPaUpGZEdoaGJpQk1ZVzVrSWl3aVluVnBiR1JwYm1jaU9pSTRNREk0SWl3aVpteHZiM0lpT2lJME1pSXNJbUZ3WVhKMGJXVnVkQ0k2SWpnd015SXNJbU5wZEhraU9pSktZWE5yYjJ4emEybGlkWEpuYUNJc0luTjBZWFJsSWpvaVZYUmhhQ0lzSW1OdmRXNTBjbmtpT2lKbFp5SXNJbVZ0WVdsc0lqb2lZMnhoZFdSbGRIUmxNRGxBWlhoaExtTnZiU0lzSW5Cb2IyNWxYMjUxYldKbGNpSTZJaXM0TmlnNEtUa3hNelV5TVRBME9EY2lMQ0p3YjNOMFlXeGZZMjlrWlNJNklqQXhPRGs0SWl3aVpYaDBjbUZmWkdWelkzSnBjSFJwYjI0aU9pSk9RU0o5TENKc2IyTnJYMjl5WkdWeVgzZG9aVzVmY0dGcFpDSTZabUZzYzJVc0ltVjRkSEpoSWpwN2ZTd2ljMmx1WjJ4bFgzQmhlVzFsYm5SZllYUjBaVzF3ZENJNlptRnNjMlVzSW1WNGNDSTZNVGN4T0Rrd01qSXpNeXdpY0cxclgybHdJam9pTVRVMkxqSXhOeTQwTXk0eE5Ua2lmUS45b0ZMZ3J4V3d3WWdHNTE2bXV1MzU0NGRUYUpndmZfQ0hsRmFNNUFjRjEtaHRIZWVsUTBCZk0zZmRlTU5JcHM1X2Fsd2NtLVV0S0hLQmlkU2l6NU9ZQQ=="
window.location.href = `https://accept.paymobsolutions.com/api/acceptance/iframes/852393?payment_token=${this.paymentKey}`;
}

  // Redirect to Paymob Payment page


}
