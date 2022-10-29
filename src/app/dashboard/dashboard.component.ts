import { Component, OnInit } from '@angular/core';
import { ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart,Decimation,DoughnutController,Filler,Legend,LinearScale,LineController,LineElement,LogarithmicScale,PieController,PointElement,PolarAreaController,RadarController,RadialLinearScale,registerables, ScatterController, SubTitle, TimeScale, TimeSeriesScale, Title, Tooltip} from 'chart.js';
import { OrderService } from '../order.service';




Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ordersData:any;
  summaryData:any;
  sevendaysData:any;

  totalEarnings:any;
  averageSales:any;
  newOrders:any;
  anylaticsData:any
  serachItem:any;
  orderSerach:any;
  // const config:any= {
  //   type: 'line',
  //   data:data,
  // };

  constructor(private order:OrderService ) { }

//   const labels:any = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

  ngOnInit(): void {





let label = this.sevendaysData
 


    const ctx:any = document.getElementById('myChart');
 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['17 Mon','18 Tue','19 Wed','20 Thu','21 Fri','22 Sat','23 Sun'],
        datasets: [{
            label: ' Revenu',
            data: [11000, 13000, 9000, 18000, 20000, 16000,10000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            // y: {
            //     beginAtZero: true
            // }
        }
    }
});
    // get Orders
    this.order.getOrders().subscribe((data:any)=>{

      this.ordersData=data['data'];
      this. orderSerach = data['data'];
      
      console.log('order data',this.ordersData);
         });

         // get Analytics
    this.order.getAnalytics().subscribe((resDta:any)=>{

      this.summaryData=resDta['data']['overview'];
      this.anylaticsData=resDta['data']['summary'];
      console.log('anyalydata',this.anylaticsData)
      this. totalEarnings= this.summaryData.total_earnings[0].total_earnings;
       this.averageSales= this.summaryData.average_sale[0].average_sale;
       this.newOrders= this.summaryData.new_orders[0].new_orders;

      console.log('totalEarnings',this.totalEarnings);
      console.log('averageSales',this.averageSales);
      console.log('newOrders',this.newOrders);

      console.log('Analytics data',this.summaryData);
    });

    // get last 7 days orders
    this.order.getLastOrders().subscribe((res:any)=>{
      this.sevendaysData=res['data']['last7Days'];
    
      console.log('7 days data',this.sevendaysData);
    })

  
        }
//filetrning
filetrItem(event:any){
return this.ordersData.filter((item:{billing_name:string;})=>item.billing_name.toLowerCase().includes(event.toLowerCase()));
}
serachValue(){
  this.orderSerach=this.filetrItem(this.serachItem);
}
}
