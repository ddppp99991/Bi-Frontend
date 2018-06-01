import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.component.html',
    styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private translateService: TranslateService) { }

    ngOnInit() {
        this.translateService.addLangs(["ch", "en"]);
        this.translateService.setDefaultLang("ch");
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/ch|en/) ? browserLang : 'ch');
    }

    changeLang(){
        this.translateService.use('en');
        
    }
}
