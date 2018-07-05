//Initialize angularJS app with firebase and uiRouter
var app = angular.module('mainApp', ['ui.router', 'firebase']);

//Define States/Sites for uiRouter
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('view', {
        url: '/view',
        templateUrl: 'view.html'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'login.html'
      })
      .state('panel', {
        url: '/panel',
        templateUrl: 'admin.html'
      });
      $urlRouterProvider.otherwise('/view');
})

//showCaseCtrl is responsible for displaying
app.controller('showCaseCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

    //create a firebase references with ('a name')
    var showCaseRef = firebase.database().ref('posts');
    var viewRef = firebase.database().ref('view');


    //get entries as an array from previous created refs
    $scope.entries = $firebaseArray(showCaseRef);
    $scope.viewEntries = $firebaseArray(viewRef);

    //get value (true) of currently clicked entry
    $scope.setActive = function (event){
    var viewItem = event.target.innerHTML;
    firebase.database().ref().child('view/active').set({data: event.target.innerHTML});
    };
    }]);

//pushCtrl is responsible for writing new posts into firebase
app.controller('pushCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

    //get value of input-field and write as new Post into DB
    $scope.writeNewPost = function()
    {firebase.database().ref().child('posts').push({data: $scope.insertNew});
    };
}]);



