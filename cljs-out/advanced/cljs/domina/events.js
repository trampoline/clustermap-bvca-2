// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39265 = {};return obj39265;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39269 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39269 = (function (evt,f,create_listener_function,meta39270){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39270 = meta39270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39269.cljs$lang$type = true;
domina.events.t39269.cljs$lang$ctorStr = "domina.events/t39269";
domina.events.t39269.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39269");
});
domina.events.t39269.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39269.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39269.prototype.domina$events$Event$ = true;
domina.events.t39269.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39269.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39269.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39269.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39269.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39269.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39271){var self__ = this;
var _39271__$1 = this;return self__.meta39270;
});
domina.events.t39269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39271,meta39270__$1){var self__ = this;
var _39271__$1 = this;return (new domina.events.t39269(self__.evt,self__.f,self__.create_listener_function,meta39270__$1));
});
domina.events.__GT_t39269 = (function __GT_t39269(evt__$1,f__$1,create_listener_function__$1,meta39270){return (new domina.events.t39269(evt__$1,f__$1,create_listener_function__$1,meta39270));
});
}
return (new domina.events.t39269(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39269 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39269 = (function (evt,f,create_listener_function,meta39270){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39270 = meta39270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39269.cljs$lang$type = true;
domina.events.t39269.cljs$lang$ctorStr = "domina.events/t39269";
domina.events.t39269.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39269");
});
domina.events.t39269.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39269.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39269.prototype.domina$events$Event$ = true;
domina.events.t39269.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39269.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39269.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39269.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39269.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39269.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39271){var self__ = this;
var _39271__$1 = this;return self__.meta39270;
});
domina.events.t39269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39271,meta39270__$1){var self__ = this;
var _39271__$1 = this;return (new domina.events.t39269(self__.evt,self__.f,self__.create_listener_function,meta39270__$1));
});
domina.events.__GT_t39269 = (function __GT_t39269(evt__$1,f__$1,create_listener_function__$1,meta39270){return (new domina.events.t39269(evt__$1,f__$1,create_listener_function__$1,meta39270));
});
}
return (new domina.events.t39269(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39276(s__39277){return (new cljs.core.LazySeq(null,(function (){var s__39277__$1 = s__39277;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39277__$1);if(temp__4092__auto__)
{var s__39277__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39277__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39277__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39279 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39278 = 0;while(true){
if((i__39278 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39278);cljs.core.chunk_append(b__39279,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39280 = (i__39278 + 1);
i__39278 = G__39280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39279),iter__39276(cljs.core.chunk_rest(s__39277__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39279),null);
}
} else
{var node = cljs.core.first(s__39277__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39276(cljs.core.rest(s__39277__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__39289 = cljs.core.seq(domina.nodes(content));var chunk__39290 = null;var count__39291 = 0;var i__39292 = 0;while(true){
if((i__39292 < count__39291))
{var node = chunk__39290.cljs$core$IIndexed$_nth$arity$2(null,i__39292);goog.events.removeAll(node);
{
var G__39297 = seq__39289;
var G__39298 = chunk__39290;
var G__39299 = count__39291;
var G__39300 = (i__39292 + 1);
seq__39289 = G__39297;
chunk__39290 = G__39298;
count__39291 = G__39299;
i__39292 = G__39300;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39289);if(temp__4092__auto__)
{var seq__39289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39289__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39289__$1);{
var G__39301 = cljs.core.chunk_rest(seq__39289__$1);
var G__39302 = c__4189__auto__;
var G__39303 = cljs.core.count(c__4189__auto__);
var G__39304 = 0;
seq__39289 = G__39301;
chunk__39290 = G__39302;
count__39291 = G__39303;
i__39292 = G__39304;
continue;
}
} else
{var node = cljs.core.first(seq__39289__$1);goog.events.removeAll(node);
{
var G__39305 = cljs.core.next(seq__39289__$1);
var G__39306 = null;
var G__39307 = 0;
var G__39308 = 0;
seq__39289 = G__39305;
chunk__39290 = G__39306;
count__39291 = G__39307;
i__39292 = G__39308;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39293 = cljs.core.seq(domina.nodes(content));var chunk__39294 = null;var count__39295 = 0;var i__39296 = 0;while(true){
if((i__39296 < count__39295))
{var node = chunk__39294.cljs$core$IIndexed$_nth$arity$2(null,i__39296);goog.events.removeAll(node,type__$1);
{
var G__39309 = seq__39293;
var G__39310 = chunk__39294;
var G__39311 = count__39295;
var G__39312 = (i__39296 + 1);
seq__39293 = G__39309;
chunk__39294 = G__39310;
count__39295 = G__39311;
i__39296 = G__39312;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39293);if(temp__4092__auto__)
{var seq__39293__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39293__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39293__$1);{
var G__39313 = cljs.core.chunk_rest(seq__39293__$1);
var G__39314 = c__4189__auto__;
var G__39315 = cljs.core.count(c__4189__auto__);
var G__39316 = 0;
seq__39293 = G__39313;
chunk__39294 = G__39314;
count__39295 = G__39315;
i__39296 = G__39316;
continue;
}
} else
{var node = cljs.core.first(seq__39293__$1);goog.events.removeAll(node,type__$1);
{
var G__39317 = cljs.core.next(seq__39293__$1);
var G__39318 = null;
var G__39319 = 0;
var G__39320 = 0;
seq__39293 = G__39317;
chunk__39294 = G__39318;
count__39295 = G__39319;
i__39296 = G__39320;
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
var G__39321 = parent;
var G__39322 = cljs.core.cons(parent,so_far);
n = G__39321;
so_far = G__39322;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39331_39339 = cljs.core.seq(ancestors);var chunk__39332_39340 = null;var count__39333_39341 = 0;var i__39334_39342 = 0;while(true){
if((i__39334_39342 < count__39333_39341))
{var n_39343 = chunk__39332_39340.cljs$core$IIndexed$_nth$arity$2(null,i__39334_39342);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39343;
goog.events.fireListeners(n_39343,evt.type,true,evt);
}
{
var G__39344 = seq__39331_39339;
var G__39345 = chunk__39332_39340;
var G__39346 = count__39333_39341;
var G__39347 = (i__39334_39342 + 1);
seq__39331_39339 = G__39344;
chunk__39332_39340 = G__39345;
count__39333_39341 = G__39346;
i__39334_39342 = G__39347;
continue;
}
} else
{var temp__4092__auto___39348 = cljs.core.seq(seq__39331_39339);if(temp__4092__auto___39348)
{var seq__39331_39349__$1 = temp__4092__auto___39348;if(cljs.core.chunked_seq_QMARK_(seq__39331_39349__$1))
{var c__4189__auto___39350 = cljs.core.chunk_first(seq__39331_39349__$1);{
var G__39351 = cljs.core.chunk_rest(seq__39331_39349__$1);
var G__39352 = c__4189__auto___39350;
var G__39353 = cljs.core.count(c__4189__auto___39350);
var G__39354 = 0;
seq__39331_39339 = G__39351;
chunk__39332_39340 = G__39352;
count__39333_39341 = G__39353;
i__39334_39342 = G__39354;
continue;
}
} else
{var n_39355 = cljs.core.first(seq__39331_39349__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39355;
goog.events.fireListeners(n_39355,evt.type,true,evt);
}
{
var G__39356 = cljs.core.next(seq__39331_39349__$1);
var G__39357 = null;
var G__39358 = 0;
var G__39359 = 0;
seq__39331_39339 = G__39356;
chunk__39332_39340 = G__39357;
count__39333_39341 = G__39358;
i__39334_39342 = G__39359;
continue;
}
}
} else
{}
}
break;
}
var seq__39335_39360 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39336_39361 = null;var count__39337_39362 = 0;var i__39338_39363 = 0;while(true){
if((i__39338_39363 < count__39337_39362))
{var n_39364 = chunk__39336_39361.cljs$core$IIndexed$_nth$arity$2(null,i__39338_39363);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39364;
goog.events.fireListeners(n_39364,evt.type,false,evt);
}
{
var G__39365 = seq__39335_39360;
var G__39366 = chunk__39336_39361;
var G__39367 = count__39337_39362;
var G__39368 = (i__39338_39363 + 1);
seq__39335_39360 = G__39365;
chunk__39336_39361 = G__39366;
count__39337_39362 = G__39367;
i__39338_39363 = G__39368;
continue;
}
} else
{var temp__4092__auto___39369 = cljs.core.seq(seq__39335_39360);if(temp__4092__auto___39369)
{var seq__39335_39370__$1 = temp__4092__auto___39369;if(cljs.core.chunked_seq_QMARK_(seq__39335_39370__$1))
{var c__4189__auto___39371 = cljs.core.chunk_first(seq__39335_39370__$1);{
var G__39372 = cljs.core.chunk_rest(seq__39335_39370__$1);
var G__39373 = c__4189__auto___39371;
var G__39374 = cljs.core.count(c__4189__auto___39371);
var G__39375 = 0;
seq__39335_39360 = G__39372;
chunk__39336_39361 = G__39373;
count__39337_39362 = G__39374;
i__39338_39363 = G__39375;
continue;
}
} else
{var n_39376 = cljs.core.first(seq__39335_39370__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39376;
goog.events.fireListeners(n_39376,evt.type,false,evt);
}
{
var G__39377 = cljs.core.next(seq__39335_39370__$1);
var G__39378 = null;
var G__39379 = 0;
var G__39380 = 0;
seq__39335_39360 = G__39377;
chunk__39336_39361 = G__39378;
count__39337_39362 = G__39379;
i__39338_39363 = G__39380;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39387_39393 = cljs.core.seq(evt_map);var chunk__39388_39394 = null;var count__39389_39395 = 0;var i__39390_39396 = 0;while(true){
if((i__39390_39396 < count__39389_39395))
{var vec__39391_39397 = chunk__39388_39394.cljs$core$IIndexed$_nth$arity$2(null,i__39390_39396);var k_39398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39391_39397,0,null);var v_39399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39391_39397,1,null);(evt[k_39398] = v_39399);
{
var G__39400 = seq__39387_39393;
var G__39401 = chunk__39388_39394;
var G__39402 = count__39389_39395;
var G__39403 = (i__39390_39396 + 1);
seq__39387_39393 = G__39400;
chunk__39388_39394 = G__39401;
count__39389_39395 = G__39402;
i__39390_39396 = G__39403;
continue;
}
} else
{var temp__4092__auto___39404 = cljs.core.seq(seq__39387_39393);if(temp__4092__auto___39404)
{var seq__39387_39405__$1 = temp__4092__auto___39404;if(cljs.core.chunked_seq_QMARK_(seq__39387_39405__$1))
{var c__4189__auto___39406 = cljs.core.chunk_first(seq__39387_39405__$1);{
var G__39407 = cljs.core.chunk_rest(seq__39387_39405__$1);
var G__39408 = c__4189__auto___39406;
var G__39409 = cljs.core.count(c__4189__auto___39406);
var G__39410 = 0;
seq__39387_39393 = G__39407;
chunk__39388_39394 = G__39408;
count__39389_39395 = G__39409;
i__39390_39396 = G__39410;
continue;
}
} else
{var vec__39392_39411 = cljs.core.first(seq__39387_39405__$1);var k_39412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392_39411,0,null);var v_39413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392_39411,1,null);(evt[k_39412] = v_39413);
{
var G__39414 = cljs.core.next(seq__39387_39405__$1);
var G__39415 = null;
var G__39416 = 0;
var G__39417 = 0;
seq__39387_39393 = G__39414;
chunk__39388_39394 = G__39415;
count__39389_39395 = G__39416;
i__39390_39396 = G__39417;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39418_SHARP_){return goog.events.getListeners(p1__39418_SHARP_,type__$1,false);
}),domina.nodes(content));
});
