function validEmailAddress(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
}



$('document').ready(function(){

    $('#updatebutton').click(function(){

        var ret={
            'email':document.getElementById("Email").value.toString(),
            'remail':document.getElementById("Repeat Email").value.toString(),
            'passwords':document.getElementById("Password").value.toString(),
            'repassword':document.getElementById("Repeat Password").value.toString(),
            'first name':document.getElementById("First Name").value.toString(),
            'last name':document.getElementById("Last Name").value.toString(),
            'Phone number':document.getElementById("Phone Number").value.toString(),
            'address':$("#address-line1").val()+$("#address-line2").val(),
            'city':$("#city").val(),
            'state':$("#state").val(),
            'country':$("#country").val(),
            'zipcode':$('#zip').val()

        };






        if(ret['passwords']!=ret['repassword']){
            alert('pass word and repeart password are not match');
            return;
        }

        if(ret['email']!=ret['remail']){
            alert('email and repeart email are not match');
            return;
        }

        if(!validEmailAddress(ret['email'])){
            alert('wrong email format');
            return ;
        }

        console.log(ret);

        ret['old_email']=localStorage.getItem('email');

        var re= $.ajax({
            url: "http://ec2-52-11-70-247.us-west-2.compute.amazonaws.com/api/manager/edit_customer.php",
            dataType: "json",
            type: "POST",
            data:ret,
            success: function(data){
                console.log(data);
                alert('edit customer information in succ.')
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

            }

            // success: function(data){
            //
            //     if(data=='suceess'){
            //         alert('Successful');
            //     }else{
            //
            //
            //         alert('Something wrong');
            //     }
            //
            //
            // }

        });



    });


});