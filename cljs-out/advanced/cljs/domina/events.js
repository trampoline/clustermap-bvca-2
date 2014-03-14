// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39277 = {};return obj39277;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39281 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39281 = (function (evt,f,create_listener_function,meta39282){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39282 = meta39282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39281.cljs$lang$type = true;
domina.events.t39281.cljs$lang$ctorStr = "domina.events/t39281";
domina.events.t39281.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39281");
});
domina.events.t39281.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39281.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39281.prototype.domina$events$Event$ = true;
domina.events.t39281.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39281.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39281.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39281.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39281.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39281.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39283){var self__ = this;
var _39283__$1 = this;return self__.meta39282;
});
domina.events.t39281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39283,meta39282__$1){var self__ = this;
var _39283__$1 = this;return (new domina.events.t39281(self__.evt,self__.f,self__.create_listener_function,meta39282__$1));
});
domina.events.__GT_t39281 = (function __GT_t39281(evt__$1,f__$1,create_listener_function__$1,meta39282){return (new domina.events.t39281(evt__$1,f__$1,create_listener_function__$1,meta39282));
});
}
return (new domina.events.t39281(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39281 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39281 = (function (evt,f,create_listener_function,meta39282){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39282 = meta39282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39281.cljs$lang$type = true;
domina.events.t39281.cljs$lang$ctorStr = "domina.events/t39281";
domina.events.t39281.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39281");
});
domina.events.t39281.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39281.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39281.prototype.domina$events$Event$ = true;
domina.events.t39281.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39281.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39281.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39281.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39281.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39281.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39283){var self__ = this;
var _39283__$1 = this;return self__.meta39282;
});
domina.events.t39281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39283,meta39282__$1){var self__ = this;
var _39283__$1 = this;return (new domina.events.t39281(self__.evt,self__.f,self__.create_listener_function,meta39282__$1));
});
domina.events.__GT_t39281 = (function __GT_t39281(evt__$1,f__$1,create_listener_function__$1,meta39282){return (new domina.events.t39281(evt__$1,f__$1,create_listener_function__$1,meta39282));
});
}
return (new domina.events.t39281(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39288(s__39289){return (new cljs.core.LazySeq(null,(function (){var s__39289__$1 = s__39289;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39289__$1);if(temp__4092__auto__)
{var s__39289__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39289__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39289__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39291 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39290 = 0;while(true){
if((i__39290 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39290);cljs.core.chunk_append(b__39291,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39292 = (i__39290 + 1);
i__39290 = G__39292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39291),iter__39288(cljs.core.chunk_rest(s__39289__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39291),null);
}
} else
{var node = cljs.core.first(s__39289__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39288(cljs.core.rest(s__39289__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__39301 = cljs.core.seq(domina.nodes(content));var chunk__39302 = null;var count__39303 = 0;var i__39304 = 0;while(true){
if((i__39304 < count__39303))
{var node = chunk__39302.cljs$core$IIndexed$_nth$arity$2(null,i__39304);goog.events.removeAll(node);
{
var G__39309 = seq__39301;
var G__39310 = chunk__39302;
var G__39311 = count__39303;
var G__39312 = (i__39304 + 1);
seq__39301 = G__39309;
chunk__39302 = G__39310;
count__39303 = G__39311;
i__39304 = G__39312;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39301);if(temp__4092__auto__)
{var seq__39301__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39301__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39301__$1);{
var G__39313 = cljs.core.chunk_rest(seq__39301__$1);
var G__39314 = c__4189__auto__;
var G__39315 = cljs.core.count(c__4189__auto__);
var G__39316 = 0;
seq__39301 = G__39313;
chunk__39302 = G__39314;
count__39303 = G__39315;
i__39304 = G__39316;
continue;
}
} else
{var node = cljs.core.first(seq__39301__$1);goog.events.removeAll(node);
{
var G__39317 = cljs.core.next(seq__39301__$1);
var G__39318 = null;
var G__39319 = 0;
var G__39320 = 0;
seq__39301 = G__39317;
chunk__39302 = G__39318;
count__39303 = G__39319;
i__39304 = G__39320;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39305 = cljs.core.seq(domina.nodes(content));var chunk__39306 = null;var count__39307 = 0;var i__39308 = 0;while(true){
if((i__39308 < count__39307))
{var node = chunk__39306.cljs$core$IIndexed$_nth$arity$2(null,i__39308);goog.events.removeAll(node,type__$1);
{
var G__39321 = seq__39305;
var G__39322 = chunk__39306;
var G__39323 = count__39307;
var G__39324 = (i__39308 + 1);
seq__39305 = G__39321;
chunk__39306 = G__39322;
count__39307 = G__39323;
i__39308 = G__39324;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39305);if(temp__4092__auto__)
{var seq__39305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39305__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39305__$1);{
var G__39325 = cljs.core.chunk_rest(seq__39305__$1);
var G__39326 = c__4189__auto__;
var G__39327 = cljs.core.count(c__4189__auto__);
var G__39328 = 0;
seq__39305 = G__39325;
chunk__39306 = G__39326;
count__39307 = G__39327;
i__39308 = G__39328;
continue;
}
} else
{var node = cljs.core.first(seq__39305__$1);goog.events.removeAll(node,type__$1);
{
var G__39329 = cljs.core.next(seq__39305__$1);
var G__39330 = null;
var G__39331 = 0;
var G__39332 = 0;
seq__39305 = G__39329;
chunk__39306 = G__39330;
count__39307 = G__39331;
i__39308 = G__39332;
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
var G__39333 = parent;
var G__39334 = cljs.core.cons(parent,so_far);
n = G__39333;
so_far = G__39334;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39343_39351 = cljs.core.seq(ancestors);var chunk__39344_39352 = null;var count__39345_39353 = 0;var i__39346_39354 = 0;while(true){
if((i__39346_39354 < count__39345_39353))
{var n_39355 = chunk__39344_39352.cljs$core$IIndexed$_nth$arity$2(null,i__39346_39354);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39355;
goog.events.fireListeners(n_39355,evt.type,true,evt);
}
{
var G__39356 = seq__39343_39351;
var G__39357 = chunk__39344_39352;
var G__39358 = count__39345_39353;
var G__39359 = (i__39346_39354 + 1);
seq__39343_39351 = G__39356;
chunk__39344_39352 = G__39357;
count__39345_39353 = G__39358;
i__39346_39354 = G__39359;
continue;
}
} else
{var temp__4092__auto___39360 = cljs.core.seq(seq__39343_39351);if(temp__4092__auto___39360)
{var seq__39343_39361__$1 = temp__4092__auto___39360;if(cljs.core.chunked_seq_QMARK_(seq__39343_39361__$1))
{var c__4189__auto___39362 = cljs.core.chunk_first(seq__39343_39361__$1);{
var G__39363 = cljs.core.chunk_rest(seq__39343_39361__$1);
var G__39364 = c__4189__auto___39362;
var G__39365 = cljs.core.count(c__4189__auto___39362);
var G__39366 = 0;
seq__39343_39351 = G__39363;
chunk__39344_39352 = G__39364;
count__39345_39353 = G__39365;
i__39346_39354 = G__39366;
continue;
}
} else
{var n_39367 = cljs.core.first(seq__39343_39361__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39367;
goog.events.fireListeners(n_39367,evt.type,true,evt);
}
{
var G__39368 = cljs.core.next(seq__39343_39361__$1);
var G__39369 = null;
var G__39370 = 0;
var G__39371 = 0;
seq__39343_39351 = G__39368;
chunk__39344_39352 = G__39369;
count__39345_39353 = G__39370;
i__39346_39354 = G__39371;
continue;
}
}
} else
{}
}
break;
}
var seq__39347_39372 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39348_39373 = null;var count__39349_39374 = 0;var i__39350_39375 = 0;while(true){
if((i__39350_39375 < count__39349_39374))
{var n_39376 = chunk__39348_39373.cljs$core$IIndexed$_nth$arity$2(null,i__39350_39375);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39376;
goog.events.fireListeners(n_39376,evt.type,false,evt);
}
{
var G__39377 = seq__39347_39372;
var G__39378 = chunk__39348_39373;
var G__39379 = count__39349_39374;
var G__39380 = (i__39350_39375 + 1);
seq__39347_39372 = G__39377;
chunk__39348_39373 = G__39378;
count__39349_39374 = G__39379;
i__39350_39375 = G__39380;
continue;
}
} else
{var temp__4092__auto___39381 = cljs.core.seq(seq__39347_39372);if(temp__4092__auto___39381)
{var seq__39347_39382__$1 = temp__4092__auto___39381;if(cljs.core.chunked_seq_QMARK_(seq__39347_39382__$1))
{var c__4189__auto___39383 = cljs.core.chunk_first(seq__39347_39382__$1);{
var G__39384 = cljs.core.chunk_rest(seq__39347_39382__$1);
var G__39385 = c__4189__auto___39383;
var G__39386 = cljs.core.count(c__4189__auto___39383);
var G__39387 = 0;
seq__39347_39372 = G__39384;
chunk__39348_39373 = G__39385;
count__39349_39374 = G__39386;
i__39350_39375 = G__39387;
continue;
}
} else
{var n_39388 = cljs.core.first(seq__39347_39382__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39388;
goog.events.fireListeners(n_39388,evt.type,false,evt);
}
{
var G__39389 = cljs.core.next(seq__39347_39382__$1);
var G__39390 = null;
var G__39391 = 0;
var G__39392 = 0;
seq__39347_39372 = G__39389;
chunk__39348_39373 = G__39390;
count__39349_39374 = G__39391;
i__39350_39375 = G__39392;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39399_39405 = cljs.core.seq(evt_map);var chunk__39400_39406 = null;var count__39401_39407 = 0;var i__39402_39408 = 0;while(true){
if((i__39402_39408 < count__39401_39407))
{var vec__39403_39409 = chunk__39400_39406.cljs$core$IIndexed$_nth$arity$2(null,i__39402_39408);var k_39410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39403_39409,0,null);var v_39411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39403_39409,1,null);(evt[k_39410] = v_39411);
{
var G__39412 = seq__39399_39405;
var G__39413 = chunk__39400_39406;
var G__39414 = count__39401_39407;
var G__39415 = (i__39402_39408 + 1);
seq__39399_39405 = G__39412;
chunk__39400_39406 = G__39413;
count__39401_39407 = G__39414;
i__39402_39408 = G__39415;
continue;
}
} else
{var temp__4092__auto___39416 = cljs.core.seq(seq__39399_39405);if(temp__4092__auto___39416)
{var seq__39399_39417__$1 = temp__4092__auto___39416;if(cljs.core.chunked_seq_QMARK_(seq__39399_39417__$1))
{var c__4189__auto___39418 = cljs.core.chunk_first(seq__39399_39417__$1);{
var G__39419 = cljs.core.chunk_rest(seq__39399_39417__$1);
var G__39420 = c__4189__auto___39418;
var G__39421 = cljs.core.count(c__4189__auto___39418);
var G__39422 = 0;
seq__39399_39405 = G__39419;
chunk__39400_39406 = G__39420;
count__39401_39407 = G__39421;
i__39402_39408 = G__39422;
continue;
}
} else
{var vec__39404_39423 = cljs.core.first(seq__39399_39417__$1);var k_39424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39404_39423,0,null);var v_39425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39404_39423,1,null);(evt[k_39424] = v_39425);
{
var G__39426 = cljs.core.next(seq__39399_39417__$1);
var G__39427 = null;
var G__39428 = 0;
var G__39429 = 0;
seq__39399_39405 = G__39426;
chunk__39400_39406 = G__39427;
count__39401_39407 = G__39428;
i__39402_39408 = G__39429;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39430_SHARP_){return goog.events.getListeners(p1__39430_SHARP_,type__$1,false);
}),domina.nodes(content));
});
