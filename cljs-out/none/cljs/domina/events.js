// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj52077 = {};return obj52077;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t52081 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52081 = (function (evt,f,create_listener_function,meta52082){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52082 = meta52082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52081.cljs$lang$type = true;
domina.events.t52081.cljs$lang$ctorStr = "domina.events/t52081";
domina.events.t52081.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t52081");
});
domina.events.t52081.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t52081.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t52081.prototype.domina$events$Event$ = true;
domina.events.t52081.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52081.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52081.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52081.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52081.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52081.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52083){var self__ = this;
var _52083__$1 = this;return self__.meta52082;
});
domina.events.t52081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52083,meta52082__$1){var self__ = this;
var _52083__$1 = this;return (new domina.events.t52081(self__.evt,self__.f,self__.create_listener_function,meta52082__$1));
});
domina.events.__GT_t52081 = (function __GT_t52081(evt__$1,f__$1,create_listener_function__$1,meta52082){return (new domina.events.t52081(evt__$1,f__$1,create_listener_function__$1,meta52082));
});
}
return (new domina.events.t52081(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__52088(s__52089){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__52089__$1 = s__52089;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__52089__$1);if(temp__4126__auto__)
{var s__52089__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__52089__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__52089__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__52091 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__52090 = (0);while(true){
if((i__52090 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__52090);cljs.core.chunk_append.call(null,b__52091,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__52092 = (i__52090 + (1));
i__52090 = G__52092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52091),iter__52088.call(null,cljs.core.chunk_rest.call(null,s__52089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52091),null);
}
} else
{var node = cljs.core.first.call(null,s__52089__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__52088.call(null,cljs.core.rest.call(null,s__52089__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__52101 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52102 = null;var count__52103 = (0);var i__52104 = (0);while(true){
if((i__52104 < count__52103))
{var node = cljs.core._nth.call(null,chunk__52102,i__52104);goog.events.removeAll(node);
{
var G__52109 = seq__52101;
var G__52110 = chunk__52102;
var G__52111 = count__52103;
var G__52112 = (i__52104 + (1));
seq__52101 = G__52109;
chunk__52102 = G__52110;
count__52103 = G__52111;
i__52104 = G__52112;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52101);if(temp__4126__auto__)
{var seq__52101__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52101__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52101__$1);{
var G__52113 = cljs.core.chunk_rest.call(null,seq__52101__$1);
var G__52114 = c__4299__auto__;
var G__52115 = cljs.core.count.call(null,c__4299__auto__);
var G__52116 = (0);
seq__52101 = G__52113;
chunk__52102 = G__52114;
count__52103 = G__52115;
i__52104 = G__52116;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__52101__$1);goog.events.removeAll(node);
{
var G__52117 = cljs.core.next.call(null,seq__52101__$1);
var G__52118 = null;
var G__52119 = (0);
var G__52120 = (0);
seq__52101 = G__52117;
chunk__52102 = G__52118;
count__52103 = G__52119;
i__52104 = G__52120;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__52105 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52106 = null;var count__52107 = (0);var i__52108 = (0);while(true){
if((i__52108 < count__52107))
{var node = cljs.core._nth.call(null,chunk__52106,i__52108);goog.events.removeAll(node,type__$1);
{
var G__52121 = seq__52105;
var G__52122 = chunk__52106;
var G__52123 = count__52107;
var G__52124 = (i__52108 + (1));
seq__52105 = G__52121;
chunk__52106 = G__52122;
count__52107 = G__52123;
i__52108 = G__52124;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52105);if(temp__4126__auto__)
{var seq__52105__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52105__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52105__$1);{
var G__52125 = cljs.core.chunk_rest.call(null,seq__52105__$1);
var G__52126 = c__4299__auto__;
var G__52127 = cljs.core.count.call(null,c__4299__auto__);
var G__52128 = (0);
seq__52105 = G__52125;
chunk__52106 = G__52126;
count__52107 = G__52127;
i__52108 = G__52128;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__52105__$1);goog.events.removeAll(node,type__$1);
{
var G__52129 = cljs.core.next.call(null,seq__52105__$1);
var G__52130 = null;
var G__52131 = (0);
var G__52132 = (0);
seq__52105 = G__52129;
chunk__52106 = G__52130;
count__52107 = G__52131;
i__52108 = G__52132;
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
var G__52133 = parent;
var G__52134 = cljs.core.cons.call(null,parent,so_far);
n = G__52133;
so_far = G__52134;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__52143_52151 = cljs.core.seq.call(null,ancestors);var chunk__52144_52152 = null;var count__52145_52153 = (0);var i__52146_52154 = (0);while(true){
if((i__52146_52154 < count__52145_52153))
{var n_52155 = cljs.core._nth.call(null,chunk__52144_52152,i__52146_52154);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52155;
goog.events.fireListeners(n_52155,evt.type,true,evt);
}
{
var G__52156 = seq__52143_52151;
var G__52157 = chunk__52144_52152;
var G__52158 = count__52145_52153;
var G__52159 = (i__52146_52154 + (1));
seq__52143_52151 = G__52156;
chunk__52144_52152 = G__52157;
count__52145_52153 = G__52158;
i__52146_52154 = G__52159;
continue;
}
} else
{var temp__4126__auto___52160 = cljs.core.seq.call(null,seq__52143_52151);if(temp__4126__auto___52160)
{var seq__52143_52161__$1 = temp__4126__auto___52160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52143_52161__$1))
{var c__4299__auto___52162 = cljs.core.chunk_first.call(null,seq__52143_52161__$1);{
var G__52163 = cljs.core.chunk_rest.call(null,seq__52143_52161__$1);
var G__52164 = c__4299__auto___52162;
var G__52165 = cljs.core.count.call(null,c__4299__auto___52162);
var G__52166 = (0);
seq__52143_52151 = G__52163;
chunk__52144_52152 = G__52164;
count__52145_52153 = G__52165;
i__52146_52154 = G__52166;
continue;
}
} else
{var n_52167 = cljs.core.first.call(null,seq__52143_52161__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52167;
goog.events.fireListeners(n_52167,evt.type,true,evt);
}
{
var G__52168 = cljs.core.next.call(null,seq__52143_52161__$1);
var G__52169 = null;
var G__52170 = (0);
var G__52171 = (0);
seq__52143_52151 = G__52168;
chunk__52144_52152 = G__52169;
count__52145_52153 = G__52170;
i__52146_52154 = G__52171;
continue;
}
}
} else
{}
}
break;
}
var seq__52147_52172 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__52148_52173 = null;var count__52149_52174 = (0);var i__52150_52175 = (0);while(true){
if((i__52150_52175 < count__52149_52174))
{var n_52176 = cljs.core._nth.call(null,chunk__52148_52173,i__52150_52175);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52176;
goog.events.fireListeners(n_52176,evt.type,false,evt);
}
{
var G__52177 = seq__52147_52172;
var G__52178 = chunk__52148_52173;
var G__52179 = count__52149_52174;
var G__52180 = (i__52150_52175 + (1));
seq__52147_52172 = G__52177;
chunk__52148_52173 = G__52178;
count__52149_52174 = G__52179;
i__52150_52175 = G__52180;
continue;
}
} else
{var temp__4126__auto___52181 = cljs.core.seq.call(null,seq__52147_52172);if(temp__4126__auto___52181)
{var seq__52147_52182__$1 = temp__4126__auto___52181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52147_52182__$1))
{var c__4299__auto___52183 = cljs.core.chunk_first.call(null,seq__52147_52182__$1);{
var G__52184 = cljs.core.chunk_rest.call(null,seq__52147_52182__$1);
var G__52185 = c__4299__auto___52183;
var G__52186 = cljs.core.count.call(null,c__4299__auto___52183);
var G__52187 = (0);
seq__52147_52172 = G__52184;
chunk__52148_52173 = G__52185;
count__52149_52174 = G__52186;
i__52150_52175 = G__52187;
continue;
}
} else
{var n_52188 = cljs.core.first.call(null,seq__52147_52182__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52188;
goog.events.fireListeners(n_52188,evt.type,false,evt);
}
{
var G__52189 = cljs.core.next.call(null,seq__52147_52182__$1);
var G__52190 = null;
var G__52191 = (0);
var G__52192 = (0);
seq__52147_52172 = G__52189;
chunk__52148_52173 = G__52190;
count__52149_52174 = G__52191;
i__52150_52175 = G__52192;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__52199_52205 = cljs.core.seq.call(null,evt_map);var chunk__52200_52206 = null;var count__52201_52207 = (0);var i__52202_52208 = (0);while(true){
if((i__52202_52208 < count__52201_52207))
{var vec__52203_52209 = cljs.core._nth.call(null,chunk__52200_52206,i__52202_52208);var k_52210 = cljs.core.nth.call(null,vec__52203_52209,(0),null);var v_52211 = cljs.core.nth.call(null,vec__52203_52209,(1),null);(evt[k_52210] = v_52211);
{
var G__52212 = seq__52199_52205;
var G__52213 = chunk__52200_52206;
var G__52214 = count__52201_52207;
var G__52215 = (i__52202_52208 + (1));
seq__52199_52205 = G__52212;
chunk__52200_52206 = G__52213;
count__52201_52207 = G__52214;
i__52202_52208 = G__52215;
continue;
}
} else
{var temp__4126__auto___52216 = cljs.core.seq.call(null,seq__52199_52205);if(temp__4126__auto___52216)
{var seq__52199_52217__$1 = temp__4126__auto___52216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52199_52217__$1))
{var c__4299__auto___52218 = cljs.core.chunk_first.call(null,seq__52199_52217__$1);{
var G__52219 = cljs.core.chunk_rest.call(null,seq__52199_52217__$1);
var G__52220 = c__4299__auto___52218;
var G__52221 = cljs.core.count.call(null,c__4299__auto___52218);
var G__52222 = (0);
seq__52199_52205 = G__52219;
chunk__52200_52206 = G__52220;
count__52201_52207 = G__52221;
i__52202_52208 = G__52222;
continue;
}
} else
{var vec__52204_52223 = cljs.core.first.call(null,seq__52199_52217__$1);var k_52224 = cljs.core.nth.call(null,vec__52204_52223,(0),null);var v_52225 = cljs.core.nth.call(null,vec__52204_52223,(1),null);(evt[k_52224] = v_52225);
{
var G__52226 = cljs.core.next.call(null,seq__52199_52217__$1);
var G__52227 = null;
var G__52228 = (0);
var G__52229 = (0);
seq__52199_52205 = G__52226;
chunk__52200_52206 = G__52227;
count__52201_52207 = G__52228;
i__52202_52208 = G__52229;
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
return (function (p1__52230_SHARP_){return goog.events.getListeners(p1__52230_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map