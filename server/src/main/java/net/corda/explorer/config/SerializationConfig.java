package net.corda.explorer.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import net.corda.client.jackson.JacksonSupport;
import net.corda.core.contracts.UniqueIdentifier;
import net.corda.core.identity.Party;
import net.corda.explorer.config.mixin.InstantMixin;
import net.corda.explorer.config.mixin.LocalDateTimeMixin;
import net.corda.explorer.config.mixin.PartyMixin;
import net.corda.explorer.config.mixin.UniqueIdentifierMixin;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import java.time.Instant;
import java.time.LocalDateTime;

@Configuration
public class SerializationConfig {

    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter(){
        ObjectMapper mapper =  JacksonSupport.createNonRpcMapper();
        mapper.addMixIn(Party.class, PartyMixin.class);
        mapper.addMixIn(UniqueIdentifier.class, UniqueIdentifierMixin.class);
        mapper.addMixIn(LocalDateTime.class, LocalDateTimeMixin.class);
        mapper.addMixIn(Instant.class, InstantMixin.class);
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setObjectMapper(mapper);
        return converter;
    }
}