angular.module('soundController',[])

// .controller("ExampleController1", function($scope, $cordovaSocialSharing) {
 
//     $scope.shareAnywhere = function() {
//         $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
//     }
 
//     $scope.shareViaTwitter = function(message, image, link) {
//         $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
//             $cordovaSocialSharing.shareViaTwitter(message, image, link);
//         }, function(error) {
//             alert("Cannot share on Twitter");
//         });
//     }
 
// });
.controller('SoundController', ['$ionicPlatform', '$timeout',  '$cordovaNativeAudio', SoundController]);

function SoundController($ionicPlatform, $timeout, $cordovaNativeAudio) {  
    var vm = this;

    $ionicPlatform.ready(function() {

        // all calls to $cordovaNativeAudio return promises

        $cordovaNativeAudio.preloadSimple('snare', 'audio/03-dk.mp3');
        $cordovaNativeAudio.preloadSimple('hi-hat', 'audio/01-mario-land.mp3');
        $cordovaNativeAudio.preloadSimple('bass', 'audio/bass.mp3');
        $cordovaNativeAudio.preloadSimple('bongo', 'audio/bongo.mp3');
    });

    vm.play = function(sound) {
        $cordovaNativeAudio.play(sound);
    };

    return vm;
}
