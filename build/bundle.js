function toggleButton(selector){    
    document.querySelector(selector).disabled = !document.querySelector(selector).disabled ;
}

function activateCard(){
    // Activat card code here

    document.querySelector('#body-not-activated').classList.add('hidden');
    document.querySelector('#body-activated').classList.remove('hidden');
    document.querySelector('#card-activation-text').innerHTML = 'Card Activated';
    changeStep('2');
}

function changeStep(num){
    if(document.querySelector('.do-step-container.active')){
        document.querySelector('.do-step-container.active').classList.remove('active');
    }
    if(document.querySelector('.do-step-container.in-progress')){
        document.querySelector('.do-step-container.in-progress').classList.remove('in-progress');
    }
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
            }
            break;
                
            
        default:
            break;
    }
}

function generateOtp(){
    // Generate Otp Here

    window.location.hash = "generateOtp";
}
function swicthGeneratedPin(){
    document.querySelector('#body-before-otp').classList.add('hidden');
    document.querySelector('#body-after-otp').classList.remove('hidden');
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
function validatePin(){
    if(document.querySelector("#confirm-pin-input > input").value.length >1){
        if(document.querySelector("#new-pin-input > input").value != document.querySelector("#confirm-pin-input > input").value){
            document.querySelector("#step2-pin-button").disabled = true;
            
        }else{
            document.querySelector("#step2-pin-button").disabled = false;                
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