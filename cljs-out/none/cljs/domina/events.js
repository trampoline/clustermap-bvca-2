// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14847 = {};return obj14847;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14851 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14851 = (function (evt,f,create_listener_function,meta14852){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14852 = meta14852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14851.cljs$lang$type = true;
domina.events.t14851.cljs$lang$ctorStr = "domina.events/t14851";
domina.events.t14851.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14851");
});
domina.events.t14851.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14851.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14851.prototype.domina$events$Event$ = true;
domina.events.t14851.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14851.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14851.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14851.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14851.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14851.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14853){var self__ = this;
var _14853__$1 = this;return self__.meta14852;
});
domina.events.t14851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14853,meta14852__$1){var self__ = this;
var _14853__$1 = this;return (new domina.events.t14851(self__.evt,self__.f,self__.create_listener_function,meta14852__$1));
});
domina.events.__GT_t14851 = (function __GT_t14851(evt__$1,f__$1,create_listener_function__$1,meta14852){return (new domina.events.t14851(evt__$1,f__$1,create_listener_function__$1,meta14852));
});
}
return (new domina.events.t14851(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14858(s__14859){return (new cljs.core.LazySeq(null,(function (){var s__14859__$1 = s__14859;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14859__$1);if(temp__4092__auto__)
{var s__14859__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14859__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14859__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14861 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14860 = 0;while(true){
if((i__14860 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14860);cljs.core.chunk_append.call(null,b__14861,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14862 = (i__14860 + 1);
i__14860 = G__14862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14861),iter__14858.call(null,cljs.core.chunk_rest.call(null,s__14859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14861),null);
}
} else
{var node = cljs.core.first.call(null,s__14859__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14858.call(null,cljs.core.rest.call(null,s__14859__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14871 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14872 = null;var count__14873 = 0;var i__14874 = 0;while(true){
if((i__14874 < count__14873))
{var node = cljs.core._nth.call(null,chunk__14872,i__14874);goog.events.removeAll(node);
{
var G__14879 = seq__14871;
var G__14880 = chunk__14872;
var G__14881 = count__14873;
var G__14882 = (i__14874 + 1);
seq__14871 = G__14879;
chunk__14872 = G__14880;
count__14873 = G__14881;
i__14874 = G__14882;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14871);if(temp__4092__auto__)
{var seq__14871__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14871__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14871__$1);{
var G__14883 = cljs.core.chunk_rest.call(null,seq__14871__$1);
var G__14884 = c__4148__auto__;
var G__14885 = cljs.core.count.call(null,c__4148__auto__);
var G__14886 = 0;
seq__14871 = G__14883;
chunk__14872 = G__14884;
count__14873 = G__14885;
i__14874 = G__14886;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14871__$1);goog.events.removeAll(node);
{
var G__14887 = cljs.core.next.call(null,seq__14871__$1);
var G__14888 = null;
var G__14889 = 0;
var G__14890 = 0;
seq__14871 = G__14887;
chunk__14872 = G__14888;
count__14873 = G__14889;
i__14874 = G__14890;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14875 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14876 = null;var count__14877 = 0;var i__14878 = 0;while(true){
if((i__14878 < count__14877))
{var node = cljs.core._nth.call(null,chunk__14876,i__14878);goog.events.removeAll(node,type__$1);
{
var G__14891 = seq__14875;
var G__14892 = chunk__14876;
var G__14893 = count__14877;
var G__14894 = (i__14878 + 1);
seq__14875 = G__14891;
chunk__14876 = G__14892;
count__14877 = G__14893;
i__14878 = G__14894;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14875);if(temp__4092__auto__)
{var seq__14875__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14875__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14875__$1);{
var G__14895 = cljs.core.chunk_rest.call(null,seq__14875__$1);
var G__14896 = c__4148__auto__;
var G__14897 = cljs.core.count.call(null,c__4148__auto__);
var G__14898 = 0;
seq__14875 = G__14895;
chunk__14876 = G__14896;
count__14877 = G__14897;
i__14878 = G__14898;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14875__$1);goog.events.removeAll(node,type__$1);
{
var G__14899 = cljs.core.next.call(null,seq__14875__$1);
var G__14900 = null;
var G__14901 = 0;
var G__14902 = 0;
seq__14875 = G__14899;
chunk__14876 = G__14900;
count__14877 = G__14901;
i__14878 = G__14902;
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
var G__14903 = parent;
var G__14904 = cljs.core.cons.call(null,parent,so_far);
n = G__14903;
so_far = G__14904;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14913_14921 = cljs.core.seq.call(null,ancestors);var chunk__14914_14922 = null;var count__14915_14923 = 0;var i__14916_14924 = 0;while(true){
if((i__14916_14924 < count__14915_14923))
{var n_14925 = cljs.core._nth.call(null,chunk__14914_14922,i__14916_14924);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14925;
goog.events.fireListeners(n_14925,evt.type,true,evt);
}
{
var G__14926 = seq__14913_14921;
var G__14927 = chunk__14914_14922;
var G__14928 = count__14915_14923;
var G__14929 = (i__14916_14924 + 1);
seq__14913_14921 = G__14926;
chunk__14914_14922 = G__14927;
count__14915_14923 = G__14928;
i__14916_14924 = G__14929;
continue;
}
} else
{var temp__4092__auto___14930 = cljs.core.seq.call(null,seq__14913_14921);if(temp__4092__auto___14930)
{var seq__14913_14931__$1 = temp__4092__auto___14930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14913_14931__$1))
{var c__4148__auto___14932 = cljs.core.chunk_first.call(null,seq__14913_14931__$1);{
var G__14933 = cljs.core.chunk_rest.call(null,seq__14913_14931__$1);
var G__14934 = c__4148__auto___14932;
var G__14935 = cljs.core.count.call(null,c__4148__auto___14932);
var G__14936 = 0;
seq__14913_14921 = G__14933;
chunk__14914_14922 = G__14934;
count__14915_14923 = G__14935;
i__14916_14924 = G__14936;
continue;
}
} else
{var n_14937 = cljs.core.first.call(null,seq__14913_14931__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14937;
goog.events.fireListeners(n_14937,evt.type,true,evt);
}
{
var G__14938 = cljs.core.next.call(null,seq__14913_14931__$1);
var G__14939 = null;
var G__14940 = 0;
var G__14941 = 0;
seq__14913_14921 = G__14938;
chunk__14914_14922 = G__14939;
count__14915_14923 = G__14940;
i__14916_14924 = G__14941;
continue;
}
}
} else
{}
}
break;
}
var seq__14917_14942 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14918_14943 = null;var count__14919_14944 = 0;var i__14920_14945 = 0;while(true){
if((i__14920_14945 < count__14919_14944))
{var n_14946 = cljs.core._nth.call(null,chunk__14918_14943,i__14920_14945);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14946;
goog.events.fireListeners(n_14946,evt.type,false,evt);
}
{
var G__14947 = seq__14917_14942;
var G__14948 = chunk__14918_14943;
var G__14949 = count__14919_14944;
var G__14950 = (i__14920_14945 + 1);
seq__14917_14942 = G__14947;
chunk__14918_14943 = G__14948;
count__14919_14944 = G__14949;
i__14920_14945 = G__14950;
continue;
}
} else
{var temp__4092__auto___14951 = cljs.core.seq.call(null,seq__14917_14942);if(temp__4092__auto___14951)
{var seq__14917_14952__$1 = temp__4092__auto___14951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14917_14952__$1))
{var c__4148__auto___14953 = cljs.core.chunk_first.call(null,seq__14917_14952__$1);{
var G__14954 = cljs.core.chunk_rest.call(null,seq__14917_14952__$1);
var G__14955 = c__4148__auto___14953;
var G__14956 = cljs.core.count.call(null,c__4148__auto___14953);
var G__14957 = 0;
seq__14917_14942 = G__14954;
chunk__14918_14943 = G__14955;
count__14919_14944 = G__14956;
i__14920_14945 = G__14957;
continue;
}
} else
{var n_14958 = cljs.core.first.call(null,seq__14917_14952__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14958;
goog.events.fireListeners(n_14958,evt.type,false,evt);
}
{
var G__14959 = cljs.core.next.call(null,seq__14917_14952__$1);
var G__14960 = null;
var G__14961 = 0;
var G__14962 = 0;
seq__14917_14942 = G__14959;
chunk__14918_14943 = G__14960;
count__14919_14944 = G__14961;
i__14920_14945 = G__14962;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14969_14975 = cljs.core.seq.call(null,evt_map);var chunk__14970_14976 = null;var count__14971_14977 = 0;var i__14972_14978 = 0;while(true){
if((i__14972_14978 < count__14971_14977))
{var vec__14973_14979 = cljs.core._nth.call(null,chunk__14970_14976,i__14972_14978);var k_14980 = cljs.core.nth.call(null,vec__14973_14979,0,null);var v_14981 = cljs.core.nth.call(null,vec__14973_14979,1,null);(evt[k_14980] = v_14981);
{
var G__14982 = seq__14969_14975;
var G__14983 = chunk__14970_14976;
var G__14984 = count__14971_14977;
var G__14985 = (i__14972_14978 + 1);
seq__14969_14975 = G__14982;
chunk__14970_14976 = G__14983;
count__14971_14977 = G__14984;
i__14972_14978 = G__14985;
continue;
}
} else
{var temp__4092__auto___14986 = cljs.core.seq.call(null,seq__14969_14975);if(temp__4092__auto___14986)
{var seq__14969_14987__$1 = temp__4092__auto___14986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14969_14987__$1))
{var c__4148__auto___14988 = cljs.core.chunk_first.call(null,seq__14969_14987__$1);{
var G__14989 = cljs.core.chunk_rest.call(null,seq__14969_14987__$1);
var G__14990 = c__4148__auto___14988;
var G__14991 = cljs.core.count.call(null,c__4148__auto___14988);
var G__14992 = 0;
seq__14969_14975 = G__14989;
chunk__14970_14976 = G__14990;
count__14971_14977 = G__14991;
i__14972_14978 = G__14992;
continue;
}
} else
{var vec__14974_14993 = cljs.core.first.call(null,seq__14969_14987__$1);var k_14994 = cljs.core.nth.call(null,vec__14974_14993,0,null);var v_14995 = cljs.core.nth.call(null,vec__14974_14993,1,null);(evt[k_14994] = v_14995);
{
var G__14996 = cljs.core.next.call(null,seq__14969_14987__$1);
var G__14997 = null;
var G__14998 = 0;
var G__14999 = 0;
seq__14969_14975 = G__14996;
chunk__14970_14976 = G__14997;
count__14971_14977 = G__14998;
i__14972_14978 = G__14999;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15000_SHARP_){return goog.events.getListeners(p1__15000_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map