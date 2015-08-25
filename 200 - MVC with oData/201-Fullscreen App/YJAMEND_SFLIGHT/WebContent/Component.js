jQuery.sap.declare("yjamend_sflight.Component");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("yjamend_sflight.Component", {
	metadata : {
		"name" : "SFLIGHT Report",
		"version" : "1.0",
		"dependencies" : {
			"libs" : ["sap.m"]
		},

		"rootView": "yjamend_sflight.view.App",
		
		"config" : {			
			"serviceConfig" : {
				name: "ZTEST_SFLIGHT_SRV",
				serviceUrl: "/sap/opu/odata/sap/ZTEST_SFLIGHT_SRV/"
			}
		},

		routing: {
			config: {
				viewType : "XML",
				viewPath: "yjamend_sflight.view",  // common prefix
				targetControl: "app",
				targetAggregation: "pages",
				clearTarget: false
			},
			routes:
				[{
					pattern: "",
					name: "Main",
					view: "Main"
				},
				{
					pattern: "Detail/{ctxItem}",
					name: "Detail",
					view: "Detail"
				}]
		}
	},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		var oServiceConfig = this.getMetadata().getConfig()["serviceConfig"];
		var sServiceUrl = oServiceConfig.serviceUrl;

		// always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var rootPath = jQuery.sap.getModulePath("yjamend_sflight");

		// if proxy needs to be used for local testing (i.e. Tomcat)
		if (jQuery.sap.getUriParameters().get("proxyOn") === "true") {
			sServiceUrl = rootPath + "/proxy" + sServiceUrl;
		}
		
		// set data model
		var m = new sap.ui.model.odata.ODataModel(sServiceUrl);
		this.setModel(m);
				
		// patch the router
		var oRouter = this.getRouter();
		this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(oRouter);
		oRouter.initialize();
	}
});

