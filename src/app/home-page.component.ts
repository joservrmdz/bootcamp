import {Component} from "@angular/core";
import {HeroSectionComponent} from "./hero-section.component";
import {FeaturesSectionComponent} from "./features-section.component";

@Component({
    selector: 'grimlock-home-page',
    template: `
        <grimlock-hero-section></grimlock-hero-section>
        <grimlock-features-section></grimlock-features-section>
    `,
    standalone: true,
    imports: [HeroSectionComponent, FeaturesSectionComponent]

})

export class HomePageComponent {
}