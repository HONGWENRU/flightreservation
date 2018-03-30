
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

    $('#check-out').click(function(){

        for(var i =0 ; i<id; i++){
            var fir=$('#fir-na-'+i).val();
            var last=$('#las-na-'+i).val();
            var dob=$('#dob-'+i).val();
            var melname="input[name='meal-"+i+"']:checked";
            var mel=$(melname)
            var mel_sty_name = "input[name='meal-style-"+i+"']:checked";
            var mel_sty=$(mel_sty_name)
            var food=$('#food-'+i+'').val();
            var seat=$('#seat-type-'+i+'').val();

           console.log(food);
           console.log(seat)



        }

    });

});






