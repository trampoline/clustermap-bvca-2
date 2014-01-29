// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26319 = {};return obj26319;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26323 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26323 = (function (evt,f,create_listener_function,meta26324){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26324 = meta26324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26323.cljs$lang$type = true;
domina.events.t26323.cljs$lang$ctorStr = "domina.events/t26323";
domina.events.t26323.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26323");
});
domina.events.t26323.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26323.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26323.prototype.domina$events$Event$ = true;
domina.events.t26323.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26323.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26323.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26323.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26323.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26323.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26325){var self__ = this;
var _26325__$1 = this;return self__.meta26324;
});
domina.events.t26323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26325,meta26324__$1){var self__ = this;
var _26325__$1 = this;return (new domina.events.t26323(self__.evt,self__.f,self__.create_listener_function,meta26324__$1));
});
domina.events.__GT_t26323 = (function __GT_t26323(evt__$1,f__$1,create_listener_function__$1,meta26324){return (new domina.events.t26323(evt__$1,f__$1,create_listener_function__$1,meta26324));
});
}
return (new domina.events.t26323(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26323 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26323 = (function (evt,f,create_listener_function,meta26324){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26324 = meta26324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26323.cljs$lang$type = true;
domina.events.t26323.cljs$lang$ctorStr = "domina.events/t26323";
domina.events.t26323.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26323");
});
domina.events.t26323.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26323.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26323.prototype.domina$events$Event$ = true;
domina.events.t26323.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26323.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26323.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26323.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26323.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26323.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26325){var self__ = this;
var _26325__$1 = this;return self__.meta26324;
});
domina.events.t26323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26325,meta26324__$1){var self__ = this;
var _26325__$1 = this;return (new domina.events.t26323(self__.evt,self__.f,self__.create_listener_function,meta26324__$1));
});
domina.events.__GT_t26323 = (function __GT_t26323(evt__$1,f__$1,create_listener_function__$1,meta26324){return (new domina.events.t26323(evt__$1,f__$1,create_listener_function__$1,meta26324));
});
}
return (new domina.events.t26323(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26330(s__26331){return (new cljs.core.LazySeq(null,(function (){var s__26331__$1 = s__26331;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26331__$1);if(temp__4092__auto__)
{var s__26331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26331__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26331__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26333 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26332 = 0;while(true){
if((i__26332 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26332);cljs.core.chunk_append(b__26333,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26334 = (i__26332 + 1);
i__26332 = G__26334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26333),iter__26330(cljs.core.chunk_rest(s__26331__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26333),null);
}
} else
{var node = cljs.core.first(s__26331__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26330(cljs.core.rest(s__26331__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26343 = cljs.core.seq(domina.nodes(content));var chunk__26344 = null;var count__26345 = 0;var i__26346 = 0;while(true){
if((i__26346 < count__26345))
{var node = chunk__26344.cljs$core$IIndexed$_nth$arity$2(null,i__26346);goog.events.removeAll(node);
{
var G__26351 = seq__26343;
var G__26352 = chunk__26344;
var G__26353 = count__26345;
var G__26354 = (i__26346 + 1);
seq__26343 = G__26351;
chunk__26344 = G__26352;
count__26345 = G__26353;
i__26346 = G__26354;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26343);if(temp__4092__auto__)
{var seq__26343__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26343__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26343__$1);{
var G__26355 = cljs.core.chunk_rest(seq__26343__$1);
var G__26356 = c__4148__auto__;
var G__26357 = cljs.core.count(c__4148__auto__);
var G__26358 = 0;
seq__26343 = G__26355;
chunk__26344 = G__26356;
count__26345 = G__26357;
i__26346 = G__26358;
continue;
}
} else
{var node = cljs.core.first(seq__26343__$1);goog.events.removeAll(node);
{
var G__26359 = cljs.core.next(seq__26343__$1);
var G__26360 = null;
var G__26361 = 0;
var G__26362 = 0;
seq__26343 = G__26359;
chunk__26344 = G__26360;
count__26345 = G__26361;
i__26346 = G__26362;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26347 = cljs.core.seq(domina.nodes(content));var chunk__26348 = null;var count__26349 = 0;var i__26350 = 0;while(true){
if((i__26350 < count__26349))
{var node = chunk__26348.cljs$core$IIndexed$_nth$arity$2(null,i__26350);goog.events.removeAll(node,type__$1);
{
var G__26363 = seq__26347;
var G__26364 = chunk__26348;
var G__26365 = count__26349;
var G__26366 = (i__26350 + 1);
seq__26347 = G__26363;
chunk__26348 = G__26364;
count__26349 = G__26365;
i__26350 = G__26366;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26347);if(temp__4092__auto__)
{var seq__26347__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26347__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26347__$1);{
var G__26367 = cljs.core.chunk_rest(seq__26347__$1);
var G__26368 = c__4148__auto__;
var G__26369 = cljs.core.count(c__4148__auto__);
var G__26370 = 0;
seq__26347 = G__26367;
chunk__26348 = G__26368;
count__26349 = G__26369;
i__26350 = G__26370;
continue;
}
} else
{var node = cljs.core.first(seq__26347__$1);goog.events.removeAll(node,type__$1);
{
var G__26371 = cljs.core.next(seq__26347__$1);
var G__26372 = null;
var G__26373 = 0;
var G__26374 = 0;
seq__26347 = G__26371;
chunk__26348 = G__26372;
count__26349 = G__26373;
i__26350 = G__26374;
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
var G__26375 = parent;
var G__26376 = cljs.core.cons(parent,so_far);
n = G__26375;
so_far = G__26376;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26385_26393 = cljs.core.seq(ancestors);var chunk__26386_26394 = null;var count__26387_26395 = 0;var i__26388_26396 = 0;while(true){
if((i__26388_26396 < count__26387_26395))
{var n_26397 = chunk__26386_26394.cljs$core$IIndexed$_nth$arity$2(null,i__26388_26396);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26397;
goog.events.fireListeners(n_26397,evt.type,true,evt);
}
{
var G__26398 = seq__26385_26393;
var G__26399 = chunk__26386_26394;
var G__26400 = count__26387_26395;
var G__26401 = (i__26388_26396 + 1);
seq__26385_26393 = G__26398;
chunk__26386_26394 = G__26399;
count__26387_26395 = G__26400;
i__26388_26396 = G__26401;
continue;
}
} else
{var temp__4092__auto___26402 = cljs.core.seq(seq__26385_26393);if(temp__4092__auto___26402)
{var seq__26385_26403__$1 = temp__4092__auto___26402;if(cljs.core.chunked_seq_QMARK_(seq__26385_26403__$1))
{var c__4148__auto___26404 = cljs.core.chunk_first(seq__26385_26403__$1);{
var G__26405 = cljs.core.chunk_rest(seq__26385_26403__$1);
var G__26406 = c__4148__auto___26404;
var G__26407 = cljs.core.count(c__4148__auto___26404);
var G__26408 = 0;
seq__26385_26393 = G__26405;
chunk__26386_26394 = G__26406;
count__26387_26395 = G__26407;
i__26388_26396 = G__26408;
continue;
}
} else
{var n_26409 = cljs.core.first(seq__26385_26403__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26409;
goog.events.fireListeners(n_26409,evt.type,true,evt);
}
{
var G__26410 = cljs.core.next(seq__26385_26403__$1);
var G__26411 = null;
var G__26412 = 0;
var G__26413 = 0;
seq__26385_26393 = G__26410;
chunk__26386_26394 = G__26411;
count__26387_26395 = G__26412;
i__26388_26396 = G__26413;
continue;
}
}
} else
{}
}
break;
}
var seq__26389_26414 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26390_26415 = null;var count__26391_26416 = 0;var i__26392_26417 = 0;while(true){
if((i__26392_26417 < count__26391_26416))
{var n_26418 = chunk__26390_26415.cljs$core$IIndexed$_nth$arity$2(null,i__26392_26417);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26418;
goog.events.fireListeners(n_26418,evt.type,false,evt);
}
{
var G__26419 = seq__26389_26414;
var G__26420 = chunk__26390_26415;
var G__26421 = count__26391_26416;
var G__26422 = (i__26392_26417 + 1);
seq__26389_26414 = G__26419;
chunk__26390_26415 = G__26420;
count__26391_26416 = G__26421;
i__26392_26417 = G__26422;
continue;
}
} else
{var temp__4092__auto___26423 = cljs.core.seq(seq__26389_26414);if(temp__4092__auto___26423)
{var seq__26389_26424__$1 = temp__4092__auto___26423;if(cljs.core.chunked_seq_QMARK_(seq__26389_26424__$1))
{var c__4148__auto___26425 = cljs.core.chunk_first(seq__26389_26424__$1);{
var G__26426 = cljs.core.chunk_rest(seq__26389_26424__$1);
var G__26427 = c__4148__auto___26425;
var G__26428 = cljs.core.count(c__4148__auto___26425);
var G__26429 = 0;
seq__26389_26414 = G__26426;
chunk__26390_26415 = G__26427;
count__26391_26416 = G__26428;
i__26392_26417 = G__26429;
continue;
}
} else
{var n_26430 = cljs.core.first(seq__26389_26424__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26430;
goog.events.fireListeners(n_26430,evt.type,false,evt);
}
{
var G__26431 = cljs.core.next(seq__26389_26424__$1);
var G__26432 = null;
var G__26433 = 0;
var G__26434 = 0;
seq__26389_26414 = G__26431;
chunk__26390_26415 = G__26432;
count__26391_26416 = G__26433;
i__26392_26417 = G__26434;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26441_26447 = cljs.core.seq(evt_map);var chunk__26442_26448 = null;var count__26443_26449 = 0;var i__26444_26450 = 0;while(true){
if((i__26444_26450 < count__26443_26449))
{var vec__26445_26451 = chunk__26442_26448.cljs$core$IIndexed$_nth$arity$2(null,i__26444_26450);var k_26452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445_26451,0,null);var v_26453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26445_26451,1,null);(evt[k_26452] = v_26453);
{
var G__26454 = seq__26441_26447;
var G__26455 = chunk__26442_26448;
var G__26456 = count__26443_26449;
var G__26457 = (i__26444_26450 + 1);
seq__26441_26447 = G__26454;
chunk__26442_26448 = G__26455;
count__26443_26449 = G__26456;
i__26444_26450 = G__26457;
continue;
}
} else
{var temp__4092__auto___26458 = cljs.core.seq(seq__26441_26447);if(temp__4092__auto___26458)
{var seq__26441_26459__$1 = temp__4092__auto___26458;if(cljs.core.chunked_seq_QMARK_(seq__26441_26459__$1))
{var c__4148__auto___26460 = cljs.core.chunk_first(seq__26441_26459__$1);{
var G__26461 = cljs.core.chunk_rest(seq__26441_26459__$1);
var G__26462 = c__4148__auto___26460;
var G__26463 = cljs.core.count(c__4148__auto___26460);
var G__26464 = 0;
seq__26441_26447 = G__26461;
chunk__26442_26448 = G__26462;
count__26443_26449 = G__26463;
i__26444_26450 = G__26464;
continue;
}
} else
{var vec__26446_26465 = cljs.core.first(seq__26441_26459__$1);var k_26466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26446_26465,0,null);var v_26467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26446_26465,1,null);(evt[k_26466] = v_26467);
{
var G__26468 = cljs.core.next(seq__26441_26459__$1);
var G__26469 = null;
var G__26470 = 0;
var G__26471 = 0;
seq__26441_26447 = G__26468;
chunk__26442_26448 = G__26469;
count__26443_26449 = G__26470;
i__26444_26450 = G__26471;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26472_SHARP_){return goog.events.getListeners(p1__26472_SHARP_,type__$1,false);
}),domina.nodes(content));
});
