import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class GUI {
    private RentalService service = new RentalService();
    private JTextArea area;

    public GUI() {
        JFrame frame = new JFrame("Vehicle Rental System");
        frame.setSize(600, 500);
        frame.setLayout(new BorderLayout());
        frame.getContentPane().setBackground(new Color(18, 18, 18));

        // Title
        JLabel title = new JLabel("🚗 Vehicle Rental System", JLabel.CENTER);
        title.setFont(new Font("Segoe UI", Font.BOLD, 22));
        title.setForeground(Color.WHITE);
        title.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        frame.add(title, BorderLayout.NORTH);

        // Button Panel
        JPanel panel = new JPanel();
        panel.setBackground(new Color(30, 30, 30));

        JButton add = createButton("Add");
        JButton rent = createButton("Rent");
        JButton ret = createButton("Return");
        JButton show = createButton("Show");

        panel.add(add);
        panel.add(rent);
        panel.add(ret);
        panel.add(show);

        frame.add(panel, BorderLayout.SOUTH);

        // Text Area
        area = new JTextArea();
        area.setBackground(new Color(25, 25, 25));
        area.setForeground(Color.WHITE);
        area.setFont(new Font("Consolas", Font.PLAIN, 14));
        area.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        frame.add(new JScrollPane(area), BorderLayout.CENTER);

        // Actions
        add.addActionListener(e -> {
            String id = JOptionPane.showInputDialog("Enter ID:");
            String name = JOptionPane.showInputDialog("Enter Name:");
            double rentVal = Double.parseDouble(JOptionPane.showInputDialog("Enter Rent:"));
            service.addVehicle(new Vehicle(id, name, rentVal));
        });

        rent.addActionListener(e -> {
            String id = JOptionPane.showInputDialog("Enter ID:");
            Vehicle v = service.findById(id);
            if (v != null) v.rent();
        });

        ret.addActionListener(e -> {
            String id = JOptionPane.showInputDialog("Enter ID:");
            Vehicle v = service.findById(id);
            if (v != null) v.returnVehicle();
        });

        show.addActionListener(e -> {
            area.setText("");
            for (Vehicle v : service.getVehicles()) {
                area.append(v.getId() + " - " + v.getName() +
                        " | ₹" + v.getRent() +
                        " | " + (v.isRented() ? "Rented" : "Available") + "\n");
            }
        });

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    // Styled Button
    private JButton createButton(String text) {
        JButton btn = new JButton(text);
        btn.setFocusPainted(false);
        btn.setBackground(new Color(70, 130, 180));
        btn.setForeground(Color.WHITE);
        btn.setFont(new Font("Segoe UI", Font.BOLD, 13));
        btn.setBorder(BorderFactory.createEmptyBorder(8, 15, 8, 15));

        btn.addMouseListener(new MouseAdapter() {
            public void mouseEntered(MouseEvent e) {
                btn.setBackground(new Color(100, 160, 210));
            }
            public void mouseExited(MouseEvent e) {
                btn.setBackground(new Color(70, 130, 180));
            }
        });

        return btn;
    }
}