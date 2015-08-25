sap.ui.controller("yjamend_sflight_02.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Main
*/
	onInit: function() {
		sap.ui.core.UIComponent.getRouterFor(this).attachRoutePatternMatched(this.handleRoutePatternMatched, this);
	},
	
	handleRoutePatternMatched: function(oEvent){
		if (oEvent.getParameter("name") === "Master") {
			var oList = this.getView().byId("list");
			oList.setModel(this.getView().getModel());
		}
	},
	
	handleSelectedItem: function(oEvent){
		var path = oEvent.getSource().getBindingContextPath().substr(1);
		
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail", { ctxItem: path });
	}

});