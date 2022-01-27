import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICredential } from '../interfaces/credential';
import { IToken } from '../interfaces/token';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    /**
     * 
     * @param credentials 
     * @returns 
     */
    login(credentials: ICredential): Observable<IToken> {
        return this.http.post<IToken>(environment.endpoint.auth + "login", credentials)
    }

    /**
     * 
     * @param credentials 
     * @returns 
     */
    register(credentials: ICredential): Observable<IToken> {
        return this.http.post<IToken>(environment.endpoint.auth + "register", credentials)
    }
}
