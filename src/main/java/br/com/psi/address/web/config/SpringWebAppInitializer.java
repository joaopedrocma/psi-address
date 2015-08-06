/**
 * 
 */
package br.com.psi.address.web.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class SpringWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer
{

	@Override
	protected Class<?>[] getRootConfigClasses()
	{
		return null;
	}

	@Override
	protected Class<?>[] getServletConfigClasses()
	{
		return new Class<?>[] { WebMvcConfig.class };
	}

	@Override
	protected String[] getServletMappings()
	{
		return new String[] { "/" };
	}

//	@Override
//    protected Filter[] getServletFilters() {
//       return new Filter[]{ 
//    		   new DelegatingFilterProxy("springSecurityFilterChain"),
//    		   new OpenEntityManagerInViewFilter()};
//    } 


}