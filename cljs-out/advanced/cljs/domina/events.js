// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27525 = {};return obj27525;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27529 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27529 = (function (evt,f,create_listener_function,meta27530){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27530 = meta27530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27529.cljs$lang$type = true;
domina.events.t27529.cljs$lang$ctorStr = "domina.events/t27529";
domina.events.t27529.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27529");
});
domina.events.t27529.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27529.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27529.prototype.domina$events$Event$ = true;
domina.events.t27529.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27529.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27529.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27529.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27529.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27529.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27531){var self__ = this;
var _27531__$1 = this;return self__.meta27530;
});
domina.events.t27529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27531,meta27530__$1){var self__ = this;
var _27531__$1 = this;return (new domina.events.t27529(self__.evt,self__.f,self__.create_listener_function,meta27530__$1));
});
domina.events.__GT_t27529 = (function __GT_t27529(evt__$1,f__$1,create_listener_function__$1,meta27530){return (new domina.events.t27529(evt__$1,f__$1,create_listener_function__$1,meta27530));
});
}
return (new domina.events.t27529(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27529 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27529 = (function (evt,f,create_listener_function,meta27530){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27530 = meta27530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27529.cljs$lang$type = true;
domina.events.t27529.cljs$lang$ctorStr = "domina.events/t27529";
domina.events.t27529.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27529");
});
domina.events.t27529.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27529.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27529.prototype.domina$events$Event$ = true;
domina.events.t27529.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27529.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27529.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27529.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27529.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27529.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27531){var self__ = this;
var _27531__$1 = this;return self__.meta27530;
});
domina.events.t27529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27531,meta27530__$1){var self__ = this;
var _27531__$1 = this;return (new domina.events.t27529(self__.evt,self__.f,self__.create_listener_function,meta27530__$1));
});
domina.events.__GT_t27529 = (function __GT_t27529(evt__$1,f__$1,create_listener_function__$1,meta27530){return (new domina.events.t27529(evt__$1,f__$1,create_listener_function__$1,meta27530));
});
}
return (new domina.events.t27529(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27536(s__27537){return (new cljs.core.LazySeq(null,(function (){var s__27537__$1 = s__27537;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27537__$1);if(temp__4092__auto__)
{var s__27537__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27537__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27537__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27539 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27538 = 0;while(true){
if((i__27538 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27538);cljs.core.chunk_append(b__27539,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27540 = (i__27538 + 1);
i__27538 = G__27540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27539),iter__27536(cljs.core.chunk_rest(s__27537__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27539),null);
}
} else
{var node = cljs.core.first(s__27537__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27536(cljs.core.rest(s__27537__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__27549 = cljs.core.seq(domina.nodes(content));var chunk__27550 = null;var count__27551 = 0;var i__27552 = 0;while(true){
if((i__27552 < count__27551))
{var node = chunk__27550.cljs$core$IIndexed$_nth$arity$2(null,i__27552);goog.events.removeAll(node);
{
var G__27557 = seq__27549;
var G__27558 = chunk__27550;
var G__27559 = count__27551;
var G__27560 = (i__27552 + 1);
seq__27549 = G__27557;
chunk__27550 = G__27558;
count__27551 = G__27559;
i__27552 = G__27560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27549);if(temp__4092__auto__)
{var seq__27549__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27549__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27549__$1);{
var G__27561 = cljs.core.chunk_rest(seq__27549__$1);
var G__27562 = c__4148__auto__;
var G__27563 = cljs.core.count(c__4148__auto__);
var G__27564 = 0;
seq__27549 = G__27561;
chunk__27550 = G__27562;
count__27551 = G__27563;
i__27552 = G__27564;
continue;
}
} else
{var node = cljs.core.first(seq__27549__$1);goog.events.removeAll(node);
{
var G__27565 = cljs.core.next(seq__27549__$1);
var G__27566 = null;
var G__27567 = 0;
var G__27568 = 0;
seq__27549 = G__27565;
chunk__27550 = G__27566;
count__27551 = G__27567;
i__27552 = G__27568;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27553 = cljs.core.seq(domina.nodes(content));var chunk__27554 = null;var count__27555 = 0;var i__27556 = 0;while(true){
if((i__27556 < count__27555))
{var node = chunk__27554.cljs$core$IIndexed$_nth$arity$2(null,i__27556);goog.events.removeAll(node,type__$1);
{
var G__27569 = seq__27553;
var G__27570 = chunk__27554;
var G__27571 = count__27555;
var G__27572 = (i__27556 + 1);
seq__27553 = G__27569;
chunk__27554 = G__27570;
count__27555 = G__27571;
i__27556 = G__27572;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27553);if(temp__4092__auto__)
{var seq__27553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27553__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27553__$1);{
var G__27573 = cljs.core.chunk_rest(seq__27553__$1);
var G__27574 = c__4148__auto__;
var G__27575 = cljs.core.count(c__4148__auto__);
var G__27576 = 0;
seq__27553 = G__27573;
chunk__27554 = G__27574;
count__27555 = G__27575;
i__27556 = G__27576;
continue;
}
} else
{var node = cljs.core.first(seq__27553__$1);goog.events.removeAll(node,type__$1);
{
var G__27577 = cljs.core.next(seq__27553__$1);
var G__27578 = null;
var G__27579 = 0;
var G__27580 = 0;
seq__27553 = G__27577;
chunk__27554 = G__27578;
count__27555 = G__27579;
i__27556 = G__27580;
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
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__27581 = parent;
var G__27582 = cljs.core.cons(parent,so_far);
n = G__27581;
so_far = G__27582;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27591_27599 = cljs.core.seq(ancestors);var chunk__27592_27600 = null;var count__27593_27601 = 0;var i__27594_27602 = 0;while(true){
if((i__27594_27602 < count__27593_27601))
{var n_27603 = chunk__27592_27600.cljs$core$IIndexed$_nth$arity$2(null,i__27594_27602);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27603;
goog.events.fireListeners(n_27603,evt.type,true,evt);
}
{
var G__27604 = seq__27591_27599;
var G__27605 = chunk__27592_27600;
var G__27606 = count__27593_27601;
var G__27607 = (i__27594_27602 + 1);
seq__27591_27599 = G__27604;
chunk__27592_27600 = G__27605;
count__27593_27601 = G__27606;
i__27594_27602 = G__27607;
continue;
}
} else
{var temp__4092__auto___27608 = cljs.core.seq(seq__27591_27599);if(temp__4092__auto___27608)
{var seq__27591_27609__$1 = temp__4092__auto___27608;if(cljs.core.chunked_seq_QMARK_(seq__27591_27609__$1))
{var c__4148__auto___27610 = cljs.core.chunk_first(seq__27591_27609__$1);{
var G__27611 = cljs.core.chunk_rest(seq__27591_27609__$1);
var G__27612 = c__4148__auto___27610;
var G__27613 = cljs.core.count(c__4148__auto___27610);
var G__27614 = 0;
seq__27591_27599 = G__27611;
chunk__27592_27600 = G__27612;
count__27593_27601 = G__27613;
i__27594_27602 = G__27614;
continue;
}
} else
{var n_27615 = cljs.core.first(seq__27591_27609__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27615;
goog.events.fireListeners(n_27615,evt.type,true,evt);
}
{
var G__27616 = cljs.core.next(seq__27591_27609__$1);
var G__27617 = null;
var G__27618 = 0;
var G__27619 = 0;
seq__27591_27599 = G__27616;
chunk__27592_27600 = G__27617;
count__27593_27601 = G__27618;
i__27594_27602 = G__27619;
continue;
}
}
} else
{}
}
break;
}
var seq__27595_27620 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27596_27621 = null;var count__27597_27622 = 0;var i__27598_27623 = 0;while(true){
if((i__27598_27623 < count__27597_27622))
{var n_27624 = chunk__27596_27621.cljs$core$IIndexed$_nth$arity$2(null,i__27598_27623);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27624;
goog.events.fireListeners(n_27624,evt.type,false,evt);
}
{
var G__27625 = seq__27595_27620;
var G__27626 = chunk__27596_27621;
var G__27627 = count__27597_27622;
var G__27628 = (i__27598_27623 + 1);
seq__27595_27620 = G__27625;
chunk__27596_27621 = G__27626;
count__27597_27622 = G__27627;
i__27598_27623 = G__27628;
continue;
}
} else
{var temp__4092__auto___27629 = cljs.core.seq(seq__27595_27620);if(temp__4092__auto___27629)
{var seq__27595_27630__$1 = temp__4092__auto___27629;if(cljs.core.chunked_seq_QMARK_(seq__27595_27630__$1))
{var c__4148__auto___27631 = cljs.core.chunk_first(seq__27595_27630__$1);{
var G__27632 = cljs.core.chunk_rest(seq__27595_27630__$1);
var G__27633 = c__4148__auto___27631;
var G__27634 = cljs.core.count(c__4148__auto___27631);
var G__27635 = 0;
seq__27595_27620 = G__27632;
chunk__27596_27621 = G__27633;
count__27597_27622 = G__27634;
i__27598_27623 = G__27635;
continue;
}
} else
{var n_27636 = cljs.core.first(seq__27595_27630__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27636;
goog.events.fireListeners(n_27636,evt.type,false,evt);
}
{
var G__27637 = cljs.core.next(seq__27595_27630__$1);
var G__27638 = null;
var G__27639 = 0;
var G__27640 = 0;
seq__27595_27620 = G__27637;
chunk__27596_27621 = G__27638;
count__27597_27622 = G__27639;
i__27598_27623 = G__27640;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27647_27653 = cljs.core.seq(evt_map);var chunk__27648_27654 = null;var count__27649_27655 = 0;var i__27650_27656 = 0;while(true){
if((i__27650_27656 < count__27649_27655))
{var vec__27651_27657 = chunk__27648_27654.cljs$core$IIndexed$_nth$arity$2(null,i__27650_27656);var k_27658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651_27657,0,null);var v_27659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651_27657,1,null);(evt[k_27658] = v_27659);
{
var G__27660 = seq__27647_27653;
var G__27661 = chunk__27648_27654;
var G__27662 = count__27649_27655;
var G__27663 = (i__27650_27656 + 1);
seq__27647_27653 = G__27660;
chunk__27648_27654 = G__27661;
count__27649_27655 = G__27662;
i__27650_27656 = G__27663;
continue;
}
} else
{var temp__4092__auto___27664 = cljs.core.seq(seq__27647_27653);if(temp__4092__auto___27664)
{var seq__27647_27665__$1 = temp__4092__auto___27664;if(cljs.core.chunked_seq_QMARK_(seq__27647_27665__$1))
{var c__4148__auto___27666 = cljs.core.chunk_first(seq__27647_27665__$1);{
var G__27667 = cljs.core.chunk_rest(seq__27647_27665__$1);
var G__27668 = c__4148__auto___27666;
var G__27669 = cljs.core.count(c__4148__auto___27666);
var G__27670 = 0;
seq__27647_27653 = G__27667;
chunk__27648_27654 = G__27668;
count__27649_27655 = G__27669;
i__27650_27656 = G__27670;
continue;
}
} else
{var vec__27652_27671 = cljs.core.first(seq__27647_27665__$1);var k_27672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27652_27671,0,null);var v_27673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27652_27671,1,null);(evt[k_27672] = v_27673);
{
var G__27674 = cljs.core.next(seq__27647_27665__$1);
var G__27675 = null;
var G__27676 = 0;
var G__27677 = 0;
seq__27647_27653 = G__27674;
chunk__27648_27654 = G__27675;
count__27649_27655 = G__27676;
i__27650_27656 = G__27677;
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
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27678_SHARP_){return goog.events.getListeners(p1__27678_SHARP_,type__$1,false);
}),domina.nodes(content));
});
