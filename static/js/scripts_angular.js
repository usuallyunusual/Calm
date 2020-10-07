var MyApp = angular.module("MyApp", ["ngAnimate"]);
//console.log(MyApp);
MyApp.controller('TipsController', ["$scope", function ($scope) {
    $scope.report = function (tip) {
        //console.log(tip);
        var idx = $scope.tips.indexOf(tip);
        $scope.tips.splice(idx, 1)
        //tip.report = true;
    }
    $scope.addTip = function (tip) {
        temp = {
            email: tip.email,
            tip: tip.tipm,
            report: false,
            likes: 0,
            date: new Date().toISOString().slice(0, 10),
            name: tip.name
        }
        $scope.tips.push(temp);
        $scope.newTip.tipm = "";
        $scope.newTip.email = "";
    }
    $scope.addLike = function (obj) {
        obj.likes = obj.likes + 1;
    }
    $scope.tips = [
        {
            email: "julianex17@gmail.com",
            tip: "Meditation definitely helps",
            report: false,
            likes: 0,
            date: "2020-10-05",
            name: "Julian"
        },
        {
            email: "hello@gmail.com",
            tip: "Communication is key",
            report: false,
            likes: 0,
            date: "2020-10-06",
            name: "Sunaina"
        },
        {
            email: "sagar@gmail.com",
            tip: "Self help books are a godsend",
            report: false,
            likes: 0,
            date: "2020-10-06",
            name: "Vignesh"
        }
    ];
    $scope.message = "Hello";
}]);

