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


        var ajax=Ajax();
        var url="http://172.31.131.185/539/register.php";
        var pcon='origin='+org+'&des='+des+'&start_date='+start_date+'&ret_date='+ret_date+'&stop='+stop+'&oneway='+oneway;
        console.log(url+pcon);

        var data=[
            {
                'flightcode':1245,
                 'departtime':12345,
                 'landingtime':123456,
                 'company':123132123,
                 'stop':123123

            },

        {
            'flightcode':1245,
                'departtime':12345,
                'landingtime':123456,
                'company':123132123,
                'stop':123123

        }


    ]

        listflight(data);

        ajax.post(url,pcon,function(data){

            alert(data);

        });

       });

    $('#next').click(function(){
        var sel=$('input[name="item"]:checked');
        localStorage.setItem('flightnumber', sel.length);
        var id=1;
        sel.each(function(){
            console.log(this.value);
            localStorage.setItem(id+'',this.value);
            id++;
        });

    });


    $('#signinbutton').click(function(){
        var e=$('#emailsignin').val();
        var p=$('#passwordsignin').val();

        var ajax=Ajax();
        var pcon='emailsignin='+e+'&passwordsignin'+p;


    })


    function listflight(data){
        data.forEach(function(element){
            var content='depart time='+element['departtime']+' '+'landing time=' +element['landingtime']+'company='+ ' ' +element['company'];
            var insert="<label class='btn btn-primary col-xs-12 form-check-label'> <input name='item' type='checkbox' class='form-check-input' autocomplete='off' value=" +element['flightcode']+ "> "+content+"</label>";

            $("#flightlist").append(insert);

        });



    }

});





