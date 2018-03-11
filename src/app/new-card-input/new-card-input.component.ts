import { Component, OnInit, EventEmitter, Output, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {

  public newCard: any = {text: ''};

  @Output() onCardAdd = new EventEmitter<string>();
  @ViewChild('form') public form: NgForm;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.form.valid) {
      this.addCard(this.newCard.text);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }
}
