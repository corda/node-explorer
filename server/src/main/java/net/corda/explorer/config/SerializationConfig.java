package net.corda.explorer.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.corda.client.jackson.JacksonSupport;
import net.corda.explorer.rpc.NodeRPCClient;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@Configuration
public class SerializationConfig {

    @ConditionalOnBean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter(){
        ObjectMapper mapper =  JacksonSupport.createDefaultMapper(NodeRPCClient.getRpcProxy());
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setObjectMapper(mapper);
        return converter;
    }
}