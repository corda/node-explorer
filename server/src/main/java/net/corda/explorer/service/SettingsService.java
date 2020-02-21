package net.corda.explorer.service;

import net.corda.explorer.model.common.Settings;

import java.io.IOException;

public interface SettingsService {
    void loadApplicationSettings();
    Settings getApplicationSettings();
    Void updateSettings(Settings settings, String type) throws IOException;
}
