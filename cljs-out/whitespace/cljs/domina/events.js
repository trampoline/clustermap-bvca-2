// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23451 = {};return obj23451;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t23455 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23455 = (function (evt,f,create_listener_function,meta23456){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23456 = meta23456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23455.cljs$lang$type = true;
domina.events.t23455.cljs$lang$ctorStr = "domina.events/t23455";
domina.events.t23455.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t23455");
});
domina.events.t23455.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t23455.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t23455.prototype.domina$events$Event$ = true;
domina.events.t23455.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23455.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23455.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23455.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23455.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23455.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23457){var self__ = this;
var _23457__$1 = this;return self__.meta23456;
});
domina.events.t23455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23457,meta23456__$1){var self__ = this;
var _23457__$1 = this;return (new domina.events.t23455(self__.evt,self__.f,self__.create_listener_function,meta23456__$1));
});
domina.events.__GT_t23455 = (function __GT_t23455(evt__$1,f__$1,create_listener_function__$1,meta23456){return (new domina.events.t23455(evt__$1,f__$1,create_listener_function__$1,meta23456));
});
}
return (new domina.events.t23455(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__23462(s__23463){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__23463__$1 = s__23463;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23463__$1);if(temp__4126__auto__)
{var s__23463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23463__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__23463__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__23465 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__23464 = (0);while(true){
if((i__23464 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__23464);cljs.core.chunk_append.call(null,b__23465,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23466 = (i__23464 + (1));
i__23464 = G__23466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23465),iter__23462.call(null,cljs.core.chunk_rest.call(null,s__23463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23465),null);
}
} else
{var node = cljs.core.first.call(null,s__23463__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23462.call(null,cljs.core.rest.call(null,s__23463__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__23475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23476 = null;var count__23477 = (0);var i__23478 = (0);while(true){
if((i__23478 < count__23477))
{var node = cljs.core._nth.call(null,chunk__23476,i__23478);goog.events.removeAll(node);
{
var G__23483 = seq__23475;
var G__23484 = chunk__23476;
var G__23485 = count__23477;
var G__23486 = (i__23478 + (1));
seq__23475 = G__23483;
chunk__23476 = G__23484;
count__23477 = G__23485;
i__23478 = G__23486;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23475);if(temp__4126__auto__)
{var seq__23475__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23475__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__23475__$1);{
var G__23487 = cljs.core.chunk_rest.call(null,seq__23475__$1);
var G__23488 = c__4406__auto__;
var G__23489 = cljs.core.count.call(null,c__4406__auto__);
var G__23490 = (0);
seq__23475 = G__23487;
chunk__23476 = G__23488;
count__23477 = G__23489;
i__23478 = G__23490;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23475__$1);goog.events.removeAll(node);
{
var G__23491 = cljs.core.next.call(null,seq__23475__$1);
var G__23492 = null;
var G__23493 = (0);
var G__23494 = (0);
seq__23475 = G__23491;
chunk__23476 = G__23492;
count__23477 = G__23493;
i__23478 = G__23494;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__23479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__23480 = null;var count__23481 = (0);var i__23482 = (0);while(true){
if((i__23482 < count__23481))
{var node = cljs.core._nth.call(null,chunk__23480,i__23482);goog.events.removeAll(node,type__$1);
{
var G__23495 = seq__23479;
var G__23496 = chunk__23480;
var G__23497 = count__23481;
var G__23498 = (i__23482 + (1));
seq__23479 = G__23495;
chunk__23480 = G__23496;
count__23481 = G__23497;
i__23482 = G__23498;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23479);if(temp__4126__auto__)
{var seq__23479__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23479__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__23479__$1);{
var G__23499 = cljs.core.chunk_rest.call(null,seq__23479__$1);
var G__23500 = c__4406__auto__;
var G__23501 = cljs.core.count.call(null,c__4406__auto__);
var G__23502 = (0);
seq__23479 = G__23499;
chunk__23480 = G__23500;
count__23481 = G__23501;
i__23482 = G__23502;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__23479__$1);goog.events.removeAll(node,type__$1);
{
var G__23503 = cljs.core.next.call(null,seq__23479__$1);
var G__23504 = null;
var G__23505 = (0);
var G__23506 = (0);
seq__23479 = G__23503;
chunk__23480 = G__23504;
count__23481 = G__23505;
i__23482 = G__23506;
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
var G__23507 = parent;
var G__23508 = cljs.core.cons.call(null,parent,so_far);
n = G__23507;
so_far = G__23508;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__23517_23525 = cljs.core.seq.call(null,ancestors);var chunk__23518_23526 = null;var count__23519_23527 = (0);var i__23520_23528 = (0);while(true){
if((i__23520_23528 < count__23519_23527))
{var n_23529 = cljs.core._nth.call(null,chunk__23518_23526,i__23520_23528);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23529;
goog.events.fireListeners(n_23529,evt.type,true,evt);
}
{
var G__23530 = seq__23517_23525;
var G__23531 = chunk__23518_23526;
var G__23532 = count__23519_23527;
var G__23533 = (i__23520_23528 + (1));
seq__23517_23525 = G__23530;
chunk__23518_23526 = G__23531;
count__23519_23527 = G__23532;
i__23520_23528 = G__23533;
continue;
}
} else
{var temp__4126__auto___23534 = cljs.core.seq.call(null,seq__23517_23525);if(temp__4126__auto___23534)
{var seq__23517_23535__$1 = temp__4126__auto___23534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23517_23535__$1))
{var c__4406__auto___23536 = cljs.core.chunk_first.call(null,seq__23517_23535__$1);{
var G__23537 = cljs.core.chunk_rest.call(null,seq__23517_23535__$1);
var G__23538 = c__4406__auto___23536;
var G__23539 = cljs.core.count.call(null,c__4406__auto___23536);
var G__23540 = (0);
seq__23517_23525 = G__23537;
chunk__23518_23526 = G__23538;
count__23519_23527 = G__23539;
i__23520_23528 = G__23540;
continue;
}
} else
{var n_23541 = cljs.core.first.call(null,seq__23517_23535__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23541;
goog.events.fireListeners(n_23541,evt.type,true,evt);
}
{
var G__23542 = cljs.core.next.call(null,seq__23517_23535__$1);
var G__23543 = null;
var G__23544 = (0);
var G__23545 = (0);
seq__23517_23525 = G__23542;
chunk__23518_23526 = G__23543;
count__23519_23527 = G__23544;
i__23520_23528 = G__23545;
continue;
}
}
} else
{}
}
break;
}
var seq__23521_23546 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__23522_23547 = null;var count__23523_23548 = (0);var i__23524_23549 = (0);while(true){
if((i__23524_23549 < count__23523_23548))
{var n_23550 = cljs.core._nth.call(null,chunk__23522_23547,i__23524_23549);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23550;
goog.events.fireListeners(n_23550,evt.type,false,evt);
}
{
var G__23551 = seq__23521_23546;
var G__23552 = chunk__23522_23547;
var G__23553 = count__23523_23548;
var G__23554 = (i__23524_23549 + (1));
seq__23521_23546 = G__23551;
chunk__23522_23547 = G__23552;
count__23523_23548 = G__23553;
i__23524_23549 = G__23554;
continue;
}
} else
{var temp__4126__auto___23555 = cljs.core.seq.call(null,seq__23521_23546);if(temp__4126__auto___23555)
{var seq__23521_23556__$1 = temp__4126__auto___23555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23521_23556__$1))
{var c__4406__auto___23557 = cljs.core.chunk_first.call(null,seq__23521_23556__$1);{
var G__23558 = cljs.core.chunk_rest.call(null,seq__23521_23556__$1);
var G__23559 = c__4406__auto___23557;
var G__23560 = cljs.core.count.call(null,c__4406__auto___23557);
var G__23561 = (0);
seq__23521_23546 = G__23558;
chunk__23522_23547 = G__23559;
count__23523_23548 = G__23560;
i__23524_23549 = G__23561;
continue;
}
} else
{var n_23562 = cljs.core.first.call(null,seq__23521_23556__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23562;
goog.events.fireListeners(n_23562,evt.type,false,evt);
}
{
var G__23563 = cljs.core.next.call(null,seq__23521_23556__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__23521_23546 = G__23563;
chunk__23522_23547 = G__23564;
count__23523_23548 = G__23565;
i__23524_23549 = G__23566;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__23573_23579 = cljs.core.seq.call(null,evt_map);var chunk__23574_23580 = null;var count__23575_23581 = (0);var i__23576_23582 = (0);while(true){
if((i__23576_23582 < count__23575_23581))
{var vec__23577_23583 = cljs.core._nth.call(null,chunk__23574_23580,i__23576_23582);var k_23584 = cljs.core.nth.call(null,vec__23577_23583,(0),null);var v_23585 = cljs.core.nth.call(null,vec__23577_23583,(1),null);(evt[k_23584] = v_23585);
{
var G__23586 = seq__23573_23579;
var G__23587 = chunk__23574_23580;
var G__23588 = count__23575_23581;
var G__23589 = (i__23576_23582 + (1));
seq__23573_23579 = G__23586;
chunk__23574_23580 = G__23587;
count__23575_23581 = G__23588;
i__23576_23582 = G__23589;
continue;
}
} else
{var temp__4126__auto___23590 = cljs.core.seq.call(null,seq__23573_23579);if(temp__4126__auto___23590)
{var seq__23573_23591__$1 = temp__4126__auto___23590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23573_23591__$1))
{var c__4406__auto___23592 = cljs.core.chunk_first.call(null,seq__23573_23591__$1);{
var G__23593 = cljs.core.chunk_rest.call(null,seq__23573_23591__$1);
var G__23594 = c__4406__auto___23592;
var G__23595 = cljs.core.count.call(null,c__4406__auto___23592);
var G__23596 = (0);
seq__23573_23579 = G__23593;
chunk__23574_23580 = G__23594;
count__23575_23581 = G__23595;
i__23576_23582 = G__23596;
continue;
}
} else
{var vec__23578_23597 = cljs.core.first.call(null,seq__23573_23591__$1);var k_23598 = cljs.core.nth.call(null,vec__23578_23597,(0),null);var v_23599 = cljs.core.nth.call(null,vec__23578_23597,(1),null);(evt[k_23598] = v_23599);
{
var G__23600 = cljs.core.next.call(null,seq__23573_23591__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23573_23579 = G__23600;
chunk__23574_23580 = G__23601;
count__23575_23581 = G__23602;
i__23576_23582 = G__23603;
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
return (function (p1__23604_SHARP_){return goog.events.getListeners(p1__23604_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
