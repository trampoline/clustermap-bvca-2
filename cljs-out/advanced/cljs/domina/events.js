// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28057 = {};return obj28057;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t28061 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28061 = (function (evt,f,create_listener_function,meta28062){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28061.cljs$lang$type = true;
domina.events.t28061.cljs$lang$ctorStr = "domina.events/t28061";
domina.events.t28061.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t28061");
});
domina.events.t28061.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t28061.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t28061.prototype.domina$events$Event$ = true;
domina.events.t28061.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28061.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28061.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28061.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28061.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28061.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28063){var self__ = this;
var _28063__$1 = this;return self__.meta28062;
});
domina.events.t28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28063,meta28062__$1){var self__ = this;
var _28063__$1 = this;return (new domina.events.t28061(self__.evt,self__.f,self__.create_listener_function,meta28062__$1));
});
domina.events.__GT_t28061 = (function __GT_t28061(evt__$1,f__$1,create_listener_function__$1,meta28062){return (new domina.events.t28061(evt__$1,f__$1,create_listener_function__$1,meta28062));
});
}
return (new domina.events.t28061(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t28061 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28061 = (function (evt,f,create_listener_function,meta28062){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28061.cljs$lang$type = true;
domina.events.t28061.cljs$lang$ctorStr = "domina.events/t28061";
domina.events.t28061.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t28061");
});
domina.events.t28061.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t28061.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t28061.prototype.domina$events$Event$ = true;
domina.events.t28061.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28061.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28061.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28061.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28061.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28061.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28063){var self__ = this;
var _28063__$1 = this;return self__.meta28062;
});
domina.events.t28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28063,meta28062__$1){var self__ = this;
var _28063__$1 = this;return (new domina.events.t28061(self__.evt,self__.f,self__.create_listener_function,meta28062__$1));
});
domina.events.__GT_t28061 = (function __GT_t28061(evt__$1,f__$1,create_listener_function__$1,meta28062){return (new domina.events.t28061(evt__$1,f__$1,create_listener_function__$1,meta28062));
});
}
return (new domina.events.t28061(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__28068(s__28069){return (new cljs.core.LazySeq(null,(function (){var s__28069__$1 = s__28069;while(true){
var temp__4092__auto__ = cljs.core.seq(s__28069__$1);if(temp__4092__auto__)
{var s__28069__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__28069__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__28069__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__28071 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__28070 = 0;while(true){
if((i__28070 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__28070);cljs.core.chunk_append(b__28071,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28072 = (i__28070 + 1);
i__28070 = G__28072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__28071),iter__28068(cljs.core.chunk_rest(s__28069__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__28071),null);
}
} else
{var node = cljs.core.first(s__28069__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28068(cljs.core.rest(s__28069__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28081 = cljs.core.seq(domina.nodes(content));var chunk__28082 = null;var count__28083 = 0;var i__28084 = 0;while(true){
if((i__28084 < count__28083))
{var node = chunk__28082.cljs$core$IIndexed$_nth$arity$2(null,i__28084);goog.events.removeAll(node);
{
var G__28089 = seq__28081;
var G__28090 = chunk__28082;
var G__28091 = count__28083;
var G__28092 = (i__28084 + 1);
seq__28081 = G__28089;
chunk__28082 = G__28090;
count__28083 = G__28091;
i__28084 = G__28092;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__28081);if(temp__4092__auto__)
{var seq__28081__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28081__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__28081__$1);{
var G__28093 = cljs.core.chunk_rest(seq__28081__$1);
var G__28094 = c__4148__auto__;
var G__28095 = cljs.core.count(c__4148__auto__);
var G__28096 = 0;
seq__28081 = G__28093;
chunk__28082 = G__28094;
count__28083 = G__28095;
i__28084 = G__28096;
continue;
}
} else
{var node = cljs.core.first(seq__28081__$1);goog.events.removeAll(node);
{
var G__28097 = cljs.core.next(seq__28081__$1);
var G__28098 = null;
var G__28099 = 0;
var G__28100 = 0;
seq__28081 = G__28097;
chunk__28082 = G__28098;
count__28083 = G__28099;
i__28084 = G__28100;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__28085 = cljs.core.seq(domina.nodes(content));var chunk__28086 = null;var count__28087 = 0;var i__28088 = 0;while(true){
if((i__28088 < count__28087))
{var node = chunk__28086.cljs$core$IIndexed$_nth$arity$2(null,i__28088);goog.events.removeAll(node,type__$1);
{
var G__28101 = seq__28085;
var G__28102 = chunk__28086;
var G__28103 = count__28087;
var G__28104 = (i__28088 + 1);
seq__28085 = G__28101;
chunk__28086 = G__28102;
count__28087 = G__28103;
i__28088 = G__28104;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__28085);if(temp__4092__auto__)
{var seq__28085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__28085__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__28085__$1);{
var G__28105 = cljs.core.chunk_rest(seq__28085__$1);
var G__28106 = c__4148__auto__;
var G__28107 = cljs.core.count(c__4148__auto__);
var G__28108 = 0;
seq__28085 = G__28105;
chunk__28086 = G__28106;
count__28087 = G__28107;
i__28088 = G__28108;
continue;
}
} else
{var node = cljs.core.first(seq__28085__$1);goog.events.removeAll(node,type__$1);
{
var G__28109 = cljs.core.next(seq__28085__$1);
var G__28110 = null;
var G__28111 = 0;
var G__28112 = 0;
seq__28085 = G__28109;
chunk__28086 = G__28110;
count__28087 = G__28111;
i__28088 = G__28112;
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
var G__28113 = parent;
var G__28114 = cljs.core.cons(parent,so_far);
n = G__28113;
so_far = G__28114;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__28123_28131 = cljs.core.seq(ancestors);var chunk__28124_28132 = null;var count__28125_28133 = 0;var i__28126_28134 = 0;while(true){
if((i__28126_28134 < count__28125_28133))
{var n_28135 = chunk__28124_28132.cljs$core$IIndexed$_nth$arity$2(null,i__28126_28134);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28135;
goog.events.fireListeners(n_28135,evt.type,true,evt);
}
{
var G__28136 = seq__28123_28131;
var G__28137 = chunk__28124_28132;
var G__28138 = count__28125_28133;
var G__28139 = (i__28126_28134 + 1);
seq__28123_28131 = G__28136;
chunk__28124_28132 = G__28137;
count__28125_28133 = G__28138;
i__28126_28134 = G__28139;
continue;
}
} else
{var temp__4092__auto___28140 = cljs.core.seq(seq__28123_28131);if(temp__4092__auto___28140)
{var seq__28123_28141__$1 = temp__4092__auto___28140;if(cljs.core.chunked_seq_QMARK_(seq__28123_28141__$1))
{var c__4148__auto___28142 = cljs.core.chunk_first(seq__28123_28141__$1);{
var G__28143 = cljs.core.chunk_rest(seq__28123_28141__$1);
var G__28144 = c__4148__auto___28142;
var G__28145 = cljs.core.count(c__4148__auto___28142);
var G__28146 = 0;
seq__28123_28131 = G__28143;
chunk__28124_28132 = G__28144;
count__28125_28133 = G__28145;
i__28126_28134 = G__28146;
continue;
}
} else
{var n_28147 = cljs.core.first(seq__28123_28141__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28147;
goog.events.fireListeners(n_28147,evt.type,true,evt);
}
{
var G__28148 = cljs.core.next(seq__28123_28141__$1);
var G__28149 = null;
var G__28150 = 0;
var G__28151 = 0;
seq__28123_28131 = G__28148;
chunk__28124_28132 = G__28149;
count__28125_28133 = G__28150;
i__28126_28134 = G__28151;
continue;
}
}
} else
{}
}
break;
}
var seq__28127_28152 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__28128_28153 = null;var count__28129_28154 = 0;var i__28130_28155 = 0;while(true){
if((i__28130_28155 < count__28129_28154))
{var n_28156 = chunk__28128_28153.cljs$core$IIndexed$_nth$arity$2(null,i__28130_28155);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28156;
goog.events.fireListeners(n_28156,evt.type,false,evt);
}
{
var G__28157 = seq__28127_28152;
var G__28158 = chunk__28128_28153;
var G__28159 = count__28129_28154;
var G__28160 = (i__28130_28155 + 1);
seq__28127_28152 = G__28157;
chunk__28128_28153 = G__28158;
count__28129_28154 = G__28159;
i__28130_28155 = G__28160;
continue;
}
} else
{var temp__4092__auto___28161 = cljs.core.seq(seq__28127_28152);if(temp__4092__auto___28161)
{var seq__28127_28162__$1 = temp__4092__auto___28161;if(cljs.core.chunked_seq_QMARK_(seq__28127_28162__$1))
{var c__4148__auto___28163 = cljs.core.chunk_first(seq__28127_28162__$1);{
var G__28164 = cljs.core.chunk_rest(seq__28127_28162__$1);
var G__28165 = c__4148__auto___28163;
var G__28166 = cljs.core.count(c__4148__auto___28163);
var G__28167 = 0;
seq__28127_28152 = G__28164;
chunk__28128_28153 = G__28165;
count__28129_28154 = G__28166;
i__28130_28155 = G__28167;
continue;
}
} else
{var n_28168 = cljs.core.first(seq__28127_28162__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28168;
goog.events.fireListeners(n_28168,evt.type,false,evt);
}
{
var G__28169 = cljs.core.next(seq__28127_28162__$1);
var G__28170 = null;
var G__28171 = 0;
var G__28172 = 0;
seq__28127_28152 = G__28169;
chunk__28128_28153 = G__28170;
count__28129_28154 = G__28171;
i__28130_28155 = G__28172;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__28179_28185 = cljs.core.seq(evt_map);var chunk__28180_28186 = null;var count__28181_28187 = 0;var i__28182_28188 = 0;while(true){
if((i__28182_28188 < count__28181_28187))
{var vec__28183_28189 = chunk__28180_28186.cljs$core$IIndexed$_nth$arity$2(null,i__28182_28188);var k_28190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183_28189,0,null);var v_28191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28183_28189,1,null);(evt[k_28190] = v_28191);
{
var G__28192 = seq__28179_28185;
var G__28193 = chunk__28180_28186;
var G__28194 = count__28181_28187;
var G__28195 = (i__28182_28188 + 1);
seq__28179_28185 = G__28192;
chunk__28180_28186 = G__28193;
count__28181_28187 = G__28194;
i__28182_28188 = G__28195;
continue;
}
} else
{var temp__4092__auto___28196 = cljs.core.seq(seq__28179_28185);if(temp__4092__auto___28196)
{var seq__28179_28197__$1 = temp__4092__auto___28196;if(cljs.core.chunked_seq_QMARK_(seq__28179_28197__$1))
{var c__4148__auto___28198 = cljs.core.chunk_first(seq__28179_28197__$1);{
var G__28199 = cljs.core.chunk_rest(seq__28179_28197__$1);
var G__28200 = c__4148__auto___28198;
var G__28201 = cljs.core.count(c__4148__auto___28198);
var G__28202 = 0;
seq__28179_28185 = G__28199;
chunk__28180_28186 = G__28200;
count__28181_28187 = G__28201;
i__28182_28188 = G__28202;
continue;
}
} else
{var vec__28184_28203 = cljs.core.first(seq__28179_28197__$1);var k_28204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28184_28203,0,null);var v_28205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28184_28203,1,null);(evt[k_28204] = v_28205);
{
var G__28206 = cljs.core.next(seq__28179_28197__$1);
var G__28207 = null;
var G__28208 = 0;
var G__28209 = 0;
seq__28179_28185 = G__28206;
chunk__28180_28186 = G__28207;
count__28181_28187 = G__28208;
i__28182_28188 = G__28209;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__28210_SHARP_){return goog.events.getListeners(p1__28210_SHARP_,type__$1,false);
}),domina.nodes(content));
});
