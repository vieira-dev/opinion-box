import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-add-edit',
  templateUrl: './post-add-edit.component.html',
  styleUrls: ['./post-add-edit.component.scss']
})
export class PostAddEditComponent implements OnInit {

  @Input() postCardMode: string;
  @Output() newPostAdded = new EventEmitter<{title: string, message: string}>();
  @Output() closeCard = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit() {
  }

  onAddNewPost(newTitleRef: HTMLInputElement, newMessageRef: HTMLInputElement ){
    this.newPostAdded.emit({ title: newTitleRef.value, message: newMessageRef.value});
    this.closeCard.emit();
  }
  onCancel() {
    this.closeCard.emit();
  }

}
