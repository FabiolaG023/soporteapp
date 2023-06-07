import { Component } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-record',
 templateUrl: './record.component.html',
//  templateUrl: './record-print.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {


  listRecord: any =[];
  pipe = new DatePipe('en-US');
  today =  new Date();
  Hoy = this.pipe.transform(this.today, 'dd/MM/YYYY');

  recordGenerado: any ='82886';



  constructor(private recordService: RecordService){}


ngOnInit(){
  this.recordService.getAllRecord().subscribe((res: any)=>{ this.listRecord = res;});
}


}
