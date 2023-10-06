"use strict";

const $ = function(id) {
    return document.getElementById(id);
};

const getQueryStringParmValue = (parmKey) => {            // get value of query string parameter, using parameter key
    const queryString = window.location.search;           // retrieve whole queryString
    const urlParams = new URLSearchParams(queryString);    // retrieve the list of parameters 
    // get param value
    const paramValue = urlParams.get(parmKey);
    console.log("parmKey/value" + parmKey + ":" + paramValue);
    return paramValue;
};

const confirmData = function() {
    $("confirm_form").submit();
};

window.onload = function() {
    $("firstName").innerHTML = "First Name: " + getQueryStringParmValue("first_name");
    $("emailAddress").innerHTML = "Email Address: " + getQueryStringParmValue("email_address1");

    $("confirmBtn").onclick = confirmData;
};