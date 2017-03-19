# XMPPJSONPatchSyncModel

This OpenUI5 data model uses a node on an XMPP server to synchronize itself to different connected clients.
Because of the usage of CRDT (Conflict-free replicated data type) it is easy to build offline capabilities on top of it.

The XMPP server requires the following:

 * PubSub Support (XEP-0060)
 * WebSocket (RFC 7395)
 * Anonymous access and node creation capabilities

It was developed using ejabbered with the following configuration changes:

/etc/ejabberd/ejabberd.yml
...
anonymous_protocol: both
...
host_config:
   "localhost":
     auth_method:
       - internal
       - anonymous

The wireformat used in JSONPatch.


![Architecture](/img/XMPPJSONPatchSyncModel-Architecture.png?raw=true "Architecture")

# YouTube Video

https://www.youtube.com/watch?v=ecWQd1yD5dE

# Company

This software was proudly developer by [Incentergy GmbH](http://www.incentergy.de)
