

// Google Analytics
(function() {
    var scriptGA = document.createElement("script");
    scriptGA.async = true;
    scriptGA.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID";
    document.head.appendChild(scriptGA);

    scriptGA.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_TRACKING_ID');
    };
})();

// Facebook Pixel
(function() {
    var scriptFB = document.createElement("script");
    scriptFB.async = true;
    scriptFB.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(scriptFB);

    scriptFB.onload = function() {
        window.fbq = function() {
            fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
        };
        if (!window._fbq) window._fbq = fbq;
        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = '2.0';
        fbq.queue = [];
        fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
        fbq('track', 'PageView');
    };
})();

leadForm.addEventListener('submit',()=>{
    alert('Form Filled Succesfully')
     
})
