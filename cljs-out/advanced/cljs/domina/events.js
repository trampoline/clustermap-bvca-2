// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26003 = {};return obj26003;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26007 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26007 = (function (evt,f,create_listener_function,meta26008){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26008 = meta26008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26007.cljs$lang$type = true;
domina.events.t26007.cljs$lang$ctorStr = "domina.events/t26007";
domina.events.t26007.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26007");
});
domina.events.t26007.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26007.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26007.prototype.domina$events$Event$ = true;
domina.events.t26007.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26007.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26007.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26007.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26007.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26007.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26009){var self__ = this;
var _26009__$1 = this;return self__.meta26008;
});
domina.events.t26007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26009,meta26008__$1){var self__ = this;
var _26009__$1 = this;return (new domina.events.t26007(self__.evt,self__.f,self__.create_listener_function,meta26008__$1));
});
domina.events.__GT_t26007 = (function __GT_t26007(evt__$1,f__$1,create_listener_function__$1,meta26008){return (new domina.events.t26007(evt__$1,f__$1,create_listener_function__$1,meta26008));
});
}
return (new domina.events.t26007(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26007 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26007 = (function (evt,f,create_listener_function,meta26008){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26008 = meta26008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26007.cljs$lang$type = true;
domina.events.t26007.cljs$lang$ctorStr = "domina.events/t26007";
domina.events.t26007.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26007");
});
domina.events.t26007.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26007.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26007.prototype.domina$events$Event$ = true;
domina.events.t26007.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26007.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26007.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26007.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26007.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26007.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26009){var self__ = this;
var _26009__$1 = this;return self__.meta26008;
});
domina.events.t26007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26009,meta26008__$1){var self__ = this;
var _26009__$1 = this;return (new domina.events.t26007(self__.evt,self__.f,self__.create_listener_function,meta26008__$1));
});
domina.events.__GT_t26007 = (function __GT_t26007(evt__$1,f__$1,create_listener_function__$1,meta26008){return (new domina.events.t26007(evt__$1,f__$1,create_listener_function__$1,meta26008));
});
}
return (new domina.events.t26007(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26014(s__26015){return (new cljs.core.LazySeq(null,(function (){var s__26015__$1 = s__26015;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26015__$1);if(temp__4092__auto__)
{var s__26015__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26015__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26015__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26017 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26016 = 0;while(true){
if((i__26016 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26016);cljs.core.chunk_append(b__26017,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26018 = (i__26016 + 1);
i__26016 = G__26018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26017),iter__26014(cljs.core.chunk_rest(s__26015__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26017),null);
}
} else
{var node = cljs.core.first(s__26015__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26014(cljs.core.rest(s__26015__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26027 = cljs.core.seq(domina.nodes(content));var chunk__26028 = null;var count__26029 = 0;var i__26030 = 0;while(true){
if((i__26030 < count__26029))
{var node = chunk__26028.cljs$core$IIndexed$_nth$arity$2(null,i__26030);goog.events.removeAll(node);
{
var G__26035 = seq__26027;
var G__26036 = chunk__26028;
var G__26037 = count__26029;
var G__26038 = (i__26030 + 1);
seq__26027 = G__26035;
chunk__26028 = G__26036;
count__26029 = G__26037;
i__26030 = G__26038;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26027);if(temp__4092__auto__)
{var seq__26027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26027__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26027__$1);{
var G__26039 = cljs.core.chunk_rest(seq__26027__$1);
var G__26040 = c__4148__auto__;
var G__26041 = cljs.core.count(c__4148__auto__);
var G__26042 = 0;
seq__26027 = G__26039;
chunk__26028 = G__26040;
count__26029 = G__26041;
i__26030 = G__26042;
continue;
}
} else
{var node = cljs.core.first(seq__26027__$1);goog.events.removeAll(node);
{
var G__26043 = cljs.core.next(seq__26027__$1);
var G__26044 = null;
var G__26045 = 0;
var G__26046 = 0;
seq__26027 = G__26043;
chunk__26028 = G__26044;
count__26029 = G__26045;
i__26030 = G__26046;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26031 = cljs.core.seq(domina.nodes(content));var chunk__26032 = null;var count__26033 = 0;var i__26034 = 0;while(true){
if((i__26034 < count__26033))
{var node = chunk__26032.cljs$core$IIndexed$_nth$arity$2(null,i__26034);goog.events.removeAll(node,type__$1);
{
var G__26047 = seq__26031;
var G__26048 = chunk__26032;
var G__26049 = count__26033;
var G__26050 = (i__26034 + 1);
seq__26031 = G__26047;
chunk__26032 = G__26048;
count__26033 = G__26049;
i__26034 = G__26050;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26031);if(temp__4092__auto__)
{var seq__26031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26031__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26031__$1);{
var G__26051 = cljs.core.chunk_rest(seq__26031__$1);
var G__26052 = c__4148__auto__;
var G__26053 = cljs.core.count(c__4148__auto__);
var G__26054 = 0;
seq__26031 = G__26051;
chunk__26032 = G__26052;
count__26033 = G__26053;
i__26034 = G__26054;
continue;
}
} else
{var node = cljs.core.first(seq__26031__$1);goog.events.removeAll(node,type__$1);
{
var G__26055 = cljs.core.next(seq__26031__$1);
var G__26056 = null;
var G__26057 = 0;
var G__26058 = 0;
seq__26031 = G__26055;
chunk__26032 = G__26056;
count__26033 = G__26057;
i__26034 = G__26058;
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
var G__26059 = parent;
var G__26060 = cljs.core.cons(parent,so_far);
n = G__26059;
so_far = G__26060;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26069_26077 = cljs.core.seq(ancestors);var chunk__26070_26078 = null;var count__26071_26079 = 0;var i__26072_26080 = 0;while(true){
if((i__26072_26080 < count__26071_26079))
{var n_26081 = chunk__26070_26078.cljs$core$IIndexed$_nth$arity$2(null,i__26072_26080);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26081;
goog.events.fireListeners(n_26081,evt.type,true,evt);
}
{
var G__26082 = seq__26069_26077;
var G__26083 = chunk__26070_26078;
var G__26084 = count__26071_26079;
var G__26085 = (i__26072_26080 + 1);
seq__26069_26077 = G__26082;
chunk__26070_26078 = G__26083;
count__26071_26079 = G__26084;
i__26072_26080 = G__26085;
continue;
}
} else
{var temp__4092__auto___26086 = cljs.core.seq(seq__26069_26077);if(temp__4092__auto___26086)
{var seq__26069_26087__$1 = temp__4092__auto___26086;if(cljs.core.chunked_seq_QMARK_(seq__26069_26087__$1))
{var c__4148__auto___26088 = cljs.core.chunk_first(seq__26069_26087__$1);{
var G__26089 = cljs.core.chunk_rest(seq__26069_26087__$1);
var G__26090 = c__4148__auto___26088;
var G__26091 = cljs.core.count(c__4148__auto___26088);
var G__26092 = 0;
seq__26069_26077 = G__26089;
chunk__26070_26078 = G__26090;
count__26071_26079 = G__26091;
i__26072_26080 = G__26092;
continue;
}
} else
{var n_26093 = cljs.core.first(seq__26069_26087__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26093;
goog.events.fireListeners(n_26093,evt.type,true,evt);
}
{
var G__26094 = cljs.core.next(seq__26069_26087__$1);
var G__26095 = null;
var G__26096 = 0;
var G__26097 = 0;
seq__26069_26077 = G__26094;
chunk__26070_26078 = G__26095;
count__26071_26079 = G__26096;
i__26072_26080 = G__26097;
continue;
}
}
} else
{}
}
break;
}
var seq__26073_26098 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26074_26099 = null;var count__26075_26100 = 0;var i__26076_26101 = 0;while(true){
if((i__26076_26101 < count__26075_26100))
{var n_26102 = chunk__26074_26099.cljs$core$IIndexed$_nth$arity$2(null,i__26076_26101);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26102;
goog.events.fireListeners(n_26102,evt.type,false,evt);
}
{
var G__26103 = seq__26073_26098;
var G__26104 = chunk__26074_26099;
var G__26105 = count__26075_26100;
var G__26106 = (i__26076_26101 + 1);
seq__26073_26098 = G__26103;
chunk__26074_26099 = G__26104;
count__26075_26100 = G__26105;
i__26076_26101 = G__26106;
continue;
}
} else
{var temp__4092__auto___26107 = cljs.core.seq(seq__26073_26098);if(temp__4092__auto___26107)
{var seq__26073_26108__$1 = temp__4092__auto___26107;if(cljs.core.chunked_seq_QMARK_(seq__26073_26108__$1))
{var c__4148__auto___26109 = cljs.core.chunk_first(seq__26073_26108__$1);{
var G__26110 = cljs.core.chunk_rest(seq__26073_26108__$1);
var G__26111 = c__4148__auto___26109;
var G__26112 = cljs.core.count(c__4148__auto___26109);
var G__26113 = 0;
seq__26073_26098 = G__26110;
chunk__26074_26099 = G__26111;
count__26075_26100 = G__26112;
i__26076_26101 = G__26113;
continue;
}
} else
{var n_26114 = cljs.core.first(seq__26073_26108__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26114;
goog.events.fireListeners(n_26114,evt.type,false,evt);
}
{
var G__26115 = cljs.core.next(seq__26073_26108__$1);
var G__26116 = null;
var G__26117 = 0;
var G__26118 = 0;
seq__26073_26098 = G__26115;
chunk__26074_26099 = G__26116;
count__26075_26100 = G__26117;
i__26076_26101 = G__26118;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26125_26131 = cljs.core.seq(evt_map);var chunk__26126_26132 = null;var count__26127_26133 = 0;var i__26128_26134 = 0;while(true){
if((i__26128_26134 < count__26127_26133))
{var vec__26129_26135 = chunk__26126_26132.cljs$core$IIndexed$_nth$arity$2(null,i__26128_26134);var k_26136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129_26135,0,null);var v_26137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26129_26135,1,null);(evt[k_26136] = v_26137);
{
var G__26138 = seq__26125_26131;
var G__26139 = chunk__26126_26132;
var G__26140 = count__26127_26133;
var G__26141 = (i__26128_26134 + 1);
seq__26125_26131 = G__26138;
chunk__26126_26132 = G__26139;
count__26127_26133 = G__26140;
i__26128_26134 = G__26141;
continue;
}
} else
{var temp__4092__auto___26142 = cljs.core.seq(seq__26125_26131);if(temp__4092__auto___26142)
{var seq__26125_26143__$1 = temp__4092__auto___26142;if(cljs.core.chunked_seq_QMARK_(seq__26125_26143__$1))
{var c__4148__auto___26144 = cljs.core.chunk_first(seq__26125_26143__$1);{
var G__26145 = cljs.core.chunk_rest(seq__26125_26143__$1);
var G__26146 = c__4148__auto___26144;
var G__26147 = cljs.core.count(c__4148__auto___26144);
var G__26148 = 0;
seq__26125_26131 = G__26145;
chunk__26126_26132 = G__26146;
count__26127_26133 = G__26147;
i__26128_26134 = G__26148;
continue;
}
} else
{var vec__26130_26149 = cljs.core.first(seq__26125_26143__$1);var k_26150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130_26149,0,null);var v_26151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26130_26149,1,null);(evt[k_26150] = v_26151);
{
var G__26152 = cljs.core.next(seq__26125_26143__$1);
var G__26153 = null;
var G__26154 = 0;
var G__26155 = 0;
seq__26125_26131 = G__26152;
chunk__26126_26132 = G__26153;
count__26127_26133 = G__26154;
i__26128_26134 = G__26155;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26156_SHARP_){return goog.events.getListeners(p1__26156_SHARP_,type__$1,false);
}),domina.nodes(content));
});
