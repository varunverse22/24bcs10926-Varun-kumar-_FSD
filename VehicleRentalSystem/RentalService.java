import java.util.*;

class RentalService {
    private ArrayList<Vehicle> vehicles = new ArrayList<>();

    public void addVehicle(Vehicle v) {
        vehicles.add(v);
    }

    public ArrayList<Vehicle> getVehicles() {
        return vehicles;
    }

    public Vehicle findById(String id) {
        for (Vehicle v : vehicles) {
            if (v.getId().equals(id)) return v;
        }
        return null;
    }
}