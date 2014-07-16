// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj53885 = {};return obj53885;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t53889 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t53889 = (function (evt,f,create_listener_function,meta53890){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta53890 = meta53890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t53889.cljs$lang$type = true;
domina.events.t53889.cljs$lang$ctorStr = "domina.events/t53889";
domina.events.t53889.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t53889");
});
domina.events.t53889.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t53889.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t53889.prototype.domina$events$Event$ = true;
domina.events.t53889.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t53889.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t53889.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t53889.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t53889.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t53889.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t53889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53891){var self__ = this;
var _53891__$1 = this;return self__.meta53890;
});
domina.events.t53889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53891,meta53890__$1){var self__ = this;
var _53891__$1 = this;return (new domina.events.t53889(self__.evt,self__.f,self__.create_listener_function,meta53890__$1));
});
domina.events.__GT_t53889 = (function __GT_t53889(evt__$1,f__$1,create_listener_function__$1,meta53890){return (new domina.events.t53889(evt__$1,f__$1,create_listener_function__$1,meta53890));
});
}
return (new domina.events.t53889(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__53896(s__53897){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__53897__$1 = s__53897;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53897__$1);if(temp__4126__auto__)
{var s__53897__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53897__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__53897__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__53899 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__53898 = (0);while(true){
if((i__53898 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__53898);cljs.core.chunk_append.call(null,b__53899,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__53900 = (i__53898 + (1));
i__53898 = G__53900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53899),iter__53896.call(null,cljs.core.chunk_rest.call(null,s__53897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53899),null);
}
} else
{var node = cljs.core.first.call(null,s__53897__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__53896.call(null,cljs.core.rest.call(null,s__53897__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__53909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__53910 = null;var count__53911 = (0);var i__53912 = (0);while(true){
if((i__53912 < count__53911))
{var node = cljs.core._nth.call(null,chunk__53910,i__53912);goog.events.removeAll(node);
{
var G__53917 = seq__53909;
var G__53918 = chunk__53910;
var G__53919 = count__53911;
var G__53920 = (i__53912 + (1));
seq__53909 = G__53917;
chunk__53910 = G__53918;
count__53911 = G__53919;
i__53912 = G__53920;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__53909);if(temp__4126__auto__)
{var seq__53909__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53909__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__53909__$1);{
var G__53921 = cljs.core.chunk_rest.call(null,seq__53909__$1);
var G__53922 = c__4299__auto__;
var G__53923 = cljs.core.count.call(null,c__4299__auto__);
var G__53924 = (0);
seq__53909 = G__53921;
chunk__53910 = G__53922;
count__53911 = G__53923;
i__53912 = G__53924;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__53909__$1);goog.events.removeAll(node);
{
var G__53925 = cljs.core.next.call(null,seq__53909__$1);
var G__53926 = null;
var G__53927 = (0);
var G__53928 = (0);
seq__53909 = G__53925;
chunk__53910 = G__53926;
count__53911 = G__53927;
i__53912 = G__53928;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__53913 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__53914 = null;var count__53915 = (0);var i__53916 = (0);while(true){
if((i__53916 < count__53915))
{var node = cljs.core._nth.call(null,chunk__53914,i__53916);goog.events.removeAll(node,type__$1);
{
var G__53929 = seq__53913;
var G__53930 = chunk__53914;
var G__53931 = count__53915;
var G__53932 = (i__53916 + (1));
seq__53913 = G__53929;
chunk__53914 = G__53930;
count__53915 = G__53931;
i__53916 = G__53932;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__53913);if(temp__4126__auto__)
{var seq__53913__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53913__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__53913__$1);{
var G__53933 = cljs.core.chunk_rest.call(null,seq__53913__$1);
var G__53934 = c__4299__auto__;
var G__53935 = cljs.core.count.call(null,c__4299__auto__);
var G__53936 = (0);
seq__53913 = G__53933;
chunk__53914 = G__53934;
count__53915 = G__53935;
i__53916 = G__53936;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__53913__$1);goog.events.removeAll(node,type__$1);
{
var G__53937 = cljs.core.next.call(null,seq__53913__$1);
var G__53938 = null;
var G__53939 = (0);
var G__53940 = (0);
seq__53913 = G__53937;
chunk__53914 = G__53938;
count__53915 = G__53939;
i__53916 = G__53940;
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
var G__53941 = parent;
var G__53942 = cljs.core.cons.call(null,parent,so_far);
n = G__53941;
so_far = G__53942;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__53951_53959 = cljs.core.seq.call(null,ancestors);var chunk__53952_53960 = null;var count__53953_53961 = (0);var i__53954_53962 = (0);while(true){
if((i__53954_53962 < count__53953_53961))
{var n_53963 = cljs.core._nth.call(null,chunk__53952_53960,i__53954_53962);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_53963;
goog.events.fireListeners(n_53963,evt.type,true,evt);
}
{
var G__53964 = seq__53951_53959;
var G__53965 = chunk__53952_53960;
var G__53966 = count__53953_53961;
var G__53967 = (i__53954_53962 + (1));
seq__53951_53959 = G__53964;
chunk__53952_53960 = G__53965;
count__53953_53961 = G__53966;
i__53954_53962 = G__53967;
continue;
}
} else
{var temp__4126__auto___53968 = cljs.core.seq.call(null,seq__53951_53959);if(temp__4126__auto___53968)
{var seq__53951_53969__$1 = temp__4126__auto___53968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53951_53969__$1))
{var c__4299__auto___53970 = cljs.core.chunk_first.call(null,seq__53951_53969__$1);{
var G__53971 = cljs.core.chunk_rest.call(null,seq__53951_53969__$1);
var G__53972 = c__4299__auto___53970;
var G__53973 = cljs.core.count.call(null,c__4299__auto___53970);
var G__53974 = (0);
seq__53951_53959 = G__53971;
chunk__53952_53960 = G__53972;
count__53953_53961 = G__53973;
i__53954_53962 = G__53974;
continue;
}
} else
{var n_53975 = cljs.core.first.call(null,seq__53951_53969__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_53975;
goog.events.fireListeners(n_53975,evt.type,true,evt);
}
{
var G__53976 = cljs.core.next.call(null,seq__53951_53969__$1);
var G__53977 = null;
var G__53978 = (0);
var G__53979 = (0);
seq__53951_53959 = G__53976;
chunk__53952_53960 = G__53977;
count__53953_53961 = G__53978;
i__53954_53962 = G__53979;
continue;
}
}
} else
{}
}
break;
}
var seq__53955_53980 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__53956_53981 = null;var count__53957_53982 = (0);var i__53958_53983 = (0);while(true){
if((i__53958_53983 < count__53957_53982))
{var n_53984 = cljs.core._nth.call(null,chunk__53956_53981,i__53958_53983);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_53984;
goog.events.fireListeners(n_53984,evt.type,false,evt);
}
{
var G__53985 = seq__53955_53980;
var G__53986 = chunk__53956_53981;
var G__53987 = count__53957_53982;
var G__53988 = (i__53958_53983 + (1));
seq__53955_53980 = G__53985;
chunk__53956_53981 = G__53986;
count__53957_53982 = G__53987;
i__53958_53983 = G__53988;
continue;
}
} else
{var temp__4126__auto___53989 = cljs.core.seq.call(null,seq__53955_53980);if(temp__4126__auto___53989)
{var seq__53955_53990__$1 = temp__4126__auto___53989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53955_53990__$1))
{var c__4299__auto___53991 = cljs.core.chunk_first.call(null,seq__53955_53990__$1);{
var G__53992 = cljs.core.chunk_rest.call(null,seq__53955_53990__$1);
var G__53993 = c__4299__auto___53991;
var G__53994 = cljs.core.count.call(null,c__4299__auto___53991);
var G__53995 = (0);
seq__53955_53980 = G__53992;
chunk__53956_53981 = G__53993;
count__53957_53982 = G__53994;
i__53958_53983 = G__53995;
continue;
}
} else
{var n_53996 = cljs.core.first.call(null,seq__53955_53990__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_53996;
goog.events.fireListeners(n_53996,evt.type,false,evt);
}
{
var G__53997 = cljs.core.next.call(null,seq__53955_53990__$1);
var G__53998 = null;
var G__53999 = (0);
var G__54000 = (0);
seq__53955_53980 = G__53997;
chunk__53956_53981 = G__53998;
count__53957_53982 = G__53999;
i__53958_53983 = G__54000;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__54007_54013 = cljs.core.seq.call(null,evt_map);var chunk__54008_54014 = null;var count__54009_54015 = (0);var i__54010_54016 = (0);while(true){
if((i__54010_54016 < count__54009_54015))
{var vec__54011_54017 = cljs.core._nth.call(null,chunk__54008_54014,i__54010_54016);var k_54018 = cljs.core.nth.call(null,vec__54011_54017,(0),null);var v_54019 = cljs.core.nth.call(null,vec__54011_54017,(1),null);(evt[k_54018] = v_54019);
{
var G__54020 = seq__54007_54013;
var G__54021 = chunk__54008_54014;
var G__54022 = count__54009_54015;
var G__54023 = (i__54010_54016 + (1));
seq__54007_54013 = G__54020;
chunk__54008_54014 = G__54021;
count__54009_54015 = G__54022;
i__54010_54016 = G__54023;
continue;
}
} else
{var temp__4126__auto___54024 = cljs.core.seq.call(null,seq__54007_54013);if(temp__4126__auto___54024)
{var seq__54007_54025__$1 = temp__4126__auto___54024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54007_54025__$1))
{var c__4299__auto___54026 = cljs.core.chunk_first.call(null,seq__54007_54025__$1);{
var G__54027 = cljs.core.chunk_rest.call(null,seq__54007_54025__$1);
var G__54028 = c__4299__auto___54026;
var G__54029 = cljs.core.count.call(null,c__4299__auto___54026);
var G__54030 = (0);
seq__54007_54013 = G__54027;
chunk__54008_54014 = G__54028;
count__54009_54015 = G__54029;
i__54010_54016 = G__54030;
continue;
}
} else
{var vec__54012_54031 = cljs.core.first.call(null,seq__54007_54025__$1);var k_54032 = cljs.core.nth.call(null,vec__54012_54031,(0),null);var v_54033 = cljs.core.nth.call(null,vec__54012_54031,(1),null);(evt[k_54032] = v_54033);
{
var G__54034 = cljs.core.next.call(null,seq__54007_54025__$1);
var G__54035 = null;
var G__54036 = (0);
var G__54037 = (0);
seq__54007_54013 = G__54034;
chunk__54008_54014 = G__54035;
count__54009_54015 = G__54036;
i__54010_54016 = G__54037;
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
return (function (p1__54038_SHARP_){return goog.events.getListeners(p1__54038_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map