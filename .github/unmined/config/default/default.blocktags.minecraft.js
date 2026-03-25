/**
 *
 * General block tags
 * ==================
 *
 *
 * This script assigns tags to vanilla blocks.
 *
 * No detailed documentation here as things are going to change soon.
 *
 *
 *
 * Notes
 * =====
 *
 *
 * This is a JavaScript file interpreted by Jint 3.x.
 * See https://github.com/sebastienros/jint for supported language features.
 *
 *
 *
 *
 */

class StyleSheet {

    build(builder) {


        if (builder.isJava) {
            builder.blockTag("#waterlogged").isFor("[waterlogged:true]")
        }


        this.addAir(builder);

        this.addTerrain(builder);
        this.addFormations(builder);
        this.addWeather(builder);
        this.addFlora(builder);
        this.addFauna(builder);

        this.addSculk(builder);

        this.addProducts(builder);

        this.addCrafting(builder);
        this.addGlasses(builder);
        this.addLights(builder);
        this.addCircuit(builder);
        this.addOtherArtificial(builder);
        this.addUnsortedArtificial(builder);

        this.addColors(builder);
        this.addTechnical(builder);
    }


    addAir(builder) {
        builder.blockTag("#air").isFor("*:air, *:*_air");
    }

    addTerrain(builder) {

        // STONE

        builder.blockTag("#ground, #andesite").isFor("andesite").natural().blocking();
        builder.blockTag("#ground, #basalt").isFor("basalt").natural().blocking();
        builder.blockTag("#ground, #blackstone").isFor("blackstone").natural().blocking();
        builder.blockTag("#ground, #dark_prismarine").isFor("dark_prismarine").natural().blocking();
        builder.blockTag("#ground, #deepslate").isFor("deepslate, infested_deepslate, grimstone").natural().blocking();
        builder.blockTag("#ground, #diorite").isFor("diorite").natural().blocking();
        builder.blockTag("#ground, #end_stone").isFor("end_stone").natural().blocking();
        builder.blockTag("#ground, #granite").isFor("granite").natural().blocking();
        builder.blockTag("#ground, #prismarine").isFor("prismarine").natural().blocking();
        builder.blockTag("#ground, #red_sandstone").isFor("red_sandstone").natural().blocking();
        builder.blockTag("#ground, #sandstone").isFor("sandstone").natural().blocking();
        builder.blockTag("#ground, #stone").isFor("stone, cobblestone, infested_stone").natural().blocking();
        builder.blockTag("#ground, #tuff").isFor("tuff").natural().blocking();

        builder.blockTag("#ground, #bedrock").isFor("bedrock").natural().blocking();
        builder.blockTag("#ground, #obsidian").isFor("obsidian, crying_obsidian").natural().blocking();
        builder.blockTag("#ground, #calcite").isFor("calcite").natural().blocking();

        builder.blockTag("#ground, #netherrack").isFor("netherrack").natural().blocking();
        builder.blockTag("#ground, #nylium").isFor("crimson_nylium, warped_nylium").natural().blocking();


        builder.blockTag("#rock").isFor(
            "#ground ("
            + "  #andesite, #basalt, #blackstone, #dark_prismarine, #deepslate, #diorite"
            + ", #end_stone, #granite, #prismarine, #red_sandstone, #sandstone, #stone, #tuff"
            + ", #bedrock, #obsidian, #calcite"
            + ", #netherrack, #nylium"
            + ")");

        builder.blockTag("#darkrock").isFor("#ground (#blackstone, #basalt, #bedrock, #deepslate, #obsidian)");

        // MOSS

        builder.blockTag("#ground, #moss").isFor("moss_block").natural().blocking();
        builder.blockTag("#ground, #moss").isFor("moss_carpet").natural().nonblocking();
        builder.blockTag("#ground, #moss, #moss.pale").isFor("pale_moss_block").natural().blocking();
        builder.blockTag("#ground, #moss, #moss.pale").isFor("pale_moss_carpet, pale_hanging_moss").natural().nonblocking();

        // SOIL

        builder.blockTag("#dirt").isFor("dirt, rooted_dirt, coarse_dirt").natural().blocking();
        builder.blockTag("#podzol").isFor("podzol").natural().blocking();
        builder.blockTag("#path").isFor("grass_path, dirt_path").natural().blocking();
        builder.blockTag("#mycelium").isFor("mycelium").natural().blocking();

        builder.isBedrock
            ? builder.blockTag("#grassblock").isFor("grass,grass_block").natural().blocking()
            : builder.blockTag("#grassblock").isFor("grass_block").natural().blocking();

        builder.blockTag("#soil").isFor("#dirt, #podzol, #path, #mycelium, #grassblock");
        builder.blockTag("#ground").isFor("#soil");

        // ORE

        builder.blockTag("#coal_ore").isFor("coal_ore, deepslate_coal_ore").natural().blocking();
        builder.blockTag("#copper_ore").isFor("copper_ore, deepslate_copper_ore").natural().blocking();
        builder.blockTag("#diamond_ore").isFor("diamond_ore, deepslate_diamond_ore").natural().blocking();
        builder.blockTag("#emerald_ore").isFor("emerald_ore, deepslate_emerald_ore").natural().blocking();
        builder.blockTag("#gold_ore").isFor("gold_ore, deepslate_gold_ore").natural().blocking();
        builder.blockTag("#iron_ore").isFor("iron_ore, deepslate_iron_ore").natural().blocking();
        builder.blockTag("#lapis_ore").isFor("lapis_ore, deepslate_lapis_ore").natural().blocking();
        builder.blockTag("#redstone_ore").isFor("redstone_ore, deepslate_redstone_ore").natural().blocking();
        builder.blockTag("#nether_gold_ore").isFor("nether_gold_ore").natural().blocking();
        builder.blockTag("#nether_quartz_ore").isFor("nether_quartz_ore").natural().blocking();
        
        builder.blockTag("#ore").isFor("*_ore, ancient_debris").natural().blocking();
        builder.blockTag("#ground").isFor("#ore");

        // SAND

        builder.blockTag("#sand").isFor("sand, suspicious_sand").natural().blocking();
        builder.blockTag("#red_sand").isFor("red_sand, red_sandstone, sand[sand_type:red]").natural().blocking();

        builder.blockTag("#ground").isFor("#sand, #red_sand");

        // OTHER

        builder.blockTag("#soul_sand").isFor("soul_sand").natural().blocking();
        builder.blockTag("#soul_soil").isFor("soul_soil").natural().blocking();

        builder.blockTag("#gravel").isFor("gravel, suspicious_gravel").natural().blocking();
        builder.blockTag("#mud").isFor("mud").natural().blocking();
        builder.blockTag("#clay").isFor("clay").natural().blocking();
        builder.blockTag("#magma").isFor("magma, magma_block").natural().blocking();
        builder.blockTag("#terracotta").isFor("terracotta, *_terracotta !*_glazed_terracotta, hardened_clay, stained_hardened_clay").natural().blocking();

        builder.blockTag("#ground").isFor("#soul_sand, #soul_soil, #gravel, #mud, #clay, #magma, #terracotta");
    }

