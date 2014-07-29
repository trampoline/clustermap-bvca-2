// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj31003 = {};return obj31003;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t31007 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t31007 = (function (evt,f,create_listener_function,meta31008){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta31008 = meta31008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t31007.cljs$lang$type = true;
domina.events.t31007.cljs$lang$ctorStr = "domina.events/t31007";
domina.events.t31007.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t31007");
});
domina.events.t31007.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t31007.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t31007.prototype.domina$events$Event$ = true;
domina.events.t31007.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t31007.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t31007.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t31007.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t31007.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t31007.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t31007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31009){var self__ = this;
var _31009__$1 = this;return self__.meta31008;
});
domina.events.t31007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31009,meta31008__$1){var self__ = this;
var _31009__$1 = this;return (new domina.events.t31007(self__.evt,self__.f,self__.create_listener_function,meta31008__$1));
});
domina.events.__GT_t31007 = (function __GT_t31007(evt__$1,f__$1,create_listener_function__$1,meta31008){return (new domina.events.t31007(evt__$1,f__$1,create_listener_function__$1,meta31008));
});
}
return (new domina.events.t31007(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__31014(s__31015){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__31015__$1 = s__31015;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31015__$1);if(temp__4126__auto__)
{var s__31015__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31015__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31015__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31017 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31016 = (0);while(true){
if((i__31016 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__31016);cljs.core.chunk_append.call(null,b__31017,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__31018 = (i__31016 + (1));
i__31016 = G__31018;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31017),iter__31014.call(null,cljs.core.chunk_rest.call(null,s__31015__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31017),null);
}
} else
{var node = cljs.core.first.call(null,s__31015__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__31014.call(null,cljs.core.rest.call(null,s__31015__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__31027 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31028 = null;var count__31029 = (0);var i__31030 = (0);while(true){
if((i__31030 < count__31029))
{var node = cljs.core._nth.call(null,chunk__31028,i__31030);goog.events.removeAll(node);
{
var G__31035 = seq__31027;
var G__31036 = chunk__31028;
var G__31037 = count__31029;
var G__31038 = (i__31030 + (1));
seq__31027 = G__31035;
chunk__31028 = G__31036;
count__31029 = G__31037;
i__31030 = G__31038;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31027);if(temp__4126__auto__)
{var seq__31027__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31027__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31027__$1);{
var G__31039 = cljs.core.chunk_rest.call(null,seq__31027__$1);
var G__31040 = c__4299__auto__;
var G__31041 = cljs.core.count.call(null,c__4299__auto__);
var G__31042 = (0);
seq__31027 = G__31039;
chunk__31028 = G__31040;
count__31029 = G__31041;
i__31030 = G__31042;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31027__$1);goog.events.removeAll(node);
{
var G__31043 = cljs.core.next.call(null,seq__31027__$1);
var G__31044 = null;
var G__31045 = (0);
var G__31046 = (0);
seq__31027 = G__31043;
chunk__31028 = G__31044;
count__31029 = G__31045;
i__31030 = G__31046;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__31031 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31032 = null;var count__31033 = (0);var i__31034 = (0);while(true){
if((i__31034 < count__31033))
{var node = cljs.core._nth.call(null,chunk__31032,i__31034);goog.events.removeAll(node,type__$1);
{
var G__31047 = seq__31031;
var G__31048 = chunk__31032;
var G__31049 = count__31033;
var G__31050 = (i__31034 + (1));
seq__31031 = G__31047;
chunk__31032 = G__31048;
count__31033 = G__31049;
i__31034 = G__31050;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31031);if(temp__4126__auto__)
{var seq__31031__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31031__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31031__$1);{
var G__31051 = cljs.core.chunk_rest.call(null,seq__31031__$1);
var G__31052 = c__4299__auto__;
var G__31053 = cljs.core.count.call(null,c__4299__auto__);
var G__31054 = (0);
seq__31031 = G__31051;
chunk__31032 = G__31052;
count__31033 = G__31053;
i__31034 = G__31054;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31031__$1);goog.events.removeAll(node,type__$1);
{
var G__31055 = cljs.core.next.call(null,seq__31031__$1);
var G__31056 = null;
var G__31057 = (0);
var G__31058 = (0);
seq__31031 = G__31055;
chunk__31032 = G__31056;
count__31033 = G__31057;
i__31034 = G__31058;
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
var G__31059 = parent;
var G__31060 = cljs.core.cons.call(null,parent,so_far);
n = G__31059;
so_far = G__31060;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31069_31077 = cljs.core.seq.call(null,ancestors);var chunk__31070_31078 = null;var count__31071_31079 = (0);var i__31072_31080 = (0);while(true){
if((i__31072_31080 < count__31071_31079))
{var n_31081 = cljs.core._nth.call(null,chunk__31070_31078,i__31072_31080);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31081;
goog.events.fireListeners(n_31081,evt.type,true,evt);
}
{
var G__31082 = seq__31069_31077;
var G__31083 = chunk__31070_31078;
var G__31084 = count__31071_31079;
var G__31085 = (i__31072_31080 + (1));
seq__31069_31077 = G__31082;
chunk__31070_31078 = G__31083;
count__31071_31079 = G__31084;
i__31072_31080 = G__31085;
continue;
}
} else
{var temp__4126__auto___31086 = cljs.core.seq.call(null,seq__31069_31077);if(temp__4126__auto___31086)
{var seq__31069_31087__$1 = temp__4126__auto___31086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31069_31087__$1))
{var c__4299__auto___31088 = cljs.core.chunk_first.call(null,seq__31069_31087__$1);{
var G__31089 = cljs.core.chunk_rest.call(null,seq__31069_31087__$1);
var G__31090 = c__4299__auto___31088;
var G__31091 = cljs.core.count.call(null,c__4299__auto___31088);
var G__31092 = (0);
seq__31069_31077 = G__31089;
chunk__31070_31078 = G__31090;
count__31071_31079 = G__31091;
i__31072_31080 = G__31092;
continue;
}
} else
{var n_31093 = cljs.core.first.call(null,seq__31069_31087__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31093;
goog.events.fireListeners(n_31093,evt.type,true,evt);
}
{
var G__31094 = cljs.core.next.call(null,seq__31069_31087__$1);
var G__31095 = null;
var G__31096 = (0);
var G__31097 = (0);
seq__31069_31077 = G__31094;
chunk__31070_31078 = G__31095;
count__31071_31079 = G__31096;
i__31072_31080 = G__31097;
continue;
}
}
} else
{}
}
break;
}
var seq__31073_31098 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31074_31099 = null;var count__31075_31100 = (0);var i__31076_31101 = (0);while(true){
if((i__31076_31101 < count__31075_31100))
{var n_31102 = cljs.core._nth.call(null,chunk__31074_31099,i__31076_31101);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31102;
goog.events.fireListeners(n_31102,evt.type,false,evt);
}
{
var G__31103 = seq__31073_31098;
var G__31104 = chunk__31074_31099;
var G__31105 = count__31075_31100;
var G__31106 = (i__31076_31101 + (1));
seq__31073_31098 = G__31103;
chunk__31074_31099 = G__31104;
count__31075_31100 = G__31105;
i__31076_31101 = G__31106;
continue;
}
} else
{var temp__4126__auto___31107 = cljs.core.seq.call(null,seq__31073_31098);if(temp__4126__auto___31107)
{var seq__31073_31108__$1 = temp__4126__auto___31107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31073_31108__$1))
{var c__4299__auto___31109 = cljs.core.chunk_first.call(null,seq__31073_31108__$1);{
var G__31110 = cljs.core.chunk_rest.call(null,seq__31073_31108__$1);
var G__31111 = c__4299__auto___31109;
var G__31112 = cljs.core.count.call(null,c__4299__auto___31109);
var G__31113 = (0);
seq__31073_31098 = G__31110;
chunk__31074_31099 = G__31111;
count__31075_31100 = G__31112;
i__31076_31101 = G__31113;
continue;
}
} else
{var n_31114 = cljs.core.first.call(null,seq__31073_31108__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31114;
goog.events.fireListeners(n_31114,evt.type,false,evt);
}
{
var G__31115 = cljs.core.next.call(null,seq__31073_31108__$1);
var G__31116 = null;
var G__31117 = (0);
var G__31118 = (0);
seq__31073_31098 = G__31115;
chunk__31074_31099 = G__31116;
count__31075_31100 = G__31117;
i__31076_31101 = G__31118;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31125_31131 = cljs.core.seq.call(null,evt_map);var chunk__31126_31132 = null;var count__31127_31133 = (0);var i__31128_31134 = (0);while(true){
if((i__31128_31134 < count__31127_31133))
{var vec__31129_31135 = cljs.core._nth.call(null,chunk__31126_31132,i__31128_31134);var k_31136 = cljs.core.nth.call(null,vec__31129_31135,(0),null);var v_31137 = cljs.core.nth.call(null,vec__31129_31135,(1),null);(evt[k_31136] = v_31137);
{
var G__31138 = seq__31125_31131;
var G__31139 = chunk__31126_31132;
var G__31140 = count__31127_31133;
var G__31141 = (i__31128_31134 + (1));
seq__31125_31131 = G__31138;
chunk__31126_31132 = G__31139;
count__31127_31133 = G__31140;
i__31128_31134 = G__31141;
continue;
}
} else
{var temp__4126__auto___31142 = cljs.core.seq.call(null,seq__31125_31131);if(temp__4126__auto___31142)
{var seq__31125_31143__$1 = temp__4126__auto___31142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31125_31143__$1))
{var c__4299__auto___31144 = cljs.core.chunk_first.call(null,seq__31125_31143__$1);{
var G__31145 = cljs.core.chunk_rest.call(null,seq__31125_31143__$1);
var G__31146 = c__4299__auto___31144;
var G__31147 = cljs.core.count.call(null,c__4299__auto___31144);
var G__31148 = (0);
seq__31125_31131 = G__31145;
chunk__31126_31132 = G__31146;
count__31127_31133 = G__31147;
i__31128_31134 = G__31148;
continue;
}
} else
{var vec__31130_31149 = cljs.core.first.call(null,seq__31125_31143__$1);var k_31150 = cljs.core.nth.call(null,vec__31130_31149,(0),null);var v_31151 = cljs.core.nth.call(null,vec__31130_31149,(1),null);(evt[k_31150] = v_31151);
{
var G__31152 = cljs.core.next.call(null,seq__31125_31143__$1);
var G__31153 = null;
var G__31154 = (0);
var G__31155 = (0);
seq__31125_31131 = G__31152;
chunk__31126_31132 = G__31153;
count__31127_31133 = G__31154;
i__31128_31134 = G__31155;
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
return (function (p1__31156_SHARP_){return goog.events.getListeners(p1__31156_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
