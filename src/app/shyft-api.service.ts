import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class ShyftApiService {
    private readonly httpClient: HttpClient = inject(HttpClient);
    private readonly header: { 'x-api-key': string } = {'x-api-key': 'mgh8R0qxBwLwc254'};
    private readonly mint = '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs';

    getAccount(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        }

        const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance')
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('wallet', publicKey);
        url.searchParams.set('token', this.mint);

        return this.httpClient.get<{ result: { balance: number; info: { image: string; name:string; symbol: string }; address: string } }
        >(url.toString(), {headers: this.header})
            .pipe(map(response => response.result));
    }

    getTransactions(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        }

        const url = new URL('https://api.shyft.to/sol/v1/transaction/history')
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('account', 'F62kZ8kJ6c4GxP8AU2F7e5M7xQjwkJorEV9NS4Yi3c81');

        return this.httpClient.get<{
            result: [{ timestamp: string; fee: number; fee_payer: string }]
        }>(url.toString(), {headers: this.header})
            .pipe(map(response => response.result)
            );
    }
}