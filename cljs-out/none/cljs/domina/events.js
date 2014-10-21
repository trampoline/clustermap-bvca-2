// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj90932 = {};return obj90932;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t90936 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t90936 = (function (evt,f,create_listener_function,meta90937){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta90937 = meta90937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t90936.cljs$lang$type = true;
domina.events.t90936.cljs$lang$ctorStr = "domina.events/t90936";
domina.events.t90936.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t90936");
});
domina.events.t90936.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t90936.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t90936.prototype.domina$events$Event$ = true;
domina.events.t90936.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t90936.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t90936.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t90936.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t90936.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t90936.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t90936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90938){var self__ = this;
var _90938__$1 = this;return self__.meta90937;
});
domina.events.t90936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90938,meta90937__$1){var self__ = this;
var _90938__$1 = this;return (new domina.events.t90936(self__.evt,self__.f,self__.create_listener_function,meta90937__$1));
});
domina.events.__GT_t90936 = (function __GT_t90936(evt__$1,f__$1,create_listener_function__$1,meta90937){return (new domina.events.t90936(evt__$1,f__$1,create_listener_function__$1,meta90937));
});
}
return (new domina.events.t90936(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__90943(s__90944){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__90944__$1 = s__90944;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__90944__$1);if(temp__4126__auto__)
{var s__90944__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__90944__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__90944__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__90946 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__90945 = (0);while(true){
if((i__90945 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__90945);cljs.core.chunk_append.call(null,b__90946,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__90947 = (i__90945 + (1));
i__90945 = G__90947;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90946),iter__90943.call(null,cljs.core.chunk_rest.call(null,s__90944__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__90946),null);
}
} else
{var node = cljs.core.first.call(null,s__90944__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__90943.call(null,cljs.core.rest.call(null,s__90944__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__90956 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90957 = null;var count__90958 = (0);var i__90959 = (0);while(true){
if((i__90959 < count__90958))
{var node = cljs.core._nth.call(null,chunk__90957,i__90959);goog.events.removeAll(node);
{
var G__90964 = seq__90956;
var G__90965 = chunk__90957;
var G__90966 = count__90958;
var G__90967 = (i__90959 + (1));
seq__90956 = G__90964;
chunk__90957 = G__90965;
count__90958 = G__90966;
i__90959 = G__90967;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__90956);if(temp__4126__auto__)
{var seq__90956__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90956__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__90956__$1);{
var G__90968 = cljs.core.chunk_rest.call(null,seq__90956__$1);
var G__90969 = c__4406__auto__;
var G__90970 = cljs.core.count.call(null,c__4406__auto__);
var G__90971 = (0);
seq__90956 = G__90968;
chunk__90957 = G__90969;
count__90958 = G__90970;
i__90959 = G__90971;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__90956__$1);goog.events.removeAll(node);
{
var G__90972 = cljs.core.next.call(null,seq__90956__$1);
var G__90973 = null;
var G__90974 = (0);
var G__90975 = (0);
seq__90956 = G__90972;
chunk__90957 = G__90973;
count__90958 = G__90974;
i__90959 = G__90975;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__90960 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__90961 = null;var count__90962 = (0);var i__90963 = (0);while(true){
if((i__90963 < count__90962))
{var node = cljs.core._nth.call(null,chunk__90961,i__90963);goog.events.removeAll(node,type__$1);
{
var G__90976 = seq__90960;
var G__90977 = chunk__90961;
var G__90978 = count__90962;
var G__90979 = (i__90963 + (1));
seq__90960 = G__90976;
chunk__90961 = G__90977;
count__90962 = G__90978;
i__90963 = G__90979;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__90960);if(temp__4126__auto__)
{var seq__90960__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90960__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__90960__$1);{
var G__90980 = cljs.core.chunk_rest.call(null,seq__90960__$1);
var G__90981 = c__4406__auto__;
var G__90982 = cljs.core.count.call(null,c__4406__auto__);
var G__90983 = (0);
seq__90960 = G__90980;
chunk__90961 = G__90981;
count__90962 = G__90982;
i__90963 = G__90983;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__90960__$1);goog.events.removeAll(node,type__$1);
{
var G__90984 = cljs.core.next.call(null,seq__90960__$1);
var G__90985 = null;
var G__90986 = (0);
var G__90987 = (0);
seq__90960 = G__90984;
chunk__90961 = G__90985;
count__90962 = G__90986;
i__90963 = G__90987;
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
var G__90988 = parent;
var G__90989 = cljs.core.cons.call(null,parent,so_far);
n = G__90988;
so_far = G__90989;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__90998_91006 = cljs.core.seq.call(null,ancestors);var chunk__90999_91007 = null;var count__91000_91008 = (0);var i__91001_91009 = (0);while(true){
if((i__91001_91009 < count__91000_91008))
{var n_91010 = cljs.core._nth.call(null,chunk__90999_91007,i__91001_91009);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_91010;
goog.events.fireListeners(n_91010,evt.type,true,evt);
}
{
var G__91011 = seq__90998_91006;
var G__91012 = chunk__90999_91007;
var G__91013 = count__91000_91008;
var G__91014 = (i__91001_91009 + (1));
seq__90998_91006 = G__91011;
chunk__90999_91007 = G__91012;
count__91000_91008 = G__91013;
i__91001_91009 = G__91014;
continue;
}
} else
{var temp__4126__auto___91015 = cljs.core.seq.call(null,seq__90998_91006);if(temp__4126__auto___91015)
{var seq__90998_91016__$1 = temp__4126__auto___91015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90998_91016__$1))
{var c__4406__auto___91017 = cljs.core.chunk_first.call(null,seq__90998_91016__$1);{
var G__91018 = cljs.core.chunk_rest.call(null,seq__90998_91016__$1);
var G__91019 = c__4406__auto___91017;
var G__91020 = cljs.core.count.call(null,c__4406__auto___91017);
var G__91021 = (0);
seq__90998_91006 = G__91018;
chunk__90999_91007 = G__91019;
count__91000_91008 = G__91020;
i__91001_91009 = G__91021;
continue;
}
} else
{var n_91022 = cljs.core.first.call(null,seq__90998_91016__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_91022;
goog.events.fireListeners(n_91022,evt.type,true,evt);
}
{
var G__91023 = cljs.core.next.call(null,seq__90998_91016__$1);
var G__91024 = null;
var G__91025 = (0);
var G__91026 = (0);
seq__90998_91006 = G__91023;
chunk__90999_91007 = G__91024;
count__91000_91008 = G__91025;
i__91001_91009 = G__91026;
continue;
}
}
} else
{}
}
break;
}
var seq__91002_91027 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__91003_91028 = null;var count__91004_91029 = (0);var i__91005_91030 = (0);while(true){
if((i__91005_91030 < count__91004_91029))
{var n_91031 = cljs.core._nth.call(null,chunk__91003_91028,i__91005_91030);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_91031;
goog.events.fireListeners(n_91031,evt.type,false,evt);
}
{
var G__91032 = seq__91002_91027;
var G__91033 = chunk__91003_91028;
var G__91034 = count__91004_91029;
var G__91035 = (i__91005_91030 + (1));
seq__91002_91027 = G__91032;
chunk__91003_91028 = G__91033;
count__91004_91029 = G__91034;
i__91005_91030 = G__91035;
continue;
}
} else
{var temp__4126__auto___91036 = cljs.core.seq.call(null,seq__91002_91027);if(temp__4126__auto___91036)
{var seq__91002_91037__$1 = temp__4126__auto___91036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91002_91037__$1))
{var c__4406__auto___91038 = cljs.core.chunk_first.call(null,seq__91002_91037__$1);{
var G__91039 = cljs.core.chunk_rest.call(null,seq__91002_91037__$1);
var G__91040 = c__4406__auto___91038;
var G__91041 = cljs.core.count.call(null,c__4406__auto___91038);
var G__91042 = (0);
seq__91002_91027 = G__91039;
chunk__91003_91028 = G__91040;
count__91004_91029 = G__91041;
i__91005_91030 = G__91042;
continue;
}
} else
{var n_91043 = cljs.core.first.call(null,seq__91002_91037__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_91043;
goog.events.fireListeners(n_91043,evt.type,false,evt);
}
{
var G__91044 = cljs.core.next.call(null,seq__91002_91037__$1);
var G__91045 = null;
var G__91046 = (0);
var G__91047 = (0);
seq__91002_91027 = G__91044;
chunk__91003_91028 = G__91045;
count__91004_91029 = G__91046;
i__91005_91030 = G__91047;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__91054_91060 = cljs.core.seq.call(null,evt_map);var chunk__91055_91061 = null;var count__91056_91062 = (0);var i__91057_91063 = (0);while(true){
if((i__91057_91063 < count__91056_91062))
{var vec__91058_91064 = cljs.core._nth.call(null,chunk__91055_91061,i__91057_91063);var k_91065 = cljs.core.nth.call(null,vec__91058_91064,(0),null);var v_91066 = cljs.core.nth.call(null,vec__91058_91064,(1),null);(evt[k_91065] = v_91066);
{
var G__91067 = seq__91054_91060;
var G__91068 = chunk__91055_91061;
var G__91069 = count__91056_91062;
var G__91070 = (i__91057_91063 + (1));
seq__91054_91060 = G__91067;
chunk__91055_91061 = G__91068;
count__91056_91062 = G__91069;
i__91057_91063 = G__91070;
continue;
}
} else
{var temp__4126__auto___91071 = cljs.core.seq.call(null,seq__91054_91060);if(temp__4126__auto___91071)
{var seq__91054_91072__$1 = temp__4126__auto___91071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91054_91072__$1))
{var c__4406__auto___91073 = cljs.core.chunk_first.call(null,seq__91054_91072__$1);{
var G__91074 = cljs.core.chunk_rest.call(null,seq__91054_91072__$1);
var G__91075 = c__4406__auto___91073;
var G__91076 = cljs.core.count.call(null,c__4406__auto___91073);
var G__91077 = (0);
seq__91054_91060 = G__91074;
chunk__91055_91061 = G__91075;
count__91056_91062 = G__91076;
i__91057_91063 = G__91077;
continue;
}
} else
{var vec__91059_91078 = cljs.core.first.call(null,seq__91054_91072__$1);var k_91079 = cljs.core.nth.call(null,vec__91059_91078,(0),null);var v_91080 = cljs.core.nth.call(null,vec__91059_91078,(1),null);(evt[k_91079] = v_91080);
{
var G__91081 = cljs.core.next.call(null,seq__91054_91072__$1);
var G__91082 = null;
var G__91083 = (0);
var G__91084 = (0);
seq__91054_91060 = G__91081;
chunk__91055_91061 = G__91082;
count__91056_91062 = G__91083;
i__91057_91063 = G__91084;
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
return (function (p1__91085_SHARP_){return goog.events.getListeners(p1__91085_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map