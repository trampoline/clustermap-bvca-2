// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38160 = {};return obj38160;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38164 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38164 = (function (evt,f,create_listener_function,meta38165){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38165 = meta38165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38164.cljs$lang$type = true;
domina.events.t38164.cljs$lang$ctorStr = "domina.events/t38164";
domina.events.t38164.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38164");
});
domina.events.t38164.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38164.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38164.prototype.domina$events$Event$ = true;
domina.events.t38164.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38164.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38164.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38164.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38164.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38164.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38166){var self__ = this;
var _38166__$1 = this;return self__.meta38165;
});
domina.events.t38164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38166,meta38165__$1){var self__ = this;
var _38166__$1 = this;return (new domina.events.t38164(self__.evt,self__.f,self__.create_listener_function,meta38165__$1));
});
domina.events.__GT_t38164 = (function __GT_t38164(evt__$1,f__$1,create_listener_function__$1,meta38165){return (new domina.events.t38164(evt__$1,f__$1,create_listener_function__$1,meta38165));
});
}
return (new domina.events.t38164(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38171(s__38172){return (new cljs.core.LazySeq(null,(function (){var s__38172__$1 = s__38172;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38172__$1);if(temp__4092__auto__)
{var s__38172__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38172__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38172__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38174 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38173 = 0;while(true){
if((i__38173 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38173);cljs.core.chunk_append.call(null,b__38174,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38175 = (i__38173 + 1);
i__38173 = G__38175;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38174),iter__38171.call(null,cljs.core.chunk_rest.call(null,s__38172__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38174),null);
}
} else
{var node = cljs.core.first.call(null,s__38172__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38171.call(null,cljs.core.rest.call(null,s__38172__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38184 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38185 = null;var count__38186 = 0;var i__38187 = 0;while(true){
if((i__38187 < count__38186))
{var node = cljs.core._nth.call(null,chunk__38185,i__38187);goog.events.removeAll(node);
{
var G__38192 = seq__38184;
var G__38193 = chunk__38185;
var G__38194 = count__38186;
var G__38195 = (i__38187 + 1);
seq__38184 = G__38192;
chunk__38185 = G__38193;
count__38186 = G__38194;
i__38187 = G__38195;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38184);if(temp__4092__auto__)
{var seq__38184__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38184__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38184__$1);{
var G__38196 = cljs.core.chunk_rest.call(null,seq__38184__$1);
var G__38197 = c__4148__auto__;
var G__38198 = cljs.core.count.call(null,c__4148__auto__);
var G__38199 = 0;
seq__38184 = G__38196;
chunk__38185 = G__38197;
count__38186 = G__38198;
i__38187 = G__38199;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38184__$1);goog.events.removeAll(node);
{
var G__38200 = cljs.core.next.call(null,seq__38184__$1);
var G__38201 = null;
var G__38202 = 0;
var G__38203 = 0;
seq__38184 = G__38200;
chunk__38185 = G__38201;
count__38186 = G__38202;
i__38187 = G__38203;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38188 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38189 = null;var count__38190 = 0;var i__38191 = 0;while(true){
if((i__38191 < count__38190))
{var node = cljs.core._nth.call(null,chunk__38189,i__38191);goog.events.removeAll(node,type__$1);
{
var G__38204 = seq__38188;
var G__38205 = chunk__38189;
var G__38206 = count__38190;
var G__38207 = (i__38191 + 1);
seq__38188 = G__38204;
chunk__38189 = G__38205;
count__38190 = G__38206;
i__38191 = G__38207;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38188);if(temp__4092__auto__)
{var seq__38188__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38188__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38188__$1);{
var G__38208 = cljs.core.chunk_rest.call(null,seq__38188__$1);
var G__38209 = c__4148__auto__;
var G__38210 = cljs.core.count.call(null,c__4148__auto__);
var G__38211 = 0;
seq__38188 = G__38208;
chunk__38189 = G__38209;
count__38190 = G__38210;
i__38191 = G__38211;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38188__$1);goog.events.removeAll(node,type__$1);
{
var G__38212 = cljs.core.next.call(null,seq__38188__$1);
var G__38213 = null;
var G__38214 = 0;
var G__38215 = 0;
seq__38188 = G__38212;
chunk__38189 = G__38213;
count__38190 = G__38214;
i__38191 = G__38215;
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
var G__38216 = parent;
var G__38217 = cljs.core.cons.call(null,parent,so_far);
n = G__38216;
so_far = G__38217;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38226_38234 = cljs.core.seq.call(null,ancestors);var chunk__38227_38235 = null;var count__38228_38236 = 0;var i__38229_38237 = 0;while(true){
if((i__38229_38237 < count__38228_38236))
{var n_38238 = cljs.core._nth.call(null,chunk__38227_38235,i__38229_38237);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38238;
goog.events.fireListeners(n_38238,evt.type,true,evt);
}
{
var G__38239 = seq__38226_38234;
var G__38240 = chunk__38227_38235;
var G__38241 = count__38228_38236;
var G__38242 = (i__38229_38237 + 1);
seq__38226_38234 = G__38239;
chunk__38227_38235 = G__38240;
count__38228_38236 = G__38241;
i__38229_38237 = G__38242;
continue;
}
} else
{var temp__4092__auto___38243 = cljs.core.seq.call(null,seq__38226_38234);if(temp__4092__auto___38243)
{var seq__38226_38244__$1 = temp__4092__auto___38243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38226_38244__$1))
{var c__4148__auto___38245 = cljs.core.chunk_first.call(null,seq__38226_38244__$1);{
var G__38246 = cljs.core.chunk_rest.call(null,seq__38226_38244__$1);
var G__38247 = c__4148__auto___38245;
var G__38248 = cljs.core.count.call(null,c__4148__auto___38245);
var G__38249 = 0;
seq__38226_38234 = G__38246;
chunk__38227_38235 = G__38247;
count__38228_38236 = G__38248;
i__38229_38237 = G__38249;
continue;
}
} else
{var n_38250 = cljs.core.first.call(null,seq__38226_38244__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38250;
goog.events.fireListeners(n_38250,evt.type,true,evt);
}
{
var G__38251 = cljs.core.next.call(null,seq__38226_38244__$1);
var G__38252 = null;
var G__38253 = 0;
var G__38254 = 0;
seq__38226_38234 = G__38251;
chunk__38227_38235 = G__38252;
count__38228_38236 = G__38253;
i__38229_38237 = G__38254;
continue;
}
}
} else
{}
}
break;
}
var seq__38230_38255 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38231_38256 = null;var count__38232_38257 = 0;var i__38233_38258 = 0;while(true){
if((i__38233_38258 < count__38232_38257))
{var n_38259 = cljs.core._nth.call(null,chunk__38231_38256,i__38233_38258);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38259;
goog.events.fireListeners(n_38259,evt.type,false,evt);
}
{
var G__38260 = seq__38230_38255;
var G__38261 = chunk__38231_38256;
var G__38262 = count__38232_38257;
var G__38263 = (i__38233_38258 + 1);
seq__38230_38255 = G__38260;
chunk__38231_38256 = G__38261;
count__38232_38257 = G__38262;
i__38233_38258 = G__38263;
continue;
}
} else
{var temp__4092__auto___38264 = cljs.core.seq.call(null,seq__38230_38255);if(temp__4092__auto___38264)
{var seq__38230_38265__$1 = temp__4092__auto___38264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38230_38265__$1))
{var c__4148__auto___38266 = cljs.core.chunk_first.call(null,seq__38230_38265__$1);{
var G__38267 = cljs.core.chunk_rest.call(null,seq__38230_38265__$1);
var G__38268 = c__4148__auto___38266;
var G__38269 = cljs.core.count.call(null,c__4148__auto___38266);
var G__38270 = 0;
seq__38230_38255 = G__38267;
chunk__38231_38256 = G__38268;
count__38232_38257 = G__38269;
i__38233_38258 = G__38270;
continue;
}
} else
{var n_38271 = cljs.core.first.call(null,seq__38230_38265__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38271;
goog.events.fireListeners(n_38271,evt.type,false,evt);
}
{
var G__38272 = cljs.core.next.call(null,seq__38230_38265__$1);
var G__38273 = null;
var G__38274 = 0;
var G__38275 = 0;
seq__38230_38255 = G__38272;
chunk__38231_38256 = G__38273;
count__38232_38257 = G__38274;
i__38233_38258 = G__38275;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38282_38288 = cljs.core.seq.call(null,evt_map);var chunk__38283_38289 = null;var count__38284_38290 = 0;var i__38285_38291 = 0;while(true){
if((i__38285_38291 < count__38284_38290))
{var vec__38286_38292 = cljs.core._nth.call(null,chunk__38283_38289,i__38285_38291);var k_38293 = cljs.core.nth.call(null,vec__38286_38292,0,null);var v_38294 = cljs.core.nth.call(null,vec__38286_38292,1,null);(evt[k_38293] = v_38294);
{
var G__38295 = seq__38282_38288;
var G__38296 = chunk__38283_38289;
var G__38297 = count__38284_38290;
var G__38298 = (i__38285_38291 + 1);
seq__38282_38288 = G__38295;
chunk__38283_38289 = G__38296;
count__38284_38290 = G__38297;
i__38285_38291 = G__38298;
continue;
}
} else
{var temp__4092__auto___38299 = cljs.core.seq.call(null,seq__38282_38288);if(temp__4092__auto___38299)
{var seq__38282_38300__$1 = temp__4092__auto___38299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38282_38300__$1))
{var c__4148__auto___38301 = cljs.core.chunk_first.call(null,seq__38282_38300__$1);{
var G__38302 = cljs.core.chunk_rest.call(null,seq__38282_38300__$1);
var G__38303 = c__4148__auto___38301;
var G__38304 = cljs.core.count.call(null,c__4148__auto___38301);
var G__38305 = 0;
seq__38282_38288 = G__38302;
chunk__38283_38289 = G__38303;
count__38284_38290 = G__38304;
i__38285_38291 = G__38305;
continue;
}
} else
{var vec__38287_38306 = cljs.core.first.call(null,seq__38282_38300__$1);var k_38307 = cljs.core.nth.call(null,vec__38287_38306,0,null);var v_38308 = cljs.core.nth.call(null,vec__38287_38306,1,null);(evt[k_38307] = v_38308);
{
var G__38309 = cljs.core.next.call(null,seq__38282_38300__$1);
var G__38310 = null;
var G__38311 = 0;
var G__38312 = 0;
seq__38282_38288 = G__38309;
chunk__38283_38289 = G__38310;
count__38284_38290 = G__38311;
i__38285_38291 = G__38312;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38313_SHARP_){return goog.events.getListeners(p1__38313_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
