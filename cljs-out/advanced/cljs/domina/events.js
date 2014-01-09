// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23666 = {};return obj23666;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t23670 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23670 = (function (evt,f,create_listener_function,meta23671){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23671 = meta23671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23670.cljs$lang$type = true;
domina.events.t23670.cljs$lang$ctorStr = "domina.events/t23670";
domina.events.t23670.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23670");
});
domina.events.t23670.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23670.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23670.prototype.domina$events$Event$ = true;
domina.events.t23670.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23670.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23670.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23670.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23670.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23670.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23672){var self__ = this;
var _23672__$1 = this;return self__.meta23671;
});
domina.events.t23670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23672,meta23671__$1){var self__ = this;
var _23672__$1 = this;return (new domina.events.t23670(self__.evt,self__.f,self__.create_listener_function,meta23671__$1));
});
domina.events.__GT_t23670 = (function __GT_t23670(evt__$1,f__$1,create_listener_function__$1,meta23671){return (new domina.events.t23670(evt__$1,f__$1,create_listener_function__$1,meta23671));
});
}
return (new domina.events.t23670(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t23670 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23670 = (function (evt,f,create_listener_function,meta23671){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23671 = meta23671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23670.cljs$lang$type = true;
domina.events.t23670.cljs$lang$ctorStr = "domina.events/t23670";
domina.events.t23670.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23670");
});
domina.events.t23670.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23670.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23670.prototype.domina$events$Event$ = true;
domina.events.t23670.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23670.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23670.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23670.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23670.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23670.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23672){var self__ = this;
var _23672__$1 = this;return self__.meta23671;
});
domina.events.t23670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23672,meta23671__$1){var self__ = this;
var _23672__$1 = this;return (new domina.events.t23670(self__.evt,self__.f,self__.create_listener_function,meta23671__$1));
});
domina.events.__GT_t23670 = (function __GT_t23670(evt__$1,f__$1,create_listener_function__$1,meta23671){return (new domina.events.t23670(evt__$1,f__$1,create_listener_function__$1,meta23671));
});
}
return (new domina.events.t23670(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__23677(s__23678){return (new cljs.core.LazySeq(null,(function (){var s__23678__$1 = s__23678;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23678__$1);if(temp__4092__auto__)
{var s__23678__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23678__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23678__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23680 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23679 = 0;while(true){
if((i__23679 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23679);cljs.core.chunk_append(b__23680,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23681 = (i__23679 + 1);
i__23679 = G__23681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23680),iter__23677(cljs.core.chunk_rest(s__23678__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23680),null);
}
} else
{var node = cljs.core.first(s__23678__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23677(cljs.core.rest(s__23678__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23690 = cljs.core.seq(domina.nodes(content));var chunk__23691 = null;var count__23692 = 0;var i__23693 = 0;while(true){
if((i__23693 < count__23692))
{var node = chunk__23691.cljs$core$IIndexed$_nth$arity$2(null,i__23693);goog.events.removeAll(node);
{
var G__23698 = seq__23690;
var G__23699 = chunk__23691;
var G__23700 = count__23692;
var G__23701 = (i__23693 + 1);
seq__23690 = G__23698;
chunk__23691 = G__23699;
count__23692 = G__23700;
i__23693 = G__23701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23690);if(temp__4092__auto__)
{var seq__23690__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23690__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23690__$1);{
var G__23702 = cljs.core.chunk_rest(seq__23690__$1);
var G__23703 = c__4148__auto__;
var G__23704 = cljs.core.count(c__4148__auto__);
var G__23705 = 0;
seq__23690 = G__23702;
chunk__23691 = G__23703;
count__23692 = G__23704;
i__23693 = G__23705;
continue;
}
} else
{var node = cljs.core.first(seq__23690__$1);goog.events.removeAll(node);
{
var G__23706 = cljs.core.next(seq__23690__$1);
var G__23707 = null;
var G__23708 = 0;
var G__23709 = 0;
seq__23690 = G__23706;
chunk__23691 = G__23707;
count__23692 = G__23708;
i__23693 = G__23709;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__23694 = cljs.core.seq(domina.nodes(content));var chunk__23695 = null;var count__23696 = 0;var i__23697 = 0;while(true){
if((i__23697 < count__23696))
{var node = chunk__23695.cljs$core$IIndexed$_nth$arity$2(null,i__23697);goog.events.removeAll(node,type__$1);
{
var G__23710 = seq__23694;
var G__23711 = chunk__23695;
var G__23712 = count__23696;
var G__23713 = (i__23697 + 1);
seq__23694 = G__23710;
chunk__23695 = G__23711;
count__23696 = G__23712;
i__23697 = G__23713;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23694);if(temp__4092__auto__)
{var seq__23694__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23694__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23694__$1);{
var G__23714 = cljs.core.chunk_rest(seq__23694__$1);
var G__23715 = c__4148__auto__;
var G__23716 = cljs.core.count(c__4148__auto__);
var G__23717 = 0;
seq__23694 = G__23714;
chunk__23695 = G__23715;
count__23696 = G__23716;
i__23697 = G__23717;
continue;
}
} else
{var node = cljs.core.first(seq__23694__$1);goog.events.removeAll(node,type__$1);
{
var G__23718 = cljs.core.next(seq__23694__$1);
var G__23719 = null;
var G__23720 = 0;
var G__23721 = 0;
seq__23694 = G__23718;
chunk__23695 = G__23719;
count__23696 = G__23720;
i__23697 = G__23721;
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
var G__23722 = parent;
var G__23723 = cljs.core.cons(parent,so_far);
n = G__23722;
so_far = G__23723;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__23732_23740 = cljs.core.seq(ancestors);var chunk__23733_23741 = null;var count__23734_23742 = 0;var i__23735_23743 = 0;while(true){
if((i__23735_23743 < count__23734_23742))
{var n_23744 = chunk__23733_23741.cljs$core$IIndexed$_nth$arity$2(null,i__23735_23743);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23744;
goog.events.fireListeners(n_23744,evt.type,true,evt);
}
{
var G__23745 = seq__23732_23740;
var G__23746 = chunk__23733_23741;
var G__23747 = count__23734_23742;
var G__23748 = (i__23735_23743 + 1);
seq__23732_23740 = G__23745;
chunk__23733_23741 = G__23746;
count__23734_23742 = G__23747;
i__23735_23743 = G__23748;
continue;
}
} else
{var temp__4092__auto___23749 = cljs.core.seq(seq__23732_23740);if(temp__4092__auto___23749)
{var seq__23732_23750__$1 = temp__4092__auto___23749;if(cljs.core.chunked_seq_QMARK_(seq__23732_23750__$1))
{var c__4148__auto___23751 = cljs.core.chunk_first(seq__23732_23750__$1);{
var G__23752 = cljs.core.chunk_rest(seq__23732_23750__$1);
var G__23753 = c__4148__auto___23751;
var G__23754 = cljs.core.count(c__4148__auto___23751);
var G__23755 = 0;
seq__23732_23740 = G__23752;
chunk__23733_23741 = G__23753;
count__23734_23742 = G__23754;
i__23735_23743 = G__23755;
continue;
}
} else
{var n_23756 = cljs.core.first(seq__23732_23750__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23756;
goog.events.fireListeners(n_23756,evt.type,true,evt);
}
{
var G__23757 = cljs.core.next(seq__23732_23750__$1);
var G__23758 = null;
var G__23759 = 0;
var G__23760 = 0;
seq__23732_23740 = G__23757;
chunk__23733_23741 = G__23758;
count__23734_23742 = G__23759;
i__23735_23743 = G__23760;
continue;
}
}
} else
{}
}
break;
}
var seq__23736_23761 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__23737_23762 = null;var count__23738_23763 = 0;var i__23739_23764 = 0;while(true){
if((i__23739_23764 < count__23738_23763))
{var n_23765 = chunk__23737_23762.cljs$core$IIndexed$_nth$arity$2(null,i__23739_23764);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23765;
goog.events.fireListeners(n_23765,evt.type,false,evt);
}
{
var G__23766 = seq__23736_23761;
var G__23767 = chunk__23737_23762;
var G__23768 = count__23738_23763;
var G__23769 = (i__23739_23764 + 1);
seq__23736_23761 = G__23766;
chunk__23737_23762 = G__23767;
count__23738_23763 = G__23768;
i__23739_23764 = G__23769;
continue;
}
} else
{var temp__4092__auto___23770 = cljs.core.seq(seq__23736_23761);if(temp__4092__auto___23770)
{var seq__23736_23771__$1 = temp__4092__auto___23770;if(cljs.core.chunked_seq_QMARK_(seq__23736_23771__$1))
{var c__4148__auto___23772 = cljs.core.chunk_first(seq__23736_23771__$1);{
var G__23773 = cljs.core.chunk_rest(seq__23736_23771__$1);
var G__23774 = c__4148__auto___23772;
var G__23775 = cljs.core.count(c__4148__auto___23772);
var G__23776 = 0;
seq__23736_23761 = G__23773;
chunk__23737_23762 = G__23774;
count__23738_23763 = G__23775;
i__23739_23764 = G__23776;
continue;
}
} else
{var n_23777 = cljs.core.first(seq__23736_23771__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23777;
goog.events.fireListeners(n_23777,evt.type,false,evt);
}
{
var G__23778 = cljs.core.next(seq__23736_23771__$1);
var G__23779 = null;
var G__23780 = 0;
var G__23781 = 0;
seq__23736_23761 = G__23778;
chunk__23737_23762 = G__23779;
count__23738_23763 = G__23780;
i__23739_23764 = G__23781;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__23788_23794 = cljs.core.seq(evt_map);var chunk__23789_23795 = null;var count__23790_23796 = 0;var i__23791_23797 = 0;while(true){
if((i__23791_23797 < count__23790_23796))
{var vec__23792_23798 = chunk__23789_23795.cljs$core$IIndexed$_nth$arity$2(null,i__23791_23797);var k_23799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23792_23798,0,null);var v_23800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23792_23798,1,null);(evt[k_23799] = v_23800);
{
var G__23801 = seq__23788_23794;
var G__23802 = chunk__23789_23795;
var G__23803 = count__23790_23796;
var G__23804 = (i__23791_23797 + 1);
seq__23788_23794 = G__23801;
chunk__23789_23795 = G__23802;
count__23790_23796 = G__23803;
i__23791_23797 = G__23804;
continue;
}
} else
{var temp__4092__auto___23805 = cljs.core.seq(seq__23788_23794);if(temp__4092__auto___23805)
{var seq__23788_23806__$1 = temp__4092__auto___23805;if(cljs.core.chunked_seq_QMARK_(seq__23788_23806__$1))
{var c__4148__auto___23807 = cljs.core.chunk_first(seq__23788_23806__$1);{
var G__23808 = cljs.core.chunk_rest(seq__23788_23806__$1);
var G__23809 = c__4148__auto___23807;
var G__23810 = cljs.core.count(c__4148__auto___23807);
var G__23811 = 0;
seq__23788_23794 = G__23808;
chunk__23789_23795 = G__23809;
count__23790_23796 = G__23810;
i__23791_23797 = G__23811;
continue;
}
} else
{var vec__23793_23812 = cljs.core.first(seq__23788_23806__$1);var k_23813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793_23812,0,null);var v_23814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793_23812,1,null);(evt[k_23813] = v_23814);
{
var G__23815 = cljs.core.next(seq__23788_23806__$1);
var G__23816 = null;
var G__23817 = 0;
var G__23818 = 0;
seq__23788_23794 = G__23815;
chunk__23789_23795 = G__23816;
count__23790_23796 = G__23817;
i__23791_23797 = G__23818;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__23819_SHARP_){return goog.events.getListeners(p1__23819_SHARP_,type__$1,false);
}),domina.nodes(content));
});
