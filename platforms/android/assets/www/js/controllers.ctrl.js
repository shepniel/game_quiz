angular.module('data',[])

.controller('dataCtrl',function($scope,$state,$stateParams){
  $scope.user1 = {};
  $scope.angie = {};
  var id;
  var pendejadas = [
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Luigi-icon.png',     
      answer: 'luigi',
      score: 0
    },
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Waluigi-icon.png',     
      answer: 'waluigi',
      score: 0
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Chain-Chomp-icon.png',     
      answer: 'chain chomp',
      score: 0
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Boo-icon.png',     
      answer: 'boo',
      score: 0
    },
    {  
      name: 'Who is he?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Goomba-icon.png',     
      answer: 'goomba',
      score: 0
    },
    {  
      name: 'Who is it?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Star-icon.png',     
      answer: 'star',
      score: 0
    },
    {  
      name: 'Whose is this Hat?',     
      cover: 'http://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Hat-Wario-icon.png',     
      answer: 'wario',
      score: 0
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
        window.localStorage.setItem("score",1);
         $scope.loadData = function(){
      alert(parseInt(window.localStorage.getItem("score")));  
  }
        //var punta = parseInt(localStorage.getItem("score"))+1;

        if (index==pendejadas.length) {
          $state.go('app.result');
        }else{
              $state.go('app.activity', {id: index});

        }
      }else{
              //var punta = parseInt(localStorage.getItem("score"))-1;
              var index = id+1;
              $state.go('app.activity', {id: index});
      }
  } 
})
.controller('dataCtrl2',function($scope,$state,$stateParams){
  $scope.user2 = {};
  $scope.angie = {};
  var id;
   var pendejadas2 = [
    {  
      name: 'Whos thats pokemon?',     
      cover: 'https://pbs.twimg.com/profile_images/669514396222160897/2215gjsd.png',     
      answer: 'bulbasour'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'http://vignette1.wikia.nocookie.net/es.pokemon/images/5/56/Charmander.png?cb=20140207202456',     
      answer: 'charmander'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'https://pbs.twimg.com/profile_images/669519360344526848/SPfSzuWv.png',     
      answer: 'squirtle'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'http://vignette3.wikia.nocookie.net/es.pokemon/images/c/c4/Rattata.png?cb=20080723091810',     
      answer: 'rattata'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'http://vignette3.wikia.nocookie.net/es.pokemon/images/8/8d/Vulpix.png?cb=20080909115229',     
      answer: 'vulpix'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'http://vignette1.wikia.nocookie.net/es.pokemon/images/b/bf/Machamp.png?cb=20080909112704',     
      answer: 'machamp'
    },
    {  
      name: 'Whos thats pokemon?',     
      cover: 'http://vignette3.wikia.nocookie.net/es.pokemon/images/9/98/Tauros.png?cb=20080909115022',     
      answer: 'tauros'
    }
  ];


  $scope.$on ('$ionicView.beforeEnter',function(){
    id = parseInt($stateParams.id);
    console.log(id);
    $scope.yayi2 = pendejadas2 [id];
    console.log($scope.yayi2)
  })
  
  $scope.compare2 = function(){
    $scope.result = angular.equals($scope.user2.name,pendejadas2[id].answer);
      if ($scope.result) {
        var index = id+1;
        window.localStorage.setItem("score",1);
         $scope.loadData = function(){
      alert(parseInt(window.localStorage.getItem("score")));  
  }
        //var punta = parseInt(localStorage.getItem("score"))+1;

        if (index==pendejadas2.length) {
          $state.go('app.result');
        }else{
              $state.go('app.activity2', {id: index});

        }
      }else{
              //var punta = parseInt(localStorage.getItem("score"))-1;
              var index = id+1;
              $state.go('app.activity2', {id: index});
      }
  } 
})
