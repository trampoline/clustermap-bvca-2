// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj35708 = {};return obj35708;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t35712 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t35712 = (function (evt,f,create_listener_function,meta35713){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta35713 = meta35713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t35712.cljs$lang$type = true;
domina.events.t35712.cljs$lang$ctorStr = "domina.events/t35712";
domina.events.t35712.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t35712");
});
domina.events.t35712.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t35712.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t35712.prototype.domina$events$Event$ = true;
domina.events.t35712.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t35712.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t35712.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t35712.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t35712.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t35712.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t35712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35714){var self__ = this;
var _35714__$1 = this;return self__.meta35713;
});
domina.events.t35712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35714,meta35713__$1){var self__ = this;
var _35714__$1 = this;return (new domina.events.t35712(self__.evt,self__.f,self__.create_listener_function,meta35713__$1));
});
domina.events.__GT_t35712 = (function __GT_t35712(evt__$1,f__$1,create_listener_function__$1,meta35713){return (new domina.events.t35712(evt__$1,f__$1,create_listener_function__$1,meta35713));
});
}
return (new domina.events.t35712(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__35719(s__35720){return (new cljs.core.LazySeq(null,(function (){var s__35720__$1 = s__35720;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35720__$1);if(temp__4092__auto__)
{var s__35720__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35720__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35720__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35722 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35721 = 0;while(true){
if((i__35721 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__35721);cljs.core.chunk_append.call(null,b__35722,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__35723 = (i__35721 + 1);
i__35721 = G__35723;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35722),iter__35719.call(null,cljs.core.chunk_rest.call(null,s__35720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35722),null);
}
} else
{var node = cljs.core.first.call(null,s__35720__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__35719.call(null,cljs.core.rest.call(null,s__35720__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__35732 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35733 = null;var count__35734 = 0;var i__35735 = 0;while(true){
if((i__35735 < count__35734))
{var node = cljs.core._nth.call(null,chunk__35733,i__35735);goog.events.removeAll(node);
{
var G__35740 = seq__35732;
var G__35741 = chunk__35733;
var G__35742 = count__35734;
var G__35743 = (i__35735 + 1);
seq__35732 = G__35740;
chunk__35733 = G__35741;
count__35734 = G__35742;
i__35735 = G__35743;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35732);if(temp__4092__auto__)
{var seq__35732__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35732__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35732__$1);{
var G__35744 = cljs.core.chunk_rest.call(null,seq__35732__$1);
var G__35745 = c__4148__auto__;
var G__35746 = cljs.core.count.call(null,c__4148__auto__);
var G__35747 = 0;
seq__35732 = G__35744;
chunk__35733 = G__35745;
count__35734 = G__35746;
i__35735 = G__35747;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35732__$1);goog.events.removeAll(node);
{
var G__35748 = cljs.core.next.call(null,seq__35732__$1);
var G__35749 = null;
var G__35750 = 0;
var G__35751 = 0;
seq__35732 = G__35748;
chunk__35733 = G__35749;
count__35734 = G__35750;
i__35735 = G__35751;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__35736 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35737 = null;var count__35738 = 0;var i__35739 = 0;while(true){
if((i__35739 < count__35738))
{var node = cljs.core._nth.call(null,chunk__35737,i__35739);goog.events.removeAll(node,type__$1);
{
var G__35752 = seq__35736;
var G__35753 = chunk__35737;
var G__35754 = count__35738;
var G__35755 = (i__35739 + 1);
seq__35736 = G__35752;
chunk__35737 = G__35753;
count__35738 = G__35754;
i__35739 = G__35755;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35736);if(temp__4092__auto__)
{var seq__35736__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35736__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35736__$1);{
var G__35756 = cljs.core.chunk_rest.call(null,seq__35736__$1);
var G__35757 = c__4148__auto__;
var G__35758 = cljs.core.count.call(null,c__4148__auto__);
var G__35759 = 0;
seq__35736 = G__35756;
chunk__35737 = G__35757;
count__35738 = G__35758;
i__35739 = G__35759;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35736__$1);goog.events.removeAll(node,type__$1);
{
var G__35760 = cljs.core.next.call(null,seq__35736__$1);
var G__35761 = null;
var G__35762 = 0;
var G__35763 = 0;
seq__35736 = G__35760;
chunk__35737 = G__35761;
count__35738 = G__35762;
i__35739 = G__35763;
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
var G__35764 = parent;
var G__35765 = cljs.core.cons.call(null,parent,so_far);
n = G__35764;
so_far = G__35765;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__35774_35782 = cljs.core.seq.call(null,ancestors);var chunk__35775_35783 = null;var count__35776_35784 = 0;var i__35777_35785 = 0;while(true){
if((i__35777_35785 < count__35776_35784))
{var n_35786 = cljs.core._nth.call(null,chunk__35775_35783,i__35777_35785);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35786;
goog.events.fireListeners(n_35786,evt.type,true,evt);
}
{
var G__35787 = seq__35774_35782;
var G__35788 = chunk__35775_35783;
var G__35789 = count__35776_35784;
var G__35790 = (i__35777_35785 + 1);
seq__35774_35782 = G__35787;
chunk__35775_35783 = G__35788;
count__35776_35784 = G__35789;
i__35777_35785 = G__35790;
continue;
}
} else
{var temp__4092__auto___35791 = cljs.core.seq.call(null,seq__35774_35782);if(temp__4092__auto___35791)
{var seq__35774_35792__$1 = temp__4092__auto___35791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35774_35792__$1))
{var c__4148__auto___35793 = cljs.core.chunk_first.call(null,seq__35774_35792__$1);{
var G__35794 = cljs.core.chunk_rest.call(null,seq__35774_35792__$1);
var G__35795 = c__4148__auto___35793;
var G__35796 = cljs.core.count.call(null,c__4148__auto___35793);
var G__35797 = 0;
seq__35774_35782 = G__35794;
chunk__35775_35783 = G__35795;
count__35776_35784 = G__35796;
i__35777_35785 = G__35797;
continue;
}
} else
{var n_35798 = cljs.core.first.call(null,seq__35774_35792__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35798;
goog.events.fireListeners(n_35798,evt.type,true,evt);
}
{
var G__35799 = cljs.core.next.call(null,seq__35774_35792__$1);
var G__35800 = null;
var G__35801 = 0;
var G__35802 = 0;
seq__35774_35782 = G__35799;
chunk__35775_35783 = G__35800;
count__35776_35784 = G__35801;
i__35777_35785 = G__35802;
continue;
}
}
} else
{}
}
break;
}
var seq__35778_35803 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__35779_35804 = null;var count__35780_35805 = 0;var i__35781_35806 = 0;while(true){
if((i__35781_35806 < count__35780_35805))
{var n_35807 = cljs.core._nth.call(null,chunk__35779_35804,i__35781_35806);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35807;
goog.events.fireListeners(n_35807,evt.type,false,evt);
}
{
var G__35808 = seq__35778_35803;
var G__35809 = chunk__35779_35804;
var G__35810 = count__35780_35805;
var G__35811 = (i__35781_35806 + 1);
seq__35778_35803 = G__35808;
chunk__35779_35804 = G__35809;
count__35780_35805 = G__35810;
i__35781_35806 = G__35811;
continue;
}
} else
{var temp__4092__auto___35812 = cljs.core.seq.call(null,seq__35778_35803);if(temp__4092__auto___35812)
{var seq__35778_35813__$1 = temp__4092__auto___35812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35778_35813__$1))
{var c__4148__auto___35814 = cljs.core.chunk_first.call(null,seq__35778_35813__$1);{
var G__35815 = cljs.core.chunk_rest.call(null,seq__35778_35813__$1);
var G__35816 = c__4148__auto___35814;
var G__35817 = cljs.core.count.call(null,c__4148__auto___35814);
var G__35818 = 0;
seq__35778_35803 = G__35815;
chunk__35779_35804 = G__35816;
count__35780_35805 = G__35817;
i__35781_35806 = G__35818;
continue;
}
} else
{var n_35819 = cljs.core.first.call(null,seq__35778_35813__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35819;
goog.events.fireListeners(n_35819,evt.type,false,evt);
}
{
var G__35820 = cljs.core.next.call(null,seq__35778_35813__$1);
var G__35821 = null;
var G__35822 = 0;
var G__35823 = 0;
seq__35778_35803 = G__35820;
chunk__35779_35804 = G__35821;
count__35780_35805 = G__35822;
i__35781_35806 = G__35823;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__35830_35836 = cljs.core.seq.call(null,evt_map);var chunk__35831_35837 = null;var count__35832_35838 = 0;var i__35833_35839 = 0;while(true){
if((i__35833_35839 < count__35832_35838))
{var vec__35834_35840 = cljs.core._nth.call(null,chunk__35831_35837,i__35833_35839);var k_35841 = cljs.core.nth.call(null,vec__35834_35840,0,null);var v_35842 = cljs.core.nth.call(null,vec__35834_35840,1,null);(evt[k_35841] = v_35842);
{
var G__35843 = seq__35830_35836;
var G__35844 = chunk__35831_35837;
var G__35845 = count__35832_35838;
var G__35846 = (i__35833_35839 + 1);
seq__35830_35836 = G__35843;
chunk__35831_35837 = G__35844;
count__35832_35838 = G__35845;
i__35833_35839 = G__35846;
continue;
}
} else
{var temp__4092__auto___35847 = cljs.core.seq.call(null,seq__35830_35836);if(temp__4092__auto___35847)
{var seq__35830_35848__$1 = temp__4092__auto___35847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35830_35848__$1))
{var c__4148__auto___35849 = cljs.core.chunk_first.call(null,seq__35830_35848__$1);{
var G__35850 = cljs.core.chunk_rest.call(null,seq__35830_35848__$1);
var G__35851 = c__4148__auto___35849;
var G__35852 = cljs.core.count.call(null,c__4148__auto___35849);
var G__35853 = 0;
seq__35830_35836 = G__35850;
chunk__35831_35837 = G__35851;
count__35832_35838 = G__35852;
i__35833_35839 = G__35853;
continue;
}
} else
{var vec__35835_35854 = cljs.core.first.call(null,seq__35830_35848__$1);var k_35855 = cljs.core.nth.call(null,vec__35835_35854,0,null);var v_35856 = cljs.core.nth.call(null,vec__35835_35854,1,null);(evt[k_35855] = v_35856);
{
var G__35857 = cljs.core.next.call(null,seq__35830_35848__$1);
var G__35858 = null;
var G__35859 = 0;
var G__35860 = 0;
seq__35830_35836 = G__35857;
chunk__35831_35837 = G__35858;
count__35832_35838 = G__35859;
i__35833_35839 = G__35860;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__35861_SHARP_){return goog.events.getListeners(p1__35861_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
