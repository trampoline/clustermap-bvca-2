// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj52631 = {};return obj52631;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t52635 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52635 = (function (evt,f,create_listener_function,meta52636){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52636 = meta52636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52635.cljs$lang$type = true;
domina.events.t52635.cljs$lang$ctorStr = "domina.events/t52635";
domina.events.t52635.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52635");
});
domina.events.t52635.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52635.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52635.prototype.domina$events$Event$ = true;
domina.events.t52635.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52635.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52635.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52635.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52635.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52635.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52637){var self__ = this;
var _52637__$1 = this;return self__.meta52636;
});
domina.events.t52635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52637,meta52636__$1){var self__ = this;
var _52637__$1 = this;return (new domina.events.t52635(self__.evt,self__.f,self__.create_listener_function,meta52636__$1));
});
domina.events.__GT_t52635 = (function __GT_t52635(evt__$1,f__$1,create_listener_function__$1,meta52636){return (new domina.events.t52635(evt__$1,f__$1,create_listener_function__$1,meta52636));
});
}
return (new domina.events.t52635(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t52635 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52635 = (function (evt,f,create_listener_function,meta52636){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52636 = meta52636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52635.cljs$lang$type = true;
domina.events.t52635.cljs$lang$ctorStr = "domina.events/t52635";
domina.events.t52635.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52635");
});
domina.events.t52635.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52635.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52635.prototype.domina$events$Event$ = true;
domina.events.t52635.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52635.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52635.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52635.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52635.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52635.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52637){var self__ = this;
var _52637__$1 = this;return self__.meta52636;
});
domina.events.t52635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52637,meta52636__$1){var self__ = this;
var _52637__$1 = this;return (new domina.events.t52635(self__.evt,self__.f,self__.create_listener_function,meta52636__$1));
});
domina.events.__GT_t52635 = (function __GT_t52635(evt__$1,f__$1,create_listener_function__$1,meta52636){return (new domina.events.t52635(evt__$1,f__$1,create_listener_function__$1,meta52636));
});
}
return (new domina.events.t52635(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__52642(s__52643){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__52643__$1 = s__52643;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52643__$1);if(temp__4126__auto__)
{var s__52643__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52643__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52643__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52645 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52644 = (0);while(true){
if((i__52644 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52644);cljs.core.chunk_append(b__52645,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__52646 = (i__52644 + (1));
i__52644 = G__52646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52645),iter__52642(cljs.core.chunk_rest(s__52643__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52645),null);
}
} else
{var node = cljs.core.first(s__52643__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__52642(cljs.core.rest(s__52643__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__52655 = cljs.core.seq(domina.nodes(content));var chunk__52656 = null;var count__52657 = (0);var i__52658 = (0);while(true){
if((i__52658 < count__52657))
{var node = chunk__52656.cljs$core$IIndexed$_nth$arity$2(null,i__52658);goog.events.removeAll(node);
{
var G__52663 = seq__52655;
var G__52664 = chunk__52656;
var G__52665 = count__52657;
var G__52666 = (i__52658 + (1));
seq__52655 = G__52663;
chunk__52656 = G__52664;
count__52657 = G__52665;
i__52658 = G__52666;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52655);if(temp__4126__auto__)
{var seq__52655__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52655__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52655__$1);{
var G__52667 = cljs.core.chunk_rest(seq__52655__$1);
var G__52668 = c__4314__auto__;
var G__52669 = cljs.core.count(c__4314__auto__);
var G__52670 = (0);
seq__52655 = G__52667;
chunk__52656 = G__52668;
count__52657 = G__52669;
i__52658 = G__52670;
continue;
}
} else
{var node = cljs.core.first(seq__52655__$1);goog.events.removeAll(node);
{
var G__52671 = cljs.core.next(seq__52655__$1);
var G__52672 = null;
var G__52673 = (0);
var G__52674 = (0);
seq__52655 = G__52671;
chunk__52656 = G__52672;
count__52657 = G__52673;
i__52658 = G__52674;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__52659 = cljs.core.seq(domina.nodes(content));var chunk__52660 = null;var count__52661 = (0);var i__52662 = (0);while(true){
if((i__52662 < count__52661))
{var node = chunk__52660.cljs$core$IIndexed$_nth$arity$2(null,i__52662);goog.events.removeAll(node,type__$1);
{
var G__52675 = seq__52659;
var G__52676 = chunk__52660;
var G__52677 = count__52661;
var G__52678 = (i__52662 + (1));
seq__52659 = G__52675;
chunk__52660 = G__52676;
count__52661 = G__52677;
i__52662 = G__52678;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52659);if(temp__4126__auto__)
{var seq__52659__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52659__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52659__$1);{
var G__52679 = cljs.core.chunk_rest(seq__52659__$1);
var G__52680 = c__4314__auto__;
var G__52681 = cljs.core.count(c__4314__auto__);
var G__52682 = (0);
seq__52659 = G__52679;
chunk__52660 = G__52680;
count__52661 = G__52681;
i__52662 = G__52682;
continue;
}
} else
{var node = cljs.core.first(seq__52659__$1);goog.events.removeAll(node,type__$1);
{
var G__52683 = cljs.core.next(seq__52659__$1);
var G__52684 = null;
var G__52685 = (0);
var G__52686 = (0);
seq__52659 = G__52683;
chunk__52660 = G__52684;
count__52661 = G__52685;
i__52662 = G__52686;
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
var G__52687 = parent;
var G__52688 = cljs.core.cons(parent,so_far);
n = G__52687;
so_far = G__52688;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__52697_52705 = cljs.core.seq(ancestors);var chunk__52698_52706 = null;var count__52699_52707 = (0);var i__52700_52708 = (0);while(true){
if((i__52700_52708 < count__52699_52707))
{var n_52709 = chunk__52698_52706.cljs$core$IIndexed$_nth$arity$2(null,i__52700_52708);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52709;
goog.events.fireListeners(n_52709,evt.type,true,evt);
}
{
var G__52710 = seq__52697_52705;
var G__52711 = chunk__52698_52706;
var G__52712 = count__52699_52707;
var G__52713 = (i__52700_52708 + (1));
seq__52697_52705 = G__52710;
chunk__52698_52706 = G__52711;
count__52699_52707 = G__52712;
i__52700_52708 = G__52713;
continue;
}
} else
{var temp__4126__auto___52714 = cljs.core.seq(seq__52697_52705);if(temp__4126__auto___52714)
{var seq__52697_52715__$1 = temp__4126__auto___52714;if(cljs.core.chunked_seq_QMARK_(seq__52697_52715__$1))
{var c__4314__auto___52716 = cljs.core.chunk_first(seq__52697_52715__$1);{
var G__52717 = cljs.core.chunk_rest(seq__52697_52715__$1);
var G__52718 = c__4314__auto___52716;
var G__52719 = cljs.core.count(c__4314__auto___52716);
var G__52720 = (0);
seq__52697_52705 = G__52717;
chunk__52698_52706 = G__52718;
count__52699_52707 = G__52719;
i__52700_52708 = G__52720;
continue;
}
} else
{var n_52721 = cljs.core.first(seq__52697_52715__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52721;
goog.events.fireListeners(n_52721,evt.type,true,evt);
}
{
var G__52722 = cljs.core.next(seq__52697_52715__$1);
var G__52723 = null;
var G__52724 = (0);
var G__52725 = (0);
seq__52697_52705 = G__52722;
chunk__52698_52706 = G__52723;
count__52699_52707 = G__52724;
i__52700_52708 = G__52725;
continue;
}
}
} else
{}
}
break;
}
var seq__52701_52726 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__52702_52727 = null;var count__52703_52728 = (0);var i__52704_52729 = (0);while(true){
if((i__52704_52729 < count__52703_52728))
{var n_52730 = chunk__52702_52727.cljs$core$IIndexed$_nth$arity$2(null,i__52704_52729);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52730;
goog.events.fireListeners(n_52730,evt.type,false,evt);
}
{
var G__52731 = seq__52701_52726;
var G__52732 = chunk__52702_52727;
var G__52733 = count__52703_52728;
var G__52734 = (i__52704_52729 + (1));
seq__52701_52726 = G__52731;
chunk__52702_52727 = G__52732;
count__52703_52728 = G__52733;
i__52704_52729 = G__52734;
continue;
}
} else
{var temp__4126__auto___52735 = cljs.core.seq(seq__52701_52726);if(temp__4126__auto___52735)
{var seq__52701_52736__$1 = temp__4126__auto___52735;if(cljs.core.chunked_seq_QMARK_(seq__52701_52736__$1))
{var c__4314__auto___52737 = cljs.core.chunk_first(seq__52701_52736__$1);{
var G__52738 = cljs.core.chunk_rest(seq__52701_52736__$1);
var G__52739 = c__4314__auto___52737;
var G__52740 = cljs.core.count(c__4314__auto___52737);
var G__52741 = (0);
seq__52701_52726 = G__52738;
chunk__52702_52727 = G__52739;
count__52703_52728 = G__52740;
i__52704_52729 = G__52741;
continue;
}
} else
{var n_52742 = cljs.core.first(seq__52701_52736__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52742;
goog.events.fireListeners(n_52742,evt.type,false,evt);
}
{
var G__52743 = cljs.core.next(seq__52701_52736__$1);
var G__52744 = null;
var G__52745 = (0);
var G__52746 = (0);
seq__52701_52726 = G__52743;
chunk__52702_52727 = G__52744;
count__52703_52728 = G__52745;
i__52704_52729 = G__52746;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__52753_52759 = cljs.core.seq(evt_map);var chunk__52754_52760 = null;var count__52755_52761 = (0);var i__52756_52762 = (0);while(true){
if((i__52756_52762 < count__52755_52761))
{var vec__52757_52763 = chunk__52754_52760.cljs$core$IIndexed$_nth$arity$2(null,i__52756_52762);var k_52764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52757_52763,(0),null);var v_52765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52757_52763,(1),null);(evt[k_52764] = v_52765);
{
var G__52766 = seq__52753_52759;
var G__52767 = chunk__52754_52760;
var G__52768 = count__52755_52761;
var G__52769 = (i__52756_52762 + (1));
seq__52753_52759 = G__52766;
chunk__52754_52760 = G__52767;
count__52755_52761 = G__52768;
i__52756_52762 = G__52769;
continue;
}
} else
{var temp__4126__auto___52770 = cljs.core.seq(seq__52753_52759);if(temp__4126__auto___52770)
{var seq__52753_52771__$1 = temp__4126__auto___52770;if(cljs.core.chunked_seq_QMARK_(seq__52753_52771__$1))
{var c__4314__auto___52772 = cljs.core.chunk_first(seq__52753_52771__$1);{
var G__52773 = cljs.core.chunk_rest(seq__52753_52771__$1);
var G__52774 = c__4314__auto___52772;
var G__52775 = cljs.core.count(c__4314__auto___52772);
var G__52776 = (0);
seq__52753_52759 = G__52773;
chunk__52754_52760 = G__52774;
count__52755_52761 = G__52775;
i__52756_52762 = G__52776;
continue;
}
} else
{var vec__52758_52777 = cljs.core.first(seq__52753_52771__$1);var k_52778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52758_52777,(0),null);var v_52779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52758_52777,(1),null);(evt[k_52778] = v_52779);
{
var G__52780 = cljs.core.next(seq__52753_52771__$1);
var G__52781 = null;
var G__52782 = (0);
var G__52783 = (0);
seq__52753_52759 = G__52780;
chunk__52754_52760 = G__52781;
count__52755_52761 = G__52782;
i__52756_52762 = G__52783;
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
return (function (p1__52784_SHARP_){return goog.events.getListeners(p1__52784_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
