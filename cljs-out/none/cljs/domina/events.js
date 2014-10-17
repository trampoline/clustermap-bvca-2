// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26847 = {};return obj26847;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.prevent_default[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.prevent_default["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.stop_propagation[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.stop_propagation["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.target[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.target["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.current_target[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.current_target["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.event_type[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.event_type["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__7888__auto__ = evt;if(and__7888__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__7888__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__8527__auto__ = (((evt == null))?null:evt);return (function (){var or__7900__auto__ = (domina.events.raw_event[goog.typeOf(x__8527__auto__)]);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = (domina.events.raw_event["_"]);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t26851 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26851 = (function (evt,f,create_listener_function,meta26852){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26852 = meta26852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26851.cljs$lang$type = true;
domina.events.t26851.cljs$lang$ctorStr = "domina.events/t26851";
domina.events.t26851.cljs$lang$ctorPrWriter = (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"domina.events/t26851");
});
domina.events.t26851.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t26851.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__7900__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return not_found;
}
});
domina.events.t26851.prototype.domina$events$Event$ = true;
domina.events.t26851.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26851.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26851.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26851.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26851.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26851.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26853){var self__ = this;
var _26853__$1 = this;return self__.meta26852;
});
domina.events.t26851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26853,meta26852__$1){var self__ = this;
var _26853__$1 = this;return (new domina.events.t26851(self__.evt,self__.f,self__.create_listener_function,meta26852__$1));
});
domina.events.__GT_t26851 = (function __GT_t26851(evt__$1,f__$1,create_listener_function__$1,meta26852){return (new domina.events.t26851(evt__$1,f__$1,create_listener_function__$1,meta26852));
});
}
return (new domina.events.t26851(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__8625__auto__ = ((function (f,t){
return (function iter__26858(s__26859){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__26859__$1 = s__26859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26859__$1);if(temp__4126__auto__)
{var s__26859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26859__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__26859__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__26861 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__26860 = (0);while(true){
if((i__26860 < size__8624__auto__))
{var node = cljs.core._nth.call(null,c__8623__auto__,i__26860);cljs.core.chunk_append.call(null,b__26861,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26862 = (i__26860 + (1));
i__26860 = G__26862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26861),iter__26858.call(null,cljs.core.chunk_rest.call(null,s__26859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26861),null);
}
} else
{var node = cljs.core.first.call(null,s__26859__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26858.call(null,cljs.core.rest.call(null,s__26859__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__8625__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__26871 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26872 = null;var count__26873 = (0);var i__26874 = (0);while(true){
if((i__26874 < count__26873))
{var node = cljs.core._nth.call(null,chunk__26872,i__26874);goog.events.removeAll(node);
{
var G__26879 = seq__26871;
var G__26880 = chunk__26872;
var G__26881 = count__26873;
var G__26882 = (i__26874 + (1));
seq__26871 = G__26879;
chunk__26872 = G__26880;
count__26873 = G__26881;
i__26874 = G__26882;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26871);if(temp__4126__auto__)
{var seq__26871__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26871__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__26871__$1);{
var G__26883 = cljs.core.chunk_rest.call(null,seq__26871__$1);
var G__26884 = c__8656__auto__;
var G__26885 = cljs.core.count.call(null,c__8656__auto__);
var G__26886 = (0);
seq__26871 = G__26883;
chunk__26872 = G__26884;
count__26873 = G__26885;
i__26874 = G__26886;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__26871__$1);goog.events.removeAll(node);
{
var G__26887 = cljs.core.next.call(null,seq__26871__$1);
var G__26888 = null;
var G__26889 = (0);
var G__26890 = (0);
seq__26871 = G__26887;
chunk__26872 = G__26888;
count__26873 = G__26889;
i__26874 = G__26890;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__26875 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26876 = null;var count__26877 = (0);var i__26878 = (0);while(true){
if((i__26878 < count__26877))
{var node = cljs.core._nth.call(null,chunk__26876,i__26878);goog.events.removeAll(node,type__$1);
{
var G__26891 = seq__26875;
var G__26892 = chunk__26876;
var G__26893 = count__26877;
var G__26894 = (i__26878 + (1));
seq__26875 = G__26891;
chunk__26876 = G__26892;
count__26877 = G__26893;
i__26878 = G__26894;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26875);if(temp__4126__auto__)
{var seq__26875__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26875__$1))
{var c__8656__auto__ = cljs.core.chunk_first.call(null,seq__26875__$1);{
var G__26895 = cljs.core.chunk_rest.call(null,seq__26875__$1);
var G__26896 = c__8656__auto__;
var G__26897 = cljs.core.count.call(null,c__8656__auto__);
var G__26898 = (0);
seq__26875 = G__26895;
chunk__26876 = G__26896;
count__26877 = G__26897;
i__26878 = G__26898;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__26875__$1);goog.events.removeAll(node,type__$1);
{
var G__26899 = cljs.core.next.call(null,seq__26875__$1);
var G__26900 = null;
var G__26901 = (0);
var G__26902 = (0);
seq__26875 = G__26899;
chunk__26876 = G__26900;
count__26877 = G__26901;
i__26878 = G__26902;
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
var G__26903 = parent;
var G__26904 = cljs.core.cons.call(null,parent,so_far);
n = G__26903;
so_far = G__26904;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__26913_26921 = cljs.core.seq.call(null,ancestors);var chunk__26914_26922 = null;var count__26915_26923 = (0);var i__26916_26924 = (0);while(true){
if((i__26916_26924 < count__26915_26923))
{var n_26925 = cljs.core._nth.call(null,chunk__26914_26922,i__26916_26924);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26925;
goog.events.fireListeners(n_26925,evt.type,true,evt);
}
{
var G__26926 = seq__26913_26921;
var G__26927 = chunk__26914_26922;
var G__26928 = count__26915_26923;
var G__26929 = (i__26916_26924 + (1));
seq__26913_26921 = G__26926;
chunk__26914_26922 = G__26927;
count__26915_26923 = G__26928;
i__26916_26924 = G__26929;
continue;
}
} else
{var temp__4126__auto___26930 = cljs.core.seq.call(null,seq__26913_26921);if(temp__4126__auto___26930)
{var seq__26913_26931__$1 = temp__4126__auto___26930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26913_26931__$1))
{var c__8656__auto___26932 = cljs.core.chunk_first.call(null,seq__26913_26931__$1);{
var G__26933 = cljs.core.chunk_rest.call(null,seq__26913_26931__$1);
var G__26934 = c__8656__auto___26932;
var G__26935 = cljs.core.count.call(null,c__8656__auto___26932);
var G__26936 = (0);
seq__26913_26921 = G__26933;
chunk__26914_26922 = G__26934;
count__26915_26923 = G__26935;
i__26916_26924 = G__26936;
continue;
}
} else
{var n_26937 = cljs.core.first.call(null,seq__26913_26931__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26937;
goog.events.fireListeners(n_26937,evt.type,true,evt);
}
{
var G__26938 = cljs.core.next.call(null,seq__26913_26931__$1);
var G__26939 = null;
var G__26940 = (0);
var G__26941 = (0);
seq__26913_26921 = G__26938;
chunk__26914_26922 = G__26939;
count__26915_26923 = G__26940;
i__26916_26924 = G__26941;
continue;
}
}
} else
{}
}
break;
}
var seq__26917_26942 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__26918_26943 = null;var count__26919_26944 = (0);var i__26920_26945 = (0);while(true){
if((i__26920_26945 < count__26919_26944))
{var n_26946 = cljs.core._nth.call(null,chunk__26918_26943,i__26920_26945);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26946;
goog.events.fireListeners(n_26946,evt.type,false,evt);
}
{
var G__26947 = seq__26917_26942;
var G__26948 = chunk__26918_26943;
var G__26949 = count__26919_26944;
var G__26950 = (i__26920_26945 + (1));
seq__26917_26942 = G__26947;
chunk__26918_26943 = G__26948;
count__26919_26944 = G__26949;
i__26920_26945 = G__26950;
continue;
}
} else
{var temp__4126__auto___26951 = cljs.core.seq.call(null,seq__26917_26942);if(temp__4126__auto___26951)
{var seq__26917_26952__$1 = temp__4126__auto___26951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26917_26952__$1))
{var c__8656__auto___26953 = cljs.core.chunk_first.call(null,seq__26917_26952__$1);{
var G__26954 = cljs.core.chunk_rest.call(null,seq__26917_26952__$1);
var G__26955 = c__8656__auto___26953;
var G__26956 = cljs.core.count.call(null,c__8656__auto___26953);
var G__26957 = (0);
seq__26917_26942 = G__26954;
chunk__26918_26943 = G__26955;
count__26919_26944 = G__26956;
i__26920_26945 = G__26957;
continue;
}
} else
{var n_26958 = cljs.core.first.call(null,seq__26917_26952__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26958;
goog.events.fireListeners(n_26958,evt.type,false,evt);
}
{
var G__26959 = cljs.core.next.call(null,seq__26917_26952__$1);
var G__26960 = null;
var G__26961 = (0);
var G__26962 = (0);
seq__26917_26942 = G__26959;
chunk__26918_26943 = G__26960;
count__26919_26944 = G__26961;
i__26920_26945 = G__26962;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__7888__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__7888__auto__))
{return o.dispatchEvent;
} else
{return and__7888__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__26969_26975 = cljs.core.seq.call(null,evt_map);var chunk__26970_26976 = null;var count__26971_26977 = (0);var i__26972_26978 = (0);while(true){
if((i__26972_26978 < count__26971_26977))
{var vec__26973_26979 = cljs.core._nth.call(null,chunk__26970_26976,i__26972_26978);var k_26980 = cljs.core.nth.call(null,vec__26973_26979,(0),null);var v_26981 = cljs.core.nth.call(null,vec__26973_26979,(1),null);(evt[k_26980] = v_26981);
{
var G__26982 = seq__26969_26975;
var G__26983 = chunk__26970_26976;
var G__26984 = count__26971_26977;
var G__26985 = (i__26972_26978 + (1));
seq__26969_26975 = G__26982;
chunk__26970_26976 = G__26983;
count__26971_26977 = G__26984;
i__26972_26978 = G__26985;
continue;
}
} else
{var temp__4126__auto___26986 = cljs.core.seq.call(null,seq__26969_26975);if(temp__4126__auto___26986)
{var seq__26969_26987__$1 = temp__4126__auto___26986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26969_26987__$1))
{var c__8656__auto___26988 = cljs.core.chunk_first.call(null,seq__26969_26987__$1);{
var G__26989 = cljs.core.chunk_rest.call(null,seq__26969_26987__$1);
var G__26990 = c__8656__auto___26988;
var G__26991 = cljs.core.count.call(null,c__8656__auto___26988);
var G__26992 = (0);
seq__26969_26975 = G__26989;
chunk__26970_26976 = G__26990;
count__26971_26977 = G__26991;
i__26972_26978 = G__26992;
continue;
}
} else
{var vec__26974_26993 = cljs.core.first.call(null,seq__26969_26987__$1);var k_26994 = cljs.core.nth.call(null,vec__26974_26993,(0),null);var v_26995 = cljs.core.nth.call(null,vec__26974_26993,(1),null);(evt[k_26994] = v_26995);
{
var G__26996 = cljs.core.next.call(null,seq__26969_26987__$1);
var G__26997 = null;
var G__26998 = (0);
var G__26999 = (0);
seq__26969_26975 = G__26996;
chunk__26970_26976 = G__26997;
count__26971_26977 = G__26998;
i__26972_26978 = G__26999;
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
return (function (p1__27000_SHARP_){return goog.events.getListeners(p1__27000_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map