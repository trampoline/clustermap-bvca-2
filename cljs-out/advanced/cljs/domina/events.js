// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19279 = {};return obj19279;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t19283 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19283 = (function (evt,f,create_listener_function,meta19284){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19284 = meta19284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19283.cljs$lang$type = true;
domina.events.t19283.cljs$lang$ctorStr = "domina.events/t19283";
domina.events.t19283.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t19283");
});
domina.events.t19283.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t19283.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t19283.prototype.domina$events$Event$ = true;
domina.events.t19283.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19283.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19283.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19283.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19283.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19283.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19285){var self__ = this;
var _19285__$1 = this;return self__.meta19284;
});
domina.events.t19283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19285,meta19284__$1){var self__ = this;
var _19285__$1 = this;return (new domina.events.t19283(self__.evt,self__.f,self__.create_listener_function,meta19284__$1));
});
domina.events.__GT_t19283 = (function __GT_t19283(evt__$1,f__$1,create_listener_function__$1,meta19284){return (new domina.events.t19283(evt__$1,f__$1,create_listener_function__$1,meta19284));
});
}
return (new domina.events.t19283(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t19283 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19283 = (function (evt,f,create_listener_function,meta19284){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19284 = meta19284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19283.cljs$lang$type = true;
domina.events.t19283.cljs$lang$ctorStr = "domina.events/t19283";
domina.events.t19283.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t19283");
});
domina.events.t19283.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t19283.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t19283.prototype.domina$events$Event$ = true;
domina.events.t19283.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19283.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19283.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19283.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19283.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19283.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19285){var self__ = this;
var _19285__$1 = this;return self__.meta19284;
});
domina.events.t19283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19285,meta19284__$1){var self__ = this;
var _19285__$1 = this;return (new domina.events.t19283(self__.evt,self__.f,self__.create_listener_function,meta19284__$1));
});
domina.events.__GT_t19283 = (function __GT_t19283(evt__$1,f__$1,create_listener_function__$1,meta19284){return (new domina.events.t19283(evt__$1,f__$1,create_listener_function__$1,meta19284));
});
}
return (new domina.events.t19283(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__3984__auto__ = (function iter__19290(s__19291){return (new cljs.core.LazySeq(null,(function (){var s__19291__$1 = s__19291;while(true){
var temp__4092__auto__ = cljs.core.seq(s__19291__$1);if(temp__4092__auto__)
{var s__19291__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__19291__$2))
{var c__3982__auto__ = cljs.core.chunk_first(s__19291__$2);var size__3983__auto__ = cljs.core.count(c__3982__auto__);var b__19293 = cljs.core.chunk_buffer(size__3983__auto__);if((function (){var i__19292 = 0;while(true){
if((i__19292 < size__3983__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3982__auto__,i__19292);cljs.core.chunk_append(b__19293,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19294 = (i__19292 + 1);
i__19292 = G__19294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__19293),iter__19290(cljs.core.chunk_rest(s__19291__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__19293),null);
}
} else
{var node = cljs.core.first(s__19291__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19290(cljs.core.rest(s__19291__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__19303 = cljs.core.seq(domina.nodes(content));var chunk__19304 = null;var count__19305 = 0;var i__19306 = 0;while(true){
if((i__19306 < count__19305))
{var node = chunk__19304.cljs$core$IIndexed$_nth$arity$2(null,i__19306);goog.events.removeAll(node);
{
var G__19311 = seq__19303;
var G__19312 = chunk__19304;
var G__19313 = count__19305;
var G__19314 = (i__19306 + 1);
seq__19303 = G__19311;
chunk__19304 = G__19312;
count__19305 = G__19313;
i__19306 = G__19314;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19303);if(temp__4092__auto__)
{var seq__19303__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19303__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__19303__$1);{
var G__19315 = cljs.core.chunk_rest(seq__19303__$1);
var G__19316 = c__4015__auto__;
var G__19317 = cljs.core.count(c__4015__auto__);
var G__19318 = 0;
seq__19303 = G__19315;
chunk__19304 = G__19316;
count__19305 = G__19317;
i__19306 = G__19318;
continue;
}
} else
{var node = cljs.core.first(seq__19303__$1);goog.events.removeAll(node);
{
var G__19319 = cljs.core.next(seq__19303__$1);
var G__19320 = null;
var G__19321 = 0;
var G__19322 = 0;
seq__19303 = G__19319;
chunk__19304 = G__19320;
count__19305 = G__19321;
i__19306 = G__19322;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__19307 = cljs.core.seq(domina.nodes(content));var chunk__19308 = null;var count__19309 = 0;var i__19310 = 0;while(true){
if((i__19310 < count__19309))
{var node = chunk__19308.cljs$core$IIndexed$_nth$arity$2(null,i__19310);goog.events.removeAll(node,type__$1);
{
var G__19323 = seq__19307;
var G__19324 = chunk__19308;
var G__19325 = count__19309;
var G__19326 = (i__19310 + 1);
seq__19307 = G__19323;
chunk__19308 = G__19324;
count__19309 = G__19325;
i__19310 = G__19326;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__19307);if(temp__4092__auto__)
{var seq__19307__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19307__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__19307__$1);{
var G__19327 = cljs.core.chunk_rest(seq__19307__$1);
var G__19328 = c__4015__auto__;
var G__19329 = cljs.core.count(c__4015__auto__);
var G__19330 = 0;
seq__19307 = G__19327;
chunk__19308 = G__19328;
count__19309 = G__19329;
i__19310 = G__19330;
continue;
}
} else
{var node = cljs.core.first(seq__19307__$1);goog.events.removeAll(node,type__$1);
{
var G__19331 = cljs.core.next(seq__19307__$1);
var G__19332 = null;
var G__19333 = 0;
var G__19334 = 0;
seq__19307 = G__19331;
chunk__19308 = G__19332;
count__19309 = G__19333;
i__19310 = G__19334;
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
var G__19335 = parent;
var G__19336 = cljs.core.cons(parent,so_far);
n = G__19335;
so_far = G__19336;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__19345_19353 = cljs.core.seq(ancestors);var chunk__19346_19354 = null;var count__19347_19355 = 0;var i__19348_19356 = 0;while(true){
if((i__19348_19356 < count__19347_19355))
{var n_19357 = chunk__19346_19354.cljs$core$IIndexed$_nth$arity$2(null,i__19348_19356);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19357;
goog.events.fireListeners(n_19357,evt.type,true,evt);
}
{
var G__19358 = seq__19345_19353;
var G__19359 = chunk__19346_19354;
var G__19360 = count__19347_19355;
var G__19361 = (i__19348_19356 + 1);
seq__19345_19353 = G__19358;
chunk__19346_19354 = G__19359;
count__19347_19355 = G__19360;
i__19348_19356 = G__19361;
continue;
}
} else
{var temp__4092__auto___19362 = cljs.core.seq(seq__19345_19353);if(temp__4092__auto___19362)
{var seq__19345_19363__$1 = temp__4092__auto___19362;if(cljs.core.chunked_seq_QMARK_(seq__19345_19363__$1))
{var c__4015__auto___19364 = cljs.core.chunk_first(seq__19345_19363__$1);{
var G__19365 = cljs.core.chunk_rest(seq__19345_19363__$1);
var G__19366 = c__4015__auto___19364;
var G__19367 = cljs.core.count(c__4015__auto___19364);
var G__19368 = 0;
seq__19345_19353 = G__19365;
chunk__19346_19354 = G__19366;
count__19347_19355 = G__19367;
i__19348_19356 = G__19368;
continue;
}
} else
{var n_19369 = cljs.core.first(seq__19345_19363__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19369;
goog.events.fireListeners(n_19369,evt.type,true,evt);
}
{
var G__19370 = cljs.core.next(seq__19345_19363__$1);
var G__19371 = null;
var G__19372 = 0;
var G__19373 = 0;
seq__19345_19353 = G__19370;
chunk__19346_19354 = G__19371;
count__19347_19355 = G__19372;
i__19348_19356 = G__19373;
continue;
}
}
} else
{}
}
break;
}
var seq__19349_19374 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__19350_19375 = null;var count__19351_19376 = 0;var i__19352_19377 = 0;while(true){
if((i__19352_19377 < count__19351_19376))
{var n_19378 = chunk__19350_19375.cljs$core$IIndexed$_nth$arity$2(null,i__19352_19377);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19378;
goog.events.fireListeners(n_19378,evt.type,false,evt);
}
{
var G__19379 = seq__19349_19374;
var G__19380 = chunk__19350_19375;
var G__19381 = count__19351_19376;
var G__19382 = (i__19352_19377 + 1);
seq__19349_19374 = G__19379;
chunk__19350_19375 = G__19380;
count__19351_19376 = G__19381;
i__19352_19377 = G__19382;
continue;
}
} else
{var temp__4092__auto___19383 = cljs.core.seq(seq__19349_19374);if(temp__4092__auto___19383)
{var seq__19349_19384__$1 = temp__4092__auto___19383;if(cljs.core.chunked_seq_QMARK_(seq__19349_19384__$1))
{var c__4015__auto___19385 = cljs.core.chunk_first(seq__19349_19384__$1);{
var G__19386 = cljs.core.chunk_rest(seq__19349_19384__$1);
var G__19387 = c__4015__auto___19385;
var G__19388 = cljs.core.count(c__4015__auto___19385);
var G__19389 = 0;
seq__19349_19374 = G__19386;
chunk__19350_19375 = G__19387;
count__19351_19376 = G__19388;
i__19352_19377 = G__19389;
continue;
}
} else
{var n_19390 = cljs.core.first(seq__19349_19384__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19390;
goog.events.fireListeners(n_19390,evt.type,false,evt);
}
{
var G__19391 = cljs.core.next(seq__19349_19384__$1);
var G__19392 = null;
var G__19393 = 0;
var G__19394 = 0;
seq__19349_19374 = G__19391;
chunk__19350_19375 = G__19392;
count__19351_19376 = G__19393;
i__19352_19377 = G__19394;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__19401_19407 = cljs.core.seq(evt_map);var chunk__19402_19408 = null;var count__19403_19409 = 0;var i__19404_19410 = 0;while(true){
if((i__19404_19410 < count__19403_19409))
{var vec__19405_19411 = chunk__19402_19408.cljs$core$IIndexed$_nth$arity$2(null,i__19404_19410);var k_19412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19411,0,null);var v_19413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405_19411,1,null);(evt[k_19412] = v_19413);
{
var G__19414 = seq__19401_19407;
var G__19415 = chunk__19402_19408;
var G__19416 = count__19403_19409;
var G__19417 = (i__19404_19410 + 1);
seq__19401_19407 = G__19414;
chunk__19402_19408 = G__19415;
count__19403_19409 = G__19416;
i__19404_19410 = G__19417;
continue;
}
} else
{var temp__4092__auto___19418 = cljs.core.seq(seq__19401_19407);if(temp__4092__auto___19418)
{var seq__19401_19419__$1 = temp__4092__auto___19418;if(cljs.core.chunked_seq_QMARK_(seq__19401_19419__$1))
{var c__4015__auto___19420 = cljs.core.chunk_first(seq__19401_19419__$1);{
var G__19421 = cljs.core.chunk_rest(seq__19401_19419__$1);
var G__19422 = c__4015__auto___19420;
var G__19423 = cljs.core.count(c__4015__auto___19420);
var G__19424 = 0;
seq__19401_19407 = G__19421;
chunk__19402_19408 = G__19422;
count__19403_19409 = G__19423;
i__19404_19410 = G__19424;
continue;
}
} else
{var vec__19406_19425 = cljs.core.first(seq__19401_19419__$1);var k_19426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406_19425,0,null);var v_19427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406_19425,1,null);(evt[k_19426] = v_19427);
{
var G__19428 = cljs.core.next(seq__19401_19419__$1);
var G__19429 = null;
var G__19430 = 0;
var G__19431 = 0;
seq__19401_19407 = G__19428;
chunk__19402_19408 = G__19429;
count__19403_19409 = G__19430;
i__19404_19410 = G__19431;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__19432_SHARP_){return goog.events.getListeners(p1__19432_SHARP_,type__$1,false);
}),domina.nodes(content));
});
