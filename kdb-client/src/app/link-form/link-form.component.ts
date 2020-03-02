import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from '../service/link-service.service';
import { Link } from '../model/link';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent {
	link: Link;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private linkService: LinkService) {
		this.link = new Link();
	}

	onSubmit() {
		this.linkService.save(this.link).subscribe(result => this.gotoLinkList());
	}
	
	gotoLinkList() {
		this.router.navigate(['/links']);
	}
}
