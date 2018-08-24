var BootScene = require('./scene/boot');

module.exports = {
    title: 'snowclone',
    version: '0.1.0',
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [BootScene]
};
