package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "neighbourhood")
public class Neighbourhood {

	@Id
	@GeneratedValue
	@Column(name = "neighbourhood_id")
	private int neighbourhoodid;

	@Column
	private String neighbourhood;

	@Column(name = "city_id")
	private int cityid;

	@Column(name = "last_update")
	private Date lastupdate;

	public Neighbourhood() {
	}

	public Neighbourhood(int neighbourhoodid, String neighbourhood, int cityid,
			Date lastupdate) {
		super();
		this.neighbourhoodid = neighbourhoodid;
		this.neighbourhood = neighbourhood;
		this.cityid = cityid;
		this.lastupdate = lastupdate;
	}

	public int getneighbourhoodid() {
		return neighbourhoodid;
	}

	public void setneighbourhoodid(int neighbourhoodid) {
		this.neighbourhoodid = neighbourhoodid;
	}

	public String getneighbourhood() {
		return neighbourhood;
	}

	public void setneighbourhood(String neighbourhood) {
		this.neighbourhood = neighbourhood;
	}

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "neighbourhood [neighbourhoodid=" + neighbourhoodid
				+ ", neighbourhood=" + neighbourhood + ", complement="
				+ ", cityid=" + cityid + ", lastupdate=" + lastupdate + "]";
	}
}
