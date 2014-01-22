// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25261 = {};return obj25261;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25265 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25265 = (function (evt,f,create_listener_function,meta25266){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25266 = meta25266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25265.cljs$lang$type = true;
domina.events.t25265.cljs$lang$ctorStr = "domina.events/t25265";
domina.events.t25265.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25265");
});
domina.events.t25265.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25265.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25265.prototype.domina$events$Event$ = true;
domina.events.t25265.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25265.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25265.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25265.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25265.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25265.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25267){var self__ = this;
var _25267__$1 = this;return self__.meta25266;
});
domina.events.t25265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25267,meta25266__$1){var self__ = this;
var _25267__$1 = this;return (new domina.events.t25265(self__.evt,self__.f,self__.create_listener_function,meta25266__$1));
});
domina.events.__GT_t25265 = (function __GT_t25265(evt__$1,f__$1,create_listener_function__$1,meta25266){return (new domina.events.t25265(evt__$1,f__$1,create_listener_function__$1,meta25266));
});
}
return (new domina.events.t25265(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25265 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25265 = (function (evt,f,create_listener_function,meta25266){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25266 = meta25266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25265.cljs$lang$type = true;
domina.events.t25265.cljs$lang$ctorStr = "domina.events/t25265";
domina.events.t25265.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25265");
});
domina.events.t25265.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25265.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25265.prototype.domina$events$Event$ = true;
domina.events.t25265.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25265.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25265.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25265.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25265.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25265.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25267){var self__ = this;
var _25267__$1 = this;return self__.meta25266;
});
domina.events.t25265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25267,meta25266__$1){var self__ = this;
var _25267__$1 = this;return (new domina.events.t25265(self__.evt,self__.f,self__.create_listener_function,meta25266__$1));
});
domina.events.__GT_t25265 = (function __GT_t25265(evt__$1,f__$1,create_listener_function__$1,meta25266){return (new domina.events.t25265(evt__$1,f__$1,create_listener_function__$1,meta25266));
});
}
return (new domina.events.t25265(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25272(s__25273){return (new cljs.core.LazySeq(null,(function (){var s__25273__$1 = s__25273;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25273__$1);if(temp__4092__auto__)
{var s__25273__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25273__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25273__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25275 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25274 = 0;while(true){
if((i__25274 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25274);cljs.core.chunk_append(b__25275,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25276 = (i__25274 + 1);
i__25274 = G__25276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25275),iter__25272(cljs.core.chunk_rest(s__25273__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25275),null);
}
} else
{var node = cljs.core.first(s__25273__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25272(cljs.core.rest(s__25273__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25285 = cljs.core.seq(domina.nodes(content));var chunk__25286 = null;var count__25287 = 0;var i__25288 = 0;while(true){
if((i__25288 < count__25287))
{var node = chunk__25286.cljs$core$IIndexed$_nth$arity$2(null,i__25288);goog.events.removeAll(node);
{
var G__25293 = seq__25285;
var G__25294 = chunk__25286;
var G__25295 = count__25287;
var G__25296 = (i__25288 + 1);
seq__25285 = G__25293;
chunk__25286 = G__25294;
count__25287 = G__25295;
i__25288 = G__25296;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25285);if(temp__4092__auto__)
{var seq__25285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25285__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25285__$1);{
var G__25297 = cljs.core.chunk_rest(seq__25285__$1);
var G__25298 = c__4148__auto__;
var G__25299 = cljs.core.count(c__4148__auto__);
var G__25300 = 0;
seq__25285 = G__25297;
chunk__25286 = G__25298;
count__25287 = G__25299;
i__25288 = G__25300;
continue;
}
} else
{var node = cljs.core.first(seq__25285__$1);goog.events.removeAll(node);
{
var G__25301 = cljs.core.next(seq__25285__$1);
var G__25302 = null;
var G__25303 = 0;
var G__25304 = 0;
seq__25285 = G__25301;
chunk__25286 = G__25302;
count__25287 = G__25303;
i__25288 = G__25304;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25289 = cljs.core.seq(domina.nodes(content));var chunk__25290 = null;var count__25291 = 0;var i__25292 = 0;while(true){
if((i__25292 < count__25291))
{var node = chunk__25290.cljs$core$IIndexed$_nth$arity$2(null,i__25292);goog.events.removeAll(node,type__$1);
{
var G__25305 = seq__25289;
var G__25306 = chunk__25290;
var G__25307 = count__25291;
var G__25308 = (i__25292 + 1);
seq__25289 = G__25305;
chunk__25290 = G__25306;
count__25291 = G__25307;
i__25292 = G__25308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25289);if(temp__4092__auto__)
{var seq__25289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25289__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25289__$1);{
var G__25309 = cljs.core.chunk_rest(seq__25289__$1);
var G__25310 = c__4148__auto__;
var G__25311 = cljs.core.count(c__4148__auto__);
var G__25312 = 0;
seq__25289 = G__25309;
chunk__25290 = G__25310;
count__25291 = G__25311;
i__25292 = G__25312;
continue;
}
} else
{var node = cljs.core.first(seq__25289__$1);goog.events.removeAll(node,type__$1);
{
var G__25313 = cljs.core.next(seq__25289__$1);
var G__25314 = null;
var G__25315 = 0;
var G__25316 = 0;
seq__25289 = G__25313;
chunk__25290 = G__25314;
count__25291 = G__25315;
i__25292 = G__25316;
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
var G__25317 = parent;
var G__25318 = cljs.core.cons(parent,so_far);
n = G__25317;
so_far = G__25318;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25327_25335 = cljs.core.seq(ancestors);var chunk__25328_25336 = null;var count__25329_25337 = 0;var i__25330_25338 = 0;while(true){
if((i__25330_25338 < count__25329_25337))
{var n_25339 = chunk__25328_25336.cljs$core$IIndexed$_nth$arity$2(null,i__25330_25338);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25339;
goog.events.fireListeners(n_25339,evt.type,true,evt);
}
{
var G__25340 = seq__25327_25335;
var G__25341 = chunk__25328_25336;
var G__25342 = count__25329_25337;
var G__25343 = (i__25330_25338 + 1);
seq__25327_25335 = G__25340;
chunk__25328_25336 = G__25341;
count__25329_25337 = G__25342;
i__25330_25338 = G__25343;
continue;
}
} else
{var temp__4092__auto___25344 = cljs.core.seq(seq__25327_25335);if(temp__4092__auto___25344)
{var seq__25327_25345__$1 = temp__4092__auto___25344;if(cljs.core.chunked_seq_QMARK_(seq__25327_25345__$1))
{var c__4148__auto___25346 = cljs.core.chunk_first(seq__25327_25345__$1);{
var G__25347 = cljs.core.chunk_rest(seq__25327_25345__$1);
var G__25348 = c__4148__auto___25346;
var G__25349 = cljs.core.count(c__4148__auto___25346);
var G__25350 = 0;
seq__25327_25335 = G__25347;
chunk__25328_25336 = G__25348;
count__25329_25337 = G__25349;
i__25330_25338 = G__25350;
continue;
}
} else
{var n_25351 = cljs.core.first(seq__25327_25345__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25351;
goog.events.fireListeners(n_25351,evt.type,true,evt);
}
{
var G__25352 = cljs.core.next(seq__25327_25345__$1);
var G__25353 = null;
var G__25354 = 0;
var G__25355 = 0;
seq__25327_25335 = G__25352;
chunk__25328_25336 = G__25353;
count__25329_25337 = G__25354;
i__25330_25338 = G__25355;
continue;
}
}
} else
{}
}
break;
}
var seq__25331_25356 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25332_25357 = null;var count__25333_25358 = 0;var i__25334_25359 = 0;while(true){
if((i__25334_25359 < count__25333_25358))
{var n_25360 = chunk__25332_25357.cljs$core$IIndexed$_nth$arity$2(null,i__25334_25359);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25360;
goog.events.fireListeners(n_25360,evt.type,false,evt);
}
{
var G__25361 = seq__25331_25356;
var G__25362 = chunk__25332_25357;
var G__25363 = count__25333_25358;
var G__25364 = (i__25334_25359 + 1);
seq__25331_25356 = G__25361;
chunk__25332_25357 = G__25362;
count__25333_25358 = G__25363;
i__25334_25359 = G__25364;
continue;
}
} else
{var temp__4092__auto___25365 = cljs.core.seq(seq__25331_25356);if(temp__4092__auto___25365)
{var seq__25331_25366__$1 = temp__4092__auto___25365;if(cljs.core.chunked_seq_QMARK_(seq__25331_25366__$1))
{var c__4148__auto___25367 = cljs.core.chunk_first(seq__25331_25366__$1);{
var G__25368 = cljs.core.chunk_rest(seq__25331_25366__$1);
var G__25369 = c__4148__auto___25367;
var G__25370 = cljs.core.count(c__4148__auto___25367);
var G__25371 = 0;
seq__25331_25356 = G__25368;
chunk__25332_25357 = G__25369;
count__25333_25358 = G__25370;
i__25334_25359 = G__25371;
continue;
}
} else
{var n_25372 = cljs.core.first(seq__25331_25366__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25372;
goog.events.fireListeners(n_25372,evt.type,false,evt);
}
{
var G__25373 = cljs.core.next(seq__25331_25366__$1);
var G__25374 = null;
var G__25375 = 0;
var G__25376 = 0;
seq__25331_25356 = G__25373;
chunk__25332_25357 = G__25374;
count__25333_25358 = G__25375;
i__25334_25359 = G__25376;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__25383_25389 = cljs.core.seq(evt_map);var chunk__25384_25390 = null;var count__25385_25391 = 0;var i__25386_25392 = 0;while(true){
if((i__25386_25392 < count__25385_25391))
{var vec__25387_25393 = chunk__25384_25390.cljs$core$IIndexed$_nth$arity$2(null,i__25386_25392);var k_25394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25387_25393,0,null);var v_25395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25387_25393,1,null);(evt[k_25394] = v_25395);
{
var G__25396 = seq__25383_25389;
var G__25397 = chunk__25384_25390;
var G__25398 = count__25385_25391;
var G__25399 = (i__25386_25392 + 1);
seq__25383_25389 = G__25396;
chunk__25384_25390 = G__25397;
count__25385_25391 = G__25398;
i__25386_25392 = G__25399;
continue;
}
} else
{var temp__4092__auto___25400 = cljs.core.seq(seq__25383_25389);if(temp__4092__auto___25400)
{var seq__25383_25401__$1 = temp__4092__auto___25400;if(cljs.core.chunked_seq_QMARK_(seq__25383_25401__$1))
{var c__4148__auto___25402 = cljs.core.chunk_first(seq__25383_25401__$1);{
var G__25403 = cljs.core.chunk_rest(seq__25383_25401__$1);
var G__25404 = c__4148__auto___25402;
var G__25405 = cljs.core.count(c__4148__auto___25402);
var G__25406 = 0;
seq__25383_25389 = G__25403;
chunk__25384_25390 = G__25404;
count__25385_25391 = G__25405;
i__25386_25392 = G__25406;
continue;
}
} else
{var vec__25388_25407 = cljs.core.first(seq__25383_25401__$1);var k_25408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388_25407,0,null);var v_25409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25388_25407,1,null);(evt[k_25408] = v_25409);
{
var G__25410 = cljs.core.next(seq__25383_25401__$1);
var G__25411 = null;
var G__25412 = 0;
var G__25413 = 0;
seq__25383_25389 = G__25410;
chunk__25384_25390 = G__25411;
count__25385_25391 = G__25412;
i__25386_25392 = G__25413;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__25414_SHARP_){return goog.events.getListeners(p1__25414_SHARP_,type__$1,false);
}),domina.nodes(content));
});
