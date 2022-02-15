// Creating map options
var mapOptions = {
    center: [22.4453, 89.3147],
    zoom: 9
}
 
// Creating a map object
var mapGCA = new L.map('mapGCA', mapOptions);

// Creating a Layer object
var tilelayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, < href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});
 
// Adding layer to the map
mapGCA.addLayer(tilelayer);

var viz = L.geoJson(dataGCA, {
    //style: Style, 
	onEachFeature: function(feature, dataLayer) {
        //var div = feature.properties.Division
        var dist = feature.properties.District
        var upz = feature.properties.Upazila
        var union = feature.properties.Union
        var T_P_Beneficiary = feature.properties.T_P_Beneficiary
        var T_S_Beneficiary = feature.properties.T_S_Beneficiary
 
        dataLayer.bindPopup(
            '<div class="table-responsive">'+
                '<table class="table">'+
                    '<tbody>' +
                        '<tr>'+
                            '<td>'+ "District" +'</td>'+
                            '<td>'+ dist +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Upazila" +'</td>'+
                            '<td>'+ upz +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Union" +'</td>'+
                            '<td>'+ union +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Primary Secondary Beneficiary:" +'</td>'+
                            '<td>'+ T_P_Beneficiary +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Total Secondary Beneficiary" +'</td>'+
                            '<td>'+ T_S_Beneficiary+'</td>'+
                        '</tr>'+
                    
                    '</tbody>'+
                '</table>'+
            '</div>'
        );
    }
}).addTo(mapGCA);