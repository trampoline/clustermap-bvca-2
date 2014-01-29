// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23067 = (function (f,fn_handler,meta23068){
this.f = f;
this.fn_handler = fn_handler;
this.meta23068 = meta23068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23067.cljs$lang$type = true;
cljs.core.async.t23067.cljs$lang$ctorStr = "cljs.core.async/t23067";
cljs.core.async.t23067.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23067");
});
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23069){var self__ = this;
var _23069__$1 = this;return self__.meta23068;
});
cljs.core.async.t23067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23069,meta23068__$1){var self__ = this;
var _23069__$1 = this;return (new cljs.core.async.t23067(self__.f,self__.fn_handler,meta23068__$1));
});
cljs.core.async.__GT_t23067 = (function __GT_t23067(f__$1,fn_handler__$1,meta23068){return (new cljs.core.async.t23067(f__$1,fn_handler__$1,meta23068));
});
}
return (new cljs.core.async.t23067(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23071 = buff;if(G__23071)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23071.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23071.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23071);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23071);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
{var val_23072 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23072) : fn1.call(null,val_23072));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23072) : fn1.call(null,val_23072));
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23073 = n;var x_23074 = 0;while(true){
if((x_23074 < n__4248__auto___23073))
{(a[x_23074] = 0);
{
var G__23075 = (x_23074 + 1);
x_23074 = G__23075;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23076 = (i + 1);
i = G__23076;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23080 = (function (flag,alt_flag,meta23081){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23081 = meta23081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23080.cljs$lang$type = true;
cljs.core.async.t23080.cljs$lang$ctorStr = "cljs.core.async/t23080";
cljs.core.async.t23080.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23080");
});
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23082){var self__ = this;
var _23082__$1 = this;return self__.meta23081;
});
cljs.core.async.t23080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23082,meta23081__$1){var self__ = this;
var _23082__$1 = this;return (new cljs.core.async.t23080(self__.flag,self__.alt_flag,meta23081__$1));
});
cljs.core.async.__GT_t23080 = (function __GT_t23080(flag__$1,alt_flag__$1,meta23081){return (new cljs.core.async.t23080(flag__$1,alt_flag__$1,meta23081));
});
}
return (new cljs.core.async.t23080(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23086 = (function (cb,flag,alt_handler,meta23087){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23087 = meta23087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23086.cljs$lang$type = true;
cljs.core.async.t23086.cljs$lang$ctorStr = "cljs.core.async/t23086";
cljs.core.async.t23086.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23086");
});
cljs.core.async.t23086.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23088){var self__ = this;
var _23088__$1 = this;return self__.meta23087;
});
cljs.core.async.t23086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23088,meta23087__$1){var self__ = this;
var _23088__$1 = this;return (new cljs.core.async.t23086(self__.cb,self__.flag,self__.alt_handler,meta23087__$1));
});
cljs.core.async.__GT_t23086 = (function __GT_t23086(cb__$1,flag__$1,alt_handler__$1,meta23087){return (new cljs.core.async.t23086(cb__$1,flag__$1,alt_handler__$1,meta23087));
});
}
return (new cljs.core.async.t23086(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23089_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23089_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23089_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23090 = (i + 1);
i = G__23090;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$186))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$186], null));
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
var alts_BANG___delegate = function (ports,p__23091){var map__23093 = p__23091;var map__23093__$1 = ((cljs.core.seq_QMARK_(map__23093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23093):map__23093);var opts = map__23093__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23091 = null;if (arguments.length > 1) {
  p__23091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23091);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23094){
var ports = cljs.core.first(arglist__23094);
var p__23091 = cljs.core.rest(arglist__23094);
return alts_BANG___delegate(ports,p__23091);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23102 = (function (ch,f,map_LT_,meta23103){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23103 = meta23103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23102.cljs$lang$type = true;
cljs.core.async.t23102.cljs$lang$ctorStr = "cljs.core.async/t23102";
cljs.core.async.t23102.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23102");
});
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23105 = (function (fn1,_,meta23103,ch,f,map_LT_,meta23106){
this.fn1 = fn1;
this._ = _;
this.meta23103 = meta23103;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23106 = meta23106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23105.cljs$lang$type = true;
cljs.core.async.t23105.cljs$lang$ctorStr = "cljs.core.async/t23105";
cljs.core.async.t23105.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23105");
});
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23095_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23095_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23095_SHARP_) : self__.f.call(null,p1__23095_SHARP_)))) : f1.call(null,(((p1__23095_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23095_SHARP_) : self__.f.call(null,p1__23095_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23107){var self__ = this;
var _23107__$1 = this;return self__.meta23106;
});
cljs.core.async.t23105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23107,meta23106__$1){var self__ = this;
var _23107__$1 = this;return (new cljs.core.async.t23105(self__.fn1,self__._,self__.meta23103,self__.ch,self__.f,self__.map_LT_,meta23106__$1));
});
cljs.core.async.__GT_t23105 = (function __GT_t23105(fn1__$1,___$2,meta23103__$1,ch__$2,f__$2,map_LT___$2,meta23106){return (new cljs.core.async.t23105(fn1__$1,___$2,meta23103__$1,ch__$2,f__$2,map_LT___$2,meta23106));
});
}
return (new cljs.core.async.t23105(fn1,___$1,self__.meta23103,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23104){var self__ = this;
var _23104__$1 = this;return self__.meta23103;
});
cljs.core.async.t23102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23104,meta23103__$1){var self__ = this;
var _23104__$1 = this;return (new cljs.core.async.t23102(self__.ch,self__.f,self__.map_LT_,meta23103__$1));
});
cljs.core.async.__GT_t23102 = (function __GT_t23102(ch__$1,f__$1,map_LT___$1,meta23103){return (new cljs.core.async.t23102(ch__$1,f__$1,map_LT___$1,meta23103));
});
}
return (new cljs.core.async.t23102(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23111 = (function (ch,f,map_GT_,meta23112){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23112 = meta23112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23111.cljs$lang$type = true;
cljs.core.async.t23111.cljs$lang$ctorStr = "cljs.core.async/t23111";
cljs.core.async.t23111.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23111");
});
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23113){var self__ = this;
var _23113__$1 = this;return self__.meta23112;
});
cljs.core.async.t23111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23113,meta23112__$1){var self__ = this;
var _23113__$1 = this;return (new cljs.core.async.t23111(self__.ch,self__.f,self__.map_GT_,meta23112__$1));
});
cljs.core.async.__GT_t23111 = (function __GT_t23111(ch__$1,f__$1,map_GT___$1,meta23112){return (new cljs.core.async.t23111(ch__$1,f__$1,map_GT___$1,meta23112));
});
}
return (new cljs.core.async.t23111(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23117 = (function (ch,p,filter_GT_,meta23118){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23118 = meta23118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23117.cljs$lang$type = true;
cljs.core.async.t23117.cljs$lang$ctorStr = "cljs.core.async/t23117";
cljs.core.async.t23117.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23117");
});
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23119){var self__ = this;
var _23119__$1 = this;return self__.meta23118;
});
cljs.core.async.t23117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23119,meta23118__$1){var self__ = this;
var _23119__$1 = this;return (new cljs.core.async.t23117(self__.ch,self__.p,self__.filter_GT_,meta23118__$1));
});
cljs.core.async.__GT_t23117 = (function __GT_t23117(ch__$1,p__$1,filter_GT___$1,meta23118){return (new cljs.core.async.t23117(ch__$1,p__$1,filter_GT___$1,meta23118));
});
}
return (new cljs.core.async.t23117(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23181){var state_val_23182 = (state_23181[1]);if((state_val_23182 === 1))
{var state_23181__$1 = state_23181;var statearr_23183_23203 = state_23181__$1;(statearr_23183_23203[2] = null);
(statearr_23183_23203[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 2))
{var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23181__$1,4,ch);
} else
{if((state_val_23182 === 3))
{var inst_23179 = (state_23181[2]);var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.return_chan(state_23181__$1,inst_23179);
} else
{if((state_val_23182 === 4))
{var inst_23163 = (state_23181[7]);var inst_23163__$1 = (state_23181[2]);var inst_23164 = (inst_23163__$1 == null);var state_23181__$1 = (function (){var statearr_23184 = state_23181;(statearr_23184[7] = inst_23163__$1);
return statearr_23184;
})();if(cljs.core.truth_(inst_23164))
{var statearr_23185_23204 = state_23181__$1;(statearr_23185_23204[1] = 5);
} else
{var statearr_23186_23205 = state_23181__$1;(statearr_23186_23205[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 5))
{var inst_23166 = cljs.core.async.close_BANG_(out);var state_23181__$1 = state_23181;var statearr_23187_23206 = state_23181__$1;(statearr_23187_23206[2] = inst_23166);
(statearr_23187_23206[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 6))
{var inst_23163 = (state_23181[7]);var inst_23168 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23163) : p.call(null,inst_23163));var state_23181__$1 = state_23181;if(cljs.core.truth_(inst_23168))
{var statearr_23188_23207 = state_23181__$1;(statearr_23188_23207[1] = 8);
} else
{var statearr_23189_23208 = state_23181__$1;(statearr_23189_23208[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 7))
{var inst_23177 = (state_23181[2]);var state_23181__$1 = state_23181;var statearr_23190_23209 = state_23181__$1;(statearr_23190_23209[2] = inst_23177);
(statearr_23190_23209[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 8))
{var inst_23163 = (state_23181[7]);var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23181__$1,11,out,inst_23163);
} else
{if((state_val_23182 === 9))
{var state_23181__$1 = state_23181;var statearr_23191_23210 = state_23181__$1;(statearr_23191_23210[2] = null);
(statearr_23191_23210[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 10))
{var inst_23174 = (state_23181[2]);var state_23181__$1 = (function (){var statearr_23192 = state_23181;(statearr_23192[8] = inst_23174);
return statearr_23192;
})();var statearr_23193_23211 = state_23181__$1;(statearr_23193_23211[2] = null);
(statearr_23193_23211[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23182 === 11))
{var inst_23171 = (state_23181[2]);var state_23181__$1 = state_23181;var statearr_23194_23212 = state_23181__$1;(statearr_23194_23212[2] = inst_23171);
(statearr_23194_23212[1] = 10);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23198 = [null,null,null,null,null,null,null,null,null];(statearr_23198[0] = state_machine__5507__auto__);
(statearr_23198[1] = 1);
return statearr_23198;
});
var state_machine__5507__auto____1 = (function (state_23181){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23181);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23199){if((e23199 instanceof Object))
{var ex__5510__auto__ = e23199;var statearr_23200_23213 = state_23181;(statearr_23200_23213[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23181);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23214 = state_23181;
state_23181 = G__23214;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23181){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23201 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23202);
return statearr_23201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23366){var state_val_23367 = (state_23366[1]);if((state_val_23367 === 1))
{var state_23366__$1 = state_23366;var statearr_23368_23405 = state_23366__$1;(statearr_23368_23405[2] = null);
(statearr_23368_23405[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 2))
{var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23366__$1,4,in$);
} else
{if((state_val_23367 === 3))
{var inst_23364 = (state_23366[2]);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.return_chan(state_23366__$1,inst_23364);
} else
{if((state_val_23367 === 4))
{var inst_23312 = (state_23366[7]);var inst_23312__$1 = (state_23366[2]);var inst_23313 = (inst_23312__$1 == null);var state_23366__$1 = (function (){var statearr_23369 = state_23366;(statearr_23369[7] = inst_23312__$1);
return statearr_23369;
})();if(cljs.core.truth_(inst_23313))
{var statearr_23370_23406 = state_23366__$1;(statearr_23370_23406[1] = 5);
} else
{var statearr_23371_23407 = state_23366__$1;(statearr_23371_23407[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 5))
{var inst_23315 = cljs.core.async.close_BANG_(out);var state_23366__$1 = state_23366;var statearr_23372_23408 = state_23366__$1;(statearr_23372_23408[2] = inst_23315);
(statearr_23372_23408[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 6))
{var inst_23312 = (state_23366[7]);var inst_23317 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23312) : f.call(null,inst_23312));var inst_23322 = cljs.core.seq(inst_23317);var inst_23323 = inst_23322;var inst_23324 = null;var inst_23325 = 0;var inst_23326 = 0;var state_23366__$1 = (function (){var statearr_23373 = state_23366;(statearr_23373[8] = inst_23324);
(statearr_23373[9] = inst_23323);
(statearr_23373[10] = inst_23325);
(statearr_23373[11] = inst_23326);
return statearr_23373;
})();var statearr_23374_23409 = state_23366__$1;(statearr_23374_23409[2] = null);
(statearr_23374_23409[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 7))
{var inst_23362 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23375_23410 = state_23366__$1;(statearr_23375_23410[2] = inst_23362);
(statearr_23375_23410[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 8))
{var inst_23325 = (state_23366[10]);var inst_23326 = (state_23366[11]);var inst_23328 = (inst_23326 < inst_23325);var inst_23329 = inst_23328;var state_23366__$1 = state_23366;if(cljs.core.truth_(inst_23329))
{var statearr_23376_23411 = state_23366__$1;(statearr_23376_23411[1] = 10);
} else
{var statearr_23377_23412 = state_23366__$1;(statearr_23377_23412[1] = 11);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 9))
{var inst_23359 = (state_23366[2]);var state_23366__$1 = (function (){var statearr_23378 = state_23366;(statearr_23378[12] = inst_23359);
return statearr_23378;
})();var statearr_23379_23413 = state_23366__$1;(statearr_23379_23413[2] = null);
(statearr_23379_23413[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 10))
{var inst_23324 = (state_23366[8]);var inst_23326 = (state_23366[11]);var inst_23331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23324,inst_23326);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23366__$1,13,out,inst_23331);
} else
{if((state_val_23367 === 11))
{var inst_23323 = (state_23366[9]);var inst_23337 = (state_23366[13]);var inst_23337__$1 = cljs.core.seq(inst_23323);var state_23366__$1 = (function (){var statearr_23383 = state_23366;(statearr_23383[13] = inst_23337__$1);
return statearr_23383;
})();if(inst_23337__$1)
{var statearr_23384_23414 = state_23366__$1;(statearr_23384_23414[1] = 14);
} else
{var statearr_23385_23415 = state_23366__$1;(statearr_23385_23415[1] = 15);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 12))
{var inst_23357 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23386_23416 = state_23366__$1;(statearr_23386_23416[2] = inst_23357);
(statearr_23386_23416[1] = 9);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 13))
{var inst_23324 = (state_23366[8]);var inst_23323 = (state_23366[9]);var inst_23325 = (state_23366[10]);var inst_23326 = (state_23366[11]);var inst_23333 = (state_23366[2]);var inst_23334 = (inst_23326 + 1);var tmp23380 = inst_23324;var tmp23381 = inst_23323;var tmp23382 = inst_23325;var inst_23323__$1 = tmp23381;var inst_23324__$1 = tmp23380;var inst_23325__$1 = tmp23382;var inst_23326__$1 = inst_23334;var state_23366__$1 = (function (){var statearr_23387 = state_23366;(statearr_23387[8] = inst_23324__$1);
(statearr_23387[9] = inst_23323__$1);
(statearr_23387[10] = inst_23325__$1);
(statearr_23387[11] = inst_23326__$1);
(statearr_23387[14] = inst_23333);
return statearr_23387;
})();var statearr_23388_23417 = state_23366__$1;(statearr_23388_23417[2] = null);
(statearr_23388_23417[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 14))
{var inst_23337 = (state_23366[13]);var inst_23339 = cljs.core.chunked_seq_QMARK_(inst_23337);var state_23366__$1 = state_23366;if(inst_23339)
{var statearr_23389_23418 = state_23366__$1;(statearr_23389_23418[1] = 17);
} else
{var statearr_23390_23419 = state_23366__$1;(statearr_23390_23419[1] = 18);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 15))
{var state_23366__$1 = state_23366;var statearr_23391_23420 = state_23366__$1;(statearr_23391_23420[2] = null);
(statearr_23391_23420[1] = 16);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 16))
{var inst_23355 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23392_23421 = state_23366__$1;(statearr_23392_23421[2] = inst_23355);
(statearr_23392_23421[1] = 12);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 17))
{var inst_23337 = (state_23366[13]);var inst_23341 = cljs.core.chunk_first(inst_23337);var inst_23342 = cljs.core.chunk_rest(inst_23337);var inst_23343 = cljs.core.count(inst_23341);var inst_23323 = inst_23342;var inst_23324 = inst_23341;var inst_23325 = inst_23343;var inst_23326 = 0;var state_23366__$1 = (function (){var statearr_23393 = state_23366;(statearr_23393[8] = inst_23324);
(statearr_23393[9] = inst_23323);
(statearr_23393[10] = inst_23325);
(statearr_23393[11] = inst_23326);
return statearr_23393;
})();var statearr_23394_23422 = state_23366__$1;(statearr_23394_23422[2] = null);
(statearr_23394_23422[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 18))
{var inst_23337 = (state_23366[13]);var inst_23346 = cljs.core.first(inst_23337);var state_23366__$1 = state_23366;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23366__$1,20,out,inst_23346);
} else
{if((state_val_23367 === 19))
{var inst_23352 = (state_23366[2]);var state_23366__$1 = state_23366;var statearr_23395_23423 = state_23366__$1;(statearr_23395_23423[2] = inst_23352);
(statearr_23395_23423[1] = 16);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23367 === 20))
{var inst_23337 = (state_23366[13]);var inst_23348 = (state_23366[2]);var inst_23349 = cljs.core.next(inst_23337);var inst_23323 = inst_23349;var inst_23324 = null;var inst_23325 = 0;var inst_23326 = 0;var state_23366__$1 = (function (){var statearr_23396 = state_23366;(statearr_23396[8] = inst_23324);
(statearr_23396[9] = inst_23323);
(statearr_23396[15] = inst_23348);
(statearr_23396[10] = inst_23325);
(statearr_23396[11] = inst_23326);
return statearr_23396;
})();var statearr_23397_23424 = state_23366__$1;(statearr_23397_23424[2] = null);
(statearr_23397_23424[1] = 8);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23401[0] = state_machine__5507__auto__);
(statearr_23401[1] = 1);
return statearr_23401;
});
var state_machine__5507__auto____1 = (function (state_23366){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23366);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23402){if((e23402 instanceof Object))
{var ex__5510__auto__ = e23402;var statearr_23403_23425 = state_23366;(statearr_23403_23425[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23366);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23426 = state_23366;
state_23366 = G__23426;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23366){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23404 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23486){var state_val_23487 = (state_23486[1]);if((state_val_23487 === 1))
{var state_23486__$1 = state_23486;var statearr_23488_23508 = state_23486__$1;(statearr_23488_23508[2] = null);
(statearr_23488_23508[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 2))
{var state_23486__$1 = state_23486;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23486__$1,4,from);
} else
{if((state_val_23487 === 3))
{var inst_23484 = (state_23486[2]);var state_23486__$1 = state_23486;return cljs.core.async.impl.ioc_helpers.return_chan(state_23486__$1,inst_23484);
} else
{if((state_val_23487 === 4))
{var inst_23469 = (state_23486[7]);var inst_23469__$1 = (state_23486[2]);var inst_23470 = (inst_23469__$1 == null);var state_23486__$1 = (function (){var statearr_23489 = state_23486;(statearr_23489[7] = inst_23469__$1);
return statearr_23489;
})();if(cljs.core.truth_(inst_23470))
{var statearr_23490_23509 = state_23486__$1;(statearr_23490_23509[1] = 5);
} else
{var statearr_23491_23510 = state_23486__$1;(statearr_23491_23510[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 5))
{var state_23486__$1 = state_23486;if(cljs.core.truth_(close_QMARK_))
{var statearr_23492_23511 = state_23486__$1;(statearr_23492_23511[1] = 8);
} else
{var statearr_23493_23512 = state_23486__$1;(statearr_23493_23512[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 6))
{var inst_23469 = (state_23486[7]);var state_23486__$1 = state_23486;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23486__$1,11,to,inst_23469);
} else
{if((state_val_23487 === 7))
{var inst_23482 = (state_23486[2]);var state_23486__$1 = state_23486;var statearr_23494_23513 = state_23486__$1;(statearr_23494_23513[2] = inst_23482);
(statearr_23494_23513[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 8))
{var inst_23473 = cljs.core.async.close_BANG_(to);var state_23486__$1 = state_23486;var statearr_23495_23514 = state_23486__$1;(statearr_23495_23514[2] = inst_23473);
(statearr_23495_23514[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 9))
{var state_23486__$1 = state_23486;var statearr_23496_23515 = state_23486__$1;(statearr_23496_23515[2] = null);
(statearr_23496_23515[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 10))
{var inst_23476 = (state_23486[2]);var state_23486__$1 = state_23486;var statearr_23497_23516 = state_23486__$1;(statearr_23497_23516[2] = inst_23476);
(statearr_23497_23516[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23487 === 11))
{var inst_23479 = (state_23486[2]);var state_23486__$1 = (function (){var statearr_23498 = state_23486;(statearr_23498[8] = inst_23479);
return statearr_23498;
})();var statearr_23499_23517 = state_23486__$1;(statearr_23499_23517[2] = null);
(statearr_23499_23517[1] = 2);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23503 = [null,null,null,null,null,null,null,null,null];(statearr_23503[0] = state_machine__5507__auto__);
(statearr_23503[1] = 1);
return statearr_23503;
});
var state_machine__5507__auto____1 = (function (state_23486){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23486);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23504){if((e23504 instanceof Object))
{var ex__5510__auto__ = e23504;var statearr_23505_23518 = state_23486;(statearr_23505_23518[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23486);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23519 = state_23486;
state_23486 = G__23519;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23486){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23506 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23507);
return statearr_23506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23584){var state_val_23585 = (state_23584[1]);if((state_val_23585 === 1))
{var state_23584__$1 = state_23584;var statearr_23586_23607 = state_23584__$1;(statearr_23586_23607[2] = null);
(statearr_23586_23607[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 2))
{var state_23584__$1 = state_23584;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23584__$1,4,ch);
} else
{if((state_val_23585 === 3))
{var inst_23582 = (state_23584[2]);var state_23584__$1 = state_23584;return cljs.core.async.impl.ioc_helpers.return_chan(state_23584__$1,inst_23582);
} else
{if((state_val_23585 === 4))
{var inst_23565 = (state_23584[7]);var inst_23565__$1 = (state_23584[2]);var inst_23566 = (inst_23565__$1 == null);var state_23584__$1 = (function (){var statearr_23587 = state_23584;(statearr_23587[7] = inst_23565__$1);
return statearr_23587;
})();if(cljs.core.truth_(inst_23566))
{var statearr_23588_23608 = state_23584__$1;(statearr_23588_23608[1] = 5);
} else
{var statearr_23589_23609 = state_23584__$1;(statearr_23589_23609[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 5))
{var inst_23568 = cljs.core.async.close_BANG_(tc);var inst_23569 = cljs.core.async.close_BANG_(fc);var state_23584__$1 = (function (){var statearr_23590 = state_23584;(statearr_23590[8] = inst_23568);
return statearr_23590;
})();var statearr_23591_23610 = state_23584__$1;(statearr_23591_23610[2] = inst_23569);
(statearr_23591_23610[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 6))
{var inst_23565 = (state_23584[7]);var inst_23571 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23565) : p.call(null,inst_23565));var state_23584__$1 = state_23584;if(cljs.core.truth_(inst_23571))
{var statearr_23592_23611 = state_23584__$1;(statearr_23592_23611[1] = 9);
} else
{var statearr_23593_23612 = state_23584__$1;(statearr_23593_23612[1] = 10);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 7))
{var inst_23580 = (state_23584[2]);var state_23584__$1 = state_23584;var statearr_23594_23613 = state_23584__$1;(statearr_23594_23613[2] = inst_23580);
(statearr_23594_23613[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 8))
{var inst_23577 = (state_23584[2]);var state_23584__$1 = (function (){var statearr_23595 = state_23584;(statearr_23595[9] = inst_23577);
return statearr_23595;
})();var statearr_23596_23614 = state_23584__$1;(statearr_23596_23614[2] = null);
(statearr_23596_23614[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 9))
{var state_23584__$1 = state_23584;var statearr_23597_23615 = state_23584__$1;(statearr_23597_23615[2] = tc);
(statearr_23597_23615[1] = 11);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 10))
{var state_23584__$1 = state_23584;var statearr_23598_23616 = state_23584__$1;(statearr_23598_23616[2] = fc);
(statearr_23598_23616[1] = 11);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23585 === 11))
{var inst_23565 = (state_23584[7]);var inst_23575 = (state_23584[2]);var state_23584__$1 = state_23584;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23584__$1,8,inst_23575,inst_23565);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23602 = [null,null,null,null,null,null,null,null,null,null];(statearr_23602[0] = state_machine__5507__auto__);
(statearr_23602[1] = 1);
return statearr_23602;
});
var state_machine__5507__auto____1 = (function (state_23584){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23584);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23603){if((e23603 instanceof Object))
{var ex__5510__auto__ = e23603;var statearr_23604_23617 = state_23584;(statearr_23604_23617[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23584);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23618 = state_23584;
state_23584 = G__23618;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23584){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23605 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23606);
return statearr_23605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23665){var state_val_23666 = (state_23665[1]);if((state_val_23666 === 7))
{var inst_23661 = (state_23665[2]);var state_23665__$1 = state_23665;var statearr_23667_23683 = state_23665__$1;(statearr_23667_23683[2] = inst_23661);
(statearr_23667_23683[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23666 === 6))
{var inst_23654 = (state_23665[7]);var inst_23651 = (state_23665[8]);var inst_23658 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23651,inst_23654) : f.call(null,inst_23651,inst_23654));var inst_23651__$1 = inst_23658;var state_23665__$1 = (function (){var statearr_23668 = state_23665;(statearr_23668[8] = inst_23651__$1);
return statearr_23668;
})();var statearr_23669_23684 = state_23665__$1;(statearr_23669_23684[2] = null);
(statearr_23669_23684[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23666 === 5))
{var inst_23651 = (state_23665[8]);var state_23665__$1 = state_23665;var statearr_23670_23685 = state_23665__$1;(statearr_23670_23685[2] = inst_23651);
(statearr_23670_23685[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23666 === 4))
{var inst_23654 = (state_23665[7]);var inst_23654__$1 = (state_23665[2]);var inst_23655 = (inst_23654__$1 == null);var state_23665__$1 = (function (){var statearr_23671 = state_23665;(statearr_23671[7] = inst_23654__$1);
return statearr_23671;
})();if(cljs.core.truth_(inst_23655))
{var statearr_23672_23686 = state_23665__$1;(statearr_23672_23686[1] = 5);
} else
{var statearr_23673_23687 = state_23665__$1;(statearr_23673_23687[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23666 === 3))
{var inst_23663 = (state_23665[2]);var state_23665__$1 = state_23665;return cljs.core.async.impl.ioc_helpers.return_chan(state_23665__$1,inst_23663);
} else
{if((state_val_23666 === 2))
{var state_23665__$1 = state_23665;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23665__$1,4,ch);
} else
{if((state_val_23666 === 1))
{var inst_23651 = init;var state_23665__$1 = (function (){var statearr_23674 = state_23665;(statearr_23674[8] = inst_23651);
return statearr_23674;
})();var statearr_23675_23688 = state_23665__$1;(statearr_23675_23688[2] = null);
(statearr_23675_23688[1] = 2);
return cljs.core.constant$keyword$196;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23679 = [null,null,null,null,null,null,null,null,null];(statearr_23679[0] = state_machine__5507__auto__);
(statearr_23679[1] = 1);
return statearr_23679;
});
var state_machine__5507__auto____1 = (function (state_23665){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23665);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23680){if((e23680 instanceof Object))
{var ex__5510__auto__ = e23680;var statearr_23681_23689 = state_23665;(statearr_23681_23689[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23665);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23690 = state_23665;
state_23665 = G__23690;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23665){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23682 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23752){var state_val_23753 = (state_23752[1]);if((state_val_23753 === 1))
{var inst_23732 = cljs.core.seq(coll);var inst_23733 = inst_23732;var state_23752__$1 = (function (){var statearr_23754 = state_23752;(statearr_23754[7] = inst_23733);
return statearr_23754;
})();var statearr_23755_23773 = state_23752__$1;(statearr_23755_23773[2] = null);
(statearr_23755_23773[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 2))
{var inst_23733 = (state_23752[7]);var state_23752__$1 = state_23752;if(cljs.core.truth_(inst_23733))
{var statearr_23756_23774 = state_23752__$1;(statearr_23756_23774[1] = 4);
} else
{var statearr_23757_23775 = state_23752__$1;(statearr_23757_23775[1] = 5);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 3))
{var inst_23750 = (state_23752[2]);var state_23752__$1 = state_23752;return cljs.core.async.impl.ioc_helpers.return_chan(state_23752__$1,inst_23750);
} else
{if((state_val_23753 === 4))
{var inst_23733 = (state_23752[7]);var inst_23736 = cljs.core.first(inst_23733);var state_23752__$1 = state_23752;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23752__$1,7,ch,inst_23736);
} else
{if((state_val_23753 === 5))
{var state_23752__$1 = state_23752;if(cljs.core.truth_(close_QMARK_))
{var statearr_23758_23776 = state_23752__$1;(statearr_23758_23776[1] = 8);
} else
{var statearr_23759_23777 = state_23752__$1;(statearr_23759_23777[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 6))
{var inst_23748 = (state_23752[2]);var state_23752__$1 = state_23752;var statearr_23760_23778 = state_23752__$1;(statearr_23760_23778[2] = inst_23748);
(statearr_23760_23778[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 7))
{var inst_23733 = (state_23752[7]);var inst_23738 = (state_23752[2]);var inst_23739 = cljs.core.next(inst_23733);var inst_23733__$1 = inst_23739;var state_23752__$1 = (function (){var statearr_23761 = state_23752;(statearr_23761[8] = inst_23738);
(statearr_23761[7] = inst_23733__$1);
return statearr_23761;
})();var statearr_23762_23779 = state_23752__$1;(statearr_23762_23779[2] = null);
(statearr_23762_23779[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 8))
{var inst_23743 = cljs.core.async.close_BANG_(ch);var state_23752__$1 = state_23752;var statearr_23763_23780 = state_23752__$1;(statearr_23763_23780[2] = inst_23743);
(statearr_23763_23780[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 9))
{var state_23752__$1 = state_23752;var statearr_23764_23781 = state_23752__$1;(statearr_23764_23781[2] = null);
(statearr_23764_23781[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_23753 === 10))
{var inst_23746 = (state_23752[2]);var state_23752__$1 = state_23752;var statearr_23765_23782 = state_23752__$1;(statearr_23765_23782[2] = inst_23746);
(statearr_23765_23782[1] = 6);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_23769 = [null,null,null,null,null,null,null,null,null];(statearr_23769[0] = state_machine__5507__auto__);
(statearr_23769[1] = 1);
return statearr_23769;
});
var state_machine__5507__auto____1 = (function (state_23752){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23752);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23770){if((e23770 instanceof Object))
{var ex__5510__auto__ = e23770;var statearr_23771_23783 = state_23752;(statearr_23771_23783[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23752);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e23770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__23784 = state_23752;
state_23752 = G__23784;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23752){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23772 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj23786 = {};return obj23786;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23788 = {};return obj23788;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24012 = (function (cs,ch,mult,meta24013){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24013 = meta24013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24012.cljs$lang$type = true;
cljs.core.async.t24012.cljs$lang$ctorStr = "cljs.core.async/t24012";
cljs.core.async.t24012.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24012");
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24012.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24014){var self__ = this;
var _24014__$1 = this;return self__.meta24013;
});})(cs))
;
cljs.core.async.t24012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24014,meta24013__$1){var self__ = this;
var _24014__$1 = this;return (new cljs.core.async.t24012(self__.cs,self__.ch,self__.mult,meta24013__$1));
});})(cs))
;
cljs.core.async.__GT_t24012 = ((function (cs){
return (function __GT_t24012(cs__$1,ch__$1,mult__$1,meta24013){return (new cljs.core.async.t24012(cs__$1,ch__$1,mult__$1,meta24013));
});})(cs))
;
}
return (new cljs.core.async.t24012(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24149){var state_val_24150 = (state_24149[1]);if((state_val_24150 === 32))
{var inst_24017 = (state_24149[7]);var inst_24093 = (state_24149[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24149,31,Object,null,30);var inst_24100 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24093,inst_24017,done);var state_24149__$1 = state_24149;var statearr_24151_24236 = state_24149__$1;(statearr_24151_24236[2] = inst_24100);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 1))
{var state_24149__$1 = state_24149;var statearr_24152_24237 = state_24149__$1;(statearr_24152_24237[2] = null);
(statearr_24152_24237[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 33))
{var inst_24106 = (state_24149[9]);var inst_24108 = cljs.core.chunked_seq_QMARK_(inst_24106);var state_24149__$1 = state_24149;if(inst_24108)
{var statearr_24153_24238 = state_24149__$1;(statearr_24153_24238[1] = 36);
} else
{var statearr_24154_24239 = state_24149__$1;(statearr_24154_24239[1] = 37);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 2))
{var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24149__$1,4,ch);
} else
{if((state_val_24150 === 34))
{var state_24149__$1 = state_24149;var statearr_24155_24240 = state_24149__$1;(statearr_24155_24240[2] = null);
(statearr_24155_24240[1] = 35);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 3))
{var inst_24147 = (state_24149[2]);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.return_chan(state_24149__$1,inst_24147);
} else
{if((state_val_24150 === 35))
{var inst_24131 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24156_24241 = state_24149__$1;(statearr_24156_24241[2] = inst_24131);
(statearr_24156_24241[1] = 29);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 4))
{var inst_24017 = (state_24149[7]);var inst_24017__$1 = (state_24149[2]);var inst_24018 = (inst_24017__$1 == null);var state_24149__$1 = (function (){var statearr_24157 = state_24149;(statearr_24157[7] = inst_24017__$1);
return statearr_24157;
})();if(cljs.core.truth_(inst_24018))
{var statearr_24158_24242 = state_24149__$1;(statearr_24158_24242[1] = 5);
} else
{var statearr_24159_24243 = state_24149__$1;(statearr_24159_24243[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 36))
{var inst_24106 = (state_24149[9]);var inst_24110 = cljs.core.chunk_first(inst_24106);var inst_24111 = cljs.core.chunk_rest(inst_24106);var inst_24112 = cljs.core.count(inst_24110);var inst_24085 = inst_24111;var inst_24086 = inst_24110;var inst_24087 = inst_24112;var inst_24088 = 0;var state_24149__$1 = (function (){var statearr_24160 = state_24149;(statearr_24160[10] = inst_24087);
(statearr_24160[11] = inst_24088);
(statearr_24160[12] = inst_24086);
(statearr_24160[13] = inst_24085);
return statearr_24160;
})();var statearr_24161_24244 = state_24149__$1;(statearr_24161_24244[2] = null);
(statearr_24161_24244[1] = 25);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 5))
{var inst_24024 = cljs.core.deref(cs);var inst_24025 = cljs.core.seq(inst_24024);var inst_24026 = inst_24025;var inst_24027 = null;var inst_24028 = 0;var inst_24029 = 0;var state_24149__$1 = (function (){var statearr_24162 = state_24149;(statearr_24162[14] = inst_24029);
(statearr_24162[15] = inst_24028);
(statearr_24162[16] = inst_24027);
(statearr_24162[17] = inst_24026);
return statearr_24162;
})();var statearr_24163_24245 = state_24149__$1;(statearr_24163_24245[2] = null);
(statearr_24163_24245[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 37))
{var inst_24106 = (state_24149[9]);var inst_24115 = cljs.core.first(inst_24106);var state_24149__$1 = (function (){var statearr_24164 = state_24149;(statearr_24164[18] = inst_24115);
return statearr_24164;
})();var statearr_24165_24246 = state_24149__$1;(statearr_24165_24246[2] = null);
(statearr_24165_24246[1] = 41);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 6))
{var inst_24077 = (state_24149[19]);var inst_24076 = cljs.core.deref(cs);var inst_24077__$1 = cljs.core.keys(inst_24076);var inst_24078 = cljs.core.count(inst_24077__$1);var inst_24079 = cljs.core.reset_BANG_(dctr,inst_24078);var inst_24084 = cljs.core.seq(inst_24077__$1);var inst_24085 = inst_24084;var inst_24086 = null;var inst_24087 = 0;var inst_24088 = 0;var state_24149__$1 = (function (){var statearr_24166 = state_24149;(statearr_24166[10] = inst_24087);
(statearr_24166[11] = inst_24088);
(statearr_24166[12] = inst_24086);
(statearr_24166[13] = inst_24085);
(statearr_24166[20] = inst_24079);
(statearr_24166[19] = inst_24077__$1);
return statearr_24166;
})();var statearr_24167_24247 = state_24149__$1;(statearr_24167_24247[2] = null);
(statearr_24167_24247[1] = 25);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 38))
{var inst_24128 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24168_24248 = state_24149__$1;(statearr_24168_24248[2] = inst_24128);
(statearr_24168_24248[1] = 35);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 7))
{var inst_24145 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24169_24249 = state_24149__$1;(statearr_24169_24249[2] = inst_24145);
(statearr_24169_24249[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 39))
{var inst_24106 = (state_24149[9]);var inst_24124 = (state_24149[2]);var inst_24125 = cljs.core.next(inst_24106);var inst_24085 = inst_24125;var inst_24086 = null;var inst_24087 = 0;var inst_24088 = 0;var state_24149__$1 = (function (){var statearr_24170 = state_24149;(statearr_24170[10] = inst_24087);
(statearr_24170[11] = inst_24088);
(statearr_24170[12] = inst_24086);
(statearr_24170[13] = inst_24085);
(statearr_24170[21] = inst_24124);
return statearr_24170;
})();var statearr_24171_24250 = state_24149__$1;(statearr_24171_24250[2] = null);
(statearr_24171_24250[1] = 25);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 8))
{var inst_24029 = (state_24149[14]);var inst_24028 = (state_24149[15]);var inst_24031 = (inst_24029 < inst_24028);var inst_24032 = inst_24031;var state_24149__$1 = state_24149;if(cljs.core.truth_(inst_24032))
{var statearr_24172_24251 = state_24149__$1;(statearr_24172_24251[1] = 10);
} else
{var statearr_24173_24252 = state_24149__$1;(statearr_24173_24252[1] = 11);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 40))
{var inst_24115 = (state_24149[18]);var inst_24116 = (state_24149[2]);var inst_24117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24118 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24115);var state_24149__$1 = (function (){var statearr_24174 = state_24149;(statearr_24174[22] = inst_24117);
(statearr_24174[23] = inst_24116);
return statearr_24174;
})();var statearr_24175_24253 = state_24149__$1;(statearr_24175_24253[2] = inst_24118);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 9))
{var inst_24074 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24176_24254 = state_24149__$1;(statearr_24176_24254[2] = inst_24074);
(statearr_24176_24254[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 41))
{var inst_24017 = (state_24149[7]);var inst_24115 = (state_24149[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24149,40,Object,null,39);var inst_24122 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24115,inst_24017,done);var state_24149__$1 = state_24149;var statearr_24177_24255 = state_24149__$1;(statearr_24177_24255[2] = inst_24122);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 10))
{var inst_24029 = (state_24149[14]);var inst_24027 = (state_24149[16]);var inst_24035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24027,inst_24029);var inst_24036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24035,0,null);var inst_24037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24035,1,null);var state_24149__$1 = (function (){var statearr_24178 = state_24149;(statearr_24178[24] = inst_24036);
return statearr_24178;
})();if(cljs.core.truth_(inst_24037))
{var statearr_24179_24256 = state_24149__$1;(statearr_24179_24256[1] = 13);
} else
{var statearr_24180_24257 = state_24149__$1;(statearr_24180_24257[1] = 14);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 42))
{var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24149__$1,45,dchan);
} else
{if((state_val_24150 === 11))
{var inst_24046 = (state_24149[25]);var inst_24026 = (state_24149[17]);var inst_24046__$1 = cljs.core.seq(inst_24026);var state_24149__$1 = (function (){var statearr_24181 = state_24149;(statearr_24181[25] = inst_24046__$1);
return statearr_24181;
})();if(inst_24046__$1)
{var statearr_24182_24258 = state_24149__$1;(statearr_24182_24258[1] = 16);
} else
{var statearr_24183_24259 = state_24149__$1;(statearr_24183_24259[1] = 17);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 43))
{var state_24149__$1 = state_24149;var statearr_24184_24260 = state_24149__$1;(statearr_24184_24260[2] = null);
(statearr_24184_24260[1] = 44);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 12))
{var inst_24072 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24185_24261 = state_24149__$1;(statearr_24185_24261[2] = inst_24072);
(statearr_24185_24261[1] = 9);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 44))
{var inst_24142 = (state_24149[2]);var state_24149__$1 = (function (){var statearr_24186 = state_24149;(statearr_24186[26] = inst_24142);
return statearr_24186;
})();var statearr_24187_24262 = state_24149__$1;(statearr_24187_24262[2] = null);
(statearr_24187_24262[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 13))
{var inst_24036 = (state_24149[24]);var inst_24039 = cljs.core.async.close_BANG_(inst_24036);var state_24149__$1 = state_24149;var statearr_24188_24263 = state_24149__$1;(statearr_24188_24263[2] = inst_24039);
(statearr_24188_24263[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 45))
{var inst_24139 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24192_24264 = state_24149__$1;(statearr_24192_24264[2] = inst_24139);
(statearr_24192_24264[1] = 44);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 14))
{var state_24149__$1 = state_24149;var statearr_24193_24265 = state_24149__$1;(statearr_24193_24265[2] = null);
(statearr_24193_24265[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 15))
{var inst_24029 = (state_24149[14]);var inst_24028 = (state_24149[15]);var inst_24027 = (state_24149[16]);var inst_24026 = (state_24149[17]);var inst_24042 = (state_24149[2]);var inst_24043 = (inst_24029 + 1);var tmp24189 = inst_24028;var tmp24190 = inst_24027;var tmp24191 = inst_24026;var inst_24026__$1 = tmp24191;var inst_24027__$1 = tmp24190;var inst_24028__$1 = tmp24189;var inst_24029__$1 = inst_24043;var state_24149__$1 = (function (){var statearr_24194 = state_24149;(statearr_24194[27] = inst_24042);
(statearr_24194[14] = inst_24029__$1);
(statearr_24194[15] = inst_24028__$1);
(statearr_24194[16] = inst_24027__$1);
(statearr_24194[17] = inst_24026__$1);
return statearr_24194;
})();var statearr_24195_24266 = state_24149__$1;(statearr_24195_24266[2] = null);
(statearr_24195_24266[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 16))
{var inst_24046 = (state_24149[25]);var inst_24048 = cljs.core.chunked_seq_QMARK_(inst_24046);var state_24149__$1 = state_24149;if(inst_24048)
{var statearr_24196_24267 = state_24149__$1;(statearr_24196_24267[1] = 19);
} else
{var statearr_24197_24268 = state_24149__$1;(statearr_24197_24268[1] = 20);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 17))
{var state_24149__$1 = state_24149;var statearr_24198_24269 = state_24149__$1;(statearr_24198_24269[2] = null);
(statearr_24198_24269[1] = 18);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 18))
{var inst_24070 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24199_24270 = state_24149__$1;(statearr_24199_24270[2] = inst_24070);
(statearr_24199_24270[1] = 12);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 19))
{var inst_24046 = (state_24149[25]);var inst_24050 = cljs.core.chunk_first(inst_24046);var inst_24051 = cljs.core.chunk_rest(inst_24046);var inst_24052 = cljs.core.count(inst_24050);var inst_24026 = inst_24051;var inst_24027 = inst_24050;var inst_24028 = inst_24052;var inst_24029 = 0;var state_24149__$1 = (function (){var statearr_24200 = state_24149;(statearr_24200[14] = inst_24029);
(statearr_24200[15] = inst_24028);
(statearr_24200[16] = inst_24027);
(statearr_24200[17] = inst_24026);
return statearr_24200;
})();var statearr_24201_24271 = state_24149__$1;(statearr_24201_24271[2] = null);
(statearr_24201_24271[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 20))
{var inst_24046 = (state_24149[25]);var inst_24056 = cljs.core.first(inst_24046);var inst_24057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24056,0,null);var inst_24058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24056,1,null);var state_24149__$1 = (function (){var statearr_24202 = state_24149;(statearr_24202[28] = inst_24057);
return statearr_24202;
})();if(cljs.core.truth_(inst_24058))
{var statearr_24203_24272 = state_24149__$1;(statearr_24203_24272[1] = 22);
} else
{var statearr_24204_24273 = state_24149__$1;(statearr_24204_24273[1] = 23);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 21))
{var inst_24067 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24205_24274 = state_24149__$1;(statearr_24205_24274[2] = inst_24067);
(statearr_24205_24274[1] = 18);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 22))
{var inst_24057 = (state_24149[28]);var inst_24060 = cljs.core.async.close_BANG_(inst_24057);var state_24149__$1 = state_24149;var statearr_24206_24275 = state_24149__$1;(statearr_24206_24275[2] = inst_24060);
(statearr_24206_24275[1] = 24);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 23))
{var state_24149__$1 = state_24149;var statearr_24207_24276 = state_24149__$1;(statearr_24207_24276[2] = null);
(statearr_24207_24276[1] = 24);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 24))
{var inst_24046 = (state_24149[25]);var inst_24063 = (state_24149[2]);var inst_24064 = cljs.core.next(inst_24046);var inst_24026 = inst_24064;var inst_24027 = null;var inst_24028 = 0;var inst_24029 = 0;var state_24149__$1 = (function (){var statearr_24208 = state_24149;(statearr_24208[14] = inst_24029);
(statearr_24208[29] = inst_24063);
(statearr_24208[15] = inst_24028);
(statearr_24208[16] = inst_24027);
(statearr_24208[17] = inst_24026);
return statearr_24208;
})();var statearr_24209_24277 = state_24149__$1;(statearr_24209_24277[2] = null);
(statearr_24209_24277[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 25))
{var inst_24087 = (state_24149[10]);var inst_24088 = (state_24149[11]);var inst_24090 = (inst_24088 < inst_24087);var inst_24091 = inst_24090;var state_24149__$1 = state_24149;if(cljs.core.truth_(inst_24091))
{var statearr_24210_24278 = state_24149__$1;(statearr_24210_24278[1] = 27);
} else
{var statearr_24211_24279 = state_24149__$1;(statearr_24211_24279[1] = 28);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 26))
{var inst_24077 = (state_24149[19]);var inst_24135 = (state_24149[2]);var inst_24136 = cljs.core.seq(inst_24077);var state_24149__$1 = (function (){var statearr_24212 = state_24149;(statearr_24212[30] = inst_24135);
return statearr_24212;
})();if(inst_24136)
{var statearr_24213_24280 = state_24149__$1;(statearr_24213_24280[1] = 42);
} else
{var statearr_24214_24281 = state_24149__$1;(statearr_24214_24281[1] = 43);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 27))
{var inst_24088 = (state_24149[11]);var inst_24086 = (state_24149[12]);var inst_24093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24086,inst_24088);var state_24149__$1 = (function (){var statearr_24215 = state_24149;(statearr_24215[8] = inst_24093);
return statearr_24215;
})();var statearr_24216_24282 = state_24149__$1;(statearr_24216_24282[2] = null);
(statearr_24216_24282[1] = 32);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 28))
{var inst_24085 = (state_24149[13]);var inst_24106 = (state_24149[9]);var inst_24106__$1 = cljs.core.seq(inst_24085);var state_24149__$1 = (function (){var statearr_24220 = state_24149;(statearr_24220[9] = inst_24106__$1);
return statearr_24220;
})();if(inst_24106__$1)
{var statearr_24221_24283 = state_24149__$1;(statearr_24221_24283[1] = 33);
} else
{var statearr_24222_24284 = state_24149__$1;(statearr_24222_24284[1] = 34);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 29))
{var inst_24133 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24223_24285 = state_24149__$1;(statearr_24223_24285[2] = inst_24133);
(statearr_24223_24285[1] = 26);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 30))
{var inst_24087 = (state_24149[10]);var inst_24088 = (state_24149[11]);var inst_24086 = (state_24149[12]);var inst_24085 = (state_24149[13]);var inst_24102 = (state_24149[2]);var inst_24103 = (inst_24088 + 1);var tmp24217 = inst_24087;var tmp24218 = inst_24086;var tmp24219 = inst_24085;var inst_24085__$1 = tmp24219;var inst_24086__$1 = tmp24218;var inst_24087__$1 = tmp24217;var inst_24088__$1 = inst_24103;var state_24149__$1 = (function (){var statearr_24224 = state_24149;(statearr_24224[10] = inst_24087__$1);
(statearr_24224[11] = inst_24088__$1);
(statearr_24224[12] = inst_24086__$1);
(statearr_24224[13] = inst_24085__$1);
(statearr_24224[31] = inst_24102);
return statearr_24224;
})();var statearr_24225_24286 = state_24149__$1;(statearr_24225_24286[2] = null);
(statearr_24225_24286[1] = 25);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24150 === 31))
{var inst_24093 = (state_24149[8]);var inst_24094 = (state_24149[2]);var inst_24095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24096 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24093);var state_24149__$1 = (function (){var statearr_24226 = state_24149;(statearr_24226[32] = inst_24095);
(statearr_24226[33] = inst_24094);
return statearr_24226;
})();var statearr_24227_24287 = state_24149__$1;(statearr_24227_24287[2] = inst_24096);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149__$1);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24231[0] = state_machine__5507__auto__);
(statearr_24231[1] = 1);
return statearr_24231;
});
var state_machine__5507__auto____1 = (function (state_24149){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24149);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24232){if((e24232 instanceof Object))
{var ex__5510__auto__ = e24232;var statearr_24233_24288 = state_24149;(statearr_24233_24288[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e24232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__24289 = state_24149;
state_24149 = G__24289;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24149){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24234 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24235);
return statearr_24234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj24291 = {};return obj24291;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,null,cljs.core.constant$keyword$204,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$205);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$204);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$205,chs);var pauses = pick(cljs.core.constant$keyword$203,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$206,solos,cljs.core.constant$keyword$207,pick(cljs.core.constant$keyword$204,chs),cljs.core.constant$keyword$208,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$203)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24401 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24402){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta24402 = meta24402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24401.cljs$lang$type = true;
cljs.core.async.t24401.cljs$lang$ctorStr = "cljs.core.async/t24401";
cljs.core.async.t24401.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24401");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24403){var self__ = this;
var _24403__$1 = this;return self__.meta24402;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24403,meta24402__$1){var self__ = this;
var _24403__$1 = this;return (new cljs.core.async.t24401(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24402__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24401 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24401(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24402){return (new cljs.core.async.t24401(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24402));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24401(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24468){var state_val_24469 = (state_24468[1]);if((state_val_24469 === 1))
{var inst_24407 = (state_24468[7]);var inst_24407__$1 = calc_state();var inst_24408 = cljs.core.seq_QMARK_(inst_24407__$1);var state_24468__$1 = (function (){var statearr_24470 = state_24468;(statearr_24470[7] = inst_24407__$1);
return statearr_24470;
})();if(inst_24408)
{var statearr_24471_24511 = state_24468__$1;(statearr_24471_24511[1] = 2);
} else
{var statearr_24472_24512 = state_24468__$1;(statearr_24472_24512[1] = 3);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 2))
{var inst_24407 = (state_24468[7]);var inst_24410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24407);var state_24468__$1 = state_24468;var statearr_24473_24513 = state_24468__$1;(statearr_24473_24513[2] = inst_24410);
(statearr_24473_24513[1] = 4);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 3))
{var inst_24407 = (state_24468[7]);var state_24468__$1 = state_24468;var statearr_24474_24514 = state_24468__$1;(statearr_24474_24514[2] = inst_24407);
(statearr_24474_24514[1] = 4);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 4))
{var inst_24407 = (state_24468[7]);var inst_24413 = (state_24468[2]);var inst_24414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24413,cljs.core.constant$keyword$208);var inst_24415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24413,cljs.core.constant$keyword$207);var inst_24416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24413,cljs.core.constant$keyword$206);var inst_24417 = inst_24407;var state_24468__$1 = (function (){var statearr_24475 = state_24468;(statearr_24475[8] = inst_24414);
(statearr_24475[9] = inst_24415);
(statearr_24475[10] = inst_24416);
(statearr_24475[11] = inst_24417);
return statearr_24475;
})();var statearr_24476_24515 = state_24468__$1;(statearr_24476_24515[2] = null);
(statearr_24476_24515[1] = 5);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 5))
{var inst_24417 = (state_24468[11]);var inst_24420 = cljs.core.seq_QMARK_(inst_24417);var state_24468__$1 = state_24468;if(inst_24420)
{var statearr_24477_24516 = state_24468__$1;(statearr_24477_24516[1] = 7);
} else
{var statearr_24478_24517 = state_24468__$1;(statearr_24478_24517[1] = 8);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 6))
{var inst_24466 = (state_24468[2]);var state_24468__$1 = state_24468;return cljs.core.async.impl.ioc_helpers.return_chan(state_24468__$1,inst_24466);
} else
{if((state_val_24469 === 7))
{var inst_24417 = (state_24468[11]);var inst_24422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24417);var state_24468__$1 = state_24468;var statearr_24479_24518 = state_24468__$1;(statearr_24479_24518[2] = inst_24422);
(statearr_24479_24518[1] = 9);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 8))
{var inst_24417 = (state_24468[11]);var state_24468__$1 = state_24468;var statearr_24480_24519 = state_24468__$1;(statearr_24480_24519[2] = inst_24417);
(statearr_24480_24519[1] = 9);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 9))
{var inst_24425 = (state_24468[12]);var inst_24425__$1 = (state_24468[2]);var inst_24426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24425__$1,cljs.core.constant$keyword$208);var inst_24427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24425__$1,cljs.core.constant$keyword$207);var inst_24428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24425__$1,cljs.core.constant$keyword$206);var state_24468__$1 = (function (){var statearr_24481 = state_24468;(statearr_24481[12] = inst_24425__$1);
(statearr_24481[13] = inst_24427);
(statearr_24481[14] = inst_24428);
return statearr_24481;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24468__$1,10,inst_24426);
} else
{if((state_val_24469 === 10))
{var inst_24433 = (state_24468[15]);var inst_24432 = (state_24468[16]);var inst_24431 = (state_24468[2]);var inst_24432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24431,0,null);var inst_24433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24431,1,null);var inst_24434 = (inst_24432__$1 == null);var inst_24435 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24433__$1,change);var inst_24436 = (inst_24434) || (inst_24435);var state_24468__$1 = (function (){var statearr_24482 = state_24468;(statearr_24482[15] = inst_24433__$1);
(statearr_24482[16] = inst_24432__$1);
return statearr_24482;
})();if(cljs.core.truth_(inst_24436))
{var statearr_24483_24520 = state_24468__$1;(statearr_24483_24520[1] = 11);
} else
{var statearr_24484_24521 = state_24468__$1;(statearr_24484_24521[1] = 12);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 11))
{var inst_24432 = (state_24468[16]);var inst_24438 = (inst_24432 == null);var state_24468__$1 = state_24468;if(cljs.core.truth_(inst_24438))
{var statearr_24485_24522 = state_24468__$1;(statearr_24485_24522[1] = 14);
} else
{var statearr_24486_24523 = state_24468__$1;(statearr_24486_24523[1] = 15);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 12))
{var inst_24447 = (state_24468[17]);var inst_24433 = (state_24468[15]);var inst_24428 = (state_24468[14]);var inst_24447__$1 = (inst_24428.cljs$core$IFn$_invoke$arity$1 ? inst_24428.cljs$core$IFn$_invoke$arity$1(inst_24433) : inst_24428.call(null,inst_24433));var state_24468__$1 = (function (){var statearr_24487 = state_24468;(statearr_24487[17] = inst_24447__$1);
return statearr_24487;
})();if(cljs.core.truth_(inst_24447__$1))
{var statearr_24488_24524 = state_24468__$1;(statearr_24488_24524[1] = 17);
} else
{var statearr_24489_24525 = state_24468__$1;(statearr_24489_24525[1] = 18);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 13))
{var inst_24464 = (state_24468[2]);var state_24468__$1 = state_24468;var statearr_24490_24526 = state_24468__$1;(statearr_24490_24526[2] = inst_24464);
(statearr_24490_24526[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 14))
{var inst_24433 = (state_24468[15]);var inst_24440 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24433);var state_24468__$1 = state_24468;var statearr_24491_24527 = state_24468__$1;(statearr_24491_24527[2] = inst_24440);
(statearr_24491_24527[1] = 16);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 15))
{var state_24468__$1 = state_24468;var statearr_24492_24528 = state_24468__$1;(statearr_24492_24528[2] = null);
(statearr_24492_24528[1] = 16);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 16))
{var inst_24443 = (state_24468[2]);var inst_24444 = calc_state();var inst_24417 = inst_24444;var state_24468__$1 = (function (){var statearr_24493 = state_24468;(statearr_24493[18] = inst_24443);
(statearr_24493[11] = inst_24417);
return statearr_24493;
})();var statearr_24494_24529 = state_24468__$1;(statearr_24494_24529[2] = null);
(statearr_24494_24529[1] = 5);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 17))
{var inst_24447 = (state_24468[17]);var state_24468__$1 = state_24468;var statearr_24495_24530 = state_24468__$1;(statearr_24495_24530[2] = inst_24447);
(statearr_24495_24530[1] = 19);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 18))
{var inst_24433 = (state_24468[15]);var inst_24427 = (state_24468[13]);var inst_24428 = (state_24468[14]);var inst_24450 = cljs.core.empty_QMARK_(inst_24428);var inst_24451 = (inst_24427.cljs$core$IFn$_invoke$arity$1 ? inst_24427.cljs$core$IFn$_invoke$arity$1(inst_24433) : inst_24427.call(null,inst_24433));var inst_24452 = cljs.core.not(inst_24451);var inst_24453 = (inst_24450) && (inst_24452);var state_24468__$1 = state_24468;var statearr_24496_24531 = state_24468__$1;(statearr_24496_24531[2] = inst_24453);
(statearr_24496_24531[1] = 19);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 19))
{var inst_24455 = (state_24468[2]);var state_24468__$1 = state_24468;if(cljs.core.truth_(inst_24455))
{var statearr_24497_24532 = state_24468__$1;(statearr_24497_24532[1] = 20);
} else
{var statearr_24498_24533 = state_24468__$1;(statearr_24498_24533[1] = 21);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 20))
{var inst_24432 = (state_24468[16]);var state_24468__$1 = state_24468;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24468__$1,23,out,inst_24432);
} else
{if((state_val_24469 === 21))
{var state_24468__$1 = state_24468;var statearr_24499_24534 = state_24468__$1;(statearr_24499_24534[2] = null);
(statearr_24499_24534[1] = 22);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 22))
{var inst_24425 = (state_24468[12]);var inst_24461 = (state_24468[2]);var inst_24417 = inst_24425;var state_24468__$1 = (function (){var statearr_24500 = state_24468;(statearr_24500[19] = inst_24461);
(statearr_24500[11] = inst_24417);
return statearr_24500;
})();var statearr_24501_24535 = state_24468__$1;(statearr_24501_24535[2] = null);
(statearr_24501_24535[1] = 5);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24469 === 23))
{var inst_24458 = (state_24468[2]);var state_24468__$1 = state_24468;var statearr_24502_24536 = state_24468__$1;(statearr_24502_24536[2] = inst_24458);
(statearr_24502_24536[1] = 22);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24506[0] = state_machine__5507__auto__);
(statearr_24506[1] = 1);
return statearr_24506;
});
var state_machine__5507__auto____1 = (function (state_24468){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24468);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24507){if((e24507 instanceof Object))
{var ex__5510__auto__ = e24507;var statearr_24508_24537 = state_24468;(statearr_24508_24537[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24468);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e24507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__24538 = state_24468;
state_24468 = G__24538;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24468){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24509 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24510);
return statearr_24509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj24540 = {};return obj24540;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__24541_SHARP_){if(cljs.core.truth_((p1__24541_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24541_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24541_SHARP_.call(null,topic))))
{return p1__24541_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24541_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24666 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24667){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24667 = meta24667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24666.cljs$lang$type = true;
cljs.core.async.t24666.cljs$lang$ctorStr = "cljs.core.async/t24666";
cljs.core.async.t24666.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24666");
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24666.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24668){var self__ = this;
var _24668__$1 = this;return self__.meta24667;
});})(mults,ensure_mult))
;
cljs.core.async.t24666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24668,meta24667__$1){var self__ = this;
var _24668__$1 = this;return (new cljs.core.async.t24666(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24667__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24666 = ((function (mults,ensure_mult){
return (function __GT_t24666(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24667){return (new cljs.core.async.t24666(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24667));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24666(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24742){var state_val_24743 = (state_24742[1]);if((state_val_24743 === 1))
{var state_24742__$1 = state_24742;var statearr_24744_24791 = state_24742__$1;(statearr_24744_24791[2] = null);
(statearr_24744_24791[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 2))
{var state_24742__$1 = state_24742;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24742__$1,4,ch);
} else
{if((state_val_24743 === 3))
{var inst_24740 = (state_24742[2]);var state_24742__$1 = state_24742;return cljs.core.async.impl.ioc_helpers.return_chan(state_24742__$1,inst_24740);
} else
{if((state_val_24743 === 4))
{var inst_24671 = (state_24742[7]);var inst_24671__$1 = (state_24742[2]);var inst_24672 = (inst_24671__$1 == null);var state_24742__$1 = (function (){var statearr_24745 = state_24742;(statearr_24745[7] = inst_24671__$1);
return statearr_24745;
})();if(cljs.core.truth_(inst_24672))
{var statearr_24746_24792 = state_24742__$1;(statearr_24746_24792[1] = 5);
} else
{var statearr_24747_24793 = state_24742__$1;(statearr_24747_24793[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 5))
{var inst_24678 = cljs.core.deref(mults);var inst_24679 = cljs.core.vals(inst_24678);var inst_24680 = cljs.core.seq(inst_24679);var inst_24681 = inst_24680;var inst_24682 = null;var inst_24683 = 0;var inst_24684 = 0;var state_24742__$1 = (function (){var statearr_24748 = state_24742;(statearr_24748[8] = inst_24683);
(statearr_24748[9] = inst_24684);
(statearr_24748[10] = inst_24681);
(statearr_24748[11] = inst_24682);
return statearr_24748;
})();var statearr_24749_24794 = state_24742__$1;(statearr_24749_24794[2] = null);
(statearr_24749_24794[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 6))
{var inst_24721 = (state_24742[12]);var inst_24719 = (state_24742[13]);var inst_24671 = (state_24742[7]);var inst_24719__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24671) : topic_fn.call(null,inst_24671));var inst_24720 = cljs.core.deref(mults);var inst_24721__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24720,inst_24719__$1);var state_24742__$1 = (function (){var statearr_24750 = state_24742;(statearr_24750[12] = inst_24721__$1);
(statearr_24750[13] = inst_24719__$1);
return statearr_24750;
})();if(cljs.core.truth_(inst_24721__$1))
{var statearr_24751_24795 = state_24742__$1;(statearr_24751_24795[1] = 19);
} else
{var statearr_24752_24796 = state_24742__$1;(statearr_24752_24796[1] = 20);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 7))
{var inst_24738 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24753_24797 = state_24742__$1;(statearr_24753_24797[2] = inst_24738);
(statearr_24753_24797[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 8))
{var inst_24683 = (state_24742[8]);var inst_24684 = (state_24742[9]);var inst_24686 = (inst_24684 < inst_24683);var inst_24687 = inst_24686;var state_24742__$1 = state_24742;if(cljs.core.truth_(inst_24687))
{var statearr_24757_24798 = state_24742__$1;(statearr_24757_24798[1] = 10);
} else
{var statearr_24758_24799 = state_24742__$1;(statearr_24758_24799[1] = 11);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 9))
{var inst_24717 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24759_24800 = state_24742__$1;(statearr_24759_24800[2] = inst_24717);
(statearr_24759_24800[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 10))
{var inst_24683 = (state_24742[8]);var inst_24684 = (state_24742[9]);var inst_24681 = (state_24742[10]);var inst_24682 = (state_24742[11]);var inst_24689 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24682,inst_24684);var inst_24690 = cljs.core.async.muxch_STAR_(inst_24689);var inst_24691 = cljs.core.async.close_BANG_(inst_24690);var inst_24692 = (inst_24684 + 1);var tmp24754 = inst_24683;var tmp24755 = inst_24681;var tmp24756 = inst_24682;var inst_24681__$1 = tmp24755;var inst_24682__$1 = tmp24756;var inst_24683__$1 = tmp24754;var inst_24684__$1 = inst_24692;var state_24742__$1 = (function (){var statearr_24760 = state_24742;(statearr_24760[8] = inst_24683__$1);
(statearr_24760[9] = inst_24684__$1);
(statearr_24760[10] = inst_24681__$1);
(statearr_24760[11] = inst_24682__$1);
(statearr_24760[14] = inst_24691);
return statearr_24760;
})();var statearr_24761_24801 = state_24742__$1;(statearr_24761_24801[2] = null);
(statearr_24761_24801[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 11))
{var inst_24681 = (state_24742[10]);var inst_24695 = (state_24742[15]);var inst_24695__$1 = cljs.core.seq(inst_24681);var state_24742__$1 = (function (){var statearr_24762 = state_24742;(statearr_24762[15] = inst_24695__$1);
return statearr_24762;
})();if(inst_24695__$1)
{var statearr_24763_24802 = state_24742__$1;(statearr_24763_24802[1] = 13);
} else
{var statearr_24764_24803 = state_24742__$1;(statearr_24764_24803[1] = 14);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 12))
{var inst_24715 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24765_24804 = state_24742__$1;(statearr_24765_24804[2] = inst_24715);
(statearr_24765_24804[1] = 9);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 13))
{var inst_24695 = (state_24742[15]);var inst_24697 = cljs.core.chunked_seq_QMARK_(inst_24695);var state_24742__$1 = state_24742;if(inst_24697)
{var statearr_24766_24805 = state_24742__$1;(statearr_24766_24805[1] = 16);
} else
{var statearr_24767_24806 = state_24742__$1;(statearr_24767_24806[1] = 17);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 14))
{var state_24742__$1 = state_24742;var statearr_24768_24807 = state_24742__$1;(statearr_24768_24807[2] = null);
(statearr_24768_24807[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 15))
{var inst_24713 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24769_24808 = state_24742__$1;(statearr_24769_24808[2] = inst_24713);
(statearr_24769_24808[1] = 12);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 16))
{var inst_24695 = (state_24742[15]);var inst_24699 = cljs.core.chunk_first(inst_24695);var inst_24700 = cljs.core.chunk_rest(inst_24695);var inst_24701 = cljs.core.count(inst_24699);var inst_24681 = inst_24700;var inst_24682 = inst_24699;var inst_24683 = inst_24701;var inst_24684 = 0;var state_24742__$1 = (function (){var statearr_24770 = state_24742;(statearr_24770[8] = inst_24683);
(statearr_24770[9] = inst_24684);
(statearr_24770[10] = inst_24681);
(statearr_24770[11] = inst_24682);
return statearr_24770;
})();var statearr_24771_24809 = state_24742__$1;(statearr_24771_24809[2] = null);
(statearr_24771_24809[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 17))
{var inst_24695 = (state_24742[15]);var inst_24704 = cljs.core.first(inst_24695);var inst_24705 = cljs.core.async.muxch_STAR_(inst_24704);var inst_24706 = cljs.core.async.close_BANG_(inst_24705);var inst_24707 = cljs.core.next(inst_24695);var inst_24681 = inst_24707;var inst_24682 = null;var inst_24683 = 0;var inst_24684 = 0;var state_24742__$1 = (function (){var statearr_24772 = state_24742;(statearr_24772[8] = inst_24683);
(statearr_24772[9] = inst_24684);
(statearr_24772[10] = inst_24681);
(statearr_24772[11] = inst_24682);
(statearr_24772[16] = inst_24706);
return statearr_24772;
})();var statearr_24773_24810 = state_24742__$1;(statearr_24773_24810[2] = null);
(statearr_24773_24810[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 18))
{var inst_24710 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24774_24811 = state_24742__$1;(statearr_24774_24811[2] = inst_24710);
(statearr_24774_24811[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 19))
{var state_24742__$1 = state_24742;var statearr_24775_24812 = state_24742__$1;(statearr_24775_24812[2] = null);
(statearr_24775_24812[1] = 24);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 20))
{var state_24742__$1 = state_24742;var statearr_24776_24813 = state_24742__$1;(statearr_24776_24813[2] = null);
(statearr_24776_24813[1] = 21);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 21))
{var inst_24735 = (state_24742[2]);var state_24742__$1 = (function (){var statearr_24777 = state_24742;(statearr_24777[17] = inst_24735);
return statearr_24777;
})();var statearr_24778_24814 = state_24742__$1;(statearr_24778_24814[2] = null);
(statearr_24778_24814[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 22))
{var inst_24732 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24779_24815 = state_24742__$1;(statearr_24779_24815[2] = inst_24732);
(statearr_24779_24815[1] = 21);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 23))
{var inst_24719 = (state_24742[13]);var inst_24723 = (state_24742[2]);var inst_24724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24719);var state_24742__$1 = (function (){var statearr_24780 = state_24742;(statearr_24780[18] = inst_24723);
return statearr_24780;
})();var statearr_24781_24816 = state_24742__$1;(statearr_24781_24816[2] = inst_24724);
cljs.core.async.impl.ioc_helpers.process_exception(state_24742__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24743 === 24))
{var inst_24721 = (state_24742[12]);var inst_24671 = (state_24742[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24742,23,Object,null,22);var inst_24728 = cljs.core.async.muxch_STAR_(inst_24721);var state_24742__$1 = state_24742;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24742__$1,25,inst_24728,inst_24671);
} else
{if((state_val_24743 === 25))
{var inst_24730 = (state_24742[2]);var state_24742__$1 = state_24742;var statearr_24782_24817 = state_24742__$1;(statearr_24782_24817[2] = inst_24730);
cljs.core.async.impl.ioc_helpers.process_exception(state_24742__$1);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24786[0] = state_machine__5507__auto__);
(statearr_24786[1] = 1);
return statearr_24786;
});
var state_machine__5507__auto____1 = (function (state_24742){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24742);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24787){if((e24787 instanceof Object))
{var ex__5510__auto__ = e24787;var statearr_24788_24818 = state_24742;(statearr_24788_24818[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24742);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e24787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__24819 = state_24742;
state_24742 = G__24819;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24742){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24789 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24790);
return statearr_24789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24926){var state_val_24927 = (state_24926[1]);if((state_val_24927 === 1))
{var state_24926__$1 = state_24926;var statearr_24928_24957 = state_24926__$1;(statearr_24928_24957[2] = null);
(statearr_24928_24957[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 2))
{var inst_24889 = cljs.core.reset_BANG_(dctr,cnt);var inst_24890 = 0;var state_24926__$1 = (function (){var statearr_24929 = state_24926;(statearr_24929[7] = inst_24889);
(statearr_24929[8] = inst_24890);
return statearr_24929;
})();var statearr_24930_24958 = state_24926__$1;(statearr_24930_24958[2] = null);
(statearr_24930_24958[1] = 4);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 3))
{var inst_24924 = (state_24926[2]);var state_24926__$1 = state_24926;return cljs.core.async.impl.ioc_helpers.return_chan(state_24926__$1,inst_24924);
} else
{if((state_val_24927 === 4))
{var inst_24890 = (state_24926[8]);var inst_24892 = (inst_24890 < cnt);var state_24926__$1 = state_24926;if(cljs.core.truth_(inst_24892))
{var statearr_24931_24959 = state_24926__$1;(statearr_24931_24959[1] = 6);
} else
{var statearr_24932_24960 = state_24926__$1;(statearr_24932_24960[1] = 7);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 5))
{var inst_24910 = (state_24926[2]);var state_24926__$1 = (function (){var statearr_24933 = state_24926;(statearr_24933[9] = inst_24910);
return statearr_24933;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24926__$1,12,dchan);
} else
{if((state_val_24927 === 6))
{var state_24926__$1 = state_24926;var statearr_24934_24961 = state_24926__$1;(statearr_24934_24961[2] = null);
(statearr_24934_24961[1] = 11);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 7))
{var state_24926__$1 = state_24926;var statearr_24935_24962 = state_24926__$1;(statearr_24935_24962[2] = null);
(statearr_24935_24962[1] = 8);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 8))
{var inst_24908 = (state_24926[2]);var state_24926__$1 = state_24926;var statearr_24936_24963 = state_24926__$1;(statearr_24936_24963[2] = inst_24908);
(statearr_24936_24963[1] = 5);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 9))
{var inst_24890 = (state_24926[8]);var inst_24903 = (state_24926[2]);var inst_24904 = (inst_24890 + 1);var inst_24890__$1 = inst_24904;var state_24926__$1 = (function (){var statearr_24937 = state_24926;(statearr_24937[10] = inst_24903);
(statearr_24937[8] = inst_24890__$1);
return statearr_24937;
})();var statearr_24938_24964 = state_24926__$1;(statearr_24938_24964[2] = null);
(statearr_24938_24964[1] = 4);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 10))
{var inst_24894 = (state_24926[2]);var inst_24895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24926__$1 = (function (){var statearr_24939 = state_24926;(statearr_24939[11] = inst_24894);
return statearr_24939;
})();var statearr_24940_24965 = state_24926__$1;(statearr_24940_24965[2] = inst_24895);
cljs.core.async.impl.ioc_helpers.process_exception(state_24926__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 11))
{var inst_24890 = (state_24926[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24926,10,Object,null,9);var inst_24899 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24890) : chs__$1.call(null,inst_24890));var inst_24900 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24890) : done.call(null,inst_24890));var inst_24901 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24899,inst_24900);var state_24926__$1 = state_24926;var statearr_24941_24966 = state_24926__$1;(statearr_24941_24966[2] = inst_24901);
cljs.core.async.impl.ioc_helpers.process_exception(state_24926__$1);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 12))
{var inst_24912 = (state_24926[12]);var inst_24912__$1 = (state_24926[2]);var inst_24913 = cljs.core.some(cljs.core.nil_QMARK_,inst_24912__$1);var state_24926__$1 = (function (){var statearr_24942 = state_24926;(statearr_24942[12] = inst_24912__$1);
return statearr_24942;
})();if(cljs.core.truth_(inst_24913))
{var statearr_24943_24967 = state_24926__$1;(statearr_24943_24967[1] = 13);
} else
{var statearr_24944_24968 = state_24926__$1;(statearr_24944_24968[1] = 14);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 13))
{var inst_24915 = cljs.core.async.close_BANG_(out);var state_24926__$1 = state_24926;var statearr_24945_24969 = state_24926__$1;(statearr_24945_24969[2] = inst_24915);
(statearr_24945_24969[1] = 15);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 14))
{var inst_24912 = (state_24926[12]);var inst_24917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24912);var state_24926__$1 = state_24926;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24926__$1,16,out,inst_24917);
} else
{if((state_val_24927 === 15))
{var inst_24922 = (state_24926[2]);var state_24926__$1 = state_24926;var statearr_24946_24970 = state_24926__$1;(statearr_24946_24970[2] = inst_24922);
(statearr_24946_24970[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_24927 === 16))
{var inst_24919 = (state_24926[2]);var state_24926__$1 = (function (){var statearr_24947 = state_24926;(statearr_24947[13] = inst_24919);
return statearr_24947;
})();var statearr_24948_24971 = state_24926__$1;(statearr_24948_24971[2] = null);
(statearr_24948_24971[1] = 2);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24952[0] = state_machine__5507__auto__);
(statearr_24952[1] = 1);
return statearr_24952;
});
var state_machine__5507__auto____1 = (function (state_24926){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24926);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24953){if((e24953 instanceof Object))
{var ex__5510__auto__ = e24953;var statearr_24954_24972 = state_24926;(statearr_24954_24972[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24926);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e24953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__24973 = state_24926;
state_24926 = G__24973;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24926){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24955 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24956);
return statearr_24955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25057){var state_val_25058 = (state_25057[1]);if((state_val_25058 === 1))
{var inst_25028 = cljs.core.vec(chs);var inst_25029 = inst_25028;var state_25057__$1 = (function (){var statearr_25059 = state_25057;(statearr_25059[7] = inst_25029);
return statearr_25059;
})();var statearr_25060_25082 = state_25057__$1;(statearr_25060_25082[2] = null);
(statearr_25060_25082[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 2))
{var inst_25029 = (state_25057[7]);var inst_25031 = cljs.core.count(inst_25029);var inst_25032 = (inst_25031 > 0);var state_25057__$1 = state_25057;if(cljs.core.truth_(inst_25032))
{var statearr_25061_25083 = state_25057__$1;(statearr_25061_25083[1] = 4);
} else
{var statearr_25062_25084 = state_25057__$1;(statearr_25062_25084[1] = 5);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 3))
{var inst_25055 = (state_25057[2]);var state_25057__$1 = state_25057;return cljs.core.async.impl.ioc_helpers.return_chan(state_25057__$1,inst_25055);
} else
{if((state_val_25058 === 4))
{var inst_25029 = (state_25057[7]);var state_25057__$1 = state_25057;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25057__$1,7,inst_25029);
} else
{if((state_val_25058 === 5))
{var inst_25051 = cljs.core.async.close_BANG_(out);var state_25057__$1 = state_25057;var statearr_25063_25085 = state_25057__$1;(statearr_25063_25085[2] = inst_25051);
(statearr_25063_25085[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 6))
{var inst_25053 = (state_25057[2]);var state_25057__$1 = state_25057;var statearr_25064_25086 = state_25057__$1;(statearr_25064_25086[2] = inst_25053);
(statearr_25064_25086[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 7))
{var inst_25036 = (state_25057[8]);var inst_25037 = (state_25057[9]);var inst_25036__$1 = (state_25057[2]);var inst_25037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25036__$1,0,null);var inst_25038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25036__$1,1,null);var inst_25039 = (inst_25037__$1 == null);var state_25057__$1 = (function (){var statearr_25065 = state_25057;(statearr_25065[8] = inst_25036__$1);
(statearr_25065[10] = inst_25038);
(statearr_25065[9] = inst_25037__$1);
return statearr_25065;
})();if(cljs.core.truth_(inst_25039))
{var statearr_25066_25087 = state_25057__$1;(statearr_25066_25087[1] = 8);
} else
{var statearr_25067_25088 = state_25057__$1;(statearr_25067_25088[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 8))
{var inst_25029 = (state_25057[7]);var inst_25036 = (state_25057[8]);var inst_25038 = (state_25057[10]);var inst_25037 = (state_25057[9]);var inst_25041 = (function (){var c = inst_25038;var v = inst_25037;var vec__25034 = inst_25036;var cs = inst_25029;return ((function (c,v,vec__25034,cs,inst_25029,inst_25036,inst_25038,inst_25037,state_val_25058){
return (function (p1__24974_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24974_SHARP_);
});
;})(c,v,vec__25034,cs,inst_25029,inst_25036,inst_25038,inst_25037,state_val_25058))
})();var inst_25042 = cljs.core.filterv(inst_25041,inst_25029);var inst_25029__$1 = inst_25042;var state_25057__$1 = (function (){var statearr_25068 = state_25057;(statearr_25068[7] = inst_25029__$1);
return statearr_25068;
})();var statearr_25069_25089 = state_25057__$1;(statearr_25069_25089[2] = null);
(statearr_25069_25089[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 9))
{var inst_25037 = (state_25057[9]);var state_25057__$1 = state_25057;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25057__$1,11,out,inst_25037);
} else
{if((state_val_25058 === 10))
{var inst_25049 = (state_25057[2]);var state_25057__$1 = state_25057;var statearr_25071_25090 = state_25057__$1;(statearr_25071_25090[2] = inst_25049);
(statearr_25071_25090[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25058 === 11))
{var inst_25029 = (state_25057[7]);var inst_25046 = (state_25057[2]);var tmp25070 = inst_25029;var inst_25029__$1 = tmp25070;var state_25057__$1 = (function (){var statearr_25072 = state_25057;(statearr_25072[7] = inst_25029__$1);
(statearr_25072[11] = inst_25046);
return statearr_25072;
})();var statearr_25073_25091 = state_25057__$1;(statearr_25073_25091[2] = null);
(statearr_25073_25091[1] = 2);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25077 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25077[0] = state_machine__5507__auto__);
(statearr_25077[1] = 1);
return statearr_25077;
});
var state_machine__5507__auto____1 = (function (state_25057){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25057);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25078){if((e25078 instanceof Object))
{var ex__5510__auto__ = e25078;var statearr_25079_25092 = state_25057;(statearr_25079_25092[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25057);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e25078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__25093 = state_25057;
state_25057 = G__25093;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25057){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25080 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25081);
return statearr_25080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25163){var state_val_25164 = (state_25163[1]);if((state_val_25164 === 1))
{var inst_25140 = 0;var state_25163__$1 = (function (){var statearr_25165 = state_25163;(statearr_25165[7] = inst_25140);
return statearr_25165;
})();var statearr_25166_25187 = state_25163__$1;(statearr_25166_25187[2] = null);
(statearr_25166_25187[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 2))
{var inst_25140 = (state_25163[7]);var inst_25142 = (inst_25140 < n);var state_25163__$1 = state_25163;if(cljs.core.truth_(inst_25142))
{var statearr_25167_25188 = state_25163__$1;(statearr_25167_25188[1] = 4);
} else
{var statearr_25168_25189 = state_25163__$1;(statearr_25168_25189[1] = 5);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 3))
{var inst_25160 = (state_25163[2]);var inst_25161 = cljs.core.async.close_BANG_(out);var state_25163__$1 = (function (){var statearr_25169 = state_25163;(statearr_25169[8] = inst_25160);
return statearr_25169;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25163__$1,inst_25161);
} else
{if((state_val_25164 === 4))
{var state_25163__$1 = state_25163;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25163__$1,7,ch);
} else
{if((state_val_25164 === 5))
{var state_25163__$1 = state_25163;var statearr_25170_25190 = state_25163__$1;(statearr_25170_25190[2] = null);
(statearr_25170_25190[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 6))
{var inst_25158 = (state_25163[2]);var state_25163__$1 = state_25163;var statearr_25171_25191 = state_25163__$1;(statearr_25171_25191[2] = inst_25158);
(statearr_25171_25191[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 7))
{var inst_25145 = (state_25163[9]);var inst_25145__$1 = (state_25163[2]);var inst_25146 = (inst_25145__$1 == null);var inst_25147 = cljs.core.not(inst_25146);var state_25163__$1 = (function (){var statearr_25172 = state_25163;(statearr_25172[9] = inst_25145__$1);
return statearr_25172;
})();if(inst_25147)
{var statearr_25173_25192 = state_25163__$1;(statearr_25173_25192[1] = 8);
} else
{var statearr_25174_25193 = state_25163__$1;(statearr_25174_25193[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 8))
{var inst_25145 = (state_25163[9]);var state_25163__$1 = state_25163;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25163__$1,11,out,inst_25145);
} else
{if((state_val_25164 === 9))
{var state_25163__$1 = state_25163;var statearr_25175_25194 = state_25163__$1;(statearr_25175_25194[2] = null);
(statearr_25175_25194[1] = 10);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 10))
{var inst_25155 = (state_25163[2]);var state_25163__$1 = state_25163;var statearr_25176_25195 = state_25163__$1;(statearr_25176_25195[2] = inst_25155);
(statearr_25176_25195[1] = 6);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25164 === 11))
{var inst_25140 = (state_25163[7]);var inst_25150 = (state_25163[2]);var inst_25151 = (inst_25140 + 1);var inst_25140__$1 = inst_25151;var state_25163__$1 = (function (){var statearr_25177 = state_25163;(statearr_25177[7] = inst_25140__$1);
(statearr_25177[10] = inst_25150);
return statearr_25177;
})();var statearr_25178_25196 = state_25163__$1;(statearr_25178_25196[2] = null);
(statearr_25178_25196[1] = 2);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25182 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25182[0] = state_machine__5507__auto__);
(statearr_25182[1] = 1);
return statearr_25182;
});
var state_machine__5507__auto____1 = (function (state_25163){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25163);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25183){if((e25183 instanceof Object))
{var ex__5510__auto__ = e25183;var statearr_25184_25197 = state_25163;(statearr_25184_25197[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25163);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e25183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__25198 = state_25163;
state_25163 = G__25198;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25163){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25185 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25186);
return statearr_25185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25270){var state_val_25271 = (state_25270[1]);if((state_val_25271 === 1))
{var inst_25247 = null;var state_25270__$1 = (function (){var statearr_25272 = state_25270;(statearr_25272[7] = inst_25247);
return statearr_25272;
})();var statearr_25273_25296 = state_25270__$1;(statearr_25273_25296[2] = null);
(statearr_25273_25296[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 2))
{var state_25270__$1 = state_25270;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25270__$1,4,ch);
} else
{if((state_val_25271 === 3))
{var inst_25267 = (state_25270[2]);var inst_25268 = cljs.core.async.close_BANG_(out);var state_25270__$1 = (function (){var statearr_25274 = state_25270;(statearr_25274[8] = inst_25267);
return statearr_25274;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25270__$1,inst_25268);
} else
{if((state_val_25271 === 4))
{var inst_25250 = (state_25270[9]);var inst_25250__$1 = (state_25270[2]);var inst_25251 = (inst_25250__$1 == null);var inst_25252 = cljs.core.not(inst_25251);var state_25270__$1 = (function (){var statearr_25275 = state_25270;(statearr_25275[9] = inst_25250__$1);
return statearr_25275;
})();if(inst_25252)
{var statearr_25276_25297 = state_25270__$1;(statearr_25276_25297[1] = 5);
} else
{var statearr_25277_25298 = state_25270__$1;(statearr_25277_25298[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 5))
{var inst_25250 = (state_25270[9]);var inst_25247 = (state_25270[7]);var inst_25254 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25250,inst_25247);var state_25270__$1 = state_25270;if(inst_25254)
{var statearr_25278_25299 = state_25270__$1;(statearr_25278_25299[1] = 8);
} else
{var statearr_25279_25300 = state_25270__$1;(statearr_25279_25300[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 6))
{var state_25270__$1 = state_25270;var statearr_25281_25301 = state_25270__$1;(statearr_25281_25301[2] = null);
(statearr_25281_25301[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 7))
{var inst_25265 = (state_25270[2]);var state_25270__$1 = state_25270;var statearr_25282_25302 = state_25270__$1;(statearr_25282_25302[2] = inst_25265);
(statearr_25282_25302[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 8))
{var inst_25247 = (state_25270[7]);var tmp25280 = inst_25247;var inst_25247__$1 = tmp25280;var state_25270__$1 = (function (){var statearr_25283 = state_25270;(statearr_25283[7] = inst_25247__$1);
return statearr_25283;
})();var statearr_25284_25303 = state_25270__$1;(statearr_25284_25303[2] = null);
(statearr_25284_25303[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 9))
{var inst_25250 = (state_25270[9]);var state_25270__$1 = state_25270;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25270__$1,11,out,inst_25250);
} else
{if((state_val_25271 === 10))
{var inst_25262 = (state_25270[2]);var state_25270__$1 = state_25270;var statearr_25285_25304 = state_25270__$1;(statearr_25285_25304[2] = inst_25262);
(statearr_25285_25304[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25271 === 11))
{var inst_25250 = (state_25270[9]);var inst_25259 = (state_25270[2]);var inst_25247 = inst_25250;var state_25270__$1 = (function (){var statearr_25286 = state_25270;(statearr_25286[10] = inst_25259);
(statearr_25286[7] = inst_25247);
return statearr_25286;
})();var statearr_25287_25305 = state_25270__$1;(statearr_25287_25305[2] = null);
(statearr_25287_25305[1] = 2);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25291 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25291[0] = state_machine__5507__auto__);
(statearr_25291[1] = 1);
return statearr_25291;
});
var state_machine__5507__auto____1 = (function (state_25270){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25270);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object))
{var ex__5510__auto__ = e25292;var statearr_25293_25306 = state_25270;(statearr_25293_25306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25270);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e25292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__25307 = state_25270;
state_25270 = G__25307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25270){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25294 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25295);
return statearr_25294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25412){var state_val_25413 = (state_25412[1]);if((state_val_25413 === 1))
{var inst_25375 = (new Array(n));var inst_25376 = inst_25375;var inst_25377 = 0;var state_25412__$1 = (function (){var statearr_25414 = state_25412;(statearr_25414[7] = inst_25376);
(statearr_25414[8] = inst_25377);
return statearr_25414;
})();var statearr_25415_25443 = state_25412__$1;(statearr_25415_25443[2] = null);
(statearr_25415_25443[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 2))
{var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25412__$1,4,ch);
} else
{if((state_val_25413 === 3))
{var inst_25410 = (state_25412[2]);var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.return_chan(state_25412__$1,inst_25410);
} else
{if((state_val_25413 === 4))
{var inst_25380 = (state_25412[9]);var inst_25380__$1 = (state_25412[2]);var inst_25381 = (inst_25380__$1 == null);var inst_25382 = cljs.core.not(inst_25381);var state_25412__$1 = (function (){var statearr_25416 = state_25412;(statearr_25416[9] = inst_25380__$1);
return statearr_25416;
})();if(inst_25382)
{var statearr_25417_25444 = state_25412__$1;(statearr_25417_25444[1] = 5);
} else
{var statearr_25418_25445 = state_25412__$1;(statearr_25418_25445[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 5))
{var inst_25376 = (state_25412[7]);var inst_25377 = (state_25412[8]);var inst_25385 = (state_25412[10]);var inst_25380 = (state_25412[9]);var inst_25384 = (inst_25376[inst_25377] = inst_25380);var inst_25385__$1 = (inst_25377 + 1);var inst_25386 = (inst_25385__$1 < n);var state_25412__$1 = (function (){var statearr_25419 = state_25412;(statearr_25419[10] = inst_25385__$1);
(statearr_25419[11] = inst_25384);
return statearr_25419;
})();if(cljs.core.truth_(inst_25386))
{var statearr_25420_25446 = state_25412__$1;(statearr_25420_25446[1] = 8);
} else
{var statearr_25421_25447 = state_25412__$1;(statearr_25421_25447[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 6))
{var inst_25377 = (state_25412[8]);var inst_25398 = (inst_25377 > 0);var state_25412__$1 = state_25412;if(cljs.core.truth_(inst_25398))
{var statearr_25423_25448 = state_25412__$1;(statearr_25423_25448[1] = 12);
} else
{var statearr_25424_25449 = state_25412__$1;(statearr_25424_25449[1] = 13);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 7))
{var inst_25408 = (state_25412[2]);var state_25412__$1 = state_25412;var statearr_25425_25450 = state_25412__$1;(statearr_25425_25450[2] = inst_25408);
(statearr_25425_25450[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 8))
{var inst_25376 = (state_25412[7]);var inst_25385 = (state_25412[10]);var tmp25422 = inst_25376;var inst_25376__$1 = tmp25422;var inst_25377 = inst_25385;var state_25412__$1 = (function (){var statearr_25426 = state_25412;(statearr_25426[7] = inst_25376__$1);
(statearr_25426[8] = inst_25377);
return statearr_25426;
})();var statearr_25427_25451 = state_25412__$1;(statearr_25427_25451[2] = null);
(statearr_25427_25451[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 9))
{var inst_25376 = (state_25412[7]);var inst_25390 = cljs.core.vec(inst_25376);var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25412__$1,11,out,inst_25390);
} else
{if((state_val_25413 === 10))
{var inst_25396 = (state_25412[2]);var state_25412__$1 = state_25412;var statearr_25428_25452 = state_25412__$1;(statearr_25428_25452[2] = inst_25396);
(statearr_25428_25452[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 11))
{var inst_25392 = (state_25412[2]);var inst_25393 = (new Array(n));var inst_25376 = inst_25393;var inst_25377 = 0;var state_25412__$1 = (function (){var statearr_25429 = state_25412;(statearr_25429[7] = inst_25376);
(statearr_25429[8] = inst_25377);
(statearr_25429[12] = inst_25392);
return statearr_25429;
})();var statearr_25430_25453 = state_25412__$1;(statearr_25430_25453[2] = null);
(statearr_25430_25453[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 12))
{var inst_25376 = (state_25412[7]);var inst_25400 = cljs.core.vec(inst_25376);var state_25412__$1 = state_25412;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25412__$1,15,out,inst_25400);
} else
{if((state_val_25413 === 13))
{var state_25412__$1 = state_25412;var statearr_25431_25454 = state_25412__$1;(statearr_25431_25454[2] = null);
(statearr_25431_25454[1] = 14);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 14))
{var inst_25405 = (state_25412[2]);var inst_25406 = cljs.core.async.close_BANG_(out);var state_25412__$1 = (function (){var statearr_25432 = state_25412;(statearr_25432[13] = inst_25405);
return statearr_25432;
})();var statearr_25433_25455 = state_25412__$1;(statearr_25433_25455[2] = inst_25406);
(statearr_25433_25455[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25413 === 15))
{var inst_25402 = (state_25412[2]);var state_25412__$1 = state_25412;var statearr_25434_25456 = state_25412__$1;(statearr_25434_25456[2] = inst_25402);
(statearr_25434_25456[1] = 14);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25438[0] = state_machine__5507__auto__);
(statearr_25438[1] = 1);
return statearr_25438;
});
var state_machine__5507__auto____1 = (function (state_25412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25412);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25439){if((e25439 instanceof Object))
{var ex__5510__auto__ = e25439;var statearr_25440_25457 = state_25412;(statearr_25440_25457[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25412);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e25439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__25458 = state_25412;
state_25412 = G__25458;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25441 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25442);
return statearr_25441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25571){var state_val_25572 = (state_25571[1]);if((state_val_25572 === 1))
{var inst_25530 = [];var inst_25531 = inst_25530;var inst_25532 = cljs.core.constant$keyword$209;var state_25571__$1 = (function (){var statearr_25573 = state_25571;(statearr_25573[7] = inst_25531);
(statearr_25573[8] = inst_25532);
return statearr_25573;
})();var statearr_25574_25602 = state_25571__$1;(statearr_25574_25602[2] = null);
(statearr_25574_25602[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 2))
{var state_25571__$1 = state_25571;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25571__$1,4,ch);
} else
{if((state_val_25572 === 3))
{var inst_25569 = (state_25571[2]);var state_25571__$1 = state_25571;return cljs.core.async.impl.ioc_helpers.return_chan(state_25571__$1,inst_25569);
} else
{if((state_val_25572 === 4))
{var inst_25535 = (state_25571[9]);var inst_25535__$1 = (state_25571[2]);var inst_25536 = (inst_25535__$1 == null);var inst_25537 = cljs.core.not(inst_25536);var state_25571__$1 = (function (){var statearr_25575 = state_25571;(statearr_25575[9] = inst_25535__$1);
return statearr_25575;
})();if(inst_25537)
{var statearr_25576_25603 = state_25571__$1;(statearr_25576_25603[1] = 5);
} else
{var statearr_25577_25604 = state_25571__$1;(statearr_25577_25604[1] = 6);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 5))
{var inst_25539 = (state_25571[10]);var inst_25535 = (state_25571[9]);var inst_25532 = (state_25571[8]);var inst_25539__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25535) : f.call(null,inst_25535));var inst_25540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25539__$1,inst_25532);var inst_25541 = cljs.core.keyword_identical_QMARK_(inst_25532,cljs.core.constant$keyword$209);var inst_25542 = (inst_25540) || (inst_25541);var state_25571__$1 = (function (){var statearr_25578 = state_25571;(statearr_25578[10] = inst_25539__$1);
return statearr_25578;
})();if(cljs.core.truth_(inst_25542))
{var statearr_25579_25605 = state_25571__$1;(statearr_25579_25605[1] = 8);
} else
{var statearr_25580_25606 = state_25571__$1;(statearr_25580_25606[1] = 9);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 6))
{var inst_25531 = (state_25571[7]);var inst_25556 = inst_25531.length;var inst_25557 = (inst_25556 > 0);var state_25571__$1 = state_25571;if(cljs.core.truth_(inst_25557))
{var statearr_25582_25607 = state_25571__$1;(statearr_25582_25607[1] = 12);
} else
{var statearr_25583_25608 = state_25571__$1;(statearr_25583_25608[1] = 13);
}
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 7))
{var inst_25567 = (state_25571[2]);var state_25571__$1 = state_25571;var statearr_25584_25609 = state_25571__$1;(statearr_25584_25609[2] = inst_25567);
(statearr_25584_25609[1] = 3);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 8))
{var inst_25531 = (state_25571[7]);var inst_25539 = (state_25571[10]);var inst_25535 = (state_25571[9]);var inst_25544 = inst_25531.push(inst_25535);var tmp25581 = inst_25531;var inst_25531__$1 = tmp25581;var inst_25532 = inst_25539;var state_25571__$1 = (function (){var statearr_25585 = state_25571;(statearr_25585[7] = inst_25531__$1);
(statearr_25585[11] = inst_25544);
(statearr_25585[8] = inst_25532);
return statearr_25585;
})();var statearr_25586_25610 = state_25571__$1;(statearr_25586_25610[2] = null);
(statearr_25586_25610[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 9))
{var inst_25531 = (state_25571[7]);var inst_25547 = cljs.core.vec(inst_25531);var state_25571__$1 = state_25571;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25571__$1,11,out,inst_25547);
} else
{if((state_val_25572 === 10))
{var inst_25554 = (state_25571[2]);var state_25571__$1 = state_25571;var statearr_25587_25611 = state_25571__$1;(statearr_25587_25611[2] = inst_25554);
(statearr_25587_25611[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 11))
{var inst_25539 = (state_25571[10]);var inst_25535 = (state_25571[9]);var inst_25549 = (state_25571[2]);var inst_25550 = [];var inst_25551 = inst_25550.push(inst_25535);var inst_25531 = inst_25550;var inst_25532 = inst_25539;var state_25571__$1 = (function (){var statearr_25588 = state_25571;(statearr_25588[7] = inst_25531);
(statearr_25588[8] = inst_25532);
(statearr_25588[12] = inst_25551);
(statearr_25588[13] = inst_25549);
return statearr_25588;
})();var statearr_25589_25612 = state_25571__$1;(statearr_25589_25612[2] = null);
(statearr_25589_25612[1] = 2);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 12))
{var inst_25531 = (state_25571[7]);var inst_25559 = cljs.core.vec(inst_25531);var state_25571__$1 = state_25571;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25571__$1,15,out,inst_25559);
} else
{if((state_val_25572 === 13))
{var state_25571__$1 = state_25571;var statearr_25590_25613 = state_25571__$1;(statearr_25590_25613[2] = null);
(statearr_25590_25613[1] = 14);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 14))
{var inst_25564 = (state_25571[2]);var inst_25565 = cljs.core.async.close_BANG_(out);var state_25571__$1 = (function (){var statearr_25591 = state_25571;(statearr_25591[14] = inst_25564);
return statearr_25591;
})();var statearr_25592_25614 = state_25571__$1;(statearr_25592_25614[2] = inst_25565);
(statearr_25592_25614[1] = 7);
return cljs.core.constant$keyword$196;
} else
{if((state_val_25572 === 15))
{var inst_25561 = (state_25571[2]);var state_25571__$1 = state_25571;var statearr_25593_25615 = state_25571__$1;(statearr_25593_25615[2] = inst_25561);
(statearr_25593_25615[1] = 14);
return cljs.core.constant$keyword$196;
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25597[0] = state_machine__5507__auto__);
(statearr_25597[1] = 1);
return statearr_25597;
});
var state_machine__5507__auto____1 = (function (state_25571){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25571);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$196))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25598){if((e25598 instanceof Object))
{var ex__5510__auto__ = e25598;var statearr_25599_25616 = state_25571;(statearr_25599_25616[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25571);
return cljs.core.constant$keyword$196;
} else
{if(cljs.core.constant$keyword$185)
{throw e25598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$196))
{{
var G__25617 = state_25571;
state_25571 = G__25617;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25600 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25601);
return statearr_25600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
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
