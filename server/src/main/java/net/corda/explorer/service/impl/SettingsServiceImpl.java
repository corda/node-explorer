package net.corda.explorer.service.impl;

import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class SettingsServiceImpl implements SettingsService {
    @Override
    public Settings getApplicationSettings() throws IOException {
        try (BufferedReader br= new BufferedReader(
                new FileReader("settings.conf"))){
            String st;
            while ((st = br.readLine()) != null)
                System.out.println(st);

            return null;

        }catch (FileNotFoundException e){
            return null;
        }
    }

    @Override
    public Void updateCorDappDirectory(String path) throws IOException {
        try(BufferedWriter bw = new BufferedWriter(new FileWriter("settings.conf"))){
            bw.write("cordapp_dir: " +path);
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
        return null;
    }
}
