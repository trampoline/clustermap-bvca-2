// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj22849 = {};return obj22849;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t22853 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t22853 = (function (evt,f,create_listener_function,meta22854){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta22854 = meta22854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t22853.cljs$lang$type = true;
domina.events.t22853.cljs$lang$ctorStr = "domina.events/t22853";
domina.events.t22853.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t22853");
});
domina.events.t22853.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t22853.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t22853.prototype.domina$events$Event$ = true;
domina.events.t22853.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t22853.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t22853.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t22853.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t22853.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t22853.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t22853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22855){var self__ = this;
var _22855__$1 = this;return self__.meta22854;
});
domina.events.t22853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22855,meta22854__$1){var self__ = this;
var _22855__$1 = this;return (new domina.events.t22853(self__.evt,self__.f,self__.create_listener_function,meta22854__$1));
});
domina.events.__GT_t22853 = (function __GT_t22853(evt__$1,f__$1,create_listener_function__$1,meta22854){return (new domina.events.t22853(evt__$1,f__$1,create_listener_function__$1,meta22854));
});
}
return (new domina.events.t22853(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__22860(s__22861){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__22861__$1 = s__22861;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22861__$1);if(temp__4126__auto__)
{var s__22861__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22861__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22861__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22863 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22862 = (0);while(true){
if((i__22862 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__22862);cljs.core.chunk_append.call(null,b__22863,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__22864 = (i__22862 + (1));
i__22862 = G__22864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22863),iter__22860.call(null,cljs.core.chunk_rest.call(null,s__22861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22863),null);
}
} else
{var node = cljs.core.first.call(null,s__22861__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__22860.call(null,cljs.core.rest.call(null,s__22861__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__22873 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22874 = null;var count__22875 = (0);var i__22876 = (0);while(true){
if((i__22876 < count__22875))
{var node = cljs.core._nth.call(null,chunk__22874,i__22876);goog.events.removeAll(node);
{
var G__22881 = seq__22873;
var G__22882 = chunk__22874;
var G__22883 = count__22875;
var G__22884 = (i__22876 + (1));
seq__22873 = G__22881;
chunk__22874 = G__22882;
count__22875 = G__22883;
i__22876 = G__22884;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22873);if(temp__4126__auto__)
{var seq__22873__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22873__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22873__$1);{
var G__22885 = cljs.core.chunk_rest.call(null,seq__22873__$1);
var G__22886 = c__4314__auto__;
var G__22887 = cljs.core.count.call(null,c__4314__auto__);
var G__22888 = (0);
seq__22873 = G__22885;
chunk__22874 = G__22886;
count__22875 = G__22887;
i__22876 = G__22888;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22873__$1);goog.events.removeAll(node);
{
var G__22889 = cljs.core.next.call(null,seq__22873__$1);
var G__22890 = null;
var G__22891 = (0);
var G__22892 = (0);
seq__22873 = G__22889;
chunk__22874 = G__22890;
count__22875 = G__22891;
i__22876 = G__22892;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__22877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22878 = null;var count__22879 = (0);var i__22880 = (0);while(true){
if((i__22880 < count__22879))
{var node = cljs.core._nth.call(null,chunk__22878,i__22880);goog.events.removeAll(node,type__$1);
{
var G__22893 = seq__22877;
var G__22894 = chunk__22878;
var G__22895 = count__22879;
var G__22896 = (i__22880 + (1));
seq__22877 = G__22893;
chunk__22878 = G__22894;
count__22879 = G__22895;
i__22880 = G__22896;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22877);if(temp__4126__auto__)
{var seq__22877__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22877__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22877__$1);{
var G__22897 = cljs.core.chunk_rest.call(null,seq__22877__$1);
var G__22898 = c__4314__auto__;
var G__22899 = cljs.core.count.call(null,c__4314__auto__);
var G__22900 = (0);
seq__22877 = G__22897;
chunk__22878 = G__22898;
count__22879 = G__22899;
i__22880 = G__22900;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22877__$1);goog.events.removeAll(node,type__$1);
{
var G__22901 = cljs.core.next.call(null,seq__22877__$1);
var G__22902 = null;
var G__22903 = (0);
var G__22904 = (0);
seq__22877 = G__22901;
chunk__22878 = G__22902;
count__22879 = G__22903;
i__22880 = G__22904;
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
var G__22905 = parent;
var G__22906 = cljs.core.cons.call(null,parent,so_far);
n = G__22905;
so_far = G__22906;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__22915_22923 = cljs.core.seq.call(null,ancestors);var chunk__22916_22924 = null;var count__22917_22925 = (0);var i__22918_22926 = (0);while(true){
if((i__22918_22926 < count__22917_22925))
{var n_22927 = cljs.core._nth.call(null,chunk__22916_22924,i__22918_22926);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22927;
goog.events.fireListeners(n_22927,evt.type,true,evt);
}
{
var G__22928 = seq__22915_22923;
var G__22929 = chunk__22916_22924;
var G__22930 = count__22917_22925;
var G__22931 = (i__22918_22926 + (1));
seq__22915_22923 = G__22928;
chunk__22916_22924 = G__22929;
count__22917_22925 = G__22930;
i__22918_22926 = G__22931;
continue;
}
} else
{var temp__4126__auto___22932 = cljs.core.seq.call(null,seq__22915_22923);if(temp__4126__auto___22932)
{var seq__22915_22933__$1 = temp__4126__auto___22932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22915_22933__$1))
{var c__4314__auto___22934 = cljs.core.chunk_first.call(null,seq__22915_22933__$1);{
var G__22935 = cljs.core.chunk_rest.call(null,seq__22915_22933__$1);
var G__22936 = c__4314__auto___22934;
var G__22937 = cljs.core.count.call(null,c__4314__auto___22934);
var G__22938 = (0);
seq__22915_22923 = G__22935;
chunk__22916_22924 = G__22936;
count__22917_22925 = G__22937;
i__22918_22926 = G__22938;
continue;
}
} else
{var n_22939 = cljs.core.first.call(null,seq__22915_22933__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22939;
goog.events.fireListeners(n_22939,evt.type,true,evt);
}
{
var G__22940 = cljs.core.next.call(null,seq__22915_22933__$1);
var G__22941 = null;
var G__22942 = (0);
var G__22943 = (0);
seq__22915_22923 = G__22940;
chunk__22916_22924 = G__22941;
count__22917_22925 = G__22942;
i__22918_22926 = G__22943;
continue;
}
}
} else
{}
}
break;
}
var seq__22919_22944 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__22920_22945 = null;var count__22921_22946 = (0);var i__22922_22947 = (0);while(true){
if((i__22922_22947 < count__22921_22946))
{var n_22948 = cljs.core._nth.call(null,chunk__22920_22945,i__22922_22947);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22948;
goog.events.fireListeners(n_22948,evt.type,false,evt);
}
{
var G__22949 = seq__22919_22944;
var G__22950 = chunk__22920_22945;
var G__22951 = count__22921_22946;
var G__22952 = (i__22922_22947 + (1));
seq__22919_22944 = G__22949;
chunk__22920_22945 = G__22950;
count__22921_22946 = G__22951;
i__22922_22947 = G__22952;
continue;
}
} else
{var temp__4126__auto___22953 = cljs.core.seq.call(null,seq__22919_22944);if(temp__4126__auto___22953)
{var seq__22919_22954__$1 = temp__4126__auto___22953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22919_22954__$1))
{var c__4314__auto___22955 = cljs.core.chunk_first.call(null,seq__22919_22954__$1);{
var G__22956 = cljs.core.chunk_rest.call(null,seq__22919_22954__$1);
var G__22957 = c__4314__auto___22955;
var G__22958 = cljs.core.count.call(null,c__4314__auto___22955);
var G__22959 = (0);
seq__22919_22944 = G__22956;
chunk__22920_22945 = G__22957;
count__22921_22946 = G__22958;
i__22922_22947 = G__22959;
continue;
}
} else
{var n_22960 = cljs.core.first.call(null,seq__22919_22954__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22960;
goog.events.fireListeners(n_22960,evt.type,false,evt);
}
{
var G__22961 = cljs.core.next.call(null,seq__22919_22954__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22919_22944 = G__22961;
chunk__22920_22945 = G__22962;
count__22921_22946 = G__22963;
i__22922_22947 = G__22964;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__22971_22977 = cljs.core.seq.call(null,evt_map);var chunk__22972_22978 = null;var count__22973_22979 = (0);var i__22974_22980 = (0);while(true){
if((i__22974_22980 < count__22973_22979))
{var vec__22975_22981 = cljs.core._nth.call(null,chunk__22972_22978,i__22974_22980);var k_22982 = cljs.core.nth.call(null,vec__22975_22981,(0),null);var v_22983 = cljs.core.nth.call(null,vec__22975_22981,(1),null);(evt[k_22982] = v_22983);
{
var G__22984 = seq__22971_22977;
var G__22985 = chunk__22972_22978;
var G__22986 = count__22973_22979;
var G__22987 = (i__22974_22980 + (1));
seq__22971_22977 = G__22984;
chunk__22972_22978 = G__22985;
count__22973_22979 = G__22986;
i__22974_22980 = G__22987;
continue;
}
} else
{var temp__4126__auto___22988 = cljs.core.seq.call(null,seq__22971_22977);if(temp__4126__auto___22988)
{var seq__22971_22989__$1 = temp__4126__auto___22988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22971_22989__$1))
{var c__4314__auto___22990 = cljs.core.chunk_first.call(null,seq__22971_22989__$1);{
var G__22991 = cljs.core.chunk_rest.call(null,seq__22971_22989__$1);
var G__22992 = c__4314__auto___22990;
var G__22993 = cljs.core.count.call(null,c__4314__auto___22990);
var G__22994 = (0);
seq__22971_22977 = G__22991;
chunk__22972_22978 = G__22992;
count__22973_22979 = G__22993;
i__22974_22980 = G__22994;
continue;
}
} else
{var vec__22976_22995 = cljs.core.first.call(null,seq__22971_22989__$1);var k_22996 = cljs.core.nth.call(null,vec__22976_22995,(0),null);var v_22997 = cljs.core.nth.call(null,vec__22976_22995,(1),null);(evt[k_22996] = v_22997);
{
var G__22998 = cljs.core.next.call(null,seq__22971_22989__$1);
var G__22999 = null;
var G__23000 = (0);
var G__23001 = (0);
seq__22971_22977 = G__22998;
chunk__22972_22978 = G__22999;
count__22973_22979 = G__23000;
i__22974_22980 = G__23001;
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
return (function (p1__23002_SHARP_){return goog.events.getListeners(p1__23002_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
