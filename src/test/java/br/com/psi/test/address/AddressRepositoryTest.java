package br.com.psi.test.address;

import java.text.ParseException;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.psi.address.entities.Address;
import br.com.psi.address.entities.Customer;
import br.com.psi.address.services.AddressService;
import br.com.psi.address.services.CustomerService;
import br.com.psi.test.address.utils.AbstractAddressTest;

public class AddressRepositoryTest extends AbstractAddressTest {

	@Autowired
	private CustomerService customerService;

	@Autowired
	private AddressService addressService;

	@Test
	public void testCrud() throws ParseException {

		Address ad = new Address();
		ad.setAddress("Verissimo");
		ad.setAddress2("40");
		ad.setDistrict("ccc");
		ad.setPostalcode("123");
		ad.setCityId(1);
		ad.setPhone("123");
		addressService.create(ad);

		Customer cm = new Customer();
		cm.setFirstname("João Pedro");
		cm.setLastname("Castilho");
		cm.setEmail("Joaopedrocma@outlook.com");
		cm.setAddressid(1);
		Date date = new Date();
		cm.setCreatedate(date);
		customerService.create(cm);
	}
}
