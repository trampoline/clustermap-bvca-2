// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26345 = {};return obj26345;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26349 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26349 = (function (evt,f,create_listener_function,meta26350){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26350 = meta26350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26349.cljs$lang$type = true;
domina.events.t26349.cljs$lang$ctorStr = "domina.events/t26349";
domina.events.t26349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26349");
});
domina.events.t26349.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26349.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26349.prototype.domina$events$Event$ = true;
domina.events.t26349.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26349.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26349.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26349.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26349.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26349.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26351){var self__ = this;
var _26351__$1 = this;return self__.meta26350;
});
domina.events.t26349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26351,meta26350__$1){var self__ = this;
var _26351__$1 = this;return (new domina.events.t26349(self__.evt,self__.f,self__.create_listener_function,meta26350__$1));
});
domina.events.__GT_t26349 = (function __GT_t26349(evt__$1,f__$1,create_listener_function__$1,meta26350){return (new domina.events.t26349(evt__$1,f__$1,create_listener_function__$1,meta26350));
});
}
return (new domina.events.t26349(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26349 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26349 = (function (evt,f,create_listener_function,meta26350){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26350 = meta26350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26349.cljs$lang$type = true;
domina.events.t26349.cljs$lang$ctorStr = "domina.events/t26349";
domina.events.t26349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26349");
});
domina.events.t26349.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26349.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26349.prototype.domina$events$Event$ = true;
domina.events.t26349.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26349.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26349.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26349.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26349.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26349.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26351){var self__ = this;
var _26351__$1 = this;return self__.meta26350;
});
domina.events.t26349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26351,meta26350__$1){var self__ = this;
var _26351__$1 = this;return (new domina.events.t26349(self__.evt,self__.f,self__.create_listener_function,meta26350__$1));
});
domina.events.__GT_t26349 = (function __GT_t26349(evt__$1,f__$1,create_listener_function__$1,meta26350){return (new domina.events.t26349(evt__$1,f__$1,create_listener_function__$1,meta26350));
});
}
return (new domina.events.t26349(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26356(s__26357){return (new cljs.core.LazySeq(null,(function (){var s__26357__$1 = s__26357;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26357__$1);if(temp__4092__auto__)
{var s__26357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26357__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26357__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26359 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26358 = 0;while(true){
if((i__26358 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26358);cljs.core.chunk_append(b__26359,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26360 = (i__26358 + 1);
i__26358 = G__26360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26359),iter__26356(cljs.core.chunk_rest(s__26357__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26359),null);
}
} else
{var node = cljs.core.first(s__26357__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26356(cljs.core.rest(s__26357__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26369 = cljs.core.seq(domina.nodes(content));var chunk__26370 = null;var count__26371 = 0;var i__26372 = 0;while(true){
if((i__26372 < count__26371))
{var node = chunk__26370.cljs$core$IIndexed$_nth$arity$2(null,i__26372);goog.events.removeAll(node);
{
var G__26377 = seq__26369;
var G__26378 = chunk__26370;
var G__26379 = count__26371;
var G__26380 = (i__26372 + 1);
seq__26369 = G__26377;
chunk__26370 = G__26378;
count__26371 = G__26379;
i__26372 = G__26380;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26369);if(temp__4092__auto__)
{var seq__26369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26369__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26369__$1);{
var G__26381 = cljs.core.chunk_rest(seq__26369__$1);
var G__26382 = c__4148__auto__;
var G__26383 = cljs.core.count(c__4148__auto__);
var G__26384 = 0;
seq__26369 = G__26381;
chunk__26370 = G__26382;
count__26371 = G__26383;
i__26372 = G__26384;
continue;
}
} else
{var node = cljs.core.first(seq__26369__$1);goog.events.removeAll(node);
{
var G__26385 = cljs.core.next(seq__26369__$1);
var G__26386 = null;
var G__26387 = 0;
var G__26388 = 0;
seq__26369 = G__26385;
chunk__26370 = G__26386;
count__26371 = G__26387;
i__26372 = G__26388;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26373 = cljs.core.seq(domina.nodes(content));var chunk__26374 = null;var count__26375 = 0;var i__26376 = 0;while(true){
if((i__26376 < count__26375))
{var node = chunk__26374.cljs$core$IIndexed$_nth$arity$2(null,i__26376);goog.events.removeAll(node,type__$1);
{
var G__26389 = seq__26373;
var G__26390 = chunk__26374;
var G__26391 = count__26375;
var G__26392 = (i__26376 + 1);
seq__26373 = G__26389;
chunk__26374 = G__26390;
count__26375 = G__26391;
i__26376 = G__26392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26373);if(temp__4092__auto__)
{var seq__26373__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26373__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26373__$1);{
var G__26393 = cljs.core.chunk_rest(seq__26373__$1);
var G__26394 = c__4148__auto__;
var G__26395 = cljs.core.count(c__4148__auto__);
var G__26396 = 0;
seq__26373 = G__26393;
chunk__26374 = G__26394;
count__26375 = G__26395;
i__26376 = G__26396;
continue;
}
} else
{var node = cljs.core.first(seq__26373__$1);goog.events.removeAll(node,type__$1);
{
var G__26397 = cljs.core.next(seq__26373__$1);
var G__26398 = null;
var G__26399 = 0;
var G__26400 = 0;
seq__26373 = G__26397;
chunk__26374 = G__26398;
count__26375 = G__26399;
i__26376 = G__26400;
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
var G__26401 = parent;
var G__26402 = cljs.core.cons(parent,so_far);
n = G__26401;
so_far = G__26402;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26411_26419 = cljs.core.seq(ancestors);var chunk__26412_26420 = null;var count__26413_26421 = 0;var i__26414_26422 = 0;while(true){
if((i__26414_26422 < count__26413_26421))
{var n_26423 = chunk__26412_26420.cljs$core$IIndexed$_nth$arity$2(null,i__26414_26422);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26423;
goog.events.fireListeners(n_26423,evt.type,true,evt);
}
{
var G__26424 = seq__26411_26419;
var G__26425 = chunk__26412_26420;
var G__26426 = count__26413_26421;
var G__26427 = (i__26414_26422 + 1);
seq__26411_26419 = G__26424;
chunk__26412_26420 = G__26425;
count__26413_26421 = G__26426;
i__26414_26422 = G__26427;
continue;
}
} else
{var temp__4092__auto___26428 = cljs.core.seq(seq__26411_26419);if(temp__4092__auto___26428)
{var seq__26411_26429__$1 = temp__4092__auto___26428;if(cljs.core.chunked_seq_QMARK_(seq__26411_26429__$1))
{var c__4148__auto___26430 = cljs.core.chunk_first(seq__26411_26429__$1);{
var G__26431 = cljs.core.chunk_rest(seq__26411_26429__$1);
var G__26432 = c__4148__auto___26430;
var G__26433 = cljs.core.count(c__4148__auto___26430);
var G__26434 = 0;
seq__26411_26419 = G__26431;
chunk__26412_26420 = G__26432;
count__26413_26421 = G__26433;
i__26414_26422 = G__26434;
continue;
}
} else
{var n_26435 = cljs.core.first(seq__26411_26429__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26435;
goog.events.fireListeners(n_26435,evt.type,true,evt);
}
{
var G__26436 = cljs.core.next(seq__26411_26429__$1);
var G__26437 = null;
var G__26438 = 0;
var G__26439 = 0;
seq__26411_26419 = G__26436;
chunk__26412_26420 = G__26437;
count__26413_26421 = G__26438;
i__26414_26422 = G__26439;
continue;
}
}
} else
{}
}
break;
}
var seq__26415_26440 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26416_26441 = null;var count__26417_26442 = 0;var i__26418_26443 = 0;while(true){
if((i__26418_26443 < count__26417_26442))
{var n_26444 = chunk__26416_26441.cljs$core$IIndexed$_nth$arity$2(null,i__26418_26443);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26444;
goog.events.fireListeners(n_26444,evt.type,false,evt);
}
{
var G__26445 = seq__26415_26440;
var G__26446 = chunk__26416_26441;
var G__26447 = count__26417_26442;
var G__26448 = (i__26418_26443 + 1);
seq__26415_26440 = G__26445;
chunk__26416_26441 = G__26446;
count__26417_26442 = G__26447;
i__26418_26443 = G__26448;
continue;
}
} else
{var temp__4092__auto___26449 = cljs.core.seq(seq__26415_26440);if(temp__4092__auto___26449)
{var seq__26415_26450__$1 = temp__4092__auto___26449;if(cljs.core.chunked_seq_QMARK_(seq__26415_26450__$1))
{var c__4148__auto___26451 = cljs.core.chunk_first(seq__26415_26450__$1);{
var G__26452 = cljs.core.chunk_rest(seq__26415_26450__$1);
var G__26453 = c__4148__auto___26451;
var G__26454 = cljs.core.count(c__4148__auto___26451);
var G__26455 = 0;
seq__26415_26440 = G__26452;
chunk__26416_26441 = G__26453;
count__26417_26442 = G__26454;
i__26418_26443 = G__26455;
continue;
}
} else
{var n_26456 = cljs.core.first(seq__26415_26450__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26456;
goog.events.fireListeners(n_26456,evt.type,false,evt);
}
{
var G__26457 = cljs.core.next(seq__26415_26450__$1);
var G__26458 = null;
var G__26459 = 0;
var G__26460 = 0;
seq__26415_26440 = G__26457;
chunk__26416_26441 = G__26458;
count__26417_26442 = G__26459;
i__26418_26443 = G__26460;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26467_26473 = cljs.core.seq(evt_map);var chunk__26468_26474 = null;var count__26469_26475 = 0;var i__26470_26476 = 0;while(true){
if((i__26470_26476 < count__26469_26475))
{var vec__26471_26477 = chunk__26468_26474.cljs$core$IIndexed$_nth$arity$2(null,i__26470_26476);var k_26478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471_26477,0,null);var v_26479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471_26477,1,null);(evt[k_26478] = v_26479);
{
var G__26480 = seq__26467_26473;
var G__26481 = chunk__26468_26474;
var G__26482 = count__26469_26475;
var G__26483 = (i__26470_26476 + 1);
seq__26467_26473 = G__26480;
chunk__26468_26474 = G__26481;
count__26469_26475 = G__26482;
i__26470_26476 = G__26483;
continue;
}
} else
{var temp__4092__auto___26484 = cljs.core.seq(seq__26467_26473);if(temp__4092__auto___26484)
{var seq__26467_26485__$1 = temp__4092__auto___26484;if(cljs.core.chunked_seq_QMARK_(seq__26467_26485__$1))
{var c__4148__auto___26486 = cljs.core.chunk_first(seq__26467_26485__$1);{
var G__26487 = cljs.core.chunk_rest(seq__26467_26485__$1);
var G__26488 = c__4148__auto___26486;
var G__26489 = cljs.core.count(c__4148__auto___26486);
var G__26490 = 0;
seq__26467_26473 = G__26487;
chunk__26468_26474 = G__26488;
count__26469_26475 = G__26489;
i__26470_26476 = G__26490;
continue;
}
} else
{var vec__26472_26491 = cljs.core.first(seq__26467_26485__$1);var k_26492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472_26491,0,null);var v_26493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472_26491,1,null);(evt[k_26492] = v_26493);
{
var G__26494 = cljs.core.next(seq__26467_26485__$1);
var G__26495 = null;
var G__26496 = 0;
var G__26497 = 0;
seq__26467_26473 = G__26494;
chunk__26468_26474 = G__26495;
count__26469_26475 = G__26496;
i__26470_26476 = G__26497;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26498_SHARP_){return goog.events.getListeners(p1__26498_SHARP_,type__$1,false);
}),domina.nodes(content));
});
