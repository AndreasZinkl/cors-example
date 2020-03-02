import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Link } from '../model/link';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LinkService {
	private linksUrl : string;
	
	constructor(private http: HttpClient) {
		this.linksUrl = 'http://localhost:8080/links';
	}
	
	public findAll(): Observable<Link[]> {
		return this.http.get<Link[]>(this.linksUrl);
	}
	
	public save(link: Link) {
		return this.http.post<Link>(this.linksUrl, link);
	}
}
