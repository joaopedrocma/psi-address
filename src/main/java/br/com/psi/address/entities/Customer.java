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
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue
	private int customer_id;
	@Column
	private int store_id;
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column
	private String email;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private int address_id;
	@Column
	private boolean active;
	@Column
	private Date create_date;
	@Column
	private Date Last_update;

	public Customer() {
	}

	public Customer(int customer_id, int store_id, String first_name,
			String last_name, String email, int address_id, boolean active,
			Date create_date, Date last_update) {
		super();
		this.customer_id = customer_id;
		this.store_id = store_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.address_id = address_id;
		this.active = active;
		this.create_date = create_date;
		Last_update = last_update;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public int getStore_id() {
		return store_id;
	}

	public void setStore_id(int store_id) {
		this.store_id = store_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Date getCreate_date() {
		return create_date;
	}

	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}

	public Date getLast_update() {
		return Last_update;
	}

	public void setLast_update(Date last_update) {
		Last_update = last_update;
	}

	@Override
	public String toString() {
		return "Customer [customer_id=" + customer_id + ", store_id="
				+ store_id + ", first_name=" + first_name + ", last_name="
				+ last_name + ", email=" + email + ", address_id=" + address_id
				+ ", active=" + active + ", create_date=" + create_date
				+ ", Last_update=" + Last_update + "]";
	}
}