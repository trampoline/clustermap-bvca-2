// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj57037 = {};return obj57037;
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
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t57041 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t57041 = (function (evt,f,create_listener_function,meta57042){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta57042 = meta57042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t57041.cljs$lang$type = true;
domina.events.t57041.cljs$lang$ctorStr = "domina.events/t57041";
domina.events.t57041.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t57041");
});
domina.events.t57041.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t57041.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t57041.prototype.domina$events$Event$ = true;
domina.events.t57041.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t57041.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t57041.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t57041.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t57041.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t57041.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t57041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57043){var self__ = this;
var _57043__$1 = this;return self__.meta57042;
});
domina.events.t57041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57043,meta57042__$1){var self__ = this;
var _57043__$1 = this;return (new domina.events.t57041(self__.evt,self__.f,self__.create_listener_function,meta57042__$1));
});
domina.events.__GT_t57041 = (function __GT_t57041(evt__$1,f__$1,create_listener_function__$1,meta57042){return (new domina.events.t57041(evt__$1,f__$1,create_listener_function__$1,meta57042));
});
}
return (new domina.events.t57041(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__57048(s__57049){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__57049__$1 = s__57049;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57049__$1);if(temp__4126__auto__)
{var s__57049__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57049__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__57049__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__57051 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__57050 = (0);while(true){
if((i__57050 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__57050);cljs.core.chunk_append.call(null,b__57051,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__57052 = (i__57050 + (1));
i__57050 = G__57052;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57051),iter__57048.call(null,cljs.core.chunk_rest.call(null,s__57049__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57051),null);
}
} else
{var node = cljs.core.first.call(null,s__57049__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__57048.call(null,cljs.core.rest.call(null,s__57049__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__57061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57062 = null;var count__57063 = (0);var i__57064 = (0);while(true){
if((i__57064 < count__57063))
{var node = cljs.core._nth.call(null,chunk__57062,i__57064);goog.events.removeAll(node);
{
var G__57069 = seq__57061;
var G__57070 = chunk__57062;
var G__57071 = count__57063;
var G__57072 = (i__57064 + (1));
seq__57061 = G__57069;
chunk__57062 = G__57070;
count__57063 = G__57071;
i__57064 = G__57072;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57061);if(temp__4126__auto__)
{var seq__57061__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57061__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57061__$1);{
var G__57073 = cljs.core.chunk_rest.call(null,seq__57061__$1);
var G__57074 = c__4299__auto__;
var G__57075 = cljs.core.count.call(null,c__4299__auto__);
var G__57076 = (0);
seq__57061 = G__57073;
chunk__57062 = G__57074;
count__57063 = G__57075;
i__57064 = G__57076;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__57061__$1);goog.events.removeAll(node);
{
var G__57077 = cljs.core.next.call(null,seq__57061__$1);
var G__57078 = null;
var G__57079 = (0);
var G__57080 = (0);
seq__57061 = G__57077;
chunk__57062 = G__57078;
count__57063 = G__57079;
i__57064 = G__57080;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__57065 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57066 = null;var count__57067 = (0);var i__57068 = (0);while(true){
if((i__57068 < count__57067))
{var node = cljs.core._nth.call(null,chunk__57066,i__57068);goog.events.removeAll(node,type__$1);
{
var G__57081 = seq__57065;
var G__57082 = chunk__57066;
var G__57083 = count__57067;
var G__57084 = (i__57068 + (1));
seq__57065 = G__57081;
chunk__57066 = G__57082;
count__57067 = G__57083;
i__57068 = G__57084;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57065);if(temp__4126__auto__)
{var seq__57065__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57065__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57065__$1);{
var G__57085 = cljs.core.chunk_rest.call(null,seq__57065__$1);
var G__57086 = c__4299__auto__;
var G__57087 = cljs.core.count.call(null,c__4299__auto__);
var G__57088 = (0);
seq__57065 = G__57085;
chunk__57066 = G__57086;
count__57067 = G__57087;
i__57068 = G__57088;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__57065__$1);goog.events.removeAll(node,type__$1);
{
var G__57089 = cljs.core.next.call(null,seq__57065__$1);
var G__57090 = null;
var G__57091 = (0);
var G__57092 = (0);
seq__57065 = G__57089;
chunk__57066 = G__57090;
count__57067 = G__57091;
i__57068 = G__57092;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__57093 = parent;
var G__57094 = cljs.core.cons.call(null,parent,so_far);
n = G__57093;
so_far = G__57094;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__57103_57111 = cljs.core.seq.call(null,ancestors);var chunk__57104_57112 = null;var count__57105_57113 = (0);var i__57106_57114 = (0);while(true){
if((i__57106_57114 < count__57105_57113))
{var n_57115 = cljs.core._nth.call(null,chunk__57104_57112,i__57106_57114);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57115;
goog.events.fireListeners(n_57115,evt.type,true,evt);
}
{
var G__57116 = seq__57103_57111;
var G__57117 = chunk__57104_57112;
var G__57118 = count__57105_57113;
var G__57119 = (i__57106_57114 + (1));
seq__57103_57111 = G__57116;
chunk__57104_57112 = G__57117;
count__57105_57113 = G__57118;
i__57106_57114 = G__57119;
continue;
}
} else
{var temp__4126__auto___57120 = cljs.core.seq.call(null,seq__57103_57111);if(temp__4126__auto___57120)
{var seq__57103_57121__$1 = temp__4126__auto___57120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57103_57121__$1))
{var c__4299__auto___57122 = cljs.core.chunk_first.call(null,seq__57103_57121__$1);{
var G__57123 = cljs.core.chunk_rest.call(null,seq__57103_57121__$1);
var G__57124 = c__4299__auto___57122;
var G__57125 = cljs.core.count.call(null,c__4299__auto___57122);
var G__57126 = (0);
seq__57103_57111 = G__57123;
chunk__57104_57112 = G__57124;
count__57105_57113 = G__57125;
i__57106_57114 = G__57126;
continue;
}
} else
{var n_57127 = cljs.core.first.call(null,seq__57103_57121__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57127;
goog.events.fireListeners(n_57127,evt.type,true,evt);
}
{
var G__57128 = cljs.core.next.call(null,seq__57103_57121__$1);
var G__57129 = null;
var G__57130 = (0);
var G__57131 = (0);
seq__57103_57111 = G__57128;
chunk__57104_57112 = G__57129;
count__57105_57113 = G__57130;
i__57106_57114 = G__57131;
continue;
}
}
} else
{}
}
break;
}
var seq__57107_57132 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__57108_57133 = null;var count__57109_57134 = (0);var i__57110_57135 = (0);while(true){
if((i__57110_57135 < count__57109_57134))
{var n_57136 = cljs.core._nth.call(null,chunk__57108_57133,i__57110_57135);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57136;
goog.events.fireListeners(n_57136,evt.type,false,evt);
}
{
var G__57137 = seq__57107_57132;
var G__57138 = chunk__57108_57133;
var G__57139 = count__57109_57134;
var G__57140 = (i__57110_57135 + (1));
seq__57107_57132 = G__57137;
chunk__57108_57133 = G__57138;
count__57109_57134 = G__57139;
i__57110_57135 = G__57140;
continue;
}
} else
{var temp__4126__auto___57141 = cljs.core.seq.call(null,seq__57107_57132);if(temp__4126__auto___57141)
{var seq__57107_57142__$1 = temp__4126__auto___57141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57107_57142__$1))
{var c__4299__auto___57143 = cljs.core.chunk_first.call(null,seq__57107_57142__$1);{
var G__57144 = cljs.core.chunk_rest.call(null,seq__57107_57142__$1);
var G__57145 = c__4299__auto___57143;
var G__57146 = cljs.core.count.call(null,c__4299__auto___57143);
var G__57147 = (0);
seq__57107_57132 = G__57144;
chunk__57108_57133 = G__57145;
count__57109_57134 = G__57146;
i__57110_57135 = G__57147;
continue;
}
} else
{var n_57148 = cljs.core.first.call(null,seq__57107_57142__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57148;
goog.events.fireListeners(n_57148,evt.type,false,evt);
}
{
var G__57149 = cljs.core.next.call(null,seq__57107_57142__$1);
var G__57150 = null;
var G__57151 = (0);
var G__57152 = (0);
seq__57107_57132 = G__57149;
chunk__57108_57133 = G__57150;
count__57109_57134 = G__57151;
i__57110_57135 = G__57152;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__57159_57165 = cljs.core.seq.call(null,evt_map);var chunk__57160_57166 = null;var count__57161_57167 = (0);var i__57162_57168 = (0);while(true){
if((i__57162_57168 < count__57161_57167))
{var vec__57163_57169 = cljs.core._nth.call(null,chunk__57160_57166,i__57162_57168);var k_57170 = cljs.core.nth.call(null,vec__57163_57169,(0),null);var v_57171 = cljs.core.nth.call(null,vec__57163_57169,(1),null);(evt[k_57170] = v_57171);
{
var G__57172 = seq__57159_57165;
var G__57173 = chunk__57160_57166;
var G__57174 = count__57161_57167;
var G__57175 = (i__57162_57168 + (1));
seq__57159_57165 = G__57172;
chunk__57160_57166 = G__57173;
count__57161_57167 = G__57174;
i__57162_57168 = G__57175;
continue;
}
} else
{var temp__4126__auto___57176 = cljs.core.seq.call(null,seq__57159_57165);if(temp__4126__auto___57176)
{var seq__57159_57177__$1 = temp__4126__auto___57176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57159_57177__$1))
{var c__4299__auto___57178 = cljs.core.chunk_first.call(null,seq__57159_57177__$1);{
var G__57179 = cljs.core.chunk_rest.call(null,seq__57159_57177__$1);
var G__57180 = c__4299__auto___57178;
var G__57181 = cljs.core.count.call(null,c__4299__auto___57178);
var G__57182 = (0);
seq__57159_57165 = G__57179;
chunk__57160_57166 = G__57180;
count__57161_57167 = G__57181;
i__57162_57168 = G__57182;
continue;
}
} else
{var vec__57164_57183 = cljs.core.first.call(null,seq__57159_57177__$1);var k_57184 = cljs.core.nth.call(null,vec__57164_57183,(0),null);var v_57185 = cljs.core.nth.call(null,vec__57164_57183,(1),null);(evt[k_57184] = v_57185);
{
var G__57186 = cljs.core.next.call(null,seq__57159_57177__$1);
var G__57187 = null;
var G__57188 = (0);
var G__57189 = (0);
seq__57159_57165 = G__57186;
chunk__57160_57166 = G__57187;
count__57161_57167 = G__57188;
i__57162_57168 = G__57189;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__57190_SHARP_){return goog.events.getListeners(p1__57190_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map