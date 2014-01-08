// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23568 = {};return obj23568;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t23572 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23572 = (function (evt,f,create_listener_function,meta23573){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23573 = meta23573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23572.cljs$lang$type = true;
domina.events.t23572.cljs$lang$ctorStr = "domina.events/t23572";
domina.events.t23572.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23572");
});
domina.events.t23572.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23572.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23572.prototype.domina$events$Event$ = true;
domina.events.t23572.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23572.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23572.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23572.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23572.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23572.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23574){var self__ = this;
var _23574__$1 = this;return self__.meta23573;
});
domina.events.t23572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23574,meta23573__$1){var self__ = this;
var _23574__$1 = this;return (new domina.events.t23572(self__.evt,self__.f,self__.create_listener_function,meta23573__$1));
});
domina.events.__GT_t23572 = (function __GT_t23572(evt__$1,f__$1,create_listener_function__$1,meta23573){return (new domina.events.t23572(evt__$1,f__$1,create_listener_function__$1,meta23573));
});
}
return (new domina.events.t23572(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t23572 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23572 = (function (evt,f,create_listener_function,meta23573){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23573 = meta23573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23572.cljs$lang$type = true;
domina.events.t23572.cljs$lang$ctorStr = "domina.events/t23572";
domina.events.t23572.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23572");
});
domina.events.t23572.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23572.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23572.prototype.domina$events$Event$ = true;
domina.events.t23572.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23572.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23572.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23572.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23572.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23572.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23574){var self__ = this;
var _23574__$1 = this;return self__.meta23573;
});
domina.events.t23572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23574,meta23573__$1){var self__ = this;
var _23574__$1 = this;return (new domina.events.t23572(self__.evt,self__.f,self__.create_listener_function,meta23573__$1));
});
domina.events.__GT_t23572 = (function __GT_t23572(evt__$1,f__$1,create_listener_function__$1,meta23573){return (new domina.events.t23572(evt__$1,f__$1,create_listener_function__$1,meta23573));
});
}
return (new domina.events.t23572(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__23579(s__23580){return (new cljs.core.LazySeq(null,(function (){var s__23580__$1 = s__23580;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23580__$1);if(temp__4092__auto__)
{var s__23580__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23580__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23580__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23582 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23581 = 0;while(true){
if((i__23581 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23581);cljs.core.chunk_append(b__23582,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23583 = (i__23581 + 1);
i__23581 = G__23583;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23582),iter__23579(cljs.core.chunk_rest(s__23580__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23582),null);
}
} else
{var node = cljs.core.first(s__23580__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23579(cljs.core.rest(s__23580__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23592 = cljs.core.seq(domina.nodes(content));var chunk__23593 = null;var count__23594 = 0;var i__23595 = 0;while(true){
if((i__23595 < count__23594))
{var node = chunk__23593.cljs$core$IIndexed$_nth$arity$2(null,i__23595);goog.events.removeAll(node);
{
var G__23600 = seq__23592;
var G__23601 = chunk__23593;
var G__23602 = count__23594;
var G__23603 = (i__23595 + 1);
seq__23592 = G__23600;
chunk__23593 = G__23601;
count__23594 = G__23602;
i__23595 = G__23603;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23592);if(temp__4092__auto__)
{var seq__23592__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23592__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23592__$1);{
var G__23604 = cljs.core.chunk_rest(seq__23592__$1);
var G__23605 = c__4148__auto__;
var G__23606 = cljs.core.count(c__4148__auto__);
var G__23607 = 0;
seq__23592 = G__23604;
chunk__23593 = G__23605;
count__23594 = G__23606;
i__23595 = G__23607;
continue;
}
} else
{var node = cljs.core.first(seq__23592__$1);goog.events.removeAll(node);
{
var G__23608 = cljs.core.next(seq__23592__$1);
var G__23609 = null;
var G__23610 = 0;
var G__23611 = 0;
seq__23592 = G__23608;
chunk__23593 = G__23609;
count__23594 = G__23610;
i__23595 = G__23611;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__23596 = cljs.core.seq(domina.nodes(content));var chunk__23597 = null;var count__23598 = 0;var i__23599 = 0;while(true){
if((i__23599 < count__23598))
{var node = chunk__23597.cljs$core$IIndexed$_nth$arity$2(null,i__23599);goog.events.removeAll(node,type__$1);
{
var G__23612 = seq__23596;
var G__23613 = chunk__23597;
var G__23614 = count__23598;
var G__23615 = (i__23599 + 1);
seq__23596 = G__23612;
chunk__23597 = G__23613;
count__23598 = G__23614;
i__23599 = G__23615;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23596);if(temp__4092__auto__)
{var seq__23596__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23596__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23596__$1);{
var G__23616 = cljs.core.chunk_rest(seq__23596__$1);
var G__23617 = c__4148__auto__;
var G__23618 = cljs.core.count(c__4148__auto__);
var G__23619 = 0;
seq__23596 = G__23616;
chunk__23597 = G__23617;
count__23598 = G__23618;
i__23599 = G__23619;
continue;
}
} else
{var node = cljs.core.first(seq__23596__$1);goog.events.removeAll(node,type__$1);
{
var G__23620 = cljs.core.next(seq__23596__$1);
var G__23621 = null;
var G__23622 = 0;
var G__23623 = 0;
seq__23596 = G__23620;
chunk__23597 = G__23621;
count__23598 = G__23622;
i__23599 = G__23623;
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
var G__23624 = parent;
var G__23625 = cljs.core.cons(parent,so_far);
n = G__23624;
so_far = G__23625;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__23634_23642 = cljs.core.seq(ancestors);var chunk__23635_23643 = null;var count__23636_23644 = 0;var i__23637_23645 = 0;while(true){
if((i__23637_23645 < count__23636_23644))
{var n_23646 = chunk__23635_23643.cljs$core$IIndexed$_nth$arity$2(null,i__23637_23645);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23646;
goog.events.fireListeners(n_23646,evt.type,true,evt);
}
{
var G__23647 = seq__23634_23642;
var G__23648 = chunk__23635_23643;
var G__23649 = count__23636_23644;
var G__23650 = (i__23637_23645 + 1);
seq__23634_23642 = G__23647;
chunk__23635_23643 = G__23648;
count__23636_23644 = G__23649;
i__23637_23645 = G__23650;
continue;
}
} else
{var temp__4092__auto___23651 = cljs.core.seq(seq__23634_23642);if(temp__4092__auto___23651)
{var seq__23634_23652__$1 = temp__4092__auto___23651;if(cljs.core.chunked_seq_QMARK_(seq__23634_23652__$1))
{var c__4148__auto___23653 = cljs.core.chunk_first(seq__23634_23652__$1);{
var G__23654 = cljs.core.chunk_rest(seq__23634_23652__$1);
var G__23655 = c__4148__auto___23653;
var G__23656 = cljs.core.count(c__4148__auto___23653);
var G__23657 = 0;
seq__23634_23642 = G__23654;
chunk__23635_23643 = G__23655;
count__23636_23644 = G__23656;
i__23637_23645 = G__23657;
continue;
}
} else
{var n_23658 = cljs.core.first(seq__23634_23652__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23658;
goog.events.fireListeners(n_23658,evt.type,true,evt);
}
{
var G__23659 = cljs.core.next(seq__23634_23652__$1);
var G__23660 = null;
var G__23661 = 0;
var G__23662 = 0;
seq__23634_23642 = G__23659;
chunk__23635_23643 = G__23660;
count__23636_23644 = G__23661;
i__23637_23645 = G__23662;
continue;
}
}
} else
{}
}
break;
}
var seq__23638_23663 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__23639_23664 = null;var count__23640_23665 = 0;var i__23641_23666 = 0;while(true){
if((i__23641_23666 < count__23640_23665))
{var n_23667 = chunk__23639_23664.cljs$core$IIndexed$_nth$arity$2(null,i__23641_23666);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23667;
goog.events.fireListeners(n_23667,evt.type,false,evt);
}
{
var G__23668 = seq__23638_23663;
var G__23669 = chunk__23639_23664;
var G__23670 = count__23640_23665;
var G__23671 = (i__23641_23666 + 1);
seq__23638_23663 = G__23668;
chunk__23639_23664 = G__23669;
count__23640_23665 = G__23670;
i__23641_23666 = G__23671;
continue;
}
} else
{var temp__4092__auto___23672 = cljs.core.seq(seq__23638_23663);if(temp__4092__auto___23672)
{var seq__23638_23673__$1 = temp__4092__auto___23672;if(cljs.core.chunked_seq_QMARK_(seq__23638_23673__$1))
{var c__4148__auto___23674 = cljs.core.chunk_first(seq__23638_23673__$1);{
var G__23675 = cljs.core.chunk_rest(seq__23638_23673__$1);
var G__23676 = c__4148__auto___23674;
var G__23677 = cljs.core.count(c__4148__auto___23674);
var G__23678 = 0;
seq__23638_23663 = G__23675;
chunk__23639_23664 = G__23676;
count__23640_23665 = G__23677;
i__23641_23666 = G__23678;
continue;
}
} else
{var n_23679 = cljs.core.first(seq__23638_23673__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23679;
goog.events.fireListeners(n_23679,evt.type,false,evt);
}
{
var G__23680 = cljs.core.next(seq__23638_23673__$1);
var G__23681 = null;
var G__23682 = 0;
var G__23683 = 0;
seq__23638_23663 = G__23680;
chunk__23639_23664 = G__23681;
count__23640_23665 = G__23682;
i__23641_23666 = G__23683;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__23690_23696 = cljs.core.seq(evt_map);var chunk__23691_23697 = null;var count__23692_23698 = 0;var i__23693_23699 = 0;while(true){
if((i__23693_23699 < count__23692_23698))
{var vec__23694_23700 = chunk__23691_23697.cljs$core$IIndexed$_nth$arity$2(null,i__23693_23699);var k_23701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23694_23700,0,null);var v_23702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23694_23700,1,null);(evt[k_23701] = v_23702);
{
var G__23703 = seq__23690_23696;
var G__23704 = chunk__23691_23697;
var G__23705 = count__23692_23698;
var G__23706 = (i__23693_23699 + 1);
seq__23690_23696 = G__23703;
chunk__23691_23697 = G__23704;
count__23692_23698 = G__23705;
i__23693_23699 = G__23706;
continue;
}
} else
{var temp__4092__auto___23707 = cljs.core.seq(seq__23690_23696);if(temp__4092__auto___23707)
{var seq__23690_23708__$1 = temp__4092__auto___23707;if(cljs.core.chunked_seq_QMARK_(seq__23690_23708__$1))
{var c__4148__auto___23709 = cljs.core.chunk_first(seq__23690_23708__$1);{
var G__23710 = cljs.core.chunk_rest(seq__23690_23708__$1);
var G__23711 = c__4148__auto___23709;
var G__23712 = cljs.core.count(c__4148__auto___23709);
var G__23713 = 0;
seq__23690_23696 = G__23710;
chunk__23691_23697 = G__23711;
count__23692_23698 = G__23712;
i__23693_23699 = G__23713;
continue;
}
} else
{var vec__23695_23714 = cljs.core.first(seq__23690_23708__$1);var k_23715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23695_23714,0,null);var v_23716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23695_23714,1,null);(evt[k_23715] = v_23716);
{
var G__23717 = cljs.core.next(seq__23690_23708__$1);
var G__23718 = null;
var G__23719 = 0;
var G__23720 = 0;
seq__23690_23696 = G__23717;
chunk__23691_23697 = G__23718;
count__23692_23698 = G__23719;
i__23693_23699 = G__23720;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__23721_SHARP_){return goog.events.getListeners(p1__23721_SHARP_,type__$1,false);
}),domina.nodes(content));
});
