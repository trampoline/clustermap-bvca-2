// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27509 = {};return obj27509;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27513 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27513 = (function (evt,f,create_listener_function,meta27514){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27514 = meta27514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27513.cljs$lang$type = true;
domina.events.t27513.cljs$lang$ctorStr = "domina.events/t27513";
domina.events.t27513.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27513");
});
domina.events.t27513.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27513.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27513.prototype.domina$events$Event$ = true;
domina.events.t27513.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27513.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27513.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27513.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27513.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27513.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27515){var self__ = this;
var _27515__$1 = this;return self__.meta27514;
});
domina.events.t27513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27515,meta27514__$1){var self__ = this;
var _27515__$1 = this;return (new domina.events.t27513(self__.evt,self__.f,self__.create_listener_function,meta27514__$1));
});
domina.events.__GT_t27513 = (function __GT_t27513(evt__$1,f__$1,create_listener_function__$1,meta27514){return (new domina.events.t27513(evt__$1,f__$1,create_listener_function__$1,meta27514));
});
}
return (new domina.events.t27513(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27513 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27513 = (function (evt,f,create_listener_function,meta27514){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27514 = meta27514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27513.cljs$lang$type = true;
domina.events.t27513.cljs$lang$ctorStr = "domina.events/t27513";
domina.events.t27513.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27513");
});
domina.events.t27513.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27513.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27513.prototype.domina$events$Event$ = true;
domina.events.t27513.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27513.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27513.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27513.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27513.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27513.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27515){var self__ = this;
var _27515__$1 = this;return self__.meta27514;
});
domina.events.t27513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27515,meta27514__$1){var self__ = this;
var _27515__$1 = this;return (new domina.events.t27513(self__.evt,self__.f,self__.create_listener_function,meta27514__$1));
});
domina.events.__GT_t27513 = (function __GT_t27513(evt__$1,f__$1,create_listener_function__$1,meta27514){return (new domina.events.t27513(evt__$1,f__$1,create_listener_function__$1,meta27514));
});
}
return (new domina.events.t27513(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27520(s__27521){return (new cljs.core.LazySeq(null,(function (){var s__27521__$1 = s__27521;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27521__$1);if(temp__4092__auto__)
{var s__27521__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27521__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27521__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27523 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27522 = 0;while(true){
if((i__27522 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27522);cljs.core.chunk_append(b__27523,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27524 = (i__27522 + 1);
i__27522 = G__27524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27523),iter__27520(cljs.core.chunk_rest(s__27521__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27523),null);
}
} else
{var node = cljs.core.first(s__27521__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27520(cljs.core.rest(s__27521__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27533 = cljs.core.seq(domina.nodes(content));var chunk__27534 = null;var count__27535 = 0;var i__27536 = 0;while(true){
if((i__27536 < count__27535))
{var node = chunk__27534.cljs$core$IIndexed$_nth$arity$2(null,i__27536);goog.events.removeAll(node);
{
var G__27541 = seq__27533;
var G__27542 = chunk__27534;
var G__27543 = count__27535;
var G__27544 = (i__27536 + 1);
seq__27533 = G__27541;
chunk__27534 = G__27542;
count__27535 = G__27543;
i__27536 = G__27544;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27533);if(temp__4092__auto__)
{var seq__27533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27533__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27533__$1);{
var G__27545 = cljs.core.chunk_rest(seq__27533__$1);
var G__27546 = c__4148__auto__;
var G__27547 = cljs.core.count(c__4148__auto__);
var G__27548 = 0;
seq__27533 = G__27545;
chunk__27534 = G__27546;
count__27535 = G__27547;
i__27536 = G__27548;
continue;
}
} else
{var node = cljs.core.first(seq__27533__$1);goog.events.removeAll(node);
{
var G__27549 = cljs.core.next(seq__27533__$1);
var G__27550 = null;
var G__27551 = 0;
var G__27552 = 0;
seq__27533 = G__27549;
chunk__27534 = G__27550;
count__27535 = G__27551;
i__27536 = G__27552;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27537 = cljs.core.seq(domina.nodes(content));var chunk__27538 = null;var count__27539 = 0;var i__27540 = 0;while(true){
if((i__27540 < count__27539))
{var node = chunk__27538.cljs$core$IIndexed$_nth$arity$2(null,i__27540);goog.events.removeAll(node,type__$1);
{
var G__27553 = seq__27537;
var G__27554 = chunk__27538;
var G__27555 = count__27539;
var G__27556 = (i__27540 + 1);
seq__27537 = G__27553;
chunk__27538 = G__27554;
count__27539 = G__27555;
i__27540 = G__27556;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27537);if(temp__4092__auto__)
{var seq__27537__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27537__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27537__$1);{
var G__27557 = cljs.core.chunk_rest(seq__27537__$1);
var G__27558 = c__4148__auto__;
var G__27559 = cljs.core.count(c__4148__auto__);
var G__27560 = 0;
seq__27537 = G__27557;
chunk__27538 = G__27558;
count__27539 = G__27559;
i__27540 = G__27560;
continue;
}
} else
{var node = cljs.core.first(seq__27537__$1);goog.events.removeAll(node,type__$1);
{
var G__27561 = cljs.core.next(seq__27537__$1);
var G__27562 = null;
var G__27563 = 0;
var G__27564 = 0;
seq__27537 = G__27561;
chunk__27538 = G__27562;
count__27539 = G__27563;
i__27540 = G__27564;
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
var G__27565 = parent;
var G__27566 = cljs.core.cons(parent,so_far);
n = G__27565;
so_far = G__27566;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27575_27583 = cljs.core.seq(ancestors);var chunk__27576_27584 = null;var count__27577_27585 = 0;var i__27578_27586 = 0;while(true){
if((i__27578_27586 < count__27577_27585))
{var n_27587 = chunk__27576_27584.cljs$core$IIndexed$_nth$arity$2(null,i__27578_27586);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27587;
goog.events.fireListeners(n_27587,evt.type,true,evt);
}
{
var G__27588 = seq__27575_27583;
var G__27589 = chunk__27576_27584;
var G__27590 = count__27577_27585;
var G__27591 = (i__27578_27586 + 1);
seq__27575_27583 = G__27588;
chunk__27576_27584 = G__27589;
count__27577_27585 = G__27590;
i__27578_27586 = G__27591;
continue;
}
} else
{var temp__4092__auto___27592 = cljs.core.seq(seq__27575_27583);if(temp__4092__auto___27592)
{var seq__27575_27593__$1 = temp__4092__auto___27592;if(cljs.core.chunked_seq_QMARK_(seq__27575_27593__$1))
{var c__4148__auto___27594 = cljs.core.chunk_first(seq__27575_27593__$1);{
var G__27595 = cljs.core.chunk_rest(seq__27575_27593__$1);
var G__27596 = c__4148__auto___27594;
var G__27597 = cljs.core.count(c__4148__auto___27594);
var G__27598 = 0;
seq__27575_27583 = G__27595;
chunk__27576_27584 = G__27596;
count__27577_27585 = G__27597;
i__27578_27586 = G__27598;
continue;
}
} else
{var n_27599 = cljs.core.first(seq__27575_27593__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27599;
goog.events.fireListeners(n_27599,evt.type,true,evt);
}
{
var G__27600 = cljs.core.next(seq__27575_27593__$1);
var G__27601 = null;
var G__27602 = 0;
var G__27603 = 0;
seq__27575_27583 = G__27600;
chunk__27576_27584 = G__27601;
count__27577_27585 = G__27602;
i__27578_27586 = G__27603;
continue;
}
}
} else
{}
}
break;
}
var seq__27579_27604 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27580_27605 = null;var count__27581_27606 = 0;var i__27582_27607 = 0;while(true){
if((i__27582_27607 < count__27581_27606))
{var n_27608 = chunk__27580_27605.cljs$core$IIndexed$_nth$arity$2(null,i__27582_27607);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27608;
goog.events.fireListeners(n_27608,evt.type,false,evt);
}
{
var G__27609 = seq__27579_27604;
var G__27610 = chunk__27580_27605;
var G__27611 = count__27581_27606;
var G__27612 = (i__27582_27607 + 1);
seq__27579_27604 = G__27609;
chunk__27580_27605 = G__27610;
count__27581_27606 = G__27611;
i__27582_27607 = G__27612;
continue;
}
} else
{var temp__4092__auto___27613 = cljs.core.seq(seq__27579_27604);if(temp__4092__auto___27613)
{var seq__27579_27614__$1 = temp__4092__auto___27613;if(cljs.core.chunked_seq_QMARK_(seq__27579_27614__$1))
{var c__4148__auto___27615 = cljs.core.chunk_first(seq__27579_27614__$1);{
var G__27616 = cljs.core.chunk_rest(seq__27579_27614__$1);
var G__27617 = c__4148__auto___27615;
var G__27618 = cljs.core.count(c__4148__auto___27615);
var G__27619 = 0;
seq__27579_27604 = G__27616;
chunk__27580_27605 = G__27617;
count__27581_27606 = G__27618;
i__27582_27607 = G__27619;
continue;
}
} else
{var n_27620 = cljs.core.first(seq__27579_27614__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27620;
goog.events.fireListeners(n_27620,evt.type,false,evt);
}
{
var G__27621 = cljs.core.next(seq__27579_27614__$1);
var G__27622 = null;
var G__27623 = 0;
var G__27624 = 0;
seq__27579_27604 = G__27621;
chunk__27580_27605 = G__27622;
count__27581_27606 = G__27623;
i__27582_27607 = G__27624;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27631_27637 = cljs.core.seq(evt_map);var chunk__27632_27638 = null;var count__27633_27639 = 0;var i__27634_27640 = 0;while(true){
if((i__27634_27640 < count__27633_27639))
{var vec__27635_27641 = chunk__27632_27638.cljs$core$IIndexed$_nth$arity$2(null,i__27634_27640);var k_27642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27635_27641,0,null);var v_27643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27635_27641,1,null);(evt[k_27642] = v_27643);
{
var G__27644 = seq__27631_27637;
var G__27645 = chunk__27632_27638;
var G__27646 = count__27633_27639;
var G__27647 = (i__27634_27640 + 1);
seq__27631_27637 = G__27644;
chunk__27632_27638 = G__27645;
count__27633_27639 = G__27646;
i__27634_27640 = G__27647;
continue;
}
} else
{var temp__4092__auto___27648 = cljs.core.seq(seq__27631_27637);if(temp__4092__auto___27648)
{var seq__27631_27649__$1 = temp__4092__auto___27648;if(cljs.core.chunked_seq_QMARK_(seq__27631_27649__$1))
{var c__4148__auto___27650 = cljs.core.chunk_first(seq__27631_27649__$1);{
var G__27651 = cljs.core.chunk_rest(seq__27631_27649__$1);
var G__27652 = c__4148__auto___27650;
var G__27653 = cljs.core.count(c__4148__auto___27650);
var G__27654 = 0;
seq__27631_27637 = G__27651;
chunk__27632_27638 = G__27652;
count__27633_27639 = G__27653;
i__27634_27640 = G__27654;
continue;
}
} else
{var vec__27636_27655 = cljs.core.first(seq__27631_27649__$1);var k_27656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636_27655,0,null);var v_27657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636_27655,1,null);(evt[k_27656] = v_27657);
{
var G__27658 = cljs.core.next(seq__27631_27649__$1);
var G__27659 = null;
var G__27660 = 0;
var G__27661 = 0;
seq__27631_27637 = G__27658;
chunk__27632_27638 = G__27659;
count__27633_27639 = G__27660;
i__27634_27640 = G__27661;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27662_SHARP_){return goog.events.getListeners(p1__27662_SHARP_,type__$1,false);
}),domina.nodes(content));
});
