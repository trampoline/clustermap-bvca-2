// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20557 = {};return obj20557;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t20561 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20561 = (function (evt,f,create_listener_function,meta20562){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20562 = meta20562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20561.cljs$lang$type = true;
domina.events.t20561.cljs$lang$ctorStr = "domina.events/t20561";
domina.events.t20561.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t20561");
});
domina.events.t20561.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t20561.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t20561.prototype.domina$events$Event$ = true;
domina.events.t20561.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20561.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20561.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20561.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20561.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20561.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20563){var self__ = this;
var _20563__$1 = this;return self__.meta20562;
});
domina.events.t20561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20563,meta20562__$1){var self__ = this;
var _20563__$1 = this;return (new domina.events.t20561(self__.evt,self__.f,self__.create_listener_function,meta20562__$1));
});
domina.events.__GT_t20561 = (function __GT_t20561(evt__$1,f__$1,create_listener_function__$1,meta20562){return (new domina.events.t20561(evt__$1,f__$1,create_listener_function__$1,meta20562));
});
}
return (new domina.events.t20561(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t20561 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20561 = (function (evt,f,create_listener_function,meta20562){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20562 = meta20562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20561.cljs$lang$type = true;
domina.events.t20561.cljs$lang$ctorStr = "domina.events/t20561";
domina.events.t20561.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t20561");
});
domina.events.t20561.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t20561.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t20561.prototype.domina$events$Event$ = true;
domina.events.t20561.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20561.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20561.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20561.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20561.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20561.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20563){var self__ = this;
var _20563__$1 = this;return self__.meta20562;
});
domina.events.t20561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20563,meta20562__$1){var self__ = this;
var _20563__$1 = this;return (new domina.events.t20561(self__.evt,self__.f,self__.create_listener_function,meta20562__$1));
});
domina.events.__GT_t20561 = (function __GT_t20561(evt__$1,f__$1,create_listener_function__$1,meta20562){return (new domina.events.t20561(evt__$1,f__$1,create_listener_function__$1,meta20562));
});
}
return (new domina.events.t20561(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__20568(s__20569){return (new cljs.core.LazySeq(null,(function (){var s__20569__$1 = s__20569;while(true){
var temp__4092__auto__ = cljs.core.seq(s__20569__$1);if(temp__4092__auto__)
{var s__20569__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__20569__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__20569__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__20571 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__20570 = 0;while(true){
if((i__20570 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__20570);cljs.core.chunk_append(b__20571,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20572 = (i__20570 + 1);
i__20570 = G__20572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__20571),iter__20568(cljs.core.chunk_rest(s__20569__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__20571),null);
}
} else
{var node = cljs.core.first(s__20569__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20568(cljs.core.rest(s__20569__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__20581 = cljs.core.seq(domina.nodes(content));var chunk__20582 = null;var count__20583 = 0;var i__20584 = 0;while(true){
if((i__20584 < count__20583))
{var node = chunk__20582.cljs$core$IIndexed$_nth$arity$2(null,i__20584);goog.events.removeAll(node);
{
var G__20589 = seq__20581;
var G__20590 = chunk__20582;
var G__20591 = count__20583;
var G__20592 = (i__20584 + 1);
seq__20581 = G__20589;
chunk__20582 = G__20590;
count__20583 = G__20591;
i__20584 = G__20592;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__20581);if(temp__4092__auto__)
{var seq__20581__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__20581__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__20581__$1);{
var G__20593 = cljs.core.chunk_rest(seq__20581__$1);
var G__20594 = c__4148__auto__;
var G__20595 = cljs.core.count(c__4148__auto__);
var G__20596 = 0;
seq__20581 = G__20593;
chunk__20582 = G__20594;
count__20583 = G__20595;
i__20584 = G__20596;
continue;
}
} else
{var node = cljs.core.first(seq__20581__$1);goog.events.removeAll(node);
{
var G__20597 = cljs.core.next(seq__20581__$1);
var G__20598 = null;
var G__20599 = 0;
var G__20600 = 0;
seq__20581 = G__20597;
chunk__20582 = G__20598;
count__20583 = G__20599;
i__20584 = G__20600;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__20585 = cljs.core.seq(domina.nodes(content));var chunk__20586 = null;var count__20587 = 0;var i__20588 = 0;while(true){
if((i__20588 < count__20587))
{var node = chunk__20586.cljs$core$IIndexed$_nth$arity$2(null,i__20588);goog.events.removeAll(node,type__$1);
{
var G__20601 = seq__20585;
var G__20602 = chunk__20586;
var G__20603 = count__20587;
var G__20604 = (i__20588 + 1);
seq__20585 = G__20601;
chunk__20586 = G__20602;
count__20587 = G__20603;
i__20588 = G__20604;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__20585);if(temp__4092__auto__)
{var seq__20585__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__20585__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__20585__$1);{
var G__20605 = cljs.core.chunk_rest(seq__20585__$1);
var G__20606 = c__4148__auto__;
var G__20607 = cljs.core.count(c__4148__auto__);
var G__20608 = 0;
seq__20585 = G__20605;
chunk__20586 = G__20606;
count__20587 = G__20607;
i__20588 = G__20608;
continue;
}
} else
{var node = cljs.core.first(seq__20585__$1);goog.events.removeAll(node,type__$1);
{
var G__20609 = cljs.core.next(seq__20585__$1);
var G__20610 = null;
var G__20611 = 0;
var G__20612 = 0;
seq__20585 = G__20609;
chunk__20586 = G__20610;
count__20587 = G__20611;
i__20588 = G__20612;
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
var G__20613 = parent;
var G__20614 = cljs.core.cons(parent,so_far);
n = G__20613;
so_far = G__20614;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__20623_20631 = cljs.core.seq(ancestors);var chunk__20624_20632 = null;var count__20625_20633 = 0;var i__20626_20634 = 0;while(true){
if((i__20626_20634 < count__20625_20633))
{var n_20635 = chunk__20624_20632.cljs$core$IIndexed$_nth$arity$2(null,i__20626_20634);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20635;
goog.events.fireListeners(n_20635,evt.type,true,evt);
}
{
var G__20636 = seq__20623_20631;
var G__20637 = chunk__20624_20632;
var G__20638 = count__20625_20633;
var G__20639 = (i__20626_20634 + 1);
seq__20623_20631 = G__20636;
chunk__20624_20632 = G__20637;
count__20625_20633 = G__20638;
i__20626_20634 = G__20639;
continue;
}
} else
{var temp__4092__auto___20640 = cljs.core.seq(seq__20623_20631);if(temp__4092__auto___20640)
{var seq__20623_20641__$1 = temp__4092__auto___20640;if(cljs.core.chunked_seq_QMARK_(seq__20623_20641__$1))
{var c__4148__auto___20642 = cljs.core.chunk_first(seq__20623_20641__$1);{
var G__20643 = cljs.core.chunk_rest(seq__20623_20641__$1);
var G__20644 = c__4148__auto___20642;
var G__20645 = cljs.core.count(c__4148__auto___20642);
var G__20646 = 0;
seq__20623_20631 = G__20643;
chunk__20624_20632 = G__20644;
count__20625_20633 = G__20645;
i__20626_20634 = G__20646;
continue;
}
} else
{var n_20647 = cljs.core.first(seq__20623_20641__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20647;
goog.events.fireListeners(n_20647,evt.type,true,evt);
}
{
var G__20648 = cljs.core.next(seq__20623_20641__$1);
var G__20649 = null;
var G__20650 = 0;
var G__20651 = 0;
seq__20623_20631 = G__20648;
chunk__20624_20632 = G__20649;
count__20625_20633 = G__20650;
i__20626_20634 = G__20651;
continue;
}
}
} else
{}
}
break;
}
var seq__20627_20652 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__20628_20653 = null;var count__20629_20654 = 0;var i__20630_20655 = 0;while(true){
if((i__20630_20655 < count__20629_20654))
{var n_20656 = chunk__20628_20653.cljs$core$IIndexed$_nth$arity$2(null,i__20630_20655);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20656;
goog.events.fireListeners(n_20656,evt.type,false,evt);
}
{
var G__20657 = seq__20627_20652;
var G__20658 = chunk__20628_20653;
var G__20659 = count__20629_20654;
var G__20660 = (i__20630_20655 + 1);
seq__20627_20652 = G__20657;
chunk__20628_20653 = G__20658;
count__20629_20654 = G__20659;
i__20630_20655 = G__20660;
continue;
}
} else
{var temp__4092__auto___20661 = cljs.core.seq(seq__20627_20652);if(temp__4092__auto___20661)
{var seq__20627_20662__$1 = temp__4092__auto___20661;if(cljs.core.chunked_seq_QMARK_(seq__20627_20662__$1))
{var c__4148__auto___20663 = cljs.core.chunk_first(seq__20627_20662__$1);{
var G__20664 = cljs.core.chunk_rest(seq__20627_20662__$1);
var G__20665 = c__4148__auto___20663;
var G__20666 = cljs.core.count(c__4148__auto___20663);
var G__20667 = 0;
seq__20627_20652 = G__20664;
chunk__20628_20653 = G__20665;
count__20629_20654 = G__20666;
i__20630_20655 = G__20667;
continue;
}
} else
{var n_20668 = cljs.core.first(seq__20627_20662__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20668;
goog.events.fireListeners(n_20668,evt.type,false,evt);
}
{
var G__20669 = cljs.core.next(seq__20627_20662__$1);
var G__20670 = null;
var G__20671 = 0;
var G__20672 = 0;
seq__20627_20652 = G__20669;
chunk__20628_20653 = G__20670;
count__20629_20654 = G__20671;
i__20630_20655 = G__20672;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__20679_20685 = cljs.core.seq(evt_map);var chunk__20680_20686 = null;var count__20681_20687 = 0;var i__20682_20688 = 0;while(true){
if((i__20682_20688 < count__20681_20687))
{var vec__20683_20689 = chunk__20680_20686.cljs$core$IIndexed$_nth$arity$2(null,i__20682_20688);var k_20690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683_20689,0,null);var v_20691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20683_20689,1,null);(evt[k_20690] = v_20691);
{
var G__20692 = seq__20679_20685;
var G__20693 = chunk__20680_20686;
var G__20694 = count__20681_20687;
var G__20695 = (i__20682_20688 + 1);
seq__20679_20685 = G__20692;
chunk__20680_20686 = G__20693;
count__20681_20687 = G__20694;
i__20682_20688 = G__20695;
continue;
}
} else
{var temp__4092__auto___20696 = cljs.core.seq(seq__20679_20685);if(temp__4092__auto___20696)
{var seq__20679_20697__$1 = temp__4092__auto___20696;if(cljs.core.chunked_seq_QMARK_(seq__20679_20697__$1))
{var c__4148__auto___20698 = cljs.core.chunk_first(seq__20679_20697__$1);{
var G__20699 = cljs.core.chunk_rest(seq__20679_20697__$1);
var G__20700 = c__4148__auto___20698;
var G__20701 = cljs.core.count(c__4148__auto___20698);
var G__20702 = 0;
seq__20679_20685 = G__20699;
chunk__20680_20686 = G__20700;
count__20681_20687 = G__20701;
i__20682_20688 = G__20702;
continue;
}
} else
{var vec__20684_20703 = cljs.core.first(seq__20679_20697__$1);var k_20704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20684_20703,0,null);var v_20705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20684_20703,1,null);(evt[k_20704] = v_20705);
{
var G__20706 = cljs.core.next(seq__20679_20697__$1);
var G__20707 = null;
var G__20708 = 0;
var G__20709 = 0;
seq__20679_20685 = G__20706;
chunk__20680_20686 = G__20707;
count__20681_20687 = G__20708;
i__20682_20688 = G__20709;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__20710_SHARP_){return goog.events.getListeners(p1__20710_SHARP_,type__$1,false);
}),domina.nodes(content));
});
