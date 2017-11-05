(function () {

angular.module('myFirstApp',[])
.controller('myFirstController', myFirstController);

function myFirstController ($scope) {
  $scope.foodNo = 0;
  $scope.foodList = "";

  $scope.calculateFoodNo = function() {
    if($scope.foodList=='') {
        $scope.foodNo = 0;
    } else {
      var foodArray = $scope.foodList.split(',');
      console.log(foodArray);
      $scope.foodNo = foodArray.length;
    }
  };

}

})();
