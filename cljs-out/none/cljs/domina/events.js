// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16909 = {};return obj16909;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.prevent_default[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.prevent_default["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.current_target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.current_target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.event_type[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.event_type["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.raw_event[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.raw_event["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16913 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16913 = (function (evt,f,create_listener_function,meta16914){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16914 = meta16914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16913.cljs$lang$type = true;
domina.events.t16913.cljs$lang$ctorStr = "domina.events/t16913";
domina.events.t16913.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16913");
});
domina.events.t16913.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16913.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16913.prototype.domina$events$Event$ = true;
domina.events.t16913.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16913.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16913.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16913.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16913.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16913.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16915){var self__ = this;
var _16915__$1 = this;return self__.meta16914;
});
domina.events.t16913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16915,meta16914__$1){var self__ = this;
var _16915__$1 = this;return (new domina.events.t16913(self__.evt,self__.f,self__.create_listener_function,meta16914__$1));
});
domina.events.__GT_t16913 = (function __GT_t16913(evt__$1,f__$1,create_listener_function__$1,meta16914){return (new domina.events.t16913(evt__$1,f__$1,create_listener_function__$1,meta16914));
});
}
return (new domina.events.t16913(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16920(s__16921){return (new cljs.core.LazySeq(null,(function (){var s__16921__$1 = s__16921;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16921__$1);if(temp__4092__auto__)
{var s__16921__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16921__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16921__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16923 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16922 = 0;while(true){
if((i__16922 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16922);cljs.core.chunk_append.call(null,b__16923,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16924 = (i__16922 + 1);
i__16922 = G__16924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16923),iter__16920.call(null,cljs.core.chunk_rest.call(null,s__16921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16923),null);
}
} else
{var node = cljs.core.first.call(null,s__16921__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16920.call(null,cljs.core.rest.call(null,s__16921__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__16933 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16934 = null;var count__16935 = 0;var i__16936 = 0;while(true){
if((i__16936 < count__16935))
{var node = cljs.core._nth.call(null,chunk__16934,i__16936);goog.events.removeAll(node);
{
var G__16941 = seq__16933;
var G__16942 = chunk__16934;
var G__16943 = count__16935;
var G__16944 = (i__16936 + 1);
seq__16933 = G__16941;
chunk__16934 = G__16942;
count__16935 = G__16943;
i__16936 = G__16944;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16933);if(temp__4092__auto__)
{var seq__16933__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16933__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16933__$1);{
var G__16945 = cljs.core.chunk_rest.call(null,seq__16933__$1);
var G__16946 = c__4148__auto__;
var G__16947 = cljs.core.count.call(null,c__4148__auto__);
var G__16948 = 0;
seq__16933 = G__16945;
chunk__16934 = G__16946;
count__16935 = G__16947;
i__16936 = G__16948;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16933__$1);goog.events.removeAll(node);
{
var G__16949 = cljs.core.next.call(null,seq__16933__$1);
var G__16950 = null;
var G__16951 = 0;
var G__16952 = 0;
seq__16933 = G__16949;
chunk__16934 = G__16950;
count__16935 = G__16951;
i__16936 = G__16952;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16937 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16938 = null;var count__16939 = 0;var i__16940 = 0;while(true){
if((i__16940 < count__16939))
{var node = cljs.core._nth.call(null,chunk__16938,i__16940);goog.events.removeAll(node,type__$1);
{
var G__16953 = seq__16937;
var G__16954 = chunk__16938;
var G__16955 = count__16939;
var G__16956 = (i__16940 + 1);
seq__16937 = G__16953;
chunk__16938 = G__16954;
count__16939 = G__16955;
i__16940 = G__16956;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16937);if(temp__4092__auto__)
{var seq__16937__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16937__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16937__$1);{
var G__16957 = cljs.core.chunk_rest.call(null,seq__16937__$1);
var G__16958 = c__4148__auto__;
var G__16959 = cljs.core.count.call(null,c__4148__auto__);
var G__16960 = 0;
seq__16937 = G__16957;
chunk__16938 = G__16958;
count__16939 = G__16959;
i__16940 = G__16960;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16937__$1);goog.events.removeAll(node,type__$1);
{
var G__16961 = cljs.core.next.call(null,seq__16937__$1);
var G__16962 = null;
var G__16963 = 0;
var G__16964 = 0;
seq__16937 = G__16961;
chunk__16938 = G__16962;
count__16939 = G__16963;
i__16940 = G__16964;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__16965 = parent;
var G__16966 = cljs.core.cons.call(null,parent,so_far);
n = G__16965;
so_far = G__16966;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16975_16983 = cljs.core.seq.call(null,ancestors);var chunk__16976_16984 = null;var count__16977_16985 = 0;var i__16978_16986 = 0;while(true){
if((i__16978_16986 < count__16977_16985))
{var n_16987 = cljs.core._nth.call(null,chunk__16976_16984,i__16978_16986);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16987;
goog.events.fireListeners(n_16987,evt.type,true,evt);
}
{
var G__16988 = seq__16975_16983;
var G__16989 = chunk__16976_16984;
var G__16990 = count__16977_16985;
var G__16991 = (i__16978_16986 + 1);
seq__16975_16983 = G__16988;
chunk__16976_16984 = G__16989;
count__16977_16985 = G__16990;
i__16978_16986 = G__16991;
continue;
}
} else
{var temp__4092__auto___16992 = cljs.core.seq.call(null,seq__16975_16983);if(temp__4092__auto___16992)
{var seq__16975_16993__$1 = temp__4092__auto___16992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16975_16993__$1))
{var c__4148__auto___16994 = cljs.core.chunk_first.call(null,seq__16975_16993__$1);{
var G__16995 = cljs.core.chunk_rest.call(null,seq__16975_16993__$1);
var G__16996 = c__4148__auto___16994;
var G__16997 = cljs.core.count.call(null,c__4148__auto___16994);
var G__16998 = 0;
seq__16975_16983 = G__16995;
chunk__16976_16984 = G__16996;
count__16977_16985 = G__16997;
i__16978_16986 = G__16998;
continue;
}
} else
{var n_16999 = cljs.core.first.call(null,seq__16975_16993__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16999;
goog.events.fireListeners(n_16999,evt.type,true,evt);
}
{
var G__17000 = cljs.core.next.call(null,seq__16975_16993__$1);
var G__17001 = null;
var G__17002 = 0;
var G__17003 = 0;
seq__16975_16983 = G__17000;
chunk__16976_16984 = G__17001;
count__16977_16985 = G__17002;
i__16978_16986 = G__17003;
continue;
}
}
} else
{}
}
break;
}
var seq__16979_17004 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16980_17005 = null;var count__16981_17006 = 0;var i__16982_17007 = 0;while(true){
if((i__16982_17007 < count__16981_17006))
{var n_17008 = cljs.core._nth.call(null,chunk__16980_17005,i__16982_17007);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17008;
goog.events.fireListeners(n_17008,evt.type,false,evt);
}
{
var G__17009 = seq__16979_17004;
var G__17010 = chunk__16980_17005;
var G__17011 = count__16981_17006;
var G__17012 = (i__16982_17007 + 1);
seq__16979_17004 = G__17009;
chunk__16980_17005 = G__17010;
count__16981_17006 = G__17011;
i__16982_17007 = G__17012;
continue;
}
} else
{var temp__4092__auto___17013 = cljs.core.seq.call(null,seq__16979_17004);if(temp__4092__auto___17013)
{var seq__16979_17014__$1 = temp__4092__auto___17013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16979_17014__$1))
{var c__4148__auto___17015 = cljs.core.chunk_first.call(null,seq__16979_17014__$1);{
var G__17016 = cljs.core.chunk_rest.call(null,seq__16979_17014__$1);
var G__17017 = c__4148__auto___17015;
var G__17018 = cljs.core.count.call(null,c__4148__auto___17015);
var G__17019 = 0;
seq__16979_17004 = G__17016;
chunk__16980_17005 = G__17017;
count__16981_17006 = G__17018;
i__16982_17007 = G__17019;
continue;
}
} else
{var n_17020 = cljs.core.first.call(null,seq__16979_17014__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17020;
goog.events.fireListeners(n_17020,evt.type,false,evt);
}
{
var G__17021 = cljs.core.next.call(null,seq__16979_17014__$1);
var G__17022 = null;
var G__17023 = 0;
var G__17024 = 0;
seq__16979_17004 = G__17021;
chunk__16980_17005 = G__17022;
count__16981_17006 = G__17023;
i__16982_17007 = G__17024;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3394__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3394__auto__))
{return o.dispatchEvent;
} else
{return and__3394__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17031_17037 = cljs.core.seq.call(null,evt_map);var chunk__17032_17038 = null;var count__17033_17039 = 0;var i__17034_17040 = 0;while(true){
if((i__17034_17040 < count__17033_17039))
{var vec__17035_17041 = cljs.core._nth.call(null,chunk__17032_17038,i__17034_17040);var k_17042 = cljs.core.nth.call(null,vec__17035_17041,0,null);var v_17043 = cljs.core.nth.call(null,vec__17035_17041,1,null);(evt[k_17042] = v_17043);
{
var G__17044 = seq__17031_17037;
var G__17045 = chunk__17032_17038;
var G__17046 = count__17033_17039;
var G__17047 = (i__17034_17040 + 1);
seq__17031_17037 = G__17044;
chunk__17032_17038 = G__17045;
count__17033_17039 = G__17046;
i__17034_17040 = G__17047;
continue;
}
} else
{var temp__4092__auto___17048 = cljs.core.seq.call(null,seq__17031_17037);if(temp__4092__auto___17048)
{var seq__17031_17049__$1 = temp__4092__auto___17048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17031_17049__$1))
{var c__4148__auto___17050 = cljs.core.chunk_first.call(null,seq__17031_17049__$1);{
var G__17051 = cljs.core.chunk_rest.call(null,seq__17031_17049__$1);
var G__17052 = c__4148__auto___17050;
var G__17053 = cljs.core.count.call(null,c__4148__auto___17050);
var G__17054 = 0;
seq__17031_17037 = G__17051;
chunk__17032_17038 = G__17052;
count__17033_17039 = G__17053;
i__17034_17040 = G__17054;
continue;
}
} else
{var vec__17036_17055 = cljs.core.first.call(null,seq__17031_17049__$1);var k_17056 = cljs.core.nth.call(null,vec__17036_17055,0,null);var v_17057 = cljs.core.nth.call(null,vec__17036_17055,1,null);(evt[k_17056] = v_17057);
{
var G__17058 = cljs.core.next.call(null,seq__17031_17049__$1);
var G__17059 = null;
var G__17060 = 0;
var G__17061 = 0;
seq__17031_17037 = G__17058;
chunk__17032_17038 = G__17059;
count__17033_17039 = G__17060;
i__17034_17040 = G__17061;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17062_SHARP_){return goog.events.getListeners(p1__17062_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map