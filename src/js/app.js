import "../stylesheets/main.scss";
// require('file-loader?name=[name].[ext]!../../index.html');

// import {modal}  from "./custom/modal";

function toggleButton(selector){    
    document.querySelector(selector).disabled = !document.querySelector(selector).disabled ;
}

function activateCard(){
    // Activat card code here

    document.querySelector('#body-not-activated').classList.add('hidden');
    document.querySelector('#body-activated').classList.remove('hidden');
    document.querySelector('#body-not-activated-set2').classList.add('hidden');
    document.querySelector('#body-activated-set2').classList.remove('hidden');
    document.querySelector('#card-activation-text').innerHTML = 'Card Activated';
    changeStep('2');
}

function changeStep(num){
    if(document.querySelector('.do-step-container.active')){
        document.querySelector('.do-step-container.active').classList.remove('active');
    }
    // if(document.querySelector('.do-step-container.in-progress')){
    //     document.querySelector('.do-step-container.in-progress').classList.remove('in-progress');
    // }
    switch (num) {
        case '1':
            // change to 1
            if(document.querySelector("#step-card-activation").classList.contains('done')){
                document.querySelector("#step-card-activation").classList.add('active');
            }
            else{
                document.querySelector("#step-card-activation").classList.add('in-progress','active');
                document.querySelector("#step-card-activation").classList.remove('done');
            }
            break;
        
        case '2':
            // change to 2
            if(document.querySelector("#step-generate-pin").classList.contains('done')){
                document.querySelector("#step-generate-pin").classList.add('active');                
            }
            else{
                document.querySelector("#step-card-activation").classList.add('done');
                document.querySelector("#step-card-activation").classList.remove('in-progress','active');
                document.querySelector("#step-card-activation .do-step-heading-text").classList.add('clickable');
                document.querySelector("#step-generate-pin").classList.add('in-progress','active');
                document.querySelector("#step-generate-pin .do-step-heading-text").classList.add('clickable');
            }

            break;
        
        case '3':
            // change to 3
            if(document.querySelector("#step-estate-sub").classList.contains('done')){
                document.querySelector("#step-estate-sub").classList.add('active');                
            }
            else{
                document.querySelector("#step-generate-pin").classList.add('done');
                document.querySelector("#step-generate-pin").classList.remove('in-progress');
                document.querySelector("#step-generate-pin .do-step-heading-text").classList.add('clickable');
                document.querySelector("#step-estate-sub").classList.add('in-progress','active');
                document.querySelector("#step-estate-sub .do-step-heading-text").classList.add('clickable');
            
            }
            break;
        
        case '4':
                // change to 4
            if(document.querySelector("#step-international-usage").classList.contains('done')){
                document.querySelector("#step-international-usage").classList.add('active');                
            }
            else{
                document.querySelector("#step-estate-sub").classList.add('done');
                document.querySelector("#step-estate-sub").classList.remove('in-progress');
                document.querySelector("#step-estate-sub .do-step-heading-text").classList.add('clickable');
                document.querySelector("#step-international-usage").classList.add('in-progress','active');
                document.querySelector("#step-international-usage .do-step-heading-text").classList.add('clickable');
            
            }
            break;

        case '5':
                // change to 5
            if(document.querySelector("#step-do-confirmation").classList.contains('done')){
                document.querySelector("#step-do-confirmation").classList.add('active');                
            }
            else{
                document.querySelector("#step-international-usage").classList.add('done');
                document.querySelector("#step-international-usage").classList.remove('in-progress');
                document.querySelector("#step-international-usage .do-step-heading-text").classList.add('clickable');
                document.querySelector("#step-do-confirmation").classList.add('in-progress','active');
                document.querySelector("#step-do-confirmation .do-step-heading-text").classList.add('clickable');
            
            }
            document.querySelector('#finish-bottom-box').classList.add('show');
            break;
                
            
        default:
            break;
    }
    const targetEle = document.querySelector(".do-step-container.in-progress");
    if(targetEle  && window.outerWidth < 768){
        document.querySelector("html").scrollTop = targetEle.offsetTop + 200;
    }
    // targetEle.style.marginTop = '20px';
    // targetEle.scrollIntoView({behaviour:"smooth"})
    
}

