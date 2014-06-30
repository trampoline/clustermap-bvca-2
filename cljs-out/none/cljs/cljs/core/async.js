// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47648 = (function (f,fn_handler,meta47649){
this.f = f;
this.fn_handler = fn_handler;
this.meta47649 = meta47649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47648.cljs$lang$type = true;
cljs.core.async.t47648.cljs$lang$ctorStr = "cljs.core.async/t47648";
cljs.core.async.t47648.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47648");
});
cljs.core.async.t47648.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47650){var self__ = this;
var _47650__$1 = this;return self__.meta47649;
});
cljs.core.async.t47648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47650,meta47649__$1){var self__ = this;
var _47650__$1 = this;return (new cljs.core.async.t47648(self__.f,self__.fn_handler,meta47649__$1));
});
cljs.core.async.__GT_t47648 = (function __GT_t47648(f__$1,fn_handler__$1,meta47649){return (new cljs.core.async.t47648(f__$1,fn_handler__$1,meta47649));
});
}
return (new cljs.core.async.t47648(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47652 = buff;if(G__47652)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__47652.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47652.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47652);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47652);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_47653 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47653);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_47653,ret){
return (function (){return fn1.call(null,val_47653);
});})(val_47653,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___47654 = n;var x_47655 = 0;while(true){
if((x_47655 < n__4397__auto___47654))
{(a[x_47655] = 0);
{
var G__47656 = (x_47655 + 1);
x_47655 = G__47656;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__47657 = (i + 1);
i = G__47657;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47661 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47661 = (function (flag,alt_flag,meta47662){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47662 = meta47662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47661.cljs$lang$type = true;
cljs.core.async.t47661.cljs$lang$ctorStr = "cljs.core.async/t47661";
cljs.core.async.t47661.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47661");
});})(flag))
;
cljs.core.async.t47661.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t47661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t47661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47663){var self__ = this;
var _47663__$1 = this;return self__.meta47662;
});})(flag))
;
cljs.core.async.t47661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47663,meta47662__$1){var self__ = this;
var _47663__$1 = this;return (new cljs.core.async.t47661(self__.flag,self__.alt_flag,meta47662__$1));
});})(flag))
;
cljs.core.async.__GT_t47661 = ((function (flag){
return (function __GT_t47661(flag__$1,alt_flag__$1,meta47662){return (new cljs.core.async.t47661(flag__$1,alt_flag__$1,meta47662));
});})(flag))
;
}
return (new cljs.core.async.t47661(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47667 = (function (cb,flag,alt_handler,meta47668){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47668 = meta47668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47667.cljs$lang$type = true;
cljs.core.async.t47667.cljs$lang$ctorStr = "cljs.core.async/t47667";
cljs.core.async.t47667.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47667");
});
cljs.core.async.t47667.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47669){var self__ = this;
var _47669__$1 = this;return self__.meta47668;
});
cljs.core.async.t47667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47669,meta47668__$1){var self__ = this;
var _47669__$1 = this;return (new cljs.core.async.t47667(self__.cb,self__.flag,self__.alt_handler,meta47668__$1));
});
cljs.core.async.__GT_t47667 = (function __GT_t47667(cb__$1,flag__$1,alt_handler__$1,meta47668){return (new cljs.core.async.t47667(cb__$1,flag__$1,alt_handler__$1,meta47668));
});
}
return (new cljs.core.async.t47667(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47670_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47670_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__47671 = (i + 1);
i = G__47671;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__47672){var map__47674 = p__47672;var map__47674__$1 = ((cljs.core.seq_QMARK_.call(null,map__47674))?cljs.core.apply.call(null,cljs.core.hash_map,map__47674):map__47674);var opts = map__47674__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47672 = null;if (arguments.length > 1) {
  p__47672 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47672);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47675){
var ports = cljs.core.first(arglist__47675);
var p__47672 = cljs.core.rest(arglist__47675);
return alts_BANG___delegate(ports,p__47672);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47683 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47683 = (function (ch,f,map_LT_,meta47684){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47684 = meta47684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47683.cljs$lang$type = true;
cljs.core.async.t47683.cljs$lang$ctorStr = "cljs.core.async/t47683";
cljs.core.async.t47683.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47683");
});
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47686 = (function (fn1,_,meta47684,ch,f,map_LT_,meta47687){
this.fn1 = fn1;
this._ = _;
this.meta47684 = meta47684;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47687 = meta47687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47686.cljs$lang$type = true;
cljs.core.async.t47686.cljs$lang$ctorStr = "cljs.core.async/t47686";
cljs.core.async.t47686.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47686");
});})(___$1))
;
cljs.core.async.t47686.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47686.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__47676_SHARP_){return f1.call(null,(((p1__47676_SHARP_ == null))?null:self__.f.call(null,p1__47676_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t47686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47688){var self__ = this;
var _47688__$1 = this;return self__.meta47687;
});})(___$1))
;
cljs.core.async.t47686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47688,meta47687__$1){var self__ = this;
var _47688__$1 = this;return (new cljs.core.async.t47686(self__.fn1,self__._,self__.meta47684,self__.ch,self__.f,self__.map_LT_,meta47687__$1));
});})(___$1))
;
cljs.core.async.__GT_t47686 = ((function (___$1){
return (function __GT_t47686(fn1__$1,___$2,meta47684__$1,ch__$2,f__$2,map_LT___$2,meta47687){return (new cljs.core.async.t47686(fn1__$1,___$2,meta47684__$1,ch__$2,f__$2,map_LT___$2,meta47687));
});})(___$1))
;
}
return (new cljs.core.async.t47686(fn1,___$1,self__.meta47684,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47685){var self__ = this;
var _47685__$1 = this;return self__.meta47684;
});
cljs.core.async.t47683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47685,meta47684__$1){var self__ = this;
var _47685__$1 = this;return (new cljs.core.async.t47683(self__.ch,self__.f,self__.map_LT_,meta47684__$1));
});
cljs.core.async.__GT_t47683 = (function __GT_t47683(ch__$1,f__$1,map_LT___$1,meta47684){return (new cljs.core.async.t47683(ch__$1,f__$1,map_LT___$1,meta47684));
});
}
return (new cljs.core.async.t47683(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47692 = (function (ch,f,map_GT_,meta47693){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47693 = meta47693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47692.cljs$lang$type = true;
cljs.core.async.t47692.cljs$lang$ctorStr = "cljs.core.async/t47692";
cljs.core.async.t47692.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47692");
});
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47694){var self__ = this;
var _47694__$1 = this;return self__.meta47693;
});
cljs.core.async.t47692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47694,meta47693__$1){var self__ = this;
var _47694__$1 = this;return (new cljs.core.async.t47692(self__.ch,self__.f,self__.map_GT_,meta47693__$1));
});
cljs.core.async.__GT_t47692 = (function __GT_t47692(ch__$1,f__$1,map_GT___$1,meta47693){return (new cljs.core.async.t47692(ch__$1,f__$1,map_GT___$1,meta47693));
});
}
return (new cljs.core.async.t47692(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47698 = (function (ch,p,filter_GT_,meta47699){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47699 = meta47699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47698.cljs$lang$type = true;
cljs.core.async.t47698.cljs$lang$ctorStr = "cljs.core.async/t47698";
cljs.core.async.t47698.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t47698");
});
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47700){var self__ = this;
var _47700__$1 = this;return self__.meta47699;
});
cljs.core.async.t47698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47700,meta47699__$1){var self__ = this;
var _47700__$1 = this;return (new cljs.core.async.t47698(self__.ch,self__.p,self__.filter_GT_,meta47699__$1));
});
cljs.core.async.__GT_t47698 = (function __GT_t47698(ch__$1,p__$1,filter_GT___$1,meta47699){return (new cljs.core.async.t47698(ch__$1,p__$1,filter_GT___$1,meta47699));
});
}
return (new cljs.core.async.t47698(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___47783 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___47783,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___47783,out){
return (function (state_47762){var state_val_47763 = (state_47762[1]);if((state_val_47763 === 7))
{var inst_47758 = (state_47762[2]);var state_47762__$1 = state_47762;var statearr_47764_47784 = state_47762__$1;(statearr_47764_47784[2] = inst_47758);
(statearr_47764_47784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 1))
{var state_47762__$1 = state_47762;var statearr_47765_47785 = state_47762__$1;(statearr_47765_47785[2] = null);
(statearr_47765_47785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 4))
{var inst_47744 = (state_47762[7]);var inst_47744__$1 = (state_47762[2]);var inst_47745 = (inst_47744__$1 == null);var state_47762__$1 = (function (){var statearr_47766 = state_47762;(statearr_47766[7] = inst_47744__$1);
return statearr_47766;
})();if(cljs.core.truth_(inst_47745))
{var statearr_47767_47786 = state_47762__$1;(statearr_47767_47786[1] = 5);
} else
{var statearr_47768_47787 = state_47762__$1;(statearr_47768_47787[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 6))
{var inst_47744 = (state_47762[7]);var inst_47749 = p.call(null,inst_47744);var state_47762__$1 = state_47762;if(cljs.core.truth_(inst_47749))
{var statearr_47769_47788 = state_47762__$1;(statearr_47769_47788[1] = 8);
} else
{var statearr_47770_47789 = state_47762__$1;(statearr_47770_47789[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 3))
{var inst_47760 = (state_47762[2]);var state_47762__$1 = state_47762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47762__$1,inst_47760);
} else
{if((state_val_47763 === 2))
{var state_47762__$1 = state_47762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47762__$1,4,ch);
} else
{if((state_val_47763 === 11))
{var inst_47752 = (state_47762[2]);var state_47762__$1 = state_47762;var statearr_47771_47790 = state_47762__$1;(statearr_47771_47790[2] = inst_47752);
(statearr_47771_47790[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 9))
{var state_47762__$1 = state_47762;var statearr_47772_47791 = state_47762__$1;(statearr_47772_47791[2] = null);
(statearr_47772_47791[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 5))
{var inst_47747 = cljs.core.async.close_BANG_.call(null,out);var state_47762__$1 = state_47762;var statearr_47773_47792 = state_47762__$1;(statearr_47773_47792[2] = inst_47747);
(statearr_47773_47792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 10))
{var inst_47755 = (state_47762[2]);var state_47762__$1 = (function (){var statearr_47774 = state_47762;(statearr_47774[8] = inst_47755);
return statearr_47774;
})();var statearr_47775_47793 = state_47762__$1;(statearr_47775_47793[2] = null);
(statearr_47775_47793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47763 === 8))
{var inst_47744 = (state_47762[7]);var state_47762__$1 = state_47762;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47762__$1,11,out,inst_47744);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___47783,out))
;return ((function (switch__5676__auto__,c__5691__auto___47783,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_47779 = [null,null,null,null,null,null,null,null,null];(statearr_47779[0] = state_machine__5677__auto__);
(statearr_47779[1] = 1);
return statearr_47779;
});
var state_machine__5677__auto____1 = (function (state_47762){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_47762);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e47780){if((e47780 instanceof Object))
{var ex__5680__auto__ = e47780;var statearr_47781_47794 = state_47762;(statearr_47781_47794[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47780;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47795 = state_47762;
state_47762 = G__47795;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_47762){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_47762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___47783,out))
})();var state__5693__auto__ = (function (){var statearr_47782 = f__5692__auto__.call(null);(statearr_47782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___47783);
return statearr_47782;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___47783,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_47947){var state_val_47948 = (state_47947[1]);if((state_val_47948 === 7))
{var inst_47943 = (state_47947[2]);var state_47947__$1 = state_47947;var statearr_47949_47986 = state_47947__$1;(statearr_47949_47986[2] = inst_47943);
(statearr_47949_47986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 20))
{var inst_47918 = (state_47947[7]);var inst_47929 = (state_47947[2]);var inst_47930 = cljs.core.next.call(null,inst_47918);var inst_47904 = inst_47930;var inst_47905 = null;var inst_47906 = 0;var inst_47907 = 0;var state_47947__$1 = (function (){var statearr_47950 = state_47947;(statearr_47950[8] = inst_47929);
(statearr_47950[9] = inst_47904);
(statearr_47950[10] = inst_47905);
(statearr_47950[11] = inst_47907);
(statearr_47950[12] = inst_47906);
return statearr_47950;
})();var statearr_47951_47987 = state_47947__$1;(statearr_47951_47987[2] = null);
(statearr_47951_47987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 1))
{var state_47947__$1 = state_47947;var statearr_47952_47988 = state_47947__$1;(statearr_47952_47988[2] = null);
(statearr_47952_47988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 4))
{var inst_47893 = (state_47947[13]);var inst_47893__$1 = (state_47947[2]);var inst_47894 = (inst_47893__$1 == null);var state_47947__$1 = (function (){var statearr_47956 = state_47947;(statearr_47956[13] = inst_47893__$1);
return statearr_47956;
})();if(cljs.core.truth_(inst_47894))
{var statearr_47957_47989 = state_47947__$1;(statearr_47957_47989[1] = 5);
} else
{var statearr_47958_47990 = state_47947__$1;(statearr_47958_47990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 15))
{var state_47947__$1 = state_47947;var statearr_47959_47991 = state_47947__$1;(statearr_47959_47991[2] = null);
(statearr_47959_47991[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 13))
{var inst_47904 = (state_47947[9]);var inst_47905 = (state_47947[10]);var inst_47907 = (state_47947[11]);var inst_47906 = (state_47947[12]);var inst_47914 = (state_47947[2]);var inst_47915 = (inst_47907 + 1);var tmp47953 = inst_47904;var tmp47954 = inst_47905;var tmp47955 = inst_47906;var inst_47904__$1 = tmp47953;var inst_47905__$1 = tmp47954;var inst_47906__$1 = tmp47955;var inst_47907__$1 = inst_47915;var state_47947__$1 = (function (){var statearr_47960 = state_47947;(statearr_47960[9] = inst_47904__$1);
(statearr_47960[14] = inst_47914);
(statearr_47960[10] = inst_47905__$1);
(statearr_47960[11] = inst_47907__$1);
(statearr_47960[12] = inst_47906__$1);
return statearr_47960;
})();var statearr_47961_47992 = state_47947__$1;(statearr_47961_47992[2] = null);
(statearr_47961_47992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 6))
{var inst_47893 = (state_47947[13]);var inst_47898 = f.call(null,inst_47893);var inst_47903 = cljs.core.seq.call(null,inst_47898);var inst_47904 = inst_47903;var inst_47905 = null;var inst_47906 = 0;var inst_47907 = 0;var state_47947__$1 = (function (){var statearr_47962 = state_47947;(statearr_47962[9] = inst_47904);
(statearr_47962[10] = inst_47905);
(statearr_47962[11] = inst_47907);
(statearr_47962[12] = inst_47906);
return statearr_47962;
})();var statearr_47963_47993 = state_47947__$1;(statearr_47963_47993[2] = null);
(statearr_47963_47993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 17))
{var inst_47918 = (state_47947[7]);var inst_47922 = cljs.core.chunk_first.call(null,inst_47918);var inst_47923 = cljs.core.chunk_rest.call(null,inst_47918);var inst_47924 = cljs.core.count.call(null,inst_47922);var inst_47904 = inst_47923;var inst_47905 = inst_47922;var inst_47906 = inst_47924;var inst_47907 = 0;var state_47947__$1 = (function (){var statearr_47964 = state_47947;(statearr_47964[9] = inst_47904);
(statearr_47964[10] = inst_47905);
(statearr_47964[11] = inst_47907);
(statearr_47964[12] = inst_47906);
return statearr_47964;
})();var statearr_47965_47994 = state_47947__$1;(statearr_47965_47994[2] = null);
(statearr_47965_47994[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 3))
{var inst_47945 = (state_47947[2]);var state_47947__$1 = state_47947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47947__$1,inst_47945);
} else
{if((state_val_47948 === 12))
{var inst_47938 = (state_47947[2]);var state_47947__$1 = state_47947;var statearr_47966_47995 = state_47947__$1;(statearr_47966_47995[2] = inst_47938);
(statearr_47966_47995[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 2))
{var state_47947__$1 = state_47947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47947__$1,4,in$);
} else
{if((state_val_47948 === 19))
{var inst_47933 = (state_47947[2]);var state_47947__$1 = state_47947;var statearr_47967_47996 = state_47947__$1;(statearr_47967_47996[2] = inst_47933);
(statearr_47967_47996[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 11))
{var inst_47904 = (state_47947[9]);var inst_47918 = (state_47947[7]);var inst_47918__$1 = cljs.core.seq.call(null,inst_47904);var state_47947__$1 = (function (){var statearr_47968 = state_47947;(statearr_47968[7] = inst_47918__$1);
return statearr_47968;
})();if(inst_47918__$1)
{var statearr_47969_47997 = state_47947__$1;(statearr_47969_47997[1] = 14);
} else
{var statearr_47970_47998 = state_47947__$1;(statearr_47970_47998[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 9))
{var inst_47940 = (state_47947[2]);var state_47947__$1 = (function (){var statearr_47971 = state_47947;(statearr_47971[15] = inst_47940);
return statearr_47971;
})();var statearr_47972_47999 = state_47947__$1;(statearr_47972_47999[2] = null);
(statearr_47972_47999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 5))
{var inst_47896 = cljs.core.async.close_BANG_.call(null,out);var state_47947__$1 = state_47947;var statearr_47973_48000 = state_47947__$1;(statearr_47973_48000[2] = inst_47896);
(statearr_47973_48000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 14))
{var inst_47918 = (state_47947[7]);var inst_47920 = cljs.core.chunked_seq_QMARK_.call(null,inst_47918);var state_47947__$1 = state_47947;if(inst_47920)
{var statearr_47974_48001 = state_47947__$1;(statearr_47974_48001[1] = 17);
} else
{var statearr_47975_48002 = state_47947__$1;(statearr_47975_48002[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 16))
{var inst_47936 = (state_47947[2]);var state_47947__$1 = state_47947;var statearr_47976_48003 = state_47947__$1;(statearr_47976_48003[2] = inst_47936);
(statearr_47976_48003[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47948 === 10))
{var inst_47905 = (state_47947[10]);var inst_47907 = (state_47947[11]);var inst_47912 = cljs.core._nth.call(null,inst_47905,inst_47907);var state_47947__$1 = state_47947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47947__$1,13,out,inst_47912);
} else
{if((state_val_47948 === 18))
{var inst_47918 = (state_47947[7]);var inst_47927 = cljs.core.first.call(null,inst_47918);var state_47947__$1 = state_47947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47947__$1,20,out,inst_47927);
} else
{if((state_val_47948 === 8))
{var inst_47907 = (state_47947[11]);var inst_47906 = (state_47947[12]);var inst_47909 = (inst_47907 < inst_47906);var inst_47910 = inst_47909;var state_47947__$1 = state_47947;if(cljs.core.truth_(inst_47910))
{var statearr_47977_48004 = state_47947__$1;(statearr_47977_48004[1] = 10);
} else
{var statearr_47978_48005 = state_47947__$1;(statearr_47978_48005[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_47982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47982[0] = state_machine__5677__auto__);
(statearr_47982[1] = 1);
return statearr_47982;
});
var state_machine__5677__auto____1 = (function (state_47947){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_47947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e47983){if((e47983 instanceof Object))
{var ex__5680__auto__ = e47983;var statearr_47984_48006 = state_47947;(statearr_47984_48006[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48007 = state_47947;
state_47947 = G__48007;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_47947){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_47947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_47985 = f__5692__auto__.call(null);(statearr_47985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_47985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___48088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___48088){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___48088){
return (function (state_48067){var state_val_48068 = (state_48067[1]);if((state_val_48068 === 7))
{var inst_48063 = (state_48067[2]);var state_48067__$1 = state_48067;var statearr_48069_48089 = state_48067__$1;(statearr_48069_48089[2] = inst_48063);
(statearr_48069_48089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 1))
{var state_48067__$1 = state_48067;var statearr_48070_48090 = state_48067__$1;(statearr_48070_48090[2] = null);
(statearr_48070_48090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 4))
{var inst_48050 = (state_48067[7]);var inst_48050__$1 = (state_48067[2]);var inst_48051 = (inst_48050__$1 == null);var state_48067__$1 = (function (){var statearr_48071 = state_48067;(statearr_48071[7] = inst_48050__$1);
return statearr_48071;
})();if(cljs.core.truth_(inst_48051))
{var statearr_48072_48091 = state_48067__$1;(statearr_48072_48091[1] = 5);
} else
{var statearr_48073_48092 = state_48067__$1;(statearr_48073_48092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 6))
{var inst_48050 = (state_48067[7]);var state_48067__$1 = state_48067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48067__$1,11,to,inst_48050);
} else
{if((state_val_48068 === 3))
{var inst_48065 = (state_48067[2]);var state_48067__$1 = state_48067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48067__$1,inst_48065);
} else
{if((state_val_48068 === 2))
{var state_48067__$1 = state_48067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48067__$1,4,from);
} else
{if((state_val_48068 === 11))
{var inst_48060 = (state_48067[2]);var state_48067__$1 = (function (){var statearr_48074 = state_48067;(statearr_48074[8] = inst_48060);
return statearr_48074;
})();var statearr_48075_48093 = state_48067__$1;(statearr_48075_48093[2] = null);
(statearr_48075_48093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 9))
{var state_48067__$1 = state_48067;var statearr_48076_48094 = state_48067__$1;(statearr_48076_48094[2] = null);
(statearr_48076_48094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 5))
{var state_48067__$1 = state_48067;if(cljs.core.truth_(close_QMARK_))
{var statearr_48077_48095 = state_48067__$1;(statearr_48077_48095[1] = 8);
} else
{var statearr_48078_48096 = state_48067__$1;(statearr_48078_48096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 10))
{var inst_48057 = (state_48067[2]);var state_48067__$1 = state_48067;var statearr_48079_48097 = state_48067__$1;(statearr_48079_48097[2] = inst_48057);
(statearr_48079_48097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48068 === 8))
{var inst_48054 = cljs.core.async.close_BANG_.call(null,to);var state_48067__$1 = state_48067;var statearr_48080_48098 = state_48067__$1;(statearr_48080_48098[2] = inst_48054);
(statearr_48080_48098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___48088))
;return ((function (switch__5676__auto__,c__5691__auto___48088){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_48084 = [null,null,null,null,null,null,null,null,null];(statearr_48084[0] = state_machine__5677__auto__);
(statearr_48084[1] = 1);
return statearr_48084;
});
var state_machine__5677__auto____1 = (function (state_48067){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_48067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e48085){if((e48085 instanceof Object))
{var ex__5680__auto__ = e48085;var statearr_48086_48099 = state_48067;(statearr_48086_48099[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48100 = state_48067;
state_48067 = G__48100;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_48067){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_48067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___48088))
})();var state__5693__auto__ = (function (){var statearr_48087 = f__5692__auto__.call(null);(statearr_48087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___48088);
return statearr_48087;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___48088))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___48187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___48187,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___48187,tc,fc){
return (function (state_48165){var state_val_48166 = (state_48165[1]);if((state_val_48166 === 7))
{var inst_48161 = (state_48165[2]);var state_48165__$1 = state_48165;var statearr_48167_48188 = state_48165__$1;(statearr_48167_48188[2] = inst_48161);
(statearr_48167_48188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 1))
{var state_48165__$1 = state_48165;var statearr_48168_48189 = state_48165__$1;(statearr_48168_48189[2] = null);
(statearr_48168_48189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 4))
{var inst_48146 = (state_48165[7]);var inst_48146__$1 = (state_48165[2]);var inst_48147 = (inst_48146__$1 == null);var state_48165__$1 = (function (){var statearr_48169 = state_48165;(statearr_48169[7] = inst_48146__$1);
return statearr_48169;
})();if(cljs.core.truth_(inst_48147))
{var statearr_48170_48190 = state_48165__$1;(statearr_48170_48190[1] = 5);
} else
{var statearr_48171_48191 = state_48165__$1;(statearr_48171_48191[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 6))
{var inst_48146 = (state_48165[7]);var inst_48152 = p.call(null,inst_48146);var state_48165__$1 = state_48165;if(cljs.core.truth_(inst_48152))
{var statearr_48172_48192 = state_48165__$1;(statearr_48172_48192[1] = 9);
} else
{var statearr_48173_48193 = state_48165__$1;(statearr_48173_48193[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 3))
{var inst_48163 = (state_48165[2]);var state_48165__$1 = state_48165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48165__$1,inst_48163);
} else
{if((state_val_48166 === 2))
{var state_48165__$1 = state_48165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48165__$1,4,ch);
} else
{if((state_val_48166 === 11))
{var inst_48146 = (state_48165[7]);var inst_48156 = (state_48165[2]);var state_48165__$1 = state_48165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48165__$1,8,inst_48156,inst_48146);
} else
{if((state_val_48166 === 9))
{var state_48165__$1 = state_48165;var statearr_48174_48194 = state_48165__$1;(statearr_48174_48194[2] = tc);
(statearr_48174_48194[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 5))
{var inst_48149 = cljs.core.async.close_BANG_.call(null,tc);var inst_48150 = cljs.core.async.close_BANG_.call(null,fc);var state_48165__$1 = (function (){var statearr_48175 = state_48165;(statearr_48175[8] = inst_48149);
return statearr_48175;
})();var statearr_48176_48195 = state_48165__$1;(statearr_48176_48195[2] = inst_48150);
(statearr_48176_48195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 10))
{var state_48165__$1 = state_48165;var statearr_48177_48196 = state_48165__$1;(statearr_48177_48196[2] = fc);
(statearr_48177_48196[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48166 === 8))
{var inst_48158 = (state_48165[2]);var state_48165__$1 = (function (){var statearr_48178 = state_48165;(statearr_48178[9] = inst_48158);
return statearr_48178;
})();var statearr_48179_48197 = state_48165__$1;(statearr_48179_48197[2] = null);
(statearr_48179_48197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___48187,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___48187,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_48183 = [null,null,null,null,null,null,null,null,null,null];(statearr_48183[0] = state_machine__5677__auto__);
(statearr_48183[1] = 1);
return statearr_48183;
});
var state_machine__5677__auto____1 = (function (state_48165){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_48165);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e48184){if((e48184 instanceof Object))
{var ex__5680__auto__ = e48184;var statearr_48185_48198 = state_48165;(statearr_48185_48198[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48199 = state_48165;
state_48165 = G__48199;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_48165){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_48165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___48187,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_48186 = f__5692__auto__.call(null);(statearr_48186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___48187);
return statearr_48186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___48187,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_48246){var state_val_48247 = (state_48246[1]);if((state_val_48247 === 7))
{var inst_48242 = (state_48246[2]);var state_48246__$1 = state_48246;var statearr_48248_48264 = state_48246__$1;(statearr_48248_48264[2] = inst_48242);
(statearr_48248_48264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48247 === 6))
{var inst_48232 = (state_48246[7]);var inst_48235 = (state_48246[8]);var inst_48239 = f.call(null,inst_48232,inst_48235);var inst_48232__$1 = inst_48239;var state_48246__$1 = (function (){var statearr_48249 = state_48246;(statearr_48249[7] = inst_48232__$1);
return statearr_48249;
})();var statearr_48250_48265 = state_48246__$1;(statearr_48250_48265[2] = null);
(statearr_48250_48265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48247 === 5))
{var inst_48232 = (state_48246[7]);var state_48246__$1 = state_48246;var statearr_48251_48266 = state_48246__$1;(statearr_48251_48266[2] = inst_48232);
(statearr_48251_48266[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48247 === 4))
{var inst_48235 = (state_48246[8]);var inst_48235__$1 = (state_48246[2]);var inst_48236 = (inst_48235__$1 == null);var state_48246__$1 = (function (){var statearr_48252 = state_48246;(statearr_48252[8] = inst_48235__$1);
return statearr_48252;
})();if(cljs.core.truth_(inst_48236))
{var statearr_48253_48267 = state_48246__$1;(statearr_48253_48267[1] = 5);
} else
{var statearr_48254_48268 = state_48246__$1;(statearr_48254_48268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48247 === 3))
{var inst_48244 = (state_48246[2]);var state_48246__$1 = state_48246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48246__$1,inst_48244);
} else
{if((state_val_48247 === 2))
{var state_48246__$1 = state_48246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48246__$1,4,ch);
} else
{if((state_val_48247 === 1))
{var inst_48232 = init;var state_48246__$1 = (function (){var statearr_48255 = state_48246;(statearr_48255[7] = inst_48232);
return statearr_48255;
})();var statearr_48256_48269 = state_48246__$1;(statearr_48256_48269[2] = null);
(statearr_48256_48269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_48260 = [null,null,null,null,null,null,null,null,null];(statearr_48260[0] = state_machine__5677__auto__);
(statearr_48260[1] = 1);
return statearr_48260;
});
var state_machine__5677__auto____1 = (function (state_48246){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_48246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e48261){if((e48261 instanceof Object))
{var ex__5680__auto__ = e48261;var statearr_48262_48270 = state_48246;(statearr_48262_48270[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48271 = state_48246;
state_48246 = G__48271;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_48246){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_48246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_48263 = f__5692__auto__.call(null);(statearr_48263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_48263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_48333){var state_val_48334 = (state_48333[1]);if((state_val_48334 === 7))
{var inst_48314 = (state_48333[7]);var inst_48319 = (state_48333[2]);var inst_48320 = cljs.core.next.call(null,inst_48314);var inst_48314__$1 = inst_48320;var state_48333__$1 = (function (){var statearr_48335 = state_48333;(statearr_48335[8] = inst_48319);
(statearr_48335[7] = inst_48314__$1);
return statearr_48335;
})();var statearr_48336_48354 = state_48333__$1;(statearr_48336_48354[2] = null);
(statearr_48336_48354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 1))
{var inst_48313 = cljs.core.seq.call(null,coll);var inst_48314 = inst_48313;var state_48333__$1 = (function (){var statearr_48337 = state_48333;(statearr_48337[7] = inst_48314);
return statearr_48337;
})();var statearr_48338_48355 = state_48333__$1;(statearr_48338_48355[2] = null);
(statearr_48338_48355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 4))
{var inst_48314 = (state_48333[7]);var inst_48317 = cljs.core.first.call(null,inst_48314);var state_48333__$1 = state_48333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48333__$1,7,ch,inst_48317);
} else
{if((state_val_48334 === 6))
{var inst_48329 = (state_48333[2]);var state_48333__$1 = state_48333;var statearr_48339_48356 = state_48333__$1;(statearr_48339_48356[2] = inst_48329);
(statearr_48339_48356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 3))
{var inst_48331 = (state_48333[2]);var state_48333__$1 = state_48333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48333__$1,inst_48331);
} else
{if((state_val_48334 === 2))
{var inst_48314 = (state_48333[7]);var state_48333__$1 = state_48333;if(cljs.core.truth_(inst_48314))
{var statearr_48340_48357 = state_48333__$1;(statearr_48340_48357[1] = 4);
} else
{var statearr_48341_48358 = state_48333__$1;(statearr_48341_48358[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 9))
{var state_48333__$1 = state_48333;var statearr_48342_48359 = state_48333__$1;(statearr_48342_48359[2] = null);
(statearr_48342_48359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 5))
{var state_48333__$1 = state_48333;if(cljs.core.truth_(close_QMARK_))
{var statearr_48343_48360 = state_48333__$1;(statearr_48343_48360[1] = 8);
} else
{var statearr_48344_48361 = state_48333__$1;(statearr_48344_48361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 10))
{var inst_48327 = (state_48333[2]);var state_48333__$1 = state_48333;var statearr_48345_48362 = state_48333__$1;(statearr_48345_48362[2] = inst_48327);
(statearr_48345_48362[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48334 === 8))
{var inst_48324 = cljs.core.async.close_BANG_.call(null,ch);var state_48333__$1 = state_48333;var statearr_48346_48363 = state_48333__$1;(statearr_48346_48363[2] = inst_48324);
(statearr_48346_48363[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_48350 = [null,null,null,null,null,null,null,null,null];(statearr_48350[0] = state_machine__5677__auto__);
(statearr_48350[1] = 1);
return statearr_48350;
});
var state_machine__5677__auto____1 = (function (state_48333){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_48333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e48351){if((e48351 instanceof Object))
{var ex__5680__auto__ = e48351;var statearr_48352_48364 = state_48333;(statearr_48352_48364[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48365 = state_48333;
state_48333 = G__48365;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_48333){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_48333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_48353 = f__5692__auto__.call(null);(statearr_48353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_48353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj48367 = {};return obj48367;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj48369 = {};return obj48369;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t48593 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48593 = (function (cs,ch,mult,meta48594){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta48594 = meta48594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48593.cljs$lang$type = true;
cljs.core.async.t48593.cljs$lang$ctorStr = "cljs.core.async/t48593";
cljs.core.async.t48593.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t48593");
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t48593.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48595){var self__ = this;
var _48595__$1 = this;return self__.meta48594;
});})(cs))
;
cljs.core.async.t48593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48595,meta48594__$1){var self__ = this;
var _48595__$1 = this;return (new cljs.core.async.t48593(self__.cs,self__.ch,self__.mult,meta48594__$1));
});})(cs))
;
cljs.core.async.__GT_t48593 = ((function (cs){
return (function __GT_t48593(cs__$1,ch__$1,mult__$1,meta48594){return (new cljs.core.async.t48593(cs__$1,ch__$1,mult__$1,meta48594));
});})(cs))
;
}
return (new cljs.core.async.t48593(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___48816 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___48816,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___48816,cs,m,dchan,dctr,done){
return (function (state_48730){var state_val_48731 = (state_48730[1]);if((state_val_48731 === 7))
{var inst_48726 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48732_48817 = state_48730__$1;(statearr_48732_48817[2] = inst_48726);
(statearr_48732_48817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 20))
{var inst_48627 = (state_48730[7]);var inst_48637 = cljs.core.first.call(null,inst_48627);var inst_48638 = cljs.core.nth.call(null,inst_48637,0,null);var inst_48639 = cljs.core.nth.call(null,inst_48637,1,null);var state_48730__$1 = (function (){var statearr_48733 = state_48730;(statearr_48733[8] = inst_48638);
return statearr_48733;
})();if(cljs.core.truth_(inst_48639))
{var statearr_48734_48818 = state_48730__$1;(statearr_48734_48818[1] = 22);
} else
{var statearr_48735_48819 = state_48730__$1;(statearr_48735_48819[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 27))
{var inst_48669 = (state_48730[9]);var inst_48667 = (state_48730[10]);var inst_48674 = cljs.core._nth.call(null,inst_48667,inst_48669);var state_48730__$1 = (function (){var statearr_48736 = state_48730;(statearr_48736[11] = inst_48674);
return statearr_48736;
})();var statearr_48737_48820 = state_48730__$1;(statearr_48737_48820[2] = null);
(statearr_48737_48820[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 1))
{var state_48730__$1 = state_48730;var statearr_48738_48821 = state_48730__$1;(statearr_48738_48821[2] = null);
(statearr_48738_48821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 24))
{var inst_48627 = (state_48730[7]);var inst_48644 = (state_48730[2]);var inst_48645 = cljs.core.next.call(null,inst_48627);var inst_48607 = inst_48645;var inst_48608 = null;var inst_48609 = 0;var inst_48610 = 0;var state_48730__$1 = (function (){var statearr_48739 = state_48730;(statearr_48739[12] = inst_48610);
(statearr_48739[13] = inst_48609);
(statearr_48739[14] = inst_48644);
(statearr_48739[15] = inst_48607);
(statearr_48739[16] = inst_48608);
return statearr_48739;
})();var statearr_48740_48822 = state_48730__$1;(statearr_48740_48822[2] = null);
(statearr_48740_48822[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 39))
{var inst_48687 = (state_48730[17]);var inst_48705 = (state_48730[2]);var inst_48706 = cljs.core.next.call(null,inst_48687);var inst_48666 = inst_48706;var inst_48667 = null;var inst_48668 = 0;var inst_48669 = 0;var state_48730__$1 = (function (){var statearr_48744 = state_48730;(statearr_48744[18] = inst_48666);
(statearr_48744[19] = inst_48668);
(statearr_48744[20] = inst_48705);
(statearr_48744[9] = inst_48669);
(statearr_48744[10] = inst_48667);
return statearr_48744;
})();var statearr_48745_48823 = state_48730__$1;(statearr_48745_48823[2] = null);
(statearr_48745_48823[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 4))
{var inst_48598 = (state_48730[21]);var inst_48598__$1 = (state_48730[2]);var inst_48599 = (inst_48598__$1 == null);var state_48730__$1 = (function (){var statearr_48746 = state_48730;(statearr_48746[21] = inst_48598__$1);
return statearr_48746;
})();if(cljs.core.truth_(inst_48599))
{var statearr_48747_48824 = state_48730__$1;(statearr_48747_48824[1] = 5);
} else
{var statearr_48748_48825 = state_48730__$1;(statearr_48748_48825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 15))
{var inst_48610 = (state_48730[12]);var inst_48609 = (state_48730[13]);var inst_48607 = (state_48730[15]);var inst_48608 = (state_48730[16]);var inst_48623 = (state_48730[2]);var inst_48624 = (inst_48610 + 1);var tmp48741 = inst_48609;var tmp48742 = inst_48607;var tmp48743 = inst_48608;var inst_48607__$1 = tmp48742;var inst_48608__$1 = tmp48743;var inst_48609__$1 = tmp48741;var inst_48610__$1 = inst_48624;var state_48730__$1 = (function (){var statearr_48749 = state_48730;(statearr_48749[12] = inst_48610__$1);
(statearr_48749[13] = inst_48609__$1);
(statearr_48749[22] = inst_48623);
(statearr_48749[15] = inst_48607__$1);
(statearr_48749[16] = inst_48608__$1);
return statearr_48749;
})();var statearr_48750_48826 = state_48730__$1;(statearr_48750_48826[2] = null);
(statearr_48750_48826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 21))
{var inst_48648 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48751_48827 = state_48730__$1;(statearr_48751_48827[2] = inst_48648);
(statearr_48751_48827[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 31))
{var inst_48674 = (state_48730[11]);var inst_48675 = (state_48730[2]);var inst_48676 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48677 = cljs.core.async.untap_STAR_.call(null,m,inst_48674);var state_48730__$1 = (function (){var statearr_48752 = state_48730;(statearr_48752[23] = inst_48676);
(statearr_48752[24] = inst_48675);
return statearr_48752;
})();var statearr_48753_48828 = state_48730__$1;(statearr_48753_48828[2] = inst_48677);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48730__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 32))
{var inst_48674 = (state_48730[11]);var inst_48598 = (state_48730[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48730,31,Object,null,30);var inst_48681 = cljs.core.async.put_BANG_.call(null,inst_48674,inst_48598,done);var state_48730__$1 = state_48730;var statearr_48754_48829 = state_48730__$1;(statearr_48754_48829[2] = inst_48681);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48730__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 40))
{var inst_48696 = (state_48730[25]);var inst_48697 = (state_48730[2]);var inst_48698 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48699 = cljs.core.async.untap_STAR_.call(null,m,inst_48696);var state_48730__$1 = (function (){var statearr_48755 = state_48730;(statearr_48755[26] = inst_48697);
(statearr_48755[27] = inst_48698);
return statearr_48755;
})();var statearr_48756_48830 = state_48730__$1;(statearr_48756_48830[2] = inst_48699);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48730__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 33))
{var inst_48687 = (state_48730[17]);var inst_48689 = cljs.core.chunked_seq_QMARK_.call(null,inst_48687);var state_48730__$1 = state_48730;if(inst_48689)
{var statearr_48757_48831 = state_48730__$1;(statearr_48757_48831[1] = 36);
} else
{var statearr_48758_48832 = state_48730__$1;(statearr_48758_48832[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 13))
{var inst_48617 = (state_48730[28]);var inst_48620 = cljs.core.async.close_BANG_.call(null,inst_48617);var state_48730__$1 = state_48730;var statearr_48759_48833 = state_48730__$1;(statearr_48759_48833[2] = inst_48620);
(statearr_48759_48833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 22))
{var inst_48638 = (state_48730[8]);var inst_48641 = cljs.core.async.close_BANG_.call(null,inst_48638);var state_48730__$1 = state_48730;var statearr_48760_48834 = state_48730__$1;(statearr_48760_48834[2] = inst_48641);
(statearr_48760_48834[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 36))
{var inst_48687 = (state_48730[17]);var inst_48691 = cljs.core.chunk_first.call(null,inst_48687);var inst_48692 = cljs.core.chunk_rest.call(null,inst_48687);var inst_48693 = cljs.core.count.call(null,inst_48691);var inst_48666 = inst_48692;var inst_48667 = inst_48691;var inst_48668 = inst_48693;var inst_48669 = 0;var state_48730__$1 = (function (){var statearr_48761 = state_48730;(statearr_48761[18] = inst_48666);
(statearr_48761[19] = inst_48668);
(statearr_48761[9] = inst_48669);
(statearr_48761[10] = inst_48667);
return statearr_48761;
})();var statearr_48762_48835 = state_48730__$1;(statearr_48762_48835[2] = null);
(statearr_48762_48835[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 41))
{var inst_48696 = (state_48730[25]);var inst_48598 = (state_48730[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48730,40,Object,null,39);var inst_48703 = cljs.core.async.put_BANG_.call(null,inst_48696,inst_48598,done);var state_48730__$1 = state_48730;var statearr_48763_48836 = state_48730__$1;(statearr_48763_48836[2] = inst_48703);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48730__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 43))
{var state_48730__$1 = state_48730;var statearr_48764_48837 = state_48730__$1;(statearr_48764_48837[2] = null);
(statearr_48764_48837[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 29))
{var inst_48714 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48765_48838 = state_48730__$1;(statearr_48765_48838[2] = inst_48714);
(statearr_48765_48838[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 44))
{var inst_48723 = (state_48730[2]);var state_48730__$1 = (function (){var statearr_48766 = state_48730;(statearr_48766[29] = inst_48723);
return statearr_48766;
})();var statearr_48767_48839 = state_48730__$1;(statearr_48767_48839[2] = null);
(statearr_48767_48839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 6))
{var inst_48658 = (state_48730[30]);var inst_48657 = cljs.core.deref.call(null,cs);var inst_48658__$1 = cljs.core.keys.call(null,inst_48657);var inst_48659 = cljs.core.count.call(null,inst_48658__$1);var inst_48660 = cljs.core.reset_BANG_.call(null,dctr,inst_48659);var inst_48665 = cljs.core.seq.call(null,inst_48658__$1);var inst_48666 = inst_48665;var inst_48667 = null;var inst_48668 = 0;var inst_48669 = 0;var state_48730__$1 = (function (){var statearr_48768 = state_48730;(statearr_48768[18] = inst_48666);
(statearr_48768[19] = inst_48668);
(statearr_48768[31] = inst_48660);
(statearr_48768[9] = inst_48669);
(statearr_48768[10] = inst_48667);
(statearr_48768[30] = inst_48658__$1);
return statearr_48768;
})();var statearr_48769_48840 = state_48730__$1;(statearr_48769_48840[2] = null);
(statearr_48769_48840[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 28))
{var inst_48666 = (state_48730[18]);var inst_48687 = (state_48730[17]);var inst_48687__$1 = cljs.core.seq.call(null,inst_48666);var state_48730__$1 = (function (){var statearr_48770 = state_48730;(statearr_48770[17] = inst_48687__$1);
return statearr_48770;
})();if(inst_48687__$1)
{var statearr_48771_48841 = state_48730__$1;(statearr_48771_48841[1] = 33);
} else
{var statearr_48772_48842 = state_48730__$1;(statearr_48772_48842[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 25))
{var inst_48668 = (state_48730[19]);var inst_48669 = (state_48730[9]);var inst_48671 = (inst_48669 < inst_48668);var inst_48672 = inst_48671;var state_48730__$1 = state_48730;if(cljs.core.truth_(inst_48672))
{var statearr_48773_48843 = state_48730__$1;(statearr_48773_48843[1] = 27);
} else
{var statearr_48774_48844 = state_48730__$1;(statearr_48774_48844[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 34))
{var state_48730__$1 = state_48730;var statearr_48775_48845 = state_48730__$1;(statearr_48775_48845[2] = null);
(statearr_48775_48845[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 17))
{var state_48730__$1 = state_48730;var statearr_48776_48846 = state_48730__$1;(statearr_48776_48846[2] = null);
(statearr_48776_48846[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 3))
{var inst_48728 = (state_48730[2]);var state_48730__$1 = state_48730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48730__$1,inst_48728);
} else
{if((state_val_48731 === 12))
{var inst_48653 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48777_48847 = state_48730__$1;(statearr_48777_48847[2] = inst_48653);
(statearr_48777_48847[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 2))
{var state_48730__$1 = state_48730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48730__$1,4,ch);
} else
{if((state_val_48731 === 23))
{var state_48730__$1 = state_48730;var statearr_48778_48848 = state_48730__$1;(statearr_48778_48848[2] = null);
(statearr_48778_48848[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 35))
{var inst_48712 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48779_48849 = state_48730__$1;(statearr_48779_48849[2] = inst_48712);
(statearr_48779_48849[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 19))
{var inst_48627 = (state_48730[7]);var inst_48631 = cljs.core.chunk_first.call(null,inst_48627);var inst_48632 = cljs.core.chunk_rest.call(null,inst_48627);var inst_48633 = cljs.core.count.call(null,inst_48631);var inst_48607 = inst_48632;var inst_48608 = inst_48631;var inst_48609 = inst_48633;var inst_48610 = 0;var state_48730__$1 = (function (){var statearr_48780 = state_48730;(statearr_48780[12] = inst_48610);
(statearr_48780[13] = inst_48609);
(statearr_48780[15] = inst_48607);
(statearr_48780[16] = inst_48608);
return statearr_48780;
})();var statearr_48781_48850 = state_48730__$1;(statearr_48781_48850[2] = null);
(statearr_48781_48850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 11))
{var inst_48607 = (state_48730[15]);var inst_48627 = (state_48730[7]);var inst_48627__$1 = cljs.core.seq.call(null,inst_48607);var state_48730__$1 = (function (){var statearr_48782 = state_48730;(statearr_48782[7] = inst_48627__$1);
return statearr_48782;
})();if(inst_48627__$1)
{var statearr_48783_48851 = state_48730__$1;(statearr_48783_48851[1] = 16);
} else
{var statearr_48784_48852 = state_48730__$1;(statearr_48784_48852[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 9))
{var inst_48655 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48785_48853 = state_48730__$1;(statearr_48785_48853[2] = inst_48655);
(statearr_48785_48853[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 5))
{var inst_48605 = cljs.core.deref.call(null,cs);var inst_48606 = cljs.core.seq.call(null,inst_48605);var inst_48607 = inst_48606;var inst_48608 = null;var inst_48609 = 0;var inst_48610 = 0;var state_48730__$1 = (function (){var statearr_48786 = state_48730;(statearr_48786[12] = inst_48610);
(statearr_48786[13] = inst_48609);
(statearr_48786[15] = inst_48607);
(statearr_48786[16] = inst_48608);
return statearr_48786;
})();var statearr_48787_48854 = state_48730__$1;(statearr_48787_48854[2] = null);
(statearr_48787_48854[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 14))
{var state_48730__$1 = state_48730;var statearr_48788_48855 = state_48730__$1;(statearr_48788_48855[2] = null);
(statearr_48788_48855[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 45))
{var inst_48720 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48789_48856 = state_48730__$1;(statearr_48789_48856[2] = inst_48720);
(statearr_48789_48856[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 26))
{var inst_48658 = (state_48730[30]);var inst_48716 = (state_48730[2]);var inst_48717 = cljs.core.seq.call(null,inst_48658);var state_48730__$1 = (function (){var statearr_48790 = state_48730;(statearr_48790[32] = inst_48716);
return statearr_48790;
})();if(inst_48717)
{var statearr_48791_48857 = state_48730__$1;(statearr_48791_48857[1] = 42);
} else
{var statearr_48792_48858 = state_48730__$1;(statearr_48792_48858[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 16))
{var inst_48627 = (state_48730[7]);var inst_48629 = cljs.core.chunked_seq_QMARK_.call(null,inst_48627);var state_48730__$1 = state_48730;if(inst_48629)
{var statearr_48796_48859 = state_48730__$1;(statearr_48796_48859[1] = 19);
} else
{var statearr_48797_48860 = state_48730__$1;(statearr_48797_48860[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 38))
{var inst_48709 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48798_48861 = state_48730__$1;(statearr_48798_48861[2] = inst_48709);
(statearr_48798_48861[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 30))
{var inst_48666 = (state_48730[18]);var inst_48668 = (state_48730[19]);var inst_48669 = (state_48730[9]);var inst_48667 = (state_48730[10]);var inst_48683 = (state_48730[2]);var inst_48684 = (inst_48669 + 1);var tmp48793 = inst_48666;var tmp48794 = inst_48668;var tmp48795 = inst_48667;var inst_48666__$1 = tmp48793;var inst_48667__$1 = tmp48795;var inst_48668__$1 = tmp48794;var inst_48669__$1 = inst_48684;var state_48730__$1 = (function (){var statearr_48799 = state_48730;(statearr_48799[18] = inst_48666__$1);
(statearr_48799[19] = inst_48668__$1);
(statearr_48799[33] = inst_48683);
(statearr_48799[9] = inst_48669__$1);
(statearr_48799[10] = inst_48667__$1);
return statearr_48799;
})();var statearr_48800_48862 = state_48730__$1;(statearr_48800_48862[2] = null);
(statearr_48800_48862[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 10))
{var inst_48610 = (state_48730[12]);var inst_48608 = (state_48730[16]);var inst_48616 = cljs.core._nth.call(null,inst_48608,inst_48610);var inst_48617 = cljs.core.nth.call(null,inst_48616,0,null);var inst_48618 = cljs.core.nth.call(null,inst_48616,1,null);var state_48730__$1 = (function (){var statearr_48801 = state_48730;(statearr_48801[28] = inst_48617);
return statearr_48801;
})();if(cljs.core.truth_(inst_48618))
{var statearr_48802_48863 = state_48730__$1;(statearr_48802_48863[1] = 13);
} else
{var statearr_48803_48864 = state_48730__$1;(statearr_48803_48864[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 18))
{var inst_48651 = (state_48730[2]);var state_48730__$1 = state_48730;var statearr_48804_48865 = state_48730__$1;(statearr_48804_48865[2] = inst_48651);
(statearr_48804_48865[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 42))
{var state_48730__$1 = state_48730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48730__$1,45,dchan);
} else
{if((state_val_48731 === 37))
{var inst_48687 = (state_48730[17]);var inst_48696 = cljs.core.first.call(null,inst_48687);var state_48730__$1 = (function (){var statearr_48805 = state_48730;(statearr_48805[25] = inst_48696);
return statearr_48805;
})();var statearr_48806_48866 = state_48730__$1;(statearr_48806_48866[2] = null);
(statearr_48806_48866[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48731 === 8))
{var inst_48610 = (state_48730[12]);var inst_48609 = (state_48730[13]);var inst_48612 = (inst_48610 < inst_48609);var inst_48613 = inst_48612;var state_48730__$1 = state_48730;if(cljs.core.truth_(inst_48613))
{var statearr_48807_48867 = state_48730__$1;(statearr_48807_48867[1] = 10);
} else
{var statearr_48808_48868 = state_48730__$1;(statearr_48808_48868[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___48816,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___48816,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_48812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48812[0] = state_machine__5677__auto__);
(statearr_48812[1] = 1);
return statearr_48812;
});
var state_machine__5677__auto____1 = (function (state_48730){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_48730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e48813){if((e48813 instanceof Object))
{var ex__5680__auto__ = e48813;var statearr_48814_48869 = state_48730;(statearr_48814_48869[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48730);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48870 = state_48730;
state_48730 = G__48870;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_48730){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_48730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___48816,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_48815 = f__5692__auto__.call(null);(statearr_48815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___48816);
return statearr_48815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___48816,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj48872 = {};return obj48872;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t48982 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48982 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48983){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48983 = meta48983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48982.cljs$lang$type = true;
cljs.core.async.t48982.cljs$lang$ctorStr = "cljs.core.async/t48982";
cljs.core.async.t48982.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t48982");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48984){var self__ = this;
var _48984__$1 = this;return self__.meta48983;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48984,meta48983__$1){var self__ = this;
var _48984__$1 = this;return (new cljs.core.async.t48982(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48983__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48982 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48982(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48983){return (new cljs.core.async.t48982(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48983));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48982(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___49091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49049){var state_val_49050 = (state_49049[1]);if((state_val_49050 === 7))
{var inst_48998 = (state_49049[7]);var inst_49003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48998);var state_49049__$1 = state_49049;var statearr_49051_49092 = state_49049__$1;(statearr_49051_49092[2] = inst_49003);
(statearr_49051_49092[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 20))
{var inst_49013 = (state_49049[8]);var state_49049__$1 = state_49049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49049__$1,23,out,inst_49013);
} else
{if((state_val_49050 === 1))
{var inst_48988 = (state_49049[9]);var inst_48988__$1 = calc_state.call(null);var inst_48989 = cljs.core.seq_QMARK_.call(null,inst_48988__$1);var state_49049__$1 = (function (){var statearr_49052 = state_49049;(statearr_49052[9] = inst_48988__$1);
return statearr_49052;
})();if(inst_48989)
{var statearr_49053_49093 = state_49049__$1;(statearr_49053_49093[1] = 2);
} else
{var statearr_49054_49094 = state_49049__$1;(statearr_49054_49094[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 4))
{var inst_48988 = (state_49049[9]);var inst_48994 = (state_49049[2]);var inst_48995 = cljs.core.get.call(null,inst_48994,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48996 = cljs.core.get.call(null,inst_48994,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48997 = cljs.core.get.call(null,inst_48994,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48998 = inst_48988;var state_49049__$1 = (function (){var statearr_49055 = state_49049;(statearr_49055[10] = inst_48997);
(statearr_49055[7] = inst_48998);
(statearr_49055[11] = inst_48996);
(statearr_49055[12] = inst_48995);
return statearr_49055;
})();var statearr_49056_49095 = state_49049__$1;(statearr_49056_49095[2] = null);
(statearr_49056_49095[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 15))
{var state_49049__$1 = state_49049;var statearr_49057_49096 = state_49049__$1;(statearr_49057_49096[2] = null);
(statearr_49057_49096[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 21))
{var state_49049__$1 = state_49049;var statearr_49058_49097 = state_49049__$1;(statearr_49058_49097[2] = null);
(statearr_49058_49097[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 13))
{var inst_49045 = (state_49049[2]);var state_49049__$1 = state_49049;var statearr_49059_49098 = state_49049__$1;(statearr_49059_49098[2] = inst_49045);
(statearr_49059_49098[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 22))
{var inst_49006 = (state_49049[13]);var inst_49042 = (state_49049[2]);var inst_48998 = inst_49006;var state_49049__$1 = (function (){var statearr_49060 = state_49049;(statearr_49060[14] = inst_49042);
(statearr_49060[7] = inst_48998);
return statearr_49060;
})();var statearr_49061_49099 = state_49049__$1;(statearr_49061_49099[2] = null);
(statearr_49061_49099[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 6))
{var inst_49047 = (state_49049[2]);var state_49049__$1 = state_49049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49049__$1,inst_49047);
} else
{if((state_val_49050 === 17))
{var inst_49028 = (state_49049[15]);var state_49049__$1 = state_49049;var statearr_49062_49100 = state_49049__$1;(statearr_49062_49100[2] = inst_49028);
(statearr_49062_49100[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 3))
{var inst_48988 = (state_49049[9]);var state_49049__$1 = state_49049;var statearr_49063_49101 = state_49049__$1;(statearr_49063_49101[2] = inst_48988);
(statearr_49063_49101[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 12))
{var inst_49009 = (state_49049[16]);var inst_49028 = (state_49049[15]);var inst_49014 = (state_49049[17]);var inst_49028__$1 = inst_49009.call(null,inst_49014);var state_49049__$1 = (function (){var statearr_49064 = state_49049;(statearr_49064[15] = inst_49028__$1);
return statearr_49064;
})();if(cljs.core.truth_(inst_49028__$1))
{var statearr_49065_49102 = state_49049__$1;(statearr_49065_49102[1] = 17);
} else
{var statearr_49066_49103 = state_49049__$1;(statearr_49066_49103[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 2))
{var inst_48988 = (state_49049[9]);var inst_48991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48988);var state_49049__$1 = state_49049;var statearr_49067_49104 = state_49049__$1;(statearr_49067_49104[2] = inst_48991);
(statearr_49067_49104[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 23))
{var inst_49039 = (state_49049[2]);var state_49049__$1 = state_49049;var statearr_49068_49105 = state_49049__$1;(statearr_49068_49105[2] = inst_49039);
(statearr_49068_49105[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 19))
{var inst_49036 = (state_49049[2]);var state_49049__$1 = state_49049;if(cljs.core.truth_(inst_49036))
{var statearr_49069_49106 = state_49049__$1;(statearr_49069_49106[1] = 20);
} else
{var statearr_49070_49107 = state_49049__$1;(statearr_49070_49107[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 11))
{var inst_49013 = (state_49049[8]);var inst_49019 = (inst_49013 == null);var state_49049__$1 = state_49049;if(cljs.core.truth_(inst_49019))
{var statearr_49071_49108 = state_49049__$1;(statearr_49071_49108[1] = 14);
} else
{var statearr_49072_49109 = state_49049__$1;(statearr_49072_49109[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 9))
{var inst_49006 = (state_49049[13]);var inst_49006__$1 = (state_49049[2]);var inst_49007 = cljs.core.get.call(null,inst_49006__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49008 = cljs.core.get.call(null,inst_49006__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49009 = cljs.core.get.call(null,inst_49006__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_49049__$1 = (function (){var statearr_49073 = state_49049;(statearr_49073[16] = inst_49009);
(statearr_49073[13] = inst_49006__$1);
(statearr_49073[18] = inst_49008);
return statearr_49073;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49049__$1,10,inst_49007);
} else
{if((state_val_49050 === 5))
{var inst_48998 = (state_49049[7]);var inst_49001 = cljs.core.seq_QMARK_.call(null,inst_48998);var state_49049__$1 = state_49049;if(inst_49001)
{var statearr_49074_49110 = state_49049__$1;(statearr_49074_49110[1] = 7);
} else
{var statearr_49075_49111 = state_49049__$1;(statearr_49075_49111[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 14))
{var inst_49014 = (state_49049[17]);var inst_49021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49014);var state_49049__$1 = state_49049;var statearr_49076_49112 = state_49049__$1;(statearr_49076_49112[2] = inst_49021);
(statearr_49076_49112[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 16))
{var inst_49024 = (state_49049[2]);var inst_49025 = calc_state.call(null);var inst_48998 = inst_49025;var state_49049__$1 = (function (){var statearr_49077 = state_49049;(statearr_49077[19] = inst_49024);
(statearr_49077[7] = inst_48998);
return statearr_49077;
})();var statearr_49078_49113 = state_49049__$1;(statearr_49078_49113[2] = null);
(statearr_49078_49113[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 10))
{var inst_49014 = (state_49049[17]);var inst_49013 = (state_49049[8]);var inst_49012 = (state_49049[2]);var inst_49013__$1 = cljs.core.nth.call(null,inst_49012,0,null);var inst_49014__$1 = cljs.core.nth.call(null,inst_49012,1,null);var inst_49015 = (inst_49013__$1 == null);var inst_49016 = cljs.core._EQ_.call(null,inst_49014__$1,change);var inst_49017 = (inst_49015) || (inst_49016);var state_49049__$1 = (function (){var statearr_49079 = state_49049;(statearr_49079[17] = inst_49014__$1);
(statearr_49079[8] = inst_49013__$1);
return statearr_49079;
})();if(cljs.core.truth_(inst_49017))
{var statearr_49080_49114 = state_49049__$1;(statearr_49080_49114[1] = 11);
} else
{var statearr_49081_49115 = state_49049__$1;(statearr_49081_49115[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 18))
{var inst_49009 = (state_49049[16]);var inst_49014 = (state_49049[17]);var inst_49008 = (state_49049[18]);var inst_49031 = cljs.core.empty_QMARK_.call(null,inst_49009);var inst_49032 = inst_49008.call(null,inst_49014);var inst_49033 = cljs.core.not.call(null,inst_49032);var inst_49034 = (inst_49031) && (inst_49033);var state_49049__$1 = state_49049;var statearr_49082_49116 = state_49049__$1;(statearr_49082_49116[2] = inst_49034);
(statearr_49082_49116[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49050 === 8))
{var inst_48998 = (state_49049[7]);var state_49049__$1 = state_49049;var statearr_49083_49117 = state_49049__$1;(statearr_49083_49117[2] = inst_48998);
(statearr_49083_49117[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49087[0] = state_machine__5677__auto__);
(statearr_49087[1] = 1);
return statearr_49087;
});
var state_machine__5677__auto____1 = (function (state_49049){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49088){if((e49088 instanceof Object))
{var ex__5680__auto__ = e49088;var statearr_49089_49118 = state_49049;(statearr_49089_49118[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49119 = state_49049;
state_49049 = G__49119;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49049){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_49090 = f__5692__auto__.call(null);(statearr_49090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49091);
return statearr_49090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49091,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj49121 = {};return obj49121;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__49122_SHARP_){if(cljs.core.truth_(p1__49122_SHARP_.call(null,topic)))
{return p1__49122_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__49122_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t49247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49247 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49248){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49248 = meta49248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49247.cljs$lang$type = true;
cljs.core.async.t49247.cljs$lang$ctorStr = "cljs.core.async/t49247";
cljs.core.async.t49247.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t49247");
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t49247.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49249){var self__ = this;
var _49249__$1 = this;return self__.meta49248;
});})(mults,ensure_mult))
;
cljs.core.async.t49247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49249,meta49248__$1){var self__ = this;
var _49249__$1 = this;return (new cljs.core.async.t49247(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49248__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t49247 = ((function (mults,ensure_mult){
return (function __GT_t49247(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49248){return (new cljs.core.async.t49247(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49248));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t49247(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___49371 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49371,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49371,mults,ensure_mult,p){
return (function (state_49323){var state_val_49324 = (state_49323[1]);if((state_val_49324 === 7))
{var inst_49319 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49325_49372 = state_49323__$1;(statearr_49325_49372[2] = inst_49319);
(statearr_49325_49372[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 20))
{var state_49323__$1 = state_49323;var statearr_49326_49373 = state_49323__$1;(statearr_49326_49373[2] = null);
(statearr_49326_49373[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 1))
{var state_49323__$1 = state_49323;var statearr_49327_49374 = state_49323__$1;(statearr_49327_49374[2] = null);
(statearr_49327_49374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 24))
{var inst_49302 = (state_49323[7]);var inst_49252 = (state_49323[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49323,23,Object,null,22);var inst_49309 = cljs.core.async.muxch_STAR_.call(null,inst_49302);var state_49323__$1 = state_49323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49323__$1,25,inst_49309,inst_49252);
} else
{if((state_val_49324 === 4))
{var inst_49252 = (state_49323[8]);var inst_49252__$1 = (state_49323[2]);var inst_49253 = (inst_49252__$1 == null);var state_49323__$1 = (function (){var statearr_49328 = state_49323;(statearr_49328[8] = inst_49252__$1);
return statearr_49328;
})();if(cljs.core.truth_(inst_49253))
{var statearr_49329_49375 = state_49323__$1;(statearr_49329_49375[1] = 5);
} else
{var statearr_49330_49376 = state_49323__$1;(statearr_49330_49376[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 15))
{var inst_49294 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49331_49377 = state_49323__$1;(statearr_49331_49377[2] = inst_49294);
(statearr_49331_49377[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 21))
{var inst_49316 = (state_49323[2]);var state_49323__$1 = (function (){var statearr_49332 = state_49323;(statearr_49332[9] = inst_49316);
return statearr_49332;
})();var statearr_49333_49378 = state_49323__$1;(statearr_49333_49378[2] = null);
(statearr_49333_49378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 13))
{var inst_49276 = (state_49323[10]);var inst_49278 = cljs.core.chunked_seq_QMARK_.call(null,inst_49276);var state_49323__$1 = state_49323;if(inst_49278)
{var statearr_49334_49379 = state_49323__$1;(statearr_49334_49379[1] = 16);
} else
{var statearr_49335_49380 = state_49323__$1;(statearr_49335_49380[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 22))
{var inst_49313 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49336_49381 = state_49323__$1;(statearr_49336_49381[2] = inst_49313);
(statearr_49336_49381[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 6))
{var inst_49302 = (state_49323[7]);var inst_49252 = (state_49323[8]);var inst_49300 = (state_49323[11]);var inst_49300__$1 = topic_fn.call(null,inst_49252);var inst_49301 = cljs.core.deref.call(null,mults);var inst_49302__$1 = cljs.core.get.call(null,inst_49301,inst_49300__$1);var state_49323__$1 = (function (){var statearr_49337 = state_49323;(statearr_49337[7] = inst_49302__$1);
(statearr_49337[11] = inst_49300__$1);
return statearr_49337;
})();if(cljs.core.truth_(inst_49302__$1))
{var statearr_49338_49382 = state_49323__$1;(statearr_49338_49382[1] = 19);
} else
{var statearr_49339_49383 = state_49323__$1;(statearr_49339_49383[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 25))
{var inst_49311 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49340_49384 = state_49323__$1;(statearr_49340_49384[2] = inst_49311);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 17))
{var inst_49276 = (state_49323[10]);var inst_49285 = cljs.core.first.call(null,inst_49276);var inst_49286 = cljs.core.async.muxch_STAR_.call(null,inst_49285);var inst_49287 = cljs.core.async.close_BANG_.call(null,inst_49286);var inst_49288 = cljs.core.next.call(null,inst_49276);var inst_49262 = inst_49288;var inst_49263 = null;var inst_49264 = 0;var inst_49265 = 0;var state_49323__$1 = (function (){var statearr_49341 = state_49323;(statearr_49341[12] = inst_49262);
(statearr_49341[13] = inst_49287);
(statearr_49341[14] = inst_49265);
(statearr_49341[15] = inst_49263);
(statearr_49341[16] = inst_49264);
return statearr_49341;
})();var statearr_49342_49385 = state_49323__$1;(statearr_49342_49385[2] = null);
(statearr_49342_49385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 3))
{var inst_49321 = (state_49323[2]);var state_49323__$1 = state_49323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49323__$1,inst_49321);
} else
{if((state_val_49324 === 12))
{var inst_49296 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49343_49386 = state_49323__$1;(statearr_49343_49386[2] = inst_49296);
(statearr_49343_49386[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 2))
{var state_49323__$1 = state_49323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49323__$1,4,ch);
} else
{if((state_val_49324 === 23))
{var inst_49300 = (state_49323[11]);var inst_49304 = (state_49323[2]);var inst_49305 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49300);var state_49323__$1 = (function (){var statearr_49344 = state_49323;(statearr_49344[17] = inst_49304);
return statearr_49344;
})();var statearr_49345_49387 = state_49323__$1;(statearr_49345_49387[2] = inst_49305);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 19))
{var state_49323__$1 = state_49323;var statearr_49346_49388 = state_49323__$1;(statearr_49346_49388[2] = null);
(statearr_49346_49388[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 11))
{var inst_49262 = (state_49323[12]);var inst_49276 = (state_49323[10]);var inst_49276__$1 = cljs.core.seq.call(null,inst_49262);var state_49323__$1 = (function (){var statearr_49347 = state_49323;(statearr_49347[10] = inst_49276__$1);
return statearr_49347;
})();if(inst_49276__$1)
{var statearr_49348_49389 = state_49323__$1;(statearr_49348_49389[1] = 13);
} else
{var statearr_49349_49390 = state_49323__$1;(statearr_49349_49390[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 9))
{var inst_49298 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49350_49391 = state_49323__$1;(statearr_49350_49391[2] = inst_49298);
(statearr_49350_49391[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 5))
{var inst_49259 = cljs.core.deref.call(null,mults);var inst_49260 = cljs.core.vals.call(null,inst_49259);var inst_49261 = cljs.core.seq.call(null,inst_49260);var inst_49262 = inst_49261;var inst_49263 = null;var inst_49264 = 0;var inst_49265 = 0;var state_49323__$1 = (function (){var statearr_49351 = state_49323;(statearr_49351[12] = inst_49262);
(statearr_49351[14] = inst_49265);
(statearr_49351[15] = inst_49263);
(statearr_49351[16] = inst_49264);
return statearr_49351;
})();var statearr_49352_49392 = state_49323__$1;(statearr_49352_49392[2] = null);
(statearr_49352_49392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 14))
{var state_49323__$1 = state_49323;var statearr_49356_49393 = state_49323__$1;(statearr_49356_49393[2] = null);
(statearr_49356_49393[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 16))
{var inst_49276 = (state_49323[10]);var inst_49280 = cljs.core.chunk_first.call(null,inst_49276);var inst_49281 = cljs.core.chunk_rest.call(null,inst_49276);var inst_49282 = cljs.core.count.call(null,inst_49280);var inst_49262 = inst_49281;var inst_49263 = inst_49280;var inst_49264 = inst_49282;var inst_49265 = 0;var state_49323__$1 = (function (){var statearr_49357 = state_49323;(statearr_49357[12] = inst_49262);
(statearr_49357[14] = inst_49265);
(statearr_49357[15] = inst_49263);
(statearr_49357[16] = inst_49264);
return statearr_49357;
})();var statearr_49358_49394 = state_49323__$1;(statearr_49358_49394[2] = null);
(statearr_49358_49394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 10))
{var inst_49262 = (state_49323[12]);var inst_49265 = (state_49323[14]);var inst_49263 = (state_49323[15]);var inst_49264 = (state_49323[16]);var inst_49270 = cljs.core._nth.call(null,inst_49263,inst_49265);var inst_49271 = cljs.core.async.muxch_STAR_.call(null,inst_49270);var inst_49272 = cljs.core.async.close_BANG_.call(null,inst_49271);var inst_49273 = (inst_49265 + 1);var tmp49353 = inst_49262;var tmp49354 = inst_49263;var tmp49355 = inst_49264;var inst_49262__$1 = tmp49353;var inst_49263__$1 = tmp49354;var inst_49264__$1 = tmp49355;var inst_49265__$1 = inst_49273;var state_49323__$1 = (function (){var statearr_49359 = state_49323;(statearr_49359[12] = inst_49262__$1);
(statearr_49359[14] = inst_49265__$1);
(statearr_49359[15] = inst_49263__$1);
(statearr_49359[16] = inst_49264__$1);
(statearr_49359[18] = inst_49272);
return statearr_49359;
})();var statearr_49360_49395 = state_49323__$1;(statearr_49360_49395[2] = null);
(statearr_49360_49395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 18))
{var inst_49291 = (state_49323[2]);var state_49323__$1 = state_49323;var statearr_49361_49396 = state_49323__$1;(statearr_49361_49396[2] = inst_49291);
(statearr_49361_49396[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49324 === 8))
{var inst_49265 = (state_49323[14]);var inst_49264 = (state_49323[16]);var inst_49267 = (inst_49265 < inst_49264);var inst_49268 = inst_49267;var state_49323__$1 = state_49323;if(cljs.core.truth_(inst_49268))
{var statearr_49362_49397 = state_49323__$1;(statearr_49362_49397[1] = 10);
} else
{var statearr_49363_49398 = state_49323__$1;(statearr_49363_49398[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49371,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___49371,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49367[0] = state_machine__5677__auto__);
(statearr_49367[1] = 1);
return statearr_49367;
});
var state_machine__5677__auto____1 = (function (state_49323){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49323);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49368){if((e49368 instanceof Object))
{var ex__5680__auto__ = e49368;var statearr_49369_49399 = state_49323;(statearr_49369_49399[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49400 = state_49323;
state_49323 = G__49400;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49323){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49371,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_49370 = f__5692__auto__.call(null);(statearr_49370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49371);
return statearr_49370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49371,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5691__auto___49537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49507){var state_val_49508 = (state_49507[1]);if((state_val_49508 === 7))
{var state_49507__$1 = state_49507;var statearr_49509_49538 = state_49507__$1;(statearr_49509_49538[2] = null);
(statearr_49509_49538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 1))
{var state_49507__$1 = state_49507;var statearr_49510_49539 = state_49507__$1;(statearr_49510_49539[2] = null);
(statearr_49510_49539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 4))
{var inst_49471 = (state_49507[7]);var inst_49473 = (inst_49471 < cnt);var state_49507__$1 = state_49507;if(cljs.core.truth_(inst_49473))
{var statearr_49511_49540 = state_49507__$1;(statearr_49511_49540[1] = 6);
} else
{var statearr_49512_49541 = state_49507__$1;(statearr_49512_49541[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 15))
{var inst_49503 = (state_49507[2]);var state_49507__$1 = state_49507;var statearr_49513_49542 = state_49507__$1;(statearr_49513_49542[2] = inst_49503);
(statearr_49513_49542[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 13))
{var inst_49496 = cljs.core.async.close_BANG_.call(null,out);var state_49507__$1 = state_49507;var statearr_49514_49543 = state_49507__$1;(statearr_49514_49543[2] = inst_49496);
(statearr_49514_49543[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 6))
{var state_49507__$1 = state_49507;var statearr_49515_49544 = state_49507__$1;(statearr_49515_49544[2] = null);
(statearr_49515_49544[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 3))
{var inst_49505 = (state_49507[2]);var state_49507__$1 = state_49507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49507__$1,inst_49505);
} else
{if((state_val_49508 === 12))
{var inst_49493 = (state_49507[8]);var inst_49493__$1 = (state_49507[2]);var inst_49494 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49493__$1);var state_49507__$1 = (function (){var statearr_49516 = state_49507;(statearr_49516[8] = inst_49493__$1);
return statearr_49516;
})();if(cljs.core.truth_(inst_49494))
{var statearr_49517_49545 = state_49507__$1;(statearr_49517_49545[1] = 13);
} else
{var statearr_49518_49546 = state_49507__$1;(statearr_49518_49546[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 2))
{var inst_49470 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_49471 = 0;var state_49507__$1 = (function (){var statearr_49519 = state_49507;(statearr_49519[7] = inst_49471);
(statearr_49519[9] = inst_49470);
return statearr_49519;
})();var statearr_49520_49547 = state_49507__$1;(statearr_49520_49547[2] = null);
(statearr_49520_49547[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 11))
{var inst_49471 = (state_49507[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49507,10,Object,null,9);var inst_49480 = chs__$1.call(null,inst_49471);var inst_49481 = done.call(null,inst_49471);var inst_49482 = cljs.core.async.take_BANG_.call(null,inst_49480,inst_49481);var state_49507__$1 = state_49507;var statearr_49521_49548 = state_49507__$1;(statearr_49521_49548[2] = inst_49482);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49507__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 9))
{var inst_49471 = (state_49507[7]);var inst_49484 = (state_49507[2]);var inst_49485 = (inst_49471 + 1);var inst_49471__$1 = inst_49485;var state_49507__$1 = (function (){var statearr_49522 = state_49507;(statearr_49522[7] = inst_49471__$1);
(statearr_49522[10] = inst_49484);
return statearr_49522;
})();var statearr_49523_49549 = state_49507__$1;(statearr_49523_49549[2] = null);
(statearr_49523_49549[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 5))
{var inst_49491 = (state_49507[2]);var state_49507__$1 = (function (){var statearr_49524 = state_49507;(statearr_49524[11] = inst_49491);
return statearr_49524;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49507__$1,12,dchan);
} else
{if((state_val_49508 === 14))
{var inst_49493 = (state_49507[8]);var inst_49498 = cljs.core.apply.call(null,f,inst_49493);var state_49507__$1 = state_49507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49507__$1,16,out,inst_49498);
} else
{if((state_val_49508 === 16))
{var inst_49500 = (state_49507[2]);var state_49507__$1 = (function (){var statearr_49525 = state_49507;(statearr_49525[12] = inst_49500);
return statearr_49525;
})();var statearr_49526_49550 = state_49507__$1;(statearr_49526_49550[2] = null);
(statearr_49526_49550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 10))
{var inst_49475 = (state_49507[2]);var inst_49476 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_49507__$1 = (function (){var statearr_49527 = state_49507;(statearr_49527[13] = inst_49475);
return statearr_49527;
})();var statearr_49528_49551 = state_49507__$1;(statearr_49528_49551[2] = inst_49476);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49507__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49508 === 8))
{var inst_49489 = (state_49507[2]);var state_49507__$1 = state_49507;var statearr_49529_49552 = state_49507__$1;(statearr_49529_49552[2] = inst_49489);
(statearr_49529_49552[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49533[0] = state_machine__5677__auto__);
(statearr_49533[1] = 1);
return statearr_49533;
});
var state_machine__5677__auto____1 = (function (state_49507){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49534){if((e49534 instanceof Object))
{var ex__5680__auto__ = e49534;var statearr_49535_49553 = state_49507;(statearr_49535_49553[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49554 = state_49507;
state_49507 = G__49554;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49507){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_49536 = f__5692__auto__.call(null);(statearr_49536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49537);
return statearr_49536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49537,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___49662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49662,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49662,out){
return (function (state_49638){var state_val_49639 = (state_49638[1]);if((state_val_49639 === 7))
{var inst_49618 = (state_49638[7]);var inst_49617 = (state_49638[8]);var inst_49617__$1 = (state_49638[2]);var inst_49618__$1 = cljs.core.nth.call(null,inst_49617__$1,0,null);var inst_49619 = cljs.core.nth.call(null,inst_49617__$1,1,null);var inst_49620 = (inst_49618__$1 == null);var state_49638__$1 = (function (){var statearr_49640 = state_49638;(statearr_49640[9] = inst_49619);
(statearr_49640[7] = inst_49618__$1);
(statearr_49640[8] = inst_49617__$1);
return statearr_49640;
})();if(cljs.core.truth_(inst_49620))
{var statearr_49641_49663 = state_49638__$1;(statearr_49641_49663[1] = 8);
} else
{var statearr_49642_49664 = state_49638__$1;(statearr_49642_49664[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 1))
{var inst_49609 = cljs.core.vec.call(null,chs);var inst_49610 = inst_49609;var state_49638__$1 = (function (){var statearr_49643 = state_49638;(statearr_49643[10] = inst_49610);
return statearr_49643;
})();var statearr_49644_49665 = state_49638__$1;(statearr_49644_49665[2] = null);
(statearr_49644_49665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 4))
{var inst_49610 = (state_49638[10]);var state_49638__$1 = state_49638;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49638__$1,7,inst_49610);
} else
{if((state_val_49639 === 6))
{var inst_49634 = (state_49638[2]);var state_49638__$1 = state_49638;var statearr_49645_49666 = state_49638__$1;(statearr_49645_49666[2] = inst_49634);
(statearr_49645_49666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 3))
{var inst_49636 = (state_49638[2]);var state_49638__$1 = state_49638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49638__$1,inst_49636);
} else
{if((state_val_49639 === 2))
{var inst_49610 = (state_49638[10]);var inst_49612 = cljs.core.count.call(null,inst_49610);var inst_49613 = (inst_49612 > 0);var state_49638__$1 = state_49638;if(cljs.core.truth_(inst_49613))
{var statearr_49647_49667 = state_49638__$1;(statearr_49647_49667[1] = 4);
} else
{var statearr_49648_49668 = state_49638__$1;(statearr_49648_49668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 11))
{var inst_49610 = (state_49638[10]);var inst_49627 = (state_49638[2]);var tmp49646 = inst_49610;var inst_49610__$1 = tmp49646;var state_49638__$1 = (function (){var statearr_49649 = state_49638;(statearr_49649[10] = inst_49610__$1);
(statearr_49649[11] = inst_49627);
return statearr_49649;
})();var statearr_49650_49669 = state_49638__$1;(statearr_49650_49669[2] = null);
(statearr_49650_49669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 9))
{var inst_49618 = (state_49638[7]);var state_49638__$1 = state_49638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49638__$1,11,out,inst_49618);
} else
{if((state_val_49639 === 5))
{var inst_49632 = cljs.core.async.close_BANG_.call(null,out);var state_49638__$1 = state_49638;var statearr_49651_49670 = state_49638__$1;(statearr_49651_49670[2] = inst_49632);
(statearr_49651_49670[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 10))
{var inst_49630 = (state_49638[2]);var state_49638__$1 = state_49638;var statearr_49652_49671 = state_49638__$1;(statearr_49652_49671[2] = inst_49630);
(statearr_49652_49671[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49639 === 8))
{var inst_49610 = (state_49638[10]);var inst_49619 = (state_49638[9]);var inst_49618 = (state_49638[7]);var inst_49617 = (state_49638[8]);var inst_49622 = (function (){var c = inst_49619;var v = inst_49618;var vec__49615 = inst_49617;var cs = inst_49610;return ((function (c,v,vec__49615,cs,inst_49610,inst_49619,inst_49618,inst_49617,state_val_49639,c__5691__auto___49662,out){
return (function (p1__49555_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__49555_SHARP_);
});
;})(c,v,vec__49615,cs,inst_49610,inst_49619,inst_49618,inst_49617,state_val_49639,c__5691__auto___49662,out))
})();var inst_49623 = cljs.core.filterv.call(null,inst_49622,inst_49610);var inst_49610__$1 = inst_49623;var state_49638__$1 = (function (){var statearr_49653 = state_49638;(statearr_49653[10] = inst_49610__$1);
return statearr_49653;
})();var statearr_49654_49672 = state_49638__$1;(statearr_49654_49672[2] = null);
(statearr_49654_49672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49662,out))
;return ((function (switch__5676__auto__,c__5691__auto___49662,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49658 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49658[0] = state_machine__5677__auto__);
(statearr_49658[1] = 1);
return statearr_49658;
});
var state_machine__5677__auto____1 = (function (state_49638){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49659){if((e49659 instanceof Object))
{var ex__5680__auto__ = e49659;var statearr_49660_49673 = state_49638;(statearr_49660_49673[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49674 = state_49638;
state_49638 = G__49674;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49638){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49662,out))
})();var state__5693__auto__ = (function (){var statearr_49661 = f__5692__auto__.call(null);(statearr_49661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49662);
return statearr_49661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49662,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___49767 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49767,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49767,out){
return (function (state_49744){var state_val_49745 = (state_49744[1]);if((state_val_49745 === 7))
{var inst_49726 = (state_49744[7]);var inst_49726__$1 = (state_49744[2]);var inst_49727 = (inst_49726__$1 == null);var inst_49728 = cljs.core.not.call(null,inst_49727);var state_49744__$1 = (function (){var statearr_49746 = state_49744;(statearr_49746[7] = inst_49726__$1);
return statearr_49746;
})();if(inst_49728)
{var statearr_49747_49768 = state_49744__$1;(statearr_49747_49768[1] = 8);
} else
{var statearr_49748_49769 = state_49744__$1;(statearr_49748_49769[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 1))
{var inst_49721 = 0;var state_49744__$1 = (function (){var statearr_49749 = state_49744;(statearr_49749[8] = inst_49721);
return statearr_49749;
})();var statearr_49750_49770 = state_49744__$1;(statearr_49750_49770[2] = null);
(statearr_49750_49770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 4))
{var state_49744__$1 = state_49744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49744__$1,7,ch);
} else
{if((state_val_49745 === 6))
{var inst_49739 = (state_49744[2]);var state_49744__$1 = state_49744;var statearr_49751_49771 = state_49744__$1;(statearr_49751_49771[2] = inst_49739);
(statearr_49751_49771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 3))
{var inst_49741 = (state_49744[2]);var inst_49742 = cljs.core.async.close_BANG_.call(null,out);var state_49744__$1 = (function (){var statearr_49752 = state_49744;(statearr_49752[9] = inst_49741);
return statearr_49752;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49744__$1,inst_49742);
} else
{if((state_val_49745 === 2))
{var inst_49721 = (state_49744[8]);var inst_49723 = (inst_49721 < n);var state_49744__$1 = state_49744;if(cljs.core.truth_(inst_49723))
{var statearr_49753_49772 = state_49744__$1;(statearr_49753_49772[1] = 4);
} else
{var statearr_49754_49773 = state_49744__$1;(statearr_49754_49773[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 11))
{var inst_49721 = (state_49744[8]);var inst_49731 = (state_49744[2]);var inst_49732 = (inst_49721 + 1);var inst_49721__$1 = inst_49732;var state_49744__$1 = (function (){var statearr_49755 = state_49744;(statearr_49755[10] = inst_49731);
(statearr_49755[8] = inst_49721__$1);
return statearr_49755;
})();var statearr_49756_49774 = state_49744__$1;(statearr_49756_49774[2] = null);
(statearr_49756_49774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 9))
{var state_49744__$1 = state_49744;var statearr_49757_49775 = state_49744__$1;(statearr_49757_49775[2] = null);
(statearr_49757_49775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 5))
{var state_49744__$1 = state_49744;var statearr_49758_49776 = state_49744__$1;(statearr_49758_49776[2] = null);
(statearr_49758_49776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 10))
{var inst_49736 = (state_49744[2]);var state_49744__$1 = state_49744;var statearr_49759_49777 = state_49744__$1;(statearr_49759_49777[2] = inst_49736);
(statearr_49759_49777[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49745 === 8))
{var inst_49726 = (state_49744[7]);var state_49744__$1 = state_49744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49744__$1,11,out,inst_49726);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49767,out))
;return ((function (switch__5676__auto__,c__5691__auto___49767,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49763 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49763[0] = state_machine__5677__auto__);
(statearr_49763[1] = 1);
return statearr_49763;
});
var state_machine__5677__auto____1 = (function (state_49744){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49744);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49764){if((e49764 instanceof Object))
{var ex__5680__auto__ = e49764;var statearr_49765_49778 = state_49744;(statearr_49765_49778[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49779 = state_49744;
state_49744 = G__49779;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49744){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49767,out))
})();var state__5693__auto__ = (function (){var statearr_49766 = f__5692__auto__.call(null);(statearr_49766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49767);
return statearr_49766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49767,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___49876 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___49876,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___49876,out){
return (function (state_49851){var state_val_49852 = (state_49851[1]);if((state_val_49852 === 7))
{var inst_49846 = (state_49851[2]);var state_49851__$1 = state_49851;var statearr_49853_49877 = state_49851__$1;(statearr_49853_49877[2] = inst_49846);
(statearr_49853_49877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 1))
{var inst_49828 = null;var state_49851__$1 = (function (){var statearr_49854 = state_49851;(statearr_49854[7] = inst_49828);
return statearr_49854;
})();var statearr_49855_49878 = state_49851__$1;(statearr_49855_49878[2] = null);
(statearr_49855_49878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 4))
{var inst_49831 = (state_49851[8]);var inst_49831__$1 = (state_49851[2]);var inst_49832 = (inst_49831__$1 == null);var inst_49833 = cljs.core.not.call(null,inst_49832);var state_49851__$1 = (function (){var statearr_49856 = state_49851;(statearr_49856[8] = inst_49831__$1);
return statearr_49856;
})();if(inst_49833)
{var statearr_49857_49879 = state_49851__$1;(statearr_49857_49879[1] = 5);
} else
{var statearr_49858_49880 = state_49851__$1;(statearr_49858_49880[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 6))
{var state_49851__$1 = state_49851;var statearr_49859_49881 = state_49851__$1;(statearr_49859_49881[2] = null);
(statearr_49859_49881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 3))
{var inst_49848 = (state_49851[2]);var inst_49849 = cljs.core.async.close_BANG_.call(null,out);var state_49851__$1 = (function (){var statearr_49860 = state_49851;(statearr_49860[9] = inst_49848);
return statearr_49860;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49851__$1,inst_49849);
} else
{if((state_val_49852 === 2))
{var state_49851__$1 = state_49851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49851__$1,4,ch);
} else
{if((state_val_49852 === 11))
{var inst_49831 = (state_49851[8]);var inst_49840 = (state_49851[2]);var inst_49828 = inst_49831;var state_49851__$1 = (function (){var statearr_49861 = state_49851;(statearr_49861[10] = inst_49840);
(statearr_49861[7] = inst_49828);
return statearr_49861;
})();var statearr_49862_49882 = state_49851__$1;(statearr_49862_49882[2] = null);
(statearr_49862_49882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 9))
{var inst_49831 = (state_49851[8]);var state_49851__$1 = state_49851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49851__$1,11,out,inst_49831);
} else
{if((state_val_49852 === 5))
{var inst_49831 = (state_49851[8]);var inst_49828 = (state_49851[7]);var inst_49835 = cljs.core._EQ_.call(null,inst_49831,inst_49828);var state_49851__$1 = state_49851;if(inst_49835)
{var statearr_49864_49883 = state_49851__$1;(statearr_49864_49883[1] = 8);
} else
{var statearr_49865_49884 = state_49851__$1;(statearr_49865_49884[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 10))
{var inst_49843 = (state_49851[2]);var state_49851__$1 = state_49851;var statearr_49866_49885 = state_49851__$1;(statearr_49866_49885[2] = inst_49843);
(statearr_49866_49885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49852 === 8))
{var inst_49828 = (state_49851[7]);var tmp49863 = inst_49828;var inst_49828__$1 = tmp49863;var state_49851__$1 = (function (){var statearr_49867 = state_49851;(statearr_49867[7] = inst_49828__$1);
return statearr_49867;
})();var statearr_49868_49886 = state_49851__$1;(statearr_49868_49886[2] = null);
(statearr_49868_49886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___49876,out))
;return ((function (switch__5676__auto__,c__5691__auto___49876,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_49872 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49872[0] = state_machine__5677__auto__);
(statearr_49872[1] = 1);
return statearr_49872;
});
var state_machine__5677__auto____1 = (function (state_49851){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49851);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e49873){if((e49873 instanceof Object))
{var ex__5680__auto__ = e49873;var statearr_49874_49887 = state_49851;(statearr_49874_49887[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49888 = state_49851;
state_49851 = G__49888;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49851){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___49876,out))
})();var state__5693__auto__ = (function (){var statearr_49875 = f__5692__auto__.call(null);(statearr_49875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___49876);
return statearr_49875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___49876,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___50023 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___50023,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___50023,out){
return (function (state_49993){var state_val_49994 = (state_49993[1]);if((state_val_49994 === 7))
{var inst_49989 = (state_49993[2]);var state_49993__$1 = state_49993;var statearr_49995_50024 = state_49993__$1;(statearr_49995_50024[2] = inst_49989);
(statearr_49995_50024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 1))
{var inst_49956 = (new Array(n));var inst_49957 = inst_49956;var inst_49958 = 0;var state_49993__$1 = (function (){var statearr_49996 = state_49993;(statearr_49996[7] = inst_49958);
(statearr_49996[8] = inst_49957);
return statearr_49996;
})();var statearr_49997_50025 = state_49993__$1;(statearr_49997_50025[2] = null);
(statearr_49997_50025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 4))
{var inst_49961 = (state_49993[9]);var inst_49961__$1 = (state_49993[2]);var inst_49962 = (inst_49961__$1 == null);var inst_49963 = cljs.core.not.call(null,inst_49962);var state_49993__$1 = (function (){var statearr_49998 = state_49993;(statearr_49998[9] = inst_49961__$1);
return statearr_49998;
})();if(inst_49963)
{var statearr_49999_50026 = state_49993__$1;(statearr_49999_50026[1] = 5);
} else
{var statearr_50000_50027 = state_49993__$1;(statearr_50000_50027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 15))
{var inst_49983 = (state_49993[2]);var state_49993__$1 = state_49993;var statearr_50001_50028 = state_49993__$1;(statearr_50001_50028[2] = inst_49983);
(statearr_50001_50028[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 13))
{var state_49993__$1 = state_49993;var statearr_50002_50029 = state_49993__$1;(statearr_50002_50029[2] = null);
(statearr_50002_50029[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 6))
{var inst_49958 = (state_49993[7]);var inst_49979 = (inst_49958 > 0);var state_49993__$1 = state_49993;if(cljs.core.truth_(inst_49979))
{var statearr_50003_50030 = state_49993__$1;(statearr_50003_50030[1] = 12);
} else
{var statearr_50004_50031 = state_49993__$1;(statearr_50004_50031[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 3))
{var inst_49991 = (state_49993[2]);var state_49993__$1 = state_49993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49993__$1,inst_49991);
} else
{if((state_val_49994 === 12))
{var inst_49957 = (state_49993[8]);var inst_49981 = cljs.core.vec.call(null,inst_49957);var state_49993__$1 = state_49993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49993__$1,15,out,inst_49981);
} else
{if((state_val_49994 === 2))
{var state_49993__$1 = state_49993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49993__$1,4,ch);
} else
{if((state_val_49994 === 11))
{var inst_49973 = (state_49993[2]);var inst_49974 = (new Array(n));var inst_49957 = inst_49974;var inst_49958 = 0;var state_49993__$1 = (function (){var statearr_50005 = state_49993;(statearr_50005[10] = inst_49973);
(statearr_50005[7] = inst_49958);
(statearr_50005[8] = inst_49957);
return statearr_50005;
})();var statearr_50006_50032 = state_49993__$1;(statearr_50006_50032[2] = null);
(statearr_50006_50032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 9))
{var inst_49957 = (state_49993[8]);var inst_49971 = cljs.core.vec.call(null,inst_49957);var state_49993__$1 = state_49993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49993__$1,11,out,inst_49971);
} else
{if((state_val_49994 === 5))
{var inst_49961 = (state_49993[9]);var inst_49966 = (state_49993[11]);var inst_49958 = (state_49993[7]);var inst_49957 = (state_49993[8]);var inst_49965 = (inst_49957[inst_49958] = inst_49961);var inst_49966__$1 = (inst_49958 + 1);var inst_49967 = (inst_49966__$1 < n);var state_49993__$1 = (function (){var statearr_50007 = state_49993;(statearr_50007[12] = inst_49965);
(statearr_50007[11] = inst_49966__$1);
return statearr_50007;
})();if(cljs.core.truth_(inst_49967))
{var statearr_50008_50033 = state_49993__$1;(statearr_50008_50033[1] = 8);
} else
{var statearr_50009_50034 = state_49993__$1;(statearr_50009_50034[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 14))
{var inst_49986 = (state_49993[2]);var inst_49987 = cljs.core.async.close_BANG_.call(null,out);var state_49993__$1 = (function (){var statearr_50011 = state_49993;(statearr_50011[13] = inst_49986);
return statearr_50011;
})();var statearr_50012_50035 = state_49993__$1;(statearr_50012_50035[2] = inst_49987);
(statearr_50012_50035[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 10))
{var inst_49977 = (state_49993[2]);var state_49993__$1 = state_49993;var statearr_50013_50036 = state_49993__$1;(statearr_50013_50036[2] = inst_49977);
(statearr_50013_50036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49994 === 8))
{var inst_49966 = (state_49993[11]);var inst_49957 = (state_49993[8]);var tmp50010 = inst_49957;var inst_49957__$1 = tmp50010;var inst_49958 = inst_49966;var state_49993__$1 = (function (){var statearr_50014 = state_49993;(statearr_50014[7] = inst_49958);
(statearr_50014[8] = inst_49957__$1);
return statearr_50014;
})();var statearr_50015_50037 = state_49993__$1;(statearr_50015_50037[2] = null);
(statearr_50015_50037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___50023,out))
;return ((function (switch__5676__auto__,c__5691__auto___50023,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_50019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50019[0] = state_machine__5677__auto__);
(statearr_50019[1] = 1);
return statearr_50019;
});
var state_machine__5677__auto____1 = (function (state_49993){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_49993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e50020){if((e50020 instanceof Object))
{var ex__5680__auto__ = e50020;var statearr_50021_50038 = state_49993;(statearr_50021_50038[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50039 = state_49993;
state_49993 = G__50039;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_49993){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_49993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___50023,out))
})();var state__5693__auto__ = (function (){var statearr_50022 = f__5692__auto__.call(null);(statearr_50022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___50023);
return statearr_50022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___50023,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___50182 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___50182,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___50182,out){
return (function (state_50152){var state_val_50153 = (state_50152[1]);if((state_val_50153 === 7))
{var inst_50148 = (state_50152[2]);var state_50152__$1 = state_50152;var statearr_50154_50183 = state_50152__$1;(statearr_50154_50183[2] = inst_50148);
(statearr_50154_50183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 1))
{var inst_50111 = [];var inst_50112 = inst_50111;var inst_50113 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_50152__$1 = (function (){var statearr_50155 = state_50152;(statearr_50155[7] = inst_50113);
(statearr_50155[8] = inst_50112);
return statearr_50155;
})();var statearr_50156_50184 = state_50152__$1;(statearr_50156_50184[2] = null);
(statearr_50156_50184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 4))
{var inst_50116 = (state_50152[9]);var inst_50116__$1 = (state_50152[2]);var inst_50117 = (inst_50116__$1 == null);var inst_50118 = cljs.core.not.call(null,inst_50117);var state_50152__$1 = (function (){var statearr_50157 = state_50152;(statearr_50157[9] = inst_50116__$1);
return statearr_50157;
})();if(inst_50118)
{var statearr_50158_50185 = state_50152__$1;(statearr_50158_50185[1] = 5);
} else
{var statearr_50159_50186 = state_50152__$1;(statearr_50159_50186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 15))
{var inst_50142 = (state_50152[2]);var state_50152__$1 = state_50152;var statearr_50160_50187 = state_50152__$1;(statearr_50160_50187[2] = inst_50142);
(statearr_50160_50187[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 13))
{var state_50152__$1 = state_50152;var statearr_50161_50188 = state_50152__$1;(statearr_50161_50188[2] = null);
(statearr_50161_50188[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 6))
{var inst_50112 = (state_50152[8]);var inst_50137 = inst_50112.length;var inst_50138 = (inst_50137 > 0);var state_50152__$1 = state_50152;if(cljs.core.truth_(inst_50138))
{var statearr_50162_50189 = state_50152__$1;(statearr_50162_50189[1] = 12);
} else
{var statearr_50163_50190 = state_50152__$1;(statearr_50163_50190[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 3))
{var inst_50150 = (state_50152[2]);var state_50152__$1 = state_50152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50152__$1,inst_50150);
} else
{if((state_val_50153 === 12))
{var inst_50112 = (state_50152[8]);var inst_50140 = cljs.core.vec.call(null,inst_50112);var state_50152__$1 = state_50152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50152__$1,15,out,inst_50140);
} else
{if((state_val_50153 === 2))
{var state_50152__$1 = state_50152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50152__$1,4,ch);
} else
{if((state_val_50153 === 11))
{var inst_50120 = (state_50152[10]);var inst_50116 = (state_50152[9]);var inst_50130 = (state_50152[2]);var inst_50131 = [];var inst_50132 = inst_50131.push(inst_50116);var inst_50112 = inst_50131;var inst_50113 = inst_50120;var state_50152__$1 = (function (){var statearr_50164 = state_50152;(statearr_50164[7] = inst_50113);
(statearr_50164[11] = inst_50130);
(statearr_50164[12] = inst_50132);
(statearr_50164[8] = inst_50112);
return statearr_50164;
})();var statearr_50165_50191 = state_50152__$1;(statearr_50165_50191[2] = null);
(statearr_50165_50191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 9))
{var inst_50112 = (state_50152[8]);var inst_50128 = cljs.core.vec.call(null,inst_50112);var state_50152__$1 = state_50152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50152__$1,11,out,inst_50128);
} else
{if((state_val_50153 === 5))
{var inst_50120 = (state_50152[10]);var inst_50116 = (state_50152[9]);var inst_50113 = (state_50152[7]);var inst_50120__$1 = f.call(null,inst_50116);var inst_50121 = cljs.core._EQ_.call(null,inst_50120__$1,inst_50113);var inst_50122 = cljs.core.keyword_identical_QMARK_.call(null,inst_50113,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_50123 = (inst_50121) || (inst_50122);var state_50152__$1 = (function (){var statearr_50166 = state_50152;(statearr_50166[10] = inst_50120__$1);
return statearr_50166;
})();if(cljs.core.truth_(inst_50123))
{var statearr_50167_50192 = state_50152__$1;(statearr_50167_50192[1] = 8);
} else
{var statearr_50168_50193 = state_50152__$1;(statearr_50168_50193[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 14))
{var inst_50145 = (state_50152[2]);var inst_50146 = cljs.core.async.close_BANG_.call(null,out);var state_50152__$1 = (function (){var statearr_50170 = state_50152;(statearr_50170[13] = inst_50145);
return statearr_50170;
})();var statearr_50171_50194 = state_50152__$1;(statearr_50171_50194[2] = inst_50146);
(statearr_50171_50194[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 10))
{var inst_50135 = (state_50152[2]);var state_50152__$1 = state_50152;var statearr_50172_50195 = state_50152__$1;(statearr_50172_50195[2] = inst_50135);
(statearr_50172_50195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50153 === 8))
{var inst_50120 = (state_50152[10]);var inst_50116 = (state_50152[9]);var inst_50112 = (state_50152[8]);var inst_50125 = inst_50112.push(inst_50116);var tmp50169 = inst_50112;var inst_50112__$1 = tmp50169;var inst_50113 = inst_50120;var state_50152__$1 = (function (){var statearr_50173 = state_50152;(statearr_50173[14] = inst_50125);
(statearr_50173[7] = inst_50113);
(statearr_50173[8] = inst_50112__$1);
return statearr_50173;
})();var statearr_50174_50196 = state_50152__$1;(statearr_50174_50196[2] = null);
(statearr_50174_50196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5691__auto___50182,out))
;return ((function (switch__5676__auto__,c__5691__auto___50182,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_50178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50178[0] = state_machine__5677__auto__);
(statearr_50178[1] = 1);
return statearr_50178;
});
var state_machine__5677__auto____1 = (function (state_50152){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_50152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e50179){if((e50179 instanceof Object))
{var ex__5680__auto__ = e50179;var statearr_50180_50197 = state_50152;(statearr_50180_50197[5] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50198 = state_50152;
state_50152 = G__50198;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_50152){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_50152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___50182,out))
})();var state__5693__auto__ = (function (){var statearr_50181 = f__5692__auto__.call(null);(statearr_50181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___50182);
return statearr_50181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___50182,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map