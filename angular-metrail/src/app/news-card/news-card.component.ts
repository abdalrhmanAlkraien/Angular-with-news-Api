import { ApiNewServiceService } from './../servies/api-new-service.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  id:string=this.route.snapshot.paramMap.get('id');
  news:Array<any>;
  constructor(private route:ActivatedRoute,
    private api:ApiNewServiceService ) { }

  ngOnInit(): void {
    this.api.getArticalById(this.id).subscribe(item=>{
      this.news=item['articles'];
      console.log(item['articles']);



    });
  }

}
