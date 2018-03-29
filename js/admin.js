// define global variables
var endpoint = 'http://172.31.131.185/539/'

// functions Add/Delete/Edit User Information
function modify_replace_add(){
  var html_add = '<div id="div_modify_replace"><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer ID</label><input type="text" value="" id="modify_add_cid" class="form-control" placeholder="Add customer id"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Email</label><input type="text" value="" id="modify_add_email" class="form-control" placeholder="Add customer email"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Create Date</label><input type="text" value="" id="modify_add_create_date" class="form-control" placeholder="Add customer create date"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Phone</label><input type="text" value="" id="modify_add_phone" class="form-control" placeholder="Add customer phone"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Password</label><input type="text" value="" id="modify_add_passwords" class="form-control" placeholder="Add customer password"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer First Name</label><input type="text" value="" id="modify_add_first_name" class="form-control" placeholder="Add customer first name"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer last name</label><input type="text" value="" id="modify_add_last_name" class="form-control" placeholder="Add customer last name"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer nick name</label><input type="text" value="" id="modify_add_nick_name" class="form-control" placeholder="Add customer nick name"></div><div><span class="input-group-btn"><button type="button" id="modify_add_go" class="btn btn-primary" onclick="modify_add();"><i class="fa fa-sign-in-alt fa-fw"></i></button></span></div></div></div>';
  $("#div_modify_replace").replaceWith(html_add);
}

function modify_replace_delete(){
  var html_delete = '<div id="div_modify_replace" class="input-group" style="margin-bottom: 10.5px;"><label>Customer ID</label><input type="text" value="" id="modify_delete_cid" class="form-control" placeholder="Delete customer id"><div><span class="input-group-btn"><button type="button" id="modify_delete_go" class="btn btn-primary" onclick="modify_delete();"><i class="fa fa-sign-in-alt fa-fw"></i></button></span></div></div>';
  $("#div_modify_replace").replaceWith(html_delete);
}

function modify_replace_edit(){
  var html_edit = '<div id="div_modify_replace"><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer ID</label><input type="text" value="" id="modify_edit_cid" class="form-control" placeholder="Edit customer id"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Email</label><input type="text" value="" id="modify_edit_email" class="form-control" placeholder="Edit customer email"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Create Date</label><input type="text" value="" id="modify_edit_create_date" class="form-control" placeholder="Edit customer create date"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Phone</label><input type="text" value="" id="modify_edit_phone" class="form-control" placeholder="Edit customer phone"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer Password</label><input type="text" value="" id="modify_edit_passwords" class="form-control" placeholder="Edit customer password"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer First Name</label><input type="text" value="" id="modify_edit_first_name" class="form-control" placeholder="Edit customer first name"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer last name</label><input type="text" value="" id="modify_edit_last_name" class="form-control" placeholder="Edit customer last name"></div><div class="input-group" style="margin-bottom: 10.5px;"><label>Customer nick name</label><input type="text" value="" id="modify_edit_nick_name" class="form-control" placeholder="Edit customer nick name"></div><div><span class="input-group-btn"><button type="button" id="modify_edit_go" class="btn btn-primary" onclick="modify_edit();"><i class="fa fa-sign-in-alt fa-fw"></i></button></span></div></div></div>';
  $("#div_modify_replace").replaceWith(html_edit);
}


// 

function reservations(){
  var ajax=Ajax();
  var url = endpoint + "query_reservations.php";
  var con = '123';
  var fid = $("#reservations_input").val();
  var input="uid="+'1'+"&comment="+con+"&fid="+fid;
  ajax.post(url,input,function(data){
    // console.log(data)
    if(true){
      alert('success');
      alert(data)
    }else{
      alert('fail');
    }
  });
}




