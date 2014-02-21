// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38082 = {};return obj38082;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38086 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38086 = (function (evt,f,create_listener_function,meta38087){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38087 = meta38087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38086.cljs$lang$type = true;
domina.events.t38086.cljs$lang$ctorStr = "domina.events/t38086";
domina.events.t38086.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38086");
});
domina.events.t38086.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38086.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38086.prototype.domina$events$Event$ = true;
domina.events.t38086.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38086.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38086.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38086.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38086.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38086.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38088){var self__ = this;
var _38088__$1 = this;return self__.meta38087;
});
domina.events.t38086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38088,meta38087__$1){var self__ = this;
var _38088__$1 = this;return (new domina.events.t38086(self__.evt,self__.f,self__.create_listener_function,meta38087__$1));
});
domina.events.__GT_t38086 = (function __GT_t38086(evt__$1,f__$1,create_listener_function__$1,meta38087){return (new domina.events.t38086(evt__$1,f__$1,create_listener_function__$1,meta38087));
});
}
return (new domina.events.t38086(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38093(s__38094){return (new cljs.core.LazySeq(null,(function (){var s__38094__$1 = s__38094;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38094__$1);if(temp__4092__auto__)
{var s__38094__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38094__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38094__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38096 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38095 = 0;while(true){
if((i__38095 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38095);cljs.core.chunk_append.call(null,b__38096,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38097 = (i__38095 + 1);
i__38095 = G__38097;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38096),iter__38093.call(null,cljs.core.chunk_rest.call(null,s__38094__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38096),null);
}
} else
{var node = cljs.core.first.call(null,s__38094__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38093.call(null,cljs.core.rest.call(null,s__38094__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38106 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38107 = null;var count__38108 = 0;var i__38109 = 0;while(true){
if((i__38109 < count__38108))
{var node = cljs.core._nth.call(null,chunk__38107,i__38109);goog.events.removeAll(node);
{
var G__38114 = seq__38106;
var G__38115 = chunk__38107;
var G__38116 = count__38108;
var G__38117 = (i__38109 + 1);
seq__38106 = G__38114;
chunk__38107 = G__38115;
count__38108 = G__38116;
i__38109 = G__38117;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38106);if(temp__4092__auto__)
{var seq__38106__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38106__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38106__$1);{
var G__38118 = cljs.core.chunk_rest.call(null,seq__38106__$1);
var G__38119 = c__4148__auto__;
var G__38120 = cljs.core.count.call(null,c__4148__auto__);
var G__38121 = 0;
seq__38106 = G__38118;
chunk__38107 = G__38119;
count__38108 = G__38120;
i__38109 = G__38121;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38106__$1);goog.events.removeAll(node);
{
var G__38122 = cljs.core.next.call(null,seq__38106__$1);
var G__38123 = null;
var G__38124 = 0;
var G__38125 = 0;
seq__38106 = G__38122;
chunk__38107 = G__38123;
count__38108 = G__38124;
i__38109 = G__38125;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38110 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38111 = null;var count__38112 = 0;var i__38113 = 0;while(true){
if((i__38113 < count__38112))
{var node = cljs.core._nth.call(null,chunk__38111,i__38113);goog.events.removeAll(node,type__$1);
{
var G__38126 = seq__38110;
var G__38127 = chunk__38111;
var G__38128 = count__38112;
var G__38129 = (i__38113 + 1);
seq__38110 = G__38126;
chunk__38111 = G__38127;
count__38112 = G__38128;
i__38113 = G__38129;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38110);if(temp__4092__auto__)
{var seq__38110__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38110__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38110__$1);{
var G__38130 = cljs.core.chunk_rest.call(null,seq__38110__$1);
var G__38131 = c__4148__auto__;
var G__38132 = cljs.core.count.call(null,c__4148__auto__);
var G__38133 = 0;
seq__38110 = G__38130;
chunk__38111 = G__38131;
count__38112 = G__38132;
i__38113 = G__38133;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38110__$1);goog.events.removeAll(node,type__$1);
{
var G__38134 = cljs.core.next.call(null,seq__38110__$1);
var G__38135 = null;
var G__38136 = 0;
var G__38137 = 0;
seq__38110 = G__38134;
chunk__38111 = G__38135;
count__38112 = G__38136;
i__38113 = G__38137;
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
var G__38138 = parent;
var G__38139 = cljs.core.cons.call(null,parent,so_far);
n = G__38138;
so_far = G__38139;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38148_38156 = cljs.core.seq.call(null,ancestors);var chunk__38149_38157 = null;var count__38150_38158 = 0;var i__38151_38159 = 0;while(true){
if((i__38151_38159 < count__38150_38158))
{var n_38160 = cljs.core._nth.call(null,chunk__38149_38157,i__38151_38159);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38160;
goog.events.fireListeners(n_38160,evt.type,true,evt);
}
{
var G__38161 = seq__38148_38156;
var G__38162 = chunk__38149_38157;
var G__38163 = count__38150_38158;
var G__38164 = (i__38151_38159 + 1);
seq__38148_38156 = G__38161;
chunk__38149_38157 = G__38162;
count__38150_38158 = G__38163;
i__38151_38159 = G__38164;
continue;
}
} else
{var temp__4092__auto___38165 = cljs.core.seq.call(null,seq__38148_38156);if(temp__4092__auto___38165)
{var seq__38148_38166__$1 = temp__4092__auto___38165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38148_38166__$1))
{var c__4148__auto___38167 = cljs.core.chunk_first.call(null,seq__38148_38166__$1);{
var G__38168 = cljs.core.chunk_rest.call(null,seq__38148_38166__$1);
var G__38169 = c__4148__auto___38167;
var G__38170 = cljs.core.count.call(null,c__4148__auto___38167);
var G__38171 = 0;
seq__38148_38156 = G__38168;
chunk__38149_38157 = G__38169;
count__38150_38158 = G__38170;
i__38151_38159 = G__38171;
continue;
}
} else
{var n_38172 = cljs.core.first.call(null,seq__38148_38166__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38172;
goog.events.fireListeners(n_38172,evt.type,true,evt);
}
{
var G__38173 = cljs.core.next.call(null,seq__38148_38166__$1);
var G__38174 = null;
var G__38175 = 0;
var G__38176 = 0;
seq__38148_38156 = G__38173;
chunk__38149_38157 = G__38174;
count__38150_38158 = G__38175;
i__38151_38159 = G__38176;
continue;
}
}
} else
{}
}
break;
}
var seq__38152_38177 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38153_38178 = null;var count__38154_38179 = 0;var i__38155_38180 = 0;while(true){
if((i__38155_38180 < count__38154_38179))
{var n_38181 = cljs.core._nth.call(null,chunk__38153_38178,i__38155_38180);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38181;
goog.events.fireListeners(n_38181,evt.type,false,evt);
}
{
var G__38182 = seq__38152_38177;
var G__38183 = chunk__38153_38178;
var G__38184 = count__38154_38179;
var G__38185 = (i__38155_38180 + 1);
seq__38152_38177 = G__38182;
chunk__38153_38178 = G__38183;
count__38154_38179 = G__38184;
i__38155_38180 = G__38185;
continue;
}
} else
{var temp__4092__auto___38186 = cljs.core.seq.call(null,seq__38152_38177);if(temp__4092__auto___38186)
{var seq__38152_38187__$1 = temp__4092__auto___38186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38152_38187__$1))
{var c__4148__auto___38188 = cljs.core.chunk_first.call(null,seq__38152_38187__$1);{
var G__38189 = cljs.core.chunk_rest.call(null,seq__38152_38187__$1);
var G__38190 = c__4148__auto___38188;
var G__38191 = cljs.core.count.call(null,c__4148__auto___38188);
var G__38192 = 0;
seq__38152_38177 = G__38189;
chunk__38153_38178 = G__38190;
count__38154_38179 = G__38191;
i__38155_38180 = G__38192;
continue;
}
} else
{var n_38193 = cljs.core.first.call(null,seq__38152_38187__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38193;
goog.events.fireListeners(n_38193,evt.type,false,evt);
}
{
var G__38194 = cljs.core.next.call(null,seq__38152_38187__$1);
var G__38195 = null;
var G__38196 = 0;
var G__38197 = 0;
seq__38152_38177 = G__38194;
chunk__38153_38178 = G__38195;
count__38154_38179 = G__38196;
i__38155_38180 = G__38197;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38204_38210 = cljs.core.seq.call(null,evt_map);var chunk__38205_38211 = null;var count__38206_38212 = 0;var i__38207_38213 = 0;while(true){
if((i__38207_38213 < count__38206_38212))
{var vec__38208_38214 = cljs.core._nth.call(null,chunk__38205_38211,i__38207_38213);var k_38215 = cljs.core.nth.call(null,vec__38208_38214,0,null);var v_38216 = cljs.core.nth.call(null,vec__38208_38214,1,null);(evt[k_38215] = v_38216);
{
var G__38217 = seq__38204_38210;
var G__38218 = chunk__38205_38211;
var G__38219 = count__38206_38212;
var G__38220 = (i__38207_38213 + 1);
seq__38204_38210 = G__38217;
chunk__38205_38211 = G__38218;
count__38206_38212 = G__38219;
i__38207_38213 = G__38220;
continue;
}
} else
{var temp__4092__auto___38221 = cljs.core.seq.call(null,seq__38204_38210);if(temp__4092__auto___38221)
{var seq__38204_38222__$1 = temp__4092__auto___38221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38204_38222__$1))
{var c__4148__auto___38223 = cljs.core.chunk_first.call(null,seq__38204_38222__$1);{
var G__38224 = cljs.core.chunk_rest.call(null,seq__38204_38222__$1);
var G__38225 = c__4148__auto___38223;
var G__38226 = cljs.core.count.call(null,c__4148__auto___38223);
var G__38227 = 0;
seq__38204_38210 = G__38224;
chunk__38205_38211 = G__38225;
count__38206_38212 = G__38226;
i__38207_38213 = G__38227;
continue;
}
} else
{var vec__38209_38228 = cljs.core.first.call(null,seq__38204_38222__$1);var k_38229 = cljs.core.nth.call(null,vec__38209_38228,0,null);var v_38230 = cljs.core.nth.call(null,vec__38209_38228,1,null);(evt[k_38229] = v_38230);
{
var G__38231 = cljs.core.next.call(null,seq__38204_38222__$1);
var G__38232 = null;
var G__38233 = 0;
var G__38234 = 0;
seq__38204_38210 = G__38231;
chunk__38205_38211 = G__38232;
count__38206_38212 = G__38233;
i__38207_38213 = G__38234;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38235_SHARP_){return goog.events.getListeners(p1__38235_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
