package com.example;

public class Service {
    private final ExternalApi api;

    public Service(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        System.out.println("Data fetced from services");
        return api.getData();
    }
}
