package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	@Id
	@GeneratedValue
	@Column(name = "city_id")
	private int cityid;

	@Column
	private String city;

	@Column(name = "state_id")
	private int stateid;

	@Column(name = "last_update")
	private Date lastupdate;

	public City() {
	}

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getStateid() {
		return stateid;
	}

	public void setStateid(int stateid) {
		this.stateid = stateid;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", city=" + city + ", stateid="
				+ stateid + ", lastupdate=" + lastupdate + "]";
	}
}