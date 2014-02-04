// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16442 = {};return obj16442;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16446 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16446 = (function (evt,f,create_listener_function,meta16447){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16447 = meta16447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16446.cljs$lang$type = true;
domina.events.t16446.cljs$lang$ctorStr = "domina.events/t16446";
domina.events.t16446.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16446");
});
domina.events.t16446.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16446.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16446.prototype.domina$events$Event$ = true;
domina.events.t16446.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16446.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16446.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16446.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16446.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16446.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16448){var self__ = this;
var _16448__$1 = this;return self__.meta16447;
});
domina.events.t16446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16448,meta16447__$1){var self__ = this;
var _16448__$1 = this;return (new domina.events.t16446(self__.evt,self__.f,self__.create_listener_function,meta16447__$1));
});
domina.events.__GT_t16446 = (function __GT_t16446(evt__$1,f__$1,create_listener_function__$1,meta16447){return (new domina.events.t16446(evt__$1,f__$1,create_listener_function__$1,meta16447));
});
}
return (new domina.events.t16446(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16453(s__16454){return (new cljs.core.LazySeq(null,(function (){var s__16454__$1 = s__16454;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16454__$1);if(temp__4092__auto__)
{var s__16454__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16454__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16454__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16456 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16455 = 0;while(true){
if((i__16455 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16455);cljs.core.chunk_append.call(null,b__16456,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16457 = (i__16455 + 1);
i__16455 = G__16457;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16456),iter__16453.call(null,cljs.core.chunk_rest.call(null,s__16454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16456),null);
}
} else
{var node = cljs.core.first.call(null,s__16454__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16453.call(null,cljs.core.rest.call(null,s__16454__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16466 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16467 = null;var count__16468 = 0;var i__16469 = 0;while(true){
if((i__16469 < count__16468))
{var node = cljs.core._nth.call(null,chunk__16467,i__16469);goog.events.removeAll(node);
{
var G__16474 = seq__16466;
var G__16475 = chunk__16467;
var G__16476 = count__16468;
var G__16477 = (i__16469 + 1);
seq__16466 = G__16474;
chunk__16467 = G__16475;
count__16468 = G__16476;
i__16469 = G__16477;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16466);if(temp__4092__auto__)
{var seq__16466__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16466__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16466__$1);{
var G__16478 = cljs.core.chunk_rest.call(null,seq__16466__$1);
var G__16479 = c__4148__auto__;
var G__16480 = cljs.core.count.call(null,c__4148__auto__);
var G__16481 = 0;
seq__16466 = G__16478;
chunk__16467 = G__16479;
count__16468 = G__16480;
i__16469 = G__16481;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16466__$1);goog.events.removeAll(node);
{
var G__16482 = cljs.core.next.call(null,seq__16466__$1);
var G__16483 = null;
var G__16484 = 0;
var G__16485 = 0;
seq__16466 = G__16482;
chunk__16467 = G__16483;
count__16468 = G__16484;
i__16469 = G__16485;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16470 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16471 = null;var count__16472 = 0;var i__16473 = 0;while(true){
if((i__16473 < count__16472))
{var node = cljs.core._nth.call(null,chunk__16471,i__16473);goog.events.removeAll(node,type__$1);
{
var G__16486 = seq__16470;
var G__16487 = chunk__16471;
var G__16488 = count__16472;
var G__16489 = (i__16473 + 1);
seq__16470 = G__16486;
chunk__16471 = G__16487;
count__16472 = G__16488;
i__16473 = G__16489;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16470);if(temp__4092__auto__)
{var seq__16470__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16470__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16470__$1);{
var G__16490 = cljs.core.chunk_rest.call(null,seq__16470__$1);
var G__16491 = c__4148__auto__;
var G__16492 = cljs.core.count.call(null,c__4148__auto__);
var G__16493 = 0;
seq__16470 = G__16490;
chunk__16471 = G__16491;
count__16472 = G__16492;
i__16473 = G__16493;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16470__$1);goog.events.removeAll(node,type__$1);
{
var G__16494 = cljs.core.next.call(null,seq__16470__$1);
var G__16495 = null;
var G__16496 = 0;
var G__16497 = 0;
seq__16470 = G__16494;
chunk__16471 = G__16495;
count__16472 = G__16496;
i__16473 = G__16497;
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
var G__16498 = parent;
var G__16499 = cljs.core.cons.call(null,parent,so_far);
n = G__16498;
so_far = G__16499;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16508_16516 = cljs.core.seq.call(null,ancestors);var chunk__16509_16517 = null;var count__16510_16518 = 0;var i__16511_16519 = 0;while(true){
if((i__16511_16519 < count__16510_16518))
{var n_16520 = cljs.core._nth.call(null,chunk__16509_16517,i__16511_16519);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16520;
goog.events.fireListeners(n_16520,evt.type,true,evt);
}
{
var G__16521 = seq__16508_16516;
var G__16522 = chunk__16509_16517;
var G__16523 = count__16510_16518;
var G__16524 = (i__16511_16519 + 1);
seq__16508_16516 = G__16521;
chunk__16509_16517 = G__16522;
count__16510_16518 = G__16523;
i__16511_16519 = G__16524;
continue;
}
} else
{var temp__4092__auto___16525 = cljs.core.seq.call(null,seq__16508_16516);if(temp__4092__auto___16525)
{var seq__16508_16526__$1 = temp__4092__auto___16525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16508_16526__$1))
{var c__4148__auto___16527 = cljs.core.chunk_first.call(null,seq__16508_16526__$1);{
var G__16528 = cljs.core.chunk_rest.call(null,seq__16508_16526__$1);
var G__16529 = c__4148__auto___16527;
var G__16530 = cljs.core.count.call(null,c__4148__auto___16527);
var G__16531 = 0;
seq__16508_16516 = G__16528;
chunk__16509_16517 = G__16529;
count__16510_16518 = G__16530;
i__16511_16519 = G__16531;
continue;
}
} else
{var n_16532 = cljs.core.first.call(null,seq__16508_16526__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16532;
goog.events.fireListeners(n_16532,evt.type,true,evt);
}
{
var G__16533 = cljs.core.next.call(null,seq__16508_16526__$1);
var G__16534 = null;
var G__16535 = 0;
var G__16536 = 0;
seq__16508_16516 = G__16533;
chunk__16509_16517 = G__16534;
count__16510_16518 = G__16535;
i__16511_16519 = G__16536;
continue;
}
}
} else
{}
}
break;
}
var seq__16512_16537 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16513_16538 = null;var count__16514_16539 = 0;var i__16515_16540 = 0;while(true){
if((i__16515_16540 < count__16514_16539))
{var n_16541 = cljs.core._nth.call(null,chunk__16513_16538,i__16515_16540);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16541;
goog.events.fireListeners(n_16541,evt.type,false,evt);
}
{
var G__16542 = seq__16512_16537;
var G__16543 = chunk__16513_16538;
var G__16544 = count__16514_16539;
var G__16545 = (i__16515_16540 + 1);
seq__16512_16537 = G__16542;
chunk__16513_16538 = G__16543;
count__16514_16539 = G__16544;
i__16515_16540 = G__16545;
continue;
}
} else
{var temp__4092__auto___16546 = cljs.core.seq.call(null,seq__16512_16537);if(temp__4092__auto___16546)
{var seq__16512_16547__$1 = temp__4092__auto___16546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16512_16547__$1))
{var c__4148__auto___16548 = cljs.core.chunk_first.call(null,seq__16512_16547__$1);{
var G__16549 = cljs.core.chunk_rest.call(null,seq__16512_16547__$1);
var G__16550 = c__4148__auto___16548;
var G__16551 = cljs.core.count.call(null,c__4148__auto___16548);
var G__16552 = 0;
seq__16512_16537 = G__16549;
chunk__16513_16538 = G__16550;
count__16514_16539 = G__16551;
i__16515_16540 = G__16552;
continue;
}
} else
{var n_16553 = cljs.core.first.call(null,seq__16512_16547__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16553;
goog.events.fireListeners(n_16553,evt.type,false,evt);
}
{
var G__16554 = cljs.core.next.call(null,seq__16512_16547__$1);
var G__16555 = null;
var G__16556 = 0;
var G__16557 = 0;
seq__16512_16537 = G__16554;
chunk__16513_16538 = G__16555;
count__16514_16539 = G__16556;
i__16515_16540 = G__16557;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16564_16570 = cljs.core.seq.call(null,evt_map);var chunk__16565_16571 = null;var count__16566_16572 = 0;var i__16567_16573 = 0;while(true){
if((i__16567_16573 < count__16566_16572))
{var vec__16568_16574 = cljs.core._nth.call(null,chunk__16565_16571,i__16567_16573);var k_16575 = cljs.core.nth.call(null,vec__16568_16574,0,null);var v_16576 = cljs.core.nth.call(null,vec__16568_16574,1,null);(evt[k_16575] = v_16576);
{
var G__16577 = seq__16564_16570;
var G__16578 = chunk__16565_16571;
var G__16579 = count__16566_16572;
var G__16580 = (i__16567_16573 + 1);
seq__16564_16570 = G__16577;
chunk__16565_16571 = G__16578;
count__16566_16572 = G__16579;
i__16567_16573 = G__16580;
continue;
}
} else
{var temp__4092__auto___16581 = cljs.core.seq.call(null,seq__16564_16570);if(temp__4092__auto___16581)
{var seq__16564_16582__$1 = temp__4092__auto___16581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16564_16582__$1))
{var c__4148__auto___16583 = cljs.core.chunk_first.call(null,seq__16564_16582__$1);{
var G__16584 = cljs.core.chunk_rest.call(null,seq__16564_16582__$1);
var G__16585 = c__4148__auto___16583;
var G__16586 = cljs.core.count.call(null,c__4148__auto___16583);
var G__16587 = 0;
seq__16564_16570 = G__16584;
chunk__16565_16571 = G__16585;
count__16566_16572 = G__16586;
i__16567_16573 = G__16587;
continue;
}
} else
{var vec__16569_16588 = cljs.core.first.call(null,seq__16564_16582__$1);var k_16589 = cljs.core.nth.call(null,vec__16569_16588,0,null);var v_16590 = cljs.core.nth.call(null,vec__16569_16588,1,null);(evt[k_16589] = v_16590);
{
var G__16591 = cljs.core.next.call(null,seq__16564_16582__$1);
var G__16592 = null;
var G__16593 = 0;
var G__16594 = 0;
seq__16564_16570 = G__16591;
chunk__16565_16571 = G__16592;
count__16566_16572 = G__16593;
i__16567_16573 = G__16594;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16595_SHARP_){return goog.events.getListeners(p1__16595_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map