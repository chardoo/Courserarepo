(function(){
    angular.module('myfirstApp',[])
    

    .controller('myfirstcontroller', function($scope){
      $scope.food = ""
      $scope.displaymessage = ""
      console.log($scope.food)
   
    

      $scope.myfunction =  function (){
         let newmessage  =  tomuchfunction($scope.food)
         $scope.displaymessage = newmessage;
         console.log($scope.food + 'FROM MYFXN')
     }


    function tomuchfunction(value){
        let message = ''
        let newvalue =  value.split(',')
        if(newvalue.length == 0 ){
            message =  "please enter your food"
        }
        
        if(newvalue.length <= 3){
            message =  "Enjoy"
        }
        else
        {
             message =  "Too much"
        }
        return message;
    }
})
    
    //  function calculate(name){
    //     var totalvaluestring = 0
    //     for(let i = 0; i<name; i++)
    //     {
    //         totalvaluestring += charCodeAt(i)
    //      }
    //     return totalvaluestring
    // }


})(); 