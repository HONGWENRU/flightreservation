
var id=1;

$('document').ready(function()
{


    $('#addpa').click(function () {

    var insert= '<div class="controls controls-row">'+
            '<div class="col-md-4">'+
            '<span>First Name</span>'+
        "<input id='fir-na-"+id+"' class='form-control' placeholder='First Name' type='text' name='firstname2' >"+
            '</div>'+
            "<div class='col-md-4'>"+
            "<span>Last Name</span>"+
        "<input id='las-na-"+id+"' class='form-control' placeholder='Last Name' type='text' name='lastname2'>"+
            '</div>'+
            "<div class='col-md-4'>"+
            "<span>Date of birth</span>"+
        "<input id='dob-"+id+"' type='date' class='form-control'  id='date'>"+
            '</div>'+

            '</div>';



    var insert2=   ' <div class="col-md-3">\
            <label class="dropdown-header" style="font-size: large;">Meal</label>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox1" value="French">\
            <label class="form-check-label" for="inlineCheckbox1">French</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Chinese">\
            <label class="form-check-label" for="inlineCheckbox2">Chinese</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Korean">\
            <label class="form-check-label" for="inlineCheckbox3">Korean</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Japanese">\
            <label class="form-check-label" for="inlineCheckbox4">Japanese</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+'class="form-check-input" type="checkbox" id="inlineCheckbox5" value="Italian">\
            <label class="form-check-label" for="inlineCheckbox5">Italian</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox6" value="Indian">\
            <label class="form-check-label" for="inlineCheckbox6">Indian</label>\
            </div>\
            </div>';

        var insert3= '<div class="col-md-3">\
            <label class="dropdown-header" style="font-size: large;">Meal style</label>\
        <div class="form-check form-check-inline">\
            <input name=meal-style-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox7" value="Low-calorie">\
            <label class="form-check-label" for="inlineCheckbox1">Low-calorie</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-style-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox8" value="gluten-free">\
            <label class="form-check-label" for="inlineCheckbox2">gluten-free</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-style-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox9" value="low-sodium">\
            <label class="form-check-label" for="inlineCheckbox3">low-sodium</label>\
            </div>\
            <div class="form-check form-check-inline">\
            <input name=meal-style-'+id+' class="form-check-input" type="checkbox" id="inlineCheckbox10" value="low-sodium">\
            <label class="form-check-label" for="inlineCheckbox4">bland</label>\
            </div>\
        </div>';


        var insert4= ' <div class="col-md-3">\
            <label class="dropdown-header" for="food" style="font-size: large;">Food</label>\
            <select class="selectpicker" id="food-'+id+'">\
            <option>vegan</option>\
            <option>non</option>\
            </select>\
            </div>';

         var insert5='<div class="col-md-3">\
             <label class="dropdown-header" for="seat-type" style="font-size: large;">seat type</label>\
        <select class="selectpicker" id="seat-type-'+id+'">\
            <option>aisle</option>\
            <option>window</option>\
            </select>\
            </div>';



        var to='<div style="border-style: solid;overflow: auto" >'+insert+insert2+insert3+insert4+insert5+'</div>';


        $('#pa-li').append(to);



       id++;

    });
});

$('document').ready(function(){


    var ret={};
    var data=[];




    $('#check-out').click(function(){

        //console.log(localStorage['totalprice']);

        var totalprice=parseInt(localStorage['totalprice'])*id;

        ret['email']=localStorage['email'];

        ret['start_date']=localStorage['start_date'];

        ret['numberofpassager']=id;


        ret['total_cost']=totalprice+'';

        var flightfromlist=[];
        var flightretlist=[];

        for(var ii =0; ii<parseInt(localStorage.getItem('flightfromnumber')); ii ++){
            // ret['flight'+ii]=localStorage.getItem('flight'+ii);
            flightfromlist.push(localStorage.getItem('flightfrom'+ii))
        }

        for(var ii =0; ii<parseInt(localStorage.getItem('flightreturnnumber')); ii ++){
            // ret['flight'+ii]=localStorage.getItem('flight'+ii);
            flightretlist.push(localStorage.getItem('flightret'+ii))
        }

        ret['flightfromlist']=flightfromlist;
        ret['flightretlist']=flightretlist;

        for(var i =0 ; i<id; i++){
            var fir=$('#fir-na-'+i).val();
            var last=$('#las-na-'+i).val();
            var dob=$('#dob-'+i).val();
            var melname="input[name='meal-"+i+"']:checked";
            var mel=$(melname);
            var melname_data=[];
            mel.each(function(){
                melname_data.push(this.value);
            });

            var mel_sty_name = "input[name='meal-style-"+i+"']:checked";
            var mel_sty=$(mel_sty_name);

            var mel_sty_data=[];

            mel_sty.each(function(){
                mel_sty_data.push(this.value);
            });

            var food=$('#food-'+i+'').val();
            var seat=$('#seat-type-'+i+'').val();


           var tmp={};

            tmp['first']=fir;
            tmp['last']=last;
            tmp['dob']=dob;
            tmp['melname_data']=melname_data;
            tmp['mel_sty_data']=mel_sty_data;
            tmp['food']=food;
            tmp['seat']=seat;


          data.push(tmp);



        }

        ret['data']=data;

       console.log(ret);


       var txt='Your total cost is '+totalprice;

       var con=confirm(txt);

       if(con==true) {


          $.ajax({
               url: 'http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/customer/reservation.php',
               dataType: "json",
               type: "POST",
               data: ret,
               success:function(data){
                   console.log(data);
                   if(data=='1'){
                       alert('Successful!!!!');
                   }
                   else{
                       alert('Something wrong');
                   }
               }
           });



       }else return ;


    });

});






