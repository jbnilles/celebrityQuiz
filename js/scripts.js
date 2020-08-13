$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const color = $("#color").val();
    const food = $("#food").val();
    //alert(food +' ' + color);
    if(color === 'blue' || food === 'hotdog'){
      //alert('in blue');

      $('#answer').text("Chandler");
    }
    else if(color === 'red' && food === 'salad'){
      //alert('in red');
      $('#answer').text("Phoebe");
    }
    else if(color === 'yellow' || food === 'turkeysandwich'){
     // alert('in yellow');
     $('#answer').text("Ross");
    }
    else {
      //alert('in else');
      $('#answer').text("Monica");
    }





  });
});