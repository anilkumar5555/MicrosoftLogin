import { HttpClient } from '@angular/common/http';
import { Component, InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MsalService } from '@azure/msal-angular';
import { AppComponent } from './app.component';
import { HttpTestingController } from '@angular/common/http/testing';

let mas: MsalService;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [InjectionToken, FormBuilder, HttpClient,
        {
          provide: MsalService
        }
      ]
    }).compileComponents();

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Microsoftlogin'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Microsoftlogin');
    });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('Microsoftlogin app is running!');
    });
  });
});

// describe('ticket reservation', () => {
//   beforeEach(() => {
//     let component = new AppComponent(mas);
//     it('increesae ticket by 1', () => {
//       //Arrange
//       //Act
//       let reserved = component.bookingtickets();
//       //Assert
//       expect(reserved).toBe(false);
//     });
//     it('decrese  by one', () => {
//       let cancel = component.canceltickets();
//       expect(cancel).toBe(true);
//     })
//   });
// });

describe('microsoft login', () => {
  beforeEach(() => {
    let app = new AppComponent(mas);
    let service: MsalService;
    it('login user', () => {
      let log = app.login();
      expect(log).toBeTruthy();
    })
    it('should use AuthService', () => {
      service.loginRedirect().subscribe(res=>
        {
          expect(res).toBeDefined();
        }) 
    });

    it('should be logout', () => {
      service.logout().subscribe(res=>
        {
          expect(res).toBeDefined();
        }) 
    });

    it('should be logout  popup', () => {
      service.logoutPopup().subscribe(res=>
        {
          expect(res).toBeDefined();
        }) 
    });

    it('should be login popup', () => {
      service.loginPopup().subscribe(res=>
        {
          expect(res).toBeDefined();
        }) 
    });

    it('should be logout Redirect', () => {
      service.logoutRedirect().subscribe(res=>
        {
          expect(res).toBeDefined();
        }) 
    });

    it('should be login Acount', () => {
      service.loginPopup().subscribe(res=>
        {
          let  result= service.instance.getActiveAccount();
          expect(result).toBeDefined();
        }) 
    });
  
  })
})




