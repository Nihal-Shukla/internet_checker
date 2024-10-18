let message=document.getElementById("message")
let messageOnline = ()=> {
    message.textContent="Internet Connection Available";
    message.style.cssText = "color:green";
}

let messageOffline = ()=> {
    message.textContent="Your Internet is not Connected";
    message.style.cssText = "color :red";
};
if (window.navigator.onLine)
{
    messageOnline();
}

else
{
    messageOffline();
}