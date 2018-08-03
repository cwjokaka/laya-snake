/*
* name;
*/
var Archer = (function (superClass) {
    function Archer(opts) {
        opts.color = 'red';
        superClass.call(this, opts);
    }

    Laya.class(Archer, 'archer', superClass);

    return Archer;
}(Hero));