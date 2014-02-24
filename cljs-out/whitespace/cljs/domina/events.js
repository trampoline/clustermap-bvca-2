// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38088 = {};return obj38088;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38092 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38092 = (function (evt,f,create_listener_function,meta38093){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38093 = meta38093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38092.cljs$lang$type = true;
domina.events.t38092.cljs$lang$ctorStr = "domina.events/t38092";
domina.events.t38092.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38092");
});
domina.events.t38092.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38092.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38092.prototype.domina$events$Event$ = true;
domina.events.t38092.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38092.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38092.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38092.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38092.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38092.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38094){var self__ = this;
var _38094__$1 = this;return self__.meta38093;
});
domina.events.t38092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38094,meta38093__$1){var self__ = this;
var _38094__$1 = this;return (new domina.events.t38092(self__.evt,self__.f,self__.create_listener_function,meta38093__$1));
});
domina.events.__GT_t38092 = (function __GT_t38092(evt__$1,f__$1,create_listener_function__$1,meta38093){return (new domina.events.t38092(evt__$1,f__$1,create_listener_function__$1,meta38093));
});
}
return (new domina.events.t38092(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38099(s__38100){return (new cljs.core.LazySeq(null,(function (){var s__38100__$1 = s__38100;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38100__$1);if(temp__4092__auto__)
{var s__38100__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38100__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38100__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38102 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38101 = 0;while(true){
if((i__38101 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38101);cljs.core.chunk_append.call(null,b__38102,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38103 = (i__38101 + 1);
i__38101 = G__38103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38102),iter__38099.call(null,cljs.core.chunk_rest.call(null,s__38100__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38102),null);
}
} else
{var node = cljs.core.first.call(null,s__38100__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38099.call(null,cljs.core.rest.call(null,s__38100__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38112 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38113 = null;var count__38114 = 0;var i__38115 = 0;while(true){
if((i__38115 < count__38114))
{var node = cljs.core._nth.call(null,chunk__38113,i__38115);goog.events.removeAll(node);
{
var G__38120 = seq__38112;
var G__38121 = chunk__38113;
var G__38122 = count__38114;
var G__38123 = (i__38115 + 1);
seq__38112 = G__38120;
chunk__38113 = G__38121;
count__38114 = G__38122;
i__38115 = G__38123;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38112);if(temp__4092__auto__)
{var seq__38112__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38112__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38112__$1);{
var G__38124 = cljs.core.chunk_rest.call(null,seq__38112__$1);
var G__38125 = c__4148__auto__;
var G__38126 = cljs.core.count.call(null,c__4148__auto__);
var G__38127 = 0;
seq__38112 = G__38124;
chunk__38113 = G__38125;
count__38114 = G__38126;
i__38115 = G__38127;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38112__$1);goog.events.removeAll(node);
{
var G__38128 = cljs.core.next.call(null,seq__38112__$1);
var G__38129 = null;
var G__38130 = 0;
var G__38131 = 0;
seq__38112 = G__38128;
chunk__38113 = G__38129;
count__38114 = G__38130;
i__38115 = G__38131;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38116 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38117 = null;var count__38118 = 0;var i__38119 = 0;while(true){
if((i__38119 < count__38118))
{var node = cljs.core._nth.call(null,chunk__38117,i__38119);goog.events.removeAll(node,type__$1);
{
var G__38132 = seq__38116;
var G__38133 = chunk__38117;
var G__38134 = count__38118;
var G__38135 = (i__38119 + 1);
seq__38116 = G__38132;
chunk__38117 = G__38133;
count__38118 = G__38134;
i__38119 = G__38135;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38116);if(temp__4092__auto__)
{var seq__38116__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38116__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38116__$1);{
var G__38136 = cljs.core.chunk_rest.call(null,seq__38116__$1);
var G__38137 = c__4148__auto__;
var G__38138 = cljs.core.count.call(null,c__4148__auto__);
var G__38139 = 0;
seq__38116 = G__38136;
chunk__38117 = G__38137;
count__38118 = G__38138;
i__38119 = G__38139;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38116__$1);goog.events.removeAll(node,type__$1);
{
var G__38140 = cljs.core.next.call(null,seq__38116__$1);
var G__38141 = null;
var G__38142 = 0;
var G__38143 = 0;
seq__38116 = G__38140;
chunk__38117 = G__38141;
count__38118 = G__38142;
i__38119 = G__38143;
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
var G__38144 = parent;
var G__38145 = cljs.core.cons.call(null,parent,so_far);
n = G__38144;
so_far = G__38145;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38154_38162 = cljs.core.seq.call(null,ancestors);var chunk__38155_38163 = null;var count__38156_38164 = 0;var i__38157_38165 = 0;while(true){
if((i__38157_38165 < count__38156_38164))
{var n_38166 = cljs.core._nth.call(null,chunk__38155_38163,i__38157_38165);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38166;
goog.events.fireListeners(n_38166,evt.type,true,evt);
}
{
var G__38167 = seq__38154_38162;
var G__38168 = chunk__38155_38163;
var G__38169 = count__38156_38164;
var G__38170 = (i__38157_38165 + 1);
seq__38154_38162 = G__38167;
chunk__38155_38163 = G__38168;
count__38156_38164 = G__38169;
i__38157_38165 = G__38170;
continue;
}
} else
{var temp__4092__auto___38171 = cljs.core.seq.call(null,seq__38154_38162);if(temp__4092__auto___38171)
{var seq__38154_38172__$1 = temp__4092__auto___38171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38154_38172__$1))
{var c__4148__auto___38173 = cljs.core.chunk_first.call(null,seq__38154_38172__$1);{
var G__38174 = cljs.core.chunk_rest.call(null,seq__38154_38172__$1);
var G__38175 = c__4148__auto___38173;
var G__38176 = cljs.core.count.call(null,c__4148__auto___38173);
var G__38177 = 0;
seq__38154_38162 = G__38174;
chunk__38155_38163 = G__38175;
count__38156_38164 = G__38176;
i__38157_38165 = G__38177;
continue;
}
} else
{var n_38178 = cljs.core.first.call(null,seq__38154_38172__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38178;
goog.events.fireListeners(n_38178,evt.type,true,evt);
}
{
var G__38179 = cljs.core.next.call(null,seq__38154_38172__$1);
var G__38180 = null;
var G__38181 = 0;
var G__38182 = 0;
seq__38154_38162 = G__38179;
chunk__38155_38163 = G__38180;
count__38156_38164 = G__38181;
i__38157_38165 = G__38182;
continue;
}
}
} else
{}
}
break;
}
var seq__38158_38183 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38159_38184 = null;var count__38160_38185 = 0;var i__38161_38186 = 0;while(true){
if((i__38161_38186 < count__38160_38185))
{var n_38187 = cljs.core._nth.call(null,chunk__38159_38184,i__38161_38186);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38187;
goog.events.fireListeners(n_38187,evt.type,false,evt);
}
{
var G__38188 = seq__38158_38183;
var G__38189 = chunk__38159_38184;
var G__38190 = count__38160_38185;
var G__38191 = (i__38161_38186 + 1);
seq__38158_38183 = G__38188;
chunk__38159_38184 = G__38189;
count__38160_38185 = G__38190;
i__38161_38186 = G__38191;
continue;
}
} else
{var temp__4092__auto___38192 = cljs.core.seq.call(null,seq__38158_38183);if(temp__4092__auto___38192)
{var seq__38158_38193__$1 = temp__4092__auto___38192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38158_38193__$1))
{var c__4148__auto___38194 = cljs.core.chunk_first.call(null,seq__38158_38193__$1);{
var G__38195 = cljs.core.chunk_rest.call(null,seq__38158_38193__$1);
var G__38196 = c__4148__auto___38194;
var G__38197 = cljs.core.count.call(null,c__4148__auto___38194);
var G__38198 = 0;
seq__38158_38183 = G__38195;
chunk__38159_38184 = G__38196;
count__38160_38185 = G__38197;
i__38161_38186 = G__38198;
continue;
}
} else
{var n_38199 = cljs.core.first.call(null,seq__38158_38193__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38199;
goog.events.fireListeners(n_38199,evt.type,false,evt);
}
{
var G__38200 = cljs.core.next.call(null,seq__38158_38193__$1);
var G__38201 = null;
var G__38202 = 0;
var G__38203 = 0;
seq__38158_38183 = G__38200;
chunk__38159_38184 = G__38201;
count__38160_38185 = G__38202;
i__38161_38186 = G__38203;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38210_38216 = cljs.core.seq.call(null,evt_map);var chunk__38211_38217 = null;var count__38212_38218 = 0;var i__38213_38219 = 0;while(true){
if((i__38213_38219 < count__38212_38218))
{var vec__38214_38220 = cljs.core._nth.call(null,chunk__38211_38217,i__38213_38219);var k_38221 = cljs.core.nth.call(null,vec__38214_38220,0,null);var v_38222 = cljs.core.nth.call(null,vec__38214_38220,1,null);(evt[k_38221] = v_38222);
{
var G__38223 = seq__38210_38216;
var G__38224 = chunk__38211_38217;
var G__38225 = count__38212_38218;
var G__38226 = (i__38213_38219 + 1);
seq__38210_38216 = G__38223;
chunk__38211_38217 = G__38224;
count__38212_38218 = G__38225;
i__38213_38219 = G__38226;
continue;
}
} else
{var temp__4092__auto___38227 = cljs.core.seq.call(null,seq__38210_38216);if(temp__4092__auto___38227)
{var seq__38210_38228__$1 = temp__4092__auto___38227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38210_38228__$1))
{var c__4148__auto___38229 = cljs.core.chunk_first.call(null,seq__38210_38228__$1);{
var G__38230 = cljs.core.chunk_rest.call(null,seq__38210_38228__$1);
var G__38231 = c__4148__auto___38229;
var G__38232 = cljs.core.count.call(null,c__4148__auto___38229);
var G__38233 = 0;
seq__38210_38216 = G__38230;
chunk__38211_38217 = G__38231;
count__38212_38218 = G__38232;
i__38213_38219 = G__38233;
continue;
}
} else
{var vec__38215_38234 = cljs.core.first.call(null,seq__38210_38228__$1);var k_38235 = cljs.core.nth.call(null,vec__38215_38234,0,null);var v_38236 = cljs.core.nth.call(null,vec__38215_38234,1,null);(evt[k_38235] = v_38236);
{
var G__38237 = cljs.core.next.call(null,seq__38210_38228__$1);
var G__38238 = null;
var G__38239 = 0;
var G__38240 = 0;
seq__38210_38216 = G__38237;
chunk__38211_38217 = G__38238;
count__38212_38218 = G__38239;
i__38213_38219 = G__38240;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38241_SHARP_){return goog.events.getListeners(p1__38241_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
