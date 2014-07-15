// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj51589 = {};return obj51589;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t51593 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t51593 = (function (evt,f,create_listener_function,meta51594){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta51594 = meta51594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t51593.cljs$lang$type = true;
domina.events.t51593.cljs$lang$ctorStr = "domina.events/t51593";
domina.events.t51593.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t51593");
});
domina.events.t51593.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t51593.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t51593.prototype.domina$events$Event$ = true;
domina.events.t51593.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t51593.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t51593.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t51593.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t51593.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t51593.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t51593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51595){var self__ = this;
var _51595__$1 = this;return self__.meta51594;
});
domina.events.t51593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51595,meta51594__$1){var self__ = this;
var _51595__$1 = this;return (new domina.events.t51593(self__.evt,self__.f,self__.create_listener_function,meta51594__$1));
});
domina.events.__GT_t51593 = (function __GT_t51593(evt__$1,f__$1,create_listener_function__$1,meta51594){return (new domina.events.t51593(evt__$1,f__$1,create_listener_function__$1,meta51594));
});
}
return (new domina.events.t51593(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__51600(s__51601){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__51601__$1 = s__51601;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51601__$1);if(temp__4126__auto__)
{var s__51601__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51601__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51601__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51603 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51602 = (0);while(true){
if((i__51602 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__51602);cljs.core.chunk_append.call(null,b__51603,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__51604 = (i__51602 + (1));
i__51602 = G__51604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51603),iter__51600.call(null,cljs.core.chunk_rest.call(null,s__51601__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51603),null);
}
} else
{var node = cljs.core.first.call(null,s__51601__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__51600.call(null,cljs.core.rest.call(null,s__51601__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__51613 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51614 = null;var count__51615 = (0);var i__51616 = (0);while(true){
if((i__51616 < count__51615))
{var node = cljs.core._nth.call(null,chunk__51614,i__51616);goog.events.removeAll(node);
{
var G__51621 = seq__51613;
var G__51622 = chunk__51614;
var G__51623 = count__51615;
var G__51624 = (i__51616 + (1));
seq__51613 = G__51621;
chunk__51614 = G__51622;
count__51615 = G__51623;
i__51616 = G__51624;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51613);if(temp__4126__auto__)
{var seq__51613__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51613__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__51613__$1);{
var G__51625 = cljs.core.chunk_rest.call(null,seq__51613__$1);
var G__51626 = c__4299__auto__;
var G__51627 = cljs.core.count.call(null,c__4299__auto__);
var G__51628 = (0);
seq__51613 = G__51625;
chunk__51614 = G__51626;
count__51615 = G__51627;
i__51616 = G__51628;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51613__$1);goog.events.removeAll(node);
{
var G__51629 = cljs.core.next.call(null,seq__51613__$1);
var G__51630 = null;
var G__51631 = (0);
var G__51632 = (0);
seq__51613 = G__51629;
chunk__51614 = G__51630;
count__51615 = G__51631;
i__51616 = G__51632;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__51617 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51618 = null;var count__51619 = (0);var i__51620 = (0);while(true){
if((i__51620 < count__51619))
{var node = cljs.core._nth.call(null,chunk__51618,i__51620);goog.events.removeAll(node,type__$1);
{
var G__51633 = seq__51617;
var G__51634 = chunk__51618;
var G__51635 = count__51619;
var G__51636 = (i__51620 + (1));
seq__51617 = G__51633;
chunk__51618 = G__51634;
count__51619 = G__51635;
i__51620 = G__51636;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51617);if(temp__4126__auto__)
{var seq__51617__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51617__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__51617__$1);{
var G__51637 = cljs.core.chunk_rest.call(null,seq__51617__$1);
var G__51638 = c__4299__auto__;
var G__51639 = cljs.core.count.call(null,c__4299__auto__);
var G__51640 = (0);
seq__51617 = G__51637;
chunk__51618 = G__51638;
count__51619 = G__51639;
i__51620 = G__51640;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51617__$1);goog.events.removeAll(node,type__$1);
{
var G__51641 = cljs.core.next.call(null,seq__51617__$1);
var G__51642 = null;
var G__51643 = (0);
var G__51644 = (0);
seq__51617 = G__51641;
chunk__51618 = G__51642;
count__51619 = G__51643;
i__51620 = G__51644;
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
var G__51645 = parent;
var G__51646 = cljs.core.cons.call(null,parent,so_far);
n = G__51645;
so_far = G__51646;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__51655_51663 = cljs.core.seq.call(null,ancestors);var chunk__51656_51664 = null;var count__51657_51665 = (0);var i__51658_51666 = (0);while(true){
if((i__51658_51666 < count__51657_51665))
{var n_51667 = cljs.core._nth.call(null,chunk__51656_51664,i__51658_51666);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51667;
goog.events.fireListeners(n_51667,evt.type,true,evt);
}
{
var G__51668 = seq__51655_51663;
var G__51669 = chunk__51656_51664;
var G__51670 = count__51657_51665;
var G__51671 = (i__51658_51666 + (1));
seq__51655_51663 = G__51668;
chunk__51656_51664 = G__51669;
count__51657_51665 = G__51670;
i__51658_51666 = G__51671;
continue;
}
} else
{var temp__4126__auto___51672 = cljs.core.seq.call(null,seq__51655_51663);if(temp__4126__auto___51672)
{var seq__51655_51673__$1 = temp__4126__auto___51672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51655_51673__$1))
{var c__4299__auto___51674 = cljs.core.chunk_first.call(null,seq__51655_51673__$1);{
var G__51675 = cljs.core.chunk_rest.call(null,seq__51655_51673__$1);
var G__51676 = c__4299__auto___51674;
var G__51677 = cljs.core.count.call(null,c__4299__auto___51674);
var G__51678 = (0);
seq__51655_51663 = G__51675;
chunk__51656_51664 = G__51676;
count__51657_51665 = G__51677;
i__51658_51666 = G__51678;
continue;
}
} else
{var n_51679 = cljs.core.first.call(null,seq__51655_51673__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51679;
goog.events.fireListeners(n_51679,evt.type,true,evt);
}
{
var G__51680 = cljs.core.next.call(null,seq__51655_51673__$1);
var G__51681 = null;
var G__51682 = (0);
var G__51683 = (0);
seq__51655_51663 = G__51680;
chunk__51656_51664 = G__51681;
count__51657_51665 = G__51682;
i__51658_51666 = G__51683;
continue;
}
}
} else
{}
}
break;
}
var seq__51659_51684 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__51660_51685 = null;var count__51661_51686 = (0);var i__51662_51687 = (0);while(true){
if((i__51662_51687 < count__51661_51686))
{var n_51688 = cljs.core._nth.call(null,chunk__51660_51685,i__51662_51687);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51688;
goog.events.fireListeners(n_51688,evt.type,false,evt);
}
{
var G__51689 = seq__51659_51684;
var G__51690 = chunk__51660_51685;
var G__51691 = count__51661_51686;
var G__51692 = (i__51662_51687 + (1));
seq__51659_51684 = G__51689;
chunk__51660_51685 = G__51690;
count__51661_51686 = G__51691;
i__51662_51687 = G__51692;
continue;
}
} else
{var temp__4126__auto___51693 = cljs.core.seq.call(null,seq__51659_51684);if(temp__4126__auto___51693)
{var seq__51659_51694__$1 = temp__4126__auto___51693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51659_51694__$1))
{var c__4299__auto___51695 = cljs.core.chunk_first.call(null,seq__51659_51694__$1);{
var G__51696 = cljs.core.chunk_rest.call(null,seq__51659_51694__$1);
var G__51697 = c__4299__auto___51695;
var G__51698 = cljs.core.count.call(null,c__4299__auto___51695);
var G__51699 = (0);
seq__51659_51684 = G__51696;
chunk__51660_51685 = G__51697;
count__51661_51686 = G__51698;
i__51662_51687 = G__51699;
continue;
}
} else
{var n_51700 = cljs.core.first.call(null,seq__51659_51694__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51700;
goog.events.fireListeners(n_51700,evt.type,false,evt);
}
{
var G__51701 = cljs.core.next.call(null,seq__51659_51694__$1);
var G__51702 = null;
var G__51703 = (0);
var G__51704 = (0);
seq__51659_51684 = G__51701;
chunk__51660_51685 = G__51702;
count__51661_51686 = G__51703;
i__51662_51687 = G__51704;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__51711_51717 = cljs.core.seq.call(null,evt_map);var chunk__51712_51718 = null;var count__51713_51719 = (0);var i__51714_51720 = (0);while(true){
if((i__51714_51720 < count__51713_51719))
{var vec__51715_51721 = cljs.core._nth.call(null,chunk__51712_51718,i__51714_51720);var k_51722 = cljs.core.nth.call(null,vec__51715_51721,(0),null);var v_51723 = cljs.core.nth.call(null,vec__51715_51721,(1),null);(evt[k_51722] = v_51723);
{
var G__51724 = seq__51711_51717;
var G__51725 = chunk__51712_51718;
var G__51726 = count__51713_51719;
var G__51727 = (i__51714_51720 + (1));
seq__51711_51717 = G__51724;
chunk__51712_51718 = G__51725;
count__51713_51719 = G__51726;
i__51714_51720 = G__51727;
continue;
}
} else
{var temp__4126__auto___51728 = cljs.core.seq.call(null,seq__51711_51717);if(temp__4126__auto___51728)
{var seq__51711_51729__$1 = temp__4126__auto___51728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51711_51729__$1))
{var c__4299__auto___51730 = cljs.core.chunk_first.call(null,seq__51711_51729__$1);{
var G__51731 = cljs.core.chunk_rest.call(null,seq__51711_51729__$1);
var G__51732 = c__4299__auto___51730;
var G__51733 = cljs.core.count.call(null,c__4299__auto___51730);
var G__51734 = (0);
seq__51711_51717 = G__51731;
chunk__51712_51718 = G__51732;
count__51713_51719 = G__51733;
i__51714_51720 = G__51734;
continue;
}
} else
{var vec__51716_51735 = cljs.core.first.call(null,seq__51711_51729__$1);var k_51736 = cljs.core.nth.call(null,vec__51716_51735,(0),null);var v_51737 = cljs.core.nth.call(null,vec__51716_51735,(1),null);(evt[k_51736] = v_51737);
{
var G__51738 = cljs.core.next.call(null,seq__51711_51729__$1);
var G__51739 = null;
var G__51740 = (0);
var G__51741 = (0);
seq__51711_51717 = G__51738;
chunk__51712_51718 = G__51739;
count__51713_51719 = G__51740;
i__51714_51720 = G__51741;
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
return (function (p1__51742_SHARP_){return goog.events.getListeners(p1__51742_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map