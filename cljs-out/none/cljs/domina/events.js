// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16142 = {};return obj16142;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16146 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16146 = (function (evt,f,create_listener_function,meta16147){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16147 = meta16147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16146.cljs$lang$type = true;
domina.events.t16146.cljs$lang$ctorStr = "domina.events/t16146";
domina.events.t16146.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16146");
});
domina.events.t16146.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16146.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16146.prototype.domina$events$Event$ = true;
domina.events.t16146.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16146.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16146.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16146.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16146.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16146.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16148){var self__ = this;
var _16148__$1 = this;return self__.meta16147;
});
domina.events.t16146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16148,meta16147__$1){var self__ = this;
var _16148__$1 = this;return (new domina.events.t16146(self__.evt,self__.f,self__.create_listener_function,meta16147__$1));
});
domina.events.__GT_t16146 = (function __GT_t16146(evt__$1,f__$1,create_listener_function__$1,meta16147){return (new domina.events.t16146(evt__$1,f__$1,create_listener_function__$1,meta16147));
});
}
return (new domina.events.t16146(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16153(s__16154){return (new cljs.core.LazySeq(null,(function (){var s__16154__$1 = s__16154;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16154__$1);if(temp__4092__auto__)
{var s__16154__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16154__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16154__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16156 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16155 = 0;while(true){
if((i__16155 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16155);cljs.core.chunk_append.call(null,b__16156,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16157 = (i__16155 + 1);
i__16155 = G__16157;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16156),iter__16153.call(null,cljs.core.chunk_rest.call(null,s__16154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16156),null);
}
} else
{var node = cljs.core.first.call(null,s__16154__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16153.call(null,cljs.core.rest.call(null,s__16154__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16166 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16167 = null;var count__16168 = 0;var i__16169 = 0;while(true){
if((i__16169 < count__16168))
{var node = cljs.core._nth.call(null,chunk__16167,i__16169);goog.events.removeAll(node);
{
var G__16174 = seq__16166;
var G__16175 = chunk__16167;
var G__16176 = count__16168;
var G__16177 = (i__16169 + 1);
seq__16166 = G__16174;
chunk__16167 = G__16175;
count__16168 = G__16176;
i__16169 = G__16177;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16166);if(temp__4092__auto__)
{var seq__16166__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16166__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16166__$1);{
var G__16178 = cljs.core.chunk_rest.call(null,seq__16166__$1);
var G__16179 = c__4148__auto__;
var G__16180 = cljs.core.count.call(null,c__4148__auto__);
var G__16181 = 0;
seq__16166 = G__16178;
chunk__16167 = G__16179;
count__16168 = G__16180;
i__16169 = G__16181;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16166__$1);goog.events.removeAll(node);
{
var G__16182 = cljs.core.next.call(null,seq__16166__$1);
var G__16183 = null;
var G__16184 = 0;
var G__16185 = 0;
seq__16166 = G__16182;
chunk__16167 = G__16183;
count__16168 = G__16184;
i__16169 = G__16185;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16170 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16171 = null;var count__16172 = 0;var i__16173 = 0;while(true){
if((i__16173 < count__16172))
{var node = cljs.core._nth.call(null,chunk__16171,i__16173);goog.events.removeAll(node,type__$1);
{
var G__16186 = seq__16170;
var G__16187 = chunk__16171;
var G__16188 = count__16172;
var G__16189 = (i__16173 + 1);
seq__16170 = G__16186;
chunk__16171 = G__16187;
count__16172 = G__16188;
i__16173 = G__16189;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16170);if(temp__4092__auto__)
{var seq__16170__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16170__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16170__$1);{
var G__16190 = cljs.core.chunk_rest.call(null,seq__16170__$1);
var G__16191 = c__4148__auto__;
var G__16192 = cljs.core.count.call(null,c__4148__auto__);
var G__16193 = 0;
seq__16170 = G__16190;
chunk__16171 = G__16191;
count__16172 = G__16192;
i__16173 = G__16193;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16170__$1);goog.events.removeAll(node,type__$1);
{
var G__16194 = cljs.core.next.call(null,seq__16170__$1);
var G__16195 = null;
var G__16196 = 0;
var G__16197 = 0;
seq__16170 = G__16194;
chunk__16171 = G__16195;
count__16172 = G__16196;
i__16173 = G__16197;
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
var G__16198 = parent;
var G__16199 = cljs.core.cons.call(null,parent,so_far);
n = G__16198;
so_far = G__16199;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16208_16216 = cljs.core.seq.call(null,ancestors);var chunk__16209_16217 = null;var count__16210_16218 = 0;var i__16211_16219 = 0;while(true){
if((i__16211_16219 < count__16210_16218))
{var n_16220 = cljs.core._nth.call(null,chunk__16209_16217,i__16211_16219);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16220;
goog.events.fireListeners(n_16220,evt.type,true,evt);
}
{
var G__16221 = seq__16208_16216;
var G__16222 = chunk__16209_16217;
var G__16223 = count__16210_16218;
var G__16224 = (i__16211_16219 + 1);
seq__16208_16216 = G__16221;
chunk__16209_16217 = G__16222;
count__16210_16218 = G__16223;
i__16211_16219 = G__16224;
continue;
}
} else
{var temp__4092__auto___16225 = cljs.core.seq.call(null,seq__16208_16216);if(temp__4092__auto___16225)
{var seq__16208_16226__$1 = temp__4092__auto___16225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16208_16226__$1))
{var c__4148__auto___16227 = cljs.core.chunk_first.call(null,seq__16208_16226__$1);{
var G__16228 = cljs.core.chunk_rest.call(null,seq__16208_16226__$1);
var G__16229 = c__4148__auto___16227;
var G__16230 = cljs.core.count.call(null,c__4148__auto___16227);
var G__16231 = 0;
seq__16208_16216 = G__16228;
chunk__16209_16217 = G__16229;
count__16210_16218 = G__16230;
i__16211_16219 = G__16231;
continue;
}
} else
{var n_16232 = cljs.core.first.call(null,seq__16208_16226__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16232;
goog.events.fireListeners(n_16232,evt.type,true,evt);
}
{
var G__16233 = cljs.core.next.call(null,seq__16208_16226__$1);
var G__16234 = null;
var G__16235 = 0;
var G__16236 = 0;
seq__16208_16216 = G__16233;
chunk__16209_16217 = G__16234;
count__16210_16218 = G__16235;
i__16211_16219 = G__16236;
continue;
}
}
} else
{}
}
break;
}
var seq__16212_16237 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16213_16238 = null;var count__16214_16239 = 0;var i__16215_16240 = 0;while(true){
if((i__16215_16240 < count__16214_16239))
{var n_16241 = cljs.core._nth.call(null,chunk__16213_16238,i__16215_16240);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16241;
goog.events.fireListeners(n_16241,evt.type,false,evt);
}
{
var G__16242 = seq__16212_16237;
var G__16243 = chunk__16213_16238;
var G__16244 = count__16214_16239;
var G__16245 = (i__16215_16240 + 1);
seq__16212_16237 = G__16242;
chunk__16213_16238 = G__16243;
count__16214_16239 = G__16244;
i__16215_16240 = G__16245;
continue;
}
} else
{var temp__4092__auto___16246 = cljs.core.seq.call(null,seq__16212_16237);if(temp__4092__auto___16246)
{var seq__16212_16247__$1 = temp__4092__auto___16246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16212_16247__$1))
{var c__4148__auto___16248 = cljs.core.chunk_first.call(null,seq__16212_16247__$1);{
var G__16249 = cljs.core.chunk_rest.call(null,seq__16212_16247__$1);
var G__16250 = c__4148__auto___16248;
var G__16251 = cljs.core.count.call(null,c__4148__auto___16248);
var G__16252 = 0;
seq__16212_16237 = G__16249;
chunk__16213_16238 = G__16250;
count__16214_16239 = G__16251;
i__16215_16240 = G__16252;
continue;
}
} else
{var n_16253 = cljs.core.first.call(null,seq__16212_16247__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16253;
goog.events.fireListeners(n_16253,evt.type,false,evt);
}
{
var G__16254 = cljs.core.next.call(null,seq__16212_16247__$1);
var G__16255 = null;
var G__16256 = 0;
var G__16257 = 0;
seq__16212_16237 = G__16254;
chunk__16213_16238 = G__16255;
count__16214_16239 = G__16256;
i__16215_16240 = G__16257;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16264_16270 = cljs.core.seq.call(null,evt_map);var chunk__16265_16271 = null;var count__16266_16272 = 0;var i__16267_16273 = 0;while(true){
if((i__16267_16273 < count__16266_16272))
{var vec__16268_16274 = cljs.core._nth.call(null,chunk__16265_16271,i__16267_16273);var k_16275 = cljs.core.nth.call(null,vec__16268_16274,0,null);var v_16276 = cljs.core.nth.call(null,vec__16268_16274,1,null);(evt[k_16275] = v_16276);
{
var G__16277 = seq__16264_16270;
var G__16278 = chunk__16265_16271;
var G__16279 = count__16266_16272;
var G__16280 = (i__16267_16273 + 1);
seq__16264_16270 = G__16277;
chunk__16265_16271 = G__16278;
count__16266_16272 = G__16279;
i__16267_16273 = G__16280;
continue;
}
} else
{var temp__4092__auto___16281 = cljs.core.seq.call(null,seq__16264_16270);if(temp__4092__auto___16281)
{var seq__16264_16282__$1 = temp__4092__auto___16281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16264_16282__$1))
{var c__4148__auto___16283 = cljs.core.chunk_first.call(null,seq__16264_16282__$1);{
var G__16284 = cljs.core.chunk_rest.call(null,seq__16264_16282__$1);
var G__16285 = c__4148__auto___16283;
var G__16286 = cljs.core.count.call(null,c__4148__auto___16283);
var G__16287 = 0;
seq__16264_16270 = G__16284;
chunk__16265_16271 = G__16285;
count__16266_16272 = G__16286;
i__16267_16273 = G__16287;
continue;
}
} else
{var vec__16269_16288 = cljs.core.first.call(null,seq__16264_16282__$1);var k_16289 = cljs.core.nth.call(null,vec__16269_16288,0,null);var v_16290 = cljs.core.nth.call(null,vec__16269_16288,1,null);(evt[k_16289] = v_16290);
{
var G__16291 = cljs.core.next.call(null,seq__16264_16282__$1);
var G__16292 = null;
var G__16293 = 0;
var G__16294 = 0;
seq__16264_16270 = G__16291;
chunk__16265_16271 = G__16292;
count__16266_16272 = G__16293;
i__16267_16273 = G__16294;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16295_SHARP_){return goog.events.getListeners(p1__16295_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map