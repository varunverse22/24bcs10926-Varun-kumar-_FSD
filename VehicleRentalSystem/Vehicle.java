class Vehicle {
    private String id;
    private String name;
    private double rent;
    private boolean isRented;

    public Vehicle(String id, String name, double rent) {
        this.id = id;
        this.name = name;
        this.rent = rent;
        this.isRented = false;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public double getRent() { return rent; }
    public boolean isRented() { return isRented; }

    public void rent() { isRented = true; }
    public void returnVehicle() { isRented = false; }
}