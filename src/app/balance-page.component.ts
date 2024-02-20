import {Component} from "@angular/core";
import {HdWalletMultiButtonComponent} from "@heavy-duty/wallet-adapter-material";
import {BalanceSectionComponent} from "./balance-section.component";
import {TransactionSectionComponent} from "./transaction-section.component";

@Component({
    selector: 'grimlock-balance-page',
    template:
        `<grimlock-balance-section></grimlock-balance-section>
        <grimlock-transaction-section></grimlock-transaction-section>`
    ,
    standalone: true,

    imports: [
        HdWalletMultiButtonComponent,
        BalanceSectionComponent,
        TransactionSectionComponent
    ]
})

export class BalancePageComponent {
}