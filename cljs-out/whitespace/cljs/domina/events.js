// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18451 = {};return obj18451;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18455 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18455 = (function (evt,f,create_listener_function,meta18456){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18456 = meta18456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18455.cljs$lang$type = true;
domina.events.t18455.cljs$lang$ctorStr = "domina.events/t18455";
domina.events.t18455.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t18455");
});
domina.events.t18455.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18455.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t18455.prototype.domina$events$Event$ = true;
domina.events.t18455.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18455.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18455.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18455.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18455.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18455.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18457){var self__ = this;
var _18457__$1 = this;return self__.meta18456;
});
domina.events.t18455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18457,meta18456__$1){var self__ = this;
var _18457__$1 = this;return (new domina.events.t18455(self__.evt,self__.f,self__.create_listener_function,meta18456__$1));
});
domina.events.__GT_t18455 = (function __GT_t18455(evt__$1,f__$1,create_listener_function__$1,meta18456){return (new domina.events.t18455(evt__$1,f__$1,create_listener_function__$1,meta18456));
});
}
return (new domina.events.t18455(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__18462(s__18463){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18463__$1 = s__18463;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18463__$1);if(temp__4126__auto__)
{var s__18463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18463__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18463__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18465 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18464 = (0);while(true){
if((i__18464 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__18464);cljs.core.chunk_append.call(null,b__18465,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18466 = (i__18464 + (1));
i__18464 = G__18466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18465),iter__18462.call(null,cljs.core.chunk_rest.call(null,s__18463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18465),null);
}
} else
{var node = cljs.core.first.call(null,s__18463__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18462.call(null,cljs.core.rest.call(null,s__18463__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18476 = null;var count__18477 = (0);var i__18478 = (0);while(true){
if((i__18478 < count__18477))
{var node = cljs.core._nth.call(null,chunk__18476,i__18478);goog.events.removeAll(node);
{
var G__18483 = seq__18475;
var G__18484 = chunk__18476;
var G__18485 = count__18477;
var G__18486 = (i__18478 + (1));
seq__18475 = G__18483;
chunk__18476 = G__18484;
count__18477 = G__18485;
i__18478 = G__18486;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18475);if(temp__4126__auto__)
{var seq__18475__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18475__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18475__$1);{
var G__18487 = cljs.core.chunk_rest.call(null,seq__18475__$1);
var G__18488 = c__4299__auto__;
var G__18489 = cljs.core.count.call(null,c__4299__auto__);
var G__18490 = (0);
seq__18475 = G__18487;
chunk__18476 = G__18488;
count__18477 = G__18489;
i__18478 = G__18490;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18475__$1);goog.events.removeAll(node);
{
var G__18491 = cljs.core.next.call(null,seq__18475__$1);
var G__18492 = null;
var G__18493 = (0);
var G__18494 = (0);
seq__18475 = G__18491;
chunk__18476 = G__18492;
count__18477 = G__18493;
i__18478 = G__18494;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18480 = null;var count__18481 = (0);var i__18482 = (0);while(true){
if((i__18482 < count__18481))
{var node = cljs.core._nth.call(null,chunk__18480,i__18482);goog.events.removeAll(node,type__$1);
{
var G__18495 = seq__18479;
var G__18496 = chunk__18480;
var G__18497 = count__18481;
var G__18498 = (i__18482 + (1));
seq__18479 = G__18495;
chunk__18480 = G__18496;
count__18481 = G__18497;
i__18482 = G__18498;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18479);if(temp__4126__auto__)
{var seq__18479__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18479__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18479__$1);{
var G__18499 = cljs.core.chunk_rest.call(null,seq__18479__$1);
var G__18500 = c__4299__auto__;
var G__18501 = cljs.core.count.call(null,c__4299__auto__);
var G__18502 = (0);
seq__18479 = G__18499;
chunk__18480 = G__18500;
count__18481 = G__18501;
i__18482 = G__18502;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18479__$1);goog.events.removeAll(node,type__$1);
{
var G__18503 = cljs.core.next.call(null,seq__18479__$1);
var G__18504 = null;
var G__18505 = (0);
var G__18506 = (0);
seq__18479 = G__18503;
chunk__18480 = G__18504;
count__18481 = G__18505;
i__18482 = G__18506;
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
var G__18507 = parent;
var G__18508 = cljs.core.cons.call(null,parent,so_far);
n = G__18507;
so_far = G__18508;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18517_18525 = cljs.core.seq.call(null,ancestors);var chunk__18518_18526 = null;var count__18519_18527 = (0);var i__18520_18528 = (0);while(true){
if((i__18520_18528 < count__18519_18527))
{var n_18529 = cljs.core._nth.call(null,chunk__18518_18526,i__18520_18528);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18529;
goog.events.fireListeners(n_18529,evt.type,true,evt);
}
{
var G__18530 = seq__18517_18525;
var G__18531 = chunk__18518_18526;
var G__18532 = count__18519_18527;
var G__18533 = (i__18520_18528 + (1));
seq__18517_18525 = G__18530;
chunk__18518_18526 = G__18531;
count__18519_18527 = G__18532;
i__18520_18528 = G__18533;
continue;
}
} else
{var temp__4126__auto___18534 = cljs.core.seq.call(null,seq__18517_18525);if(temp__4126__auto___18534)
{var seq__18517_18535__$1 = temp__4126__auto___18534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18517_18535__$1))
{var c__4299__auto___18536 = cljs.core.chunk_first.call(null,seq__18517_18535__$1);{
var G__18537 = cljs.core.chunk_rest.call(null,seq__18517_18535__$1);
var G__18538 = c__4299__auto___18536;
var G__18539 = cljs.core.count.call(null,c__4299__auto___18536);
var G__18540 = (0);
seq__18517_18525 = G__18537;
chunk__18518_18526 = G__18538;
count__18519_18527 = G__18539;
i__18520_18528 = G__18540;
continue;
}
} else
{var n_18541 = cljs.core.first.call(null,seq__18517_18535__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18541;
goog.events.fireListeners(n_18541,evt.type,true,evt);
}
{
var G__18542 = cljs.core.next.call(null,seq__18517_18535__$1);
var G__18543 = null;
var G__18544 = (0);
var G__18545 = (0);
seq__18517_18525 = G__18542;
chunk__18518_18526 = G__18543;
count__18519_18527 = G__18544;
i__18520_18528 = G__18545;
continue;
}
}
} else
{}
}
break;
}
var seq__18521_18546 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18522_18547 = null;var count__18523_18548 = (0);var i__18524_18549 = (0);while(true){
if((i__18524_18549 < count__18523_18548))
{var n_18550 = cljs.core._nth.call(null,chunk__18522_18547,i__18524_18549);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18550;
goog.events.fireListeners(n_18550,evt.type,false,evt);
}
{
var G__18551 = seq__18521_18546;
var G__18552 = chunk__18522_18547;
var G__18553 = count__18523_18548;
var G__18554 = (i__18524_18549 + (1));
seq__18521_18546 = G__18551;
chunk__18522_18547 = G__18552;
count__18523_18548 = G__18553;
i__18524_18549 = G__18554;
continue;
}
} else
{var temp__4126__auto___18555 = cljs.core.seq.call(null,seq__18521_18546);if(temp__4126__auto___18555)
{var seq__18521_18556__$1 = temp__4126__auto___18555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18521_18556__$1))
{var c__4299__auto___18557 = cljs.core.chunk_first.call(null,seq__18521_18556__$1);{
var G__18558 = cljs.core.chunk_rest.call(null,seq__18521_18556__$1);
var G__18559 = c__4299__auto___18557;
var G__18560 = cljs.core.count.call(null,c__4299__auto___18557);
var G__18561 = (0);
seq__18521_18546 = G__18558;
chunk__18522_18547 = G__18559;
count__18523_18548 = G__18560;
i__18524_18549 = G__18561;
continue;
}
} else
{var n_18562 = cljs.core.first.call(null,seq__18521_18556__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18562;
goog.events.fireListeners(n_18562,evt.type,false,evt);
}
{
var G__18563 = cljs.core.next.call(null,seq__18521_18556__$1);
var G__18564 = null;
var G__18565 = (0);
var G__18566 = (0);
seq__18521_18546 = G__18563;
chunk__18522_18547 = G__18564;
count__18523_18548 = G__18565;
i__18524_18549 = G__18566;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18573_18579 = cljs.core.seq.call(null,evt_map);var chunk__18574_18580 = null;var count__18575_18581 = (0);var i__18576_18582 = (0);while(true){
if((i__18576_18582 < count__18575_18581))
{var vec__18577_18583 = cljs.core._nth.call(null,chunk__18574_18580,i__18576_18582);var k_18584 = cljs.core.nth.call(null,vec__18577_18583,(0),null);var v_18585 = cljs.core.nth.call(null,vec__18577_18583,(1),null);(evt[k_18584] = v_18585);
{
var G__18586 = seq__18573_18579;
var G__18587 = chunk__18574_18580;
var G__18588 = count__18575_18581;
var G__18589 = (i__18576_18582 + (1));
seq__18573_18579 = G__18586;
chunk__18574_18580 = G__18587;
count__18575_18581 = G__18588;
i__18576_18582 = G__18589;
continue;
}
} else
{var temp__4126__auto___18590 = cljs.core.seq.call(null,seq__18573_18579);if(temp__4126__auto___18590)
{var seq__18573_18591__$1 = temp__4126__auto___18590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18573_18591__$1))
{var c__4299__auto___18592 = cljs.core.chunk_first.call(null,seq__18573_18591__$1);{
var G__18593 = cljs.core.chunk_rest.call(null,seq__18573_18591__$1);
var G__18594 = c__4299__auto___18592;
var G__18595 = cljs.core.count.call(null,c__4299__auto___18592);
var G__18596 = (0);
seq__18573_18579 = G__18593;
chunk__18574_18580 = G__18594;
count__18575_18581 = G__18595;
i__18576_18582 = G__18596;
continue;
}
} else
{var vec__18578_18597 = cljs.core.first.call(null,seq__18573_18591__$1);var k_18598 = cljs.core.nth.call(null,vec__18578_18597,(0),null);var v_18599 = cljs.core.nth.call(null,vec__18578_18597,(1),null);(evt[k_18598] = v_18599);
{
var G__18600 = cljs.core.next.call(null,seq__18573_18591__$1);
var G__18601 = null;
var G__18602 = (0);
var G__18603 = (0);
seq__18573_18579 = G__18600;
chunk__18574_18580 = G__18601;
count__18575_18581 = G__18602;
i__18576_18582 = G__18603;
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
return (function (p1__18604_SHARP_){return goog.events.getListeners(p1__18604_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
