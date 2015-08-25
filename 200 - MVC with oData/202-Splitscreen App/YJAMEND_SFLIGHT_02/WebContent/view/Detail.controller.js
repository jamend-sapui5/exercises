sap.ui.controller("yjamend_sflight_02.view.Detail", {

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
});