// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39968 = {};return obj39968;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.prevent_default[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.prevent_default["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.current_target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.current_target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.event_type[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.event_type["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.raw_event[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.raw_event["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39972 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39972 = (function (evt,f,create_listener_function,meta39973){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39973 = meta39973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39972.cljs$lang$type = true;
domina.events.t39972.cljs$lang$ctorStr = "domina.events/t39972";
domina.events.t39972.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"domina.events/t39972");
});
domina.events.t39972.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39972.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t39972.prototype.domina$events$Event$ = true;
domina.events.t39972.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39972.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39972.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39972.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39972.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39972.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39974){var self__ = this;
var _39974__$1 = this;return self__.meta39973;
});
domina.events.t39972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39974,meta39973__$1){var self__ = this;
var _39974__$1 = this;return (new domina.events.t39972(self__.evt,self__.f,self__.create_listener_function,meta39973__$1));
});
domina.events.__GT_t39972 = (function __GT_t39972(evt__$1,f__$1,create_listener_function__$1,meta39973){return (new domina.events.t39972(evt__$1,f__$1,create_listener_function__$1,meta39973));
});
}
return (new domina.events.t39972(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39972 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39972 = (function (evt,f,create_listener_function,meta39973){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39973 = meta39973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39972.cljs$lang$type = true;
domina.events.t39972.cljs$lang$ctorStr = "domina.events/t39972";
domina.events.t39972.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"domina.events/t39972");
});
domina.events.t39972.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39972.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t39972.prototype.domina$events$Event$ = true;
domina.events.t39972.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39972.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39972.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39972.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39972.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39972.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39974){var self__ = this;
var _39974__$1 = this;return self__.meta39973;
});
domina.events.t39972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39974,meta39973__$1){var self__ = this;
var _39974__$1 = this;return (new domina.events.t39972(self__.evt,self__.f,self__.create_listener_function,meta39973__$1));
});
domina.events.__GT_t39972 = (function __GT_t39972(evt__$1,f__$1,create_listener_function__$1,meta39973){return (new domina.events.t39972(evt__$1,f__$1,create_listener_function__$1,meta39973));
});
}
return (new domina.events.t39972(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4264__auto__ = ((function (f,t){
return (function iter__39979(s__39980){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__39980__$1 = s__39980;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39980__$1);if(temp__4126__auto__)
{var s__39980__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39980__$2))
{var c__4262__auto__ = cljs.core.chunk_first(s__39980__$2);var size__4263__auto__ = cljs.core.count(c__4262__auto__);var b__39982 = cljs.core.chunk_buffer(size__4263__auto__);if((function (){var i__39981 = 0;while(true){
if((i__39981 < size__4263__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4262__auto__,i__39981);cljs.core.chunk_append(b__39982,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39983 = (i__39981 + 1);
i__39981 = G__39983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39982),iter__39979(cljs.core.chunk_rest(s__39980__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39982),null);
}
} else
{var node = cljs.core.first(s__39980__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39979(cljs.core.rest(s__39980__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4264__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__39992 = cljs.core.seq(domina.nodes(content));var chunk__39993 = null;var count__39994 = 0;var i__39995 = 0;while(true){
if((i__39995 < count__39994))
{var node = chunk__39993.cljs$core$IIndexed$_nth$arity$2(null,i__39995);goog.events.removeAll(node);
{
var G__40000 = seq__39992;
var G__40001 = chunk__39993;
var G__40002 = count__39994;
var G__40003 = (i__39995 + 1);
seq__39992 = G__40000;
chunk__39993 = G__40001;
count__39994 = G__40002;
i__39995 = G__40003;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39992);if(temp__4126__auto__)
{var seq__39992__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39992__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__39992__$1);{
var G__40004 = cljs.core.chunk_rest(seq__39992__$1);
var G__40005 = c__4295__auto__;
var G__40006 = cljs.core.count(c__4295__auto__);
var G__40007 = 0;
seq__39992 = G__40004;
chunk__39993 = G__40005;
count__39994 = G__40006;
i__39995 = G__40007;
continue;
}
} else
{var node = cljs.core.first(seq__39992__$1);goog.events.removeAll(node);
{
var G__40008 = cljs.core.next(seq__39992__$1);
var G__40009 = null;
var G__40010 = 0;
var G__40011 = 0;
seq__39992 = G__40008;
chunk__39993 = G__40009;
count__39994 = G__40010;
i__39995 = G__40011;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39996 = cljs.core.seq(domina.nodes(content));var chunk__39997 = null;var count__39998 = 0;var i__39999 = 0;while(true){
if((i__39999 < count__39998))
{var node = chunk__39997.cljs$core$IIndexed$_nth$arity$2(null,i__39999);goog.events.removeAll(node,type__$1);
{
var G__40012 = seq__39996;
var G__40013 = chunk__39997;
var G__40014 = count__39998;
var G__40015 = (i__39999 + 1);
seq__39996 = G__40012;
chunk__39997 = G__40013;
count__39998 = G__40014;
i__39999 = G__40015;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39996);if(temp__4126__auto__)
{var seq__39996__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39996__$1))
{var c__4295__auto__ = cljs.core.chunk_first(seq__39996__$1);{
var G__40016 = cljs.core.chunk_rest(seq__39996__$1);
var G__40017 = c__4295__auto__;
var G__40018 = cljs.core.count(c__4295__auto__);
var G__40019 = 0;
seq__39996 = G__40016;
chunk__39997 = G__40017;
count__39998 = G__40018;
i__39999 = G__40019;
continue;
}
} else
{var node = cljs.core.first(seq__39996__$1);goog.events.removeAll(node,type__$1);
{
var G__40020 = cljs.core.next(seq__39996__$1);
var G__40021 = null;
var G__40022 = 0;
var G__40023 = 0;
seq__39996 = G__40020;
chunk__39997 = G__40021;
count__39998 = G__40022;
i__39999 = G__40023;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__40024 = parent;
var G__40025 = cljs.core.cons(parent,so_far);
n = G__40024;
so_far = G__40025;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__40034_40042 = cljs.core.seq(ancestors);var chunk__40035_40043 = null;var count__40036_40044 = 0;var i__40037_40045 = 0;while(true){
if((i__40037_40045 < count__40036_40044))
{var n_40046 = chunk__40035_40043.cljs$core$IIndexed$_nth$arity$2(null,i__40037_40045);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40046;
goog.events.fireListeners(n_40046,evt.type,true,evt);
}
{
var G__40047 = seq__40034_40042;
var G__40048 = chunk__40035_40043;
var G__40049 = count__40036_40044;
var G__40050 = (i__40037_40045 + 1);
seq__40034_40042 = G__40047;
chunk__40035_40043 = G__40048;
count__40036_40044 = G__40049;
i__40037_40045 = G__40050;
continue;
}
} else
{var temp__4126__auto___40051 = cljs.core.seq(seq__40034_40042);if(temp__4126__auto___40051)
{var seq__40034_40052__$1 = temp__4126__auto___40051;if(cljs.core.chunked_seq_QMARK_(seq__40034_40052__$1))
{var c__4295__auto___40053 = cljs.core.chunk_first(seq__40034_40052__$1);{
var G__40054 = cljs.core.chunk_rest(seq__40034_40052__$1);
var G__40055 = c__4295__auto___40053;
var G__40056 = cljs.core.count(c__4295__auto___40053);
var G__40057 = 0;
seq__40034_40042 = G__40054;
chunk__40035_40043 = G__40055;
count__40036_40044 = G__40056;
i__40037_40045 = G__40057;
continue;
}
} else
{var n_40058 = cljs.core.first(seq__40034_40052__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40058;
goog.events.fireListeners(n_40058,evt.type,true,evt);
}
{
var G__40059 = cljs.core.next(seq__40034_40052__$1);
var G__40060 = null;
var G__40061 = 0;
var G__40062 = 0;
seq__40034_40042 = G__40059;
chunk__40035_40043 = G__40060;
count__40036_40044 = G__40061;
i__40037_40045 = G__40062;
continue;
}
}
} else
{}
}
break;
}
var seq__40038_40063 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__40039_40064 = null;var count__40040_40065 = 0;var i__40041_40066 = 0;while(true){
if((i__40041_40066 < count__40040_40065))
{var n_40067 = chunk__40039_40064.cljs$core$IIndexed$_nth$arity$2(null,i__40041_40066);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40067;
goog.events.fireListeners(n_40067,evt.type,false,evt);
}
{
var G__40068 = seq__40038_40063;
var G__40069 = chunk__40039_40064;
var G__40070 = count__40040_40065;
var G__40071 = (i__40041_40066 + 1);
seq__40038_40063 = G__40068;
chunk__40039_40064 = G__40069;
count__40040_40065 = G__40070;
i__40041_40066 = G__40071;
continue;
}
} else
{var temp__4126__auto___40072 = cljs.core.seq(seq__40038_40063);if(temp__4126__auto___40072)
{var seq__40038_40073__$1 = temp__4126__auto___40072;if(cljs.core.chunked_seq_QMARK_(seq__40038_40073__$1))
{var c__4295__auto___40074 = cljs.core.chunk_first(seq__40038_40073__$1);{
var G__40075 = cljs.core.chunk_rest(seq__40038_40073__$1);
var G__40076 = c__4295__auto___40074;
var G__40077 = cljs.core.count(c__4295__auto___40074);
var G__40078 = 0;
seq__40038_40063 = G__40075;
chunk__40039_40064 = G__40076;
count__40040_40065 = G__40077;
i__40041_40066 = G__40078;
continue;
}
} else
{var n_40079 = cljs.core.first(seq__40038_40073__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40079;
goog.events.fireListeners(n_40079,evt.type,false,evt);
}
{
var G__40080 = cljs.core.next(seq__40038_40073__$1);
var G__40081 = null;
var G__40082 = 0;
var G__40083 = 0;
seq__40038_40063 = G__40080;
chunk__40039_40064 = G__40081;
count__40040_40065 = G__40082;
i__40041_40066 = G__40083;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3527__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3527__auto__))
{return o.dispatchEvent;
} else
{return and__3527__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__40090_40096 = cljs.core.seq(evt_map);var chunk__40091_40097 = null;var count__40092_40098 = 0;var i__40093_40099 = 0;while(true){
if((i__40093_40099 < count__40092_40098))
{var vec__40094_40100 = chunk__40091_40097.cljs$core$IIndexed$_nth$arity$2(null,i__40093_40099);var k_40101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094_40100,0,null);var v_40102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40094_40100,1,null);(evt[k_40101] = v_40102);
{
var G__40103 = seq__40090_40096;
var G__40104 = chunk__40091_40097;
var G__40105 = count__40092_40098;
var G__40106 = (i__40093_40099 + 1);
seq__40090_40096 = G__40103;
chunk__40091_40097 = G__40104;
count__40092_40098 = G__40105;
i__40093_40099 = G__40106;
continue;
}
} else
{var temp__4126__auto___40107 = cljs.core.seq(seq__40090_40096);if(temp__4126__auto___40107)
{var seq__40090_40108__$1 = temp__4126__auto___40107;if(cljs.core.chunked_seq_QMARK_(seq__40090_40108__$1))
{var c__4295__auto___40109 = cljs.core.chunk_first(seq__40090_40108__$1);{
var G__40110 = cljs.core.chunk_rest(seq__40090_40108__$1);
var G__40111 = c__4295__auto___40109;
var G__40112 = cljs.core.count(c__4295__auto___40109);
var G__40113 = 0;
seq__40090_40096 = G__40110;
chunk__40091_40097 = G__40111;
count__40092_40098 = G__40112;
i__40093_40099 = G__40113;
continue;
}
} else
{var vec__40095_40114 = cljs.core.first(seq__40090_40108__$1);var k_40115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095_40114,0,null);var v_40116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40095_40114,1,null);(evt[k_40115] = v_40116);
{
var G__40117 = cljs.core.next(seq__40090_40108__$1);
var G__40118 = null;
var G__40119 = 0;
var G__40120 = 0;
seq__40090_40096 = G__40117;
chunk__40091_40097 = G__40118;
count__40092_40098 = G__40119;
i__40093_40099 = G__40120;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (type__$1){
return (function (p1__40121_SHARP_){return goog.events.getListeners(p1__40121_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
