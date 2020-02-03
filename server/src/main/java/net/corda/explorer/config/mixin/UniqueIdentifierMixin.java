package net.corda.explorer.config.mixin;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import net.corda.core.contracts.UniqueIdentifier;
import net.corda.core.identity.Party;

import java.io.IOException;

@JsonSerialize(using = UniqueIdentifierSerializer.class)
public abstract class UniqueIdentifierMixin {
}

class UniqueIdentifierSerializer extends JsonSerializer<UniqueIdentifier> {

    @Override
    public void serialize(UniqueIdentifier value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeObject(value.getId().toString());
    }
}
