package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	@Id
	@GeneratedValue
	private int city_id;
	@Column
	private String city;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "country_id")
	private Country country_id;
	@Column
	private Date last_update;

	public City() {
	}

	public City(int city_id, String city, Country country_id, Date last_update) {
		super();
		this.city_id = city_id;
		this.city = city;
		this.country_id = country_id;
		this.last_update = last_update;
	}

	public int getCity_id() {
		return city_id;
	}

	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Country getCountry_id() {
		return country_id;
	}

	public void setCountry_id(Country country_id) {
		this.country_id = country_id;
	}

	public Date getLast_update() {
		return last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

	@Override
	public String toString() {
		return "City [city_id=" + city_id + ", city=" + city + ", country_id="
				+ country_id + ", last_update=" + last_update + "]";
	}
}