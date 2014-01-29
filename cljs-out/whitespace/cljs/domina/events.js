// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36057 = {};return obj36057;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36061 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36061 = (function (evt,f,create_listener_function,meta36062){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36062 = meta36062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36061.cljs$lang$type = true;
domina.events.t36061.cljs$lang$ctorStr = "domina.events/t36061";
domina.events.t36061.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36061");
});
domina.events.t36061.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36061.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36061.prototype.domina$events$Event$ = true;
domina.events.t36061.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36061.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36061.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36061.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36061.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36061.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36063){var self__ = this;
var _36063__$1 = this;return self__.meta36062;
});
domina.events.t36061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36063,meta36062__$1){var self__ = this;
var _36063__$1 = this;return (new domina.events.t36061(self__.evt,self__.f,self__.create_listener_function,meta36062__$1));
});
domina.events.__GT_t36061 = (function __GT_t36061(evt__$1,f__$1,create_listener_function__$1,meta36062){return (new domina.events.t36061(evt__$1,f__$1,create_listener_function__$1,meta36062));
});
}
return (new domina.events.t36061(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36068(s__36069){return (new cljs.core.LazySeq(null,(function (){var s__36069__$1 = s__36069;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36069__$1);if(temp__4092__auto__)
{var s__36069__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36069__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36069__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36071 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36070 = 0;while(true){
if((i__36070 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36070);cljs.core.chunk_append.call(null,b__36071,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36072 = (i__36070 + 1);
i__36070 = G__36072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36071),iter__36068.call(null,cljs.core.chunk_rest.call(null,s__36069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36071),null);
}
} else
{var node = cljs.core.first.call(null,s__36069__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36068.call(null,cljs.core.rest.call(null,s__36069__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36081 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36082 = null;var count__36083 = 0;var i__36084 = 0;while(true){
if((i__36084 < count__36083))
{var node = cljs.core._nth.call(null,chunk__36082,i__36084);goog.events.removeAll(node);
{
var G__36089 = seq__36081;
var G__36090 = chunk__36082;
var G__36091 = count__36083;
var G__36092 = (i__36084 + 1);
seq__36081 = G__36089;
chunk__36082 = G__36090;
count__36083 = G__36091;
i__36084 = G__36092;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36081);if(temp__4092__auto__)
{var seq__36081__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36081__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36081__$1);{
var G__36093 = cljs.core.chunk_rest.call(null,seq__36081__$1);
var G__36094 = c__4148__auto__;
var G__36095 = cljs.core.count.call(null,c__4148__auto__);
var G__36096 = 0;
seq__36081 = G__36093;
chunk__36082 = G__36094;
count__36083 = G__36095;
i__36084 = G__36096;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36081__$1);goog.events.removeAll(node);
{
var G__36097 = cljs.core.next.call(null,seq__36081__$1);
var G__36098 = null;
var G__36099 = 0;
var G__36100 = 0;
seq__36081 = G__36097;
chunk__36082 = G__36098;
count__36083 = G__36099;
i__36084 = G__36100;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36085 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36086 = null;var count__36087 = 0;var i__36088 = 0;while(true){
if((i__36088 < count__36087))
{var node = cljs.core._nth.call(null,chunk__36086,i__36088);goog.events.removeAll(node,type__$1);
{
var G__36101 = seq__36085;
var G__36102 = chunk__36086;
var G__36103 = count__36087;
var G__36104 = (i__36088 + 1);
seq__36085 = G__36101;
chunk__36086 = G__36102;
count__36087 = G__36103;
i__36088 = G__36104;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36085);if(temp__4092__auto__)
{var seq__36085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36085__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36085__$1);{
var G__36105 = cljs.core.chunk_rest.call(null,seq__36085__$1);
var G__36106 = c__4148__auto__;
var G__36107 = cljs.core.count.call(null,c__4148__auto__);
var G__36108 = 0;
seq__36085 = G__36105;
chunk__36086 = G__36106;
count__36087 = G__36107;
i__36088 = G__36108;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36085__$1);goog.events.removeAll(node,type__$1);
{
var G__36109 = cljs.core.next.call(null,seq__36085__$1);
var G__36110 = null;
var G__36111 = 0;
var G__36112 = 0;
seq__36085 = G__36109;
chunk__36086 = G__36110;
count__36087 = G__36111;
i__36088 = G__36112;
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
var G__36113 = parent;
var G__36114 = cljs.core.cons.call(null,parent,so_far);
n = G__36113;
so_far = G__36114;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36123_36131 = cljs.core.seq.call(null,ancestors);var chunk__36124_36132 = null;var count__36125_36133 = 0;var i__36126_36134 = 0;while(true){
if((i__36126_36134 < count__36125_36133))
{var n_36135 = cljs.core._nth.call(null,chunk__36124_36132,i__36126_36134);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36135;
goog.events.fireListeners(n_36135,evt.type,true,evt);
}
{
var G__36136 = seq__36123_36131;
var G__36137 = chunk__36124_36132;
var G__36138 = count__36125_36133;
var G__36139 = (i__36126_36134 + 1);
seq__36123_36131 = G__36136;
chunk__36124_36132 = G__36137;
count__36125_36133 = G__36138;
i__36126_36134 = G__36139;
continue;
}
} else
{var temp__4092__auto___36140 = cljs.core.seq.call(null,seq__36123_36131);if(temp__4092__auto___36140)
{var seq__36123_36141__$1 = temp__4092__auto___36140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36123_36141__$1))
{var c__4148__auto___36142 = cljs.core.chunk_first.call(null,seq__36123_36141__$1);{
var G__36143 = cljs.core.chunk_rest.call(null,seq__36123_36141__$1);
var G__36144 = c__4148__auto___36142;
var G__36145 = cljs.core.count.call(null,c__4148__auto___36142);
var G__36146 = 0;
seq__36123_36131 = G__36143;
chunk__36124_36132 = G__36144;
count__36125_36133 = G__36145;
i__36126_36134 = G__36146;
continue;
}
} else
{var n_36147 = cljs.core.first.call(null,seq__36123_36141__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36147;
goog.events.fireListeners(n_36147,evt.type,true,evt);
}
{
var G__36148 = cljs.core.next.call(null,seq__36123_36141__$1);
var G__36149 = null;
var G__36150 = 0;
var G__36151 = 0;
seq__36123_36131 = G__36148;
chunk__36124_36132 = G__36149;
count__36125_36133 = G__36150;
i__36126_36134 = G__36151;
continue;
}
}
} else
{}
}
break;
}
var seq__36127_36152 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36128_36153 = null;var count__36129_36154 = 0;var i__36130_36155 = 0;while(true){
if((i__36130_36155 < count__36129_36154))
{var n_36156 = cljs.core._nth.call(null,chunk__36128_36153,i__36130_36155);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36156;
goog.events.fireListeners(n_36156,evt.type,false,evt);
}
{
var G__36157 = seq__36127_36152;
var G__36158 = chunk__36128_36153;
var G__36159 = count__36129_36154;
var G__36160 = (i__36130_36155 + 1);
seq__36127_36152 = G__36157;
chunk__36128_36153 = G__36158;
count__36129_36154 = G__36159;
i__36130_36155 = G__36160;
continue;
}
} else
{var temp__4092__auto___36161 = cljs.core.seq.call(null,seq__36127_36152);if(temp__4092__auto___36161)
{var seq__36127_36162__$1 = temp__4092__auto___36161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36127_36162__$1))
{var c__4148__auto___36163 = cljs.core.chunk_first.call(null,seq__36127_36162__$1);{
var G__36164 = cljs.core.chunk_rest.call(null,seq__36127_36162__$1);
var G__36165 = c__4148__auto___36163;
var G__36166 = cljs.core.count.call(null,c__4148__auto___36163);
var G__36167 = 0;
seq__36127_36152 = G__36164;
chunk__36128_36153 = G__36165;
count__36129_36154 = G__36166;
i__36130_36155 = G__36167;
continue;
}
} else
{var n_36168 = cljs.core.first.call(null,seq__36127_36162__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36168;
goog.events.fireListeners(n_36168,evt.type,false,evt);
}
{
var G__36169 = cljs.core.next.call(null,seq__36127_36162__$1);
var G__36170 = null;
var G__36171 = 0;
var G__36172 = 0;
seq__36127_36152 = G__36169;
chunk__36128_36153 = G__36170;
count__36129_36154 = G__36171;
i__36130_36155 = G__36172;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36179_36185 = cljs.core.seq.call(null,evt_map);var chunk__36180_36186 = null;var count__36181_36187 = 0;var i__36182_36188 = 0;while(true){
if((i__36182_36188 < count__36181_36187))
{var vec__36183_36189 = cljs.core._nth.call(null,chunk__36180_36186,i__36182_36188);var k_36190 = cljs.core.nth.call(null,vec__36183_36189,0,null);var v_36191 = cljs.core.nth.call(null,vec__36183_36189,1,null);(evt[k_36190] = v_36191);
{
var G__36192 = seq__36179_36185;
var G__36193 = chunk__36180_36186;
var G__36194 = count__36181_36187;
var G__36195 = (i__36182_36188 + 1);
seq__36179_36185 = G__36192;
chunk__36180_36186 = G__36193;
count__36181_36187 = G__36194;
i__36182_36188 = G__36195;
continue;
}
} else
{var temp__4092__auto___36196 = cljs.core.seq.call(null,seq__36179_36185);if(temp__4092__auto___36196)
{var seq__36179_36197__$1 = temp__4092__auto___36196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36179_36197__$1))
{var c__4148__auto___36198 = cljs.core.chunk_first.call(null,seq__36179_36197__$1);{
var G__36199 = cljs.core.chunk_rest.call(null,seq__36179_36197__$1);
var G__36200 = c__4148__auto___36198;
var G__36201 = cljs.core.count.call(null,c__4148__auto___36198);
var G__36202 = 0;
seq__36179_36185 = G__36199;
chunk__36180_36186 = G__36200;
count__36181_36187 = G__36201;
i__36182_36188 = G__36202;
continue;
}
} else
{var vec__36184_36203 = cljs.core.first.call(null,seq__36179_36197__$1);var k_36204 = cljs.core.nth.call(null,vec__36184_36203,0,null);var v_36205 = cljs.core.nth.call(null,vec__36184_36203,1,null);(evt[k_36204] = v_36205);
{
var G__36206 = cljs.core.next.call(null,seq__36179_36197__$1);
var G__36207 = null;
var G__36208 = 0;
var G__36209 = 0;
seq__36179_36185 = G__36206;
chunk__36180_36186 = G__36207;
count__36181_36187 = G__36208;
i__36182_36188 = G__36209;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36210_SHARP_){return goog.events.getListeners(p1__36210_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
