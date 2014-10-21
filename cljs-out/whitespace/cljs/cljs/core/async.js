// Compiled by ClojureScript 0.0-2356
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18824 = (function (f,fn_handler,meta18825){
this.f = f;
this.fn_handler = fn_handler;
this.meta18825 = meta18825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18824.cljs$lang$type = true;
cljs.core.async.t18824.cljs$lang$ctorStr = "cljs.core.async/t18824";
cljs.core.async.t18824.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t18824");
});
cljs.core.async.t18824.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18826){var self__ = this;
var _18826__$1 = this;return self__.meta18825;
});
cljs.core.async.t18824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18826,meta18825__$1){var self__ = this;
var _18826__$1 = this;return (new cljs.core.async.t18824(self__.f,self__.fn_handler,meta18825__$1));
});
cljs.core.async.__GT_t18824 = (function __GT_t18824(f__$1,fn_handler__$1,meta18825){return (new cljs.core.async.t18824(f__$1,fn_handler__$1,meta18825));
});
}
return (new cljs.core.async.t18824(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18828 = buff;if(G__18828)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__18828.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18828.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18828);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
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
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
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
{var val_18829 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18829);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18829,ret){
return (function (){return fn1.call(null,val_18829);
});})(val_18829,ret))
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
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___18830 = n;var x_18831 = (0);while(true){
if((x_18831 < n__4506__auto___18830))
{(a[x_18831] = (0));
{
var G__18832 = (x_18831 + (1));
x_18831 = G__18832;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18833 = (i + (1));
i = G__18833;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18837 = (function (flag,alt_flag,meta18838){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18838 = meta18838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18837.cljs$lang$type = true;
cljs.core.async.t18837.cljs$lang$ctorStr = "cljs.core.async/t18837";
cljs.core.async.t18837.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t18837");
});})(flag))
;
cljs.core.async.t18837.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18839){var self__ = this;
var _18839__$1 = this;return self__.meta18838;
});})(flag))
;
cljs.core.async.t18837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18839,meta18838__$1){var self__ = this;
var _18839__$1 = this;return (new cljs.core.async.t18837(self__.flag,self__.alt_flag,meta18838__$1));
});})(flag))
;
cljs.core.async.__GT_t18837 = ((function (flag){
return (function __GT_t18837(flag__$1,alt_flag__$1,meta18838){return (new cljs.core.async.t18837(flag__$1,alt_flag__$1,meta18838));
});})(flag))
;
}
return (new cljs.core.async.t18837(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18843 = (function (cb,flag,alt_handler,meta18844){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18844 = meta18844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18843.cljs$lang$type = true;
cljs.core.async.t18843.cljs$lang$ctorStr = "cljs.core.async/t18843";
cljs.core.async.t18843.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t18843");
});
cljs.core.async.t18843.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18845){var self__ = this;
var _18845__$1 = this;return self__.meta18844;
});
cljs.core.async.t18843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18845,meta18844__$1){var self__ = this;
var _18845__$1 = this;return (new cljs.core.async.t18843(self__.cb,self__.flag,self__.alt_handler,meta18844__$1));
});
cljs.core.async.__GT_t18843 = (function __GT_t18843(cb__$1,flag__$1,alt_handler__$1,meta18844){return (new cljs.core.async.t18843(cb__$1,flag__$1,alt_handler__$1,meta18844));
});
}
return (new cljs.core.async.t18843(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18846_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18846_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18847_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18847_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3637__auto__ = wport;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18848 = (i + (1));
i = G__18848;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3637__auto__ = ret;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3625__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3625__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__18849){var map__18851 = p__18849;var map__18851__$1 = ((cljs.core.seq_QMARK_.call(null,map__18851))?cljs.core.apply.call(null,cljs.core.hash_map,map__18851):map__18851);var opts = map__18851__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18849 = null;if (arguments.length > 1) {
  p__18849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18849);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18852){
var ports = cljs.core.first(arglist__18852);
var p__18849 = cljs.core.rest(arglist__18852);
return alts_BANG___delegate(ports,p__18849);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___18947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___18947){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___18947){
return (function (state_18923){var state_val_18924 = (state_18923[(1)]);if((state_val_18924 === (7)))
{var inst_18919 = (state_18923[(2)]);var state_18923__$1 = state_18923;var statearr_18925_18948 = state_18923__$1;(statearr_18925_18948[(2)] = inst_18919);
(statearr_18925_18948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (1)))
{var state_18923__$1 = state_18923;var statearr_18926_18949 = state_18923__$1;(statearr_18926_18949[(2)] = null);
(statearr_18926_18949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (4)))
{var inst_18902 = (state_18923[(7)]);var inst_18902__$1 = (state_18923[(2)]);var inst_18903 = (inst_18902__$1 == null);var state_18923__$1 = (function (){var statearr_18927 = state_18923;(statearr_18927[(7)] = inst_18902__$1);
return statearr_18927;
})();if(cljs.core.truth_(inst_18903))
{var statearr_18928_18950 = state_18923__$1;(statearr_18928_18950[(1)] = (5));
} else
{var statearr_18929_18951 = state_18923__$1;(statearr_18929_18951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (13)))
{var state_18923__$1 = state_18923;var statearr_18930_18952 = state_18923__$1;(statearr_18930_18952[(2)] = null);
(statearr_18930_18952[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (6)))
{var inst_18902 = (state_18923[(7)]);var state_18923__$1 = state_18923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18923__$1,(11),to,inst_18902);
} else
{if((state_val_18924 === (3)))
{var inst_18921 = (state_18923[(2)]);var state_18923__$1 = state_18923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18923__$1,inst_18921);
} else
{if((state_val_18924 === (12)))
{var state_18923__$1 = state_18923;var statearr_18931_18953 = state_18923__$1;(statearr_18931_18953[(2)] = null);
(statearr_18931_18953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (2)))
{var state_18923__$1 = state_18923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18923__$1,(4),from);
} else
{if((state_val_18924 === (11)))
{var inst_18912 = (state_18923[(2)]);var state_18923__$1 = state_18923;if(cljs.core.truth_(inst_18912))
{var statearr_18932_18954 = state_18923__$1;(statearr_18932_18954[(1)] = (12));
} else
{var statearr_18933_18955 = state_18923__$1;(statearr_18933_18955[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (9)))
{var state_18923__$1 = state_18923;var statearr_18934_18956 = state_18923__$1;(statearr_18934_18956[(2)] = null);
(statearr_18934_18956[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (5)))
{var state_18923__$1 = state_18923;if(cljs.core.truth_(close_QMARK_))
{var statearr_18935_18957 = state_18923__$1;(statearr_18935_18957[(1)] = (8));
} else
{var statearr_18936_18958 = state_18923__$1;(statearr_18936_18958[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (14)))
{var inst_18917 = (state_18923[(2)]);var state_18923__$1 = state_18923;var statearr_18937_18959 = state_18923__$1;(statearr_18937_18959[(2)] = inst_18917);
(statearr_18937_18959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (10)))
{var inst_18909 = (state_18923[(2)]);var state_18923__$1 = state_18923;var statearr_18938_18960 = state_18923__$1;(statearr_18938_18960[(2)] = inst_18909);
(statearr_18938_18960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18924 === (8)))
{var inst_18906 = cljs.core.async.close_BANG_.call(null,to);var state_18923__$1 = state_18923;var statearr_18939_18961 = state_18923__$1;(statearr_18939_18961[(2)] = inst_18906);
(statearr_18939_18961[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___18947))
;return ((function (switch__5804__auto__,c__5819__auto___18947){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_18943 = [null,null,null,null,null,null,null,null];(statearr_18943[(0)] = state_machine__5805__auto__);
(statearr_18943[(1)] = (1));
return statearr_18943;
});
var state_machine__5805__auto____1 = (function (state_18923){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_18923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e18944){if((e18944 instanceof Object))
{var ex__5808__auto__ = e18944;var statearr_18945_18962 = state_18923;(statearr_18945_18962[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18963 = state_18923;
state_18923 = G__18963;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_18923){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_18923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___18947))
})();var state__5821__auto__ = (function (){var statearr_18946 = f__5820__auto__.call(null);(statearr_18946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___18947);
return statearr_18946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___18947))
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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__19147){var vec__19148 = p__19147;var v = cljs.core.nth.call(null,vec__19148,(0),null);var p = cljs.core.nth.call(null,vec__19148,(1),null);var job = vec__19148;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___19330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results){
return (function (state_19153){var state_val_19154 = (state_19153[(1)]);if((state_val_19154 === (2)))
{var inst_19150 = (state_19153[(2)]);var inst_19151 = cljs.core.async.close_BANG_.call(null,res);var state_19153__$1 = (function (){var statearr_19155 = state_19153;(statearr_19155[(7)] = inst_19150);
return statearr_19155;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19153__$1,inst_19151);
} else
{if((state_val_19154 === (1)))
{var state_19153__$1 = state_19153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19153__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19159 = [null,null,null,null,null,null,null,null];(statearr_19159[(0)] = state_machine__5805__auto__);
(statearr_19159[(1)] = (1));
return statearr_19159;
});
var state_machine__5805__auto____1 = (function (state_19153){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19153);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19160){if((e19160 instanceof Object))
{var ex__5808__auto__ = e19160;var statearr_19161_19331 = state_19153;(statearr_19161_19331[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19332 = state_19153;
state_19153 = G__19332;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19153){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_19162 = f__5820__auto__.call(null);(statearr_19162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19330);
return statearr_19162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19330,res,vec__19148,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19163){var vec__19164 = p__19163;var v = cljs.core.nth.call(null,vec__19164,(0),null);var p = cljs.core.nth.call(null,vec__19164,(1),null);var job = vec__19164;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___19333 = n;var __19334 = (0);while(true){
if((__19334 < n__4506__auto___19333))
{var G__19165_19335 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19165_19335) {
case "async":
var c__5819__auto___19337 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19334,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__19334,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function (state_19178){var state_val_19179 = (state_19178[(1)]);if((state_val_19179 === (7)))
{var inst_19174 = (state_19178[(2)]);var state_19178__$1 = state_19178;var statearr_19180_19338 = state_19178__$1;(statearr_19180_19338[(2)] = inst_19174);
(statearr_19180_19338[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19179 === (6)))
{var state_19178__$1 = state_19178;var statearr_19181_19339 = state_19178__$1;(statearr_19181_19339[(2)] = null);
(statearr_19181_19339[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19179 === (5)))
{var state_19178__$1 = state_19178;var statearr_19182_19340 = state_19178__$1;(statearr_19182_19340[(2)] = null);
(statearr_19182_19340[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19179 === (4)))
{var inst_19168 = (state_19178[(2)]);var inst_19169 = async.call(null,inst_19168);var state_19178__$1 = state_19178;if(cljs.core.truth_(inst_19169))
{var statearr_19183_19341 = state_19178__$1;(statearr_19183_19341[(1)] = (5));
} else
{var statearr_19184_19342 = state_19178__$1;(statearr_19184_19342[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19179 === (3)))
{var inst_19176 = (state_19178[(2)]);var state_19178__$1 = state_19178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19178__$1,inst_19176);
} else
{if((state_val_19179 === (2)))
{var state_19178__$1 = state_19178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19178__$1,(4),jobs);
} else
{if((state_val_19179 === (1)))
{var state_19178__$1 = state_19178;var statearr_19185_19343 = state_19178__$1;(statearr_19185_19343[(2)] = null);
(statearr_19185_19343[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19334,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
;return ((function (__19334,switch__5804__auto__,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19189 = [null,null,null,null,null,null,null];(statearr_19189[(0)] = state_machine__5805__auto__);
(statearr_19189[(1)] = (1));
return statearr_19189;
});
var state_machine__5805__auto____1 = (function (state_19178){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19190){if((e19190 instanceof Object))
{var ex__5808__auto__ = e19190;var statearr_19191_19344 = state_19178;(statearr_19191_19344[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19190;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19345 = state_19178;
state_19178 = G__19345;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__19334,switch__5804__auto__,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19192 = f__5820__auto__.call(null);(statearr_19192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19337);
return statearr_19192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__19334,c__5819__auto___19337,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___19346 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19334,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__19334,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function (state_19205){var state_val_19206 = (state_19205[(1)]);if((state_val_19206 === (7)))
{var inst_19201 = (state_19205[(2)]);var state_19205__$1 = state_19205;var statearr_19207_19347 = state_19205__$1;(statearr_19207_19347[(2)] = inst_19201);
(statearr_19207_19347[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19206 === (6)))
{var state_19205__$1 = state_19205;var statearr_19208_19348 = state_19205__$1;(statearr_19208_19348[(2)] = null);
(statearr_19208_19348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19206 === (5)))
{var state_19205__$1 = state_19205;var statearr_19209_19349 = state_19205__$1;(statearr_19209_19349[(2)] = null);
(statearr_19209_19349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19206 === (4)))
{var inst_19195 = (state_19205[(2)]);var inst_19196 = process.call(null,inst_19195);var state_19205__$1 = state_19205;if(cljs.core.truth_(inst_19196))
{var statearr_19210_19350 = state_19205__$1;(statearr_19210_19350[(1)] = (5));
} else
{var statearr_19211_19351 = state_19205__$1;(statearr_19211_19351[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19206 === (3)))
{var inst_19203 = (state_19205[(2)]);var state_19205__$1 = state_19205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19205__$1,inst_19203);
} else
{if((state_val_19206 === (2)))
{var state_19205__$1 = state_19205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19205__$1,(4),jobs);
} else
{if((state_val_19206 === (1)))
{var state_19205__$1 = state_19205;var statearr_19212_19352 = state_19205__$1;(statearr_19212_19352[(2)] = null);
(statearr_19212_19352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19334,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
;return ((function (__19334,switch__5804__auto__,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19216 = [null,null,null,null,null,null,null];(statearr_19216[(0)] = state_machine__5805__auto__);
(statearr_19216[(1)] = (1));
return statearr_19216;
});
var state_machine__5805__auto____1 = (function (state_19205){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19217){if((e19217 instanceof Object))
{var ex__5808__auto__ = e19217;var statearr_19218_19353 = state_19205;(statearr_19218_19353[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19217;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19354 = state_19205;
state_19205 = G__19354;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19205){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__19334,switch__5804__auto__,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19219 = f__5820__auto__.call(null);(statearr_19219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19346);
return statearr_19219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__19334,c__5819__auto___19346,G__19165_19335,n__4506__auto___19333,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19355 = (__19334 + (1));
__19334 = G__19355;
continue;
}
} else
{}
break;
}
var c__5819__auto___19356 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19356,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19356,jobs,results,process,async){
return (function (state_19241){var state_val_19242 = (state_19241[(1)]);if((state_val_19242 === (9)))
{var inst_19234 = (state_19241[(2)]);var state_19241__$1 = (function (){var statearr_19243 = state_19241;(statearr_19243[(7)] = inst_19234);
return statearr_19243;
})();var statearr_19244_19357 = state_19241__$1;(statearr_19244_19357[(2)] = null);
(statearr_19244_19357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19242 === (8)))
{var inst_19227 = (state_19241[(8)]);var inst_19232 = (state_19241[(2)]);var state_19241__$1 = (function (){var statearr_19245 = state_19241;(statearr_19245[(9)] = inst_19232);
return statearr_19245;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19241__$1,(9),results,inst_19227);
} else
{if((state_val_19242 === (7)))
{var inst_19237 = (state_19241[(2)]);var state_19241__$1 = state_19241;var statearr_19246_19358 = state_19241__$1;(statearr_19246_19358[(2)] = inst_19237);
(statearr_19246_19358[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19242 === (6)))
{var inst_19227 = (state_19241[(8)]);var inst_19222 = (state_19241[(10)]);var inst_19227__$1 = cljs.core.async.chan.call(null,(1));var inst_19228 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19229 = [inst_19222,inst_19227__$1];var inst_19230 = (new cljs.core.PersistentVector(null,2,(5),inst_19228,inst_19229,null));var state_19241__$1 = (function (){var statearr_19247 = state_19241;(statearr_19247[(8)] = inst_19227__$1);
return statearr_19247;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19241__$1,(8),jobs,inst_19230);
} else
{if((state_val_19242 === (5)))
{var inst_19225 = cljs.core.async.close_BANG_.call(null,jobs);var state_19241__$1 = state_19241;var statearr_19248_19359 = state_19241__$1;(statearr_19248_19359[(2)] = inst_19225);
(statearr_19248_19359[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19242 === (4)))
{var inst_19222 = (state_19241[(10)]);var inst_19222__$1 = (state_19241[(2)]);var inst_19223 = (inst_19222__$1 == null);var state_19241__$1 = (function (){var statearr_19249 = state_19241;(statearr_19249[(10)] = inst_19222__$1);
return statearr_19249;
})();if(cljs.core.truth_(inst_19223))
{var statearr_19250_19360 = state_19241__$1;(statearr_19250_19360[(1)] = (5));
} else
{var statearr_19251_19361 = state_19241__$1;(statearr_19251_19361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19242 === (3)))
{var inst_19239 = (state_19241[(2)]);var state_19241__$1 = state_19241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19241__$1,inst_19239);
} else
{if((state_val_19242 === (2)))
{var state_19241__$1 = state_19241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19241__$1,(4),from);
} else
{if((state_val_19242 === (1)))
{var state_19241__$1 = state_19241;var statearr_19252_19362 = state_19241__$1;(statearr_19252_19362[(2)] = null);
(statearr_19252_19362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___19356,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___19356,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19256 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19256[(0)] = state_machine__5805__auto__);
(statearr_19256[(1)] = (1));
return statearr_19256;
});
var state_machine__5805__auto____1 = (function (state_19241){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19241);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19257){if((e19257 instanceof Object))
{var ex__5808__auto__ = e19257;var statearr_19258_19363 = state_19241;(statearr_19258_19363[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19257;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19364 = state_19241;
state_19241 = G__19364;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19241){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19356,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19259 = f__5820__auto__.call(null);(statearr_19259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19356);
return statearr_19259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19356,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_19297){var state_val_19298 = (state_19297[(1)]);if((state_val_19298 === (7)))
{var inst_19293 = (state_19297[(2)]);var state_19297__$1 = state_19297;var statearr_19299_19365 = state_19297__$1;(statearr_19299_19365[(2)] = inst_19293);
(statearr_19299_19365[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (20)))
{var state_19297__$1 = state_19297;var statearr_19300_19366 = state_19297__$1;(statearr_19300_19366[(2)] = null);
(statearr_19300_19366[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (1)))
{var state_19297__$1 = state_19297;var statearr_19301_19367 = state_19297__$1;(statearr_19301_19367[(2)] = null);
(statearr_19301_19367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (4)))
{var inst_19262 = (state_19297[(7)]);var inst_19262__$1 = (state_19297[(2)]);var inst_19263 = (inst_19262__$1 == null);var state_19297__$1 = (function (){var statearr_19302 = state_19297;(statearr_19302[(7)] = inst_19262__$1);
return statearr_19302;
})();if(cljs.core.truth_(inst_19263))
{var statearr_19303_19368 = state_19297__$1;(statearr_19303_19368[(1)] = (5));
} else
{var statearr_19304_19369 = state_19297__$1;(statearr_19304_19369[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (15)))
{var inst_19275 = (state_19297[(8)]);var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19297__$1,(18),to,inst_19275);
} else
{if((state_val_19298 === (21)))
{var inst_19288 = (state_19297[(2)]);var state_19297__$1 = state_19297;var statearr_19305_19370 = state_19297__$1;(statearr_19305_19370[(2)] = inst_19288);
(statearr_19305_19370[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (13)))
{var inst_19290 = (state_19297[(2)]);var state_19297__$1 = (function (){var statearr_19306 = state_19297;(statearr_19306[(9)] = inst_19290);
return statearr_19306;
})();var statearr_19307_19371 = state_19297__$1;(statearr_19307_19371[(2)] = null);
(statearr_19307_19371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (6)))
{var inst_19262 = (state_19297[(7)]);var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19297__$1,(11),inst_19262);
} else
{if((state_val_19298 === (17)))
{var inst_19283 = (state_19297[(2)]);var state_19297__$1 = state_19297;if(cljs.core.truth_(inst_19283))
{var statearr_19308_19372 = state_19297__$1;(statearr_19308_19372[(1)] = (19));
} else
{var statearr_19309_19373 = state_19297__$1;(statearr_19309_19373[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (3)))
{var inst_19295 = (state_19297[(2)]);var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19297__$1,inst_19295);
} else
{if((state_val_19298 === (12)))
{var inst_19272 = (state_19297[(10)]);var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19297__$1,(14),inst_19272);
} else
{if((state_val_19298 === (2)))
{var state_19297__$1 = state_19297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19297__$1,(4),results);
} else
{if((state_val_19298 === (19)))
{var state_19297__$1 = state_19297;var statearr_19310_19374 = state_19297__$1;(statearr_19310_19374[(2)] = null);
(statearr_19310_19374[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (11)))
{var inst_19272 = (state_19297[(2)]);var state_19297__$1 = (function (){var statearr_19311 = state_19297;(statearr_19311[(10)] = inst_19272);
return statearr_19311;
})();var statearr_19312_19375 = state_19297__$1;(statearr_19312_19375[(2)] = null);
(statearr_19312_19375[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (9)))
{var state_19297__$1 = state_19297;var statearr_19313_19376 = state_19297__$1;(statearr_19313_19376[(2)] = null);
(statearr_19313_19376[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (5)))
{var state_19297__$1 = state_19297;if(cljs.core.truth_(close_QMARK_))
{var statearr_19314_19377 = state_19297__$1;(statearr_19314_19377[(1)] = (8));
} else
{var statearr_19315_19378 = state_19297__$1;(statearr_19315_19378[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (14)))
{var inst_19277 = (state_19297[(11)]);var inst_19275 = (state_19297[(8)]);var inst_19275__$1 = (state_19297[(2)]);var inst_19276 = (inst_19275__$1 == null);var inst_19277__$1 = cljs.core.not.call(null,inst_19276);var state_19297__$1 = (function (){var statearr_19316 = state_19297;(statearr_19316[(11)] = inst_19277__$1);
(statearr_19316[(8)] = inst_19275__$1);
return statearr_19316;
})();if(inst_19277__$1)
{var statearr_19317_19379 = state_19297__$1;(statearr_19317_19379[(1)] = (15));
} else
{var statearr_19318_19380 = state_19297__$1;(statearr_19318_19380[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (16)))
{var inst_19277 = (state_19297[(11)]);var state_19297__$1 = state_19297;var statearr_19319_19381 = state_19297__$1;(statearr_19319_19381[(2)] = inst_19277);
(statearr_19319_19381[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (10)))
{var inst_19269 = (state_19297[(2)]);var state_19297__$1 = state_19297;var statearr_19320_19382 = state_19297__$1;(statearr_19320_19382[(2)] = inst_19269);
(statearr_19320_19382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (18)))
{var inst_19280 = (state_19297[(2)]);var state_19297__$1 = state_19297;var statearr_19321_19383 = state_19297__$1;(statearr_19321_19383[(2)] = inst_19280);
(statearr_19321_19383[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19298 === (8)))
{var inst_19266 = cljs.core.async.close_BANG_.call(null,to);var state_19297__$1 = state_19297;var statearr_19322_19384 = state_19297__$1;(statearr_19322_19384[(2)] = inst_19266);
(statearr_19322_19384[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto__,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto__,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19326 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19326[(0)] = state_machine__5805__auto__);
(statearr_19326[(1)] = (1));
return statearr_19326;
});
var state_machine__5805__auto____1 = (function (state_19297){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19297);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19327){if((e19327 instanceof Object))
{var ex__5808__auto__ = e19327;var statearr_19328_19385 = state_19297;(statearr_19328_19385[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19297);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19327;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19386 = state_19297;
state_19297 = G__19386;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19297){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19329 = f__5820__auto__.call(null);(statearr_19329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_19329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,jobs,results,process,async))
);
return c__5819__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___19487 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19487,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19487,tc,fc){
return (function (state_19462){var state_val_19463 = (state_19462[(1)]);if((state_val_19463 === (7)))
{var inst_19458 = (state_19462[(2)]);var state_19462__$1 = state_19462;var statearr_19464_19488 = state_19462__$1;(statearr_19464_19488[(2)] = inst_19458);
(statearr_19464_19488[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (1)))
{var state_19462__$1 = state_19462;var statearr_19465_19489 = state_19462__$1;(statearr_19465_19489[(2)] = null);
(statearr_19465_19489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (4)))
{var inst_19439 = (state_19462[(7)]);var inst_19439__$1 = (state_19462[(2)]);var inst_19440 = (inst_19439__$1 == null);var state_19462__$1 = (function (){var statearr_19466 = state_19462;(statearr_19466[(7)] = inst_19439__$1);
return statearr_19466;
})();if(cljs.core.truth_(inst_19440))
{var statearr_19467_19490 = state_19462__$1;(statearr_19467_19490[(1)] = (5));
} else
{var statearr_19468_19491 = state_19462__$1;(statearr_19468_19491[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (13)))
{var state_19462__$1 = state_19462;var statearr_19469_19492 = state_19462__$1;(statearr_19469_19492[(2)] = null);
(statearr_19469_19492[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (6)))
{var inst_19439 = (state_19462[(7)]);var inst_19445 = p.call(null,inst_19439);var state_19462__$1 = state_19462;if(cljs.core.truth_(inst_19445))
{var statearr_19470_19493 = state_19462__$1;(statearr_19470_19493[(1)] = (9));
} else
{var statearr_19471_19494 = state_19462__$1;(statearr_19471_19494[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (3)))
{var inst_19460 = (state_19462[(2)]);var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19462__$1,inst_19460);
} else
{if((state_val_19463 === (12)))
{var state_19462__$1 = state_19462;var statearr_19472_19495 = state_19462__$1;(statearr_19472_19495[(2)] = null);
(statearr_19472_19495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (2)))
{var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19462__$1,(4),ch);
} else
{if((state_val_19463 === (11)))
{var inst_19439 = (state_19462[(7)]);var inst_19449 = (state_19462[(2)]);var state_19462__$1 = state_19462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19462__$1,(8),inst_19449,inst_19439);
} else
{if((state_val_19463 === (9)))
{var state_19462__$1 = state_19462;var statearr_19473_19496 = state_19462__$1;(statearr_19473_19496[(2)] = tc);
(statearr_19473_19496[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (5)))
{var inst_19442 = cljs.core.async.close_BANG_.call(null,tc);var inst_19443 = cljs.core.async.close_BANG_.call(null,fc);var state_19462__$1 = (function (){var statearr_19474 = state_19462;(statearr_19474[(8)] = inst_19442);
return statearr_19474;
})();var statearr_19475_19497 = state_19462__$1;(statearr_19475_19497[(2)] = inst_19443);
(statearr_19475_19497[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (14)))
{var inst_19456 = (state_19462[(2)]);var state_19462__$1 = state_19462;var statearr_19476_19498 = state_19462__$1;(statearr_19476_19498[(2)] = inst_19456);
(statearr_19476_19498[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (10)))
{var state_19462__$1 = state_19462;var statearr_19477_19499 = state_19462__$1;(statearr_19477_19499[(2)] = fc);
(statearr_19477_19499[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19463 === (8)))
{var inst_19451 = (state_19462[(2)]);var state_19462__$1 = state_19462;if(cljs.core.truth_(inst_19451))
{var statearr_19478_19500 = state_19462__$1;(statearr_19478_19500[(1)] = (12));
} else
{var statearr_19479_19501 = state_19462__$1;(statearr_19479_19501[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___19487,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___19487,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19483 = [null,null,null,null,null,null,null,null,null];(statearr_19483[(0)] = state_machine__5805__auto__);
(statearr_19483[(1)] = (1));
return statearr_19483;
});
var state_machine__5805__auto____1 = (function (state_19462){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19462);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19484){if((e19484 instanceof Object))
{var ex__5808__auto__ = e19484;var statearr_19485_19502 = state_19462;(statearr_19485_19502[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19484;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19503 = state_19462;
state_19462 = G__19503;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19462){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19487,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_19486 = f__5820__auto__.call(null);(statearr_19486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19487);
return statearr_19486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19487,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_19550){var state_val_19551 = (state_19550[(1)]);if((state_val_19551 === (7)))
{var inst_19546 = (state_19550[(2)]);var state_19550__$1 = state_19550;var statearr_19552_19568 = state_19550__$1;(statearr_19552_19568[(2)] = inst_19546);
(statearr_19552_19568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19551 === (6)))
{var inst_19539 = (state_19550[(7)]);var inst_19536 = (state_19550[(8)]);var inst_19543 = f.call(null,inst_19536,inst_19539);var inst_19536__$1 = inst_19543;var state_19550__$1 = (function (){var statearr_19553 = state_19550;(statearr_19553[(8)] = inst_19536__$1);
return statearr_19553;
})();var statearr_19554_19569 = state_19550__$1;(statearr_19554_19569[(2)] = null);
(statearr_19554_19569[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19551 === (5)))
{var inst_19536 = (state_19550[(8)]);var state_19550__$1 = state_19550;var statearr_19555_19570 = state_19550__$1;(statearr_19555_19570[(2)] = inst_19536);
(statearr_19555_19570[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19551 === (4)))
{var inst_19539 = (state_19550[(7)]);var inst_19539__$1 = (state_19550[(2)]);var inst_19540 = (inst_19539__$1 == null);var state_19550__$1 = (function (){var statearr_19556 = state_19550;(statearr_19556[(7)] = inst_19539__$1);
return statearr_19556;
})();if(cljs.core.truth_(inst_19540))
{var statearr_19557_19571 = state_19550__$1;(statearr_19557_19571[(1)] = (5));
} else
{var statearr_19558_19572 = state_19550__$1;(statearr_19558_19572[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19551 === (3)))
{var inst_19548 = (state_19550[(2)]);var state_19550__$1 = state_19550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19550__$1,inst_19548);
} else
{if((state_val_19551 === (2)))
{var state_19550__$1 = state_19550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19550__$1,(4),ch);
} else
{if((state_val_19551 === (1)))
{var inst_19536 = init;var state_19550__$1 = (function (){var statearr_19559 = state_19550;(statearr_19559[(8)] = inst_19536);
return statearr_19559;
})();var statearr_19560_19573 = state_19550__$1;(statearr_19560_19573[(2)] = null);
(statearr_19560_19573[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19564 = [null,null,null,null,null,null,null,null,null];(statearr_19564[(0)] = state_machine__5805__auto__);
(statearr_19564[(1)] = (1));
return statearr_19564;
});
var state_machine__5805__auto____1 = (function (state_19550){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19565){if((e19565 instanceof Object))
{var ex__5808__auto__ = e19565;var statearr_19566_19574 = state_19550;(statearr_19566_19574[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19565;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19575 = state_19550;
state_19550 = G__19575;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19550){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_19567 = f__5820__auto__.call(null);(statearr_19567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_19567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_19649){var state_val_19650 = (state_19649[(1)]);if((state_val_19650 === (7)))
{var inst_19631 = (state_19649[(2)]);var state_19649__$1 = state_19649;var statearr_19651_19674 = state_19649__$1;(statearr_19651_19674[(2)] = inst_19631);
(statearr_19651_19674[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (1)))
{var inst_19625 = cljs.core.seq.call(null,coll);var inst_19626 = inst_19625;var state_19649__$1 = (function (){var statearr_19652 = state_19649;(statearr_19652[(7)] = inst_19626);
return statearr_19652;
})();var statearr_19653_19675 = state_19649__$1;(statearr_19653_19675[(2)] = null);
(statearr_19653_19675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (4)))
{var inst_19626 = (state_19649[(7)]);var inst_19629 = cljs.core.first.call(null,inst_19626);var state_19649__$1 = state_19649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19649__$1,(7),ch,inst_19629);
} else
{if((state_val_19650 === (13)))
{var inst_19643 = (state_19649[(2)]);var state_19649__$1 = state_19649;var statearr_19654_19676 = state_19649__$1;(statearr_19654_19676[(2)] = inst_19643);
(statearr_19654_19676[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (6)))
{var inst_19634 = (state_19649[(2)]);var state_19649__$1 = state_19649;if(cljs.core.truth_(inst_19634))
{var statearr_19655_19677 = state_19649__$1;(statearr_19655_19677[(1)] = (8));
} else
{var statearr_19656_19678 = state_19649__$1;(statearr_19656_19678[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (3)))
{var inst_19647 = (state_19649[(2)]);var state_19649__$1 = state_19649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19649__$1,inst_19647);
} else
{if((state_val_19650 === (12)))
{var state_19649__$1 = state_19649;var statearr_19657_19679 = state_19649__$1;(statearr_19657_19679[(2)] = null);
(statearr_19657_19679[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (2)))
{var inst_19626 = (state_19649[(7)]);var state_19649__$1 = state_19649;if(cljs.core.truth_(inst_19626))
{var statearr_19658_19680 = state_19649__$1;(statearr_19658_19680[(1)] = (4));
} else
{var statearr_19659_19681 = state_19649__$1;(statearr_19659_19681[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (11)))
{var inst_19640 = cljs.core.async.close_BANG_.call(null,ch);var state_19649__$1 = state_19649;var statearr_19660_19682 = state_19649__$1;(statearr_19660_19682[(2)] = inst_19640);
(statearr_19660_19682[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (9)))
{var state_19649__$1 = state_19649;if(cljs.core.truth_(close_QMARK_))
{var statearr_19661_19683 = state_19649__$1;(statearr_19661_19683[(1)] = (11));
} else
{var statearr_19662_19684 = state_19649__$1;(statearr_19662_19684[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (5)))
{var inst_19626 = (state_19649[(7)]);var state_19649__$1 = state_19649;var statearr_19663_19685 = state_19649__$1;(statearr_19663_19685[(2)] = inst_19626);
(statearr_19663_19685[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (10)))
{var inst_19645 = (state_19649[(2)]);var state_19649__$1 = state_19649;var statearr_19664_19686 = state_19649__$1;(statearr_19664_19686[(2)] = inst_19645);
(statearr_19664_19686[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19650 === (8)))
{var inst_19626 = (state_19649[(7)]);var inst_19636 = cljs.core.next.call(null,inst_19626);var inst_19626__$1 = inst_19636;var state_19649__$1 = (function (){var statearr_19665 = state_19649;(statearr_19665[(7)] = inst_19626__$1);
return statearr_19665;
})();var statearr_19666_19687 = state_19649__$1;(statearr_19666_19687[(2)] = null);
(statearr_19666_19687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19670 = [null,null,null,null,null,null,null,null];(statearr_19670[(0)] = state_machine__5805__auto__);
(statearr_19670[(1)] = (1));
return statearr_19670;
});
var state_machine__5805__auto____1 = (function (state_19649){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19649);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19671){if((e19671 instanceof Object))
{var ex__5808__auto__ = e19671;var statearr_19672_19688 = state_19649;(statearr_19672_19688[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19689 = state_19649;
state_19649 = G__19689;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19649){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_19673 = f__5820__auto__.call(null);(statearr_19673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_19673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19691 = {};return obj19691;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3625__auto__ = _;if(and__3625__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4273__auto__ = (((_ == null))?null:_);return (function (){var or__3637__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19693 = {};return obj19693;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19915 = (function (cs,ch,mult,meta19916){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19916 = meta19916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19915.cljs$lang$type = true;
cljs.core.async.t19915.cljs$lang$ctorStr = "cljs.core.async/t19915";
cljs.core.async.t19915.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t19915");
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19917){var self__ = this;
var _19917__$1 = this;return self__.meta19916;
});})(cs))
;
cljs.core.async.t19915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19917,meta19916__$1){var self__ = this;
var _19917__$1 = this;return (new cljs.core.async.t19915(self__.cs,self__.ch,self__.mult,meta19916__$1));
});})(cs))
;
cljs.core.async.__GT_t19915 = ((function (cs){
return (function __GT_t19915(cs__$1,ch__$1,mult__$1,meta19916){return (new cljs.core.async.t19915(cs__$1,ch__$1,mult__$1,meta19916));
});})(cs))
;
}
return (new cljs.core.async.t19915(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___20136 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20136,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20136,cs,m,dchan,dctr,done){
return (function (state_20048){var state_val_20049 = (state_20048[(1)]);if((state_val_20049 === (7)))
{var inst_20044 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20050_20137 = state_20048__$1;(statearr_20050_20137[(2)] = inst_20044);
(statearr_20050_20137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (20)))
{var inst_19949 = (state_20048[(7)]);var inst_19959 = cljs.core.first.call(null,inst_19949);var inst_19960 = cljs.core.nth.call(null,inst_19959,(0),null);var inst_19961 = cljs.core.nth.call(null,inst_19959,(1),null);var state_20048__$1 = (function (){var statearr_20051 = state_20048;(statearr_20051[(8)] = inst_19960);
return statearr_20051;
})();if(cljs.core.truth_(inst_19961))
{var statearr_20052_20138 = state_20048__$1;(statearr_20052_20138[(1)] = (22));
} else
{var statearr_20053_20139 = state_20048__$1;(statearr_20053_20139[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (27)))
{var inst_19991 = (state_20048[(9)]);var inst_19989 = (state_20048[(10)]);var inst_19996 = (state_20048[(11)]);var inst_19920 = (state_20048[(12)]);var inst_19996__$1 = cljs.core._nth.call(null,inst_19989,inst_19991);var inst_19997 = cljs.core.async.put_BANG_.call(null,inst_19996__$1,inst_19920,done);var state_20048__$1 = (function (){var statearr_20054 = state_20048;(statearr_20054[(11)] = inst_19996__$1);
return statearr_20054;
})();if(cljs.core.truth_(inst_19997))
{var statearr_20055_20140 = state_20048__$1;(statearr_20055_20140[(1)] = (30));
} else
{var statearr_20056_20141 = state_20048__$1;(statearr_20056_20141[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (1)))
{var state_20048__$1 = state_20048;var statearr_20057_20142 = state_20048__$1;(statearr_20057_20142[(2)] = null);
(statearr_20057_20142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (24)))
{var inst_19949 = (state_20048[(7)]);var inst_19966 = (state_20048[(2)]);var inst_19967 = cljs.core.next.call(null,inst_19949);var inst_19929 = inst_19967;var inst_19930 = null;var inst_19931 = (0);var inst_19932 = (0);var state_20048__$1 = (function (){var statearr_20058 = state_20048;(statearr_20058[(13)] = inst_19966);
(statearr_20058[(14)] = inst_19930);
(statearr_20058[(15)] = inst_19929);
(statearr_20058[(16)] = inst_19931);
(statearr_20058[(17)] = inst_19932);
return statearr_20058;
})();var statearr_20059_20143 = state_20048__$1;(statearr_20059_20143[(2)] = null);
(statearr_20059_20143[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (39)))
{var state_20048__$1 = state_20048;var statearr_20063_20144 = state_20048__$1;(statearr_20063_20144[(2)] = null);
(statearr_20063_20144[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (4)))
{var inst_19920 = (state_20048[(12)]);var inst_19920__$1 = (state_20048[(2)]);var inst_19921 = (inst_19920__$1 == null);var state_20048__$1 = (function (){var statearr_20064 = state_20048;(statearr_20064[(12)] = inst_19920__$1);
return statearr_20064;
})();if(cljs.core.truth_(inst_19921))
{var statearr_20065_20145 = state_20048__$1;(statearr_20065_20145[(1)] = (5));
} else
{var statearr_20066_20146 = state_20048__$1;(statearr_20066_20146[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (15)))
{var inst_19930 = (state_20048[(14)]);var inst_19929 = (state_20048[(15)]);var inst_19931 = (state_20048[(16)]);var inst_19932 = (state_20048[(17)]);var inst_19945 = (state_20048[(2)]);var inst_19946 = (inst_19932 + (1));var tmp20060 = inst_19930;var tmp20061 = inst_19929;var tmp20062 = inst_19931;var inst_19929__$1 = tmp20061;var inst_19930__$1 = tmp20060;var inst_19931__$1 = tmp20062;var inst_19932__$1 = inst_19946;var state_20048__$1 = (function (){var statearr_20067 = state_20048;(statearr_20067[(18)] = inst_19945);
(statearr_20067[(14)] = inst_19930__$1);
(statearr_20067[(15)] = inst_19929__$1);
(statearr_20067[(16)] = inst_19931__$1);
(statearr_20067[(17)] = inst_19932__$1);
return statearr_20067;
})();var statearr_20068_20147 = state_20048__$1;(statearr_20068_20147[(2)] = null);
(statearr_20068_20147[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (21)))
{var inst_19970 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20072_20148 = state_20048__$1;(statearr_20072_20148[(2)] = inst_19970);
(statearr_20072_20148[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (31)))
{var inst_19996 = (state_20048[(11)]);var inst_20000 = done.call(null,null);var inst_20001 = cljs.core.async.untap_STAR_.call(null,m,inst_19996);var state_20048__$1 = (function (){var statearr_20073 = state_20048;(statearr_20073[(19)] = inst_20000);
return statearr_20073;
})();var statearr_20074_20149 = state_20048__$1;(statearr_20074_20149[(2)] = inst_20001);
(statearr_20074_20149[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (32)))
{var inst_19991 = (state_20048[(9)]);var inst_19989 = (state_20048[(10)]);var inst_19990 = (state_20048[(20)]);var inst_19988 = (state_20048[(21)]);var inst_20003 = (state_20048[(2)]);var inst_20004 = (inst_19991 + (1));var tmp20069 = inst_19989;var tmp20070 = inst_19990;var tmp20071 = inst_19988;var inst_19988__$1 = tmp20071;var inst_19989__$1 = tmp20069;var inst_19990__$1 = tmp20070;var inst_19991__$1 = inst_20004;var state_20048__$1 = (function (){var statearr_20075 = state_20048;(statearr_20075[(9)] = inst_19991__$1);
(statearr_20075[(10)] = inst_19989__$1);
(statearr_20075[(20)] = inst_19990__$1);
(statearr_20075[(22)] = inst_20003);
(statearr_20075[(21)] = inst_19988__$1);
return statearr_20075;
})();var statearr_20076_20150 = state_20048__$1;(statearr_20076_20150[(2)] = null);
(statearr_20076_20150[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (40)))
{var inst_20016 = (state_20048[(23)]);var inst_20020 = done.call(null,null);var inst_20021 = cljs.core.async.untap_STAR_.call(null,m,inst_20016);var state_20048__$1 = (function (){var statearr_20077 = state_20048;(statearr_20077[(24)] = inst_20020);
return statearr_20077;
})();var statearr_20078_20151 = state_20048__$1;(statearr_20078_20151[(2)] = inst_20021);
(statearr_20078_20151[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (33)))
{var inst_20007 = (state_20048[(25)]);var inst_20009 = cljs.core.chunked_seq_QMARK_.call(null,inst_20007);var state_20048__$1 = state_20048;if(inst_20009)
{var statearr_20079_20152 = state_20048__$1;(statearr_20079_20152[(1)] = (36));
} else
{var statearr_20080_20153 = state_20048__$1;(statearr_20080_20153[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (13)))
{var inst_19939 = (state_20048[(26)]);var inst_19942 = cljs.core.async.close_BANG_.call(null,inst_19939);var state_20048__$1 = state_20048;var statearr_20081_20154 = state_20048__$1;(statearr_20081_20154[(2)] = inst_19942);
(statearr_20081_20154[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (22)))
{var inst_19960 = (state_20048[(8)]);var inst_19963 = cljs.core.async.close_BANG_.call(null,inst_19960);var state_20048__$1 = state_20048;var statearr_20082_20155 = state_20048__$1;(statearr_20082_20155[(2)] = inst_19963);
(statearr_20082_20155[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (36)))
{var inst_20007 = (state_20048[(25)]);var inst_20011 = cljs.core.chunk_first.call(null,inst_20007);var inst_20012 = cljs.core.chunk_rest.call(null,inst_20007);var inst_20013 = cljs.core.count.call(null,inst_20011);var inst_19988 = inst_20012;var inst_19989 = inst_20011;var inst_19990 = inst_20013;var inst_19991 = (0);var state_20048__$1 = (function (){var statearr_20083 = state_20048;(statearr_20083[(9)] = inst_19991);
(statearr_20083[(10)] = inst_19989);
(statearr_20083[(20)] = inst_19990);
(statearr_20083[(21)] = inst_19988);
return statearr_20083;
})();var statearr_20084_20156 = state_20048__$1;(statearr_20084_20156[(2)] = null);
(statearr_20084_20156[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (41)))
{var inst_20007 = (state_20048[(25)]);var inst_20023 = (state_20048[(2)]);var inst_20024 = cljs.core.next.call(null,inst_20007);var inst_19988 = inst_20024;var inst_19989 = null;var inst_19990 = (0);var inst_19991 = (0);var state_20048__$1 = (function (){var statearr_20085 = state_20048;(statearr_20085[(9)] = inst_19991);
(statearr_20085[(10)] = inst_19989);
(statearr_20085[(20)] = inst_19990);
(statearr_20085[(21)] = inst_19988);
(statearr_20085[(27)] = inst_20023);
return statearr_20085;
})();var statearr_20086_20157 = state_20048__$1;(statearr_20086_20157[(2)] = null);
(statearr_20086_20157[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (43)))
{var state_20048__$1 = state_20048;var statearr_20087_20158 = state_20048__$1;(statearr_20087_20158[(2)] = null);
(statearr_20087_20158[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (29)))
{var inst_20032 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20088_20159 = state_20048__$1;(statearr_20088_20159[(2)] = inst_20032);
(statearr_20088_20159[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (44)))
{var inst_20041 = (state_20048[(2)]);var state_20048__$1 = (function (){var statearr_20089 = state_20048;(statearr_20089[(28)] = inst_20041);
return statearr_20089;
})();var statearr_20090_20160 = state_20048__$1;(statearr_20090_20160[(2)] = null);
(statearr_20090_20160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (6)))
{var inst_19980 = (state_20048[(29)]);var inst_19979 = cljs.core.deref.call(null,cs);var inst_19980__$1 = cljs.core.keys.call(null,inst_19979);var inst_19981 = cljs.core.count.call(null,inst_19980__$1);var inst_19982 = cljs.core.reset_BANG_.call(null,dctr,inst_19981);var inst_19987 = cljs.core.seq.call(null,inst_19980__$1);var inst_19988 = inst_19987;var inst_19989 = null;var inst_19990 = (0);var inst_19991 = (0);var state_20048__$1 = (function (){var statearr_20091 = state_20048;(statearr_20091[(9)] = inst_19991);
(statearr_20091[(10)] = inst_19989);
(statearr_20091[(30)] = inst_19982);
(statearr_20091[(20)] = inst_19990);
(statearr_20091[(21)] = inst_19988);
(statearr_20091[(29)] = inst_19980__$1);
return statearr_20091;
})();var statearr_20092_20161 = state_20048__$1;(statearr_20092_20161[(2)] = null);
(statearr_20092_20161[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (28)))
{var inst_20007 = (state_20048[(25)]);var inst_19988 = (state_20048[(21)]);var inst_20007__$1 = cljs.core.seq.call(null,inst_19988);var state_20048__$1 = (function (){var statearr_20093 = state_20048;(statearr_20093[(25)] = inst_20007__$1);
return statearr_20093;
})();if(inst_20007__$1)
{var statearr_20094_20162 = state_20048__$1;(statearr_20094_20162[(1)] = (33));
} else
{var statearr_20095_20163 = state_20048__$1;(statearr_20095_20163[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (25)))
{var inst_19991 = (state_20048[(9)]);var inst_19990 = (state_20048[(20)]);var inst_19993 = (inst_19991 < inst_19990);var inst_19994 = inst_19993;var state_20048__$1 = state_20048;if(cljs.core.truth_(inst_19994))
{var statearr_20096_20164 = state_20048__$1;(statearr_20096_20164[(1)] = (27));
} else
{var statearr_20097_20165 = state_20048__$1;(statearr_20097_20165[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (34)))
{var state_20048__$1 = state_20048;var statearr_20098_20166 = state_20048__$1;(statearr_20098_20166[(2)] = null);
(statearr_20098_20166[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (17)))
{var state_20048__$1 = state_20048;var statearr_20099_20167 = state_20048__$1;(statearr_20099_20167[(2)] = null);
(statearr_20099_20167[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (3)))
{var inst_20046 = (state_20048[(2)]);var state_20048__$1 = state_20048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20048__$1,inst_20046);
} else
{if((state_val_20049 === (12)))
{var inst_19975 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20100_20168 = state_20048__$1;(statearr_20100_20168[(2)] = inst_19975);
(statearr_20100_20168[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (2)))
{var state_20048__$1 = state_20048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20048__$1,(4),ch);
} else
{if((state_val_20049 === (23)))
{var state_20048__$1 = state_20048;var statearr_20101_20169 = state_20048__$1;(statearr_20101_20169[(2)] = null);
(statearr_20101_20169[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (35)))
{var inst_20030 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20102_20170 = state_20048__$1;(statearr_20102_20170[(2)] = inst_20030);
(statearr_20102_20170[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (19)))
{var inst_19949 = (state_20048[(7)]);var inst_19953 = cljs.core.chunk_first.call(null,inst_19949);var inst_19954 = cljs.core.chunk_rest.call(null,inst_19949);var inst_19955 = cljs.core.count.call(null,inst_19953);var inst_19929 = inst_19954;var inst_19930 = inst_19953;var inst_19931 = inst_19955;var inst_19932 = (0);var state_20048__$1 = (function (){var statearr_20103 = state_20048;(statearr_20103[(14)] = inst_19930);
(statearr_20103[(15)] = inst_19929);
(statearr_20103[(16)] = inst_19931);
(statearr_20103[(17)] = inst_19932);
return statearr_20103;
})();var statearr_20104_20171 = state_20048__$1;(statearr_20104_20171[(2)] = null);
(statearr_20104_20171[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (11)))
{var inst_19929 = (state_20048[(15)]);var inst_19949 = (state_20048[(7)]);var inst_19949__$1 = cljs.core.seq.call(null,inst_19929);var state_20048__$1 = (function (){var statearr_20105 = state_20048;(statearr_20105[(7)] = inst_19949__$1);
return statearr_20105;
})();if(inst_19949__$1)
{var statearr_20106_20172 = state_20048__$1;(statearr_20106_20172[(1)] = (16));
} else
{var statearr_20107_20173 = state_20048__$1;(statearr_20107_20173[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (9)))
{var inst_19977 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20108_20174 = state_20048__$1;(statearr_20108_20174[(2)] = inst_19977);
(statearr_20108_20174[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (5)))
{var inst_19927 = cljs.core.deref.call(null,cs);var inst_19928 = cljs.core.seq.call(null,inst_19927);var inst_19929 = inst_19928;var inst_19930 = null;var inst_19931 = (0);var inst_19932 = (0);var state_20048__$1 = (function (){var statearr_20109 = state_20048;(statearr_20109[(14)] = inst_19930);
(statearr_20109[(15)] = inst_19929);
(statearr_20109[(16)] = inst_19931);
(statearr_20109[(17)] = inst_19932);
return statearr_20109;
})();var statearr_20110_20175 = state_20048__$1;(statearr_20110_20175[(2)] = null);
(statearr_20110_20175[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (14)))
{var state_20048__$1 = state_20048;var statearr_20111_20176 = state_20048__$1;(statearr_20111_20176[(2)] = null);
(statearr_20111_20176[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (45)))
{var inst_20038 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20112_20177 = state_20048__$1;(statearr_20112_20177[(2)] = inst_20038);
(statearr_20112_20177[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (26)))
{var inst_19980 = (state_20048[(29)]);var inst_20034 = (state_20048[(2)]);var inst_20035 = cljs.core.seq.call(null,inst_19980);var state_20048__$1 = (function (){var statearr_20113 = state_20048;(statearr_20113[(31)] = inst_20034);
return statearr_20113;
})();if(inst_20035)
{var statearr_20114_20178 = state_20048__$1;(statearr_20114_20178[(1)] = (42));
} else
{var statearr_20115_20179 = state_20048__$1;(statearr_20115_20179[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (16)))
{var inst_19949 = (state_20048[(7)]);var inst_19951 = cljs.core.chunked_seq_QMARK_.call(null,inst_19949);var state_20048__$1 = state_20048;if(inst_19951)
{var statearr_20116_20180 = state_20048__$1;(statearr_20116_20180[(1)] = (19));
} else
{var statearr_20117_20181 = state_20048__$1;(statearr_20117_20181[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (38)))
{var inst_20027 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20118_20182 = state_20048__$1;(statearr_20118_20182[(2)] = inst_20027);
(statearr_20118_20182[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (30)))
{var state_20048__$1 = state_20048;var statearr_20119_20183 = state_20048__$1;(statearr_20119_20183[(2)] = null);
(statearr_20119_20183[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (10)))
{var inst_19930 = (state_20048[(14)]);var inst_19932 = (state_20048[(17)]);var inst_19938 = cljs.core._nth.call(null,inst_19930,inst_19932);var inst_19939 = cljs.core.nth.call(null,inst_19938,(0),null);var inst_19940 = cljs.core.nth.call(null,inst_19938,(1),null);var state_20048__$1 = (function (){var statearr_20120 = state_20048;(statearr_20120[(26)] = inst_19939);
return statearr_20120;
})();if(cljs.core.truth_(inst_19940))
{var statearr_20121_20184 = state_20048__$1;(statearr_20121_20184[(1)] = (13));
} else
{var statearr_20122_20185 = state_20048__$1;(statearr_20122_20185[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (18)))
{var inst_19973 = (state_20048[(2)]);var state_20048__$1 = state_20048;var statearr_20123_20186 = state_20048__$1;(statearr_20123_20186[(2)] = inst_19973);
(statearr_20123_20186[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (42)))
{var state_20048__$1 = state_20048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20048__$1,(45),dchan);
} else
{if((state_val_20049 === (37)))
{var inst_20007 = (state_20048[(25)]);var inst_20016 = (state_20048[(23)]);var inst_19920 = (state_20048[(12)]);var inst_20016__$1 = cljs.core.first.call(null,inst_20007);var inst_20017 = cljs.core.async.put_BANG_.call(null,inst_20016__$1,inst_19920,done);var state_20048__$1 = (function (){var statearr_20124 = state_20048;(statearr_20124[(23)] = inst_20016__$1);
return statearr_20124;
})();if(cljs.core.truth_(inst_20017))
{var statearr_20125_20187 = state_20048__$1;(statearr_20125_20187[(1)] = (39));
} else
{var statearr_20126_20188 = state_20048__$1;(statearr_20126_20188[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20049 === (8)))
{var inst_19931 = (state_20048[(16)]);var inst_19932 = (state_20048[(17)]);var inst_19934 = (inst_19932 < inst_19931);var inst_19935 = inst_19934;var state_20048__$1 = state_20048;if(cljs.core.truth_(inst_19935))
{var statearr_20127_20189 = state_20048__$1;(statearr_20127_20189[(1)] = (10));
} else
{var statearr_20128_20190 = state_20048__$1;(statearr_20128_20190[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___20136,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___20136,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20132[(0)] = state_machine__5805__auto__);
(statearr_20132[(1)] = (1));
return statearr_20132;
});
var state_machine__5805__auto____1 = (function (state_20048){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20133){if((e20133 instanceof Object))
{var ex__5808__auto__ = e20133;var statearr_20134_20191 = state_20048;(statearr_20134_20191[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20192 = state_20048;
state_20048 = G__20192;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20048){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20136,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_20135 = f__5820__auto__.call(null);(statearr_20135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20136);
return statearr_20135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20136,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20194 = {};return obj20194;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3625__auto__ = m;if(and__3625__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4273__auto__ = (((m == null))?null:m);return (function (){var or__3637__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20195){var map__20200 = p__20195;var map__20200__$1 = ((cljs.core.seq_QMARK_.call(null,map__20200))?cljs.core.apply.call(null,cljs.core.hash_map,map__20200):map__20200);var opts = map__20200__$1;var statearr_20201_20204 = state;(statearr_20201_20204[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20200,map__20200__$1,opts){
return (function (val){var statearr_20202_20205 = state;(statearr_20202_20205[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20200,map__20200__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20203_20206 = state;(statearr_20203_20206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20195 = null;if (arguments.length > 3) {
  p__20195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20195);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20207){
var state = cljs.core.first(arglist__20207);
arglist__20207 = cljs.core.next(arglist__20207);
var cont_block = cljs.core.first(arglist__20207);
arglist__20207 = cljs.core.next(arglist__20207);
var ports = cljs.core.first(arglist__20207);
var p__20195 = cljs.core.rest(arglist__20207);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20195);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20327 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20328){
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
this.meta20328 = meta20328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20327.cljs$lang$type = true;
cljs.core.async.t20327.cljs$lang$ctorStr = "cljs.core.async/t20327";
cljs.core.async.t20327.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t20327");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20329){var self__ = this;
var _20329__$1 = this;return self__.meta20328;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20329,meta20328__$1){var self__ = this;
var _20329__$1 = this;return (new cljs.core.async.t20327(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20328__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20327 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20327(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20328){return (new cljs.core.async.t20327(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20328));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20327(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___20446 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20399){var state_val_20400 = (state_20399[(1)]);if((state_val_20400 === (7)))
{var inst_20343 = (state_20399[(7)]);var inst_20348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20343);var state_20399__$1 = state_20399;var statearr_20401_20447 = state_20399__$1;(statearr_20401_20447[(2)] = inst_20348);
(statearr_20401_20447[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (20)))
{var inst_20358 = (state_20399[(8)]);var state_20399__$1 = state_20399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20399__$1,(23),out,inst_20358);
} else
{if((state_val_20400 === (1)))
{var inst_20333 = (state_20399[(9)]);var inst_20333__$1 = calc_state.call(null);var inst_20334 = cljs.core.seq_QMARK_.call(null,inst_20333__$1);var state_20399__$1 = (function (){var statearr_20402 = state_20399;(statearr_20402[(9)] = inst_20333__$1);
return statearr_20402;
})();if(inst_20334)
{var statearr_20403_20448 = state_20399__$1;(statearr_20403_20448[(1)] = (2));
} else
{var statearr_20404_20449 = state_20399__$1;(statearr_20404_20449[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (24)))
{var inst_20351 = (state_20399[(10)]);var inst_20343 = inst_20351;var state_20399__$1 = (function (){var statearr_20405 = state_20399;(statearr_20405[(7)] = inst_20343);
return statearr_20405;
})();var statearr_20406_20450 = state_20399__$1;(statearr_20406_20450[(2)] = null);
(statearr_20406_20450[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (4)))
{var inst_20333 = (state_20399[(9)]);var inst_20339 = (state_20399[(2)]);var inst_20340 = cljs.core.get.call(null,inst_20339,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20341 = cljs.core.get.call(null,inst_20339,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20342 = cljs.core.get.call(null,inst_20339,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20343 = inst_20333;var state_20399__$1 = (function (){var statearr_20407 = state_20399;(statearr_20407[(11)] = inst_20342);
(statearr_20407[(12)] = inst_20341);
(statearr_20407[(7)] = inst_20343);
(statearr_20407[(13)] = inst_20340);
return statearr_20407;
})();var statearr_20408_20451 = state_20399__$1;(statearr_20408_20451[(2)] = null);
(statearr_20408_20451[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (15)))
{var state_20399__$1 = state_20399;var statearr_20409_20452 = state_20399__$1;(statearr_20409_20452[(2)] = null);
(statearr_20409_20452[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (21)))
{var inst_20351 = (state_20399[(10)]);var inst_20343 = inst_20351;var state_20399__$1 = (function (){var statearr_20410 = state_20399;(statearr_20410[(7)] = inst_20343);
return statearr_20410;
})();var statearr_20411_20453 = state_20399__$1;(statearr_20411_20453[(2)] = null);
(statearr_20411_20453[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (13)))
{var inst_20395 = (state_20399[(2)]);var state_20399__$1 = state_20399;var statearr_20412_20454 = state_20399__$1;(statearr_20412_20454[(2)] = inst_20395);
(statearr_20412_20454[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (22)))
{var inst_20393 = (state_20399[(2)]);var state_20399__$1 = state_20399;var statearr_20413_20455 = state_20399__$1;(statearr_20413_20455[(2)] = inst_20393);
(statearr_20413_20455[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (6)))
{var inst_20397 = (state_20399[(2)]);var state_20399__$1 = state_20399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20399__$1,inst_20397);
} else
{if((state_val_20400 === (25)))
{var state_20399__$1 = state_20399;var statearr_20414_20456 = state_20399__$1;(statearr_20414_20456[(2)] = null);
(statearr_20414_20456[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (17)))
{var inst_20373 = (state_20399[(14)]);var state_20399__$1 = state_20399;var statearr_20415_20457 = state_20399__$1;(statearr_20415_20457[(2)] = inst_20373);
(statearr_20415_20457[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (3)))
{var inst_20333 = (state_20399[(9)]);var state_20399__$1 = state_20399;var statearr_20416_20458 = state_20399__$1;(statearr_20416_20458[(2)] = inst_20333);
(statearr_20416_20458[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (12)))
{var inst_20354 = (state_20399[(15)]);var inst_20373 = (state_20399[(14)]);var inst_20359 = (state_20399[(16)]);var inst_20373__$1 = inst_20354.call(null,inst_20359);var state_20399__$1 = (function (){var statearr_20417 = state_20399;(statearr_20417[(14)] = inst_20373__$1);
return statearr_20417;
})();if(cljs.core.truth_(inst_20373__$1))
{var statearr_20418_20459 = state_20399__$1;(statearr_20418_20459[(1)] = (17));
} else
{var statearr_20419_20460 = state_20399__$1;(statearr_20419_20460[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (2)))
{var inst_20333 = (state_20399[(9)]);var inst_20336 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20333);var state_20399__$1 = state_20399;var statearr_20420_20461 = state_20399__$1;(statearr_20420_20461[(2)] = inst_20336);
(statearr_20420_20461[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (23)))
{var inst_20384 = (state_20399[(2)]);var state_20399__$1 = state_20399;if(cljs.core.truth_(inst_20384))
{var statearr_20421_20462 = state_20399__$1;(statearr_20421_20462[(1)] = (24));
} else
{var statearr_20422_20463 = state_20399__$1;(statearr_20422_20463[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (19)))
{var inst_20381 = (state_20399[(2)]);var state_20399__$1 = state_20399;if(cljs.core.truth_(inst_20381))
{var statearr_20423_20464 = state_20399__$1;(statearr_20423_20464[(1)] = (20));
} else
{var statearr_20424_20465 = state_20399__$1;(statearr_20424_20465[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (11)))
{var inst_20358 = (state_20399[(8)]);var inst_20364 = (inst_20358 == null);var state_20399__$1 = state_20399;if(cljs.core.truth_(inst_20364))
{var statearr_20425_20466 = state_20399__$1;(statearr_20425_20466[(1)] = (14));
} else
{var statearr_20426_20467 = state_20399__$1;(statearr_20426_20467[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (9)))
{var inst_20351 = (state_20399[(10)]);var inst_20351__$1 = (state_20399[(2)]);var inst_20352 = cljs.core.get.call(null,inst_20351__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20353 = cljs.core.get.call(null,inst_20351__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20354 = cljs.core.get.call(null,inst_20351__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20399__$1 = (function (){var statearr_20427 = state_20399;(statearr_20427[(15)] = inst_20354);
(statearr_20427[(10)] = inst_20351__$1);
(statearr_20427[(17)] = inst_20353);
return statearr_20427;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20399__$1,(10),inst_20352);
} else
{if((state_val_20400 === (5)))
{var inst_20343 = (state_20399[(7)]);var inst_20346 = cljs.core.seq_QMARK_.call(null,inst_20343);var state_20399__$1 = state_20399;if(inst_20346)
{var statearr_20428_20468 = state_20399__$1;(statearr_20428_20468[(1)] = (7));
} else
{var statearr_20429_20469 = state_20399__$1;(statearr_20429_20469[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (14)))
{var inst_20359 = (state_20399[(16)]);var inst_20366 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20359);var state_20399__$1 = state_20399;var statearr_20430_20470 = state_20399__$1;(statearr_20430_20470[(2)] = inst_20366);
(statearr_20430_20470[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (26)))
{var inst_20389 = (state_20399[(2)]);var state_20399__$1 = state_20399;var statearr_20431_20471 = state_20399__$1;(statearr_20431_20471[(2)] = inst_20389);
(statearr_20431_20471[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (16)))
{var inst_20369 = (state_20399[(2)]);var inst_20370 = calc_state.call(null);var inst_20343 = inst_20370;var state_20399__$1 = (function (){var statearr_20432 = state_20399;(statearr_20432[(18)] = inst_20369);
(statearr_20432[(7)] = inst_20343);
return statearr_20432;
})();var statearr_20433_20472 = state_20399__$1;(statearr_20433_20472[(2)] = null);
(statearr_20433_20472[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (10)))
{var inst_20358 = (state_20399[(8)]);var inst_20359 = (state_20399[(16)]);var inst_20357 = (state_20399[(2)]);var inst_20358__$1 = cljs.core.nth.call(null,inst_20357,(0),null);var inst_20359__$1 = cljs.core.nth.call(null,inst_20357,(1),null);var inst_20360 = (inst_20358__$1 == null);var inst_20361 = cljs.core._EQ_.call(null,inst_20359__$1,change);var inst_20362 = (inst_20360) || (inst_20361);var state_20399__$1 = (function (){var statearr_20434 = state_20399;(statearr_20434[(8)] = inst_20358__$1);
(statearr_20434[(16)] = inst_20359__$1);
return statearr_20434;
})();if(cljs.core.truth_(inst_20362))
{var statearr_20435_20473 = state_20399__$1;(statearr_20435_20473[(1)] = (11));
} else
{var statearr_20436_20474 = state_20399__$1;(statearr_20436_20474[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (18)))
{var inst_20354 = (state_20399[(15)]);var inst_20359 = (state_20399[(16)]);var inst_20353 = (state_20399[(17)]);var inst_20376 = cljs.core.empty_QMARK_.call(null,inst_20354);var inst_20377 = inst_20353.call(null,inst_20359);var inst_20378 = cljs.core.not.call(null,inst_20377);var inst_20379 = (inst_20376) && (inst_20378);var state_20399__$1 = state_20399;var statearr_20437_20475 = state_20399__$1;(statearr_20437_20475[(2)] = inst_20379);
(statearr_20437_20475[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20400 === (8)))
{var inst_20343 = (state_20399[(7)]);var state_20399__$1 = state_20399;var statearr_20438_20476 = state_20399__$1;(statearr_20438_20476[(2)] = inst_20343);
(statearr_20438_20476[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20442[(0)] = state_machine__5805__auto__);
(statearr_20442[(1)] = (1));
return statearr_20442;
});
var state_machine__5805__auto____1 = (function (state_20399){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20399);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20443){if((e20443 instanceof Object))
{var ex__5808__auto__ = e20443;var statearr_20444_20477 = state_20399;(statearr_20444_20477[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20399);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20443;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20478 = state_20399;
state_20399 = G__20478;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20399){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_20445 = f__5820__auto__.call(null);(statearr_20445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20446);
return statearr_20445;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20446,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20480 = {};return obj20480;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3625__auto__ = p;if(and__3625__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3625__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4273__auto__ = (((p == null))?null:p);return (function (){var or__3637__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
return (function (topic){var or__3637__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3637__auto__,mults){
return (function (p1__20481_SHARP_){if(cljs.core.truth_(p1__20481_SHARP_.call(null,topic)))
{return p1__20481_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20481_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20604 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20605){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20605 = meta20605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20604.cljs$lang$type = true;
cljs.core.async.t20604.cljs$lang$ctorStr = "cljs.core.async/t20604";
cljs.core.async.t20604.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t20604");
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20606){var self__ = this;
var _20606__$1 = this;return self__.meta20605;
});})(mults,ensure_mult))
;
cljs.core.async.t20604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20606,meta20605__$1){var self__ = this;
var _20606__$1 = this;return (new cljs.core.async.t20604(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20605__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20604 = ((function (mults,ensure_mult){
return (function __GT_t20604(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20605){return (new cljs.core.async.t20604(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20605));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20604(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___20726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20726,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20726,mults,ensure_mult,p){
return (function (state_20678){var state_val_20679 = (state_20678[(1)]);if((state_val_20679 === (7)))
{var inst_20674 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20680_20727 = state_20678__$1;(statearr_20680_20727[(2)] = inst_20674);
(statearr_20680_20727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (20)))
{var state_20678__$1 = state_20678;var statearr_20681_20728 = state_20678__$1;(statearr_20681_20728[(2)] = null);
(statearr_20681_20728[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (1)))
{var state_20678__$1 = state_20678;var statearr_20682_20729 = state_20678__$1;(statearr_20682_20729[(2)] = null);
(statearr_20682_20729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (24)))
{var inst_20657 = (state_20678[(7)]);var inst_20666 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20657);var state_20678__$1 = state_20678;var statearr_20683_20730 = state_20678__$1;(statearr_20683_20730[(2)] = inst_20666);
(statearr_20683_20730[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (4)))
{var inst_20609 = (state_20678[(8)]);var inst_20609__$1 = (state_20678[(2)]);var inst_20610 = (inst_20609__$1 == null);var state_20678__$1 = (function (){var statearr_20684 = state_20678;(statearr_20684[(8)] = inst_20609__$1);
return statearr_20684;
})();if(cljs.core.truth_(inst_20610))
{var statearr_20685_20731 = state_20678__$1;(statearr_20685_20731[(1)] = (5));
} else
{var statearr_20686_20732 = state_20678__$1;(statearr_20686_20732[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (15)))
{var inst_20651 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20687_20733 = state_20678__$1;(statearr_20687_20733[(2)] = inst_20651);
(statearr_20687_20733[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (21)))
{var inst_20671 = (state_20678[(2)]);var state_20678__$1 = (function (){var statearr_20688 = state_20678;(statearr_20688[(9)] = inst_20671);
return statearr_20688;
})();var statearr_20689_20734 = state_20678__$1;(statearr_20689_20734[(2)] = null);
(statearr_20689_20734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (13)))
{var inst_20633 = (state_20678[(10)]);var inst_20635 = cljs.core.chunked_seq_QMARK_.call(null,inst_20633);var state_20678__$1 = state_20678;if(inst_20635)
{var statearr_20690_20735 = state_20678__$1;(statearr_20690_20735[(1)] = (16));
} else
{var statearr_20691_20736 = state_20678__$1;(statearr_20691_20736[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (22)))
{var inst_20663 = (state_20678[(2)]);var state_20678__$1 = state_20678;if(cljs.core.truth_(inst_20663))
{var statearr_20692_20737 = state_20678__$1;(statearr_20692_20737[(1)] = (23));
} else
{var statearr_20693_20738 = state_20678__$1;(statearr_20693_20738[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (6)))
{var inst_20659 = (state_20678[(11)]);var inst_20609 = (state_20678[(8)]);var inst_20657 = (state_20678[(7)]);var inst_20657__$1 = topic_fn.call(null,inst_20609);var inst_20658 = cljs.core.deref.call(null,mults);var inst_20659__$1 = cljs.core.get.call(null,inst_20658,inst_20657__$1);var state_20678__$1 = (function (){var statearr_20694 = state_20678;(statearr_20694[(11)] = inst_20659__$1);
(statearr_20694[(7)] = inst_20657__$1);
return statearr_20694;
})();if(cljs.core.truth_(inst_20659__$1))
{var statearr_20695_20739 = state_20678__$1;(statearr_20695_20739[(1)] = (19));
} else
{var statearr_20696_20740 = state_20678__$1;(statearr_20696_20740[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (25)))
{var inst_20668 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20697_20741 = state_20678__$1;(statearr_20697_20741[(2)] = inst_20668);
(statearr_20697_20741[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (17)))
{var inst_20633 = (state_20678[(10)]);var inst_20642 = cljs.core.first.call(null,inst_20633);var inst_20643 = cljs.core.async.muxch_STAR_.call(null,inst_20642);var inst_20644 = cljs.core.async.close_BANG_.call(null,inst_20643);var inst_20645 = cljs.core.next.call(null,inst_20633);var inst_20619 = inst_20645;var inst_20620 = null;var inst_20621 = (0);var inst_20622 = (0);var state_20678__$1 = (function (){var statearr_20698 = state_20678;(statearr_20698[(12)] = inst_20619);
(statearr_20698[(13)] = inst_20621);
(statearr_20698[(14)] = inst_20620);
(statearr_20698[(15)] = inst_20622);
(statearr_20698[(16)] = inst_20644);
return statearr_20698;
})();var statearr_20699_20742 = state_20678__$1;(statearr_20699_20742[(2)] = null);
(statearr_20699_20742[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (3)))
{var inst_20676 = (state_20678[(2)]);var state_20678__$1 = state_20678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20678__$1,inst_20676);
} else
{if((state_val_20679 === (12)))
{var inst_20653 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20700_20743 = state_20678__$1;(statearr_20700_20743[(2)] = inst_20653);
(statearr_20700_20743[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (2)))
{var state_20678__$1 = state_20678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20678__$1,(4),ch);
} else
{if((state_val_20679 === (23)))
{var state_20678__$1 = state_20678;var statearr_20701_20744 = state_20678__$1;(statearr_20701_20744[(2)] = null);
(statearr_20701_20744[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (19)))
{var inst_20659 = (state_20678[(11)]);var inst_20609 = (state_20678[(8)]);var inst_20661 = cljs.core.async.muxch_STAR_.call(null,inst_20659);var state_20678__$1 = state_20678;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20678__$1,(22),inst_20661,inst_20609);
} else
{if((state_val_20679 === (11)))
{var inst_20619 = (state_20678[(12)]);var inst_20633 = (state_20678[(10)]);var inst_20633__$1 = cljs.core.seq.call(null,inst_20619);var state_20678__$1 = (function (){var statearr_20702 = state_20678;(statearr_20702[(10)] = inst_20633__$1);
return statearr_20702;
})();if(inst_20633__$1)
{var statearr_20703_20745 = state_20678__$1;(statearr_20703_20745[(1)] = (13));
} else
{var statearr_20704_20746 = state_20678__$1;(statearr_20704_20746[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (9)))
{var inst_20655 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20705_20747 = state_20678__$1;(statearr_20705_20747[(2)] = inst_20655);
(statearr_20705_20747[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (5)))
{var inst_20616 = cljs.core.deref.call(null,mults);var inst_20617 = cljs.core.vals.call(null,inst_20616);var inst_20618 = cljs.core.seq.call(null,inst_20617);var inst_20619 = inst_20618;var inst_20620 = null;var inst_20621 = (0);var inst_20622 = (0);var state_20678__$1 = (function (){var statearr_20706 = state_20678;(statearr_20706[(12)] = inst_20619);
(statearr_20706[(13)] = inst_20621);
(statearr_20706[(14)] = inst_20620);
(statearr_20706[(15)] = inst_20622);
return statearr_20706;
})();var statearr_20707_20748 = state_20678__$1;(statearr_20707_20748[(2)] = null);
(statearr_20707_20748[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (14)))
{var state_20678__$1 = state_20678;var statearr_20711_20749 = state_20678__$1;(statearr_20711_20749[(2)] = null);
(statearr_20711_20749[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (16)))
{var inst_20633 = (state_20678[(10)]);var inst_20637 = cljs.core.chunk_first.call(null,inst_20633);var inst_20638 = cljs.core.chunk_rest.call(null,inst_20633);var inst_20639 = cljs.core.count.call(null,inst_20637);var inst_20619 = inst_20638;var inst_20620 = inst_20637;var inst_20621 = inst_20639;var inst_20622 = (0);var state_20678__$1 = (function (){var statearr_20712 = state_20678;(statearr_20712[(12)] = inst_20619);
(statearr_20712[(13)] = inst_20621);
(statearr_20712[(14)] = inst_20620);
(statearr_20712[(15)] = inst_20622);
return statearr_20712;
})();var statearr_20713_20750 = state_20678__$1;(statearr_20713_20750[(2)] = null);
(statearr_20713_20750[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (10)))
{var inst_20619 = (state_20678[(12)]);var inst_20621 = (state_20678[(13)]);var inst_20620 = (state_20678[(14)]);var inst_20622 = (state_20678[(15)]);var inst_20627 = cljs.core._nth.call(null,inst_20620,inst_20622);var inst_20628 = cljs.core.async.muxch_STAR_.call(null,inst_20627);var inst_20629 = cljs.core.async.close_BANG_.call(null,inst_20628);var inst_20630 = (inst_20622 + (1));var tmp20708 = inst_20619;var tmp20709 = inst_20621;var tmp20710 = inst_20620;var inst_20619__$1 = tmp20708;var inst_20620__$1 = tmp20710;var inst_20621__$1 = tmp20709;var inst_20622__$1 = inst_20630;var state_20678__$1 = (function (){var statearr_20714 = state_20678;(statearr_20714[(17)] = inst_20629);
(statearr_20714[(12)] = inst_20619__$1);
(statearr_20714[(13)] = inst_20621__$1);
(statearr_20714[(14)] = inst_20620__$1);
(statearr_20714[(15)] = inst_20622__$1);
return statearr_20714;
})();var statearr_20715_20751 = state_20678__$1;(statearr_20715_20751[(2)] = null);
(statearr_20715_20751[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (18)))
{var inst_20648 = (state_20678[(2)]);var state_20678__$1 = state_20678;var statearr_20716_20752 = state_20678__$1;(statearr_20716_20752[(2)] = inst_20648);
(statearr_20716_20752[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20679 === (8)))
{var inst_20621 = (state_20678[(13)]);var inst_20622 = (state_20678[(15)]);var inst_20624 = (inst_20622 < inst_20621);var inst_20625 = inst_20624;var state_20678__$1 = state_20678;if(cljs.core.truth_(inst_20625))
{var statearr_20717_20753 = state_20678__$1;(statearr_20717_20753[(1)] = (10));
} else
{var statearr_20718_20754 = state_20678__$1;(statearr_20718_20754[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___20726,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___20726,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20722[(0)] = state_machine__5805__auto__);
(statearr_20722[(1)] = (1));
return statearr_20722;
});
var state_machine__5805__auto____1 = (function (state_20678){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20678);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20723){if((e20723 instanceof Object))
{var ex__5808__auto__ = e20723;var statearr_20724_20755 = state_20678;(statearr_20724_20755[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20678);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20723;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20756 = state_20678;
state_20678 = G__20756;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20678){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20726,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_20725 = f__5820__auto__.call(null);(statearr_20725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20726);
return statearr_20725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20726,mults,ensure_mult,p))
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5819__auto___20893 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20863){var state_val_20864 = (state_20863[(1)]);if((state_val_20864 === (7)))
{var state_20863__$1 = state_20863;var statearr_20865_20894 = state_20863__$1;(statearr_20865_20894[(2)] = null);
(statearr_20865_20894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (1)))
{var state_20863__$1 = state_20863;var statearr_20866_20895 = state_20863__$1;(statearr_20866_20895[(2)] = null);
(statearr_20866_20895[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (4)))
{var inst_20827 = (state_20863[(7)]);var inst_20829 = (inst_20827 < cnt);var state_20863__$1 = state_20863;if(cljs.core.truth_(inst_20829))
{var statearr_20867_20896 = state_20863__$1;(statearr_20867_20896[(1)] = (6));
} else
{var statearr_20868_20897 = state_20863__$1;(statearr_20868_20897[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (15)))
{var inst_20859 = (state_20863[(2)]);var state_20863__$1 = state_20863;var statearr_20869_20898 = state_20863__$1;(statearr_20869_20898[(2)] = inst_20859);
(statearr_20869_20898[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (13)))
{var inst_20852 = cljs.core.async.close_BANG_.call(null,out);var state_20863__$1 = state_20863;var statearr_20870_20899 = state_20863__$1;(statearr_20870_20899[(2)] = inst_20852);
(statearr_20870_20899[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (6)))
{var state_20863__$1 = state_20863;var statearr_20871_20900 = state_20863__$1;(statearr_20871_20900[(2)] = null);
(statearr_20871_20900[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (3)))
{var inst_20861 = (state_20863[(2)]);var state_20863__$1 = state_20863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20863__$1,inst_20861);
} else
{if((state_val_20864 === (12)))
{var inst_20849 = (state_20863[(8)]);var inst_20849__$1 = (state_20863[(2)]);var inst_20850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20849__$1);var state_20863__$1 = (function (){var statearr_20872 = state_20863;(statearr_20872[(8)] = inst_20849__$1);
return statearr_20872;
})();if(cljs.core.truth_(inst_20850))
{var statearr_20873_20901 = state_20863__$1;(statearr_20873_20901[(1)] = (13));
} else
{var statearr_20874_20902 = state_20863__$1;(statearr_20874_20902[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (2)))
{var inst_20826 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20827 = (0);var state_20863__$1 = (function (){var statearr_20875 = state_20863;(statearr_20875[(9)] = inst_20826);
(statearr_20875[(7)] = inst_20827);
return statearr_20875;
})();var statearr_20876_20903 = state_20863__$1;(statearr_20876_20903[(2)] = null);
(statearr_20876_20903[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (11)))
{var inst_20827 = (state_20863[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20863,(10),Object,null,(9));var inst_20836 = chs__$1.call(null,inst_20827);var inst_20837 = done.call(null,inst_20827);var inst_20838 = cljs.core.async.take_BANG_.call(null,inst_20836,inst_20837);var state_20863__$1 = state_20863;var statearr_20877_20904 = state_20863__$1;(statearr_20877_20904[(2)] = inst_20838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20863__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (9)))
{var inst_20827 = (state_20863[(7)]);var inst_20840 = (state_20863[(2)]);var inst_20841 = (inst_20827 + (1));var inst_20827__$1 = inst_20841;var state_20863__$1 = (function (){var statearr_20878 = state_20863;(statearr_20878[(10)] = inst_20840);
(statearr_20878[(7)] = inst_20827__$1);
return statearr_20878;
})();var statearr_20879_20905 = state_20863__$1;(statearr_20879_20905[(2)] = null);
(statearr_20879_20905[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (5)))
{var inst_20847 = (state_20863[(2)]);var state_20863__$1 = (function (){var statearr_20880 = state_20863;(statearr_20880[(11)] = inst_20847);
return statearr_20880;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20863__$1,(12),dchan);
} else
{if((state_val_20864 === (14)))
{var inst_20849 = (state_20863[(8)]);var inst_20854 = cljs.core.apply.call(null,f,inst_20849);var state_20863__$1 = state_20863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20863__$1,(16),out,inst_20854);
} else
{if((state_val_20864 === (16)))
{var inst_20856 = (state_20863[(2)]);var state_20863__$1 = (function (){var statearr_20881 = state_20863;(statearr_20881[(12)] = inst_20856);
return statearr_20881;
})();var statearr_20882_20906 = state_20863__$1;(statearr_20882_20906[(2)] = null);
(statearr_20882_20906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (10)))
{var inst_20831 = (state_20863[(2)]);var inst_20832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20863__$1 = (function (){var statearr_20883 = state_20863;(statearr_20883[(13)] = inst_20831);
return statearr_20883;
})();var statearr_20884_20907 = state_20863__$1;(statearr_20884_20907[(2)] = inst_20832);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20863__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20864 === (8)))
{var inst_20845 = (state_20863[(2)]);var state_20863__$1 = state_20863;var statearr_20885_20908 = state_20863__$1;(statearr_20885_20908[(2)] = inst_20845);
(statearr_20885_20908[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20889[(0)] = state_machine__5805__auto__);
(statearr_20889[(1)] = (1));
return statearr_20889;
});
var state_machine__5805__auto____1 = (function (state_20863){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20890){if((e20890 instanceof Object))
{var ex__5808__auto__ = e20890;var statearr_20891_20909 = state_20863;(statearr_20891_20909[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20863);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20890;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20910 = state_20863;
state_20863 = G__20910;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20863){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_20892 = f__5820__auto__.call(null);(statearr_20892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20893);
return statearr_20892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20893,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21018,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21018,out){
return (function (state_20994){var state_val_20995 = (state_20994[(1)]);if((state_val_20995 === (7)))
{var inst_20974 = (state_20994[(7)]);var inst_20973 = (state_20994[(8)]);var inst_20973__$1 = (state_20994[(2)]);var inst_20974__$1 = cljs.core.nth.call(null,inst_20973__$1,(0),null);var inst_20975 = cljs.core.nth.call(null,inst_20973__$1,(1),null);var inst_20976 = (inst_20974__$1 == null);var state_20994__$1 = (function (){var statearr_20996 = state_20994;(statearr_20996[(7)] = inst_20974__$1);
(statearr_20996[(8)] = inst_20973__$1);
(statearr_20996[(9)] = inst_20975);
return statearr_20996;
})();if(cljs.core.truth_(inst_20976))
{var statearr_20997_21019 = state_20994__$1;(statearr_20997_21019[(1)] = (8));
} else
{var statearr_20998_21020 = state_20994__$1;(statearr_20998_21020[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (1)))
{var inst_20965 = cljs.core.vec.call(null,chs);var inst_20966 = inst_20965;var state_20994__$1 = (function (){var statearr_20999 = state_20994;(statearr_20999[(10)] = inst_20966);
return statearr_20999;
})();var statearr_21000_21021 = state_20994__$1;(statearr_21000_21021[(2)] = null);
(statearr_21000_21021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (4)))
{var inst_20966 = (state_20994[(10)]);var state_20994__$1 = state_20994;return cljs.core.async.ioc_alts_BANG_.call(null,state_20994__$1,(7),inst_20966);
} else
{if((state_val_20995 === (6)))
{var inst_20990 = (state_20994[(2)]);var state_20994__$1 = state_20994;var statearr_21001_21022 = state_20994__$1;(statearr_21001_21022[(2)] = inst_20990);
(statearr_21001_21022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (3)))
{var inst_20992 = (state_20994[(2)]);var state_20994__$1 = state_20994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20994__$1,inst_20992);
} else
{if((state_val_20995 === (2)))
{var inst_20966 = (state_20994[(10)]);var inst_20968 = cljs.core.count.call(null,inst_20966);var inst_20969 = (inst_20968 > (0));var state_20994__$1 = state_20994;if(cljs.core.truth_(inst_20969))
{var statearr_21003_21023 = state_20994__$1;(statearr_21003_21023[(1)] = (4));
} else
{var statearr_21004_21024 = state_20994__$1;(statearr_21004_21024[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (11)))
{var inst_20966 = (state_20994[(10)]);var inst_20983 = (state_20994[(2)]);var tmp21002 = inst_20966;var inst_20966__$1 = tmp21002;var state_20994__$1 = (function (){var statearr_21005 = state_20994;(statearr_21005[(10)] = inst_20966__$1);
(statearr_21005[(11)] = inst_20983);
return statearr_21005;
})();var statearr_21006_21025 = state_20994__$1;(statearr_21006_21025[(2)] = null);
(statearr_21006_21025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (9)))
{var inst_20974 = (state_20994[(7)]);var state_20994__$1 = state_20994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20994__$1,(11),out,inst_20974);
} else
{if((state_val_20995 === (5)))
{var inst_20988 = cljs.core.async.close_BANG_.call(null,out);var state_20994__$1 = state_20994;var statearr_21007_21026 = state_20994__$1;(statearr_21007_21026[(2)] = inst_20988);
(statearr_21007_21026[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (10)))
{var inst_20986 = (state_20994[(2)]);var state_20994__$1 = state_20994;var statearr_21008_21027 = state_20994__$1;(statearr_21008_21027[(2)] = inst_20986);
(statearr_21008_21027[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20995 === (8)))
{var inst_20974 = (state_20994[(7)]);var inst_20966 = (state_20994[(10)]);var inst_20973 = (state_20994[(8)]);var inst_20975 = (state_20994[(9)]);var inst_20978 = (function (){var c = inst_20975;var v = inst_20974;var vec__20971 = inst_20973;var cs = inst_20966;return ((function (c,v,vec__20971,cs,inst_20974,inst_20966,inst_20973,inst_20975,state_val_20995,c__5819__auto___21018,out){
return (function (p1__20911_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20911_SHARP_);
});
;})(c,v,vec__20971,cs,inst_20974,inst_20966,inst_20973,inst_20975,state_val_20995,c__5819__auto___21018,out))
})();var inst_20979 = cljs.core.filterv.call(null,inst_20978,inst_20966);var inst_20966__$1 = inst_20979;var state_20994__$1 = (function (){var statearr_21009 = state_20994;(statearr_21009[(10)] = inst_20966__$1);
return statearr_21009;
})();var statearr_21010_21028 = state_20994__$1;(statearr_21010_21028[(2)] = null);
(statearr_21010_21028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___21018,out))
;return ((function (switch__5804__auto__,c__5819__auto___21018,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21014 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21014[(0)] = state_machine__5805__auto__);
(statearr_21014[(1)] = (1));
return statearr_21014;
});
var state_machine__5805__auto____1 = (function (state_20994){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21015){if((e21015 instanceof Object))
{var ex__5808__auto__ = e21015;var statearr_21016_21029 = state_20994;(statearr_21016_21029[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20994);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21030 = state_20994;
state_20994 = G__21030;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20994){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21018,out))
})();var state__5821__auto__ = (function (){var statearr_21017 = f__5820__auto__.call(null);(statearr_21017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21018);
return statearr_21017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21018,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21123 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21123,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21123,out){
return (function (state_21100){var state_val_21101 = (state_21100[(1)]);if((state_val_21101 === (7)))
{var inst_21082 = (state_21100[(7)]);var inst_21082__$1 = (state_21100[(2)]);var inst_21083 = (inst_21082__$1 == null);var inst_21084 = cljs.core.not.call(null,inst_21083);var state_21100__$1 = (function (){var statearr_21102 = state_21100;(statearr_21102[(7)] = inst_21082__$1);
return statearr_21102;
})();if(inst_21084)
{var statearr_21103_21124 = state_21100__$1;(statearr_21103_21124[(1)] = (8));
} else
{var statearr_21104_21125 = state_21100__$1;(statearr_21104_21125[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (1)))
{var inst_21077 = (0);var state_21100__$1 = (function (){var statearr_21105 = state_21100;(statearr_21105[(8)] = inst_21077);
return statearr_21105;
})();var statearr_21106_21126 = state_21100__$1;(statearr_21106_21126[(2)] = null);
(statearr_21106_21126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (4)))
{var state_21100__$1 = state_21100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21100__$1,(7),ch);
} else
{if((state_val_21101 === (6)))
{var inst_21095 = (state_21100[(2)]);var state_21100__$1 = state_21100;var statearr_21107_21127 = state_21100__$1;(statearr_21107_21127[(2)] = inst_21095);
(statearr_21107_21127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (3)))
{var inst_21097 = (state_21100[(2)]);var inst_21098 = cljs.core.async.close_BANG_.call(null,out);var state_21100__$1 = (function (){var statearr_21108 = state_21100;(statearr_21108[(9)] = inst_21097);
return statearr_21108;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21100__$1,inst_21098);
} else
{if((state_val_21101 === (2)))
{var inst_21077 = (state_21100[(8)]);var inst_21079 = (inst_21077 < n);var state_21100__$1 = state_21100;if(cljs.core.truth_(inst_21079))
{var statearr_21109_21128 = state_21100__$1;(statearr_21109_21128[(1)] = (4));
} else
{var statearr_21110_21129 = state_21100__$1;(statearr_21110_21129[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (11)))
{var inst_21077 = (state_21100[(8)]);var inst_21087 = (state_21100[(2)]);var inst_21088 = (inst_21077 + (1));var inst_21077__$1 = inst_21088;var state_21100__$1 = (function (){var statearr_21111 = state_21100;(statearr_21111[(8)] = inst_21077__$1);
(statearr_21111[(10)] = inst_21087);
return statearr_21111;
})();var statearr_21112_21130 = state_21100__$1;(statearr_21112_21130[(2)] = null);
(statearr_21112_21130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (9)))
{var state_21100__$1 = state_21100;var statearr_21113_21131 = state_21100__$1;(statearr_21113_21131[(2)] = null);
(statearr_21113_21131[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (5)))
{var state_21100__$1 = state_21100;var statearr_21114_21132 = state_21100__$1;(statearr_21114_21132[(2)] = null);
(statearr_21114_21132[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (10)))
{var inst_21092 = (state_21100[(2)]);var state_21100__$1 = state_21100;var statearr_21115_21133 = state_21100__$1;(statearr_21115_21133[(2)] = inst_21092);
(statearr_21115_21133[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21101 === (8)))
{var inst_21082 = (state_21100[(7)]);var state_21100__$1 = state_21100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21100__$1,(11),out,inst_21082);
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
});})(c__5819__auto___21123,out))
;return ((function (switch__5804__auto__,c__5819__auto___21123,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21119 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21119[(0)] = state_machine__5805__auto__);
(statearr_21119[(1)] = (1));
return statearr_21119;
});
var state_machine__5805__auto____1 = (function (state_21100){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21120){if((e21120 instanceof Object))
{var ex__5808__auto__ = e21120;var statearr_21121_21134 = state_21100;(statearr_21121_21134[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21120;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21135 = state_21100;
state_21100 = G__21135;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21100){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21123,out))
})();var state__5821__auto__ = (function (){var statearr_21122 = f__5820__auto__.call(null);(statearr_21122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21123);
return statearr_21122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21123,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21143 = (function (ch,f,map_LT_,meta21144){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21144 = meta21144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21143.cljs$lang$type = true;
cljs.core.async.t21143.cljs$lang$ctorStr = "cljs.core.async/t21143";
cljs.core.async.t21143.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21143");
});
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21146 = (function (fn1,_,meta21144,ch,f,map_LT_,meta21147){
this.fn1 = fn1;
this._ = _;
this.meta21144 = meta21144;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21147 = meta21147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21146.cljs$lang$type = true;
cljs.core.async.t21146.cljs$lang$ctorStr = "cljs.core.async/t21146";
cljs.core.async.t21146.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21146");
});})(___$1))
;
cljs.core.async.t21146.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21136_SHARP_){return f1.call(null,(((p1__21136_SHARP_ == null))?null:self__.f.call(null,p1__21136_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21148){var self__ = this;
var _21148__$1 = this;return self__.meta21147;
});})(___$1))
;
cljs.core.async.t21146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21148,meta21147__$1){var self__ = this;
var _21148__$1 = this;return (new cljs.core.async.t21146(self__.fn1,self__._,self__.meta21144,self__.ch,self__.f,self__.map_LT_,meta21147__$1));
});})(___$1))
;
cljs.core.async.__GT_t21146 = ((function (___$1){
return (function __GT_t21146(fn1__$1,___$2,meta21144__$1,ch__$2,f__$2,map_LT___$2,meta21147){return (new cljs.core.async.t21146(fn1__$1,___$2,meta21144__$1,ch__$2,f__$2,map_LT___$2,meta21147));
});})(___$1))
;
}
return (new cljs.core.async.t21146(fn1,___$1,self__.meta21144,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3625__auto__ = ret;if(cljs.core.truth_(and__3625__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3625__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21145){var self__ = this;
var _21145__$1 = this;return self__.meta21144;
});
cljs.core.async.t21143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21145,meta21144__$1){var self__ = this;
var _21145__$1 = this;return (new cljs.core.async.t21143(self__.ch,self__.f,self__.map_LT_,meta21144__$1));
});
cljs.core.async.__GT_t21143 = (function __GT_t21143(ch__$1,f__$1,map_LT___$1,meta21144){return (new cljs.core.async.t21143(ch__$1,f__$1,map_LT___$1,meta21144));
});
}
return (new cljs.core.async.t21143(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21152 = (function (ch,f,map_GT_,meta21153){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21153 = meta21153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21152.cljs$lang$type = true;
cljs.core.async.t21152.cljs$lang$ctorStr = "cljs.core.async/t21152";
cljs.core.async.t21152.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21152");
});
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21154){var self__ = this;
var _21154__$1 = this;return self__.meta21153;
});
cljs.core.async.t21152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21154,meta21153__$1){var self__ = this;
var _21154__$1 = this;return (new cljs.core.async.t21152(self__.ch,self__.f,self__.map_GT_,meta21153__$1));
});
cljs.core.async.__GT_t21152 = (function __GT_t21152(ch__$1,f__$1,map_GT___$1,meta21153){return (new cljs.core.async.t21152(ch__$1,f__$1,map_GT___$1,meta21153));
});
}
return (new cljs.core.async.t21152(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21158 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21158 = (function (ch,p,filter_GT_,meta21159){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21159 = meta21159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21158.cljs$lang$type = true;
cljs.core.async.t21158.cljs$lang$ctorStr = "cljs.core.async/t21158";
cljs.core.async.t21158.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21158");
});
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21158.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21160){var self__ = this;
var _21160__$1 = this;return self__.meta21159;
});
cljs.core.async.t21158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21160,meta21159__$1){var self__ = this;
var _21160__$1 = this;return (new cljs.core.async.t21158(self__.ch,self__.p,self__.filter_GT_,meta21159__$1));
});
cljs.core.async.__GT_t21158 = (function __GT_t21158(ch__$1,p__$1,filter_GT___$1,meta21159){return (new cljs.core.async.t21158(ch__$1,p__$1,filter_GT___$1,meta21159));
});
}
return (new cljs.core.async.t21158(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21243 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21243,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21243,out){
return (function (state_21222){var state_val_21223 = (state_21222[(1)]);if((state_val_21223 === (7)))
{var inst_21218 = (state_21222[(2)]);var state_21222__$1 = state_21222;var statearr_21224_21244 = state_21222__$1;(statearr_21224_21244[(2)] = inst_21218);
(statearr_21224_21244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (1)))
{var state_21222__$1 = state_21222;var statearr_21225_21245 = state_21222__$1;(statearr_21225_21245[(2)] = null);
(statearr_21225_21245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (4)))
{var inst_21204 = (state_21222[(7)]);var inst_21204__$1 = (state_21222[(2)]);var inst_21205 = (inst_21204__$1 == null);var state_21222__$1 = (function (){var statearr_21226 = state_21222;(statearr_21226[(7)] = inst_21204__$1);
return statearr_21226;
})();if(cljs.core.truth_(inst_21205))
{var statearr_21227_21246 = state_21222__$1;(statearr_21227_21246[(1)] = (5));
} else
{var statearr_21228_21247 = state_21222__$1;(statearr_21228_21247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (6)))
{var inst_21204 = (state_21222[(7)]);var inst_21209 = p.call(null,inst_21204);var state_21222__$1 = state_21222;if(cljs.core.truth_(inst_21209))
{var statearr_21229_21248 = state_21222__$1;(statearr_21229_21248[(1)] = (8));
} else
{var statearr_21230_21249 = state_21222__$1;(statearr_21230_21249[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (3)))
{var inst_21220 = (state_21222[(2)]);var state_21222__$1 = state_21222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21222__$1,inst_21220);
} else
{if((state_val_21223 === (2)))
{var state_21222__$1 = state_21222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21222__$1,(4),ch);
} else
{if((state_val_21223 === (11)))
{var inst_21212 = (state_21222[(2)]);var state_21222__$1 = state_21222;var statearr_21231_21250 = state_21222__$1;(statearr_21231_21250[(2)] = inst_21212);
(statearr_21231_21250[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (9)))
{var state_21222__$1 = state_21222;var statearr_21232_21251 = state_21222__$1;(statearr_21232_21251[(2)] = null);
(statearr_21232_21251[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (5)))
{var inst_21207 = cljs.core.async.close_BANG_.call(null,out);var state_21222__$1 = state_21222;var statearr_21233_21252 = state_21222__$1;(statearr_21233_21252[(2)] = inst_21207);
(statearr_21233_21252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (10)))
{var inst_21215 = (state_21222[(2)]);var state_21222__$1 = (function (){var statearr_21234 = state_21222;(statearr_21234[(8)] = inst_21215);
return statearr_21234;
})();var statearr_21235_21253 = state_21222__$1;(statearr_21235_21253[(2)] = null);
(statearr_21235_21253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21223 === (8)))
{var inst_21204 = (state_21222[(7)]);var state_21222__$1 = state_21222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21222__$1,(11),out,inst_21204);
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
});})(c__5819__auto___21243,out))
;return ((function (switch__5804__auto__,c__5819__auto___21243,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21239 = [null,null,null,null,null,null,null,null,null];(statearr_21239[(0)] = state_machine__5805__auto__);
(statearr_21239[(1)] = (1));
return statearr_21239;
});
var state_machine__5805__auto____1 = (function (state_21222){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21222);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21240){if((e21240 instanceof Object))
{var ex__5808__auto__ = e21240;var statearr_21241_21254 = state_21222;(statearr_21241_21254[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21255 = state_21222;
state_21222 = G__21255;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21222){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21243,out))
})();var state__5821__auto__ = (function (){var statearr_21242 = f__5820__auto__.call(null);(statearr_21242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21243);
return statearr_21242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21243,out))
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
* Deprecated - this function will be removed. Use transducer instead
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__){
return (function (state_21421){var state_val_21422 = (state_21421[(1)]);if((state_val_21422 === (7)))
{var inst_21417 = (state_21421[(2)]);var state_21421__$1 = state_21421;var statearr_21423_21464 = state_21421__$1;(statearr_21423_21464[(2)] = inst_21417);
(statearr_21423_21464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (20)))
{var inst_21387 = (state_21421[(7)]);var inst_21398 = (state_21421[(2)]);var inst_21399 = cljs.core.next.call(null,inst_21387);var inst_21373 = inst_21399;var inst_21374 = null;var inst_21375 = (0);var inst_21376 = (0);var state_21421__$1 = (function (){var statearr_21424 = state_21421;(statearr_21424[(8)] = inst_21376);
(statearr_21424[(9)] = inst_21398);
(statearr_21424[(10)] = inst_21373);
(statearr_21424[(11)] = inst_21375);
(statearr_21424[(12)] = inst_21374);
return statearr_21424;
})();var statearr_21425_21465 = state_21421__$1;(statearr_21425_21465[(2)] = null);
(statearr_21425_21465[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (1)))
{var state_21421__$1 = state_21421;var statearr_21426_21466 = state_21421__$1;(statearr_21426_21466[(2)] = null);
(statearr_21426_21466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (4)))
{var inst_21362 = (state_21421[(13)]);var inst_21362__$1 = (state_21421[(2)]);var inst_21363 = (inst_21362__$1 == null);var state_21421__$1 = (function (){var statearr_21427 = state_21421;(statearr_21427[(13)] = inst_21362__$1);
return statearr_21427;
})();if(cljs.core.truth_(inst_21363))
{var statearr_21428_21467 = state_21421__$1;(statearr_21428_21467[(1)] = (5));
} else
{var statearr_21429_21468 = state_21421__$1;(statearr_21429_21468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (15)))
{var state_21421__$1 = state_21421;var statearr_21433_21469 = state_21421__$1;(statearr_21433_21469[(2)] = null);
(statearr_21433_21469[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (21)))
{var state_21421__$1 = state_21421;var statearr_21434_21470 = state_21421__$1;(statearr_21434_21470[(2)] = null);
(statearr_21434_21470[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (13)))
{var inst_21376 = (state_21421[(8)]);var inst_21373 = (state_21421[(10)]);var inst_21375 = (state_21421[(11)]);var inst_21374 = (state_21421[(12)]);var inst_21383 = (state_21421[(2)]);var inst_21384 = (inst_21376 + (1));var tmp21430 = inst_21373;var tmp21431 = inst_21375;var tmp21432 = inst_21374;var inst_21373__$1 = tmp21430;var inst_21374__$1 = tmp21432;var inst_21375__$1 = tmp21431;var inst_21376__$1 = inst_21384;var state_21421__$1 = (function (){var statearr_21435 = state_21421;(statearr_21435[(8)] = inst_21376__$1);
(statearr_21435[(10)] = inst_21373__$1);
(statearr_21435[(11)] = inst_21375__$1);
(statearr_21435[(12)] = inst_21374__$1);
(statearr_21435[(14)] = inst_21383);
return statearr_21435;
})();var statearr_21436_21471 = state_21421__$1;(statearr_21436_21471[(2)] = null);
(statearr_21436_21471[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (22)))
{var state_21421__$1 = state_21421;var statearr_21437_21472 = state_21421__$1;(statearr_21437_21472[(2)] = null);
(statearr_21437_21472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (6)))
{var inst_21362 = (state_21421[(13)]);var inst_21371 = f.call(null,inst_21362);var inst_21372 = cljs.core.seq.call(null,inst_21371);var inst_21373 = inst_21372;var inst_21374 = null;var inst_21375 = (0);var inst_21376 = (0);var state_21421__$1 = (function (){var statearr_21438 = state_21421;(statearr_21438[(8)] = inst_21376);
(statearr_21438[(10)] = inst_21373);
(statearr_21438[(11)] = inst_21375);
(statearr_21438[(12)] = inst_21374);
return statearr_21438;
})();var statearr_21439_21473 = state_21421__$1;(statearr_21439_21473[(2)] = null);
(statearr_21439_21473[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (17)))
{var inst_21387 = (state_21421[(7)]);var inst_21391 = cljs.core.chunk_first.call(null,inst_21387);var inst_21392 = cljs.core.chunk_rest.call(null,inst_21387);var inst_21393 = cljs.core.count.call(null,inst_21391);var inst_21373 = inst_21392;var inst_21374 = inst_21391;var inst_21375 = inst_21393;var inst_21376 = (0);var state_21421__$1 = (function (){var statearr_21440 = state_21421;(statearr_21440[(8)] = inst_21376);
(statearr_21440[(10)] = inst_21373);
(statearr_21440[(11)] = inst_21375);
(statearr_21440[(12)] = inst_21374);
return statearr_21440;
})();var statearr_21441_21474 = state_21421__$1;(statearr_21441_21474[(2)] = null);
(statearr_21441_21474[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (3)))
{var inst_21419 = (state_21421[(2)]);var state_21421__$1 = state_21421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21421__$1,inst_21419);
} else
{if((state_val_21422 === (12)))
{var inst_21407 = (state_21421[(2)]);var state_21421__$1 = state_21421;var statearr_21442_21475 = state_21421__$1;(statearr_21442_21475[(2)] = inst_21407);
(statearr_21442_21475[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (2)))
{var state_21421__$1 = state_21421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21421__$1,(4),in$);
} else
{if((state_val_21422 === (23)))
{var inst_21415 = (state_21421[(2)]);var state_21421__$1 = state_21421;var statearr_21443_21476 = state_21421__$1;(statearr_21443_21476[(2)] = inst_21415);
(statearr_21443_21476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (19)))
{var inst_21402 = (state_21421[(2)]);var state_21421__$1 = state_21421;var statearr_21444_21477 = state_21421__$1;(statearr_21444_21477[(2)] = inst_21402);
(statearr_21444_21477[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (11)))
{var inst_21373 = (state_21421[(10)]);var inst_21387 = (state_21421[(7)]);var inst_21387__$1 = cljs.core.seq.call(null,inst_21373);var state_21421__$1 = (function (){var statearr_21445 = state_21421;(statearr_21445[(7)] = inst_21387__$1);
return statearr_21445;
})();if(inst_21387__$1)
{var statearr_21446_21478 = state_21421__$1;(statearr_21446_21478[(1)] = (14));
} else
{var statearr_21447_21479 = state_21421__$1;(statearr_21447_21479[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (9)))
{var inst_21409 = (state_21421[(2)]);var inst_21410 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21421__$1 = (function (){var statearr_21448 = state_21421;(statearr_21448[(15)] = inst_21409);
return statearr_21448;
})();if(cljs.core.truth_(inst_21410))
{var statearr_21449_21480 = state_21421__$1;(statearr_21449_21480[(1)] = (21));
} else
{var statearr_21450_21481 = state_21421__$1;(statearr_21450_21481[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (5)))
{var inst_21365 = cljs.core.async.close_BANG_.call(null,out);var state_21421__$1 = state_21421;var statearr_21451_21482 = state_21421__$1;(statearr_21451_21482[(2)] = inst_21365);
(statearr_21451_21482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (14)))
{var inst_21387 = (state_21421[(7)]);var inst_21389 = cljs.core.chunked_seq_QMARK_.call(null,inst_21387);var state_21421__$1 = state_21421;if(inst_21389)
{var statearr_21452_21483 = state_21421__$1;(statearr_21452_21483[(1)] = (17));
} else
{var statearr_21453_21484 = state_21421__$1;(statearr_21453_21484[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (16)))
{var inst_21405 = (state_21421[(2)]);var state_21421__$1 = state_21421;var statearr_21454_21485 = state_21421__$1;(statearr_21454_21485[(2)] = inst_21405);
(statearr_21454_21485[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21422 === (10)))
{var inst_21376 = (state_21421[(8)]);var inst_21374 = (state_21421[(12)]);var inst_21381 = cljs.core._nth.call(null,inst_21374,inst_21376);var state_21421__$1 = state_21421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21421__$1,(13),out,inst_21381);
} else
{if((state_val_21422 === (18)))
{var inst_21387 = (state_21421[(7)]);var inst_21396 = cljs.core.first.call(null,inst_21387);var state_21421__$1 = state_21421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21421__$1,(20),out,inst_21396);
} else
{if((state_val_21422 === (8)))
{var inst_21376 = (state_21421[(8)]);var inst_21375 = (state_21421[(11)]);var inst_21378 = (inst_21376 < inst_21375);var inst_21379 = inst_21378;var state_21421__$1 = state_21421;if(cljs.core.truth_(inst_21379))
{var statearr_21455_21486 = state_21421__$1;(statearr_21455_21486[(1)] = (10));
} else
{var statearr_21456_21487 = state_21421__$1;(statearr_21456_21487[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto__))
;return ((function (switch__5804__auto__,c__5819__auto__){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21460[(0)] = state_machine__5805__auto__);
(statearr_21460[(1)] = (1));
return statearr_21460;
});
var state_machine__5805__auto____1 = (function (state_21421){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21421);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object))
{var ex__5808__auto__ = e21461;var statearr_21462_21488 = state_21421;(statearr_21462_21488[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21421);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21489 = state_21421;
state_21421 = G__21489;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21421){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_21463 = f__5820__auto__.call(null);(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_21463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__))
);
return c__5819__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21586 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21586,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21586,out){
return (function (state_21561){var state_val_21562 = (state_21561[(1)]);if((state_val_21562 === (7)))
{var inst_21556 = (state_21561[(2)]);var state_21561__$1 = state_21561;var statearr_21563_21587 = state_21561__$1;(statearr_21563_21587[(2)] = inst_21556);
(statearr_21563_21587[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (1)))
{var inst_21538 = null;var state_21561__$1 = (function (){var statearr_21564 = state_21561;(statearr_21564[(7)] = inst_21538);
return statearr_21564;
})();var statearr_21565_21588 = state_21561__$1;(statearr_21565_21588[(2)] = null);
(statearr_21565_21588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (4)))
{var inst_21541 = (state_21561[(8)]);var inst_21541__$1 = (state_21561[(2)]);var inst_21542 = (inst_21541__$1 == null);var inst_21543 = cljs.core.not.call(null,inst_21542);var state_21561__$1 = (function (){var statearr_21566 = state_21561;(statearr_21566[(8)] = inst_21541__$1);
return statearr_21566;
})();if(inst_21543)
{var statearr_21567_21589 = state_21561__$1;(statearr_21567_21589[(1)] = (5));
} else
{var statearr_21568_21590 = state_21561__$1;(statearr_21568_21590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (6)))
{var state_21561__$1 = state_21561;var statearr_21569_21591 = state_21561__$1;(statearr_21569_21591[(2)] = null);
(statearr_21569_21591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (3)))
{var inst_21558 = (state_21561[(2)]);var inst_21559 = cljs.core.async.close_BANG_.call(null,out);var state_21561__$1 = (function (){var statearr_21570 = state_21561;(statearr_21570[(9)] = inst_21558);
return statearr_21570;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21561__$1,inst_21559);
} else
{if((state_val_21562 === (2)))
{var state_21561__$1 = state_21561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21561__$1,(4),ch);
} else
{if((state_val_21562 === (11)))
{var inst_21541 = (state_21561[(8)]);var inst_21550 = (state_21561[(2)]);var inst_21538 = inst_21541;var state_21561__$1 = (function (){var statearr_21571 = state_21561;(statearr_21571[(7)] = inst_21538);
(statearr_21571[(10)] = inst_21550);
return statearr_21571;
})();var statearr_21572_21592 = state_21561__$1;(statearr_21572_21592[(2)] = null);
(statearr_21572_21592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (9)))
{var inst_21541 = (state_21561[(8)]);var state_21561__$1 = state_21561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21561__$1,(11),out,inst_21541);
} else
{if((state_val_21562 === (5)))
{var inst_21538 = (state_21561[(7)]);var inst_21541 = (state_21561[(8)]);var inst_21545 = cljs.core._EQ_.call(null,inst_21541,inst_21538);var state_21561__$1 = state_21561;if(inst_21545)
{var statearr_21574_21593 = state_21561__$1;(statearr_21574_21593[(1)] = (8));
} else
{var statearr_21575_21594 = state_21561__$1;(statearr_21575_21594[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (10)))
{var inst_21553 = (state_21561[(2)]);var state_21561__$1 = state_21561;var statearr_21576_21595 = state_21561__$1;(statearr_21576_21595[(2)] = inst_21553);
(statearr_21576_21595[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21562 === (8)))
{var inst_21538 = (state_21561[(7)]);var tmp21573 = inst_21538;var inst_21538__$1 = tmp21573;var state_21561__$1 = (function (){var statearr_21577 = state_21561;(statearr_21577[(7)] = inst_21538__$1);
return statearr_21577;
})();var statearr_21578_21596 = state_21561__$1;(statearr_21578_21596[(2)] = null);
(statearr_21578_21596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___21586,out))
;return ((function (switch__5804__auto__,c__5819__auto___21586,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21582[(0)] = state_machine__5805__auto__);
(statearr_21582[(1)] = (1));
return statearr_21582;
});
var state_machine__5805__auto____1 = (function (state_21561){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21583){if((e21583 instanceof Object))
{var ex__5808__auto__ = e21583;var statearr_21584_21597 = state_21561;(statearr_21584_21597[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21583;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21598 = state_21561;
state_21561 = G__21598;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21561){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21586,out))
})();var state__5821__auto__ = (function (){var statearr_21585 = f__5820__auto__.call(null);(statearr_21585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21586);
return statearr_21585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21586,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21733,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21733,out){
return (function (state_21703){var state_val_21704 = (state_21703[(1)]);if((state_val_21704 === (7)))
{var inst_21699 = (state_21703[(2)]);var state_21703__$1 = state_21703;var statearr_21705_21734 = state_21703__$1;(statearr_21705_21734[(2)] = inst_21699);
(statearr_21705_21734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (1)))
{var inst_21666 = (new Array(n));var inst_21667 = inst_21666;var inst_21668 = (0);var state_21703__$1 = (function (){var statearr_21706 = state_21703;(statearr_21706[(7)] = inst_21668);
(statearr_21706[(8)] = inst_21667);
return statearr_21706;
})();var statearr_21707_21735 = state_21703__$1;(statearr_21707_21735[(2)] = null);
(statearr_21707_21735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (4)))
{var inst_21671 = (state_21703[(9)]);var inst_21671__$1 = (state_21703[(2)]);var inst_21672 = (inst_21671__$1 == null);var inst_21673 = cljs.core.not.call(null,inst_21672);var state_21703__$1 = (function (){var statearr_21708 = state_21703;(statearr_21708[(9)] = inst_21671__$1);
return statearr_21708;
})();if(inst_21673)
{var statearr_21709_21736 = state_21703__$1;(statearr_21709_21736[(1)] = (5));
} else
{var statearr_21710_21737 = state_21703__$1;(statearr_21710_21737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (15)))
{var inst_21693 = (state_21703[(2)]);var state_21703__$1 = state_21703;var statearr_21711_21738 = state_21703__$1;(statearr_21711_21738[(2)] = inst_21693);
(statearr_21711_21738[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (13)))
{var state_21703__$1 = state_21703;var statearr_21712_21739 = state_21703__$1;(statearr_21712_21739[(2)] = null);
(statearr_21712_21739[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (6)))
{var inst_21668 = (state_21703[(7)]);var inst_21689 = (inst_21668 > (0));var state_21703__$1 = state_21703;if(cljs.core.truth_(inst_21689))
{var statearr_21713_21740 = state_21703__$1;(statearr_21713_21740[(1)] = (12));
} else
{var statearr_21714_21741 = state_21703__$1;(statearr_21714_21741[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (3)))
{var inst_21701 = (state_21703[(2)]);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21703__$1,inst_21701);
} else
{if((state_val_21704 === (12)))
{var inst_21667 = (state_21703[(8)]);var inst_21691 = cljs.core.vec.call(null,inst_21667);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,(15),out,inst_21691);
} else
{if((state_val_21704 === (2)))
{var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21703__$1,(4),ch);
} else
{if((state_val_21704 === (11)))
{var inst_21683 = (state_21703[(2)]);var inst_21684 = (new Array(n));var inst_21667 = inst_21684;var inst_21668 = (0);var state_21703__$1 = (function (){var statearr_21715 = state_21703;(statearr_21715[(10)] = inst_21683);
(statearr_21715[(7)] = inst_21668);
(statearr_21715[(8)] = inst_21667);
return statearr_21715;
})();var statearr_21716_21742 = state_21703__$1;(statearr_21716_21742[(2)] = null);
(statearr_21716_21742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (9)))
{var inst_21667 = (state_21703[(8)]);var inst_21681 = cljs.core.vec.call(null,inst_21667);var state_21703__$1 = state_21703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21703__$1,(11),out,inst_21681);
} else
{if((state_val_21704 === (5)))
{var inst_21676 = (state_21703[(11)]);var inst_21668 = (state_21703[(7)]);var inst_21671 = (state_21703[(9)]);var inst_21667 = (state_21703[(8)]);var inst_21675 = (inst_21667[inst_21668] = inst_21671);var inst_21676__$1 = (inst_21668 + (1));var inst_21677 = (inst_21676__$1 < n);var state_21703__$1 = (function (){var statearr_21717 = state_21703;(statearr_21717[(12)] = inst_21675);
(statearr_21717[(11)] = inst_21676__$1);
return statearr_21717;
})();if(cljs.core.truth_(inst_21677))
{var statearr_21718_21743 = state_21703__$1;(statearr_21718_21743[(1)] = (8));
} else
{var statearr_21719_21744 = state_21703__$1;(statearr_21719_21744[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (14)))
{var inst_21696 = (state_21703[(2)]);var inst_21697 = cljs.core.async.close_BANG_.call(null,out);var state_21703__$1 = (function (){var statearr_21721 = state_21703;(statearr_21721[(13)] = inst_21696);
return statearr_21721;
})();var statearr_21722_21745 = state_21703__$1;(statearr_21722_21745[(2)] = inst_21697);
(statearr_21722_21745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (10)))
{var inst_21687 = (state_21703[(2)]);var state_21703__$1 = state_21703;var statearr_21723_21746 = state_21703__$1;(statearr_21723_21746[(2)] = inst_21687);
(statearr_21723_21746[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21704 === (8)))
{var inst_21676 = (state_21703[(11)]);var inst_21667 = (state_21703[(8)]);var tmp21720 = inst_21667;var inst_21667__$1 = tmp21720;var inst_21668 = inst_21676;var state_21703__$1 = (function (){var statearr_21724 = state_21703;(statearr_21724[(7)] = inst_21668);
(statearr_21724[(8)] = inst_21667__$1);
return statearr_21724;
})();var statearr_21725_21747 = state_21703__$1;(statearr_21725_21747[(2)] = null);
(statearr_21725_21747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___21733,out))
;return ((function (switch__5804__auto__,c__5819__auto___21733,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21729[(0)] = state_machine__5805__auto__);
(statearr_21729[(1)] = (1));
return statearr_21729;
});
var state_machine__5805__auto____1 = (function (state_21703){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21703);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21730){if((e21730 instanceof Object))
{var ex__5808__auto__ = e21730;var statearr_21731_21748 = state_21703;(statearr_21731_21748[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21749 = state_21703;
state_21703 = G__21749;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21703){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21733,out))
})();var state__5821__auto__ = (function (){var statearr_21732 = f__5820__auto__.call(null);(statearr_21732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21733);
return statearr_21732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21733,out))
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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21892 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21892,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21892,out){
return (function (state_21862){var state_val_21863 = (state_21862[(1)]);if((state_val_21863 === (7)))
{var inst_21858 = (state_21862[(2)]);var state_21862__$1 = state_21862;var statearr_21864_21893 = state_21862__$1;(statearr_21864_21893[(2)] = inst_21858);
(statearr_21864_21893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (1)))
{var inst_21821 = [];var inst_21822 = inst_21821;var inst_21823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21862__$1 = (function (){var statearr_21865 = state_21862;(statearr_21865[(7)] = inst_21822);
(statearr_21865[(8)] = inst_21823);
return statearr_21865;
})();var statearr_21866_21894 = state_21862__$1;(statearr_21866_21894[(2)] = null);
(statearr_21866_21894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (4)))
{var inst_21826 = (state_21862[(9)]);var inst_21826__$1 = (state_21862[(2)]);var inst_21827 = (inst_21826__$1 == null);var inst_21828 = cljs.core.not.call(null,inst_21827);var state_21862__$1 = (function (){var statearr_21867 = state_21862;(statearr_21867[(9)] = inst_21826__$1);
return statearr_21867;
})();if(inst_21828)
{var statearr_21868_21895 = state_21862__$1;(statearr_21868_21895[(1)] = (5));
} else
{var statearr_21869_21896 = state_21862__$1;(statearr_21869_21896[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (15)))
{var inst_21852 = (state_21862[(2)]);var state_21862__$1 = state_21862;var statearr_21870_21897 = state_21862__$1;(statearr_21870_21897[(2)] = inst_21852);
(statearr_21870_21897[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (13)))
{var state_21862__$1 = state_21862;var statearr_21871_21898 = state_21862__$1;(statearr_21871_21898[(2)] = null);
(statearr_21871_21898[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (6)))
{var inst_21822 = (state_21862[(7)]);var inst_21847 = inst_21822.length;var inst_21848 = (inst_21847 > (0));var state_21862__$1 = state_21862;if(cljs.core.truth_(inst_21848))
{var statearr_21872_21899 = state_21862__$1;(statearr_21872_21899[(1)] = (12));
} else
{var statearr_21873_21900 = state_21862__$1;(statearr_21873_21900[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (3)))
{var inst_21860 = (state_21862[(2)]);var state_21862__$1 = state_21862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21862__$1,inst_21860);
} else
{if((state_val_21863 === (12)))
{var inst_21822 = (state_21862[(7)]);var inst_21850 = cljs.core.vec.call(null,inst_21822);var state_21862__$1 = state_21862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21862__$1,(15),out,inst_21850);
} else
{if((state_val_21863 === (2)))
{var state_21862__$1 = state_21862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21862__$1,(4),ch);
} else
{if((state_val_21863 === (11)))
{var inst_21830 = (state_21862[(10)]);var inst_21826 = (state_21862[(9)]);var inst_21840 = (state_21862[(2)]);var inst_21841 = [];var inst_21842 = inst_21841.push(inst_21826);var inst_21822 = inst_21841;var inst_21823 = inst_21830;var state_21862__$1 = (function (){var statearr_21874 = state_21862;(statearr_21874[(7)] = inst_21822);
(statearr_21874[(11)] = inst_21842);
(statearr_21874[(12)] = inst_21840);
(statearr_21874[(8)] = inst_21823);
return statearr_21874;
})();var statearr_21875_21901 = state_21862__$1;(statearr_21875_21901[(2)] = null);
(statearr_21875_21901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (9)))
{var inst_21822 = (state_21862[(7)]);var inst_21838 = cljs.core.vec.call(null,inst_21822);var state_21862__$1 = state_21862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21862__$1,(11),out,inst_21838);
} else
{if((state_val_21863 === (5)))
{var inst_21830 = (state_21862[(10)]);var inst_21826 = (state_21862[(9)]);var inst_21823 = (state_21862[(8)]);var inst_21830__$1 = f.call(null,inst_21826);var inst_21831 = cljs.core._EQ_.call(null,inst_21830__$1,inst_21823);var inst_21832 = cljs.core.keyword_identical_QMARK_.call(null,inst_21823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21833 = (inst_21831) || (inst_21832);var state_21862__$1 = (function (){var statearr_21876 = state_21862;(statearr_21876[(10)] = inst_21830__$1);
return statearr_21876;
})();if(cljs.core.truth_(inst_21833))
{var statearr_21877_21902 = state_21862__$1;(statearr_21877_21902[(1)] = (8));
} else
{var statearr_21878_21903 = state_21862__$1;(statearr_21878_21903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (14)))
{var inst_21855 = (state_21862[(2)]);var inst_21856 = cljs.core.async.close_BANG_.call(null,out);var state_21862__$1 = (function (){var statearr_21880 = state_21862;(statearr_21880[(13)] = inst_21855);
return statearr_21880;
})();var statearr_21881_21904 = state_21862__$1;(statearr_21881_21904[(2)] = inst_21856);
(statearr_21881_21904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (10)))
{var inst_21845 = (state_21862[(2)]);var state_21862__$1 = state_21862;var statearr_21882_21905 = state_21862__$1;(statearr_21882_21905[(2)] = inst_21845);
(statearr_21882_21905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21863 === (8)))
{var inst_21822 = (state_21862[(7)]);var inst_21830 = (state_21862[(10)]);var inst_21826 = (state_21862[(9)]);var inst_21835 = inst_21822.push(inst_21826);var tmp21879 = inst_21822;var inst_21822__$1 = tmp21879;var inst_21823 = inst_21830;var state_21862__$1 = (function (){var statearr_21883 = state_21862;(statearr_21883[(7)] = inst_21822__$1);
(statearr_21883[(14)] = inst_21835);
(statearr_21883[(8)] = inst_21823);
return statearr_21883;
})();var statearr_21884_21906 = state_21862__$1;(statearr_21884_21906[(2)] = null);
(statearr_21884_21906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5819__auto___21892,out))
;return ((function (switch__5804__auto__,c__5819__auto___21892,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21888[(0)] = state_machine__5805__auto__);
(statearr_21888[(1)] = (1));
return statearr_21888;
});
var state_machine__5805__auto____1 = (function (state_21862){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21889){if((e21889 instanceof Object))
{var ex__5808__auto__ = e21889;var statearr_21890_21907 = state_21862;(statearr_21890_21907[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21889;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21908 = state_21862;
state_21862 = G__21908;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21862){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21892,out))
})();var state__5821__auto__ = (function (){var statearr_21891 = f__5820__auto__.call(null);(statearr_21891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21892);
return statearr_21891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21892,out))
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
