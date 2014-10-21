// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj75422 = {};return obj75422;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[(function (){var G__75426 = x__4273__auto__;return goog.typeOf(G__75426);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[(function (){var G__75430 = x__4273__auto__;return goog.typeOf(G__75430);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[(function (){var G__75434 = x__4273__auto__;return goog.typeOf(G__75434);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
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
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[(function (){var G__75438 = x__4273__auto__;return goog.typeOf(G__75438);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[(function (){var G__75442 = x__4273__auto__;return goog.typeOf(G__75442);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[(function (){var G__75446 = x__4273__auto__;return goog.typeOf(G__75446);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){var G__75451_75455 = (function (){if(typeof domina.events.t75452 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t75452 = (function (evt,f,create_listener_function,meta75453){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta75453 = meta75453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t75452.cljs$lang$type = true;
domina.events.t75452.cljs$lang$ctorStr = "domina.events/t75452";
domina.events.t75452.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"domina.events/t75452");
});
domina.events.t75452.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t75452.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t75452.prototype.domina$events$Event$ = true;
domina.events.t75452.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t75452.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t75452.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t75452.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t75452.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t75452.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t75452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75454){var self__ = this;
var _75454__$1 = this;return self__.meta75453;
});
domina.events.t75452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75454,meta75453__$1){var self__ = this;
var _75454__$1 = this;return (new domina.events.t75452(self__.evt,self__.f,self__.create_listener_function,meta75453__$1));
});
domina.events.__GT_t75452 = (function __GT_t75452(evt__$1,f__$1,create_listener_function__$1,meta75453){return (new domina.events.t75452(evt__$1,f__$1,create_listener_function__$1,meta75453));
});
}
return (new domina.events.t75452(evt,f,create_listener_function,null));
})();(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75451_75455) : f.call(null,G__75451_75455));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__75494(s__75495){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__75495__$1 = s__75495;while(true){
var temp__4126__auto__ = cljs.core.seq(s__75495__$1);if(temp__4126__auto__)
{var s__75495__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__75495__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__75495__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__75497 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__75496 = (0);while(true){
if((i__75496 < size__4374__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__75496);cljs.core.chunk_append(b__75497,(cljs.core.truth_(once)?(function (){var G__75516 = node;var G__75517 = t;var G__75518 = f;var G__75519 = capture;return goog.events.listenOnce(G__75516,G__75517,G__75518,G__75519);
})():(function (){var G__75520 = node;var G__75521 = t;var G__75522 = f;var G__75523 = capture;return goog.events.listen(G__75520,G__75521,G__75522,G__75523);
})()));
{
var G__75532 = (i__75496 + (1));
i__75496 = G__75532;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__75497),iter__75494(cljs.core.chunk_rest(s__75495__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__75497),null);
}
} else
{var node = cljs.core.first(s__75495__$2);return cljs.core.cons((cljs.core.truth_(once)?(function (){var G__75524 = node;var G__75525 = t;var G__75526 = f;var G__75527 = capture;return goog.events.listenOnce(G__75524,G__75525,G__75526,G__75527);
})():(function (){var G__75528 = node;var G__75529 = t;var G__75530 = f;var G__75531 = capture;return goog.events.listen(G__75528,G__75529,G__75530,G__75531);
})()),iter__75494(cljs.core.rest(s__75495__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__75560 = cljs.core.seq(domina.nodes(content));var chunk__75561 = null;var count__75562 = (0);var i__75563 = (0);while(true){
if((i__75563 < count__75562))
{var node = chunk__75561.cljs$core$IIndexed$_nth$arity$2(null,i__75563);var G__75564_75574 = node;goog.events.removeAll(G__75564_75574);
{
var G__75575 = seq__75560;
var G__75576 = chunk__75561;
var G__75577 = count__75562;
var G__75578 = (i__75563 + (1));
seq__75560 = G__75575;
chunk__75561 = G__75576;
count__75562 = G__75577;
i__75563 = G__75578;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__75560);if(temp__4126__auto__)
{var seq__75560__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__75560__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__75560__$1);{
var G__75579 = cljs.core.chunk_rest(seq__75560__$1);
var G__75580 = c__4406__auto__;
var G__75581 = cljs.core.count(c__4406__auto__);
var G__75582 = (0);
seq__75560 = G__75579;
chunk__75561 = G__75580;
count__75562 = G__75581;
i__75563 = G__75582;
continue;
}
} else
{var node = cljs.core.first(seq__75560__$1);var G__75565_75583 = node;goog.events.removeAll(G__75565_75583);
{
var G__75584 = cljs.core.next(seq__75560__$1);
var G__75585 = null;
var G__75586 = (0);
var G__75587 = (0);
seq__75560 = G__75584;
chunk__75561 = G__75585;
count__75562 = G__75586;
i__75563 = G__75587;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__75566 = cljs.core.seq(domina.nodes(content));var chunk__75567 = null;var count__75568 = (0);var i__75569 = (0);while(true){
if((i__75569 < count__75568))
{var node = chunk__75567.cljs$core$IIndexed$_nth$arity$2(null,i__75569);var G__75570_75588 = node;var G__75571_75589 = type__$1;goog.events.removeAll(G__75570_75588,G__75571_75589);
{
var G__75590 = seq__75566;
var G__75591 = chunk__75567;
var G__75592 = count__75568;
var G__75593 = (i__75569 + (1));
seq__75566 = G__75590;
chunk__75567 = G__75591;
count__75568 = G__75592;
i__75569 = G__75593;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__75566);if(temp__4126__auto__)
{var seq__75566__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__75566__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__75566__$1);{
var G__75594 = cljs.core.chunk_rest(seq__75566__$1);
var G__75595 = c__4406__auto__;
var G__75596 = cljs.core.count(c__4406__auto__);
var G__75597 = (0);
seq__75566 = G__75594;
chunk__75567 = G__75595;
count__75568 = G__75596;
i__75569 = G__75597;
continue;
}
} else
{var node = cljs.core.first(seq__75566__$1);var G__75572_75598 = node;var G__75573_75599 = type__$1;goog.events.removeAll(G__75572_75598,G__75573_75599);
{
var G__75600 = cljs.core.next(seq__75566__$1);
var G__75601 = null;
var G__75602 = (0);
var G__75603 = (0);
seq__75566 = G__75600;
chunk__75567 = G__75601;
count__75568 = G__75602;
i__75569 = G__75603;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__75606 = parent;
var G__75607 = cljs.core.cons(parent,so_far);
n = G__75606;
so_far = G__75607;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__75632_75656 = cljs.core.seq(ancestors);var chunk__75633_75657 = null;var count__75634_75658 = (0);var i__75635_75659 = (0);while(true){
if((i__75635_75659 < count__75634_75658))
{var n_75660 = chunk__75633_75657.cljs$core$IIndexed$_nth$arity$2(null,i__75635_75659);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_75660;
var G__75636_75661 = n_75660;var G__75637_75662 = evt.type;var G__75638_75663 = true;var G__75639_75664 = evt;goog.events.fireListeners(G__75636_75661,G__75637_75662,G__75638_75663,G__75639_75664);
}
{
var G__75665 = seq__75632_75656;
var G__75666 = chunk__75633_75657;
var G__75667 = count__75634_75658;
var G__75668 = (i__75635_75659 + (1));
seq__75632_75656 = G__75665;
chunk__75633_75657 = G__75666;
count__75634_75658 = G__75667;
i__75635_75659 = G__75668;
continue;
}
} else
{var temp__4126__auto___75669 = cljs.core.seq(seq__75632_75656);if(temp__4126__auto___75669)
{var seq__75632_75670__$1 = temp__4126__auto___75669;if(cljs.core.chunked_seq_QMARK_(seq__75632_75670__$1))
{var c__4406__auto___75671 = cljs.core.chunk_first(seq__75632_75670__$1);{
var G__75672 = cljs.core.chunk_rest(seq__75632_75670__$1);
var G__75673 = c__4406__auto___75671;
var G__75674 = cljs.core.count(c__4406__auto___75671);
var G__75675 = (0);
seq__75632_75656 = G__75672;
chunk__75633_75657 = G__75673;
count__75634_75658 = G__75674;
i__75635_75659 = G__75675;
continue;
}
} else
{var n_75676 = cljs.core.first(seq__75632_75670__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_75676;
var G__75640_75677 = n_75676;var G__75641_75678 = evt.type;var G__75642_75679 = true;var G__75643_75680 = evt;goog.events.fireListeners(G__75640_75677,G__75641_75678,G__75642_75679,G__75643_75680);
}
{
var G__75681 = cljs.core.next(seq__75632_75670__$1);
var G__75682 = null;
var G__75683 = (0);
var G__75684 = (0);
seq__75632_75656 = G__75681;
chunk__75633_75657 = G__75682;
count__75634_75658 = G__75683;
i__75635_75659 = G__75684;
continue;
}
}
} else
{}
}
break;
}
var seq__75644_75685 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__75645_75686 = null;var count__75646_75687 = (0);var i__75647_75688 = (0);while(true){
if((i__75647_75688 < count__75646_75687))
{var n_75689 = chunk__75645_75686.cljs$core$IIndexed$_nth$arity$2(null,i__75647_75688);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_75689;
var G__75648_75690 = n_75689;var G__75649_75691 = evt.type;var G__75650_75692 = false;var G__75651_75693 = evt;goog.events.fireListeners(G__75648_75690,G__75649_75691,G__75650_75692,G__75651_75693);
}
{
var G__75694 = seq__75644_75685;
var G__75695 = chunk__75645_75686;
var G__75696 = count__75646_75687;
var G__75697 = (i__75647_75688 + (1));
seq__75644_75685 = G__75694;
chunk__75645_75686 = G__75695;
count__75646_75687 = G__75696;
i__75647_75688 = G__75697;
continue;
}
} else
{var temp__4126__auto___75698 = cljs.core.seq(seq__75644_75685);if(temp__4126__auto___75698)
{var seq__75644_75699__$1 = temp__4126__auto___75698;if(cljs.core.chunked_seq_QMARK_(seq__75644_75699__$1))
{var c__4406__auto___75700 = cljs.core.chunk_first(seq__75644_75699__$1);{
var G__75701 = cljs.core.chunk_rest(seq__75644_75699__$1);
var G__75702 = c__4406__auto___75700;
var G__75703 = cljs.core.count(c__4406__auto___75700);
var G__75704 = (0);
seq__75644_75685 = G__75701;
chunk__75645_75686 = G__75702;
count__75646_75687 = G__75703;
i__75647_75688 = G__75704;
continue;
}
} else
{var n_75705 = cljs.core.first(seq__75644_75699__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_75705;
var G__75652_75706 = n_75705;var G__75653_75707 = evt.type;var G__75654_75708 = false;var G__75655_75709 = evt;goog.events.fireListeners(G__75652_75706,G__75653_75707,G__75654_75708,G__75655_75709);
}
{
var G__75710 = cljs.core.next(seq__75644_75699__$1);
var G__75711 = null;
var G__75712 = (0);
var G__75713 = (0);
seq__75644_75685 = G__75710;
chunk__75645_75686 = G__75711;
count__75646_75687 = G__75712;
i__75647_75688 = G__75713;
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
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){var G__75716 = source;var G__75717 = evt;return goog.events.dispatchEvent(G__75716,G__75717);
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__75727_75733 = cljs.core.seq(evt_map);var chunk__75728_75734 = null;var count__75729_75735 = (0);var i__75730_75736 = (0);while(true){
if((i__75730_75736 < count__75729_75735))
{var vec__75731_75737 = chunk__75728_75734.cljs$core$IIndexed$_nth$arity$2(null,i__75730_75736);var k_75738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75731_75737,(0),null);var v_75739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75731_75737,(1),null);(evt[k_75738] = v_75739);
{
var G__75740 = seq__75727_75733;
var G__75741 = chunk__75728_75734;
var G__75742 = count__75729_75735;
var G__75743 = (i__75730_75736 + (1));
seq__75727_75733 = G__75740;
chunk__75728_75734 = G__75741;
count__75729_75735 = G__75742;
i__75730_75736 = G__75743;
continue;
}
} else
{var temp__4126__auto___75744 = cljs.core.seq(seq__75727_75733);if(temp__4126__auto___75744)
{var seq__75727_75745__$1 = temp__4126__auto___75744;if(cljs.core.chunked_seq_QMARK_(seq__75727_75745__$1))
{var c__4406__auto___75746 = cljs.core.chunk_first(seq__75727_75745__$1);{
var G__75747 = cljs.core.chunk_rest(seq__75727_75745__$1);
var G__75748 = c__4406__auto___75746;
var G__75749 = cljs.core.count(c__4406__auto___75746);
var G__75750 = (0);
seq__75727_75733 = G__75747;
chunk__75728_75734 = G__75748;
count__75729_75735 = G__75749;
i__75730_75736 = G__75750;
continue;
}
} else
{var vec__75732_75751 = cljs.core.first(seq__75727_75745__$1);var k_75752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75732_75751,(0),null);var v_75753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75732_75751,(1),null);(evt[k_75752] = v_75753);
{
var G__75754 = cljs.core.next(seq__75727_75745__$1);
var G__75755 = null;
var G__75756 = (0);
var G__75757 = (0);
seq__75727_75733 = G__75754;
chunk__75728_75734 = G__75755;
count__75729_75735 = G__75756;
i__75730_75736 = G__75757;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
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
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){var G__75759 = key;return goog.events.unlistenByKey(G__75759);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (type__$1){
return (function (p1__75760_SHARP_){var G__75764 = p1__75760_SHARP_;var G__75765 = type__$1;var G__75766 = false;return goog.events.getListeners(G__75764,G__75765,G__75766);
});})(type__$1))
,cljs.core.array_seq([domina.nodes(content)], 0));
});
