// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14858 = {};return obj14858;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14862 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14862 = (function (evt,f,create_listener_function,meta14863){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14863 = meta14863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14862.cljs$lang$type = true;
domina.events.t14862.cljs$lang$ctorStr = "domina.events/t14862";
domina.events.t14862.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14862");
});
domina.events.t14862.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14862.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14862.prototype.domina$events$Event$ = true;
domina.events.t14862.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14862.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14862.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14862.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14862.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14862.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14864){var self__ = this;
var _14864__$1 = this;return self__.meta14863;
});
domina.events.t14862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14864,meta14863__$1){var self__ = this;
var _14864__$1 = this;return (new domina.events.t14862(self__.evt,self__.f,self__.create_listener_function,meta14863__$1));
});
domina.events.__GT_t14862 = (function __GT_t14862(evt__$1,f__$1,create_listener_function__$1,meta14863){return (new domina.events.t14862(evt__$1,f__$1,create_listener_function__$1,meta14863));
});
}
return (new domina.events.t14862(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14869(s__14870){return (new cljs.core.LazySeq(null,(function (){var s__14870__$1 = s__14870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14870__$1);if(temp__4092__auto__)
{var s__14870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14870__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14870__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14872 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14871 = 0;while(true){
if((i__14871 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14871);cljs.core.chunk_append.call(null,b__14872,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14873 = (i__14871 + 1);
i__14871 = G__14873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14872),iter__14869.call(null,cljs.core.chunk_rest.call(null,s__14870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14872),null);
}
} else
{var node = cljs.core.first.call(null,s__14870__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14869.call(null,cljs.core.rest.call(null,s__14870__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14882 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14883 = null;var count__14884 = 0;var i__14885 = 0;while(true){
if((i__14885 < count__14884))
{var node = cljs.core._nth.call(null,chunk__14883,i__14885);goog.events.removeAll(node);
{
var G__14890 = seq__14882;
var G__14891 = chunk__14883;
var G__14892 = count__14884;
var G__14893 = (i__14885 + 1);
seq__14882 = G__14890;
chunk__14883 = G__14891;
count__14884 = G__14892;
i__14885 = G__14893;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14882);if(temp__4092__auto__)
{var seq__14882__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14882__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14882__$1);{
var G__14894 = cljs.core.chunk_rest.call(null,seq__14882__$1);
var G__14895 = c__4148__auto__;
var G__14896 = cljs.core.count.call(null,c__4148__auto__);
var G__14897 = 0;
seq__14882 = G__14894;
chunk__14883 = G__14895;
count__14884 = G__14896;
i__14885 = G__14897;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14882__$1);goog.events.removeAll(node);
{
var G__14898 = cljs.core.next.call(null,seq__14882__$1);
var G__14899 = null;
var G__14900 = 0;
var G__14901 = 0;
seq__14882 = G__14898;
chunk__14883 = G__14899;
count__14884 = G__14900;
i__14885 = G__14901;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14886 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14887 = null;var count__14888 = 0;var i__14889 = 0;while(true){
if((i__14889 < count__14888))
{var node = cljs.core._nth.call(null,chunk__14887,i__14889);goog.events.removeAll(node,type__$1);
{
var G__14902 = seq__14886;
var G__14903 = chunk__14887;
var G__14904 = count__14888;
var G__14905 = (i__14889 + 1);
seq__14886 = G__14902;
chunk__14887 = G__14903;
count__14888 = G__14904;
i__14889 = G__14905;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14886);if(temp__4092__auto__)
{var seq__14886__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14886__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14886__$1);{
var G__14906 = cljs.core.chunk_rest.call(null,seq__14886__$1);
var G__14907 = c__4148__auto__;
var G__14908 = cljs.core.count.call(null,c__4148__auto__);
var G__14909 = 0;
seq__14886 = G__14906;
chunk__14887 = G__14907;
count__14888 = G__14908;
i__14889 = G__14909;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14886__$1);goog.events.removeAll(node,type__$1);
{
var G__14910 = cljs.core.next.call(null,seq__14886__$1);
var G__14911 = null;
var G__14912 = 0;
var G__14913 = 0;
seq__14886 = G__14910;
chunk__14887 = G__14911;
count__14888 = G__14912;
i__14889 = G__14913;
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
var G__14914 = parent;
var G__14915 = cljs.core.cons.call(null,parent,so_far);
n = G__14914;
so_far = G__14915;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14924_14932 = cljs.core.seq.call(null,ancestors);var chunk__14925_14933 = null;var count__14926_14934 = 0;var i__14927_14935 = 0;while(true){
if((i__14927_14935 < count__14926_14934))
{var n_14936 = cljs.core._nth.call(null,chunk__14925_14933,i__14927_14935);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14936;
goog.events.fireListeners(n_14936,evt.type,true,evt);
}
{
var G__14937 = seq__14924_14932;
var G__14938 = chunk__14925_14933;
var G__14939 = count__14926_14934;
var G__14940 = (i__14927_14935 + 1);
seq__14924_14932 = G__14937;
chunk__14925_14933 = G__14938;
count__14926_14934 = G__14939;
i__14927_14935 = G__14940;
continue;
}
} else
{var temp__4092__auto___14941 = cljs.core.seq.call(null,seq__14924_14932);if(temp__4092__auto___14941)
{var seq__14924_14942__$1 = temp__4092__auto___14941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14924_14942__$1))
{var c__4148__auto___14943 = cljs.core.chunk_first.call(null,seq__14924_14942__$1);{
var G__14944 = cljs.core.chunk_rest.call(null,seq__14924_14942__$1);
var G__14945 = c__4148__auto___14943;
var G__14946 = cljs.core.count.call(null,c__4148__auto___14943);
var G__14947 = 0;
seq__14924_14932 = G__14944;
chunk__14925_14933 = G__14945;
count__14926_14934 = G__14946;
i__14927_14935 = G__14947;
continue;
}
} else
{var n_14948 = cljs.core.first.call(null,seq__14924_14942__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14948;
goog.events.fireListeners(n_14948,evt.type,true,evt);
}
{
var G__14949 = cljs.core.next.call(null,seq__14924_14942__$1);
var G__14950 = null;
var G__14951 = 0;
var G__14952 = 0;
seq__14924_14932 = G__14949;
chunk__14925_14933 = G__14950;
count__14926_14934 = G__14951;
i__14927_14935 = G__14952;
continue;
}
}
} else
{}
}
break;
}
var seq__14928_14953 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14929_14954 = null;var count__14930_14955 = 0;var i__14931_14956 = 0;while(true){
if((i__14931_14956 < count__14930_14955))
{var n_14957 = cljs.core._nth.call(null,chunk__14929_14954,i__14931_14956);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14957;
goog.events.fireListeners(n_14957,evt.type,false,evt);
}
{
var G__14958 = seq__14928_14953;
var G__14959 = chunk__14929_14954;
var G__14960 = count__14930_14955;
var G__14961 = (i__14931_14956 + 1);
seq__14928_14953 = G__14958;
chunk__14929_14954 = G__14959;
count__14930_14955 = G__14960;
i__14931_14956 = G__14961;
continue;
}
} else
{var temp__4092__auto___14962 = cljs.core.seq.call(null,seq__14928_14953);if(temp__4092__auto___14962)
{var seq__14928_14963__$1 = temp__4092__auto___14962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14928_14963__$1))
{var c__4148__auto___14964 = cljs.core.chunk_first.call(null,seq__14928_14963__$1);{
var G__14965 = cljs.core.chunk_rest.call(null,seq__14928_14963__$1);
var G__14966 = c__4148__auto___14964;
var G__14967 = cljs.core.count.call(null,c__4148__auto___14964);
var G__14968 = 0;
seq__14928_14953 = G__14965;
chunk__14929_14954 = G__14966;
count__14930_14955 = G__14967;
i__14931_14956 = G__14968;
continue;
}
} else
{var n_14969 = cljs.core.first.call(null,seq__14928_14963__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14969;
goog.events.fireListeners(n_14969,evt.type,false,evt);
}
{
var G__14970 = cljs.core.next.call(null,seq__14928_14963__$1);
var G__14971 = null;
var G__14972 = 0;
var G__14973 = 0;
seq__14928_14953 = G__14970;
chunk__14929_14954 = G__14971;
count__14930_14955 = G__14972;
i__14931_14956 = G__14973;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14980_14986 = cljs.core.seq.call(null,evt_map);var chunk__14981_14987 = null;var count__14982_14988 = 0;var i__14983_14989 = 0;while(true){
if((i__14983_14989 < count__14982_14988))
{var vec__14984_14990 = cljs.core._nth.call(null,chunk__14981_14987,i__14983_14989);var k_14991 = cljs.core.nth.call(null,vec__14984_14990,0,null);var v_14992 = cljs.core.nth.call(null,vec__14984_14990,1,null);(evt[k_14991] = v_14992);
{
var G__14993 = seq__14980_14986;
var G__14994 = chunk__14981_14987;
var G__14995 = count__14982_14988;
var G__14996 = (i__14983_14989 + 1);
seq__14980_14986 = G__14993;
chunk__14981_14987 = G__14994;
count__14982_14988 = G__14995;
i__14983_14989 = G__14996;
continue;
}
} else
{var temp__4092__auto___14997 = cljs.core.seq.call(null,seq__14980_14986);if(temp__4092__auto___14997)
{var seq__14980_14998__$1 = temp__4092__auto___14997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14980_14998__$1))
{var c__4148__auto___14999 = cljs.core.chunk_first.call(null,seq__14980_14998__$1);{
var G__15000 = cljs.core.chunk_rest.call(null,seq__14980_14998__$1);
var G__15001 = c__4148__auto___14999;
var G__15002 = cljs.core.count.call(null,c__4148__auto___14999);
var G__15003 = 0;
seq__14980_14986 = G__15000;
chunk__14981_14987 = G__15001;
count__14982_14988 = G__15002;
i__14983_14989 = G__15003;
continue;
}
} else
{var vec__14985_15004 = cljs.core.first.call(null,seq__14980_14998__$1);var k_15005 = cljs.core.nth.call(null,vec__14985_15004,0,null);var v_15006 = cljs.core.nth.call(null,vec__14985_15004,1,null);(evt[k_15005] = v_15006);
{
var G__15007 = cljs.core.next.call(null,seq__14980_14998__$1);
var G__15008 = null;
var G__15009 = 0;
var G__15010 = 0;
seq__14980_14986 = G__15007;
chunk__14981_14987 = G__15008;
count__14982_14988 = G__15009;
i__14983_14989 = G__15010;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15011_SHARP_){return goog.events.getListeners(p1__15011_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map