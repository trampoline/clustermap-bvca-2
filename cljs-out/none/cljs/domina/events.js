// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj55871 = {};return obj55871;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.prevent_default[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.prevent_default["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.current_target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.current_target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.event_type[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.event_type["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.raw_event[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.raw_event["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t55875 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t55875 = (function (evt,f,create_listener_function,meta55876){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta55876 = meta55876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t55875.cljs$lang$type = true;
domina.events.t55875.cljs$lang$ctorStr = "domina.events/t55875";
domina.events.t55875.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.events/t55875");
});
domina.events.t55875.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t55875.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t55875.prototype.domina$events$Event$ = true;
domina.events.t55875.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t55875.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t55875.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t55875.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t55875.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t55875.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t55875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55877){var self__ = this;
var _55877__$1 = this;return self__.meta55876;
});
domina.events.t55875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55877,meta55876__$1){var self__ = this;
var _55877__$1 = this;return (new domina.events.t55875(self__.evt,self__.f,self__.create_listener_function,meta55876__$1));
});
domina.events.__GT_t55875 = (function __GT_t55875(evt__$1,f__$1,create_listener_function__$1,meta55876){return (new domina.events.t55875(evt__$1,f__$1,create_listener_function__$1,meta55876));
});
}
return (new domina.events.t55875(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__55882(s__55883){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__55883__$1 = s__55883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55883__$1);if(temp__4126__auto__)
{var s__55883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55883__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55883__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55885 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55884 = (0);while(true){
if((i__55884 < size__4265__auto__))
{var node = cljs.core._nth.call(null,c__4264__auto__,i__55884);cljs.core.chunk_append.call(null,b__55885,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__55886 = (i__55884 + (1));
i__55884 = G__55886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55885),iter__55882.call(null,cljs.core.chunk_rest.call(null,s__55883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55885),null);
}
} else
{var node = cljs.core.first.call(null,s__55883__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__55882.call(null,cljs.core.rest.call(null,s__55883__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__55895 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55896 = null;var count__55897 = (0);var i__55898 = (0);while(true){
if((i__55898 < count__55897))
{var node = cljs.core._nth.call(null,chunk__55896,i__55898);goog.events.removeAll(node);
{
var G__55903 = seq__55895;
var G__55904 = chunk__55896;
var G__55905 = count__55897;
var G__55906 = (i__55898 + (1));
seq__55895 = G__55903;
chunk__55896 = G__55904;
count__55897 = G__55905;
i__55898 = G__55906;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55895);if(temp__4126__auto__)
{var seq__55895__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55895__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__55895__$1);{
var G__55907 = cljs.core.chunk_rest.call(null,seq__55895__$1);
var G__55908 = c__4297__auto__;
var G__55909 = cljs.core.count.call(null,c__4297__auto__);
var G__55910 = (0);
seq__55895 = G__55907;
chunk__55896 = G__55908;
count__55897 = G__55909;
i__55898 = G__55910;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55895__$1);goog.events.removeAll(node);
{
var G__55911 = cljs.core.next.call(null,seq__55895__$1);
var G__55912 = null;
var G__55913 = (0);
var G__55914 = (0);
seq__55895 = G__55911;
chunk__55896 = G__55912;
count__55897 = G__55913;
i__55898 = G__55914;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__55899 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55900 = null;var count__55901 = (0);var i__55902 = (0);while(true){
if((i__55902 < count__55901))
{var node = cljs.core._nth.call(null,chunk__55900,i__55902);goog.events.removeAll(node,type__$1);
{
var G__55915 = seq__55899;
var G__55916 = chunk__55900;
var G__55917 = count__55901;
var G__55918 = (i__55902 + (1));
seq__55899 = G__55915;
chunk__55900 = G__55916;
count__55901 = G__55917;
i__55902 = G__55918;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55899);if(temp__4126__auto__)
{var seq__55899__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55899__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__55899__$1);{
var G__55919 = cljs.core.chunk_rest.call(null,seq__55899__$1);
var G__55920 = c__4297__auto__;
var G__55921 = cljs.core.count.call(null,c__4297__auto__);
var G__55922 = (0);
seq__55899 = G__55919;
chunk__55900 = G__55920;
count__55901 = G__55921;
i__55902 = G__55922;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55899__$1);goog.events.removeAll(node,type__$1);
{
var G__55923 = cljs.core.next.call(null,seq__55899__$1);
var G__55924 = null;
var G__55925 = (0);
var G__55926 = (0);
seq__55899 = G__55923;
chunk__55900 = G__55924;
count__55901 = G__55925;
i__55902 = G__55926;
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
var G__55927 = parent;
var G__55928 = cljs.core.cons.call(null,parent,so_far);
n = G__55927;
so_far = G__55928;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__55937_55945 = cljs.core.seq.call(null,ancestors);var chunk__55938_55946 = null;var count__55939_55947 = (0);var i__55940_55948 = (0);while(true){
if((i__55940_55948 < count__55939_55947))
{var n_55949 = cljs.core._nth.call(null,chunk__55938_55946,i__55940_55948);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55949;
goog.events.fireListeners(n_55949,evt.type,true,evt);
}
{
var G__55950 = seq__55937_55945;
var G__55951 = chunk__55938_55946;
var G__55952 = count__55939_55947;
var G__55953 = (i__55940_55948 + (1));
seq__55937_55945 = G__55950;
chunk__55938_55946 = G__55951;
count__55939_55947 = G__55952;
i__55940_55948 = G__55953;
continue;
}
} else
{var temp__4126__auto___55954 = cljs.core.seq.call(null,seq__55937_55945);if(temp__4126__auto___55954)
{var seq__55937_55955__$1 = temp__4126__auto___55954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55937_55955__$1))
{var c__4297__auto___55956 = cljs.core.chunk_first.call(null,seq__55937_55955__$1);{
var G__55957 = cljs.core.chunk_rest.call(null,seq__55937_55955__$1);
var G__55958 = c__4297__auto___55956;
var G__55959 = cljs.core.count.call(null,c__4297__auto___55956);
var G__55960 = (0);
seq__55937_55945 = G__55957;
chunk__55938_55946 = G__55958;
count__55939_55947 = G__55959;
i__55940_55948 = G__55960;
continue;
}
} else
{var n_55961 = cljs.core.first.call(null,seq__55937_55955__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55961;
goog.events.fireListeners(n_55961,evt.type,true,evt);
}
{
var G__55962 = cljs.core.next.call(null,seq__55937_55955__$1);
var G__55963 = null;
var G__55964 = (0);
var G__55965 = (0);
seq__55937_55945 = G__55962;
chunk__55938_55946 = G__55963;
count__55939_55947 = G__55964;
i__55940_55948 = G__55965;
continue;
}
}
} else
{}
}
break;
}
var seq__55941_55966 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__55942_55967 = null;var count__55943_55968 = (0);var i__55944_55969 = (0);while(true){
if((i__55944_55969 < count__55943_55968))
{var n_55970 = cljs.core._nth.call(null,chunk__55942_55967,i__55944_55969);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55970;
goog.events.fireListeners(n_55970,evt.type,false,evt);
}
{
var G__55971 = seq__55941_55966;
var G__55972 = chunk__55942_55967;
var G__55973 = count__55943_55968;
var G__55974 = (i__55944_55969 + (1));
seq__55941_55966 = G__55971;
chunk__55942_55967 = G__55972;
count__55943_55968 = G__55973;
i__55944_55969 = G__55974;
continue;
}
} else
{var temp__4126__auto___55975 = cljs.core.seq.call(null,seq__55941_55966);if(temp__4126__auto___55975)
{var seq__55941_55976__$1 = temp__4126__auto___55975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55941_55976__$1))
{var c__4297__auto___55977 = cljs.core.chunk_first.call(null,seq__55941_55976__$1);{
var G__55978 = cljs.core.chunk_rest.call(null,seq__55941_55976__$1);
var G__55979 = c__4297__auto___55977;
var G__55980 = cljs.core.count.call(null,c__4297__auto___55977);
var G__55981 = (0);
seq__55941_55966 = G__55978;
chunk__55942_55967 = G__55979;
count__55943_55968 = G__55980;
i__55944_55969 = G__55981;
continue;
}
} else
{var n_55982 = cljs.core.first.call(null,seq__55941_55976__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55982;
goog.events.fireListeners(n_55982,evt.type,false,evt);
}
{
var G__55983 = cljs.core.next.call(null,seq__55941_55976__$1);
var G__55984 = null;
var G__55985 = (0);
var G__55986 = (0);
seq__55941_55966 = G__55983;
chunk__55942_55967 = G__55984;
count__55943_55968 = G__55985;
i__55944_55969 = G__55986;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3529__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3529__auto__))
{return o.dispatchEvent;
} else
{return and__3529__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__55993_55999 = cljs.core.seq.call(null,evt_map);var chunk__55994_56000 = null;var count__55995_56001 = (0);var i__55996_56002 = (0);while(true){
if((i__55996_56002 < count__55995_56001))
{var vec__55997_56003 = cljs.core._nth.call(null,chunk__55994_56000,i__55996_56002);var k_56004 = cljs.core.nth.call(null,vec__55997_56003,(0),null);var v_56005 = cljs.core.nth.call(null,vec__55997_56003,(1),null);(evt[k_56004] = v_56005);
{
var G__56006 = seq__55993_55999;
var G__56007 = chunk__55994_56000;
var G__56008 = count__55995_56001;
var G__56009 = (i__55996_56002 + (1));
seq__55993_55999 = G__56006;
chunk__55994_56000 = G__56007;
count__55995_56001 = G__56008;
i__55996_56002 = G__56009;
continue;
}
} else
{var temp__4126__auto___56010 = cljs.core.seq.call(null,seq__55993_55999);if(temp__4126__auto___56010)
{var seq__55993_56011__$1 = temp__4126__auto___56010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55993_56011__$1))
{var c__4297__auto___56012 = cljs.core.chunk_first.call(null,seq__55993_56011__$1);{
var G__56013 = cljs.core.chunk_rest.call(null,seq__55993_56011__$1);
var G__56014 = c__4297__auto___56012;
var G__56015 = cljs.core.count.call(null,c__4297__auto___56012);
var G__56016 = (0);
seq__55993_55999 = G__56013;
chunk__55994_56000 = G__56014;
count__55995_56001 = G__56015;
i__55996_56002 = G__56016;
continue;
}
} else
{var vec__55998_56017 = cljs.core.first.call(null,seq__55993_56011__$1);var k_56018 = cljs.core.nth.call(null,vec__55998_56017,(0),null);var v_56019 = cljs.core.nth.call(null,vec__55998_56017,(1),null);(evt[k_56018] = v_56019);
{
var G__56020 = cljs.core.next.call(null,seq__55993_56011__$1);
var G__56021 = null;
var G__56022 = (0);
var G__56023 = (0);
seq__55993_55999 = G__56020;
chunk__55994_56000 = G__56021;
count__55995_56001 = G__56022;
i__55996_56002 = G__56023;
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
return (function (p1__56024_SHARP_){return goog.events.getListeners(p1__56024_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map