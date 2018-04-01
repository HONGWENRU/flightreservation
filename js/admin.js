// define global variables
var endpoint = 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/manager/';


// functions Add/Delete/Edit User Information
function modify_replace_add(){
  // onclick  = modify_add()
  var html_add = '<div id="div_modify_replace">\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Email</label>\
                      <input type="text" value="" id="modify_add_email" class="form-control" placeholder="Add customer email">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer ID</label>\
                      <input type="text" value="" id="modify_add_cid" class="form-control" placeholder="Add customer id">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Phone</label>\
                      <input type="text" value="" id="modify_add_phone" class="form-control" placeholder="Add customer phone">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Password</label>\
                      <input type="text" value="" id="modify_add_passwords" class="form-control" placeholder="Add customer password">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer First Name</label>\
                      <input type="text" value="" id="modify_add_first_name" class="form-control" placeholder="Add customer first name">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer last name</label>\
                      <input type="text" value="" id="modify_add_last_name" class="form-control" placeholder="Add customer last name">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer nick name</label>\
                      <input type="text" value="" id="modify_add_nick_name" class="form-control" placeholder="Add customer nick name">\
                    </div>\
                    <div>\
                      <span class="input-group-btn">\
                        <button type="button" id="modify_add_go" class="btn btn-primary" onclick="modify_add();">\
                        <i class="fa fa-sign-in-alt fa-fw"></i>\
                        </button>\
                      </span>\
                    </div>\
                  </div>';
  $("#div_modify_replace").replaceWith(html_add);
}

function modify_replace_delete(){
  var html_delete = '<div id="div_modify_replace" class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Email</label>\
                      <div class="input-group">\
                      <input type="text" value="" id="modify_delete_email" class="form-control" placeholder="Delete customer email">\
                        <span class="input-group-btn">\
                        <button type="button" id="modify_delete_go" class="btn btn-primary" onclick="modify_delete();">\
                        <i class="fa fa-sign-in-alt fa-fw"></i>\
                        </button>\
                        </span>\
                      </div>\
                    </div>';
  $("#div_modify_replace").replaceWith(html_delete);
}

function modify_replace_edit(){
  var html_edit = '<div id="div_modify_replace">\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Email</label>\
                      <input type="text" value="" id="modify_edit_email" class="form-control" placeholder="Edit customer email">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer ID</label>\
                      <input type="text" value="" id="modify_edit_cid" class="form-control" placeholder="Edit customer id">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Phone</label>\
                      <input type="text" value="" id="modify_edit_phone" class="form-control" placeholder="Edit customer phone">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer Password</label>\
                      <input type="text" value="" id="modify_edit_passwords" class="form-control" placeholder="Edit customer password">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer First Name</label>\
                      <input type="text" value="" id="modify_edit_first_name" class="form-control" placeholder="Edit customer first name">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer last name</label>\
                      <input type="text" value="" id="modify_edit_last_name" class="form-control" placeholder="Edit customer last name">\
                    </div>\
                    <div class="input-group" style="margin-bottom: 10.5px;">\
                      <label>Customer nick name</label>\
                      <input type="text" value="" id="modify_edit_nick_name" class="form-control" placeholder="Edit customer nick name">\
                    </div>\
                    <div>\
                      <span class="input-group-btn">\
                        <button type="button" id="modify_edit_go" class="btn btn-primary" onclick="modify_edit();">\
                        <i class="fa fa-sign-in-alt fa-fw"></i>\
                        </button>\
                      </span>\
                    </div>\
                  </div>';
  $("#div_modify_replace").replaceWith(html_edit);
}

function modify_add(){
  var ajax=Ajax();
  var url = endpoint + "manager_add_customer.php";
  var cid = $("#modify_add_cid").val();
  var email = $("#modify_add_email").val();
  var phone = $("#modify_add_phone").val();
  var passwords = $("#modify_add_passwords").val();
  var first_name = $("#modify_add_first_name").val();
  var last_name = $("#modify_add_last_name").val();
  var nickname = $("#modify_add_nick_name").val();
  var input = "cid="+cid+"&email="+email+"&phone="+phone+"&passwords="+passwords+"&first_name="+first_name+"&last_name="+last_name+"&nickname="+nickname; 
  ajax.post(url,input,function(data){
    // console.log(data)
    if(true){
      alert('success');
      alert(data);
    }else{
      alert('fail');
    }
  });
}

