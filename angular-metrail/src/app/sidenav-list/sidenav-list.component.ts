import { ApiNewServiceService } from './../servies/api-new-service.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  mysourse:Array<any>
  constructor(private api:ApiNewServiceService) { }
  @Output() closeNav=new EventEmitter();
  ngOnInit(): void {
    this.api.getSource().subscribe(item=>{
      this.mysourse=item['sources'];

    });
  }

  closenav()
  {
    this.closeNav.emit();
  }
}
