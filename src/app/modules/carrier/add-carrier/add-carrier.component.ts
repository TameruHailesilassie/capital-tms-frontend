import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.scss']
})
export class AddCarrierComponent implements OnInit {
  constructor(
    
  ) { }

  ngOnInit(): void {

  }

  onSubmit($event): void {
    console.log($event);


  }

}
