import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { AwesomeEnterprise2018AppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(AwesomeEnterprise2018AppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
