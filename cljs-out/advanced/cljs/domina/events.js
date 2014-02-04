// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26508 = {};return obj26508;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26512 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26512 = (function (evt,f,create_listener_function,meta26513){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26513 = meta26513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26512.cljs$lang$type = true;
domina.events.t26512.cljs$lang$ctorStr = "domina.events/t26512";
domina.events.t26512.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26512");
});
domina.events.t26512.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26512.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26512.prototype.domina$events$Event$ = true;
domina.events.t26512.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26512.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26512.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26512.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26512.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26512.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26514){var self__ = this;
var _26514__$1 = this;return self__.meta26513;
});
domina.events.t26512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26514,meta26513__$1){var self__ = this;
var _26514__$1 = this;return (new domina.events.t26512(self__.evt,self__.f,self__.create_listener_function,meta26513__$1));
});
domina.events.__GT_t26512 = (function __GT_t26512(evt__$1,f__$1,create_listener_function__$1,meta26513){return (new domina.events.t26512(evt__$1,f__$1,create_listener_function__$1,meta26513));
});
}
return (new domina.events.t26512(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26512 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26512 = (function (evt,f,create_listener_function,meta26513){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26513 = meta26513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26512.cljs$lang$type = true;
domina.events.t26512.cljs$lang$ctorStr = "domina.events/t26512";
domina.events.t26512.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26512");
});
domina.events.t26512.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26512.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26512.prototype.domina$events$Event$ = true;
domina.events.t26512.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26512.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26512.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26512.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26512.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26512.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26514){var self__ = this;
var _26514__$1 = this;return self__.meta26513;
});
domina.events.t26512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26514,meta26513__$1){var self__ = this;
var _26514__$1 = this;return (new domina.events.t26512(self__.evt,self__.f,self__.create_listener_function,meta26513__$1));
});
domina.events.__GT_t26512 = (function __GT_t26512(evt__$1,f__$1,create_listener_function__$1,meta26513){return (new domina.events.t26512(evt__$1,f__$1,create_listener_function__$1,meta26513));
});
}
return (new domina.events.t26512(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26519(s__26520){return (new cljs.core.LazySeq(null,(function (){var s__26520__$1 = s__26520;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26520__$1);if(temp__4092__auto__)
{var s__26520__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26520__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26520__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26522 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26521 = 0;while(true){
if((i__26521 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26521);cljs.core.chunk_append(b__26522,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26523 = (i__26521 + 1);
i__26521 = G__26523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26522),iter__26519(cljs.core.chunk_rest(s__26520__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26522),null);
}
} else
{var node = cljs.core.first(s__26520__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26519(cljs.core.rest(s__26520__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26532 = cljs.core.seq(domina.nodes(content));var chunk__26533 = null;var count__26534 = 0;var i__26535 = 0;while(true){
if((i__26535 < count__26534))
{var node = chunk__26533.cljs$core$IIndexed$_nth$arity$2(null,i__26535);goog.events.removeAll(node);
{
var G__26540 = seq__26532;
var G__26541 = chunk__26533;
var G__26542 = count__26534;
var G__26543 = (i__26535 + 1);
seq__26532 = G__26540;
chunk__26533 = G__26541;
count__26534 = G__26542;
i__26535 = G__26543;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26532);if(temp__4092__auto__)
{var seq__26532__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26532__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26532__$1);{
var G__26544 = cljs.core.chunk_rest(seq__26532__$1);
var G__26545 = c__4148__auto__;
var G__26546 = cljs.core.count(c__4148__auto__);
var G__26547 = 0;
seq__26532 = G__26544;
chunk__26533 = G__26545;
count__26534 = G__26546;
i__26535 = G__26547;
continue;
}
} else
{var node = cljs.core.first(seq__26532__$1);goog.events.removeAll(node);
{
var G__26548 = cljs.core.next(seq__26532__$1);
var G__26549 = null;
var G__26550 = 0;
var G__26551 = 0;
seq__26532 = G__26548;
chunk__26533 = G__26549;
count__26534 = G__26550;
i__26535 = G__26551;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26536 = cljs.core.seq(domina.nodes(content));var chunk__26537 = null;var count__26538 = 0;var i__26539 = 0;while(true){
if((i__26539 < count__26538))
{var node = chunk__26537.cljs$core$IIndexed$_nth$arity$2(null,i__26539);goog.events.removeAll(node,type__$1);
{
var G__26552 = seq__26536;
var G__26553 = chunk__26537;
var G__26554 = count__26538;
var G__26555 = (i__26539 + 1);
seq__26536 = G__26552;
chunk__26537 = G__26553;
count__26538 = G__26554;
i__26539 = G__26555;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26536);if(temp__4092__auto__)
{var seq__26536__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26536__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26536__$1);{
var G__26556 = cljs.core.chunk_rest(seq__26536__$1);
var G__26557 = c__4148__auto__;
var G__26558 = cljs.core.count(c__4148__auto__);
var G__26559 = 0;
seq__26536 = G__26556;
chunk__26537 = G__26557;
count__26538 = G__26558;
i__26539 = G__26559;
continue;
}
} else
{var node = cljs.core.first(seq__26536__$1);goog.events.removeAll(node,type__$1);
{
var G__26560 = cljs.core.next(seq__26536__$1);
var G__26561 = null;
var G__26562 = 0;
var G__26563 = 0;
seq__26536 = G__26560;
chunk__26537 = G__26561;
count__26538 = G__26562;
i__26539 = G__26563;
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
var G__26564 = parent;
var G__26565 = cljs.core.cons(parent,so_far);
n = G__26564;
so_far = G__26565;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26574_26582 = cljs.core.seq(ancestors);var chunk__26575_26583 = null;var count__26576_26584 = 0;var i__26577_26585 = 0;while(true){
if((i__26577_26585 < count__26576_26584))
{var n_26586 = chunk__26575_26583.cljs$core$IIndexed$_nth$arity$2(null,i__26577_26585);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26586;
goog.events.fireListeners(n_26586,evt.type,true,evt);
}
{
var G__26587 = seq__26574_26582;
var G__26588 = chunk__26575_26583;
var G__26589 = count__26576_26584;
var G__26590 = (i__26577_26585 + 1);
seq__26574_26582 = G__26587;
chunk__26575_26583 = G__26588;
count__26576_26584 = G__26589;
i__26577_26585 = G__26590;
continue;
}
} else
{var temp__4092__auto___26591 = cljs.core.seq(seq__26574_26582);if(temp__4092__auto___26591)
{var seq__26574_26592__$1 = temp__4092__auto___26591;if(cljs.core.chunked_seq_QMARK_(seq__26574_26592__$1))
{var c__4148__auto___26593 = cljs.core.chunk_first(seq__26574_26592__$1);{
var G__26594 = cljs.core.chunk_rest(seq__26574_26592__$1);
var G__26595 = c__4148__auto___26593;
var G__26596 = cljs.core.count(c__4148__auto___26593);
var G__26597 = 0;
seq__26574_26582 = G__26594;
chunk__26575_26583 = G__26595;
count__26576_26584 = G__26596;
i__26577_26585 = G__26597;
continue;
}
} else
{var n_26598 = cljs.core.first(seq__26574_26592__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26598;
goog.events.fireListeners(n_26598,evt.type,true,evt);
}
{
var G__26599 = cljs.core.next(seq__26574_26592__$1);
var G__26600 = null;
var G__26601 = 0;
var G__26602 = 0;
seq__26574_26582 = G__26599;
chunk__26575_26583 = G__26600;
count__26576_26584 = G__26601;
i__26577_26585 = G__26602;
continue;
}
}
} else
{}
}
break;
}
var seq__26578_26603 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26579_26604 = null;var count__26580_26605 = 0;var i__26581_26606 = 0;while(true){
if((i__26581_26606 < count__26580_26605))
{var n_26607 = chunk__26579_26604.cljs$core$IIndexed$_nth$arity$2(null,i__26581_26606);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26607;
goog.events.fireListeners(n_26607,evt.type,false,evt);
}
{
var G__26608 = seq__26578_26603;
var G__26609 = chunk__26579_26604;
var G__26610 = count__26580_26605;
var G__26611 = (i__26581_26606 + 1);
seq__26578_26603 = G__26608;
chunk__26579_26604 = G__26609;
count__26580_26605 = G__26610;
i__26581_26606 = G__26611;
continue;
}
} else
{var temp__4092__auto___26612 = cljs.core.seq(seq__26578_26603);if(temp__4092__auto___26612)
{var seq__26578_26613__$1 = temp__4092__auto___26612;if(cljs.core.chunked_seq_QMARK_(seq__26578_26613__$1))
{var c__4148__auto___26614 = cljs.core.chunk_first(seq__26578_26613__$1);{
var G__26615 = cljs.core.chunk_rest(seq__26578_26613__$1);
var G__26616 = c__4148__auto___26614;
var G__26617 = cljs.core.count(c__4148__auto___26614);
var G__26618 = 0;
seq__26578_26603 = G__26615;
chunk__26579_26604 = G__26616;
count__26580_26605 = G__26617;
i__26581_26606 = G__26618;
continue;
}
} else
{var n_26619 = cljs.core.first(seq__26578_26613__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26619;
goog.events.fireListeners(n_26619,evt.type,false,evt);
}
{
var G__26620 = cljs.core.next(seq__26578_26613__$1);
var G__26621 = null;
var G__26622 = 0;
var G__26623 = 0;
seq__26578_26603 = G__26620;
chunk__26579_26604 = G__26621;
count__26580_26605 = G__26622;
i__26581_26606 = G__26623;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26630_26636 = cljs.core.seq(evt_map);var chunk__26631_26637 = null;var count__26632_26638 = 0;var i__26633_26639 = 0;while(true){
if((i__26633_26639 < count__26632_26638))
{var vec__26634_26640 = chunk__26631_26637.cljs$core$IIndexed$_nth$arity$2(null,i__26633_26639);var k_26641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634_26640,0,null);var v_26642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26634_26640,1,null);(evt[k_26641] = v_26642);
{
var G__26643 = seq__26630_26636;
var G__26644 = chunk__26631_26637;
var G__26645 = count__26632_26638;
var G__26646 = (i__26633_26639 + 1);
seq__26630_26636 = G__26643;
chunk__26631_26637 = G__26644;
count__26632_26638 = G__26645;
i__26633_26639 = G__26646;
continue;
}
} else
{var temp__4092__auto___26647 = cljs.core.seq(seq__26630_26636);if(temp__4092__auto___26647)
{var seq__26630_26648__$1 = temp__4092__auto___26647;if(cljs.core.chunked_seq_QMARK_(seq__26630_26648__$1))
{var c__4148__auto___26649 = cljs.core.chunk_first(seq__26630_26648__$1);{
var G__26650 = cljs.core.chunk_rest(seq__26630_26648__$1);
var G__26651 = c__4148__auto___26649;
var G__26652 = cljs.core.count(c__4148__auto___26649);
var G__26653 = 0;
seq__26630_26636 = G__26650;
chunk__26631_26637 = G__26651;
count__26632_26638 = G__26652;
i__26633_26639 = G__26653;
continue;
}
} else
{var vec__26635_26654 = cljs.core.first(seq__26630_26648__$1);var k_26655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_26654,0,null);var v_26656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_26654,1,null);(evt[k_26655] = v_26656);
{
var G__26657 = cljs.core.next(seq__26630_26648__$1);
var G__26658 = null;
var G__26659 = 0;
var G__26660 = 0;
seq__26630_26636 = G__26657;
chunk__26631_26637 = G__26658;
count__26632_26638 = G__26659;
i__26633_26639 = G__26660;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26661_SHARP_){return goog.events.getListeners(p1__26661_SHARP_,type__$1,false);
}),domina.nodes(content));
});
