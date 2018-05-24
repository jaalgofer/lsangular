import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from "../models/class/session";
import { User } from "../models/class/user";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

    private localStorageService;
    private currentSession: Session = null;

    constructor(private router: Router) {
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
    }

    setCurrentSession(session: Session): void {
        this.currentSession = session;
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
    }
    
    loadSessionData(): Session {
        var sessionStr = this.localStorageService.getItem('currentUser');
        return (sessionStr) ? <Session>JSON.parse(sessionStr) : null;
    }

    getCurrentSession(): Session {
        return this.currentSession;
    }

    removeCurrentSession(): void {
        this.localStorageService.removeItem('currentUser');
        this.currentSession = null;
    }

    getCurrentUser(): string {
        var session: Session = this.getCurrentSession();
        return (session && session.NombreUser) ? session.NombreUser : null;
    };

    isAuthenticated(): boolean {
        return (this.getCurrentToken() != null) ? true : false;
    };

    getCurrentToken(): any {
        var session = this.getCurrentSession();
        return (session && session.IdUser) ? session.IdUser : null;
    };

    logout(): void {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    }
    
}