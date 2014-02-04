// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26550 = {};return obj26550;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26554 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26554 = (function (evt,f,create_listener_function,meta26555){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26555 = meta26555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26554.cljs$lang$type = true;
domina.events.t26554.cljs$lang$ctorStr = "domina.events/t26554";
domina.events.t26554.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26554");
});
domina.events.t26554.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26554.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26554.prototype.domina$events$Event$ = true;
domina.events.t26554.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26554.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26554.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26554.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26554.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26554.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26556){var self__ = this;
var _26556__$1 = this;return self__.meta26555;
});
domina.events.t26554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26556,meta26555__$1){var self__ = this;
var _26556__$1 = this;return (new domina.events.t26554(self__.evt,self__.f,self__.create_listener_function,meta26555__$1));
});
domina.events.__GT_t26554 = (function __GT_t26554(evt__$1,f__$1,create_listener_function__$1,meta26555){return (new domina.events.t26554(evt__$1,f__$1,create_listener_function__$1,meta26555));
});
}
return (new domina.events.t26554(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26554 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26554 = (function (evt,f,create_listener_function,meta26555){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26555 = meta26555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26554.cljs$lang$type = true;
domina.events.t26554.cljs$lang$ctorStr = "domina.events/t26554";
domina.events.t26554.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26554");
});
domina.events.t26554.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26554.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26554.prototype.domina$events$Event$ = true;
domina.events.t26554.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26554.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26554.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26554.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26554.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26554.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26556){var self__ = this;
var _26556__$1 = this;return self__.meta26555;
});
domina.events.t26554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26556,meta26555__$1){var self__ = this;
var _26556__$1 = this;return (new domina.events.t26554(self__.evt,self__.f,self__.create_listener_function,meta26555__$1));
});
domina.events.__GT_t26554 = (function __GT_t26554(evt__$1,f__$1,create_listener_function__$1,meta26555){return (new domina.events.t26554(evt__$1,f__$1,create_listener_function__$1,meta26555));
});
}
return (new domina.events.t26554(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26561(s__26562){return (new cljs.core.LazySeq(null,(function (){var s__26562__$1 = s__26562;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26562__$1);if(temp__4092__auto__)
{var s__26562__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26562__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26562__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26564 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26563 = 0;while(true){
if((i__26563 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26563);cljs.core.chunk_append(b__26564,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26565 = (i__26563 + 1);
i__26563 = G__26565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26564),iter__26561(cljs.core.chunk_rest(s__26562__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26564),null);
}
} else
{var node = cljs.core.first(s__26562__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26561(cljs.core.rest(s__26562__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26574 = cljs.core.seq(domina.nodes(content));var chunk__26575 = null;var count__26576 = 0;var i__26577 = 0;while(true){
if((i__26577 < count__26576))
{var node = chunk__26575.cljs$core$IIndexed$_nth$arity$2(null,i__26577);goog.events.removeAll(node);
{
var G__26582 = seq__26574;
var G__26583 = chunk__26575;
var G__26584 = count__26576;
var G__26585 = (i__26577 + 1);
seq__26574 = G__26582;
chunk__26575 = G__26583;
count__26576 = G__26584;
i__26577 = G__26585;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26574);if(temp__4092__auto__)
{var seq__26574__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26574__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26574__$1);{
var G__26586 = cljs.core.chunk_rest(seq__26574__$1);
var G__26587 = c__4148__auto__;
var G__26588 = cljs.core.count(c__4148__auto__);
var G__26589 = 0;
seq__26574 = G__26586;
chunk__26575 = G__26587;
count__26576 = G__26588;
i__26577 = G__26589;
continue;
}
} else
{var node = cljs.core.first(seq__26574__$1);goog.events.removeAll(node);
{
var G__26590 = cljs.core.next(seq__26574__$1);
var G__26591 = null;
var G__26592 = 0;
var G__26593 = 0;
seq__26574 = G__26590;
chunk__26575 = G__26591;
count__26576 = G__26592;
i__26577 = G__26593;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26578 = cljs.core.seq(domina.nodes(content));var chunk__26579 = null;var count__26580 = 0;var i__26581 = 0;while(true){
if((i__26581 < count__26580))
{var node = chunk__26579.cljs$core$IIndexed$_nth$arity$2(null,i__26581);goog.events.removeAll(node,type__$1);
{
var G__26594 = seq__26578;
var G__26595 = chunk__26579;
var G__26596 = count__26580;
var G__26597 = (i__26581 + 1);
seq__26578 = G__26594;
chunk__26579 = G__26595;
count__26580 = G__26596;
i__26581 = G__26597;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26578);if(temp__4092__auto__)
{var seq__26578__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26578__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26578__$1);{
var G__26598 = cljs.core.chunk_rest(seq__26578__$1);
var G__26599 = c__4148__auto__;
var G__26600 = cljs.core.count(c__4148__auto__);
var G__26601 = 0;
seq__26578 = G__26598;
chunk__26579 = G__26599;
count__26580 = G__26600;
i__26581 = G__26601;
continue;
}
} else
{var node = cljs.core.first(seq__26578__$1);goog.events.removeAll(node,type__$1);
{
var G__26602 = cljs.core.next(seq__26578__$1);
var G__26603 = null;
var G__26604 = 0;
var G__26605 = 0;
seq__26578 = G__26602;
chunk__26579 = G__26603;
count__26580 = G__26604;
i__26581 = G__26605;
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
var G__26606 = parent;
var G__26607 = cljs.core.cons(parent,so_far);
n = G__26606;
so_far = G__26607;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26616_26624 = cljs.core.seq(ancestors);var chunk__26617_26625 = null;var count__26618_26626 = 0;var i__26619_26627 = 0;while(true){
if((i__26619_26627 < count__26618_26626))
{var n_26628 = chunk__26617_26625.cljs$core$IIndexed$_nth$arity$2(null,i__26619_26627);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26628;
goog.events.fireListeners(n_26628,evt.type,true,evt);
}
{
var G__26629 = seq__26616_26624;
var G__26630 = chunk__26617_26625;
var G__26631 = count__26618_26626;
var G__26632 = (i__26619_26627 + 1);
seq__26616_26624 = G__26629;
chunk__26617_26625 = G__26630;
count__26618_26626 = G__26631;
i__26619_26627 = G__26632;
continue;
}
} else
{var temp__4092__auto___26633 = cljs.core.seq(seq__26616_26624);if(temp__4092__auto___26633)
{var seq__26616_26634__$1 = temp__4092__auto___26633;if(cljs.core.chunked_seq_QMARK_(seq__26616_26634__$1))
{var c__4148__auto___26635 = cljs.core.chunk_first(seq__26616_26634__$1);{
var G__26636 = cljs.core.chunk_rest(seq__26616_26634__$1);
var G__26637 = c__4148__auto___26635;
var G__26638 = cljs.core.count(c__4148__auto___26635);
var G__26639 = 0;
seq__26616_26624 = G__26636;
chunk__26617_26625 = G__26637;
count__26618_26626 = G__26638;
i__26619_26627 = G__26639;
continue;
}
} else
{var n_26640 = cljs.core.first(seq__26616_26634__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26640;
goog.events.fireListeners(n_26640,evt.type,true,evt);
}
{
var G__26641 = cljs.core.next(seq__26616_26634__$1);
var G__26642 = null;
var G__26643 = 0;
var G__26644 = 0;
seq__26616_26624 = G__26641;
chunk__26617_26625 = G__26642;
count__26618_26626 = G__26643;
i__26619_26627 = G__26644;
continue;
}
}
} else
{}
}
break;
}
var seq__26620_26645 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26621_26646 = null;var count__26622_26647 = 0;var i__26623_26648 = 0;while(true){
if((i__26623_26648 < count__26622_26647))
{var n_26649 = chunk__26621_26646.cljs$core$IIndexed$_nth$arity$2(null,i__26623_26648);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26649;
goog.events.fireListeners(n_26649,evt.type,false,evt);
}
{
var G__26650 = seq__26620_26645;
var G__26651 = chunk__26621_26646;
var G__26652 = count__26622_26647;
var G__26653 = (i__26623_26648 + 1);
seq__26620_26645 = G__26650;
chunk__26621_26646 = G__26651;
count__26622_26647 = G__26652;
i__26623_26648 = G__26653;
continue;
}
} else
{var temp__4092__auto___26654 = cljs.core.seq(seq__26620_26645);if(temp__4092__auto___26654)
{var seq__26620_26655__$1 = temp__4092__auto___26654;if(cljs.core.chunked_seq_QMARK_(seq__26620_26655__$1))
{var c__4148__auto___26656 = cljs.core.chunk_first(seq__26620_26655__$1);{
var G__26657 = cljs.core.chunk_rest(seq__26620_26655__$1);
var G__26658 = c__4148__auto___26656;
var G__26659 = cljs.core.count(c__4148__auto___26656);
var G__26660 = 0;
seq__26620_26645 = G__26657;
chunk__26621_26646 = G__26658;
count__26622_26647 = G__26659;
i__26623_26648 = G__26660;
continue;
}
} else
{var n_26661 = cljs.core.first(seq__26620_26655__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26661;
goog.events.fireListeners(n_26661,evt.type,false,evt);
}
{
var G__26662 = cljs.core.next(seq__26620_26655__$1);
var G__26663 = null;
var G__26664 = 0;
var G__26665 = 0;
seq__26620_26645 = G__26662;
chunk__26621_26646 = G__26663;
count__26622_26647 = G__26664;
i__26623_26648 = G__26665;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26672_26678 = cljs.core.seq(evt_map);var chunk__26673_26679 = null;var count__26674_26680 = 0;var i__26675_26681 = 0;while(true){
if((i__26675_26681 < count__26674_26680))
{var vec__26676_26682 = chunk__26673_26679.cljs$core$IIndexed$_nth$arity$2(null,i__26675_26681);var k_26683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26682,0,null);var v_26684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26682,1,null);(evt[k_26683] = v_26684);
{
var G__26685 = seq__26672_26678;
var G__26686 = chunk__26673_26679;
var G__26687 = count__26674_26680;
var G__26688 = (i__26675_26681 + 1);
seq__26672_26678 = G__26685;
chunk__26673_26679 = G__26686;
count__26674_26680 = G__26687;
i__26675_26681 = G__26688;
continue;
}
} else
{var temp__4092__auto___26689 = cljs.core.seq(seq__26672_26678);if(temp__4092__auto___26689)
{var seq__26672_26690__$1 = temp__4092__auto___26689;if(cljs.core.chunked_seq_QMARK_(seq__26672_26690__$1))
{var c__4148__auto___26691 = cljs.core.chunk_first(seq__26672_26690__$1);{
var G__26692 = cljs.core.chunk_rest(seq__26672_26690__$1);
var G__26693 = c__4148__auto___26691;
var G__26694 = cljs.core.count(c__4148__auto___26691);
var G__26695 = 0;
seq__26672_26678 = G__26692;
chunk__26673_26679 = G__26693;
count__26674_26680 = G__26694;
i__26675_26681 = G__26695;
continue;
}
} else
{var vec__26677_26696 = cljs.core.first(seq__26672_26690__$1);var k_26697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26677_26696,0,null);var v_26698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26677_26696,1,null);(evt[k_26697] = v_26698);
{
var G__26699 = cljs.core.next(seq__26672_26690__$1);
var G__26700 = null;
var G__26701 = 0;
var G__26702 = 0;
seq__26672_26678 = G__26699;
chunk__26673_26679 = G__26700;
count__26674_26680 = G__26701;
i__26675_26681 = G__26702;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26703_SHARP_){return goog.events.getListeners(p1__26703_SHARP_,type__$1,false);
}),domina.nodes(content));
});
