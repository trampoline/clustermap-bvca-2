// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj44031 = {};return obj44031;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t44035 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44035 = (function (evt,f,create_listener_function,meta44036){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44036 = meta44036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44035.cljs$lang$type = true;
domina.events.t44035.cljs$lang$ctorStr = "domina.events/t44035";
domina.events.t44035.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t44035");
});
domina.events.t44035.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44035.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t44035.prototype.domina$events$Event$ = true;
domina.events.t44035.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44035.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44035.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44035.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44035.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44035.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44037){var self__ = this;
var _44037__$1 = this;return self__.meta44036;
});
domina.events.t44035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44037,meta44036__$1){var self__ = this;
var _44037__$1 = this;return (new domina.events.t44035(self__.evt,self__.f,self__.create_listener_function,meta44036__$1));
});
domina.events.__GT_t44035 = (function __GT_t44035(evt__$1,f__$1,create_listener_function__$1,meta44036){return (new domina.events.t44035(evt__$1,f__$1,create_listener_function__$1,meta44036));
});
}
return (new domina.events.t44035(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t44035 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44035 = (function (evt,f,create_listener_function,meta44036){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44036 = meta44036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44035.cljs$lang$type = true;
domina.events.t44035.cljs$lang$ctorStr = "domina.events/t44035";
domina.events.t44035.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t44035");
});
domina.events.t44035.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44035.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t44035.prototype.domina$events$Event$ = true;
domina.events.t44035.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44035.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44035.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44035.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44035.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44035.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44037){var self__ = this;
var _44037__$1 = this;return self__.meta44036;
});
domina.events.t44035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44037,meta44036__$1){var self__ = this;
var _44037__$1 = this;return (new domina.events.t44035(self__.evt,self__.f,self__.create_listener_function,meta44036__$1));
});
domina.events.__GT_t44035 = (function __GT_t44035(evt__$1,f__$1,create_listener_function__$1,meta44036){return (new domina.events.t44035(evt__$1,f__$1,create_listener_function__$1,meta44036));
});
}
return (new domina.events.t44035(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__44042(s__44043){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__44043__$1 = s__44043;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44043__$1);if(temp__4126__auto__)
{var s__44043__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44043__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44043__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44045 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44044 = (0);while(true){
if((i__44044 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44044);cljs.core.chunk_append(b__44045,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__44046 = (i__44044 + (1));
i__44044 = G__44046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44045),iter__44042(cljs.core.chunk_rest(s__44043__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44045),null);
}
} else
{var node = cljs.core.first(s__44043__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__44042(cljs.core.rest(s__44043__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__44055 = cljs.core.seq(domina.nodes(content));var chunk__44056 = null;var count__44057 = (0);var i__44058 = (0);while(true){
if((i__44058 < count__44057))
{var node = chunk__44056.cljs$core$IIndexed$_nth$arity$2(null,i__44058);goog.events.removeAll(node);
{
var G__44063 = seq__44055;
var G__44064 = chunk__44056;
var G__44065 = count__44057;
var G__44066 = (i__44058 + (1));
seq__44055 = G__44063;
chunk__44056 = G__44064;
count__44057 = G__44065;
i__44058 = G__44066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44055);if(temp__4126__auto__)
{var seq__44055__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44055__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44055__$1);{
var G__44067 = cljs.core.chunk_rest(seq__44055__$1);
var G__44068 = c__4314__auto__;
var G__44069 = cljs.core.count(c__4314__auto__);
var G__44070 = (0);
seq__44055 = G__44067;
chunk__44056 = G__44068;
count__44057 = G__44069;
i__44058 = G__44070;
continue;
}
} else
{var node = cljs.core.first(seq__44055__$1);goog.events.removeAll(node);
{
var G__44071 = cljs.core.next(seq__44055__$1);
var G__44072 = null;
var G__44073 = (0);
var G__44074 = (0);
seq__44055 = G__44071;
chunk__44056 = G__44072;
count__44057 = G__44073;
i__44058 = G__44074;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__44059 = cljs.core.seq(domina.nodes(content));var chunk__44060 = null;var count__44061 = (0);var i__44062 = (0);while(true){
if((i__44062 < count__44061))
{var node = chunk__44060.cljs$core$IIndexed$_nth$arity$2(null,i__44062);goog.events.removeAll(node,type__$1);
{
var G__44075 = seq__44059;
var G__44076 = chunk__44060;
var G__44077 = count__44061;
var G__44078 = (i__44062 + (1));
seq__44059 = G__44075;
chunk__44060 = G__44076;
count__44061 = G__44077;
i__44062 = G__44078;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44059);if(temp__4126__auto__)
{var seq__44059__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44059__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44059__$1);{
var G__44079 = cljs.core.chunk_rest(seq__44059__$1);
var G__44080 = c__4314__auto__;
var G__44081 = cljs.core.count(c__4314__auto__);
var G__44082 = (0);
seq__44059 = G__44079;
chunk__44060 = G__44080;
count__44061 = G__44081;
i__44062 = G__44082;
continue;
}
} else
{var node = cljs.core.first(seq__44059__$1);goog.events.removeAll(node,type__$1);
{
var G__44083 = cljs.core.next(seq__44059__$1);
var G__44084 = null;
var G__44085 = (0);
var G__44086 = (0);
seq__44059 = G__44083;
chunk__44060 = G__44084;
count__44061 = G__44085;
i__44062 = G__44086;
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
var G__44087 = parent;
var G__44088 = cljs.core.cons(parent,so_far);
n = G__44087;
so_far = G__44088;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__44097_44105 = cljs.core.seq(ancestors);var chunk__44098_44106 = null;var count__44099_44107 = (0);var i__44100_44108 = (0);while(true){
if((i__44100_44108 < count__44099_44107))
{var n_44109 = chunk__44098_44106.cljs$core$IIndexed$_nth$arity$2(null,i__44100_44108);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44109;
goog.events.fireListeners(n_44109,evt.type,true,evt);
}
{
var G__44110 = seq__44097_44105;
var G__44111 = chunk__44098_44106;
var G__44112 = count__44099_44107;
var G__44113 = (i__44100_44108 + (1));
seq__44097_44105 = G__44110;
chunk__44098_44106 = G__44111;
count__44099_44107 = G__44112;
i__44100_44108 = G__44113;
continue;
}
} else
{var temp__4126__auto___44114 = cljs.core.seq(seq__44097_44105);if(temp__4126__auto___44114)
{var seq__44097_44115__$1 = temp__4126__auto___44114;if(cljs.core.chunked_seq_QMARK_(seq__44097_44115__$1))
{var c__4314__auto___44116 = cljs.core.chunk_first(seq__44097_44115__$1);{
var G__44117 = cljs.core.chunk_rest(seq__44097_44115__$1);
var G__44118 = c__4314__auto___44116;
var G__44119 = cljs.core.count(c__4314__auto___44116);
var G__44120 = (0);
seq__44097_44105 = G__44117;
chunk__44098_44106 = G__44118;
count__44099_44107 = G__44119;
i__44100_44108 = G__44120;
continue;
}
} else
{var n_44121 = cljs.core.first(seq__44097_44115__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44121;
goog.events.fireListeners(n_44121,evt.type,true,evt);
}
{
var G__44122 = cljs.core.next(seq__44097_44115__$1);
var G__44123 = null;
var G__44124 = (0);
var G__44125 = (0);
seq__44097_44105 = G__44122;
chunk__44098_44106 = G__44123;
count__44099_44107 = G__44124;
i__44100_44108 = G__44125;
continue;
}
}
} else
{}
}
break;
}
var seq__44101_44126 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__44102_44127 = null;var count__44103_44128 = (0);var i__44104_44129 = (0);while(true){
if((i__44104_44129 < count__44103_44128))
{var n_44130 = chunk__44102_44127.cljs$core$IIndexed$_nth$arity$2(null,i__44104_44129);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44130;
goog.events.fireListeners(n_44130,evt.type,false,evt);
}
{
var G__44131 = seq__44101_44126;
var G__44132 = chunk__44102_44127;
var G__44133 = count__44103_44128;
var G__44134 = (i__44104_44129 + (1));
seq__44101_44126 = G__44131;
chunk__44102_44127 = G__44132;
count__44103_44128 = G__44133;
i__44104_44129 = G__44134;
continue;
}
} else
{var temp__4126__auto___44135 = cljs.core.seq(seq__44101_44126);if(temp__4126__auto___44135)
{var seq__44101_44136__$1 = temp__4126__auto___44135;if(cljs.core.chunked_seq_QMARK_(seq__44101_44136__$1))
{var c__4314__auto___44137 = cljs.core.chunk_first(seq__44101_44136__$1);{
var G__44138 = cljs.core.chunk_rest(seq__44101_44136__$1);
var G__44139 = c__4314__auto___44137;
var G__44140 = cljs.core.count(c__4314__auto___44137);
var G__44141 = (0);
seq__44101_44126 = G__44138;
chunk__44102_44127 = G__44139;
count__44103_44128 = G__44140;
i__44104_44129 = G__44141;
continue;
}
} else
{var n_44142 = cljs.core.first(seq__44101_44136__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44142;
goog.events.fireListeners(n_44142,evt.type,false,evt);
}
{
var G__44143 = cljs.core.next(seq__44101_44136__$1);
var G__44144 = null;
var G__44145 = (0);
var G__44146 = (0);
seq__44101_44126 = G__44143;
chunk__44102_44127 = G__44144;
count__44103_44128 = G__44145;
i__44104_44129 = G__44146;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__44153_44159 = cljs.core.seq(evt_map);var chunk__44154_44160 = null;var count__44155_44161 = (0);var i__44156_44162 = (0);while(true){
if((i__44156_44162 < count__44155_44161))
{var vec__44157_44163 = chunk__44154_44160.cljs$core$IIndexed$_nth$arity$2(null,i__44156_44162);var k_44164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157_44163,(0),null);var v_44165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44157_44163,(1),null);(evt[k_44164] = v_44165);
{
var G__44166 = seq__44153_44159;
var G__44167 = chunk__44154_44160;
var G__44168 = count__44155_44161;
var G__44169 = (i__44156_44162 + (1));
seq__44153_44159 = G__44166;
chunk__44154_44160 = G__44167;
count__44155_44161 = G__44168;
i__44156_44162 = G__44169;
continue;
}
} else
{var temp__4126__auto___44170 = cljs.core.seq(seq__44153_44159);if(temp__4126__auto___44170)
{var seq__44153_44171__$1 = temp__4126__auto___44170;if(cljs.core.chunked_seq_QMARK_(seq__44153_44171__$1))
{var c__4314__auto___44172 = cljs.core.chunk_first(seq__44153_44171__$1);{
var G__44173 = cljs.core.chunk_rest(seq__44153_44171__$1);
var G__44174 = c__4314__auto___44172;
var G__44175 = cljs.core.count(c__4314__auto___44172);
var G__44176 = (0);
seq__44153_44159 = G__44173;
chunk__44154_44160 = G__44174;
count__44155_44161 = G__44175;
i__44156_44162 = G__44176;
continue;
}
} else
{var vec__44158_44177 = cljs.core.first(seq__44153_44171__$1);var k_44178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44158_44177,(0),null);var v_44179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44158_44177,(1),null);(evt[k_44178] = v_44179);
{
var G__44180 = cljs.core.next(seq__44153_44171__$1);
var G__44181 = null;
var G__44182 = (0);
var G__44183 = (0);
seq__44153_44159 = G__44180;
chunk__44154_44160 = G__44181;
count__44155_44161 = G__44182;
i__44156_44162 = G__44183;
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
return (function (p1__44184_SHARP_){return goog.events.getListeners(p1__44184_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
