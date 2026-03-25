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
        if (!builder.usingTextures)
            return;

        builder.style("#grassblock,#grass").grassTint();
        builder.style("#leaves, #vine").foliageTint();
        builder.style("water").texture("water").waterTint();
        builder.style("azalea_leaves, cherry_leaves").withoutTint();

        builder.style("grass_block, dirt, dirt_path, gravel, sand, red_sand, snow, snow_block, snow_layer").randomRotation().randomZFlip().randomXFlip();
        builder.style("stone").randomZFlip().randomXFlip();

        builder.style("*_bed").texture("");
    }

}