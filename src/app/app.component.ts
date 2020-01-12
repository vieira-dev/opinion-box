import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postList: [{title: string, message: string }] = [ 
    {title: 'Primeiro', message: 'Este é o primeiro post desta futura rede social'}
  ];

  postCardMode: string;
  cardOn: boolean = false;
  constructor() {

  }
  cardToggle() {
    this.cardOn === false ? this.cardOn = true : this.cardOn = false;
  }
  setPostCardMode(mode: string): void {
    this.postCardMode = mode;
    this.cardToggle()
  }

  onPostAdded(newPost: {title: string, message: string }): void {
    this.postList.push(
      {
        title: newPost.title,
        message: newPost.message
      }
    );
  }

}
