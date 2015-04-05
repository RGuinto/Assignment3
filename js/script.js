
function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Get Stuff Done', done:false, classes:['random']},

  ];

var fruits = {
  banana: true,
  apple: true,
  coconut: true,
  orange: true,
  strawberry: true,
  pineapple: true,
  kiwi: true,
  watermelon: true,
  mango: true
};

  $scope.fruits = [
    {text:'BANANA', done:false, classes:['fruits']},
    {text:'APPLE', done:false, classes:['fruits']},
    {text: 'COCONUT', done: false, classes:['fruits']},
    {text: 'ORANGE', done: false, classes:['fruits']},
    {text: 'STRAWBERRY', done: false, classes:['fruits']},
    {text: 'PINEAPPLE', done: false, classes:['fruits']},
    {text: 'KIWI', done: false, classes:['fruits']},
    {text: 'WATERMELON', done: false, classes:['fruits']},
    {text: 'MANGO', done: false, classes:['fruits']}

  ];


var meat = {
  chicken: true,
  pork: true
};

  $scope.meat = [
    {text:'CHICKEN', done:false, classes:['meat']},
    {text:'PORK', done:false, classes:['meat']}


  ];
 
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
   var element = {text:$scope.formTodoText, done:false, classes:[]};

   if (fruits[element.text.toLowerCase()]){
      element.classes.push('fruits');
   }
   $scope.todos.push(element);
   $scope.formTodoText;


  if (meat[element.text.toLowerCase()]){
      element.classes.push('meat');
   }


  };

    $scope.clearCompleted = function () {
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        });
    };

    function Meat(item){
      var food = ["Chicken", "Pork", "Beef", "Lamb", "Steak", "Bacon", "Ham", "Sausage", "Crab", "minced pork", "minced beef", "turkey"];
      var len = food.length;
      for (var i=0;i<len;i++){
          food.push(food[i].toLowerCase());
          // $scope.todos.push({text:food[i], done:false});
      }
      if (food.indexOf(item) != -1){
        return true;
      }
    }

    function Veggies(item){
      var food = ["Cauliflower", "broccolo", "peas", "spinach", "carrots", "potato", "tomato", "corn", "Bok Choy", "celery"];
      var len = food.length;
      for (var i=0;i<len;i++){
          food.push(food[i].toLowerCase());
          // $scope.todos.push({text:food[i], done:false});
      }
      if (food.indexOf(item) != -1){
        return true;
      }
    }

    function Clothing(item){
      var food = ["T-shirt", "blouse", "jeans", "pants", "socks", "cardigan", "jacket", "blazer", "dress pants", "dress", "tank tops", "dress shirt", "pea coat", "coat"];
      var len = food.length;
      for (var i=0;i<len;i++){
          food.push(food[i].toLowerCase());
          // $scope.todos.push({text:food[i], done:false});
      }
      if (food.indexOf(item) != -1){
        return true;
      }
    }


    /* COLOR CODING PART */
    /*Fruits method*/
    function Fruits(item){
      var food = ["BANANA", "APPLE", "ORANGE", "PINEAPPLE", "GRAPES", "PEAR", "COCONUT", "mango"];
      var len = food.length;
      for (var i=0;i<len;i++){
          food.push(food[i].toLowerCase());
          // $scope.todos.push({text:food[i], done:false});
      }
      if (food.indexOf(item) != -1){
        return true;
      }
    }

    var $gallery = $( "#gallery" ),
    $trash = $( "#trash" );

    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    // let the trash be droppable, accepting the gallery items
    $trash.droppable({
      accept: "#sortable > li",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        deleteList( ui.draggable );
      }
    });

    // List deletion function
    function deleteList( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
 
        $item.find( "draggable" ).remove();
      });
    }
    $( "ul, li" ).disableSelection();

}












