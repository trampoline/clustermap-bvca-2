// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27549 = {};return obj27549;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27553 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27553 = (function (evt,f,create_listener_function,meta27554){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27553.cljs$lang$type = true;
domina.events.t27553.cljs$lang$ctorStr = "domina.events/t27553";
domina.events.t27553.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27553");
});
domina.events.t27553.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27553.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27553.prototype.domina$events$Event$ = true;
domina.events.t27553.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27553.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27553.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27553.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27553.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27553.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27555){var self__ = this;
var _27555__$1 = this;return self__.meta27554;
});
domina.events.t27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27555,meta27554__$1){var self__ = this;
var _27555__$1 = this;return (new domina.events.t27553(self__.evt,self__.f,self__.create_listener_function,meta27554__$1));
});
domina.events.__GT_t27553 = (function __GT_t27553(evt__$1,f__$1,create_listener_function__$1,meta27554){return (new domina.events.t27553(evt__$1,f__$1,create_listener_function__$1,meta27554));
});
}
return (new domina.events.t27553(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27553 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27553 = (function (evt,f,create_listener_function,meta27554){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27553.cljs$lang$type = true;
domina.events.t27553.cljs$lang$ctorStr = "domina.events/t27553";
domina.events.t27553.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27553");
});
domina.events.t27553.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27553.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27553.prototype.domina$events$Event$ = true;
domina.events.t27553.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27553.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27553.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27553.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27553.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27553.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27555){var self__ = this;
var _27555__$1 = this;return self__.meta27554;
});
domina.events.t27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27555,meta27554__$1){var self__ = this;
var _27555__$1 = this;return (new domina.events.t27553(self__.evt,self__.f,self__.create_listener_function,meta27554__$1));
});
domina.events.__GT_t27553 = (function __GT_t27553(evt__$1,f__$1,create_listener_function__$1,meta27554){return (new domina.events.t27553(evt__$1,f__$1,create_listener_function__$1,meta27554));
});
}
return (new domina.events.t27553(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27560(s__27561){return (new cljs.core.LazySeq(null,(function (){var s__27561__$1 = s__27561;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27561__$1);if(temp__4092__auto__)
{var s__27561__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27561__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27561__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27563 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27562 = 0;while(true){
if((i__27562 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27562);cljs.core.chunk_append(b__27563,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27564 = (i__27562 + 1);
i__27562 = G__27564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27563),iter__27560(cljs.core.chunk_rest(s__27561__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27563),null);
}
} else
{var node = cljs.core.first(s__27561__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27560(cljs.core.rest(s__27561__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27573 = cljs.core.seq(domina.nodes(content));var chunk__27574 = null;var count__27575 = 0;var i__27576 = 0;while(true){
if((i__27576 < count__27575))
{var node = chunk__27574.cljs$core$IIndexed$_nth$arity$2(null,i__27576);goog.events.removeAll(node);
{
var G__27581 = seq__27573;
var G__27582 = chunk__27574;
var G__27583 = count__27575;
var G__27584 = (i__27576 + 1);
seq__27573 = G__27581;
chunk__27574 = G__27582;
count__27575 = G__27583;
i__27576 = G__27584;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27573);if(temp__4092__auto__)
{var seq__27573__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27573__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27573__$1);{
var G__27585 = cljs.core.chunk_rest(seq__27573__$1);
var G__27586 = c__4148__auto__;
var G__27587 = cljs.core.count(c__4148__auto__);
var G__27588 = 0;
seq__27573 = G__27585;
chunk__27574 = G__27586;
count__27575 = G__27587;
i__27576 = G__27588;
continue;
}
} else
{var node = cljs.core.first(seq__27573__$1);goog.events.removeAll(node);
{
var G__27589 = cljs.core.next(seq__27573__$1);
var G__27590 = null;
var G__27591 = 0;
var G__27592 = 0;
seq__27573 = G__27589;
chunk__27574 = G__27590;
count__27575 = G__27591;
i__27576 = G__27592;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27577 = cljs.core.seq(domina.nodes(content));var chunk__27578 = null;var count__27579 = 0;var i__27580 = 0;while(true){
if((i__27580 < count__27579))
{var node = chunk__27578.cljs$core$IIndexed$_nth$arity$2(null,i__27580);goog.events.removeAll(node,type__$1);
{
var G__27593 = seq__27577;
var G__27594 = chunk__27578;
var G__27595 = count__27579;
var G__27596 = (i__27580 + 1);
seq__27577 = G__27593;
chunk__27578 = G__27594;
count__27579 = G__27595;
i__27580 = G__27596;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27577);if(temp__4092__auto__)
{var seq__27577__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27577__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27577__$1);{
var G__27597 = cljs.core.chunk_rest(seq__27577__$1);
var G__27598 = c__4148__auto__;
var G__27599 = cljs.core.count(c__4148__auto__);
var G__27600 = 0;
seq__27577 = G__27597;
chunk__27578 = G__27598;
count__27579 = G__27599;
i__27580 = G__27600;
continue;
}
} else
{var node = cljs.core.first(seq__27577__$1);goog.events.removeAll(node,type__$1);
{
var G__27601 = cljs.core.next(seq__27577__$1);
var G__27602 = null;
var G__27603 = 0;
var G__27604 = 0;
seq__27577 = G__27601;
chunk__27578 = G__27602;
count__27579 = G__27603;
i__27580 = G__27604;
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
var G__27605 = parent;
var G__27606 = cljs.core.cons(parent,so_far);
n = G__27605;
so_far = G__27606;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27615_27623 = cljs.core.seq(ancestors);var chunk__27616_27624 = null;var count__27617_27625 = 0;var i__27618_27626 = 0;while(true){
if((i__27618_27626 < count__27617_27625))
{var n_27627 = chunk__27616_27624.cljs$core$IIndexed$_nth$arity$2(null,i__27618_27626);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27627;
goog.events.fireListeners(n_27627,evt.type,true,evt);
}
{
var G__27628 = seq__27615_27623;
var G__27629 = chunk__27616_27624;
var G__27630 = count__27617_27625;
var G__27631 = (i__27618_27626 + 1);
seq__27615_27623 = G__27628;
chunk__27616_27624 = G__27629;
count__27617_27625 = G__27630;
i__27618_27626 = G__27631;
continue;
}
} else
{var temp__4092__auto___27632 = cljs.core.seq(seq__27615_27623);if(temp__4092__auto___27632)
{var seq__27615_27633__$1 = temp__4092__auto___27632;if(cljs.core.chunked_seq_QMARK_(seq__27615_27633__$1))
{var c__4148__auto___27634 = cljs.core.chunk_first(seq__27615_27633__$1);{
var G__27635 = cljs.core.chunk_rest(seq__27615_27633__$1);
var G__27636 = c__4148__auto___27634;
var G__27637 = cljs.core.count(c__4148__auto___27634);
var G__27638 = 0;
seq__27615_27623 = G__27635;
chunk__27616_27624 = G__27636;
count__27617_27625 = G__27637;
i__27618_27626 = G__27638;
continue;
}
} else
{var n_27639 = cljs.core.first(seq__27615_27633__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27639;
goog.events.fireListeners(n_27639,evt.type,true,evt);
}
{
var G__27640 = cljs.core.next(seq__27615_27633__$1);
var G__27641 = null;
var G__27642 = 0;
var G__27643 = 0;
seq__27615_27623 = G__27640;
chunk__27616_27624 = G__27641;
count__27617_27625 = G__27642;
i__27618_27626 = G__27643;
continue;
}
}
} else
{}
}
break;
}
var seq__27619_27644 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27620_27645 = null;var count__27621_27646 = 0;var i__27622_27647 = 0;while(true){
if((i__27622_27647 < count__27621_27646))
{var n_27648 = chunk__27620_27645.cljs$core$IIndexed$_nth$arity$2(null,i__27622_27647);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27648;
goog.events.fireListeners(n_27648,evt.type,false,evt);
}
{
var G__27649 = seq__27619_27644;
var G__27650 = chunk__27620_27645;
var G__27651 = count__27621_27646;
var G__27652 = (i__27622_27647 + 1);
seq__27619_27644 = G__27649;
chunk__27620_27645 = G__27650;
count__27621_27646 = G__27651;
i__27622_27647 = G__27652;
continue;
}
} else
{var temp__4092__auto___27653 = cljs.core.seq(seq__27619_27644);if(temp__4092__auto___27653)
{var seq__27619_27654__$1 = temp__4092__auto___27653;if(cljs.core.chunked_seq_QMARK_(seq__27619_27654__$1))
{var c__4148__auto___27655 = cljs.core.chunk_first(seq__27619_27654__$1);{
var G__27656 = cljs.core.chunk_rest(seq__27619_27654__$1);
var G__27657 = c__4148__auto___27655;
var G__27658 = cljs.core.count(c__4148__auto___27655);
var G__27659 = 0;
seq__27619_27644 = G__27656;
chunk__27620_27645 = G__27657;
count__27621_27646 = G__27658;
i__27622_27647 = G__27659;
continue;
}
} else
{var n_27660 = cljs.core.first(seq__27619_27654__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27660;
goog.events.fireListeners(n_27660,evt.type,false,evt);
}
{
var G__27661 = cljs.core.next(seq__27619_27654__$1);
var G__27662 = null;
var G__27663 = 0;
var G__27664 = 0;
seq__27619_27644 = G__27661;
chunk__27620_27645 = G__27662;
count__27621_27646 = G__27663;
i__27622_27647 = G__27664;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27671_27677 = cljs.core.seq(evt_map);var chunk__27672_27678 = null;var count__27673_27679 = 0;var i__27674_27680 = 0;while(true){
if((i__27674_27680 < count__27673_27679))
{var vec__27675_27681 = chunk__27672_27678.cljs$core$IIndexed$_nth$arity$2(null,i__27674_27680);var k_27682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27675_27681,0,null);var v_27683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27675_27681,1,null);(evt[k_27682] = v_27683);
{
var G__27684 = seq__27671_27677;
var G__27685 = chunk__27672_27678;
var G__27686 = count__27673_27679;
var G__27687 = (i__27674_27680 + 1);
seq__27671_27677 = G__27684;
chunk__27672_27678 = G__27685;
count__27673_27679 = G__27686;
i__27674_27680 = G__27687;
continue;
}
} else
{var temp__4092__auto___27688 = cljs.core.seq(seq__27671_27677);if(temp__4092__auto___27688)
{var seq__27671_27689__$1 = temp__4092__auto___27688;if(cljs.core.chunked_seq_QMARK_(seq__27671_27689__$1))
{var c__4148__auto___27690 = cljs.core.chunk_first(seq__27671_27689__$1);{
var G__27691 = cljs.core.chunk_rest(seq__27671_27689__$1);
var G__27692 = c__4148__auto___27690;
var G__27693 = cljs.core.count(c__4148__auto___27690);
var G__27694 = 0;
seq__27671_27677 = G__27691;
chunk__27672_27678 = G__27692;
count__27673_27679 = G__27693;
i__27674_27680 = G__27694;
continue;
}
} else
{var vec__27676_27695 = cljs.core.first(seq__27671_27689__$1);var k_27696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676_27695,0,null);var v_27697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676_27695,1,null);(evt[k_27696] = v_27697);
{
var G__27698 = cljs.core.next(seq__27671_27689__$1);
var G__27699 = null;
var G__27700 = 0;
var G__27701 = 0;
seq__27671_27677 = G__27698;
chunk__27672_27678 = G__27699;
count__27673_27679 = G__27700;
i__27674_27680 = G__27701;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27702_SHARP_){return goog.events.getListeners(p1__27702_SHARP_,type__$1,false);
}),domina.nodes(content));
});
