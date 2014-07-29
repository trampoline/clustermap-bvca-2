// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj43122 = {};return obj43122;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t43126 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43126 = (function (evt,f,create_listener_function,meta43127){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43127 = meta43127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43126.cljs$lang$type = true;
domina.events.t43126.cljs$lang$ctorStr = "domina.events/t43126";
domina.events.t43126.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t43126");
});
domina.events.t43126.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43126.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t43126.prototype.domina$events$Event$ = true;
domina.events.t43126.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43126.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43126.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43126.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43126.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43126.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43128){var self__ = this;
var _43128__$1 = this;return self__.meta43127;
});
domina.events.t43126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43128,meta43127__$1){var self__ = this;
var _43128__$1 = this;return (new domina.events.t43126(self__.evt,self__.f,self__.create_listener_function,meta43127__$1));
});
domina.events.__GT_t43126 = (function __GT_t43126(evt__$1,f__$1,create_listener_function__$1,meta43127){return (new domina.events.t43126(evt__$1,f__$1,create_listener_function__$1,meta43127));
});
}
return (new domina.events.t43126(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t43126 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t43126 = (function (evt,f,create_listener_function,meta43127){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta43127 = meta43127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t43126.cljs$lang$type = true;
domina.events.t43126.cljs$lang$ctorStr = "domina.events/t43126";
domina.events.t43126.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.events/t43126");
});
domina.events.t43126.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t43126.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t43126.prototype.domina$events$Event$ = true;
domina.events.t43126.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t43126.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t43126.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t43126.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t43126.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t43126.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t43126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43128){var self__ = this;
var _43128__$1 = this;return self__.meta43127;
});
domina.events.t43126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43128,meta43127__$1){var self__ = this;
var _43128__$1 = this;return (new domina.events.t43126(self__.evt,self__.f,self__.create_listener_function,meta43127__$1));
});
domina.events.__GT_t43126 = (function __GT_t43126(evt__$1,f__$1,create_listener_function__$1,meta43127){return (new domina.events.t43126(evt__$1,f__$1,create_listener_function__$1,meta43127));
});
}
return (new domina.events.t43126(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__43133(s__43134){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__43134__$1 = s__43134;while(true){
var temp__4126__auto__ = cljs.core.seq(s__43134__$1);if(temp__4126__auto__)
{var s__43134__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__43134__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__43134__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__43136 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__43135 = (0);while(true){
if((i__43135 < size__4267__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__43135);cljs.core.chunk_append(b__43136,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__43137 = (i__43135 + (1));
i__43135 = G__43137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__43136),iter__43133(cljs.core.chunk_rest(s__43134__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__43136),null);
}
} else
{var node = cljs.core.first(s__43134__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__43133(cljs.core.rest(s__43134__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__43146 = cljs.core.seq(domina.nodes(content));var chunk__43147 = null;var count__43148 = (0);var i__43149 = (0);while(true){
if((i__43149 < count__43148))
{var node = chunk__43147.cljs$core$IIndexed$_nth$arity$2(null,i__43149);goog.events.removeAll(node);
{
var G__43154 = seq__43146;
var G__43155 = chunk__43147;
var G__43156 = count__43148;
var G__43157 = (i__43149 + (1));
seq__43146 = G__43154;
chunk__43147 = G__43155;
count__43148 = G__43156;
i__43149 = G__43157;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43146);if(temp__4126__auto__)
{var seq__43146__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43146__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43146__$1);{
var G__43158 = cljs.core.chunk_rest(seq__43146__$1);
var G__43159 = c__4299__auto__;
var G__43160 = cljs.core.count(c__4299__auto__);
var G__43161 = (0);
seq__43146 = G__43158;
chunk__43147 = G__43159;
count__43148 = G__43160;
i__43149 = G__43161;
continue;
}
} else
{var node = cljs.core.first(seq__43146__$1);goog.events.removeAll(node);
{
var G__43162 = cljs.core.next(seq__43146__$1);
var G__43163 = null;
var G__43164 = (0);
var G__43165 = (0);
seq__43146 = G__43162;
chunk__43147 = G__43163;
count__43148 = G__43164;
i__43149 = G__43165;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__43150 = cljs.core.seq(domina.nodes(content));var chunk__43151 = null;var count__43152 = (0);var i__43153 = (0);while(true){
if((i__43153 < count__43152))
{var node = chunk__43151.cljs$core$IIndexed$_nth$arity$2(null,i__43153);goog.events.removeAll(node,type__$1);
{
var G__43166 = seq__43150;
var G__43167 = chunk__43151;
var G__43168 = count__43152;
var G__43169 = (i__43153 + (1));
seq__43150 = G__43166;
chunk__43151 = G__43167;
count__43152 = G__43168;
i__43153 = G__43169;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43150);if(temp__4126__auto__)
{var seq__43150__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43150__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43150__$1);{
var G__43170 = cljs.core.chunk_rest(seq__43150__$1);
var G__43171 = c__4299__auto__;
var G__43172 = cljs.core.count(c__4299__auto__);
var G__43173 = (0);
seq__43150 = G__43170;
chunk__43151 = G__43171;
count__43152 = G__43172;
i__43153 = G__43173;
continue;
}
} else
{var node = cljs.core.first(seq__43150__$1);goog.events.removeAll(node,type__$1);
{
var G__43174 = cljs.core.next(seq__43150__$1);
var G__43175 = null;
var G__43176 = (0);
var G__43177 = (0);
seq__43150 = G__43174;
chunk__43151 = G__43175;
count__43152 = G__43176;
i__43153 = G__43177;
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
var G__43178 = parent;
var G__43179 = cljs.core.cons(parent,so_far);
n = G__43178;
so_far = G__43179;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__43188_43196 = cljs.core.seq(ancestors);var chunk__43189_43197 = null;var count__43190_43198 = (0);var i__43191_43199 = (0);while(true){
if((i__43191_43199 < count__43190_43198))
{var n_43200 = chunk__43189_43197.cljs$core$IIndexed$_nth$arity$2(null,i__43191_43199);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43200;
goog.events.fireListeners(n_43200,evt.type,true,evt);
}
{
var G__43201 = seq__43188_43196;
var G__43202 = chunk__43189_43197;
var G__43203 = count__43190_43198;
var G__43204 = (i__43191_43199 + (1));
seq__43188_43196 = G__43201;
chunk__43189_43197 = G__43202;
count__43190_43198 = G__43203;
i__43191_43199 = G__43204;
continue;
}
} else
{var temp__4126__auto___43205 = cljs.core.seq(seq__43188_43196);if(temp__4126__auto___43205)
{var seq__43188_43206__$1 = temp__4126__auto___43205;if(cljs.core.chunked_seq_QMARK_(seq__43188_43206__$1))
{var c__4299__auto___43207 = cljs.core.chunk_first(seq__43188_43206__$1);{
var G__43208 = cljs.core.chunk_rest(seq__43188_43206__$1);
var G__43209 = c__4299__auto___43207;
var G__43210 = cljs.core.count(c__4299__auto___43207);
var G__43211 = (0);
seq__43188_43196 = G__43208;
chunk__43189_43197 = G__43209;
count__43190_43198 = G__43210;
i__43191_43199 = G__43211;
continue;
}
} else
{var n_43212 = cljs.core.first(seq__43188_43206__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43212;
goog.events.fireListeners(n_43212,evt.type,true,evt);
}
{
var G__43213 = cljs.core.next(seq__43188_43206__$1);
var G__43214 = null;
var G__43215 = (0);
var G__43216 = (0);
seq__43188_43196 = G__43213;
chunk__43189_43197 = G__43214;
count__43190_43198 = G__43215;
i__43191_43199 = G__43216;
continue;
}
}
} else
{}
}
break;
}
var seq__43192_43217 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__43193_43218 = null;var count__43194_43219 = (0);var i__43195_43220 = (0);while(true){
if((i__43195_43220 < count__43194_43219))
{var n_43221 = chunk__43193_43218.cljs$core$IIndexed$_nth$arity$2(null,i__43195_43220);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43221;
goog.events.fireListeners(n_43221,evt.type,false,evt);
}
{
var G__43222 = seq__43192_43217;
var G__43223 = chunk__43193_43218;
var G__43224 = count__43194_43219;
var G__43225 = (i__43195_43220 + (1));
seq__43192_43217 = G__43222;
chunk__43193_43218 = G__43223;
count__43194_43219 = G__43224;
i__43195_43220 = G__43225;
continue;
}
} else
{var temp__4126__auto___43226 = cljs.core.seq(seq__43192_43217);if(temp__4126__auto___43226)
{var seq__43192_43227__$1 = temp__4126__auto___43226;if(cljs.core.chunked_seq_QMARK_(seq__43192_43227__$1))
{var c__4299__auto___43228 = cljs.core.chunk_first(seq__43192_43227__$1);{
var G__43229 = cljs.core.chunk_rest(seq__43192_43227__$1);
var G__43230 = c__4299__auto___43228;
var G__43231 = cljs.core.count(c__4299__auto___43228);
var G__43232 = (0);
seq__43192_43217 = G__43229;
chunk__43193_43218 = G__43230;
count__43194_43219 = G__43231;
i__43195_43220 = G__43232;
continue;
}
} else
{var n_43233 = cljs.core.first(seq__43192_43227__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_43233;
goog.events.fireListeners(n_43233,evt.type,false,evt);
}
{
var G__43234 = cljs.core.next(seq__43192_43227__$1);
var G__43235 = null;
var G__43236 = (0);
var G__43237 = (0);
seq__43192_43217 = G__43234;
chunk__43193_43218 = G__43235;
count__43194_43219 = G__43236;
i__43195_43220 = G__43237;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__43244_43250 = cljs.core.seq(evt_map);var chunk__43245_43251 = null;var count__43246_43252 = (0);var i__43247_43253 = (0);while(true){
if((i__43247_43253 < count__43246_43252))
{var vec__43248_43254 = chunk__43245_43251.cljs$core$IIndexed$_nth$arity$2(null,i__43247_43253);var k_43255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43248_43254,(0),null);var v_43256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43248_43254,(1),null);(evt[k_43255] = v_43256);
{
var G__43257 = seq__43244_43250;
var G__43258 = chunk__43245_43251;
var G__43259 = count__43246_43252;
var G__43260 = (i__43247_43253 + (1));
seq__43244_43250 = G__43257;
chunk__43245_43251 = G__43258;
count__43246_43252 = G__43259;
i__43247_43253 = G__43260;
continue;
}
} else
{var temp__4126__auto___43261 = cljs.core.seq(seq__43244_43250);if(temp__4126__auto___43261)
{var seq__43244_43262__$1 = temp__4126__auto___43261;if(cljs.core.chunked_seq_QMARK_(seq__43244_43262__$1))
{var c__4299__auto___43263 = cljs.core.chunk_first(seq__43244_43262__$1);{
var G__43264 = cljs.core.chunk_rest(seq__43244_43262__$1);
var G__43265 = c__4299__auto___43263;
var G__43266 = cljs.core.count(c__4299__auto___43263);
var G__43267 = (0);
seq__43244_43250 = G__43264;
chunk__43245_43251 = G__43265;
count__43246_43252 = G__43266;
i__43247_43253 = G__43267;
continue;
}
} else
{var vec__43249_43268 = cljs.core.first(seq__43244_43262__$1);var k_43269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43249_43268,(0),null);var v_43270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43249_43268,(1),null);(evt[k_43269] = v_43270);
{
var G__43271 = cljs.core.next(seq__43244_43262__$1);
var G__43272 = null;
var G__43273 = (0);
var G__43274 = (0);
seq__43244_43250 = G__43271;
chunk__43245_43251 = G__43272;
count__43246_43252 = G__43273;
i__43247_43253 = G__43274;
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
return (function (p1__43275_SHARP_){return goog.events.getListeners(p1__43275_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
