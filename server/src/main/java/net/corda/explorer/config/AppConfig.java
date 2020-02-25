package net.corda.explorer.config;

import net.corda.explorer.model.common.Settings;

public class AppConfig {

    private static Settings settings;

    public static Settings getAppSettings(){
        return settings;
    }

    public static void setSettings(Settings s){
        settings = s;
    }
}