function modify_edit(){
  var ajax=Ajax();
  var url = endpoint + "manager_edit_customer.php";
  var cid = $("#modify_edit_cid").val();
  var email = $("#modify_edit_email").val();
  var phone = $("#modify_edit_phone").val();
  var passwords = $("#modify_edit_passwords").val();
  var first_name = $("#modify_edit_first_name").val();
  var last_name = $("#modify_edit_last_name").val();
  var nickname = $("#modify_edit_nick_name").val();
  var input = "cid="+cid+"&email="+email+"&phone="+phone+"&passwords="+passwords+"&first_name="+first_name+"&last_name="+last_name+"&nickname="+nickname;
  ajax.post(url,input,function(data){
    // console.log(data)
    if(true){
      alert('success');
      alert(data);
    }else{
      alert('fail');
    }
  });
}

function modify_delete(){
  var ajax=Ajax();
  var url = endpoint + "manager_delete_customer.php";
  var email = $("#modify_delete_email").val();
  var input = "email="+email;
  ajax.post(url,input,function(data){
    // console.log(data)
    if(true){
      alert('success');
      alert(data);
    }else{
      alert('fail');
    }
  });
}


// functions for reservations
function reservations_replace_flight(){
  var html_edit = '<div class="input-group" id="div_reservations_replace" style="margin-bottom: 10.5px;">\
                    <span id="reservations_icon" class="input-group-addon">\
                      <i class="fa fa-user fa-fw"></i>\
                    </span>\
                    <input type="text" name="keyword" id="reservations_fid_input" class="form-control" placeholder="Flight Number">\
                    <span class="input-group-btn">\
                      <button type="button" id="reservations_go" class="btn btn-primary" onclick="reservations_flight();">\
                        <i class="fa fa-sign-in-alt fa-fw">\
                        </i>\
                      </button>\
                    </span>\
                  </div>'
  $("#div_reservations_replace").replaceWith(html_edit);
}

function reservations_replace_customer(){
  var html_edit = '<div class="input-group" id="div_reservations_replace" style="margin-bottom: 10.5px;">\
                    <span id="reservations_icon" class="input-group-addon">\
                      <i class="fa fa-user fa-fw"></i>\
                    </span>\
                    <input type="text" name="keyword" id="reservations_first_input" class="form-control" placeholder="Customer First Name">\
                    <input type="text" name="keyword" id="reservations_last_input" class="form-control" placeholder="Customer Last Name">\
                    <span class="input-group-btn">\
                      <button type="button" id="reservations_go" class="btn btn-primary" onclick="reservations_name();">\
                        <i class="fa fa-sign-in-alt fa-fw">\
                        </i>\
                      </button>\
                    </span>\
                  </div>'
  $("#div_reservations_replace").replaceWith(html_edit);
}

function reservations_flight(){
  var ajax=Ajax();
  var url = endpoint + "query_reservations.php";
  var comment = "flight";
  var first = $("#reservations_first_input").val();
  var last = $("#reservations_last_input").val();
  var id = $("#reservations_fid_input").val();
  var input="comment="+comment+"&id="+id+"&first="+first+"&last="+last;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
            alert(data[0])
            reservation_result(data);
          },
        });
}

function reservations_name(){
  var ajax=Ajax();
  var url = endpoint + "query_reservations.php";
  var comment = "name";
  var first = $("#reservations_first_input").val();
  var last = $("#reservations_last_input").val();
  var id = $("#reservations_fid_input").val();
  var input="comment="+comment+"&id="+id+"&first="+first+"&last="+last;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
            alert(data[0])
            reservation_result(data);
          },
        });
}

function reservation_result(data){
  var html_th_head = '<div id="div_reservations_result">\
                      <table>\
                        <tr>\
                          <th>fID</th>\
                          <th>fDate</th>\
                          <th>rNumber</th>\
                          <th>Total Fare</th>\
                          <th>Repre ID</th>\
                          <th>State</th>\
                          <th>Time</th>\
                        </tr>';
  var html_tbody = '';
  data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.fid + '</td>' +
                              '<td>' + item.fdate + '</td>' +
                              '<td>' + item.r_num + '</td>' +
                              '<td>' + item.total_fare + '</td>' +
                              '<td>' + item.repre_id + '</td>' +
                              '<td>' + item.rstate + '</td>' +
                              '<td>' + item.rtime + '</td>' +
                            '</tr>\n';
            });
    var html_th_foot = '</table></div>';
    var html_edit = html_th_head + html_tbody + html_th_foot;
    console.log('show reservation result');
    console.log(data[0]);
    $("#div_reservations_result").replaceWith(html_edit);
}

