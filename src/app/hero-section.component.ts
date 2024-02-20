import {Component} from "@angular/core";

@Component({
    selector: 'bob-hero-section',
    template: `
        <section class="px-24 py-32 bg-white bg-opacity-5">
            <p class="text-center text-3xl">
            Hero.
            </p>
        </section>
    `,
    standalone: true,

})

export class HeroSectionComponent {
}