// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34486 = {};return obj34486;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34490 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34490 = (function (evt,f,create_listener_function,meta34491){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34491 = meta34491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34490.cljs$lang$type = true;
domina.events.t34490.cljs$lang$ctorStr = "domina.events/t34490";
domina.events.t34490.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t34490");
});
domina.events.t34490.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34490.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t34490.prototype.domina$events$Event$ = true;
domina.events.t34490.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34490.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34490.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34490.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34490.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34490.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34492){var self__ = this;
var _34492__$1 = this;return self__.meta34491;
});
domina.events.t34490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34492,meta34491__$1){var self__ = this;
var _34492__$1 = this;return (new domina.events.t34490(self__.evt,self__.f,self__.create_listener_function,meta34491__$1));
});
domina.events.__GT_t34490 = (function __GT_t34490(evt__$1,f__$1,create_listener_function__$1,meta34491){return (new domina.events.t34490(evt__$1,f__$1,create_listener_function__$1,meta34491));
});
}
return (new domina.events.t34490(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__34497(s__34498){return (new cljs.core.LazySeq(null,(function (){var s__34498__$1 = s__34498;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34498__$1);if(temp__4092__auto__)
{var s__34498__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34498__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__34498__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__34500 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__34499 = 0;while(true){
if((i__34499 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__34499);cljs.core.chunk_append.call(null,b__34500,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34501 = (i__34499 + 1);
i__34499 = G__34501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34500),iter__34497.call(null,cljs.core.chunk_rest.call(null,s__34498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34500),null);
}
} else
{var node = cljs.core.first.call(null,s__34498__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34497.call(null,cljs.core.rest.call(null,s__34498__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__34510 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34511 = null;var count__34512 = 0;var i__34513 = 0;while(true){
if((i__34513 < count__34512))
{var node = cljs.core._nth.call(null,chunk__34511,i__34513);goog.events.removeAll(node);
{
var G__34518 = seq__34510;
var G__34519 = chunk__34511;
var G__34520 = count__34512;
var G__34521 = (i__34513 + 1);
seq__34510 = G__34518;
chunk__34511 = G__34519;
count__34512 = G__34520;
i__34513 = G__34521;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34510);if(temp__4092__auto__)
{var seq__34510__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34510__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__34510__$1);{
var G__34522 = cljs.core.chunk_rest.call(null,seq__34510__$1);
var G__34523 = c__4015__auto__;
var G__34524 = cljs.core.count.call(null,c__4015__auto__);
var G__34525 = 0;
seq__34510 = G__34522;
chunk__34511 = G__34523;
count__34512 = G__34524;
i__34513 = G__34525;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34510__$1);goog.events.removeAll(node);
{
var G__34526 = cljs.core.next.call(null,seq__34510__$1);
var G__34527 = null;
var G__34528 = 0;
var G__34529 = 0;
seq__34510 = G__34526;
chunk__34511 = G__34527;
count__34512 = G__34528;
i__34513 = G__34529;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__34514 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34515 = null;var count__34516 = 0;var i__34517 = 0;while(true){
if((i__34517 < count__34516))
{var node = cljs.core._nth.call(null,chunk__34515,i__34517);goog.events.removeAll(node,type__$1);
{
var G__34530 = seq__34514;
var G__34531 = chunk__34515;
var G__34532 = count__34516;
var G__34533 = (i__34517 + 1);
seq__34514 = G__34530;
chunk__34515 = G__34531;
count__34516 = G__34532;
i__34517 = G__34533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34514);if(temp__4092__auto__)
{var seq__34514__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34514__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__34514__$1);{
var G__34534 = cljs.core.chunk_rest.call(null,seq__34514__$1);
var G__34535 = c__4015__auto__;
var G__34536 = cljs.core.count.call(null,c__4015__auto__);
var G__34537 = 0;
seq__34514 = G__34534;
chunk__34515 = G__34535;
count__34516 = G__34536;
i__34517 = G__34537;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34514__$1);goog.events.removeAll(node,type__$1);
{
var G__34538 = cljs.core.next.call(null,seq__34514__$1);
var G__34539 = null;
var G__34540 = 0;
var G__34541 = 0;
seq__34514 = G__34538;
chunk__34515 = G__34539;
count__34516 = G__34540;
i__34517 = G__34541;
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
var G__34542 = parent;
var G__34543 = cljs.core.cons.call(null,parent,so_far);
n = G__34542;
so_far = G__34543;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__34552_34560 = cljs.core.seq.call(null,ancestors);var chunk__34553_34561 = null;var count__34554_34562 = 0;var i__34555_34563 = 0;while(true){
if((i__34555_34563 < count__34554_34562))
{var n_34564 = cljs.core._nth.call(null,chunk__34553_34561,i__34555_34563);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34564;
goog.events.fireListeners(n_34564,evt.type,true,evt);
}
{
var G__34565 = seq__34552_34560;
var G__34566 = chunk__34553_34561;
var G__34567 = count__34554_34562;
var G__34568 = (i__34555_34563 + 1);
seq__34552_34560 = G__34565;
chunk__34553_34561 = G__34566;
count__34554_34562 = G__34567;
i__34555_34563 = G__34568;
continue;
}
} else
{var temp__4092__auto___34569 = cljs.core.seq.call(null,seq__34552_34560);if(temp__4092__auto___34569)
{var seq__34552_34570__$1 = temp__4092__auto___34569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34552_34570__$1))
{var c__4015__auto___34571 = cljs.core.chunk_first.call(null,seq__34552_34570__$1);{
var G__34572 = cljs.core.chunk_rest.call(null,seq__34552_34570__$1);
var G__34573 = c__4015__auto___34571;
var G__34574 = cljs.core.count.call(null,c__4015__auto___34571);
var G__34575 = 0;
seq__34552_34560 = G__34572;
chunk__34553_34561 = G__34573;
count__34554_34562 = G__34574;
i__34555_34563 = G__34575;
continue;
}
} else
{var n_34576 = cljs.core.first.call(null,seq__34552_34570__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34576;
goog.events.fireListeners(n_34576,evt.type,true,evt);
}
{
var G__34577 = cljs.core.next.call(null,seq__34552_34570__$1);
var G__34578 = null;
var G__34579 = 0;
var G__34580 = 0;
seq__34552_34560 = G__34577;
chunk__34553_34561 = G__34578;
count__34554_34562 = G__34579;
i__34555_34563 = G__34580;
continue;
}
}
} else
{}
}
break;
}
var seq__34556_34581 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__34557_34582 = null;var count__34558_34583 = 0;var i__34559_34584 = 0;while(true){
if((i__34559_34584 < count__34558_34583))
{var n_34585 = cljs.core._nth.call(null,chunk__34557_34582,i__34559_34584);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34585;
goog.events.fireListeners(n_34585,evt.type,false,evt);
}
{
var G__34586 = seq__34556_34581;
var G__34587 = chunk__34557_34582;
var G__34588 = count__34558_34583;
var G__34589 = (i__34559_34584 + 1);
seq__34556_34581 = G__34586;
chunk__34557_34582 = G__34587;
count__34558_34583 = G__34588;
i__34559_34584 = G__34589;
continue;
}
} else
{var temp__4092__auto___34590 = cljs.core.seq.call(null,seq__34556_34581);if(temp__4092__auto___34590)
{var seq__34556_34591__$1 = temp__4092__auto___34590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34556_34591__$1))
{var c__4015__auto___34592 = cljs.core.chunk_first.call(null,seq__34556_34591__$1);{
var G__34593 = cljs.core.chunk_rest.call(null,seq__34556_34591__$1);
var G__34594 = c__4015__auto___34592;
var G__34595 = cljs.core.count.call(null,c__4015__auto___34592);
var G__34596 = 0;
seq__34556_34581 = G__34593;
chunk__34557_34582 = G__34594;
count__34558_34583 = G__34595;
i__34559_34584 = G__34596;
continue;
}
} else
{var n_34597 = cljs.core.first.call(null,seq__34556_34591__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34597;
goog.events.fireListeners(n_34597,evt.type,false,evt);
}
{
var G__34598 = cljs.core.next.call(null,seq__34556_34591__$1);
var G__34599 = null;
var G__34600 = 0;
var G__34601 = 0;
seq__34556_34581 = G__34598;
chunk__34557_34582 = G__34599;
count__34558_34583 = G__34600;
i__34559_34584 = G__34601;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__34608_34614 = cljs.core.seq.call(null,evt_map);var chunk__34609_34615 = null;var count__34610_34616 = 0;var i__34611_34617 = 0;while(true){
if((i__34611_34617 < count__34610_34616))
{var vec__34612_34618 = cljs.core._nth.call(null,chunk__34609_34615,i__34611_34617);var k_34619 = cljs.core.nth.call(null,vec__34612_34618,0,null);var v_34620 = cljs.core.nth.call(null,vec__34612_34618,1,null);(evt[k_34619] = v_34620);
{
var G__34621 = seq__34608_34614;
var G__34622 = chunk__34609_34615;
var G__34623 = count__34610_34616;
var G__34624 = (i__34611_34617 + 1);
seq__34608_34614 = G__34621;
chunk__34609_34615 = G__34622;
count__34610_34616 = G__34623;
i__34611_34617 = G__34624;
continue;
}
} else
{var temp__4092__auto___34625 = cljs.core.seq.call(null,seq__34608_34614);if(temp__4092__auto___34625)
{var seq__34608_34626__$1 = temp__4092__auto___34625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34608_34626__$1))
{var c__4015__auto___34627 = cljs.core.chunk_first.call(null,seq__34608_34626__$1);{
var G__34628 = cljs.core.chunk_rest.call(null,seq__34608_34626__$1);
var G__34629 = c__4015__auto___34627;
var G__34630 = cljs.core.count.call(null,c__4015__auto___34627);
var G__34631 = 0;
seq__34608_34614 = G__34628;
chunk__34609_34615 = G__34629;
count__34610_34616 = G__34630;
i__34611_34617 = G__34631;
continue;
}
} else
{var vec__34613_34632 = cljs.core.first.call(null,seq__34608_34626__$1);var k_34633 = cljs.core.nth.call(null,vec__34613_34632,0,null);var v_34634 = cljs.core.nth.call(null,vec__34613_34632,1,null);(evt[k_34633] = v_34634);
{
var G__34635 = cljs.core.next.call(null,seq__34608_34626__$1);
var G__34636 = null;
var G__34637 = 0;
var G__34638 = 0;
seq__34608_34614 = G__34635;
chunk__34609_34615 = G__34636;
count__34610_34616 = G__34637;
i__34611_34617 = G__34638;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__34639_SHARP_){return goog.events.getListeners(p1__34639_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
