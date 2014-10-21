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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t86153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86153 = (function (f,fn_handler,meta86154){
this.f = f;
this.fn_handler = fn_handler;
this.meta86154 = meta86154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86153.cljs$lang$type = true;
cljs.core.async.t86153.cljs$lang$ctorStr = "cljs.core.async/t86153";
cljs.core.async.t86153.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t86153");
});
cljs.core.async.t86153.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t86153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t86153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86155){var self__ = this;
var _86155__$1 = this;return self__.meta86154;
});
cljs.core.async.t86153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86155,meta86154__$1){var self__ = this;
var _86155__$1 = this;return (new cljs.core.async.t86153(self__.f,self__.fn_handler,meta86154__$1));
});
cljs.core.async.__GT_t86153 = (function __GT_t86153(f__$1,fn_handler__$1,meta86154){return (new cljs.core.async.t86153(f__$1,fn_handler__$1,meta86154));
});
}
return (new cljs.core.async.t86153(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__86157 = buff;if(G__86157)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__86157.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__86157.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__86157);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__86157);
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
{var val_86158 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_86158);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_86158,ret){
return (function (){return fn1.call(null,val_86158);
});})(val_86158,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___86159 = n;var x_86160 = (0);while(true){
if((x_86160 < n__4506__auto___86159))
{(a[x_86160] = (0));
{
var G__86161 = (x_86160 + (1));
x_86160 = G__86161;
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
var G__86162 = (i + (1));
i = G__86162;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t86166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86166 = (function (flag,alt_flag,meta86167){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta86167 = meta86167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86166.cljs$lang$type = true;
cljs.core.async.t86166.cljs$lang$ctorStr = "cljs.core.async/t86166";
cljs.core.async.t86166.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t86166");
});})(flag))
;
cljs.core.async.t86166.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t86166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t86166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_86168){var self__ = this;
var _86168__$1 = this;return self__.meta86167;
});})(flag))
;
cljs.core.async.t86166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_86168,meta86167__$1){var self__ = this;
var _86168__$1 = this;return (new cljs.core.async.t86166(self__.flag,self__.alt_flag,meta86167__$1));
});})(flag))
;
cljs.core.async.__GT_t86166 = ((function (flag){
return (function __GT_t86166(flag__$1,alt_flag__$1,meta86167){return (new cljs.core.async.t86166(flag__$1,alt_flag__$1,meta86167));
});})(flag))
;
}
return (new cljs.core.async.t86166(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t86172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86172 = (function (cb,flag,alt_handler,meta86173){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta86173 = meta86173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86172.cljs$lang$type = true;
cljs.core.async.t86172.cljs$lang$ctorStr = "cljs.core.async/t86172";
cljs.core.async.t86172.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t86172");
});
cljs.core.async.t86172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t86172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t86172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86174){var self__ = this;
var _86174__$1 = this;return self__.meta86173;
});
cljs.core.async.t86172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86174,meta86173__$1){var self__ = this;
var _86174__$1 = this;return (new cljs.core.async.t86172(self__.cb,self__.flag,self__.alt_handler,meta86173__$1));
});
cljs.core.async.__GT_t86172 = (function __GT_t86172(cb__$1,flag__$1,alt_handler__$1,meta86173){return (new cljs.core.async.t86172(cb__$1,flag__$1,alt_handler__$1,meta86173));
});
}
return (new cljs.core.async.t86172(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__86175_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86175_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__86176_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86176_SHARP_,port], null));
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
var G__86177 = (i + (1));
i = G__86177;
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
var alts_BANG___delegate = function (ports,p__86178){var map__86180 = p__86178;var map__86180__$1 = ((cljs.core.seq_QMARK_.call(null,map__86180))?cljs.core.apply.call(null,cljs.core.hash_map,map__86180):map__86180);var opts = map__86180__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__86178 = null;if (arguments.length > 1) {
  p__86178 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__86178);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__86181){
var ports = cljs.core.first(arglist__86181);
var p__86178 = cljs.core.rest(arglist__86181);
return alts_BANG___delegate(ports,p__86178);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___86276 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___86276){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___86276){
return (function (state_86252){var state_val_86253 = (state_86252[(1)]);if((state_val_86253 === (7)))
{var inst_86248 = (state_86252[(2)]);var state_86252__$1 = state_86252;var statearr_86254_86277 = state_86252__$1;(statearr_86254_86277[(2)] = inst_86248);
(statearr_86254_86277[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (1)))
{var state_86252__$1 = state_86252;var statearr_86255_86278 = state_86252__$1;(statearr_86255_86278[(2)] = null);
(statearr_86255_86278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (4)))
{var inst_86231 = (state_86252[(7)]);var inst_86231__$1 = (state_86252[(2)]);var inst_86232 = (inst_86231__$1 == null);var state_86252__$1 = (function (){var statearr_86256 = state_86252;(statearr_86256[(7)] = inst_86231__$1);
return statearr_86256;
})();if(cljs.core.truth_(inst_86232))
{var statearr_86257_86279 = state_86252__$1;(statearr_86257_86279[(1)] = (5));
} else
{var statearr_86258_86280 = state_86252__$1;(statearr_86258_86280[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (13)))
{var state_86252__$1 = state_86252;var statearr_86259_86281 = state_86252__$1;(statearr_86259_86281[(2)] = null);
(statearr_86259_86281[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (6)))
{var inst_86231 = (state_86252[(7)]);var state_86252__$1 = state_86252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86252__$1,(11),to,inst_86231);
} else
{if((state_val_86253 === (3)))
{var inst_86250 = (state_86252[(2)]);var state_86252__$1 = state_86252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86252__$1,inst_86250);
} else
{if((state_val_86253 === (12)))
{var state_86252__$1 = state_86252;var statearr_86260_86282 = state_86252__$1;(statearr_86260_86282[(2)] = null);
(statearr_86260_86282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (2)))
{var state_86252__$1 = state_86252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86252__$1,(4),from);
} else
{if((state_val_86253 === (11)))
{var inst_86241 = (state_86252[(2)]);var state_86252__$1 = state_86252;if(cljs.core.truth_(inst_86241))
{var statearr_86261_86283 = state_86252__$1;(statearr_86261_86283[(1)] = (12));
} else
{var statearr_86262_86284 = state_86252__$1;(statearr_86262_86284[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (9)))
{var state_86252__$1 = state_86252;var statearr_86263_86285 = state_86252__$1;(statearr_86263_86285[(2)] = null);
(statearr_86263_86285[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (5)))
{var state_86252__$1 = state_86252;if(cljs.core.truth_(close_QMARK_))
{var statearr_86264_86286 = state_86252__$1;(statearr_86264_86286[(1)] = (8));
} else
{var statearr_86265_86287 = state_86252__$1;(statearr_86265_86287[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (14)))
{var inst_86246 = (state_86252[(2)]);var state_86252__$1 = state_86252;var statearr_86266_86288 = state_86252__$1;(statearr_86266_86288[(2)] = inst_86246);
(statearr_86266_86288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (10)))
{var inst_86238 = (state_86252[(2)]);var state_86252__$1 = state_86252;var statearr_86267_86289 = state_86252__$1;(statearr_86267_86289[(2)] = inst_86238);
(statearr_86267_86289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86253 === (8)))
{var inst_86235 = cljs.core.async.close_BANG_.call(null,to);var state_86252__$1 = state_86252;var statearr_86268_86290 = state_86252__$1;(statearr_86268_86290[(2)] = inst_86235);
(statearr_86268_86290[(1)] = (10));
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
});})(c__5819__auto___86276))
;return ((function (switch__5804__auto__,c__5819__auto___86276){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86272 = [null,null,null,null,null,null,null,null];(statearr_86272[(0)] = state_machine__5805__auto__);
(statearr_86272[(1)] = (1));
return statearr_86272;
});
var state_machine__5805__auto____1 = (function (state_86252){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86273){if((e86273 instanceof Object))
{var ex__5808__auto__ = e86273;var statearr_86274_86291 = state_86252;(statearr_86274_86291[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86273;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86292 = state_86252;
state_86252 = G__86292;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86252){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___86276))
})();var state__5821__auto__ = (function (){var statearr_86275 = f__5820__auto__.call(null);(statearr_86275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86276);
return statearr_86275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___86276))
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
return (function (p__86476){var vec__86477 = p__86476;var v = cljs.core.nth.call(null,vec__86477,(0),null);var p = cljs.core.nth.call(null,vec__86477,(1),null);var job = vec__86477;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___86659 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results){
return (function (state_86482){var state_val_86483 = (state_86482[(1)]);if((state_val_86483 === (2)))
{var inst_86479 = (state_86482[(2)]);var inst_86480 = cljs.core.async.close_BANG_.call(null,res);var state_86482__$1 = (function (){var statearr_86484 = state_86482;(statearr_86484[(7)] = inst_86479);
return statearr_86484;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86482__$1,inst_86480);
} else
{if((state_val_86483 === (1)))
{var state_86482__$1 = state_86482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86482__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86488 = [null,null,null,null,null,null,null,null];(statearr_86488[(0)] = state_machine__5805__auto__);
(statearr_86488[(1)] = (1));
return statearr_86488;
});
var state_machine__5805__auto____1 = (function (state_86482){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86489){if((e86489 instanceof Object))
{var ex__5808__auto__ = e86489;var statearr_86490_86660 = state_86482;(statearr_86490_86660[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86489;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86661 = state_86482;
state_86482 = G__86661;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86482){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_86491 = f__5820__auto__.call(null);(statearr_86491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86659);
return statearr_86491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___86659,res,vec__86477,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__86492){var vec__86493 = p__86492;var v = cljs.core.nth.call(null,vec__86493,(0),null);var p = cljs.core.nth.call(null,vec__86493,(1),null);var job = vec__86493;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___86662 = n;var __86663 = (0);while(true){
if((__86663 < n__4506__auto___86662))
{var G__86494_86664 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__86494_86664) {
case "async":
var c__5819__auto___86666 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__86663,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__86663,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function (state_86507){var state_val_86508 = (state_86507[(1)]);if((state_val_86508 === (7)))
{var inst_86503 = (state_86507[(2)]);var state_86507__$1 = state_86507;var statearr_86509_86667 = state_86507__$1;(statearr_86509_86667[(2)] = inst_86503);
(statearr_86509_86667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86508 === (6)))
{var state_86507__$1 = state_86507;var statearr_86510_86668 = state_86507__$1;(statearr_86510_86668[(2)] = null);
(statearr_86510_86668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86508 === (5)))
{var state_86507__$1 = state_86507;var statearr_86511_86669 = state_86507__$1;(statearr_86511_86669[(2)] = null);
(statearr_86511_86669[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86508 === (4)))
{var inst_86497 = (state_86507[(2)]);var inst_86498 = async.call(null,inst_86497);var state_86507__$1 = state_86507;if(cljs.core.truth_(inst_86498))
{var statearr_86512_86670 = state_86507__$1;(statearr_86512_86670[(1)] = (5));
} else
{var statearr_86513_86671 = state_86507__$1;(statearr_86513_86671[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86508 === (3)))
{var inst_86505 = (state_86507[(2)]);var state_86507__$1 = state_86507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86507__$1,inst_86505);
} else
{if((state_val_86508 === (2)))
{var state_86507__$1 = state_86507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86507__$1,(4),jobs);
} else
{if((state_val_86508 === (1)))
{var state_86507__$1 = state_86507;var statearr_86514_86672 = state_86507__$1;(statearr_86514_86672[(2)] = null);
(statearr_86514_86672[(1)] = (2));
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
});})(__86663,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
;return ((function (__86663,switch__5804__auto__,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86518 = [null,null,null,null,null,null,null];(statearr_86518[(0)] = state_machine__5805__auto__);
(statearr_86518[(1)] = (1));
return statearr_86518;
});
var state_machine__5805__auto____1 = (function (state_86507){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86519){if((e86519 instanceof Object))
{var ex__5808__auto__ = e86519;var statearr_86520_86673 = state_86507;(statearr_86520_86673[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86519;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86674 = state_86507;
state_86507 = G__86674;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86507){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__86663,switch__5804__auto__,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_86521 = f__5820__auto__.call(null);(statearr_86521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86666);
return statearr_86521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__86663,c__5819__auto___86666,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___86675 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__86663,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__86663,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function (state_86534){var state_val_86535 = (state_86534[(1)]);if((state_val_86535 === (7)))
{var inst_86530 = (state_86534[(2)]);var state_86534__$1 = state_86534;var statearr_86536_86676 = state_86534__$1;(statearr_86536_86676[(2)] = inst_86530);
(statearr_86536_86676[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86535 === (6)))
{var state_86534__$1 = state_86534;var statearr_86537_86677 = state_86534__$1;(statearr_86537_86677[(2)] = null);
(statearr_86537_86677[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86535 === (5)))
{var state_86534__$1 = state_86534;var statearr_86538_86678 = state_86534__$1;(statearr_86538_86678[(2)] = null);
(statearr_86538_86678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86535 === (4)))
{var inst_86524 = (state_86534[(2)]);var inst_86525 = process.call(null,inst_86524);var state_86534__$1 = state_86534;if(cljs.core.truth_(inst_86525))
{var statearr_86539_86679 = state_86534__$1;(statearr_86539_86679[(1)] = (5));
} else
{var statearr_86540_86680 = state_86534__$1;(statearr_86540_86680[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86535 === (3)))
{var inst_86532 = (state_86534[(2)]);var state_86534__$1 = state_86534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86534__$1,inst_86532);
} else
{if((state_val_86535 === (2)))
{var state_86534__$1 = state_86534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86534__$1,(4),jobs);
} else
{if((state_val_86535 === (1)))
{var state_86534__$1 = state_86534;var statearr_86541_86681 = state_86534__$1;(statearr_86541_86681[(2)] = null);
(statearr_86541_86681[(1)] = (2));
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
});})(__86663,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
;return ((function (__86663,switch__5804__auto__,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86545 = [null,null,null,null,null,null,null];(statearr_86545[(0)] = state_machine__5805__auto__);
(statearr_86545[(1)] = (1));
return statearr_86545;
});
var state_machine__5805__auto____1 = (function (state_86534){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86534);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86546){if((e86546 instanceof Object))
{var ex__5808__auto__ = e86546;var statearr_86547_86682 = state_86534;(statearr_86547_86682[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86683 = state_86534;
state_86534 = G__86683;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86534){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__86663,switch__5804__auto__,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_86548 = f__5820__auto__.call(null);(statearr_86548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86675);
return statearr_86548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__86663,c__5819__auto___86675,G__86494_86664,n__4506__auto___86662,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__86684 = (__86663 + (1));
__86663 = G__86684;
continue;
}
} else
{}
break;
}
var c__5819__auto___86685 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___86685,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___86685,jobs,results,process,async){
return (function (state_86570){var state_val_86571 = (state_86570[(1)]);if((state_val_86571 === (9)))
{var inst_86563 = (state_86570[(2)]);var state_86570__$1 = (function (){var statearr_86572 = state_86570;(statearr_86572[(7)] = inst_86563);
return statearr_86572;
})();var statearr_86573_86686 = state_86570__$1;(statearr_86573_86686[(2)] = null);
(statearr_86573_86686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86571 === (8)))
{var inst_86556 = (state_86570[(8)]);var inst_86561 = (state_86570[(2)]);var state_86570__$1 = (function (){var statearr_86574 = state_86570;(statearr_86574[(9)] = inst_86561);
return statearr_86574;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86570__$1,(9),results,inst_86556);
} else
{if((state_val_86571 === (7)))
{var inst_86566 = (state_86570[(2)]);var state_86570__$1 = state_86570;var statearr_86575_86687 = state_86570__$1;(statearr_86575_86687[(2)] = inst_86566);
(statearr_86575_86687[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86571 === (6)))
{var inst_86551 = (state_86570[(10)]);var inst_86556 = (state_86570[(8)]);var inst_86556__$1 = cljs.core.async.chan.call(null,(1));var inst_86557 = cljs.core.PersistentVector.EMPTY_NODE;var inst_86558 = [inst_86551,inst_86556__$1];var inst_86559 = (new cljs.core.PersistentVector(null,2,(5),inst_86557,inst_86558,null));var state_86570__$1 = (function (){var statearr_86576 = state_86570;(statearr_86576[(8)] = inst_86556__$1);
return statearr_86576;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86570__$1,(8),jobs,inst_86559);
} else
{if((state_val_86571 === (5)))
{var inst_86554 = cljs.core.async.close_BANG_.call(null,jobs);var state_86570__$1 = state_86570;var statearr_86577_86688 = state_86570__$1;(statearr_86577_86688[(2)] = inst_86554);
(statearr_86577_86688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86571 === (4)))
{var inst_86551 = (state_86570[(10)]);var inst_86551__$1 = (state_86570[(2)]);var inst_86552 = (inst_86551__$1 == null);var state_86570__$1 = (function (){var statearr_86578 = state_86570;(statearr_86578[(10)] = inst_86551__$1);
return statearr_86578;
})();if(cljs.core.truth_(inst_86552))
{var statearr_86579_86689 = state_86570__$1;(statearr_86579_86689[(1)] = (5));
} else
{var statearr_86580_86690 = state_86570__$1;(statearr_86580_86690[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86571 === (3)))
{var inst_86568 = (state_86570[(2)]);var state_86570__$1 = state_86570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86570__$1,inst_86568);
} else
{if((state_val_86571 === (2)))
{var state_86570__$1 = state_86570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86570__$1,(4),from);
} else
{if((state_val_86571 === (1)))
{var state_86570__$1 = state_86570;var statearr_86581_86691 = state_86570__$1;(statearr_86581_86691[(2)] = null);
(statearr_86581_86691[(1)] = (2));
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
});})(c__5819__auto___86685,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___86685,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86585 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_86585[(0)] = state_machine__5805__auto__);
(statearr_86585[(1)] = (1));
return statearr_86585;
});
var state_machine__5805__auto____1 = (function (state_86570){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86586){if((e86586 instanceof Object))
{var ex__5808__auto__ = e86586;var statearr_86587_86692 = state_86570;(statearr_86587_86692[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86586;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86693 = state_86570;
state_86570 = G__86693;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86570){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___86685,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_86588 = f__5820__auto__.call(null);(statearr_86588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86685);
return statearr_86588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___86685,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_86626){var state_val_86627 = (state_86626[(1)]);if((state_val_86627 === (7)))
{var inst_86622 = (state_86626[(2)]);var state_86626__$1 = state_86626;var statearr_86628_86694 = state_86626__$1;(statearr_86628_86694[(2)] = inst_86622);
(statearr_86628_86694[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (20)))
{var state_86626__$1 = state_86626;var statearr_86629_86695 = state_86626__$1;(statearr_86629_86695[(2)] = null);
(statearr_86629_86695[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (1)))
{var state_86626__$1 = state_86626;var statearr_86630_86696 = state_86626__$1;(statearr_86630_86696[(2)] = null);
(statearr_86630_86696[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (4)))
{var inst_86591 = (state_86626[(7)]);var inst_86591__$1 = (state_86626[(2)]);var inst_86592 = (inst_86591__$1 == null);var state_86626__$1 = (function (){var statearr_86631 = state_86626;(statearr_86631[(7)] = inst_86591__$1);
return statearr_86631;
})();if(cljs.core.truth_(inst_86592))
{var statearr_86632_86697 = state_86626__$1;(statearr_86632_86697[(1)] = (5));
} else
{var statearr_86633_86698 = state_86626__$1;(statearr_86633_86698[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (15)))
{var inst_86604 = (state_86626[(8)]);var state_86626__$1 = state_86626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86626__$1,(18),to,inst_86604);
} else
{if((state_val_86627 === (21)))
{var inst_86617 = (state_86626[(2)]);var state_86626__$1 = state_86626;var statearr_86634_86699 = state_86626__$1;(statearr_86634_86699[(2)] = inst_86617);
(statearr_86634_86699[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (13)))
{var inst_86619 = (state_86626[(2)]);var state_86626__$1 = (function (){var statearr_86635 = state_86626;(statearr_86635[(9)] = inst_86619);
return statearr_86635;
})();var statearr_86636_86700 = state_86626__$1;(statearr_86636_86700[(2)] = null);
(statearr_86636_86700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (6)))
{var inst_86591 = (state_86626[(7)]);var state_86626__$1 = state_86626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86626__$1,(11),inst_86591);
} else
{if((state_val_86627 === (17)))
{var inst_86612 = (state_86626[(2)]);var state_86626__$1 = state_86626;if(cljs.core.truth_(inst_86612))
{var statearr_86637_86701 = state_86626__$1;(statearr_86637_86701[(1)] = (19));
} else
{var statearr_86638_86702 = state_86626__$1;(statearr_86638_86702[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (3)))
{var inst_86624 = (state_86626[(2)]);var state_86626__$1 = state_86626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86626__$1,inst_86624);
} else
{if((state_val_86627 === (12)))
{var inst_86601 = (state_86626[(10)]);var state_86626__$1 = state_86626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86626__$1,(14),inst_86601);
} else
{if((state_val_86627 === (2)))
{var state_86626__$1 = state_86626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86626__$1,(4),results);
} else
{if((state_val_86627 === (19)))
{var state_86626__$1 = state_86626;var statearr_86639_86703 = state_86626__$1;(statearr_86639_86703[(2)] = null);
(statearr_86639_86703[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (11)))
{var inst_86601 = (state_86626[(2)]);var state_86626__$1 = (function (){var statearr_86640 = state_86626;(statearr_86640[(10)] = inst_86601);
return statearr_86640;
})();var statearr_86641_86704 = state_86626__$1;(statearr_86641_86704[(2)] = null);
(statearr_86641_86704[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (9)))
{var state_86626__$1 = state_86626;var statearr_86642_86705 = state_86626__$1;(statearr_86642_86705[(2)] = null);
(statearr_86642_86705[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (5)))
{var state_86626__$1 = state_86626;if(cljs.core.truth_(close_QMARK_))
{var statearr_86643_86706 = state_86626__$1;(statearr_86643_86706[(1)] = (8));
} else
{var statearr_86644_86707 = state_86626__$1;(statearr_86644_86707[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (14)))
{var inst_86604 = (state_86626[(8)]);var inst_86606 = (state_86626[(11)]);var inst_86604__$1 = (state_86626[(2)]);var inst_86605 = (inst_86604__$1 == null);var inst_86606__$1 = cljs.core.not.call(null,inst_86605);var state_86626__$1 = (function (){var statearr_86645 = state_86626;(statearr_86645[(8)] = inst_86604__$1);
(statearr_86645[(11)] = inst_86606__$1);
return statearr_86645;
})();if(inst_86606__$1)
{var statearr_86646_86708 = state_86626__$1;(statearr_86646_86708[(1)] = (15));
} else
{var statearr_86647_86709 = state_86626__$1;(statearr_86647_86709[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (16)))
{var inst_86606 = (state_86626[(11)]);var state_86626__$1 = state_86626;var statearr_86648_86710 = state_86626__$1;(statearr_86648_86710[(2)] = inst_86606);
(statearr_86648_86710[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (10)))
{var inst_86598 = (state_86626[(2)]);var state_86626__$1 = state_86626;var statearr_86649_86711 = state_86626__$1;(statearr_86649_86711[(2)] = inst_86598);
(statearr_86649_86711[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (18)))
{var inst_86609 = (state_86626[(2)]);var state_86626__$1 = state_86626;var statearr_86650_86712 = state_86626__$1;(statearr_86650_86712[(2)] = inst_86609);
(statearr_86650_86712[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86627 === (8)))
{var inst_86595 = cljs.core.async.close_BANG_.call(null,to);var state_86626__$1 = state_86626;var statearr_86651_86713 = state_86626__$1;(statearr_86651_86713[(2)] = inst_86595);
(statearr_86651_86713[(1)] = (10));
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
var state_machine__5805__auto____0 = (function (){var statearr_86655 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86655[(0)] = state_machine__5805__auto__);
(statearr_86655[(1)] = (1));
return statearr_86655;
});
var state_machine__5805__auto____1 = (function (state_86626){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86626);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86656){if((e86656 instanceof Object))
{var ex__5808__auto__ = e86656;var statearr_86657_86714 = state_86626;(statearr_86657_86714[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86626);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86715 = state_86626;
state_86626 = G__86715;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86626){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_86658 = f__5820__auto__.call(null);(statearr_86658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_86658;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___86816 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___86816,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___86816,tc,fc){
return (function (state_86791){var state_val_86792 = (state_86791[(1)]);if((state_val_86792 === (7)))
{var inst_86787 = (state_86791[(2)]);var state_86791__$1 = state_86791;var statearr_86793_86817 = state_86791__$1;(statearr_86793_86817[(2)] = inst_86787);
(statearr_86793_86817[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (1)))
{var state_86791__$1 = state_86791;var statearr_86794_86818 = state_86791__$1;(statearr_86794_86818[(2)] = null);
(statearr_86794_86818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (4)))
{var inst_86768 = (state_86791[(7)]);var inst_86768__$1 = (state_86791[(2)]);var inst_86769 = (inst_86768__$1 == null);var state_86791__$1 = (function (){var statearr_86795 = state_86791;(statearr_86795[(7)] = inst_86768__$1);
return statearr_86795;
})();if(cljs.core.truth_(inst_86769))
{var statearr_86796_86819 = state_86791__$1;(statearr_86796_86819[(1)] = (5));
} else
{var statearr_86797_86820 = state_86791__$1;(statearr_86797_86820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (13)))
{var state_86791__$1 = state_86791;var statearr_86798_86821 = state_86791__$1;(statearr_86798_86821[(2)] = null);
(statearr_86798_86821[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (6)))
{var inst_86768 = (state_86791[(7)]);var inst_86774 = p.call(null,inst_86768);var state_86791__$1 = state_86791;if(cljs.core.truth_(inst_86774))
{var statearr_86799_86822 = state_86791__$1;(statearr_86799_86822[(1)] = (9));
} else
{var statearr_86800_86823 = state_86791__$1;(statearr_86800_86823[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (3)))
{var inst_86789 = (state_86791[(2)]);var state_86791__$1 = state_86791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86791__$1,inst_86789);
} else
{if((state_val_86792 === (12)))
{var state_86791__$1 = state_86791;var statearr_86801_86824 = state_86791__$1;(statearr_86801_86824[(2)] = null);
(statearr_86801_86824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (2)))
{var state_86791__$1 = state_86791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86791__$1,(4),ch);
} else
{if((state_val_86792 === (11)))
{var inst_86768 = (state_86791[(7)]);var inst_86778 = (state_86791[(2)]);var state_86791__$1 = state_86791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86791__$1,(8),inst_86778,inst_86768);
} else
{if((state_val_86792 === (9)))
{var state_86791__$1 = state_86791;var statearr_86802_86825 = state_86791__$1;(statearr_86802_86825[(2)] = tc);
(statearr_86802_86825[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (5)))
{var inst_86771 = cljs.core.async.close_BANG_.call(null,tc);var inst_86772 = cljs.core.async.close_BANG_.call(null,fc);var state_86791__$1 = (function (){var statearr_86803 = state_86791;(statearr_86803[(8)] = inst_86771);
return statearr_86803;
})();var statearr_86804_86826 = state_86791__$1;(statearr_86804_86826[(2)] = inst_86772);
(statearr_86804_86826[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (14)))
{var inst_86785 = (state_86791[(2)]);var state_86791__$1 = state_86791;var statearr_86805_86827 = state_86791__$1;(statearr_86805_86827[(2)] = inst_86785);
(statearr_86805_86827[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (10)))
{var state_86791__$1 = state_86791;var statearr_86806_86828 = state_86791__$1;(statearr_86806_86828[(2)] = fc);
(statearr_86806_86828[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86792 === (8)))
{var inst_86780 = (state_86791[(2)]);var state_86791__$1 = state_86791;if(cljs.core.truth_(inst_86780))
{var statearr_86807_86829 = state_86791__$1;(statearr_86807_86829[(1)] = (12));
} else
{var statearr_86808_86830 = state_86791__$1;(statearr_86808_86830[(1)] = (13));
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
});})(c__5819__auto___86816,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___86816,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86812 = [null,null,null,null,null,null,null,null,null];(statearr_86812[(0)] = state_machine__5805__auto__);
(statearr_86812[(1)] = (1));
return statearr_86812;
});
var state_machine__5805__auto____1 = (function (state_86791){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86813){if((e86813 instanceof Object))
{var ex__5808__auto__ = e86813;var statearr_86814_86831 = state_86791;(statearr_86814_86831[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86832 = state_86791;
state_86791 = G__86832;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86791){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___86816,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_86815 = f__5820__auto__.call(null);(statearr_86815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___86816);
return statearr_86815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___86816,tc,fc))
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
return (function (state_86879){var state_val_86880 = (state_86879[(1)]);if((state_val_86880 === (7)))
{var inst_86875 = (state_86879[(2)]);var state_86879__$1 = state_86879;var statearr_86881_86897 = state_86879__$1;(statearr_86881_86897[(2)] = inst_86875);
(statearr_86881_86897[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86880 === (6)))
{var inst_86868 = (state_86879[(7)]);var inst_86865 = (state_86879[(8)]);var inst_86872 = f.call(null,inst_86865,inst_86868);var inst_86865__$1 = inst_86872;var state_86879__$1 = (function (){var statearr_86882 = state_86879;(statearr_86882[(8)] = inst_86865__$1);
return statearr_86882;
})();var statearr_86883_86898 = state_86879__$1;(statearr_86883_86898[(2)] = null);
(statearr_86883_86898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86880 === (5)))
{var inst_86865 = (state_86879[(8)]);var state_86879__$1 = state_86879;var statearr_86884_86899 = state_86879__$1;(statearr_86884_86899[(2)] = inst_86865);
(statearr_86884_86899[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86880 === (4)))
{var inst_86868 = (state_86879[(7)]);var inst_86868__$1 = (state_86879[(2)]);var inst_86869 = (inst_86868__$1 == null);var state_86879__$1 = (function (){var statearr_86885 = state_86879;(statearr_86885[(7)] = inst_86868__$1);
return statearr_86885;
})();if(cljs.core.truth_(inst_86869))
{var statearr_86886_86900 = state_86879__$1;(statearr_86886_86900[(1)] = (5));
} else
{var statearr_86887_86901 = state_86879__$1;(statearr_86887_86901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86880 === (3)))
{var inst_86877 = (state_86879[(2)]);var state_86879__$1 = state_86879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86879__$1,inst_86877);
} else
{if((state_val_86880 === (2)))
{var state_86879__$1 = state_86879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86879__$1,(4),ch);
} else
{if((state_val_86880 === (1)))
{var inst_86865 = init;var state_86879__$1 = (function (){var statearr_86888 = state_86879;(statearr_86888[(8)] = inst_86865);
return statearr_86888;
})();var statearr_86889_86902 = state_86879__$1;(statearr_86889_86902[(2)] = null);
(statearr_86889_86902[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_86893 = [null,null,null,null,null,null,null,null,null];(statearr_86893[(0)] = state_machine__5805__auto__);
(statearr_86893[(1)] = (1));
return statearr_86893;
});
var state_machine__5805__auto____1 = (function (state_86879){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86894){if((e86894 instanceof Object))
{var ex__5808__auto__ = e86894;var statearr_86895_86903 = state_86879;(statearr_86895_86903[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86904 = state_86879;
state_86879 = G__86904;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86879){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_86896 = f__5820__auto__.call(null);(statearr_86896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_86896;
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
return (function (state_86978){var state_val_86979 = (state_86978[(1)]);if((state_val_86979 === (7)))
{var inst_86960 = (state_86978[(2)]);var state_86978__$1 = state_86978;var statearr_86980_87003 = state_86978__$1;(statearr_86980_87003[(2)] = inst_86960);
(statearr_86980_87003[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (1)))
{var inst_86954 = cljs.core.seq.call(null,coll);var inst_86955 = inst_86954;var state_86978__$1 = (function (){var statearr_86981 = state_86978;(statearr_86981[(7)] = inst_86955);
return statearr_86981;
})();var statearr_86982_87004 = state_86978__$1;(statearr_86982_87004[(2)] = null);
(statearr_86982_87004[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (4)))
{var inst_86955 = (state_86978[(7)]);var inst_86958 = cljs.core.first.call(null,inst_86955);var state_86978__$1 = state_86978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86978__$1,(7),ch,inst_86958);
} else
{if((state_val_86979 === (13)))
{var inst_86972 = (state_86978[(2)]);var state_86978__$1 = state_86978;var statearr_86983_87005 = state_86978__$1;(statearr_86983_87005[(2)] = inst_86972);
(statearr_86983_87005[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (6)))
{var inst_86963 = (state_86978[(2)]);var state_86978__$1 = state_86978;if(cljs.core.truth_(inst_86963))
{var statearr_86984_87006 = state_86978__$1;(statearr_86984_87006[(1)] = (8));
} else
{var statearr_86985_87007 = state_86978__$1;(statearr_86985_87007[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (3)))
{var inst_86976 = (state_86978[(2)]);var state_86978__$1 = state_86978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86978__$1,inst_86976);
} else
{if((state_val_86979 === (12)))
{var state_86978__$1 = state_86978;var statearr_86986_87008 = state_86978__$1;(statearr_86986_87008[(2)] = null);
(statearr_86986_87008[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (2)))
{var inst_86955 = (state_86978[(7)]);var state_86978__$1 = state_86978;if(cljs.core.truth_(inst_86955))
{var statearr_86987_87009 = state_86978__$1;(statearr_86987_87009[(1)] = (4));
} else
{var statearr_86988_87010 = state_86978__$1;(statearr_86988_87010[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (11)))
{var inst_86969 = cljs.core.async.close_BANG_.call(null,ch);var state_86978__$1 = state_86978;var statearr_86989_87011 = state_86978__$1;(statearr_86989_87011[(2)] = inst_86969);
(statearr_86989_87011[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (9)))
{var state_86978__$1 = state_86978;if(cljs.core.truth_(close_QMARK_))
{var statearr_86990_87012 = state_86978__$1;(statearr_86990_87012[(1)] = (11));
} else
{var statearr_86991_87013 = state_86978__$1;(statearr_86991_87013[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (5)))
{var inst_86955 = (state_86978[(7)]);var state_86978__$1 = state_86978;var statearr_86992_87014 = state_86978__$1;(statearr_86992_87014[(2)] = inst_86955);
(statearr_86992_87014[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (10)))
{var inst_86974 = (state_86978[(2)]);var state_86978__$1 = state_86978;var statearr_86993_87015 = state_86978__$1;(statearr_86993_87015[(2)] = inst_86974);
(statearr_86993_87015[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86979 === (8)))
{var inst_86955 = (state_86978[(7)]);var inst_86965 = cljs.core.next.call(null,inst_86955);var inst_86955__$1 = inst_86965;var state_86978__$1 = (function (){var statearr_86994 = state_86978;(statearr_86994[(7)] = inst_86955__$1);
return statearr_86994;
})();var statearr_86995_87016 = state_86978__$1;(statearr_86995_87016[(2)] = null);
(statearr_86995_87016[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_86999 = [null,null,null,null,null,null,null,null];(statearr_86999[(0)] = state_machine__5805__auto__);
(statearr_86999[(1)] = (1));
return statearr_86999;
});
var state_machine__5805__auto____1 = (function (state_86978){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86978);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e87000){if((e87000 instanceof Object))
{var ex__5808__auto__ = e87000;var statearr_87001_87017 = state_86978;(statearr_87001_87017[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e87000;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87018 = state_86978;
state_86978 = G__87018;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86978){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_87002 = f__5820__auto__.call(null);(statearr_87002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_87002;
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
cljs.core.async.Mux = (function (){var obj87020 = {};return obj87020;
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
cljs.core.async.Mult = (function (){var obj87022 = {};return obj87022;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t87244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87244 = (function (cs,ch,mult,meta87245){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta87245 = meta87245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87244.cljs$lang$type = true;
cljs.core.async.t87244.cljs$lang$ctorStr = "cljs.core.async/t87244";
cljs.core.async.t87244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t87244");
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t87244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_87246){var self__ = this;
var _87246__$1 = this;return self__.meta87245;
});})(cs))
;
cljs.core.async.t87244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_87246,meta87245__$1){var self__ = this;
var _87246__$1 = this;return (new cljs.core.async.t87244(self__.cs,self__.ch,self__.mult,meta87245__$1));
});})(cs))
;
cljs.core.async.__GT_t87244 = ((function (cs){
return (function __GT_t87244(cs__$1,ch__$1,mult__$1,meta87245){return (new cljs.core.async.t87244(cs__$1,ch__$1,mult__$1,meta87245));
});})(cs))
;
}
return (new cljs.core.async.t87244(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___87465 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___87465,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___87465,cs,m,dchan,dctr,done){
return (function (state_87377){var state_val_87378 = (state_87377[(1)]);if((state_val_87378 === (7)))
{var inst_87373 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87379_87466 = state_87377__$1;(statearr_87379_87466[(2)] = inst_87373);
(statearr_87379_87466[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (20)))
{var inst_87278 = (state_87377[(7)]);var inst_87288 = cljs.core.first.call(null,inst_87278);var inst_87289 = cljs.core.nth.call(null,inst_87288,(0),null);var inst_87290 = cljs.core.nth.call(null,inst_87288,(1),null);var state_87377__$1 = (function (){var statearr_87380 = state_87377;(statearr_87380[(8)] = inst_87289);
return statearr_87380;
})();if(cljs.core.truth_(inst_87290))
{var statearr_87381_87467 = state_87377__$1;(statearr_87381_87467[(1)] = (22));
} else
{var statearr_87382_87468 = state_87377__$1;(statearr_87382_87468[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (27)))
{var inst_87320 = (state_87377[(9)]);var inst_87318 = (state_87377[(10)]);var inst_87325 = (state_87377[(11)]);var inst_87249 = (state_87377[(12)]);var inst_87325__$1 = cljs.core._nth.call(null,inst_87318,inst_87320);var inst_87326 = cljs.core.async.put_BANG_.call(null,inst_87325__$1,inst_87249,done);var state_87377__$1 = (function (){var statearr_87383 = state_87377;(statearr_87383[(11)] = inst_87325__$1);
return statearr_87383;
})();if(cljs.core.truth_(inst_87326))
{var statearr_87384_87469 = state_87377__$1;(statearr_87384_87469[(1)] = (30));
} else
{var statearr_87385_87470 = state_87377__$1;(statearr_87385_87470[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (1)))
{var state_87377__$1 = state_87377;var statearr_87386_87471 = state_87377__$1;(statearr_87386_87471[(2)] = null);
(statearr_87386_87471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (24)))
{var inst_87278 = (state_87377[(7)]);var inst_87295 = (state_87377[(2)]);var inst_87296 = cljs.core.next.call(null,inst_87278);var inst_87258 = inst_87296;var inst_87259 = null;var inst_87260 = (0);var inst_87261 = (0);var state_87377__$1 = (function (){var statearr_87387 = state_87377;(statearr_87387[(13)] = inst_87259);
(statearr_87387[(14)] = inst_87260);
(statearr_87387[(15)] = inst_87295);
(statearr_87387[(16)] = inst_87258);
(statearr_87387[(17)] = inst_87261);
return statearr_87387;
})();var statearr_87388_87472 = state_87377__$1;(statearr_87388_87472[(2)] = null);
(statearr_87388_87472[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (39)))
{var state_87377__$1 = state_87377;var statearr_87392_87473 = state_87377__$1;(statearr_87392_87473[(2)] = null);
(statearr_87392_87473[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (4)))
{var inst_87249 = (state_87377[(12)]);var inst_87249__$1 = (state_87377[(2)]);var inst_87250 = (inst_87249__$1 == null);var state_87377__$1 = (function (){var statearr_87393 = state_87377;(statearr_87393[(12)] = inst_87249__$1);
return statearr_87393;
})();if(cljs.core.truth_(inst_87250))
{var statearr_87394_87474 = state_87377__$1;(statearr_87394_87474[(1)] = (5));
} else
{var statearr_87395_87475 = state_87377__$1;(statearr_87395_87475[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (15)))
{var inst_87259 = (state_87377[(13)]);var inst_87260 = (state_87377[(14)]);var inst_87258 = (state_87377[(16)]);var inst_87261 = (state_87377[(17)]);var inst_87274 = (state_87377[(2)]);var inst_87275 = (inst_87261 + (1));var tmp87389 = inst_87259;var tmp87390 = inst_87260;var tmp87391 = inst_87258;var inst_87258__$1 = tmp87391;var inst_87259__$1 = tmp87389;var inst_87260__$1 = tmp87390;var inst_87261__$1 = inst_87275;var state_87377__$1 = (function (){var statearr_87396 = state_87377;(statearr_87396[(13)] = inst_87259__$1);
(statearr_87396[(18)] = inst_87274);
(statearr_87396[(14)] = inst_87260__$1);
(statearr_87396[(16)] = inst_87258__$1);
(statearr_87396[(17)] = inst_87261__$1);
return statearr_87396;
})();var statearr_87397_87476 = state_87377__$1;(statearr_87397_87476[(2)] = null);
(statearr_87397_87476[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (21)))
{var inst_87299 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87401_87477 = state_87377__$1;(statearr_87401_87477[(2)] = inst_87299);
(statearr_87401_87477[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (31)))
{var inst_87325 = (state_87377[(11)]);var inst_87329 = done.call(null,null);var inst_87330 = cljs.core.async.untap_STAR_.call(null,m,inst_87325);var state_87377__$1 = (function (){var statearr_87402 = state_87377;(statearr_87402[(19)] = inst_87329);
return statearr_87402;
})();var statearr_87403_87478 = state_87377__$1;(statearr_87403_87478[(2)] = inst_87330);
(statearr_87403_87478[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (32)))
{var inst_87320 = (state_87377[(9)]);var inst_87318 = (state_87377[(10)]);var inst_87319 = (state_87377[(20)]);var inst_87317 = (state_87377[(21)]);var inst_87332 = (state_87377[(2)]);var inst_87333 = (inst_87320 + (1));var tmp87398 = inst_87318;var tmp87399 = inst_87319;var tmp87400 = inst_87317;var inst_87317__$1 = tmp87400;var inst_87318__$1 = tmp87398;var inst_87319__$1 = tmp87399;var inst_87320__$1 = inst_87333;var state_87377__$1 = (function (){var statearr_87404 = state_87377;(statearr_87404[(22)] = inst_87332);
(statearr_87404[(9)] = inst_87320__$1);
(statearr_87404[(10)] = inst_87318__$1);
(statearr_87404[(20)] = inst_87319__$1);
(statearr_87404[(21)] = inst_87317__$1);
return statearr_87404;
})();var statearr_87405_87479 = state_87377__$1;(statearr_87405_87479[(2)] = null);
(statearr_87405_87479[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (40)))
{var inst_87345 = (state_87377[(23)]);var inst_87349 = done.call(null,null);var inst_87350 = cljs.core.async.untap_STAR_.call(null,m,inst_87345);var state_87377__$1 = (function (){var statearr_87406 = state_87377;(statearr_87406[(24)] = inst_87349);
return statearr_87406;
})();var statearr_87407_87480 = state_87377__$1;(statearr_87407_87480[(2)] = inst_87350);
(statearr_87407_87480[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (33)))
{var inst_87336 = (state_87377[(25)]);var inst_87338 = cljs.core.chunked_seq_QMARK_.call(null,inst_87336);var state_87377__$1 = state_87377;if(inst_87338)
{var statearr_87408_87481 = state_87377__$1;(statearr_87408_87481[(1)] = (36));
} else
{var statearr_87409_87482 = state_87377__$1;(statearr_87409_87482[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (13)))
{var inst_87268 = (state_87377[(26)]);var inst_87271 = cljs.core.async.close_BANG_.call(null,inst_87268);var state_87377__$1 = state_87377;var statearr_87410_87483 = state_87377__$1;(statearr_87410_87483[(2)] = inst_87271);
(statearr_87410_87483[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (22)))
{var inst_87289 = (state_87377[(8)]);var inst_87292 = cljs.core.async.close_BANG_.call(null,inst_87289);var state_87377__$1 = state_87377;var statearr_87411_87484 = state_87377__$1;(statearr_87411_87484[(2)] = inst_87292);
(statearr_87411_87484[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (36)))
{var inst_87336 = (state_87377[(25)]);var inst_87340 = cljs.core.chunk_first.call(null,inst_87336);var inst_87341 = cljs.core.chunk_rest.call(null,inst_87336);var inst_87342 = cljs.core.count.call(null,inst_87340);var inst_87317 = inst_87341;var inst_87318 = inst_87340;var inst_87319 = inst_87342;var inst_87320 = (0);var state_87377__$1 = (function (){var statearr_87412 = state_87377;(statearr_87412[(9)] = inst_87320);
(statearr_87412[(10)] = inst_87318);
(statearr_87412[(20)] = inst_87319);
(statearr_87412[(21)] = inst_87317);
return statearr_87412;
})();var statearr_87413_87485 = state_87377__$1;(statearr_87413_87485[(2)] = null);
(statearr_87413_87485[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (41)))
{var inst_87336 = (state_87377[(25)]);var inst_87352 = (state_87377[(2)]);var inst_87353 = cljs.core.next.call(null,inst_87336);var inst_87317 = inst_87353;var inst_87318 = null;var inst_87319 = (0);var inst_87320 = (0);var state_87377__$1 = (function (){var statearr_87414 = state_87377;(statearr_87414[(27)] = inst_87352);
(statearr_87414[(9)] = inst_87320);
(statearr_87414[(10)] = inst_87318);
(statearr_87414[(20)] = inst_87319);
(statearr_87414[(21)] = inst_87317);
return statearr_87414;
})();var statearr_87415_87486 = state_87377__$1;(statearr_87415_87486[(2)] = null);
(statearr_87415_87486[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (43)))
{var state_87377__$1 = state_87377;var statearr_87416_87487 = state_87377__$1;(statearr_87416_87487[(2)] = null);
(statearr_87416_87487[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (29)))
{var inst_87361 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87417_87488 = state_87377__$1;(statearr_87417_87488[(2)] = inst_87361);
(statearr_87417_87488[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (44)))
{var inst_87370 = (state_87377[(2)]);var state_87377__$1 = (function (){var statearr_87418 = state_87377;(statearr_87418[(28)] = inst_87370);
return statearr_87418;
})();var statearr_87419_87489 = state_87377__$1;(statearr_87419_87489[(2)] = null);
(statearr_87419_87489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (6)))
{var inst_87309 = (state_87377[(29)]);var inst_87308 = cljs.core.deref.call(null,cs);var inst_87309__$1 = cljs.core.keys.call(null,inst_87308);var inst_87310 = cljs.core.count.call(null,inst_87309__$1);var inst_87311 = cljs.core.reset_BANG_.call(null,dctr,inst_87310);var inst_87316 = cljs.core.seq.call(null,inst_87309__$1);var inst_87317 = inst_87316;var inst_87318 = null;var inst_87319 = (0);var inst_87320 = (0);var state_87377__$1 = (function (){var statearr_87420 = state_87377;(statearr_87420[(9)] = inst_87320);
(statearr_87420[(10)] = inst_87318);
(statearr_87420[(30)] = inst_87311);
(statearr_87420[(20)] = inst_87319);
(statearr_87420[(21)] = inst_87317);
(statearr_87420[(29)] = inst_87309__$1);
return statearr_87420;
})();var statearr_87421_87490 = state_87377__$1;(statearr_87421_87490[(2)] = null);
(statearr_87421_87490[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (28)))
{var inst_87336 = (state_87377[(25)]);var inst_87317 = (state_87377[(21)]);var inst_87336__$1 = cljs.core.seq.call(null,inst_87317);var state_87377__$1 = (function (){var statearr_87422 = state_87377;(statearr_87422[(25)] = inst_87336__$1);
return statearr_87422;
})();if(inst_87336__$1)
{var statearr_87423_87491 = state_87377__$1;(statearr_87423_87491[(1)] = (33));
} else
{var statearr_87424_87492 = state_87377__$1;(statearr_87424_87492[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (25)))
{var inst_87320 = (state_87377[(9)]);var inst_87319 = (state_87377[(20)]);var inst_87322 = (inst_87320 < inst_87319);var inst_87323 = inst_87322;var state_87377__$1 = state_87377;if(cljs.core.truth_(inst_87323))
{var statearr_87425_87493 = state_87377__$1;(statearr_87425_87493[(1)] = (27));
} else
{var statearr_87426_87494 = state_87377__$1;(statearr_87426_87494[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (34)))
{var state_87377__$1 = state_87377;var statearr_87427_87495 = state_87377__$1;(statearr_87427_87495[(2)] = null);
(statearr_87427_87495[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (17)))
{var state_87377__$1 = state_87377;var statearr_87428_87496 = state_87377__$1;(statearr_87428_87496[(2)] = null);
(statearr_87428_87496[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (3)))
{var inst_87375 = (state_87377[(2)]);var state_87377__$1 = state_87377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87377__$1,inst_87375);
} else
{if((state_val_87378 === (12)))
{var inst_87304 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87429_87497 = state_87377__$1;(statearr_87429_87497[(2)] = inst_87304);
(statearr_87429_87497[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (2)))
{var state_87377__$1 = state_87377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87377__$1,(4),ch);
} else
{if((state_val_87378 === (23)))
{var state_87377__$1 = state_87377;var statearr_87430_87498 = state_87377__$1;(statearr_87430_87498[(2)] = null);
(statearr_87430_87498[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (35)))
{var inst_87359 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87431_87499 = state_87377__$1;(statearr_87431_87499[(2)] = inst_87359);
(statearr_87431_87499[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (19)))
{var inst_87278 = (state_87377[(7)]);var inst_87282 = cljs.core.chunk_first.call(null,inst_87278);var inst_87283 = cljs.core.chunk_rest.call(null,inst_87278);var inst_87284 = cljs.core.count.call(null,inst_87282);var inst_87258 = inst_87283;var inst_87259 = inst_87282;var inst_87260 = inst_87284;var inst_87261 = (0);var state_87377__$1 = (function (){var statearr_87432 = state_87377;(statearr_87432[(13)] = inst_87259);
(statearr_87432[(14)] = inst_87260);
(statearr_87432[(16)] = inst_87258);
(statearr_87432[(17)] = inst_87261);
return statearr_87432;
})();var statearr_87433_87500 = state_87377__$1;(statearr_87433_87500[(2)] = null);
(statearr_87433_87500[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (11)))
{var inst_87278 = (state_87377[(7)]);var inst_87258 = (state_87377[(16)]);var inst_87278__$1 = cljs.core.seq.call(null,inst_87258);var state_87377__$1 = (function (){var statearr_87434 = state_87377;(statearr_87434[(7)] = inst_87278__$1);
return statearr_87434;
})();if(inst_87278__$1)
{var statearr_87435_87501 = state_87377__$1;(statearr_87435_87501[(1)] = (16));
} else
{var statearr_87436_87502 = state_87377__$1;(statearr_87436_87502[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (9)))
{var inst_87306 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87437_87503 = state_87377__$1;(statearr_87437_87503[(2)] = inst_87306);
(statearr_87437_87503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (5)))
{var inst_87256 = cljs.core.deref.call(null,cs);var inst_87257 = cljs.core.seq.call(null,inst_87256);var inst_87258 = inst_87257;var inst_87259 = null;var inst_87260 = (0);var inst_87261 = (0);var state_87377__$1 = (function (){var statearr_87438 = state_87377;(statearr_87438[(13)] = inst_87259);
(statearr_87438[(14)] = inst_87260);
(statearr_87438[(16)] = inst_87258);
(statearr_87438[(17)] = inst_87261);
return statearr_87438;
})();var statearr_87439_87504 = state_87377__$1;(statearr_87439_87504[(2)] = null);
(statearr_87439_87504[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (14)))
{var state_87377__$1 = state_87377;var statearr_87440_87505 = state_87377__$1;(statearr_87440_87505[(2)] = null);
(statearr_87440_87505[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (45)))
{var inst_87367 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87441_87506 = state_87377__$1;(statearr_87441_87506[(2)] = inst_87367);
(statearr_87441_87506[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (26)))
{var inst_87309 = (state_87377[(29)]);var inst_87363 = (state_87377[(2)]);var inst_87364 = cljs.core.seq.call(null,inst_87309);var state_87377__$1 = (function (){var statearr_87442 = state_87377;(statearr_87442[(31)] = inst_87363);
return statearr_87442;
})();if(inst_87364)
{var statearr_87443_87507 = state_87377__$1;(statearr_87443_87507[(1)] = (42));
} else
{var statearr_87444_87508 = state_87377__$1;(statearr_87444_87508[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (16)))
{var inst_87278 = (state_87377[(7)]);var inst_87280 = cljs.core.chunked_seq_QMARK_.call(null,inst_87278);var state_87377__$1 = state_87377;if(inst_87280)
{var statearr_87445_87509 = state_87377__$1;(statearr_87445_87509[(1)] = (19));
} else
{var statearr_87446_87510 = state_87377__$1;(statearr_87446_87510[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (38)))
{var inst_87356 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87447_87511 = state_87377__$1;(statearr_87447_87511[(2)] = inst_87356);
(statearr_87447_87511[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (30)))
{var state_87377__$1 = state_87377;var statearr_87448_87512 = state_87377__$1;(statearr_87448_87512[(2)] = null);
(statearr_87448_87512[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (10)))
{var inst_87259 = (state_87377[(13)]);var inst_87261 = (state_87377[(17)]);var inst_87267 = cljs.core._nth.call(null,inst_87259,inst_87261);var inst_87268 = cljs.core.nth.call(null,inst_87267,(0),null);var inst_87269 = cljs.core.nth.call(null,inst_87267,(1),null);var state_87377__$1 = (function (){var statearr_87449 = state_87377;(statearr_87449[(26)] = inst_87268);
return statearr_87449;
})();if(cljs.core.truth_(inst_87269))
{var statearr_87450_87513 = state_87377__$1;(statearr_87450_87513[(1)] = (13));
} else
{var statearr_87451_87514 = state_87377__$1;(statearr_87451_87514[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (18)))
{var inst_87302 = (state_87377[(2)]);var state_87377__$1 = state_87377;var statearr_87452_87515 = state_87377__$1;(statearr_87452_87515[(2)] = inst_87302);
(statearr_87452_87515[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (42)))
{var state_87377__$1 = state_87377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87377__$1,(45),dchan);
} else
{if((state_val_87378 === (37)))
{var inst_87336 = (state_87377[(25)]);var inst_87345 = (state_87377[(23)]);var inst_87249 = (state_87377[(12)]);var inst_87345__$1 = cljs.core.first.call(null,inst_87336);var inst_87346 = cljs.core.async.put_BANG_.call(null,inst_87345__$1,inst_87249,done);var state_87377__$1 = (function (){var statearr_87453 = state_87377;(statearr_87453[(23)] = inst_87345__$1);
return statearr_87453;
})();if(cljs.core.truth_(inst_87346))
{var statearr_87454_87516 = state_87377__$1;(statearr_87454_87516[(1)] = (39));
} else
{var statearr_87455_87517 = state_87377__$1;(statearr_87455_87517[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87378 === (8)))
{var inst_87260 = (state_87377[(14)]);var inst_87261 = (state_87377[(17)]);var inst_87263 = (inst_87261 < inst_87260);var inst_87264 = inst_87263;var state_87377__$1 = state_87377;if(cljs.core.truth_(inst_87264))
{var statearr_87456_87518 = state_87377__$1;(statearr_87456_87518[(1)] = (10));
} else
{var statearr_87457_87519 = state_87377__$1;(statearr_87457_87519[(1)] = (11));
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
});})(c__5819__auto___87465,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___87465,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_87461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87461[(0)] = state_machine__5805__auto__);
(statearr_87461[(1)] = (1));
return statearr_87461;
});
var state_machine__5805__auto____1 = (function (state_87377){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_87377);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e87462){if((e87462 instanceof Object))
{var ex__5808__auto__ = e87462;var statearr_87463_87520 = state_87377;(statearr_87463_87520[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e87462;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87521 = state_87377;
state_87377 = G__87521;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_87377){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_87377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___87465,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_87464 = f__5820__auto__.call(null);(statearr_87464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___87465);
return statearr_87464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___87465,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj87523 = {};return obj87523;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__87524){var map__87529 = p__87524;var map__87529__$1 = ((cljs.core.seq_QMARK_.call(null,map__87529))?cljs.core.apply.call(null,cljs.core.hash_map,map__87529):map__87529);var opts = map__87529__$1;var statearr_87530_87533 = state;(statearr_87530_87533[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__87529,map__87529__$1,opts){
return (function (val){var statearr_87531_87534 = state;(statearr_87531_87534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__87529,map__87529__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_87532_87535 = state;(statearr_87532_87535[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__87524 = null;if (arguments.length > 3) {
  p__87524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__87524);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__87536){
var state = cljs.core.first(arglist__87536);
arglist__87536 = cljs.core.next(arglist__87536);
var cont_block = cljs.core.first(arglist__87536);
arglist__87536 = cljs.core.next(arglist__87536);
var ports = cljs.core.first(arglist__87536);
var p__87524 = cljs.core.rest(arglist__87536);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__87524);
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
;var m = (function (){if(typeof cljs.core.async.t87656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87656 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta87657){
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
this.meta87657 = meta87657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87656.cljs$lang$type = true;
cljs.core.async.t87656.cljs$lang$ctorStr = "cljs.core.async/t87656";
cljs.core.async.t87656.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t87656");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87656.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_87658){var self__ = this;
var _87658__$1 = this;return self__.meta87657;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_87658,meta87657__$1){var self__ = this;
var _87658__$1 = this;return (new cljs.core.async.t87656(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta87657__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t87656 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t87656(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta87657){return (new cljs.core.async.t87656(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta87657));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t87656(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___87775 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_87728){var state_val_87729 = (state_87728[(1)]);if((state_val_87729 === (7)))
{var inst_87672 = (state_87728[(7)]);var inst_87677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_87672);var state_87728__$1 = state_87728;var statearr_87730_87776 = state_87728__$1;(statearr_87730_87776[(2)] = inst_87677);
(statearr_87730_87776[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (20)))
{var inst_87687 = (state_87728[(8)]);var state_87728__$1 = state_87728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87728__$1,(23),out,inst_87687);
} else
{if((state_val_87729 === (1)))
{var inst_87662 = (state_87728[(9)]);var inst_87662__$1 = calc_state.call(null);var inst_87663 = cljs.core.seq_QMARK_.call(null,inst_87662__$1);var state_87728__$1 = (function (){var statearr_87731 = state_87728;(statearr_87731[(9)] = inst_87662__$1);
return statearr_87731;
})();if(inst_87663)
{var statearr_87732_87777 = state_87728__$1;(statearr_87732_87777[(1)] = (2));
} else
{var statearr_87733_87778 = state_87728__$1;(statearr_87733_87778[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (24)))
{var inst_87680 = (state_87728[(10)]);var inst_87672 = inst_87680;var state_87728__$1 = (function (){var statearr_87734 = state_87728;(statearr_87734[(7)] = inst_87672);
return statearr_87734;
})();var statearr_87735_87779 = state_87728__$1;(statearr_87735_87779[(2)] = null);
(statearr_87735_87779[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (4)))
{var inst_87662 = (state_87728[(9)]);var inst_87668 = (state_87728[(2)]);var inst_87669 = cljs.core.get.call(null,inst_87668,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_87670 = cljs.core.get.call(null,inst_87668,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_87671 = cljs.core.get.call(null,inst_87668,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_87672 = inst_87662;var state_87728__$1 = (function (){var statearr_87736 = state_87728;(statearr_87736[(7)] = inst_87672);
(statearr_87736[(11)] = inst_87670);
(statearr_87736[(12)] = inst_87671);
(statearr_87736[(13)] = inst_87669);
return statearr_87736;
})();var statearr_87737_87780 = state_87728__$1;(statearr_87737_87780[(2)] = null);
(statearr_87737_87780[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (15)))
{var state_87728__$1 = state_87728;var statearr_87738_87781 = state_87728__$1;(statearr_87738_87781[(2)] = null);
(statearr_87738_87781[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (21)))
{var inst_87680 = (state_87728[(10)]);var inst_87672 = inst_87680;var state_87728__$1 = (function (){var statearr_87739 = state_87728;(statearr_87739[(7)] = inst_87672);
return statearr_87739;
})();var statearr_87740_87782 = state_87728__$1;(statearr_87740_87782[(2)] = null);
(statearr_87740_87782[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (13)))
{var inst_87724 = (state_87728[(2)]);var state_87728__$1 = state_87728;var statearr_87741_87783 = state_87728__$1;(statearr_87741_87783[(2)] = inst_87724);
(statearr_87741_87783[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (22)))
{var inst_87722 = (state_87728[(2)]);var state_87728__$1 = state_87728;var statearr_87742_87784 = state_87728__$1;(statearr_87742_87784[(2)] = inst_87722);
(statearr_87742_87784[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (6)))
{var inst_87726 = (state_87728[(2)]);var state_87728__$1 = state_87728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87728__$1,inst_87726);
} else
{if((state_val_87729 === (25)))
{var state_87728__$1 = state_87728;var statearr_87743_87785 = state_87728__$1;(statearr_87743_87785[(2)] = null);
(statearr_87743_87785[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (17)))
{var inst_87702 = (state_87728[(14)]);var state_87728__$1 = state_87728;var statearr_87744_87786 = state_87728__$1;(statearr_87744_87786[(2)] = inst_87702);
(statearr_87744_87786[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (3)))
{var inst_87662 = (state_87728[(9)]);var state_87728__$1 = state_87728;var statearr_87745_87787 = state_87728__$1;(statearr_87745_87787[(2)] = inst_87662);
(statearr_87745_87787[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (12)))
{var inst_87688 = (state_87728[(15)]);var inst_87702 = (state_87728[(14)]);var inst_87683 = (state_87728[(16)]);var inst_87702__$1 = inst_87683.call(null,inst_87688);var state_87728__$1 = (function (){var statearr_87746 = state_87728;(statearr_87746[(14)] = inst_87702__$1);
return statearr_87746;
})();if(cljs.core.truth_(inst_87702__$1))
{var statearr_87747_87788 = state_87728__$1;(statearr_87747_87788[(1)] = (17));
} else
{var statearr_87748_87789 = state_87728__$1;(statearr_87748_87789[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (2)))
{var inst_87662 = (state_87728[(9)]);var inst_87665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_87662);var state_87728__$1 = state_87728;var statearr_87749_87790 = state_87728__$1;(statearr_87749_87790[(2)] = inst_87665);
(statearr_87749_87790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (23)))
{var inst_87713 = (state_87728[(2)]);var state_87728__$1 = state_87728;if(cljs.core.truth_(inst_87713))
{var statearr_87750_87791 = state_87728__$1;(statearr_87750_87791[(1)] = (24));
} else
{var statearr_87751_87792 = state_87728__$1;(statearr_87751_87792[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (19)))
{var inst_87710 = (state_87728[(2)]);var state_87728__$1 = state_87728;if(cljs.core.truth_(inst_87710))
{var statearr_87752_87793 = state_87728__$1;(statearr_87752_87793[(1)] = (20));
} else
{var statearr_87753_87794 = state_87728__$1;(statearr_87753_87794[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (11)))
{var inst_87687 = (state_87728[(8)]);var inst_87693 = (inst_87687 == null);var state_87728__$1 = state_87728;if(cljs.core.truth_(inst_87693))
{var statearr_87754_87795 = state_87728__$1;(statearr_87754_87795[(1)] = (14));
} else
{var statearr_87755_87796 = state_87728__$1;(statearr_87755_87796[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (9)))
{var inst_87680 = (state_87728[(10)]);var inst_87680__$1 = (state_87728[(2)]);var inst_87681 = cljs.core.get.call(null,inst_87680__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_87682 = cljs.core.get.call(null,inst_87680__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_87683 = cljs.core.get.call(null,inst_87680__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_87728__$1 = (function (){var statearr_87756 = state_87728;(statearr_87756[(17)] = inst_87682);
(statearr_87756[(16)] = inst_87683);
(statearr_87756[(10)] = inst_87680__$1);
return statearr_87756;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_87728__$1,(10),inst_87681);
} else
{if((state_val_87729 === (5)))
{var inst_87672 = (state_87728[(7)]);var inst_87675 = cljs.core.seq_QMARK_.call(null,inst_87672);var state_87728__$1 = state_87728;if(inst_87675)
{var statearr_87757_87797 = state_87728__$1;(statearr_87757_87797[(1)] = (7));
} else
{var statearr_87758_87798 = state_87728__$1;(statearr_87758_87798[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (14)))
{var inst_87688 = (state_87728[(15)]);var inst_87695 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_87688);var state_87728__$1 = state_87728;var statearr_87759_87799 = state_87728__$1;(statearr_87759_87799[(2)] = inst_87695);
(statearr_87759_87799[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (26)))
{var inst_87718 = (state_87728[(2)]);var state_87728__$1 = state_87728;var statearr_87760_87800 = state_87728__$1;(statearr_87760_87800[(2)] = inst_87718);
(statearr_87760_87800[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (16)))
{var inst_87698 = (state_87728[(2)]);var inst_87699 = calc_state.call(null);var inst_87672 = inst_87699;var state_87728__$1 = (function (){var statearr_87761 = state_87728;(statearr_87761[(7)] = inst_87672);
(statearr_87761[(18)] = inst_87698);
return statearr_87761;
})();var statearr_87762_87801 = state_87728__$1;(statearr_87762_87801[(2)] = null);
(statearr_87762_87801[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (10)))
{var inst_87688 = (state_87728[(15)]);var inst_87687 = (state_87728[(8)]);var inst_87686 = (state_87728[(2)]);var inst_87687__$1 = cljs.core.nth.call(null,inst_87686,(0),null);var inst_87688__$1 = cljs.core.nth.call(null,inst_87686,(1),null);var inst_87689 = (inst_87687__$1 == null);var inst_87690 = cljs.core._EQ_.call(null,inst_87688__$1,change);var inst_87691 = (inst_87689) || (inst_87690);var state_87728__$1 = (function (){var statearr_87763 = state_87728;(statearr_87763[(15)] = inst_87688__$1);
(statearr_87763[(8)] = inst_87687__$1);
return statearr_87763;
})();if(cljs.core.truth_(inst_87691))
{var statearr_87764_87802 = state_87728__$1;(statearr_87764_87802[(1)] = (11));
} else
{var statearr_87765_87803 = state_87728__$1;(statearr_87765_87803[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (18)))
{var inst_87688 = (state_87728[(15)]);var inst_87682 = (state_87728[(17)]);var inst_87683 = (state_87728[(16)]);var inst_87705 = cljs.core.empty_QMARK_.call(null,inst_87683);var inst_87706 = inst_87682.call(null,inst_87688);var inst_87707 = cljs.core.not.call(null,inst_87706);var inst_87708 = (inst_87705) && (inst_87707);var state_87728__$1 = state_87728;var statearr_87766_87804 = state_87728__$1;(statearr_87766_87804[(2)] = inst_87708);
(statearr_87766_87804[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_87729 === (8)))
{var inst_87672 = (state_87728[(7)]);var state_87728__$1 = state_87728;var statearr_87767_87805 = state_87728__$1;(statearr_87767_87805[(2)] = inst_87672);
(statearr_87767_87805[(1)] = (9));
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
});})(c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_87771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87771[(0)] = state_machine__5805__auto__);
(statearr_87771[(1)] = (1));
return statearr_87771;
});
var state_machine__5805__auto____1 = (function (state_87728){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_87728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e87772){if((e87772 instanceof Object))
{var ex__5808__auto__ = e87772;var statearr_87773_87806 = state_87728;(statearr_87773_87806[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e87772;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87807 = state_87728;
state_87728 = G__87807;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_87728){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_87728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_87774 = f__5820__auto__.call(null);(statearr_87774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___87775);
return statearr_87774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___87775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj87809 = {};return obj87809;
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
return (function (p1__87810_SHARP_){if(cljs.core.truth_(p1__87810_SHARP_.call(null,topic)))
{return p1__87810_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__87810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t87933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87933 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta87934){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta87934 = meta87934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87933.cljs$lang$type = true;
cljs.core.async.t87933.cljs$lang$ctorStr = "cljs.core.async/t87933";
cljs.core.async.t87933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t87933");
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t87933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_87935){var self__ = this;
var _87935__$1 = this;return self__.meta87934;
});})(mults,ensure_mult))
;
cljs.core.async.t87933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_87935,meta87934__$1){var self__ = this;
var _87935__$1 = this;return (new cljs.core.async.t87933(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta87934__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t87933 = ((function (mults,ensure_mult){
return (function __GT_t87933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta87934){return (new cljs.core.async.t87933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta87934));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t87933(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___88055 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88055,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88055,mults,ensure_mult,p){
return (function (state_88007){var state_val_88008 = (state_88007[(1)]);if((state_val_88008 === (7)))
{var inst_88003 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88009_88056 = state_88007__$1;(statearr_88009_88056[(2)] = inst_88003);
(statearr_88009_88056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (20)))
{var state_88007__$1 = state_88007;var statearr_88010_88057 = state_88007__$1;(statearr_88010_88057[(2)] = null);
(statearr_88010_88057[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (1)))
{var state_88007__$1 = state_88007;var statearr_88011_88058 = state_88007__$1;(statearr_88011_88058[(2)] = null);
(statearr_88011_88058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (24)))
{var inst_87986 = (state_88007[(7)]);var inst_87995 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_87986);var state_88007__$1 = state_88007;var statearr_88012_88059 = state_88007__$1;(statearr_88012_88059[(2)] = inst_87995);
(statearr_88012_88059[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (4)))
{var inst_87938 = (state_88007[(8)]);var inst_87938__$1 = (state_88007[(2)]);var inst_87939 = (inst_87938__$1 == null);var state_88007__$1 = (function (){var statearr_88013 = state_88007;(statearr_88013[(8)] = inst_87938__$1);
return statearr_88013;
})();if(cljs.core.truth_(inst_87939))
{var statearr_88014_88060 = state_88007__$1;(statearr_88014_88060[(1)] = (5));
} else
{var statearr_88015_88061 = state_88007__$1;(statearr_88015_88061[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (15)))
{var inst_87980 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88016_88062 = state_88007__$1;(statearr_88016_88062[(2)] = inst_87980);
(statearr_88016_88062[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (21)))
{var inst_88000 = (state_88007[(2)]);var state_88007__$1 = (function (){var statearr_88017 = state_88007;(statearr_88017[(9)] = inst_88000);
return statearr_88017;
})();var statearr_88018_88063 = state_88007__$1;(statearr_88018_88063[(2)] = null);
(statearr_88018_88063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (13)))
{var inst_87962 = (state_88007[(10)]);var inst_87964 = cljs.core.chunked_seq_QMARK_.call(null,inst_87962);var state_88007__$1 = state_88007;if(inst_87964)
{var statearr_88019_88064 = state_88007__$1;(statearr_88019_88064[(1)] = (16));
} else
{var statearr_88020_88065 = state_88007__$1;(statearr_88020_88065[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (22)))
{var inst_87992 = (state_88007[(2)]);var state_88007__$1 = state_88007;if(cljs.core.truth_(inst_87992))
{var statearr_88021_88066 = state_88007__$1;(statearr_88021_88066[(1)] = (23));
} else
{var statearr_88022_88067 = state_88007__$1;(statearr_88022_88067[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (6)))
{var inst_87986 = (state_88007[(7)]);var inst_87988 = (state_88007[(11)]);var inst_87938 = (state_88007[(8)]);var inst_87986__$1 = topic_fn.call(null,inst_87938);var inst_87987 = cljs.core.deref.call(null,mults);var inst_87988__$1 = cljs.core.get.call(null,inst_87987,inst_87986__$1);var state_88007__$1 = (function (){var statearr_88023 = state_88007;(statearr_88023[(7)] = inst_87986__$1);
(statearr_88023[(11)] = inst_87988__$1);
return statearr_88023;
})();if(cljs.core.truth_(inst_87988__$1))
{var statearr_88024_88068 = state_88007__$1;(statearr_88024_88068[(1)] = (19));
} else
{var statearr_88025_88069 = state_88007__$1;(statearr_88025_88069[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (25)))
{var inst_87997 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88026_88070 = state_88007__$1;(statearr_88026_88070[(2)] = inst_87997);
(statearr_88026_88070[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (17)))
{var inst_87962 = (state_88007[(10)]);var inst_87971 = cljs.core.first.call(null,inst_87962);var inst_87972 = cljs.core.async.muxch_STAR_.call(null,inst_87971);var inst_87973 = cljs.core.async.close_BANG_.call(null,inst_87972);var inst_87974 = cljs.core.next.call(null,inst_87962);var inst_87948 = inst_87974;var inst_87949 = null;var inst_87950 = (0);var inst_87951 = (0);var state_88007__$1 = (function (){var statearr_88027 = state_88007;(statearr_88027[(12)] = inst_87950);
(statearr_88027[(13)] = inst_87973);
(statearr_88027[(14)] = inst_87949);
(statearr_88027[(15)] = inst_87948);
(statearr_88027[(16)] = inst_87951);
return statearr_88027;
})();var statearr_88028_88071 = state_88007__$1;(statearr_88028_88071[(2)] = null);
(statearr_88028_88071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (3)))
{var inst_88005 = (state_88007[(2)]);var state_88007__$1 = state_88007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88007__$1,inst_88005);
} else
{if((state_val_88008 === (12)))
{var inst_87982 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88029_88072 = state_88007__$1;(statearr_88029_88072[(2)] = inst_87982);
(statearr_88029_88072[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (2)))
{var state_88007__$1 = state_88007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88007__$1,(4),ch);
} else
{if((state_val_88008 === (23)))
{var state_88007__$1 = state_88007;var statearr_88030_88073 = state_88007__$1;(statearr_88030_88073[(2)] = null);
(statearr_88030_88073[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (19)))
{var inst_87988 = (state_88007[(11)]);var inst_87938 = (state_88007[(8)]);var inst_87990 = cljs.core.async.muxch_STAR_.call(null,inst_87988);var state_88007__$1 = state_88007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88007__$1,(22),inst_87990,inst_87938);
} else
{if((state_val_88008 === (11)))
{var inst_87962 = (state_88007[(10)]);var inst_87948 = (state_88007[(15)]);var inst_87962__$1 = cljs.core.seq.call(null,inst_87948);var state_88007__$1 = (function (){var statearr_88031 = state_88007;(statearr_88031[(10)] = inst_87962__$1);
return statearr_88031;
})();if(inst_87962__$1)
{var statearr_88032_88074 = state_88007__$1;(statearr_88032_88074[(1)] = (13));
} else
{var statearr_88033_88075 = state_88007__$1;(statearr_88033_88075[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (9)))
{var inst_87984 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88034_88076 = state_88007__$1;(statearr_88034_88076[(2)] = inst_87984);
(statearr_88034_88076[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (5)))
{var inst_87945 = cljs.core.deref.call(null,mults);var inst_87946 = cljs.core.vals.call(null,inst_87945);var inst_87947 = cljs.core.seq.call(null,inst_87946);var inst_87948 = inst_87947;var inst_87949 = null;var inst_87950 = (0);var inst_87951 = (0);var state_88007__$1 = (function (){var statearr_88035 = state_88007;(statearr_88035[(12)] = inst_87950);
(statearr_88035[(14)] = inst_87949);
(statearr_88035[(15)] = inst_87948);
(statearr_88035[(16)] = inst_87951);
return statearr_88035;
})();var statearr_88036_88077 = state_88007__$1;(statearr_88036_88077[(2)] = null);
(statearr_88036_88077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (14)))
{var state_88007__$1 = state_88007;var statearr_88040_88078 = state_88007__$1;(statearr_88040_88078[(2)] = null);
(statearr_88040_88078[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (16)))
{var inst_87962 = (state_88007[(10)]);var inst_87966 = cljs.core.chunk_first.call(null,inst_87962);var inst_87967 = cljs.core.chunk_rest.call(null,inst_87962);var inst_87968 = cljs.core.count.call(null,inst_87966);var inst_87948 = inst_87967;var inst_87949 = inst_87966;var inst_87950 = inst_87968;var inst_87951 = (0);var state_88007__$1 = (function (){var statearr_88041 = state_88007;(statearr_88041[(12)] = inst_87950);
(statearr_88041[(14)] = inst_87949);
(statearr_88041[(15)] = inst_87948);
(statearr_88041[(16)] = inst_87951);
return statearr_88041;
})();var statearr_88042_88079 = state_88007__$1;(statearr_88042_88079[(2)] = null);
(statearr_88042_88079[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (10)))
{var inst_87950 = (state_88007[(12)]);var inst_87949 = (state_88007[(14)]);var inst_87948 = (state_88007[(15)]);var inst_87951 = (state_88007[(16)]);var inst_87956 = cljs.core._nth.call(null,inst_87949,inst_87951);var inst_87957 = cljs.core.async.muxch_STAR_.call(null,inst_87956);var inst_87958 = cljs.core.async.close_BANG_.call(null,inst_87957);var inst_87959 = (inst_87951 + (1));var tmp88037 = inst_87950;var tmp88038 = inst_87949;var tmp88039 = inst_87948;var inst_87948__$1 = tmp88039;var inst_87949__$1 = tmp88038;var inst_87950__$1 = tmp88037;var inst_87951__$1 = inst_87959;var state_88007__$1 = (function (){var statearr_88043 = state_88007;(statearr_88043[(12)] = inst_87950__$1);
(statearr_88043[(17)] = inst_87958);
(statearr_88043[(14)] = inst_87949__$1);
(statearr_88043[(15)] = inst_87948__$1);
(statearr_88043[(16)] = inst_87951__$1);
return statearr_88043;
})();var statearr_88044_88080 = state_88007__$1;(statearr_88044_88080[(2)] = null);
(statearr_88044_88080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (18)))
{var inst_87977 = (state_88007[(2)]);var state_88007__$1 = state_88007;var statearr_88045_88081 = state_88007__$1;(statearr_88045_88081[(2)] = inst_87977);
(statearr_88045_88081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88008 === (8)))
{var inst_87950 = (state_88007[(12)]);var inst_87951 = (state_88007[(16)]);var inst_87953 = (inst_87951 < inst_87950);var inst_87954 = inst_87953;var state_88007__$1 = state_88007;if(cljs.core.truth_(inst_87954))
{var statearr_88046_88082 = state_88007__$1;(statearr_88046_88082[(1)] = (10));
} else
{var statearr_88047_88083 = state_88007__$1;(statearr_88047_88083[(1)] = (11));
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
});})(c__5819__auto___88055,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___88055,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_88051[(0)] = state_machine__5805__auto__);
(statearr_88051[(1)] = (1));
return statearr_88051;
});
var state_machine__5805__auto____1 = (function (state_88007){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88007);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88052){if((e88052 instanceof Object))
{var ex__5808__auto__ = e88052;var statearr_88053_88084 = state_88007;(statearr_88053_88084[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88052;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88085 = state_88007;
state_88007 = G__88085;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88007){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88055,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_88054 = f__5820__auto__.call(null);(statearr_88054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88055);
return statearr_88054;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88055,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5819__auto___88222 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_88192){var state_val_88193 = (state_88192[(1)]);if((state_val_88193 === (7)))
{var state_88192__$1 = state_88192;var statearr_88194_88223 = state_88192__$1;(statearr_88194_88223[(2)] = null);
(statearr_88194_88223[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (1)))
{var state_88192__$1 = state_88192;var statearr_88195_88224 = state_88192__$1;(statearr_88195_88224[(2)] = null);
(statearr_88195_88224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (4)))
{var inst_88156 = (state_88192[(7)]);var inst_88158 = (inst_88156 < cnt);var state_88192__$1 = state_88192;if(cljs.core.truth_(inst_88158))
{var statearr_88196_88225 = state_88192__$1;(statearr_88196_88225[(1)] = (6));
} else
{var statearr_88197_88226 = state_88192__$1;(statearr_88197_88226[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (15)))
{var inst_88188 = (state_88192[(2)]);var state_88192__$1 = state_88192;var statearr_88198_88227 = state_88192__$1;(statearr_88198_88227[(2)] = inst_88188);
(statearr_88198_88227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (13)))
{var inst_88181 = cljs.core.async.close_BANG_.call(null,out);var state_88192__$1 = state_88192;var statearr_88199_88228 = state_88192__$1;(statearr_88199_88228[(2)] = inst_88181);
(statearr_88199_88228[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (6)))
{var state_88192__$1 = state_88192;var statearr_88200_88229 = state_88192__$1;(statearr_88200_88229[(2)] = null);
(statearr_88200_88229[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (3)))
{var inst_88190 = (state_88192[(2)]);var state_88192__$1 = state_88192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88192__$1,inst_88190);
} else
{if((state_val_88193 === (12)))
{var inst_88178 = (state_88192[(8)]);var inst_88178__$1 = (state_88192[(2)]);var inst_88179 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_88178__$1);var state_88192__$1 = (function (){var statearr_88201 = state_88192;(statearr_88201[(8)] = inst_88178__$1);
return statearr_88201;
})();if(cljs.core.truth_(inst_88179))
{var statearr_88202_88230 = state_88192__$1;(statearr_88202_88230[(1)] = (13));
} else
{var statearr_88203_88231 = state_88192__$1;(statearr_88203_88231[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (2)))
{var inst_88155 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_88156 = (0);var state_88192__$1 = (function (){var statearr_88204 = state_88192;(statearr_88204[(7)] = inst_88156);
(statearr_88204[(9)] = inst_88155);
return statearr_88204;
})();var statearr_88205_88232 = state_88192__$1;(statearr_88205_88232[(2)] = null);
(statearr_88205_88232[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (11)))
{var inst_88156 = (state_88192[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_88192,(10),Object,null,(9));var inst_88165 = chs__$1.call(null,inst_88156);var inst_88166 = done.call(null,inst_88156);var inst_88167 = cljs.core.async.take_BANG_.call(null,inst_88165,inst_88166);var state_88192__$1 = state_88192;var statearr_88206_88233 = state_88192__$1;(statearr_88206_88233[(2)] = inst_88167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88192__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (9)))
{var inst_88156 = (state_88192[(7)]);var inst_88169 = (state_88192[(2)]);var inst_88170 = (inst_88156 + (1));var inst_88156__$1 = inst_88170;var state_88192__$1 = (function (){var statearr_88207 = state_88192;(statearr_88207[(10)] = inst_88169);
(statearr_88207[(7)] = inst_88156__$1);
return statearr_88207;
})();var statearr_88208_88234 = state_88192__$1;(statearr_88208_88234[(2)] = null);
(statearr_88208_88234[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (5)))
{var inst_88176 = (state_88192[(2)]);var state_88192__$1 = (function (){var statearr_88209 = state_88192;(statearr_88209[(11)] = inst_88176);
return statearr_88209;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88192__$1,(12),dchan);
} else
{if((state_val_88193 === (14)))
{var inst_88178 = (state_88192[(8)]);var inst_88183 = cljs.core.apply.call(null,f,inst_88178);var state_88192__$1 = state_88192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88192__$1,(16),out,inst_88183);
} else
{if((state_val_88193 === (16)))
{var inst_88185 = (state_88192[(2)]);var state_88192__$1 = (function (){var statearr_88210 = state_88192;(statearr_88210[(12)] = inst_88185);
return statearr_88210;
})();var statearr_88211_88235 = state_88192__$1;(statearr_88211_88235[(2)] = null);
(statearr_88211_88235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (10)))
{var inst_88160 = (state_88192[(2)]);var inst_88161 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_88192__$1 = (function (){var statearr_88212 = state_88192;(statearr_88212[(13)] = inst_88160);
return statearr_88212;
})();var statearr_88213_88236 = state_88192__$1;(statearr_88213_88236[(2)] = inst_88161);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88192__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88193 === (8)))
{var inst_88174 = (state_88192[(2)]);var state_88192__$1 = state_88192;var statearr_88214_88237 = state_88192__$1;(statearr_88214_88237[(2)] = inst_88174);
(statearr_88214_88237[(1)] = (5));
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
});})(c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_88218[(0)] = state_machine__5805__auto__);
(statearr_88218[(1)] = (1));
return statearr_88218;
});
var state_machine__5805__auto____1 = (function (state_88192){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88192);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88219){if((e88219 instanceof Object))
{var ex__5808__auto__ = e88219;var statearr_88220_88238 = state_88192;(statearr_88220_88238[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88219;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88239 = state_88192;
state_88192 = G__88239;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88192){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_88221 = f__5820__auto__.call(null);(statearr_88221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88222);
return statearr_88221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88222,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___88347 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88347,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88347,out){
return (function (state_88323){var state_val_88324 = (state_88323[(1)]);if((state_val_88324 === (7)))
{var inst_88303 = (state_88323[(7)]);var inst_88302 = (state_88323[(8)]);var inst_88302__$1 = (state_88323[(2)]);var inst_88303__$1 = cljs.core.nth.call(null,inst_88302__$1,(0),null);var inst_88304 = cljs.core.nth.call(null,inst_88302__$1,(1),null);var inst_88305 = (inst_88303__$1 == null);var state_88323__$1 = (function (){var statearr_88325 = state_88323;(statearr_88325[(7)] = inst_88303__$1);
(statearr_88325[(9)] = inst_88304);
(statearr_88325[(8)] = inst_88302__$1);
return statearr_88325;
})();if(cljs.core.truth_(inst_88305))
{var statearr_88326_88348 = state_88323__$1;(statearr_88326_88348[(1)] = (8));
} else
{var statearr_88327_88349 = state_88323__$1;(statearr_88327_88349[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (1)))
{var inst_88294 = cljs.core.vec.call(null,chs);var inst_88295 = inst_88294;var state_88323__$1 = (function (){var statearr_88328 = state_88323;(statearr_88328[(10)] = inst_88295);
return statearr_88328;
})();var statearr_88329_88350 = state_88323__$1;(statearr_88329_88350[(2)] = null);
(statearr_88329_88350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (4)))
{var inst_88295 = (state_88323[(10)]);var state_88323__$1 = state_88323;return cljs.core.async.ioc_alts_BANG_.call(null,state_88323__$1,(7),inst_88295);
} else
{if((state_val_88324 === (6)))
{var inst_88319 = (state_88323[(2)]);var state_88323__$1 = state_88323;var statearr_88330_88351 = state_88323__$1;(statearr_88330_88351[(2)] = inst_88319);
(statearr_88330_88351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (3)))
{var inst_88321 = (state_88323[(2)]);var state_88323__$1 = state_88323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88323__$1,inst_88321);
} else
{if((state_val_88324 === (2)))
{var inst_88295 = (state_88323[(10)]);var inst_88297 = cljs.core.count.call(null,inst_88295);var inst_88298 = (inst_88297 > (0));var state_88323__$1 = state_88323;if(cljs.core.truth_(inst_88298))
{var statearr_88332_88352 = state_88323__$1;(statearr_88332_88352[(1)] = (4));
} else
{var statearr_88333_88353 = state_88323__$1;(statearr_88333_88353[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (11)))
{var inst_88295 = (state_88323[(10)]);var inst_88312 = (state_88323[(2)]);var tmp88331 = inst_88295;var inst_88295__$1 = tmp88331;var state_88323__$1 = (function (){var statearr_88334 = state_88323;(statearr_88334[(11)] = inst_88312);
(statearr_88334[(10)] = inst_88295__$1);
return statearr_88334;
})();var statearr_88335_88354 = state_88323__$1;(statearr_88335_88354[(2)] = null);
(statearr_88335_88354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (9)))
{var inst_88303 = (state_88323[(7)]);var state_88323__$1 = state_88323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88323__$1,(11),out,inst_88303);
} else
{if((state_val_88324 === (5)))
{var inst_88317 = cljs.core.async.close_BANG_.call(null,out);var state_88323__$1 = state_88323;var statearr_88336_88355 = state_88323__$1;(statearr_88336_88355[(2)] = inst_88317);
(statearr_88336_88355[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (10)))
{var inst_88315 = (state_88323[(2)]);var state_88323__$1 = state_88323;var statearr_88337_88356 = state_88323__$1;(statearr_88337_88356[(2)] = inst_88315);
(statearr_88337_88356[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88324 === (8)))
{var inst_88303 = (state_88323[(7)]);var inst_88304 = (state_88323[(9)]);var inst_88302 = (state_88323[(8)]);var inst_88295 = (state_88323[(10)]);var inst_88307 = (function (){var c = inst_88304;var v = inst_88303;var vec__88300 = inst_88302;var cs = inst_88295;return ((function (c,v,vec__88300,cs,inst_88303,inst_88304,inst_88302,inst_88295,state_val_88324,c__5819__auto___88347,out){
return (function (p1__88240_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__88240_SHARP_);
});
;})(c,v,vec__88300,cs,inst_88303,inst_88304,inst_88302,inst_88295,state_val_88324,c__5819__auto___88347,out))
})();var inst_88308 = cljs.core.filterv.call(null,inst_88307,inst_88295);var inst_88295__$1 = inst_88308;var state_88323__$1 = (function (){var statearr_88338 = state_88323;(statearr_88338[(10)] = inst_88295__$1);
return statearr_88338;
})();var statearr_88339_88357 = state_88323__$1;(statearr_88339_88357[(2)] = null);
(statearr_88339_88357[(1)] = (2));
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
});})(c__5819__auto___88347,out))
;return ((function (switch__5804__auto__,c__5819__auto___88347,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88343 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_88343[(0)] = state_machine__5805__auto__);
(statearr_88343[(1)] = (1));
return statearr_88343;
});
var state_machine__5805__auto____1 = (function (state_88323){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88323);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88344){if((e88344 instanceof Object))
{var ex__5808__auto__ = e88344;var statearr_88345_88358 = state_88323;(statearr_88345_88358[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88323);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88344;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88359 = state_88323;
state_88323 = G__88359;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88323){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88347,out))
})();var state__5821__auto__ = (function (){var statearr_88346 = f__5820__auto__.call(null);(statearr_88346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88347);
return statearr_88346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88347,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___88452 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88452,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88452,out){
return (function (state_88429){var state_val_88430 = (state_88429[(1)]);if((state_val_88430 === (7)))
{var inst_88411 = (state_88429[(7)]);var inst_88411__$1 = (state_88429[(2)]);var inst_88412 = (inst_88411__$1 == null);var inst_88413 = cljs.core.not.call(null,inst_88412);var state_88429__$1 = (function (){var statearr_88431 = state_88429;(statearr_88431[(7)] = inst_88411__$1);
return statearr_88431;
})();if(inst_88413)
{var statearr_88432_88453 = state_88429__$1;(statearr_88432_88453[(1)] = (8));
} else
{var statearr_88433_88454 = state_88429__$1;(statearr_88433_88454[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (1)))
{var inst_88406 = (0);var state_88429__$1 = (function (){var statearr_88434 = state_88429;(statearr_88434[(8)] = inst_88406);
return statearr_88434;
})();var statearr_88435_88455 = state_88429__$1;(statearr_88435_88455[(2)] = null);
(statearr_88435_88455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (4)))
{var state_88429__$1 = state_88429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88429__$1,(7),ch);
} else
{if((state_val_88430 === (6)))
{var inst_88424 = (state_88429[(2)]);var state_88429__$1 = state_88429;var statearr_88436_88456 = state_88429__$1;(statearr_88436_88456[(2)] = inst_88424);
(statearr_88436_88456[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (3)))
{var inst_88426 = (state_88429[(2)]);var inst_88427 = cljs.core.async.close_BANG_.call(null,out);var state_88429__$1 = (function (){var statearr_88437 = state_88429;(statearr_88437[(9)] = inst_88426);
return statearr_88437;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88429__$1,inst_88427);
} else
{if((state_val_88430 === (2)))
{var inst_88406 = (state_88429[(8)]);var inst_88408 = (inst_88406 < n);var state_88429__$1 = state_88429;if(cljs.core.truth_(inst_88408))
{var statearr_88438_88457 = state_88429__$1;(statearr_88438_88457[(1)] = (4));
} else
{var statearr_88439_88458 = state_88429__$1;(statearr_88439_88458[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (11)))
{var inst_88406 = (state_88429[(8)]);var inst_88416 = (state_88429[(2)]);var inst_88417 = (inst_88406 + (1));var inst_88406__$1 = inst_88417;var state_88429__$1 = (function (){var statearr_88440 = state_88429;(statearr_88440[(10)] = inst_88416);
(statearr_88440[(8)] = inst_88406__$1);
return statearr_88440;
})();var statearr_88441_88459 = state_88429__$1;(statearr_88441_88459[(2)] = null);
(statearr_88441_88459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (9)))
{var state_88429__$1 = state_88429;var statearr_88442_88460 = state_88429__$1;(statearr_88442_88460[(2)] = null);
(statearr_88442_88460[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (5)))
{var state_88429__$1 = state_88429;var statearr_88443_88461 = state_88429__$1;(statearr_88443_88461[(2)] = null);
(statearr_88443_88461[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (10)))
{var inst_88421 = (state_88429[(2)]);var state_88429__$1 = state_88429;var statearr_88444_88462 = state_88429__$1;(statearr_88444_88462[(2)] = inst_88421);
(statearr_88444_88462[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88430 === (8)))
{var inst_88411 = (state_88429[(7)]);var state_88429__$1 = state_88429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88429__$1,(11),out,inst_88411);
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
});})(c__5819__auto___88452,out))
;return ((function (switch__5804__auto__,c__5819__auto___88452,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88448 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_88448[(0)] = state_machine__5805__auto__);
(statearr_88448[(1)] = (1));
return statearr_88448;
});
var state_machine__5805__auto____1 = (function (state_88429){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88429);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88449){if((e88449 instanceof Object))
{var ex__5808__auto__ = e88449;var statearr_88450_88463 = state_88429;(statearr_88450_88463[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88449;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88464 = state_88429;
state_88429 = G__88464;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88429){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88452,out))
})();var state__5821__auto__ = (function (){var statearr_88451 = f__5820__auto__.call(null);(statearr_88451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88452);
return statearr_88451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88452,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t88472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88472 = (function (ch,f,map_LT_,meta88473){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta88473 = meta88473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88472.cljs$lang$type = true;
cljs.core.async.t88472.cljs$lang$ctorStr = "cljs.core.async/t88472";
cljs.core.async.t88472.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t88472");
});
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t88475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88475 = (function (fn1,_,meta88473,ch,f,map_LT_,meta88476){
this.fn1 = fn1;
this._ = _;
this.meta88473 = meta88473;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta88476 = meta88476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88475.cljs$lang$type = true;
cljs.core.async.t88475.cljs$lang$ctorStr = "cljs.core.async/t88475";
cljs.core.async.t88475.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t88475");
});})(___$1))
;
cljs.core.async.t88475.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t88475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t88475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__88465_SHARP_){return f1.call(null,(((p1__88465_SHARP_ == null))?null:self__.f.call(null,p1__88465_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t88475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_88477){var self__ = this;
var _88477__$1 = this;return self__.meta88476;
});})(___$1))
;
cljs.core.async.t88475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_88477,meta88476__$1){var self__ = this;
var _88477__$1 = this;return (new cljs.core.async.t88475(self__.fn1,self__._,self__.meta88473,self__.ch,self__.f,self__.map_LT_,meta88476__$1));
});})(___$1))
;
cljs.core.async.__GT_t88475 = ((function (___$1){
return (function __GT_t88475(fn1__$1,___$2,meta88473__$1,ch__$2,f__$2,map_LT___$2,meta88476){return (new cljs.core.async.t88475(fn1__$1,___$2,meta88473__$1,ch__$2,f__$2,map_LT___$2,meta88476));
});})(___$1))
;
}
return (new cljs.core.async.t88475(fn1,___$1,self__.meta88473,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t88472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88474){var self__ = this;
var _88474__$1 = this;return self__.meta88473;
});
cljs.core.async.t88472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88474,meta88473__$1){var self__ = this;
var _88474__$1 = this;return (new cljs.core.async.t88472(self__.ch,self__.f,self__.map_LT_,meta88473__$1));
});
cljs.core.async.__GT_t88472 = (function __GT_t88472(ch__$1,f__$1,map_LT___$1,meta88473){return (new cljs.core.async.t88472(ch__$1,f__$1,map_LT___$1,meta88473));
});
}
return (new cljs.core.async.t88472(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t88481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88481 = (function (ch,f,map_GT_,meta88482){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta88482 = meta88482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88481.cljs$lang$type = true;
cljs.core.async.t88481.cljs$lang$ctorStr = "cljs.core.async/t88481";
cljs.core.async.t88481.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t88481");
});
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88483){var self__ = this;
var _88483__$1 = this;return self__.meta88482;
});
cljs.core.async.t88481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88483,meta88482__$1){var self__ = this;
var _88483__$1 = this;return (new cljs.core.async.t88481(self__.ch,self__.f,self__.map_GT_,meta88482__$1));
});
cljs.core.async.__GT_t88481 = (function __GT_t88481(ch__$1,f__$1,map_GT___$1,meta88482){return (new cljs.core.async.t88481(ch__$1,f__$1,map_GT___$1,meta88482));
});
}
return (new cljs.core.async.t88481(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t88487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t88487 = (function (ch,p,filter_GT_,meta88488){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta88488 = meta88488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t88487.cljs$lang$type = true;
cljs.core.async.t88487.cljs$lang$ctorStr = "cljs.core.async/t88487";
cljs.core.async.t88487.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t88487");
});
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t88487.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t88487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88489){var self__ = this;
var _88489__$1 = this;return self__.meta88488;
});
cljs.core.async.t88487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88489,meta88488__$1){var self__ = this;
var _88489__$1 = this;return (new cljs.core.async.t88487(self__.ch,self__.p,self__.filter_GT_,meta88488__$1));
});
cljs.core.async.__GT_t88487 = (function __GT_t88487(ch__$1,p__$1,filter_GT___$1,meta88488){return (new cljs.core.async.t88487(ch__$1,p__$1,filter_GT___$1,meta88488));
});
}
return (new cljs.core.async.t88487(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___88572 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88572,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88572,out){
return (function (state_88551){var state_val_88552 = (state_88551[(1)]);if((state_val_88552 === (7)))
{var inst_88547 = (state_88551[(2)]);var state_88551__$1 = state_88551;var statearr_88553_88573 = state_88551__$1;(statearr_88553_88573[(2)] = inst_88547);
(statearr_88553_88573[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (1)))
{var state_88551__$1 = state_88551;var statearr_88554_88574 = state_88551__$1;(statearr_88554_88574[(2)] = null);
(statearr_88554_88574[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (4)))
{var inst_88533 = (state_88551[(7)]);var inst_88533__$1 = (state_88551[(2)]);var inst_88534 = (inst_88533__$1 == null);var state_88551__$1 = (function (){var statearr_88555 = state_88551;(statearr_88555[(7)] = inst_88533__$1);
return statearr_88555;
})();if(cljs.core.truth_(inst_88534))
{var statearr_88556_88575 = state_88551__$1;(statearr_88556_88575[(1)] = (5));
} else
{var statearr_88557_88576 = state_88551__$1;(statearr_88557_88576[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (6)))
{var inst_88533 = (state_88551[(7)]);var inst_88538 = p.call(null,inst_88533);var state_88551__$1 = state_88551;if(cljs.core.truth_(inst_88538))
{var statearr_88558_88577 = state_88551__$1;(statearr_88558_88577[(1)] = (8));
} else
{var statearr_88559_88578 = state_88551__$1;(statearr_88559_88578[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (3)))
{var inst_88549 = (state_88551[(2)]);var state_88551__$1 = state_88551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88551__$1,inst_88549);
} else
{if((state_val_88552 === (2)))
{var state_88551__$1 = state_88551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88551__$1,(4),ch);
} else
{if((state_val_88552 === (11)))
{var inst_88541 = (state_88551[(2)]);var state_88551__$1 = state_88551;var statearr_88560_88579 = state_88551__$1;(statearr_88560_88579[(2)] = inst_88541);
(statearr_88560_88579[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (9)))
{var state_88551__$1 = state_88551;var statearr_88561_88580 = state_88551__$1;(statearr_88561_88580[(2)] = null);
(statearr_88561_88580[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (5)))
{var inst_88536 = cljs.core.async.close_BANG_.call(null,out);var state_88551__$1 = state_88551;var statearr_88562_88581 = state_88551__$1;(statearr_88562_88581[(2)] = inst_88536);
(statearr_88562_88581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (10)))
{var inst_88544 = (state_88551[(2)]);var state_88551__$1 = (function (){var statearr_88563 = state_88551;(statearr_88563[(8)] = inst_88544);
return statearr_88563;
})();var statearr_88564_88582 = state_88551__$1;(statearr_88564_88582[(2)] = null);
(statearr_88564_88582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88552 === (8)))
{var inst_88533 = (state_88551[(7)]);var state_88551__$1 = state_88551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88551__$1,(11),out,inst_88533);
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
});})(c__5819__auto___88572,out))
;return ((function (switch__5804__auto__,c__5819__auto___88572,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88568 = [null,null,null,null,null,null,null,null,null];(statearr_88568[(0)] = state_machine__5805__auto__);
(statearr_88568[(1)] = (1));
return statearr_88568;
});
var state_machine__5805__auto____1 = (function (state_88551){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88569){if((e88569 instanceof Object))
{var ex__5808__auto__ = e88569;var statearr_88570_88583 = state_88551;(statearr_88570_88583[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88569;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88584 = state_88551;
state_88551 = G__88584;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88551){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88572,out))
})();var state__5821__auto__ = (function (){var statearr_88571 = f__5820__auto__.call(null);(statearr_88571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88572);
return statearr_88571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88572,out))
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
return (function (state_88750){var state_val_88751 = (state_88750[(1)]);if((state_val_88751 === (7)))
{var inst_88746 = (state_88750[(2)]);var state_88750__$1 = state_88750;var statearr_88752_88793 = state_88750__$1;(statearr_88752_88793[(2)] = inst_88746);
(statearr_88752_88793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (20)))
{var inst_88716 = (state_88750[(7)]);var inst_88727 = (state_88750[(2)]);var inst_88728 = cljs.core.next.call(null,inst_88716);var inst_88702 = inst_88728;var inst_88703 = null;var inst_88704 = (0);var inst_88705 = (0);var state_88750__$1 = (function (){var statearr_88753 = state_88750;(statearr_88753[(8)] = inst_88703);
(statearr_88753[(9)] = inst_88704);
(statearr_88753[(10)] = inst_88705);
(statearr_88753[(11)] = inst_88702);
(statearr_88753[(12)] = inst_88727);
return statearr_88753;
})();var statearr_88754_88794 = state_88750__$1;(statearr_88754_88794[(2)] = null);
(statearr_88754_88794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (1)))
{var state_88750__$1 = state_88750;var statearr_88755_88795 = state_88750__$1;(statearr_88755_88795[(2)] = null);
(statearr_88755_88795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (4)))
{var inst_88691 = (state_88750[(13)]);var inst_88691__$1 = (state_88750[(2)]);var inst_88692 = (inst_88691__$1 == null);var state_88750__$1 = (function (){var statearr_88756 = state_88750;(statearr_88756[(13)] = inst_88691__$1);
return statearr_88756;
})();if(cljs.core.truth_(inst_88692))
{var statearr_88757_88796 = state_88750__$1;(statearr_88757_88796[(1)] = (5));
} else
{var statearr_88758_88797 = state_88750__$1;(statearr_88758_88797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (15)))
{var state_88750__$1 = state_88750;var statearr_88762_88798 = state_88750__$1;(statearr_88762_88798[(2)] = null);
(statearr_88762_88798[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (21)))
{var state_88750__$1 = state_88750;var statearr_88763_88799 = state_88750__$1;(statearr_88763_88799[(2)] = null);
(statearr_88763_88799[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (13)))
{var inst_88703 = (state_88750[(8)]);var inst_88704 = (state_88750[(9)]);var inst_88705 = (state_88750[(10)]);var inst_88702 = (state_88750[(11)]);var inst_88712 = (state_88750[(2)]);var inst_88713 = (inst_88705 + (1));var tmp88759 = inst_88703;var tmp88760 = inst_88704;var tmp88761 = inst_88702;var inst_88702__$1 = tmp88761;var inst_88703__$1 = tmp88759;var inst_88704__$1 = tmp88760;var inst_88705__$1 = inst_88713;var state_88750__$1 = (function (){var statearr_88764 = state_88750;(statearr_88764[(8)] = inst_88703__$1);
(statearr_88764[(9)] = inst_88704__$1);
(statearr_88764[(14)] = inst_88712);
(statearr_88764[(10)] = inst_88705__$1);
(statearr_88764[(11)] = inst_88702__$1);
return statearr_88764;
})();var statearr_88765_88800 = state_88750__$1;(statearr_88765_88800[(2)] = null);
(statearr_88765_88800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (22)))
{var state_88750__$1 = state_88750;var statearr_88766_88801 = state_88750__$1;(statearr_88766_88801[(2)] = null);
(statearr_88766_88801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (6)))
{var inst_88691 = (state_88750[(13)]);var inst_88700 = f.call(null,inst_88691);var inst_88701 = cljs.core.seq.call(null,inst_88700);var inst_88702 = inst_88701;var inst_88703 = null;var inst_88704 = (0);var inst_88705 = (0);var state_88750__$1 = (function (){var statearr_88767 = state_88750;(statearr_88767[(8)] = inst_88703);
(statearr_88767[(9)] = inst_88704);
(statearr_88767[(10)] = inst_88705);
(statearr_88767[(11)] = inst_88702);
return statearr_88767;
})();var statearr_88768_88802 = state_88750__$1;(statearr_88768_88802[(2)] = null);
(statearr_88768_88802[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (17)))
{var inst_88716 = (state_88750[(7)]);var inst_88720 = cljs.core.chunk_first.call(null,inst_88716);var inst_88721 = cljs.core.chunk_rest.call(null,inst_88716);var inst_88722 = cljs.core.count.call(null,inst_88720);var inst_88702 = inst_88721;var inst_88703 = inst_88720;var inst_88704 = inst_88722;var inst_88705 = (0);var state_88750__$1 = (function (){var statearr_88769 = state_88750;(statearr_88769[(8)] = inst_88703);
(statearr_88769[(9)] = inst_88704);
(statearr_88769[(10)] = inst_88705);
(statearr_88769[(11)] = inst_88702);
return statearr_88769;
})();var statearr_88770_88803 = state_88750__$1;(statearr_88770_88803[(2)] = null);
(statearr_88770_88803[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (3)))
{var inst_88748 = (state_88750[(2)]);var state_88750__$1 = state_88750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88750__$1,inst_88748);
} else
{if((state_val_88751 === (12)))
{var inst_88736 = (state_88750[(2)]);var state_88750__$1 = state_88750;var statearr_88771_88804 = state_88750__$1;(statearr_88771_88804[(2)] = inst_88736);
(statearr_88771_88804[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (2)))
{var state_88750__$1 = state_88750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88750__$1,(4),in$);
} else
{if((state_val_88751 === (23)))
{var inst_88744 = (state_88750[(2)]);var state_88750__$1 = state_88750;var statearr_88772_88805 = state_88750__$1;(statearr_88772_88805[(2)] = inst_88744);
(statearr_88772_88805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (19)))
{var inst_88731 = (state_88750[(2)]);var state_88750__$1 = state_88750;var statearr_88773_88806 = state_88750__$1;(statearr_88773_88806[(2)] = inst_88731);
(statearr_88773_88806[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (11)))
{var inst_88716 = (state_88750[(7)]);var inst_88702 = (state_88750[(11)]);var inst_88716__$1 = cljs.core.seq.call(null,inst_88702);var state_88750__$1 = (function (){var statearr_88774 = state_88750;(statearr_88774[(7)] = inst_88716__$1);
return statearr_88774;
})();if(inst_88716__$1)
{var statearr_88775_88807 = state_88750__$1;(statearr_88775_88807[(1)] = (14));
} else
{var statearr_88776_88808 = state_88750__$1;(statearr_88776_88808[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (9)))
{var inst_88738 = (state_88750[(2)]);var inst_88739 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_88750__$1 = (function (){var statearr_88777 = state_88750;(statearr_88777[(15)] = inst_88738);
return statearr_88777;
})();if(cljs.core.truth_(inst_88739))
{var statearr_88778_88809 = state_88750__$1;(statearr_88778_88809[(1)] = (21));
} else
{var statearr_88779_88810 = state_88750__$1;(statearr_88779_88810[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (5)))
{var inst_88694 = cljs.core.async.close_BANG_.call(null,out);var state_88750__$1 = state_88750;var statearr_88780_88811 = state_88750__$1;(statearr_88780_88811[(2)] = inst_88694);
(statearr_88780_88811[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (14)))
{var inst_88716 = (state_88750[(7)]);var inst_88718 = cljs.core.chunked_seq_QMARK_.call(null,inst_88716);var state_88750__$1 = state_88750;if(inst_88718)
{var statearr_88781_88812 = state_88750__$1;(statearr_88781_88812[(1)] = (17));
} else
{var statearr_88782_88813 = state_88750__$1;(statearr_88782_88813[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (16)))
{var inst_88734 = (state_88750[(2)]);var state_88750__$1 = state_88750;var statearr_88783_88814 = state_88750__$1;(statearr_88783_88814[(2)] = inst_88734);
(statearr_88783_88814[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88751 === (10)))
{var inst_88703 = (state_88750[(8)]);var inst_88705 = (state_88750[(10)]);var inst_88710 = cljs.core._nth.call(null,inst_88703,inst_88705);var state_88750__$1 = state_88750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88750__$1,(13),out,inst_88710);
} else
{if((state_val_88751 === (18)))
{var inst_88716 = (state_88750[(7)]);var inst_88725 = cljs.core.first.call(null,inst_88716);var state_88750__$1 = state_88750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88750__$1,(20),out,inst_88725);
} else
{if((state_val_88751 === (8)))
{var inst_88704 = (state_88750[(9)]);var inst_88705 = (state_88750[(10)]);var inst_88707 = (inst_88705 < inst_88704);var inst_88708 = inst_88707;var state_88750__$1 = state_88750;if(cljs.core.truth_(inst_88708))
{var statearr_88784_88815 = state_88750__$1;(statearr_88784_88815[(1)] = (10));
} else
{var statearr_88785_88816 = state_88750__$1;(statearr_88785_88816[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_88789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_88789[(0)] = state_machine__5805__auto__);
(statearr_88789[(1)] = (1));
return statearr_88789;
});
var state_machine__5805__auto____1 = (function (state_88750){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88750);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88790){if((e88790 instanceof Object))
{var ex__5808__auto__ = e88790;var statearr_88791_88817 = state_88750;(statearr_88791_88817[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88790;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88818 = state_88750;
state_88750 = G__88818;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88750){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_88792 = f__5820__auto__.call(null);(statearr_88792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_88792;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___88915 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___88915,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___88915,out){
return (function (state_88890){var state_val_88891 = (state_88890[(1)]);if((state_val_88891 === (7)))
{var inst_88885 = (state_88890[(2)]);var state_88890__$1 = state_88890;var statearr_88892_88916 = state_88890__$1;(statearr_88892_88916[(2)] = inst_88885);
(statearr_88892_88916[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (1)))
{var inst_88867 = null;var state_88890__$1 = (function (){var statearr_88893 = state_88890;(statearr_88893[(7)] = inst_88867);
return statearr_88893;
})();var statearr_88894_88917 = state_88890__$1;(statearr_88894_88917[(2)] = null);
(statearr_88894_88917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (4)))
{var inst_88870 = (state_88890[(8)]);var inst_88870__$1 = (state_88890[(2)]);var inst_88871 = (inst_88870__$1 == null);var inst_88872 = cljs.core.not.call(null,inst_88871);var state_88890__$1 = (function (){var statearr_88895 = state_88890;(statearr_88895[(8)] = inst_88870__$1);
return statearr_88895;
})();if(inst_88872)
{var statearr_88896_88918 = state_88890__$1;(statearr_88896_88918[(1)] = (5));
} else
{var statearr_88897_88919 = state_88890__$1;(statearr_88897_88919[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (6)))
{var state_88890__$1 = state_88890;var statearr_88898_88920 = state_88890__$1;(statearr_88898_88920[(2)] = null);
(statearr_88898_88920[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (3)))
{var inst_88887 = (state_88890[(2)]);var inst_88888 = cljs.core.async.close_BANG_.call(null,out);var state_88890__$1 = (function (){var statearr_88899 = state_88890;(statearr_88899[(9)] = inst_88887);
return statearr_88899;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88890__$1,inst_88888);
} else
{if((state_val_88891 === (2)))
{var state_88890__$1 = state_88890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88890__$1,(4),ch);
} else
{if((state_val_88891 === (11)))
{var inst_88870 = (state_88890[(8)]);var inst_88879 = (state_88890[(2)]);var inst_88867 = inst_88870;var state_88890__$1 = (function (){var statearr_88900 = state_88890;(statearr_88900[(10)] = inst_88879);
(statearr_88900[(7)] = inst_88867);
return statearr_88900;
})();var statearr_88901_88921 = state_88890__$1;(statearr_88901_88921[(2)] = null);
(statearr_88901_88921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (9)))
{var inst_88870 = (state_88890[(8)]);var state_88890__$1 = state_88890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88890__$1,(11),out,inst_88870);
} else
{if((state_val_88891 === (5)))
{var inst_88870 = (state_88890[(8)]);var inst_88867 = (state_88890[(7)]);var inst_88874 = cljs.core._EQ_.call(null,inst_88870,inst_88867);var state_88890__$1 = state_88890;if(inst_88874)
{var statearr_88903_88922 = state_88890__$1;(statearr_88903_88922[(1)] = (8));
} else
{var statearr_88904_88923 = state_88890__$1;(statearr_88904_88923[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (10)))
{var inst_88882 = (state_88890[(2)]);var state_88890__$1 = state_88890;var statearr_88905_88924 = state_88890__$1;(statearr_88905_88924[(2)] = inst_88882);
(statearr_88905_88924[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_88891 === (8)))
{var inst_88867 = (state_88890[(7)]);var tmp88902 = inst_88867;var inst_88867__$1 = tmp88902;var state_88890__$1 = (function (){var statearr_88906 = state_88890;(statearr_88906[(7)] = inst_88867__$1);
return statearr_88906;
})();var statearr_88907_88925 = state_88890__$1;(statearr_88907_88925[(2)] = null);
(statearr_88907_88925[(1)] = (2));
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
});})(c__5819__auto___88915,out))
;return ((function (switch__5804__auto__,c__5819__auto___88915,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_88911 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_88911[(0)] = state_machine__5805__auto__);
(statearr_88911[(1)] = (1));
return statearr_88911;
});
var state_machine__5805__auto____1 = (function (state_88890){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_88890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e88912){if((e88912 instanceof Object))
{var ex__5808__auto__ = e88912;var statearr_88913_88926 = state_88890;(statearr_88913_88926[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e88912;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__88927 = state_88890;
state_88890 = G__88927;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_88890){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_88890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___88915,out))
})();var state__5821__auto__ = (function (){var statearr_88914 = f__5820__auto__.call(null);(statearr_88914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___88915);
return statearr_88914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___88915,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___89062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___89062,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___89062,out){
return (function (state_89032){var state_val_89033 = (state_89032[(1)]);if((state_val_89033 === (7)))
{var inst_89028 = (state_89032[(2)]);var state_89032__$1 = state_89032;var statearr_89034_89063 = state_89032__$1;(statearr_89034_89063[(2)] = inst_89028);
(statearr_89034_89063[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (1)))
{var inst_88995 = (new Array(n));var inst_88996 = inst_88995;var inst_88997 = (0);var state_89032__$1 = (function (){var statearr_89035 = state_89032;(statearr_89035[(7)] = inst_88996);
(statearr_89035[(8)] = inst_88997);
return statearr_89035;
})();var statearr_89036_89064 = state_89032__$1;(statearr_89036_89064[(2)] = null);
(statearr_89036_89064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (4)))
{var inst_89000 = (state_89032[(9)]);var inst_89000__$1 = (state_89032[(2)]);var inst_89001 = (inst_89000__$1 == null);var inst_89002 = cljs.core.not.call(null,inst_89001);var state_89032__$1 = (function (){var statearr_89037 = state_89032;(statearr_89037[(9)] = inst_89000__$1);
return statearr_89037;
})();if(inst_89002)
{var statearr_89038_89065 = state_89032__$1;(statearr_89038_89065[(1)] = (5));
} else
{var statearr_89039_89066 = state_89032__$1;(statearr_89039_89066[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (15)))
{var inst_89022 = (state_89032[(2)]);var state_89032__$1 = state_89032;var statearr_89040_89067 = state_89032__$1;(statearr_89040_89067[(2)] = inst_89022);
(statearr_89040_89067[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (13)))
{var state_89032__$1 = state_89032;var statearr_89041_89068 = state_89032__$1;(statearr_89041_89068[(2)] = null);
(statearr_89041_89068[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (6)))
{var inst_88997 = (state_89032[(8)]);var inst_89018 = (inst_88997 > (0));var state_89032__$1 = state_89032;if(cljs.core.truth_(inst_89018))
{var statearr_89042_89069 = state_89032__$1;(statearr_89042_89069[(1)] = (12));
} else
{var statearr_89043_89070 = state_89032__$1;(statearr_89043_89070[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (3)))
{var inst_89030 = (state_89032[(2)]);var state_89032__$1 = state_89032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89032__$1,inst_89030);
} else
{if((state_val_89033 === (12)))
{var inst_88996 = (state_89032[(7)]);var inst_89020 = cljs.core.vec.call(null,inst_88996);var state_89032__$1 = state_89032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89032__$1,(15),out,inst_89020);
} else
{if((state_val_89033 === (2)))
{var state_89032__$1 = state_89032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89032__$1,(4),ch);
} else
{if((state_val_89033 === (11)))
{var inst_89012 = (state_89032[(2)]);var inst_89013 = (new Array(n));var inst_88996 = inst_89013;var inst_88997 = (0);var state_89032__$1 = (function (){var statearr_89044 = state_89032;(statearr_89044[(10)] = inst_89012);
(statearr_89044[(7)] = inst_88996);
(statearr_89044[(8)] = inst_88997);
return statearr_89044;
})();var statearr_89045_89071 = state_89032__$1;(statearr_89045_89071[(2)] = null);
(statearr_89045_89071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (9)))
{var inst_88996 = (state_89032[(7)]);var inst_89010 = cljs.core.vec.call(null,inst_88996);var state_89032__$1 = state_89032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89032__$1,(11),out,inst_89010);
} else
{if((state_val_89033 === (5)))
{var inst_89000 = (state_89032[(9)]);var inst_88996 = (state_89032[(7)]);var inst_89005 = (state_89032[(11)]);var inst_88997 = (state_89032[(8)]);var inst_89004 = (inst_88996[inst_88997] = inst_89000);var inst_89005__$1 = (inst_88997 + (1));var inst_89006 = (inst_89005__$1 < n);var state_89032__$1 = (function (){var statearr_89046 = state_89032;(statearr_89046[(11)] = inst_89005__$1);
(statearr_89046[(12)] = inst_89004);
return statearr_89046;
})();if(cljs.core.truth_(inst_89006))
{var statearr_89047_89072 = state_89032__$1;(statearr_89047_89072[(1)] = (8));
} else
{var statearr_89048_89073 = state_89032__$1;(statearr_89048_89073[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (14)))
{var inst_89025 = (state_89032[(2)]);var inst_89026 = cljs.core.async.close_BANG_.call(null,out);var state_89032__$1 = (function (){var statearr_89050 = state_89032;(statearr_89050[(13)] = inst_89025);
return statearr_89050;
})();var statearr_89051_89074 = state_89032__$1;(statearr_89051_89074[(2)] = inst_89026);
(statearr_89051_89074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (10)))
{var inst_89016 = (state_89032[(2)]);var state_89032__$1 = state_89032;var statearr_89052_89075 = state_89032__$1;(statearr_89052_89075[(2)] = inst_89016);
(statearr_89052_89075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89033 === (8)))
{var inst_88996 = (state_89032[(7)]);var inst_89005 = (state_89032[(11)]);var tmp89049 = inst_88996;var inst_88996__$1 = tmp89049;var inst_88997 = inst_89005;var state_89032__$1 = (function (){var statearr_89053 = state_89032;(statearr_89053[(7)] = inst_88996__$1);
(statearr_89053[(8)] = inst_88997);
return statearr_89053;
})();var statearr_89054_89076 = state_89032__$1;(statearr_89054_89076[(2)] = null);
(statearr_89054_89076[(1)] = (2));
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
});})(c__5819__auto___89062,out))
;return ((function (switch__5804__auto__,c__5819__auto___89062,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_89058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_89058[(0)] = state_machine__5805__auto__);
(statearr_89058[(1)] = (1));
return statearr_89058;
});
var state_machine__5805__auto____1 = (function (state_89032){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_89032);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e89059){if((e89059 instanceof Object))
{var ex__5808__auto__ = e89059;var statearr_89060_89077 = state_89032;(statearr_89060_89077[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e89059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__89078 = state_89032;
state_89032 = G__89078;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_89032){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_89032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___89062,out))
})();var state__5821__auto__ = (function (){var statearr_89061 = f__5820__auto__.call(null);(statearr_89061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___89062);
return statearr_89061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___89062,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___89221 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___89221,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___89221,out){
return (function (state_89191){var state_val_89192 = (state_89191[(1)]);if((state_val_89192 === (7)))
{var inst_89187 = (state_89191[(2)]);var state_89191__$1 = state_89191;var statearr_89193_89222 = state_89191__$1;(statearr_89193_89222[(2)] = inst_89187);
(statearr_89193_89222[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (1)))
{var inst_89150 = [];var inst_89151 = inst_89150;var inst_89152 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_89191__$1 = (function (){var statearr_89194 = state_89191;(statearr_89194[(7)] = inst_89151);
(statearr_89194[(8)] = inst_89152);
return statearr_89194;
})();var statearr_89195_89223 = state_89191__$1;(statearr_89195_89223[(2)] = null);
(statearr_89195_89223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (4)))
{var inst_89155 = (state_89191[(9)]);var inst_89155__$1 = (state_89191[(2)]);var inst_89156 = (inst_89155__$1 == null);var inst_89157 = cljs.core.not.call(null,inst_89156);var state_89191__$1 = (function (){var statearr_89196 = state_89191;(statearr_89196[(9)] = inst_89155__$1);
return statearr_89196;
})();if(inst_89157)
{var statearr_89197_89224 = state_89191__$1;(statearr_89197_89224[(1)] = (5));
} else
{var statearr_89198_89225 = state_89191__$1;(statearr_89198_89225[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (15)))
{var inst_89181 = (state_89191[(2)]);var state_89191__$1 = state_89191;var statearr_89199_89226 = state_89191__$1;(statearr_89199_89226[(2)] = inst_89181);
(statearr_89199_89226[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (13)))
{var state_89191__$1 = state_89191;var statearr_89200_89227 = state_89191__$1;(statearr_89200_89227[(2)] = null);
(statearr_89200_89227[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (6)))
{var inst_89151 = (state_89191[(7)]);var inst_89176 = inst_89151.length;var inst_89177 = (inst_89176 > (0));var state_89191__$1 = state_89191;if(cljs.core.truth_(inst_89177))
{var statearr_89201_89228 = state_89191__$1;(statearr_89201_89228[(1)] = (12));
} else
{var statearr_89202_89229 = state_89191__$1;(statearr_89202_89229[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (3)))
{var inst_89189 = (state_89191[(2)]);var state_89191__$1 = state_89191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89191__$1,inst_89189);
} else
{if((state_val_89192 === (12)))
{var inst_89151 = (state_89191[(7)]);var inst_89179 = cljs.core.vec.call(null,inst_89151);var state_89191__$1 = state_89191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89191__$1,(15),out,inst_89179);
} else
{if((state_val_89192 === (2)))
{var state_89191__$1 = state_89191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89191__$1,(4),ch);
} else
{if((state_val_89192 === (11)))
{var inst_89155 = (state_89191[(9)]);var inst_89159 = (state_89191[(10)]);var inst_89169 = (state_89191[(2)]);var inst_89170 = [];var inst_89171 = inst_89170.push(inst_89155);var inst_89151 = inst_89170;var inst_89152 = inst_89159;var state_89191__$1 = (function (){var statearr_89203 = state_89191;(statearr_89203[(11)] = inst_89171);
(statearr_89203[(7)] = inst_89151);
(statearr_89203[(8)] = inst_89152);
(statearr_89203[(12)] = inst_89169);
return statearr_89203;
})();var statearr_89204_89230 = state_89191__$1;(statearr_89204_89230[(2)] = null);
(statearr_89204_89230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (9)))
{var inst_89151 = (state_89191[(7)]);var inst_89167 = cljs.core.vec.call(null,inst_89151);var state_89191__$1 = state_89191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89191__$1,(11),out,inst_89167);
} else
{if((state_val_89192 === (5)))
{var inst_89155 = (state_89191[(9)]);var inst_89152 = (state_89191[(8)]);var inst_89159 = (state_89191[(10)]);var inst_89159__$1 = f.call(null,inst_89155);var inst_89160 = cljs.core._EQ_.call(null,inst_89159__$1,inst_89152);var inst_89161 = cljs.core.keyword_identical_QMARK_.call(null,inst_89152,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_89162 = (inst_89160) || (inst_89161);var state_89191__$1 = (function (){var statearr_89205 = state_89191;(statearr_89205[(10)] = inst_89159__$1);
return statearr_89205;
})();if(cljs.core.truth_(inst_89162))
{var statearr_89206_89231 = state_89191__$1;(statearr_89206_89231[(1)] = (8));
} else
{var statearr_89207_89232 = state_89191__$1;(statearr_89207_89232[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (14)))
{var inst_89184 = (state_89191[(2)]);var inst_89185 = cljs.core.async.close_BANG_.call(null,out);var state_89191__$1 = (function (){var statearr_89209 = state_89191;(statearr_89209[(13)] = inst_89184);
return statearr_89209;
})();var statearr_89210_89233 = state_89191__$1;(statearr_89210_89233[(2)] = inst_89185);
(statearr_89210_89233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (10)))
{var inst_89174 = (state_89191[(2)]);var state_89191__$1 = state_89191;var statearr_89211_89234 = state_89191__$1;(statearr_89211_89234[(2)] = inst_89174);
(statearr_89211_89234[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_89192 === (8)))
{var inst_89151 = (state_89191[(7)]);var inst_89155 = (state_89191[(9)]);var inst_89159 = (state_89191[(10)]);var inst_89164 = inst_89151.push(inst_89155);var tmp89208 = inst_89151;var inst_89151__$1 = tmp89208;var inst_89152 = inst_89159;var state_89191__$1 = (function (){var statearr_89212 = state_89191;(statearr_89212[(7)] = inst_89151__$1);
(statearr_89212[(8)] = inst_89152);
(statearr_89212[(14)] = inst_89164);
return statearr_89212;
})();var statearr_89213_89235 = state_89191__$1;(statearr_89213_89235[(2)] = null);
(statearr_89213_89235[(1)] = (2));
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
});})(c__5819__auto___89221,out))
;return ((function (switch__5804__auto__,c__5819__auto___89221,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_89217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_89217[(0)] = state_machine__5805__auto__);
(statearr_89217[(1)] = (1));
return statearr_89217;
});
var state_machine__5805__auto____1 = (function (state_89191){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_89191);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e89218){if((e89218 instanceof Object))
{var ex__5808__auto__ = e89218;var statearr_89219_89236 = state_89191;(statearr_89219_89236[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89191);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e89218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__89237 = state_89191;
state_89191 = G__89237;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_89191){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_89191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___89221,out))
})();var state__5821__auto__ = (function (){var statearr_89220 = f__5820__auto__.call(null);(statearr_89220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___89221);
return statearr_89220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___89221,out))
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