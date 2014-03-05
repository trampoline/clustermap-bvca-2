// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39349 = {};return obj39349;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39353 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39353 = (function (evt,f,create_listener_function,meta39354){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39354 = meta39354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39353.cljs$lang$type = true;
domina.events.t39353.cljs$lang$ctorStr = "domina.events/t39353";
domina.events.t39353.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39353");
});
domina.events.t39353.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39353.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39353.prototype.domina$events$Event$ = true;
domina.events.t39353.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39353.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39353.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39353.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39353.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39353.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39355){var self__ = this;
var _39355__$1 = this;return self__.meta39354;
});
domina.events.t39353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39355,meta39354__$1){var self__ = this;
var _39355__$1 = this;return (new domina.events.t39353(self__.evt,self__.f,self__.create_listener_function,meta39354__$1));
});
domina.events.__GT_t39353 = (function __GT_t39353(evt__$1,f__$1,create_listener_function__$1,meta39354){return (new domina.events.t39353(evt__$1,f__$1,create_listener_function__$1,meta39354));
});
}
return (new domina.events.t39353(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39353 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39353 = (function (evt,f,create_listener_function,meta39354){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39354 = meta39354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39353.cljs$lang$type = true;
domina.events.t39353.cljs$lang$ctorStr = "domina.events/t39353";
domina.events.t39353.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39353");
});
domina.events.t39353.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39353.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39353.prototype.domina$events$Event$ = true;
domina.events.t39353.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39353.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39353.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39353.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39353.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39353.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39355){var self__ = this;
var _39355__$1 = this;return self__.meta39354;
});
domina.events.t39353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39355,meta39354__$1){var self__ = this;
var _39355__$1 = this;return (new domina.events.t39353(self__.evt,self__.f,self__.create_listener_function,meta39354__$1));
});
domina.events.__GT_t39353 = (function __GT_t39353(evt__$1,f__$1,create_listener_function__$1,meta39354){return (new domina.events.t39353(evt__$1,f__$1,create_listener_function__$1,meta39354));
});
}
return (new domina.events.t39353(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39360(s__39361){return (new cljs.core.LazySeq(null,(function (){var s__39361__$1 = s__39361;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39361__$1);if(temp__4092__auto__)
{var s__39361__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39361__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39361__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39363 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39362 = 0;while(true){
if((i__39362 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39362);cljs.core.chunk_append(b__39363,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39364 = (i__39362 + 1);
i__39362 = G__39364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39363),iter__39360(cljs.core.chunk_rest(s__39361__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39363),null);
}
} else
{var node = cljs.core.first(s__39361__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39360(cljs.core.rest(s__39361__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__39373 = cljs.core.seq(domina.nodes(content));var chunk__39374 = null;var count__39375 = 0;var i__39376 = 0;while(true){
if((i__39376 < count__39375))
{var node = chunk__39374.cljs$core$IIndexed$_nth$arity$2(null,i__39376);goog.events.removeAll(node);
{
var G__39381 = seq__39373;
var G__39382 = chunk__39374;
var G__39383 = count__39375;
var G__39384 = (i__39376 + 1);
seq__39373 = G__39381;
chunk__39374 = G__39382;
count__39375 = G__39383;
i__39376 = G__39384;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39373);if(temp__4092__auto__)
{var seq__39373__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39373__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39373__$1);{
var G__39385 = cljs.core.chunk_rest(seq__39373__$1);
var G__39386 = c__4189__auto__;
var G__39387 = cljs.core.count(c__4189__auto__);
var G__39388 = 0;
seq__39373 = G__39385;
chunk__39374 = G__39386;
count__39375 = G__39387;
i__39376 = G__39388;
continue;
}
} else
{var node = cljs.core.first(seq__39373__$1);goog.events.removeAll(node);
{
var G__39389 = cljs.core.next(seq__39373__$1);
var G__39390 = null;
var G__39391 = 0;
var G__39392 = 0;
seq__39373 = G__39389;
chunk__39374 = G__39390;
count__39375 = G__39391;
i__39376 = G__39392;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39377 = cljs.core.seq(domina.nodes(content));var chunk__39378 = null;var count__39379 = 0;var i__39380 = 0;while(true){
if((i__39380 < count__39379))
{var node = chunk__39378.cljs$core$IIndexed$_nth$arity$2(null,i__39380);goog.events.removeAll(node,type__$1);
{
var G__39393 = seq__39377;
var G__39394 = chunk__39378;
var G__39395 = count__39379;
var G__39396 = (i__39380 + 1);
seq__39377 = G__39393;
chunk__39378 = G__39394;
count__39379 = G__39395;
i__39380 = G__39396;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39377);if(temp__4092__auto__)
{var seq__39377__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39377__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39377__$1);{
var G__39397 = cljs.core.chunk_rest(seq__39377__$1);
var G__39398 = c__4189__auto__;
var G__39399 = cljs.core.count(c__4189__auto__);
var G__39400 = 0;
seq__39377 = G__39397;
chunk__39378 = G__39398;
count__39379 = G__39399;
i__39380 = G__39400;
continue;
}
} else
{var node = cljs.core.first(seq__39377__$1);goog.events.removeAll(node,type__$1);
{
var G__39401 = cljs.core.next(seq__39377__$1);
var G__39402 = null;
var G__39403 = 0;
var G__39404 = 0;
seq__39377 = G__39401;
chunk__39378 = G__39402;
count__39379 = G__39403;
i__39380 = G__39404;
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
var G__39405 = parent;
var G__39406 = cljs.core.cons(parent,so_far);
n = G__39405;
so_far = G__39406;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39415_39423 = cljs.core.seq(ancestors);var chunk__39416_39424 = null;var count__39417_39425 = 0;var i__39418_39426 = 0;while(true){
if((i__39418_39426 < count__39417_39425))
{var n_39427 = chunk__39416_39424.cljs$core$IIndexed$_nth$arity$2(null,i__39418_39426);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39427;
goog.events.fireListeners(n_39427,evt.type,true,evt);
}
{
var G__39428 = seq__39415_39423;
var G__39429 = chunk__39416_39424;
var G__39430 = count__39417_39425;
var G__39431 = (i__39418_39426 + 1);
seq__39415_39423 = G__39428;
chunk__39416_39424 = G__39429;
count__39417_39425 = G__39430;
i__39418_39426 = G__39431;
continue;
}
} else
{var temp__4092__auto___39432 = cljs.core.seq(seq__39415_39423);if(temp__4092__auto___39432)
{var seq__39415_39433__$1 = temp__4092__auto___39432;if(cljs.core.chunked_seq_QMARK_(seq__39415_39433__$1))
{var c__4189__auto___39434 = cljs.core.chunk_first(seq__39415_39433__$1);{
var G__39435 = cljs.core.chunk_rest(seq__39415_39433__$1);
var G__39436 = c__4189__auto___39434;
var G__39437 = cljs.core.count(c__4189__auto___39434);
var G__39438 = 0;
seq__39415_39423 = G__39435;
chunk__39416_39424 = G__39436;
count__39417_39425 = G__39437;
i__39418_39426 = G__39438;
continue;
}
} else
{var n_39439 = cljs.core.first(seq__39415_39433__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39439;
goog.events.fireListeners(n_39439,evt.type,true,evt);
}
{
var G__39440 = cljs.core.next(seq__39415_39433__$1);
var G__39441 = null;
var G__39442 = 0;
var G__39443 = 0;
seq__39415_39423 = G__39440;
chunk__39416_39424 = G__39441;
count__39417_39425 = G__39442;
i__39418_39426 = G__39443;
continue;
}
}
} else
{}
}
break;
}
var seq__39419_39444 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39420_39445 = null;var count__39421_39446 = 0;var i__39422_39447 = 0;while(true){
if((i__39422_39447 < count__39421_39446))
{var n_39448 = chunk__39420_39445.cljs$core$IIndexed$_nth$arity$2(null,i__39422_39447);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39448;
goog.events.fireListeners(n_39448,evt.type,false,evt);
}
{
var G__39449 = seq__39419_39444;
var G__39450 = chunk__39420_39445;
var G__39451 = count__39421_39446;
var G__39452 = (i__39422_39447 + 1);
seq__39419_39444 = G__39449;
chunk__39420_39445 = G__39450;
count__39421_39446 = G__39451;
i__39422_39447 = G__39452;
continue;
}
} else
{var temp__4092__auto___39453 = cljs.core.seq(seq__39419_39444);if(temp__4092__auto___39453)
{var seq__39419_39454__$1 = temp__4092__auto___39453;if(cljs.core.chunked_seq_QMARK_(seq__39419_39454__$1))
{var c__4189__auto___39455 = cljs.core.chunk_first(seq__39419_39454__$1);{
var G__39456 = cljs.core.chunk_rest(seq__39419_39454__$1);
var G__39457 = c__4189__auto___39455;
var G__39458 = cljs.core.count(c__4189__auto___39455);
var G__39459 = 0;
seq__39419_39444 = G__39456;
chunk__39420_39445 = G__39457;
count__39421_39446 = G__39458;
i__39422_39447 = G__39459;
continue;
}
} else
{var n_39460 = cljs.core.first(seq__39419_39454__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39460;
goog.events.fireListeners(n_39460,evt.type,false,evt);
}
{
var G__39461 = cljs.core.next(seq__39419_39454__$1);
var G__39462 = null;
var G__39463 = 0;
var G__39464 = 0;
seq__39419_39444 = G__39461;
chunk__39420_39445 = G__39462;
count__39421_39446 = G__39463;
i__39422_39447 = G__39464;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39471_39477 = cljs.core.seq(evt_map);var chunk__39472_39478 = null;var count__39473_39479 = 0;var i__39474_39480 = 0;while(true){
if((i__39474_39480 < count__39473_39479))
{var vec__39475_39481 = chunk__39472_39478.cljs$core$IIndexed$_nth$arity$2(null,i__39474_39480);var k_39482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39475_39481,0,null);var v_39483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39475_39481,1,null);(evt[k_39482] = v_39483);
{
var G__39484 = seq__39471_39477;
var G__39485 = chunk__39472_39478;
var G__39486 = count__39473_39479;
var G__39487 = (i__39474_39480 + 1);
seq__39471_39477 = G__39484;
chunk__39472_39478 = G__39485;
count__39473_39479 = G__39486;
i__39474_39480 = G__39487;
continue;
}
} else
{var temp__4092__auto___39488 = cljs.core.seq(seq__39471_39477);if(temp__4092__auto___39488)
{var seq__39471_39489__$1 = temp__4092__auto___39488;if(cljs.core.chunked_seq_QMARK_(seq__39471_39489__$1))
{var c__4189__auto___39490 = cljs.core.chunk_first(seq__39471_39489__$1);{
var G__39491 = cljs.core.chunk_rest(seq__39471_39489__$1);
var G__39492 = c__4189__auto___39490;
var G__39493 = cljs.core.count(c__4189__auto___39490);
var G__39494 = 0;
seq__39471_39477 = G__39491;
chunk__39472_39478 = G__39492;
count__39473_39479 = G__39493;
i__39474_39480 = G__39494;
continue;
}
} else
{var vec__39476_39495 = cljs.core.first(seq__39471_39489__$1);var k_39496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39476_39495,0,null);var v_39497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39476_39495,1,null);(evt[k_39496] = v_39497);
{
var G__39498 = cljs.core.next(seq__39471_39489__$1);
var G__39499 = null;
var G__39500 = 0;
var G__39501 = 0;
seq__39471_39477 = G__39498;
chunk__39472_39478 = G__39499;
count__39473_39479 = G__39500;
i__39474_39480 = G__39501;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39502_SHARP_){return goog.events.getListeners(p1__39502_SHARP_,type__$1,false);
}),domina.nodes(content));
});
