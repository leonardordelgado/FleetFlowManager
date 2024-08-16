"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routers {
    router(App) {
        App.use(this.bp.json());
        App.use(this.bp.urlencoded({ extended: false }));
    }
}
exports.default = new Routers;
