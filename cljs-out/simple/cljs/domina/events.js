// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj31512 = {};return obj31512;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t31516 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t31516 = (function (evt,f,create_listener_function,meta31517){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta31517 = meta31517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t31516.cljs$lang$type = true;
domina.events.t31516.cljs$lang$ctorStr = "domina.events/t31516";
domina.events.t31516.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t31516");
});
domina.events.t31516.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t31516.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t31516.prototype.domina$events$Event$ = true;
domina.events.t31516.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t31516.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t31516.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t31516.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t31516.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t31516.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t31516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31518){var self__ = this;
var _31518__$1 = this;return self__.meta31517;
});
domina.events.t31516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31518,meta31517__$1){var self__ = this;
var _31518__$1 = this;return (new domina.events.t31516(self__.evt,self__.f,self__.create_listener_function,meta31517__$1));
});
domina.events.__GT_t31516 = (function __GT_t31516(evt__$1,f__$1,create_listener_function__$1,meta31517){return (new domina.events.t31516(evt__$1,f__$1,create_listener_function__$1,meta31517));
});
}
return (new domina.events.t31516(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__31523(s__31524){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__31524__$1 = s__31524;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31524__$1);if(temp__4126__auto__)
{var s__31524__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31524__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31524__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31526 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31525 = (0);while(true){
if((i__31525 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__31525);cljs.core.chunk_append.call(null,b__31526,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__31527 = (i__31525 + (1));
i__31525 = G__31527;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31526),iter__31523.call(null,cljs.core.chunk_rest.call(null,s__31524__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31526),null);
}
} else
{var node = cljs.core.first.call(null,s__31524__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__31523.call(null,cljs.core.rest.call(null,s__31524__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__31536 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31537 = null;var count__31538 = (0);var i__31539 = (0);while(true){
if((i__31539 < count__31538))
{var node = cljs.core._nth.call(null,chunk__31537,i__31539);goog.events.removeAll(node);
{
var G__31544 = seq__31536;
var G__31545 = chunk__31537;
var G__31546 = count__31538;
var G__31547 = (i__31539 + (1));
seq__31536 = G__31544;
chunk__31537 = G__31545;
count__31538 = G__31546;
i__31539 = G__31547;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31536);if(temp__4126__auto__)
{var seq__31536__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31536__$1);{
var G__31548 = cljs.core.chunk_rest.call(null,seq__31536__$1);
var G__31549 = c__4314__auto__;
var G__31550 = cljs.core.count.call(null,c__4314__auto__);
var G__31551 = (0);
seq__31536 = G__31548;
chunk__31537 = G__31549;
count__31538 = G__31550;
i__31539 = G__31551;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31536__$1);goog.events.removeAll(node);
{
var G__31552 = cljs.core.next.call(null,seq__31536__$1);
var G__31553 = null;
var G__31554 = (0);
var G__31555 = (0);
seq__31536 = G__31552;
chunk__31537 = G__31553;
count__31538 = G__31554;
i__31539 = G__31555;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__31540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31541 = null;var count__31542 = (0);var i__31543 = (0);while(true){
if((i__31543 < count__31542))
{var node = cljs.core._nth.call(null,chunk__31541,i__31543);goog.events.removeAll(node,type__$1);
{
var G__31556 = seq__31540;
var G__31557 = chunk__31541;
var G__31558 = count__31542;
var G__31559 = (i__31543 + (1));
seq__31540 = G__31556;
chunk__31541 = G__31557;
count__31542 = G__31558;
i__31543 = G__31559;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31540);if(temp__4126__auto__)
{var seq__31540__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31540__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31540__$1);{
var G__31560 = cljs.core.chunk_rest.call(null,seq__31540__$1);
var G__31561 = c__4314__auto__;
var G__31562 = cljs.core.count.call(null,c__4314__auto__);
var G__31563 = (0);
seq__31540 = G__31560;
chunk__31541 = G__31561;
count__31542 = G__31562;
i__31543 = G__31563;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31540__$1);goog.events.removeAll(node,type__$1);
{
var G__31564 = cljs.core.next.call(null,seq__31540__$1);
var G__31565 = null;
var G__31566 = (0);
var G__31567 = (0);
seq__31540 = G__31564;
chunk__31541 = G__31565;
count__31542 = G__31566;
i__31543 = G__31567;
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
var G__31568 = parent;
var G__31569 = cljs.core.cons.call(null,parent,so_far);
n = G__31568;
so_far = G__31569;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31578_31586 = cljs.core.seq.call(null,ancestors);var chunk__31579_31587 = null;var count__31580_31588 = (0);var i__31581_31589 = (0);while(true){
if((i__31581_31589 < count__31580_31588))
{var n_31590 = cljs.core._nth.call(null,chunk__31579_31587,i__31581_31589);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31590;
goog.events.fireListeners(n_31590,evt.type,true,evt);
}
{
var G__31591 = seq__31578_31586;
var G__31592 = chunk__31579_31587;
var G__31593 = count__31580_31588;
var G__31594 = (i__31581_31589 + (1));
seq__31578_31586 = G__31591;
chunk__31579_31587 = G__31592;
count__31580_31588 = G__31593;
i__31581_31589 = G__31594;
continue;
}
} else
{var temp__4126__auto___31595 = cljs.core.seq.call(null,seq__31578_31586);if(temp__4126__auto___31595)
{var seq__31578_31596__$1 = temp__4126__auto___31595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31578_31596__$1))
{var c__4314__auto___31597 = cljs.core.chunk_first.call(null,seq__31578_31596__$1);{
var G__31598 = cljs.core.chunk_rest.call(null,seq__31578_31596__$1);
var G__31599 = c__4314__auto___31597;
var G__31600 = cljs.core.count.call(null,c__4314__auto___31597);
var G__31601 = (0);
seq__31578_31586 = G__31598;
chunk__31579_31587 = G__31599;
count__31580_31588 = G__31600;
i__31581_31589 = G__31601;
continue;
}
} else
{var n_31602 = cljs.core.first.call(null,seq__31578_31596__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31602;
goog.events.fireListeners(n_31602,evt.type,true,evt);
}
{
var G__31603 = cljs.core.next.call(null,seq__31578_31596__$1);
var G__31604 = null;
var G__31605 = (0);
var G__31606 = (0);
seq__31578_31586 = G__31603;
chunk__31579_31587 = G__31604;
count__31580_31588 = G__31605;
i__31581_31589 = G__31606;
continue;
}
}
} else
{}
}
break;
}
var seq__31582_31607 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31583_31608 = null;var count__31584_31609 = (0);var i__31585_31610 = (0);while(true){
if((i__31585_31610 < count__31584_31609))
{var n_31611 = cljs.core._nth.call(null,chunk__31583_31608,i__31585_31610);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31611;
goog.events.fireListeners(n_31611,evt.type,false,evt);
}
{
var G__31612 = seq__31582_31607;
var G__31613 = chunk__31583_31608;
var G__31614 = count__31584_31609;
var G__31615 = (i__31585_31610 + (1));
seq__31582_31607 = G__31612;
chunk__31583_31608 = G__31613;
count__31584_31609 = G__31614;
i__31585_31610 = G__31615;
continue;
}
} else
{var temp__4126__auto___31616 = cljs.core.seq.call(null,seq__31582_31607);if(temp__4126__auto___31616)
{var seq__31582_31617__$1 = temp__4126__auto___31616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31582_31617__$1))
{var c__4314__auto___31618 = cljs.core.chunk_first.call(null,seq__31582_31617__$1);{
var G__31619 = cljs.core.chunk_rest.call(null,seq__31582_31617__$1);
var G__31620 = c__4314__auto___31618;
var G__31621 = cljs.core.count.call(null,c__4314__auto___31618);
var G__31622 = (0);
seq__31582_31607 = G__31619;
chunk__31583_31608 = G__31620;
count__31584_31609 = G__31621;
i__31585_31610 = G__31622;
continue;
}
} else
{var n_31623 = cljs.core.first.call(null,seq__31582_31617__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31623;
goog.events.fireListeners(n_31623,evt.type,false,evt);
}
{
var G__31624 = cljs.core.next.call(null,seq__31582_31617__$1);
var G__31625 = null;
var G__31626 = (0);
var G__31627 = (0);
seq__31582_31607 = G__31624;
chunk__31583_31608 = G__31625;
count__31584_31609 = G__31626;
i__31585_31610 = G__31627;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31634_31640 = cljs.core.seq.call(null,evt_map);var chunk__31635_31641 = null;var count__31636_31642 = (0);var i__31637_31643 = (0);while(true){
if((i__31637_31643 < count__31636_31642))
{var vec__31638_31644 = cljs.core._nth.call(null,chunk__31635_31641,i__31637_31643);var k_31645 = cljs.core.nth.call(null,vec__31638_31644,(0),null);var v_31646 = cljs.core.nth.call(null,vec__31638_31644,(1),null);(evt[k_31645] = v_31646);
{
var G__31647 = seq__31634_31640;
var G__31648 = chunk__31635_31641;
var G__31649 = count__31636_31642;
var G__31650 = (i__31637_31643 + (1));
seq__31634_31640 = G__31647;
chunk__31635_31641 = G__31648;
count__31636_31642 = G__31649;
i__31637_31643 = G__31650;
continue;
}
} else
{var temp__4126__auto___31651 = cljs.core.seq.call(null,seq__31634_31640);if(temp__4126__auto___31651)
{var seq__31634_31652__$1 = temp__4126__auto___31651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31634_31652__$1))
{var c__4314__auto___31653 = cljs.core.chunk_first.call(null,seq__31634_31652__$1);{
var G__31654 = cljs.core.chunk_rest.call(null,seq__31634_31652__$1);
var G__31655 = c__4314__auto___31653;
var G__31656 = cljs.core.count.call(null,c__4314__auto___31653);
var G__31657 = (0);
seq__31634_31640 = G__31654;
chunk__31635_31641 = G__31655;
count__31636_31642 = G__31656;
i__31637_31643 = G__31657;
continue;
}
} else
{var vec__31639_31658 = cljs.core.first.call(null,seq__31634_31652__$1);var k_31659 = cljs.core.nth.call(null,vec__31639_31658,(0),null);var v_31660 = cljs.core.nth.call(null,vec__31639_31658,(1),null);(evt[k_31659] = v_31660);
{
var G__31661 = cljs.core.next.call(null,seq__31634_31652__$1);
var G__31662 = null;
var G__31663 = (0);
var G__31664 = (0);
seq__31634_31640 = G__31661;
chunk__31635_31641 = G__31662;
count__31636_31642 = G__31663;
i__31637_31643 = G__31664;
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
return (function (p1__31665_SHARP_){return goog.events.getListeners(p1__31665_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
