// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27245 = {};return obj27245;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27249 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27249 = (function (evt,f,create_listener_function,meta27250){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27250 = meta27250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27249.cljs$lang$type = true;
domina.events.t27249.cljs$lang$ctorStr = "domina.events/t27249";
domina.events.t27249.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27249");
});
domina.events.t27249.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27249.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27249.prototype.domina$events$Event$ = true;
domina.events.t27249.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27249.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27249.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27249.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27249.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27249.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27251){var self__ = this;
var _27251__$1 = this;return self__.meta27250;
});
domina.events.t27249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27251,meta27250__$1){var self__ = this;
var _27251__$1 = this;return (new domina.events.t27249(self__.evt,self__.f,self__.create_listener_function,meta27250__$1));
});
domina.events.__GT_t27249 = (function __GT_t27249(evt__$1,f__$1,create_listener_function__$1,meta27250){return (new domina.events.t27249(evt__$1,f__$1,create_listener_function__$1,meta27250));
});
}
return (new domina.events.t27249(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27249 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27249 = (function (evt,f,create_listener_function,meta27250){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27250 = meta27250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27249.cljs$lang$type = true;
domina.events.t27249.cljs$lang$ctorStr = "domina.events/t27249";
domina.events.t27249.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27249");
});
domina.events.t27249.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27249.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27249.prototype.domina$events$Event$ = true;
domina.events.t27249.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27249.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27249.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27249.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27249.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27249.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27251){var self__ = this;
var _27251__$1 = this;return self__.meta27250;
});
domina.events.t27249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27251,meta27250__$1){var self__ = this;
var _27251__$1 = this;return (new domina.events.t27249(self__.evt,self__.f,self__.create_listener_function,meta27250__$1));
});
domina.events.__GT_t27249 = (function __GT_t27249(evt__$1,f__$1,create_listener_function__$1,meta27250){return (new domina.events.t27249(evt__$1,f__$1,create_listener_function__$1,meta27250));
});
}
return (new domina.events.t27249(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27256(s__27257){return (new cljs.core.LazySeq(null,(function (){var s__27257__$1 = s__27257;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27257__$1);if(temp__4092__auto__)
{var s__27257__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27257__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27257__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27259 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27258 = 0;while(true){
if((i__27258 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27258);cljs.core.chunk_append(b__27259,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27260 = (i__27258 + 1);
i__27258 = G__27260;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27259),iter__27256(cljs.core.chunk_rest(s__27257__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27259),null);
}
} else
{var node = cljs.core.first(s__27257__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27256(cljs.core.rest(s__27257__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27269 = cljs.core.seq(domina.nodes(content));var chunk__27270 = null;var count__27271 = 0;var i__27272 = 0;while(true){
if((i__27272 < count__27271))
{var node = chunk__27270.cljs$core$IIndexed$_nth$arity$2(null,i__27272);goog.events.removeAll(node);
{
var G__27277 = seq__27269;
var G__27278 = chunk__27270;
var G__27279 = count__27271;
var G__27280 = (i__27272 + 1);
seq__27269 = G__27277;
chunk__27270 = G__27278;
count__27271 = G__27279;
i__27272 = G__27280;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27269);if(temp__4092__auto__)
{var seq__27269__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27269__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27269__$1);{
var G__27281 = cljs.core.chunk_rest(seq__27269__$1);
var G__27282 = c__4148__auto__;
var G__27283 = cljs.core.count(c__4148__auto__);
var G__27284 = 0;
seq__27269 = G__27281;
chunk__27270 = G__27282;
count__27271 = G__27283;
i__27272 = G__27284;
continue;
}
} else
{var node = cljs.core.first(seq__27269__$1);goog.events.removeAll(node);
{
var G__27285 = cljs.core.next(seq__27269__$1);
var G__27286 = null;
var G__27287 = 0;
var G__27288 = 0;
seq__27269 = G__27285;
chunk__27270 = G__27286;
count__27271 = G__27287;
i__27272 = G__27288;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27273 = cljs.core.seq(domina.nodes(content));var chunk__27274 = null;var count__27275 = 0;var i__27276 = 0;while(true){
if((i__27276 < count__27275))
{var node = chunk__27274.cljs$core$IIndexed$_nth$arity$2(null,i__27276);goog.events.removeAll(node,type__$1);
{
var G__27289 = seq__27273;
var G__27290 = chunk__27274;
var G__27291 = count__27275;
var G__27292 = (i__27276 + 1);
seq__27273 = G__27289;
chunk__27274 = G__27290;
count__27275 = G__27291;
i__27276 = G__27292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27273);if(temp__4092__auto__)
{var seq__27273__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27273__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27273__$1);{
var G__27293 = cljs.core.chunk_rest(seq__27273__$1);
var G__27294 = c__4148__auto__;
var G__27295 = cljs.core.count(c__4148__auto__);
var G__27296 = 0;
seq__27273 = G__27293;
chunk__27274 = G__27294;
count__27275 = G__27295;
i__27276 = G__27296;
continue;
}
} else
{var node = cljs.core.first(seq__27273__$1);goog.events.removeAll(node,type__$1);
{
var G__27297 = cljs.core.next(seq__27273__$1);
var G__27298 = null;
var G__27299 = 0;
var G__27300 = 0;
seq__27273 = G__27297;
chunk__27274 = G__27298;
count__27275 = G__27299;
i__27276 = G__27300;
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
var G__27301 = parent;
var G__27302 = cljs.core.cons(parent,so_far);
n = G__27301;
so_far = G__27302;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27311_27319 = cljs.core.seq(ancestors);var chunk__27312_27320 = null;var count__27313_27321 = 0;var i__27314_27322 = 0;while(true){
if((i__27314_27322 < count__27313_27321))
{var n_27323 = chunk__27312_27320.cljs$core$IIndexed$_nth$arity$2(null,i__27314_27322);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27323;
goog.events.fireListeners(n_27323,evt.type,true,evt);
}
{
var G__27324 = seq__27311_27319;
var G__27325 = chunk__27312_27320;
var G__27326 = count__27313_27321;
var G__27327 = (i__27314_27322 + 1);
seq__27311_27319 = G__27324;
chunk__27312_27320 = G__27325;
count__27313_27321 = G__27326;
i__27314_27322 = G__27327;
continue;
}
} else
{var temp__4092__auto___27328 = cljs.core.seq(seq__27311_27319);if(temp__4092__auto___27328)
{var seq__27311_27329__$1 = temp__4092__auto___27328;if(cljs.core.chunked_seq_QMARK_(seq__27311_27329__$1))
{var c__4148__auto___27330 = cljs.core.chunk_first(seq__27311_27329__$1);{
var G__27331 = cljs.core.chunk_rest(seq__27311_27329__$1);
var G__27332 = c__4148__auto___27330;
var G__27333 = cljs.core.count(c__4148__auto___27330);
var G__27334 = 0;
seq__27311_27319 = G__27331;
chunk__27312_27320 = G__27332;
count__27313_27321 = G__27333;
i__27314_27322 = G__27334;
continue;
}
} else
{var n_27335 = cljs.core.first(seq__27311_27329__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27335;
goog.events.fireListeners(n_27335,evt.type,true,evt);
}
{
var G__27336 = cljs.core.next(seq__27311_27329__$1);
var G__27337 = null;
var G__27338 = 0;
var G__27339 = 0;
seq__27311_27319 = G__27336;
chunk__27312_27320 = G__27337;
count__27313_27321 = G__27338;
i__27314_27322 = G__27339;
continue;
}
}
} else
{}
}
break;
}
var seq__27315_27340 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27316_27341 = null;var count__27317_27342 = 0;var i__27318_27343 = 0;while(true){
if((i__27318_27343 < count__27317_27342))
{var n_27344 = chunk__27316_27341.cljs$core$IIndexed$_nth$arity$2(null,i__27318_27343);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27344;
goog.events.fireListeners(n_27344,evt.type,false,evt);
}
{
var G__27345 = seq__27315_27340;
var G__27346 = chunk__27316_27341;
var G__27347 = count__27317_27342;
var G__27348 = (i__27318_27343 + 1);
seq__27315_27340 = G__27345;
chunk__27316_27341 = G__27346;
count__27317_27342 = G__27347;
i__27318_27343 = G__27348;
continue;
}
} else
{var temp__4092__auto___27349 = cljs.core.seq(seq__27315_27340);if(temp__4092__auto___27349)
{var seq__27315_27350__$1 = temp__4092__auto___27349;if(cljs.core.chunked_seq_QMARK_(seq__27315_27350__$1))
{var c__4148__auto___27351 = cljs.core.chunk_first(seq__27315_27350__$1);{
var G__27352 = cljs.core.chunk_rest(seq__27315_27350__$1);
var G__27353 = c__4148__auto___27351;
var G__27354 = cljs.core.count(c__4148__auto___27351);
var G__27355 = 0;
seq__27315_27340 = G__27352;
chunk__27316_27341 = G__27353;
count__27317_27342 = G__27354;
i__27318_27343 = G__27355;
continue;
}
} else
{var n_27356 = cljs.core.first(seq__27315_27350__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27356;
goog.events.fireListeners(n_27356,evt.type,false,evt);
}
{
var G__27357 = cljs.core.next(seq__27315_27350__$1);
var G__27358 = null;
var G__27359 = 0;
var G__27360 = 0;
seq__27315_27340 = G__27357;
chunk__27316_27341 = G__27358;
count__27317_27342 = G__27359;
i__27318_27343 = G__27360;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27367_27373 = cljs.core.seq(evt_map);var chunk__27368_27374 = null;var count__27369_27375 = 0;var i__27370_27376 = 0;while(true){
if((i__27370_27376 < count__27369_27375))
{var vec__27371_27377 = chunk__27368_27374.cljs$core$IIndexed$_nth$arity$2(null,i__27370_27376);var k_27378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27371_27377,0,null);var v_27379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27371_27377,1,null);(evt[k_27378] = v_27379);
{
var G__27380 = seq__27367_27373;
var G__27381 = chunk__27368_27374;
var G__27382 = count__27369_27375;
var G__27383 = (i__27370_27376 + 1);
seq__27367_27373 = G__27380;
chunk__27368_27374 = G__27381;
count__27369_27375 = G__27382;
i__27370_27376 = G__27383;
continue;
}
} else
{var temp__4092__auto___27384 = cljs.core.seq(seq__27367_27373);if(temp__4092__auto___27384)
{var seq__27367_27385__$1 = temp__4092__auto___27384;if(cljs.core.chunked_seq_QMARK_(seq__27367_27385__$1))
{var c__4148__auto___27386 = cljs.core.chunk_first(seq__27367_27385__$1);{
var G__27387 = cljs.core.chunk_rest(seq__27367_27385__$1);
var G__27388 = c__4148__auto___27386;
var G__27389 = cljs.core.count(c__4148__auto___27386);
var G__27390 = 0;
seq__27367_27373 = G__27387;
chunk__27368_27374 = G__27388;
count__27369_27375 = G__27389;
i__27370_27376 = G__27390;
continue;
}
} else
{var vec__27372_27391 = cljs.core.first(seq__27367_27385__$1);var k_27392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27372_27391,0,null);var v_27393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27372_27391,1,null);(evt[k_27392] = v_27393);
{
var G__27394 = cljs.core.next(seq__27367_27385__$1);
var G__27395 = null;
var G__27396 = 0;
var G__27397 = 0;
seq__27367_27373 = G__27394;
chunk__27368_27374 = G__27395;
count__27369_27375 = G__27396;
i__27370_27376 = G__27397;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27398_SHARP_){return goog.events.getListeners(p1__27398_SHARP_,type__$1,false);
}),domina.nodes(content));
});
