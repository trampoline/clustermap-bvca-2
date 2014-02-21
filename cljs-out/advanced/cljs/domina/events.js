// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27557 = {};return obj27557;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27561 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27561 = (function (evt,f,create_listener_function,meta27562){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27562 = meta27562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27561.cljs$lang$type = true;
domina.events.t27561.cljs$lang$ctorStr = "domina.events/t27561";
domina.events.t27561.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27561");
});
domina.events.t27561.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27561.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27561.prototype.domina$events$Event$ = true;
domina.events.t27561.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27561.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27561.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27561.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27561.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27561.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27563){var self__ = this;
var _27563__$1 = this;return self__.meta27562;
});
domina.events.t27561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27563,meta27562__$1){var self__ = this;
var _27563__$1 = this;return (new domina.events.t27561(self__.evt,self__.f,self__.create_listener_function,meta27562__$1));
});
domina.events.__GT_t27561 = (function __GT_t27561(evt__$1,f__$1,create_listener_function__$1,meta27562){return (new domina.events.t27561(evt__$1,f__$1,create_listener_function__$1,meta27562));
});
}
return (new domina.events.t27561(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27561 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27561 = (function (evt,f,create_listener_function,meta27562){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27562 = meta27562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27561.cljs$lang$type = true;
domina.events.t27561.cljs$lang$ctorStr = "domina.events/t27561";
domina.events.t27561.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27561");
});
domina.events.t27561.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27561.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27561.prototype.domina$events$Event$ = true;
domina.events.t27561.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27561.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27561.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27561.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27561.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27561.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27563){var self__ = this;
var _27563__$1 = this;return self__.meta27562;
});
domina.events.t27561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27563,meta27562__$1){var self__ = this;
var _27563__$1 = this;return (new domina.events.t27561(self__.evt,self__.f,self__.create_listener_function,meta27562__$1));
});
domina.events.__GT_t27561 = (function __GT_t27561(evt__$1,f__$1,create_listener_function__$1,meta27562){return (new domina.events.t27561(evt__$1,f__$1,create_listener_function__$1,meta27562));
});
}
return (new domina.events.t27561(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27568(s__27569){return (new cljs.core.LazySeq(null,(function (){var s__27569__$1 = s__27569;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27569__$1);if(temp__4092__auto__)
{var s__27569__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27569__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27569__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27571 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27570 = 0;while(true){
if((i__27570 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27570);cljs.core.chunk_append(b__27571,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27572 = (i__27570 + 1);
i__27570 = G__27572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27571),iter__27568(cljs.core.chunk_rest(s__27569__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27571),null);
}
} else
{var node = cljs.core.first(s__27569__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27568(cljs.core.rest(s__27569__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27581 = cljs.core.seq(domina.nodes(content));var chunk__27582 = null;var count__27583 = 0;var i__27584 = 0;while(true){
if((i__27584 < count__27583))
{var node = chunk__27582.cljs$core$IIndexed$_nth$arity$2(null,i__27584);goog.events.removeAll(node);
{
var G__27589 = seq__27581;
var G__27590 = chunk__27582;
var G__27591 = count__27583;
var G__27592 = (i__27584 + 1);
seq__27581 = G__27589;
chunk__27582 = G__27590;
count__27583 = G__27591;
i__27584 = G__27592;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27581);if(temp__4092__auto__)
{var seq__27581__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27581__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27581__$1);{
var G__27593 = cljs.core.chunk_rest(seq__27581__$1);
var G__27594 = c__4148__auto__;
var G__27595 = cljs.core.count(c__4148__auto__);
var G__27596 = 0;
seq__27581 = G__27593;
chunk__27582 = G__27594;
count__27583 = G__27595;
i__27584 = G__27596;
continue;
}
} else
{var node = cljs.core.first(seq__27581__$1);goog.events.removeAll(node);
{
var G__27597 = cljs.core.next(seq__27581__$1);
var G__27598 = null;
var G__27599 = 0;
var G__27600 = 0;
seq__27581 = G__27597;
chunk__27582 = G__27598;
count__27583 = G__27599;
i__27584 = G__27600;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27585 = cljs.core.seq(domina.nodes(content));var chunk__27586 = null;var count__27587 = 0;var i__27588 = 0;while(true){
if((i__27588 < count__27587))
{var node = chunk__27586.cljs$core$IIndexed$_nth$arity$2(null,i__27588);goog.events.removeAll(node,type__$1);
{
var G__27601 = seq__27585;
var G__27602 = chunk__27586;
var G__27603 = count__27587;
var G__27604 = (i__27588 + 1);
seq__27585 = G__27601;
chunk__27586 = G__27602;
count__27587 = G__27603;
i__27588 = G__27604;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27585);if(temp__4092__auto__)
{var seq__27585__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27585__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27585__$1);{
var G__27605 = cljs.core.chunk_rest(seq__27585__$1);
var G__27606 = c__4148__auto__;
var G__27607 = cljs.core.count(c__4148__auto__);
var G__27608 = 0;
seq__27585 = G__27605;
chunk__27586 = G__27606;
count__27587 = G__27607;
i__27588 = G__27608;
continue;
}
} else
{var node = cljs.core.first(seq__27585__$1);goog.events.removeAll(node,type__$1);
{
var G__27609 = cljs.core.next(seq__27585__$1);
var G__27610 = null;
var G__27611 = 0;
var G__27612 = 0;
seq__27585 = G__27609;
chunk__27586 = G__27610;
count__27587 = G__27611;
i__27588 = G__27612;
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
var G__27613 = parent;
var G__27614 = cljs.core.cons(parent,so_far);
n = G__27613;
so_far = G__27614;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27623_27631 = cljs.core.seq(ancestors);var chunk__27624_27632 = null;var count__27625_27633 = 0;var i__27626_27634 = 0;while(true){
if((i__27626_27634 < count__27625_27633))
{var n_27635 = chunk__27624_27632.cljs$core$IIndexed$_nth$arity$2(null,i__27626_27634);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27635;
goog.events.fireListeners(n_27635,evt.type,true,evt);
}
{
var G__27636 = seq__27623_27631;
var G__27637 = chunk__27624_27632;
var G__27638 = count__27625_27633;
var G__27639 = (i__27626_27634 + 1);
seq__27623_27631 = G__27636;
chunk__27624_27632 = G__27637;
count__27625_27633 = G__27638;
i__27626_27634 = G__27639;
continue;
}
} else
{var temp__4092__auto___27640 = cljs.core.seq(seq__27623_27631);if(temp__4092__auto___27640)
{var seq__27623_27641__$1 = temp__4092__auto___27640;if(cljs.core.chunked_seq_QMARK_(seq__27623_27641__$1))
{var c__4148__auto___27642 = cljs.core.chunk_first(seq__27623_27641__$1);{
var G__27643 = cljs.core.chunk_rest(seq__27623_27641__$1);
var G__27644 = c__4148__auto___27642;
var G__27645 = cljs.core.count(c__4148__auto___27642);
var G__27646 = 0;
seq__27623_27631 = G__27643;
chunk__27624_27632 = G__27644;
count__27625_27633 = G__27645;
i__27626_27634 = G__27646;
continue;
}
} else
{var n_27647 = cljs.core.first(seq__27623_27641__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27647;
goog.events.fireListeners(n_27647,evt.type,true,evt);
}
{
var G__27648 = cljs.core.next(seq__27623_27641__$1);
var G__27649 = null;
var G__27650 = 0;
var G__27651 = 0;
seq__27623_27631 = G__27648;
chunk__27624_27632 = G__27649;
count__27625_27633 = G__27650;
i__27626_27634 = G__27651;
continue;
}
}
} else
{}
}
break;
}
var seq__27627_27652 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27628_27653 = null;var count__27629_27654 = 0;var i__27630_27655 = 0;while(true){
if((i__27630_27655 < count__27629_27654))
{var n_27656 = chunk__27628_27653.cljs$core$IIndexed$_nth$arity$2(null,i__27630_27655);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27656;
goog.events.fireListeners(n_27656,evt.type,false,evt);
}
{
var G__27657 = seq__27627_27652;
var G__27658 = chunk__27628_27653;
var G__27659 = count__27629_27654;
var G__27660 = (i__27630_27655 + 1);
seq__27627_27652 = G__27657;
chunk__27628_27653 = G__27658;
count__27629_27654 = G__27659;
i__27630_27655 = G__27660;
continue;
}
} else
{var temp__4092__auto___27661 = cljs.core.seq(seq__27627_27652);if(temp__4092__auto___27661)
{var seq__27627_27662__$1 = temp__4092__auto___27661;if(cljs.core.chunked_seq_QMARK_(seq__27627_27662__$1))
{var c__4148__auto___27663 = cljs.core.chunk_first(seq__27627_27662__$1);{
var G__27664 = cljs.core.chunk_rest(seq__27627_27662__$1);
var G__27665 = c__4148__auto___27663;
var G__27666 = cljs.core.count(c__4148__auto___27663);
var G__27667 = 0;
seq__27627_27652 = G__27664;
chunk__27628_27653 = G__27665;
count__27629_27654 = G__27666;
i__27630_27655 = G__27667;
continue;
}
} else
{var n_27668 = cljs.core.first(seq__27627_27662__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27668;
goog.events.fireListeners(n_27668,evt.type,false,evt);
}
{
var G__27669 = cljs.core.next(seq__27627_27662__$1);
var G__27670 = null;
var G__27671 = 0;
var G__27672 = 0;
seq__27627_27652 = G__27669;
chunk__27628_27653 = G__27670;
count__27629_27654 = G__27671;
i__27630_27655 = G__27672;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27679_27685 = cljs.core.seq(evt_map);var chunk__27680_27686 = null;var count__27681_27687 = 0;var i__27682_27688 = 0;while(true){
if((i__27682_27688 < count__27681_27687))
{var vec__27683_27689 = chunk__27680_27686.cljs$core$IIndexed$_nth$arity$2(null,i__27682_27688);var k_27690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683_27689,0,null);var v_27691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683_27689,1,null);(evt[k_27690] = v_27691);
{
var G__27692 = seq__27679_27685;
var G__27693 = chunk__27680_27686;
var G__27694 = count__27681_27687;
var G__27695 = (i__27682_27688 + 1);
seq__27679_27685 = G__27692;
chunk__27680_27686 = G__27693;
count__27681_27687 = G__27694;
i__27682_27688 = G__27695;
continue;
}
} else
{var temp__4092__auto___27696 = cljs.core.seq(seq__27679_27685);if(temp__4092__auto___27696)
{var seq__27679_27697__$1 = temp__4092__auto___27696;if(cljs.core.chunked_seq_QMARK_(seq__27679_27697__$1))
{var c__4148__auto___27698 = cljs.core.chunk_first(seq__27679_27697__$1);{
var G__27699 = cljs.core.chunk_rest(seq__27679_27697__$1);
var G__27700 = c__4148__auto___27698;
var G__27701 = cljs.core.count(c__4148__auto___27698);
var G__27702 = 0;
seq__27679_27685 = G__27699;
chunk__27680_27686 = G__27700;
count__27681_27687 = G__27701;
i__27682_27688 = G__27702;
continue;
}
} else
{var vec__27684_27703 = cljs.core.first(seq__27679_27697__$1);var k_27704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_27703,0,null);var v_27705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27684_27703,1,null);(evt[k_27704] = v_27705);
{
var G__27706 = cljs.core.next(seq__27679_27697__$1);
var G__27707 = null;
var G__27708 = 0;
var G__27709 = 0;
seq__27679_27685 = G__27706;
chunk__27680_27686 = G__27707;
count__27681_27687 = G__27708;
i__27682_27688 = G__27709;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27710_SHARP_){return goog.events.getListeners(p1__27710_SHARP_,type__$1,false);
}),domina.nodes(content));
});
