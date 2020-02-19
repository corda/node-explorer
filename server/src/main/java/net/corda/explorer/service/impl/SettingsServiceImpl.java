package net.corda.explorer.service.impl;

import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class SettingsServiceImpl implements SettingsService {

    private Settings settings;

    @Override
    public void loadApplicationSettings() {
        try (BufferedReader br= new BufferedReader(
                new FileReader("settings.conf"))){
            String st;
            settings = new Settings();
            while ((st = br.readLine()) != null){
                if(st.startsWith("cordapp_dir:")){
                    settings.setCordappDirectory(st.substring(13));
                }
            }
        }catch (IOException e ){
            throw new GenericException(e.getMessage());
        }
    }

    @Override
    public Settings getApplicationSettings() {
        return settings;
    }

    @Override
    public Void updateCorDappDirectory(String path) throws IOException {
        try(BufferedWriter bw = new BufferedWriter(new FileWriter("settings.conf"))){
            bw.write("cordapp_dir: " +path);
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
        settings.setCordappDirectory(path);
        return null;
    }
}
