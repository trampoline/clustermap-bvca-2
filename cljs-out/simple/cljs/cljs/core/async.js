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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34653 = (function (f,fn_handler,meta34654){
this.f = f;
this.fn_handler = fn_handler;
this.meta34654 = meta34654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34653.cljs$lang$type = true;
cljs.core.async.t34653.cljs$lang$ctorStr = "cljs.core.async/t34653";
cljs.core.async.t34653.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t34653");
});
cljs.core.async.t34653.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34655){var self__ = this;
var _34655__$1 = this;return self__.meta34654;
});
cljs.core.async.t34653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34655,meta34654__$1){var self__ = this;
var _34655__$1 = this;return (new cljs.core.async.t34653(self__.f,self__.fn_handler,meta34654__$1));
});
cljs.core.async.__GT_t34653 = (function __GT_t34653(f__$1,fn_handler__$1,meta34654){return (new cljs.core.async.t34653(f__$1,fn_handler__$1,meta34654));
});
}
return (new cljs.core.async.t34653(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34657 = buff;if(G__34657)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__34657.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34657.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34657);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34657);
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
{var val_34658 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34658);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_34658,ret){
return (function (){return fn1.call(null,val_34658);
});})(val_34658,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___34659 = n;var x_34660 = (0);while(true){
if((x_34660 < n__4506__auto___34659))
{(a[x_34660] = (0));
{
var G__34661 = (x_34660 + (1));
x_34660 = G__34661;
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
var G__34662 = (i + (1));
i = G__34662;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34666 = (function (flag,alt_flag,meta34667){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34667 = meta34667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34666.cljs$lang$type = true;
cljs.core.async.t34666.cljs$lang$ctorStr = "cljs.core.async/t34666";
cljs.core.async.t34666.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t34666");
});})(flag))
;
cljs.core.async.t34666.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t34666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t34666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34668){var self__ = this;
var _34668__$1 = this;return self__.meta34667;
});})(flag))
;
cljs.core.async.t34666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34668,meta34667__$1){var self__ = this;
var _34668__$1 = this;return (new cljs.core.async.t34666(self__.flag,self__.alt_flag,meta34667__$1));
});})(flag))
;
cljs.core.async.__GT_t34666 = ((function (flag){
return (function __GT_t34666(flag__$1,alt_flag__$1,meta34667){return (new cljs.core.async.t34666(flag__$1,alt_flag__$1,meta34667));
});})(flag))
;
}
return (new cljs.core.async.t34666(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34672 = (function (cb,flag,alt_handler,meta34673){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34673 = meta34673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34672.cljs$lang$type = true;
cljs.core.async.t34672.cljs$lang$ctorStr = "cljs.core.async/t34672";
cljs.core.async.t34672.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t34672");
});
cljs.core.async.t34672.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34674){var self__ = this;
var _34674__$1 = this;return self__.meta34673;
});
cljs.core.async.t34672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34674,meta34673__$1){var self__ = this;
var _34674__$1 = this;return (new cljs.core.async.t34672(self__.cb,self__.flag,self__.alt_handler,meta34673__$1));
});
cljs.core.async.__GT_t34672 = (function __GT_t34672(cb__$1,flag__$1,alt_handler__$1,meta34673){return (new cljs.core.async.t34672(cb__$1,flag__$1,alt_handler__$1,meta34673));
});
}
return (new cljs.core.async.t34672(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34675_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34675_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34676_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34676_SHARP_,port], null));
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
var G__34677 = (i + (1));
i = G__34677;
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
var alts_BANG___delegate = function (ports,p__34678){var map__34680 = p__34678;var map__34680__$1 = ((cljs.core.seq_QMARK_.call(null,map__34680))?cljs.core.apply.call(null,cljs.core.hash_map,map__34680):map__34680);var opts = map__34680__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__34678 = null;if (arguments.length > 1) {
  p__34678 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34678);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34681){
var ports = cljs.core.first(arglist__34681);
var p__34678 = cljs.core.rest(arglist__34681);
return alts_BANG___delegate(ports,p__34678);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___34776 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___34776){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___34776){
return (function (state_34752){var state_val_34753 = (state_34752[(1)]);if((state_val_34753 === (7)))
{var inst_34748 = (state_34752[(2)]);var state_34752__$1 = state_34752;var statearr_34754_34777 = state_34752__$1;(statearr_34754_34777[(2)] = inst_34748);
(statearr_34754_34777[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (1)))
{var state_34752__$1 = state_34752;var statearr_34755_34778 = state_34752__$1;(statearr_34755_34778[(2)] = null);
(statearr_34755_34778[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (4)))
{var inst_34731 = (state_34752[(7)]);var inst_34731__$1 = (state_34752[(2)]);var inst_34732 = (inst_34731__$1 == null);var state_34752__$1 = (function (){var statearr_34756 = state_34752;(statearr_34756[(7)] = inst_34731__$1);
return statearr_34756;
})();if(cljs.core.truth_(inst_34732))
{var statearr_34757_34779 = state_34752__$1;(statearr_34757_34779[(1)] = (5));
} else
{var statearr_34758_34780 = state_34752__$1;(statearr_34758_34780[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (13)))
{var state_34752__$1 = state_34752;var statearr_34759_34781 = state_34752__$1;(statearr_34759_34781[(2)] = null);
(statearr_34759_34781[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (6)))
{var inst_34731 = (state_34752[(7)]);var state_34752__$1 = state_34752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34752__$1,(11),to,inst_34731);
} else
{if((state_val_34753 === (3)))
{var inst_34750 = (state_34752[(2)]);var state_34752__$1 = state_34752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34752__$1,inst_34750);
} else
{if((state_val_34753 === (12)))
{var state_34752__$1 = state_34752;var statearr_34760_34782 = state_34752__$1;(statearr_34760_34782[(2)] = null);
(statearr_34760_34782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (2)))
{var state_34752__$1 = state_34752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34752__$1,(4),from);
} else
{if((state_val_34753 === (11)))
{var inst_34741 = (state_34752[(2)]);var state_34752__$1 = state_34752;if(cljs.core.truth_(inst_34741))
{var statearr_34761_34783 = state_34752__$1;(statearr_34761_34783[(1)] = (12));
} else
{var statearr_34762_34784 = state_34752__$1;(statearr_34762_34784[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (9)))
{var state_34752__$1 = state_34752;var statearr_34763_34785 = state_34752__$1;(statearr_34763_34785[(2)] = null);
(statearr_34763_34785[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (5)))
{var state_34752__$1 = state_34752;if(cljs.core.truth_(close_QMARK_))
{var statearr_34764_34786 = state_34752__$1;(statearr_34764_34786[(1)] = (8));
} else
{var statearr_34765_34787 = state_34752__$1;(statearr_34765_34787[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (14)))
{var inst_34746 = (state_34752[(2)]);var state_34752__$1 = state_34752;var statearr_34766_34788 = state_34752__$1;(statearr_34766_34788[(2)] = inst_34746);
(statearr_34766_34788[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (10)))
{var inst_34738 = (state_34752[(2)]);var state_34752__$1 = state_34752;var statearr_34767_34789 = state_34752__$1;(statearr_34767_34789[(2)] = inst_34738);
(statearr_34767_34789[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34753 === (8)))
{var inst_34735 = cljs.core.async.close_BANG_.call(null,to);var state_34752__$1 = state_34752;var statearr_34768_34790 = state_34752__$1;(statearr_34768_34790[(2)] = inst_34735);
(statearr_34768_34790[(1)] = (10));
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
});})(c__5819__auto___34776))
;return ((function (switch__5804__auto__,c__5819__auto___34776){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_34772 = [null,null,null,null,null,null,null,null];(statearr_34772[(0)] = state_machine__5805__auto__);
(statearr_34772[(1)] = (1));
return statearr_34772;
});
var state_machine__5805__auto____1 = (function (state_34752){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_34752);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e34773){if((e34773 instanceof Object))
{var ex__5808__auto__ = e34773;var statearr_34774_34791 = state_34752;(statearr_34774_34791[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34773;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34792 = state_34752;
state_34752 = G__34792;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_34752){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_34752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___34776))
})();var state__5821__auto__ = (function (){var statearr_34775 = f__5820__auto__.call(null);(statearr_34775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___34776);
return statearr_34775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___34776))
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
return (function (p__34976){var vec__34977 = p__34976;var v = cljs.core.nth.call(null,vec__34977,(0),null);var p = cljs.core.nth.call(null,vec__34977,(1),null);var job = vec__34977;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___35159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results){
return (function (state_34982){var state_val_34983 = (state_34982[(1)]);if((state_val_34983 === (2)))
{var inst_34979 = (state_34982[(2)]);var inst_34980 = cljs.core.async.close_BANG_.call(null,res);var state_34982__$1 = (function (){var statearr_34984 = state_34982;(statearr_34984[(7)] = inst_34979);
return statearr_34984;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else
{if((state_val_34983 === (1)))
{var state_34982__$1 = state_34982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34982__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_34988 = [null,null,null,null,null,null,null,null];(statearr_34988[(0)] = state_machine__5805__auto__);
(statearr_34988[(1)] = (1));
return statearr_34988;
});
var state_machine__5805__auto____1 = (function (state_34982){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_34982);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e34989){if((e34989 instanceof Object))
{var ex__5808__auto__ = e34989;var statearr_34990_35160 = state_34982;(statearr_34990_35160[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34989;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35161 = state_34982;
state_34982 = G__35161;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_34991 = f__5820__auto__.call(null);(statearr_34991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35159);
return statearr_34991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35159,res,vec__34977,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__34992){var vec__34993 = p__34992;var v = cljs.core.nth.call(null,vec__34993,(0),null);var p = cljs.core.nth.call(null,vec__34993,(1),null);var job = vec__34993;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___35162 = n;var __35163 = (0);while(true){
if((__35163 < n__4506__auto___35162))
{var G__34994_35164 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__34994_35164) {
case "async":
var c__5819__auto___35166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35163,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__35163,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function (state_35007){var state_val_35008 = (state_35007[(1)]);if((state_val_35008 === (7)))
{var inst_35003 = (state_35007[(2)]);var state_35007__$1 = state_35007;var statearr_35009_35167 = state_35007__$1;(statearr_35009_35167[(2)] = inst_35003);
(statearr_35009_35167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35008 === (6)))
{var state_35007__$1 = state_35007;var statearr_35010_35168 = state_35007__$1;(statearr_35010_35168[(2)] = null);
(statearr_35010_35168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35008 === (5)))
{var state_35007__$1 = state_35007;var statearr_35011_35169 = state_35007__$1;(statearr_35011_35169[(2)] = null);
(statearr_35011_35169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35008 === (4)))
{var inst_34997 = (state_35007[(2)]);var inst_34998 = async.call(null,inst_34997);var state_35007__$1 = state_35007;if(cljs.core.truth_(inst_34998))
{var statearr_35012_35170 = state_35007__$1;(statearr_35012_35170[(1)] = (5));
} else
{var statearr_35013_35171 = state_35007__$1;(statearr_35013_35171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35008 === (3)))
{var inst_35005 = (state_35007[(2)]);var state_35007__$1 = state_35007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35007__$1,inst_35005);
} else
{if((state_val_35008 === (2)))
{var state_35007__$1 = state_35007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(4),jobs);
} else
{if((state_val_35008 === (1)))
{var state_35007__$1 = state_35007;var statearr_35014_35172 = state_35007__$1;(statearr_35014_35172[(2)] = null);
(statearr_35014_35172[(1)] = (2));
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
});})(__35163,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
;return ((function (__35163,switch__5804__auto__,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35018 = [null,null,null,null,null,null,null];(statearr_35018[(0)] = state_machine__5805__auto__);
(statearr_35018[(1)] = (1));
return statearr_35018;
});
var state_machine__5805__auto____1 = (function (state_35007){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35007);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35019){if((e35019 instanceof Object))
{var ex__5808__auto__ = e35019;var statearr_35020_35173 = state_35007;(statearr_35020_35173[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35174 = state_35007;
state_35007 = G__35174;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__35163,switch__5804__auto__,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35021 = f__5820__auto__.call(null);(statearr_35021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35166);
return statearr_35021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__35163,c__5819__auto___35166,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___35175 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__35163,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__35163,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function (state_35034){var state_val_35035 = (state_35034[(1)]);if((state_val_35035 === (7)))
{var inst_35030 = (state_35034[(2)]);var state_35034__$1 = state_35034;var statearr_35036_35176 = state_35034__$1;(statearr_35036_35176[(2)] = inst_35030);
(statearr_35036_35176[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35035 === (6)))
{var state_35034__$1 = state_35034;var statearr_35037_35177 = state_35034__$1;(statearr_35037_35177[(2)] = null);
(statearr_35037_35177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35035 === (5)))
{var state_35034__$1 = state_35034;var statearr_35038_35178 = state_35034__$1;(statearr_35038_35178[(2)] = null);
(statearr_35038_35178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35035 === (4)))
{var inst_35024 = (state_35034[(2)]);var inst_35025 = process.call(null,inst_35024);var state_35034__$1 = state_35034;if(cljs.core.truth_(inst_35025))
{var statearr_35039_35179 = state_35034__$1;(statearr_35039_35179[(1)] = (5));
} else
{var statearr_35040_35180 = state_35034__$1;(statearr_35040_35180[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35035 === (3)))
{var inst_35032 = (state_35034[(2)]);var state_35034__$1 = state_35034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35034__$1,inst_35032);
} else
{if((state_val_35035 === (2)))
{var state_35034__$1 = state_35034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35034__$1,(4),jobs);
} else
{if((state_val_35035 === (1)))
{var state_35034__$1 = state_35034;var statearr_35041_35181 = state_35034__$1;(statearr_35041_35181[(2)] = null);
(statearr_35041_35181[(1)] = (2));
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
});})(__35163,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
;return ((function (__35163,switch__5804__auto__,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35045 = [null,null,null,null,null,null,null];(statearr_35045[(0)] = state_machine__5805__auto__);
(statearr_35045[(1)] = (1));
return statearr_35045;
});
var state_machine__5805__auto____1 = (function (state_35034){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35046){if((e35046 instanceof Object))
{var ex__5808__auto__ = e35046;var statearr_35047_35182 = state_35034;(statearr_35047_35182[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35183 = state_35034;
state_35034 = G__35183;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35034){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__35163,switch__5804__auto__,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35048 = f__5820__auto__.call(null);(statearr_35048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35175);
return statearr_35048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__35163,c__5819__auto___35175,G__34994_35164,n__4506__auto___35162,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__35184 = (__35163 + (1));
__35163 = G__35184;
continue;
}
} else
{}
break;
}
var c__5819__auto___35185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35185,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35185,jobs,results,process,async){
return (function (state_35070){var state_val_35071 = (state_35070[(1)]);if((state_val_35071 === (9)))
{var inst_35063 = (state_35070[(2)]);var state_35070__$1 = (function (){var statearr_35072 = state_35070;(statearr_35072[(7)] = inst_35063);
return statearr_35072;
})();var statearr_35073_35186 = state_35070__$1;(statearr_35073_35186[(2)] = null);
(statearr_35073_35186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35071 === (8)))
{var inst_35056 = (state_35070[(8)]);var inst_35061 = (state_35070[(2)]);var state_35070__$1 = (function (){var statearr_35074 = state_35070;(statearr_35074[(9)] = inst_35061);
return statearr_35074;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35070__$1,(9),results,inst_35056);
} else
{if((state_val_35071 === (7)))
{var inst_35066 = (state_35070[(2)]);var state_35070__$1 = state_35070;var statearr_35075_35187 = state_35070__$1;(statearr_35075_35187[(2)] = inst_35066);
(statearr_35075_35187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35071 === (6)))
{var inst_35051 = (state_35070[(10)]);var inst_35056 = (state_35070[(8)]);var inst_35056__$1 = cljs.core.async.chan.call(null,(1));var inst_35057 = cljs.core.PersistentVector.EMPTY_NODE;var inst_35058 = [inst_35051,inst_35056__$1];var inst_35059 = (new cljs.core.PersistentVector(null,2,(5),inst_35057,inst_35058,null));var state_35070__$1 = (function (){var statearr_35076 = state_35070;(statearr_35076[(8)] = inst_35056__$1);
return statearr_35076;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35070__$1,(8),jobs,inst_35059);
} else
{if((state_val_35071 === (5)))
{var inst_35054 = cljs.core.async.close_BANG_.call(null,jobs);var state_35070__$1 = state_35070;var statearr_35077_35188 = state_35070__$1;(statearr_35077_35188[(2)] = inst_35054);
(statearr_35077_35188[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35071 === (4)))
{var inst_35051 = (state_35070[(10)]);var inst_35051__$1 = (state_35070[(2)]);var inst_35052 = (inst_35051__$1 == null);var state_35070__$1 = (function (){var statearr_35078 = state_35070;(statearr_35078[(10)] = inst_35051__$1);
return statearr_35078;
})();if(cljs.core.truth_(inst_35052))
{var statearr_35079_35189 = state_35070__$1;(statearr_35079_35189[(1)] = (5));
} else
{var statearr_35080_35190 = state_35070__$1;(statearr_35080_35190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35071 === (3)))
{var inst_35068 = (state_35070[(2)]);var state_35070__$1 = state_35070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35070__$1,inst_35068);
} else
{if((state_val_35071 === (2)))
{var state_35070__$1 = state_35070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35070__$1,(4),from);
} else
{if((state_val_35071 === (1)))
{var state_35070__$1 = state_35070;var statearr_35081_35191 = state_35070__$1;(statearr_35081_35191[(2)] = null);
(statearr_35081_35191[(1)] = (2));
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
});})(c__5819__auto___35185,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___35185,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35085 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35085[(0)] = state_machine__5805__auto__);
(statearr_35085[(1)] = (1));
return statearr_35085;
});
var state_machine__5805__auto____1 = (function (state_35070){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35070);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35086){if((e35086 instanceof Object))
{var ex__5808__auto__ = e35086;var statearr_35087_35192 = state_35070;(statearr_35087_35192[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35086;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35193 = state_35070;
state_35070 = G__35193;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35070){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35185,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35088 = f__5820__auto__.call(null);(statearr_35088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35185);
return statearr_35088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35185,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_35126){var state_val_35127 = (state_35126[(1)]);if((state_val_35127 === (7)))
{var inst_35122 = (state_35126[(2)]);var state_35126__$1 = state_35126;var statearr_35128_35194 = state_35126__$1;(statearr_35128_35194[(2)] = inst_35122);
(statearr_35128_35194[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (20)))
{var state_35126__$1 = state_35126;var statearr_35129_35195 = state_35126__$1;(statearr_35129_35195[(2)] = null);
(statearr_35129_35195[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (1)))
{var state_35126__$1 = state_35126;var statearr_35130_35196 = state_35126__$1;(statearr_35130_35196[(2)] = null);
(statearr_35130_35196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (4)))
{var inst_35091 = (state_35126[(7)]);var inst_35091__$1 = (state_35126[(2)]);var inst_35092 = (inst_35091__$1 == null);var state_35126__$1 = (function (){var statearr_35131 = state_35126;(statearr_35131[(7)] = inst_35091__$1);
return statearr_35131;
})();if(cljs.core.truth_(inst_35092))
{var statearr_35132_35197 = state_35126__$1;(statearr_35132_35197[(1)] = (5));
} else
{var statearr_35133_35198 = state_35126__$1;(statearr_35133_35198[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (15)))
{var inst_35104 = (state_35126[(8)]);var state_35126__$1 = state_35126;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35126__$1,(18),to,inst_35104);
} else
{if((state_val_35127 === (21)))
{var inst_35117 = (state_35126[(2)]);var state_35126__$1 = state_35126;var statearr_35134_35199 = state_35126__$1;(statearr_35134_35199[(2)] = inst_35117);
(statearr_35134_35199[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (13)))
{var inst_35119 = (state_35126[(2)]);var state_35126__$1 = (function (){var statearr_35135 = state_35126;(statearr_35135[(9)] = inst_35119);
return statearr_35135;
})();var statearr_35136_35200 = state_35126__$1;(statearr_35136_35200[(2)] = null);
(statearr_35136_35200[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (6)))
{var inst_35091 = (state_35126[(7)]);var state_35126__$1 = state_35126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(11),inst_35091);
} else
{if((state_val_35127 === (17)))
{var inst_35112 = (state_35126[(2)]);var state_35126__$1 = state_35126;if(cljs.core.truth_(inst_35112))
{var statearr_35137_35201 = state_35126__$1;(statearr_35137_35201[(1)] = (19));
} else
{var statearr_35138_35202 = state_35126__$1;(statearr_35138_35202[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (3)))
{var inst_35124 = (state_35126[(2)]);var state_35126__$1 = state_35126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35126__$1,inst_35124);
} else
{if((state_val_35127 === (12)))
{var inst_35101 = (state_35126[(10)]);var state_35126__$1 = state_35126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(14),inst_35101);
} else
{if((state_val_35127 === (2)))
{var state_35126__$1 = state_35126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35126__$1,(4),results);
} else
{if((state_val_35127 === (19)))
{var state_35126__$1 = state_35126;var statearr_35139_35203 = state_35126__$1;(statearr_35139_35203[(2)] = null);
(statearr_35139_35203[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (11)))
{var inst_35101 = (state_35126[(2)]);var state_35126__$1 = (function (){var statearr_35140 = state_35126;(statearr_35140[(10)] = inst_35101);
return statearr_35140;
})();var statearr_35141_35204 = state_35126__$1;(statearr_35141_35204[(2)] = null);
(statearr_35141_35204[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (9)))
{var state_35126__$1 = state_35126;var statearr_35142_35205 = state_35126__$1;(statearr_35142_35205[(2)] = null);
(statearr_35142_35205[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (5)))
{var state_35126__$1 = state_35126;if(cljs.core.truth_(close_QMARK_))
{var statearr_35143_35206 = state_35126__$1;(statearr_35143_35206[(1)] = (8));
} else
{var statearr_35144_35207 = state_35126__$1;(statearr_35144_35207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (14)))
{var inst_35104 = (state_35126[(8)]);var inst_35106 = (state_35126[(11)]);var inst_35104__$1 = (state_35126[(2)]);var inst_35105 = (inst_35104__$1 == null);var inst_35106__$1 = cljs.core.not.call(null,inst_35105);var state_35126__$1 = (function (){var statearr_35145 = state_35126;(statearr_35145[(8)] = inst_35104__$1);
(statearr_35145[(11)] = inst_35106__$1);
return statearr_35145;
})();if(inst_35106__$1)
{var statearr_35146_35208 = state_35126__$1;(statearr_35146_35208[(1)] = (15));
} else
{var statearr_35147_35209 = state_35126__$1;(statearr_35147_35209[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (16)))
{var inst_35106 = (state_35126[(11)]);var state_35126__$1 = state_35126;var statearr_35148_35210 = state_35126__$1;(statearr_35148_35210[(2)] = inst_35106);
(statearr_35148_35210[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (10)))
{var inst_35098 = (state_35126[(2)]);var state_35126__$1 = state_35126;var statearr_35149_35211 = state_35126__$1;(statearr_35149_35211[(2)] = inst_35098);
(statearr_35149_35211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (18)))
{var inst_35109 = (state_35126[(2)]);var state_35126__$1 = state_35126;var statearr_35150_35212 = state_35126__$1;(statearr_35150_35212[(2)] = inst_35109);
(statearr_35150_35212[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35127 === (8)))
{var inst_35095 = cljs.core.async.close_BANG_.call(null,to);var state_35126__$1 = state_35126;var statearr_35151_35213 = state_35126__$1;(statearr_35151_35213[(2)] = inst_35095);
(statearr_35151_35213[(1)] = (10));
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
var state_machine__5805__auto____0 = (function (){var statearr_35155 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35155[(0)] = state_machine__5805__auto__);
(statearr_35155[(1)] = (1));
return statearr_35155;
});
var state_machine__5805__auto____1 = (function (state_35126){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35126);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35156){if((e35156 instanceof Object))
{var ex__5808__auto__ = e35156;var statearr_35157_35214 = state_35126;(statearr_35157_35214[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35156;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35215 = state_35126;
state_35126 = G__35215;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_35158 = f__5820__auto__.call(null);(statearr_35158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35158;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___35316 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35316,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35316,tc,fc){
return (function (state_35291){var state_val_35292 = (state_35291[(1)]);if((state_val_35292 === (7)))
{var inst_35287 = (state_35291[(2)]);var state_35291__$1 = state_35291;var statearr_35293_35317 = state_35291__$1;(statearr_35293_35317[(2)] = inst_35287);
(statearr_35293_35317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (1)))
{var state_35291__$1 = state_35291;var statearr_35294_35318 = state_35291__$1;(statearr_35294_35318[(2)] = null);
(statearr_35294_35318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (4)))
{var inst_35268 = (state_35291[(7)]);var inst_35268__$1 = (state_35291[(2)]);var inst_35269 = (inst_35268__$1 == null);var state_35291__$1 = (function (){var statearr_35295 = state_35291;(statearr_35295[(7)] = inst_35268__$1);
return statearr_35295;
})();if(cljs.core.truth_(inst_35269))
{var statearr_35296_35319 = state_35291__$1;(statearr_35296_35319[(1)] = (5));
} else
{var statearr_35297_35320 = state_35291__$1;(statearr_35297_35320[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (13)))
{var state_35291__$1 = state_35291;var statearr_35298_35321 = state_35291__$1;(statearr_35298_35321[(2)] = null);
(statearr_35298_35321[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (6)))
{var inst_35268 = (state_35291[(7)]);var inst_35274 = p.call(null,inst_35268);var state_35291__$1 = state_35291;if(cljs.core.truth_(inst_35274))
{var statearr_35299_35322 = state_35291__$1;(statearr_35299_35322[(1)] = (9));
} else
{var statearr_35300_35323 = state_35291__$1;(statearr_35300_35323[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (3)))
{var inst_35289 = (state_35291[(2)]);var state_35291__$1 = state_35291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35291__$1,inst_35289);
} else
{if((state_val_35292 === (12)))
{var state_35291__$1 = state_35291;var statearr_35301_35324 = state_35291__$1;(statearr_35301_35324[(2)] = null);
(statearr_35301_35324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (2)))
{var state_35291__$1 = state_35291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35291__$1,(4),ch);
} else
{if((state_val_35292 === (11)))
{var inst_35268 = (state_35291[(7)]);var inst_35278 = (state_35291[(2)]);var state_35291__$1 = state_35291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35291__$1,(8),inst_35278,inst_35268);
} else
{if((state_val_35292 === (9)))
{var state_35291__$1 = state_35291;var statearr_35302_35325 = state_35291__$1;(statearr_35302_35325[(2)] = tc);
(statearr_35302_35325[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (5)))
{var inst_35271 = cljs.core.async.close_BANG_.call(null,tc);var inst_35272 = cljs.core.async.close_BANG_.call(null,fc);var state_35291__$1 = (function (){var statearr_35303 = state_35291;(statearr_35303[(8)] = inst_35271);
return statearr_35303;
})();var statearr_35304_35326 = state_35291__$1;(statearr_35304_35326[(2)] = inst_35272);
(statearr_35304_35326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (14)))
{var inst_35285 = (state_35291[(2)]);var state_35291__$1 = state_35291;var statearr_35305_35327 = state_35291__$1;(statearr_35305_35327[(2)] = inst_35285);
(statearr_35305_35327[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (10)))
{var state_35291__$1 = state_35291;var statearr_35306_35328 = state_35291__$1;(statearr_35306_35328[(2)] = fc);
(statearr_35306_35328[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35292 === (8)))
{var inst_35280 = (state_35291[(2)]);var state_35291__$1 = state_35291;if(cljs.core.truth_(inst_35280))
{var statearr_35307_35329 = state_35291__$1;(statearr_35307_35329[(1)] = (12));
} else
{var statearr_35308_35330 = state_35291__$1;(statearr_35308_35330[(1)] = (13));
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
});})(c__5819__auto___35316,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___35316,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35312 = [null,null,null,null,null,null,null,null,null];(statearr_35312[(0)] = state_machine__5805__auto__);
(statearr_35312[(1)] = (1));
return statearr_35312;
});
var state_machine__5805__auto____1 = (function (state_35291){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object))
{var ex__5808__auto__ = e35313;var statearr_35314_35331 = state_35291;(statearr_35314_35331[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35313;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35332 = state_35291;
state_35291 = G__35332;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35291){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35316,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_35315 = f__5820__auto__.call(null);(statearr_35315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35316);
return statearr_35315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35316,tc,fc))
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
return (function (state_35379){var state_val_35380 = (state_35379[(1)]);if((state_val_35380 === (7)))
{var inst_35375 = (state_35379[(2)]);var state_35379__$1 = state_35379;var statearr_35381_35397 = state_35379__$1;(statearr_35381_35397[(2)] = inst_35375);
(statearr_35381_35397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35380 === (6)))
{var inst_35365 = (state_35379[(7)]);var inst_35368 = (state_35379[(8)]);var inst_35372 = f.call(null,inst_35365,inst_35368);var inst_35365__$1 = inst_35372;var state_35379__$1 = (function (){var statearr_35382 = state_35379;(statearr_35382[(7)] = inst_35365__$1);
return statearr_35382;
})();var statearr_35383_35398 = state_35379__$1;(statearr_35383_35398[(2)] = null);
(statearr_35383_35398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35380 === (5)))
{var inst_35365 = (state_35379[(7)]);var state_35379__$1 = state_35379;var statearr_35384_35399 = state_35379__$1;(statearr_35384_35399[(2)] = inst_35365);
(statearr_35384_35399[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35380 === (4)))
{var inst_35368 = (state_35379[(8)]);var inst_35368__$1 = (state_35379[(2)]);var inst_35369 = (inst_35368__$1 == null);var state_35379__$1 = (function (){var statearr_35385 = state_35379;(statearr_35385[(8)] = inst_35368__$1);
return statearr_35385;
})();if(cljs.core.truth_(inst_35369))
{var statearr_35386_35400 = state_35379__$1;(statearr_35386_35400[(1)] = (5));
} else
{var statearr_35387_35401 = state_35379__$1;(statearr_35387_35401[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35380 === (3)))
{var inst_35377 = (state_35379[(2)]);var state_35379__$1 = state_35379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35379__$1,inst_35377);
} else
{if((state_val_35380 === (2)))
{var state_35379__$1 = state_35379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35379__$1,(4),ch);
} else
{if((state_val_35380 === (1)))
{var inst_35365 = init;var state_35379__$1 = (function (){var statearr_35388 = state_35379;(statearr_35388[(7)] = inst_35365);
return statearr_35388;
})();var statearr_35389_35402 = state_35379__$1;(statearr_35389_35402[(2)] = null);
(statearr_35389_35402[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_35393 = [null,null,null,null,null,null,null,null,null];(statearr_35393[(0)] = state_machine__5805__auto__);
(statearr_35393[(1)] = (1));
return statearr_35393;
});
var state_machine__5805__auto____1 = (function (state_35379){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35394){if((e35394 instanceof Object))
{var ex__5808__auto__ = e35394;var statearr_35395_35403 = state_35379;(statearr_35395_35403[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35394;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35404 = state_35379;
state_35379 = G__35404;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35379){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_35396 = f__5820__auto__.call(null);(statearr_35396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35396;
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
return (function (state_35478){var state_val_35479 = (state_35478[(1)]);if((state_val_35479 === (7)))
{var inst_35460 = (state_35478[(2)]);var state_35478__$1 = state_35478;var statearr_35480_35503 = state_35478__$1;(statearr_35480_35503[(2)] = inst_35460);
(statearr_35480_35503[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (1)))
{var inst_35454 = cljs.core.seq.call(null,coll);var inst_35455 = inst_35454;var state_35478__$1 = (function (){var statearr_35481 = state_35478;(statearr_35481[(7)] = inst_35455);
return statearr_35481;
})();var statearr_35482_35504 = state_35478__$1;(statearr_35482_35504[(2)] = null);
(statearr_35482_35504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (4)))
{var inst_35455 = (state_35478[(7)]);var inst_35458 = cljs.core.first.call(null,inst_35455);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35478__$1,(7),ch,inst_35458);
} else
{if((state_val_35479 === (13)))
{var inst_35472 = (state_35478[(2)]);var state_35478__$1 = state_35478;var statearr_35483_35505 = state_35478__$1;(statearr_35483_35505[(2)] = inst_35472);
(statearr_35483_35505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (6)))
{var inst_35463 = (state_35478[(2)]);var state_35478__$1 = state_35478;if(cljs.core.truth_(inst_35463))
{var statearr_35484_35506 = state_35478__$1;(statearr_35484_35506[(1)] = (8));
} else
{var statearr_35485_35507 = state_35478__$1;(statearr_35485_35507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (3)))
{var inst_35476 = (state_35478[(2)]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35478__$1,inst_35476);
} else
{if((state_val_35479 === (12)))
{var state_35478__$1 = state_35478;var statearr_35486_35508 = state_35478__$1;(statearr_35486_35508[(2)] = null);
(statearr_35486_35508[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (2)))
{var inst_35455 = (state_35478[(7)]);var state_35478__$1 = state_35478;if(cljs.core.truth_(inst_35455))
{var statearr_35487_35509 = state_35478__$1;(statearr_35487_35509[(1)] = (4));
} else
{var statearr_35488_35510 = state_35478__$1;(statearr_35488_35510[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (11)))
{var inst_35469 = cljs.core.async.close_BANG_.call(null,ch);var state_35478__$1 = state_35478;var statearr_35489_35511 = state_35478__$1;(statearr_35489_35511[(2)] = inst_35469);
(statearr_35489_35511[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (9)))
{var state_35478__$1 = state_35478;if(cljs.core.truth_(close_QMARK_))
{var statearr_35490_35512 = state_35478__$1;(statearr_35490_35512[(1)] = (11));
} else
{var statearr_35491_35513 = state_35478__$1;(statearr_35491_35513[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (5)))
{var inst_35455 = (state_35478[(7)]);var state_35478__$1 = state_35478;var statearr_35492_35514 = state_35478__$1;(statearr_35492_35514[(2)] = inst_35455);
(statearr_35492_35514[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (10)))
{var inst_35474 = (state_35478[(2)]);var state_35478__$1 = state_35478;var statearr_35493_35515 = state_35478__$1;(statearr_35493_35515[(2)] = inst_35474);
(statearr_35493_35515[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35479 === (8)))
{var inst_35455 = (state_35478[(7)]);var inst_35465 = cljs.core.next.call(null,inst_35455);var inst_35455__$1 = inst_35465;var state_35478__$1 = (function (){var statearr_35494 = state_35478;(statearr_35494[(7)] = inst_35455__$1);
return statearr_35494;
})();var statearr_35495_35516 = state_35478__$1;(statearr_35495_35516[(2)] = null);
(statearr_35495_35516[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_35499 = [null,null,null,null,null,null,null,null];(statearr_35499[(0)] = state_machine__5805__auto__);
(statearr_35499[(1)] = (1));
return statearr_35499;
});
var state_machine__5805__auto____1 = (function (state_35478){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35500){if((e35500 instanceof Object))
{var ex__5808__auto__ = e35500;var statearr_35501_35517 = state_35478;(statearr_35501_35517[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35500;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35518 = state_35478;
state_35478 = G__35518;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35478){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_35502 = f__5820__auto__.call(null);(statearr_35502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_35502;
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
cljs.core.async.Mux = (function (){var obj35520 = {};return obj35520;
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
cljs.core.async.Mult = (function (){var obj35522 = {};return obj35522;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35744 = (function (cs,ch,mult,meta35745){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35745 = meta35745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35744.cljs$lang$type = true;
cljs.core.async.t35744.cljs$lang$ctorStr = "cljs.core.async/t35744";
cljs.core.async.t35744.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t35744");
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35744.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35746){var self__ = this;
var _35746__$1 = this;return self__.meta35745;
});})(cs))
;
cljs.core.async.t35744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35746,meta35745__$1){var self__ = this;
var _35746__$1 = this;return (new cljs.core.async.t35744(self__.cs,self__.ch,self__.mult,meta35745__$1));
});})(cs))
;
cljs.core.async.__GT_t35744 = ((function (cs){
return (function __GT_t35744(cs__$1,ch__$1,mult__$1,meta35745){return (new cljs.core.async.t35744(cs__$1,ch__$1,mult__$1,meta35745));
});})(cs))
;
}
return (new cljs.core.async.t35744(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___35965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___35965,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___35965,cs,m,dchan,dctr,done){
return (function (state_35877){var state_val_35878 = (state_35877[(1)]);if((state_val_35878 === (7)))
{var inst_35873 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35879_35966 = state_35877__$1;(statearr_35879_35966[(2)] = inst_35873);
(statearr_35879_35966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (20)))
{var inst_35778 = (state_35877[(7)]);var inst_35788 = cljs.core.first.call(null,inst_35778);var inst_35789 = cljs.core.nth.call(null,inst_35788,(0),null);var inst_35790 = cljs.core.nth.call(null,inst_35788,(1),null);var state_35877__$1 = (function (){var statearr_35880 = state_35877;(statearr_35880[(8)] = inst_35789);
return statearr_35880;
})();if(cljs.core.truth_(inst_35790))
{var statearr_35881_35967 = state_35877__$1;(statearr_35881_35967[(1)] = (22));
} else
{var statearr_35882_35968 = state_35877__$1;(statearr_35882_35968[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (27)))
{var inst_35749 = (state_35877[(9)]);var inst_35818 = (state_35877[(10)]);var inst_35825 = (state_35877[(11)]);var inst_35820 = (state_35877[(12)]);var inst_35825__$1 = cljs.core._nth.call(null,inst_35818,inst_35820);var inst_35826 = cljs.core.async.put_BANG_.call(null,inst_35825__$1,inst_35749,done);var state_35877__$1 = (function (){var statearr_35883 = state_35877;(statearr_35883[(11)] = inst_35825__$1);
return statearr_35883;
})();if(cljs.core.truth_(inst_35826))
{var statearr_35884_35969 = state_35877__$1;(statearr_35884_35969[(1)] = (30));
} else
{var statearr_35885_35970 = state_35877__$1;(statearr_35885_35970[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (1)))
{var state_35877__$1 = state_35877;var statearr_35886_35971 = state_35877__$1;(statearr_35886_35971[(2)] = null);
(statearr_35886_35971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (24)))
{var inst_35778 = (state_35877[(7)]);var inst_35795 = (state_35877[(2)]);var inst_35796 = cljs.core.next.call(null,inst_35778);var inst_35758 = inst_35796;var inst_35759 = null;var inst_35760 = (0);var inst_35761 = (0);var state_35877__$1 = (function (){var statearr_35887 = state_35877;(statearr_35887[(13)] = inst_35760);
(statearr_35887[(14)] = inst_35759);
(statearr_35887[(15)] = inst_35761);
(statearr_35887[(16)] = inst_35758);
(statearr_35887[(17)] = inst_35795);
return statearr_35887;
})();var statearr_35888_35972 = state_35877__$1;(statearr_35888_35972[(2)] = null);
(statearr_35888_35972[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (39)))
{var state_35877__$1 = state_35877;var statearr_35892_35973 = state_35877__$1;(statearr_35892_35973[(2)] = null);
(statearr_35892_35973[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (4)))
{var inst_35749 = (state_35877[(9)]);var inst_35749__$1 = (state_35877[(2)]);var inst_35750 = (inst_35749__$1 == null);var state_35877__$1 = (function (){var statearr_35893 = state_35877;(statearr_35893[(9)] = inst_35749__$1);
return statearr_35893;
})();if(cljs.core.truth_(inst_35750))
{var statearr_35894_35974 = state_35877__$1;(statearr_35894_35974[(1)] = (5));
} else
{var statearr_35895_35975 = state_35877__$1;(statearr_35895_35975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (15)))
{var inst_35760 = (state_35877[(13)]);var inst_35759 = (state_35877[(14)]);var inst_35761 = (state_35877[(15)]);var inst_35758 = (state_35877[(16)]);var inst_35774 = (state_35877[(2)]);var inst_35775 = (inst_35761 + (1));var tmp35889 = inst_35760;var tmp35890 = inst_35759;var tmp35891 = inst_35758;var inst_35758__$1 = tmp35891;var inst_35759__$1 = tmp35890;var inst_35760__$1 = tmp35889;var inst_35761__$1 = inst_35775;var state_35877__$1 = (function (){var statearr_35896 = state_35877;(statearr_35896[(13)] = inst_35760__$1);
(statearr_35896[(14)] = inst_35759__$1);
(statearr_35896[(15)] = inst_35761__$1);
(statearr_35896[(18)] = inst_35774);
(statearr_35896[(16)] = inst_35758__$1);
return statearr_35896;
})();var statearr_35897_35976 = state_35877__$1;(statearr_35897_35976[(2)] = null);
(statearr_35897_35976[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (21)))
{var inst_35799 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35901_35977 = state_35877__$1;(statearr_35901_35977[(2)] = inst_35799);
(statearr_35901_35977[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (31)))
{var inst_35825 = (state_35877[(11)]);var inst_35829 = done.call(null,null);var inst_35830 = cljs.core.async.untap_STAR_.call(null,m,inst_35825);var state_35877__$1 = (function (){var statearr_35902 = state_35877;(statearr_35902[(19)] = inst_35829);
return statearr_35902;
})();var statearr_35903_35978 = state_35877__$1;(statearr_35903_35978[(2)] = inst_35830);
(statearr_35903_35978[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (32)))
{var inst_35817 = (state_35877[(20)]);var inst_35819 = (state_35877[(21)]);var inst_35818 = (state_35877[(10)]);var inst_35820 = (state_35877[(12)]);var inst_35832 = (state_35877[(2)]);var inst_35833 = (inst_35820 + (1));var tmp35898 = inst_35817;var tmp35899 = inst_35819;var tmp35900 = inst_35818;var inst_35817__$1 = tmp35898;var inst_35818__$1 = tmp35900;var inst_35819__$1 = tmp35899;var inst_35820__$1 = inst_35833;var state_35877__$1 = (function (){var statearr_35904 = state_35877;(statearr_35904[(20)] = inst_35817__$1);
(statearr_35904[(21)] = inst_35819__$1);
(statearr_35904[(10)] = inst_35818__$1);
(statearr_35904[(22)] = inst_35832);
(statearr_35904[(12)] = inst_35820__$1);
return statearr_35904;
})();var statearr_35905_35979 = state_35877__$1;(statearr_35905_35979[(2)] = null);
(statearr_35905_35979[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (40)))
{var inst_35845 = (state_35877[(23)]);var inst_35849 = done.call(null,null);var inst_35850 = cljs.core.async.untap_STAR_.call(null,m,inst_35845);var state_35877__$1 = (function (){var statearr_35906 = state_35877;(statearr_35906[(24)] = inst_35849);
return statearr_35906;
})();var statearr_35907_35980 = state_35877__$1;(statearr_35907_35980[(2)] = inst_35850);
(statearr_35907_35980[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (33)))
{var inst_35836 = (state_35877[(25)]);var inst_35838 = cljs.core.chunked_seq_QMARK_.call(null,inst_35836);var state_35877__$1 = state_35877;if(inst_35838)
{var statearr_35908_35981 = state_35877__$1;(statearr_35908_35981[(1)] = (36));
} else
{var statearr_35909_35982 = state_35877__$1;(statearr_35909_35982[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (13)))
{var inst_35768 = (state_35877[(26)]);var inst_35771 = cljs.core.async.close_BANG_.call(null,inst_35768);var state_35877__$1 = state_35877;var statearr_35910_35983 = state_35877__$1;(statearr_35910_35983[(2)] = inst_35771);
(statearr_35910_35983[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (22)))
{var inst_35789 = (state_35877[(8)]);var inst_35792 = cljs.core.async.close_BANG_.call(null,inst_35789);var state_35877__$1 = state_35877;var statearr_35911_35984 = state_35877__$1;(statearr_35911_35984[(2)] = inst_35792);
(statearr_35911_35984[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (36)))
{var inst_35836 = (state_35877[(25)]);var inst_35840 = cljs.core.chunk_first.call(null,inst_35836);var inst_35841 = cljs.core.chunk_rest.call(null,inst_35836);var inst_35842 = cljs.core.count.call(null,inst_35840);var inst_35817 = inst_35841;var inst_35818 = inst_35840;var inst_35819 = inst_35842;var inst_35820 = (0);var state_35877__$1 = (function (){var statearr_35912 = state_35877;(statearr_35912[(20)] = inst_35817);
(statearr_35912[(21)] = inst_35819);
(statearr_35912[(10)] = inst_35818);
(statearr_35912[(12)] = inst_35820);
return statearr_35912;
})();var statearr_35913_35985 = state_35877__$1;(statearr_35913_35985[(2)] = null);
(statearr_35913_35985[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (41)))
{var inst_35836 = (state_35877[(25)]);var inst_35852 = (state_35877[(2)]);var inst_35853 = cljs.core.next.call(null,inst_35836);var inst_35817 = inst_35853;var inst_35818 = null;var inst_35819 = (0);var inst_35820 = (0);var state_35877__$1 = (function (){var statearr_35914 = state_35877;(statearr_35914[(20)] = inst_35817);
(statearr_35914[(21)] = inst_35819);
(statearr_35914[(10)] = inst_35818);
(statearr_35914[(27)] = inst_35852);
(statearr_35914[(12)] = inst_35820);
return statearr_35914;
})();var statearr_35915_35986 = state_35877__$1;(statearr_35915_35986[(2)] = null);
(statearr_35915_35986[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (43)))
{var state_35877__$1 = state_35877;var statearr_35916_35987 = state_35877__$1;(statearr_35916_35987[(2)] = null);
(statearr_35916_35987[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (29)))
{var inst_35861 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35917_35988 = state_35877__$1;(statearr_35917_35988[(2)] = inst_35861);
(statearr_35917_35988[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (44)))
{var inst_35870 = (state_35877[(2)]);var state_35877__$1 = (function (){var statearr_35918 = state_35877;(statearr_35918[(28)] = inst_35870);
return statearr_35918;
})();var statearr_35919_35989 = state_35877__$1;(statearr_35919_35989[(2)] = null);
(statearr_35919_35989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (6)))
{var inst_35809 = (state_35877[(29)]);var inst_35808 = cljs.core.deref.call(null,cs);var inst_35809__$1 = cljs.core.keys.call(null,inst_35808);var inst_35810 = cljs.core.count.call(null,inst_35809__$1);var inst_35811 = cljs.core.reset_BANG_.call(null,dctr,inst_35810);var inst_35816 = cljs.core.seq.call(null,inst_35809__$1);var inst_35817 = inst_35816;var inst_35818 = null;var inst_35819 = (0);var inst_35820 = (0);var state_35877__$1 = (function (){var statearr_35920 = state_35877;(statearr_35920[(20)] = inst_35817);
(statearr_35920[(21)] = inst_35819);
(statearr_35920[(10)] = inst_35818);
(statearr_35920[(29)] = inst_35809__$1);
(statearr_35920[(30)] = inst_35811);
(statearr_35920[(12)] = inst_35820);
return statearr_35920;
})();var statearr_35921_35990 = state_35877__$1;(statearr_35921_35990[(2)] = null);
(statearr_35921_35990[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (28)))
{var inst_35817 = (state_35877[(20)]);var inst_35836 = (state_35877[(25)]);var inst_35836__$1 = cljs.core.seq.call(null,inst_35817);var state_35877__$1 = (function (){var statearr_35922 = state_35877;(statearr_35922[(25)] = inst_35836__$1);
return statearr_35922;
})();if(inst_35836__$1)
{var statearr_35923_35991 = state_35877__$1;(statearr_35923_35991[(1)] = (33));
} else
{var statearr_35924_35992 = state_35877__$1;(statearr_35924_35992[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (25)))
{var inst_35819 = (state_35877[(21)]);var inst_35820 = (state_35877[(12)]);var inst_35822 = (inst_35820 < inst_35819);var inst_35823 = inst_35822;var state_35877__$1 = state_35877;if(cljs.core.truth_(inst_35823))
{var statearr_35925_35993 = state_35877__$1;(statearr_35925_35993[(1)] = (27));
} else
{var statearr_35926_35994 = state_35877__$1;(statearr_35926_35994[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (34)))
{var state_35877__$1 = state_35877;var statearr_35927_35995 = state_35877__$1;(statearr_35927_35995[(2)] = null);
(statearr_35927_35995[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (17)))
{var state_35877__$1 = state_35877;var statearr_35928_35996 = state_35877__$1;(statearr_35928_35996[(2)] = null);
(statearr_35928_35996[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (3)))
{var inst_35875 = (state_35877[(2)]);var state_35877__$1 = state_35877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35877__$1,inst_35875);
} else
{if((state_val_35878 === (12)))
{var inst_35804 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35929_35997 = state_35877__$1;(statearr_35929_35997[(2)] = inst_35804);
(statearr_35929_35997[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (2)))
{var state_35877__$1 = state_35877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35877__$1,(4),ch);
} else
{if((state_val_35878 === (23)))
{var state_35877__$1 = state_35877;var statearr_35930_35998 = state_35877__$1;(statearr_35930_35998[(2)] = null);
(statearr_35930_35998[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (35)))
{var inst_35859 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35931_35999 = state_35877__$1;(statearr_35931_35999[(2)] = inst_35859);
(statearr_35931_35999[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (19)))
{var inst_35778 = (state_35877[(7)]);var inst_35782 = cljs.core.chunk_first.call(null,inst_35778);var inst_35783 = cljs.core.chunk_rest.call(null,inst_35778);var inst_35784 = cljs.core.count.call(null,inst_35782);var inst_35758 = inst_35783;var inst_35759 = inst_35782;var inst_35760 = inst_35784;var inst_35761 = (0);var state_35877__$1 = (function (){var statearr_35932 = state_35877;(statearr_35932[(13)] = inst_35760);
(statearr_35932[(14)] = inst_35759);
(statearr_35932[(15)] = inst_35761);
(statearr_35932[(16)] = inst_35758);
return statearr_35932;
})();var statearr_35933_36000 = state_35877__$1;(statearr_35933_36000[(2)] = null);
(statearr_35933_36000[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (11)))
{var inst_35778 = (state_35877[(7)]);var inst_35758 = (state_35877[(16)]);var inst_35778__$1 = cljs.core.seq.call(null,inst_35758);var state_35877__$1 = (function (){var statearr_35934 = state_35877;(statearr_35934[(7)] = inst_35778__$1);
return statearr_35934;
})();if(inst_35778__$1)
{var statearr_35935_36001 = state_35877__$1;(statearr_35935_36001[(1)] = (16));
} else
{var statearr_35936_36002 = state_35877__$1;(statearr_35936_36002[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (9)))
{var inst_35806 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35937_36003 = state_35877__$1;(statearr_35937_36003[(2)] = inst_35806);
(statearr_35937_36003[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (5)))
{var inst_35756 = cljs.core.deref.call(null,cs);var inst_35757 = cljs.core.seq.call(null,inst_35756);var inst_35758 = inst_35757;var inst_35759 = null;var inst_35760 = (0);var inst_35761 = (0);var state_35877__$1 = (function (){var statearr_35938 = state_35877;(statearr_35938[(13)] = inst_35760);
(statearr_35938[(14)] = inst_35759);
(statearr_35938[(15)] = inst_35761);
(statearr_35938[(16)] = inst_35758);
return statearr_35938;
})();var statearr_35939_36004 = state_35877__$1;(statearr_35939_36004[(2)] = null);
(statearr_35939_36004[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (14)))
{var state_35877__$1 = state_35877;var statearr_35940_36005 = state_35877__$1;(statearr_35940_36005[(2)] = null);
(statearr_35940_36005[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (45)))
{var inst_35867 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35941_36006 = state_35877__$1;(statearr_35941_36006[(2)] = inst_35867);
(statearr_35941_36006[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (26)))
{var inst_35809 = (state_35877[(29)]);var inst_35863 = (state_35877[(2)]);var inst_35864 = cljs.core.seq.call(null,inst_35809);var state_35877__$1 = (function (){var statearr_35942 = state_35877;(statearr_35942[(31)] = inst_35863);
return statearr_35942;
})();if(inst_35864)
{var statearr_35943_36007 = state_35877__$1;(statearr_35943_36007[(1)] = (42));
} else
{var statearr_35944_36008 = state_35877__$1;(statearr_35944_36008[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (16)))
{var inst_35778 = (state_35877[(7)]);var inst_35780 = cljs.core.chunked_seq_QMARK_.call(null,inst_35778);var state_35877__$1 = state_35877;if(inst_35780)
{var statearr_35945_36009 = state_35877__$1;(statearr_35945_36009[(1)] = (19));
} else
{var statearr_35946_36010 = state_35877__$1;(statearr_35946_36010[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (38)))
{var inst_35856 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35947_36011 = state_35877__$1;(statearr_35947_36011[(2)] = inst_35856);
(statearr_35947_36011[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (30)))
{var state_35877__$1 = state_35877;var statearr_35948_36012 = state_35877__$1;(statearr_35948_36012[(2)] = null);
(statearr_35948_36012[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (10)))
{var inst_35759 = (state_35877[(14)]);var inst_35761 = (state_35877[(15)]);var inst_35767 = cljs.core._nth.call(null,inst_35759,inst_35761);var inst_35768 = cljs.core.nth.call(null,inst_35767,(0),null);var inst_35769 = cljs.core.nth.call(null,inst_35767,(1),null);var state_35877__$1 = (function (){var statearr_35949 = state_35877;(statearr_35949[(26)] = inst_35768);
return statearr_35949;
})();if(cljs.core.truth_(inst_35769))
{var statearr_35950_36013 = state_35877__$1;(statearr_35950_36013[(1)] = (13));
} else
{var statearr_35951_36014 = state_35877__$1;(statearr_35951_36014[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (18)))
{var inst_35802 = (state_35877[(2)]);var state_35877__$1 = state_35877;var statearr_35952_36015 = state_35877__$1;(statearr_35952_36015[(2)] = inst_35802);
(statearr_35952_36015[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (42)))
{var state_35877__$1 = state_35877;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35877__$1,(45),dchan);
} else
{if((state_val_35878 === (37)))
{var inst_35845 = (state_35877[(23)]);var inst_35749 = (state_35877[(9)]);var inst_35836 = (state_35877[(25)]);var inst_35845__$1 = cljs.core.first.call(null,inst_35836);var inst_35846 = cljs.core.async.put_BANG_.call(null,inst_35845__$1,inst_35749,done);var state_35877__$1 = (function (){var statearr_35953 = state_35877;(statearr_35953[(23)] = inst_35845__$1);
return statearr_35953;
})();if(cljs.core.truth_(inst_35846))
{var statearr_35954_36016 = state_35877__$1;(statearr_35954_36016[(1)] = (39));
} else
{var statearr_35955_36017 = state_35877__$1;(statearr_35955_36017[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35878 === (8)))
{var inst_35760 = (state_35877[(13)]);var inst_35761 = (state_35877[(15)]);var inst_35763 = (inst_35761 < inst_35760);var inst_35764 = inst_35763;var state_35877__$1 = state_35877;if(cljs.core.truth_(inst_35764))
{var statearr_35956_36018 = state_35877__$1;(statearr_35956_36018[(1)] = (10));
} else
{var statearr_35957_36019 = state_35877__$1;(statearr_35957_36019[(1)] = (11));
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
});})(c__5819__auto___35965,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___35965,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_35961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35961[(0)] = state_machine__5805__auto__);
(statearr_35961[(1)] = (1));
return statearr_35961;
});
var state_machine__5805__auto____1 = (function (state_35877){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_35877);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e35962){if((e35962 instanceof Object))
{var ex__5808__auto__ = e35962;var statearr_35963_36020 = state_35877;(statearr_35963_36020[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35962;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36021 = state_35877;
state_35877 = G__36021;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_35877){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_35877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___35965,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_35964 = f__5820__auto__.call(null);(statearr_35964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___35965);
return statearr_35964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___35965,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj36023 = {};return obj36023;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__36024){var map__36029 = p__36024;var map__36029__$1 = ((cljs.core.seq_QMARK_.call(null,map__36029))?cljs.core.apply.call(null,cljs.core.hash_map,map__36029):map__36029);var opts = map__36029__$1;var statearr_36030_36033 = state;(statearr_36030_36033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__36029,map__36029__$1,opts){
return (function (val){var statearr_36031_36034 = state;(statearr_36031_36034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36029,map__36029__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_36032_36035 = state;(statearr_36032_36035[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__36024 = null;if (arguments.length > 3) {
  p__36024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__36024);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__36036){
var state = cljs.core.first(arglist__36036);
arglist__36036 = cljs.core.next(arglist__36036);
var cont_block = cljs.core.first(arglist__36036);
arglist__36036 = cljs.core.next(arglist__36036);
var ports = cljs.core.first(arglist__36036);
var p__36024 = cljs.core.rest(arglist__36036);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__36024);
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
;var m = (function (){if(typeof cljs.core.async.t36156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36156 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36157){
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
this.meta36157 = meta36157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36156.cljs$lang$type = true;
cljs.core.async.t36156.cljs$lang$ctorStr = "cljs.core.async/t36156";
cljs.core.async.t36156.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36156");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36158){var self__ = this;
var _36158__$1 = this;return self__.meta36157;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36158,meta36157__$1){var self__ = this;
var _36158__$1 = this;return (new cljs.core.async.t36156(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36157__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36156 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36156(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36157){return (new cljs.core.async.t36156(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36157));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36156(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___36275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36228){var state_val_36229 = (state_36228[(1)]);if((state_val_36229 === (7)))
{var inst_36172 = (state_36228[(7)]);var inst_36177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36172);var state_36228__$1 = state_36228;var statearr_36230_36276 = state_36228__$1;(statearr_36230_36276[(2)] = inst_36177);
(statearr_36230_36276[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (20)))
{var inst_36187 = (state_36228[(8)]);var state_36228__$1 = state_36228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36228__$1,(23),out,inst_36187);
} else
{if((state_val_36229 === (1)))
{var inst_36162 = (state_36228[(9)]);var inst_36162__$1 = calc_state.call(null);var inst_36163 = cljs.core.seq_QMARK_.call(null,inst_36162__$1);var state_36228__$1 = (function (){var statearr_36231 = state_36228;(statearr_36231[(9)] = inst_36162__$1);
return statearr_36231;
})();if(inst_36163)
{var statearr_36232_36277 = state_36228__$1;(statearr_36232_36277[(1)] = (2));
} else
{var statearr_36233_36278 = state_36228__$1;(statearr_36233_36278[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (24)))
{var inst_36180 = (state_36228[(10)]);var inst_36172 = inst_36180;var state_36228__$1 = (function (){var statearr_36234 = state_36228;(statearr_36234[(7)] = inst_36172);
return statearr_36234;
})();var statearr_36235_36279 = state_36228__$1;(statearr_36235_36279[(2)] = null);
(statearr_36235_36279[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (4)))
{var inst_36162 = (state_36228[(9)]);var inst_36168 = (state_36228[(2)]);var inst_36169 = cljs.core.get.call(null,inst_36168,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36170 = cljs.core.get.call(null,inst_36168,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36171 = cljs.core.get.call(null,inst_36168,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_36172 = inst_36162;var state_36228__$1 = (function (){var statearr_36236 = state_36228;(statearr_36236[(7)] = inst_36172);
(statearr_36236[(11)] = inst_36169);
(statearr_36236[(12)] = inst_36171);
(statearr_36236[(13)] = inst_36170);
return statearr_36236;
})();var statearr_36237_36280 = state_36228__$1;(statearr_36237_36280[(2)] = null);
(statearr_36237_36280[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (15)))
{var state_36228__$1 = state_36228;var statearr_36238_36281 = state_36228__$1;(statearr_36238_36281[(2)] = null);
(statearr_36238_36281[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (21)))
{var inst_36180 = (state_36228[(10)]);var inst_36172 = inst_36180;var state_36228__$1 = (function (){var statearr_36239 = state_36228;(statearr_36239[(7)] = inst_36172);
return statearr_36239;
})();var statearr_36240_36282 = state_36228__$1;(statearr_36240_36282[(2)] = null);
(statearr_36240_36282[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (13)))
{var inst_36224 = (state_36228[(2)]);var state_36228__$1 = state_36228;var statearr_36241_36283 = state_36228__$1;(statearr_36241_36283[(2)] = inst_36224);
(statearr_36241_36283[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (22)))
{var inst_36222 = (state_36228[(2)]);var state_36228__$1 = state_36228;var statearr_36242_36284 = state_36228__$1;(statearr_36242_36284[(2)] = inst_36222);
(statearr_36242_36284[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (6)))
{var inst_36226 = (state_36228[(2)]);var state_36228__$1 = state_36228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36228__$1,inst_36226);
} else
{if((state_val_36229 === (25)))
{var state_36228__$1 = state_36228;var statearr_36243_36285 = state_36228__$1;(statearr_36243_36285[(2)] = null);
(statearr_36243_36285[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (17)))
{var inst_36202 = (state_36228[(14)]);var state_36228__$1 = state_36228;var statearr_36244_36286 = state_36228__$1;(statearr_36244_36286[(2)] = inst_36202);
(statearr_36244_36286[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (3)))
{var inst_36162 = (state_36228[(9)]);var state_36228__$1 = state_36228;var statearr_36245_36287 = state_36228__$1;(statearr_36245_36287[(2)] = inst_36162);
(statearr_36245_36287[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (12)))
{var inst_36188 = (state_36228[(15)]);var inst_36183 = (state_36228[(16)]);var inst_36202 = (state_36228[(14)]);var inst_36202__$1 = inst_36183.call(null,inst_36188);var state_36228__$1 = (function (){var statearr_36246 = state_36228;(statearr_36246[(14)] = inst_36202__$1);
return statearr_36246;
})();if(cljs.core.truth_(inst_36202__$1))
{var statearr_36247_36288 = state_36228__$1;(statearr_36247_36288[(1)] = (17));
} else
{var statearr_36248_36289 = state_36228__$1;(statearr_36248_36289[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (2)))
{var inst_36162 = (state_36228[(9)]);var inst_36165 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36162);var state_36228__$1 = state_36228;var statearr_36249_36290 = state_36228__$1;(statearr_36249_36290[(2)] = inst_36165);
(statearr_36249_36290[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (23)))
{var inst_36213 = (state_36228[(2)]);var state_36228__$1 = state_36228;if(cljs.core.truth_(inst_36213))
{var statearr_36250_36291 = state_36228__$1;(statearr_36250_36291[(1)] = (24));
} else
{var statearr_36251_36292 = state_36228__$1;(statearr_36251_36292[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (19)))
{var inst_36210 = (state_36228[(2)]);var state_36228__$1 = state_36228;if(cljs.core.truth_(inst_36210))
{var statearr_36252_36293 = state_36228__$1;(statearr_36252_36293[(1)] = (20));
} else
{var statearr_36253_36294 = state_36228__$1;(statearr_36253_36294[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (11)))
{var inst_36187 = (state_36228[(8)]);var inst_36193 = (inst_36187 == null);var state_36228__$1 = state_36228;if(cljs.core.truth_(inst_36193))
{var statearr_36254_36295 = state_36228__$1;(statearr_36254_36295[(1)] = (14));
} else
{var statearr_36255_36296 = state_36228__$1;(statearr_36255_36296[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (9)))
{var inst_36180 = (state_36228[(10)]);var inst_36180__$1 = (state_36228[(2)]);var inst_36181 = cljs.core.get.call(null,inst_36180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_36182 = cljs.core.get.call(null,inst_36180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_36183 = cljs.core.get.call(null,inst_36180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_36228__$1 = (function (){var statearr_36256 = state_36228;(statearr_36256[(17)] = inst_36182);
(statearr_36256[(10)] = inst_36180__$1);
(statearr_36256[(16)] = inst_36183);
return statearr_36256;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_36228__$1,(10),inst_36181);
} else
{if((state_val_36229 === (5)))
{var inst_36172 = (state_36228[(7)]);var inst_36175 = cljs.core.seq_QMARK_.call(null,inst_36172);var state_36228__$1 = state_36228;if(inst_36175)
{var statearr_36257_36297 = state_36228__$1;(statearr_36257_36297[(1)] = (7));
} else
{var statearr_36258_36298 = state_36228__$1;(statearr_36258_36298[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (14)))
{var inst_36188 = (state_36228[(15)]);var inst_36195 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36188);var state_36228__$1 = state_36228;var statearr_36259_36299 = state_36228__$1;(statearr_36259_36299[(2)] = inst_36195);
(statearr_36259_36299[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (26)))
{var inst_36218 = (state_36228[(2)]);var state_36228__$1 = state_36228;var statearr_36260_36300 = state_36228__$1;(statearr_36260_36300[(2)] = inst_36218);
(statearr_36260_36300[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (16)))
{var inst_36198 = (state_36228[(2)]);var inst_36199 = calc_state.call(null);var inst_36172 = inst_36199;var state_36228__$1 = (function (){var statearr_36261 = state_36228;(statearr_36261[(7)] = inst_36172);
(statearr_36261[(18)] = inst_36198);
return statearr_36261;
})();var statearr_36262_36301 = state_36228__$1;(statearr_36262_36301[(2)] = null);
(statearr_36262_36301[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (10)))
{var inst_36188 = (state_36228[(15)]);var inst_36187 = (state_36228[(8)]);var inst_36186 = (state_36228[(2)]);var inst_36187__$1 = cljs.core.nth.call(null,inst_36186,(0),null);var inst_36188__$1 = cljs.core.nth.call(null,inst_36186,(1),null);var inst_36189 = (inst_36187__$1 == null);var inst_36190 = cljs.core._EQ_.call(null,inst_36188__$1,change);var inst_36191 = (inst_36189) || (inst_36190);var state_36228__$1 = (function (){var statearr_36263 = state_36228;(statearr_36263[(15)] = inst_36188__$1);
(statearr_36263[(8)] = inst_36187__$1);
return statearr_36263;
})();if(cljs.core.truth_(inst_36191))
{var statearr_36264_36302 = state_36228__$1;(statearr_36264_36302[(1)] = (11));
} else
{var statearr_36265_36303 = state_36228__$1;(statearr_36265_36303[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (18)))
{var inst_36182 = (state_36228[(17)]);var inst_36188 = (state_36228[(15)]);var inst_36183 = (state_36228[(16)]);var inst_36205 = cljs.core.empty_QMARK_.call(null,inst_36183);var inst_36206 = inst_36182.call(null,inst_36188);var inst_36207 = cljs.core.not.call(null,inst_36206);var inst_36208 = (inst_36205) && (inst_36207);var state_36228__$1 = state_36228;var statearr_36266_36304 = state_36228__$1;(statearr_36266_36304[(2)] = inst_36208);
(statearr_36266_36304[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36229 === (8)))
{var inst_36172 = (state_36228[(7)]);var state_36228__$1 = state_36228;var statearr_36267_36305 = state_36228__$1;(statearr_36267_36305[(2)] = inst_36172);
(statearr_36267_36305[(1)] = (9));
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
});})(c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36271[(0)] = state_machine__5805__auto__);
(statearr_36271[(1)] = (1));
return statearr_36271;
});
var state_machine__5805__auto____1 = (function (state_36228){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36228);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36272){if((e36272 instanceof Object))
{var ex__5808__auto__ = e36272;var statearr_36273_36306 = state_36228;(statearr_36273_36306[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36307 = state_36228;
state_36228 = G__36307;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36228){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_36274 = f__5820__auto__.call(null);(statearr_36274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36275);
return statearr_36274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36275,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj36309 = {};return obj36309;
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
return (function (p1__36310_SHARP_){if(cljs.core.truth_(p1__36310_SHARP_.call(null,topic)))
{return p1__36310_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36310_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36433 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36434){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36434 = meta36434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36433.cljs$lang$type = true;
cljs.core.async.t36433.cljs$lang$ctorStr = "cljs.core.async/t36433";
cljs.core.async.t36433.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36433");
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36433.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36435){var self__ = this;
var _36435__$1 = this;return self__.meta36434;
});})(mults,ensure_mult))
;
cljs.core.async.t36433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36435,meta36434__$1){var self__ = this;
var _36435__$1 = this;return (new cljs.core.async.t36433(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36434__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36433 = ((function (mults,ensure_mult){
return (function __GT_t36433(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36434){return (new cljs.core.async.t36433(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36434));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36433(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___36555 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36555,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36555,mults,ensure_mult,p){
return (function (state_36507){var state_val_36508 = (state_36507[(1)]);if((state_val_36508 === (7)))
{var inst_36503 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36509_36556 = state_36507__$1;(statearr_36509_36556[(2)] = inst_36503);
(statearr_36509_36556[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (20)))
{var state_36507__$1 = state_36507;var statearr_36510_36557 = state_36507__$1;(statearr_36510_36557[(2)] = null);
(statearr_36510_36557[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (1)))
{var state_36507__$1 = state_36507;var statearr_36511_36558 = state_36507__$1;(statearr_36511_36558[(2)] = null);
(statearr_36511_36558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (24)))
{var inst_36486 = (state_36507[(7)]);var inst_36495 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36486);var state_36507__$1 = state_36507;var statearr_36512_36559 = state_36507__$1;(statearr_36512_36559[(2)] = inst_36495);
(statearr_36512_36559[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (4)))
{var inst_36438 = (state_36507[(8)]);var inst_36438__$1 = (state_36507[(2)]);var inst_36439 = (inst_36438__$1 == null);var state_36507__$1 = (function (){var statearr_36513 = state_36507;(statearr_36513[(8)] = inst_36438__$1);
return statearr_36513;
})();if(cljs.core.truth_(inst_36439))
{var statearr_36514_36560 = state_36507__$1;(statearr_36514_36560[(1)] = (5));
} else
{var statearr_36515_36561 = state_36507__$1;(statearr_36515_36561[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (15)))
{var inst_36480 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36516_36562 = state_36507__$1;(statearr_36516_36562[(2)] = inst_36480);
(statearr_36516_36562[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (21)))
{var inst_36500 = (state_36507[(2)]);var state_36507__$1 = (function (){var statearr_36517 = state_36507;(statearr_36517[(9)] = inst_36500);
return statearr_36517;
})();var statearr_36518_36563 = state_36507__$1;(statearr_36518_36563[(2)] = null);
(statearr_36518_36563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (13)))
{var inst_36462 = (state_36507[(10)]);var inst_36464 = cljs.core.chunked_seq_QMARK_.call(null,inst_36462);var state_36507__$1 = state_36507;if(inst_36464)
{var statearr_36519_36564 = state_36507__$1;(statearr_36519_36564[(1)] = (16));
} else
{var statearr_36520_36565 = state_36507__$1;(statearr_36520_36565[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (22)))
{var inst_36492 = (state_36507[(2)]);var state_36507__$1 = state_36507;if(cljs.core.truth_(inst_36492))
{var statearr_36521_36566 = state_36507__$1;(statearr_36521_36566[(1)] = (23));
} else
{var statearr_36522_36567 = state_36507__$1;(statearr_36522_36567[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (6)))
{var inst_36486 = (state_36507[(7)]);var inst_36488 = (state_36507[(11)]);var inst_36438 = (state_36507[(8)]);var inst_36486__$1 = topic_fn.call(null,inst_36438);var inst_36487 = cljs.core.deref.call(null,mults);var inst_36488__$1 = cljs.core.get.call(null,inst_36487,inst_36486__$1);var state_36507__$1 = (function (){var statearr_36523 = state_36507;(statearr_36523[(7)] = inst_36486__$1);
(statearr_36523[(11)] = inst_36488__$1);
return statearr_36523;
})();if(cljs.core.truth_(inst_36488__$1))
{var statearr_36524_36568 = state_36507__$1;(statearr_36524_36568[(1)] = (19));
} else
{var statearr_36525_36569 = state_36507__$1;(statearr_36525_36569[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (25)))
{var inst_36497 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36526_36570 = state_36507__$1;(statearr_36526_36570[(2)] = inst_36497);
(statearr_36526_36570[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (17)))
{var inst_36462 = (state_36507[(10)]);var inst_36471 = cljs.core.first.call(null,inst_36462);var inst_36472 = cljs.core.async.muxch_STAR_.call(null,inst_36471);var inst_36473 = cljs.core.async.close_BANG_.call(null,inst_36472);var inst_36474 = cljs.core.next.call(null,inst_36462);var inst_36448 = inst_36474;var inst_36449 = null;var inst_36450 = (0);var inst_36451 = (0);var state_36507__$1 = (function (){var statearr_36527 = state_36507;(statearr_36527[(12)] = inst_36451);
(statearr_36527[(13)] = inst_36448);
(statearr_36527[(14)] = inst_36473);
(statearr_36527[(15)] = inst_36449);
(statearr_36527[(16)] = inst_36450);
return statearr_36527;
})();var statearr_36528_36571 = state_36507__$1;(statearr_36528_36571[(2)] = null);
(statearr_36528_36571[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (3)))
{var inst_36505 = (state_36507[(2)]);var state_36507__$1 = state_36507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36507__$1,inst_36505);
} else
{if((state_val_36508 === (12)))
{var inst_36482 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36529_36572 = state_36507__$1;(statearr_36529_36572[(2)] = inst_36482);
(statearr_36529_36572[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (2)))
{var state_36507__$1 = state_36507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36507__$1,(4),ch);
} else
{if((state_val_36508 === (23)))
{var state_36507__$1 = state_36507;var statearr_36530_36573 = state_36507__$1;(statearr_36530_36573[(2)] = null);
(statearr_36530_36573[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (19)))
{var inst_36488 = (state_36507[(11)]);var inst_36438 = (state_36507[(8)]);var inst_36490 = cljs.core.async.muxch_STAR_.call(null,inst_36488);var state_36507__$1 = state_36507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36507__$1,(22),inst_36490,inst_36438);
} else
{if((state_val_36508 === (11)))
{var inst_36448 = (state_36507[(13)]);var inst_36462 = (state_36507[(10)]);var inst_36462__$1 = cljs.core.seq.call(null,inst_36448);var state_36507__$1 = (function (){var statearr_36531 = state_36507;(statearr_36531[(10)] = inst_36462__$1);
return statearr_36531;
})();if(inst_36462__$1)
{var statearr_36532_36574 = state_36507__$1;(statearr_36532_36574[(1)] = (13));
} else
{var statearr_36533_36575 = state_36507__$1;(statearr_36533_36575[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (9)))
{var inst_36484 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36534_36576 = state_36507__$1;(statearr_36534_36576[(2)] = inst_36484);
(statearr_36534_36576[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (5)))
{var inst_36445 = cljs.core.deref.call(null,mults);var inst_36446 = cljs.core.vals.call(null,inst_36445);var inst_36447 = cljs.core.seq.call(null,inst_36446);var inst_36448 = inst_36447;var inst_36449 = null;var inst_36450 = (0);var inst_36451 = (0);var state_36507__$1 = (function (){var statearr_36535 = state_36507;(statearr_36535[(12)] = inst_36451);
(statearr_36535[(13)] = inst_36448);
(statearr_36535[(15)] = inst_36449);
(statearr_36535[(16)] = inst_36450);
return statearr_36535;
})();var statearr_36536_36577 = state_36507__$1;(statearr_36536_36577[(2)] = null);
(statearr_36536_36577[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (14)))
{var state_36507__$1 = state_36507;var statearr_36540_36578 = state_36507__$1;(statearr_36540_36578[(2)] = null);
(statearr_36540_36578[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (16)))
{var inst_36462 = (state_36507[(10)]);var inst_36466 = cljs.core.chunk_first.call(null,inst_36462);var inst_36467 = cljs.core.chunk_rest.call(null,inst_36462);var inst_36468 = cljs.core.count.call(null,inst_36466);var inst_36448 = inst_36467;var inst_36449 = inst_36466;var inst_36450 = inst_36468;var inst_36451 = (0);var state_36507__$1 = (function (){var statearr_36541 = state_36507;(statearr_36541[(12)] = inst_36451);
(statearr_36541[(13)] = inst_36448);
(statearr_36541[(15)] = inst_36449);
(statearr_36541[(16)] = inst_36450);
return statearr_36541;
})();var statearr_36542_36579 = state_36507__$1;(statearr_36542_36579[(2)] = null);
(statearr_36542_36579[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (10)))
{var inst_36451 = (state_36507[(12)]);var inst_36448 = (state_36507[(13)]);var inst_36449 = (state_36507[(15)]);var inst_36450 = (state_36507[(16)]);var inst_36456 = cljs.core._nth.call(null,inst_36449,inst_36451);var inst_36457 = cljs.core.async.muxch_STAR_.call(null,inst_36456);var inst_36458 = cljs.core.async.close_BANG_.call(null,inst_36457);var inst_36459 = (inst_36451 + (1));var tmp36537 = inst_36448;var tmp36538 = inst_36449;var tmp36539 = inst_36450;var inst_36448__$1 = tmp36537;var inst_36449__$1 = tmp36538;var inst_36450__$1 = tmp36539;var inst_36451__$1 = inst_36459;var state_36507__$1 = (function (){var statearr_36543 = state_36507;(statearr_36543[(12)] = inst_36451__$1);
(statearr_36543[(13)] = inst_36448__$1);
(statearr_36543[(15)] = inst_36449__$1);
(statearr_36543[(16)] = inst_36450__$1);
(statearr_36543[(17)] = inst_36458);
return statearr_36543;
})();var statearr_36544_36580 = state_36507__$1;(statearr_36544_36580[(2)] = null);
(statearr_36544_36580[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (18)))
{var inst_36477 = (state_36507[(2)]);var state_36507__$1 = state_36507;var statearr_36545_36581 = state_36507__$1;(statearr_36545_36581[(2)] = inst_36477);
(statearr_36545_36581[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36508 === (8)))
{var inst_36451 = (state_36507[(12)]);var inst_36450 = (state_36507[(16)]);var inst_36453 = (inst_36451 < inst_36450);var inst_36454 = inst_36453;var state_36507__$1 = state_36507;if(cljs.core.truth_(inst_36454))
{var statearr_36546_36582 = state_36507__$1;(statearr_36546_36582[(1)] = (10));
} else
{var statearr_36547_36583 = state_36507__$1;(statearr_36547_36583[(1)] = (11));
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
});})(c__5819__auto___36555,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___36555,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36551[(0)] = state_machine__5805__auto__);
(statearr_36551[(1)] = (1));
return statearr_36551;
});
var state_machine__5805__auto____1 = (function (state_36507){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36552){if((e36552 instanceof Object))
{var ex__5808__auto__ = e36552;var statearr_36553_36584 = state_36507;(statearr_36553_36584[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36585 = state_36507;
state_36507 = G__36585;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36507){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36555,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_36554 = f__5820__auto__.call(null);(statearr_36554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36555);
return statearr_36554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36555,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5819__auto___36722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36692){var state_val_36693 = (state_36692[(1)]);if((state_val_36693 === (7)))
{var state_36692__$1 = state_36692;var statearr_36694_36723 = state_36692__$1;(statearr_36694_36723[(2)] = null);
(statearr_36694_36723[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (1)))
{var state_36692__$1 = state_36692;var statearr_36695_36724 = state_36692__$1;(statearr_36695_36724[(2)] = null);
(statearr_36695_36724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (4)))
{var inst_36656 = (state_36692[(7)]);var inst_36658 = (inst_36656 < cnt);var state_36692__$1 = state_36692;if(cljs.core.truth_(inst_36658))
{var statearr_36696_36725 = state_36692__$1;(statearr_36696_36725[(1)] = (6));
} else
{var statearr_36697_36726 = state_36692__$1;(statearr_36697_36726[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (15)))
{var inst_36688 = (state_36692[(2)]);var state_36692__$1 = state_36692;var statearr_36698_36727 = state_36692__$1;(statearr_36698_36727[(2)] = inst_36688);
(statearr_36698_36727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (13)))
{var inst_36681 = cljs.core.async.close_BANG_.call(null,out);var state_36692__$1 = state_36692;var statearr_36699_36728 = state_36692__$1;(statearr_36699_36728[(2)] = inst_36681);
(statearr_36699_36728[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (6)))
{var state_36692__$1 = state_36692;var statearr_36700_36729 = state_36692__$1;(statearr_36700_36729[(2)] = null);
(statearr_36700_36729[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (3)))
{var inst_36690 = (state_36692[(2)]);var state_36692__$1 = state_36692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36692__$1,inst_36690);
} else
{if((state_val_36693 === (12)))
{var inst_36678 = (state_36692[(8)]);var inst_36678__$1 = (state_36692[(2)]);var inst_36679 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36678__$1);var state_36692__$1 = (function (){var statearr_36701 = state_36692;(statearr_36701[(8)] = inst_36678__$1);
return statearr_36701;
})();if(cljs.core.truth_(inst_36679))
{var statearr_36702_36730 = state_36692__$1;(statearr_36702_36730[(1)] = (13));
} else
{var statearr_36703_36731 = state_36692__$1;(statearr_36703_36731[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (2)))
{var inst_36655 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36656 = (0);var state_36692__$1 = (function (){var statearr_36704 = state_36692;(statearr_36704[(7)] = inst_36656);
(statearr_36704[(9)] = inst_36655);
return statearr_36704;
})();var statearr_36705_36732 = state_36692__$1;(statearr_36705_36732[(2)] = null);
(statearr_36705_36732[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (11)))
{var inst_36656 = (state_36692[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36692,(10),Object,null,(9));var inst_36665 = chs__$1.call(null,inst_36656);var inst_36666 = done.call(null,inst_36656);var inst_36667 = cljs.core.async.take_BANG_.call(null,inst_36665,inst_36666);var state_36692__$1 = state_36692;var statearr_36706_36733 = state_36692__$1;(statearr_36706_36733[(2)] = inst_36667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36692__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (9)))
{var inst_36656 = (state_36692[(7)]);var inst_36669 = (state_36692[(2)]);var inst_36670 = (inst_36656 + (1));var inst_36656__$1 = inst_36670;var state_36692__$1 = (function (){var statearr_36707 = state_36692;(statearr_36707[(7)] = inst_36656__$1);
(statearr_36707[(10)] = inst_36669);
return statearr_36707;
})();var statearr_36708_36734 = state_36692__$1;(statearr_36708_36734[(2)] = null);
(statearr_36708_36734[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (5)))
{var inst_36676 = (state_36692[(2)]);var state_36692__$1 = (function (){var statearr_36709 = state_36692;(statearr_36709[(11)] = inst_36676);
return statearr_36709;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36692__$1,(12),dchan);
} else
{if((state_val_36693 === (14)))
{var inst_36678 = (state_36692[(8)]);var inst_36683 = cljs.core.apply.call(null,f,inst_36678);var state_36692__$1 = state_36692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36692__$1,(16),out,inst_36683);
} else
{if((state_val_36693 === (16)))
{var inst_36685 = (state_36692[(2)]);var state_36692__$1 = (function (){var statearr_36710 = state_36692;(statearr_36710[(12)] = inst_36685);
return statearr_36710;
})();var statearr_36711_36735 = state_36692__$1;(statearr_36711_36735[(2)] = null);
(statearr_36711_36735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (10)))
{var inst_36660 = (state_36692[(2)]);var inst_36661 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36692__$1 = (function (){var statearr_36712 = state_36692;(statearr_36712[(13)] = inst_36660);
return statearr_36712;
})();var statearr_36713_36736 = state_36692__$1;(statearr_36713_36736[(2)] = inst_36661);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36692__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36693 === (8)))
{var inst_36674 = (state_36692[(2)]);var state_36692__$1 = state_36692;var statearr_36714_36737 = state_36692__$1;(statearr_36714_36737[(2)] = inst_36674);
(statearr_36714_36737[(1)] = (5));
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
});})(c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36718[(0)] = state_machine__5805__auto__);
(statearr_36718[(1)] = (1));
return statearr_36718;
});
var state_machine__5805__auto____1 = (function (state_36692){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36719){if((e36719 instanceof Object))
{var ex__5808__auto__ = e36719;var statearr_36720_36738 = state_36692;(statearr_36720_36738[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36739 = state_36692;
state_36692 = G__36739;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36692){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_36721 = f__5820__auto__.call(null);(statearr_36721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36722);
return statearr_36721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36722,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___36847 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36847,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36847,out){
return (function (state_36823){var state_val_36824 = (state_36823[(1)]);if((state_val_36824 === (7)))
{var inst_36802 = (state_36823[(7)]);var inst_36803 = (state_36823[(8)]);var inst_36802__$1 = (state_36823[(2)]);var inst_36803__$1 = cljs.core.nth.call(null,inst_36802__$1,(0),null);var inst_36804 = cljs.core.nth.call(null,inst_36802__$1,(1),null);var inst_36805 = (inst_36803__$1 == null);var state_36823__$1 = (function (){var statearr_36825 = state_36823;(statearr_36825[(7)] = inst_36802__$1);
(statearr_36825[(8)] = inst_36803__$1);
(statearr_36825[(9)] = inst_36804);
return statearr_36825;
})();if(cljs.core.truth_(inst_36805))
{var statearr_36826_36848 = state_36823__$1;(statearr_36826_36848[(1)] = (8));
} else
{var statearr_36827_36849 = state_36823__$1;(statearr_36827_36849[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (1)))
{var inst_36794 = cljs.core.vec.call(null,chs);var inst_36795 = inst_36794;var state_36823__$1 = (function (){var statearr_36828 = state_36823;(statearr_36828[(10)] = inst_36795);
return statearr_36828;
})();var statearr_36829_36850 = state_36823__$1;(statearr_36829_36850[(2)] = null);
(statearr_36829_36850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (4)))
{var inst_36795 = (state_36823[(10)]);var state_36823__$1 = state_36823;return cljs.core.async.ioc_alts_BANG_.call(null,state_36823__$1,(7),inst_36795);
} else
{if((state_val_36824 === (6)))
{var inst_36819 = (state_36823[(2)]);var state_36823__$1 = state_36823;var statearr_36830_36851 = state_36823__$1;(statearr_36830_36851[(2)] = inst_36819);
(statearr_36830_36851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (3)))
{var inst_36821 = (state_36823[(2)]);var state_36823__$1 = state_36823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36823__$1,inst_36821);
} else
{if((state_val_36824 === (2)))
{var inst_36795 = (state_36823[(10)]);var inst_36797 = cljs.core.count.call(null,inst_36795);var inst_36798 = (inst_36797 > (0));var state_36823__$1 = state_36823;if(cljs.core.truth_(inst_36798))
{var statearr_36832_36852 = state_36823__$1;(statearr_36832_36852[(1)] = (4));
} else
{var statearr_36833_36853 = state_36823__$1;(statearr_36833_36853[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (11)))
{var inst_36795 = (state_36823[(10)]);var inst_36812 = (state_36823[(2)]);var tmp36831 = inst_36795;var inst_36795__$1 = tmp36831;var state_36823__$1 = (function (){var statearr_36834 = state_36823;(statearr_36834[(10)] = inst_36795__$1);
(statearr_36834[(11)] = inst_36812);
return statearr_36834;
})();var statearr_36835_36854 = state_36823__$1;(statearr_36835_36854[(2)] = null);
(statearr_36835_36854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (9)))
{var inst_36803 = (state_36823[(8)]);var state_36823__$1 = state_36823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36823__$1,(11),out,inst_36803);
} else
{if((state_val_36824 === (5)))
{var inst_36817 = cljs.core.async.close_BANG_.call(null,out);var state_36823__$1 = state_36823;var statearr_36836_36855 = state_36823__$1;(statearr_36836_36855[(2)] = inst_36817);
(statearr_36836_36855[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (10)))
{var inst_36815 = (state_36823[(2)]);var state_36823__$1 = state_36823;var statearr_36837_36856 = state_36823__$1;(statearr_36837_36856[(2)] = inst_36815);
(statearr_36837_36856[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36824 === (8)))
{var inst_36802 = (state_36823[(7)]);var inst_36803 = (state_36823[(8)]);var inst_36804 = (state_36823[(9)]);var inst_36795 = (state_36823[(10)]);var inst_36807 = (function (){var c = inst_36804;var v = inst_36803;var vec__36800 = inst_36802;var cs = inst_36795;return ((function (c,v,vec__36800,cs,inst_36802,inst_36803,inst_36804,inst_36795,state_val_36824,c__5819__auto___36847,out){
return (function (p1__36740_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36740_SHARP_);
});
;})(c,v,vec__36800,cs,inst_36802,inst_36803,inst_36804,inst_36795,state_val_36824,c__5819__auto___36847,out))
})();var inst_36808 = cljs.core.filterv.call(null,inst_36807,inst_36795);var inst_36795__$1 = inst_36808;var state_36823__$1 = (function (){var statearr_36838 = state_36823;(statearr_36838[(10)] = inst_36795__$1);
return statearr_36838;
})();var statearr_36839_36857 = state_36823__$1;(statearr_36839_36857[(2)] = null);
(statearr_36839_36857[(1)] = (2));
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
});})(c__5819__auto___36847,out))
;return ((function (switch__5804__auto__,c__5819__auto___36847,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36843 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36843[(0)] = state_machine__5805__auto__);
(statearr_36843[(1)] = (1));
return statearr_36843;
});
var state_machine__5805__auto____1 = (function (state_36823){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36823);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36844){if((e36844 instanceof Object))
{var ex__5808__auto__ = e36844;var statearr_36845_36858 = state_36823;(statearr_36845_36858[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36844;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36859 = state_36823;
state_36823 = G__36859;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36823){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36847,out))
})();var state__5821__auto__ = (function (){var statearr_36846 = f__5820__auto__.call(null);(statearr_36846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36847);
return statearr_36846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36847,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___36952 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___36952,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___36952,out){
return (function (state_36929){var state_val_36930 = (state_36929[(1)]);if((state_val_36930 === (7)))
{var inst_36911 = (state_36929[(7)]);var inst_36911__$1 = (state_36929[(2)]);var inst_36912 = (inst_36911__$1 == null);var inst_36913 = cljs.core.not.call(null,inst_36912);var state_36929__$1 = (function (){var statearr_36931 = state_36929;(statearr_36931[(7)] = inst_36911__$1);
return statearr_36931;
})();if(inst_36913)
{var statearr_36932_36953 = state_36929__$1;(statearr_36932_36953[(1)] = (8));
} else
{var statearr_36933_36954 = state_36929__$1;(statearr_36933_36954[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (1)))
{var inst_36906 = (0);var state_36929__$1 = (function (){var statearr_36934 = state_36929;(statearr_36934[(8)] = inst_36906);
return statearr_36934;
})();var statearr_36935_36955 = state_36929__$1;(statearr_36935_36955[(2)] = null);
(statearr_36935_36955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (4)))
{var state_36929__$1 = state_36929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36929__$1,(7),ch);
} else
{if((state_val_36930 === (6)))
{var inst_36924 = (state_36929[(2)]);var state_36929__$1 = state_36929;var statearr_36936_36956 = state_36929__$1;(statearr_36936_36956[(2)] = inst_36924);
(statearr_36936_36956[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (3)))
{var inst_36926 = (state_36929[(2)]);var inst_36927 = cljs.core.async.close_BANG_.call(null,out);var state_36929__$1 = (function (){var statearr_36937 = state_36929;(statearr_36937[(9)] = inst_36926);
return statearr_36937;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36929__$1,inst_36927);
} else
{if((state_val_36930 === (2)))
{var inst_36906 = (state_36929[(8)]);var inst_36908 = (inst_36906 < n);var state_36929__$1 = state_36929;if(cljs.core.truth_(inst_36908))
{var statearr_36938_36957 = state_36929__$1;(statearr_36938_36957[(1)] = (4));
} else
{var statearr_36939_36958 = state_36929__$1;(statearr_36939_36958[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (11)))
{var inst_36906 = (state_36929[(8)]);var inst_36916 = (state_36929[(2)]);var inst_36917 = (inst_36906 + (1));var inst_36906__$1 = inst_36917;var state_36929__$1 = (function (){var statearr_36940 = state_36929;(statearr_36940[(10)] = inst_36916);
(statearr_36940[(8)] = inst_36906__$1);
return statearr_36940;
})();var statearr_36941_36959 = state_36929__$1;(statearr_36941_36959[(2)] = null);
(statearr_36941_36959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (9)))
{var state_36929__$1 = state_36929;var statearr_36942_36960 = state_36929__$1;(statearr_36942_36960[(2)] = null);
(statearr_36942_36960[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (5)))
{var state_36929__$1 = state_36929;var statearr_36943_36961 = state_36929__$1;(statearr_36943_36961[(2)] = null);
(statearr_36943_36961[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (10)))
{var inst_36921 = (state_36929[(2)]);var state_36929__$1 = state_36929;var statearr_36944_36962 = state_36929__$1;(statearr_36944_36962[(2)] = inst_36921);
(statearr_36944_36962[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_36930 === (8)))
{var inst_36911 = (state_36929[(7)]);var state_36929__$1 = state_36929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36929__$1,(11),out,inst_36911);
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
});})(c__5819__auto___36952,out))
;return ((function (switch__5804__auto__,c__5819__auto___36952,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_36948 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36948[(0)] = state_machine__5805__auto__);
(statearr_36948[(1)] = (1));
return statearr_36948;
});
var state_machine__5805__auto____1 = (function (state_36929){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_36929);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e36949){if((e36949 instanceof Object))
{var ex__5808__auto__ = e36949;var statearr_36950_36963 = state_36929;(statearr_36950_36963[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e36949;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__36964 = state_36929;
state_36929 = G__36964;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_36929){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_36929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___36952,out))
})();var state__5821__auto__ = (function (){var statearr_36951 = f__5820__auto__.call(null);(statearr_36951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___36952);
return statearr_36951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___36952,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t36972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36972 = (function (ch,f,map_LT_,meta36973){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36973 = meta36973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36972.cljs$lang$type = true;
cljs.core.async.t36972.cljs$lang$ctorStr = "cljs.core.async/t36972";
cljs.core.async.t36972.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36972");
});
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t36975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36975 = (function (fn1,_,meta36973,ch,f,map_LT_,meta36976){
this.fn1 = fn1;
this._ = _;
this.meta36973 = meta36973;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36976 = meta36976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36975.cljs$lang$type = true;
cljs.core.async.t36975.cljs$lang$ctorStr = "cljs.core.async/t36975";
cljs.core.async.t36975.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36975");
});})(___$1))
;
cljs.core.async.t36975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t36975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t36975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__36965_SHARP_){return f1.call(null,(((p1__36965_SHARP_ == null))?null:self__.f.call(null,p1__36965_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t36975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36977){var self__ = this;
var _36977__$1 = this;return self__.meta36976;
});})(___$1))
;
cljs.core.async.t36975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36977,meta36976__$1){var self__ = this;
var _36977__$1 = this;return (new cljs.core.async.t36975(self__.fn1,self__._,self__.meta36973,self__.ch,self__.f,self__.map_LT_,meta36976__$1));
});})(___$1))
;
cljs.core.async.__GT_t36975 = ((function (___$1){
return (function __GT_t36975(fn1__$1,___$2,meta36973__$1,ch__$2,f__$2,map_LT___$2,meta36976){return (new cljs.core.async.t36975(fn1__$1,___$2,meta36973__$1,ch__$2,f__$2,map_LT___$2,meta36976));
});})(___$1))
;
}
return (new cljs.core.async.t36975(fn1,___$1,self__.meta36973,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t36972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36974){var self__ = this;
var _36974__$1 = this;return self__.meta36973;
});
cljs.core.async.t36972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36974,meta36973__$1){var self__ = this;
var _36974__$1 = this;return (new cljs.core.async.t36972(self__.ch,self__.f,self__.map_LT_,meta36973__$1));
});
cljs.core.async.__GT_t36972 = (function __GT_t36972(ch__$1,f__$1,map_LT___$1,meta36973){return (new cljs.core.async.t36972(ch__$1,f__$1,map_LT___$1,meta36973));
});
}
return (new cljs.core.async.t36972(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t36981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36981 = (function (ch,f,map_GT_,meta36982){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36982 = meta36982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36981.cljs$lang$type = true;
cljs.core.async.t36981.cljs$lang$ctorStr = "cljs.core.async/t36981";
cljs.core.async.t36981.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36981");
});
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36983){var self__ = this;
var _36983__$1 = this;return self__.meta36982;
});
cljs.core.async.t36981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36983,meta36982__$1){var self__ = this;
var _36983__$1 = this;return (new cljs.core.async.t36981(self__.ch,self__.f,self__.map_GT_,meta36982__$1));
});
cljs.core.async.__GT_t36981 = (function __GT_t36981(ch__$1,f__$1,map_GT___$1,meta36982){return (new cljs.core.async.t36981(ch__$1,f__$1,map_GT___$1,meta36982));
});
}
return (new cljs.core.async.t36981(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t36987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36987 = (function (ch,p,filter_GT_,meta36988){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36988 = meta36988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36987.cljs$lang$type = true;
cljs.core.async.t36987.cljs$lang$ctorStr = "cljs.core.async/t36987";
cljs.core.async.t36987.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t36987");
});
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t36987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t36987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36989){var self__ = this;
var _36989__$1 = this;return self__.meta36988;
});
cljs.core.async.t36987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36989,meta36988__$1){var self__ = this;
var _36989__$1 = this;return (new cljs.core.async.t36987(self__.ch,self__.p,self__.filter_GT_,meta36988__$1));
});
cljs.core.async.__GT_t36987 = (function __GT_t36987(ch__$1,p__$1,filter_GT___$1,meta36988){return (new cljs.core.async.t36987(ch__$1,p__$1,filter_GT___$1,meta36988));
});
}
return (new cljs.core.async.t36987(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37072 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37072,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37072,out){
return (function (state_37051){var state_val_37052 = (state_37051[(1)]);if((state_val_37052 === (7)))
{var inst_37047 = (state_37051[(2)]);var state_37051__$1 = state_37051;var statearr_37053_37073 = state_37051__$1;(statearr_37053_37073[(2)] = inst_37047);
(statearr_37053_37073[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (1)))
{var state_37051__$1 = state_37051;var statearr_37054_37074 = state_37051__$1;(statearr_37054_37074[(2)] = null);
(statearr_37054_37074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (4)))
{var inst_37033 = (state_37051[(7)]);var inst_37033__$1 = (state_37051[(2)]);var inst_37034 = (inst_37033__$1 == null);var state_37051__$1 = (function (){var statearr_37055 = state_37051;(statearr_37055[(7)] = inst_37033__$1);
return statearr_37055;
})();if(cljs.core.truth_(inst_37034))
{var statearr_37056_37075 = state_37051__$1;(statearr_37056_37075[(1)] = (5));
} else
{var statearr_37057_37076 = state_37051__$1;(statearr_37057_37076[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (6)))
{var inst_37033 = (state_37051[(7)]);var inst_37038 = p.call(null,inst_37033);var state_37051__$1 = state_37051;if(cljs.core.truth_(inst_37038))
{var statearr_37058_37077 = state_37051__$1;(statearr_37058_37077[(1)] = (8));
} else
{var statearr_37059_37078 = state_37051__$1;(statearr_37059_37078[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (3)))
{var inst_37049 = (state_37051[(2)]);var state_37051__$1 = state_37051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37051__$1,inst_37049);
} else
{if((state_val_37052 === (2)))
{var state_37051__$1 = state_37051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37051__$1,(4),ch);
} else
{if((state_val_37052 === (11)))
{var inst_37041 = (state_37051[(2)]);var state_37051__$1 = state_37051;var statearr_37060_37079 = state_37051__$1;(statearr_37060_37079[(2)] = inst_37041);
(statearr_37060_37079[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (9)))
{var state_37051__$1 = state_37051;var statearr_37061_37080 = state_37051__$1;(statearr_37061_37080[(2)] = null);
(statearr_37061_37080[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (5)))
{var inst_37036 = cljs.core.async.close_BANG_.call(null,out);var state_37051__$1 = state_37051;var statearr_37062_37081 = state_37051__$1;(statearr_37062_37081[(2)] = inst_37036);
(statearr_37062_37081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (10)))
{var inst_37044 = (state_37051[(2)]);var state_37051__$1 = (function (){var statearr_37063 = state_37051;(statearr_37063[(8)] = inst_37044);
return statearr_37063;
})();var statearr_37064_37082 = state_37051__$1;(statearr_37064_37082[(2)] = null);
(statearr_37064_37082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37052 === (8)))
{var inst_37033 = (state_37051[(7)]);var state_37051__$1 = state_37051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37051__$1,(11),out,inst_37033);
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
});})(c__5819__auto___37072,out))
;return ((function (switch__5804__auto__,c__5819__auto___37072,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37068 = [null,null,null,null,null,null,null,null,null];(statearr_37068[(0)] = state_machine__5805__auto__);
(statearr_37068[(1)] = (1));
return statearr_37068;
});
var state_machine__5805__auto____1 = (function (state_37051){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37069){if((e37069 instanceof Object))
{var ex__5808__auto__ = e37069;var statearr_37070_37083 = state_37051;(statearr_37070_37083[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37084 = state_37051;
state_37051 = G__37084;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37051){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37072,out))
})();var state__5821__auto__ = (function (){var statearr_37071 = f__5820__auto__.call(null);(statearr_37071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37072);
return statearr_37071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37072,out))
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
return (function (state_37250){var state_val_37251 = (state_37250[(1)]);if((state_val_37251 === (7)))
{var inst_37246 = (state_37250[(2)]);var state_37250__$1 = state_37250;var statearr_37252_37293 = state_37250__$1;(statearr_37252_37293[(2)] = inst_37246);
(statearr_37252_37293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (20)))
{var inst_37216 = (state_37250[(7)]);var inst_37227 = (state_37250[(2)]);var inst_37228 = cljs.core.next.call(null,inst_37216);var inst_37202 = inst_37228;var inst_37203 = null;var inst_37204 = (0);var inst_37205 = (0);var state_37250__$1 = (function (){var statearr_37253 = state_37250;(statearr_37253[(8)] = inst_37205);
(statearr_37253[(9)] = inst_37204);
(statearr_37253[(10)] = inst_37202);
(statearr_37253[(11)] = inst_37203);
(statearr_37253[(12)] = inst_37227);
return statearr_37253;
})();var statearr_37254_37294 = state_37250__$1;(statearr_37254_37294[(2)] = null);
(statearr_37254_37294[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (1)))
{var state_37250__$1 = state_37250;var statearr_37255_37295 = state_37250__$1;(statearr_37255_37295[(2)] = null);
(statearr_37255_37295[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (4)))
{var inst_37191 = (state_37250[(13)]);var inst_37191__$1 = (state_37250[(2)]);var inst_37192 = (inst_37191__$1 == null);var state_37250__$1 = (function (){var statearr_37256 = state_37250;(statearr_37256[(13)] = inst_37191__$1);
return statearr_37256;
})();if(cljs.core.truth_(inst_37192))
{var statearr_37257_37296 = state_37250__$1;(statearr_37257_37296[(1)] = (5));
} else
{var statearr_37258_37297 = state_37250__$1;(statearr_37258_37297[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (15)))
{var state_37250__$1 = state_37250;var statearr_37262_37298 = state_37250__$1;(statearr_37262_37298[(2)] = null);
(statearr_37262_37298[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (21)))
{var state_37250__$1 = state_37250;var statearr_37263_37299 = state_37250__$1;(statearr_37263_37299[(2)] = null);
(statearr_37263_37299[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (13)))
{var inst_37205 = (state_37250[(8)]);var inst_37204 = (state_37250[(9)]);var inst_37202 = (state_37250[(10)]);var inst_37203 = (state_37250[(11)]);var inst_37212 = (state_37250[(2)]);var inst_37213 = (inst_37205 + (1));var tmp37259 = inst_37204;var tmp37260 = inst_37202;var tmp37261 = inst_37203;var inst_37202__$1 = tmp37260;var inst_37203__$1 = tmp37261;var inst_37204__$1 = tmp37259;var inst_37205__$1 = inst_37213;var state_37250__$1 = (function (){var statearr_37264 = state_37250;(statearr_37264[(8)] = inst_37205__$1);
(statearr_37264[(14)] = inst_37212);
(statearr_37264[(9)] = inst_37204__$1);
(statearr_37264[(10)] = inst_37202__$1);
(statearr_37264[(11)] = inst_37203__$1);
return statearr_37264;
})();var statearr_37265_37300 = state_37250__$1;(statearr_37265_37300[(2)] = null);
(statearr_37265_37300[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (22)))
{var state_37250__$1 = state_37250;var statearr_37266_37301 = state_37250__$1;(statearr_37266_37301[(2)] = null);
(statearr_37266_37301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (6)))
{var inst_37191 = (state_37250[(13)]);var inst_37200 = f.call(null,inst_37191);var inst_37201 = cljs.core.seq.call(null,inst_37200);var inst_37202 = inst_37201;var inst_37203 = null;var inst_37204 = (0);var inst_37205 = (0);var state_37250__$1 = (function (){var statearr_37267 = state_37250;(statearr_37267[(8)] = inst_37205);
(statearr_37267[(9)] = inst_37204);
(statearr_37267[(10)] = inst_37202);
(statearr_37267[(11)] = inst_37203);
return statearr_37267;
})();var statearr_37268_37302 = state_37250__$1;(statearr_37268_37302[(2)] = null);
(statearr_37268_37302[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (17)))
{var inst_37216 = (state_37250[(7)]);var inst_37220 = cljs.core.chunk_first.call(null,inst_37216);var inst_37221 = cljs.core.chunk_rest.call(null,inst_37216);var inst_37222 = cljs.core.count.call(null,inst_37220);var inst_37202 = inst_37221;var inst_37203 = inst_37220;var inst_37204 = inst_37222;var inst_37205 = (0);var state_37250__$1 = (function (){var statearr_37269 = state_37250;(statearr_37269[(8)] = inst_37205);
(statearr_37269[(9)] = inst_37204);
(statearr_37269[(10)] = inst_37202);
(statearr_37269[(11)] = inst_37203);
return statearr_37269;
})();var statearr_37270_37303 = state_37250__$1;(statearr_37270_37303[(2)] = null);
(statearr_37270_37303[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (3)))
{var inst_37248 = (state_37250[(2)]);var state_37250__$1 = state_37250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37250__$1,inst_37248);
} else
{if((state_val_37251 === (12)))
{var inst_37236 = (state_37250[(2)]);var state_37250__$1 = state_37250;var statearr_37271_37304 = state_37250__$1;(statearr_37271_37304[(2)] = inst_37236);
(statearr_37271_37304[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (2)))
{var state_37250__$1 = state_37250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37250__$1,(4),in$);
} else
{if((state_val_37251 === (23)))
{var inst_37244 = (state_37250[(2)]);var state_37250__$1 = state_37250;var statearr_37272_37305 = state_37250__$1;(statearr_37272_37305[(2)] = inst_37244);
(statearr_37272_37305[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (19)))
{var inst_37231 = (state_37250[(2)]);var state_37250__$1 = state_37250;var statearr_37273_37306 = state_37250__$1;(statearr_37273_37306[(2)] = inst_37231);
(statearr_37273_37306[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (11)))
{var inst_37202 = (state_37250[(10)]);var inst_37216 = (state_37250[(7)]);var inst_37216__$1 = cljs.core.seq.call(null,inst_37202);var state_37250__$1 = (function (){var statearr_37274 = state_37250;(statearr_37274[(7)] = inst_37216__$1);
return statearr_37274;
})();if(inst_37216__$1)
{var statearr_37275_37307 = state_37250__$1;(statearr_37275_37307[(1)] = (14));
} else
{var statearr_37276_37308 = state_37250__$1;(statearr_37276_37308[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (9)))
{var inst_37238 = (state_37250[(2)]);var inst_37239 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_37250__$1 = (function (){var statearr_37277 = state_37250;(statearr_37277[(15)] = inst_37238);
return statearr_37277;
})();if(cljs.core.truth_(inst_37239))
{var statearr_37278_37309 = state_37250__$1;(statearr_37278_37309[(1)] = (21));
} else
{var statearr_37279_37310 = state_37250__$1;(statearr_37279_37310[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (5)))
{var inst_37194 = cljs.core.async.close_BANG_.call(null,out);var state_37250__$1 = state_37250;var statearr_37280_37311 = state_37250__$1;(statearr_37280_37311[(2)] = inst_37194);
(statearr_37280_37311[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (14)))
{var inst_37216 = (state_37250[(7)]);var inst_37218 = cljs.core.chunked_seq_QMARK_.call(null,inst_37216);var state_37250__$1 = state_37250;if(inst_37218)
{var statearr_37281_37312 = state_37250__$1;(statearr_37281_37312[(1)] = (17));
} else
{var statearr_37282_37313 = state_37250__$1;(statearr_37282_37313[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (16)))
{var inst_37234 = (state_37250[(2)]);var state_37250__$1 = state_37250;var statearr_37283_37314 = state_37250__$1;(statearr_37283_37314[(2)] = inst_37234);
(statearr_37283_37314[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37251 === (10)))
{var inst_37205 = (state_37250[(8)]);var inst_37203 = (state_37250[(11)]);var inst_37210 = cljs.core._nth.call(null,inst_37203,inst_37205);var state_37250__$1 = state_37250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37250__$1,(13),out,inst_37210);
} else
{if((state_val_37251 === (18)))
{var inst_37216 = (state_37250[(7)]);var inst_37225 = cljs.core.first.call(null,inst_37216);var state_37250__$1 = state_37250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37250__$1,(20),out,inst_37225);
} else
{if((state_val_37251 === (8)))
{var inst_37205 = (state_37250[(8)]);var inst_37204 = (state_37250[(9)]);var inst_37207 = (inst_37205 < inst_37204);var inst_37208 = inst_37207;var state_37250__$1 = state_37250;if(cljs.core.truth_(inst_37208))
{var statearr_37284_37315 = state_37250__$1;(statearr_37284_37315[(1)] = (10));
} else
{var statearr_37285_37316 = state_37250__$1;(statearr_37285_37316[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_37289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37289[(0)] = state_machine__5805__auto__);
(statearr_37289[(1)] = (1));
return statearr_37289;
});
var state_machine__5805__auto____1 = (function (state_37250){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37250);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37290){if((e37290 instanceof Object))
{var ex__5808__auto__ = e37290;var statearr_37291_37317 = state_37250;(statearr_37291_37317[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37318 = state_37250;
state_37250 = G__37318;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37250){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_37292 = f__5820__auto__.call(null);(statearr_37292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_37292;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37415 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37415,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37415,out){
return (function (state_37390){var state_val_37391 = (state_37390[(1)]);if((state_val_37391 === (7)))
{var inst_37385 = (state_37390[(2)]);var state_37390__$1 = state_37390;var statearr_37392_37416 = state_37390__$1;(statearr_37392_37416[(2)] = inst_37385);
(statearr_37392_37416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (1)))
{var inst_37367 = null;var state_37390__$1 = (function (){var statearr_37393 = state_37390;(statearr_37393[(7)] = inst_37367);
return statearr_37393;
})();var statearr_37394_37417 = state_37390__$1;(statearr_37394_37417[(2)] = null);
(statearr_37394_37417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (4)))
{var inst_37370 = (state_37390[(8)]);var inst_37370__$1 = (state_37390[(2)]);var inst_37371 = (inst_37370__$1 == null);var inst_37372 = cljs.core.not.call(null,inst_37371);var state_37390__$1 = (function (){var statearr_37395 = state_37390;(statearr_37395[(8)] = inst_37370__$1);
return statearr_37395;
})();if(inst_37372)
{var statearr_37396_37418 = state_37390__$1;(statearr_37396_37418[(1)] = (5));
} else
{var statearr_37397_37419 = state_37390__$1;(statearr_37397_37419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (6)))
{var state_37390__$1 = state_37390;var statearr_37398_37420 = state_37390__$1;(statearr_37398_37420[(2)] = null);
(statearr_37398_37420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (3)))
{var inst_37387 = (state_37390[(2)]);var inst_37388 = cljs.core.async.close_BANG_.call(null,out);var state_37390__$1 = (function (){var statearr_37399 = state_37390;(statearr_37399[(9)] = inst_37387);
return statearr_37399;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37390__$1,inst_37388);
} else
{if((state_val_37391 === (2)))
{var state_37390__$1 = state_37390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37390__$1,(4),ch);
} else
{if((state_val_37391 === (11)))
{var inst_37370 = (state_37390[(8)]);var inst_37379 = (state_37390[(2)]);var inst_37367 = inst_37370;var state_37390__$1 = (function (){var statearr_37400 = state_37390;(statearr_37400[(7)] = inst_37367);
(statearr_37400[(10)] = inst_37379);
return statearr_37400;
})();var statearr_37401_37421 = state_37390__$1;(statearr_37401_37421[(2)] = null);
(statearr_37401_37421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (9)))
{var inst_37370 = (state_37390[(8)]);var state_37390__$1 = state_37390;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37390__$1,(11),out,inst_37370);
} else
{if((state_val_37391 === (5)))
{var inst_37367 = (state_37390[(7)]);var inst_37370 = (state_37390[(8)]);var inst_37374 = cljs.core._EQ_.call(null,inst_37370,inst_37367);var state_37390__$1 = state_37390;if(inst_37374)
{var statearr_37403_37422 = state_37390__$1;(statearr_37403_37422[(1)] = (8));
} else
{var statearr_37404_37423 = state_37390__$1;(statearr_37404_37423[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (10)))
{var inst_37382 = (state_37390[(2)]);var state_37390__$1 = state_37390;var statearr_37405_37424 = state_37390__$1;(statearr_37405_37424[(2)] = inst_37382);
(statearr_37405_37424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37391 === (8)))
{var inst_37367 = (state_37390[(7)]);var tmp37402 = inst_37367;var inst_37367__$1 = tmp37402;var state_37390__$1 = (function (){var statearr_37406 = state_37390;(statearr_37406[(7)] = inst_37367__$1);
return statearr_37406;
})();var statearr_37407_37425 = state_37390__$1;(statearr_37407_37425[(2)] = null);
(statearr_37407_37425[(1)] = (2));
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
});})(c__5819__auto___37415,out))
;return ((function (switch__5804__auto__,c__5819__auto___37415,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37411 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37411[(0)] = state_machine__5805__auto__);
(statearr_37411[(1)] = (1));
return statearr_37411;
});
var state_machine__5805__auto____1 = (function (state_37390){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37412){if((e37412 instanceof Object))
{var ex__5808__auto__ = e37412;var statearr_37413_37426 = state_37390;(statearr_37413_37426[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37390);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37427 = state_37390;
state_37390 = G__37427;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37390){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37415,out))
})();var state__5821__auto__ = (function (){var statearr_37414 = f__5820__auto__.call(null);(statearr_37414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37415);
return statearr_37414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37415,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37562,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37562,out){
return (function (state_37532){var state_val_37533 = (state_37532[(1)]);if((state_val_37533 === (7)))
{var inst_37528 = (state_37532[(2)]);var state_37532__$1 = state_37532;var statearr_37534_37563 = state_37532__$1;(statearr_37534_37563[(2)] = inst_37528);
(statearr_37534_37563[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (1)))
{var inst_37495 = (new Array(n));var inst_37496 = inst_37495;var inst_37497 = (0);var state_37532__$1 = (function (){var statearr_37535 = state_37532;(statearr_37535[(7)] = inst_37497);
(statearr_37535[(8)] = inst_37496);
return statearr_37535;
})();var statearr_37536_37564 = state_37532__$1;(statearr_37536_37564[(2)] = null);
(statearr_37536_37564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (4)))
{var inst_37500 = (state_37532[(9)]);var inst_37500__$1 = (state_37532[(2)]);var inst_37501 = (inst_37500__$1 == null);var inst_37502 = cljs.core.not.call(null,inst_37501);var state_37532__$1 = (function (){var statearr_37537 = state_37532;(statearr_37537[(9)] = inst_37500__$1);
return statearr_37537;
})();if(inst_37502)
{var statearr_37538_37565 = state_37532__$1;(statearr_37538_37565[(1)] = (5));
} else
{var statearr_37539_37566 = state_37532__$1;(statearr_37539_37566[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (15)))
{var inst_37522 = (state_37532[(2)]);var state_37532__$1 = state_37532;var statearr_37540_37567 = state_37532__$1;(statearr_37540_37567[(2)] = inst_37522);
(statearr_37540_37567[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (13)))
{var state_37532__$1 = state_37532;var statearr_37541_37568 = state_37532__$1;(statearr_37541_37568[(2)] = null);
(statearr_37541_37568[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (6)))
{var inst_37497 = (state_37532[(7)]);var inst_37518 = (inst_37497 > (0));var state_37532__$1 = state_37532;if(cljs.core.truth_(inst_37518))
{var statearr_37542_37569 = state_37532__$1;(statearr_37542_37569[(1)] = (12));
} else
{var statearr_37543_37570 = state_37532__$1;(statearr_37543_37570[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (3)))
{var inst_37530 = (state_37532[(2)]);var state_37532__$1 = state_37532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37532__$1,inst_37530);
} else
{if((state_val_37533 === (12)))
{var inst_37496 = (state_37532[(8)]);var inst_37520 = cljs.core.vec.call(null,inst_37496);var state_37532__$1 = state_37532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37532__$1,(15),out,inst_37520);
} else
{if((state_val_37533 === (2)))
{var state_37532__$1 = state_37532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37532__$1,(4),ch);
} else
{if((state_val_37533 === (11)))
{var inst_37512 = (state_37532[(2)]);var inst_37513 = (new Array(n));var inst_37496 = inst_37513;var inst_37497 = (0);var state_37532__$1 = (function (){var statearr_37544 = state_37532;(statearr_37544[(7)] = inst_37497);
(statearr_37544[(8)] = inst_37496);
(statearr_37544[(10)] = inst_37512);
return statearr_37544;
})();var statearr_37545_37571 = state_37532__$1;(statearr_37545_37571[(2)] = null);
(statearr_37545_37571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (9)))
{var inst_37496 = (state_37532[(8)]);var inst_37510 = cljs.core.vec.call(null,inst_37496);var state_37532__$1 = state_37532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37532__$1,(11),out,inst_37510);
} else
{if((state_val_37533 === (5)))
{var inst_37497 = (state_37532[(7)]);var inst_37500 = (state_37532[(9)]);var inst_37505 = (state_37532[(11)]);var inst_37496 = (state_37532[(8)]);var inst_37504 = (inst_37496[inst_37497] = inst_37500);var inst_37505__$1 = (inst_37497 + (1));var inst_37506 = (inst_37505__$1 < n);var state_37532__$1 = (function (){var statearr_37546 = state_37532;(statearr_37546[(11)] = inst_37505__$1);
(statearr_37546[(12)] = inst_37504);
return statearr_37546;
})();if(cljs.core.truth_(inst_37506))
{var statearr_37547_37572 = state_37532__$1;(statearr_37547_37572[(1)] = (8));
} else
{var statearr_37548_37573 = state_37532__$1;(statearr_37548_37573[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (14)))
{var inst_37525 = (state_37532[(2)]);var inst_37526 = cljs.core.async.close_BANG_.call(null,out);var state_37532__$1 = (function (){var statearr_37550 = state_37532;(statearr_37550[(13)] = inst_37525);
return statearr_37550;
})();var statearr_37551_37574 = state_37532__$1;(statearr_37551_37574[(2)] = inst_37526);
(statearr_37551_37574[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (10)))
{var inst_37516 = (state_37532[(2)]);var state_37532__$1 = state_37532;var statearr_37552_37575 = state_37532__$1;(statearr_37552_37575[(2)] = inst_37516);
(statearr_37552_37575[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37533 === (8)))
{var inst_37505 = (state_37532[(11)]);var inst_37496 = (state_37532[(8)]);var tmp37549 = inst_37496;var inst_37496__$1 = tmp37549;var inst_37497 = inst_37505;var state_37532__$1 = (function (){var statearr_37553 = state_37532;(statearr_37553[(7)] = inst_37497);
(statearr_37553[(8)] = inst_37496__$1);
return statearr_37553;
})();var statearr_37554_37576 = state_37532__$1;(statearr_37554_37576[(2)] = null);
(statearr_37554_37576[(1)] = (2));
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
});})(c__5819__auto___37562,out))
;return ((function (switch__5804__auto__,c__5819__auto___37562,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37558[(0)] = state_machine__5805__auto__);
(statearr_37558[(1)] = (1));
return statearr_37558;
});
var state_machine__5805__auto____1 = (function (state_37532){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37532);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37559){if((e37559 instanceof Object))
{var ex__5808__auto__ = e37559;var statearr_37560_37577 = state_37532;(statearr_37560_37577[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37578 = state_37532;
state_37532 = G__37578;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37532){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37562,out))
})();var state__5821__auto__ = (function (){var statearr_37561 = f__5820__auto__.call(null);(statearr_37561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37562);
return statearr_37561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37562,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___37721 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___37721,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___37721,out){
return (function (state_37691){var state_val_37692 = (state_37691[(1)]);if((state_val_37692 === (7)))
{var inst_37687 = (state_37691[(2)]);var state_37691__$1 = state_37691;var statearr_37693_37722 = state_37691__$1;(statearr_37693_37722[(2)] = inst_37687);
(statearr_37693_37722[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (1)))
{var inst_37650 = [];var inst_37651 = inst_37650;var inst_37652 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_37691__$1 = (function (){var statearr_37694 = state_37691;(statearr_37694[(7)] = inst_37651);
(statearr_37694[(8)] = inst_37652);
return statearr_37694;
})();var statearr_37695_37723 = state_37691__$1;(statearr_37695_37723[(2)] = null);
(statearr_37695_37723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (4)))
{var inst_37655 = (state_37691[(9)]);var inst_37655__$1 = (state_37691[(2)]);var inst_37656 = (inst_37655__$1 == null);var inst_37657 = cljs.core.not.call(null,inst_37656);var state_37691__$1 = (function (){var statearr_37696 = state_37691;(statearr_37696[(9)] = inst_37655__$1);
return statearr_37696;
})();if(inst_37657)
{var statearr_37697_37724 = state_37691__$1;(statearr_37697_37724[(1)] = (5));
} else
{var statearr_37698_37725 = state_37691__$1;(statearr_37698_37725[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (15)))
{var inst_37681 = (state_37691[(2)]);var state_37691__$1 = state_37691;var statearr_37699_37726 = state_37691__$1;(statearr_37699_37726[(2)] = inst_37681);
(statearr_37699_37726[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (13)))
{var state_37691__$1 = state_37691;var statearr_37700_37727 = state_37691__$1;(statearr_37700_37727[(2)] = null);
(statearr_37700_37727[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (6)))
{var inst_37651 = (state_37691[(7)]);var inst_37676 = inst_37651.length;var inst_37677 = (inst_37676 > (0));var state_37691__$1 = state_37691;if(cljs.core.truth_(inst_37677))
{var statearr_37701_37728 = state_37691__$1;(statearr_37701_37728[(1)] = (12));
} else
{var statearr_37702_37729 = state_37691__$1;(statearr_37702_37729[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (3)))
{var inst_37689 = (state_37691[(2)]);var state_37691__$1 = state_37691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37691__$1,inst_37689);
} else
{if((state_val_37692 === (12)))
{var inst_37651 = (state_37691[(7)]);var inst_37679 = cljs.core.vec.call(null,inst_37651);var state_37691__$1 = state_37691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37691__$1,(15),out,inst_37679);
} else
{if((state_val_37692 === (2)))
{var state_37691__$1 = state_37691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37691__$1,(4),ch);
} else
{if((state_val_37692 === (11)))
{var inst_37659 = (state_37691[(10)]);var inst_37655 = (state_37691[(9)]);var inst_37669 = (state_37691[(2)]);var inst_37670 = [];var inst_37671 = inst_37670.push(inst_37655);var inst_37651 = inst_37670;var inst_37652 = inst_37659;var state_37691__$1 = (function (){var statearr_37703 = state_37691;(statearr_37703[(11)] = inst_37671);
(statearr_37703[(7)] = inst_37651);
(statearr_37703[(12)] = inst_37669);
(statearr_37703[(8)] = inst_37652);
return statearr_37703;
})();var statearr_37704_37730 = state_37691__$1;(statearr_37704_37730[(2)] = null);
(statearr_37704_37730[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (9)))
{var inst_37651 = (state_37691[(7)]);var inst_37667 = cljs.core.vec.call(null,inst_37651);var state_37691__$1 = state_37691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37691__$1,(11),out,inst_37667);
} else
{if((state_val_37692 === (5)))
{var inst_37659 = (state_37691[(10)]);var inst_37655 = (state_37691[(9)]);var inst_37652 = (state_37691[(8)]);var inst_37659__$1 = f.call(null,inst_37655);var inst_37660 = cljs.core._EQ_.call(null,inst_37659__$1,inst_37652);var inst_37661 = cljs.core.keyword_identical_QMARK_.call(null,inst_37652,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_37662 = (inst_37660) || (inst_37661);var state_37691__$1 = (function (){var statearr_37705 = state_37691;(statearr_37705[(10)] = inst_37659__$1);
return statearr_37705;
})();if(cljs.core.truth_(inst_37662))
{var statearr_37706_37731 = state_37691__$1;(statearr_37706_37731[(1)] = (8));
} else
{var statearr_37707_37732 = state_37691__$1;(statearr_37707_37732[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (14)))
{var inst_37684 = (state_37691[(2)]);var inst_37685 = cljs.core.async.close_BANG_.call(null,out);var state_37691__$1 = (function (){var statearr_37709 = state_37691;(statearr_37709[(13)] = inst_37684);
return statearr_37709;
})();var statearr_37710_37733 = state_37691__$1;(statearr_37710_37733[(2)] = inst_37685);
(statearr_37710_37733[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (10)))
{var inst_37674 = (state_37691[(2)]);var state_37691__$1 = state_37691;var statearr_37711_37734 = state_37691__$1;(statearr_37711_37734[(2)] = inst_37674);
(statearr_37711_37734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_37692 === (8)))
{var inst_37659 = (state_37691[(10)]);var inst_37651 = (state_37691[(7)]);var inst_37655 = (state_37691[(9)]);var inst_37664 = inst_37651.push(inst_37655);var tmp37708 = inst_37651;var inst_37651__$1 = tmp37708;var inst_37652 = inst_37659;var state_37691__$1 = (function (){var statearr_37712 = state_37691;(statearr_37712[(14)] = inst_37664);
(statearr_37712[(7)] = inst_37651__$1);
(statearr_37712[(8)] = inst_37652);
return statearr_37712;
})();var statearr_37713_37735 = state_37691__$1;(statearr_37713_37735[(2)] = null);
(statearr_37713_37735[(1)] = (2));
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
});})(c__5819__auto___37721,out))
;return ((function (switch__5804__auto__,c__5819__auto___37721,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_37717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37717[(0)] = state_machine__5805__auto__);
(statearr_37717[(1)] = (1));
return statearr_37717;
});
var state_machine__5805__auto____1 = (function (state_37691){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_37691);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e37718){if((e37718 instanceof Object))
{var ex__5808__auto__ = e37718;var statearr_37719_37736 = state_37691;(statearr_37719_37736[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37691);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e37718;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__37737 = state_37691;
state_37691 = G__37737;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_37691){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_37691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___37721,out))
})();var state__5821__auto__ = (function (){var statearr_37720 = f__5820__auto__.call(null);(statearr_37720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___37721);
return statearr_37720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___37721,out))
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
