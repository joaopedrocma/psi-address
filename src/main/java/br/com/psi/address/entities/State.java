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
@Table(name = "state")
public class State {
	@Id
	@GeneratedValue
	@Column(name = "state_id")
	private Integer stateid;

	@Column
	private String state;

	@ManyToOne
	@JoinColumn(name = "country_id", referencedColumnName = "country_id")
	private Country statecountry;

	@Column(name = "last_update")
	private Date lastupdate;

	public State() {
	}

	public State(Integer stateid, String state, Country statecountry,
			Date lastupdate) {
		super();
		this.stateid = stateid;
		this.state = state;
		this.statecountry = statecountry;
		this.lastupdate = lastupdate;
	}

	public Integer getStateid() {
		return stateid;
	}

	public void setStateid(Integer stateid) {
		this.stateid = stateid;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Country getStatecountry() {
		return statecountry;
	}

	public void setStatecountry(Country statecountry) {
		this.statecountry = statecountry;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "State [stateid=" + stateid + ", state=" + state
				+ ", statecountry=" + statecountry + ", lastupdate="
				+ lastupdate + "]";
	}

}