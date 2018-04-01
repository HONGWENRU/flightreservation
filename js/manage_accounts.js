var endpoint = 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/manager/';


$(document).ready(function(){
  var ajax = Ajax();
  var url = endpoint + "all_customer.php"
  var input = '';
  $.ajax({type: "post",
        url: url,
        data: input,
        dataType: 'json',
        success: function(data){
            console.log(data);
            var html_th_head = "<div id='div_replace_customer'><table><tbody style='margin-right: 2%'><tr><th>Customer ID</th><th>Email</th><th>Create Date</th><th>Phone</th><th>Passwords</th><th>First Name</th><th>Last Name</th><th>Nick Name</th><th>Country</th><th>State</th><th>City</th><th>Zip Code</th><th>Street</th><th>Action</th></tr>";
            html_tbody = '';
            var i = 0;
            data.forEach(function(item){
                html_tbody = html_tbody + '<tr id="'+ i + '">' +
                              '<td id="cid">' + item.cid + '</td>' +
                              '<td id="email">' + item.email + '</td>' +
                              '<td id="create_date">' + item.create_date + '</td>' +
                              '<td id="phone">' + item.phone + '</td>' +
                              '<td id="passwords">' + item.passwords + '</td>' +
                              '<td id="first_name">' + item.first_name + '</td>' +
                              '<td id="last_name">' + item.last_name + '</td>' +
                              '<td id="nickname">' + item.nickname + '</td>' +
                              '<td id="country">' + item.country + '</td>' +
                              '<td id="state">' + item.state + '</td>' +
                              '<td id="city">' + item.city + '</td>' +
                              '<td id="zipcode">' + item.zipcode + '</td>' +
                              '<td id="street1">' + item.street + '</td>' +
                              '<td id="button"> <button type="button" onclick=edit(this)>EDIT</button>' + 
                              '<button type="button" onclick=delete1(this)>DELETE</button></td>'
                            '</tr>\n';
              i = i+1;
            });
            var html_th_foot = '</tbody></table></div>';
            var html_edit = html_th_head + html_tbody + html_th_foot;
            $("#div_replace_customer").replaceWith(html_edit);
        },
      error: function(){
        alert('fail to load customer data')
      },
      });
});


// $(document).ready(function(){
//   var data = [{cid:1, email:2, create_date:3, phone:4, passwords:5, first_name:6, last_name:7, nickname:8, country:8, state:9, city:10, zipcode:11, street1:12, street2:13},
//   {cid:12, email:2, create_date:3, phone:4, passwords:5, first_name:6, last_name:7, country:8, nickname:8, state:9, city:10, zipcode:11, street1:12, street2:13},
//   {cid:13, email:2, create_date:3, phone:4, passwords:5, first_name:6, last_name:7, country:8, nickname:8, state:9, city:10, zipcode:11, street1:12, street2:13},
//   {cid:14, email:2, create_date:3, phone:4, passwords:5, first_name:6, last_name:7, country:8, nickname:8, state:9, city:10, zipcode:11, street1:12, street2:13},
//   {cid:15, email:2, create_date:3, phone:4, passwords:5, first_name:6, last_name:7, country:8, nickname:8, state:9, city:10, zipcode:11, street1:12, street2:13}];
//   var html_th_head = "<div id='div_replace_customer'><table><tr><th>Customer ID</th><th>Email</th><th>Create Date</th><th>Phone</th><th>Passwords</th><th>First Name</th><th>Last Name</th><th>Nick Name</th><th>Country</th><th>State</th><th>City</th><th>Zip Code</th><th>Street 1</th><th>Street 2</th><th>Action</th></tr>";
//   html_tbody = '';
//   var i = 0;
//   data.forEach(function(item){
//     html_tbody = html_tbody + '<tr id="'+ i + '">' +
//                   '<td id="cid">' + item.cid + '</td>' +
//                   '<td id="email">' + item.email + '</td>' +
//                   '<td id="create_date">' + item.create_date + '</td>' +
//                   '<td id="phone">' + item.phone + '</td>' +
//                   '<td id="passwords">' + item.passwords + '</td>' +
//                   '<td id="first_name">' + item.first_name + '</td>' +
//                   '<td id="last_name">' + item.last_name + '</td>' +
//                   '<td id="nickname">' + item.nickname + '</td>' +
//                   '<td id="country">' + item.country + '</td>' +
//                   '<td id="state">' + item.state + '</td>' +
//                   '<td id="city">' + item.city + '</td>' +
//                   '<td id="zipcode">' + item.zipcode + '</td>' +
//                   '<td id="street1">' + item.street1 + '</td>' +
//                   '<td id="street2">' + item.street2 + '</td>' +
//                   '<td id="button"> <button type="button" onclick=edit(this)>EDIT</button>' + 
//                   '<button type="button">DELETE</button></td>'
//                 '</tr>\n';
//     i = i+1;
//   });
//   var html_th_foot = '</table></div>';
//   var html_edit = html_th_head + html_tbody + html_th_foot;
//   $("#div_replace_customer").replaceWith(html_edit);

// });


function edit(elem){
  id = elem.parentNode.parentNode.id;
  var retval = [];
  var label = [];
  $("#"+id).children().each(function(){
    retval.push($(this).text());
    label.push($(this).attr('id'));
  })
  console.log(retval);
  console.log(label);
  var href = "edit_account.html?";
  href = href + label[0] + '=' + retval[0];
  for (var i=1;i<retval.length-1;i++){
    href = href + '&' + label[i] + '=' + retval[i];
  }
  console.log(href);
  window.open(href);
};


function delete1(elem){
  id = elem.parentNode.parentNode.id;
  var input = $("#"+id).children().each(function(){})
  var input = $("#"+id+' > '+'#email')[0].textContent;
  console.log(input)
  var input = 'email='+input;
  console.log("delete:", input);
  var ajax = Ajax();
  var url = endpoint + "delete_customer.php"
  $.ajax({type: "post",
      url: url,
      data: input,
      dataType: 'json',
      success: function(data){
        alert(data);
      },
    error: function(request, status, error){
      if(request.responseText == 'suceess'){
        alert('delete successfully');
      }
      else{
        alert('fail to delete customer')
      }
      console.log(request.responseText)
    },
    });
};