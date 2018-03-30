function validEmailAddress(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
};




$("document").ready(function() {

        $("#confirmbutton").click(function(){



            ret={
                'email':document.getElementById("Email").value.toString(),
                'remail':document.getElementById("Repeat Email").value.toString(),
                'password':document.getElementById("Password").value.toString(),
                'repassword':document.getElementById("Repeat Password").value.toString(),
                'first name':document.getElementById("First Name").value.toString(),
                'last name':document.getElementById("Last Name").value.toString(),
                'Phone number':document.getElementById("Phone Number").value.toString(),
                'address':$("#address-line1").val()+$("#address-line2").val(),
                'city':$("#city").val(),
                'state':$("#state").val(),
                'country':$("#country").val(),

            };


            console.log(ret);




         if(ret['password']!=ret['repassword']){
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


            var ajax=Ajax();
            var url="http://172.31.131.185/539/register.php";
            var pcon='email='+ret['email']+'&password='+ret['password']+'&first_name='+ret['first name']+'&last_name='+ret['last name']+'&phone_number='+ret['Phone number']+'&address='+ret['address']+'&city='+ret['city']+'&state='+ret['state']+'&country='+ret['country'];
            console.log(url+pcon);
            ajax.post(url,pcon,function(data){

                alert(data);

            });

            alert('checkcheck');

        });
    }
);

