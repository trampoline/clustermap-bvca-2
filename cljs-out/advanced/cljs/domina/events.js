// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27467 = {};return obj27467;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27471 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27471 = (function (evt,f,create_listener_function,meta27472){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27472 = meta27472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27471.cljs$lang$type = true;
domina.events.t27471.cljs$lang$ctorStr = "domina.events/t27471";
domina.events.t27471.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27471");
});
domina.events.t27471.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27471.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27471.prototype.domina$events$Event$ = true;
domina.events.t27471.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27471.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27471.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27471.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27471.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27471.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27473){var self__ = this;
var _27473__$1 = this;return self__.meta27472;
});
domina.events.t27471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27473,meta27472__$1){var self__ = this;
var _27473__$1 = this;return (new domina.events.t27471(self__.evt,self__.f,self__.create_listener_function,meta27472__$1));
});
domina.events.__GT_t27471 = (function __GT_t27471(evt__$1,f__$1,create_listener_function__$1,meta27472){return (new domina.events.t27471(evt__$1,f__$1,create_listener_function__$1,meta27472));
});
}
return (new domina.events.t27471(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27471 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27471 = (function (evt,f,create_listener_function,meta27472){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27472 = meta27472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27471.cljs$lang$type = true;
domina.events.t27471.cljs$lang$ctorStr = "domina.events/t27471";
domina.events.t27471.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27471");
});
domina.events.t27471.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27471.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27471.prototype.domina$events$Event$ = true;
domina.events.t27471.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27471.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27471.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27471.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27471.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27471.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27473){var self__ = this;
var _27473__$1 = this;return self__.meta27472;
});
domina.events.t27471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27473,meta27472__$1){var self__ = this;
var _27473__$1 = this;return (new domina.events.t27471(self__.evt,self__.f,self__.create_listener_function,meta27472__$1));
});
domina.events.__GT_t27471 = (function __GT_t27471(evt__$1,f__$1,create_listener_function__$1,meta27472){return (new domina.events.t27471(evt__$1,f__$1,create_listener_function__$1,meta27472));
});
}
return (new domina.events.t27471(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27478(s__27479){return (new cljs.core.LazySeq(null,(function (){var s__27479__$1 = s__27479;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27479__$1);if(temp__4092__auto__)
{var s__27479__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27479__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27479__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27481 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27480 = 0;while(true){
if((i__27480 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27480);cljs.core.chunk_append(b__27481,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27482 = (i__27480 + 1);
i__27480 = G__27482;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27481),iter__27478(cljs.core.chunk_rest(s__27479__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27481),null);
}
} else
{var node = cljs.core.first(s__27479__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27478(cljs.core.rest(s__27479__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27491 = cljs.core.seq(domina.nodes(content));var chunk__27492 = null;var count__27493 = 0;var i__27494 = 0;while(true){
if((i__27494 < count__27493))
{var node = chunk__27492.cljs$core$IIndexed$_nth$arity$2(null,i__27494);goog.events.removeAll(node);
{
var G__27499 = seq__27491;
var G__27500 = chunk__27492;
var G__27501 = count__27493;
var G__27502 = (i__27494 + 1);
seq__27491 = G__27499;
chunk__27492 = G__27500;
count__27493 = G__27501;
i__27494 = G__27502;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27491);if(temp__4092__auto__)
{var seq__27491__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27491__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27491__$1);{
var G__27503 = cljs.core.chunk_rest(seq__27491__$1);
var G__27504 = c__4148__auto__;
var G__27505 = cljs.core.count(c__4148__auto__);
var G__27506 = 0;
seq__27491 = G__27503;
chunk__27492 = G__27504;
count__27493 = G__27505;
i__27494 = G__27506;
continue;
}
} else
{var node = cljs.core.first(seq__27491__$1);goog.events.removeAll(node);
{
var G__27507 = cljs.core.next(seq__27491__$1);
var G__27508 = null;
var G__27509 = 0;
var G__27510 = 0;
seq__27491 = G__27507;
chunk__27492 = G__27508;
count__27493 = G__27509;
i__27494 = G__27510;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27495 = cljs.core.seq(domina.nodes(content));var chunk__27496 = null;var count__27497 = 0;var i__27498 = 0;while(true){
if((i__27498 < count__27497))
{var node = chunk__27496.cljs$core$IIndexed$_nth$arity$2(null,i__27498);goog.events.removeAll(node,type__$1);
{
var G__27511 = seq__27495;
var G__27512 = chunk__27496;
var G__27513 = count__27497;
var G__27514 = (i__27498 + 1);
seq__27495 = G__27511;
chunk__27496 = G__27512;
count__27497 = G__27513;
i__27498 = G__27514;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27495);if(temp__4092__auto__)
{var seq__27495__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27495__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27495__$1);{
var G__27515 = cljs.core.chunk_rest(seq__27495__$1);
var G__27516 = c__4148__auto__;
var G__27517 = cljs.core.count(c__4148__auto__);
var G__27518 = 0;
seq__27495 = G__27515;
chunk__27496 = G__27516;
count__27497 = G__27517;
i__27498 = G__27518;
continue;
}
} else
{var node = cljs.core.first(seq__27495__$1);goog.events.removeAll(node,type__$1);
{
var G__27519 = cljs.core.next(seq__27495__$1);
var G__27520 = null;
var G__27521 = 0;
var G__27522 = 0;
seq__27495 = G__27519;
chunk__27496 = G__27520;
count__27497 = G__27521;
i__27498 = G__27522;
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
var G__27523 = parent;
var G__27524 = cljs.core.cons(parent,so_far);
n = G__27523;
so_far = G__27524;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27533_27541 = cljs.core.seq(ancestors);var chunk__27534_27542 = null;var count__27535_27543 = 0;var i__27536_27544 = 0;while(true){
if((i__27536_27544 < count__27535_27543))
{var n_27545 = chunk__27534_27542.cljs$core$IIndexed$_nth$arity$2(null,i__27536_27544);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27545;
goog.events.fireListeners(n_27545,evt.type,true,evt);
}
{
var G__27546 = seq__27533_27541;
var G__27547 = chunk__27534_27542;
var G__27548 = count__27535_27543;
var G__27549 = (i__27536_27544 + 1);
seq__27533_27541 = G__27546;
chunk__27534_27542 = G__27547;
count__27535_27543 = G__27548;
i__27536_27544 = G__27549;
continue;
}
} else
{var temp__4092__auto___27550 = cljs.core.seq(seq__27533_27541);if(temp__4092__auto___27550)
{var seq__27533_27551__$1 = temp__4092__auto___27550;if(cljs.core.chunked_seq_QMARK_(seq__27533_27551__$1))
{var c__4148__auto___27552 = cljs.core.chunk_first(seq__27533_27551__$1);{
var G__27553 = cljs.core.chunk_rest(seq__27533_27551__$1);
var G__27554 = c__4148__auto___27552;
var G__27555 = cljs.core.count(c__4148__auto___27552);
var G__27556 = 0;
seq__27533_27541 = G__27553;
chunk__27534_27542 = G__27554;
count__27535_27543 = G__27555;
i__27536_27544 = G__27556;
continue;
}
} else
{var n_27557 = cljs.core.first(seq__27533_27551__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27557;
goog.events.fireListeners(n_27557,evt.type,true,evt);
}
{
var G__27558 = cljs.core.next(seq__27533_27551__$1);
var G__27559 = null;
var G__27560 = 0;
var G__27561 = 0;
seq__27533_27541 = G__27558;
chunk__27534_27542 = G__27559;
count__27535_27543 = G__27560;
i__27536_27544 = G__27561;
continue;
}
}
} else
{}
}
break;
}
var seq__27537_27562 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27538_27563 = null;var count__27539_27564 = 0;var i__27540_27565 = 0;while(true){
if((i__27540_27565 < count__27539_27564))
{var n_27566 = chunk__27538_27563.cljs$core$IIndexed$_nth$arity$2(null,i__27540_27565);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27566;
goog.events.fireListeners(n_27566,evt.type,false,evt);
}
{
var G__27567 = seq__27537_27562;
var G__27568 = chunk__27538_27563;
var G__27569 = count__27539_27564;
var G__27570 = (i__27540_27565 + 1);
seq__27537_27562 = G__27567;
chunk__27538_27563 = G__27568;
count__27539_27564 = G__27569;
i__27540_27565 = G__27570;
continue;
}
} else
{var temp__4092__auto___27571 = cljs.core.seq(seq__27537_27562);if(temp__4092__auto___27571)
{var seq__27537_27572__$1 = temp__4092__auto___27571;if(cljs.core.chunked_seq_QMARK_(seq__27537_27572__$1))
{var c__4148__auto___27573 = cljs.core.chunk_first(seq__27537_27572__$1);{
var G__27574 = cljs.core.chunk_rest(seq__27537_27572__$1);
var G__27575 = c__4148__auto___27573;
var G__27576 = cljs.core.count(c__4148__auto___27573);
var G__27577 = 0;
seq__27537_27562 = G__27574;
chunk__27538_27563 = G__27575;
count__27539_27564 = G__27576;
i__27540_27565 = G__27577;
continue;
}
} else
{var n_27578 = cljs.core.first(seq__27537_27572__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27578;
goog.events.fireListeners(n_27578,evt.type,false,evt);
}
{
var G__27579 = cljs.core.next(seq__27537_27572__$1);
var G__27580 = null;
var G__27581 = 0;
var G__27582 = 0;
seq__27537_27562 = G__27579;
chunk__27538_27563 = G__27580;
count__27539_27564 = G__27581;
i__27540_27565 = G__27582;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27589_27595 = cljs.core.seq(evt_map);var chunk__27590_27596 = null;var count__27591_27597 = 0;var i__27592_27598 = 0;while(true){
if((i__27592_27598 < count__27591_27597))
{var vec__27593_27599 = chunk__27590_27596.cljs$core$IIndexed$_nth$arity$2(null,i__27592_27598);var k_27600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27593_27599,0,null);var v_27601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27593_27599,1,null);(evt[k_27600] = v_27601);
{
var G__27602 = seq__27589_27595;
var G__27603 = chunk__27590_27596;
var G__27604 = count__27591_27597;
var G__27605 = (i__27592_27598 + 1);
seq__27589_27595 = G__27602;
chunk__27590_27596 = G__27603;
count__27591_27597 = G__27604;
i__27592_27598 = G__27605;
continue;
}
} else
{var temp__4092__auto___27606 = cljs.core.seq(seq__27589_27595);if(temp__4092__auto___27606)
{var seq__27589_27607__$1 = temp__4092__auto___27606;if(cljs.core.chunked_seq_QMARK_(seq__27589_27607__$1))
{var c__4148__auto___27608 = cljs.core.chunk_first(seq__27589_27607__$1);{
var G__27609 = cljs.core.chunk_rest(seq__27589_27607__$1);
var G__27610 = c__4148__auto___27608;
var G__27611 = cljs.core.count(c__4148__auto___27608);
var G__27612 = 0;
seq__27589_27595 = G__27609;
chunk__27590_27596 = G__27610;
count__27591_27597 = G__27611;
i__27592_27598 = G__27612;
continue;
}
} else
{var vec__27594_27613 = cljs.core.first(seq__27589_27607__$1);var k_27614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27594_27613,0,null);var v_27615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27594_27613,1,null);(evt[k_27614] = v_27615);
{
var G__27616 = cljs.core.next(seq__27589_27607__$1);
var G__27617 = null;
var G__27618 = 0;
var G__27619 = 0;
seq__27589_27595 = G__27616;
chunk__27590_27596 = G__27617;
count__27591_27597 = G__27618;
i__27592_27598 = G__27619;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27620_SHARP_){return goog.events.getListeners(p1__27620_SHARP_,type__$1,false);
}),domina.nodes(content));
});
