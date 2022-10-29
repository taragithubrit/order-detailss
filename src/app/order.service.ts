import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders_url='http://13.76.214.165:8001/api/orders?page=1&limit=15&order_status=';
analytics_url='http://13.76.214.165:8001/api/analytics/summary';
last_url='http://13.76.214.165:8001/api/analytics/last7Days';
  constructor(private http:HttpClient) { }

  // get orders
  getOrders():Observable<any>{
    return this.http.get(this.orders_url)
  }
  //getAnalytics
  getAnalytics():Observable<any>{
    return this.http.get(this.analytics_url);
  }
  getLastOrders(): Observable<any>{
    return this.http.get(this.last_url);
   }
}
