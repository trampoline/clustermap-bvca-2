// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16360 = {};return obj16360;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t16364 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16364 = (function (evt,f,create_listener_function,meta16365){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16365 = meta16365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16364.cljs$lang$type = true;
domina.events.t16364.cljs$lang$ctorStr = "domina.events/t16364";
domina.events.t16364.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t16364");
});
domina.events.t16364.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t16364.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16364.prototype.domina$events$Event$ = true;
domina.events.t16364.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16364.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16364.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16364.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16364.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16364.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16366){var self__ = this;
var _16366__$1 = this;return self__.meta16365;
});
domina.events.t16364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16366,meta16365__$1){var self__ = this;
var _16366__$1 = this;return (new domina.events.t16364(self__.evt,self__.f,self__.create_listener_function,meta16365__$1));
});
domina.events.__GT_t16364 = (function __GT_t16364(evt__$1,f__$1,create_listener_function__$1,meta16365){return (new domina.events.t16364(evt__$1,f__$1,create_listener_function__$1,meta16365));
});
}
return (new domina.events.t16364(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t16364 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16364 = (function (evt,f,create_listener_function,meta16365){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16365 = meta16365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16364.cljs$lang$type = true;
domina.events.t16364.cljs$lang$ctorStr = "domina.events/t16364";
domina.events.t16364.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t16364");
});
domina.events.t16364.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t16364.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16364.prototype.domina$events$Event$ = true;
domina.events.t16364.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16364.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16364.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16364.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16364.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16364.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16366){var self__ = this;
var _16366__$1 = this;return self__.meta16365;
});
domina.events.t16364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16366,meta16365__$1){var self__ = this;
var _16366__$1 = this;return (new domina.events.t16364(self__.evt,self__.f,self__.create_listener_function,meta16365__$1));
});
domina.events.__GT_t16364 = (function __GT_t16364(evt__$1,f__$1,create_listener_function__$1,meta16365){return (new domina.events.t16364(evt__$1,f__$1,create_listener_function__$1,meta16365));
});
}
return (new domina.events.t16364(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__16371(s__16372){return (new cljs.core.LazySeq(null,(function (){var s__16372__$1 = s__16372;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16372__$1);if(temp__4092__auto__)
{var s__16372__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16372__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16372__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16374 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16373 = 0;while(true){
if((i__16373 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16373);cljs.core.chunk_append(b__16374,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16375 = (i__16373 + 1);
i__16373 = G__16375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16374),iter__16371(cljs.core.chunk_rest(s__16372__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16374),null);
}
} else
{var node = cljs.core.first(s__16372__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16371(cljs.core.rest(s__16372__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16384 = cljs.core.seq(domina.nodes(content));var chunk__16385 = null;var count__16386 = 0;var i__16387 = 0;while(true){
if((i__16387 < count__16386))
{var node = chunk__16385.cljs$core$IIndexed$_nth$arity$2(null,i__16387);goog.events.removeAll(node);
{
var G__16392 = seq__16384;
var G__16393 = chunk__16385;
var G__16394 = count__16386;
var G__16395 = (i__16387 + 1);
seq__16384 = G__16392;
chunk__16385 = G__16393;
count__16386 = G__16394;
i__16387 = G__16395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__16384);if(temp__4092__auto__)
{var seq__16384__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__16384__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__16384__$1);{
var G__16396 = cljs.core.chunk_rest(seq__16384__$1);
var G__16397 = c__4148__auto__;
var G__16398 = cljs.core.count(c__4148__auto__);
var G__16399 = 0;
seq__16384 = G__16396;
chunk__16385 = G__16397;
count__16386 = G__16398;
i__16387 = G__16399;
continue;
}
} else
{var node = cljs.core.first(seq__16384__$1);goog.events.removeAll(node);
{
var G__16400 = cljs.core.next(seq__16384__$1);
var G__16401 = null;
var G__16402 = 0;
var G__16403 = 0;
seq__16384 = G__16400;
chunk__16385 = G__16401;
count__16386 = G__16402;
i__16387 = G__16403;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__16388 = cljs.core.seq(domina.nodes(content));var chunk__16389 = null;var count__16390 = 0;var i__16391 = 0;while(true){
if((i__16391 < count__16390))
{var node = chunk__16389.cljs$core$IIndexed$_nth$arity$2(null,i__16391);goog.events.removeAll(node,type__$1);
{
var G__16404 = seq__16388;
var G__16405 = chunk__16389;
var G__16406 = count__16390;
var G__16407 = (i__16391 + 1);
seq__16388 = G__16404;
chunk__16389 = G__16405;
count__16390 = G__16406;
i__16391 = G__16407;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__16388);if(temp__4092__auto__)
{var seq__16388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__16388__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__16388__$1);{
var G__16408 = cljs.core.chunk_rest(seq__16388__$1);
var G__16409 = c__4148__auto__;
var G__16410 = cljs.core.count(c__4148__auto__);
var G__16411 = 0;
seq__16388 = G__16408;
chunk__16389 = G__16409;
count__16390 = G__16410;
i__16391 = G__16411;
continue;
}
} else
{var node = cljs.core.first(seq__16388__$1);goog.events.removeAll(node,type__$1);
{
var G__16412 = cljs.core.next(seq__16388__$1);
var G__16413 = null;
var G__16414 = 0;
var G__16415 = 0;
seq__16388 = G__16412;
chunk__16389 = G__16413;
count__16390 = G__16414;
i__16391 = G__16415;
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
var G__16416 = parent;
var G__16417 = cljs.core.cons(parent,so_far);
n = G__16416;
so_far = G__16417;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__16426_16434 = cljs.core.seq(ancestors);var chunk__16427_16435 = null;var count__16428_16436 = 0;var i__16429_16437 = 0;while(true){
if((i__16429_16437 < count__16428_16436))
{var n_16438 = chunk__16427_16435.cljs$core$IIndexed$_nth$arity$2(null,i__16429_16437);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16438;
goog.events.fireListeners(n_16438,evt.type,true,evt);
}
{
var G__16439 = seq__16426_16434;
var G__16440 = chunk__16427_16435;
var G__16441 = count__16428_16436;
var G__16442 = (i__16429_16437 + 1);
seq__16426_16434 = G__16439;
chunk__16427_16435 = G__16440;
count__16428_16436 = G__16441;
i__16429_16437 = G__16442;
continue;
}
} else
{var temp__4092__auto___16443 = cljs.core.seq(seq__16426_16434);if(temp__4092__auto___16443)
{var seq__16426_16444__$1 = temp__4092__auto___16443;if(cljs.core.chunked_seq_QMARK_(seq__16426_16444__$1))
{var c__4148__auto___16445 = cljs.core.chunk_first(seq__16426_16444__$1);{
var G__16446 = cljs.core.chunk_rest(seq__16426_16444__$1);
var G__16447 = c__4148__auto___16445;
var G__16448 = cljs.core.count(c__4148__auto___16445);
var G__16449 = 0;
seq__16426_16434 = G__16446;
chunk__16427_16435 = G__16447;
count__16428_16436 = G__16448;
i__16429_16437 = G__16449;
continue;
}
} else
{var n_16450 = cljs.core.first(seq__16426_16444__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16450;
goog.events.fireListeners(n_16450,evt.type,true,evt);
}
{
var G__16451 = cljs.core.next(seq__16426_16444__$1);
var G__16452 = null;
var G__16453 = 0;
var G__16454 = 0;
seq__16426_16434 = G__16451;
chunk__16427_16435 = G__16452;
count__16428_16436 = G__16453;
i__16429_16437 = G__16454;
continue;
}
}
} else
{}
}
break;
}
var seq__16430_16455 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__16431_16456 = null;var count__16432_16457 = 0;var i__16433_16458 = 0;while(true){
if((i__16433_16458 < count__16432_16457))
{var n_16459 = chunk__16431_16456.cljs$core$IIndexed$_nth$arity$2(null,i__16433_16458);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16459;
goog.events.fireListeners(n_16459,evt.type,false,evt);
}
{
var G__16460 = seq__16430_16455;
var G__16461 = chunk__16431_16456;
var G__16462 = count__16432_16457;
var G__16463 = (i__16433_16458 + 1);
seq__16430_16455 = G__16460;
chunk__16431_16456 = G__16461;
count__16432_16457 = G__16462;
i__16433_16458 = G__16463;
continue;
}
} else
{var temp__4092__auto___16464 = cljs.core.seq(seq__16430_16455);if(temp__4092__auto___16464)
{var seq__16430_16465__$1 = temp__4092__auto___16464;if(cljs.core.chunked_seq_QMARK_(seq__16430_16465__$1))
{var c__4148__auto___16466 = cljs.core.chunk_first(seq__16430_16465__$1);{
var G__16467 = cljs.core.chunk_rest(seq__16430_16465__$1);
var G__16468 = c__4148__auto___16466;
var G__16469 = cljs.core.count(c__4148__auto___16466);
var G__16470 = 0;
seq__16430_16455 = G__16467;
chunk__16431_16456 = G__16468;
count__16432_16457 = G__16469;
i__16433_16458 = G__16470;
continue;
}
} else
{var n_16471 = cljs.core.first(seq__16430_16465__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16471;
goog.events.fireListeners(n_16471,evt.type,false,evt);
}
{
var G__16472 = cljs.core.next(seq__16430_16465__$1);
var G__16473 = null;
var G__16474 = 0;
var G__16475 = 0;
seq__16430_16455 = G__16472;
chunk__16431_16456 = G__16473;
count__16432_16457 = G__16474;
i__16433_16458 = G__16475;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__16482_16488 = cljs.core.seq(evt_map);var chunk__16483_16489 = null;var count__16484_16490 = 0;var i__16485_16491 = 0;while(true){
if((i__16485_16491 < count__16484_16490))
{var vec__16486_16492 = chunk__16483_16489.cljs$core$IIndexed$_nth$arity$2(null,i__16485_16491);var k_16493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486_16492,0,null);var v_16494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486_16492,1,null);(evt[k_16493] = v_16494);
{
var G__16495 = seq__16482_16488;
var G__16496 = chunk__16483_16489;
var G__16497 = count__16484_16490;
var G__16498 = (i__16485_16491 + 1);
seq__16482_16488 = G__16495;
chunk__16483_16489 = G__16496;
count__16484_16490 = G__16497;
i__16485_16491 = G__16498;
continue;
}
} else
{var temp__4092__auto___16499 = cljs.core.seq(seq__16482_16488);if(temp__4092__auto___16499)
{var seq__16482_16500__$1 = temp__4092__auto___16499;if(cljs.core.chunked_seq_QMARK_(seq__16482_16500__$1))
{var c__4148__auto___16501 = cljs.core.chunk_first(seq__16482_16500__$1);{
var G__16502 = cljs.core.chunk_rest(seq__16482_16500__$1);
var G__16503 = c__4148__auto___16501;
var G__16504 = cljs.core.count(c__4148__auto___16501);
var G__16505 = 0;
seq__16482_16488 = G__16502;
chunk__16483_16489 = G__16503;
count__16484_16490 = G__16504;
i__16485_16491 = G__16505;
continue;
}
} else
{var vec__16487_16506 = cljs.core.first(seq__16482_16500__$1);var k_16507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16487_16506,0,null);var v_16508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16487_16506,1,null);(evt[k_16507] = v_16508);
{
var G__16509 = cljs.core.next(seq__16482_16500__$1);
var G__16510 = null;
var G__16511 = 0;
var G__16512 = 0;
seq__16482_16488 = G__16509;
chunk__16483_16489 = G__16510;
count__16484_16490 = G__16511;
i__16485_16491 = G__16512;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__16513_SHARP_){return goog.events.getListeners(p1__16513_SHARP_,type__$1,false);
}),domina.nodes(content));
});
