import {Component, inject} from "@angular/core";
import {ShyftApiService} from "./shyft-api.service";
import {WalletStore} from "@heavy-duty/wallet-adapter";
import {toSignal} from "@angular/core/rxjs-interop";
import {computedAsync} from "ngxtension/computed-async";
import {NgForOf} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatTable} from "@angular/material/table";

@Component({
    selector: 'grimlock-transaction-section',
    template: `
        <section class="p-16 relative">
            <p class="text-center text-3xl relative">TRANSACTION HISTORY</p>
            <div class="flex justify-center mb-4 relative">@if (transactions()) {
             <table>
                 <tr><td>TimeStamp</td><td>Fee</td><td>Fee Payer</td></tr>
                <tr *ngFor="let transaction of transactions()">

                    <td>
                        {{transaction.timestamp}}
                    </td>
                    <td>
                        {{transaction.fee}}
                    </td>
                    <td>
                        {{transaction.fee_payer}}
                    </td>
                </tr>
             </table>
            }
            </div>
        </section>
    `,
    standalone: true,
    imports: [
        NgForOf,
        MatList,
        MatListItem,
        MatTable
    ]
})

export class TransactionSectionComponent {
    private readonly shyftApiService: ShyftApiService = inject(ShyftApiService);
    private readonly walletStore = inject(WalletStore);
    private readonly publicKey = toSignal(this.walletStore.publicKey$);
    private readonly account = toSignal(this.walletStore.wallet$)

    readonly transactions = computedAsync(
        () => this.shyftApiService.getTransactions(this.publicKey()?.toBase58()),
        {requireSync: true},
    );

}
