// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16516 = {};return obj16516;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16520 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16520 = (function (evt,f,create_listener_function,meta16521){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16521 = meta16521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16520.cljs$lang$type = true;
domina.events.t16520.cljs$lang$ctorStr = "domina.events/t16520";
domina.events.t16520.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16520");
});
domina.events.t16520.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16520.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16520.prototype.domina$events$Event$ = true;
domina.events.t16520.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16520.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16520.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16520.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16520.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16520.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16522){var self__ = this;
var _16522__$1 = this;return self__.meta16521;
});
domina.events.t16520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16522,meta16521__$1){var self__ = this;
var _16522__$1 = this;return (new domina.events.t16520(self__.evt,self__.f,self__.create_listener_function,meta16521__$1));
});
domina.events.__GT_t16520 = (function __GT_t16520(evt__$1,f__$1,create_listener_function__$1,meta16521){return (new domina.events.t16520(evt__$1,f__$1,create_listener_function__$1,meta16521));
});
}
return (new domina.events.t16520(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16527(s__16528){return (new cljs.core.LazySeq(null,(function (){var s__16528__$1 = s__16528;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16528__$1);if(temp__4092__auto__)
{var s__16528__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16528__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16528__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16530 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16529 = 0;while(true){
if((i__16529 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16529);cljs.core.chunk_append.call(null,b__16530,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16531 = (i__16529 + 1);
i__16529 = G__16531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16530),iter__16527.call(null,cljs.core.chunk_rest.call(null,s__16528__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16530),null);
}
} else
{var node = cljs.core.first.call(null,s__16528__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16527.call(null,cljs.core.rest.call(null,s__16528__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16541 = null;var count__16542 = 0;var i__16543 = 0;while(true){
if((i__16543 < count__16542))
{var node = cljs.core._nth.call(null,chunk__16541,i__16543);goog.events.removeAll(node);
{
var G__16548 = seq__16540;
var G__16549 = chunk__16541;
var G__16550 = count__16542;
var G__16551 = (i__16543 + 1);
seq__16540 = G__16548;
chunk__16541 = G__16549;
count__16542 = G__16550;
i__16543 = G__16551;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16540);if(temp__4092__auto__)
{var seq__16540__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16540__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16540__$1);{
var G__16552 = cljs.core.chunk_rest.call(null,seq__16540__$1);
var G__16553 = c__4148__auto__;
var G__16554 = cljs.core.count.call(null,c__4148__auto__);
var G__16555 = 0;
seq__16540 = G__16552;
chunk__16541 = G__16553;
count__16542 = G__16554;
i__16543 = G__16555;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16540__$1);goog.events.removeAll(node);
{
var G__16556 = cljs.core.next.call(null,seq__16540__$1);
var G__16557 = null;
var G__16558 = 0;
var G__16559 = 0;
seq__16540 = G__16556;
chunk__16541 = G__16557;
count__16542 = G__16558;
i__16543 = G__16559;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16544 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16545 = null;var count__16546 = 0;var i__16547 = 0;while(true){
if((i__16547 < count__16546))
{var node = cljs.core._nth.call(null,chunk__16545,i__16547);goog.events.removeAll(node,type__$1);
{
var G__16560 = seq__16544;
var G__16561 = chunk__16545;
var G__16562 = count__16546;
var G__16563 = (i__16547 + 1);
seq__16544 = G__16560;
chunk__16545 = G__16561;
count__16546 = G__16562;
i__16547 = G__16563;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16544);if(temp__4092__auto__)
{var seq__16544__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16544__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16544__$1);{
var G__16564 = cljs.core.chunk_rest.call(null,seq__16544__$1);
var G__16565 = c__4148__auto__;
var G__16566 = cljs.core.count.call(null,c__4148__auto__);
var G__16567 = 0;
seq__16544 = G__16564;
chunk__16545 = G__16565;
count__16546 = G__16566;
i__16547 = G__16567;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16544__$1);goog.events.removeAll(node,type__$1);
{
var G__16568 = cljs.core.next.call(null,seq__16544__$1);
var G__16569 = null;
var G__16570 = 0;
var G__16571 = 0;
seq__16544 = G__16568;
chunk__16545 = G__16569;
count__16546 = G__16570;
i__16547 = G__16571;
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
var G__16572 = parent;
var G__16573 = cljs.core.cons.call(null,parent,so_far);
n = G__16572;
so_far = G__16573;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16582_16590 = cljs.core.seq.call(null,ancestors);var chunk__16583_16591 = null;var count__16584_16592 = 0;var i__16585_16593 = 0;while(true){
if((i__16585_16593 < count__16584_16592))
{var n_16594 = cljs.core._nth.call(null,chunk__16583_16591,i__16585_16593);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16594;
goog.events.fireListeners(n_16594,evt.type,true,evt);
}
{
var G__16595 = seq__16582_16590;
var G__16596 = chunk__16583_16591;
var G__16597 = count__16584_16592;
var G__16598 = (i__16585_16593 + 1);
seq__16582_16590 = G__16595;
chunk__16583_16591 = G__16596;
count__16584_16592 = G__16597;
i__16585_16593 = G__16598;
continue;
}
} else
{var temp__4092__auto___16599 = cljs.core.seq.call(null,seq__16582_16590);if(temp__4092__auto___16599)
{var seq__16582_16600__$1 = temp__4092__auto___16599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16582_16600__$1))
{var c__4148__auto___16601 = cljs.core.chunk_first.call(null,seq__16582_16600__$1);{
var G__16602 = cljs.core.chunk_rest.call(null,seq__16582_16600__$1);
var G__16603 = c__4148__auto___16601;
var G__16604 = cljs.core.count.call(null,c__4148__auto___16601);
var G__16605 = 0;
seq__16582_16590 = G__16602;
chunk__16583_16591 = G__16603;
count__16584_16592 = G__16604;
i__16585_16593 = G__16605;
continue;
}
} else
{var n_16606 = cljs.core.first.call(null,seq__16582_16600__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16606;
goog.events.fireListeners(n_16606,evt.type,true,evt);
}
{
var G__16607 = cljs.core.next.call(null,seq__16582_16600__$1);
var G__16608 = null;
var G__16609 = 0;
var G__16610 = 0;
seq__16582_16590 = G__16607;
chunk__16583_16591 = G__16608;
count__16584_16592 = G__16609;
i__16585_16593 = G__16610;
continue;
}
}
} else
{}
}
break;
}
var seq__16586_16611 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16587_16612 = null;var count__16588_16613 = 0;var i__16589_16614 = 0;while(true){
if((i__16589_16614 < count__16588_16613))
{var n_16615 = cljs.core._nth.call(null,chunk__16587_16612,i__16589_16614);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16615;
goog.events.fireListeners(n_16615,evt.type,false,evt);
}
{
var G__16616 = seq__16586_16611;
var G__16617 = chunk__16587_16612;
var G__16618 = count__16588_16613;
var G__16619 = (i__16589_16614 + 1);
seq__16586_16611 = G__16616;
chunk__16587_16612 = G__16617;
count__16588_16613 = G__16618;
i__16589_16614 = G__16619;
continue;
}
} else
{var temp__4092__auto___16620 = cljs.core.seq.call(null,seq__16586_16611);if(temp__4092__auto___16620)
{var seq__16586_16621__$1 = temp__4092__auto___16620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16586_16621__$1))
{var c__4148__auto___16622 = cljs.core.chunk_first.call(null,seq__16586_16621__$1);{
var G__16623 = cljs.core.chunk_rest.call(null,seq__16586_16621__$1);
var G__16624 = c__4148__auto___16622;
var G__16625 = cljs.core.count.call(null,c__4148__auto___16622);
var G__16626 = 0;
seq__16586_16611 = G__16623;
chunk__16587_16612 = G__16624;
count__16588_16613 = G__16625;
i__16589_16614 = G__16626;
continue;
}
} else
{var n_16627 = cljs.core.first.call(null,seq__16586_16621__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16627;
goog.events.fireListeners(n_16627,evt.type,false,evt);
}
{
var G__16628 = cljs.core.next.call(null,seq__16586_16621__$1);
var G__16629 = null;
var G__16630 = 0;
var G__16631 = 0;
seq__16586_16611 = G__16628;
chunk__16587_16612 = G__16629;
count__16588_16613 = G__16630;
i__16589_16614 = G__16631;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16638_16644 = cljs.core.seq.call(null,evt_map);var chunk__16639_16645 = null;var count__16640_16646 = 0;var i__16641_16647 = 0;while(true){
if((i__16641_16647 < count__16640_16646))
{var vec__16642_16648 = cljs.core._nth.call(null,chunk__16639_16645,i__16641_16647);var k_16649 = cljs.core.nth.call(null,vec__16642_16648,0,null);var v_16650 = cljs.core.nth.call(null,vec__16642_16648,1,null);(evt[k_16649] = v_16650);
{
var G__16651 = seq__16638_16644;
var G__16652 = chunk__16639_16645;
var G__16653 = count__16640_16646;
var G__16654 = (i__16641_16647 + 1);
seq__16638_16644 = G__16651;
chunk__16639_16645 = G__16652;
count__16640_16646 = G__16653;
i__16641_16647 = G__16654;
continue;
}
} else
{var temp__4092__auto___16655 = cljs.core.seq.call(null,seq__16638_16644);if(temp__4092__auto___16655)
{var seq__16638_16656__$1 = temp__4092__auto___16655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16638_16656__$1))
{var c__4148__auto___16657 = cljs.core.chunk_first.call(null,seq__16638_16656__$1);{
var G__16658 = cljs.core.chunk_rest.call(null,seq__16638_16656__$1);
var G__16659 = c__4148__auto___16657;
var G__16660 = cljs.core.count.call(null,c__4148__auto___16657);
var G__16661 = 0;
seq__16638_16644 = G__16658;
chunk__16639_16645 = G__16659;
count__16640_16646 = G__16660;
i__16641_16647 = G__16661;
continue;
}
} else
{var vec__16643_16662 = cljs.core.first.call(null,seq__16638_16656__$1);var k_16663 = cljs.core.nth.call(null,vec__16643_16662,0,null);var v_16664 = cljs.core.nth.call(null,vec__16643_16662,1,null);(evt[k_16663] = v_16664);
{
var G__16665 = cljs.core.next.call(null,seq__16638_16656__$1);
var G__16666 = null;
var G__16667 = 0;
var G__16668 = 0;
seq__16638_16644 = G__16665;
chunk__16639_16645 = G__16666;
count__16640_16646 = G__16667;
i__16641_16647 = G__16668;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16669_SHARP_){return goog.events.getListeners(p1__16669_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map