function generateOtp(){
    // Generate Otp Here
    document.querySelector('#otp-input > input').value = '';
    window.location.hash = "generateOtp";
}
function generateOtpEmail(){
    // Generate Otp Here
    document.querySelector('#otp-email-input > input').value = '';
    window.location.hash = "generateOtpEmail";
}
function swicthGeneratedPin(){
    document.querySelector('#body-before-otp').classList.add('hidden');
    document.querySelector('#body-pin-generated').classList.add('hidden');
    document.querySelector('#body-after-otp').classList.remove('hidden');
    document.querySelector('#new-pin-input > input').value = '';
    document.querySelector('#confirm-pin-input > input').value = '';
}


function validateOtp(inputEl){
    
    if(inputEl.value.length == 6){
        // Get Otp Pin here

        // validate if it matches the OTP 
        if(true){
            // replace true with otp condition as per your requirement
            inputEl.blur();
            window.location.hash = "#";
            swicthGeneratedPin();
        }
        else{
            // incase OTP is not correct
            document.querySelector('#otp-input > input').value = '';
        }
    }
}
function swicthToUpdateEmail(){
    document.querySelector('#body-before-subscription-set2').classList.add('hidden');
    document.querySelector('#body-after-subscription-set2').classList.add('hidden');
    document.querySelector('#body-update-email-set2').classList.remove('hidden');

    document.querySelector('#body-before-subscription-set3').classList.add('hidden');
    document.querySelector('#body-after-subscription-set3').classList.add('hidden');
    document.querySelector('#body-update-email-set3').classList.remove('hidden');

    document.querySelector('#body-before-subscription-set4').classList.add('hidden');
    document.querySelector('#body-after-subscription-set4').classList.add('hidden');
    document.querySelector('#body-update-email-set4').classList.remove('hidden');
    document.querySelector('#updated-email > input').value = '';
}

function validateOtpEmail(inputEl){
    
    if(inputEl.value.length == 6){
        // Get Otp Pin here

        // validate if it matches the OTP 
        if(true){
            // replace true with otp condition as per your requirement
            inputEl.blur();
            window.location.hash = "#";
            swicthToUpdateEmail();
        }
        else{
            // incase OTP is not correct
            document.querySelector('#otp-input > input').value = '';
        }
    }
}
function validateUpdatedEmail(el){
    var re = /\S+@\S+\.\S+/;
    if(re.test(el.value)){
        console.log(el);
        document.querySelector("#update-email-button").disabled = false;
        document.querySelector("#update-email-button-set4").disabled = false;
        document.querySelector("#update-email-button-set3").disabled = false;
    }else{
        document.querySelector("#update-email-button").disabled = true;
        document.querySelector("#update-email-button-set4").disabled = true;
        document.querySelector("#update-email-button-set3").disabled = true;
    }
}
function emailUpdated(value){

    document.querySelector('#body-before-subscription-' + value).classList.add('hidden');
    document.querySelector('#body-after-subscription-' + value).classList.add('hidden');
    document.querySelector('#body-update-email-' + value).classList.add('hidden');   
    document.querySelector('#body-after-update-email-' + value).classList.remove('hidden');
    // changeStep('4');   
    if(value == 'set3' || value == 'set4'){
        document.querySelector('.step-sub-text.' + value).innerHTML = "E-mail ID not Verified";
        document.querySelector('.step-sub-text.' + value).classList.add('grey');
    }
}
function cancelUpdate(value){
    if(value == 'set2'){
        document.querySelector('#body-before-subscription-set2').classList.remove('hidden');
        document.querySelector('#body-after-subscription-set2').classList.add('hidden');
        document.querySelector('#body-update-email-set2').classList.add('hidden');   
        document.querySelector('#body-after-update-email-set2').classList.add('hidden');
    }
    if(value == 'set3'){
        document.querySelector('#body-before-subscription-set3').classList.remove('hidden');
        document.querySelector('#body-after-subscription-set3').classList.add('hidden');
        document.querySelector('#body-update-email-set3').classList.add('hidden');   
        document.querySelector('#body-after-update-email-set3').classList.add('hidden');
    }
    if(value == 'set4'){
        document.querySelector('#body-before-subscription-set4').classList.remove('hidden');
        document.querySelector('#body-after-subscription-set4').classList.add('hidden');
        document.querySelector('#body-update-email-set4').classList.add('hidden');   
        document.querySelector('#body-after-update-email-set4').classList.add('hidden');
    }
}
function validatePin(){
    const newPinEl = document.querySelector("#new-pin-input > input");
    const confirmPinEl = document.querySelector("#confirm-pin-input > input");
    
     
    if(newPinEl.value.length >= 4){
        if(newPinEl.value.length > 4){
            newPinEl.value = newPinEl.value.slice(0,4);
        }
        confirmPinEl.focus();
    }

    if(confirmPinEl.value.length >= 4){
        if(confirmPinEl.value.length > 4){
            confirmPinEl.value = confirmPinEl.value.slice(0,4);
        }
    }
    if(newPinEl.value.length == 4 && confirmPinEl.value.length == 4){
        if(newPinEl.value != confirmPinEl.value){
            document.querySelector("#step2-pin-button").disabled = true;
        }else{
            document.querySelector("#step2-pin-button").disabled = false;  
            confirmPinEl.blur();
        }
        
    }
}

