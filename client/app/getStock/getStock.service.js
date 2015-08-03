'use strict';

angular.module('stockappApp')
  .factory('getStock', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	var obj = {
  		stockRange: [],
  		stockData: [],
  		stockCode:[],
  	};
  	
    var apiKey = "vnpB8vzRsFgWqiM3atQe"; /*API key from Quandl website*/
  	
    obj.getPrice = function(codes) {
      /*url for geting stock price data from Quandl*/
  		var url = "https://www.quandl.com/api/v3/datasets/WIKI/";
  		var url2 = ".json?api_key="+apiKey+"&order=asc&exclude_headers=true&start_date=2015-01-01&end_date=2015-08-01&column_index=4&collapse=weakly&transformation=rdiff";
  		
      /*get stock data for each stock symbol*/
      codes.forEach(function(code){
  			return $http.get(url+code+url2).success(function(data){
          
          if(!data.quandl_error){

            if(obj.stockRange.length == 0){
              /*get date range*/
              data.dataset.data.forEach(function(v){
                obj.stockRange.push(v[0])
              })
            }
            /*get stock price*/
            var price = data.dataset.data.map(function(v){
              return v[1];
            })
              obj.stockCode.push(code);
              obj.stockData.push(price);
              
            }

            console.log(obj.stockCode)
  			})
  		})	
  	}

    /*Remove stock from dataset*/
    obj.removeDode = function(code){
      obj.stockData.splice(obj.stockCode.indexOf(code), 1);
      obj.stockCode.splice(obj.stockCode.indexOf(code), 1);
    }

  	return obj;

  });
