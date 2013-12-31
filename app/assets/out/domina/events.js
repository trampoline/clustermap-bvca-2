// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14374 = {};return obj14374;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14378 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14378 = (function (evt,f,create_listener_function,meta14379){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14379 = meta14379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14378.cljs$lang$type = true;
domina.events.t14378.cljs$lang$ctorStr = "domina.events/t14378";
domina.events.t14378.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t14378");
});
domina.events.t14378.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14378.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t14378.prototype.domina$events$Event$ = true;
domina.events.t14378.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14378.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14378.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14378.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14378.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14378.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14380){var self__ = this;
var _14380__$1 = this;return self__.meta14379;
});
domina.events.t14378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14380,meta14379__$1){var self__ = this;
var _14380__$1 = this;return (new domina.events.t14378(self__.evt,self__.f,self__.create_listener_function,meta14379__$1));
});
domina.events.__GT_t14378 = (function __GT_t14378(evt__$1,f__$1,create_listener_function__$1,meta14379){return (new domina.events.t14378(evt__$1,f__$1,create_listener_function__$1,meta14379));
});
}
return (new domina.events.t14378(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__14385(s__14386){return (new cljs.core.LazySeq(null,(function (){var s__14386__$1 = s__14386;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14386__$1);if(temp__4092__auto__)
{var s__14386__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14386__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__14386__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__14388 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__14387 = 0;while(true){
if((i__14387 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__14387);cljs.core.chunk_append.call(null,b__14388,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14389 = (i__14387 + 1);
i__14387 = G__14389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14388),iter__14385.call(null,cljs.core.chunk_rest.call(null,s__14386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14388),null);
}
} else
{var node = cljs.core.first.call(null,s__14386__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14385.call(null,cljs.core.rest.call(null,s__14386__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__14398 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14399 = null;var count__14400 = 0;var i__14401 = 0;while(true){
if((i__14401 < count__14400))
{var node = cljs.core._nth.call(null,chunk__14399,i__14401);goog.events.removeAll(node);
{
var G__14406 = seq__14398;
var G__14407 = chunk__14399;
var G__14408 = count__14400;
var G__14409 = (i__14401 + 1);
seq__14398 = G__14406;
chunk__14399 = G__14407;
count__14400 = G__14408;
i__14401 = G__14409;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14398);if(temp__4092__auto__)
{var seq__14398__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14398__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__14398__$1);{
var G__14410 = cljs.core.chunk_rest.call(null,seq__14398__$1);
var G__14411 = c__4015__auto__;
var G__14412 = cljs.core.count.call(null,c__4015__auto__);
var G__14413 = 0;
seq__14398 = G__14410;
chunk__14399 = G__14411;
count__14400 = G__14412;
i__14401 = G__14413;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14398__$1);goog.events.removeAll(node);
{
var G__14414 = cljs.core.next.call(null,seq__14398__$1);
var G__14415 = null;
var G__14416 = 0;
var G__14417 = 0;
seq__14398 = G__14414;
chunk__14399 = G__14415;
count__14400 = G__14416;
i__14401 = G__14417;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14402 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14403 = null;var count__14404 = 0;var i__14405 = 0;while(true){
if((i__14405 < count__14404))
{var node = cljs.core._nth.call(null,chunk__14403,i__14405);goog.events.removeAll(node,type__$1);
{
var G__14418 = seq__14402;
var G__14419 = chunk__14403;
var G__14420 = count__14404;
var G__14421 = (i__14405 + 1);
seq__14402 = G__14418;
chunk__14403 = G__14419;
count__14404 = G__14420;
i__14405 = G__14421;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14402);if(temp__4092__auto__)
{var seq__14402__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14402__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__14402__$1);{
var G__14422 = cljs.core.chunk_rest.call(null,seq__14402__$1);
var G__14423 = c__4015__auto__;
var G__14424 = cljs.core.count.call(null,c__4015__auto__);
var G__14425 = 0;
seq__14402 = G__14422;
chunk__14403 = G__14423;
count__14404 = G__14424;
i__14405 = G__14425;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14402__$1);goog.events.removeAll(node,type__$1);
{
var G__14426 = cljs.core.next.call(null,seq__14402__$1);
var G__14427 = null;
var G__14428 = 0;
var G__14429 = 0;
seq__14402 = G__14426;
chunk__14403 = G__14427;
count__14404 = G__14428;
i__14405 = G__14429;
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
var G__14430 = parent;
var G__14431 = cljs.core.cons.call(null,parent,so_far);
n = G__14430;
so_far = G__14431;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14440_14448 = cljs.core.seq.call(null,ancestors);var chunk__14441_14449 = null;var count__14442_14450 = 0;var i__14443_14451 = 0;while(true){
if((i__14443_14451 < count__14442_14450))
{var n_14452 = cljs.core._nth.call(null,chunk__14441_14449,i__14443_14451);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14452;
goog.events.fireListeners(n_14452,evt.type,true,evt);
}
{
var G__14453 = seq__14440_14448;
var G__14454 = chunk__14441_14449;
var G__14455 = count__14442_14450;
var G__14456 = (i__14443_14451 + 1);
seq__14440_14448 = G__14453;
chunk__14441_14449 = G__14454;
count__14442_14450 = G__14455;
i__14443_14451 = G__14456;
continue;
}
} else
{var temp__4092__auto___14457 = cljs.core.seq.call(null,seq__14440_14448);if(temp__4092__auto___14457)
{var seq__14440_14458__$1 = temp__4092__auto___14457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14440_14458__$1))
{var c__4015__auto___14459 = cljs.core.chunk_first.call(null,seq__14440_14458__$1);{
var G__14460 = cljs.core.chunk_rest.call(null,seq__14440_14458__$1);
var G__14461 = c__4015__auto___14459;
var G__14462 = cljs.core.count.call(null,c__4015__auto___14459);
var G__14463 = 0;
seq__14440_14448 = G__14460;
chunk__14441_14449 = G__14461;
count__14442_14450 = G__14462;
i__14443_14451 = G__14463;
continue;
}
} else
{var n_14464 = cljs.core.first.call(null,seq__14440_14458__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14464;
goog.events.fireListeners(n_14464,evt.type,true,evt);
}
{
var G__14465 = cljs.core.next.call(null,seq__14440_14458__$1);
var G__14466 = null;
var G__14467 = 0;
var G__14468 = 0;
seq__14440_14448 = G__14465;
chunk__14441_14449 = G__14466;
count__14442_14450 = G__14467;
i__14443_14451 = G__14468;
continue;
}
}
} else
{}
}
break;
}
var seq__14444_14469 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14445_14470 = null;var count__14446_14471 = 0;var i__14447_14472 = 0;while(true){
if((i__14447_14472 < count__14446_14471))
{var n_14473 = cljs.core._nth.call(null,chunk__14445_14470,i__14447_14472);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14473;
goog.events.fireListeners(n_14473,evt.type,false,evt);
}
{
var G__14474 = seq__14444_14469;
var G__14475 = chunk__14445_14470;
var G__14476 = count__14446_14471;
var G__14477 = (i__14447_14472 + 1);
seq__14444_14469 = G__14474;
chunk__14445_14470 = G__14475;
count__14446_14471 = G__14476;
i__14447_14472 = G__14477;
continue;
}
} else
{var temp__4092__auto___14478 = cljs.core.seq.call(null,seq__14444_14469);if(temp__4092__auto___14478)
{var seq__14444_14479__$1 = temp__4092__auto___14478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14444_14479__$1))
{var c__4015__auto___14480 = cljs.core.chunk_first.call(null,seq__14444_14479__$1);{
var G__14481 = cljs.core.chunk_rest.call(null,seq__14444_14479__$1);
var G__14482 = c__4015__auto___14480;
var G__14483 = cljs.core.count.call(null,c__4015__auto___14480);
var G__14484 = 0;
seq__14444_14469 = G__14481;
chunk__14445_14470 = G__14482;
count__14446_14471 = G__14483;
i__14447_14472 = G__14484;
continue;
}
} else
{var n_14485 = cljs.core.first.call(null,seq__14444_14479__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14485;
goog.events.fireListeners(n_14485,evt.type,false,evt);
}
{
var G__14486 = cljs.core.next.call(null,seq__14444_14479__$1);
var G__14487 = null;
var G__14488 = 0;
var G__14489 = 0;
seq__14444_14469 = G__14486;
chunk__14445_14470 = G__14487;
count__14446_14471 = G__14488;
i__14447_14472 = G__14489;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14496_14502 = cljs.core.seq.call(null,evt_map);var chunk__14497_14503 = null;var count__14498_14504 = 0;var i__14499_14505 = 0;while(true){
if((i__14499_14505 < count__14498_14504))
{var vec__14500_14506 = cljs.core._nth.call(null,chunk__14497_14503,i__14499_14505);var k_14507 = cljs.core.nth.call(null,vec__14500_14506,0,null);var v_14508 = cljs.core.nth.call(null,vec__14500_14506,1,null);(evt[k_14507] = v_14508);
{
var G__14509 = seq__14496_14502;
var G__14510 = chunk__14497_14503;
var G__14511 = count__14498_14504;
var G__14512 = (i__14499_14505 + 1);
seq__14496_14502 = G__14509;
chunk__14497_14503 = G__14510;
count__14498_14504 = G__14511;
i__14499_14505 = G__14512;
continue;
}
} else
{var temp__4092__auto___14513 = cljs.core.seq.call(null,seq__14496_14502);if(temp__4092__auto___14513)
{var seq__14496_14514__$1 = temp__4092__auto___14513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14496_14514__$1))
{var c__4015__auto___14515 = cljs.core.chunk_first.call(null,seq__14496_14514__$1);{
var G__14516 = cljs.core.chunk_rest.call(null,seq__14496_14514__$1);
var G__14517 = c__4015__auto___14515;
var G__14518 = cljs.core.count.call(null,c__4015__auto___14515);
var G__14519 = 0;
seq__14496_14502 = G__14516;
chunk__14497_14503 = G__14517;
count__14498_14504 = G__14518;
i__14499_14505 = G__14519;
continue;
}
} else
{var vec__14501_14520 = cljs.core.first.call(null,seq__14496_14514__$1);var k_14521 = cljs.core.nth.call(null,vec__14501_14520,0,null);var v_14522 = cljs.core.nth.call(null,vec__14501_14520,1,null);(evt[k_14521] = v_14522);
{
var G__14523 = cljs.core.next.call(null,seq__14496_14514__$1);
var G__14524 = null;
var G__14525 = 0;
var G__14526 = 0;
seq__14496_14502 = G__14523;
chunk__14497_14503 = G__14524;
count__14498_14504 = G__14525;
i__14499_14505 = G__14526;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14527_SHARP_){return goog.events.getListeners(p1__14527_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map