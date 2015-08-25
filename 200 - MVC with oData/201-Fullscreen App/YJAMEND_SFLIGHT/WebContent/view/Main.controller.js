sap.ui.controller("yjamend_sflight.view.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Main
*/
	onInit: function() {
		var oList = this.getView().byId("list");
		oList.setModel(this.getView().getModel());
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Main
*/
//	onExit: function() {
//
//	}
	
	handleSelectedItem: function(oEvent){
		var path = oEvent.getSource().getBindingContextPath().substr(1);
		
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail", { ctxItem: path });
	}

});