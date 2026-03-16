/**
 *
 * General block textures
 * ======================
 *
 *
 * This script assigns textures to vanilla blocks.
 *
 *
 */


class StyleSheet {

    build(builder) {
        builder.style("*:*").texture("*");
        builder.style("minecraft:grass_block").texture("minecraft:grass");

        builder.style("grass_block,#grass").grassTint();        
        builder.style("#leaves, #vine").foliageTint();
        builder.style("water").texture("water").waterTint();

        builder.style("azalea_leaves, cherry_leaves").withoutTint();
    }
}


