package net.corda.explorer.model.response;

import java.util.List;

public class NetworkMap {

    private NodeData self;
    private List<NodeData> notaries;
    private List<NodeData> peers;

    public NodeData getSelf() {
        return self;
    }

    public void setSelf(NodeData self) {
        this.self = self;
    }

    public List<NodeData> getNotaries() {
        return notaries;
    }

    public void setNotaries(List<NodeData> notaries) {
        this.notaries = notaries;
    }

    public List<NodeData> getPeers() {
        return peers;
    }

    public void setPeers(List<NodeData> peers) {
        this.peers = peers;
    }

    public static class NodeData{
        private String publicKey;
        private String name;
        private String city;
        private String country;
        private float lat;
        private float lng;
        public String address;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getPublicKey() {
            return publicKey;
        }

        public void setPublicKey(String publicKey) {
            this.publicKey = publicKey;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }

        public float getLat() {
            return lat;
        }

        public void setLat(float lat) {
            this.lat = lat;
        }

        public float getLng() {
            return lng;
        }

        public void setLng(float lng) {
            this.lng = lng;
        }
    }
}
