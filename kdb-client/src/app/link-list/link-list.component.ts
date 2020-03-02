import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { LinkService} from '../service/link-service.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
	links: Link[];
	constructor(private linkService: LinkService) { }

	ngOnInit() {
		this.linkService.findAll().subscribe(data => {
			this.links = data;
		});
	}

}
