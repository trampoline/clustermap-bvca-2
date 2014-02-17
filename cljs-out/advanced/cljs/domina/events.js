// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27293 = {};return obj27293;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27297 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27297 = (function (evt,f,create_listener_function,meta27298){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27298 = meta27298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27297.cljs$lang$type = true;
domina.events.t27297.cljs$lang$ctorStr = "domina.events/t27297";
domina.events.t27297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27297");
});
domina.events.t27297.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27297.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27297.prototype.domina$events$Event$ = true;
domina.events.t27297.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27297.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27297.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27297.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27297.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27297.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27299){var self__ = this;
var _27299__$1 = this;return self__.meta27298;
});
domina.events.t27297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27299,meta27298__$1){var self__ = this;
var _27299__$1 = this;return (new domina.events.t27297(self__.evt,self__.f,self__.create_listener_function,meta27298__$1));
});
domina.events.__GT_t27297 = (function __GT_t27297(evt__$1,f__$1,create_listener_function__$1,meta27298){return (new domina.events.t27297(evt__$1,f__$1,create_listener_function__$1,meta27298));
});
}
return (new domina.events.t27297(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27297 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27297 = (function (evt,f,create_listener_function,meta27298){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27298 = meta27298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27297.cljs$lang$type = true;
domina.events.t27297.cljs$lang$ctorStr = "domina.events/t27297";
domina.events.t27297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27297");
});
domina.events.t27297.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27297.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27297.prototype.domina$events$Event$ = true;
domina.events.t27297.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27297.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27297.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27297.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27297.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27297.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27299){var self__ = this;
var _27299__$1 = this;return self__.meta27298;
});
domina.events.t27297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27299,meta27298__$1){var self__ = this;
var _27299__$1 = this;return (new domina.events.t27297(self__.evt,self__.f,self__.create_listener_function,meta27298__$1));
});
domina.events.__GT_t27297 = (function __GT_t27297(evt__$1,f__$1,create_listener_function__$1,meta27298){return (new domina.events.t27297(evt__$1,f__$1,create_listener_function__$1,meta27298));
});
}
return (new domina.events.t27297(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27304(s__27305){return (new cljs.core.LazySeq(null,(function (){var s__27305__$1 = s__27305;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27305__$1);if(temp__4092__auto__)
{var s__27305__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27305__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27305__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27307 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27306 = 0;while(true){
if((i__27306 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27306);cljs.core.chunk_append(b__27307,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27308 = (i__27306 + 1);
i__27306 = G__27308;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27307),iter__27304(cljs.core.chunk_rest(s__27305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27307),null);
}
} else
{var node = cljs.core.first(s__27305__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27304(cljs.core.rest(s__27305__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27317 = cljs.core.seq(domina.nodes(content));var chunk__27318 = null;var count__27319 = 0;var i__27320 = 0;while(true){
if((i__27320 < count__27319))
{var node = chunk__27318.cljs$core$IIndexed$_nth$arity$2(null,i__27320);goog.events.removeAll(node);
{
var G__27325 = seq__27317;
var G__27326 = chunk__27318;
var G__27327 = count__27319;
var G__27328 = (i__27320 + 1);
seq__27317 = G__27325;
chunk__27318 = G__27326;
count__27319 = G__27327;
i__27320 = G__27328;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27317);if(temp__4092__auto__)
{var seq__27317__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27317__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27317__$1);{
var G__27329 = cljs.core.chunk_rest(seq__27317__$1);
var G__27330 = c__4148__auto__;
var G__27331 = cljs.core.count(c__4148__auto__);
var G__27332 = 0;
seq__27317 = G__27329;
chunk__27318 = G__27330;
count__27319 = G__27331;
i__27320 = G__27332;
continue;
}
} else
{var node = cljs.core.first(seq__27317__$1);goog.events.removeAll(node);
{
var G__27333 = cljs.core.next(seq__27317__$1);
var G__27334 = null;
var G__27335 = 0;
var G__27336 = 0;
seq__27317 = G__27333;
chunk__27318 = G__27334;
count__27319 = G__27335;
i__27320 = G__27336;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27321 = cljs.core.seq(domina.nodes(content));var chunk__27322 = null;var count__27323 = 0;var i__27324 = 0;while(true){
if((i__27324 < count__27323))
{var node = chunk__27322.cljs$core$IIndexed$_nth$arity$2(null,i__27324);goog.events.removeAll(node,type__$1);
{
var G__27337 = seq__27321;
var G__27338 = chunk__27322;
var G__27339 = count__27323;
var G__27340 = (i__27324 + 1);
seq__27321 = G__27337;
chunk__27322 = G__27338;
count__27323 = G__27339;
i__27324 = G__27340;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27321);if(temp__4092__auto__)
{var seq__27321__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27321__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27321__$1);{
var G__27341 = cljs.core.chunk_rest(seq__27321__$1);
var G__27342 = c__4148__auto__;
var G__27343 = cljs.core.count(c__4148__auto__);
var G__27344 = 0;
seq__27321 = G__27341;
chunk__27322 = G__27342;
count__27323 = G__27343;
i__27324 = G__27344;
continue;
}
} else
{var node = cljs.core.first(seq__27321__$1);goog.events.removeAll(node,type__$1);
{
var G__27345 = cljs.core.next(seq__27321__$1);
var G__27346 = null;
var G__27347 = 0;
var G__27348 = 0;
seq__27321 = G__27345;
chunk__27322 = G__27346;
count__27323 = G__27347;
i__27324 = G__27348;
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
var G__27349 = parent;
var G__27350 = cljs.core.cons(parent,so_far);
n = G__27349;
so_far = G__27350;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27359_27367 = cljs.core.seq(ancestors);var chunk__27360_27368 = null;var count__27361_27369 = 0;var i__27362_27370 = 0;while(true){
if((i__27362_27370 < count__27361_27369))
{var n_27371 = chunk__27360_27368.cljs$core$IIndexed$_nth$arity$2(null,i__27362_27370);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27371;
goog.events.fireListeners(n_27371,evt.type,true,evt);
}
{
var G__27372 = seq__27359_27367;
var G__27373 = chunk__27360_27368;
var G__27374 = count__27361_27369;
var G__27375 = (i__27362_27370 + 1);
seq__27359_27367 = G__27372;
chunk__27360_27368 = G__27373;
count__27361_27369 = G__27374;
i__27362_27370 = G__27375;
continue;
}
} else
{var temp__4092__auto___27376 = cljs.core.seq(seq__27359_27367);if(temp__4092__auto___27376)
{var seq__27359_27377__$1 = temp__4092__auto___27376;if(cljs.core.chunked_seq_QMARK_(seq__27359_27377__$1))
{var c__4148__auto___27378 = cljs.core.chunk_first(seq__27359_27377__$1);{
var G__27379 = cljs.core.chunk_rest(seq__27359_27377__$1);
var G__27380 = c__4148__auto___27378;
var G__27381 = cljs.core.count(c__4148__auto___27378);
var G__27382 = 0;
seq__27359_27367 = G__27379;
chunk__27360_27368 = G__27380;
count__27361_27369 = G__27381;
i__27362_27370 = G__27382;
continue;
}
} else
{var n_27383 = cljs.core.first(seq__27359_27377__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27383;
goog.events.fireListeners(n_27383,evt.type,true,evt);
}
{
var G__27384 = cljs.core.next(seq__27359_27377__$1);
var G__27385 = null;
var G__27386 = 0;
var G__27387 = 0;
seq__27359_27367 = G__27384;
chunk__27360_27368 = G__27385;
count__27361_27369 = G__27386;
i__27362_27370 = G__27387;
continue;
}
}
} else
{}
}
break;
}
var seq__27363_27388 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27364_27389 = null;var count__27365_27390 = 0;var i__27366_27391 = 0;while(true){
if((i__27366_27391 < count__27365_27390))
{var n_27392 = chunk__27364_27389.cljs$core$IIndexed$_nth$arity$2(null,i__27366_27391);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27392;
goog.events.fireListeners(n_27392,evt.type,false,evt);
}
{
var G__27393 = seq__27363_27388;
var G__27394 = chunk__27364_27389;
var G__27395 = count__27365_27390;
var G__27396 = (i__27366_27391 + 1);
seq__27363_27388 = G__27393;
chunk__27364_27389 = G__27394;
count__27365_27390 = G__27395;
i__27366_27391 = G__27396;
continue;
}
} else
{var temp__4092__auto___27397 = cljs.core.seq(seq__27363_27388);if(temp__4092__auto___27397)
{var seq__27363_27398__$1 = temp__4092__auto___27397;if(cljs.core.chunked_seq_QMARK_(seq__27363_27398__$1))
{var c__4148__auto___27399 = cljs.core.chunk_first(seq__27363_27398__$1);{
var G__27400 = cljs.core.chunk_rest(seq__27363_27398__$1);
var G__27401 = c__4148__auto___27399;
var G__27402 = cljs.core.count(c__4148__auto___27399);
var G__27403 = 0;
seq__27363_27388 = G__27400;
chunk__27364_27389 = G__27401;
count__27365_27390 = G__27402;
i__27366_27391 = G__27403;
continue;
}
} else
{var n_27404 = cljs.core.first(seq__27363_27398__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27404;
goog.events.fireListeners(n_27404,evt.type,false,evt);
}
{
var G__27405 = cljs.core.next(seq__27363_27398__$1);
var G__27406 = null;
var G__27407 = 0;
var G__27408 = 0;
seq__27363_27388 = G__27405;
chunk__27364_27389 = G__27406;
count__27365_27390 = G__27407;
i__27366_27391 = G__27408;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27415_27421 = cljs.core.seq(evt_map);var chunk__27416_27422 = null;var count__27417_27423 = 0;var i__27418_27424 = 0;while(true){
if((i__27418_27424 < count__27417_27423))
{var vec__27419_27425 = chunk__27416_27422.cljs$core$IIndexed$_nth$arity$2(null,i__27418_27424);var k_27426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419_27425,0,null);var v_27427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27419_27425,1,null);(evt[k_27426] = v_27427);
{
var G__27428 = seq__27415_27421;
var G__27429 = chunk__27416_27422;
var G__27430 = count__27417_27423;
var G__27431 = (i__27418_27424 + 1);
seq__27415_27421 = G__27428;
chunk__27416_27422 = G__27429;
count__27417_27423 = G__27430;
i__27418_27424 = G__27431;
continue;
}
} else
{var temp__4092__auto___27432 = cljs.core.seq(seq__27415_27421);if(temp__4092__auto___27432)
{var seq__27415_27433__$1 = temp__4092__auto___27432;if(cljs.core.chunked_seq_QMARK_(seq__27415_27433__$1))
{var c__4148__auto___27434 = cljs.core.chunk_first(seq__27415_27433__$1);{
var G__27435 = cljs.core.chunk_rest(seq__27415_27433__$1);
var G__27436 = c__4148__auto___27434;
var G__27437 = cljs.core.count(c__4148__auto___27434);
var G__27438 = 0;
seq__27415_27421 = G__27435;
chunk__27416_27422 = G__27436;
count__27417_27423 = G__27437;
i__27418_27424 = G__27438;
continue;
}
} else
{var vec__27420_27439 = cljs.core.first(seq__27415_27433__$1);var k_27440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27420_27439,0,null);var v_27441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27420_27439,1,null);(evt[k_27440] = v_27441);
{
var G__27442 = cljs.core.next(seq__27415_27433__$1);
var G__27443 = null;
var G__27444 = 0;
var G__27445 = 0;
seq__27415_27421 = G__27442;
chunk__27416_27422 = G__27443;
count__27417_27423 = G__27444;
i__27418_27424 = G__27445;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27446_SHARP_){return goog.events.getListeners(p1__27446_SHARP_,type__$1,false);
}),domina.nodes(content));
});
