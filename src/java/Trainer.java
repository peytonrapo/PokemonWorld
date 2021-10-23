package java;

public class Trainer {
    private int id;
    private String name;
    private Pokemon[] team;
    private int balance;
    private int[] items; // the slot is the id and the value is the number of that item

    public Trainer(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Pokemon[] getTeam() {
        return team;
    }

    public void addBalance(int amount) {
        balance += amount;
    }

    // returns false if there is not enough money in the balance
    public boolean removeBalance(int amount) {
        if (balance - amount >= 0) {
            balance -= amount;
            return true;
        } else {
            return false;
        }
    }

    public void addItem(int itemId) {
        items[itemId]++;
    }

    // returns false if they do not have the item
    // TODO decide if is use or is just remove. May just have it be the client's responsibility
    public boolean useItem(int itemId) {
        if (items[itemId] != 0) {
            items[itemId]--;
            return true;
        } else {
            return false;
        }
    }
}
