// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj42054 = {};return obj42054;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t42058 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42058 = (function (evt,f,create_listener_function,meta42059){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42059 = meta42059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42058.cljs$lang$type = true;
domina.events.t42058.cljs$lang$ctorStr = "domina.events/t42058";
domina.events.t42058.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42058");
});
domina.events.t42058.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42058.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42058.prototype.domina$events$Event$ = true;
domina.events.t42058.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42058.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42058.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42058.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42058.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42058.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42060){var self__ = this;
var _42060__$1 = this;return self__.meta42059;
});
domina.events.t42058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42060,meta42059__$1){var self__ = this;
var _42060__$1 = this;return (new domina.events.t42058(self__.evt,self__.f,self__.create_listener_function,meta42059__$1));
});
domina.events.__GT_t42058 = (function __GT_t42058(evt__$1,f__$1,create_listener_function__$1,meta42059){return (new domina.events.t42058(evt__$1,f__$1,create_listener_function__$1,meta42059));
});
}
return (new domina.events.t42058(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t42058 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42058 = (function (evt,f,create_listener_function,meta42059){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42059 = meta42059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42058.cljs$lang$type = true;
domina.events.t42058.cljs$lang$ctorStr = "domina.events/t42058";
domina.events.t42058.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42058");
});
domina.events.t42058.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42058.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42058.prototype.domina$events$Event$ = true;
domina.events.t42058.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42058.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42058.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42058.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42058.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42058.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42060){var self__ = this;
var _42060__$1 = this;return self__.meta42059;
});
domina.events.t42058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42060,meta42059__$1){var self__ = this;
var _42060__$1 = this;return (new domina.events.t42058(self__.evt,self__.f,self__.create_listener_function,meta42059__$1));
});
domina.events.__GT_t42058 = (function __GT_t42058(evt__$1,f__$1,create_listener_function__$1,meta42059){return (new domina.events.t42058(evt__$1,f__$1,create_listener_function__$1,meta42059));
});
}
return (new domina.events.t42058(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__42065(s__42066){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__42066__$1 = s__42066;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42066__$1);if(temp__4126__auto__)
{var s__42066__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42066__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42066__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42068 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42067 = (0);while(true){
if((i__42067 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42067);cljs.core.chunk_append(b__42068,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__42069 = (i__42067 + (1));
i__42067 = G__42069;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42068),iter__42065(cljs.core.chunk_rest(s__42066__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42068),null);
}
} else
{var node = cljs.core.first(s__42066__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__42065(cljs.core.rest(s__42066__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__42078 = cljs.core.seq(domina.nodes(content));var chunk__42079 = null;var count__42080 = (0);var i__42081 = (0);while(true){
if((i__42081 < count__42080))
{var node = chunk__42079.cljs$core$IIndexed$_nth$arity$2(null,i__42081);goog.events.removeAll(node);
{
var G__42086 = seq__42078;
var G__42087 = chunk__42079;
var G__42088 = count__42080;
var G__42089 = (i__42081 + (1));
seq__42078 = G__42086;
chunk__42079 = G__42087;
count__42080 = G__42088;
i__42081 = G__42089;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42078);if(temp__4126__auto__)
{var seq__42078__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42078__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42078__$1);{
var G__42090 = cljs.core.chunk_rest(seq__42078__$1);
var G__42091 = c__4299__auto__;
var G__42092 = cljs.core.count(c__4299__auto__);
var G__42093 = (0);
seq__42078 = G__42090;
chunk__42079 = G__42091;
count__42080 = G__42092;
i__42081 = G__42093;
continue;
}
} else
{var node = cljs.core.first(seq__42078__$1);goog.events.removeAll(node);
{
var G__42094 = cljs.core.next(seq__42078__$1);
var G__42095 = null;
var G__42096 = (0);
var G__42097 = (0);
seq__42078 = G__42094;
chunk__42079 = G__42095;
count__42080 = G__42096;
i__42081 = G__42097;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__42082 = cljs.core.seq(domina.nodes(content));var chunk__42083 = null;var count__42084 = (0);var i__42085 = (0);while(true){
if((i__42085 < count__42084))
{var node = chunk__42083.cljs$core$IIndexed$_nth$arity$2(null,i__42085);goog.events.removeAll(node,type__$1);
{
var G__42098 = seq__42082;
var G__42099 = chunk__42083;
var G__42100 = count__42084;
var G__42101 = (i__42085 + (1));
seq__42082 = G__42098;
chunk__42083 = G__42099;
count__42084 = G__42100;
i__42085 = G__42101;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42082);if(temp__4126__auto__)
{var seq__42082__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42082__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42082__$1);{
var G__42102 = cljs.core.chunk_rest(seq__42082__$1);
var G__42103 = c__4299__auto__;
var G__42104 = cljs.core.count(c__4299__auto__);
var G__42105 = (0);
seq__42082 = G__42102;
chunk__42083 = G__42103;
count__42084 = G__42104;
i__42085 = G__42105;
continue;
}
} else
{var node = cljs.core.first(seq__42082__$1);goog.events.removeAll(node,type__$1);
{
var G__42106 = cljs.core.next(seq__42082__$1);
var G__42107 = null;
var G__42108 = (0);
var G__42109 = (0);
seq__42082 = G__42106;
chunk__42083 = G__42107;
count__42084 = G__42108;
i__42085 = G__42109;
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
var G__42110 = parent;
var G__42111 = cljs.core.cons(parent,so_far);
n = G__42110;
so_far = G__42111;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__42120_42128 = cljs.core.seq(ancestors);var chunk__42121_42129 = null;var count__42122_42130 = (0);var i__42123_42131 = (0);while(true){
if((i__42123_42131 < count__42122_42130))
{var n_42132 = chunk__42121_42129.cljs$core$IIndexed$_nth$arity$2(null,i__42123_42131);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42132;
goog.events.fireListeners(n_42132,evt.type,true,evt);
}
{
var G__42133 = seq__42120_42128;
var G__42134 = chunk__42121_42129;
var G__42135 = count__42122_42130;
var G__42136 = (i__42123_42131 + (1));
seq__42120_42128 = G__42133;
chunk__42121_42129 = G__42134;
count__42122_42130 = G__42135;
i__42123_42131 = G__42136;
continue;
}
} else
{var temp__4126__auto___42137 = cljs.core.seq(seq__42120_42128);if(temp__4126__auto___42137)
{var seq__42120_42138__$1 = temp__4126__auto___42137;if(cljs.core.chunked_seq_QMARK_(seq__42120_42138__$1))
{var c__4299__auto___42139 = cljs.core.chunk_first(seq__42120_42138__$1);{
var G__42140 = cljs.core.chunk_rest(seq__42120_42138__$1);
var G__42141 = c__4299__auto___42139;
var G__42142 = cljs.core.count(c__4299__auto___42139);
var G__42143 = (0);
seq__42120_42128 = G__42140;
chunk__42121_42129 = G__42141;
count__42122_42130 = G__42142;
i__42123_42131 = G__42143;
continue;
}
} else
{var n_42144 = cljs.core.first(seq__42120_42138__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42144;
goog.events.fireListeners(n_42144,evt.type,true,evt);
}
{
var G__42145 = cljs.core.next(seq__42120_42138__$1);
var G__42146 = null;
var G__42147 = (0);
var G__42148 = (0);
seq__42120_42128 = G__42145;
chunk__42121_42129 = G__42146;
count__42122_42130 = G__42147;
i__42123_42131 = G__42148;
continue;
}
}
} else
{}
}
break;
}
var seq__42124_42149 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__42125_42150 = null;var count__42126_42151 = (0);var i__42127_42152 = (0);while(true){
if((i__42127_42152 < count__42126_42151))
{var n_42153 = chunk__42125_42150.cljs$core$IIndexed$_nth$arity$2(null,i__42127_42152);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42153;
goog.events.fireListeners(n_42153,evt.type,false,evt);
}
{
var G__42154 = seq__42124_42149;
var G__42155 = chunk__42125_42150;
var G__42156 = count__42126_42151;
var G__42157 = (i__42127_42152 + (1));
seq__42124_42149 = G__42154;
chunk__42125_42150 = G__42155;
count__42126_42151 = G__42156;
i__42127_42152 = G__42157;
continue;
}
} else
{var temp__4126__auto___42158 = cljs.core.seq(seq__42124_42149);if(temp__4126__auto___42158)
{var seq__42124_42159__$1 = temp__4126__auto___42158;if(cljs.core.chunked_seq_QMARK_(seq__42124_42159__$1))
{var c__4299__auto___42160 = cljs.core.chunk_first(seq__42124_42159__$1);{
var G__42161 = cljs.core.chunk_rest(seq__42124_42159__$1);
var G__42162 = c__4299__auto___42160;
var G__42163 = cljs.core.count(c__4299__auto___42160);
var G__42164 = (0);
seq__42124_42149 = G__42161;
chunk__42125_42150 = G__42162;
count__42126_42151 = G__42163;
i__42127_42152 = G__42164;
continue;
}
} else
{var n_42165 = cljs.core.first(seq__42124_42159__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42165;
goog.events.fireListeners(n_42165,evt.type,false,evt);
}
{
var G__42166 = cljs.core.next(seq__42124_42159__$1);
var G__42167 = null;
var G__42168 = (0);
var G__42169 = (0);
seq__42124_42149 = G__42166;
chunk__42125_42150 = G__42167;
count__42126_42151 = G__42168;
i__42127_42152 = G__42169;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__42176_42182 = cljs.core.seq(evt_map);var chunk__42177_42183 = null;var count__42178_42184 = (0);var i__42179_42185 = (0);while(true){
if((i__42179_42185 < count__42178_42184))
{var vec__42180_42186 = chunk__42177_42183.cljs$core$IIndexed$_nth$arity$2(null,i__42179_42185);var k_42187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42180_42186,(0),null);var v_42188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42180_42186,(1),null);(evt[k_42187] = v_42188);
{
var G__42189 = seq__42176_42182;
var G__42190 = chunk__42177_42183;
var G__42191 = count__42178_42184;
var G__42192 = (i__42179_42185 + (1));
seq__42176_42182 = G__42189;
chunk__42177_42183 = G__42190;
count__42178_42184 = G__42191;
i__42179_42185 = G__42192;
continue;
}
} else
{var temp__4126__auto___42193 = cljs.core.seq(seq__42176_42182);if(temp__4126__auto___42193)
{var seq__42176_42194__$1 = temp__4126__auto___42193;if(cljs.core.chunked_seq_QMARK_(seq__42176_42194__$1))
{var c__4299__auto___42195 = cljs.core.chunk_first(seq__42176_42194__$1);{
var G__42196 = cljs.core.chunk_rest(seq__42176_42194__$1);
var G__42197 = c__4299__auto___42195;
var G__42198 = cljs.core.count(c__4299__auto___42195);
var G__42199 = (0);
seq__42176_42182 = G__42196;
chunk__42177_42183 = G__42197;
count__42178_42184 = G__42198;
i__42179_42185 = G__42199;
continue;
}
} else
{var vec__42181_42200 = cljs.core.first(seq__42176_42194__$1);var k_42201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42181_42200,(0),null);var v_42202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42181_42200,(1),null);(evt[k_42201] = v_42202);
{
var G__42203 = cljs.core.next(seq__42176_42194__$1);
var G__42204 = null;
var G__42205 = (0);
var G__42206 = (0);
seq__42176_42182 = G__42203;
chunk__42177_42183 = G__42204;
count__42178_42184 = G__42205;
i__42179_42185 = G__42206;
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
return (function (p1__42207_SHARP_){return goog.events.getListeners(p1__42207_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
