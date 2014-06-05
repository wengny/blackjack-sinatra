$(document).ready(function(){
  refreshContent("form#hit_form input","/game/player/hit");
  refreshContent("form#stay_form input","/game/player/stay");
  refreshContent("form#dealer_hit input","/game/dealer/hit");
});


function refreshContent(tag, url) {
  $(document).on("click", tag, function() {
    
    $.ajax({
      type: 'POST',
      url: url,
      success: function(data){
        $("#game").replaceWith(data);
      },
      error: function(xhr, desc, exceptionobj){
        if(exceptionobj){
          throw exceptionobj;
        }else if(desc){
          throw desc;
        }else{
          throw "unknown error occurred during ajax request to URL: "+url;
        }
      }
    });
    return false;
  });
}


