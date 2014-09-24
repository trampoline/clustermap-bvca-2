// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj44103 = {};return obj44103;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t44107 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44107 = (function (evt,f,create_listener_function,meta44108){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44108 = meta44108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44107.cljs$lang$type = true;
domina.events.t44107.cljs$lang$ctorStr = "domina.events/t44107";
domina.events.t44107.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t44107");
});
domina.events.t44107.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44107.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t44107.prototype.domina$events$Event$ = true;
domina.events.t44107.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44107.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44107.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44107.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44107.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44107.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44109){var self__ = this;
var _44109__$1 = this;return self__.meta44108;
});
domina.events.t44107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44109,meta44108__$1){var self__ = this;
var _44109__$1 = this;return (new domina.events.t44107(self__.evt,self__.f,self__.create_listener_function,meta44108__$1));
});
domina.events.__GT_t44107 = (function __GT_t44107(evt__$1,f__$1,create_listener_function__$1,meta44108){return (new domina.events.t44107(evt__$1,f__$1,create_listener_function__$1,meta44108));
});
}
return (new domina.events.t44107(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t44107 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t44107 = (function (evt,f,create_listener_function,meta44108){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta44108 = meta44108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t44107.cljs$lang$type = true;
domina.events.t44107.cljs$lang$ctorStr = "domina.events/t44107";
domina.events.t44107.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t44107");
});
domina.events.t44107.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t44107.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t44107.prototype.domina$events$Event$ = true;
domina.events.t44107.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t44107.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t44107.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t44107.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t44107.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t44107.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t44107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44109){var self__ = this;
var _44109__$1 = this;return self__.meta44108;
});
domina.events.t44107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44109,meta44108__$1){var self__ = this;
var _44109__$1 = this;return (new domina.events.t44107(self__.evt,self__.f,self__.create_listener_function,meta44108__$1));
});
domina.events.__GT_t44107 = (function __GT_t44107(evt__$1,f__$1,create_listener_function__$1,meta44108){return (new domina.events.t44107(evt__$1,f__$1,create_listener_function__$1,meta44108));
});
}
return (new domina.events.t44107(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__44114(s__44115){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__44115__$1 = s__44115;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44115__$1);if(temp__4126__auto__)
{var s__44115__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44115__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44115__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44117 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44116 = (0);while(true){
if((i__44116 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44116);cljs.core.chunk_append(b__44117,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__44118 = (i__44116 + (1));
i__44116 = G__44118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44117),iter__44114(cljs.core.chunk_rest(s__44115__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44117),null);
}
} else
{var node = cljs.core.first(s__44115__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__44114(cljs.core.rest(s__44115__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__44127 = cljs.core.seq(domina.nodes(content));var chunk__44128 = null;var count__44129 = (0);var i__44130 = (0);while(true){
if((i__44130 < count__44129))
{var node = chunk__44128.cljs$core$IIndexed$_nth$arity$2(null,i__44130);goog.events.removeAll(node);
{
var G__44135 = seq__44127;
var G__44136 = chunk__44128;
var G__44137 = count__44129;
var G__44138 = (i__44130 + (1));
seq__44127 = G__44135;
chunk__44128 = G__44136;
count__44129 = G__44137;
i__44130 = G__44138;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44127);if(temp__4126__auto__)
{var seq__44127__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44127__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44127__$1);{
var G__44139 = cljs.core.chunk_rest(seq__44127__$1);
var G__44140 = c__4314__auto__;
var G__44141 = cljs.core.count(c__4314__auto__);
var G__44142 = (0);
seq__44127 = G__44139;
chunk__44128 = G__44140;
count__44129 = G__44141;
i__44130 = G__44142;
continue;
}
} else
{var node = cljs.core.first(seq__44127__$1);goog.events.removeAll(node);
{
var G__44143 = cljs.core.next(seq__44127__$1);
var G__44144 = null;
var G__44145 = (0);
var G__44146 = (0);
seq__44127 = G__44143;
chunk__44128 = G__44144;
count__44129 = G__44145;
i__44130 = G__44146;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__44131 = cljs.core.seq(domina.nodes(content));var chunk__44132 = null;var count__44133 = (0);var i__44134 = (0);while(true){
if((i__44134 < count__44133))
{var node = chunk__44132.cljs$core$IIndexed$_nth$arity$2(null,i__44134);goog.events.removeAll(node,type__$1);
{
var G__44147 = seq__44131;
var G__44148 = chunk__44132;
var G__44149 = count__44133;
var G__44150 = (i__44134 + (1));
seq__44131 = G__44147;
chunk__44132 = G__44148;
count__44133 = G__44149;
i__44134 = G__44150;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44131);if(temp__4126__auto__)
{var seq__44131__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44131__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44131__$1);{
var G__44151 = cljs.core.chunk_rest(seq__44131__$1);
var G__44152 = c__4314__auto__;
var G__44153 = cljs.core.count(c__4314__auto__);
var G__44154 = (0);
seq__44131 = G__44151;
chunk__44132 = G__44152;
count__44133 = G__44153;
i__44134 = G__44154;
continue;
}
} else
{var node = cljs.core.first(seq__44131__$1);goog.events.removeAll(node,type__$1);
{
var G__44155 = cljs.core.next(seq__44131__$1);
var G__44156 = null;
var G__44157 = (0);
var G__44158 = (0);
seq__44131 = G__44155;
chunk__44132 = G__44156;
count__44133 = G__44157;
i__44134 = G__44158;
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
var G__44159 = parent;
var G__44160 = cljs.core.cons(parent,so_far);
n = G__44159;
so_far = G__44160;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__44169_44177 = cljs.core.seq(ancestors);var chunk__44170_44178 = null;var count__44171_44179 = (0);var i__44172_44180 = (0);while(true){
if((i__44172_44180 < count__44171_44179))
{var n_44181 = chunk__44170_44178.cljs$core$IIndexed$_nth$arity$2(null,i__44172_44180);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44181;
goog.events.fireListeners(n_44181,evt.type,true,evt);
}
{
var G__44182 = seq__44169_44177;
var G__44183 = chunk__44170_44178;
var G__44184 = count__44171_44179;
var G__44185 = (i__44172_44180 + (1));
seq__44169_44177 = G__44182;
chunk__44170_44178 = G__44183;
count__44171_44179 = G__44184;
i__44172_44180 = G__44185;
continue;
}
} else
{var temp__4126__auto___44186 = cljs.core.seq(seq__44169_44177);if(temp__4126__auto___44186)
{var seq__44169_44187__$1 = temp__4126__auto___44186;if(cljs.core.chunked_seq_QMARK_(seq__44169_44187__$1))
{var c__4314__auto___44188 = cljs.core.chunk_first(seq__44169_44187__$1);{
var G__44189 = cljs.core.chunk_rest(seq__44169_44187__$1);
var G__44190 = c__4314__auto___44188;
var G__44191 = cljs.core.count(c__4314__auto___44188);
var G__44192 = (0);
seq__44169_44177 = G__44189;
chunk__44170_44178 = G__44190;
count__44171_44179 = G__44191;
i__44172_44180 = G__44192;
continue;
}
} else
{var n_44193 = cljs.core.first(seq__44169_44187__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44193;
goog.events.fireListeners(n_44193,evt.type,true,evt);
}
{
var G__44194 = cljs.core.next(seq__44169_44187__$1);
var G__44195 = null;
var G__44196 = (0);
var G__44197 = (0);
seq__44169_44177 = G__44194;
chunk__44170_44178 = G__44195;
count__44171_44179 = G__44196;
i__44172_44180 = G__44197;
continue;
}
}
} else
{}
}
break;
}
var seq__44173_44198 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__44174_44199 = null;var count__44175_44200 = (0);var i__44176_44201 = (0);while(true){
if((i__44176_44201 < count__44175_44200))
{var n_44202 = chunk__44174_44199.cljs$core$IIndexed$_nth$arity$2(null,i__44176_44201);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44202;
goog.events.fireListeners(n_44202,evt.type,false,evt);
}
{
var G__44203 = seq__44173_44198;
var G__44204 = chunk__44174_44199;
var G__44205 = count__44175_44200;
var G__44206 = (i__44176_44201 + (1));
seq__44173_44198 = G__44203;
chunk__44174_44199 = G__44204;
count__44175_44200 = G__44205;
i__44176_44201 = G__44206;
continue;
}
} else
{var temp__4126__auto___44207 = cljs.core.seq(seq__44173_44198);if(temp__4126__auto___44207)
{var seq__44173_44208__$1 = temp__4126__auto___44207;if(cljs.core.chunked_seq_QMARK_(seq__44173_44208__$1))
{var c__4314__auto___44209 = cljs.core.chunk_first(seq__44173_44208__$1);{
var G__44210 = cljs.core.chunk_rest(seq__44173_44208__$1);
var G__44211 = c__4314__auto___44209;
var G__44212 = cljs.core.count(c__4314__auto___44209);
var G__44213 = (0);
seq__44173_44198 = G__44210;
chunk__44174_44199 = G__44211;
count__44175_44200 = G__44212;
i__44176_44201 = G__44213;
continue;
}
} else
{var n_44214 = cljs.core.first(seq__44173_44208__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_44214;
goog.events.fireListeners(n_44214,evt.type,false,evt);
}
{
var G__44215 = cljs.core.next(seq__44173_44208__$1);
var G__44216 = null;
var G__44217 = (0);
var G__44218 = (0);
seq__44173_44198 = G__44215;
chunk__44174_44199 = G__44216;
count__44175_44200 = G__44217;
i__44176_44201 = G__44218;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__44225_44231 = cljs.core.seq(evt_map);var chunk__44226_44232 = null;var count__44227_44233 = (0);var i__44228_44234 = (0);while(true){
if((i__44228_44234 < count__44227_44233))
{var vec__44229_44235 = chunk__44226_44232.cljs$core$IIndexed$_nth$arity$2(null,i__44228_44234);var k_44236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229_44235,(0),null);var v_44237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44229_44235,(1),null);(evt[k_44236] = v_44237);
{
var G__44238 = seq__44225_44231;
var G__44239 = chunk__44226_44232;
var G__44240 = count__44227_44233;
var G__44241 = (i__44228_44234 + (1));
seq__44225_44231 = G__44238;
chunk__44226_44232 = G__44239;
count__44227_44233 = G__44240;
i__44228_44234 = G__44241;
continue;
}
} else
{var temp__4126__auto___44242 = cljs.core.seq(seq__44225_44231);if(temp__4126__auto___44242)
{var seq__44225_44243__$1 = temp__4126__auto___44242;if(cljs.core.chunked_seq_QMARK_(seq__44225_44243__$1))
{var c__4314__auto___44244 = cljs.core.chunk_first(seq__44225_44243__$1);{
var G__44245 = cljs.core.chunk_rest(seq__44225_44243__$1);
var G__44246 = c__4314__auto___44244;
var G__44247 = cljs.core.count(c__4314__auto___44244);
var G__44248 = (0);
seq__44225_44231 = G__44245;
chunk__44226_44232 = G__44246;
count__44227_44233 = G__44247;
i__44228_44234 = G__44248;
continue;
}
} else
{var vec__44230_44249 = cljs.core.first(seq__44225_44243__$1);var k_44250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230_44249,(0),null);var v_44251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44230_44249,(1),null);(evt[k_44250] = v_44251);
{
var G__44252 = cljs.core.next(seq__44225_44243__$1);
var G__44253 = null;
var G__44254 = (0);
var G__44255 = (0);
seq__44225_44231 = G__44252;
chunk__44226_44232 = G__44253;
count__44227_44233 = G__44254;
i__44228_44234 = G__44255;
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
return (function (p1__44256_SHARP_){return goog.events.getListeners(p1__44256_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
