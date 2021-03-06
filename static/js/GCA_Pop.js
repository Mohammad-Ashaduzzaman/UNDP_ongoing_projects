// Creating map options
var mapOptions = {
    center: [22.3437, 89.2818],
    zoom: 10
}
 
// Creating a map object
var GCA_Project_Map = new L.map('GCA_Project_Map', mapOptions);

// Creating a Layer object
var tilelayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, < href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});
 
// Adding layer to the map
GCA_Project_Map.addLayer(tilelayer);

var viz = L.geoJson(dataGCA, {
    //style: Style, 
	onEachFeature: function(feature, dataLayer) {
        //var div = feature.properties.Division
        var dist = feature.properties.District
        var upz = feature.properties.Upazila
        var union = feature.properties.Union
        var proj = feature.properties.Projects
        var proj_n = feature.properties.Projects_N
        var T_Budget = feature.properties.T_Budget
        var C_W_S_P = feature.properties.C_W_S_P
        var LGI_s = feature.properties.LGI_s
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
                            '<td>'+ "Running Projects Name" +'</td>'+
                            '<td>'+ proj +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Running Projects Number" +'</td>'+
                            '<td>'+ proj_n +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Total Community Workers Supporting the Project" +'</td>'+
                            '<td>'+ C_W_S_P +'</td>'+
                        '</tr>'+
                        '<tr>'+                    
                            '<td>'+ "Total LGI's Project is Actively" +'</td>'+
                            '<td>'+ LGI_s +'</td>'+
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
}).addTo(GCA_Project_Map);