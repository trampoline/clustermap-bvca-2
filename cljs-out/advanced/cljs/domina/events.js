// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39337 = {};return obj39337;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39341 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39341 = (function (evt,f,create_listener_function,meta39342){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39342 = meta39342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39341.cljs$lang$type = true;
domina.events.t39341.cljs$lang$ctorStr = "domina.events/t39341";
domina.events.t39341.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39341");
});
domina.events.t39341.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39341.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39341.prototype.domina$events$Event$ = true;
domina.events.t39341.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39341.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39341.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39341.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39341.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39341.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39343){var self__ = this;
var _39343__$1 = this;return self__.meta39342;
});
domina.events.t39341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39343,meta39342__$1){var self__ = this;
var _39343__$1 = this;return (new domina.events.t39341(self__.evt,self__.f,self__.create_listener_function,meta39342__$1));
});
domina.events.__GT_t39341 = (function __GT_t39341(evt__$1,f__$1,create_listener_function__$1,meta39342){return (new domina.events.t39341(evt__$1,f__$1,create_listener_function__$1,meta39342));
});
}
return (new domina.events.t39341(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39341 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39341 = (function (evt,f,create_listener_function,meta39342){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39342 = meta39342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39341.cljs$lang$type = true;
domina.events.t39341.cljs$lang$ctorStr = "domina.events/t39341";
domina.events.t39341.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39341");
});
domina.events.t39341.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39341.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39341.prototype.domina$events$Event$ = true;
domina.events.t39341.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39341.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39341.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39341.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39341.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39341.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39343){var self__ = this;
var _39343__$1 = this;return self__.meta39342;
});
domina.events.t39341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39343,meta39342__$1){var self__ = this;
var _39343__$1 = this;return (new domina.events.t39341(self__.evt,self__.f,self__.create_listener_function,meta39342__$1));
});
domina.events.__GT_t39341 = (function __GT_t39341(evt__$1,f__$1,create_listener_function__$1,meta39342){return (new domina.events.t39341(evt__$1,f__$1,create_listener_function__$1,meta39342));
});
}
return (new domina.events.t39341(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39348(s__39349){return (new cljs.core.LazySeq(null,(function (){var s__39349__$1 = s__39349;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39349__$1);if(temp__4092__auto__)
{var s__39349__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39349__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39349__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39351 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39350 = 0;while(true){
if((i__39350 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39350);cljs.core.chunk_append(b__39351,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39352 = (i__39350 + 1);
i__39350 = G__39352;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39351),iter__39348(cljs.core.chunk_rest(s__39349__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39351),null);
}
} else
{var node = cljs.core.first(s__39349__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39348(cljs.core.rest(s__39349__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__39361 = cljs.core.seq(domina.nodes(content));var chunk__39362 = null;var count__39363 = 0;var i__39364 = 0;while(true){
if((i__39364 < count__39363))
{var node = chunk__39362.cljs$core$IIndexed$_nth$arity$2(null,i__39364);goog.events.removeAll(node);
{
var G__39369 = seq__39361;
var G__39370 = chunk__39362;
var G__39371 = count__39363;
var G__39372 = (i__39364 + 1);
seq__39361 = G__39369;
chunk__39362 = G__39370;
count__39363 = G__39371;
i__39364 = G__39372;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39361);if(temp__4092__auto__)
{var seq__39361__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39361__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39361__$1);{
var G__39373 = cljs.core.chunk_rest(seq__39361__$1);
var G__39374 = c__4189__auto__;
var G__39375 = cljs.core.count(c__4189__auto__);
var G__39376 = 0;
seq__39361 = G__39373;
chunk__39362 = G__39374;
count__39363 = G__39375;
i__39364 = G__39376;
continue;
}
} else
{var node = cljs.core.first(seq__39361__$1);goog.events.removeAll(node);
{
var G__39377 = cljs.core.next(seq__39361__$1);
var G__39378 = null;
var G__39379 = 0;
var G__39380 = 0;
seq__39361 = G__39377;
chunk__39362 = G__39378;
count__39363 = G__39379;
i__39364 = G__39380;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39365 = cljs.core.seq(domina.nodes(content));var chunk__39366 = null;var count__39367 = 0;var i__39368 = 0;while(true){
if((i__39368 < count__39367))
{var node = chunk__39366.cljs$core$IIndexed$_nth$arity$2(null,i__39368);goog.events.removeAll(node,type__$1);
{
var G__39381 = seq__39365;
var G__39382 = chunk__39366;
var G__39383 = count__39367;
var G__39384 = (i__39368 + 1);
seq__39365 = G__39381;
chunk__39366 = G__39382;
count__39367 = G__39383;
i__39368 = G__39384;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39365);if(temp__4092__auto__)
{var seq__39365__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39365__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39365__$1);{
var G__39385 = cljs.core.chunk_rest(seq__39365__$1);
var G__39386 = c__4189__auto__;
var G__39387 = cljs.core.count(c__4189__auto__);
var G__39388 = 0;
seq__39365 = G__39385;
chunk__39366 = G__39386;
count__39367 = G__39387;
i__39368 = G__39388;
continue;
}
} else
{var node = cljs.core.first(seq__39365__$1);goog.events.removeAll(node,type__$1);
{
var G__39389 = cljs.core.next(seq__39365__$1);
var G__39390 = null;
var G__39391 = 0;
var G__39392 = 0;
seq__39365 = G__39389;
chunk__39366 = G__39390;
count__39367 = G__39391;
i__39368 = G__39392;
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
var G__39393 = parent;
var G__39394 = cljs.core.cons(parent,so_far);
n = G__39393;
so_far = G__39394;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39403_39411 = cljs.core.seq(ancestors);var chunk__39404_39412 = null;var count__39405_39413 = 0;var i__39406_39414 = 0;while(true){
if((i__39406_39414 < count__39405_39413))
{var n_39415 = chunk__39404_39412.cljs$core$IIndexed$_nth$arity$2(null,i__39406_39414);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39415;
goog.events.fireListeners(n_39415,evt.type,true,evt);
}
{
var G__39416 = seq__39403_39411;
var G__39417 = chunk__39404_39412;
var G__39418 = count__39405_39413;
var G__39419 = (i__39406_39414 + 1);
seq__39403_39411 = G__39416;
chunk__39404_39412 = G__39417;
count__39405_39413 = G__39418;
i__39406_39414 = G__39419;
continue;
}
} else
{var temp__4092__auto___39420 = cljs.core.seq(seq__39403_39411);if(temp__4092__auto___39420)
{var seq__39403_39421__$1 = temp__4092__auto___39420;if(cljs.core.chunked_seq_QMARK_(seq__39403_39421__$1))
{var c__4189__auto___39422 = cljs.core.chunk_first(seq__39403_39421__$1);{
var G__39423 = cljs.core.chunk_rest(seq__39403_39421__$1);
var G__39424 = c__4189__auto___39422;
var G__39425 = cljs.core.count(c__4189__auto___39422);
var G__39426 = 0;
seq__39403_39411 = G__39423;
chunk__39404_39412 = G__39424;
count__39405_39413 = G__39425;
i__39406_39414 = G__39426;
continue;
}
} else
{var n_39427 = cljs.core.first(seq__39403_39421__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39427;
goog.events.fireListeners(n_39427,evt.type,true,evt);
}
{
var G__39428 = cljs.core.next(seq__39403_39421__$1);
var G__39429 = null;
var G__39430 = 0;
var G__39431 = 0;
seq__39403_39411 = G__39428;
chunk__39404_39412 = G__39429;
count__39405_39413 = G__39430;
i__39406_39414 = G__39431;
continue;
}
}
} else
{}
}
break;
}
var seq__39407_39432 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39408_39433 = null;var count__39409_39434 = 0;var i__39410_39435 = 0;while(true){
if((i__39410_39435 < count__39409_39434))
{var n_39436 = chunk__39408_39433.cljs$core$IIndexed$_nth$arity$2(null,i__39410_39435);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39436;
goog.events.fireListeners(n_39436,evt.type,false,evt);
}
{
var G__39437 = seq__39407_39432;
var G__39438 = chunk__39408_39433;
var G__39439 = count__39409_39434;
var G__39440 = (i__39410_39435 + 1);
seq__39407_39432 = G__39437;
chunk__39408_39433 = G__39438;
count__39409_39434 = G__39439;
i__39410_39435 = G__39440;
continue;
}
} else
{var temp__4092__auto___39441 = cljs.core.seq(seq__39407_39432);if(temp__4092__auto___39441)
{var seq__39407_39442__$1 = temp__4092__auto___39441;if(cljs.core.chunked_seq_QMARK_(seq__39407_39442__$1))
{var c__4189__auto___39443 = cljs.core.chunk_first(seq__39407_39442__$1);{
var G__39444 = cljs.core.chunk_rest(seq__39407_39442__$1);
var G__39445 = c__4189__auto___39443;
var G__39446 = cljs.core.count(c__4189__auto___39443);
var G__39447 = 0;
seq__39407_39432 = G__39444;
chunk__39408_39433 = G__39445;
count__39409_39434 = G__39446;
i__39410_39435 = G__39447;
continue;
}
} else
{var n_39448 = cljs.core.first(seq__39407_39442__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39448;
goog.events.fireListeners(n_39448,evt.type,false,evt);
}
{
var G__39449 = cljs.core.next(seq__39407_39442__$1);
var G__39450 = null;
var G__39451 = 0;
var G__39452 = 0;
seq__39407_39432 = G__39449;
chunk__39408_39433 = G__39450;
count__39409_39434 = G__39451;
i__39410_39435 = G__39452;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39459_39465 = cljs.core.seq(evt_map);var chunk__39460_39466 = null;var count__39461_39467 = 0;var i__39462_39468 = 0;while(true){
if((i__39462_39468 < count__39461_39467))
{var vec__39463_39469 = chunk__39460_39466.cljs$core$IIndexed$_nth$arity$2(null,i__39462_39468);var k_39470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39463_39469,0,null);var v_39471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39463_39469,1,null);(evt[k_39470] = v_39471);
{
var G__39472 = seq__39459_39465;
var G__39473 = chunk__39460_39466;
var G__39474 = count__39461_39467;
var G__39475 = (i__39462_39468 + 1);
seq__39459_39465 = G__39472;
chunk__39460_39466 = G__39473;
count__39461_39467 = G__39474;
i__39462_39468 = G__39475;
continue;
}
} else
{var temp__4092__auto___39476 = cljs.core.seq(seq__39459_39465);if(temp__4092__auto___39476)
{var seq__39459_39477__$1 = temp__4092__auto___39476;if(cljs.core.chunked_seq_QMARK_(seq__39459_39477__$1))
{var c__4189__auto___39478 = cljs.core.chunk_first(seq__39459_39477__$1);{
var G__39479 = cljs.core.chunk_rest(seq__39459_39477__$1);
var G__39480 = c__4189__auto___39478;
var G__39481 = cljs.core.count(c__4189__auto___39478);
var G__39482 = 0;
seq__39459_39465 = G__39479;
chunk__39460_39466 = G__39480;
count__39461_39467 = G__39481;
i__39462_39468 = G__39482;
continue;
}
} else
{var vec__39464_39483 = cljs.core.first(seq__39459_39477__$1);var k_39484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39464_39483,0,null);var v_39485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39464_39483,1,null);(evt[k_39484] = v_39485);
{
var G__39486 = cljs.core.next(seq__39459_39477__$1);
var G__39487 = null;
var G__39488 = 0;
var G__39489 = 0;
seq__39459_39465 = G__39486;
chunk__39460_39466 = G__39487;
count__39461_39467 = G__39488;
i__39462_39468 = G__39489;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39490_SHARP_){return goog.events.getListeners(p1__39490_SHARP_,type__$1,false);
}),domina.nodes(content));
});
