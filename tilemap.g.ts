// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010100010000000000000000000000000001000100010100010100010100010100010001000100000000000000000001000100010000000100010101000100000001000100010000000100010000000100010001000100010000000000010001000100010000000101010001010100000001000100010001000000000001000100010001000100000001000100000001000100010000000100010101000100000001000100010000000000000000000100010001000101000101000101000101000100010000000000000000000000000001000101010101010101010101010101010000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 . 
2 . 2 . . . . . . . . . 2 . 2 . 
2 . . . 2 . 2 2 2 . 2 . . . 2 . 
2 . 2 . . . 2 . 2 . . . 2 . 2 . 
2 . 2 . 2 . . . . . 2 . 2 . 2 . 
2 . . . 2 2 2 . 2 2 2 . . . 2 . 
2 . 2 . 2 . . . . . 2 . 2 . 2 . 
2 . 2 . . . 2 . 2 . . . 2 . 2 . 
2 . . . 2 . 2 2 2 . 2 . . . 2 . 
2 . 2 . . . . . . . . . 2 . 2 . 
2 . 2 2 . 2 2 . 2 2 . 2 2 . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
