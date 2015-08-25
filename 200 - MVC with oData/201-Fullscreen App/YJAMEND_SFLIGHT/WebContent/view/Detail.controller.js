sap.ui.controller("yjamend_sflight.view.Detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
	onInit: function() {
		sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this.handleRoutePatternMatched, this);
	},
	
	handleRoutePatternMatched: function(oEvent) {
		if (oEvent.getParameter("name") === "Detail") {
			var oView = this.getView();
			
			var sCtxItem = oEvent.getParameter("arguments").ctxItem;
			var oCtx = new sap.ui.model.Context(oView.getModel(), '/' + sCtxItem);
			oView.setBindingContext(oCtx);
		}
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
*/
//	onExit: function() {
//
//	}

});