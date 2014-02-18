// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27501 = {};return obj27501;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27505 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27505 = (function (evt,f,create_listener_function,meta27506){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27506 = meta27506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27505.cljs$lang$type = true;
domina.events.t27505.cljs$lang$ctorStr = "domina.events/t27505";
domina.events.t27505.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27505");
});
domina.events.t27505.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27505.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27505.prototype.domina$events$Event$ = true;
domina.events.t27505.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27505.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27505.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27505.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27505.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27505.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27507){var self__ = this;
var _27507__$1 = this;return self__.meta27506;
});
domina.events.t27505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27507,meta27506__$1){var self__ = this;
var _27507__$1 = this;return (new domina.events.t27505(self__.evt,self__.f,self__.create_listener_function,meta27506__$1));
});
domina.events.__GT_t27505 = (function __GT_t27505(evt__$1,f__$1,create_listener_function__$1,meta27506){return (new domina.events.t27505(evt__$1,f__$1,create_listener_function__$1,meta27506));
});
}
return (new domina.events.t27505(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27505 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27505 = (function (evt,f,create_listener_function,meta27506){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27506 = meta27506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27505.cljs$lang$type = true;
domina.events.t27505.cljs$lang$ctorStr = "domina.events/t27505";
domina.events.t27505.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27505");
});
domina.events.t27505.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27505.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27505.prototype.domina$events$Event$ = true;
domina.events.t27505.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27505.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27505.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27505.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27505.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27505.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27507){var self__ = this;
var _27507__$1 = this;return self__.meta27506;
});
domina.events.t27505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27507,meta27506__$1){var self__ = this;
var _27507__$1 = this;return (new domina.events.t27505(self__.evt,self__.f,self__.create_listener_function,meta27506__$1));
});
domina.events.__GT_t27505 = (function __GT_t27505(evt__$1,f__$1,create_listener_function__$1,meta27506){return (new domina.events.t27505(evt__$1,f__$1,create_listener_function__$1,meta27506));
});
}
return (new domina.events.t27505(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27512(s__27513){return (new cljs.core.LazySeq(null,(function (){var s__27513__$1 = s__27513;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27513__$1);if(temp__4092__auto__)
{var s__27513__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27513__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27513__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27515 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27514 = 0;while(true){
if((i__27514 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27514);cljs.core.chunk_append(b__27515,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27516 = (i__27514 + 1);
i__27514 = G__27516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27515),iter__27512(cljs.core.chunk_rest(s__27513__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27515),null);
}
} else
{var node = cljs.core.first(s__27513__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27512(cljs.core.rest(s__27513__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27525 = cljs.core.seq(domina.nodes(content));var chunk__27526 = null;var count__27527 = 0;var i__27528 = 0;while(true){
if((i__27528 < count__27527))
{var node = chunk__27526.cljs$core$IIndexed$_nth$arity$2(null,i__27528);goog.events.removeAll(node);
{
var G__27533 = seq__27525;
var G__27534 = chunk__27526;
var G__27535 = count__27527;
var G__27536 = (i__27528 + 1);
seq__27525 = G__27533;
chunk__27526 = G__27534;
count__27527 = G__27535;
i__27528 = G__27536;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27525);if(temp__4092__auto__)
{var seq__27525__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27525__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27525__$1);{
var G__27537 = cljs.core.chunk_rest(seq__27525__$1);
var G__27538 = c__4148__auto__;
var G__27539 = cljs.core.count(c__4148__auto__);
var G__27540 = 0;
seq__27525 = G__27537;
chunk__27526 = G__27538;
count__27527 = G__27539;
i__27528 = G__27540;
continue;
}
} else
{var node = cljs.core.first(seq__27525__$1);goog.events.removeAll(node);
{
var G__27541 = cljs.core.next(seq__27525__$1);
var G__27542 = null;
var G__27543 = 0;
var G__27544 = 0;
seq__27525 = G__27541;
chunk__27526 = G__27542;
count__27527 = G__27543;
i__27528 = G__27544;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27529 = cljs.core.seq(domina.nodes(content));var chunk__27530 = null;var count__27531 = 0;var i__27532 = 0;while(true){
if((i__27532 < count__27531))
{var node = chunk__27530.cljs$core$IIndexed$_nth$arity$2(null,i__27532);goog.events.removeAll(node,type__$1);
{
var G__27545 = seq__27529;
var G__27546 = chunk__27530;
var G__27547 = count__27531;
var G__27548 = (i__27532 + 1);
seq__27529 = G__27545;
chunk__27530 = G__27546;
count__27531 = G__27547;
i__27532 = G__27548;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27529);if(temp__4092__auto__)
{var seq__27529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27529__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27529__$1);{
var G__27549 = cljs.core.chunk_rest(seq__27529__$1);
var G__27550 = c__4148__auto__;
var G__27551 = cljs.core.count(c__4148__auto__);
var G__27552 = 0;
seq__27529 = G__27549;
chunk__27530 = G__27550;
count__27531 = G__27551;
i__27532 = G__27552;
continue;
}
} else
{var node = cljs.core.first(seq__27529__$1);goog.events.removeAll(node,type__$1);
{
var G__27553 = cljs.core.next(seq__27529__$1);
var G__27554 = null;
var G__27555 = 0;
var G__27556 = 0;
seq__27529 = G__27553;
chunk__27530 = G__27554;
count__27531 = G__27555;
i__27532 = G__27556;
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
var G__27557 = parent;
var G__27558 = cljs.core.cons(parent,so_far);
n = G__27557;
so_far = G__27558;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27567_27575 = cljs.core.seq(ancestors);var chunk__27568_27576 = null;var count__27569_27577 = 0;var i__27570_27578 = 0;while(true){
if((i__27570_27578 < count__27569_27577))
{var n_27579 = chunk__27568_27576.cljs$core$IIndexed$_nth$arity$2(null,i__27570_27578);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27579;
goog.events.fireListeners(n_27579,evt.type,true,evt);
}
{
var G__27580 = seq__27567_27575;
var G__27581 = chunk__27568_27576;
var G__27582 = count__27569_27577;
var G__27583 = (i__27570_27578 + 1);
seq__27567_27575 = G__27580;
chunk__27568_27576 = G__27581;
count__27569_27577 = G__27582;
i__27570_27578 = G__27583;
continue;
}
} else
{var temp__4092__auto___27584 = cljs.core.seq(seq__27567_27575);if(temp__4092__auto___27584)
{var seq__27567_27585__$1 = temp__4092__auto___27584;if(cljs.core.chunked_seq_QMARK_(seq__27567_27585__$1))
{var c__4148__auto___27586 = cljs.core.chunk_first(seq__27567_27585__$1);{
var G__27587 = cljs.core.chunk_rest(seq__27567_27585__$1);
var G__27588 = c__4148__auto___27586;
var G__27589 = cljs.core.count(c__4148__auto___27586);
var G__27590 = 0;
seq__27567_27575 = G__27587;
chunk__27568_27576 = G__27588;
count__27569_27577 = G__27589;
i__27570_27578 = G__27590;
continue;
}
} else
{var n_27591 = cljs.core.first(seq__27567_27585__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27591;
goog.events.fireListeners(n_27591,evt.type,true,evt);
}
{
var G__27592 = cljs.core.next(seq__27567_27585__$1);
var G__27593 = null;
var G__27594 = 0;
var G__27595 = 0;
seq__27567_27575 = G__27592;
chunk__27568_27576 = G__27593;
count__27569_27577 = G__27594;
i__27570_27578 = G__27595;
continue;
}
}
} else
{}
}
break;
}
var seq__27571_27596 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27572_27597 = null;var count__27573_27598 = 0;var i__27574_27599 = 0;while(true){
if((i__27574_27599 < count__27573_27598))
{var n_27600 = chunk__27572_27597.cljs$core$IIndexed$_nth$arity$2(null,i__27574_27599);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27600;
goog.events.fireListeners(n_27600,evt.type,false,evt);
}
{
var G__27601 = seq__27571_27596;
var G__27602 = chunk__27572_27597;
var G__27603 = count__27573_27598;
var G__27604 = (i__27574_27599 + 1);
seq__27571_27596 = G__27601;
chunk__27572_27597 = G__27602;
count__27573_27598 = G__27603;
i__27574_27599 = G__27604;
continue;
}
} else
{var temp__4092__auto___27605 = cljs.core.seq(seq__27571_27596);if(temp__4092__auto___27605)
{var seq__27571_27606__$1 = temp__4092__auto___27605;if(cljs.core.chunked_seq_QMARK_(seq__27571_27606__$1))
{var c__4148__auto___27607 = cljs.core.chunk_first(seq__27571_27606__$1);{
var G__27608 = cljs.core.chunk_rest(seq__27571_27606__$1);
var G__27609 = c__4148__auto___27607;
var G__27610 = cljs.core.count(c__4148__auto___27607);
var G__27611 = 0;
seq__27571_27596 = G__27608;
chunk__27572_27597 = G__27609;
count__27573_27598 = G__27610;
i__27574_27599 = G__27611;
continue;
}
} else
{var n_27612 = cljs.core.first(seq__27571_27606__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27612;
goog.events.fireListeners(n_27612,evt.type,false,evt);
}
{
var G__27613 = cljs.core.next(seq__27571_27606__$1);
var G__27614 = null;
var G__27615 = 0;
var G__27616 = 0;
seq__27571_27596 = G__27613;
chunk__27572_27597 = G__27614;
count__27573_27598 = G__27615;
i__27574_27599 = G__27616;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27623_27629 = cljs.core.seq(evt_map);var chunk__27624_27630 = null;var count__27625_27631 = 0;var i__27626_27632 = 0;while(true){
if((i__27626_27632 < count__27625_27631))
{var vec__27627_27633 = chunk__27624_27630.cljs$core$IIndexed$_nth$arity$2(null,i__27626_27632);var k_27634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627_27633,0,null);var v_27635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27627_27633,1,null);(evt[k_27634] = v_27635);
{
var G__27636 = seq__27623_27629;
var G__27637 = chunk__27624_27630;
var G__27638 = count__27625_27631;
var G__27639 = (i__27626_27632 + 1);
seq__27623_27629 = G__27636;
chunk__27624_27630 = G__27637;
count__27625_27631 = G__27638;
i__27626_27632 = G__27639;
continue;
}
} else
{var temp__4092__auto___27640 = cljs.core.seq(seq__27623_27629);if(temp__4092__auto___27640)
{var seq__27623_27641__$1 = temp__4092__auto___27640;if(cljs.core.chunked_seq_QMARK_(seq__27623_27641__$1))
{var c__4148__auto___27642 = cljs.core.chunk_first(seq__27623_27641__$1);{
var G__27643 = cljs.core.chunk_rest(seq__27623_27641__$1);
var G__27644 = c__4148__auto___27642;
var G__27645 = cljs.core.count(c__4148__auto___27642);
var G__27646 = 0;
seq__27623_27629 = G__27643;
chunk__27624_27630 = G__27644;
count__27625_27631 = G__27645;
i__27626_27632 = G__27646;
continue;
}
} else
{var vec__27628_27647 = cljs.core.first(seq__27623_27641__$1);var k_27648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27628_27647,0,null);var v_27649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27628_27647,1,null);(evt[k_27648] = v_27649);
{
var G__27650 = cljs.core.next(seq__27623_27641__$1);
var G__27651 = null;
var G__27652 = 0;
var G__27653 = 0;
seq__27623_27629 = G__27650;
chunk__27624_27630 = G__27651;
count__27625_27631 = G__27652;
i__27626_27632 = G__27653;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27654_SHARP_){return goog.events.getListeners(p1__27654_SHARP_,type__$1,false);
}),domina.nodes(content));
});
