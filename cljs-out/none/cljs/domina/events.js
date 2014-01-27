// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16121 = {};return obj16121;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16125 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16125 = (function (evt,f,create_listener_function,meta16126){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16126 = meta16126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16125.cljs$lang$type = true;
domina.events.t16125.cljs$lang$ctorStr = "domina.events/t16125";
domina.events.t16125.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16125");
});
domina.events.t16125.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16125.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16125.prototype.domina$events$Event$ = true;
domina.events.t16125.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16125.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16125.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16125.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16125.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16125.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16127){var self__ = this;
var _16127__$1 = this;return self__.meta16126;
});
domina.events.t16125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16127,meta16126__$1){var self__ = this;
var _16127__$1 = this;return (new domina.events.t16125(self__.evt,self__.f,self__.create_listener_function,meta16126__$1));
});
domina.events.__GT_t16125 = (function __GT_t16125(evt__$1,f__$1,create_listener_function__$1,meta16126){return (new domina.events.t16125(evt__$1,f__$1,create_listener_function__$1,meta16126));
});
}
return (new domina.events.t16125(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16132(s__16133){return (new cljs.core.LazySeq(null,(function (){var s__16133__$1 = s__16133;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16133__$1);if(temp__4092__auto__)
{var s__16133__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16133__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16133__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16135 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16134 = 0;while(true){
if((i__16134 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16134);cljs.core.chunk_append.call(null,b__16135,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16136 = (i__16134 + 1);
i__16134 = G__16136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16135),iter__16132.call(null,cljs.core.chunk_rest.call(null,s__16133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16135),null);
}
} else
{var node = cljs.core.first.call(null,s__16133__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16132.call(null,cljs.core.rest.call(null,s__16133__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16146 = null;var count__16147 = 0;var i__16148 = 0;while(true){
if((i__16148 < count__16147))
{var node = cljs.core._nth.call(null,chunk__16146,i__16148);goog.events.removeAll(node);
{
var G__16153 = seq__16145;
var G__16154 = chunk__16146;
var G__16155 = count__16147;
var G__16156 = (i__16148 + 1);
seq__16145 = G__16153;
chunk__16146 = G__16154;
count__16147 = G__16155;
i__16148 = G__16156;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16145);if(temp__4092__auto__)
{var seq__16145__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16145__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16145__$1);{
var G__16157 = cljs.core.chunk_rest.call(null,seq__16145__$1);
var G__16158 = c__4148__auto__;
var G__16159 = cljs.core.count.call(null,c__4148__auto__);
var G__16160 = 0;
seq__16145 = G__16157;
chunk__16146 = G__16158;
count__16147 = G__16159;
i__16148 = G__16160;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16145__$1);goog.events.removeAll(node);
{
var G__16161 = cljs.core.next.call(null,seq__16145__$1);
var G__16162 = null;
var G__16163 = 0;
var G__16164 = 0;
seq__16145 = G__16161;
chunk__16146 = G__16162;
count__16147 = G__16163;
i__16148 = G__16164;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16150 = null;var count__16151 = 0;var i__16152 = 0;while(true){
if((i__16152 < count__16151))
{var node = cljs.core._nth.call(null,chunk__16150,i__16152);goog.events.removeAll(node,type__$1);
{
var G__16165 = seq__16149;
var G__16166 = chunk__16150;
var G__16167 = count__16151;
var G__16168 = (i__16152 + 1);
seq__16149 = G__16165;
chunk__16150 = G__16166;
count__16151 = G__16167;
i__16152 = G__16168;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16149);if(temp__4092__auto__)
{var seq__16149__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16149__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16149__$1);{
var G__16169 = cljs.core.chunk_rest.call(null,seq__16149__$1);
var G__16170 = c__4148__auto__;
var G__16171 = cljs.core.count.call(null,c__4148__auto__);
var G__16172 = 0;
seq__16149 = G__16169;
chunk__16150 = G__16170;
count__16151 = G__16171;
i__16152 = G__16172;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16149__$1);goog.events.removeAll(node,type__$1);
{
var G__16173 = cljs.core.next.call(null,seq__16149__$1);
var G__16174 = null;
var G__16175 = 0;
var G__16176 = 0;
seq__16149 = G__16173;
chunk__16150 = G__16174;
count__16151 = G__16175;
i__16152 = G__16176;
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
var G__16177 = parent;
var G__16178 = cljs.core.cons.call(null,parent,so_far);
n = G__16177;
so_far = G__16178;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16187_16195 = cljs.core.seq.call(null,ancestors);var chunk__16188_16196 = null;var count__16189_16197 = 0;var i__16190_16198 = 0;while(true){
if((i__16190_16198 < count__16189_16197))
{var n_16199 = cljs.core._nth.call(null,chunk__16188_16196,i__16190_16198);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16199;
goog.events.fireListeners(n_16199,evt.type,true,evt);
}
{
var G__16200 = seq__16187_16195;
var G__16201 = chunk__16188_16196;
var G__16202 = count__16189_16197;
var G__16203 = (i__16190_16198 + 1);
seq__16187_16195 = G__16200;
chunk__16188_16196 = G__16201;
count__16189_16197 = G__16202;
i__16190_16198 = G__16203;
continue;
}
} else
{var temp__4092__auto___16204 = cljs.core.seq.call(null,seq__16187_16195);if(temp__4092__auto___16204)
{var seq__16187_16205__$1 = temp__4092__auto___16204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16187_16205__$1))
{var c__4148__auto___16206 = cljs.core.chunk_first.call(null,seq__16187_16205__$1);{
var G__16207 = cljs.core.chunk_rest.call(null,seq__16187_16205__$1);
var G__16208 = c__4148__auto___16206;
var G__16209 = cljs.core.count.call(null,c__4148__auto___16206);
var G__16210 = 0;
seq__16187_16195 = G__16207;
chunk__16188_16196 = G__16208;
count__16189_16197 = G__16209;
i__16190_16198 = G__16210;
continue;
}
} else
{var n_16211 = cljs.core.first.call(null,seq__16187_16205__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16211;
goog.events.fireListeners(n_16211,evt.type,true,evt);
}
{
var G__16212 = cljs.core.next.call(null,seq__16187_16205__$1);
var G__16213 = null;
var G__16214 = 0;
var G__16215 = 0;
seq__16187_16195 = G__16212;
chunk__16188_16196 = G__16213;
count__16189_16197 = G__16214;
i__16190_16198 = G__16215;
continue;
}
}
} else
{}
}
break;
}
var seq__16191_16216 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16192_16217 = null;var count__16193_16218 = 0;var i__16194_16219 = 0;while(true){
if((i__16194_16219 < count__16193_16218))
{var n_16220 = cljs.core._nth.call(null,chunk__16192_16217,i__16194_16219);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16220;
goog.events.fireListeners(n_16220,evt.type,false,evt);
}
{
var G__16221 = seq__16191_16216;
var G__16222 = chunk__16192_16217;
var G__16223 = count__16193_16218;
var G__16224 = (i__16194_16219 + 1);
seq__16191_16216 = G__16221;
chunk__16192_16217 = G__16222;
count__16193_16218 = G__16223;
i__16194_16219 = G__16224;
continue;
}
} else
{var temp__4092__auto___16225 = cljs.core.seq.call(null,seq__16191_16216);if(temp__4092__auto___16225)
{var seq__16191_16226__$1 = temp__4092__auto___16225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16191_16226__$1))
{var c__4148__auto___16227 = cljs.core.chunk_first.call(null,seq__16191_16226__$1);{
var G__16228 = cljs.core.chunk_rest.call(null,seq__16191_16226__$1);
var G__16229 = c__4148__auto___16227;
var G__16230 = cljs.core.count.call(null,c__4148__auto___16227);
var G__16231 = 0;
seq__16191_16216 = G__16228;
chunk__16192_16217 = G__16229;
count__16193_16218 = G__16230;
i__16194_16219 = G__16231;
continue;
}
} else
{var n_16232 = cljs.core.first.call(null,seq__16191_16226__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16232;
goog.events.fireListeners(n_16232,evt.type,false,evt);
}
{
var G__16233 = cljs.core.next.call(null,seq__16191_16226__$1);
var G__16234 = null;
var G__16235 = 0;
var G__16236 = 0;
seq__16191_16216 = G__16233;
chunk__16192_16217 = G__16234;
count__16193_16218 = G__16235;
i__16194_16219 = G__16236;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16243_16249 = cljs.core.seq.call(null,evt_map);var chunk__16244_16250 = null;var count__16245_16251 = 0;var i__16246_16252 = 0;while(true){
if((i__16246_16252 < count__16245_16251))
{var vec__16247_16253 = cljs.core._nth.call(null,chunk__16244_16250,i__16246_16252);var k_16254 = cljs.core.nth.call(null,vec__16247_16253,0,null);var v_16255 = cljs.core.nth.call(null,vec__16247_16253,1,null);(evt[k_16254] = v_16255);
{
var G__16256 = seq__16243_16249;
var G__16257 = chunk__16244_16250;
var G__16258 = count__16245_16251;
var G__16259 = (i__16246_16252 + 1);
seq__16243_16249 = G__16256;
chunk__16244_16250 = G__16257;
count__16245_16251 = G__16258;
i__16246_16252 = G__16259;
continue;
}
} else
{var temp__4092__auto___16260 = cljs.core.seq.call(null,seq__16243_16249);if(temp__4092__auto___16260)
{var seq__16243_16261__$1 = temp__4092__auto___16260;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16243_16261__$1))
{var c__4148__auto___16262 = cljs.core.chunk_first.call(null,seq__16243_16261__$1);{
var G__16263 = cljs.core.chunk_rest.call(null,seq__16243_16261__$1);
var G__16264 = c__4148__auto___16262;
var G__16265 = cljs.core.count.call(null,c__4148__auto___16262);
var G__16266 = 0;
seq__16243_16249 = G__16263;
chunk__16244_16250 = G__16264;
count__16245_16251 = G__16265;
i__16246_16252 = G__16266;
continue;
}
} else
{var vec__16248_16267 = cljs.core.first.call(null,seq__16243_16261__$1);var k_16268 = cljs.core.nth.call(null,vec__16248_16267,0,null);var v_16269 = cljs.core.nth.call(null,vec__16248_16267,1,null);(evt[k_16268] = v_16269);
{
var G__16270 = cljs.core.next.call(null,seq__16243_16261__$1);
var G__16271 = null;
var G__16272 = 0;
var G__16273 = 0;
seq__16243_16249 = G__16270;
chunk__16244_16250 = G__16271;
count__16245_16251 = G__16272;
i__16246_16252 = G__16273;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16274_SHARP_){return goog.events.getListeners(p1__16274_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map