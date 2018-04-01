
$('#document').ready(
function(){

    var today=new Date();

    $.ajax({
        url: "http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/customer/history.php",
        dataType: 'json',
        type: "POST",
        data:localStorage.getItem('email'),
        success:function(data){
            console.log(data);
    data.forEach(function(re){
        var d=new Date(re['fdate']);
        // console.log(today);
        // console.log(d);



       if(today<d&&re['rstate']=='sucess'){
        var content='  Depart time:'+re['departtime']+'  Landing time:'
            +re['landingtime']+' Company:'+re['airline_name']+'  Fly from:'+re['from_ap']+'  Fly to:'+re['to_ap']+
            '  Reservation number'+re['r_num']+'  Price:'+re['total_fare']+' Flight date:'+re['fdate']+' State:'+re['rstate'];
        var insert="<label class='btn btn-block col-md-6 center-block form-check-label'> " +
            "<input name='item' type='checkbox' class='form-check-input' " +
            "autocomplete='off' value=" +re['r_num']+ "> "+content+"</label>";

        $('#flighthistory').append(insert);}
        else{
           var content='  Depart time:'+re['departtime']+'  Landing time:'
               +re['landingtime']+' Company:'+re['airline_name']+'  Fly from:'+re['from_ap']+'  Fly to:'+re['to_ap']+
               '  Reservation number'+re['r_num']+'  Price:'+re['total_fare']+' Flight date:'+re['fdate']+' State:'+re['rstate'];
           var insert="<label class='btn btn-block col-md-6 center-block form-check-label'> " +
               "<input name='item' type='checkbox' class='form-check-input' disabled" +
               " value=" +re['r_num']+ "> "+content+"</label>";
           $('#flighthistory').append(insert);
       }


    });
        }
    });








    $('#del').click(function(){
        var ja={};
        var ret=[];
        var data=$('input[name="item"]:checked');
        console.log(data);
        data.each(function(){
            ret.push(this.value);
        });


        ja['data']=ret;


        console.log(ja);

       var ret_date=$.ajax({
            url: "http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/customer/cancel.php",
            dataType: "text",
            type: "POST",
            data: ja
        });

       console.log(ret_date);

        location.reload();



    });





});