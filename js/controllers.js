'use strict';

/* Controllers */

function CompaniesViewCtrl($scope, $http, $q) {
    $scope.name = "ChapterController";
    $scope.orderList = "name";

    $scope.getCompanieDetails = function(companieId) {
        $scope.product_list = $http.get("/backend/products"+companieId+".json", {cache: false});
        $scope.client_list = $http.get("/backend/clients"+companieId+".json", {cache: false});
        $q.all([
            $scope.product_list,
            $scope.client_list
        ]).then(function(results) {
            $scope.products = results[0].data.result.productos;
            $scope.clients = results[1].data.result.clients;
        });
    };

    $http.get("/backend/companies.json")
        .success(function (data) {
            $scope.companies = data.result.companies;
        })
        .error(function (data) {
            console.log("there was an error");
        });

    $scope.setSelectedCompanie = function(companie) {
        $scope.activeRow = companie.name;
        $scope.getCompanieDetails(companie.id);
    };

    $scope.closeDetail = function(event) {
        event.stopPropagation();
        $scope.activeRow = null;
    };
}

CompaniesViewCtrl.$inject = ['$scope', '$http', '$q'];


