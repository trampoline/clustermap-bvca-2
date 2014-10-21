// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36000 = {};return obj36000;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36004 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36004 = (function (evt,f,create_listener_function,meta36005){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36005 = meta36005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36004.cljs$lang$type = true;
domina.events.t36004.cljs$lang$ctorStr = "domina.events/t36004";
domina.events.t36004.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t36004");
});
domina.events.t36004.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36004.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t36004.prototype.domina$events$Event$ = true;
domina.events.t36004.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36004.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36004.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36004.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36004.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36004.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36006){var self__ = this;
var _36006__$1 = this;return self__.meta36005;
});
domina.events.t36004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36006,meta36005__$1){var self__ = this;
var _36006__$1 = this;return (new domina.events.t36004(self__.evt,self__.f,self__.create_listener_function,meta36005__$1));
});
domina.events.__GT_t36004 = (function __GT_t36004(evt__$1,f__$1,create_listener_function__$1,meta36005){return (new domina.events.t36004(evt__$1,f__$1,create_listener_function__$1,meta36005));
});
}
return (new domina.events.t36004(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__36011(s__36012){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__36012__$1 = s__36012;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__36012__$1);if(temp__4126__auto__)
{var s__36012__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36012__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__36012__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__36014 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__36013 = (0);while(true){
if((i__36013 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__36013);cljs.core.chunk_append.call(null,b__36014,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36015 = (i__36013 + (1));
i__36013 = G__36015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36014),iter__36011.call(null,cljs.core.chunk_rest.call(null,s__36012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36014),null);
}
} else
{var node = cljs.core.first.call(null,s__36012__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36011.call(null,cljs.core.rest.call(null,s__36012__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__36024 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36025 = null;var count__36026 = (0);var i__36027 = (0);while(true){
if((i__36027 < count__36026))
{var node = cljs.core._nth.call(null,chunk__36025,i__36027);goog.events.removeAll(node);
{
var G__36032 = seq__36024;
var G__36033 = chunk__36025;
var G__36034 = count__36026;
var G__36035 = (i__36027 + (1));
seq__36024 = G__36032;
chunk__36025 = G__36033;
count__36026 = G__36034;
i__36027 = G__36035;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__36024);if(temp__4126__auto__)
{var seq__36024__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36024__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__36024__$1);{
var G__36036 = cljs.core.chunk_rest.call(null,seq__36024__$1);
var G__36037 = c__4314__auto__;
var G__36038 = cljs.core.count.call(null,c__4314__auto__);
var G__36039 = (0);
seq__36024 = G__36036;
chunk__36025 = G__36037;
count__36026 = G__36038;
i__36027 = G__36039;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36024__$1);goog.events.removeAll(node);
{
var G__36040 = cljs.core.next.call(null,seq__36024__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__36024 = G__36040;
chunk__36025 = G__36041;
count__36026 = G__36042;
i__36027 = G__36043;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36028 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36029 = null;var count__36030 = (0);var i__36031 = (0);while(true){
if((i__36031 < count__36030))
{var node = cljs.core._nth.call(null,chunk__36029,i__36031);goog.events.removeAll(node,type__$1);
{
var G__36044 = seq__36028;
var G__36045 = chunk__36029;
var G__36046 = count__36030;
var G__36047 = (i__36031 + (1));
seq__36028 = G__36044;
chunk__36029 = G__36045;
count__36030 = G__36046;
i__36031 = G__36047;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__36028);if(temp__4126__auto__)
{var seq__36028__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36028__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__36028__$1);{
var G__36048 = cljs.core.chunk_rest.call(null,seq__36028__$1);
var G__36049 = c__4314__auto__;
var G__36050 = cljs.core.count.call(null,c__4314__auto__);
var G__36051 = (0);
seq__36028 = G__36048;
chunk__36029 = G__36049;
count__36030 = G__36050;
i__36031 = G__36051;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36028__$1);goog.events.removeAll(node,type__$1);
{
var G__36052 = cljs.core.next.call(null,seq__36028__$1);
var G__36053 = null;
var G__36054 = (0);
var G__36055 = (0);
seq__36028 = G__36052;
chunk__36029 = G__36053;
count__36030 = G__36054;
i__36031 = G__36055;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__36056 = parent;
var G__36057 = cljs.core.cons.call(null,parent,so_far);
n = G__36056;
so_far = G__36057;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36066_36074 = cljs.core.seq.call(null,ancestors);var chunk__36067_36075 = null;var count__36068_36076 = (0);var i__36069_36077 = (0);while(true){
if((i__36069_36077 < count__36068_36076))
{var n_36078 = cljs.core._nth.call(null,chunk__36067_36075,i__36069_36077);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36078;
goog.events.fireListeners(n_36078,evt.type,true,evt);
}
{
var G__36079 = seq__36066_36074;
var G__36080 = chunk__36067_36075;
var G__36081 = count__36068_36076;
var G__36082 = (i__36069_36077 + (1));
seq__36066_36074 = G__36079;
chunk__36067_36075 = G__36080;
count__36068_36076 = G__36081;
i__36069_36077 = G__36082;
continue;
}
} else
{var temp__4126__auto___36083 = cljs.core.seq.call(null,seq__36066_36074);if(temp__4126__auto___36083)
{var seq__36066_36084__$1 = temp__4126__auto___36083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36066_36084__$1))
{var c__4314__auto___36085 = cljs.core.chunk_first.call(null,seq__36066_36084__$1);{
var G__36086 = cljs.core.chunk_rest.call(null,seq__36066_36084__$1);
var G__36087 = c__4314__auto___36085;
var G__36088 = cljs.core.count.call(null,c__4314__auto___36085);
var G__36089 = (0);
seq__36066_36074 = G__36086;
chunk__36067_36075 = G__36087;
count__36068_36076 = G__36088;
i__36069_36077 = G__36089;
continue;
}
} else
{var n_36090 = cljs.core.first.call(null,seq__36066_36084__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36090;
goog.events.fireListeners(n_36090,evt.type,true,evt);
}
{
var G__36091 = cljs.core.next.call(null,seq__36066_36084__$1);
var G__36092 = null;
var G__36093 = (0);
var G__36094 = (0);
seq__36066_36074 = G__36091;
chunk__36067_36075 = G__36092;
count__36068_36076 = G__36093;
i__36069_36077 = G__36094;
continue;
}
}
} else
{}
}
break;
}
var seq__36070_36095 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36071_36096 = null;var count__36072_36097 = (0);var i__36073_36098 = (0);while(true){
if((i__36073_36098 < count__36072_36097))
{var n_36099 = cljs.core._nth.call(null,chunk__36071_36096,i__36073_36098);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36099;
goog.events.fireListeners(n_36099,evt.type,false,evt);
}
{
var G__36100 = seq__36070_36095;
var G__36101 = chunk__36071_36096;
var G__36102 = count__36072_36097;
var G__36103 = (i__36073_36098 + (1));
seq__36070_36095 = G__36100;
chunk__36071_36096 = G__36101;
count__36072_36097 = G__36102;
i__36073_36098 = G__36103;
continue;
}
} else
{var temp__4126__auto___36104 = cljs.core.seq.call(null,seq__36070_36095);if(temp__4126__auto___36104)
{var seq__36070_36105__$1 = temp__4126__auto___36104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36070_36105__$1))
{var c__4314__auto___36106 = cljs.core.chunk_first.call(null,seq__36070_36105__$1);{
var G__36107 = cljs.core.chunk_rest.call(null,seq__36070_36105__$1);
var G__36108 = c__4314__auto___36106;
var G__36109 = cljs.core.count.call(null,c__4314__auto___36106);
var G__36110 = (0);
seq__36070_36095 = G__36107;
chunk__36071_36096 = G__36108;
count__36072_36097 = G__36109;
i__36073_36098 = G__36110;
continue;
}
} else
{var n_36111 = cljs.core.first.call(null,seq__36070_36105__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36111;
goog.events.fireListeners(n_36111,evt.type,false,evt);
}
{
var G__36112 = cljs.core.next.call(null,seq__36070_36105__$1);
var G__36113 = null;
var G__36114 = (0);
var G__36115 = (0);
seq__36070_36095 = G__36112;
chunk__36071_36096 = G__36113;
count__36072_36097 = G__36114;
i__36073_36098 = G__36115;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36122_36128 = cljs.core.seq.call(null,evt_map);var chunk__36123_36129 = null;var count__36124_36130 = (0);var i__36125_36131 = (0);while(true){
if((i__36125_36131 < count__36124_36130))
{var vec__36126_36132 = cljs.core._nth.call(null,chunk__36123_36129,i__36125_36131);var k_36133 = cljs.core.nth.call(null,vec__36126_36132,(0),null);var v_36134 = cljs.core.nth.call(null,vec__36126_36132,(1),null);(evt[k_36133] = v_36134);
{
var G__36135 = seq__36122_36128;
var G__36136 = chunk__36123_36129;
var G__36137 = count__36124_36130;
var G__36138 = (i__36125_36131 + (1));
seq__36122_36128 = G__36135;
chunk__36123_36129 = G__36136;
count__36124_36130 = G__36137;
i__36125_36131 = G__36138;
continue;
}
} else
{var temp__4126__auto___36139 = cljs.core.seq.call(null,seq__36122_36128);if(temp__4126__auto___36139)
{var seq__36122_36140__$1 = temp__4126__auto___36139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36122_36140__$1))
{var c__4314__auto___36141 = cljs.core.chunk_first.call(null,seq__36122_36140__$1);{
var G__36142 = cljs.core.chunk_rest.call(null,seq__36122_36140__$1);
var G__36143 = c__4314__auto___36141;
var G__36144 = cljs.core.count.call(null,c__4314__auto___36141);
var G__36145 = (0);
seq__36122_36128 = G__36142;
chunk__36123_36129 = G__36143;
count__36124_36130 = G__36144;
i__36125_36131 = G__36145;
continue;
}
} else
{var vec__36127_36146 = cljs.core.first.call(null,seq__36122_36140__$1);var k_36147 = cljs.core.nth.call(null,vec__36127_36146,(0),null);var v_36148 = cljs.core.nth.call(null,vec__36127_36146,(1),null);(evt[k_36147] = v_36148);
{
var G__36149 = cljs.core.next.call(null,seq__36122_36140__$1);
var G__36150 = null;
var G__36151 = (0);
var G__36152 = (0);
seq__36122_36128 = G__36149;
chunk__36123_36129 = G__36150;
count__36124_36130 = G__36151;
i__36125_36131 = G__36152;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__36153_SHARP_){return goog.events.getListeners(p1__36153_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
