// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26548 = {};return obj26548;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26552 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26552 = (function (evt,f,create_listener_function,meta26553){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26553 = meta26553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26552.cljs$lang$type = true;
domina.events.t26552.cljs$lang$ctorStr = "domina.events/t26552";
domina.events.t26552.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26552");
});
domina.events.t26552.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26552.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26552.prototype.domina$events$Event$ = true;
domina.events.t26552.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26552.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26552.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26552.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26552.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26552.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26554){var self__ = this;
var _26554__$1 = this;return self__.meta26553;
});
domina.events.t26552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26554,meta26553__$1){var self__ = this;
var _26554__$1 = this;return (new domina.events.t26552(self__.evt,self__.f,self__.create_listener_function,meta26553__$1));
});
domina.events.__GT_t26552 = (function __GT_t26552(evt__$1,f__$1,create_listener_function__$1,meta26553){return (new domina.events.t26552(evt__$1,f__$1,create_listener_function__$1,meta26553));
});
}
return (new domina.events.t26552(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26552 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26552 = (function (evt,f,create_listener_function,meta26553){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26553 = meta26553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26552.cljs$lang$type = true;
domina.events.t26552.cljs$lang$ctorStr = "domina.events/t26552";
domina.events.t26552.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26552");
});
domina.events.t26552.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26552.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26552.prototype.domina$events$Event$ = true;
domina.events.t26552.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26552.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26552.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26552.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26552.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26552.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26554){var self__ = this;
var _26554__$1 = this;return self__.meta26553;
});
domina.events.t26552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26554,meta26553__$1){var self__ = this;
var _26554__$1 = this;return (new domina.events.t26552(self__.evt,self__.f,self__.create_listener_function,meta26553__$1));
});
domina.events.__GT_t26552 = (function __GT_t26552(evt__$1,f__$1,create_listener_function__$1,meta26553){return (new domina.events.t26552(evt__$1,f__$1,create_listener_function__$1,meta26553));
});
}
return (new domina.events.t26552(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26559(s__26560){return (new cljs.core.LazySeq(null,(function (){var s__26560__$1 = s__26560;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26560__$1);if(temp__4092__auto__)
{var s__26560__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26560__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26560__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26562 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26561 = 0;while(true){
if((i__26561 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26561);cljs.core.chunk_append(b__26562,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26563 = (i__26561 + 1);
i__26561 = G__26563;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26562),iter__26559(cljs.core.chunk_rest(s__26560__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26562),null);
}
} else
{var node = cljs.core.first(s__26560__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26559(cljs.core.rest(s__26560__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26572 = cljs.core.seq(domina.nodes(content));var chunk__26573 = null;var count__26574 = 0;var i__26575 = 0;while(true){
if((i__26575 < count__26574))
{var node = chunk__26573.cljs$core$IIndexed$_nth$arity$2(null,i__26575);goog.events.removeAll(node);
{
var G__26580 = seq__26572;
var G__26581 = chunk__26573;
var G__26582 = count__26574;
var G__26583 = (i__26575 + 1);
seq__26572 = G__26580;
chunk__26573 = G__26581;
count__26574 = G__26582;
i__26575 = G__26583;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26572);if(temp__4092__auto__)
{var seq__26572__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26572__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26572__$1);{
var G__26584 = cljs.core.chunk_rest(seq__26572__$1);
var G__26585 = c__4148__auto__;
var G__26586 = cljs.core.count(c__4148__auto__);
var G__26587 = 0;
seq__26572 = G__26584;
chunk__26573 = G__26585;
count__26574 = G__26586;
i__26575 = G__26587;
continue;
}
} else
{var node = cljs.core.first(seq__26572__$1);goog.events.removeAll(node);
{
var G__26588 = cljs.core.next(seq__26572__$1);
var G__26589 = null;
var G__26590 = 0;
var G__26591 = 0;
seq__26572 = G__26588;
chunk__26573 = G__26589;
count__26574 = G__26590;
i__26575 = G__26591;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26576 = cljs.core.seq(domina.nodes(content));var chunk__26577 = null;var count__26578 = 0;var i__26579 = 0;while(true){
if((i__26579 < count__26578))
{var node = chunk__26577.cljs$core$IIndexed$_nth$arity$2(null,i__26579);goog.events.removeAll(node,type__$1);
{
var G__26592 = seq__26576;
var G__26593 = chunk__26577;
var G__26594 = count__26578;
var G__26595 = (i__26579 + 1);
seq__26576 = G__26592;
chunk__26577 = G__26593;
count__26578 = G__26594;
i__26579 = G__26595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26576);if(temp__4092__auto__)
{var seq__26576__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26576__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26576__$1);{
var G__26596 = cljs.core.chunk_rest(seq__26576__$1);
var G__26597 = c__4148__auto__;
var G__26598 = cljs.core.count(c__4148__auto__);
var G__26599 = 0;
seq__26576 = G__26596;
chunk__26577 = G__26597;
count__26578 = G__26598;
i__26579 = G__26599;
continue;
}
} else
{var node = cljs.core.first(seq__26576__$1);goog.events.removeAll(node,type__$1);
{
var G__26600 = cljs.core.next(seq__26576__$1);
var G__26601 = null;
var G__26602 = 0;
var G__26603 = 0;
seq__26576 = G__26600;
chunk__26577 = G__26601;
count__26578 = G__26602;
i__26579 = G__26603;
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
var G__26604 = parent;
var G__26605 = cljs.core.cons(parent,so_far);
n = G__26604;
so_far = G__26605;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26614_26622 = cljs.core.seq(ancestors);var chunk__26615_26623 = null;var count__26616_26624 = 0;var i__26617_26625 = 0;while(true){
if((i__26617_26625 < count__26616_26624))
{var n_26626 = chunk__26615_26623.cljs$core$IIndexed$_nth$arity$2(null,i__26617_26625);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26626;
goog.events.fireListeners(n_26626,evt.type,true,evt);
}
{
var G__26627 = seq__26614_26622;
var G__26628 = chunk__26615_26623;
var G__26629 = count__26616_26624;
var G__26630 = (i__26617_26625 + 1);
seq__26614_26622 = G__26627;
chunk__26615_26623 = G__26628;
count__26616_26624 = G__26629;
i__26617_26625 = G__26630;
continue;
}
} else
{var temp__4092__auto___26631 = cljs.core.seq(seq__26614_26622);if(temp__4092__auto___26631)
{var seq__26614_26632__$1 = temp__4092__auto___26631;if(cljs.core.chunked_seq_QMARK_(seq__26614_26632__$1))
{var c__4148__auto___26633 = cljs.core.chunk_first(seq__26614_26632__$1);{
var G__26634 = cljs.core.chunk_rest(seq__26614_26632__$1);
var G__26635 = c__4148__auto___26633;
var G__26636 = cljs.core.count(c__4148__auto___26633);
var G__26637 = 0;
seq__26614_26622 = G__26634;
chunk__26615_26623 = G__26635;
count__26616_26624 = G__26636;
i__26617_26625 = G__26637;
continue;
}
} else
{var n_26638 = cljs.core.first(seq__26614_26632__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26638;
goog.events.fireListeners(n_26638,evt.type,true,evt);
}
{
var G__26639 = cljs.core.next(seq__26614_26632__$1);
var G__26640 = null;
var G__26641 = 0;
var G__26642 = 0;
seq__26614_26622 = G__26639;
chunk__26615_26623 = G__26640;
count__26616_26624 = G__26641;
i__26617_26625 = G__26642;
continue;
}
}
} else
{}
}
break;
}
var seq__26618_26643 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26619_26644 = null;var count__26620_26645 = 0;var i__26621_26646 = 0;while(true){
if((i__26621_26646 < count__26620_26645))
{var n_26647 = chunk__26619_26644.cljs$core$IIndexed$_nth$arity$2(null,i__26621_26646);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26647;
goog.events.fireListeners(n_26647,evt.type,false,evt);
}
{
var G__26648 = seq__26618_26643;
var G__26649 = chunk__26619_26644;
var G__26650 = count__26620_26645;
var G__26651 = (i__26621_26646 + 1);
seq__26618_26643 = G__26648;
chunk__26619_26644 = G__26649;
count__26620_26645 = G__26650;
i__26621_26646 = G__26651;
continue;
}
} else
{var temp__4092__auto___26652 = cljs.core.seq(seq__26618_26643);if(temp__4092__auto___26652)
{var seq__26618_26653__$1 = temp__4092__auto___26652;if(cljs.core.chunked_seq_QMARK_(seq__26618_26653__$1))
{var c__4148__auto___26654 = cljs.core.chunk_first(seq__26618_26653__$1);{
var G__26655 = cljs.core.chunk_rest(seq__26618_26653__$1);
var G__26656 = c__4148__auto___26654;
var G__26657 = cljs.core.count(c__4148__auto___26654);
var G__26658 = 0;
seq__26618_26643 = G__26655;
chunk__26619_26644 = G__26656;
count__26620_26645 = G__26657;
i__26621_26646 = G__26658;
continue;
}
} else
{var n_26659 = cljs.core.first(seq__26618_26653__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26659;
goog.events.fireListeners(n_26659,evt.type,false,evt);
}
{
var G__26660 = cljs.core.next(seq__26618_26653__$1);
var G__26661 = null;
var G__26662 = 0;
var G__26663 = 0;
seq__26618_26643 = G__26660;
chunk__26619_26644 = G__26661;
count__26620_26645 = G__26662;
i__26621_26646 = G__26663;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26670_26676 = cljs.core.seq(evt_map);var chunk__26671_26677 = null;var count__26672_26678 = 0;var i__26673_26679 = 0;while(true){
if((i__26673_26679 < count__26672_26678))
{var vec__26674_26680 = chunk__26671_26677.cljs$core$IIndexed$_nth$arity$2(null,i__26673_26679);var k_26681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26674_26680,0,null);var v_26682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26674_26680,1,null);(evt[k_26681] = v_26682);
{
var G__26683 = seq__26670_26676;
var G__26684 = chunk__26671_26677;
var G__26685 = count__26672_26678;
var G__26686 = (i__26673_26679 + 1);
seq__26670_26676 = G__26683;
chunk__26671_26677 = G__26684;
count__26672_26678 = G__26685;
i__26673_26679 = G__26686;
continue;
}
} else
{var temp__4092__auto___26687 = cljs.core.seq(seq__26670_26676);if(temp__4092__auto___26687)
{var seq__26670_26688__$1 = temp__4092__auto___26687;if(cljs.core.chunked_seq_QMARK_(seq__26670_26688__$1))
{var c__4148__auto___26689 = cljs.core.chunk_first(seq__26670_26688__$1);{
var G__26690 = cljs.core.chunk_rest(seq__26670_26688__$1);
var G__26691 = c__4148__auto___26689;
var G__26692 = cljs.core.count(c__4148__auto___26689);
var G__26693 = 0;
seq__26670_26676 = G__26690;
chunk__26671_26677 = G__26691;
count__26672_26678 = G__26692;
i__26673_26679 = G__26693;
continue;
}
} else
{var vec__26675_26694 = cljs.core.first(seq__26670_26688__$1);var k_26695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26694,0,null);var v_26696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26694,1,null);(evt[k_26695] = v_26696);
{
var G__26697 = cljs.core.next(seq__26670_26688__$1);
var G__26698 = null;
var G__26699 = 0;
var G__26700 = 0;
seq__26670_26676 = G__26697;
chunk__26671_26677 = G__26698;
count__26672_26678 = G__26699;
i__26673_26679 = G__26700;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26701_SHARP_){return goog.events.getListeners(p1__26701_SHARP_,type__$1,false);
}),domina.nodes(content));
});
