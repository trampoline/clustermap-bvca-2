// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38070 = {};return obj38070;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38074 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38074 = (function (evt,f,create_listener_function,meta38075){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38075 = meta38075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38074.cljs$lang$type = true;
domina.events.t38074.cljs$lang$ctorStr = "domina.events/t38074";
domina.events.t38074.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38074");
});
domina.events.t38074.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38074.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38074.prototype.domina$events$Event$ = true;
domina.events.t38074.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38074.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38074.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38074.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38074.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38074.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38076){var self__ = this;
var _38076__$1 = this;return self__.meta38075;
});
domina.events.t38074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38076,meta38075__$1){var self__ = this;
var _38076__$1 = this;return (new domina.events.t38074(self__.evt,self__.f,self__.create_listener_function,meta38075__$1));
});
domina.events.__GT_t38074 = (function __GT_t38074(evt__$1,f__$1,create_listener_function__$1,meta38075){return (new domina.events.t38074(evt__$1,f__$1,create_listener_function__$1,meta38075));
});
}
return (new domina.events.t38074(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38081(s__38082){return (new cljs.core.LazySeq(null,(function (){var s__38082__$1 = s__38082;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38082__$1);if(temp__4092__auto__)
{var s__38082__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38082__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38082__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38084 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38083 = 0;while(true){
if((i__38083 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38083);cljs.core.chunk_append.call(null,b__38084,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38085 = (i__38083 + 1);
i__38083 = G__38085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38084),iter__38081.call(null,cljs.core.chunk_rest.call(null,s__38082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38084),null);
}
} else
{var node = cljs.core.first.call(null,s__38082__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38081.call(null,cljs.core.rest.call(null,s__38082__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38094 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38095 = null;var count__38096 = 0;var i__38097 = 0;while(true){
if((i__38097 < count__38096))
{var node = cljs.core._nth.call(null,chunk__38095,i__38097);goog.events.removeAll(node);
{
var G__38102 = seq__38094;
var G__38103 = chunk__38095;
var G__38104 = count__38096;
var G__38105 = (i__38097 + 1);
seq__38094 = G__38102;
chunk__38095 = G__38103;
count__38096 = G__38104;
i__38097 = G__38105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38094);if(temp__4092__auto__)
{var seq__38094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38094__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38094__$1);{
var G__38106 = cljs.core.chunk_rest.call(null,seq__38094__$1);
var G__38107 = c__4148__auto__;
var G__38108 = cljs.core.count.call(null,c__4148__auto__);
var G__38109 = 0;
seq__38094 = G__38106;
chunk__38095 = G__38107;
count__38096 = G__38108;
i__38097 = G__38109;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38094__$1);goog.events.removeAll(node);
{
var G__38110 = cljs.core.next.call(null,seq__38094__$1);
var G__38111 = null;
var G__38112 = 0;
var G__38113 = 0;
seq__38094 = G__38110;
chunk__38095 = G__38111;
count__38096 = G__38112;
i__38097 = G__38113;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38098 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38099 = null;var count__38100 = 0;var i__38101 = 0;while(true){
if((i__38101 < count__38100))
{var node = cljs.core._nth.call(null,chunk__38099,i__38101);goog.events.removeAll(node,type__$1);
{
var G__38114 = seq__38098;
var G__38115 = chunk__38099;
var G__38116 = count__38100;
var G__38117 = (i__38101 + 1);
seq__38098 = G__38114;
chunk__38099 = G__38115;
count__38100 = G__38116;
i__38101 = G__38117;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38098);if(temp__4092__auto__)
{var seq__38098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38098__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38098__$1);{
var G__38118 = cljs.core.chunk_rest.call(null,seq__38098__$1);
var G__38119 = c__4148__auto__;
var G__38120 = cljs.core.count.call(null,c__4148__auto__);
var G__38121 = 0;
seq__38098 = G__38118;
chunk__38099 = G__38119;
count__38100 = G__38120;
i__38101 = G__38121;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38098__$1);goog.events.removeAll(node,type__$1);
{
var G__38122 = cljs.core.next.call(null,seq__38098__$1);
var G__38123 = null;
var G__38124 = 0;
var G__38125 = 0;
seq__38098 = G__38122;
chunk__38099 = G__38123;
count__38100 = G__38124;
i__38101 = G__38125;
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
var G__38126 = parent;
var G__38127 = cljs.core.cons.call(null,parent,so_far);
n = G__38126;
so_far = G__38127;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38136_38144 = cljs.core.seq.call(null,ancestors);var chunk__38137_38145 = null;var count__38138_38146 = 0;var i__38139_38147 = 0;while(true){
if((i__38139_38147 < count__38138_38146))
{var n_38148 = cljs.core._nth.call(null,chunk__38137_38145,i__38139_38147);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38148;
goog.events.fireListeners(n_38148,evt.type,true,evt);
}
{
var G__38149 = seq__38136_38144;
var G__38150 = chunk__38137_38145;
var G__38151 = count__38138_38146;
var G__38152 = (i__38139_38147 + 1);
seq__38136_38144 = G__38149;
chunk__38137_38145 = G__38150;
count__38138_38146 = G__38151;
i__38139_38147 = G__38152;
continue;
}
} else
{var temp__4092__auto___38153 = cljs.core.seq.call(null,seq__38136_38144);if(temp__4092__auto___38153)
{var seq__38136_38154__$1 = temp__4092__auto___38153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38136_38154__$1))
{var c__4148__auto___38155 = cljs.core.chunk_first.call(null,seq__38136_38154__$1);{
var G__38156 = cljs.core.chunk_rest.call(null,seq__38136_38154__$1);
var G__38157 = c__4148__auto___38155;
var G__38158 = cljs.core.count.call(null,c__4148__auto___38155);
var G__38159 = 0;
seq__38136_38144 = G__38156;
chunk__38137_38145 = G__38157;
count__38138_38146 = G__38158;
i__38139_38147 = G__38159;
continue;
}
} else
{var n_38160 = cljs.core.first.call(null,seq__38136_38154__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38160;
goog.events.fireListeners(n_38160,evt.type,true,evt);
}
{
var G__38161 = cljs.core.next.call(null,seq__38136_38154__$1);
var G__38162 = null;
var G__38163 = 0;
var G__38164 = 0;
seq__38136_38144 = G__38161;
chunk__38137_38145 = G__38162;
count__38138_38146 = G__38163;
i__38139_38147 = G__38164;
continue;
}
}
} else
{}
}
break;
}
var seq__38140_38165 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38141_38166 = null;var count__38142_38167 = 0;var i__38143_38168 = 0;while(true){
if((i__38143_38168 < count__38142_38167))
{var n_38169 = cljs.core._nth.call(null,chunk__38141_38166,i__38143_38168);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38169;
goog.events.fireListeners(n_38169,evt.type,false,evt);
}
{
var G__38170 = seq__38140_38165;
var G__38171 = chunk__38141_38166;
var G__38172 = count__38142_38167;
var G__38173 = (i__38143_38168 + 1);
seq__38140_38165 = G__38170;
chunk__38141_38166 = G__38171;
count__38142_38167 = G__38172;
i__38143_38168 = G__38173;
continue;
}
} else
{var temp__4092__auto___38174 = cljs.core.seq.call(null,seq__38140_38165);if(temp__4092__auto___38174)
{var seq__38140_38175__$1 = temp__4092__auto___38174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38140_38175__$1))
{var c__4148__auto___38176 = cljs.core.chunk_first.call(null,seq__38140_38175__$1);{
var G__38177 = cljs.core.chunk_rest.call(null,seq__38140_38175__$1);
var G__38178 = c__4148__auto___38176;
var G__38179 = cljs.core.count.call(null,c__4148__auto___38176);
var G__38180 = 0;
seq__38140_38165 = G__38177;
chunk__38141_38166 = G__38178;
count__38142_38167 = G__38179;
i__38143_38168 = G__38180;
continue;
}
} else
{var n_38181 = cljs.core.first.call(null,seq__38140_38175__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38181;
goog.events.fireListeners(n_38181,evt.type,false,evt);
}
{
var G__38182 = cljs.core.next.call(null,seq__38140_38175__$1);
var G__38183 = null;
var G__38184 = 0;
var G__38185 = 0;
seq__38140_38165 = G__38182;
chunk__38141_38166 = G__38183;
count__38142_38167 = G__38184;
i__38143_38168 = G__38185;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38192_38198 = cljs.core.seq.call(null,evt_map);var chunk__38193_38199 = null;var count__38194_38200 = 0;var i__38195_38201 = 0;while(true){
if((i__38195_38201 < count__38194_38200))
{var vec__38196_38202 = cljs.core._nth.call(null,chunk__38193_38199,i__38195_38201);var k_38203 = cljs.core.nth.call(null,vec__38196_38202,0,null);var v_38204 = cljs.core.nth.call(null,vec__38196_38202,1,null);(evt[k_38203] = v_38204);
{
var G__38205 = seq__38192_38198;
var G__38206 = chunk__38193_38199;
var G__38207 = count__38194_38200;
var G__38208 = (i__38195_38201 + 1);
seq__38192_38198 = G__38205;
chunk__38193_38199 = G__38206;
count__38194_38200 = G__38207;
i__38195_38201 = G__38208;
continue;
}
} else
{var temp__4092__auto___38209 = cljs.core.seq.call(null,seq__38192_38198);if(temp__4092__auto___38209)
{var seq__38192_38210__$1 = temp__4092__auto___38209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38192_38210__$1))
{var c__4148__auto___38211 = cljs.core.chunk_first.call(null,seq__38192_38210__$1);{
var G__38212 = cljs.core.chunk_rest.call(null,seq__38192_38210__$1);
var G__38213 = c__4148__auto___38211;
var G__38214 = cljs.core.count.call(null,c__4148__auto___38211);
var G__38215 = 0;
seq__38192_38198 = G__38212;
chunk__38193_38199 = G__38213;
count__38194_38200 = G__38214;
i__38195_38201 = G__38215;
continue;
}
} else
{var vec__38197_38216 = cljs.core.first.call(null,seq__38192_38210__$1);var k_38217 = cljs.core.nth.call(null,vec__38197_38216,0,null);var v_38218 = cljs.core.nth.call(null,vec__38197_38216,1,null);(evt[k_38217] = v_38218);
{
var G__38219 = cljs.core.next.call(null,seq__38192_38210__$1);
var G__38220 = null;
var G__38221 = 0;
var G__38222 = 0;
seq__38192_38198 = G__38219;
chunk__38193_38199 = G__38220;
count__38194_38200 = G__38221;
i__38195_38201 = G__38222;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38223_SHARP_){return goog.events.getListeners(p1__38223_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
