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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15194 = (function (f,fn_handler,meta15195){
this.f = f;
this.fn_handler = fn_handler;
this.meta15195 = meta15195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15194.cljs$lang$type = true;
cljs.core.async.t15194.cljs$lang$ctorStr = "cljs.core.async/t15194";
cljs.core.async.t15194.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t15194");
});
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15196){var self__ = this;
var _15196__$1 = this;return self__.meta15195;
});
cljs.core.async.t15194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15196,meta15195__$1){var self__ = this;
var _15196__$1 = this;return (new cljs.core.async.t15194(self__.f,self__.fn_handler,meta15195__$1));
});
cljs.core.async.__GT_t15194 = (function __GT_t15194(f__$1,fn_handler__$1,meta15195){return (new cljs.core.async.t15194(f__$1,fn_handler__$1,meta15195));
});
}
return (new cljs.core.async.t15194(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15198 = buff;if(G__15198)
{var bit__4294__auto__ = null;if(cljs.core.truth_((function (){var or__3631__auto__ = bit__4294__auto__;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return G__15198.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15198.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15198);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15198);
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
{var val_15199 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15199);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15199,ret){
return (function (){return fn1.call(null,val_15199);
});})(val_15199,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4500__auto___15200 = n;var x_15201 = (0);while(true){
if((x_15201 < n__4500__auto___15200))
{(a[x_15201] = (0));
{
var G__15202 = (x_15201 + (1));
x_15201 = G__15202;
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
var G__15203 = (i + (1));
i = G__15203;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15207 = (function (flag,alt_flag,meta15208){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15208 = meta15208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15207.cljs$lang$type = true;
cljs.core.async.t15207.cljs$lang$ctorStr = "cljs.core.async/t15207";
cljs.core.async.t15207.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t15207");
});})(flag))
;
cljs.core.async.t15207.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15209){var self__ = this;
var _15209__$1 = this;return self__.meta15208;
});})(flag))
;
cljs.core.async.t15207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15209,meta15208__$1){var self__ = this;
var _15209__$1 = this;return (new cljs.core.async.t15207(self__.flag,self__.alt_flag,meta15208__$1));
});})(flag))
;
cljs.core.async.__GT_t15207 = ((function (flag){
return (function __GT_t15207(flag__$1,alt_flag__$1,meta15208){return (new cljs.core.async.t15207(flag__$1,alt_flag__$1,meta15208));
});})(flag))
;
}
return (new cljs.core.async.t15207(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15213 = (function (cb,flag,alt_handler,meta15214){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15214 = meta15214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15213.cljs$lang$type = true;
cljs.core.async.t15213.cljs$lang$ctorStr = "cljs.core.async/t15213";
cljs.core.async.t15213.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t15213");
});
cljs.core.async.t15213.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15215){var self__ = this;
var _15215__$1 = this;return self__.meta15214;
});
cljs.core.async.t15213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15215,meta15214__$1){var self__ = this;
var _15215__$1 = this;return (new cljs.core.async.t15213(self__.cb,self__.flag,self__.alt_handler,meta15214__$1));
});
cljs.core.async.__GT_t15213 = (function __GT_t15213(cb__$1,flag__$1,alt_handler__$1,meta15214){return (new cljs.core.async.t15213(cb__$1,flag__$1,alt_handler__$1,meta15214));
});
}
return (new cljs.core.async.t15213(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15216_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15216_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15217_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15217_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3631__auto__ = wport;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15218 = (i + (1));
i = G__15218;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3631__auto__ = ret;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3619__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3619__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3619__auto__;
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
var alts_BANG___delegate = function (ports,p__15219){var map__15221 = p__15219;var map__15221__$1 = ((cljs.core.seq_QMARK_.call(null,map__15221))?cljs.core.apply.call(null,cljs.core.hash_map,map__15221):map__15221);var opts = map__15221__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15219 = null;if (arguments.length > 1) {
  p__15219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15219);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15222){
var ports = cljs.core.first(arglist__15222);
var p__15219 = cljs.core.rest(arglist__15222);
return alts_BANG___delegate(ports,p__15219);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5813__auto___15317 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___15317){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___15317){
return (function (state_15293){var state_val_15294 = (state_15293[(1)]);if((state_val_15294 === (7)))
{var inst_15289 = (state_15293[(2)]);var state_15293__$1 = state_15293;var statearr_15295_15318 = state_15293__$1;(statearr_15295_15318[(2)] = inst_15289);
(statearr_15295_15318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (1)))
{var state_15293__$1 = state_15293;var statearr_15296_15319 = state_15293__$1;(statearr_15296_15319[(2)] = null);
(statearr_15296_15319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (4)))
{var inst_15272 = (state_15293[(7)]);var inst_15272__$1 = (state_15293[(2)]);var inst_15273 = (inst_15272__$1 == null);var state_15293__$1 = (function (){var statearr_15297 = state_15293;(statearr_15297[(7)] = inst_15272__$1);
return statearr_15297;
})();if(cljs.core.truth_(inst_15273))
{var statearr_15298_15320 = state_15293__$1;(statearr_15298_15320[(1)] = (5));
} else
{var statearr_15299_15321 = state_15293__$1;(statearr_15299_15321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (13)))
{var state_15293__$1 = state_15293;var statearr_15300_15322 = state_15293__$1;(statearr_15300_15322[(2)] = null);
(statearr_15300_15322[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (6)))
{var inst_15272 = (state_15293[(7)]);var state_15293__$1 = state_15293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15293__$1,(11),to,inst_15272);
} else
{if((state_val_15294 === (3)))
{var inst_15291 = (state_15293[(2)]);var state_15293__$1 = state_15293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15293__$1,inst_15291);
} else
{if((state_val_15294 === (12)))
{var state_15293__$1 = state_15293;var statearr_15301_15323 = state_15293__$1;(statearr_15301_15323[(2)] = null);
(statearr_15301_15323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (2)))
{var state_15293__$1 = state_15293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15293__$1,(4),from);
} else
{if((state_val_15294 === (11)))
{var inst_15282 = (state_15293[(2)]);var state_15293__$1 = state_15293;if(cljs.core.truth_(inst_15282))
{var statearr_15302_15324 = state_15293__$1;(statearr_15302_15324[(1)] = (12));
} else
{var statearr_15303_15325 = state_15293__$1;(statearr_15303_15325[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (9)))
{var state_15293__$1 = state_15293;var statearr_15304_15326 = state_15293__$1;(statearr_15304_15326[(2)] = null);
(statearr_15304_15326[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (5)))
{var state_15293__$1 = state_15293;if(cljs.core.truth_(close_QMARK_))
{var statearr_15305_15327 = state_15293__$1;(statearr_15305_15327[(1)] = (8));
} else
{var statearr_15306_15328 = state_15293__$1;(statearr_15306_15328[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (14)))
{var inst_15287 = (state_15293[(2)]);var state_15293__$1 = state_15293;var statearr_15307_15329 = state_15293__$1;(statearr_15307_15329[(2)] = inst_15287);
(statearr_15307_15329[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (10)))
{var inst_15279 = (state_15293[(2)]);var state_15293__$1 = state_15293;var statearr_15308_15330 = state_15293__$1;(statearr_15308_15330[(2)] = inst_15279);
(statearr_15308_15330[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15294 === (8)))
{var inst_15276 = cljs.core.async.close_BANG_.call(null,to);var state_15293__$1 = state_15293;var statearr_15309_15331 = state_15293__$1;(statearr_15309_15331[(2)] = inst_15276);
(statearr_15309_15331[(1)] = (10));
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
});})(c__5813__auto___15317))
;return ((function (switch__5798__auto__,c__5813__auto___15317){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15313 = [null,null,null,null,null,null,null,null];(statearr_15313[(0)] = state_machine__5799__auto__);
(statearr_15313[(1)] = (1));
return statearr_15313;
});
var state_machine__5799__auto____1 = (function (state_15293){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15293);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15314){if((e15314 instanceof Object))
{var ex__5802__auto__ = e15314;var statearr_15315_15332 = state_15293;(statearr_15315_15332[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15314;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15333 = state_15293;
state_15293 = G__15333;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15293){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___15317))
})();var state__5815__auto__ = (function (){var statearr_15316 = f__5814__auto__.call(null);(statearr_15316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15317);
return statearr_15316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___15317))
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
return (function (p__15517){var vec__15518 = p__15517;var v = cljs.core.nth.call(null,vec__15518,(0),null);var p = cljs.core.nth.call(null,vec__15518,(1),null);var job = vec__15518;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5813__auto___15700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results){
return (function (state_15523){var state_val_15524 = (state_15523[(1)]);if((state_val_15524 === (2)))
{var inst_15520 = (state_15523[(2)]);var inst_15521 = cljs.core.async.close_BANG_.call(null,res);var state_15523__$1 = (function (){var statearr_15525 = state_15523;(statearr_15525[(7)] = inst_15520);
return statearr_15525;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15523__$1,inst_15521);
} else
{if((state_val_15524 === (1)))
{var state_15523__$1 = state_15523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15523__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results))
;return ((function (switch__5798__auto__,c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15529 = [null,null,null,null,null,null,null,null];(statearr_15529[(0)] = state_machine__5799__auto__);
(statearr_15529[(1)] = (1));
return statearr_15529;
});
var state_machine__5799__auto____1 = (function (state_15523){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15523);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15530){if((e15530 instanceof Object))
{var ex__5802__auto__ = e15530;var statearr_15531_15701 = state_15523;(statearr_15531_15701[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15530;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15702 = state_15523;
state_15523 = G__15702;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15523){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results))
})();var state__5815__auto__ = (function (){var statearr_15532 = f__5814__auto__.call(null);(statearr_15532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15700);
return statearr_15532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___15700,res,vec__15518,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__15533){var vec__15534 = p__15533;var v = cljs.core.nth.call(null,vec__15534,(0),null);var p = cljs.core.nth.call(null,vec__15534,(1),null);var job = vec__15534;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4500__auto___15703 = n;var __15704 = (0);while(true){
if((__15704 < n__4500__auto___15703))
{var G__15535_15705 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__15535_15705) {
case "async":
var c__5813__auto___15707 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15704,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (__15704,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function (state_15548){var state_val_15549 = (state_15548[(1)]);if((state_val_15549 === (7)))
{var inst_15544 = (state_15548[(2)]);var state_15548__$1 = state_15548;var statearr_15550_15708 = state_15548__$1;(statearr_15550_15708[(2)] = inst_15544);
(statearr_15550_15708[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15549 === (6)))
{var state_15548__$1 = state_15548;var statearr_15551_15709 = state_15548__$1;(statearr_15551_15709[(2)] = null);
(statearr_15551_15709[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15549 === (5)))
{var state_15548__$1 = state_15548;var statearr_15552_15710 = state_15548__$1;(statearr_15552_15710[(2)] = null);
(statearr_15552_15710[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15549 === (4)))
{var inst_15538 = (state_15548[(2)]);var inst_15539 = async.call(null,inst_15538);var state_15548__$1 = state_15548;if(cljs.core.truth_(inst_15539))
{var statearr_15553_15711 = state_15548__$1;(statearr_15553_15711[(1)] = (5));
} else
{var statearr_15554_15712 = state_15548__$1;(statearr_15554_15712[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15549 === (3)))
{var inst_15546 = (state_15548[(2)]);var state_15548__$1 = state_15548;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15548__$1,inst_15546);
} else
{if((state_val_15549 === (2)))
{var state_15548__$1 = state_15548;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15548__$1,(4),jobs);
} else
{if((state_val_15549 === (1)))
{var state_15548__$1 = state_15548;var statearr_15555_15713 = state_15548__$1;(statearr_15555_15713[(2)] = null);
(statearr_15555_15713[(1)] = (2));
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
});})(__15704,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
;return ((function (__15704,switch__5798__auto__,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15559 = [null,null,null,null,null,null,null];(statearr_15559[(0)] = state_machine__5799__auto__);
(statearr_15559[(1)] = (1));
return statearr_15559;
});
var state_machine__5799__auto____1 = (function (state_15548){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15548);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15560){if((e15560 instanceof Object))
{var ex__5802__auto__ = e15560;var statearr_15561_15714 = state_15548;(statearr_15561_15714[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15715 = state_15548;
state_15548 = G__15715;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15548){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(__15704,switch__5798__auto__,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
})();var state__5815__auto__ = (function (){var statearr_15562 = f__5814__auto__.call(null);(statearr_15562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15707);
return statearr_15562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(__15704,c__5813__auto___15707,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
);

break;
case "compute":
var c__5813__auto___15716 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__15704,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (__15704,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function (state_15575){var state_val_15576 = (state_15575[(1)]);if((state_val_15576 === (7)))
{var inst_15571 = (state_15575[(2)]);var state_15575__$1 = state_15575;var statearr_15577_15717 = state_15575__$1;(statearr_15577_15717[(2)] = inst_15571);
(statearr_15577_15717[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15576 === (6)))
{var state_15575__$1 = state_15575;var statearr_15578_15718 = state_15575__$1;(statearr_15578_15718[(2)] = null);
(statearr_15578_15718[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15576 === (5)))
{var state_15575__$1 = state_15575;var statearr_15579_15719 = state_15575__$1;(statearr_15579_15719[(2)] = null);
(statearr_15579_15719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15576 === (4)))
{var inst_15565 = (state_15575[(2)]);var inst_15566 = process.call(null,inst_15565);var state_15575__$1 = state_15575;if(cljs.core.truth_(inst_15566))
{var statearr_15580_15720 = state_15575__$1;(statearr_15580_15720[(1)] = (5));
} else
{var statearr_15581_15721 = state_15575__$1;(statearr_15581_15721[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15576 === (3)))
{var inst_15573 = (state_15575[(2)]);var state_15575__$1 = state_15575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15575__$1,inst_15573);
} else
{if((state_val_15576 === (2)))
{var state_15575__$1 = state_15575;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15575__$1,(4),jobs);
} else
{if((state_val_15576 === (1)))
{var state_15575__$1 = state_15575;var statearr_15582_15722 = state_15575__$1;(statearr_15582_15722[(2)] = null);
(statearr_15582_15722[(1)] = (2));
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
});})(__15704,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
;return ((function (__15704,switch__5798__auto__,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15586 = [null,null,null,null,null,null,null];(statearr_15586[(0)] = state_machine__5799__auto__);
(statearr_15586[(1)] = (1));
return statearr_15586;
});
var state_machine__5799__auto____1 = (function (state_15575){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15587){if((e15587 instanceof Object))
{var ex__5802__auto__ = e15587;var statearr_15588_15723 = state_15575;(statearr_15588_15723[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15575);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15724 = state_15575;
state_15575 = G__15724;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15575){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(__15704,switch__5798__auto__,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
})();var state__5815__auto__ = (function (){var statearr_15589 = f__5814__auto__.call(null);(statearr_15589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15716);
return statearr_15589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(__15704,c__5813__auto___15716,G__15535_15705,n__4500__auto___15703,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__15725 = (__15704 + (1));
__15704 = G__15725;
continue;
}
} else
{}
break;
}
var c__5813__auto___15726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___15726,jobs,results,process,async){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___15726,jobs,results,process,async){
return (function (state_15611){var state_val_15612 = (state_15611[(1)]);if((state_val_15612 === (9)))
{var inst_15604 = (state_15611[(2)]);var state_15611__$1 = (function (){var statearr_15613 = state_15611;(statearr_15613[(7)] = inst_15604);
return statearr_15613;
})();var statearr_15614_15727 = state_15611__$1;(statearr_15614_15727[(2)] = null);
(statearr_15614_15727[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15612 === (8)))
{var inst_15597 = (state_15611[(8)]);var inst_15602 = (state_15611[(2)]);var state_15611__$1 = (function (){var statearr_15615 = state_15611;(statearr_15615[(9)] = inst_15602);
return statearr_15615;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15611__$1,(9),results,inst_15597);
} else
{if((state_val_15612 === (7)))
{var inst_15607 = (state_15611[(2)]);var state_15611__$1 = state_15611;var statearr_15616_15728 = state_15611__$1;(statearr_15616_15728[(2)] = inst_15607);
(statearr_15616_15728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15612 === (6)))
{var inst_15597 = (state_15611[(8)]);var inst_15592 = (state_15611[(10)]);var inst_15597__$1 = cljs.core.async.chan.call(null,(1));var inst_15598 = cljs.core.PersistentVector.EMPTY_NODE;var inst_15599 = [inst_15592,inst_15597__$1];var inst_15600 = (new cljs.core.PersistentVector(null,2,(5),inst_15598,inst_15599,null));var state_15611__$1 = (function (){var statearr_15617 = state_15611;(statearr_15617[(8)] = inst_15597__$1);
return statearr_15617;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15611__$1,(8),jobs,inst_15600);
} else
{if((state_val_15612 === (5)))
{var inst_15595 = cljs.core.async.close_BANG_.call(null,jobs);var state_15611__$1 = state_15611;var statearr_15618_15729 = state_15611__$1;(statearr_15618_15729[(2)] = inst_15595);
(statearr_15618_15729[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15612 === (4)))
{var inst_15592 = (state_15611[(10)]);var inst_15592__$1 = (state_15611[(2)]);var inst_15593 = (inst_15592__$1 == null);var state_15611__$1 = (function (){var statearr_15619 = state_15611;(statearr_15619[(10)] = inst_15592__$1);
return statearr_15619;
})();if(cljs.core.truth_(inst_15593))
{var statearr_15620_15730 = state_15611__$1;(statearr_15620_15730[(1)] = (5));
} else
{var statearr_15621_15731 = state_15611__$1;(statearr_15621_15731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15612 === (3)))
{var inst_15609 = (state_15611[(2)]);var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15611__$1,inst_15609);
} else
{if((state_val_15612 === (2)))
{var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15611__$1,(4),from);
} else
{if((state_val_15612 === (1)))
{var state_15611__$1 = state_15611;var statearr_15622_15732 = state_15611__$1;(statearr_15622_15732[(2)] = null);
(statearr_15622_15732[(1)] = (2));
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
});})(c__5813__auto___15726,jobs,results,process,async))
;return ((function (switch__5798__auto__,c__5813__auto___15726,jobs,results,process,async){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15626 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15626[(0)] = state_machine__5799__auto__);
(statearr_15626[(1)] = (1));
return statearr_15626;
});
var state_machine__5799__auto____1 = (function (state_15611){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15627){if((e15627 instanceof Object))
{var ex__5802__auto__ = e15627;var statearr_15628_15733 = state_15611;(statearr_15628_15733[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15627;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15734 = state_15611;
state_15611 = G__15734;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15611){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___15726,jobs,results,process,async))
})();var state__5815__auto__ = (function (){var statearr_15629 = f__5814__auto__.call(null);(statearr_15629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15726);
return statearr_15629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___15726,jobs,results,process,async))
);
var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__,jobs,results,process,async){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__,jobs,results,process,async){
return (function (state_15667){var state_val_15668 = (state_15667[(1)]);if((state_val_15668 === (7)))
{var inst_15663 = (state_15667[(2)]);var state_15667__$1 = state_15667;var statearr_15669_15735 = state_15667__$1;(statearr_15669_15735[(2)] = inst_15663);
(statearr_15669_15735[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (20)))
{var state_15667__$1 = state_15667;var statearr_15670_15736 = state_15667__$1;(statearr_15670_15736[(2)] = null);
(statearr_15670_15736[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (1)))
{var state_15667__$1 = state_15667;var statearr_15671_15737 = state_15667__$1;(statearr_15671_15737[(2)] = null);
(statearr_15671_15737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (4)))
{var inst_15632 = (state_15667[(7)]);var inst_15632__$1 = (state_15667[(2)]);var inst_15633 = (inst_15632__$1 == null);var state_15667__$1 = (function (){var statearr_15672 = state_15667;(statearr_15672[(7)] = inst_15632__$1);
return statearr_15672;
})();if(cljs.core.truth_(inst_15633))
{var statearr_15673_15738 = state_15667__$1;(statearr_15673_15738[(1)] = (5));
} else
{var statearr_15674_15739 = state_15667__$1;(statearr_15674_15739[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (15)))
{var inst_15645 = (state_15667[(8)]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15667__$1,(18),to,inst_15645);
} else
{if((state_val_15668 === (21)))
{var inst_15658 = (state_15667[(2)]);var state_15667__$1 = state_15667;var statearr_15675_15740 = state_15667__$1;(statearr_15675_15740[(2)] = inst_15658);
(statearr_15675_15740[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (13)))
{var inst_15660 = (state_15667[(2)]);var state_15667__$1 = (function (){var statearr_15676 = state_15667;(statearr_15676[(9)] = inst_15660);
return statearr_15676;
})();var statearr_15677_15741 = state_15667__$1;(statearr_15677_15741[(2)] = null);
(statearr_15677_15741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (6)))
{var inst_15632 = (state_15667[(7)]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15667__$1,(11),inst_15632);
} else
{if((state_val_15668 === (17)))
{var inst_15653 = (state_15667[(2)]);var state_15667__$1 = state_15667;if(cljs.core.truth_(inst_15653))
{var statearr_15678_15742 = state_15667__$1;(statearr_15678_15742[(1)] = (19));
} else
{var statearr_15679_15743 = state_15667__$1;(statearr_15679_15743[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (3)))
{var inst_15665 = (state_15667[(2)]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15667__$1,inst_15665);
} else
{if((state_val_15668 === (12)))
{var inst_15642 = (state_15667[(10)]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15667__$1,(14),inst_15642);
} else
{if((state_val_15668 === (2)))
{var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15667__$1,(4),results);
} else
{if((state_val_15668 === (19)))
{var state_15667__$1 = state_15667;var statearr_15680_15744 = state_15667__$1;(statearr_15680_15744[(2)] = null);
(statearr_15680_15744[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (11)))
{var inst_15642 = (state_15667[(2)]);var state_15667__$1 = (function (){var statearr_15681 = state_15667;(statearr_15681[(10)] = inst_15642);
return statearr_15681;
})();var statearr_15682_15745 = state_15667__$1;(statearr_15682_15745[(2)] = null);
(statearr_15682_15745[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (9)))
{var state_15667__$1 = state_15667;var statearr_15683_15746 = state_15667__$1;(statearr_15683_15746[(2)] = null);
(statearr_15683_15746[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (5)))
{var state_15667__$1 = state_15667;if(cljs.core.truth_(close_QMARK_))
{var statearr_15684_15747 = state_15667__$1;(statearr_15684_15747[(1)] = (8));
} else
{var statearr_15685_15748 = state_15667__$1;(statearr_15685_15748[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (14)))
{var inst_15647 = (state_15667[(11)]);var inst_15645 = (state_15667[(8)]);var inst_15645__$1 = (state_15667[(2)]);var inst_15646 = (inst_15645__$1 == null);var inst_15647__$1 = cljs.core.not.call(null,inst_15646);var state_15667__$1 = (function (){var statearr_15686 = state_15667;(statearr_15686[(11)] = inst_15647__$1);
(statearr_15686[(8)] = inst_15645__$1);
return statearr_15686;
})();if(inst_15647__$1)
{var statearr_15687_15749 = state_15667__$1;(statearr_15687_15749[(1)] = (15));
} else
{var statearr_15688_15750 = state_15667__$1;(statearr_15688_15750[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (16)))
{var inst_15647 = (state_15667[(11)]);var state_15667__$1 = state_15667;var statearr_15689_15751 = state_15667__$1;(statearr_15689_15751[(2)] = inst_15647);
(statearr_15689_15751[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (10)))
{var inst_15639 = (state_15667[(2)]);var state_15667__$1 = state_15667;var statearr_15690_15752 = state_15667__$1;(statearr_15690_15752[(2)] = inst_15639);
(statearr_15690_15752[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (18)))
{var inst_15650 = (state_15667[(2)]);var state_15667__$1 = state_15667;var statearr_15691_15753 = state_15667__$1;(statearr_15691_15753[(2)] = inst_15650);
(statearr_15691_15753[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15668 === (8)))
{var inst_15636 = cljs.core.async.close_BANG_.call(null,to);var state_15667__$1 = state_15667;var statearr_15692_15754 = state_15667__$1;(statearr_15692_15754[(2)] = inst_15636);
(statearr_15692_15754[(1)] = (10));
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
});})(c__5813__auto__,jobs,results,process,async))
;return ((function (switch__5798__auto__,c__5813__auto__,jobs,results,process,async){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15696 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15696[(0)] = state_machine__5799__auto__);
(statearr_15696[(1)] = (1));
return statearr_15696;
});
var state_machine__5799__auto____1 = (function (state_15667){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15697){if((e15697 instanceof Object))
{var ex__5802__auto__ = e15697;var statearr_15698_15755 = state_15667;(statearr_15698_15755[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15756 = state_15667;
state_15667 = G__15756;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15667){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__,jobs,results,process,async))
})();var state__5815__auto__ = (function (){var statearr_15699 = f__5814__auto__.call(null);(statearr_15699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_15699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__,jobs,results,process,async))
);
return c__5813__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5813__auto___15857 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___15857,tc,fc){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___15857,tc,fc){
return (function (state_15832){var state_val_15833 = (state_15832[(1)]);if((state_val_15833 === (7)))
{var inst_15828 = (state_15832[(2)]);var state_15832__$1 = state_15832;var statearr_15834_15858 = state_15832__$1;(statearr_15834_15858[(2)] = inst_15828);
(statearr_15834_15858[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (1)))
{var state_15832__$1 = state_15832;var statearr_15835_15859 = state_15832__$1;(statearr_15835_15859[(2)] = null);
(statearr_15835_15859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (4)))
{var inst_15809 = (state_15832[(7)]);var inst_15809__$1 = (state_15832[(2)]);var inst_15810 = (inst_15809__$1 == null);var state_15832__$1 = (function (){var statearr_15836 = state_15832;(statearr_15836[(7)] = inst_15809__$1);
return statearr_15836;
})();if(cljs.core.truth_(inst_15810))
{var statearr_15837_15860 = state_15832__$1;(statearr_15837_15860[(1)] = (5));
} else
{var statearr_15838_15861 = state_15832__$1;(statearr_15838_15861[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (13)))
{var state_15832__$1 = state_15832;var statearr_15839_15862 = state_15832__$1;(statearr_15839_15862[(2)] = null);
(statearr_15839_15862[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (6)))
{var inst_15809 = (state_15832[(7)]);var inst_15815 = p.call(null,inst_15809);var state_15832__$1 = state_15832;if(cljs.core.truth_(inst_15815))
{var statearr_15840_15863 = state_15832__$1;(statearr_15840_15863[(1)] = (9));
} else
{var statearr_15841_15864 = state_15832__$1;(statearr_15841_15864[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (3)))
{var inst_15830 = (state_15832[(2)]);var state_15832__$1 = state_15832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15832__$1,inst_15830);
} else
{if((state_val_15833 === (12)))
{var state_15832__$1 = state_15832;var statearr_15842_15865 = state_15832__$1;(statearr_15842_15865[(2)] = null);
(statearr_15842_15865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (2)))
{var state_15832__$1 = state_15832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15832__$1,(4),ch);
} else
{if((state_val_15833 === (11)))
{var inst_15809 = (state_15832[(7)]);var inst_15819 = (state_15832[(2)]);var state_15832__$1 = state_15832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15832__$1,(8),inst_15819,inst_15809);
} else
{if((state_val_15833 === (9)))
{var state_15832__$1 = state_15832;var statearr_15843_15866 = state_15832__$1;(statearr_15843_15866[(2)] = tc);
(statearr_15843_15866[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (5)))
{var inst_15812 = cljs.core.async.close_BANG_.call(null,tc);var inst_15813 = cljs.core.async.close_BANG_.call(null,fc);var state_15832__$1 = (function (){var statearr_15844 = state_15832;(statearr_15844[(8)] = inst_15812);
return statearr_15844;
})();var statearr_15845_15867 = state_15832__$1;(statearr_15845_15867[(2)] = inst_15813);
(statearr_15845_15867[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (14)))
{var inst_15826 = (state_15832[(2)]);var state_15832__$1 = state_15832;var statearr_15846_15868 = state_15832__$1;(statearr_15846_15868[(2)] = inst_15826);
(statearr_15846_15868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (10)))
{var state_15832__$1 = state_15832;var statearr_15847_15869 = state_15832__$1;(statearr_15847_15869[(2)] = fc);
(statearr_15847_15869[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15833 === (8)))
{var inst_15821 = (state_15832[(2)]);var state_15832__$1 = state_15832;if(cljs.core.truth_(inst_15821))
{var statearr_15848_15870 = state_15832__$1;(statearr_15848_15870[(1)] = (12));
} else
{var statearr_15849_15871 = state_15832__$1;(statearr_15849_15871[(1)] = (13));
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
});})(c__5813__auto___15857,tc,fc))
;return ((function (switch__5798__auto__,c__5813__auto___15857,tc,fc){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15853 = [null,null,null,null,null,null,null,null,null];(statearr_15853[(0)] = state_machine__5799__auto__);
(statearr_15853[(1)] = (1));
return statearr_15853;
});
var state_machine__5799__auto____1 = (function (state_15832){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15854){if((e15854 instanceof Object))
{var ex__5802__auto__ = e15854;var statearr_15855_15872 = state_15832;(statearr_15855_15872[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15854;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15873 = state_15832;
state_15832 = G__15873;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15832){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___15857,tc,fc))
})();var state__5815__auto__ = (function (){var statearr_15856 = f__5814__auto__.call(null);(statearr_15856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___15857);
return statearr_15856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___15857,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_15920){var state_val_15921 = (state_15920[(1)]);if((state_val_15921 === (7)))
{var inst_15916 = (state_15920[(2)]);var state_15920__$1 = state_15920;var statearr_15922_15938 = state_15920__$1;(statearr_15922_15938[(2)] = inst_15916);
(statearr_15922_15938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15921 === (6)))
{var inst_15909 = (state_15920[(7)]);var inst_15906 = (state_15920[(8)]);var inst_15913 = f.call(null,inst_15906,inst_15909);var inst_15906__$1 = inst_15913;var state_15920__$1 = (function (){var statearr_15923 = state_15920;(statearr_15923[(8)] = inst_15906__$1);
return statearr_15923;
})();var statearr_15924_15939 = state_15920__$1;(statearr_15924_15939[(2)] = null);
(statearr_15924_15939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15921 === (5)))
{var inst_15906 = (state_15920[(8)]);var state_15920__$1 = state_15920;var statearr_15925_15940 = state_15920__$1;(statearr_15925_15940[(2)] = inst_15906);
(statearr_15925_15940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15921 === (4)))
{var inst_15909 = (state_15920[(7)]);var inst_15909__$1 = (state_15920[(2)]);var inst_15910 = (inst_15909__$1 == null);var state_15920__$1 = (function (){var statearr_15926 = state_15920;(statearr_15926[(7)] = inst_15909__$1);
return statearr_15926;
})();if(cljs.core.truth_(inst_15910))
{var statearr_15927_15941 = state_15920__$1;(statearr_15927_15941[(1)] = (5));
} else
{var statearr_15928_15942 = state_15920__$1;(statearr_15928_15942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15921 === (3)))
{var inst_15918 = (state_15920[(2)]);var state_15920__$1 = state_15920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15920__$1,inst_15918);
} else
{if((state_val_15921 === (2)))
{var state_15920__$1 = state_15920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15920__$1,(4),ch);
} else
{if((state_val_15921 === (1)))
{var inst_15906 = init;var state_15920__$1 = (function (){var statearr_15929 = state_15920;(statearr_15929[(8)] = inst_15906);
return statearr_15929;
})();var statearr_15930_15943 = state_15920__$1;(statearr_15930_15943[(2)] = null);
(statearr_15930_15943[(1)] = (2));
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
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_15934 = [null,null,null,null,null,null,null,null,null];(statearr_15934[(0)] = state_machine__5799__auto__);
(statearr_15934[(1)] = (1));
return statearr_15934;
});
var state_machine__5799__auto____1 = (function (state_15920){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_15920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e15935){if((e15935 instanceof Object))
{var ex__5802__auto__ = e15935;var statearr_15936_15944 = state_15920;(statearr_15936_15944[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15920);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15935;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15945 = state_15920;
state_15920 = G__15945;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_15920){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_15920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_15937 = f__5814__auto__.call(null);(statearr_15937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_15937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_16019){var state_val_16020 = (state_16019[(1)]);if((state_val_16020 === (7)))
{var inst_16001 = (state_16019[(2)]);var state_16019__$1 = state_16019;var statearr_16021_16044 = state_16019__$1;(statearr_16021_16044[(2)] = inst_16001);
(statearr_16021_16044[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (1)))
{var inst_15995 = cljs.core.seq.call(null,coll);var inst_15996 = inst_15995;var state_16019__$1 = (function (){var statearr_16022 = state_16019;(statearr_16022[(7)] = inst_15996);
return statearr_16022;
})();var statearr_16023_16045 = state_16019__$1;(statearr_16023_16045[(2)] = null);
(statearr_16023_16045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (4)))
{var inst_15996 = (state_16019[(7)]);var inst_15999 = cljs.core.first.call(null,inst_15996);var state_16019__$1 = state_16019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16019__$1,(7),ch,inst_15999);
} else
{if((state_val_16020 === (13)))
{var inst_16013 = (state_16019[(2)]);var state_16019__$1 = state_16019;var statearr_16024_16046 = state_16019__$1;(statearr_16024_16046[(2)] = inst_16013);
(statearr_16024_16046[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (6)))
{var inst_16004 = (state_16019[(2)]);var state_16019__$1 = state_16019;if(cljs.core.truth_(inst_16004))
{var statearr_16025_16047 = state_16019__$1;(statearr_16025_16047[(1)] = (8));
} else
{var statearr_16026_16048 = state_16019__$1;(statearr_16026_16048[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (3)))
{var inst_16017 = (state_16019[(2)]);var state_16019__$1 = state_16019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16019__$1,inst_16017);
} else
{if((state_val_16020 === (12)))
{var state_16019__$1 = state_16019;var statearr_16027_16049 = state_16019__$1;(statearr_16027_16049[(2)] = null);
(statearr_16027_16049[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (2)))
{var inst_15996 = (state_16019[(7)]);var state_16019__$1 = state_16019;if(cljs.core.truth_(inst_15996))
{var statearr_16028_16050 = state_16019__$1;(statearr_16028_16050[(1)] = (4));
} else
{var statearr_16029_16051 = state_16019__$1;(statearr_16029_16051[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (11)))
{var inst_16010 = cljs.core.async.close_BANG_.call(null,ch);var state_16019__$1 = state_16019;var statearr_16030_16052 = state_16019__$1;(statearr_16030_16052[(2)] = inst_16010);
(statearr_16030_16052[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (9)))
{var state_16019__$1 = state_16019;if(cljs.core.truth_(close_QMARK_))
{var statearr_16031_16053 = state_16019__$1;(statearr_16031_16053[(1)] = (11));
} else
{var statearr_16032_16054 = state_16019__$1;(statearr_16032_16054[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (5)))
{var inst_15996 = (state_16019[(7)]);var state_16019__$1 = state_16019;var statearr_16033_16055 = state_16019__$1;(statearr_16033_16055[(2)] = inst_15996);
(statearr_16033_16055[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (10)))
{var inst_16015 = (state_16019[(2)]);var state_16019__$1 = state_16019;var statearr_16034_16056 = state_16019__$1;(statearr_16034_16056[(2)] = inst_16015);
(statearr_16034_16056[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16020 === (8)))
{var inst_15996 = (state_16019[(7)]);var inst_16006 = cljs.core.next.call(null,inst_15996);var inst_15996__$1 = inst_16006;var state_16019__$1 = (function (){var statearr_16035 = state_16019;(statearr_16035[(7)] = inst_15996__$1);
return statearr_16035;
})();var statearr_16036_16057 = state_16019__$1;(statearr_16036_16057[(2)] = null);
(statearr_16036_16057[(1)] = (2));
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
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_16040 = [null,null,null,null,null,null,null,null];(statearr_16040[(0)] = state_machine__5799__auto__);
(statearr_16040[(1)] = (1));
return statearr_16040;
});
var state_machine__5799__auto____1 = (function (state_16019){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_16019);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e16041){if((e16041 instanceof Object))
{var ex__5802__auto__ = e16041;var statearr_16042_16058 = state_16019;(statearr_16042_16058[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16019);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16059 = state_16019;
state_16019 = G__16059;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_16019){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_16019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_16043 = f__5814__auto__.call(null);(statearr_16043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_16043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
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
cljs.core.async.Mux = (function (){var obj16061 = {};return obj16061;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3619__auto__ = _;if(and__3619__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4267__auto__ = (((_ == null))?null:_);return (function (){var or__3631__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16063 = {};return obj16063;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16285 = (function (cs,ch,mult,meta16286){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16286 = meta16286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16285.cljs$lang$type = true;
cljs.core.async.t16285.cljs$lang$ctorStr = "cljs.core.async/t16285";
cljs.core.async.t16285.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t16285");
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16285.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16287){var self__ = this;
var _16287__$1 = this;return self__.meta16286;
});})(cs))
;
cljs.core.async.t16285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16287,meta16286__$1){var self__ = this;
var _16287__$1 = this;return (new cljs.core.async.t16285(self__.cs,self__.ch,self__.mult,meta16286__$1));
});})(cs))
;
cljs.core.async.__GT_t16285 = ((function (cs){
return (function __GT_t16285(cs__$1,ch__$1,mult__$1,meta16286){return (new cljs.core.async.t16285(cs__$1,ch__$1,mult__$1,meta16286));
});})(cs))
;
}
return (new cljs.core.async.t16285(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5813__auto___16506 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___16506,cs,m,dchan,dctr,done){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___16506,cs,m,dchan,dctr,done){
return (function (state_16418){var state_val_16419 = (state_16418[(1)]);if((state_val_16419 === (7)))
{var inst_16414 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16420_16507 = state_16418__$1;(statearr_16420_16507[(2)] = inst_16414);
(statearr_16420_16507[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (20)))
{var inst_16319 = (state_16418[(7)]);var inst_16329 = cljs.core.first.call(null,inst_16319);var inst_16330 = cljs.core.nth.call(null,inst_16329,(0),null);var inst_16331 = cljs.core.nth.call(null,inst_16329,(1),null);var state_16418__$1 = (function (){var statearr_16421 = state_16418;(statearr_16421[(8)] = inst_16330);
return statearr_16421;
})();if(cljs.core.truth_(inst_16331))
{var statearr_16422_16508 = state_16418__$1;(statearr_16422_16508[(1)] = (22));
} else
{var statearr_16423_16509 = state_16418__$1;(statearr_16423_16509[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (27)))
{var inst_16359 = (state_16418[(9)]);var inst_16366 = (state_16418[(10)]);var inst_16290 = (state_16418[(11)]);var inst_16361 = (state_16418[(12)]);var inst_16366__$1 = cljs.core._nth.call(null,inst_16359,inst_16361);var inst_16367 = cljs.core.async.put_BANG_.call(null,inst_16366__$1,inst_16290,done);var state_16418__$1 = (function (){var statearr_16424 = state_16418;(statearr_16424[(10)] = inst_16366__$1);
return statearr_16424;
})();if(cljs.core.truth_(inst_16367))
{var statearr_16425_16510 = state_16418__$1;(statearr_16425_16510[(1)] = (30));
} else
{var statearr_16426_16511 = state_16418__$1;(statearr_16426_16511[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (1)))
{var state_16418__$1 = state_16418;var statearr_16427_16512 = state_16418__$1;(statearr_16427_16512[(2)] = null);
(statearr_16427_16512[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (24)))
{var inst_16319 = (state_16418[(7)]);var inst_16336 = (state_16418[(2)]);var inst_16337 = cljs.core.next.call(null,inst_16319);var inst_16299 = inst_16337;var inst_16300 = null;var inst_16301 = (0);var inst_16302 = (0);var state_16418__$1 = (function (){var statearr_16428 = state_16418;(statearr_16428[(13)] = inst_16301);
(statearr_16428[(14)] = inst_16336);
(statearr_16428[(15)] = inst_16300);
(statearr_16428[(16)] = inst_16302);
(statearr_16428[(17)] = inst_16299);
return statearr_16428;
})();var statearr_16429_16513 = state_16418__$1;(statearr_16429_16513[(2)] = null);
(statearr_16429_16513[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (39)))
{var state_16418__$1 = state_16418;var statearr_16433_16514 = state_16418__$1;(statearr_16433_16514[(2)] = null);
(statearr_16433_16514[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (4)))
{var inst_16290 = (state_16418[(11)]);var inst_16290__$1 = (state_16418[(2)]);var inst_16291 = (inst_16290__$1 == null);var state_16418__$1 = (function (){var statearr_16434 = state_16418;(statearr_16434[(11)] = inst_16290__$1);
return statearr_16434;
})();if(cljs.core.truth_(inst_16291))
{var statearr_16435_16515 = state_16418__$1;(statearr_16435_16515[(1)] = (5));
} else
{var statearr_16436_16516 = state_16418__$1;(statearr_16436_16516[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (15)))
{var inst_16301 = (state_16418[(13)]);var inst_16300 = (state_16418[(15)]);var inst_16302 = (state_16418[(16)]);var inst_16299 = (state_16418[(17)]);var inst_16315 = (state_16418[(2)]);var inst_16316 = (inst_16302 + (1));var tmp16430 = inst_16301;var tmp16431 = inst_16300;var tmp16432 = inst_16299;var inst_16299__$1 = tmp16432;var inst_16300__$1 = tmp16431;var inst_16301__$1 = tmp16430;var inst_16302__$1 = inst_16316;var state_16418__$1 = (function (){var statearr_16437 = state_16418;(statearr_16437[(18)] = inst_16315);
(statearr_16437[(13)] = inst_16301__$1);
(statearr_16437[(15)] = inst_16300__$1);
(statearr_16437[(16)] = inst_16302__$1);
(statearr_16437[(17)] = inst_16299__$1);
return statearr_16437;
})();var statearr_16438_16517 = state_16418__$1;(statearr_16438_16517[(2)] = null);
(statearr_16438_16517[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (21)))
{var inst_16340 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16442_16518 = state_16418__$1;(statearr_16442_16518[(2)] = inst_16340);
(statearr_16442_16518[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (31)))
{var inst_16366 = (state_16418[(10)]);var inst_16370 = done.call(null,null);var inst_16371 = cljs.core.async.untap_STAR_.call(null,m,inst_16366);var state_16418__$1 = (function (){var statearr_16443 = state_16418;(statearr_16443[(19)] = inst_16370);
return statearr_16443;
})();var statearr_16444_16519 = state_16418__$1;(statearr_16444_16519[(2)] = inst_16371);
(statearr_16444_16519[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (32)))
{var inst_16359 = (state_16418[(9)]);var inst_16360 = (state_16418[(20)]);var inst_16361 = (state_16418[(12)]);var inst_16358 = (state_16418[(21)]);var inst_16373 = (state_16418[(2)]);var inst_16374 = (inst_16361 + (1));var tmp16439 = inst_16359;var tmp16440 = inst_16360;var tmp16441 = inst_16358;var inst_16358__$1 = tmp16441;var inst_16359__$1 = tmp16439;var inst_16360__$1 = tmp16440;var inst_16361__$1 = inst_16374;var state_16418__$1 = (function (){var statearr_16445 = state_16418;(statearr_16445[(9)] = inst_16359__$1);
(statearr_16445[(20)] = inst_16360__$1);
(statearr_16445[(12)] = inst_16361__$1);
(statearr_16445[(21)] = inst_16358__$1);
(statearr_16445[(22)] = inst_16373);
return statearr_16445;
})();var statearr_16446_16520 = state_16418__$1;(statearr_16446_16520[(2)] = null);
(statearr_16446_16520[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (40)))
{var inst_16386 = (state_16418[(23)]);var inst_16390 = done.call(null,null);var inst_16391 = cljs.core.async.untap_STAR_.call(null,m,inst_16386);var state_16418__$1 = (function (){var statearr_16447 = state_16418;(statearr_16447[(24)] = inst_16390);
return statearr_16447;
})();var statearr_16448_16521 = state_16418__$1;(statearr_16448_16521[(2)] = inst_16391);
(statearr_16448_16521[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (33)))
{var inst_16377 = (state_16418[(25)]);var inst_16379 = cljs.core.chunked_seq_QMARK_.call(null,inst_16377);var state_16418__$1 = state_16418;if(inst_16379)
{var statearr_16449_16522 = state_16418__$1;(statearr_16449_16522[(1)] = (36));
} else
{var statearr_16450_16523 = state_16418__$1;(statearr_16450_16523[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (13)))
{var inst_16309 = (state_16418[(26)]);var inst_16312 = cljs.core.async.close_BANG_.call(null,inst_16309);var state_16418__$1 = state_16418;var statearr_16451_16524 = state_16418__$1;(statearr_16451_16524[(2)] = inst_16312);
(statearr_16451_16524[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (22)))
{var inst_16330 = (state_16418[(8)]);var inst_16333 = cljs.core.async.close_BANG_.call(null,inst_16330);var state_16418__$1 = state_16418;var statearr_16452_16525 = state_16418__$1;(statearr_16452_16525[(2)] = inst_16333);
(statearr_16452_16525[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (36)))
{var inst_16377 = (state_16418[(25)]);var inst_16381 = cljs.core.chunk_first.call(null,inst_16377);var inst_16382 = cljs.core.chunk_rest.call(null,inst_16377);var inst_16383 = cljs.core.count.call(null,inst_16381);var inst_16358 = inst_16382;var inst_16359 = inst_16381;var inst_16360 = inst_16383;var inst_16361 = (0);var state_16418__$1 = (function (){var statearr_16453 = state_16418;(statearr_16453[(9)] = inst_16359);
(statearr_16453[(20)] = inst_16360);
(statearr_16453[(12)] = inst_16361);
(statearr_16453[(21)] = inst_16358);
return statearr_16453;
})();var statearr_16454_16526 = state_16418__$1;(statearr_16454_16526[(2)] = null);
(statearr_16454_16526[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (41)))
{var inst_16377 = (state_16418[(25)]);var inst_16393 = (state_16418[(2)]);var inst_16394 = cljs.core.next.call(null,inst_16377);var inst_16358 = inst_16394;var inst_16359 = null;var inst_16360 = (0);var inst_16361 = (0);var state_16418__$1 = (function (){var statearr_16455 = state_16418;(statearr_16455[(9)] = inst_16359);
(statearr_16455[(20)] = inst_16360);
(statearr_16455[(12)] = inst_16361);
(statearr_16455[(21)] = inst_16358);
(statearr_16455[(27)] = inst_16393);
return statearr_16455;
})();var statearr_16456_16527 = state_16418__$1;(statearr_16456_16527[(2)] = null);
(statearr_16456_16527[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (43)))
{var state_16418__$1 = state_16418;var statearr_16457_16528 = state_16418__$1;(statearr_16457_16528[(2)] = null);
(statearr_16457_16528[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (29)))
{var inst_16402 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16458_16529 = state_16418__$1;(statearr_16458_16529[(2)] = inst_16402);
(statearr_16458_16529[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (44)))
{var inst_16411 = (state_16418[(2)]);var state_16418__$1 = (function (){var statearr_16459 = state_16418;(statearr_16459[(28)] = inst_16411);
return statearr_16459;
})();var statearr_16460_16530 = state_16418__$1;(statearr_16460_16530[(2)] = null);
(statearr_16460_16530[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (6)))
{var inst_16350 = (state_16418[(29)]);var inst_16349 = cljs.core.deref.call(null,cs);var inst_16350__$1 = cljs.core.keys.call(null,inst_16349);var inst_16351 = cljs.core.count.call(null,inst_16350__$1);var inst_16352 = cljs.core.reset_BANG_.call(null,dctr,inst_16351);var inst_16357 = cljs.core.seq.call(null,inst_16350__$1);var inst_16358 = inst_16357;var inst_16359 = null;var inst_16360 = (0);var inst_16361 = (0);var state_16418__$1 = (function (){var statearr_16461 = state_16418;(statearr_16461[(9)] = inst_16359);
(statearr_16461[(20)] = inst_16360);
(statearr_16461[(12)] = inst_16361);
(statearr_16461[(21)] = inst_16358);
(statearr_16461[(30)] = inst_16352);
(statearr_16461[(29)] = inst_16350__$1);
return statearr_16461;
})();var statearr_16462_16531 = state_16418__$1;(statearr_16462_16531[(2)] = null);
(statearr_16462_16531[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (28)))
{var inst_16377 = (state_16418[(25)]);var inst_16358 = (state_16418[(21)]);var inst_16377__$1 = cljs.core.seq.call(null,inst_16358);var state_16418__$1 = (function (){var statearr_16463 = state_16418;(statearr_16463[(25)] = inst_16377__$1);
return statearr_16463;
})();if(inst_16377__$1)
{var statearr_16464_16532 = state_16418__$1;(statearr_16464_16532[(1)] = (33));
} else
{var statearr_16465_16533 = state_16418__$1;(statearr_16465_16533[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (25)))
{var inst_16360 = (state_16418[(20)]);var inst_16361 = (state_16418[(12)]);var inst_16363 = (inst_16361 < inst_16360);var inst_16364 = inst_16363;var state_16418__$1 = state_16418;if(cljs.core.truth_(inst_16364))
{var statearr_16466_16534 = state_16418__$1;(statearr_16466_16534[(1)] = (27));
} else
{var statearr_16467_16535 = state_16418__$1;(statearr_16467_16535[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (34)))
{var state_16418__$1 = state_16418;var statearr_16468_16536 = state_16418__$1;(statearr_16468_16536[(2)] = null);
(statearr_16468_16536[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (17)))
{var state_16418__$1 = state_16418;var statearr_16469_16537 = state_16418__$1;(statearr_16469_16537[(2)] = null);
(statearr_16469_16537[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (3)))
{var inst_16416 = (state_16418[(2)]);var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16418__$1,inst_16416);
} else
{if((state_val_16419 === (12)))
{var inst_16345 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16470_16538 = state_16418__$1;(statearr_16470_16538[(2)] = inst_16345);
(statearr_16470_16538[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (2)))
{var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16418__$1,(4),ch);
} else
{if((state_val_16419 === (23)))
{var state_16418__$1 = state_16418;var statearr_16471_16539 = state_16418__$1;(statearr_16471_16539[(2)] = null);
(statearr_16471_16539[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (35)))
{var inst_16400 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16472_16540 = state_16418__$1;(statearr_16472_16540[(2)] = inst_16400);
(statearr_16472_16540[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (19)))
{var inst_16319 = (state_16418[(7)]);var inst_16323 = cljs.core.chunk_first.call(null,inst_16319);var inst_16324 = cljs.core.chunk_rest.call(null,inst_16319);var inst_16325 = cljs.core.count.call(null,inst_16323);var inst_16299 = inst_16324;var inst_16300 = inst_16323;var inst_16301 = inst_16325;var inst_16302 = (0);var state_16418__$1 = (function (){var statearr_16473 = state_16418;(statearr_16473[(13)] = inst_16301);
(statearr_16473[(15)] = inst_16300);
(statearr_16473[(16)] = inst_16302);
(statearr_16473[(17)] = inst_16299);
return statearr_16473;
})();var statearr_16474_16541 = state_16418__$1;(statearr_16474_16541[(2)] = null);
(statearr_16474_16541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (11)))
{var inst_16319 = (state_16418[(7)]);var inst_16299 = (state_16418[(17)]);var inst_16319__$1 = cljs.core.seq.call(null,inst_16299);var state_16418__$1 = (function (){var statearr_16475 = state_16418;(statearr_16475[(7)] = inst_16319__$1);
return statearr_16475;
})();if(inst_16319__$1)
{var statearr_16476_16542 = state_16418__$1;(statearr_16476_16542[(1)] = (16));
} else
{var statearr_16477_16543 = state_16418__$1;(statearr_16477_16543[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (9)))
{var inst_16347 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16478_16544 = state_16418__$1;(statearr_16478_16544[(2)] = inst_16347);
(statearr_16478_16544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (5)))
{var inst_16297 = cljs.core.deref.call(null,cs);var inst_16298 = cljs.core.seq.call(null,inst_16297);var inst_16299 = inst_16298;var inst_16300 = null;var inst_16301 = (0);var inst_16302 = (0);var state_16418__$1 = (function (){var statearr_16479 = state_16418;(statearr_16479[(13)] = inst_16301);
(statearr_16479[(15)] = inst_16300);
(statearr_16479[(16)] = inst_16302);
(statearr_16479[(17)] = inst_16299);
return statearr_16479;
})();var statearr_16480_16545 = state_16418__$1;(statearr_16480_16545[(2)] = null);
(statearr_16480_16545[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (14)))
{var state_16418__$1 = state_16418;var statearr_16481_16546 = state_16418__$1;(statearr_16481_16546[(2)] = null);
(statearr_16481_16546[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (45)))
{var inst_16408 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16482_16547 = state_16418__$1;(statearr_16482_16547[(2)] = inst_16408);
(statearr_16482_16547[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (26)))
{var inst_16350 = (state_16418[(29)]);var inst_16404 = (state_16418[(2)]);var inst_16405 = cljs.core.seq.call(null,inst_16350);var state_16418__$1 = (function (){var statearr_16483 = state_16418;(statearr_16483[(31)] = inst_16404);
return statearr_16483;
})();if(inst_16405)
{var statearr_16484_16548 = state_16418__$1;(statearr_16484_16548[(1)] = (42));
} else
{var statearr_16485_16549 = state_16418__$1;(statearr_16485_16549[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (16)))
{var inst_16319 = (state_16418[(7)]);var inst_16321 = cljs.core.chunked_seq_QMARK_.call(null,inst_16319);var state_16418__$1 = state_16418;if(inst_16321)
{var statearr_16486_16550 = state_16418__$1;(statearr_16486_16550[(1)] = (19));
} else
{var statearr_16487_16551 = state_16418__$1;(statearr_16487_16551[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (38)))
{var inst_16397 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16488_16552 = state_16418__$1;(statearr_16488_16552[(2)] = inst_16397);
(statearr_16488_16552[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (30)))
{var state_16418__$1 = state_16418;var statearr_16489_16553 = state_16418__$1;(statearr_16489_16553[(2)] = null);
(statearr_16489_16553[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (10)))
{var inst_16300 = (state_16418[(15)]);var inst_16302 = (state_16418[(16)]);var inst_16308 = cljs.core._nth.call(null,inst_16300,inst_16302);var inst_16309 = cljs.core.nth.call(null,inst_16308,(0),null);var inst_16310 = cljs.core.nth.call(null,inst_16308,(1),null);var state_16418__$1 = (function (){var statearr_16490 = state_16418;(statearr_16490[(26)] = inst_16309);
return statearr_16490;
})();if(cljs.core.truth_(inst_16310))
{var statearr_16491_16554 = state_16418__$1;(statearr_16491_16554[(1)] = (13));
} else
{var statearr_16492_16555 = state_16418__$1;(statearr_16492_16555[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (18)))
{var inst_16343 = (state_16418[(2)]);var state_16418__$1 = state_16418;var statearr_16493_16556 = state_16418__$1;(statearr_16493_16556[(2)] = inst_16343);
(statearr_16493_16556[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (42)))
{var state_16418__$1 = state_16418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16418__$1,(45),dchan);
} else
{if((state_val_16419 === (37)))
{var inst_16377 = (state_16418[(25)]);var inst_16290 = (state_16418[(11)]);var inst_16386 = (state_16418[(23)]);var inst_16386__$1 = cljs.core.first.call(null,inst_16377);var inst_16387 = cljs.core.async.put_BANG_.call(null,inst_16386__$1,inst_16290,done);var state_16418__$1 = (function (){var statearr_16494 = state_16418;(statearr_16494[(23)] = inst_16386__$1);
return statearr_16494;
})();if(cljs.core.truth_(inst_16387))
{var statearr_16495_16557 = state_16418__$1;(statearr_16495_16557[(1)] = (39));
} else
{var statearr_16496_16558 = state_16418__$1;(statearr_16496_16558[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16419 === (8)))
{var inst_16301 = (state_16418[(13)]);var inst_16302 = (state_16418[(16)]);var inst_16304 = (inst_16302 < inst_16301);var inst_16305 = inst_16304;var state_16418__$1 = state_16418;if(cljs.core.truth_(inst_16305))
{var statearr_16497_16559 = state_16418__$1;(statearr_16497_16559[(1)] = (10));
} else
{var statearr_16498_16560 = state_16418__$1;(statearr_16498_16560[(1)] = (11));
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
});})(c__5813__auto___16506,cs,m,dchan,dctr,done))
;return ((function (switch__5798__auto__,c__5813__auto___16506,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_16502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16502[(0)] = state_machine__5799__auto__);
(statearr_16502[(1)] = (1));
return statearr_16502;
});
var state_machine__5799__auto____1 = (function (state_16418){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_16418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e16503){if((e16503 instanceof Object))
{var ex__5802__auto__ = e16503;var statearr_16504_16561 = state_16418;(statearr_16504_16561[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16503;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16562 = state_16418;
state_16418 = G__16562;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_16418){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_16418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___16506,cs,m,dchan,dctr,done))
})();var state__5815__auto__ = (function (){var statearr_16505 = f__5814__auto__.call(null);(statearr_16505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___16506);
return statearr_16505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___16506,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16564 = {};return obj16564;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3619__auto__ = m;if(and__3619__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4267__auto__ = (((m == null))?null:m);return (function (){var or__3631__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16565){var map__16570 = p__16565;var map__16570__$1 = ((cljs.core.seq_QMARK_.call(null,map__16570))?cljs.core.apply.call(null,cljs.core.hash_map,map__16570):map__16570);var opts = map__16570__$1;var statearr_16571_16574 = state;(statearr_16571_16574[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__16570,map__16570__$1,opts){
return (function (val){var statearr_16572_16575 = state;(statearr_16572_16575[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16570,map__16570__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_16573_16576 = state;(statearr_16573_16576[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16565 = null;if (arguments.length > 3) {
  p__16565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16565);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16577){
var state = cljs.core.first(arglist__16577);
arglist__16577 = cljs.core.next(arglist__16577);
var cont_block = cljs.core.first(arglist__16577);
arglist__16577 = cljs.core.next(arglist__16577);
var ports = cljs.core.first(arglist__16577);
var p__16565 = cljs.core.rest(arglist__16577);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16565);
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
;var m = (function (){if(typeof cljs.core.async.t16697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16697 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16698){
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
this.meta16698 = meta16698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16697.cljs$lang$type = true;
cljs.core.async.t16697.cljs$lang$ctorStr = "cljs.core.async/t16697";
cljs.core.async.t16697.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t16697");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16699){var self__ = this;
var _16699__$1 = this;return self__.meta16698;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16699,meta16698__$1){var self__ = this;
var _16699__$1 = this;return (new cljs.core.async.t16697(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16698__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16697 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16697(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16698){return (new cljs.core.async.t16697(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16698));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16697(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5813__auto___16816 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16769){var state_val_16770 = (state_16769[(1)]);if((state_val_16770 === (7)))
{var inst_16713 = (state_16769[(7)]);var inst_16718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16713);var state_16769__$1 = state_16769;var statearr_16771_16817 = state_16769__$1;(statearr_16771_16817[(2)] = inst_16718);
(statearr_16771_16817[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (20)))
{var inst_16728 = (state_16769[(8)]);var state_16769__$1 = state_16769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16769__$1,(23),out,inst_16728);
} else
{if((state_val_16770 === (1)))
{var inst_16703 = (state_16769[(9)]);var inst_16703__$1 = calc_state.call(null);var inst_16704 = cljs.core.seq_QMARK_.call(null,inst_16703__$1);var state_16769__$1 = (function (){var statearr_16772 = state_16769;(statearr_16772[(9)] = inst_16703__$1);
return statearr_16772;
})();if(inst_16704)
{var statearr_16773_16818 = state_16769__$1;(statearr_16773_16818[(1)] = (2));
} else
{var statearr_16774_16819 = state_16769__$1;(statearr_16774_16819[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (24)))
{var inst_16721 = (state_16769[(10)]);var inst_16713 = inst_16721;var state_16769__$1 = (function (){var statearr_16775 = state_16769;(statearr_16775[(7)] = inst_16713);
return statearr_16775;
})();var statearr_16776_16820 = state_16769__$1;(statearr_16776_16820[(2)] = null);
(statearr_16776_16820[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (4)))
{var inst_16703 = (state_16769[(9)]);var inst_16709 = (state_16769[(2)]);var inst_16710 = cljs.core.get.call(null,inst_16709,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16711 = cljs.core.get.call(null,inst_16709,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16712 = cljs.core.get.call(null,inst_16709,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16713 = inst_16703;var state_16769__$1 = (function (){var statearr_16777 = state_16769;(statearr_16777[(11)] = inst_16712);
(statearr_16777[(7)] = inst_16713);
(statearr_16777[(12)] = inst_16710);
(statearr_16777[(13)] = inst_16711);
return statearr_16777;
})();var statearr_16778_16821 = state_16769__$1;(statearr_16778_16821[(2)] = null);
(statearr_16778_16821[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (15)))
{var state_16769__$1 = state_16769;var statearr_16779_16822 = state_16769__$1;(statearr_16779_16822[(2)] = null);
(statearr_16779_16822[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (21)))
{var inst_16721 = (state_16769[(10)]);var inst_16713 = inst_16721;var state_16769__$1 = (function (){var statearr_16780 = state_16769;(statearr_16780[(7)] = inst_16713);
return statearr_16780;
})();var statearr_16781_16823 = state_16769__$1;(statearr_16781_16823[(2)] = null);
(statearr_16781_16823[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (13)))
{var inst_16765 = (state_16769[(2)]);var state_16769__$1 = state_16769;var statearr_16782_16824 = state_16769__$1;(statearr_16782_16824[(2)] = inst_16765);
(statearr_16782_16824[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (22)))
{var inst_16763 = (state_16769[(2)]);var state_16769__$1 = state_16769;var statearr_16783_16825 = state_16769__$1;(statearr_16783_16825[(2)] = inst_16763);
(statearr_16783_16825[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (6)))
{var inst_16767 = (state_16769[(2)]);var state_16769__$1 = state_16769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16769__$1,inst_16767);
} else
{if((state_val_16770 === (25)))
{var state_16769__$1 = state_16769;var statearr_16784_16826 = state_16769__$1;(statearr_16784_16826[(2)] = null);
(statearr_16784_16826[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (17)))
{var inst_16743 = (state_16769[(14)]);var state_16769__$1 = state_16769;var statearr_16785_16827 = state_16769__$1;(statearr_16785_16827[(2)] = inst_16743);
(statearr_16785_16827[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (3)))
{var inst_16703 = (state_16769[(9)]);var state_16769__$1 = state_16769;var statearr_16786_16828 = state_16769__$1;(statearr_16786_16828[(2)] = inst_16703);
(statearr_16786_16828[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (12)))
{var inst_16729 = (state_16769[(15)]);var inst_16724 = (state_16769[(16)]);var inst_16743 = (state_16769[(14)]);var inst_16743__$1 = inst_16724.call(null,inst_16729);var state_16769__$1 = (function (){var statearr_16787 = state_16769;(statearr_16787[(14)] = inst_16743__$1);
return statearr_16787;
})();if(cljs.core.truth_(inst_16743__$1))
{var statearr_16788_16829 = state_16769__$1;(statearr_16788_16829[(1)] = (17));
} else
{var statearr_16789_16830 = state_16769__$1;(statearr_16789_16830[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (2)))
{var inst_16703 = (state_16769[(9)]);var inst_16706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16703);var state_16769__$1 = state_16769;var statearr_16790_16831 = state_16769__$1;(statearr_16790_16831[(2)] = inst_16706);
(statearr_16790_16831[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (23)))
{var inst_16754 = (state_16769[(2)]);var state_16769__$1 = state_16769;if(cljs.core.truth_(inst_16754))
{var statearr_16791_16832 = state_16769__$1;(statearr_16791_16832[(1)] = (24));
} else
{var statearr_16792_16833 = state_16769__$1;(statearr_16792_16833[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (19)))
{var inst_16751 = (state_16769[(2)]);var state_16769__$1 = state_16769;if(cljs.core.truth_(inst_16751))
{var statearr_16793_16834 = state_16769__$1;(statearr_16793_16834[(1)] = (20));
} else
{var statearr_16794_16835 = state_16769__$1;(statearr_16794_16835[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (11)))
{var inst_16728 = (state_16769[(8)]);var inst_16734 = (inst_16728 == null);var state_16769__$1 = state_16769;if(cljs.core.truth_(inst_16734))
{var statearr_16795_16836 = state_16769__$1;(statearr_16795_16836[(1)] = (14));
} else
{var statearr_16796_16837 = state_16769__$1;(statearr_16796_16837[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (9)))
{var inst_16721 = (state_16769[(10)]);var inst_16721__$1 = (state_16769[(2)]);var inst_16722 = cljs.core.get.call(null,inst_16721__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16723 = cljs.core.get.call(null,inst_16721__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16724 = cljs.core.get.call(null,inst_16721__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16769__$1 = (function (){var statearr_16797 = state_16769;(statearr_16797[(10)] = inst_16721__$1);
(statearr_16797[(16)] = inst_16724);
(statearr_16797[(17)] = inst_16723);
return statearr_16797;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_16769__$1,(10),inst_16722);
} else
{if((state_val_16770 === (5)))
{var inst_16713 = (state_16769[(7)]);var inst_16716 = cljs.core.seq_QMARK_.call(null,inst_16713);var state_16769__$1 = state_16769;if(inst_16716)
{var statearr_16798_16838 = state_16769__$1;(statearr_16798_16838[(1)] = (7));
} else
{var statearr_16799_16839 = state_16769__$1;(statearr_16799_16839[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (14)))
{var inst_16729 = (state_16769[(15)]);var inst_16736 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16729);var state_16769__$1 = state_16769;var statearr_16800_16840 = state_16769__$1;(statearr_16800_16840[(2)] = inst_16736);
(statearr_16800_16840[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (26)))
{var inst_16759 = (state_16769[(2)]);var state_16769__$1 = state_16769;var statearr_16801_16841 = state_16769__$1;(statearr_16801_16841[(2)] = inst_16759);
(statearr_16801_16841[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (16)))
{var inst_16739 = (state_16769[(2)]);var inst_16740 = calc_state.call(null);var inst_16713 = inst_16740;var state_16769__$1 = (function (){var statearr_16802 = state_16769;(statearr_16802[(18)] = inst_16739);
(statearr_16802[(7)] = inst_16713);
return statearr_16802;
})();var statearr_16803_16842 = state_16769__$1;(statearr_16803_16842[(2)] = null);
(statearr_16803_16842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (10)))
{var inst_16729 = (state_16769[(15)]);var inst_16728 = (state_16769[(8)]);var inst_16727 = (state_16769[(2)]);var inst_16728__$1 = cljs.core.nth.call(null,inst_16727,(0),null);var inst_16729__$1 = cljs.core.nth.call(null,inst_16727,(1),null);var inst_16730 = (inst_16728__$1 == null);var inst_16731 = cljs.core._EQ_.call(null,inst_16729__$1,change);var inst_16732 = (inst_16730) || (inst_16731);var state_16769__$1 = (function (){var statearr_16804 = state_16769;(statearr_16804[(15)] = inst_16729__$1);
(statearr_16804[(8)] = inst_16728__$1);
return statearr_16804;
})();if(cljs.core.truth_(inst_16732))
{var statearr_16805_16843 = state_16769__$1;(statearr_16805_16843[(1)] = (11));
} else
{var statearr_16806_16844 = state_16769__$1;(statearr_16806_16844[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (18)))
{var inst_16729 = (state_16769[(15)]);var inst_16724 = (state_16769[(16)]);var inst_16723 = (state_16769[(17)]);var inst_16746 = cljs.core.empty_QMARK_.call(null,inst_16724);var inst_16747 = inst_16723.call(null,inst_16729);var inst_16748 = cljs.core.not.call(null,inst_16747);var inst_16749 = (inst_16746) && (inst_16748);var state_16769__$1 = state_16769;var statearr_16807_16845 = state_16769__$1;(statearr_16807_16845[(2)] = inst_16749);
(statearr_16807_16845[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16770 === (8)))
{var inst_16713 = (state_16769[(7)]);var state_16769__$1 = state_16769;var statearr_16808_16846 = state_16769__$1;(statearr_16808_16846[(2)] = inst_16713);
(statearr_16808_16846[(1)] = (9));
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
});})(c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5798__auto__,c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_16812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16812[(0)] = state_machine__5799__auto__);
(statearr_16812[(1)] = (1));
return statearr_16812;
});
var state_machine__5799__auto____1 = (function (state_16769){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_16769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e16813){if((e16813 instanceof Object))
{var ex__5802__auto__ = e16813;var statearr_16814_16847 = state_16769;(statearr_16814_16847[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16848 = state_16769;
state_16769 = G__16848;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_16769){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_16769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5815__auto__ = (function (){var statearr_16815 = f__5814__auto__.call(null);(statearr_16815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___16816);
return statearr_16815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___16816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16850 = {};return obj16850;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3619__auto__ = p;if(and__3619__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3619__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4267__auto__ = (((p == null))?null:p);return (function (){var or__3631__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3619__auto__ = p;if(and__3619__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3619__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4267__auto__ = (((p == null))?null:p);return (function (){var or__3631__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3619__auto__ = p;if(and__3619__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3619__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4267__auto__ = (((p == null))?null:p);return (function (){var or__3631__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3619__auto__ = p;if(and__3619__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3619__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4267__auto__ = (((p == null))?null:p);return (function (){var or__3631__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
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
return (function (topic){var or__3631__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3631__auto__,mults){
return (function (p1__16851_SHARP_){if(cljs.core.truth_(p1__16851_SHARP_.call(null,topic)))
{return p1__16851_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16851_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3631__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16974 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16975){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16975 = meta16975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16974.cljs$lang$type = true;
cljs.core.async.t16974.cljs$lang$ctorStr = "cljs.core.async/t16974";
cljs.core.async.t16974.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t16974");
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16976){var self__ = this;
var _16976__$1 = this;return self__.meta16975;
});})(mults,ensure_mult))
;
cljs.core.async.t16974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16976,meta16975__$1){var self__ = this;
var _16976__$1 = this;return (new cljs.core.async.t16974(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16975__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16974 = ((function (mults,ensure_mult){
return (function __GT_t16974(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16975){return (new cljs.core.async.t16974(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16975));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16974(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5813__auto___17096 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17096,mults,ensure_mult,p){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17096,mults,ensure_mult,p){
return (function (state_17048){var state_val_17049 = (state_17048[(1)]);if((state_val_17049 === (7)))
{var inst_17044 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17050_17097 = state_17048__$1;(statearr_17050_17097[(2)] = inst_17044);
(statearr_17050_17097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (20)))
{var state_17048__$1 = state_17048;var statearr_17051_17098 = state_17048__$1;(statearr_17051_17098[(2)] = null);
(statearr_17051_17098[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (1)))
{var state_17048__$1 = state_17048;var statearr_17052_17099 = state_17048__$1;(statearr_17052_17099[(2)] = null);
(statearr_17052_17099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (24)))
{var inst_17027 = (state_17048[(7)]);var inst_17036 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17027);var state_17048__$1 = state_17048;var statearr_17053_17100 = state_17048__$1;(statearr_17053_17100[(2)] = inst_17036);
(statearr_17053_17100[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (4)))
{var inst_16979 = (state_17048[(8)]);var inst_16979__$1 = (state_17048[(2)]);var inst_16980 = (inst_16979__$1 == null);var state_17048__$1 = (function (){var statearr_17054 = state_17048;(statearr_17054[(8)] = inst_16979__$1);
return statearr_17054;
})();if(cljs.core.truth_(inst_16980))
{var statearr_17055_17101 = state_17048__$1;(statearr_17055_17101[(1)] = (5));
} else
{var statearr_17056_17102 = state_17048__$1;(statearr_17056_17102[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (15)))
{var inst_17021 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17057_17103 = state_17048__$1;(statearr_17057_17103[(2)] = inst_17021);
(statearr_17057_17103[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (21)))
{var inst_17041 = (state_17048[(2)]);var state_17048__$1 = (function (){var statearr_17058 = state_17048;(statearr_17058[(9)] = inst_17041);
return statearr_17058;
})();var statearr_17059_17104 = state_17048__$1;(statearr_17059_17104[(2)] = null);
(statearr_17059_17104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (13)))
{var inst_17003 = (state_17048[(10)]);var inst_17005 = cljs.core.chunked_seq_QMARK_.call(null,inst_17003);var state_17048__$1 = state_17048;if(inst_17005)
{var statearr_17060_17105 = state_17048__$1;(statearr_17060_17105[(1)] = (16));
} else
{var statearr_17061_17106 = state_17048__$1;(statearr_17061_17106[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (22)))
{var inst_17033 = (state_17048[(2)]);var state_17048__$1 = state_17048;if(cljs.core.truth_(inst_17033))
{var statearr_17062_17107 = state_17048__$1;(statearr_17062_17107[(1)] = (23));
} else
{var statearr_17063_17108 = state_17048__$1;(statearr_17063_17108[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (6)))
{var inst_17027 = (state_17048[(7)]);var inst_16979 = (state_17048[(8)]);var inst_17029 = (state_17048[(11)]);var inst_17027__$1 = topic_fn.call(null,inst_16979);var inst_17028 = cljs.core.deref.call(null,mults);var inst_17029__$1 = cljs.core.get.call(null,inst_17028,inst_17027__$1);var state_17048__$1 = (function (){var statearr_17064 = state_17048;(statearr_17064[(7)] = inst_17027__$1);
(statearr_17064[(11)] = inst_17029__$1);
return statearr_17064;
})();if(cljs.core.truth_(inst_17029__$1))
{var statearr_17065_17109 = state_17048__$1;(statearr_17065_17109[(1)] = (19));
} else
{var statearr_17066_17110 = state_17048__$1;(statearr_17066_17110[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (25)))
{var inst_17038 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17067_17111 = state_17048__$1;(statearr_17067_17111[(2)] = inst_17038);
(statearr_17067_17111[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (17)))
{var inst_17003 = (state_17048[(10)]);var inst_17012 = cljs.core.first.call(null,inst_17003);var inst_17013 = cljs.core.async.muxch_STAR_.call(null,inst_17012);var inst_17014 = cljs.core.async.close_BANG_.call(null,inst_17013);var inst_17015 = cljs.core.next.call(null,inst_17003);var inst_16989 = inst_17015;var inst_16990 = null;var inst_16991 = (0);var inst_16992 = (0);var state_17048__$1 = (function (){var statearr_17068 = state_17048;(statearr_17068[(12)] = inst_16989);
(statearr_17068[(13)] = inst_17014);
(statearr_17068[(14)] = inst_16992);
(statearr_17068[(15)] = inst_16990);
(statearr_17068[(16)] = inst_16991);
return statearr_17068;
})();var statearr_17069_17112 = state_17048__$1;(statearr_17069_17112[(2)] = null);
(statearr_17069_17112[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (3)))
{var inst_17046 = (state_17048[(2)]);var state_17048__$1 = state_17048;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17048__$1,inst_17046);
} else
{if((state_val_17049 === (12)))
{var inst_17023 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17070_17113 = state_17048__$1;(statearr_17070_17113[(2)] = inst_17023);
(statearr_17070_17113[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (2)))
{var state_17048__$1 = state_17048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17048__$1,(4),ch);
} else
{if((state_val_17049 === (23)))
{var state_17048__$1 = state_17048;var statearr_17071_17114 = state_17048__$1;(statearr_17071_17114[(2)] = null);
(statearr_17071_17114[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (19)))
{var inst_16979 = (state_17048[(8)]);var inst_17029 = (state_17048[(11)]);var inst_17031 = cljs.core.async.muxch_STAR_.call(null,inst_17029);var state_17048__$1 = state_17048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17048__$1,(22),inst_17031,inst_16979);
} else
{if((state_val_17049 === (11)))
{var inst_16989 = (state_17048[(12)]);var inst_17003 = (state_17048[(10)]);var inst_17003__$1 = cljs.core.seq.call(null,inst_16989);var state_17048__$1 = (function (){var statearr_17072 = state_17048;(statearr_17072[(10)] = inst_17003__$1);
return statearr_17072;
})();if(inst_17003__$1)
{var statearr_17073_17115 = state_17048__$1;(statearr_17073_17115[(1)] = (13));
} else
{var statearr_17074_17116 = state_17048__$1;(statearr_17074_17116[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (9)))
{var inst_17025 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17075_17117 = state_17048__$1;(statearr_17075_17117[(2)] = inst_17025);
(statearr_17075_17117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (5)))
{var inst_16986 = cljs.core.deref.call(null,mults);var inst_16987 = cljs.core.vals.call(null,inst_16986);var inst_16988 = cljs.core.seq.call(null,inst_16987);var inst_16989 = inst_16988;var inst_16990 = null;var inst_16991 = (0);var inst_16992 = (0);var state_17048__$1 = (function (){var statearr_17076 = state_17048;(statearr_17076[(12)] = inst_16989);
(statearr_17076[(14)] = inst_16992);
(statearr_17076[(15)] = inst_16990);
(statearr_17076[(16)] = inst_16991);
return statearr_17076;
})();var statearr_17077_17118 = state_17048__$1;(statearr_17077_17118[(2)] = null);
(statearr_17077_17118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (14)))
{var state_17048__$1 = state_17048;var statearr_17081_17119 = state_17048__$1;(statearr_17081_17119[(2)] = null);
(statearr_17081_17119[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (16)))
{var inst_17003 = (state_17048[(10)]);var inst_17007 = cljs.core.chunk_first.call(null,inst_17003);var inst_17008 = cljs.core.chunk_rest.call(null,inst_17003);var inst_17009 = cljs.core.count.call(null,inst_17007);var inst_16989 = inst_17008;var inst_16990 = inst_17007;var inst_16991 = inst_17009;var inst_16992 = (0);var state_17048__$1 = (function (){var statearr_17082 = state_17048;(statearr_17082[(12)] = inst_16989);
(statearr_17082[(14)] = inst_16992);
(statearr_17082[(15)] = inst_16990);
(statearr_17082[(16)] = inst_16991);
return statearr_17082;
})();var statearr_17083_17120 = state_17048__$1;(statearr_17083_17120[(2)] = null);
(statearr_17083_17120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (10)))
{var inst_16989 = (state_17048[(12)]);var inst_16992 = (state_17048[(14)]);var inst_16990 = (state_17048[(15)]);var inst_16991 = (state_17048[(16)]);var inst_16997 = cljs.core._nth.call(null,inst_16990,inst_16992);var inst_16998 = cljs.core.async.muxch_STAR_.call(null,inst_16997);var inst_16999 = cljs.core.async.close_BANG_.call(null,inst_16998);var inst_17000 = (inst_16992 + (1));var tmp17078 = inst_16989;var tmp17079 = inst_16990;var tmp17080 = inst_16991;var inst_16989__$1 = tmp17078;var inst_16990__$1 = tmp17079;var inst_16991__$1 = tmp17080;var inst_16992__$1 = inst_17000;var state_17048__$1 = (function (){var statearr_17084 = state_17048;(statearr_17084[(12)] = inst_16989__$1);
(statearr_17084[(17)] = inst_16999);
(statearr_17084[(14)] = inst_16992__$1);
(statearr_17084[(15)] = inst_16990__$1);
(statearr_17084[(16)] = inst_16991__$1);
return statearr_17084;
})();var statearr_17085_17121 = state_17048__$1;(statearr_17085_17121[(2)] = null);
(statearr_17085_17121[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (18)))
{var inst_17018 = (state_17048[(2)]);var state_17048__$1 = state_17048;var statearr_17086_17122 = state_17048__$1;(statearr_17086_17122[(2)] = inst_17018);
(statearr_17086_17122[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17049 === (8)))
{var inst_16992 = (state_17048[(14)]);var inst_16991 = (state_17048[(16)]);var inst_16994 = (inst_16992 < inst_16991);var inst_16995 = inst_16994;var state_17048__$1 = state_17048;if(cljs.core.truth_(inst_16995))
{var statearr_17087_17123 = state_17048__$1;(statearr_17087_17123[(1)] = (10));
} else
{var statearr_17088_17124 = state_17048__$1;(statearr_17088_17124[(1)] = (11));
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
});})(c__5813__auto___17096,mults,ensure_mult,p))
;return ((function (switch__5798__auto__,c__5813__auto___17096,mults,ensure_mult,p){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17092[(0)] = state_machine__5799__auto__);
(statearr_17092[(1)] = (1));
return statearr_17092;
});
var state_machine__5799__auto____1 = (function (state_17048){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17093){if((e17093 instanceof Object))
{var ex__5802__auto__ = e17093;var statearr_17094_17125 = state_17048;(statearr_17094_17125[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17048);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17093;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17126 = state_17048;
state_17048 = G__17126;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17048){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17096,mults,ensure_mult,p))
})();var state__5815__auto__ = (function (){var statearr_17095 = f__5814__auto__.call(null);(statearr_17095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17096);
return statearr_17095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17096,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5813__auto___17263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17233){var state_val_17234 = (state_17233[(1)]);if((state_val_17234 === (7)))
{var state_17233__$1 = state_17233;var statearr_17235_17264 = state_17233__$1;(statearr_17235_17264[(2)] = null);
(statearr_17235_17264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (1)))
{var state_17233__$1 = state_17233;var statearr_17236_17265 = state_17233__$1;(statearr_17236_17265[(2)] = null);
(statearr_17236_17265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (4)))
{var inst_17197 = (state_17233[(7)]);var inst_17199 = (inst_17197 < cnt);var state_17233__$1 = state_17233;if(cljs.core.truth_(inst_17199))
{var statearr_17237_17266 = state_17233__$1;(statearr_17237_17266[(1)] = (6));
} else
{var statearr_17238_17267 = state_17233__$1;(statearr_17238_17267[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (15)))
{var inst_17229 = (state_17233[(2)]);var state_17233__$1 = state_17233;var statearr_17239_17268 = state_17233__$1;(statearr_17239_17268[(2)] = inst_17229);
(statearr_17239_17268[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (13)))
{var inst_17222 = cljs.core.async.close_BANG_.call(null,out);var state_17233__$1 = state_17233;var statearr_17240_17269 = state_17233__$1;(statearr_17240_17269[(2)] = inst_17222);
(statearr_17240_17269[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (6)))
{var state_17233__$1 = state_17233;var statearr_17241_17270 = state_17233__$1;(statearr_17241_17270[(2)] = null);
(statearr_17241_17270[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (3)))
{var inst_17231 = (state_17233[(2)]);var state_17233__$1 = state_17233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17233__$1,inst_17231);
} else
{if((state_val_17234 === (12)))
{var inst_17219 = (state_17233[(8)]);var inst_17219__$1 = (state_17233[(2)]);var inst_17220 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17219__$1);var state_17233__$1 = (function (){var statearr_17242 = state_17233;(statearr_17242[(8)] = inst_17219__$1);
return statearr_17242;
})();if(cljs.core.truth_(inst_17220))
{var statearr_17243_17271 = state_17233__$1;(statearr_17243_17271[(1)] = (13));
} else
{var statearr_17244_17272 = state_17233__$1;(statearr_17244_17272[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (2)))
{var inst_17196 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17197 = (0);var state_17233__$1 = (function (){var statearr_17245 = state_17233;(statearr_17245[(7)] = inst_17197);
(statearr_17245[(9)] = inst_17196);
return statearr_17245;
})();var statearr_17246_17273 = state_17233__$1;(statearr_17246_17273[(2)] = null);
(statearr_17246_17273[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (11)))
{var inst_17197 = (state_17233[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17233,(10),Object,null,(9));var inst_17206 = chs__$1.call(null,inst_17197);var inst_17207 = done.call(null,inst_17197);var inst_17208 = cljs.core.async.take_BANG_.call(null,inst_17206,inst_17207);var state_17233__$1 = state_17233;var statearr_17247_17274 = state_17233__$1;(statearr_17247_17274[(2)] = inst_17208);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17233__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (9)))
{var inst_17197 = (state_17233[(7)]);var inst_17210 = (state_17233[(2)]);var inst_17211 = (inst_17197 + (1));var inst_17197__$1 = inst_17211;var state_17233__$1 = (function (){var statearr_17248 = state_17233;(statearr_17248[(7)] = inst_17197__$1);
(statearr_17248[(10)] = inst_17210);
return statearr_17248;
})();var statearr_17249_17275 = state_17233__$1;(statearr_17249_17275[(2)] = null);
(statearr_17249_17275[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (5)))
{var inst_17217 = (state_17233[(2)]);var state_17233__$1 = (function (){var statearr_17250 = state_17233;(statearr_17250[(11)] = inst_17217);
return statearr_17250;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17233__$1,(12),dchan);
} else
{if((state_val_17234 === (14)))
{var inst_17219 = (state_17233[(8)]);var inst_17224 = cljs.core.apply.call(null,f,inst_17219);var state_17233__$1 = state_17233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17233__$1,(16),out,inst_17224);
} else
{if((state_val_17234 === (16)))
{var inst_17226 = (state_17233[(2)]);var state_17233__$1 = (function (){var statearr_17251 = state_17233;(statearr_17251[(12)] = inst_17226);
return statearr_17251;
})();var statearr_17252_17276 = state_17233__$1;(statearr_17252_17276[(2)] = null);
(statearr_17252_17276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (10)))
{var inst_17201 = (state_17233[(2)]);var inst_17202 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17233__$1 = (function (){var statearr_17253 = state_17233;(statearr_17253[(13)] = inst_17201);
return statearr_17253;
})();var statearr_17254_17277 = state_17233__$1;(statearr_17254_17277[(2)] = inst_17202);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17233__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17234 === (8)))
{var inst_17215 = (state_17233[(2)]);var state_17233__$1 = state_17233;var statearr_17255_17278 = state_17233__$1;(statearr_17255_17278[(2)] = inst_17215);
(statearr_17255_17278[(1)] = (5));
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
});})(c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5798__auto__,c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17259[(0)] = state_machine__5799__auto__);
(statearr_17259[(1)] = (1));
return statearr_17259;
});
var state_machine__5799__auto____1 = (function (state_17233){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17233);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17260){if((e17260 instanceof Object))
{var ex__5802__auto__ = e17260;var statearr_17261_17279 = state_17233;(statearr_17261_17279[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17260;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17280 = state_17233;
state_17233 = G__17280;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17233){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5815__auto__ = (function (){var statearr_17262 = f__5814__auto__.call(null);(statearr_17262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17263);
return statearr_17262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17263,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___17388 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17388,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17388,out){
return (function (state_17364){var state_val_17365 = (state_17364[(1)]);if((state_val_17365 === (7)))
{var inst_17343 = (state_17364[(7)]);var inst_17344 = (state_17364[(8)]);var inst_17343__$1 = (state_17364[(2)]);var inst_17344__$1 = cljs.core.nth.call(null,inst_17343__$1,(0),null);var inst_17345 = cljs.core.nth.call(null,inst_17343__$1,(1),null);var inst_17346 = (inst_17344__$1 == null);var state_17364__$1 = (function (){var statearr_17366 = state_17364;(statearr_17366[(9)] = inst_17345);
(statearr_17366[(7)] = inst_17343__$1);
(statearr_17366[(8)] = inst_17344__$1);
return statearr_17366;
})();if(cljs.core.truth_(inst_17346))
{var statearr_17367_17389 = state_17364__$1;(statearr_17367_17389[(1)] = (8));
} else
{var statearr_17368_17390 = state_17364__$1;(statearr_17368_17390[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (1)))
{var inst_17335 = cljs.core.vec.call(null,chs);var inst_17336 = inst_17335;var state_17364__$1 = (function (){var statearr_17369 = state_17364;(statearr_17369[(10)] = inst_17336);
return statearr_17369;
})();var statearr_17370_17391 = state_17364__$1;(statearr_17370_17391[(2)] = null);
(statearr_17370_17391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (4)))
{var inst_17336 = (state_17364[(10)]);var state_17364__$1 = state_17364;return cljs.core.async.ioc_alts_BANG_.call(null,state_17364__$1,(7),inst_17336);
} else
{if((state_val_17365 === (6)))
{var inst_17360 = (state_17364[(2)]);var state_17364__$1 = state_17364;var statearr_17371_17392 = state_17364__$1;(statearr_17371_17392[(2)] = inst_17360);
(statearr_17371_17392[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (3)))
{var inst_17362 = (state_17364[(2)]);var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17364__$1,inst_17362);
} else
{if((state_val_17365 === (2)))
{var inst_17336 = (state_17364[(10)]);var inst_17338 = cljs.core.count.call(null,inst_17336);var inst_17339 = (inst_17338 > (0));var state_17364__$1 = state_17364;if(cljs.core.truth_(inst_17339))
{var statearr_17373_17393 = state_17364__$1;(statearr_17373_17393[(1)] = (4));
} else
{var statearr_17374_17394 = state_17364__$1;(statearr_17374_17394[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (11)))
{var inst_17336 = (state_17364[(10)]);var inst_17353 = (state_17364[(2)]);var tmp17372 = inst_17336;var inst_17336__$1 = tmp17372;var state_17364__$1 = (function (){var statearr_17375 = state_17364;(statearr_17375[(11)] = inst_17353);
(statearr_17375[(10)] = inst_17336__$1);
return statearr_17375;
})();var statearr_17376_17395 = state_17364__$1;(statearr_17376_17395[(2)] = null);
(statearr_17376_17395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (9)))
{var inst_17344 = (state_17364[(8)]);var state_17364__$1 = state_17364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17364__$1,(11),out,inst_17344);
} else
{if((state_val_17365 === (5)))
{var inst_17358 = cljs.core.async.close_BANG_.call(null,out);var state_17364__$1 = state_17364;var statearr_17377_17396 = state_17364__$1;(statearr_17377_17396[(2)] = inst_17358);
(statearr_17377_17396[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (10)))
{var inst_17356 = (state_17364[(2)]);var state_17364__$1 = state_17364;var statearr_17378_17397 = state_17364__$1;(statearr_17378_17397[(2)] = inst_17356);
(statearr_17378_17397[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17365 === (8)))
{var inst_17336 = (state_17364[(10)]);var inst_17345 = (state_17364[(9)]);var inst_17343 = (state_17364[(7)]);var inst_17344 = (state_17364[(8)]);var inst_17348 = (function (){var c = inst_17345;var v = inst_17344;var vec__17341 = inst_17343;var cs = inst_17336;return ((function (c,v,vec__17341,cs,inst_17336,inst_17345,inst_17343,inst_17344,state_val_17365,c__5813__auto___17388,out){
return (function (p1__17281_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17281_SHARP_);
});
;})(c,v,vec__17341,cs,inst_17336,inst_17345,inst_17343,inst_17344,state_val_17365,c__5813__auto___17388,out))
})();var inst_17349 = cljs.core.filterv.call(null,inst_17348,inst_17336);var inst_17336__$1 = inst_17349;var state_17364__$1 = (function (){var statearr_17379 = state_17364;(statearr_17379[(10)] = inst_17336__$1);
return statearr_17379;
})();var statearr_17380_17398 = state_17364__$1;(statearr_17380_17398[(2)] = null);
(statearr_17380_17398[(1)] = (2));
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
});})(c__5813__auto___17388,out))
;return ((function (switch__5798__auto__,c__5813__auto___17388,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17384 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17384[(0)] = state_machine__5799__auto__);
(statearr_17384[(1)] = (1));
return statearr_17384;
});
var state_machine__5799__auto____1 = (function (state_17364){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17385){if((e17385 instanceof Object))
{var ex__5802__auto__ = e17385;var statearr_17386_17399 = state_17364;(statearr_17386_17399[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17385;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17400 = state_17364;
state_17364 = G__17400;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17364){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17388,out))
})();var state__5815__auto__ = (function (){var statearr_17387 = f__5814__auto__.call(null);(statearr_17387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17388);
return statearr_17387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17388,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___17493 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17493,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17493,out){
return (function (state_17470){var state_val_17471 = (state_17470[(1)]);if((state_val_17471 === (7)))
{var inst_17452 = (state_17470[(7)]);var inst_17452__$1 = (state_17470[(2)]);var inst_17453 = (inst_17452__$1 == null);var inst_17454 = cljs.core.not.call(null,inst_17453);var state_17470__$1 = (function (){var statearr_17472 = state_17470;(statearr_17472[(7)] = inst_17452__$1);
return statearr_17472;
})();if(inst_17454)
{var statearr_17473_17494 = state_17470__$1;(statearr_17473_17494[(1)] = (8));
} else
{var statearr_17474_17495 = state_17470__$1;(statearr_17474_17495[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (1)))
{var inst_17447 = (0);var state_17470__$1 = (function (){var statearr_17475 = state_17470;(statearr_17475[(8)] = inst_17447);
return statearr_17475;
})();var statearr_17476_17496 = state_17470__$1;(statearr_17476_17496[(2)] = null);
(statearr_17476_17496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (4)))
{var state_17470__$1 = state_17470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17470__$1,(7),ch);
} else
{if((state_val_17471 === (6)))
{var inst_17465 = (state_17470[(2)]);var state_17470__$1 = state_17470;var statearr_17477_17497 = state_17470__$1;(statearr_17477_17497[(2)] = inst_17465);
(statearr_17477_17497[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (3)))
{var inst_17467 = (state_17470[(2)]);var inst_17468 = cljs.core.async.close_BANG_.call(null,out);var state_17470__$1 = (function (){var statearr_17478 = state_17470;(statearr_17478[(9)] = inst_17467);
return statearr_17478;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17470__$1,inst_17468);
} else
{if((state_val_17471 === (2)))
{var inst_17447 = (state_17470[(8)]);var inst_17449 = (inst_17447 < n);var state_17470__$1 = state_17470;if(cljs.core.truth_(inst_17449))
{var statearr_17479_17498 = state_17470__$1;(statearr_17479_17498[(1)] = (4));
} else
{var statearr_17480_17499 = state_17470__$1;(statearr_17480_17499[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (11)))
{var inst_17447 = (state_17470[(8)]);var inst_17457 = (state_17470[(2)]);var inst_17458 = (inst_17447 + (1));var inst_17447__$1 = inst_17458;var state_17470__$1 = (function (){var statearr_17481 = state_17470;(statearr_17481[(8)] = inst_17447__$1);
(statearr_17481[(10)] = inst_17457);
return statearr_17481;
})();var statearr_17482_17500 = state_17470__$1;(statearr_17482_17500[(2)] = null);
(statearr_17482_17500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (9)))
{var state_17470__$1 = state_17470;var statearr_17483_17501 = state_17470__$1;(statearr_17483_17501[(2)] = null);
(statearr_17483_17501[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (5)))
{var state_17470__$1 = state_17470;var statearr_17484_17502 = state_17470__$1;(statearr_17484_17502[(2)] = null);
(statearr_17484_17502[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (10)))
{var inst_17462 = (state_17470[(2)]);var state_17470__$1 = state_17470;var statearr_17485_17503 = state_17470__$1;(statearr_17485_17503[(2)] = inst_17462);
(statearr_17485_17503[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17471 === (8)))
{var inst_17452 = (state_17470[(7)]);var state_17470__$1 = state_17470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17470__$1,(11),out,inst_17452);
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
});})(c__5813__auto___17493,out))
;return ((function (switch__5798__auto__,c__5813__auto___17493,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17489 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17489[(0)] = state_machine__5799__auto__);
(statearr_17489[(1)] = (1));
return statearr_17489;
});
var state_machine__5799__auto____1 = (function (state_17470){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17470);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17490){if((e17490 instanceof Object))
{var ex__5802__auto__ = e17490;var statearr_17491_17504 = state_17470;(statearr_17491_17504[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17490;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17505 = state_17470;
state_17470 = G__17505;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17470){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17493,out))
})();var state__5815__auto__ = (function (){var statearr_17492 = f__5814__auto__.call(null);(statearr_17492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17493);
return statearr_17492;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17493,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17513 = (function (ch,f,map_LT_,meta17514){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17514 = meta17514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17513.cljs$lang$type = true;
cljs.core.async.t17513.cljs$lang$ctorStr = "cljs.core.async/t17513";
cljs.core.async.t17513.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t17513");
});
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17516 = (function (fn1,_,meta17514,ch,f,map_LT_,meta17517){
this.fn1 = fn1;
this._ = _;
this.meta17514 = meta17514;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17517 = meta17517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17516.cljs$lang$type = true;
cljs.core.async.t17516.cljs$lang$ctorStr = "cljs.core.async/t17516";
cljs.core.async.t17516.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t17516");
});})(___$1))
;
cljs.core.async.t17516.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17506_SHARP_){return f1.call(null,(((p1__17506_SHARP_ == null))?null:self__.f.call(null,p1__17506_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17518){var self__ = this;
var _17518__$1 = this;return self__.meta17517;
});})(___$1))
;
cljs.core.async.t17516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17518,meta17517__$1){var self__ = this;
var _17518__$1 = this;return (new cljs.core.async.t17516(self__.fn1,self__._,self__.meta17514,self__.ch,self__.f,self__.map_LT_,meta17517__$1));
});})(___$1))
;
cljs.core.async.__GT_t17516 = ((function (___$1){
return (function __GT_t17516(fn1__$1,___$2,meta17514__$1,ch__$2,f__$2,map_LT___$2,meta17517){return (new cljs.core.async.t17516(fn1__$1,___$2,meta17514__$1,ch__$2,f__$2,map_LT___$2,meta17517));
});})(___$1))
;
}
return (new cljs.core.async.t17516(fn1,___$1,self__.meta17514,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3619__auto__ = ret;if(cljs.core.truth_(and__3619__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3619__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17513.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17515){var self__ = this;
var _17515__$1 = this;return self__.meta17514;
});
cljs.core.async.t17513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17515,meta17514__$1){var self__ = this;
var _17515__$1 = this;return (new cljs.core.async.t17513(self__.ch,self__.f,self__.map_LT_,meta17514__$1));
});
cljs.core.async.__GT_t17513 = (function __GT_t17513(ch__$1,f__$1,map_LT___$1,meta17514){return (new cljs.core.async.t17513(ch__$1,f__$1,map_LT___$1,meta17514));
});
}
return (new cljs.core.async.t17513(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17522 = (function (ch,f,map_GT_,meta17523){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17523 = meta17523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17522.cljs$lang$type = true;
cljs.core.async.t17522.cljs$lang$ctorStr = "cljs.core.async/t17522";
cljs.core.async.t17522.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t17522");
});
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17524){var self__ = this;
var _17524__$1 = this;return self__.meta17523;
});
cljs.core.async.t17522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17524,meta17523__$1){var self__ = this;
var _17524__$1 = this;return (new cljs.core.async.t17522(self__.ch,self__.f,self__.map_GT_,meta17523__$1));
});
cljs.core.async.__GT_t17522 = (function __GT_t17522(ch__$1,f__$1,map_GT___$1,meta17523){return (new cljs.core.async.t17522(ch__$1,f__$1,map_GT___$1,meta17523));
});
}
return (new cljs.core.async.t17522(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17528 = (function (ch,p,filter_GT_,meta17529){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17529 = meta17529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17528.cljs$lang$type = true;
cljs.core.async.t17528.cljs$lang$ctorStr = "cljs.core.async/t17528";
cljs.core.async.t17528.cljs$lang$ctorPrWriter = (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"cljs.core.async/t17528");
});
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17528.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17530){var self__ = this;
var _17530__$1 = this;return self__.meta17529;
});
cljs.core.async.t17528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17530,meta17529__$1){var self__ = this;
var _17530__$1 = this;return (new cljs.core.async.t17528(self__.ch,self__.p,self__.filter_GT_,meta17529__$1));
});
cljs.core.async.__GT_t17528 = (function __GT_t17528(ch__$1,p__$1,filter_GT___$1,meta17529){return (new cljs.core.async.t17528(ch__$1,p__$1,filter_GT___$1,meta17529));
});
}
return (new cljs.core.async.t17528(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___17613 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17613,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17613,out){
return (function (state_17592){var state_val_17593 = (state_17592[(1)]);if((state_val_17593 === (7)))
{var inst_17588 = (state_17592[(2)]);var state_17592__$1 = state_17592;var statearr_17594_17614 = state_17592__$1;(statearr_17594_17614[(2)] = inst_17588);
(statearr_17594_17614[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (1)))
{var state_17592__$1 = state_17592;var statearr_17595_17615 = state_17592__$1;(statearr_17595_17615[(2)] = null);
(statearr_17595_17615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (4)))
{var inst_17574 = (state_17592[(7)]);var inst_17574__$1 = (state_17592[(2)]);var inst_17575 = (inst_17574__$1 == null);var state_17592__$1 = (function (){var statearr_17596 = state_17592;(statearr_17596[(7)] = inst_17574__$1);
return statearr_17596;
})();if(cljs.core.truth_(inst_17575))
{var statearr_17597_17616 = state_17592__$1;(statearr_17597_17616[(1)] = (5));
} else
{var statearr_17598_17617 = state_17592__$1;(statearr_17598_17617[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (6)))
{var inst_17574 = (state_17592[(7)]);var inst_17579 = p.call(null,inst_17574);var state_17592__$1 = state_17592;if(cljs.core.truth_(inst_17579))
{var statearr_17599_17618 = state_17592__$1;(statearr_17599_17618[(1)] = (8));
} else
{var statearr_17600_17619 = state_17592__$1;(statearr_17600_17619[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (3)))
{var inst_17590 = (state_17592[(2)]);var state_17592__$1 = state_17592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17592__$1,inst_17590);
} else
{if((state_val_17593 === (2)))
{var state_17592__$1 = state_17592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17592__$1,(4),ch);
} else
{if((state_val_17593 === (11)))
{var inst_17582 = (state_17592[(2)]);var state_17592__$1 = state_17592;var statearr_17601_17620 = state_17592__$1;(statearr_17601_17620[(2)] = inst_17582);
(statearr_17601_17620[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (9)))
{var state_17592__$1 = state_17592;var statearr_17602_17621 = state_17592__$1;(statearr_17602_17621[(2)] = null);
(statearr_17602_17621[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (5)))
{var inst_17577 = cljs.core.async.close_BANG_.call(null,out);var state_17592__$1 = state_17592;var statearr_17603_17622 = state_17592__$1;(statearr_17603_17622[(2)] = inst_17577);
(statearr_17603_17622[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (10)))
{var inst_17585 = (state_17592[(2)]);var state_17592__$1 = (function (){var statearr_17604 = state_17592;(statearr_17604[(8)] = inst_17585);
return statearr_17604;
})();var statearr_17605_17623 = state_17592__$1;(statearr_17605_17623[(2)] = null);
(statearr_17605_17623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17593 === (8)))
{var inst_17574 = (state_17592[(7)]);var state_17592__$1 = state_17592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17592__$1,(11),out,inst_17574);
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
});})(c__5813__auto___17613,out))
;return ((function (switch__5798__auto__,c__5813__auto___17613,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17609 = [null,null,null,null,null,null,null,null,null];(statearr_17609[(0)] = state_machine__5799__auto__);
(statearr_17609[(1)] = (1));
return statearr_17609;
});
var state_machine__5799__auto____1 = (function (state_17592){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17610){if((e17610 instanceof Object))
{var ex__5802__auto__ = e17610;var statearr_17611_17624 = state_17592;(statearr_17611_17624[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17610;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17625 = state_17592;
state_17592 = G__17625;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17592){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17613,out))
})();var state__5815__auto__ = (function (){var statearr_17612 = f__5814__auto__.call(null);(statearr_17612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17613);
return statearr_17612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17613,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5813__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto__){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto__){
return (function (state_17791){var state_val_17792 = (state_17791[(1)]);if((state_val_17792 === (7)))
{var inst_17787 = (state_17791[(2)]);var state_17791__$1 = state_17791;var statearr_17793_17834 = state_17791__$1;(statearr_17793_17834[(2)] = inst_17787);
(statearr_17793_17834[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (20)))
{var inst_17757 = (state_17791[(7)]);var inst_17768 = (state_17791[(2)]);var inst_17769 = cljs.core.next.call(null,inst_17757);var inst_17743 = inst_17769;var inst_17744 = null;var inst_17745 = (0);var inst_17746 = (0);var state_17791__$1 = (function (){var statearr_17794 = state_17791;(statearr_17794[(8)] = inst_17743);
(statearr_17794[(9)] = inst_17768);
(statearr_17794[(10)] = inst_17745);
(statearr_17794[(11)] = inst_17744);
(statearr_17794[(12)] = inst_17746);
return statearr_17794;
})();var statearr_17795_17835 = state_17791__$1;(statearr_17795_17835[(2)] = null);
(statearr_17795_17835[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (1)))
{var state_17791__$1 = state_17791;var statearr_17796_17836 = state_17791__$1;(statearr_17796_17836[(2)] = null);
(statearr_17796_17836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (4)))
{var inst_17732 = (state_17791[(13)]);var inst_17732__$1 = (state_17791[(2)]);var inst_17733 = (inst_17732__$1 == null);var state_17791__$1 = (function (){var statearr_17797 = state_17791;(statearr_17797[(13)] = inst_17732__$1);
return statearr_17797;
})();if(cljs.core.truth_(inst_17733))
{var statearr_17798_17837 = state_17791__$1;(statearr_17798_17837[(1)] = (5));
} else
{var statearr_17799_17838 = state_17791__$1;(statearr_17799_17838[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (15)))
{var state_17791__$1 = state_17791;var statearr_17803_17839 = state_17791__$1;(statearr_17803_17839[(2)] = null);
(statearr_17803_17839[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (21)))
{var state_17791__$1 = state_17791;var statearr_17804_17840 = state_17791__$1;(statearr_17804_17840[(2)] = null);
(statearr_17804_17840[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (13)))
{var inst_17743 = (state_17791[(8)]);var inst_17745 = (state_17791[(10)]);var inst_17744 = (state_17791[(11)]);var inst_17746 = (state_17791[(12)]);var inst_17753 = (state_17791[(2)]);var inst_17754 = (inst_17746 + (1));var tmp17800 = inst_17743;var tmp17801 = inst_17745;var tmp17802 = inst_17744;var inst_17743__$1 = tmp17800;var inst_17744__$1 = tmp17802;var inst_17745__$1 = tmp17801;var inst_17746__$1 = inst_17754;var state_17791__$1 = (function (){var statearr_17805 = state_17791;(statearr_17805[(8)] = inst_17743__$1);
(statearr_17805[(10)] = inst_17745__$1);
(statearr_17805[(11)] = inst_17744__$1);
(statearr_17805[(12)] = inst_17746__$1);
(statearr_17805[(14)] = inst_17753);
return statearr_17805;
})();var statearr_17806_17841 = state_17791__$1;(statearr_17806_17841[(2)] = null);
(statearr_17806_17841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (22)))
{var state_17791__$1 = state_17791;var statearr_17807_17842 = state_17791__$1;(statearr_17807_17842[(2)] = null);
(statearr_17807_17842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (6)))
{var inst_17732 = (state_17791[(13)]);var inst_17741 = f.call(null,inst_17732);var inst_17742 = cljs.core.seq.call(null,inst_17741);var inst_17743 = inst_17742;var inst_17744 = null;var inst_17745 = (0);var inst_17746 = (0);var state_17791__$1 = (function (){var statearr_17808 = state_17791;(statearr_17808[(8)] = inst_17743);
(statearr_17808[(10)] = inst_17745);
(statearr_17808[(11)] = inst_17744);
(statearr_17808[(12)] = inst_17746);
return statearr_17808;
})();var statearr_17809_17843 = state_17791__$1;(statearr_17809_17843[(2)] = null);
(statearr_17809_17843[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (17)))
{var inst_17757 = (state_17791[(7)]);var inst_17761 = cljs.core.chunk_first.call(null,inst_17757);var inst_17762 = cljs.core.chunk_rest.call(null,inst_17757);var inst_17763 = cljs.core.count.call(null,inst_17761);var inst_17743 = inst_17762;var inst_17744 = inst_17761;var inst_17745 = inst_17763;var inst_17746 = (0);var state_17791__$1 = (function (){var statearr_17810 = state_17791;(statearr_17810[(8)] = inst_17743);
(statearr_17810[(10)] = inst_17745);
(statearr_17810[(11)] = inst_17744);
(statearr_17810[(12)] = inst_17746);
return statearr_17810;
})();var statearr_17811_17844 = state_17791__$1;(statearr_17811_17844[(2)] = null);
(statearr_17811_17844[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (3)))
{var inst_17789 = (state_17791[(2)]);var state_17791__$1 = state_17791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17791__$1,inst_17789);
} else
{if((state_val_17792 === (12)))
{var inst_17777 = (state_17791[(2)]);var state_17791__$1 = state_17791;var statearr_17812_17845 = state_17791__$1;(statearr_17812_17845[(2)] = inst_17777);
(statearr_17812_17845[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (2)))
{var state_17791__$1 = state_17791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(4),in$);
} else
{if((state_val_17792 === (23)))
{var inst_17785 = (state_17791[(2)]);var state_17791__$1 = state_17791;var statearr_17813_17846 = state_17791__$1;(statearr_17813_17846[(2)] = inst_17785);
(statearr_17813_17846[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (19)))
{var inst_17772 = (state_17791[(2)]);var state_17791__$1 = state_17791;var statearr_17814_17847 = state_17791__$1;(statearr_17814_17847[(2)] = inst_17772);
(statearr_17814_17847[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (11)))
{var inst_17743 = (state_17791[(8)]);var inst_17757 = (state_17791[(7)]);var inst_17757__$1 = cljs.core.seq.call(null,inst_17743);var state_17791__$1 = (function (){var statearr_17815 = state_17791;(statearr_17815[(7)] = inst_17757__$1);
return statearr_17815;
})();if(inst_17757__$1)
{var statearr_17816_17848 = state_17791__$1;(statearr_17816_17848[(1)] = (14));
} else
{var statearr_17817_17849 = state_17791__$1;(statearr_17817_17849[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (9)))
{var inst_17779 = (state_17791[(2)]);var inst_17780 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17791__$1 = (function (){var statearr_17818 = state_17791;(statearr_17818[(15)] = inst_17779);
return statearr_17818;
})();if(cljs.core.truth_(inst_17780))
{var statearr_17819_17850 = state_17791__$1;(statearr_17819_17850[(1)] = (21));
} else
{var statearr_17820_17851 = state_17791__$1;(statearr_17820_17851[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (5)))
{var inst_17735 = cljs.core.async.close_BANG_.call(null,out);var state_17791__$1 = state_17791;var statearr_17821_17852 = state_17791__$1;(statearr_17821_17852[(2)] = inst_17735);
(statearr_17821_17852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (14)))
{var inst_17757 = (state_17791[(7)]);var inst_17759 = cljs.core.chunked_seq_QMARK_.call(null,inst_17757);var state_17791__$1 = state_17791;if(inst_17759)
{var statearr_17822_17853 = state_17791__$1;(statearr_17822_17853[(1)] = (17));
} else
{var statearr_17823_17854 = state_17791__$1;(statearr_17823_17854[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (16)))
{var inst_17775 = (state_17791[(2)]);var state_17791__$1 = state_17791;var statearr_17824_17855 = state_17791__$1;(statearr_17824_17855[(2)] = inst_17775);
(statearr_17824_17855[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17792 === (10)))
{var inst_17744 = (state_17791[(11)]);var inst_17746 = (state_17791[(12)]);var inst_17751 = cljs.core._nth.call(null,inst_17744,inst_17746);var state_17791__$1 = state_17791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17791__$1,(13),out,inst_17751);
} else
{if((state_val_17792 === (18)))
{var inst_17757 = (state_17791[(7)]);var inst_17766 = cljs.core.first.call(null,inst_17757);var state_17791__$1 = state_17791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17791__$1,(20),out,inst_17766);
} else
{if((state_val_17792 === (8)))
{var inst_17745 = (state_17791[(10)]);var inst_17746 = (state_17791[(12)]);var inst_17748 = (inst_17746 < inst_17745);var inst_17749 = inst_17748;var state_17791__$1 = state_17791;if(cljs.core.truth_(inst_17749))
{var statearr_17825_17856 = state_17791__$1;(statearr_17825_17856[(1)] = (10));
} else
{var statearr_17826_17857 = state_17791__$1;(statearr_17826_17857[(1)] = (11));
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
});})(c__5813__auto__))
;return ((function (switch__5798__auto__,c__5813__auto__){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17830[(0)] = state_machine__5799__auto__);
(statearr_17830[(1)] = (1));
return statearr_17830;
});
var state_machine__5799__auto____1 = (function (state_17791){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17831){if((e17831 instanceof Object))
{var ex__5802__auto__ = e17831;var statearr_17832_17858 = state_17791;(statearr_17832_17858[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17831;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17859 = state_17791;
state_17791 = G__17859;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17791){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto__))
})();var state__5815__auto__ = (function (){var statearr_17833 = f__5814__auto__.call(null);(statearr_17833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto__);
return statearr_17833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto__))
);
return c__5813__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___17956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___17956,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___17956,out){
return (function (state_17931){var state_val_17932 = (state_17931[(1)]);if((state_val_17932 === (7)))
{var inst_17926 = (state_17931[(2)]);var state_17931__$1 = state_17931;var statearr_17933_17957 = state_17931__$1;(statearr_17933_17957[(2)] = inst_17926);
(statearr_17933_17957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (1)))
{var inst_17908 = null;var state_17931__$1 = (function (){var statearr_17934 = state_17931;(statearr_17934[(7)] = inst_17908);
return statearr_17934;
})();var statearr_17935_17958 = state_17931__$1;(statearr_17935_17958[(2)] = null);
(statearr_17935_17958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (4)))
{var inst_17911 = (state_17931[(8)]);var inst_17911__$1 = (state_17931[(2)]);var inst_17912 = (inst_17911__$1 == null);var inst_17913 = cljs.core.not.call(null,inst_17912);var state_17931__$1 = (function (){var statearr_17936 = state_17931;(statearr_17936[(8)] = inst_17911__$1);
return statearr_17936;
})();if(inst_17913)
{var statearr_17937_17959 = state_17931__$1;(statearr_17937_17959[(1)] = (5));
} else
{var statearr_17938_17960 = state_17931__$1;(statearr_17938_17960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (6)))
{var state_17931__$1 = state_17931;var statearr_17939_17961 = state_17931__$1;(statearr_17939_17961[(2)] = null);
(statearr_17939_17961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (3)))
{var inst_17928 = (state_17931[(2)]);var inst_17929 = cljs.core.async.close_BANG_.call(null,out);var state_17931__$1 = (function (){var statearr_17940 = state_17931;(statearr_17940[(9)] = inst_17928);
return statearr_17940;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17931__$1,inst_17929);
} else
{if((state_val_17932 === (2)))
{var state_17931__$1 = state_17931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17931__$1,(4),ch);
} else
{if((state_val_17932 === (11)))
{var inst_17911 = (state_17931[(8)]);var inst_17920 = (state_17931[(2)]);var inst_17908 = inst_17911;var state_17931__$1 = (function (){var statearr_17941 = state_17931;(statearr_17941[(7)] = inst_17908);
(statearr_17941[(10)] = inst_17920);
return statearr_17941;
})();var statearr_17942_17962 = state_17931__$1;(statearr_17942_17962[(2)] = null);
(statearr_17942_17962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (9)))
{var inst_17911 = (state_17931[(8)]);var state_17931__$1 = state_17931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17931__$1,(11),out,inst_17911);
} else
{if((state_val_17932 === (5)))
{var inst_17911 = (state_17931[(8)]);var inst_17908 = (state_17931[(7)]);var inst_17915 = cljs.core._EQ_.call(null,inst_17911,inst_17908);var state_17931__$1 = state_17931;if(inst_17915)
{var statearr_17944_17963 = state_17931__$1;(statearr_17944_17963[(1)] = (8));
} else
{var statearr_17945_17964 = state_17931__$1;(statearr_17945_17964[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (10)))
{var inst_17923 = (state_17931[(2)]);var state_17931__$1 = state_17931;var statearr_17946_17965 = state_17931__$1;(statearr_17946_17965[(2)] = inst_17923);
(statearr_17946_17965[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17932 === (8)))
{var inst_17908 = (state_17931[(7)]);var tmp17943 = inst_17908;var inst_17908__$1 = tmp17943;var state_17931__$1 = (function (){var statearr_17947 = state_17931;(statearr_17947[(7)] = inst_17908__$1);
return statearr_17947;
})();var statearr_17948_17966 = state_17931__$1;(statearr_17948_17966[(2)] = null);
(statearr_17948_17966[(1)] = (2));
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
});})(c__5813__auto___17956,out))
;return ((function (switch__5798__auto__,c__5813__auto___17956,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_17952 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17952[(0)] = state_machine__5799__auto__);
(statearr_17952[(1)] = (1));
return statearr_17952;
});
var state_machine__5799__auto____1 = (function (state_17931){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_17931);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e17953){if((e17953 instanceof Object))
{var ex__5802__auto__ = e17953;var statearr_17954_17967 = state_17931;(statearr_17954_17967[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17968 = state_17931;
state_17931 = G__17968;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_17931){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_17931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___17956,out))
})();var state__5815__auto__ = (function (){var statearr_17955 = f__5814__auto__.call(null);(statearr_17955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___17956);
return statearr_17955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___17956,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___18103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___18103,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___18103,out){
return (function (state_18073){var state_val_18074 = (state_18073[(1)]);if((state_val_18074 === (7)))
{var inst_18069 = (state_18073[(2)]);var state_18073__$1 = state_18073;var statearr_18075_18104 = state_18073__$1;(statearr_18075_18104[(2)] = inst_18069);
(statearr_18075_18104[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (1)))
{var inst_18036 = (new Array(n));var inst_18037 = inst_18036;var inst_18038 = (0);var state_18073__$1 = (function (){var statearr_18076 = state_18073;(statearr_18076[(7)] = inst_18037);
(statearr_18076[(8)] = inst_18038);
return statearr_18076;
})();var statearr_18077_18105 = state_18073__$1;(statearr_18077_18105[(2)] = null);
(statearr_18077_18105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (4)))
{var inst_18041 = (state_18073[(9)]);var inst_18041__$1 = (state_18073[(2)]);var inst_18042 = (inst_18041__$1 == null);var inst_18043 = cljs.core.not.call(null,inst_18042);var state_18073__$1 = (function (){var statearr_18078 = state_18073;(statearr_18078[(9)] = inst_18041__$1);
return statearr_18078;
})();if(inst_18043)
{var statearr_18079_18106 = state_18073__$1;(statearr_18079_18106[(1)] = (5));
} else
{var statearr_18080_18107 = state_18073__$1;(statearr_18080_18107[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (15)))
{var inst_18063 = (state_18073[(2)]);var state_18073__$1 = state_18073;var statearr_18081_18108 = state_18073__$1;(statearr_18081_18108[(2)] = inst_18063);
(statearr_18081_18108[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (13)))
{var state_18073__$1 = state_18073;var statearr_18082_18109 = state_18073__$1;(statearr_18082_18109[(2)] = null);
(statearr_18082_18109[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (6)))
{var inst_18038 = (state_18073[(8)]);var inst_18059 = (inst_18038 > (0));var state_18073__$1 = state_18073;if(cljs.core.truth_(inst_18059))
{var statearr_18083_18110 = state_18073__$1;(statearr_18083_18110[(1)] = (12));
} else
{var statearr_18084_18111 = state_18073__$1;(statearr_18084_18111[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (3)))
{var inst_18071 = (state_18073[(2)]);var state_18073__$1 = state_18073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18073__$1,inst_18071);
} else
{if((state_val_18074 === (12)))
{var inst_18037 = (state_18073[(7)]);var inst_18061 = cljs.core.vec.call(null,inst_18037);var state_18073__$1 = state_18073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18073__$1,(15),out,inst_18061);
} else
{if((state_val_18074 === (2)))
{var state_18073__$1 = state_18073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18073__$1,(4),ch);
} else
{if((state_val_18074 === (11)))
{var inst_18053 = (state_18073[(2)]);var inst_18054 = (new Array(n));var inst_18037 = inst_18054;var inst_18038 = (0);var state_18073__$1 = (function (){var statearr_18085 = state_18073;(statearr_18085[(7)] = inst_18037);
(statearr_18085[(10)] = inst_18053);
(statearr_18085[(8)] = inst_18038);
return statearr_18085;
})();var statearr_18086_18112 = state_18073__$1;(statearr_18086_18112[(2)] = null);
(statearr_18086_18112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (9)))
{var inst_18037 = (state_18073[(7)]);var inst_18051 = cljs.core.vec.call(null,inst_18037);var state_18073__$1 = state_18073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18073__$1,(11),out,inst_18051);
} else
{if((state_val_18074 === (5)))
{var inst_18037 = (state_18073[(7)]);var inst_18046 = (state_18073[(11)]);var inst_18038 = (state_18073[(8)]);var inst_18041 = (state_18073[(9)]);var inst_18045 = (inst_18037[inst_18038] = inst_18041);var inst_18046__$1 = (inst_18038 + (1));var inst_18047 = (inst_18046__$1 < n);var state_18073__$1 = (function (){var statearr_18087 = state_18073;(statearr_18087[(12)] = inst_18045);
(statearr_18087[(11)] = inst_18046__$1);
return statearr_18087;
})();if(cljs.core.truth_(inst_18047))
{var statearr_18088_18113 = state_18073__$1;(statearr_18088_18113[(1)] = (8));
} else
{var statearr_18089_18114 = state_18073__$1;(statearr_18089_18114[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (14)))
{var inst_18066 = (state_18073[(2)]);var inst_18067 = cljs.core.async.close_BANG_.call(null,out);var state_18073__$1 = (function (){var statearr_18091 = state_18073;(statearr_18091[(13)] = inst_18066);
return statearr_18091;
})();var statearr_18092_18115 = state_18073__$1;(statearr_18092_18115[(2)] = inst_18067);
(statearr_18092_18115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (10)))
{var inst_18057 = (state_18073[(2)]);var state_18073__$1 = state_18073;var statearr_18093_18116 = state_18073__$1;(statearr_18093_18116[(2)] = inst_18057);
(statearr_18093_18116[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18074 === (8)))
{var inst_18037 = (state_18073[(7)]);var inst_18046 = (state_18073[(11)]);var tmp18090 = inst_18037;var inst_18037__$1 = tmp18090;var inst_18038 = inst_18046;var state_18073__$1 = (function (){var statearr_18094 = state_18073;(statearr_18094[(7)] = inst_18037__$1);
(statearr_18094[(8)] = inst_18038);
return statearr_18094;
})();var statearr_18095_18117 = state_18073__$1;(statearr_18095_18117[(2)] = null);
(statearr_18095_18117[(1)] = (2));
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
});})(c__5813__auto___18103,out))
;return ((function (switch__5798__auto__,c__5813__auto___18103,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_18099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18099[(0)] = state_machine__5799__auto__);
(statearr_18099[(1)] = (1));
return statearr_18099;
});
var state_machine__5799__auto____1 = (function (state_18073){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_18073);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e18100){if((e18100 instanceof Object))
{var ex__5802__auto__ = e18100;var statearr_18101_18118 = state_18073;(statearr_18101_18118[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18119 = state_18073;
state_18073 = G__18119;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_18073){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_18073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___18103,out))
})();var state__5815__auto__ = (function (){var statearr_18102 = f__5814__auto__.call(null);(statearr_18102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___18103);
return statearr_18102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___18103,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5813__auto___18262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5813__auto___18262,out){
return (function (){var f__5814__auto__ = (function (){var switch__5798__auto__ = ((function (c__5813__auto___18262,out){
return (function (state_18232){var state_val_18233 = (state_18232[(1)]);if((state_val_18233 === (7)))
{var inst_18228 = (state_18232[(2)]);var state_18232__$1 = state_18232;var statearr_18234_18263 = state_18232__$1;(statearr_18234_18263[(2)] = inst_18228);
(statearr_18234_18263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (1)))
{var inst_18191 = [];var inst_18192 = inst_18191;var inst_18193 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18232__$1 = (function (){var statearr_18235 = state_18232;(statearr_18235[(7)] = inst_18192);
(statearr_18235[(8)] = inst_18193);
return statearr_18235;
})();var statearr_18236_18264 = state_18232__$1;(statearr_18236_18264[(2)] = null);
(statearr_18236_18264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (4)))
{var inst_18196 = (state_18232[(9)]);var inst_18196__$1 = (state_18232[(2)]);var inst_18197 = (inst_18196__$1 == null);var inst_18198 = cljs.core.not.call(null,inst_18197);var state_18232__$1 = (function (){var statearr_18237 = state_18232;(statearr_18237[(9)] = inst_18196__$1);
return statearr_18237;
})();if(inst_18198)
{var statearr_18238_18265 = state_18232__$1;(statearr_18238_18265[(1)] = (5));
} else
{var statearr_18239_18266 = state_18232__$1;(statearr_18239_18266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (15)))
{var inst_18222 = (state_18232[(2)]);var state_18232__$1 = state_18232;var statearr_18240_18267 = state_18232__$1;(statearr_18240_18267[(2)] = inst_18222);
(statearr_18240_18267[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (13)))
{var state_18232__$1 = state_18232;var statearr_18241_18268 = state_18232__$1;(statearr_18241_18268[(2)] = null);
(statearr_18241_18268[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (6)))
{var inst_18192 = (state_18232[(7)]);var inst_18217 = inst_18192.length;var inst_18218 = (inst_18217 > (0));var state_18232__$1 = state_18232;if(cljs.core.truth_(inst_18218))
{var statearr_18242_18269 = state_18232__$1;(statearr_18242_18269[(1)] = (12));
} else
{var statearr_18243_18270 = state_18232__$1;(statearr_18243_18270[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (3)))
{var inst_18230 = (state_18232[(2)]);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18232__$1,inst_18230);
} else
{if((state_val_18233 === (12)))
{var inst_18192 = (state_18232[(7)]);var inst_18220 = cljs.core.vec.call(null,inst_18192);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18232__$1,(15),out,inst_18220);
} else
{if((state_val_18233 === (2)))
{var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18232__$1,(4),ch);
} else
{if((state_val_18233 === (11)))
{var inst_18200 = (state_18232[(10)]);var inst_18196 = (state_18232[(9)]);var inst_18210 = (state_18232[(2)]);var inst_18211 = [];var inst_18212 = inst_18211.push(inst_18196);var inst_18192 = inst_18211;var inst_18193 = inst_18200;var state_18232__$1 = (function (){var statearr_18244 = state_18232;(statearr_18244[(11)] = inst_18212);
(statearr_18244[(7)] = inst_18192);
(statearr_18244[(8)] = inst_18193);
(statearr_18244[(12)] = inst_18210);
return statearr_18244;
})();var statearr_18245_18271 = state_18232__$1;(statearr_18245_18271[(2)] = null);
(statearr_18245_18271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (9)))
{var inst_18192 = (state_18232[(7)]);var inst_18208 = cljs.core.vec.call(null,inst_18192);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18232__$1,(11),out,inst_18208);
} else
{if((state_val_18233 === (5)))
{var inst_18193 = (state_18232[(8)]);var inst_18200 = (state_18232[(10)]);var inst_18196 = (state_18232[(9)]);var inst_18200__$1 = f.call(null,inst_18196);var inst_18201 = cljs.core._EQ_.call(null,inst_18200__$1,inst_18193);var inst_18202 = cljs.core.keyword_identical_QMARK_.call(null,inst_18193,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18203 = (inst_18201) || (inst_18202);var state_18232__$1 = (function (){var statearr_18246 = state_18232;(statearr_18246[(10)] = inst_18200__$1);
return statearr_18246;
})();if(cljs.core.truth_(inst_18203))
{var statearr_18247_18272 = state_18232__$1;(statearr_18247_18272[(1)] = (8));
} else
{var statearr_18248_18273 = state_18232__$1;(statearr_18248_18273[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (14)))
{var inst_18225 = (state_18232[(2)]);var inst_18226 = cljs.core.async.close_BANG_.call(null,out);var state_18232__$1 = (function (){var statearr_18250 = state_18232;(statearr_18250[(13)] = inst_18225);
return statearr_18250;
})();var statearr_18251_18274 = state_18232__$1;(statearr_18251_18274[(2)] = inst_18226);
(statearr_18251_18274[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (10)))
{var inst_18215 = (state_18232[(2)]);var state_18232__$1 = state_18232;var statearr_18252_18275 = state_18232__$1;(statearr_18252_18275[(2)] = inst_18215);
(statearr_18252_18275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18233 === (8)))
{var inst_18192 = (state_18232[(7)]);var inst_18200 = (state_18232[(10)]);var inst_18196 = (state_18232[(9)]);var inst_18205 = inst_18192.push(inst_18196);var tmp18249 = inst_18192;var inst_18192__$1 = tmp18249;var inst_18193 = inst_18200;var state_18232__$1 = (function (){var statearr_18253 = state_18232;(statearr_18253[(14)] = inst_18205);
(statearr_18253[(7)] = inst_18192__$1);
(statearr_18253[(8)] = inst_18193);
return statearr_18253;
})();var statearr_18254_18276 = state_18232__$1;(statearr_18254_18276[(2)] = null);
(statearr_18254_18276[(1)] = (2));
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
});})(c__5813__auto___18262,out))
;return ((function (switch__5798__auto__,c__5813__auto___18262,out){
return (function() {
var state_machine__5799__auto__ = null;
var state_machine__5799__auto____0 = (function (){var statearr_18258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18258[(0)] = state_machine__5799__auto__);
(statearr_18258[(1)] = (1));
return statearr_18258;
});
var state_machine__5799__auto____1 = (function (state_18232){while(true){
var ret_value__5800__auto__ = (function (){try{while(true){
var result__5801__auto__ = switch__5798__auto__.call(null,state_18232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5801__auto__;
}
break;
}
}catch (e18259){if((e18259 instanceof Object))
{var ex__5802__auto__ = e18259;var statearr_18260_18277 = state_18232;(statearr_18260_18277[(5)] = ex__5802__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18278 = state_18232;
state_18232 = G__18278;
continue;
}
} else
{return ret_value__5800__auto__;
}
break;
}
});
state_machine__5799__auto__ = function(state_18232){
switch(arguments.length){
case 0:
return state_machine__5799__auto____0.call(this);
case 1:
return state_machine__5799__auto____1.call(this,state_18232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5799__auto____0;
state_machine__5799__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5799__auto____1;
return state_machine__5799__auto__;
})()
;})(switch__5798__auto__,c__5813__auto___18262,out))
})();var state__5815__auto__ = (function (){var statearr_18261 = f__5814__auto__.call(null);(statearr_18261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5813__auto___18262);
return statearr_18261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5815__auto__);
});})(c__5813__auto___18262,out))
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
