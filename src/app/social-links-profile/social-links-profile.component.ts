import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { UserService } from "../service/user.service";
import { ToastModule } from "primeng/toast";

@Component({
  selector: 'app-social-links-profile',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ToastModule
  ],
  templateUrl: './social-links-profile.component.html',
  styleUrl: './social-links-profile.component.scss'
})
export class SocialLinksProfileComponent {

  user = this.userService.user;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser();
  }
}
