// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj29075 = {};return obj29075;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t29079 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t29079 = (function (evt,f,create_listener_function,meta29080){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta29080 = meta29080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t29079.cljs$lang$type = true;
domina.events.t29079.cljs$lang$ctorStr = "domina.events/t29079";
domina.events.t29079.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t29079");
});
domina.events.t29079.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t29079.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t29079.prototype.domina$events$Event$ = true;
domina.events.t29079.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t29079.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t29079.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t29079.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t29079.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t29079.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t29079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29081){var self__ = this;
var _29081__$1 = this;return self__.meta29080;
});
domina.events.t29079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29081,meta29080__$1){var self__ = this;
var _29081__$1 = this;return (new domina.events.t29079(self__.evt,self__.f,self__.create_listener_function,meta29080__$1));
});
domina.events.__GT_t29079 = (function __GT_t29079(evt__$1,f__$1,create_listener_function__$1,meta29080){return (new domina.events.t29079(evt__$1,f__$1,create_listener_function__$1,meta29080));
});
}
return (new domina.events.t29079(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__29086(s__29087){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__29087__$1 = s__29087;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29087__$1);if(temp__4126__auto__)
{var s__29087__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29087__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29087__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29089 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29088 = (0);while(true){
if((i__29088 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__29088);cljs.core.chunk_append.call(null,b__29089,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__29090 = (i__29088 + (1));
i__29088 = G__29090;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29089),iter__29086.call(null,cljs.core.chunk_rest.call(null,s__29087__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29089),null);
}
} else
{var node = cljs.core.first.call(null,s__29087__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__29086.call(null,cljs.core.rest.call(null,s__29087__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__29099 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29100 = null;var count__29101 = (0);var i__29102 = (0);while(true){
if((i__29102 < count__29101))
{var node = cljs.core._nth.call(null,chunk__29100,i__29102);goog.events.removeAll(node);
{
var G__29107 = seq__29099;
var G__29108 = chunk__29100;
var G__29109 = count__29101;
var G__29110 = (i__29102 + (1));
seq__29099 = G__29107;
chunk__29100 = G__29108;
count__29101 = G__29109;
i__29102 = G__29110;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29099);if(temp__4126__auto__)
{var seq__29099__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29099__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29099__$1);{
var G__29111 = cljs.core.chunk_rest.call(null,seq__29099__$1);
var G__29112 = c__4299__auto__;
var G__29113 = cljs.core.count.call(null,c__4299__auto__);
var G__29114 = (0);
seq__29099 = G__29111;
chunk__29100 = G__29112;
count__29101 = G__29113;
i__29102 = G__29114;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29099__$1);goog.events.removeAll(node);
{
var G__29115 = cljs.core.next.call(null,seq__29099__$1);
var G__29116 = null;
var G__29117 = (0);
var G__29118 = (0);
seq__29099 = G__29115;
chunk__29100 = G__29116;
count__29101 = G__29117;
i__29102 = G__29118;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__29103 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29104 = null;var count__29105 = (0);var i__29106 = (0);while(true){
if((i__29106 < count__29105))
{var node = cljs.core._nth.call(null,chunk__29104,i__29106);goog.events.removeAll(node,type__$1);
{
var G__29119 = seq__29103;
var G__29120 = chunk__29104;
var G__29121 = count__29105;
var G__29122 = (i__29106 + (1));
seq__29103 = G__29119;
chunk__29104 = G__29120;
count__29105 = G__29121;
i__29106 = G__29122;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29103);if(temp__4126__auto__)
{var seq__29103__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29103__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29103__$1);{
var G__29123 = cljs.core.chunk_rest.call(null,seq__29103__$1);
var G__29124 = c__4299__auto__;
var G__29125 = cljs.core.count.call(null,c__4299__auto__);
var G__29126 = (0);
seq__29103 = G__29123;
chunk__29104 = G__29124;
count__29105 = G__29125;
i__29106 = G__29126;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29103__$1);goog.events.removeAll(node,type__$1);
{
var G__29127 = cljs.core.next.call(null,seq__29103__$1);
var G__29128 = null;
var G__29129 = (0);
var G__29130 = (0);
seq__29103 = G__29127;
chunk__29104 = G__29128;
count__29105 = G__29129;
i__29106 = G__29130;
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
var G__29131 = parent;
var G__29132 = cljs.core.cons.call(null,parent,so_far);
n = G__29131;
so_far = G__29132;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__29141_29149 = cljs.core.seq.call(null,ancestors);var chunk__29142_29150 = null;var count__29143_29151 = (0);var i__29144_29152 = (0);while(true){
if((i__29144_29152 < count__29143_29151))
{var n_29153 = cljs.core._nth.call(null,chunk__29142_29150,i__29144_29152);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29153;
goog.events.fireListeners(n_29153,evt.type,true,evt);
}
{
var G__29154 = seq__29141_29149;
var G__29155 = chunk__29142_29150;
var G__29156 = count__29143_29151;
var G__29157 = (i__29144_29152 + (1));
seq__29141_29149 = G__29154;
chunk__29142_29150 = G__29155;
count__29143_29151 = G__29156;
i__29144_29152 = G__29157;
continue;
}
} else
{var temp__4126__auto___29158 = cljs.core.seq.call(null,seq__29141_29149);if(temp__4126__auto___29158)
{var seq__29141_29159__$1 = temp__4126__auto___29158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29141_29159__$1))
{var c__4299__auto___29160 = cljs.core.chunk_first.call(null,seq__29141_29159__$1);{
var G__29161 = cljs.core.chunk_rest.call(null,seq__29141_29159__$1);
var G__29162 = c__4299__auto___29160;
var G__29163 = cljs.core.count.call(null,c__4299__auto___29160);
var G__29164 = (0);
seq__29141_29149 = G__29161;
chunk__29142_29150 = G__29162;
count__29143_29151 = G__29163;
i__29144_29152 = G__29164;
continue;
}
} else
{var n_29165 = cljs.core.first.call(null,seq__29141_29159__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29165;
goog.events.fireListeners(n_29165,evt.type,true,evt);
}
{
var G__29166 = cljs.core.next.call(null,seq__29141_29159__$1);
var G__29167 = null;
var G__29168 = (0);
var G__29169 = (0);
seq__29141_29149 = G__29166;
chunk__29142_29150 = G__29167;
count__29143_29151 = G__29168;
i__29144_29152 = G__29169;
continue;
}
}
} else
{}
}
break;
}
var seq__29145_29170 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__29146_29171 = null;var count__29147_29172 = (0);var i__29148_29173 = (0);while(true){
if((i__29148_29173 < count__29147_29172))
{var n_29174 = cljs.core._nth.call(null,chunk__29146_29171,i__29148_29173);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29174;
goog.events.fireListeners(n_29174,evt.type,false,evt);
}
{
var G__29175 = seq__29145_29170;
var G__29176 = chunk__29146_29171;
var G__29177 = count__29147_29172;
var G__29178 = (i__29148_29173 + (1));
seq__29145_29170 = G__29175;
chunk__29146_29171 = G__29176;
count__29147_29172 = G__29177;
i__29148_29173 = G__29178;
continue;
}
} else
{var temp__4126__auto___29179 = cljs.core.seq.call(null,seq__29145_29170);if(temp__4126__auto___29179)
{var seq__29145_29180__$1 = temp__4126__auto___29179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29145_29180__$1))
{var c__4299__auto___29181 = cljs.core.chunk_first.call(null,seq__29145_29180__$1);{
var G__29182 = cljs.core.chunk_rest.call(null,seq__29145_29180__$1);
var G__29183 = c__4299__auto___29181;
var G__29184 = cljs.core.count.call(null,c__4299__auto___29181);
var G__29185 = (0);
seq__29145_29170 = G__29182;
chunk__29146_29171 = G__29183;
count__29147_29172 = G__29184;
i__29148_29173 = G__29185;
continue;
}
} else
{var n_29186 = cljs.core.first.call(null,seq__29145_29180__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29186;
goog.events.fireListeners(n_29186,evt.type,false,evt);
}
{
var G__29187 = cljs.core.next.call(null,seq__29145_29180__$1);
var G__29188 = null;
var G__29189 = (0);
var G__29190 = (0);
seq__29145_29170 = G__29187;
chunk__29146_29171 = G__29188;
count__29147_29172 = G__29189;
i__29148_29173 = G__29190;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__29197_29203 = cljs.core.seq.call(null,evt_map);var chunk__29198_29204 = null;var count__29199_29205 = (0);var i__29200_29206 = (0);while(true){
if((i__29200_29206 < count__29199_29205))
{var vec__29201_29207 = cljs.core._nth.call(null,chunk__29198_29204,i__29200_29206);var k_29208 = cljs.core.nth.call(null,vec__29201_29207,(0),null);var v_29209 = cljs.core.nth.call(null,vec__29201_29207,(1),null);(evt[k_29208] = v_29209);
{
var G__29210 = seq__29197_29203;
var G__29211 = chunk__29198_29204;
var G__29212 = count__29199_29205;
var G__29213 = (i__29200_29206 + (1));
seq__29197_29203 = G__29210;
chunk__29198_29204 = G__29211;
count__29199_29205 = G__29212;
i__29200_29206 = G__29213;
continue;
}
} else
{var temp__4126__auto___29214 = cljs.core.seq.call(null,seq__29197_29203);if(temp__4126__auto___29214)
{var seq__29197_29215__$1 = temp__4126__auto___29214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29197_29215__$1))
{var c__4299__auto___29216 = cljs.core.chunk_first.call(null,seq__29197_29215__$1);{
var G__29217 = cljs.core.chunk_rest.call(null,seq__29197_29215__$1);
var G__29218 = c__4299__auto___29216;
var G__29219 = cljs.core.count.call(null,c__4299__auto___29216);
var G__29220 = (0);
seq__29197_29203 = G__29217;
chunk__29198_29204 = G__29218;
count__29199_29205 = G__29219;
i__29200_29206 = G__29220;
continue;
}
} else
{var vec__29202_29221 = cljs.core.first.call(null,seq__29197_29215__$1);var k_29222 = cljs.core.nth.call(null,vec__29202_29221,(0),null);var v_29223 = cljs.core.nth.call(null,vec__29202_29221,(1),null);(evt[k_29222] = v_29223);
{
var G__29224 = cljs.core.next.call(null,seq__29197_29215__$1);
var G__29225 = null;
var G__29226 = (0);
var G__29227 = (0);
seq__29197_29203 = G__29224;
chunk__29198_29204 = G__29225;
count__29199_29205 = G__29226;
i__29200_29206 = G__29227;
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
return (function (p1__29228_SHARP_){return goog.events.getListeners(p1__29228_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
