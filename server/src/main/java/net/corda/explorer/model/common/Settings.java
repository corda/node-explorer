package net.corda.explorer.model.common;

public class Settings {

    private String cordappDirectory;
    private String dateFormat;
    private String dateTimeFormat;

    public String getCordappDirectory() {
        return cordappDirectory;
    }

    public void setCordappDirectory(String cordappDirectory) {
        this.cordappDirectory = cordappDirectory;
    }

    public String getDateFormat() {
        return dateFormat;
    }

    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
    }

    public String getDateTimeFormat() {
        return dateTimeFormat;
    }

    public void setDateTimeFormat(String dateTimeFormat) {
        this.dateTimeFormat = dateTimeFormat;
    }
}
