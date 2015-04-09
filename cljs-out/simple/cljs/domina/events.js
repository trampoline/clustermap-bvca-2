// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19445 = {};return obj19445;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.prevent_default[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.prevent_default["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.target[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.target["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.current_target[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.current_target["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.event_type[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.event_type["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3619__auto__ = evt;if(and__3619__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3619__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4267__auto__ = (((evt == null))?null:evt);return (function (){var or__3631__auto__ = (domina.events.raw_event[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.events.raw_event["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19449 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19449 = (function (evt,f,create_listener_function,meta19450){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19450 = meta19450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19449.cljs$lang$type = true;
domina.events.t19449.cljs$lang$ctorStr = "domina.events/t19449";
domina.events.t19449.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"domina.events/t19449");
});
domina.events.t19449.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19449.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3631__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return not_found;
}
});
domina.events.t19449.prototype.domina$events$Event$ = true;
domina.events.t19449.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19449.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19449.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19449.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19449.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19449.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19451){var self__ = this;
var _19451__$1 = this;return self__.meta19450;
});
domina.events.t19449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19451,meta19450__$1){var self__ = this;
var _19451__$1 = this;return (new domina.events.t19449(self__.evt,self__.f,self__.create_listener_function,meta19450__$1));
});
domina.events.__GT_t19449 = (function __GT_t19449(evt__$1,f__$1,create_listener_function__$1,meta19450){return (new domina.events.t19449(evt__$1,f__$1,create_listener_function__$1,meta19450));
});
}
return (new domina.events.t19449(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4369__auto__ = ((function (f,t){
return (function iter__19456(s__19457){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19457__$1 = s__19457;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19457__$1);if(temp__4126__auto__)
{var s__19457__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19457__$2))
{var c__4367__auto__ = cljs.core.chunk_first.call(null,s__19457__$2);var size__4368__auto__ = cljs.core.count.call(null,c__4367__auto__);var b__19459 = cljs.core.chunk_buffer.call(null,size__4368__auto__);if((function (){var i__19458 = (0);while(true){
if((i__19458 < size__4368__auto__))
{var node = cljs.core._nth.call(null,c__4367__auto__,i__19458);cljs.core.chunk_append.call(null,b__19459,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19460 = (i__19458 + (1));
i__19458 = G__19460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19459),iter__19456.call(null,cljs.core.chunk_rest.call(null,s__19457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19459),null);
}
} else
{var node = cljs.core.first.call(null,s__19457__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19456.call(null,cljs.core.rest.call(null,s__19457__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4369__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19469 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19470 = null;var count__19471 = (0);var i__19472 = (0);while(true){
if((i__19472 < count__19471))
{var node = cljs.core._nth.call(null,chunk__19470,i__19472);goog.events.removeAll(node);
{
var G__19477 = seq__19469;
var G__19478 = chunk__19470;
var G__19479 = count__19471;
var G__19480 = (i__19472 + (1));
seq__19469 = G__19477;
chunk__19470 = G__19478;
count__19471 = G__19479;
i__19472 = G__19480;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19469);if(temp__4126__auto__)
{var seq__19469__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19469__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__19469__$1);{
var G__19481 = cljs.core.chunk_rest.call(null,seq__19469__$1);
var G__19482 = c__4400__auto__;
var G__19483 = cljs.core.count.call(null,c__4400__auto__);
var G__19484 = (0);
seq__19469 = G__19481;
chunk__19470 = G__19482;
count__19471 = G__19483;
i__19472 = G__19484;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19469__$1);goog.events.removeAll(node);
{
var G__19485 = cljs.core.next.call(null,seq__19469__$1);
var G__19486 = null;
var G__19487 = (0);
var G__19488 = (0);
seq__19469 = G__19485;
chunk__19470 = G__19486;
count__19471 = G__19487;
i__19472 = G__19488;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19473 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19474 = null;var count__19475 = (0);var i__19476 = (0);while(true){
if((i__19476 < count__19475))
{var node = cljs.core._nth.call(null,chunk__19474,i__19476);goog.events.removeAll(node,type__$1);
{
var G__19489 = seq__19473;
var G__19490 = chunk__19474;
var G__19491 = count__19475;
var G__19492 = (i__19476 + (1));
seq__19473 = G__19489;
chunk__19474 = G__19490;
count__19475 = G__19491;
i__19476 = G__19492;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19473);if(temp__4126__auto__)
{var seq__19473__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19473__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__19473__$1);{
var G__19493 = cljs.core.chunk_rest.call(null,seq__19473__$1);
var G__19494 = c__4400__auto__;
var G__19495 = cljs.core.count.call(null,c__4400__auto__);
var G__19496 = (0);
seq__19473 = G__19493;
chunk__19474 = G__19494;
count__19475 = G__19495;
i__19476 = G__19496;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19473__$1);goog.events.removeAll(node,type__$1);
{
var G__19497 = cljs.core.next.call(null,seq__19473__$1);
var G__19498 = null;
var G__19499 = (0);
var G__19500 = (0);
seq__19473 = G__19497;
chunk__19474 = G__19498;
count__19475 = G__19499;
i__19476 = G__19500;
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
var G__19501 = parent;
var G__19502 = cljs.core.cons.call(null,parent,so_far);
n = G__19501;
so_far = G__19502;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19511_19519 = cljs.core.seq.call(null,ancestors);var chunk__19512_19520 = null;var count__19513_19521 = (0);var i__19514_19522 = (0);while(true){
if((i__19514_19522 < count__19513_19521))
{var n_19523 = cljs.core._nth.call(null,chunk__19512_19520,i__19514_19522);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19523;
goog.events.fireListeners(n_19523,evt.type,true,evt);
}
{
var G__19524 = seq__19511_19519;
var G__19525 = chunk__19512_19520;
var G__19526 = count__19513_19521;
var G__19527 = (i__19514_19522 + (1));
seq__19511_19519 = G__19524;
chunk__19512_19520 = G__19525;
count__19513_19521 = G__19526;
i__19514_19522 = G__19527;
continue;
}
} else
{var temp__4126__auto___19528 = cljs.core.seq.call(null,seq__19511_19519);if(temp__4126__auto___19528)
{var seq__19511_19529__$1 = temp__4126__auto___19528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19511_19529__$1))
{var c__4400__auto___19530 = cljs.core.chunk_first.call(null,seq__19511_19529__$1);{
var G__19531 = cljs.core.chunk_rest.call(null,seq__19511_19529__$1);
var G__19532 = c__4400__auto___19530;
var G__19533 = cljs.core.count.call(null,c__4400__auto___19530);
var G__19534 = (0);
seq__19511_19519 = G__19531;
chunk__19512_19520 = G__19532;
count__19513_19521 = G__19533;
i__19514_19522 = G__19534;
continue;
}
} else
{var n_19535 = cljs.core.first.call(null,seq__19511_19529__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19535;
goog.events.fireListeners(n_19535,evt.type,true,evt);
}
{
var G__19536 = cljs.core.next.call(null,seq__19511_19529__$1);
var G__19537 = null;
var G__19538 = (0);
var G__19539 = (0);
seq__19511_19519 = G__19536;
chunk__19512_19520 = G__19537;
count__19513_19521 = G__19538;
i__19514_19522 = G__19539;
continue;
}
}
} else
{}
}
break;
}
var seq__19515_19540 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19516_19541 = null;var count__19517_19542 = (0);var i__19518_19543 = (0);while(true){
if((i__19518_19543 < count__19517_19542))
{var n_19544 = cljs.core._nth.call(null,chunk__19516_19541,i__19518_19543);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19544;
goog.events.fireListeners(n_19544,evt.type,false,evt);
}
{
var G__19545 = seq__19515_19540;
var G__19546 = chunk__19516_19541;
var G__19547 = count__19517_19542;
var G__19548 = (i__19518_19543 + (1));
seq__19515_19540 = G__19545;
chunk__19516_19541 = G__19546;
count__19517_19542 = G__19547;
i__19518_19543 = G__19548;
continue;
}
} else
{var temp__4126__auto___19549 = cljs.core.seq.call(null,seq__19515_19540);if(temp__4126__auto___19549)
{var seq__19515_19550__$1 = temp__4126__auto___19549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19515_19550__$1))
{var c__4400__auto___19551 = cljs.core.chunk_first.call(null,seq__19515_19550__$1);{
var G__19552 = cljs.core.chunk_rest.call(null,seq__19515_19550__$1);
var G__19553 = c__4400__auto___19551;
var G__19554 = cljs.core.count.call(null,c__4400__auto___19551);
var G__19555 = (0);
seq__19515_19540 = G__19552;
chunk__19516_19541 = G__19553;
count__19517_19542 = G__19554;
i__19518_19543 = G__19555;
continue;
}
} else
{var n_19556 = cljs.core.first.call(null,seq__19515_19550__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19556;
goog.events.fireListeners(n_19556,evt.type,false,evt);
}
{
var G__19557 = cljs.core.next.call(null,seq__19515_19550__$1);
var G__19558 = null;
var G__19559 = (0);
var G__19560 = (0);
seq__19515_19540 = G__19557;
chunk__19516_19541 = G__19558;
count__19517_19542 = G__19559;
i__19518_19543 = G__19560;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3619__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3619__auto__))
{return o.dispatchEvent;
} else
{return and__3619__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19567_19573 = cljs.core.seq.call(null,evt_map);var chunk__19568_19574 = null;var count__19569_19575 = (0);var i__19570_19576 = (0);while(true){
if((i__19570_19576 < count__19569_19575))
{var vec__19571_19577 = cljs.core._nth.call(null,chunk__19568_19574,i__19570_19576);var k_19578 = cljs.core.nth.call(null,vec__19571_19577,(0),null);var v_19579 = cljs.core.nth.call(null,vec__19571_19577,(1),null);(evt[k_19578] = v_19579);
{
var G__19580 = seq__19567_19573;
var G__19581 = chunk__19568_19574;
var G__19582 = count__19569_19575;
var G__19583 = (i__19570_19576 + (1));
seq__19567_19573 = G__19580;
chunk__19568_19574 = G__19581;
count__19569_19575 = G__19582;
i__19570_19576 = G__19583;
continue;
}
} else
{var temp__4126__auto___19584 = cljs.core.seq.call(null,seq__19567_19573);if(temp__4126__auto___19584)
{var seq__19567_19585__$1 = temp__4126__auto___19584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19567_19585__$1))
{var c__4400__auto___19586 = cljs.core.chunk_first.call(null,seq__19567_19585__$1);{
var G__19587 = cljs.core.chunk_rest.call(null,seq__19567_19585__$1);
var G__19588 = c__4400__auto___19586;
var G__19589 = cljs.core.count.call(null,c__4400__auto___19586);
var G__19590 = (0);
seq__19567_19573 = G__19587;
chunk__19568_19574 = G__19588;
count__19569_19575 = G__19589;
i__19570_19576 = G__19590;
continue;
}
} else
{var vec__19572_19591 = cljs.core.first.call(null,seq__19567_19585__$1);var k_19592 = cljs.core.nth.call(null,vec__19572_19591,(0),null);var v_19593 = cljs.core.nth.call(null,vec__19572_19591,(1),null);(evt[k_19592] = v_19593);
{
var G__19594 = cljs.core.next.call(null,seq__19567_19585__$1);
var G__19595 = null;
var G__19596 = (0);
var G__19597 = (0);
seq__19567_19573 = G__19594;
chunk__19568_19574 = G__19595;
count__19569_19575 = G__19596;
i__19570_19576 = G__19597;
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
return (function (p1__19598_SHARP_){return goog.events.getListeners(p1__19598_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
