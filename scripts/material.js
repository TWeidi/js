class Material {
    constructor(dataOnly = false) {
        this._name;
        this._epsR;

        this._dataOnly = dataOnly;


        this._init();
    }

    _init() {

        if (this._dataOnly) {
            _initDOM()  
        }
    }

    _initDOM() {
        let template = document.getElementById('MaterialTemplate');
    }
}