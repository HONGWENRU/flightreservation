var endpoint = 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/manager/';


function submit(){
  var ajax = Ajax();
  var url = endpoint + "add_customer.php"
  var customer_info = {};
  $("#auto_fill").children().each(function(){
    customer_info[$(this.children[1]).attr('id')] = $(this.children[1]).val();
  })
  console.log(customer_info);
  var input = customer_info;
  $.ajax({type: "post",
        url: url,
        data: input,
        dataType: 'json',
        success: function(data){
            // console.log(data);
            alert('add customer information successfully.')
        },
        error: function(request, status, error){
          alert('fail to add customer');
          alert(request.responseText);
        },
      });
}
