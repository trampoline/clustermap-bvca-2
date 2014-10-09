// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj52225 = {};return obj52225;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t52229 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52229 = (function (evt,f,create_listener_function,meta52230){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52230 = meta52230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52229.cljs$lang$type = true;
domina.events.t52229.cljs$lang$ctorStr = "domina.events/t52229";
domina.events.t52229.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52229");
});
domina.events.t52229.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52229.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52229.prototype.domina$events$Event$ = true;
domina.events.t52229.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52229.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52229.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52229.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52229.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52229.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52231){var self__ = this;
var _52231__$1 = this;return self__.meta52230;
});
domina.events.t52229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52231,meta52230__$1){var self__ = this;
var _52231__$1 = this;return (new domina.events.t52229(self__.evt,self__.f,self__.create_listener_function,meta52230__$1));
});
domina.events.__GT_t52229 = (function __GT_t52229(evt__$1,f__$1,create_listener_function__$1,meta52230){return (new domina.events.t52229(evt__$1,f__$1,create_listener_function__$1,meta52230));
});
}
return (new domina.events.t52229(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t52229 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52229 = (function (evt,f,create_listener_function,meta52230){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52230 = meta52230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52229.cljs$lang$type = true;
domina.events.t52229.cljs$lang$ctorStr = "domina.events/t52229";
domina.events.t52229.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52229");
});
domina.events.t52229.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52229.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52229.prototype.domina$events$Event$ = true;
domina.events.t52229.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52229.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52229.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52229.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52229.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52229.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52231){var self__ = this;
var _52231__$1 = this;return self__.meta52230;
});
domina.events.t52229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52231,meta52230__$1){var self__ = this;
var _52231__$1 = this;return (new domina.events.t52229(self__.evt,self__.f,self__.create_listener_function,meta52230__$1));
});
domina.events.__GT_t52229 = (function __GT_t52229(evt__$1,f__$1,create_listener_function__$1,meta52230){return (new domina.events.t52229(evt__$1,f__$1,create_listener_function__$1,meta52230));
});
}
return (new domina.events.t52229(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__52236(s__52237){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__52237__$1 = s__52237;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52237__$1);if(temp__4126__auto__)
{var s__52237__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52237__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52237__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52239 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52238 = (0);while(true){
if((i__52238 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52238);cljs.core.chunk_append(b__52239,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__52240 = (i__52238 + (1));
i__52238 = G__52240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52239),iter__52236(cljs.core.chunk_rest(s__52237__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52239),null);
}
} else
{var node = cljs.core.first(s__52237__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__52236(cljs.core.rest(s__52237__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__52249 = cljs.core.seq(domina.nodes(content));var chunk__52250 = null;var count__52251 = (0);var i__52252 = (0);while(true){
if((i__52252 < count__52251))
{var node = chunk__52250.cljs$core$IIndexed$_nth$arity$2(null,i__52252);goog.events.removeAll(node);
{
var G__52257 = seq__52249;
var G__52258 = chunk__52250;
var G__52259 = count__52251;
var G__52260 = (i__52252 + (1));
seq__52249 = G__52257;
chunk__52250 = G__52258;
count__52251 = G__52259;
i__52252 = G__52260;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52249);if(temp__4126__auto__)
{var seq__52249__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52249__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52249__$1);{
var G__52261 = cljs.core.chunk_rest(seq__52249__$1);
var G__52262 = c__4314__auto__;
var G__52263 = cljs.core.count(c__4314__auto__);
var G__52264 = (0);
seq__52249 = G__52261;
chunk__52250 = G__52262;
count__52251 = G__52263;
i__52252 = G__52264;
continue;
}
} else
{var node = cljs.core.first(seq__52249__$1);goog.events.removeAll(node);
{
var G__52265 = cljs.core.next(seq__52249__$1);
var G__52266 = null;
var G__52267 = (0);
var G__52268 = (0);
seq__52249 = G__52265;
chunk__52250 = G__52266;
count__52251 = G__52267;
i__52252 = G__52268;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__52253 = cljs.core.seq(domina.nodes(content));var chunk__52254 = null;var count__52255 = (0);var i__52256 = (0);while(true){
if((i__52256 < count__52255))
{var node = chunk__52254.cljs$core$IIndexed$_nth$arity$2(null,i__52256);goog.events.removeAll(node,type__$1);
{
var G__52269 = seq__52253;
var G__52270 = chunk__52254;
var G__52271 = count__52255;
var G__52272 = (i__52256 + (1));
seq__52253 = G__52269;
chunk__52254 = G__52270;
count__52255 = G__52271;
i__52256 = G__52272;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52253);if(temp__4126__auto__)
{var seq__52253__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52253__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52253__$1);{
var G__52273 = cljs.core.chunk_rest(seq__52253__$1);
var G__52274 = c__4314__auto__;
var G__52275 = cljs.core.count(c__4314__auto__);
var G__52276 = (0);
seq__52253 = G__52273;
chunk__52254 = G__52274;
count__52255 = G__52275;
i__52256 = G__52276;
continue;
}
} else
{var node = cljs.core.first(seq__52253__$1);goog.events.removeAll(node,type__$1);
{
var G__52277 = cljs.core.next(seq__52253__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__52253 = G__52277;
chunk__52254 = G__52278;
count__52255 = G__52279;
i__52256 = G__52280;
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
var G__52281 = parent;
var G__52282 = cljs.core.cons(parent,so_far);
n = G__52281;
so_far = G__52282;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__52291_52299 = cljs.core.seq(ancestors);var chunk__52292_52300 = null;var count__52293_52301 = (0);var i__52294_52302 = (0);while(true){
if((i__52294_52302 < count__52293_52301))
{var n_52303 = chunk__52292_52300.cljs$core$IIndexed$_nth$arity$2(null,i__52294_52302);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52303;
goog.events.fireListeners(n_52303,evt.type,true,evt);
}
{
var G__52304 = seq__52291_52299;
var G__52305 = chunk__52292_52300;
var G__52306 = count__52293_52301;
var G__52307 = (i__52294_52302 + (1));
seq__52291_52299 = G__52304;
chunk__52292_52300 = G__52305;
count__52293_52301 = G__52306;
i__52294_52302 = G__52307;
continue;
}
} else
{var temp__4126__auto___52308 = cljs.core.seq(seq__52291_52299);if(temp__4126__auto___52308)
{var seq__52291_52309__$1 = temp__4126__auto___52308;if(cljs.core.chunked_seq_QMARK_(seq__52291_52309__$1))
{var c__4314__auto___52310 = cljs.core.chunk_first(seq__52291_52309__$1);{
var G__52311 = cljs.core.chunk_rest(seq__52291_52309__$1);
var G__52312 = c__4314__auto___52310;
var G__52313 = cljs.core.count(c__4314__auto___52310);
var G__52314 = (0);
seq__52291_52299 = G__52311;
chunk__52292_52300 = G__52312;
count__52293_52301 = G__52313;
i__52294_52302 = G__52314;
continue;
}
} else
{var n_52315 = cljs.core.first(seq__52291_52309__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52315;
goog.events.fireListeners(n_52315,evt.type,true,evt);
}
{
var G__52316 = cljs.core.next(seq__52291_52309__$1);
var G__52317 = null;
var G__52318 = (0);
var G__52319 = (0);
seq__52291_52299 = G__52316;
chunk__52292_52300 = G__52317;
count__52293_52301 = G__52318;
i__52294_52302 = G__52319;
continue;
}
}
} else
{}
}
break;
}
var seq__52295_52320 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__52296_52321 = null;var count__52297_52322 = (0);var i__52298_52323 = (0);while(true){
if((i__52298_52323 < count__52297_52322))
{var n_52324 = chunk__52296_52321.cljs$core$IIndexed$_nth$arity$2(null,i__52298_52323);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52324;
goog.events.fireListeners(n_52324,evt.type,false,evt);
}
{
var G__52325 = seq__52295_52320;
var G__52326 = chunk__52296_52321;
var G__52327 = count__52297_52322;
var G__52328 = (i__52298_52323 + (1));
seq__52295_52320 = G__52325;
chunk__52296_52321 = G__52326;
count__52297_52322 = G__52327;
i__52298_52323 = G__52328;
continue;
}
} else
{var temp__4126__auto___52329 = cljs.core.seq(seq__52295_52320);if(temp__4126__auto___52329)
{var seq__52295_52330__$1 = temp__4126__auto___52329;if(cljs.core.chunked_seq_QMARK_(seq__52295_52330__$1))
{var c__4314__auto___52331 = cljs.core.chunk_first(seq__52295_52330__$1);{
var G__52332 = cljs.core.chunk_rest(seq__52295_52330__$1);
var G__52333 = c__4314__auto___52331;
var G__52334 = cljs.core.count(c__4314__auto___52331);
var G__52335 = (0);
seq__52295_52320 = G__52332;
chunk__52296_52321 = G__52333;
count__52297_52322 = G__52334;
i__52298_52323 = G__52335;
continue;
}
} else
{var n_52336 = cljs.core.first(seq__52295_52330__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52336;
goog.events.fireListeners(n_52336,evt.type,false,evt);
}
{
var G__52337 = cljs.core.next(seq__52295_52330__$1);
var G__52338 = null;
var G__52339 = (0);
var G__52340 = (0);
seq__52295_52320 = G__52337;
chunk__52296_52321 = G__52338;
count__52297_52322 = G__52339;
i__52298_52323 = G__52340;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__52347_52353 = cljs.core.seq(evt_map);var chunk__52348_52354 = null;var count__52349_52355 = (0);var i__52350_52356 = (0);while(true){
if((i__52350_52356 < count__52349_52355))
{var vec__52351_52357 = chunk__52348_52354.cljs$core$IIndexed$_nth$arity$2(null,i__52350_52356);var k_52358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351_52357,(0),null);var v_52359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52351_52357,(1),null);(evt[k_52358] = v_52359);
{
var G__52360 = seq__52347_52353;
var G__52361 = chunk__52348_52354;
var G__52362 = count__52349_52355;
var G__52363 = (i__52350_52356 + (1));
seq__52347_52353 = G__52360;
chunk__52348_52354 = G__52361;
count__52349_52355 = G__52362;
i__52350_52356 = G__52363;
continue;
}
} else
{var temp__4126__auto___52364 = cljs.core.seq(seq__52347_52353);if(temp__4126__auto___52364)
{var seq__52347_52365__$1 = temp__4126__auto___52364;if(cljs.core.chunked_seq_QMARK_(seq__52347_52365__$1))
{var c__4314__auto___52366 = cljs.core.chunk_first(seq__52347_52365__$1);{
var G__52367 = cljs.core.chunk_rest(seq__52347_52365__$1);
var G__52368 = c__4314__auto___52366;
var G__52369 = cljs.core.count(c__4314__auto___52366);
var G__52370 = (0);
seq__52347_52353 = G__52367;
chunk__52348_52354 = G__52368;
count__52349_52355 = G__52369;
i__52350_52356 = G__52370;
continue;
}
} else
{var vec__52352_52371 = cljs.core.first(seq__52347_52365__$1);var k_52372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52352_52371,(0),null);var v_52373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52352_52371,(1),null);(evt[k_52372] = v_52373);
{
var G__52374 = cljs.core.next(seq__52347_52365__$1);
var G__52375 = null;
var G__52376 = (0);
var G__52377 = (0);
seq__52347_52353 = G__52374;
chunk__52348_52354 = G__52375;
count__52349_52355 = G__52376;
i__52350_52356 = G__52377;
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
return (function (p1__52378_SHARP_){return goog.events.getListeners(p1__52378_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
