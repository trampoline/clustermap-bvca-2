// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj42366 = {};return obj42366;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t42370 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42370 = (function (evt,f,create_listener_function,meta42371){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42371 = meta42371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42370.cljs$lang$type = true;
domina.events.t42370.cljs$lang$ctorStr = "domina.events/t42370";
domina.events.t42370.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42370");
});
domina.events.t42370.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42370.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42370.prototype.domina$events$Event$ = true;
domina.events.t42370.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42370.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42370.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42370.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42370.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42370.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42372){var self__ = this;
var _42372__$1 = this;return self__.meta42371;
});
domina.events.t42370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42372,meta42371__$1){var self__ = this;
var _42372__$1 = this;return (new domina.events.t42370(self__.evt,self__.f,self__.create_listener_function,meta42371__$1));
});
domina.events.__GT_t42370 = (function __GT_t42370(evt__$1,f__$1,create_listener_function__$1,meta42371){return (new domina.events.t42370(evt__$1,f__$1,create_listener_function__$1,meta42371));
});
}
return (new domina.events.t42370(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t42370 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42370 = (function (evt,f,create_listener_function,meta42371){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42371 = meta42371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42370.cljs$lang$type = true;
domina.events.t42370.cljs$lang$ctorStr = "domina.events/t42370";
domina.events.t42370.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42370");
});
domina.events.t42370.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42370.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42370.prototype.domina$events$Event$ = true;
domina.events.t42370.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42370.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42370.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42370.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42370.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42370.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42372){var self__ = this;
var _42372__$1 = this;return self__.meta42371;
});
domina.events.t42370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42372,meta42371__$1){var self__ = this;
var _42372__$1 = this;return (new domina.events.t42370(self__.evt,self__.f,self__.create_listener_function,meta42371__$1));
});
domina.events.__GT_t42370 = (function __GT_t42370(evt__$1,f__$1,create_listener_function__$1,meta42371){return (new domina.events.t42370(evt__$1,f__$1,create_listener_function__$1,meta42371));
});
}
return (new domina.events.t42370(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__42377(s__42378){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__42378__$1 = s__42378;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42378__$1);if(temp__4126__auto__)
{var s__42378__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42378__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42378__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42380 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42379 = (0);while(true){
if((i__42379 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42379);cljs.core.chunk_append(b__42380,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__42381 = (i__42379 + (1));
i__42379 = G__42381;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42380),iter__42377(cljs.core.chunk_rest(s__42378__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42380),null);
}
} else
{var node = cljs.core.first(s__42378__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__42377(cljs.core.rest(s__42378__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__42390 = cljs.core.seq(domina.nodes(content));var chunk__42391 = null;var count__42392 = (0);var i__42393 = (0);while(true){
if((i__42393 < count__42392))
{var node = chunk__42391.cljs$core$IIndexed$_nth$arity$2(null,i__42393);goog.events.removeAll(node);
{
var G__42398 = seq__42390;
var G__42399 = chunk__42391;
var G__42400 = count__42392;
var G__42401 = (i__42393 + (1));
seq__42390 = G__42398;
chunk__42391 = G__42399;
count__42392 = G__42400;
i__42393 = G__42401;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42390);if(temp__4126__auto__)
{var seq__42390__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42390__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42390__$1);{
var G__42402 = cljs.core.chunk_rest(seq__42390__$1);
var G__42403 = c__4299__auto__;
var G__42404 = cljs.core.count(c__4299__auto__);
var G__42405 = (0);
seq__42390 = G__42402;
chunk__42391 = G__42403;
count__42392 = G__42404;
i__42393 = G__42405;
continue;
}
} else
{var node = cljs.core.first(seq__42390__$1);goog.events.removeAll(node);
{
var G__42406 = cljs.core.next(seq__42390__$1);
var G__42407 = null;
var G__42408 = (0);
var G__42409 = (0);
seq__42390 = G__42406;
chunk__42391 = G__42407;
count__42392 = G__42408;
i__42393 = G__42409;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__42394 = cljs.core.seq(domina.nodes(content));var chunk__42395 = null;var count__42396 = (0);var i__42397 = (0);while(true){
if((i__42397 < count__42396))
{var node = chunk__42395.cljs$core$IIndexed$_nth$arity$2(null,i__42397);goog.events.removeAll(node,type__$1);
{
var G__42410 = seq__42394;
var G__42411 = chunk__42395;
var G__42412 = count__42396;
var G__42413 = (i__42397 + (1));
seq__42394 = G__42410;
chunk__42395 = G__42411;
count__42396 = G__42412;
i__42397 = G__42413;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42394);if(temp__4126__auto__)
{var seq__42394__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42394__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42394__$1);{
var G__42414 = cljs.core.chunk_rest(seq__42394__$1);
var G__42415 = c__4299__auto__;
var G__42416 = cljs.core.count(c__4299__auto__);
var G__42417 = (0);
seq__42394 = G__42414;
chunk__42395 = G__42415;
count__42396 = G__42416;
i__42397 = G__42417;
continue;
}
} else
{var node = cljs.core.first(seq__42394__$1);goog.events.removeAll(node,type__$1);
{
var G__42418 = cljs.core.next(seq__42394__$1);
var G__42419 = null;
var G__42420 = (0);
var G__42421 = (0);
seq__42394 = G__42418;
chunk__42395 = G__42419;
count__42396 = G__42420;
i__42397 = G__42421;
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
var G__42422 = parent;
var G__42423 = cljs.core.cons(parent,so_far);
n = G__42422;
so_far = G__42423;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__42432_42440 = cljs.core.seq(ancestors);var chunk__42433_42441 = null;var count__42434_42442 = (0);var i__42435_42443 = (0);while(true){
if((i__42435_42443 < count__42434_42442))
{var n_42444 = chunk__42433_42441.cljs$core$IIndexed$_nth$arity$2(null,i__42435_42443);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42444;
goog.events.fireListeners(n_42444,evt.type,true,evt);
}
{
var G__42445 = seq__42432_42440;
var G__42446 = chunk__42433_42441;
var G__42447 = count__42434_42442;
var G__42448 = (i__42435_42443 + (1));
seq__42432_42440 = G__42445;
chunk__42433_42441 = G__42446;
count__42434_42442 = G__42447;
i__42435_42443 = G__42448;
continue;
}
} else
{var temp__4126__auto___42449 = cljs.core.seq(seq__42432_42440);if(temp__4126__auto___42449)
{var seq__42432_42450__$1 = temp__4126__auto___42449;if(cljs.core.chunked_seq_QMARK_(seq__42432_42450__$1))
{var c__4299__auto___42451 = cljs.core.chunk_first(seq__42432_42450__$1);{
var G__42452 = cljs.core.chunk_rest(seq__42432_42450__$1);
var G__42453 = c__4299__auto___42451;
var G__42454 = cljs.core.count(c__4299__auto___42451);
var G__42455 = (0);
seq__42432_42440 = G__42452;
chunk__42433_42441 = G__42453;
count__42434_42442 = G__42454;
i__42435_42443 = G__42455;
continue;
}
} else
{var n_42456 = cljs.core.first(seq__42432_42450__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42456;
goog.events.fireListeners(n_42456,evt.type,true,evt);
}
{
var G__42457 = cljs.core.next(seq__42432_42450__$1);
var G__42458 = null;
var G__42459 = (0);
var G__42460 = (0);
seq__42432_42440 = G__42457;
chunk__42433_42441 = G__42458;
count__42434_42442 = G__42459;
i__42435_42443 = G__42460;
continue;
}
}
} else
{}
}
break;
}
var seq__42436_42461 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__42437_42462 = null;var count__42438_42463 = (0);var i__42439_42464 = (0);while(true){
if((i__42439_42464 < count__42438_42463))
{var n_42465 = chunk__42437_42462.cljs$core$IIndexed$_nth$arity$2(null,i__42439_42464);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42465;
goog.events.fireListeners(n_42465,evt.type,false,evt);
}
{
var G__42466 = seq__42436_42461;
var G__42467 = chunk__42437_42462;
var G__42468 = count__42438_42463;
var G__42469 = (i__42439_42464 + (1));
seq__42436_42461 = G__42466;
chunk__42437_42462 = G__42467;
count__42438_42463 = G__42468;
i__42439_42464 = G__42469;
continue;
}
} else
{var temp__4126__auto___42470 = cljs.core.seq(seq__42436_42461);if(temp__4126__auto___42470)
{var seq__42436_42471__$1 = temp__4126__auto___42470;if(cljs.core.chunked_seq_QMARK_(seq__42436_42471__$1))
{var c__4299__auto___42472 = cljs.core.chunk_first(seq__42436_42471__$1);{
var G__42473 = cljs.core.chunk_rest(seq__42436_42471__$1);
var G__42474 = c__4299__auto___42472;
var G__42475 = cljs.core.count(c__4299__auto___42472);
var G__42476 = (0);
seq__42436_42461 = G__42473;
chunk__42437_42462 = G__42474;
count__42438_42463 = G__42475;
i__42439_42464 = G__42476;
continue;
}
} else
{var n_42477 = cljs.core.first(seq__42436_42471__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42477;
goog.events.fireListeners(n_42477,evt.type,false,evt);
}
{
var G__42478 = cljs.core.next(seq__42436_42471__$1);
var G__42479 = null;
var G__42480 = (0);
var G__42481 = (0);
seq__42436_42461 = G__42478;
chunk__42437_42462 = G__42479;
count__42438_42463 = G__42480;
i__42439_42464 = G__42481;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__42488_42494 = cljs.core.seq(evt_map);var chunk__42489_42495 = null;var count__42490_42496 = (0);var i__42491_42497 = (0);while(true){
if((i__42491_42497 < count__42490_42496))
{var vec__42492_42498 = chunk__42489_42495.cljs$core$IIndexed$_nth$arity$2(null,i__42491_42497);var k_42499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42492_42498,(0),null);var v_42500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42492_42498,(1),null);(evt[k_42499] = v_42500);
{
var G__42501 = seq__42488_42494;
var G__42502 = chunk__42489_42495;
var G__42503 = count__42490_42496;
var G__42504 = (i__42491_42497 + (1));
seq__42488_42494 = G__42501;
chunk__42489_42495 = G__42502;
count__42490_42496 = G__42503;
i__42491_42497 = G__42504;
continue;
}
} else
{var temp__4126__auto___42505 = cljs.core.seq(seq__42488_42494);if(temp__4126__auto___42505)
{var seq__42488_42506__$1 = temp__4126__auto___42505;if(cljs.core.chunked_seq_QMARK_(seq__42488_42506__$1))
{var c__4299__auto___42507 = cljs.core.chunk_first(seq__42488_42506__$1);{
var G__42508 = cljs.core.chunk_rest(seq__42488_42506__$1);
var G__42509 = c__4299__auto___42507;
var G__42510 = cljs.core.count(c__4299__auto___42507);
var G__42511 = (0);
seq__42488_42494 = G__42508;
chunk__42489_42495 = G__42509;
count__42490_42496 = G__42510;
i__42491_42497 = G__42511;
continue;
}
} else
{var vec__42493_42512 = cljs.core.first(seq__42488_42506__$1);var k_42513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493_42512,(0),null);var v_42514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493_42512,(1),null);(evt[k_42513] = v_42514);
{
var G__42515 = cljs.core.next(seq__42488_42506__$1);
var G__42516 = null;
var G__42517 = (0);
var G__42518 = (0);
seq__42488_42494 = G__42515;
chunk__42489_42495 = G__42516;
count__42490_42496 = G__42517;
i__42491_42497 = G__42518;
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
return (function (p1__42519_SHARP_){return goog.events.getListeners(p1__42519_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
