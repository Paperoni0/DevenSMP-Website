/*
Work in progress
*/

class StyleSheet {

    build(builder) {

        builder.blockTag("#air").isFor("Empty");
        builder.blockTag("#water").isFor("Water**");
        builder.blockTag("#lava").isFor("Lava**");
        builder.blockTag("#tar").isFor("Tar**");

        builder.blockTag("#rock").isFor("Rock_*");
        builder.blockTag("#ice").isFor("Rock_Ice, Rock_Ice_*");

        builder.blockTag("#soil").isFor("Soil_*");

        builder.blockTag("#soil.mud").isFor("Soil_Mud, Soil_Mud_*");
        builder.blockTag("#soil.mud.dry").isFor("Soil_Mud_Dry, Soil_Mud_Dry_*");
        builder.blockTag("#soil.hive").isFor("Soil_Hive, Soil_Hive_*");

        builder.blockTag("#soil.grass").isFor("Soil_Grass, Soil_Grass_*");
        builder.blockTag("#soil.grass.dry").isFor("Soil_Grass_Dry, Soil_Grass_Dry_*");        

        builder.blockTag("#soil.sand").isFor("Soil_Sand, Soil_Sand_*");
        builder.blockTag("#soil.sand.ashen").isFor("Soil_Sand_Ashen, Soil_Sand_Ashen_*");
        builder.blockTag("#soil.sand.red").isFor("Soil_Sand_Red, Soil_Sand_Red_*");
        builder.blockTag("#soil.sand.white").isFor("Soil_Sand_White, Soil_Sand_White_*");

        builder.blockTag("#rubble").isFor("Rubble_*");

        builder.blockTag("#ore").isFor("Ore_*");
        builder.blockTag("#ore.adamantite").isFor("Ore_Adamantite_*");
        builder.blockTag("#ore.cobalt").isFor("Ore_Cobalt_*");
        builder.blockTag("#ore.copper").isFor("Ore_Copper_*");
        builder.blockTag("#ore.gold").isFor("Ore_Gold_*");
        builder.blockTag("#ore.iron").isFor("Ore_Iron_*");
        builder.blockTag("#ore.silver").isFor("Ore_Silver_*");
        builder.blockTag("#ore.thorium").isFor("Ore_Thorium_*");

        builder.blockTag("#plant").isFor("Plant_*, #log, #branch, #roots");

        builder.blockTag("#grass").isFor("Plant_Grass, Plant_Grass_*, Plant_Fern, Plant_Fern_*, Plant_Seaweed_Grass, Plant_Seaweed_Grass_*, Plant_Reeds_Water");
        builder.blockTag("#bush").isFor("Plant_Bush, Plant_Bush_*");

        builder.blockTag("#log").isFor("Wood_*_Trunk, Wood_*_Trunk_*");
        builder.blockTag("#branch").isFor("Wood_*_Branch, Wood_*_Branch_*");
        builder.blockTag("#leaves").isFor("Plant_Leaves_*");
        builder.blockTag("#roots").isFor("Wood_*_Roots, Wood_*_Roots_*");
        builder.blockTag("#bush").isFor("Plant_Bush_*");

        builder.blockTag("#deco").isFor("Deco_*");
        builder.blockTag("#cloth").isFor("Cloth_*");
        builder.blockTag("#furniture").isFor("Furniture_*");

        builder.blockTag("#natural").isFor("#water,#lava,#rock,#soil,#ore,#plant,#log,#branch,#rubble");

        builder.blockTag("#natural").isFor("Deco_Spiderweb,Deco_Spiderweb_*,Deco_Spider_Cocoon");

        builder.blockTag("#artificial").isFor("!#natural");

        builder.blockTag("#shadowless").isFor("#grass,#bush");
        builder.blockTag("#shadeless").isFor("#grass,#bush");

    }   

}