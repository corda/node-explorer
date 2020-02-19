package net.corda.explorer.service;

import net.corda.explorer.model.common.Settings;

import java.io.IOException;

public interface SettingsService {

    void loadApplicationSettings();
    Settings getApplicationSettings();
    Void updateCorDappDirectory(String path) throws IOException;
}
