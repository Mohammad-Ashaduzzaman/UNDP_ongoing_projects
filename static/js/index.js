// Creating map options
var mapOptions = {
    center: [22.5861, 89.5111],
    zoom:9.25
}
 
// Creating a map object
var mainmap = new L.map('mainmap', mapOptions);

// Creating a Layer object
var tilelayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, < href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
});
 
// Adding layer to the map
mainmap.addLayer(tilelayer);

var viz = L.geoJson(data, {
    //style: Style, 
	onEachFeature: function(feature, dataLayer) {
        //var div = feature.properties.Division
        var dist = feature.properties.District
        var upz = feature.properties.Upazila
        var union = feature.properties.Union
        var ward = feature.properties.Ward
        var proj = feature.properties.Projects
        var proj_n = feature.properties.Projects_N
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
                            '<td>'+ "Ward" +'</td>'+
                            '<td>'+ ward +'</td>'+
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
                            '<td>'+ "Number of Commettee Mobilized" +'</td>'+
                            '<td>'+ C_W_S_P +'</td>'+
                        '</tr>'+
                        '<tr>'+                    
                            '<td>'+ "Number of Govt. Sector Enagage" +'</td>'+
                            '<td>'+ LGI_s +'</td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td>'+ "Total Primary Beneficiary:" +'</td>'+
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
}).addTo(mainmap);


// 

      google.charts.load('current', {packages:["corechart", "bar"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Projects', 'Primary', 'Secondary'],
          ['GCA', 1000, 400],
          ['LoGIC', 1170, 460],
          ['EALG', 660, 1120],
          ['SIDA', 1030, 540]
        ]);
        var datapichart = google.visualization.arrayToDataTable([
            ['Project Name', '% in UNDP Budget'],
            ['GCA',     11],
            ['LoGIC',      2],
            ['EALG',  2],
            ['SIDA', 2],
            ['LIUPCP',    7]
          ]);
        var datacollumn = google.visualization.arrayToDataTable([
            ['Gender', 'Number in Lakhs', { role: 'style' } ],
            ['Female', 10, 'color: gray'],
            ['Male', 4, 'color: #76A7FA'],
        
        ]);  
        

        var options = {
          chart: {
            title: 'Projects Beneficiary',
            
          }
        };

        var optionspichart={
            title: 'Project Budget in %',
            pieHole: 0.4,
        };
        
        var optionscollumn = {
            title: 'Beneficiary of UNDP Projects',
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));

        var chartpi = new google.visualization.PieChart(document.getElementById('donutchart'));
        chartpi.draw(datapichart, optionspichart);

        var chartcollumn = new google.visualization.ColumnChart(document.getElementById('collumnchart'));
        chartcollumn.draw(datacollumn, optionscollumn);

      }

