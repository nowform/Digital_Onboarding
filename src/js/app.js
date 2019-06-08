import "../stylesheets/main.scss";
// require('file-loader?name=[name].[ext]!../../index.html');

import {modal}  from "./custom/modal";

 function enableButton(selector){    
    document.querySelector(selector).disabled = false;
}
// console.log(document.querySelector('body'))