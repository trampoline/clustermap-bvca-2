// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj15662 = {};return obj15662;
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
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t15666 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t15666 = (function (evt,f,create_listener_function,meta15667){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta15667 = meta15667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t15666.cljs$lang$type = true;
domina.events.t15666.cljs$lang$ctorStr = "domina.events/t15666";
domina.events.t15666.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t15666");
});
domina.events.t15666.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t15666.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t15666.prototype.domina$events$Event$ = true;
domina.events.t15666.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t15666.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t15666.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t15666.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t15666.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t15666.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t15666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15668){var self__ = this;
var _15668__$1 = this;return self__.meta15667;
});
domina.events.t15666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15668,meta15667__$1){var self__ = this;
var _15668__$1 = this;return (new domina.events.t15666(self__.evt,self__.f,self__.create_listener_function,meta15667__$1));
});
domina.events.__GT_t15666 = (function __GT_t15666(evt__$1,f__$1,create_listener_function__$1,meta15667){return (new domina.events.t15666(evt__$1,f__$1,create_listener_function__$1,meta15667));
});
}
return (new domina.events.t15666(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__15673(s__15674){return (new cljs.core.LazySeq(null,(function (){var s__15674__$1 = s__15674;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15674__$1);if(temp__4092__auto__)
{var s__15674__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15674__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15674__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15676 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15675 = 0;while(true){
if((i__15675 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__15675);cljs.core.chunk_append.call(null,b__15676,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__15677 = (i__15675 + 1);
i__15675 = G__15677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15676),iter__15673.call(null,cljs.core.chunk_rest.call(null,s__15674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15676),null);
}
} else
{var node = cljs.core.first.call(null,s__15674__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__15673.call(null,cljs.core.rest.call(null,s__15674__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__15686 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15687 = null;var count__15688 = 0;var i__15689 = 0;while(true){
if((i__15689 < count__15688))
{var node = cljs.core._nth.call(null,chunk__15687,i__15689);goog.events.removeAll(node);
{
var G__15694 = seq__15686;
var G__15695 = chunk__15687;
var G__15696 = count__15688;
var G__15697 = (i__15689 + 1);
seq__15686 = G__15694;
chunk__15687 = G__15695;
count__15688 = G__15696;
i__15689 = G__15697;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15686);if(temp__4092__auto__)
{var seq__15686__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15686__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15686__$1);{
var G__15698 = cljs.core.chunk_rest.call(null,seq__15686__$1);
var G__15699 = c__4148__auto__;
var G__15700 = cljs.core.count.call(null,c__4148__auto__);
var G__15701 = 0;
seq__15686 = G__15698;
chunk__15687 = G__15699;
count__15688 = G__15700;
i__15689 = G__15701;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15686__$1);goog.events.removeAll(node);
{
var G__15702 = cljs.core.next.call(null,seq__15686__$1);
var G__15703 = null;
var G__15704 = 0;
var G__15705 = 0;
seq__15686 = G__15702;
chunk__15687 = G__15703;
count__15688 = G__15704;
i__15689 = G__15705;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__15690 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15691 = null;var count__15692 = 0;var i__15693 = 0;while(true){
if((i__15693 < count__15692))
{var node = cljs.core._nth.call(null,chunk__15691,i__15693);goog.events.removeAll(node,type__$1);
{
var G__15706 = seq__15690;
var G__15707 = chunk__15691;
var G__15708 = count__15692;
var G__15709 = (i__15693 + 1);
seq__15690 = G__15706;
chunk__15691 = G__15707;
count__15692 = G__15708;
i__15693 = G__15709;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15690);if(temp__4092__auto__)
{var seq__15690__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15690__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15690__$1);{
var G__15710 = cljs.core.chunk_rest.call(null,seq__15690__$1);
var G__15711 = c__4148__auto__;
var G__15712 = cljs.core.count.call(null,c__4148__auto__);
var G__15713 = 0;
seq__15690 = G__15710;
chunk__15691 = G__15711;
count__15692 = G__15712;
i__15693 = G__15713;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15690__$1);goog.events.removeAll(node,type__$1);
{
var G__15714 = cljs.core.next.call(null,seq__15690__$1);
var G__15715 = null;
var G__15716 = 0;
var G__15717 = 0;
seq__15690 = G__15714;
chunk__15691 = G__15715;
count__15692 = G__15716;
i__15693 = G__15717;
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
var G__15718 = parent;
var G__15719 = cljs.core.cons.call(null,parent,so_far);
n = G__15718;
so_far = G__15719;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__15728_15736 = cljs.core.seq.call(null,ancestors);var chunk__15729_15737 = null;var count__15730_15738 = 0;var i__15731_15739 = 0;while(true){
if((i__15731_15739 < count__15730_15738))
{var n_15740 = cljs.core._nth.call(null,chunk__15729_15737,i__15731_15739);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15740;
goog.events.fireListeners(n_15740,evt.type,true,evt);
}
{
var G__15741 = seq__15728_15736;
var G__15742 = chunk__15729_15737;
var G__15743 = count__15730_15738;
var G__15744 = (i__15731_15739 + 1);
seq__15728_15736 = G__15741;
chunk__15729_15737 = G__15742;
count__15730_15738 = G__15743;
i__15731_15739 = G__15744;
continue;
}
} else
{var temp__4092__auto___15745 = cljs.core.seq.call(null,seq__15728_15736);if(temp__4092__auto___15745)
{var seq__15728_15746__$1 = temp__4092__auto___15745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15728_15746__$1))
{var c__4148__auto___15747 = cljs.core.chunk_first.call(null,seq__15728_15746__$1);{
var G__15748 = cljs.core.chunk_rest.call(null,seq__15728_15746__$1);
var G__15749 = c__4148__auto___15747;
var G__15750 = cljs.core.count.call(null,c__4148__auto___15747);
var G__15751 = 0;
seq__15728_15736 = G__15748;
chunk__15729_15737 = G__15749;
count__15730_15738 = G__15750;
i__15731_15739 = G__15751;
continue;
}
} else
{var n_15752 = cljs.core.first.call(null,seq__15728_15746__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15752;
goog.events.fireListeners(n_15752,evt.type,true,evt);
}
{
var G__15753 = cljs.core.next.call(null,seq__15728_15746__$1);
var G__15754 = null;
var G__15755 = 0;
var G__15756 = 0;
seq__15728_15736 = G__15753;
chunk__15729_15737 = G__15754;
count__15730_15738 = G__15755;
i__15731_15739 = G__15756;
continue;
}
}
} else
{}
}
break;
}
var seq__15732_15757 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__15733_15758 = null;var count__15734_15759 = 0;var i__15735_15760 = 0;while(true){
if((i__15735_15760 < count__15734_15759))
{var n_15761 = cljs.core._nth.call(null,chunk__15733_15758,i__15735_15760);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15761;
goog.events.fireListeners(n_15761,evt.type,false,evt);
}
{
var G__15762 = seq__15732_15757;
var G__15763 = chunk__15733_15758;
var G__15764 = count__15734_15759;
var G__15765 = (i__15735_15760 + 1);
seq__15732_15757 = G__15762;
chunk__15733_15758 = G__15763;
count__15734_15759 = G__15764;
i__15735_15760 = G__15765;
continue;
}
} else
{var temp__4092__auto___15766 = cljs.core.seq.call(null,seq__15732_15757);if(temp__4092__auto___15766)
{var seq__15732_15767__$1 = temp__4092__auto___15766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15732_15767__$1))
{var c__4148__auto___15768 = cljs.core.chunk_first.call(null,seq__15732_15767__$1);{
var G__15769 = cljs.core.chunk_rest.call(null,seq__15732_15767__$1);
var G__15770 = c__4148__auto___15768;
var G__15771 = cljs.core.count.call(null,c__4148__auto___15768);
var G__15772 = 0;
seq__15732_15757 = G__15769;
chunk__15733_15758 = G__15770;
count__15734_15759 = G__15771;
i__15735_15760 = G__15772;
continue;
}
} else
{var n_15773 = cljs.core.first.call(null,seq__15732_15767__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15773;
goog.events.fireListeners(n_15773,evt.type,false,evt);
}
{
var G__15774 = cljs.core.next.call(null,seq__15732_15767__$1);
var G__15775 = null;
var G__15776 = 0;
var G__15777 = 0;
seq__15732_15757 = G__15774;
chunk__15733_15758 = G__15775;
count__15734_15759 = G__15776;
i__15735_15760 = G__15777;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__15784_15790 = cljs.core.seq.call(null,evt_map);var chunk__15785_15791 = null;var count__15786_15792 = 0;var i__15787_15793 = 0;while(true){
if((i__15787_15793 < count__15786_15792))
{var vec__15788_15794 = cljs.core._nth.call(null,chunk__15785_15791,i__15787_15793);var k_15795 = cljs.core.nth.call(null,vec__15788_15794,0,null);var v_15796 = cljs.core.nth.call(null,vec__15788_15794,1,null);(evt[k_15795] = v_15796);
{
var G__15797 = seq__15784_15790;
var G__15798 = chunk__15785_15791;
var G__15799 = count__15786_15792;
var G__15800 = (i__15787_15793 + 1);
seq__15784_15790 = G__15797;
chunk__15785_15791 = G__15798;
count__15786_15792 = G__15799;
i__15787_15793 = G__15800;
continue;
}
} else
{var temp__4092__auto___15801 = cljs.core.seq.call(null,seq__15784_15790);if(temp__4092__auto___15801)
{var seq__15784_15802__$1 = temp__4092__auto___15801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15784_15802__$1))
{var c__4148__auto___15803 = cljs.core.chunk_first.call(null,seq__15784_15802__$1);{
var G__15804 = cljs.core.chunk_rest.call(null,seq__15784_15802__$1);
var G__15805 = c__4148__auto___15803;
var G__15806 = cljs.core.count.call(null,c__4148__auto___15803);
var G__15807 = 0;
seq__15784_15790 = G__15804;
chunk__15785_15791 = G__15805;
count__15786_15792 = G__15806;
i__15787_15793 = G__15807;
continue;
}
} else
{var vec__15789_15808 = cljs.core.first.call(null,seq__15784_15802__$1);var k_15809 = cljs.core.nth.call(null,vec__15789_15808,0,null);var v_15810 = cljs.core.nth.call(null,vec__15789_15808,1,null);(evt[k_15809] = v_15810);
{
var G__15811 = cljs.core.next.call(null,seq__15784_15802__$1);
var G__15812 = null;
var G__15813 = 0;
var G__15814 = 0;
seq__15784_15790 = G__15811;
chunk__15785_15791 = G__15812;
count__15786_15792 = G__15813;
i__15787_15793 = G__15814;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15815_SHARP_){return goog.events.getListeners(p1__15815_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map