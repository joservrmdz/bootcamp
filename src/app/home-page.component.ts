import {Component} from "@angular/core";
import {HeroSectionComponent} from "./hero-section.component";
import {FeaturesSectionComponent} from "./features-section.component";

@Component({
    selector: 'bob-home-page',
    template: `
        <bob-hero-section></bob-hero-section>
        <bob-features-section></bob-features-section>
    `,
    standalone: true,
    imports: [HeroSectionComponent, FeaturesSectionComponent]

})

export class HomePageComponent {
}