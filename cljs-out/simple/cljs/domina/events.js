// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19447 = {};return obj19447;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19451 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19451 = (function (evt,f,create_listener_function,meta19452){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19452 = meta19452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19451.cljs$lang$type = true;
domina.events.t19451.cljs$lang$ctorStr = "domina.events/t19451";
domina.events.t19451.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19451");
});
domina.events.t19451.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19451.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19451.prototype.domina$events$Event$ = true;
domina.events.t19451.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19451.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19451.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19451.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19451.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19451.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19453){var self__ = this;
var _19453__$1 = this;return self__.meta19452;
});
domina.events.t19451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19453,meta19452__$1){var self__ = this;
var _19453__$1 = this;return (new domina.events.t19451(self__.evt,self__.f,self__.create_listener_function,meta19452__$1));
});
domina.events.__GT_t19451 = (function __GT_t19451(evt__$1,f__$1,create_listener_function__$1,meta19452){return (new domina.events.t19451(evt__$1,f__$1,create_listener_function__$1,meta19452));
});
}
return (new domina.events.t19451(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19458(s__19459){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19459__$1 = s__19459;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19459__$1);if(temp__4126__auto__)
{var s__19459__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19459__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19459__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19461 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19460 = (0);while(true){
if((i__19460 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19460);cljs.core.chunk_append.call(null,b__19461,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19462 = (i__19460 + (1));
i__19460 = G__19462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19461),iter__19458.call(null,cljs.core.chunk_rest.call(null,s__19459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19461),null);
}
} else
{var node = cljs.core.first.call(null,s__19459__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19458.call(null,cljs.core.rest.call(null,s__19459__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19472 = null;var count__19473 = (0);var i__19474 = (0);while(true){
if((i__19474 < count__19473))
{var node = cljs.core._nth.call(null,chunk__19472,i__19474);goog.events.removeAll(node);
{
var G__19479 = seq__19471;
var G__19480 = chunk__19472;
var G__19481 = count__19473;
var G__19482 = (i__19474 + (1));
seq__19471 = G__19479;
chunk__19472 = G__19480;
count__19473 = G__19481;
i__19474 = G__19482;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19471);if(temp__4126__auto__)
{var seq__19471__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19471__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19471__$1);{
var G__19483 = cljs.core.chunk_rest.call(null,seq__19471__$1);
var G__19484 = c__4408__auto__;
var G__19485 = cljs.core.count.call(null,c__4408__auto__);
var G__19486 = (0);
seq__19471 = G__19483;
chunk__19472 = G__19484;
count__19473 = G__19485;
i__19474 = G__19486;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19471__$1);goog.events.removeAll(node);
{
var G__19487 = cljs.core.next.call(null,seq__19471__$1);
var G__19488 = null;
var G__19489 = (0);
var G__19490 = (0);
seq__19471 = G__19487;
chunk__19472 = G__19488;
count__19473 = G__19489;
i__19474 = G__19490;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19476 = null;var count__19477 = (0);var i__19478 = (0);while(true){
if((i__19478 < count__19477))
{var node = cljs.core._nth.call(null,chunk__19476,i__19478);goog.events.removeAll(node,type__$1);
{
var G__19491 = seq__19475;
var G__19492 = chunk__19476;
var G__19493 = count__19477;
var G__19494 = (i__19478 + (1));
seq__19475 = G__19491;
chunk__19476 = G__19492;
count__19477 = G__19493;
i__19478 = G__19494;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19475);if(temp__4126__auto__)
{var seq__19475__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19475__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19475__$1);{
var G__19495 = cljs.core.chunk_rest.call(null,seq__19475__$1);
var G__19496 = c__4408__auto__;
var G__19497 = cljs.core.count.call(null,c__4408__auto__);
var G__19498 = (0);
seq__19475 = G__19495;
chunk__19476 = G__19496;
count__19477 = G__19497;
i__19478 = G__19498;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19475__$1);goog.events.removeAll(node,type__$1);
{
var G__19499 = cljs.core.next.call(null,seq__19475__$1);
var G__19500 = null;
var G__19501 = (0);
var G__19502 = (0);
seq__19475 = G__19499;
chunk__19476 = G__19500;
count__19477 = G__19501;
i__19478 = G__19502;
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
var G__19503 = parent;
var G__19504 = cljs.core.cons.call(null,parent,so_far);
n = G__19503;
so_far = G__19504;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19513_19521 = cljs.core.seq.call(null,ancestors);var chunk__19514_19522 = null;var count__19515_19523 = (0);var i__19516_19524 = (0);while(true){
if((i__19516_19524 < count__19515_19523))
{var n_19525 = cljs.core._nth.call(null,chunk__19514_19522,i__19516_19524);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19525;
goog.events.fireListeners(n_19525,evt.type,true,evt);
}
{
var G__19526 = seq__19513_19521;
var G__19527 = chunk__19514_19522;
var G__19528 = count__19515_19523;
var G__19529 = (i__19516_19524 + (1));
seq__19513_19521 = G__19526;
chunk__19514_19522 = G__19527;
count__19515_19523 = G__19528;
i__19516_19524 = G__19529;
continue;
}
} else
{var temp__4126__auto___19530 = cljs.core.seq.call(null,seq__19513_19521);if(temp__4126__auto___19530)
{var seq__19513_19531__$1 = temp__4126__auto___19530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19513_19531__$1))
{var c__4408__auto___19532 = cljs.core.chunk_first.call(null,seq__19513_19531__$1);{
var G__19533 = cljs.core.chunk_rest.call(null,seq__19513_19531__$1);
var G__19534 = c__4408__auto___19532;
var G__19535 = cljs.core.count.call(null,c__4408__auto___19532);
var G__19536 = (0);
seq__19513_19521 = G__19533;
chunk__19514_19522 = G__19534;
count__19515_19523 = G__19535;
i__19516_19524 = G__19536;
continue;
}
} else
{var n_19537 = cljs.core.first.call(null,seq__19513_19531__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19537;
goog.events.fireListeners(n_19537,evt.type,true,evt);
}
{
var G__19538 = cljs.core.next.call(null,seq__19513_19531__$1);
var G__19539 = null;
var G__19540 = (0);
var G__19541 = (0);
seq__19513_19521 = G__19538;
chunk__19514_19522 = G__19539;
count__19515_19523 = G__19540;
i__19516_19524 = G__19541;
continue;
}
}
} else
{}
}
break;
}
var seq__19517_19542 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19518_19543 = null;var count__19519_19544 = (0);var i__19520_19545 = (0);while(true){
if((i__19520_19545 < count__19519_19544))
{var n_19546 = cljs.core._nth.call(null,chunk__19518_19543,i__19520_19545);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19546;
goog.events.fireListeners(n_19546,evt.type,false,evt);
}
{
var G__19547 = seq__19517_19542;
var G__19548 = chunk__19518_19543;
var G__19549 = count__19519_19544;
var G__19550 = (i__19520_19545 + (1));
seq__19517_19542 = G__19547;
chunk__19518_19543 = G__19548;
count__19519_19544 = G__19549;
i__19520_19545 = G__19550;
continue;
}
} else
{var temp__4126__auto___19551 = cljs.core.seq.call(null,seq__19517_19542);if(temp__4126__auto___19551)
{var seq__19517_19552__$1 = temp__4126__auto___19551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19517_19552__$1))
{var c__4408__auto___19553 = cljs.core.chunk_first.call(null,seq__19517_19552__$1);{
var G__19554 = cljs.core.chunk_rest.call(null,seq__19517_19552__$1);
var G__19555 = c__4408__auto___19553;
var G__19556 = cljs.core.count.call(null,c__4408__auto___19553);
var G__19557 = (0);
seq__19517_19542 = G__19554;
chunk__19518_19543 = G__19555;
count__19519_19544 = G__19556;
i__19520_19545 = G__19557;
continue;
}
} else
{var n_19558 = cljs.core.first.call(null,seq__19517_19552__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19558;
goog.events.fireListeners(n_19558,evt.type,false,evt);
}
{
var G__19559 = cljs.core.next.call(null,seq__19517_19552__$1);
var G__19560 = null;
var G__19561 = (0);
var G__19562 = (0);
seq__19517_19542 = G__19559;
chunk__19518_19543 = G__19560;
count__19519_19544 = G__19561;
i__19520_19545 = G__19562;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19569_19575 = cljs.core.seq.call(null,evt_map);var chunk__19570_19576 = null;var count__19571_19577 = (0);var i__19572_19578 = (0);while(true){
if((i__19572_19578 < count__19571_19577))
{var vec__19573_19579 = cljs.core._nth.call(null,chunk__19570_19576,i__19572_19578);var k_19580 = cljs.core.nth.call(null,vec__19573_19579,(0),null);var v_19581 = cljs.core.nth.call(null,vec__19573_19579,(1),null);(evt[k_19580] = v_19581);
{
var G__19582 = seq__19569_19575;
var G__19583 = chunk__19570_19576;
var G__19584 = count__19571_19577;
var G__19585 = (i__19572_19578 + (1));
seq__19569_19575 = G__19582;
chunk__19570_19576 = G__19583;
count__19571_19577 = G__19584;
i__19572_19578 = G__19585;
continue;
}
} else
{var temp__4126__auto___19586 = cljs.core.seq.call(null,seq__19569_19575);if(temp__4126__auto___19586)
{var seq__19569_19587__$1 = temp__4126__auto___19586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19569_19587__$1))
{var c__4408__auto___19588 = cljs.core.chunk_first.call(null,seq__19569_19587__$1);{
var G__19589 = cljs.core.chunk_rest.call(null,seq__19569_19587__$1);
var G__19590 = c__4408__auto___19588;
var G__19591 = cljs.core.count.call(null,c__4408__auto___19588);
var G__19592 = (0);
seq__19569_19575 = G__19589;
chunk__19570_19576 = G__19590;
count__19571_19577 = G__19591;
i__19572_19578 = G__19592;
continue;
}
} else
{var vec__19574_19593 = cljs.core.first.call(null,seq__19569_19587__$1);var k_19594 = cljs.core.nth.call(null,vec__19574_19593,(0),null);var v_19595 = cljs.core.nth.call(null,vec__19574_19593,(1),null);(evt[k_19594] = v_19595);
{
var G__19596 = cljs.core.next.call(null,seq__19569_19587__$1);
var G__19597 = null;
var G__19598 = (0);
var G__19599 = (0);
seq__19569_19575 = G__19596;
chunk__19570_19576 = G__19597;
count__19571_19577 = G__19598;
i__19572_19578 = G__19599;
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
return (function (p1__19600_SHARP_){return goog.events.getListeners(p1__19600_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
