// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14842 = {};return obj14842;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14846 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14846 = (function (evt,f,create_listener_function,meta14847){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14847 = meta14847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14846.cljs$lang$type = true;
domina.events.t14846.cljs$lang$ctorStr = "domina.events/t14846";
domina.events.t14846.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14846");
});
domina.events.t14846.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14846.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14846.prototype.domina$events$Event$ = true;
domina.events.t14846.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14846.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14846.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14846.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14846.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14846.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14848){var self__ = this;
var _14848__$1 = this;return self__.meta14847;
});
domina.events.t14846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14848,meta14847__$1){var self__ = this;
var _14848__$1 = this;return (new domina.events.t14846(self__.evt,self__.f,self__.create_listener_function,meta14847__$1));
});
domina.events.__GT_t14846 = (function __GT_t14846(evt__$1,f__$1,create_listener_function__$1,meta14847){return (new domina.events.t14846(evt__$1,f__$1,create_listener_function__$1,meta14847));
});
}
return (new domina.events.t14846(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14853(s__14854){return (new cljs.core.LazySeq(null,(function (){var s__14854__$1 = s__14854;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14854__$1);if(temp__4092__auto__)
{var s__14854__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14854__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14854__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14856 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14855 = 0;while(true){
if((i__14855 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14855);cljs.core.chunk_append.call(null,b__14856,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14857 = (i__14855 + 1);
i__14855 = G__14857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14856),iter__14853.call(null,cljs.core.chunk_rest.call(null,s__14854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14856),null);
}
} else
{var node = cljs.core.first.call(null,s__14854__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14853.call(null,cljs.core.rest.call(null,s__14854__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14866 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14867 = null;var count__14868 = 0;var i__14869 = 0;while(true){
if((i__14869 < count__14868))
{var node = cljs.core._nth.call(null,chunk__14867,i__14869);goog.events.removeAll(node);
{
var G__14874 = seq__14866;
var G__14875 = chunk__14867;
var G__14876 = count__14868;
var G__14877 = (i__14869 + 1);
seq__14866 = G__14874;
chunk__14867 = G__14875;
count__14868 = G__14876;
i__14869 = G__14877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14866);if(temp__4092__auto__)
{var seq__14866__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14866__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14866__$1);{
var G__14878 = cljs.core.chunk_rest.call(null,seq__14866__$1);
var G__14879 = c__4148__auto__;
var G__14880 = cljs.core.count.call(null,c__4148__auto__);
var G__14881 = 0;
seq__14866 = G__14878;
chunk__14867 = G__14879;
count__14868 = G__14880;
i__14869 = G__14881;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14866__$1);goog.events.removeAll(node);
{
var G__14882 = cljs.core.next.call(null,seq__14866__$1);
var G__14883 = null;
var G__14884 = 0;
var G__14885 = 0;
seq__14866 = G__14882;
chunk__14867 = G__14883;
count__14868 = G__14884;
i__14869 = G__14885;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14870 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14871 = null;var count__14872 = 0;var i__14873 = 0;while(true){
if((i__14873 < count__14872))
{var node = cljs.core._nth.call(null,chunk__14871,i__14873);goog.events.removeAll(node,type__$1);
{
var G__14886 = seq__14870;
var G__14887 = chunk__14871;
var G__14888 = count__14872;
var G__14889 = (i__14873 + 1);
seq__14870 = G__14886;
chunk__14871 = G__14887;
count__14872 = G__14888;
i__14873 = G__14889;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14870);if(temp__4092__auto__)
{var seq__14870__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14870__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14870__$1);{
var G__14890 = cljs.core.chunk_rest.call(null,seq__14870__$1);
var G__14891 = c__4148__auto__;
var G__14892 = cljs.core.count.call(null,c__4148__auto__);
var G__14893 = 0;
seq__14870 = G__14890;
chunk__14871 = G__14891;
count__14872 = G__14892;
i__14873 = G__14893;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14870__$1);goog.events.removeAll(node,type__$1);
{
var G__14894 = cljs.core.next.call(null,seq__14870__$1);
var G__14895 = null;
var G__14896 = 0;
var G__14897 = 0;
seq__14870 = G__14894;
chunk__14871 = G__14895;
count__14872 = G__14896;
i__14873 = G__14897;
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
var G__14898 = parent;
var G__14899 = cljs.core.cons.call(null,parent,so_far);
n = G__14898;
so_far = G__14899;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14908_14916 = cljs.core.seq.call(null,ancestors);var chunk__14909_14917 = null;var count__14910_14918 = 0;var i__14911_14919 = 0;while(true){
if((i__14911_14919 < count__14910_14918))
{var n_14920 = cljs.core._nth.call(null,chunk__14909_14917,i__14911_14919);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14920;
goog.events.fireListeners(n_14920,evt.type,true,evt);
}
{
var G__14921 = seq__14908_14916;
var G__14922 = chunk__14909_14917;
var G__14923 = count__14910_14918;
var G__14924 = (i__14911_14919 + 1);
seq__14908_14916 = G__14921;
chunk__14909_14917 = G__14922;
count__14910_14918 = G__14923;
i__14911_14919 = G__14924;
continue;
}
} else
{var temp__4092__auto___14925 = cljs.core.seq.call(null,seq__14908_14916);if(temp__4092__auto___14925)
{var seq__14908_14926__$1 = temp__4092__auto___14925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14908_14926__$1))
{var c__4148__auto___14927 = cljs.core.chunk_first.call(null,seq__14908_14926__$1);{
var G__14928 = cljs.core.chunk_rest.call(null,seq__14908_14926__$1);
var G__14929 = c__4148__auto___14927;
var G__14930 = cljs.core.count.call(null,c__4148__auto___14927);
var G__14931 = 0;
seq__14908_14916 = G__14928;
chunk__14909_14917 = G__14929;
count__14910_14918 = G__14930;
i__14911_14919 = G__14931;
continue;
}
} else
{var n_14932 = cljs.core.first.call(null,seq__14908_14926__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14932;
goog.events.fireListeners(n_14932,evt.type,true,evt);
}
{
var G__14933 = cljs.core.next.call(null,seq__14908_14926__$1);
var G__14934 = null;
var G__14935 = 0;
var G__14936 = 0;
seq__14908_14916 = G__14933;
chunk__14909_14917 = G__14934;
count__14910_14918 = G__14935;
i__14911_14919 = G__14936;
continue;
}
}
} else
{}
}
break;
}
var seq__14912_14937 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14913_14938 = null;var count__14914_14939 = 0;var i__14915_14940 = 0;while(true){
if((i__14915_14940 < count__14914_14939))
{var n_14941 = cljs.core._nth.call(null,chunk__14913_14938,i__14915_14940);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14941;
goog.events.fireListeners(n_14941,evt.type,false,evt);
}
{
var G__14942 = seq__14912_14937;
var G__14943 = chunk__14913_14938;
var G__14944 = count__14914_14939;
var G__14945 = (i__14915_14940 + 1);
seq__14912_14937 = G__14942;
chunk__14913_14938 = G__14943;
count__14914_14939 = G__14944;
i__14915_14940 = G__14945;
continue;
}
} else
{var temp__4092__auto___14946 = cljs.core.seq.call(null,seq__14912_14937);if(temp__4092__auto___14946)
{var seq__14912_14947__$1 = temp__4092__auto___14946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14912_14947__$1))
{var c__4148__auto___14948 = cljs.core.chunk_first.call(null,seq__14912_14947__$1);{
var G__14949 = cljs.core.chunk_rest.call(null,seq__14912_14947__$1);
var G__14950 = c__4148__auto___14948;
var G__14951 = cljs.core.count.call(null,c__4148__auto___14948);
var G__14952 = 0;
seq__14912_14937 = G__14949;
chunk__14913_14938 = G__14950;
count__14914_14939 = G__14951;
i__14915_14940 = G__14952;
continue;
}
} else
{var n_14953 = cljs.core.first.call(null,seq__14912_14947__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14953;
goog.events.fireListeners(n_14953,evt.type,false,evt);
}
{
var G__14954 = cljs.core.next.call(null,seq__14912_14947__$1);
var G__14955 = null;
var G__14956 = 0;
var G__14957 = 0;
seq__14912_14937 = G__14954;
chunk__14913_14938 = G__14955;
count__14914_14939 = G__14956;
i__14915_14940 = G__14957;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14964_14970 = cljs.core.seq.call(null,evt_map);var chunk__14965_14971 = null;var count__14966_14972 = 0;var i__14967_14973 = 0;while(true){
if((i__14967_14973 < count__14966_14972))
{var vec__14968_14974 = cljs.core._nth.call(null,chunk__14965_14971,i__14967_14973);var k_14975 = cljs.core.nth.call(null,vec__14968_14974,0,null);var v_14976 = cljs.core.nth.call(null,vec__14968_14974,1,null);(evt[k_14975] = v_14976);
{
var G__14977 = seq__14964_14970;
var G__14978 = chunk__14965_14971;
var G__14979 = count__14966_14972;
var G__14980 = (i__14967_14973 + 1);
seq__14964_14970 = G__14977;
chunk__14965_14971 = G__14978;
count__14966_14972 = G__14979;
i__14967_14973 = G__14980;
continue;
}
} else
{var temp__4092__auto___14981 = cljs.core.seq.call(null,seq__14964_14970);if(temp__4092__auto___14981)
{var seq__14964_14982__$1 = temp__4092__auto___14981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14964_14982__$1))
{var c__4148__auto___14983 = cljs.core.chunk_first.call(null,seq__14964_14982__$1);{
var G__14984 = cljs.core.chunk_rest.call(null,seq__14964_14982__$1);
var G__14985 = c__4148__auto___14983;
var G__14986 = cljs.core.count.call(null,c__4148__auto___14983);
var G__14987 = 0;
seq__14964_14970 = G__14984;
chunk__14965_14971 = G__14985;
count__14966_14972 = G__14986;
i__14967_14973 = G__14987;
continue;
}
} else
{var vec__14969_14988 = cljs.core.first.call(null,seq__14964_14982__$1);var k_14989 = cljs.core.nth.call(null,vec__14969_14988,0,null);var v_14990 = cljs.core.nth.call(null,vec__14969_14988,1,null);(evt[k_14989] = v_14990);
{
var G__14991 = cljs.core.next.call(null,seq__14964_14982__$1);
var G__14992 = null;
var G__14993 = 0;
var G__14994 = 0;
seq__14964_14970 = G__14991;
chunk__14965_14971 = G__14992;
count__14966_14972 = G__14993;
i__14967_14973 = G__14994;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14995_SHARP_){return goog.events.getListeners(p1__14995_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map