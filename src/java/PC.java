package java;// consider making this into a JSON file where when you go to the PC you
// have a map of IDs to JSON files with a list of pokemon that you can add to
// or remove from

public class PC {
    private int trainerId;
    private Pokemon[] box;

    public PC(int trainerId) {
        this.trainerId = trainerId;
    }

    // if the id given matches the trainerID it will return the pokemon,
    // otherwise returns null
    public Pokemon[] getPokemon(int id) {
        if (id == trainerId) {
            return box;
        } else {
            return null;
        }
    }
}
