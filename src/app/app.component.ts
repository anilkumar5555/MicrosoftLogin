import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Microsoftlogin';

  constructor(private msalservice: MsalService) { }
  ngOnInit(): void {

    this.msalservice.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null) {
        this.msalservice.instance.setActiveAccount(res.account)
      }
    })
  }
  
  isLoggedIn(): boolean {
    return this.msalservice.instance.getActiveAccount() != null
  }
  public seatscapacity = 100;
  public ticketscount = 20;

  bookingtickets(): boolean {
    let ticketsreseved = false;
    if (this.ticketscount <= this.seatscapacity) {
      this.ticketscount++;
      ticketsreseved = true;
    }
    return ticketsreseved;
  }
  canceltickets(): boolean {
    let ticketcanceled = false;
    if (this.ticketscount >= this.seatscapacity) {
      this.ticketscount--;
      ticketcanceled = true;
    }
    return ticketcanceled;
  }

  login() {
    this.msalservice.loginRedirect();
    // this.msalservice.loginPopup().subscribe((Response:AuthenticationResult)=>
    // {
    //   this.msalservice.instance.setActiveAccount(Response.account)
    // });
  }
  logout() {
    this.msalservice.logout();
  }
}
