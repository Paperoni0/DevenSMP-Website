/*
Work in progress
 */

class StyleSheet {

    build(builder) {

        var waterSaturation = 80;
        var waterLightness = 50;
        builder.color("map.water", 222, waterSaturation, waterLightness);
        builder.color("map.grass", 87, 36, 48);


        builder.style("#water").color("map.water").useBiomeWaterColor();
        builder.style("#grass").color("map.grass").useBiomeGrassColor();//.adjustLightness(1.15);
    }    
}



