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
@Table(name = "address")
public class Address {

	@Id
	@GeneratedValue
	@Column(name = "address_id")
	private Integer addressid;

	@Column
	private String street;

	@Column
	private String complement;

	@ManyToOne
	@JoinColumn(name = "neighbourhood_id", referencedColumnName = "neighbourhood_id")
	private Neighbourhood addressneighbourhood;

	@Column(name = "postal_code")
	private String postalcode;

	@Column(name = "last_update")
	private Date lastupdate;

	public Address() {
	}

	public Address(Integer addressid, String street, String complement,
			Neighbourhood addressneighbourhood, String postalcode,
			Date lastupdate) {
		super();
		this.addressid = addressid;
		this.street = street;
		this.complement = complement;
		this.addressneighbourhood = addressneighbourhood;
		this.postalcode = postalcode;
		this.lastupdate = lastupdate;
	}

	public Integer getAddressid() {
		return addressid;
	}

	public void setAddressid(Integer addressid) {
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

	public Neighbourhood getAddressneighbourhood() {
		return addressneighbourhood;
	}

	public void setAddressneighbourhood(Neighbourhood addressneighbourhood) {
		this.addressneighbourhood = addressneighbourhood;
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
				+ ", complement=" + complement + ", addressneighbourhood="
				+ addressneighbourhood + ", postalcode=" + postalcode
				+ ", lastupdate=" + lastupdate + "]";
	}

}
