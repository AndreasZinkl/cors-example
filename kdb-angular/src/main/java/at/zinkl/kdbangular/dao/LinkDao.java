package at.zinkl.kdbangular.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import at.zinkl.kdbangular.bom.Link;

public interface LinkDao extends JpaRepository<Link, Integer>{

}
