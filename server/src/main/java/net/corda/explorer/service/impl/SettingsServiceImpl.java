package net.corda.explorer.service.impl;

import net.corda.explorer.config.AppConfig;
import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.stereotype.Service;

import java.io.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.UnsupportedTemporalTypeException;

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
        switch (type) {
            case "cordappDir":
                AppConfig.getAppSettings().setCordappDirectory(settings.getCordappDirectory());
                break;
            case "dateFormat":
                try {
                    LocalDate.now().format(DateTimeFormatter.ofPattern(settings.getDateFormat()));
                }catch (UnsupportedTemporalTypeException | IllegalArgumentException e){
                   throw new GenericException("Unsupported Date Format");
                }
                AppConfig.getAppSettings().setDateFormat(settings.getDateFormat());
                break;
            case "dateTimeFormat":
                try {
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern(settings.getDateTimeFormat()));
                }catch (UnsupportedTemporalTypeException | IllegalArgumentException e){
                    throw new GenericException("Unsupported DateTime Format");
                }
                AppConfig.getAppSettings().setDateTimeFormat(settings.getDateTimeFormat());
                break;
        }

        try(BufferedWriter bw = new BufferedWriter(new FileWriter("settings.conf"))){
            bw.write("cordapp_dir=> " + settings.getCordappDirectory());
            bw.newLine();
            bw.write("date_format=> " + settings.getDateFormat());
            bw.newLine();
            bw.write("datetime_format=> " + settings.getDateTimeFormat());
            bw.newLine();
            bw.flush();
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
        return null;
    }
}
