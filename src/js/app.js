import "../stylesheets/main.scss";
// require('file-loader?name=[name].[ext]!../../index.html');

import {modal}  from "./custom/modal";

    function toggleButton(selector){    
        document.querySelector(selector).disabled = !document.querySelector(selector).disabled ;
    }

    function activateCard(){
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
                // not used
                if(document.querySelector("#step-card-activation").classList.contains('done')){
                    document.querySelector("#step-card-activation").classList.add('active');
                }
                else{
                    document.querySelector("#step-card-activation").classList.add('in-progress','active');
                    document.querySelector("#step-card-activation").classList.remove('done');
                }
                break;
            
            case '2':
                // change from step 1 to 2
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
                // change from step 1 to 2
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
                    // change from step 1 to 2
                document.querySelector("#step-estate-sub").classList.add('done');
                document.querySelector("#step-estate-sub").classList.remove('in-progress');
                document.querySelector("#step-estate-sub .do-step-heading-text").classList.add('clickable');
                document.querySelector("#step-international-usage").classList.add('in-progress');
                break;
                    
                
            default:
                break;
        }
    }

    function generateOtp(){
        window.location.hash = "generateOtp";
    }
    function swicthGeneratedPin(){
        document.querySelector('#body-before-otp').classList.add('hidden');
        document.querySelector('#body-after-otp').classList.remove('hidden');
    }
    function validateOtp(inputEl){
        if(inputEl.value.length == 6){
            inputEl.blur();
            window.location.hash = "#";
            swicthGeneratedPin();
            // Write code for OTP check here 
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
        document.querySelector('#body-after-otp').classList.add('hidden');
        document.querySelector('#body-pin-generated').classList.remove('hidden');
        document.querySelector('#generate-pin-text').innerHTML = 'PIN Generated';
        changeStep('3');
    }

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