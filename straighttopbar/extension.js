/* © Julien Pecqueur <jpec@julienpecqueur.net> */

const Main = imports.ui.main;

function init() {
}

function enable() {
    // Remove rounded corners
    Main.panel._leftCorner.actor.add_style_class_name('straight-panel-corner');
    Main.panel._rightCorner.actor.add_style_class_name('straight-panel-corner');
}

function disable() {
    // Restore rounded corners
    Main.panel._leftCorner.actor.remove_style_class_name('straight-panel-corner');
    Main.panel._rightCorner.actor.remove_style_class_name('straight-panel-corner');
}
