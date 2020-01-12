import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts-section',
  templateUrl: './posts-section.component.html',
  styleUrls: ['./posts-section.component.scss']
})
export class PostsSectionComponent implements OnInit {

  @Input() postList;

  constructor() { }

  ngOnInit() {
  }

}
