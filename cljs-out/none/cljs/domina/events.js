// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19046 = {};return obj19046;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19050 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19050 = (function (evt,f,create_listener_function,meta19051){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19051 = meta19051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19050.cljs$lang$type = true;
domina.events.t19050.cljs$lang$ctorStr = "domina.events/t19050";
domina.events.t19050.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t19050");
});
domina.events.t19050.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19050.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t19050.prototype.domina$events$Event$ = true;
domina.events.t19050.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19050.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19050.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19050.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19050.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19050.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19052){var self__ = this;
var _19052__$1 = this;return self__.meta19051;
});
domina.events.t19050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19052,meta19051__$1){var self__ = this;
var _19052__$1 = this;return (new domina.events.t19050(self__.evt,self__.f,self__.create_listener_function,meta19051__$1));
});
domina.events.__GT_t19050 = (function __GT_t19050(evt__$1,f__$1,create_listener_function__$1,meta19051){return (new domina.events.t19050(evt__$1,f__$1,create_listener_function__$1,meta19051));
});
}
return (new domina.events.t19050(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__19057(s__19058){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19058__$1 = s__19058;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19058__$1);if(temp__4126__auto__)
{var s__19058__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19058__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19058__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19060 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19059 = (0);while(true){
if((i__19059 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__19059);cljs.core.chunk_append.call(null,b__19060,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19061 = (i__19059 + (1));
i__19059 = G__19061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19060),iter__19057.call(null,cljs.core.chunk_rest.call(null,s__19058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19060),null);
}
} else
{var node = cljs.core.first.call(null,s__19058__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19057.call(null,cljs.core.rest.call(null,s__19058__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19070 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19071 = null;var count__19072 = (0);var i__19073 = (0);while(true){
if((i__19073 < count__19072))
{var node = cljs.core._nth.call(null,chunk__19071,i__19073);goog.events.removeAll(node);
{
var G__19078 = seq__19070;
var G__19079 = chunk__19071;
var G__19080 = count__19072;
var G__19081 = (i__19073 + (1));
seq__19070 = G__19078;
chunk__19071 = G__19079;
count__19072 = G__19080;
i__19073 = G__19081;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19070);if(temp__4126__auto__)
{var seq__19070__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19070__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19070__$1);{
var G__19082 = cljs.core.chunk_rest.call(null,seq__19070__$1);
var G__19083 = c__4314__auto__;
var G__19084 = cljs.core.count.call(null,c__4314__auto__);
var G__19085 = (0);
seq__19070 = G__19082;
chunk__19071 = G__19083;
count__19072 = G__19084;
i__19073 = G__19085;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19070__$1);goog.events.removeAll(node);
{
var G__19086 = cljs.core.next.call(null,seq__19070__$1);
var G__19087 = null;
var G__19088 = (0);
var G__19089 = (0);
seq__19070 = G__19086;
chunk__19071 = G__19087;
count__19072 = G__19088;
i__19073 = G__19089;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19075 = null;var count__19076 = (0);var i__19077 = (0);while(true){
if((i__19077 < count__19076))
{var node = cljs.core._nth.call(null,chunk__19075,i__19077);goog.events.removeAll(node,type__$1);
{
var G__19090 = seq__19074;
var G__19091 = chunk__19075;
var G__19092 = count__19076;
var G__19093 = (i__19077 + (1));
seq__19074 = G__19090;
chunk__19075 = G__19091;
count__19076 = G__19092;
i__19077 = G__19093;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19074);if(temp__4126__auto__)
{var seq__19074__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19074__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19074__$1);{
var G__19094 = cljs.core.chunk_rest.call(null,seq__19074__$1);
var G__19095 = c__4314__auto__;
var G__19096 = cljs.core.count.call(null,c__4314__auto__);
var G__19097 = (0);
seq__19074 = G__19094;
chunk__19075 = G__19095;
count__19076 = G__19096;
i__19077 = G__19097;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19074__$1);goog.events.removeAll(node,type__$1);
{
var G__19098 = cljs.core.next.call(null,seq__19074__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__19074 = G__19098;
chunk__19075 = G__19099;
count__19076 = G__19100;
i__19077 = G__19101;
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
var G__19102 = parent;
var G__19103 = cljs.core.cons.call(null,parent,so_far);
n = G__19102;
so_far = G__19103;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19112_19120 = cljs.core.seq.call(null,ancestors);var chunk__19113_19121 = null;var count__19114_19122 = (0);var i__19115_19123 = (0);while(true){
if((i__19115_19123 < count__19114_19122))
{var n_19124 = cljs.core._nth.call(null,chunk__19113_19121,i__19115_19123);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19124;
goog.events.fireListeners(n_19124,evt.type,true,evt);
}
{
var G__19125 = seq__19112_19120;
var G__19126 = chunk__19113_19121;
var G__19127 = count__19114_19122;
var G__19128 = (i__19115_19123 + (1));
seq__19112_19120 = G__19125;
chunk__19113_19121 = G__19126;
count__19114_19122 = G__19127;
i__19115_19123 = G__19128;
continue;
}
} else
{var temp__4126__auto___19129 = cljs.core.seq.call(null,seq__19112_19120);if(temp__4126__auto___19129)
{var seq__19112_19130__$1 = temp__4126__auto___19129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19112_19130__$1))
{var c__4314__auto___19131 = cljs.core.chunk_first.call(null,seq__19112_19130__$1);{
var G__19132 = cljs.core.chunk_rest.call(null,seq__19112_19130__$1);
var G__19133 = c__4314__auto___19131;
var G__19134 = cljs.core.count.call(null,c__4314__auto___19131);
var G__19135 = (0);
seq__19112_19120 = G__19132;
chunk__19113_19121 = G__19133;
count__19114_19122 = G__19134;
i__19115_19123 = G__19135;
continue;
}
} else
{var n_19136 = cljs.core.first.call(null,seq__19112_19130__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19136;
goog.events.fireListeners(n_19136,evt.type,true,evt);
}
{
var G__19137 = cljs.core.next.call(null,seq__19112_19130__$1);
var G__19138 = null;
var G__19139 = (0);
var G__19140 = (0);
seq__19112_19120 = G__19137;
chunk__19113_19121 = G__19138;
count__19114_19122 = G__19139;
i__19115_19123 = G__19140;
continue;
}
}
} else
{}
}
break;
}
var seq__19116_19141 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19117_19142 = null;var count__19118_19143 = (0);var i__19119_19144 = (0);while(true){
if((i__19119_19144 < count__19118_19143))
{var n_19145 = cljs.core._nth.call(null,chunk__19117_19142,i__19119_19144);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19145;
goog.events.fireListeners(n_19145,evt.type,false,evt);
}
{
var G__19146 = seq__19116_19141;
var G__19147 = chunk__19117_19142;
var G__19148 = count__19118_19143;
var G__19149 = (i__19119_19144 + (1));
seq__19116_19141 = G__19146;
chunk__19117_19142 = G__19147;
count__19118_19143 = G__19148;
i__19119_19144 = G__19149;
continue;
}
} else
{var temp__4126__auto___19150 = cljs.core.seq.call(null,seq__19116_19141);if(temp__4126__auto___19150)
{var seq__19116_19151__$1 = temp__4126__auto___19150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19116_19151__$1))
{var c__4314__auto___19152 = cljs.core.chunk_first.call(null,seq__19116_19151__$1);{
var G__19153 = cljs.core.chunk_rest.call(null,seq__19116_19151__$1);
var G__19154 = c__4314__auto___19152;
var G__19155 = cljs.core.count.call(null,c__4314__auto___19152);
var G__19156 = (0);
seq__19116_19141 = G__19153;
chunk__19117_19142 = G__19154;
count__19118_19143 = G__19155;
i__19119_19144 = G__19156;
continue;
}
} else
{var n_19157 = cljs.core.first.call(null,seq__19116_19151__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19157;
goog.events.fireListeners(n_19157,evt.type,false,evt);
}
{
var G__19158 = cljs.core.next.call(null,seq__19116_19151__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__19116_19141 = G__19158;
chunk__19117_19142 = G__19159;
count__19118_19143 = G__19160;
i__19119_19144 = G__19161;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19168_19174 = cljs.core.seq.call(null,evt_map);var chunk__19169_19175 = null;var count__19170_19176 = (0);var i__19171_19177 = (0);while(true){
if((i__19171_19177 < count__19170_19176))
{var vec__19172_19178 = cljs.core._nth.call(null,chunk__19169_19175,i__19171_19177);var k_19179 = cljs.core.nth.call(null,vec__19172_19178,(0),null);var v_19180 = cljs.core.nth.call(null,vec__19172_19178,(1),null);(evt[k_19179] = v_19180);
{
var G__19181 = seq__19168_19174;
var G__19182 = chunk__19169_19175;
var G__19183 = count__19170_19176;
var G__19184 = (i__19171_19177 + (1));
seq__19168_19174 = G__19181;
chunk__19169_19175 = G__19182;
count__19170_19176 = G__19183;
i__19171_19177 = G__19184;
continue;
}
} else
{var temp__4126__auto___19185 = cljs.core.seq.call(null,seq__19168_19174);if(temp__4126__auto___19185)
{var seq__19168_19186__$1 = temp__4126__auto___19185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19168_19186__$1))
{var c__4314__auto___19187 = cljs.core.chunk_first.call(null,seq__19168_19186__$1);{
var G__19188 = cljs.core.chunk_rest.call(null,seq__19168_19186__$1);
var G__19189 = c__4314__auto___19187;
var G__19190 = cljs.core.count.call(null,c__4314__auto___19187);
var G__19191 = (0);
seq__19168_19174 = G__19188;
chunk__19169_19175 = G__19189;
count__19170_19176 = G__19190;
i__19171_19177 = G__19191;
continue;
}
} else
{var vec__19173_19192 = cljs.core.first.call(null,seq__19168_19186__$1);var k_19193 = cljs.core.nth.call(null,vec__19173_19192,(0),null);var v_19194 = cljs.core.nth.call(null,vec__19173_19192,(1),null);(evt[k_19193] = v_19194);
{
var G__19195 = cljs.core.next.call(null,seq__19168_19186__$1);
var G__19196 = null;
var G__19197 = (0);
var G__19198 = (0);
seq__19168_19174 = G__19195;
chunk__19169_19175 = G__19196;
count__19170_19176 = G__19197;
i__19171_19177 = G__19198;
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
return (function (p1__19199_SHARP_){return goog.events.getListeners(p1__19199_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map