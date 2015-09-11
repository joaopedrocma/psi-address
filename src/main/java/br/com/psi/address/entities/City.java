package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	@Id
	@GeneratedValue
	@Column(name = "city_id")
	private Integer cityid;

	@Column
	private String city;

	@ManyToOne
	@JoinColumn(name = "state_id", referencedColumnName = "state_id")
	private State citystate;

	@Column(name = "last_update")
	private Date lastupdate;

	public City() {
	}

	public City(Integer cityid, String city, State citystate, Date lastupdate) {
		super();
		this.cityid = cityid;
		this.city = city;
		this.citystate = citystate;
		this.lastupdate = lastupdate;
	}

	public Integer getCityid() {
		return cityid;
	}

	public void setCityid(Integer cityid) {
		this.cityid = cityid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public State getCitystate() {
		return citystate;
	}

	public void setCitystate(State citystate) {
		this.citystate = citystate;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", city=" + city + ", citystate="
				+ citystate + ", lastupdate=" + lastupdate + "]";
	}

}