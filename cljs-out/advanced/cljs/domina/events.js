// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25696 = {};return obj25696;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25700 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25700 = (function (evt,f,create_listener_function,meta25701){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25701 = meta25701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25700.cljs$lang$type = true;
domina.events.t25700.cljs$lang$ctorStr = "domina.events/t25700";
domina.events.t25700.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25700");
});
domina.events.t25700.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25700.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25700.prototype.domina$events$Event$ = true;
domina.events.t25700.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25700.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25700.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25700.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25700.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25700.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25702){var self__ = this;
var _25702__$1 = this;return self__.meta25701;
});
domina.events.t25700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25702,meta25701__$1){var self__ = this;
var _25702__$1 = this;return (new domina.events.t25700(self__.evt,self__.f,self__.create_listener_function,meta25701__$1));
});
domina.events.__GT_t25700 = (function __GT_t25700(evt__$1,f__$1,create_listener_function__$1,meta25701){return (new domina.events.t25700(evt__$1,f__$1,create_listener_function__$1,meta25701));
});
}
return (new domina.events.t25700(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25700 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25700 = (function (evt,f,create_listener_function,meta25701){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25701 = meta25701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25700.cljs$lang$type = true;
domina.events.t25700.cljs$lang$ctorStr = "domina.events/t25700";
domina.events.t25700.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25700");
});
domina.events.t25700.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25700.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25700.prototype.domina$events$Event$ = true;
domina.events.t25700.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25700.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25700.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25700.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25700.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25700.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25702){var self__ = this;
var _25702__$1 = this;return self__.meta25701;
});
domina.events.t25700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25702,meta25701__$1){var self__ = this;
var _25702__$1 = this;return (new domina.events.t25700(self__.evt,self__.f,self__.create_listener_function,meta25701__$1));
});
domina.events.__GT_t25700 = (function __GT_t25700(evt__$1,f__$1,create_listener_function__$1,meta25701){return (new domina.events.t25700(evt__$1,f__$1,create_listener_function__$1,meta25701));
});
}
return (new domina.events.t25700(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25707(s__25708){return (new cljs.core.LazySeq(null,(function (){var s__25708__$1 = s__25708;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25708__$1);if(temp__4092__auto__)
{var s__25708__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25708__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25708__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25710 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25709 = 0;while(true){
if((i__25709 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25709);cljs.core.chunk_append(b__25710,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25711 = (i__25709 + 1);
i__25709 = G__25711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25710),iter__25707(cljs.core.chunk_rest(s__25708__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25710),null);
}
} else
{var node = cljs.core.first(s__25708__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25707(cljs.core.rest(s__25708__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25720 = cljs.core.seq(domina.nodes(content));var chunk__25721 = null;var count__25722 = 0;var i__25723 = 0;while(true){
if((i__25723 < count__25722))
{var node = chunk__25721.cljs$core$IIndexed$_nth$arity$2(null,i__25723);goog.events.removeAll(node);
{
var G__25728 = seq__25720;
var G__25729 = chunk__25721;
var G__25730 = count__25722;
var G__25731 = (i__25723 + 1);
seq__25720 = G__25728;
chunk__25721 = G__25729;
count__25722 = G__25730;
i__25723 = G__25731;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25720);if(temp__4092__auto__)
{var seq__25720__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25720__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25720__$1);{
var G__25732 = cljs.core.chunk_rest(seq__25720__$1);
var G__25733 = c__4148__auto__;
var G__25734 = cljs.core.count(c__4148__auto__);
var G__25735 = 0;
seq__25720 = G__25732;
chunk__25721 = G__25733;
count__25722 = G__25734;
i__25723 = G__25735;
continue;
}
} else
{var node = cljs.core.first(seq__25720__$1);goog.events.removeAll(node);
{
var G__25736 = cljs.core.next(seq__25720__$1);
var G__25737 = null;
var G__25738 = 0;
var G__25739 = 0;
seq__25720 = G__25736;
chunk__25721 = G__25737;
count__25722 = G__25738;
i__25723 = G__25739;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25724 = cljs.core.seq(domina.nodes(content));var chunk__25725 = null;var count__25726 = 0;var i__25727 = 0;while(true){
if((i__25727 < count__25726))
{var node = chunk__25725.cljs$core$IIndexed$_nth$arity$2(null,i__25727);goog.events.removeAll(node,type__$1);
{
var G__25740 = seq__25724;
var G__25741 = chunk__25725;
var G__25742 = count__25726;
var G__25743 = (i__25727 + 1);
seq__25724 = G__25740;
chunk__25725 = G__25741;
count__25726 = G__25742;
i__25727 = G__25743;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25724);if(temp__4092__auto__)
{var seq__25724__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25724__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25724__$1);{
var G__25744 = cljs.core.chunk_rest(seq__25724__$1);
var G__25745 = c__4148__auto__;
var G__25746 = cljs.core.count(c__4148__auto__);
var G__25747 = 0;
seq__25724 = G__25744;
chunk__25725 = G__25745;
count__25726 = G__25746;
i__25727 = G__25747;
continue;
}
} else
{var node = cljs.core.first(seq__25724__$1);goog.events.removeAll(node,type__$1);
{
var G__25748 = cljs.core.next(seq__25724__$1);
var G__25749 = null;
var G__25750 = 0;
var G__25751 = 0;
seq__25724 = G__25748;
chunk__25725 = G__25749;
count__25726 = G__25750;
i__25727 = G__25751;
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
var G__25752 = parent;
var G__25753 = cljs.core.cons(parent,so_far);
n = G__25752;
so_far = G__25753;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25762_25770 = cljs.core.seq(ancestors);var chunk__25763_25771 = null;var count__25764_25772 = 0;var i__25765_25773 = 0;while(true){
if((i__25765_25773 < count__25764_25772))
{var n_25774 = chunk__25763_25771.cljs$core$IIndexed$_nth$arity$2(null,i__25765_25773);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25774;
goog.events.fireListeners(n_25774,evt.type,true,evt);
}
{
var G__25775 = seq__25762_25770;
var G__25776 = chunk__25763_25771;
var G__25777 = count__25764_25772;
var G__25778 = (i__25765_25773 + 1);
seq__25762_25770 = G__25775;
chunk__25763_25771 = G__25776;
count__25764_25772 = G__25777;
i__25765_25773 = G__25778;
continue;
}
} else
{var temp__4092__auto___25779 = cljs.core.seq(seq__25762_25770);if(temp__4092__auto___25779)
{var seq__25762_25780__$1 = temp__4092__auto___25779;if(cljs.core.chunked_seq_QMARK_(seq__25762_25780__$1))
{var c__4148__auto___25781 = cljs.core.chunk_first(seq__25762_25780__$1);{
var G__25782 = cljs.core.chunk_rest(seq__25762_25780__$1);
var G__25783 = c__4148__auto___25781;
var G__25784 = cljs.core.count(c__4148__auto___25781);
var G__25785 = 0;
seq__25762_25770 = G__25782;
chunk__25763_25771 = G__25783;
count__25764_25772 = G__25784;
i__25765_25773 = G__25785;
continue;
}
} else
{var n_25786 = cljs.core.first(seq__25762_25780__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25786;
goog.events.fireListeners(n_25786,evt.type,true,evt);
}
{
var G__25787 = cljs.core.next(seq__25762_25780__$1);
var G__25788 = null;
var G__25789 = 0;
var G__25790 = 0;
seq__25762_25770 = G__25787;
chunk__25763_25771 = G__25788;
count__25764_25772 = G__25789;
i__25765_25773 = G__25790;
continue;
}
}
} else
{}
}
break;
}
var seq__25766_25791 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25767_25792 = null;var count__25768_25793 = 0;var i__25769_25794 = 0;while(true){
if((i__25769_25794 < count__25768_25793))
{var n_25795 = chunk__25767_25792.cljs$core$IIndexed$_nth$arity$2(null,i__25769_25794);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25795;
goog.events.fireListeners(n_25795,evt.type,false,evt);
}
{
var G__25796 = seq__25766_25791;
var G__25797 = chunk__25767_25792;
var G__25798 = count__25768_25793;
var G__25799 = (i__25769_25794 + 1);
seq__25766_25791 = G__25796;
chunk__25767_25792 = G__25797;
count__25768_25793 = G__25798;
i__25769_25794 = G__25799;
continue;
}
} else
{var temp__4092__auto___25800 = cljs.core.seq(seq__25766_25791);if(temp__4092__auto___25800)
{var seq__25766_25801__$1 = temp__4092__auto___25800;if(cljs.core.chunked_seq_QMARK_(seq__25766_25801__$1))
{var c__4148__auto___25802 = cljs.core.chunk_first(seq__25766_25801__$1);{
var G__25803 = cljs.core.chunk_rest(seq__25766_25801__$1);
var G__25804 = c__4148__auto___25802;
var G__25805 = cljs.core.count(c__4148__auto___25802);
var G__25806 = 0;
seq__25766_25791 = G__25803;
chunk__25767_25792 = G__25804;
count__25768_25793 = G__25805;
i__25769_25794 = G__25806;
continue;
}
} else
{var n_25807 = cljs.core.first(seq__25766_25801__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25807;
goog.events.fireListeners(n_25807,evt.type,false,evt);
}
{
var G__25808 = cljs.core.next(seq__25766_25801__$1);
var G__25809 = null;
var G__25810 = 0;
var G__25811 = 0;
seq__25766_25791 = G__25808;
chunk__25767_25792 = G__25809;
count__25768_25793 = G__25810;
i__25769_25794 = G__25811;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__25818_25824 = cljs.core.seq(evt_map);var chunk__25819_25825 = null;var count__25820_25826 = 0;var i__25821_25827 = 0;while(true){
if((i__25821_25827 < count__25820_25826))
{var vec__25822_25828 = chunk__25819_25825.cljs$core$IIndexed$_nth$arity$2(null,i__25821_25827);var k_25829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822_25828,0,null);var v_25830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25822_25828,1,null);(evt[k_25829] = v_25830);
{
var G__25831 = seq__25818_25824;
var G__25832 = chunk__25819_25825;
var G__25833 = count__25820_25826;
var G__25834 = (i__25821_25827 + 1);
seq__25818_25824 = G__25831;
chunk__25819_25825 = G__25832;
count__25820_25826 = G__25833;
i__25821_25827 = G__25834;
continue;
}
} else
{var temp__4092__auto___25835 = cljs.core.seq(seq__25818_25824);if(temp__4092__auto___25835)
{var seq__25818_25836__$1 = temp__4092__auto___25835;if(cljs.core.chunked_seq_QMARK_(seq__25818_25836__$1))
{var c__4148__auto___25837 = cljs.core.chunk_first(seq__25818_25836__$1);{
var G__25838 = cljs.core.chunk_rest(seq__25818_25836__$1);
var G__25839 = c__4148__auto___25837;
var G__25840 = cljs.core.count(c__4148__auto___25837);
var G__25841 = 0;
seq__25818_25824 = G__25838;
chunk__25819_25825 = G__25839;
count__25820_25826 = G__25840;
i__25821_25827 = G__25841;
continue;
}
} else
{var vec__25823_25842 = cljs.core.first(seq__25818_25836__$1);var k_25843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25823_25842,0,null);var v_25844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25823_25842,1,null);(evt[k_25843] = v_25844);
{
var G__25845 = cljs.core.next(seq__25818_25836__$1);
var G__25846 = null;
var G__25847 = 0;
var G__25848 = 0;
seq__25818_25824 = G__25845;
chunk__25819_25825 = G__25846;
count__25820_25826 = G__25847;
i__25821_25827 = G__25848;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__25849_SHARP_){return goog.events.getListeners(p1__25849_SHARP_,type__$1,false);
}),domina.nodes(content));
});
