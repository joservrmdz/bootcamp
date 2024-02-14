 import {ApplicationConfig} from '@angular/core';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter} from '@angular/router';
import {provideWalletAdapter} from "@heavy-duty/wallet-adapter";
import {appRoutes} from './app.routes';
 import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        provideAnimationsAsync(),
        provideWalletAdapter(),
        provideHttpClient(),
    ],
};
