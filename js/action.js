function pop() {
  document.getElementById("SignUp").style.visibility="visible";
}

function hid() {
  document.getElementById("SignUp").style.visibility="hidden";
}

$(document).ready(function() {
  $("button[type=submit]").click(()=> {
    $.ajax({
      url:'do.njs',
      method: 'GET',
      data:{mail:$('input[name=mail]').val(),user:$('input[name=user]').val(),pw:$('input[name=pw]').val()},
      error: function(err){
        console.log(err);
        $("button").html("error");
      },

      success: (data)=>{
        $("button").html(data);
        setTimeout(hid,2000);
      }
      
    });

    $("button").html("loading");
    
  });

});
