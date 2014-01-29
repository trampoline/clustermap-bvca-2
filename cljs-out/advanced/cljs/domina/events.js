// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26293 = {};return obj26293;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26297 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26297 = (function (evt,f,create_listener_function,meta26298){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26298 = meta26298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26297.cljs$lang$type = true;
domina.events.t26297.cljs$lang$ctorStr = "domina.events/t26297";
domina.events.t26297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26297");
});
domina.events.t26297.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26297.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26297.prototype.domina$events$Event$ = true;
domina.events.t26297.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26297.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26297.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26297.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26297.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26297.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26299){var self__ = this;
var _26299__$1 = this;return self__.meta26298;
});
domina.events.t26297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26299,meta26298__$1){var self__ = this;
var _26299__$1 = this;return (new domina.events.t26297(self__.evt,self__.f,self__.create_listener_function,meta26298__$1));
});
domina.events.__GT_t26297 = (function __GT_t26297(evt__$1,f__$1,create_listener_function__$1,meta26298){return (new domina.events.t26297(evt__$1,f__$1,create_listener_function__$1,meta26298));
});
}
return (new domina.events.t26297(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26297 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26297 = (function (evt,f,create_listener_function,meta26298){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26298 = meta26298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26297.cljs$lang$type = true;
domina.events.t26297.cljs$lang$ctorStr = "domina.events/t26297";
domina.events.t26297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26297");
});
domina.events.t26297.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26297.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26297.prototype.domina$events$Event$ = true;
domina.events.t26297.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26297.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26297.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26297.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26297.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26297.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26299){var self__ = this;
var _26299__$1 = this;return self__.meta26298;
});
domina.events.t26297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26299,meta26298__$1){var self__ = this;
var _26299__$1 = this;return (new domina.events.t26297(self__.evt,self__.f,self__.create_listener_function,meta26298__$1));
});
domina.events.__GT_t26297 = (function __GT_t26297(evt__$1,f__$1,create_listener_function__$1,meta26298){return (new domina.events.t26297(evt__$1,f__$1,create_listener_function__$1,meta26298));
});
}
return (new domina.events.t26297(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26304(s__26305){return (new cljs.core.LazySeq(null,(function (){var s__26305__$1 = s__26305;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26305__$1);if(temp__4092__auto__)
{var s__26305__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26305__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26305__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26307 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26306 = 0;while(true){
if((i__26306 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26306);cljs.core.chunk_append(b__26307,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26308 = (i__26306 + 1);
i__26306 = G__26308;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26307),iter__26304(cljs.core.chunk_rest(s__26305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26307),null);
}
} else
{var node = cljs.core.first(s__26305__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26304(cljs.core.rest(s__26305__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26317 = cljs.core.seq(domina.nodes(content));var chunk__26318 = null;var count__26319 = 0;var i__26320 = 0;while(true){
if((i__26320 < count__26319))
{var node = chunk__26318.cljs$core$IIndexed$_nth$arity$2(null,i__26320);goog.events.removeAll(node);
{
var G__26325 = seq__26317;
var G__26326 = chunk__26318;
var G__26327 = count__26319;
var G__26328 = (i__26320 + 1);
seq__26317 = G__26325;
chunk__26318 = G__26326;
count__26319 = G__26327;
i__26320 = G__26328;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26317);if(temp__4092__auto__)
{var seq__26317__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26317__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26317__$1);{
var G__26329 = cljs.core.chunk_rest(seq__26317__$1);
var G__26330 = c__4148__auto__;
var G__26331 = cljs.core.count(c__4148__auto__);
var G__26332 = 0;
seq__26317 = G__26329;
chunk__26318 = G__26330;
count__26319 = G__26331;
i__26320 = G__26332;
continue;
}
} else
{var node = cljs.core.first(seq__26317__$1);goog.events.removeAll(node);
{
var G__26333 = cljs.core.next(seq__26317__$1);
var G__26334 = null;
var G__26335 = 0;
var G__26336 = 0;
seq__26317 = G__26333;
chunk__26318 = G__26334;
count__26319 = G__26335;
i__26320 = G__26336;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26321 = cljs.core.seq(domina.nodes(content));var chunk__26322 = null;var count__26323 = 0;var i__26324 = 0;while(true){
if((i__26324 < count__26323))
{var node = chunk__26322.cljs$core$IIndexed$_nth$arity$2(null,i__26324);goog.events.removeAll(node,type__$1);
{
var G__26337 = seq__26321;
var G__26338 = chunk__26322;
var G__26339 = count__26323;
var G__26340 = (i__26324 + 1);
seq__26321 = G__26337;
chunk__26322 = G__26338;
count__26323 = G__26339;
i__26324 = G__26340;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26321);if(temp__4092__auto__)
{var seq__26321__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26321__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26321__$1);{
var G__26341 = cljs.core.chunk_rest(seq__26321__$1);
var G__26342 = c__4148__auto__;
var G__26343 = cljs.core.count(c__4148__auto__);
var G__26344 = 0;
seq__26321 = G__26341;
chunk__26322 = G__26342;
count__26323 = G__26343;
i__26324 = G__26344;
continue;
}
} else
{var node = cljs.core.first(seq__26321__$1);goog.events.removeAll(node,type__$1);
{
var G__26345 = cljs.core.next(seq__26321__$1);
var G__26346 = null;
var G__26347 = 0;
var G__26348 = 0;
seq__26321 = G__26345;
chunk__26322 = G__26346;
count__26323 = G__26347;
i__26324 = G__26348;
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
var G__26349 = parent;
var G__26350 = cljs.core.cons(parent,so_far);
n = G__26349;
so_far = G__26350;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26359_26367 = cljs.core.seq(ancestors);var chunk__26360_26368 = null;var count__26361_26369 = 0;var i__26362_26370 = 0;while(true){
if((i__26362_26370 < count__26361_26369))
{var n_26371 = chunk__26360_26368.cljs$core$IIndexed$_nth$arity$2(null,i__26362_26370);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26371;
goog.events.fireListeners(n_26371,evt.type,true,evt);
}
{
var G__26372 = seq__26359_26367;
var G__26373 = chunk__26360_26368;
var G__26374 = count__26361_26369;
var G__26375 = (i__26362_26370 + 1);
seq__26359_26367 = G__26372;
chunk__26360_26368 = G__26373;
count__26361_26369 = G__26374;
i__26362_26370 = G__26375;
continue;
}
} else
{var temp__4092__auto___26376 = cljs.core.seq(seq__26359_26367);if(temp__4092__auto___26376)
{var seq__26359_26377__$1 = temp__4092__auto___26376;if(cljs.core.chunked_seq_QMARK_(seq__26359_26377__$1))
{var c__4148__auto___26378 = cljs.core.chunk_first(seq__26359_26377__$1);{
var G__26379 = cljs.core.chunk_rest(seq__26359_26377__$1);
var G__26380 = c__4148__auto___26378;
var G__26381 = cljs.core.count(c__4148__auto___26378);
var G__26382 = 0;
seq__26359_26367 = G__26379;
chunk__26360_26368 = G__26380;
count__26361_26369 = G__26381;
i__26362_26370 = G__26382;
continue;
}
} else
{var n_26383 = cljs.core.first(seq__26359_26377__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26383;
goog.events.fireListeners(n_26383,evt.type,true,evt);
}
{
var G__26384 = cljs.core.next(seq__26359_26377__$1);
var G__26385 = null;
var G__26386 = 0;
var G__26387 = 0;
seq__26359_26367 = G__26384;
chunk__26360_26368 = G__26385;
count__26361_26369 = G__26386;
i__26362_26370 = G__26387;
continue;
}
}
} else
{}
}
break;
}
var seq__26363_26388 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26364_26389 = null;var count__26365_26390 = 0;var i__26366_26391 = 0;while(true){
if((i__26366_26391 < count__26365_26390))
{var n_26392 = chunk__26364_26389.cljs$core$IIndexed$_nth$arity$2(null,i__26366_26391);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26392;
goog.events.fireListeners(n_26392,evt.type,false,evt);
}
{
var G__26393 = seq__26363_26388;
var G__26394 = chunk__26364_26389;
var G__26395 = count__26365_26390;
var G__26396 = (i__26366_26391 + 1);
seq__26363_26388 = G__26393;
chunk__26364_26389 = G__26394;
count__26365_26390 = G__26395;
i__26366_26391 = G__26396;
continue;
}
} else
{var temp__4092__auto___26397 = cljs.core.seq(seq__26363_26388);if(temp__4092__auto___26397)
{var seq__26363_26398__$1 = temp__4092__auto___26397;if(cljs.core.chunked_seq_QMARK_(seq__26363_26398__$1))
{var c__4148__auto___26399 = cljs.core.chunk_first(seq__26363_26398__$1);{
var G__26400 = cljs.core.chunk_rest(seq__26363_26398__$1);
var G__26401 = c__4148__auto___26399;
var G__26402 = cljs.core.count(c__4148__auto___26399);
var G__26403 = 0;
seq__26363_26388 = G__26400;
chunk__26364_26389 = G__26401;
count__26365_26390 = G__26402;
i__26366_26391 = G__26403;
continue;
}
} else
{var n_26404 = cljs.core.first(seq__26363_26398__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26404;
goog.events.fireListeners(n_26404,evt.type,false,evt);
}
{
var G__26405 = cljs.core.next(seq__26363_26398__$1);
var G__26406 = null;
var G__26407 = 0;
var G__26408 = 0;
seq__26363_26388 = G__26405;
chunk__26364_26389 = G__26406;
count__26365_26390 = G__26407;
i__26366_26391 = G__26408;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26415_26421 = cljs.core.seq(evt_map);var chunk__26416_26422 = null;var count__26417_26423 = 0;var i__26418_26424 = 0;while(true){
if((i__26418_26424 < count__26417_26423))
{var vec__26419_26425 = chunk__26416_26422.cljs$core$IIndexed$_nth$arity$2(null,i__26418_26424);var k_26426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26419_26425,0,null);var v_26427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26419_26425,1,null);(evt[k_26426] = v_26427);
{
var G__26428 = seq__26415_26421;
var G__26429 = chunk__26416_26422;
var G__26430 = count__26417_26423;
var G__26431 = (i__26418_26424 + 1);
seq__26415_26421 = G__26428;
chunk__26416_26422 = G__26429;
count__26417_26423 = G__26430;
i__26418_26424 = G__26431;
continue;
}
} else
{var temp__4092__auto___26432 = cljs.core.seq(seq__26415_26421);if(temp__4092__auto___26432)
{var seq__26415_26433__$1 = temp__4092__auto___26432;if(cljs.core.chunked_seq_QMARK_(seq__26415_26433__$1))
{var c__4148__auto___26434 = cljs.core.chunk_first(seq__26415_26433__$1);{
var G__26435 = cljs.core.chunk_rest(seq__26415_26433__$1);
var G__26436 = c__4148__auto___26434;
var G__26437 = cljs.core.count(c__4148__auto___26434);
var G__26438 = 0;
seq__26415_26421 = G__26435;
chunk__26416_26422 = G__26436;
count__26417_26423 = G__26437;
i__26418_26424 = G__26438;
continue;
}
} else
{var vec__26420_26439 = cljs.core.first(seq__26415_26433__$1);var k_26440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420_26439,0,null);var v_26441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26420_26439,1,null);(evt[k_26440] = v_26441);
{
var G__26442 = cljs.core.next(seq__26415_26433__$1);
var G__26443 = null;
var G__26444 = 0;
var G__26445 = 0;
seq__26415_26421 = G__26442;
chunk__26416_26422 = G__26443;
count__26417_26423 = G__26444;
i__26418_26424 = G__26445;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26446_SHARP_){return goog.events.getListeners(p1__26446_SHARP_,type__$1,false);
}),domina.nodes(content));
});
