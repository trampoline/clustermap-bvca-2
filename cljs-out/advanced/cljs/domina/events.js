// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27497 = {};return obj27497;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27501 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27501 = (function (evt,f,create_listener_function,meta27502){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27502 = meta27502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27501.cljs$lang$type = true;
domina.events.t27501.cljs$lang$ctorStr = "domina.events/t27501";
domina.events.t27501.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27501");
});
domina.events.t27501.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27501.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27501.prototype.domina$events$Event$ = true;
domina.events.t27501.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27501.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27501.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27501.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27501.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27501.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27503){var self__ = this;
var _27503__$1 = this;return self__.meta27502;
});
domina.events.t27501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27503,meta27502__$1){var self__ = this;
var _27503__$1 = this;return (new domina.events.t27501(self__.evt,self__.f,self__.create_listener_function,meta27502__$1));
});
domina.events.__GT_t27501 = (function __GT_t27501(evt__$1,f__$1,create_listener_function__$1,meta27502){return (new domina.events.t27501(evt__$1,f__$1,create_listener_function__$1,meta27502));
});
}
return (new domina.events.t27501(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27501 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27501 = (function (evt,f,create_listener_function,meta27502){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27502 = meta27502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27501.cljs$lang$type = true;
domina.events.t27501.cljs$lang$ctorStr = "domina.events/t27501";
domina.events.t27501.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27501");
});
domina.events.t27501.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27501.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27501.prototype.domina$events$Event$ = true;
domina.events.t27501.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27501.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27501.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27501.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27501.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27501.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27503){var self__ = this;
var _27503__$1 = this;return self__.meta27502;
});
domina.events.t27501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27503,meta27502__$1){var self__ = this;
var _27503__$1 = this;return (new domina.events.t27501(self__.evt,self__.f,self__.create_listener_function,meta27502__$1));
});
domina.events.__GT_t27501 = (function __GT_t27501(evt__$1,f__$1,create_listener_function__$1,meta27502){return (new domina.events.t27501(evt__$1,f__$1,create_listener_function__$1,meta27502));
});
}
return (new domina.events.t27501(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27508(s__27509){return (new cljs.core.LazySeq(null,(function (){var s__27509__$1 = s__27509;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27509__$1);if(temp__4092__auto__)
{var s__27509__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27509__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27509__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27511 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27510 = 0;while(true){
if((i__27510 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27510);cljs.core.chunk_append(b__27511,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27512 = (i__27510 + 1);
i__27510 = G__27512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27511),iter__27508(cljs.core.chunk_rest(s__27509__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27511),null);
}
} else
{var node = cljs.core.first(s__27509__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27508(cljs.core.rest(s__27509__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27521 = cljs.core.seq(domina.nodes(content));var chunk__27522 = null;var count__27523 = 0;var i__27524 = 0;while(true){
if((i__27524 < count__27523))
{var node = chunk__27522.cljs$core$IIndexed$_nth$arity$2(null,i__27524);goog.events.removeAll(node);
{
var G__27529 = seq__27521;
var G__27530 = chunk__27522;
var G__27531 = count__27523;
var G__27532 = (i__27524 + 1);
seq__27521 = G__27529;
chunk__27522 = G__27530;
count__27523 = G__27531;
i__27524 = G__27532;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27521);if(temp__4092__auto__)
{var seq__27521__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27521__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27521__$1);{
var G__27533 = cljs.core.chunk_rest(seq__27521__$1);
var G__27534 = c__4148__auto__;
var G__27535 = cljs.core.count(c__4148__auto__);
var G__27536 = 0;
seq__27521 = G__27533;
chunk__27522 = G__27534;
count__27523 = G__27535;
i__27524 = G__27536;
continue;
}
} else
{var node = cljs.core.first(seq__27521__$1);goog.events.removeAll(node);
{
var G__27537 = cljs.core.next(seq__27521__$1);
var G__27538 = null;
var G__27539 = 0;
var G__27540 = 0;
seq__27521 = G__27537;
chunk__27522 = G__27538;
count__27523 = G__27539;
i__27524 = G__27540;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27525 = cljs.core.seq(domina.nodes(content));var chunk__27526 = null;var count__27527 = 0;var i__27528 = 0;while(true){
if((i__27528 < count__27527))
{var node = chunk__27526.cljs$core$IIndexed$_nth$arity$2(null,i__27528);goog.events.removeAll(node,type__$1);
{
var G__27541 = seq__27525;
var G__27542 = chunk__27526;
var G__27543 = count__27527;
var G__27544 = (i__27528 + 1);
seq__27525 = G__27541;
chunk__27526 = G__27542;
count__27527 = G__27543;
i__27528 = G__27544;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27525);if(temp__4092__auto__)
{var seq__27525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27525__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27525__$1);{
var G__27545 = cljs.core.chunk_rest(seq__27525__$1);
var G__27546 = c__4148__auto__;
var G__27547 = cljs.core.count(c__4148__auto__);
var G__27548 = 0;
seq__27525 = G__27545;
chunk__27526 = G__27546;
count__27527 = G__27547;
i__27528 = G__27548;
continue;
}
} else
{var node = cljs.core.first(seq__27525__$1);goog.events.removeAll(node,type__$1);
{
var G__27549 = cljs.core.next(seq__27525__$1);
var G__27550 = null;
var G__27551 = 0;
var G__27552 = 0;
seq__27525 = G__27549;
chunk__27526 = G__27550;
count__27527 = G__27551;
i__27528 = G__27552;
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
var G__27553 = parent;
var G__27554 = cljs.core.cons(parent,so_far);
n = G__27553;
so_far = G__27554;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27563_27571 = cljs.core.seq(ancestors);var chunk__27564_27572 = null;var count__27565_27573 = 0;var i__27566_27574 = 0;while(true){
if((i__27566_27574 < count__27565_27573))
{var n_27575 = chunk__27564_27572.cljs$core$IIndexed$_nth$arity$2(null,i__27566_27574);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27575;
goog.events.fireListeners(n_27575,evt.type,true,evt);
}
{
var G__27576 = seq__27563_27571;
var G__27577 = chunk__27564_27572;
var G__27578 = count__27565_27573;
var G__27579 = (i__27566_27574 + 1);
seq__27563_27571 = G__27576;
chunk__27564_27572 = G__27577;
count__27565_27573 = G__27578;
i__27566_27574 = G__27579;
continue;
}
} else
{var temp__4092__auto___27580 = cljs.core.seq(seq__27563_27571);if(temp__4092__auto___27580)
{var seq__27563_27581__$1 = temp__4092__auto___27580;if(cljs.core.chunked_seq_QMARK_(seq__27563_27581__$1))
{var c__4148__auto___27582 = cljs.core.chunk_first(seq__27563_27581__$1);{
var G__27583 = cljs.core.chunk_rest(seq__27563_27581__$1);
var G__27584 = c__4148__auto___27582;
var G__27585 = cljs.core.count(c__4148__auto___27582);
var G__27586 = 0;
seq__27563_27571 = G__27583;
chunk__27564_27572 = G__27584;
count__27565_27573 = G__27585;
i__27566_27574 = G__27586;
continue;
}
} else
{var n_27587 = cljs.core.first(seq__27563_27581__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27587;
goog.events.fireListeners(n_27587,evt.type,true,evt);
}
{
var G__27588 = cljs.core.next(seq__27563_27581__$1);
var G__27589 = null;
var G__27590 = 0;
var G__27591 = 0;
seq__27563_27571 = G__27588;
chunk__27564_27572 = G__27589;
count__27565_27573 = G__27590;
i__27566_27574 = G__27591;
continue;
}
}
} else
{}
}
break;
}
var seq__27567_27592 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27568_27593 = null;var count__27569_27594 = 0;var i__27570_27595 = 0;while(true){
if((i__27570_27595 < count__27569_27594))
{var n_27596 = chunk__27568_27593.cljs$core$IIndexed$_nth$arity$2(null,i__27570_27595);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27596;
goog.events.fireListeners(n_27596,evt.type,false,evt);
}
{
var G__27597 = seq__27567_27592;
var G__27598 = chunk__27568_27593;
var G__27599 = count__27569_27594;
var G__27600 = (i__27570_27595 + 1);
seq__27567_27592 = G__27597;
chunk__27568_27593 = G__27598;
count__27569_27594 = G__27599;
i__27570_27595 = G__27600;
continue;
}
} else
{var temp__4092__auto___27601 = cljs.core.seq(seq__27567_27592);if(temp__4092__auto___27601)
{var seq__27567_27602__$1 = temp__4092__auto___27601;if(cljs.core.chunked_seq_QMARK_(seq__27567_27602__$1))
{var c__4148__auto___27603 = cljs.core.chunk_first(seq__27567_27602__$1);{
var G__27604 = cljs.core.chunk_rest(seq__27567_27602__$1);
var G__27605 = c__4148__auto___27603;
var G__27606 = cljs.core.count(c__4148__auto___27603);
var G__27607 = 0;
seq__27567_27592 = G__27604;
chunk__27568_27593 = G__27605;
count__27569_27594 = G__27606;
i__27570_27595 = G__27607;
continue;
}
} else
{var n_27608 = cljs.core.first(seq__27567_27602__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27608;
goog.events.fireListeners(n_27608,evt.type,false,evt);
}
{
var G__27609 = cljs.core.next(seq__27567_27602__$1);
var G__27610 = null;
var G__27611 = 0;
var G__27612 = 0;
seq__27567_27592 = G__27609;
chunk__27568_27593 = G__27610;
count__27569_27594 = G__27611;
i__27570_27595 = G__27612;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27619_27625 = cljs.core.seq(evt_map);var chunk__27620_27626 = null;var count__27621_27627 = 0;var i__27622_27628 = 0;while(true){
if((i__27622_27628 < count__27621_27627))
{var vec__27623_27629 = chunk__27620_27626.cljs$core$IIndexed$_nth$arity$2(null,i__27622_27628);var k_27630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27623_27629,0,null);var v_27631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27623_27629,1,null);(evt[k_27630] = v_27631);
{
var G__27632 = seq__27619_27625;
var G__27633 = chunk__27620_27626;
var G__27634 = count__27621_27627;
var G__27635 = (i__27622_27628 + 1);
seq__27619_27625 = G__27632;
chunk__27620_27626 = G__27633;
count__27621_27627 = G__27634;
i__27622_27628 = G__27635;
continue;
}
} else
{var temp__4092__auto___27636 = cljs.core.seq(seq__27619_27625);if(temp__4092__auto___27636)
{var seq__27619_27637__$1 = temp__4092__auto___27636;if(cljs.core.chunked_seq_QMARK_(seq__27619_27637__$1))
{var c__4148__auto___27638 = cljs.core.chunk_first(seq__27619_27637__$1);{
var G__27639 = cljs.core.chunk_rest(seq__27619_27637__$1);
var G__27640 = c__4148__auto___27638;
var G__27641 = cljs.core.count(c__4148__auto___27638);
var G__27642 = 0;
seq__27619_27625 = G__27639;
chunk__27620_27626 = G__27640;
count__27621_27627 = G__27641;
i__27622_27628 = G__27642;
continue;
}
} else
{var vec__27624_27643 = cljs.core.first(seq__27619_27637__$1);var k_27644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624_27643,0,null);var v_27645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624_27643,1,null);(evt[k_27644] = v_27645);
{
var G__27646 = cljs.core.next(seq__27619_27637__$1);
var G__27647 = null;
var G__27648 = 0;
var G__27649 = 0;
seq__27619_27625 = G__27646;
chunk__27620_27626 = G__27647;
count__27621_27627 = G__27648;
i__27622_27628 = G__27649;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27650_SHARP_){return goog.events.getListeners(p1__27650_SHARP_,type__$1,false);
}),domina.nodes(content));
});
