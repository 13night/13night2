(function() {
    "use strict";

    var KskRealtorApp = window.KskRealtorApp = { };
    
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    DevExpress.devices.current({ platform: "generic" });

    $(function() {
        KskRealtorApp.app = new DevExpress.framework.html.HtmlApplication(
		{
            namespace: KskRealtorApp,
            navigationType: 'empty',
        });
        
        KskRealtorApp.app.router.register(":view", { view: "home" });
        KskRealtorApp.app.navigate();
    });
    
})();
