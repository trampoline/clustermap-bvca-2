// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19444 = {};return obj19444;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.prevent_default[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.prevent_default["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.current_target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.current_target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.event_type[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.event_type["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.raw_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.raw_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19448 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19448 = (function (evt,f,create_listener_function,meta19449){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19449 = meta19449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19448.cljs$lang$type = true;
domina.events.t19448.cljs$lang$ctorStr = "domina.events/t19448";
domina.events.t19448.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19448");
});
domina.events.t19448.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19448.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19448.prototype.domina$events$Event$ = true;
domina.events.t19448.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19448.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19448.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19448.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19448.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19448.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19450){var self__ = this;
var _19450__$1 = this;return self__.meta19449;
});
domina.events.t19448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19450,meta19449__$1){var self__ = this;
var _19450__$1 = this;return (new domina.events.t19448(self__.evt,self__.f,self__.create_listener_function,meta19449__$1));
});
domina.events.__GT_t19448 = (function __GT_t19448(evt__$1,f__$1,create_listener_function__$1,meta19449){return (new domina.events.t19448(evt__$1,f__$1,create_listener_function__$1,meta19449));
});
}
return (new domina.events.t19448(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19455(s__19456){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19456__$1 = s__19456;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19456__$1);if(temp__4126__auto__)
{var s__19456__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19456__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19456__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19458 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19457 = (0);while(true){
if((i__19457 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19457);cljs.core.chunk_append.call(null,b__19458,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19459 = (i__19457 + (1));
i__19457 = G__19459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19458),iter__19455.call(null,cljs.core.chunk_rest.call(null,s__19456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19458),null);
}
} else
{var node = cljs.core.first.call(null,s__19456__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19455.call(null,cljs.core.rest.call(null,s__19456__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4377__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19468 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19469 = null;var count__19470 = (0);var i__19471 = (0);while(true){
if((i__19471 < count__19470))
{var node = cljs.core._nth.call(null,chunk__19469,i__19471);goog.events.removeAll(node);
{
var G__19476 = seq__19468;
var G__19477 = chunk__19469;
var G__19478 = count__19470;
var G__19479 = (i__19471 + (1));
seq__19468 = G__19476;
chunk__19469 = G__19477;
count__19470 = G__19478;
i__19471 = G__19479;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19468);if(temp__4126__auto__)
{var seq__19468__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19468__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19468__$1);{
var G__19480 = cljs.core.chunk_rest.call(null,seq__19468__$1);
var G__19481 = c__4408__auto__;
var G__19482 = cljs.core.count.call(null,c__4408__auto__);
var G__19483 = (0);
seq__19468 = G__19480;
chunk__19469 = G__19481;
count__19470 = G__19482;
i__19471 = G__19483;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19468__$1);goog.events.removeAll(node);
{
var G__19484 = cljs.core.next.call(null,seq__19468__$1);
var G__19485 = null;
var G__19486 = (0);
var G__19487 = (0);
seq__19468 = G__19484;
chunk__19469 = G__19485;
count__19470 = G__19486;
i__19471 = G__19487;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19472 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19473 = null;var count__19474 = (0);var i__19475 = (0);while(true){
if((i__19475 < count__19474))
{var node = cljs.core._nth.call(null,chunk__19473,i__19475);goog.events.removeAll(node,type__$1);
{
var G__19488 = seq__19472;
var G__19489 = chunk__19473;
var G__19490 = count__19474;
var G__19491 = (i__19475 + (1));
seq__19472 = G__19488;
chunk__19473 = G__19489;
count__19474 = G__19490;
i__19475 = G__19491;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19472);if(temp__4126__auto__)
{var seq__19472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19472__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19472__$1);{
var G__19492 = cljs.core.chunk_rest.call(null,seq__19472__$1);
var G__19493 = c__4408__auto__;
var G__19494 = cljs.core.count.call(null,c__4408__auto__);
var G__19495 = (0);
seq__19472 = G__19492;
chunk__19473 = G__19493;
count__19474 = G__19494;
i__19475 = G__19495;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19472__$1);goog.events.removeAll(node,type__$1);
{
var G__19496 = cljs.core.next.call(null,seq__19472__$1);
var G__19497 = null;
var G__19498 = (0);
var G__19499 = (0);
seq__19472 = G__19496;
chunk__19473 = G__19497;
count__19474 = G__19498;
i__19475 = G__19499;
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
var G__19500 = parent;
var G__19501 = cljs.core.cons.call(null,parent,so_far);
n = G__19500;
so_far = G__19501;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19510_19518 = cljs.core.seq.call(null,ancestors);var chunk__19511_19519 = null;var count__19512_19520 = (0);var i__19513_19521 = (0);while(true){
if((i__19513_19521 < count__19512_19520))
{var n_19522 = cljs.core._nth.call(null,chunk__19511_19519,i__19513_19521);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19522;
goog.events.fireListeners(n_19522,evt.type,true,evt);
}
{
var G__19523 = seq__19510_19518;
var G__19524 = chunk__19511_19519;
var G__19525 = count__19512_19520;
var G__19526 = (i__19513_19521 + (1));
seq__19510_19518 = G__19523;
chunk__19511_19519 = G__19524;
count__19512_19520 = G__19525;
i__19513_19521 = G__19526;
continue;
}
} else
{var temp__4126__auto___19527 = cljs.core.seq.call(null,seq__19510_19518);if(temp__4126__auto___19527)
{var seq__19510_19528__$1 = temp__4126__auto___19527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19510_19528__$1))
{var c__4408__auto___19529 = cljs.core.chunk_first.call(null,seq__19510_19528__$1);{
var G__19530 = cljs.core.chunk_rest.call(null,seq__19510_19528__$1);
var G__19531 = c__4408__auto___19529;
var G__19532 = cljs.core.count.call(null,c__4408__auto___19529);
var G__19533 = (0);
seq__19510_19518 = G__19530;
chunk__19511_19519 = G__19531;
count__19512_19520 = G__19532;
i__19513_19521 = G__19533;
continue;
}
} else
{var n_19534 = cljs.core.first.call(null,seq__19510_19528__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19534;
goog.events.fireListeners(n_19534,evt.type,true,evt);
}
{
var G__19535 = cljs.core.next.call(null,seq__19510_19528__$1);
var G__19536 = null;
var G__19537 = (0);
var G__19538 = (0);
seq__19510_19518 = G__19535;
chunk__19511_19519 = G__19536;
count__19512_19520 = G__19537;
i__19513_19521 = G__19538;
continue;
}
}
} else
{}
}
break;
}
var seq__19514_19539 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19515_19540 = null;var count__19516_19541 = (0);var i__19517_19542 = (0);while(true){
if((i__19517_19542 < count__19516_19541))
{var n_19543 = cljs.core._nth.call(null,chunk__19515_19540,i__19517_19542);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19543;
goog.events.fireListeners(n_19543,evt.type,false,evt);
}
{
var G__19544 = seq__19514_19539;
var G__19545 = chunk__19515_19540;
var G__19546 = count__19516_19541;
var G__19547 = (i__19517_19542 + (1));
seq__19514_19539 = G__19544;
chunk__19515_19540 = G__19545;
count__19516_19541 = G__19546;
i__19517_19542 = G__19547;
continue;
}
} else
{var temp__4126__auto___19548 = cljs.core.seq.call(null,seq__19514_19539);if(temp__4126__auto___19548)
{var seq__19514_19549__$1 = temp__4126__auto___19548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19514_19549__$1))
{var c__4408__auto___19550 = cljs.core.chunk_first.call(null,seq__19514_19549__$1);{
var G__19551 = cljs.core.chunk_rest.call(null,seq__19514_19549__$1);
var G__19552 = c__4408__auto___19550;
var G__19553 = cljs.core.count.call(null,c__4408__auto___19550);
var G__19554 = (0);
seq__19514_19539 = G__19551;
chunk__19515_19540 = G__19552;
count__19516_19541 = G__19553;
i__19517_19542 = G__19554;
continue;
}
} else
{var n_19555 = cljs.core.first.call(null,seq__19514_19549__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19555;
goog.events.fireListeners(n_19555,evt.type,false,evt);
}
{
var G__19556 = cljs.core.next.call(null,seq__19514_19549__$1);
var G__19557 = null;
var G__19558 = (0);
var G__19559 = (0);
seq__19514_19539 = G__19556;
chunk__19515_19540 = G__19557;
count__19516_19541 = G__19558;
i__19517_19542 = G__19559;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3627__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3627__auto__))
{return o.dispatchEvent;
} else
{return and__3627__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19566_19572 = cljs.core.seq.call(null,evt_map);var chunk__19567_19573 = null;var count__19568_19574 = (0);var i__19569_19575 = (0);while(true){
if((i__19569_19575 < count__19568_19574))
{var vec__19570_19576 = cljs.core._nth.call(null,chunk__19567_19573,i__19569_19575);var k_19577 = cljs.core.nth.call(null,vec__19570_19576,(0),null);var v_19578 = cljs.core.nth.call(null,vec__19570_19576,(1),null);(evt[k_19577] = v_19578);
{
var G__19579 = seq__19566_19572;
var G__19580 = chunk__19567_19573;
var G__19581 = count__19568_19574;
var G__19582 = (i__19569_19575 + (1));
seq__19566_19572 = G__19579;
chunk__19567_19573 = G__19580;
count__19568_19574 = G__19581;
i__19569_19575 = G__19582;
continue;
}
} else
{var temp__4126__auto___19583 = cljs.core.seq.call(null,seq__19566_19572);if(temp__4126__auto___19583)
{var seq__19566_19584__$1 = temp__4126__auto___19583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19566_19584__$1))
{var c__4408__auto___19585 = cljs.core.chunk_first.call(null,seq__19566_19584__$1);{
var G__19586 = cljs.core.chunk_rest.call(null,seq__19566_19584__$1);
var G__19587 = c__4408__auto___19585;
var G__19588 = cljs.core.count.call(null,c__4408__auto___19585);
var G__19589 = (0);
seq__19566_19572 = G__19586;
chunk__19567_19573 = G__19587;
count__19568_19574 = G__19588;
i__19569_19575 = G__19589;
continue;
}
} else
{var vec__19571_19590 = cljs.core.first.call(null,seq__19566_19584__$1);var k_19591 = cljs.core.nth.call(null,vec__19571_19590,(0),null);var v_19592 = cljs.core.nth.call(null,vec__19571_19590,(1),null);(evt[k_19591] = v_19592);
{
var G__19593 = cljs.core.next.call(null,seq__19566_19584__$1);
var G__19594 = null;
var G__19595 = (0);
var G__19596 = (0);
seq__19566_19572 = G__19593;
chunk__19567_19573 = G__19594;
count__19568_19574 = G__19595;
i__19569_19575 = G__19596;
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
return (function (p1__19597_SHARP_){return goog.events.getListeners(p1__19597_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
