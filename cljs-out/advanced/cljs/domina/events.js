// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16768 = {};return obj16768;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t16772 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16772 = (function (evt,f,create_listener_function,meta16773){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16773 = meta16773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16772.cljs$lang$type = true;
domina.events.t16772.cljs$lang$ctorStr = "domina.events/t16772";
domina.events.t16772.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t16772");
});
domina.events.t16772.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t16772.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16772.prototype.domina$events$Event$ = true;
domina.events.t16772.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16772.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16772.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16772.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16772.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16772.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16774){var self__ = this;
var _16774__$1 = this;return self__.meta16773;
});
domina.events.t16772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16774,meta16773__$1){var self__ = this;
var _16774__$1 = this;return (new domina.events.t16772(self__.evt,self__.f,self__.create_listener_function,meta16773__$1));
});
domina.events.__GT_t16772 = (function __GT_t16772(evt__$1,f__$1,create_listener_function__$1,meta16773){return (new domina.events.t16772(evt__$1,f__$1,create_listener_function__$1,meta16773));
});
}
return (new domina.events.t16772(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t16772 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16772 = (function (evt,f,create_listener_function,meta16773){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16773 = meta16773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16772.cljs$lang$type = true;
domina.events.t16772.cljs$lang$ctorStr = "domina.events/t16772";
domina.events.t16772.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t16772");
});
domina.events.t16772.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t16772.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16772.prototype.domina$events$Event$ = true;
domina.events.t16772.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16772.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16772.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16772.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16772.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16772.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16774){var self__ = this;
var _16774__$1 = this;return self__.meta16773;
});
domina.events.t16772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16774,meta16773__$1){var self__ = this;
var _16774__$1 = this;return (new domina.events.t16772(self__.evt,self__.f,self__.create_listener_function,meta16773__$1));
});
domina.events.__GT_t16772 = (function __GT_t16772(evt__$1,f__$1,create_listener_function__$1,meta16773){return (new domina.events.t16772(evt__$1,f__$1,create_listener_function__$1,meta16773));
});
}
return (new domina.events.t16772(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__16779(s__16780){return (new cljs.core.LazySeq(null,(function (){var s__16780__$1 = s__16780;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16780__$1);if(temp__4092__auto__)
{var s__16780__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16780__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16780__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16782 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16781 = 0;while(true){
if((i__16781 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16781);cljs.core.chunk_append(b__16782,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16783 = (i__16781 + 1);
i__16781 = G__16783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16782),iter__16779(cljs.core.chunk_rest(s__16780__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16782),null);
}
} else
{var node = cljs.core.first(s__16780__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16779(cljs.core.rest(s__16780__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16792 = cljs.core.seq(domina.nodes(content));var chunk__16793 = null;var count__16794 = 0;var i__16795 = 0;while(true){
if((i__16795 < count__16794))
{var node = chunk__16793.cljs$core$IIndexed$_nth$arity$2(null,i__16795);goog.events.removeAll(node);
{
var G__16800 = seq__16792;
var G__16801 = chunk__16793;
var G__16802 = count__16794;
var G__16803 = (i__16795 + 1);
seq__16792 = G__16800;
chunk__16793 = G__16801;
count__16794 = G__16802;
i__16795 = G__16803;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__16792);if(temp__4092__auto__)
{var seq__16792__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__16792__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__16792__$1);{
var G__16804 = cljs.core.chunk_rest(seq__16792__$1);
var G__16805 = c__4148__auto__;
var G__16806 = cljs.core.count(c__4148__auto__);
var G__16807 = 0;
seq__16792 = G__16804;
chunk__16793 = G__16805;
count__16794 = G__16806;
i__16795 = G__16807;
continue;
}
} else
{var node = cljs.core.first(seq__16792__$1);goog.events.removeAll(node);
{
var G__16808 = cljs.core.next(seq__16792__$1);
var G__16809 = null;
var G__16810 = 0;
var G__16811 = 0;
seq__16792 = G__16808;
chunk__16793 = G__16809;
count__16794 = G__16810;
i__16795 = G__16811;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__16796 = cljs.core.seq(domina.nodes(content));var chunk__16797 = null;var count__16798 = 0;var i__16799 = 0;while(true){
if((i__16799 < count__16798))
{var node = chunk__16797.cljs$core$IIndexed$_nth$arity$2(null,i__16799);goog.events.removeAll(node,type__$1);
{
var G__16812 = seq__16796;
var G__16813 = chunk__16797;
var G__16814 = count__16798;
var G__16815 = (i__16799 + 1);
seq__16796 = G__16812;
chunk__16797 = G__16813;
count__16798 = G__16814;
i__16799 = G__16815;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__16796);if(temp__4092__auto__)
{var seq__16796__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__16796__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__16796__$1);{
var G__16816 = cljs.core.chunk_rest(seq__16796__$1);
var G__16817 = c__4148__auto__;
var G__16818 = cljs.core.count(c__4148__auto__);
var G__16819 = 0;
seq__16796 = G__16816;
chunk__16797 = G__16817;
count__16798 = G__16818;
i__16799 = G__16819;
continue;
}
} else
{var node = cljs.core.first(seq__16796__$1);goog.events.removeAll(node,type__$1);
{
var G__16820 = cljs.core.next(seq__16796__$1);
var G__16821 = null;
var G__16822 = 0;
var G__16823 = 0;
seq__16796 = G__16820;
chunk__16797 = G__16821;
count__16798 = G__16822;
i__16799 = G__16823;
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
var G__16824 = parent;
var G__16825 = cljs.core.cons(parent,so_far);
n = G__16824;
so_far = G__16825;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__16834_16842 = cljs.core.seq(ancestors);var chunk__16835_16843 = null;var count__16836_16844 = 0;var i__16837_16845 = 0;while(true){
if((i__16837_16845 < count__16836_16844))
{var n_16846 = chunk__16835_16843.cljs$core$IIndexed$_nth$arity$2(null,i__16837_16845);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16846;
goog.events.fireListeners(n_16846,evt.type,true,evt);
}
{
var G__16847 = seq__16834_16842;
var G__16848 = chunk__16835_16843;
var G__16849 = count__16836_16844;
var G__16850 = (i__16837_16845 + 1);
seq__16834_16842 = G__16847;
chunk__16835_16843 = G__16848;
count__16836_16844 = G__16849;
i__16837_16845 = G__16850;
continue;
}
} else
{var temp__4092__auto___16851 = cljs.core.seq(seq__16834_16842);if(temp__4092__auto___16851)
{var seq__16834_16852__$1 = temp__4092__auto___16851;if(cljs.core.chunked_seq_QMARK_(seq__16834_16852__$1))
{var c__4148__auto___16853 = cljs.core.chunk_first(seq__16834_16852__$1);{
var G__16854 = cljs.core.chunk_rest(seq__16834_16852__$1);
var G__16855 = c__4148__auto___16853;
var G__16856 = cljs.core.count(c__4148__auto___16853);
var G__16857 = 0;
seq__16834_16842 = G__16854;
chunk__16835_16843 = G__16855;
count__16836_16844 = G__16856;
i__16837_16845 = G__16857;
continue;
}
} else
{var n_16858 = cljs.core.first(seq__16834_16852__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16858;
goog.events.fireListeners(n_16858,evt.type,true,evt);
}
{
var G__16859 = cljs.core.next(seq__16834_16852__$1);
var G__16860 = null;
var G__16861 = 0;
var G__16862 = 0;
seq__16834_16842 = G__16859;
chunk__16835_16843 = G__16860;
count__16836_16844 = G__16861;
i__16837_16845 = G__16862;
continue;
}
}
} else
{}
}
break;
}
var seq__16838_16863 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__16839_16864 = null;var count__16840_16865 = 0;var i__16841_16866 = 0;while(true){
if((i__16841_16866 < count__16840_16865))
{var n_16867 = chunk__16839_16864.cljs$core$IIndexed$_nth$arity$2(null,i__16841_16866);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16867;
goog.events.fireListeners(n_16867,evt.type,false,evt);
}
{
var G__16868 = seq__16838_16863;
var G__16869 = chunk__16839_16864;
var G__16870 = count__16840_16865;
var G__16871 = (i__16841_16866 + 1);
seq__16838_16863 = G__16868;
chunk__16839_16864 = G__16869;
count__16840_16865 = G__16870;
i__16841_16866 = G__16871;
continue;
}
} else
{var temp__4092__auto___16872 = cljs.core.seq(seq__16838_16863);if(temp__4092__auto___16872)
{var seq__16838_16873__$1 = temp__4092__auto___16872;if(cljs.core.chunked_seq_QMARK_(seq__16838_16873__$1))
{var c__4148__auto___16874 = cljs.core.chunk_first(seq__16838_16873__$1);{
var G__16875 = cljs.core.chunk_rest(seq__16838_16873__$1);
var G__16876 = c__4148__auto___16874;
var G__16877 = cljs.core.count(c__4148__auto___16874);
var G__16878 = 0;
seq__16838_16863 = G__16875;
chunk__16839_16864 = G__16876;
count__16840_16865 = G__16877;
i__16841_16866 = G__16878;
continue;
}
} else
{var n_16879 = cljs.core.first(seq__16838_16873__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16879;
goog.events.fireListeners(n_16879,evt.type,false,evt);
}
{
var G__16880 = cljs.core.next(seq__16838_16873__$1);
var G__16881 = null;
var G__16882 = 0;
var G__16883 = 0;
seq__16838_16863 = G__16880;
chunk__16839_16864 = G__16881;
count__16840_16865 = G__16882;
i__16841_16866 = G__16883;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__16890_16896 = cljs.core.seq(evt_map);var chunk__16891_16897 = null;var count__16892_16898 = 0;var i__16893_16899 = 0;while(true){
if((i__16893_16899 < count__16892_16898))
{var vec__16894_16900 = chunk__16891_16897.cljs$core$IIndexed$_nth$arity$2(null,i__16893_16899);var k_16901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16894_16900,0,null);var v_16902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16894_16900,1,null);(evt[k_16901] = v_16902);
{
var G__16903 = seq__16890_16896;
var G__16904 = chunk__16891_16897;
var G__16905 = count__16892_16898;
var G__16906 = (i__16893_16899 + 1);
seq__16890_16896 = G__16903;
chunk__16891_16897 = G__16904;
count__16892_16898 = G__16905;
i__16893_16899 = G__16906;
continue;
}
} else
{var temp__4092__auto___16907 = cljs.core.seq(seq__16890_16896);if(temp__4092__auto___16907)
{var seq__16890_16908__$1 = temp__4092__auto___16907;if(cljs.core.chunked_seq_QMARK_(seq__16890_16908__$1))
{var c__4148__auto___16909 = cljs.core.chunk_first(seq__16890_16908__$1);{
var G__16910 = cljs.core.chunk_rest(seq__16890_16908__$1);
var G__16911 = c__4148__auto___16909;
var G__16912 = cljs.core.count(c__4148__auto___16909);
var G__16913 = 0;
seq__16890_16896 = G__16910;
chunk__16891_16897 = G__16911;
count__16892_16898 = G__16912;
i__16893_16899 = G__16913;
continue;
}
} else
{var vec__16895_16914 = cljs.core.first(seq__16890_16908__$1);var k_16915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16895_16914,0,null);var v_16916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16895_16914,1,null);(evt[k_16915] = v_16916);
{
var G__16917 = cljs.core.next(seq__16890_16908__$1);
var G__16918 = null;
var G__16919 = 0;
var G__16920 = 0;
seq__16890_16896 = G__16917;
chunk__16891_16897 = G__16918;
count__16892_16898 = G__16919;
i__16893_16899 = G__16920;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__16921_SHARP_){return goog.events.getListeners(p1__16921_SHARP_,type__$1,false);
}),domina.nodes(content));
});
