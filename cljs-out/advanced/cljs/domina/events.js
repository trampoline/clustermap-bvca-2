// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39073 = {};return obj39073;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39077 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39077 = (function (evt,f,create_listener_function,meta39078){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39078 = meta39078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39077.cljs$lang$type = true;
domina.events.t39077.cljs$lang$ctorStr = "domina.events/t39077";
domina.events.t39077.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39077");
});
domina.events.t39077.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39077.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39077.prototype.domina$events$Event$ = true;
domina.events.t39077.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39077.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39077.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39077.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39077.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39077.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39079){var self__ = this;
var _39079__$1 = this;return self__.meta39078;
});
domina.events.t39077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39079,meta39078__$1){var self__ = this;
var _39079__$1 = this;return (new domina.events.t39077(self__.evt,self__.f,self__.create_listener_function,meta39078__$1));
});
domina.events.__GT_t39077 = (function __GT_t39077(evt__$1,f__$1,create_listener_function__$1,meta39078){return (new domina.events.t39077(evt__$1,f__$1,create_listener_function__$1,meta39078));
});
}
return (new domina.events.t39077(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39077 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39077 = (function (evt,f,create_listener_function,meta39078){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39078 = meta39078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39077.cljs$lang$type = true;
domina.events.t39077.cljs$lang$ctorStr = "domina.events/t39077";
domina.events.t39077.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39077");
});
domina.events.t39077.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39077.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39077.prototype.domina$events$Event$ = true;
domina.events.t39077.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39077.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39077.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39077.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39077.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39077.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39079){var self__ = this;
var _39079__$1 = this;return self__.meta39078;
});
domina.events.t39077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39079,meta39078__$1){var self__ = this;
var _39079__$1 = this;return (new domina.events.t39077(self__.evt,self__.f,self__.create_listener_function,meta39078__$1));
});
domina.events.__GT_t39077 = (function __GT_t39077(evt__$1,f__$1,create_listener_function__$1,meta39078){return (new domina.events.t39077(evt__$1,f__$1,create_listener_function__$1,meta39078));
});
}
return (new domina.events.t39077(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39084(s__39085){return (new cljs.core.LazySeq(null,(function (){var s__39085__$1 = s__39085;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39085__$1);if(temp__4092__auto__)
{var s__39085__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39085__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39085__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39087 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39086 = 0;while(true){
if((i__39086 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39086);cljs.core.chunk_append(b__39087,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39088 = (i__39086 + 1);
i__39086 = G__39088;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39087),iter__39084(cljs.core.chunk_rest(s__39085__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39087),null);
}
} else
{var node = cljs.core.first(s__39085__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39084(cljs.core.rest(s__39085__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__39097 = cljs.core.seq(domina.nodes(content));var chunk__39098 = null;var count__39099 = 0;var i__39100 = 0;while(true){
if((i__39100 < count__39099))
{var node = chunk__39098.cljs$core$IIndexed$_nth$arity$2(null,i__39100);goog.events.removeAll(node);
{
var G__39105 = seq__39097;
var G__39106 = chunk__39098;
var G__39107 = count__39099;
var G__39108 = (i__39100 + 1);
seq__39097 = G__39105;
chunk__39098 = G__39106;
count__39099 = G__39107;
i__39100 = G__39108;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39097);if(temp__4092__auto__)
{var seq__39097__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39097__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39097__$1);{
var G__39109 = cljs.core.chunk_rest(seq__39097__$1);
var G__39110 = c__4189__auto__;
var G__39111 = cljs.core.count(c__4189__auto__);
var G__39112 = 0;
seq__39097 = G__39109;
chunk__39098 = G__39110;
count__39099 = G__39111;
i__39100 = G__39112;
continue;
}
} else
{var node = cljs.core.first(seq__39097__$1);goog.events.removeAll(node);
{
var G__39113 = cljs.core.next(seq__39097__$1);
var G__39114 = null;
var G__39115 = 0;
var G__39116 = 0;
seq__39097 = G__39113;
chunk__39098 = G__39114;
count__39099 = G__39115;
i__39100 = G__39116;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39101 = cljs.core.seq(domina.nodes(content));var chunk__39102 = null;var count__39103 = 0;var i__39104 = 0;while(true){
if((i__39104 < count__39103))
{var node = chunk__39102.cljs$core$IIndexed$_nth$arity$2(null,i__39104);goog.events.removeAll(node,type__$1);
{
var G__39117 = seq__39101;
var G__39118 = chunk__39102;
var G__39119 = count__39103;
var G__39120 = (i__39104 + 1);
seq__39101 = G__39117;
chunk__39102 = G__39118;
count__39103 = G__39119;
i__39104 = G__39120;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39101);if(temp__4092__auto__)
{var seq__39101__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39101__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39101__$1);{
var G__39121 = cljs.core.chunk_rest(seq__39101__$1);
var G__39122 = c__4189__auto__;
var G__39123 = cljs.core.count(c__4189__auto__);
var G__39124 = 0;
seq__39101 = G__39121;
chunk__39102 = G__39122;
count__39103 = G__39123;
i__39104 = G__39124;
continue;
}
} else
{var node = cljs.core.first(seq__39101__$1);goog.events.removeAll(node,type__$1);
{
var G__39125 = cljs.core.next(seq__39101__$1);
var G__39126 = null;
var G__39127 = 0;
var G__39128 = 0;
seq__39101 = G__39125;
chunk__39102 = G__39126;
count__39103 = G__39127;
i__39104 = G__39128;
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
var G__39129 = parent;
var G__39130 = cljs.core.cons(parent,so_far);
n = G__39129;
so_far = G__39130;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39139_39147 = cljs.core.seq(ancestors);var chunk__39140_39148 = null;var count__39141_39149 = 0;var i__39142_39150 = 0;while(true){
if((i__39142_39150 < count__39141_39149))
{var n_39151 = chunk__39140_39148.cljs$core$IIndexed$_nth$arity$2(null,i__39142_39150);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39151;
goog.events.fireListeners(n_39151,evt.type,true,evt);
}
{
var G__39152 = seq__39139_39147;
var G__39153 = chunk__39140_39148;
var G__39154 = count__39141_39149;
var G__39155 = (i__39142_39150 + 1);
seq__39139_39147 = G__39152;
chunk__39140_39148 = G__39153;
count__39141_39149 = G__39154;
i__39142_39150 = G__39155;
continue;
}
} else
{var temp__4092__auto___39156 = cljs.core.seq(seq__39139_39147);if(temp__4092__auto___39156)
{var seq__39139_39157__$1 = temp__4092__auto___39156;if(cljs.core.chunked_seq_QMARK_(seq__39139_39157__$1))
{var c__4189__auto___39158 = cljs.core.chunk_first(seq__39139_39157__$1);{
var G__39159 = cljs.core.chunk_rest(seq__39139_39157__$1);
var G__39160 = c__4189__auto___39158;
var G__39161 = cljs.core.count(c__4189__auto___39158);
var G__39162 = 0;
seq__39139_39147 = G__39159;
chunk__39140_39148 = G__39160;
count__39141_39149 = G__39161;
i__39142_39150 = G__39162;
continue;
}
} else
{var n_39163 = cljs.core.first(seq__39139_39157__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39163;
goog.events.fireListeners(n_39163,evt.type,true,evt);
}
{
var G__39164 = cljs.core.next(seq__39139_39157__$1);
var G__39165 = null;
var G__39166 = 0;
var G__39167 = 0;
seq__39139_39147 = G__39164;
chunk__39140_39148 = G__39165;
count__39141_39149 = G__39166;
i__39142_39150 = G__39167;
continue;
}
}
} else
{}
}
break;
}
var seq__39143_39168 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39144_39169 = null;var count__39145_39170 = 0;var i__39146_39171 = 0;while(true){
if((i__39146_39171 < count__39145_39170))
{var n_39172 = chunk__39144_39169.cljs$core$IIndexed$_nth$arity$2(null,i__39146_39171);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39172;
goog.events.fireListeners(n_39172,evt.type,false,evt);
}
{
var G__39173 = seq__39143_39168;
var G__39174 = chunk__39144_39169;
var G__39175 = count__39145_39170;
var G__39176 = (i__39146_39171 + 1);
seq__39143_39168 = G__39173;
chunk__39144_39169 = G__39174;
count__39145_39170 = G__39175;
i__39146_39171 = G__39176;
continue;
}
} else
{var temp__4092__auto___39177 = cljs.core.seq(seq__39143_39168);if(temp__4092__auto___39177)
{var seq__39143_39178__$1 = temp__4092__auto___39177;if(cljs.core.chunked_seq_QMARK_(seq__39143_39178__$1))
{var c__4189__auto___39179 = cljs.core.chunk_first(seq__39143_39178__$1);{
var G__39180 = cljs.core.chunk_rest(seq__39143_39178__$1);
var G__39181 = c__4189__auto___39179;
var G__39182 = cljs.core.count(c__4189__auto___39179);
var G__39183 = 0;
seq__39143_39168 = G__39180;
chunk__39144_39169 = G__39181;
count__39145_39170 = G__39182;
i__39146_39171 = G__39183;
continue;
}
} else
{var n_39184 = cljs.core.first(seq__39143_39178__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39184;
goog.events.fireListeners(n_39184,evt.type,false,evt);
}
{
var G__39185 = cljs.core.next(seq__39143_39178__$1);
var G__39186 = null;
var G__39187 = 0;
var G__39188 = 0;
seq__39143_39168 = G__39185;
chunk__39144_39169 = G__39186;
count__39145_39170 = G__39187;
i__39146_39171 = G__39188;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39195_39201 = cljs.core.seq(evt_map);var chunk__39196_39202 = null;var count__39197_39203 = 0;var i__39198_39204 = 0;while(true){
if((i__39198_39204 < count__39197_39203))
{var vec__39199_39205 = chunk__39196_39202.cljs$core$IIndexed$_nth$arity$2(null,i__39198_39204);var k_39206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39199_39205,0,null);var v_39207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39199_39205,1,null);(evt[k_39206] = v_39207);
{
var G__39208 = seq__39195_39201;
var G__39209 = chunk__39196_39202;
var G__39210 = count__39197_39203;
var G__39211 = (i__39198_39204 + 1);
seq__39195_39201 = G__39208;
chunk__39196_39202 = G__39209;
count__39197_39203 = G__39210;
i__39198_39204 = G__39211;
continue;
}
} else
{var temp__4092__auto___39212 = cljs.core.seq(seq__39195_39201);if(temp__4092__auto___39212)
{var seq__39195_39213__$1 = temp__4092__auto___39212;if(cljs.core.chunked_seq_QMARK_(seq__39195_39213__$1))
{var c__4189__auto___39214 = cljs.core.chunk_first(seq__39195_39213__$1);{
var G__39215 = cljs.core.chunk_rest(seq__39195_39213__$1);
var G__39216 = c__4189__auto___39214;
var G__39217 = cljs.core.count(c__4189__auto___39214);
var G__39218 = 0;
seq__39195_39201 = G__39215;
chunk__39196_39202 = G__39216;
count__39197_39203 = G__39217;
i__39198_39204 = G__39218;
continue;
}
} else
{var vec__39200_39219 = cljs.core.first(seq__39195_39213__$1);var k_39220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39200_39219,0,null);var v_39221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39200_39219,1,null);(evt[k_39220] = v_39221);
{
var G__39222 = cljs.core.next(seq__39195_39213__$1);
var G__39223 = null;
var G__39224 = 0;
var G__39225 = 0;
seq__39195_39201 = G__39222;
chunk__39196_39202 = G__39223;
count__39197_39203 = G__39224;
i__39198_39204 = G__39225;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39226_SHARP_){return goog.events.getListeners(p1__39226_SHARP_,type__$1,false);
}),domina.nodes(content));
});
