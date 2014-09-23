// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18897 = {};return obj18897;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18901 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18901 = (function (evt,f,create_listener_function,meta18902){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18902 = meta18902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18901.cljs$lang$type = true;
domina.events.t18901.cljs$lang$ctorStr = "domina.events/t18901";
domina.events.t18901.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t18901");
});
domina.events.t18901.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18901.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t18901.prototype.domina$events$Event$ = true;
domina.events.t18901.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18901.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18901.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18901.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18901.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18901.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18903){var self__ = this;
var _18903__$1 = this;return self__.meta18902;
});
domina.events.t18901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18903,meta18902__$1){var self__ = this;
var _18903__$1 = this;return (new domina.events.t18901(self__.evt,self__.f,self__.create_listener_function,meta18902__$1));
});
domina.events.__GT_t18901 = (function __GT_t18901(evt__$1,f__$1,create_listener_function__$1,meta18902){return (new domina.events.t18901(evt__$1,f__$1,create_listener_function__$1,meta18902));
});
}
return (new domina.events.t18901(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__18908(s__18909){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18909__$1 = s__18909;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18909__$1);if(temp__4126__auto__)
{var s__18909__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18909__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18909__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18911 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18910 = (0);while(true){
if((i__18910 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__18910);cljs.core.chunk_append.call(null,b__18911,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18912 = (i__18910 + (1));
i__18910 = G__18912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18911),iter__18908.call(null,cljs.core.chunk_rest.call(null,s__18909__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18911),null);
}
} else
{var node = cljs.core.first.call(null,s__18909__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18908.call(null,cljs.core.rest.call(null,s__18909__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18921 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18922 = null;var count__18923 = (0);var i__18924 = (0);while(true){
if((i__18924 < count__18923))
{var node = cljs.core._nth.call(null,chunk__18922,i__18924);goog.events.removeAll(node);
{
var G__18929 = seq__18921;
var G__18930 = chunk__18922;
var G__18931 = count__18923;
var G__18932 = (i__18924 + (1));
seq__18921 = G__18929;
chunk__18922 = G__18930;
count__18923 = G__18931;
i__18924 = G__18932;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18921);if(temp__4126__auto__)
{var seq__18921__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18921__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__18921__$1);{
var G__18933 = cljs.core.chunk_rest.call(null,seq__18921__$1);
var G__18934 = c__4314__auto__;
var G__18935 = cljs.core.count.call(null,c__4314__auto__);
var G__18936 = (0);
seq__18921 = G__18933;
chunk__18922 = G__18934;
count__18923 = G__18935;
i__18924 = G__18936;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18921__$1);goog.events.removeAll(node);
{
var G__18937 = cljs.core.next.call(null,seq__18921__$1);
var G__18938 = null;
var G__18939 = (0);
var G__18940 = (0);
seq__18921 = G__18937;
chunk__18922 = G__18938;
count__18923 = G__18939;
i__18924 = G__18940;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18926 = null;var count__18927 = (0);var i__18928 = (0);while(true){
if((i__18928 < count__18927))
{var node = cljs.core._nth.call(null,chunk__18926,i__18928);goog.events.removeAll(node,type__$1);
{
var G__18941 = seq__18925;
var G__18942 = chunk__18926;
var G__18943 = count__18927;
var G__18944 = (i__18928 + (1));
seq__18925 = G__18941;
chunk__18926 = G__18942;
count__18927 = G__18943;
i__18928 = G__18944;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18925);if(temp__4126__auto__)
{var seq__18925__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18925__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__18925__$1);{
var G__18945 = cljs.core.chunk_rest.call(null,seq__18925__$1);
var G__18946 = c__4314__auto__;
var G__18947 = cljs.core.count.call(null,c__4314__auto__);
var G__18948 = (0);
seq__18925 = G__18945;
chunk__18926 = G__18946;
count__18927 = G__18947;
i__18928 = G__18948;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18925__$1);goog.events.removeAll(node,type__$1);
{
var G__18949 = cljs.core.next.call(null,seq__18925__$1);
var G__18950 = null;
var G__18951 = (0);
var G__18952 = (0);
seq__18925 = G__18949;
chunk__18926 = G__18950;
count__18927 = G__18951;
i__18928 = G__18952;
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
var G__18953 = parent;
var G__18954 = cljs.core.cons.call(null,parent,so_far);
n = G__18953;
so_far = G__18954;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18963_18971 = cljs.core.seq.call(null,ancestors);var chunk__18964_18972 = null;var count__18965_18973 = (0);var i__18966_18974 = (0);while(true){
if((i__18966_18974 < count__18965_18973))
{var n_18975 = cljs.core._nth.call(null,chunk__18964_18972,i__18966_18974);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18975;
goog.events.fireListeners(n_18975,evt.type,true,evt);
}
{
var G__18976 = seq__18963_18971;
var G__18977 = chunk__18964_18972;
var G__18978 = count__18965_18973;
var G__18979 = (i__18966_18974 + (1));
seq__18963_18971 = G__18976;
chunk__18964_18972 = G__18977;
count__18965_18973 = G__18978;
i__18966_18974 = G__18979;
continue;
}
} else
{var temp__4126__auto___18980 = cljs.core.seq.call(null,seq__18963_18971);if(temp__4126__auto___18980)
{var seq__18963_18981__$1 = temp__4126__auto___18980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18963_18981__$1))
{var c__4314__auto___18982 = cljs.core.chunk_first.call(null,seq__18963_18981__$1);{
var G__18983 = cljs.core.chunk_rest.call(null,seq__18963_18981__$1);
var G__18984 = c__4314__auto___18982;
var G__18985 = cljs.core.count.call(null,c__4314__auto___18982);
var G__18986 = (0);
seq__18963_18971 = G__18983;
chunk__18964_18972 = G__18984;
count__18965_18973 = G__18985;
i__18966_18974 = G__18986;
continue;
}
} else
{var n_18987 = cljs.core.first.call(null,seq__18963_18981__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18987;
goog.events.fireListeners(n_18987,evt.type,true,evt);
}
{
var G__18988 = cljs.core.next.call(null,seq__18963_18981__$1);
var G__18989 = null;
var G__18990 = (0);
var G__18991 = (0);
seq__18963_18971 = G__18988;
chunk__18964_18972 = G__18989;
count__18965_18973 = G__18990;
i__18966_18974 = G__18991;
continue;
}
}
} else
{}
}
break;
}
var seq__18967_18992 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18968_18993 = null;var count__18969_18994 = (0);var i__18970_18995 = (0);while(true){
if((i__18970_18995 < count__18969_18994))
{var n_18996 = cljs.core._nth.call(null,chunk__18968_18993,i__18970_18995);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18996;
goog.events.fireListeners(n_18996,evt.type,false,evt);
}
{
var G__18997 = seq__18967_18992;
var G__18998 = chunk__18968_18993;
var G__18999 = count__18969_18994;
var G__19000 = (i__18970_18995 + (1));
seq__18967_18992 = G__18997;
chunk__18968_18993 = G__18998;
count__18969_18994 = G__18999;
i__18970_18995 = G__19000;
continue;
}
} else
{var temp__4126__auto___19001 = cljs.core.seq.call(null,seq__18967_18992);if(temp__4126__auto___19001)
{var seq__18967_19002__$1 = temp__4126__auto___19001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18967_19002__$1))
{var c__4314__auto___19003 = cljs.core.chunk_first.call(null,seq__18967_19002__$1);{
var G__19004 = cljs.core.chunk_rest.call(null,seq__18967_19002__$1);
var G__19005 = c__4314__auto___19003;
var G__19006 = cljs.core.count.call(null,c__4314__auto___19003);
var G__19007 = (0);
seq__18967_18992 = G__19004;
chunk__18968_18993 = G__19005;
count__18969_18994 = G__19006;
i__18970_18995 = G__19007;
continue;
}
} else
{var n_19008 = cljs.core.first.call(null,seq__18967_19002__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19008;
goog.events.fireListeners(n_19008,evt.type,false,evt);
}
{
var G__19009 = cljs.core.next.call(null,seq__18967_19002__$1);
var G__19010 = null;
var G__19011 = (0);
var G__19012 = (0);
seq__18967_18992 = G__19009;
chunk__18968_18993 = G__19010;
count__18969_18994 = G__19011;
i__18970_18995 = G__19012;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19019_19025 = cljs.core.seq.call(null,evt_map);var chunk__19020_19026 = null;var count__19021_19027 = (0);var i__19022_19028 = (0);while(true){
if((i__19022_19028 < count__19021_19027))
{var vec__19023_19029 = cljs.core._nth.call(null,chunk__19020_19026,i__19022_19028);var k_19030 = cljs.core.nth.call(null,vec__19023_19029,(0),null);var v_19031 = cljs.core.nth.call(null,vec__19023_19029,(1),null);(evt[k_19030] = v_19031);
{
var G__19032 = seq__19019_19025;
var G__19033 = chunk__19020_19026;
var G__19034 = count__19021_19027;
var G__19035 = (i__19022_19028 + (1));
seq__19019_19025 = G__19032;
chunk__19020_19026 = G__19033;
count__19021_19027 = G__19034;
i__19022_19028 = G__19035;
continue;
}
} else
{var temp__4126__auto___19036 = cljs.core.seq.call(null,seq__19019_19025);if(temp__4126__auto___19036)
{var seq__19019_19037__$1 = temp__4126__auto___19036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19019_19037__$1))
{var c__4314__auto___19038 = cljs.core.chunk_first.call(null,seq__19019_19037__$1);{
var G__19039 = cljs.core.chunk_rest.call(null,seq__19019_19037__$1);
var G__19040 = c__4314__auto___19038;
var G__19041 = cljs.core.count.call(null,c__4314__auto___19038);
var G__19042 = (0);
seq__19019_19025 = G__19039;
chunk__19020_19026 = G__19040;
count__19021_19027 = G__19041;
i__19022_19028 = G__19042;
continue;
}
} else
{var vec__19024_19043 = cljs.core.first.call(null,seq__19019_19037__$1);var k_19044 = cljs.core.nth.call(null,vec__19024_19043,(0),null);var v_19045 = cljs.core.nth.call(null,vec__19024_19043,(1),null);(evt[k_19044] = v_19045);
{
var G__19046 = cljs.core.next.call(null,seq__19019_19037__$1);
var G__19047 = null;
var G__19048 = (0);
var G__19049 = (0);
seq__19019_19025 = G__19046;
chunk__19020_19026 = G__19047;
count__19021_19027 = G__19048;
i__19022_19028 = G__19049;
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
return (function (p1__19050_SHARP_){return goog.events.getListeners(p1__19050_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
