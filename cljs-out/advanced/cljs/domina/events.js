// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj45324 = {};return obj45324;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t45328 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t45328 = (function (evt,f,create_listener_function,meta45329){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta45329 = meta45329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t45328.cljs$lang$type = true;
domina.events.t45328.cljs$lang$ctorStr = "domina.events/t45328";
domina.events.t45328.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t45328");
});
domina.events.t45328.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t45328.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t45328.prototype.domina$events$Event$ = true;
domina.events.t45328.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t45328.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t45328.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t45328.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t45328.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t45328.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t45328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45330){var self__ = this;
var _45330__$1 = this;return self__.meta45329;
});
domina.events.t45328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45330,meta45329__$1){var self__ = this;
var _45330__$1 = this;return (new domina.events.t45328(self__.evt,self__.f,self__.create_listener_function,meta45329__$1));
});
domina.events.__GT_t45328 = (function __GT_t45328(evt__$1,f__$1,create_listener_function__$1,meta45329){return (new domina.events.t45328(evt__$1,f__$1,create_listener_function__$1,meta45329));
});
}
return (new domina.events.t45328(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t45328 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t45328 = (function (evt,f,create_listener_function,meta45329){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta45329 = meta45329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t45328.cljs$lang$type = true;
domina.events.t45328.cljs$lang$ctorStr = "domina.events/t45328";
domina.events.t45328.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t45328");
});
domina.events.t45328.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t45328.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t45328.prototype.domina$events$Event$ = true;
domina.events.t45328.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t45328.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t45328.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t45328.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t45328.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t45328.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t45328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45330){var self__ = this;
var _45330__$1 = this;return self__.meta45329;
});
domina.events.t45328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45330,meta45329__$1){var self__ = this;
var _45330__$1 = this;return (new domina.events.t45328(self__.evt,self__.f,self__.create_listener_function,meta45329__$1));
});
domina.events.__GT_t45328 = (function __GT_t45328(evt__$1,f__$1,create_listener_function__$1,meta45329){return (new domina.events.t45328(evt__$1,f__$1,create_listener_function__$1,meta45329));
});
}
return (new domina.events.t45328(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__45335(s__45336){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__45336__$1 = s__45336;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45336__$1);if(temp__4126__auto__)
{var s__45336__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45336__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45336__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45338 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45337 = (0);while(true){
if((i__45337 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45337);cljs.core.chunk_append(b__45338,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__45339 = (i__45337 + (1));
i__45337 = G__45339;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45338),iter__45335(cljs.core.chunk_rest(s__45336__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45338),null);
}
} else
{var node = cljs.core.first(s__45336__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__45335(cljs.core.rest(s__45336__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__45348 = cljs.core.seq(domina.nodes(content));var chunk__45349 = null;var count__45350 = (0);var i__45351 = (0);while(true){
if((i__45351 < count__45350))
{var node = chunk__45349.cljs$core$IIndexed$_nth$arity$2(null,i__45351);goog.events.removeAll(node);
{
var G__45356 = seq__45348;
var G__45357 = chunk__45349;
var G__45358 = count__45350;
var G__45359 = (i__45351 + (1));
seq__45348 = G__45356;
chunk__45349 = G__45357;
count__45350 = G__45358;
i__45351 = G__45359;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45348);if(temp__4126__auto__)
{var seq__45348__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45348__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45348__$1);{
var G__45360 = cljs.core.chunk_rest(seq__45348__$1);
var G__45361 = c__4314__auto__;
var G__45362 = cljs.core.count(c__4314__auto__);
var G__45363 = (0);
seq__45348 = G__45360;
chunk__45349 = G__45361;
count__45350 = G__45362;
i__45351 = G__45363;
continue;
}
} else
{var node = cljs.core.first(seq__45348__$1);goog.events.removeAll(node);
{
var G__45364 = cljs.core.next(seq__45348__$1);
var G__45365 = null;
var G__45366 = (0);
var G__45367 = (0);
seq__45348 = G__45364;
chunk__45349 = G__45365;
count__45350 = G__45366;
i__45351 = G__45367;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__45352 = cljs.core.seq(domina.nodes(content));var chunk__45353 = null;var count__45354 = (0);var i__45355 = (0);while(true){
if((i__45355 < count__45354))
{var node = chunk__45353.cljs$core$IIndexed$_nth$arity$2(null,i__45355);goog.events.removeAll(node,type__$1);
{
var G__45368 = seq__45352;
var G__45369 = chunk__45353;
var G__45370 = count__45354;
var G__45371 = (i__45355 + (1));
seq__45352 = G__45368;
chunk__45353 = G__45369;
count__45354 = G__45370;
i__45355 = G__45371;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45352);if(temp__4126__auto__)
{var seq__45352__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45352__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45352__$1);{
var G__45372 = cljs.core.chunk_rest(seq__45352__$1);
var G__45373 = c__4314__auto__;
var G__45374 = cljs.core.count(c__4314__auto__);
var G__45375 = (0);
seq__45352 = G__45372;
chunk__45353 = G__45373;
count__45354 = G__45374;
i__45355 = G__45375;
continue;
}
} else
{var node = cljs.core.first(seq__45352__$1);goog.events.removeAll(node,type__$1);
{
var G__45376 = cljs.core.next(seq__45352__$1);
var G__45377 = null;
var G__45378 = (0);
var G__45379 = (0);
seq__45352 = G__45376;
chunk__45353 = G__45377;
count__45354 = G__45378;
i__45355 = G__45379;
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
var G__45380 = parent;
var G__45381 = cljs.core.cons(parent,so_far);
n = G__45380;
so_far = G__45381;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__45390_45398 = cljs.core.seq(ancestors);var chunk__45391_45399 = null;var count__45392_45400 = (0);var i__45393_45401 = (0);while(true){
if((i__45393_45401 < count__45392_45400))
{var n_45402 = chunk__45391_45399.cljs$core$IIndexed$_nth$arity$2(null,i__45393_45401);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45402;
goog.events.fireListeners(n_45402,evt.type,true,evt);
}
{
var G__45403 = seq__45390_45398;
var G__45404 = chunk__45391_45399;
var G__45405 = count__45392_45400;
var G__45406 = (i__45393_45401 + (1));
seq__45390_45398 = G__45403;
chunk__45391_45399 = G__45404;
count__45392_45400 = G__45405;
i__45393_45401 = G__45406;
continue;
}
} else
{var temp__4126__auto___45407 = cljs.core.seq(seq__45390_45398);if(temp__4126__auto___45407)
{var seq__45390_45408__$1 = temp__4126__auto___45407;if(cljs.core.chunked_seq_QMARK_(seq__45390_45408__$1))
{var c__4314__auto___45409 = cljs.core.chunk_first(seq__45390_45408__$1);{
var G__45410 = cljs.core.chunk_rest(seq__45390_45408__$1);
var G__45411 = c__4314__auto___45409;
var G__45412 = cljs.core.count(c__4314__auto___45409);
var G__45413 = (0);
seq__45390_45398 = G__45410;
chunk__45391_45399 = G__45411;
count__45392_45400 = G__45412;
i__45393_45401 = G__45413;
continue;
}
} else
{var n_45414 = cljs.core.first(seq__45390_45408__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45414;
goog.events.fireListeners(n_45414,evt.type,true,evt);
}
{
var G__45415 = cljs.core.next(seq__45390_45408__$1);
var G__45416 = null;
var G__45417 = (0);
var G__45418 = (0);
seq__45390_45398 = G__45415;
chunk__45391_45399 = G__45416;
count__45392_45400 = G__45417;
i__45393_45401 = G__45418;
continue;
}
}
} else
{}
}
break;
}
var seq__45394_45419 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__45395_45420 = null;var count__45396_45421 = (0);var i__45397_45422 = (0);while(true){
if((i__45397_45422 < count__45396_45421))
{var n_45423 = chunk__45395_45420.cljs$core$IIndexed$_nth$arity$2(null,i__45397_45422);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45423;
goog.events.fireListeners(n_45423,evt.type,false,evt);
}
{
var G__45424 = seq__45394_45419;
var G__45425 = chunk__45395_45420;
var G__45426 = count__45396_45421;
var G__45427 = (i__45397_45422 + (1));
seq__45394_45419 = G__45424;
chunk__45395_45420 = G__45425;
count__45396_45421 = G__45426;
i__45397_45422 = G__45427;
continue;
}
} else
{var temp__4126__auto___45428 = cljs.core.seq(seq__45394_45419);if(temp__4126__auto___45428)
{var seq__45394_45429__$1 = temp__4126__auto___45428;if(cljs.core.chunked_seq_QMARK_(seq__45394_45429__$1))
{var c__4314__auto___45430 = cljs.core.chunk_first(seq__45394_45429__$1);{
var G__45431 = cljs.core.chunk_rest(seq__45394_45429__$1);
var G__45432 = c__4314__auto___45430;
var G__45433 = cljs.core.count(c__4314__auto___45430);
var G__45434 = (0);
seq__45394_45419 = G__45431;
chunk__45395_45420 = G__45432;
count__45396_45421 = G__45433;
i__45397_45422 = G__45434;
continue;
}
} else
{var n_45435 = cljs.core.first(seq__45394_45429__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45435;
goog.events.fireListeners(n_45435,evt.type,false,evt);
}
{
var G__45436 = cljs.core.next(seq__45394_45429__$1);
var G__45437 = null;
var G__45438 = (0);
var G__45439 = (0);
seq__45394_45419 = G__45436;
chunk__45395_45420 = G__45437;
count__45396_45421 = G__45438;
i__45397_45422 = G__45439;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__45446_45452 = cljs.core.seq(evt_map);var chunk__45447_45453 = null;var count__45448_45454 = (0);var i__45449_45455 = (0);while(true){
if((i__45449_45455 < count__45448_45454))
{var vec__45450_45456 = chunk__45447_45453.cljs$core$IIndexed$_nth$arity$2(null,i__45449_45455);var k_45457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45450_45456,(0),null);var v_45458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45450_45456,(1),null);(evt[k_45457] = v_45458);
{
var G__45459 = seq__45446_45452;
var G__45460 = chunk__45447_45453;
var G__45461 = count__45448_45454;
var G__45462 = (i__45449_45455 + (1));
seq__45446_45452 = G__45459;
chunk__45447_45453 = G__45460;
count__45448_45454 = G__45461;
i__45449_45455 = G__45462;
continue;
}
} else
{var temp__4126__auto___45463 = cljs.core.seq(seq__45446_45452);if(temp__4126__auto___45463)
{var seq__45446_45464__$1 = temp__4126__auto___45463;if(cljs.core.chunked_seq_QMARK_(seq__45446_45464__$1))
{var c__4314__auto___45465 = cljs.core.chunk_first(seq__45446_45464__$1);{
var G__45466 = cljs.core.chunk_rest(seq__45446_45464__$1);
var G__45467 = c__4314__auto___45465;
var G__45468 = cljs.core.count(c__4314__auto___45465);
var G__45469 = (0);
seq__45446_45452 = G__45466;
chunk__45447_45453 = G__45467;
count__45448_45454 = G__45468;
i__45449_45455 = G__45469;
continue;
}
} else
{var vec__45451_45470 = cljs.core.first(seq__45446_45464__$1);var k_45471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45451_45470,(0),null);var v_45472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45451_45470,(1),null);(evt[k_45471] = v_45472);
{
var G__45473 = cljs.core.next(seq__45446_45464__$1);
var G__45474 = null;
var G__45475 = (0);
var G__45476 = (0);
seq__45446_45452 = G__45473;
chunk__45447_45453 = G__45474;
count__45448_45454 = G__45475;
i__45449_45455 = G__45476;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (type__$1){
return (function (p1__45477_SHARP_){return goog.events.getListeners(p1__45477_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
