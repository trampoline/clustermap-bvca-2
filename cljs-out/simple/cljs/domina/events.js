// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj30935 = {};return obj30935;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t30939 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t30939 = (function (evt,f,create_listener_function,meta30940){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta30940 = meta30940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t30939.cljs$lang$type = true;
domina.events.t30939.cljs$lang$ctorStr = "domina.events/t30939";
domina.events.t30939.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t30939");
});
domina.events.t30939.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t30939.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t30939.prototype.domina$events$Event$ = true;
domina.events.t30939.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t30939.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t30939.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t30939.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t30939.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t30939.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t30939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30941){var self__ = this;
var _30941__$1 = this;return self__.meta30940;
});
domina.events.t30939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30941,meta30940__$1){var self__ = this;
var _30941__$1 = this;return (new domina.events.t30939(self__.evt,self__.f,self__.create_listener_function,meta30940__$1));
});
domina.events.__GT_t30939 = (function __GT_t30939(evt__$1,f__$1,create_listener_function__$1,meta30940){return (new domina.events.t30939(evt__$1,f__$1,create_listener_function__$1,meta30940));
});
}
return (new domina.events.t30939(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__30946(s__30947){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__30947__$1 = s__30947;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30947__$1);if(temp__4126__auto__)
{var s__30947__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30947__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30947__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30949 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30948 = (0);while(true){
if((i__30948 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__30948);cljs.core.chunk_append.call(null,b__30949,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__30950 = (i__30948 + (1));
i__30948 = G__30950;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30949),iter__30946.call(null,cljs.core.chunk_rest.call(null,s__30947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30949),null);
}
} else
{var node = cljs.core.first.call(null,s__30947__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__30946.call(null,cljs.core.rest.call(null,s__30947__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__30959 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30960 = null;var count__30961 = (0);var i__30962 = (0);while(true){
if((i__30962 < count__30961))
{var node = cljs.core._nth.call(null,chunk__30960,i__30962);goog.events.removeAll(node);
{
var G__30967 = seq__30959;
var G__30968 = chunk__30960;
var G__30969 = count__30961;
var G__30970 = (i__30962 + (1));
seq__30959 = G__30967;
chunk__30960 = G__30968;
count__30961 = G__30969;
i__30962 = G__30970;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30959);if(temp__4126__auto__)
{var seq__30959__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30959__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30959__$1);{
var G__30971 = cljs.core.chunk_rest.call(null,seq__30959__$1);
var G__30972 = c__4299__auto__;
var G__30973 = cljs.core.count.call(null,c__4299__auto__);
var G__30974 = (0);
seq__30959 = G__30971;
chunk__30960 = G__30972;
count__30961 = G__30973;
i__30962 = G__30974;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30959__$1);goog.events.removeAll(node);
{
var G__30975 = cljs.core.next.call(null,seq__30959__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__30959 = G__30975;
chunk__30960 = G__30976;
count__30961 = G__30977;
i__30962 = G__30978;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__30963 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30964 = null;var count__30965 = (0);var i__30966 = (0);while(true){
if((i__30966 < count__30965))
{var node = cljs.core._nth.call(null,chunk__30964,i__30966);goog.events.removeAll(node,type__$1);
{
var G__30979 = seq__30963;
var G__30980 = chunk__30964;
var G__30981 = count__30965;
var G__30982 = (i__30966 + (1));
seq__30963 = G__30979;
chunk__30964 = G__30980;
count__30965 = G__30981;
i__30966 = G__30982;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30963);if(temp__4126__auto__)
{var seq__30963__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30963__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30963__$1);{
var G__30983 = cljs.core.chunk_rest.call(null,seq__30963__$1);
var G__30984 = c__4299__auto__;
var G__30985 = cljs.core.count.call(null,c__4299__auto__);
var G__30986 = (0);
seq__30963 = G__30983;
chunk__30964 = G__30984;
count__30965 = G__30985;
i__30966 = G__30986;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30963__$1);goog.events.removeAll(node,type__$1);
{
var G__30987 = cljs.core.next.call(null,seq__30963__$1);
var G__30988 = null;
var G__30989 = (0);
var G__30990 = (0);
seq__30963 = G__30987;
chunk__30964 = G__30988;
count__30965 = G__30989;
i__30966 = G__30990;
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
var G__30991 = parent;
var G__30992 = cljs.core.cons.call(null,parent,so_far);
n = G__30991;
so_far = G__30992;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31001_31009 = cljs.core.seq.call(null,ancestors);var chunk__31002_31010 = null;var count__31003_31011 = (0);var i__31004_31012 = (0);while(true){
if((i__31004_31012 < count__31003_31011))
{var n_31013 = cljs.core._nth.call(null,chunk__31002_31010,i__31004_31012);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31013;
goog.events.fireListeners(n_31013,evt.type,true,evt);
}
{
var G__31014 = seq__31001_31009;
var G__31015 = chunk__31002_31010;
var G__31016 = count__31003_31011;
var G__31017 = (i__31004_31012 + (1));
seq__31001_31009 = G__31014;
chunk__31002_31010 = G__31015;
count__31003_31011 = G__31016;
i__31004_31012 = G__31017;
continue;
}
} else
{var temp__4126__auto___31018 = cljs.core.seq.call(null,seq__31001_31009);if(temp__4126__auto___31018)
{var seq__31001_31019__$1 = temp__4126__auto___31018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31001_31019__$1))
{var c__4299__auto___31020 = cljs.core.chunk_first.call(null,seq__31001_31019__$1);{
var G__31021 = cljs.core.chunk_rest.call(null,seq__31001_31019__$1);
var G__31022 = c__4299__auto___31020;
var G__31023 = cljs.core.count.call(null,c__4299__auto___31020);
var G__31024 = (0);
seq__31001_31009 = G__31021;
chunk__31002_31010 = G__31022;
count__31003_31011 = G__31023;
i__31004_31012 = G__31024;
continue;
}
} else
{var n_31025 = cljs.core.first.call(null,seq__31001_31019__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31025;
goog.events.fireListeners(n_31025,evt.type,true,evt);
}
{
var G__31026 = cljs.core.next.call(null,seq__31001_31019__$1);
var G__31027 = null;
var G__31028 = (0);
var G__31029 = (0);
seq__31001_31009 = G__31026;
chunk__31002_31010 = G__31027;
count__31003_31011 = G__31028;
i__31004_31012 = G__31029;
continue;
}
}
} else
{}
}
break;
}
var seq__31005_31030 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31006_31031 = null;var count__31007_31032 = (0);var i__31008_31033 = (0);while(true){
if((i__31008_31033 < count__31007_31032))
{var n_31034 = cljs.core._nth.call(null,chunk__31006_31031,i__31008_31033);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31034;
goog.events.fireListeners(n_31034,evt.type,false,evt);
}
{
var G__31035 = seq__31005_31030;
var G__31036 = chunk__31006_31031;
var G__31037 = count__31007_31032;
var G__31038 = (i__31008_31033 + (1));
seq__31005_31030 = G__31035;
chunk__31006_31031 = G__31036;
count__31007_31032 = G__31037;
i__31008_31033 = G__31038;
continue;
}
} else
{var temp__4126__auto___31039 = cljs.core.seq.call(null,seq__31005_31030);if(temp__4126__auto___31039)
{var seq__31005_31040__$1 = temp__4126__auto___31039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31005_31040__$1))
{var c__4299__auto___31041 = cljs.core.chunk_first.call(null,seq__31005_31040__$1);{
var G__31042 = cljs.core.chunk_rest.call(null,seq__31005_31040__$1);
var G__31043 = c__4299__auto___31041;
var G__31044 = cljs.core.count.call(null,c__4299__auto___31041);
var G__31045 = (0);
seq__31005_31030 = G__31042;
chunk__31006_31031 = G__31043;
count__31007_31032 = G__31044;
i__31008_31033 = G__31045;
continue;
}
} else
{var n_31046 = cljs.core.first.call(null,seq__31005_31040__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31046;
goog.events.fireListeners(n_31046,evt.type,false,evt);
}
{
var G__31047 = cljs.core.next.call(null,seq__31005_31040__$1);
var G__31048 = null;
var G__31049 = (0);
var G__31050 = (0);
seq__31005_31030 = G__31047;
chunk__31006_31031 = G__31048;
count__31007_31032 = G__31049;
i__31008_31033 = G__31050;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31057_31063 = cljs.core.seq.call(null,evt_map);var chunk__31058_31064 = null;var count__31059_31065 = (0);var i__31060_31066 = (0);while(true){
if((i__31060_31066 < count__31059_31065))
{var vec__31061_31067 = cljs.core._nth.call(null,chunk__31058_31064,i__31060_31066);var k_31068 = cljs.core.nth.call(null,vec__31061_31067,(0),null);var v_31069 = cljs.core.nth.call(null,vec__31061_31067,(1),null);(evt[k_31068] = v_31069);
{
var G__31070 = seq__31057_31063;
var G__31071 = chunk__31058_31064;
var G__31072 = count__31059_31065;
var G__31073 = (i__31060_31066 + (1));
seq__31057_31063 = G__31070;
chunk__31058_31064 = G__31071;
count__31059_31065 = G__31072;
i__31060_31066 = G__31073;
continue;
}
} else
{var temp__4126__auto___31074 = cljs.core.seq.call(null,seq__31057_31063);if(temp__4126__auto___31074)
{var seq__31057_31075__$1 = temp__4126__auto___31074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31057_31075__$1))
{var c__4299__auto___31076 = cljs.core.chunk_first.call(null,seq__31057_31075__$1);{
var G__31077 = cljs.core.chunk_rest.call(null,seq__31057_31075__$1);
var G__31078 = c__4299__auto___31076;
var G__31079 = cljs.core.count.call(null,c__4299__auto___31076);
var G__31080 = (0);
seq__31057_31063 = G__31077;
chunk__31058_31064 = G__31078;
count__31059_31065 = G__31079;
i__31060_31066 = G__31080;
continue;
}
} else
{var vec__31062_31081 = cljs.core.first.call(null,seq__31057_31075__$1);var k_31082 = cljs.core.nth.call(null,vec__31062_31081,(0),null);var v_31083 = cljs.core.nth.call(null,vec__31062_31081,(1),null);(evt[k_31082] = v_31083);
{
var G__31084 = cljs.core.next.call(null,seq__31057_31075__$1);
var G__31085 = null;
var G__31086 = (0);
var G__31087 = (0);
seq__31057_31063 = G__31084;
chunk__31058_31064 = G__31085;
count__31059_31065 = G__31086;
i__31060_31066 = G__31087;
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
return (function (p1__31088_SHARP_){return goog.events.getListeners(p1__31088_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
