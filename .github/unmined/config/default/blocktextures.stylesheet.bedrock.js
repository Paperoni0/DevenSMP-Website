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

        // biome tinting

        builder.style("#grassblock,#grass").grassTint();
        builder.style("#leaves, #vine").foliageTint();
        builder.style("water").texture("water").waterTint();
        builder.style("azalea_leaves, cherry_leaves").withoutTint();


        // textures for blocks with a different name in the vanilla resource pack blocks.json

        builder.style("grass_block").texture("grass_top").randomRotation().randomZFlip().randomXFlip();
        builder.style("sea_lantern").texture("sea_lantern");


        // rail orientation

        builder.style("rail[rail_direction:0]").texture("rail_normal");                    // NS
        builder.style("rail[rail_direction:1]").texture("rail_normal").rotate(90);         // EW
        builder.style("rail[rail_direction:2]").texture("rail_normal").rotate(90);         // asc => E
        builder.style("rail[rail_direction:3]").texture("rail_normal").rotate(90);         // asc => W
        builder.style("rail[rail_direction:4]").texture("rail_normal");                    // asc => N
        builder.style("rail[rail_direction:5]").texture("rail_normal");                    // asc => S
        builder.style("rail[rail_direction:6]").texture("rail_normal_turned");             // south + east
        builder.style("rail[rail_direction:7]").texture("rail_normal_turned").rotate(90);  // south + west
        builder.style("rail[rail_direction:8]").texture("rail_normal_turned").rotate(180); // north + west
        builder.style("rail[rail_direction:9]").texture("rail_normal_turned").rotate(270); // north + east               

        builder.style("(golden_rail,powered_rail,activator_rail,detector_rail)[rail_direction:1]").rotate(90); // EW
    }
}


