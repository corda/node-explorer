package net.corda.explorer.controller;

import net.corda.explorer.exception.GenericException;
import net.corda.explorer.model.response.MessageResponseEntity;
import net.corda.explorer.model.common.Settings;
import net.corda.explorer.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class SettingsController {

    @Autowired
    private SettingsService settingsService;

    @GetMapping("settings")
    public MessageResponseEntity<Settings> getSettings(){
        try{
            return new MessageResponseEntity<>(settingsService.getApplicationSettings());
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }

    @PostMapping("settings/{type}")
    private MessageResponseEntity<Void> updateCorDappDirectory(@RequestBody Settings settings, @PathVariable String type){
        try{
            return new MessageResponseEntity<>(settingsService.updateSettings(settings, type));
        }catch (Exception e){
            throw new GenericException(e.getMessage());
        }
    }
}