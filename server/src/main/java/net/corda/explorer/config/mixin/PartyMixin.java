package net.corda.explorer.config.mixin;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import net.corda.core.identity.Party;

import java.io.IOException;

@JsonSerialize(using = PartySerializer.class)
public abstract class PartyMixin { }

class PartySerializer extends JsonSerializer<Party> {

    @Override
    public void serialize(Party value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeObject(value.toString());
    }
}