    addFormations(builder) {
        builder.blockTag("#dripstone,#ground").isFor("dripstone_block, pointed_dripstone").natural().nonblocking();

        builder.blockTag("#amethyst").isFor("*_amethyst_bud, amethyst_cluster").natural().nonblocking();
        builder.blockTag("#amethyst, #ground").isFor("amethyst_block, budding_amethyst").natural().blocking();
        builder.blockTag("#crystal").isFor("#amethyst");
    }

    addWeather(builder) {

        builder.blockTag("#water").isFor([
            "**water",
            "*:bubble_column"
        ]).natural().water();

        builder.blockTag("#water.poison").isFor("*:poison").natural().fluid();
        builder.blockTag("#lava").isFor("**lava").natural().fluid();
        builder.blockTag("#ice").isFor("**ice").natural().blocking();
        builder.blockTag("#snow").isFor("**snow, **snow_layer").nonblocking().natural();
        builder.blockTag("#snow").isFor("**snow_block").natural().blocking();
        builder.blockTag("#fire").isFor("**fire").natural().nonblocking();
    }

    addFlora(builder) {

        // blocking
        builder.blockTag("#flora").natural().blocking().isForTags([
            builder.blockTag("#leaves").isFor("**leaves,**leaves?,**leaves_?,*:*Leaves,*:*Leaves?,**foliage,*:leaves*"),
            builder.blockTag("#log").isFor("**log,**log?,**logs?"),
            builder.blockTag("#mushroom.brown").isFor("brown_mushroom_block"),
            builder.blockTag("#mushroom.red").isFor("red_mushroom_block"),
            builder.blockTag("#mushroom").isFor("#mushroom.brown, #mushroom.red"),
            builder.blockTag("#mushroom").isFor("shroomlight"),
            builder.blockTag("#bush").isFor("azalea,flowering_azalea,big_dripleaf"),
            builder.blockTag("#resin").isFor("resin_clump"),
        ]);


        builder.blockTag("#flora").natural().blocking().isFor("*:cactus, *:sugar_cane, reeds, *:chorus_plant, *:reed, *:bamboo");

        builder.blockTag("#chorus").isFor(["*:chorus_plant"]);

        // non-blocking
        builder.blockTag("#flora").natural().nonblocking().isForTags([
            builder.blockTag("#sapling").isFor("**sapling"),
            builder.blockTag("#stem").isFor("**stem"),
            builder.blockTag("#sprout").isFor("**sprout, **sprouts"),
            builder.blockTag("#flower").isFor([
                "**flower,**flowers,**flowers?,**flower_?,**flower?,*:plant_?,*:plant?,*:double_plant, **allium, **bluet, **orchid, **dandelion, **lavender, **lilac, lily_of_the_valley, **lily_pad, **hibiscus, **tulip, **lily, **daisy, **peony, **poppy, **rose, **violet, **waterlily",
                "spore_blossom, *_flowered, *:*flower, *flowers, *_eyeblossom, *_petals"]),

            builder.blockTag("#flower.red").isFor("*:red_* #flower, poppy, rose_bush"),
            builder.blockTag("#flower.yellow").isFor("*:yellow_* #flower, dandelion, sunflower, wildflowers, open_eyeblossom"),
            builder.blockTag("#flower.blue").isFor("*:blue_* #flower, cornflower"),
            builder.blockTag("#flower.purple").isFor("*:purple_* #flower, lilac, peony, allium"),
            builder.blockTag("#flower.white").isFor("*:white_* #flower, oxeye_daisy, chorus_flower, closed_eyeblossom"),
            builder.blockTag("#flower.pink").isFor("pink_petals,cactus_flower"),
            builder.blockTag("#flower.cyan").isFor("pitcher_plant"),

            builder.blockTag("#lilypad").isFor("lily_pad,waterlily"),


            builder.blockTag("#mushroom").isFor("*:*_fungus, **mushroom, **mushroom?"),
            builder.blockTag("#grass").isFor("**roots, **wart, *:barley, **bush, deadbush, leaf_litter"),

            builder.blockTag("#lichen").isFor("**lichen"),

            builder.isBedrock
                ? builder.blockTag("#grass,-#flower").isFor("tallgrass, double_plant")
                : builder.blockTag("#grass").isFor("**grass,tallgrass,double_tallgrass"),

            builder.blockTag("#grass").isFor("short_grass, tall_grass, short_dry_grass, tall_dry_grass"),

            builder.blockTag("#grass").isFor("**Grass, small_dripleaf, **fern"),
            builder.blockTag("#seagrass").isFor("**seagrass"),
            builder.blockTag("#kelp").isFor("**kelp, **kelp_plant"),
            builder.blockTag("#vine").isFor("**vine, **vines, **vines_plant, *:ivy, *:treemoss, *:willow"),
            builder.blockTag("#vine").isFor("cave_vines_body_with_berries, cave_vines_head_with_berries"),

            builder.blockTag("#fruit").isFor("cocoa, melon, pumpkin"),
        ]);

        builder.blockTag("#waterlogged").isFor("#kelp, #seagrass");

        builder.blockTag("#shadowless").isFor("#grass,#seagrass,#kelp,#flower,#sapling,#stem,#sprout,#candle,#torch,#rail,#carpet");

        //if (!builder.s[SettingName.shadeGrass])
        builder.blockTag("#shadeless").isFor("#grass,#seagrass,#kelp,#flower,#sapling,#stem,#sprout,#candle");

        //if (!builder.s[SettingName.shadeArtificial])
        builder.blockTag("#shadeless").isFor("#torch,#rail,#carpet");



        // alias
        builder.blockTag("#vegetation").isFor("#flora");
    }

