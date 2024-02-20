import { Injectable, signal } from '@angular/core';
import { User } from "../model/user";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getUser() {
    this.httpClient.get<User>('assets/user.json')
      .subscribe({
        next: (response) => this._user.set(response),
        error: _ =>
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while loading user',  })
      });
  }
}
