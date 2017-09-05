$(document).ready(function($){


  $('#modal-form').submit(function(e){
    e.preventDefault();

    var data = {
      username: $('input[name=username]').val(),
      useremail: $('input[name=useremail]').val(),
      emailbool: $("input[name=emailbool]").prop('checked')
    };

    console.log(data);

    $('.close').click();

    $.ajax({
      type: 'POST',
      data: data,
      url: "https://jsonplaceholder.typicode.com/posts",
      success: function(success) {
        console.log("success", success);
      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })


})
