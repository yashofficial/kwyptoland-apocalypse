var upgradeTime;
var seconds;

var countdownTimer;

function timer() {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);

    var remainingSeconds = seconds % 60;

    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }

    if(document.getElementById('days1')){
        document.getElementById('days1').innerHTML    = pad(days);
        document.getElementById('hours1').innerHTML   = pad(hours);
        document.getElementById('minutes1').innerHTML = pad(minutes);
        document.getElementById('seconds1').innerHTML = pad(remainingSeconds);
    }

    if(document.getElementById('days2')){
        document.getElementById('days2').innerHTML    = pad(days);
        document.getElementById('hours2').innerHTML   = pad(hours);
        document.getElementById('minutes2').innerHTML = pad(minutes);
        document.getElementById('seconds2').innerHTML = pad(remainingSeconds);
    }

    if (seconds > 0){
        seconds--;   }

    if (seconds2 > 0) {
        seconds2--;    }
}

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




