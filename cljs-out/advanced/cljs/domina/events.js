// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25925 = {};return obj25925;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25929 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25929 = (function (evt,f,create_listener_function,meta25930){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25930 = meta25930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25929.cljs$lang$type = true;
domina.events.t25929.cljs$lang$ctorStr = "domina.events/t25929";
domina.events.t25929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25929");
});
domina.events.t25929.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25929.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25929.prototype.domina$events$Event$ = true;
domina.events.t25929.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25929.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25929.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25929.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25929.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25929.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25931){var self__ = this;
var _25931__$1 = this;return self__.meta25930;
});
domina.events.t25929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25931,meta25930__$1){var self__ = this;
var _25931__$1 = this;return (new domina.events.t25929(self__.evt,self__.f,self__.create_listener_function,meta25930__$1));
});
domina.events.__GT_t25929 = (function __GT_t25929(evt__$1,f__$1,create_listener_function__$1,meta25930){return (new domina.events.t25929(evt__$1,f__$1,create_listener_function__$1,meta25930));
});
}
return (new domina.events.t25929(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25929 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25929 = (function (evt,f,create_listener_function,meta25930){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25930 = meta25930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25929.cljs$lang$type = true;
domina.events.t25929.cljs$lang$ctorStr = "domina.events/t25929";
domina.events.t25929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25929");
});
domina.events.t25929.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25929.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25929.prototype.domina$events$Event$ = true;
domina.events.t25929.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25929.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25929.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25929.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25929.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25929.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25931){var self__ = this;
var _25931__$1 = this;return self__.meta25930;
});
domina.events.t25929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25931,meta25930__$1){var self__ = this;
var _25931__$1 = this;return (new domina.events.t25929(self__.evt,self__.f,self__.create_listener_function,meta25930__$1));
});
domina.events.__GT_t25929 = (function __GT_t25929(evt__$1,f__$1,create_listener_function__$1,meta25930){return (new domina.events.t25929(evt__$1,f__$1,create_listener_function__$1,meta25930));
});
}
return (new domina.events.t25929(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25936(s__25937){return (new cljs.core.LazySeq(null,(function (){var s__25937__$1 = s__25937;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25937__$1);if(temp__4092__auto__)
{var s__25937__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25937__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25937__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25939 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25938 = 0;while(true){
if((i__25938 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25938);cljs.core.chunk_append(b__25939,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25940 = (i__25938 + 1);
i__25938 = G__25940;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25939),iter__25936(cljs.core.chunk_rest(s__25937__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25939),null);
}
} else
{var node = cljs.core.first(s__25937__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25936(cljs.core.rest(s__25937__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25949 = cljs.core.seq(domina.nodes(content));var chunk__25950 = null;var count__25951 = 0;var i__25952 = 0;while(true){
if((i__25952 < count__25951))
{var node = chunk__25950.cljs$core$IIndexed$_nth$arity$2(null,i__25952);goog.events.removeAll(node);
{
var G__25957 = seq__25949;
var G__25958 = chunk__25950;
var G__25959 = count__25951;
var G__25960 = (i__25952 + 1);
seq__25949 = G__25957;
chunk__25950 = G__25958;
count__25951 = G__25959;
i__25952 = G__25960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25949);if(temp__4092__auto__)
{var seq__25949__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25949__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25949__$1);{
var G__25961 = cljs.core.chunk_rest(seq__25949__$1);
var G__25962 = c__4148__auto__;
var G__25963 = cljs.core.count(c__4148__auto__);
var G__25964 = 0;
seq__25949 = G__25961;
chunk__25950 = G__25962;
count__25951 = G__25963;
i__25952 = G__25964;
continue;
}
} else
{var node = cljs.core.first(seq__25949__$1);goog.events.removeAll(node);
{
var G__25965 = cljs.core.next(seq__25949__$1);
var G__25966 = null;
var G__25967 = 0;
var G__25968 = 0;
seq__25949 = G__25965;
chunk__25950 = G__25966;
count__25951 = G__25967;
i__25952 = G__25968;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25953 = cljs.core.seq(domina.nodes(content));var chunk__25954 = null;var count__25955 = 0;var i__25956 = 0;while(true){
if((i__25956 < count__25955))
{var node = chunk__25954.cljs$core$IIndexed$_nth$arity$2(null,i__25956);goog.events.removeAll(node,type__$1);
{
var G__25969 = seq__25953;
var G__25970 = chunk__25954;
var G__25971 = count__25955;
var G__25972 = (i__25956 + 1);
seq__25953 = G__25969;
chunk__25954 = G__25970;
count__25955 = G__25971;
i__25956 = G__25972;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25953);if(temp__4092__auto__)
{var seq__25953__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25953__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25953__$1);{
var G__25973 = cljs.core.chunk_rest(seq__25953__$1);
var G__25974 = c__4148__auto__;
var G__25975 = cljs.core.count(c__4148__auto__);
var G__25976 = 0;
seq__25953 = G__25973;
chunk__25954 = G__25974;
count__25955 = G__25975;
i__25956 = G__25976;
continue;
}
} else
{var node = cljs.core.first(seq__25953__$1);goog.events.removeAll(node,type__$1);
{
var G__25977 = cljs.core.next(seq__25953__$1);
var G__25978 = null;
var G__25979 = 0;
var G__25980 = 0;
seq__25953 = G__25977;
chunk__25954 = G__25978;
count__25955 = G__25979;
i__25956 = G__25980;
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
var G__25981 = parent;
var G__25982 = cljs.core.cons(parent,so_far);
n = G__25981;
so_far = G__25982;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25991_25999 = cljs.core.seq(ancestors);var chunk__25992_26000 = null;var count__25993_26001 = 0;var i__25994_26002 = 0;while(true){
if((i__25994_26002 < count__25993_26001))
{var n_26003 = chunk__25992_26000.cljs$core$IIndexed$_nth$arity$2(null,i__25994_26002);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26003;
goog.events.fireListeners(n_26003,evt.type,true,evt);
}
{
var G__26004 = seq__25991_25999;
var G__26005 = chunk__25992_26000;
var G__26006 = count__25993_26001;
var G__26007 = (i__25994_26002 + 1);
seq__25991_25999 = G__26004;
chunk__25992_26000 = G__26005;
count__25993_26001 = G__26006;
i__25994_26002 = G__26007;
continue;
}
} else
{var temp__4092__auto___26008 = cljs.core.seq(seq__25991_25999);if(temp__4092__auto___26008)
{var seq__25991_26009__$1 = temp__4092__auto___26008;if(cljs.core.chunked_seq_QMARK_(seq__25991_26009__$1))
{var c__4148__auto___26010 = cljs.core.chunk_first(seq__25991_26009__$1);{
var G__26011 = cljs.core.chunk_rest(seq__25991_26009__$1);
var G__26012 = c__4148__auto___26010;
var G__26013 = cljs.core.count(c__4148__auto___26010);
var G__26014 = 0;
seq__25991_25999 = G__26011;
chunk__25992_26000 = G__26012;
count__25993_26001 = G__26013;
i__25994_26002 = G__26014;
continue;
}
} else
{var n_26015 = cljs.core.first(seq__25991_26009__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26015;
goog.events.fireListeners(n_26015,evt.type,true,evt);
}
{
var G__26016 = cljs.core.next(seq__25991_26009__$1);
var G__26017 = null;
var G__26018 = 0;
var G__26019 = 0;
seq__25991_25999 = G__26016;
chunk__25992_26000 = G__26017;
count__25993_26001 = G__26018;
i__25994_26002 = G__26019;
continue;
}
}
} else
{}
}
break;
}
var seq__25995_26020 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25996_26021 = null;var count__25997_26022 = 0;var i__25998_26023 = 0;while(true){
if((i__25998_26023 < count__25997_26022))
{var n_26024 = chunk__25996_26021.cljs$core$IIndexed$_nth$arity$2(null,i__25998_26023);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26024;
goog.events.fireListeners(n_26024,evt.type,false,evt);
}
{
var G__26025 = seq__25995_26020;
var G__26026 = chunk__25996_26021;
var G__26027 = count__25997_26022;
var G__26028 = (i__25998_26023 + 1);
seq__25995_26020 = G__26025;
chunk__25996_26021 = G__26026;
count__25997_26022 = G__26027;
i__25998_26023 = G__26028;
continue;
}
} else
{var temp__4092__auto___26029 = cljs.core.seq(seq__25995_26020);if(temp__4092__auto___26029)
{var seq__25995_26030__$1 = temp__4092__auto___26029;if(cljs.core.chunked_seq_QMARK_(seq__25995_26030__$1))
{var c__4148__auto___26031 = cljs.core.chunk_first(seq__25995_26030__$1);{
var G__26032 = cljs.core.chunk_rest(seq__25995_26030__$1);
var G__26033 = c__4148__auto___26031;
var G__26034 = cljs.core.count(c__4148__auto___26031);
var G__26035 = 0;
seq__25995_26020 = G__26032;
chunk__25996_26021 = G__26033;
count__25997_26022 = G__26034;
i__25998_26023 = G__26035;
continue;
}
} else
{var n_26036 = cljs.core.first(seq__25995_26030__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26036;
goog.events.fireListeners(n_26036,evt.type,false,evt);
}
{
var G__26037 = cljs.core.next(seq__25995_26030__$1);
var G__26038 = null;
var G__26039 = 0;
var G__26040 = 0;
seq__25995_26020 = G__26037;
chunk__25996_26021 = G__26038;
count__25997_26022 = G__26039;
i__25998_26023 = G__26040;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26047_26053 = cljs.core.seq(evt_map);var chunk__26048_26054 = null;var count__26049_26055 = 0;var i__26050_26056 = 0;while(true){
if((i__26050_26056 < count__26049_26055))
{var vec__26051_26057 = chunk__26048_26054.cljs$core$IIndexed$_nth$arity$2(null,i__26050_26056);var k_26058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26051_26057,0,null);var v_26059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26051_26057,1,null);(evt[k_26058] = v_26059);
{
var G__26060 = seq__26047_26053;
var G__26061 = chunk__26048_26054;
var G__26062 = count__26049_26055;
var G__26063 = (i__26050_26056 + 1);
seq__26047_26053 = G__26060;
chunk__26048_26054 = G__26061;
count__26049_26055 = G__26062;
i__26050_26056 = G__26063;
continue;
}
} else
{var temp__4092__auto___26064 = cljs.core.seq(seq__26047_26053);if(temp__4092__auto___26064)
{var seq__26047_26065__$1 = temp__4092__auto___26064;if(cljs.core.chunked_seq_QMARK_(seq__26047_26065__$1))
{var c__4148__auto___26066 = cljs.core.chunk_first(seq__26047_26065__$1);{
var G__26067 = cljs.core.chunk_rest(seq__26047_26065__$1);
var G__26068 = c__4148__auto___26066;
var G__26069 = cljs.core.count(c__4148__auto___26066);
var G__26070 = 0;
seq__26047_26053 = G__26067;
chunk__26048_26054 = G__26068;
count__26049_26055 = G__26069;
i__26050_26056 = G__26070;
continue;
}
} else
{var vec__26052_26071 = cljs.core.first(seq__26047_26065__$1);var k_26072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052_26071,0,null);var v_26073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052_26071,1,null);(evt[k_26072] = v_26073);
{
var G__26074 = cljs.core.next(seq__26047_26065__$1);
var G__26075 = null;
var G__26076 = 0;
var G__26077 = 0;
seq__26047_26053 = G__26074;
chunk__26048_26054 = G__26075;
count__26049_26055 = G__26076;
i__26050_26056 = G__26077;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26078_SHARP_){return goog.events.getListeners(p1__26078_SHARP_,type__$1,false);
}),domina.nodes(content));
});
