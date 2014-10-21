// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38898 = {};return obj38898;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38902 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38902 = (function (evt,f,create_listener_function,meta38903){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38903 = meta38903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38902.cljs$lang$type = true;
domina.events.t38902.cljs$lang$ctorStr = "domina.events/t38902";
domina.events.t38902.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t38902");
});
domina.events.t38902.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38902.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t38902.prototype.domina$events$Event$ = true;
domina.events.t38902.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38902.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38902.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38902.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38902.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38902.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38904){var self__ = this;
var _38904__$1 = this;return self__.meta38903;
});
domina.events.t38902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38904,meta38903__$1){var self__ = this;
var _38904__$1 = this;return (new domina.events.t38902(self__.evt,self__.f,self__.create_listener_function,meta38903__$1));
});
domina.events.__GT_t38902 = (function __GT_t38902(evt__$1,f__$1,create_listener_function__$1,meta38903){return (new domina.events.t38902(evt__$1,f__$1,create_listener_function__$1,meta38903));
});
}
return (new domina.events.t38902(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__38909(s__38910){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__38910__$1 = s__38910;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38910__$1);if(temp__4126__auto__)
{var s__38910__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38910__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38910__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38912 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38911 = (0);while(true){
if((i__38911 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__38911);cljs.core.chunk_append.call(null,b__38912,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38913 = (i__38911 + (1));
i__38911 = G__38913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38912),iter__38909.call(null,cljs.core.chunk_rest.call(null,s__38910__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38912),null);
}
} else
{var node = cljs.core.first.call(null,s__38910__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38909.call(null,cljs.core.rest.call(null,s__38910__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38922 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38923 = null;var count__38924 = (0);var i__38925 = (0);while(true){
if((i__38925 < count__38924))
{var node = cljs.core._nth.call(null,chunk__38923,i__38925);goog.events.removeAll(node);
{
var G__38930 = seq__38922;
var G__38931 = chunk__38923;
var G__38932 = count__38924;
var G__38933 = (i__38925 + (1));
seq__38922 = G__38930;
chunk__38923 = G__38931;
count__38924 = G__38932;
i__38925 = G__38933;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38922);if(temp__4126__auto__)
{var seq__38922__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38922__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__38922__$1);{
var G__38934 = cljs.core.chunk_rest.call(null,seq__38922__$1);
var G__38935 = c__4406__auto__;
var G__38936 = cljs.core.count.call(null,c__4406__auto__);
var G__38937 = (0);
seq__38922 = G__38934;
chunk__38923 = G__38935;
count__38924 = G__38936;
i__38925 = G__38937;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38922__$1);goog.events.removeAll(node);
{
var G__38938 = cljs.core.next.call(null,seq__38922__$1);
var G__38939 = null;
var G__38940 = (0);
var G__38941 = (0);
seq__38922 = G__38938;
chunk__38923 = G__38939;
count__38924 = G__38940;
i__38925 = G__38941;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38926 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38927 = null;var count__38928 = (0);var i__38929 = (0);while(true){
if((i__38929 < count__38928))
{var node = cljs.core._nth.call(null,chunk__38927,i__38929);goog.events.removeAll(node,type__$1);
{
var G__38942 = seq__38926;
var G__38943 = chunk__38927;
var G__38944 = count__38928;
var G__38945 = (i__38929 + (1));
seq__38926 = G__38942;
chunk__38927 = G__38943;
count__38928 = G__38944;
i__38929 = G__38945;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__38926);if(temp__4126__auto__)
{var seq__38926__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38926__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__38926__$1);{
var G__38946 = cljs.core.chunk_rest.call(null,seq__38926__$1);
var G__38947 = c__4406__auto__;
var G__38948 = cljs.core.count.call(null,c__4406__auto__);
var G__38949 = (0);
seq__38926 = G__38946;
chunk__38927 = G__38947;
count__38928 = G__38948;
i__38929 = G__38949;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38926__$1);goog.events.removeAll(node,type__$1);
{
var G__38950 = cljs.core.next.call(null,seq__38926__$1);
var G__38951 = null;
var G__38952 = (0);
var G__38953 = (0);
seq__38926 = G__38950;
chunk__38927 = G__38951;
count__38928 = G__38952;
i__38929 = G__38953;
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
var G__38954 = parent;
var G__38955 = cljs.core.cons.call(null,parent,so_far);
n = G__38954;
so_far = G__38955;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38964_38972 = cljs.core.seq.call(null,ancestors);var chunk__38965_38973 = null;var count__38966_38974 = (0);var i__38967_38975 = (0);while(true){
if((i__38967_38975 < count__38966_38974))
{var n_38976 = cljs.core._nth.call(null,chunk__38965_38973,i__38967_38975);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38976;
goog.events.fireListeners(n_38976,evt.type,true,evt);
}
{
var G__38977 = seq__38964_38972;
var G__38978 = chunk__38965_38973;
var G__38979 = count__38966_38974;
var G__38980 = (i__38967_38975 + (1));
seq__38964_38972 = G__38977;
chunk__38965_38973 = G__38978;
count__38966_38974 = G__38979;
i__38967_38975 = G__38980;
continue;
}
} else
{var temp__4126__auto___38981 = cljs.core.seq.call(null,seq__38964_38972);if(temp__4126__auto___38981)
{var seq__38964_38982__$1 = temp__4126__auto___38981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38964_38982__$1))
{var c__4406__auto___38983 = cljs.core.chunk_first.call(null,seq__38964_38982__$1);{
var G__38984 = cljs.core.chunk_rest.call(null,seq__38964_38982__$1);
var G__38985 = c__4406__auto___38983;
var G__38986 = cljs.core.count.call(null,c__4406__auto___38983);
var G__38987 = (0);
seq__38964_38972 = G__38984;
chunk__38965_38973 = G__38985;
count__38966_38974 = G__38986;
i__38967_38975 = G__38987;
continue;
}
} else
{var n_38988 = cljs.core.first.call(null,seq__38964_38982__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38988;
goog.events.fireListeners(n_38988,evt.type,true,evt);
}
{
var G__38989 = cljs.core.next.call(null,seq__38964_38982__$1);
var G__38990 = null;
var G__38991 = (0);
var G__38992 = (0);
seq__38964_38972 = G__38989;
chunk__38965_38973 = G__38990;
count__38966_38974 = G__38991;
i__38967_38975 = G__38992;
continue;
}
}
} else
{}
}
break;
}
var seq__38968_38993 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38969_38994 = null;var count__38970_38995 = (0);var i__38971_38996 = (0);while(true){
if((i__38971_38996 < count__38970_38995))
{var n_38997 = cljs.core._nth.call(null,chunk__38969_38994,i__38971_38996);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38997;
goog.events.fireListeners(n_38997,evt.type,false,evt);
}
{
var G__38998 = seq__38968_38993;
var G__38999 = chunk__38969_38994;
var G__39000 = count__38970_38995;
var G__39001 = (i__38971_38996 + (1));
seq__38968_38993 = G__38998;
chunk__38969_38994 = G__38999;
count__38970_38995 = G__39000;
i__38971_38996 = G__39001;
continue;
}
} else
{var temp__4126__auto___39002 = cljs.core.seq.call(null,seq__38968_38993);if(temp__4126__auto___39002)
{var seq__38968_39003__$1 = temp__4126__auto___39002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38968_39003__$1))
{var c__4406__auto___39004 = cljs.core.chunk_first.call(null,seq__38968_39003__$1);{
var G__39005 = cljs.core.chunk_rest.call(null,seq__38968_39003__$1);
var G__39006 = c__4406__auto___39004;
var G__39007 = cljs.core.count.call(null,c__4406__auto___39004);
var G__39008 = (0);
seq__38968_38993 = G__39005;
chunk__38969_38994 = G__39006;
count__38970_38995 = G__39007;
i__38971_38996 = G__39008;
continue;
}
} else
{var n_39009 = cljs.core.first.call(null,seq__38968_39003__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39009;
goog.events.fireListeners(n_39009,evt.type,false,evt);
}
{
var G__39010 = cljs.core.next.call(null,seq__38968_39003__$1);
var G__39011 = null;
var G__39012 = (0);
var G__39013 = (0);
seq__38968_38993 = G__39010;
chunk__38969_38994 = G__39011;
count__38970_38995 = G__39012;
i__38971_38996 = G__39013;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__39020_39026 = cljs.core.seq.call(null,evt_map);var chunk__39021_39027 = null;var count__39022_39028 = (0);var i__39023_39029 = (0);while(true){
if((i__39023_39029 < count__39022_39028))
{var vec__39024_39030 = cljs.core._nth.call(null,chunk__39021_39027,i__39023_39029);var k_39031 = cljs.core.nth.call(null,vec__39024_39030,(0),null);var v_39032 = cljs.core.nth.call(null,vec__39024_39030,(1),null);(evt[k_39031] = v_39032);
{
var G__39033 = seq__39020_39026;
var G__39034 = chunk__39021_39027;
var G__39035 = count__39022_39028;
var G__39036 = (i__39023_39029 + (1));
seq__39020_39026 = G__39033;
chunk__39021_39027 = G__39034;
count__39022_39028 = G__39035;
i__39023_39029 = G__39036;
continue;
}
} else
{var temp__4126__auto___39037 = cljs.core.seq.call(null,seq__39020_39026);if(temp__4126__auto___39037)
{var seq__39020_39038__$1 = temp__4126__auto___39037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39020_39038__$1))
{var c__4406__auto___39039 = cljs.core.chunk_first.call(null,seq__39020_39038__$1);{
var G__39040 = cljs.core.chunk_rest.call(null,seq__39020_39038__$1);
var G__39041 = c__4406__auto___39039;
var G__39042 = cljs.core.count.call(null,c__4406__auto___39039);
var G__39043 = (0);
seq__39020_39026 = G__39040;
chunk__39021_39027 = G__39041;
count__39022_39028 = G__39042;
i__39023_39029 = G__39043;
continue;
}
} else
{var vec__39025_39044 = cljs.core.first.call(null,seq__39020_39038__$1);var k_39045 = cljs.core.nth.call(null,vec__39025_39044,(0),null);var v_39046 = cljs.core.nth.call(null,vec__39025_39044,(1),null);(evt[k_39045] = v_39046);
{
var G__39047 = cljs.core.next.call(null,seq__39020_39038__$1);
var G__39048 = null;
var G__39049 = (0);
var G__39050 = (0);
seq__39020_39026 = G__39047;
chunk__39021_39027 = G__39048;
count__39022_39028 = G__39049;
i__39023_39029 = G__39050;
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
return (function (p1__39051_SHARP_){return goog.events.getListeners(p1__39051_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
