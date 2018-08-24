module.exports = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function BootScene () {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    create: function () {
        console.log('Hello World!');
    }
});
