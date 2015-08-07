package br.com.psi.test.address.utils;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import br.com.psi.address.config.PersistenceConfig;

@Configuration
@Import({ PersistenceConfig.class })
@ComponentScan(basePackages = { "br.com.psi.test.address" })
public class AddressTestContext {

}
