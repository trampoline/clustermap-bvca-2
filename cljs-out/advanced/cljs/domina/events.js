// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj40698 = {};return obj40698;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t40702 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t40702 = (function (evt,f,create_listener_function,meta40703){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta40703 = meta40703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t40702.cljs$lang$type = true;
domina.events.t40702.cljs$lang$ctorStr = "domina.events/t40702";
domina.events.t40702.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t40702");
});
domina.events.t40702.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t40702.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t40702.prototype.domina$events$Event$ = true;
domina.events.t40702.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t40702.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t40702.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t40702.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t40702.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t40702.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t40702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40704){var self__ = this;
var _40704__$1 = this;return self__.meta40703;
});
domina.events.t40702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40704,meta40703__$1){var self__ = this;
var _40704__$1 = this;return (new domina.events.t40702(self__.evt,self__.f,self__.create_listener_function,meta40703__$1));
});
domina.events.__GT_t40702 = (function __GT_t40702(evt__$1,f__$1,create_listener_function__$1,meta40703){return (new domina.events.t40702(evt__$1,f__$1,create_listener_function__$1,meta40703));
});
}
return (new domina.events.t40702(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t40702 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t40702 = (function (evt,f,create_listener_function,meta40703){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta40703 = meta40703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t40702.cljs$lang$type = true;
domina.events.t40702.cljs$lang$ctorStr = "domina.events/t40702";
domina.events.t40702.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t40702");
});
domina.events.t40702.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t40702.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t40702.prototype.domina$events$Event$ = true;
domina.events.t40702.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t40702.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t40702.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t40702.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t40702.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t40702.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t40702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40704){var self__ = this;
var _40704__$1 = this;return self__.meta40703;
});
domina.events.t40702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40704,meta40703__$1){var self__ = this;
var _40704__$1 = this;return (new domina.events.t40702(self__.evt,self__.f,self__.create_listener_function,meta40703__$1));
});
domina.events.__GT_t40702 = (function __GT_t40702(evt__$1,f__$1,create_listener_function__$1,meta40703){return (new domina.events.t40702(evt__$1,f__$1,create_listener_function__$1,meta40703));
});
}
return (new domina.events.t40702(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__40709(s__40710){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__40710__$1 = s__40710;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40710__$1);if(temp__4126__auto__)
{var s__40710__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40710__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__40710__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__40712 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__40711 = (0);while(true){
if((i__40711 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__40711);cljs.core.chunk_append(b__40712,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__40713 = (i__40711 + (1));
i__40711 = G__40713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40712),iter__40709(cljs.core.chunk_rest(s__40710__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40712),null);
}
} else
{var node = cljs.core.first(s__40710__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__40709(cljs.core.rest(s__40710__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__40722 = cljs.core.seq(domina.nodes(content));var chunk__40723 = null;var count__40724 = (0);var i__40725 = (0);while(true){
if((i__40725 < count__40724))
{var node = chunk__40723.cljs$core$IIndexed$_nth$arity$2(null,i__40725);goog.events.removeAll(node);
{
var G__40730 = seq__40722;
var G__40731 = chunk__40723;
var G__40732 = count__40724;
var G__40733 = (i__40725 + (1));
seq__40722 = G__40730;
chunk__40723 = G__40731;
count__40724 = G__40732;
i__40725 = G__40733;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40722);if(temp__4126__auto__)
{var seq__40722__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40722__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40722__$1);{
var G__40734 = cljs.core.chunk_rest(seq__40722__$1);
var G__40735 = c__4299__auto__;
var G__40736 = cljs.core.count(c__4299__auto__);
var G__40737 = (0);
seq__40722 = G__40734;
chunk__40723 = G__40735;
count__40724 = G__40736;
i__40725 = G__40737;
continue;
}
} else
{var node = cljs.core.first(seq__40722__$1);goog.events.removeAll(node);
{
var G__40738 = cljs.core.next(seq__40722__$1);
var G__40739 = null;
var G__40740 = (0);
var G__40741 = (0);
seq__40722 = G__40738;
chunk__40723 = G__40739;
count__40724 = G__40740;
i__40725 = G__40741;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__40726 = cljs.core.seq(domina.nodes(content));var chunk__40727 = null;var count__40728 = (0);var i__40729 = (0);while(true){
if((i__40729 < count__40728))
{var node = chunk__40727.cljs$core$IIndexed$_nth$arity$2(null,i__40729);goog.events.removeAll(node,type__$1);
{
var G__40742 = seq__40726;
var G__40743 = chunk__40727;
var G__40744 = count__40728;
var G__40745 = (i__40729 + (1));
seq__40726 = G__40742;
chunk__40727 = G__40743;
count__40728 = G__40744;
i__40729 = G__40745;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40726);if(temp__4126__auto__)
{var seq__40726__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40726__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40726__$1);{
var G__40746 = cljs.core.chunk_rest(seq__40726__$1);
var G__40747 = c__4299__auto__;
var G__40748 = cljs.core.count(c__4299__auto__);
var G__40749 = (0);
seq__40726 = G__40746;
chunk__40727 = G__40747;
count__40728 = G__40748;
i__40729 = G__40749;
continue;
}
} else
{var node = cljs.core.first(seq__40726__$1);goog.events.removeAll(node,type__$1);
{
var G__40750 = cljs.core.next(seq__40726__$1);
var G__40751 = null;
var G__40752 = (0);
var G__40753 = (0);
seq__40726 = G__40750;
chunk__40727 = G__40751;
count__40728 = G__40752;
i__40729 = G__40753;
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
var G__40754 = parent;
var G__40755 = cljs.core.cons(parent,so_far);
n = G__40754;
so_far = G__40755;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__40764_40772 = cljs.core.seq(ancestors);var chunk__40765_40773 = null;var count__40766_40774 = (0);var i__40767_40775 = (0);while(true){
if((i__40767_40775 < count__40766_40774))
{var n_40776 = chunk__40765_40773.cljs$core$IIndexed$_nth$arity$2(null,i__40767_40775);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40776;
goog.events.fireListeners(n_40776,evt.type,true,evt);
}
{
var G__40777 = seq__40764_40772;
var G__40778 = chunk__40765_40773;
var G__40779 = count__40766_40774;
var G__40780 = (i__40767_40775 + (1));
seq__40764_40772 = G__40777;
chunk__40765_40773 = G__40778;
count__40766_40774 = G__40779;
i__40767_40775 = G__40780;
continue;
}
} else
{var temp__4126__auto___40781 = cljs.core.seq(seq__40764_40772);if(temp__4126__auto___40781)
{var seq__40764_40782__$1 = temp__4126__auto___40781;if(cljs.core.chunked_seq_QMARK_(seq__40764_40782__$1))
{var c__4299__auto___40783 = cljs.core.chunk_first(seq__40764_40782__$1);{
var G__40784 = cljs.core.chunk_rest(seq__40764_40782__$1);
var G__40785 = c__4299__auto___40783;
var G__40786 = cljs.core.count(c__4299__auto___40783);
var G__40787 = (0);
seq__40764_40772 = G__40784;
chunk__40765_40773 = G__40785;
count__40766_40774 = G__40786;
i__40767_40775 = G__40787;
continue;
}
} else
{var n_40788 = cljs.core.first(seq__40764_40782__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40788;
goog.events.fireListeners(n_40788,evt.type,true,evt);
}
{
var G__40789 = cljs.core.next(seq__40764_40782__$1);
var G__40790 = null;
var G__40791 = (0);
var G__40792 = (0);
seq__40764_40772 = G__40789;
chunk__40765_40773 = G__40790;
count__40766_40774 = G__40791;
i__40767_40775 = G__40792;
continue;
}
}
} else
{}
}
break;
}
var seq__40768_40793 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__40769_40794 = null;var count__40770_40795 = (0);var i__40771_40796 = (0);while(true){
if((i__40771_40796 < count__40770_40795))
{var n_40797 = chunk__40769_40794.cljs$core$IIndexed$_nth$arity$2(null,i__40771_40796);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40797;
goog.events.fireListeners(n_40797,evt.type,false,evt);
}
{
var G__40798 = seq__40768_40793;
var G__40799 = chunk__40769_40794;
var G__40800 = count__40770_40795;
var G__40801 = (i__40771_40796 + (1));
seq__40768_40793 = G__40798;
chunk__40769_40794 = G__40799;
count__40770_40795 = G__40800;
i__40771_40796 = G__40801;
continue;
}
} else
{var temp__4126__auto___40802 = cljs.core.seq(seq__40768_40793);if(temp__4126__auto___40802)
{var seq__40768_40803__$1 = temp__4126__auto___40802;if(cljs.core.chunked_seq_QMARK_(seq__40768_40803__$1))
{var c__4299__auto___40804 = cljs.core.chunk_first(seq__40768_40803__$1);{
var G__40805 = cljs.core.chunk_rest(seq__40768_40803__$1);
var G__40806 = c__4299__auto___40804;
var G__40807 = cljs.core.count(c__4299__auto___40804);
var G__40808 = (0);
seq__40768_40793 = G__40805;
chunk__40769_40794 = G__40806;
count__40770_40795 = G__40807;
i__40771_40796 = G__40808;
continue;
}
} else
{var n_40809 = cljs.core.first(seq__40768_40803__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40809;
goog.events.fireListeners(n_40809,evt.type,false,evt);
}
{
var G__40810 = cljs.core.next(seq__40768_40803__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40768_40793 = G__40810;
chunk__40769_40794 = G__40811;
count__40770_40795 = G__40812;
i__40771_40796 = G__40813;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__40820_40826 = cljs.core.seq(evt_map);var chunk__40821_40827 = null;var count__40822_40828 = (0);var i__40823_40829 = (0);while(true){
if((i__40823_40829 < count__40822_40828))
{var vec__40824_40830 = chunk__40821_40827.cljs$core$IIndexed$_nth$arity$2(null,i__40823_40829);var k_40831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40824_40830,(0),null);var v_40832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40824_40830,(1),null);(evt[k_40831] = v_40832);
{
var G__40833 = seq__40820_40826;
var G__40834 = chunk__40821_40827;
var G__40835 = count__40822_40828;
var G__40836 = (i__40823_40829 + (1));
seq__40820_40826 = G__40833;
chunk__40821_40827 = G__40834;
count__40822_40828 = G__40835;
i__40823_40829 = G__40836;
continue;
}
} else
{var temp__4126__auto___40837 = cljs.core.seq(seq__40820_40826);if(temp__4126__auto___40837)
{var seq__40820_40838__$1 = temp__4126__auto___40837;if(cljs.core.chunked_seq_QMARK_(seq__40820_40838__$1))
{var c__4299__auto___40839 = cljs.core.chunk_first(seq__40820_40838__$1);{
var G__40840 = cljs.core.chunk_rest(seq__40820_40838__$1);
var G__40841 = c__4299__auto___40839;
var G__40842 = cljs.core.count(c__4299__auto___40839);
var G__40843 = (0);
seq__40820_40826 = G__40840;
chunk__40821_40827 = G__40841;
count__40822_40828 = G__40842;
i__40823_40829 = G__40843;
continue;
}
} else
{var vec__40825_40844 = cljs.core.first(seq__40820_40838__$1);var k_40845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40825_40844,(0),null);var v_40846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40825_40844,(1),null);(evt[k_40845] = v_40846);
{
var G__40847 = cljs.core.next(seq__40820_40838__$1);
var G__40848 = null;
var G__40849 = (0);
var G__40850 = (0);
seq__40820_40826 = G__40847;
chunk__40821_40827 = G__40848;
count__40822_40828 = G__40849;
i__40823_40829 = G__40850;
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
return (function (p1__40851_SHARP_){return goog.events.getListeners(p1__40851_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
