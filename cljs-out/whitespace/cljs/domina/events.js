// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38112 = {};return obj38112;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38116 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38116 = (function (evt,f,create_listener_function,meta38117){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38117 = meta38117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38116.cljs$lang$type = true;
domina.events.t38116.cljs$lang$ctorStr = "domina.events/t38116";
domina.events.t38116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38116");
});
domina.events.t38116.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38116.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38116.prototype.domina$events$Event$ = true;
domina.events.t38116.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38116.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38116.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38116.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38116.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38116.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38118){var self__ = this;
var _38118__$1 = this;return self__.meta38117;
});
domina.events.t38116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38118,meta38117__$1){var self__ = this;
var _38118__$1 = this;return (new domina.events.t38116(self__.evt,self__.f,self__.create_listener_function,meta38117__$1));
});
domina.events.__GT_t38116 = (function __GT_t38116(evt__$1,f__$1,create_listener_function__$1,meta38117){return (new domina.events.t38116(evt__$1,f__$1,create_listener_function__$1,meta38117));
});
}
return (new domina.events.t38116(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38123(s__38124){return (new cljs.core.LazySeq(null,(function (){var s__38124__$1 = s__38124;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38124__$1);if(temp__4092__auto__)
{var s__38124__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38124__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38124__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38126 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38125 = 0;while(true){
if((i__38125 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38125);cljs.core.chunk_append.call(null,b__38126,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38127 = (i__38125 + 1);
i__38125 = G__38127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38126),iter__38123.call(null,cljs.core.chunk_rest.call(null,s__38124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38126),null);
}
} else
{var node = cljs.core.first.call(null,s__38124__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38123.call(null,cljs.core.rest.call(null,s__38124__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38136 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38137 = null;var count__38138 = 0;var i__38139 = 0;while(true){
if((i__38139 < count__38138))
{var node = cljs.core._nth.call(null,chunk__38137,i__38139);goog.events.removeAll(node);
{
var G__38144 = seq__38136;
var G__38145 = chunk__38137;
var G__38146 = count__38138;
var G__38147 = (i__38139 + 1);
seq__38136 = G__38144;
chunk__38137 = G__38145;
count__38138 = G__38146;
i__38139 = G__38147;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38136);if(temp__4092__auto__)
{var seq__38136__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38136__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38136__$1);{
var G__38148 = cljs.core.chunk_rest.call(null,seq__38136__$1);
var G__38149 = c__4148__auto__;
var G__38150 = cljs.core.count.call(null,c__4148__auto__);
var G__38151 = 0;
seq__38136 = G__38148;
chunk__38137 = G__38149;
count__38138 = G__38150;
i__38139 = G__38151;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38136__$1);goog.events.removeAll(node);
{
var G__38152 = cljs.core.next.call(null,seq__38136__$1);
var G__38153 = null;
var G__38154 = 0;
var G__38155 = 0;
seq__38136 = G__38152;
chunk__38137 = G__38153;
count__38138 = G__38154;
i__38139 = G__38155;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38140 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38141 = null;var count__38142 = 0;var i__38143 = 0;while(true){
if((i__38143 < count__38142))
{var node = cljs.core._nth.call(null,chunk__38141,i__38143);goog.events.removeAll(node,type__$1);
{
var G__38156 = seq__38140;
var G__38157 = chunk__38141;
var G__38158 = count__38142;
var G__38159 = (i__38143 + 1);
seq__38140 = G__38156;
chunk__38141 = G__38157;
count__38142 = G__38158;
i__38143 = G__38159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38140);if(temp__4092__auto__)
{var seq__38140__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38140__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38140__$1);{
var G__38160 = cljs.core.chunk_rest.call(null,seq__38140__$1);
var G__38161 = c__4148__auto__;
var G__38162 = cljs.core.count.call(null,c__4148__auto__);
var G__38163 = 0;
seq__38140 = G__38160;
chunk__38141 = G__38161;
count__38142 = G__38162;
i__38143 = G__38163;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38140__$1);goog.events.removeAll(node,type__$1);
{
var G__38164 = cljs.core.next.call(null,seq__38140__$1);
var G__38165 = null;
var G__38166 = 0;
var G__38167 = 0;
seq__38140 = G__38164;
chunk__38141 = G__38165;
count__38142 = G__38166;
i__38143 = G__38167;
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
var G__38168 = parent;
var G__38169 = cljs.core.cons.call(null,parent,so_far);
n = G__38168;
so_far = G__38169;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38178_38186 = cljs.core.seq.call(null,ancestors);var chunk__38179_38187 = null;var count__38180_38188 = 0;var i__38181_38189 = 0;while(true){
if((i__38181_38189 < count__38180_38188))
{var n_38190 = cljs.core._nth.call(null,chunk__38179_38187,i__38181_38189);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38190;
goog.events.fireListeners(n_38190,evt.type,true,evt);
}
{
var G__38191 = seq__38178_38186;
var G__38192 = chunk__38179_38187;
var G__38193 = count__38180_38188;
var G__38194 = (i__38181_38189 + 1);
seq__38178_38186 = G__38191;
chunk__38179_38187 = G__38192;
count__38180_38188 = G__38193;
i__38181_38189 = G__38194;
continue;
}
} else
{var temp__4092__auto___38195 = cljs.core.seq.call(null,seq__38178_38186);if(temp__4092__auto___38195)
{var seq__38178_38196__$1 = temp__4092__auto___38195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38178_38196__$1))
{var c__4148__auto___38197 = cljs.core.chunk_first.call(null,seq__38178_38196__$1);{
var G__38198 = cljs.core.chunk_rest.call(null,seq__38178_38196__$1);
var G__38199 = c__4148__auto___38197;
var G__38200 = cljs.core.count.call(null,c__4148__auto___38197);
var G__38201 = 0;
seq__38178_38186 = G__38198;
chunk__38179_38187 = G__38199;
count__38180_38188 = G__38200;
i__38181_38189 = G__38201;
continue;
}
} else
{var n_38202 = cljs.core.first.call(null,seq__38178_38196__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38202;
goog.events.fireListeners(n_38202,evt.type,true,evt);
}
{
var G__38203 = cljs.core.next.call(null,seq__38178_38196__$1);
var G__38204 = null;
var G__38205 = 0;
var G__38206 = 0;
seq__38178_38186 = G__38203;
chunk__38179_38187 = G__38204;
count__38180_38188 = G__38205;
i__38181_38189 = G__38206;
continue;
}
}
} else
{}
}
break;
}
var seq__38182_38207 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38183_38208 = null;var count__38184_38209 = 0;var i__38185_38210 = 0;while(true){
if((i__38185_38210 < count__38184_38209))
{var n_38211 = cljs.core._nth.call(null,chunk__38183_38208,i__38185_38210);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38211;
goog.events.fireListeners(n_38211,evt.type,false,evt);
}
{
var G__38212 = seq__38182_38207;
var G__38213 = chunk__38183_38208;
var G__38214 = count__38184_38209;
var G__38215 = (i__38185_38210 + 1);
seq__38182_38207 = G__38212;
chunk__38183_38208 = G__38213;
count__38184_38209 = G__38214;
i__38185_38210 = G__38215;
continue;
}
} else
{var temp__4092__auto___38216 = cljs.core.seq.call(null,seq__38182_38207);if(temp__4092__auto___38216)
{var seq__38182_38217__$1 = temp__4092__auto___38216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38182_38217__$1))
{var c__4148__auto___38218 = cljs.core.chunk_first.call(null,seq__38182_38217__$1);{
var G__38219 = cljs.core.chunk_rest.call(null,seq__38182_38217__$1);
var G__38220 = c__4148__auto___38218;
var G__38221 = cljs.core.count.call(null,c__4148__auto___38218);
var G__38222 = 0;
seq__38182_38207 = G__38219;
chunk__38183_38208 = G__38220;
count__38184_38209 = G__38221;
i__38185_38210 = G__38222;
continue;
}
} else
{var n_38223 = cljs.core.first.call(null,seq__38182_38217__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38223;
goog.events.fireListeners(n_38223,evt.type,false,evt);
}
{
var G__38224 = cljs.core.next.call(null,seq__38182_38217__$1);
var G__38225 = null;
var G__38226 = 0;
var G__38227 = 0;
seq__38182_38207 = G__38224;
chunk__38183_38208 = G__38225;
count__38184_38209 = G__38226;
i__38185_38210 = G__38227;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38234_38240 = cljs.core.seq.call(null,evt_map);var chunk__38235_38241 = null;var count__38236_38242 = 0;var i__38237_38243 = 0;while(true){
if((i__38237_38243 < count__38236_38242))
{var vec__38238_38244 = cljs.core._nth.call(null,chunk__38235_38241,i__38237_38243);var k_38245 = cljs.core.nth.call(null,vec__38238_38244,0,null);var v_38246 = cljs.core.nth.call(null,vec__38238_38244,1,null);(evt[k_38245] = v_38246);
{
var G__38247 = seq__38234_38240;
var G__38248 = chunk__38235_38241;
var G__38249 = count__38236_38242;
var G__38250 = (i__38237_38243 + 1);
seq__38234_38240 = G__38247;
chunk__38235_38241 = G__38248;
count__38236_38242 = G__38249;
i__38237_38243 = G__38250;
continue;
}
} else
{var temp__4092__auto___38251 = cljs.core.seq.call(null,seq__38234_38240);if(temp__4092__auto___38251)
{var seq__38234_38252__$1 = temp__4092__auto___38251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38234_38252__$1))
{var c__4148__auto___38253 = cljs.core.chunk_first.call(null,seq__38234_38252__$1);{
var G__38254 = cljs.core.chunk_rest.call(null,seq__38234_38252__$1);
var G__38255 = c__4148__auto___38253;
var G__38256 = cljs.core.count.call(null,c__4148__auto___38253);
var G__38257 = 0;
seq__38234_38240 = G__38254;
chunk__38235_38241 = G__38255;
count__38236_38242 = G__38256;
i__38237_38243 = G__38257;
continue;
}
} else
{var vec__38239_38258 = cljs.core.first.call(null,seq__38234_38252__$1);var k_38259 = cljs.core.nth.call(null,vec__38239_38258,0,null);var v_38260 = cljs.core.nth.call(null,vec__38239_38258,1,null);(evt[k_38259] = v_38260);
{
var G__38261 = cljs.core.next.call(null,seq__38234_38252__$1);
var G__38262 = null;
var G__38263 = 0;
var G__38264 = 0;
seq__38234_38240 = G__38261;
chunk__38235_38241 = G__38262;
count__38236_38242 = G__38263;
i__38237_38243 = G__38264;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38265_SHARP_){return goog.events.getListeners(p1__38265_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
