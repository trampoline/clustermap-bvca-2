// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj30431 = {};return obj30431;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t30435 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t30435 = (function (evt,f,create_listener_function,meta30436){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta30436 = meta30436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t30435.cljs$lang$type = true;
domina.events.t30435.cljs$lang$ctorStr = "domina.events/t30435";
domina.events.t30435.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t30435");
});
domina.events.t30435.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t30435.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t30435.prototype.domina$events$Event$ = true;
domina.events.t30435.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t30435.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t30435.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t30435.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t30435.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t30435.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t30435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30437){var self__ = this;
var _30437__$1 = this;return self__.meta30436;
});
domina.events.t30435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30437,meta30436__$1){var self__ = this;
var _30437__$1 = this;return (new domina.events.t30435(self__.evt,self__.f,self__.create_listener_function,meta30436__$1));
});
domina.events.__GT_t30435 = (function __GT_t30435(evt__$1,f__$1,create_listener_function__$1,meta30436){return (new domina.events.t30435(evt__$1,f__$1,create_listener_function__$1,meta30436));
});
}
return (new domina.events.t30435(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__30442(s__30443){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__30443__$1 = s__30443;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30443__$1);if(temp__4126__auto__)
{var s__30443__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30443__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30443__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30445 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30444 = (0);while(true){
if((i__30444 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__30444);cljs.core.chunk_append.call(null,b__30445,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__30446 = (i__30444 + (1));
i__30444 = G__30446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30445),iter__30442.call(null,cljs.core.chunk_rest.call(null,s__30443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30445),null);
}
} else
{var node = cljs.core.first.call(null,s__30443__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__30442.call(null,cljs.core.rest.call(null,s__30443__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__30455 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30456 = null;var count__30457 = (0);var i__30458 = (0);while(true){
if((i__30458 < count__30457))
{var node = cljs.core._nth.call(null,chunk__30456,i__30458);goog.events.removeAll(node);
{
var G__30463 = seq__30455;
var G__30464 = chunk__30456;
var G__30465 = count__30457;
var G__30466 = (i__30458 + (1));
seq__30455 = G__30463;
chunk__30456 = G__30464;
count__30457 = G__30465;
i__30458 = G__30466;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30455);if(temp__4126__auto__)
{var seq__30455__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30455__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30455__$1);{
var G__30467 = cljs.core.chunk_rest.call(null,seq__30455__$1);
var G__30468 = c__4299__auto__;
var G__30469 = cljs.core.count.call(null,c__4299__auto__);
var G__30470 = (0);
seq__30455 = G__30467;
chunk__30456 = G__30468;
count__30457 = G__30469;
i__30458 = G__30470;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30455__$1);goog.events.removeAll(node);
{
var G__30471 = cljs.core.next.call(null,seq__30455__$1);
var G__30472 = null;
var G__30473 = (0);
var G__30474 = (0);
seq__30455 = G__30471;
chunk__30456 = G__30472;
count__30457 = G__30473;
i__30458 = G__30474;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__30459 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30460 = null;var count__30461 = (0);var i__30462 = (0);while(true){
if((i__30462 < count__30461))
{var node = cljs.core._nth.call(null,chunk__30460,i__30462);goog.events.removeAll(node,type__$1);
{
var G__30475 = seq__30459;
var G__30476 = chunk__30460;
var G__30477 = count__30461;
var G__30478 = (i__30462 + (1));
seq__30459 = G__30475;
chunk__30460 = G__30476;
count__30461 = G__30477;
i__30462 = G__30478;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30459);if(temp__4126__auto__)
{var seq__30459__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30459__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30459__$1);{
var G__30479 = cljs.core.chunk_rest.call(null,seq__30459__$1);
var G__30480 = c__4299__auto__;
var G__30481 = cljs.core.count.call(null,c__4299__auto__);
var G__30482 = (0);
seq__30459 = G__30479;
chunk__30460 = G__30480;
count__30461 = G__30481;
i__30462 = G__30482;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30459__$1);goog.events.removeAll(node,type__$1);
{
var G__30483 = cljs.core.next.call(null,seq__30459__$1);
var G__30484 = null;
var G__30485 = (0);
var G__30486 = (0);
seq__30459 = G__30483;
chunk__30460 = G__30484;
count__30461 = G__30485;
i__30462 = G__30486;
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
var G__30487 = parent;
var G__30488 = cljs.core.cons.call(null,parent,so_far);
n = G__30487;
so_far = G__30488;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__30497_30505 = cljs.core.seq.call(null,ancestors);var chunk__30498_30506 = null;var count__30499_30507 = (0);var i__30500_30508 = (0);while(true){
if((i__30500_30508 < count__30499_30507))
{var n_30509 = cljs.core._nth.call(null,chunk__30498_30506,i__30500_30508);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30509;
goog.events.fireListeners(n_30509,evt.type,true,evt);
}
{
var G__30510 = seq__30497_30505;
var G__30511 = chunk__30498_30506;
var G__30512 = count__30499_30507;
var G__30513 = (i__30500_30508 + (1));
seq__30497_30505 = G__30510;
chunk__30498_30506 = G__30511;
count__30499_30507 = G__30512;
i__30500_30508 = G__30513;
continue;
}
} else
{var temp__4126__auto___30514 = cljs.core.seq.call(null,seq__30497_30505);if(temp__4126__auto___30514)
{var seq__30497_30515__$1 = temp__4126__auto___30514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30497_30515__$1))
{var c__4299__auto___30516 = cljs.core.chunk_first.call(null,seq__30497_30515__$1);{
var G__30517 = cljs.core.chunk_rest.call(null,seq__30497_30515__$1);
var G__30518 = c__4299__auto___30516;
var G__30519 = cljs.core.count.call(null,c__4299__auto___30516);
var G__30520 = (0);
seq__30497_30505 = G__30517;
chunk__30498_30506 = G__30518;
count__30499_30507 = G__30519;
i__30500_30508 = G__30520;
continue;
}
} else
{var n_30521 = cljs.core.first.call(null,seq__30497_30515__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30521;
goog.events.fireListeners(n_30521,evt.type,true,evt);
}
{
var G__30522 = cljs.core.next.call(null,seq__30497_30515__$1);
var G__30523 = null;
var G__30524 = (0);
var G__30525 = (0);
seq__30497_30505 = G__30522;
chunk__30498_30506 = G__30523;
count__30499_30507 = G__30524;
i__30500_30508 = G__30525;
continue;
}
}
} else
{}
}
break;
}
var seq__30501_30526 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__30502_30527 = null;var count__30503_30528 = (0);var i__30504_30529 = (0);while(true){
if((i__30504_30529 < count__30503_30528))
{var n_30530 = cljs.core._nth.call(null,chunk__30502_30527,i__30504_30529);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30530;
goog.events.fireListeners(n_30530,evt.type,false,evt);
}
{
var G__30531 = seq__30501_30526;
var G__30532 = chunk__30502_30527;
var G__30533 = count__30503_30528;
var G__30534 = (i__30504_30529 + (1));
seq__30501_30526 = G__30531;
chunk__30502_30527 = G__30532;
count__30503_30528 = G__30533;
i__30504_30529 = G__30534;
continue;
}
} else
{var temp__4126__auto___30535 = cljs.core.seq.call(null,seq__30501_30526);if(temp__4126__auto___30535)
{var seq__30501_30536__$1 = temp__4126__auto___30535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30501_30536__$1))
{var c__4299__auto___30537 = cljs.core.chunk_first.call(null,seq__30501_30536__$1);{
var G__30538 = cljs.core.chunk_rest.call(null,seq__30501_30536__$1);
var G__30539 = c__4299__auto___30537;
var G__30540 = cljs.core.count.call(null,c__4299__auto___30537);
var G__30541 = (0);
seq__30501_30526 = G__30538;
chunk__30502_30527 = G__30539;
count__30503_30528 = G__30540;
i__30504_30529 = G__30541;
continue;
}
} else
{var n_30542 = cljs.core.first.call(null,seq__30501_30536__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30542;
goog.events.fireListeners(n_30542,evt.type,false,evt);
}
{
var G__30543 = cljs.core.next.call(null,seq__30501_30536__$1);
var G__30544 = null;
var G__30545 = (0);
var G__30546 = (0);
seq__30501_30526 = G__30543;
chunk__30502_30527 = G__30544;
count__30503_30528 = G__30545;
i__30504_30529 = G__30546;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__30553_30559 = cljs.core.seq.call(null,evt_map);var chunk__30554_30560 = null;var count__30555_30561 = (0);var i__30556_30562 = (0);while(true){
if((i__30556_30562 < count__30555_30561))
{var vec__30557_30563 = cljs.core._nth.call(null,chunk__30554_30560,i__30556_30562);var k_30564 = cljs.core.nth.call(null,vec__30557_30563,(0),null);var v_30565 = cljs.core.nth.call(null,vec__30557_30563,(1),null);(evt[k_30564] = v_30565);
{
var G__30566 = seq__30553_30559;
var G__30567 = chunk__30554_30560;
var G__30568 = count__30555_30561;
var G__30569 = (i__30556_30562 + (1));
seq__30553_30559 = G__30566;
chunk__30554_30560 = G__30567;
count__30555_30561 = G__30568;
i__30556_30562 = G__30569;
continue;
}
} else
{var temp__4126__auto___30570 = cljs.core.seq.call(null,seq__30553_30559);if(temp__4126__auto___30570)
{var seq__30553_30571__$1 = temp__4126__auto___30570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30553_30571__$1))
{var c__4299__auto___30572 = cljs.core.chunk_first.call(null,seq__30553_30571__$1);{
var G__30573 = cljs.core.chunk_rest.call(null,seq__30553_30571__$1);
var G__30574 = c__4299__auto___30572;
var G__30575 = cljs.core.count.call(null,c__4299__auto___30572);
var G__30576 = (0);
seq__30553_30559 = G__30573;
chunk__30554_30560 = G__30574;
count__30555_30561 = G__30575;
i__30556_30562 = G__30576;
continue;
}
} else
{var vec__30558_30577 = cljs.core.first.call(null,seq__30553_30571__$1);var k_30578 = cljs.core.nth.call(null,vec__30558_30577,(0),null);var v_30579 = cljs.core.nth.call(null,vec__30558_30577,(1),null);(evt[k_30578] = v_30579);
{
var G__30580 = cljs.core.next.call(null,seq__30553_30571__$1);
var G__30581 = null;
var G__30582 = (0);
var G__30583 = (0);
seq__30553_30559 = G__30580;
chunk__30554_30560 = G__30581;
count__30555_30561 = G__30582;
i__30556_30562 = G__30583;
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
return (function (p1__30584_SHARP_){return goog.events.getListeners(p1__30584_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
