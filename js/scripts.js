$(document).ready(function () {
  $("form").submit(function () {
    event.preventDefault();
    const color = $("#color").val();
    const food = $("#food").val();
    //alert(food +' ' + color);
    if (color === 'blue' || food === 'hotdog') {
      //alert('in blue');

      $('#answer').text("Chandler");
      $('#friendpicture').attr('src', "https://pmctvline2.files.wordpress.com/2017/05/friends-chandler-video.jpg");
    }
    else if (color === 'red' && food === 'salad') {
      //alert('in red');
      $('#answer').text("Phoebe");
      $('#friendpicture').attr('src', "https://i.insider.com/5ab53db4095b111a068b45b6?width=1100&format=jpeg&auto=webp");
    }
    else if (color === 'yellow' || food === 'turkeysandwich') {
      // alert('in yellow');
      $('#answer').text("Ross");
      $('#friendpicture').attr('src', "https://vignette.wikia.nocookie.net/friends/images/0/0b/RossGeller.jpg/revision/latest/top-crop/width/360/height/360?cb=20180424154547");
    }
    else {
      //alert('in else');
      $('#answer').text("Monica");
      $('#friendpicture').attr('src', "https://upload.wikimedia.org/wikipedia/en/d/d0/Courteney_Cox_as_Monica_Geller.jpg");
    }





  });
});