//    startPhysics = function () {
//     world = new cp.Space();
//     world.gravity = cp.v(0, -500);
//     coliders = [];
// },
//     startPhysicsDebug = function (game) {
//         var debigDraw = cc.PhysicsDebugNode.create(world);
//         debigDraw.setVisible(true);
//         game.addChild(debigDraw);
//     },
//     addPhysicsBodies = function (game) {
//         var config = {
//             posX: 320,
//             posY: 20,
//             width: 640,
//             height: 20,
//             isDynamic: false,
//             sensor: false,
//             spriteImage: "null",
//             type: "ground",
//             id: "tag"
//         };
//
//         game.addBody(config);
//
//         var config = {
//             posX: 320,
//             posY: 480,
//             width: 64,
//             height: 64,
//             isDynamic: true,
//             sensor: false,
//             spriteImage: res.BoomBang_png,
//             type: "box",
//             id: "tag_1"
//         };
//
//         game.addBody(config);
//
//         var config = {
//             posX: 290,
//             posY: 64,
//             width: 64,
//             height: 64,
//             isDynamic: true,
//             sensor: false,
//             spriteImage: res.BoomBang_png,
//             type: "box",
//             id: "tag_2"
//         };
//
//         game.addBody(config);
//     },
//     addPhysicsShapes = function (body, config) {
//
//         var shape = new cp.BoxShape(body, config.width, config.height);
//         shape.setFriction(1);
//         shape.setElasticity(0);
//         shape.name = config.type;
//         shape.image = addPhysicsSprites(config);
//         shape.id = config.id;
//         shape.sensor = config.sensor;
//         world.addShape(shape);
//
//         coliders.push(shape);
//     },
//     addPhysicsSprites = function (config,game) {
//
//         var bodySprite = cc.Sprite.create(config.spriteImage);
//         Gamelayers.addChild(bodySprite, 0);
//         bodySprite.setPosition(config.posX, config.posY);
//         return bodySprite
//     },
//     Gamelayers.prototype.addBody = function (config) {
//
//         if (config.isDynamic) var body = new cp.Body(1, cp.momentForBox(1, config.width, config.height));
//         else var body = new cp.Body(Infinity, Infinity);
//         body.setPos(cp.v(config.posX, config.posY));
//
//         if (config.isDynamic) world.addBody(body);
//
//         addPhysicsShapes(body, config);
//     }
var realTimeLB = null;
var countBomLB = null;
var countSpeedLB=null;
var countKillBossLB=null;
score = function (game) {
    var size = cc.director.getWinSize();
    realTimeLB = new cc.LabelTTF(realTime.toString());
    realTimeLB.setFontSize(20);
    realTimeLB.setPosition(cc.p(size.width - 50, size.height - 30));
    realTimeLB.setColor(cc.color(0, 0, 0));
    game.addChild(realTimeLB);
},

    countItemSpeed = function (game) {
        var size = cc.director.getWinSize();
        countSpeedLB = new cc.LabelTTF(realTime.toString());
        countSpeedLB.setFontSize(20);
        countSpeedLB.setPosition(cc.p(size.width - 50, size.height - 90));
        countSpeedLB.setColor(cc.color(0, 0, 0));
        game.addChild(countSpeedLB);
    },
    countItemBoom = function (game) {
        var size = cc.director.getWinSize();
        countBomLB = new cc.LabelTTF("0");
        countBomLB.setFontSize(20);
        countBomLB.setPosition(cc.p(size.width - 50, size.height - 60));
        countBomLB.setColor(cc.color(0, 0, 0));
        game.addChild(countBomLB);
    },
countKillBoos = function (game) {
    var size = cc.director.getWinSize();
    countKillBossLB = new cc.LabelTTF("0");
    countKillBossLB.setFontSize(20);
    countKillBossLB.setPosition(cc.p(size.width - 50, size.height - 120));
    countKillBossLB.setColor(cc.color(0, 0, 0));
    game.addChild(countKillBossLB);
}