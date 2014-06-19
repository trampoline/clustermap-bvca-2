// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39944 = {};return obj39944;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.prevent_default[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.prevent_default["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.current_target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.current_target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.event_type[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.event_type["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.raw_event[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.raw_event["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39948 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39948 = (function (evt,f,create_listener_function,meta39949){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39949 = meta39949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39948.cljs$lang$type = true;
domina.events.t39948.cljs$lang$ctorStr = "domina.events/t39948";
domina.events.t39948.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"domina.events/t39948");
});
domina.events.t39948.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39948.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t39948.prototype.domina$events$Event$ = true;
domina.events.t39948.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39948.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39948.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39948.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39948.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39948.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39950){var self__ = this;
var _39950__$1 = this;return self__.meta39949;
});
domina.events.t39948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39950,meta39949__$1){var self__ = this;
var _39950__$1 = this;return (new domina.events.t39948(self__.evt,self__.f,self__.create_listener_function,meta39949__$1));
});
domina.events.__GT_t39948 = (function __GT_t39948(evt__$1,f__$1,create_listener_function__$1,meta39949){return (new domina.events.t39948(evt__$1,f__$1,create_listener_function__$1,meta39949));
});
}
return (new domina.events.t39948(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39948 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39948 = (function (evt,f,create_listener_function,meta39949){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39949 = meta39949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39948.cljs$lang$type = true;
domina.events.t39948.cljs$lang$ctorStr = "domina.events/t39948";
domina.events.t39948.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"domina.events/t39948");
});
domina.events.t39948.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39948.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t39948.prototype.domina$events$Event$ = true;
domina.events.t39948.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39948.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39948.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39948.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39948.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39948.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39950){var self__ = this;
var _39950__$1 = this;return self__.meta39949;
});
domina.events.t39948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39950,meta39949__$1){var self__ = this;
var _39950__$1 = this;return (new domina.events.t39948(self__.evt,self__.f,self__.create_listener_function,meta39949__$1));
});
domina.events.__GT_t39948 = (function __GT_t39948(evt__$1,f__$1,create_listener_function__$1,meta39949){return (new domina.events.t39948(evt__$1,f__$1,create_listener_function__$1,meta39949));
});
}
return (new domina.events.t39948(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4264__auto__ = ((function (f,t){
return (function iter__39955(s__39956){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__39956__$1 = s__39956;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39956__$1);if(temp__4126__auto__)
{var s__39956__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39956__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39956__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39958 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39957 = 0;while(true){
if((i__39957 < size__4263__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39957);cljs.core.chunk_append(b__39958,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39959 = (i__39957 + 1);
i__39957 = G__39959;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39958),iter__39955(cljs.core.chunk_rest(s__39956__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39958),null);
}
} else
{var node = cljs.core.first(s__39956__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39955(cljs.core.rest(s__39956__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4264__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__39968 = cljs.core.seq(domina.nodes(content));var chunk__39969 = null;var count__39970 = 0;var i__39971 = 0;while(true){
if((i__39971 < count__39970))
{var node = chunk__39969.cljs$core$IIndexed$_nth$arity$2(null,i__39971);goog.events.removeAll(node);
{
var G__39976 = seq__39968;
var G__39977 = chunk__39969;
var G__39978 = count__39970;
var G__39979 = (i__39971 + 1);
seq__39968 = G__39976;
chunk__39969 = G__39977;
count__39970 = G__39978;
i__39971 = G__39979;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39968);if(temp__4126__auto__)
{var seq__39968__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39968__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__39968__$1);{
var G__39980 = cljs.core.chunk_rest(seq__39968__$1);
var G__39981 = c__4295__auto__;
var G__39982 = cljs.core.count(c__4295__auto__);
var G__39983 = 0;
seq__39968 = G__39980;
chunk__39969 = G__39981;
count__39970 = G__39982;
i__39971 = G__39983;
continue;
}
} else
{var node = cljs.core.first(seq__39968__$1);goog.events.removeAll(node);
{
var G__39984 = cljs.core.next(seq__39968__$1);
var G__39985 = null;
var G__39986 = 0;
var G__39987 = 0;
seq__39968 = G__39984;
chunk__39969 = G__39985;
count__39970 = G__39986;
i__39971 = G__39987;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39972 = cljs.core.seq(domina.nodes(content));var chunk__39973 = null;var count__39974 = 0;var i__39975 = 0;while(true){
if((i__39975 < count__39974))
{var node = chunk__39973.cljs$core$IIndexed$_nth$arity$2(null,i__39975);goog.events.removeAll(node,type__$1);
{
var G__39988 = seq__39972;
var G__39989 = chunk__39973;
var G__39990 = count__39974;
var G__39991 = (i__39975 + 1);
seq__39972 = G__39988;
chunk__39973 = G__39989;
count__39974 = G__39990;
i__39975 = G__39991;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39972);if(temp__4126__auto__)
{var seq__39972__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39972__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__39972__$1);{
var G__39992 = cljs.core.chunk_rest(seq__39972__$1);
var G__39993 = c__4295__auto__;
var G__39994 = cljs.core.count(c__4295__auto__);
var G__39995 = 0;
seq__39972 = G__39992;
chunk__39973 = G__39993;
count__39974 = G__39994;
i__39975 = G__39995;
continue;
}
} else
{var node = cljs.core.first(seq__39972__$1);goog.events.removeAll(node,type__$1);
{
var G__39996 = cljs.core.next(seq__39972__$1);
var G__39997 = null;
var G__39998 = 0;
var G__39999 = 0;
seq__39972 = G__39996;
chunk__39973 = G__39997;
count__39974 = G__39998;
i__39975 = G__39999;
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
var G__40000 = parent;
var G__40001 = cljs.core.cons(parent,so_far);
n = G__40000;
so_far = G__40001;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__40010_40018 = cljs.core.seq(ancestors);var chunk__40011_40019 = null;var count__40012_40020 = 0;var i__40013_40021 = 0;while(true){
if((i__40013_40021 < count__40012_40020))
{var n_40022 = chunk__40011_40019.cljs$core$IIndexed$_nth$arity$2(null,i__40013_40021);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40022;
goog.events.fireListeners(n_40022,evt.type,true,evt);
}
{
var G__40023 = seq__40010_40018;
var G__40024 = chunk__40011_40019;
var G__40025 = count__40012_40020;
var G__40026 = (i__40013_40021 + 1);
seq__40010_40018 = G__40023;
chunk__40011_40019 = G__40024;
count__40012_40020 = G__40025;
i__40013_40021 = G__40026;
continue;
}
} else
{var temp__4126__auto___40027 = cljs.core.seq(seq__40010_40018);if(temp__4126__auto___40027)
{var seq__40010_40028__$1 = temp__4126__auto___40027;if(cljs.core.chunked_seq_QMARK_(seq__40010_40028__$1))
{var c__4295__auto___40029 = cljs.core.chunk_first(seq__40010_40028__$1);{
var G__40030 = cljs.core.chunk_rest(seq__40010_40028__$1);
var G__40031 = c__4295__auto___40029;
var G__40032 = cljs.core.count(c__4295__auto___40029);
var G__40033 = 0;
seq__40010_40018 = G__40030;
chunk__40011_40019 = G__40031;
count__40012_40020 = G__40032;
i__40013_40021 = G__40033;
continue;
}
} else
{var n_40034 = cljs.core.first(seq__40010_40028__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40034;
goog.events.fireListeners(n_40034,evt.type,true,evt);
}
{
var G__40035 = cljs.core.next(seq__40010_40028__$1);
var G__40036 = null;
var G__40037 = 0;
var G__40038 = 0;
seq__40010_40018 = G__40035;
chunk__40011_40019 = G__40036;
count__40012_40020 = G__40037;
i__40013_40021 = G__40038;
continue;
}
}
} else
{}
}
break;
}
var seq__40014_40039 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__40015_40040 = null;var count__40016_40041 = 0;var i__40017_40042 = 0;while(true){
if((i__40017_40042 < count__40016_40041))
{var n_40043 = chunk__40015_40040.cljs$core$IIndexed$_nth$arity$2(null,i__40017_40042);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40043;
goog.events.fireListeners(n_40043,evt.type,false,evt);
}
{
var G__40044 = seq__40014_40039;
var G__40045 = chunk__40015_40040;
var G__40046 = count__40016_40041;
var G__40047 = (i__40017_40042 + 1);
seq__40014_40039 = G__40044;
chunk__40015_40040 = G__40045;
count__40016_40041 = G__40046;
i__40017_40042 = G__40047;
continue;
}
} else
{var temp__4126__auto___40048 = cljs.core.seq(seq__40014_40039);if(temp__4126__auto___40048)
{var seq__40014_40049__$1 = temp__4126__auto___40048;if(cljs.core.chunked_seq_QMARK_(seq__40014_40049__$1))
{var c__4295__auto___40050 = cljs.core.chunk_first(seq__40014_40049__$1);{
var G__40051 = cljs.core.chunk_rest(seq__40014_40049__$1);
var G__40052 = c__4295__auto___40050;
var G__40053 = cljs.core.count(c__4295__auto___40050);
var G__40054 = 0;
seq__40014_40039 = G__40051;
chunk__40015_40040 = G__40052;
count__40016_40041 = G__40053;
i__40017_40042 = G__40054;
continue;
}
} else
{var n_40055 = cljs.core.first(seq__40014_40049__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40055;
goog.events.fireListeners(n_40055,evt.type,false,evt);
}
{
var G__40056 = cljs.core.next(seq__40014_40049__$1);
var G__40057 = null;
var G__40058 = 0;
var G__40059 = 0;
seq__40014_40039 = G__40056;
chunk__40015_40040 = G__40057;
count__40016_40041 = G__40058;
i__40017_40042 = G__40059;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3527__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3527__auto__))
{return o.dispatchEvent;
} else
{return and__3527__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__40066_40072 = cljs.core.seq(evt_map);var chunk__40067_40073 = null;var count__40068_40074 = 0;var i__40069_40075 = 0;while(true){
if((i__40069_40075 < count__40068_40074))
{var vec__40070_40076 = chunk__40067_40073.cljs$core$IIndexed$_nth$arity$2(null,i__40069_40075);var k_40077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40070_40076,0,null);var v_40078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40070_40076,1,null);(evt[k_40077] = v_40078);
{
var G__40079 = seq__40066_40072;
var G__40080 = chunk__40067_40073;
var G__40081 = count__40068_40074;
var G__40082 = (i__40069_40075 + 1);
seq__40066_40072 = G__40079;
chunk__40067_40073 = G__40080;
count__40068_40074 = G__40081;
i__40069_40075 = G__40082;
continue;
}
} else
{var temp__4126__auto___40083 = cljs.core.seq(seq__40066_40072);if(temp__4126__auto___40083)
{var seq__40066_40084__$1 = temp__4126__auto___40083;if(cljs.core.chunked_seq_QMARK_(seq__40066_40084__$1))
{var c__4295__auto___40085 = cljs.core.chunk_first(seq__40066_40084__$1);{
var G__40086 = cljs.core.chunk_rest(seq__40066_40084__$1);
var G__40087 = c__4295__auto___40085;
var G__40088 = cljs.core.count(c__4295__auto___40085);
var G__40089 = 0;
seq__40066_40072 = G__40086;
chunk__40067_40073 = G__40087;
count__40068_40074 = G__40088;
i__40069_40075 = G__40089;
continue;
}
} else
{var vec__40071_40090 = cljs.core.first(seq__40066_40084__$1);var k_40091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071_40090,0,null);var v_40092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071_40090,1,null);(evt[k_40091] = v_40092);
{
var G__40093 = cljs.core.next(seq__40066_40084__$1);
var G__40094 = null;
var G__40095 = 0;
var G__40096 = 0;
seq__40066_40072 = G__40093;
chunk__40067_40073 = G__40094;
count__40068_40074 = G__40095;
i__40069_40075 = G__40096;
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
return (function (p1__40097_SHARP_){return goog.events.getListeners(p1__40097_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
