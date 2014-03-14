// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39229 = {};return obj39229;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39233 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39233 = (function (evt,f,create_listener_function,meta39234){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39234 = meta39234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39233.cljs$lang$type = true;
domina.events.t39233.cljs$lang$ctorStr = "domina.events/t39233";
domina.events.t39233.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39233");
});
domina.events.t39233.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39233.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39233.prototype.domina$events$Event$ = true;
domina.events.t39233.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39233.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39233.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39233.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39233.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39233.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39235){var self__ = this;
var _39235__$1 = this;return self__.meta39234;
});
domina.events.t39233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39235,meta39234__$1){var self__ = this;
var _39235__$1 = this;return (new domina.events.t39233(self__.evt,self__.f,self__.create_listener_function,meta39234__$1));
});
domina.events.__GT_t39233 = (function __GT_t39233(evt__$1,f__$1,create_listener_function__$1,meta39234){return (new domina.events.t39233(evt__$1,f__$1,create_listener_function__$1,meta39234));
});
}
return (new domina.events.t39233(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39233 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39233 = (function (evt,f,create_listener_function,meta39234){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39234 = meta39234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39233.cljs$lang$type = true;
domina.events.t39233.cljs$lang$ctorStr = "domina.events/t39233";
domina.events.t39233.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39233");
});
domina.events.t39233.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39233.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39233.prototype.domina$events$Event$ = true;
domina.events.t39233.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39233.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39233.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39233.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39233.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39233.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39235){var self__ = this;
var _39235__$1 = this;return self__.meta39234;
});
domina.events.t39233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39235,meta39234__$1){var self__ = this;
var _39235__$1 = this;return (new domina.events.t39233(self__.evt,self__.f,self__.create_listener_function,meta39234__$1));
});
domina.events.__GT_t39233 = (function __GT_t39233(evt__$1,f__$1,create_listener_function__$1,meta39234){return (new domina.events.t39233(evt__$1,f__$1,create_listener_function__$1,meta39234));
});
}
return (new domina.events.t39233(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39240(s__39241){return (new cljs.core.LazySeq(null,(function (){var s__39241__$1 = s__39241;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39241__$1);if(temp__4092__auto__)
{var s__39241__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39241__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39241__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39243 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39242 = 0;while(true){
if((i__39242 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39242);cljs.core.chunk_append(b__39243,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39244 = (i__39242 + 1);
i__39242 = G__39244;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39243),iter__39240(cljs.core.chunk_rest(s__39241__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39243),null);
}
} else
{var node = cljs.core.first(s__39241__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39240(cljs.core.rest(s__39241__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__39253 = cljs.core.seq(domina.nodes(content));var chunk__39254 = null;var count__39255 = 0;var i__39256 = 0;while(true){
if((i__39256 < count__39255))
{var node = chunk__39254.cljs$core$IIndexed$_nth$arity$2(null,i__39256);goog.events.removeAll(node);
{
var G__39261 = seq__39253;
var G__39262 = chunk__39254;
var G__39263 = count__39255;
var G__39264 = (i__39256 + 1);
seq__39253 = G__39261;
chunk__39254 = G__39262;
count__39255 = G__39263;
i__39256 = G__39264;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39253);if(temp__4092__auto__)
{var seq__39253__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39253__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39253__$1);{
var G__39265 = cljs.core.chunk_rest(seq__39253__$1);
var G__39266 = c__4189__auto__;
var G__39267 = cljs.core.count(c__4189__auto__);
var G__39268 = 0;
seq__39253 = G__39265;
chunk__39254 = G__39266;
count__39255 = G__39267;
i__39256 = G__39268;
continue;
}
} else
{var node = cljs.core.first(seq__39253__$1);goog.events.removeAll(node);
{
var G__39269 = cljs.core.next(seq__39253__$1);
var G__39270 = null;
var G__39271 = 0;
var G__39272 = 0;
seq__39253 = G__39269;
chunk__39254 = G__39270;
count__39255 = G__39271;
i__39256 = G__39272;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39257 = cljs.core.seq(domina.nodes(content));var chunk__39258 = null;var count__39259 = 0;var i__39260 = 0;while(true){
if((i__39260 < count__39259))
{var node = chunk__39258.cljs$core$IIndexed$_nth$arity$2(null,i__39260);goog.events.removeAll(node,type__$1);
{
var G__39273 = seq__39257;
var G__39274 = chunk__39258;
var G__39275 = count__39259;
var G__39276 = (i__39260 + 1);
seq__39257 = G__39273;
chunk__39258 = G__39274;
count__39259 = G__39275;
i__39260 = G__39276;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39257);if(temp__4092__auto__)
{var seq__39257__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39257__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39257__$1);{
var G__39277 = cljs.core.chunk_rest(seq__39257__$1);
var G__39278 = c__4189__auto__;
var G__39279 = cljs.core.count(c__4189__auto__);
var G__39280 = 0;
seq__39257 = G__39277;
chunk__39258 = G__39278;
count__39259 = G__39279;
i__39260 = G__39280;
continue;
}
} else
{var node = cljs.core.first(seq__39257__$1);goog.events.removeAll(node,type__$1);
{
var G__39281 = cljs.core.next(seq__39257__$1);
var G__39282 = null;
var G__39283 = 0;
var G__39284 = 0;
seq__39257 = G__39281;
chunk__39258 = G__39282;
count__39259 = G__39283;
i__39260 = G__39284;
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
var G__39285 = parent;
var G__39286 = cljs.core.cons(parent,so_far);
n = G__39285;
so_far = G__39286;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39295_39303 = cljs.core.seq(ancestors);var chunk__39296_39304 = null;var count__39297_39305 = 0;var i__39298_39306 = 0;while(true){
if((i__39298_39306 < count__39297_39305))
{var n_39307 = chunk__39296_39304.cljs$core$IIndexed$_nth$arity$2(null,i__39298_39306);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39307;
goog.events.fireListeners(n_39307,evt.type,true,evt);
}
{
var G__39308 = seq__39295_39303;
var G__39309 = chunk__39296_39304;
var G__39310 = count__39297_39305;
var G__39311 = (i__39298_39306 + 1);
seq__39295_39303 = G__39308;
chunk__39296_39304 = G__39309;
count__39297_39305 = G__39310;
i__39298_39306 = G__39311;
continue;
}
} else
{var temp__4092__auto___39312 = cljs.core.seq(seq__39295_39303);if(temp__4092__auto___39312)
{var seq__39295_39313__$1 = temp__4092__auto___39312;if(cljs.core.chunked_seq_QMARK_(seq__39295_39313__$1))
{var c__4189__auto___39314 = cljs.core.chunk_first(seq__39295_39313__$1);{
var G__39315 = cljs.core.chunk_rest(seq__39295_39313__$1);
var G__39316 = c__4189__auto___39314;
var G__39317 = cljs.core.count(c__4189__auto___39314);
var G__39318 = 0;
seq__39295_39303 = G__39315;
chunk__39296_39304 = G__39316;
count__39297_39305 = G__39317;
i__39298_39306 = G__39318;
continue;
}
} else
{var n_39319 = cljs.core.first(seq__39295_39313__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39319;
goog.events.fireListeners(n_39319,evt.type,true,evt);
}
{
var G__39320 = cljs.core.next(seq__39295_39313__$1);
var G__39321 = null;
var G__39322 = 0;
var G__39323 = 0;
seq__39295_39303 = G__39320;
chunk__39296_39304 = G__39321;
count__39297_39305 = G__39322;
i__39298_39306 = G__39323;
continue;
}
}
} else
{}
}
break;
}
var seq__39299_39324 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39300_39325 = null;var count__39301_39326 = 0;var i__39302_39327 = 0;while(true){
if((i__39302_39327 < count__39301_39326))
{var n_39328 = chunk__39300_39325.cljs$core$IIndexed$_nth$arity$2(null,i__39302_39327);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39328;
goog.events.fireListeners(n_39328,evt.type,false,evt);
}
{
var G__39329 = seq__39299_39324;
var G__39330 = chunk__39300_39325;
var G__39331 = count__39301_39326;
var G__39332 = (i__39302_39327 + 1);
seq__39299_39324 = G__39329;
chunk__39300_39325 = G__39330;
count__39301_39326 = G__39331;
i__39302_39327 = G__39332;
continue;
}
} else
{var temp__4092__auto___39333 = cljs.core.seq(seq__39299_39324);if(temp__4092__auto___39333)
{var seq__39299_39334__$1 = temp__4092__auto___39333;if(cljs.core.chunked_seq_QMARK_(seq__39299_39334__$1))
{var c__4189__auto___39335 = cljs.core.chunk_first(seq__39299_39334__$1);{
var G__39336 = cljs.core.chunk_rest(seq__39299_39334__$1);
var G__39337 = c__4189__auto___39335;
var G__39338 = cljs.core.count(c__4189__auto___39335);
var G__39339 = 0;
seq__39299_39324 = G__39336;
chunk__39300_39325 = G__39337;
count__39301_39326 = G__39338;
i__39302_39327 = G__39339;
continue;
}
} else
{var n_39340 = cljs.core.first(seq__39299_39334__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39340;
goog.events.fireListeners(n_39340,evt.type,false,evt);
}
{
var G__39341 = cljs.core.next(seq__39299_39334__$1);
var G__39342 = null;
var G__39343 = 0;
var G__39344 = 0;
seq__39299_39324 = G__39341;
chunk__39300_39325 = G__39342;
count__39301_39326 = G__39343;
i__39302_39327 = G__39344;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39351_39357 = cljs.core.seq(evt_map);var chunk__39352_39358 = null;var count__39353_39359 = 0;var i__39354_39360 = 0;while(true){
if((i__39354_39360 < count__39353_39359))
{var vec__39355_39361 = chunk__39352_39358.cljs$core$IIndexed$_nth$arity$2(null,i__39354_39360);var k_39362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39355_39361,0,null);var v_39363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39355_39361,1,null);(evt[k_39362] = v_39363);
{
var G__39364 = seq__39351_39357;
var G__39365 = chunk__39352_39358;
var G__39366 = count__39353_39359;
var G__39367 = (i__39354_39360 + 1);
seq__39351_39357 = G__39364;
chunk__39352_39358 = G__39365;
count__39353_39359 = G__39366;
i__39354_39360 = G__39367;
continue;
}
} else
{var temp__4092__auto___39368 = cljs.core.seq(seq__39351_39357);if(temp__4092__auto___39368)
{var seq__39351_39369__$1 = temp__4092__auto___39368;if(cljs.core.chunked_seq_QMARK_(seq__39351_39369__$1))
{var c__4189__auto___39370 = cljs.core.chunk_first(seq__39351_39369__$1);{
var G__39371 = cljs.core.chunk_rest(seq__39351_39369__$1);
var G__39372 = c__4189__auto___39370;
var G__39373 = cljs.core.count(c__4189__auto___39370);
var G__39374 = 0;
seq__39351_39357 = G__39371;
chunk__39352_39358 = G__39372;
count__39353_39359 = G__39373;
i__39354_39360 = G__39374;
continue;
}
} else
{var vec__39356_39375 = cljs.core.first(seq__39351_39369__$1);var k_39376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356_39375,0,null);var v_39377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356_39375,1,null);(evt[k_39376] = v_39377);
{
var G__39378 = cljs.core.next(seq__39351_39369__$1);
var G__39379 = null;
var G__39380 = 0;
var G__39381 = 0;
seq__39351_39357 = G__39378;
chunk__39352_39358 = G__39379;
count__39353_39359 = G__39380;
i__39354_39360 = G__39381;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39382_SHARP_){return goog.events.getListeners(p1__39382_SHARP_,type__$1,false);
}),domina.nodes(content));
});
