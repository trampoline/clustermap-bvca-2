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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t81316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81316 = (function (f,fn_handler,meta81317){
this.f = f;
this.fn_handler = fn_handler;
this.meta81317 = meta81317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81316.cljs$lang$type = true;
cljs.core.async.t81316.cljs$lang$ctorStr = "cljs.core.async/t81316";
cljs.core.async.t81316.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t81316");
});
cljs.core.async.t81316.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t81316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t81316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81318){var self__ = this;
var _81318__$1 = this;return self__.meta81317;
});
cljs.core.async.t81316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81318,meta81317__$1){var self__ = this;
var _81318__$1 = this;return (new cljs.core.async.t81316(self__.f,self__.fn_handler,meta81317__$1));
});
cljs.core.async.__GT_t81316 = (function __GT_t81316(f__$1,fn_handler__$1,meta81317){return (new cljs.core.async.t81316(f__$1,fn_handler__$1,meta81317));
});
}
return (new cljs.core.async.t81316(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__81320 = buff;if(G__81320)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__81320.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__81320.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__81320);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__81320);
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
{var val_81321 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_81321);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_81321,ret){
return (function (){return fn1.call(null,val_81321);
});})(val_81321,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4506__auto___81322 = n;var x_81323 = (0);while(true){
if((x_81323 < n__4506__auto___81322))
{(a[x_81323] = (0));
{
var G__81324 = (x_81323 + (1));
x_81323 = G__81324;
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
var G__81325 = (i + (1));
i = G__81325;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t81329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81329 = (function (flag,alt_flag,meta81330){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta81330 = meta81330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81329.cljs$lang$type = true;
cljs.core.async.t81329.cljs$lang$ctorStr = "cljs.core.async/t81329";
cljs.core.async.t81329.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t81329");
});})(flag))
;
cljs.core.async.t81329.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t81329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t81329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_81331){var self__ = this;
var _81331__$1 = this;return self__.meta81330;
});})(flag))
;
cljs.core.async.t81329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_81331,meta81330__$1){var self__ = this;
var _81331__$1 = this;return (new cljs.core.async.t81329(self__.flag,self__.alt_flag,meta81330__$1));
});})(flag))
;
cljs.core.async.__GT_t81329 = ((function (flag){
return (function __GT_t81329(flag__$1,alt_flag__$1,meta81330){return (new cljs.core.async.t81329(flag__$1,alt_flag__$1,meta81330));
});})(flag))
;
}
return (new cljs.core.async.t81329(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t81335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t81335 = (function (cb,flag,alt_handler,meta81336){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta81336 = meta81336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t81335.cljs$lang$type = true;
cljs.core.async.t81335.cljs$lang$ctorStr = "cljs.core.async/t81335";
cljs.core.async.t81335.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t81335");
});
cljs.core.async.t81335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t81335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t81335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t81335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81337){var self__ = this;
var _81337__$1 = this;return self__.meta81336;
});
cljs.core.async.t81335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81337,meta81336__$1){var self__ = this;
var _81337__$1 = this;return (new cljs.core.async.t81335(self__.cb,self__.flag,self__.alt_handler,meta81336__$1));
});
cljs.core.async.__GT_t81335 = (function __GT_t81335(cb__$1,flag__$1,alt_handler__$1,meta81336){return (new cljs.core.async.t81335(cb__$1,flag__$1,alt_handler__$1,meta81336));
});
}
return (new cljs.core.async.t81335(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__81338_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81338_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__81339_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81339_SHARP_,port], null));
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
var G__81340 = (i + (1));
i = G__81340;
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
var alts_BANG___delegate = function (ports,p__81341){var map__81343 = p__81341;var map__81343__$1 = ((cljs.core.seq_QMARK_.call(null,map__81343))?cljs.core.apply.call(null,cljs.core.hash_map,map__81343):map__81343);var opts = map__81343__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__81341 = null;if (arguments.length > 1) {
  p__81341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__81341);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__81344){
var ports = cljs.core.first(arglist__81344);
var p__81341 = cljs.core.rest(arglist__81344);
return alts_BANG___delegate(ports,p__81341);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5819__auto___81439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___81439){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___81439){
return (function (state_81415){var state_val_81416 = (state_81415[(1)]);if((state_val_81416 === (7)))
{var inst_81411 = (state_81415[(2)]);var state_81415__$1 = state_81415;var statearr_81417_81440 = state_81415__$1;(statearr_81417_81440[(2)] = inst_81411);
(statearr_81417_81440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (1)))
{var state_81415__$1 = state_81415;var statearr_81418_81441 = state_81415__$1;(statearr_81418_81441[(2)] = null);
(statearr_81418_81441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (4)))
{var inst_81394 = (state_81415[(7)]);var inst_81394__$1 = (state_81415[(2)]);var inst_81395 = (inst_81394__$1 == null);var state_81415__$1 = (function (){var statearr_81419 = state_81415;(statearr_81419[(7)] = inst_81394__$1);
return statearr_81419;
})();if(cljs.core.truth_(inst_81395))
{var statearr_81420_81442 = state_81415__$1;(statearr_81420_81442[(1)] = (5));
} else
{var statearr_81421_81443 = state_81415__$1;(statearr_81421_81443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (13)))
{var state_81415__$1 = state_81415;var statearr_81422_81444 = state_81415__$1;(statearr_81422_81444[(2)] = null);
(statearr_81422_81444[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (6)))
{var inst_81394 = (state_81415[(7)]);var state_81415__$1 = state_81415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81415__$1,(11),to,inst_81394);
} else
{if((state_val_81416 === (3)))
{var inst_81413 = (state_81415[(2)]);var state_81415__$1 = state_81415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81415__$1,inst_81413);
} else
{if((state_val_81416 === (12)))
{var state_81415__$1 = state_81415;var statearr_81423_81445 = state_81415__$1;(statearr_81423_81445[(2)] = null);
(statearr_81423_81445[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (2)))
{var state_81415__$1 = state_81415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81415__$1,(4),from);
} else
{if((state_val_81416 === (11)))
{var inst_81404 = (state_81415[(2)]);var state_81415__$1 = state_81415;if(cljs.core.truth_(inst_81404))
{var statearr_81424_81446 = state_81415__$1;(statearr_81424_81446[(1)] = (12));
} else
{var statearr_81425_81447 = state_81415__$1;(statearr_81425_81447[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (9)))
{var state_81415__$1 = state_81415;var statearr_81426_81448 = state_81415__$1;(statearr_81426_81448[(2)] = null);
(statearr_81426_81448[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (5)))
{var state_81415__$1 = state_81415;if(cljs.core.truth_(close_QMARK_))
{var statearr_81427_81449 = state_81415__$1;(statearr_81427_81449[(1)] = (8));
} else
{var statearr_81428_81450 = state_81415__$1;(statearr_81428_81450[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (14)))
{var inst_81409 = (state_81415[(2)]);var state_81415__$1 = state_81415;var statearr_81429_81451 = state_81415__$1;(statearr_81429_81451[(2)] = inst_81409);
(statearr_81429_81451[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (10)))
{var inst_81401 = (state_81415[(2)]);var state_81415__$1 = state_81415;var statearr_81430_81452 = state_81415__$1;(statearr_81430_81452[(2)] = inst_81401);
(statearr_81430_81452[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81416 === (8)))
{var inst_81398 = cljs.core.async.close_BANG_.call(null,to);var state_81415__$1 = state_81415;var statearr_81431_81453 = state_81415__$1;(statearr_81431_81453[(2)] = inst_81398);
(statearr_81431_81453[(1)] = (10));
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
});})(c__5819__auto___81439))
;return ((function (switch__5804__auto__,c__5819__auto___81439){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81435 = [null,null,null,null,null,null,null,null];(statearr_81435[(0)] = state_machine__5805__auto__);
(statearr_81435[(1)] = (1));
return statearr_81435;
});
var state_machine__5805__auto____1 = (function (state_81415){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81436){if((e81436 instanceof Object))
{var ex__5808__auto__ = e81436;var statearr_81437_81454 = state_81415;(statearr_81437_81454[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81415);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81436;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81455 = state_81415;
state_81415 = G__81455;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81415){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___81439))
})();var state__5821__auto__ = (function (){var statearr_81438 = f__5820__auto__.call(null);(statearr_81438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81439);
return statearr_81438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___81439))
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
return (function (p__81639){var vec__81640 = p__81639;var v = cljs.core.nth.call(null,vec__81640,(0),null);var p = cljs.core.nth.call(null,vec__81640,(1),null);var job = vec__81640;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5819__auto___81822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results){
return (function (state_81645){var state_val_81646 = (state_81645[(1)]);if((state_val_81646 === (2)))
{var inst_81642 = (state_81645[(2)]);var inst_81643 = cljs.core.async.close_BANG_.call(null,res);var state_81645__$1 = (function (){var statearr_81647 = state_81645;(statearr_81647[(7)] = inst_81642);
return statearr_81647;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81645__$1,inst_81643);
} else
{if((state_val_81646 === (1)))
{var state_81645__$1 = state_81645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81645__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results))
;return ((function (switch__5804__auto__,c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81651 = [null,null,null,null,null,null,null,null];(statearr_81651[(0)] = state_machine__5805__auto__);
(statearr_81651[(1)] = (1));
return statearr_81651;
});
var state_machine__5805__auto____1 = (function (state_81645){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81652){if((e81652 instanceof Object))
{var ex__5808__auto__ = e81652;var statearr_81653_81823 = state_81645;(statearr_81653_81823[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81645);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81824 = state_81645;
state_81645 = G__81824;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81645){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results))
})();var state__5821__auto__ = (function (){var statearr_81654 = f__5820__auto__.call(null);(statearr_81654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81822);
return statearr_81654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___81822,res,vec__81640,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__81655){var vec__81656 = p__81655;var v = cljs.core.nth.call(null,vec__81656,(0),null);var p = cljs.core.nth.call(null,vec__81656,(1),null);var job = vec__81656;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4506__auto___81825 = n;var __81826 = (0);while(true){
if((__81826 < n__4506__auto___81825))
{var G__81657_81827 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__81657_81827) {
case "async":
var c__5819__auto___81829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__81826,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__81826,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function (state_81670){var state_val_81671 = (state_81670[(1)]);if((state_val_81671 === (7)))
{var inst_81666 = (state_81670[(2)]);var state_81670__$1 = state_81670;var statearr_81672_81830 = state_81670__$1;(statearr_81672_81830[(2)] = inst_81666);
(statearr_81672_81830[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81671 === (6)))
{var state_81670__$1 = state_81670;var statearr_81673_81831 = state_81670__$1;(statearr_81673_81831[(2)] = null);
(statearr_81673_81831[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81671 === (5)))
{var state_81670__$1 = state_81670;var statearr_81674_81832 = state_81670__$1;(statearr_81674_81832[(2)] = null);
(statearr_81674_81832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81671 === (4)))
{var inst_81660 = (state_81670[(2)]);var inst_81661 = async.call(null,inst_81660);var state_81670__$1 = state_81670;if(cljs.core.truth_(inst_81661))
{var statearr_81675_81833 = state_81670__$1;(statearr_81675_81833[(1)] = (5));
} else
{var statearr_81676_81834 = state_81670__$1;(statearr_81676_81834[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81671 === (3)))
{var inst_81668 = (state_81670[(2)]);var state_81670__$1 = state_81670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81670__$1,inst_81668);
} else
{if((state_val_81671 === (2)))
{var state_81670__$1 = state_81670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81670__$1,(4),jobs);
} else
{if((state_val_81671 === (1)))
{var state_81670__$1 = state_81670;var statearr_81677_81835 = state_81670__$1;(statearr_81677_81835[(2)] = null);
(statearr_81677_81835[(1)] = (2));
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
});})(__81826,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
;return ((function (__81826,switch__5804__auto__,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81681 = [null,null,null,null,null,null,null];(statearr_81681[(0)] = state_machine__5805__auto__);
(statearr_81681[(1)] = (1));
return statearr_81681;
});
var state_machine__5805__auto____1 = (function (state_81670){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81670);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81682){if((e81682 instanceof Object))
{var ex__5808__auto__ = e81682;var statearr_81683_81836 = state_81670;(statearr_81683_81836[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81682;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81837 = state_81670;
state_81670 = G__81837;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81670){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__81826,switch__5804__auto__,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_81684 = f__5820__auto__.call(null);(statearr_81684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81829);
return statearr_81684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__81826,c__5819__auto___81829,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
);

break;
case "compute":
var c__5819__auto___81838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__81826,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (__81826,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function (state_81697){var state_val_81698 = (state_81697[(1)]);if((state_val_81698 === (7)))
{var inst_81693 = (state_81697[(2)]);var state_81697__$1 = state_81697;var statearr_81699_81839 = state_81697__$1;(statearr_81699_81839[(2)] = inst_81693);
(statearr_81699_81839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81698 === (6)))
{var state_81697__$1 = state_81697;var statearr_81700_81840 = state_81697__$1;(statearr_81700_81840[(2)] = null);
(statearr_81700_81840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81698 === (5)))
{var state_81697__$1 = state_81697;var statearr_81701_81841 = state_81697__$1;(statearr_81701_81841[(2)] = null);
(statearr_81701_81841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81698 === (4)))
{var inst_81687 = (state_81697[(2)]);var inst_81688 = process.call(null,inst_81687);var state_81697__$1 = state_81697;if(cljs.core.truth_(inst_81688))
{var statearr_81702_81842 = state_81697__$1;(statearr_81702_81842[(1)] = (5));
} else
{var statearr_81703_81843 = state_81697__$1;(statearr_81703_81843[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81698 === (3)))
{var inst_81695 = (state_81697[(2)]);var state_81697__$1 = state_81697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81697__$1,inst_81695);
} else
{if((state_val_81698 === (2)))
{var state_81697__$1 = state_81697;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81697__$1,(4),jobs);
} else
{if((state_val_81698 === (1)))
{var state_81697__$1 = state_81697;var statearr_81704_81844 = state_81697__$1;(statearr_81704_81844[(2)] = null);
(statearr_81704_81844[(1)] = (2));
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
});})(__81826,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
;return ((function (__81826,switch__5804__auto__,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81708 = [null,null,null,null,null,null,null];(statearr_81708[(0)] = state_machine__5805__auto__);
(statearr_81708[(1)] = (1));
return statearr_81708;
});
var state_machine__5805__auto____1 = (function (state_81697){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81709){if((e81709 instanceof Object))
{var ex__5808__auto__ = e81709;var statearr_81710_81845 = state_81697;(statearr_81710_81845[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81846 = state_81697;
state_81697 = G__81846;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81697){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(__81826,switch__5804__auto__,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_81711 = f__5820__auto__.call(null);(statearr_81711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81838);
return statearr_81711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(__81826,c__5819__auto___81838,G__81657_81827,n__4506__auto___81825,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__81847 = (__81826 + (1));
__81826 = G__81847;
continue;
}
} else
{}
break;
}
var c__5819__auto___81848 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___81848,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___81848,jobs,results,process,async){
return (function (state_81733){var state_val_81734 = (state_81733[(1)]);if((state_val_81734 === (9)))
{var inst_81726 = (state_81733[(2)]);var state_81733__$1 = (function (){var statearr_81735 = state_81733;(statearr_81735[(7)] = inst_81726);
return statearr_81735;
})();var statearr_81736_81849 = state_81733__$1;(statearr_81736_81849[(2)] = null);
(statearr_81736_81849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81734 === (8)))
{var inst_81719 = (state_81733[(8)]);var inst_81724 = (state_81733[(2)]);var state_81733__$1 = (function (){var statearr_81737 = state_81733;(statearr_81737[(9)] = inst_81724);
return statearr_81737;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81733__$1,(9),results,inst_81719);
} else
{if((state_val_81734 === (7)))
{var inst_81729 = (state_81733[(2)]);var state_81733__$1 = state_81733;var statearr_81738_81850 = state_81733__$1;(statearr_81738_81850[(2)] = inst_81729);
(statearr_81738_81850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81734 === (6)))
{var inst_81714 = (state_81733[(10)]);var inst_81719 = (state_81733[(8)]);var inst_81719__$1 = cljs.core.async.chan.call(null,(1));var inst_81720 = cljs.core.PersistentVector.EMPTY_NODE;var inst_81721 = [inst_81714,inst_81719__$1];var inst_81722 = (new cljs.core.PersistentVector(null,2,(5),inst_81720,inst_81721,null));var state_81733__$1 = (function (){var statearr_81739 = state_81733;(statearr_81739[(8)] = inst_81719__$1);
return statearr_81739;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81733__$1,(8),jobs,inst_81722);
} else
{if((state_val_81734 === (5)))
{var inst_81717 = cljs.core.async.close_BANG_.call(null,jobs);var state_81733__$1 = state_81733;var statearr_81740_81851 = state_81733__$1;(statearr_81740_81851[(2)] = inst_81717);
(statearr_81740_81851[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81734 === (4)))
{var inst_81714 = (state_81733[(10)]);var inst_81714__$1 = (state_81733[(2)]);var inst_81715 = (inst_81714__$1 == null);var state_81733__$1 = (function (){var statearr_81741 = state_81733;(statearr_81741[(10)] = inst_81714__$1);
return statearr_81741;
})();if(cljs.core.truth_(inst_81715))
{var statearr_81742_81852 = state_81733__$1;(statearr_81742_81852[(1)] = (5));
} else
{var statearr_81743_81853 = state_81733__$1;(statearr_81743_81853[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81734 === (3)))
{var inst_81731 = (state_81733[(2)]);var state_81733__$1 = state_81733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81733__$1,inst_81731);
} else
{if((state_val_81734 === (2)))
{var state_81733__$1 = state_81733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81733__$1,(4),from);
} else
{if((state_val_81734 === (1)))
{var state_81733__$1 = state_81733;var statearr_81744_81854 = state_81733__$1;(statearr_81744_81854[(2)] = null);
(statearr_81744_81854[(1)] = (2));
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
});})(c__5819__auto___81848,jobs,results,process,async))
;return ((function (switch__5804__auto__,c__5819__auto___81848,jobs,results,process,async){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81748 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_81748[(0)] = state_machine__5805__auto__);
(statearr_81748[(1)] = (1));
return statearr_81748;
});
var state_machine__5805__auto____1 = (function (state_81733){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81733);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81749){if((e81749 instanceof Object))
{var ex__5808__auto__ = e81749;var statearr_81750_81855 = state_81733;(statearr_81750_81855[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81733);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81749;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81856 = state_81733;
state_81733 = G__81856;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81733){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___81848,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_81751 = f__5820__auto__.call(null);(statearr_81751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81848);
return statearr_81751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___81848,jobs,results,process,async))
);
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,jobs,results,process,async){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,jobs,results,process,async){
return (function (state_81789){var state_val_81790 = (state_81789[(1)]);if((state_val_81790 === (7)))
{var inst_81785 = (state_81789[(2)]);var state_81789__$1 = state_81789;var statearr_81791_81857 = state_81789__$1;(statearr_81791_81857[(2)] = inst_81785);
(statearr_81791_81857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (20)))
{var state_81789__$1 = state_81789;var statearr_81792_81858 = state_81789__$1;(statearr_81792_81858[(2)] = null);
(statearr_81792_81858[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (1)))
{var state_81789__$1 = state_81789;var statearr_81793_81859 = state_81789__$1;(statearr_81793_81859[(2)] = null);
(statearr_81793_81859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (4)))
{var inst_81754 = (state_81789[(7)]);var inst_81754__$1 = (state_81789[(2)]);var inst_81755 = (inst_81754__$1 == null);var state_81789__$1 = (function (){var statearr_81794 = state_81789;(statearr_81794[(7)] = inst_81754__$1);
return statearr_81794;
})();if(cljs.core.truth_(inst_81755))
{var statearr_81795_81860 = state_81789__$1;(statearr_81795_81860[(1)] = (5));
} else
{var statearr_81796_81861 = state_81789__$1;(statearr_81796_81861[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (15)))
{var inst_81767 = (state_81789[(8)]);var state_81789__$1 = state_81789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81789__$1,(18),to,inst_81767);
} else
{if((state_val_81790 === (21)))
{var inst_81780 = (state_81789[(2)]);var state_81789__$1 = state_81789;var statearr_81797_81862 = state_81789__$1;(statearr_81797_81862[(2)] = inst_81780);
(statearr_81797_81862[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (13)))
{var inst_81782 = (state_81789[(2)]);var state_81789__$1 = (function (){var statearr_81798 = state_81789;(statearr_81798[(9)] = inst_81782);
return statearr_81798;
})();var statearr_81799_81863 = state_81789__$1;(statearr_81799_81863[(2)] = null);
(statearr_81799_81863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (6)))
{var inst_81754 = (state_81789[(7)]);var state_81789__$1 = state_81789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81789__$1,(11),inst_81754);
} else
{if((state_val_81790 === (17)))
{var inst_81775 = (state_81789[(2)]);var state_81789__$1 = state_81789;if(cljs.core.truth_(inst_81775))
{var statearr_81800_81864 = state_81789__$1;(statearr_81800_81864[(1)] = (19));
} else
{var statearr_81801_81865 = state_81789__$1;(statearr_81801_81865[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (3)))
{var inst_81787 = (state_81789[(2)]);var state_81789__$1 = state_81789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81789__$1,inst_81787);
} else
{if((state_val_81790 === (12)))
{var inst_81764 = (state_81789[(10)]);var state_81789__$1 = state_81789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81789__$1,(14),inst_81764);
} else
{if((state_val_81790 === (2)))
{var state_81789__$1 = state_81789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81789__$1,(4),results);
} else
{if((state_val_81790 === (19)))
{var state_81789__$1 = state_81789;var statearr_81802_81866 = state_81789__$1;(statearr_81802_81866[(2)] = null);
(statearr_81802_81866[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (11)))
{var inst_81764 = (state_81789[(2)]);var state_81789__$1 = (function (){var statearr_81803 = state_81789;(statearr_81803[(10)] = inst_81764);
return statearr_81803;
})();var statearr_81804_81867 = state_81789__$1;(statearr_81804_81867[(2)] = null);
(statearr_81804_81867[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (9)))
{var state_81789__$1 = state_81789;var statearr_81805_81868 = state_81789__$1;(statearr_81805_81868[(2)] = null);
(statearr_81805_81868[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (5)))
{var state_81789__$1 = state_81789;if(cljs.core.truth_(close_QMARK_))
{var statearr_81806_81869 = state_81789__$1;(statearr_81806_81869[(1)] = (8));
} else
{var statearr_81807_81870 = state_81789__$1;(statearr_81807_81870[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (14)))
{var inst_81767 = (state_81789[(8)]);var inst_81769 = (state_81789[(11)]);var inst_81767__$1 = (state_81789[(2)]);var inst_81768 = (inst_81767__$1 == null);var inst_81769__$1 = cljs.core.not.call(null,inst_81768);var state_81789__$1 = (function (){var statearr_81808 = state_81789;(statearr_81808[(8)] = inst_81767__$1);
(statearr_81808[(11)] = inst_81769__$1);
return statearr_81808;
})();if(inst_81769__$1)
{var statearr_81809_81871 = state_81789__$1;(statearr_81809_81871[(1)] = (15));
} else
{var statearr_81810_81872 = state_81789__$1;(statearr_81810_81872[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (16)))
{var inst_81769 = (state_81789[(11)]);var state_81789__$1 = state_81789;var statearr_81811_81873 = state_81789__$1;(statearr_81811_81873[(2)] = inst_81769);
(statearr_81811_81873[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (10)))
{var inst_81761 = (state_81789[(2)]);var state_81789__$1 = state_81789;var statearr_81812_81874 = state_81789__$1;(statearr_81812_81874[(2)] = inst_81761);
(statearr_81812_81874[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (18)))
{var inst_81772 = (state_81789[(2)]);var state_81789__$1 = state_81789;var statearr_81813_81875 = state_81789__$1;(statearr_81813_81875[(2)] = inst_81772);
(statearr_81813_81875[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81790 === (8)))
{var inst_81758 = cljs.core.async.close_BANG_.call(null,to);var state_81789__$1 = state_81789;var statearr_81814_81876 = state_81789__$1;(statearr_81814_81876[(2)] = inst_81758);
(statearr_81814_81876[(1)] = (10));
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
var state_machine__5805__auto____0 = (function (){var statearr_81818 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_81818[(0)] = state_machine__5805__auto__);
(statearr_81818[(1)] = (1));
return statearr_81818;
});
var state_machine__5805__auto____1 = (function (state_81789){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81789);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81819){if((e81819 instanceof Object))
{var ex__5808__auto__ = e81819;var statearr_81820_81877 = state_81789;(statearr_81820_81877[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81878 = state_81789;
state_81789 = G__81878;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81789){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,jobs,results,process,async))
})();var state__5821__auto__ = (function (){var statearr_81821 = f__5820__auto__.call(null);(statearr_81821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_81821;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5819__auto___81979 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___81979,tc,fc){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___81979,tc,fc){
return (function (state_81954){var state_val_81955 = (state_81954[(1)]);if((state_val_81955 === (7)))
{var inst_81950 = (state_81954[(2)]);var state_81954__$1 = state_81954;var statearr_81956_81980 = state_81954__$1;(statearr_81956_81980[(2)] = inst_81950);
(statearr_81956_81980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (1)))
{var state_81954__$1 = state_81954;var statearr_81957_81981 = state_81954__$1;(statearr_81957_81981[(2)] = null);
(statearr_81957_81981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (4)))
{var inst_81931 = (state_81954[(7)]);var inst_81931__$1 = (state_81954[(2)]);var inst_81932 = (inst_81931__$1 == null);var state_81954__$1 = (function (){var statearr_81958 = state_81954;(statearr_81958[(7)] = inst_81931__$1);
return statearr_81958;
})();if(cljs.core.truth_(inst_81932))
{var statearr_81959_81982 = state_81954__$1;(statearr_81959_81982[(1)] = (5));
} else
{var statearr_81960_81983 = state_81954__$1;(statearr_81960_81983[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (13)))
{var state_81954__$1 = state_81954;var statearr_81961_81984 = state_81954__$1;(statearr_81961_81984[(2)] = null);
(statearr_81961_81984[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (6)))
{var inst_81931 = (state_81954[(7)]);var inst_81937 = p.call(null,inst_81931);var state_81954__$1 = state_81954;if(cljs.core.truth_(inst_81937))
{var statearr_81962_81985 = state_81954__$1;(statearr_81962_81985[(1)] = (9));
} else
{var statearr_81963_81986 = state_81954__$1;(statearr_81963_81986[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (3)))
{var inst_81952 = (state_81954[(2)]);var state_81954__$1 = state_81954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81954__$1,inst_81952);
} else
{if((state_val_81955 === (12)))
{var state_81954__$1 = state_81954;var statearr_81964_81987 = state_81954__$1;(statearr_81964_81987[(2)] = null);
(statearr_81964_81987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (2)))
{var state_81954__$1 = state_81954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81954__$1,(4),ch);
} else
{if((state_val_81955 === (11)))
{var inst_81931 = (state_81954[(7)]);var inst_81941 = (state_81954[(2)]);var state_81954__$1 = state_81954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81954__$1,(8),inst_81941,inst_81931);
} else
{if((state_val_81955 === (9)))
{var state_81954__$1 = state_81954;var statearr_81965_81988 = state_81954__$1;(statearr_81965_81988[(2)] = tc);
(statearr_81965_81988[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (5)))
{var inst_81934 = cljs.core.async.close_BANG_.call(null,tc);var inst_81935 = cljs.core.async.close_BANG_.call(null,fc);var state_81954__$1 = (function (){var statearr_81966 = state_81954;(statearr_81966[(8)] = inst_81934);
return statearr_81966;
})();var statearr_81967_81989 = state_81954__$1;(statearr_81967_81989[(2)] = inst_81935);
(statearr_81967_81989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (14)))
{var inst_81948 = (state_81954[(2)]);var state_81954__$1 = state_81954;var statearr_81968_81990 = state_81954__$1;(statearr_81968_81990[(2)] = inst_81948);
(statearr_81968_81990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (10)))
{var state_81954__$1 = state_81954;var statearr_81969_81991 = state_81954__$1;(statearr_81969_81991[(2)] = fc);
(statearr_81969_81991[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_81955 === (8)))
{var inst_81943 = (state_81954[(2)]);var state_81954__$1 = state_81954;if(cljs.core.truth_(inst_81943))
{var statearr_81970_81992 = state_81954__$1;(statearr_81970_81992[(1)] = (12));
} else
{var statearr_81971_81993 = state_81954__$1;(statearr_81971_81993[(1)] = (13));
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
});})(c__5819__auto___81979,tc,fc))
;return ((function (switch__5804__auto__,c__5819__auto___81979,tc,fc){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_81975 = [null,null,null,null,null,null,null,null,null];(statearr_81975[(0)] = state_machine__5805__auto__);
(statearr_81975[(1)] = (1));
return statearr_81975;
});
var state_machine__5805__auto____1 = (function (state_81954){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_81954);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e81976){if((e81976 instanceof Object))
{var ex__5808__auto__ = e81976;var statearr_81977_81994 = state_81954;(statearr_81977_81994[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e81976;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__81995 = state_81954;
state_81954 = G__81995;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_81954){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_81954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___81979,tc,fc))
})();var state__5821__auto__ = (function (){var statearr_81978 = f__5820__auto__.call(null);(statearr_81978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___81979);
return statearr_81978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___81979,tc,fc))
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
return (function (state_82042){var state_val_82043 = (state_82042[(1)]);if((state_val_82043 === (7)))
{var inst_82038 = (state_82042[(2)]);var state_82042__$1 = state_82042;var statearr_82044_82060 = state_82042__$1;(statearr_82044_82060[(2)] = inst_82038);
(statearr_82044_82060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82043 === (6)))
{var inst_82031 = (state_82042[(7)]);var inst_82028 = (state_82042[(8)]);var inst_82035 = f.call(null,inst_82028,inst_82031);var inst_82028__$1 = inst_82035;var state_82042__$1 = (function (){var statearr_82045 = state_82042;(statearr_82045[(8)] = inst_82028__$1);
return statearr_82045;
})();var statearr_82046_82061 = state_82042__$1;(statearr_82046_82061[(2)] = null);
(statearr_82046_82061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82043 === (5)))
{var inst_82028 = (state_82042[(8)]);var state_82042__$1 = state_82042;var statearr_82047_82062 = state_82042__$1;(statearr_82047_82062[(2)] = inst_82028);
(statearr_82047_82062[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82043 === (4)))
{var inst_82031 = (state_82042[(7)]);var inst_82031__$1 = (state_82042[(2)]);var inst_82032 = (inst_82031__$1 == null);var state_82042__$1 = (function (){var statearr_82048 = state_82042;(statearr_82048[(7)] = inst_82031__$1);
return statearr_82048;
})();if(cljs.core.truth_(inst_82032))
{var statearr_82049_82063 = state_82042__$1;(statearr_82049_82063[(1)] = (5));
} else
{var statearr_82050_82064 = state_82042__$1;(statearr_82050_82064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82043 === (3)))
{var inst_82040 = (state_82042[(2)]);var state_82042__$1 = state_82042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82042__$1,inst_82040);
} else
{if((state_val_82043 === (2)))
{var state_82042__$1 = state_82042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82042__$1,(4),ch);
} else
{if((state_val_82043 === (1)))
{var inst_82028 = init;var state_82042__$1 = (function (){var statearr_82051 = state_82042;(statearr_82051[(8)] = inst_82028);
return statearr_82051;
})();var statearr_82052_82065 = state_82042__$1;(statearr_82052_82065[(2)] = null);
(statearr_82052_82065[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_82056 = [null,null,null,null,null,null,null,null,null];(statearr_82056[(0)] = state_machine__5805__auto__);
(statearr_82056[(1)] = (1));
return statearr_82056;
});
var state_machine__5805__auto____1 = (function (state_82042){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_82042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e82057){if((e82057 instanceof Object))
{var ex__5808__auto__ = e82057;var statearr_82058_82066 = state_82042;(statearr_82058_82066[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e82057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82067 = state_82042;
state_82042 = G__82067;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_82042){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_82042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_82059 = f__5820__auto__.call(null);(statearr_82059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_82059;
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
return (function (state_82141){var state_val_82142 = (state_82141[(1)]);if((state_val_82142 === (7)))
{var inst_82123 = (state_82141[(2)]);var state_82141__$1 = state_82141;var statearr_82143_82166 = state_82141__$1;(statearr_82143_82166[(2)] = inst_82123);
(statearr_82143_82166[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (1)))
{var inst_82117 = cljs.core.seq.call(null,coll);var inst_82118 = inst_82117;var state_82141__$1 = (function (){var statearr_82144 = state_82141;(statearr_82144[(7)] = inst_82118);
return statearr_82144;
})();var statearr_82145_82167 = state_82141__$1;(statearr_82145_82167[(2)] = null);
(statearr_82145_82167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (4)))
{var inst_82118 = (state_82141[(7)]);var inst_82121 = cljs.core.first.call(null,inst_82118);var state_82141__$1 = state_82141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82141__$1,(7),ch,inst_82121);
} else
{if((state_val_82142 === (13)))
{var inst_82135 = (state_82141[(2)]);var state_82141__$1 = state_82141;var statearr_82146_82168 = state_82141__$1;(statearr_82146_82168[(2)] = inst_82135);
(statearr_82146_82168[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (6)))
{var inst_82126 = (state_82141[(2)]);var state_82141__$1 = state_82141;if(cljs.core.truth_(inst_82126))
{var statearr_82147_82169 = state_82141__$1;(statearr_82147_82169[(1)] = (8));
} else
{var statearr_82148_82170 = state_82141__$1;(statearr_82148_82170[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (3)))
{var inst_82139 = (state_82141[(2)]);var state_82141__$1 = state_82141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82141__$1,inst_82139);
} else
{if((state_val_82142 === (12)))
{var state_82141__$1 = state_82141;var statearr_82149_82171 = state_82141__$1;(statearr_82149_82171[(2)] = null);
(statearr_82149_82171[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (2)))
{var inst_82118 = (state_82141[(7)]);var state_82141__$1 = state_82141;if(cljs.core.truth_(inst_82118))
{var statearr_82150_82172 = state_82141__$1;(statearr_82150_82172[(1)] = (4));
} else
{var statearr_82151_82173 = state_82141__$1;(statearr_82151_82173[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (11)))
{var inst_82132 = cljs.core.async.close_BANG_.call(null,ch);var state_82141__$1 = state_82141;var statearr_82152_82174 = state_82141__$1;(statearr_82152_82174[(2)] = inst_82132);
(statearr_82152_82174[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (9)))
{var state_82141__$1 = state_82141;if(cljs.core.truth_(close_QMARK_))
{var statearr_82153_82175 = state_82141__$1;(statearr_82153_82175[(1)] = (11));
} else
{var statearr_82154_82176 = state_82141__$1;(statearr_82154_82176[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (5)))
{var inst_82118 = (state_82141[(7)]);var state_82141__$1 = state_82141;var statearr_82155_82177 = state_82141__$1;(statearr_82155_82177[(2)] = inst_82118);
(statearr_82155_82177[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (10)))
{var inst_82137 = (state_82141[(2)]);var state_82141__$1 = state_82141;var statearr_82156_82178 = state_82141__$1;(statearr_82156_82178[(2)] = inst_82137);
(statearr_82156_82178[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82142 === (8)))
{var inst_82118 = (state_82141[(7)]);var inst_82128 = cljs.core.next.call(null,inst_82118);var inst_82118__$1 = inst_82128;var state_82141__$1 = (function (){var statearr_82157 = state_82141;(statearr_82157[(7)] = inst_82118__$1);
return statearr_82157;
})();var statearr_82158_82179 = state_82141__$1;(statearr_82158_82179[(2)] = null);
(statearr_82158_82179[(1)] = (2));
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
var state_machine__5805__auto____0 = (function (){var statearr_82162 = [null,null,null,null,null,null,null,null];(statearr_82162[(0)] = state_machine__5805__auto__);
(statearr_82162[(1)] = (1));
return statearr_82162;
});
var state_machine__5805__auto____1 = (function (state_82141){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_82141);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e82163){if((e82163 instanceof Object))
{var ex__5808__auto__ = e82163;var statearr_82164_82180 = state_82141;(statearr_82164_82180[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82141);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e82163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82181 = state_82141;
state_82141 = G__82181;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_82141){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_82141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_82165 = f__5820__auto__.call(null);(statearr_82165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_82165;
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
cljs.core.async.Mux = (function (){var obj82183 = {};return obj82183;
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
cljs.core.async.Mult = (function (){var obj82185 = {};return obj82185;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t82407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82407 = (function (cs,ch,mult,meta82408){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta82408 = meta82408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82407.cljs$lang$type = true;
cljs.core.async.t82407.cljs$lang$ctorStr = "cljs.core.async/t82407";
cljs.core.async.t82407.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t82407");
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t82407.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_82409){var self__ = this;
var _82409__$1 = this;return self__.meta82408;
});})(cs))
;
cljs.core.async.t82407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_82409,meta82408__$1){var self__ = this;
var _82409__$1 = this;return (new cljs.core.async.t82407(self__.cs,self__.ch,self__.mult,meta82408__$1));
});})(cs))
;
cljs.core.async.__GT_t82407 = ((function (cs){
return (function __GT_t82407(cs__$1,ch__$1,mult__$1,meta82408){return (new cljs.core.async.t82407(cs__$1,ch__$1,mult__$1,meta82408));
});})(cs))
;
}
return (new cljs.core.async.t82407(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5819__auto___82628 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___82628,cs,m,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___82628,cs,m,dchan,dctr,done){
return (function (state_82540){var state_val_82541 = (state_82540[(1)]);if((state_val_82541 === (7)))
{var inst_82536 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82542_82629 = state_82540__$1;(statearr_82542_82629[(2)] = inst_82536);
(statearr_82542_82629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (20)))
{var inst_82441 = (state_82540[(7)]);var inst_82451 = cljs.core.first.call(null,inst_82441);var inst_82452 = cljs.core.nth.call(null,inst_82451,(0),null);var inst_82453 = cljs.core.nth.call(null,inst_82451,(1),null);var state_82540__$1 = (function (){var statearr_82543 = state_82540;(statearr_82543[(8)] = inst_82452);
return statearr_82543;
})();if(cljs.core.truth_(inst_82453))
{var statearr_82544_82630 = state_82540__$1;(statearr_82544_82630[(1)] = (22));
} else
{var statearr_82545_82631 = state_82540__$1;(statearr_82545_82631[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (27)))
{var inst_82483 = (state_82540[(9)]);var inst_82412 = (state_82540[(10)]);var inst_82488 = (state_82540[(11)]);var inst_82481 = (state_82540[(12)]);var inst_82488__$1 = cljs.core._nth.call(null,inst_82481,inst_82483);var inst_82489 = cljs.core.async.put_BANG_.call(null,inst_82488__$1,inst_82412,done);var state_82540__$1 = (function (){var statearr_82546 = state_82540;(statearr_82546[(11)] = inst_82488__$1);
return statearr_82546;
})();if(cljs.core.truth_(inst_82489))
{var statearr_82547_82632 = state_82540__$1;(statearr_82547_82632[(1)] = (30));
} else
{var statearr_82548_82633 = state_82540__$1;(statearr_82548_82633[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (1)))
{var state_82540__$1 = state_82540;var statearr_82549_82634 = state_82540__$1;(statearr_82549_82634[(2)] = null);
(statearr_82549_82634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (24)))
{var inst_82441 = (state_82540[(7)]);var inst_82458 = (state_82540[(2)]);var inst_82459 = cljs.core.next.call(null,inst_82441);var inst_82421 = inst_82459;var inst_82422 = null;var inst_82423 = (0);var inst_82424 = (0);var state_82540__$1 = (function (){var statearr_82550 = state_82540;(statearr_82550[(13)] = inst_82423);
(statearr_82550[(14)] = inst_82422);
(statearr_82550[(15)] = inst_82421);
(statearr_82550[(16)] = inst_82424);
(statearr_82550[(17)] = inst_82458);
return statearr_82550;
})();var statearr_82551_82635 = state_82540__$1;(statearr_82551_82635[(2)] = null);
(statearr_82551_82635[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (39)))
{var state_82540__$1 = state_82540;var statearr_82555_82636 = state_82540__$1;(statearr_82555_82636[(2)] = null);
(statearr_82555_82636[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (4)))
{var inst_82412 = (state_82540[(10)]);var inst_82412__$1 = (state_82540[(2)]);var inst_82413 = (inst_82412__$1 == null);var state_82540__$1 = (function (){var statearr_82556 = state_82540;(statearr_82556[(10)] = inst_82412__$1);
return statearr_82556;
})();if(cljs.core.truth_(inst_82413))
{var statearr_82557_82637 = state_82540__$1;(statearr_82557_82637[(1)] = (5));
} else
{var statearr_82558_82638 = state_82540__$1;(statearr_82558_82638[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (15)))
{var inst_82423 = (state_82540[(13)]);var inst_82422 = (state_82540[(14)]);var inst_82421 = (state_82540[(15)]);var inst_82424 = (state_82540[(16)]);var inst_82437 = (state_82540[(2)]);var inst_82438 = (inst_82424 + (1));var tmp82552 = inst_82423;var tmp82553 = inst_82422;var tmp82554 = inst_82421;var inst_82421__$1 = tmp82554;var inst_82422__$1 = tmp82553;var inst_82423__$1 = tmp82552;var inst_82424__$1 = inst_82438;var state_82540__$1 = (function (){var statearr_82559 = state_82540;(statearr_82559[(18)] = inst_82437);
(statearr_82559[(13)] = inst_82423__$1);
(statearr_82559[(14)] = inst_82422__$1);
(statearr_82559[(15)] = inst_82421__$1);
(statearr_82559[(16)] = inst_82424__$1);
return statearr_82559;
})();var statearr_82560_82639 = state_82540__$1;(statearr_82560_82639[(2)] = null);
(statearr_82560_82639[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (21)))
{var inst_82462 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82564_82640 = state_82540__$1;(statearr_82564_82640[(2)] = inst_82462);
(statearr_82564_82640[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (31)))
{var inst_82488 = (state_82540[(11)]);var inst_82492 = done.call(null,null);var inst_82493 = cljs.core.async.untap_STAR_.call(null,m,inst_82488);var state_82540__$1 = (function (){var statearr_82565 = state_82540;(statearr_82565[(19)] = inst_82492);
return statearr_82565;
})();var statearr_82566_82641 = state_82540__$1;(statearr_82566_82641[(2)] = inst_82493);
(statearr_82566_82641[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (32)))
{var inst_82482 = (state_82540[(20)]);var inst_82483 = (state_82540[(9)]);var inst_82480 = (state_82540[(21)]);var inst_82481 = (state_82540[(12)]);var inst_82495 = (state_82540[(2)]);var inst_82496 = (inst_82483 + (1));var tmp82561 = inst_82482;var tmp82562 = inst_82480;var tmp82563 = inst_82481;var inst_82480__$1 = tmp82562;var inst_82481__$1 = tmp82563;var inst_82482__$1 = tmp82561;var inst_82483__$1 = inst_82496;var state_82540__$1 = (function (){var statearr_82567 = state_82540;(statearr_82567[(20)] = inst_82482__$1);
(statearr_82567[(9)] = inst_82483__$1);
(statearr_82567[(21)] = inst_82480__$1);
(statearr_82567[(22)] = inst_82495);
(statearr_82567[(12)] = inst_82481__$1);
return statearr_82567;
})();var statearr_82568_82642 = state_82540__$1;(statearr_82568_82642[(2)] = null);
(statearr_82568_82642[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (40)))
{var inst_82508 = (state_82540[(23)]);var inst_82512 = done.call(null,null);var inst_82513 = cljs.core.async.untap_STAR_.call(null,m,inst_82508);var state_82540__$1 = (function (){var statearr_82569 = state_82540;(statearr_82569[(24)] = inst_82512);
return statearr_82569;
})();var statearr_82570_82643 = state_82540__$1;(statearr_82570_82643[(2)] = inst_82513);
(statearr_82570_82643[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (33)))
{var inst_82499 = (state_82540[(25)]);var inst_82501 = cljs.core.chunked_seq_QMARK_.call(null,inst_82499);var state_82540__$1 = state_82540;if(inst_82501)
{var statearr_82571_82644 = state_82540__$1;(statearr_82571_82644[(1)] = (36));
} else
{var statearr_82572_82645 = state_82540__$1;(statearr_82572_82645[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (13)))
{var inst_82431 = (state_82540[(26)]);var inst_82434 = cljs.core.async.close_BANG_.call(null,inst_82431);var state_82540__$1 = state_82540;var statearr_82573_82646 = state_82540__$1;(statearr_82573_82646[(2)] = inst_82434);
(statearr_82573_82646[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (22)))
{var inst_82452 = (state_82540[(8)]);var inst_82455 = cljs.core.async.close_BANG_.call(null,inst_82452);var state_82540__$1 = state_82540;var statearr_82574_82647 = state_82540__$1;(statearr_82574_82647[(2)] = inst_82455);
(statearr_82574_82647[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (36)))
{var inst_82499 = (state_82540[(25)]);var inst_82503 = cljs.core.chunk_first.call(null,inst_82499);var inst_82504 = cljs.core.chunk_rest.call(null,inst_82499);var inst_82505 = cljs.core.count.call(null,inst_82503);var inst_82480 = inst_82504;var inst_82481 = inst_82503;var inst_82482 = inst_82505;var inst_82483 = (0);var state_82540__$1 = (function (){var statearr_82575 = state_82540;(statearr_82575[(20)] = inst_82482);
(statearr_82575[(9)] = inst_82483);
(statearr_82575[(21)] = inst_82480);
(statearr_82575[(12)] = inst_82481);
return statearr_82575;
})();var statearr_82576_82648 = state_82540__$1;(statearr_82576_82648[(2)] = null);
(statearr_82576_82648[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (41)))
{var inst_82499 = (state_82540[(25)]);var inst_82515 = (state_82540[(2)]);var inst_82516 = cljs.core.next.call(null,inst_82499);var inst_82480 = inst_82516;var inst_82481 = null;var inst_82482 = (0);var inst_82483 = (0);var state_82540__$1 = (function (){var statearr_82577 = state_82540;(statearr_82577[(20)] = inst_82482);
(statearr_82577[(9)] = inst_82483);
(statearr_82577[(21)] = inst_82480);
(statearr_82577[(27)] = inst_82515);
(statearr_82577[(12)] = inst_82481);
return statearr_82577;
})();var statearr_82578_82649 = state_82540__$1;(statearr_82578_82649[(2)] = null);
(statearr_82578_82649[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (43)))
{var state_82540__$1 = state_82540;var statearr_82579_82650 = state_82540__$1;(statearr_82579_82650[(2)] = null);
(statearr_82579_82650[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (29)))
{var inst_82524 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82580_82651 = state_82540__$1;(statearr_82580_82651[(2)] = inst_82524);
(statearr_82580_82651[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (44)))
{var inst_82533 = (state_82540[(2)]);var state_82540__$1 = (function (){var statearr_82581 = state_82540;(statearr_82581[(28)] = inst_82533);
return statearr_82581;
})();var statearr_82582_82652 = state_82540__$1;(statearr_82582_82652[(2)] = null);
(statearr_82582_82652[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (6)))
{var inst_82472 = (state_82540[(29)]);var inst_82471 = cljs.core.deref.call(null,cs);var inst_82472__$1 = cljs.core.keys.call(null,inst_82471);var inst_82473 = cljs.core.count.call(null,inst_82472__$1);var inst_82474 = cljs.core.reset_BANG_.call(null,dctr,inst_82473);var inst_82479 = cljs.core.seq.call(null,inst_82472__$1);var inst_82480 = inst_82479;var inst_82481 = null;var inst_82482 = (0);var inst_82483 = (0);var state_82540__$1 = (function (){var statearr_82583 = state_82540;(statearr_82583[(20)] = inst_82482);
(statearr_82583[(9)] = inst_82483);
(statearr_82583[(21)] = inst_82480);
(statearr_82583[(29)] = inst_82472__$1);
(statearr_82583[(30)] = inst_82474);
(statearr_82583[(12)] = inst_82481);
return statearr_82583;
})();var statearr_82584_82653 = state_82540__$1;(statearr_82584_82653[(2)] = null);
(statearr_82584_82653[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (28)))
{var inst_82480 = (state_82540[(21)]);var inst_82499 = (state_82540[(25)]);var inst_82499__$1 = cljs.core.seq.call(null,inst_82480);var state_82540__$1 = (function (){var statearr_82585 = state_82540;(statearr_82585[(25)] = inst_82499__$1);
return statearr_82585;
})();if(inst_82499__$1)
{var statearr_82586_82654 = state_82540__$1;(statearr_82586_82654[(1)] = (33));
} else
{var statearr_82587_82655 = state_82540__$1;(statearr_82587_82655[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (25)))
{var inst_82482 = (state_82540[(20)]);var inst_82483 = (state_82540[(9)]);var inst_82485 = (inst_82483 < inst_82482);var inst_82486 = inst_82485;var state_82540__$1 = state_82540;if(cljs.core.truth_(inst_82486))
{var statearr_82588_82656 = state_82540__$1;(statearr_82588_82656[(1)] = (27));
} else
{var statearr_82589_82657 = state_82540__$1;(statearr_82589_82657[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (34)))
{var state_82540__$1 = state_82540;var statearr_82590_82658 = state_82540__$1;(statearr_82590_82658[(2)] = null);
(statearr_82590_82658[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (17)))
{var state_82540__$1 = state_82540;var statearr_82591_82659 = state_82540__$1;(statearr_82591_82659[(2)] = null);
(statearr_82591_82659[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (3)))
{var inst_82538 = (state_82540[(2)]);var state_82540__$1 = state_82540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82540__$1,inst_82538);
} else
{if((state_val_82541 === (12)))
{var inst_82467 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82592_82660 = state_82540__$1;(statearr_82592_82660[(2)] = inst_82467);
(statearr_82592_82660[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (2)))
{var state_82540__$1 = state_82540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82540__$1,(4),ch);
} else
{if((state_val_82541 === (23)))
{var state_82540__$1 = state_82540;var statearr_82593_82661 = state_82540__$1;(statearr_82593_82661[(2)] = null);
(statearr_82593_82661[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (35)))
{var inst_82522 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82594_82662 = state_82540__$1;(statearr_82594_82662[(2)] = inst_82522);
(statearr_82594_82662[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (19)))
{var inst_82441 = (state_82540[(7)]);var inst_82445 = cljs.core.chunk_first.call(null,inst_82441);var inst_82446 = cljs.core.chunk_rest.call(null,inst_82441);var inst_82447 = cljs.core.count.call(null,inst_82445);var inst_82421 = inst_82446;var inst_82422 = inst_82445;var inst_82423 = inst_82447;var inst_82424 = (0);var state_82540__$1 = (function (){var statearr_82595 = state_82540;(statearr_82595[(13)] = inst_82423);
(statearr_82595[(14)] = inst_82422);
(statearr_82595[(15)] = inst_82421);
(statearr_82595[(16)] = inst_82424);
return statearr_82595;
})();var statearr_82596_82663 = state_82540__$1;(statearr_82596_82663[(2)] = null);
(statearr_82596_82663[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (11)))
{var inst_82441 = (state_82540[(7)]);var inst_82421 = (state_82540[(15)]);var inst_82441__$1 = cljs.core.seq.call(null,inst_82421);var state_82540__$1 = (function (){var statearr_82597 = state_82540;(statearr_82597[(7)] = inst_82441__$1);
return statearr_82597;
})();if(inst_82441__$1)
{var statearr_82598_82664 = state_82540__$1;(statearr_82598_82664[(1)] = (16));
} else
{var statearr_82599_82665 = state_82540__$1;(statearr_82599_82665[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (9)))
{var inst_82469 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82600_82666 = state_82540__$1;(statearr_82600_82666[(2)] = inst_82469);
(statearr_82600_82666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (5)))
{var inst_82419 = cljs.core.deref.call(null,cs);var inst_82420 = cljs.core.seq.call(null,inst_82419);var inst_82421 = inst_82420;var inst_82422 = null;var inst_82423 = (0);var inst_82424 = (0);var state_82540__$1 = (function (){var statearr_82601 = state_82540;(statearr_82601[(13)] = inst_82423);
(statearr_82601[(14)] = inst_82422);
(statearr_82601[(15)] = inst_82421);
(statearr_82601[(16)] = inst_82424);
return statearr_82601;
})();var statearr_82602_82667 = state_82540__$1;(statearr_82602_82667[(2)] = null);
(statearr_82602_82667[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (14)))
{var state_82540__$1 = state_82540;var statearr_82603_82668 = state_82540__$1;(statearr_82603_82668[(2)] = null);
(statearr_82603_82668[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (45)))
{var inst_82530 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82604_82669 = state_82540__$1;(statearr_82604_82669[(2)] = inst_82530);
(statearr_82604_82669[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (26)))
{var inst_82472 = (state_82540[(29)]);var inst_82526 = (state_82540[(2)]);var inst_82527 = cljs.core.seq.call(null,inst_82472);var state_82540__$1 = (function (){var statearr_82605 = state_82540;(statearr_82605[(31)] = inst_82526);
return statearr_82605;
})();if(inst_82527)
{var statearr_82606_82670 = state_82540__$1;(statearr_82606_82670[(1)] = (42));
} else
{var statearr_82607_82671 = state_82540__$1;(statearr_82607_82671[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (16)))
{var inst_82441 = (state_82540[(7)]);var inst_82443 = cljs.core.chunked_seq_QMARK_.call(null,inst_82441);var state_82540__$1 = state_82540;if(inst_82443)
{var statearr_82608_82672 = state_82540__$1;(statearr_82608_82672[(1)] = (19));
} else
{var statearr_82609_82673 = state_82540__$1;(statearr_82609_82673[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (38)))
{var inst_82519 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82610_82674 = state_82540__$1;(statearr_82610_82674[(2)] = inst_82519);
(statearr_82610_82674[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (30)))
{var state_82540__$1 = state_82540;var statearr_82611_82675 = state_82540__$1;(statearr_82611_82675[(2)] = null);
(statearr_82611_82675[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (10)))
{var inst_82422 = (state_82540[(14)]);var inst_82424 = (state_82540[(16)]);var inst_82430 = cljs.core._nth.call(null,inst_82422,inst_82424);var inst_82431 = cljs.core.nth.call(null,inst_82430,(0),null);var inst_82432 = cljs.core.nth.call(null,inst_82430,(1),null);var state_82540__$1 = (function (){var statearr_82612 = state_82540;(statearr_82612[(26)] = inst_82431);
return statearr_82612;
})();if(cljs.core.truth_(inst_82432))
{var statearr_82613_82676 = state_82540__$1;(statearr_82613_82676[(1)] = (13));
} else
{var statearr_82614_82677 = state_82540__$1;(statearr_82614_82677[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (18)))
{var inst_82465 = (state_82540[(2)]);var state_82540__$1 = state_82540;var statearr_82615_82678 = state_82540__$1;(statearr_82615_82678[(2)] = inst_82465);
(statearr_82615_82678[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (42)))
{var state_82540__$1 = state_82540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82540__$1,(45),dchan);
} else
{if((state_val_82541 === (37)))
{var inst_82508 = (state_82540[(23)]);var inst_82499 = (state_82540[(25)]);var inst_82412 = (state_82540[(10)]);var inst_82508__$1 = cljs.core.first.call(null,inst_82499);var inst_82509 = cljs.core.async.put_BANG_.call(null,inst_82508__$1,inst_82412,done);var state_82540__$1 = (function (){var statearr_82616 = state_82540;(statearr_82616[(23)] = inst_82508__$1);
return statearr_82616;
})();if(cljs.core.truth_(inst_82509))
{var statearr_82617_82679 = state_82540__$1;(statearr_82617_82679[(1)] = (39));
} else
{var statearr_82618_82680 = state_82540__$1;(statearr_82618_82680[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82541 === (8)))
{var inst_82423 = (state_82540[(13)]);var inst_82424 = (state_82540[(16)]);var inst_82426 = (inst_82424 < inst_82423);var inst_82427 = inst_82426;var state_82540__$1 = state_82540;if(cljs.core.truth_(inst_82427))
{var statearr_82619_82681 = state_82540__$1;(statearr_82619_82681[(1)] = (10));
} else
{var statearr_82620_82682 = state_82540__$1;(statearr_82620_82682[(1)] = (11));
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
});})(c__5819__auto___82628,cs,m,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___82628,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_82624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_82624[(0)] = state_machine__5805__auto__);
(statearr_82624[(1)] = (1));
return statearr_82624;
});
var state_machine__5805__auto____1 = (function (state_82540){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_82540);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e82625){if((e82625 instanceof Object))
{var ex__5808__auto__ = e82625;var statearr_82626_82683 = state_82540;(statearr_82626_82683[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e82625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82684 = state_82540;
state_82540 = G__82684;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_82540){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_82540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___82628,cs,m,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_82627 = f__5820__auto__.call(null);(statearr_82627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___82628);
return statearr_82627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___82628,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj82686 = {};return obj82686;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__82687){var map__82692 = p__82687;var map__82692__$1 = ((cljs.core.seq_QMARK_.call(null,map__82692))?cljs.core.apply.call(null,cljs.core.hash_map,map__82692):map__82692);var opts = map__82692__$1;var statearr_82693_82696 = state;(statearr_82693_82696[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__82692,map__82692__$1,opts){
return (function (val){var statearr_82694_82697 = state;(statearr_82694_82697[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__82692,map__82692__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_82695_82698 = state;(statearr_82695_82698[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__82687 = null;if (arguments.length > 3) {
  p__82687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__82687);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__82699){
var state = cljs.core.first(arglist__82699);
arglist__82699 = cljs.core.next(arglist__82699);
var cont_block = cljs.core.first(arglist__82699);
arglist__82699 = cljs.core.next(arglist__82699);
var ports = cljs.core.first(arglist__82699);
var p__82687 = cljs.core.rest(arglist__82699);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__82687);
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
;var m = (function (){if(typeof cljs.core.async.t82819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t82819 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta82820){
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
this.meta82820 = meta82820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t82819.cljs$lang$type = true;
cljs.core.async.t82819.cljs$lang$ctorStr = "cljs.core.async/t82819";
cljs.core.async.t82819.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t82819");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t82819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82821){var self__ = this;
var _82821__$1 = this;return self__.meta82820;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t82819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_82821,meta82820__$1){var self__ = this;
var _82821__$1 = this;return (new cljs.core.async.t82819(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta82820__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t82819 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t82819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta82820){return (new cljs.core.async.t82819(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta82820));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t82819(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5819__auto___82938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_82891){var state_val_82892 = (state_82891[(1)]);if((state_val_82892 === (7)))
{var inst_82835 = (state_82891[(7)]);var inst_82840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82835);var state_82891__$1 = state_82891;var statearr_82893_82939 = state_82891__$1;(statearr_82893_82939[(2)] = inst_82840);
(statearr_82893_82939[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (20)))
{var inst_82850 = (state_82891[(8)]);var state_82891__$1 = state_82891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82891__$1,(23),out,inst_82850);
} else
{if((state_val_82892 === (1)))
{var inst_82825 = (state_82891[(9)]);var inst_82825__$1 = calc_state.call(null);var inst_82826 = cljs.core.seq_QMARK_.call(null,inst_82825__$1);var state_82891__$1 = (function (){var statearr_82894 = state_82891;(statearr_82894[(9)] = inst_82825__$1);
return statearr_82894;
})();if(inst_82826)
{var statearr_82895_82940 = state_82891__$1;(statearr_82895_82940[(1)] = (2));
} else
{var statearr_82896_82941 = state_82891__$1;(statearr_82896_82941[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (24)))
{var inst_82843 = (state_82891[(10)]);var inst_82835 = inst_82843;var state_82891__$1 = (function (){var statearr_82897 = state_82891;(statearr_82897[(7)] = inst_82835);
return statearr_82897;
})();var statearr_82898_82942 = state_82891__$1;(statearr_82898_82942[(2)] = null);
(statearr_82898_82942[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (4)))
{var inst_82825 = (state_82891[(9)]);var inst_82831 = (state_82891[(2)]);var inst_82832 = cljs.core.get.call(null,inst_82831,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_82833 = cljs.core.get.call(null,inst_82831,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_82834 = cljs.core.get.call(null,inst_82831,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_82835 = inst_82825;var state_82891__$1 = (function (){var statearr_82899 = state_82891;(statearr_82899[(11)] = inst_82834);
(statearr_82899[(7)] = inst_82835);
(statearr_82899[(12)] = inst_82832);
(statearr_82899[(13)] = inst_82833);
return statearr_82899;
})();var statearr_82900_82943 = state_82891__$1;(statearr_82900_82943[(2)] = null);
(statearr_82900_82943[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (15)))
{var state_82891__$1 = state_82891;var statearr_82901_82944 = state_82891__$1;(statearr_82901_82944[(2)] = null);
(statearr_82901_82944[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (21)))
{var inst_82843 = (state_82891[(10)]);var inst_82835 = inst_82843;var state_82891__$1 = (function (){var statearr_82902 = state_82891;(statearr_82902[(7)] = inst_82835);
return statearr_82902;
})();var statearr_82903_82945 = state_82891__$1;(statearr_82903_82945[(2)] = null);
(statearr_82903_82945[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (13)))
{var inst_82887 = (state_82891[(2)]);var state_82891__$1 = state_82891;var statearr_82904_82946 = state_82891__$1;(statearr_82904_82946[(2)] = inst_82887);
(statearr_82904_82946[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (22)))
{var inst_82885 = (state_82891[(2)]);var state_82891__$1 = state_82891;var statearr_82905_82947 = state_82891__$1;(statearr_82905_82947[(2)] = inst_82885);
(statearr_82905_82947[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (6)))
{var inst_82889 = (state_82891[(2)]);var state_82891__$1 = state_82891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82891__$1,inst_82889);
} else
{if((state_val_82892 === (25)))
{var state_82891__$1 = state_82891;var statearr_82906_82948 = state_82891__$1;(statearr_82906_82948[(2)] = null);
(statearr_82906_82948[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (17)))
{var inst_82865 = (state_82891[(14)]);var state_82891__$1 = state_82891;var statearr_82907_82949 = state_82891__$1;(statearr_82907_82949[(2)] = inst_82865);
(statearr_82907_82949[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (3)))
{var inst_82825 = (state_82891[(9)]);var state_82891__$1 = state_82891;var statearr_82908_82950 = state_82891__$1;(statearr_82908_82950[(2)] = inst_82825);
(statearr_82908_82950[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (12)))
{var inst_82846 = (state_82891[(15)]);var inst_82851 = (state_82891[(16)]);var inst_82865 = (state_82891[(14)]);var inst_82865__$1 = inst_82846.call(null,inst_82851);var state_82891__$1 = (function (){var statearr_82909 = state_82891;(statearr_82909[(14)] = inst_82865__$1);
return statearr_82909;
})();if(cljs.core.truth_(inst_82865__$1))
{var statearr_82910_82951 = state_82891__$1;(statearr_82910_82951[(1)] = (17));
} else
{var statearr_82911_82952 = state_82891__$1;(statearr_82911_82952[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (2)))
{var inst_82825 = (state_82891[(9)]);var inst_82828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_82825);var state_82891__$1 = state_82891;var statearr_82912_82953 = state_82891__$1;(statearr_82912_82953[(2)] = inst_82828);
(statearr_82912_82953[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (23)))
{var inst_82876 = (state_82891[(2)]);var state_82891__$1 = state_82891;if(cljs.core.truth_(inst_82876))
{var statearr_82913_82954 = state_82891__$1;(statearr_82913_82954[(1)] = (24));
} else
{var statearr_82914_82955 = state_82891__$1;(statearr_82914_82955[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (19)))
{var inst_82873 = (state_82891[(2)]);var state_82891__$1 = state_82891;if(cljs.core.truth_(inst_82873))
{var statearr_82915_82956 = state_82891__$1;(statearr_82915_82956[(1)] = (20));
} else
{var statearr_82916_82957 = state_82891__$1;(statearr_82916_82957[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (11)))
{var inst_82850 = (state_82891[(8)]);var inst_82856 = (inst_82850 == null);var state_82891__$1 = state_82891;if(cljs.core.truth_(inst_82856))
{var statearr_82917_82958 = state_82891__$1;(statearr_82917_82958[(1)] = (14));
} else
{var statearr_82918_82959 = state_82891__$1;(statearr_82918_82959[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (9)))
{var inst_82843 = (state_82891[(10)]);var inst_82843__$1 = (state_82891[(2)]);var inst_82844 = cljs.core.get.call(null,inst_82843__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_82845 = cljs.core.get.call(null,inst_82843__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_82846 = cljs.core.get.call(null,inst_82843__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_82891__$1 = (function (){var statearr_82919 = state_82891;(statearr_82919[(10)] = inst_82843__$1);
(statearr_82919[(15)] = inst_82846);
(statearr_82919[(17)] = inst_82845);
return statearr_82919;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_82891__$1,(10),inst_82844);
} else
{if((state_val_82892 === (5)))
{var inst_82835 = (state_82891[(7)]);var inst_82838 = cljs.core.seq_QMARK_.call(null,inst_82835);var state_82891__$1 = state_82891;if(inst_82838)
{var statearr_82920_82960 = state_82891__$1;(statearr_82920_82960[(1)] = (7));
} else
{var statearr_82921_82961 = state_82891__$1;(statearr_82921_82961[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (14)))
{var inst_82851 = (state_82891[(16)]);var inst_82858 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_82851);var state_82891__$1 = state_82891;var statearr_82922_82962 = state_82891__$1;(statearr_82922_82962[(2)] = inst_82858);
(statearr_82922_82962[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (26)))
{var inst_82881 = (state_82891[(2)]);var state_82891__$1 = state_82891;var statearr_82923_82963 = state_82891__$1;(statearr_82923_82963[(2)] = inst_82881);
(statearr_82923_82963[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (16)))
{var inst_82861 = (state_82891[(2)]);var inst_82862 = calc_state.call(null);var inst_82835 = inst_82862;var state_82891__$1 = (function (){var statearr_82924 = state_82891;(statearr_82924[(7)] = inst_82835);
(statearr_82924[(18)] = inst_82861);
return statearr_82924;
})();var statearr_82925_82964 = state_82891__$1;(statearr_82925_82964[(2)] = null);
(statearr_82925_82964[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (10)))
{var inst_82850 = (state_82891[(8)]);var inst_82851 = (state_82891[(16)]);var inst_82849 = (state_82891[(2)]);var inst_82850__$1 = cljs.core.nth.call(null,inst_82849,(0),null);var inst_82851__$1 = cljs.core.nth.call(null,inst_82849,(1),null);var inst_82852 = (inst_82850__$1 == null);var inst_82853 = cljs.core._EQ_.call(null,inst_82851__$1,change);var inst_82854 = (inst_82852) || (inst_82853);var state_82891__$1 = (function (){var statearr_82926 = state_82891;(statearr_82926[(8)] = inst_82850__$1);
(statearr_82926[(16)] = inst_82851__$1);
return statearr_82926;
})();if(cljs.core.truth_(inst_82854))
{var statearr_82927_82965 = state_82891__$1;(statearr_82927_82965[(1)] = (11));
} else
{var statearr_82928_82966 = state_82891__$1;(statearr_82928_82966[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (18)))
{var inst_82846 = (state_82891[(15)]);var inst_82851 = (state_82891[(16)]);var inst_82845 = (state_82891[(17)]);var inst_82868 = cljs.core.empty_QMARK_.call(null,inst_82846);var inst_82869 = inst_82845.call(null,inst_82851);var inst_82870 = cljs.core.not.call(null,inst_82869);var inst_82871 = (inst_82868) && (inst_82870);var state_82891__$1 = state_82891;var statearr_82929_82967 = state_82891__$1;(statearr_82929_82967[(2)] = inst_82871);
(statearr_82929_82967[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_82892 === (8)))
{var inst_82835 = (state_82891[(7)]);var state_82891__$1 = state_82891;var statearr_82930_82968 = state_82891__$1;(statearr_82930_82968[(2)] = inst_82835);
(statearr_82930_82968[(1)] = (9));
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
});})(c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5804__auto__,c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_82934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_82934[(0)] = state_machine__5805__auto__);
(statearr_82934[(1)] = (1));
return statearr_82934;
});
var state_machine__5805__auto____1 = (function (state_82891){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_82891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e82935){if((e82935 instanceof Object))
{var ex__5808__auto__ = e82935;var statearr_82936_82969 = state_82891;(statearr_82936_82969[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e82935;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82970 = state_82891;
state_82891 = G__82970;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_82891){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_82891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5821__auto__ = (function (){var statearr_82937 = f__5820__auto__.call(null);(statearr_82937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___82938);
return statearr_82937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___82938,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj82972 = {};return obj82972;
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
return (function (p1__82973_SHARP_){if(cljs.core.truth_(p1__82973_SHARP_.call(null,topic)))
{return p1__82973_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__82973_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3637__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t83096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83096 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta83097){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta83097 = meta83097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83096.cljs$lang$type = true;
cljs.core.async.t83096.cljs$lang$ctorStr = "cljs.core.async/t83096";
cljs.core.async.t83096.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t83096");
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t83096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t83096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_83098){var self__ = this;
var _83098__$1 = this;return self__.meta83097;
});})(mults,ensure_mult))
;
cljs.core.async.t83096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_83098,meta83097__$1){var self__ = this;
var _83098__$1 = this;return (new cljs.core.async.t83096(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta83097__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t83096 = ((function (mults,ensure_mult){
return (function __GT_t83096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83097){return (new cljs.core.async.t83096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta83097));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t83096(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5819__auto___83218 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83218,mults,ensure_mult,p){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83218,mults,ensure_mult,p){
return (function (state_83170){var state_val_83171 = (state_83170[(1)]);if((state_val_83171 === (7)))
{var inst_83166 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83172_83219 = state_83170__$1;(statearr_83172_83219[(2)] = inst_83166);
(statearr_83172_83219[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (20)))
{var state_83170__$1 = state_83170;var statearr_83173_83220 = state_83170__$1;(statearr_83173_83220[(2)] = null);
(statearr_83173_83220[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (1)))
{var state_83170__$1 = state_83170;var statearr_83174_83221 = state_83170__$1;(statearr_83174_83221[(2)] = null);
(statearr_83174_83221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (24)))
{var inst_83149 = (state_83170[(7)]);var inst_83158 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_83149);var state_83170__$1 = state_83170;var statearr_83175_83222 = state_83170__$1;(statearr_83175_83222[(2)] = inst_83158);
(statearr_83175_83222[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (4)))
{var inst_83101 = (state_83170[(8)]);var inst_83101__$1 = (state_83170[(2)]);var inst_83102 = (inst_83101__$1 == null);var state_83170__$1 = (function (){var statearr_83176 = state_83170;(statearr_83176[(8)] = inst_83101__$1);
return statearr_83176;
})();if(cljs.core.truth_(inst_83102))
{var statearr_83177_83223 = state_83170__$1;(statearr_83177_83223[(1)] = (5));
} else
{var statearr_83178_83224 = state_83170__$1;(statearr_83178_83224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (15)))
{var inst_83143 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83179_83225 = state_83170__$1;(statearr_83179_83225[(2)] = inst_83143);
(statearr_83179_83225[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (21)))
{var inst_83163 = (state_83170[(2)]);var state_83170__$1 = (function (){var statearr_83180 = state_83170;(statearr_83180[(9)] = inst_83163);
return statearr_83180;
})();var statearr_83181_83226 = state_83170__$1;(statearr_83181_83226[(2)] = null);
(statearr_83181_83226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (13)))
{var inst_83125 = (state_83170[(10)]);var inst_83127 = cljs.core.chunked_seq_QMARK_.call(null,inst_83125);var state_83170__$1 = state_83170;if(inst_83127)
{var statearr_83182_83227 = state_83170__$1;(statearr_83182_83227[(1)] = (16));
} else
{var statearr_83183_83228 = state_83170__$1;(statearr_83183_83228[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (22)))
{var inst_83155 = (state_83170[(2)]);var state_83170__$1 = state_83170;if(cljs.core.truth_(inst_83155))
{var statearr_83184_83229 = state_83170__$1;(statearr_83184_83229[(1)] = (23));
} else
{var statearr_83185_83230 = state_83170__$1;(statearr_83185_83230[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (6)))
{var inst_83101 = (state_83170[(8)]);var inst_83149 = (state_83170[(7)]);var inst_83151 = (state_83170[(11)]);var inst_83149__$1 = topic_fn.call(null,inst_83101);var inst_83150 = cljs.core.deref.call(null,mults);var inst_83151__$1 = cljs.core.get.call(null,inst_83150,inst_83149__$1);var state_83170__$1 = (function (){var statearr_83186 = state_83170;(statearr_83186[(7)] = inst_83149__$1);
(statearr_83186[(11)] = inst_83151__$1);
return statearr_83186;
})();if(cljs.core.truth_(inst_83151__$1))
{var statearr_83187_83231 = state_83170__$1;(statearr_83187_83231[(1)] = (19));
} else
{var statearr_83188_83232 = state_83170__$1;(statearr_83188_83232[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (25)))
{var inst_83160 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83189_83233 = state_83170__$1;(statearr_83189_83233[(2)] = inst_83160);
(statearr_83189_83233[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (17)))
{var inst_83125 = (state_83170[(10)]);var inst_83134 = cljs.core.first.call(null,inst_83125);var inst_83135 = cljs.core.async.muxch_STAR_.call(null,inst_83134);var inst_83136 = cljs.core.async.close_BANG_.call(null,inst_83135);var inst_83137 = cljs.core.next.call(null,inst_83125);var inst_83111 = inst_83137;var inst_83112 = null;var inst_83113 = (0);var inst_83114 = (0);var state_83170__$1 = (function (){var statearr_83190 = state_83170;(statearr_83190[(12)] = inst_83111);
(statearr_83190[(13)] = inst_83136);
(statearr_83190[(14)] = inst_83112);
(statearr_83190[(15)] = inst_83114);
(statearr_83190[(16)] = inst_83113);
return statearr_83190;
})();var statearr_83191_83234 = state_83170__$1;(statearr_83191_83234[(2)] = null);
(statearr_83191_83234[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (3)))
{var inst_83168 = (state_83170[(2)]);var state_83170__$1 = state_83170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83170__$1,inst_83168);
} else
{if((state_val_83171 === (12)))
{var inst_83145 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83192_83235 = state_83170__$1;(statearr_83192_83235[(2)] = inst_83145);
(statearr_83192_83235[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (2)))
{var state_83170__$1 = state_83170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83170__$1,(4),ch);
} else
{if((state_val_83171 === (23)))
{var state_83170__$1 = state_83170;var statearr_83193_83236 = state_83170__$1;(statearr_83193_83236[(2)] = null);
(statearr_83193_83236[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (19)))
{var inst_83101 = (state_83170[(8)]);var inst_83151 = (state_83170[(11)]);var inst_83153 = cljs.core.async.muxch_STAR_.call(null,inst_83151);var state_83170__$1 = state_83170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83170__$1,(22),inst_83153,inst_83101);
} else
{if((state_val_83171 === (11)))
{var inst_83111 = (state_83170[(12)]);var inst_83125 = (state_83170[(10)]);var inst_83125__$1 = cljs.core.seq.call(null,inst_83111);var state_83170__$1 = (function (){var statearr_83194 = state_83170;(statearr_83194[(10)] = inst_83125__$1);
return statearr_83194;
})();if(inst_83125__$1)
{var statearr_83195_83237 = state_83170__$1;(statearr_83195_83237[(1)] = (13));
} else
{var statearr_83196_83238 = state_83170__$1;(statearr_83196_83238[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (9)))
{var inst_83147 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83197_83239 = state_83170__$1;(statearr_83197_83239[(2)] = inst_83147);
(statearr_83197_83239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (5)))
{var inst_83108 = cljs.core.deref.call(null,mults);var inst_83109 = cljs.core.vals.call(null,inst_83108);var inst_83110 = cljs.core.seq.call(null,inst_83109);var inst_83111 = inst_83110;var inst_83112 = null;var inst_83113 = (0);var inst_83114 = (0);var state_83170__$1 = (function (){var statearr_83198 = state_83170;(statearr_83198[(12)] = inst_83111);
(statearr_83198[(14)] = inst_83112);
(statearr_83198[(15)] = inst_83114);
(statearr_83198[(16)] = inst_83113);
return statearr_83198;
})();var statearr_83199_83240 = state_83170__$1;(statearr_83199_83240[(2)] = null);
(statearr_83199_83240[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (14)))
{var state_83170__$1 = state_83170;var statearr_83203_83241 = state_83170__$1;(statearr_83203_83241[(2)] = null);
(statearr_83203_83241[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (16)))
{var inst_83125 = (state_83170[(10)]);var inst_83129 = cljs.core.chunk_first.call(null,inst_83125);var inst_83130 = cljs.core.chunk_rest.call(null,inst_83125);var inst_83131 = cljs.core.count.call(null,inst_83129);var inst_83111 = inst_83130;var inst_83112 = inst_83129;var inst_83113 = inst_83131;var inst_83114 = (0);var state_83170__$1 = (function (){var statearr_83204 = state_83170;(statearr_83204[(12)] = inst_83111);
(statearr_83204[(14)] = inst_83112);
(statearr_83204[(15)] = inst_83114);
(statearr_83204[(16)] = inst_83113);
return statearr_83204;
})();var statearr_83205_83242 = state_83170__$1;(statearr_83205_83242[(2)] = null);
(statearr_83205_83242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (10)))
{var inst_83111 = (state_83170[(12)]);var inst_83112 = (state_83170[(14)]);var inst_83114 = (state_83170[(15)]);var inst_83113 = (state_83170[(16)]);var inst_83119 = cljs.core._nth.call(null,inst_83112,inst_83114);var inst_83120 = cljs.core.async.muxch_STAR_.call(null,inst_83119);var inst_83121 = cljs.core.async.close_BANG_.call(null,inst_83120);var inst_83122 = (inst_83114 + (1));var tmp83200 = inst_83111;var tmp83201 = inst_83112;var tmp83202 = inst_83113;var inst_83111__$1 = tmp83200;var inst_83112__$1 = tmp83201;var inst_83113__$1 = tmp83202;var inst_83114__$1 = inst_83122;var state_83170__$1 = (function (){var statearr_83206 = state_83170;(statearr_83206[(12)] = inst_83111__$1);
(statearr_83206[(17)] = inst_83121);
(statearr_83206[(14)] = inst_83112__$1);
(statearr_83206[(15)] = inst_83114__$1);
(statearr_83206[(16)] = inst_83113__$1);
return statearr_83206;
})();var statearr_83207_83243 = state_83170__$1;(statearr_83207_83243[(2)] = null);
(statearr_83207_83243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (18)))
{var inst_83140 = (state_83170[(2)]);var state_83170__$1 = state_83170;var statearr_83208_83244 = state_83170__$1;(statearr_83208_83244[(2)] = inst_83140);
(statearr_83208_83244[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83171 === (8)))
{var inst_83114 = (state_83170[(15)]);var inst_83113 = (state_83170[(16)]);var inst_83116 = (inst_83114 < inst_83113);var inst_83117 = inst_83116;var state_83170__$1 = state_83170;if(cljs.core.truth_(inst_83117))
{var statearr_83209_83245 = state_83170__$1;(statearr_83209_83245[(1)] = (10));
} else
{var statearr_83210_83246 = state_83170__$1;(statearr_83210_83246[(1)] = (11));
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
});})(c__5819__auto___83218,mults,ensure_mult,p))
;return ((function (switch__5804__auto__,c__5819__auto___83218,mults,ensure_mult,p){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83214[(0)] = state_machine__5805__auto__);
(statearr_83214[(1)] = (1));
return statearr_83214;
});
var state_machine__5805__auto____1 = (function (state_83170){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83170);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83215){if((e83215 instanceof Object))
{var ex__5808__auto__ = e83215;var statearr_83216_83247 = state_83170;(statearr_83216_83247[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83215;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83248 = state_83170;
state_83170 = G__83248;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83170){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83218,mults,ensure_mult,p))
})();var state__5821__auto__ = (function (){var statearr_83217 = f__5820__auto__.call(null);(statearr_83217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83218);
return statearr_83217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83218,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5819__auto___83385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_83355){var state_val_83356 = (state_83355[(1)]);if((state_val_83356 === (7)))
{var state_83355__$1 = state_83355;var statearr_83357_83386 = state_83355__$1;(statearr_83357_83386[(2)] = null);
(statearr_83357_83386[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (1)))
{var state_83355__$1 = state_83355;var statearr_83358_83387 = state_83355__$1;(statearr_83358_83387[(2)] = null);
(statearr_83358_83387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (4)))
{var inst_83319 = (state_83355[(7)]);var inst_83321 = (inst_83319 < cnt);var state_83355__$1 = state_83355;if(cljs.core.truth_(inst_83321))
{var statearr_83359_83388 = state_83355__$1;(statearr_83359_83388[(1)] = (6));
} else
{var statearr_83360_83389 = state_83355__$1;(statearr_83360_83389[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (15)))
{var inst_83351 = (state_83355[(2)]);var state_83355__$1 = state_83355;var statearr_83361_83390 = state_83355__$1;(statearr_83361_83390[(2)] = inst_83351);
(statearr_83361_83390[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (13)))
{var inst_83344 = cljs.core.async.close_BANG_.call(null,out);var state_83355__$1 = state_83355;var statearr_83362_83391 = state_83355__$1;(statearr_83362_83391[(2)] = inst_83344);
(statearr_83362_83391[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (6)))
{var state_83355__$1 = state_83355;var statearr_83363_83392 = state_83355__$1;(statearr_83363_83392[(2)] = null);
(statearr_83363_83392[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (3)))
{var inst_83353 = (state_83355[(2)]);var state_83355__$1 = state_83355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83355__$1,inst_83353);
} else
{if((state_val_83356 === (12)))
{var inst_83341 = (state_83355[(8)]);var inst_83341__$1 = (state_83355[(2)]);var inst_83342 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_83341__$1);var state_83355__$1 = (function (){var statearr_83364 = state_83355;(statearr_83364[(8)] = inst_83341__$1);
return statearr_83364;
})();if(cljs.core.truth_(inst_83342))
{var statearr_83365_83393 = state_83355__$1;(statearr_83365_83393[(1)] = (13));
} else
{var statearr_83366_83394 = state_83355__$1;(statearr_83366_83394[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (2)))
{var inst_83318 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_83319 = (0);var state_83355__$1 = (function (){var statearr_83367 = state_83355;(statearr_83367[(7)] = inst_83319);
(statearr_83367[(9)] = inst_83318);
return statearr_83367;
})();var statearr_83368_83395 = state_83355__$1;(statearr_83368_83395[(2)] = null);
(statearr_83368_83395[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (11)))
{var inst_83319 = (state_83355[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_83355,(10),Object,null,(9));var inst_83328 = chs__$1.call(null,inst_83319);var inst_83329 = done.call(null,inst_83319);var inst_83330 = cljs.core.async.take_BANG_.call(null,inst_83328,inst_83329);var state_83355__$1 = state_83355;var statearr_83369_83396 = state_83355__$1;(statearr_83369_83396[(2)] = inst_83330);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83355__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (9)))
{var inst_83319 = (state_83355[(7)]);var inst_83332 = (state_83355[(2)]);var inst_83333 = (inst_83319 + (1));var inst_83319__$1 = inst_83333;var state_83355__$1 = (function (){var statearr_83370 = state_83355;(statearr_83370[(10)] = inst_83332);
(statearr_83370[(7)] = inst_83319__$1);
return statearr_83370;
})();var statearr_83371_83397 = state_83355__$1;(statearr_83371_83397[(2)] = null);
(statearr_83371_83397[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (5)))
{var inst_83339 = (state_83355[(2)]);var state_83355__$1 = (function (){var statearr_83372 = state_83355;(statearr_83372[(11)] = inst_83339);
return statearr_83372;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83355__$1,(12),dchan);
} else
{if((state_val_83356 === (14)))
{var inst_83341 = (state_83355[(8)]);var inst_83346 = cljs.core.apply.call(null,f,inst_83341);var state_83355__$1 = state_83355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83355__$1,(16),out,inst_83346);
} else
{if((state_val_83356 === (16)))
{var inst_83348 = (state_83355[(2)]);var state_83355__$1 = (function (){var statearr_83373 = state_83355;(statearr_83373[(12)] = inst_83348);
return statearr_83373;
})();var statearr_83374_83398 = state_83355__$1;(statearr_83374_83398[(2)] = null);
(statearr_83374_83398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (10)))
{var inst_83323 = (state_83355[(2)]);var inst_83324 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_83355__$1 = (function (){var statearr_83375 = state_83355;(statearr_83375[(13)] = inst_83323);
return statearr_83375;
})();var statearr_83376_83399 = state_83355__$1;(statearr_83376_83399[(2)] = inst_83324);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83355__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83356 === (8)))
{var inst_83337 = (state_83355[(2)]);var state_83355__$1 = state_83355;var statearr_83377_83400 = state_83355__$1;(statearr_83377_83400[(2)] = inst_83337);
(statearr_83377_83400[(1)] = (5));
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
});})(c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5804__auto__,c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83381[(0)] = state_machine__5805__auto__);
(statearr_83381[(1)] = (1));
return statearr_83381;
});
var state_machine__5805__auto____1 = (function (state_83355){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83355);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83382){if((e83382 instanceof Object))
{var ex__5808__auto__ = e83382;var statearr_83383_83401 = state_83355;(statearr_83383_83401[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83402 = state_83355;
state_83355 = G__83402;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83355){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5821__auto__ = (function (){var statearr_83384 = f__5820__auto__.call(null);(statearr_83384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83385);
return statearr_83384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83385,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___83510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83510,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83510,out){
return (function (state_83486){var state_val_83487 = (state_83486[(1)]);if((state_val_83487 === (7)))
{var inst_83466 = (state_83486[(7)]);var inst_83465 = (state_83486[(8)]);var inst_83465__$1 = (state_83486[(2)]);var inst_83466__$1 = cljs.core.nth.call(null,inst_83465__$1,(0),null);var inst_83467 = cljs.core.nth.call(null,inst_83465__$1,(1),null);var inst_83468 = (inst_83466__$1 == null);var state_83486__$1 = (function (){var statearr_83488 = state_83486;(statearr_83488[(7)] = inst_83466__$1);
(statearr_83488[(9)] = inst_83467);
(statearr_83488[(8)] = inst_83465__$1);
return statearr_83488;
})();if(cljs.core.truth_(inst_83468))
{var statearr_83489_83511 = state_83486__$1;(statearr_83489_83511[(1)] = (8));
} else
{var statearr_83490_83512 = state_83486__$1;(statearr_83490_83512[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (1)))
{var inst_83457 = cljs.core.vec.call(null,chs);var inst_83458 = inst_83457;var state_83486__$1 = (function (){var statearr_83491 = state_83486;(statearr_83491[(10)] = inst_83458);
return statearr_83491;
})();var statearr_83492_83513 = state_83486__$1;(statearr_83492_83513[(2)] = null);
(statearr_83492_83513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (4)))
{var inst_83458 = (state_83486[(10)]);var state_83486__$1 = state_83486;return cljs.core.async.ioc_alts_BANG_.call(null,state_83486__$1,(7),inst_83458);
} else
{if((state_val_83487 === (6)))
{var inst_83482 = (state_83486[(2)]);var state_83486__$1 = state_83486;var statearr_83493_83514 = state_83486__$1;(statearr_83493_83514[(2)] = inst_83482);
(statearr_83493_83514[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (3)))
{var inst_83484 = (state_83486[(2)]);var state_83486__$1 = state_83486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83486__$1,inst_83484);
} else
{if((state_val_83487 === (2)))
{var inst_83458 = (state_83486[(10)]);var inst_83460 = cljs.core.count.call(null,inst_83458);var inst_83461 = (inst_83460 > (0));var state_83486__$1 = state_83486;if(cljs.core.truth_(inst_83461))
{var statearr_83495_83515 = state_83486__$1;(statearr_83495_83515[(1)] = (4));
} else
{var statearr_83496_83516 = state_83486__$1;(statearr_83496_83516[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (11)))
{var inst_83458 = (state_83486[(10)]);var inst_83475 = (state_83486[(2)]);var tmp83494 = inst_83458;var inst_83458__$1 = tmp83494;var state_83486__$1 = (function (){var statearr_83497 = state_83486;(statearr_83497[(10)] = inst_83458__$1);
(statearr_83497[(11)] = inst_83475);
return statearr_83497;
})();var statearr_83498_83517 = state_83486__$1;(statearr_83498_83517[(2)] = null);
(statearr_83498_83517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (9)))
{var inst_83466 = (state_83486[(7)]);var state_83486__$1 = state_83486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83486__$1,(11),out,inst_83466);
} else
{if((state_val_83487 === (5)))
{var inst_83480 = cljs.core.async.close_BANG_.call(null,out);var state_83486__$1 = state_83486;var statearr_83499_83518 = state_83486__$1;(statearr_83499_83518[(2)] = inst_83480);
(statearr_83499_83518[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (10)))
{var inst_83478 = (state_83486[(2)]);var state_83486__$1 = state_83486;var statearr_83500_83519 = state_83486__$1;(statearr_83500_83519[(2)] = inst_83478);
(statearr_83500_83519[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83487 === (8)))
{var inst_83458 = (state_83486[(10)]);var inst_83466 = (state_83486[(7)]);var inst_83467 = (state_83486[(9)]);var inst_83465 = (state_83486[(8)]);var inst_83470 = (function (){var c = inst_83467;var v = inst_83466;var vec__83463 = inst_83465;var cs = inst_83458;return ((function (c,v,vec__83463,cs,inst_83458,inst_83466,inst_83467,inst_83465,state_val_83487,c__5819__auto___83510,out){
return (function (p1__83403_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__83403_SHARP_);
});
;})(c,v,vec__83463,cs,inst_83458,inst_83466,inst_83467,inst_83465,state_val_83487,c__5819__auto___83510,out))
})();var inst_83471 = cljs.core.filterv.call(null,inst_83470,inst_83458);var inst_83458__$1 = inst_83471;var state_83486__$1 = (function (){var statearr_83501 = state_83486;(statearr_83501[(10)] = inst_83458__$1);
return statearr_83501;
})();var statearr_83502_83520 = state_83486__$1;(statearr_83502_83520[(2)] = null);
(statearr_83502_83520[(1)] = (2));
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
});})(c__5819__auto___83510,out))
;return ((function (switch__5804__auto__,c__5819__auto___83510,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83506 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83506[(0)] = state_machine__5805__auto__);
(statearr_83506[(1)] = (1));
return statearr_83506;
});
var state_machine__5805__auto____1 = (function (state_83486){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83486);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83507){if((e83507 instanceof Object))
{var ex__5808__auto__ = e83507;var statearr_83508_83521 = state_83486;(statearr_83508_83521[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83486);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83522 = state_83486;
state_83486 = G__83522;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83486){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83510,out))
})();var state__5821__auto__ = (function (){var statearr_83509 = f__5820__auto__.call(null);(statearr_83509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83510);
return statearr_83509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83510,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___83615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83615,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83615,out){
return (function (state_83592){var state_val_83593 = (state_83592[(1)]);if((state_val_83593 === (7)))
{var inst_83574 = (state_83592[(7)]);var inst_83574__$1 = (state_83592[(2)]);var inst_83575 = (inst_83574__$1 == null);var inst_83576 = cljs.core.not.call(null,inst_83575);var state_83592__$1 = (function (){var statearr_83594 = state_83592;(statearr_83594[(7)] = inst_83574__$1);
return statearr_83594;
})();if(inst_83576)
{var statearr_83595_83616 = state_83592__$1;(statearr_83595_83616[(1)] = (8));
} else
{var statearr_83596_83617 = state_83592__$1;(statearr_83596_83617[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (1)))
{var inst_83569 = (0);var state_83592__$1 = (function (){var statearr_83597 = state_83592;(statearr_83597[(8)] = inst_83569);
return statearr_83597;
})();var statearr_83598_83618 = state_83592__$1;(statearr_83598_83618[(2)] = null);
(statearr_83598_83618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (4)))
{var state_83592__$1 = state_83592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83592__$1,(7),ch);
} else
{if((state_val_83593 === (6)))
{var inst_83587 = (state_83592[(2)]);var state_83592__$1 = state_83592;var statearr_83599_83619 = state_83592__$1;(statearr_83599_83619[(2)] = inst_83587);
(statearr_83599_83619[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (3)))
{var inst_83589 = (state_83592[(2)]);var inst_83590 = cljs.core.async.close_BANG_.call(null,out);var state_83592__$1 = (function (){var statearr_83600 = state_83592;(statearr_83600[(9)] = inst_83589);
return statearr_83600;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83592__$1,inst_83590);
} else
{if((state_val_83593 === (2)))
{var inst_83569 = (state_83592[(8)]);var inst_83571 = (inst_83569 < n);var state_83592__$1 = state_83592;if(cljs.core.truth_(inst_83571))
{var statearr_83601_83620 = state_83592__$1;(statearr_83601_83620[(1)] = (4));
} else
{var statearr_83602_83621 = state_83592__$1;(statearr_83602_83621[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (11)))
{var inst_83569 = (state_83592[(8)]);var inst_83579 = (state_83592[(2)]);var inst_83580 = (inst_83569 + (1));var inst_83569__$1 = inst_83580;var state_83592__$1 = (function (){var statearr_83603 = state_83592;(statearr_83603[(8)] = inst_83569__$1);
(statearr_83603[(10)] = inst_83579);
return statearr_83603;
})();var statearr_83604_83622 = state_83592__$1;(statearr_83604_83622[(2)] = null);
(statearr_83604_83622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (9)))
{var state_83592__$1 = state_83592;var statearr_83605_83623 = state_83592__$1;(statearr_83605_83623[(2)] = null);
(statearr_83605_83623[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (5)))
{var state_83592__$1 = state_83592;var statearr_83606_83624 = state_83592__$1;(statearr_83606_83624[(2)] = null);
(statearr_83606_83624[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (10)))
{var inst_83584 = (state_83592[(2)]);var state_83592__$1 = state_83592;var statearr_83607_83625 = state_83592__$1;(statearr_83607_83625[(2)] = inst_83584);
(statearr_83607_83625[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83593 === (8)))
{var inst_83574 = (state_83592[(7)]);var state_83592__$1 = state_83592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83592__$1,(11),out,inst_83574);
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
});})(c__5819__auto___83615,out))
;return ((function (switch__5804__auto__,c__5819__auto___83615,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83611 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_83611[(0)] = state_machine__5805__auto__);
(statearr_83611[(1)] = (1));
return statearr_83611;
});
var state_machine__5805__auto____1 = (function (state_83592){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83592);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83612){if((e83612 instanceof Object))
{var ex__5808__auto__ = e83612;var statearr_83613_83626 = state_83592;(statearr_83613_83626[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83627 = state_83592;
state_83592 = G__83627;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83592){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83615,out))
})();var state__5821__auto__ = (function (){var statearr_83614 = f__5820__auto__.call(null);(statearr_83614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83615);
return statearr_83614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83615,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t83635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83635 = (function (ch,f,map_LT_,meta83636){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta83636 = meta83636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83635.cljs$lang$type = true;
cljs.core.async.t83635.cljs$lang$ctorStr = "cljs.core.async/t83635";
cljs.core.async.t83635.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t83635");
});
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t83638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83638 = (function (fn1,_,meta83636,ch,f,map_LT_,meta83639){
this.fn1 = fn1;
this._ = _;
this.meta83636 = meta83636;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta83639 = meta83639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83638.cljs$lang$type = true;
cljs.core.async.t83638.cljs$lang$ctorStr = "cljs.core.async/t83638";
cljs.core.async.t83638.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t83638");
});})(___$1))
;
cljs.core.async.t83638.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t83638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t83638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__83628_SHARP_){return f1.call(null,(((p1__83628_SHARP_ == null))?null:self__.f.call(null,p1__83628_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t83638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_83640){var self__ = this;
var _83640__$1 = this;return self__.meta83639;
});})(___$1))
;
cljs.core.async.t83638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_83640,meta83639__$1){var self__ = this;
var _83640__$1 = this;return (new cljs.core.async.t83638(self__.fn1,self__._,self__.meta83636,self__.ch,self__.f,self__.map_LT_,meta83639__$1));
});})(___$1))
;
cljs.core.async.__GT_t83638 = ((function (___$1){
return (function __GT_t83638(fn1__$1,___$2,meta83636__$1,ch__$2,f__$2,map_LT___$2,meta83639){return (new cljs.core.async.t83638(fn1__$1,___$2,meta83636__$1,ch__$2,f__$2,map_LT___$2,meta83639));
});})(___$1))
;
}
return (new cljs.core.async.t83638(fn1,___$1,self__.meta83636,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t83635.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t83635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83637){var self__ = this;
var _83637__$1 = this;return self__.meta83636;
});
cljs.core.async.t83635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83637,meta83636__$1){var self__ = this;
var _83637__$1 = this;return (new cljs.core.async.t83635(self__.ch,self__.f,self__.map_LT_,meta83636__$1));
});
cljs.core.async.__GT_t83635 = (function __GT_t83635(ch__$1,f__$1,map_LT___$1,meta83636){return (new cljs.core.async.t83635(ch__$1,f__$1,map_LT___$1,meta83636));
});
}
return (new cljs.core.async.t83635(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t83644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83644 = (function (ch,f,map_GT_,meta83645){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta83645 = meta83645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83644.cljs$lang$type = true;
cljs.core.async.t83644.cljs$lang$ctorStr = "cljs.core.async/t83644";
cljs.core.async.t83644.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t83644");
});
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t83644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t83644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83646){var self__ = this;
var _83646__$1 = this;return self__.meta83645;
});
cljs.core.async.t83644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83646,meta83645__$1){var self__ = this;
var _83646__$1 = this;return (new cljs.core.async.t83644(self__.ch,self__.f,self__.map_GT_,meta83645__$1));
});
cljs.core.async.__GT_t83644 = (function __GT_t83644(ch__$1,f__$1,map_GT___$1,meta83645){return (new cljs.core.async.t83644(ch__$1,f__$1,map_GT___$1,meta83645));
});
}
return (new cljs.core.async.t83644(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t83650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t83650 = (function (ch,p,filter_GT_,meta83651){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta83651 = meta83651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t83650.cljs$lang$type = true;
cljs.core.async.t83650.cljs$lang$ctorStr = "cljs.core.async/t83650";
cljs.core.async.t83650.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"cljs.core.async/t83650");
});
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t83650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t83650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83652){var self__ = this;
var _83652__$1 = this;return self__.meta83651;
});
cljs.core.async.t83650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83652,meta83651__$1){var self__ = this;
var _83652__$1 = this;return (new cljs.core.async.t83650(self__.ch,self__.p,self__.filter_GT_,meta83651__$1));
});
cljs.core.async.__GT_t83650 = (function __GT_t83650(ch__$1,p__$1,filter_GT___$1,meta83651){return (new cljs.core.async.t83650(ch__$1,p__$1,filter_GT___$1,meta83651));
});
}
return (new cljs.core.async.t83650(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___83735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___83735,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___83735,out){
return (function (state_83714){var state_val_83715 = (state_83714[(1)]);if((state_val_83715 === (7)))
{var inst_83710 = (state_83714[(2)]);var state_83714__$1 = state_83714;var statearr_83716_83736 = state_83714__$1;(statearr_83716_83736[(2)] = inst_83710);
(statearr_83716_83736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (1)))
{var state_83714__$1 = state_83714;var statearr_83717_83737 = state_83714__$1;(statearr_83717_83737[(2)] = null);
(statearr_83717_83737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (4)))
{var inst_83696 = (state_83714[(7)]);var inst_83696__$1 = (state_83714[(2)]);var inst_83697 = (inst_83696__$1 == null);var state_83714__$1 = (function (){var statearr_83718 = state_83714;(statearr_83718[(7)] = inst_83696__$1);
return statearr_83718;
})();if(cljs.core.truth_(inst_83697))
{var statearr_83719_83738 = state_83714__$1;(statearr_83719_83738[(1)] = (5));
} else
{var statearr_83720_83739 = state_83714__$1;(statearr_83720_83739[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (6)))
{var inst_83696 = (state_83714[(7)]);var inst_83701 = p.call(null,inst_83696);var state_83714__$1 = state_83714;if(cljs.core.truth_(inst_83701))
{var statearr_83721_83740 = state_83714__$1;(statearr_83721_83740[(1)] = (8));
} else
{var statearr_83722_83741 = state_83714__$1;(statearr_83722_83741[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (3)))
{var inst_83712 = (state_83714[(2)]);var state_83714__$1 = state_83714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83714__$1,inst_83712);
} else
{if((state_val_83715 === (2)))
{var state_83714__$1 = state_83714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83714__$1,(4),ch);
} else
{if((state_val_83715 === (11)))
{var inst_83704 = (state_83714[(2)]);var state_83714__$1 = state_83714;var statearr_83723_83742 = state_83714__$1;(statearr_83723_83742[(2)] = inst_83704);
(statearr_83723_83742[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (9)))
{var state_83714__$1 = state_83714;var statearr_83724_83743 = state_83714__$1;(statearr_83724_83743[(2)] = null);
(statearr_83724_83743[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (5)))
{var inst_83699 = cljs.core.async.close_BANG_.call(null,out);var state_83714__$1 = state_83714;var statearr_83725_83744 = state_83714__$1;(statearr_83725_83744[(2)] = inst_83699);
(statearr_83725_83744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (10)))
{var inst_83707 = (state_83714[(2)]);var state_83714__$1 = (function (){var statearr_83726 = state_83714;(statearr_83726[(8)] = inst_83707);
return statearr_83726;
})();var statearr_83727_83745 = state_83714__$1;(statearr_83727_83745[(2)] = null);
(statearr_83727_83745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83715 === (8)))
{var inst_83696 = (state_83714[(7)]);var state_83714__$1 = state_83714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83714__$1,(11),out,inst_83696);
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
});})(c__5819__auto___83735,out))
;return ((function (switch__5804__auto__,c__5819__auto___83735,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_83731 = [null,null,null,null,null,null,null,null,null];(statearr_83731[(0)] = state_machine__5805__auto__);
(statearr_83731[(1)] = (1));
return statearr_83731;
});
var state_machine__5805__auto____1 = (function (state_83714){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83732){if((e83732 instanceof Object))
{var ex__5808__auto__ = e83732;var statearr_83733_83746 = state_83714;(statearr_83733_83746[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83732;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83747 = state_83714;
state_83714 = G__83747;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83714){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___83735,out))
})();var state__5821__auto__ = (function (){var statearr_83734 = f__5820__auto__.call(null);(statearr_83734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___83735);
return statearr_83734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___83735,out))
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
return (function (state_83913){var state_val_83914 = (state_83913[(1)]);if((state_val_83914 === (7)))
{var inst_83909 = (state_83913[(2)]);var state_83913__$1 = state_83913;var statearr_83915_83956 = state_83913__$1;(statearr_83915_83956[(2)] = inst_83909);
(statearr_83915_83956[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (20)))
{var inst_83879 = (state_83913[(7)]);var inst_83890 = (state_83913[(2)]);var inst_83891 = cljs.core.next.call(null,inst_83879);var inst_83865 = inst_83891;var inst_83866 = null;var inst_83867 = (0);var inst_83868 = (0);var state_83913__$1 = (function (){var statearr_83916 = state_83913;(statearr_83916[(8)] = inst_83866);
(statearr_83916[(9)] = inst_83890);
(statearr_83916[(10)] = inst_83867);
(statearr_83916[(11)] = inst_83868);
(statearr_83916[(12)] = inst_83865);
return statearr_83916;
})();var statearr_83917_83957 = state_83913__$1;(statearr_83917_83957[(2)] = null);
(statearr_83917_83957[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (1)))
{var state_83913__$1 = state_83913;var statearr_83918_83958 = state_83913__$1;(statearr_83918_83958[(2)] = null);
(statearr_83918_83958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (4)))
{var inst_83854 = (state_83913[(13)]);var inst_83854__$1 = (state_83913[(2)]);var inst_83855 = (inst_83854__$1 == null);var state_83913__$1 = (function (){var statearr_83919 = state_83913;(statearr_83919[(13)] = inst_83854__$1);
return statearr_83919;
})();if(cljs.core.truth_(inst_83855))
{var statearr_83920_83959 = state_83913__$1;(statearr_83920_83959[(1)] = (5));
} else
{var statearr_83921_83960 = state_83913__$1;(statearr_83921_83960[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (15)))
{var state_83913__$1 = state_83913;var statearr_83925_83961 = state_83913__$1;(statearr_83925_83961[(2)] = null);
(statearr_83925_83961[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (21)))
{var state_83913__$1 = state_83913;var statearr_83926_83962 = state_83913__$1;(statearr_83926_83962[(2)] = null);
(statearr_83926_83962[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (13)))
{var inst_83866 = (state_83913[(8)]);var inst_83867 = (state_83913[(10)]);var inst_83868 = (state_83913[(11)]);var inst_83865 = (state_83913[(12)]);var inst_83875 = (state_83913[(2)]);var inst_83876 = (inst_83868 + (1));var tmp83922 = inst_83866;var tmp83923 = inst_83867;var tmp83924 = inst_83865;var inst_83865__$1 = tmp83924;var inst_83866__$1 = tmp83922;var inst_83867__$1 = tmp83923;var inst_83868__$1 = inst_83876;var state_83913__$1 = (function (){var statearr_83927 = state_83913;(statearr_83927[(8)] = inst_83866__$1);
(statearr_83927[(10)] = inst_83867__$1);
(statearr_83927[(14)] = inst_83875);
(statearr_83927[(11)] = inst_83868__$1);
(statearr_83927[(12)] = inst_83865__$1);
return statearr_83927;
})();var statearr_83928_83963 = state_83913__$1;(statearr_83928_83963[(2)] = null);
(statearr_83928_83963[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (22)))
{var state_83913__$1 = state_83913;var statearr_83929_83964 = state_83913__$1;(statearr_83929_83964[(2)] = null);
(statearr_83929_83964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (6)))
{var inst_83854 = (state_83913[(13)]);var inst_83863 = f.call(null,inst_83854);var inst_83864 = cljs.core.seq.call(null,inst_83863);var inst_83865 = inst_83864;var inst_83866 = null;var inst_83867 = (0);var inst_83868 = (0);var state_83913__$1 = (function (){var statearr_83930 = state_83913;(statearr_83930[(8)] = inst_83866);
(statearr_83930[(10)] = inst_83867);
(statearr_83930[(11)] = inst_83868);
(statearr_83930[(12)] = inst_83865);
return statearr_83930;
})();var statearr_83931_83965 = state_83913__$1;(statearr_83931_83965[(2)] = null);
(statearr_83931_83965[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (17)))
{var inst_83879 = (state_83913[(7)]);var inst_83883 = cljs.core.chunk_first.call(null,inst_83879);var inst_83884 = cljs.core.chunk_rest.call(null,inst_83879);var inst_83885 = cljs.core.count.call(null,inst_83883);var inst_83865 = inst_83884;var inst_83866 = inst_83883;var inst_83867 = inst_83885;var inst_83868 = (0);var state_83913__$1 = (function (){var statearr_83932 = state_83913;(statearr_83932[(8)] = inst_83866);
(statearr_83932[(10)] = inst_83867);
(statearr_83932[(11)] = inst_83868);
(statearr_83932[(12)] = inst_83865);
return statearr_83932;
})();var statearr_83933_83966 = state_83913__$1;(statearr_83933_83966[(2)] = null);
(statearr_83933_83966[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (3)))
{var inst_83911 = (state_83913[(2)]);var state_83913__$1 = state_83913;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83913__$1,inst_83911);
} else
{if((state_val_83914 === (12)))
{var inst_83899 = (state_83913[(2)]);var state_83913__$1 = state_83913;var statearr_83934_83967 = state_83913__$1;(statearr_83934_83967[(2)] = inst_83899);
(statearr_83934_83967[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (2)))
{var state_83913__$1 = state_83913;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83913__$1,(4),in$);
} else
{if((state_val_83914 === (23)))
{var inst_83907 = (state_83913[(2)]);var state_83913__$1 = state_83913;var statearr_83935_83968 = state_83913__$1;(statearr_83935_83968[(2)] = inst_83907);
(statearr_83935_83968[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (19)))
{var inst_83894 = (state_83913[(2)]);var state_83913__$1 = state_83913;var statearr_83936_83969 = state_83913__$1;(statearr_83936_83969[(2)] = inst_83894);
(statearr_83936_83969[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (11)))
{var inst_83879 = (state_83913[(7)]);var inst_83865 = (state_83913[(12)]);var inst_83879__$1 = cljs.core.seq.call(null,inst_83865);var state_83913__$1 = (function (){var statearr_83937 = state_83913;(statearr_83937[(7)] = inst_83879__$1);
return statearr_83937;
})();if(inst_83879__$1)
{var statearr_83938_83970 = state_83913__$1;(statearr_83938_83970[(1)] = (14));
} else
{var statearr_83939_83971 = state_83913__$1;(statearr_83939_83971[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (9)))
{var inst_83901 = (state_83913[(2)]);var inst_83902 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_83913__$1 = (function (){var statearr_83940 = state_83913;(statearr_83940[(15)] = inst_83901);
return statearr_83940;
})();if(cljs.core.truth_(inst_83902))
{var statearr_83941_83972 = state_83913__$1;(statearr_83941_83972[(1)] = (21));
} else
{var statearr_83942_83973 = state_83913__$1;(statearr_83942_83973[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (5)))
{var inst_83857 = cljs.core.async.close_BANG_.call(null,out);var state_83913__$1 = state_83913;var statearr_83943_83974 = state_83913__$1;(statearr_83943_83974[(2)] = inst_83857);
(statearr_83943_83974[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (14)))
{var inst_83879 = (state_83913[(7)]);var inst_83881 = cljs.core.chunked_seq_QMARK_.call(null,inst_83879);var state_83913__$1 = state_83913;if(inst_83881)
{var statearr_83944_83975 = state_83913__$1;(statearr_83944_83975[(1)] = (17));
} else
{var statearr_83945_83976 = state_83913__$1;(statearr_83945_83976[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (16)))
{var inst_83897 = (state_83913[(2)]);var state_83913__$1 = state_83913;var statearr_83946_83977 = state_83913__$1;(statearr_83946_83977[(2)] = inst_83897);
(statearr_83946_83977[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83914 === (10)))
{var inst_83866 = (state_83913[(8)]);var inst_83868 = (state_83913[(11)]);var inst_83873 = cljs.core._nth.call(null,inst_83866,inst_83868);var state_83913__$1 = state_83913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83913__$1,(13),out,inst_83873);
} else
{if((state_val_83914 === (18)))
{var inst_83879 = (state_83913[(7)]);var inst_83888 = cljs.core.first.call(null,inst_83879);var state_83913__$1 = state_83913;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83913__$1,(20),out,inst_83888);
} else
{if((state_val_83914 === (8)))
{var inst_83867 = (state_83913[(10)]);var inst_83868 = (state_83913[(11)]);var inst_83870 = (inst_83868 < inst_83867);var inst_83871 = inst_83870;var state_83913__$1 = state_83913;if(cljs.core.truth_(inst_83871))
{var statearr_83947_83978 = state_83913__$1;(statearr_83947_83978[(1)] = (10));
} else
{var statearr_83948_83979 = state_83913__$1;(statearr_83948_83979[(1)] = (11));
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
var state_machine__5805__auto____0 = (function (){var statearr_83952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_83952[(0)] = state_machine__5805__auto__);
(statearr_83952[(1)] = (1));
return statearr_83952;
});
var state_machine__5805__auto____1 = (function (state_83913){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_83913);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e83953){if((e83953 instanceof Object))
{var ex__5808__auto__ = e83953;var statearr_83954_83980 = state_83913;(statearr_83954_83980[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83913);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e83953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83981 = state_83913;
state_83913 = G__83981;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_83913){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_83913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__))
})();var state__5821__auto__ = (function (){var statearr_83955 = f__5820__auto__.call(null);(statearr_83955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_83955;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___84078 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___84078,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___84078,out){
return (function (state_84053){var state_val_84054 = (state_84053[(1)]);if((state_val_84054 === (7)))
{var inst_84048 = (state_84053[(2)]);var state_84053__$1 = state_84053;var statearr_84055_84079 = state_84053__$1;(statearr_84055_84079[(2)] = inst_84048);
(statearr_84055_84079[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (1)))
{var inst_84030 = null;var state_84053__$1 = (function (){var statearr_84056 = state_84053;(statearr_84056[(7)] = inst_84030);
return statearr_84056;
})();var statearr_84057_84080 = state_84053__$1;(statearr_84057_84080[(2)] = null);
(statearr_84057_84080[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (4)))
{var inst_84033 = (state_84053[(8)]);var inst_84033__$1 = (state_84053[(2)]);var inst_84034 = (inst_84033__$1 == null);var inst_84035 = cljs.core.not.call(null,inst_84034);var state_84053__$1 = (function (){var statearr_84058 = state_84053;(statearr_84058[(8)] = inst_84033__$1);
return statearr_84058;
})();if(inst_84035)
{var statearr_84059_84081 = state_84053__$1;(statearr_84059_84081[(1)] = (5));
} else
{var statearr_84060_84082 = state_84053__$1;(statearr_84060_84082[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (6)))
{var state_84053__$1 = state_84053;var statearr_84061_84083 = state_84053__$1;(statearr_84061_84083[(2)] = null);
(statearr_84061_84083[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (3)))
{var inst_84050 = (state_84053[(2)]);var inst_84051 = cljs.core.async.close_BANG_.call(null,out);var state_84053__$1 = (function (){var statearr_84062 = state_84053;(statearr_84062[(9)] = inst_84050);
return statearr_84062;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84053__$1,inst_84051);
} else
{if((state_val_84054 === (2)))
{var state_84053__$1 = state_84053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84053__$1,(4),ch);
} else
{if((state_val_84054 === (11)))
{var inst_84033 = (state_84053[(8)]);var inst_84042 = (state_84053[(2)]);var inst_84030 = inst_84033;var state_84053__$1 = (function (){var statearr_84063 = state_84053;(statearr_84063[(7)] = inst_84030);
(statearr_84063[(10)] = inst_84042);
return statearr_84063;
})();var statearr_84064_84084 = state_84053__$1;(statearr_84064_84084[(2)] = null);
(statearr_84064_84084[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (9)))
{var inst_84033 = (state_84053[(8)]);var state_84053__$1 = state_84053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84053__$1,(11),out,inst_84033);
} else
{if((state_val_84054 === (5)))
{var inst_84030 = (state_84053[(7)]);var inst_84033 = (state_84053[(8)]);var inst_84037 = cljs.core._EQ_.call(null,inst_84033,inst_84030);var state_84053__$1 = state_84053;if(inst_84037)
{var statearr_84066_84085 = state_84053__$1;(statearr_84066_84085[(1)] = (8));
} else
{var statearr_84067_84086 = state_84053__$1;(statearr_84067_84086[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (10)))
{var inst_84045 = (state_84053[(2)]);var state_84053__$1 = state_84053;var statearr_84068_84087 = state_84053__$1;(statearr_84068_84087[(2)] = inst_84045);
(statearr_84068_84087[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84054 === (8)))
{var inst_84030 = (state_84053[(7)]);var tmp84065 = inst_84030;var inst_84030__$1 = tmp84065;var state_84053__$1 = (function (){var statearr_84069 = state_84053;(statearr_84069[(7)] = inst_84030__$1);
return statearr_84069;
})();var statearr_84070_84088 = state_84053__$1;(statearr_84070_84088[(2)] = null);
(statearr_84070_84088[(1)] = (2));
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
});})(c__5819__auto___84078,out))
;return ((function (switch__5804__auto__,c__5819__auto___84078,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_84074 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84074[(0)] = state_machine__5805__auto__);
(statearr_84074[(1)] = (1));
return statearr_84074;
});
var state_machine__5805__auto____1 = (function (state_84053){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_84053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e84075){if((e84075 instanceof Object))
{var ex__5808__auto__ = e84075;var statearr_84076_84089 = state_84053;(statearr_84076_84089[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e84075;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84090 = state_84053;
state_84053 = G__84090;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_84053){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_84053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___84078,out))
})();var state__5821__auto__ = (function (){var statearr_84077 = f__5820__auto__.call(null);(statearr_84077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___84078);
return statearr_84077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___84078,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___84225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___84225,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___84225,out){
return (function (state_84195){var state_val_84196 = (state_84195[(1)]);if((state_val_84196 === (7)))
{var inst_84191 = (state_84195[(2)]);var state_84195__$1 = state_84195;var statearr_84197_84226 = state_84195__$1;(statearr_84197_84226[(2)] = inst_84191);
(statearr_84197_84226[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (1)))
{var inst_84158 = (new Array(n));var inst_84159 = inst_84158;var inst_84160 = (0);var state_84195__$1 = (function (){var statearr_84198 = state_84195;(statearr_84198[(7)] = inst_84160);
(statearr_84198[(8)] = inst_84159);
return statearr_84198;
})();var statearr_84199_84227 = state_84195__$1;(statearr_84199_84227[(2)] = null);
(statearr_84199_84227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (4)))
{var inst_84163 = (state_84195[(9)]);var inst_84163__$1 = (state_84195[(2)]);var inst_84164 = (inst_84163__$1 == null);var inst_84165 = cljs.core.not.call(null,inst_84164);var state_84195__$1 = (function (){var statearr_84200 = state_84195;(statearr_84200[(9)] = inst_84163__$1);
return statearr_84200;
})();if(inst_84165)
{var statearr_84201_84228 = state_84195__$1;(statearr_84201_84228[(1)] = (5));
} else
{var statearr_84202_84229 = state_84195__$1;(statearr_84202_84229[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (15)))
{var inst_84185 = (state_84195[(2)]);var state_84195__$1 = state_84195;var statearr_84203_84230 = state_84195__$1;(statearr_84203_84230[(2)] = inst_84185);
(statearr_84203_84230[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (13)))
{var state_84195__$1 = state_84195;var statearr_84204_84231 = state_84195__$1;(statearr_84204_84231[(2)] = null);
(statearr_84204_84231[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (6)))
{var inst_84160 = (state_84195[(7)]);var inst_84181 = (inst_84160 > (0));var state_84195__$1 = state_84195;if(cljs.core.truth_(inst_84181))
{var statearr_84205_84232 = state_84195__$1;(statearr_84205_84232[(1)] = (12));
} else
{var statearr_84206_84233 = state_84195__$1;(statearr_84206_84233[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (3)))
{var inst_84193 = (state_84195[(2)]);var state_84195__$1 = state_84195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84195__$1,inst_84193);
} else
{if((state_val_84196 === (12)))
{var inst_84159 = (state_84195[(8)]);var inst_84183 = cljs.core.vec.call(null,inst_84159);var state_84195__$1 = state_84195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84195__$1,(15),out,inst_84183);
} else
{if((state_val_84196 === (2)))
{var state_84195__$1 = state_84195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84195__$1,(4),ch);
} else
{if((state_val_84196 === (11)))
{var inst_84175 = (state_84195[(2)]);var inst_84176 = (new Array(n));var inst_84159 = inst_84176;var inst_84160 = (0);var state_84195__$1 = (function (){var statearr_84207 = state_84195;(statearr_84207[(7)] = inst_84160);
(statearr_84207[(10)] = inst_84175);
(statearr_84207[(8)] = inst_84159);
return statearr_84207;
})();var statearr_84208_84234 = state_84195__$1;(statearr_84208_84234[(2)] = null);
(statearr_84208_84234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (9)))
{var inst_84159 = (state_84195[(8)]);var inst_84173 = cljs.core.vec.call(null,inst_84159);var state_84195__$1 = state_84195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84195__$1,(11),out,inst_84173);
} else
{if((state_val_84196 === (5)))
{var inst_84168 = (state_84195[(11)]);var inst_84160 = (state_84195[(7)]);var inst_84163 = (state_84195[(9)]);var inst_84159 = (state_84195[(8)]);var inst_84167 = (inst_84159[inst_84160] = inst_84163);var inst_84168__$1 = (inst_84160 + (1));var inst_84169 = (inst_84168__$1 < n);var state_84195__$1 = (function (){var statearr_84209 = state_84195;(statearr_84209[(11)] = inst_84168__$1);
(statearr_84209[(12)] = inst_84167);
return statearr_84209;
})();if(cljs.core.truth_(inst_84169))
{var statearr_84210_84235 = state_84195__$1;(statearr_84210_84235[(1)] = (8));
} else
{var statearr_84211_84236 = state_84195__$1;(statearr_84211_84236[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (14)))
{var inst_84188 = (state_84195[(2)]);var inst_84189 = cljs.core.async.close_BANG_.call(null,out);var state_84195__$1 = (function (){var statearr_84213 = state_84195;(statearr_84213[(13)] = inst_84188);
return statearr_84213;
})();var statearr_84214_84237 = state_84195__$1;(statearr_84214_84237[(2)] = inst_84189);
(statearr_84214_84237[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (10)))
{var inst_84179 = (state_84195[(2)]);var state_84195__$1 = state_84195;var statearr_84215_84238 = state_84195__$1;(statearr_84215_84238[(2)] = inst_84179);
(statearr_84215_84238[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84196 === (8)))
{var inst_84168 = (state_84195[(11)]);var inst_84159 = (state_84195[(8)]);var tmp84212 = inst_84159;var inst_84159__$1 = tmp84212;var inst_84160 = inst_84168;var state_84195__$1 = (function (){var statearr_84216 = state_84195;(statearr_84216[(7)] = inst_84160);
(statearr_84216[(8)] = inst_84159__$1);
return statearr_84216;
})();var statearr_84217_84239 = state_84195__$1;(statearr_84217_84239[(2)] = null);
(statearr_84217_84239[(1)] = (2));
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
});})(c__5819__auto___84225,out))
;return ((function (switch__5804__auto__,c__5819__auto___84225,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_84221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_84221[(0)] = state_machine__5805__auto__);
(statearr_84221[(1)] = (1));
return statearr_84221;
});
var state_machine__5805__auto____1 = (function (state_84195){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_84195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e84222){if((e84222 instanceof Object))
{var ex__5808__auto__ = e84222;var statearr_84223_84240 = state_84195;(statearr_84223_84240[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e84222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84241 = state_84195;
state_84195 = G__84241;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_84195){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_84195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___84225,out))
})();var state__5821__auto__ = (function (){var statearr_84224 = f__5820__auto__.call(null);(statearr_84224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___84225);
return statearr_84224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___84225,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5819__auto___84384 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto___84384,out){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto___84384,out){
return (function (state_84354){var state_val_84355 = (state_84354[(1)]);if((state_val_84355 === (7)))
{var inst_84350 = (state_84354[(2)]);var state_84354__$1 = state_84354;var statearr_84356_84385 = state_84354__$1;(statearr_84356_84385[(2)] = inst_84350);
(statearr_84356_84385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (1)))
{var inst_84313 = [];var inst_84314 = inst_84313;var inst_84315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_84354__$1 = (function (){var statearr_84357 = state_84354;(statearr_84357[(7)] = inst_84315);
(statearr_84357[(8)] = inst_84314);
return statearr_84357;
})();var statearr_84358_84386 = state_84354__$1;(statearr_84358_84386[(2)] = null);
(statearr_84358_84386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (4)))
{var inst_84318 = (state_84354[(9)]);var inst_84318__$1 = (state_84354[(2)]);var inst_84319 = (inst_84318__$1 == null);var inst_84320 = cljs.core.not.call(null,inst_84319);var state_84354__$1 = (function (){var statearr_84359 = state_84354;(statearr_84359[(9)] = inst_84318__$1);
return statearr_84359;
})();if(inst_84320)
{var statearr_84360_84387 = state_84354__$1;(statearr_84360_84387[(1)] = (5));
} else
{var statearr_84361_84388 = state_84354__$1;(statearr_84361_84388[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (15)))
{var inst_84344 = (state_84354[(2)]);var state_84354__$1 = state_84354;var statearr_84362_84389 = state_84354__$1;(statearr_84362_84389[(2)] = inst_84344);
(statearr_84362_84389[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (13)))
{var state_84354__$1 = state_84354;var statearr_84363_84390 = state_84354__$1;(statearr_84363_84390[(2)] = null);
(statearr_84363_84390[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (6)))
{var inst_84314 = (state_84354[(8)]);var inst_84339 = inst_84314.length;var inst_84340 = (inst_84339 > (0));var state_84354__$1 = state_84354;if(cljs.core.truth_(inst_84340))
{var statearr_84364_84391 = state_84354__$1;(statearr_84364_84391[(1)] = (12));
} else
{var statearr_84365_84392 = state_84354__$1;(statearr_84365_84392[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (3)))
{var inst_84352 = (state_84354[(2)]);var state_84354__$1 = state_84354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84354__$1,inst_84352);
} else
{if((state_val_84355 === (12)))
{var inst_84314 = (state_84354[(8)]);var inst_84342 = cljs.core.vec.call(null,inst_84314);var state_84354__$1 = state_84354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84354__$1,(15),out,inst_84342);
} else
{if((state_val_84355 === (2)))
{var state_84354__$1 = state_84354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84354__$1,(4),ch);
} else
{if((state_val_84355 === (11)))
{var inst_84322 = (state_84354[(10)]);var inst_84318 = (state_84354[(9)]);var inst_84332 = (state_84354[(2)]);var inst_84333 = [];var inst_84334 = inst_84333.push(inst_84318);var inst_84314 = inst_84333;var inst_84315 = inst_84322;var state_84354__$1 = (function (){var statearr_84366 = state_84354;(statearr_84366[(7)] = inst_84315);
(statearr_84366[(11)] = inst_84332);
(statearr_84366[(8)] = inst_84314);
(statearr_84366[(12)] = inst_84334);
return statearr_84366;
})();var statearr_84367_84393 = state_84354__$1;(statearr_84367_84393[(2)] = null);
(statearr_84367_84393[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (9)))
{var inst_84314 = (state_84354[(8)]);var inst_84330 = cljs.core.vec.call(null,inst_84314);var state_84354__$1 = state_84354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84354__$1,(11),out,inst_84330);
} else
{if((state_val_84355 === (5)))
{var inst_84322 = (state_84354[(10)]);var inst_84315 = (state_84354[(7)]);var inst_84318 = (state_84354[(9)]);var inst_84322__$1 = f.call(null,inst_84318);var inst_84323 = cljs.core._EQ_.call(null,inst_84322__$1,inst_84315);var inst_84324 = cljs.core.keyword_identical_QMARK_.call(null,inst_84315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_84325 = (inst_84323) || (inst_84324);var state_84354__$1 = (function (){var statearr_84368 = state_84354;(statearr_84368[(10)] = inst_84322__$1);
return statearr_84368;
})();if(cljs.core.truth_(inst_84325))
{var statearr_84369_84394 = state_84354__$1;(statearr_84369_84394[(1)] = (8));
} else
{var statearr_84370_84395 = state_84354__$1;(statearr_84370_84395[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (14)))
{var inst_84347 = (state_84354[(2)]);var inst_84348 = cljs.core.async.close_BANG_.call(null,out);var state_84354__$1 = (function (){var statearr_84372 = state_84354;(statearr_84372[(13)] = inst_84347);
return statearr_84372;
})();var statearr_84373_84396 = state_84354__$1;(statearr_84373_84396[(2)] = inst_84348);
(statearr_84373_84396[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (10)))
{var inst_84337 = (state_84354[(2)]);var state_84354__$1 = state_84354;var statearr_84374_84397 = state_84354__$1;(statearr_84374_84397[(2)] = inst_84337);
(statearr_84374_84397[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84355 === (8)))
{var inst_84322 = (state_84354[(10)]);var inst_84318 = (state_84354[(9)]);var inst_84314 = (state_84354[(8)]);var inst_84327 = inst_84314.push(inst_84318);var tmp84371 = inst_84314;var inst_84314__$1 = tmp84371;var inst_84315 = inst_84322;var state_84354__$1 = (function (){var statearr_84375 = state_84354;(statearr_84375[(7)] = inst_84315);
(statearr_84375[(14)] = inst_84327);
(statearr_84375[(8)] = inst_84314__$1);
return statearr_84375;
})();var statearr_84376_84398 = state_84354__$1;(statearr_84376_84398[(2)] = null);
(statearr_84376_84398[(1)] = (2));
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
});})(c__5819__auto___84384,out))
;return ((function (switch__5804__auto__,c__5819__auto___84384,out){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_84380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_84380[(0)] = state_machine__5805__auto__);
(statearr_84380[(1)] = (1));
return statearr_84380;
});
var state_machine__5805__auto____1 = (function (state_84354){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_84354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e84381){if((e84381 instanceof Object))
{var ex__5808__auto__ = e84381;var statearr_84382_84399 = state_84354;(statearr_84382_84399[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e84381;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84400 = state_84354;
state_84354 = G__84400;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_84354){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_84354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto___84384,out))
})();var state__5821__auto__ = (function (){var statearr_84383 = f__5820__auto__.call(null);(statearr_84383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto___84384);
return statearr_84383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto___84384,out))
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