var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $http.get('/data').success(function(data){
        
        var dataArray = formatDataForView(data);
        
        var table = google.visualization.arrayToDataTable(dataArray, false);
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        
        var options = {
            title: 'Number of Population in US',
            subtitle: 'Age 18-21',
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Population',
                minValue: 0
            },
            vAxis: {
                title: 'Age',
            }
            
        };
        chart.draw(table, options);
        
    });
}]);

function formatDataForView(data) {
    
    var dataArray = [], keysArray = [];
    
    keysArray.push('Population');
    keysArray.push('Number of Population');
    dataArray.push(keysArray);
    
    //Get the keys
    for(var prop in data[0]) {
        keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //Get the values
    data.forEach(function(value) {
        var dataEntry = [];
        for(var prop in value) {
            dataEntry.push(value[prop]);
        }
        dataArray.push(dataEntry);
    });
    
    return dataArray;
}