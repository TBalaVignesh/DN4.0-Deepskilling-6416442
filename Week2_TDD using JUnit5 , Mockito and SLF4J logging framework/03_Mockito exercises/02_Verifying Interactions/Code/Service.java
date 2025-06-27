package com.example;

public class Service {
    private final ExternalApi api;

    public Service(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        System.out.println("MyService: fetchData() called"); //  add this
        return api.getData();
    }

}
