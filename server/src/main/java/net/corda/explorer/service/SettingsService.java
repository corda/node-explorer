package net.corda.explorer.service;

import net.corda.explorer.model.common.Settings;

import java.io.IOException;

public interface SettingsService {

    Settings getApplicationSettings() throws IOException;
    Void updateCorDappDirectory(String path) throws IOException;
}
