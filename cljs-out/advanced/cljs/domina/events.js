// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25392 = {};return obj25392;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25396 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25396 = (function (evt,f,create_listener_function,meta25397){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25397 = meta25397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25396.cljs$lang$type = true;
domina.events.t25396.cljs$lang$ctorStr = "domina.events/t25396";
domina.events.t25396.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25396");
});
domina.events.t25396.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25396.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25396.prototype.domina$events$Event$ = true;
domina.events.t25396.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25396.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25396.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25396.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25396.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25396.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25398){var self__ = this;
var _25398__$1 = this;return self__.meta25397;
});
domina.events.t25396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25398,meta25397__$1){var self__ = this;
var _25398__$1 = this;return (new domina.events.t25396(self__.evt,self__.f,self__.create_listener_function,meta25397__$1));
});
domina.events.__GT_t25396 = (function __GT_t25396(evt__$1,f__$1,create_listener_function__$1,meta25397){return (new domina.events.t25396(evt__$1,f__$1,create_listener_function__$1,meta25397));
});
}
return (new domina.events.t25396(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25396 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25396 = (function (evt,f,create_listener_function,meta25397){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25397 = meta25397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25396.cljs$lang$type = true;
domina.events.t25396.cljs$lang$ctorStr = "domina.events/t25396";
domina.events.t25396.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25396");
});
domina.events.t25396.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25396.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25396.prototype.domina$events$Event$ = true;
domina.events.t25396.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25396.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25396.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25396.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25396.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25396.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25398){var self__ = this;
var _25398__$1 = this;return self__.meta25397;
});
domina.events.t25396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25398,meta25397__$1){var self__ = this;
var _25398__$1 = this;return (new domina.events.t25396(self__.evt,self__.f,self__.create_listener_function,meta25397__$1));
});
domina.events.__GT_t25396 = (function __GT_t25396(evt__$1,f__$1,create_listener_function__$1,meta25397){return (new domina.events.t25396(evt__$1,f__$1,create_listener_function__$1,meta25397));
});
}
return (new domina.events.t25396(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25403(s__25404){return (new cljs.core.LazySeq(null,(function (){var s__25404__$1 = s__25404;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25404__$1);if(temp__4092__auto__)
{var s__25404__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25404__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25404__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25406 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25405 = 0;while(true){
if((i__25405 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25405);cljs.core.chunk_append(b__25406,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25407 = (i__25405 + 1);
i__25405 = G__25407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25406),iter__25403(cljs.core.chunk_rest(s__25404__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25406),null);
}
} else
{var node = cljs.core.first(s__25404__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25403(cljs.core.rest(s__25404__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25416 = cljs.core.seq(domina.nodes(content));var chunk__25417 = null;var count__25418 = 0;var i__25419 = 0;while(true){
if((i__25419 < count__25418))
{var node = chunk__25417.cljs$core$IIndexed$_nth$arity$2(null,i__25419);goog.events.removeAll(node);
{
var G__25424 = seq__25416;
var G__25425 = chunk__25417;
var G__25426 = count__25418;
var G__25427 = (i__25419 + 1);
seq__25416 = G__25424;
chunk__25417 = G__25425;
count__25418 = G__25426;
i__25419 = G__25427;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25416);if(temp__4092__auto__)
{var seq__25416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25416__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25416__$1);{
var G__25428 = cljs.core.chunk_rest(seq__25416__$1);
var G__25429 = c__4148__auto__;
var G__25430 = cljs.core.count(c__4148__auto__);
var G__25431 = 0;
seq__25416 = G__25428;
chunk__25417 = G__25429;
count__25418 = G__25430;
i__25419 = G__25431;
continue;
}
} else
{var node = cljs.core.first(seq__25416__$1);goog.events.removeAll(node);
{
var G__25432 = cljs.core.next(seq__25416__$1);
var G__25433 = null;
var G__25434 = 0;
var G__25435 = 0;
seq__25416 = G__25432;
chunk__25417 = G__25433;
count__25418 = G__25434;
i__25419 = G__25435;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25420 = cljs.core.seq(domina.nodes(content));var chunk__25421 = null;var count__25422 = 0;var i__25423 = 0;while(true){
if((i__25423 < count__25422))
{var node = chunk__25421.cljs$core$IIndexed$_nth$arity$2(null,i__25423);goog.events.removeAll(node,type__$1);
{
var G__25436 = seq__25420;
var G__25437 = chunk__25421;
var G__25438 = count__25422;
var G__25439 = (i__25423 + 1);
seq__25420 = G__25436;
chunk__25421 = G__25437;
count__25422 = G__25438;
i__25423 = G__25439;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25420);if(temp__4092__auto__)
{var seq__25420__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25420__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25420__$1);{
var G__25440 = cljs.core.chunk_rest(seq__25420__$1);
var G__25441 = c__4148__auto__;
var G__25442 = cljs.core.count(c__4148__auto__);
var G__25443 = 0;
seq__25420 = G__25440;
chunk__25421 = G__25441;
count__25422 = G__25442;
i__25423 = G__25443;
continue;
}
} else
{var node = cljs.core.first(seq__25420__$1);goog.events.removeAll(node,type__$1);
{
var G__25444 = cljs.core.next(seq__25420__$1);
var G__25445 = null;
var G__25446 = 0;
var G__25447 = 0;
seq__25420 = G__25444;
chunk__25421 = G__25445;
count__25422 = G__25446;
i__25423 = G__25447;
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
var G__25448 = parent;
var G__25449 = cljs.core.cons(parent,so_far);
n = G__25448;
so_far = G__25449;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25458_25466 = cljs.core.seq(ancestors);var chunk__25459_25467 = null;var count__25460_25468 = 0;var i__25461_25469 = 0;while(true){
if((i__25461_25469 < count__25460_25468))
{var n_25470 = chunk__25459_25467.cljs$core$IIndexed$_nth$arity$2(null,i__25461_25469);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25470;
goog.events.fireListeners(n_25470,evt.type,true,evt);
}
{
var G__25471 = seq__25458_25466;
var G__25472 = chunk__25459_25467;
var G__25473 = count__25460_25468;
var G__25474 = (i__25461_25469 + 1);
seq__25458_25466 = G__25471;
chunk__25459_25467 = G__25472;
count__25460_25468 = G__25473;
i__25461_25469 = G__25474;
continue;
}
} else
{var temp__4092__auto___25475 = cljs.core.seq(seq__25458_25466);if(temp__4092__auto___25475)
{var seq__25458_25476__$1 = temp__4092__auto___25475;if(cljs.core.chunked_seq_QMARK_(seq__25458_25476__$1))
{var c__4148__auto___25477 = cljs.core.chunk_first(seq__25458_25476__$1);{
var G__25478 = cljs.core.chunk_rest(seq__25458_25476__$1);
var G__25479 = c__4148__auto___25477;
var G__25480 = cljs.core.count(c__4148__auto___25477);
var G__25481 = 0;
seq__25458_25466 = G__25478;
chunk__25459_25467 = G__25479;
count__25460_25468 = G__25480;
i__25461_25469 = G__25481;
continue;
}
} else
{var n_25482 = cljs.core.first(seq__25458_25476__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25482;
goog.events.fireListeners(n_25482,evt.type,true,evt);
}
{
var G__25483 = cljs.core.next(seq__25458_25476__$1);
var G__25484 = null;
var G__25485 = 0;
var G__25486 = 0;
seq__25458_25466 = G__25483;
chunk__25459_25467 = G__25484;
count__25460_25468 = G__25485;
i__25461_25469 = G__25486;
continue;
}
}
} else
{}
}
break;
}
var seq__25462_25487 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25463_25488 = null;var count__25464_25489 = 0;var i__25465_25490 = 0;while(true){
if((i__25465_25490 < count__25464_25489))
{var n_25491 = chunk__25463_25488.cljs$core$IIndexed$_nth$arity$2(null,i__25465_25490);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25491;
goog.events.fireListeners(n_25491,evt.type,false,evt);
}
{
var G__25492 = seq__25462_25487;
var G__25493 = chunk__25463_25488;
var G__25494 = count__25464_25489;
var G__25495 = (i__25465_25490 + 1);
seq__25462_25487 = G__25492;
chunk__25463_25488 = G__25493;
count__25464_25489 = G__25494;
i__25465_25490 = G__25495;
continue;
}
} else
{var temp__4092__auto___25496 = cljs.core.seq(seq__25462_25487);if(temp__4092__auto___25496)
{var seq__25462_25497__$1 = temp__4092__auto___25496;if(cljs.core.chunked_seq_QMARK_(seq__25462_25497__$1))
{var c__4148__auto___25498 = cljs.core.chunk_first(seq__25462_25497__$1);{
var G__25499 = cljs.core.chunk_rest(seq__25462_25497__$1);
var G__25500 = c__4148__auto___25498;
var G__25501 = cljs.core.count(c__4148__auto___25498);
var G__25502 = 0;
seq__25462_25487 = G__25499;
chunk__25463_25488 = G__25500;
count__25464_25489 = G__25501;
i__25465_25490 = G__25502;
continue;
}
} else
{var n_25503 = cljs.core.first(seq__25462_25497__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25503;
goog.events.fireListeners(n_25503,evt.type,false,evt);
}
{
var G__25504 = cljs.core.next(seq__25462_25497__$1);
var G__25505 = null;
var G__25506 = 0;
var G__25507 = 0;
seq__25462_25487 = G__25504;
chunk__25463_25488 = G__25505;
count__25464_25489 = G__25506;
i__25465_25490 = G__25507;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__25514_25520 = cljs.core.seq(evt_map);var chunk__25515_25521 = null;var count__25516_25522 = 0;var i__25517_25523 = 0;while(true){
if((i__25517_25523 < count__25516_25522))
{var vec__25518_25524 = chunk__25515_25521.cljs$core$IIndexed$_nth$arity$2(null,i__25517_25523);var k_25525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25518_25524,0,null);var v_25526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25518_25524,1,null);(evt[k_25525] = v_25526);
{
var G__25527 = seq__25514_25520;
var G__25528 = chunk__25515_25521;
var G__25529 = count__25516_25522;
var G__25530 = (i__25517_25523 + 1);
seq__25514_25520 = G__25527;
chunk__25515_25521 = G__25528;
count__25516_25522 = G__25529;
i__25517_25523 = G__25530;
continue;
}
} else
{var temp__4092__auto___25531 = cljs.core.seq(seq__25514_25520);if(temp__4092__auto___25531)
{var seq__25514_25532__$1 = temp__4092__auto___25531;if(cljs.core.chunked_seq_QMARK_(seq__25514_25532__$1))
{var c__4148__auto___25533 = cljs.core.chunk_first(seq__25514_25532__$1);{
var G__25534 = cljs.core.chunk_rest(seq__25514_25532__$1);
var G__25535 = c__4148__auto___25533;
var G__25536 = cljs.core.count(c__4148__auto___25533);
var G__25537 = 0;
seq__25514_25520 = G__25534;
chunk__25515_25521 = G__25535;
count__25516_25522 = G__25536;
i__25517_25523 = G__25537;
continue;
}
} else
{var vec__25519_25538 = cljs.core.first(seq__25514_25532__$1);var k_25539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25519_25538,0,null);var v_25540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25519_25538,1,null);(evt[k_25539] = v_25540);
{
var G__25541 = cljs.core.next(seq__25514_25532__$1);
var G__25542 = null;
var G__25543 = 0;
var G__25544 = 0;
seq__25514_25520 = G__25541;
chunk__25515_25521 = G__25542;
count__25516_25522 = G__25543;
i__25517_25523 = G__25544;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__25545_SHARP_){return goog.events.getListeners(p1__25545_SHARP_,type__$1,false);
}),domina.nodes(content));
});
