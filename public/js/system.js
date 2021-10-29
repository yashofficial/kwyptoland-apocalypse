AOS.init({
once: true,
});

const ethereumButton = document.querySelector('.enableEthereumButton');

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    return account;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))jQuery/;
    return re.test(String(email).toLowerCase());
}


function scrollto(elem){

    window.scrollTo({
        top: jQuery(elem).offset().top,
        left: 0,
        behavior: 'smooth'
    })

return;
}


function subscribe(){

    jQuery("#status").html('');

    var email = jQuery("#email").val();

    if(!validateEmail(email)){jQuery("#status").html('Please enter valid email!');return;}

    jQuery("#subscribe").fadeOut('fast');
    jQuery("#email").fadeOut('fast');

        jQuery.ajax({
            type: "POST",
            url: "subscribe.php",
            dataType: "text",
            data: {"email": email},

            success: function(data){

            if(data=="1"){jQuery("#status").html('Too many subscriptions today!');return;}
            if(data=="2"){jQuery("#status").html('Your e-mail has been successfully added to the maillist.');return;}

            }
        });

return;
}


jQuery(document).ready(function(){

        jQuery("#logo-holder").click(function(){

            window.location = "./";

        });


        if(ethereumButton){
            ethereumButton.addEventListener('click', function(){
                if(typeof window.ethereum !== 'undefined'){
                    jQuery(ethereumButton).css({"visibility": "hidden"});
                    getAccount();
                }
            });
        }

        if(document.getElementById('days1')){
            jQuery.ajax({
                type: "GET",
                url: "time.php",
                dataType: "text",
                success: function(data){
                    upgradeTime = data;
                    seconds     = data;
                    countdownTimer = setInterval('timer()', 1000);
                }
            });
        };


        jQuery('.team-member').mouseover(function(){
            jQuery(this).find('.line2').fadeIn('fast');
        });

        jQuery('.team-member').mouseleave(function(){
            jQuery(this).find('.line2').fadeOut('fast');
        });


});

jQuery(document).ready(function(){
    jQuery('#myBtn').on( "click", function() {
        jQuery('#myModal').show();
    });
    jQuery('#close').on( "click", function() {
        jQuery('#myModal').hide();
    });
});