    addFauna(builder) {
        if (builder.isBedrock) {
            builder.blockTag("#corals").natural().nonblocking().isForTags([
                builder.blockTag("#coral").isFor("coral"),
                builder.blockTag("#coral_fan").isFor("coral_fan, coral_fan_dead"),
                builder.blockTag("#coral_wall_fan").isFor("coral_fan_hang, coral_fan_hang?"),
                builder.blockTag("#coral_block").isFor("coral_block"),
            ]);

            builder.blockTag("#coral.tube").isFor("coral_fan_hang[coral_hang_type_bit:0]");
            builder.blockTag("#coral.brain").isFor("coral_fan_hang[coral_hang_type_bit:1]");
            builder.blockTag("#coral.bubble").isFor("coral_fan_hang2[coral_hang_type_bit:0]");
            builder.blockTag("#coral.fire").isFor("coral_fan_hang2[coral_hang_type_bit:1]");
            builder.blockTag("#coral.horn").isFor("coral_fan_hang3[coral_hang_type_bit:0]");
            builder.blockTag("#coral.dead").isFor("coral_fan_hang3[coral_hang_type_bit:1]");

            builder.blockTag("#coral.tube").isFor("#corals [coral_color:blue]");
            builder.blockTag("#coral.brain").isFor("#corals [coral_color:pink]");
            builder.blockTag("#coral.bubble").isFor("#corals [coral_color:purple]");
            builder.blockTag("#coral.fire").isFor("#corals [coral_color:fire]");
            builder.blockTag("#coral.horn").isFor("#corals [coral_color:horn]");
            builder.blockTag("#coral.dead").isFor("#corals [dead_bit:1]");

        }

        builder.blockTag("#corals").natural().nonblocking().isForTags([
            builder.blockTag("#coral").isFor("**coral"),
            builder.blockTag("#coral_fan").isFor("**coral_fan"),
            builder.blockTag("#coral_wall_fan").isFor("**coral_wall_fan"),
            builder.blockTag("#coral_block").isFor("**coral_block"),
        ]);

        builder.blockTag("#coral.tube").isFor("#corals *:*tube*");
        builder.blockTag("#coral.brain").isFor("#corals *:*brain*");
        builder.blockTag("#coral.bubble").isFor("#corals *:*bubble*");
        builder.blockTag("#coral.fire").isFor("#corals *:*fire*");
        builder.blockTag("#coral.horn").isFor("#corals *:*horn*");
        builder.blockTag("#coral.dead").isFor("#corals *:*dead*");

        builder.blockTag("#frogspawn").natural().nonblocking().isFor("frogspawn");

        builder.blockTag("#creakingheart").natural().nonblocking().isFor("creaking_heart");
        builder.blockTag("#fauna").isFor("#creakingheart");


        builder.blockTag("#fauna").isFor("*:cobweb, *:web, *:*_nest, *:*_egg, sea_pickle, slime").natural().nonblocking();
        builder.blockTag("#fauna").isFor("#corals,#frogspawn");
    }

