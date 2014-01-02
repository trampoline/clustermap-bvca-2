// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19069 = {};return obj19069;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19073 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19073 = (function (evt,f,create_listener_function,meta19074){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19074 = meta19074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19073.cljs$lang$type = true;
domina.events.t19073.cljs$lang$ctorStr = "domina.events/t19073";
domina.events.t19073.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t19073");
});
domina.events.t19073.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19073.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t19073.prototype.domina$events$Event$ = true;
domina.events.t19073.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19073.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19073.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19073.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19073.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19073.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19075){var self__ = this;
var _19075__$1 = this;return self__.meta19074;
});
domina.events.t19073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19075,meta19074__$1){var self__ = this;
var _19075__$1 = this;return (new domina.events.t19073(self__.evt,self__.f,self__.create_listener_function,meta19074__$1));
});
domina.events.__GT_t19073 = (function __GT_t19073(evt__$1,f__$1,create_listener_function__$1,meta19074){return (new domina.events.t19073(evt__$1,f__$1,create_listener_function__$1,meta19074));
});
}
return (new domina.events.t19073(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__19080(s__19081){return (new cljs.core.LazySeq(null,(function (){var s__19081__$1 = s__19081;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19081__$1);if(temp__4092__auto__)
{var s__19081__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19081__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__19081__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__19083 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__19082 = 0;while(true){
if((i__19082 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__19082);cljs.core.chunk_append.call(null,b__19083,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19084 = (i__19082 + 1);
i__19082 = G__19084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19083),iter__19080.call(null,cljs.core.chunk_rest.call(null,s__19081__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19083),null);
}
} else
{var node = cljs.core.first.call(null,s__19081__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19080.call(null,cljs.core.rest.call(null,s__19081__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19093 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19094 = null;var count__19095 = 0;var i__19096 = 0;while(true){
if((i__19096 < count__19095))
{var node = cljs.core._nth.call(null,chunk__19094,i__19096);goog.events.removeAll(node);
{
var G__19101 = seq__19093;
var G__19102 = chunk__19094;
var G__19103 = count__19095;
var G__19104 = (i__19096 + 1);
seq__19093 = G__19101;
chunk__19094 = G__19102;
count__19095 = G__19103;
i__19096 = G__19104;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19093);if(temp__4092__auto__)
{var seq__19093__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19093__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19093__$1);{
var G__19105 = cljs.core.chunk_rest.call(null,seq__19093__$1);
var G__19106 = c__4015__auto__;
var G__19107 = cljs.core.count.call(null,c__4015__auto__);
var G__19108 = 0;
seq__19093 = G__19105;
chunk__19094 = G__19106;
count__19095 = G__19107;
i__19096 = G__19108;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19093__$1);goog.events.removeAll(node);
{
var G__19109 = cljs.core.next.call(null,seq__19093__$1);
var G__19110 = null;
var G__19111 = 0;
var G__19112 = 0;
seq__19093 = G__19109;
chunk__19094 = G__19110;
count__19095 = G__19111;
i__19096 = G__19112;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19098 = null;var count__19099 = 0;var i__19100 = 0;while(true){
if((i__19100 < count__19099))
{var node = cljs.core._nth.call(null,chunk__19098,i__19100);goog.events.removeAll(node,type__$1);
{
var G__19113 = seq__19097;
var G__19114 = chunk__19098;
var G__19115 = count__19099;
var G__19116 = (i__19100 + 1);
seq__19097 = G__19113;
chunk__19098 = G__19114;
count__19099 = G__19115;
i__19100 = G__19116;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19097);if(temp__4092__auto__)
{var seq__19097__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19097__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19097__$1);{
var G__19117 = cljs.core.chunk_rest.call(null,seq__19097__$1);
var G__19118 = c__4015__auto__;
var G__19119 = cljs.core.count.call(null,c__4015__auto__);
var G__19120 = 0;
seq__19097 = G__19117;
chunk__19098 = G__19118;
count__19099 = G__19119;
i__19100 = G__19120;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19097__$1);goog.events.removeAll(node,type__$1);
{
var G__19121 = cljs.core.next.call(null,seq__19097__$1);
var G__19122 = null;
var G__19123 = 0;
var G__19124 = 0;
seq__19097 = G__19121;
chunk__19098 = G__19122;
count__19099 = G__19123;
i__19100 = G__19124;
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
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__19125 = parent;
var G__19126 = cljs.core.cons.call(null,parent,so_far);
n = G__19125;
so_far = G__19126;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19135_19143 = cljs.core.seq.call(null,ancestors);var chunk__19136_19144 = null;var count__19137_19145 = 0;var i__19138_19146 = 0;while(true){
if((i__19138_19146 < count__19137_19145))
{var n_19147 = cljs.core._nth.call(null,chunk__19136_19144,i__19138_19146);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19147;
goog.events.fireListeners(n_19147,evt.type,true,evt);
}
{
var G__19148 = seq__19135_19143;
var G__19149 = chunk__19136_19144;
var G__19150 = count__19137_19145;
var G__19151 = (i__19138_19146 + 1);
seq__19135_19143 = G__19148;
chunk__19136_19144 = G__19149;
count__19137_19145 = G__19150;
i__19138_19146 = G__19151;
continue;
}
} else
{var temp__4092__auto___19152 = cljs.core.seq.call(null,seq__19135_19143);if(temp__4092__auto___19152)
{var seq__19135_19153__$1 = temp__4092__auto___19152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19135_19153__$1))
{var c__4015__auto___19154 = cljs.core.chunk_first.call(null,seq__19135_19153__$1);{
var G__19155 = cljs.core.chunk_rest.call(null,seq__19135_19153__$1);
var G__19156 = c__4015__auto___19154;
var G__19157 = cljs.core.count.call(null,c__4015__auto___19154);
var G__19158 = 0;
seq__19135_19143 = G__19155;
chunk__19136_19144 = G__19156;
count__19137_19145 = G__19157;
i__19138_19146 = G__19158;
continue;
}
} else
{var n_19159 = cljs.core.first.call(null,seq__19135_19153__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19159;
goog.events.fireListeners(n_19159,evt.type,true,evt);
}
{
var G__19160 = cljs.core.next.call(null,seq__19135_19153__$1);
var G__19161 = null;
var G__19162 = 0;
var G__19163 = 0;
seq__19135_19143 = G__19160;
chunk__19136_19144 = G__19161;
count__19137_19145 = G__19162;
i__19138_19146 = G__19163;
continue;
}
}
} else
{}
}
break;
}
var seq__19139_19164 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19140_19165 = null;var count__19141_19166 = 0;var i__19142_19167 = 0;while(true){
if((i__19142_19167 < count__19141_19166))
{var n_19168 = cljs.core._nth.call(null,chunk__19140_19165,i__19142_19167);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19168;
goog.events.fireListeners(n_19168,evt.type,false,evt);
}
{
var G__19169 = seq__19139_19164;
var G__19170 = chunk__19140_19165;
var G__19171 = count__19141_19166;
var G__19172 = (i__19142_19167 + 1);
seq__19139_19164 = G__19169;
chunk__19140_19165 = G__19170;
count__19141_19166 = G__19171;
i__19142_19167 = G__19172;
continue;
}
} else
{var temp__4092__auto___19173 = cljs.core.seq.call(null,seq__19139_19164);if(temp__4092__auto___19173)
{var seq__19139_19174__$1 = temp__4092__auto___19173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19139_19174__$1))
{var c__4015__auto___19175 = cljs.core.chunk_first.call(null,seq__19139_19174__$1);{
var G__19176 = cljs.core.chunk_rest.call(null,seq__19139_19174__$1);
var G__19177 = c__4015__auto___19175;
var G__19178 = cljs.core.count.call(null,c__4015__auto___19175);
var G__19179 = 0;
seq__19139_19164 = G__19176;
chunk__19140_19165 = G__19177;
count__19141_19166 = G__19178;
i__19142_19167 = G__19179;
continue;
}
} else
{var n_19180 = cljs.core.first.call(null,seq__19139_19174__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19180;
goog.events.fireListeners(n_19180,evt.type,false,evt);
}
{
var G__19181 = cljs.core.next.call(null,seq__19139_19174__$1);
var G__19182 = null;
var G__19183 = 0;
var G__19184 = 0;
seq__19139_19164 = G__19181;
chunk__19140_19165 = G__19182;
count__19141_19166 = G__19183;
i__19142_19167 = G__19184;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19191_19197 = cljs.core.seq.call(null,evt_map);var chunk__19192_19198 = null;var count__19193_19199 = 0;var i__19194_19200 = 0;while(true){
if((i__19194_19200 < count__19193_19199))
{var vec__19195_19201 = cljs.core._nth.call(null,chunk__19192_19198,i__19194_19200);var k_19202 = cljs.core.nth.call(null,vec__19195_19201,0,null);var v_19203 = cljs.core.nth.call(null,vec__19195_19201,1,null);(evt[k_19202] = v_19203);
{
var G__19204 = seq__19191_19197;
var G__19205 = chunk__19192_19198;
var G__19206 = count__19193_19199;
var G__19207 = (i__19194_19200 + 1);
seq__19191_19197 = G__19204;
chunk__19192_19198 = G__19205;
count__19193_19199 = G__19206;
i__19194_19200 = G__19207;
continue;
}
} else
{var temp__4092__auto___19208 = cljs.core.seq.call(null,seq__19191_19197);if(temp__4092__auto___19208)
{var seq__19191_19209__$1 = temp__4092__auto___19208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19191_19209__$1))
{var c__4015__auto___19210 = cljs.core.chunk_first.call(null,seq__19191_19209__$1);{
var G__19211 = cljs.core.chunk_rest.call(null,seq__19191_19209__$1);
var G__19212 = c__4015__auto___19210;
var G__19213 = cljs.core.count.call(null,c__4015__auto___19210);
var G__19214 = 0;
seq__19191_19197 = G__19211;
chunk__19192_19198 = G__19212;
count__19193_19199 = G__19213;
i__19194_19200 = G__19214;
continue;
}
} else
{var vec__19196_19215 = cljs.core.first.call(null,seq__19191_19209__$1);var k_19216 = cljs.core.nth.call(null,vec__19196_19215,0,null);var v_19217 = cljs.core.nth.call(null,vec__19196_19215,1,null);(evt[k_19216] = v_19217);
{
var G__19218 = cljs.core.next.call(null,seq__19191_19209__$1);
var G__19219 = null;
var G__19220 = 0;
var G__19221 = 0;
seq__19191_19197 = G__19218;
chunk__19192_19198 = G__19219;
count__19193_19199 = G__19220;
i__19194_19200 = G__19221;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__19222_SHARP_){return goog.events.getListeners(p1__19222_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map