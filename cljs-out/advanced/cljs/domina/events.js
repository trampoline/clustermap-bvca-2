// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj39946 = {};return obj39946;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t39950 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39950 = (function (evt,f,create_listener_function,meta39951){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39951 = meta39951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39950.cljs$lang$type = true;
domina.events.t39950.cljs$lang$ctorStr = "domina.events/t39950";
domina.events.t39950.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"domina.events/t39950");
});
domina.events.t39950.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39950.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t39950.prototype.domina$events$Event$ = true;
domina.events.t39950.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39950.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39950.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39950.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39950.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39950.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39952){var self__ = this;
var _39952__$1 = this;return self__.meta39951;
});
domina.events.t39950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39952,meta39951__$1){var self__ = this;
var _39952__$1 = this;return (new domina.events.t39950(self__.evt,self__.f,self__.create_listener_function,meta39951__$1));
});
domina.events.__GT_t39950 = (function __GT_t39950(evt__$1,f__$1,create_listener_function__$1,meta39951){return (new domina.events.t39950(evt__$1,f__$1,create_listener_function__$1,meta39951));
});
}
return (new domina.events.t39950(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t39950 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t39950 = (function (evt,f,create_listener_function,meta39951){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta39951 = meta39951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t39950.cljs$lang$type = true;
domina.events.t39950.cljs$lang$ctorStr = "domina.events/t39950";
domina.events.t39950.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"domina.events/t39950");
});
domina.events.t39950.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t39950.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t39950.prototype.domina$events$Event$ = true;
domina.events.t39950.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t39950.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t39950.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t39950.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t39950.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t39950.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t39950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39952){var self__ = this;
var _39952__$1 = this;return self__.meta39951;
});
domina.events.t39950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39952,meta39951__$1){var self__ = this;
var _39952__$1 = this;return (new domina.events.t39950(self__.evt,self__.f,self__.create_listener_function,meta39951__$1));
});
domina.events.__GT_t39950 = (function __GT_t39950(evt__$1,f__$1,create_listener_function__$1,meta39951){return (new domina.events.t39950(evt__$1,f__$1,create_listener_function__$1,meta39951));
});
}
return (new domina.events.t39950(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__39957(s__39958){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__39958__$1 = s__39958;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39958__$1);if(temp__4126__auto__)
{var s__39958__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39958__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__39958__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__39960 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__39959 = 0;while(true){
if((i__39959 < size__4265__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__39959);cljs.core.chunk_append(b__39960,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__39961 = (i__39959 + 1);
i__39959 = G__39961;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39960),iter__39957(cljs.core.chunk_rest(s__39958__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39960),null);
}
} else
{var node = cljs.core.first(s__39958__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__39957(cljs.core.rest(s__39958__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__39970 = cljs.core.seq(domina.nodes(content));var chunk__39971 = null;var count__39972 = 0;var i__39973 = 0;while(true){
if((i__39973 < count__39972))
{var node = chunk__39971.cljs$core$IIndexed$_nth$arity$2(null,i__39973);goog.events.removeAll(node);
{
var G__39978 = seq__39970;
var G__39979 = chunk__39971;
var G__39980 = count__39972;
var G__39981 = (i__39973 + 1);
seq__39970 = G__39978;
chunk__39971 = G__39979;
count__39972 = G__39980;
i__39973 = G__39981;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39970);if(temp__4126__auto__)
{var seq__39970__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39970__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__39970__$1);{
var G__39982 = cljs.core.chunk_rest(seq__39970__$1);
var G__39983 = c__4297__auto__;
var G__39984 = cljs.core.count(c__4297__auto__);
var G__39985 = 0;
seq__39970 = G__39982;
chunk__39971 = G__39983;
count__39972 = G__39984;
i__39973 = G__39985;
continue;
}
} else
{var node = cljs.core.first(seq__39970__$1);goog.events.removeAll(node);
{
var G__39986 = cljs.core.next(seq__39970__$1);
var G__39987 = null;
var G__39988 = 0;
var G__39989 = 0;
seq__39970 = G__39986;
chunk__39971 = G__39987;
count__39972 = G__39988;
i__39973 = G__39989;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__39974 = cljs.core.seq(domina.nodes(content));var chunk__39975 = null;var count__39976 = 0;var i__39977 = 0;while(true){
if((i__39977 < count__39976))
{var node = chunk__39975.cljs$core$IIndexed$_nth$arity$2(null,i__39977);goog.events.removeAll(node,type__$1);
{
var G__39990 = seq__39974;
var G__39991 = chunk__39975;
var G__39992 = count__39976;
var G__39993 = (i__39977 + 1);
seq__39974 = G__39990;
chunk__39975 = G__39991;
count__39976 = G__39992;
i__39977 = G__39993;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39974);if(temp__4126__auto__)
{var seq__39974__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39974__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__39974__$1);{
var G__39994 = cljs.core.chunk_rest(seq__39974__$1);
var G__39995 = c__4297__auto__;
var G__39996 = cljs.core.count(c__4297__auto__);
var G__39997 = 0;
seq__39974 = G__39994;
chunk__39975 = G__39995;
count__39976 = G__39996;
i__39977 = G__39997;
continue;
}
} else
{var node = cljs.core.first(seq__39974__$1);goog.events.removeAll(node,type__$1);
{
var G__39998 = cljs.core.next(seq__39974__$1);
var G__39999 = null;
var G__40000 = 0;
var G__40001 = 0;
seq__39974 = G__39998;
chunk__39975 = G__39999;
count__39976 = G__40000;
i__39977 = G__40001;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__40002 = parent;
var G__40003 = cljs.core.cons(parent,so_far);
n = G__40002;
so_far = G__40003;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__40012_40020 = cljs.core.seq(ancestors);var chunk__40013_40021 = null;var count__40014_40022 = 0;var i__40015_40023 = 0;while(true){
if((i__40015_40023 < count__40014_40022))
{var n_40024 = chunk__40013_40021.cljs$core$IIndexed$_nth$arity$2(null,i__40015_40023);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40024;
goog.events.fireListeners(n_40024,evt.type,true,evt);
}
{
var G__40025 = seq__40012_40020;
var G__40026 = chunk__40013_40021;
var G__40027 = count__40014_40022;
var G__40028 = (i__40015_40023 + 1);
seq__40012_40020 = G__40025;
chunk__40013_40021 = G__40026;
count__40014_40022 = G__40027;
i__40015_40023 = G__40028;
continue;
}
} else
{var temp__4126__auto___40029 = cljs.core.seq(seq__40012_40020);if(temp__4126__auto___40029)
{var seq__40012_40030__$1 = temp__4126__auto___40029;if(cljs.core.chunked_seq_QMARK_(seq__40012_40030__$1))
{var c__4297__auto___40031 = cljs.core.chunk_first(seq__40012_40030__$1);{
var G__40032 = cljs.core.chunk_rest(seq__40012_40030__$1);
var G__40033 = c__4297__auto___40031;
var G__40034 = cljs.core.count(c__4297__auto___40031);
var G__40035 = 0;
seq__40012_40020 = G__40032;
chunk__40013_40021 = G__40033;
count__40014_40022 = G__40034;
i__40015_40023 = G__40035;
continue;
}
} else
{var n_40036 = cljs.core.first(seq__40012_40030__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40036;
goog.events.fireListeners(n_40036,evt.type,true,evt);
}
{
var G__40037 = cljs.core.next(seq__40012_40030__$1);
var G__40038 = null;
var G__40039 = 0;
var G__40040 = 0;
seq__40012_40020 = G__40037;
chunk__40013_40021 = G__40038;
count__40014_40022 = G__40039;
i__40015_40023 = G__40040;
continue;
}
}
} else
{}
}
break;
}
var seq__40016_40041 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__40017_40042 = null;var count__40018_40043 = 0;var i__40019_40044 = 0;while(true){
if((i__40019_40044 < count__40018_40043))
{var n_40045 = chunk__40017_40042.cljs$core$IIndexed$_nth$arity$2(null,i__40019_40044);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40045;
goog.events.fireListeners(n_40045,evt.type,false,evt);
}
{
var G__40046 = seq__40016_40041;
var G__40047 = chunk__40017_40042;
var G__40048 = count__40018_40043;
var G__40049 = (i__40019_40044 + 1);
seq__40016_40041 = G__40046;
chunk__40017_40042 = G__40047;
count__40018_40043 = G__40048;
i__40019_40044 = G__40049;
continue;
}
} else
{var temp__4126__auto___40050 = cljs.core.seq(seq__40016_40041);if(temp__4126__auto___40050)
{var seq__40016_40051__$1 = temp__4126__auto___40050;if(cljs.core.chunked_seq_QMARK_(seq__40016_40051__$1))
{var c__4297__auto___40052 = cljs.core.chunk_first(seq__40016_40051__$1);{
var G__40053 = cljs.core.chunk_rest(seq__40016_40051__$1);
var G__40054 = c__4297__auto___40052;
var G__40055 = cljs.core.count(c__4297__auto___40052);
var G__40056 = 0;
seq__40016_40041 = G__40053;
chunk__40017_40042 = G__40054;
count__40018_40043 = G__40055;
i__40019_40044 = G__40056;
continue;
}
} else
{var n_40057 = cljs.core.first(seq__40016_40051__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_40057;
goog.events.fireListeners(n_40057,evt.type,false,evt);
}
{
var G__40058 = cljs.core.next(seq__40016_40051__$1);
var G__40059 = null;
var G__40060 = 0;
var G__40061 = 0;
seq__40016_40041 = G__40058;
chunk__40017_40042 = G__40059;
count__40018_40043 = G__40060;
i__40019_40044 = G__40061;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__40068_40074 = cljs.core.seq(evt_map);var chunk__40069_40075 = null;var count__40070_40076 = 0;var i__40071_40077 = 0;while(true){
if((i__40071_40077 < count__40070_40076))
{var vec__40072_40078 = chunk__40069_40075.cljs$core$IIndexed$_nth$arity$2(null,i__40071_40077);var k_40079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40072_40078,0,null);var v_40080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40072_40078,1,null);(evt[k_40079] = v_40080);
{
var G__40081 = seq__40068_40074;
var G__40082 = chunk__40069_40075;
var G__40083 = count__40070_40076;
var G__40084 = (i__40071_40077 + 1);
seq__40068_40074 = G__40081;
chunk__40069_40075 = G__40082;
count__40070_40076 = G__40083;
i__40071_40077 = G__40084;
continue;
}
} else
{var temp__4126__auto___40085 = cljs.core.seq(seq__40068_40074);if(temp__4126__auto___40085)
{var seq__40068_40086__$1 = temp__4126__auto___40085;if(cljs.core.chunked_seq_QMARK_(seq__40068_40086__$1))
{var c__4297__auto___40087 = cljs.core.chunk_first(seq__40068_40086__$1);{
var G__40088 = cljs.core.chunk_rest(seq__40068_40086__$1);
var G__40089 = c__4297__auto___40087;
var G__40090 = cljs.core.count(c__4297__auto___40087);
var G__40091 = 0;
seq__40068_40074 = G__40088;
chunk__40069_40075 = G__40089;
count__40070_40076 = G__40090;
i__40071_40077 = G__40091;
continue;
}
} else
{var vec__40073_40092 = cljs.core.first(seq__40068_40086__$1);var k_40093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40073_40092,0,null);var v_40094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40073_40092,1,null);(evt[k_40093] = v_40094);
{
var G__40095 = cljs.core.next(seq__40068_40086__$1);
var G__40096 = null;
var G__40097 = 0;
var G__40098 = 0;
seq__40068_40074 = G__40095;
chunk__40069_40075 = G__40096;
count__40070_40076 = G__40097;
i__40071_40077 = G__40098;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (type__$1){
return (function (p1__40099_SHARP_){return goog.events.getListeners(p1__40099_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
