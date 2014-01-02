// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18928 = {};return obj18928;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t18932 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18932 = (function (evt,f,create_listener_function,meta18933){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18933 = meta18933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18932.cljs$lang$type = true;
domina.events.t18932.cljs$lang$ctorStr = "domina.events/t18932";
domina.events.t18932.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t18932");
});
domina.events.t18932.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t18932.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t18932.prototype.domina$events$Event$ = true;
domina.events.t18932.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18932.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18932.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18932.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18932.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18932.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18934){var self__ = this;
var _18934__$1 = this;return self__.meta18933;
});
domina.events.t18932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18934,meta18933__$1){var self__ = this;
var _18934__$1 = this;return (new domina.events.t18932(self__.evt,self__.f,self__.create_listener_function,meta18933__$1));
});
domina.events.__GT_t18932 = (function __GT_t18932(evt__$1,f__$1,create_listener_function__$1,meta18933){return (new domina.events.t18932(evt__$1,f__$1,create_listener_function__$1,meta18933));
});
}
return (new domina.events.t18932(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t18932 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18932 = (function (evt,f,create_listener_function,meta18933){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18933 = meta18933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18932.cljs$lang$type = true;
domina.events.t18932.cljs$lang$ctorStr = "domina.events/t18932";
domina.events.t18932.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t18932");
});
domina.events.t18932.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t18932.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t18932.prototype.domina$events$Event$ = true;
domina.events.t18932.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18932.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18932.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18932.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18932.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18932.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18934){var self__ = this;
var _18934__$1 = this;return self__.meta18933;
});
domina.events.t18932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18934,meta18933__$1){var self__ = this;
var _18934__$1 = this;return (new domina.events.t18932(self__.evt,self__.f,self__.create_listener_function,meta18933__$1));
});
domina.events.__GT_t18932 = (function __GT_t18932(evt__$1,f__$1,create_listener_function__$1,meta18933){return (new domina.events.t18932(evt__$1,f__$1,create_listener_function__$1,meta18933));
});
}
return (new domina.events.t18932(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__3984__auto__ = (function iter__18939(s__18940){return (new cljs.core.LazySeq(null,(function (){var s__18940__$1 = s__18940;while(true){
var temp__4092__auto__ = cljs.core.seq(s__18940__$1);if(temp__4092__auto__)
{var s__18940__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__18940__$2))
{var c__3982__auto__ = cljs.core.chunk_first(s__18940__$2);var size__3983__auto__ = cljs.core.count(c__3982__auto__);var b__18942 = cljs.core.chunk_buffer(size__3983__auto__);if((function (){var i__18941 = 0;while(true){
if((i__18941 < size__3983__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3982__auto__,i__18941);cljs.core.chunk_append(b__18942,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18943 = (i__18941 + 1);
i__18941 = G__18943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__18942),iter__18939(cljs.core.chunk_rest(s__18940__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__18942),null);
}
} else
{var node = cljs.core.first(s__18940__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18939(cljs.core.rest(s__18940__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__18952 = cljs.core.seq(domina.nodes(content));var chunk__18953 = null;var count__18954 = 0;var i__18955 = 0;while(true){
if((i__18955 < count__18954))
{var node = chunk__18953.cljs$core$IIndexed$_nth$arity$2(null,i__18955);goog.events.removeAll(node);
{
var G__18960 = seq__18952;
var G__18961 = chunk__18953;
var G__18962 = count__18954;
var G__18963 = (i__18955 + 1);
seq__18952 = G__18960;
chunk__18953 = G__18961;
count__18954 = G__18962;
i__18955 = G__18963;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__18952);if(temp__4092__auto__)
{var seq__18952__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__18952__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__18952__$1);{
var G__18964 = cljs.core.chunk_rest(seq__18952__$1);
var G__18965 = c__4015__auto__;
var G__18966 = cljs.core.count(c__4015__auto__);
var G__18967 = 0;
seq__18952 = G__18964;
chunk__18953 = G__18965;
count__18954 = G__18966;
i__18955 = G__18967;
continue;
}
} else
{var node = cljs.core.first(seq__18952__$1);goog.events.removeAll(node);
{
var G__18968 = cljs.core.next(seq__18952__$1);
var G__18969 = null;
var G__18970 = 0;
var G__18971 = 0;
seq__18952 = G__18968;
chunk__18953 = G__18969;
count__18954 = G__18970;
i__18955 = G__18971;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__18956 = cljs.core.seq(domina.nodes(content));var chunk__18957 = null;var count__18958 = 0;var i__18959 = 0;while(true){
if((i__18959 < count__18958))
{var node = chunk__18957.cljs$core$IIndexed$_nth$arity$2(null,i__18959);goog.events.removeAll(node,type__$1);
{
var G__18972 = seq__18956;
var G__18973 = chunk__18957;
var G__18974 = count__18958;
var G__18975 = (i__18959 + 1);
seq__18956 = G__18972;
chunk__18957 = G__18973;
count__18958 = G__18974;
i__18959 = G__18975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__18956);if(temp__4092__auto__)
{var seq__18956__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__18956__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__18956__$1);{
var G__18976 = cljs.core.chunk_rest(seq__18956__$1);
var G__18977 = c__4015__auto__;
var G__18978 = cljs.core.count(c__4015__auto__);
var G__18979 = 0;
seq__18956 = G__18976;
chunk__18957 = G__18977;
count__18958 = G__18978;
i__18959 = G__18979;
continue;
}
} else
{var node = cljs.core.first(seq__18956__$1);goog.events.removeAll(node,type__$1);
{
var G__18980 = cljs.core.next(seq__18956__$1);
var G__18981 = null;
var G__18982 = 0;
var G__18983 = 0;
seq__18956 = G__18980;
chunk__18957 = G__18981;
count__18958 = G__18982;
i__18959 = G__18983;
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
var G__18984 = parent;
var G__18985 = cljs.core.cons(parent,so_far);
n = G__18984;
so_far = G__18985;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__18994_19002 = cljs.core.seq(ancestors);var chunk__18995_19003 = null;var count__18996_19004 = 0;var i__18997_19005 = 0;while(true){
if((i__18997_19005 < count__18996_19004))
{var n_19006 = chunk__18995_19003.cljs$core$IIndexed$_nth$arity$2(null,i__18997_19005);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19006;
goog.events.fireListeners(n_19006,evt.type,true,evt);
}
{
var G__19007 = seq__18994_19002;
var G__19008 = chunk__18995_19003;
var G__19009 = count__18996_19004;
var G__19010 = (i__18997_19005 + 1);
seq__18994_19002 = G__19007;
chunk__18995_19003 = G__19008;
count__18996_19004 = G__19009;
i__18997_19005 = G__19010;
continue;
}
} else
{var temp__4092__auto___19011 = cljs.core.seq(seq__18994_19002);if(temp__4092__auto___19011)
{var seq__18994_19012__$1 = temp__4092__auto___19011;if(cljs.core.chunked_seq_QMARK_(seq__18994_19012__$1))
{var c__4015__auto___19013 = cljs.core.chunk_first(seq__18994_19012__$1);{
var G__19014 = cljs.core.chunk_rest(seq__18994_19012__$1);
var G__19015 = c__4015__auto___19013;
var G__19016 = cljs.core.count(c__4015__auto___19013);
var G__19017 = 0;
seq__18994_19002 = G__19014;
chunk__18995_19003 = G__19015;
count__18996_19004 = G__19016;
i__18997_19005 = G__19017;
continue;
}
} else
{var n_19018 = cljs.core.first(seq__18994_19012__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19018;
goog.events.fireListeners(n_19018,evt.type,true,evt);
}
{
var G__19019 = cljs.core.next(seq__18994_19012__$1);
var G__19020 = null;
var G__19021 = 0;
var G__19022 = 0;
seq__18994_19002 = G__19019;
chunk__18995_19003 = G__19020;
count__18996_19004 = G__19021;
i__18997_19005 = G__19022;
continue;
}
}
} else
{}
}
break;
}
var seq__18998_19023 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__18999_19024 = null;var count__19000_19025 = 0;var i__19001_19026 = 0;while(true){
if((i__19001_19026 < count__19000_19025))
{var n_19027 = chunk__18999_19024.cljs$core$IIndexed$_nth$arity$2(null,i__19001_19026);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19027;
goog.events.fireListeners(n_19027,evt.type,false,evt);
}
{
var G__19028 = seq__18998_19023;
var G__19029 = chunk__18999_19024;
var G__19030 = count__19000_19025;
var G__19031 = (i__19001_19026 + 1);
seq__18998_19023 = G__19028;
chunk__18999_19024 = G__19029;
count__19000_19025 = G__19030;
i__19001_19026 = G__19031;
continue;
}
} else
{var temp__4092__auto___19032 = cljs.core.seq(seq__18998_19023);if(temp__4092__auto___19032)
{var seq__18998_19033__$1 = temp__4092__auto___19032;if(cljs.core.chunked_seq_QMARK_(seq__18998_19033__$1))
{var c__4015__auto___19034 = cljs.core.chunk_first(seq__18998_19033__$1);{
var G__19035 = cljs.core.chunk_rest(seq__18998_19033__$1);
var G__19036 = c__4015__auto___19034;
var G__19037 = cljs.core.count(c__4015__auto___19034);
var G__19038 = 0;
seq__18998_19023 = G__19035;
chunk__18999_19024 = G__19036;
count__19000_19025 = G__19037;
i__19001_19026 = G__19038;
continue;
}
} else
{var n_19039 = cljs.core.first(seq__18998_19033__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19039;
goog.events.fireListeners(n_19039,evt.type,false,evt);
}
{
var G__19040 = cljs.core.next(seq__18998_19033__$1);
var G__19041 = null;
var G__19042 = 0;
var G__19043 = 0;
seq__18998_19023 = G__19040;
chunk__18999_19024 = G__19041;
count__19000_19025 = G__19042;
i__19001_19026 = G__19043;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__19050_19056 = cljs.core.seq(evt_map);var chunk__19051_19057 = null;var count__19052_19058 = 0;var i__19053_19059 = 0;while(true){
if((i__19053_19059 < count__19052_19058))
{var vec__19054_19060 = chunk__19051_19057.cljs$core$IIndexed$_nth$arity$2(null,i__19053_19059);var k_19061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19054_19060,0,null);var v_19062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19054_19060,1,null);(evt[k_19061] = v_19062);
{
var G__19063 = seq__19050_19056;
var G__19064 = chunk__19051_19057;
var G__19065 = count__19052_19058;
var G__19066 = (i__19053_19059 + 1);
seq__19050_19056 = G__19063;
chunk__19051_19057 = G__19064;
count__19052_19058 = G__19065;
i__19053_19059 = G__19066;
continue;
}
} else
{var temp__4092__auto___19067 = cljs.core.seq(seq__19050_19056);if(temp__4092__auto___19067)
{var seq__19050_19068__$1 = temp__4092__auto___19067;if(cljs.core.chunked_seq_QMARK_(seq__19050_19068__$1))
{var c__4015__auto___19069 = cljs.core.chunk_first(seq__19050_19068__$1);{
var G__19070 = cljs.core.chunk_rest(seq__19050_19068__$1);
var G__19071 = c__4015__auto___19069;
var G__19072 = cljs.core.count(c__4015__auto___19069);
var G__19073 = 0;
seq__19050_19056 = G__19070;
chunk__19051_19057 = G__19071;
count__19052_19058 = G__19072;
i__19053_19059 = G__19073;
continue;
}
} else
{var vec__19055_19074 = cljs.core.first(seq__19050_19068__$1);var k_19075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055_19074,0,null);var v_19076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19055_19074,1,null);(evt[k_19075] = v_19076);
{
var G__19077 = cljs.core.next(seq__19050_19068__$1);
var G__19078 = null;
var G__19079 = 0;
var G__19080 = 0;
seq__19050_19056 = G__19077;
chunk__19051_19057 = G__19078;
count__19052_19058 = G__19079;
i__19053_19059 = G__19080;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__19081_SHARP_){return goog.events.getListeners(p1__19081_SHARP_,type__$1,false);
}),domina.nodes(content));
});
