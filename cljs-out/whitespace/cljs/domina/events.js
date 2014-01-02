// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj33622 = {};return obj33622;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t33626 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t33626 = (function (evt,f,create_listener_function,meta33627){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta33627 = meta33627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t33626.cljs$lang$type = true;
domina.events.t33626.cljs$lang$ctorStr = "domina.events/t33626";
domina.events.t33626.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t33626");
});
domina.events.t33626.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t33626.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t33626.prototype.domina$events$Event$ = true;
domina.events.t33626.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t33626.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t33626.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t33626.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t33626.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t33626.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t33626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33628){var self__ = this;
var _33628__$1 = this;return self__.meta33627;
});
domina.events.t33626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33628,meta33627__$1){var self__ = this;
var _33628__$1 = this;return (new domina.events.t33626(self__.evt,self__.f,self__.create_listener_function,meta33627__$1));
});
domina.events.__GT_t33626 = (function __GT_t33626(evt__$1,f__$1,create_listener_function__$1,meta33627){return (new domina.events.t33626(evt__$1,f__$1,create_listener_function__$1,meta33627));
});
}
return (new domina.events.t33626(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__33633(s__33634){return (new cljs.core.LazySeq(null,(function (){var s__33634__$1 = s__33634;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33634__$1);if(temp__4092__auto__)
{var s__33634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33634__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__33634__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__33636 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__33635 = 0;while(true){
if((i__33635 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__33635);cljs.core.chunk_append.call(null,b__33636,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__33637 = (i__33635 + 1);
i__33635 = G__33637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33636),iter__33633.call(null,cljs.core.chunk_rest.call(null,s__33634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33636),null);
}
} else
{var node = cljs.core.first.call(null,s__33634__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__33633.call(null,cljs.core.rest.call(null,s__33634__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__33646 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33647 = null;var count__33648 = 0;var i__33649 = 0;while(true){
if((i__33649 < count__33648))
{var node = cljs.core._nth.call(null,chunk__33647,i__33649);goog.events.removeAll(node);
{
var G__33654 = seq__33646;
var G__33655 = chunk__33647;
var G__33656 = count__33648;
var G__33657 = (i__33649 + 1);
seq__33646 = G__33654;
chunk__33647 = G__33655;
count__33648 = G__33656;
i__33649 = G__33657;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33646);if(temp__4092__auto__)
{var seq__33646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33646__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33646__$1);{
var G__33658 = cljs.core.chunk_rest.call(null,seq__33646__$1);
var G__33659 = c__4015__auto__;
var G__33660 = cljs.core.count.call(null,c__4015__auto__);
var G__33661 = 0;
seq__33646 = G__33658;
chunk__33647 = G__33659;
count__33648 = G__33660;
i__33649 = G__33661;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33646__$1);goog.events.removeAll(node);
{
var G__33662 = cljs.core.next.call(null,seq__33646__$1);
var G__33663 = null;
var G__33664 = 0;
var G__33665 = 0;
seq__33646 = G__33662;
chunk__33647 = G__33663;
count__33648 = G__33664;
i__33649 = G__33665;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__33650 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33651 = null;var count__33652 = 0;var i__33653 = 0;while(true){
if((i__33653 < count__33652))
{var node = cljs.core._nth.call(null,chunk__33651,i__33653);goog.events.removeAll(node,type__$1);
{
var G__33666 = seq__33650;
var G__33667 = chunk__33651;
var G__33668 = count__33652;
var G__33669 = (i__33653 + 1);
seq__33650 = G__33666;
chunk__33651 = G__33667;
count__33652 = G__33668;
i__33653 = G__33669;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33650);if(temp__4092__auto__)
{var seq__33650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33650__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33650__$1);{
var G__33670 = cljs.core.chunk_rest.call(null,seq__33650__$1);
var G__33671 = c__4015__auto__;
var G__33672 = cljs.core.count.call(null,c__4015__auto__);
var G__33673 = 0;
seq__33650 = G__33670;
chunk__33651 = G__33671;
count__33652 = G__33672;
i__33653 = G__33673;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33650__$1);goog.events.removeAll(node,type__$1);
{
var G__33674 = cljs.core.next.call(null,seq__33650__$1);
var G__33675 = null;
var G__33676 = 0;
var G__33677 = 0;
seq__33650 = G__33674;
chunk__33651 = G__33675;
count__33652 = G__33676;
i__33653 = G__33677;
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
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__33678 = parent;
var G__33679 = cljs.core.cons.call(null,parent,so_far);
n = G__33678;
so_far = G__33679;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__33688_33696 = cljs.core.seq.call(null,ancestors);var chunk__33689_33697 = null;var count__33690_33698 = 0;var i__33691_33699 = 0;while(true){
if((i__33691_33699 < count__33690_33698))
{var n_33700 = cljs.core._nth.call(null,chunk__33689_33697,i__33691_33699);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33700;
goog.events.fireListeners(n_33700,evt.type,true,evt);
}
{
var G__33701 = seq__33688_33696;
var G__33702 = chunk__33689_33697;
var G__33703 = count__33690_33698;
var G__33704 = (i__33691_33699 + 1);
seq__33688_33696 = G__33701;
chunk__33689_33697 = G__33702;
count__33690_33698 = G__33703;
i__33691_33699 = G__33704;
continue;
}
} else
{var temp__4092__auto___33705 = cljs.core.seq.call(null,seq__33688_33696);if(temp__4092__auto___33705)
{var seq__33688_33706__$1 = temp__4092__auto___33705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33688_33706__$1))
{var c__4015__auto___33707 = cljs.core.chunk_first.call(null,seq__33688_33706__$1);{
var G__33708 = cljs.core.chunk_rest.call(null,seq__33688_33706__$1);
var G__33709 = c__4015__auto___33707;
var G__33710 = cljs.core.count.call(null,c__4015__auto___33707);
var G__33711 = 0;
seq__33688_33696 = G__33708;
chunk__33689_33697 = G__33709;
count__33690_33698 = G__33710;
i__33691_33699 = G__33711;
continue;
}
} else
{var n_33712 = cljs.core.first.call(null,seq__33688_33706__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33712;
goog.events.fireListeners(n_33712,evt.type,true,evt);
}
{
var G__33713 = cljs.core.next.call(null,seq__33688_33706__$1);
var G__33714 = null;
var G__33715 = 0;
var G__33716 = 0;
seq__33688_33696 = G__33713;
chunk__33689_33697 = G__33714;
count__33690_33698 = G__33715;
i__33691_33699 = G__33716;
continue;
}
}
} else
{}
}
break;
}
var seq__33692_33717 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__33693_33718 = null;var count__33694_33719 = 0;var i__33695_33720 = 0;while(true){
if((i__33695_33720 < count__33694_33719))
{var n_33721 = cljs.core._nth.call(null,chunk__33693_33718,i__33695_33720);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33721;
goog.events.fireListeners(n_33721,evt.type,false,evt);
}
{
var G__33722 = seq__33692_33717;
var G__33723 = chunk__33693_33718;
var G__33724 = count__33694_33719;
var G__33725 = (i__33695_33720 + 1);
seq__33692_33717 = G__33722;
chunk__33693_33718 = G__33723;
count__33694_33719 = G__33724;
i__33695_33720 = G__33725;
continue;
}
} else
{var temp__4092__auto___33726 = cljs.core.seq.call(null,seq__33692_33717);if(temp__4092__auto___33726)
{var seq__33692_33727__$1 = temp__4092__auto___33726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33692_33727__$1))
{var c__4015__auto___33728 = cljs.core.chunk_first.call(null,seq__33692_33727__$1);{
var G__33729 = cljs.core.chunk_rest.call(null,seq__33692_33727__$1);
var G__33730 = c__4015__auto___33728;
var G__33731 = cljs.core.count.call(null,c__4015__auto___33728);
var G__33732 = 0;
seq__33692_33717 = G__33729;
chunk__33693_33718 = G__33730;
count__33694_33719 = G__33731;
i__33695_33720 = G__33732;
continue;
}
} else
{var n_33733 = cljs.core.first.call(null,seq__33692_33727__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33733;
goog.events.fireListeners(n_33733,evt.type,false,evt);
}
{
var G__33734 = cljs.core.next.call(null,seq__33692_33727__$1);
var G__33735 = null;
var G__33736 = 0;
var G__33737 = 0;
seq__33692_33717 = G__33734;
chunk__33693_33718 = G__33735;
count__33694_33719 = G__33736;
i__33695_33720 = G__33737;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__33744_33750 = cljs.core.seq.call(null,evt_map);var chunk__33745_33751 = null;var count__33746_33752 = 0;var i__33747_33753 = 0;while(true){
if((i__33747_33753 < count__33746_33752))
{var vec__33748_33754 = cljs.core._nth.call(null,chunk__33745_33751,i__33747_33753);var k_33755 = cljs.core.nth.call(null,vec__33748_33754,0,null);var v_33756 = cljs.core.nth.call(null,vec__33748_33754,1,null);(evt[k_33755] = v_33756);
{
var G__33757 = seq__33744_33750;
var G__33758 = chunk__33745_33751;
var G__33759 = count__33746_33752;
var G__33760 = (i__33747_33753 + 1);
seq__33744_33750 = G__33757;
chunk__33745_33751 = G__33758;
count__33746_33752 = G__33759;
i__33747_33753 = G__33760;
continue;
}
} else
{var temp__4092__auto___33761 = cljs.core.seq.call(null,seq__33744_33750);if(temp__4092__auto___33761)
{var seq__33744_33762__$1 = temp__4092__auto___33761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33744_33762__$1))
{var c__4015__auto___33763 = cljs.core.chunk_first.call(null,seq__33744_33762__$1);{
var G__33764 = cljs.core.chunk_rest.call(null,seq__33744_33762__$1);
var G__33765 = c__4015__auto___33763;
var G__33766 = cljs.core.count.call(null,c__4015__auto___33763);
var G__33767 = 0;
seq__33744_33750 = G__33764;
chunk__33745_33751 = G__33765;
count__33746_33752 = G__33766;
i__33747_33753 = G__33767;
continue;
}
} else
{var vec__33749_33768 = cljs.core.first.call(null,seq__33744_33762__$1);var k_33769 = cljs.core.nth.call(null,vec__33749_33768,0,null);var v_33770 = cljs.core.nth.call(null,vec__33749_33768,1,null);(evt[k_33769] = v_33770);
{
var G__33771 = cljs.core.next.call(null,seq__33744_33762__$1);
var G__33772 = null;
var G__33773 = 0;
var G__33774 = 0;
seq__33744_33750 = G__33771;
chunk__33745_33751 = G__33772;
count__33746_33752 = G__33773;
i__33747_33753 = G__33774;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__33775_SHARP_){return goog.events.getListeners(p1__33775_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
