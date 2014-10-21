// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj64131 = {};return obj64131;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t64135 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t64135 = (function (evt,f,create_listener_function,meta64136){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta64136 = meta64136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t64135.cljs$lang$type = true;
domina.events.t64135.cljs$lang$ctorStr = "domina.events/t64135";
domina.events.t64135.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t64135");
});
domina.events.t64135.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t64135.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t64135.prototype.domina$events$Event$ = true;
domina.events.t64135.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t64135.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t64135.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t64135.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t64135.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t64135.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t64135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64137){var self__ = this;
var _64137__$1 = this;return self__.meta64136;
});
domina.events.t64135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64137,meta64136__$1){var self__ = this;
var _64137__$1 = this;return (new domina.events.t64135(self__.evt,self__.f,self__.create_listener_function,meta64136__$1));
});
domina.events.__GT_t64135 = (function __GT_t64135(evt__$1,f__$1,create_listener_function__$1,meta64136){return (new domina.events.t64135(evt__$1,f__$1,create_listener_function__$1,meta64136));
});
}
return (new domina.events.t64135(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__64142(s__64143){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__64143__$1 = s__64143;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__64143__$1);if(temp__4126__auto__)
{var s__64143__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__64143__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__64143__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__64145 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__64144 = (0);while(true){
if((i__64144 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__64144);cljs.core.chunk_append.call(null,b__64145,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__64146 = (i__64144 + (1));
i__64144 = G__64146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64145),iter__64142.call(null,cljs.core.chunk_rest.call(null,s__64143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64145),null);
}
} else
{var node = cljs.core.first.call(null,s__64143__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__64142.call(null,cljs.core.rest.call(null,s__64143__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__64155 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__64156 = null;var count__64157 = (0);var i__64158 = (0);while(true){
if((i__64158 < count__64157))
{var node = cljs.core._nth.call(null,chunk__64156,i__64158);goog.events.removeAll(node);
{
var G__64163 = seq__64155;
var G__64164 = chunk__64156;
var G__64165 = count__64157;
var G__64166 = (i__64158 + (1));
seq__64155 = G__64163;
chunk__64156 = G__64164;
count__64157 = G__64165;
i__64158 = G__64166;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__64155);if(temp__4126__auto__)
{var seq__64155__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64155__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__64155__$1);{
var G__64167 = cljs.core.chunk_rest.call(null,seq__64155__$1);
var G__64168 = c__4314__auto__;
var G__64169 = cljs.core.count.call(null,c__4314__auto__);
var G__64170 = (0);
seq__64155 = G__64167;
chunk__64156 = G__64168;
count__64157 = G__64169;
i__64158 = G__64170;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__64155__$1);goog.events.removeAll(node);
{
var G__64171 = cljs.core.next.call(null,seq__64155__$1);
var G__64172 = null;
var G__64173 = (0);
var G__64174 = (0);
seq__64155 = G__64171;
chunk__64156 = G__64172;
count__64157 = G__64173;
i__64158 = G__64174;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__64159 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__64160 = null;var count__64161 = (0);var i__64162 = (0);while(true){
if((i__64162 < count__64161))
{var node = cljs.core._nth.call(null,chunk__64160,i__64162);goog.events.removeAll(node,type__$1);
{
var G__64175 = seq__64159;
var G__64176 = chunk__64160;
var G__64177 = count__64161;
var G__64178 = (i__64162 + (1));
seq__64159 = G__64175;
chunk__64160 = G__64176;
count__64161 = G__64177;
i__64162 = G__64178;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__64159);if(temp__4126__auto__)
{var seq__64159__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64159__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__64159__$1);{
var G__64179 = cljs.core.chunk_rest.call(null,seq__64159__$1);
var G__64180 = c__4314__auto__;
var G__64181 = cljs.core.count.call(null,c__4314__auto__);
var G__64182 = (0);
seq__64159 = G__64179;
chunk__64160 = G__64180;
count__64161 = G__64181;
i__64162 = G__64182;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__64159__$1);goog.events.removeAll(node,type__$1);
{
var G__64183 = cljs.core.next.call(null,seq__64159__$1);
var G__64184 = null;
var G__64185 = (0);
var G__64186 = (0);
seq__64159 = G__64183;
chunk__64160 = G__64184;
count__64161 = G__64185;
i__64162 = G__64186;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__64187 = parent;
var G__64188 = cljs.core.cons.call(null,parent,so_far);
n = G__64187;
so_far = G__64188;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__64197_64205 = cljs.core.seq.call(null,ancestors);var chunk__64198_64206 = null;var count__64199_64207 = (0);var i__64200_64208 = (0);while(true){
if((i__64200_64208 < count__64199_64207))
{var n_64209 = cljs.core._nth.call(null,chunk__64198_64206,i__64200_64208);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_64209;
goog.events.fireListeners(n_64209,evt.type,true,evt);
}
{
var G__64210 = seq__64197_64205;
var G__64211 = chunk__64198_64206;
var G__64212 = count__64199_64207;
var G__64213 = (i__64200_64208 + (1));
seq__64197_64205 = G__64210;
chunk__64198_64206 = G__64211;
count__64199_64207 = G__64212;
i__64200_64208 = G__64213;
continue;
}
} else
{var temp__4126__auto___64214 = cljs.core.seq.call(null,seq__64197_64205);if(temp__4126__auto___64214)
{var seq__64197_64215__$1 = temp__4126__auto___64214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64197_64215__$1))
{var c__4314__auto___64216 = cljs.core.chunk_first.call(null,seq__64197_64215__$1);{
var G__64217 = cljs.core.chunk_rest.call(null,seq__64197_64215__$1);
var G__64218 = c__4314__auto___64216;
var G__64219 = cljs.core.count.call(null,c__4314__auto___64216);
var G__64220 = (0);
seq__64197_64205 = G__64217;
chunk__64198_64206 = G__64218;
count__64199_64207 = G__64219;
i__64200_64208 = G__64220;
continue;
}
} else
{var n_64221 = cljs.core.first.call(null,seq__64197_64215__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_64221;
goog.events.fireListeners(n_64221,evt.type,true,evt);
}
{
var G__64222 = cljs.core.next.call(null,seq__64197_64215__$1);
var G__64223 = null;
var G__64224 = (0);
var G__64225 = (0);
seq__64197_64205 = G__64222;
chunk__64198_64206 = G__64223;
count__64199_64207 = G__64224;
i__64200_64208 = G__64225;
continue;
}
}
} else
{}
}
break;
}
var seq__64201_64226 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__64202_64227 = null;var count__64203_64228 = (0);var i__64204_64229 = (0);while(true){
if((i__64204_64229 < count__64203_64228))
{var n_64230 = cljs.core._nth.call(null,chunk__64202_64227,i__64204_64229);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_64230;
goog.events.fireListeners(n_64230,evt.type,false,evt);
}
{
var G__64231 = seq__64201_64226;
var G__64232 = chunk__64202_64227;
var G__64233 = count__64203_64228;
var G__64234 = (i__64204_64229 + (1));
seq__64201_64226 = G__64231;
chunk__64202_64227 = G__64232;
count__64203_64228 = G__64233;
i__64204_64229 = G__64234;
continue;
}
} else
{var temp__4126__auto___64235 = cljs.core.seq.call(null,seq__64201_64226);if(temp__4126__auto___64235)
{var seq__64201_64236__$1 = temp__4126__auto___64235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64201_64236__$1))
{var c__4314__auto___64237 = cljs.core.chunk_first.call(null,seq__64201_64236__$1);{
var G__64238 = cljs.core.chunk_rest.call(null,seq__64201_64236__$1);
var G__64239 = c__4314__auto___64237;
var G__64240 = cljs.core.count.call(null,c__4314__auto___64237);
var G__64241 = (0);
seq__64201_64226 = G__64238;
chunk__64202_64227 = G__64239;
count__64203_64228 = G__64240;
i__64204_64229 = G__64241;
continue;
}
} else
{var n_64242 = cljs.core.first.call(null,seq__64201_64236__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_64242;
goog.events.fireListeners(n_64242,evt.type,false,evt);
}
{
var G__64243 = cljs.core.next.call(null,seq__64201_64236__$1);
var G__64244 = null;
var G__64245 = (0);
var G__64246 = (0);
seq__64201_64226 = G__64243;
chunk__64202_64227 = G__64244;
count__64203_64228 = G__64245;
i__64204_64229 = G__64246;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__64253_64259 = cljs.core.seq.call(null,evt_map);var chunk__64254_64260 = null;var count__64255_64261 = (0);var i__64256_64262 = (0);while(true){
if((i__64256_64262 < count__64255_64261))
{var vec__64257_64263 = cljs.core._nth.call(null,chunk__64254_64260,i__64256_64262);var k_64264 = cljs.core.nth.call(null,vec__64257_64263,(0),null);var v_64265 = cljs.core.nth.call(null,vec__64257_64263,(1),null);(evt[k_64264] = v_64265);
{
var G__64266 = seq__64253_64259;
var G__64267 = chunk__64254_64260;
var G__64268 = count__64255_64261;
var G__64269 = (i__64256_64262 + (1));
seq__64253_64259 = G__64266;
chunk__64254_64260 = G__64267;
count__64255_64261 = G__64268;
i__64256_64262 = G__64269;
continue;
}
} else
{var temp__4126__auto___64270 = cljs.core.seq.call(null,seq__64253_64259);if(temp__4126__auto___64270)
{var seq__64253_64271__$1 = temp__4126__auto___64270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__64253_64271__$1))
{var c__4314__auto___64272 = cljs.core.chunk_first.call(null,seq__64253_64271__$1);{
var G__64273 = cljs.core.chunk_rest.call(null,seq__64253_64271__$1);
var G__64274 = c__4314__auto___64272;
var G__64275 = cljs.core.count.call(null,c__4314__auto___64272);
var G__64276 = (0);
seq__64253_64259 = G__64273;
chunk__64254_64260 = G__64274;
count__64255_64261 = G__64275;
i__64256_64262 = G__64276;
continue;
}
} else
{var vec__64258_64277 = cljs.core.first.call(null,seq__64253_64271__$1);var k_64278 = cljs.core.nth.call(null,vec__64258_64277,(0),null);var v_64279 = cljs.core.nth.call(null,vec__64258_64277,(1),null);(evt[k_64278] = v_64279);
{
var G__64280 = cljs.core.next.call(null,seq__64253_64271__$1);
var G__64281 = null;
var G__64282 = (0);
var G__64283 = (0);
seq__64253_64259 = G__64280;
chunk__64254_64260 = G__64281;
count__64255_64261 = G__64282;
i__64256_64262 = G__64283;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__64284_SHARP_){return goog.events.getListeners(p1__64284_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map