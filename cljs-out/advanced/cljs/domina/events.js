// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj52640 = {};return obj52640;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t52644 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52644 = (function (evt,f,create_listener_function,meta52645){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52645 = meta52645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52644.cljs$lang$type = true;
domina.events.t52644.cljs$lang$ctorStr = "domina.events/t52644";
domina.events.t52644.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52644");
});
domina.events.t52644.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52644.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52644.prototype.domina$events$Event$ = true;
domina.events.t52644.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52644.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52644.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52644.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52644.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52644.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52646){var self__ = this;
var _52646__$1 = this;return self__.meta52645;
});
domina.events.t52644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52646,meta52645__$1){var self__ = this;
var _52646__$1 = this;return (new domina.events.t52644(self__.evt,self__.f,self__.create_listener_function,meta52645__$1));
});
domina.events.__GT_t52644 = (function __GT_t52644(evt__$1,f__$1,create_listener_function__$1,meta52645){return (new domina.events.t52644(evt__$1,f__$1,create_listener_function__$1,meta52645));
});
}
return (new domina.events.t52644(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t52644 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t52644 = (function (evt,f,create_listener_function,meta52645){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta52645 = meta52645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t52644.cljs$lang$type = true;
domina.events.t52644.cljs$lang$ctorStr = "domina.events/t52644";
domina.events.t52644.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"domina.events/t52644");
});
domina.events.t52644.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t52644.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t52644.prototype.domina$events$Event$ = true;
domina.events.t52644.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t52644.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t52644.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t52644.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t52644.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t52644.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t52644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52646){var self__ = this;
var _52646__$1 = this;return self__.meta52645;
});
domina.events.t52644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52646,meta52645__$1){var self__ = this;
var _52646__$1 = this;return (new domina.events.t52644(self__.evt,self__.f,self__.create_listener_function,meta52645__$1));
});
domina.events.__GT_t52644 = (function __GT_t52644(evt__$1,f__$1,create_listener_function__$1,meta52645){return (new domina.events.t52644(evt__$1,f__$1,create_listener_function__$1,meta52645));
});
}
return (new domina.events.t52644(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__52651(s__52652){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__52652__$1 = s__52652;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52652__$1);if(temp__4126__auto__)
{var s__52652__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52652__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__52652__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__52654 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__52653 = (0);while(true){
if((i__52653 < size__4282__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__52653);cljs.core.chunk_append(b__52654,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__52655 = (i__52653 + (1));
i__52653 = G__52655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52654),iter__52651(cljs.core.chunk_rest(s__52652__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52654),null);
}
} else
{var node = cljs.core.first(s__52652__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__52651(cljs.core.rest(s__52652__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__52664 = cljs.core.seq(domina.nodes(content));var chunk__52665 = null;var count__52666 = (0);var i__52667 = (0);while(true){
if((i__52667 < count__52666))
{var node = chunk__52665.cljs$core$IIndexed$_nth$arity$2(null,i__52667);goog.events.removeAll(node);
{
var G__52672 = seq__52664;
var G__52673 = chunk__52665;
var G__52674 = count__52666;
var G__52675 = (i__52667 + (1));
seq__52664 = G__52672;
chunk__52665 = G__52673;
count__52666 = G__52674;
i__52667 = G__52675;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52664);if(temp__4126__auto__)
{var seq__52664__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52664__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52664__$1);{
var G__52676 = cljs.core.chunk_rest(seq__52664__$1);
var G__52677 = c__4314__auto__;
var G__52678 = cljs.core.count(c__4314__auto__);
var G__52679 = (0);
seq__52664 = G__52676;
chunk__52665 = G__52677;
count__52666 = G__52678;
i__52667 = G__52679;
continue;
}
} else
{var node = cljs.core.first(seq__52664__$1);goog.events.removeAll(node);
{
var G__52680 = cljs.core.next(seq__52664__$1);
var G__52681 = null;
var G__52682 = (0);
var G__52683 = (0);
seq__52664 = G__52680;
chunk__52665 = G__52681;
count__52666 = G__52682;
i__52667 = G__52683;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__52668 = cljs.core.seq(domina.nodes(content));var chunk__52669 = null;var count__52670 = (0);var i__52671 = (0);while(true){
if((i__52671 < count__52670))
{var node = chunk__52669.cljs$core$IIndexed$_nth$arity$2(null,i__52671);goog.events.removeAll(node,type__$1);
{
var G__52684 = seq__52668;
var G__52685 = chunk__52669;
var G__52686 = count__52670;
var G__52687 = (i__52671 + (1));
seq__52668 = G__52684;
chunk__52669 = G__52685;
count__52670 = G__52686;
i__52671 = G__52687;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__52668);if(temp__4126__auto__)
{var seq__52668__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__52668__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__52668__$1);{
var G__52688 = cljs.core.chunk_rest(seq__52668__$1);
var G__52689 = c__4314__auto__;
var G__52690 = cljs.core.count(c__4314__auto__);
var G__52691 = (0);
seq__52668 = G__52688;
chunk__52669 = G__52689;
count__52670 = G__52690;
i__52671 = G__52691;
continue;
}
} else
{var node = cljs.core.first(seq__52668__$1);goog.events.removeAll(node,type__$1);
{
var G__52692 = cljs.core.next(seq__52668__$1);
var G__52693 = null;
var G__52694 = (0);
var G__52695 = (0);
seq__52668 = G__52692;
chunk__52669 = G__52693;
count__52670 = G__52694;
i__52671 = G__52695;
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
var G__52696 = parent;
var G__52697 = cljs.core.cons(parent,so_far);
n = G__52696;
so_far = G__52697;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__52706_52714 = cljs.core.seq(ancestors);var chunk__52707_52715 = null;var count__52708_52716 = (0);var i__52709_52717 = (0);while(true){
if((i__52709_52717 < count__52708_52716))
{var n_52718 = chunk__52707_52715.cljs$core$IIndexed$_nth$arity$2(null,i__52709_52717);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52718;
goog.events.fireListeners(n_52718,evt.type,true,evt);
}
{
var G__52719 = seq__52706_52714;
var G__52720 = chunk__52707_52715;
var G__52721 = count__52708_52716;
var G__52722 = (i__52709_52717 + (1));
seq__52706_52714 = G__52719;
chunk__52707_52715 = G__52720;
count__52708_52716 = G__52721;
i__52709_52717 = G__52722;
continue;
}
} else
{var temp__4126__auto___52723 = cljs.core.seq(seq__52706_52714);if(temp__4126__auto___52723)
{var seq__52706_52724__$1 = temp__4126__auto___52723;if(cljs.core.chunked_seq_QMARK_(seq__52706_52724__$1))
{var c__4314__auto___52725 = cljs.core.chunk_first(seq__52706_52724__$1);{
var G__52726 = cljs.core.chunk_rest(seq__52706_52724__$1);
var G__52727 = c__4314__auto___52725;
var G__52728 = cljs.core.count(c__4314__auto___52725);
var G__52729 = (0);
seq__52706_52714 = G__52726;
chunk__52707_52715 = G__52727;
count__52708_52716 = G__52728;
i__52709_52717 = G__52729;
continue;
}
} else
{var n_52730 = cljs.core.first(seq__52706_52724__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52730;
goog.events.fireListeners(n_52730,evt.type,true,evt);
}
{
var G__52731 = cljs.core.next(seq__52706_52724__$1);
var G__52732 = null;
var G__52733 = (0);
var G__52734 = (0);
seq__52706_52714 = G__52731;
chunk__52707_52715 = G__52732;
count__52708_52716 = G__52733;
i__52709_52717 = G__52734;
continue;
}
}
} else
{}
}
break;
}
var seq__52710_52735 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__52711_52736 = null;var count__52712_52737 = (0);var i__52713_52738 = (0);while(true){
if((i__52713_52738 < count__52712_52737))
{var n_52739 = chunk__52711_52736.cljs$core$IIndexed$_nth$arity$2(null,i__52713_52738);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52739;
goog.events.fireListeners(n_52739,evt.type,false,evt);
}
{
var G__52740 = seq__52710_52735;
var G__52741 = chunk__52711_52736;
var G__52742 = count__52712_52737;
var G__52743 = (i__52713_52738 + (1));
seq__52710_52735 = G__52740;
chunk__52711_52736 = G__52741;
count__52712_52737 = G__52742;
i__52713_52738 = G__52743;
continue;
}
} else
{var temp__4126__auto___52744 = cljs.core.seq(seq__52710_52735);if(temp__4126__auto___52744)
{var seq__52710_52745__$1 = temp__4126__auto___52744;if(cljs.core.chunked_seq_QMARK_(seq__52710_52745__$1))
{var c__4314__auto___52746 = cljs.core.chunk_first(seq__52710_52745__$1);{
var G__52747 = cljs.core.chunk_rest(seq__52710_52745__$1);
var G__52748 = c__4314__auto___52746;
var G__52749 = cljs.core.count(c__4314__auto___52746);
var G__52750 = (0);
seq__52710_52735 = G__52747;
chunk__52711_52736 = G__52748;
count__52712_52737 = G__52749;
i__52713_52738 = G__52750;
continue;
}
} else
{var n_52751 = cljs.core.first(seq__52710_52745__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_52751;
goog.events.fireListeners(n_52751,evt.type,false,evt);
}
{
var G__52752 = cljs.core.next(seq__52710_52745__$1);
var G__52753 = null;
var G__52754 = (0);
var G__52755 = (0);
seq__52710_52735 = G__52752;
chunk__52711_52736 = G__52753;
count__52712_52737 = G__52754;
i__52713_52738 = G__52755;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__52762_52768 = cljs.core.seq(evt_map);var chunk__52763_52769 = null;var count__52764_52770 = (0);var i__52765_52771 = (0);while(true){
if((i__52765_52771 < count__52764_52770))
{var vec__52766_52772 = chunk__52763_52769.cljs$core$IIndexed$_nth$arity$2(null,i__52765_52771);var k_52773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766_52772,(0),null);var v_52774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52766_52772,(1),null);(evt[k_52773] = v_52774);
{
var G__52775 = seq__52762_52768;
var G__52776 = chunk__52763_52769;
var G__52777 = count__52764_52770;
var G__52778 = (i__52765_52771 + (1));
seq__52762_52768 = G__52775;
chunk__52763_52769 = G__52776;
count__52764_52770 = G__52777;
i__52765_52771 = G__52778;
continue;
}
} else
{var temp__4126__auto___52779 = cljs.core.seq(seq__52762_52768);if(temp__4126__auto___52779)
{var seq__52762_52780__$1 = temp__4126__auto___52779;if(cljs.core.chunked_seq_QMARK_(seq__52762_52780__$1))
{var c__4314__auto___52781 = cljs.core.chunk_first(seq__52762_52780__$1);{
var G__52782 = cljs.core.chunk_rest(seq__52762_52780__$1);
var G__52783 = c__4314__auto___52781;
var G__52784 = cljs.core.count(c__4314__auto___52781);
var G__52785 = (0);
seq__52762_52768 = G__52782;
chunk__52763_52769 = G__52783;
count__52764_52770 = G__52784;
i__52765_52771 = G__52785;
continue;
}
} else
{var vec__52767_52786 = cljs.core.first(seq__52762_52780__$1);var k_52787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52767_52786,(0),null);var v_52788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52767_52786,(1),null);(evt[k_52787] = v_52788);
{
var G__52789 = cljs.core.next(seq__52762_52780__$1);
var G__52790 = null;
var G__52791 = (0);
var G__52792 = (0);
seq__52762_52768 = G__52789;
chunk__52763_52769 = G__52790;
count__52764_52770 = G__52791;
i__52765_52771 = G__52792;
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
return (function (p1__52793_SHARP_){return goog.events.getListeners(p1__52793_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes(content));
});
