var wms_layers = [];

var format_Gitter_0 = new ol.format.GeoJSON();
var features_Gitter_0 = format_Gitter_0.readFeatures(json_Gitter_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gitter_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gitter_0.addFeatures(features_Gitter_0);
var lyr_Gitter_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gitter_0, 
                style: style_Gitter_0,
                interactive: true,
                title: '<img src="styles/legend/Gitter_0.png" /> Gitter'
            });
var format_Atlas_Gitter_1 = new ol.format.GeoJSON();
var features_Atlas_Gitter_1 = format_Atlas_Gitter_1.readFeatures(json_Atlas_Gitter_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atlas_Gitter_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atlas_Gitter_1.addFeatures(features_Atlas_Gitter_1);
var lyr_Atlas_Gitter_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Atlas_Gitter_1, 
                style: style_Atlas_Gitter_1,
                interactive: true,
                title: '<img src="styles/legend/Atlas_Gitter_1.png" /> Atlas_Gitter'
            });
var lyr_Landeskartenfarbig_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Landeskarten (farbig)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskartenfarbig_2, 0]);
var format_Perimeter_3 = new ol.format.GeoJSON();
var features_Perimeter_3 = format_Perimeter_3.readFeatures(json_Perimeter_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimeter_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimeter_3.addFeatures(features_Perimeter_3);
var lyr_Perimeter_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perimeter_3, 
                style: style_Perimeter_3,
                interactive: true,
                title: '<img src="styles/legend/Perimeter_3.png" /> Perimeter'
            });
var group_Blattschnitte = new ol.layer.Group({
                                layers: [lyr_Gitter_0,lyr_Atlas_Gitter_1,],
                                title: "Blattschnitte"});

lyr_Gitter_0.setVisible(true);lyr_Atlas_Gitter_1.setVisible(true);lyr_Landeskartenfarbig_2.setVisible(true);lyr_Perimeter_3.setVisible(true);
var layersList = [group_Blattschnitte,lyr_Landeskartenfarbig_2,lyr_Perimeter_3];
lyr_Gitter_0.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_Atlas_Gitter_1.set('fieldAliases', {'id': 'id', });
lyr_Perimeter_3.set('fieldAliases', {'Layer': 'Layer', });
lyr_Gitter_0.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_Atlas_Gitter_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Perimeter_3.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Gitter_0.set('fieldLabels', {});
lyr_Atlas_Gitter_1.set('fieldLabels', {});
lyr_Perimeter_3.set('fieldLabels', {'Layer': 'no label', });
lyr_Perimeter_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});