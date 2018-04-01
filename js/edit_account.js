var endpoint = 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/manager/';

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
};

$(document).ready(function(){
  $("#auto_fill").children().each(function(){
    // console.log($(this.children[1]).attr('id'));
    var tmp = $(this.children[1]).attr('id');
    var write = getAllUrlParams()[tmp];
    if (write == null || write == 'null' || write == undefined || write == 'undefined'){
      write = ''
    }
    $(this.children[1]).val(write)
  })
});

function submit(){
  var ajax = Ajax();
  var url = endpoint + "edit_customer.php"
  var customer_info = {};
  $("#auto_fill").children().each(function(){
    customer_info[$(this.children[1]).attr('id')] = $(this.children[1]).val();
  })
  var input = '';
  for (var key in customer_info){
    if (key != 'undefined'){
      input += "&"+key+"="+customer_info[key];
    }
  }
  input = input.substring(1,);
  console.log(input);
  $.ajax({type: "post",
        url: url,
        data: input,
        dataType: 'json',
        success: function(data){
            // console.log(data);
            alert('edit customer information successfully.')
        },
        error: function(request, status, error){
          if (request.responseText == 'suceess'){
            alert('edit customer information successfully')
          }
          else{
            alert('fail to edit customer');
            console.log(request.responseText);
            console.log(error);
            console.log(status);  
          }
          
        },
      });
}
