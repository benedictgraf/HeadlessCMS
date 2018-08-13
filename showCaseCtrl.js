var app = angular.module('mainApp', ['ui.router', 'firebase']);
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


app.controller('showCaseCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

    // CREATE A FIREBASE REFERENCE
    var postsRef1 = firebase.database().ref('posts/section1');
    var postsRef2 = firebase.database().ref('posts/section2');
    var viewRef1 = firebase.database().ref('view/active/section1');
    var viewRef2 = firebase.database().ref('view/active/section2');


    // GET Entries AS AN ARRAY
    $scope.entries1 = $firebaseArray(postsRef1);
    $scope.entries2 = $firebaseArray(postsRef2);
    $scope.viewEntries1 = $firebaseArray(viewRef1);
    $scope.viewEntries2 = $firebaseArray(viewRef2);

    // GET Value of currently clicked Entry
    $scope.setActive1 = function (event)
    {
    //console.log(event.target.innerHTML);
    var viewItem = event.target.innerHTML;
    //console.log("viewItem: " + viewItem);
    firebase.database().ref().child('view/active/section1').set({data: event.target.innerHTML});
    };
    $scope.setActive2 = function (event)
    {
    //console.log(event.target.innerHTML);
    var viewItem = event.target.innerHTML;
    //console.log("viewItem: " + viewItem);
    firebase.database().ref().child('view/active/section2').set({data: event.target.innerHTML});
    };
    }]);


app.controller('pushCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {

    // Get Value of Input -> Write new Post into DB
    $scope.writeNewPost1 = function()
    {firebase.database().ref().child('posts/section1').push({data: $scope.insertNew});
    };
    $scope.writeNewPost2 = function()
    {firebase.database().ref().child('posts/section2').push({data: $scope.insertNew});
    };
}]);



