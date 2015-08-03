'use strict';

angular.module('stockappApp')
  .controller('MainCtrl', function ($scope, getStock) {

    $scope.currentCodes = getStock.stockCode; /*current stock symbal from getStock service*/
    $scope.stockData = getStock.stockData;  /*current stock price from getStock service*/
    $scope.stockRange = getStock.stockRange;  /*current stock date range from getStock service*/
    
    /*Add new stock symbol*/
    $scope.pushCode = function(){
    	$scope.getStock([$scope.newCode]);
    	$scope.newCode = "";
    }
    
    /*Remove stock symbol*/
    $scope.removeCode = function(code){
      getStock.removeDode(code);
     // $scope.currentCodes.splice($scope.currentCodes.indexOf(code),1);
    }

    /*get stock data from getStock service*/
    $scope.getStock = function(codes){
    	getStock.getPrice(codes);
    }

    /*get default data*/
    $scope.getStock(["GOOG","FB"]);

  });
