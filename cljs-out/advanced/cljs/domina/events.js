// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26625 = {};return obj26625;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26629 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26629 = (function (evt,f,create_listener_function,meta26630){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26630 = meta26630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26629.cljs$lang$type = true;
domina.events.t26629.cljs$lang$ctorStr = "domina.events/t26629";
domina.events.t26629.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26629");
});
domina.events.t26629.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26629.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26629.prototype.domina$events$Event$ = true;
domina.events.t26629.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26629.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26629.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26629.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26629.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26629.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26631){var self__ = this;
var _26631__$1 = this;return self__.meta26630;
});
domina.events.t26629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26631,meta26630__$1){var self__ = this;
var _26631__$1 = this;return (new domina.events.t26629(self__.evt,self__.f,self__.create_listener_function,meta26630__$1));
});
domina.events.__GT_t26629 = (function __GT_t26629(evt__$1,f__$1,create_listener_function__$1,meta26630){return (new domina.events.t26629(evt__$1,f__$1,create_listener_function__$1,meta26630));
});
}
return (new domina.events.t26629(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26629 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26629 = (function (evt,f,create_listener_function,meta26630){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26630 = meta26630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26629.cljs$lang$type = true;
domina.events.t26629.cljs$lang$ctorStr = "domina.events/t26629";
domina.events.t26629.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26629");
});
domina.events.t26629.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26629.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26629.prototype.domina$events$Event$ = true;
domina.events.t26629.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26629.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26629.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26629.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26629.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26629.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26631){var self__ = this;
var _26631__$1 = this;return self__.meta26630;
});
domina.events.t26629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26631,meta26630__$1){var self__ = this;
var _26631__$1 = this;return (new domina.events.t26629(self__.evt,self__.f,self__.create_listener_function,meta26630__$1));
});
domina.events.__GT_t26629 = (function __GT_t26629(evt__$1,f__$1,create_listener_function__$1,meta26630){return (new domina.events.t26629(evt__$1,f__$1,create_listener_function__$1,meta26630));
});
}
return (new domina.events.t26629(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26636(s__26637){return (new cljs.core.LazySeq(null,(function (){var s__26637__$1 = s__26637;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26637__$1);if(temp__4092__auto__)
{var s__26637__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26637__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26637__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26639 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26638 = 0;while(true){
if((i__26638 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26638);cljs.core.chunk_append(b__26639,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26640 = (i__26638 + 1);
i__26638 = G__26640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26639),iter__26636(cljs.core.chunk_rest(s__26637__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26639),null);
}
} else
{var node = cljs.core.first(s__26637__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26636(cljs.core.rest(s__26637__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__26649 = cljs.core.seq(domina.nodes(content));var chunk__26650 = null;var count__26651 = 0;var i__26652 = 0;while(true){
if((i__26652 < count__26651))
{var node = chunk__26650.cljs$core$IIndexed$_nth$arity$2(null,i__26652);goog.events.removeAll(node);
{
var G__26657 = seq__26649;
var G__26658 = chunk__26650;
var G__26659 = count__26651;
var G__26660 = (i__26652 + 1);
seq__26649 = G__26657;
chunk__26650 = G__26658;
count__26651 = G__26659;
i__26652 = G__26660;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26649);if(temp__4092__auto__)
{var seq__26649__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26649__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26649__$1);{
var G__26661 = cljs.core.chunk_rest(seq__26649__$1);
var G__26662 = c__4148__auto__;
var G__26663 = cljs.core.count(c__4148__auto__);
var G__26664 = 0;
seq__26649 = G__26661;
chunk__26650 = G__26662;
count__26651 = G__26663;
i__26652 = G__26664;
continue;
}
} else
{var node = cljs.core.first(seq__26649__$1);goog.events.removeAll(node);
{
var G__26665 = cljs.core.next(seq__26649__$1);
var G__26666 = null;
var G__26667 = 0;
var G__26668 = 0;
seq__26649 = G__26665;
chunk__26650 = G__26666;
count__26651 = G__26667;
i__26652 = G__26668;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26653 = cljs.core.seq(domina.nodes(content));var chunk__26654 = null;var count__26655 = 0;var i__26656 = 0;while(true){
if((i__26656 < count__26655))
{var node = chunk__26654.cljs$core$IIndexed$_nth$arity$2(null,i__26656);goog.events.removeAll(node,type__$1);
{
var G__26669 = seq__26653;
var G__26670 = chunk__26654;
var G__26671 = count__26655;
var G__26672 = (i__26656 + 1);
seq__26653 = G__26669;
chunk__26654 = G__26670;
count__26655 = G__26671;
i__26656 = G__26672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26653);if(temp__4092__auto__)
{var seq__26653__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26653__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26653__$1);{
var G__26673 = cljs.core.chunk_rest(seq__26653__$1);
var G__26674 = c__4148__auto__;
var G__26675 = cljs.core.count(c__4148__auto__);
var G__26676 = 0;
seq__26653 = G__26673;
chunk__26654 = G__26674;
count__26655 = G__26675;
i__26656 = G__26676;
continue;
}
} else
{var node = cljs.core.first(seq__26653__$1);goog.events.removeAll(node,type__$1);
{
var G__26677 = cljs.core.next(seq__26653__$1);
var G__26678 = null;
var G__26679 = 0;
var G__26680 = 0;
seq__26653 = G__26677;
chunk__26654 = G__26678;
count__26655 = G__26679;
i__26656 = G__26680;
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
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__26681 = parent;
var G__26682 = cljs.core.cons(parent,so_far);
n = G__26681;
so_far = G__26682;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26691_26699 = cljs.core.seq(ancestors);var chunk__26692_26700 = null;var count__26693_26701 = 0;var i__26694_26702 = 0;while(true){
if((i__26694_26702 < count__26693_26701))
{var n_26703 = chunk__26692_26700.cljs$core$IIndexed$_nth$arity$2(null,i__26694_26702);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26703;
goog.events.fireListeners(n_26703,evt.type,true,evt);
}
{
var G__26704 = seq__26691_26699;
var G__26705 = chunk__26692_26700;
var G__26706 = count__26693_26701;
var G__26707 = (i__26694_26702 + 1);
seq__26691_26699 = G__26704;
chunk__26692_26700 = G__26705;
count__26693_26701 = G__26706;
i__26694_26702 = G__26707;
continue;
}
} else
{var temp__4092__auto___26708 = cljs.core.seq(seq__26691_26699);if(temp__4092__auto___26708)
{var seq__26691_26709__$1 = temp__4092__auto___26708;if(cljs.core.chunked_seq_QMARK_(seq__26691_26709__$1))
{var c__4148__auto___26710 = cljs.core.chunk_first(seq__26691_26709__$1);{
var G__26711 = cljs.core.chunk_rest(seq__26691_26709__$1);
var G__26712 = c__4148__auto___26710;
var G__26713 = cljs.core.count(c__4148__auto___26710);
var G__26714 = 0;
seq__26691_26699 = G__26711;
chunk__26692_26700 = G__26712;
count__26693_26701 = G__26713;
i__26694_26702 = G__26714;
continue;
}
} else
{var n_26715 = cljs.core.first(seq__26691_26709__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26715;
goog.events.fireListeners(n_26715,evt.type,true,evt);
}
{
var G__26716 = cljs.core.next(seq__26691_26709__$1);
var G__26717 = null;
var G__26718 = 0;
var G__26719 = 0;
seq__26691_26699 = G__26716;
chunk__26692_26700 = G__26717;
count__26693_26701 = G__26718;
i__26694_26702 = G__26719;
continue;
}
}
} else
{}
}
break;
}
var seq__26695_26720 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26696_26721 = null;var count__26697_26722 = 0;var i__26698_26723 = 0;while(true){
if((i__26698_26723 < count__26697_26722))
{var n_26724 = chunk__26696_26721.cljs$core$IIndexed$_nth$arity$2(null,i__26698_26723);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26724;
goog.events.fireListeners(n_26724,evt.type,false,evt);
}
{
var G__26725 = seq__26695_26720;
var G__26726 = chunk__26696_26721;
var G__26727 = count__26697_26722;
var G__26728 = (i__26698_26723 + 1);
seq__26695_26720 = G__26725;
chunk__26696_26721 = G__26726;
count__26697_26722 = G__26727;
i__26698_26723 = G__26728;
continue;
}
} else
{var temp__4092__auto___26729 = cljs.core.seq(seq__26695_26720);if(temp__4092__auto___26729)
{var seq__26695_26730__$1 = temp__4092__auto___26729;if(cljs.core.chunked_seq_QMARK_(seq__26695_26730__$1))
{var c__4148__auto___26731 = cljs.core.chunk_first(seq__26695_26730__$1);{
var G__26732 = cljs.core.chunk_rest(seq__26695_26730__$1);
var G__26733 = c__4148__auto___26731;
var G__26734 = cljs.core.count(c__4148__auto___26731);
var G__26735 = 0;
seq__26695_26720 = G__26732;
chunk__26696_26721 = G__26733;
count__26697_26722 = G__26734;
i__26698_26723 = G__26735;
continue;
}
} else
{var n_26736 = cljs.core.first(seq__26695_26730__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26736;
goog.events.fireListeners(n_26736,evt.type,false,evt);
}
{
var G__26737 = cljs.core.next(seq__26695_26730__$1);
var G__26738 = null;
var G__26739 = 0;
var G__26740 = 0;
seq__26695_26720 = G__26737;
chunk__26696_26721 = G__26738;
count__26697_26722 = G__26739;
i__26698_26723 = G__26740;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26747_26753 = cljs.core.seq(evt_map);var chunk__26748_26754 = null;var count__26749_26755 = 0;var i__26750_26756 = 0;while(true){
if((i__26750_26756 < count__26749_26755))
{var vec__26751_26757 = chunk__26748_26754.cljs$core$IIndexed$_nth$arity$2(null,i__26750_26756);var k_26758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751_26757,0,null);var v_26759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26751_26757,1,null);(evt[k_26758] = v_26759);
{
var G__26760 = seq__26747_26753;
var G__26761 = chunk__26748_26754;
var G__26762 = count__26749_26755;
var G__26763 = (i__26750_26756 + 1);
seq__26747_26753 = G__26760;
chunk__26748_26754 = G__26761;
count__26749_26755 = G__26762;
i__26750_26756 = G__26763;
continue;
}
} else
{var temp__4092__auto___26764 = cljs.core.seq(seq__26747_26753);if(temp__4092__auto___26764)
{var seq__26747_26765__$1 = temp__4092__auto___26764;if(cljs.core.chunked_seq_QMARK_(seq__26747_26765__$1))
{var c__4148__auto___26766 = cljs.core.chunk_first(seq__26747_26765__$1);{
var G__26767 = cljs.core.chunk_rest(seq__26747_26765__$1);
var G__26768 = c__4148__auto___26766;
var G__26769 = cljs.core.count(c__4148__auto___26766);
var G__26770 = 0;
seq__26747_26753 = G__26767;
chunk__26748_26754 = G__26768;
count__26749_26755 = G__26769;
i__26750_26756 = G__26770;
continue;
}
} else
{var vec__26752_26771 = cljs.core.first(seq__26747_26765__$1);var k_26772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752_26771,0,null);var v_26773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752_26771,1,null);(evt[k_26772] = v_26773);
{
var G__26774 = cljs.core.next(seq__26747_26765__$1);
var G__26775 = null;
var G__26776 = 0;
var G__26777 = 0;
seq__26747_26753 = G__26774;
chunk__26748_26754 = G__26775;
count__26749_26755 = G__26776;
i__26750_26756 = G__26777;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26778_SHARP_){return goog.events.getListeners(p1__26778_SHARP_,type__$1,false);
}),domina.nodes(content));
});