function generatePin(){
    // Generate Pin Code here
    document.querySelector('#body-after-otp').classList.add('hidden');
    document.querySelector('#body-pin-generated').classList.remove('hidden');
    document.querySelector('#generate-pin-text').innerHTML = 'PIN Generated';
    changeStep('3');
}
function estateSubscription(){

    // activate E statement usage here;


    document.querySelector('#body-before-subscription').classList.add('hidden');
    document.querySelector('#body-after-subscription').classList.remove('hidden');
    document.querySelector('#estate-sub-text').innerHTML = 
    `
        E-Statement Subscribed 
        <span class="reward-sub-text grey"> <img src="./assets/icons/star-grey.svg" alt=""> 100 Reward points claimed</span>
    `;
    window.location.hash = '';
    changeStep('4');
}
function set3Subscribe(){
    document.querySelector('#body-before-subscription-set3').classList.add('hidden');
    document.querySelector('#body-after-subscription-set3').classList.remove('hidden');
    // window.location.hash = '';
    document.querySelector('.step-link.subscribed').classList.remove('hide');
    document.querySelector('.step-link.not-subscribed').classList.add('hide');
    changeStep('4'); 
}
function set4Subscribe(){
    document.querySelector('#body-before-subscription-set4').classList.add('hidden');
    document.querySelector('#body-after-subscription-set4').classList.remove('hidden');
    document.querySelector('.step-link.subscribed').classList.remove('hide');
    document.querySelector('.step-link.not-subscribed').classList.add('hide');
    // window.location.hash = '';
    changeStep('4'); 
}
function verifyEsub(){
    document.querySelector('#body-before-subscription-set2').classList.add('hidden');
    document.querySelector('#body-after-subscription-set2').classList.remove('hidden');
    window.location.hash = '';
    changeStep('4'); 
}
function activateInternational(){
    // activate international usage here;

    document.querySelector('#body-before-IUActivation').classList.add('hidden');
    document.querySelector('#body-after-IUActivation').classList.remove('hidden');
    document.querySelector('#international-usage-text').innerHTML =  `International Usage Activated`;
    window.location.hash = '';
    changeStep('5');
    document.querySelector('#finish-bottom-box').classList.add('show');
}
function callMeBack(){

}




window.addEventListener('keyup',(e)=>{
    if(e.keyCode == 27){
        window.location.href = "#";
    }
})

    window.callMeBack = callMeBack;
    window.activateInternational = activateInternational;
    window.estateSubscription = estateSubscription;
    window.generatePin = generatePin;
    window.validatePin = validatePin;
    window.validateOtp = validateOtp;
    window.generateOtp = generateOtp;
    window.changeStep = changeStep;
    window.toggleButton = toggleButton;
    window.activateCard = activateCard;
    window.addEventListener('keyup',(e)=>{
        if(e.keyCode == 27){
            window.location.href = "#";
        }
    })
// console.log(document.querySelector('body'))