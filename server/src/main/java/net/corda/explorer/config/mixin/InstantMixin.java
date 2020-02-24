package net.corda.explorer.config.mixin;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import net.corda.explorer.config.AppConfig;
import net.corda.explorer.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@JsonSerialize(using = InstantSerializer.class)
public abstract class InstantMixin { }

@Component
class InstantSerializer extends JsonSerializer<Instant> {

    @Override
    public void serialize(Instant value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        String format = AppConfig.getAppSettings().getDateTimeFormat();
        if(format == null || format.trim().length() == 0){
            format = "dd MMM yyyy hh:ss a";
        }
        gen.writeObject(LocalDateTime.ofInstant(value, ZoneId.systemDefault()).format(
                DateTimeFormatter.ofPattern(format)));
    }
}
