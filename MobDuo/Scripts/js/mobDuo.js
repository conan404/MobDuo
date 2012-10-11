var MobDuo = {
    topBannerId : 'topBanner',
    bottomBannerId : 'bottomBanner',
    containerId : 'adContainer',

    adloc : '/Ads/flat/ExampleFlatAd.jpg',

    initialiseAds : function (){
        

        $(this.topBannerId).append(this.adloc);    

        $(this.bottomBannerId).append(this.adloc);    
    }   
}

