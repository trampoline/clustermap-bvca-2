// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32408 = {};return obj32408;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t32412 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32412 = (function (evt,f,create_listener_function,meta32413){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32413 = meta32413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32412.cljs$lang$type = true;
domina.events.t32412.cljs$lang$ctorStr = "domina.events/t32412";
domina.events.t32412.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t32412");
});
domina.events.t32412.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t32412.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t32412.prototype.domina$events$Event$ = true;
domina.events.t32412.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32412.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32412.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32412.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32412.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32412.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32414){var self__ = this;
var _32414__$1 = this;return self__.meta32413;
});
domina.events.t32412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32414,meta32413__$1){var self__ = this;
var _32414__$1 = this;return (new domina.events.t32412(self__.evt,self__.f,self__.create_listener_function,meta32413__$1));
});
domina.events.__GT_t32412 = (function __GT_t32412(evt__$1,f__$1,create_listener_function__$1,meta32413){return (new domina.events.t32412(evt__$1,f__$1,create_listener_function__$1,meta32413));
});
}
return (new domina.events.t32412(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t32412 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32412 = (function (evt,f,create_listener_function,meta32413){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32413 = meta32413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32412.cljs$lang$type = true;
domina.events.t32412.cljs$lang$ctorStr = "domina.events/t32412";
domina.events.t32412.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.events/t32412");
});
domina.events.t32412.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t32412.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t32412.prototype.domina$events$Event$ = true;
domina.events.t32412.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32412.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32412.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32412.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32412.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32412.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32414){var self__ = this;
var _32414__$1 = this;return self__.meta32413;
});
domina.events.t32412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32414,meta32413__$1){var self__ = this;
var _32414__$1 = this;return (new domina.events.t32412(self__.evt,self__.f,self__.create_listener_function,meta32413__$1));
});
domina.events.__GT_t32412 = (function __GT_t32412(evt__$1,f__$1,create_listener_function__$1,meta32413){return (new domina.events.t32412(evt__$1,f__$1,create_listener_function__$1,meta32413));
});
}
return (new domina.events.t32412(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__3984__auto__ = (function iter__32419(s__32420){return (new cljs.core.LazySeq(null,(function (){var s__32420__$1 = s__32420;while(true){
var temp__4092__auto__ = cljs.core.seq(s__32420__$1);if(temp__4092__auto__)
{var s__32420__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__32420__$2))
{var c__3982__auto__ = cljs.core.chunk_first(s__32420__$2);var size__3983__auto__ = cljs.core.count(c__3982__auto__);var b__32422 = cljs.core.chunk_buffer(size__3983__auto__);if((function (){var i__32421 = 0;while(true){
if((i__32421 < size__3983__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3982__auto__,i__32421);cljs.core.chunk_append(b__32422,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32423 = (i__32421 + 1);
i__32421 = G__32423;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__32422),iter__32419(cljs.core.chunk_rest(s__32420__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__32422),null);
}
} else
{var node = cljs.core.first(s__32420__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32419(cljs.core.rest(s__32420__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32432 = cljs.core.seq(domina.nodes(content));var chunk__32433 = null;var count__32434 = 0;var i__32435 = 0;while(true){
if((i__32435 < count__32434))
{var node = chunk__32433.cljs$core$IIndexed$_nth$arity$2(null,i__32435);goog.events.removeAll(node);
{
var G__32440 = seq__32432;
var G__32441 = chunk__32433;
var G__32442 = count__32434;
var G__32443 = (i__32435 + 1);
seq__32432 = G__32440;
chunk__32433 = G__32441;
count__32434 = G__32442;
i__32435 = G__32443;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__32432);if(temp__4092__auto__)
{var seq__32432__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__32432__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__32432__$1);{
var G__32444 = cljs.core.chunk_rest(seq__32432__$1);
var G__32445 = c__4015__auto__;
var G__32446 = cljs.core.count(c__4015__auto__);
var G__32447 = 0;
seq__32432 = G__32444;
chunk__32433 = G__32445;
count__32434 = G__32446;
i__32435 = G__32447;
continue;
}
} else
{var node = cljs.core.first(seq__32432__$1);goog.events.removeAll(node);
{
var G__32448 = cljs.core.next(seq__32432__$1);
var G__32449 = null;
var G__32450 = 0;
var G__32451 = 0;
seq__32432 = G__32448;
chunk__32433 = G__32449;
count__32434 = G__32450;
i__32435 = G__32451;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__32436 = cljs.core.seq(domina.nodes(content));var chunk__32437 = null;var count__32438 = 0;var i__32439 = 0;while(true){
if((i__32439 < count__32438))
{var node = chunk__32437.cljs$core$IIndexed$_nth$arity$2(null,i__32439);goog.events.removeAll(node,type__$1);
{
var G__32452 = seq__32436;
var G__32453 = chunk__32437;
var G__32454 = count__32438;
var G__32455 = (i__32439 + 1);
seq__32436 = G__32452;
chunk__32437 = G__32453;
count__32438 = G__32454;
i__32439 = G__32455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__32436);if(temp__4092__auto__)
{var seq__32436__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__32436__$1))
{var c__4015__auto__ = cljs.core.chunk_first(seq__32436__$1);{
var G__32456 = cljs.core.chunk_rest(seq__32436__$1);
var G__32457 = c__4015__auto__;
var G__32458 = cljs.core.count(c__4015__auto__);
var G__32459 = 0;
seq__32436 = G__32456;
chunk__32437 = G__32457;
count__32438 = G__32458;
i__32439 = G__32459;
continue;
}
} else
{var node = cljs.core.first(seq__32436__$1);goog.events.removeAll(node,type__$1);
{
var G__32460 = cljs.core.next(seq__32436__$1);
var G__32461 = null;
var G__32462 = 0;
var G__32463 = 0;
seq__32436 = G__32460;
chunk__32437 = G__32461;
count__32438 = G__32462;
i__32439 = G__32463;
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
var G__32464 = parent;
var G__32465 = cljs.core.cons(parent,so_far);
n = G__32464;
so_far = G__32465;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__32474_32482 = cljs.core.seq(ancestors);var chunk__32475_32483 = null;var count__32476_32484 = 0;var i__32477_32485 = 0;while(true){
if((i__32477_32485 < count__32476_32484))
{var n_32486 = chunk__32475_32483.cljs$core$IIndexed$_nth$arity$2(null,i__32477_32485);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32486;
goog.events.fireListeners(n_32486,evt.type,true,evt);
}
{
var G__32487 = seq__32474_32482;
var G__32488 = chunk__32475_32483;
var G__32489 = count__32476_32484;
var G__32490 = (i__32477_32485 + 1);
seq__32474_32482 = G__32487;
chunk__32475_32483 = G__32488;
count__32476_32484 = G__32489;
i__32477_32485 = G__32490;
continue;
}
} else
{var temp__4092__auto___32491 = cljs.core.seq(seq__32474_32482);if(temp__4092__auto___32491)
{var seq__32474_32492__$1 = temp__4092__auto___32491;if(cljs.core.chunked_seq_QMARK_(seq__32474_32492__$1))
{var c__4015__auto___32493 = cljs.core.chunk_first(seq__32474_32492__$1);{
var G__32494 = cljs.core.chunk_rest(seq__32474_32492__$1);
var G__32495 = c__4015__auto___32493;
var G__32496 = cljs.core.count(c__4015__auto___32493);
var G__32497 = 0;
seq__32474_32482 = G__32494;
chunk__32475_32483 = G__32495;
count__32476_32484 = G__32496;
i__32477_32485 = G__32497;
continue;
}
} else
{var n_32498 = cljs.core.first(seq__32474_32492__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32498;
goog.events.fireListeners(n_32498,evt.type,true,evt);
}
{
var G__32499 = cljs.core.next(seq__32474_32492__$1);
var G__32500 = null;
var G__32501 = 0;
var G__32502 = 0;
seq__32474_32482 = G__32499;
chunk__32475_32483 = G__32500;
count__32476_32484 = G__32501;
i__32477_32485 = G__32502;
continue;
}
}
} else
{}
}
break;
}
var seq__32478_32503 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__32479_32504 = null;var count__32480_32505 = 0;var i__32481_32506 = 0;while(true){
if((i__32481_32506 < count__32480_32505))
{var n_32507 = chunk__32479_32504.cljs$core$IIndexed$_nth$arity$2(null,i__32481_32506);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32507;
goog.events.fireListeners(n_32507,evt.type,false,evt);
}
{
var G__32508 = seq__32478_32503;
var G__32509 = chunk__32479_32504;
var G__32510 = count__32480_32505;
var G__32511 = (i__32481_32506 + 1);
seq__32478_32503 = G__32508;
chunk__32479_32504 = G__32509;
count__32480_32505 = G__32510;
i__32481_32506 = G__32511;
continue;
}
} else
{var temp__4092__auto___32512 = cljs.core.seq(seq__32478_32503);if(temp__4092__auto___32512)
{var seq__32478_32513__$1 = temp__4092__auto___32512;if(cljs.core.chunked_seq_QMARK_(seq__32478_32513__$1))
{var c__4015__auto___32514 = cljs.core.chunk_first(seq__32478_32513__$1);{
var G__32515 = cljs.core.chunk_rest(seq__32478_32513__$1);
var G__32516 = c__4015__auto___32514;
var G__32517 = cljs.core.count(c__4015__auto___32514);
var G__32518 = 0;
seq__32478_32503 = G__32515;
chunk__32479_32504 = G__32516;
count__32480_32505 = G__32517;
i__32481_32506 = G__32518;
continue;
}
} else
{var n_32519 = cljs.core.first(seq__32478_32513__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32519;
goog.events.fireListeners(n_32519,evt.type,false,evt);
}
{
var G__32520 = cljs.core.next(seq__32478_32513__$1);
var G__32521 = null;
var G__32522 = 0;
var G__32523 = 0;
seq__32478_32503 = G__32520;
chunk__32479_32504 = G__32521;
count__32480_32505 = G__32522;
i__32481_32506 = G__32523;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__32530_32536 = cljs.core.seq(evt_map);var chunk__32531_32537 = null;var count__32532_32538 = 0;var i__32533_32539 = 0;while(true){
if((i__32533_32539 < count__32532_32538))
{var vec__32534_32540 = chunk__32531_32537.cljs$core$IIndexed$_nth$arity$2(null,i__32533_32539);var k_32541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534_32540,0,null);var v_32542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534_32540,1,null);(evt[k_32541] = v_32542);
{
var G__32543 = seq__32530_32536;
var G__32544 = chunk__32531_32537;
var G__32545 = count__32532_32538;
var G__32546 = (i__32533_32539 + 1);
seq__32530_32536 = G__32543;
chunk__32531_32537 = G__32544;
count__32532_32538 = G__32545;
i__32533_32539 = G__32546;
continue;
}
} else
{var temp__4092__auto___32547 = cljs.core.seq(seq__32530_32536);if(temp__4092__auto___32547)
{var seq__32530_32548__$1 = temp__4092__auto___32547;if(cljs.core.chunked_seq_QMARK_(seq__32530_32548__$1))
{var c__4015__auto___32549 = cljs.core.chunk_first(seq__32530_32548__$1);{
var G__32550 = cljs.core.chunk_rest(seq__32530_32548__$1);
var G__32551 = c__4015__auto___32549;
var G__32552 = cljs.core.count(c__4015__auto___32549);
var G__32553 = 0;
seq__32530_32536 = G__32550;
chunk__32531_32537 = G__32551;
count__32532_32538 = G__32552;
i__32533_32539 = G__32553;
continue;
}
} else
{var vec__32535_32554 = cljs.core.first(seq__32530_32548__$1);var k_32555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535_32554,0,null);var v_32556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32535_32554,1,null);(evt[k_32555] = v_32556);
{
var G__32557 = cljs.core.next(seq__32530_32548__$1);
var G__32558 = null;
var G__32559 = 0;
var G__32560 = 0;
seq__32530_32536 = G__32557;
chunk__32531_32537 = G__32558;
count__32532_32538 = G__32559;
i__32533_32539 = G__32560;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__32561_SHARP_){return goog.events.getListeners(p1__32561_SHARP_,type__$1,false);
}),domina.nodes(content));
});
