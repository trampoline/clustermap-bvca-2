// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26333 = {};return obj26333;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26337 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26337 = (function (evt,f,create_listener_function,meta26338){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26338 = meta26338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26337.cljs$lang$type = true;
domina.events.t26337.cljs$lang$ctorStr = "domina.events/t26337";
domina.events.t26337.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26337");
});
domina.events.t26337.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26337.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26337.prototype.domina$events$Event$ = true;
domina.events.t26337.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26337.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26337.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26337.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26337.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26337.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26339){var self__ = this;
var _26339__$1 = this;return self__.meta26338;
});
domina.events.t26337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26339,meta26338__$1){var self__ = this;
var _26339__$1 = this;return (new domina.events.t26337(self__.evt,self__.f,self__.create_listener_function,meta26338__$1));
});
domina.events.__GT_t26337 = (function __GT_t26337(evt__$1,f__$1,create_listener_function__$1,meta26338){return (new domina.events.t26337(evt__$1,f__$1,create_listener_function__$1,meta26338));
});
}
return (new domina.events.t26337(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26337 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26337 = (function (evt,f,create_listener_function,meta26338){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26338 = meta26338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26337.cljs$lang$type = true;
domina.events.t26337.cljs$lang$ctorStr = "domina.events/t26337";
domina.events.t26337.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26337");
});
domina.events.t26337.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26337.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26337.prototype.domina$events$Event$ = true;
domina.events.t26337.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26337.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26337.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26337.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26337.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26337.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26339){var self__ = this;
var _26339__$1 = this;return self__.meta26338;
});
domina.events.t26337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26339,meta26338__$1){var self__ = this;
var _26339__$1 = this;return (new domina.events.t26337(self__.evt,self__.f,self__.create_listener_function,meta26338__$1));
});
domina.events.__GT_t26337 = (function __GT_t26337(evt__$1,f__$1,create_listener_function__$1,meta26338){return (new domina.events.t26337(evt__$1,f__$1,create_listener_function__$1,meta26338));
});
}
return (new domina.events.t26337(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26344(s__26345){return (new cljs.core.LazySeq(null,(function (){var s__26345__$1 = s__26345;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26345__$1);if(temp__4092__auto__)
{var s__26345__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26345__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26345__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26347 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26346 = 0;while(true){
if((i__26346 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26346);cljs.core.chunk_append(b__26347,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26348 = (i__26346 + 1);
i__26346 = G__26348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26347),iter__26344(cljs.core.chunk_rest(s__26345__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26347),null);
}
} else
{var node = cljs.core.first(s__26345__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26344(cljs.core.rest(s__26345__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26357 = cljs.core.seq(domina.nodes(content));var chunk__26358 = null;var count__26359 = 0;var i__26360 = 0;while(true){
if((i__26360 < count__26359))
{var node = chunk__26358.cljs$core$IIndexed$_nth$arity$2(null,i__26360);goog.events.removeAll(node);
{
var G__26365 = seq__26357;
var G__26366 = chunk__26358;
var G__26367 = count__26359;
var G__26368 = (i__26360 + 1);
seq__26357 = G__26365;
chunk__26358 = G__26366;
count__26359 = G__26367;
i__26360 = G__26368;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26357);if(temp__4092__auto__)
{var seq__26357__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26357__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26357__$1);{
var G__26369 = cljs.core.chunk_rest(seq__26357__$1);
var G__26370 = c__4148__auto__;
var G__26371 = cljs.core.count(c__4148__auto__);
var G__26372 = 0;
seq__26357 = G__26369;
chunk__26358 = G__26370;
count__26359 = G__26371;
i__26360 = G__26372;
continue;
}
} else
{var node = cljs.core.first(seq__26357__$1);goog.events.removeAll(node);
{
var G__26373 = cljs.core.next(seq__26357__$1);
var G__26374 = null;
var G__26375 = 0;
var G__26376 = 0;
seq__26357 = G__26373;
chunk__26358 = G__26374;
count__26359 = G__26375;
i__26360 = G__26376;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26361 = cljs.core.seq(domina.nodes(content));var chunk__26362 = null;var count__26363 = 0;var i__26364 = 0;while(true){
if((i__26364 < count__26363))
{var node = chunk__26362.cljs$core$IIndexed$_nth$arity$2(null,i__26364);goog.events.removeAll(node,type__$1);
{
var G__26377 = seq__26361;
var G__26378 = chunk__26362;
var G__26379 = count__26363;
var G__26380 = (i__26364 + 1);
seq__26361 = G__26377;
chunk__26362 = G__26378;
count__26363 = G__26379;
i__26364 = G__26380;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26361);if(temp__4092__auto__)
{var seq__26361__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26361__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26361__$1);{
var G__26381 = cljs.core.chunk_rest(seq__26361__$1);
var G__26382 = c__4148__auto__;
var G__26383 = cljs.core.count(c__4148__auto__);
var G__26384 = 0;
seq__26361 = G__26381;
chunk__26362 = G__26382;
count__26363 = G__26383;
i__26364 = G__26384;
continue;
}
} else
{var node = cljs.core.first(seq__26361__$1);goog.events.removeAll(node,type__$1);
{
var G__26385 = cljs.core.next(seq__26361__$1);
var G__26386 = null;
var G__26387 = 0;
var G__26388 = 0;
seq__26361 = G__26385;
chunk__26362 = G__26386;
count__26363 = G__26387;
i__26364 = G__26388;
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
var G__26389 = parent;
var G__26390 = cljs.core.cons(parent,so_far);
n = G__26389;
so_far = G__26390;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26399_26407 = cljs.core.seq(ancestors);var chunk__26400_26408 = null;var count__26401_26409 = 0;var i__26402_26410 = 0;while(true){
if((i__26402_26410 < count__26401_26409))
{var n_26411 = chunk__26400_26408.cljs$core$IIndexed$_nth$arity$2(null,i__26402_26410);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26411;
goog.events.fireListeners(n_26411,evt.type,true,evt);
}
{
var G__26412 = seq__26399_26407;
var G__26413 = chunk__26400_26408;
var G__26414 = count__26401_26409;
var G__26415 = (i__26402_26410 + 1);
seq__26399_26407 = G__26412;
chunk__26400_26408 = G__26413;
count__26401_26409 = G__26414;
i__26402_26410 = G__26415;
continue;
}
} else
{var temp__4092__auto___26416 = cljs.core.seq(seq__26399_26407);if(temp__4092__auto___26416)
{var seq__26399_26417__$1 = temp__4092__auto___26416;if(cljs.core.chunked_seq_QMARK_(seq__26399_26417__$1))
{var c__4148__auto___26418 = cljs.core.chunk_first(seq__26399_26417__$1);{
var G__26419 = cljs.core.chunk_rest(seq__26399_26417__$1);
var G__26420 = c__4148__auto___26418;
var G__26421 = cljs.core.count(c__4148__auto___26418);
var G__26422 = 0;
seq__26399_26407 = G__26419;
chunk__26400_26408 = G__26420;
count__26401_26409 = G__26421;
i__26402_26410 = G__26422;
continue;
}
} else
{var n_26423 = cljs.core.first(seq__26399_26417__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26423;
goog.events.fireListeners(n_26423,evt.type,true,evt);
}
{
var G__26424 = cljs.core.next(seq__26399_26417__$1);
var G__26425 = null;
var G__26426 = 0;
var G__26427 = 0;
seq__26399_26407 = G__26424;
chunk__26400_26408 = G__26425;
count__26401_26409 = G__26426;
i__26402_26410 = G__26427;
continue;
}
}
} else
{}
}
break;
}
var seq__26403_26428 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26404_26429 = null;var count__26405_26430 = 0;var i__26406_26431 = 0;while(true){
if((i__26406_26431 < count__26405_26430))
{var n_26432 = chunk__26404_26429.cljs$core$IIndexed$_nth$arity$2(null,i__26406_26431);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26432;
goog.events.fireListeners(n_26432,evt.type,false,evt);
}
{
var G__26433 = seq__26403_26428;
var G__26434 = chunk__26404_26429;
var G__26435 = count__26405_26430;
var G__26436 = (i__26406_26431 + 1);
seq__26403_26428 = G__26433;
chunk__26404_26429 = G__26434;
count__26405_26430 = G__26435;
i__26406_26431 = G__26436;
continue;
}
} else
{var temp__4092__auto___26437 = cljs.core.seq(seq__26403_26428);if(temp__4092__auto___26437)
{var seq__26403_26438__$1 = temp__4092__auto___26437;if(cljs.core.chunked_seq_QMARK_(seq__26403_26438__$1))
{var c__4148__auto___26439 = cljs.core.chunk_first(seq__26403_26438__$1);{
var G__26440 = cljs.core.chunk_rest(seq__26403_26438__$1);
var G__26441 = c__4148__auto___26439;
var G__26442 = cljs.core.count(c__4148__auto___26439);
var G__26443 = 0;
seq__26403_26428 = G__26440;
chunk__26404_26429 = G__26441;
count__26405_26430 = G__26442;
i__26406_26431 = G__26443;
continue;
}
} else
{var n_26444 = cljs.core.first(seq__26403_26438__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26444;
goog.events.fireListeners(n_26444,evt.type,false,evt);
}
{
var G__26445 = cljs.core.next(seq__26403_26438__$1);
var G__26446 = null;
var G__26447 = 0;
var G__26448 = 0;
seq__26403_26428 = G__26445;
chunk__26404_26429 = G__26446;
count__26405_26430 = G__26447;
i__26406_26431 = G__26448;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26455_26461 = cljs.core.seq(evt_map);var chunk__26456_26462 = null;var count__26457_26463 = 0;var i__26458_26464 = 0;while(true){
if((i__26458_26464 < count__26457_26463))
{var vec__26459_26465 = chunk__26456_26462.cljs$core$IIndexed$_nth$arity$2(null,i__26458_26464);var k_26466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26459_26465,0,null);var v_26467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26459_26465,1,null);(evt[k_26466] = v_26467);
{
var G__26468 = seq__26455_26461;
var G__26469 = chunk__26456_26462;
var G__26470 = count__26457_26463;
var G__26471 = (i__26458_26464 + 1);
seq__26455_26461 = G__26468;
chunk__26456_26462 = G__26469;
count__26457_26463 = G__26470;
i__26458_26464 = G__26471;
continue;
}
} else
{var temp__4092__auto___26472 = cljs.core.seq(seq__26455_26461);if(temp__4092__auto___26472)
{var seq__26455_26473__$1 = temp__4092__auto___26472;if(cljs.core.chunked_seq_QMARK_(seq__26455_26473__$1))
{var c__4148__auto___26474 = cljs.core.chunk_first(seq__26455_26473__$1);{
var G__26475 = cljs.core.chunk_rest(seq__26455_26473__$1);
var G__26476 = c__4148__auto___26474;
var G__26477 = cljs.core.count(c__4148__auto___26474);
var G__26478 = 0;
seq__26455_26461 = G__26475;
chunk__26456_26462 = G__26476;
count__26457_26463 = G__26477;
i__26458_26464 = G__26478;
continue;
}
} else
{var vec__26460_26479 = cljs.core.first(seq__26455_26473__$1);var k_26480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460_26479,0,null);var v_26481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26460_26479,1,null);(evt[k_26480] = v_26481);
{
var G__26482 = cljs.core.next(seq__26455_26473__$1);
var G__26483 = null;
var G__26484 = 0;
var G__26485 = 0;
seq__26455_26461 = G__26482;
chunk__26456_26462 = G__26483;
count__26457_26463 = G__26484;
i__26458_26464 = G__26485;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26486_SHARP_){return goog.events.getListeners(p1__26486_SHARP_,type__$1,false);
}),domina.nodes(content));
});
