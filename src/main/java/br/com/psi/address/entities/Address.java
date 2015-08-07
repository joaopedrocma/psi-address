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

	private String address;

	private String address2;

	private String district;

	@Column(name = "city_id")
	private int cityId;

	@Column(name = "postal_code")
	private String postalcode;

	private String phone;

	@Column(name = "last_update")
	private Date lastupdate;

	public Address() {
	}

	public Address(int addressid, String address, String address2,
			String district, int cityId, String postalcode, String phone,
			Date lastupdate) {
		super();
		this.addressid = addressid;
		this.address = address;
		this.address2 = address2;
		this.district = district;
		this.cityId = cityId;
		this.postalcode = postalcode;
		this.phone = phone;
		this.lastupdate = lastupdate;
	}

	public int getAddressid() {
		return addressid;
	}

	public void setAddressid(int addressid) {
		this.addressid = addressid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public int getCityId() {
		return cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public String getPostalcode() {
		return postalcode;
	}

	public void setPostalcode(String postalcode) {
		this.postalcode = postalcode;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(Date lastupdate) {
		this.lastupdate = lastupdate;
	}

	@Override
	public String toString() {
		return "Address [addressid=" + addressid + ", address=" + address
				+ ", address2=" + address2 + ", district=" + district
				+ ", cityId=" + cityId + ", postalcode=" + postalcode
				+ ", phone=" + phone + ", lastupdate=" + lastupdate + "]";
	}
}
