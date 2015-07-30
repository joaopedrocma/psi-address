package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "country")
public class Country {
	@Id
	@GeneratedValue
	private int country_id;
	@Column
	private String country;
	@Column
	private Date last_update;

	public Country() {
	}

	public Country(int country_id, String country, Date last_update) {
		super();
		this.country_id = country_id;
		this.country = country;
		this.last_update = last_update;
	}

	public int getCountry_id() {
		return country_id;
	}

	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Date getLast_update() {
		return last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

	@Override
	public String toString() {
		return "Country [country_id=" + country_id + ", country=" + country
				+ ", last_update=" + last_update + "]";
	}
}