package br.com.psi.address.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue
	@Column(name = "customer_id")
	private int customerid;

	@Column(name = "store_id")
	private int storeid;

	@Column(name = "first_name")
	private String firstname;

	@Column(name = "last_name")
	private String lastname;

	@Column
	private String email;

	@Column(name = "address_id")
	private int addressid;

	@Column
	private boolean active;

	@Column(name = "create_date")
	private Date createdate;

	@Column(name = "Lastupdate")
	private Date Last_update;

	public Customer() {
	}

	public Customer(int customerid, int storeid, String firstname,
			String lastname, String email, int addressid, boolean active,
			Date createdate, Date last_update) {
		super();
		this.customerid = customerid;
		this.storeid = storeid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.addressid = addressid;
		this.active = active;
		this.createdate = createdate;
		Last_update = last_update;
	}

	public int getCustomerid() {
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public int getStoreid() {
		return storeid;
	}

	public void setStoreid(int storeid) {
		this.storeid = storeid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAddressid() {
		return addressid;
	}

	public void setAddressid(int addressid) {
		this.addressid = addressid;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Date getCreatedate() {
		return createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	public Date getLast_update() {
		return Last_update;
	}

	public void setLast_update(Date last_update) {
		Last_update = last_update;
	}

	@Override
	public String toString() {
		return "Customer [customerid=" + customerid + ", storeid=" + storeid
				+ ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", addressid=" + addressid + ", active="
				+ active + ", createdate=" + createdate + ", Last_update="
				+ Last_update + "]";
	}
}