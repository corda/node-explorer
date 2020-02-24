package net.corda.explorer.config.mixin;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import net.corda.explorer.config.AppConfig;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@JsonSerialize(using = LocalDateSerializer.class)
public abstract class LocalDateMixin { }

@Component
class LocalDateSerializer extends JsonSerializer<LocalDate> {

    @Override
    public void serialize(LocalDate value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        String format = AppConfig.getAppSettings().getDateFormat();
        if(format == null || format.trim().length() == 0){
            format = "dd MMM yyyy";
        }
        gen.writeObject(LocalDate.parse(value.format(DateTimeFormatter.ofPattern(format))));
    }
}