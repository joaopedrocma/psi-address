package br.com.psi.address.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@ComponentScan(basePackages = { "br.com.psi.address" }, excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = { "br.com.psi.address.web.*" }))
@PropertySource(value = { "classpath:application.properties" })
@EnableScheduling
public class AppConfig {
}
