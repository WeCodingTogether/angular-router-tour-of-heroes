import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent {
  details = '';
  message = '';
  sending = false;

  constructor(private route: Router) { }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.details = 'Message Sent';
      this.closePopup();
    }, 3000);
  }

  cancel() {
    this.closePopup();
  }

  // popup outlet 写在了 app.component.html
  // <router-outlet name="popup"></router-outlet>
  closePopup() {
    this.route.navigate([{outlets: { popup: null }}]);
  }
}
