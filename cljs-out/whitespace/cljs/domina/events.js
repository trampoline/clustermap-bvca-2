// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34818 = {};return obj34818;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34822 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34822 = (function (evt,f,create_listener_function,meta34823){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34822.cljs$lang$type = true;
domina.events.t34822.cljs$lang$ctorStr = "domina.events/t34822";
domina.events.t34822.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t34822");
});
domina.events.t34822.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34822.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t34822.prototype.domina$events$Event$ = true;
domina.events.t34822.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34822.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34822.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34822.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34822.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34822.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){var self__ = this;
var _34824__$1 = this;return self__.meta34823;
});
domina.events.t34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){var self__ = this;
var _34824__$1 = this;return (new domina.events.t34822(self__.evt,self__.f,self__.create_listener_function,meta34823__$1));
});
domina.events.__GT_t34822 = (function __GT_t34822(evt__$1,f__$1,create_listener_function__$1,meta34823){return (new domina.events.t34822(evt__$1,f__$1,create_listener_function__$1,meta34823));
});
}
return (new domina.events.t34822(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__34829(s__34830){return (new cljs.core.LazySeq(null,(function (){var s__34830__$1 = s__34830;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34830__$1);if(temp__4092__auto__)
{var s__34830__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34830__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34830__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34832 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34831 = 0;while(true){
if((i__34831 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__34831);cljs.core.chunk_append.call(null,b__34832,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34833 = (i__34831 + 1);
i__34831 = G__34833;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),iter__34829.call(null,cljs.core.chunk_rest.call(null,s__34830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),null);
}
} else
{var node = cljs.core.first.call(null,s__34830__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34829.call(null,cljs.core.rest.call(null,s__34830__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__34842 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34843 = null;var count__34844 = 0;var i__34845 = 0;while(true){
if((i__34845 < count__34844))
{var node = cljs.core._nth.call(null,chunk__34843,i__34845);goog.events.removeAll(node);
{
var G__34850 = seq__34842;
var G__34851 = chunk__34843;
var G__34852 = count__34844;
var G__34853 = (i__34845 + 1);
seq__34842 = G__34850;
chunk__34843 = G__34851;
count__34844 = G__34852;
i__34845 = G__34853;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34842);if(temp__4092__auto__)
{var seq__34842__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34842__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34842__$1);{
var G__34854 = cljs.core.chunk_rest.call(null,seq__34842__$1);
var G__34855 = c__4148__auto__;
var G__34856 = cljs.core.count.call(null,c__4148__auto__);
var G__34857 = 0;
seq__34842 = G__34854;
chunk__34843 = G__34855;
count__34844 = G__34856;
i__34845 = G__34857;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34842__$1);goog.events.removeAll(node);
{
var G__34858 = cljs.core.next.call(null,seq__34842__$1);
var G__34859 = null;
var G__34860 = 0;
var G__34861 = 0;
seq__34842 = G__34858;
chunk__34843 = G__34859;
count__34844 = G__34860;
i__34845 = G__34861;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__34846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34847 = null;var count__34848 = 0;var i__34849 = 0;while(true){
if((i__34849 < count__34848))
{var node = cljs.core._nth.call(null,chunk__34847,i__34849);goog.events.removeAll(node,type__$1);
{
var G__34862 = seq__34846;
var G__34863 = chunk__34847;
var G__34864 = count__34848;
var G__34865 = (i__34849 + 1);
seq__34846 = G__34862;
chunk__34847 = G__34863;
count__34848 = G__34864;
i__34849 = G__34865;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34846);if(temp__4092__auto__)
{var seq__34846__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34846__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34846__$1);{
var G__34866 = cljs.core.chunk_rest.call(null,seq__34846__$1);
var G__34867 = c__4148__auto__;
var G__34868 = cljs.core.count.call(null,c__4148__auto__);
var G__34869 = 0;
seq__34846 = G__34866;
chunk__34847 = G__34867;
count__34848 = G__34868;
i__34849 = G__34869;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34846__$1);goog.events.removeAll(node,type__$1);
{
var G__34870 = cljs.core.next.call(null,seq__34846__$1);
var G__34871 = null;
var G__34872 = 0;
var G__34873 = 0;
seq__34846 = G__34870;
chunk__34847 = G__34871;
count__34848 = G__34872;
i__34849 = G__34873;
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
var G__34874 = parent;
var G__34875 = cljs.core.cons.call(null,parent,so_far);
n = G__34874;
so_far = G__34875;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__34884_34892 = cljs.core.seq.call(null,ancestors);var chunk__34885_34893 = null;var count__34886_34894 = 0;var i__34887_34895 = 0;while(true){
if((i__34887_34895 < count__34886_34894))
{var n_34896 = cljs.core._nth.call(null,chunk__34885_34893,i__34887_34895);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34896;
goog.events.fireListeners(n_34896,evt.type,true,evt);
}
{
var G__34897 = seq__34884_34892;
var G__34898 = chunk__34885_34893;
var G__34899 = count__34886_34894;
var G__34900 = (i__34887_34895 + 1);
seq__34884_34892 = G__34897;
chunk__34885_34893 = G__34898;
count__34886_34894 = G__34899;
i__34887_34895 = G__34900;
continue;
}
} else
{var temp__4092__auto___34901 = cljs.core.seq.call(null,seq__34884_34892);if(temp__4092__auto___34901)
{var seq__34884_34902__$1 = temp__4092__auto___34901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34884_34902__$1))
{var c__4148__auto___34903 = cljs.core.chunk_first.call(null,seq__34884_34902__$1);{
var G__34904 = cljs.core.chunk_rest.call(null,seq__34884_34902__$1);
var G__34905 = c__4148__auto___34903;
var G__34906 = cljs.core.count.call(null,c__4148__auto___34903);
var G__34907 = 0;
seq__34884_34892 = G__34904;
chunk__34885_34893 = G__34905;
count__34886_34894 = G__34906;
i__34887_34895 = G__34907;
continue;
}
} else
{var n_34908 = cljs.core.first.call(null,seq__34884_34902__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34908;
goog.events.fireListeners(n_34908,evt.type,true,evt);
}
{
var G__34909 = cljs.core.next.call(null,seq__34884_34902__$1);
var G__34910 = null;
var G__34911 = 0;
var G__34912 = 0;
seq__34884_34892 = G__34909;
chunk__34885_34893 = G__34910;
count__34886_34894 = G__34911;
i__34887_34895 = G__34912;
continue;
}
}
} else
{}
}
break;
}
var seq__34888_34913 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__34889_34914 = null;var count__34890_34915 = 0;var i__34891_34916 = 0;while(true){
if((i__34891_34916 < count__34890_34915))
{var n_34917 = cljs.core._nth.call(null,chunk__34889_34914,i__34891_34916);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34917;
goog.events.fireListeners(n_34917,evt.type,false,evt);
}
{
var G__34918 = seq__34888_34913;
var G__34919 = chunk__34889_34914;
var G__34920 = count__34890_34915;
var G__34921 = (i__34891_34916 + 1);
seq__34888_34913 = G__34918;
chunk__34889_34914 = G__34919;
count__34890_34915 = G__34920;
i__34891_34916 = G__34921;
continue;
}
} else
{var temp__4092__auto___34922 = cljs.core.seq.call(null,seq__34888_34913);if(temp__4092__auto___34922)
{var seq__34888_34923__$1 = temp__4092__auto___34922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34888_34923__$1))
{var c__4148__auto___34924 = cljs.core.chunk_first.call(null,seq__34888_34923__$1);{
var G__34925 = cljs.core.chunk_rest.call(null,seq__34888_34923__$1);
var G__34926 = c__4148__auto___34924;
var G__34927 = cljs.core.count.call(null,c__4148__auto___34924);
var G__34928 = 0;
seq__34888_34913 = G__34925;
chunk__34889_34914 = G__34926;
count__34890_34915 = G__34927;
i__34891_34916 = G__34928;
continue;
}
} else
{var n_34929 = cljs.core.first.call(null,seq__34888_34923__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34929;
goog.events.fireListeners(n_34929,evt.type,false,evt);
}
{
var G__34930 = cljs.core.next.call(null,seq__34888_34923__$1);
var G__34931 = null;
var G__34932 = 0;
var G__34933 = 0;
seq__34888_34913 = G__34930;
chunk__34889_34914 = G__34931;
count__34890_34915 = G__34932;
i__34891_34916 = G__34933;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__34940_34946 = cljs.core.seq.call(null,evt_map);var chunk__34941_34947 = null;var count__34942_34948 = 0;var i__34943_34949 = 0;while(true){
if((i__34943_34949 < count__34942_34948))
{var vec__34944_34950 = cljs.core._nth.call(null,chunk__34941_34947,i__34943_34949);var k_34951 = cljs.core.nth.call(null,vec__34944_34950,0,null);var v_34952 = cljs.core.nth.call(null,vec__34944_34950,1,null);(evt[k_34951] = v_34952);
{
var G__34953 = seq__34940_34946;
var G__34954 = chunk__34941_34947;
var G__34955 = count__34942_34948;
var G__34956 = (i__34943_34949 + 1);
seq__34940_34946 = G__34953;
chunk__34941_34947 = G__34954;
count__34942_34948 = G__34955;
i__34943_34949 = G__34956;
continue;
}
} else
{var temp__4092__auto___34957 = cljs.core.seq.call(null,seq__34940_34946);if(temp__4092__auto___34957)
{var seq__34940_34958__$1 = temp__4092__auto___34957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34940_34958__$1))
{var c__4148__auto___34959 = cljs.core.chunk_first.call(null,seq__34940_34958__$1);{
var G__34960 = cljs.core.chunk_rest.call(null,seq__34940_34958__$1);
var G__34961 = c__4148__auto___34959;
var G__34962 = cljs.core.count.call(null,c__4148__auto___34959);
var G__34963 = 0;
seq__34940_34946 = G__34960;
chunk__34941_34947 = G__34961;
count__34942_34948 = G__34962;
i__34943_34949 = G__34963;
continue;
}
} else
{var vec__34945_34964 = cljs.core.first.call(null,seq__34940_34958__$1);var k_34965 = cljs.core.nth.call(null,vec__34945_34964,0,null);var v_34966 = cljs.core.nth.call(null,vec__34945_34964,1,null);(evt[k_34965] = v_34966);
{
var G__34967 = cljs.core.next.call(null,seq__34940_34958__$1);
var G__34968 = null;
var G__34969 = 0;
var G__34970 = 0;
seq__34940_34946 = G__34967;
chunk__34941_34947 = G__34968;
count__34942_34948 = G__34969;
i__34943_34949 = G__34970;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__34971_SHARP_){return goog.events.getListeners(p1__34971_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
