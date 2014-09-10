// Compiled by ClojureScript 0.0-2268
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t40111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40111 = (function (f,fn_handler,meta40112){
this.f = f;
this.fn_handler = fn_handler;
this.meta40112 = meta40112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40111.cljs$lang$type = true;
cljs.core.async.t40111.cljs$lang$ctorStr = "cljs.core.async/t40111";
cljs.core.async.t40111.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40111");
});
cljs.core.async.t40111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t40111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t40111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40113){var self__ = this;
var _40113__$1 = this;return self__.meta40112;
});
cljs.core.async.t40111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40113,meta40112__$1){var self__ = this;
var _40113__$1 = this;return (new cljs.core.async.t40111(self__.f,self__.fn_handler,meta40112__$1));
});
cljs.core.async.__GT_t40111 = (function __GT_t40111(f__$1,fn_handler__$1,meta40112){return (new cljs.core.async.t40111(f__$1,fn_handler__$1,meta40112));
});
}
return (new cljs.core.async.t40111(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__40115 = buff;if(G__40115)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__40115.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__40115.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__40115);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_40116 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40116) : fn1.call(null,val_40116));
} else
{cljs.core.async.impl.dispatch.run(((function (val_40116,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40116) : fn1.call(null,val_40116));
});})(val_40116,ret))
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
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
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___40117 = n;var x_40118 = (0);while(true){
if((x_40118 < n__4397__auto___40117))
{(a[x_40118] = (0));
{
var G__40119 = (x_40118 + (1));
x_40118 = G__40119;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__40120 = (i + (1));
i = G__40120;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t40124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40124 = (function (flag,alt_flag,meta40125){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta40125 = meta40125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40124.cljs$lang$type = true;
cljs.core.async.t40124.cljs$lang$ctorStr = "cljs.core.async/t40124";
cljs.core.async.t40124.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40124");
});})(flag))
;
cljs.core.async.t40124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t40124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t40124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40126){var self__ = this;
var _40126__$1 = this;return self__.meta40125;
});})(flag))
;
cljs.core.async.t40124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40126,meta40125__$1){var self__ = this;
var _40126__$1 = this;return (new cljs.core.async.t40124(self__.flag,self__.alt_flag,meta40125__$1));
});})(flag))
;
cljs.core.async.__GT_t40124 = ((function (flag){
return (function __GT_t40124(flag__$1,alt_flag__$1,meta40125){return (new cljs.core.async.t40124(flag__$1,alt_flag__$1,meta40125));
});})(flag))
;
}
return (new cljs.core.async.t40124(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t40130 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40130 = (function (cb,flag,alt_handler,meta40131){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta40131 = meta40131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40130.cljs$lang$type = true;
cljs.core.async.t40130.cljs$lang$ctorStr = "cljs.core.async/t40130";
cljs.core.async.t40130.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40130");
});
cljs.core.async.t40130.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t40130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t40130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40132){var self__ = this;
var _40132__$1 = this;return self__.meta40131;
});
cljs.core.async.t40130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40132,meta40131__$1){var self__ = this;
var _40132__$1 = this;return (new cljs.core.async.t40130(self__.cb,self__.flag,self__.alt_handler,meta40131__$1));
});
cljs.core.async.__GT_t40130 = (function __GT_t40130(cb__$1,flag__$1,alt_handler__$1,meta40131){return (new cljs.core.async.t40130(cb__$1,flag__$1,alt_handler__$1,meta40131));
});
}
return (new cljs.core.async.t40130(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$793.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40133_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40133_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40133_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__40134 = (i + (1));
i = G__40134;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$779))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3529__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$779], null));
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
var alts_BANG___delegate = function (ports,p__40135){var map__40137 = p__40135;var map__40137__$1 = ((cljs.core.seq_QMARK_(map__40137))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40137):map__40137);var opts = map__40137__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__40135 = null;if (arguments.length > 1) {
  p__40135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__40135);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__40138){
var ports = cljs.core.first(arglist__40138);
var p__40135 = cljs.core.rest(arglist__40138);
return alts_BANG___delegate(ports,p__40135);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t40146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40146 = (function (ch,f,map_LT_,meta40147){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40147 = meta40147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40146.cljs$lang$type = true;
cljs.core.async.t40146.cljs$lang$ctorStr = "cljs.core.async/t40146";
cljs.core.async.t40146.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40146");
});
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t40149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40149 = (function (fn1,_,meta40147,ch,f,map_LT_,meta40150){
this.fn1 = fn1;
this._ = _;
this.meta40147 = meta40147;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40150 = meta40150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40149.cljs$lang$type = true;
cljs.core.async.t40149.cljs$lang$ctorStr = "cljs.core.async/t40149";
cljs.core.async.t40149.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40149");
});})(___$1))
;
cljs.core.async.t40149.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t40149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t40149.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t40149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__40139_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__40139_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40139_SHARP_) : self__.f.call(null,p1__40139_SHARP_)))) : f1.call(null,(((p1__40139_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40139_SHARP_) : self__.f.call(null,p1__40139_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t40149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40151){var self__ = this;
var _40151__$1 = this;return self__.meta40150;
});})(___$1))
;
cljs.core.async.t40149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40151,meta40150__$1){var self__ = this;
var _40151__$1 = this;return (new cljs.core.async.t40149(self__.fn1,self__._,self__.meta40147,self__.ch,self__.f,self__.map_LT_,meta40150__$1));
});})(___$1))
;
cljs.core.async.__GT_t40149 = ((function (___$1){
return (function __GT_t40149(fn1__$1,___$2,meta40147__$1,ch__$2,f__$2,map_LT___$2,meta40150){return (new cljs.core.async.t40149(fn1__$1,___$2,meta40147__$1,ch__$2,f__$2,map_LT___$2,meta40150));
});})(___$1))
;
}
return (new cljs.core.async.t40149(fn1,___$1,self__.meta40147,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40148){var self__ = this;
var _40148__$1 = this;return self__.meta40147;
});
cljs.core.async.t40146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40148,meta40147__$1){var self__ = this;
var _40148__$1 = this;return (new cljs.core.async.t40146(self__.ch,self__.f,self__.map_LT_,meta40147__$1));
});
cljs.core.async.__GT_t40146 = (function __GT_t40146(ch__$1,f__$1,map_LT___$1,meta40147){return (new cljs.core.async.t40146(ch__$1,f__$1,map_LT___$1,meta40147));
});
}
return (new cljs.core.async.t40146(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t40155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40155 = (function (ch,f,map_GT_,meta40156){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40156 = meta40156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40155.cljs$lang$type = true;
cljs.core.async.t40155.cljs$lang$ctorStr = "cljs.core.async/t40155";
cljs.core.async.t40155.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40155");
});
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40157){var self__ = this;
var _40157__$1 = this;return self__.meta40156;
});
cljs.core.async.t40155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40157,meta40156__$1){var self__ = this;
var _40157__$1 = this;return (new cljs.core.async.t40155(self__.ch,self__.f,self__.map_GT_,meta40156__$1));
});
cljs.core.async.__GT_t40155 = (function __GT_t40155(ch__$1,f__$1,map_GT___$1,meta40156){return (new cljs.core.async.t40155(ch__$1,f__$1,map_GT___$1,meta40156));
});
}
return (new cljs.core.async.t40155(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t40161 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40161 = (function (ch,p,filter_GT_,meta40162){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40162 = meta40162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40161.cljs$lang$type = true;
cljs.core.async.t40161.cljs$lang$ctorStr = "cljs.core.async/t40161";
cljs.core.async.t40161.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t40161");
});
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t40161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40163){var self__ = this;
var _40163__$1 = this;return self__.meta40162;
});
cljs.core.async.t40161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40163,meta40162__$1){var self__ = this;
var _40163__$1 = this;return (new cljs.core.async.t40161(self__.ch,self__.p,self__.filter_GT_,meta40162__$1));
});
cljs.core.async.__GT_t40161 = (function __GT_t40161(ch__$1,p__$1,filter_GT___$1,meta40162){return (new cljs.core.async.t40161(ch__$1,p__$1,filter_GT___$1,meta40162));
});
}
return (new cljs.core.async.t40161(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___40246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___40246,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___40246,out){
return (function (state_40225){var state_val_40226 = (state_40225[(1)]);if((state_val_40226 === (7)))
{var inst_40221 = (state_40225[(2)]);var state_40225__$1 = state_40225;var statearr_40227_40247 = state_40225__$1;(statearr_40227_40247[(2)] = inst_40221);
(statearr_40227_40247[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (1)))
{var state_40225__$1 = state_40225;var statearr_40228_40248 = state_40225__$1;(statearr_40228_40248[(2)] = null);
(statearr_40228_40248[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (4)))
{var inst_40207 = (state_40225[(7)]);var inst_40207__$1 = (state_40225[(2)]);var inst_40208 = (inst_40207__$1 == null);var state_40225__$1 = (function (){var statearr_40229 = state_40225;(statearr_40229[(7)] = inst_40207__$1);
return statearr_40229;
})();if(cljs.core.truth_(inst_40208))
{var statearr_40230_40249 = state_40225__$1;(statearr_40230_40249[(1)] = (5));
} else
{var statearr_40231_40250 = state_40225__$1;(statearr_40231_40250[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (6)))
{var inst_40207 = (state_40225[(7)]);var inst_40212 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40207) : p.call(null,inst_40207));var state_40225__$1 = state_40225;if(cljs.core.truth_(inst_40212))
{var statearr_40232_40251 = state_40225__$1;(statearr_40232_40251[(1)] = (8));
} else
{var statearr_40233_40252 = state_40225__$1;(statearr_40233_40252[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (3)))
{var inst_40223 = (state_40225[(2)]);var state_40225__$1 = state_40225;return cljs.core.async.impl.ioc_helpers.return_chan(state_40225__$1,inst_40223);
} else
{if((state_val_40226 === (2)))
{var state_40225__$1 = state_40225;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40225__$1,(4),ch);
} else
{if((state_val_40226 === (11)))
{var inst_40215 = (state_40225[(2)]);var state_40225__$1 = state_40225;var statearr_40234_40253 = state_40225__$1;(statearr_40234_40253[(2)] = inst_40215);
(statearr_40234_40253[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (9)))
{var state_40225__$1 = state_40225;var statearr_40235_40254 = state_40225__$1;(statearr_40235_40254[(2)] = null);
(statearr_40235_40254[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (5)))
{var inst_40210 = cljs.core.async.close_BANG_(out);var state_40225__$1 = state_40225;var statearr_40236_40255 = state_40225__$1;(statearr_40236_40255[(2)] = inst_40210);
(statearr_40236_40255[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (10)))
{var inst_40218 = (state_40225[(2)]);var state_40225__$1 = (function (){var statearr_40237 = state_40225;(statearr_40237[(8)] = inst_40218);
return statearr_40237;
})();var statearr_40238_40256 = state_40225__$1;(statearr_40238_40256[(2)] = null);
(statearr_40238_40256[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40226 === (8)))
{var inst_40207 = (state_40225[(7)]);var state_40225__$1 = state_40225;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40225__$1,(11),out,inst_40207);
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
});})(c__5691__auto___40246,out))
;return ((function (switch__5676__auto__,c__5691__auto___40246,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_40242 = [null,null,null,null,null,null,null,null,null];(statearr_40242[(0)] = state_machine__5677__auto__);
(statearr_40242[(1)] = (1));
return statearr_40242;
});
var state_machine__5677__auto____1 = (function (state_40225){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40225);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40243){if((e40243 instanceof Object))
{var ex__5680__auto__ = e40243;var statearr_40244_40257 = state_40225;(statearr_40244_40257[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40225);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40258 = state_40225;
state_40225 = G__40258;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40225){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___40246,out))
})();var state__5693__auto__ = (function (){var statearr_40245 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___40246);
return statearr_40245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___40246,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_40410){var state_val_40411 = (state_40410[(1)]);if((state_val_40411 === (7)))
{var inst_40406 = (state_40410[(2)]);var state_40410__$1 = state_40410;var statearr_40412_40449 = state_40410__$1;(statearr_40412_40449[(2)] = inst_40406);
(statearr_40412_40449[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (20)))
{var inst_40381 = (state_40410[(7)]);var inst_40392 = (state_40410[(2)]);var inst_40393 = cljs.core.next(inst_40381);var inst_40367 = inst_40393;var inst_40368 = null;var inst_40369 = (0);var inst_40370 = (0);var state_40410__$1 = (function (){var statearr_40413 = state_40410;(statearr_40413[(8)] = inst_40370);
(statearr_40413[(9)] = inst_40392);
(statearr_40413[(10)] = inst_40368);
(statearr_40413[(11)] = inst_40367);
(statearr_40413[(12)] = inst_40369);
return statearr_40413;
})();var statearr_40414_40450 = state_40410__$1;(statearr_40414_40450[(2)] = null);
(statearr_40414_40450[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (1)))
{var state_40410__$1 = state_40410;var statearr_40415_40451 = state_40410__$1;(statearr_40415_40451[(2)] = null);
(statearr_40415_40451[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (4)))
{var inst_40356 = (state_40410[(13)]);var inst_40356__$1 = (state_40410[(2)]);var inst_40357 = (inst_40356__$1 == null);var state_40410__$1 = (function (){var statearr_40419 = state_40410;(statearr_40419[(13)] = inst_40356__$1);
return statearr_40419;
})();if(cljs.core.truth_(inst_40357))
{var statearr_40420_40452 = state_40410__$1;(statearr_40420_40452[(1)] = (5));
} else
{var statearr_40421_40453 = state_40410__$1;(statearr_40421_40453[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (15)))
{var state_40410__$1 = state_40410;var statearr_40422_40454 = state_40410__$1;(statearr_40422_40454[(2)] = null);
(statearr_40422_40454[(1)] = (16));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (13)))
{var inst_40370 = (state_40410[(8)]);var inst_40368 = (state_40410[(10)]);var inst_40367 = (state_40410[(11)]);var inst_40369 = (state_40410[(12)]);var inst_40377 = (state_40410[(2)]);var inst_40378 = (inst_40370 + (1));var tmp40416 = inst_40368;var tmp40417 = inst_40367;var tmp40418 = inst_40369;var inst_40367__$1 = tmp40417;var inst_40368__$1 = tmp40416;var inst_40369__$1 = tmp40418;var inst_40370__$1 = inst_40378;var state_40410__$1 = (function (){var statearr_40423 = state_40410;(statearr_40423[(8)] = inst_40370__$1);
(statearr_40423[(14)] = inst_40377);
(statearr_40423[(10)] = inst_40368__$1);
(statearr_40423[(11)] = inst_40367__$1);
(statearr_40423[(12)] = inst_40369__$1);
return statearr_40423;
})();var statearr_40424_40455 = state_40410__$1;(statearr_40424_40455[(2)] = null);
(statearr_40424_40455[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (6)))
{var inst_40356 = (state_40410[(13)]);var inst_40361 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40356) : f.call(null,inst_40356));var inst_40366 = cljs.core.seq(inst_40361);var inst_40367 = inst_40366;var inst_40368 = null;var inst_40369 = (0);var inst_40370 = (0);var state_40410__$1 = (function (){var statearr_40425 = state_40410;(statearr_40425[(8)] = inst_40370);
(statearr_40425[(10)] = inst_40368);
(statearr_40425[(11)] = inst_40367);
(statearr_40425[(12)] = inst_40369);
return statearr_40425;
})();var statearr_40426_40456 = state_40410__$1;(statearr_40426_40456[(2)] = null);
(statearr_40426_40456[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (17)))
{var inst_40381 = (state_40410[(7)]);var inst_40385 = cljs.core.chunk_first(inst_40381);var inst_40386 = cljs.core.chunk_rest(inst_40381);var inst_40387 = cljs.core.count(inst_40385);var inst_40367 = inst_40386;var inst_40368 = inst_40385;var inst_40369 = inst_40387;var inst_40370 = (0);var state_40410__$1 = (function (){var statearr_40427 = state_40410;(statearr_40427[(8)] = inst_40370);
(statearr_40427[(10)] = inst_40368);
(statearr_40427[(11)] = inst_40367);
(statearr_40427[(12)] = inst_40369);
return statearr_40427;
})();var statearr_40428_40457 = state_40410__$1;(statearr_40428_40457[(2)] = null);
(statearr_40428_40457[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (3)))
{var inst_40408 = (state_40410[(2)]);var state_40410__$1 = state_40410;return cljs.core.async.impl.ioc_helpers.return_chan(state_40410__$1,inst_40408);
} else
{if((state_val_40411 === (12)))
{var inst_40401 = (state_40410[(2)]);var state_40410__$1 = state_40410;var statearr_40429_40458 = state_40410__$1;(statearr_40429_40458[(2)] = inst_40401);
(statearr_40429_40458[(1)] = (9));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (2)))
{var state_40410__$1 = state_40410;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40410__$1,(4),in$);
} else
{if((state_val_40411 === (19)))
{var inst_40396 = (state_40410[(2)]);var state_40410__$1 = state_40410;var statearr_40430_40459 = state_40410__$1;(statearr_40430_40459[(2)] = inst_40396);
(statearr_40430_40459[(1)] = (16));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (11)))
{var inst_40381 = (state_40410[(7)]);var inst_40367 = (state_40410[(11)]);var inst_40381__$1 = cljs.core.seq(inst_40367);var state_40410__$1 = (function (){var statearr_40431 = state_40410;(statearr_40431[(7)] = inst_40381__$1);
return statearr_40431;
})();if(inst_40381__$1)
{var statearr_40432_40460 = state_40410__$1;(statearr_40432_40460[(1)] = (14));
} else
{var statearr_40433_40461 = state_40410__$1;(statearr_40433_40461[(1)] = (15));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (9)))
{var inst_40403 = (state_40410[(2)]);var state_40410__$1 = (function (){var statearr_40434 = state_40410;(statearr_40434[(15)] = inst_40403);
return statearr_40434;
})();var statearr_40435_40462 = state_40410__$1;(statearr_40435_40462[(2)] = null);
(statearr_40435_40462[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (5)))
{var inst_40359 = cljs.core.async.close_BANG_(out);var state_40410__$1 = state_40410;var statearr_40436_40463 = state_40410__$1;(statearr_40436_40463[(2)] = inst_40359);
(statearr_40436_40463[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (14)))
{var inst_40381 = (state_40410[(7)]);var inst_40383 = cljs.core.chunked_seq_QMARK_(inst_40381);var state_40410__$1 = state_40410;if(inst_40383)
{var statearr_40437_40464 = state_40410__$1;(statearr_40437_40464[(1)] = (17));
} else
{var statearr_40438_40465 = state_40410__$1;(statearr_40438_40465[(1)] = (18));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (16)))
{var inst_40399 = (state_40410[(2)]);var state_40410__$1 = state_40410;var statearr_40439_40466 = state_40410__$1;(statearr_40439_40466[(2)] = inst_40399);
(statearr_40439_40466[(1)] = (12));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40411 === (10)))
{var inst_40370 = (state_40410[(8)]);var inst_40368 = (state_40410[(10)]);var inst_40375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40368,inst_40370);var state_40410__$1 = state_40410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40410__$1,(13),out,inst_40375);
} else
{if((state_val_40411 === (18)))
{var inst_40381 = (state_40410[(7)]);var inst_40390 = cljs.core.first(inst_40381);var state_40410__$1 = state_40410;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40410__$1,(20),out,inst_40390);
} else
{if((state_val_40411 === (8)))
{var inst_40370 = (state_40410[(8)]);var inst_40369 = (state_40410[(12)]);var inst_40372 = (inst_40370 < inst_40369);var inst_40373 = inst_40372;var state_40410__$1 = state_40410;if(cljs.core.truth_(inst_40373))
{var statearr_40440_40467 = state_40410__$1;(statearr_40440_40467[(1)] = (10));
} else
{var statearr_40441_40468 = state_40410__$1;(statearr_40441_40468[(1)] = (11));
}
return cljs.core.constant$keyword$787;
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
var state_machine__5677__auto____0 = (function (){var statearr_40445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40445[(0)] = state_machine__5677__auto__);
(statearr_40445[(1)] = (1));
return statearr_40445;
});
var state_machine__5677__auto____1 = (function (state_40410){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40410);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40446){if((e40446 instanceof Object))
{var ex__5680__auto__ = e40446;var statearr_40447_40469 = state_40410;(statearr_40447_40469[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40410);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40470 = state_40410;
state_40410 = G__40470;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40410){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_40448 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_40448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___40551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___40551){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___40551){
return (function (state_40530){var state_val_40531 = (state_40530[(1)]);if((state_val_40531 === (7)))
{var inst_40526 = (state_40530[(2)]);var state_40530__$1 = state_40530;var statearr_40532_40552 = state_40530__$1;(statearr_40532_40552[(2)] = inst_40526);
(statearr_40532_40552[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (1)))
{var state_40530__$1 = state_40530;var statearr_40533_40553 = state_40530__$1;(statearr_40533_40553[(2)] = null);
(statearr_40533_40553[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (4)))
{var inst_40513 = (state_40530[(7)]);var inst_40513__$1 = (state_40530[(2)]);var inst_40514 = (inst_40513__$1 == null);var state_40530__$1 = (function (){var statearr_40534 = state_40530;(statearr_40534[(7)] = inst_40513__$1);
return statearr_40534;
})();if(cljs.core.truth_(inst_40514))
{var statearr_40535_40554 = state_40530__$1;(statearr_40535_40554[(1)] = (5));
} else
{var statearr_40536_40555 = state_40530__$1;(statearr_40536_40555[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (6)))
{var inst_40513 = (state_40530[(7)]);var state_40530__$1 = state_40530;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40530__$1,(11),to,inst_40513);
} else
{if((state_val_40531 === (3)))
{var inst_40528 = (state_40530[(2)]);var state_40530__$1 = state_40530;return cljs.core.async.impl.ioc_helpers.return_chan(state_40530__$1,inst_40528);
} else
{if((state_val_40531 === (2)))
{var state_40530__$1 = state_40530;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40530__$1,(4),from);
} else
{if((state_val_40531 === (11)))
{var inst_40523 = (state_40530[(2)]);var state_40530__$1 = (function (){var statearr_40537 = state_40530;(statearr_40537[(8)] = inst_40523);
return statearr_40537;
})();var statearr_40538_40556 = state_40530__$1;(statearr_40538_40556[(2)] = null);
(statearr_40538_40556[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (9)))
{var state_40530__$1 = state_40530;var statearr_40539_40557 = state_40530__$1;(statearr_40539_40557[(2)] = null);
(statearr_40539_40557[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (5)))
{var state_40530__$1 = state_40530;if(cljs.core.truth_(close_QMARK_))
{var statearr_40540_40558 = state_40530__$1;(statearr_40540_40558[(1)] = (8));
} else
{var statearr_40541_40559 = state_40530__$1;(statearr_40541_40559[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (10)))
{var inst_40520 = (state_40530[(2)]);var state_40530__$1 = state_40530;var statearr_40542_40560 = state_40530__$1;(statearr_40542_40560[(2)] = inst_40520);
(statearr_40542_40560[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40531 === (8)))
{var inst_40517 = cljs.core.async.close_BANG_(to);var state_40530__$1 = state_40530;var statearr_40543_40561 = state_40530__$1;(statearr_40543_40561[(2)] = inst_40517);
(statearr_40543_40561[(1)] = (10));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___40551))
;return ((function (switch__5676__auto__,c__5691__auto___40551){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_40547 = [null,null,null,null,null,null,null,null,null];(statearr_40547[(0)] = state_machine__5677__auto__);
(statearr_40547[(1)] = (1));
return statearr_40547;
});
var state_machine__5677__auto____1 = (function (state_40530){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40530);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40548){if((e40548 instanceof Object))
{var ex__5680__auto__ = e40548;var statearr_40549_40562 = state_40530;(statearr_40549_40562[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40530);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40563 = state_40530;
state_40530 = G__40563;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40530){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___40551))
})();var state__5693__auto__ = (function (){var statearr_40550 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___40551);
return statearr_40550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___40551))
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
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5691__auto___40650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___40650,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___40650,tc,fc){
return (function (state_40628){var state_val_40629 = (state_40628[(1)]);if((state_val_40629 === (7)))
{var inst_40624 = (state_40628[(2)]);var state_40628__$1 = state_40628;var statearr_40630_40651 = state_40628__$1;(statearr_40630_40651[(2)] = inst_40624);
(statearr_40630_40651[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (1)))
{var state_40628__$1 = state_40628;var statearr_40631_40652 = state_40628__$1;(statearr_40631_40652[(2)] = null);
(statearr_40631_40652[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (4)))
{var inst_40609 = (state_40628[(7)]);var inst_40609__$1 = (state_40628[(2)]);var inst_40610 = (inst_40609__$1 == null);var state_40628__$1 = (function (){var statearr_40632 = state_40628;(statearr_40632[(7)] = inst_40609__$1);
return statearr_40632;
})();if(cljs.core.truth_(inst_40610))
{var statearr_40633_40653 = state_40628__$1;(statearr_40633_40653[(1)] = (5));
} else
{var statearr_40634_40654 = state_40628__$1;(statearr_40634_40654[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (6)))
{var inst_40609 = (state_40628[(7)]);var inst_40615 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40609) : p.call(null,inst_40609));var state_40628__$1 = state_40628;if(cljs.core.truth_(inst_40615))
{var statearr_40635_40655 = state_40628__$1;(statearr_40635_40655[(1)] = (9));
} else
{var statearr_40636_40656 = state_40628__$1;(statearr_40636_40656[(1)] = (10));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (3)))
{var inst_40626 = (state_40628[(2)]);var state_40628__$1 = state_40628;return cljs.core.async.impl.ioc_helpers.return_chan(state_40628__$1,inst_40626);
} else
{if((state_val_40629 === (2)))
{var state_40628__$1 = state_40628;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40628__$1,(4),ch);
} else
{if((state_val_40629 === (11)))
{var inst_40609 = (state_40628[(7)]);var inst_40619 = (state_40628[(2)]);var state_40628__$1 = state_40628;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40628__$1,(8),inst_40619,inst_40609);
} else
{if((state_val_40629 === (9)))
{var state_40628__$1 = state_40628;var statearr_40637_40657 = state_40628__$1;(statearr_40637_40657[(2)] = tc);
(statearr_40637_40657[(1)] = (11));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (5)))
{var inst_40612 = cljs.core.async.close_BANG_(tc);var inst_40613 = cljs.core.async.close_BANG_(fc);var state_40628__$1 = (function (){var statearr_40638 = state_40628;(statearr_40638[(8)] = inst_40612);
return statearr_40638;
})();var statearr_40639_40658 = state_40628__$1;(statearr_40639_40658[(2)] = inst_40613);
(statearr_40639_40658[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (10)))
{var state_40628__$1 = state_40628;var statearr_40640_40659 = state_40628__$1;(statearr_40640_40659[(2)] = fc);
(statearr_40640_40659[(1)] = (11));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40629 === (8)))
{var inst_40621 = (state_40628[(2)]);var state_40628__$1 = (function (){var statearr_40641 = state_40628;(statearr_40641[(9)] = inst_40621);
return statearr_40641;
})();var statearr_40642_40660 = state_40628__$1;(statearr_40642_40660[(2)] = null);
(statearr_40642_40660[(1)] = (2));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___40650,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___40650,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_40646 = [null,null,null,null,null,null,null,null,null,null];(statearr_40646[(0)] = state_machine__5677__auto__);
(statearr_40646[(1)] = (1));
return statearr_40646;
});
var state_machine__5677__auto____1 = (function (state_40628){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40628);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40647){if((e40647 instanceof Object))
{var ex__5680__auto__ = e40647;var statearr_40648_40661 = state_40628;(statearr_40648_40661[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40628);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40662 = state_40628;
state_40628 = G__40662;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40628){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___40650,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_40649 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___40650);
return statearr_40649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___40650,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_40709){var state_val_40710 = (state_40709[(1)]);if((state_val_40710 === (7)))
{var inst_40705 = (state_40709[(2)]);var state_40709__$1 = state_40709;var statearr_40711_40727 = state_40709__$1;(statearr_40711_40727[(2)] = inst_40705);
(statearr_40711_40727[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40710 === (6)))
{var inst_40695 = (state_40709[(7)]);var inst_40698 = (state_40709[(8)]);var inst_40702 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40695,inst_40698) : f.call(null,inst_40695,inst_40698));var inst_40695__$1 = inst_40702;var state_40709__$1 = (function (){var statearr_40712 = state_40709;(statearr_40712[(7)] = inst_40695__$1);
return statearr_40712;
})();var statearr_40713_40728 = state_40709__$1;(statearr_40713_40728[(2)] = null);
(statearr_40713_40728[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40710 === (5)))
{var inst_40695 = (state_40709[(7)]);var state_40709__$1 = state_40709;var statearr_40714_40729 = state_40709__$1;(statearr_40714_40729[(2)] = inst_40695);
(statearr_40714_40729[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40710 === (4)))
{var inst_40698 = (state_40709[(8)]);var inst_40698__$1 = (state_40709[(2)]);var inst_40699 = (inst_40698__$1 == null);var state_40709__$1 = (function (){var statearr_40715 = state_40709;(statearr_40715[(8)] = inst_40698__$1);
return statearr_40715;
})();if(cljs.core.truth_(inst_40699))
{var statearr_40716_40730 = state_40709__$1;(statearr_40716_40730[(1)] = (5));
} else
{var statearr_40717_40731 = state_40709__$1;(statearr_40717_40731[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40710 === (3)))
{var inst_40707 = (state_40709[(2)]);var state_40709__$1 = state_40709;return cljs.core.async.impl.ioc_helpers.return_chan(state_40709__$1,inst_40707);
} else
{if((state_val_40710 === (2)))
{var state_40709__$1 = state_40709;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40709__$1,(4),ch);
} else
{if((state_val_40710 === (1)))
{var inst_40695 = init;var state_40709__$1 = (function (){var statearr_40718 = state_40709;(statearr_40718[(7)] = inst_40695);
return statearr_40718;
})();var statearr_40719_40732 = state_40709__$1;(statearr_40719_40732[(2)] = null);
(statearr_40719_40732[(1)] = (2));
return cljs.core.constant$keyword$787;
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
var state_machine__5677__auto____0 = (function (){var statearr_40723 = [null,null,null,null,null,null,null,null,null];(statearr_40723[(0)] = state_machine__5677__auto__);
(statearr_40723[(1)] = (1));
return statearr_40723;
});
var state_machine__5677__auto____1 = (function (state_40709){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40709);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40724){if((e40724 instanceof Object))
{var ex__5680__auto__ = e40724;var statearr_40725_40733 = state_40709;(statearr_40725_40733[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40709);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40734 = state_40709;
state_40709 = G__40734;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40709){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_40726 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_40726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_40796){var state_val_40797 = (state_40796[(1)]);if((state_val_40797 === (7)))
{var inst_40777 = (state_40796[(7)]);var inst_40782 = (state_40796[(2)]);var inst_40783 = cljs.core.next(inst_40777);var inst_40777__$1 = inst_40783;var state_40796__$1 = (function (){var statearr_40798 = state_40796;(statearr_40798[(8)] = inst_40782);
(statearr_40798[(7)] = inst_40777__$1);
return statearr_40798;
})();var statearr_40799_40817 = state_40796__$1;(statearr_40799_40817[(2)] = null);
(statearr_40799_40817[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (1)))
{var inst_40776 = cljs.core.seq(coll);var inst_40777 = inst_40776;var state_40796__$1 = (function (){var statearr_40800 = state_40796;(statearr_40800[(7)] = inst_40777);
return statearr_40800;
})();var statearr_40801_40818 = state_40796__$1;(statearr_40801_40818[(2)] = null);
(statearr_40801_40818[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (4)))
{var inst_40777 = (state_40796[(7)]);var inst_40780 = cljs.core.first(inst_40777);var state_40796__$1 = state_40796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40796__$1,(7),ch,inst_40780);
} else
{if((state_val_40797 === (6)))
{var inst_40792 = (state_40796[(2)]);var state_40796__$1 = state_40796;var statearr_40802_40819 = state_40796__$1;(statearr_40802_40819[(2)] = inst_40792);
(statearr_40802_40819[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (3)))
{var inst_40794 = (state_40796[(2)]);var state_40796__$1 = state_40796;return cljs.core.async.impl.ioc_helpers.return_chan(state_40796__$1,inst_40794);
} else
{if((state_val_40797 === (2)))
{var inst_40777 = (state_40796[(7)]);var state_40796__$1 = state_40796;if(cljs.core.truth_(inst_40777))
{var statearr_40803_40820 = state_40796__$1;(statearr_40803_40820[(1)] = (4));
} else
{var statearr_40804_40821 = state_40796__$1;(statearr_40804_40821[(1)] = (5));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (9)))
{var state_40796__$1 = state_40796;var statearr_40805_40822 = state_40796__$1;(statearr_40805_40822[(2)] = null);
(statearr_40805_40822[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (5)))
{var state_40796__$1 = state_40796;if(cljs.core.truth_(close_QMARK_))
{var statearr_40806_40823 = state_40796__$1;(statearr_40806_40823[(1)] = (8));
} else
{var statearr_40807_40824 = state_40796__$1;(statearr_40807_40824[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (10)))
{var inst_40790 = (state_40796[(2)]);var state_40796__$1 = state_40796;var statearr_40808_40825 = state_40796__$1;(statearr_40808_40825[(2)] = inst_40790);
(statearr_40808_40825[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_40797 === (8)))
{var inst_40787 = cljs.core.async.close_BANG_(ch);var state_40796__$1 = state_40796;var statearr_40809_40826 = state_40796__$1;(statearr_40809_40826[(2)] = inst_40787);
(statearr_40809_40826[(1)] = (10));
return cljs.core.constant$keyword$787;
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
var state_machine__5677__auto____0 = (function (){var statearr_40813 = [null,null,null,null,null,null,null,null,null];(statearr_40813[(0)] = state_machine__5677__auto__);
(statearr_40813[(1)] = (1));
return statearr_40813;
});
var state_machine__5677__auto____1 = (function (state_40796){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_40796);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e40814){if((e40814 instanceof Object))
{var ex__5680__auto__ = e40814;var statearr_40815_40827 = state_40796;(statearr_40815_40827[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40796);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e40814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__40828 = state_40796;
state_40796 = G__40828;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_40796){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_40796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_40816 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_40816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_40816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj40830 = {};return obj40830;
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
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj40832 = {};return obj40832;
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
{throw cljs.core.missing_protocol("Mult.tap*",m);
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
{throw cljs.core.missing_protocol("Mult.untap*",m);
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
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t41056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41056 = (function (cs,ch,mult,meta41057){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta41057 = meta41057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41056.cljs$lang$type = true;
cljs.core.async.t41056.cljs$lang$ctorStr = "cljs.core.async/t41056";
cljs.core.async.t41056.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t41056");
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t41056.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41058){var self__ = this;
var _41058__$1 = this;return self__.meta41057;
});})(cs))
;
cljs.core.async.t41056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41058,meta41057__$1){var self__ = this;
var _41058__$1 = this;return (new cljs.core.async.t41056(self__.cs,self__.ch,self__.mult,meta41057__$1));
});})(cs))
;
cljs.core.async.__GT_t41056 = ((function (cs){
return (function __GT_t41056(cs__$1,ch__$1,mult__$1,meta41057){return (new cljs.core.async.t41056(cs__$1,ch__$1,mult__$1,meta41057));
});})(cs))
;
}
return (new cljs.core.async.t41056(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___41279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___41279,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___41279,cs,m,dchan,dctr,done){
return (function (state_41193){var state_val_41194 = (state_41193[(1)]);if((state_val_41194 === (7)))
{var inst_41189 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41195_41280 = state_41193__$1;(statearr_41195_41280[(2)] = inst_41189);
(statearr_41195_41280[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (20)))
{var inst_41090 = (state_41193[(7)]);var inst_41100 = cljs.core.first(inst_41090);var inst_41101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41100,(0),null);var inst_41102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41100,(1),null);var state_41193__$1 = (function (){var statearr_41196 = state_41193;(statearr_41196[(8)] = inst_41101);
return statearr_41196;
})();if(cljs.core.truth_(inst_41102))
{var statearr_41197_41281 = state_41193__$1;(statearr_41197_41281[(1)] = (22));
} else
{var statearr_41198_41282 = state_41193__$1;(statearr_41198_41282[(1)] = (23));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (27)))
{var inst_41132 = (state_41193[(9)]);var inst_41130 = (state_41193[(10)]);var inst_41137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41130,inst_41132);var state_41193__$1 = (function (){var statearr_41199 = state_41193;(statearr_41199[(11)] = inst_41137);
return statearr_41199;
})();var statearr_41200_41283 = state_41193__$1;(statearr_41200_41283[(2)] = null);
(statearr_41200_41283[(1)] = (32));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (1)))
{var state_41193__$1 = state_41193;var statearr_41201_41284 = state_41193__$1;(statearr_41201_41284[(2)] = null);
(statearr_41201_41284[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (24)))
{var inst_41090 = (state_41193[(7)]);var inst_41107 = (state_41193[(2)]);var inst_41108 = cljs.core.next(inst_41090);var inst_41070 = inst_41108;var inst_41071 = null;var inst_41072 = (0);var inst_41073 = (0);var state_41193__$1 = (function (){var statearr_41202 = state_41193;(statearr_41202[(12)] = inst_41071);
(statearr_41202[(13)] = inst_41070);
(statearr_41202[(14)] = inst_41072);
(statearr_41202[(15)] = inst_41107);
(statearr_41202[(16)] = inst_41073);
return statearr_41202;
})();var statearr_41203_41285 = state_41193__$1;(statearr_41203_41285[(2)] = null);
(statearr_41203_41285[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (39)))
{var inst_41150 = (state_41193[(17)]);var inst_41168 = (state_41193[(2)]);var inst_41169 = cljs.core.next(inst_41150);var inst_41129 = inst_41169;var inst_41130 = null;var inst_41131 = (0);var inst_41132 = (0);var state_41193__$1 = (function (){var statearr_41207 = state_41193;(statearr_41207[(18)] = inst_41131);
(statearr_41207[(19)] = inst_41129);
(statearr_41207[(9)] = inst_41132);
(statearr_41207[(20)] = inst_41168);
(statearr_41207[(10)] = inst_41130);
return statearr_41207;
})();var statearr_41208_41286 = state_41193__$1;(statearr_41208_41286[(2)] = null);
(statearr_41208_41286[(1)] = (25));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (4)))
{var inst_41061 = (state_41193[(21)]);var inst_41061__$1 = (state_41193[(2)]);var inst_41062 = (inst_41061__$1 == null);var state_41193__$1 = (function (){var statearr_41209 = state_41193;(statearr_41209[(21)] = inst_41061__$1);
return statearr_41209;
})();if(cljs.core.truth_(inst_41062))
{var statearr_41210_41287 = state_41193__$1;(statearr_41210_41287[(1)] = (5));
} else
{var statearr_41211_41288 = state_41193__$1;(statearr_41211_41288[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (15)))
{var inst_41071 = (state_41193[(12)]);var inst_41070 = (state_41193[(13)]);var inst_41072 = (state_41193[(14)]);var inst_41073 = (state_41193[(16)]);var inst_41086 = (state_41193[(2)]);var inst_41087 = (inst_41073 + (1));var tmp41204 = inst_41071;var tmp41205 = inst_41070;var tmp41206 = inst_41072;var inst_41070__$1 = tmp41205;var inst_41071__$1 = tmp41204;var inst_41072__$1 = tmp41206;var inst_41073__$1 = inst_41087;var state_41193__$1 = (function (){var statearr_41212 = state_41193;(statearr_41212[(12)] = inst_41071__$1);
(statearr_41212[(22)] = inst_41086);
(statearr_41212[(13)] = inst_41070__$1);
(statearr_41212[(14)] = inst_41072__$1);
(statearr_41212[(16)] = inst_41073__$1);
return statearr_41212;
})();var statearr_41213_41289 = state_41193__$1;(statearr_41213_41289[(2)] = null);
(statearr_41213_41289[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (21)))
{var inst_41111 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41214_41290 = state_41193__$1;(statearr_41214_41290[(2)] = inst_41111);
(statearr_41214_41290[(1)] = (18));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (31)))
{var inst_41137 = (state_41193[(11)]);var inst_41138 = (state_41193[(2)]);var inst_41139 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41137);var state_41193__$1 = (function (){var statearr_41215 = state_41193;(statearr_41215[(23)] = inst_41138);
(statearr_41215[(24)] = inst_41139);
return statearr_41215;
})();var statearr_41216_41291 = state_41193__$1;(statearr_41216_41291[(2)] = inst_41140);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (32)))
{var inst_41061 = (state_41193[(21)]);var inst_41137 = (state_41193[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41193,(31),Object,null,(30));var inst_41144 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41137,inst_41061,done);var state_41193__$1 = state_41193;var statearr_41217_41292 = state_41193__$1;(statearr_41217_41292[(2)] = inst_41144);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (40)))
{var inst_41159 = (state_41193[(25)]);var inst_41160 = (state_41193[(2)]);var inst_41161 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_41162 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41159);var state_41193__$1 = (function (){var statearr_41218 = state_41193;(statearr_41218[(26)] = inst_41160);
(statearr_41218[(27)] = inst_41161);
return statearr_41218;
})();var statearr_41219_41293 = state_41193__$1;(statearr_41219_41293[(2)] = inst_41162);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (33)))
{var inst_41150 = (state_41193[(17)]);var inst_41152 = cljs.core.chunked_seq_QMARK_(inst_41150);var state_41193__$1 = state_41193;if(inst_41152)
{var statearr_41220_41294 = state_41193__$1;(statearr_41220_41294[(1)] = (36));
} else
{var statearr_41221_41295 = state_41193__$1;(statearr_41221_41295[(1)] = (37));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (13)))
{var inst_41080 = (state_41193[(28)]);var inst_41083 = cljs.core.async.close_BANG_(inst_41080);var state_41193__$1 = state_41193;var statearr_41222_41296 = state_41193__$1;(statearr_41222_41296[(2)] = inst_41083);
(statearr_41222_41296[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (22)))
{var inst_41101 = (state_41193[(8)]);var inst_41104 = cljs.core.async.close_BANG_(inst_41101);var state_41193__$1 = state_41193;var statearr_41223_41297 = state_41193__$1;(statearr_41223_41297[(2)] = inst_41104);
(statearr_41223_41297[(1)] = (24));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (36)))
{var inst_41150 = (state_41193[(17)]);var inst_41154 = cljs.core.chunk_first(inst_41150);var inst_41155 = cljs.core.chunk_rest(inst_41150);var inst_41156 = cljs.core.count(inst_41154);var inst_41129 = inst_41155;var inst_41130 = inst_41154;var inst_41131 = inst_41156;var inst_41132 = (0);var state_41193__$1 = (function (){var statearr_41224 = state_41193;(statearr_41224[(18)] = inst_41131);
(statearr_41224[(19)] = inst_41129);
(statearr_41224[(9)] = inst_41132);
(statearr_41224[(10)] = inst_41130);
return statearr_41224;
})();var statearr_41225_41298 = state_41193__$1;(statearr_41225_41298[(2)] = null);
(statearr_41225_41298[(1)] = (25));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (41)))
{var inst_41061 = (state_41193[(21)]);var inst_41159 = (state_41193[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41193,(40),Object,null,(39));var inst_41166 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41159,inst_41061,done);var state_41193__$1 = state_41193;var statearr_41226_41299 = state_41193__$1;(statearr_41226_41299[(2)] = inst_41166);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (43)))
{var state_41193__$1 = state_41193;var statearr_41227_41300 = state_41193__$1;(statearr_41227_41300[(2)] = null);
(statearr_41227_41300[(1)] = (44));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (29)))
{var inst_41177 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41228_41301 = state_41193__$1;(statearr_41228_41301[(2)] = inst_41177);
(statearr_41228_41301[(1)] = (26));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (44)))
{var inst_41186 = (state_41193[(2)]);var state_41193__$1 = (function (){var statearr_41229 = state_41193;(statearr_41229[(29)] = inst_41186);
return statearr_41229;
})();var statearr_41230_41302 = state_41193__$1;(statearr_41230_41302[(2)] = null);
(statearr_41230_41302[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (6)))
{var inst_41121 = (state_41193[(30)]);var inst_41120 = cljs.core.deref(cs);var inst_41121__$1 = cljs.core.keys(inst_41120);var inst_41122 = cljs.core.count(inst_41121__$1);var inst_41123 = cljs.core.reset_BANG_(dctr,inst_41122);var inst_41128 = cljs.core.seq(inst_41121__$1);var inst_41129 = inst_41128;var inst_41130 = null;var inst_41131 = (0);var inst_41132 = (0);var state_41193__$1 = (function (){var statearr_41231 = state_41193;(statearr_41231[(18)] = inst_41131);
(statearr_41231[(19)] = inst_41129);
(statearr_41231[(9)] = inst_41132);
(statearr_41231[(10)] = inst_41130);
(statearr_41231[(31)] = inst_41123);
(statearr_41231[(30)] = inst_41121__$1);
return statearr_41231;
})();var statearr_41232_41303 = state_41193__$1;(statearr_41232_41303[(2)] = null);
(statearr_41232_41303[(1)] = (25));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (28)))
{var inst_41129 = (state_41193[(19)]);var inst_41150 = (state_41193[(17)]);var inst_41150__$1 = cljs.core.seq(inst_41129);var state_41193__$1 = (function (){var statearr_41233 = state_41193;(statearr_41233[(17)] = inst_41150__$1);
return statearr_41233;
})();if(inst_41150__$1)
{var statearr_41234_41304 = state_41193__$1;(statearr_41234_41304[(1)] = (33));
} else
{var statearr_41235_41305 = state_41193__$1;(statearr_41235_41305[(1)] = (34));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (25)))
{var inst_41131 = (state_41193[(18)]);var inst_41132 = (state_41193[(9)]);var inst_41134 = (inst_41132 < inst_41131);var inst_41135 = inst_41134;var state_41193__$1 = state_41193;if(cljs.core.truth_(inst_41135))
{var statearr_41236_41306 = state_41193__$1;(statearr_41236_41306[(1)] = (27));
} else
{var statearr_41237_41307 = state_41193__$1;(statearr_41237_41307[(1)] = (28));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (34)))
{var state_41193__$1 = state_41193;var statearr_41238_41308 = state_41193__$1;(statearr_41238_41308[(2)] = null);
(statearr_41238_41308[(1)] = (35));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (17)))
{var state_41193__$1 = state_41193;var statearr_41239_41309 = state_41193__$1;(statearr_41239_41309[(2)] = null);
(statearr_41239_41309[(1)] = (18));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (3)))
{var inst_41191 = (state_41193[(2)]);var state_41193__$1 = state_41193;return cljs.core.async.impl.ioc_helpers.return_chan(state_41193__$1,inst_41191);
} else
{if((state_val_41194 === (12)))
{var inst_41116 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41240_41310 = state_41193__$1;(statearr_41240_41310[(2)] = inst_41116);
(statearr_41240_41310[(1)] = (9));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (2)))
{var state_41193__$1 = state_41193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41193__$1,(4),ch);
} else
{if((state_val_41194 === (23)))
{var state_41193__$1 = state_41193;var statearr_41241_41311 = state_41193__$1;(statearr_41241_41311[(2)] = null);
(statearr_41241_41311[(1)] = (24));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (35)))
{var inst_41175 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41242_41312 = state_41193__$1;(statearr_41242_41312[(2)] = inst_41175);
(statearr_41242_41312[(1)] = (29));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (19)))
{var inst_41090 = (state_41193[(7)]);var inst_41094 = cljs.core.chunk_first(inst_41090);var inst_41095 = cljs.core.chunk_rest(inst_41090);var inst_41096 = cljs.core.count(inst_41094);var inst_41070 = inst_41095;var inst_41071 = inst_41094;var inst_41072 = inst_41096;var inst_41073 = (0);var state_41193__$1 = (function (){var statearr_41243 = state_41193;(statearr_41243[(12)] = inst_41071);
(statearr_41243[(13)] = inst_41070);
(statearr_41243[(14)] = inst_41072);
(statearr_41243[(16)] = inst_41073);
return statearr_41243;
})();var statearr_41244_41313 = state_41193__$1;(statearr_41244_41313[(2)] = null);
(statearr_41244_41313[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (11)))
{var inst_41070 = (state_41193[(13)]);var inst_41090 = (state_41193[(7)]);var inst_41090__$1 = cljs.core.seq(inst_41070);var state_41193__$1 = (function (){var statearr_41245 = state_41193;(statearr_41245[(7)] = inst_41090__$1);
return statearr_41245;
})();if(inst_41090__$1)
{var statearr_41246_41314 = state_41193__$1;(statearr_41246_41314[(1)] = (16));
} else
{var statearr_41247_41315 = state_41193__$1;(statearr_41247_41315[(1)] = (17));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (9)))
{var inst_41118 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41248_41316 = state_41193__$1;(statearr_41248_41316[(2)] = inst_41118);
(statearr_41248_41316[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (5)))
{var inst_41068 = cljs.core.deref(cs);var inst_41069 = cljs.core.seq(inst_41068);var inst_41070 = inst_41069;var inst_41071 = null;var inst_41072 = (0);var inst_41073 = (0);var state_41193__$1 = (function (){var statearr_41249 = state_41193;(statearr_41249[(12)] = inst_41071);
(statearr_41249[(13)] = inst_41070);
(statearr_41249[(14)] = inst_41072);
(statearr_41249[(16)] = inst_41073);
return statearr_41249;
})();var statearr_41250_41317 = state_41193__$1;(statearr_41250_41317[(2)] = null);
(statearr_41250_41317[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (14)))
{var state_41193__$1 = state_41193;var statearr_41251_41318 = state_41193__$1;(statearr_41251_41318[(2)] = null);
(statearr_41251_41318[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (45)))
{var inst_41183 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41252_41319 = state_41193__$1;(statearr_41252_41319[(2)] = inst_41183);
(statearr_41252_41319[(1)] = (44));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (26)))
{var inst_41121 = (state_41193[(30)]);var inst_41179 = (state_41193[(2)]);var inst_41180 = cljs.core.seq(inst_41121);var state_41193__$1 = (function (){var statearr_41253 = state_41193;(statearr_41253[(32)] = inst_41179);
return statearr_41253;
})();if(inst_41180)
{var statearr_41254_41320 = state_41193__$1;(statearr_41254_41320[(1)] = (42));
} else
{var statearr_41255_41321 = state_41193__$1;(statearr_41255_41321[(1)] = (43));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (16)))
{var inst_41090 = (state_41193[(7)]);var inst_41092 = cljs.core.chunked_seq_QMARK_(inst_41090);var state_41193__$1 = state_41193;if(inst_41092)
{var statearr_41259_41322 = state_41193__$1;(statearr_41259_41322[(1)] = (19));
} else
{var statearr_41260_41323 = state_41193__$1;(statearr_41260_41323[(1)] = (20));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (38)))
{var inst_41172 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41261_41324 = state_41193__$1;(statearr_41261_41324[(2)] = inst_41172);
(statearr_41261_41324[(1)] = (35));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (30)))
{var inst_41131 = (state_41193[(18)]);var inst_41129 = (state_41193[(19)]);var inst_41132 = (state_41193[(9)]);var inst_41130 = (state_41193[(10)]);var inst_41146 = (state_41193[(2)]);var inst_41147 = (inst_41132 + (1));var tmp41256 = inst_41131;var tmp41257 = inst_41129;var tmp41258 = inst_41130;var inst_41129__$1 = tmp41257;var inst_41130__$1 = tmp41258;var inst_41131__$1 = tmp41256;var inst_41132__$1 = inst_41147;var state_41193__$1 = (function (){var statearr_41262 = state_41193;(statearr_41262[(18)] = inst_41131__$1);
(statearr_41262[(19)] = inst_41129__$1);
(statearr_41262[(9)] = inst_41132__$1);
(statearr_41262[(33)] = inst_41146);
(statearr_41262[(10)] = inst_41130__$1);
return statearr_41262;
})();var statearr_41263_41325 = state_41193__$1;(statearr_41263_41325[(2)] = null);
(statearr_41263_41325[(1)] = (25));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (10)))
{var inst_41071 = (state_41193[(12)]);var inst_41073 = (state_41193[(16)]);var inst_41079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41071,inst_41073);var inst_41080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41079,(0),null);var inst_41081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41079,(1),null);var state_41193__$1 = (function (){var statearr_41264 = state_41193;(statearr_41264[(28)] = inst_41080);
return statearr_41264;
})();if(cljs.core.truth_(inst_41081))
{var statearr_41265_41326 = state_41193__$1;(statearr_41265_41326[(1)] = (13));
} else
{var statearr_41266_41327 = state_41193__$1;(statearr_41266_41327[(1)] = (14));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (18)))
{var inst_41114 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41267_41328 = state_41193__$1;(statearr_41267_41328[(2)] = inst_41114);
(statearr_41267_41328[(1)] = (12));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (42)))
{var state_41193__$1 = state_41193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41193__$1,(45),dchan);
} else
{if((state_val_41194 === (37)))
{var inst_41150 = (state_41193[(17)]);var inst_41159 = cljs.core.first(inst_41150);var state_41193__$1 = (function (){var statearr_41268 = state_41193;(statearr_41268[(25)] = inst_41159);
return statearr_41268;
})();var statearr_41269_41329 = state_41193__$1;(statearr_41269_41329[(2)] = null);
(statearr_41269_41329[(1)] = (41));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41194 === (8)))
{var inst_41072 = (state_41193[(14)]);var inst_41073 = (state_41193[(16)]);var inst_41075 = (inst_41073 < inst_41072);var inst_41076 = inst_41075;var state_41193__$1 = state_41193;if(cljs.core.truth_(inst_41076))
{var statearr_41270_41330 = state_41193__$1;(statearr_41270_41330[(1)] = (10));
} else
{var statearr_41271_41331 = state_41193__$1;(statearr_41271_41331[(1)] = (11));
}
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___41279,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___41279,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_41275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41275[(0)] = state_machine__5677__auto__);
(statearr_41275[(1)] = (1));
return statearr_41275;
});
var state_machine__5677__auto____1 = (function (state_41193){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_41193);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e41276){if((e41276 instanceof Object))
{var ex__5680__auto__ = e41276;var statearr_41277_41332 = state_41193;(statearr_41277_41332[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e41276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__41333 = state_41193;
state_41193 = G__41333;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_41193){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_41193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___41279,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_41278 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_41278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___41279);
return statearr_41278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___41279,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj41335 = {};return obj41335;
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
{throw cljs.core.missing_protocol("Mix.admix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol("Mix.toggle*",m);
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
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$794,null,cljs.core.constant$keyword$795,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$796);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$795);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$796,chs);var pauses = pick(cljs.core.constant$keyword$794,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$797,solos,cljs.core.constant$keyword$798,pick(cljs.core.constant$keyword$795,chs),cljs.core.constant$keyword$799,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$794)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41445 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41446){
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
this.meta41446 = meta41446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41445.cljs$lang$type = true;
cljs.core.async.t41445.cljs$lang$ctorStr = "cljs.core.async/t41445";
cljs.core.async.t41445.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t41445");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41447){var self__ = this;
var _41447__$1 = this;return self__.meta41446;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41447,meta41446__$1){var self__ = this;
var _41447__$1 = this;return (new cljs.core.async.t41445(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41446__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41445 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41446){return (new cljs.core.async.t41445(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41446));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41445(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___41554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41512){var state_val_41513 = (state_41512[(1)]);if((state_val_41513 === (7)))
{var inst_41461 = (state_41512[(7)]);var inst_41466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41461);var state_41512__$1 = state_41512;var statearr_41514_41555 = state_41512__$1;(statearr_41514_41555[(2)] = inst_41466);
(statearr_41514_41555[(1)] = (9));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (20)))
{var inst_41476 = (state_41512[(8)]);var state_41512__$1 = state_41512;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41512__$1,(23),out,inst_41476);
} else
{if((state_val_41513 === (1)))
{var inst_41451 = (state_41512[(9)]);var inst_41451__$1 = calc_state();var inst_41452 = cljs.core.seq_QMARK_(inst_41451__$1);var state_41512__$1 = (function (){var statearr_41515 = state_41512;(statearr_41515[(9)] = inst_41451__$1);
return statearr_41515;
})();if(inst_41452)
{var statearr_41516_41556 = state_41512__$1;(statearr_41516_41556[(1)] = (2));
} else
{var statearr_41517_41557 = state_41512__$1;(statearr_41517_41557[(1)] = (3));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (4)))
{var inst_41451 = (state_41512[(9)]);var inst_41457 = (state_41512[(2)]);var inst_41458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41457,cljs.core.constant$keyword$799);var inst_41459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41457,cljs.core.constant$keyword$798);var inst_41460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41457,cljs.core.constant$keyword$797);var inst_41461 = inst_41451;var state_41512__$1 = (function (){var statearr_41518 = state_41512;(statearr_41518[(10)] = inst_41458);
(statearr_41518[(11)] = inst_41459);
(statearr_41518[(7)] = inst_41461);
(statearr_41518[(12)] = inst_41460);
return statearr_41518;
})();var statearr_41519_41558 = state_41512__$1;(statearr_41519_41558[(2)] = null);
(statearr_41519_41558[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (15)))
{var state_41512__$1 = state_41512;var statearr_41520_41559 = state_41512__$1;(statearr_41520_41559[(2)] = null);
(statearr_41520_41559[(1)] = (16));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (21)))
{var state_41512__$1 = state_41512;var statearr_41521_41560 = state_41512__$1;(statearr_41521_41560[(2)] = null);
(statearr_41521_41560[(1)] = (22));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (13)))
{var inst_41508 = (state_41512[(2)]);var state_41512__$1 = state_41512;var statearr_41522_41561 = state_41512__$1;(statearr_41522_41561[(2)] = inst_41508);
(statearr_41522_41561[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (22)))
{var inst_41469 = (state_41512[(13)]);var inst_41505 = (state_41512[(2)]);var inst_41461 = inst_41469;var state_41512__$1 = (function (){var statearr_41523 = state_41512;(statearr_41523[(7)] = inst_41461);
(statearr_41523[(14)] = inst_41505);
return statearr_41523;
})();var statearr_41524_41562 = state_41512__$1;(statearr_41524_41562[(2)] = null);
(statearr_41524_41562[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (6)))
{var inst_41510 = (state_41512[(2)]);var state_41512__$1 = state_41512;return cljs.core.async.impl.ioc_helpers.return_chan(state_41512__$1,inst_41510);
} else
{if((state_val_41513 === (17)))
{var inst_41491 = (state_41512[(15)]);var state_41512__$1 = state_41512;var statearr_41525_41563 = state_41512__$1;(statearr_41525_41563[(2)] = inst_41491);
(statearr_41525_41563[(1)] = (19));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (3)))
{var inst_41451 = (state_41512[(9)]);var state_41512__$1 = state_41512;var statearr_41526_41564 = state_41512__$1;(statearr_41526_41564[(2)] = inst_41451);
(statearr_41526_41564[(1)] = (4));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (12)))
{var inst_41491 = (state_41512[(15)]);var inst_41472 = (state_41512[(16)]);var inst_41477 = (state_41512[(17)]);var inst_41491__$1 = (inst_41472.cljs$core$IFn$_invoke$arity$1 ? inst_41472.cljs$core$IFn$_invoke$arity$1(inst_41477) : inst_41472.call(null,inst_41477));var state_41512__$1 = (function (){var statearr_41527 = state_41512;(statearr_41527[(15)] = inst_41491__$1);
return statearr_41527;
})();if(cljs.core.truth_(inst_41491__$1))
{var statearr_41528_41565 = state_41512__$1;(statearr_41528_41565[(1)] = (17));
} else
{var statearr_41529_41566 = state_41512__$1;(statearr_41529_41566[(1)] = (18));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (2)))
{var inst_41451 = (state_41512[(9)]);var inst_41454 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41451);var state_41512__$1 = state_41512;var statearr_41530_41567 = state_41512__$1;(statearr_41530_41567[(2)] = inst_41454);
(statearr_41530_41567[(1)] = (4));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (23)))
{var inst_41502 = (state_41512[(2)]);var state_41512__$1 = state_41512;var statearr_41531_41568 = state_41512__$1;(statearr_41531_41568[(2)] = inst_41502);
(statearr_41531_41568[(1)] = (22));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (19)))
{var inst_41499 = (state_41512[(2)]);var state_41512__$1 = state_41512;if(cljs.core.truth_(inst_41499))
{var statearr_41532_41569 = state_41512__$1;(statearr_41532_41569[(1)] = (20));
} else
{var statearr_41533_41570 = state_41512__$1;(statearr_41533_41570[(1)] = (21));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (11)))
{var inst_41476 = (state_41512[(8)]);var inst_41482 = (inst_41476 == null);var state_41512__$1 = state_41512;if(cljs.core.truth_(inst_41482))
{var statearr_41534_41571 = state_41512__$1;(statearr_41534_41571[(1)] = (14));
} else
{var statearr_41535_41572 = state_41512__$1;(statearr_41535_41572[(1)] = (15));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (9)))
{var inst_41469 = (state_41512[(13)]);var inst_41469__$1 = (state_41512[(2)]);var inst_41470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41469__$1,cljs.core.constant$keyword$799);var inst_41471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41469__$1,cljs.core.constant$keyword$798);var inst_41472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41469__$1,cljs.core.constant$keyword$797);var state_41512__$1 = (function (){var statearr_41536 = state_41512;(statearr_41536[(18)] = inst_41471);
(statearr_41536[(13)] = inst_41469__$1);
(statearr_41536[(16)] = inst_41472);
return statearr_41536;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41512__$1,(10),inst_41470);
} else
{if((state_val_41513 === (5)))
{var inst_41461 = (state_41512[(7)]);var inst_41464 = cljs.core.seq_QMARK_(inst_41461);var state_41512__$1 = state_41512;if(inst_41464)
{var statearr_41537_41573 = state_41512__$1;(statearr_41537_41573[(1)] = (7));
} else
{var statearr_41538_41574 = state_41512__$1;(statearr_41538_41574[(1)] = (8));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (14)))
{var inst_41477 = (state_41512[(17)]);var inst_41484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41477);var state_41512__$1 = state_41512;var statearr_41539_41575 = state_41512__$1;(statearr_41539_41575[(2)] = inst_41484);
(statearr_41539_41575[(1)] = (16));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (16)))
{var inst_41487 = (state_41512[(2)]);var inst_41488 = calc_state();var inst_41461 = inst_41488;var state_41512__$1 = (function (){var statearr_41540 = state_41512;(statearr_41540[(19)] = inst_41487);
(statearr_41540[(7)] = inst_41461);
return statearr_41540;
})();var statearr_41541_41576 = state_41512__$1;(statearr_41541_41576[(2)] = null);
(statearr_41541_41576[(1)] = (5));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (10)))
{var inst_41476 = (state_41512[(8)]);var inst_41477 = (state_41512[(17)]);var inst_41475 = (state_41512[(2)]);var inst_41476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41475,(0),null);var inst_41477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41475,(1),null);var inst_41478 = (inst_41476__$1 == null);var inst_41479 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41477__$1,change);var inst_41480 = (inst_41478) || (inst_41479);var state_41512__$1 = (function (){var statearr_41542 = state_41512;(statearr_41542[(8)] = inst_41476__$1);
(statearr_41542[(17)] = inst_41477__$1);
return statearr_41542;
})();if(cljs.core.truth_(inst_41480))
{var statearr_41543_41577 = state_41512__$1;(statearr_41543_41577[(1)] = (11));
} else
{var statearr_41544_41578 = state_41512__$1;(statearr_41544_41578[(1)] = (12));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (18)))
{var inst_41471 = (state_41512[(18)]);var inst_41472 = (state_41512[(16)]);var inst_41477 = (state_41512[(17)]);var inst_41494 = cljs.core.empty_QMARK_(inst_41472);var inst_41495 = (inst_41471.cljs$core$IFn$_invoke$arity$1 ? inst_41471.cljs$core$IFn$_invoke$arity$1(inst_41477) : inst_41471.call(null,inst_41477));var inst_41496 = cljs.core.not(inst_41495);var inst_41497 = (inst_41494) && (inst_41496);var state_41512__$1 = state_41512;var statearr_41545_41579 = state_41512__$1;(statearr_41545_41579[(2)] = inst_41497);
(statearr_41545_41579[(1)] = (19));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41513 === (8)))
{var inst_41461 = (state_41512[(7)]);var state_41512__$1 = state_41512;var statearr_41546_41580 = state_41512__$1;(statearr_41546_41580[(2)] = inst_41461);
(statearr_41546_41580[(1)] = (9));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_41550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41550[(0)] = state_machine__5677__auto__);
(statearr_41550[(1)] = (1));
return statearr_41550;
});
var state_machine__5677__auto____1 = (function (state_41512){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_41512);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e41551){if((e41551 instanceof Object))
{var ex__5680__auto__ = e41551;var statearr_41552_41581 = state_41512;(statearr_41552_41581[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41512);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e41551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__41582 = state_41512;
state_41512 = G__41582;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_41512){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_41512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_41553 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_41553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___41554);
return statearr_41553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___41554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj41584 = {};return obj41584;
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
{throw cljs.core.missing_protocol("Pub.sub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3541__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3541__auto__,mults){
return (function (p1__41585_SHARP_){if(cljs.core.truth_((p1__41585_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41585_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41585_SHARP_.call(null,topic))))
{return p1__41585_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41585_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t41710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41710 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta41711){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta41711 = meta41711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41710.cljs$lang$type = true;
cljs.core.async.t41710.cljs$lang$ctorStr = "cljs.core.async/t41710";
cljs.core.async.t41710.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async/t41710");
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t41710.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41712){var self__ = this;
var _41712__$1 = this;return self__.meta41711;
});})(mults,ensure_mult))
;
cljs.core.async.t41710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41712,meta41711__$1){var self__ = this;
var _41712__$1 = this;return (new cljs.core.async.t41710(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta41711__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t41710 = ((function (mults,ensure_mult){
return (function __GT_t41710(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41711){return (new cljs.core.async.t41710(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41711));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t41710(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___41834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___41834,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___41834,mults,ensure_mult,p){
return (function (state_41786){var state_val_41787 = (state_41786[(1)]);if((state_val_41787 === (7)))
{var inst_41782 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41788_41835 = state_41786__$1;(statearr_41788_41835[(2)] = inst_41782);
(statearr_41788_41835[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (20)))
{var state_41786__$1 = state_41786;var statearr_41789_41836 = state_41786__$1;(statearr_41789_41836[(2)] = null);
(statearr_41789_41836[(1)] = (21));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (1)))
{var state_41786__$1 = state_41786;var statearr_41790_41837 = state_41786__$1;(statearr_41790_41837[(2)] = null);
(statearr_41790_41837[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (24)))
{var inst_41765 = (state_41786[(7)]);var inst_41715 = (state_41786[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41786,(23),Object,null,(22));var inst_41772 = cljs.core.async.muxch_STAR_(inst_41765);var state_41786__$1 = state_41786;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41786__$1,(25),inst_41772,inst_41715);
} else
{if((state_val_41787 === (4)))
{var inst_41715 = (state_41786[(8)]);var inst_41715__$1 = (state_41786[(2)]);var inst_41716 = (inst_41715__$1 == null);var state_41786__$1 = (function (){var statearr_41791 = state_41786;(statearr_41791[(8)] = inst_41715__$1);
return statearr_41791;
})();if(cljs.core.truth_(inst_41716))
{var statearr_41792_41838 = state_41786__$1;(statearr_41792_41838[(1)] = (5));
} else
{var statearr_41793_41839 = state_41786__$1;(statearr_41793_41839[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (15)))
{var inst_41757 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41794_41840 = state_41786__$1;(statearr_41794_41840[(2)] = inst_41757);
(statearr_41794_41840[(1)] = (12));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (21)))
{var inst_41779 = (state_41786[(2)]);var state_41786__$1 = (function (){var statearr_41795 = state_41786;(statearr_41795[(9)] = inst_41779);
return statearr_41795;
})();var statearr_41796_41841 = state_41786__$1;(statearr_41796_41841[(2)] = null);
(statearr_41796_41841[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (13)))
{var inst_41739 = (state_41786[(10)]);var inst_41741 = cljs.core.chunked_seq_QMARK_(inst_41739);var state_41786__$1 = state_41786;if(inst_41741)
{var statearr_41797_41842 = state_41786__$1;(statearr_41797_41842[(1)] = (16));
} else
{var statearr_41798_41843 = state_41786__$1;(statearr_41798_41843[(1)] = (17));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (22)))
{var inst_41776 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41799_41844 = state_41786__$1;(statearr_41799_41844[(2)] = inst_41776);
(statearr_41799_41844[(1)] = (21));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (6)))
{var inst_41765 = (state_41786[(7)]);var inst_41715 = (state_41786[(8)]);var inst_41763 = (state_41786[(11)]);var inst_41763__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41715) : topic_fn.call(null,inst_41715));var inst_41764 = cljs.core.deref(mults);var inst_41765__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41764,inst_41763__$1);var state_41786__$1 = (function (){var statearr_41800 = state_41786;(statearr_41800[(7)] = inst_41765__$1);
(statearr_41800[(11)] = inst_41763__$1);
return statearr_41800;
})();if(cljs.core.truth_(inst_41765__$1))
{var statearr_41801_41845 = state_41786__$1;(statearr_41801_41845[(1)] = (19));
} else
{var statearr_41802_41846 = state_41786__$1;(statearr_41802_41846[(1)] = (20));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (25)))
{var inst_41774 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41803_41847 = state_41786__$1;(statearr_41803_41847[(2)] = inst_41774);
cljs.core.async.impl.ioc_helpers.process_exception(state_41786__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (17)))
{var inst_41739 = (state_41786[(10)]);var inst_41748 = cljs.core.first(inst_41739);var inst_41749 = cljs.core.async.muxch_STAR_(inst_41748);var inst_41750 = cljs.core.async.close_BANG_(inst_41749);var inst_41751 = cljs.core.next(inst_41739);var inst_41725 = inst_41751;var inst_41726 = null;var inst_41727 = (0);var inst_41728 = (0);var state_41786__$1 = (function (){var statearr_41804 = state_41786;(statearr_41804[(12)] = inst_41725);
(statearr_41804[(13)] = inst_41727);
(statearr_41804[(14)] = inst_41750);
(statearr_41804[(15)] = inst_41726);
(statearr_41804[(16)] = inst_41728);
return statearr_41804;
})();var statearr_41805_41848 = state_41786__$1;(statearr_41805_41848[(2)] = null);
(statearr_41805_41848[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (3)))
{var inst_41784 = (state_41786[(2)]);var state_41786__$1 = state_41786;return cljs.core.async.impl.ioc_helpers.return_chan(state_41786__$1,inst_41784);
} else
{if((state_val_41787 === (12)))
{var inst_41759 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41806_41849 = state_41786__$1;(statearr_41806_41849[(2)] = inst_41759);
(statearr_41806_41849[(1)] = (9));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (2)))
{var state_41786__$1 = state_41786;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41786__$1,(4),ch);
} else
{if((state_val_41787 === (23)))
{var inst_41763 = (state_41786[(11)]);var inst_41767 = (state_41786[(2)]);var inst_41768 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41763);var state_41786__$1 = (function (){var statearr_41807 = state_41786;(statearr_41807[(17)] = inst_41767);
return statearr_41807;
})();var statearr_41808_41850 = state_41786__$1;(statearr_41808_41850[(2)] = inst_41768);
cljs.core.async.impl.ioc_helpers.process_exception(state_41786__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (19)))
{var state_41786__$1 = state_41786;var statearr_41809_41851 = state_41786__$1;(statearr_41809_41851[(2)] = null);
(statearr_41809_41851[(1)] = (24));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (11)))
{var inst_41725 = (state_41786[(12)]);var inst_41739 = (state_41786[(10)]);var inst_41739__$1 = cljs.core.seq(inst_41725);var state_41786__$1 = (function (){var statearr_41810 = state_41786;(statearr_41810[(10)] = inst_41739__$1);
return statearr_41810;
})();if(inst_41739__$1)
{var statearr_41811_41852 = state_41786__$1;(statearr_41811_41852[(1)] = (13));
} else
{var statearr_41812_41853 = state_41786__$1;(statearr_41812_41853[(1)] = (14));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (9)))
{var inst_41761 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41813_41854 = state_41786__$1;(statearr_41813_41854[(2)] = inst_41761);
(statearr_41813_41854[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (5)))
{var inst_41722 = cljs.core.deref(mults);var inst_41723 = cljs.core.vals(inst_41722);var inst_41724 = cljs.core.seq(inst_41723);var inst_41725 = inst_41724;var inst_41726 = null;var inst_41727 = (0);var inst_41728 = (0);var state_41786__$1 = (function (){var statearr_41814 = state_41786;(statearr_41814[(12)] = inst_41725);
(statearr_41814[(13)] = inst_41727);
(statearr_41814[(15)] = inst_41726);
(statearr_41814[(16)] = inst_41728);
return statearr_41814;
})();var statearr_41815_41855 = state_41786__$1;(statearr_41815_41855[(2)] = null);
(statearr_41815_41855[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (14)))
{var state_41786__$1 = state_41786;var statearr_41819_41856 = state_41786__$1;(statearr_41819_41856[(2)] = null);
(statearr_41819_41856[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (16)))
{var inst_41739 = (state_41786[(10)]);var inst_41743 = cljs.core.chunk_first(inst_41739);var inst_41744 = cljs.core.chunk_rest(inst_41739);var inst_41745 = cljs.core.count(inst_41743);var inst_41725 = inst_41744;var inst_41726 = inst_41743;var inst_41727 = inst_41745;var inst_41728 = (0);var state_41786__$1 = (function (){var statearr_41820 = state_41786;(statearr_41820[(12)] = inst_41725);
(statearr_41820[(13)] = inst_41727);
(statearr_41820[(15)] = inst_41726);
(statearr_41820[(16)] = inst_41728);
return statearr_41820;
})();var statearr_41821_41857 = state_41786__$1;(statearr_41821_41857[(2)] = null);
(statearr_41821_41857[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (10)))
{var inst_41725 = (state_41786[(12)]);var inst_41727 = (state_41786[(13)]);var inst_41726 = (state_41786[(15)]);var inst_41728 = (state_41786[(16)]);var inst_41733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41726,inst_41728);var inst_41734 = cljs.core.async.muxch_STAR_(inst_41733);var inst_41735 = cljs.core.async.close_BANG_(inst_41734);var inst_41736 = (inst_41728 + (1));var tmp41816 = inst_41725;var tmp41817 = inst_41727;var tmp41818 = inst_41726;var inst_41725__$1 = tmp41816;var inst_41726__$1 = tmp41818;var inst_41727__$1 = tmp41817;var inst_41728__$1 = inst_41736;var state_41786__$1 = (function (){var statearr_41822 = state_41786;(statearr_41822[(12)] = inst_41725__$1);
(statearr_41822[(13)] = inst_41727__$1);
(statearr_41822[(18)] = inst_41735);
(statearr_41822[(15)] = inst_41726__$1);
(statearr_41822[(16)] = inst_41728__$1);
return statearr_41822;
})();var statearr_41823_41858 = state_41786__$1;(statearr_41823_41858[(2)] = null);
(statearr_41823_41858[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (18)))
{var inst_41754 = (state_41786[(2)]);var state_41786__$1 = state_41786;var statearr_41824_41859 = state_41786__$1;(statearr_41824_41859[(2)] = inst_41754);
(statearr_41824_41859[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41787 === (8)))
{var inst_41727 = (state_41786[(13)]);var inst_41728 = (state_41786[(16)]);var inst_41730 = (inst_41728 < inst_41727);var inst_41731 = inst_41730;var state_41786__$1 = state_41786;if(cljs.core.truth_(inst_41731))
{var statearr_41825_41860 = state_41786__$1;(statearr_41825_41860[(1)] = (10));
} else
{var statearr_41826_41861 = state_41786__$1;(statearr_41826_41861[(1)] = (11));
}
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___41834,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___41834,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_41830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41830[(0)] = state_machine__5677__auto__);
(statearr_41830[(1)] = (1));
return statearr_41830;
});
var state_machine__5677__auto____1 = (function (state_41786){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_41786);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e41831){if((e41831 instanceof Object))
{var ex__5680__auto__ = e41831;var statearr_41832_41862 = state_41786;(statearr_41832_41862[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41786);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e41831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__41863 = state_41786;
state_41786 = G__41863;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_41786){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_41786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___41834,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_41833 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_41833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___41834);
return statearr_41833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___41834,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5691__auto___42000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41970){var state_val_41971 = (state_41970[(1)]);if((state_val_41971 === (7)))
{var state_41970__$1 = state_41970;var statearr_41972_42001 = state_41970__$1;(statearr_41972_42001[(2)] = null);
(statearr_41972_42001[(1)] = (8));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (1)))
{var state_41970__$1 = state_41970;var statearr_41973_42002 = state_41970__$1;(statearr_41973_42002[(2)] = null);
(statearr_41973_42002[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (4)))
{var inst_41934 = (state_41970[(7)]);var inst_41936 = (inst_41934 < cnt);var state_41970__$1 = state_41970;if(cljs.core.truth_(inst_41936))
{var statearr_41974_42003 = state_41970__$1;(statearr_41974_42003[(1)] = (6));
} else
{var statearr_41975_42004 = state_41970__$1;(statearr_41975_42004[(1)] = (7));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (15)))
{var inst_41966 = (state_41970[(2)]);var state_41970__$1 = state_41970;var statearr_41976_42005 = state_41970__$1;(statearr_41976_42005[(2)] = inst_41966);
(statearr_41976_42005[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (13)))
{var inst_41959 = cljs.core.async.close_BANG_(out);var state_41970__$1 = state_41970;var statearr_41977_42006 = state_41970__$1;(statearr_41977_42006[(2)] = inst_41959);
(statearr_41977_42006[(1)] = (15));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (6)))
{var state_41970__$1 = state_41970;var statearr_41978_42007 = state_41970__$1;(statearr_41978_42007[(2)] = null);
(statearr_41978_42007[(1)] = (11));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (3)))
{var inst_41968 = (state_41970[(2)]);var state_41970__$1 = state_41970;return cljs.core.async.impl.ioc_helpers.return_chan(state_41970__$1,inst_41968);
} else
{if((state_val_41971 === (12)))
{var inst_41956 = (state_41970[(8)]);var inst_41956__$1 = (state_41970[(2)]);var inst_41957 = cljs.core.some(cljs.core.nil_QMARK_,inst_41956__$1);var state_41970__$1 = (function (){var statearr_41979 = state_41970;(statearr_41979[(8)] = inst_41956__$1);
return statearr_41979;
})();if(cljs.core.truth_(inst_41957))
{var statearr_41980_42008 = state_41970__$1;(statearr_41980_42008[(1)] = (13));
} else
{var statearr_41981_42009 = state_41970__$1;(statearr_41981_42009[(1)] = (14));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (2)))
{var inst_41933 = cljs.core.reset_BANG_(dctr,cnt);var inst_41934 = (0);var state_41970__$1 = (function (){var statearr_41982 = state_41970;(statearr_41982[(7)] = inst_41934);
(statearr_41982[(9)] = inst_41933);
return statearr_41982;
})();var statearr_41983_42010 = state_41970__$1;(statearr_41983_42010[(2)] = null);
(statearr_41983_42010[(1)] = (4));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (11)))
{var inst_41934 = (state_41970[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41970,(10),Object,null,(9));var inst_41943 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41934) : chs__$1.call(null,inst_41934));var inst_41944 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41934) : done.call(null,inst_41934));var inst_41945 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41943,inst_41944);var state_41970__$1 = state_41970;var statearr_41984_42011 = state_41970__$1;(statearr_41984_42011[(2)] = inst_41945);
cljs.core.async.impl.ioc_helpers.process_exception(state_41970__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (9)))
{var inst_41934 = (state_41970[(7)]);var inst_41947 = (state_41970[(2)]);var inst_41948 = (inst_41934 + (1));var inst_41934__$1 = inst_41948;var state_41970__$1 = (function (){var statearr_41985 = state_41970;(statearr_41985[(10)] = inst_41947);
(statearr_41985[(7)] = inst_41934__$1);
return statearr_41985;
})();var statearr_41986_42012 = state_41970__$1;(statearr_41986_42012[(2)] = null);
(statearr_41986_42012[(1)] = (4));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (5)))
{var inst_41954 = (state_41970[(2)]);var state_41970__$1 = (function (){var statearr_41987 = state_41970;(statearr_41987[(11)] = inst_41954);
return statearr_41987;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41970__$1,(12),dchan);
} else
{if((state_val_41971 === (14)))
{var inst_41956 = (state_41970[(8)]);var inst_41961 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41956);var state_41970__$1 = state_41970;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41970__$1,(16),out,inst_41961);
} else
{if((state_val_41971 === (16)))
{var inst_41963 = (state_41970[(2)]);var state_41970__$1 = (function (){var statearr_41988 = state_41970;(statearr_41988[(12)] = inst_41963);
return statearr_41988;
})();var statearr_41989_42013 = state_41970__$1;(statearr_41989_42013[(2)] = null);
(statearr_41989_42013[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (10)))
{var inst_41938 = (state_41970[(2)]);var inst_41939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_41970__$1 = (function (){var statearr_41990 = state_41970;(statearr_41990[(13)] = inst_41938);
return statearr_41990;
})();var statearr_41991_42014 = state_41970__$1;(statearr_41991_42014[(2)] = inst_41939);
cljs.core.async.impl.ioc_helpers.process_exception(state_41970__$1);
return cljs.core.constant$keyword$787;
} else
{if((state_val_41971 === (8)))
{var inst_41952 = (state_41970[(2)]);var state_41970__$1 = state_41970;var statearr_41992_42015 = state_41970__$1;(statearr_41992_42015[(2)] = inst_41952);
(statearr_41992_42015[(1)] = (5));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_41996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41996[(0)] = state_machine__5677__auto__);
(statearr_41996[(1)] = (1));
return statearr_41996;
});
var state_machine__5677__auto____1 = (function (state_41970){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_41970);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e41997){if((e41997 instanceof Object))
{var ex__5680__auto__ = e41997;var statearr_41998_42016 = state_41970;(statearr_41998_42016[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41970);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e41997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42017 = state_41970;
state_41970 = G__42017;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_41970){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_41970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_41999 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_41999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42000);
return statearr_41999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42000,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___42125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42125,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42125,out){
return (function (state_42101){var state_val_42102 = (state_42101[(1)]);if((state_val_42102 === (7)))
{var inst_42080 = (state_42101[(7)]);var inst_42081 = (state_42101[(8)]);var inst_42080__$1 = (state_42101[(2)]);var inst_42081__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42080__$1,(0),null);var inst_42082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42080__$1,(1),null);var inst_42083 = (inst_42081__$1 == null);var state_42101__$1 = (function (){var statearr_42103 = state_42101;(statearr_42103[(7)] = inst_42080__$1);
(statearr_42103[(9)] = inst_42082);
(statearr_42103[(8)] = inst_42081__$1);
return statearr_42103;
})();if(cljs.core.truth_(inst_42083))
{var statearr_42104_42126 = state_42101__$1;(statearr_42104_42126[(1)] = (8));
} else
{var statearr_42105_42127 = state_42101__$1;(statearr_42105_42127[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (1)))
{var inst_42072 = cljs.core.vec(chs);var inst_42073 = inst_42072;var state_42101__$1 = (function (){var statearr_42106 = state_42101;(statearr_42106[(10)] = inst_42073);
return statearr_42106;
})();var statearr_42107_42128 = state_42101__$1;(statearr_42107_42128[(2)] = null);
(statearr_42107_42128[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (4)))
{var inst_42073 = (state_42101[(10)]);var state_42101__$1 = state_42101;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_42101__$1,(7),inst_42073);
} else
{if((state_val_42102 === (6)))
{var inst_42097 = (state_42101[(2)]);var state_42101__$1 = state_42101;var statearr_42108_42129 = state_42101__$1;(statearr_42108_42129[(2)] = inst_42097);
(statearr_42108_42129[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (3)))
{var inst_42099 = (state_42101[(2)]);var state_42101__$1 = state_42101;return cljs.core.async.impl.ioc_helpers.return_chan(state_42101__$1,inst_42099);
} else
{if((state_val_42102 === (2)))
{var inst_42073 = (state_42101[(10)]);var inst_42075 = cljs.core.count(inst_42073);var inst_42076 = (inst_42075 > (0));var state_42101__$1 = state_42101;if(cljs.core.truth_(inst_42076))
{var statearr_42110_42130 = state_42101__$1;(statearr_42110_42130[(1)] = (4));
} else
{var statearr_42111_42131 = state_42101__$1;(statearr_42111_42131[(1)] = (5));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (11)))
{var inst_42073 = (state_42101[(10)]);var inst_42090 = (state_42101[(2)]);var tmp42109 = inst_42073;var inst_42073__$1 = tmp42109;var state_42101__$1 = (function (){var statearr_42112 = state_42101;(statearr_42112[(11)] = inst_42090);
(statearr_42112[(10)] = inst_42073__$1);
return statearr_42112;
})();var statearr_42113_42132 = state_42101__$1;(statearr_42113_42132[(2)] = null);
(statearr_42113_42132[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (9)))
{var inst_42081 = (state_42101[(8)]);var state_42101__$1 = state_42101;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42101__$1,(11),out,inst_42081);
} else
{if((state_val_42102 === (5)))
{var inst_42095 = cljs.core.async.close_BANG_(out);var state_42101__$1 = state_42101;var statearr_42114_42133 = state_42101__$1;(statearr_42114_42133[(2)] = inst_42095);
(statearr_42114_42133[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (10)))
{var inst_42093 = (state_42101[(2)]);var state_42101__$1 = state_42101;var statearr_42115_42134 = state_42101__$1;(statearr_42115_42134[(2)] = inst_42093);
(statearr_42115_42134[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42102 === (8)))
{var inst_42080 = (state_42101[(7)]);var inst_42082 = (state_42101[(9)]);var inst_42073 = (state_42101[(10)]);var inst_42081 = (state_42101[(8)]);var inst_42085 = (function (){var c = inst_42082;var v = inst_42081;var vec__42078 = inst_42080;var cs = inst_42073;return ((function (c,v,vec__42078,cs,inst_42080,inst_42082,inst_42073,inst_42081,state_val_42102,c__5691__auto___42125,out){
return (function (p1__42018_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42018_SHARP_);
});
;})(c,v,vec__42078,cs,inst_42080,inst_42082,inst_42073,inst_42081,state_val_42102,c__5691__auto___42125,out))
})();var inst_42086 = cljs.core.filterv(inst_42085,inst_42073);var inst_42073__$1 = inst_42086;var state_42101__$1 = (function (){var statearr_42116 = state_42101;(statearr_42116[(10)] = inst_42073__$1);
return statearr_42116;
})();var statearr_42117_42135 = state_42101__$1;(statearr_42117_42135[(2)] = null);
(statearr_42117_42135[(1)] = (2));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___42125,out))
;return ((function (switch__5676__auto__,c__5691__auto___42125,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_42121 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42121[(0)] = state_machine__5677__auto__);
(statearr_42121[(1)] = (1));
return statearr_42121;
});
var state_machine__5677__auto____1 = (function (state_42101){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_42101);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e42122){if((e42122 instanceof Object))
{var ex__5680__auto__ = e42122;var statearr_42123_42136 = state_42101;(statearr_42123_42136[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42101);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e42122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42137 = state_42101;
state_42101 = G__42137;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_42101){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_42101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42125,out))
})();var state__5693__auto__ = (function (){var statearr_42124 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_42124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42125);
return statearr_42124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42125,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___42230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42230,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42230,out){
return (function (state_42207){var state_val_42208 = (state_42207[(1)]);if((state_val_42208 === (7)))
{var inst_42189 = (state_42207[(7)]);var inst_42189__$1 = (state_42207[(2)]);var inst_42190 = (inst_42189__$1 == null);var inst_42191 = cljs.core.not(inst_42190);var state_42207__$1 = (function (){var statearr_42209 = state_42207;(statearr_42209[(7)] = inst_42189__$1);
return statearr_42209;
})();if(inst_42191)
{var statearr_42210_42231 = state_42207__$1;(statearr_42210_42231[(1)] = (8));
} else
{var statearr_42211_42232 = state_42207__$1;(statearr_42211_42232[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (1)))
{var inst_42184 = (0);var state_42207__$1 = (function (){var statearr_42212 = state_42207;(statearr_42212[(8)] = inst_42184);
return statearr_42212;
})();var statearr_42213_42233 = state_42207__$1;(statearr_42213_42233[(2)] = null);
(statearr_42213_42233[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (4)))
{var state_42207__$1 = state_42207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42207__$1,(7),ch);
} else
{if((state_val_42208 === (6)))
{var inst_42202 = (state_42207[(2)]);var state_42207__$1 = state_42207;var statearr_42214_42234 = state_42207__$1;(statearr_42214_42234[(2)] = inst_42202);
(statearr_42214_42234[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (3)))
{var inst_42204 = (state_42207[(2)]);var inst_42205 = cljs.core.async.close_BANG_(out);var state_42207__$1 = (function (){var statearr_42215 = state_42207;(statearr_42215[(9)] = inst_42204);
return statearr_42215;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42207__$1,inst_42205);
} else
{if((state_val_42208 === (2)))
{var inst_42184 = (state_42207[(8)]);var inst_42186 = (inst_42184 < n);var state_42207__$1 = state_42207;if(cljs.core.truth_(inst_42186))
{var statearr_42216_42235 = state_42207__$1;(statearr_42216_42235[(1)] = (4));
} else
{var statearr_42217_42236 = state_42207__$1;(statearr_42217_42236[(1)] = (5));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (11)))
{var inst_42184 = (state_42207[(8)]);var inst_42194 = (state_42207[(2)]);var inst_42195 = (inst_42184 + (1));var inst_42184__$1 = inst_42195;var state_42207__$1 = (function (){var statearr_42218 = state_42207;(statearr_42218[(8)] = inst_42184__$1);
(statearr_42218[(10)] = inst_42194);
return statearr_42218;
})();var statearr_42219_42237 = state_42207__$1;(statearr_42219_42237[(2)] = null);
(statearr_42219_42237[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (9)))
{var state_42207__$1 = state_42207;var statearr_42220_42238 = state_42207__$1;(statearr_42220_42238[(2)] = null);
(statearr_42220_42238[(1)] = (10));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (5)))
{var state_42207__$1 = state_42207;var statearr_42221_42239 = state_42207__$1;(statearr_42221_42239[(2)] = null);
(statearr_42221_42239[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (10)))
{var inst_42199 = (state_42207[(2)]);var state_42207__$1 = state_42207;var statearr_42222_42240 = state_42207__$1;(statearr_42222_42240[(2)] = inst_42199);
(statearr_42222_42240[(1)] = (6));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42208 === (8)))
{var inst_42189 = (state_42207[(7)]);var state_42207__$1 = state_42207;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42207__$1,(11),out,inst_42189);
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
});})(c__5691__auto___42230,out))
;return ((function (switch__5676__auto__,c__5691__auto___42230,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_42226 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42226[(0)] = state_machine__5677__auto__);
(statearr_42226[(1)] = (1));
return statearr_42226;
});
var state_machine__5677__auto____1 = (function (state_42207){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_42207);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e42227){if((e42227 instanceof Object))
{var ex__5680__auto__ = e42227;var statearr_42228_42241 = state_42207;(statearr_42228_42241[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42207);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e42227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42242 = state_42207;
state_42207 = G__42242;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_42207){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_42207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42230,out))
})();var state__5693__auto__ = (function (){var statearr_42229 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_42229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42230);
return statearr_42229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42230,out))
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
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___42339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42339,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42339,out){
return (function (state_42314){var state_val_42315 = (state_42314[(1)]);if((state_val_42315 === (7)))
{var inst_42309 = (state_42314[(2)]);var state_42314__$1 = state_42314;var statearr_42316_42340 = state_42314__$1;(statearr_42316_42340[(2)] = inst_42309);
(statearr_42316_42340[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (1)))
{var inst_42291 = null;var state_42314__$1 = (function (){var statearr_42317 = state_42314;(statearr_42317[(7)] = inst_42291);
return statearr_42317;
})();var statearr_42318_42341 = state_42314__$1;(statearr_42318_42341[(2)] = null);
(statearr_42318_42341[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (4)))
{var inst_42294 = (state_42314[(8)]);var inst_42294__$1 = (state_42314[(2)]);var inst_42295 = (inst_42294__$1 == null);var inst_42296 = cljs.core.not(inst_42295);var state_42314__$1 = (function (){var statearr_42319 = state_42314;(statearr_42319[(8)] = inst_42294__$1);
return statearr_42319;
})();if(inst_42296)
{var statearr_42320_42342 = state_42314__$1;(statearr_42320_42342[(1)] = (5));
} else
{var statearr_42321_42343 = state_42314__$1;(statearr_42321_42343[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (6)))
{var state_42314__$1 = state_42314;var statearr_42322_42344 = state_42314__$1;(statearr_42322_42344[(2)] = null);
(statearr_42322_42344[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (3)))
{var inst_42311 = (state_42314[(2)]);var inst_42312 = cljs.core.async.close_BANG_(out);var state_42314__$1 = (function (){var statearr_42323 = state_42314;(statearr_42323[(9)] = inst_42311);
return statearr_42323;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_42314__$1,inst_42312);
} else
{if((state_val_42315 === (2)))
{var state_42314__$1 = state_42314;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42314__$1,(4),ch);
} else
{if((state_val_42315 === (11)))
{var inst_42294 = (state_42314[(8)]);var inst_42303 = (state_42314[(2)]);var inst_42291 = inst_42294;var state_42314__$1 = (function (){var statearr_42324 = state_42314;(statearr_42324[(7)] = inst_42291);
(statearr_42324[(10)] = inst_42303);
return statearr_42324;
})();var statearr_42325_42345 = state_42314__$1;(statearr_42325_42345[(2)] = null);
(statearr_42325_42345[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (9)))
{var inst_42294 = (state_42314[(8)]);var state_42314__$1 = state_42314;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42314__$1,(11),out,inst_42294);
} else
{if((state_val_42315 === (5)))
{var inst_42291 = (state_42314[(7)]);var inst_42294 = (state_42314[(8)]);var inst_42298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42294,inst_42291);var state_42314__$1 = state_42314;if(inst_42298)
{var statearr_42327_42346 = state_42314__$1;(statearr_42327_42346[(1)] = (8));
} else
{var statearr_42328_42347 = state_42314__$1;(statearr_42328_42347[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (10)))
{var inst_42306 = (state_42314[(2)]);var state_42314__$1 = state_42314;var statearr_42329_42348 = state_42314__$1;(statearr_42329_42348[(2)] = inst_42306);
(statearr_42329_42348[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42315 === (8)))
{var inst_42291 = (state_42314[(7)]);var tmp42326 = inst_42291;var inst_42291__$1 = tmp42326;var state_42314__$1 = (function (){var statearr_42330 = state_42314;(statearr_42330[(7)] = inst_42291__$1);
return statearr_42330;
})();var statearr_42331_42349 = state_42314__$1;(statearr_42331_42349[(2)] = null);
(statearr_42331_42349[(1)] = (2));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___42339,out))
;return ((function (switch__5676__auto__,c__5691__auto___42339,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_42335 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42335[(0)] = state_machine__5677__auto__);
(statearr_42335[(1)] = (1));
return statearr_42335;
});
var state_machine__5677__auto____1 = (function (state_42314){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_42314);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e42336){if((e42336 instanceof Object))
{var ex__5680__auto__ = e42336;var statearr_42337_42350 = state_42314;(statearr_42337_42350[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42314);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e42336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42351 = state_42314;
state_42314 = G__42351;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_42314){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_42314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42339,out))
})();var state__5693__auto__ = (function (){var statearr_42338 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_42338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42339);
return statearr_42338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42339,out))
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
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___42486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42486,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42486,out){
return (function (state_42456){var state_val_42457 = (state_42456[(1)]);if((state_val_42457 === (7)))
{var inst_42452 = (state_42456[(2)]);var state_42456__$1 = state_42456;var statearr_42458_42487 = state_42456__$1;(statearr_42458_42487[(2)] = inst_42452);
(statearr_42458_42487[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (1)))
{var inst_42419 = (new Array(n));var inst_42420 = inst_42419;var inst_42421 = (0);var state_42456__$1 = (function (){var statearr_42459 = state_42456;(statearr_42459[(7)] = inst_42421);
(statearr_42459[(8)] = inst_42420);
return statearr_42459;
})();var statearr_42460_42488 = state_42456__$1;(statearr_42460_42488[(2)] = null);
(statearr_42460_42488[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (4)))
{var inst_42424 = (state_42456[(9)]);var inst_42424__$1 = (state_42456[(2)]);var inst_42425 = (inst_42424__$1 == null);var inst_42426 = cljs.core.not(inst_42425);var state_42456__$1 = (function (){var statearr_42461 = state_42456;(statearr_42461[(9)] = inst_42424__$1);
return statearr_42461;
})();if(inst_42426)
{var statearr_42462_42489 = state_42456__$1;(statearr_42462_42489[(1)] = (5));
} else
{var statearr_42463_42490 = state_42456__$1;(statearr_42463_42490[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (15)))
{var inst_42446 = (state_42456[(2)]);var state_42456__$1 = state_42456;var statearr_42464_42491 = state_42456__$1;(statearr_42464_42491[(2)] = inst_42446);
(statearr_42464_42491[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (13)))
{var state_42456__$1 = state_42456;var statearr_42465_42492 = state_42456__$1;(statearr_42465_42492[(2)] = null);
(statearr_42465_42492[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (6)))
{var inst_42421 = (state_42456[(7)]);var inst_42442 = (inst_42421 > (0));var state_42456__$1 = state_42456;if(cljs.core.truth_(inst_42442))
{var statearr_42466_42493 = state_42456__$1;(statearr_42466_42493[(1)] = (12));
} else
{var statearr_42467_42494 = state_42456__$1;(statearr_42467_42494[(1)] = (13));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (3)))
{var inst_42454 = (state_42456[(2)]);var state_42456__$1 = state_42456;return cljs.core.async.impl.ioc_helpers.return_chan(state_42456__$1,inst_42454);
} else
{if((state_val_42457 === (12)))
{var inst_42420 = (state_42456[(8)]);var inst_42444 = cljs.core.vec(inst_42420);var state_42456__$1 = state_42456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42456__$1,(15),out,inst_42444);
} else
{if((state_val_42457 === (2)))
{var state_42456__$1 = state_42456;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42456__$1,(4),ch);
} else
{if((state_val_42457 === (11)))
{var inst_42436 = (state_42456[(2)]);var inst_42437 = (new Array(n));var inst_42420 = inst_42437;var inst_42421 = (0);var state_42456__$1 = (function (){var statearr_42468 = state_42456;(statearr_42468[(7)] = inst_42421);
(statearr_42468[(8)] = inst_42420);
(statearr_42468[(10)] = inst_42436);
return statearr_42468;
})();var statearr_42469_42495 = state_42456__$1;(statearr_42469_42495[(2)] = null);
(statearr_42469_42495[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (9)))
{var inst_42420 = (state_42456[(8)]);var inst_42434 = cljs.core.vec(inst_42420);var state_42456__$1 = state_42456;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42456__$1,(11),out,inst_42434);
} else
{if((state_val_42457 === (5)))
{var inst_42421 = (state_42456[(7)]);var inst_42424 = (state_42456[(9)]);var inst_42420 = (state_42456[(8)]);var inst_42429 = (state_42456[(11)]);var inst_42428 = (inst_42420[inst_42421] = inst_42424);var inst_42429__$1 = (inst_42421 + (1));var inst_42430 = (inst_42429__$1 < n);var state_42456__$1 = (function (){var statearr_42470 = state_42456;(statearr_42470[(12)] = inst_42428);
(statearr_42470[(11)] = inst_42429__$1);
return statearr_42470;
})();if(cljs.core.truth_(inst_42430))
{var statearr_42471_42496 = state_42456__$1;(statearr_42471_42496[(1)] = (8));
} else
{var statearr_42472_42497 = state_42456__$1;(statearr_42472_42497[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (14)))
{var inst_42449 = (state_42456[(2)]);var inst_42450 = cljs.core.async.close_BANG_(out);var state_42456__$1 = (function (){var statearr_42474 = state_42456;(statearr_42474[(13)] = inst_42449);
return statearr_42474;
})();var statearr_42475_42498 = state_42456__$1;(statearr_42475_42498[(2)] = inst_42450);
(statearr_42475_42498[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (10)))
{var inst_42440 = (state_42456[(2)]);var state_42456__$1 = state_42456;var statearr_42476_42499 = state_42456__$1;(statearr_42476_42499[(2)] = inst_42440);
(statearr_42476_42499[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42457 === (8)))
{var inst_42420 = (state_42456[(8)]);var inst_42429 = (state_42456[(11)]);var tmp42473 = inst_42420;var inst_42420__$1 = tmp42473;var inst_42421 = inst_42429;var state_42456__$1 = (function (){var statearr_42477 = state_42456;(statearr_42477[(7)] = inst_42421);
(statearr_42477[(8)] = inst_42420__$1);
return statearr_42477;
})();var statearr_42478_42500 = state_42456__$1;(statearr_42478_42500[(2)] = null);
(statearr_42478_42500[(1)] = (2));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___42486,out))
;return ((function (switch__5676__auto__,c__5691__auto___42486,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_42482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42482[(0)] = state_machine__5677__auto__);
(statearr_42482[(1)] = (1));
return statearr_42482;
});
var state_machine__5677__auto____1 = (function (state_42456){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_42456);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e42483){if((e42483 instanceof Object))
{var ex__5680__auto__ = e42483;var statearr_42484_42501 = state_42456;(statearr_42484_42501[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42456);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e42483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42502 = state_42456;
state_42456 = G__42502;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_42456){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_42456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42486,out))
})();var state__5693__auto__ = (function (){var statearr_42485 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_42485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42486);
return statearr_42485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42486,out))
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
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5691__auto___42645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5691__auto___42645,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___42645,out){
return (function (state_42615){var state_val_42616 = (state_42615[(1)]);if((state_val_42616 === (7)))
{var inst_42611 = (state_42615[(2)]);var state_42615__$1 = state_42615;var statearr_42617_42646 = state_42615__$1;(statearr_42617_42646[(2)] = inst_42611);
(statearr_42617_42646[(1)] = (3));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (1)))
{var inst_42574 = [];var inst_42575 = inst_42574;var inst_42576 = cljs.core.constant$keyword$800;var state_42615__$1 = (function (){var statearr_42618 = state_42615;(statearr_42618[(7)] = inst_42575);
(statearr_42618[(8)] = inst_42576);
return statearr_42618;
})();var statearr_42619_42647 = state_42615__$1;(statearr_42619_42647[(2)] = null);
(statearr_42619_42647[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (4)))
{var inst_42579 = (state_42615[(9)]);var inst_42579__$1 = (state_42615[(2)]);var inst_42580 = (inst_42579__$1 == null);var inst_42581 = cljs.core.not(inst_42580);var state_42615__$1 = (function (){var statearr_42620 = state_42615;(statearr_42620[(9)] = inst_42579__$1);
return statearr_42620;
})();if(inst_42581)
{var statearr_42621_42648 = state_42615__$1;(statearr_42621_42648[(1)] = (5));
} else
{var statearr_42622_42649 = state_42615__$1;(statearr_42622_42649[(1)] = (6));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (15)))
{var inst_42605 = (state_42615[(2)]);var state_42615__$1 = state_42615;var statearr_42623_42650 = state_42615__$1;(statearr_42623_42650[(2)] = inst_42605);
(statearr_42623_42650[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (13)))
{var state_42615__$1 = state_42615;var statearr_42624_42651 = state_42615__$1;(statearr_42624_42651[(2)] = null);
(statearr_42624_42651[(1)] = (14));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (6)))
{var inst_42575 = (state_42615[(7)]);var inst_42600 = inst_42575.length;var inst_42601 = (inst_42600 > (0));var state_42615__$1 = state_42615;if(cljs.core.truth_(inst_42601))
{var statearr_42625_42652 = state_42615__$1;(statearr_42625_42652[(1)] = (12));
} else
{var statearr_42626_42653 = state_42615__$1;(statearr_42626_42653[(1)] = (13));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (3)))
{var inst_42613 = (state_42615[(2)]);var state_42615__$1 = state_42615;return cljs.core.async.impl.ioc_helpers.return_chan(state_42615__$1,inst_42613);
} else
{if((state_val_42616 === (12)))
{var inst_42575 = (state_42615[(7)]);var inst_42603 = cljs.core.vec(inst_42575);var state_42615__$1 = state_42615;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42615__$1,(15),out,inst_42603);
} else
{if((state_val_42616 === (2)))
{var state_42615__$1 = state_42615;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42615__$1,(4),ch);
} else
{if((state_val_42616 === (11)))
{var inst_42583 = (state_42615[(10)]);var inst_42579 = (state_42615[(9)]);var inst_42593 = (state_42615[(2)]);var inst_42594 = [];var inst_42595 = inst_42594.push(inst_42579);var inst_42575 = inst_42594;var inst_42576 = inst_42583;var state_42615__$1 = (function (){var statearr_42627 = state_42615;(statearr_42627[(11)] = inst_42593);
(statearr_42627[(7)] = inst_42575);
(statearr_42627[(8)] = inst_42576);
(statearr_42627[(12)] = inst_42595);
return statearr_42627;
})();var statearr_42628_42654 = state_42615__$1;(statearr_42628_42654[(2)] = null);
(statearr_42628_42654[(1)] = (2));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (9)))
{var inst_42575 = (state_42615[(7)]);var inst_42591 = cljs.core.vec(inst_42575);var state_42615__$1 = state_42615;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42615__$1,(11),out,inst_42591);
} else
{if((state_val_42616 === (5)))
{var inst_42576 = (state_42615[(8)]);var inst_42583 = (state_42615[(10)]);var inst_42579 = (state_42615[(9)]);var inst_42583__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42579) : f.call(null,inst_42579));var inst_42584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42583__$1,inst_42576);var inst_42585 = cljs.core.keyword_identical_QMARK_(inst_42576,cljs.core.constant$keyword$800);var inst_42586 = (inst_42584) || (inst_42585);var state_42615__$1 = (function (){var statearr_42629 = state_42615;(statearr_42629[(10)] = inst_42583__$1);
return statearr_42629;
})();if(cljs.core.truth_(inst_42586))
{var statearr_42630_42655 = state_42615__$1;(statearr_42630_42655[(1)] = (8));
} else
{var statearr_42631_42656 = state_42615__$1;(statearr_42631_42656[(1)] = (9));
}
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (14)))
{var inst_42608 = (state_42615[(2)]);var inst_42609 = cljs.core.async.close_BANG_(out);var state_42615__$1 = (function (){var statearr_42633 = state_42615;(statearr_42633[(13)] = inst_42608);
return statearr_42633;
})();var statearr_42634_42657 = state_42615__$1;(statearr_42634_42657[(2)] = inst_42609);
(statearr_42634_42657[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (10)))
{var inst_42598 = (state_42615[(2)]);var state_42615__$1 = state_42615;var statearr_42635_42658 = state_42615__$1;(statearr_42635_42658[(2)] = inst_42598);
(statearr_42635_42658[(1)] = (7));
return cljs.core.constant$keyword$787;
} else
{if((state_val_42616 === (8)))
{var inst_42575 = (state_42615[(7)]);var inst_42583 = (state_42615[(10)]);var inst_42579 = (state_42615[(9)]);var inst_42588 = inst_42575.push(inst_42579);var tmp42632 = inst_42575;var inst_42575__$1 = tmp42632;var inst_42576 = inst_42583;var state_42615__$1 = (function (){var statearr_42636 = state_42615;(statearr_42636[(7)] = inst_42575__$1);
(statearr_42636[(8)] = inst_42576);
(statearr_42636[(14)] = inst_42588);
return statearr_42636;
})();var statearr_42637_42659 = state_42615__$1;(statearr_42637_42659[(2)] = null);
(statearr_42637_42659[(1)] = (2));
return cljs.core.constant$keyword$787;
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
});})(c__5691__auto___42645,out))
;return ((function (switch__5676__auto__,c__5691__auto___42645,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_42641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42641[(0)] = state_machine__5677__auto__);
(statearr_42641[(1)] = (1));
return statearr_42641;
});
var state_machine__5677__auto____1 = (function (state_42615){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__(state_42615);if(cljs.core.keyword_identical_QMARK_(result__5679__auto__,cljs.core.constant$keyword$787))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e42642){if((e42642 instanceof Object))
{var ex__5680__auto__ = e42642;var statearr_42643_42660 = state_42615;(statearr_42643_42660[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42615);
return cljs.core.constant$keyword$787;
} else
{if(cljs.core.constant$keyword$778)
{throw e42642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5678__auto__,cljs.core.constant$keyword$787))
{{
var G__42661 = state_42615;
state_42615 = G__42661;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_42615){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_42615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___42645,out))
})();var state__5693__auto__ = (function (){var statearr_42644 = (f__5692__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5692__auto__.cljs$core$IFn$_invoke$arity$0() : f__5692__auto__.call(null));(statearr_42644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___42645);
return statearr_42644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5693__auto__);
});})(c__5691__auto___42645,out))
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
