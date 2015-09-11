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
	@Column(name = "country_id")
	private Integer countryid;

	@Column
	private String country;

	@Column(name = "last_update")
	private Date lastupdate;

	public Country() {
	}

	public Country(Integer countryid, String country, Date lastupdate) {
		super();
		this.countryid = countryid;
		this.country = country;
		this.lastupdate = lastupdate;
	}

	public Integer getCountryid() {
		return countryid;
	}

	public void setCountryid(Integer countryid) {
		this.countryid = countryid;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "Country [countryid=" + countryid + ", country=" + country
				+ ", lastupdate=" + lastupdate + "]";
	}

}