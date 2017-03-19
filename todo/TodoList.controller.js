sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("todo.TodoList", {
        "onInit": function() {
            var me = this;
            this.getView().addEventDelegate({
                "onBeforeRendering": function() {
                    me.getOwnerComponent().getModel().ownerDetermined().then(function() {
                        me.byId("deleteButton").setVisible(true);
                    });
                }
            });
        },
        "onDeleteItem": function(oEvent) {
            this.getOwnerComponent().getModel().removeItem(oEvent.getSource().getBindingContext().getObject());
        },
        "onDelete": function() {
            this.getOwnerComponent().getModel().clear();
        },
        "onSubmitCreateNewTodo": function(oEvent) {
            this.onPressCreateNewTodo(oEvent);
        },
        "onPressCreateNewTodo": function(oEvent) {
            this.getOwnerComponent().getModel().addItem({
                "created": new Date().toISOString(),
                "title": this.byId("newTodoInput").getValue()
            });
            this.byId("newTodoInput").setValue("");
        }
    });
});