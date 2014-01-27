// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16114 = {};return obj16114;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16118 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16118 = (function (evt,f,create_listener_function,meta16119){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16119 = meta16119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16118.cljs$lang$type = true;
domina.events.t16118.cljs$lang$ctorStr = "domina.events/t16118";
domina.events.t16118.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16118");
});
domina.events.t16118.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16118.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16118.prototype.domina$events$Event$ = true;
domina.events.t16118.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16118.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16118.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16118.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16118.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16118.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16120){var self__ = this;
var _16120__$1 = this;return self__.meta16119;
});
domina.events.t16118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16120,meta16119__$1){var self__ = this;
var _16120__$1 = this;return (new domina.events.t16118(self__.evt,self__.f,self__.create_listener_function,meta16119__$1));
});
domina.events.__GT_t16118 = (function __GT_t16118(evt__$1,f__$1,create_listener_function__$1,meta16119){return (new domina.events.t16118(evt__$1,f__$1,create_listener_function__$1,meta16119));
});
}
return (new domina.events.t16118(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16125(s__16126){return (new cljs.core.LazySeq(null,(function (){var s__16126__$1 = s__16126;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16126__$1);if(temp__4092__auto__)
{var s__16126__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16126__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16126__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16128 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16127 = 0;while(true){
if((i__16127 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16127);cljs.core.chunk_append.call(null,b__16128,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16129 = (i__16127 + 1);
i__16127 = G__16129;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16128),iter__16125.call(null,cljs.core.chunk_rest.call(null,s__16126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16128),null);
}
} else
{var node = cljs.core.first.call(null,s__16126__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16125.call(null,cljs.core.rest.call(null,s__16126__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16138 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16139 = null;var count__16140 = 0;var i__16141 = 0;while(true){
if((i__16141 < count__16140))
{var node = cljs.core._nth.call(null,chunk__16139,i__16141);goog.events.removeAll(node);
{
var G__16146 = seq__16138;
var G__16147 = chunk__16139;
var G__16148 = count__16140;
var G__16149 = (i__16141 + 1);
seq__16138 = G__16146;
chunk__16139 = G__16147;
count__16140 = G__16148;
i__16141 = G__16149;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16138);if(temp__4092__auto__)
{var seq__16138__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16138__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16138__$1);{
var G__16150 = cljs.core.chunk_rest.call(null,seq__16138__$1);
var G__16151 = c__4148__auto__;
var G__16152 = cljs.core.count.call(null,c__4148__auto__);
var G__16153 = 0;
seq__16138 = G__16150;
chunk__16139 = G__16151;
count__16140 = G__16152;
i__16141 = G__16153;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16138__$1);goog.events.removeAll(node);
{
var G__16154 = cljs.core.next.call(null,seq__16138__$1);
var G__16155 = null;
var G__16156 = 0;
var G__16157 = 0;
seq__16138 = G__16154;
chunk__16139 = G__16155;
count__16140 = G__16156;
i__16141 = G__16157;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16142 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16143 = null;var count__16144 = 0;var i__16145 = 0;while(true){
if((i__16145 < count__16144))
{var node = cljs.core._nth.call(null,chunk__16143,i__16145);goog.events.removeAll(node,type__$1);
{
var G__16158 = seq__16142;
var G__16159 = chunk__16143;
var G__16160 = count__16144;
var G__16161 = (i__16145 + 1);
seq__16142 = G__16158;
chunk__16143 = G__16159;
count__16144 = G__16160;
i__16145 = G__16161;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16142);if(temp__4092__auto__)
{var seq__16142__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16142__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16142__$1);{
var G__16162 = cljs.core.chunk_rest.call(null,seq__16142__$1);
var G__16163 = c__4148__auto__;
var G__16164 = cljs.core.count.call(null,c__4148__auto__);
var G__16165 = 0;
seq__16142 = G__16162;
chunk__16143 = G__16163;
count__16144 = G__16164;
i__16145 = G__16165;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16142__$1);goog.events.removeAll(node,type__$1);
{
var G__16166 = cljs.core.next.call(null,seq__16142__$1);
var G__16167 = null;
var G__16168 = 0;
var G__16169 = 0;
seq__16142 = G__16166;
chunk__16143 = G__16167;
count__16144 = G__16168;
i__16145 = G__16169;
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
var G__16170 = parent;
var G__16171 = cljs.core.cons.call(null,parent,so_far);
n = G__16170;
so_far = G__16171;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16180_16188 = cljs.core.seq.call(null,ancestors);var chunk__16181_16189 = null;var count__16182_16190 = 0;var i__16183_16191 = 0;while(true){
if((i__16183_16191 < count__16182_16190))
{var n_16192 = cljs.core._nth.call(null,chunk__16181_16189,i__16183_16191);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16192;
goog.events.fireListeners(n_16192,evt.type,true,evt);
}
{
var G__16193 = seq__16180_16188;
var G__16194 = chunk__16181_16189;
var G__16195 = count__16182_16190;
var G__16196 = (i__16183_16191 + 1);
seq__16180_16188 = G__16193;
chunk__16181_16189 = G__16194;
count__16182_16190 = G__16195;
i__16183_16191 = G__16196;
continue;
}
} else
{var temp__4092__auto___16197 = cljs.core.seq.call(null,seq__16180_16188);if(temp__4092__auto___16197)
{var seq__16180_16198__$1 = temp__4092__auto___16197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16180_16198__$1))
{var c__4148__auto___16199 = cljs.core.chunk_first.call(null,seq__16180_16198__$1);{
var G__16200 = cljs.core.chunk_rest.call(null,seq__16180_16198__$1);
var G__16201 = c__4148__auto___16199;
var G__16202 = cljs.core.count.call(null,c__4148__auto___16199);
var G__16203 = 0;
seq__16180_16188 = G__16200;
chunk__16181_16189 = G__16201;
count__16182_16190 = G__16202;
i__16183_16191 = G__16203;
continue;
}
} else
{var n_16204 = cljs.core.first.call(null,seq__16180_16198__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16204;
goog.events.fireListeners(n_16204,evt.type,true,evt);
}
{
var G__16205 = cljs.core.next.call(null,seq__16180_16198__$1);
var G__16206 = null;
var G__16207 = 0;
var G__16208 = 0;
seq__16180_16188 = G__16205;
chunk__16181_16189 = G__16206;
count__16182_16190 = G__16207;
i__16183_16191 = G__16208;
continue;
}
}
} else
{}
}
break;
}
var seq__16184_16209 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16185_16210 = null;var count__16186_16211 = 0;var i__16187_16212 = 0;while(true){
if((i__16187_16212 < count__16186_16211))
{var n_16213 = cljs.core._nth.call(null,chunk__16185_16210,i__16187_16212);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16213;
goog.events.fireListeners(n_16213,evt.type,false,evt);
}
{
var G__16214 = seq__16184_16209;
var G__16215 = chunk__16185_16210;
var G__16216 = count__16186_16211;
var G__16217 = (i__16187_16212 + 1);
seq__16184_16209 = G__16214;
chunk__16185_16210 = G__16215;
count__16186_16211 = G__16216;
i__16187_16212 = G__16217;
continue;
}
} else
{var temp__4092__auto___16218 = cljs.core.seq.call(null,seq__16184_16209);if(temp__4092__auto___16218)
{var seq__16184_16219__$1 = temp__4092__auto___16218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16184_16219__$1))
{var c__4148__auto___16220 = cljs.core.chunk_first.call(null,seq__16184_16219__$1);{
var G__16221 = cljs.core.chunk_rest.call(null,seq__16184_16219__$1);
var G__16222 = c__4148__auto___16220;
var G__16223 = cljs.core.count.call(null,c__4148__auto___16220);
var G__16224 = 0;
seq__16184_16209 = G__16221;
chunk__16185_16210 = G__16222;
count__16186_16211 = G__16223;
i__16187_16212 = G__16224;
continue;
}
} else
{var n_16225 = cljs.core.first.call(null,seq__16184_16219__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16225;
goog.events.fireListeners(n_16225,evt.type,false,evt);
}
{
var G__16226 = cljs.core.next.call(null,seq__16184_16219__$1);
var G__16227 = null;
var G__16228 = 0;
var G__16229 = 0;
seq__16184_16209 = G__16226;
chunk__16185_16210 = G__16227;
count__16186_16211 = G__16228;
i__16187_16212 = G__16229;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16236_16242 = cljs.core.seq.call(null,evt_map);var chunk__16237_16243 = null;var count__16238_16244 = 0;var i__16239_16245 = 0;while(true){
if((i__16239_16245 < count__16238_16244))
{var vec__16240_16246 = cljs.core._nth.call(null,chunk__16237_16243,i__16239_16245);var k_16247 = cljs.core.nth.call(null,vec__16240_16246,0,null);var v_16248 = cljs.core.nth.call(null,vec__16240_16246,1,null);(evt[k_16247] = v_16248);
{
var G__16249 = seq__16236_16242;
var G__16250 = chunk__16237_16243;
var G__16251 = count__16238_16244;
var G__16252 = (i__16239_16245 + 1);
seq__16236_16242 = G__16249;
chunk__16237_16243 = G__16250;
count__16238_16244 = G__16251;
i__16239_16245 = G__16252;
continue;
}
} else
{var temp__4092__auto___16253 = cljs.core.seq.call(null,seq__16236_16242);if(temp__4092__auto___16253)
{var seq__16236_16254__$1 = temp__4092__auto___16253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16236_16254__$1))
{var c__4148__auto___16255 = cljs.core.chunk_first.call(null,seq__16236_16254__$1);{
var G__16256 = cljs.core.chunk_rest.call(null,seq__16236_16254__$1);
var G__16257 = c__4148__auto___16255;
var G__16258 = cljs.core.count.call(null,c__4148__auto___16255);
var G__16259 = 0;
seq__16236_16242 = G__16256;
chunk__16237_16243 = G__16257;
count__16238_16244 = G__16258;
i__16239_16245 = G__16259;
continue;
}
} else
{var vec__16241_16260 = cljs.core.first.call(null,seq__16236_16254__$1);var k_16261 = cljs.core.nth.call(null,vec__16241_16260,0,null);var v_16262 = cljs.core.nth.call(null,vec__16241_16260,1,null);(evt[k_16261] = v_16262);
{
var G__16263 = cljs.core.next.call(null,seq__16236_16254__$1);
var G__16264 = null;
var G__16265 = 0;
var G__16266 = 0;
seq__16236_16242 = G__16263;
chunk__16237_16243 = G__16264;
count__16238_16244 = G__16265;
i__16239_16245 = G__16266;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16267_SHARP_){return goog.events.getListeners(p1__16267_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map