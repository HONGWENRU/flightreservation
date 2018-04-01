$("document").ready(function(){

    $("#search").click(function(){



        var start_date=$("#date").val();
        var ret_date=$("#returndate").val();

        if(ret_date<start_date){
            alert('invalid date range');
            return;
        }

        var stop=$("input[name='exampleRadios']:checked").val();
        var oneway=$("input[name='exampleRadios2']:checked").val();

        console.log(stop);
        console.log(oneway);

        var org=$("#origin").val();
        var des=$("#destination").val();

        var dat={};


        //origin,destination,start_date,return_date,stop_or_not,oneway_or_not
        dat['origin']=org;
        dat['destination']=des;
        dat['start_date']=start_date;
        dat['return_date']=ret_date;
        dat['oneway_or_not']=oneway;





    //];


      var test= $.ajax({
            url: 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/customer/search.php',
            dataType: "json",
            type: "POST",
            data: dat,
            success:function(data){

                console.log(data);

                $('#flightlist').append('<div style="font-size:50px">Go:</div>');

                console.log(data['go']);

                listflightgo(data['go']);

                $('#flightlist').append('<div style="font-size:50px">Return:</div>');

                listflightret(data['return']);
            }
        });

      console.log(test);


       // var ret_data={
       //     'go':[
       //         {
       //             'airline_name': "United Airlines",
       //             'arrive_time': "21:00:00",
       //             'depart_time': "08:00:00",
       //             'fid': "70",
       //             'from_ap': "JFK",
       //             'max_seats': "450",
       //             'price': "1000",
       //             'stopnum': "0",
       //             'to_ap': "EZE"
       //
       //
       //         }
       //         ],
       //
       //
       //     'return':[
       //         {
       //             'airline_name': "United Airlines",
       //             'arrive_time': "21:00:00",
       //             'depart_time': "08:00:00",
       //             'fid': "70",
       //             'from_ap': "JFK",
       //             'max_seats': "450",
       //             'price': "1000",
       //             'stopnum': "0",
       //             'to_ap': "EZE"
       //
       //
       //         }
       //     ]
       // };



        // $('#flightlist').append('<div style="font-size:50px">Go:</div>');
        //
        // console.log(ret_data['go']);
        //
        // listflight(ret_data['go']);
        //
        // $('#flightlist').append('<div style="font-size:50px">Return:</div>');
        //
        // listflight(ret_data['return']);

    });

    $('#next').click(function(){
        var tol_price=0;
        var sel=$('input[name="from"]:checked');
        localStorage.setItem('flightfromnumber', sel.length);
        var ret=$('input[name="return"]:checked');
        localStorage.setItem('flightreturnnumber', ret.length);
        var id=0;
        localStorage['start_date']=$("#date").val();
        sel.each(function(){
            var val=this.value.split('#');
            tol_price+=parseInt(val[1]);
            localStorage.setItem('flightfrom'+id,val[0]);
            id++;
        });
        id=0;
        ret.each(function(){
            var val=this.value.split('#');
            tol_price+=parseInt(val[1]);
            localStorage.setItem('flightret'+id,val[0]);
            id++;
        });
        localStorage['totalprice']=tol_price+'';

    });


    // $('#signinbutton').click(function(){
    //     var e=$('#emailsignin').val();
    //     var p=$('#passwordsignin').val();
    //
    //     var ajax=Ajax();''
    //     var pcon='emailsignin='+e+'&passwordsignin'+p;
    //
    //
    // });






    function listflightgo(data){

        if(data==null) return;

        data.forEach(function(element){
            var content='Depart time:'+element['depart_time']+'  '+'Landing time:' +element['arrive_time']+"  "+'Company:' +element['airline_name'] +'<br>'+'Max seats:'+element['max_seats']+'  '+'From:'+element['from_ap']+'  '+'To:'+element['to_ap']+'<br>'+'  '+'Price:'+element['price']+'  '+'Stop numbers:'+element['stopnum'];
            var insert="<label class='btn btn-primary center-block col-md-12 form-check-label'> <input name='from' type='checkbox' class='form-check-input' autocomplete='off' value=" +element['fid']+ "#"+element['price']+"> "+content+"</label>";

            $("#flightlist").append(insert);

        });



    }

    function listflightret(data){

        if(data==null) return;

        data.forEach(function(element){
            var content='Depart time:'+element['depart_time']+'  '+'Landing time:' +element['arrive_time']+"  "+'Company:' +element['airline_name'] +'<br>'+'Max seats:'+element['max_seats']+'  '+'From:'+element['from_ap']+'  '+'To:'+element['to_ap']+'<br>'+'  '+'Price:'+element['price']+'  '+'Stop numbers:'+element['stopnum'];
            var insert="<label class='btn btn-primary center-block col-md-12 form-check-label'> <input name='return' type='checkbox' class='form-check-input' autocomplete='off' value=" +element['fid']+ "#"+element['price']+"> "+content+"</label>";

            $("#flightlist").append(insert);

        });



    }





    //Hide the Signedout navbar when logged in
    if(localStorage["loggedin"] == 'yes'){
        $("#dashboardButton").show();
        $("#registerButton").hide();
        $("#navbar-signedout").hide();
        displaySignedIn();

    } else {
        $("#adminButton").hide();
        $("#dashboardButton").hide();
        $("#registerButton").show();
        $("#navbar-signedin").empty();
        $("#navbar-signedout").show();
    }

    if(localStorage["adminloggedin"] == 'yes'){
        $("#adminButton").show();
    }
    else {
        $("#adminButton").hide();
    }

    //Sign Up Button Clicked
    $("#signinbutton").click(function(){


        if(localStorage['loggedin'] == 'yes'){
            alert('Your already logged in!');
        }else {
            //Get Email and Password
           // var email = $("#emailsignin").val();
           // var password = $("#passwordsignin").val();
            // localStorage['loggedin']='yes';
            // localStorage['email']='tmp email';
            //Login
            // console.log(email);
            // console.log(password);

            var email="test2@test.com";
            var password='passwords';

            login(email,password).done(function(r){
                console.log(r);
                if(r ==1){
                    //Success, Set Session variables
                    //printSuccess('Login Successful!','');
                    localStorage["loggedin"] = 'yes';
                    localStorage["adminloggedin"] = 'yes';
                    localStorage["email"] = email;
                    $("#navbar-signedout").hide();
                    window.location.href='index.html';
                }
                // else if(r == 0) {
                //     localStorage["loggedin"] = 'yes';
                //     localStorage["email"] = email;
                //     $("#navbar-signedout").hide();
                //     window.location.href='index.html';
                // }
                else {
                    //Fail, print failure
                    alert('Username or password is incorrect');
                }
            });

        }
    });


    $('#signoutbtn').click(function(){
        localStorage.clear();
        location.reload();
    });
});

