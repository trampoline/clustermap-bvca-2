// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj35825 = {};return obj35825;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t35829 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t35829 = (function (evt,f,create_listener_function,meta35830){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta35830 = meta35830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t35829.cljs$lang$type = true;
domina.events.t35829.cljs$lang$ctorStr = "domina.events/t35829";
domina.events.t35829.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t35829");
});
domina.events.t35829.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t35829.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t35829.prototype.domina$events$Event$ = true;
domina.events.t35829.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t35829.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t35829.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t35829.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t35829.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t35829.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t35829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35831){var self__ = this;
var _35831__$1 = this;return self__.meta35830;
});
domina.events.t35829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35831,meta35830__$1){var self__ = this;
var _35831__$1 = this;return (new domina.events.t35829(self__.evt,self__.f,self__.create_listener_function,meta35830__$1));
});
domina.events.__GT_t35829 = (function __GT_t35829(evt__$1,f__$1,create_listener_function__$1,meta35830){return (new domina.events.t35829(evt__$1,f__$1,create_listener_function__$1,meta35830));
});
}
return (new domina.events.t35829(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__35836(s__35837){return (new cljs.core.LazySeq(null,(function (){var s__35837__$1 = s__35837;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35837__$1);if(temp__4092__auto__)
{var s__35837__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35837__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35837__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35839 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35838 = 0;while(true){
if((i__35838 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__35838);cljs.core.chunk_append.call(null,b__35839,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__35840 = (i__35838 + 1);
i__35838 = G__35840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35839),iter__35836.call(null,cljs.core.chunk_rest.call(null,s__35837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35839),null);
}
} else
{var node = cljs.core.first.call(null,s__35837__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__35836.call(null,cljs.core.rest.call(null,s__35837__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__35849 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35850 = null;var count__35851 = 0;var i__35852 = 0;while(true){
if((i__35852 < count__35851))
{var node = cljs.core._nth.call(null,chunk__35850,i__35852);goog.events.removeAll(node);
{
var G__35857 = seq__35849;
var G__35858 = chunk__35850;
var G__35859 = count__35851;
var G__35860 = (i__35852 + 1);
seq__35849 = G__35857;
chunk__35850 = G__35858;
count__35851 = G__35859;
i__35852 = G__35860;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35849);if(temp__4092__auto__)
{var seq__35849__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35849__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35849__$1);{
var G__35861 = cljs.core.chunk_rest.call(null,seq__35849__$1);
var G__35862 = c__4148__auto__;
var G__35863 = cljs.core.count.call(null,c__4148__auto__);
var G__35864 = 0;
seq__35849 = G__35861;
chunk__35850 = G__35862;
count__35851 = G__35863;
i__35852 = G__35864;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35849__$1);goog.events.removeAll(node);
{
var G__35865 = cljs.core.next.call(null,seq__35849__$1);
var G__35866 = null;
var G__35867 = 0;
var G__35868 = 0;
seq__35849 = G__35865;
chunk__35850 = G__35866;
count__35851 = G__35867;
i__35852 = G__35868;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__35853 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35854 = null;var count__35855 = 0;var i__35856 = 0;while(true){
if((i__35856 < count__35855))
{var node = cljs.core._nth.call(null,chunk__35854,i__35856);goog.events.removeAll(node,type__$1);
{
var G__35869 = seq__35853;
var G__35870 = chunk__35854;
var G__35871 = count__35855;
var G__35872 = (i__35856 + 1);
seq__35853 = G__35869;
chunk__35854 = G__35870;
count__35855 = G__35871;
i__35856 = G__35872;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35853);if(temp__4092__auto__)
{var seq__35853__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35853__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35853__$1);{
var G__35873 = cljs.core.chunk_rest.call(null,seq__35853__$1);
var G__35874 = c__4148__auto__;
var G__35875 = cljs.core.count.call(null,c__4148__auto__);
var G__35876 = 0;
seq__35853 = G__35873;
chunk__35854 = G__35874;
count__35855 = G__35875;
i__35856 = G__35876;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35853__$1);goog.events.removeAll(node,type__$1);
{
var G__35877 = cljs.core.next.call(null,seq__35853__$1);
var G__35878 = null;
var G__35879 = 0;
var G__35880 = 0;
seq__35853 = G__35877;
chunk__35854 = G__35878;
count__35855 = G__35879;
i__35856 = G__35880;
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
var G__35881 = parent;
var G__35882 = cljs.core.cons.call(null,parent,so_far);
n = G__35881;
so_far = G__35882;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__35891_35899 = cljs.core.seq.call(null,ancestors);var chunk__35892_35900 = null;var count__35893_35901 = 0;var i__35894_35902 = 0;while(true){
if((i__35894_35902 < count__35893_35901))
{var n_35903 = cljs.core._nth.call(null,chunk__35892_35900,i__35894_35902);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35903;
goog.events.fireListeners(n_35903,evt.type,true,evt);
}
{
var G__35904 = seq__35891_35899;
var G__35905 = chunk__35892_35900;
var G__35906 = count__35893_35901;
var G__35907 = (i__35894_35902 + 1);
seq__35891_35899 = G__35904;
chunk__35892_35900 = G__35905;
count__35893_35901 = G__35906;
i__35894_35902 = G__35907;
continue;
}
} else
{var temp__4092__auto___35908 = cljs.core.seq.call(null,seq__35891_35899);if(temp__4092__auto___35908)
{var seq__35891_35909__$1 = temp__4092__auto___35908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35891_35909__$1))
{var c__4148__auto___35910 = cljs.core.chunk_first.call(null,seq__35891_35909__$1);{
var G__35911 = cljs.core.chunk_rest.call(null,seq__35891_35909__$1);
var G__35912 = c__4148__auto___35910;
var G__35913 = cljs.core.count.call(null,c__4148__auto___35910);
var G__35914 = 0;
seq__35891_35899 = G__35911;
chunk__35892_35900 = G__35912;
count__35893_35901 = G__35913;
i__35894_35902 = G__35914;
continue;
}
} else
{var n_35915 = cljs.core.first.call(null,seq__35891_35909__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35915;
goog.events.fireListeners(n_35915,evt.type,true,evt);
}
{
var G__35916 = cljs.core.next.call(null,seq__35891_35909__$1);
var G__35917 = null;
var G__35918 = 0;
var G__35919 = 0;
seq__35891_35899 = G__35916;
chunk__35892_35900 = G__35917;
count__35893_35901 = G__35918;
i__35894_35902 = G__35919;
continue;
}
}
} else
{}
}
break;
}
var seq__35895_35920 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__35896_35921 = null;var count__35897_35922 = 0;var i__35898_35923 = 0;while(true){
if((i__35898_35923 < count__35897_35922))
{var n_35924 = cljs.core._nth.call(null,chunk__35896_35921,i__35898_35923);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35924;
goog.events.fireListeners(n_35924,evt.type,false,evt);
}
{
var G__35925 = seq__35895_35920;
var G__35926 = chunk__35896_35921;
var G__35927 = count__35897_35922;
var G__35928 = (i__35898_35923 + 1);
seq__35895_35920 = G__35925;
chunk__35896_35921 = G__35926;
count__35897_35922 = G__35927;
i__35898_35923 = G__35928;
continue;
}
} else
{var temp__4092__auto___35929 = cljs.core.seq.call(null,seq__35895_35920);if(temp__4092__auto___35929)
{var seq__35895_35930__$1 = temp__4092__auto___35929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35895_35930__$1))
{var c__4148__auto___35931 = cljs.core.chunk_first.call(null,seq__35895_35930__$1);{
var G__35932 = cljs.core.chunk_rest.call(null,seq__35895_35930__$1);
var G__35933 = c__4148__auto___35931;
var G__35934 = cljs.core.count.call(null,c__4148__auto___35931);
var G__35935 = 0;
seq__35895_35920 = G__35932;
chunk__35896_35921 = G__35933;
count__35897_35922 = G__35934;
i__35898_35923 = G__35935;
continue;
}
} else
{var n_35936 = cljs.core.first.call(null,seq__35895_35930__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35936;
goog.events.fireListeners(n_35936,evt.type,false,evt);
}
{
var G__35937 = cljs.core.next.call(null,seq__35895_35930__$1);
var G__35938 = null;
var G__35939 = 0;
var G__35940 = 0;
seq__35895_35920 = G__35937;
chunk__35896_35921 = G__35938;
count__35897_35922 = G__35939;
i__35898_35923 = G__35940;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__35947_35953 = cljs.core.seq.call(null,evt_map);var chunk__35948_35954 = null;var count__35949_35955 = 0;var i__35950_35956 = 0;while(true){
if((i__35950_35956 < count__35949_35955))
{var vec__35951_35957 = cljs.core._nth.call(null,chunk__35948_35954,i__35950_35956);var k_35958 = cljs.core.nth.call(null,vec__35951_35957,0,null);var v_35959 = cljs.core.nth.call(null,vec__35951_35957,1,null);(evt[k_35958] = v_35959);
{
var G__35960 = seq__35947_35953;
var G__35961 = chunk__35948_35954;
var G__35962 = count__35949_35955;
var G__35963 = (i__35950_35956 + 1);
seq__35947_35953 = G__35960;
chunk__35948_35954 = G__35961;
count__35949_35955 = G__35962;
i__35950_35956 = G__35963;
continue;
}
} else
{var temp__4092__auto___35964 = cljs.core.seq.call(null,seq__35947_35953);if(temp__4092__auto___35964)
{var seq__35947_35965__$1 = temp__4092__auto___35964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35947_35965__$1))
{var c__4148__auto___35966 = cljs.core.chunk_first.call(null,seq__35947_35965__$1);{
var G__35967 = cljs.core.chunk_rest.call(null,seq__35947_35965__$1);
var G__35968 = c__4148__auto___35966;
var G__35969 = cljs.core.count.call(null,c__4148__auto___35966);
var G__35970 = 0;
seq__35947_35953 = G__35967;
chunk__35948_35954 = G__35968;
count__35949_35955 = G__35969;
i__35950_35956 = G__35970;
continue;
}
} else
{var vec__35952_35971 = cljs.core.first.call(null,seq__35947_35965__$1);var k_35972 = cljs.core.nth.call(null,vec__35952_35971,0,null);var v_35973 = cljs.core.nth.call(null,vec__35952_35971,1,null);(evt[k_35972] = v_35973);
{
var G__35974 = cljs.core.next.call(null,seq__35947_35965__$1);
var G__35975 = null;
var G__35976 = 0;
var G__35977 = 0;
seq__35947_35953 = G__35974;
chunk__35948_35954 = G__35975;
count__35949_35955 = G__35976;
i__35950_35956 = G__35977;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__35978_SHARP_){return goog.events.getListeners(p1__35978_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
