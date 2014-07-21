// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj44403 = {};return obj44403;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t44407 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44407 = (function (evt,f,create_listener_function,meta44408){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44408 = meta44408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44407.cljs$lang$type = true;
domina.events.t44407.cljs$lang$ctorStr = "domina.events/t44407";
domina.events.t44407.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t44407");
});
domina.events.t44407.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44407.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t44407.prototype.domina$events$Event$ = true;
domina.events.t44407.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44407.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44407.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44407.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44407.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44407.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44409){var self__ = this;
var _44409__$1 = this;return self__.meta44408;
});
domina.events.t44407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44409,meta44408__$1){var self__ = this;
var _44409__$1 = this;return (new domina.events.t44407(self__.evt,self__.f,self__.create_listener_function,meta44408__$1));
});
domina.events.__GT_t44407 = (function __GT_t44407(evt__$1,f__$1,create_listener_function__$1,meta44408){return (new domina.events.t44407(evt__$1,f__$1,create_listener_function__$1,meta44408));
});
}
return (new domina.events.t44407(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t44407 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44407 = (function (evt,f,create_listener_function,meta44408){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44408 = meta44408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44407.cljs$lang$type = true;
domina.events.t44407.cljs$lang$ctorStr = "domina.events/t44407";
domina.events.t44407.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t44407");
});
domina.events.t44407.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44407.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t44407.prototype.domina$events$Event$ = true;
domina.events.t44407.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44407.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44407.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44407.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44407.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44407.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44409){var self__ = this;
var _44409__$1 = this;return self__.meta44408;
});
domina.events.t44407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44409,meta44408__$1){var self__ = this;
var _44409__$1 = this;return (new domina.events.t44407(self__.evt,self__.f,self__.create_listener_function,meta44408__$1));
});
domina.events.__GT_t44407 = (function __GT_t44407(evt__$1,f__$1,create_listener_function__$1,meta44408){return (new domina.events.t44407(evt__$1,f__$1,create_listener_function__$1,meta44408));
});
}
return (new domina.events.t44407(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__44414(s__44415){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__44415__$1 = s__44415;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44415__$1);if(temp__4126__auto__)
{var s__44415__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44415__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__44415__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__44417 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__44416 = (0);while(true){
if((i__44416 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__44416);cljs.core.chunk_append(b__44417,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__44418 = (i__44416 + (1));
i__44416 = G__44418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44417),iter__44414(cljs.core.chunk_rest(s__44415__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44417),null);
}
} else
{var node = cljs.core.first(s__44415__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__44414(cljs.core.rest(s__44415__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__44427 = cljs.core.seq(domina.nodes(content));var chunk__44428 = null;var count__44429 = (0);var i__44430 = (0);while(true){
if((i__44430 < count__44429))
{var node = chunk__44428.cljs$core$IIndexed$_nth$arity$2(null,i__44430);goog.events.removeAll(node);
{
var G__44435 = seq__44427;
var G__44436 = chunk__44428;
var G__44437 = count__44429;
var G__44438 = (i__44430 + (1));
seq__44427 = G__44435;
chunk__44428 = G__44436;
count__44429 = G__44437;
i__44430 = G__44438;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44427);if(temp__4126__auto__)
{var seq__44427__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44427__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44427__$1);{
var G__44439 = cljs.core.chunk_rest(seq__44427__$1);
var G__44440 = c__4299__auto__;
var G__44441 = cljs.core.count(c__4299__auto__);
var G__44442 = (0);
seq__44427 = G__44439;
chunk__44428 = G__44440;
count__44429 = G__44441;
i__44430 = G__44442;
continue;
}
} else
{var node = cljs.core.first(seq__44427__$1);goog.events.removeAll(node);
{
var G__44443 = cljs.core.next(seq__44427__$1);
var G__44444 = null;
var G__44445 = (0);
var G__44446 = (0);
seq__44427 = G__44443;
chunk__44428 = G__44444;
count__44429 = G__44445;
i__44430 = G__44446;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__44431 = cljs.core.seq(domina.nodes(content));var chunk__44432 = null;var count__44433 = (0);var i__44434 = (0);while(true){
if((i__44434 < count__44433))
{var node = chunk__44432.cljs$core$IIndexed$_nth$arity$2(null,i__44434);goog.events.removeAll(node,type__$1);
{
var G__44447 = seq__44431;
var G__44448 = chunk__44432;
var G__44449 = count__44433;
var G__44450 = (i__44434 + (1));
seq__44431 = G__44447;
chunk__44432 = G__44448;
count__44433 = G__44449;
i__44434 = G__44450;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44431);if(temp__4126__auto__)
{var seq__44431__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44431__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44431__$1);{
var G__44451 = cljs.core.chunk_rest(seq__44431__$1);
var G__44452 = c__4299__auto__;
var G__44453 = cljs.core.count(c__4299__auto__);
var G__44454 = (0);
seq__44431 = G__44451;
chunk__44432 = G__44452;
count__44433 = G__44453;
i__44434 = G__44454;
continue;
}
} else
{var node = cljs.core.first(seq__44431__$1);goog.events.removeAll(node,type__$1);
{
var G__44455 = cljs.core.next(seq__44431__$1);
var G__44456 = null;
var G__44457 = (0);
var G__44458 = (0);
seq__44431 = G__44455;
chunk__44432 = G__44456;
count__44433 = G__44457;
i__44434 = G__44458;
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
var G__44459 = parent;
var G__44460 = cljs.core.cons(parent,so_far);
n = G__44459;
so_far = G__44460;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__44469_44477 = cljs.core.seq(ancestors);var chunk__44470_44478 = null;var count__44471_44479 = (0);var i__44472_44480 = (0);while(true){
if((i__44472_44480 < count__44471_44479))
{var n_44481 = chunk__44470_44478.cljs$core$IIndexed$_nth$arity$2(null,i__44472_44480);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44481;
goog.events.fireListeners(n_44481,evt.type,true,evt);
}
{
var G__44482 = seq__44469_44477;
var G__44483 = chunk__44470_44478;
var G__44484 = count__44471_44479;
var G__44485 = (i__44472_44480 + (1));
seq__44469_44477 = G__44482;
chunk__44470_44478 = G__44483;
count__44471_44479 = G__44484;
i__44472_44480 = G__44485;
continue;
}
} else
{var temp__4126__auto___44486 = cljs.core.seq(seq__44469_44477);if(temp__4126__auto___44486)
{var seq__44469_44487__$1 = temp__4126__auto___44486;if(cljs.core.chunked_seq_QMARK_(seq__44469_44487__$1))
{var c__4299__auto___44488 = cljs.core.chunk_first(seq__44469_44487__$1);{
var G__44489 = cljs.core.chunk_rest(seq__44469_44487__$1);
var G__44490 = c__4299__auto___44488;
var G__44491 = cljs.core.count(c__4299__auto___44488);
var G__44492 = (0);
seq__44469_44477 = G__44489;
chunk__44470_44478 = G__44490;
count__44471_44479 = G__44491;
i__44472_44480 = G__44492;
continue;
}
} else
{var n_44493 = cljs.core.first(seq__44469_44487__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44493;
goog.events.fireListeners(n_44493,evt.type,true,evt);
}
{
var G__44494 = cljs.core.next(seq__44469_44487__$1);
var G__44495 = null;
var G__44496 = (0);
var G__44497 = (0);
seq__44469_44477 = G__44494;
chunk__44470_44478 = G__44495;
count__44471_44479 = G__44496;
i__44472_44480 = G__44497;
continue;
}
}
} else
{}
}
break;
}
var seq__44473_44498 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__44474_44499 = null;var count__44475_44500 = (0);var i__44476_44501 = (0);while(true){
if((i__44476_44501 < count__44475_44500))
{var n_44502 = chunk__44474_44499.cljs$core$IIndexed$_nth$arity$2(null,i__44476_44501);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44502;
goog.events.fireListeners(n_44502,evt.type,false,evt);
}
{
var G__44503 = seq__44473_44498;
var G__44504 = chunk__44474_44499;
var G__44505 = count__44475_44500;
var G__44506 = (i__44476_44501 + (1));
seq__44473_44498 = G__44503;
chunk__44474_44499 = G__44504;
count__44475_44500 = G__44505;
i__44476_44501 = G__44506;
continue;
}
} else
{var temp__4126__auto___44507 = cljs.core.seq(seq__44473_44498);if(temp__4126__auto___44507)
{var seq__44473_44508__$1 = temp__4126__auto___44507;if(cljs.core.chunked_seq_QMARK_(seq__44473_44508__$1))
{var c__4299__auto___44509 = cljs.core.chunk_first(seq__44473_44508__$1);{
var G__44510 = cljs.core.chunk_rest(seq__44473_44508__$1);
var G__44511 = c__4299__auto___44509;
var G__44512 = cljs.core.count(c__4299__auto___44509);
var G__44513 = (0);
seq__44473_44498 = G__44510;
chunk__44474_44499 = G__44511;
count__44475_44500 = G__44512;
i__44476_44501 = G__44513;
continue;
}
} else
{var n_44514 = cljs.core.first(seq__44473_44508__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44514;
goog.events.fireListeners(n_44514,evt.type,false,evt);
}
{
var G__44515 = cljs.core.next(seq__44473_44508__$1);
var G__44516 = null;
var G__44517 = (0);
var G__44518 = (0);
seq__44473_44498 = G__44515;
chunk__44474_44499 = G__44516;
count__44475_44500 = G__44517;
i__44476_44501 = G__44518;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__44525_44531 = cljs.core.seq(evt_map);var chunk__44526_44532 = null;var count__44527_44533 = (0);var i__44528_44534 = (0);while(true){
if((i__44528_44534 < count__44527_44533))
{var vec__44529_44535 = chunk__44526_44532.cljs$core$IIndexed$_nth$arity$2(null,i__44528_44534);var k_44536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44529_44535,(0),null);var v_44537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44529_44535,(1),null);(evt[k_44536] = v_44537);
{
var G__44538 = seq__44525_44531;
var G__44539 = chunk__44526_44532;
var G__44540 = count__44527_44533;
var G__44541 = (i__44528_44534 + (1));
seq__44525_44531 = G__44538;
chunk__44526_44532 = G__44539;
count__44527_44533 = G__44540;
i__44528_44534 = G__44541;
continue;
}
} else
{var temp__4126__auto___44542 = cljs.core.seq(seq__44525_44531);if(temp__4126__auto___44542)
{var seq__44525_44543__$1 = temp__4126__auto___44542;if(cljs.core.chunked_seq_QMARK_(seq__44525_44543__$1))
{var c__4299__auto___44544 = cljs.core.chunk_first(seq__44525_44543__$1);{
var G__44545 = cljs.core.chunk_rest(seq__44525_44543__$1);
var G__44546 = c__4299__auto___44544;
var G__44547 = cljs.core.count(c__4299__auto___44544);
var G__44548 = (0);
seq__44525_44531 = G__44545;
chunk__44526_44532 = G__44546;
count__44527_44533 = G__44547;
i__44528_44534 = G__44548;
continue;
}
} else
{var vec__44530_44549 = cljs.core.first(seq__44525_44543__$1);var k_44550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530_44549,(0),null);var v_44551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530_44549,(1),null);(evt[k_44550] = v_44551);
{
var G__44552 = cljs.core.next(seq__44525_44543__$1);
var G__44553 = null;
var G__44554 = (0);
var G__44555 = (0);
seq__44525_44531 = G__44552;
chunk__44526_44532 = G__44553;
count__44527_44533 = G__44554;
i__44528_44534 = G__44555;
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
return (function (p1__44556_SHARP_){return goog.events.getListeners(p1__44556_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
