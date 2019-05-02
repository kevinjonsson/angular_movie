import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/interfaces/IData';

@Component({
  selector: 'app-movie-presentation',
  templateUrl: './movie-presentation.component.html',
  styleUrls: ['./movie-presentation.component.css']
})
export class MoviePresentationComponent implements OnInit {
  @Input() products: IData[];

  constructor() { }

  ngOnInit() {
    
  }

}
