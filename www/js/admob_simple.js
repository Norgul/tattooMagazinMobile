var admobid = {};

// TODO: replace the following ad units with your own
if (/(android)/i.test(navigator.userAgent)) {
    admobid = { // for Android
/*
        //fake
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
*/

         //real
         banner: 'ca-app-pub-9425909017099565/2278575739',
         interstitial: 'ca-app-pub-9425909017099565/3755308937'

    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-9425909017099565/7999195339',
        interstitial: 'ca-app-pub-9425909017099565/1952661737'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-9425909017099565/7999195339',
        interstitial: 'ca-app-pub-9425909017099565/1952661737'
    };
}

function initApp() {
    if (!AdMob) {
        alert('admob plugin not ready');
        return;
    }

    // this will create a banner on startup
    AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        overlap: false,
        //isTesting: true, // TODO: remove this line when release
        offsetTopBar: false,
        bgColor: 'black'
    });

    // this will load a full screen ad on startup
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        //isTesting: true, // TODO: remove this line when release
        autoShow: true
    });
}

if (( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
