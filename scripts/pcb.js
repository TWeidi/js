class PCB {
    constructor() {

        // identification
        this._id                            // DB-ID
        this._name                          // Platinenname
        this._key                           // Platinenschlüssel
        this._type                          // Platinentyp (TestPlatine, etc)
        this._revision                      // Revisionsnummer
        this._initiator                     // Auftraggeber

        // composition
        this._coating       = {};           // Oberfläche
        this._layers        = [];           // Substratschichten
        this._connectors    = [];           // Montierte Steckverbinder

        // history
        this._layouters     = [];
        this._creator       = {};           // reference to user who created this entry
        this._creation      = {};           // Timestamp of creation date
        
    }

    // Getters
    get numberOfLayers () {
        return this._layers.length;
    }

    // Add layer
    addLayer() {

    }

    // remove layer
    removeLayer() {

    }   
}


