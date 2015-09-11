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
@Table(name = "neighbourhood")
public class Neighbourhood {

	@Id
	@GeneratedValue
	@Column(name = "neighbourhood_id")
	private Integer neighbourhoodid;

	@Column
	private String neighbourhood;

	@ManyToOne
	@JoinColumn(name = "city_id", referencedColumnName = "city_id")
	private City neighbourhoodcity;

	@Column(name = "last_update")
	private Date lastupdate;

	public Neighbourhood() {
	}

	public Neighbourhood(Integer neighbourhoodid, String neighbourhood,
			City neighbourhoodcity, Date lastupdate) {
		super();
		this.neighbourhoodid = neighbourhoodid;
		this.neighbourhood = neighbourhood;
		this.neighbourhoodcity = neighbourhoodcity;
		this.lastupdate = lastupdate;
	}

	public Integer getNeighbourhoodid() {
		return neighbourhoodid;
	}

	public void setNeighbourhoodid(Integer neighbourhoodid) {
		this.neighbourhoodid = neighbourhoodid;
	}

	public String getNeighbourhood() {
		return neighbourhood;
	}

	public void setNeighbourhood(String neighbourhood) {
		this.neighbourhood = neighbourhood;
	}

	public City getNeighbourhoodcity() {
		return neighbourhoodcity;
	}

	public void setNeighbourhoodcity(City neighbourhoodcity) {
		this.neighbourhoodcity = neighbourhoodcity;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "Neighbourhood [neighbourhoodid=" + neighbourhoodid
				+ ", neighbourhood=" + neighbourhood + ", neighbourhoodcity="
				+ neighbourhoodcity + ", lastupdate=" + lastupdate + "]";
	}

}