// functions for sals report
function sales_report(){
  var ajax=Ajax();
  var url = endpoint + "sales_report.php";
  var year_month = $("#sales_report_input").val();
  var time = year_month.split("-");
  var year = time[0];
  var month = time[1];
  var input="year="+year+"&month="+month;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data);
              var html_th_head = '<div id="div_sales_report_result">\
                      <table style="height: 75px;">\
                        <tr>\
                          <th>Number of Reservations</th>\
                          <th>Total Sales</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.num_re + '</td>' +
                              '<td>' + item.total_sales + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_sales_report_result").replaceWith(html_edit);
          },
        });
}


// functions for query info by name or flight number or city
function revenue(){
  var ajax=Ajax();
  var url = endpoint + "query_revenue.php";
  var comment = $("input[name='query_revenue_radio']:checked").val();
  if (comment == "cid"){
    var cid = $("#revenue_input").val();
    console.log('query by cid');
  }
  if (comment == "flight"){
    var flight = $("#revenue_input").val();
    console.log('query by flight');
  }
  if (comment == "city"){
    var city = $("#revenue_input").val();
    console.log('query by city');
  }
  // alert(comment);
  // alert(id);
  if (comment == undefined){
    alert('undefined selection type!');
    return;
  }
  var input="comment="+comment+"&flight="+flight+"&city="+city+"&cid="+cid;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data);
              if (comment == "cid"){
                var html_th_head = '<div id="div_revenue_result">\
                  <table style:"height: 75px">\
                    <tr>\
                      <th>cID</th>\
                      <th>Spending</th>\
                      <th>rNumber</th>\
                      <th>avgSpending</th>\
                    </tr>';
                html_tbody = ''
                data.forEach(function(item){
                  html_tbody = html_tbody + '<tr>' +
                                '<td>' + item.cid + '</td>' +
                                '<td>' + item.spending + '</td>' +
                                '<td>' + item.num_res + '</td>' +
                                '<td>' + item.avg_spending + '</td>' +
                              '</tr>\n';
                });
                var html_th_foot = '</table></div>';
                var html_edit = html_th_head + html_tbody + html_th_foot;
                $("#div_revenue_result").replaceWith(html_edit);
              }
              else if (comment == "flight"){
                var html_th_head = '<div id="div_revenue_result">\
                  <table>\
                    <tr>\
                      <th>fNumber</th>\
                      <th>Revenue</th>\
                    </tr>';
                html_tbody = ''
                data.forEach(function(item){
                  html_tbody = html_tbody + '<tr>' +
                                '<td>' + item.fid + '</td>' +
                                '<td>' + item.fid_revenue + '</td>' +
                              '</tr>\n';
                });
                var html_th_foot = '</table></div>';
                var html_edit = html_th_head + html_tbody + html_th_foot;
                $("#div_revenue_result").replaceWith(html_edit);
              }
              else if (comment == "city"){
                var html_th_head = '<div id="div_revenue_result">\
                  <table>\
                    <tr>\
                      <th>Total Revenue</th>\
                    </tr>';
                html_tbody = ''
                data.forEach(function(item){
                  html_tbody = html_tbody + '<tr>' +
                                '<td>' + item.total_revenue + '</td>' +
                              '</tr>\n';
                });
                var html_th_foot = '</table></div>';
                var html_edit = html_th_head + html_tbody + html_th_foot;
                $("#div_revenue_result").replaceWith(html_edit);
              }
          },
        });
}


// functions for query seats
function seats(){
  var ajax=Ajax();
  var url = endpoint + "customer_seats.php";
  var fid = $("#seats_input").val();
  // alert(comment);
  // alert(id);
  var input="fid="+fid;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data.length);
              if (data.length == 0 || data == null || data == undefined || data=={}){
                alert('no data.');
              }
              var html_th_head = '<div id="div_seats_result">\
                      <table>\
                        <tr>\
                          <th>cID</th>\
                          <th>Email</th>\
                          <th>First Name</th>\
                          <th>Last Name</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.cid + '</td>' +
                              '<td>' + item.email + '</td>' +
                              '<td>' + item.first_name + '</td>' +
                              '<td>' + item.last_name + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_seats_result").replaceWith(html_edit);
          },
          fail: function(){
            alert('query fail.');
          }
        });
}

