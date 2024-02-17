import {Component, inject} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {RouterModule} from '@angular/router';
import {HdWalletMultiButtonComponent} from '@heavy-duty/wallet-adapter-material';
import {ShyftApiService} from "./shyft-api.service";
import {WalletStore} from "@heavy-duty/wallet-adapter";
import {computedAsync} from "ngxtension/computed-async"
import {MatAnchor} from "@angular/material/button";

@Component({
    standalone: true,
    imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
    selector: 'grimlock-root',
    template: `
        <header class="py-8 relative">
            <h1 class="text-5xl text-center mb-4"> Hola Soy Grimlock.</h1>
            <nav class="flex justify-center gap-4">
                <ul class="flex justify-center items-center gap-4">
                    <li>
                        <a [routerLink]="['']" mat-raised-button>Home</a>
                    </li>
                    <li>
                        <a [routerLink]="['/balance']" mat-raised-button>Balance</a>                        
                    </li>
                    <li>
                        <a [routerLink]="['/settings']" mat-raised-button>Settings</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <router-outlet></router-outlet>
        </main>
    `,
})
export class AppComponent {
}
