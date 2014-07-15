// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17818 = {};return obj17818;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17822 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17822 = (function (evt,f,create_listener_function,meta17823){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17823 = meta17823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17822.cljs$lang$type = true;
domina.events.t17822.cljs$lang$ctorStr = "domina.events/t17822";
domina.events.t17822.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t17822");
});
domina.events.t17822.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17822.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t17822.prototype.domina$events$Event$ = true;
domina.events.t17822.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17822.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17822.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17822.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17822.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17822.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17824){var self__ = this;
var _17824__$1 = this;return self__.meta17823;
});
domina.events.t17822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17824,meta17823__$1){var self__ = this;
var _17824__$1 = this;return (new domina.events.t17822(self__.evt,self__.f,self__.create_listener_function,meta17823__$1));
});
domina.events.__GT_t17822 = (function __GT_t17822(evt__$1,f__$1,create_listener_function__$1,meta17823){return (new domina.events.t17822(evt__$1,f__$1,create_listener_function__$1,meta17823));
});
}
return (new domina.events.t17822(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__17829(s__17830){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__17830__$1 = s__17830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17830__$1);if(temp__4126__auto__)
{var s__17830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17830__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17830__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17832 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17831 = (0);while(true){
if((i__17831 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__17831);cljs.core.chunk_append.call(null,b__17832,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17833 = (i__17831 + (1));
i__17831 = G__17833;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17832),iter__17829.call(null,cljs.core.chunk_rest.call(null,s__17830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17832),null);
}
} else
{var node = cljs.core.first.call(null,s__17830__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17829.call(null,cljs.core.rest.call(null,s__17830__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17842 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17843 = null;var count__17844 = (0);var i__17845 = (0);while(true){
if((i__17845 < count__17844))
{var node = cljs.core._nth.call(null,chunk__17843,i__17845);goog.events.removeAll(node);
{
var G__17850 = seq__17842;
var G__17851 = chunk__17843;
var G__17852 = count__17844;
var G__17853 = (i__17845 + (1));
seq__17842 = G__17850;
chunk__17843 = G__17851;
count__17844 = G__17852;
i__17845 = G__17853;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17842);if(temp__4126__auto__)
{var seq__17842__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17842__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17842__$1);{
var G__17854 = cljs.core.chunk_rest.call(null,seq__17842__$1);
var G__17855 = c__4299__auto__;
var G__17856 = cljs.core.count.call(null,c__4299__auto__);
var G__17857 = (0);
seq__17842 = G__17854;
chunk__17843 = G__17855;
count__17844 = G__17856;
i__17845 = G__17857;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17842__$1);goog.events.removeAll(node);
{
var G__17858 = cljs.core.next.call(null,seq__17842__$1);
var G__17859 = null;
var G__17860 = (0);
var G__17861 = (0);
seq__17842 = G__17858;
chunk__17843 = G__17859;
count__17844 = G__17860;
i__17845 = G__17861;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17847 = null;var count__17848 = (0);var i__17849 = (0);while(true){
if((i__17849 < count__17848))
{var node = cljs.core._nth.call(null,chunk__17847,i__17849);goog.events.removeAll(node,type__$1);
{
var G__17862 = seq__17846;
var G__17863 = chunk__17847;
var G__17864 = count__17848;
var G__17865 = (i__17849 + (1));
seq__17846 = G__17862;
chunk__17847 = G__17863;
count__17848 = G__17864;
i__17849 = G__17865;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17846);if(temp__4126__auto__)
{var seq__17846__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17846__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17846__$1);{
var G__17866 = cljs.core.chunk_rest.call(null,seq__17846__$1);
var G__17867 = c__4299__auto__;
var G__17868 = cljs.core.count.call(null,c__4299__auto__);
var G__17869 = (0);
seq__17846 = G__17866;
chunk__17847 = G__17867;
count__17848 = G__17868;
i__17849 = G__17869;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17846__$1);goog.events.removeAll(node,type__$1);
{
var G__17870 = cljs.core.next.call(null,seq__17846__$1);
var G__17871 = null;
var G__17872 = (0);
var G__17873 = (0);
seq__17846 = G__17870;
chunk__17847 = G__17871;
count__17848 = G__17872;
i__17849 = G__17873;
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
var G__17874 = parent;
var G__17875 = cljs.core.cons.call(null,parent,so_far);
n = G__17874;
so_far = G__17875;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17884_17892 = cljs.core.seq.call(null,ancestors);var chunk__17885_17893 = null;var count__17886_17894 = (0);var i__17887_17895 = (0);while(true){
if((i__17887_17895 < count__17886_17894))
{var n_17896 = cljs.core._nth.call(null,chunk__17885_17893,i__17887_17895);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17896;
goog.events.fireListeners(n_17896,evt.type,true,evt);
}
{
var G__17897 = seq__17884_17892;
var G__17898 = chunk__17885_17893;
var G__17899 = count__17886_17894;
var G__17900 = (i__17887_17895 + (1));
seq__17884_17892 = G__17897;
chunk__17885_17893 = G__17898;
count__17886_17894 = G__17899;
i__17887_17895 = G__17900;
continue;
}
} else
{var temp__4126__auto___17901 = cljs.core.seq.call(null,seq__17884_17892);if(temp__4126__auto___17901)
{var seq__17884_17902__$1 = temp__4126__auto___17901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17884_17902__$1))
{var c__4299__auto___17903 = cljs.core.chunk_first.call(null,seq__17884_17902__$1);{
var G__17904 = cljs.core.chunk_rest.call(null,seq__17884_17902__$1);
var G__17905 = c__4299__auto___17903;
var G__17906 = cljs.core.count.call(null,c__4299__auto___17903);
var G__17907 = (0);
seq__17884_17892 = G__17904;
chunk__17885_17893 = G__17905;
count__17886_17894 = G__17906;
i__17887_17895 = G__17907;
continue;
}
} else
{var n_17908 = cljs.core.first.call(null,seq__17884_17902__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17908;
goog.events.fireListeners(n_17908,evt.type,true,evt);
}
{
var G__17909 = cljs.core.next.call(null,seq__17884_17902__$1);
var G__17910 = null;
var G__17911 = (0);
var G__17912 = (0);
seq__17884_17892 = G__17909;
chunk__17885_17893 = G__17910;
count__17886_17894 = G__17911;
i__17887_17895 = G__17912;
continue;
}
}
} else
{}
}
break;
}
var seq__17888_17913 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17889_17914 = null;var count__17890_17915 = (0);var i__17891_17916 = (0);while(true){
if((i__17891_17916 < count__17890_17915))
{var n_17917 = cljs.core._nth.call(null,chunk__17889_17914,i__17891_17916);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17917;
goog.events.fireListeners(n_17917,evt.type,false,evt);
}
{
var G__17918 = seq__17888_17913;
var G__17919 = chunk__17889_17914;
var G__17920 = count__17890_17915;
var G__17921 = (i__17891_17916 + (1));
seq__17888_17913 = G__17918;
chunk__17889_17914 = G__17919;
count__17890_17915 = G__17920;
i__17891_17916 = G__17921;
continue;
}
} else
{var temp__4126__auto___17922 = cljs.core.seq.call(null,seq__17888_17913);if(temp__4126__auto___17922)
{var seq__17888_17923__$1 = temp__4126__auto___17922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17888_17923__$1))
{var c__4299__auto___17924 = cljs.core.chunk_first.call(null,seq__17888_17923__$1);{
var G__17925 = cljs.core.chunk_rest.call(null,seq__17888_17923__$1);
var G__17926 = c__4299__auto___17924;
var G__17927 = cljs.core.count.call(null,c__4299__auto___17924);
var G__17928 = (0);
seq__17888_17913 = G__17925;
chunk__17889_17914 = G__17926;
count__17890_17915 = G__17927;
i__17891_17916 = G__17928;
continue;
}
} else
{var n_17929 = cljs.core.first.call(null,seq__17888_17923__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17929;
goog.events.fireListeners(n_17929,evt.type,false,evt);
}
{
var G__17930 = cljs.core.next.call(null,seq__17888_17923__$1);
var G__17931 = null;
var G__17932 = (0);
var G__17933 = (0);
seq__17888_17913 = G__17930;
chunk__17889_17914 = G__17931;
count__17890_17915 = G__17932;
i__17891_17916 = G__17933;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17940_17946 = cljs.core.seq.call(null,evt_map);var chunk__17941_17947 = null;var count__17942_17948 = (0);var i__17943_17949 = (0);while(true){
if((i__17943_17949 < count__17942_17948))
{var vec__17944_17950 = cljs.core._nth.call(null,chunk__17941_17947,i__17943_17949);var k_17951 = cljs.core.nth.call(null,vec__17944_17950,(0),null);var v_17952 = cljs.core.nth.call(null,vec__17944_17950,(1),null);(evt[k_17951] = v_17952);
{
var G__17953 = seq__17940_17946;
var G__17954 = chunk__17941_17947;
var G__17955 = count__17942_17948;
var G__17956 = (i__17943_17949 + (1));
seq__17940_17946 = G__17953;
chunk__17941_17947 = G__17954;
count__17942_17948 = G__17955;
i__17943_17949 = G__17956;
continue;
}
} else
{var temp__4126__auto___17957 = cljs.core.seq.call(null,seq__17940_17946);if(temp__4126__auto___17957)
{var seq__17940_17958__$1 = temp__4126__auto___17957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17940_17958__$1))
{var c__4299__auto___17959 = cljs.core.chunk_first.call(null,seq__17940_17958__$1);{
var G__17960 = cljs.core.chunk_rest.call(null,seq__17940_17958__$1);
var G__17961 = c__4299__auto___17959;
var G__17962 = cljs.core.count.call(null,c__4299__auto___17959);
var G__17963 = (0);
seq__17940_17946 = G__17960;
chunk__17941_17947 = G__17961;
count__17942_17948 = G__17962;
i__17943_17949 = G__17963;
continue;
}
} else
{var vec__17945_17964 = cljs.core.first.call(null,seq__17940_17958__$1);var k_17965 = cljs.core.nth.call(null,vec__17945_17964,(0),null);var v_17966 = cljs.core.nth.call(null,vec__17945_17964,(1),null);(evt[k_17965] = v_17966);
{
var G__17967 = cljs.core.next.call(null,seq__17940_17958__$1);
var G__17968 = null;
var G__17969 = (0);
var G__17970 = (0);
seq__17940_17946 = G__17967;
chunk__17941_17947 = G__17968;
count__17942_17948 = G__17969;
i__17943_17949 = G__17970;
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
return (function (p1__17971_SHARP_){return goog.events.getListeners(p1__17971_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
