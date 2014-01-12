// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32821 = {};return obj32821;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32825 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32825 = (function (evt,f,create_listener_function,meta32826){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32826 = meta32826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32825.cljs$lang$type = true;
domina.events.t32825.cljs$lang$ctorStr = "domina.events/t32825";
domina.events.t32825.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t32825");
});
domina.events.t32825.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32825.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t32825.prototype.domina$events$Event$ = true;
domina.events.t32825.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32825.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32825.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32825.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32825.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32825.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32827){var self__ = this;
var _32827__$1 = this;return self__.meta32826;
});
domina.events.t32825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32827,meta32826__$1){var self__ = this;
var _32827__$1 = this;return (new domina.events.t32825(self__.evt,self__.f,self__.create_listener_function,meta32826__$1));
});
domina.events.__GT_t32825 = (function __GT_t32825(evt__$1,f__$1,create_listener_function__$1,meta32826){return (new domina.events.t32825(evt__$1,f__$1,create_listener_function__$1,meta32826));
});
}
return (new domina.events.t32825(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__32832(s__32833){return (new cljs.core.LazySeq(null,(function (){var s__32833__$1 = s__32833;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32833__$1);if(temp__4092__auto__)
{var s__32833__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32833__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32833__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32835 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32834 = 0;while(true){
if((i__32834 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__32834);cljs.core.chunk_append.call(null,b__32835,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32836 = (i__32834 + 1);
i__32834 = G__32836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32835),iter__32832.call(null,cljs.core.chunk_rest.call(null,s__32833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32835),null);
}
} else
{var node = cljs.core.first.call(null,s__32833__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32832.call(null,cljs.core.rest.call(null,s__32833__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32845 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32846 = null;var count__32847 = 0;var i__32848 = 0;while(true){
if((i__32848 < count__32847))
{var node = cljs.core._nth.call(null,chunk__32846,i__32848);goog.events.removeAll(node);
{
var G__32853 = seq__32845;
var G__32854 = chunk__32846;
var G__32855 = count__32847;
var G__32856 = (i__32848 + 1);
seq__32845 = G__32853;
chunk__32846 = G__32854;
count__32847 = G__32855;
i__32848 = G__32856;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32845);if(temp__4092__auto__)
{var seq__32845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32845__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32845__$1);{
var G__32857 = cljs.core.chunk_rest.call(null,seq__32845__$1);
var G__32858 = c__4148__auto__;
var G__32859 = cljs.core.count.call(null,c__4148__auto__);
var G__32860 = 0;
seq__32845 = G__32857;
chunk__32846 = G__32858;
count__32847 = G__32859;
i__32848 = G__32860;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32845__$1);goog.events.removeAll(node);
{
var G__32861 = cljs.core.next.call(null,seq__32845__$1);
var G__32862 = null;
var G__32863 = 0;
var G__32864 = 0;
seq__32845 = G__32861;
chunk__32846 = G__32862;
count__32847 = G__32863;
i__32848 = G__32864;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32849 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32850 = null;var count__32851 = 0;var i__32852 = 0;while(true){
if((i__32852 < count__32851))
{var node = cljs.core._nth.call(null,chunk__32850,i__32852);goog.events.removeAll(node,type__$1);
{
var G__32865 = seq__32849;
var G__32866 = chunk__32850;
var G__32867 = count__32851;
var G__32868 = (i__32852 + 1);
seq__32849 = G__32865;
chunk__32850 = G__32866;
count__32851 = G__32867;
i__32852 = G__32868;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32849);if(temp__4092__auto__)
{var seq__32849__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32849__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32849__$1);{
var G__32869 = cljs.core.chunk_rest.call(null,seq__32849__$1);
var G__32870 = c__4148__auto__;
var G__32871 = cljs.core.count.call(null,c__4148__auto__);
var G__32872 = 0;
seq__32849 = G__32869;
chunk__32850 = G__32870;
count__32851 = G__32871;
i__32852 = G__32872;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32849__$1);goog.events.removeAll(node,type__$1);
{
var G__32873 = cljs.core.next.call(null,seq__32849__$1);
var G__32874 = null;
var G__32875 = 0;
var G__32876 = 0;
seq__32849 = G__32873;
chunk__32850 = G__32874;
count__32851 = G__32875;
i__32852 = G__32876;
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
var G__32877 = parent;
var G__32878 = cljs.core.cons.call(null,parent,so_far);
n = G__32877;
so_far = G__32878;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32887_32895 = cljs.core.seq.call(null,ancestors);var chunk__32888_32896 = null;var count__32889_32897 = 0;var i__32890_32898 = 0;while(true){
if((i__32890_32898 < count__32889_32897))
{var n_32899 = cljs.core._nth.call(null,chunk__32888_32896,i__32890_32898);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32899;
goog.events.fireListeners(n_32899,evt.type,true,evt);
}
{
var G__32900 = seq__32887_32895;
var G__32901 = chunk__32888_32896;
var G__32902 = count__32889_32897;
var G__32903 = (i__32890_32898 + 1);
seq__32887_32895 = G__32900;
chunk__32888_32896 = G__32901;
count__32889_32897 = G__32902;
i__32890_32898 = G__32903;
continue;
}
} else
{var temp__4092__auto___32904 = cljs.core.seq.call(null,seq__32887_32895);if(temp__4092__auto___32904)
{var seq__32887_32905__$1 = temp__4092__auto___32904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32887_32905__$1))
{var c__4148__auto___32906 = cljs.core.chunk_first.call(null,seq__32887_32905__$1);{
var G__32907 = cljs.core.chunk_rest.call(null,seq__32887_32905__$1);
var G__32908 = c__4148__auto___32906;
var G__32909 = cljs.core.count.call(null,c__4148__auto___32906);
var G__32910 = 0;
seq__32887_32895 = G__32907;
chunk__32888_32896 = G__32908;
count__32889_32897 = G__32909;
i__32890_32898 = G__32910;
continue;
}
} else
{var n_32911 = cljs.core.first.call(null,seq__32887_32905__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32911;
goog.events.fireListeners(n_32911,evt.type,true,evt);
}
{
var G__32912 = cljs.core.next.call(null,seq__32887_32905__$1);
var G__32913 = null;
var G__32914 = 0;
var G__32915 = 0;
seq__32887_32895 = G__32912;
chunk__32888_32896 = G__32913;
count__32889_32897 = G__32914;
i__32890_32898 = G__32915;
continue;
}
}
} else
{}
}
break;
}
var seq__32891_32916 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32892_32917 = null;var count__32893_32918 = 0;var i__32894_32919 = 0;while(true){
if((i__32894_32919 < count__32893_32918))
{var n_32920 = cljs.core._nth.call(null,chunk__32892_32917,i__32894_32919);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32920;
goog.events.fireListeners(n_32920,evt.type,false,evt);
}
{
var G__32921 = seq__32891_32916;
var G__32922 = chunk__32892_32917;
var G__32923 = count__32893_32918;
var G__32924 = (i__32894_32919 + 1);
seq__32891_32916 = G__32921;
chunk__32892_32917 = G__32922;
count__32893_32918 = G__32923;
i__32894_32919 = G__32924;
continue;
}
} else
{var temp__4092__auto___32925 = cljs.core.seq.call(null,seq__32891_32916);if(temp__4092__auto___32925)
{var seq__32891_32926__$1 = temp__4092__auto___32925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32891_32926__$1))
{var c__4148__auto___32927 = cljs.core.chunk_first.call(null,seq__32891_32926__$1);{
var G__32928 = cljs.core.chunk_rest.call(null,seq__32891_32926__$1);
var G__32929 = c__4148__auto___32927;
var G__32930 = cljs.core.count.call(null,c__4148__auto___32927);
var G__32931 = 0;
seq__32891_32916 = G__32928;
chunk__32892_32917 = G__32929;
count__32893_32918 = G__32930;
i__32894_32919 = G__32931;
continue;
}
} else
{var n_32932 = cljs.core.first.call(null,seq__32891_32926__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32932;
goog.events.fireListeners(n_32932,evt.type,false,evt);
}
{
var G__32933 = cljs.core.next.call(null,seq__32891_32926__$1);
var G__32934 = null;
var G__32935 = 0;
var G__32936 = 0;
seq__32891_32916 = G__32933;
chunk__32892_32917 = G__32934;
count__32893_32918 = G__32935;
i__32894_32919 = G__32936;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32943_32949 = cljs.core.seq.call(null,evt_map);var chunk__32944_32950 = null;var count__32945_32951 = 0;var i__32946_32952 = 0;while(true){
if((i__32946_32952 < count__32945_32951))
{var vec__32947_32953 = cljs.core._nth.call(null,chunk__32944_32950,i__32946_32952);var k_32954 = cljs.core.nth.call(null,vec__32947_32953,0,null);var v_32955 = cljs.core.nth.call(null,vec__32947_32953,1,null);(evt[k_32954] = v_32955);
{
var G__32956 = seq__32943_32949;
var G__32957 = chunk__32944_32950;
var G__32958 = count__32945_32951;
var G__32959 = (i__32946_32952 + 1);
seq__32943_32949 = G__32956;
chunk__32944_32950 = G__32957;
count__32945_32951 = G__32958;
i__32946_32952 = G__32959;
continue;
}
} else
{var temp__4092__auto___32960 = cljs.core.seq.call(null,seq__32943_32949);if(temp__4092__auto___32960)
{var seq__32943_32961__$1 = temp__4092__auto___32960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32943_32961__$1))
{var c__4148__auto___32962 = cljs.core.chunk_first.call(null,seq__32943_32961__$1);{
var G__32963 = cljs.core.chunk_rest.call(null,seq__32943_32961__$1);
var G__32964 = c__4148__auto___32962;
var G__32965 = cljs.core.count.call(null,c__4148__auto___32962);
var G__32966 = 0;
seq__32943_32949 = G__32963;
chunk__32944_32950 = G__32964;
count__32945_32951 = G__32965;
i__32946_32952 = G__32966;
continue;
}
} else
{var vec__32948_32967 = cljs.core.first.call(null,seq__32943_32961__$1);var k_32968 = cljs.core.nth.call(null,vec__32948_32967,0,null);var v_32969 = cljs.core.nth.call(null,vec__32948_32967,1,null);(evt[k_32968] = v_32969);
{
var G__32970 = cljs.core.next.call(null,seq__32943_32961__$1);
var G__32971 = null;
var G__32972 = 0;
var G__32973 = 0;
seq__32943_32949 = G__32970;
chunk__32944_32950 = G__32971;
count__32945_32951 = G__32972;
i__32946_32952 = G__32973;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__32974_SHARP_){return goog.events.getListeners(p1__32974_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
