package net.corda.explorer.config;

import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class AppConfig {

    private static Settings settings;

    public static Settings getAppSettings(){
        return settings;
    }

    public static void setSettings(Settings s){
        settings = s;
    }
}
