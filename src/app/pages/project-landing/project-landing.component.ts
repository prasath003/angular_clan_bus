import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-project-landing',
  templateUrl: './project-landing.component.html',
  styleUrls: ['./project-landing.component.scss']
})
export class ProjectLandingComponent implements OnInit {
  showScreen = true;

  constructor(private route: Router, public translate: TranslateService) {
    // @ts-ignore
    this.translateService();
  }

  ngOnInit() {
  }

  translateService() {
    this.translate.addLangs(['en', 'ta']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ta/) ? browserLang : 'en');
  }

  openDialog(load) {
    if (load === 'Register') {
      this.showScreen = true;
      this.route.navigateByUrl('/register');
    } else if (load === 'Login') {
      this.showScreen = false;
      this.route.navigateByUrl('/login');
    }
    return true;
  }

}
