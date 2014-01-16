// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj24621 = {};return obj24621;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t24625 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t24625 = (function (evt,f,create_listener_function,meta24626){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta24626 = meta24626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t24625.cljs$lang$type = true;
domina.events.t24625.cljs$lang$ctorStr = "domina.events/t24625";
domina.events.t24625.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t24625");
});
domina.events.t24625.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t24625.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t24625.prototype.domina$events$Event$ = true;
domina.events.t24625.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t24625.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t24625.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t24625.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t24625.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t24625.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t24625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24627){var self__ = this;
var _24627__$1 = this;return self__.meta24626;
});
domina.events.t24625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24627,meta24626__$1){var self__ = this;
var _24627__$1 = this;return (new domina.events.t24625(self__.evt,self__.f,self__.create_listener_function,meta24626__$1));
});
domina.events.__GT_t24625 = (function __GT_t24625(evt__$1,f__$1,create_listener_function__$1,meta24626){return (new domina.events.t24625(evt__$1,f__$1,create_listener_function__$1,meta24626));
});
}
return (new domina.events.t24625(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t24625 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t24625 = (function (evt,f,create_listener_function,meta24626){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta24626 = meta24626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t24625.cljs$lang$type = true;
domina.events.t24625.cljs$lang$ctorStr = "domina.events/t24625";
domina.events.t24625.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t24625");
});
domina.events.t24625.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t24625.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t24625.prototype.domina$events$Event$ = true;
domina.events.t24625.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t24625.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t24625.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t24625.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t24625.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t24625.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t24625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24627){var self__ = this;
var _24627__$1 = this;return self__.meta24626;
});
domina.events.t24625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24627,meta24626__$1){var self__ = this;
var _24627__$1 = this;return (new domina.events.t24625(self__.evt,self__.f,self__.create_listener_function,meta24626__$1));
});
domina.events.__GT_t24625 = (function __GT_t24625(evt__$1,f__$1,create_listener_function__$1,meta24626){return (new domina.events.t24625(evt__$1,f__$1,create_listener_function__$1,meta24626));
});
}
return (new domina.events.t24625(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__24632(s__24633){return (new cljs.core.LazySeq(null,(function (){var s__24633__$1 = s__24633;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24633__$1);if(temp__4092__auto__)
{var s__24633__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24633__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24633__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24635 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24634 = 0;while(true){
if((i__24634 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24634);cljs.core.chunk_append(b__24635,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__24636 = (i__24634 + 1);
i__24634 = G__24636;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24635),iter__24632(cljs.core.chunk_rest(s__24633__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24635),null);
}
} else
{var node = cljs.core.first(s__24633__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__24632(cljs.core.rest(s__24633__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__24645 = cljs.core.seq(domina.nodes(content));var chunk__24646 = null;var count__24647 = 0;var i__24648 = 0;while(true){
if((i__24648 < count__24647))
{var node = chunk__24646.cljs$core$IIndexed$_nth$arity$2(null,i__24648);goog.events.removeAll(node);
{
var G__24653 = seq__24645;
var G__24654 = chunk__24646;
var G__24655 = count__24647;
var G__24656 = (i__24648 + 1);
seq__24645 = G__24653;
chunk__24646 = G__24654;
count__24647 = G__24655;
i__24648 = G__24656;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24645);if(temp__4092__auto__)
{var seq__24645__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24645__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24645__$1);{
var G__24657 = cljs.core.chunk_rest(seq__24645__$1);
var G__24658 = c__4148__auto__;
var G__24659 = cljs.core.count(c__4148__auto__);
var G__24660 = 0;
seq__24645 = G__24657;
chunk__24646 = G__24658;
count__24647 = G__24659;
i__24648 = G__24660;
continue;
}
} else
{var node = cljs.core.first(seq__24645__$1);goog.events.removeAll(node);
{
var G__24661 = cljs.core.next(seq__24645__$1);
var G__24662 = null;
var G__24663 = 0;
var G__24664 = 0;
seq__24645 = G__24661;
chunk__24646 = G__24662;
count__24647 = G__24663;
i__24648 = G__24664;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__24649 = cljs.core.seq(domina.nodes(content));var chunk__24650 = null;var count__24651 = 0;var i__24652 = 0;while(true){
if((i__24652 < count__24651))
{var node = chunk__24650.cljs$core$IIndexed$_nth$arity$2(null,i__24652);goog.events.removeAll(node,type__$1);
{
var G__24665 = seq__24649;
var G__24666 = chunk__24650;
var G__24667 = count__24651;
var G__24668 = (i__24652 + 1);
seq__24649 = G__24665;
chunk__24650 = G__24666;
count__24651 = G__24667;
i__24652 = G__24668;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24649);if(temp__4092__auto__)
{var seq__24649__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24649__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24649__$1);{
var G__24669 = cljs.core.chunk_rest(seq__24649__$1);
var G__24670 = c__4148__auto__;
var G__24671 = cljs.core.count(c__4148__auto__);
var G__24672 = 0;
seq__24649 = G__24669;
chunk__24650 = G__24670;
count__24651 = G__24671;
i__24652 = G__24672;
continue;
}
} else
{var node = cljs.core.first(seq__24649__$1);goog.events.removeAll(node,type__$1);
{
var G__24673 = cljs.core.next(seq__24649__$1);
var G__24674 = null;
var G__24675 = 0;
var G__24676 = 0;
seq__24649 = G__24673;
chunk__24650 = G__24674;
count__24651 = G__24675;
i__24652 = G__24676;
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
var G__24677 = parent;
var G__24678 = cljs.core.cons(parent,so_far);
n = G__24677;
so_far = G__24678;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__24687_24695 = cljs.core.seq(ancestors);var chunk__24688_24696 = null;var count__24689_24697 = 0;var i__24690_24698 = 0;while(true){
if((i__24690_24698 < count__24689_24697))
{var n_24699 = chunk__24688_24696.cljs$core$IIndexed$_nth$arity$2(null,i__24690_24698);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_24699;
goog.events.fireListeners(n_24699,evt.type,true,evt);
}
{
var G__24700 = seq__24687_24695;
var G__24701 = chunk__24688_24696;
var G__24702 = count__24689_24697;
var G__24703 = (i__24690_24698 + 1);
seq__24687_24695 = G__24700;
chunk__24688_24696 = G__24701;
count__24689_24697 = G__24702;
i__24690_24698 = G__24703;
continue;
}
} else
{var temp__4092__auto___24704 = cljs.core.seq(seq__24687_24695);if(temp__4092__auto___24704)
{var seq__24687_24705__$1 = temp__4092__auto___24704;if(cljs.core.chunked_seq_QMARK_(seq__24687_24705__$1))
{var c__4148__auto___24706 = cljs.core.chunk_first(seq__24687_24705__$1);{
var G__24707 = cljs.core.chunk_rest(seq__24687_24705__$1);
var G__24708 = c__4148__auto___24706;
var G__24709 = cljs.core.count(c__4148__auto___24706);
var G__24710 = 0;
seq__24687_24695 = G__24707;
chunk__24688_24696 = G__24708;
count__24689_24697 = G__24709;
i__24690_24698 = G__24710;
continue;
}
} else
{var n_24711 = cljs.core.first(seq__24687_24705__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_24711;
goog.events.fireListeners(n_24711,evt.type,true,evt);
}
{
var G__24712 = cljs.core.next(seq__24687_24705__$1);
var G__24713 = null;
var G__24714 = 0;
var G__24715 = 0;
seq__24687_24695 = G__24712;
chunk__24688_24696 = G__24713;
count__24689_24697 = G__24714;
i__24690_24698 = G__24715;
continue;
}
}
} else
{}
}
break;
}
var seq__24691_24716 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__24692_24717 = null;var count__24693_24718 = 0;var i__24694_24719 = 0;while(true){
if((i__24694_24719 < count__24693_24718))
{var n_24720 = chunk__24692_24717.cljs$core$IIndexed$_nth$arity$2(null,i__24694_24719);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_24720;
goog.events.fireListeners(n_24720,evt.type,false,evt);
}
{
var G__24721 = seq__24691_24716;
var G__24722 = chunk__24692_24717;
var G__24723 = count__24693_24718;
var G__24724 = (i__24694_24719 + 1);
seq__24691_24716 = G__24721;
chunk__24692_24717 = G__24722;
count__24693_24718 = G__24723;
i__24694_24719 = G__24724;
continue;
}
} else
{var temp__4092__auto___24725 = cljs.core.seq(seq__24691_24716);if(temp__4092__auto___24725)
{var seq__24691_24726__$1 = temp__4092__auto___24725;if(cljs.core.chunked_seq_QMARK_(seq__24691_24726__$1))
{var c__4148__auto___24727 = cljs.core.chunk_first(seq__24691_24726__$1);{
var G__24728 = cljs.core.chunk_rest(seq__24691_24726__$1);
var G__24729 = c__4148__auto___24727;
var G__24730 = cljs.core.count(c__4148__auto___24727);
var G__24731 = 0;
seq__24691_24716 = G__24728;
chunk__24692_24717 = G__24729;
count__24693_24718 = G__24730;
i__24694_24719 = G__24731;
continue;
}
} else
{var n_24732 = cljs.core.first(seq__24691_24726__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_24732;
goog.events.fireListeners(n_24732,evt.type,false,evt);
}
{
var G__24733 = cljs.core.next(seq__24691_24726__$1);
var G__24734 = null;
var G__24735 = 0;
var G__24736 = 0;
seq__24691_24716 = G__24733;
chunk__24692_24717 = G__24734;
count__24693_24718 = G__24735;
i__24694_24719 = G__24736;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__24743_24749 = cljs.core.seq(evt_map);var chunk__24744_24750 = null;var count__24745_24751 = 0;var i__24746_24752 = 0;while(true){
if((i__24746_24752 < count__24745_24751))
{var vec__24747_24753 = chunk__24744_24750.cljs$core$IIndexed$_nth$arity$2(null,i__24746_24752);var k_24754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747_24753,0,null);var v_24755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24747_24753,1,null);(evt[k_24754] = v_24755);
{
var G__24756 = seq__24743_24749;
var G__24757 = chunk__24744_24750;
var G__24758 = count__24745_24751;
var G__24759 = (i__24746_24752 + 1);
seq__24743_24749 = G__24756;
chunk__24744_24750 = G__24757;
count__24745_24751 = G__24758;
i__24746_24752 = G__24759;
continue;
}
} else
{var temp__4092__auto___24760 = cljs.core.seq(seq__24743_24749);if(temp__4092__auto___24760)
{var seq__24743_24761__$1 = temp__4092__auto___24760;if(cljs.core.chunked_seq_QMARK_(seq__24743_24761__$1))
{var c__4148__auto___24762 = cljs.core.chunk_first(seq__24743_24761__$1);{
var G__24763 = cljs.core.chunk_rest(seq__24743_24761__$1);
var G__24764 = c__4148__auto___24762;
var G__24765 = cljs.core.count(c__4148__auto___24762);
var G__24766 = 0;
seq__24743_24749 = G__24763;
chunk__24744_24750 = G__24764;
count__24745_24751 = G__24765;
i__24746_24752 = G__24766;
continue;
}
} else
{var vec__24748_24767 = cljs.core.first(seq__24743_24761__$1);var k_24768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24748_24767,0,null);var v_24769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24748_24767,1,null);(evt[k_24768] = v_24769);
{
var G__24770 = cljs.core.next(seq__24743_24761__$1);
var G__24771 = null;
var G__24772 = 0;
var G__24773 = 0;
seq__24743_24749 = G__24770;
chunk__24744_24750 = G__24771;
count__24745_24751 = G__24772;
i__24746_24752 = G__24773;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__24774_SHARP_){return goog.events.getListeners(p1__24774_SHARP_,type__$1,false);
}),domina.nodes(content));
});
