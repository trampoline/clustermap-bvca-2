// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16938 = {};return obj16938;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16942 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16942 = (function (evt,f,create_listener_function,meta16943){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16943 = meta16943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16942.cljs$lang$type = true;
domina.events.t16942.cljs$lang$ctorStr = "domina.events/t16942";
domina.events.t16942.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16942");
});
domina.events.t16942.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16942.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16942.prototype.domina$events$Event$ = true;
domina.events.t16942.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16942.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16942.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16942.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16942.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16942.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16944){var self__ = this;
var _16944__$1 = this;return self__.meta16943;
});
domina.events.t16942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16944,meta16943__$1){var self__ = this;
var _16944__$1 = this;return (new domina.events.t16942(self__.evt,self__.f,self__.create_listener_function,meta16943__$1));
});
domina.events.__GT_t16942 = (function __GT_t16942(evt__$1,f__$1,create_listener_function__$1,meta16943){return (new domina.events.t16942(evt__$1,f__$1,create_listener_function__$1,meta16943));
});
}
return (new domina.events.t16942(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16949(s__16950){return (new cljs.core.LazySeq(null,(function (){var s__16950__$1 = s__16950;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16950__$1);if(temp__4092__auto__)
{var s__16950__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16950__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16950__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16952 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16951 = 0;while(true){
if((i__16951 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16951);cljs.core.chunk_append.call(null,b__16952,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16953 = (i__16951 + 1);
i__16951 = G__16953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16952),iter__16949.call(null,cljs.core.chunk_rest.call(null,s__16950__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16952),null);
}
} else
{var node = cljs.core.first.call(null,s__16950__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16949.call(null,cljs.core.rest.call(null,s__16950__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16962 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16963 = null;var count__16964 = 0;var i__16965 = 0;while(true){
if((i__16965 < count__16964))
{var node = cljs.core._nth.call(null,chunk__16963,i__16965);goog.events.removeAll(node);
{
var G__16970 = seq__16962;
var G__16971 = chunk__16963;
var G__16972 = count__16964;
var G__16973 = (i__16965 + 1);
seq__16962 = G__16970;
chunk__16963 = G__16971;
count__16964 = G__16972;
i__16965 = G__16973;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16962);if(temp__4092__auto__)
{var seq__16962__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16962__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16962__$1);{
var G__16974 = cljs.core.chunk_rest.call(null,seq__16962__$1);
var G__16975 = c__4148__auto__;
var G__16976 = cljs.core.count.call(null,c__4148__auto__);
var G__16977 = 0;
seq__16962 = G__16974;
chunk__16963 = G__16975;
count__16964 = G__16976;
i__16965 = G__16977;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16962__$1);goog.events.removeAll(node);
{
var G__16978 = cljs.core.next.call(null,seq__16962__$1);
var G__16979 = null;
var G__16980 = 0;
var G__16981 = 0;
seq__16962 = G__16978;
chunk__16963 = G__16979;
count__16964 = G__16980;
i__16965 = G__16981;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16966 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16967 = null;var count__16968 = 0;var i__16969 = 0;while(true){
if((i__16969 < count__16968))
{var node = cljs.core._nth.call(null,chunk__16967,i__16969);goog.events.removeAll(node,type__$1);
{
var G__16982 = seq__16966;
var G__16983 = chunk__16967;
var G__16984 = count__16968;
var G__16985 = (i__16969 + 1);
seq__16966 = G__16982;
chunk__16967 = G__16983;
count__16968 = G__16984;
i__16969 = G__16985;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16966);if(temp__4092__auto__)
{var seq__16966__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16966__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16966__$1);{
var G__16986 = cljs.core.chunk_rest.call(null,seq__16966__$1);
var G__16987 = c__4148__auto__;
var G__16988 = cljs.core.count.call(null,c__4148__auto__);
var G__16989 = 0;
seq__16966 = G__16986;
chunk__16967 = G__16987;
count__16968 = G__16988;
i__16969 = G__16989;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16966__$1);goog.events.removeAll(node,type__$1);
{
var G__16990 = cljs.core.next.call(null,seq__16966__$1);
var G__16991 = null;
var G__16992 = 0;
var G__16993 = 0;
seq__16966 = G__16990;
chunk__16967 = G__16991;
count__16968 = G__16992;
i__16969 = G__16993;
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
var G__16994 = parent;
var G__16995 = cljs.core.cons.call(null,parent,so_far);
n = G__16994;
so_far = G__16995;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17004_17012 = cljs.core.seq.call(null,ancestors);var chunk__17005_17013 = null;var count__17006_17014 = 0;var i__17007_17015 = 0;while(true){
if((i__17007_17015 < count__17006_17014))
{var n_17016 = cljs.core._nth.call(null,chunk__17005_17013,i__17007_17015);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17016;
goog.events.fireListeners(n_17016,evt.type,true,evt);
}
{
var G__17017 = seq__17004_17012;
var G__17018 = chunk__17005_17013;
var G__17019 = count__17006_17014;
var G__17020 = (i__17007_17015 + 1);
seq__17004_17012 = G__17017;
chunk__17005_17013 = G__17018;
count__17006_17014 = G__17019;
i__17007_17015 = G__17020;
continue;
}
} else
{var temp__4092__auto___17021 = cljs.core.seq.call(null,seq__17004_17012);if(temp__4092__auto___17021)
{var seq__17004_17022__$1 = temp__4092__auto___17021;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17004_17022__$1))
{var c__4148__auto___17023 = cljs.core.chunk_first.call(null,seq__17004_17022__$1);{
var G__17024 = cljs.core.chunk_rest.call(null,seq__17004_17022__$1);
var G__17025 = c__4148__auto___17023;
var G__17026 = cljs.core.count.call(null,c__4148__auto___17023);
var G__17027 = 0;
seq__17004_17012 = G__17024;
chunk__17005_17013 = G__17025;
count__17006_17014 = G__17026;
i__17007_17015 = G__17027;
continue;
}
} else
{var n_17028 = cljs.core.first.call(null,seq__17004_17022__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17028;
goog.events.fireListeners(n_17028,evt.type,true,evt);
}
{
var G__17029 = cljs.core.next.call(null,seq__17004_17022__$1);
var G__17030 = null;
var G__17031 = 0;
var G__17032 = 0;
seq__17004_17012 = G__17029;
chunk__17005_17013 = G__17030;
count__17006_17014 = G__17031;
i__17007_17015 = G__17032;
continue;
}
}
} else
{}
}
break;
}
var seq__17008_17033 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17009_17034 = null;var count__17010_17035 = 0;var i__17011_17036 = 0;while(true){
if((i__17011_17036 < count__17010_17035))
{var n_17037 = cljs.core._nth.call(null,chunk__17009_17034,i__17011_17036);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17037;
goog.events.fireListeners(n_17037,evt.type,false,evt);
}
{
var G__17038 = seq__17008_17033;
var G__17039 = chunk__17009_17034;
var G__17040 = count__17010_17035;
var G__17041 = (i__17011_17036 + 1);
seq__17008_17033 = G__17038;
chunk__17009_17034 = G__17039;
count__17010_17035 = G__17040;
i__17011_17036 = G__17041;
continue;
}
} else
{var temp__4092__auto___17042 = cljs.core.seq.call(null,seq__17008_17033);if(temp__4092__auto___17042)
{var seq__17008_17043__$1 = temp__4092__auto___17042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17008_17043__$1))
{var c__4148__auto___17044 = cljs.core.chunk_first.call(null,seq__17008_17043__$1);{
var G__17045 = cljs.core.chunk_rest.call(null,seq__17008_17043__$1);
var G__17046 = c__4148__auto___17044;
var G__17047 = cljs.core.count.call(null,c__4148__auto___17044);
var G__17048 = 0;
seq__17008_17033 = G__17045;
chunk__17009_17034 = G__17046;
count__17010_17035 = G__17047;
i__17011_17036 = G__17048;
continue;
}
} else
{var n_17049 = cljs.core.first.call(null,seq__17008_17043__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17049;
goog.events.fireListeners(n_17049,evt.type,false,evt);
}
{
var G__17050 = cljs.core.next.call(null,seq__17008_17043__$1);
var G__17051 = null;
var G__17052 = 0;
var G__17053 = 0;
seq__17008_17033 = G__17050;
chunk__17009_17034 = G__17051;
count__17010_17035 = G__17052;
i__17011_17036 = G__17053;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17060_17066 = cljs.core.seq.call(null,evt_map);var chunk__17061_17067 = null;var count__17062_17068 = 0;var i__17063_17069 = 0;while(true){
if((i__17063_17069 < count__17062_17068))
{var vec__17064_17070 = cljs.core._nth.call(null,chunk__17061_17067,i__17063_17069);var k_17071 = cljs.core.nth.call(null,vec__17064_17070,0,null);var v_17072 = cljs.core.nth.call(null,vec__17064_17070,1,null);(evt[k_17071] = v_17072);
{
var G__17073 = seq__17060_17066;
var G__17074 = chunk__17061_17067;
var G__17075 = count__17062_17068;
var G__17076 = (i__17063_17069 + 1);
seq__17060_17066 = G__17073;
chunk__17061_17067 = G__17074;
count__17062_17068 = G__17075;
i__17063_17069 = G__17076;
continue;
}
} else
{var temp__4092__auto___17077 = cljs.core.seq.call(null,seq__17060_17066);if(temp__4092__auto___17077)
{var seq__17060_17078__$1 = temp__4092__auto___17077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17060_17078__$1))
{var c__4148__auto___17079 = cljs.core.chunk_first.call(null,seq__17060_17078__$1);{
var G__17080 = cljs.core.chunk_rest.call(null,seq__17060_17078__$1);
var G__17081 = c__4148__auto___17079;
var G__17082 = cljs.core.count.call(null,c__4148__auto___17079);
var G__17083 = 0;
seq__17060_17066 = G__17080;
chunk__17061_17067 = G__17081;
count__17062_17068 = G__17082;
i__17063_17069 = G__17083;
continue;
}
} else
{var vec__17065_17084 = cljs.core.first.call(null,seq__17060_17078__$1);var k_17085 = cljs.core.nth.call(null,vec__17065_17084,0,null);var v_17086 = cljs.core.nth.call(null,vec__17065_17084,1,null);(evt[k_17085] = v_17086);
{
var G__17087 = cljs.core.next.call(null,seq__17060_17078__$1);
var G__17088 = null;
var G__17089 = 0;
var G__17090 = 0;
seq__17060_17066 = G__17087;
chunk__17061_17067 = G__17088;
count__17062_17068 = G__17089;
i__17063_17069 = G__17090;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17091_SHARP_){return goog.events.getListeners(p1__17091_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map