    addSculk(builder) {
        builder.blockTag("#sculk").natural().blocking().isFor("sculk, sculk_catalyst");
        builder.blockTag("#sculk").natural().nonblocking().isFor("sculk_shrieker, sculk_vein");
    }


    addProducts(builder) {

        // Product categories

        builder.blockTag().blocking().artificial().isForTags([
            builder.blockTag("#door").isFor("*:*_door"),
            builder.blockTag("#fence").isFor("*:*_fence"),
            builder.blockTag("#fencegate").isFor("fence_gate, *:*_fence_gate"),
            builder.blockTag("#planks").isFor("*:*_planks"),
            builder.blockTag("#slab").isFor("*:*_slab"),
            builder.blockTag("#stairs").isFor("*:*_stairs"),
            builder.blockTag("#pillar").isFor("*:*_pillar"),
            builder.blockTag("#bricks").isFor("*:*_bricks"),
            builder.blockTag("#tiles").isFor("*:*_tiles"),
            builder.blockTag("#wall").isFor("*:*_wall"),
            builder.blockTag("#wood").isFor("*:*_wood, *:*_hyphae")
        ]);

        builder.blockTag().nonblocking().artificial().isForTags([
            builder.blockTag("#button").isFor("**button"),
            builder.blockTag("#pressureplate").isFor("**pressure_plate"),
            builder.blockTag("#sign").isFor("**sign"),
            builder.blockTag("#trapdoor").isFor("**trapdoor"),
            builder.blockTag("#wallsign").isFor("**wall_sign"),
            builder.blockTag("#banner").isFor("**banner"),
            builder.blockTag("#wallbanner").isFor("**wall_banner")
        ]);

        // Wooden product materials

        let woodMaterials = [
            "acacia",
            "bamboo",
            "birch",
            "cherry",
            "crimson",
            "dark_oak",
            "jungle",
            "mangrove",
            "oak",
            "pale_oak",
            "spruce",
            "warped",
        ];

        if (builder.isBedrock) {
            for (const material of woodMaterials) {
                builder.blockTag(`#wooden, #${material}`).isFor(`[wood_type:${material}] !#natural`);
            }
        }

        for (const material of woodMaterials) {
            builder.blockTag(`#wooden, #${material}`).isFor(`*:${material}_* (!#natural, #log), *:stripped_${material}_*`);
        }


        // todo bedrock
        builder.blockTag("#wooden").isFor("**wooden_*");
        builder.blockTag("#wooden").isFor("*:double_wooden_*");
        builder.blockTag("#wooden").isFor("planks, trapdoor, fence");

        builder.blockTag("#wooden").isFor("*:*_wood !#natural, petrified_oak_slab");

        builder.blockTag().artificial().isFor("#wooden");

        // Metal product materials

        builder.blockTag("#metal,#iron").isFor("iron_* !#ore"),

            builder.blockTag("#metal,#copper").artificial().isForTags([
                builder.blockTag("#copper.regular").isFor("copper_* !#ore"),
                builder.blockTag("#copper.exposed").isFor("*:exposed_copper*, exposed_lightning_rod"),
                builder.blockTag("#copper.weathered").isFor("*:weathered_copper*, weathered_lightning_rod"),
                builder.blockTag("#copper.oxidized").isFor("*:oxidized_copper*, oxidized_lightning_rod"),

                builder.blockTag("#copper.waxed, #copper.regular").isFor("*:waxed_copper*, waxed_lightning_rod"),
                builder.blockTag("#copper.waxed, #copper.exposed").isFor("*:waxed_exposed_copper*, waxed_exposed_lightning_rod"),
                builder.blockTag("#copper.waxed, #copper.oxidized").isFor("*:waxed_oxidized_copper*, waxed_oxidized_lightning_rod"),
                builder.blockTag("#copper.waxed, #copper.weathered").isFor("*:waxed_weathered_copper*, waxed_weathered_lightning_rod"),

                builder.blockTag("#copper.cut, #copper.regular").isFor("*:cut_copper*"),
                builder.blockTag("#copper.cut, #copper.exposed").isFor("*:exposed_cut_copper*"),
                builder.blockTag("#copper.cut, #copper.weathered").isFor("*:weathered_cut_copper*"),
                builder.blockTag("#copper.cut, #copper.oxidized").isFor("*:oxidized_cut_copper*"),

                builder.blockTag("#copper.cut, #copper.waxed, #copper.regular").isFor("*:waxed_cut_copper*"),
                builder.blockTag("#copper.cut, #copper.waxed, #copper.weathered").isFor("*:waxed_weathered_cut_copper*"),
                builder.blockTag("#copper.cut, #copper.waxed, #copper.exposed").isFor("*:waxed_exposed_cut_copper*"),
                builder.blockTag("#copper.cut, #copper.waxed, #copper.oxidized").isFor("*:waxed_oxidized_cut_copper*"),

                builder.blockTag("#copper.chiseled, #copper.regular").isFor("*:chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.exposed").isFor("*:exposed_chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.weathered").isFor("*:weathered_chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.oxidized").isFor("*:oxidized_chiseled_copper*"),

                builder.blockTag("#copper.chiseled, #copper.waxed, #copper.regular").isFor("*:waxed_chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.waxed, #copper.weathered").isFor("*:waxed_weathered_chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.waxed, #copper.exposed").isFor("*:waxed_exposed_chiseled_copper*"),
                builder.blockTag("#copper.chiseled, #copper.waxed, #copper.oxidized").isFor("*:waxed_oxidized_chiseled_copper*"),
            ]);

        // Masonry product materials

        builder.blockTag("#masonry, #andesite").artificial().isFor("andesite_*, *_andesite**");
        builder.blockTag("#masonry, #basalt").artificial().isFor("basalt_*, *_basalt**");
        builder.blockTag("#masonry, #blackstone").artificial().isFor("blackstone_*, *_blackstone**");
        builder.blockTag("#masonry, #cobblestone").artificial().isFor("cobblestone_*, *_cobblestone**");
        builder.blockTag("#masonry, #deepslate").artificial().isFor("(deepslate_*, *_deepslate**) !#ore");
        builder.blockTag("#masonry, #deepslate").artificial().isFor("(grimstone_*, *_grimstone**) !#ore");
        builder.blockTag("#masonry, #diorite").artificial().isFor("diorite_*, *_diorite**");
        builder.blockTag("#masonry, #granite").artificial().isFor("granite_*, *_granite**");
        builder.blockTag("#masonry, #purpur").artificial().isFor("purpur_*, *_purpur**");
        builder.blockTag("#masonry, #quartz").artificial().isFor("quartz_*, *_quartz**");
        builder.blockTag("#masonry, #resin").artificial().isFor("resin_*, *_resin**");
        builder.blockTag("#masonry, #tuff").artificial().isFor("tuff_*, *_tuff**");

        builder.blockTag("#masonry, #dark_prismarine").artificial().isFor("dark_prismarine_*, *_dark_prismarine**");
        builder.blockTag("#masonry, #red_sandstone").artificial().isFor("red_sandstone_*, *_red_sandstone**");
        builder.blockTag("#masonry, #end_stone").artificial().isFor("end_stone_*, *_end_stone**");

        builder.blockTag("#masonry, #prismarine").artificial().isFor("(prismarine_*, *_prismarine**) !#dark_prismarine");
        builder.blockTag("#masonry, #sandstone").artificial().isFor("(sandstone_*, *_sandstone**) !#red_sandstone");
        builder.blockTag("#masonry, #stone").artificial().isFor("(stone_*, *_stone**) !#sandstone !#red_sandstone !#end_stone");

        builder.blockTag("#masonry, #mud").artificial().isFor("packed_mud, mud_*");
        builder.blockTag("#masonry, #deepslate").artificial().isFor("reinforced_deepslate");

        builder.blockTag("#masonry").artificial().isForTags([

            // prefixes
            builder.blockTag("#smooth").isFor("**smooth_*"),
            builder.blockTag("#infested").isFor("**infested_* !#natural"),
            builder.blockTag("#cracked").isFor("**cracked_*"),
            builder.blockTag("#chiseled").isFor("**chiseled_*"),
            builder.blockTag("#polished").isFor("**polished_*"),
            builder.blockTag("#cobbled").isFor("**cobbled_*"),

            //TODO 1.19 mud_brick_*
            builder.blockTag("#mossy").isFor("**mossy_* !#natural"),

            builder.blockTag("#brick").isFor("*:bricks, *:brick_*"),

            // postfixes
            builder.blockTag("#tile").isFor("*:*_tile"),

            // materials
            builder.blockTag("#rednetherbrick").isFor("**red_nether_brick*"),
            builder.blockTag("#netherbrick").isFor("**nether_brick* !**red_nether_brick*")
        ]);

    }





