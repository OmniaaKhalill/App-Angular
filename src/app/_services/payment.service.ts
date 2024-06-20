import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillingData } from '../models/BillingData/billing-data';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  private backendUrl = 'http://localhost:3000'; // Replace with your backend URL

  private PAYMOB_API_KEY = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RneE9EVTVMQ0p1WVcxbElqb2lNVGN4T0RjNU1EVXdPQzR4TnpjMk1EZ2lmUS5HYllfWEgtVWw4TTZwQmtjWWZPajk3UzU1dElPLUd3VTdJaG5RZV84cWJlT3E5OXFFSEpDMGJwOEJEQVhVemd6dXV3b3JkdVdjYzZiTG5mMEVkYlE1UQ==';
  private PAYMOB_AUTH_URL = 'https://accept.paymobsolutions.com/api/auth/tokens';
  private PAYMOB_ORDER_URL = 'https://accept.paymobsolutions.com/api/ecommerce/orders';
  private PAYMOB_PAYMENT_KEY_URL = 'https://accept.paymob.com/api/acceptance/payment_keys';

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    return this.http.post(this.PAYMOB_AUTH_URL, { api_key: this.PAYMOB_API_KEY });
  }

  

  createOrder(token: string, amount: number, currency: string): Observable<any> {

   const headers =new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.PAYMOB_ORDER_URL, { token, amount_cents: amount * 100, currency },{headers});
  }

  generatePaymentKey(token:string,amount_cents:string,expiration:number,order_id:string,billing_data:BillingData,currency:string,integration_id:number): Observable<any> {
    const headers =new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    console.log(token)
    return this.http.post(this.PAYMOB_PAYMENT_KEY_URL, { token, amount_cents, expiration, order_id, billing_data, currency, integration_id },{headers});
  }

}
