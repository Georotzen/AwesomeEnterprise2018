import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AwesomeEnterprise2018SharedModule, UserRouteAccessService } from './shared';
import { AwesomeEnterprise2018AppRoutingModule} from './app-routing.module';
import { AwesomeEnterprise2018HomeModule } from './home/home.module';
import { AwesomeEnterprise2018AdminModule } from './admin/admin.module';
import { AwesomeEnterprise2018AccountModule } from './account/account.module';
import { AwesomeEnterprise2018EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        AwesomeEnterprise2018AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AwesomeEnterprise2018SharedModule,
        AwesomeEnterprise2018HomeModule,
        AwesomeEnterprise2018AdminModule,
        AwesomeEnterprise2018AccountModule,
        AwesomeEnterprise2018EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AwesomeEnterprise2018AppModule {}
