import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from "../../services/storage.service";
import { SessionService } from "../../services/session.service";
import { Session } from "../../models/class/session";
import { AuthGuard } from "../../guards/auth.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StorageService, SessionService, Session, AuthGuard],
  declarations: []
})
export class CoreModule { }