// functions for query flights in a given airport
function flights_in_airport(){
  var ajax=Ajax();
  var url = endpoint + "flights_in_airport.php";
  var IATA = $("#flights_in_airport_input").val();
  var input = "IATA="+IATA;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data);
              var html_th_head = '<div id="div_flights_in_airport_result">\
                      <table>\
                        <tr>\
                          <th>Flight Number</th>\
                          <th>From City</th>\
                          <th>To City</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.fid + '</td>' +
                              '<td>' + item.city1 + '</td>' +
                              '<td>' + item.city2 + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_flights_in_airport_result").replaceWith(html_edit);
          },
        });
}


// functions for query list of all flights
$(document).ready(function(){
  //do something 
  console.log('loading list of all flights');
  var ajax = Ajax();
  var url = endpoint + "all_flights.php"
  var input = '';
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              // console.log(data);
              var html_th_head = '<div id="div_replace_all_flights">\
                      <table>\
                        <tr>\
                          <th>Flight Number</th>\
                          <th>IATA</th>\
                          <th>Airline</th>\
                          <th>Working Days</th>\
                          <th>Max Seats</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.fid + '</td>' +
                              '<td>' + item.IATA + '</td>' +
                              '<td>' + item.airline_name + '</td>' +
                              '<td>' + item.working_days + '</td>' +
                              '<td>' + item.max_seats + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_replace_all_flights").replaceWith(html_edit);
          },
        });
});


// functions for query most active flights
$(document).ready(function(){
  //do something 
  console.log('loading list of most active flights');
  var ajax = Ajax();
  var url = endpoint + "active_flights.php";
  // alert('onload');
  var input = '';
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data);
              var html_th_head = '<div id="div_replace_most_active_flights">\
                      <table>\
                        <tr>\
                          <th>Flight Number</th>\
                          <th>Count</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.fid + '</td>' +
                              '<td>' + item.num + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_replace_most_active_flights").replaceWith(html_edit);
          },
        error: function(){
          alert('fail to load most active flights')
        },
        });
});


// functions for query on-time/delayed flights
function draw_time(comment){
  var ajax = Ajax();
  // alert(comment)
  var url = endpoint + "time_flights.php"
  var input = 'comment='+comment;
  $.ajax({type: "post",
          url: url,
          data: input,
          dataType: 'json',
          success: function(data){
              console.log(data);
              var html_th_head = '<div id="div_replace_time">\
                      <table>\
                        <tr>\
                          <th>Flight Number</th>\
                          <th>Flight Date</th>\
                          <th>Scheduled Depart Time</th>\
                          <th>Scheduled Arrival Time</th>\
                        </tr>';
              html_tbody = ''
              data.forEach(function(item){
                html_tbody = html_tbody + '<tr>' +
                              '<td>' + item.fid + '</td>' +
                              '<td>' + item.fdate + '</td>' +
                              '<td>' + item.sdt + '</td>' +
                              '<td>' + item.sat + '</td>' +
                            '</tr>\n';
              });
              var html_th_foot = '</table></div>';
              var html_edit = html_th_head + html_tbody + html_th_foot;
              $("#div_replace_time").replaceWith(html_edit);
          },
        error: function(data){
          alert('fail to load on-time/delayed')
          console.log(data)
        },
        });
}

// functions for query customer generates most revenue
$(document).ready(function(){
  var ajax = Ajax();
  var url = endpoint + "customer_revenue.php"
  // alert('onload');
  var input = '';
  $.ajax({type: "post",
        url: url,
        data: input,
        dataType: 'json',
        success: function(data){
            console.log(data);
            var html_th_head = '<div id="div_replace_customer_revenue">\
                    <table>\
                      <tr>\
                        <th>Customer ID</th>\
                        <th>Spending</th>\
                      </tr>';
            html_tbody = ''
            data.forEach(function(item){
              html_tbody = html_tbody + '<tr>' +
                            '<td>' + item.cid + '</td>' +
                            '<td>' + item.spending + '</td>' +
                          '</tr>\n';
            });
            var html_th_foot = '</table></div>';
            var html_edit = html_th_head + html_tbody + html_th_foot;
            $("#div_replace_customer_revenue").replaceWith(html_edit);
        },
      error: function(){
        alert('fail to load most customer revenue')
      },
      });
}); 