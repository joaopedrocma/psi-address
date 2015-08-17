/**
 *
 */
package br.com.psi.address.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackages = { "br.com.psi.address.web" })
@EnableWebMvc
public class WebMvcConfig extends WebMvcConfigurerAdapter {


	@Bean
	public ViewResolver resolver() {
		InternalResourceViewResolver url = new InternalResourceViewResolver();
		url.setPrefix("/resources/partials/");
		url.setSuffix(".html");
		return url;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}

}