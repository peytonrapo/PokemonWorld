package java;

public class Pokemon {
    // static
    private int pokemonId; // the id for the pokemon (can be used to fetch name)
    private int nature;

    // can change
    private int[] moveListIds; // the current move set of the pokemon
    private int[] pp;
    private int lvl; // current level of the pokemon
    private String nickname;

    // stats (maybe make an array?)
    // hp, attack, defense, special attack, special defense, speed
    // then in combat: evasion & accuracy (these will be stored in combat for each pokemon)
    private int[] stats;

    // Creates a new instance of a pokemon with the given id & lvl
    // Will need to create a chart to determine starting stats & move set
    // nature randomly
    public Pokemon(int pokemonId, int lvl) {
        this.pokemonId = pokemonId;
        this.lvl = lvl;
        moveListIds = new int[4];
        stats = new int[6];
        pp = new int[4];
        nature = (int) (6 * Math.random()) + 1;
    }

    // levels up the pokemon
    // will need to look up how stats are determined in relation to nature & type
    // also needs to determine how to change the movelist
    public void levelUp() {
        if (lvl < 100) {
            lvl++;
            for (int i = 0; i < stats.length; i++) {
                stats[i]++;
            }
        }
    }

    // Returns a copy of the pokemon's move ids
    public int[] getMoveListIds() {
        int[] copy = new int[4];
        System.arraycopy(moveListIds, 0, copy, 0, 4);
        return copy;
    }

    // returns the stats of the pokemon
    public int[] getStats() {
        int[] copy = new int[6];
        System.arraycopy(stats, 0, copy, 0, 6);
        return copy;
    }
}
