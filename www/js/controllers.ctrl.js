angular.module('data',[])

.controller('dataCtrl',function($scope,$state,$stateParams){
  $scope.user1 = {};
  $scope.angie = {};
  var id;
  var pendejadas = [
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Luigi-icon.png',     
      answer: 'luigi'
    },
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Waluigi-icon.png',     
      answer: 'waluigi'
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Chain-Chomp-icon.png',     
      answer: 'chain chomp'
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Boo-icon.png',     
      answer: 'boo'
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Goomba-icon.png',     
      answer: 'goomba'
    },
    {  
      name: 'Who is it?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Star-icon.png',     
      answer: 'star'
    },
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Wario-icon.png',     
      answer: 'wario'
    }
  ];


  $scope.$on ('$ionicView.beforeEnter',function(){
    id = parseInt($stateParams.id);
    console.log(id);
    $scope.yayi = pendejadas [id];
    console.log($scope.yayi)
  })
  
  $scope.compare = function(){
    $scope.result = angular.equals($scope.user1.name,pendejadas[id].answer);
      if ($scope.result) {
        var index = id+1;
        if (index==pendejadas.length) {
          $state.go('app.result');
        }else{
              $state.go('app.activity', {id: index});

        }
      }else{
              var index = id+1;
              $state.go('app.activity', {id: index});
      }
  } 
})
