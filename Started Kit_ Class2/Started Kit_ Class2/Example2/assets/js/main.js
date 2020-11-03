console.log("JS is connected!")

let myDevice = window.navigator.userAgent;

console.log(myDevice);

//indexOf looks at what myDevice is equal to Windows (use indexOf because text is an array)
if (myDevice.indexOf("Windows") > -1) {
    window.location.replace("assets/html/desktop.html");
}

if (myDevice.indexOf("Windows") > -1) {
    window.location.replace("assets/html/mobile.html");
}