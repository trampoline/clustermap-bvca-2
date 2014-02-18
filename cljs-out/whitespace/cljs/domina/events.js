// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38076 = {};return obj38076;
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
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38080 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38080 = (function (evt,f,create_listener_function,meta38081){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38081 = meta38081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38080.cljs$lang$type = true;
domina.events.t38080.cljs$lang$ctorStr = "domina.events/t38080";
domina.events.t38080.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38080");
});
domina.events.t38080.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38080.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38080.prototype.domina$events$Event$ = true;
domina.events.t38080.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38080.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38080.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38080.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38080.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38080.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38082){var self__ = this;
var _38082__$1 = this;return self__.meta38081;
});
domina.events.t38080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38082,meta38081__$1){var self__ = this;
var _38082__$1 = this;return (new domina.events.t38080(self__.evt,self__.f,self__.create_listener_function,meta38081__$1));
});
domina.events.__GT_t38080 = (function __GT_t38080(evt__$1,f__$1,create_listener_function__$1,meta38081){return (new domina.events.t38080(evt__$1,f__$1,create_listener_function__$1,meta38081));
});
}
return (new domina.events.t38080(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38087(s__38088){return (new cljs.core.LazySeq(null,(function (){var s__38088__$1 = s__38088;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38088__$1);if(temp__4092__auto__)
{var s__38088__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38088__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38088__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38090 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38089 = 0;while(true){
if((i__38089 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38089);cljs.core.chunk_append.call(null,b__38090,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38091 = (i__38089 + 1);
i__38089 = G__38091;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38090),iter__38087.call(null,cljs.core.chunk_rest.call(null,s__38088__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38090),null);
}
} else
{var node = cljs.core.first.call(null,s__38088__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38087.call(null,cljs.core.rest.call(null,s__38088__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__38100 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38101 = null;var count__38102 = 0;var i__38103 = 0;while(true){
if((i__38103 < count__38102))
{var node = cljs.core._nth.call(null,chunk__38101,i__38103);goog.events.removeAll(node);
{
var G__38108 = seq__38100;
var G__38109 = chunk__38101;
var G__38110 = count__38102;
var G__38111 = (i__38103 + 1);
seq__38100 = G__38108;
chunk__38101 = G__38109;
count__38102 = G__38110;
i__38103 = G__38111;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38100);if(temp__4092__auto__)
{var seq__38100__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38100__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38100__$1);{
var G__38112 = cljs.core.chunk_rest.call(null,seq__38100__$1);
var G__38113 = c__4148__auto__;
var G__38114 = cljs.core.count.call(null,c__4148__auto__);
var G__38115 = 0;
seq__38100 = G__38112;
chunk__38101 = G__38113;
count__38102 = G__38114;
i__38103 = G__38115;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38100__$1);goog.events.removeAll(node);
{
var G__38116 = cljs.core.next.call(null,seq__38100__$1);
var G__38117 = null;
var G__38118 = 0;
var G__38119 = 0;
seq__38100 = G__38116;
chunk__38101 = G__38117;
count__38102 = G__38118;
i__38103 = G__38119;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38104 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38105 = null;var count__38106 = 0;var i__38107 = 0;while(true){
if((i__38107 < count__38106))
{var node = cljs.core._nth.call(null,chunk__38105,i__38107);goog.events.removeAll(node,type__$1);
{
var G__38120 = seq__38104;
var G__38121 = chunk__38105;
var G__38122 = count__38106;
var G__38123 = (i__38107 + 1);
seq__38104 = G__38120;
chunk__38105 = G__38121;
count__38106 = G__38122;
i__38107 = G__38123;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38104);if(temp__4092__auto__)
{var seq__38104__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38104__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38104__$1);{
var G__38124 = cljs.core.chunk_rest.call(null,seq__38104__$1);
var G__38125 = c__4148__auto__;
var G__38126 = cljs.core.count.call(null,c__4148__auto__);
var G__38127 = 0;
seq__38104 = G__38124;
chunk__38105 = G__38125;
count__38106 = G__38126;
i__38107 = G__38127;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38104__$1);goog.events.removeAll(node,type__$1);
{
var G__38128 = cljs.core.next.call(null,seq__38104__$1);
var G__38129 = null;
var G__38130 = 0;
var G__38131 = 0;
seq__38104 = G__38128;
chunk__38105 = G__38129;
count__38106 = G__38130;
i__38107 = G__38131;
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
var G__38132 = parent;
var G__38133 = cljs.core.cons.call(null,parent,so_far);
n = G__38132;
so_far = G__38133;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38142_38150 = cljs.core.seq.call(null,ancestors);var chunk__38143_38151 = null;var count__38144_38152 = 0;var i__38145_38153 = 0;while(true){
if((i__38145_38153 < count__38144_38152))
{var n_38154 = cljs.core._nth.call(null,chunk__38143_38151,i__38145_38153);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38154;
goog.events.fireListeners(n_38154,evt.type,true,evt);
}
{
var G__38155 = seq__38142_38150;
var G__38156 = chunk__38143_38151;
var G__38157 = count__38144_38152;
var G__38158 = (i__38145_38153 + 1);
seq__38142_38150 = G__38155;
chunk__38143_38151 = G__38156;
count__38144_38152 = G__38157;
i__38145_38153 = G__38158;
continue;
}
} else
{var temp__4092__auto___38159 = cljs.core.seq.call(null,seq__38142_38150);if(temp__4092__auto___38159)
{var seq__38142_38160__$1 = temp__4092__auto___38159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38142_38160__$1))
{var c__4148__auto___38161 = cljs.core.chunk_first.call(null,seq__38142_38160__$1);{
var G__38162 = cljs.core.chunk_rest.call(null,seq__38142_38160__$1);
var G__38163 = c__4148__auto___38161;
var G__38164 = cljs.core.count.call(null,c__4148__auto___38161);
var G__38165 = 0;
seq__38142_38150 = G__38162;
chunk__38143_38151 = G__38163;
count__38144_38152 = G__38164;
i__38145_38153 = G__38165;
continue;
}
} else
{var n_38166 = cljs.core.first.call(null,seq__38142_38160__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38166;
goog.events.fireListeners(n_38166,evt.type,true,evt);
}
{
var G__38167 = cljs.core.next.call(null,seq__38142_38160__$1);
var G__38168 = null;
var G__38169 = 0;
var G__38170 = 0;
seq__38142_38150 = G__38167;
chunk__38143_38151 = G__38168;
count__38144_38152 = G__38169;
i__38145_38153 = G__38170;
continue;
}
}
} else
{}
}
break;
}
var seq__38146_38171 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38147_38172 = null;var count__38148_38173 = 0;var i__38149_38174 = 0;while(true){
if((i__38149_38174 < count__38148_38173))
{var n_38175 = cljs.core._nth.call(null,chunk__38147_38172,i__38149_38174);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38175;
goog.events.fireListeners(n_38175,evt.type,false,evt);
}
{
var G__38176 = seq__38146_38171;
var G__38177 = chunk__38147_38172;
var G__38178 = count__38148_38173;
var G__38179 = (i__38149_38174 + 1);
seq__38146_38171 = G__38176;
chunk__38147_38172 = G__38177;
count__38148_38173 = G__38178;
i__38149_38174 = G__38179;
continue;
}
} else
{var temp__4092__auto___38180 = cljs.core.seq.call(null,seq__38146_38171);if(temp__4092__auto___38180)
{var seq__38146_38181__$1 = temp__4092__auto___38180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38146_38181__$1))
{var c__4148__auto___38182 = cljs.core.chunk_first.call(null,seq__38146_38181__$1);{
var G__38183 = cljs.core.chunk_rest.call(null,seq__38146_38181__$1);
var G__38184 = c__4148__auto___38182;
var G__38185 = cljs.core.count.call(null,c__4148__auto___38182);
var G__38186 = 0;
seq__38146_38171 = G__38183;
chunk__38147_38172 = G__38184;
count__38148_38173 = G__38185;
i__38149_38174 = G__38186;
continue;
}
} else
{var n_38187 = cljs.core.first.call(null,seq__38146_38181__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38187;
goog.events.fireListeners(n_38187,evt.type,false,evt);
}
{
var G__38188 = cljs.core.next.call(null,seq__38146_38181__$1);
var G__38189 = null;
var G__38190 = 0;
var G__38191 = 0;
seq__38146_38171 = G__38188;
chunk__38147_38172 = G__38189;
count__38148_38173 = G__38190;
i__38149_38174 = G__38191;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38198_38204 = cljs.core.seq.call(null,evt_map);var chunk__38199_38205 = null;var count__38200_38206 = 0;var i__38201_38207 = 0;while(true){
if((i__38201_38207 < count__38200_38206))
{var vec__38202_38208 = cljs.core._nth.call(null,chunk__38199_38205,i__38201_38207);var k_38209 = cljs.core.nth.call(null,vec__38202_38208,0,null);var v_38210 = cljs.core.nth.call(null,vec__38202_38208,1,null);(evt[k_38209] = v_38210);
{
var G__38211 = seq__38198_38204;
var G__38212 = chunk__38199_38205;
var G__38213 = count__38200_38206;
var G__38214 = (i__38201_38207 + 1);
seq__38198_38204 = G__38211;
chunk__38199_38205 = G__38212;
count__38200_38206 = G__38213;
i__38201_38207 = G__38214;
continue;
}
} else
{var temp__4092__auto___38215 = cljs.core.seq.call(null,seq__38198_38204);if(temp__4092__auto___38215)
{var seq__38198_38216__$1 = temp__4092__auto___38215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38198_38216__$1))
{var c__4148__auto___38217 = cljs.core.chunk_first.call(null,seq__38198_38216__$1);{
var G__38218 = cljs.core.chunk_rest.call(null,seq__38198_38216__$1);
var G__38219 = c__4148__auto___38217;
var G__38220 = cljs.core.count.call(null,c__4148__auto___38217);
var G__38221 = 0;
seq__38198_38204 = G__38218;
chunk__38199_38205 = G__38219;
count__38200_38206 = G__38220;
i__38201_38207 = G__38221;
continue;
}
} else
{var vec__38203_38222 = cljs.core.first.call(null,seq__38198_38216__$1);var k_38223 = cljs.core.nth.call(null,vec__38203_38222,0,null);var v_38224 = cljs.core.nth.call(null,vec__38203_38222,1,null);(evt[k_38223] = v_38224);
{
var G__38225 = cljs.core.next.call(null,seq__38198_38216__$1);
var G__38226 = null;
var G__38227 = 0;
var G__38228 = 0;
seq__38198_38204 = G__38225;
chunk__38199_38205 = G__38226;
count__38200_38206 = G__38227;
i__38201_38207 = G__38228;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38229_SHARP_){return goog.events.getListeners(p1__38229_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
