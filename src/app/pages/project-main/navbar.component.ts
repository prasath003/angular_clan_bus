import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {ComponentServiceService} from '../../service/component_service/component-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  otherTheme = false;
  userName: string;
  mobile: any;
  menuList: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private dialog: MatDialog, public translate: TranslateService, private data: ComponentServiceService) {
    this.mobile = window.screen.width === 360;
    this.userName = localStorage.getItem('userName');

    // Translate Service for lazy loading module
    this.translateService();

    // Menu list
    this.menuList = [{
      menuLink: 'books',
      menuName: 'Main.Option_1_Title'
    },
      {
        menuLink: 'users',
        menuName: 'Main.Option_2_Title'
      }];

  }

  translateService() {
    this.translate.addLangs(['en', 'ta']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ta/) ? browserLang : 'en');

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  changeTheme() {
    this.otherTheme = !this.otherTheme;
    this.data.newEvent(this.otherTheme);
  }

  ngOnInit(): void {

  }

}
