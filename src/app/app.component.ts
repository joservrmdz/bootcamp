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
    selector: 'bootcamp-root',
    template: `
        <header class="py-8 relative">
            <h1 class="text-5xl text-center mb-4"> Hola Soy Bob.</h1>
            <div class="flex justify-center mb-4">
                <hd-wallet-multi-button></hd-wallet-multi-button>
            </div>
            @if (account()) {
                <div class="absolute top-4 left-4 flex justify-center items-center gap-2">
                <img [src]="account()?.info?.image" class="w-8 h-8"/>
                <p class="text-xl">{{account()?.balance}}</p>
                </div>
            }
            <nav class="flex justify-center gap-4">
                <ul class="flex justify-center items-center gap-4">
                    <li>
                        <a [routerLink]="['']" mat-raised-button>Home</a>
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
    private readonly shyftApiService: ShyftApiService = inject(ShyftApiService);
    private readonly walletStore = inject(WalletStore);
    private readonly publicKey = toSignal(this.walletStore.publicKey$);

    readonly account = computedAsync(
        () => this.shyftApiService.getAccount(this.publicKey()?.toBase58()),
        {requireSync: true},
    );
}
