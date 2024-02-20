import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksProfileComponent } from "./social-links-profile/social-links-profile.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialLinksProfileComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'social-links-profile-component';
}
