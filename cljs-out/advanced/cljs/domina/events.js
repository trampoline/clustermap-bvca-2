// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj40332 = {};return obj40332;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t40336 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t40336 = (function (evt,f,create_listener_function,meta40337){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta40337 = meta40337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t40336.cljs$lang$type = true;
domina.events.t40336.cljs$lang$ctorStr = "domina.events/t40336";
domina.events.t40336.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t40336");
});
domina.events.t40336.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t40336.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t40336.prototype.domina$events$Event$ = true;
domina.events.t40336.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t40336.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t40336.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t40336.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t40336.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t40336.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t40336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40338){var self__ = this;
var _40338__$1 = this;return self__.meta40337;
});
domina.events.t40336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40338,meta40337__$1){var self__ = this;
var _40338__$1 = this;return (new domina.events.t40336(self__.evt,self__.f,self__.create_listener_function,meta40337__$1));
});
domina.events.__GT_t40336 = (function __GT_t40336(evt__$1,f__$1,create_listener_function__$1,meta40337){return (new domina.events.t40336(evt__$1,f__$1,create_listener_function__$1,meta40337));
});
}
return (new domina.events.t40336(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t40336 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t40336 = (function (evt,f,create_listener_function,meta40337){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta40337 = meta40337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t40336.cljs$lang$type = true;
domina.events.t40336.cljs$lang$ctorStr = "domina.events/t40336";
domina.events.t40336.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t40336");
});
domina.events.t40336.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t40336.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t40336.prototype.domina$events$Event$ = true;
domina.events.t40336.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t40336.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t40336.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t40336.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t40336.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t40336.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t40336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40338){var self__ = this;
var _40338__$1 = this;return self__.meta40337;
});
domina.events.t40336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40338,meta40337__$1){var self__ = this;
var _40338__$1 = this;return (new domina.events.t40336(self__.evt,self__.f,self__.create_listener_function,meta40337__$1));
});
domina.events.__GT_t40336 = (function __GT_t40336(evt__$1,f__$1,create_listener_function__$1,meta40337){return (new domina.events.t40336(evt__$1,f__$1,create_listener_function__$1,meta40337));
});
}
return (new domina.events.t40336(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__40343(s__40344){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__40344__$1 = s__40344;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40344__$1);if(temp__4126__auto__)
{var s__40344__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40344__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40344__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40346 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40345 = (0);while(true){
if((i__40345 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40345);cljs.core.chunk_append(b__40346,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__40347 = (i__40345 + (1));
i__40345 = G__40347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40346),iter__40343(cljs.core.chunk_rest(s__40344__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40346),null);
}
} else
{var node = cljs.core.first(s__40344__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__40343(cljs.core.rest(s__40344__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__40356 = cljs.core.seq(domina.nodes(content));var chunk__40357 = null;var count__40358 = (0);var i__40359 = (0);while(true){
if((i__40359 < count__40358))
{var node = chunk__40357.cljs$core$IIndexed$_nth$arity$2(null,i__40359);goog.events.removeAll(node);
{
var G__40364 = seq__40356;
var G__40365 = chunk__40357;
var G__40366 = count__40358;
var G__40367 = (i__40359 + (1));
seq__40356 = G__40364;
chunk__40357 = G__40365;
count__40358 = G__40366;
i__40359 = G__40367;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40356);if(temp__4126__auto__)
{var seq__40356__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40356__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40356__$1);{
var G__40368 = cljs.core.chunk_rest(seq__40356__$1);
var G__40369 = c__4299__auto__;
var G__40370 = cljs.core.count(c__4299__auto__);
var G__40371 = (0);
seq__40356 = G__40368;
chunk__40357 = G__40369;
count__40358 = G__40370;
i__40359 = G__40371;
continue;
}
} else
{var node = cljs.core.first(seq__40356__$1);goog.events.removeAll(node);
{
var G__40372 = cljs.core.next(seq__40356__$1);
var G__40373 = null;
var G__40374 = (0);
var G__40375 = (0);
seq__40356 = G__40372;
chunk__40357 = G__40373;
count__40358 = G__40374;
i__40359 = G__40375;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__40360 = cljs.core.seq(domina.nodes(content));var chunk__40361 = null;var count__40362 = (0);var i__40363 = (0);while(true){
if((i__40363 < count__40362))
{var node = chunk__40361.cljs$core$IIndexed$_nth$arity$2(null,i__40363);goog.events.removeAll(node,type__$1);
{
var G__40376 = seq__40360;
var G__40377 = chunk__40361;
var G__40378 = count__40362;
var G__40379 = (i__40363 + (1));
seq__40360 = G__40376;
chunk__40361 = G__40377;
count__40362 = G__40378;
i__40363 = G__40379;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40360);if(temp__4126__auto__)
{var seq__40360__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40360__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40360__$1);{
var G__40380 = cljs.core.chunk_rest(seq__40360__$1);
var G__40381 = c__4299__auto__;
var G__40382 = cljs.core.count(c__4299__auto__);
var G__40383 = (0);
seq__40360 = G__40380;
chunk__40361 = G__40381;
count__40362 = G__40382;
i__40363 = G__40383;
continue;
}
} else
{var node = cljs.core.first(seq__40360__$1);goog.events.removeAll(node,type__$1);
{
var G__40384 = cljs.core.next(seq__40360__$1);
var G__40385 = null;
var G__40386 = (0);
var G__40387 = (0);
seq__40360 = G__40384;
chunk__40361 = G__40385;
count__40362 = G__40386;
i__40363 = G__40387;
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
var G__40388 = parent;
var G__40389 = cljs.core.cons(parent,so_far);
n = G__40388;
so_far = G__40389;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__40398_40406 = cljs.core.seq(ancestors);var chunk__40399_40407 = null;var count__40400_40408 = (0);var i__40401_40409 = (0);while(true){
if((i__40401_40409 < count__40400_40408))
{var n_40410 = chunk__40399_40407.cljs$core$IIndexed$_nth$arity$2(null,i__40401_40409);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40410;
goog.events.fireListeners(n_40410,evt.type,true,evt);
}
{
var G__40411 = seq__40398_40406;
var G__40412 = chunk__40399_40407;
var G__40413 = count__40400_40408;
var G__40414 = (i__40401_40409 + (1));
seq__40398_40406 = G__40411;
chunk__40399_40407 = G__40412;
count__40400_40408 = G__40413;
i__40401_40409 = G__40414;
continue;
}
} else
{var temp__4126__auto___40415 = cljs.core.seq(seq__40398_40406);if(temp__4126__auto___40415)
{var seq__40398_40416__$1 = temp__4126__auto___40415;if(cljs.core.chunked_seq_QMARK_(seq__40398_40416__$1))
{var c__4299__auto___40417 = cljs.core.chunk_first(seq__40398_40416__$1);{
var G__40418 = cljs.core.chunk_rest(seq__40398_40416__$1);
var G__40419 = c__4299__auto___40417;
var G__40420 = cljs.core.count(c__4299__auto___40417);
var G__40421 = (0);
seq__40398_40406 = G__40418;
chunk__40399_40407 = G__40419;
count__40400_40408 = G__40420;
i__40401_40409 = G__40421;
continue;
}
} else
{var n_40422 = cljs.core.first(seq__40398_40416__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40422;
goog.events.fireListeners(n_40422,evt.type,true,evt);
}
{
var G__40423 = cljs.core.next(seq__40398_40416__$1);
var G__40424 = null;
var G__40425 = (0);
var G__40426 = (0);
seq__40398_40406 = G__40423;
chunk__40399_40407 = G__40424;
count__40400_40408 = G__40425;
i__40401_40409 = G__40426;
continue;
}
}
} else
{}
}
break;
}
var seq__40402_40427 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__40403_40428 = null;var count__40404_40429 = (0);var i__40405_40430 = (0);while(true){
if((i__40405_40430 < count__40404_40429))
{var n_40431 = chunk__40403_40428.cljs$core$IIndexed$_nth$arity$2(null,i__40405_40430);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40431;
goog.events.fireListeners(n_40431,evt.type,false,evt);
}
{
var G__40432 = seq__40402_40427;
var G__40433 = chunk__40403_40428;
var G__40434 = count__40404_40429;
var G__40435 = (i__40405_40430 + (1));
seq__40402_40427 = G__40432;
chunk__40403_40428 = G__40433;
count__40404_40429 = G__40434;
i__40405_40430 = G__40435;
continue;
}
} else
{var temp__4126__auto___40436 = cljs.core.seq(seq__40402_40427);if(temp__4126__auto___40436)
{var seq__40402_40437__$1 = temp__4126__auto___40436;if(cljs.core.chunked_seq_QMARK_(seq__40402_40437__$1))
{var c__4299__auto___40438 = cljs.core.chunk_first(seq__40402_40437__$1);{
var G__40439 = cljs.core.chunk_rest(seq__40402_40437__$1);
var G__40440 = c__4299__auto___40438;
var G__40441 = cljs.core.count(c__4299__auto___40438);
var G__40442 = (0);
seq__40402_40427 = G__40439;
chunk__40403_40428 = G__40440;
count__40404_40429 = G__40441;
i__40405_40430 = G__40442;
continue;
}
} else
{var n_40443 = cljs.core.first(seq__40402_40437__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40443;
goog.events.fireListeners(n_40443,evt.type,false,evt);
}
{
var G__40444 = cljs.core.next(seq__40402_40437__$1);
var G__40445 = null;
var G__40446 = (0);
var G__40447 = (0);
seq__40402_40427 = G__40444;
chunk__40403_40428 = G__40445;
count__40404_40429 = G__40446;
i__40405_40430 = G__40447;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__40454_40460 = cljs.core.seq(evt_map);var chunk__40455_40461 = null;var count__40456_40462 = (0);var i__40457_40463 = (0);while(true){
if((i__40457_40463 < count__40456_40462))
{var vec__40458_40464 = chunk__40455_40461.cljs$core$IIndexed$_nth$arity$2(null,i__40457_40463);var k_40465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40458_40464,(0),null);var v_40466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40458_40464,(1),null);(evt[k_40465] = v_40466);
{
var G__40467 = seq__40454_40460;
var G__40468 = chunk__40455_40461;
var G__40469 = count__40456_40462;
var G__40470 = (i__40457_40463 + (1));
seq__40454_40460 = G__40467;
chunk__40455_40461 = G__40468;
count__40456_40462 = G__40469;
i__40457_40463 = G__40470;
continue;
}
} else
{var temp__4126__auto___40471 = cljs.core.seq(seq__40454_40460);if(temp__4126__auto___40471)
{var seq__40454_40472__$1 = temp__4126__auto___40471;if(cljs.core.chunked_seq_QMARK_(seq__40454_40472__$1))
{var c__4299__auto___40473 = cljs.core.chunk_first(seq__40454_40472__$1);{
var G__40474 = cljs.core.chunk_rest(seq__40454_40472__$1);
var G__40475 = c__4299__auto___40473;
var G__40476 = cljs.core.count(c__4299__auto___40473);
var G__40477 = (0);
seq__40454_40460 = G__40474;
chunk__40455_40461 = G__40475;
count__40456_40462 = G__40476;
i__40457_40463 = G__40477;
continue;
}
} else
{var vec__40459_40478 = cljs.core.first(seq__40454_40472__$1);var k_40479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459_40478,(0),null);var v_40480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40459_40478,(1),null);(evt[k_40479] = v_40480);
{
var G__40481 = cljs.core.next(seq__40454_40472__$1);
var G__40482 = null;
var G__40483 = (0);
var G__40484 = (0);
seq__40454_40460 = G__40481;
chunk__40455_40461 = G__40482;
count__40456_40462 = G__40483;
i__40457_40463 = G__40484;
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
return (function (p1__40485_SHARP_){return goog.events.getListeners(p1__40485_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
