// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj45969 = {};return obj45969;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t45973 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t45973 = (function (evt,f,create_listener_function,meta45974){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta45974 = meta45974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t45973.cljs$lang$type = true;
domina.events.t45973.cljs$lang$ctorStr = "domina.events/t45973";
domina.events.t45973.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t45973");
});
domina.events.t45973.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t45973.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t45973.prototype.domina$events$Event$ = true;
domina.events.t45973.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t45973.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t45973.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t45973.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t45973.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t45973.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t45973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45975){var self__ = this;
var _45975__$1 = this;return self__.meta45974;
});
domina.events.t45973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45975,meta45974__$1){var self__ = this;
var _45975__$1 = this;return (new domina.events.t45973(self__.evt,self__.f,self__.create_listener_function,meta45974__$1));
});
domina.events.__GT_t45973 = (function __GT_t45973(evt__$1,f__$1,create_listener_function__$1,meta45974){return (new domina.events.t45973(evt__$1,f__$1,create_listener_function__$1,meta45974));
});
}
return (new domina.events.t45973(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t45973 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t45973 = (function (evt,f,create_listener_function,meta45974){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta45974 = meta45974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t45973.cljs$lang$type = true;
domina.events.t45973.cljs$lang$ctorStr = "domina.events/t45973";
domina.events.t45973.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t45973");
});
domina.events.t45973.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t45973.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t45973.prototype.domina$events$Event$ = true;
domina.events.t45973.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t45973.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t45973.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t45973.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t45973.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t45973.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t45973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45975){var self__ = this;
var _45975__$1 = this;return self__.meta45974;
});
domina.events.t45973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45975,meta45974__$1){var self__ = this;
var _45975__$1 = this;return (new domina.events.t45973(self__.evt,self__.f,self__.create_listener_function,meta45974__$1));
});
domina.events.__GT_t45973 = (function __GT_t45973(evt__$1,f__$1,create_listener_function__$1,meta45974){return (new domina.events.t45973(evt__$1,f__$1,create_listener_function__$1,meta45974));
});
}
return (new domina.events.t45973(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__45980(s__45981){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__45981__$1 = s__45981;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45981__$1);if(temp__4126__auto__)
{var s__45981__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45981__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45981__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45983 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45982 = (0);while(true){
if((i__45982 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45982);cljs.core.chunk_append(b__45983,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__45984 = (i__45982 + (1));
i__45982 = G__45984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45983),iter__45980(cljs.core.chunk_rest(s__45981__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45983),null);
}
} else
{var node = cljs.core.first(s__45981__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__45980(cljs.core.rest(s__45981__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__45993 = cljs.core.seq(domina.nodes(content));var chunk__45994 = null;var count__45995 = (0);var i__45996 = (0);while(true){
if((i__45996 < count__45995))
{var node = chunk__45994.cljs$core$IIndexed$_nth$arity$2(null,i__45996);goog.events.removeAll(node);
{
var G__46001 = seq__45993;
var G__46002 = chunk__45994;
var G__46003 = count__45995;
var G__46004 = (i__45996 + (1));
seq__45993 = G__46001;
chunk__45994 = G__46002;
count__45995 = G__46003;
i__45996 = G__46004;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45993);if(temp__4126__auto__)
{var seq__45993__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45993__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45993__$1);{
var G__46005 = cljs.core.chunk_rest(seq__45993__$1);
var G__46006 = c__4314__auto__;
var G__46007 = cljs.core.count(c__4314__auto__);
var G__46008 = (0);
seq__45993 = G__46005;
chunk__45994 = G__46006;
count__45995 = G__46007;
i__45996 = G__46008;
continue;
}
} else
{var node = cljs.core.first(seq__45993__$1);goog.events.removeAll(node);
{
var G__46009 = cljs.core.next(seq__45993__$1);
var G__46010 = null;
var G__46011 = (0);
var G__46012 = (0);
seq__45993 = G__46009;
chunk__45994 = G__46010;
count__45995 = G__46011;
i__45996 = G__46012;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__45997 = cljs.core.seq(domina.nodes(content));var chunk__45998 = null;var count__45999 = (0);var i__46000 = (0);while(true){
if((i__46000 < count__45999))
{var node = chunk__45998.cljs$core$IIndexed$_nth$arity$2(null,i__46000);goog.events.removeAll(node,type__$1);
{
var G__46013 = seq__45997;
var G__46014 = chunk__45998;
var G__46015 = count__45999;
var G__46016 = (i__46000 + (1));
seq__45997 = G__46013;
chunk__45998 = G__46014;
count__45999 = G__46015;
i__46000 = G__46016;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45997);if(temp__4126__auto__)
{var seq__45997__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45997__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45997__$1);{
var G__46017 = cljs.core.chunk_rest(seq__45997__$1);
var G__46018 = c__4314__auto__;
var G__46019 = cljs.core.count(c__4314__auto__);
var G__46020 = (0);
seq__45997 = G__46017;
chunk__45998 = G__46018;
count__45999 = G__46019;
i__46000 = G__46020;
continue;
}
} else
{var node = cljs.core.first(seq__45997__$1);goog.events.removeAll(node,type__$1);
{
var G__46021 = cljs.core.next(seq__45997__$1);
var G__46022 = null;
var G__46023 = (0);
var G__46024 = (0);
seq__45997 = G__46021;
chunk__45998 = G__46022;
count__45999 = G__46023;
i__46000 = G__46024;
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
var G__46025 = parent;
var G__46026 = cljs.core.cons(parent,so_far);
n = G__46025;
so_far = G__46026;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__46035_46043 = cljs.core.seq(ancestors);var chunk__46036_46044 = null;var count__46037_46045 = (0);var i__46038_46046 = (0);while(true){
if((i__46038_46046 < count__46037_46045))
{var n_46047 = chunk__46036_46044.cljs$core$IIndexed$_nth$arity$2(null,i__46038_46046);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46047;
goog.events.fireListeners(n_46047,evt.type,true,evt);
}
{
var G__46048 = seq__46035_46043;
var G__46049 = chunk__46036_46044;
var G__46050 = count__46037_46045;
var G__46051 = (i__46038_46046 + (1));
seq__46035_46043 = G__46048;
chunk__46036_46044 = G__46049;
count__46037_46045 = G__46050;
i__46038_46046 = G__46051;
continue;
}
} else
{var temp__4126__auto___46052 = cljs.core.seq(seq__46035_46043);if(temp__4126__auto___46052)
{var seq__46035_46053__$1 = temp__4126__auto___46052;if(cljs.core.chunked_seq_QMARK_(seq__46035_46053__$1))
{var c__4314__auto___46054 = cljs.core.chunk_first(seq__46035_46053__$1);{
var G__46055 = cljs.core.chunk_rest(seq__46035_46053__$1);
var G__46056 = c__4314__auto___46054;
var G__46057 = cljs.core.count(c__4314__auto___46054);
var G__46058 = (0);
seq__46035_46043 = G__46055;
chunk__46036_46044 = G__46056;
count__46037_46045 = G__46057;
i__46038_46046 = G__46058;
continue;
}
} else
{var n_46059 = cljs.core.first(seq__46035_46053__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46059;
goog.events.fireListeners(n_46059,evt.type,true,evt);
}
{
var G__46060 = cljs.core.next(seq__46035_46053__$1);
var G__46061 = null;
var G__46062 = (0);
var G__46063 = (0);
seq__46035_46043 = G__46060;
chunk__46036_46044 = G__46061;
count__46037_46045 = G__46062;
i__46038_46046 = G__46063;
continue;
}
}
} else
{}
}
break;
}
var seq__46039_46064 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__46040_46065 = null;var count__46041_46066 = (0);var i__46042_46067 = (0);while(true){
if((i__46042_46067 < count__46041_46066))
{var n_46068 = chunk__46040_46065.cljs$core$IIndexed$_nth$arity$2(null,i__46042_46067);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46068;
goog.events.fireListeners(n_46068,evt.type,false,evt);
}
{
var G__46069 = seq__46039_46064;
var G__46070 = chunk__46040_46065;
var G__46071 = count__46041_46066;
var G__46072 = (i__46042_46067 + (1));
seq__46039_46064 = G__46069;
chunk__46040_46065 = G__46070;
count__46041_46066 = G__46071;
i__46042_46067 = G__46072;
continue;
}
} else
{var temp__4126__auto___46073 = cljs.core.seq(seq__46039_46064);if(temp__4126__auto___46073)
{var seq__46039_46074__$1 = temp__4126__auto___46073;if(cljs.core.chunked_seq_QMARK_(seq__46039_46074__$1))
{var c__4314__auto___46075 = cljs.core.chunk_first(seq__46039_46074__$1);{
var G__46076 = cljs.core.chunk_rest(seq__46039_46074__$1);
var G__46077 = c__4314__auto___46075;
var G__46078 = cljs.core.count(c__4314__auto___46075);
var G__46079 = (0);
seq__46039_46064 = G__46076;
chunk__46040_46065 = G__46077;
count__46041_46066 = G__46078;
i__46042_46067 = G__46079;
continue;
}
} else
{var n_46080 = cljs.core.first(seq__46039_46074__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46080;
goog.events.fireListeners(n_46080,evt.type,false,evt);
}
{
var G__46081 = cljs.core.next(seq__46039_46074__$1);
var G__46082 = null;
var G__46083 = (0);
var G__46084 = (0);
seq__46039_46064 = G__46081;
chunk__46040_46065 = G__46082;
count__46041_46066 = G__46083;
i__46042_46067 = G__46084;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__46091_46097 = cljs.core.seq(evt_map);var chunk__46092_46098 = null;var count__46093_46099 = (0);var i__46094_46100 = (0);while(true){
if((i__46094_46100 < count__46093_46099))
{var vec__46095_46101 = chunk__46092_46098.cljs$core$IIndexed$_nth$arity$2(null,i__46094_46100);var k_46102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46095_46101,(0),null);var v_46103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46095_46101,(1),null);(evt[k_46102] = v_46103);
{
var G__46104 = seq__46091_46097;
var G__46105 = chunk__46092_46098;
var G__46106 = count__46093_46099;
var G__46107 = (i__46094_46100 + (1));
seq__46091_46097 = G__46104;
chunk__46092_46098 = G__46105;
count__46093_46099 = G__46106;
i__46094_46100 = G__46107;
continue;
}
} else
{var temp__4126__auto___46108 = cljs.core.seq(seq__46091_46097);if(temp__4126__auto___46108)
{var seq__46091_46109__$1 = temp__4126__auto___46108;if(cljs.core.chunked_seq_QMARK_(seq__46091_46109__$1))
{var c__4314__auto___46110 = cljs.core.chunk_first(seq__46091_46109__$1);{
var G__46111 = cljs.core.chunk_rest(seq__46091_46109__$1);
var G__46112 = c__4314__auto___46110;
var G__46113 = cljs.core.count(c__4314__auto___46110);
var G__46114 = (0);
seq__46091_46097 = G__46111;
chunk__46092_46098 = G__46112;
count__46093_46099 = G__46113;
i__46094_46100 = G__46114;
continue;
}
} else
{var vec__46096_46115 = cljs.core.first(seq__46091_46109__$1);var k_46116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096_46115,(0),null);var v_46117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096_46115,(1),null);(evt[k_46116] = v_46117);
{
var G__46118 = cljs.core.next(seq__46091_46109__$1);
var G__46119 = null;
var G__46120 = (0);
var G__46121 = (0);
seq__46091_46097 = G__46118;
chunk__46092_46098 = G__46119;
count__46093_46099 = G__46120;
i__46094_46100 = G__46121;
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
return (function (p1__46122_SHARP_){return goog.events.getListeners(p1__46122_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
