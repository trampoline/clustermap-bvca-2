// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26653 = {};return obj26653;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26657 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26657 = (function (evt,f,create_listener_function,meta26658){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26658 = meta26658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26657.cljs$lang$type = true;
domina.events.t26657.cljs$lang$ctorStr = "domina.events/t26657";
domina.events.t26657.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26657");
});
domina.events.t26657.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26657.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26657.prototype.domina$events$Event$ = true;
domina.events.t26657.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26657.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26657.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26657.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26657.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26657.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26659){var self__ = this;
var _26659__$1 = this;return self__.meta26658;
});
domina.events.t26657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26659,meta26658__$1){var self__ = this;
var _26659__$1 = this;return (new domina.events.t26657(self__.evt,self__.f,self__.create_listener_function,meta26658__$1));
});
domina.events.__GT_t26657 = (function __GT_t26657(evt__$1,f__$1,create_listener_function__$1,meta26658){return (new domina.events.t26657(evt__$1,f__$1,create_listener_function__$1,meta26658));
});
}
return (new domina.events.t26657(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26657 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26657 = (function (evt,f,create_listener_function,meta26658){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26658 = meta26658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26657.cljs$lang$type = true;
domina.events.t26657.cljs$lang$ctorStr = "domina.events/t26657";
domina.events.t26657.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26657");
});
domina.events.t26657.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26657.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26657.prototype.domina$events$Event$ = true;
domina.events.t26657.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26657.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26657.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26657.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26657.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26657.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26659){var self__ = this;
var _26659__$1 = this;return self__.meta26658;
});
domina.events.t26657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26659,meta26658__$1){var self__ = this;
var _26659__$1 = this;return (new domina.events.t26657(self__.evt,self__.f,self__.create_listener_function,meta26658__$1));
});
domina.events.__GT_t26657 = (function __GT_t26657(evt__$1,f__$1,create_listener_function__$1,meta26658){return (new domina.events.t26657(evt__$1,f__$1,create_listener_function__$1,meta26658));
});
}
return (new domina.events.t26657(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26664(s__26665){return (new cljs.core.LazySeq(null,(function (){var s__26665__$1 = s__26665;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26665__$1);if(temp__4092__auto__)
{var s__26665__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26665__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26665__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26667 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26666 = 0;while(true){
if((i__26666 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26666);cljs.core.chunk_append(b__26667,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26668 = (i__26666 + 1);
i__26666 = G__26668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26667),iter__26664(cljs.core.chunk_rest(s__26665__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26667),null);
}
} else
{var node = cljs.core.first(s__26665__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26664(cljs.core.rest(s__26665__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26677 = cljs.core.seq(domina.nodes(content));var chunk__26678 = null;var count__26679 = 0;var i__26680 = 0;while(true){
if((i__26680 < count__26679))
{var node = chunk__26678.cljs$core$IIndexed$_nth$arity$2(null,i__26680);goog.events.removeAll(node);
{
var G__26685 = seq__26677;
var G__26686 = chunk__26678;
var G__26687 = count__26679;
var G__26688 = (i__26680 + 1);
seq__26677 = G__26685;
chunk__26678 = G__26686;
count__26679 = G__26687;
i__26680 = G__26688;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26677);if(temp__4092__auto__)
{var seq__26677__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26677__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26677__$1);{
var G__26689 = cljs.core.chunk_rest(seq__26677__$1);
var G__26690 = c__4148__auto__;
var G__26691 = cljs.core.count(c__4148__auto__);
var G__26692 = 0;
seq__26677 = G__26689;
chunk__26678 = G__26690;
count__26679 = G__26691;
i__26680 = G__26692;
continue;
}
} else
{var node = cljs.core.first(seq__26677__$1);goog.events.removeAll(node);
{
var G__26693 = cljs.core.next(seq__26677__$1);
var G__26694 = null;
var G__26695 = 0;
var G__26696 = 0;
seq__26677 = G__26693;
chunk__26678 = G__26694;
count__26679 = G__26695;
i__26680 = G__26696;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26681 = cljs.core.seq(domina.nodes(content));var chunk__26682 = null;var count__26683 = 0;var i__26684 = 0;while(true){
if((i__26684 < count__26683))
{var node = chunk__26682.cljs$core$IIndexed$_nth$arity$2(null,i__26684);goog.events.removeAll(node,type__$1);
{
var G__26697 = seq__26681;
var G__26698 = chunk__26682;
var G__26699 = count__26683;
var G__26700 = (i__26684 + 1);
seq__26681 = G__26697;
chunk__26682 = G__26698;
count__26683 = G__26699;
i__26684 = G__26700;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26681);if(temp__4092__auto__)
{var seq__26681__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26681__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26681__$1);{
var G__26701 = cljs.core.chunk_rest(seq__26681__$1);
var G__26702 = c__4148__auto__;
var G__26703 = cljs.core.count(c__4148__auto__);
var G__26704 = 0;
seq__26681 = G__26701;
chunk__26682 = G__26702;
count__26683 = G__26703;
i__26684 = G__26704;
continue;
}
} else
{var node = cljs.core.first(seq__26681__$1);goog.events.removeAll(node,type__$1);
{
var G__26705 = cljs.core.next(seq__26681__$1);
var G__26706 = null;
var G__26707 = 0;
var G__26708 = 0;
seq__26681 = G__26705;
chunk__26682 = G__26706;
count__26683 = G__26707;
i__26684 = G__26708;
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
var G__26709 = parent;
var G__26710 = cljs.core.cons(parent,so_far);
n = G__26709;
so_far = G__26710;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26719_26727 = cljs.core.seq(ancestors);var chunk__26720_26728 = null;var count__26721_26729 = 0;var i__26722_26730 = 0;while(true){
if((i__26722_26730 < count__26721_26729))
{var n_26731 = chunk__26720_26728.cljs$core$IIndexed$_nth$arity$2(null,i__26722_26730);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26731;
goog.events.fireListeners(n_26731,evt.type,true,evt);
}
{
var G__26732 = seq__26719_26727;
var G__26733 = chunk__26720_26728;
var G__26734 = count__26721_26729;
var G__26735 = (i__26722_26730 + 1);
seq__26719_26727 = G__26732;
chunk__26720_26728 = G__26733;
count__26721_26729 = G__26734;
i__26722_26730 = G__26735;
continue;
}
} else
{var temp__4092__auto___26736 = cljs.core.seq(seq__26719_26727);if(temp__4092__auto___26736)
{var seq__26719_26737__$1 = temp__4092__auto___26736;if(cljs.core.chunked_seq_QMARK_(seq__26719_26737__$1))
{var c__4148__auto___26738 = cljs.core.chunk_first(seq__26719_26737__$1);{
var G__26739 = cljs.core.chunk_rest(seq__26719_26737__$1);
var G__26740 = c__4148__auto___26738;
var G__26741 = cljs.core.count(c__4148__auto___26738);
var G__26742 = 0;
seq__26719_26727 = G__26739;
chunk__26720_26728 = G__26740;
count__26721_26729 = G__26741;
i__26722_26730 = G__26742;
continue;
}
} else
{var n_26743 = cljs.core.first(seq__26719_26737__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26743;
goog.events.fireListeners(n_26743,evt.type,true,evt);
}
{
var G__26744 = cljs.core.next(seq__26719_26737__$1);
var G__26745 = null;
var G__26746 = 0;
var G__26747 = 0;
seq__26719_26727 = G__26744;
chunk__26720_26728 = G__26745;
count__26721_26729 = G__26746;
i__26722_26730 = G__26747;
continue;
}
}
} else
{}
}
break;
}
var seq__26723_26748 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26724_26749 = null;var count__26725_26750 = 0;var i__26726_26751 = 0;while(true){
if((i__26726_26751 < count__26725_26750))
{var n_26752 = chunk__26724_26749.cljs$core$IIndexed$_nth$arity$2(null,i__26726_26751);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26752;
goog.events.fireListeners(n_26752,evt.type,false,evt);
}
{
var G__26753 = seq__26723_26748;
var G__26754 = chunk__26724_26749;
var G__26755 = count__26725_26750;
var G__26756 = (i__26726_26751 + 1);
seq__26723_26748 = G__26753;
chunk__26724_26749 = G__26754;
count__26725_26750 = G__26755;
i__26726_26751 = G__26756;
continue;
}
} else
{var temp__4092__auto___26757 = cljs.core.seq(seq__26723_26748);if(temp__4092__auto___26757)
{var seq__26723_26758__$1 = temp__4092__auto___26757;if(cljs.core.chunked_seq_QMARK_(seq__26723_26758__$1))
{var c__4148__auto___26759 = cljs.core.chunk_first(seq__26723_26758__$1);{
var G__26760 = cljs.core.chunk_rest(seq__26723_26758__$1);
var G__26761 = c__4148__auto___26759;
var G__26762 = cljs.core.count(c__4148__auto___26759);
var G__26763 = 0;
seq__26723_26748 = G__26760;
chunk__26724_26749 = G__26761;
count__26725_26750 = G__26762;
i__26726_26751 = G__26763;
continue;
}
} else
{var n_26764 = cljs.core.first(seq__26723_26758__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26764;
goog.events.fireListeners(n_26764,evt.type,false,evt);
}
{
var G__26765 = cljs.core.next(seq__26723_26758__$1);
var G__26766 = null;
var G__26767 = 0;
var G__26768 = 0;
seq__26723_26748 = G__26765;
chunk__26724_26749 = G__26766;
count__26725_26750 = G__26767;
i__26726_26751 = G__26768;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26775_26781 = cljs.core.seq(evt_map);var chunk__26776_26782 = null;var count__26777_26783 = 0;var i__26778_26784 = 0;while(true){
if((i__26778_26784 < count__26777_26783))
{var vec__26779_26785 = chunk__26776_26782.cljs$core$IIndexed$_nth$arity$2(null,i__26778_26784);var k_26786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779_26785,0,null);var v_26787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779_26785,1,null);(evt[k_26786] = v_26787);
{
var G__26788 = seq__26775_26781;
var G__26789 = chunk__26776_26782;
var G__26790 = count__26777_26783;
var G__26791 = (i__26778_26784 + 1);
seq__26775_26781 = G__26788;
chunk__26776_26782 = G__26789;
count__26777_26783 = G__26790;
i__26778_26784 = G__26791;
continue;
}
} else
{var temp__4092__auto___26792 = cljs.core.seq(seq__26775_26781);if(temp__4092__auto___26792)
{var seq__26775_26793__$1 = temp__4092__auto___26792;if(cljs.core.chunked_seq_QMARK_(seq__26775_26793__$1))
{var c__4148__auto___26794 = cljs.core.chunk_first(seq__26775_26793__$1);{
var G__26795 = cljs.core.chunk_rest(seq__26775_26793__$1);
var G__26796 = c__4148__auto___26794;
var G__26797 = cljs.core.count(c__4148__auto___26794);
var G__26798 = 0;
seq__26775_26781 = G__26795;
chunk__26776_26782 = G__26796;
count__26777_26783 = G__26797;
i__26778_26784 = G__26798;
continue;
}
} else
{var vec__26780_26799 = cljs.core.first(seq__26775_26793__$1);var k_26800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26780_26799,0,null);var v_26801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26780_26799,1,null);(evt[k_26800] = v_26801);
{
var G__26802 = cljs.core.next(seq__26775_26793__$1);
var G__26803 = null;
var G__26804 = 0;
var G__26805 = 0;
seq__26775_26781 = G__26802;
chunk__26776_26782 = G__26803;
count__26777_26783 = G__26804;
i__26778_26784 = G__26805;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26806_SHARP_){return goog.events.getListeners(p1__26806_SHARP_,type__$1,false);
}),domina.nodes(content));
});