    addGlasses(builder) {
        builder.blockTag("#glasses").artificial().blocking().isForTags([
            builder.blockTag("#glass").isFor("**glass, *:tinted_glass"),
            builder.blockTag("#stained_glass").isFor("**stained_glass"),
            builder.blockTag("#glass_pane").isFor("**glass_pane"),
            builder.blockTag("#stained_glass_pane").isFor("**stained_glass_pane")
        ]);
    }

    addLights(builder) {
        builder.blockTag("#torch").isFor("**torch");
        builder.blockTag("#light").isFor("#torch").artificial().nonblocking();
        builder.blockTag("#light").isFor("**lamp, **lantern, seaLantern, lit_pumpkin, copper_bulb").artificial().blocking();
        builder.blockTag("#light").isFor("**glowstone").natural().blocking();

        builder.blockTag("#froglight").isFor("*_froglight").natural().blocking(); // pearlescent_froglight, verdant_froglight, ochre_froglight
        builder.blockTag("#light").isFor("#froglight");
    }

    addCircuit(builder) {
        builder.blockTag("#circuit, #piston").isFor("**piston, piston_head, piston_extension").artificial().blocking();
        builder.blockTag("#circuit, #piston").isFor("pistonArmCollision, stickyPistonArmCollision, movingBlock").artificial()
            .blocking(); // Bedrock

        builder.blockTag("#circuit").isFor([
            "dispenser",
            "dropper",
            "hopper",
            "lightning_rod",
            "observer",
            "redstone_lamp",
            "redstone_wire",
            "**repeater",
            "tripwire_hook",
            "trip_wire",
            "tripWire"
        ]).artificial().blocking();

        builder.blockTag("#circuit").isFor([
            "**comparator",
            "daylight_detector*",
            "lever",
            "lightning_rod",
            "redstone_torch",
            "redstone_wire",
            "**repeater",
            "*sculk_sensor",
            "tripwire",
        ]).artificial().nonblocking();
    }

