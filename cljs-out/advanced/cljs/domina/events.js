// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj44418 = {};return obj44418;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t44422 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44422 = (function (evt,f,create_listener_function,meta44423){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44423 = meta44423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44422.cljs$lang$type = true;
domina.events.t44422.cljs$lang$ctorStr = "domina.events/t44422";
domina.events.t44422.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t44422");
});
domina.events.t44422.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44422.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t44422.prototype.domina$events$Event$ = true;
domina.events.t44422.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44422.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44422.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44422.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44422.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44422.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44424){var self__ = this;
var _44424__$1 = this;return self__.meta44423;
});
domina.events.t44422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44424,meta44423__$1){var self__ = this;
var _44424__$1 = this;return (new domina.events.t44422(self__.evt,self__.f,self__.create_listener_function,meta44423__$1));
});
domina.events.__GT_t44422 = (function __GT_t44422(evt__$1,f__$1,create_listener_function__$1,meta44423){return (new domina.events.t44422(evt__$1,f__$1,create_listener_function__$1,meta44423));
});
}
return (new domina.events.t44422(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t44422 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44422 = (function (evt,f,create_listener_function,meta44423){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44423 = meta44423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44422.cljs$lang$type = true;
domina.events.t44422.cljs$lang$ctorStr = "domina.events/t44422";
domina.events.t44422.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t44422");
});
domina.events.t44422.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44422.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t44422.prototype.domina$events$Event$ = true;
domina.events.t44422.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44422.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44422.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44422.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44422.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44422.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44424){var self__ = this;
var _44424__$1 = this;return self__.meta44423;
});
domina.events.t44422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44424,meta44423__$1){var self__ = this;
var _44424__$1 = this;return (new domina.events.t44422(self__.evt,self__.f,self__.create_listener_function,meta44423__$1));
});
domina.events.__GT_t44422 = (function __GT_t44422(evt__$1,f__$1,create_listener_function__$1,meta44423){return (new domina.events.t44422(evt__$1,f__$1,create_listener_function__$1,meta44423));
});
}
return (new domina.events.t44422(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__44429(s__44430){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__44430__$1 = s__44430;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44430__$1);if(temp__4126__auto__)
{var s__44430__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44430__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44430__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44432 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44431 = (0);while(true){
if((i__44431 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44431);cljs.core.chunk_append(b__44432,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__44433 = (i__44431 + (1));
i__44431 = G__44433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44432),iter__44429(cljs.core.chunk_rest(s__44430__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44432),null);
}
} else
{var node = cljs.core.first(s__44430__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__44429(cljs.core.rest(s__44430__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__44442 = cljs.core.seq(domina.nodes(content));var chunk__44443 = null;var count__44444 = (0);var i__44445 = (0);while(true){
if((i__44445 < count__44444))
{var node = chunk__44443.cljs$core$IIndexed$_nth$arity$2(null,i__44445);goog.events.removeAll(node);
{
var G__44450 = seq__44442;
var G__44451 = chunk__44443;
var G__44452 = count__44444;
var G__44453 = (i__44445 + (1));
seq__44442 = G__44450;
chunk__44443 = G__44451;
count__44444 = G__44452;
i__44445 = G__44453;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44442);if(temp__4126__auto__)
{var seq__44442__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44442__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44442__$1);{
var G__44454 = cljs.core.chunk_rest(seq__44442__$1);
var G__44455 = c__4299__auto__;
var G__44456 = cljs.core.count(c__4299__auto__);
var G__44457 = (0);
seq__44442 = G__44454;
chunk__44443 = G__44455;
count__44444 = G__44456;
i__44445 = G__44457;
continue;
}
} else
{var node = cljs.core.first(seq__44442__$1);goog.events.removeAll(node);
{
var G__44458 = cljs.core.next(seq__44442__$1);
var G__44459 = null;
var G__44460 = (0);
var G__44461 = (0);
seq__44442 = G__44458;
chunk__44443 = G__44459;
count__44444 = G__44460;
i__44445 = G__44461;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__44446 = cljs.core.seq(domina.nodes(content));var chunk__44447 = null;var count__44448 = (0);var i__44449 = (0);while(true){
if((i__44449 < count__44448))
{var node = chunk__44447.cljs$core$IIndexed$_nth$arity$2(null,i__44449);goog.events.removeAll(node,type__$1);
{
var G__44462 = seq__44446;
var G__44463 = chunk__44447;
var G__44464 = count__44448;
var G__44465 = (i__44449 + (1));
seq__44446 = G__44462;
chunk__44447 = G__44463;
count__44448 = G__44464;
i__44449 = G__44465;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44446);if(temp__4126__auto__)
{var seq__44446__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44446__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44446__$1);{
var G__44466 = cljs.core.chunk_rest(seq__44446__$1);
var G__44467 = c__4299__auto__;
var G__44468 = cljs.core.count(c__4299__auto__);
var G__44469 = (0);
seq__44446 = G__44466;
chunk__44447 = G__44467;
count__44448 = G__44468;
i__44449 = G__44469;
continue;
}
} else
{var node = cljs.core.first(seq__44446__$1);goog.events.removeAll(node,type__$1);
{
var G__44470 = cljs.core.next(seq__44446__$1);
var G__44471 = null;
var G__44472 = (0);
var G__44473 = (0);
seq__44446 = G__44470;
chunk__44447 = G__44471;
count__44448 = G__44472;
i__44449 = G__44473;
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
var G__44474 = parent;
var G__44475 = cljs.core.cons(parent,so_far);
n = G__44474;
so_far = G__44475;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__44484_44492 = cljs.core.seq(ancestors);var chunk__44485_44493 = null;var count__44486_44494 = (0);var i__44487_44495 = (0);while(true){
if((i__44487_44495 < count__44486_44494))
{var n_44496 = chunk__44485_44493.cljs$core$IIndexed$_nth$arity$2(null,i__44487_44495);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44496;
goog.events.fireListeners(n_44496,evt.type,true,evt);
}
{
var G__44497 = seq__44484_44492;
var G__44498 = chunk__44485_44493;
var G__44499 = count__44486_44494;
var G__44500 = (i__44487_44495 + (1));
seq__44484_44492 = G__44497;
chunk__44485_44493 = G__44498;
count__44486_44494 = G__44499;
i__44487_44495 = G__44500;
continue;
}
} else
{var temp__4126__auto___44501 = cljs.core.seq(seq__44484_44492);if(temp__4126__auto___44501)
{var seq__44484_44502__$1 = temp__4126__auto___44501;if(cljs.core.chunked_seq_QMARK_(seq__44484_44502__$1))
{var c__4299__auto___44503 = cljs.core.chunk_first(seq__44484_44502__$1);{
var G__44504 = cljs.core.chunk_rest(seq__44484_44502__$1);
var G__44505 = c__4299__auto___44503;
var G__44506 = cljs.core.count(c__4299__auto___44503);
var G__44507 = (0);
seq__44484_44492 = G__44504;
chunk__44485_44493 = G__44505;
count__44486_44494 = G__44506;
i__44487_44495 = G__44507;
continue;
}
} else
{var n_44508 = cljs.core.first(seq__44484_44502__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44508;
goog.events.fireListeners(n_44508,evt.type,true,evt);
}
{
var G__44509 = cljs.core.next(seq__44484_44502__$1);
var G__44510 = null;
var G__44511 = (0);
var G__44512 = (0);
seq__44484_44492 = G__44509;
chunk__44485_44493 = G__44510;
count__44486_44494 = G__44511;
i__44487_44495 = G__44512;
continue;
}
}
} else
{}
}
break;
}
var seq__44488_44513 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__44489_44514 = null;var count__44490_44515 = (0);var i__44491_44516 = (0);while(true){
if((i__44491_44516 < count__44490_44515))
{var n_44517 = chunk__44489_44514.cljs$core$IIndexed$_nth$arity$2(null,i__44491_44516);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44517;
goog.events.fireListeners(n_44517,evt.type,false,evt);
}
{
var G__44518 = seq__44488_44513;
var G__44519 = chunk__44489_44514;
var G__44520 = count__44490_44515;
var G__44521 = (i__44491_44516 + (1));
seq__44488_44513 = G__44518;
chunk__44489_44514 = G__44519;
count__44490_44515 = G__44520;
i__44491_44516 = G__44521;
continue;
}
} else
{var temp__4126__auto___44522 = cljs.core.seq(seq__44488_44513);if(temp__4126__auto___44522)
{var seq__44488_44523__$1 = temp__4126__auto___44522;if(cljs.core.chunked_seq_QMARK_(seq__44488_44523__$1))
{var c__4299__auto___44524 = cljs.core.chunk_first(seq__44488_44523__$1);{
var G__44525 = cljs.core.chunk_rest(seq__44488_44523__$1);
var G__44526 = c__4299__auto___44524;
var G__44527 = cljs.core.count(c__4299__auto___44524);
var G__44528 = (0);
seq__44488_44513 = G__44525;
chunk__44489_44514 = G__44526;
count__44490_44515 = G__44527;
i__44491_44516 = G__44528;
continue;
}
} else
{var n_44529 = cljs.core.first(seq__44488_44523__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44529;
goog.events.fireListeners(n_44529,evt.type,false,evt);
}
{
var G__44530 = cljs.core.next(seq__44488_44523__$1);
var G__44531 = null;
var G__44532 = (0);
var G__44533 = (0);
seq__44488_44513 = G__44530;
chunk__44489_44514 = G__44531;
count__44490_44515 = G__44532;
i__44491_44516 = G__44533;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__44540_44546 = cljs.core.seq(evt_map);var chunk__44541_44547 = null;var count__44542_44548 = (0);var i__44543_44549 = (0);while(true){
if((i__44543_44549 < count__44542_44548))
{var vec__44544_44550 = chunk__44541_44547.cljs$core$IIndexed$_nth$arity$2(null,i__44543_44549);var k_44551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44544_44550,(0),null);var v_44552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44544_44550,(1),null);(evt[k_44551] = v_44552);
{
var G__44553 = seq__44540_44546;
var G__44554 = chunk__44541_44547;
var G__44555 = count__44542_44548;
var G__44556 = (i__44543_44549 + (1));
seq__44540_44546 = G__44553;
chunk__44541_44547 = G__44554;
count__44542_44548 = G__44555;
i__44543_44549 = G__44556;
continue;
}
} else
{var temp__4126__auto___44557 = cljs.core.seq(seq__44540_44546);if(temp__4126__auto___44557)
{var seq__44540_44558__$1 = temp__4126__auto___44557;if(cljs.core.chunked_seq_QMARK_(seq__44540_44558__$1))
{var c__4299__auto___44559 = cljs.core.chunk_first(seq__44540_44558__$1);{
var G__44560 = cljs.core.chunk_rest(seq__44540_44558__$1);
var G__44561 = c__4299__auto___44559;
var G__44562 = cljs.core.count(c__4299__auto___44559);
var G__44563 = (0);
seq__44540_44546 = G__44560;
chunk__44541_44547 = G__44561;
count__44542_44548 = G__44562;
i__44543_44549 = G__44563;
continue;
}
} else
{var vec__44545_44564 = cljs.core.first(seq__44540_44558__$1);var k_44565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44545_44564,(0),null);var v_44566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44545_44564,(1),null);(evt[k_44565] = v_44566);
{
var G__44567 = cljs.core.next(seq__44540_44558__$1);
var G__44568 = null;
var G__44569 = (0);
var G__44570 = (0);
seq__44540_44546 = G__44567;
chunk__44541_44547 = G__44568;
count__44542_44548 = G__44569;
i__44543_44549 = G__44570;
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
return (function (p1__44571_SHARP_){return goog.events.getListeners(p1__44571_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
