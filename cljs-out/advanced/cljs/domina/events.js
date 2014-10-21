// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50065 = {};return obj50065;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t50069 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50069 = (function (evt,f,create_listener_function,meta50070){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50070 = meta50070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50069.cljs$lang$type = true;
domina.events.t50069.cljs$lang$ctorStr = "domina.events/t50069";
domina.events.t50069.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t50069");
});
domina.events.t50069.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t50069.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t50069.prototype.domina$events$Event$ = true;
domina.events.t50069.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50069.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50069.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50069.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50069.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50069.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50071){var self__ = this;
var _50071__$1 = this;return self__.meta50070;
});
domina.events.t50069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50071,meta50070__$1){var self__ = this;
var _50071__$1 = this;return (new domina.events.t50069(self__.evt,self__.f,self__.create_listener_function,meta50070__$1));
});
domina.events.__GT_t50069 = (function __GT_t50069(evt__$1,f__$1,create_listener_function__$1,meta50070){return (new domina.events.t50069(evt__$1,f__$1,create_listener_function__$1,meta50070));
});
}
return (new domina.events.t50069(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t50069 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50069 = (function (evt,f,create_listener_function,meta50070){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50070 = meta50070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50069.cljs$lang$type = true;
domina.events.t50069.cljs$lang$ctorStr = "domina.events/t50069";
domina.events.t50069.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t50069");
});
domina.events.t50069.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t50069.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t50069.prototype.domina$events$Event$ = true;
domina.events.t50069.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50069.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50069.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50069.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50069.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50069.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50071){var self__ = this;
var _50071__$1 = this;return self__.meta50070;
});
domina.events.t50069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50071,meta50070__$1){var self__ = this;
var _50071__$1 = this;return (new domina.events.t50069(self__.evt,self__.f,self__.create_listener_function,meta50070__$1));
});
domina.events.__GT_t50069 = (function __GT_t50069(evt__$1,f__$1,create_listener_function__$1,meta50070){return (new domina.events.t50069(evt__$1,f__$1,create_listener_function__$1,meta50070));
});
}
return (new domina.events.t50069(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__50076(s__50077){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__50077__$1 = s__50077;while(true){
var temp__4126__auto__ = cljs.core.seq(s__50077__$1);if(temp__4126__auto__)
{var s__50077__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__50077__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__50077__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__50079 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__50078 = (0);while(true){
if((i__50078 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__50078);cljs.core.chunk_append(b__50079,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50080 = (i__50078 + (1));
i__50078 = G__50080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__50079),iter__50076(cljs.core.chunk_rest(s__50077__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__50079),null);
}
} else
{var node = cljs.core.first(s__50077__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50076(cljs.core.rest(s__50077__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50089 = cljs.core.seq(domina.nodes(content));var chunk__50090 = null;var count__50091 = (0);var i__50092 = (0);while(true){
if((i__50092 < count__50091))
{var node = chunk__50090.cljs$core$IIndexed$_nth$arity$2(null,i__50092);goog.events.removeAll(node);
{
var G__50097 = seq__50089;
var G__50098 = chunk__50090;
var G__50099 = count__50091;
var G__50100 = (i__50092 + (1));
seq__50089 = G__50097;
chunk__50090 = G__50098;
count__50091 = G__50099;
i__50092 = G__50100;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__50089);if(temp__4126__auto__)
{var seq__50089__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__50089__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__50089__$1);{
var G__50101 = cljs.core.chunk_rest(seq__50089__$1);
var G__50102 = c__4314__auto__;
var G__50103 = cljs.core.count(c__4314__auto__);
var G__50104 = (0);
seq__50089 = G__50101;
chunk__50090 = G__50102;
count__50091 = G__50103;
i__50092 = G__50104;
continue;
}
} else
{var node = cljs.core.first(seq__50089__$1);goog.events.removeAll(node);
{
var G__50105 = cljs.core.next(seq__50089__$1);
var G__50106 = null;
var G__50107 = (0);
var G__50108 = (0);
seq__50089 = G__50105;
chunk__50090 = G__50106;
count__50091 = G__50107;
i__50092 = G__50108;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__50093 = cljs.core.seq(domina.nodes(content));var chunk__50094 = null;var count__50095 = (0);var i__50096 = (0);while(true){
if((i__50096 < count__50095))
{var node = chunk__50094.cljs$core$IIndexed$_nth$arity$2(null,i__50096);goog.events.removeAll(node,type__$1);
{
var G__50109 = seq__50093;
var G__50110 = chunk__50094;
var G__50111 = count__50095;
var G__50112 = (i__50096 + (1));
seq__50093 = G__50109;
chunk__50094 = G__50110;
count__50095 = G__50111;
i__50096 = G__50112;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__50093);if(temp__4126__auto__)
{var seq__50093__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__50093__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__50093__$1);{
var G__50113 = cljs.core.chunk_rest(seq__50093__$1);
var G__50114 = c__4314__auto__;
var G__50115 = cljs.core.count(c__4314__auto__);
var G__50116 = (0);
seq__50093 = G__50113;
chunk__50094 = G__50114;
count__50095 = G__50115;
i__50096 = G__50116;
continue;
}
} else
{var node = cljs.core.first(seq__50093__$1);goog.events.removeAll(node,type__$1);
{
var G__50117 = cljs.core.next(seq__50093__$1);
var G__50118 = null;
var G__50119 = (0);
var G__50120 = (0);
seq__50093 = G__50117;
chunk__50094 = G__50118;
count__50095 = G__50119;
i__50096 = G__50120;
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
var G__50121 = parent;
var G__50122 = cljs.core.cons(parent,so_far);
n = G__50121;
so_far = G__50122;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__50131_50139 = cljs.core.seq(ancestors);var chunk__50132_50140 = null;var count__50133_50141 = (0);var i__50134_50142 = (0);while(true){
if((i__50134_50142 < count__50133_50141))
{var n_50143 = chunk__50132_50140.cljs$core$IIndexed$_nth$arity$2(null,i__50134_50142);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50143;
goog.events.fireListeners(n_50143,evt.type,true,evt);
}
{
var G__50144 = seq__50131_50139;
var G__50145 = chunk__50132_50140;
var G__50146 = count__50133_50141;
var G__50147 = (i__50134_50142 + (1));
seq__50131_50139 = G__50144;
chunk__50132_50140 = G__50145;
count__50133_50141 = G__50146;
i__50134_50142 = G__50147;
continue;
}
} else
{var temp__4126__auto___50148 = cljs.core.seq(seq__50131_50139);if(temp__4126__auto___50148)
{var seq__50131_50149__$1 = temp__4126__auto___50148;if(cljs.core.chunked_seq_QMARK_(seq__50131_50149__$1))
{var c__4314__auto___50150 = cljs.core.chunk_first(seq__50131_50149__$1);{
var G__50151 = cljs.core.chunk_rest(seq__50131_50149__$1);
var G__50152 = c__4314__auto___50150;
var G__50153 = cljs.core.count(c__4314__auto___50150);
var G__50154 = (0);
seq__50131_50139 = G__50151;
chunk__50132_50140 = G__50152;
count__50133_50141 = G__50153;
i__50134_50142 = G__50154;
continue;
}
} else
{var n_50155 = cljs.core.first(seq__50131_50149__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50155;
goog.events.fireListeners(n_50155,evt.type,true,evt);
}
{
var G__50156 = cljs.core.next(seq__50131_50149__$1);
var G__50157 = null;
var G__50158 = (0);
var G__50159 = (0);
seq__50131_50139 = G__50156;
chunk__50132_50140 = G__50157;
count__50133_50141 = G__50158;
i__50134_50142 = G__50159;
continue;
}
}
} else
{}
}
break;
}
var seq__50135_50160 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__50136_50161 = null;var count__50137_50162 = (0);var i__50138_50163 = (0);while(true){
if((i__50138_50163 < count__50137_50162))
{var n_50164 = chunk__50136_50161.cljs$core$IIndexed$_nth$arity$2(null,i__50138_50163);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50164;
goog.events.fireListeners(n_50164,evt.type,false,evt);
}
{
var G__50165 = seq__50135_50160;
var G__50166 = chunk__50136_50161;
var G__50167 = count__50137_50162;
var G__50168 = (i__50138_50163 + (1));
seq__50135_50160 = G__50165;
chunk__50136_50161 = G__50166;
count__50137_50162 = G__50167;
i__50138_50163 = G__50168;
continue;
}
} else
{var temp__4126__auto___50169 = cljs.core.seq(seq__50135_50160);if(temp__4126__auto___50169)
{var seq__50135_50170__$1 = temp__4126__auto___50169;if(cljs.core.chunked_seq_QMARK_(seq__50135_50170__$1))
{var c__4314__auto___50171 = cljs.core.chunk_first(seq__50135_50170__$1);{
var G__50172 = cljs.core.chunk_rest(seq__50135_50170__$1);
var G__50173 = c__4314__auto___50171;
var G__50174 = cljs.core.count(c__4314__auto___50171);
var G__50175 = (0);
seq__50135_50160 = G__50172;
chunk__50136_50161 = G__50173;
count__50137_50162 = G__50174;
i__50138_50163 = G__50175;
continue;
}
} else
{var n_50176 = cljs.core.first(seq__50135_50170__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50176;
goog.events.fireListeners(n_50176,evt.type,false,evt);
}
{
var G__50177 = cljs.core.next(seq__50135_50170__$1);
var G__50178 = null;
var G__50179 = (0);
var G__50180 = (0);
seq__50135_50160 = G__50177;
chunk__50136_50161 = G__50178;
count__50137_50162 = G__50179;
i__50138_50163 = G__50180;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__50187_50193 = cljs.core.seq(evt_map);var chunk__50188_50194 = null;var count__50189_50195 = (0);var i__50190_50196 = (0);while(true){
if((i__50190_50196 < count__50189_50195))
{var vec__50191_50197 = chunk__50188_50194.cljs$core$IIndexed$_nth$arity$2(null,i__50190_50196);var k_50198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50191_50197,(0),null);var v_50199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50191_50197,(1),null);(evt[k_50198] = v_50199);
{
var G__50200 = seq__50187_50193;
var G__50201 = chunk__50188_50194;
var G__50202 = count__50189_50195;
var G__50203 = (i__50190_50196 + (1));
seq__50187_50193 = G__50200;
chunk__50188_50194 = G__50201;
count__50189_50195 = G__50202;
i__50190_50196 = G__50203;
continue;
}
} else
{var temp__4126__auto___50204 = cljs.core.seq(seq__50187_50193);if(temp__4126__auto___50204)
{var seq__50187_50205__$1 = temp__4126__auto___50204;if(cljs.core.chunked_seq_QMARK_(seq__50187_50205__$1))
{var c__4314__auto___50206 = cljs.core.chunk_first(seq__50187_50205__$1);{
var G__50207 = cljs.core.chunk_rest(seq__50187_50205__$1);
var G__50208 = c__4314__auto___50206;
var G__50209 = cljs.core.count(c__4314__auto___50206);
var G__50210 = (0);
seq__50187_50193 = G__50207;
chunk__50188_50194 = G__50208;
count__50189_50195 = G__50209;
i__50190_50196 = G__50210;
continue;
}
} else
{var vec__50192_50211 = cljs.core.first(seq__50187_50205__$1);var k_50212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50211,(0),null);var v_50213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50211,(1),null);(evt[k_50212] = v_50213);
{
var G__50214 = cljs.core.next(seq__50187_50205__$1);
var G__50215 = null;
var G__50216 = (0);
var G__50217 = (0);
seq__50187_50193 = G__50214;
chunk__50188_50194 = G__50215;
count__50189_50195 = G__50216;
i__50190_50196 = G__50217;
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
return (function (p1__50218_SHARP_){return goog.events.getListeners(p1__50218_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
