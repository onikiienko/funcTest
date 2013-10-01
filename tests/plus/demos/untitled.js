/*
         * L.Control.Loading is a control that shows a loading indicator when tiles are
         * loading or when map-related AJAX requests are taking place.
         */
        L.Control.Loading = L.Control.extend({

            initialize: function() {
                this._dataLoaders = {};
            },

            onAdd: function(map) {
                this._addLayerListeners(map);
            },

            addLoader: function(id) {
                this._dataLoaders[id] = true;
                this.updateIndicator();
            },

            removeLoader: function(id) {
                delete this._dataLoaders[id];
                this.updateIndicator();
            },

            updateIndicator: function() {
                if (this.isLoading()) {
                    this._showIndicator();
                }
                else {
                    this._hideIndicator();
                }
            },

            isLoading: function() {
                return this._countLoaders() > 0;
            },

            _countLoaders: function() {
                var size = 0, key;
                for (key in this._dataLoaders) {
                    if (this._dataLoaders.hasOwnProperty(key)) size++;
                }
                return size;
            },

            _showIndicator: function() {
                //document.body.style.backgroundColor = "Red";\
                document.body.className = 'laoding';
            },

            _hideIndicator: function() {
                //document.body.style.backgroundColor = "Blue";
                document.body.className = 'loaded';
            },

            _handleLoading: function(e) {
                this.addLoader(this.getEventId(e));
            },

            _handleLoad: function(e) {
                this.removeLoader(this.getEventId(e));
            },

            getEventId: function(e) {
                if (e.id) {
                    return e.id;
                }
                else if (e.layer) {
                    return e.layer._leaflet_id;
                }
                return e.target._leaflet_id;
            },

            _addLayerListeners: function(map) {
                // Add listeners for begin and end of load to any layers already on the 
                // map
                map.eachLayer(function(layer) {
                    if (!layer.on) return;
                    layer.on({
                        loading: this._handleLoading,
                        load: this._handleLoad
                    }, this);
                }, this);
            }
        });

        L.Map.addInitHook(function () {
                this.loadingControl = new L.Control.Loading();
                this.addControl(this.loadingControl);
        });

        L.Control.loading = function() {
            return new L.Control.Loading();
        };
