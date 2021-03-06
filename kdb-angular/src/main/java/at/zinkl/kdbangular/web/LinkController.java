package at.zinkl.kdbangular.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import at.zinkl.kdbangular.bom.Link;
import at.zinkl.kdbangular.dao.LinkDao;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class LinkController {
	private final LinkDao linkDao;

	@Autowired
	public LinkController(LinkDao linkDao) {
		this.linkDao = linkDao;
	}

	@GetMapping("/links")
	public List<Link> getLinks() {
		return linkDao.findAll();
	}

	@PostMapping("/links")
	public void addLink(@RequestBody Link link) {
		linkDao.save(link);
	}
}
