sap.ui.define([
    "incentergy/model/XMPPJSONPatchSyncModel",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(XMPPJSONPatchSyncModel) {
    "use strict";

    // Taken from: https://github.com/SAP/openui5/blob/master/src/sap.m/test/sap/m/demokit/worklist/webapp/test/unit/controller/App.controller.js


    QUnit.module("incentergy/model/XMPPJSONPatchSyncModel.js", {

        beforeEach: function() {
            sinon.config.useFakeTimers = false;
        },

        afterEach: function() {}
    });

    /*QUnit.test("Test function constructor of XMPPJSONPatchSyncModel", function(assert) {
        expect(3);
        var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel("wss://localhost:5280/websocket", "7e5863eb-e23b-5489-4f32-222372b5836b");

        assert.ok(oXMPPJSONPatchSyncModel._oData);
        assert.ok(oXMPPJSONPatchSyncModel.sNode == "7e5863eb-e23b-5489-4f32-222372b5836b");
        assert.ok(oXMPPJSONPatchSyncModel.connection);

        oXMPPJSONPatchSyncModel.attachEvent("connectionStatus", function(oEvent) {
            if (oEvent.getParameter("status") == "CONNECTED") {
                oXMPPJSONPatchSyncModel.deleteNode("7e5863eb-e23b-5489-4f32-222372b5836b");
            }
        });
    });*/
    QUnit.test("Test function onMessage of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        var nodeName = "qunit-test-node";
        var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel("wss://localhost:5280/websocket", nodeName, "client-1@localhost", undefined, true);
        var oXMPPJSONPatchSyncModel2;

        oXMPPJSONPatchSyncModel.attachEvent("connectionStatus", function(oEvent) {
            console.log("oXMPPJSONPatchSyncModel: " + oEvent.getParameter("status"));
            if (oEvent.getParameter("status") == "NODE_CREATED") {
                oXMPPJSONPatchSyncModel2 = new XMPPJSONPatchSyncModel("wss://localhost:5280/websocket", nodeName, "client-2@localhost", undefined, true);
                oXMPPJSONPatchSyncModel2.attachEvent("connectionStatus", function(oEvent) {
                    console.log("oXMPPJSONPatchSyncModel2: " + oEvent.getParameter("status"));
                    if (oEvent.getParameter("status") == "NODE_SUBSCRIBED") {
                        oXMPPJSONPatchSyncModel2.addItem({ "key": "value" });
                    }
                });
                oXMPPJSONPatchSyncModel2.connect();
            }
        });
        oXMPPJSONPatchSyncModel.attachEvent("message", function(oEvent) {
            oXMPPJSONPatchSyncModel.deleteNode(nodeName);
        });
        oXMPPJSONPatchSyncModel.connect();

        window.client1 = oXMPPJSONPatchSyncModel;
        window.client2 = oXMPPJSONPatchSyncModel2;
        //oXMPPJSONPatchSyncModel.onMessage(); 
    });
    /*
    QUnit.test("Test function delete node of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        var nodeName = "qunit-test-node";
        var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel("wss://localhost:5280/websocket", nodeName, "client-1@localhost", undefined, true);

        oXMPPJSONPatchSyncModel.attachEvent("connectionStatus", function(oEvent) {
            console.log("oXMPPJSONPatchSyncModel: " + oEvent.getParameter("status"));
            if (oEvent.getParameter("status") == "SUBSCRIPTION_ALREADY_IN_PLACE") {
                oXMPPJSONPatchSyncModel.deleteNode(nodeName);
            }
        });
        oXMPPJSONPatchSyncModel.connect();

        //oXMPPJSONPatchSyncModel.onMessage(); 
    });
     */
    /*
    QUnit.test("Test function _getOrGenerateJid of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel._getOrGenerateJid(); 
    });
    QUnit.test("Test function _extractServerDomainFromUrl of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel._extractServerDomainFromUrl(); 
    });
    QUnit.test("Test function loadData of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.loadData(); 
    });
    QUnit.test("Test function guid of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.guid(); 
    });
    QUnit.test("Test function addItem of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.addItem(); 
    });
    QUnit.test("Test function _sendAddToXmppTopic of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel._sendAddToXmppTopic(); 
    });
    QUnit.test("Test function getProperty of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getProperty(); 
    });
    QUnit.test("Test function _getObject of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel._getObject(); 
    });
    QUnit.test("Test function bindList of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.bindList(); 
    });
    QUnit.test("Test function bindProperty of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.bindProperty(); 
    });
    QUnit.test("Test function getData of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getData(); 
    });
    QUnit.test("Test function createBindingContext of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.createBindingContext(); 
    });
    QUnit.test("Test function _ajax of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel._ajax(); 
    });
    QUnit.test("Test function destroy of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.destroy(); 
    });
    QUnit.test("Test function destroyBindingContext of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.destroyBindingContext(); 
    });
    QUnit.test("Test function bindContext of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.bindContext(); 
    });
    QUnit.test("Test function updateBindings of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.updateBindings(); 
    });
    QUnit.test("Test function forceNoCache of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.forceNoCache(); 
    });
    QUnit.test("Test function attachRequestFailed of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachRequestFailed(); 
    });
    QUnit.test("Test function detachRequestFailed of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachRequestFailed(); 
    });
    QUnit.test("Test function fireRequestFailed of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireRequestFailed(); 
    });
    QUnit.test("Test function attachParseError of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachParseError(); 
    });
    QUnit.test("Test function detachParseError of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachParseError(); 
    });
    QUnit.test("Test function fireParseError of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireParseError(); 
    });
    QUnit.test("Test function attachRequestSent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachRequestSent(); 
    });
    QUnit.test("Test function detachRequestSent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachRequestSent(); 
    });
    QUnit.test("Test function fireRequestSent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireRequestSent(); 
    });
    QUnit.test("Test function attachRequestCompleted of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachRequestCompleted(); 
    });
    QUnit.test("Test function detachRequestCompleted of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachRequestCompleted(); 
    });
    QUnit.test("Test function fireRequestCompleted of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireRequestCompleted(); 
    });
    QUnit.test("Test function attachMessageChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachMessageChange(); 
    });
    QUnit.test("Test function detachMessageChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachMessageChange(); 
    });
    QUnit.test("Test function firePropertyChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.firePropertyChange(); 
    });
    QUnit.test("Test function attachPropertyChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachPropertyChange(); 
    });
    QUnit.test("Test function detachPropertyChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachPropertyChange(); 
    });
    QUnit.test("Test function getObject of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getObject(); 
    });
    QUnit.test("Test function getContext of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getContext(); 
    });
    QUnit.test("Test function resolve of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.resolve(); 
    });
    QUnit.test("Test function addBinding of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.addBinding(); 
    });
    QUnit.test("Test function removeBinding of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.removeBinding(); 
    });
    QUnit.test("Test function getDefaultBindingMode of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getDefaultBindingMode(); 
    });
    QUnit.test("Test function setDefaultBindingMode of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.setDefaultBindingMode(); 
    });
    QUnit.test("Test function isBindingModeSupported of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.isBindingModeSupported(); 
    });
    QUnit.test("Test function setLegacySyntax of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.setLegacySyntax(); 
    });
    QUnit.test("Test function isLegacySyntax of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.isLegacySyntax(); 
    });
    QUnit.test("Test function setSizeLimit of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.setSizeLimit(); 
    });
    QUnit.test("Test function getInterface of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getInterface(); 
    });
    QUnit.test("Test function refresh of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.refresh(); 
    });
    QUnit.test("Test function checkUpdate of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.checkUpdate(); 
    });
    QUnit.test("Test function setMessages of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.setMessages(); 
    });
    QUnit.test("Test function getMessagesByPath of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getMessagesByPath(); 
    });
    QUnit.test("Test function checkMessages of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.checkMessages(); 
    });
    QUnit.test("Test function getMetaModel of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getMetaModel(); 
    });
    QUnit.test("Test function getOriginalProperty of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getOriginalProperty(); 
    });
    QUnit.test("Test function isLaundering of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.isLaundering(); 
    });
    QUnit.test("Test function fireMessageChange of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireMessageChange(); 
    });
    QUnit.test("Test function getId of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getId(); 
    });
    QUnit.test("Test function attachEvent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachEvent(); 
    });
    QUnit.test("Test function attachEventOnce of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.attachEventOnce(); 
    });
    QUnit.test("Test function detachEvent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.detachEvent(); 
    });
    QUnit.test("Test function fireEvent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.fireEvent(); 
    });
    QUnit.test("Test function hasListeners of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.hasListeners(); 
    });
    QUnit.test("Test function getEventingParent of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.getEventingParent(); 
    });
    QUnit.test("Test function toString of XMPPJSONPatchSyncModel", function(assert) {
        expect(0);
        //var oXMPPJSONPatchSyncModel = new XMPPJSONPatchSyncModel();
        //oXMPPJSONPatchSyncModel.toString(); 
    });*/

});