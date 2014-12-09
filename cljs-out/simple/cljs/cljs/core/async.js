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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15196 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15196 = (function (f,fn_handler,meta15197){
this.f = f;
this.fn_handler = fn_handler;
this.meta15197 = meta15197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15196.cljs$lang$type = true;
cljs.core.async.t15196.cljs$lang$ctorStr = "cljs.core.async/t15196";
cljs.core.async.t15196.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15196");
});
cljs.core.async.t15196.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15198){var self__ = this;
var _15198__$1 = this;return self__.meta15197;
});
cljs.core.async.t15196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15198,meta15197__$1){var self__ = this;
var _15198__$1 = this;return (new cljs.core.async.t15196(self__.f,self__.fn_handler,meta15197__$1));
});
cljs.core.async.__GT_t15196 = (function __GT_t15196(f__$1,fn_handler__$1,meta15197){return (new cljs.core.async.t15196(f__$1,fn_handler__$1,meta15197));
});
}
return (new cljs.core.async.t15196(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15200 = buff;if(G__15200)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__15200.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15200.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15200);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15200);
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
{var val_15201 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15201);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15201,ret){
return (function (){return fn1.call(null,val_15201);
});})(val_15201,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___15202 = n;var x_15203 = (0);while(true){
if((x_15203 < n__4508__auto___15202))
{(a[x_15203] = (0));
{
var G__15204 = (x_15203 + (1));
x_15203 = G__15204;
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
var G__15205 = (i + (1));
i = G__15205;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15209 = (function (flag,alt_flag,meta15210){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15210 = meta15210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15209.cljs$lang$type = true;
cljs.core.async.t15209.cljs$lang$ctorStr = "cljs.core.async/t15209";
cljs.core.async.t15209.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15209");
});})(flag))
;
cljs.core.async.t15209.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15211){var self__ = this;
var _15211__$1 = this;return self__.meta15210;
});})(flag))
;
cljs.core.async.t15209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15211,meta15210__$1){var self__ = this;
var _15211__$1 = this;return (new cljs.core.async.t15209(self__.flag,self__.alt_flag,meta15210__$1));
});})(flag))
;
cljs.core.async.__GT_t15209 = ((function (flag){
return (function __GT_t15209(flag__$1,alt_flag__$1,meta15210){return (new cljs.core.async.t15209(flag__$1,alt_flag__$1,meta15210));
});})(flag))
;
}
return (new cljs.core.async.t15209(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15215 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15215 = (function (cb,flag,alt_handler,meta15216){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15216 = meta15216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15215.cljs$lang$type = true;
cljs.core.async.t15215.cljs$lang$ctorStr = "cljs.core.async/t15215";
cljs.core.async.t15215.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t15215");
});
cljs.core.async.t15215.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15217){var self__ = this;
var _15217__$1 = this;return self__.meta15216;
});
cljs.core.async.t15215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15217,meta15216__$1){var self__ = this;
var _15217__$1 = this;return (new cljs.core.async.t15215(self__.cb,self__.flag,self__.alt_handler,meta15216__$1));
});
cljs.core.async.__GT_t15215 = (function __GT_t15215(cb__$1,flag__$1,alt_handler__$1,meta15216){return (new cljs.core.async.t15215(cb__$1,flag__$1,alt_handler__$1,meta15216));
});
}
return (new cljs.core.async.t15215(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15218_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15218_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15219_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15219_SHARP_,port], null));
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
var G__15220 = (i + (1));
i = G__15220;
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
var alts_BANG___delegate = function (ports,p__15221){var map__15223 = p__15221;var map__15223__$1 = ((cljs.core.seq_QMARK_.call(null,map__15223))?cljs.core.apply.call(null,cljs.core.hash_map,map__15223):map__15223);var opts = map__15223__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15221 = null;if (arguments.length > 1) {
  p__15221 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15221);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15224){
var ports = cljs.core.first(arglist__15224);
var p__15221 = cljs.core.rest(arglist__15224);
return alts_BANG___delegate(ports,p__15221);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5821__auto___15319 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15319){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15319){
return (function (state_15295){var state_val_15296 = (state_15295[(1)]);if((state_val_15296 === (7)))
{var inst_15291 = (state_15295[(2)]);var state_15295__$1 = state_15295;var statearr_15297_15320 = state_15295__$1;(statearr_15297_15320[(2)] = inst_15291);
(statearr_15297_15320[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (1)))
{var state_15295__$1 = state_15295;var statearr_15298_15321 = state_15295__$1;(statearr_15298_15321[(2)] = null);
(statearr_15298_15321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (4)))
{var inst_15274 = (state_15295[(7)]);var inst_15274__$1 = (state_15295[(2)]);var inst_15275 = (inst_15274__$1 == null);var state_15295__$1 = (function (){var statearr_15299 = state_15295;(statearr_15299[(7)] = inst_15274__$1);
return statearr_15299;
})();if(cljs.core.truth_(inst_15275))
{var statearr_15300_15322 = state_15295__$1;(statearr_15300_15322[(1)] = (5));
} else
{var statearr_15301_15323 = state_15295__$1;(statearr_15301_15323[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (13)))
{var state_15295__$1 = state_15295;var statearr_15302_15324 = state_15295__$1;(statearr_15302_15324[(2)] = null);
(statearr_15302_15324[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (6)))
{var inst_15274 = (state_15295[(7)]);var state_15295__$1 = state_15295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15295__$1,(11),to,inst_15274);
} else
{if((state_val_15296 === (3)))
{var inst_15293 = (state_15295[(2)]);var state_15295__$1 = state_15295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15295__$1,inst_15293);
} else
{if((state_val_15296 === (12)))
{var state_15295__$1 = state_15295;var statearr_15303_15325 = state_15295__$1;(statearr_15303_15325[(2)] = null);
(statearr_15303_15325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (2)))
{var state_15295__$1 = state_15295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15295__$1,(4),from);
} else
{if((state_val_15296 === (11)))
{var inst_15284 = (state_15295[(2)]);var state_15295__$1 = state_15295;if(cljs.core.truth_(inst_15284))
{var statearr_15304_15326 = state_15295__$1;(statearr_15304_15326[(1)] = (12));
} else
{var statearr_15305_15327 = state_15295__$1;(statearr_15305_15327[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (9)))
{var state_15295__$1 = state_15295;var statearr_15306_15328 = state_15295__$1;(statearr_15306_15328[(2)] = null);
(statearr_15306_15328[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (5)))
{var state_15295__$1 = state_15295;if(cljs.core.truth_(close_QMARK_))
{var statearr_15307_15329 = state_15295__$1;(statearr_15307_15329[(1)] = (8));
} else
{var statearr_15308_15330 = state_15295__$1;(statearr_15308_15330[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (14)))
{var inst_15289 = (state_15295[(2)]);var state_15295__$1 = state_15295;var statearr_15309_15331 = state_15295__$1;(statearr_15309_15331[(2)] = inst_15289);
(statearr_15309_15331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (10)))
{var inst_15281 = (state_15295[(2)]);var state_15295__$1 = state_15295;var statearr_15310_15332 = state_15295__$1;(statearr_15310_15332[(2)] = inst_15281);
(statearr_15310_15332[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15296 === (8)))
{var inst_15278 = cljs.core.async.close_BANG_.call(null,to);var state_15295__$1 = state_15295;var statearr_15311_15333 = state_15295__$1;(statearr_15311_15333[(2)] = inst_15278);
(statearr_15311_15333[(1)] = (10));
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
});})(c__5821__auto___15319))
;return ((function (switch__5806__auto__,c__5821__auto___15319){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15315 = [null,null,null,null,null,null,null,null];(statearr_15315[(0)] = state_machine__5807__auto__);
(statearr_15315[(1)] = (1));
return statearr_15315;
});
var state_machine__5807__auto____1 = (function (state_15295){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15295);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15316){if((e15316 instanceof Object))
{var ex__5810__auto__ = e15316;var statearr_15317_15334 = state_15295;(statearr_15317_15334[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15316;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15335 = state_15295;
state_15295 = G__15335;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15295){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15319))
})();var state__5823__auto__ = (function (){var statearr_15318 = f__5822__auto__.call(null);(statearr_15318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15319);
return statearr_15318;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15319))
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
return (function (p__15519){var vec__15520 = p__15519;var v = cljs.core.nth.call(null,vec__15520,(0),null);var p = cljs.core.nth.call(null,vec__15520,(1),null);var job = vec__15520;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5821__auto___15702 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results){
return (function (state_15525){var state_val_15526 = (state_15525[(1)]);if((state_val_15526 === (2)))
{var inst_15522 = (state_15525[(2)]);var inst_15523 = cljs.core.async.close_BANG_.call(null,res);var state_15525__$1 = (function (){var statearr_15527 = state_15525;(statearr_15527[(7)] = inst_15522);
return statearr_15527;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15525__$1,inst_15523);
} else
{if((state_val_15526 === (1)))
{var state_15525__$1 = state_15525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15525__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results))
;return ((function (switch__5806__auto__,c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15531 = [null,null,null,null,null,null,null,null];(statearr_15531[(0)] = state_machine__5807__auto__);
(statearr_15531[(1)] = (1));
return statearr_15531;
});
var state_machine__5807__auto____1 = (function (state_15525){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15532){if((e15532 instanceof Object))
{var ex__5810__auto__ = e15532;var statearr_15533_15703 = state_15525;(statearr_15533_15703[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15525);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15532;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15704 = state_15525;
state_15525 = G__15704;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15525){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results))
})();var state__5823__auto__ = (function (){var statearr_15534 = f__5822__auto__.call(null);(statearr_15534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15702);
return statearr_15534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15702,res,vec__15520,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__15535){var vec__15536 = p__15535;var v = cljs.core.nth.call(null,vec__15536,(0),null);var p = cljs.core.nth.call(null,vec__15536,(1),null);var job = vec__15536;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___15705 = n;var __15706 = (0);while(true){
if((__15706 < n__4508__auto___15705))
{var G__15537_15707 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__15537_15707) {
case "async":
var c__5821__auto___15709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15706,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (__15706,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function (state_15550){var state_val_15551 = (state_15550[(1)]);if((state_val_15551 === (7)))
{var inst_15546 = (state_15550[(2)]);var state_15550__$1 = state_15550;var statearr_15552_15710 = state_15550__$1;(statearr_15552_15710[(2)] = inst_15546);
(statearr_15552_15710[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15551 === (6)))
{var state_15550__$1 = state_15550;var statearr_15553_15711 = state_15550__$1;(statearr_15553_15711[(2)] = null);
(statearr_15553_15711[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15551 === (5)))
{var state_15550__$1 = state_15550;var statearr_15554_15712 = state_15550__$1;(statearr_15554_15712[(2)] = null);
(statearr_15554_15712[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15551 === (4)))
{var inst_15540 = (state_15550[(2)]);var inst_15541 = async.call(null,inst_15540);var state_15550__$1 = state_15550;if(cljs.core.truth_(inst_15541))
{var statearr_15555_15713 = state_15550__$1;(statearr_15555_15713[(1)] = (5));
} else
{var statearr_15556_15714 = state_15550__$1;(statearr_15556_15714[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15551 === (3)))
{var inst_15548 = (state_15550[(2)]);var state_15550__$1 = state_15550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15550__$1,inst_15548);
} else
{if((state_val_15551 === (2)))
{var state_15550__$1 = state_15550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15550__$1,(4),jobs);
} else
{if((state_val_15551 === (1)))
{var state_15550__$1 = state_15550;var statearr_15557_15715 = state_15550__$1;(statearr_15557_15715[(2)] = null);
(statearr_15557_15715[(1)] = (2));
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
});})(__15706,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
;return ((function (__15706,switch__5806__auto__,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15561 = [null,null,null,null,null,null,null];(statearr_15561[(0)] = state_machine__5807__auto__);
(statearr_15561[(1)] = (1));
return statearr_15561;
});
var state_machine__5807__auto____1 = (function (state_15550){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15562){if((e15562 instanceof Object))
{var ex__5810__auto__ = e15562;var statearr_15563_15716 = state_15550;(statearr_15563_15716[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15562;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15717 = state_15550;
state_15550 = G__15717;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15550){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(__15706,switch__5806__auto__,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15564 = f__5822__auto__.call(null);(statearr_15564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15709);
return statearr_15564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(__15706,c__5821__auto___15709,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
);

break;
case "compute":
var c__5821__auto___15718 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15706,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (__15706,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function (state_15577){var state_val_15578 = (state_15577[(1)]);if((state_val_15578 === (7)))
{var inst_15573 = (state_15577[(2)]);var state_15577__$1 = state_15577;var statearr_15579_15719 = state_15577__$1;(statearr_15579_15719[(2)] = inst_15573);
(statearr_15579_15719[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15578 === (6)))
{var state_15577__$1 = state_15577;var statearr_15580_15720 = state_15577__$1;(statearr_15580_15720[(2)] = null);
(statearr_15580_15720[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15578 === (5)))
{var state_15577__$1 = state_15577;var statearr_15581_15721 = state_15577__$1;(statearr_15581_15721[(2)] = null);
(statearr_15581_15721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15578 === (4)))
{var inst_15567 = (state_15577[(2)]);var inst_15568 = process.call(null,inst_15567);var state_15577__$1 = state_15577;if(cljs.core.truth_(inst_15568))
{var statearr_15582_15722 = state_15577__$1;(statearr_15582_15722[(1)] = (5));
} else
{var statearr_15583_15723 = state_15577__$1;(statearr_15583_15723[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15578 === (3)))
{var inst_15575 = (state_15577[(2)]);var state_15577__$1 = state_15577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15577__$1,inst_15575);
} else
{if((state_val_15578 === (2)))
{var state_15577__$1 = state_15577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15577__$1,(4),jobs);
} else
{if((state_val_15578 === (1)))
{var state_15577__$1 = state_15577;var statearr_15584_15724 = state_15577__$1;(statearr_15584_15724[(2)] = null);
(statearr_15584_15724[(1)] = (2));
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
});})(__15706,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
;return ((function (__15706,switch__5806__auto__,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15588 = [null,null,null,null,null,null,null];(statearr_15588[(0)] = state_machine__5807__auto__);
(statearr_15588[(1)] = (1));
return statearr_15588;
});
var state_machine__5807__auto____1 = (function (state_15577){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15589){if((e15589 instanceof Object))
{var ex__5810__auto__ = e15589;var statearr_15590_15725 = state_15577;(statearr_15590_15725[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15589;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15726 = state_15577;
state_15577 = G__15726;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15577){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(__15706,switch__5806__auto__,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15591 = f__5822__auto__.call(null);(statearr_15591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15718);
return statearr_15591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(__15706,c__5821__auto___15718,G__15537_15707,n__4508__auto___15705,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__15727 = (__15706 + (1));
__15706 = G__15727;
continue;
}
} else
{}
break;
}
var c__5821__auto___15728 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15728,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15728,jobs,results,process,async){
return (function (state_15613){var state_val_15614 = (state_15613[(1)]);if((state_val_15614 === (9)))
{var inst_15606 = (state_15613[(2)]);var state_15613__$1 = (function (){var statearr_15615 = state_15613;(statearr_15615[(7)] = inst_15606);
return statearr_15615;
})();var statearr_15616_15729 = state_15613__$1;(statearr_15616_15729[(2)] = null);
(statearr_15616_15729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15614 === (8)))
{var inst_15599 = (state_15613[(8)]);var inst_15604 = (state_15613[(2)]);var state_15613__$1 = (function (){var statearr_15617 = state_15613;(statearr_15617[(9)] = inst_15604);
return statearr_15617;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15613__$1,(9),results,inst_15599);
} else
{if((state_val_15614 === (7)))
{var inst_15609 = (state_15613[(2)]);var state_15613__$1 = state_15613;var statearr_15618_15730 = state_15613__$1;(statearr_15618_15730[(2)] = inst_15609);
(statearr_15618_15730[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15614 === (6)))
{var inst_15594 = (state_15613[(10)]);var inst_15599 = (state_15613[(8)]);var inst_15599__$1 = cljs.core.async.chan.call(null,(1));var inst_15600 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15601 = [inst_15594,inst_15599__$1];var inst_15602 = (new cljs.core.PersistentVector(null,2,(5),inst_15600,inst_15601,null));var state_15613__$1 = (function (){var statearr_15619 = state_15613;(statearr_15619[(8)] = inst_15599__$1);
return statearr_15619;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15613__$1,(8),jobs,inst_15602);
} else
{if((state_val_15614 === (5)))
{var inst_15597 = cljs.core.async.close_BANG_.call(null,jobs);var state_15613__$1 = state_15613;var statearr_15620_15731 = state_15613__$1;(statearr_15620_15731[(2)] = inst_15597);
(statearr_15620_15731[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15614 === (4)))
{var inst_15594 = (state_15613[(10)]);var inst_15594__$1 = (state_15613[(2)]);var inst_15595 = (inst_15594__$1 == null);var state_15613__$1 = (function (){var statearr_15621 = state_15613;(statearr_15621[(10)] = inst_15594__$1);
return statearr_15621;
})();if(cljs.core.truth_(inst_15595))
{var statearr_15622_15732 = state_15613__$1;(statearr_15622_15732[(1)] = (5));
} else
{var statearr_15623_15733 = state_15613__$1;(statearr_15623_15733[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15614 === (3)))
{var inst_15611 = (state_15613[(2)]);var state_15613__$1 = state_15613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15613__$1,inst_15611);
} else
{if((state_val_15614 === (2)))
{var state_15613__$1 = state_15613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15613__$1,(4),from);
} else
{if((state_val_15614 === (1)))
{var state_15613__$1 = state_15613;var statearr_15624_15734 = state_15613__$1;(statearr_15624_15734[(2)] = null);
(statearr_15624_15734[(1)] = (2));
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
});})(c__5821__auto___15728,jobs,results,process,async))
;return ((function (switch__5806__auto__,c__5821__auto___15728,jobs,results,process,async){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15628 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15628[(0)] = state_machine__5807__auto__);
(statearr_15628[(1)] = (1));
return statearr_15628;
});
var state_machine__5807__auto____1 = (function (state_15613){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15613);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15629){if((e15629 instanceof Object))
{var ex__5810__auto__ = e15629;var statearr_15630_15735 = state_15613;(statearr_15630_15735[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15629;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15736 = state_15613;
state_15613 = G__15736;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15728,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15631 = f__5822__auto__.call(null);(statearr_15631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15728);
return statearr_15631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15728,jobs,results,process,async))
);
var c__5821__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto__,jobs,results,process,async){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto__,jobs,results,process,async){
return (function (state_15669){var state_val_15670 = (state_15669[(1)]);if((state_val_15670 === (7)))
{var inst_15665 = (state_15669[(2)]);var state_15669__$1 = state_15669;var statearr_15671_15737 = state_15669__$1;(statearr_15671_15737[(2)] = inst_15665);
(statearr_15671_15737[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (20)))
{var state_15669__$1 = state_15669;var statearr_15672_15738 = state_15669__$1;(statearr_15672_15738[(2)] = null);
(statearr_15672_15738[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (1)))
{var state_15669__$1 = state_15669;var statearr_15673_15739 = state_15669__$1;(statearr_15673_15739[(2)] = null);
(statearr_15673_15739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (4)))
{var inst_15634 = (state_15669[(7)]);var inst_15634__$1 = (state_15669[(2)]);var inst_15635 = (inst_15634__$1 == null);var state_15669__$1 = (function (){var statearr_15674 = state_15669;(statearr_15674[(7)] = inst_15634__$1);
return statearr_15674;
})();if(cljs.core.truth_(inst_15635))
{var statearr_15675_15740 = state_15669__$1;(statearr_15675_15740[(1)] = (5));
} else
{var statearr_15676_15741 = state_15669__$1;(statearr_15676_15741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (15)))
{var inst_15647 = (state_15669[(8)]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15669__$1,(18),to,inst_15647);
} else
{if((state_val_15670 === (21)))
{var inst_15660 = (state_15669[(2)]);var state_15669__$1 = state_15669;var statearr_15677_15742 = state_15669__$1;(statearr_15677_15742[(2)] = inst_15660);
(statearr_15677_15742[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (13)))
{var inst_15662 = (state_15669[(2)]);var state_15669__$1 = (function (){var statearr_15678 = state_15669;(statearr_15678[(9)] = inst_15662);
return statearr_15678;
})();var statearr_15679_15743 = state_15669__$1;(statearr_15679_15743[(2)] = null);
(statearr_15679_15743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (6)))
{var inst_15634 = (state_15669[(7)]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15669__$1,(11),inst_15634);
} else
{if((state_val_15670 === (17)))
{var inst_15655 = (state_15669[(2)]);var state_15669__$1 = state_15669;if(cljs.core.truth_(inst_15655))
{var statearr_15680_15744 = state_15669__$1;(statearr_15680_15744[(1)] = (19));
} else
{var statearr_15681_15745 = state_15669__$1;(statearr_15681_15745[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (3)))
{var inst_15667 = (state_15669[(2)]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15669__$1,inst_15667);
} else
{if((state_val_15670 === (12)))
{var inst_15644 = (state_15669[(10)]);var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15669__$1,(14),inst_15644);
} else
{if((state_val_15670 === (2)))
{var state_15669__$1 = state_15669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15669__$1,(4),results);
} else
{if((state_val_15670 === (19)))
{var state_15669__$1 = state_15669;var statearr_15682_15746 = state_15669__$1;(statearr_15682_15746[(2)] = null);
(statearr_15682_15746[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (11)))
{var inst_15644 = (state_15669[(2)]);var state_15669__$1 = (function (){var statearr_15683 = state_15669;(statearr_15683[(10)] = inst_15644);
return statearr_15683;
})();var statearr_15684_15747 = state_15669__$1;(statearr_15684_15747[(2)] = null);
(statearr_15684_15747[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (9)))
{var state_15669__$1 = state_15669;var statearr_15685_15748 = state_15669__$1;(statearr_15685_15748[(2)] = null);
(statearr_15685_15748[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (5)))
{var state_15669__$1 = state_15669;if(cljs.core.truth_(close_QMARK_))
{var statearr_15686_15749 = state_15669__$1;(statearr_15686_15749[(1)] = (8));
} else
{var statearr_15687_15750 = state_15669__$1;(statearr_15687_15750[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (14)))
{var inst_15647 = (state_15669[(8)]);var inst_15649 = (state_15669[(11)]);var inst_15647__$1 = (state_15669[(2)]);var inst_15648 = (inst_15647__$1 == null);var inst_15649__$1 = cljs.core.not.call(null,inst_15648);var state_15669__$1 = (function (){var statearr_15688 = state_15669;(statearr_15688[(8)] = inst_15647__$1);
(statearr_15688[(11)] = inst_15649__$1);
return statearr_15688;
})();if(inst_15649__$1)
{var statearr_15689_15751 = state_15669__$1;(statearr_15689_15751[(1)] = (15));
} else
{var statearr_15690_15752 = state_15669__$1;(statearr_15690_15752[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (16)))
{var inst_15649 = (state_15669[(11)]);var state_15669__$1 = state_15669;var statearr_15691_15753 = state_15669__$1;(statearr_15691_15753[(2)] = inst_15649);
(statearr_15691_15753[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (10)))
{var inst_15641 = (state_15669[(2)]);var state_15669__$1 = state_15669;var statearr_15692_15754 = state_15669__$1;(statearr_15692_15754[(2)] = inst_15641);
(statearr_15692_15754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (18)))
{var inst_15652 = (state_15669[(2)]);var state_15669__$1 = state_15669;var statearr_15693_15755 = state_15669__$1;(statearr_15693_15755[(2)] = inst_15652);
(statearr_15693_15755[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15670 === (8)))
{var inst_15638 = cljs.core.async.close_BANG_.call(null,to);var state_15669__$1 = state_15669;var statearr_15694_15756 = state_15669__$1;(statearr_15694_15756[(2)] = inst_15638);
(statearr_15694_15756[(1)] = (10));
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
var state_machine__5807__auto____0 = (function (){var statearr_15698 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15698[(0)] = state_machine__5807__auto__);
(statearr_15698[(1)] = (1));
return statearr_15698;
});
var state_machine__5807__auto____1 = (function (state_15669){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15669);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15699){if((e15699 instanceof Object))
{var ex__5810__auto__ = e15699;var statearr_15700_15757 = state_15669;(statearr_15700_15757[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15669);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15699;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15758 = state_15669;
state_15669 = G__15758;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15669){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__,jobs,results,process,async))
})();var state__5823__auto__ = (function (){var statearr_15701 = f__5822__auto__.call(null);(statearr_15701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_15701;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5821__auto___15859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___15859,tc,fc){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___15859,tc,fc){
return (function (state_15834){var state_val_15835 = (state_15834[(1)]);if((state_val_15835 === (7)))
{var inst_15830 = (state_15834[(2)]);var state_15834__$1 = state_15834;var statearr_15836_15860 = state_15834__$1;(statearr_15836_15860[(2)] = inst_15830);
(statearr_15836_15860[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (1)))
{var state_15834__$1 = state_15834;var statearr_15837_15861 = state_15834__$1;(statearr_15837_15861[(2)] = null);
(statearr_15837_15861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (4)))
{var inst_15811 = (state_15834[(7)]);var inst_15811__$1 = (state_15834[(2)]);var inst_15812 = (inst_15811__$1 == null);var state_15834__$1 = (function (){var statearr_15838 = state_15834;(statearr_15838[(7)] = inst_15811__$1);
return statearr_15838;
})();if(cljs.core.truth_(inst_15812))
{var statearr_15839_15862 = state_15834__$1;(statearr_15839_15862[(1)] = (5));
} else
{var statearr_15840_15863 = state_15834__$1;(statearr_15840_15863[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (13)))
{var state_15834__$1 = state_15834;var statearr_15841_15864 = state_15834__$1;(statearr_15841_15864[(2)] = null);
(statearr_15841_15864[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (6)))
{var inst_15811 = (state_15834[(7)]);var inst_15817 = p.call(null,inst_15811);var state_15834__$1 = state_15834;if(cljs.core.truth_(inst_15817))
{var statearr_15842_15865 = state_15834__$1;(statearr_15842_15865[(1)] = (9));
} else
{var statearr_15843_15866 = state_15834__$1;(statearr_15843_15866[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (3)))
{var inst_15832 = (state_15834[(2)]);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15834__$1,inst_15832);
} else
{if((state_val_15835 === (12)))
{var state_15834__$1 = state_15834;var statearr_15844_15867 = state_15834__$1;(statearr_15844_15867[(2)] = null);
(statearr_15844_15867[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (2)))
{var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15834__$1,(4),ch);
} else
{if((state_val_15835 === (11)))
{var inst_15811 = (state_15834[(7)]);var inst_15821 = (state_15834[(2)]);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15834__$1,(8),inst_15821,inst_15811);
} else
{if((state_val_15835 === (9)))
{var state_15834__$1 = state_15834;var statearr_15845_15868 = state_15834__$1;(statearr_15845_15868[(2)] = tc);
(statearr_15845_15868[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (5)))
{var inst_15814 = cljs.core.async.close_BANG_.call(null,tc);var inst_15815 = cljs.core.async.close_BANG_.call(null,fc);var state_15834__$1 = (function (){var statearr_15846 = state_15834;(statearr_15846[(8)] = inst_15814);
return statearr_15846;
})();var statearr_15847_15869 = state_15834__$1;(statearr_15847_15869[(2)] = inst_15815);
(statearr_15847_15869[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (14)))
{var inst_15828 = (state_15834[(2)]);var state_15834__$1 = state_15834;var statearr_15848_15870 = state_15834__$1;(statearr_15848_15870[(2)] = inst_15828);
(statearr_15848_15870[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (10)))
{var state_15834__$1 = state_15834;var statearr_15849_15871 = state_15834__$1;(statearr_15849_15871[(2)] = fc);
(statearr_15849_15871[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15835 === (8)))
{var inst_15823 = (state_15834[(2)]);var state_15834__$1 = state_15834;if(cljs.core.truth_(inst_15823))
{var statearr_15850_15872 = state_15834__$1;(statearr_15850_15872[(1)] = (12));
} else
{var statearr_15851_15873 = state_15834__$1;(statearr_15851_15873[(1)] = (13));
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
});})(c__5821__auto___15859,tc,fc))
;return ((function (switch__5806__auto__,c__5821__auto___15859,tc,fc){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_15855 = [null,null,null,null,null,null,null,null,null];(statearr_15855[(0)] = state_machine__5807__auto__);
(statearr_15855[(1)] = (1));
return statearr_15855;
});
var state_machine__5807__auto____1 = (function (state_15834){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15856){if((e15856 instanceof Object))
{var ex__5810__auto__ = e15856;var statearr_15857_15874 = state_15834;(statearr_15857_15874[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15834);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15856;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15875 = state_15834;
state_15834 = G__15875;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15834){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___15859,tc,fc))
})();var state__5823__auto__ = (function (){var statearr_15858 = f__5822__auto__.call(null);(statearr_15858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___15859);
return statearr_15858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___15859,tc,fc))
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
return (function (state_15922){var state_val_15923 = (state_15922[(1)]);if((state_val_15923 === (7)))
{var inst_15918 = (state_15922[(2)]);var state_15922__$1 = state_15922;var statearr_15924_15940 = state_15922__$1;(statearr_15924_15940[(2)] = inst_15918);
(statearr_15924_15940[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (6)))
{var inst_15908 = (state_15922[(7)]);var inst_15911 = (state_15922[(8)]);var inst_15915 = f.call(null,inst_15908,inst_15911);var inst_15908__$1 = inst_15915;var state_15922__$1 = (function (){var statearr_15925 = state_15922;(statearr_15925[(7)] = inst_15908__$1);
return statearr_15925;
})();var statearr_15926_15941 = state_15922__$1;(statearr_15926_15941[(2)] = null);
(statearr_15926_15941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (5)))
{var inst_15908 = (state_15922[(7)]);var state_15922__$1 = state_15922;var statearr_15927_15942 = state_15922__$1;(statearr_15927_15942[(2)] = inst_15908);
(statearr_15927_15942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (4)))
{var inst_15911 = (state_15922[(8)]);var inst_15911__$1 = (state_15922[(2)]);var inst_15912 = (inst_15911__$1 == null);var state_15922__$1 = (function (){var statearr_15928 = state_15922;(statearr_15928[(8)] = inst_15911__$1);
return statearr_15928;
})();if(cljs.core.truth_(inst_15912))
{var statearr_15929_15943 = state_15922__$1;(statearr_15929_15943[(1)] = (5));
} else
{var statearr_15930_15944 = state_15922__$1;(statearr_15930_15944[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15923 === (3)))
{var inst_15920 = (state_15922[(2)]);var state_15922__$1 = state_15922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15922__$1,inst_15920);
} else
{if((state_val_15923 === (2)))
{var state_15922__$1 = state_15922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15922__$1,(4),ch);
} else
{if((state_val_15923 === (1)))
{var inst_15908 = init;var state_15922__$1 = (function (){var statearr_15931 = state_15922;(statearr_15931[(7)] = inst_15908);
return statearr_15931;
})();var statearr_15932_15945 = state_15922__$1;(statearr_15932_15945[(2)] = null);
(statearr_15932_15945[(1)] = (2));
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
var state_machine__5807__auto____0 = (function (){var statearr_15936 = [null,null,null,null,null,null,null,null,null];(statearr_15936[(0)] = state_machine__5807__auto__);
(statearr_15936[(1)] = (1));
return statearr_15936;
});
var state_machine__5807__auto____1 = (function (state_15922){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_15922);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e15937){if((e15937 instanceof Object))
{var ex__5810__auto__ = e15937;var statearr_15938_15946 = state_15922;(statearr_15938_15946[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15947 = state_15922;
state_15922 = G__15947;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_15922){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_15922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_15939 = f__5822__auto__.call(null);(statearr_15939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_15939;
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
return (function (state_16021){var state_val_16022 = (state_16021[(1)]);if((state_val_16022 === (7)))
{var inst_16003 = (state_16021[(2)]);var state_16021__$1 = state_16021;var statearr_16023_16046 = state_16021__$1;(statearr_16023_16046[(2)] = inst_16003);
(statearr_16023_16046[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (1)))
{var inst_15997 = cljs.core.seq.call(null,coll);var inst_15998 = inst_15997;var state_16021__$1 = (function (){var statearr_16024 = state_16021;(statearr_16024[(7)] = inst_15998);
return statearr_16024;
})();var statearr_16025_16047 = state_16021__$1;(statearr_16025_16047[(2)] = null);
(statearr_16025_16047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (4)))
{var inst_15998 = (state_16021[(7)]);var inst_16001 = cljs.core.first.call(null,inst_15998);var state_16021__$1 = state_16021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16021__$1,(7),ch,inst_16001);
} else
{if((state_val_16022 === (13)))
{var inst_16015 = (state_16021[(2)]);var state_16021__$1 = state_16021;var statearr_16026_16048 = state_16021__$1;(statearr_16026_16048[(2)] = inst_16015);
(statearr_16026_16048[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (6)))
{var inst_16006 = (state_16021[(2)]);var state_16021__$1 = state_16021;if(cljs.core.truth_(inst_16006))
{var statearr_16027_16049 = state_16021__$1;(statearr_16027_16049[(1)] = (8));
} else
{var statearr_16028_16050 = state_16021__$1;(statearr_16028_16050[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (3)))
{var inst_16019 = (state_16021[(2)]);var state_16021__$1 = state_16021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16021__$1,inst_16019);
} else
{if((state_val_16022 === (12)))
{var state_16021__$1 = state_16021;var statearr_16029_16051 = state_16021__$1;(statearr_16029_16051[(2)] = null);
(statearr_16029_16051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (2)))
{var inst_15998 = (state_16021[(7)]);var state_16021__$1 = state_16021;if(cljs.core.truth_(inst_15998))
{var statearr_16030_16052 = state_16021__$1;(statearr_16030_16052[(1)] = (4));
} else
{var statearr_16031_16053 = state_16021__$1;(statearr_16031_16053[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (11)))
{var inst_16012 = cljs.core.async.close_BANG_.call(null,ch);var state_16021__$1 = state_16021;var statearr_16032_16054 = state_16021__$1;(statearr_16032_16054[(2)] = inst_16012);
(statearr_16032_16054[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (9)))
{var state_16021__$1 = state_16021;if(cljs.core.truth_(close_QMARK_))
{var statearr_16033_16055 = state_16021__$1;(statearr_16033_16055[(1)] = (11));
} else
{var statearr_16034_16056 = state_16021__$1;(statearr_16034_16056[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (5)))
{var inst_15998 = (state_16021[(7)]);var state_16021__$1 = state_16021;var statearr_16035_16057 = state_16021__$1;(statearr_16035_16057[(2)] = inst_15998);
(statearr_16035_16057[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (10)))
{var inst_16017 = (state_16021[(2)]);var state_16021__$1 = state_16021;var statearr_16036_16058 = state_16021__$1;(statearr_16036_16058[(2)] = inst_16017);
(statearr_16036_16058[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16022 === (8)))
{var inst_15998 = (state_16021[(7)]);var inst_16008 = cljs.core.next.call(null,inst_15998);var inst_15998__$1 = inst_16008;var state_16021__$1 = (function (){var statearr_16037 = state_16021;(statearr_16037[(7)] = inst_15998__$1);
return statearr_16037;
})();var statearr_16038_16059 = state_16021__$1;(statearr_16038_16059[(2)] = null);
(statearr_16038_16059[(1)] = (2));
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
var state_machine__5807__auto____0 = (function (){var statearr_16042 = [null,null,null,null,null,null,null,null];(statearr_16042[(0)] = state_machine__5807__auto__);
(statearr_16042[(1)] = (1));
return statearr_16042;
});
var state_machine__5807__auto____1 = (function (state_16021){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16043){if((e16043 instanceof Object))
{var ex__5810__auto__ = e16043;var statearr_16044_16060 = state_16021;(statearr_16044_16060[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16043;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16061 = state_16021;
state_16021 = G__16061;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16021){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_16045 = f__5822__auto__.call(null);(statearr_16045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_16045;
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
cljs.core.async.Mux = (function (){var obj16063 = {};return obj16063;
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
cljs.core.async.Mult = (function (){var obj16065 = {};return obj16065;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16287 = (function (cs,ch,mult,meta16288){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16288 = meta16288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16287.cljs$lang$type = true;
cljs.core.async.t16287.cljs$lang$ctorStr = "cljs.core.async/t16287";
cljs.core.async.t16287.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16287");
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16287.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16289){var self__ = this;
var _16289__$1 = this;return self__.meta16288;
});})(cs))
;
cljs.core.async.t16287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16289,meta16288__$1){var self__ = this;
var _16289__$1 = this;return (new cljs.core.async.t16287(self__.cs,self__.ch,self__.mult,meta16288__$1));
});})(cs))
;
cljs.core.async.__GT_t16287 = ((function (cs){
return (function __GT_t16287(cs__$1,ch__$1,mult__$1,meta16288){return (new cljs.core.async.t16287(cs__$1,ch__$1,mult__$1,meta16288));
});})(cs))
;
}
return (new cljs.core.async.t16287(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5821__auto___16508 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___16508,cs,m,dchan,dctr,done){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___16508,cs,m,dchan,dctr,done){
return (function (state_16420){var state_val_16421 = (state_16420[(1)]);if((state_val_16421 === (7)))
{var inst_16416 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16422_16509 = state_16420__$1;(statearr_16422_16509[(2)] = inst_16416);
(statearr_16422_16509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (20)))
{var inst_16321 = (state_16420[(7)]);var inst_16331 = cljs.core.first.call(null,inst_16321);var inst_16332 = cljs.core.nth.call(null,inst_16331,(0),null);var inst_16333 = cljs.core.nth.call(null,inst_16331,(1),null);var state_16420__$1 = (function (){var statearr_16423 = state_16420;(statearr_16423[(8)] = inst_16332);
return statearr_16423;
})();if(cljs.core.truth_(inst_16333))
{var statearr_16424_16510 = state_16420__$1;(statearr_16424_16510[(1)] = (22));
} else
{var statearr_16425_16511 = state_16420__$1;(statearr_16425_16511[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (27)))
{var inst_16368 = (state_16420[(9)]);var inst_16361 = (state_16420[(10)]);var inst_16292 = (state_16420[(11)]);var inst_16363 = (state_16420[(12)]);var inst_16368__$1 = cljs.core._nth.call(null,inst_16361,inst_16363);var inst_16369 = cljs.core.async.put_BANG_.call(null,inst_16368__$1,inst_16292,done);var state_16420__$1 = (function (){var statearr_16426 = state_16420;(statearr_16426[(9)] = inst_16368__$1);
return statearr_16426;
})();if(cljs.core.truth_(inst_16369))
{var statearr_16427_16512 = state_16420__$1;(statearr_16427_16512[(1)] = (30));
} else
{var statearr_16428_16513 = state_16420__$1;(statearr_16428_16513[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (1)))
{var state_16420__$1 = state_16420;var statearr_16429_16514 = state_16420__$1;(statearr_16429_16514[(2)] = null);
(statearr_16429_16514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (24)))
{var inst_16321 = (state_16420[(7)]);var inst_16338 = (state_16420[(2)]);var inst_16339 = cljs.core.next.call(null,inst_16321);var inst_16301 = inst_16339;var inst_16302 = null;var inst_16303 = (0);var inst_16304 = (0);var state_16420__$1 = (function (){var statearr_16430 = state_16420;(statearr_16430[(13)] = inst_16303);
(statearr_16430[(14)] = inst_16338);
(statearr_16430[(15)] = inst_16301);
(statearr_16430[(16)] = inst_16302);
(statearr_16430[(17)] = inst_16304);
return statearr_16430;
})();var statearr_16431_16515 = state_16420__$1;(statearr_16431_16515[(2)] = null);
(statearr_16431_16515[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (39)))
{var state_16420__$1 = state_16420;var statearr_16435_16516 = state_16420__$1;(statearr_16435_16516[(2)] = null);
(statearr_16435_16516[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (4)))
{var inst_16292 = (state_16420[(11)]);var inst_16292__$1 = (state_16420[(2)]);var inst_16293 = (inst_16292__$1 == null);var state_16420__$1 = (function (){var statearr_16436 = state_16420;(statearr_16436[(11)] = inst_16292__$1);
return statearr_16436;
})();if(cljs.core.truth_(inst_16293))
{var statearr_16437_16517 = state_16420__$1;(statearr_16437_16517[(1)] = (5));
} else
{var statearr_16438_16518 = state_16420__$1;(statearr_16438_16518[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (15)))
{var inst_16303 = (state_16420[(13)]);var inst_16301 = (state_16420[(15)]);var inst_16302 = (state_16420[(16)]);var inst_16304 = (state_16420[(17)]);var inst_16317 = (state_16420[(2)]);var inst_16318 = (inst_16304 + (1));var tmp16432 = inst_16303;var tmp16433 = inst_16301;var tmp16434 = inst_16302;var inst_16301__$1 = tmp16433;var inst_16302__$1 = tmp16434;var inst_16303__$1 = tmp16432;var inst_16304__$1 = inst_16318;var state_16420__$1 = (function (){var statearr_16439 = state_16420;(statearr_16439[(13)] = inst_16303__$1);
(statearr_16439[(15)] = inst_16301__$1);
(statearr_16439[(18)] = inst_16317);
(statearr_16439[(16)] = inst_16302__$1);
(statearr_16439[(17)] = inst_16304__$1);
return statearr_16439;
})();var statearr_16440_16519 = state_16420__$1;(statearr_16440_16519[(2)] = null);
(statearr_16440_16519[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (21)))
{var inst_16342 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16444_16520 = state_16420__$1;(statearr_16444_16520[(2)] = inst_16342);
(statearr_16444_16520[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (31)))
{var inst_16368 = (state_16420[(9)]);var inst_16372 = done.call(null,null);var inst_16373 = cljs.core.async.untap_STAR_.call(null,m,inst_16368);var state_16420__$1 = (function (){var statearr_16445 = state_16420;(statearr_16445[(19)] = inst_16372);
return statearr_16445;
})();var statearr_16446_16521 = state_16420__$1;(statearr_16446_16521[(2)] = inst_16373);
(statearr_16446_16521[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (32)))
{var inst_16360 = (state_16420[(20)]);var inst_16361 = (state_16420[(10)]);var inst_16362 = (state_16420[(21)]);var inst_16363 = (state_16420[(12)]);var inst_16375 = (state_16420[(2)]);var inst_16376 = (inst_16363 + (1));var tmp16441 = inst_16360;var tmp16442 = inst_16361;var tmp16443 = inst_16362;var inst_16360__$1 = tmp16441;var inst_16361__$1 = tmp16442;var inst_16362__$1 = tmp16443;var inst_16363__$1 = inst_16376;var state_16420__$1 = (function (){var statearr_16447 = state_16420;(statearr_16447[(20)] = inst_16360__$1);
(statearr_16447[(10)] = inst_16361__$1);
(statearr_16447[(21)] = inst_16362__$1);
(statearr_16447[(22)] = inst_16375);
(statearr_16447[(12)] = inst_16363__$1);
return statearr_16447;
})();var statearr_16448_16522 = state_16420__$1;(statearr_16448_16522[(2)] = null);
(statearr_16448_16522[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (40)))
{var inst_16388 = (state_16420[(23)]);var inst_16392 = done.call(null,null);var inst_16393 = cljs.core.async.untap_STAR_.call(null,m,inst_16388);var state_16420__$1 = (function (){var statearr_16449 = state_16420;(statearr_16449[(24)] = inst_16392);
return statearr_16449;
})();var statearr_16450_16523 = state_16420__$1;(statearr_16450_16523[(2)] = inst_16393);
(statearr_16450_16523[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (33)))
{var inst_16379 = (state_16420[(25)]);var inst_16381 = cljs.core.chunked_seq_QMARK_.call(null,inst_16379);var state_16420__$1 = state_16420;if(inst_16381)
{var statearr_16451_16524 = state_16420__$1;(statearr_16451_16524[(1)] = (36));
} else
{var statearr_16452_16525 = state_16420__$1;(statearr_16452_16525[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (13)))
{var inst_16311 = (state_16420[(26)]);var inst_16314 = cljs.core.async.close_BANG_.call(null,inst_16311);var state_16420__$1 = state_16420;var statearr_16453_16526 = state_16420__$1;(statearr_16453_16526[(2)] = inst_16314);
(statearr_16453_16526[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (22)))
{var inst_16332 = (state_16420[(8)]);var inst_16335 = cljs.core.async.close_BANG_.call(null,inst_16332);var state_16420__$1 = state_16420;var statearr_16454_16527 = state_16420__$1;(statearr_16454_16527[(2)] = inst_16335);
(statearr_16454_16527[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (36)))
{var inst_16379 = (state_16420[(25)]);var inst_16383 = cljs.core.chunk_first.call(null,inst_16379);var inst_16384 = cljs.core.chunk_rest.call(null,inst_16379);var inst_16385 = cljs.core.count.call(null,inst_16383);var inst_16360 = inst_16384;var inst_16361 = inst_16383;var inst_16362 = inst_16385;var inst_16363 = (0);var state_16420__$1 = (function (){var statearr_16455 = state_16420;(statearr_16455[(20)] = inst_16360);
(statearr_16455[(10)] = inst_16361);
(statearr_16455[(21)] = inst_16362);
(statearr_16455[(12)] = inst_16363);
return statearr_16455;
})();var statearr_16456_16528 = state_16420__$1;(statearr_16456_16528[(2)] = null);
(statearr_16456_16528[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (41)))
{var inst_16379 = (state_16420[(25)]);var inst_16395 = (state_16420[(2)]);var inst_16396 = cljs.core.next.call(null,inst_16379);var inst_16360 = inst_16396;var inst_16361 = null;var inst_16362 = (0);var inst_16363 = (0);var state_16420__$1 = (function (){var statearr_16457 = state_16420;(statearr_16457[(27)] = inst_16395);
(statearr_16457[(20)] = inst_16360);
(statearr_16457[(10)] = inst_16361);
(statearr_16457[(21)] = inst_16362);
(statearr_16457[(12)] = inst_16363);
return statearr_16457;
})();var statearr_16458_16529 = state_16420__$1;(statearr_16458_16529[(2)] = null);
(statearr_16458_16529[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (43)))
{var state_16420__$1 = state_16420;var statearr_16459_16530 = state_16420__$1;(statearr_16459_16530[(2)] = null);
(statearr_16459_16530[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (29)))
{var inst_16404 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16460_16531 = state_16420__$1;(statearr_16460_16531[(2)] = inst_16404);
(statearr_16460_16531[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (44)))
{var inst_16413 = (state_16420[(2)]);var state_16420__$1 = (function (){var statearr_16461 = state_16420;(statearr_16461[(28)] = inst_16413);
return statearr_16461;
})();var statearr_16462_16532 = state_16420__$1;(statearr_16462_16532[(2)] = null);
(statearr_16462_16532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (6)))
{var inst_16352 = (state_16420[(29)]);var inst_16351 = cljs.core.deref.call(null,cs);var inst_16352__$1 = cljs.core.keys.call(null,inst_16351);var inst_16353 = cljs.core.count.call(null,inst_16352__$1);var inst_16354 = cljs.core.reset_BANG_.call(null,dctr,inst_16353);var inst_16359 = cljs.core.seq.call(null,inst_16352__$1);var inst_16360 = inst_16359;var inst_16361 = null;var inst_16362 = (0);var inst_16363 = (0);var state_16420__$1 = (function (){var statearr_16463 = state_16420;(statearr_16463[(30)] = inst_16354);
(statearr_16463[(20)] = inst_16360);
(statearr_16463[(10)] = inst_16361);
(statearr_16463[(21)] = inst_16362);
(statearr_16463[(12)] = inst_16363);
(statearr_16463[(29)] = inst_16352__$1);
return statearr_16463;
})();var statearr_16464_16533 = state_16420__$1;(statearr_16464_16533[(2)] = null);
(statearr_16464_16533[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (28)))
{var inst_16360 = (state_16420[(20)]);var inst_16379 = (state_16420[(25)]);var inst_16379__$1 = cljs.core.seq.call(null,inst_16360);var state_16420__$1 = (function (){var statearr_16465 = state_16420;(statearr_16465[(25)] = inst_16379__$1);
return statearr_16465;
})();if(inst_16379__$1)
{var statearr_16466_16534 = state_16420__$1;(statearr_16466_16534[(1)] = (33));
} else
{var statearr_16467_16535 = state_16420__$1;(statearr_16467_16535[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (25)))
{var inst_16362 = (state_16420[(21)]);var inst_16363 = (state_16420[(12)]);var inst_16365 = (inst_16363 < inst_16362);var inst_16366 = inst_16365;var state_16420__$1 = state_16420;if(cljs.core.truth_(inst_16366))
{var statearr_16468_16536 = state_16420__$1;(statearr_16468_16536[(1)] = (27));
} else
{var statearr_16469_16537 = state_16420__$1;(statearr_16469_16537[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (34)))
{var state_16420__$1 = state_16420;var statearr_16470_16538 = state_16420__$1;(statearr_16470_16538[(2)] = null);
(statearr_16470_16538[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (17)))
{var state_16420__$1 = state_16420;var statearr_16471_16539 = state_16420__$1;(statearr_16471_16539[(2)] = null);
(statearr_16471_16539[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (3)))
{var inst_16418 = (state_16420[(2)]);var state_16420__$1 = state_16420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16420__$1,inst_16418);
} else
{if((state_val_16421 === (12)))
{var inst_16347 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16472_16540 = state_16420__$1;(statearr_16472_16540[(2)] = inst_16347);
(statearr_16472_16540[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (2)))
{var state_16420__$1 = state_16420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16420__$1,(4),ch);
} else
{if((state_val_16421 === (23)))
{var state_16420__$1 = state_16420;var statearr_16473_16541 = state_16420__$1;(statearr_16473_16541[(2)] = null);
(statearr_16473_16541[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (35)))
{var inst_16402 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16474_16542 = state_16420__$1;(statearr_16474_16542[(2)] = inst_16402);
(statearr_16474_16542[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (19)))
{var inst_16321 = (state_16420[(7)]);var inst_16325 = cljs.core.chunk_first.call(null,inst_16321);var inst_16326 = cljs.core.chunk_rest.call(null,inst_16321);var inst_16327 = cljs.core.count.call(null,inst_16325);var inst_16301 = inst_16326;var inst_16302 = inst_16325;var inst_16303 = inst_16327;var inst_16304 = (0);var state_16420__$1 = (function (){var statearr_16475 = state_16420;(statearr_16475[(13)] = inst_16303);
(statearr_16475[(15)] = inst_16301);
(statearr_16475[(16)] = inst_16302);
(statearr_16475[(17)] = inst_16304);
return statearr_16475;
})();var statearr_16476_16543 = state_16420__$1;(statearr_16476_16543[(2)] = null);
(statearr_16476_16543[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (11)))
{var inst_16301 = (state_16420[(15)]);var inst_16321 = (state_16420[(7)]);var inst_16321__$1 = cljs.core.seq.call(null,inst_16301);var state_16420__$1 = (function (){var statearr_16477 = state_16420;(statearr_16477[(7)] = inst_16321__$1);
return statearr_16477;
})();if(inst_16321__$1)
{var statearr_16478_16544 = state_16420__$1;(statearr_16478_16544[(1)] = (16));
} else
{var statearr_16479_16545 = state_16420__$1;(statearr_16479_16545[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (9)))
{var inst_16349 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16480_16546 = state_16420__$1;(statearr_16480_16546[(2)] = inst_16349);
(statearr_16480_16546[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (5)))
{var inst_16299 = cljs.core.deref.call(null,cs);var inst_16300 = cljs.core.seq.call(null,inst_16299);var inst_16301 = inst_16300;var inst_16302 = null;var inst_16303 = (0);var inst_16304 = (0);var state_16420__$1 = (function (){var statearr_16481 = state_16420;(statearr_16481[(13)] = inst_16303);
(statearr_16481[(15)] = inst_16301);
(statearr_16481[(16)] = inst_16302);
(statearr_16481[(17)] = inst_16304);
return statearr_16481;
})();var statearr_16482_16547 = state_16420__$1;(statearr_16482_16547[(2)] = null);
(statearr_16482_16547[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (14)))
{var state_16420__$1 = state_16420;var statearr_16483_16548 = state_16420__$1;(statearr_16483_16548[(2)] = null);
(statearr_16483_16548[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (45)))
{var inst_16410 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16484_16549 = state_16420__$1;(statearr_16484_16549[(2)] = inst_16410);
(statearr_16484_16549[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (26)))
{var inst_16352 = (state_16420[(29)]);var inst_16406 = (state_16420[(2)]);var inst_16407 = cljs.core.seq.call(null,inst_16352);var state_16420__$1 = (function (){var statearr_16485 = state_16420;(statearr_16485[(31)] = inst_16406);
return statearr_16485;
})();if(inst_16407)
{var statearr_16486_16550 = state_16420__$1;(statearr_16486_16550[(1)] = (42));
} else
{var statearr_16487_16551 = state_16420__$1;(statearr_16487_16551[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (16)))
{var inst_16321 = (state_16420[(7)]);var inst_16323 = cljs.core.chunked_seq_QMARK_.call(null,inst_16321);var state_16420__$1 = state_16420;if(inst_16323)
{var statearr_16488_16552 = state_16420__$1;(statearr_16488_16552[(1)] = (19));
} else
{var statearr_16489_16553 = state_16420__$1;(statearr_16489_16553[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (38)))
{var inst_16399 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16490_16554 = state_16420__$1;(statearr_16490_16554[(2)] = inst_16399);
(statearr_16490_16554[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (30)))
{var state_16420__$1 = state_16420;var statearr_16491_16555 = state_16420__$1;(statearr_16491_16555[(2)] = null);
(statearr_16491_16555[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (10)))
{var inst_16302 = (state_16420[(16)]);var inst_16304 = (state_16420[(17)]);var inst_16310 = cljs.core._nth.call(null,inst_16302,inst_16304);var inst_16311 = cljs.core.nth.call(null,inst_16310,(0),null);var inst_16312 = cljs.core.nth.call(null,inst_16310,(1),null);var state_16420__$1 = (function (){var statearr_16492 = state_16420;(statearr_16492[(26)] = inst_16311);
return statearr_16492;
})();if(cljs.core.truth_(inst_16312))
{var statearr_16493_16556 = state_16420__$1;(statearr_16493_16556[(1)] = (13));
} else
{var statearr_16494_16557 = state_16420__$1;(statearr_16494_16557[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (18)))
{var inst_16345 = (state_16420[(2)]);var state_16420__$1 = state_16420;var statearr_16495_16558 = state_16420__$1;(statearr_16495_16558[(2)] = inst_16345);
(statearr_16495_16558[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (42)))
{var state_16420__$1 = state_16420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16420__$1,(45),dchan);
} else
{if((state_val_16421 === (37)))
{var inst_16292 = (state_16420[(11)]);var inst_16388 = (state_16420[(23)]);var inst_16379 = (state_16420[(25)]);var inst_16388__$1 = cljs.core.first.call(null,inst_16379);var inst_16389 = cljs.core.async.put_BANG_.call(null,inst_16388__$1,inst_16292,done);var state_16420__$1 = (function (){var statearr_16496 = state_16420;(statearr_16496[(23)] = inst_16388__$1);
return statearr_16496;
})();if(cljs.core.truth_(inst_16389))
{var statearr_16497_16559 = state_16420__$1;(statearr_16497_16559[(1)] = (39));
} else
{var statearr_16498_16560 = state_16420__$1;(statearr_16498_16560[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16421 === (8)))
{var inst_16303 = (state_16420[(13)]);var inst_16304 = (state_16420[(17)]);var inst_16306 = (inst_16304 < inst_16303);var inst_16307 = inst_16306;var state_16420__$1 = state_16420;if(cljs.core.truth_(inst_16307))
{var statearr_16499_16561 = state_16420__$1;(statearr_16499_16561[(1)] = (10));
} else
{var statearr_16500_16562 = state_16420__$1;(statearr_16500_16562[(1)] = (11));
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
});})(c__5821__auto___16508,cs,m,dchan,dctr,done))
;return ((function (switch__5806__auto__,c__5821__auto___16508,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_16504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16504[(0)] = state_machine__5807__auto__);
(statearr_16504[(1)] = (1));
return statearr_16504;
});
var state_machine__5807__auto____1 = (function (state_16420){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16505){if((e16505 instanceof Object))
{var ex__5810__auto__ = e16505;var statearr_16506_16563 = state_16420;(statearr_16506_16563[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16505;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16564 = state_16420;
state_16420 = G__16564;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16420){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___16508,cs,m,dchan,dctr,done))
})();var state__5823__auto__ = (function (){var statearr_16507 = f__5822__auto__.call(null);(statearr_16507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___16508);
return statearr_16507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___16508,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16566 = {};return obj16566;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16567){var map__16572 = p__16567;var map__16572__$1 = ((cljs.core.seq_QMARK_.call(null,map__16572))?cljs.core.apply.call(null,cljs.core.hash_map,map__16572):map__16572);var opts = map__16572__$1;var statearr_16573_16576 = state;(statearr_16573_16576[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16572,map__16572__$1,opts){
return (function (val){var statearr_16574_16577 = state;(statearr_16574_16577[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16572,map__16572__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_16575_16578 = state;(statearr_16575_16578[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16567 = null;if (arguments.length > 3) {
  p__16567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16567);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16579){
var state = cljs.core.first(arglist__16579);
arglist__16579 = cljs.core.next(arglist__16579);
var cont_block = cljs.core.first(arglist__16579);
arglist__16579 = cljs.core.next(arglist__16579);
var ports = cljs.core.first(arglist__16579);
var p__16567 = cljs.core.rest(arglist__16579);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16567);
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
;var m = (function (){if(typeof cljs.core.async.t16699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16699 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16700){
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
this.meta16700 = meta16700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16699.cljs$lang$type = true;
cljs.core.async.t16699.cljs$lang$ctorStr = "cljs.core.async/t16699";
cljs.core.async.t16699.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16699");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16701){var self__ = this;
var _16701__$1 = this;return self__.meta16700;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16701,meta16700__$1){var self__ = this;
var _16701__$1 = this;return (new cljs.core.async.t16699(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16700__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16699 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16699(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16700){return (new cljs.core.async.t16699(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16700));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16699(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5821__auto___16818 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16771){var state_val_16772 = (state_16771[(1)]);if((state_val_16772 === (7)))
{var inst_16715 = (state_16771[(7)]);var inst_16720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16715);var state_16771__$1 = state_16771;var statearr_16773_16819 = state_16771__$1;(statearr_16773_16819[(2)] = inst_16720);
(statearr_16773_16819[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (20)))
{var inst_16730 = (state_16771[(8)]);var state_16771__$1 = state_16771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16771__$1,(23),out,inst_16730);
} else
{if((state_val_16772 === (1)))
{var inst_16705 = (state_16771[(9)]);var inst_16705__$1 = calc_state.call(null);var inst_16706 = cljs.core.seq_QMARK_.call(null,inst_16705__$1);var state_16771__$1 = (function (){var statearr_16774 = state_16771;(statearr_16774[(9)] = inst_16705__$1);
return statearr_16774;
})();if(inst_16706)
{var statearr_16775_16820 = state_16771__$1;(statearr_16775_16820[(1)] = (2));
} else
{var statearr_16776_16821 = state_16771__$1;(statearr_16776_16821[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (24)))
{var inst_16723 = (state_16771[(10)]);var inst_16715 = inst_16723;var state_16771__$1 = (function (){var statearr_16777 = state_16771;(statearr_16777[(7)] = inst_16715);
return statearr_16777;
})();var statearr_16778_16822 = state_16771__$1;(statearr_16778_16822[(2)] = null);
(statearr_16778_16822[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (4)))
{var inst_16705 = (state_16771[(9)]);var inst_16711 = (state_16771[(2)]);var inst_16712 = cljs.core.get.call(null,inst_16711,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16713 = cljs.core.get.call(null,inst_16711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16714 = cljs.core.get.call(null,inst_16711,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16715 = inst_16705;var state_16771__$1 = (function (){var statearr_16779 = state_16771;(statearr_16779[(11)] = inst_16712);
(statearr_16779[(12)] = inst_16713);
(statearr_16779[(13)] = inst_16714);
(statearr_16779[(7)] = inst_16715);
return statearr_16779;
})();var statearr_16780_16823 = state_16771__$1;(statearr_16780_16823[(2)] = null);
(statearr_16780_16823[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (15)))
{var state_16771__$1 = state_16771;var statearr_16781_16824 = state_16771__$1;(statearr_16781_16824[(2)] = null);
(statearr_16781_16824[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (21)))
{var inst_16723 = (state_16771[(10)]);var inst_16715 = inst_16723;var state_16771__$1 = (function (){var statearr_16782 = state_16771;(statearr_16782[(7)] = inst_16715);
return statearr_16782;
})();var statearr_16783_16825 = state_16771__$1;(statearr_16783_16825[(2)] = null);
(statearr_16783_16825[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (13)))
{var inst_16767 = (state_16771[(2)]);var state_16771__$1 = state_16771;var statearr_16784_16826 = state_16771__$1;(statearr_16784_16826[(2)] = inst_16767);
(statearr_16784_16826[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (22)))
{var inst_16765 = (state_16771[(2)]);var state_16771__$1 = state_16771;var statearr_16785_16827 = state_16771__$1;(statearr_16785_16827[(2)] = inst_16765);
(statearr_16785_16827[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (6)))
{var inst_16769 = (state_16771[(2)]);var state_16771__$1 = state_16771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16771__$1,inst_16769);
} else
{if((state_val_16772 === (25)))
{var state_16771__$1 = state_16771;var statearr_16786_16828 = state_16771__$1;(statearr_16786_16828[(2)] = null);
(statearr_16786_16828[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (17)))
{var inst_16745 = (state_16771[(14)]);var state_16771__$1 = state_16771;var statearr_16787_16829 = state_16771__$1;(statearr_16787_16829[(2)] = inst_16745);
(statearr_16787_16829[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (3)))
{var inst_16705 = (state_16771[(9)]);var state_16771__$1 = state_16771;var statearr_16788_16830 = state_16771__$1;(statearr_16788_16830[(2)] = inst_16705);
(statearr_16788_16830[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (12)))
{var inst_16745 = (state_16771[(14)]);var inst_16726 = (state_16771[(15)]);var inst_16731 = (state_16771[(16)]);var inst_16745__$1 = inst_16726.call(null,inst_16731);var state_16771__$1 = (function (){var statearr_16789 = state_16771;(statearr_16789[(14)] = inst_16745__$1);
return statearr_16789;
})();if(cljs.core.truth_(inst_16745__$1))
{var statearr_16790_16831 = state_16771__$1;(statearr_16790_16831[(1)] = (17));
} else
{var statearr_16791_16832 = state_16771__$1;(statearr_16791_16832[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (2)))
{var inst_16705 = (state_16771[(9)]);var inst_16708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16705);var state_16771__$1 = state_16771;var statearr_16792_16833 = state_16771__$1;(statearr_16792_16833[(2)] = inst_16708);
(statearr_16792_16833[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (23)))
{var inst_16756 = (state_16771[(2)]);var state_16771__$1 = state_16771;if(cljs.core.truth_(inst_16756))
{var statearr_16793_16834 = state_16771__$1;(statearr_16793_16834[(1)] = (24));
} else
{var statearr_16794_16835 = state_16771__$1;(statearr_16794_16835[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (19)))
{var inst_16753 = (state_16771[(2)]);var state_16771__$1 = state_16771;if(cljs.core.truth_(inst_16753))
{var statearr_16795_16836 = state_16771__$1;(statearr_16795_16836[(1)] = (20));
} else
{var statearr_16796_16837 = state_16771__$1;(statearr_16796_16837[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (11)))
{var inst_16730 = (state_16771[(8)]);var inst_16736 = (inst_16730 == null);var state_16771__$1 = state_16771;if(cljs.core.truth_(inst_16736))
{var statearr_16797_16838 = state_16771__$1;(statearr_16797_16838[(1)] = (14));
} else
{var statearr_16798_16839 = state_16771__$1;(statearr_16798_16839[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (9)))
{var inst_16723 = (state_16771[(10)]);var inst_16723__$1 = (state_16771[(2)]);var inst_16724 = cljs.core.get.call(null,inst_16723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16725 = cljs.core.get.call(null,inst_16723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16726 = cljs.core.get.call(null,inst_16723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16771__$1 = (function (){var statearr_16799 = state_16771;(statearr_16799[(15)] = inst_16726);
(statearr_16799[(17)] = inst_16725);
(statearr_16799[(10)] = inst_16723__$1);
return statearr_16799;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_16771__$1,(10),inst_16724);
} else
{if((state_val_16772 === (5)))
{var inst_16715 = (state_16771[(7)]);var inst_16718 = cljs.core.seq_QMARK_.call(null,inst_16715);var state_16771__$1 = state_16771;if(inst_16718)
{var statearr_16800_16840 = state_16771__$1;(statearr_16800_16840[(1)] = (7));
} else
{var statearr_16801_16841 = state_16771__$1;(statearr_16801_16841[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (14)))
{var inst_16731 = (state_16771[(16)]);var inst_16738 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16731);var state_16771__$1 = state_16771;var statearr_16802_16842 = state_16771__$1;(statearr_16802_16842[(2)] = inst_16738);
(statearr_16802_16842[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (26)))
{var inst_16761 = (state_16771[(2)]);var state_16771__$1 = state_16771;var statearr_16803_16843 = state_16771__$1;(statearr_16803_16843[(2)] = inst_16761);
(statearr_16803_16843[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (16)))
{var inst_16741 = (state_16771[(2)]);var inst_16742 = calc_state.call(null);var inst_16715 = inst_16742;var state_16771__$1 = (function (){var statearr_16804 = state_16771;(statearr_16804[(18)] = inst_16741);
(statearr_16804[(7)] = inst_16715);
return statearr_16804;
})();var statearr_16805_16844 = state_16771__$1;(statearr_16805_16844[(2)] = null);
(statearr_16805_16844[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (10)))
{var inst_16731 = (state_16771[(16)]);var inst_16730 = (state_16771[(8)]);var inst_16729 = (state_16771[(2)]);var inst_16730__$1 = cljs.core.nth.call(null,inst_16729,(0),null);var inst_16731__$1 = cljs.core.nth.call(null,inst_16729,(1),null);var inst_16732 = (inst_16730__$1 == null);var inst_16733 = cljs.core._EQ_.call(null,inst_16731__$1,change);var inst_16734 = (inst_16732) || (inst_16733);var state_16771__$1 = (function (){var statearr_16806 = state_16771;(statearr_16806[(16)] = inst_16731__$1);
(statearr_16806[(8)] = inst_16730__$1);
return statearr_16806;
})();if(cljs.core.truth_(inst_16734))
{var statearr_16807_16845 = state_16771__$1;(statearr_16807_16845[(1)] = (11));
} else
{var statearr_16808_16846 = state_16771__$1;(statearr_16808_16846[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (18)))
{var inst_16726 = (state_16771[(15)]);var inst_16731 = (state_16771[(16)]);var inst_16725 = (state_16771[(17)]);var inst_16748 = cljs.core.empty_QMARK_.call(null,inst_16726);var inst_16749 = inst_16725.call(null,inst_16731);var inst_16750 = cljs.core.not.call(null,inst_16749);var inst_16751 = (inst_16748) && (inst_16750);var state_16771__$1 = state_16771;var statearr_16809_16847 = state_16771__$1;(statearr_16809_16847[(2)] = inst_16751);
(statearr_16809_16847[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16772 === (8)))
{var inst_16715 = (state_16771[(7)]);var state_16771__$1 = state_16771;var statearr_16810_16848 = state_16771__$1;(statearr_16810_16848[(2)] = inst_16715);
(statearr_16810_16848[(1)] = (9));
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
});})(c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5806__auto__,c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_16814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16814[(0)] = state_machine__5807__auto__);
(statearr_16814[(1)] = (1));
return statearr_16814;
});
var state_machine__5807__auto____1 = (function (state_16771){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_16771);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e16815){if((e16815 instanceof Object))
{var ex__5810__auto__ = e16815;var statearr_16816_16849 = state_16771;(statearr_16816_16849[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16771);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16815;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16850 = state_16771;
state_16771 = G__16850;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_16771){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_16771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5823__auto__ = (function (){var statearr_16817 = f__5822__auto__.call(null);(statearr_16817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___16818);
return statearr_16817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___16818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16852 = {};return obj16852;
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
return (function (p1__16853_SHARP_){if(cljs.core.truth_(p1__16853_SHARP_.call(null,topic)))
{return p1__16853_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16853_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16976 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16976 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16977){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16977 = meta16977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16976.cljs$lang$type = true;
cljs.core.async.t16976.cljs$lang$ctorStr = "cljs.core.async/t16976";
cljs.core.async.t16976.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t16976");
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16976.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16978){var self__ = this;
var _16978__$1 = this;return self__.meta16977;
});})(mults,ensure_mult))
;
cljs.core.async.t16976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16978,meta16977__$1){var self__ = this;
var _16978__$1 = this;return (new cljs.core.async.t16976(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16977__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16976 = ((function (mults,ensure_mult){
return (function __GT_t16976(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16977){return (new cljs.core.async.t16976(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16977));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16976(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5821__auto___17098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17098,mults,ensure_mult,p){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17098,mults,ensure_mult,p){
return (function (state_17050){var state_val_17051 = (state_17050[(1)]);if((state_val_17051 === (7)))
{var inst_17046 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17052_17099 = state_17050__$1;(statearr_17052_17099[(2)] = inst_17046);
(statearr_17052_17099[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (20)))
{var state_17050__$1 = state_17050;var statearr_17053_17100 = state_17050__$1;(statearr_17053_17100[(2)] = null);
(statearr_17053_17100[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (1)))
{var state_17050__$1 = state_17050;var statearr_17054_17101 = state_17050__$1;(statearr_17054_17101[(2)] = null);
(statearr_17054_17101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (24)))
{var inst_17029 = (state_17050[(7)]);var inst_17038 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17029);var state_17050__$1 = state_17050;var statearr_17055_17102 = state_17050__$1;(statearr_17055_17102[(2)] = inst_17038);
(statearr_17055_17102[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (4)))
{var inst_16981 = (state_17050[(8)]);var inst_16981__$1 = (state_17050[(2)]);var inst_16982 = (inst_16981__$1 == null);var state_17050__$1 = (function (){var statearr_17056 = state_17050;(statearr_17056[(8)] = inst_16981__$1);
return statearr_17056;
})();if(cljs.core.truth_(inst_16982))
{var statearr_17057_17103 = state_17050__$1;(statearr_17057_17103[(1)] = (5));
} else
{var statearr_17058_17104 = state_17050__$1;(statearr_17058_17104[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (15)))
{var inst_17023 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17059_17105 = state_17050__$1;(statearr_17059_17105[(2)] = inst_17023);
(statearr_17059_17105[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (21)))
{var inst_17043 = (state_17050[(2)]);var state_17050__$1 = (function (){var statearr_17060 = state_17050;(statearr_17060[(9)] = inst_17043);
return statearr_17060;
})();var statearr_17061_17106 = state_17050__$1;(statearr_17061_17106[(2)] = null);
(statearr_17061_17106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (13)))
{var inst_17005 = (state_17050[(10)]);var inst_17007 = cljs.core.chunked_seq_QMARK_.call(null,inst_17005);var state_17050__$1 = state_17050;if(inst_17007)
{var statearr_17062_17107 = state_17050__$1;(statearr_17062_17107[(1)] = (16));
} else
{var statearr_17063_17108 = state_17050__$1;(statearr_17063_17108[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (22)))
{var inst_17035 = (state_17050[(2)]);var state_17050__$1 = state_17050;if(cljs.core.truth_(inst_17035))
{var statearr_17064_17109 = state_17050__$1;(statearr_17064_17109[(1)] = (23));
} else
{var statearr_17065_17110 = state_17050__$1;(statearr_17065_17110[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (6)))
{var inst_17031 = (state_17050[(11)]);var inst_16981 = (state_17050[(8)]);var inst_17029 = (state_17050[(7)]);var inst_17029__$1 = topic_fn.call(null,inst_16981);var inst_17030 = cljs.core.deref.call(null,mults);var inst_17031__$1 = cljs.core.get.call(null,inst_17030,inst_17029__$1);var state_17050__$1 = (function (){var statearr_17066 = state_17050;(statearr_17066[(11)] = inst_17031__$1);
(statearr_17066[(7)] = inst_17029__$1);
return statearr_17066;
})();if(cljs.core.truth_(inst_17031__$1))
{var statearr_17067_17111 = state_17050__$1;(statearr_17067_17111[(1)] = (19));
} else
{var statearr_17068_17112 = state_17050__$1;(statearr_17068_17112[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (25)))
{var inst_17040 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17069_17113 = state_17050__$1;(statearr_17069_17113[(2)] = inst_17040);
(statearr_17069_17113[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (17)))
{var inst_17005 = (state_17050[(10)]);var inst_17014 = cljs.core.first.call(null,inst_17005);var inst_17015 = cljs.core.async.muxch_STAR_.call(null,inst_17014);var inst_17016 = cljs.core.async.close_BANG_.call(null,inst_17015);var inst_17017 = cljs.core.next.call(null,inst_17005);var inst_16991 = inst_17017;var inst_16992 = null;var inst_16993 = (0);var inst_16994 = (0);var state_17050__$1 = (function (){var statearr_17070 = state_17050;(statearr_17070[(12)] = inst_17016);
(statearr_17070[(13)] = inst_16993);
(statearr_17070[(14)] = inst_16992);
(statearr_17070[(15)] = inst_16994);
(statearr_17070[(16)] = inst_16991);
return statearr_17070;
})();var statearr_17071_17114 = state_17050__$1;(statearr_17071_17114[(2)] = null);
(statearr_17071_17114[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (3)))
{var inst_17048 = (state_17050[(2)]);var state_17050__$1 = state_17050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17050__$1,inst_17048);
} else
{if((state_val_17051 === (12)))
{var inst_17025 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17072_17115 = state_17050__$1;(statearr_17072_17115[(2)] = inst_17025);
(statearr_17072_17115[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (2)))
{var state_17050__$1 = state_17050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17050__$1,(4),ch);
} else
{if((state_val_17051 === (23)))
{var state_17050__$1 = state_17050;var statearr_17073_17116 = state_17050__$1;(statearr_17073_17116[(2)] = null);
(statearr_17073_17116[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (19)))
{var inst_17031 = (state_17050[(11)]);var inst_16981 = (state_17050[(8)]);var inst_17033 = cljs.core.async.muxch_STAR_.call(null,inst_17031);var state_17050__$1 = state_17050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17050__$1,(22),inst_17033,inst_16981);
} else
{if((state_val_17051 === (11)))
{var inst_17005 = (state_17050[(10)]);var inst_16991 = (state_17050[(16)]);var inst_17005__$1 = cljs.core.seq.call(null,inst_16991);var state_17050__$1 = (function (){var statearr_17074 = state_17050;(statearr_17074[(10)] = inst_17005__$1);
return statearr_17074;
})();if(inst_17005__$1)
{var statearr_17075_17117 = state_17050__$1;(statearr_17075_17117[(1)] = (13));
} else
{var statearr_17076_17118 = state_17050__$1;(statearr_17076_17118[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (9)))
{var inst_17027 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17077_17119 = state_17050__$1;(statearr_17077_17119[(2)] = inst_17027);
(statearr_17077_17119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (5)))
{var inst_16988 = cljs.core.deref.call(null,mults);var inst_16989 = cljs.core.vals.call(null,inst_16988);var inst_16990 = cljs.core.seq.call(null,inst_16989);var inst_16991 = inst_16990;var inst_16992 = null;var inst_16993 = (0);var inst_16994 = (0);var state_17050__$1 = (function (){var statearr_17078 = state_17050;(statearr_17078[(13)] = inst_16993);
(statearr_17078[(14)] = inst_16992);
(statearr_17078[(15)] = inst_16994);
(statearr_17078[(16)] = inst_16991);
return statearr_17078;
})();var statearr_17079_17120 = state_17050__$1;(statearr_17079_17120[(2)] = null);
(statearr_17079_17120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (14)))
{var state_17050__$1 = state_17050;var statearr_17083_17121 = state_17050__$1;(statearr_17083_17121[(2)] = null);
(statearr_17083_17121[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (16)))
{var inst_17005 = (state_17050[(10)]);var inst_17009 = cljs.core.chunk_first.call(null,inst_17005);var inst_17010 = cljs.core.chunk_rest.call(null,inst_17005);var inst_17011 = cljs.core.count.call(null,inst_17009);var inst_16991 = inst_17010;var inst_16992 = inst_17009;var inst_16993 = inst_17011;var inst_16994 = (0);var state_17050__$1 = (function (){var statearr_17084 = state_17050;(statearr_17084[(13)] = inst_16993);
(statearr_17084[(14)] = inst_16992);
(statearr_17084[(15)] = inst_16994);
(statearr_17084[(16)] = inst_16991);
return statearr_17084;
})();var statearr_17085_17122 = state_17050__$1;(statearr_17085_17122[(2)] = null);
(statearr_17085_17122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (10)))
{var inst_16993 = (state_17050[(13)]);var inst_16992 = (state_17050[(14)]);var inst_16994 = (state_17050[(15)]);var inst_16991 = (state_17050[(16)]);var inst_16999 = cljs.core._nth.call(null,inst_16992,inst_16994);var inst_17000 = cljs.core.async.muxch_STAR_.call(null,inst_16999);var inst_17001 = cljs.core.async.close_BANG_.call(null,inst_17000);var inst_17002 = (inst_16994 + (1));var tmp17080 = inst_16993;var tmp17081 = inst_16992;var tmp17082 = inst_16991;var inst_16991__$1 = tmp17082;var inst_16992__$1 = tmp17081;var inst_16993__$1 = tmp17080;var inst_16994__$1 = inst_17002;var state_17050__$1 = (function (){var statearr_17086 = state_17050;(statearr_17086[(17)] = inst_17001);
(statearr_17086[(13)] = inst_16993__$1);
(statearr_17086[(14)] = inst_16992__$1);
(statearr_17086[(15)] = inst_16994__$1);
(statearr_17086[(16)] = inst_16991__$1);
return statearr_17086;
})();var statearr_17087_17123 = state_17050__$1;(statearr_17087_17123[(2)] = null);
(statearr_17087_17123[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (18)))
{var inst_17020 = (state_17050[(2)]);var state_17050__$1 = state_17050;var statearr_17088_17124 = state_17050__$1;(statearr_17088_17124[(2)] = inst_17020);
(statearr_17088_17124[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17051 === (8)))
{var inst_16993 = (state_17050[(13)]);var inst_16994 = (state_17050[(15)]);var inst_16996 = (inst_16994 < inst_16993);var inst_16997 = inst_16996;var state_17050__$1 = state_17050;if(cljs.core.truth_(inst_16997))
{var statearr_17089_17125 = state_17050__$1;(statearr_17089_17125[(1)] = (10));
} else
{var statearr_17090_17126 = state_17050__$1;(statearr_17090_17126[(1)] = (11));
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
});})(c__5821__auto___17098,mults,ensure_mult,p))
;return ((function (switch__5806__auto__,c__5821__auto___17098,mults,ensure_mult,p){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17094[(0)] = state_machine__5807__auto__);
(statearr_17094[(1)] = (1));
return statearr_17094;
});
var state_machine__5807__auto____1 = (function (state_17050){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17050);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17095){if((e17095 instanceof Object))
{var ex__5810__auto__ = e17095;var statearr_17096_17127 = state_17050;(statearr_17096_17127[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17095;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17128 = state_17050;
state_17050 = G__17128;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17050){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17098,mults,ensure_mult,p))
})();var state__5823__auto__ = (function (){var statearr_17097 = f__5822__auto__.call(null);(statearr_17097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17098);
return statearr_17097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17098,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5821__auto___17265 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17235){var state_val_17236 = (state_17235[(1)]);if((state_val_17236 === (7)))
{var state_17235__$1 = state_17235;var statearr_17237_17266 = state_17235__$1;(statearr_17237_17266[(2)] = null);
(statearr_17237_17266[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (1)))
{var state_17235__$1 = state_17235;var statearr_17238_17267 = state_17235__$1;(statearr_17238_17267[(2)] = null);
(statearr_17238_17267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (4)))
{var inst_17199 = (state_17235[(7)]);var inst_17201 = (inst_17199 < cnt);var state_17235__$1 = state_17235;if(cljs.core.truth_(inst_17201))
{var statearr_17239_17268 = state_17235__$1;(statearr_17239_17268[(1)] = (6));
} else
{var statearr_17240_17269 = state_17235__$1;(statearr_17240_17269[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (15)))
{var inst_17231 = (state_17235[(2)]);var state_17235__$1 = state_17235;var statearr_17241_17270 = state_17235__$1;(statearr_17241_17270[(2)] = inst_17231);
(statearr_17241_17270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (13)))
{var inst_17224 = cljs.core.async.close_BANG_.call(null,out);var state_17235__$1 = state_17235;var statearr_17242_17271 = state_17235__$1;(statearr_17242_17271[(2)] = inst_17224);
(statearr_17242_17271[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (6)))
{var state_17235__$1 = state_17235;var statearr_17243_17272 = state_17235__$1;(statearr_17243_17272[(2)] = null);
(statearr_17243_17272[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (3)))
{var inst_17233 = (state_17235[(2)]);var state_17235__$1 = state_17235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17235__$1,inst_17233);
} else
{if((state_val_17236 === (12)))
{var inst_17221 = (state_17235[(8)]);var inst_17221__$1 = (state_17235[(2)]);var inst_17222 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17221__$1);var state_17235__$1 = (function (){var statearr_17244 = state_17235;(statearr_17244[(8)] = inst_17221__$1);
return statearr_17244;
})();if(cljs.core.truth_(inst_17222))
{var statearr_17245_17273 = state_17235__$1;(statearr_17245_17273[(1)] = (13));
} else
{var statearr_17246_17274 = state_17235__$1;(statearr_17246_17274[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (2)))
{var inst_17198 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17199 = (0);var state_17235__$1 = (function (){var statearr_17247 = state_17235;(statearr_17247[(9)] = inst_17198);
(statearr_17247[(7)] = inst_17199);
return statearr_17247;
})();var statearr_17248_17275 = state_17235__$1;(statearr_17248_17275[(2)] = null);
(statearr_17248_17275[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (11)))
{var inst_17199 = (state_17235[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17235,(10),Object,null,(9));var inst_17208 = chs__$1.call(null,inst_17199);var inst_17209 = done.call(null,inst_17199);var inst_17210 = cljs.core.async.take_BANG_.call(null,inst_17208,inst_17209);var state_17235__$1 = state_17235;var statearr_17249_17276 = state_17235__$1;(statearr_17249_17276[(2)] = inst_17210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17235__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (9)))
{var inst_17199 = (state_17235[(7)]);var inst_17212 = (state_17235[(2)]);var inst_17213 = (inst_17199 + (1));var inst_17199__$1 = inst_17213;var state_17235__$1 = (function (){var statearr_17250 = state_17235;(statearr_17250[(7)] = inst_17199__$1);
(statearr_17250[(10)] = inst_17212);
return statearr_17250;
})();var statearr_17251_17277 = state_17235__$1;(statearr_17251_17277[(2)] = null);
(statearr_17251_17277[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (5)))
{var inst_17219 = (state_17235[(2)]);var state_17235__$1 = (function (){var statearr_17252 = state_17235;(statearr_17252[(11)] = inst_17219);
return statearr_17252;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17235__$1,(12),dchan);
} else
{if((state_val_17236 === (14)))
{var inst_17221 = (state_17235[(8)]);var inst_17226 = cljs.core.apply.call(null,f,inst_17221);var state_17235__$1 = state_17235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17235__$1,(16),out,inst_17226);
} else
{if((state_val_17236 === (16)))
{var inst_17228 = (state_17235[(2)]);var state_17235__$1 = (function (){var statearr_17253 = state_17235;(statearr_17253[(12)] = inst_17228);
return statearr_17253;
})();var statearr_17254_17278 = state_17235__$1;(statearr_17254_17278[(2)] = null);
(statearr_17254_17278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (10)))
{var inst_17203 = (state_17235[(2)]);var inst_17204 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17235__$1 = (function (){var statearr_17255 = state_17235;(statearr_17255[(13)] = inst_17203);
return statearr_17255;
})();var statearr_17256_17279 = state_17235__$1;(statearr_17256_17279[(2)] = inst_17204);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17235__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17236 === (8)))
{var inst_17217 = (state_17235[(2)]);var state_17235__$1 = state_17235;var statearr_17257_17280 = state_17235__$1;(statearr_17257_17280[(2)] = inst_17217);
(statearr_17257_17280[(1)] = (5));
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
});})(c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5806__auto__,c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17261[(0)] = state_machine__5807__auto__);
(statearr_17261[(1)] = (1));
return statearr_17261;
});
var state_machine__5807__auto____1 = (function (state_17235){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17235);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17262){if((e17262 instanceof Object))
{var ex__5810__auto__ = e17262;var statearr_17263_17281 = state_17235;(statearr_17263_17281[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17235);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17262;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17282 = state_17235;
state_17235 = G__17282;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17235){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5823__auto__ = (function (){var statearr_17264 = f__5822__auto__.call(null);(statearr_17264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17265);
return statearr_17264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17265,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17390,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17390,out){
return (function (state_17366){var state_val_17367 = (state_17366[(1)]);if((state_val_17367 === (7)))
{var inst_17345 = (state_17366[(7)]);var inst_17346 = (state_17366[(8)]);var inst_17345__$1 = (state_17366[(2)]);var inst_17346__$1 = cljs.core.nth.call(null,inst_17345__$1,(0),null);var inst_17347 = cljs.core.nth.call(null,inst_17345__$1,(1),null);var inst_17348 = (inst_17346__$1 == null);var state_17366__$1 = (function (){var statearr_17368 = state_17366;(statearr_17368[(7)] = inst_17345__$1);
(statearr_17368[(8)] = inst_17346__$1);
(statearr_17368[(9)] = inst_17347);
return statearr_17368;
})();if(cljs.core.truth_(inst_17348))
{var statearr_17369_17391 = state_17366__$1;(statearr_17369_17391[(1)] = (8));
} else
{var statearr_17370_17392 = state_17366__$1;(statearr_17370_17392[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (1)))
{var inst_17337 = cljs.core.vec.call(null,chs);var inst_17338 = inst_17337;var state_17366__$1 = (function (){var statearr_17371 = state_17366;(statearr_17371[(10)] = inst_17338);
return statearr_17371;
})();var statearr_17372_17393 = state_17366__$1;(statearr_17372_17393[(2)] = null);
(statearr_17372_17393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (4)))
{var inst_17338 = (state_17366[(10)]);var state_17366__$1 = state_17366;return cljs.core.async.ioc_alts_BANG_.call(null,state_17366__$1,(7),inst_17338);
} else
{if((state_val_17367 === (6)))
{var inst_17362 = (state_17366[(2)]);var state_17366__$1 = state_17366;var statearr_17373_17394 = state_17366__$1;(statearr_17373_17394[(2)] = inst_17362);
(statearr_17373_17394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (3)))
{var inst_17364 = (state_17366[(2)]);var state_17366__$1 = state_17366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17366__$1,inst_17364);
} else
{if((state_val_17367 === (2)))
{var inst_17338 = (state_17366[(10)]);var inst_17340 = cljs.core.count.call(null,inst_17338);var inst_17341 = (inst_17340 > (0));var state_17366__$1 = state_17366;if(cljs.core.truth_(inst_17341))
{var statearr_17375_17395 = state_17366__$1;(statearr_17375_17395[(1)] = (4));
} else
{var statearr_17376_17396 = state_17366__$1;(statearr_17376_17396[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (11)))
{var inst_17338 = (state_17366[(10)]);var inst_17355 = (state_17366[(2)]);var tmp17374 = inst_17338;var inst_17338__$1 = tmp17374;var state_17366__$1 = (function (){var statearr_17377 = state_17366;(statearr_17377[(10)] = inst_17338__$1);
(statearr_17377[(11)] = inst_17355);
return statearr_17377;
})();var statearr_17378_17397 = state_17366__$1;(statearr_17378_17397[(2)] = null);
(statearr_17378_17397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (9)))
{var inst_17346 = (state_17366[(8)]);var state_17366__$1 = state_17366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17366__$1,(11),out,inst_17346);
} else
{if((state_val_17367 === (5)))
{var inst_17360 = cljs.core.async.close_BANG_.call(null,out);var state_17366__$1 = state_17366;var statearr_17379_17398 = state_17366__$1;(statearr_17379_17398[(2)] = inst_17360);
(statearr_17379_17398[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (10)))
{var inst_17358 = (state_17366[(2)]);var state_17366__$1 = state_17366;var statearr_17380_17399 = state_17366__$1;(statearr_17380_17399[(2)] = inst_17358);
(statearr_17380_17399[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17367 === (8)))
{var inst_17338 = (state_17366[(10)]);var inst_17345 = (state_17366[(7)]);var inst_17346 = (state_17366[(8)]);var inst_17347 = (state_17366[(9)]);var inst_17350 = (function (){var c = inst_17347;var v = inst_17346;var vec__17343 = inst_17345;var cs = inst_17338;return ((function (c,v,vec__17343,cs,inst_17338,inst_17345,inst_17346,inst_17347,state_val_17367,c__5821__auto___17390,out){
return (function (p1__17283_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17283_SHARP_);
});
;})(c,v,vec__17343,cs,inst_17338,inst_17345,inst_17346,inst_17347,state_val_17367,c__5821__auto___17390,out))
})();var inst_17351 = cljs.core.filterv.call(null,inst_17350,inst_17338);var inst_17338__$1 = inst_17351;var state_17366__$1 = (function (){var statearr_17381 = state_17366;(statearr_17381[(10)] = inst_17338__$1);
return statearr_17381;
})();var statearr_17382_17400 = state_17366__$1;(statearr_17382_17400[(2)] = null);
(statearr_17382_17400[(1)] = (2));
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
});})(c__5821__auto___17390,out))
;return ((function (switch__5806__auto__,c__5821__auto___17390,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17386 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17386[(0)] = state_machine__5807__auto__);
(statearr_17386[(1)] = (1));
return statearr_17386;
});
var state_machine__5807__auto____1 = (function (state_17366){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17387){if((e17387 instanceof Object))
{var ex__5810__auto__ = e17387;var statearr_17388_17401 = state_17366;(statearr_17388_17401[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17366);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17402 = state_17366;
state_17366 = G__17402;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17366){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17390,out))
})();var state__5823__auto__ = (function (){var statearr_17389 = f__5822__auto__.call(null);(statearr_17389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17390);
return statearr_17389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17390,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17495 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17495,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17495,out){
return (function (state_17472){var state_val_17473 = (state_17472[(1)]);if((state_val_17473 === (7)))
{var inst_17454 = (state_17472[(7)]);var inst_17454__$1 = (state_17472[(2)]);var inst_17455 = (inst_17454__$1 == null);var inst_17456 = cljs.core.not.call(null,inst_17455);var state_17472__$1 = (function (){var statearr_17474 = state_17472;(statearr_17474[(7)] = inst_17454__$1);
return statearr_17474;
})();if(inst_17456)
{var statearr_17475_17496 = state_17472__$1;(statearr_17475_17496[(1)] = (8));
} else
{var statearr_17476_17497 = state_17472__$1;(statearr_17476_17497[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (1)))
{var inst_17449 = (0);var state_17472__$1 = (function (){var statearr_17477 = state_17472;(statearr_17477[(8)] = inst_17449);
return statearr_17477;
})();var statearr_17478_17498 = state_17472__$1;(statearr_17478_17498[(2)] = null);
(statearr_17478_17498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (4)))
{var state_17472__$1 = state_17472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17472__$1,(7),ch);
} else
{if((state_val_17473 === (6)))
{var inst_17467 = (state_17472[(2)]);var state_17472__$1 = state_17472;var statearr_17479_17499 = state_17472__$1;(statearr_17479_17499[(2)] = inst_17467);
(statearr_17479_17499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (3)))
{var inst_17469 = (state_17472[(2)]);var inst_17470 = cljs.core.async.close_BANG_.call(null,out);var state_17472__$1 = (function (){var statearr_17480 = state_17472;(statearr_17480[(9)] = inst_17469);
return statearr_17480;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17472__$1,inst_17470);
} else
{if((state_val_17473 === (2)))
{var inst_17449 = (state_17472[(8)]);var inst_17451 = (inst_17449 < n);var state_17472__$1 = state_17472;if(cljs.core.truth_(inst_17451))
{var statearr_17481_17500 = state_17472__$1;(statearr_17481_17500[(1)] = (4));
} else
{var statearr_17482_17501 = state_17472__$1;(statearr_17482_17501[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (11)))
{var inst_17449 = (state_17472[(8)]);var inst_17459 = (state_17472[(2)]);var inst_17460 = (inst_17449 + (1));var inst_17449__$1 = inst_17460;var state_17472__$1 = (function (){var statearr_17483 = state_17472;(statearr_17483[(10)] = inst_17459);
(statearr_17483[(8)] = inst_17449__$1);
return statearr_17483;
})();var statearr_17484_17502 = state_17472__$1;(statearr_17484_17502[(2)] = null);
(statearr_17484_17502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (9)))
{var state_17472__$1 = state_17472;var statearr_17485_17503 = state_17472__$1;(statearr_17485_17503[(2)] = null);
(statearr_17485_17503[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (5)))
{var state_17472__$1 = state_17472;var statearr_17486_17504 = state_17472__$1;(statearr_17486_17504[(2)] = null);
(statearr_17486_17504[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (10)))
{var inst_17464 = (state_17472[(2)]);var state_17472__$1 = state_17472;var statearr_17487_17505 = state_17472__$1;(statearr_17487_17505[(2)] = inst_17464);
(statearr_17487_17505[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17473 === (8)))
{var inst_17454 = (state_17472[(7)]);var state_17472__$1 = state_17472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17472__$1,(11),out,inst_17454);
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
});})(c__5821__auto___17495,out))
;return ((function (switch__5806__auto__,c__5821__auto___17495,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17491 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17491[(0)] = state_machine__5807__auto__);
(statearr_17491[(1)] = (1));
return statearr_17491;
});
var state_machine__5807__auto____1 = (function (state_17472){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17472);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17492){if((e17492 instanceof Object))
{var ex__5810__auto__ = e17492;var statearr_17493_17506 = state_17472;(statearr_17493_17506[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17472);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17507 = state_17472;
state_17472 = G__17507;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17472){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17495,out))
})();var state__5823__auto__ = (function (){var statearr_17494 = f__5822__auto__.call(null);(statearr_17494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17495);
return statearr_17494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17495,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17515 = (function (ch,f,map_LT_,meta17516){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17516 = meta17516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17515.cljs$lang$type = true;
cljs.core.async.t17515.cljs$lang$ctorStr = "cljs.core.async/t17515";
cljs.core.async.t17515.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17515");
});
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17518 = (function (fn1,_,meta17516,ch,f,map_LT_,meta17519){
this.fn1 = fn1;
this._ = _;
this.meta17516 = meta17516;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17519 = meta17519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17518.cljs$lang$type = true;
cljs.core.async.t17518.cljs$lang$ctorStr = "cljs.core.async/t17518";
cljs.core.async.t17518.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17518");
});})(___$1))
;
cljs.core.async.t17518.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17508_SHARP_){return f1.call(null,(((p1__17508_SHARP_ == null))?null:self__.f.call(null,p1__17508_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17520){var self__ = this;
var _17520__$1 = this;return self__.meta17519;
});})(___$1))
;
cljs.core.async.t17518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17520,meta17519__$1){var self__ = this;
var _17520__$1 = this;return (new cljs.core.async.t17518(self__.fn1,self__._,self__.meta17516,self__.ch,self__.f,self__.map_LT_,meta17519__$1));
});})(___$1))
;
cljs.core.async.__GT_t17518 = ((function (___$1){
return (function __GT_t17518(fn1__$1,___$2,meta17516__$1,ch__$2,f__$2,map_LT___$2,meta17519){return (new cljs.core.async.t17518(fn1__$1,___$2,meta17516__$1,ch__$2,f__$2,map_LT___$2,meta17519));
});})(___$1))
;
}
return (new cljs.core.async.t17518(fn1,___$1,self__.meta17516,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17515.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17517){var self__ = this;
var _17517__$1 = this;return self__.meta17516;
});
cljs.core.async.t17515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17517,meta17516__$1){var self__ = this;
var _17517__$1 = this;return (new cljs.core.async.t17515(self__.ch,self__.f,self__.map_LT_,meta17516__$1));
});
cljs.core.async.__GT_t17515 = (function __GT_t17515(ch__$1,f__$1,map_LT___$1,meta17516){return (new cljs.core.async.t17515(ch__$1,f__$1,map_LT___$1,meta17516));
});
}
return (new cljs.core.async.t17515(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17524 = (function (ch,f,map_GT_,meta17525){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17525 = meta17525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17524.cljs$lang$type = true;
cljs.core.async.t17524.cljs$lang$ctorStr = "cljs.core.async/t17524";
cljs.core.async.t17524.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17524");
});
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17526){var self__ = this;
var _17526__$1 = this;return self__.meta17525;
});
cljs.core.async.t17524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17526,meta17525__$1){var self__ = this;
var _17526__$1 = this;return (new cljs.core.async.t17524(self__.ch,self__.f,self__.map_GT_,meta17525__$1));
});
cljs.core.async.__GT_t17524 = (function __GT_t17524(ch__$1,f__$1,map_GT___$1,meta17525){return (new cljs.core.async.t17524(ch__$1,f__$1,map_GT___$1,meta17525));
});
}
return (new cljs.core.async.t17524(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17530 = (function (ch,p,filter_GT_,meta17531){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17531 = meta17531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17530.cljs$lang$type = true;
cljs.core.async.t17530.cljs$lang$ctorStr = "cljs.core.async/t17530";
cljs.core.async.t17530.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t17530");
});
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17532){var self__ = this;
var _17532__$1 = this;return self__.meta17531;
});
cljs.core.async.t17530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17532,meta17531__$1){var self__ = this;
var _17532__$1 = this;return (new cljs.core.async.t17530(self__.ch,self__.p,self__.filter_GT_,meta17531__$1));
});
cljs.core.async.__GT_t17530 = (function __GT_t17530(ch__$1,p__$1,filter_GT___$1,meta17531){return (new cljs.core.async.t17530(ch__$1,p__$1,filter_GT___$1,meta17531));
});
}
return (new cljs.core.async.t17530(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17615,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17615,out){
return (function (state_17594){var state_val_17595 = (state_17594[(1)]);if((state_val_17595 === (7)))
{var inst_17590 = (state_17594[(2)]);var state_17594__$1 = state_17594;var statearr_17596_17616 = state_17594__$1;(statearr_17596_17616[(2)] = inst_17590);
(statearr_17596_17616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (1)))
{var state_17594__$1 = state_17594;var statearr_17597_17617 = state_17594__$1;(statearr_17597_17617[(2)] = null);
(statearr_17597_17617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (4)))
{var inst_17576 = (state_17594[(7)]);var inst_17576__$1 = (state_17594[(2)]);var inst_17577 = (inst_17576__$1 == null);var state_17594__$1 = (function (){var statearr_17598 = state_17594;(statearr_17598[(7)] = inst_17576__$1);
return statearr_17598;
})();if(cljs.core.truth_(inst_17577))
{var statearr_17599_17618 = state_17594__$1;(statearr_17599_17618[(1)] = (5));
} else
{var statearr_17600_17619 = state_17594__$1;(statearr_17600_17619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (6)))
{var inst_17576 = (state_17594[(7)]);var inst_17581 = p.call(null,inst_17576);var state_17594__$1 = state_17594;if(cljs.core.truth_(inst_17581))
{var statearr_17601_17620 = state_17594__$1;(statearr_17601_17620[(1)] = (8));
} else
{var statearr_17602_17621 = state_17594__$1;(statearr_17602_17621[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (3)))
{var inst_17592 = (state_17594[(2)]);var state_17594__$1 = state_17594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17594__$1,inst_17592);
} else
{if((state_val_17595 === (2)))
{var state_17594__$1 = state_17594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17594__$1,(4),ch);
} else
{if((state_val_17595 === (11)))
{var inst_17584 = (state_17594[(2)]);var state_17594__$1 = state_17594;var statearr_17603_17622 = state_17594__$1;(statearr_17603_17622[(2)] = inst_17584);
(statearr_17603_17622[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (9)))
{var state_17594__$1 = state_17594;var statearr_17604_17623 = state_17594__$1;(statearr_17604_17623[(2)] = null);
(statearr_17604_17623[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (5)))
{var inst_17579 = cljs.core.async.close_BANG_.call(null,out);var state_17594__$1 = state_17594;var statearr_17605_17624 = state_17594__$1;(statearr_17605_17624[(2)] = inst_17579);
(statearr_17605_17624[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (10)))
{var inst_17587 = (state_17594[(2)]);var state_17594__$1 = (function (){var statearr_17606 = state_17594;(statearr_17606[(8)] = inst_17587);
return statearr_17606;
})();var statearr_17607_17625 = state_17594__$1;(statearr_17607_17625[(2)] = null);
(statearr_17607_17625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17595 === (8)))
{var inst_17576 = (state_17594[(7)]);var state_17594__$1 = state_17594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17594__$1,(11),out,inst_17576);
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
});})(c__5821__auto___17615,out))
;return ((function (switch__5806__auto__,c__5821__auto___17615,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17611 = [null,null,null,null,null,null,null,null,null];(statearr_17611[(0)] = state_machine__5807__auto__);
(statearr_17611[(1)] = (1));
return statearr_17611;
});
var state_machine__5807__auto____1 = (function (state_17594){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17594);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17612){if((e17612 instanceof Object))
{var ex__5810__auto__ = e17612;var statearr_17613_17626 = state_17594;(statearr_17613_17626[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17627 = state_17594;
state_17594 = G__17627;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17594){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17615,out))
})();var state__5823__auto__ = (function (){var statearr_17614 = f__5822__auto__.call(null);(statearr_17614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17615);
return statearr_17614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17615,out))
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
return (function (state_17793){var state_val_17794 = (state_17793[(1)]);if((state_val_17794 === (7)))
{var inst_17789 = (state_17793[(2)]);var state_17793__$1 = state_17793;var statearr_17795_17836 = state_17793__$1;(statearr_17795_17836[(2)] = inst_17789);
(statearr_17795_17836[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (20)))
{var inst_17759 = (state_17793[(7)]);var inst_17770 = (state_17793[(2)]);var inst_17771 = cljs.core.next.call(null,inst_17759);var inst_17745 = inst_17771;var inst_17746 = null;var inst_17747 = (0);var inst_17748 = (0);var state_17793__$1 = (function (){var statearr_17796 = state_17793;(statearr_17796[(8)] = inst_17747);
(statearr_17796[(9)] = inst_17770);
(statearr_17796[(10)] = inst_17745);
(statearr_17796[(11)] = inst_17746);
(statearr_17796[(12)] = inst_17748);
return statearr_17796;
})();var statearr_17797_17837 = state_17793__$1;(statearr_17797_17837[(2)] = null);
(statearr_17797_17837[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (1)))
{var state_17793__$1 = state_17793;var statearr_17798_17838 = state_17793__$1;(statearr_17798_17838[(2)] = null);
(statearr_17798_17838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (4)))
{var inst_17734 = (state_17793[(13)]);var inst_17734__$1 = (state_17793[(2)]);var inst_17735 = (inst_17734__$1 == null);var state_17793__$1 = (function (){var statearr_17799 = state_17793;(statearr_17799[(13)] = inst_17734__$1);
return statearr_17799;
})();if(cljs.core.truth_(inst_17735))
{var statearr_17800_17839 = state_17793__$1;(statearr_17800_17839[(1)] = (5));
} else
{var statearr_17801_17840 = state_17793__$1;(statearr_17801_17840[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (15)))
{var state_17793__$1 = state_17793;var statearr_17805_17841 = state_17793__$1;(statearr_17805_17841[(2)] = null);
(statearr_17805_17841[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (21)))
{var state_17793__$1 = state_17793;var statearr_17806_17842 = state_17793__$1;(statearr_17806_17842[(2)] = null);
(statearr_17806_17842[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (13)))
{var inst_17747 = (state_17793[(8)]);var inst_17745 = (state_17793[(10)]);var inst_17746 = (state_17793[(11)]);var inst_17748 = (state_17793[(12)]);var inst_17755 = (state_17793[(2)]);var inst_17756 = (inst_17748 + (1));var tmp17802 = inst_17747;var tmp17803 = inst_17745;var tmp17804 = inst_17746;var inst_17745__$1 = tmp17803;var inst_17746__$1 = tmp17804;var inst_17747__$1 = tmp17802;var inst_17748__$1 = inst_17756;var state_17793__$1 = (function (){var statearr_17807 = state_17793;(statearr_17807[(8)] = inst_17747__$1);
(statearr_17807[(14)] = inst_17755);
(statearr_17807[(10)] = inst_17745__$1);
(statearr_17807[(11)] = inst_17746__$1);
(statearr_17807[(12)] = inst_17748__$1);
return statearr_17807;
})();var statearr_17808_17843 = state_17793__$1;(statearr_17808_17843[(2)] = null);
(statearr_17808_17843[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (22)))
{var state_17793__$1 = state_17793;var statearr_17809_17844 = state_17793__$1;(statearr_17809_17844[(2)] = null);
(statearr_17809_17844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (6)))
{var inst_17734 = (state_17793[(13)]);var inst_17743 = f.call(null,inst_17734);var inst_17744 = cljs.core.seq.call(null,inst_17743);var inst_17745 = inst_17744;var inst_17746 = null;var inst_17747 = (0);var inst_17748 = (0);var state_17793__$1 = (function (){var statearr_17810 = state_17793;(statearr_17810[(8)] = inst_17747);
(statearr_17810[(10)] = inst_17745);
(statearr_17810[(11)] = inst_17746);
(statearr_17810[(12)] = inst_17748);
return statearr_17810;
})();var statearr_17811_17845 = state_17793__$1;(statearr_17811_17845[(2)] = null);
(statearr_17811_17845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (17)))
{var inst_17759 = (state_17793[(7)]);var inst_17763 = cljs.core.chunk_first.call(null,inst_17759);var inst_17764 = cljs.core.chunk_rest.call(null,inst_17759);var inst_17765 = cljs.core.count.call(null,inst_17763);var inst_17745 = inst_17764;var inst_17746 = inst_17763;var inst_17747 = inst_17765;var inst_17748 = (0);var state_17793__$1 = (function (){var statearr_17812 = state_17793;(statearr_17812[(8)] = inst_17747);
(statearr_17812[(10)] = inst_17745);
(statearr_17812[(11)] = inst_17746);
(statearr_17812[(12)] = inst_17748);
return statearr_17812;
})();var statearr_17813_17846 = state_17793__$1;(statearr_17813_17846[(2)] = null);
(statearr_17813_17846[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (3)))
{var inst_17791 = (state_17793[(2)]);var state_17793__$1 = state_17793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17793__$1,inst_17791);
} else
{if((state_val_17794 === (12)))
{var inst_17779 = (state_17793[(2)]);var state_17793__$1 = state_17793;var statearr_17814_17847 = state_17793__$1;(statearr_17814_17847[(2)] = inst_17779);
(statearr_17814_17847[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (2)))
{var state_17793__$1 = state_17793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17793__$1,(4),in$);
} else
{if((state_val_17794 === (23)))
{var inst_17787 = (state_17793[(2)]);var state_17793__$1 = state_17793;var statearr_17815_17848 = state_17793__$1;(statearr_17815_17848[(2)] = inst_17787);
(statearr_17815_17848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (19)))
{var inst_17774 = (state_17793[(2)]);var state_17793__$1 = state_17793;var statearr_17816_17849 = state_17793__$1;(statearr_17816_17849[(2)] = inst_17774);
(statearr_17816_17849[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (11)))
{var inst_17745 = (state_17793[(10)]);var inst_17759 = (state_17793[(7)]);var inst_17759__$1 = cljs.core.seq.call(null,inst_17745);var state_17793__$1 = (function (){var statearr_17817 = state_17793;(statearr_17817[(7)] = inst_17759__$1);
return statearr_17817;
})();if(inst_17759__$1)
{var statearr_17818_17850 = state_17793__$1;(statearr_17818_17850[(1)] = (14));
} else
{var statearr_17819_17851 = state_17793__$1;(statearr_17819_17851[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (9)))
{var inst_17781 = (state_17793[(2)]);var inst_17782 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17793__$1 = (function (){var statearr_17820 = state_17793;(statearr_17820[(15)] = inst_17781);
return statearr_17820;
})();if(cljs.core.truth_(inst_17782))
{var statearr_17821_17852 = state_17793__$1;(statearr_17821_17852[(1)] = (21));
} else
{var statearr_17822_17853 = state_17793__$1;(statearr_17822_17853[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (5)))
{var inst_17737 = cljs.core.async.close_BANG_.call(null,out);var state_17793__$1 = state_17793;var statearr_17823_17854 = state_17793__$1;(statearr_17823_17854[(2)] = inst_17737);
(statearr_17823_17854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (14)))
{var inst_17759 = (state_17793[(7)]);var inst_17761 = cljs.core.chunked_seq_QMARK_.call(null,inst_17759);var state_17793__$1 = state_17793;if(inst_17761)
{var statearr_17824_17855 = state_17793__$1;(statearr_17824_17855[(1)] = (17));
} else
{var statearr_17825_17856 = state_17793__$1;(statearr_17825_17856[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (16)))
{var inst_17777 = (state_17793[(2)]);var state_17793__$1 = state_17793;var statearr_17826_17857 = state_17793__$1;(statearr_17826_17857[(2)] = inst_17777);
(statearr_17826_17857[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17794 === (10)))
{var inst_17746 = (state_17793[(11)]);var inst_17748 = (state_17793[(12)]);var inst_17753 = cljs.core._nth.call(null,inst_17746,inst_17748);var state_17793__$1 = state_17793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17793__$1,(13),out,inst_17753);
} else
{if((state_val_17794 === (18)))
{var inst_17759 = (state_17793[(7)]);var inst_17768 = cljs.core.first.call(null,inst_17759);var state_17793__$1 = state_17793;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17793__$1,(20),out,inst_17768);
} else
{if((state_val_17794 === (8)))
{var inst_17747 = (state_17793[(8)]);var inst_17748 = (state_17793[(12)]);var inst_17750 = (inst_17748 < inst_17747);var inst_17751 = inst_17750;var state_17793__$1 = state_17793;if(cljs.core.truth_(inst_17751))
{var statearr_17827_17858 = state_17793__$1;(statearr_17827_17858[(1)] = (10));
} else
{var statearr_17828_17859 = state_17793__$1;(statearr_17828_17859[(1)] = (11));
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
var state_machine__5807__auto____0 = (function (){var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17832[(0)] = state_machine__5807__auto__);
(statearr_17832[(1)] = (1));
return statearr_17832;
});
var state_machine__5807__auto____1 = (function (state_17793){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17793);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17833){if((e17833 instanceof Object))
{var ex__5810__auto__ = e17833;var statearr_17834_17860 = state_17793;(statearr_17834_17860[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17833;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17861 = state_17793;
state_17793 = G__17861;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto__))
})();var state__5823__auto__ = (function (){var statearr_17835 = f__5822__auto__.call(null);(statearr_17835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto__);
return statearr_17835;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___17958 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___17958,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___17958,out){
return (function (state_17933){var state_val_17934 = (state_17933[(1)]);if((state_val_17934 === (7)))
{var inst_17928 = (state_17933[(2)]);var state_17933__$1 = state_17933;var statearr_17935_17959 = state_17933__$1;(statearr_17935_17959[(2)] = inst_17928);
(statearr_17935_17959[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (1)))
{var inst_17910 = null;var state_17933__$1 = (function (){var statearr_17936 = state_17933;(statearr_17936[(7)] = inst_17910);
return statearr_17936;
})();var statearr_17937_17960 = state_17933__$1;(statearr_17937_17960[(2)] = null);
(statearr_17937_17960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (4)))
{var inst_17913 = (state_17933[(8)]);var inst_17913__$1 = (state_17933[(2)]);var inst_17914 = (inst_17913__$1 == null);var inst_17915 = cljs.core.not.call(null,inst_17914);var state_17933__$1 = (function (){var statearr_17938 = state_17933;(statearr_17938[(8)] = inst_17913__$1);
return statearr_17938;
})();if(inst_17915)
{var statearr_17939_17961 = state_17933__$1;(statearr_17939_17961[(1)] = (5));
} else
{var statearr_17940_17962 = state_17933__$1;(statearr_17940_17962[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (6)))
{var state_17933__$1 = state_17933;var statearr_17941_17963 = state_17933__$1;(statearr_17941_17963[(2)] = null);
(statearr_17941_17963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (3)))
{var inst_17930 = (state_17933[(2)]);var inst_17931 = cljs.core.async.close_BANG_.call(null,out);var state_17933__$1 = (function (){var statearr_17942 = state_17933;(statearr_17942[(9)] = inst_17930);
return statearr_17942;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17933__$1,inst_17931);
} else
{if((state_val_17934 === (2)))
{var state_17933__$1 = state_17933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17933__$1,(4),ch);
} else
{if((state_val_17934 === (11)))
{var inst_17913 = (state_17933[(8)]);var inst_17922 = (state_17933[(2)]);var inst_17910 = inst_17913;var state_17933__$1 = (function (){var statearr_17943 = state_17933;(statearr_17943[(7)] = inst_17910);
(statearr_17943[(10)] = inst_17922);
return statearr_17943;
})();var statearr_17944_17964 = state_17933__$1;(statearr_17944_17964[(2)] = null);
(statearr_17944_17964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (9)))
{var inst_17913 = (state_17933[(8)]);var state_17933__$1 = state_17933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17933__$1,(11),out,inst_17913);
} else
{if((state_val_17934 === (5)))
{var inst_17910 = (state_17933[(7)]);var inst_17913 = (state_17933[(8)]);var inst_17917 = cljs.core._EQ_.call(null,inst_17913,inst_17910);var state_17933__$1 = state_17933;if(inst_17917)
{var statearr_17946_17965 = state_17933__$1;(statearr_17946_17965[(1)] = (8));
} else
{var statearr_17947_17966 = state_17933__$1;(statearr_17947_17966[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (10)))
{var inst_17925 = (state_17933[(2)]);var state_17933__$1 = state_17933;var statearr_17948_17967 = state_17933__$1;(statearr_17948_17967[(2)] = inst_17925);
(statearr_17948_17967[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17934 === (8)))
{var inst_17910 = (state_17933[(7)]);var tmp17945 = inst_17910;var inst_17910__$1 = tmp17945;var state_17933__$1 = (function (){var statearr_17949 = state_17933;(statearr_17949[(7)] = inst_17910__$1);
return statearr_17949;
})();var statearr_17950_17968 = state_17933__$1;(statearr_17950_17968[(2)] = null);
(statearr_17950_17968[(1)] = (2));
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
});})(c__5821__auto___17958,out))
;return ((function (switch__5806__auto__,c__5821__auto___17958,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_17954 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17954[(0)] = state_machine__5807__auto__);
(statearr_17954[(1)] = (1));
return statearr_17954;
});
var state_machine__5807__auto____1 = (function (state_17933){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_17933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e17955){if((e17955 instanceof Object))
{var ex__5810__auto__ = e17955;var statearr_17956_17969 = state_17933;(statearr_17956_17969[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17970 = state_17933;
state_17933 = G__17970;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_17933){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_17933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___17958,out))
})();var state__5823__auto__ = (function (){var statearr_17957 = f__5822__auto__.call(null);(statearr_17957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___17958);
return statearr_17957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___17958,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___18105 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___18105,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___18105,out){
return (function (state_18075){var state_val_18076 = (state_18075[(1)]);if((state_val_18076 === (7)))
{var inst_18071 = (state_18075[(2)]);var state_18075__$1 = state_18075;var statearr_18077_18106 = state_18075__$1;(statearr_18077_18106[(2)] = inst_18071);
(statearr_18077_18106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (1)))
{var inst_18038 = (new Array(n));var inst_18039 = inst_18038;var inst_18040 = (0);var state_18075__$1 = (function (){var statearr_18078 = state_18075;(statearr_18078[(7)] = inst_18040);
(statearr_18078[(8)] = inst_18039);
return statearr_18078;
})();var statearr_18079_18107 = state_18075__$1;(statearr_18079_18107[(2)] = null);
(statearr_18079_18107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (4)))
{var inst_18043 = (state_18075[(9)]);var inst_18043__$1 = (state_18075[(2)]);var inst_18044 = (inst_18043__$1 == null);var inst_18045 = cljs.core.not.call(null,inst_18044);var state_18075__$1 = (function (){var statearr_18080 = state_18075;(statearr_18080[(9)] = inst_18043__$1);
return statearr_18080;
})();if(inst_18045)
{var statearr_18081_18108 = state_18075__$1;(statearr_18081_18108[(1)] = (5));
} else
{var statearr_18082_18109 = state_18075__$1;(statearr_18082_18109[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (15)))
{var inst_18065 = (state_18075[(2)]);var state_18075__$1 = state_18075;var statearr_18083_18110 = state_18075__$1;(statearr_18083_18110[(2)] = inst_18065);
(statearr_18083_18110[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (13)))
{var state_18075__$1 = state_18075;var statearr_18084_18111 = state_18075__$1;(statearr_18084_18111[(2)] = null);
(statearr_18084_18111[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (6)))
{var inst_18040 = (state_18075[(7)]);var inst_18061 = (inst_18040 > (0));var state_18075__$1 = state_18075;if(cljs.core.truth_(inst_18061))
{var statearr_18085_18112 = state_18075__$1;(statearr_18085_18112[(1)] = (12));
} else
{var statearr_18086_18113 = state_18075__$1;(statearr_18086_18113[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (3)))
{var inst_18073 = (state_18075[(2)]);var state_18075__$1 = state_18075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18075__$1,inst_18073);
} else
{if((state_val_18076 === (12)))
{var inst_18039 = (state_18075[(8)]);var inst_18063 = cljs.core.vec.call(null,inst_18039);var state_18075__$1 = state_18075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18075__$1,(15),out,inst_18063);
} else
{if((state_val_18076 === (2)))
{var state_18075__$1 = state_18075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18075__$1,(4),ch);
} else
{if((state_val_18076 === (11)))
{var inst_18055 = (state_18075[(2)]);var inst_18056 = (new Array(n));var inst_18039 = inst_18056;var inst_18040 = (0);var state_18075__$1 = (function (){var statearr_18087 = state_18075;(statearr_18087[(7)] = inst_18040);
(statearr_18087[(8)] = inst_18039);
(statearr_18087[(10)] = inst_18055);
return statearr_18087;
})();var statearr_18088_18114 = state_18075__$1;(statearr_18088_18114[(2)] = null);
(statearr_18088_18114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (9)))
{var inst_18039 = (state_18075[(8)]);var inst_18053 = cljs.core.vec.call(null,inst_18039);var state_18075__$1 = state_18075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18075__$1,(11),out,inst_18053);
} else
{if((state_val_18076 === (5)))
{var inst_18043 = (state_18075[(9)]);var inst_18040 = (state_18075[(7)]);var inst_18048 = (state_18075[(11)]);var inst_18039 = (state_18075[(8)]);var inst_18047 = (inst_18039[inst_18040] = inst_18043);var inst_18048__$1 = (inst_18040 + (1));var inst_18049 = (inst_18048__$1 < n);var state_18075__$1 = (function (){var statearr_18089 = state_18075;(statearr_18089[(12)] = inst_18047);
(statearr_18089[(11)] = inst_18048__$1);
return statearr_18089;
})();if(cljs.core.truth_(inst_18049))
{var statearr_18090_18115 = state_18075__$1;(statearr_18090_18115[(1)] = (8));
} else
{var statearr_18091_18116 = state_18075__$1;(statearr_18091_18116[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (14)))
{var inst_18068 = (state_18075[(2)]);var inst_18069 = cljs.core.async.close_BANG_.call(null,out);var state_18075__$1 = (function (){var statearr_18093 = state_18075;(statearr_18093[(13)] = inst_18068);
return statearr_18093;
})();var statearr_18094_18117 = state_18075__$1;(statearr_18094_18117[(2)] = inst_18069);
(statearr_18094_18117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (10)))
{var inst_18059 = (state_18075[(2)]);var state_18075__$1 = state_18075;var statearr_18095_18118 = state_18075__$1;(statearr_18095_18118[(2)] = inst_18059);
(statearr_18095_18118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18076 === (8)))
{var inst_18048 = (state_18075[(11)]);var inst_18039 = (state_18075[(8)]);var tmp18092 = inst_18039;var inst_18039__$1 = tmp18092;var inst_18040 = inst_18048;var state_18075__$1 = (function (){var statearr_18096 = state_18075;(statearr_18096[(7)] = inst_18040);
(statearr_18096[(8)] = inst_18039__$1);
return statearr_18096;
})();var statearr_18097_18119 = state_18075__$1;(statearr_18097_18119[(2)] = null);
(statearr_18097_18119[(1)] = (2));
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
});})(c__5821__auto___18105,out))
;return ((function (switch__5806__auto__,c__5821__auto___18105,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_18101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18101[(0)] = state_machine__5807__auto__);
(statearr_18101[(1)] = (1));
return statearr_18101;
});
var state_machine__5807__auto____1 = (function (state_18075){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_18075);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e18102){if((e18102 instanceof Object))
{var ex__5810__auto__ = e18102;var statearr_18103_18120 = state_18075;(statearr_18103_18120[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18102;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18121 = state_18075;
state_18075 = G__18121;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_18075){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_18075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___18105,out))
})();var state__5823__auto__ = (function (){var statearr_18104 = f__5822__auto__.call(null);(statearr_18104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___18105);
return statearr_18104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___18105,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5821__auto___18264 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5821__auto___18264,out){
return (function (){var f__5822__auto__ = (function (){var switch__5806__auto__ = ((function (c__5821__auto___18264,out){
return (function (state_18234){var state_val_18235 = (state_18234[(1)]);if((state_val_18235 === (7)))
{var inst_18230 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18236_18265 = state_18234__$1;(statearr_18236_18265[(2)] = inst_18230);
(statearr_18236_18265[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (1)))
{var inst_18193 = [];var inst_18194 = inst_18193;var inst_18195 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18234__$1 = (function (){var statearr_18237 = state_18234;(statearr_18237[(7)] = inst_18194);
(statearr_18237[(8)] = inst_18195);
return statearr_18237;
})();var statearr_18238_18266 = state_18234__$1;(statearr_18238_18266[(2)] = null);
(statearr_18238_18266[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (4)))
{var inst_18198 = (state_18234[(9)]);var inst_18198__$1 = (state_18234[(2)]);var inst_18199 = (inst_18198__$1 == null);var inst_18200 = cljs.core.not.call(null,inst_18199);var state_18234__$1 = (function (){var statearr_18239 = state_18234;(statearr_18239[(9)] = inst_18198__$1);
return statearr_18239;
})();if(inst_18200)
{var statearr_18240_18267 = state_18234__$1;(statearr_18240_18267[(1)] = (5));
} else
{var statearr_18241_18268 = state_18234__$1;(statearr_18241_18268[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (15)))
{var inst_18224 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18242_18269 = state_18234__$1;(statearr_18242_18269[(2)] = inst_18224);
(statearr_18242_18269[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (13)))
{var state_18234__$1 = state_18234;var statearr_18243_18270 = state_18234__$1;(statearr_18243_18270[(2)] = null);
(statearr_18243_18270[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (6)))
{var inst_18194 = (state_18234[(7)]);var inst_18219 = inst_18194.length;var inst_18220 = (inst_18219 > (0));var state_18234__$1 = state_18234;if(cljs.core.truth_(inst_18220))
{var statearr_18244_18271 = state_18234__$1;(statearr_18244_18271[(1)] = (12));
} else
{var statearr_18245_18272 = state_18234__$1;(statearr_18245_18272[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (3)))
{var inst_18232 = (state_18234[(2)]);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18234__$1,inst_18232);
} else
{if((state_val_18235 === (12)))
{var inst_18194 = (state_18234[(7)]);var inst_18222 = cljs.core.vec.call(null,inst_18194);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18234__$1,(15),out,inst_18222);
} else
{if((state_val_18235 === (2)))
{var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18234__$1,(4),ch);
} else
{if((state_val_18235 === (11)))
{var inst_18198 = (state_18234[(9)]);var inst_18202 = (state_18234[(10)]);var inst_18212 = (state_18234[(2)]);var inst_18213 = [];var inst_18214 = inst_18213.push(inst_18198);var inst_18194 = inst_18213;var inst_18195 = inst_18202;var state_18234__$1 = (function (){var statearr_18246 = state_18234;(statearr_18246[(11)] = inst_18212);
(statearr_18246[(7)] = inst_18194);
(statearr_18246[(12)] = inst_18214);
(statearr_18246[(8)] = inst_18195);
return statearr_18246;
})();var statearr_18247_18273 = state_18234__$1;(statearr_18247_18273[(2)] = null);
(statearr_18247_18273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (9)))
{var inst_18194 = (state_18234[(7)]);var inst_18210 = cljs.core.vec.call(null,inst_18194);var state_18234__$1 = state_18234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18234__$1,(11),out,inst_18210);
} else
{if((state_val_18235 === (5)))
{var inst_18198 = (state_18234[(9)]);var inst_18202 = (state_18234[(10)]);var inst_18195 = (state_18234[(8)]);var inst_18202__$1 = f.call(null,inst_18198);var inst_18203 = cljs.core._EQ_.call(null,inst_18202__$1,inst_18195);var inst_18204 = cljs.core.keyword_identical_QMARK_.call(null,inst_18195,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18205 = (inst_18203) || (inst_18204);var state_18234__$1 = (function (){var statearr_18248 = state_18234;(statearr_18248[(10)] = inst_18202__$1);
return statearr_18248;
})();if(cljs.core.truth_(inst_18205))
{var statearr_18249_18274 = state_18234__$1;(statearr_18249_18274[(1)] = (8));
} else
{var statearr_18250_18275 = state_18234__$1;(statearr_18250_18275[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (14)))
{var inst_18227 = (state_18234[(2)]);var inst_18228 = cljs.core.async.close_BANG_.call(null,out);var state_18234__$1 = (function (){var statearr_18252 = state_18234;(statearr_18252[(13)] = inst_18227);
return statearr_18252;
})();var statearr_18253_18276 = state_18234__$1;(statearr_18253_18276[(2)] = inst_18228);
(statearr_18253_18276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (10)))
{var inst_18217 = (state_18234[(2)]);var state_18234__$1 = state_18234;var statearr_18254_18277 = state_18234__$1;(statearr_18254_18277[(2)] = inst_18217);
(statearr_18254_18277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18235 === (8)))
{var inst_18194 = (state_18234[(7)]);var inst_18198 = (state_18234[(9)]);var inst_18202 = (state_18234[(10)]);var inst_18207 = inst_18194.push(inst_18198);var tmp18251 = inst_18194;var inst_18194__$1 = tmp18251;var inst_18195 = inst_18202;var state_18234__$1 = (function (){var statearr_18255 = state_18234;(statearr_18255[(7)] = inst_18194__$1);
(statearr_18255[(14)] = inst_18207);
(statearr_18255[(8)] = inst_18195);
return statearr_18255;
})();var statearr_18256_18278 = state_18234__$1;(statearr_18256_18278[(2)] = null);
(statearr_18256_18278[(1)] = (2));
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
});})(c__5821__auto___18264,out))
;return ((function (switch__5806__auto__,c__5821__auto___18264,out){
return (function() {
var state_machine__5807__auto__ = null;
var state_machine__5807__auto____0 = (function (){var statearr_18260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18260[(0)] = state_machine__5807__auto__);
(statearr_18260[(1)] = (1));
return statearr_18260;
});
var state_machine__5807__auto____1 = (function (state_18234){while(true){
var ret_value__5808__auto__ = (function (){try{while(true){
var result__5809__auto__ = switch__5806__auto__.call(null,state_18234);if(cljs.core.keyword_identical_QMARK_.call(null,result__5809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5809__auto__;
}
break;
}
}catch (e18261){if((e18261 instanceof Object))
{var ex__5810__auto__ = e18261;var statearr_18262_18279 = state_18234;(statearr_18262_18279[(5)] = ex__5810__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18261;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5808__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18280 = state_18234;
state_18234 = G__18280;
continue;
}
} else
{return ret_value__5808__auto__;
}
break;
}
});
state_machine__5807__auto__ = function(state_18234){
switch(arguments.length){
case 0:
return state_machine__5807__auto____0.call(this);
case 1:
return state_machine__5807__auto____1.call(this,state_18234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5807__auto____0;
state_machine__5807__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5807__auto____1;
return state_machine__5807__auto__;
})()
;})(switch__5806__auto__,c__5821__auto___18264,out))
})();var state__5823__auto__ = (function (){var statearr_18263 = f__5822__auto__.call(null);(statearr_18263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5821__auto___18264);
return statearr_18263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5823__auto__);
});})(c__5821__auto___18264,out))
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
