package java;

// The fight controller should represent a fight between two trainers
// the server will maintain a list of fights that are occurring
public class PokemonFightController {
    private Trainer playerOne;
    private Trainer playerTwo;
    private boolean playerOneAction;
    private boolean playerTwoAction;
    private int playerOnePokemon; // slot id
    private int playerTwoPokemon; // slot id

    // Takes in both player's trainer info which includes their current team
    // sets the current pokemon to the one in the first slot
    public PokemonFightController(Trainer playerOne, Trainer playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.playerOnePokemon = 0;
        this.playerTwoPokemon = 0;
    }

    // Returns false if the given trainer has no available pokemon
    private boolean hasAvailablePokemon(Trainer player) {
        Pokemon[] team = player.getTeam();
        for (Pokemon curr : team) {
            if (curr != null) {
                if (curr.getStats()[0] > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    // Returns true if there is an alive pokemon in that slot number for that player
    private boolean pokemonAvailable(Trainer player, int slotNum) {
        return player.getTeam()[slotNum] != null && player.getTeam()[slotNum].getStats()[0] > 0;
    }

    // need to keep track of both players turns to see if both players have sent a move
    // in the case of bots will have a server run the battle for them (actually maybe this
    // won't have bots)

    // returns true if ends turn successfully otherwise returns false
    // maybe define an action class that stores which move is used or which item is use or which
    // pokemon has been switched and this will resolve those actions in whatever order i decide
    // switch -> item -> moves (based on speed)
    // TODO
    public boolean endTurn() {
        return false;
    }

    // Takes in a trainer and slot number and checks if there is an alive pokemon in that slot
    // can't switch current pokemon with current pokemon
    // returns true if successfully switches pokemon and returns false otherwise
    public boolean switchPokemon(Trainer player, int slotNum) {
        if (slotNum != 0 && pokemonAvailable(player, slotNum)) {
            Pokemon temp = player.getTeam()[0];
            player.getTeam()[0] = player.getTeam()[slotNum];
            player.getTeam()[slotNum] = temp;
            return true;
        }
        return false;
    }

    // Takes in a trainer and an itemId and attempts to use that item
    // Returns false if that item is failed to be used
    // TODO
    public boolean useItem(Trainer player, int itemId) {
        return false;
    }

    // Takes in a trainer and attempts to use the move with the current pokemon
    // Returns false if the move does not resolve (a move failing or missing will return true)
    // TODO
    public boolean useMove(Trainer player, int moveId) {
        return false;
    }
}
