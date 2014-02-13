// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16526 = {};return obj16526;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16530 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16530 = (function (evt,f,create_listener_function,meta16531){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16531 = meta16531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16530.cljs$lang$type = true;
domina.events.t16530.cljs$lang$ctorStr = "domina.events/t16530";
domina.events.t16530.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16530");
});
domina.events.t16530.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16530.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16530.prototype.domina$events$Event$ = true;
domina.events.t16530.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16530.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16530.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16530.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16530.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16530.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16532){var self__ = this;
var _16532__$1 = this;return self__.meta16531;
});
domina.events.t16530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16532,meta16531__$1){var self__ = this;
var _16532__$1 = this;return (new domina.events.t16530(self__.evt,self__.f,self__.create_listener_function,meta16531__$1));
});
domina.events.__GT_t16530 = (function __GT_t16530(evt__$1,f__$1,create_listener_function__$1,meta16531){return (new domina.events.t16530(evt__$1,f__$1,create_listener_function__$1,meta16531));
});
}
return (new domina.events.t16530(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16537(s__16538){return (new cljs.core.LazySeq(null,(function (){var s__16538__$1 = s__16538;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16538__$1);if(temp__4092__auto__)
{var s__16538__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16538__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16538__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16540 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16539 = 0;while(true){
if((i__16539 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16539);cljs.core.chunk_append.call(null,b__16540,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16541 = (i__16539 + 1);
i__16539 = G__16541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16540),iter__16537.call(null,cljs.core.chunk_rest.call(null,s__16538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16540),null);
}
} else
{var node = cljs.core.first.call(null,s__16538__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16537.call(null,cljs.core.rest.call(null,s__16538__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16550 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16551 = null;var count__16552 = 0;var i__16553 = 0;while(true){
if((i__16553 < count__16552))
{var node = cljs.core._nth.call(null,chunk__16551,i__16553);goog.events.removeAll(node);
{
var G__16558 = seq__16550;
var G__16559 = chunk__16551;
var G__16560 = count__16552;
var G__16561 = (i__16553 + 1);
seq__16550 = G__16558;
chunk__16551 = G__16559;
count__16552 = G__16560;
i__16553 = G__16561;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16550);if(temp__4092__auto__)
{var seq__16550__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16550__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16550__$1);{
var G__16562 = cljs.core.chunk_rest.call(null,seq__16550__$1);
var G__16563 = c__4148__auto__;
var G__16564 = cljs.core.count.call(null,c__4148__auto__);
var G__16565 = 0;
seq__16550 = G__16562;
chunk__16551 = G__16563;
count__16552 = G__16564;
i__16553 = G__16565;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16550__$1);goog.events.removeAll(node);
{
var G__16566 = cljs.core.next.call(null,seq__16550__$1);
var G__16567 = null;
var G__16568 = 0;
var G__16569 = 0;
seq__16550 = G__16566;
chunk__16551 = G__16567;
count__16552 = G__16568;
i__16553 = G__16569;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16554 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16555 = null;var count__16556 = 0;var i__16557 = 0;while(true){
if((i__16557 < count__16556))
{var node = cljs.core._nth.call(null,chunk__16555,i__16557);goog.events.removeAll(node,type__$1);
{
var G__16570 = seq__16554;
var G__16571 = chunk__16555;
var G__16572 = count__16556;
var G__16573 = (i__16557 + 1);
seq__16554 = G__16570;
chunk__16555 = G__16571;
count__16556 = G__16572;
i__16557 = G__16573;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16554);if(temp__4092__auto__)
{var seq__16554__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16554__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16554__$1);{
var G__16574 = cljs.core.chunk_rest.call(null,seq__16554__$1);
var G__16575 = c__4148__auto__;
var G__16576 = cljs.core.count.call(null,c__4148__auto__);
var G__16577 = 0;
seq__16554 = G__16574;
chunk__16555 = G__16575;
count__16556 = G__16576;
i__16557 = G__16577;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16554__$1);goog.events.removeAll(node,type__$1);
{
var G__16578 = cljs.core.next.call(null,seq__16554__$1);
var G__16579 = null;
var G__16580 = 0;
var G__16581 = 0;
seq__16554 = G__16578;
chunk__16555 = G__16579;
count__16556 = G__16580;
i__16557 = G__16581;
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
var G__16582 = parent;
var G__16583 = cljs.core.cons.call(null,parent,so_far);
n = G__16582;
so_far = G__16583;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16592_16600 = cljs.core.seq.call(null,ancestors);var chunk__16593_16601 = null;var count__16594_16602 = 0;var i__16595_16603 = 0;while(true){
if((i__16595_16603 < count__16594_16602))
{var n_16604 = cljs.core._nth.call(null,chunk__16593_16601,i__16595_16603);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16604;
goog.events.fireListeners(n_16604,evt.type,true,evt);
}
{
var G__16605 = seq__16592_16600;
var G__16606 = chunk__16593_16601;
var G__16607 = count__16594_16602;
var G__16608 = (i__16595_16603 + 1);
seq__16592_16600 = G__16605;
chunk__16593_16601 = G__16606;
count__16594_16602 = G__16607;
i__16595_16603 = G__16608;
continue;
}
} else
{var temp__4092__auto___16609 = cljs.core.seq.call(null,seq__16592_16600);if(temp__4092__auto___16609)
{var seq__16592_16610__$1 = temp__4092__auto___16609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16592_16610__$1))
{var c__4148__auto___16611 = cljs.core.chunk_first.call(null,seq__16592_16610__$1);{
var G__16612 = cljs.core.chunk_rest.call(null,seq__16592_16610__$1);
var G__16613 = c__4148__auto___16611;
var G__16614 = cljs.core.count.call(null,c__4148__auto___16611);
var G__16615 = 0;
seq__16592_16600 = G__16612;
chunk__16593_16601 = G__16613;
count__16594_16602 = G__16614;
i__16595_16603 = G__16615;
continue;
}
} else
{var n_16616 = cljs.core.first.call(null,seq__16592_16610__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16616;
goog.events.fireListeners(n_16616,evt.type,true,evt);
}
{
var G__16617 = cljs.core.next.call(null,seq__16592_16610__$1);
var G__16618 = null;
var G__16619 = 0;
var G__16620 = 0;
seq__16592_16600 = G__16617;
chunk__16593_16601 = G__16618;
count__16594_16602 = G__16619;
i__16595_16603 = G__16620;
continue;
}
}
} else
{}
}
break;
}
var seq__16596_16621 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16597_16622 = null;var count__16598_16623 = 0;var i__16599_16624 = 0;while(true){
if((i__16599_16624 < count__16598_16623))
{var n_16625 = cljs.core._nth.call(null,chunk__16597_16622,i__16599_16624);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16625;
goog.events.fireListeners(n_16625,evt.type,false,evt);
}
{
var G__16626 = seq__16596_16621;
var G__16627 = chunk__16597_16622;
var G__16628 = count__16598_16623;
var G__16629 = (i__16599_16624 + 1);
seq__16596_16621 = G__16626;
chunk__16597_16622 = G__16627;
count__16598_16623 = G__16628;
i__16599_16624 = G__16629;
continue;
}
} else
{var temp__4092__auto___16630 = cljs.core.seq.call(null,seq__16596_16621);if(temp__4092__auto___16630)
{var seq__16596_16631__$1 = temp__4092__auto___16630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16596_16631__$1))
{var c__4148__auto___16632 = cljs.core.chunk_first.call(null,seq__16596_16631__$1);{
var G__16633 = cljs.core.chunk_rest.call(null,seq__16596_16631__$1);
var G__16634 = c__4148__auto___16632;
var G__16635 = cljs.core.count.call(null,c__4148__auto___16632);
var G__16636 = 0;
seq__16596_16621 = G__16633;
chunk__16597_16622 = G__16634;
count__16598_16623 = G__16635;
i__16599_16624 = G__16636;
continue;
}
} else
{var n_16637 = cljs.core.first.call(null,seq__16596_16631__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16637;
goog.events.fireListeners(n_16637,evt.type,false,evt);
}
{
var G__16638 = cljs.core.next.call(null,seq__16596_16631__$1);
var G__16639 = null;
var G__16640 = 0;
var G__16641 = 0;
seq__16596_16621 = G__16638;
chunk__16597_16622 = G__16639;
count__16598_16623 = G__16640;
i__16599_16624 = G__16641;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16648_16654 = cljs.core.seq.call(null,evt_map);var chunk__16649_16655 = null;var count__16650_16656 = 0;var i__16651_16657 = 0;while(true){
if((i__16651_16657 < count__16650_16656))
{var vec__16652_16658 = cljs.core._nth.call(null,chunk__16649_16655,i__16651_16657);var k_16659 = cljs.core.nth.call(null,vec__16652_16658,0,null);var v_16660 = cljs.core.nth.call(null,vec__16652_16658,1,null);(evt[k_16659] = v_16660);
{
var G__16661 = seq__16648_16654;
var G__16662 = chunk__16649_16655;
var G__16663 = count__16650_16656;
var G__16664 = (i__16651_16657 + 1);
seq__16648_16654 = G__16661;
chunk__16649_16655 = G__16662;
count__16650_16656 = G__16663;
i__16651_16657 = G__16664;
continue;
}
} else
{var temp__4092__auto___16665 = cljs.core.seq.call(null,seq__16648_16654);if(temp__4092__auto___16665)
{var seq__16648_16666__$1 = temp__4092__auto___16665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16648_16666__$1))
{var c__4148__auto___16667 = cljs.core.chunk_first.call(null,seq__16648_16666__$1);{
var G__16668 = cljs.core.chunk_rest.call(null,seq__16648_16666__$1);
var G__16669 = c__4148__auto___16667;
var G__16670 = cljs.core.count.call(null,c__4148__auto___16667);
var G__16671 = 0;
seq__16648_16654 = G__16668;
chunk__16649_16655 = G__16669;
count__16650_16656 = G__16670;
i__16651_16657 = G__16671;
continue;
}
} else
{var vec__16653_16672 = cljs.core.first.call(null,seq__16648_16666__$1);var k_16673 = cljs.core.nth.call(null,vec__16653_16672,0,null);var v_16674 = cljs.core.nth.call(null,vec__16653_16672,1,null);(evt[k_16673] = v_16674);
{
var G__16675 = cljs.core.next.call(null,seq__16648_16666__$1);
var G__16676 = null;
var G__16677 = 0;
var G__16678 = 0;
seq__16648_16654 = G__16675;
chunk__16649_16655 = G__16676;
count__16650_16656 = G__16677;
i__16651_16657 = G__16678;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16679_SHARP_){return goog.events.getListeners(p1__16679_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map