    addCrafting(builder) {
        builder.blockTag("#crafting").artificial().blocking().isFor("*:*_table, brewing_stand, **furnace, grindstone, loom, anvil, composter, smoker, stonecutter, soul_campfire, campfire");
        builder.blockTag("#crops").artificial().nonblocking().isFor("*crops, *_crop, *:farmland, **wheat, **potatoes, **beetroots, **beetroot, **carrots");
    }

    addUnsortedArtificial(builder) {
        builder.blockTag("#artificial").blocking().isFor([
            "note_block", // JE
            "noteblock", // BE
            "allow", // BE
            "deny", // BE
            "frame",
            "barrel",
            "beacon",
            "bed",
            "beehive",
            "bell",
            "bookshelf",
            "carved_pumpkin",
            "cauldron, *_cauldron",
            "chain,conduit",
            "chest",
            "chipped_anvil",
            "composter",
            "crafter",
            "damaged_anvil",
            "dried_ghast",
            "end_gateway",
            "end_portal",
            "end_portal_frame",
            "end_rod",
            "ender_chest",
            "flower_pot",
            "decorated_pot",
            "glowstone",
            "heavy_core",
            "iron_bars",
            "jigsaw",
            "jukebox",
            "ladder",
            "lectern",
            "lodestone",
            "nether_portal",
            "respawn_anchor",
            "scaffolding",
            "skeleton_skull",
            "*skeleton_wall_skull",
            "skull",
            "spawner",
            "mob_spawner", // BE
            "sponge",
            "target",
            "tnt",
            "trapped_chest",
            "trial_spawner",
            "vault",
            "wet_sponge",
            "wither_skeleton_skull",
        ]);
    }

