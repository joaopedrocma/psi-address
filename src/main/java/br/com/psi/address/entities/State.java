package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "state")
public class State {
	@Id
	@GeneratedValue
	@Column(name = "state_id")
	private int stateid;

	@Column
	private String state;

	@Column(name = "country_id")
	private int countryid;

	@Column(name = "last_update")
	private Date lastupdate;

	public State() {
	}

	public int getStateid() {
		return stateid;
	}

	public void setStateid(int stateid) {
		this.stateid = stateid;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getCountryid() {
		return countryid;
	}

	public void setCountryid(int countryid) {
		this.countryid = countryid;
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
				+ ", countryid=" + countryid + ", lastupdate=" + lastupdate
				+ "]";
	}
}