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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19206 = (function (f,fn_handler,meta19207){
this.f = f;
this.fn_handler = fn_handler;
this.meta19207 = meta19207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19206.cljs$lang$type = true;
cljs.core.async.t19206.cljs$lang$ctorStr = "cljs.core.async/t19206";
cljs.core.async.t19206.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t19206");
});
cljs.core.async.t19206.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19208){var self__ = this;
var _19208__$1 = this;return self__.meta19207;
});
cljs.core.async.t19206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19208,meta19207__$1){var self__ = this;
var _19208__$1 = this;return (new cljs.core.async.t19206(self__.f,self__.fn_handler,meta19207__$1));
});
cljs.core.async.__GT_t19206 = (function __GT_t19206(f__$1,fn_handler__$1,meta19207){return (new cljs.core.async.t19206(f__$1,fn_handler__$1,meta19207));
});
}
return (new cljs.core.async.t19206(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19210 = buff;if(G__19210)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__19210.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19210.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19210);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19210);
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
{var val_19211 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19211);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19211,ret){
return (function (){return fn1.call(null,val_19211);
});})(val_19211,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___19212 = n;var x_19213 = (0);while(true){
if((x_19213 < n__4506__auto___19212))
{(a[x_19213] = (0));
{
var G__19214 = (x_19213 + (1));
x_19213 = G__19214;
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
var G__19215 = (i + (1));
i = G__19215;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19219 = (function (flag,alt_flag,meta19220){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19220 = meta19220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19219.cljs$lang$type = true;
cljs.core.async.t19219.cljs$lang$ctorStr = "cljs.core.async/t19219";
cljs.core.async.t19219.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t19219");
});})(flag))
;
cljs.core.async.t19219.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19221){var self__ = this;
var _19221__$1 = this;return self__.meta19220;
});})(flag))
;
cljs.core.async.t19219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19221,meta19220__$1){var self__ = this;
var _19221__$1 = this;return (new cljs.core.async.t19219(self__.flag,self__.alt_flag,meta19220__$1));
});})(flag))
;
cljs.core.async.__GT_t19219 = ((function (flag){
return (function __GT_t19219(flag__$1,alt_flag__$1,meta19220){return (new cljs.core.async.t19219(flag__$1,alt_flag__$1,meta19220));
});})(flag))
;
}
return (new cljs.core.async.t19219(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19225 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19225 = (function (cb,flag,alt_handler,meta19226){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19226 = meta19226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19225.cljs$lang$type = true;
cljs.core.async.t19225.cljs$lang$ctorStr = "cljs.core.async/t19225";
cljs.core.async.t19225.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t19225");
});
cljs.core.async.t19225.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19227){var self__ = this;
var _19227__$1 = this;return self__.meta19226;
});
cljs.core.async.t19225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19227,meta19226__$1){var self__ = this;
var _19227__$1 = this;return (new cljs.core.async.t19225(self__.cb,self__.flag,self__.alt_handler,meta19226__$1));
});
cljs.core.async.__GT_t19225 = (function __GT_t19225(cb__$1,flag__$1,alt_handler__$1,meta19226){return (new cljs.core.async.t19225(cb__$1,flag__$1,alt_handler__$1,meta19226));
});
}
return (new cljs.core.async.t19225(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19228_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19228_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19229_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19229_SHARP_,port], null));
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
var G__19230 = (i + (1));
i = G__19230;
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
var alts_BANG___delegate = function (ports,p__19231){var map__19233 = p__19231;var map__19233__$1 = ((cljs.core.seq_QMARK_.call(null,map__19233))?cljs.core.apply.call(null,cljs.core.hash_map,map__19233):map__19233);var opts = map__19233__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19231 = null;if (arguments.length > 1) {
  p__19231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19231);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19234){
var ports = cljs.core.first(arglist__19234);
var p__19231 = cljs.core.rest(arglist__19234);
return alts_BANG___delegate(ports,p__19231);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___19329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19329){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19329){
return (function (state_19305){var state_val_19306 = (state_19305[(1)]);if((state_val_19306 === (7)))
{var inst_19301 = (state_19305[(2)]);var state_19305__$1 = state_19305;var statearr_19307_19330 = state_19305__$1;(statearr_19307_19330[(2)] = inst_19301);
(statearr_19307_19330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (1)))
{var state_19305__$1 = state_19305;var statearr_19308_19331 = state_19305__$1;(statearr_19308_19331[(2)] = null);
(statearr_19308_19331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (4)))
{var inst_19284 = (state_19305[(7)]);var inst_19284__$1 = (state_19305[(2)]);var inst_19285 = (inst_19284__$1 == null);var state_19305__$1 = (function (){var statearr_19309 = state_19305;(statearr_19309[(7)] = inst_19284__$1);
return statearr_19309;
})();if(cljs.core.truth_(inst_19285))
{var statearr_19310_19332 = state_19305__$1;(statearr_19310_19332[(1)] = (5));
} else
{var statearr_19311_19333 = state_19305__$1;(statearr_19311_19333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (13)))
{var state_19305__$1 = state_19305;var statearr_19312_19334 = state_19305__$1;(statearr_19312_19334[(2)] = null);
(statearr_19312_19334[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (6)))
{var inst_19284 = (state_19305[(7)]);var state_19305__$1 = state_19305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19305__$1,(11),to,inst_19284);
} else
{if((state_val_19306 === (3)))
{var inst_19303 = (state_19305[(2)]);var state_19305__$1 = state_19305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19305__$1,inst_19303);
} else
{if((state_val_19306 === (12)))
{var state_19305__$1 = state_19305;var statearr_19313_19335 = state_19305__$1;(statearr_19313_19335[(2)] = null);
(statearr_19313_19335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (2)))
{var state_19305__$1 = state_19305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19305__$1,(4),from);
} else
{if((state_val_19306 === (11)))
{var inst_19294 = (state_19305[(2)]);var state_19305__$1 = state_19305;if(cljs.core.truth_(inst_19294))
{var statearr_19314_19336 = state_19305__$1;(statearr_19314_19336[(1)] = (12));
} else
{var statearr_19315_19337 = state_19305__$1;(statearr_19315_19337[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (9)))
{var state_19305__$1 = state_19305;var statearr_19316_19338 = state_19305__$1;(statearr_19316_19338[(2)] = null);
(statearr_19316_19338[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (5)))
{var state_19305__$1 = state_19305;if(cljs.core.truth_(close_QMARK_))
{var statearr_19317_19339 = state_19305__$1;(statearr_19317_19339[(1)] = (8));
} else
{var statearr_19318_19340 = state_19305__$1;(statearr_19318_19340[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (14)))
{var inst_19299 = (state_19305[(2)]);var state_19305__$1 = state_19305;var statearr_19319_19341 = state_19305__$1;(statearr_19319_19341[(2)] = inst_19299);
(statearr_19319_19341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (10)))
{var inst_19291 = (state_19305[(2)]);var state_19305__$1 = state_19305;var statearr_19320_19342 = state_19305__$1;(statearr_19320_19342[(2)] = inst_19291);
(statearr_19320_19342[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19306 === (8)))
{var inst_19288 = cljs.core.async.close_BANG_.call(null,to);var state_19305__$1 = state_19305;var statearr_19321_19343 = state_19305__$1;(statearr_19321_19343[(2)] = inst_19288);
(statearr_19321_19343[(1)] = (10));
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
});})(c__5819__auto___19329))
;return ((function (switch__5804__auto__,c__5819__auto___19329){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19325 = [null,null,null,null,null,null,null,null];(statearr_19325[(0)] = state_machine__5805__auto__);
(statearr_19325[(1)] = (1));
return statearr_19325;
});
var state_machine__5805__auto____1 = (function (state_19305){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19305);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19326){if((e19326 instanceof Object))
{var ex__5808__auto__ = e19326;var statearr_19327_19344 = state_19305;(statearr_19327_19344[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19345 = state_19305;
state_19305 = G__19345;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19305){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19329))
})();var state__5821__auto__ = (function (){var statearr_19328 = f__5820__auto__.call(null);(statearr_19328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19329);
return statearr_19328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19329))
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
return (function (p__19529){var vec__19530 = p__19529;var v = cljs.core.nth.call(null,vec__19530,(0),null);var p = cljs.core.nth.call(null,vec__19530,(1),null);var job = vec__19530;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___19712 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results){
return (function (state_19535){var state_val_19536 = (state_19535[(1)]);if((state_val_19536 === (2)))
{var inst_19532 = (state_19535[(2)]);var inst_19533 = cljs.core.async.close_BANG_.call(null,res);var state_19535__$1 = (function (){var statearr_19537 = state_19535;(statearr_19537[(7)] = inst_19532);
return statearr_19537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19535__$1,inst_19533);
} else
{if((state_val_19536 === (1)))
{var state_19535__$1 = state_19535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19535__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19541 = [null,null,null,null,null,null,null,null];(statearr_19541[(0)] = state_machine__5805__auto__);
(statearr_19541[(1)] = (1));
return statearr_19541;
});
var state_machine__5805__auto____1 = (function (state_19535){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19542){if((e19542 instanceof Object))
{var ex__5808__auto__ = e19542;var statearr_19543_19713 = state_19535;(statearr_19543_19713[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19542;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19714 = state_19535;
state_19535 = G__19714;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19535){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_19544 = f__5820__auto__.call(null);(statearr_19544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19712);
return statearr_19544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19712,res,vec__19530,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19545){var vec__19546 = p__19545;var v = cljs.core.nth.call(null,vec__19546,(0),null);var p = cljs.core.nth.call(null,vec__19546,(1),null);var job = vec__19546;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___19715 = n;var __19716 = (0);while(true){
if((__19716 < n__4506__auto___19715))
{var G__19547_19717 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19547_19717) {
case "async":
var c__5819__auto___19719 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19716,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__19716,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function (state_19560){var state_val_19561 = (state_19560[(1)]);if((state_val_19561 === (7)))
{var inst_19556 = (state_19560[(2)]);var state_19560__$1 = state_19560;var statearr_19562_19720 = state_19560__$1;(statearr_19562_19720[(2)] = inst_19556);
(statearr_19562_19720[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19561 === (6)))
{var state_19560__$1 = state_19560;var statearr_19563_19721 = state_19560__$1;(statearr_19563_19721[(2)] = null);
(statearr_19563_19721[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19561 === (5)))
{var state_19560__$1 = state_19560;var statearr_19564_19722 = state_19560__$1;(statearr_19564_19722[(2)] = null);
(statearr_19564_19722[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19561 === (4)))
{var inst_19550 = (state_19560[(2)]);var inst_19551 = async.call(null,inst_19550);var state_19560__$1 = state_19560;if(cljs.core.truth_(inst_19551))
{var statearr_19565_19723 = state_19560__$1;(statearr_19565_19723[(1)] = (5));
} else
{var statearr_19566_19724 = state_19560__$1;(statearr_19566_19724[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19561 === (3)))
{var inst_19558 = (state_19560[(2)]);var state_19560__$1 = state_19560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19560__$1,inst_19558);
} else
{if((state_val_19561 === (2)))
{var state_19560__$1 = state_19560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19560__$1,(4),jobs);
} else
{if((state_val_19561 === (1)))
{var state_19560__$1 = state_19560;var statearr_19567_19725 = state_19560__$1;(statearr_19567_19725[(2)] = null);
(statearr_19567_19725[(1)] = (2));
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
});})(__19716,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
;return ((function (__19716,switch__5804__auto__,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19571 = [null,null,null,null,null,null,null];(statearr_19571[(0)] = state_machine__5805__auto__);
(statearr_19571[(1)] = (1));
return statearr_19571;
});
var state_machine__5805__auto____1 = (function (state_19560){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19560);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19572){if((e19572 instanceof Object))
{var ex__5808__auto__ = e19572;var statearr_19573_19726 = state_19560;(statearr_19573_19726[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19727 = state_19560;
state_19560 = G__19727;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19560){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__19716,switch__5804__auto__,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19574 = f__5820__auto__.call(null);(statearr_19574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19719);
return statearr_19574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__19716,c__5819__auto___19719,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___19728 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19716,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__19716,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function (state_19587){var state_val_19588 = (state_19587[(1)]);if((state_val_19588 === (7)))
{var inst_19583 = (state_19587[(2)]);var state_19587__$1 = state_19587;var statearr_19589_19729 = state_19587__$1;(statearr_19589_19729[(2)] = inst_19583);
(statearr_19589_19729[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19588 === (6)))
{var state_19587__$1 = state_19587;var statearr_19590_19730 = state_19587__$1;(statearr_19590_19730[(2)] = null);
(statearr_19590_19730[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19588 === (5)))
{var state_19587__$1 = state_19587;var statearr_19591_19731 = state_19587__$1;(statearr_19591_19731[(2)] = null);
(statearr_19591_19731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19588 === (4)))
{var inst_19577 = (state_19587[(2)]);var inst_19578 = process.call(null,inst_19577);var state_19587__$1 = state_19587;if(cljs.core.truth_(inst_19578))
{var statearr_19592_19732 = state_19587__$1;(statearr_19592_19732[(1)] = (5));
} else
{var statearr_19593_19733 = state_19587__$1;(statearr_19593_19733[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19588 === (3)))
{var inst_19585 = (state_19587[(2)]);var state_19587__$1 = state_19587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19587__$1,inst_19585);
} else
{if((state_val_19588 === (2)))
{var state_19587__$1 = state_19587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19587__$1,(4),jobs);
} else
{if((state_val_19588 === (1)))
{var state_19587__$1 = state_19587;var statearr_19594_19734 = state_19587__$1;(statearr_19594_19734[(2)] = null);
(statearr_19594_19734[(1)] = (2));
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
});})(__19716,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
;return ((function (__19716,switch__5804__auto__,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19598 = [null,null,null,null,null,null,null];(statearr_19598[(0)] = state_machine__5805__auto__);
(statearr_19598[(1)] = (1));
return statearr_19598;
});
var state_machine__5805__auto____1 = (function (state_19587){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19599){if((e19599 instanceof Object))
{var ex__5808__auto__ = e19599;var statearr_19600_19735 = state_19587;(statearr_19600_19735[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19587);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19736 = state_19587;
state_19587 = G__19736;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__19716,switch__5804__auto__,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19601 = f__5820__auto__.call(null);(statearr_19601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19728);
return statearr_19601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__19716,c__5819__auto___19728,G__19547_19717,n__4506__auto___19715,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19737 = (__19716 + (1));
__19716 = G__19737;
continue;
}
} else
{}
break;
}
var c__5819__auto___19738 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19738,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19738,jobs,results,process,async){
return (function (state_19623){var state_val_19624 = (state_19623[(1)]);if((state_val_19624 === (9)))
{var inst_19616 = (state_19623[(2)]);var state_19623__$1 = (function (){var statearr_19625 = state_19623;(statearr_19625[(7)] = inst_19616);
return statearr_19625;
})();var statearr_19626_19739 = state_19623__$1;(statearr_19626_19739[(2)] = null);
(statearr_19626_19739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19624 === (8)))
{var inst_19609 = (state_19623[(8)]);var inst_19614 = (state_19623[(2)]);var state_19623__$1 = (function (){var statearr_19627 = state_19623;(statearr_19627[(9)] = inst_19614);
return statearr_19627;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19623__$1,(9),results,inst_19609);
} else
{if((state_val_19624 === (7)))
{var inst_19619 = (state_19623[(2)]);var state_19623__$1 = state_19623;var statearr_19628_19740 = state_19623__$1;(statearr_19628_19740[(2)] = inst_19619);
(statearr_19628_19740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19624 === (6)))
{var inst_19609 = (state_19623[(8)]);var inst_19604 = (state_19623[(10)]);var inst_19609__$1 = cljs.core.async.chan.call(null,(1));var inst_19610 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19611 = [inst_19604,inst_19609__$1];var inst_19612 = (new cljs.core.PersistentVector(null,2,(5),inst_19610,inst_19611,null));var state_19623__$1 = (function (){var statearr_19629 = state_19623;(statearr_19629[(8)] = inst_19609__$1);
return statearr_19629;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19623__$1,(8),jobs,inst_19612);
} else
{if((state_val_19624 === (5)))
{var inst_19607 = cljs.core.async.close_BANG_.call(null,jobs);var state_19623__$1 = state_19623;var statearr_19630_19741 = state_19623__$1;(statearr_19630_19741[(2)] = inst_19607);
(statearr_19630_19741[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19624 === (4)))
{var inst_19604 = (state_19623[(10)]);var inst_19604__$1 = (state_19623[(2)]);var inst_19605 = (inst_19604__$1 == null);var state_19623__$1 = (function (){var statearr_19631 = state_19623;(statearr_19631[(10)] = inst_19604__$1);
return statearr_19631;
})();if(cljs.core.truth_(inst_19605))
{var statearr_19632_19742 = state_19623__$1;(statearr_19632_19742[(1)] = (5));
} else
{var statearr_19633_19743 = state_19623__$1;(statearr_19633_19743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19624 === (3)))
{var inst_19621 = (state_19623[(2)]);var state_19623__$1 = state_19623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19623__$1,inst_19621);
} else
{if((state_val_19624 === (2)))
{var state_19623__$1 = state_19623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19623__$1,(4),from);
} else
{if((state_val_19624 === (1)))
{var state_19623__$1 = state_19623;var statearr_19634_19744 = state_19623__$1;(statearr_19634_19744[(2)] = null);
(statearr_19634_19744[(1)] = (2));
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
});})(c__5819__auto___19738,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___19738,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19638 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19638[(0)] = state_machine__5805__auto__);
(statearr_19638[(1)] = (1));
return statearr_19638;
});
var state_machine__5805__auto____1 = (function (state_19623){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19639){if((e19639 instanceof Object))
{var ex__5808__auto__ = e19639;var statearr_19640_19745 = state_19623;(statearr_19640_19745[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19639;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19746 = state_19623;
state_19623 = G__19746;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19623){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19738,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19641 = f__5820__auto__.call(null);(statearr_19641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19738);
return statearr_19641;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19738,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_19679){var state_val_19680 = (state_19679[(1)]);if((state_val_19680 === (7)))
{var inst_19675 = (state_19679[(2)]);var state_19679__$1 = state_19679;var statearr_19681_19747 = state_19679__$1;(statearr_19681_19747[(2)] = inst_19675);
(statearr_19681_19747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (20)))
{var state_19679__$1 = state_19679;var statearr_19682_19748 = state_19679__$1;(statearr_19682_19748[(2)] = null);
(statearr_19682_19748[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (1)))
{var state_19679__$1 = state_19679;var statearr_19683_19749 = state_19679__$1;(statearr_19683_19749[(2)] = null);
(statearr_19683_19749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (4)))
{var inst_19644 = (state_19679[(7)]);var inst_19644__$1 = (state_19679[(2)]);var inst_19645 = (inst_19644__$1 == null);var state_19679__$1 = (function (){var statearr_19684 = state_19679;(statearr_19684[(7)] = inst_19644__$1);
return statearr_19684;
})();if(cljs.core.truth_(inst_19645))
{var statearr_19685_19750 = state_19679__$1;(statearr_19685_19750[(1)] = (5));
} else
{var statearr_19686_19751 = state_19679__$1;(statearr_19686_19751[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (15)))
{var inst_19657 = (state_19679[(8)]);var state_19679__$1 = state_19679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19679__$1,(18),to,inst_19657);
} else
{if((state_val_19680 === (21)))
{var inst_19670 = (state_19679[(2)]);var state_19679__$1 = state_19679;var statearr_19687_19752 = state_19679__$1;(statearr_19687_19752[(2)] = inst_19670);
(statearr_19687_19752[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (13)))
{var inst_19672 = (state_19679[(2)]);var state_19679__$1 = (function (){var statearr_19688 = state_19679;(statearr_19688[(9)] = inst_19672);
return statearr_19688;
})();var statearr_19689_19753 = state_19679__$1;(statearr_19689_19753[(2)] = null);
(statearr_19689_19753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (6)))
{var inst_19644 = (state_19679[(7)]);var state_19679__$1 = state_19679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19679__$1,(11),inst_19644);
} else
{if((state_val_19680 === (17)))
{var inst_19665 = (state_19679[(2)]);var state_19679__$1 = state_19679;if(cljs.core.truth_(inst_19665))
{var statearr_19690_19754 = state_19679__$1;(statearr_19690_19754[(1)] = (19));
} else
{var statearr_19691_19755 = state_19679__$1;(statearr_19691_19755[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (3)))
{var inst_19677 = (state_19679[(2)]);var state_19679__$1 = state_19679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19679__$1,inst_19677);
} else
{if((state_val_19680 === (12)))
{var inst_19654 = (state_19679[(10)]);var state_19679__$1 = state_19679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19679__$1,(14),inst_19654);
} else
{if((state_val_19680 === (2)))
{var state_19679__$1 = state_19679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19679__$1,(4),results);
} else
{if((state_val_19680 === (19)))
{var state_19679__$1 = state_19679;var statearr_19692_19756 = state_19679__$1;(statearr_19692_19756[(2)] = null);
(statearr_19692_19756[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (11)))
{var inst_19654 = (state_19679[(2)]);var state_19679__$1 = (function (){var statearr_19693 = state_19679;(statearr_19693[(10)] = inst_19654);
return statearr_19693;
})();var statearr_19694_19757 = state_19679__$1;(statearr_19694_19757[(2)] = null);
(statearr_19694_19757[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (9)))
{var state_19679__$1 = state_19679;var statearr_19695_19758 = state_19679__$1;(statearr_19695_19758[(2)] = null);
(statearr_19695_19758[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (5)))
{var state_19679__$1 = state_19679;if(cljs.core.truth_(close_QMARK_))
{var statearr_19696_19759 = state_19679__$1;(statearr_19696_19759[(1)] = (8));
} else
{var statearr_19697_19760 = state_19679__$1;(statearr_19697_19760[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (14)))
{var inst_19659 = (state_19679[(11)]);var inst_19657 = (state_19679[(8)]);var inst_19657__$1 = (state_19679[(2)]);var inst_19658 = (inst_19657__$1 == null);var inst_19659__$1 = cljs.core.not.call(null,inst_19658);var state_19679__$1 = (function (){var statearr_19698 = state_19679;(statearr_19698[(11)] = inst_19659__$1);
(statearr_19698[(8)] = inst_19657__$1);
return statearr_19698;
})();if(inst_19659__$1)
{var statearr_19699_19761 = state_19679__$1;(statearr_19699_19761[(1)] = (15));
} else
{var statearr_19700_19762 = state_19679__$1;(statearr_19700_19762[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (16)))
{var inst_19659 = (state_19679[(11)]);var state_19679__$1 = state_19679;var statearr_19701_19763 = state_19679__$1;(statearr_19701_19763[(2)] = inst_19659);
(statearr_19701_19763[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (10)))
{var inst_19651 = (state_19679[(2)]);var state_19679__$1 = state_19679;var statearr_19702_19764 = state_19679__$1;(statearr_19702_19764[(2)] = inst_19651);
(statearr_19702_19764[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (18)))
{var inst_19662 = (state_19679[(2)]);var state_19679__$1 = state_19679;var statearr_19703_19765 = state_19679__$1;(statearr_19703_19765[(2)] = inst_19662);
(statearr_19703_19765[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19680 === (8)))
{var inst_19648 = cljs.core.async.close_BANG_.call(null,to);var state_19679__$1 = state_19679;var statearr_19704_19766 = state_19679__$1;(statearr_19704_19766[(2)] = inst_19648);
(statearr_19704_19766[(1)] = (10));
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
var state_machine__5805__auto____0 = (function (){var statearr_19708 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19708[(0)] = state_machine__5805__auto__);
(statearr_19708[(1)] = (1));
return statearr_19708;
});
var state_machine__5805__auto____1 = (function (state_19679){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19709){if((e19709 instanceof Object))
{var ex__5808__auto__ = e19709;var statearr_19710_19767 = state_19679;(statearr_19710_19767[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19768 = state_19679;
state_19679 = G__19768;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19679){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_19711 = f__5820__auto__.call(null);(statearr_19711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_19711;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___19869 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___19869,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___19869,tc,fc){
return (function (state_19844){var state_val_19845 = (state_19844[(1)]);if((state_val_19845 === (7)))
{var inst_19840 = (state_19844[(2)]);var state_19844__$1 = state_19844;var statearr_19846_19870 = state_19844__$1;(statearr_19846_19870[(2)] = inst_19840);
(statearr_19846_19870[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (1)))
{var state_19844__$1 = state_19844;var statearr_19847_19871 = state_19844__$1;(statearr_19847_19871[(2)] = null);
(statearr_19847_19871[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (4)))
{var inst_19821 = (state_19844[(7)]);var inst_19821__$1 = (state_19844[(2)]);var inst_19822 = (inst_19821__$1 == null);var state_19844__$1 = (function (){var statearr_19848 = state_19844;(statearr_19848[(7)] = inst_19821__$1);
return statearr_19848;
})();if(cljs.core.truth_(inst_19822))
{var statearr_19849_19872 = state_19844__$1;(statearr_19849_19872[(1)] = (5));
} else
{var statearr_19850_19873 = state_19844__$1;(statearr_19850_19873[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (13)))
{var state_19844__$1 = state_19844;var statearr_19851_19874 = state_19844__$1;(statearr_19851_19874[(2)] = null);
(statearr_19851_19874[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (6)))
{var inst_19821 = (state_19844[(7)]);var inst_19827 = p.call(null,inst_19821);var state_19844__$1 = state_19844;if(cljs.core.truth_(inst_19827))
{var statearr_19852_19875 = state_19844__$1;(statearr_19852_19875[(1)] = (9));
} else
{var statearr_19853_19876 = state_19844__$1;(statearr_19853_19876[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (3)))
{var inst_19842 = (state_19844[(2)]);var state_19844__$1 = state_19844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19844__$1,inst_19842);
} else
{if((state_val_19845 === (12)))
{var state_19844__$1 = state_19844;var statearr_19854_19877 = state_19844__$1;(statearr_19854_19877[(2)] = null);
(statearr_19854_19877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (2)))
{var state_19844__$1 = state_19844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19844__$1,(4),ch);
} else
{if((state_val_19845 === (11)))
{var inst_19821 = (state_19844[(7)]);var inst_19831 = (state_19844[(2)]);var state_19844__$1 = state_19844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19844__$1,(8),inst_19831,inst_19821);
} else
{if((state_val_19845 === (9)))
{var state_19844__$1 = state_19844;var statearr_19855_19878 = state_19844__$1;(statearr_19855_19878[(2)] = tc);
(statearr_19855_19878[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (5)))
{var inst_19824 = cljs.core.async.close_BANG_.call(null,tc);var inst_19825 = cljs.core.async.close_BANG_.call(null,fc);var state_19844__$1 = (function (){var statearr_19856 = state_19844;(statearr_19856[(8)] = inst_19824);
return statearr_19856;
})();var statearr_19857_19879 = state_19844__$1;(statearr_19857_19879[(2)] = inst_19825);
(statearr_19857_19879[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (14)))
{var inst_19838 = (state_19844[(2)]);var state_19844__$1 = state_19844;var statearr_19858_19880 = state_19844__$1;(statearr_19858_19880[(2)] = inst_19838);
(statearr_19858_19880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (10)))
{var state_19844__$1 = state_19844;var statearr_19859_19881 = state_19844__$1;(statearr_19859_19881[(2)] = fc);
(statearr_19859_19881[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19845 === (8)))
{var inst_19833 = (state_19844[(2)]);var state_19844__$1 = state_19844;if(cljs.core.truth_(inst_19833))
{var statearr_19860_19882 = state_19844__$1;(statearr_19860_19882[(1)] = (12));
} else
{var statearr_19861_19883 = state_19844__$1;(statearr_19861_19883[(1)] = (13));
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
});})(c__5819__auto___19869,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___19869,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_19865 = [null,null,null,null,null,null,null,null,null];(statearr_19865[(0)] = state_machine__5805__auto__);
(statearr_19865[(1)] = (1));
return statearr_19865;
});
var state_machine__5805__auto____1 = (function (state_19844){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19844);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19866){if((e19866 instanceof Object))
{var ex__5808__auto__ = e19866;var statearr_19867_19884 = state_19844;(statearr_19867_19884[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19866;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19885 = state_19844;
state_19844 = G__19885;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19844){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___19869,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_19868 = f__5820__auto__.call(null);(statearr_19868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___19869);
return statearr_19868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___19869,tc,fc))
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
return (function (state_19932){var state_val_19933 = (state_19932[(1)]);if((state_val_19933 === (7)))
{var inst_19928 = (state_19932[(2)]);var state_19932__$1 = state_19932;var statearr_19934_19950 = state_19932__$1;(statearr_19934_19950[(2)] = inst_19928);
(statearr_19934_19950[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19933 === (6)))
{var inst_19921 = (state_19932[(7)]);var inst_19918 = (state_19932[(8)]);var inst_19925 = f.call(null,inst_19918,inst_19921);var inst_19918__$1 = inst_19925;var state_19932__$1 = (function (){var statearr_19935 = state_19932;(statearr_19935[(8)] = inst_19918__$1);
return statearr_19935;
})();var statearr_19936_19951 = state_19932__$1;(statearr_19936_19951[(2)] = null);
(statearr_19936_19951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19933 === (5)))
{var inst_19918 = (state_19932[(8)]);var state_19932__$1 = state_19932;var statearr_19937_19952 = state_19932__$1;(statearr_19937_19952[(2)] = inst_19918);
(statearr_19937_19952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19933 === (4)))
{var inst_19921 = (state_19932[(7)]);var inst_19921__$1 = (state_19932[(2)]);var inst_19922 = (inst_19921__$1 == null);var state_19932__$1 = (function (){var statearr_19938 = state_19932;(statearr_19938[(7)] = inst_19921__$1);
return statearr_19938;
})();if(cljs.core.truth_(inst_19922))
{var statearr_19939_19953 = state_19932__$1;(statearr_19939_19953[(1)] = (5));
} else
{var statearr_19940_19954 = state_19932__$1;(statearr_19940_19954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19933 === (3)))
{var inst_19930 = (state_19932[(2)]);var state_19932__$1 = state_19932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19932__$1,inst_19930);
} else
{if((state_val_19933 === (2)))
{var state_19932__$1 = state_19932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19932__$1,(4),ch);
} else
{if((state_val_19933 === (1)))
{var inst_19918 = init;var state_19932__$1 = (function (){var statearr_19941 = state_19932;(statearr_19941[(8)] = inst_19918);
return statearr_19941;
})();var statearr_19942_19955 = state_19932__$1;(statearr_19942_19955[(2)] = null);
(statearr_19942_19955[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_19946 = [null,null,null,null,null,null,null,null,null];(statearr_19946[(0)] = state_machine__5805__auto__);
(statearr_19946[(1)] = (1));
return statearr_19946;
});
var state_machine__5805__auto____1 = (function (state_19932){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_19932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e19947){if((e19947 instanceof Object))
{var ex__5808__auto__ = e19947;var statearr_19948_19956 = state_19932;(statearr_19948_19956[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19932);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19947;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19957 = state_19932;
state_19932 = G__19957;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_19932){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_19932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_19949 = f__5820__auto__.call(null);(statearr_19949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_19949;
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
return (function (state_20031){var state_val_20032 = (state_20031[(1)]);if((state_val_20032 === (7)))
{var inst_20013 = (state_20031[(2)]);var state_20031__$1 = state_20031;var statearr_20033_20056 = state_20031__$1;(statearr_20033_20056[(2)] = inst_20013);
(statearr_20033_20056[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (1)))
{var inst_20007 = cljs.core.seq.call(null,coll);var inst_20008 = inst_20007;var state_20031__$1 = (function (){var statearr_20034 = state_20031;(statearr_20034[(7)] = inst_20008);
return statearr_20034;
})();var statearr_20035_20057 = state_20031__$1;(statearr_20035_20057[(2)] = null);
(statearr_20035_20057[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (4)))
{var inst_20008 = (state_20031[(7)]);var inst_20011 = cljs.core.first.call(null,inst_20008);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20031__$1,(7),ch,inst_20011);
} else
{if((state_val_20032 === (13)))
{var inst_20025 = (state_20031[(2)]);var state_20031__$1 = state_20031;var statearr_20036_20058 = state_20031__$1;(statearr_20036_20058[(2)] = inst_20025);
(statearr_20036_20058[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (6)))
{var inst_20016 = (state_20031[(2)]);var state_20031__$1 = state_20031;if(cljs.core.truth_(inst_20016))
{var statearr_20037_20059 = state_20031__$1;(statearr_20037_20059[(1)] = (8));
} else
{var statearr_20038_20060 = state_20031__$1;(statearr_20038_20060[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (3)))
{var inst_20029 = (state_20031[(2)]);var state_20031__$1 = state_20031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20031__$1,inst_20029);
} else
{if((state_val_20032 === (12)))
{var state_20031__$1 = state_20031;var statearr_20039_20061 = state_20031__$1;(statearr_20039_20061[(2)] = null);
(statearr_20039_20061[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (2)))
{var inst_20008 = (state_20031[(7)]);var state_20031__$1 = state_20031;if(cljs.core.truth_(inst_20008))
{var statearr_20040_20062 = state_20031__$1;(statearr_20040_20062[(1)] = (4));
} else
{var statearr_20041_20063 = state_20031__$1;(statearr_20041_20063[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (11)))
{var inst_20022 = cljs.core.async.close_BANG_.call(null,ch);var state_20031__$1 = state_20031;var statearr_20042_20064 = state_20031__$1;(statearr_20042_20064[(2)] = inst_20022);
(statearr_20042_20064[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (9)))
{var state_20031__$1 = state_20031;if(cljs.core.truth_(close_QMARK_))
{var statearr_20043_20065 = state_20031__$1;(statearr_20043_20065[(1)] = (11));
} else
{var statearr_20044_20066 = state_20031__$1;(statearr_20044_20066[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (5)))
{var inst_20008 = (state_20031[(7)]);var state_20031__$1 = state_20031;var statearr_20045_20067 = state_20031__$1;(statearr_20045_20067[(2)] = inst_20008);
(statearr_20045_20067[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (10)))
{var inst_20027 = (state_20031[(2)]);var state_20031__$1 = state_20031;var statearr_20046_20068 = state_20031__$1;(statearr_20046_20068[(2)] = inst_20027);
(statearr_20046_20068[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20032 === (8)))
{var inst_20008 = (state_20031[(7)]);var inst_20018 = cljs.core.next.call(null,inst_20008);var inst_20008__$1 = inst_20018;var state_20031__$1 = (function (){var statearr_20047 = state_20031;(statearr_20047[(7)] = inst_20008__$1);
return statearr_20047;
})();var statearr_20048_20069 = state_20031__$1;(statearr_20048_20069[(2)] = null);
(statearr_20048_20069[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_20052 = [null,null,null,null,null,null,null,null];(statearr_20052[(0)] = state_machine__5805__auto__);
(statearr_20052[(1)] = (1));
return statearr_20052;
});
var state_machine__5805__auto____1 = (function (state_20031){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20031);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20053){if((e20053 instanceof Object))
{var ex__5808__auto__ = e20053;var statearr_20054_20070 = state_20031;(statearr_20054_20070[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20071 = state_20031;
state_20031 = G__20071;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20031){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_20055 = f__5820__auto__.call(null);(statearr_20055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_20055;
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
cljs.core.async.Mux = (function (){var obj20073 = {};return obj20073;
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
cljs.core.async.Mult = (function (){var obj20075 = {};return obj20075;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20297 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20297 = (function (cs,ch,mult,meta20298){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20298 = meta20298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20297.cljs$lang$type = true;
cljs.core.async.t20297.cljs$lang$ctorStr = "cljs.core.async/t20297";
cljs.core.async.t20297.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t20297");
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20297.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20297.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20299){var self__ = this;
var _20299__$1 = this;return self__.meta20298;
});})(cs))
;
cljs.core.async.t20297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20299,meta20298__$1){var self__ = this;
var _20299__$1 = this;return (new cljs.core.async.t20297(self__.cs,self__.ch,self__.mult,meta20298__$1));
});})(cs))
;
cljs.core.async.__GT_t20297 = ((function (cs){
return (function __GT_t20297(cs__$1,ch__$1,mult__$1,meta20298){return (new cljs.core.async.t20297(cs__$1,ch__$1,mult__$1,meta20298));
});})(cs))
;
}
return (new cljs.core.async.t20297(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___20518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20518,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20518,cs,m,dchan,dctr,done){
return (function (state_20430){var state_val_20431 = (state_20430[(1)]);if((state_val_20431 === (7)))
{var inst_20426 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20432_20519 = state_20430__$1;(statearr_20432_20519[(2)] = inst_20426);
(statearr_20432_20519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (20)))
{var inst_20331 = (state_20430[(7)]);var inst_20341 = cljs.core.first.call(null,inst_20331);var inst_20342 = cljs.core.nth.call(null,inst_20341,(0),null);var inst_20343 = cljs.core.nth.call(null,inst_20341,(1),null);var state_20430__$1 = (function (){var statearr_20433 = state_20430;(statearr_20433[(8)] = inst_20342);
return statearr_20433;
})();if(cljs.core.truth_(inst_20343))
{var statearr_20434_20520 = state_20430__$1;(statearr_20434_20520[(1)] = (22));
} else
{var statearr_20435_20521 = state_20430__$1;(statearr_20435_20521[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (27)))
{var inst_20302 = (state_20430[(9)]);var inst_20373 = (state_20430[(10)]);var inst_20371 = (state_20430[(11)]);var inst_20378 = (state_20430[(12)]);var inst_20378__$1 = cljs.core._nth.call(null,inst_20371,inst_20373);var inst_20379 = cljs.core.async.put_BANG_.call(null,inst_20378__$1,inst_20302,done);var state_20430__$1 = (function (){var statearr_20436 = state_20430;(statearr_20436[(12)] = inst_20378__$1);
return statearr_20436;
})();if(cljs.core.truth_(inst_20379))
{var statearr_20437_20522 = state_20430__$1;(statearr_20437_20522[(1)] = (30));
} else
{var statearr_20438_20523 = state_20430__$1;(statearr_20438_20523[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (1)))
{var state_20430__$1 = state_20430;var statearr_20439_20524 = state_20430__$1;(statearr_20439_20524[(2)] = null);
(statearr_20439_20524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (24)))
{var inst_20331 = (state_20430[(7)]);var inst_20348 = (state_20430[(2)]);var inst_20349 = cljs.core.next.call(null,inst_20331);var inst_20311 = inst_20349;var inst_20312 = null;var inst_20313 = (0);var inst_20314 = (0);var state_20430__$1 = (function (){var statearr_20440 = state_20430;(statearr_20440[(13)] = inst_20348);
(statearr_20440[(14)] = inst_20311);
(statearr_20440[(15)] = inst_20312);
(statearr_20440[(16)] = inst_20314);
(statearr_20440[(17)] = inst_20313);
return statearr_20440;
})();var statearr_20441_20525 = state_20430__$1;(statearr_20441_20525[(2)] = null);
(statearr_20441_20525[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (39)))
{var state_20430__$1 = state_20430;var statearr_20445_20526 = state_20430__$1;(statearr_20445_20526[(2)] = null);
(statearr_20445_20526[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (4)))
{var inst_20302 = (state_20430[(9)]);var inst_20302__$1 = (state_20430[(2)]);var inst_20303 = (inst_20302__$1 == null);var state_20430__$1 = (function (){var statearr_20446 = state_20430;(statearr_20446[(9)] = inst_20302__$1);
return statearr_20446;
})();if(cljs.core.truth_(inst_20303))
{var statearr_20447_20527 = state_20430__$1;(statearr_20447_20527[(1)] = (5));
} else
{var statearr_20448_20528 = state_20430__$1;(statearr_20448_20528[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (15)))
{var inst_20311 = (state_20430[(14)]);var inst_20312 = (state_20430[(15)]);var inst_20314 = (state_20430[(16)]);var inst_20313 = (state_20430[(17)]);var inst_20327 = (state_20430[(2)]);var inst_20328 = (inst_20314 + (1));var tmp20442 = inst_20311;var tmp20443 = inst_20312;var tmp20444 = inst_20313;var inst_20311__$1 = tmp20442;var inst_20312__$1 = tmp20443;var inst_20313__$1 = tmp20444;var inst_20314__$1 = inst_20328;var state_20430__$1 = (function (){var statearr_20449 = state_20430;(statearr_20449[(14)] = inst_20311__$1);
(statearr_20449[(15)] = inst_20312__$1);
(statearr_20449[(16)] = inst_20314__$1);
(statearr_20449[(18)] = inst_20327);
(statearr_20449[(17)] = inst_20313__$1);
return statearr_20449;
})();var statearr_20450_20529 = state_20430__$1;(statearr_20450_20529[(2)] = null);
(statearr_20450_20529[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (21)))
{var inst_20352 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20454_20530 = state_20430__$1;(statearr_20454_20530[(2)] = inst_20352);
(statearr_20454_20530[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (31)))
{var inst_20378 = (state_20430[(12)]);var inst_20382 = done.call(null,null);var inst_20383 = cljs.core.async.untap_STAR_.call(null,m,inst_20378);var state_20430__$1 = (function (){var statearr_20455 = state_20430;(statearr_20455[(19)] = inst_20382);
return statearr_20455;
})();var statearr_20456_20531 = state_20430__$1;(statearr_20456_20531[(2)] = inst_20383);
(statearr_20456_20531[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (32)))
{var inst_20370 = (state_20430[(20)]);var inst_20373 = (state_20430[(10)]);var inst_20371 = (state_20430[(11)]);var inst_20372 = (state_20430[(21)]);var inst_20385 = (state_20430[(2)]);var inst_20386 = (inst_20373 + (1));var tmp20451 = inst_20370;var tmp20452 = inst_20371;var tmp20453 = inst_20372;var inst_20370__$1 = tmp20451;var inst_20371__$1 = tmp20452;var inst_20372__$1 = tmp20453;var inst_20373__$1 = inst_20386;var state_20430__$1 = (function (){var statearr_20457 = state_20430;(statearr_20457[(22)] = inst_20385);
(statearr_20457[(20)] = inst_20370__$1);
(statearr_20457[(10)] = inst_20373__$1);
(statearr_20457[(11)] = inst_20371__$1);
(statearr_20457[(21)] = inst_20372__$1);
return statearr_20457;
})();var statearr_20458_20532 = state_20430__$1;(statearr_20458_20532[(2)] = null);
(statearr_20458_20532[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (40)))
{var inst_20398 = (state_20430[(23)]);var inst_20402 = done.call(null,null);var inst_20403 = cljs.core.async.untap_STAR_.call(null,m,inst_20398);var state_20430__$1 = (function (){var statearr_20459 = state_20430;(statearr_20459[(24)] = inst_20402);
return statearr_20459;
})();var statearr_20460_20533 = state_20430__$1;(statearr_20460_20533[(2)] = inst_20403);
(statearr_20460_20533[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (33)))
{var inst_20389 = (state_20430[(25)]);var inst_20391 = cljs.core.chunked_seq_QMARK_.call(null,inst_20389);var state_20430__$1 = state_20430;if(inst_20391)
{var statearr_20461_20534 = state_20430__$1;(statearr_20461_20534[(1)] = (36));
} else
{var statearr_20462_20535 = state_20430__$1;(statearr_20462_20535[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (13)))
{var inst_20321 = (state_20430[(26)]);var inst_20324 = cljs.core.async.close_BANG_.call(null,inst_20321);var state_20430__$1 = state_20430;var statearr_20463_20536 = state_20430__$1;(statearr_20463_20536[(2)] = inst_20324);
(statearr_20463_20536[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (22)))
{var inst_20342 = (state_20430[(8)]);var inst_20345 = cljs.core.async.close_BANG_.call(null,inst_20342);var state_20430__$1 = state_20430;var statearr_20464_20537 = state_20430__$1;(statearr_20464_20537[(2)] = inst_20345);
(statearr_20464_20537[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (36)))
{var inst_20389 = (state_20430[(25)]);var inst_20393 = cljs.core.chunk_first.call(null,inst_20389);var inst_20394 = cljs.core.chunk_rest.call(null,inst_20389);var inst_20395 = cljs.core.count.call(null,inst_20393);var inst_20370 = inst_20394;var inst_20371 = inst_20393;var inst_20372 = inst_20395;var inst_20373 = (0);var state_20430__$1 = (function (){var statearr_20465 = state_20430;(statearr_20465[(20)] = inst_20370);
(statearr_20465[(10)] = inst_20373);
(statearr_20465[(11)] = inst_20371);
(statearr_20465[(21)] = inst_20372);
return statearr_20465;
})();var statearr_20466_20538 = state_20430__$1;(statearr_20466_20538[(2)] = null);
(statearr_20466_20538[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (41)))
{var inst_20389 = (state_20430[(25)]);var inst_20405 = (state_20430[(2)]);var inst_20406 = cljs.core.next.call(null,inst_20389);var inst_20370 = inst_20406;var inst_20371 = null;var inst_20372 = (0);var inst_20373 = (0);var state_20430__$1 = (function (){var statearr_20467 = state_20430;(statearr_20467[(20)] = inst_20370);
(statearr_20467[(10)] = inst_20373);
(statearr_20467[(27)] = inst_20405);
(statearr_20467[(11)] = inst_20371);
(statearr_20467[(21)] = inst_20372);
return statearr_20467;
})();var statearr_20468_20539 = state_20430__$1;(statearr_20468_20539[(2)] = null);
(statearr_20468_20539[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (43)))
{var state_20430__$1 = state_20430;var statearr_20469_20540 = state_20430__$1;(statearr_20469_20540[(2)] = null);
(statearr_20469_20540[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (29)))
{var inst_20414 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20470_20541 = state_20430__$1;(statearr_20470_20541[(2)] = inst_20414);
(statearr_20470_20541[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (44)))
{var inst_20423 = (state_20430[(2)]);var state_20430__$1 = (function (){var statearr_20471 = state_20430;(statearr_20471[(28)] = inst_20423);
return statearr_20471;
})();var statearr_20472_20542 = state_20430__$1;(statearr_20472_20542[(2)] = null);
(statearr_20472_20542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (6)))
{var inst_20362 = (state_20430[(29)]);var inst_20361 = cljs.core.deref.call(null,cs);var inst_20362__$1 = cljs.core.keys.call(null,inst_20361);var inst_20363 = cljs.core.count.call(null,inst_20362__$1);var inst_20364 = cljs.core.reset_BANG_.call(null,dctr,inst_20363);var inst_20369 = cljs.core.seq.call(null,inst_20362__$1);var inst_20370 = inst_20369;var inst_20371 = null;var inst_20372 = (0);var inst_20373 = (0);var state_20430__$1 = (function (){var statearr_20473 = state_20430;(statearr_20473[(30)] = inst_20364);
(statearr_20473[(29)] = inst_20362__$1);
(statearr_20473[(20)] = inst_20370);
(statearr_20473[(10)] = inst_20373);
(statearr_20473[(11)] = inst_20371);
(statearr_20473[(21)] = inst_20372);
return statearr_20473;
})();var statearr_20474_20543 = state_20430__$1;(statearr_20474_20543[(2)] = null);
(statearr_20474_20543[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (28)))
{var inst_20389 = (state_20430[(25)]);var inst_20370 = (state_20430[(20)]);var inst_20389__$1 = cljs.core.seq.call(null,inst_20370);var state_20430__$1 = (function (){var statearr_20475 = state_20430;(statearr_20475[(25)] = inst_20389__$1);
return statearr_20475;
})();if(inst_20389__$1)
{var statearr_20476_20544 = state_20430__$1;(statearr_20476_20544[(1)] = (33));
} else
{var statearr_20477_20545 = state_20430__$1;(statearr_20477_20545[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (25)))
{var inst_20373 = (state_20430[(10)]);var inst_20372 = (state_20430[(21)]);var inst_20375 = (inst_20373 < inst_20372);var inst_20376 = inst_20375;var state_20430__$1 = state_20430;if(cljs.core.truth_(inst_20376))
{var statearr_20478_20546 = state_20430__$1;(statearr_20478_20546[(1)] = (27));
} else
{var statearr_20479_20547 = state_20430__$1;(statearr_20479_20547[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (34)))
{var state_20430__$1 = state_20430;var statearr_20480_20548 = state_20430__$1;(statearr_20480_20548[(2)] = null);
(statearr_20480_20548[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (17)))
{var state_20430__$1 = state_20430;var statearr_20481_20549 = state_20430__$1;(statearr_20481_20549[(2)] = null);
(statearr_20481_20549[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (3)))
{var inst_20428 = (state_20430[(2)]);var state_20430__$1 = state_20430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20430__$1,inst_20428);
} else
{if((state_val_20431 === (12)))
{var inst_20357 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20482_20550 = state_20430__$1;(statearr_20482_20550[(2)] = inst_20357);
(statearr_20482_20550[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (2)))
{var state_20430__$1 = state_20430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20430__$1,(4),ch);
} else
{if((state_val_20431 === (23)))
{var state_20430__$1 = state_20430;var statearr_20483_20551 = state_20430__$1;(statearr_20483_20551[(2)] = null);
(statearr_20483_20551[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (35)))
{var inst_20412 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20484_20552 = state_20430__$1;(statearr_20484_20552[(2)] = inst_20412);
(statearr_20484_20552[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (19)))
{var inst_20331 = (state_20430[(7)]);var inst_20335 = cljs.core.chunk_first.call(null,inst_20331);var inst_20336 = cljs.core.chunk_rest.call(null,inst_20331);var inst_20337 = cljs.core.count.call(null,inst_20335);var inst_20311 = inst_20336;var inst_20312 = inst_20335;var inst_20313 = inst_20337;var inst_20314 = (0);var state_20430__$1 = (function (){var statearr_20485 = state_20430;(statearr_20485[(14)] = inst_20311);
(statearr_20485[(15)] = inst_20312);
(statearr_20485[(16)] = inst_20314);
(statearr_20485[(17)] = inst_20313);
return statearr_20485;
})();var statearr_20486_20553 = state_20430__$1;(statearr_20486_20553[(2)] = null);
(statearr_20486_20553[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (11)))
{var inst_20331 = (state_20430[(7)]);var inst_20311 = (state_20430[(14)]);var inst_20331__$1 = cljs.core.seq.call(null,inst_20311);var state_20430__$1 = (function (){var statearr_20487 = state_20430;(statearr_20487[(7)] = inst_20331__$1);
return statearr_20487;
})();if(inst_20331__$1)
{var statearr_20488_20554 = state_20430__$1;(statearr_20488_20554[(1)] = (16));
} else
{var statearr_20489_20555 = state_20430__$1;(statearr_20489_20555[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (9)))
{var inst_20359 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20490_20556 = state_20430__$1;(statearr_20490_20556[(2)] = inst_20359);
(statearr_20490_20556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (5)))
{var inst_20309 = cljs.core.deref.call(null,cs);var inst_20310 = cljs.core.seq.call(null,inst_20309);var inst_20311 = inst_20310;var inst_20312 = null;var inst_20313 = (0);var inst_20314 = (0);var state_20430__$1 = (function (){var statearr_20491 = state_20430;(statearr_20491[(14)] = inst_20311);
(statearr_20491[(15)] = inst_20312);
(statearr_20491[(16)] = inst_20314);
(statearr_20491[(17)] = inst_20313);
return statearr_20491;
})();var statearr_20492_20557 = state_20430__$1;(statearr_20492_20557[(2)] = null);
(statearr_20492_20557[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (14)))
{var state_20430__$1 = state_20430;var statearr_20493_20558 = state_20430__$1;(statearr_20493_20558[(2)] = null);
(statearr_20493_20558[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (45)))
{var inst_20420 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20494_20559 = state_20430__$1;(statearr_20494_20559[(2)] = inst_20420);
(statearr_20494_20559[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (26)))
{var inst_20362 = (state_20430[(29)]);var inst_20416 = (state_20430[(2)]);var inst_20417 = cljs.core.seq.call(null,inst_20362);var state_20430__$1 = (function (){var statearr_20495 = state_20430;(statearr_20495[(31)] = inst_20416);
return statearr_20495;
})();if(inst_20417)
{var statearr_20496_20560 = state_20430__$1;(statearr_20496_20560[(1)] = (42));
} else
{var statearr_20497_20561 = state_20430__$1;(statearr_20497_20561[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (16)))
{var inst_20331 = (state_20430[(7)]);var inst_20333 = cljs.core.chunked_seq_QMARK_.call(null,inst_20331);var state_20430__$1 = state_20430;if(inst_20333)
{var statearr_20498_20562 = state_20430__$1;(statearr_20498_20562[(1)] = (19));
} else
{var statearr_20499_20563 = state_20430__$1;(statearr_20499_20563[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (38)))
{var inst_20409 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20500_20564 = state_20430__$1;(statearr_20500_20564[(2)] = inst_20409);
(statearr_20500_20564[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (30)))
{var state_20430__$1 = state_20430;var statearr_20501_20565 = state_20430__$1;(statearr_20501_20565[(2)] = null);
(statearr_20501_20565[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (10)))
{var inst_20312 = (state_20430[(15)]);var inst_20314 = (state_20430[(16)]);var inst_20320 = cljs.core._nth.call(null,inst_20312,inst_20314);var inst_20321 = cljs.core.nth.call(null,inst_20320,(0),null);var inst_20322 = cljs.core.nth.call(null,inst_20320,(1),null);var state_20430__$1 = (function (){var statearr_20502 = state_20430;(statearr_20502[(26)] = inst_20321);
return statearr_20502;
})();if(cljs.core.truth_(inst_20322))
{var statearr_20503_20566 = state_20430__$1;(statearr_20503_20566[(1)] = (13));
} else
{var statearr_20504_20567 = state_20430__$1;(statearr_20504_20567[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (18)))
{var inst_20355 = (state_20430[(2)]);var state_20430__$1 = state_20430;var statearr_20505_20568 = state_20430__$1;(statearr_20505_20568[(2)] = inst_20355);
(statearr_20505_20568[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (42)))
{var state_20430__$1 = state_20430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20430__$1,(45),dchan);
} else
{if((state_val_20431 === (37)))
{var inst_20302 = (state_20430[(9)]);var inst_20389 = (state_20430[(25)]);var inst_20398 = (state_20430[(23)]);var inst_20398__$1 = cljs.core.first.call(null,inst_20389);var inst_20399 = cljs.core.async.put_BANG_.call(null,inst_20398__$1,inst_20302,done);var state_20430__$1 = (function (){var statearr_20506 = state_20430;(statearr_20506[(23)] = inst_20398__$1);
return statearr_20506;
})();if(cljs.core.truth_(inst_20399))
{var statearr_20507_20569 = state_20430__$1;(statearr_20507_20569[(1)] = (39));
} else
{var statearr_20508_20570 = state_20430__$1;(statearr_20508_20570[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20431 === (8)))
{var inst_20314 = (state_20430[(16)]);var inst_20313 = (state_20430[(17)]);var inst_20316 = (inst_20314 < inst_20313);var inst_20317 = inst_20316;var state_20430__$1 = state_20430;if(cljs.core.truth_(inst_20317))
{var statearr_20509_20571 = state_20430__$1;(statearr_20509_20571[(1)] = (10));
} else
{var statearr_20510_20572 = state_20430__$1;(statearr_20510_20572[(1)] = (11));
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
});})(c__5819__auto___20518,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___20518,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20514[(0)] = state_machine__5805__auto__);
(statearr_20514[(1)] = (1));
return statearr_20514;
});
var state_machine__5805__auto____1 = (function (state_20430){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20515){if((e20515 instanceof Object))
{var ex__5808__auto__ = e20515;var statearr_20516_20573 = state_20430;(statearr_20516_20573[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20515;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20574 = state_20430;
state_20430 = G__20574;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20430){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20518,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_20517 = f__5820__auto__.call(null);(statearr_20517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20518);
return statearr_20517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20518,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20576 = {};return obj20576;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20577){var map__20582 = p__20577;var map__20582__$1 = ((cljs.core.seq_QMARK_.call(null,map__20582))?cljs.core.apply.call(null,cljs.core.hash_map,map__20582):map__20582);var opts = map__20582__$1;var statearr_20583_20586 = state;(statearr_20583_20586[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20582,map__20582__$1,opts){
return (function (val){var statearr_20584_20587 = state;(statearr_20584_20587[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20582,map__20582__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20585_20588 = state;(statearr_20585_20588[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20577 = null;if (arguments.length > 3) {
  p__20577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20577);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20589){
var state = cljs.core.first(arglist__20589);
arglist__20589 = cljs.core.next(arglist__20589);
var cont_block = cljs.core.first(arglist__20589);
arglist__20589 = cljs.core.next(arglist__20589);
var ports = cljs.core.first(arglist__20589);
var p__20577 = cljs.core.rest(arglist__20589);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20577);
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
;var m = (function (){if(typeof cljs.core.async.t20709 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20709 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20710){
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
this.meta20710 = meta20710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20709.cljs$lang$type = true;
cljs.core.async.t20709.cljs$lang$ctorStr = "cljs.core.async/t20709";
cljs.core.async.t20709.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t20709");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20711){var self__ = this;
var _20711__$1 = this;return self__.meta20710;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20711,meta20710__$1){var self__ = this;
var _20711__$1 = this;return (new cljs.core.async.t20709(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20710__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20709 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20709(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20710){return (new cljs.core.async.t20709(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20710));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20709(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___20828 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20781){var state_val_20782 = (state_20781[(1)]);if((state_val_20782 === (7)))
{var inst_20725 = (state_20781[(7)]);var inst_20730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20725);var state_20781__$1 = state_20781;var statearr_20783_20829 = state_20781__$1;(statearr_20783_20829[(2)] = inst_20730);
(statearr_20783_20829[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (20)))
{var inst_20740 = (state_20781[(8)]);var state_20781__$1 = state_20781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20781__$1,(23),out,inst_20740);
} else
{if((state_val_20782 === (1)))
{var inst_20715 = (state_20781[(9)]);var inst_20715__$1 = calc_state.call(null);var inst_20716 = cljs.core.seq_QMARK_.call(null,inst_20715__$1);var state_20781__$1 = (function (){var statearr_20784 = state_20781;(statearr_20784[(9)] = inst_20715__$1);
return statearr_20784;
})();if(inst_20716)
{var statearr_20785_20830 = state_20781__$1;(statearr_20785_20830[(1)] = (2));
} else
{var statearr_20786_20831 = state_20781__$1;(statearr_20786_20831[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (24)))
{var inst_20733 = (state_20781[(10)]);var inst_20725 = inst_20733;var state_20781__$1 = (function (){var statearr_20787 = state_20781;(statearr_20787[(7)] = inst_20725);
return statearr_20787;
})();var statearr_20788_20832 = state_20781__$1;(statearr_20788_20832[(2)] = null);
(statearr_20788_20832[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (4)))
{var inst_20715 = (state_20781[(9)]);var inst_20721 = (state_20781[(2)]);var inst_20722 = cljs.core.get.call(null,inst_20721,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20723 = cljs.core.get.call(null,inst_20721,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20724 = cljs.core.get.call(null,inst_20721,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20725 = inst_20715;var state_20781__$1 = (function (){var statearr_20789 = state_20781;(statearr_20789[(11)] = inst_20723);
(statearr_20789[(12)] = inst_20722);
(statearr_20789[(13)] = inst_20724);
(statearr_20789[(7)] = inst_20725);
return statearr_20789;
})();var statearr_20790_20833 = state_20781__$1;(statearr_20790_20833[(2)] = null);
(statearr_20790_20833[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (15)))
{var state_20781__$1 = state_20781;var statearr_20791_20834 = state_20781__$1;(statearr_20791_20834[(2)] = null);
(statearr_20791_20834[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (21)))
{var inst_20733 = (state_20781[(10)]);var inst_20725 = inst_20733;var state_20781__$1 = (function (){var statearr_20792 = state_20781;(statearr_20792[(7)] = inst_20725);
return statearr_20792;
})();var statearr_20793_20835 = state_20781__$1;(statearr_20793_20835[(2)] = null);
(statearr_20793_20835[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (13)))
{var inst_20777 = (state_20781[(2)]);var state_20781__$1 = state_20781;var statearr_20794_20836 = state_20781__$1;(statearr_20794_20836[(2)] = inst_20777);
(statearr_20794_20836[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (22)))
{var inst_20775 = (state_20781[(2)]);var state_20781__$1 = state_20781;var statearr_20795_20837 = state_20781__$1;(statearr_20795_20837[(2)] = inst_20775);
(statearr_20795_20837[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (6)))
{var inst_20779 = (state_20781[(2)]);var state_20781__$1 = state_20781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20781__$1,inst_20779);
} else
{if((state_val_20782 === (25)))
{var state_20781__$1 = state_20781;var statearr_20796_20838 = state_20781__$1;(statearr_20796_20838[(2)] = null);
(statearr_20796_20838[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (17)))
{var inst_20755 = (state_20781[(14)]);var state_20781__$1 = state_20781;var statearr_20797_20839 = state_20781__$1;(statearr_20797_20839[(2)] = inst_20755);
(statearr_20797_20839[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (3)))
{var inst_20715 = (state_20781[(9)]);var state_20781__$1 = state_20781;var statearr_20798_20840 = state_20781__$1;(statearr_20798_20840[(2)] = inst_20715);
(statearr_20798_20840[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (12)))
{var inst_20755 = (state_20781[(14)]);var inst_20736 = (state_20781[(15)]);var inst_20741 = (state_20781[(16)]);var inst_20755__$1 = inst_20736.call(null,inst_20741);var state_20781__$1 = (function (){var statearr_20799 = state_20781;(statearr_20799[(14)] = inst_20755__$1);
return statearr_20799;
})();if(cljs.core.truth_(inst_20755__$1))
{var statearr_20800_20841 = state_20781__$1;(statearr_20800_20841[(1)] = (17));
} else
{var statearr_20801_20842 = state_20781__$1;(statearr_20801_20842[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (2)))
{var inst_20715 = (state_20781[(9)]);var inst_20718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20715);var state_20781__$1 = state_20781;var statearr_20802_20843 = state_20781__$1;(statearr_20802_20843[(2)] = inst_20718);
(statearr_20802_20843[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (23)))
{var inst_20766 = (state_20781[(2)]);var state_20781__$1 = state_20781;if(cljs.core.truth_(inst_20766))
{var statearr_20803_20844 = state_20781__$1;(statearr_20803_20844[(1)] = (24));
} else
{var statearr_20804_20845 = state_20781__$1;(statearr_20804_20845[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (19)))
{var inst_20763 = (state_20781[(2)]);var state_20781__$1 = state_20781;if(cljs.core.truth_(inst_20763))
{var statearr_20805_20846 = state_20781__$1;(statearr_20805_20846[(1)] = (20));
} else
{var statearr_20806_20847 = state_20781__$1;(statearr_20806_20847[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (11)))
{var inst_20740 = (state_20781[(8)]);var inst_20746 = (inst_20740 == null);var state_20781__$1 = state_20781;if(cljs.core.truth_(inst_20746))
{var statearr_20807_20848 = state_20781__$1;(statearr_20807_20848[(1)] = (14));
} else
{var statearr_20808_20849 = state_20781__$1;(statearr_20808_20849[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (9)))
{var inst_20733 = (state_20781[(10)]);var inst_20733__$1 = (state_20781[(2)]);var inst_20734 = cljs.core.get.call(null,inst_20733__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20735 = cljs.core.get.call(null,inst_20733__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20736 = cljs.core.get.call(null,inst_20733__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20781__$1 = (function (){var statearr_20809 = state_20781;(statearr_20809[(15)] = inst_20736);
(statearr_20809[(17)] = inst_20735);
(statearr_20809[(10)] = inst_20733__$1);
return statearr_20809;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20781__$1,(10),inst_20734);
} else
{if((state_val_20782 === (5)))
{var inst_20725 = (state_20781[(7)]);var inst_20728 = cljs.core.seq_QMARK_.call(null,inst_20725);var state_20781__$1 = state_20781;if(inst_20728)
{var statearr_20810_20850 = state_20781__$1;(statearr_20810_20850[(1)] = (7));
} else
{var statearr_20811_20851 = state_20781__$1;(statearr_20811_20851[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (14)))
{var inst_20741 = (state_20781[(16)]);var inst_20748 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20741);var state_20781__$1 = state_20781;var statearr_20812_20852 = state_20781__$1;(statearr_20812_20852[(2)] = inst_20748);
(statearr_20812_20852[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (26)))
{var inst_20771 = (state_20781[(2)]);var state_20781__$1 = state_20781;var statearr_20813_20853 = state_20781__$1;(statearr_20813_20853[(2)] = inst_20771);
(statearr_20813_20853[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (16)))
{var inst_20751 = (state_20781[(2)]);var inst_20752 = calc_state.call(null);var inst_20725 = inst_20752;var state_20781__$1 = (function (){var statearr_20814 = state_20781;(statearr_20814[(18)] = inst_20751);
(statearr_20814[(7)] = inst_20725);
return statearr_20814;
})();var statearr_20815_20854 = state_20781__$1;(statearr_20815_20854[(2)] = null);
(statearr_20815_20854[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (10)))
{var inst_20740 = (state_20781[(8)]);var inst_20741 = (state_20781[(16)]);var inst_20739 = (state_20781[(2)]);var inst_20740__$1 = cljs.core.nth.call(null,inst_20739,(0),null);var inst_20741__$1 = cljs.core.nth.call(null,inst_20739,(1),null);var inst_20742 = (inst_20740__$1 == null);var inst_20743 = cljs.core._EQ_.call(null,inst_20741__$1,change);var inst_20744 = (inst_20742) || (inst_20743);var state_20781__$1 = (function (){var statearr_20816 = state_20781;(statearr_20816[(8)] = inst_20740__$1);
(statearr_20816[(16)] = inst_20741__$1);
return statearr_20816;
})();if(cljs.core.truth_(inst_20744))
{var statearr_20817_20855 = state_20781__$1;(statearr_20817_20855[(1)] = (11));
} else
{var statearr_20818_20856 = state_20781__$1;(statearr_20818_20856[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (18)))
{var inst_20736 = (state_20781[(15)]);var inst_20735 = (state_20781[(17)]);var inst_20741 = (state_20781[(16)]);var inst_20758 = cljs.core.empty_QMARK_.call(null,inst_20736);var inst_20759 = inst_20735.call(null,inst_20741);var inst_20760 = cljs.core.not.call(null,inst_20759);var inst_20761 = (inst_20758) && (inst_20760);var state_20781__$1 = state_20781;var statearr_20819_20857 = state_20781__$1;(statearr_20819_20857[(2)] = inst_20761);
(statearr_20819_20857[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20782 === (8)))
{var inst_20725 = (state_20781[(7)]);var state_20781__$1 = state_20781;var statearr_20820_20858 = state_20781__$1;(statearr_20820_20858[(2)] = inst_20725);
(statearr_20820_20858[(1)] = (9));
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
});})(c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_20824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20824[(0)] = state_machine__5805__auto__);
(statearr_20824[(1)] = (1));
return statearr_20824;
});
var state_machine__5805__auto____1 = (function (state_20781){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_20781);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e20825){if((e20825 instanceof Object))
{var ex__5808__auto__ = e20825;var statearr_20826_20859 = state_20781;(statearr_20826_20859[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20825;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20860 = state_20781;
state_20781 = G__20860;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_20781){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_20781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_20827 = f__5820__auto__.call(null);(statearr_20827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___20828);
return statearr_20827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___20828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20862 = {};return obj20862;
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
return (function (p1__20863_SHARP_){if(cljs.core.truth_(p1__20863_SHARP_.call(null,topic)))
{return p1__20863_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20863_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20986 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20986 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20987){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20987 = meta20987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20986.cljs$lang$type = true;
cljs.core.async.t20986.cljs$lang$ctorStr = "cljs.core.async/t20986";
cljs.core.async.t20986.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t20986");
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20986.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20988){var self__ = this;
var _20988__$1 = this;return self__.meta20987;
});})(mults,ensure_mult))
;
cljs.core.async.t20986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20988,meta20987__$1){var self__ = this;
var _20988__$1 = this;return (new cljs.core.async.t20986(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20987__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20986 = ((function (mults,ensure_mult){
return (function __GT_t20986(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20987){return (new cljs.core.async.t20986(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20987));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20986(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___21108 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21108,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21108,mults,ensure_mult,p){
return (function (state_21060){var state_val_21061 = (state_21060[(1)]);if((state_val_21061 === (7)))
{var inst_21056 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21062_21109 = state_21060__$1;(statearr_21062_21109[(2)] = inst_21056);
(statearr_21062_21109[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (20)))
{var state_21060__$1 = state_21060;var statearr_21063_21110 = state_21060__$1;(statearr_21063_21110[(2)] = null);
(statearr_21063_21110[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (1)))
{var state_21060__$1 = state_21060;var statearr_21064_21111 = state_21060__$1;(statearr_21064_21111[(2)] = null);
(statearr_21064_21111[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (24)))
{var inst_21039 = (state_21060[(7)]);var inst_21048 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21039);var state_21060__$1 = state_21060;var statearr_21065_21112 = state_21060__$1;(statearr_21065_21112[(2)] = inst_21048);
(statearr_21065_21112[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (4)))
{var inst_20991 = (state_21060[(8)]);var inst_20991__$1 = (state_21060[(2)]);var inst_20992 = (inst_20991__$1 == null);var state_21060__$1 = (function (){var statearr_21066 = state_21060;(statearr_21066[(8)] = inst_20991__$1);
return statearr_21066;
})();if(cljs.core.truth_(inst_20992))
{var statearr_21067_21113 = state_21060__$1;(statearr_21067_21113[(1)] = (5));
} else
{var statearr_21068_21114 = state_21060__$1;(statearr_21068_21114[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (15)))
{var inst_21033 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21069_21115 = state_21060__$1;(statearr_21069_21115[(2)] = inst_21033);
(statearr_21069_21115[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (21)))
{var inst_21053 = (state_21060[(2)]);var state_21060__$1 = (function (){var statearr_21070 = state_21060;(statearr_21070[(9)] = inst_21053);
return statearr_21070;
})();var statearr_21071_21116 = state_21060__$1;(statearr_21071_21116[(2)] = null);
(statearr_21071_21116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (13)))
{var inst_21015 = (state_21060[(10)]);var inst_21017 = cljs.core.chunked_seq_QMARK_.call(null,inst_21015);var state_21060__$1 = state_21060;if(inst_21017)
{var statearr_21072_21117 = state_21060__$1;(statearr_21072_21117[(1)] = (16));
} else
{var statearr_21073_21118 = state_21060__$1;(statearr_21073_21118[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (22)))
{var inst_21045 = (state_21060[(2)]);var state_21060__$1 = state_21060;if(cljs.core.truth_(inst_21045))
{var statearr_21074_21119 = state_21060__$1;(statearr_21074_21119[(1)] = (23));
} else
{var statearr_21075_21120 = state_21060__$1;(statearr_21075_21120[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (6)))
{var inst_21039 = (state_21060[(7)]);var inst_21041 = (state_21060[(11)]);var inst_20991 = (state_21060[(8)]);var inst_21039__$1 = topic_fn.call(null,inst_20991);var inst_21040 = cljs.core.deref.call(null,mults);var inst_21041__$1 = cljs.core.get.call(null,inst_21040,inst_21039__$1);var state_21060__$1 = (function (){var statearr_21076 = state_21060;(statearr_21076[(7)] = inst_21039__$1);
(statearr_21076[(11)] = inst_21041__$1);
return statearr_21076;
})();if(cljs.core.truth_(inst_21041__$1))
{var statearr_21077_21121 = state_21060__$1;(statearr_21077_21121[(1)] = (19));
} else
{var statearr_21078_21122 = state_21060__$1;(statearr_21078_21122[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (25)))
{var inst_21050 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21079_21123 = state_21060__$1;(statearr_21079_21123[(2)] = inst_21050);
(statearr_21079_21123[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (17)))
{var inst_21015 = (state_21060[(10)]);var inst_21024 = cljs.core.first.call(null,inst_21015);var inst_21025 = cljs.core.async.muxch_STAR_.call(null,inst_21024);var inst_21026 = cljs.core.async.close_BANG_.call(null,inst_21025);var inst_21027 = cljs.core.next.call(null,inst_21015);var inst_21001 = inst_21027;var inst_21002 = null;var inst_21003 = (0);var inst_21004 = (0);var state_21060__$1 = (function (){var statearr_21080 = state_21060;(statearr_21080[(12)] = inst_21002);
(statearr_21080[(13)] = inst_21001);
(statearr_21080[(14)] = inst_21003);
(statearr_21080[(15)] = inst_21026);
(statearr_21080[(16)] = inst_21004);
return statearr_21080;
})();var statearr_21081_21124 = state_21060__$1;(statearr_21081_21124[(2)] = null);
(statearr_21081_21124[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (3)))
{var inst_21058 = (state_21060[(2)]);var state_21060__$1 = state_21060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21060__$1,inst_21058);
} else
{if((state_val_21061 === (12)))
{var inst_21035 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21082_21125 = state_21060__$1;(statearr_21082_21125[(2)] = inst_21035);
(statearr_21082_21125[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (2)))
{var state_21060__$1 = state_21060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21060__$1,(4),ch);
} else
{if((state_val_21061 === (23)))
{var state_21060__$1 = state_21060;var statearr_21083_21126 = state_21060__$1;(statearr_21083_21126[(2)] = null);
(statearr_21083_21126[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (19)))
{var inst_21041 = (state_21060[(11)]);var inst_20991 = (state_21060[(8)]);var inst_21043 = cljs.core.async.muxch_STAR_.call(null,inst_21041);var state_21060__$1 = state_21060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21060__$1,(22),inst_21043,inst_20991);
} else
{if((state_val_21061 === (11)))
{var inst_21001 = (state_21060[(13)]);var inst_21015 = (state_21060[(10)]);var inst_21015__$1 = cljs.core.seq.call(null,inst_21001);var state_21060__$1 = (function (){var statearr_21084 = state_21060;(statearr_21084[(10)] = inst_21015__$1);
return statearr_21084;
})();if(inst_21015__$1)
{var statearr_21085_21127 = state_21060__$1;(statearr_21085_21127[(1)] = (13));
} else
{var statearr_21086_21128 = state_21060__$1;(statearr_21086_21128[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (9)))
{var inst_21037 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21087_21129 = state_21060__$1;(statearr_21087_21129[(2)] = inst_21037);
(statearr_21087_21129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (5)))
{var inst_20998 = cljs.core.deref.call(null,mults);var inst_20999 = cljs.core.vals.call(null,inst_20998);var inst_21000 = cljs.core.seq.call(null,inst_20999);var inst_21001 = inst_21000;var inst_21002 = null;var inst_21003 = (0);var inst_21004 = (0);var state_21060__$1 = (function (){var statearr_21088 = state_21060;(statearr_21088[(12)] = inst_21002);
(statearr_21088[(13)] = inst_21001);
(statearr_21088[(14)] = inst_21003);
(statearr_21088[(16)] = inst_21004);
return statearr_21088;
})();var statearr_21089_21130 = state_21060__$1;(statearr_21089_21130[(2)] = null);
(statearr_21089_21130[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (14)))
{var state_21060__$1 = state_21060;var statearr_21093_21131 = state_21060__$1;(statearr_21093_21131[(2)] = null);
(statearr_21093_21131[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (16)))
{var inst_21015 = (state_21060[(10)]);var inst_21019 = cljs.core.chunk_first.call(null,inst_21015);var inst_21020 = cljs.core.chunk_rest.call(null,inst_21015);var inst_21021 = cljs.core.count.call(null,inst_21019);var inst_21001 = inst_21020;var inst_21002 = inst_21019;var inst_21003 = inst_21021;var inst_21004 = (0);var state_21060__$1 = (function (){var statearr_21094 = state_21060;(statearr_21094[(12)] = inst_21002);
(statearr_21094[(13)] = inst_21001);
(statearr_21094[(14)] = inst_21003);
(statearr_21094[(16)] = inst_21004);
return statearr_21094;
})();var statearr_21095_21132 = state_21060__$1;(statearr_21095_21132[(2)] = null);
(statearr_21095_21132[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (10)))
{var inst_21002 = (state_21060[(12)]);var inst_21001 = (state_21060[(13)]);var inst_21003 = (state_21060[(14)]);var inst_21004 = (state_21060[(16)]);var inst_21009 = cljs.core._nth.call(null,inst_21002,inst_21004);var inst_21010 = cljs.core.async.muxch_STAR_.call(null,inst_21009);var inst_21011 = cljs.core.async.close_BANG_.call(null,inst_21010);var inst_21012 = (inst_21004 + (1));var tmp21090 = inst_21002;var tmp21091 = inst_21001;var tmp21092 = inst_21003;var inst_21001__$1 = tmp21091;var inst_21002__$1 = tmp21090;var inst_21003__$1 = tmp21092;var inst_21004__$1 = inst_21012;var state_21060__$1 = (function (){var statearr_21096 = state_21060;(statearr_21096[(12)] = inst_21002__$1);
(statearr_21096[(13)] = inst_21001__$1);
(statearr_21096[(14)] = inst_21003__$1);
(statearr_21096[(17)] = inst_21011);
(statearr_21096[(16)] = inst_21004__$1);
return statearr_21096;
})();var statearr_21097_21133 = state_21060__$1;(statearr_21097_21133[(2)] = null);
(statearr_21097_21133[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (18)))
{var inst_21030 = (state_21060[(2)]);var state_21060__$1 = state_21060;var statearr_21098_21134 = state_21060__$1;(statearr_21098_21134[(2)] = inst_21030);
(statearr_21098_21134[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21061 === (8)))
{var inst_21003 = (state_21060[(14)]);var inst_21004 = (state_21060[(16)]);var inst_21006 = (inst_21004 < inst_21003);var inst_21007 = inst_21006;var state_21060__$1 = state_21060;if(cljs.core.truth_(inst_21007))
{var statearr_21099_21135 = state_21060__$1;(statearr_21099_21135[(1)] = (10));
} else
{var statearr_21100_21136 = state_21060__$1;(statearr_21100_21136[(1)] = (11));
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
});})(c__5819__auto___21108,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___21108,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21104[(0)] = state_machine__5805__auto__);
(statearr_21104[(1)] = (1));
return statearr_21104;
});
var state_machine__5805__auto____1 = (function (state_21060){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21060);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21105){if((e21105 instanceof Object))
{var ex__5808__auto__ = e21105;var statearr_21106_21137 = state_21060;(statearr_21106_21137[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21060);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21105;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21138 = state_21060;
state_21060 = G__21138;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21060){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21108,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_21107 = f__5820__auto__.call(null);(statearr_21107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21108);
return statearr_21107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21108,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5819__auto___21275 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21245){var state_val_21246 = (state_21245[(1)]);if((state_val_21246 === (7)))
{var state_21245__$1 = state_21245;var statearr_21247_21276 = state_21245__$1;(statearr_21247_21276[(2)] = null);
(statearr_21247_21276[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (1)))
{var state_21245__$1 = state_21245;var statearr_21248_21277 = state_21245__$1;(statearr_21248_21277[(2)] = null);
(statearr_21248_21277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (4)))
{var inst_21209 = (state_21245[(7)]);var inst_21211 = (inst_21209 < cnt);var state_21245__$1 = state_21245;if(cljs.core.truth_(inst_21211))
{var statearr_21249_21278 = state_21245__$1;(statearr_21249_21278[(1)] = (6));
} else
{var statearr_21250_21279 = state_21245__$1;(statearr_21250_21279[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (15)))
{var inst_21241 = (state_21245[(2)]);var state_21245__$1 = state_21245;var statearr_21251_21280 = state_21245__$1;(statearr_21251_21280[(2)] = inst_21241);
(statearr_21251_21280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (13)))
{var inst_21234 = cljs.core.async.close_BANG_.call(null,out);var state_21245__$1 = state_21245;var statearr_21252_21281 = state_21245__$1;(statearr_21252_21281[(2)] = inst_21234);
(statearr_21252_21281[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (6)))
{var state_21245__$1 = state_21245;var statearr_21253_21282 = state_21245__$1;(statearr_21253_21282[(2)] = null);
(statearr_21253_21282[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (3)))
{var inst_21243 = (state_21245[(2)]);var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21245__$1,inst_21243);
} else
{if((state_val_21246 === (12)))
{var inst_21231 = (state_21245[(8)]);var inst_21231__$1 = (state_21245[(2)]);var inst_21232 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21231__$1);var state_21245__$1 = (function (){var statearr_21254 = state_21245;(statearr_21254[(8)] = inst_21231__$1);
return statearr_21254;
})();if(cljs.core.truth_(inst_21232))
{var statearr_21255_21283 = state_21245__$1;(statearr_21255_21283[(1)] = (13));
} else
{var statearr_21256_21284 = state_21245__$1;(statearr_21256_21284[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (2)))
{var inst_21208 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21209 = (0);var state_21245__$1 = (function (){var statearr_21257 = state_21245;(statearr_21257[(9)] = inst_21208);
(statearr_21257[(7)] = inst_21209);
return statearr_21257;
})();var statearr_21258_21285 = state_21245__$1;(statearr_21258_21285[(2)] = null);
(statearr_21258_21285[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (11)))
{var inst_21209 = (state_21245[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21245,(10),Object,null,(9));var inst_21218 = chs__$1.call(null,inst_21209);var inst_21219 = done.call(null,inst_21209);var inst_21220 = cljs.core.async.take_BANG_.call(null,inst_21218,inst_21219);var state_21245__$1 = state_21245;var statearr_21259_21286 = state_21245__$1;(statearr_21259_21286[(2)] = inst_21220);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21245__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (9)))
{var inst_21209 = (state_21245[(7)]);var inst_21222 = (state_21245[(2)]);var inst_21223 = (inst_21209 + (1));var inst_21209__$1 = inst_21223;var state_21245__$1 = (function (){var statearr_21260 = state_21245;(statearr_21260[(7)] = inst_21209__$1);
(statearr_21260[(10)] = inst_21222);
return statearr_21260;
})();var statearr_21261_21287 = state_21245__$1;(statearr_21261_21287[(2)] = null);
(statearr_21261_21287[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (5)))
{var inst_21229 = (state_21245[(2)]);var state_21245__$1 = (function (){var statearr_21262 = state_21245;(statearr_21262[(11)] = inst_21229);
return statearr_21262;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21245__$1,(12),dchan);
} else
{if((state_val_21246 === (14)))
{var inst_21231 = (state_21245[(8)]);var inst_21236 = cljs.core.apply.call(null,f,inst_21231);var state_21245__$1 = state_21245;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21245__$1,(16),out,inst_21236);
} else
{if((state_val_21246 === (16)))
{var inst_21238 = (state_21245[(2)]);var state_21245__$1 = (function (){var statearr_21263 = state_21245;(statearr_21263[(12)] = inst_21238);
return statearr_21263;
})();var statearr_21264_21288 = state_21245__$1;(statearr_21264_21288[(2)] = null);
(statearr_21264_21288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (10)))
{var inst_21213 = (state_21245[(2)]);var inst_21214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21245__$1 = (function (){var statearr_21265 = state_21245;(statearr_21265[(13)] = inst_21213);
return statearr_21265;
})();var statearr_21266_21289 = state_21245__$1;(statearr_21266_21289[(2)] = inst_21214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21245__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21246 === (8)))
{var inst_21227 = (state_21245[(2)]);var state_21245__$1 = state_21245;var statearr_21267_21290 = state_21245__$1;(statearr_21267_21290[(2)] = inst_21227);
(statearr_21267_21290[(1)] = (5));
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
});})(c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21271[(0)] = state_machine__5805__auto__);
(statearr_21271[(1)] = (1));
return statearr_21271;
});
var state_machine__5805__auto____1 = (function (state_21245){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21245);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21272){if((e21272 instanceof Object))
{var ex__5808__auto__ = e21272;var statearr_21273_21291 = state_21245;(statearr_21273_21291[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21245);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21272;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21292 = state_21245;
state_21245 = G__21292;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21245){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_21274 = f__5820__auto__.call(null);(statearr_21274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21275);
return statearr_21274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21275,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21400,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21400,out){
return (function (state_21376){var state_val_21377 = (state_21376[(1)]);if((state_val_21377 === (7)))
{var inst_21356 = (state_21376[(7)]);var inst_21355 = (state_21376[(8)]);var inst_21355__$1 = (state_21376[(2)]);var inst_21356__$1 = cljs.core.nth.call(null,inst_21355__$1,(0),null);var inst_21357 = cljs.core.nth.call(null,inst_21355__$1,(1),null);var inst_21358 = (inst_21356__$1 == null);var state_21376__$1 = (function (){var statearr_21378 = state_21376;(statearr_21378[(7)] = inst_21356__$1);
(statearr_21378[(9)] = inst_21357);
(statearr_21378[(8)] = inst_21355__$1);
return statearr_21378;
})();if(cljs.core.truth_(inst_21358))
{var statearr_21379_21401 = state_21376__$1;(statearr_21379_21401[(1)] = (8));
} else
{var statearr_21380_21402 = state_21376__$1;(statearr_21380_21402[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (1)))
{var inst_21347 = cljs.core.vec.call(null,chs);var inst_21348 = inst_21347;var state_21376__$1 = (function (){var statearr_21381 = state_21376;(statearr_21381[(10)] = inst_21348);
return statearr_21381;
})();var statearr_21382_21403 = state_21376__$1;(statearr_21382_21403[(2)] = null);
(statearr_21382_21403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (4)))
{var inst_21348 = (state_21376[(10)]);var state_21376__$1 = state_21376;return cljs.core.async.ioc_alts_BANG_.call(null,state_21376__$1,(7),inst_21348);
} else
{if((state_val_21377 === (6)))
{var inst_21372 = (state_21376[(2)]);var state_21376__$1 = state_21376;var statearr_21383_21404 = state_21376__$1;(statearr_21383_21404[(2)] = inst_21372);
(statearr_21383_21404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (3)))
{var inst_21374 = (state_21376[(2)]);var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21376__$1,inst_21374);
} else
{if((state_val_21377 === (2)))
{var inst_21348 = (state_21376[(10)]);var inst_21350 = cljs.core.count.call(null,inst_21348);var inst_21351 = (inst_21350 > (0));var state_21376__$1 = state_21376;if(cljs.core.truth_(inst_21351))
{var statearr_21385_21405 = state_21376__$1;(statearr_21385_21405[(1)] = (4));
} else
{var statearr_21386_21406 = state_21376__$1;(statearr_21386_21406[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (11)))
{var inst_21348 = (state_21376[(10)]);var inst_21365 = (state_21376[(2)]);var tmp21384 = inst_21348;var inst_21348__$1 = tmp21384;var state_21376__$1 = (function (){var statearr_21387 = state_21376;(statearr_21387[(10)] = inst_21348__$1);
(statearr_21387[(11)] = inst_21365);
return statearr_21387;
})();var statearr_21388_21407 = state_21376__$1;(statearr_21388_21407[(2)] = null);
(statearr_21388_21407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (9)))
{var inst_21356 = (state_21376[(7)]);var state_21376__$1 = state_21376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21376__$1,(11),out,inst_21356);
} else
{if((state_val_21377 === (5)))
{var inst_21370 = cljs.core.async.close_BANG_.call(null,out);var state_21376__$1 = state_21376;var statearr_21389_21408 = state_21376__$1;(statearr_21389_21408[(2)] = inst_21370);
(statearr_21389_21408[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (10)))
{var inst_21368 = (state_21376[(2)]);var state_21376__$1 = state_21376;var statearr_21390_21409 = state_21376__$1;(statearr_21390_21409[(2)] = inst_21368);
(statearr_21390_21409[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21377 === (8)))
{var inst_21348 = (state_21376[(10)]);var inst_21356 = (state_21376[(7)]);var inst_21357 = (state_21376[(9)]);var inst_21355 = (state_21376[(8)]);var inst_21360 = (function (){var c = inst_21357;var v = inst_21356;var vec__21353 = inst_21355;var cs = inst_21348;return ((function (c,v,vec__21353,cs,inst_21348,inst_21356,inst_21357,inst_21355,state_val_21377,c__5819__auto___21400,out){
return (function (p1__21293_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21293_SHARP_);
});
;})(c,v,vec__21353,cs,inst_21348,inst_21356,inst_21357,inst_21355,state_val_21377,c__5819__auto___21400,out))
})();var inst_21361 = cljs.core.filterv.call(null,inst_21360,inst_21348);var inst_21348__$1 = inst_21361;var state_21376__$1 = (function (){var statearr_21391 = state_21376;(statearr_21391[(10)] = inst_21348__$1);
return statearr_21391;
})();var statearr_21392_21410 = state_21376__$1;(statearr_21392_21410[(2)] = null);
(statearr_21392_21410[(1)] = (2));
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
});})(c__5819__auto___21400,out))
;return ((function (switch__5804__auto__,c__5819__auto___21400,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21396 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21396[(0)] = state_machine__5805__auto__);
(statearr_21396[(1)] = (1));
return statearr_21396;
});
var state_machine__5805__auto____1 = (function (state_21376){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21376);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21397){if((e21397 instanceof Object))
{var ex__5808__auto__ = e21397;var statearr_21398_21411 = state_21376;(statearr_21398_21411[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21397;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21412 = state_21376;
state_21376 = G__21412;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21400,out))
})();var state__5821__auto__ = (function (){var statearr_21399 = f__5820__auto__.call(null);(statearr_21399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21400);
return statearr_21399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21400,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21505 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21505,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21505,out){
return (function (state_21482){var state_val_21483 = (state_21482[(1)]);if((state_val_21483 === (7)))
{var inst_21464 = (state_21482[(7)]);var inst_21464__$1 = (state_21482[(2)]);var inst_21465 = (inst_21464__$1 == null);var inst_21466 = cljs.core.not.call(null,inst_21465);var state_21482__$1 = (function (){var statearr_21484 = state_21482;(statearr_21484[(7)] = inst_21464__$1);
return statearr_21484;
})();if(inst_21466)
{var statearr_21485_21506 = state_21482__$1;(statearr_21485_21506[(1)] = (8));
} else
{var statearr_21486_21507 = state_21482__$1;(statearr_21486_21507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (1)))
{var inst_21459 = (0);var state_21482__$1 = (function (){var statearr_21487 = state_21482;(statearr_21487[(8)] = inst_21459);
return statearr_21487;
})();var statearr_21488_21508 = state_21482__$1;(statearr_21488_21508[(2)] = null);
(statearr_21488_21508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (4)))
{var state_21482__$1 = state_21482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21482__$1,(7),ch);
} else
{if((state_val_21483 === (6)))
{var inst_21477 = (state_21482[(2)]);var state_21482__$1 = state_21482;var statearr_21489_21509 = state_21482__$1;(statearr_21489_21509[(2)] = inst_21477);
(statearr_21489_21509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (3)))
{var inst_21479 = (state_21482[(2)]);var inst_21480 = cljs.core.async.close_BANG_.call(null,out);var state_21482__$1 = (function (){var statearr_21490 = state_21482;(statearr_21490[(9)] = inst_21479);
return statearr_21490;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21482__$1,inst_21480);
} else
{if((state_val_21483 === (2)))
{var inst_21459 = (state_21482[(8)]);var inst_21461 = (inst_21459 < n);var state_21482__$1 = state_21482;if(cljs.core.truth_(inst_21461))
{var statearr_21491_21510 = state_21482__$1;(statearr_21491_21510[(1)] = (4));
} else
{var statearr_21492_21511 = state_21482__$1;(statearr_21492_21511[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (11)))
{var inst_21459 = (state_21482[(8)]);var inst_21469 = (state_21482[(2)]);var inst_21470 = (inst_21459 + (1));var inst_21459__$1 = inst_21470;var state_21482__$1 = (function (){var statearr_21493 = state_21482;(statearr_21493[(10)] = inst_21469);
(statearr_21493[(8)] = inst_21459__$1);
return statearr_21493;
})();var statearr_21494_21512 = state_21482__$1;(statearr_21494_21512[(2)] = null);
(statearr_21494_21512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (9)))
{var state_21482__$1 = state_21482;var statearr_21495_21513 = state_21482__$1;(statearr_21495_21513[(2)] = null);
(statearr_21495_21513[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (5)))
{var state_21482__$1 = state_21482;var statearr_21496_21514 = state_21482__$1;(statearr_21496_21514[(2)] = null);
(statearr_21496_21514[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (10)))
{var inst_21474 = (state_21482[(2)]);var state_21482__$1 = state_21482;var statearr_21497_21515 = state_21482__$1;(statearr_21497_21515[(2)] = inst_21474);
(statearr_21497_21515[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21483 === (8)))
{var inst_21464 = (state_21482[(7)]);var state_21482__$1 = state_21482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21482__$1,(11),out,inst_21464);
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
});})(c__5819__auto___21505,out))
;return ((function (switch__5804__auto__,c__5819__auto___21505,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21501 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21501[(0)] = state_machine__5805__auto__);
(statearr_21501[(1)] = (1));
return statearr_21501;
});
var state_machine__5805__auto____1 = (function (state_21482){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21502){if((e21502 instanceof Object))
{var ex__5808__auto__ = e21502;var statearr_21503_21516 = state_21482;(statearr_21503_21516[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21482);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21502;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21517 = state_21482;
state_21482 = G__21517;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21482){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21505,out))
})();var state__5821__auto__ = (function (){var statearr_21504 = f__5820__auto__.call(null);(statearr_21504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21505);
return statearr_21504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21505,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21525 = (function (ch,f,map_LT_,meta21526){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21526 = meta21526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21525.cljs$lang$type = true;
cljs.core.async.t21525.cljs$lang$ctorStr = "cljs.core.async/t21525";
cljs.core.async.t21525.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21525");
});
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21528 = (function (fn1,_,meta21526,ch,f,map_LT_,meta21529){
this.fn1 = fn1;
this._ = _;
this.meta21526 = meta21526;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21529 = meta21529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21528.cljs$lang$type = true;
cljs.core.async.t21528.cljs$lang$ctorStr = "cljs.core.async/t21528";
cljs.core.async.t21528.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21528");
});})(___$1))
;
cljs.core.async.t21528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21518_SHARP_){return f1.call(null,(((p1__21518_SHARP_ == null))?null:self__.f.call(null,p1__21518_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21530){var self__ = this;
var _21530__$1 = this;return self__.meta21529;
});})(___$1))
;
cljs.core.async.t21528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21530,meta21529__$1){var self__ = this;
var _21530__$1 = this;return (new cljs.core.async.t21528(self__.fn1,self__._,self__.meta21526,self__.ch,self__.f,self__.map_LT_,meta21529__$1));
});})(___$1))
;
cljs.core.async.__GT_t21528 = ((function (___$1){
return (function __GT_t21528(fn1__$1,___$2,meta21526__$1,ch__$2,f__$2,map_LT___$2,meta21529){return (new cljs.core.async.t21528(fn1__$1,___$2,meta21526__$1,ch__$2,f__$2,map_LT___$2,meta21529));
});})(___$1))
;
}
return (new cljs.core.async.t21528(fn1,___$1,self__.meta21526,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21525.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21527){var self__ = this;
var _21527__$1 = this;return self__.meta21526;
});
cljs.core.async.t21525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21527,meta21526__$1){var self__ = this;
var _21527__$1 = this;return (new cljs.core.async.t21525(self__.ch,self__.f,self__.map_LT_,meta21526__$1));
});
cljs.core.async.__GT_t21525 = (function __GT_t21525(ch__$1,f__$1,map_LT___$1,meta21526){return (new cljs.core.async.t21525(ch__$1,f__$1,map_LT___$1,meta21526));
});
}
return (new cljs.core.async.t21525(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21534 = (function (ch,f,map_GT_,meta21535){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21535 = meta21535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21534.cljs$lang$type = true;
cljs.core.async.t21534.cljs$lang$ctorStr = "cljs.core.async/t21534";
cljs.core.async.t21534.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21534");
});
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21536){var self__ = this;
var _21536__$1 = this;return self__.meta21535;
});
cljs.core.async.t21534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21536,meta21535__$1){var self__ = this;
var _21536__$1 = this;return (new cljs.core.async.t21534(self__.ch,self__.f,self__.map_GT_,meta21535__$1));
});
cljs.core.async.__GT_t21534 = (function __GT_t21534(ch__$1,f__$1,map_GT___$1,meta21535){return (new cljs.core.async.t21534(ch__$1,f__$1,map_GT___$1,meta21535));
});
}
return (new cljs.core.async.t21534(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21540 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21540 = (function (ch,p,filter_GT_,meta21541){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21541 = meta21541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21540.cljs$lang$type = true;
cljs.core.async.t21540.cljs$lang$ctorStr = "cljs.core.async/t21540";
cljs.core.async.t21540.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t21540");
});
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21542){var self__ = this;
var _21542__$1 = this;return self__.meta21541;
});
cljs.core.async.t21540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21542,meta21541__$1){var self__ = this;
var _21542__$1 = this;return (new cljs.core.async.t21540(self__.ch,self__.p,self__.filter_GT_,meta21541__$1));
});
cljs.core.async.__GT_t21540 = (function __GT_t21540(ch__$1,p__$1,filter_GT___$1,meta21541){return (new cljs.core.async.t21540(ch__$1,p__$1,filter_GT___$1,meta21541));
});
}
return (new cljs.core.async.t21540(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21625 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21625,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21625,out){
return (function (state_21604){var state_val_21605 = (state_21604[(1)]);if((state_val_21605 === (7)))
{var inst_21600 = (state_21604[(2)]);var state_21604__$1 = state_21604;var statearr_21606_21626 = state_21604__$1;(statearr_21606_21626[(2)] = inst_21600);
(statearr_21606_21626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (1)))
{var state_21604__$1 = state_21604;var statearr_21607_21627 = state_21604__$1;(statearr_21607_21627[(2)] = null);
(statearr_21607_21627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (4)))
{var inst_21586 = (state_21604[(7)]);var inst_21586__$1 = (state_21604[(2)]);var inst_21587 = (inst_21586__$1 == null);var state_21604__$1 = (function (){var statearr_21608 = state_21604;(statearr_21608[(7)] = inst_21586__$1);
return statearr_21608;
})();if(cljs.core.truth_(inst_21587))
{var statearr_21609_21628 = state_21604__$1;(statearr_21609_21628[(1)] = (5));
} else
{var statearr_21610_21629 = state_21604__$1;(statearr_21610_21629[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (6)))
{var inst_21586 = (state_21604[(7)]);var inst_21591 = p.call(null,inst_21586);var state_21604__$1 = state_21604;if(cljs.core.truth_(inst_21591))
{var statearr_21611_21630 = state_21604__$1;(statearr_21611_21630[(1)] = (8));
} else
{var statearr_21612_21631 = state_21604__$1;(statearr_21612_21631[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (3)))
{var inst_21602 = (state_21604[(2)]);var state_21604__$1 = state_21604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21604__$1,inst_21602);
} else
{if((state_val_21605 === (2)))
{var state_21604__$1 = state_21604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21604__$1,(4),ch);
} else
{if((state_val_21605 === (11)))
{var inst_21594 = (state_21604[(2)]);var state_21604__$1 = state_21604;var statearr_21613_21632 = state_21604__$1;(statearr_21613_21632[(2)] = inst_21594);
(statearr_21613_21632[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (9)))
{var state_21604__$1 = state_21604;var statearr_21614_21633 = state_21604__$1;(statearr_21614_21633[(2)] = null);
(statearr_21614_21633[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (5)))
{var inst_21589 = cljs.core.async.close_BANG_.call(null,out);var state_21604__$1 = state_21604;var statearr_21615_21634 = state_21604__$1;(statearr_21615_21634[(2)] = inst_21589);
(statearr_21615_21634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (10)))
{var inst_21597 = (state_21604[(2)]);var state_21604__$1 = (function (){var statearr_21616 = state_21604;(statearr_21616[(8)] = inst_21597);
return statearr_21616;
})();var statearr_21617_21635 = state_21604__$1;(statearr_21617_21635[(2)] = null);
(statearr_21617_21635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21605 === (8)))
{var inst_21586 = (state_21604[(7)]);var state_21604__$1 = state_21604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21604__$1,(11),out,inst_21586);
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
});})(c__5819__auto___21625,out))
;return ((function (switch__5804__auto__,c__5819__auto___21625,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21621 = [null,null,null,null,null,null,null,null,null];(statearr_21621[(0)] = state_machine__5805__auto__);
(statearr_21621[(1)] = (1));
return statearr_21621;
});
var state_machine__5805__auto____1 = (function (state_21604){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21622){if((e21622 instanceof Object))
{var ex__5808__auto__ = e21622;var statearr_21623_21636 = state_21604;(statearr_21623_21636[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21622;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21637 = state_21604;
state_21604 = G__21637;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21604){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21625,out))
})();var state__5821__auto__ = (function (){var statearr_21624 = f__5820__auto__.call(null);(statearr_21624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21625);
return statearr_21624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21625,out))
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
return (function (state_21803){var state_val_21804 = (state_21803[(1)]);if((state_val_21804 === (7)))
{var inst_21799 = (state_21803[(2)]);var state_21803__$1 = state_21803;var statearr_21805_21846 = state_21803__$1;(statearr_21805_21846[(2)] = inst_21799);
(statearr_21805_21846[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (20)))
{var inst_21769 = (state_21803[(7)]);var inst_21780 = (state_21803[(2)]);var inst_21781 = cljs.core.next.call(null,inst_21769);var inst_21755 = inst_21781;var inst_21756 = null;var inst_21757 = (0);var inst_21758 = (0);var state_21803__$1 = (function (){var statearr_21806 = state_21803;(statearr_21806[(8)] = inst_21757);
(statearr_21806[(9)] = inst_21780);
(statearr_21806[(10)] = inst_21756);
(statearr_21806[(11)] = inst_21758);
(statearr_21806[(12)] = inst_21755);
return statearr_21806;
})();var statearr_21807_21847 = state_21803__$1;(statearr_21807_21847[(2)] = null);
(statearr_21807_21847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (1)))
{var state_21803__$1 = state_21803;var statearr_21808_21848 = state_21803__$1;(statearr_21808_21848[(2)] = null);
(statearr_21808_21848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (4)))
{var inst_21744 = (state_21803[(13)]);var inst_21744__$1 = (state_21803[(2)]);var inst_21745 = (inst_21744__$1 == null);var state_21803__$1 = (function (){var statearr_21809 = state_21803;(statearr_21809[(13)] = inst_21744__$1);
return statearr_21809;
})();if(cljs.core.truth_(inst_21745))
{var statearr_21810_21849 = state_21803__$1;(statearr_21810_21849[(1)] = (5));
} else
{var statearr_21811_21850 = state_21803__$1;(statearr_21811_21850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (15)))
{var state_21803__$1 = state_21803;var statearr_21815_21851 = state_21803__$1;(statearr_21815_21851[(2)] = null);
(statearr_21815_21851[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (21)))
{var state_21803__$1 = state_21803;var statearr_21816_21852 = state_21803__$1;(statearr_21816_21852[(2)] = null);
(statearr_21816_21852[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (13)))
{var inst_21757 = (state_21803[(8)]);var inst_21756 = (state_21803[(10)]);var inst_21758 = (state_21803[(11)]);var inst_21755 = (state_21803[(12)]);var inst_21765 = (state_21803[(2)]);var inst_21766 = (inst_21758 + (1));var tmp21812 = inst_21757;var tmp21813 = inst_21756;var tmp21814 = inst_21755;var inst_21755__$1 = tmp21814;var inst_21756__$1 = tmp21813;var inst_21757__$1 = tmp21812;var inst_21758__$1 = inst_21766;var state_21803__$1 = (function (){var statearr_21817 = state_21803;(statearr_21817[(8)] = inst_21757__$1);
(statearr_21817[(10)] = inst_21756__$1);
(statearr_21817[(11)] = inst_21758__$1);
(statearr_21817[(12)] = inst_21755__$1);
(statearr_21817[(14)] = inst_21765);
return statearr_21817;
})();var statearr_21818_21853 = state_21803__$1;(statearr_21818_21853[(2)] = null);
(statearr_21818_21853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (22)))
{var state_21803__$1 = state_21803;var statearr_21819_21854 = state_21803__$1;(statearr_21819_21854[(2)] = null);
(statearr_21819_21854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (6)))
{var inst_21744 = (state_21803[(13)]);var inst_21753 = f.call(null,inst_21744);var inst_21754 = cljs.core.seq.call(null,inst_21753);var inst_21755 = inst_21754;var inst_21756 = null;var inst_21757 = (0);var inst_21758 = (0);var state_21803__$1 = (function (){var statearr_21820 = state_21803;(statearr_21820[(8)] = inst_21757);
(statearr_21820[(10)] = inst_21756);
(statearr_21820[(11)] = inst_21758);
(statearr_21820[(12)] = inst_21755);
return statearr_21820;
})();var statearr_21821_21855 = state_21803__$1;(statearr_21821_21855[(2)] = null);
(statearr_21821_21855[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (17)))
{var inst_21769 = (state_21803[(7)]);var inst_21773 = cljs.core.chunk_first.call(null,inst_21769);var inst_21774 = cljs.core.chunk_rest.call(null,inst_21769);var inst_21775 = cljs.core.count.call(null,inst_21773);var inst_21755 = inst_21774;var inst_21756 = inst_21773;var inst_21757 = inst_21775;var inst_21758 = (0);var state_21803__$1 = (function (){var statearr_21822 = state_21803;(statearr_21822[(8)] = inst_21757);
(statearr_21822[(10)] = inst_21756);
(statearr_21822[(11)] = inst_21758);
(statearr_21822[(12)] = inst_21755);
return statearr_21822;
})();var statearr_21823_21856 = state_21803__$1;(statearr_21823_21856[(2)] = null);
(statearr_21823_21856[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (3)))
{var inst_21801 = (state_21803[(2)]);var state_21803__$1 = state_21803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21803__$1,inst_21801);
} else
{if((state_val_21804 === (12)))
{var inst_21789 = (state_21803[(2)]);var state_21803__$1 = state_21803;var statearr_21824_21857 = state_21803__$1;(statearr_21824_21857[(2)] = inst_21789);
(statearr_21824_21857[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (2)))
{var state_21803__$1 = state_21803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21803__$1,(4),in$);
} else
{if((state_val_21804 === (23)))
{var inst_21797 = (state_21803[(2)]);var state_21803__$1 = state_21803;var statearr_21825_21858 = state_21803__$1;(statearr_21825_21858[(2)] = inst_21797);
(statearr_21825_21858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (19)))
{var inst_21784 = (state_21803[(2)]);var state_21803__$1 = state_21803;var statearr_21826_21859 = state_21803__$1;(statearr_21826_21859[(2)] = inst_21784);
(statearr_21826_21859[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (11)))
{var inst_21769 = (state_21803[(7)]);var inst_21755 = (state_21803[(12)]);var inst_21769__$1 = cljs.core.seq.call(null,inst_21755);var state_21803__$1 = (function (){var statearr_21827 = state_21803;(statearr_21827[(7)] = inst_21769__$1);
return statearr_21827;
})();if(inst_21769__$1)
{var statearr_21828_21860 = state_21803__$1;(statearr_21828_21860[(1)] = (14));
} else
{var statearr_21829_21861 = state_21803__$1;(statearr_21829_21861[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (9)))
{var inst_21791 = (state_21803[(2)]);var inst_21792 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21803__$1 = (function (){var statearr_21830 = state_21803;(statearr_21830[(15)] = inst_21791);
return statearr_21830;
})();if(cljs.core.truth_(inst_21792))
{var statearr_21831_21862 = state_21803__$1;(statearr_21831_21862[(1)] = (21));
} else
{var statearr_21832_21863 = state_21803__$1;(statearr_21832_21863[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (5)))
{var inst_21747 = cljs.core.async.close_BANG_.call(null,out);var state_21803__$1 = state_21803;var statearr_21833_21864 = state_21803__$1;(statearr_21833_21864[(2)] = inst_21747);
(statearr_21833_21864[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (14)))
{var inst_21769 = (state_21803[(7)]);var inst_21771 = cljs.core.chunked_seq_QMARK_.call(null,inst_21769);var state_21803__$1 = state_21803;if(inst_21771)
{var statearr_21834_21865 = state_21803__$1;(statearr_21834_21865[(1)] = (17));
} else
{var statearr_21835_21866 = state_21803__$1;(statearr_21835_21866[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (16)))
{var inst_21787 = (state_21803[(2)]);var state_21803__$1 = state_21803;var statearr_21836_21867 = state_21803__$1;(statearr_21836_21867[(2)] = inst_21787);
(statearr_21836_21867[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21804 === (10)))
{var inst_21756 = (state_21803[(10)]);var inst_21758 = (state_21803[(11)]);var inst_21763 = cljs.core._nth.call(null,inst_21756,inst_21758);var state_21803__$1 = state_21803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21803__$1,(13),out,inst_21763);
} else
{if((state_val_21804 === (18)))
{var inst_21769 = (state_21803[(7)]);var inst_21778 = cljs.core.first.call(null,inst_21769);var state_21803__$1 = state_21803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21803__$1,(20),out,inst_21778);
} else
{if((state_val_21804 === (8)))
{var inst_21757 = (state_21803[(8)]);var inst_21758 = (state_21803[(11)]);var inst_21760 = (inst_21758 < inst_21757);var inst_21761 = inst_21760;var state_21803__$1 = state_21803;if(cljs.core.truth_(inst_21761))
{var statearr_21837_21868 = state_21803__$1;(statearr_21837_21868[(1)] = (10));
} else
{var statearr_21838_21869 = state_21803__$1;(statearr_21838_21869[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_21842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21842[(0)] = state_machine__5805__auto__);
(statearr_21842[(1)] = (1));
return statearr_21842;
});
var state_machine__5805__auto____1 = (function (state_21803){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21843){if((e21843 instanceof Object))
{var ex__5808__auto__ = e21843;var statearr_21844_21870 = state_21803;(statearr_21844_21870[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21871 = state_21803;
state_21803 = G__21871;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21803){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_21845 = f__5820__auto__.call(null);(statearr_21845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_21845;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___21968 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___21968,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___21968,out){
return (function (state_21943){var state_val_21944 = (state_21943[(1)]);if((state_val_21944 === (7)))
{var inst_21938 = (state_21943[(2)]);var state_21943__$1 = state_21943;var statearr_21945_21969 = state_21943__$1;(statearr_21945_21969[(2)] = inst_21938);
(statearr_21945_21969[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (1)))
{var inst_21920 = null;var state_21943__$1 = (function (){var statearr_21946 = state_21943;(statearr_21946[(7)] = inst_21920);
return statearr_21946;
})();var statearr_21947_21970 = state_21943__$1;(statearr_21947_21970[(2)] = null);
(statearr_21947_21970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (4)))
{var inst_21923 = (state_21943[(8)]);var inst_21923__$1 = (state_21943[(2)]);var inst_21924 = (inst_21923__$1 == null);var inst_21925 = cljs.core.not.call(null,inst_21924);var state_21943__$1 = (function (){var statearr_21948 = state_21943;(statearr_21948[(8)] = inst_21923__$1);
return statearr_21948;
})();if(inst_21925)
{var statearr_21949_21971 = state_21943__$1;(statearr_21949_21971[(1)] = (5));
} else
{var statearr_21950_21972 = state_21943__$1;(statearr_21950_21972[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (6)))
{var state_21943__$1 = state_21943;var statearr_21951_21973 = state_21943__$1;(statearr_21951_21973[(2)] = null);
(statearr_21951_21973[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (3)))
{var inst_21940 = (state_21943[(2)]);var inst_21941 = cljs.core.async.close_BANG_.call(null,out);var state_21943__$1 = (function (){var statearr_21952 = state_21943;(statearr_21952[(9)] = inst_21940);
return statearr_21952;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21943__$1,inst_21941);
} else
{if((state_val_21944 === (2)))
{var state_21943__$1 = state_21943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21943__$1,(4),ch);
} else
{if((state_val_21944 === (11)))
{var inst_21923 = (state_21943[(8)]);var inst_21932 = (state_21943[(2)]);var inst_21920 = inst_21923;var state_21943__$1 = (function (){var statearr_21953 = state_21943;(statearr_21953[(7)] = inst_21920);
(statearr_21953[(10)] = inst_21932);
return statearr_21953;
})();var statearr_21954_21974 = state_21943__$1;(statearr_21954_21974[(2)] = null);
(statearr_21954_21974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (9)))
{var inst_21923 = (state_21943[(8)]);var state_21943__$1 = state_21943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21943__$1,(11),out,inst_21923);
} else
{if((state_val_21944 === (5)))
{var inst_21920 = (state_21943[(7)]);var inst_21923 = (state_21943[(8)]);var inst_21927 = cljs.core._EQ_.call(null,inst_21923,inst_21920);var state_21943__$1 = state_21943;if(inst_21927)
{var statearr_21956_21975 = state_21943__$1;(statearr_21956_21975[(1)] = (8));
} else
{var statearr_21957_21976 = state_21943__$1;(statearr_21957_21976[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (10)))
{var inst_21935 = (state_21943[(2)]);var state_21943__$1 = state_21943;var statearr_21958_21977 = state_21943__$1;(statearr_21958_21977[(2)] = inst_21935);
(statearr_21958_21977[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21944 === (8)))
{var inst_21920 = (state_21943[(7)]);var tmp21955 = inst_21920;var inst_21920__$1 = tmp21955;var state_21943__$1 = (function (){var statearr_21959 = state_21943;(statearr_21959[(7)] = inst_21920__$1);
return statearr_21959;
})();var statearr_21960_21978 = state_21943__$1;(statearr_21960_21978[(2)] = null);
(statearr_21960_21978[(1)] = (2));
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
});})(c__5819__auto___21968,out))
;return ((function (switch__5804__auto__,c__5819__auto___21968,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_21964 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21964[(0)] = state_machine__5805__auto__);
(statearr_21964[(1)] = (1));
return statearr_21964;
});
var state_machine__5805__auto____1 = (function (state_21943){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_21943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e21965){if((e21965 instanceof Object))
{var ex__5808__auto__ = e21965;var statearr_21966_21979 = state_21943;(statearr_21966_21979[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21980 = state_21943;
state_21943 = G__21980;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_21943){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_21943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___21968,out))
})();var state__5821__auto__ = (function (){var statearr_21967 = f__5820__auto__.call(null);(statearr_21967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___21968);
return statearr_21967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___21968,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___22115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___22115,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___22115,out){
return (function (state_22085){var state_val_22086 = (state_22085[(1)]);if((state_val_22086 === (7)))
{var inst_22081 = (state_22085[(2)]);var state_22085__$1 = state_22085;var statearr_22087_22116 = state_22085__$1;(statearr_22087_22116[(2)] = inst_22081);
(statearr_22087_22116[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (1)))
{var inst_22048 = (new Array(n));var inst_22049 = inst_22048;var inst_22050 = (0);var state_22085__$1 = (function (){var statearr_22088 = state_22085;(statearr_22088[(7)] = inst_22050);
(statearr_22088[(8)] = inst_22049);
return statearr_22088;
})();var statearr_22089_22117 = state_22085__$1;(statearr_22089_22117[(2)] = null);
(statearr_22089_22117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (4)))
{var inst_22053 = (state_22085[(9)]);var inst_22053__$1 = (state_22085[(2)]);var inst_22054 = (inst_22053__$1 == null);var inst_22055 = cljs.core.not.call(null,inst_22054);var state_22085__$1 = (function (){var statearr_22090 = state_22085;(statearr_22090[(9)] = inst_22053__$1);
return statearr_22090;
})();if(inst_22055)
{var statearr_22091_22118 = state_22085__$1;(statearr_22091_22118[(1)] = (5));
} else
{var statearr_22092_22119 = state_22085__$1;(statearr_22092_22119[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (15)))
{var inst_22075 = (state_22085[(2)]);var state_22085__$1 = state_22085;var statearr_22093_22120 = state_22085__$1;(statearr_22093_22120[(2)] = inst_22075);
(statearr_22093_22120[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (13)))
{var state_22085__$1 = state_22085;var statearr_22094_22121 = state_22085__$1;(statearr_22094_22121[(2)] = null);
(statearr_22094_22121[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (6)))
{var inst_22050 = (state_22085[(7)]);var inst_22071 = (inst_22050 > (0));var state_22085__$1 = state_22085;if(cljs.core.truth_(inst_22071))
{var statearr_22095_22122 = state_22085__$1;(statearr_22095_22122[(1)] = (12));
} else
{var statearr_22096_22123 = state_22085__$1;(statearr_22096_22123[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (3)))
{var inst_22083 = (state_22085[(2)]);var state_22085__$1 = state_22085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22085__$1,inst_22083);
} else
{if((state_val_22086 === (12)))
{var inst_22049 = (state_22085[(8)]);var inst_22073 = cljs.core.vec.call(null,inst_22049);var state_22085__$1 = state_22085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22085__$1,(15),out,inst_22073);
} else
{if((state_val_22086 === (2)))
{var state_22085__$1 = state_22085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22085__$1,(4),ch);
} else
{if((state_val_22086 === (11)))
{var inst_22065 = (state_22085[(2)]);var inst_22066 = (new Array(n));var inst_22049 = inst_22066;var inst_22050 = (0);var state_22085__$1 = (function (){var statearr_22097 = state_22085;(statearr_22097[(10)] = inst_22065);
(statearr_22097[(7)] = inst_22050);
(statearr_22097[(8)] = inst_22049);
return statearr_22097;
})();var statearr_22098_22124 = state_22085__$1;(statearr_22098_22124[(2)] = null);
(statearr_22098_22124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (9)))
{var inst_22049 = (state_22085[(8)]);var inst_22063 = cljs.core.vec.call(null,inst_22049);var state_22085__$1 = state_22085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22085__$1,(11),out,inst_22063);
} else
{if((state_val_22086 === (5)))
{var inst_22053 = (state_22085[(9)]);var inst_22058 = (state_22085[(11)]);var inst_22050 = (state_22085[(7)]);var inst_22049 = (state_22085[(8)]);var inst_22057 = (inst_22049[inst_22050] = inst_22053);var inst_22058__$1 = (inst_22050 + (1));var inst_22059 = (inst_22058__$1 < n);var state_22085__$1 = (function (){var statearr_22099 = state_22085;(statearr_22099[(11)] = inst_22058__$1);
(statearr_22099[(12)] = inst_22057);
return statearr_22099;
})();if(cljs.core.truth_(inst_22059))
{var statearr_22100_22125 = state_22085__$1;(statearr_22100_22125[(1)] = (8));
} else
{var statearr_22101_22126 = state_22085__$1;(statearr_22101_22126[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (14)))
{var inst_22078 = (state_22085[(2)]);var inst_22079 = cljs.core.async.close_BANG_.call(null,out);var state_22085__$1 = (function (){var statearr_22103 = state_22085;(statearr_22103[(13)] = inst_22078);
return statearr_22103;
})();var statearr_22104_22127 = state_22085__$1;(statearr_22104_22127[(2)] = inst_22079);
(statearr_22104_22127[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (10)))
{var inst_22069 = (state_22085[(2)]);var state_22085__$1 = state_22085;var statearr_22105_22128 = state_22085__$1;(statearr_22105_22128[(2)] = inst_22069);
(statearr_22105_22128[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22086 === (8)))
{var inst_22058 = (state_22085[(11)]);var inst_22049 = (state_22085[(8)]);var tmp22102 = inst_22049;var inst_22049__$1 = tmp22102;var inst_22050 = inst_22058;var state_22085__$1 = (function (){var statearr_22106 = state_22085;(statearr_22106[(7)] = inst_22050);
(statearr_22106[(8)] = inst_22049__$1);
return statearr_22106;
})();var statearr_22107_22129 = state_22085__$1;(statearr_22107_22129[(2)] = null);
(statearr_22107_22129[(1)] = (2));
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
});})(c__5819__auto___22115,out))
;return ((function (switch__5804__auto__,c__5819__auto___22115,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_22111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22111[(0)] = state_machine__5805__auto__);
(statearr_22111[(1)] = (1));
return statearr_22111;
});
var state_machine__5805__auto____1 = (function (state_22085){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_22085);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e22112){if((e22112 instanceof Object))
{var ex__5808__auto__ = e22112;var statearr_22113_22130 = state_22085;(statearr_22113_22130[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22085);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22131 = state_22085;
state_22085 = G__22131;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_22085){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_22085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___22115,out))
})();var state__5821__auto__ = (function (){var statearr_22114 = f__5820__auto__.call(null);(statearr_22114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___22115);
return statearr_22114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___22115,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___22274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___22274,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___22274,out){
return (function (state_22244){var state_val_22245 = (state_22244[(1)]);if((state_val_22245 === (7)))
{var inst_22240 = (state_22244[(2)]);var state_22244__$1 = state_22244;var statearr_22246_22275 = state_22244__$1;(statearr_22246_22275[(2)] = inst_22240);
(statearr_22246_22275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (1)))
{var inst_22203 = [];var inst_22204 = inst_22203;var inst_22205 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_22244__$1 = (function (){var statearr_22247 = state_22244;(statearr_22247[(7)] = inst_22204);
(statearr_22247[(8)] = inst_22205);
return statearr_22247;
})();var statearr_22248_22276 = state_22244__$1;(statearr_22248_22276[(2)] = null);
(statearr_22248_22276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (4)))
{var inst_22208 = (state_22244[(9)]);var inst_22208__$1 = (state_22244[(2)]);var inst_22209 = (inst_22208__$1 == null);var inst_22210 = cljs.core.not.call(null,inst_22209);var state_22244__$1 = (function (){var statearr_22249 = state_22244;(statearr_22249[(9)] = inst_22208__$1);
return statearr_22249;
})();if(inst_22210)
{var statearr_22250_22277 = state_22244__$1;(statearr_22250_22277[(1)] = (5));
} else
{var statearr_22251_22278 = state_22244__$1;(statearr_22251_22278[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (15)))
{var inst_22234 = (state_22244[(2)]);var state_22244__$1 = state_22244;var statearr_22252_22279 = state_22244__$1;(statearr_22252_22279[(2)] = inst_22234);
(statearr_22252_22279[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (13)))
{var state_22244__$1 = state_22244;var statearr_22253_22280 = state_22244__$1;(statearr_22253_22280[(2)] = null);
(statearr_22253_22280[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (6)))
{var inst_22204 = (state_22244[(7)]);var inst_22229 = inst_22204.length;var inst_22230 = (inst_22229 > (0));var state_22244__$1 = state_22244;if(cljs.core.truth_(inst_22230))
{var statearr_22254_22281 = state_22244__$1;(statearr_22254_22281[(1)] = (12));
} else
{var statearr_22255_22282 = state_22244__$1;(statearr_22255_22282[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (3)))
{var inst_22242 = (state_22244[(2)]);var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22244__$1,inst_22242);
} else
{if((state_val_22245 === (12)))
{var inst_22204 = (state_22244[(7)]);var inst_22232 = cljs.core.vec.call(null,inst_22204);var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22244__$1,(15),out,inst_22232);
} else
{if((state_val_22245 === (2)))
{var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22244__$1,(4),ch);
} else
{if((state_val_22245 === (11)))
{var inst_22208 = (state_22244[(9)]);var inst_22212 = (state_22244[(10)]);var inst_22222 = (state_22244[(2)]);var inst_22223 = [];var inst_22224 = inst_22223.push(inst_22208);var inst_22204 = inst_22223;var inst_22205 = inst_22212;var state_22244__$1 = (function (){var statearr_22256 = state_22244;(statearr_22256[(7)] = inst_22204);
(statearr_22256[(8)] = inst_22205);
(statearr_22256[(11)] = inst_22222);
(statearr_22256[(12)] = inst_22224);
return statearr_22256;
})();var statearr_22257_22283 = state_22244__$1;(statearr_22257_22283[(2)] = null);
(statearr_22257_22283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (9)))
{var inst_22204 = (state_22244[(7)]);var inst_22220 = cljs.core.vec.call(null,inst_22204);var state_22244__$1 = state_22244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22244__$1,(11),out,inst_22220);
} else
{if((state_val_22245 === (5)))
{var inst_22208 = (state_22244[(9)]);var inst_22205 = (state_22244[(8)]);var inst_22212 = (state_22244[(10)]);var inst_22212__$1 = f.call(null,inst_22208);var inst_22213 = cljs.core._EQ_.call(null,inst_22212__$1,inst_22205);var inst_22214 = cljs.core.keyword_identical_QMARK_.call(null,inst_22205,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_22215 = (inst_22213) || (inst_22214);var state_22244__$1 = (function (){var statearr_22258 = state_22244;(statearr_22258[(10)] = inst_22212__$1);
return statearr_22258;
})();if(cljs.core.truth_(inst_22215))
{var statearr_22259_22284 = state_22244__$1;(statearr_22259_22284[(1)] = (8));
} else
{var statearr_22260_22285 = state_22244__$1;(statearr_22260_22285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (14)))
{var inst_22237 = (state_22244[(2)]);var inst_22238 = cljs.core.async.close_BANG_.call(null,out);var state_22244__$1 = (function (){var statearr_22262 = state_22244;(statearr_22262[(13)] = inst_22237);
return statearr_22262;
})();var statearr_22263_22286 = state_22244__$1;(statearr_22263_22286[(2)] = inst_22238);
(statearr_22263_22286[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (10)))
{var inst_22227 = (state_22244[(2)]);var state_22244__$1 = state_22244;var statearr_22264_22287 = state_22244__$1;(statearr_22264_22287[(2)] = inst_22227);
(statearr_22264_22287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22245 === (8)))
{var inst_22204 = (state_22244[(7)]);var inst_22208 = (state_22244[(9)]);var inst_22212 = (state_22244[(10)]);var inst_22217 = inst_22204.push(inst_22208);var tmp22261 = inst_22204;var inst_22204__$1 = tmp22261;var inst_22205 = inst_22212;var state_22244__$1 = (function (){var statearr_22265 = state_22244;(statearr_22265[(7)] = inst_22204__$1);
(statearr_22265[(8)] = inst_22205);
(statearr_22265[(14)] = inst_22217);
return statearr_22265;
})();var statearr_22266_22288 = state_22244__$1;(statearr_22266_22288[(2)] = null);
(statearr_22266_22288[(1)] = (2));
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
});})(c__5819__auto___22274,out))
;return ((function (switch__5804__auto__,c__5819__auto___22274,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_22270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22270[(0)] = state_machine__5805__auto__);
(statearr_22270[(1)] = (1));
return statearr_22270;
});
var state_machine__5805__auto____1 = (function (state_22244){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_22244);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e22271){if((e22271 instanceof Object))
{var ex__5808__auto__ = e22271;var statearr_22272_22289 = state_22244;(statearr_22272_22289[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22271;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22290 = state_22244;
state_22244 = G__22290;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_22244){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_22244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___22274,out))
})();var state__5821__auto__ = (function (){var statearr_22273 = f__5820__auto__.call(null);(statearr_22273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___22274);
return statearr_22273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___22274,out))
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
