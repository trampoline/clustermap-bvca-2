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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15193 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15193 = (function (f,fn_handler,meta15194){
this.f = f;
this.fn_handler = fn_handler;
this.meta15194 = meta15194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15193.cljs$lang$type = true;
cljs.core.async.t15193.cljs$lang$ctorStr = "cljs.core.async/t15193";
cljs.core.async.t15193.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15193");
});
cljs.core.async.t15193.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15195){var self__ = this;
var _15195__$1 = this;return self__.meta15194;
});
cljs.core.async.t15193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15195,meta15194__$1){var self__ = this;
var _15195__$1 = this;return (new cljs.core.async.t15193(self__.f,self__.fn_handler,meta15194__$1));
});
cljs.core.async.__GT_t15193 = (function __GT_t15193(f__$1,fn_handler__$1,meta15194){return (new cljs.core.async.t15193(f__$1,fn_handler__$1,meta15194));
});
}
return (new cljs.core.async.t15193(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15197 = buff;if(G__15197)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__15197.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15197.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15197);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15197);
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
{var val_15198 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15198);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15198,ret){
return (function (){return fn1.call(null,val_15198);
});})(val_15198,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___15199 = n;var x_15200 = (0);while(true){
if((x_15200 < n__4508__auto___15199))
{(a[x_15200] = (0));
{
var G__15201 = (x_15200 + (1));
x_15200 = G__15201;
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
var G__15202 = (i + (1));
i = G__15202;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15206 = (function (flag,alt_flag,meta15207){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15207 = meta15207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15206.cljs$lang$type = true;
cljs.core.async.t15206.cljs$lang$ctorStr = "cljs.core.async/t15206";
cljs.core.async.t15206.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15206");
});})(flag))
;
cljs.core.async.t15206.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15208){var self__ = this;
var _15208__$1 = this;return self__.meta15207;
});})(flag))
;
cljs.core.async.t15206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15208,meta15207__$1){var self__ = this;
var _15208__$1 = this;return (new cljs.core.async.t15206(self__.flag,self__.alt_flag,meta15207__$1));
});})(flag))
;
cljs.core.async.__GT_t15206 = ((function (flag){
return (function __GT_t15206(flag__$1,alt_flag__$1,meta15207){return (new cljs.core.async.t15206(flag__$1,alt_flag__$1,meta15207));
});})(flag))
;
}
return (new cljs.core.async.t15206(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15212 = (function (cb,flag,alt_handler,meta15213){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15213 = meta15213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15212.cljs$lang$type = true;
cljs.core.async.t15212.cljs$lang$ctorStr = "cljs.core.async/t15212";
cljs.core.async.t15212.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15212");
});
cljs.core.async.t15212.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15214){var self__ = this;
var _15214__$1 = this;return self__.meta15213;
});
cljs.core.async.t15212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15214,meta15213__$1){var self__ = this;
var _15214__$1 = this;return (new cljs.core.async.t15212(self__.cb,self__.flag,self__.alt_handler,meta15213__$1));
});
cljs.core.async.__GT_t15212 = (function __GT_t15212(cb__$1,flag__$1,alt_handler__$1,meta15213){return (new cljs.core.async.t15212(cb__$1,flag__$1,alt_handler__$1,meta15213));
});
}
return (new cljs.core.async.t15212(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15215_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15215_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15216_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15216_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15217 = (i + (1));
i = G__15217;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
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
var alts_BANG___delegate = function (ports,p__15218){var map__15220 = p__15218;var map__15220__$1 = ((cljs.core.seq_QMARK_.call(null,map__15220))?cljs.core.apply.call(null,cljs.core.hash_map,map__15220):map__15220);var opts = map__15220__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15218 = null;if (arguments.length > 1) {
  p__15218 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15218);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15221){
var ports = cljs.core.first(arglist__15221);
var p__15218 = cljs.core.rest(arglist__15221);
return alts_BANG___delegate(ports,p__15218);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5821__auto___15316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15316){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15316){
return (function (state_15292){var state_val_15293 = (state_15292[(1)]);if((state_val_15293 === (7)))
{var inst_15288 = (state_15292[(2)]);var state_15292__$1 = state_15292;var statearr_15294_15317 = state_15292__$1;(statearr_15294_15317[(2)] = inst_15288);
(statearr_15294_15317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (1)))
{var state_15292__$1 = state_15292;var statearr_15295_15318 = state_15292__$1;(statearr_15295_15318[(2)] = null);
(statearr_15295_15318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (4)))
{var inst_15271 = (state_15292[(7)]);var inst_15271__$1 = (state_15292[(2)]);var inst_15272 = (inst_15271__$1 == null);var state_15292__$1 = (function (){var statearr_15296 = state_15292;(statearr_15296[(7)] = inst_15271__$1);
return statearr_15296;
})();if(cljs.core.truth_(inst_15272))
{var statearr_15297_15319 = state_15292__$1;(statearr_15297_15319[(1)] = (5));
} else
{var statearr_15298_15320 = state_15292__$1;(statearr_15298_15320[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (13)))
{var state_15292__$1 = state_15292;var statearr_15299_15321 = state_15292__$1;(statearr_15299_15321[(2)] = null);
(statearr_15299_15321[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (6)))
{var inst_15271 = (state_15292[(7)]);var state_15292__$1 = state_15292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15292__$1,(11),to,inst_15271);
} else
{if((state_val_15293 === (3)))
{var inst_15290 = (state_15292[(2)]);var state_15292__$1 = state_15292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15292__$1,inst_15290);
} else
{if((state_val_15293 === (12)))
{var state_15292__$1 = state_15292;var statearr_15300_15322 = state_15292__$1;(statearr_15300_15322[(2)] = null);
(statearr_15300_15322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (2)))
{var state_15292__$1 = state_15292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15292__$1,(4),from);
} else
{if((state_val_15293 === (11)))
{var inst_15281 = (state_15292[(2)]);var state_15292__$1 = state_15292;if(cljs.core.truth_(inst_15281))
{var statearr_15301_15323 = state_15292__$1;(statearr_15301_15323[(1)] = (12));
} else
{var statearr_15302_15324 = state_15292__$1;(statearr_15302_15324[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (9)))
{var state_15292__$1 = state_15292;var statearr_15303_15325 = state_15292__$1;(statearr_15303_15325[(2)] = null);
(statearr_15303_15325[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (5)))
{var state_15292__$1 = state_15292;if(cljs.core.truth_(close_QMARK_))
{var statearr_15304_15326 = state_15292__$1;(statearr_15304_15326[(1)] = (8));
} else
{var statearr_15305_15327 = state_15292__$1;(statearr_15305_15327[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (14)))
{var inst_15286 = (state_15292[(2)]);var state_15292__$1 = state_15292;var statearr_15306_15328 = state_15292__$1;(statearr_15306_15328[(2)] = inst_15286);
(statearr_15306_15328[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (10)))
{var inst_15278 = (state_15292[(2)]);var state_15292__$1 = state_15292;var statearr_15307_15329 = state_15292__$1;(statearr_15307_15329[(2)] = inst_15278);
(statearr_15307_15329[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15293 === (8)))
{var inst_15275 = cljs.core.async.close_BANG_.call(null,to);var state_15292__$1 = state_15292;var statearr_15308_15330 = state_15292__$1;(statearr_15308_15330[(2)] = inst_15275);
(statearr_15308_15330[(1)] = (10));
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
});})(c__5821__auto___15316))
;return ((function (switch__5806__auto__,c__5821__auto___15316){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15312 = [null,null,null,null,null,null,null,null];(statearr_15312[(0)] = state_machine__5807__auto__);
(statearr_15312[(1)] = (1));
return statearr_15312;
});
var state_machine__5807__auto____1 = (function (state_15292){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15313){if((e15313 instanceof Object))
{var ex__5810__auto__ = e15313;var statearr_15314_15331 = state_15292;(statearr_15314_15331[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15292);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15313;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15332 = state_15292;
state_15292 = G__15332;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15292){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15316))
})();var state__5823__auto__ = (function (){var statearr_15315 = f__5822__auto__.call(null);(statearr_15315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15316);
return statearr_15315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15316))
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
return (function (p__15516){var vec__15517 = p__15516;var v = cljs.core.nth.call(null,vec__15517,(0),null);var p = cljs.core.nth.call(null,vec__15517,(1),null);var job = vec__15517;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5821__auto___15699 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results){
return (function (state_15522){var state_val_15523 = (state_15522[(1)]);if((state_val_15523 === (2)))
{var inst_15519 = (state_15522[(2)]);var inst_15520 = cljs.core.async.close_BANG_.call(null,res);var state_15522__$1 = (function (){var statearr_15524 = state_15522;(statearr_15524[(7)] = inst_15519);
return statearr_15524;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15522__$1,inst_15520);
} else
{if((state_val_15523 === (1)))
{var state_15522__$1 = state_15522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15522__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results))
;return ((function (switch__5806__auto__,c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15528 = [null,null,null,null,null,null,null,null];(statearr_15528[(0)] = state_machine__5807__auto__);
(statearr_15528[(1)] = (1));
return statearr_15528;
});
var state_machine__5807__auto____1 = (function (state_15522){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15522);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15529){if((e15529 instanceof Object))
{var ex__5810__auto__ = e15529;var statearr_15530_15700 = state_15522;(statearr_15530_15700[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15522);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15701 = state_15522;
state_15522 = G__15701;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15522){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results))
})();var state__5823__auto__ = (function (){var statearr_15531 = f__5822__auto__.call(null);(statearr_15531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15699);
return statearr_15531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15699,res,vec__15517,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__15532){var vec__15533 = p__15532;var v = cljs.core.nth.call(null,vec__15533,(0),null);var p = cljs.core.nth.call(null,vec__15533,(1),null);var job = vec__15533;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___15702 = n;var __15703 = (0);while(true){
if((__15703 < n__4508__auto___15702))
{var G__15534_15704 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__15534_15704) {
case "async":
var c__5821__auto___15706 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15703,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (__15703,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function (state_15547){var state_val_15548 = (state_15547[(1)]);if((state_val_15548 === (7)))
{var inst_15543 = (state_15547[(2)]);var state_15547__$1 = state_15547;var statearr_15549_15707 = state_15547__$1;(statearr_15549_15707[(2)] = inst_15543);
(statearr_15549_15707[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15548 === (6)))
{var state_15547__$1 = state_15547;var statearr_15550_15708 = state_15547__$1;(statearr_15550_15708[(2)] = null);
(statearr_15550_15708[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15548 === (5)))
{var state_15547__$1 = state_15547;var statearr_15551_15709 = state_15547__$1;(statearr_15551_15709[(2)] = null);
(statearr_15551_15709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15548 === (4)))
{var inst_15537 = (state_15547[(2)]);var inst_15538 = async.call(null,inst_15537);var state_15547__$1 = state_15547;if(cljs.core.truth_(inst_15538))
{var statearr_15552_15710 = state_15547__$1;(statearr_15552_15710[(1)] = (5));
} else
{var statearr_15553_15711 = state_15547__$1;(statearr_15553_15711[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15548 === (3)))
{var inst_15545 = (state_15547[(2)]);var state_15547__$1 = state_15547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15547__$1,inst_15545);
} else
{if((state_val_15548 === (2)))
{var state_15547__$1 = state_15547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15547__$1,(4),jobs);
} else
{if((state_val_15548 === (1)))
{var state_15547__$1 = state_15547;var statearr_15554_15712 = state_15547__$1;(statearr_15554_15712[(2)] = null);
(statearr_15554_15712[(1)] = (2));
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
});})(__15703,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
;return ((function (__15703,switch__5806__auto__,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15558 = [null,null,null,null,null,null,null];(statearr_15558[(0)] = state_machine__5807__auto__);
(statearr_15558[(1)] = (1));
return statearr_15558;
});
var state_machine__5807__auto____1 = (function (state_15547){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15559){if((e15559 instanceof Object))
{var ex__5810__auto__ = e15559;var statearr_15560_15713 = state_15547;(statearr_15560_15713[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15714 = state_15547;
state_15547 = G__15714;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15547){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(__15703,switch__5806__auto__,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15561 = f__5822__auto__.call(null);(statearr_15561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15706);
return statearr_15561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(__15703,c__5821__auto___15706,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
);

break;
case "compute":
var c__5821__auto___15715 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15703,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (__15703,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function (state_15574){var state_val_15575 = (state_15574[(1)]);if((state_val_15575 === (7)))
{var inst_15570 = (state_15574[(2)]);var state_15574__$1 = state_15574;var statearr_15576_15716 = state_15574__$1;(statearr_15576_15716[(2)] = inst_15570);
(statearr_15576_15716[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15575 === (6)))
{var state_15574__$1 = state_15574;var statearr_15577_15717 = state_15574__$1;(statearr_15577_15717[(2)] = null);
(statearr_15577_15717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15575 === (5)))
{var state_15574__$1 = state_15574;var statearr_15578_15718 = state_15574__$1;(statearr_15578_15718[(2)] = null);
(statearr_15578_15718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15575 === (4)))
{var inst_15564 = (state_15574[(2)]);var inst_15565 = process.call(null,inst_15564);var state_15574__$1 = state_15574;if(cljs.core.truth_(inst_15565))
{var statearr_15579_15719 = state_15574__$1;(statearr_15579_15719[(1)] = (5));
} else
{var statearr_15580_15720 = state_15574__$1;(statearr_15580_15720[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15575 === (3)))
{var inst_15572 = (state_15574[(2)]);var state_15574__$1 = state_15574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15574__$1,inst_15572);
} else
{if((state_val_15575 === (2)))
{var state_15574__$1 = state_15574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15574__$1,(4),jobs);
} else
{if((state_val_15575 === (1)))
{var state_15574__$1 = state_15574;var statearr_15581_15721 = state_15574__$1;(statearr_15581_15721[(2)] = null);
(statearr_15581_15721[(1)] = (2));
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
});})(__15703,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
;return ((function (__15703,switch__5806__auto__,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15585 = [null,null,null,null,null,null,null];(statearr_15585[(0)] = state_machine__5807__auto__);
(statearr_15585[(1)] = (1));
return statearr_15585;
});
var state_machine__5807__auto____1 = (function (state_15574){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15586){if((e15586 instanceof Object))
{var ex__5810__auto__ = e15586;var statearr_15587_15722 = state_15574;(statearr_15587_15722[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15586;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15723 = state_15574;
state_15574 = G__15723;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15574){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(__15703,switch__5806__auto__,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15588 = f__5822__auto__.call(null);(statearr_15588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15715);
return statearr_15588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(__15703,c__5821__auto___15715,G__15534_15704,n__4508__auto___15702,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__15724 = (__15703 + (1));
__15703 = G__15724;
continue;
}
} else
{}
break;
}
var c__5821__auto___15725 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15725,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15725,jobs,results,process,async){
return (function (state_15610){var state_val_15611 = (state_15610[(1)]);if((state_val_15611 === (9)))
{var inst_15603 = (state_15610[(2)]);var state_15610__$1 = (function (){var statearr_15612 = state_15610;(statearr_15612[(7)] = inst_15603);
return statearr_15612;
})();var statearr_15613_15726 = state_15610__$1;(statearr_15613_15726[(2)] = null);
(statearr_15613_15726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15611 === (8)))
{var inst_15596 = (state_15610[(8)]);var inst_15601 = (state_15610[(2)]);var state_15610__$1 = (function (){var statearr_15614 = state_15610;(statearr_15614[(9)] = inst_15601);
return statearr_15614;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15610__$1,(9),results,inst_15596);
} else
{if((state_val_15611 === (7)))
{var inst_15606 = (state_15610[(2)]);var state_15610__$1 = state_15610;var statearr_15615_15727 = state_15610__$1;(statearr_15615_15727[(2)] = inst_15606);
(statearr_15615_15727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15611 === (6)))
{var inst_15591 = (state_15610[(10)]);var inst_15596 = (state_15610[(8)]);var inst_15596__$1 = cljs.core.async.chan.call(null,(1));var inst_15597 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15598 = [inst_15591,inst_15596__$1];var inst_15599 = (new cljs.core.PersistentVector(null,2,(5),inst_15597,inst_15598,null));var state_15610__$1 = (function (){var statearr_15616 = state_15610;(statearr_15616[(8)] = inst_15596__$1);
return statearr_15616;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15610__$1,(8),jobs,inst_15599);
} else
{if((state_val_15611 === (5)))
{var inst_15594 = cljs.core.async.close_BANG_.call(null,jobs);var state_15610__$1 = state_15610;var statearr_15617_15728 = state_15610__$1;(statearr_15617_15728[(2)] = inst_15594);
(statearr_15617_15728[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15611 === (4)))
{var inst_15591 = (state_15610[(10)]);var inst_15591__$1 = (state_15610[(2)]);var inst_15592 = (inst_15591__$1 == null);var state_15610__$1 = (function (){var statearr_15618 = state_15610;(statearr_15618[(10)] = inst_15591__$1);
return statearr_15618;
})();if(cljs.core.truth_(inst_15592))
{var statearr_15619_15729 = state_15610__$1;(statearr_15619_15729[(1)] = (5));
} else
{var statearr_15620_15730 = state_15610__$1;(statearr_15620_15730[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15611 === (3)))
{var inst_15608 = (state_15610[(2)]);var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15610__$1,inst_15608);
} else
{if((state_val_15611 === (2)))
{var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15610__$1,(4),from);
} else
{if((state_val_15611 === (1)))
{var state_15610__$1 = state_15610;var statearr_15621_15731 = state_15610__$1;(statearr_15621_15731[(2)] = null);
(statearr_15621_15731[(1)] = (2));
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
});})(c__5821__auto___15725,jobs,results,process,async))
;return ((function (switch__5806__auto__,c__5821__auto___15725,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15625 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15625[(0)] = state_machine__5807__auto__);
(statearr_15625[(1)] = (1));
return statearr_15625;
});
var state_machine__5807__auto____1 = (function (state_15610){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15626){if((e15626 instanceof Object))
{var ex__5810__auto__ = e15626;var statearr_15627_15732 = state_15610;(statearr_15627_15732[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15733 = state_15610;
state_15610 = G__15733;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15610){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15725,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15628 = f__5822__auto__.call(null);(statearr_15628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15725);
return statearr_15628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15725,jobs,results,process,async))
);
var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__,jobs,results,process,async){
return (function (state_15666){var state_val_15667 = (state_15666[(1)]);if((state_val_15667 === (7)))
{var inst_15662 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15668_15734 = state_15666__$1;(statearr_15668_15734[(2)] = inst_15662);
(statearr_15668_15734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (20)))
{var state_15666__$1 = state_15666;var statearr_15669_15735 = state_15666__$1;(statearr_15669_15735[(2)] = null);
(statearr_15669_15735[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (1)))
{var state_15666__$1 = state_15666;var statearr_15670_15736 = state_15666__$1;(statearr_15670_15736[(2)] = null);
(statearr_15670_15736[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (4)))
{var inst_15631 = (state_15666[(7)]);var inst_15631__$1 = (state_15666[(2)]);var inst_15632 = (inst_15631__$1 == null);var state_15666__$1 = (function (){var statearr_15671 = state_15666;(statearr_15671[(7)] = inst_15631__$1);
return statearr_15671;
})();if(cljs.core.truth_(inst_15632))
{var statearr_15672_15737 = state_15666__$1;(statearr_15672_15737[(1)] = (5));
} else
{var statearr_15673_15738 = state_15666__$1;(statearr_15673_15738[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (15)))
{var inst_15644 = (state_15666[(8)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15666__$1,(18),to,inst_15644);
} else
{if((state_val_15667 === (21)))
{var inst_15657 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15674_15739 = state_15666__$1;(statearr_15674_15739[(2)] = inst_15657);
(statearr_15674_15739[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (13)))
{var inst_15659 = (state_15666[(2)]);var state_15666__$1 = (function (){var statearr_15675 = state_15666;(statearr_15675[(9)] = inst_15659);
return statearr_15675;
})();var statearr_15676_15740 = state_15666__$1;(statearr_15676_15740[(2)] = null);
(statearr_15676_15740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (6)))
{var inst_15631 = (state_15666[(7)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(11),inst_15631);
} else
{if((state_val_15667 === (17)))
{var inst_15652 = (state_15666[(2)]);var state_15666__$1 = state_15666;if(cljs.core.truth_(inst_15652))
{var statearr_15677_15741 = state_15666__$1;(statearr_15677_15741[(1)] = (19));
} else
{var statearr_15678_15742 = state_15666__$1;(statearr_15678_15742[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (3)))
{var inst_15664 = (state_15666[(2)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15666__$1,inst_15664);
} else
{if((state_val_15667 === (12)))
{var inst_15641 = (state_15666[(10)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(14),inst_15641);
} else
{if((state_val_15667 === (2)))
{var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(4),results);
} else
{if((state_val_15667 === (19)))
{var state_15666__$1 = state_15666;var statearr_15679_15743 = state_15666__$1;(statearr_15679_15743[(2)] = null);
(statearr_15679_15743[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (11)))
{var inst_15641 = (state_15666[(2)]);var state_15666__$1 = (function (){var statearr_15680 = state_15666;(statearr_15680[(10)] = inst_15641);
return statearr_15680;
})();var statearr_15681_15744 = state_15666__$1;(statearr_15681_15744[(2)] = null);
(statearr_15681_15744[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (9)))
{var state_15666__$1 = state_15666;var statearr_15682_15745 = state_15666__$1;(statearr_15682_15745[(2)] = null);
(statearr_15682_15745[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (5)))
{var state_15666__$1 = state_15666;if(cljs.core.truth_(close_QMARK_))
{var statearr_15683_15746 = state_15666__$1;(statearr_15683_15746[(1)] = (8));
} else
{var statearr_15684_15747 = state_15666__$1;(statearr_15684_15747[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (14)))
{var inst_15646 = (state_15666[(11)]);var inst_15644 = (state_15666[(8)]);var inst_15644__$1 = (state_15666[(2)]);var inst_15645 = (inst_15644__$1 == null);var inst_15646__$1 = cljs.core.not.call(null,inst_15645);var state_15666__$1 = (function (){var statearr_15685 = state_15666;(statearr_15685[(11)] = inst_15646__$1);
(statearr_15685[(8)] = inst_15644__$1);
return statearr_15685;
})();if(inst_15646__$1)
{var statearr_15686_15748 = state_15666__$1;(statearr_15686_15748[(1)] = (15));
} else
{var statearr_15687_15749 = state_15666__$1;(statearr_15687_15749[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (16)))
{var inst_15646 = (state_15666[(11)]);var state_15666__$1 = state_15666;var statearr_15688_15750 = state_15666__$1;(statearr_15688_15750[(2)] = inst_15646);
(statearr_15688_15750[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (10)))
{var inst_15638 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15689_15751 = state_15666__$1;(statearr_15689_15751[(2)] = inst_15638);
(statearr_15689_15751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (18)))
{var inst_15649 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15690_15752 = state_15666__$1;(statearr_15690_15752[(2)] = inst_15649);
(statearr_15690_15752[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (8)))
{var inst_15635 = cljs.core.async.close_BANG_.call(null,to);var state_15666__$1 = state_15666;var statearr_15691_15753 = state_15666__$1;(statearr_15691_15753[(2)] = inst_15635);
(statearr_15691_15753[(1)] = (10));
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
});})(c__5821__auto__,jobs,results,process,async))
;return ((function (switch__5806__auto__,c__5821__auto__,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15695 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15695[(0)] = state_machine__5807__auto__);
(statearr_15695[(1)] = (1));
return statearr_15695;
});
var state_machine__5807__auto____1 = (function (state_15666){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15666);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15696){if((e15696 instanceof Object))
{var ex__5810__auto__ = e15696;var statearr_15697_15754 = state_15666;(statearr_15697_15754[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15755 = state_15666;
state_15666 = G__15755;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15698 = f__5822__auto__.call(null);(statearr_15698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_15698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__,jobs,results,process,async))
);
return c__5821__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5821__auto___15856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15856,tc,fc){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15856,tc,fc){
return (function (state_15831){var state_val_15832 = (state_15831[(1)]);if((state_val_15832 === (7)))
{var inst_15827 = (state_15831[(2)]);var state_15831__$1 = state_15831;var statearr_15833_15857 = state_15831__$1;(statearr_15833_15857[(2)] = inst_15827);
(statearr_15833_15857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (1)))
{var state_15831__$1 = state_15831;var statearr_15834_15858 = state_15831__$1;(statearr_15834_15858[(2)] = null);
(statearr_15834_15858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (4)))
{var inst_15808 = (state_15831[(7)]);var inst_15808__$1 = (state_15831[(2)]);var inst_15809 = (inst_15808__$1 == null);var state_15831__$1 = (function (){var statearr_15835 = state_15831;(statearr_15835[(7)] = inst_15808__$1);
return statearr_15835;
})();if(cljs.core.truth_(inst_15809))
{var statearr_15836_15859 = state_15831__$1;(statearr_15836_15859[(1)] = (5));
} else
{var statearr_15837_15860 = state_15831__$1;(statearr_15837_15860[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (13)))
{var state_15831__$1 = state_15831;var statearr_15838_15861 = state_15831__$1;(statearr_15838_15861[(2)] = null);
(statearr_15838_15861[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (6)))
{var inst_15808 = (state_15831[(7)]);var inst_15814 = p.call(null,inst_15808);var state_15831__$1 = state_15831;if(cljs.core.truth_(inst_15814))
{var statearr_15839_15862 = state_15831__$1;(statearr_15839_15862[(1)] = (9));
} else
{var statearr_15840_15863 = state_15831__$1;(statearr_15840_15863[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (3)))
{var inst_15829 = (state_15831[(2)]);var state_15831__$1 = state_15831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15831__$1,inst_15829);
} else
{if((state_val_15832 === (12)))
{var state_15831__$1 = state_15831;var statearr_15841_15864 = state_15831__$1;(statearr_15841_15864[(2)] = null);
(statearr_15841_15864[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (2)))
{var state_15831__$1 = state_15831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15831__$1,(4),ch);
} else
{if((state_val_15832 === (11)))
{var inst_15808 = (state_15831[(7)]);var inst_15818 = (state_15831[(2)]);var state_15831__$1 = state_15831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15831__$1,(8),inst_15818,inst_15808);
} else
{if((state_val_15832 === (9)))
{var state_15831__$1 = state_15831;var statearr_15842_15865 = state_15831__$1;(statearr_15842_15865[(2)] = tc);
(statearr_15842_15865[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (5)))
{var inst_15811 = cljs.core.async.close_BANG_.call(null,tc);var inst_15812 = cljs.core.async.close_BANG_.call(null,fc);var state_15831__$1 = (function (){var statearr_15843 = state_15831;(statearr_15843[(8)] = inst_15811);
return statearr_15843;
})();var statearr_15844_15866 = state_15831__$1;(statearr_15844_15866[(2)] = inst_15812);
(statearr_15844_15866[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (14)))
{var inst_15825 = (state_15831[(2)]);var state_15831__$1 = state_15831;var statearr_15845_15867 = state_15831__$1;(statearr_15845_15867[(2)] = inst_15825);
(statearr_15845_15867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (10)))
{var state_15831__$1 = state_15831;var statearr_15846_15868 = state_15831__$1;(statearr_15846_15868[(2)] = fc);
(statearr_15846_15868[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15832 === (8)))
{var inst_15820 = (state_15831[(2)]);var state_15831__$1 = state_15831;if(cljs.core.truth_(inst_15820))
{var statearr_15847_15869 = state_15831__$1;(statearr_15847_15869[(1)] = (12));
} else
{var statearr_15848_15870 = state_15831__$1;(statearr_15848_15870[(1)] = (13));
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
});})(c__5821__auto___15856,tc,fc))
;return ((function (switch__5806__auto__,c__5821__auto___15856,tc,fc){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15852 = [null,null,null,null,null,null,null,null,null];(statearr_15852[(0)] = state_machine__5807__auto__);
(statearr_15852[(1)] = (1));
return statearr_15852;
});
var state_machine__5807__auto____1 = (function (state_15831){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15853){if((e15853 instanceof Object))
{var ex__5810__auto__ = e15853;var statearr_15854_15871 = state_15831;(statearr_15854_15871[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15872 = state_15831;
state_15831 = G__15872;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15831){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15856,tc,fc))
})();var state__5823__auto__ = (function (){var statearr_15855 = f__5822__auto__.call(null);(statearr_15855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15856);
return statearr_15855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15856,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_15919){var state_val_15920 = (state_15919[(1)]);if((state_val_15920 === (7)))
{var inst_15915 = (state_15919[(2)]);var state_15919__$1 = state_15919;var statearr_15921_15937 = state_15919__$1;(statearr_15921_15937[(2)] = inst_15915);
(statearr_15921_15937[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15920 === (6)))
{var inst_15905 = (state_15919[(7)]);var inst_15908 = (state_15919[(8)]);var inst_15912 = f.call(null,inst_15905,inst_15908);var inst_15905__$1 = inst_15912;var state_15919__$1 = (function (){var statearr_15922 = state_15919;(statearr_15922[(7)] = inst_15905__$1);
return statearr_15922;
})();var statearr_15923_15938 = state_15919__$1;(statearr_15923_15938[(2)] = null);
(statearr_15923_15938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15920 === (5)))
{var inst_15905 = (state_15919[(7)]);var state_15919__$1 = state_15919;var statearr_15924_15939 = state_15919__$1;(statearr_15924_15939[(2)] = inst_15905);
(statearr_15924_15939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15920 === (4)))
{var inst_15908 = (state_15919[(8)]);var inst_15908__$1 = (state_15919[(2)]);var inst_15909 = (inst_15908__$1 == null);var state_15919__$1 = (function (){var statearr_15925 = state_15919;(statearr_15925[(8)] = inst_15908__$1);
return statearr_15925;
})();if(cljs.core.truth_(inst_15909))
{var statearr_15926_15940 = state_15919__$1;(statearr_15926_15940[(1)] = (5));
} else
{var statearr_15927_15941 = state_15919__$1;(statearr_15927_15941[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15920 === (3)))
{var inst_15917 = (state_15919[(2)]);var state_15919__$1 = state_15919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15919__$1,inst_15917);
} else
{if((state_val_15920 === (2)))
{var state_15919__$1 = state_15919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15919__$1,(4),ch);
} else
{if((state_val_15920 === (1)))
{var inst_15905 = init;var state_15919__$1 = (function (){var statearr_15928 = state_15919;(statearr_15928[(7)] = inst_15905);
return statearr_15928;
})();var statearr_15929_15942 = state_15919__$1;(statearr_15929_15942[(2)] = null);
(statearr_15929_15942[(1)] = (2));
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
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15933 = [null,null,null,null,null,null,null,null,null];(statearr_15933[(0)] = state_machine__5807__auto__);
(statearr_15933[(1)] = (1));
return statearr_15933;
});
var state_machine__5807__auto____1 = (function (state_15919){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15934){if((e15934 instanceof Object))
{var ex__5810__auto__ = e15934;var statearr_15935_15943 = state_15919;(statearr_15935_15943[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15944 = state_15919;
state_15919 = G__15944;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15919){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_15936 = f__5822__auto__.call(null);(statearr_15936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_15936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_16018){var state_val_16019 = (state_16018[(1)]);if((state_val_16019 === (7)))
{var inst_16000 = (state_16018[(2)]);var state_16018__$1 = state_16018;var statearr_16020_16043 = state_16018__$1;(statearr_16020_16043[(2)] = inst_16000);
(statearr_16020_16043[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (1)))
{var inst_15994 = cljs.core.seq.call(null,coll);var inst_15995 = inst_15994;var state_16018__$1 = (function (){var statearr_16021 = state_16018;(statearr_16021[(7)] = inst_15995);
return statearr_16021;
})();var statearr_16022_16044 = state_16018__$1;(statearr_16022_16044[(2)] = null);
(statearr_16022_16044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (4)))
{var inst_15995 = (state_16018[(7)]);var inst_15998 = cljs.core.first.call(null,inst_15995);var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16018__$1,(7),ch,inst_15998);
} else
{if((state_val_16019 === (13)))
{var inst_16012 = (state_16018[(2)]);var state_16018__$1 = state_16018;var statearr_16023_16045 = state_16018__$1;(statearr_16023_16045[(2)] = inst_16012);
(statearr_16023_16045[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (6)))
{var inst_16003 = (state_16018[(2)]);var state_16018__$1 = state_16018;if(cljs.core.truth_(inst_16003))
{var statearr_16024_16046 = state_16018__$1;(statearr_16024_16046[(1)] = (8));
} else
{var statearr_16025_16047 = state_16018__$1;(statearr_16025_16047[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (3)))
{var inst_16016 = (state_16018[(2)]);var state_16018__$1 = state_16018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16018__$1,inst_16016);
} else
{if((state_val_16019 === (12)))
{var state_16018__$1 = state_16018;var statearr_16026_16048 = state_16018__$1;(statearr_16026_16048[(2)] = null);
(statearr_16026_16048[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (2)))
{var inst_15995 = (state_16018[(7)]);var state_16018__$1 = state_16018;if(cljs.core.truth_(inst_15995))
{var statearr_16027_16049 = state_16018__$1;(statearr_16027_16049[(1)] = (4));
} else
{var statearr_16028_16050 = state_16018__$1;(statearr_16028_16050[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (11)))
{var inst_16009 = cljs.core.async.close_BANG_.call(null,ch);var state_16018__$1 = state_16018;var statearr_16029_16051 = state_16018__$1;(statearr_16029_16051[(2)] = inst_16009);
(statearr_16029_16051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (9)))
{var state_16018__$1 = state_16018;if(cljs.core.truth_(close_QMARK_))
{var statearr_16030_16052 = state_16018__$1;(statearr_16030_16052[(1)] = (11));
} else
{var statearr_16031_16053 = state_16018__$1;(statearr_16031_16053[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (5)))
{var inst_15995 = (state_16018[(7)]);var state_16018__$1 = state_16018;var statearr_16032_16054 = state_16018__$1;(statearr_16032_16054[(2)] = inst_15995);
(statearr_16032_16054[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (10)))
{var inst_16014 = (state_16018[(2)]);var state_16018__$1 = state_16018;var statearr_16033_16055 = state_16018__$1;(statearr_16033_16055[(2)] = inst_16014);
(statearr_16033_16055[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16019 === (8)))
{var inst_15995 = (state_16018[(7)]);var inst_16005 = cljs.core.next.call(null,inst_15995);var inst_15995__$1 = inst_16005;var state_16018__$1 = (function (){var statearr_16034 = state_16018;(statearr_16034[(7)] = inst_15995__$1);
return statearr_16034;
})();var statearr_16035_16056 = state_16018__$1;(statearr_16035_16056[(2)] = null);
(statearr_16035_16056[(1)] = (2));
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
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_16039 = [null,null,null,null,null,null,null,null];(statearr_16039[(0)] = state_machine__5807__auto__);
(statearr_16039[(1)] = (1));
return statearr_16039;
});
var state_machine__5807__auto____1 = (function (state_16018){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16040){if((e16040 instanceof Object))
{var ex__5810__auto__ = e16040;var statearr_16041_16057 = state_16018;(statearr_16041_16057[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16018);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16058 = state_16018;
state_16018 = G__16058;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16018){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_16042 = f__5822__auto__.call(null);(statearr_16042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_16042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
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
cljs.core.async.Mux = (function (){var obj16060 = {};return obj16060;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16062 = {};return obj16062;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16284 = (function (cs,ch,mult,meta16285){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16285 = meta16285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16284.cljs$lang$type = true;
cljs.core.async.t16284.cljs$lang$ctorStr = "cljs.core.async/t16284";
cljs.core.async.t16284.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16284");
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16284.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16286){var self__ = this;
var _16286__$1 = this;return self__.meta16285;
});})(cs))
;
cljs.core.async.t16284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16286,meta16285__$1){var self__ = this;
var _16286__$1 = this;return (new cljs.core.async.t16284(self__.cs,self__.ch,self__.mult,meta16285__$1));
});})(cs))
;
cljs.core.async.__GT_t16284 = ((function (cs){
return (function __GT_t16284(cs__$1,ch__$1,mult__$1,meta16285){return (new cljs.core.async.t16284(cs__$1,ch__$1,mult__$1,meta16285));
});})(cs))
;
}
return (new cljs.core.async.t16284(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5821__auto___16505 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___16505,cs,m,dchan,dctr,done){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___16505,cs,m,dchan,dctr,done){
return (function (state_16417){var state_val_16418 = (state_16417[(1)]);if((state_val_16418 === (7)))
{var inst_16413 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16419_16506 = state_16417__$1;(statearr_16419_16506[(2)] = inst_16413);
(statearr_16419_16506[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (20)))
{var inst_16318 = (state_16417[(7)]);var inst_16328 = cljs.core.first.call(null,inst_16318);var inst_16329 = cljs.core.nth.call(null,inst_16328,(0),null);var inst_16330 = cljs.core.nth.call(null,inst_16328,(1),null);var state_16417__$1 = (function (){var statearr_16420 = state_16417;(statearr_16420[(8)] = inst_16329);
return statearr_16420;
})();if(cljs.core.truth_(inst_16330))
{var statearr_16421_16507 = state_16417__$1;(statearr_16421_16507[(1)] = (22));
} else
{var statearr_16422_16508 = state_16417__$1;(statearr_16422_16508[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (27)))
{var inst_16360 = (state_16417[(9)]);var inst_16289 = (state_16417[(10)]);var inst_16358 = (state_16417[(11)]);var inst_16365 = (state_16417[(12)]);var inst_16365__$1 = cljs.core._nth.call(null,inst_16358,inst_16360);var inst_16366 = cljs.core.async.put_BANG_.call(null,inst_16365__$1,inst_16289,done);var state_16417__$1 = (function (){var statearr_16423 = state_16417;(statearr_16423[(12)] = inst_16365__$1);
return statearr_16423;
})();if(cljs.core.truth_(inst_16366))
{var statearr_16424_16509 = state_16417__$1;(statearr_16424_16509[(1)] = (30));
} else
{var statearr_16425_16510 = state_16417__$1;(statearr_16425_16510[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (1)))
{var state_16417__$1 = state_16417;var statearr_16426_16511 = state_16417__$1;(statearr_16426_16511[(2)] = null);
(statearr_16426_16511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (24)))
{var inst_16318 = (state_16417[(7)]);var inst_16335 = (state_16417[(2)]);var inst_16336 = cljs.core.next.call(null,inst_16318);var inst_16298 = inst_16336;var inst_16299 = null;var inst_16300 = (0);var inst_16301 = (0);var state_16417__$1 = (function (){var statearr_16427 = state_16417;(statearr_16427[(13)] = inst_16301);
(statearr_16427[(14)] = inst_16335);
(statearr_16427[(15)] = inst_16300);
(statearr_16427[(16)] = inst_16298);
(statearr_16427[(17)] = inst_16299);
return statearr_16427;
})();var statearr_16428_16512 = state_16417__$1;(statearr_16428_16512[(2)] = null);
(statearr_16428_16512[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (39)))
{var state_16417__$1 = state_16417;var statearr_16432_16513 = state_16417__$1;(statearr_16432_16513[(2)] = null);
(statearr_16432_16513[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (4)))
{var inst_16289 = (state_16417[(10)]);var inst_16289__$1 = (state_16417[(2)]);var inst_16290 = (inst_16289__$1 == null);var state_16417__$1 = (function (){var statearr_16433 = state_16417;(statearr_16433[(10)] = inst_16289__$1);
return statearr_16433;
})();if(cljs.core.truth_(inst_16290))
{var statearr_16434_16514 = state_16417__$1;(statearr_16434_16514[(1)] = (5));
} else
{var statearr_16435_16515 = state_16417__$1;(statearr_16435_16515[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (15)))
{var inst_16301 = (state_16417[(13)]);var inst_16300 = (state_16417[(15)]);var inst_16298 = (state_16417[(16)]);var inst_16299 = (state_16417[(17)]);var inst_16314 = (state_16417[(2)]);var inst_16315 = (inst_16301 + (1));var tmp16429 = inst_16300;var tmp16430 = inst_16298;var tmp16431 = inst_16299;var inst_16298__$1 = tmp16430;var inst_16299__$1 = tmp16431;var inst_16300__$1 = tmp16429;var inst_16301__$1 = inst_16315;var state_16417__$1 = (function (){var statearr_16436 = state_16417;(statearr_16436[(13)] = inst_16301__$1);
(statearr_16436[(18)] = inst_16314);
(statearr_16436[(15)] = inst_16300__$1);
(statearr_16436[(16)] = inst_16298__$1);
(statearr_16436[(17)] = inst_16299__$1);
return statearr_16436;
})();var statearr_16437_16516 = state_16417__$1;(statearr_16437_16516[(2)] = null);
(statearr_16437_16516[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (21)))
{var inst_16339 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16441_16517 = state_16417__$1;(statearr_16441_16517[(2)] = inst_16339);
(statearr_16441_16517[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (31)))
{var inst_16365 = (state_16417[(12)]);var inst_16369 = done.call(null,null);var inst_16370 = cljs.core.async.untap_STAR_.call(null,m,inst_16365);var state_16417__$1 = (function (){var statearr_16442 = state_16417;(statearr_16442[(19)] = inst_16369);
return statearr_16442;
})();var statearr_16443_16518 = state_16417__$1;(statearr_16443_16518[(2)] = inst_16370);
(statearr_16443_16518[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (32)))
{var inst_16359 = (state_16417[(20)]);var inst_16357 = (state_16417[(21)]);var inst_16360 = (state_16417[(9)]);var inst_16358 = (state_16417[(11)]);var inst_16372 = (state_16417[(2)]);var inst_16373 = (inst_16360 + (1));var tmp16438 = inst_16359;var tmp16439 = inst_16357;var tmp16440 = inst_16358;var inst_16357__$1 = tmp16439;var inst_16358__$1 = tmp16440;var inst_16359__$1 = tmp16438;var inst_16360__$1 = inst_16373;var state_16417__$1 = (function (){var statearr_16444 = state_16417;(statearr_16444[(20)] = inst_16359__$1);
(statearr_16444[(21)] = inst_16357__$1);
(statearr_16444[(9)] = inst_16360__$1);
(statearr_16444[(11)] = inst_16358__$1);
(statearr_16444[(22)] = inst_16372);
return statearr_16444;
})();var statearr_16445_16519 = state_16417__$1;(statearr_16445_16519[(2)] = null);
(statearr_16445_16519[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (40)))
{var inst_16385 = (state_16417[(23)]);var inst_16389 = done.call(null,null);var inst_16390 = cljs.core.async.untap_STAR_.call(null,m,inst_16385);var state_16417__$1 = (function (){var statearr_16446 = state_16417;(statearr_16446[(24)] = inst_16389);
return statearr_16446;
})();var statearr_16447_16520 = state_16417__$1;(statearr_16447_16520[(2)] = inst_16390);
(statearr_16447_16520[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (33)))
{var inst_16376 = (state_16417[(25)]);var inst_16378 = cljs.core.chunked_seq_QMARK_.call(null,inst_16376);var state_16417__$1 = state_16417;if(inst_16378)
{var statearr_16448_16521 = state_16417__$1;(statearr_16448_16521[(1)] = (36));
} else
{var statearr_16449_16522 = state_16417__$1;(statearr_16449_16522[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (13)))
{var inst_16308 = (state_16417[(26)]);var inst_16311 = cljs.core.async.close_BANG_.call(null,inst_16308);var state_16417__$1 = state_16417;var statearr_16450_16523 = state_16417__$1;(statearr_16450_16523[(2)] = inst_16311);
(statearr_16450_16523[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (22)))
{var inst_16329 = (state_16417[(8)]);var inst_16332 = cljs.core.async.close_BANG_.call(null,inst_16329);var state_16417__$1 = state_16417;var statearr_16451_16524 = state_16417__$1;(statearr_16451_16524[(2)] = inst_16332);
(statearr_16451_16524[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (36)))
{var inst_16376 = (state_16417[(25)]);var inst_16380 = cljs.core.chunk_first.call(null,inst_16376);var inst_16381 = cljs.core.chunk_rest.call(null,inst_16376);var inst_16382 = cljs.core.count.call(null,inst_16380);var inst_16357 = inst_16381;var inst_16358 = inst_16380;var inst_16359 = inst_16382;var inst_16360 = (0);var state_16417__$1 = (function (){var statearr_16452 = state_16417;(statearr_16452[(20)] = inst_16359);
(statearr_16452[(21)] = inst_16357);
(statearr_16452[(9)] = inst_16360);
(statearr_16452[(11)] = inst_16358);
return statearr_16452;
})();var statearr_16453_16525 = state_16417__$1;(statearr_16453_16525[(2)] = null);
(statearr_16453_16525[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (41)))
{var inst_16376 = (state_16417[(25)]);var inst_16392 = (state_16417[(2)]);var inst_16393 = cljs.core.next.call(null,inst_16376);var inst_16357 = inst_16393;var inst_16358 = null;var inst_16359 = (0);var inst_16360 = (0);var state_16417__$1 = (function (){var statearr_16454 = state_16417;(statearr_16454[(20)] = inst_16359);
(statearr_16454[(27)] = inst_16392);
(statearr_16454[(21)] = inst_16357);
(statearr_16454[(9)] = inst_16360);
(statearr_16454[(11)] = inst_16358);
return statearr_16454;
})();var statearr_16455_16526 = state_16417__$1;(statearr_16455_16526[(2)] = null);
(statearr_16455_16526[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (43)))
{var state_16417__$1 = state_16417;var statearr_16456_16527 = state_16417__$1;(statearr_16456_16527[(2)] = null);
(statearr_16456_16527[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (29)))
{var inst_16401 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16457_16528 = state_16417__$1;(statearr_16457_16528[(2)] = inst_16401);
(statearr_16457_16528[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (44)))
{var inst_16410 = (state_16417[(2)]);var state_16417__$1 = (function (){var statearr_16458 = state_16417;(statearr_16458[(28)] = inst_16410);
return statearr_16458;
})();var statearr_16459_16529 = state_16417__$1;(statearr_16459_16529[(2)] = null);
(statearr_16459_16529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (6)))
{var inst_16349 = (state_16417[(29)]);var inst_16348 = cljs.core.deref.call(null,cs);var inst_16349__$1 = cljs.core.keys.call(null,inst_16348);var inst_16350 = cljs.core.count.call(null,inst_16349__$1);var inst_16351 = cljs.core.reset_BANG_.call(null,dctr,inst_16350);var inst_16356 = cljs.core.seq.call(null,inst_16349__$1);var inst_16357 = inst_16356;var inst_16358 = null;var inst_16359 = (0);var inst_16360 = (0);var state_16417__$1 = (function (){var statearr_16460 = state_16417;(statearr_16460[(20)] = inst_16359);
(statearr_16460[(21)] = inst_16357);
(statearr_16460[(29)] = inst_16349__$1);
(statearr_16460[(9)] = inst_16360);
(statearr_16460[(11)] = inst_16358);
(statearr_16460[(30)] = inst_16351);
return statearr_16460;
})();var statearr_16461_16530 = state_16417__$1;(statearr_16461_16530[(2)] = null);
(statearr_16461_16530[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (28)))
{var inst_16357 = (state_16417[(21)]);var inst_16376 = (state_16417[(25)]);var inst_16376__$1 = cljs.core.seq.call(null,inst_16357);var state_16417__$1 = (function (){var statearr_16462 = state_16417;(statearr_16462[(25)] = inst_16376__$1);
return statearr_16462;
})();if(inst_16376__$1)
{var statearr_16463_16531 = state_16417__$1;(statearr_16463_16531[(1)] = (33));
} else
{var statearr_16464_16532 = state_16417__$1;(statearr_16464_16532[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (25)))
{var inst_16359 = (state_16417[(20)]);var inst_16360 = (state_16417[(9)]);var inst_16362 = (inst_16360 < inst_16359);var inst_16363 = inst_16362;var state_16417__$1 = state_16417;if(cljs.core.truth_(inst_16363))
{var statearr_16465_16533 = state_16417__$1;(statearr_16465_16533[(1)] = (27));
} else
{var statearr_16466_16534 = state_16417__$1;(statearr_16466_16534[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (34)))
{var state_16417__$1 = state_16417;var statearr_16467_16535 = state_16417__$1;(statearr_16467_16535[(2)] = null);
(statearr_16467_16535[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (17)))
{var state_16417__$1 = state_16417;var statearr_16468_16536 = state_16417__$1;(statearr_16468_16536[(2)] = null);
(statearr_16468_16536[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (3)))
{var inst_16415 = (state_16417[(2)]);var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16417__$1,inst_16415);
} else
{if((state_val_16418 === (12)))
{var inst_16344 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16469_16537 = state_16417__$1;(statearr_16469_16537[(2)] = inst_16344);
(statearr_16469_16537[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (2)))
{var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16417__$1,(4),ch);
} else
{if((state_val_16418 === (23)))
{var state_16417__$1 = state_16417;var statearr_16470_16538 = state_16417__$1;(statearr_16470_16538[(2)] = null);
(statearr_16470_16538[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (35)))
{var inst_16399 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16471_16539 = state_16417__$1;(statearr_16471_16539[(2)] = inst_16399);
(statearr_16471_16539[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (19)))
{var inst_16318 = (state_16417[(7)]);var inst_16322 = cljs.core.chunk_first.call(null,inst_16318);var inst_16323 = cljs.core.chunk_rest.call(null,inst_16318);var inst_16324 = cljs.core.count.call(null,inst_16322);var inst_16298 = inst_16323;var inst_16299 = inst_16322;var inst_16300 = inst_16324;var inst_16301 = (0);var state_16417__$1 = (function (){var statearr_16472 = state_16417;(statearr_16472[(13)] = inst_16301);
(statearr_16472[(15)] = inst_16300);
(statearr_16472[(16)] = inst_16298);
(statearr_16472[(17)] = inst_16299);
return statearr_16472;
})();var statearr_16473_16540 = state_16417__$1;(statearr_16473_16540[(2)] = null);
(statearr_16473_16540[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (11)))
{var inst_16318 = (state_16417[(7)]);var inst_16298 = (state_16417[(16)]);var inst_16318__$1 = cljs.core.seq.call(null,inst_16298);var state_16417__$1 = (function (){var statearr_16474 = state_16417;(statearr_16474[(7)] = inst_16318__$1);
return statearr_16474;
})();if(inst_16318__$1)
{var statearr_16475_16541 = state_16417__$1;(statearr_16475_16541[(1)] = (16));
} else
{var statearr_16476_16542 = state_16417__$1;(statearr_16476_16542[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (9)))
{var inst_16346 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16477_16543 = state_16417__$1;(statearr_16477_16543[(2)] = inst_16346);
(statearr_16477_16543[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (5)))
{var inst_16296 = cljs.core.deref.call(null,cs);var inst_16297 = cljs.core.seq.call(null,inst_16296);var inst_16298 = inst_16297;var inst_16299 = null;var inst_16300 = (0);var inst_16301 = (0);var state_16417__$1 = (function (){var statearr_16478 = state_16417;(statearr_16478[(13)] = inst_16301);
(statearr_16478[(15)] = inst_16300);
(statearr_16478[(16)] = inst_16298);
(statearr_16478[(17)] = inst_16299);
return statearr_16478;
})();var statearr_16479_16544 = state_16417__$1;(statearr_16479_16544[(2)] = null);
(statearr_16479_16544[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (14)))
{var state_16417__$1 = state_16417;var statearr_16480_16545 = state_16417__$1;(statearr_16480_16545[(2)] = null);
(statearr_16480_16545[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (45)))
{var inst_16407 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16481_16546 = state_16417__$1;(statearr_16481_16546[(2)] = inst_16407);
(statearr_16481_16546[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (26)))
{var inst_16349 = (state_16417[(29)]);var inst_16403 = (state_16417[(2)]);var inst_16404 = cljs.core.seq.call(null,inst_16349);var state_16417__$1 = (function (){var statearr_16482 = state_16417;(statearr_16482[(31)] = inst_16403);
return statearr_16482;
})();if(inst_16404)
{var statearr_16483_16547 = state_16417__$1;(statearr_16483_16547[(1)] = (42));
} else
{var statearr_16484_16548 = state_16417__$1;(statearr_16484_16548[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (16)))
{var inst_16318 = (state_16417[(7)]);var inst_16320 = cljs.core.chunked_seq_QMARK_.call(null,inst_16318);var state_16417__$1 = state_16417;if(inst_16320)
{var statearr_16485_16549 = state_16417__$1;(statearr_16485_16549[(1)] = (19));
} else
{var statearr_16486_16550 = state_16417__$1;(statearr_16486_16550[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (38)))
{var inst_16396 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16487_16551 = state_16417__$1;(statearr_16487_16551[(2)] = inst_16396);
(statearr_16487_16551[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (30)))
{var state_16417__$1 = state_16417;var statearr_16488_16552 = state_16417__$1;(statearr_16488_16552[(2)] = null);
(statearr_16488_16552[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (10)))
{var inst_16301 = (state_16417[(13)]);var inst_16299 = (state_16417[(17)]);var inst_16307 = cljs.core._nth.call(null,inst_16299,inst_16301);var inst_16308 = cljs.core.nth.call(null,inst_16307,(0),null);var inst_16309 = cljs.core.nth.call(null,inst_16307,(1),null);var state_16417__$1 = (function (){var statearr_16489 = state_16417;(statearr_16489[(26)] = inst_16308);
return statearr_16489;
})();if(cljs.core.truth_(inst_16309))
{var statearr_16490_16553 = state_16417__$1;(statearr_16490_16553[(1)] = (13));
} else
{var statearr_16491_16554 = state_16417__$1;(statearr_16491_16554[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (18)))
{var inst_16342 = (state_16417[(2)]);var state_16417__$1 = state_16417;var statearr_16492_16555 = state_16417__$1;(statearr_16492_16555[(2)] = inst_16342);
(statearr_16492_16555[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (42)))
{var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16417__$1,(45),dchan);
} else
{if((state_val_16418 === (37)))
{var inst_16289 = (state_16417[(10)]);var inst_16376 = (state_16417[(25)]);var inst_16385 = (state_16417[(23)]);var inst_16385__$1 = cljs.core.first.call(null,inst_16376);var inst_16386 = cljs.core.async.put_BANG_.call(null,inst_16385__$1,inst_16289,done);var state_16417__$1 = (function (){var statearr_16493 = state_16417;(statearr_16493[(23)] = inst_16385__$1);
return statearr_16493;
})();if(cljs.core.truth_(inst_16386))
{var statearr_16494_16556 = state_16417__$1;(statearr_16494_16556[(1)] = (39));
} else
{var statearr_16495_16557 = state_16417__$1;(statearr_16495_16557[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16418 === (8)))
{var inst_16301 = (state_16417[(13)]);var inst_16300 = (state_16417[(15)]);var inst_16303 = (inst_16301 < inst_16300);var inst_16304 = inst_16303;var state_16417__$1 = state_16417;if(cljs.core.truth_(inst_16304))
{var statearr_16496_16558 = state_16417__$1;(statearr_16496_16558[(1)] = (10));
} else
{var statearr_16497_16559 = state_16417__$1;(statearr_16497_16559[(1)] = (11));
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
});})(c__5821__auto___16505,cs,m,dchan,dctr,done))
;return ((function (switch__5806__auto__,c__5821__auto___16505,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_16501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16501[(0)] = state_machine__5807__auto__);
(statearr_16501[(1)] = (1));
return statearr_16501;
});
var state_machine__5807__auto____1 = (function (state_16417){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16417);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16502){if((e16502 instanceof Object))
{var ex__5810__auto__ = e16502;var statearr_16503_16560 = state_16417;(statearr_16503_16560[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16561 = state_16417;
state_16417 = G__16561;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16417){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___16505,cs,m,dchan,dctr,done))
})();var state__5823__auto__ = (function (){var statearr_16504 = f__5822__auto__.call(null);(statearr_16504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___16505);
return statearr_16504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___16505,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16563 = {};return obj16563;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16564){var map__16569 = p__16564;var map__16569__$1 = ((cljs.core.seq_QMARK_.call(null,map__16569))?cljs.core.apply.call(null,cljs.core.hash_map,map__16569):map__16569);var opts = map__16569__$1;var statearr_16570_16573 = state;(statearr_16570_16573[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16569,map__16569__$1,opts){
return (function (val){var statearr_16571_16574 = state;(statearr_16571_16574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16569,map__16569__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_16572_16575 = state;(statearr_16572_16575[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16564 = null;if (arguments.length > 3) {
  p__16564 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16564);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16576){
var state = cljs.core.first(arglist__16576);
arglist__16576 = cljs.core.next(arglist__16576);
var cont_block = cljs.core.first(arglist__16576);
arglist__16576 = cljs.core.next(arglist__16576);
var ports = cljs.core.first(arglist__16576);
var p__16564 = cljs.core.rest(arglist__16576);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16564);
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
;var m = (function (){if(typeof cljs.core.async.t16696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16696 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16697){
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
this.meta16697 = meta16697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16696.cljs$lang$type = true;
cljs.core.async.t16696.cljs$lang$ctorStr = "cljs.core.async/t16696";
cljs.core.async.t16696.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16696");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16698){var self__ = this;
var _16698__$1 = this;return self__.meta16697;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16698,meta16697__$1){var self__ = this;
var _16698__$1 = this;return (new cljs.core.async.t16696(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16697__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16696 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16696(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16697){return (new cljs.core.async.t16696(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16697));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16696(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5821__auto___16815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16768){var state_val_16769 = (state_16768[(1)]);if((state_val_16769 === (7)))
{var inst_16712 = (state_16768[(7)]);var inst_16717 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16712);var state_16768__$1 = state_16768;var statearr_16770_16816 = state_16768__$1;(statearr_16770_16816[(2)] = inst_16717);
(statearr_16770_16816[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (20)))
{var inst_16727 = (state_16768[(8)]);var state_16768__$1 = state_16768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16768__$1,(23),out,inst_16727);
} else
{if((state_val_16769 === (1)))
{var inst_16702 = (state_16768[(9)]);var inst_16702__$1 = calc_state.call(null);var inst_16703 = cljs.core.seq_QMARK_.call(null,inst_16702__$1);var state_16768__$1 = (function (){var statearr_16771 = state_16768;(statearr_16771[(9)] = inst_16702__$1);
return statearr_16771;
})();if(inst_16703)
{var statearr_16772_16817 = state_16768__$1;(statearr_16772_16817[(1)] = (2));
} else
{var statearr_16773_16818 = state_16768__$1;(statearr_16773_16818[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (24)))
{var inst_16720 = (state_16768[(10)]);var inst_16712 = inst_16720;var state_16768__$1 = (function (){var statearr_16774 = state_16768;(statearr_16774[(7)] = inst_16712);
return statearr_16774;
})();var statearr_16775_16819 = state_16768__$1;(statearr_16775_16819[(2)] = null);
(statearr_16775_16819[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (4)))
{var inst_16702 = (state_16768[(9)]);var inst_16708 = (state_16768[(2)]);var inst_16709 = cljs.core.get.call(null,inst_16708,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16710 = cljs.core.get.call(null,inst_16708,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16711 = cljs.core.get.call(null,inst_16708,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16712 = inst_16702;var state_16768__$1 = (function (){var statearr_16776 = state_16768;(statearr_16776[(11)] = inst_16709);
(statearr_16776[(7)] = inst_16712);
(statearr_16776[(12)] = inst_16710);
(statearr_16776[(13)] = inst_16711);
return statearr_16776;
})();var statearr_16777_16820 = state_16768__$1;(statearr_16777_16820[(2)] = null);
(statearr_16777_16820[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (15)))
{var state_16768__$1 = state_16768;var statearr_16778_16821 = state_16768__$1;(statearr_16778_16821[(2)] = null);
(statearr_16778_16821[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (21)))
{var inst_16720 = (state_16768[(10)]);var inst_16712 = inst_16720;var state_16768__$1 = (function (){var statearr_16779 = state_16768;(statearr_16779[(7)] = inst_16712);
return statearr_16779;
})();var statearr_16780_16822 = state_16768__$1;(statearr_16780_16822[(2)] = null);
(statearr_16780_16822[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (13)))
{var inst_16764 = (state_16768[(2)]);var state_16768__$1 = state_16768;var statearr_16781_16823 = state_16768__$1;(statearr_16781_16823[(2)] = inst_16764);
(statearr_16781_16823[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (22)))
{var inst_16762 = (state_16768[(2)]);var state_16768__$1 = state_16768;var statearr_16782_16824 = state_16768__$1;(statearr_16782_16824[(2)] = inst_16762);
(statearr_16782_16824[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (6)))
{var inst_16766 = (state_16768[(2)]);var state_16768__$1 = state_16768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16768__$1,inst_16766);
} else
{if((state_val_16769 === (25)))
{var state_16768__$1 = state_16768;var statearr_16783_16825 = state_16768__$1;(statearr_16783_16825[(2)] = null);
(statearr_16783_16825[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (17)))
{var inst_16742 = (state_16768[(14)]);var state_16768__$1 = state_16768;var statearr_16784_16826 = state_16768__$1;(statearr_16784_16826[(2)] = inst_16742);
(statearr_16784_16826[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (3)))
{var inst_16702 = (state_16768[(9)]);var state_16768__$1 = state_16768;var statearr_16785_16827 = state_16768__$1;(statearr_16785_16827[(2)] = inst_16702);
(statearr_16785_16827[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (12)))
{var inst_16728 = (state_16768[(15)]);var inst_16742 = (state_16768[(14)]);var inst_16723 = (state_16768[(16)]);var inst_16742__$1 = inst_16723.call(null,inst_16728);var state_16768__$1 = (function (){var statearr_16786 = state_16768;(statearr_16786[(14)] = inst_16742__$1);
return statearr_16786;
})();if(cljs.core.truth_(inst_16742__$1))
{var statearr_16787_16828 = state_16768__$1;(statearr_16787_16828[(1)] = (17));
} else
{var statearr_16788_16829 = state_16768__$1;(statearr_16788_16829[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (2)))
{var inst_16702 = (state_16768[(9)]);var inst_16705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16702);var state_16768__$1 = state_16768;var statearr_16789_16830 = state_16768__$1;(statearr_16789_16830[(2)] = inst_16705);
(statearr_16789_16830[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (23)))
{var inst_16753 = (state_16768[(2)]);var state_16768__$1 = state_16768;if(cljs.core.truth_(inst_16753))
{var statearr_16790_16831 = state_16768__$1;(statearr_16790_16831[(1)] = (24));
} else
{var statearr_16791_16832 = state_16768__$1;(statearr_16791_16832[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (19)))
{var inst_16750 = (state_16768[(2)]);var state_16768__$1 = state_16768;if(cljs.core.truth_(inst_16750))
{var statearr_16792_16833 = state_16768__$1;(statearr_16792_16833[(1)] = (20));
} else
{var statearr_16793_16834 = state_16768__$1;(statearr_16793_16834[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (11)))
{var inst_16727 = (state_16768[(8)]);var inst_16733 = (inst_16727 == null);var state_16768__$1 = state_16768;if(cljs.core.truth_(inst_16733))
{var statearr_16794_16835 = state_16768__$1;(statearr_16794_16835[(1)] = (14));
} else
{var statearr_16795_16836 = state_16768__$1;(statearr_16795_16836[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (9)))
{var inst_16720 = (state_16768[(10)]);var inst_16720__$1 = (state_16768[(2)]);var inst_16721 = cljs.core.get.call(null,inst_16720__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16722 = cljs.core.get.call(null,inst_16720__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16723 = cljs.core.get.call(null,inst_16720__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16768__$1 = (function (){var statearr_16796 = state_16768;(statearr_16796[(16)] = inst_16723);
(statearr_16796[(17)] = inst_16722);
(statearr_16796[(10)] = inst_16720__$1);
return statearr_16796;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_16768__$1,(10),inst_16721);
} else
{if((state_val_16769 === (5)))
{var inst_16712 = (state_16768[(7)]);var inst_16715 = cljs.core.seq_QMARK_.call(null,inst_16712);var state_16768__$1 = state_16768;if(inst_16715)
{var statearr_16797_16837 = state_16768__$1;(statearr_16797_16837[(1)] = (7));
} else
{var statearr_16798_16838 = state_16768__$1;(statearr_16798_16838[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (14)))
{var inst_16728 = (state_16768[(15)]);var inst_16735 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16728);var state_16768__$1 = state_16768;var statearr_16799_16839 = state_16768__$1;(statearr_16799_16839[(2)] = inst_16735);
(statearr_16799_16839[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (26)))
{var inst_16758 = (state_16768[(2)]);var state_16768__$1 = state_16768;var statearr_16800_16840 = state_16768__$1;(statearr_16800_16840[(2)] = inst_16758);
(statearr_16800_16840[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (16)))
{var inst_16738 = (state_16768[(2)]);var inst_16739 = calc_state.call(null);var inst_16712 = inst_16739;var state_16768__$1 = (function (){var statearr_16801 = state_16768;(statearr_16801[(7)] = inst_16712);
(statearr_16801[(18)] = inst_16738);
return statearr_16801;
})();var statearr_16802_16841 = state_16768__$1;(statearr_16802_16841[(2)] = null);
(statearr_16802_16841[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (10)))
{var inst_16727 = (state_16768[(8)]);var inst_16728 = (state_16768[(15)]);var inst_16726 = (state_16768[(2)]);var inst_16727__$1 = cljs.core.nth.call(null,inst_16726,(0),null);var inst_16728__$1 = cljs.core.nth.call(null,inst_16726,(1),null);var inst_16729 = (inst_16727__$1 == null);var inst_16730 = cljs.core._EQ_.call(null,inst_16728__$1,change);var inst_16731 = (inst_16729) || (inst_16730);var state_16768__$1 = (function (){var statearr_16803 = state_16768;(statearr_16803[(8)] = inst_16727__$1);
(statearr_16803[(15)] = inst_16728__$1);
return statearr_16803;
})();if(cljs.core.truth_(inst_16731))
{var statearr_16804_16842 = state_16768__$1;(statearr_16804_16842[(1)] = (11));
} else
{var statearr_16805_16843 = state_16768__$1;(statearr_16805_16843[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (18)))
{var inst_16728 = (state_16768[(15)]);var inst_16723 = (state_16768[(16)]);var inst_16722 = (state_16768[(17)]);var inst_16745 = cljs.core.empty_QMARK_.call(null,inst_16723);var inst_16746 = inst_16722.call(null,inst_16728);var inst_16747 = cljs.core.not.call(null,inst_16746);var inst_16748 = (inst_16745) && (inst_16747);var state_16768__$1 = state_16768;var statearr_16806_16844 = state_16768__$1;(statearr_16806_16844[(2)] = inst_16748);
(statearr_16806_16844[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16769 === (8)))
{var inst_16712 = (state_16768[(7)]);var state_16768__$1 = state_16768;var statearr_16807_16845 = state_16768__$1;(statearr_16807_16845[(2)] = inst_16712);
(statearr_16807_16845[(1)] = (9));
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
});})(c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5806__auto__,c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_16811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16811[(0)] = state_machine__5807__auto__);
(statearr_16811[(1)] = (1));
return statearr_16811;
});
var state_machine__5807__auto____1 = (function (state_16768){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16768);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16812){if((e16812 instanceof Object))
{var ex__5810__auto__ = e16812;var statearr_16813_16846 = state_16768;(statearr_16813_16846[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16768);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16812;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16847 = state_16768;
state_16768 = G__16847;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16768){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5823__auto__ = (function (){var statearr_16814 = f__5822__auto__.call(null);(statearr_16814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___16815);
return statearr_16814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___16815,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16849 = {};return obj16849;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
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
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__16850_SHARP_){if(cljs.core.truth_(p1__16850_SHARP_.call(null,topic)))
{return p1__16850_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16850_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16973 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16974){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16974 = meta16974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16973.cljs$lang$type = true;
cljs.core.async.t16973.cljs$lang$ctorStr = "cljs.core.async/t16973";
cljs.core.async.t16973.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16973");
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16973.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16975){var self__ = this;
var _16975__$1 = this;return self__.meta16974;
});})(mults,ensure_mult))
;
cljs.core.async.t16973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16975,meta16974__$1){var self__ = this;
var _16975__$1 = this;return (new cljs.core.async.t16973(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16974__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16973 = ((function (mults,ensure_mult){
return (function __GT_t16973(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16974){return (new cljs.core.async.t16973(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16974));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16973(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5821__auto___17095 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17095,mults,ensure_mult,p){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17095,mults,ensure_mult,p){
return (function (state_17047){var state_val_17048 = (state_17047[(1)]);if((state_val_17048 === (7)))
{var inst_17043 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17049_17096 = state_17047__$1;(statearr_17049_17096[(2)] = inst_17043);
(statearr_17049_17096[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (20)))
{var state_17047__$1 = state_17047;var statearr_17050_17097 = state_17047__$1;(statearr_17050_17097[(2)] = null);
(statearr_17050_17097[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (1)))
{var state_17047__$1 = state_17047;var statearr_17051_17098 = state_17047__$1;(statearr_17051_17098[(2)] = null);
(statearr_17051_17098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (24)))
{var inst_17026 = (state_17047[(7)]);var inst_17035 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17026);var state_17047__$1 = state_17047;var statearr_17052_17099 = state_17047__$1;(statearr_17052_17099[(2)] = inst_17035);
(statearr_17052_17099[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (4)))
{var inst_16978 = (state_17047[(8)]);var inst_16978__$1 = (state_17047[(2)]);var inst_16979 = (inst_16978__$1 == null);var state_17047__$1 = (function (){var statearr_17053 = state_17047;(statearr_17053[(8)] = inst_16978__$1);
return statearr_17053;
})();if(cljs.core.truth_(inst_16979))
{var statearr_17054_17100 = state_17047__$1;(statearr_17054_17100[(1)] = (5));
} else
{var statearr_17055_17101 = state_17047__$1;(statearr_17055_17101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (15)))
{var inst_17020 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17056_17102 = state_17047__$1;(statearr_17056_17102[(2)] = inst_17020);
(statearr_17056_17102[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (21)))
{var inst_17040 = (state_17047[(2)]);var state_17047__$1 = (function (){var statearr_17057 = state_17047;(statearr_17057[(9)] = inst_17040);
return statearr_17057;
})();var statearr_17058_17103 = state_17047__$1;(statearr_17058_17103[(2)] = null);
(statearr_17058_17103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (13)))
{var inst_17002 = (state_17047[(10)]);var inst_17004 = cljs.core.chunked_seq_QMARK_.call(null,inst_17002);var state_17047__$1 = state_17047;if(inst_17004)
{var statearr_17059_17104 = state_17047__$1;(statearr_17059_17104[(1)] = (16));
} else
{var statearr_17060_17105 = state_17047__$1;(statearr_17060_17105[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (22)))
{var inst_17032 = (state_17047[(2)]);var state_17047__$1 = state_17047;if(cljs.core.truth_(inst_17032))
{var statearr_17061_17106 = state_17047__$1;(statearr_17061_17106[(1)] = (23));
} else
{var statearr_17062_17107 = state_17047__$1;(statearr_17062_17107[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (6)))
{var inst_17026 = (state_17047[(7)]);var inst_16978 = (state_17047[(8)]);var inst_17028 = (state_17047[(11)]);var inst_17026__$1 = topic_fn.call(null,inst_16978);var inst_17027 = cljs.core.deref.call(null,mults);var inst_17028__$1 = cljs.core.get.call(null,inst_17027,inst_17026__$1);var state_17047__$1 = (function (){var statearr_17063 = state_17047;(statearr_17063[(7)] = inst_17026__$1);
(statearr_17063[(11)] = inst_17028__$1);
return statearr_17063;
})();if(cljs.core.truth_(inst_17028__$1))
{var statearr_17064_17108 = state_17047__$1;(statearr_17064_17108[(1)] = (19));
} else
{var statearr_17065_17109 = state_17047__$1;(statearr_17065_17109[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (25)))
{var inst_17037 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17066_17110 = state_17047__$1;(statearr_17066_17110[(2)] = inst_17037);
(statearr_17066_17110[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (17)))
{var inst_17002 = (state_17047[(10)]);var inst_17011 = cljs.core.first.call(null,inst_17002);var inst_17012 = cljs.core.async.muxch_STAR_.call(null,inst_17011);var inst_17013 = cljs.core.async.close_BANG_.call(null,inst_17012);var inst_17014 = cljs.core.next.call(null,inst_17002);var inst_16988 = inst_17014;var inst_16989 = null;var inst_16990 = (0);var inst_16991 = (0);var state_17047__$1 = (function (){var statearr_17067 = state_17047;(statearr_17067[(12)] = inst_16989);
(statearr_17067[(13)] = inst_16988);
(statearr_17067[(14)] = inst_16990);
(statearr_17067[(15)] = inst_16991);
(statearr_17067[(16)] = inst_17013);
return statearr_17067;
})();var statearr_17068_17111 = state_17047__$1;(statearr_17068_17111[(2)] = null);
(statearr_17068_17111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (3)))
{var inst_17045 = (state_17047[(2)]);var state_17047__$1 = state_17047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17047__$1,inst_17045);
} else
{if((state_val_17048 === (12)))
{var inst_17022 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17069_17112 = state_17047__$1;(statearr_17069_17112[(2)] = inst_17022);
(statearr_17069_17112[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (2)))
{var state_17047__$1 = state_17047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17047__$1,(4),ch);
} else
{if((state_val_17048 === (23)))
{var state_17047__$1 = state_17047;var statearr_17070_17113 = state_17047__$1;(statearr_17070_17113[(2)] = null);
(statearr_17070_17113[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (19)))
{var inst_16978 = (state_17047[(8)]);var inst_17028 = (state_17047[(11)]);var inst_17030 = cljs.core.async.muxch_STAR_.call(null,inst_17028);var state_17047__$1 = state_17047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17047__$1,(22),inst_17030,inst_16978);
} else
{if((state_val_17048 === (11)))
{var inst_17002 = (state_17047[(10)]);var inst_16988 = (state_17047[(13)]);var inst_17002__$1 = cljs.core.seq.call(null,inst_16988);var state_17047__$1 = (function (){var statearr_17071 = state_17047;(statearr_17071[(10)] = inst_17002__$1);
return statearr_17071;
})();if(inst_17002__$1)
{var statearr_17072_17114 = state_17047__$1;(statearr_17072_17114[(1)] = (13));
} else
{var statearr_17073_17115 = state_17047__$1;(statearr_17073_17115[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (9)))
{var inst_17024 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17074_17116 = state_17047__$1;(statearr_17074_17116[(2)] = inst_17024);
(statearr_17074_17116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (5)))
{var inst_16985 = cljs.core.deref.call(null,mults);var inst_16986 = cljs.core.vals.call(null,inst_16985);var inst_16987 = cljs.core.seq.call(null,inst_16986);var inst_16988 = inst_16987;var inst_16989 = null;var inst_16990 = (0);var inst_16991 = (0);var state_17047__$1 = (function (){var statearr_17075 = state_17047;(statearr_17075[(12)] = inst_16989);
(statearr_17075[(13)] = inst_16988);
(statearr_17075[(14)] = inst_16990);
(statearr_17075[(15)] = inst_16991);
return statearr_17075;
})();var statearr_17076_17117 = state_17047__$1;(statearr_17076_17117[(2)] = null);
(statearr_17076_17117[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (14)))
{var state_17047__$1 = state_17047;var statearr_17080_17118 = state_17047__$1;(statearr_17080_17118[(2)] = null);
(statearr_17080_17118[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (16)))
{var inst_17002 = (state_17047[(10)]);var inst_17006 = cljs.core.chunk_first.call(null,inst_17002);var inst_17007 = cljs.core.chunk_rest.call(null,inst_17002);var inst_17008 = cljs.core.count.call(null,inst_17006);var inst_16988 = inst_17007;var inst_16989 = inst_17006;var inst_16990 = inst_17008;var inst_16991 = (0);var state_17047__$1 = (function (){var statearr_17081 = state_17047;(statearr_17081[(12)] = inst_16989);
(statearr_17081[(13)] = inst_16988);
(statearr_17081[(14)] = inst_16990);
(statearr_17081[(15)] = inst_16991);
return statearr_17081;
})();var statearr_17082_17119 = state_17047__$1;(statearr_17082_17119[(2)] = null);
(statearr_17082_17119[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (10)))
{var inst_16989 = (state_17047[(12)]);var inst_16988 = (state_17047[(13)]);var inst_16990 = (state_17047[(14)]);var inst_16991 = (state_17047[(15)]);var inst_16996 = cljs.core._nth.call(null,inst_16989,inst_16991);var inst_16997 = cljs.core.async.muxch_STAR_.call(null,inst_16996);var inst_16998 = cljs.core.async.close_BANG_.call(null,inst_16997);var inst_16999 = (inst_16991 + (1));var tmp17077 = inst_16989;var tmp17078 = inst_16988;var tmp17079 = inst_16990;var inst_16988__$1 = tmp17078;var inst_16989__$1 = tmp17077;var inst_16990__$1 = tmp17079;var inst_16991__$1 = inst_16999;var state_17047__$1 = (function (){var statearr_17083 = state_17047;(statearr_17083[(17)] = inst_16998);
(statearr_17083[(12)] = inst_16989__$1);
(statearr_17083[(13)] = inst_16988__$1);
(statearr_17083[(14)] = inst_16990__$1);
(statearr_17083[(15)] = inst_16991__$1);
return statearr_17083;
})();var statearr_17084_17120 = state_17047__$1;(statearr_17084_17120[(2)] = null);
(statearr_17084_17120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (18)))
{var inst_17017 = (state_17047[(2)]);var state_17047__$1 = state_17047;var statearr_17085_17121 = state_17047__$1;(statearr_17085_17121[(2)] = inst_17017);
(statearr_17085_17121[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17048 === (8)))
{var inst_16990 = (state_17047[(14)]);var inst_16991 = (state_17047[(15)]);var inst_16993 = (inst_16991 < inst_16990);var inst_16994 = inst_16993;var state_17047__$1 = state_17047;if(cljs.core.truth_(inst_16994))
{var statearr_17086_17122 = state_17047__$1;(statearr_17086_17122[(1)] = (10));
} else
{var statearr_17087_17123 = state_17047__$1;(statearr_17087_17123[(1)] = (11));
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
});})(c__5821__auto___17095,mults,ensure_mult,p))
;return ((function (switch__5806__auto__,c__5821__auto___17095,mults,ensure_mult,p){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17091[(0)] = state_machine__5807__auto__);
(statearr_17091[(1)] = (1));
return statearr_17091;
});
var state_machine__5807__auto____1 = (function (state_17047){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17092){if((e17092 instanceof Object))
{var ex__5810__auto__ = e17092;var statearr_17093_17124 = state_17047;(statearr_17093_17124[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17125 = state_17047;
state_17047 = G__17125;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17047){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17095,mults,ensure_mult,p))
})();var state__5823__auto__ = (function (){var statearr_17094 = f__5822__auto__.call(null);(statearr_17094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17095);
return statearr_17094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17095,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5821__auto___17262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17232){var state_val_17233 = (state_17232[(1)]);if((state_val_17233 === (7)))
{var state_17232__$1 = state_17232;var statearr_17234_17263 = state_17232__$1;(statearr_17234_17263[(2)] = null);
(statearr_17234_17263[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (1)))
{var state_17232__$1 = state_17232;var statearr_17235_17264 = state_17232__$1;(statearr_17235_17264[(2)] = null);
(statearr_17235_17264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (4)))
{var inst_17196 = (state_17232[(7)]);var inst_17198 = (inst_17196 < cnt);var state_17232__$1 = state_17232;if(cljs.core.truth_(inst_17198))
{var statearr_17236_17265 = state_17232__$1;(statearr_17236_17265[(1)] = (6));
} else
{var statearr_17237_17266 = state_17232__$1;(statearr_17237_17266[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (15)))
{var inst_17228 = (state_17232[(2)]);var state_17232__$1 = state_17232;var statearr_17238_17267 = state_17232__$1;(statearr_17238_17267[(2)] = inst_17228);
(statearr_17238_17267[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (13)))
{var inst_17221 = cljs.core.async.close_BANG_.call(null,out);var state_17232__$1 = state_17232;var statearr_17239_17268 = state_17232__$1;(statearr_17239_17268[(2)] = inst_17221);
(statearr_17239_17268[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (6)))
{var state_17232__$1 = state_17232;var statearr_17240_17269 = state_17232__$1;(statearr_17240_17269[(2)] = null);
(statearr_17240_17269[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (3)))
{var inst_17230 = (state_17232[(2)]);var state_17232__$1 = state_17232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17232__$1,inst_17230);
} else
{if((state_val_17233 === (12)))
{var inst_17218 = (state_17232[(8)]);var inst_17218__$1 = (state_17232[(2)]);var inst_17219 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17218__$1);var state_17232__$1 = (function (){var statearr_17241 = state_17232;(statearr_17241[(8)] = inst_17218__$1);
return statearr_17241;
})();if(cljs.core.truth_(inst_17219))
{var statearr_17242_17270 = state_17232__$1;(statearr_17242_17270[(1)] = (13));
} else
{var statearr_17243_17271 = state_17232__$1;(statearr_17243_17271[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (2)))
{var inst_17195 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17196 = (0);var state_17232__$1 = (function (){var statearr_17244 = state_17232;(statearr_17244[(7)] = inst_17196);
(statearr_17244[(9)] = inst_17195);
return statearr_17244;
})();var statearr_17245_17272 = state_17232__$1;(statearr_17245_17272[(2)] = null);
(statearr_17245_17272[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (11)))
{var inst_17196 = (state_17232[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17232,(10),Object,null,(9));var inst_17205 = chs__$1.call(null,inst_17196);var inst_17206 = done.call(null,inst_17196);var inst_17207 = cljs.core.async.take_BANG_.call(null,inst_17205,inst_17206);var state_17232__$1 = state_17232;var statearr_17246_17273 = state_17232__$1;(statearr_17246_17273[(2)] = inst_17207);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17232__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (9)))
{var inst_17196 = (state_17232[(7)]);var inst_17209 = (state_17232[(2)]);var inst_17210 = (inst_17196 + (1));var inst_17196__$1 = inst_17210;var state_17232__$1 = (function (){var statearr_17247 = state_17232;(statearr_17247[(7)] = inst_17196__$1);
(statearr_17247[(10)] = inst_17209);
return statearr_17247;
})();var statearr_17248_17274 = state_17232__$1;(statearr_17248_17274[(2)] = null);
(statearr_17248_17274[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (5)))
{var inst_17216 = (state_17232[(2)]);var state_17232__$1 = (function (){var statearr_17249 = state_17232;(statearr_17249[(11)] = inst_17216);
return statearr_17249;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17232__$1,(12),dchan);
} else
{if((state_val_17233 === (14)))
{var inst_17218 = (state_17232[(8)]);var inst_17223 = cljs.core.apply.call(null,f,inst_17218);var state_17232__$1 = state_17232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17232__$1,(16),out,inst_17223);
} else
{if((state_val_17233 === (16)))
{var inst_17225 = (state_17232[(2)]);var state_17232__$1 = (function (){var statearr_17250 = state_17232;(statearr_17250[(12)] = inst_17225);
return statearr_17250;
})();var statearr_17251_17275 = state_17232__$1;(statearr_17251_17275[(2)] = null);
(statearr_17251_17275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (10)))
{var inst_17200 = (state_17232[(2)]);var inst_17201 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17232__$1 = (function (){var statearr_17252 = state_17232;(statearr_17252[(13)] = inst_17200);
return statearr_17252;
})();var statearr_17253_17276 = state_17232__$1;(statearr_17253_17276[(2)] = inst_17201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17232__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17233 === (8)))
{var inst_17214 = (state_17232[(2)]);var state_17232__$1 = state_17232;var statearr_17254_17277 = state_17232__$1;(statearr_17254_17277[(2)] = inst_17214);
(statearr_17254_17277[(1)] = (5));
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
});})(c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5806__auto__,c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17258[(0)] = state_machine__5807__auto__);
(statearr_17258[(1)] = (1));
return statearr_17258;
});
var state_machine__5807__auto____1 = (function (state_17232){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17259){if((e17259 instanceof Object))
{var ex__5810__auto__ = e17259;var statearr_17260_17278 = state_17232;(statearr_17260_17278[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17279 = state_17232;
state_17232 = G__17279;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17232){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5823__auto__ = (function (){var statearr_17261 = f__5822__auto__.call(null);(statearr_17261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17262);
return statearr_17261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17262,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17387 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17387,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17387,out){
return (function (state_17363){var state_val_17364 = (state_17363[(1)]);if((state_val_17364 === (7)))
{var inst_17342 = (state_17363[(7)]);var inst_17343 = (state_17363[(8)]);var inst_17342__$1 = (state_17363[(2)]);var inst_17343__$1 = cljs.core.nth.call(null,inst_17342__$1,(0),null);var inst_17344 = cljs.core.nth.call(null,inst_17342__$1,(1),null);var inst_17345 = (inst_17343__$1 == null);var state_17363__$1 = (function (){var statearr_17365 = state_17363;(statearr_17365[(7)] = inst_17342__$1);
(statearr_17365[(8)] = inst_17343__$1);
(statearr_17365[(9)] = inst_17344);
return statearr_17365;
})();if(cljs.core.truth_(inst_17345))
{var statearr_17366_17388 = state_17363__$1;(statearr_17366_17388[(1)] = (8));
} else
{var statearr_17367_17389 = state_17363__$1;(statearr_17367_17389[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (1)))
{var inst_17334 = cljs.core.vec.call(null,chs);var inst_17335 = inst_17334;var state_17363__$1 = (function (){var statearr_17368 = state_17363;(statearr_17368[(10)] = inst_17335);
return statearr_17368;
})();var statearr_17369_17390 = state_17363__$1;(statearr_17369_17390[(2)] = null);
(statearr_17369_17390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (4)))
{var inst_17335 = (state_17363[(10)]);var state_17363__$1 = state_17363;return cljs.core.async.ioc_alts_BANG_.call(null,state_17363__$1,(7),inst_17335);
} else
{if((state_val_17364 === (6)))
{var inst_17359 = (state_17363[(2)]);var state_17363__$1 = state_17363;var statearr_17370_17391 = state_17363__$1;(statearr_17370_17391[(2)] = inst_17359);
(statearr_17370_17391[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (3)))
{var inst_17361 = (state_17363[(2)]);var state_17363__$1 = state_17363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17363__$1,inst_17361);
} else
{if((state_val_17364 === (2)))
{var inst_17335 = (state_17363[(10)]);var inst_17337 = cljs.core.count.call(null,inst_17335);var inst_17338 = (inst_17337 > (0));var state_17363__$1 = state_17363;if(cljs.core.truth_(inst_17338))
{var statearr_17372_17392 = state_17363__$1;(statearr_17372_17392[(1)] = (4));
} else
{var statearr_17373_17393 = state_17363__$1;(statearr_17373_17393[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (11)))
{var inst_17335 = (state_17363[(10)]);var inst_17352 = (state_17363[(2)]);var tmp17371 = inst_17335;var inst_17335__$1 = tmp17371;var state_17363__$1 = (function (){var statearr_17374 = state_17363;(statearr_17374[(10)] = inst_17335__$1);
(statearr_17374[(11)] = inst_17352);
return statearr_17374;
})();var statearr_17375_17394 = state_17363__$1;(statearr_17375_17394[(2)] = null);
(statearr_17375_17394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (9)))
{var inst_17343 = (state_17363[(8)]);var state_17363__$1 = state_17363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17363__$1,(11),out,inst_17343);
} else
{if((state_val_17364 === (5)))
{var inst_17357 = cljs.core.async.close_BANG_.call(null,out);var state_17363__$1 = state_17363;var statearr_17376_17395 = state_17363__$1;(statearr_17376_17395[(2)] = inst_17357);
(statearr_17376_17395[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (10)))
{var inst_17355 = (state_17363[(2)]);var state_17363__$1 = state_17363;var statearr_17377_17396 = state_17363__$1;(statearr_17377_17396[(2)] = inst_17355);
(statearr_17377_17396[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17364 === (8)))
{var inst_17342 = (state_17363[(7)]);var inst_17335 = (state_17363[(10)]);var inst_17343 = (state_17363[(8)]);var inst_17344 = (state_17363[(9)]);var inst_17347 = (function (){var c = inst_17344;var v = inst_17343;var vec__17340 = inst_17342;var cs = inst_17335;return ((function (c,v,vec__17340,cs,inst_17342,inst_17335,inst_17343,inst_17344,state_val_17364,c__5821__auto___17387,out){
return (function (p1__17280_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17280_SHARP_);
});
;})(c,v,vec__17340,cs,inst_17342,inst_17335,inst_17343,inst_17344,state_val_17364,c__5821__auto___17387,out))
})();var inst_17348 = cljs.core.filterv.call(null,inst_17347,inst_17335);var inst_17335__$1 = inst_17348;var state_17363__$1 = (function (){var statearr_17378 = state_17363;(statearr_17378[(10)] = inst_17335__$1);
return statearr_17378;
})();var statearr_17379_17397 = state_17363__$1;(statearr_17379_17397[(2)] = null);
(statearr_17379_17397[(1)] = (2));
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
});})(c__5821__auto___17387,out))
;return ((function (switch__5806__auto__,c__5821__auto___17387,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17383 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17383[(0)] = state_machine__5807__auto__);
(statearr_17383[(1)] = (1));
return statearr_17383;
});
var state_machine__5807__auto____1 = (function (state_17363){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17384){if((e17384 instanceof Object))
{var ex__5810__auto__ = e17384;var statearr_17385_17398 = state_17363;(statearr_17385_17398[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17384;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17399 = state_17363;
state_17363 = G__17399;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17363){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17387,out))
})();var state__5823__auto__ = (function (){var statearr_17386 = f__5822__auto__.call(null);(statearr_17386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17387);
return statearr_17386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17387,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17492 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17492,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17492,out){
return (function (state_17469){var state_val_17470 = (state_17469[(1)]);if((state_val_17470 === (7)))
{var inst_17451 = (state_17469[(7)]);var inst_17451__$1 = (state_17469[(2)]);var inst_17452 = (inst_17451__$1 == null);var inst_17453 = cljs.core.not.call(null,inst_17452);var state_17469__$1 = (function (){var statearr_17471 = state_17469;(statearr_17471[(7)] = inst_17451__$1);
return statearr_17471;
})();if(inst_17453)
{var statearr_17472_17493 = state_17469__$1;(statearr_17472_17493[(1)] = (8));
} else
{var statearr_17473_17494 = state_17469__$1;(statearr_17473_17494[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (1)))
{var inst_17446 = (0);var state_17469__$1 = (function (){var statearr_17474 = state_17469;(statearr_17474[(8)] = inst_17446);
return statearr_17474;
})();var statearr_17475_17495 = state_17469__$1;(statearr_17475_17495[(2)] = null);
(statearr_17475_17495[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (4)))
{var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17469__$1,(7),ch);
} else
{if((state_val_17470 === (6)))
{var inst_17464 = (state_17469[(2)]);var state_17469__$1 = state_17469;var statearr_17476_17496 = state_17469__$1;(statearr_17476_17496[(2)] = inst_17464);
(statearr_17476_17496[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (3)))
{var inst_17466 = (state_17469[(2)]);var inst_17467 = cljs.core.async.close_BANG_.call(null,out);var state_17469__$1 = (function (){var statearr_17477 = state_17469;(statearr_17477[(9)] = inst_17466);
return statearr_17477;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17469__$1,inst_17467);
} else
{if((state_val_17470 === (2)))
{var inst_17446 = (state_17469[(8)]);var inst_17448 = (inst_17446 < n);var state_17469__$1 = state_17469;if(cljs.core.truth_(inst_17448))
{var statearr_17478_17497 = state_17469__$1;(statearr_17478_17497[(1)] = (4));
} else
{var statearr_17479_17498 = state_17469__$1;(statearr_17479_17498[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (11)))
{var inst_17446 = (state_17469[(8)]);var inst_17456 = (state_17469[(2)]);var inst_17457 = (inst_17446 + (1));var inst_17446__$1 = inst_17457;var state_17469__$1 = (function (){var statearr_17480 = state_17469;(statearr_17480[(10)] = inst_17456);
(statearr_17480[(8)] = inst_17446__$1);
return statearr_17480;
})();var statearr_17481_17499 = state_17469__$1;(statearr_17481_17499[(2)] = null);
(statearr_17481_17499[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (9)))
{var state_17469__$1 = state_17469;var statearr_17482_17500 = state_17469__$1;(statearr_17482_17500[(2)] = null);
(statearr_17482_17500[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (5)))
{var state_17469__$1 = state_17469;var statearr_17483_17501 = state_17469__$1;(statearr_17483_17501[(2)] = null);
(statearr_17483_17501[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (10)))
{var inst_17461 = (state_17469[(2)]);var state_17469__$1 = state_17469;var statearr_17484_17502 = state_17469__$1;(statearr_17484_17502[(2)] = inst_17461);
(statearr_17484_17502[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17470 === (8)))
{var inst_17451 = (state_17469[(7)]);var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17469__$1,(11),out,inst_17451);
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
});})(c__5821__auto___17492,out))
;return ((function (switch__5806__auto__,c__5821__auto___17492,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17488 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17488[(0)] = state_machine__5807__auto__);
(statearr_17488[(1)] = (1));
return statearr_17488;
});
var state_machine__5807__auto____1 = (function (state_17469){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17489){if((e17489 instanceof Object))
{var ex__5810__auto__ = e17489;var statearr_17490_17503 = state_17469;(statearr_17490_17503[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17469);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17489;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17504 = state_17469;
state_17469 = G__17504;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17469){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17492,out))
})();var state__5823__auto__ = (function (){var statearr_17491 = f__5822__auto__.call(null);(statearr_17491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17492);
return statearr_17491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17492,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17512 = (function (ch,f,map_LT_,meta17513){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17513 = meta17513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17512.cljs$lang$type = true;
cljs.core.async.t17512.cljs$lang$ctorStr = "cljs.core.async/t17512";
cljs.core.async.t17512.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17512");
});
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17515 = (function (fn1,_,meta17513,ch,f,map_LT_,meta17516){
this.fn1 = fn1;
this._ = _;
this.meta17513 = meta17513;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17516 = meta17516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17515.cljs$lang$type = true;
cljs.core.async.t17515.cljs$lang$ctorStr = "cljs.core.async/t17515";
cljs.core.async.t17515.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17515");
});})(___$1))
;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17505_SHARP_){return f1.call(null,(((p1__17505_SHARP_ == null))?null:self__.f.call(null,p1__17505_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17517){var self__ = this;
var _17517__$1 = this;return self__.meta17516;
});})(___$1))
;
cljs.core.async.t17515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17517,meta17516__$1){var self__ = this;
var _17517__$1 = this;return (new cljs.core.async.t17515(self__.fn1,self__._,self__.meta17513,self__.ch,self__.f,self__.map_LT_,meta17516__$1));
});})(___$1))
;
cljs.core.async.__GT_t17515 = ((function (___$1){
return (function __GT_t17515(fn1__$1,___$2,meta17513__$1,ch__$2,f__$2,map_LT___$2,meta17516){return (new cljs.core.async.t17515(fn1__$1,___$2,meta17513__$1,ch__$2,f__$2,map_LT___$2,meta17516));
});})(___$1))
;
}
return (new cljs.core.async.t17515(fn1,___$1,self__.meta17513,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17512.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17514){var self__ = this;
var _17514__$1 = this;return self__.meta17513;
});
cljs.core.async.t17512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17514,meta17513__$1){var self__ = this;
var _17514__$1 = this;return (new cljs.core.async.t17512(self__.ch,self__.f,self__.map_LT_,meta17513__$1));
});
cljs.core.async.__GT_t17512 = (function __GT_t17512(ch__$1,f__$1,map_LT___$1,meta17513){return (new cljs.core.async.t17512(ch__$1,f__$1,map_LT___$1,meta17513));
});
}
return (new cljs.core.async.t17512(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17521 = (function (ch,f,map_GT_,meta17522){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17522 = meta17522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17521.cljs$lang$type = true;
cljs.core.async.t17521.cljs$lang$ctorStr = "cljs.core.async/t17521";
cljs.core.async.t17521.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17521");
});
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17523){var self__ = this;
var _17523__$1 = this;return self__.meta17522;
});
cljs.core.async.t17521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17523,meta17522__$1){var self__ = this;
var _17523__$1 = this;return (new cljs.core.async.t17521(self__.ch,self__.f,self__.map_GT_,meta17522__$1));
});
cljs.core.async.__GT_t17521 = (function __GT_t17521(ch__$1,f__$1,map_GT___$1,meta17522){return (new cljs.core.async.t17521(ch__$1,f__$1,map_GT___$1,meta17522));
});
}
return (new cljs.core.async.t17521(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17527 = (function (ch,p,filter_GT_,meta17528){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17528 = meta17528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17527.cljs$lang$type = true;
cljs.core.async.t17527.cljs$lang$ctorStr = "cljs.core.async/t17527";
cljs.core.async.t17527.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17527");
});
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17529){var self__ = this;
var _17529__$1 = this;return self__.meta17528;
});
cljs.core.async.t17527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17529,meta17528__$1){var self__ = this;
var _17529__$1 = this;return (new cljs.core.async.t17527(self__.ch,self__.p,self__.filter_GT_,meta17528__$1));
});
cljs.core.async.__GT_t17527 = (function __GT_t17527(ch__$1,p__$1,filter_GT___$1,meta17528){return (new cljs.core.async.t17527(ch__$1,p__$1,filter_GT___$1,meta17528));
});
}
return (new cljs.core.async.t17527(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17612 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17612,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17612,out){
return (function (state_17591){var state_val_17592 = (state_17591[(1)]);if((state_val_17592 === (7)))
{var inst_17587 = (state_17591[(2)]);var state_17591__$1 = state_17591;var statearr_17593_17613 = state_17591__$1;(statearr_17593_17613[(2)] = inst_17587);
(statearr_17593_17613[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (1)))
{var state_17591__$1 = state_17591;var statearr_17594_17614 = state_17591__$1;(statearr_17594_17614[(2)] = null);
(statearr_17594_17614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (4)))
{var inst_17573 = (state_17591[(7)]);var inst_17573__$1 = (state_17591[(2)]);var inst_17574 = (inst_17573__$1 == null);var state_17591__$1 = (function (){var statearr_17595 = state_17591;(statearr_17595[(7)] = inst_17573__$1);
return statearr_17595;
})();if(cljs.core.truth_(inst_17574))
{var statearr_17596_17615 = state_17591__$1;(statearr_17596_17615[(1)] = (5));
} else
{var statearr_17597_17616 = state_17591__$1;(statearr_17597_17616[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (6)))
{var inst_17573 = (state_17591[(7)]);var inst_17578 = p.call(null,inst_17573);var state_17591__$1 = state_17591;if(cljs.core.truth_(inst_17578))
{var statearr_17598_17617 = state_17591__$1;(statearr_17598_17617[(1)] = (8));
} else
{var statearr_17599_17618 = state_17591__$1;(statearr_17599_17618[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (3)))
{var inst_17589 = (state_17591[(2)]);var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17591__$1,inst_17589);
} else
{if((state_val_17592 === (2)))
{var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17591__$1,(4),ch);
} else
{if((state_val_17592 === (11)))
{var inst_17581 = (state_17591[(2)]);var state_17591__$1 = state_17591;var statearr_17600_17619 = state_17591__$1;(statearr_17600_17619[(2)] = inst_17581);
(statearr_17600_17619[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (9)))
{var state_17591__$1 = state_17591;var statearr_17601_17620 = state_17591__$1;(statearr_17601_17620[(2)] = null);
(statearr_17601_17620[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (5)))
{var inst_17576 = cljs.core.async.close_BANG_.call(null,out);var state_17591__$1 = state_17591;var statearr_17602_17621 = state_17591__$1;(statearr_17602_17621[(2)] = inst_17576);
(statearr_17602_17621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (10)))
{var inst_17584 = (state_17591[(2)]);var state_17591__$1 = (function (){var statearr_17603 = state_17591;(statearr_17603[(8)] = inst_17584);
return statearr_17603;
})();var statearr_17604_17622 = state_17591__$1;(statearr_17604_17622[(2)] = null);
(statearr_17604_17622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17592 === (8)))
{var inst_17573 = (state_17591[(7)]);var state_17591__$1 = state_17591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17591__$1,(11),out,inst_17573);
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
});})(c__5821__auto___17612,out))
;return ((function (switch__5806__auto__,c__5821__auto___17612,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17608 = [null,null,null,null,null,null,null,null,null];(statearr_17608[(0)] = state_machine__5807__auto__);
(statearr_17608[(1)] = (1));
return statearr_17608;
});
var state_machine__5807__auto____1 = (function (state_17591){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17609){if((e17609 instanceof Object))
{var ex__5810__auto__ = e17609;var statearr_17610_17623 = state_17591;(statearr_17610_17623[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17591);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17624 = state_17591;
state_17591 = G__17624;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17591){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17612,out))
})();var state__5823__auto__ = (function (){var statearr_17611 = f__5822__auto__.call(null);(statearr_17611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17612);
return statearr_17611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17612,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__){
return (function (state_17790){var state_val_17791 = (state_17790[(1)]);if((state_val_17791 === (7)))
{var inst_17786 = (state_17790[(2)]);var state_17790__$1 = state_17790;var statearr_17792_17833 = state_17790__$1;(statearr_17792_17833[(2)] = inst_17786);
(statearr_17792_17833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (20)))
{var inst_17756 = (state_17790[(7)]);var inst_17767 = (state_17790[(2)]);var inst_17768 = cljs.core.next.call(null,inst_17756);var inst_17742 = inst_17768;var inst_17743 = null;var inst_17744 = (0);var inst_17745 = (0);var state_17790__$1 = (function (){var statearr_17793 = state_17790;(statearr_17793[(8)] = inst_17743);
(statearr_17793[(9)] = inst_17767);
(statearr_17793[(10)] = inst_17745);
(statearr_17793[(11)] = inst_17744);
(statearr_17793[(12)] = inst_17742);
return statearr_17793;
})();var statearr_17794_17834 = state_17790__$1;(statearr_17794_17834[(2)] = null);
(statearr_17794_17834[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (1)))
{var state_17790__$1 = state_17790;var statearr_17795_17835 = state_17790__$1;(statearr_17795_17835[(2)] = null);
(statearr_17795_17835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (4)))
{var inst_17731 = (state_17790[(13)]);var inst_17731__$1 = (state_17790[(2)]);var inst_17732 = (inst_17731__$1 == null);var state_17790__$1 = (function (){var statearr_17796 = state_17790;(statearr_17796[(13)] = inst_17731__$1);
return statearr_17796;
})();if(cljs.core.truth_(inst_17732))
{var statearr_17797_17836 = state_17790__$1;(statearr_17797_17836[(1)] = (5));
} else
{var statearr_17798_17837 = state_17790__$1;(statearr_17798_17837[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (15)))
{var state_17790__$1 = state_17790;var statearr_17802_17838 = state_17790__$1;(statearr_17802_17838[(2)] = null);
(statearr_17802_17838[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (21)))
{var state_17790__$1 = state_17790;var statearr_17803_17839 = state_17790__$1;(statearr_17803_17839[(2)] = null);
(statearr_17803_17839[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (13)))
{var inst_17743 = (state_17790[(8)]);var inst_17745 = (state_17790[(10)]);var inst_17744 = (state_17790[(11)]);var inst_17742 = (state_17790[(12)]);var inst_17752 = (state_17790[(2)]);var inst_17753 = (inst_17745 + (1));var tmp17799 = inst_17743;var tmp17800 = inst_17744;var tmp17801 = inst_17742;var inst_17742__$1 = tmp17801;var inst_17743__$1 = tmp17799;var inst_17744__$1 = tmp17800;var inst_17745__$1 = inst_17753;var state_17790__$1 = (function (){var statearr_17804 = state_17790;(statearr_17804[(8)] = inst_17743__$1);
(statearr_17804[(14)] = inst_17752);
(statearr_17804[(10)] = inst_17745__$1);
(statearr_17804[(11)] = inst_17744__$1);
(statearr_17804[(12)] = inst_17742__$1);
return statearr_17804;
})();var statearr_17805_17840 = state_17790__$1;(statearr_17805_17840[(2)] = null);
(statearr_17805_17840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (22)))
{var state_17790__$1 = state_17790;var statearr_17806_17841 = state_17790__$1;(statearr_17806_17841[(2)] = null);
(statearr_17806_17841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (6)))
{var inst_17731 = (state_17790[(13)]);var inst_17740 = f.call(null,inst_17731);var inst_17741 = cljs.core.seq.call(null,inst_17740);var inst_17742 = inst_17741;var inst_17743 = null;var inst_17744 = (0);var inst_17745 = (0);var state_17790__$1 = (function (){var statearr_17807 = state_17790;(statearr_17807[(8)] = inst_17743);
(statearr_17807[(10)] = inst_17745);
(statearr_17807[(11)] = inst_17744);
(statearr_17807[(12)] = inst_17742);
return statearr_17807;
})();var statearr_17808_17842 = state_17790__$1;(statearr_17808_17842[(2)] = null);
(statearr_17808_17842[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (17)))
{var inst_17756 = (state_17790[(7)]);var inst_17760 = cljs.core.chunk_first.call(null,inst_17756);var inst_17761 = cljs.core.chunk_rest.call(null,inst_17756);var inst_17762 = cljs.core.count.call(null,inst_17760);var inst_17742 = inst_17761;var inst_17743 = inst_17760;var inst_17744 = inst_17762;var inst_17745 = (0);var state_17790__$1 = (function (){var statearr_17809 = state_17790;(statearr_17809[(8)] = inst_17743);
(statearr_17809[(10)] = inst_17745);
(statearr_17809[(11)] = inst_17744);
(statearr_17809[(12)] = inst_17742);
return statearr_17809;
})();var statearr_17810_17843 = state_17790__$1;(statearr_17810_17843[(2)] = null);
(statearr_17810_17843[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (3)))
{var inst_17788 = (state_17790[(2)]);var state_17790__$1 = state_17790;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17790__$1,inst_17788);
} else
{if((state_val_17791 === (12)))
{var inst_17776 = (state_17790[(2)]);var state_17790__$1 = state_17790;var statearr_17811_17844 = state_17790__$1;(statearr_17811_17844[(2)] = inst_17776);
(statearr_17811_17844[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (2)))
{var state_17790__$1 = state_17790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17790__$1,(4),in$);
} else
{if((state_val_17791 === (23)))
{var inst_17784 = (state_17790[(2)]);var state_17790__$1 = state_17790;var statearr_17812_17845 = state_17790__$1;(statearr_17812_17845[(2)] = inst_17784);
(statearr_17812_17845[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (19)))
{var inst_17771 = (state_17790[(2)]);var state_17790__$1 = state_17790;var statearr_17813_17846 = state_17790__$1;(statearr_17813_17846[(2)] = inst_17771);
(statearr_17813_17846[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (11)))
{var inst_17742 = (state_17790[(12)]);var inst_17756 = (state_17790[(7)]);var inst_17756__$1 = cljs.core.seq.call(null,inst_17742);var state_17790__$1 = (function (){var statearr_17814 = state_17790;(statearr_17814[(7)] = inst_17756__$1);
return statearr_17814;
})();if(inst_17756__$1)
{var statearr_17815_17847 = state_17790__$1;(statearr_17815_17847[(1)] = (14));
} else
{var statearr_17816_17848 = state_17790__$1;(statearr_17816_17848[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (9)))
{var inst_17778 = (state_17790[(2)]);var inst_17779 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17790__$1 = (function (){var statearr_17817 = state_17790;(statearr_17817[(15)] = inst_17778);
return statearr_17817;
})();if(cljs.core.truth_(inst_17779))
{var statearr_17818_17849 = state_17790__$1;(statearr_17818_17849[(1)] = (21));
} else
{var statearr_17819_17850 = state_17790__$1;(statearr_17819_17850[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (5)))
{var inst_17734 = cljs.core.async.close_BANG_.call(null,out);var state_17790__$1 = state_17790;var statearr_17820_17851 = state_17790__$1;(statearr_17820_17851[(2)] = inst_17734);
(statearr_17820_17851[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (14)))
{var inst_17756 = (state_17790[(7)]);var inst_17758 = cljs.core.chunked_seq_QMARK_.call(null,inst_17756);var state_17790__$1 = state_17790;if(inst_17758)
{var statearr_17821_17852 = state_17790__$1;(statearr_17821_17852[(1)] = (17));
} else
{var statearr_17822_17853 = state_17790__$1;(statearr_17822_17853[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (16)))
{var inst_17774 = (state_17790[(2)]);var state_17790__$1 = state_17790;var statearr_17823_17854 = state_17790__$1;(statearr_17823_17854[(2)] = inst_17774);
(statearr_17823_17854[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17791 === (10)))
{var inst_17743 = (state_17790[(8)]);var inst_17745 = (state_17790[(10)]);var inst_17750 = cljs.core._nth.call(null,inst_17743,inst_17745);var state_17790__$1 = state_17790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17790__$1,(13),out,inst_17750);
} else
{if((state_val_17791 === (18)))
{var inst_17756 = (state_17790[(7)]);var inst_17765 = cljs.core.first.call(null,inst_17756);var state_17790__$1 = state_17790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17790__$1,(20),out,inst_17765);
} else
{if((state_val_17791 === (8)))
{var inst_17745 = (state_17790[(10)]);var inst_17744 = (state_17790[(11)]);var inst_17747 = (inst_17745 < inst_17744);var inst_17748 = inst_17747;var state_17790__$1 = state_17790;if(cljs.core.truth_(inst_17748))
{var statearr_17824_17855 = state_17790__$1;(statearr_17824_17855[(1)] = (10));
} else
{var statearr_17825_17856 = state_17790__$1;(statearr_17825_17856[(1)] = (11));
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
});})(c__5821__auto__))
;return ((function (switch__5806__auto__,c__5821__auto__){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17829[(0)] = state_machine__5807__auto__);
(statearr_17829[(1)] = (1));
return statearr_17829;
});
var state_machine__5807__auto____1 = (function (state_17790){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17790);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17830){if((e17830 instanceof Object))
{var ex__5810__auto__ = e17830;var statearr_17831_17857 = state_17790;(statearr_17831_17857[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17790);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17830;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17858 = state_17790;
state_17790 = G__17858;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17790){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_17832 = f__5822__auto__.call(null);(statearr_17832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_17832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto__))
);
return c__5821__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17955 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17955,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17955,out){
return (function (state_17930){var state_val_17931 = (state_17930[(1)]);if((state_val_17931 === (7)))
{var inst_17925 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17932_17956 = state_17930__$1;(statearr_17932_17956[(2)] = inst_17925);
(statearr_17932_17956[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (1)))
{var inst_17907 = null;var state_17930__$1 = (function (){var statearr_17933 = state_17930;(statearr_17933[(7)] = inst_17907);
return statearr_17933;
})();var statearr_17934_17957 = state_17930__$1;(statearr_17934_17957[(2)] = null);
(statearr_17934_17957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (4)))
{var inst_17910 = (state_17930[(8)]);var inst_17910__$1 = (state_17930[(2)]);var inst_17911 = (inst_17910__$1 == null);var inst_17912 = cljs.core.not.call(null,inst_17911);var state_17930__$1 = (function (){var statearr_17935 = state_17930;(statearr_17935[(8)] = inst_17910__$1);
return statearr_17935;
})();if(inst_17912)
{var statearr_17936_17958 = state_17930__$1;(statearr_17936_17958[(1)] = (5));
} else
{var statearr_17937_17959 = state_17930__$1;(statearr_17937_17959[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (6)))
{var state_17930__$1 = state_17930;var statearr_17938_17960 = state_17930__$1;(statearr_17938_17960[(2)] = null);
(statearr_17938_17960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (3)))
{var inst_17927 = (state_17930[(2)]);var inst_17928 = cljs.core.async.close_BANG_.call(null,out);var state_17930__$1 = (function (){var statearr_17939 = state_17930;(statearr_17939[(9)] = inst_17927);
return statearr_17939;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17930__$1,inst_17928);
} else
{if((state_val_17931 === (2)))
{var state_17930__$1 = state_17930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17930__$1,(4),ch);
} else
{if((state_val_17931 === (11)))
{var inst_17910 = (state_17930[(8)]);var inst_17919 = (state_17930[(2)]);var inst_17907 = inst_17910;var state_17930__$1 = (function (){var statearr_17940 = state_17930;(statearr_17940[(7)] = inst_17907);
(statearr_17940[(10)] = inst_17919);
return statearr_17940;
})();var statearr_17941_17961 = state_17930__$1;(statearr_17941_17961[(2)] = null);
(statearr_17941_17961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (9)))
{var inst_17910 = (state_17930[(8)]);var state_17930__$1 = state_17930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17930__$1,(11),out,inst_17910);
} else
{if((state_val_17931 === (5)))
{var inst_17910 = (state_17930[(8)]);var inst_17907 = (state_17930[(7)]);var inst_17914 = cljs.core._EQ_.call(null,inst_17910,inst_17907);var state_17930__$1 = state_17930;if(inst_17914)
{var statearr_17943_17962 = state_17930__$1;(statearr_17943_17962[(1)] = (8));
} else
{var statearr_17944_17963 = state_17930__$1;(statearr_17944_17963[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (10)))
{var inst_17922 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17945_17964 = state_17930__$1;(statearr_17945_17964[(2)] = inst_17922);
(statearr_17945_17964[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (8)))
{var inst_17907 = (state_17930[(7)]);var tmp17942 = inst_17907;var inst_17907__$1 = tmp17942;var state_17930__$1 = (function (){var statearr_17946 = state_17930;(statearr_17946[(7)] = inst_17907__$1);
return statearr_17946;
})();var statearr_17947_17965 = state_17930__$1;(statearr_17947_17965[(2)] = null);
(statearr_17947_17965[(1)] = (2));
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
});})(c__5821__auto___17955,out))
;return ((function (switch__5806__auto__,c__5821__auto___17955,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17951 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17951[(0)] = state_machine__5807__auto__);
(statearr_17951[(1)] = (1));
return statearr_17951;
});
var state_machine__5807__auto____1 = (function (state_17930){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17930);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17952){if((e17952 instanceof Object))
{var ex__5810__auto__ = e17952;var statearr_17953_17966 = state_17930;(statearr_17953_17966[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17952;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17967 = state_17930;
state_17930 = G__17967;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17930){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17955,out))
})();var state__5823__auto__ = (function (){var statearr_17954 = f__5822__auto__.call(null);(statearr_17954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17955);
return statearr_17954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17955,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___18102 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___18102,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___18102,out){
return (function (state_18072){var state_val_18073 = (state_18072[(1)]);if((state_val_18073 === (7)))
{var inst_18068 = (state_18072[(2)]);var state_18072__$1 = state_18072;var statearr_18074_18103 = state_18072__$1;(statearr_18074_18103[(2)] = inst_18068);
(statearr_18074_18103[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (1)))
{var inst_18035 = (new Array(n));var inst_18036 = inst_18035;var inst_18037 = (0);var state_18072__$1 = (function (){var statearr_18075 = state_18072;(statearr_18075[(7)] = inst_18037);
(statearr_18075[(8)] = inst_18036);
return statearr_18075;
})();var statearr_18076_18104 = state_18072__$1;(statearr_18076_18104[(2)] = null);
(statearr_18076_18104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (4)))
{var inst_18040 = (state_18072[(9)]);var inst_18040__$1 = (state_18072[(2)]);var inst_18041 = (inst_18040__$1 == null);var inst_18042 = cljs.core.not.call(null,inst_18041);var state_18072__$1 = (function (){var statearr_18077 = state_18072;(statearr_18077[(9)] = inst_18040__$1);
return statearr_18077;
})();if(inst_18042)
{var statearr_18078_18105 = state_18072__$1;(statearr_18078_18105[(1)] = (5));
} else
{var statearr_18079_18106 = state_18072__$1;(statearr_18079_18106[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (15)))
{var inst_18062 = (state_18072[(2)]);var state_18072__$1 = state_18072;var statearr_18080_18107 = state_18072__$1;(statearr_18080_18107[(2)] = inst_18062);
(statearr_18080_18107[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (13)))
{var state_18072__$1 = state_18072;var statearr_18081_18108 = state_18072__$1;(statearr_18081_18108[(2)] = null);
(statearr_18081_18108[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (6)))
{var inst_18037 = (state_18072[(7)]);var inst_18058 = (inst_18037 > (0));var state_18072__$1 = state_18072;if(cljs.core.truth_(inst_18058))
{var statearr_18082_18109 = state_18072__$1;(statearr_18082_18109[(1)] = (12));
} else
{var statearr_18083_18110 = state_18072__$1;(statearr_18083_18110[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (3)))
{var inst_18070 = (state_18072[(2)]);var state_18072__$1 = state_18072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18072__$1,inst_18070);
} else
{if((state_val_18073 === (12)))
{var inst_18036 = (state_18072[(8)]);var inst_18060 = cljs.core.vec.call(null,inst_18036);var state_18072__$1 = state_18072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18072__$1,(15),out,inst_18060);
} else
{if((state_val_18073 === (2)))
{var state_18072__$1 = state_18072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18072__$1,(4),ch);
} else
{if((state_val_18073 === (11)))
{var inst_18052 = (state_18072[(2)]);var inst_18053 = (new Array(n));var inst_18036 = inst_18053;var inst_18037 = (0);var state_18072__$1 = (function (){var statearr_18084 = state_18072;(statearr_18084[(7)] = inst_18037);
(statearr_18084[(10)] = inst_18052);
(statearr_18084[(8)] = inst_18036);
return statearr_18084;
})();var statearr_18085_18111 = state_18072__$1;(statearr_18085_18111[(2)] = null);
(statearr_18085_18111[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (9)))
{var inst_18036 = (state_18072[(8)]);var inst_18050 = cljs.core.vec.call(null,inst_18036);var state_18072__$1 = state_18072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18072__$1,(11),out,inst_18050);
} else
{if((state_val_18073 === (5)))
{var inst_18037 = (state_18072[(7)]);var inst_18040 = (state_18072[(9)]);var inst_18045 = (state_18072[(11)]);var inst_18036 = (state_18072[(8)]);var inst_18044 = (inst_18036[inst_18037] = inst_18040);var inst_18045__$1 = (inst_18037 + (1));var inst_18046 = (inst_18045__$1 < n);var state_18072__$1 = (function (){var statearr_18086 = state_18072;(statearr_18086[(11)] = inst_18045__$1);
(statearr_18086[(12)] = inst_18044);
return statearr_18086;
})();if(cljs.core.truth_(inst_18046))
{var statearr_18087_18112 = state_18072__$1;(statearr_18087_18112[(1)] = (8));
} else
{var statearr_18088_18113 = state_18072__$1;(statearr_18088_18113[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (14)))
{var inst_18065 = (state_18072[(2)]);var inst_18066 = cljs.core.async.close_BANG_.call(null,out);var state_18072__$1 = (function (){var statearr_18090 = state_18072;(statearr_18090[(13)] = inst_18065);
return statearr_18090;
})();var statearr_18091_18114 = state_18072__$1;(statearr_18091_18114[(2)] = inst_18066);
(statearr_18091_18114[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (10)))
{var inst_18056 = (state_18072[(2)]);var state_18072__$1 = state_18072;var statearr_18092_18115 = state_18072__$1;(statearr_18092_18115[(2)] = inst_18056);
(statearr_18092_18115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18073 === (8)))
{var inst_18045 = (state_18072[(11)]);var inst_18036 = (state_18072[(8)]);var tmp18089 = inst_18036;var inst_18036__$1 = tmp18089;var inst_18037 = inst_18045;var state_18072__$1 = (function (){var statearr_18093 = state_18072;(statearr_18093[(7)] = inst_18037);
(statearr_18093[(8)] = inst_18036__$1);
return statearr_18093;
})();var statearr_18094_18116 = state_18072__$1;(statearr_18094_18116[(2)] = null);
(statearr_18094_18116[(1)] = (2));
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
});})(c__5821__auto___18102,out))
;return ((function (switch__5806__auto__,c__5821__auto___18102,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_18098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18098[(0)] = state_machine__5807__auto__);
(statearr_18098[(1)] = (1));
return statearr_18098;
});
var state_machine__5807__auto____1 = (function (state_18072){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_18072);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e18099){if((e18099 instanceof Object))
{var ex__5810__auto__ = e18099;var statearr_18100_18117 = state_18072;(statearr_18100_18117[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18099;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18118 = state_18072;
state_18072 = G__18118;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_18072){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_18072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___18102,out))
})();var state__5823__auto__ = (function (){var statearr_18101 = f__5822__auto__.call(null);(statearr_18101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___18102);
return statearr_18101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___18102,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___18261 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___18261,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___18261,out){
return (function (state_18231){var state_val_18232 = (state_18231[(1)]);if((state_val_18232 === (7)))
{var inst_18227 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18233_18262 = state_18231__$1;(statearr_18233_18262[(2)] = inst_18227);
(statearr_18233_18262[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (1)))
{var inst_18190 = [];var inst_18191 = inst_18190;var inst_18192 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18231__$1 = (function (){var statearr_18234 = state_18231;(statearr_18234[(7)] = inst_18191);
(statearr_18234[(8)] = inst_18192);
return statearr_18234;
})();var statearr_18235_18263 = state_18231__$1;(statearr_18235_18263[(2)] = null);
(statearr_18235_18263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (4)))
{var inst_18195 = (state_18231[(9)]);var inst_18195__$1 = (state_18231[(2)]);var inst_18196 = (inst_18195__$1 == null);var inst_18197 = cljs.core.not.call(null,inst_18196);var state_18231__$1 = (function (){var statearr_18236 = state_18231;(statearr_18236[(9)] = inst_18195__$1);
return statearr_18236;
})();if(inst_18197)
{var statearr_18237_18264 = state_18231__$1;(statearr_18237_18264[(1)] = (5));
} else
{var statearr_18238_18265 = state_18231__$1;(statearr_18238_18265[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (15)))
{var inst_18221 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18239_18266 = state_18231__$1;(statearr_18239_18266[(2)] = inst_18221);
(statearr_18239_18266[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (13)))
{var state_18231__$1 = state_18231;var statearr_18240_18267 = state_18231__$1;(statearr_18240_18267[(2)] = null);
(statearr_18240_18267[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (6)))
{var inst_18191 = (state_18231[(7)]);var inst_18216 = inst_18191.length;var inst_18217 = (inst_18216 > (0));var state_18231__$1 = state_18231;if(cljs.core.truth_(inst_18217))
{var statearr_18241_18268 = state_18231__$1;(statearr_18241_18268[(1)] = (12));
} else
{var statearr_18242_18269 = state_18231__$1;(statearr_18242_18269[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (3)))
{var inst_18229 = (state_18231[(2)]);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18231__$1,inst_18229);
} else
{if((state_val_18232 === (12)))
{var inst_18191 = (state_18231[(7)]);var inst_18219 = cljs.core.vec.call(null,inst_18191);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18231__$1,(15),out,inst_18219);
} else
{if((state_val_18232 === (2)))
{var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(4),ch);
} else
{if((state_val_18232 === (11)))
{var inst_18199 = (state_18231[(10)]);var inst_18195 = (state_18231[(9)]);var inst_18209 = (state_18231[(2)]);var inst_18210 = [];var inst_18211 = inst_18210.push(inst_18195);var inst_18191 = inst_18210;var inst_18192 = inst_18199;var state_18231__$1 = (function (){var statearr_18243 = state_18231;(statearr_18243[(11)] = inst_18211);
(statearr_18243[(12)] = inst_18209);
(statearr_18243[(7)] = inst_18191);
(statearr_18243[(8)] = inst_18192);
return statearr_18243;
})();var statearr_18244_18270 = state_18231__$1;(statearr_18244_18270[(2)] = null);
(statearr_18244_18270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (9)))
{var inst_18191 = (state_18231[(7)]);var inst_18207 = cljs.core.vec.call(null,inst_18191);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18231__$1,(11),out,inst_18207);
} else
{if((state_val_18232 === (5)))
{var inst_18192 = (state_18231[(8)]);var inst_18199 = (state_18231[(10)]);var inst_18195 = (state_18231[(9)]);var inst_18199__$1 = f.call(null,inst_18195);var inst_18200 = cljs.core._EQ_.call(null,inst_18199__$1,inst_18192);var inst_18201 = cljs.core.keyword_identical_QMARK_.call(null,inst_18192,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18202 = (inst_18200) || (inst_18201);var state_18231__$1 = (function (){var statearr_18245 = state_18231;(statearr_18245[(10)] = inst_18199__$1);
return statearr_18245;
})();if(cljs.core.truth_(inst_18202))
{var statearr_18246_18271 = state_18231__$1;(statearr_18246_18271[(1)] = (8));
} else
{var statearr_18247_18272 = state_18231__$1;(statearr_18247_18272[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (14)))
{var inst_18224 = (state_18231[(2)]);var inst_18225 = cljs.core.async.close_BANG_.call(null,out);var state_18231__$1 = (function (){var statearr_18249 = state_18231;(statearr_18249[(13)] = inst_18224);
return statearr_18249;
})();var statearr_18250_18273 = state_18231__$1;(statearr_18250_18273[(2)] = inst_18225);
(statearr_18250_18273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (10)))
{var inst_18214 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18251_18274 = state_18231__$1;(statearr_18251_18274[(2)] = inst_18214);
(statearr_18251_18274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (8)))
{var inst_18191 = (state_18231[(7)]);var inst_18199 = (state_18231[(10)]);var inst_18195 = (state_18231[(9)]);var inst_18204 = inst_18191.push(inst_18195);var tmp18248 = inst_18191;var inst_18191__$1 = tmp18248;var inst_18192 = inst_18199;var state_18231__$1 = (function (){var statearr_18252 = state_18231;(statearr_18252[(14)] = inst_18204);
(statearr_18252[(7)] = inst_18191__$1);
(statearr_18252[(8)] = inst_18192);
return statearr_18252;
})();var statearr_18253_18275 = state_18231__$1;(statearr_18253_18275[(2)] = null);
(statearr_18253_18275[(1)] = (2));
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
});})(c__5821__auto___18261,out))
;return ((function (switch__5806__auto__,c__5821__auto___18261,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_18257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18257[(0)] = state_machine__5807__auto__);
(statearr_18257[(1)] = (1));
return statearr_18257;
});
var state_machine__5807__auto____1 = (function (state_18231){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_18231);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e18258){if((e18258 instanceof Object))
{var ex__5810__auto__ = e18258;var statearr_18259_18276 = state_18231;(statearr_18259_18276[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18258;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18277 = state_18231;
state_18231 = G__18277;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___18261,out))
})();var state__5823__auto__ = (function (){var statearr_18260 = f__5822__auto__.call(null);(statearr_18260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___18261);
return statearr_18260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___18261,out))
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
