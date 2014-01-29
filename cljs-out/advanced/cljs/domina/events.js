// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26315 = {};return obj26315;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26319 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26319 = (function (evt,f,create_listener_function,meta26320){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26320 = meta26320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26319.cljs$lang$type = true;
domina.events.t26319.cljs$lang$ctorStr = "domina.events/t26319";
domina.events.t26319.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26319");
});
domina.events.t26319.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26319.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26319.prototype.domina$events$Event$ = true;
domina.events.t26319.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26319.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26319.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26319.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26319.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26319.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26321){var self__ = this;
var _26321__$1 = this;return self__.meta26320;
});
domina.events.t26319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26321,meta26320__$1){var self__ = this;
var _26321__$1 = this;return (new domina.events.t26319(self__.evt,self__.f,self__.create_listener_function,meta26320__$1));
});
domina.events.__GT_t26319 = (function __GT_t26319(evt__$1,f__$1,create_listener_function__$1,meta26320){return (new domina.events.t26319(evt__$1,f__$1,create_listener_function__$1,meta26320));
});
}
return (new domina.events.t26319(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26319 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26319 = (function (evt,f,create_listener_function,meta26320){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26320 = meta26320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26319.cljs$lang$type = true;
domina.events.t26319.cljs$lang$ctorStr = "domina.events/t26319";
domina.events.t26319.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26319");
});
domina.events.t26319.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26319.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26319.prototype.domina$events$Event$ = true;
domina.events.t26319.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26319.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26319.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26319.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26319.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26319.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26321){var self__ = this;
var _26321__$1 = this;return self__.meta26320;
});
domina.events.t26319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26321,meta26320__$1){var self__ = this;
var _26321__$1 = this;return (new domina.events.t26319(self__.evt,self__.f,self__.create_listener_function,meta26320__$1));
});
domina.events.__GT_t26319 = (function __GT_t26319(evt__$1,f__$1,create_listener_function__$1,meta26320){return (new domina.events.t26319(evt__$1,f__$1,create_listener_function__$1,meta26320));
});
}
return (new domina.events.t26319(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26326(s__26327){return (new cljs.core.LazySeq(null,(function (){var s__26327__$1 = s__26327;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26327__$1);if(temp__4092__auto__)
{var s__26327__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26327__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26327__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26329 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26328 = 0;while(true){
if((i__26328 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26328);cljs.core.chunk_append(b__26329,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26330 = (i__26328 + 1);
i__26328 = G__26330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26329),iter__26326(cljs.core.chunk_rest(s__26327__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26329),null);
}
} else
{var node = cljs.core.first(s__26327__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26326(cljs.core.rest(s__26327__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26339 = cljs.core.seq(domina.nodes(content));var chunk__26340 = null;var count__26341 = 0;var i__26342 = 0;while(true){
if((i__26342 < count__26341))
{var node = chunk__26340.cljs$core$IIndexed$_nth$arity$2(null,i__26342);goog.events.removeAll(node);
{
var G__26347 = seq__26339;
var G__26348 = chunk__26340;
var G__26349 = count__26341;
var G__26350 = (i__26342 + 1);
seq__26339 = G__26347;
chunk__26340 = G__26348;
count__26341 = G__26349;
i__26342 = G__26350;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26339);if(temp__4092__auto__)
{var seq__26339__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26339__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26339__$1);{
var G__26351 = cljs.core.chunk_rest(seq__26339__$1);
var G__26352 = c__4148__auto__;
var G__26353 = cljs.core.count(c__4148__auto__);
var G__26354 = 0;
seq__26339 = G__26351;
chunk__26340 = G__26352;
count__26341 = G__26353;
i__26342 = G__26354;
continue;
}
} else
{var node = cljs.core.first(seq__26339__$1);goog.events.removeAll(node);
{
var G__26355 = cljs.core.next(seq__26339__$1);
var G__26356 = null;
var G__26357 = 0;
var G__26358 = 0;
seq__26339 = G__26355;
chunk__26340 = G__26356;
count__26341 = G__26357;
i__26342 = G__26358;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26343 = cljs.core.seq(domina.nodes(content));var chunk__26344 = null;var count__26345 = 0;var i__26346 = 0;while(true){
if((i__26346 < count__26345))
{var node = chunk__26344.cljs$core$IIndexed$_nth$arity$2(null,i__26346);goog.events.removeAll(node,type__$1);
{
var G__26359 = seq__26343;
var G__26360 = chunk__26344;
var G__26361 = count__26345;
var G__26362 = (i__26346 + 1);
seq__26343 = G__26359;
chunk__26344 = G__26360;
count__26345 = G__26361;
i__26346 = G__26362;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26343);if(temp__4092__auto__)
{var seq__26343__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26343__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26343__$1);{
var G__26363 = cljs.core.chunk_rest(seq__26343__$1);
var G__26364 = c__4148__auto__;
var G__26365 = cljs.core.count(c__4148__auto__);
var G__26366 = 0;
seq__26343 = G__26363;
chunk__26344 = G__26364;
count__26345 = G__26365;
i__26346 = G__26366;
continue;
}
} else
{var node = cljs.core.first(seq__26343__$1);goog.events.removeAll(node,type__$1);
{
var G__26367 = cljs.core.next(seq__26343__$1);
var G__26368 = null;
var G__26369 = 0;
var G__26370 = 0;
seq__26343 = G__26367;
chunk__26344 = G__26368;
count__26345 = G__26369;
i__26346 = G__26370;
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
var G__26371 = parent;
var G__26372 = cljs.core.cons(parent,so_far);
n = G__26371;
so_far = G__26372;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26381_26389 = cljs.core.seq(ancestors);var chunk__26382_26390 = null;var count__26383_26391 = 0;var i__26384_26392 = 0;while(true){
if((i__26384_26392 < count__26383_26391))
{var n_26393 = chunk__26382_26390.cljs$core$IIndexed$_nth$arity$2(null,i__26384_26392);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26393;
goog.events.fireListeners(n_26393,evt.type,true,evt);
}
{
var G__26394 = seq__26381_26389;
var G__26395 = chunk__26382_26390;
var G__26396 = count__26383_26391;
var G__26397 = (i__26384_26392 + 1);
seq__26381_26389 = G__26394;
chunk__26382_26390 = G__26395;
count__26383_26391 = G__26396;
i__26384_26392 = G__26397;
continue;
}
} else
{var temp__4092__auto___26398 = cljs.core.seq(seq__26381_26389);if(temp__4092__auto___26398)
{var seq__26381_26399__$1 = temp__4092__auto___26398;if(cljs.core.chunked_seq_QMARK_(seq__26381_26399__$1))
{var c__4148__auto___26400 = cljs.core.chunk_first(seq__26381_26399__$1);{
var G__26401 = cljs.core.chunk_rest(seq__26381_26399__$1);
var G__26402 = c__4148__auto___26400;
var G__26403 = cljs.core.count(c__4148__auto___26400);
var G__26404 = 0;
seq__26381_26389 = G__26401;
chunk__26382_26390 = G__26402;
count__26383_26391 = G__26403;
i__26384_26392 = G__26404;
continue;
}
} else
{var n_26405 = cljs.core.first(seq__26381_26399__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26405;
goog.events.fireListeners(n_26405,evt.type,true,evt);
}
{
var G__26406 = cljs.core.next(seq__26381_26399__$1);
var G__26407 = null;
var G__26408 = 0;
var G__26409 = 0;
seq__26381_26389 = G__26406;
chunk__26382_26390 = G__26407;
count__26383_26391 = G__26408;
i__26384_26392 = G__26409;
continue;
}
}
} else
{}
}
break;
}
var seq__26385_26410 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26386_26411 = null;var count__26387_26412 = 0;var i__26388_26413 = 0;while(true){
if((i__26388_26413 < count__26387_26412))
{var n_26414 = chunk__26386_26411.cljs$core$IIndexed$_nth$arity$2(null,i__26388_26413);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26414;
goog.events.fireListeners(n_26414,evt.type,false,evt);
}
{
var G__26415 = seq__26385_26410;
var G__26416 = chunk__26386_26411;
var G__26417 = count__26387_26412;
var G__26418 = (i__26388_26413 + 1);
seq__26385_26410 = G__26415;
chunk__26386_26411 = G__26416;
count__26387_26412 = G__26417;
i__26388_26413 = G__26418;
continue;
}
} else
{var temp__4092__auto___26419 = cljs.core.seq(seq__26385_26410);if(temp__4092__auto___26419)
{var seq__26385_26420__$1 = temp__4092__auto___26419;if(cljs.core.chunked_seq_QMARK_(seq__26385_26420__$1))
{var c__4148__auto___26421 = cljs.core.chunk_first(seq__26385_26420__$1);{
var G__26422 = cljs.core.chunk_rest(seq__26385_26420__$1);
var G__26423 = c__4148__auto___26421;
var G__26424 = cljs.core.count(c__4148__auto___26421);
var G__26425 = 0;
seq__26385_26410 = G__26422;
chunk__26386_26411 = G__26423;
count__26387_26412 = G__26424;
i__26388_26413 = G__26425;
continue;
}
} else
{var n_26426 = cljs.core.first(seq__26385_26420__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26426;
goog.events.fireListeners(n_26426,evt.type,false,evt);
}
{
var G__26427 = cljs.core.next(seq__26385_26420__$1);
var G__26428 = null;
var G__26429 = 0;
var G__26430 = 0;
seq__26385_26410 = G__26427;
chunk__26386_26411 = G__26428;
count__26387_26412 = G__26429;
i__26388_26413 = G__26430;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26437_26443 = cljs.core.seq(evt_map);var chunk__26438_26444 = null;var count__26439_26445 = 0;var i__26440_26446 = 0;while(true){
if((i__26440_26446 < count__26439_26445))
{var vec__26441_26447 = chunk__26438_26444.cljs$core$IIndexed$_nth$arity$2(null,i__26440_26446);var k_26448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441_26447,0,null);var v_26449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26441_26447,1,null);(evt[k_26448] = v_26449);
{
var G__26450 = seq__26437_26443;
var G__26451 = chunk__26438_26444;
var G__26452 = count__26439_26445;
var G__26453 = (i__26440_26446 + 1);
seq__26437_26443 = G__26450;
chunk__26438_26444 = G__26451;
count__26439_26445 = G__26452;
i__26440_26446 = G__26453;
continue;
}
} else
{var temp__4092__auto___26454 = cljs.core.seq(seq__26437_26443);if(temp__4092__auto___26454)
{var seq__26437_26455__$1 = temp__4092__auto___26454;if(cljs.core.chunked_seq_QMARK_(seq__26437_26455__$1))
{var c__4148__auto___26456 = cljs.core.chunk_first(seq__26437_26455__$1);{
var G__26457 = cljs.core.chunk_rest(seq__26437_26455__$1);
var G__26458 = c__4148__auto___26456;
var G__26459 = cljs.core.count(c__4148__auto___26456);
var G__26460 = 0;
seq__26437_26443 = G__26457;
chunk__26438_26444 = G__26458;
count__26439_26445 = G__26459;
i__26440_26446 = G__26460;
continue;
}
} else
{var vec__26442_26461 = cljs.core.first(seq__26437_26455__$1);var k_26462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442_26461,0,null);var v_26463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26442_26461,1,null);(evt[k_26462] = v_26463);
{
var G__26464 = cljs.core.next(seq__26437_26455__$1);
var G__26465 = null;
var G__26466 = 0;
var G__26467 = 0;
seq__26437_26443 = G__26464;
chunk__26438_26444 = G__26465;
count__26439_26445 = G__26466;
i__26440_26446 = G__26467;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26468_SHARP_){return goog.events.getListeners(p1__26468_SHARP_,type__$1,false);
}),domina.nodes(content));
});
