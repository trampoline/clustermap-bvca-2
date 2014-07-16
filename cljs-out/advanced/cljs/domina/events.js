// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj42231 = {};return obj42231;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t42235 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42235 = (function (evt,f,create_listener_function,meta42236){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42236 = meta42236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42235.cljs$lang$type = true;
domina.events.t42235.cljs$lang$ctorStr = "domina.events/t42235";
domina.events.t42235.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42235");
});
domina.events.t42235.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42235.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42235.prototype.domina$events$Event$ = true;
domina.events.t42235.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42235.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42235.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42235.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42235.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42235.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42237){var self__ = this;
var _42237__$1 = this;return self__.meta42236;
});
domina.events.t42235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42237,meta42236__$1){var self__ = this;
var _42237__$1 = this;return (new domina.events.t42235(self__.evt,self__.f,self__.create_listener_function,meta42236__$1));
});
domina.events.__GT_t42235 = (function __GT_t42235(evt__$1,f__$1,create_listener_function__$1,meta42236){return (new domina.events.t42235(evt__$1,f__$1,create_listener_function__$1,meta42236));
});
}
return (new domina.events.t42235(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t42235 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42235 = (function (evt,f,create_listener_function,meta42236){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42236 = meta42236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42235.cljs$lang$type = true;
domina.events.t42235.cljs$lang$ctorStr = "domina.events/t42235";
domina.events.t42235.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t42235");
});
domina.events.t42235.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t42235.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t42235.prototype.domina$events$Event$ = true;
domina.events.t42235.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42235.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42235.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42235.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42235.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42235.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42237){var self__ = this;
var _42237__$1 = this;return self__.meta42236;
});
domina.events.t42235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42237,meta42236__$1){var self__ = this;
var _42237__$1 = this;return (new domina.events.t42235(self__.evt,self__.f,self__.create_listener_function,meta42236__$1));
});
domina.events.__GT_t42235 = (function __GT_t42235(evt__$1,f__$1,create_listener_function__$1,meta42236){return (new domina.events.t42235(evt__$1,f__$1,create_listener_function__$1,meta42236));
});
}
return (new domina.events.t42235(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__42242(s__42243){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__42243__$1 = s__42243;while(true){
var temp__4126__auto__ = cljs.core.seq(s__42243__$1);if(temp__4126__auto__)
{var s__42243__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__42243__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__42243__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__42245 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__42244 = (0);while(true){
if((i__42244 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__42244);cljs.core.chunk_append(b__42245,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__42246 = (i__42244 + (1));
i__42244 = G__42246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__42245),iter__42242(cljs.core.chunk_rest(s__42243__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__42245),null);
}
} else
{var node = cljs.core.first(s__42243__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__42242(cljs.core.rest(s__42243__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__42255 = cljs.core.seq(domina.nodes(content));var chunk__42256 = null;var count__42257 = (0);var i__42258 = (0);while(true){
if((i__42258 < count__42257))
{var node = chunk__42256.cljs$core$IIndexed$_nth$arity$2(null,i__42258);goog.events.removeAll(node);
{
var G__42263 = seq__42255;
var G__42264 = chunk__42256;
var G__42265 = count__42257;
var G__42266 = (i__42258 + (1));
seq__42255 = G__42263;
chunk__42256 = G__42264;
count__42257 = G__42265;
i__42258 = G__42266;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42255);if(temp__4126__auto__)
{var seq__42255__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42255__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42255__$1);{
var G__42267 = cljs.core.chunk_rest(seq__42255__$1);
var G__42268 = c__4299__auto__;
var G__42269 = cljs.core.count(c__4299__auto__);
var G__42270 = (0);
seq__42255 = G__42267;
chunk__42256 = G__42268;
count__42257 = G__42269;
i__42258 = G__42270;
continue;
}
} else
{var node = cljs.core.first(seq__42255__$1);goog.events.removeAll(node);
{
var G__42271 = cljs.core.next(seq__42255__$1);
var G__42272 = null;
var G__42273 = (0);
var G__42274 = (0);
seq__42255 = G__42271;
chunk__42256 = G__42272;
count__42257 = G__42273;
i__42258 = G__42274;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__42259 = cljs.core.seq(domina.nodes(content));var chunk__42260 = null;var count__42261 = (0);var i__42262 = (0);while(true){
if((i__42262 < count__42261))
{var node = chunk__42260.cljs$core$IIndexed$_nth$arity$2(null,i__42262);goog.events.removeAll(node,type__$1);
{
var G__42275 = seq__42259;
var G__42276 = chunk__42260;
var G__42277 = count__42261;
var G__42278 = (i__42262 + (1));
seq__42259 = G__42275;
chunk__42260 = G__42276;
count__42261 = G__42277;
i__42262 = G__42278;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42259);if(temp__4126__auto__)
{var seq__42259__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42259__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42259__$1);{
var G__42279 = cljs.core.chunk_rest(seq__42259__$1);
var G__42280 = c__4299__auto__;
var G__42281 = cljs.core.count(c__4299__auto__);
var G__42282 = (0);
seq__42259 = G__42279;
chunk__42260 = G__42280;
count__42261 = G__42281;
i__42262 = G__42282;
continue;
}
} else
{var node = cljs.core.first(seq__42259__$1);goog.events.removeAll(node,type__$1);
{
var G__42283 = cljs.core.next(seq__42259__$1);
var G__42284 = null;
var G__42285 = (0);
var G__42286 = (0);
seq__42259 = G__42283;
chunk__42260 = G__42284;
count__42261 = G__42285;
i__42262 = G__42286;
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
var G__42287 = parent;
var G__42288 = cljs.core.cons(parent,so_far);
n = G__42287;
so_far = G__42288;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__42297_42305 = cljs.core.seq(ancestors);var chunk__42298_42306 = null;var count__42299_42307 = (0);var i__42300_42308 = (0);while(true){
if((i__42300_42308 < count__42299_42307))
{var n_42309 = chunk__42298_42306.cljs$core$IIndexed$_nth$arity$2(null,i__42300_42308);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42309;
goog.events.fireListeners(n_42309,evt.type,true,evt);
}
{
var G__42310 = seq__42297_42305;
var G__42311 = chunk__42298_42306;
var G__42312 = count__42299_42307;
var G__42313 = (i__42300_42308 + (1));
seq__42297_42305 = G__42310;
chunk__42298_42306 = G__42311;
count__42299_42307 = G__42312;
i__42300_42308 = G__42313;
continue;
}
} else
{var temp__4126__auto___42314 = cljs.core.seq(seq__42297_42305);if(temp__4126__auto___42314)
{var seq__42297_42315__$1 = temp__4126__auto___42314;if(cljs.core.chunked_seq_QMARK_(seq__42297_42315__$1))
{var c__4299__auto___42316 = cljs.core.chunk_first(seq__42297_42315__$1);{
var G__42317 = cljs.core.chunk_rest(seq__42297_42315__$1);
var G__42318 = c__4299__auto___42316;
var G__42319 = cljs.core.count(c__4299__auto___42316);
var G__42320 = (0);
seq__42297_42305 = G__42317;
chunk__42298_42306 = G__42318;
count__42299_42307 = G__42319;
i__42300_42308 = G__42320;
continue;
}
} else
{var n_42321 = cljs.core.first(seq__42297_42315__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42321;
goog.events.fireListeners(n_42321,evt.type,true,evt);
}
{
var G__42322 = cljs.core.next(seq__42297_42315__$1);
var G__42323 = null;
var G__42324 = (0);
var G__42325 = (0);
seq__42297_42305 = G__42322;
chunk__42298_42306 = G__42323;
count__42299_42307 = G__42324;
i__42300_42308 = G__42325;
continue;
}
}
} else
{}
}
break;
}
var seq__42301_42326 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__42302_42327 = null;var count__42303_42328 = (0);var i__42304_42329 = (0);while(true){
if((i__42304_42329 < count__42303_42328))
{var n_42330 = chunk__42302_42327.cljs$core$IIndexed$_nth$arity$2(null,i__42304_42329);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42330;
goog.events.fireListeners(n_42330,evt.type,false,evt);
}
{
var G__42331 = seq__42301_42326;
var G__42332 = chunk__42302_42327;
var G__42333 = count__42303_42328;
var G__42334 = (i__42304_42329 + (1));
seq__42301_42326 = G__42331;
chunk__42302_42327 = G__42332;
count__42303_42328 = G__42333;
i__42304_42329 = G__42334;
continue;
}
} else
{var temp__4126__auto___42335 = cljs.core.seq(seq__42301_42326);if(temp__4126__auto___42335)
{var seq__42301_42336__$1 = temp__4126__auto___42335;if(cljs.core.chunked_seq_QMARK_(seq__42301_42336__$1))
{var c__4299__auto___42337 = cljs.core.chunk_first(seq__42301_42336__$1);{
var G__42338 = cljs.core.chunk_rest(seq__42301_42336__$1);
var G__42339 = c__4299__auto___42337;
var G__42340 = cljs.core.count(c__4299__auto___42337);
var G__42341 = (0);
seq__42301_42326 = G__42338;
chunk__42302_42327 = G__42339;
count__42303_42328 = G__42340;
i__42304_42329 = G__42341;
continue;
}
} else
{var n_42342 = cljs.core.first(seq__42301_42336__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42342;
goog.events.fireListeners(n_42342,evt.type,false,evt);
}
{
var G__42343 = cljs.core.next(seq__42301_42336__$1);
var G__42344 = null;
var G__42345 = (0);
var G__42346 = (0);
seq__42301_42326 = G__42343;
chunk__42302_42327 = G__42344;
count__42303_42328 = G__42345;
i__42304_42329 = G__42346;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__42353_42359 = cljs.core.seq(evt_map);var chunk__42354_42360 = null;var count__42355_42361 = (0);var i__42356_42362 = (0);while(true){
if((i__42356_42362 < count__42355_42361))
{var vec__42357_42363 = chunk__42354_42360.cljs$core$IIndexed$_nth$arity$2(null,i__42356_42362);var k_42364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357_42363,(0),null);var v_42365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42357_42363,(1),null);(evt[k_42364] = v_42365);
{
var G__42366 = seq__42353_42359;
var G__42367 = chunk__42354_42360;
var G__42368 = count__42355_42361;
var G__42369 = (i__42356_42362 + (1));
seq__42353_42359 = G__42366;
chunk__42354_42360 = G__42367;
count__42355_42361 = G__42368;
i__42356_42362 = G__42369;
continue;
}
} else
{var temp__4126__auto___42370 = cljs.core.seq(seq__42353_42359);if(temp__4126__auto___42370)
{var seq__42353_42371__$1 = temp__4126__auto___42370;if(cljs.core.chunked_seq_QMARK_(seq__42353_42371__$1))
{var c__4299__auto___42372 = cljs.core.chunk_first(seq__42353_42371__$1);{
var G__42373 = cljs.core.chunk_rest(seq__42353_42371__$1);
var G__42374 = c__4299__auto___42372;
var G__42375 = cljs.core.count(c__4299__auto___42372);
var G__42376 = (0);
seq__42353_42359 = G__42373;
chunk__42354_42360 = G__42374;
count__42355_42361 = G__42375;
i__42356_42362 = G__42376;
continue;
}
} else
{var vec__42358_42377 = cljs.core.first(seq__42353_42371__$1);var k_42378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42358_42377,(0),null);var v_42379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42358_42377,(1),null);(evt[k_42378] = v_42379);
{
var G__42380 = cljs.core.next(seq__42353_42371__$1);
var G__42381 = null;
var G__42382 = (0);
var G__42383 = (0);
seq__42353_42359 = G__42380;
chunk__42354_42360 = G__42381;
count__42355_42361 = G__42382;
i__42356_42362 = G__42383;
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
return (function (p1__42384_SHARP_){return goog.events.getListeners(p1__42384_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
