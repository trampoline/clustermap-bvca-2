// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39097 = {};return obj39097;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39101 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39101 = (function (evt,f,create_listener_function,meta39102){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39102 = meta39102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39101.cljs$lang$type = true;
domina.events.t39101.cljs$lang$ctorStr = "domina.events/t39101";
domina.events.t39101.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39101");
});
domina.events.t39101.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39101.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39101.prototype.domina$events$Event$ = true;
domina.events.t39101.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39101.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39101.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39101.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39101.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39101.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39103){var self__ = this;
var _39103__$1 = this;return self__.meta39102;
});
domina.events.t39101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39103,meta39102__$1){var self__ = this;
var _39103__$1 = this;return (new domina.events.t39101(self__.evt,self__.f,self__.create_listener_function,meta39102__$1));
});
domina.events.__GT_t39101 = (function __GT_t39101(evt__$1,f__$1,create_listener_function__$1,meta39102){return (new domina.events.t39101(evt__$1,f__$1,create_listener_function__$1,meta39102));
});
}
return (new domina.events.t39101(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39101 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39101 = (function (evt,f,create_listener_function,meta39102){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39102 = meta39102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39101.cljs$lang$type = true;
domina.events.t39101.cljs$lang$ctorStr = "domina.events/t39101";
domina.events.t39101.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"domina.events/t39101");
});
domina.events.t39101.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39101.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t39101.prototype.domina$events$Event$ = true;
domina.events.t39101.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39101.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39101.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39101.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39101.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39101.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39103){var self__ = this;
var _39103__$1 = this;return self__.meta39102;
});
domina.events.t39101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39103,meta39102__$1){var self__ = this;
var _39103__$1 = this;return (new domina.events.t39101(self__.evt,self__.f,self__.create_listener_function,meta39102__$1));
});
domina.events.__GT_t39101 = (function __GT_t39101(evt__$1,f__$1,create_listener_function__$1,meta39102){return (new domina.events.t39101(evt__$1,f__$1,create_listener_function__$1,meta39102));
});
}
return (new domina.events.t39101(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4158__auto__ = (function iter__39108(s__39109){return (new cljs.core.LazySeq(null,(function (){var s__39109__$1 = s__39109;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39109__$1);if(temp__4092__auto__)
{var s__39109__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39109__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39109__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39111 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39110 = 0;while(true){
if((i__39110 < size__4157__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39110);cljs.core.chunk_append(b__39111,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39112 = (i__39110 + 1);
i__39110 = G__39112;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39111),iter__39108(cljs.core.chunk_rest(s__39109__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39111),null);
}
} else
{var node = cljs.core.first(s__39109__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39108(cljs.core.rest(s__39109__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__39121 = cljs.core.seq(domina.nodes(content));var chunk__39122 = null;var count__39123 = 0;var i__39124 = 0;while(true){
if((i__39124 < count__39123))
{var node = chunk__39122.cljs$core$IIndexed$_nth$arity$2(null,i__39124);goog.events.removeAll(node);
{
var G__39129 = seq__39121;
var G__39130 = chunk__39122;
var G__39131 = count__39123;
var G__39132 = (i__39124 + 1);
seq__39121 = G__39129;
chunk__39122 = G__39130;
count__39123 = G__39131;
i__39124 = G__39132;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39121);if(temp__4092__auto__)
{var seq__39121__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39121__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39121__$1);{
var G__39133 = cljs.core.chunk_rest(seq__39121__$1);
var G__39134 = c__4189__auto__;
var G__39135 = cljs.core.count(c__4189__auto__);
var G__39136 = 0;
seq__39121 = G__39133;
chunk__39122 = G__39134;
count__39123 = G__39135;
i__39124 = G__39136;
continue;
}
} else
{var node = cljs.core.first(seq__39121__$1);goog.events.removeAll(node);
{
var G__39137 = cljs.core.next(seq__39121__$1);
var G__39138 = null;
var G__39139 = 0;
var G__39140 = 0;
seq__39121 = G__39137;
chunk__39122 = G__39138;
count__39123 = G__39139;
i__39124 = G__39140;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39125 = cljs.core.seq(domina.nodes(content));var chunk__39126 = null;var count__39127 = 0;var i__39128 = 0;while(true){
if((i__39128 < count__39127))
{var node = chunk__39126.cljs$core$IIndexed$_nth$arity$2(null,i__39128);goog.events.removeAll(node,type__$1);
{
var G__39141 = seq__39125;
var G__39142 = chunk__39126;
var G__39143 = count__39127;
var G__39144 = (i__39128 + 1);
seq__39125 = G__39141;
chunk__39126 = G__39142;
count__39127 = G__39143;
i__39128 = G__39144;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39125);if(temp__4092__auto__)
{var seq__39125__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39125__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39125__$1);{
var G__39145 = cljs.core.chunk_rest(seq__39125__$1);
var G__39146 = c__4189__auto__;
var G__39147 = cljs.core.count(c__4189__auto__);
var G__39148 = 0;
seq__39125 = G__39145;
chunk__39126 = G__39146;
count__39127 = G__39147;
i__39128 = G__39148;
continue;
}
} else
{var node = cljs.core.first(seq__39125__$1);goog.events.removeAll(node,type__$1);
{
var G__39149 = cljs.core.next(seq__39125__$1);
var G__39150 = null;
var G__39151 = 0;
var G__39152 = 0;
seq__39125 = G__39149;
chunk__39126 = G__39150;
count__39127 = G__39151;
i__39128 = G__39152;
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
var G__39153 = parent;
var G__39154 = cljs.core.cons(parent,so_far);
n = G__39153;
so_far = G__39154;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__39163_39171 = cljs.core.seq(ancestors);var chunk__39164_39172 = null;var count__39165_39173 = 0;var i__39166_39174 = 0;while(true){
if((i__39166_39174 < count__39165_39173))
{var n_39175 = chunk__39164_39172.cljs$core$IIndexed$_nth$arity$2(null,i__39166_39174);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39175;
goog.events.fireListeners(n_39175,evt.type,true,evt);
}
{
var G__39176 = seq__39163_39171;
var G__39177 = chunk__39164_39172;
var G__39178 = count__39165_39173;
var G__39179 = (i__39166_39174 + 1);
seq__39163_39171 = G__39176;
chunk__39164_39172 = G__39177;
count__39165_39173 = G__39178;
i__39166_39174 = G__39179;
continue;
}
} else
{var temp__4092__auto___39180 = cljs.core.seq(seq__39163_39171);if(temp__4092__auto___39180)
{var seq__39163_39181__$1 = temp__4092__auto___39180;if(cljs.core.chunked_seq_QMARK_(seq__39163_39181__$1))
{var c__4189__auto___39182 = cljs.core.chunk_first(seq__39163_39181__$1);{
var G__39183 = cljs.core.chunk_rest(seq__39163_39181__$1);
var G__39184 = c__4189__auto___39182;
var G__39185 = cljs.core.count(c__4189__auto___39182);
var G__39186 = 0;
seq__39163_39171 = G__39183;
chunk__39164_39172 = G__39184;
count__39165_39173 = G__39185;
i__39166_39174 = G__39186;
continue;
}
} else
{var n_39187 = cljs.core.first(seq__39163_39181__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39187;
goog.events.fireListeners(n_39187,evt.type,true,evt);
}
{
var G__39188 = cljs.core.next(seq__39163_39181__$1);
var G__39189 = null;
var G__39190 = 0;
var G__39191 = 0;
seq__39163_39171 = G__39188;
chunk__39164_39172 = G__39189;
count__39165_39173 = G__39190;
i__39166_39174 = G__39191;
continue;
}
}
} else
{}
}
break;
}
var seq__39167_39192 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__39168_39193 = null;var count__39169_39194 = 0;var i__39170_39195 = 0;while(true){
if((i__39170_39195 < count__39169_39194))
{var n_39196 = chunk__39168_39193.cljs$core$IIndexed$_nth$arity$2(null,i__39170_39195);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39196;
goog.events.fireListeners(n_39196,evt.type,false,evt);
}
{
var G__39197 = seq__39167_39192;
var G__39198 = chunk__39168_39193;
var G__39199 = count__39169_39194;
var G__39200 = (i__39170_39195 + 1);
seq__39167_39192 = G__39197;
chunk__39168_39193 = G__39198;
count__39169_39194 = G__39199;
i__39170_39195 = G__39200;
continue;
}
} else
{var temp__4092__auto___39201 = cljs.core.seq(seq__39167_39192);if(temp__4092__auto___39201)
{var seq__39167_39202__$1 = temp__4092__auto___39201;if(cljs.core.chunked_seq_QMARK_(seq__39167_39202__$1))
{var c__4189__auto___39203 = cljs.core.chunk_first(seq__39167_39202__$1);{
var G__39204 = cljs.core.chunk_rest(seq__39167_39202__$1);
var G__39205 = c__4189__auto___39203;
var G__39206 = cljs.core.count(c__4189__auto___39203);
var G__39207 = 0;
seq__39167_39192 = G__39204;
chunk__39168_39193 = G__39205;
count__39169_39194 = G__39206;
i__39170_39195 = G__39207;
continue;
}
} else
{var n_39208 = cljs.core.first(seq__39167_39202__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39208;
goog.events.fireListeners(n_39208,evt.type,false,evt);
}
{
var G__39209 = cljs.core.next(seq__39167_39202__$1);
var G__39210 = null;
var G__39211 = 0;
var G__39212 = 0;
seq__39167_39192 = G__39209;
chunk__39168_39193 = G__39210;
count__39169_39194 = G__39211;
i__39170_39195 = G__39212;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__39219_39225 = cljs.core.seq(evt_map);var chunk__39220_39226 = null;var count__39221_39227 = 0;var i__39222_39228 = 0;while(true){
if((i__39222_39228 < count__39221_39227))
{var vec__39223_39229 = chunk__39220_39226.cljs$core$IIndexed$_nth$arity$2(null,i__39222_39228);var k_39230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223_39229,0,null);var v_39231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39223_39229,1,null);(evt[k_39230] = v_39231);
{
var G__39232 = seq__39219_39225;
var G__39233 = chunk__39220_39226;
var G__39234 = count__39221_39227;
var G__39235 = (i__39222_39228 + 1);
seq__39219_39225 = G__39232;
chunk__39220_39226 = G__39233;
count__39221_39227 = G__39234;
i__39222_39228 = G__39235;
continue;
}
} else
{var temp__4092__auto___39236 = cljs.core.seq(seq__39219_39225);if(temp__4092__auto___39236)
{var seq__39219_39237__$1 = temp__4092__auto___39236;if(cljs.core.chunked_seq_QMARK_(seq__39219_39237__$1))
{var c__4189__auto___39238 = cljs.core.chunk_first(seq__39219_39237__$1);{
var G__39239 = cljs.core.chunk_rest(seq__39219_39237__$1);
var G__39240 = c__4189__auto___39238;
var G__39241 = cljs.core.count(c__4189__auto___39238);
var G__39242 = 0;
seq__39219_39225 = G__39239;
chunk__39220_39226 = G__39240;
count__39221_39227 = G__39241;
i__39222_39228 = G__39242;
continue;
}
} else
{var vec__39224_39243 = cljs.core.first(seq__39219_39237__$1);var k_39244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39224_39243,0,null);var v_39245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39224_39243,1,null);(evt[k_39244] = v_39245);
{
var G__39246 = cljs.core.next(seq__39219_39237__$1);
var G__39247 = null;
var G__39248 = 0;
var G__39249 = 0;
seq__39219_39225 = G__39246;
chunk__39220_39226 = G__39247;
count__39221_39227 = G__39248;
i__39222_39228 = G__39249;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__39250_SHARP_){return goog.events.getListeners(p1__39250_SHARP_,type__$1,false);
}),domina.nodes(content));
});
