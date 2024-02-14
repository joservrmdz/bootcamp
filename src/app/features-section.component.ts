import {Component} from "@angular/core";

@Component({
    selector: 'bob-features-section',
    template: `
        <section class="p-16">
            <ul class="flex justify-center items-center gap-2">
                <li>Rapido</li>
                <li>Eficiente</li>
                <li>Seguro</li>
            </ul>
        </section>
    `,
    standalone: true,

})

export class FeaturesSectionComponent {
}