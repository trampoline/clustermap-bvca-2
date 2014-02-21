// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27505 = {};return obj27505;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27509 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27509 = (function (evt,f,create_listener_function,meta27510){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27510 = meta27510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27509.cljs$lang$type = true;
domina.events.t27509.cljs$lang$ctorStr = "domina.events/t27509";
domina.events.t27509.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27509");
});
domina.events.t27509.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27509.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27509.prototype.domina$events$Event$ = true;
domina.events.t27509.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27509.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27509.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27509.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27509.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27509.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27511){var self__ = this;
var _27511__$1 = this;return self__.meta27510;
});
domina.events.t27509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27511,meta27510__$1){var self__ = this;
var _27511__$1 = this;return (new domina.events.t27509(self__.evt,self__.f,self__.create_listener_function,meta27510__$1));
});
domina.events.__GT_t27509 = (function __GT_t27509(evt__$1,f__$1,create_listener_function__$1,meta27510){return (new domina.events.t27509(evt__$1,f__$1,create_listener_function__$1,meta27510));
});
}
return (new domina.events.t27509(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27509 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27509 = (function (evt,f,create_listener_function,meta27510){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27510 = meta27510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27509.cljs$lang$type = true;
domina.events.t27509.cljs$lang$ctorStr = "domina.events/t27509";
domina.events.t27509.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27509");
});
domina.events.t27509.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27509.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27509.prototype.domina$events$Event$ = true;
domina.events.t27509.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27509.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27509.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27509.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27509.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27509.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27511){var self__ = this;
var _27511__$1 = this;return self__.meta27510;
});
domina.events.t27509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27511,meta27510__$1){var self__ = this;
var _27511__$1 = this;return (new domina.events.t27509(self__.evt,self__.f,self__.create_listener_function,meta27510__$1));
});
domina.events.__GT_t27509 = (function __GT_t27509(evt__$1,f__$1,create_listener_function__$1,meta27510){return (new domina.events.t27509(evt__$1,f__$1,create_listener_function__$1,meta27510));
});
}
return (new domina.events.t27509(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27516(s__27517){return (new cljs.core.LazySeq(null,(function (){var s__27517__$1 = s__27517;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27517__$1);if(temp__4092__auto__)
{var s__27517__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27517__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27517__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27519 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27518 = 0;while(true){
if((i__27518 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27518);cljs.core.chunk_append(b__27519,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27520 = (i__27518 + 1);
i__27518 = G__27520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27519),iter__27516(cljs.core.chunk_rest(s__27517__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27519),null);
}
} else
{var node = cljs.core.first(s__27517__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27516(cljs.core.rest(s__27517__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27529 = cljs.core.seq(domina.nodes(content));var chunk__27530 = null;var count__27531 = 0;var i__27532 = 0;while(true){
if((i__27532 < count__27531))
{var node = chunk__27530.cljs$core$IIndexed$_nth$arity$2(null,i__27532);goog.events.removeAll(node);
{
var G__27537 = seq__27529;
var G__27538 = chunk__27530;
var G__27539 = count__27531;
var G__27540 = (i__27532 + 1);
seq__27529 = G__27537;
chunk__27530 = G__27538;
count__27531 = G__27539;
i__27532 = G__27540;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27529);if(temp__4092__auto__)
{var seq__27529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27529__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27529__$1);{
var G__27541 = cljs.core.chunk_rest(seq__27529__$1);
var G__27542 = c__4148__auto__;
var G__27543 = cljs.core.count(c__4148__auto__);
var G__27544 = 0;
seq__27529 = G__27541;
chunk__27530 = G__27542;
count__27531 = G__27543;
i__27532 = G__27544;
continue;
}
} else
{var node = cljs.core.first(seq__27529__$1);goog.events.removeAll(node);
{
var G__27545 = cljs.core.next(seq__27529__$1);
var G__27546 = null;
var G__27547 = 0;
var G__27548 = 0;
seq__27529 = G__27545;
chunk__27530 = G__27546;
count__27531 = G__27547;
i__27532 = G__27548;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27533 = cljs.core.seq(domina.nodes(content));var chunk__27534 = null;var count__27535 = 0;var i__27536 = 0;while(true){
if((i__27536 < count__27535))
{var node = chunk__27534.cljs$core$IIndexed$_nth$arity$2(null,i__27536);goog.events.removeAll(node,type__$1);
{
var G__27549 = seq__27533;
var G__27550 = chunk__27534;
var G__27551 = count__27535;
var G__27552 = (i__27536 + 1);
seq__27533 = G__27549;
chunk__27534 = G__27550;
count__27535 = G__27551;
i__27536 = G__27552;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27533);if(temp__4092__auto__)
{var seq__27533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27533__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27533__$1);{
var G__27553 = cljs.core.chunk_rest(seq__27533__$1);
var G__27554 = c__4148__auto__;
var G__27555 = cljs.core.count(c__4148__auto__);
var G__27556 = 0;
seq__27533 = G__27553;
chunk__27534 = G__27554;
count__27535 = G__27555;
i__27536 = G__27556;
continue;
}
} else
{var node = cljs.core.first(seq__27533__$1);goog.events.removeAll(node,type__$1);
{
var G__27557 = cljs.core.next(seq__27533__$1);
var G__27558 = null;
var G__27559 = 0;
var G__27560 = 0;
seq__27533 = G__27557;
chunk__27534 = G__27558;
count__27535 = G__27559;
i__27536 = G__27560;
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
var G__27561 = parent;
var G__27562 = cljs.core.cons(parent,so_far);
n = G__27561;
so_far = G__27562;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27571_27579 = cljs.core.seq(ancestors);var chunk__27572_27580 = null;var count__27573_27581 = 0;var i__27574_27582 = 0;while(true){
if((i__27574_27582 < count__27573_27581))
{var n_27583 = chunk__27572_27580.cljs$core$IIndexed$_nth$arity$2(null,i__27574_27582);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27583;
goog.events.fireListeners(n_27583,evt.type,true,evt);
}
{
var G__27584 = seq__27571_27579;
var G__27585 = chunk__27572_27580;
var G__27586 = count__27573_27581;
var G__27587 = (i__27574_27582 + 1);
seq__27571_27579 = G__27584;
chunk__27572_27580 = G__27585;
count__27573_27581 = G__27586;
i__27574_27582 = G__27587;
continue;
}
} else
{var temp__4092__auto___27588 = cljs.core.seq(seq__27571_27579);if(temp__4092__auto___27588)
{var seq__27571_27589__$1 = temp__4092__auto___27588;if(cljs.core.chunked_seq_QMARK_(seq__27571_27589__$1))
{var c__4148__auto___27590 = cljs.core.chunk_first(seq__27571_27589__$1);{
var G__27591 = cljs.core.chunk_rest(seq__27571_27589__$1);
var G__27592 = c__4148__auto___27590;
var G__27593 = cljs.core.count(c__4148__auto___27590);
var G__27594 = 0;
seq__27571_27579 = G__27591;
chunk__27572_27580 = G__27592;
count__27573_27581 = G__27593;
i__27574_27582 = G__27594;
continue;
}
} else
{var n_27595 = cljs.core.first(seq__27571_27589__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27595;
goog.events.fireListeners(n_27595,evt.type,true,evt);
}
{
var G__27596 = cljs.core.next(seq__27571_27589__$1);
var G__27597 = null;
var G__27598 = 0;
var G__27599 = 0;
seq__27571_27579 = G__27596;
chunk__27572_27580 = G__27597;
count__27573_27581 = G__27598;
i__27574_27582 = G__27599;
continue;
}
}
} else
{}
}
break;
}
var seq__27575_27600 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27576_27601 = null;var count__27577_27602 = 0;var i__27578_27603 = 0;while(true){
if((i__27578_27603 < count__27577_27602))
{var n_27604 = chunk__27576_27601.cljs$core$IIndexed$_nth$arity$2(null,i__27578_27603);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27604;
goog.events.fireListeners(n_27604,evt.type,false,evt);
}
{
var G__27605 = seq__27575_27600;
var G__27606 = chunk__27576_27601;
var G__27607 = count__27577_27602;
var G__27608 = (i__27578_27603 + 1);
seq__27575_27600 = G__27605;
chunk__27576_27601 = G__27606;
count__27577_27602 = G__27607;
i__27578_27603 = G__27608;
continue;
}
} else
{var temp__4092__auto___27609 = cljs.core.seq(seq__27575_27600);if(temp__4092__auto___27609)
{var seq__27575_27610__$1 = temp__4092__auto___27609;if(cljs.core.chunked_seq_QMARK_(seq__27575_27610__$1))
{var c__4148__auto___27611 = cljs.core.chunk_first(seq__27575_27610__$1);{
var G__27612 = cljs.core.chunk_rest(seq__27575_27610__$1);
var G__27613 = c__4148__auto___27611;
var G__27614 = cljs.core.count(c__4148__auto___27611);
var G__27615 = 0;
seq__27575_27600 = G__27612;
chunk__27576_27601 = G__27613;
count__27577_27602 = G__27614;
i__27578_27603 = G__27615;
continue;
}
} else
{var n_27616 = cljs.core.first(seq__27575_27610__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27616;
goog.events.fireListeners(n_27616,evt.type,false,evt);
}
{
var G__27617 = cljs.core.next(seq__27575_27610__$1);
var G__27618 = null;
var G__27619 = 0;
var G__27620 = 0;
seq__27575_27600 = G__27617;
chunk__27576_27601 = G__27618;
count__27577_27602 = G__27619;
i__27578_27603 = G__27620;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27627_27633 = cljs.core.seq(evt_map);var chunk__27628_27634 = null;var count__27629_27635 = 0;var i__27630_27636 = 0;while(true){
if((i__27630_27636 < count__27629_27635))
{var vec__27631_27637 = chunk__27628_27634.cljs$core$IIndexed$_nth$arity$2(null,i__27630_27636);var k_27638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27631_27637,0,null);var v_27639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27631_27637,1,null);(evt[k_27638] = v_27639);
{
var G__27640 = seq__27627_27633;
var G__27641 = chunk__27628_27634;
var G__27642 = count__27629_27635;
var G__27643 = (i__27630_27636 + 1);
seq__27627_27633 = G__27640;
chunk__27628_27634 = G__27641;
count__27629_27635 = G__27642;
i__27630_27636 = G__27643;
continue;
}
} else
{var temp__4092__auto___27644 = cljs.core.seq(seq__27627_27633);if(temp__4092__auto___27644)
{var seq__27627_27645__$1 = temp__4092__auto___27644;if(cljs.core.chunked_seq_QMARK_(seq__27627_27645__$1))
{var c__4148__auto___27646 = cljs.core.chunk_first(seq__27627_27645__$1);{
var G__27647 = cljs.core.chunk_rest(seq__27627_27645__$1);
var G__27648 = c__4148__auto___27646;
var G__27649 = cljs.core.count(c__4148__auto___27646);
var G__27650 = 0;
seq__27627_27633 = G__27647;
chunk__27628_27634 = G__27648;
count__27629_27635 = G__27649;
i__27630_27636 = G__27650;
continue;
}
} else
{var vec__27632_27651 = cljs.core.first(seq__27627_27645__$1);var k_27652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27632_27651,0,null);var v_27653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27632_27651,1,null);(evt[k_27652] = v_27653);
{
var G__27654 = cljs.core.next(seq__27627_27645__$1);
var G__27655 = null;
var G__27656 = 0;
var G__27657 = 0;
seq__27627_27633 = G__27654;
chunk__27628_27634 = G__27655;
count__27629_27635 = G__27656;
i__27630_27636 = G__27657;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27658_SHARP_){return goog.events.getListeners(p1__27658_SHARP_,type__$1,false);
}),domina.nodes(content));
});
