// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj55445 = {};return obj55445;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t55449 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t55449 = (function (evt,f,create_listener_function,meta55450){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta55450 = meta55450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t55449.cljs$lang$type = true;
domina.events.t55449.cljs$lang$ctorStr = "domina.events/t55449";
domina.events.t55449.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t55449");
});
domina.events.t55449.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t55449.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t55449.prototype.domina$events$Event$ = true;
domina.events.t55449.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t55449.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t55449.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t55449.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t55449.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t55449.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t55449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55451){var self__ = this;
var _55451__$1 = this;return self__.meta55450;
});
domina.events.t55449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55451,meta55450__$1){var self__ = this;
var _55451__$1 = this;return (new domina.events.t55449(self__.evt,self__.f,self__.create_listener_function,meta55450__$1));
});
domina.events.__GT_t55449 = (function __GT_t55449(evt__$1,f__$1,create_listener_function__$1,meta55450){return (new domina.events.t55449(evt__$1,f__$1,create_listener_function__$1,meta55450));
});
}
return (new domina.events.t55449(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__55456(s__55457){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__55457__$1 = s__55457;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55457__$1);if(temp__4126__auto__)
{var s__55457__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55457__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55457__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55459 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55458 = (0);while(true){
if((i__55458 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__55458);cljs.core.chunk_append.call(null,b__55459,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__55460 = (i__55458 + (1));
i__55458 = G__55460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55459),iter__55456.call(null,cljs.core.chunk_rest.call(null,s__55457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55459),null);
}
} else
{var node = cljs.core.first.call(null,s__55457__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__55456.call(null,cljs.core.rest.call(null,s__55457__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__55469 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55470 = null;var count__55471 = (0);var i__55472 = (0);while(true){
if((i__55472 < count__55471))
{var node = cljs.core._nth.call(null,chunk__55470,i__55472);goog.events.removeAll(node);
{
var G__55477 = seq__55469;
var G__55478 = chunk__55470;
var G__55479 = count__55471;
var G__55480 = (i__55472 + (1));
seq__55469 = G__55477;
chunk__55470 = G__55478;
count__55471 = G__55479;
i__55472 = G__55480;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55469);if(temp__4126__auto__)
{var seq__55469__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55469__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55469__$1);{
var G__55481 = cljs.core.chunk_rest.call(null,seq__55469__$1);
var G__55482 = c__4299__auto__;
var G__55483 = cljs.core.count.call(null,c__4299__auto__);
var G__55484 = (0);
seq__55469 = G__55481;
chunk__55470 = G__55482;
count__55471 = G__55483;
i__55472 = G__55484;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55469__$1);goog.events.removeAll(node);
{
var G__55485 = cljs.core.next.call(null,seq__55469__$1);
var G__55486 = null;
var G__55487 = (0);
var G__55488 = (0);
seq__55469 = G__55485;
chunk__55470 = G__55486;
count__55471 = G__55487;
i__55472 = G__55488;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__55473 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55474 = null;var count__55475 = (0);var i__55476 = (0);while(true){
if((i__55476 < count__55475))
{var node = cljs.core._nth.call(null,chunk__55474,i__55476);goog.events.removeAll(node,type__$1);
{
var G__55489 = seq__55473;
var G__55490 = chunk__55474;
var G__55491 = count__55475;
var G__55492 = (i__55476 + (1));
seq__55473 = G__55489;
chunk__55474 = G__55490;
count__55475 = G__55491;
i__55476 = G__55492;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55473);if(temp__4126__auto__)
{var seq__55473__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55473__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55473__$1);{
var G__55493 = cljs.core.chunk_rest.call(null,seq__55473__$1);
var G__55494 = c__4299__auto__;
var G__55495 = cljs.core.count.call(null,c__4299__auto__);
var G__55496 = (0);
seq__55473 = G__55493;
chunk__55474 = G__55494;
count__55475 = G__55495;
i__55476 = G__55496;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55473__$1);goog.events.removeAll(node,type__$1);
{
var G__55497 = cljs.core.next.call(null,seq__55473__$1);
var G__55498 = null;
var G__55499 = (0);
var G__55500 = (0);
seq__55473 = G__55497;
chunk__55474 = G__55498;
count__55475 = G__55499;
i__55476 = G__55500;
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
var G__55501 = parent;
var G__55502 = cljs.core.cons.call(null,parent,so_far);
n = G__55501;
so_far = G__55502;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__55511_55519 = cljs.core.seq.call(null,ancestors);var chunk__55512_55520 = null;var count__55513_55521 = (0);var i__55514_55522 = (0);while(true){
if((i__55514_55522 < count__55513_55521))
{var n_55523 = cljs.core._nth.call(null,chunk__55512_55520,i__55514_55522);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55523;
goog.events.fireListeners(n_55523,evt.type,true,evt);
}
{
var G__55524 = seq__55511_55519;
var G__55525 = chunk__55512_55520;
var G__55526 = count__55513_55521;
var G__55527 = (i__55514_55522 + (1));
seq__55511_55519 = G__55524;
chunk__55512_55520 = G__55525;
count__55513_55521 = G__55526;
i__55514_55522 = G__55527;
continue;
}
} else
{var temp__4126__auto___55528 = cljs.core.seq.call(null,seq__55511_55519);if(temp__4126__auto___55528)
{var seq__55511_55529__$1 = temp__4126__auto___55528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55511_55529__$1))
{var c__4299__auto___55530 = cljs.core.chunk_first.call(null,seq__55511_55529__$1);{
var G__55531 = cljs.core.chunk_rest.call(null,seq__55511_55529__$1);
var G__55532 = c__4299__auto___55530;
var G__55533 = cljs.core.count.call(null,c__4299__auto___55530);
var G__55534 = (0);
seq__55511_55519 = G__55531;
chunk__55512_55520 = G__55532;
count__55513_55521 = G__55533;
i__55514_55522 = G__55534;
continue;
}
} else
{var n_55535 = cljs.core.first.call(null,seq__55511_55529__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55535;
goog.events.fireListeners(n_55535,evt.type,true,evt);
}
{
var G__55536 = cljs.core.next.call(null,seq__55511_55529__$1);
var G__55537 = null;
var G__55538 = (0);
var G__55539 = (0);
seq__55511_55519 = G__55536;
chunk__55512_55520 = G__55537;
count__55513_55521 = G__55538;
i__55514_55522 = G__55539;
continue;
}
}
} else
{}
}
break;
}
var seq__55515_55540 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__55516_55541 = null;var count__55517_55542 = (0);var i__55518_55543 = (0);while(true){
if((i__55518_55543 < count__55517_55542))
{var n_55544 = cljs.core._nth.call(null,chunk__55516_55541,i__55518_55543);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55544;
goog.events.fireListeners(n_55544,evt.type,false,evt);
}
{
var G__55545 = seq__55515_55540;
var G__55546 = chunk__55516_55541;
var G__55547 = count__55517_55542;
var G__55548 = (i__55518_55543 + (1));
seq__55515_55540 = G__55545;
chunk__55516_55541 = G__55546;
count__55517_55542 = G__55547;
i__55518_55543 = G__55548;
continue;
}
} else
{var temp__4126__auto___55549 = cljs.core.seq.call(null,seq__55515_55540);if(temp__4126__auto___55549)
{var seq__55515_55550__$1 = temp__4126__auto___55549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55515_55550__$1))
{var c__4299__auto___55551 = cljs.core.chunk_first.call(null,seq__55515_55550__$1);{
var G__55552 = cljs.core.chunk_rest.call(null,seq__55515_55550__$1);
var G__55553 = c__4299__auto___55551;
var G__55554 = cljs.core.count.call(null,c__4299__auto___55551);
var G__55555 = (0);
seq__55515_55540 = G__55552;
chunk__55516_55541 = G__55553;
count__55517_55542 = G__55554;
i__55518_55543 = G__55555;
continue;
}
} else
{var n_55556 = cljs.core.first.call(null,seq__55515_55550__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55556;
goog.events.fireListeners(n_55556,evt.type,false,evt);
}
{
var G__55557 = cljs.core.next.call(null,seq__55515_55550__$1);
var G__55558 = null;
var G__55559 = (0);
var G__55560 = (0);
seq__55515_55540 = G__55557;
chunk__55516_55541 = G__55558;
count__55517_55542 = G__55559;
i__55518_55543 = G__55560;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__55567_55573 = cljs.core.seq.call(null,evt_map);var chunk__55568_55574 = null;var count__55569_55575 = (0);var i__55570_55576 = (0);while(true){
if((i__55570_55576 < count__55569_55575))
{var vec__55571_55577 = cljs.core._nth.call(null,chunk__55568_55574,i__55570_55576);var k_55578 = cljs.core.nth.call(null,vec__55571_55577,(0),null);var v_55579 = cljs.core.nth.call(null,vec__55571_55577,(1),null);(evt[k_55578] = v_55579);
{
var G__55580 = seq__55567_55573;
var G__55581 = chunk__55568_55574;
var G__55582 = count__55569_55575;
var G__55583 = (i__55570_55576 + (1));
seq__55567_55573 = G__55580;
chunk__55568_55574 = G__55581;
count__55569_55575 = G__55582;
i__55570_55576 = G__55583;
continue;
}
} else
{var temp__4126__auto___55584 = cljs.core.seq.call(null,seq__55567_55573);if(temp__4126__auto___55584)
{var seq__55567_55585__$1 = temp__4126__auto___55584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55567_55585__$1))
{var c__4299__auto___55586 = cljs.core.chunk_first.call(null,seq__55567_55585__$1);{
var G__55587 = cljs.core.chunk_rest.call(null,seq__55567_55585__$1);
var G__55588 = c__4299__auto___55586;
var G__55589 = cljs.core.count.call(null,c__4299__auto___55586);
var G__55590 = (0);
seq__55567_55573 = G__55587;
chunk__55568_55574 = G__55588;
count__55569_55575 = G__55589;
i__55570_55576 = G__55590;
continue;
}
} else
{var vec__55572_55591 = cljs.core.first.call(null,seq__55567_55585__$1);var k_55592 = cljs.core.nth.call(null,vec__55572_55591,(0),null);var v_55593 = cljs.core.nth.call(null,vec__55572_55591,(1),null);(evt[k_55592] = v_55593);
{
var G__55594 = cljs.core.next.call(null,seq__55567_55585__$1);
var G__55595 = null;
var G__55596 = (0);
var G__55597 = (0);
seq__55567_55573 = G__55594;
chunk__55568_55574 = G__55595;
count__55569_55575 = G__55596;
i__55570_55576 = G__55597;
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
return (function (p1__55598_SHARP_){return goog.events.getListeners(p1__55598_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map