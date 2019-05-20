var INIT = false;
var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var size = cc.winSize;
        var sprite = new cc.Sprite.create(res.BackGr_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite);
        // cc.audioEngine.playMusic(res.sound_main);
        // UIlayout
        var layout = new ccui.Layout();
        layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
        layout.sizeType = ccui.Widget.SIZE_PERCENT;
        layout.setSizePercent(cc.p(0.5, 0.5));
        layout.setPositionType(ccui.Widget.POSITION_PERCENT);
        layout.setPositionPercent(cc.p(0.25, 0.25));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color.GRAY);
        layout.setBackGroundImage(res.BackGRMap_png);
        this.addChild(layout);
        //
        var menuStart = new cc.MenuItemImage(res.Start_png, res.Start2_png, play);
        var menuImage = new cc.MenuItemImage(res.HightScore_png, res.HightScore2_png, hightscore);
        var menuExit = new cc.MenuItemImage(res.Exit_png, res.Exit2_png, exit);
        var menuOption = new cc.MenuItemImage(res.BoxOP_png, res.BoxOP2_png, option);
        menuStart.setPosition(cc.p(size.width - 150, (size.height / 4) + 350));
        menuImage.setPosition(cc.p(size.width - 150, (size.height / 4) + 250));
        menuOption.setPosition(cc.p(size.width - 150, (size.height / 4) + 150));
        menuExit.setPosition(cc.p(size.width - 150, (size.height / 4) + 50));

        var menu = new cc.Menu(menuExit, menuStart, menuImage, menuOption);
        menu.setPosition(cc.p(0, 0))
        // menu.alignItemsVerticallyWithPadding(50); // can doi giua menu
        this.addChild(menu);


        return true;
    },
    touchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch move");
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.log("Touch ended");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("Touch CANCEL");
                break;
        }
    }
});
var play = function () {
    var scene = new Gamescenes;
    cc.director.pushScene(scene);
};
var hightscore = function () {
// var scene= new Gamescenes2;
// cc.director.pushScene(scene);
}
var exit = function () {

}
var option = function () {
}
var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        if (INIT == false) {
            INIT = true;
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }

    }
});
