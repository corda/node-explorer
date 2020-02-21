package net.corda.explorer.service.impl;

import net.corda.explorer.config.AppConfig;
import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class SettingsServiceImpl implements SettingsService {

    @Override
    public void loadApplicationSettings() {
        try (BufferedReader br= new BufferedReader(
                new FileReader("settings.conf"))){
            String st;
            Settings settings = new Settings();
            while ((st = br.readLine()) != null){
                String[] configItem = st.split("=>");
                switch (configItem[0].trim()){
                    case "cordapp_dir":
                        settings.setCordappDirectory(configItem[1].trim());
                        break;
                    case "date_format":
                        settings.setDateFormat(configItem[1].trim());
                        break;
                    case "datetime_format":
                        settings.setDateTimeFormat(configItem[1].trim());
                        break;
                }
            }
            AppConfig.setSettings(settings);
        }catch (IOException e ){
            throw new GenericException(e.getMessage());
        }
    }

    @Override
    public Settings getApplicationSettings() {
        if(AppConfig.getAppSettings()==null){
            loadApplicationSettings();
        }
        return AppConfig.getAppSettings();
    }

    @Override
    public Void updateSettings(Settings settings, String type) throws IOException {
        try(BufferedWriter bw = new BufferedWriter(new FileWriter("settings.conf"))){
            switch (type) {
                case "cordappDir":
                    bw.append("cordapp_dir=> " + settings.getCordappDirectory());
                    AppConfig.getAppSettings().setCordappDirectory(settings.getCordappDirectory());
                    break;
                case "dateFormat":
                    bw.append("date_format=> " + settings.getDateFormat());
                    AppConfig.getAppSettings().setDateFormat(settings.getDateFormat());
                    break;
                case "dateTimeFormat":
                    bw.append("datetime_format=> " + settings.getDateTimeFormat());
                    AppConfig.getAppSettings().setDateTimeFormat(settings.getDateTimeFormat());
                    break;
            }
            bw.flush();
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
        return null;
    }
}
