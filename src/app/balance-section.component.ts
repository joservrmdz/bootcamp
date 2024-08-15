import {Component, inject} from "@angular/core";
import {HdWalletMultiButtonComponent} from "@heavy-duty/wallet-adapter-material";
import {ShyftApiService} from "./shyft-api.service";
import {WalletStore} from "@heavy-duty/wallet-adapter";
import {toSignal} from "@angular/core/rxjs-interop";
import {computedAsync} from "ngxtension/computed-async";
import {map} from "rxjs";

@Component({
    selector: 'grimlock-balance-section',
    template: `
        <section class="px-24 py-32 bg-white bg-opacity-5 relative">
            <p class="top text-center text-3xl relative">WALLET BALANCE</p>
            <div class="flex justify-center mb-4 relative">
                <hd-wallet-multi-button></hd-wallet-multi-button>
            </div>
            <div class="flex justify-center mb-4">@if (account()) {
                <div class="flex justify-center items-center gap-2">
                    <p class="text-2xl">{{ account()?.info?.name }}</p>
                    <p class="text-2xl">{{ account()?.info?.symbol }}</p>
                    <img [src]="account()?.info?.image"
                         class="w-8 h-8"/>
                    <p class="text-xl">{{ account()?.balance }}</p>
                </div>
            }
            </div>
        </section>
    `,
    standalone: true,

    imports: [
        HdWalletMultiButtonComponent
    ]
})

export class BalanceSectionComponent {
    private readonly shyftApiService: ShyftApiService = inject(ShyftApiService);
    private readonly walletStore = inject(WalletStore);
    private readonly publicKey = toSignal(this.walletStore.publicKey$);

    readonly account = computedAsync(
        () => this.shyftApiService.getAccount(this.publicKey()?.toBase58()),
        {requireSync: true},
    );
}
