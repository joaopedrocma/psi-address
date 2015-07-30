package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
	@Id
	@GeneratedValue
	private int address_id;
	@Column
	private String address;
	@Column
	private String address2;
	@Column
	private String district;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "city_id")
	private int city_id;
	@Column
	private String postal_code;
	@Column
	private String phone;
	@Column
	private Date last_update;

	public Address() {
	}

	public Address(int address_id, String address, String address2,
			String district, int city_id, String postal_code, String phone,
			Date last_update) {
		super();
		this.address_id = address_id;
		this.address = address;
		this.address2 = address2;
		this.district = district;
		this.city_id = city_id;
		this.postal_code = postal_code;
		this.phone = phone;
		this.last_update = last_update;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
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

	public int getCity_id() {
		return city_id;
	}

	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}

	public String getPostal_code() {
		return postal_code;
	}

	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getLast_update() {
		return last_update;
	}

	public void setLast_update(Date last_update) {
		this.last_update = last_update;
	}

	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", address=" + address
				+ ", address2=" + address2 + ", district=" + district
				+ ", city_id=" + city_id + ", postal_code=" + postal_code
				+ ", phone=" + phone + ", last_update=" + last_update + "]";
	}
}
