// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34012 = {};return obj34012;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34016 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34016 = (function (evt,f,create_listener_function,meta34017){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34017 = meta34017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34016.cljs$lang$type = true;
domina.events.t34016.cljs$lang$ctorStr = "domina.events/t34016";
domina.events.t34016.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t34016");
});
domina.events.t34016.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34016.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t34016.prototype.domina$events$Event$ = true;
domina.events.t34016.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34016.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34016.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34016.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34016.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34016.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34018){var self__ = this;
var _34018__$1 = this;return self__.meta34017;
});
domina.events.t34016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34018,meta34017__$1){var self__ = this;
var _34018__$1 = this;return (new domina.events.t34016(self__.evt,self__.f,self__.create_listener_function,meta34017__$1));
});
domina.events.__GT_t34016 = (function __GT_t34016(evt__$1,f__$1,create_listener_function__$1,meta34017){return (new domina.events.t34016(evt__$1,f__$1,create_listener_function__$1,meta34017));
});
}
return (new domina.events.t34016(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__34023(s__34024){return (new cljs.core.LazySeq(null,(function (){var s__34024__$1 = s__34024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34024__$1);if(temp__4092__auto__)
{var s__34024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34024__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34024__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34026 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34025 = 0;while(true){
if((i__34025 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__34025);cljs.core.chunk_append.call(null,b__34026,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34027 = (i__34025 + 1);
i__34025 = G__34027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34026),iter__34023.call(null,cljs.core.chunk_rest.call(null,s__34024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34026),null);
}
} else
{var node = cljs.core.first.call(null,s__34024__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34023.call(null,cljs.core.rest.call(null,s__34024__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__34036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34037 = null;var count__34038 = 0;var i__34039 = 0;while(true){
if((i__34039 < count__34038))
{var node = cljs.core._nth.call(null,chunk__34037,i__34039);goog.events.removeAll(node);
{
var G__34044 = seq__34036;
var G__34045 = chunk__34037;
var G__34046 = count__34038;
var G__34047 = (i__34039 + 1);
seq__34036 = G__34044;
chunk__34037 = G__34045;
count__34038 = G__34046;
i__34039 = G__34047;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34036);if(temp__4092__auto__)
{var seq__34036__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34036__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34036__$1);{
var G__34048 = cljs.core.chunk_rest.call(null,seq__34036__$1);
var G__34049 = c__4148__auto__;
var G__34050 = cljs.core.count.call(null,c__4148__auto__);
var G__34051 = 0;
seq__34036 = G__34048;
chunk__34037 = G__34049;
count__34038 = G__34050;
i__34039 = G__34051;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34036__$1);goog.events.removeAll(node);
{
var G__34052 = cljs.core.next.call(null,seq__34036__$1);
var G__34053 = null;
var G__34054 = 0;
var G__34055 = 0;
seq__34036 = G__34052;
chunk__34037 = G__34053;
count__34038 = G__34054;
i__34039 = G__34055;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__34040 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34041 = null;var count__34042 = 0;var i__34043 = 0;while(true){
if((i__34043 < count__34042))
{var node = cljs.core._nth.call(null,chunk__34041,i__34043);goog.events.removeAll(node,type__$1);
{
var G__34056 = seq__34040;
var G__34057 = chunk__34041;
var G__34058 = count__34042;
var G__34059 = (i__34043 + 1);
seq__34040 = G__34056;
chunk__34041 = G__34057;
count__34042 = G__34058;
i__34043 = G__34059;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34040);if(temp__4092__auto__)
{var seq__34040__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34040__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34040__$1);{
var G__34060 = cljs.core.chunk_rest.call(null,seq__34040__$1);
var G__34061 = c__4148__auto__;
var G__34062 = cljs.core.count.call(null,c__4148__auto__);
var G__34063 = 0;
seq__34040 = G__34060;
chunk__34041 = G__34061;
count__34042 = G__34062;
i__34043 = G__34063;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34040__$1);goog.events.removeAll(node,type__$1);
{
var G__34064 = cljs.core.next.call(null,seq__34040__$1);
var G__34065 = null;
var G__34066 = 0;
var G__34067 = 0;
seq__34040 = G__34064;
chunk__34041 = G__34065;
count__34042 = G__34066;
i__34043 = G__34067;
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
var G__34068 = parent;
var G__34069 = cljs.core.cons.call(null,parent,so_far);
n = G__34068;
so_far = G__34069;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__34078_34086 = cljs.core.seq.call(null,ancestors);var chunk__34079_34087 = null;var count__34080_34088 = 0;var i__34081_34089 = 0;while(true){
if((i__34081_34089 < count__34080_34088))
{var n_34090 = cljs.core._nth.call(null,chunk__34079_34087,i__34081_34089);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34090;
goog.events.fireListeners(n_34090,evt.type,true,evt);
}
{
var G__34091 = seq__34078_34086;
var G__34092 = chunk__34079_34087;
var G__34093 = count__34080_34088;
var G__34094 = (i__34081_34089 + 1);
seq__34078_34086 = G__34091;
chunk__34079_34087 = G__34092;
count__34080_34088 = G__34093;
i__34081_34089 = G__34094;
continue;
}
} else
{var temp__4092__auto___34095 = cljs.core.seq.call(null,seq__34078_34086);if(temp__4092__auto___34095)
{var seq__34078_34096__$1 = temp__4092__auto___34095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34078_34096__$1))
{var c__4148__auto___34097 = cljs.core.chunk_first.call(null,seq__34078_34096__$1);{
var G__34098 = cljs.core.chunk_rest.call(null,seq__34078_34096__$1);
var G__34099 = c__4148__auto___34097;
var G__34100 = cljs.core.count.call(null,c__4148__auto___34097);
var G__34101 = 0;
seq__34078_34086 = G__34098;
chunk__34079_34087 = G__34099;
count__34080_34088 = G__34100;
i__34081_34089 = G__34101;
continue;
}
} else
{var n_34102 = cljs.core.first.call(null,seq__34078_34096__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34102;
goog.events.fireListeners(n_34102,evt.type,true,evt);
}
{
var G__34103 = cljs.core.next.call(null,seq__34078_34096__$1);
var G__34104 = null;
var G__34105 = 0;
var G__34106 = 0;
seq__34078_34086 = G__34103;
chunk__34079_34087 = G__34104;
count__34080_34088 = G__34105;
i__34081_34089 = G__34106;
continue;
}
}
} else
{}
}
break;
}
var seq__34082_34107 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__34083_34108 = null;var count__34084_34109 = 0;var i__34085_34110 = 0;while(true){
if((i__34085_34110 < count__34084_34109))
{var n_34111 = cljs.core._nth.call(null,chunk__34083_34108,i__34085_34110);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34111;
goog.events.fireListeners(n_34111,evt.type,false,evt);
}
{
var G__34112 = seq__34082_34107;
var G__34113 = chunk__34083_34108;
var G__34114 = count__34084_34109;
var G__34115 = (i__34085_34110 + 1);
seq__34082_34107 = G__34112;
chunk__34083_34108 = G__34113;
count__34084_34109 = G__34114;
i__34085_34110 = G__34115;
continue;
}
} else
{var temp__4092__auto___34116 = cljs.core.seq.call(null,seq__34082_34107);if(temp__4092__auto___34116)
{var seq__34082_34117__$1 = temp__4092__auto___34116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34082_34117__$1))
{var c__4148__auto___34118 = cljs.core.chunk_first.call(null,seq__34082_34117__$1);{
var G__34119 = cljs.core.chunk_rest.call(null,seq__34082_34117__$1);
var G__34120 = c__4148__auto___34118;
var G__34121 = cljs.core.count.call(null,c__4148__auto___34118);
var G__34122 = 0;
seq__34082_34107 = G__34119;
chunk__34083_34108 = G__34120;
count__34084_34109 = G__34121;
i__34085_34110 = G__34122;
continue;
}
} else
{var n_34123 = cljs.core.first.call(null,seq__34082_34117__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34123;
goog.events.fireListeners(n_34123,evt.type,false,evt);
}
{
var G__34124 = cljs.core.next.call(null,seq__34082_34117__$1);
var G__34125 = null;
var G__34126 = 0;
var G__34127 = 0;
seq__34082_34107 = G__34124;
chunk__34083_34108 = G__34125;
count__34084_34109 = G__34126;
i__34085_34110 = G__34127;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__34134_34140 = cljs.core.seq.call(null,evt_map);var chunk__34135_34141 = null;var count__34136_34142 = 0;var i__34137_34143 = 0;while(true){
if((i__34137_34143 < count__34136_34142))
{var vec__34138_34144 = cljs.core._nth.call(null,chunk__34135_34141,i__34137_34143);var k_34145 = cljs.core.nth.call(null,vec__34138_34144,0,null);var v_34146 = cljs.core.nth.call(null,vec__34138_34144,1,null);(evt[k_34145] = v_34146);
{
var G__34147 = seq__34134_34140;
var G__34148 = chunk__34135_34141;
var G__34149 = count__34136_34142;
var G__34150 = (i__34137_34143 + 1);
seq__34134_34140 = G__34147;
chunk__34135_34141 = G__34148;
count__34136_34142 = G__34149;
i__34137_34143 = G__34150;
continue;
}
} else
{var temp__4092__auto___34151 = cljs.core.seq.call(null,seq__34134_34140);if(temp__4092__auto___34151)
{var seq__34134_34152__$1 = temp__4092__auto___34151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34134_34152__$1))
{var c__4148__auto___34153 = cljs.core.chunk_first.call(null,seq__34134_34152__$1);{
var G__34154 = cljs.core.chunk_rest.call(null,seq__34134_34152__$1);
var G__34155 = c__4148__auto___34153;
var G__34156 = cljs.core.count.call(null,c__4148__auto___34153);
var G__34157 = 0;
seq__34134_34140 = G__34154;
chunk__34135_34141 = G__34155;
count__34136_34142 = G__34156;
i__34137_34143 = G__34157;
continue;
}
} else
{var vec__34139_34158 = cljs.core.first.call(null,seq__34134_34152__$1);var k_34159 = cljs.core.nth.call(null,vec__34139_34158,0,null);var v_34160 = cljs.core.nth.call(null,vec__34139_34158,1,null);(evt[k_34159] = v_34160);
{
var G__34161 = cljs.core.next.call(null,seq__34134_34152__$1);
var G__34162 = null;
var G__34163 = 0;
var G__34164 = 0;
seq__34134_34140 = G__34161;
chunk__34135_34141 = G__34162;
count__34136_34142 = G__34163;
i__34137_34143 = G__34164;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__34165_SHARP_){return goog.events.getListeners(p1__34165_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
