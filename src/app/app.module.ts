import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { Routing } from './app.route';
import { WorkspaceComponent } from './web/workspace/workspace.component';
import { HeaderComponent } from './web/workspace/header-component/header-component.component';
import { LoginComponent } from './web/login-component/login-component.component';

// 使用TranslateHttpLoader加载项目的本地语言json配置文件
function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    WorkspaceComponent,
    HeaderComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    // 调用forRoot静态方法指定加载的文件
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [ HttpClient ]
        }
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
