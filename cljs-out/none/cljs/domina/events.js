// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16824 = {};return obj16824;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16828 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16828 = (function (evt,f,create_listener_function,meta16829){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16829 = meta16829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16828.cljs$lang$type = true;
domina.events.t16828.cljs$lang$ctorStr = "domina.events/t16828";
domina.events.t16828.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16828");
});
domina.events.t16828.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16828.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16828.prototype.domina$events$Event$ = true;
domina.events.t16828.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16828.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16828.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16828.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16828.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16828.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16830){var self__ = this;
var _16830__$1 = this;return self__.meta16829;
});
domina.events.t16828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16830,meta16829__$1){var self__ = this;
var _16830__$1 = this;return (new domina.events.t16828(self__.evt,self__.f,self__.create_listener_function,meta16829__$1));
});
domina.events.__GT_t16828 = (function __GT_t16828(evt__$1,f__$1,create_listener_function__$1,meta16829){return (new domina.events.t16828(evt__$1,f__$1,create_listener_function__$1,meta16829));
});
}
return (new domina.events.t16828(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16835(s__16836){return (new cljs.core.LazySeq(null,(function (){var s__16836__$1 = s__16836;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16836__$1);if(temp__4092__auto__)
{var s__16836__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16836__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16836__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16838 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16837 = 0;while(true){
if((i__16837 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16837);cljs.core.chunk_append.call(null,b__16838,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16839 = (i__16837 + 1);
i__16837 = G__16839;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16838),iter__16835.call(null,cljs.core.chunk_rest.call(null,s__16836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16838),null);
}
} else
{var node = cljs.core.first.call(null,s__16836__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16835.call(null,cljs.core.rest.call(null,s__16836__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16849 = null;var count__16850 = 0;var i__16851 = 0;while(true){
if((i__16851 < count__16850))
{var node = cljs.core._nth.call(null,chunk__16849,i__16851);goog.events.removeAll(node);
{
var G__16856 = seq__16848;
var G__16857 = chunk__16849;
var G__16858 = count__16850;
var G__16859 = (i__16851 + 1);
seq__16848 = G__16856;
chunk__16849 = G__16857;
count__16850 = G__16858;
i__16851 = G__16859;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16848);if(temp__4092__auto__)
{var seq__16848__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16848__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16848__$1);{
var G__16860 = cljs.core.chunk_rest.call(null,seq__16848__$1);
var G__16861 = c__4148__auto__;
var G__16862 = cljs.core.count.call(null,c__4148__auto__);
var G__16863 = 0;
seq__16848 = G__16860;
chunk__16849 = G__16861;
count__16850 = G__16862;
i__16851 = G__16863;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16848__$1);goog.events.removeAll(node);
{
var G__16864 = cljs.core.next.call(null,seq__16848__$1);
var G__16865 = null;
var G__16866 = 0;
var G__16867 = 0;
seq__16848 = G__16864;
chunk__16849 = G__16865;
count__16850 = G__16866;
i__16851 = G__16867;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16853 = null;var count__16854 = 0;var i__16855 = 0;while(true){
if((i__16855 < count__16854))
{var node = cljs.core._nth.call(null,chunk__16853,i__16855);goog.events.removeAll(node,type__$1);
{
var G__16868 = seq__16852;
var G__16869 = chunk__16853;
var G__16870 = count__16854;
var G__16871 = (i__16855 + 1);
seq__16852 = G__16868;
chunk__16853 = G__16869;
count__16854 = G__16870;
i__16855 = G__16871;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16852);if(temp__4092__auto__)
{var seq__16852__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16852__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16852__$1);{
var G__16872 = cljs.core.chunk_rest.call(null,seq__16852__$1);
var G__16873 = c__4148__auto__;
var G__16874 = cljs.core.count.call(null,c__4148__auto__);
var G__16875 = 0;
seq__16852 = G__16872;
chunk__16853 = G__16873;
count__16854 = G__16874;
i__16855 = G__16875;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16852__$1);goog.events.removeAll(node,type__$1);
{
var G__16876 = cljs.core.next.call(null,seq__16852__$1);
var G__16877 = null;
var G__16878 = 0;
var G__16879 = 0;
seq__16852 = G__16876;
chunk__16853 = G__16877;
count__16854 = G__16878;
i__16855 = G__16879;
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
var G__16880 = parent;
var G__16881 = cljs.core.cons.call(null,parent,so_far);
n = G__16880;
so_far = G__16881;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16890_16898 = cljs.core.seq.call(null,ancestors);var chunk__16891_16899 = null;var count__16892_16900 = 0;var i__16893_16901 = 0;while(true){
if((i__16893_16901 < count__16892_16900))
{var n_16902 = cljs.core._nth.call(null,chunk__16891_16899,i__16893_16901);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16902;
goog.events.fireListeners(n_16902,evt.type,true,evt);
}
{
var G__16903 = seq__16890_16898;
var G__16904 = chunk__16891_16899;
var G__16905 = count__16892_16900;
var G__16906 = (i__16893_16901 + 1);
seq__16890_16898 = G__16903;
chunk__16891_16899 = G__16904;
count__16892_16900 = G__16905;
i__16893_16901 = G__16906;
continue;
}
} else
{var temp__4092__auto___16907 = cljs.core.seq.call(null,seq__16890_16898);if(temp__4092__auto___16907)
{var seq__16890_16908__$1 = temp__4092__auto___16907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16890_16908__$1))
{var c__4148__auto___16909 = cljs.core.chunk_first.call(null,seq__16890_16908__$1);{
var G__16910 = cljs.core.chunk_rest.call(null,seq__16890_16908__$1);
var G__16911 = c__4148__auto___16909;
var G__16912 = cljs.core.count.call(null,c__4148__auto___16909);
var G__16913 = 0;
seq__16890_16898 = G__16910;
chunk__16891_16899 = G__16911;
count__16892_16900 = G__16912;
i__16893_16901 = G__16913;
continue;
}
} else
{var n_16914 = cljs.core.first.call(null,seq__16890_16908__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16914;
goog.events.fireListeners(n_16914,evt.type,true,evt);
}
{
var G__16915 = cljs.core.next.call(null,seq__16890_16908__$1);
var G__16916 = null;
var G__16917 = 0;
var G__16918 = 0;
seq__16890_16898 = G__16915;
chunk__16891_16899 = G__16916;
count__16892_16900 = G__16917;
i__16893_16901 = G__16918;
continue;
}
}
} else
{}
}
break;
}
var seq__16894_16919 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16895_16920 = null;var count__16896_16921 = 0;var i__16897_16922 = 0;while(true){
if((i__16897_16922 < count__16896_16921))
{var n_16923 = cljs.core._nth.call(null,chunk__16895_16920,i__16897_16922);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16923;
goog.events.fireListeners(n_16923,evt.type,false,evt);
}
{
var G__16924 = seq__16894_16919;
var G__16925 = chunk__16895_16920;
var G__16926 = count__16896_16921;
var G__16927 = (i__16897_16922 + 1);
seq__16894_16919 = G__16924;
chunk__16895_16920 = G__16925;
count__16896_16921 = G__16926;
i__16897_16922 = G__16927;
continue;
}
} else
{var temp__4092__auto___16928 = cljs.core.seq.call(null,seq__16894_16919);if(temp__4092__auto___16928)
{var seq__16894_16929__$1 = temp__4092__auto___16928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16894_16929__$1))
{var c__4148__auto___16930 = cljs.core.chunk_first.call(null,seq__16894_16929__$1);{
var G__16931 = cljs.core.chunk_rest.call(null,seq__16894_16929__$1);
var G__16932 = c__4148__auto___16930;
var G__16933 = cljs.core.count.call(null,c__4148__auto___16930);
var G__16934 = 0;
seq__16894_16919 = G__16931;
chunk__16895_16920 = G__16932;
count__16896_16921 = G__16933;
i__16897_16922 = G__16934;
continue;
}
} else
{var n_16935 = cljs.core.first.call(null,seq__16894_16929__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16935;
goog.events.fireListeners(n_16935,evt.type,false,evt);
}
{
var G__16936 = cljs.core.next.call(null,seq__16894_16929__$1);
var G__16937 = null;
var G__16938 = 0;
var G__16939 = 0;
seq__16894_16919 = G__16936;
chunk__16895_16920 = G__16937;
count__16896_16921 = G__16938;
i__16897_16922 = G__16939;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16946_16952 = cljs.core.seq.call(null,evt_map);var chunk__16947_16953 = null;var count__16948_16954 = 0;var i__16949_16955 = 0;while(true){
if((i__16949_16955 < count__16948_16954))
{var vec__16950_16956 = cljs.core._nth.call(null,chunk__16947_16953,i__16949_16955);var k_16957 = cljs.core.nth.call(null,vec__16950_16956,0,null);var v_16958 = cljs.core.nth.call(null,vec__16950_16956,1,null);(evt[k_16957] = v_16958);
{
var G__16959 = seq__16946_16952;
var G__16960 = chunk__16947_16953;
var G__16961 = count__16948_16954;
var G__16962 = (i__16949_16955 + 1);
seq__16946_16952 = G__16959;
chunk__16947_16953 = G__16960;
count__16948_16954 = G__16961;
i__16949_16955 = G__16962;
continue;
}
} else
{var temp__4092__auto___16963 = cljs.core.seq.call(null,seq__16946_16952);if(temp__4092__auto___16963)
{var seq__16946_16964__$1 = temp__4092__auto___16963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16946_16964__$1))
{var c__4148__auto___16965 = cljs.core.chunk_first.call(null,seq__16946_16964__$1);{
var G__16966 = cljs.core.chunk_rest.call(null,seq__16946_16964__$1);
var G__16967 = c__4148__auto___16965;
var G__16968 = cljs.core.count.call(null,c__4148__auto___16965);
var G__16969 = 0;
seq__16946_16952 = G__16966;
chunk__16947_16953 = G__16967;
count__16948_16954 = G__16968;
i__16949_16955 = G__16969;
continue;
}
} else
{var vec__16951_16970 = cljs.core.first.call(null,seq__16946_16964__$1);var k_16971 = cljs.core.nth.call(null,vec__16951_16970,0,null);var v_16972 = cljs.core.nth.call(null,vec__16951_16970,1,null);(evt[k_16971] = v_16972);
{
var G__16973 = cljs.core.next.call(null,seq__16946_16964__$1);
var G__16974 = null;
var G__16975 = 0;
var G__16976 = 0;
seq__16946_16952 = G__16973;
chunk__16947_16953 = G__16974;
count__16948_16954 = G__16975;
i__16949_16955 = G__16976;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16977_SHARP_){return goog.events.getListeners(p1__16977_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map