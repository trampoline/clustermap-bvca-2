// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj31464 = {};return obj31464;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t31468 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t31468 = (function (evt,f,create_listener_function,meta31469){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta31469 = meta31469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t31468.cljs$lang$type = true;
domina.events.t31468.cljs$lang$ctorStr = "domina.events/t31468";
domina.events.t31468.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t31468");
});
domina.events.t31468.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t31468.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t31468.prototype.domina$events$Event$ = true;
domina.events.t31468.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t31468.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t31468.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t31468.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t31468.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t31468.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t31468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31470){var self__ = this;
var _31470__$1 = this;return self__.meta31469;
});
domina.events.t31468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31470,meta31469__$1){var self__ = this;
var _31470__$1 = this;return (new domina.events.t31468(self__.evt,self__.f,self__.create_listener_function,meta31469__$1));
});
domina.events.__GT_t31468 = (function __GT_t31468(evt__$1,f__$1,create_listener_function__$1,meta31469){return (new domina.events.t31468(evt__$1,f__$1,create_listener_function__$1,meta31469));
});
}
return (new domina.events.t31468(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__31475(s__31476){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__31476__$1 = s__31476;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31476__$1);if(temp__4126__auto__)
{var s__31476__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31476__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31476__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31478 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31477 = (0);while(true){
if((i__31477 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__31477);cljs.core.chunk_append.call(null,b__31478,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__31479 = (i__31477 + (1));
i__31477 = G__31479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31478),iter__31475.call(null,cljs.core.chunk_rest.call(null,s__31476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31478),null);
}
} else
{var node = cljs.core.first.call(null,s__31476__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__31475.call(null,cljs.core.rest.call(null,s__31476__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__31488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31489 = null;var count__31490 = (0);var i__31491 = (0);while(true){
if((i__31491 < count__31490))
{var node = cljs.core._nth.call(null,chunk__31489,i__31491);goog.events.removeAll(node);
{
var G__31496 = seq__31488;
var G__31497 = chunk__31489;
var G__31498 = count__31490;
var G__31499 = (i__31491 + (1));
seq__31488 = G__31496;
chunk__31489 = G__31497;
count__31490 = G__31498;
i__31491 = G__31499;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31488);if(temp__4126__auto__)
{var seq__31488__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31488__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31488__$1);{
var G__31500 = cljs.core.chunk_rest.call(null,seq__31488__$1);
var G__31501 = c__4314__auto__;
var G__31502 = cljs.core.count.call(null,c__4314__auto__);
var G__31503 = (0);
seq__31488 = G__31500;
chunk__31489 = G__31501;
count__31490 = G__31502;
i__31491 = G__31503;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31488__$1);goog.events.removeAll(node);
{
var G__31504 = cljs.core.next.call(null,seq__31488__$1);
var G__31505 = null;
var G__31506 = (0);
var G__31507 = (0);
seq__31488 = G__31504;
chunk__31489 = G__31505;
count__31490 = G__31506;
i__31491 = G__31507;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__31492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31493 = null;var count__31494 = (0);var i__31495 = (0);while(true){
if((i__31495 < count__31494))
{var node = cljs.core._nth.call(null,chunk__31493,i__31495);goog.events.removeAll(node,type__$1);
{
var G__31508 = seq__31492;
var G__31509 = chunk__31493;
var G__31510 = count__31494;
var G__31511 = (i__31495 + (1));
seq__31492 = G__31508;
chunk__31493 = G__31509;
count__31494 = G__31510;
i__31495 = G__31511;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31492);if(temp__4126__auto__)
{var seq__31492__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31492__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31492__$1);{
var G__31512 = cljs.core.chunk_rest.call(null,seq__31492__$1);
var G__31513 = c__4314__auto__;
var G__31514 = cljs.core.count.call(null,c__4314__auto__);
var G__31515 = (0);
seq__31492 = G__31512;
chunk__31493 = G__31513;
count__31494 = G__31514;
i__31495 = G__31515;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31492__$1);goog.events.removeAll(node,type__$1);
{
var G__31516 = cljs.core.next.call(null,seq__31492__$1);
var G__31517 = null;
var G__31518 = (0);
var G__31519 = (0);
seq__31492 = G__31516;
chunk__31493 = G__31517;
count__31494 = G__31518;
i__31495 = G__31519;
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
var G__31520 = parent;
var G__31521 = cljs.core.cons.call(null,parent,so_far);
n = G__31520;
so_far = G__31521;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31530_31538 = cljs.core.seq.call(null,ancestors);var chunk__31531_31539 = null;var count__31532_31540 = (0);var i__31533_31541 = (0);while(true){
if((i__31533_31541 < count__31532_31540))
{var n_31542 = cljs.core._nth.call(null,chunk__31531_31539,i__31533_31541);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31542;
goog.events.fireListeners(n_31542,evt.type,true,evt);
}
{
var G__31543 = seq__31530_31538;
var G__31544 = chunk__31531_31539;
var G__31545 = count__31532_31540;
var G__31546 = (i__31533_31541 + (1));
seq__31530_31538 = G__31543;
chunk__31531_31539 = G__31544;
count__31532_31540 = G__31545;
i__31533_31541 = G__31546;
continue;
}
} else
{var temp__4126__auto___31547 = cljs.core.seq.call(null,seq__31530_31538);if(temp__4126__auto___31547)
{var seq__31530_31548__$1 = temp__4126__auto___31547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31530_31548__$1))
{var c__4314__auto___31549 = cljs.core.chunk_first.call(null,seq__31530_31548__$1);{
var G__31550 = cljs.core.chunk_rest.call(null,seq__31530_31548__$1);
var G__31551 = c__4314__auto___31549;
var G__31552 = cljs.core.count.call(null,c__4314__auto___31549);
var G__31553 = (0);
seq__31530_31538 = G__31550;
chunk__31531_31539 = G__31551;
count__31532_31540 = G__31552;
i__31533_31541 = G__31553;
continue;
}
} else
{var n_31554 = cljs.core.first.call(null,seq__31530_31548__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31554;
goog.events.fireListeners(n_31554,evt.type,true,evt);
}
{
var G__31555 = cljs.core.next.call(null,seq__31530_31548__$1);
var G__31556 = null;
var G__31557 = (0);
var G__31558 = (0);
seq__31530_31538 = G__31555;
chunk__31531_31539 = G__31556;
count__31532_31540 = G__31557;
i__31533_31541 = G__31558;
continue;
}
}
} else
{}
}
break;
}
var seq__31534_31559 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31535_31560 = null;var count__31536_31561 = (0);var i__31537_31562 = (0);while(true){
if((i__31537_31562 < count__31536_31561))
{var n_31563 = cljs.core._nth.call(null,chunk__31535_31560,i__31537_31562);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31563;
goog.events.fireListeners(n_31563,evt.type,false,evt);
}
{
var G__31564 = seq__31534_31559;
var G__31565 = chunk__31535_31560;
var G__31566 = count__31536_31561;
var G__31567 = (i__31537_31562 + (1));
seq__31534_31559 = G__31564;
chunk__31535_31560 = G__31565;
count__31536_31561 = G__31566;
i__31537_31562 = G__31567;
continue;
}
} else
{var temp__4126__auto___31568 = cljs.core.seq.call(null,seq__31534_31559);if(temp__4126__auto___31568)
{var seq__31534_31569__$1 = temp__4126__auto___31568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31534_31569__$1))
{var c__4314__auto___31570 = cljs.core.chunk_first.call(null,seq__31534_31569__$1);{
var G__31571 = cljs.core.chunk_rest.call(null,seq__31534_31569__$1);
var G__31572 = c__4314__auto___31570;
var G__31573 = cljs.core.count.call(null,c__4314__auto___31570);
var G__31574 = (0);
seq__31534_31559 = G__31571;
chunk__31535_31560 = G__31572;
count__31536_31561 = G__31573;
i__31537_31562 = G__31574;
continue;
}
} else
{var n_31575 = cljs.core.first.call(null,seq__31534_31569__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31575;
goog.events.fireListeners(n_31575,evt.type,false,evt);
}
{
var G__31576 = cljs.core.next.call(null,seq__31534_31569__$1);
var G__31577 = null;
var G__31578 = (0);
var G__31579 = (0);
seq__31534_31559 = G__31576;
chunk__31535_31560 = G__31577;
count__31536_31561 = G__31578;
i__31537_31562 = G__31579;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31586_31592 = cljs.core.seq.call(null,evt_map);var chunk__31587_31593 = null;var count__31588_31594 = (0);var i__31589_31595 = (0);while(true){
if((i__31589_31595 < count__31588_31594))
{var vec__31590_31596 = cljs.core._nth.call(null,chunk__31587_31593,i__31589_31595);var k_31597 = cljs.core.nth.call(null,vec__31590_31596,(0),null);var v_31598 = cljs.core.nth.call(null,vec__31590_31596,(1),null);(evt[k_31597] = v_31598);
{
var G__31599 = seq__31586_31592;
var G__31600 = chunk__31587_31593;
var G__31601 = count__31588_31594;
var G__31602 = (i__31589_31595 + (1));
seq__31586_31592 = G__31599;
chunk__31587_31593 = G__31600;
count__31588_31594 = G__31601;
i__31589_31595 = G__31602;
continue;
}
} else
{var temp__4126__auto___31603 = cljs.core.seq.call(null,seq__31586_31592);if(temp__4126__auto___31603)
{var seq__31586_31604__$1 = temp__4126__auto___31603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31586_31604__$1))
{var c__4314__auto___31605 = cljs.core.chunk_first.call(null,seq__31586_31604__$1);{
var G__31606 = cljs.core.chunk_rest.call(null,seq__31586_31604__$1);
var G__31607 = c__4314__auto___31605;
var G__31608 = cljs.core.count.call(null,c__4314__auto___31605);
var G__31609 = (0);
seq__31586_31592 = G__31606;
chunk__31587_31593 = G__31607;
count__31588_31594 = G__31608;
i__31589_31595 = G__31609;
continue;
}
} else
{var vec__31591_31610 = cljs.core.first.call(null,seq__31586_31604__$1);var k_31611 = cljs.core.nth.call(null,vec__31591_31610,(0),null);var v_31612 = cljs.core.nth.call(null,vec__31591_31610,(1),null);(evt[k_31611] = v_31612);
{
var G__31613 = cljs.core.next.call(null,seq__31586_31604__$1);
var G__31614 = null;
var G__31615 = (0);
var G__31616 = (0);
seq__31586_31592 = G__31613;
chunk__31587_31593 = G__31614;
count__31588_31594 = G__31615;
i__31589_31595 = G__31616;
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
return (function (p1__31617_SHARP_){return goog.events.getListeners(p1__31617_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
