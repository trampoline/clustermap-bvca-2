// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj51072 = {};return obj51072;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t51076 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t51076 = (function (evt,f,create_listener_function,meta51077){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta51077 = meta51077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t51076.cljs$lang$type = true;
domina.events.t51076.cljs$lang$ctorStr = "domina.events/t51076";
domina.events.t51076.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.events/t51076");
});
domina.events.t51076.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t51076.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t51076.prototype.domina$events$Event$ = true;
domina.events.t51076.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t51076.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t51076.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t51076.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t51076.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t51076.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t51076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51078){var self__ = this;
var _51078__$1 = this;return self__.meta51077;
});
domina.events.t51076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51078,meta51077__$1){var self__ = this;
var _51078__$1 = this;return (new domina.events.t51076(self__.evt,self__.f,self__.create_listener_function,meta51077__$1));
});
domina.events.__GT_t51076 = (function __GT_t51076(evt__$1,f__$1,create_listener_function__$1,meta51077){return (new domina.events.t51076(evt__$1,f__$1,create_listener_function__$1,meta51077));
});
}
return (new domina.events.t51076(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__51083(s__51084){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__51084__$1 = s__51084;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51084__$1);if(temp__4126__auto__)
{var s__51084__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51084__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__51084__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__51086 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__51085 = 0;while(true){
if((i__51085 < size__4265__auto__))
{var node = cljs.core._nth.call(null,c__4264__auto__,i__51085);cljs.core.chunk_append.call(null,b__51086,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__51087 = (i__51085 + 1);
i__51085 = G__51087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51086),iter__51083.call(null,cljs.core.chunk_rest.call(null,s__51084__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51086),null);
}
} else
{var node = cljs.core.first.call(null,s__51084__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__51083.call(null,cljs.core.rest.call(null,s__51084__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__51096 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51097 = null;var count__51098 = 0;var i__51099 = 0;while(true){
if((i__51099 < count__51098))
{var node = cljs.core._nth.call(null,chunk__51097,i__51099);goog.events.removeAll(node);
{
var G__51104 = seq__51096;
var G__51105 = chunk__51097;
var G__51106 = count__51098;
var G__51107 = (i__51099 + 1);
seq__51096 = G__51104;
chunk__51097 = G__51105;
count__51098 = G__51106;
i__51099 = G__51107;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51096);if(temp__4126__auto__)
{var seq__51096__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51096__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__51096__$1);{
var G__51108 = cljs.core.chunk_rest.call(null,seq__51096__$1);
var G__51109 = c__4297__auto__;
var G__51110 = cljs.core.count.call(null,c__4297__auto__);
var G__51111 = 0;
seq__51096 = G__51108;
chunk__51097 = G__51109;
count__51098 = G__51110;
i__51099 = G__51111;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51096__$1);goog.events.removeAll(node);
{
var G__51112 = cljs.core.next.call(null,seq__51096__$1);
var G__51113 = null;
var G__51114 = 0;
var G__51115 = 0;
seq__51096 = G__51112;
chunk__51097 = G__51113;
count__51098 = G__51114;
i__51099 = G__51115;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__51100 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51101 = null;var count__51102 = 0;var i__51103 = 0;while(true){
if((i__51103 < count__51102))
{var node = cljs.core._nth.call(null,chunk__51101,i__51103);goog.events.removeAll(node,type__$1);
{
var G__51116 = seq__51100;
var G__51117 = chunk__51101;
var G__51118 = count__51102;
var G__51119 = (i__51103 + 1);
seq__51100 = G__51116;
chunk__51101 = G__51117;
count__51102 = G__51118;
i__51103 = G__51119;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51100);if(temp__4126__auto__)
{var seq__51100__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51100__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__51100__$1);{
var G__51120 = cljs.core.chunk_rest.call(null,seq__51100__$1);
var G__51121 = c__4297__auto__;
var G__51122 = cljs.core.count.call(null,c__4297__auto__);
var G__51123 = 0;
seq__51100 = G__51120;
chunk__51101 = G__51121;
count__51102 = G__51122;
i__51103 = G__51123;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51100__$1);goog.events.removeAll(node,type__$1);
{
var G__51124 = cljs.core.next.call(null,seq__51100__$1);
var G__51125 = null;
var G__51126 = 0;
var G__51127 = 0;
seq__51100 = G__51124;
chunk__51101 = G__51125;
count__51102 = G__51126;
i__51103 = G__51127;
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
var G__51128 = parent;
var G__51129 = cljs.core.cons.call(null,parent,so_far);
n = G__51128;
so_far = G__51129;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__51138_51146 = cljs.core.seq.call(null,ancestors);var chunk__51139_51147 = null;var count__51140_51148 = 0;var i__51141_51149 = 0;while(true){
if((i__51141_51149 < count__51140_51148))
{var n_51150 = cljs.core._nth.call(null,chunk__51139_51147,i__51141_51149);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51150;
goog.events.fireListeners(n_51150,evt.type,true,evt);
}
{
var G__51151 = seq__51138_51146;
var G__51152 = chunk__51139_51147;
var G__51153 = count__51140_51148;
var G__51154 = (i__51141_51149 + 1);
seq__51138_51146 = G__51151;
chunk__51139_51147 = G__51152;
count__51140_51148 = G__51153;
i__51141_51149 = G__51154;
continue;
}
} else
{var temp__4126__auto___51155 = cljs.core.seq.call(null,seq__51138_51146);if(temp__4126__auto___51155)
{var seq__51138_51156__$1 = temp__4126__auto___51155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51138_51156__$1))
{var c__4297__auto___51157 = cljs.core.chunk_first.call(null,seq__51138_51156__$1);{
var G__51158 = cljs.core.chunk_rest.call(null,seq__51138_51156__$1);
var G__51159 = c__4297__auto___51157;
var G__51160 = cljs.core.count.call(null,c__4297__auto___51157);
var G__51161 = 0;
seq__51138_51146 = G__51158;
chunk__51139_51147 = G__51159;
count__51140_51148 = G__51160;
i__51141_51149 = G__51161;
continue;
}
} else
{var n_51162 = cljs.core.first.call(null,seq__51138_51156__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51162;
goog.events.fireListeners(n_51162,evt.type,true,evt);
}
{
var G__51163 = cljs.core.next.call(null,seq__51138_51156__$1);
var G__51164 = null;
var G__51165 = 0;
var G__51166 = 0;
seq__51138_51146 = G__51163;
chunk__51139_51147 = G__51164;
count__51140_51148 = G__51165;
i__51141_51149 = G__51166;
continue;
}
}
} else
{}
}
break;
}
var seq__51142_51167 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__51143_51168 = null;var count__51144_51169 = 0;var i__51145_51170 = 0;while(true){
if((i__51145_51170 < count__51144_51169))
{var n_51171 = cljs.core._nth.call(null,chunk__51143_51168,i__51145_51170);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51171;
goog.events.fireListeners(n_51171,evt.type,false,evt);
}
{
var G__51172 = seq__51142_51167;
var G__51173 = chunk__51143_51168;
var G__51174 = count__51144_51169;
var G__51175 = (i__51145_51170 + 1);
seq__51142_51167 = G__51172;
chunk__51143_51168 = G__51173;
count__51144_51169 = G__51174;
i__51145_51170 = G__51175;
continue;
}
} else
{var temp__4126__auto___51176 = cljs.core.seq.call(null,seq__51142_51167);if(temp__4126__auto___51176)
{var seq__51142_51177__$1 = temp__4126__auto___51176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51142_51177__$1))
{var c__4297__auto___51178 = cljs.core.chunk_first.call(null,seq__51142_51177__$1);{
var G__51179 = cljs.core.chunk_rest.call(null,seq__51142_51177__$1);
var G__51180 = c__4297__auto___51178;
var G__51181 = cljs.core.count.call(null,c__4297__auto___51178);
var G__51182 = 0;
seq__51142_51167 = G__51179;
chunk__51143_51168 = G__51180;
count__51144_51169 = G__51181;
i__51145_51170 = G__51182;
continue;
}
} else
{var n_51183 = cljs.core.first.call(null,seq__51142_51177__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51183;
goog.events.fireListeners(n_51183,evt.type,false,evt);
}
{
var G__51184 = cljs.core.next.call(null,seq__51142_51177__$1);
var G__51185 = null;
var G__51186 = 0;
var G__51187 = 0;
seq__51142_51167 = G__51184;
chunk__51143_51168 = G__51185;
count__51144_51169 = G__51186;
i__51145_51170 = G__51187;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__51194_51200 = cljs.core.seq.call(null,evt_map);var chunk__51195_51201 = null;var count__51196_51202 = 0;var i__51197_51203 = 0;while(true){
if((i__51197_51203 < count__51196_51202))
{var vec__51198_51204 = cljs.core._nth.call(null,chunk__51195_51201,i__51197_51203);var k_51205 = cljs.core.nth.call(null,vec__51198_51204,0,null);var v_51206 = cljs.core.nth.call(null,vec__51198_51204,1,null);(evt[k_51205] = v_51206);
{
var G__51207 = seq__51194_51200;
var G__51208 = chunk__51195_51201;
var G__51209 = count__51196_51202;
var G__51210 = (i__51197_51203 + 1);
seq__51194_51200 = G__51207;
chunk__51195_51201 = G__51208;
count__51196_51202 = G__51209;
i__51197_51203 = G__51210;
continue;
}
} else
{var temp__4126__auto___51211 = cljs.core.seq.call(null,seq__51194_51200);if(temp__4126__auto___51211)
{var seq__51194_51212__$1 = temp__4126__auto___51211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51194_51212__$1))
{var c__4297__auto___51213 = cljs.core.chunk_first.call(null,seq__51194_51212__$1);{
var G__51214 = cljs.core.chunk_rest.call(null,seq__51194_51212__$1);
var G__51215 = c__4297__auto___51213;
var G__51216 = cljs.core.count.call(null,c__4297__auto___51213);
var G__51217 = 0;
seq__51194_51200 = G__51214;
chunk__51195_51201 = G__51215;
count__51196_51202 = G__51216;
i__51197_51203 = G__51217;
continue;
}
} else
{var vec__51199_51218 = cljs.core.first.call(null,seq__51194_51212__$1);var k_51219 = cljs.core.nth.call(null,vec__51199_51218,0,null);var v_51220 = cljs.core.nth.call(null,vec__51199_51218,1,null);(evt[k_51219] = v_51220);
{
var G__51221 = cljs.core.next.call(null,seq__51194_51212__$1);
var G__51222 = null;
var G__51223 = 0;
var G__51224 = 0;
seq__51194_51200 = G__51221;
chunk__51195_51201 = G__51222;
count__51196_51202 = G__51223;
i__51197_51203 = G__51224;
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
return (function (p1__51225_SHARP_){return goog.events.getListeners(p1__51225_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map