function login(email,password){
    //Ajax call to query to Login
    return $.ajax({
        url: "http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/customer/login.php",
        dataType: "text",
        type: "POST",
        data: {
            email : email,
            password : password
        }
    });
}



function displaySignedIn(){
    email = localStorage["email"];
    dropDownMeta = "<button class=\"btn btn-success dropdown-toggle\" type=\"\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-expanded=\"false\">"+localStorage.getItem('email')+"</button>";
    dropDownTitle = email;
    dropDownEndMeta = "<span class=\"caret\"></span></button>";
    dropDownMenu = "<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">";
    dropDownItem1 = "<li role=\"presentation\"><a id=\"changepassword\" role=\"menuitem\" tabindex=\"-1\" href=\"changepassword.html\">Update</a></li>";
    dropDownItem2 = "<li role=\"presentation\"><a id=\"history\" role=\"menuitem\" tabindex=\"-1\" href=\"history.html\">History</a></li>";
    dropDownItem3 = "<li role=\"presentation\"><a id=\"signoutbtn\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">Sign Out</a></li>";

    dropDownEndMenu = "</ul>";
    signedInDropDown = "<div class=\"dropdown\">"+dropDownMeta+dropDownTitle+dropDownEndMeta+dropDownMenu+dropDownItem1+dropDownItem2+dropDownItem3+dropDownEndMenu+"</div>";
    $("#navbar-signedin").append(signedInDropDown);
}
