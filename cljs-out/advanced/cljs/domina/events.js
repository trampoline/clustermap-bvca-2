// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj43543 = {};return obj43543;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.prevent_default[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.prevent_default["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.current_target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.current_target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.event_type[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.event_type["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.raw_event[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.raw_event["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t43547 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43547 = (function (evt,f,create_listener_function,meta43548){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43548 = meta43548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43547.cljs$lang$type = true;
domina.events.t43547.cljs$lang$ctorStr = "domina.events/t43547";
domina.events.t43547.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"domina.events/t43547");
});
domina.events.t43547.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43547.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t43547.prototype.domina$events$Event$ = true;
domina.events.t43547.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43547.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43547.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43547.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43547.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43547.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43549){var self__ = this;
var _43549__$1 = this;return self__.meta43548;
});
domina.events.t43547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43549,meta43548__$1){var self__ = this;
var _43549__$1 = this;return (new domina.events.t43547(self__.evt,self__.f,self__.create_listener_function,meta43548__$1));
});
domina.events.__GT_t43547 = (function __GT_t43547(evt__$1,f__$1,create_listener_function__$1,meta43548){return (new domina.events.t43547(evt__$1,f__$1,create_listener_function__$1,meta43548));
});
}
return (new domina.events.t43547(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t43547 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43547 = (function (evt,f,create_listener_function,meta43548){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43548 = meta43548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43547.cljs$lang$type = true;
domina.events.t43547.cljs$lang$ctorStr = "domina.events/t43547";
domina.events.t43547.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"domina.events/t43547");
});
domina.events.t43547.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43547.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t43547.prototype.domina$events$Event$ = true;
domina.events.t43547.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43547.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43547.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43547.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43547.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43547.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43549){var self__ = this;
var _43549__$1 = this;return self__.meta43548;
});
domina.events.t43547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43549,meta43548__$1){var self__ = this;
var _43549__$1 = this;return (new domina.events.t43547(self__.evt,self__.f,self__.create_listener_function,meta43548__$1));
});
domina.events.__GT_t43547 = (function __GT_t43547(evt__$1,f__$1,create_listener_function__$1,meta43548){return (new domina.events.t43547(evt__$1,f__$1,create_listener_function__$1,meta43548));
});
}
return (new domina.events.t43547(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__43554(s__43555){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__43555__$1 = s__43555;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43555__$1);if(temp__4126__auto__)
{var s__43555__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43555__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__43555__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__43557 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__43556 = (0);while(true){
if((i__43556 < size__4265__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__43556);cljs.core.chunk_append(b__43557,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__43558 = (i__43556 + (1));
i__43556 = G__43558;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43557),iter__43554(cljs.core.chunk_rest(s__43555__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43557),null);
}
} else
{var node = cljs.core.first(s__43555__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__43554(cljs.core.rest(s__43555__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__43567 = cljs.core.seq(domina.nodes(content));var chunk__43568 = null;var count__43569 = (0);var i__43570 = (0);while(true){
if((i__43570 < count__43569))
{var node = chunk__43568.cljs$core$IIndexed$_nth$arity$2(null,i__43570);goog.events.removeAll(node);
{
var G__43575 = seq__43567;
var G__43576 = chunk__43568;
var G__43577 = count__43569;
var G__43578 = (i__43570 + (1));
seq__43567 = G__43575;
chunk__43568 = G__43576;
count__43569 = G__43577;
i__43570 = G__43578;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43567);if(temp__4126__auto__)
{var seq__43567__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43567__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__43567__$1);{
var G__43579 = cljs.core.chunk_rest(seq__43567__$1);
var G__43580 = c__4297__auto__;
var G__43581 = cljs.core.count(c__4297__auto__);
var G__43582 = (0);
seq__43567 = G__43579;
chunk__43568 = G__43580;
count__43569 = G__43581;
i__43570 = G__43582;
continue;
}
} else
{var node = cljs.core.first(seq__43567__$1);goog.events.removeAll(node);
{
var G__43583 = cljs.core.next(seq__43567__$1);
var G__43584 = null;
var G__43585 = (0);
var G__43586 = (0);
seq__43567 = G__43583;
chunk__43568 = G__43584;
count__43569 = G__43585;
i__43570 = G__43586;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__43571 = cljs.core.seq(domina.nodes(content));var chunk__43572 = null;var count__43573 = (0);var i__43574 = (0);while(true){
if((i__43574 < count__43573))
{var node = chunk__43572.cljs$core$IIndexed$_nth$arity$2(null,i__43574);goog.events.removeAll(node,type__$1);
{
var G__43587 = seq__43571;
var G__43588 = chunk__43572;
var G__43589 = count__43573;
var G__43590 = (i__43574 + (1));
seq__43571 = G__43587;
chunk__43572 = G__43588;
count__43573 = G__43589;
i__43574 = G__43590;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43571);if(temp__4126__auto__)
{var seq__43571__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43571__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__43571__$1);{
var G__43591 = cljs.core.chunk_rest(seq__43571__$1);
var G__43592 = c__4297__auto__;
var G__43593 = cljs.core.count(c__4297__auto__);
var G__43594 = (0);
seq__43571 = G__43591;
chunk__43572 = G__43592;
count__43573 = G__43593;
i__43574 = G__43594;
continue;
}
} else
{var node = cljs.core.first(seq__43571__$1);goog.events.removeAll(node,type__$1);
{
var G__43595 = cljs.core.next(seq__43571__$1);
var G__43596 = null;
var G__43597 = (0);
var G__43598 = (0);
seq__43571 = G__43595;
chunk__43572 = G__43596;
count__43573 = G__43597;
i__43574 = G__43598;
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
var G__43599 = parent;
var G__43600 = cljs.core.cons(parent,so_far);
n = G__43599;
so_far = G__43600;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__43609_43617 = cljs.core.seq(ancestors);var chunk__43610_43618 = null;var count__43611_43619 = (0);var i__43612_43620 = (0);while(true){
if((i__43612_43620 < count__43611_43619))
{var n_43621 = chunk__43610_43618.cljs$core$IIndexed$_nth$arity$2(null,i__43612_43620);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43621;
goog.events.fireListeners(n_43621,evt.type,true,evt);
}
{
var G__43622 = seq__43609_43617;
var G__43623 = chunk__43610_43618;
var G__43624 = count__43611_43619;
var G__43625 = (i__43612_43620 + (1));
seq__43609_43617 = G__43622;
chunk__43610_43618 = G__43623;
count__43611_43619 = G__43624;
i__43612_43620 = G__43625;
continue;
}
} else
{var temp__4126__auto___43626 = cljs.core.seq(seq__43609_43617);if(temp__4126__auto___43626)
{var seq__43609_43627__$1 = temp__4126__auto___43626;if(cljs.core.chunked_seq_QMARK_(seq__43609_43627__$1))
{var c__4297__auto___43628 = cljs.core.chunk_first(seq__43609_43627__$1);{
var G__43629 = cljs.core.chunk_rest(seq__43609_43627__$1);
var G__43630 = c__4297__auto___43628;
var G__43631 = cljs.core.count(c__4297__auto___43628);
var G__43632 = (0);
seq__43609_43617 = G__43629;
chunk__43610_43618 = G__43630;
count__43611_43619 = G__43631;
i__43612_43620 = G__43632;
continue;
}
} else
{var n_43633 = cljs.core.first(seq__43609_43627__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43633;
goog.events.fireListeners(n_43633,evt.type,true,evt);
}
{
var G__43634 = cljs.core.next(seq__43609_43627__$1);
var G__43635 = null;
var G__43636 = (0);
var G__43637 = (0);
seq__43609_43617 = G__43634;
chunk__43610_43618 = G__43635;
count__43611_43619 = G__43636;
i__43612_43620 = G__43637;
continue;
}
}
} else
{}
}
break;
}
var seq__43613_43638 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__43614_43639 = null;var count__43615_43640 = (0);var i__43616_43641 = (0);while(true){
if((i__43616_43641 < count__43615_43640))
{var n_43642 = chunk__43614_43639.cljs$core$IIndexed$_nth$arity$2(null,i__43616_43641);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43642;
goog.events.fireListeners(n_43642,evt.type,false,evt);
}
{
var G__43643 = seq__43613_43638;
var G__43644 = chunk__43614_43639;
var G__43645 = count__43615_43640;
var G__43646 = (i__43616_43641 + (1));
seq__43613_43638 = G__43643;
chunk__43614_43639 = G__43644;
count__43615_43640 = G__43645;
i__43616_43641 = G__43646;
continue;
}
} else
{var temp__4126__auto___43647 = cljs.core.seq(seq__43613_43638);if(temp__4126__auto___43647)
{var seq__43613_43648__$1 = temp__4126__auto___43647;if(cljs.core.chunked_seq_QMARK_(seq__43613_43648__$1))
{var c__4297__auto___43649 = cljs.core.chunk_first(seq__43613_43648__$1);{
var G__43650 = cljs.core.chunk_rest(seq__43613_43648__$1);
var G__43651 = c__4297__auto___43649;
var G__43652 = cljs.core.count(c__4297__auto___43649);
var G__43653 = (0);
seq__43613_43638 = G__43650;
chunk__43614_43639 = G__43651;
count__43615_43640 = G__43652;
i__43616_43641 = G__43653;
continue;
}
} else
{var n_43654 = cljs.core.first(seq__43613_43648__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43654;
goog.events.fireListeners(n_43654,evt.type,false,evt);
}
{
var G__43655 = cljs.core.next(seq__43613_43648__$1);
var G__43656 = null;
var G__43657 = (0);
var G__43658 = (0);
seq__43613_43638 = G__43655;
chunk__43614_43639 = G__43656;
count__43615_43640 = G__43657;
i__43616_43641 = G__43658;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3529__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3529__auto__))
{return o.dispatchEvent;
} else
{return and__3529__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__43665_43671 = cljs.core.seq(evt_map);var chunk__43666_43672 = null;var count__43667_43673 = (0);var i__43668_43674 = (0);while(true){
if((i__43668_43674 < count__43667_43673))
{var vec__43669_43675 = chunk__43666_43672.cljs$core$IIndexed$_nth$arity$2(null,i__43668_43674);var k_43676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669_43675,(0),null);var v_43677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43669_43675,(1),null);(evt[k_43676] = v_43677);
{
var G__43678 = seq__43665_43671;
var G__43679 = chunk__43666_43672;
var G__43680 = count__43667_43673;
var G__43681 = (i__43668_43674 + (1));
seq__43665_43671 = G__43678;
chunk__43666_43672 = G__43679;
count__43667_43673 = G__43680;
i__43668_43674 = G__43681;
continue;
}
} else
{var temp__4126__auto___43682 = cljs.core.seq(seq__43665_43671);if(temp__4126__auto___43682)
{var seq__43665_43683__$1 = temp__4126__auto___43682;if(cljs.core.chunked_seq_QMARK_(seq__43665_43683__$1))
{var c__4297__auto___43684 = cljs.core.chunk_first(seq__43665_43683__$1);{
var G__43685 = cljs.core.chunk_rest(seq__43665_43683__$1);
var G__43686 = c__4297__auto___43684;
var G__43687 = cljs.core.count(c__4297__auto___43684);
var G__43688 = (0);
seq__43665_43671 = G__43685;
chunk__43666_43672 = G__43686;
count__43667_43673 = G__43687;
i__43668_43674 = G__43688;
continue;
}
} else
{var vec__43670_43689 = cljs.core.first(seq__43665_43683__$1);var k_43690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43670_43689,(0),null);var v_43691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43670_43689,(1),null);(evt[k_43690] = v_43691);
{
var G__43692 = cljs.core.next(seq__43665_43683__$1);
var G__43693 = null;
var G__43694 = (0);
var G__43695 = (0);
seq__43665_43671 = G__43692;
chunk__43666_43672 = G__43693;
count__43667_43673 = G__43694;
i__43668_43674 = G__43695;
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
return (function (p1__43696_SHARP_){return goog.events.getListeners(p1__43696_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
