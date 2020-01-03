package net.corda.explorer.config.serializer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.corda.core.identity.CordaX500Name;

import java.security.PublicKey;

public abstract class PartyMixin {
    @JsonProperty("name")
    String name;

    @JsonIgnore
    PublicKey owningKey;
}
