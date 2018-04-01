
$("document").ready(function(){

    $('#carbtn').click(function(){
        var number=(localStorage.getItem('flightnumber'));

        for(var i =1; i<=number; i ++){
            console.log(localStorage.getItem(i+''));
        }
    })


});