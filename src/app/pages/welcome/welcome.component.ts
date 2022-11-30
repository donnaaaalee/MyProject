import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { map } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  allDate: any;
  apiUrl:string = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json';
  title = 'Youbike 最新動態';
  // filterGender = [
  //   { text: 'male', value: 'male' },
  //   { text: 'female', value: 'female' }
  // ];


  constructor(private http: HttpClient,) { 

  }
  
  ngOnInit(): void {
 
  this.allDate = this.http.get(this.apiUrl).subscribe(res => {
    console.log(res, "AAA");
    this.allDate = res;
    
  });


}


}