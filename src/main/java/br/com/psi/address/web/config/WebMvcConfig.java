package br.com.psi.address.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackages = { "br.com.psi.address.web" })
@EnableWebMvc
public class WebMvcConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		super.addViewControllers(registry);
		// registry.addViewController("login/form").setViewName("login");
		registry.addViewController("home").setViewName("home");
		// registry.addViewController("map").setViewName("map/map");
		// registry.addViewController("user").setViewName("user/user");
		// registry.addViewController("admin").setViewName("admin");
	}

	@Bean
	public ViewResolver resolver() {
		InternalResourceViewResolver url = new InternalResourceViewResolver();
		url.setPrefix("/WEB-INF/jsp/");
		url.setSuffix(".jsp");
		return url;
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations(
				"/resources/");
	}

	@Override
	public void configureDefaultServletHandling(
			DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

	// @Bean
	// public SimpleMappingExceptionResolver simpleMappingExceptionResolver() {
	// SimpleMappingExceptionResolver b = new SimpleMappingExceptionResolver();
	// Properties mappings = new Properties();
	// mappings.put("org.springframework.dao.DataAccessException", "error");
	// b.setExceptionMappings(mappings);
	// return b;
	// }
}