    addOtherArtificial(builder) {


        builder.blockTag().artificial().blocking().isForTags([
            builder.blockTag("#candle").isFor("*:*_candle, candle"),
            builder.blockTag("#cake").isFor("*:cake"),
            builder.blockTag("#candle_cake").isFor("**candle_cake"),

            builder.blockTag("#concrete").isFor("**concrete"),
            builder.blockTag("#concrete_powder").isFor("**concrete_powder"),
            builder.blockTag("#wool").isFor("**wool"),
            builder.blockTag("#bed").isFor("*:*_bed"),
            builder.blockTag("#potted,-#flower").isFor("*:potted_*"),
            builder.blockTag("#head").isFor("*:*_head"),
            builder.blockTag("#shulker_box").isFor("*shulker_box"),
            builder.blockTag("#glazed_terracotta, -#terracotta").isFor("*:*_glazed_terracotta"),
        ]);

        builder.blockTag().artificial().nonblocking().isForTags([
            builder.blockTag("#rail").isFor("**rail"),
            builder.blockTag("#carpet").isFor("**carpet !#natural")
        ]);


        builder.blockTag().blocking().isFor("*:*_block");
        builder.blockTag("#artificial").isFor("*:*_block !#natural"); // do not use .artificial() here
    }

    addColors(builder) {
        builder.blockTag("#white").isFor("*:white_* #artificial, *:white_* #terracotta");
        builder.blockTag("#orange").isFor("*:orange_* #artificial, *:orange_* #terracotta");
        builder.blockTag("#magenta").isFor("*:magenta_* #artificial, *:magenta_* #terracotta");
        builder.blockTag("#light_blue").isFor("*:light_blue_* #artificial, *:light_blue_* #terracotta");
        builder.blockTag("#yellow").isFor("*:yellow_* #artificial, *:yellow_* #terracotta");
        builder.blockTag("#lime").isFor("*:lime_* #artificial, *:lime_* #terracotta");
        builder.blockTag("#pink").isFor("*:pink_* #artificial, *:pink_* #terracotta");
        builder.blockTag("#gray").isFor("*:gray_* #artificial, *:gray_* #terracotta");
        builder.blockTag("#light_gray,#silver").isFor("*:light_gray_* #artificial, *:light_gray_* #terracotta");
        builder.blockTag("#cyan").isFor("*:cyan_* #artificial, *:cyan_* #terracotta");
        builder.blockTag("#purple").isFor("*:purple_* #artificial, *:purple_* #terracotta");
        builder.blockTag("#blue").isFor("*:blue_* #artificial, *:blue_* #terracotta");
        builder.blockTag("#brown").isFor("*:brown_* #artificial, *:brown_* #terracotta");
        builder.blockTag("#green").isFor("*:green_* #artificial, *:green_* #terracotta");
        builder.blockTag("#red").isFor("*:red_* !*:red_sand* !*:red_nether* #artificial, *:red_* #terracotta");
        builder.blockTag("#black").isFor("*:black_* #artificial, *:black_* #terracotta");

        if (builder.isBedrock) {
            builder.blockTag("#white").isFor("[color:white]");
            builder.blockTag("#orange").isFor("[color:orange]");
            builder.blockTag("#magenta").isFor("[color:magenta]");
            builder.blockTag("#light_blue").isFor("[color:light_blue]");
            builder.blockTag("#yellow").isFor("[color:yellow]");
            builder.blockTag("#lime").isFor("[color:lime]");
            builder.blockTag("#pink").isFor("[color:pink]");
            builder.blockTag("#gray").isFor("[color:gray]");
            builder.blockTag("#light_gray,#silver").isFor("[color:silver]");
            builder.blockTag("#cyan").isFor("[color:cyan]");
            builder.blockTag("#purple").isFor("[color:purple]");
            builder.blockTag("#blue").isFor("[color:blue]");
            builder.blockTag("#brown").isFor("[color:brown]");
            builder.blockTag("#green").isFor("[color:green]");
            builder.blockTag("#red").isFor("[color:red]");
            builder.blockTag("#black").isFor("[color:black]");
        }

    }

    addTechnical(builder) {
        builder.blockTag("#technical").nonblocking().isFor("**command_block, **structure_block, *:structure_void, light");
        builder.blockTag("#technical").blocking().isFor("barrier, jigsaw");
        builder.blockTag("#barrier").isFor("barrier");
    }

}