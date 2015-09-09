package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class Address {

	@Id
	@GeneratedValue
	@Column(name = "address_id")
	private int addressid;

	@Column
	private String street;

	@Column
	private String complement;

	@Column(name = "neighborhood_id")
	private int neighborhoodid;

	@Column(name = "postal_code")
	private String postalcode;

	@Column(name = "last_update")
	private Date lastupdate;

	public Address() {
	}

	public Address(int addressid, String street, String complement,
			int neighborhoodid, String postalcode, Date lastupdate) {
		super();
		this.addressid = addressid;
		this.street = street;
		this.complement = complement;
		this.neighborhoodid = neighborhoodid;
		this.postalcode = postalcode;
		this.lastupdate = lastupdate;
	}

	public int getAddressid() {
		return addressid;
	}

	public void setAddressid(int addressid) {
		this.addressid = addressid;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public int getNeighborhoodid() {
		return neighborhoodid;
	}

	public void setNeighborhoodid(int neighborhoodid) {
		this.neighborhoodid = neighborhoodid;
	}

	public String getPostalcode() {
		return postalcode;
	}

	public void setPostalcode(String postalcode) {
		this.postalcode = postalcode;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "Address [addressid=" + addressid + ", street=" + street
				+ ", complement=" + complement + ", neighborhoodid="
				+ neighborhoodid + ", postalcode=" + postalcode
				+ ", lastupdate=" + lastupdate + "]";
	}

}
