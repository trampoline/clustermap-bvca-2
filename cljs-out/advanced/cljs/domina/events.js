// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26353 = {};return obj26353;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26357 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26357 = (function (evt,f,create_listener_function,meta26358){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26358 = meta26358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26357.cljs$lang$type = true;
domina.events.t26357.cljs$lang$ctorStr = "domina.events/t26357";
domina.events.t26357.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26357");
});
domina.events.t26357.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26357.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26357.prototype.domina$events$Event$ = true;
domina.events.t26357.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26357.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26357.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26357.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26357.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26357.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26359){var self__ = this;
var _26359__$1 = this;return self__.meta26358;
});
domina.events.t26357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26359,meta26358__$1){var self__ = this;
var _26359__$1 = this;return (new domina.events.t26357(self__.evt,self__.f,self__.create_listener_function,meta26358__$1));
});
domina.events.__GT_t26357 = (function __GT_t26357(evt__$1,f__$1,create_listener_function__$1,meta26358){return (new domina.events.t26357(evt__$1,f__$1,create_listener_function__$1,meta26358));
});
}
return (new domina.events.t26357(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26357 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26357 = (function (evt,f,create_listener_function,meta26358){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26358 = meta26358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26357.cljs$lang$type = true;
domina.events.t26357.cljs$lang$ctorStr = "domina.events/t26357";
domina.events.t26357.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26357");
});
domina.events.t26357.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26357.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26357.prototype.domina$events$Event$ = true;
domina.events.t26357.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26357.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26357.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26357.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26357.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26357.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26359){var self__ = this;
var _26359__$1 = this;return self__.meta26358;
});
domina.events.t26357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26359,meta26358__$1){var self__ = this;
var _26359__$1 = this;return (new domina.events.t26357(self__.evt,self__.f,self__.create_listener_function,meta26358__$1));
});
domina.events.__GT_t26357 = (function __GT_t26357(evt__$1,f__$1,create_listener_function__$1,meta26358){return (new domina.events.t26357(evt__$1,f__$1,create_listener_function__$1,meta26358));
});
}
return (new domina.events.t26357(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26364(s__26365){return (new cljs.core.LazySeq(null,(function (){var s__26365__$1 = s__26365;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26365__$1);if(temp__4092__auto__)
{var s__26365__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26365__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26365__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26367 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26366 = 0;while(true){
if((i__26366 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26366);cljs.core.chunk_append(b__26367,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26368 = (i__26366 + 1);
i__26366 = G__26368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26367),iter__26364(cljs.core.chunk_rest(s__26365__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26367),null);
}
} else
{var node = cljs.core.first(s__26365__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26364(cljs.core.rest(s__26365__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26377 = cljs.core.seq(domina.nodes(content));var chunk__26378 = null;var count__26379 = 0;var i__26380 = 0;while(true){
if((i__26380 < count__26379))
{var node = chunk__26378.cljs$core$IIndexed$_nth$arity$2(null,i__26380);goog.events.removeAll(node);
{
var G__26385 = seq__26377;
var G__26386 = chunk__26378;
var G__26387 = count__26379;
var G__26388 = (i__26380 + 1);
seq__26377 = G__26385;
chunk__26378 = G__26386;
count__26379 = G__26387;
i__26380 = G__26388;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26377);if(temp__4092__auto__)
{var seq__26377__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26377__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26377__$1);{
var G__26389 = cljs.core.chunk_rest(seq__26377__$1);
var G__26390 = c__4148__auto__;
var G__26391 = cljs.core.count(c__4148__auto__);
var G__26392 = 0;
seq__26377 = G__26389;
chunk__26378 = G__26390;
count__26379 = G__26391;
i__26380 = G__26392;
continue;
}
} else
{var node = cljs.core.first(seq__26377__$1);goog.events.removeAll(node);
{
var G__26393 = cljs.core.next(seq__26377__$1);
var G__26394 = null;
var G__26395 = 0;
var G__26396 = 0;
seq__26377 = G__26393;
chunk__26378 = G__26394;
count__26379 = G__26395;
i__26380 = G__26396;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26381 = cljs.core.seq(domina.nodes(content));var chunk__26382 = null;var count__26383 = 0;var i__26384 = 0;while(true){
if((i__26384 < count__26383))
{var node = chunk__26382.cljs$core$IIndexed$_nth$arity$2(null,i__26384);goog.events.removeAll(node,type__$1);
{
var G__26397 = seq__26381;
var G__26398 = chunk__26382;
var G__26399 = count__26383;
var G__26400 = (i__26384 + 1);
seq__26381 = G__26397;
chunk__26382 = G__26398;
count__26383 = G__26399;
i__26384 = G__26400;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26381);if(temp__4092__auto__)
{var seq__26381__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26381__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26381__$1);{
var G__26401 = cljs.core.chunk_rest(seq__26381__$1);
var G__26402 = c__4148__auto__;
var G__26403 = cljs.core.count(c__4148__auto__);
var G__26404 = 0;
seq__26381 = G__26401;
chunk__26382 = G__26402;
count__26383 = G__26403;
i__26384 = G__26404;
continue;
}
} else
{var node = cljs.core.first(seq__26381__$1);goog.events.removeAll(node,type__$1);
{
var G__26405 = cljs.core.next(seq__26381__$1);
var G__26406 = null;
var G__26407 = 0;
var G__26408 = 0;
seq__26381 = G__26405;
chunk__26382 = G__26406;
count__26383 = G__26407;
i__26384 = G__26408;
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
var G__26409 = parent;
var G__26410 = cljs.core.cons(parent,so_far);
n = G__26409;
so_far = G__26410;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26419_26427 = cljs.core.seq(ancestors);var chunk__26420_26428 = null;var count__26421_26429 = 0;var i__26422_26430 = 0;while(true){
if((i__26422_26430 < count__26421_26429))
{var n_26431 = chunk__26420_26428.cljs$core$IIndexed$_nth$arity$2(null,i__26422_26430);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26431;
goog.events.fireListeners(n_26431,evt.type,true,evt);
}
{
var G__26432 = seq__26419_26427;
var G__26433 = chunk__26420_26428;
var G__26434 = count__26421_26429;
var G__26435 = (i__26422_26430 + 1);
seq__26419_26427 = G__26432;
chunk__26420_26428 = G__26433;
count__26421_26429 = G__26434;
i__26422_26430 = G__26435;
continue;
}
} else
{var temp__4092__auto___26436 = cljs.core.seq(seq__26419_26427);if(temp__4092__auto___26436)
{var seq__26419_26437__$1 = temp__4092__auto___26436;if(cljs.core.chunked_seq_QMARK_(seq__26419_26437__$1))
{var c__4148__auto___26438 = cljs.core.chunk_first(seq__26419_26437__$1);{
var G__26439 = cljs.core.chunk_rest(seq__26419_26437__$1);
var G__26440 = c__4148__auto___26438;
var G__26441 = cljs.core.count(c__4148__auto___26438);
var G__26442 = 0;
seq__26419_26427 = G__26439;
chunk__26420_26428 = G__26440;
count__26421_26429 = G__26441;
i__26422_26430 = G__26442;
continue;
}
} else
{var n_26443 = cljs.core.first(seq__26419_26437__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26443;
goog.events.fireListeners(n_26443,evt.type,true,evt);
}
{
var G__26444 = cljs.core.next(seq__26419_26437__$1);
var G__26445 = null;
var G__26446 = 0;
var G__26447 = 0;
seq__26419_26427 = G__26444;
chunk__26420_26428 = G__26445;
count__26421_26429 = G__26446;
i__26422_26430 = G__26447;
continue;
}
}
} else
{}
}
break;
}
var seq__26423_26448 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26424_26449 = null;var count__26425_26450 = 0;var i__26426_26451 = 0;while(true){
if((i__26426_26451 < count__26425_26450))
{var n_26452 = chunk__26424_26449.cljs$core$IIndexed$_nth$arity$2(null,i__26426_26451);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26452;
goog.events.fireListeners(n_26452,evt.type,false,evt);
}
{
var G__26453 = seq__26423_26448;
var G__26454 = chunk__26424_26449;
var G__26455 = count__26425_26450;
var G__26456 = (i__26426_26451 + 1);
seq__26423_26448 = G__26453;
chunk__26424_26449 = G__26454;
count__26425_26450 = G__26455;
i__26426_26451 = G__26456;
continue;
}
} else
{var temp__4092__auto___26457 = cljs.core.seq(seq__26423_26448);if(temp__4092__auto___26457)
{var seq__26423_26458__$1 = temp__4092__auto___26457;if(cljs.core.chunked_seq_QMARK_(seq__26423_26458__$1))
{var c__4148__auto___26459 = cljs.core.chunk_first(seq__26423_26458__$1);{
var G__26460 = cljs.core.chunk_rest(seq__26423_26458__$1);
var G__26461 = c__4148__auto___26459;
var G__26462 = cljs.core.count(c__4148__auto___26459);
var G__26463 = 0;
seq__26423_26448 = G__26460;
chunk__26424_26449 = G__26461;
count__26425_26450 = G__26462;
i__26426_26451 = G__26463;
continue;
}
} else
{var n_26464 = cljs.core.first(seq__26423_26458__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26464;
goog.events.fireListeners(n_26464,evt.type,false,evt);
}
{
var G__26465 = cljs.core.next(seq__26423_26458__$1);
var G__26466 = null;
var G__26467 = 0;
var G__26468 = 0;
seq__26423_26448 = G__26465;
chunk__26424_26449 = G__26466;
count__26425_26450 = G__26467;
i__26426_26451 = G__26468;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26475_26481 = cljs.core.seq(evt_map);var chunk__26476_26482 = null;var count__26477_26483 = 0;var i__26478_26484 = 0;while(true){
if((i__26478_26484 < count__26477_26483))
{var vec__26479_26485 = chunk__26476_26482.cljs$core$IIndexed$_nth$arity$2(null,i__26478_26484);var k_26486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479_26485,0,null);var v_26487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479_26485,1,null);(evt[k_26486] = v_26487);
{
var G__26488 = seq__26475_26481;
var G__26489 = chunk__26476_26482;
var G__26490 = count__26477_26483;
var G__26491 = (i__26478_26484 + 1);
seq__26475_26481 = G__26488;
chunk__26476_26482 = G__26489;
count__26477_26483 = G__26490;
i__26478_26484 = G__26491;
continue;
}
} else
{var temp__4092__auto___26492 = cljs.core.seq(seq__26475_26481);if(temp__4092__auto___26492)
{var seq__26475_26493__$1 = temp__4092__auto___26492;if(cljs.core.chunked_seq_QMARK_(seq__26475_26493__$1))
{var c__4148__auto___26494 = cljs.core.chunk_first(seq__26475_26493__$1);{
var G__26495 = cljs.core.chunk_rest(seq__26475_26493__$1);
var G__26496 = c__4148__auto___26494;
var G__26497 = cljs.core.count(c__4148__auto___26494);
var G__26498 = 0;
seq__26475_26481 = G__26495;
chunk__26476_26482 = G__26496;
count__26477_26483 = G__26497;
i__26478_26484 = G__26498;
continue;
}
} else
{var vec__26480_26499 = cljs.core.first(seq__26475_26493__$1);var k_26500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480_26499,0,null);var v_26501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480_26499,1,null);(evt[k_26500] = v_26501);
{
var G__26502 = cljs.core.next(seq__26475_26493__$1);
var G__26503 = null;
var G__26504 = 0;
var G__26505 = 0;
seq__26475_26481 = G__26502;
chunk__26476_26482 = G__26503;
count__26477_26483 = G__26504;
i__26478_26484 = G__26505;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26506_SHARP_){return goog.events.getListeners(p1__26506_SHARP_,type__$1,false);
}),domina.nodes(content));
});
