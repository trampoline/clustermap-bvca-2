// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj43224 = {};return obj43224;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t43228 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43228 = (function (evt,f,create_listener_function,meta43229){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43229 = meta43229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43228.cljs$lang$type = true;
domina.events.t43228.cljs$lang$ctorStr = "domina.events/t43228";
domina.events.t43228.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t43228");
});
domina.events.t43228.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43228.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t43228.prototype.domina$events$Event$ = true;
domina.events.t43228.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43228.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43228.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43228.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43228.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43228.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43230){var self__ = this;
var _43230__$1 = this;return self__.meta43229;
});
domina.events.t43228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43230,meta43229__$1){var self__ = this;
var _43230__$1 = this;return (new domina.events.t43228(self__.evt,self__.f,self__.create_listener_function,meta43229__$1));
});
domina.events.__GT_t43228 = (function __GT_t43228(evt__$1,f__$1,create_listener_function__$1,meta43229){return (new domina.events.t43228(evt__$1,f__$1,create_listener_function__$1,meta43229));
});
}
return (new domina.events.t43228(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t43228 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43228 = (function (evt,f,create_listener_function,meta43229){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43229 = meta43229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43228.cljs$lang$type = true;
domina.events.t43228.cljs$lang$ctorStr = "domina.events/t43228";
domina.events.t43228.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t43228");
});
domina.events.t43228.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43228.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t43228.prototype.domina$events$Event$ = true;
domina.events.t43228.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43228.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43228.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43228.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43228.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43228.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43230){var self__ = this;
var _43230__$1 = this;return self__.meta43229;
});
domina.events.t43228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43230,meta43229__$1){var self__ = this;
var _43230__$1 = this;return (new domina.events.t43228(self__.evt,self__.f,self__.create_listener_function,meta43229__$1));
});
domina.events.__GT_t43228 = (function __GT_t43228(evt__$1,f__$1,create_listener_function__$1,meta43229){return (new domina.events.t43228(evt__$1,f__$1,create_listener_function__$1,meta43229));
});
}
return (new domina.events.t43228(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__43235(s__43236){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__43236__$1 = s__43236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43236__$1);if(temp__4126__auto__)
{var s__43236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43236__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__43236__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__43238 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__43237 = (0);while(true){
if((i__43237 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__43237);cljs.core.chunk_append(b__43238,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__43239 = (i__43237 + (1));
i__43237 = G__43239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43238),iter__43235(cljs.core.chunk_rest(s__43236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43238),null);
}
} else
{var node = cljs.core.first(s__43236__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__43235(cljs.core.rest(s__43236__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__43248 = cljs.core.seq(domina.nodes(content));var chunk__43249 = null;var count__43250 = (0);var i__43251 = (0);while(true){
if((i__43251 < count__43250))
{var node = chunk__43249.cljs$core$IIndexed$_nth$arity$2(null,i__43251);goog.events.removeAll(node);
{
var G__43256 = seq__43248;
var G__43257 = chunk__43249;
var G__43258 = count__43250;
var G__43259 = (i__43251 + (1));
seq__43248 = G__43256;
chunk__43249 = G__43257;
count__43250 = G__43258;
i__43251 = G__43259;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43248);if(temp__4126__auto__)
{var seq__43248__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43248__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43248__$1);{
var G__43260 = cljs.core.chunk_rest(seq__43248__$1);
var G__43261 = c__4299__auto__;
var G__43262 = cljs.core.count(c__4299__auto__);
var G__43263 = (0);
seq__43248 = G__43260;
chunk__43249 = G__43261;
count__43250 = G__43262;
i__43251 = G__43263;
continue;
}
} else
{var node = cljs.core.first(seq__43248__$1);goog.events.removeAll(node);
{
var G__43264 = cljs.core.next(seq__43248__$1);
var G__43265 = null;
var G__43266 = (0);
var G__43267 = (0);
seq__43248 = G__43264;
chunk__43249 = G__43265;
count__43250 = G__43266;
i__43251 = G__43267;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__43252 = cljs.core.seq(domina.nodes(content));var chunk__43253 = null;var count__43254 = (0);var i__43255 = (0);while(true){
if((i__43255 < count__43254))
{var node = chunk__43253.cljs$core$IIndexed$_nth$arity$2(null,i__43255);goog.events.removeAll(node,type__$1);
{
var G__43268 = seq__43252;
var G__43269 = chunk__43253;
var G__43270 = count__43254;
var G__43271 = (i__43255 + (1));
seq__43252 = G__43268;
chunk__43253 = G__43269;
count__43254 = G__43270;
i__43255 = G__43271;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43252);if(temp__4126__auto__)
{var seq__43252__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43252__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43252__$1);{
var G__43272 = cljs.core.chunk_rest(seq__43252__$1);
var G__43273 = c__4299__auto__;
var G__43274 = cljs.core.count(c__4299__auto__);
var G__43275 = (0);
seq__43252 = G__43272;
chunk__43253 = G__43273;
count__43254 = G__43274;
i__43255 = G__43275;
continue;
}
} else
{var node = cljs.core.first(seq__43252__$1);goog.events.removeAll(node,type__$1);
{
var G__43276 = cljs.core.next(seq__43252__$1);
var G__43277 = null;
var G__43278 = (0);
var G__43279 = (0);
seq__43252 = G__43276;
chunk__43253 = G__43277;
count__43254 = G__43278;
i__43255 = G__43279;
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
var G__43280 = parent;
var G__43281 = cljs.core.cons(parent,so_far);
n = G__43280;
so_far = G__43281;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__43290_43298 = cljs.core.seq(ancestors);var chunk__43291_43299 = null;var count__43292_43300 = (0);var i__43293_43301 = (0);while(true){
if((i__43293_43301 < count__43292_43300))
{var n_43302 = chunk__43291_43299.cljs$core$IIndexed$_nth$arity$2(null,i__43293_43301);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43302;
goog.events.fireListeners(n_43302,evt.type,true,evt);
}
{
var G__43303 = seq__43290_43298;
var G__43304 = chunk__43291_43299;
var G__43305 = count__43292_43300;
var G__43306 = (i__43293_43301 + (1));
seq__43290_43298 = G__43303;
chunk__43291_43299 = G__43304;
count__43292_43300 = G__43305;
i__43293_43301 = G__43306;
continue;
}
} else
{var temp__4126__auto___43307 = cljs.core.seq(seq__43290_43298);if(temp__4126__auto___43307)
{var seq__43290_43308__$1 = temp__4126__auto___43307;if(cljs.core.chunked_seq_QMARK_(seq__43290_43308__$1))
{var c__4299__auto___43309 = cljs.core.chunk_first(seq__43290_43308__$1);{
var G__43310 = cljs.core.chunk_rest(seq__43290_43308__$1);
var G__43311 = c__4299__auto___43309;
var G__43312 = cljs.core.count(c__4299__auto___43309);
var G__43313 = (0);
seq__43290_43298 = G__43310;
chunk__43291_43299 = G__43311;
count__43292_43300 = G__43312;
i__43293_43301 = G__43313;
continue;
}
} else
{var n_43314 = cljs.core.first(seq__43290_43308__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43314;
goog.events.fireListeners(n_43314,evt.type,true,evt);
}
{
var G__43315 = cljs.core.next(seq__43290_43308__$1);
var G__43316 = null;
var G__43317 = (0);
var G__43318 = (0);
seq__43290_43298 = G__43315;
chunk__43291_43299 = G__43316;
count__43292_43300 = G__43317;
i__43293_43301 = G__43318;
continue;
}
}
} else
{}
}
break;
}
var seq__43294_43319 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__43295_43320 = null;var count__43296_43321 = (0);var i__43297_43322 = (0);while(true){
if((i__43297_43322 < count__43296_43321))
{var n_43323 = chunk__43295_43320.cljs$core$IIndexed$_nth$arity$2(null,i__43297_43322);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43323;
goog.events.fireListeners(n_43323,evt.type,false,evt);
}
{
var G__43324 = seq__43294_43319;
var G__43325 = chunk__43295_43320;
var G__43326 = count__43296_43321;
var G__43327 = (i__43297_43322 + (1));
seq__43294_43319 = G__43324;
chunk__43295_43320 = G__43325;
count__43296_43321 = G__43326;
i__43297_43322 = G__43327;
continue;
}
} else
{var temp__4126__auto___43328 = cljs.core.seq(seq__43294_43319);if(temp__4126__auto___43328)
{var seq__43294_43329__$1 = temp__4126__auto___43328;if(cljs.core.chunked_seq_QMARK_(seq__43294_43329__$1))
{var c__4299__auto___43330 = cljs.core.chunk_first(seq__43294_43329__$1);{
var G__43331 = cljs.core.chunk_rest(seq__43294_43329__$1);
var G__43332 = c__4299__auto___43330;
var G__43333 = cljs.core.count(c__4299__auto___43330);
var G__43334 = (0);
seq__43294_43319 = G__43331;
chunk__43295_43320 = G__43332;
count__43296_43321 = G__43333;
i__43297_43322 = G__43334;
continue;
}
} else
{var n_43335 = cljs.core.first(seq__43294_43329__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43335;
goog.events.fireListeners(n_43335,evt.type,false,evt);
}
{
var G__43336 = cljs.core.next(seq__43294_43329__$1);
var G__43337 = null;
var G__43338 = (0);
var G__43339 = (0);
seq__43294_43319 = G__43336;
chunk__43295_43320 = G__43337;
count__43296_43321 = G__43338;
i__43297_43322 = G__43339;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__43346_43352 = cljs.core.seq(evt_map);var chunk__43347_43353 = null;var count__43348_43354 = (0);var i__43349_43355 = (0);while(true){
if((i__43349_43355 < count__43348_43354))
{var vec__43350_43356 = chunk__43347_43353.cljs$core$IIndexed$_nth$arity$2(null,i__43349_43355);var k_43357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43350_43356,(0),null);var v_43358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43350_43356,(1),null);(evt[k_43357] = v_43358);
{
var G__43359 = seq__43346_43352;
var G__43360 = chunk__43347_43353;
var G__43361 = count__43348_43354;
var G__43362 = (i__43349_43355 + (1));
seq__43346_43352 = G__43359;
chunk__43347_43353 = G__43360;
count__43348_43354 = G__43361;
i__43349_43355 = G__43362;
continue;
}
} else
{var temp__4126__auto___43363 = cljs.core.seq(seq__43346_43352);if(temp__4126__auto___43363)
{var seq__43346_43364__$1 = temp__4126__auto___43363;if(cljs.core.chunked_seq_QMARK_(seq__43346_43364__$1))
{var c__4299__auto___43365 = cljs.core.chunk_first(seq__43346_43364__$1);{
var G__43366 = cljs.core.chunk_rest(seq__43346_43364__$1);
var G__43367 = c__4299__auto___43365;
var G__43368 = cljs.core.count(c__4299__auto___43365);
var G__43369 = (0);
seq__43346_43352 = G__43366;
chunk__43347_43353 = G__43367;
count__43348_43354 = G__43368;
i__43349_43355 = G__43369;
continue;
}
} else
{var vec__43351_43370 = cljs.core.first(seq__43346_43364__$1);var k_43371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43351_43370,(0),null);var v_43372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43351_43370,(1),null);(evt[k_43371] = v_43372);
{
var G__43373 = cljs.core.next(seq__43346_43364__$1);
var G__43374 = null;
var G__43375 = (0);
var G__43376 = (0);
seq__43346_43352 = G__43373;
chunk__43347_43353 = G__43374;
count__43348_43354 = G__43375;
i__43349_43355 = G__43376;
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
return (function (p1__43377_SHARP_){return goog.events.getListeners(p1__43377_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
