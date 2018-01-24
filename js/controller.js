angular.module("RouteControllers", [])
    .controller("DessertController", function($scope) {
       
       $scope.desserts = [
            {name: "Trifle", description: "Grandma's fave"},
            {name: "Cheesecake", description: "Hopefully lemon"},
            {name: "Red Velvet Cake", description: "Cake with vanilla frosting"},
            {name: "Sticky Toffee Pudding", description: "Katie's favourite"}
        ]
        
        
    })
    .controller("AddController", function($scope, $location) {
        $scope.dessert = {name: "", description: ""};
        $scope.title = "Add new dessert";
        $scope.isDisabled = false;
        
        $scope.save = function() {
            $scope.desserts.push($scope.dessert);
            $location.path(".");
        }
        $scope.cancel = function() {
            $location.path(".");
        }
    })
    .controller("EditController", function($scope, $location, $routeParams) {
        $scope.isDisabled = false;
        $scope.dessert = $scope.desserts[$routeParams.id];
        $scope.title = "Edit dessert";
        
        $scope.save = function() {
            $location.path(".");
        }
        $scope.cancel = function() {
            $location.path(".");
        }
    })
    .controller("DeleteController", function($scope, $location, $routeParams) {
        $scope.isDisabled = true;
        $scope.dessert = $scope.desserts[$routeParams.id];
        $scope.title = "Delete a dessert";
        
        $scope.save = function() {
            $scope.desserts.splice([$routeParams.id], 1);
            $location.path("/");
        }
        $scope.cancel = function() {
            $location.path("/");
        }
    })