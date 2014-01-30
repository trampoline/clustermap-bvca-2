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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23105 = (function (f,fn_handler,meta23106){
this.f = f;
this.fn_handler = fn_handler;
this.meta23106 = meta23106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23105.cljs$lang$type = true;
cljs.core.async.t23105.cljs$lang$ctorStr = "cljs.core.async/t23105";
cljs.core.async.t23105.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23105");
});
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23107){var self__ = this;
var _23107__$1 = this;return self__.meta23106;
});
cljs.core.async.t23105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23107,meta23106__$1){var self__ = this;
var _23107__$1 = this;return (new cljs.core.async.t23105(self__.f,self__.fn_handler,meta23106__$1));
});
cljs.core.async.__GT_t23105 = (function __GT_t23105(f__$1,fn_handler__$1,meta23106){return (new cljs.core.async.t23105(f__$1,fn_handler__$1,meta23106));
});
}
return (new cljs.core.async.t23105(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23109 = buff;if(G__23109)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23109.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23109.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23109);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23109);
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
{var val_23110 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23110) : fn1.call(null,val_23110));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23110) : fn1.call(null,val_23110));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23111 = n;var x_23112 = 0;while(true){
if((x_23112 < n__4248__auto___23111))
{(a[x_23112] = 0);
{
var G__23113 = (x_23112 + 1);
x_23112 = G__23113;
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
var G__23114 = (i + 1);
i = G__23114;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23118 = (function (flag,alt_flag,meta23119){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23119 = meta23119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23118.cljs$lang$type = true;
cljs.core.async.t23118.cljs$lang$ctorStr = "cljs.core.async/t23118";
cljs.core.async.t23118.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23118");
});
cljs.core.async.t23118.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23120){var self__ = this;
var _23120__$1 = this;return self__.meta23119;
});
cljs.core.async.t23118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23120,meta23119__$1){var self__ = this;
var _23120__$1 = this;return (new cljs.core.async.t23118(self__.flag,self__.alt_flag,meta23119__$1));
});
cljs.core.async.__GT_t23118 = (function __GT_t23118(flag__$1,alt_flag__$1,meta23119){return (new cljs.core.async.t23118(flag__$1,alt_flag__$1,meta23119));
});
}
return (new cljs.core.async.t23118(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23124 = (function (cb,flag,alt_handler,meta23125){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23125 = meta23125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23124.cljs$lang$type = true;
cljs.core.async.t23124.cljs$lang$ctorStr = "cljs.core.async/t23124";
cljs.core.async.t23124.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23124");
});
cljs.core.async.t23124.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23126){var self__ = this;
var _23126__$1 = this;return self__.meta23125;
});
cljs.core.async.t23124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23126,meta23125__$1){var self__ = this;
var _23126__$1 = this;return (new cljs.core.async.t23124(self__.cb,self__.flag,self__.alt_handler,meta23125__$1));
});
cljs.core.async.__GT_t23124 = (function __GT_t23124(cb__$1,flag__$1,alt_handler__$1,meta23125){return (new cljs.core.async.t23124(cb__$1,flag__$1,alt_handler__$1,meta23125));
});
}
return (new cljs.core.async.t23124(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23127_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23127_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23127_SHARP_,port], null)));
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
var G__23128 = (i + 1);
i = G__23128;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$190))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$190], null));
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
var alts_BANG___delegate = function (ports,p__23129){var map__23131 = p__23129;var map__23131__$1 = ((cljs.core.seq_QMARK_(map__23131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23131):map__23131);var opts = map__23131__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23129 = null;if (arguments.length > 1) {
  p__23129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23129);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23132){
var ports = cljs.core.first(arglist__23132);
var p__23129 = cljs.core.rest(arglist__23132);
return alts_BANG___delegate(ports,p__23129);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23140 = (function (ch,f,map_LT_,meta23141){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23141 = meta23141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23140.cljs$lang$type = true;
cljs.core.async.t23140.cljs$lang$ctorStr = "cljs.core.async/t23140";
cljs.core.async.t23140.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23140");
});
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23143 = (function (fn1,_,meta23141,ch,f,map_LT_,meta23144){
this.fn1 = fn1;
this._ = _;
this.meta23141 = meta23141;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23144 = meta23144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23143.cljs$lang$type = true;
cljs.core.async.t23143.cljs$lang$ctorStr = "cljs.core.async/t23143";
cljs.core.async.t23143.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23143");
});
cljs.core.async.t23143.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23143.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23133_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23133_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23133_SHARP_) : self__.f.call(null,p1__23133_SHARP_)))) : f1.call(null,(((p1__23133_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23133_SHARP_) : self__.f.call(null,p1__23133_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23145){var self__ = this;
var _23145__$1 = this;return self__.meta23144;
});
cljs.core.async.t23143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23145,meta23144__$1){var self__ = this;
var _23145__$1 = this;return (new cljs.core.async.t23143(self__.fn1,self__._,self__.meta23141,self__.ch,self__.f,self__.map_LT_,meta23144__$1));
});
cljs.core.async.__GT_t23143 = (function __GT_t23143(fn1__$1,___$2,meta23141__$1,ch__$2,f__$2,map_LT___$2,meta23144){return (new cljs.core.async.t23143(fn1__$1,___$2,meta23141__$1,ch__$2,f__$2,map_LT___$2,meta23144));
});
}
return (new cljs.core.async.t23143(fn1,___$1,self__.meta23141,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23142){var self__ = this;
var _23142__$1 = this;return self__.meta23141;
});
cljs.core.async.t23140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23142,meta23141__$1){var self__ = this;
var _23142__$1 = this;return (new cljs.core.async.t23140(self__.ch,self__.f,self__.map_LT_,meta23141__$1));
});
cljs.core.async.__GT_t23140 = (function __GT_t23140(ch__$1,f__$1,map_LT___$1,meta23141){return (new cljs.core.async.t23140(ch__$1,f__$1,map_LT___$1,meta23141));
});
}
return (new cljs.core.async.t23140(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23149 = (function (ch,f,map_GT_,meta23150){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23150 = meta23150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23149.cljs$lang$type = true;
cljs.core.async.t23149.cljs$lang$ctorStr = "cljs.core.async/t23149";
cljs.core.async.t23149.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23149");
});
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23151){var self__ = this;
var _23151__$1 = this;return self__.meta23150;
});
cljs.core.async.t23149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23151,meta23150__$1){var self__ = this;
var _23151__$1 = this;return (new cljs.core.async.t23149(self__.ch,self__.f,self__.map_GT_,meta23150__$1));
});
cljs.core.async.__GT_t23149 = (function __GT_t23149(ch__$1,f__$1,map_GT___$1,meta23150){return (new cljs.core.async.t23149(ch__$1,f__$1,map_GT___$1,meta23150));
});
}
return (new cljs.core.async.t23149(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23155 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23155 = (function (ch,p,filter_GT_,meta23156){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23156 = meta23156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23155.cljs$lang$type = true;
cljs.core.async.t23155.cljs$lang$ctorStr = "cljs.core.async/t23155";
cljs.core.async.t23155.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23155");
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23157){var self__ = this;
var _23157__$1 = this;return self__.meta23156;
});
cljs.core.async.t23155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23157,meta23156__$1){var self__ = this;
var _23157__$1 = this;return (new cljs.core.async.t23155(self__.ch,self__.p,self__.filter_GT_,meta23156__$1));
});
cljs.core.async.__GT_t23155 = (function __GT_t23155(ch__$1,p__$1,filter_GT___$1,meta23156){return (new cljs.core.async.t23155(ch__$1,p__$1,filter_GT___$1,meta23156));
});
}
return (new cljs.core.async.t23155(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23219){var state_val_23220 = (state_23219[1]);if((state_val_23220 === 1))
{var state_23219__$1 = state_23219;var statearr_23221_23241 = state_23219__$1;(statearr_23221_23241[2] = null);
(statearr_23221_23241[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 2))
{var state_23219__$1 = state_23219;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23219__$1,4,ch);
} else
{if((state_val_23220 === 3))
{var inst_23217 = (state_23219[2]);var state_23219__$1 = state_23219;return cljs.core.async.impl.ioc_helpers.return_chan(state_23219__$1,inst_23217);
} else
{if((state_val_23220 === 4))
{var inst_23201 = (state_23219[7]);var inst_23201__$1 = (state_23219[2]);var inst_23202 = (inst_23201__$1 == null);var state_23219__$1 = (function (){var statearr_23222 = state_23219;(statearr_23222[7] = inst_23201__$1);
return statearr_23222;
})();if(cljs.core.truth_(inst_23202))
{var statearr_23223_23242 = state_23219__$1;(statearr_23223_23242[1] = 5);
} else
{var statearr_23224_23243 = state_23219__$1;(statearr_23224_23243[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 5))
{var inst_23204 = cljs.core.async.close_BANG_(out);var state_23219__$1 = state_23219;var statearr_23225_23244 = state_23219__$1;(statearr_23225_23244[2] = inst_23204);
(statearr_23225_23244[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 6))
{var inst_23201 = (state_23219[7]);var inst_23206 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23201) : p.call(null,inst_23201));var state_23219__$1 = state_23219;if(cljs.core.truth_(inst_23206))
{var statearr_23226_23245 = state_23219__$1;(statearr_23226_23245[1] = 8);
} else
{var statearr_23227_23246 = state_23219__$1;(statearr_23227_23246[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 7))
{var inst_23215 = (state_23219[2]);var state_23219__$1 = state_23219;var statearr_23228_23247 = state_23219__$1;(statearr_23228_23247[2] = inst_23215);
(statearr_23228_23247[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 8))
{var inst_23201 = (state_23219[7]);var state_23219__$1 = state_23219;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23219__$1,11,out,inst_23201);
} else
{if((state_val_23220 === 9))
{var state_23219__$1 = state_23219;var statearr_23229_23248 = state_23219__$1;(statearr_23229_23248[2] = null);
(statearr_23229_23248[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 10))
{var inst_23212 = (state_23219[2]);var state_23219__$1 = (function (){var statearr_23230 = state_23219;(statearr_23230[8] = inst_23212);
return statearr_23230;
})();var statearr_23231_23249 = state_23219__$1;(statearr_23231_23249[2] = null);
(statearr_23231_23249[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23220 === 11))
{var inst_23209 = (state_23219[2]);var state_23219__$1 = state_23219;var statearr_23232_23250 = state_23219__$1;(statearr_23232_23250[2] = inst_23209);
(statearr_23232_23250[1] = 10);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23236 = [null,null,null,null,null,null,null,null,null];(statearr_23236[0] = state_machine__5507__auto__);
(statearr_23236[1] = 1);
return statearr_23236;
});
var state_machine__5507__auto____1 = (function (state_23219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23219);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object))
{var ex__5510__auto__ = e23237;var statearr_23238_23251 = state_23219;(statearr_23238_23251[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23219);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23252 = state_23219;
state_23219 = G__23252;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23239 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23240);
return statearr_23239;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23404){var state_val_23405 = (state_23404[1]);if((state_val_23405 === 1))
{var state_23404__$1 = state_23404;var statearr_23406_23443 = state_23404__$1;(statearr_23406_23443[2] = null);
(statearr_23406_23443[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 2))
{var state_23404__$1 = state_23404;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23404__$1,4,in$);
} else
{if((state_val_23405 === 3))
{var inst_23402 = (state_23404[2]);var state_23404__$1 = state_23404;return cljs.core.async.impl.ioc_helpers.return_chan(state_23404__$1,inst_23402);
} else
{if((state_val_23405 === 4))
{var inst_23350 = (state_23404[7]);var inst_23350__$1 = (state_23404[2]);var inst_23351 = (inst_23350__$1 == null);var state_23404__$1 = (function (){var statearr_23407 = state_23404;(statearr_23407[7] = inst_23350__$1);
return statearr_23407;
})();if(cljs.core.truth_(inst_23351))
{var statearr_23408_23444 = state_23404__$1;(statearr_23408_23444[1] = 5);
} else
{var statearr_23409_23445 = state_23404__$1;(statearr_23409_23445[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 5))
{var inst_23353 = cljs.core.async.close_BANG_(out);var state_23404__$1 = state_23404;var statearr_23410_23446 = state_23404__$1;(statearr_23410_23446[2] = inst_23353);
(statearr_23410_23446[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 6))
{var inst_23350 = (state_23404[7]);var inst_23355 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23350) : f.call(null,inst_23350));var inst_23360 = cljs.core.seq(inst_23355);var inst_23361 = inst_23360;var inst_23362 = null;var inst_23363 = 0;var inst_23364 = 0;var state_23404__$1 = (function (){var statearr_23411 = state_23404;(statearr_23411[8] = inst_23363);
(statearr_23411[9] = inst_23364);
(statearr_23411[10] = inst_23361);
(statearr_23411[11] = inst_23362);
return statearr_23411;
})();var statearr_23412_23447 = state_23404__$1;(statearr_23412_23447[2] = null);
(statearr_23412_23447[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 7))
{var inst_23400 = (state_23404[2]);var state_23404__$1 = state_23404;var statearr_23413_23448 = state_23404__$1;(statearr_23413_23448[2] = inst_23400);
(statearr_23413_23448[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 8))
{var inst_23363 = (state_23404[8]);var inst_23364 = (state_23404[9]);var inst_23366 = (inst_23364 < inst_23363);var inst_23367 = inst_23366;var state_23404__$1 = state_23404;if(cljs.core.truth_(inst_23367))
{var statearr_23414_23449 = state_23404__$1;(statearr_23414_23449[1] = 10);
} else
{var statearr_23415_23450 = state_23404__$1;(statearr_23415_23450[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 9))
{var inst_23397 = (state_23404[2]);var state_23404__$1 = (function (){var statearr_23416 = state_23404;(statearr_23416[12] = inst_23397);
return statearr_23416;
})();var statearr_23417_23451 = state_23404__$1;(statearr_23417_23451[2] = null);
(statearr_23417_23451[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 10))
{var inst_23364 = (state_23404[9]);var inst_23362 = (state_23404[11]);var inst_23369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23362,inst_23364);var state_23404__$1 = state_23404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23404__$1,13,out,inst_23369);
} else
{if((state_val_23405 === 11))
{var inst_23361 = (state_23404[10]);var inst_23375 = (state_23404[13]);var inst_23375__$1 = cljs.core.seq(inst_23361);var state_23404__$1 = (function (){var statearr_23421 = state_23404;(statearr_23421[13] = inst_23375__$1);
return statearr_23421;
})();if(inst_23375__$1)
{var statearr_23422_23452 = state_23404__$1;(statearr_23422_23452[1] = 14);
} else
{var statearr_23423_23453 = state_23404__$1;(statearr_23423_23453[1] = 15);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 12))
{var inst_23395 = (state_23404[2]);var state_23404__$1 = state_23404;var statearr_23424_23454 = state_23404__$1;(statearr_23424_23454[2] = inst_23395);
(statearr_23424_23454[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 13))
{var inst_23363 = (state_23404[8]);var inst_23364 = (state_23404[9]);var inst_23361 = (state_23404[10]);var inst_23362 = (state_23404[11]);var inst_23371 = (state_23404[2]);var inst_23372 = (inst_23364 + 1);var tmp23418 = inst_23363;var tmp23419 = inst_23361;var tmp23420 = inst_23362;var inst_23361__$1 = tmp23419;var inst_23362__$1 = tmp23420;var inst_23363__$1 = tmp23418;var inst_23364__$1 = inst_23372;var state_23404__$1 = (function (){var statearr_23425 = state_23404;(statearr_23425[8] = inst_23363__$1);
(statearr_23425[9] = inst_23364__$1);
(statearr_23425[10] = inst_23361__$1);
(statearr_23425[11] = inst_23362__$1);
(statearr_23425[14] = inst_23371);
return statearr_23425;
})();var statearr_23426_23455 = state_23404__$1;(statearr_23426_23455[2] = null);
(statearr_23426_23455[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 14))
{var inst_23375 = (state_23404[13]);var inst_23377 = cljs.core.chunked_seq_QMARK_(inst_23375);var state_23404__$1 = state_23404;if(inst_23377)
{var statearr_23427_23456 = state_23404__$1;(statearr_23427_23456[1] = 17);
} else
{var statearr_23428_23457 = state_23404__$1;(statearr_23428_23457[1] = 18);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 15))
{var state_23404__$1 = state_23404;var statearr_23429_23458 = state_23404__$1;(statearr_23429_23458[2] = null);
(statearr_23429_23458[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 16))
{var inst_23393 = (state_23404[2]);var state_23404__$1 = state_23404;var statearr_23430_23459 = state_23404__$1;(statearr_23430_23459[2] = inst_23393);
(statearr_23430_23459[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 17))
{var inst_23375 = (state_23404[13]);var inst_23379 = cljs.core.chunk_first(inst_23375);var inst_23380 = cljs.core.chunk_rest(inst_23375);var inst_23381 = cljs.core.count(inst_23379);var inst_23361 = inst_23380;var inst_23362 = inst_23379;var inst_23363 = inst_23381;var inst_23364 = 0;var state_23404__$1 = (function (){var statearr_23431 = state_23404;(statearr_23431[8] = inst_23363);
(statearr_23431[9] = inst_23364);
(statearr_23431[10] = inst_23361);
(statearr_23431[11] = inst_23362);
return statearr_23431;
})();var statearr_23432_23460 = state_23404__$1;(statearr_23432_23460[2] = null);
(statearr_23432_23460[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 18))
{var inst_23375 = (state_23404[13]);var inst_23384 = cljs.core.first(inst_23375);var state_23404__$1 = state_23404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23404__$1,20,out,inst_23384);
} else
{if((state_val_23405 === 19))
{var inst_23390 = (state_23404[2]);var state_23404__$1 = state_23404;var statearr_23433_23461 = state_23404__$1;(statearr_23433_23461[2] = inst_23390);
(statearr_23433_23461[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23405 === 20))
{var inst_23375 = (state_23404[13]);var inst_23386 = (state_23404[2]);var inst_23387 = cljs.core.next(inst_23375);var inst_23361 = inst_23387;var inst_23362 = null;var inst_23363 = 0;var inst_23364 = 0;var state_23404__$1 = (function (){var statearr_23434 = state_23404;(statearr_23434[8] = inst_23363);
(statearr_23434[9] = inst_23364);
(statearr_23434[10] = inst_23361);
(statearr_23434[11] = inst_23362);
(statearr_23434[15] = inst_23386);
return statearr_23434;
})();var statearr_23435_23462 = state_23404__$1;(statearr_23435_23462[2] = null);
(statearr_23435_23462[1] = 8);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23439[0] = state_machine__5507__auto__);
(statearr_23439[1] = 1);
return statearr_23439;
});
var state_machine__5507__auto____1 = (function (state_23404){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23404);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23440){if((e23440 instanceof Object))
{var ex__5510__auto__ = e23440;var statearr_23441_23463 = state_23404;(statearr_23441_23463[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23404);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23464 = state_23404;
state_23404 = G__23464;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23404){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23442 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23442;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23524){var state_val_23525 = (state_23524[1]);if((state_val_23525 === 1))
{var state_23524__$1 = state_23524;var statearr_23526_23546 = state_23524__$1;(statearr_23526_23546[2] = null);
(statearr_23526_23546[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 2))
{var state_23524__$1 = state_23524;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23524__$1,4,from);
} else
{if((state_val_23525 === 3))
{var inst_23522 = (state_23524[2]);var state_23524__$1 = state_23524;return cljs.core.async.impl.ioc_helpers.return_chan(state_23524__$1,inst_23522);
} else
{if((state_val_23525 === 4))
{var inst_23507 = (state_23524[7]);var inst_23507__$1 = (state_23524[2]);var inst_23508 = (inst_23507__$1 == null);var state_23524__$1 = (function (){var statearr_23527 = state_23524;(statearr_23527[7] = inst_23507__$1);
return statearr_23527;
})();if(cljs.core.truth_(inst_23508))
{var statearr_23528_23547 = state_23524__$1;(statearr_23528_23547[1] = 5);
} else
{var statearr_23529_23548 = state_23524__$1;(statearr_23529_23548[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 5))
{var state_23524__$1 = state_23524;if(cljs.core.truth_(close_QMARK_))
{var statearr_23530_23549 = state_23524__$1;(statearr_23530_23549[1] = 8);
} else
{var statearr_23531_23550 = state_23524__$1;(statearr_23531_23550[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 6))
{var inst_23507 = (state_23524[7]);var state_23524__$1 = state_23524;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23524__$1,11,to,inst_23507);
} else
{if((state_val_23525 === 7))
{var inst_23520 = (state_23524[2]);var state_23524__$1 = state_23524;var statearr_23532_23551 = state_23524__$1;(statearr_23532_23551[2] = inst_23520);
(statearr_23532_23551[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 8))
{var inst_23511 = cljs.core.async.close_BANG_(to);var state_23524__$1 = state_23524;var statearr_23533_23552 = state_23524__$1;(statearr_23533_23552[2] = inst_23511);
(statearr_23533_23552[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 9))
{var state_23524__$1 = state_23524;var statearr_23534_23553 = state_23524__$1;(statearr_23534_23553[2] = null);
(statearr_23534_23553[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 10))
{var inst_23514 = (state_23524[2]);var state_23524__$1 = state_23524;var statearr_23535_23554 = state_23524__$1;(statearr_23535_23554[2] = inst_23514);
(statearr_23535_23554[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23525 === 11))
{var inst_23517 = (state_23524[2]);var state_23524__$1 = (function (){var statearr_23536 = state_23524;(statearr_23536[8] = inst_23517);
return statearr_23536;
})();var statearr_23537_23555 = state_23524__$1;(statearr_23537_23555[2] = null);
(statearr_23537_23555[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23541 = [null,null,null,null,null,null,null,null,null];(statearr_23541[0] = state_machine__5507__auto__);
(statearr_23541[1] = 1);
return statearr_23541;
});
var state_machine__5507__auto____1 = (function (state_23524){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23524);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23542){if((e23542 instanceof Object))
{var ex__5510__auto__ = e23542;var statearr_23543_23556 = state_23524;(statearr_23543_23556[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23524);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23557 = state_23524;
state_23524 = G__23557;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23524){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23544 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23545);
return statearr_23544;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23622){var state_val_23623 = (state_23622[1]);if((state_val_23623 === 1))
{var state_23622__$1 = state_23622;var statearr_23624_23645 = state_23622__$1;(statearr_23624_23645[2] = null);
(statearr_23624_23645[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 2))
{var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23622__$1,4,ch);
} else
{if((state_val_23623 === 3))
{var inst_23620 = (state_23622[2]);var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.return_chan(state_23622__$1,inst_23620);
} else
{if((state_val_23623 === 4))
{var inst_23603 = (state_23622[7]);var inst_23603__$1 = (state_23622[2]);var inst_23604 = (inst_23603__$1 == null);var state_23622__$1 = (function (){var statearr_23625 = state_23622;(statearr_23625[7] = inst_23603__$1);
return statearr_23625;
})();if(cljs.core.truth_(inst_23604))
{var statearr_23626_23646 = state_23622__$1;(statearr_23626_23646[1] = 5);
} else
{var statearr_23627_23647 = state_23622__$1;(statearr_23627_23647[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 5))
{var inst_23606 = cljs.core.async.close_BANG_(tc);var inst_23607 = cljs.core.async.close_BANG_(fc);var state_23622__$1 = (function (){var statearr_23628 = state_23622;(statearr_23628[8] = inst_23606);
return statearr_23628;
})();var statearr_23629_23648 = state_23622__$1;(statearr_23629_23648[2] = inst_23607);
(statearr_23629_23648[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 6))
{var inst_23603 = (state_23622[7]);var inst_23609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23603) : p.call(null,inst_23603));var state_23622__$1 = state_23622;if(cljs.core.truth_(inst_23609))
{var statearr_23630_23649 = state_23622__$1;(statearr_23630_23649[1] = 9);
} else
{var statearr_23631_23650 = state_23622__$1;(statearr_23631_23650[1] = 10);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 7))
{var inst_23618 = (state_23622[2]);var state_23622__$1 = state_23622;var statearr_23632_23651 = state_23622__$1;(statearr_23632_23651[2] = inst_23618);
(statearr_23632_23651[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 8))
{var inst_23615 = (state_23622[2]);var state_23622__$1 = (function (){var statearr_23633 = state_23622;(statearr_23633[9] = inst_23615);
return statearr_23633;
})();var statearr_23634_23652 = state_23622__$1;(statearr_23634_23652[2] = null);
(statearr_23634_23652[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 9))
{var state_23622__$1 = state_23622;var statearr_23635_23653 = state_23622__$1;(statearr_23635_23653[2] = tc);
(statearr_23635_23653[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 10))
{var state_23622__$1 = state_23622;var statearr_23636_23654 = state_23622__$1;(statearr_23636_23654[2] = fc);
(statearr_23636_23654[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23623 === 11))
{var inst_23603 = (state_23622[7]);var inst_23613 = (state_23622[2]);var state_23622__$1 = state_23622;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23622__$1,8,inst_23613,inst_23603);
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
var state_machine__5507__auto____0 = (function (){var statearr_23640 = [null,null,null,null,null,null,null,null,null,null];(statearr_23640[0] = state_machine__5507__auto__);
(statearr_23640[1] = 1);
return statearr_23640;
});
var state_machine__5507__auto____1 = (function (state_23622){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23622);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23641){if((e23641 instanceof Object))
{var ex__5510__auto__ = e23641;var statearr_23642_23655 = state_23622;(statearr_23642_23655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23622);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23656 = state_23622;
state_23622 = G__23656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23622){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23643 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23644);
return statearr_23643;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23703){var state_val_23704 = (state_23703[1]);if((state_val_23704 === 7))
{var inst_23699 = (state_23703[2]);var state_23703__$1 = state_23703;var statearr_23705_23721 = state_23703__$1;(statearr_23705_23721[2] = inst_23699);
(statearr_23705_23721[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23704 === 6))
{var inst_23692 = (state_23703[7]);var inst_23689 = (state_23703[8]);var inst_23696 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23689,inst_23692) : f.call(null,inst_23689,inst_23692));var inst_23689__$1 = inst_23696;var state_23703__$1 = (function (){var statearr_23706 = state_23703;(statearr_23706[8] = inst_23689__$1);
return statearr_23706;
})();var statearr_23707_23722 = state_23703__$1;(statearr_23707_23722[2] = null);
(statearr_23707_23722[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23704 === 5))
{var inst_23689 = (state_23703[8]);var state_23703__$1 = state_23703;var statearr_23708_23723 = state_23703__$1;(statearr_23708_23723[2] = inst_23689);
(statearr_23708_23723[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23704 === 4))
{var inst_23692 = (state_23703[7]);var inst_23692__$1 = (state_23703[2]);var inst_23693 = (inst_23692__$1 == null);var state_23703__$1 = (function (){var statearr_23709 = state_23703;(statearr_23709[7] = inst_23692__$1);
return statearr_23709;
})();if(cljs.core.truth_(inst_23693))
{var statearr_23710_23724 = state_23703__$1;(statearr_23710_23724[1] = 5);
} else
{var statearr_23711_23725 = state_23703__$1;(statearr_23711_23725[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23704 === 3))
{var inst_23701 = (state_23703[2]);var state_23703__$1 = state_23703;return cljs.core.async.impl.ioc_helpers.return_chan(state_23703__$1,inst_23701);
} else
{if((state_val_23704 === 2))
{var state_23703__$1 = state_23703;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23703__$1,4,ch);
} else
{if((state_val_23704 === 1))
{var inst_23689 = init;var state_23703__$1 = (function (){var statearr_23712 = state_23703;(statearr_23712[8] = inst_23689);
return statearr_23712;
})();var statearr_23713_23726 = state_23703__$1;(statearr_23713_23726[2] = null);
(statearr_23713_23726[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23717 = [null,null,null,null,null,null,null,null,null];(statearr_23717[0] = state_machine__5507__auto__);
(statearr_23717[1] = 1);
return statearr_23717;
});
var state_machine__5507__auto____1 = (function (state_23703){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23703);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23718){if((e23718 instanceof Object))
{var ex__5510__auto__ = e23718;var statearr_23719_23727 = state_23703;(statearr_23719_23727[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23703);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23728 = state_23703;
state_23703 = G__23728;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23703){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23720 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23720;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23790){var state_val_23791 = (state_23790[1]);if((state_val_23791 === 1))
{var inst_23770 = cljs.core.seq(coll);var inst_23771 = inst_23770;var state_23790__$1 = (function (){var statearr_23792 = state_23790;(statearr_23792[7] = inst_23771);
return statearr_23792;
})();var statearr_23793_23811 = state_23790__$1;(statearr_23793_23811[2] = null);
(statearr_23793_23811[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 2))
{var inst_23771 = (state_23790[7]);var state_23790__$1 = state_23790;if(cljs.core.truth_(inst_23771))
{var statearr_23794_23812 = state_23790__$1;(statearr_23794_23812[1] = 4);
} else
{var statearr_23795_23813 = state_23790__$1;(statearr_23795_23813[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 3))
{var inst_23788 = (state_23790[2]);var state_23790__$1 = state_23790;return cljs.core.async.impl.ioc_helpers.return_chan(state_23790__$1,inst_23788);
} else
{if((state_val_23791 === 4))
{var inst_23771 = (state_23790[7]);var inst_23774 = cljs.core.first(inst_23771);var state_23790__$1 = state_23790;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23790__$1,7,ch,inst_23774);
} else
{if((state_val_23791 === 5))
{var state_23790__$1 = state_23790;if(cljs.core.truth_(close_QMARK_))
{var statearr_23796_23814 = state_23790__$1;(statearr_23796_23814[1] = 8);
} else
{var statearr_23797_23815 = state_23790__$1;(statearr_23797_23815[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 6))
{var inst_23786 = (state_23790[2]);var state_23790__$1 = state_23790;var statearr_23798_23816 = state_23790__$1;(statearr_23798_23816[2] = inst_23786);
(statearr_23798_23816[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 7))
{var inst_23771 = (state_23790[7]);var inst_23776 = (state_23790[2]);var inst_23777 = cljs.core.next(inst_23771);var inst_23771__$1 = inst_23777;var state_23790__$1 = (function (){var statearr_23799 = state_23790;(statearr_23799[7] = inst_23771__$1);
(statearr_23799[8] = inst_23776);
return statearr_23799;
})();var statearr_23800_23817 = state_23790__$1;(statearr_23800_23817[2] = null);
(statearr_23800_23817[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 8))
{var inst_23781 = cljs.core.async.close_BANG_(ch);var state_23790__$1 = state_23790;var statearr_23801_23818 = state_23790__$1;(statearr_23801_23818[2] = inst_23781);
(statearr_23801_23818[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 9))
{var state_23790__$1 = state_23790;var statearr_23802_23819 = state_23790__$1;(statearr_23802_23819[2] = null);
(statearr_23802_23819[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_23791 === 10))
{var inst_23784 = (state_23790[2]);var state_23790__$1 = state_23790;var statearr_23803_23820 = state_23790__$1;(statearr_23803_23820[2] = inst_23784);
(statearr_23803_23820[1] = 6);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_23807 = [null,null,null,null,null,null,null,null,null];(statearr_23807[0] = state_machine__5507__auto__);
(statearr_23807[1] = 1);
return statearr_23807;
});
var state_machine__5507__auto____1 = (function (state_23790){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23790);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23808){if((e23808 instanceof Object))
{var ex__5510__auto__ = e23808;var statearr_23809_23821 = state_23790;(statearr_23809_23821[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23790);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e23808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__23822 = state_23790;
state_23790 = G__23822;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23790){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23810 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23810;
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
cljs.core.async.Mux = (function (){var obj23824 = {};return obj23824;
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
cljs.core.async.Mult = (function (){var obj23826 = {};return obj23826;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24050 = (function (cs,ch,mult,meta24051){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24051 = meta24051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24050.cljs$lang$type = true;
cljs.core.async.t24050.cljs$lang$ctorStr = "cljs.core.async/t24050";
cljs.core.async.t24050.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24050");
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24050.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24052){var self__ = this;
var _24052__$1 = this;return self__.meta24051;
});})(cs))
;
cljs.core.async.t24050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24052,meta24051__$1){var self__ = this;
var _24052__$1 = this;return (new cljs.core.async.t24050(self__.cs,self__.ch,self__.mult,meta24051__$1));
});})(cs))
;
cljs.core.async.__GT_t24050 = ((function (cs){
return (function __GT_t24050(cs__$1,ch__$1,mult__$1,meta24051){return (new cljs.core.async.t24050(cs__$1,ch__$1,mult__$1,meta24051));
});})(cs))
;
}
return (new cljs.core.async.t24050(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24187){var state_val_24188 = (state_24187[1]);if((state_val_24188 === 32))
{var inst_24131 = (state_24187[7]);var inst_24055 = (state_24187[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24187,31,Object,null,30);var inst_24138 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24131,inst_24055,done);var state_24187__$1 = state_24187;var statearr_24189_24274 = state_24187__$1;(statearr_24189_24274[2] = inst_24138);
cljs.core.async.impl.ioc_helpers.process_exception(state_24187__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 1))
{var state_24187__$1 = state_24187;var statearr_24190_24275 = state_24187__$1;(statearr_24190_24275[2] = null);
(statearr_24190_24275[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 33))
{var inst_24144 = (state_24187[9]);var inst_24146 = cljs.core.chunked_seq_QMARK_(inst_24144);var state_24187__$1 = state_24187;if(inst_24146)
{var statearr_24191_24276 = state_24187__$1;(statearr_24191_24276[1] = 36);
} else
{var statearr_24192_24277 = state_24187__$1;(statearr_24192_24277[1] = 37);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 2))
{var state_24187__$1 = state_24187;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24187__$1,4,ch);
} else
{if((state_val_24188 === 34))
{var state_24187__$1 = state_24187;var statearr_24193_24278 = state_24187__$1;(statearr_24193_24278[2] = null);
(statearr_24193_24278[1] = 35);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 3))
{var inst_24185 = (state_24187[2]);var state_24187__$1 = state_24187;return cljs.core.async.impl.ioc_helpers.return_chan(state_24187__$1,inst_24185);
} else
{if((state_val_24188 === 35))
{var inst_24169 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24194_24279 = state_24187__$1;(statearr_24194_24279[2] = inst_24169);
(statearr_24194_24279[1] = 29);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 4))
{var inst_24055 = (state_24187[8]);var inst_24055__$1 = (state_24187[2]);var inst_24056 = (inst_24055__$1 == null);var state_24187__$1 = (function (){var statearr_24195 = state_24187;(statearr_24195[8] = inst_24055__$1);
return statearr_24195;
})();if(cljs.core.truth_(inst_24056))
{var statearr_24196_24280 = state_24187__$1;(statearr_24196_24280[1] = 5);
} else
{var statearr_24197_24281 = state_24187__$1;(statearr_24197_24281[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 36))
{var inst_24144 = (state_24187[9]);var inst_24148 = cljs.core.chunk_first(inst_24144);var inst_24149 = cljs.core.chunk_rest(inst_24144);var inst_24150 = cljs.core.count(inst_24148);var inst_24123 = inst_24149;var inst_24124 = inst_24148;var inst_24125 = inst_24150;var inst_24126 = 0;var state_24187__$1 = (function (){var statearr_24198 = state_24187;(statearr_24198[10] = inst_24123);
(statearr_24198[11] = inst_24126);
(statearr_24198[12] = inst_24125);
(statearr_24198[13] = inst_24124);
return statearr_24198;
})();var statearr_24199_24282 = state_24187__$1;(statearr_24199_24282[2] = null);
(statearr_24199_24282[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 5))
{var inst_24062 = cljs.core.deref(cs);var inst_24063 = cljs.core.seq(inst_24062);var inst_24064 = inst_24063;var inst_24065 = null;var inst_24066 = 0;var inst_24067 = 0;var state_24187__$1 = (function (){var statearr_24200 = state_24187;(statearr_24200[14] = inst_24067);
(statearr_24200[15] = inst_24065);
(statearr_24200[16] = inst_24066);
(statearr_24200[17] = inst_24064);
return statearr_24200;
})();var statearr_24201_24283 = state_24187__$1;(statearr_24201_24283[2] = null);
(statearr_24201_24283[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 37))
{var inst_24144 = (state_24187[9]);var inst_24153 = cljs.core.first(inst_24144);var state_24187__$1 = (function (){var statearr_24202 = state_24187;(statearr_24202[18] = inst_24153);
return statearr_24202;
})();var statearr_24203_24284 = state_24187__$1;(statearr_24203_24284[2] = null);
(statearr_24203_24284[1] = 41);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 6))
{var inst_24115 = (state_24187[19]);var inst_24114 = cljs.core.deref(cs);var inst_24115__$1 = cljs.core.keys(inst_24114);var inst_24116 = cljs.core.count(inst_24115__$1);var inst_24117 = cljs.core.reset_BANG_(dctr,inst_24116);var inst_24122 = cljs.core.seq(inst_24115__$1);var inst_24123 = inst_24122;var inst_24124 = null;var inst_24125 = 0;var inst_24126 = 0;var state_24187__$1 = (function (){var statearr_24204 = state_24187;(statearr_24204[10] = inst_24123);
(statearr_24204[20] = inst_24117);
(statearr_24204[11] = inst_24126);
(statearr_24204[12] = inst_24125);
(statearr_24204[13] = inst_24124);
(statearr_24204[19] = inst_24115__$1);
return statearr_24204;
})();var statearr_24205_24285 = state_24187__$1;(statearr_24205_24285[2] = null);
(statearr_24205_24285[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 38))
{var inst_24166 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24206_24286 = state_24187__$1;(statearr_24206_24286[2] = inst_24166);
(statearr_24206_24286[1] = 35);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 7))
{var inst_24183 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24207_24287 = state_24187__$1;(statearr_24207_24287[2] = inst_24183);
(statearr_24207_24287[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 39))
{var inst_24144 = (state_24187[9]);var inst_24162 = (state_24187[2]);var inst_24163 = cljs.core.next(inst_24144);var inst_24123 = inst_24163;var inst_24124 = null;var inst_24125 = 0;var inst_24126 = 0;var state_24187__$1 = (function (){var statearr_24208 = state_24187;(statearr_24208[10] = inst_24123);
(statearr_24208[21] = inst_24162);
(statearr_24208[11] = inst_24126);
(statearr_24208[12] = inst_24125);
(statearr_24208[13] = inst_24124);
return statearr_24208;
})();var statearr_24209_24288 = state_24187__$1;(statearr_24209_24288[2] = null);
(statearr_24209_24288[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 8))
{var inst_24067 = (state_24187[14]);var inst_24066 = (state_24187[16]);var inst_24069 = (inst_24067 < inst_24066);var inst_24070 = inst_24069;var state_24187__$1 = state_24187;if(cljs.core.truth_(inst_24070))
{var statearr_24210_24289 = state_24187__$1;(statearr_24210_24289[1] = 10);
} else
{var statearr_24211_24290 = state_24187__$1;(statearr_24211_24290[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 40))
{var inst_24153 = (state_24187[18]);var inst_24154 = (state_24187[2]);var inst_24155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24156 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24153);var state_24187__$1 = (function (){var statearr_24212 = state_24187;(statearr_24212[22] = inst_24155);
(statearr_24212[23] = inst_24154);
return statearr_24212;
})();var statearr_24213_24291 = state_24187__$1;(statearr_24213_24291[2] = inst_24156);
cljs.core.async.impl.ioc_helpers.process_exception(state_24187__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 9))
{var inst_24112 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24214_24292 = state_24187__$1;(statearr_24214_24292[2] = inst_24112);
(statearr_24214_24292[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 41))
{var inst_24055 = (state_24187[8]);var inst_24153 = (state_24187[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24187,40,Object,null,39);var inst_24160 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24153,inst_24055,done);var state_24187__$1 = state_24187;var statearr_24215_24293 = state_24187__$1;(statearr_24215_24293[2] = inst_24160);
cljs.core.async.impl.ioc_helpers.process_exception(state_24187__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 10))
{var inst_24067 = (state_24187[14]);var inst_24065 = (state_24187[15]);var inst_24073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24065,inst_24067);var inst_24074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24073,0,null);var inst_24075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24073,1,null);var state_24187__$1 = (function (){var statearr_24216 = state_24187;(statearr_24216[24] = inst_24074);
return statearr_24216;
})();if(cljs.core.truth_(inst_24075))
{var statearr_24217_24294 = state_24187__$1;(statearr_24217_24294[1] = 13);
} else
{var statearr_24218_24295 = state_24187__$1;(statearr_24218_24295[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 42))
{var state_24187__$1 = state_24187;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24187__$1,45,dchan);
} else
{if((state_val_24188 === 11))
{var inst_24084 = (state_24187[25]);var inst_24064 = (state_24187[17]);var inst_24084__$1 = cljs.core.seq(inst_24064);var state_24187__$1 = (function (){var statearr_24219 = state_24187;(statearr_24219[25] = inst_24084__$1);
return statearr_24219;
})();if(inst_24084__$1)
{var statearr_24220_24296 = state_24187__$1;(statearr_24220_24296[1] = 16);
} else
{var statearr_24221_24297 = state_24187__$1;(statearr_24221_24297[1] = 17);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 43))
{var state_24187__$1 = state_24187;var statearr_24222_24298 = state_24187__$1;(statearr_24222_24298[2] = null);
(statearr_24222_24298[1] = 44);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 12))
{var inst_24110 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24223_24299 = state_24187__$1;(statearr_24223_24299[2] = inst_24110);
(statearr_24223_24299[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 44))
{var inst_24180 = (state_24187[2]);var state_24187__$1 = (function (){var statearr_24224 = state_24187;(statearr_24224[26] = inst_24180);
return statearr_24224;
})();var statearr_24225_24300 = state_24187__$1;(statearr_24225_24300[2] = null);
(statearr_24225_24300[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 13))
{var inst_24074 = (state_24187[24]);var inst_24077 = cljs.core.async.close_BANG_(inst_24074);var state_24187__$1 = state_24187;var statearr_24226_24301 = state_24187__$1;(statearr_24226_24301[2] = inst_24077);
(statearr_24226_24301[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 45))
{var inst_24177 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24230_24302 = state_24187__$1;(statearr_24230_24302[2] = inst_24177);
(statearr_24230_24302[1] = 44);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 14))
{var state_24187__$1 = state_24187;var statearr_24231_24303 = state_24187__$1;(statearr_24231_24303[2] = null);
(statearr_24231_24303[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 15))
{var inst_24067 = (state_24187[14]);var inst_24065 = (state_24187[15]);var inst_24066 = (state_24187[16]);var inst_24064 = (state_24187[17]);var inst_24080 = (state_24187[2]);var inst_24081 = (inst_24067 + 1);var tmp24227 = inst_24065;var tmp24228 = inst_24066;var tmp24229 = inst_24064;var inst_24064__$1 = tmp24229;var inst_24065__$1 = tmp24227;var inst_24066__$1 = tmp24228;var inst_24067__$1 = inst_24081;var state_24187__$1 = (function (){var statearr_24232 = state_24187;(statearr_24232[14] = inst_24067__$1);
(statearr_24232[15] = inst_24065__$1);
(statearr_24232[16] = inst_24066__$1);
(statearr_24232[17] = inst_24064__$1);
(statearr_24232[27] = inst_24080);
return statearr_24232;
})();var statearr_24233_24304 = state_24187__$1;(statearr_24233_24304[2] = null);
(statearr_24233_24304[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 16))
{var inst_24084 = (state_24187[25]);var inst_24086 = cljs.core.chunked_seq_QMARK_(inst_24084);var state_24187__$1 = state_24187;if(inst_24086)
{var statearr_24234_24305 = state_24187__$1;(statearr_24234_24305[1] = 19);
} else
{var statearr_24235_24306 = state_24187__$1;(statearr_24235_24306[1] = 20);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 17))
{var state_24187__$1 = state_24187;var statearr_24236_24307 = state_24187__$1;(statearr_24236_24307[2] = null);
(statearr_24236_24307[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 18))
{var inst_24108 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24237_24308 = state_24187__$1;(statearr_24237_24308[2] = inst_24108);
(statearr_24237_24308[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 19))
{var inst_24084 = (state_24187[25]);var inst_24088 = cljs.core.chunk_first(inst_24084);var inst_24089 = cljs.core.chunk_rest(inst_24084);var inst_24090 = cljs.core.count(inst_24088);var inst_24064 = inst_24089;var inst_24065 = inst_24088;var inst_24066 = inst_24090;var inst_24067 = 0;var state_24187__$1 = (function (){var statearr_24238 = state_24187;(statearr_24238[14] = inst_24067);
(statearr_24238[15] = inst_24065);
(statearr_24238[16] = inst_24066);
(statearr_24238[17] = inst_24064);
return statearr_24238;
})();var statearr_24239_24309 = state_24187__$1;(statearr_24239_24309[2] = null);
(statearr_24239_24309[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 20))
{var inst_24084 = (state_24187[25]);var inst_24094 = cljs.core.first(inst_24084);var inst_24095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24094,0,null);var inst_24096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24094,1,null);var state_24187__$1 = (function (){var statearr_24240 = state_24187;(statearr_24240[28] = inst_24095);
return statearr_24240;
})();if(cljs.core.truth_(inst_24096))
{var statearr_24241_24310 = state_24187__$1;(statearr_24241_24310[1] = 22);
} else
{var statearr_24242_24311 = state_24187__$1;(statearr_24242_24311[1] = 23);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 21))
{var inst_24105 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24243_24312 = state_24187__$1;(statearr_24243_24312[2] = inst_24105);
(statearr_24243_24312[1] = 18);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 22))
{var inst_24095 = (state_24187[28]);var inst_24098 = cljs.core.async.close_BANG_(inst_24095);var state_24187__$1 = state_24187;var statearr_24244_24313 = state_24187__$1;(statearr_24244_24313[2] = inst_24098);
(statearr_24244_24313[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 23))
{var state_24187__$1 = state_24187;var statearr_24245_24314 = state_24187__$1;(statearr_24245_24314[2] = null);
(statearr_24245_24314[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 24))
{var inst_24084 = (state_24187[25]);var inst_24101 = (state_24187[2]);var inst_24102 = cljs.core.next(inst_24084);var inst_24064 = inst_24102;var inst_24065 = null;var inst_24066 = 0;var inst_24067 = 0;var state_24187__$1 = (function (){var statearr_24246 = state_24187;(statearr_24246[14] = inst_24067);
(statearr_24246[29] = inst_24101);
(statearr_24246[15] = inst_24065);
(statearr_24246[16] = inst_24066);
(statearr_24246[17] = inst_24064);
return statearr_24246;
})();var statearr_24247_24315 = state_24187__$1;(statearr_24247_24315[2] = null);
(statearr_24247_24315[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 25))
{var inst_24126 = (state_24187[11]);var inst_24125 = (state_24187[12]);var inst_24128 = (inst_24126 < inst_24125);var inst_24129 = inst_24128;var state_24187__$1 = state_24187;if(cljs.core.truth_(inst_24129))
{var statearr_24248_24316 = state_24187__$1;(statearr_24248_24316[1] = 27);
} else
{var statearr_24249_24317 = state_24187__$1;(statearr_24249_24317[1] = 28);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 26))
{var inst_24115 = (state_24187[19]);var inst_24173 = (state_24187[2]);var inst_24174 = cljs.core.seq(inst_24115);var state_24187__$1 = (function (){var statearr_24250 = state_24187;(statearr_24250[30] = inst_24173);
return statearr_24250;
})();if(inst_24174)
{var statearr_24251_24318 = state_24187__$1;(statearr_24251_24318[1] = 42);
} else
{var statearr_24252_24319 = state_24187__$1;(statearr_24252_24319[1] = 43);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 27))
{var inst_24126 = (state_24187[11]);var inst_24124 = (state_24187[13]);var inst_24131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24124,inst_24126);var state_24187__$1 = (function (){var statearr_24253 = state_24187;(statearr_24253[7] = inst_24131);
return statearr_24253;
})();var statearr_24254_24320 = state_24187__$1;(statearr_24254_24320[2] = null);
(statearr_24254_24320[1] = 32);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 28))
{var inst_24123 = (state_24187[10]);var inst_24144 = (state_24187[9]);var inst_24144__$1 = cljs.core.seq(inst_24123);var state_24187__$1 = (function (){var statearr_24258 = state_24187;(statearr_24258[9] = inst_24144__$1);
return statearr_24258;
})();if(inst_24144__$1)
{var statearr_24259_24321 = state_24187__$1;(statearr_24259_24321[1] = 33);
} else
{var statearr_24260_24322 = state_24187__$1;(statearr_24260_24322[1] = 34);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 29))
{var inst_24171 = (state_24187[2]);var state_24187__$1 = state_24187;var statearr_24261_24323 = state_24187__$1;(statearr_24261_24323[2] = inst_24171);
(statearr_24261_24323[1] = 26);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 30))
{var inst_24123 = (state_24187[10]);var inst_24126 = (state_24187[11]);var inst_24125 = (state_24187[12]);var inst_24124 = (state_24187[13]);var inst_24140 = (state_24187[2]);var inst_24141 = (inst_24126 + 1);var tmp24255 = inst_24123;var tmp24256 = inst_24125;var tmp24257 = inst_24124;var inst_24123__$1 = tmp24255;var inst_24124__$1 = tmp24257;var inst_24125__$1 = tmp24256;var inst_24126__$1 = inst_24141;var state_24187__$1 = (function (){var statearr_24262 = state_24187;(statearr_24262[10] = inst_24123__$1);
(statearr_24262[11] = inst_24126__$1);
(statearr_24262[12] = inst_24125__$1);
(statearr_24262[13] = inst_24124__$1);
(statearr_24262[31] = inst_24140);
return statearr_24262;
})();var statearr_24263_24324 = state_24187__$1;(statearr_24263_24324[2] = null);
(statearr_24263_24324[1] = 25);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24188 === 31))
{var inst_24131 = (state_24187[7]);var inst_24132 = (state_24187[2]);var inst_24133 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24134 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24131);var state_24187__$1 = (function (){var statearr_24264 = state_24187;(statearr_24264[32] = inst_24133);
(statearr_24264[33] = inst_24132);
return statearr_24264;
})();var statearr_24265_24325 = state_24187__$1;(statearr_24265_24325[2] = inst_24134);
cljs.core.async.impl.ioc_helpers.process_exception(state_24187__$1);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24269[0] = state_machine__5507__auto__);
(statearr_24269[1] = 1);
return statearr_24269;
});
var state_machine__5507__auto____1 = (function (state_24187){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24187);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24270){if((e24270 instanceof Object))
{var ex__5510__auto__ = e24270;var statearr_24271_24326 = state_24187;(statearr_24271_24326[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24187);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24327 = state_24187;
state_24187 = G__24327;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24187){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24272 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24273);
return statearr_24272;
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
cljs.core.async.Mix = (function (){var obj24329 = {};return obj24329;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$207,null,cljs.core.constant$keyword$208,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$209);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$208);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$209,chs);var pauses = pick(cljs.core.constant$keyword$207,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$210,solos,cljs.core.constant$keyword$211,pick(cljs.core.constant$keyword$208,chs),cljs.core.constant$keyword$212,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$207)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24439 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24440){
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
this.meta24440 = meta24440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24439.cljs$lang$type = true;
cljs.core.async.t24439.cljs$lang$ctorStr = "cljs.core.async/t24439";
cljs.core.async.t24439.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24439");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24441){var self__ = this;
var _24441__$1 = this;return self__.meta24440;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24441,meta24440__$1){var self__ = this;
var _24441__$1 = this;return (new cljs.core.async.t24439(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24440__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24439 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24439(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24440){return (new cljs.core.async.t24439(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24440));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24439(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24506){var state_val_24507 = (state_24506[1]);if((state_val_24507 === 1))
{var inst_24445 = (state_24506[7]);var inst_24445__$1 = calc_state();var inst_24446 = cljs.core.seq_QMARK_(inst_24445__$1);var state_24506__$1 = (function (){var statearr_24508 = state_24506;(statearr_24508[7] = inst_24445__$1);
return statearr_24508;
})();if(inst_24446)
{var statearr_24509_24549 = state_24506__$1;(statearr_24509_24549[1] = 2);
} else
{var statearr_24510_24550 = state_24506__$1;(statearr_24510_24550[1] = 3);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 2))
{var inst_24445 = (state_24506[7]);var inst_24448 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24445);var state_24506__$1 = state_24506;var statearr_24511_24551 = state_24506__$1;(statearr_24511_24551[2] = inst_24448);
(statearr_24511_24551[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 3))
{var inst_24445 = (state_24506[7]);var state_24506__$1 = state_24506;var statearr_24512_24552 = state_24506__$1;(statearr_24512_24552[2] = inst_24445);
(statearr_24512_24552[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 4))
{var inst_24445 = (state_24506[7]);var inst_24451 = (state_24506[2]);var inst_24452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24451,cljs.core.constant$keyword$212);var inst_24453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24451,cljs.core.constant$keyword$211);var inst_24454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24451,cljs.core.constant$keyword$210);var inst_24455 = inst_24445;var state_24506__$1 = (function (){var statearr_24513 = state_24506;(statearr_24513[8] = inst_24455);
(statearr_24513[9] = inst_24454);
(statearr_24513[10] = inst_24452);
(statearr_24513[11] = inst_24453);
return statearr_24513;
})();var statearr_24514_24553 = state_24506__$1;(statearr_24514_24553[2] = null);
(statearr_24514_24553[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 5))
{var inst_24455 = (state_24506[8]);var inst_24458 = cljs.core.seq_QMARK_(inst_24455);var state_24506__$1 = state_24506;if(inst_24458)
{var statearr_24515_24554 = state_24506__$1;(statearr_24515_24554[1] = 7);
} else
{var statearr_24516_24555 = state_24506__$1;(statearr_24516_24555[1] = 8);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 6))
{var inst_24504 = (state_24506[2]);var state_24506__$1 = state_24506;return cljs.core.async.impl.ioc_helpers.return_chan(state_24506__$1,inst_24504);
} else
{if((state_val_24507 === 7))
{var inst_24455 = (state_24506[8]);var inst_24460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24455);var state_24506__$1 = state_24506;var statearr_24517_24556 = state_24506__$1;(statearr_24517_24556[2] = inst_24460);
(statearr_24517_24556[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 8))
{var inst_24455 = (state_24506[8]);var state_24506__$1 = state_24506;var statearr_24518_24557 = state_24506__$1;(statearr_24518_24557[2] = inst_24455);
(statearr_24518_24557[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 9))
{var inst_24463 = (state_24506[12]);var inst_24463__$1 = (state_24506[2]);var inst_24464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24463__$1,cljs.core.constant$keyword$212);var inst_24465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24463__$1,cljs.core.constant$keyword$211);var inst_24466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24463__$1,cljs.core.constant$keyword$210);var state_24506__$1 = (function (){var statearr_24519 = state_24506;(statearr_24519[12] = inst_24463__$1);
(statearr_24519[13] = inst_24466);
(statearr_24519[14] = inst_24465);
return statearr_24519;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24506__$1,10,inst_24464);
} else
{if((state_val_24507 === 10))
{var inst_24471 = (state_24506[15]);var inst_24470 = (state_24506[16]);var inst_24469 = (state_24506[2]);var inst_24470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24469,0,null);var inst_24471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24469,1,null);var inst_24472 = (inst_24470__$1 == null);var inst_24473 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24471__$1,change);var inst_24474 = (inst_24472) || (inst_24473);var state_24506__$1 = (function (){var statearr_24520 = state_24506;(statearr_24520[15] = inst_24471__$1);
(statearr_24520[16] = inst_24470__$1);
return statearr_24520;
})();if(cljs.core.truth_(inst_24474))
{var statearr_24521_24558 = state_24506__$1;(statearr_24521_24558[1] = 11);
} else
{var statearr_24522_24559 = state_24506__$1;(statearr_24522_24559[1] = 12);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 11))
{var inst_24470 = (state_24506[16]);var inst_24476 = (inst_24470 == null);var state_24506__$1 = state_24506;if(cljs.core.truth_(inst_24476))
{var statearr_24523_24560 = state_24506__$1;(statearr_24523_24560[1] = 14);
} else
{var statearr_24524_24561 = state_24506__$1;(statearr_24524_24561[1] = 15);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 12))
{var inst_24485 = (state_24506[17]);var inst_24466 = (state_24506[13]);var inst_24471 = (state_24506[15]);var inst_24485__$1 = (inst_24466.cljs$core$IFn$_invoke$arity$1 ? inst_24466.cljs$core$IFn$_invoke$arity$1(inst_24471) : inst_24466.call(null,inst_24471));var state_24506__$1 = (function (){var statearr_24525 = state_24506;(statearr_24525[17] = inst_24485__$1);
return statearr_24525;
})();if(cljs.core.truth_(inst_24485__$1))
{var statearr_24526_24562 = state_24506__$1;(statearr_24526_24562[1] = 17);
} else
{var statearr_24527_24563 = state_24506__$1;(statearr_24527_24563[1] = 18);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 13))
{var inst_24502 = (state_24506[2]);var state_24506__$1 = state_24506;var statearr_24528_24564 = state_24506__$1;(statearr_24528_24564[2] = inst_24502);
(statearr_24528_24564[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 14))
{var inst_24471 = (state_24506[15]);var inst_24478 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24471);var state_24506__$1 = state_24506;var statearr_24529_24565 = state_24506__$1;(statearr_24529_24565[2] = inst_24478);
(statearr_24529_24565[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 15))
{var state_24506__$1 = state_24506;var statearr_24530_24566 = state_24506__$1;(statearr_24530_24566[2] = null);
(statearr_24530_24566[1] = 16);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 16))
{var inst_24481 = (state_24506[2]);var inst_24482 = calc_state();var inst_24455 = inst_24482;var state_24506__$1 = (function (){var statearr_24531 = state_24506;(statearr_24531[8] = inst_24455);
(statearr_24531[18] = inst_24481);
return statearr_24531;
})();var statearr_24532_24567 = state_24506__$1;(statearr_24532_24567[2] = null);
(statearr_24532_24567[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 17))
{var inst_24485 = (state_24506[17]);var state_24506__$1 = state_24506;var statearr_24533_24568 = state_24506__$1;(statearr_24533_24568[2] = inst_24485);
(statearr_24533_24568[1] = 19);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 18))
{var inst_24466 = (state_24506[13]);var inst_24471 = (state_24506[15]);var inst_24465 = (state_24506[14]);var inst_24488 = cljs.core.empty_QMARK_(inst_24466);var inst_24489 = (inst_24465.cljs$core$IFn$_invoke$arity$1 ? inst_24465.cljs$core$IFn$_invoke$arity$1(inst_24471) : inst_24465.call(null,inst_24471));var inst_24490 = cljs.core.not(inst_24489);var inst_24491 = (inst_24488) && (inst_24490);var state_24506__$1 = state_24506;var statearr_24534_24569 = state_24506__$1;(statearr_24534_24569[2] = inst_24491);
(statearr_24534_24569[1] = 19);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 19))
{var inst_24493 = (state_24506[2]);var state_24506__$1 = state_24506;if(cljs.core.truth_(inst_24493))
{var statearr_24535_24570 = state_24506__$1;(statearr_24535_24570[1] = 20);
} else
{var statearr_24536_24571 = state_24506__$1;(statearr_24536_24571[1] = 21);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 20))
{var inst_24470 = (state_24506[16]);var state_24506__$1 = state_24506;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24506__$1,23,out,inst_24470);
} else
{if((state_val_24507 === 21))
{var state_24506__$1 = state_24506;var statearr_24537_24572 = state_24506__$1;(statearr_24537_24572[2] = null);
(statearr_24537_24572[1] = 22);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 22))
{var inst_24463 = (state_24506[12]);var inst_24499 = (state_24506[2]);var inst_24455 = inst_24463;var state_24506__$1 = (function (){var statearr_24538 = state_24506;(statearr_24538[8] = inst_24455);
(statearr_24538[19] = inst_24499);
return statearr_24538;
})();var statearr_24539_24573 = state_24506__$1;(statearr_24539_24573[2] = null);
(statearr_24539_24573[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24507 === 23))
{var inst_24496 = (state_24506[2]);var state_24506__$1 = state_24506;var statearr_24540_24574 = state_24506__$1;(statearr_24540_24574[2] = inst_24496);
(statearr_24540_24574[1] = 22);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24544[0] = state_machine__5507__auto__);
(statearr_24544[1] = 1);
return statearr_24544;
});
var state_machine__5507__auto____1 = (function (state_24506){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24506);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24545){if((e24545 instanceof Object))
{var ex__5510__auto__ = e24545;var statearr_24546_24575 = state_24506;(statearr_24546_24575[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24506);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24576 = state_24506;
state_24506 = G__24576;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24506){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24547 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24548);
return statearr_24547;
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
cljs.core.async.Pub = (function (){var obj24578 = {};return obj24578;
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
return (function (p1__24579_SHARP_){if(cljs.core.truth_((p1__24579_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24579_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24579_SHARP_.call(null,topic))))
{return p1__24579_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24579_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24704 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24705){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24705 = meta24705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24704.cljs$lang$type = true;
cljs.core.async.t24704.cljs$lang$ctorStr = "cljs.core.async/t24704";
cljs.core.async.t24704.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24704");
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24704.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24706){var self__ = this;
var _24706__$1 = this;return self__.meta24705;
});})(mults,ensure_mult))
;
cljs.core.async.t24704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24706,meta24705__$1){var self__ = this;
var _24706__$1 = this;return (new cljs.core.async.t24704(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24705__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24704 = ((function (mults,ensure_mult){
return (function __GT_t24704(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24705){return (new cljs.core.async.t24704(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24705));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24704(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24780){var state_val_24781 = (state_24780[1]);if((state_val_24781 === 1))
{var state_24780__$1 = state_24780;var statearr_24782_24829 = state_24780__$1;(statearr_24782_24829[2] = null);
(statearr_24782_24829[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 2))
{var state_24780__$1 = state_24780;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24780__$1,4,ch);
} else
{if((state_val_24781 === 3))
{var inst_24778 = (state_24780[2]);var state_24780__$1 = state_24780;return cljs.core.async.impl.ioc_helpers.return_chan(state_24780__$1,inst_24778);
} else
{if((state_val_24781 === 4))
{var inst_24709 = (state_24780[7]);var inst_24709__$1 = (state_24780[2]);var inst_24710 = (inst_24709__$1 == null);var state_24780__$1 = (function (){var statearr_24783 = state_24780;(statearr_24783[7] = inst_24709__$1);
return statearr_24783;
})();if(cljs.core.truth_(inst_24710))
{var statearr_24784_24830 = state_24780__$1;(statearr_24784_24830[1] = 5);
} else
{var statearr_24785_24831 = state_24780__$1;(statearr_24785_24831[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 5))
{var inst_24716 = cljs.core.deref(mults);var inst_24717 = cljs.core.vals(inst_24716);var inst_24718 = cljs.core.seq(inst_24717);var inst_24719 = inst_24718;var inst_24720 = null;var inst_24721 = 0;var inst_24722 = 0;var state_24780__$1 = (function (){var statearr_24786 = state_24780;(statearr_24786[8] = inst_24722);
(statearr_24786[9] = inst_24721);
(statearr_24786[10] = inst_24720);
(statearr_24786[11] = inst_24719);
return statearr_24786;
})();var statearr_24787_24832 = state_24780__$1;(statearr_24787_24832[2] = null);
(statearr_24787_24832[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 6))
{var inst_24757 = (state_24780[12]);var inst_24709 = (state_24780[7]);var inst_24759 = (state_24780[13]);var inst_24757__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24709) : topic_fn.call(null,inst_24709));var inst_24758 = cljs.core.deref(mults);var inst_24759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24758,inst_24757__$1);var state_24780__$1 = (function (){var statearr_24788 = state_24780;(statearr_24788[12] = inst_24757__$1);
(statearr_24788[13] = inst_24759__$1);
return statearr_24788;
})();if(cljs.core.truth_(inst_24759__$1))
{var statearr_24789_24833 = state_24780__$1;(statearr_24789_24833[1] = 19);
} else
{var statearr_24790_24834 = state_24780__$1;(statearr_24790_24834[1] = 20);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 7))
{var inst_24776 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24791_24835 = state_24780__$1;(statearr_24791_24835[2] = inst_24776);
(statearr_24791_24835[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 8))
{var inst_24722 = (state_24780[8]);var inst_24721 = (state_24780[9]);var inst_24724 = (inst_24722 < inst_24721);var inst_24725 = inst_24724;var state_24780__$1 = state_24780;if(cljs.core.truth_(inst_24725))
{var statearr_24795_24836 = state_24780__$1;(statearr_24795_24836[1] = 10);
} else
{var statearr_24796_24837 = state_24780__$1;(statearr_24796_24837[1] = 11);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 9))
{var inst_24755 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24797_24838 = state_24780__$1;(statearr_24797_24838[2] = inst_24755);
(statearr_24797_24838[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 10))
{var inst_24722 = (state_24780[8]);var inst_24721 = (state_24780[9]);var inst_24720 = (state_24780[10]);var inst_24719 = (state_24780[11]);var inst_24727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24720,inst_24722);var inst_24728 = cljs.core.async.muxch_STAR_(inst_24727);var inst_24729 = cljs.core.async.close_BANG_(inst_24728);var inst_24730 = (inst_24722 + 1);var tmp24792 = inst_24721;var tmp24793 = inst_24720;var tmp24794 = inst_24719;var inst_24719__$1 = tmp24794;var inst_24720__$1 = tmp24793;var inst_24721__$1 = tmp24792;var inst_24722__$1 = inst_24730;var state_24780__$1 = (function (){var statearr_24798 = state_24780;(statearr_24798[8] = inst_24722__$1);
(statearr_24798[9] = inst_24721__$1);
(statearr_24798[10] = inst_24720__$1);
(statearr_24798[11] = inst_24719__$1);
(statearr_24798[14] = inst_24729);
return statearr_24798;
})();var statearr_24799_24839 = state_24780__$1;(statearr_24799_24839[2] = null);
(statearr_24799_24839[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 11))
{var inst_24719 = (state_24780[11]);var inst_24733 = (state_24780[15]);var inst_24733__$1 = cljs.core.seq(inst_24719);var state_24780__$1 = (function (){var statearr_24800 = state_24780;(statearr_24800[15] = inst_24733__$1);
return statearr_24800;
})();if(inst_24733__$1)
{var statearr_24801_24840 = state_24780__$1;(statearr_24801_24840[1] = 13);
} else
{var statearr_24802_24841 = state_24780__$1;(statearr_24802_24841[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 12))
{var inst_24753 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24803_24842 = state_24780__$1;(statearr_24803_24842[2] = inst_24753);
(statearr_24803_24842[1] = 9);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 13))
{var inst_24733 = (state_24780[15]);var inst_24735 = cljs.core.chunked_seq_QMARK_(inst_24733);var state_24780__$1 = state_24780;if(inst_24735)
{var statearr_24804_24843 = state_24780__$1;(statearr_24804_24843[1] = 16);
} else
{var statearr_24805_24844 = state_24780__$1;(statearr_24805_24844[1] = 17);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 14))
{var state_24780__$1 = state_24780;var statearr_24806_24845 = state_24780__$1;(statearr_24806_24845[2] = null);
(statearr_24806_24845[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 15))
{var inst_24751 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24807_24846 = state_24780__$1;(statearr_24807_24846[2] = inst_24751);
(statearr_24807_24846[1] = 12);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 16))
{var inst_24733 = (state_24780[15]);var inst_24737 = cljs.core.chunk_first(inst_24733);var inst_24738 = cljs.core.chunk_rest(inst_24733);var inst_24739 = cljs.core.count(inst_24737);var inst_24719 = inst_24738;var inst_24720 = inst_24737;var inst_24721 = inst_24739;var inst_24722 = 0;var state_24780__$1 = (function (){var statearr_24808 = state_24780;(statearr_24808[8] = inst_24722);
(statearr_24808[9] = inst_24721);
(statearr_24808[10] = inst_24720);
(statearr_24808[11] = inst_24719);
return statearr_24808;
})();var statearr_24809_24847 = state_24780__$1;(statearr_24809_24847[2] = null);
(statearr_24809_24847[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 17))
{var inst_24733 = (state_24780[15]);var inst_24742 = cljs.core.first(inst_24733);var inst_24743 = cljs.core.async.muxch_STAR_(inst_24742);var inst_24744 = cljs.core.async.close_BANG_(inst_24743);var inst_24745 = cljs.core.next(inst_24733);var inst_24719 = inst_24745;var inst_24720 = null;var inst_24721 = 0;var inst_24722 = 0;var state_24780__$1 = (function (){var statearr_24810 = state_24780;(statearr_24810[8] = inst_24722);
(statearr_24810[9] = inst_24721);
(statearr_24810[10] = inst_24720);
(statearr_24810[16] = inst_24744);
(statearr_24810[11] = inst_24719);
return statearr_24810;
})();var statearr_24811_24848 = state_24780__$1;(statearr_24811_24848[2] = null);
(statearr_24811_24848[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 18))
{var inst_24748 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24812_24849 = state_24780__$1;(statearr_24812_24849[2] = inst_24748);
(statearr_24812_24849[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 19))
{var state_24780__$1 = state_24780;var statearr_24813_24850 = state_24780__$1;(statearr_24813_24850[2] = null);
(statearr_24813_24850[1] = 24);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 20))
{var state_24780__$1 = state_24780;var statearr_24814_24851 = state_24780__$1;(statearr_24814_24851[2] = null);
(statearr_24814_24851[1] = 21);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 21))
{var inst_24773 = (state_24780[2]);var state_24780__$1 = (function (){var statearr_24815 = state_24780;(statearr_24815[17] = inst_24773);
return statearr_24815;
})();var statearr_24816_24852 = state_24780__$1;(statearr_24816_24852[2] = null);
(statearr_24816_24852[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 22))
{var inst_24770 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24817_24853 = state_24780__$1;(statearr_24817_24853[2] = inst_24770);
(statearr_24817_24853[1] = 21);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 23))
{var inst_24757 = (state_24780[12]);var inst_24761 = (state_24780[2]);var inst_24762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24757);var state_24780__$1 = (function (){var statearr_24818 = state_24780;(statearr_24818[18] = inst_24761);
return statearr_24818;
})();var statearr_24819_24854 = state_24780__$1;(statearr_24819_24854[2] = inst_24762);
cljs.core.async.impl.ioc_helpers.process_exception(state_24780__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24781 === 24))
{var inst_24709 = (state_24780[7]);var inst_24759 = (state_24780[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24780,23,Object,null,22);var inst_24766 = cljs.core.async.muxch_STAR_(inst_24759);var state_24780__$1 = state_24780;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24780__$1,25,inst_24766,inst_24709);
} else
{if((state_val_24781 === 25))
{var inst_24768 = (state_24780[2]);var state_24780__$1 = state_24780;var statearr_24820_24855 = state_24780__$1;(statearr_24820_24855[2] = inst_24768);
cljs.core.async.impl.ioc_helpers.process_exception(state_24780__$1);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24824[0] = state_machine__5507__auto__);
(statearr_24824[1] = 1);
return statearr_24824;
});
var state_machine__5507__auto____1 = (function (state_24780){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24780);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24825){if((e24825 instanceof Object))
{var ex__5510__auto__ = e24825;var statearr_24826_24856 = state_24780;(statearr_24826_24856[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24780);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__24857 = state_24780;
state_24780 = G__24857;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24780){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24827 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24828);
return statearr_24827;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24964){var state_val_24965 = (state_24964[1]);if((state_val_24965 === 1))
{var state_24964__$1 = state_24964;var statearr_24966_24995 = state_24964__$1;(statearr_24966_24995[2] = null);
(statearr_24966_24995[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 2))
{var inst_24927 = cljs.core.reset_BANG_(dctr,cnt);var inst_24928 = 0;var state_24964__$1 = (function (){var statearr_24967 = state_24964;(statearr_24967[7] = inst_24927);
(statearr_24967[8] = inst_24928);
return statearr_24967;
})();var statearr_24968_24996 = state_24964__$1;(statearr_24968_24996[2] = null);
(statearr_24968_24996[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 3))
{var inst_24962 = (state_24964[2]);var state_24964__$1 = state_24964;return cljs.core.async.impl.ioc_helpers.return_chan(state_24964__$1,inst_24962);
} else
{if((state_val_24965 === 4))
{var inst_24928 = (state_24964[8]);var inst_24930 = (inst_24928 < cnt);var state_24964__$1 = state_24964;if(cljs.core.truth_(inst_24930))
{var statearr_24969_24997 = state_24964__$1;(statearr_24969_24997[1] = 6);
} else
{var statearr_24970_24998 = state_24964__$1;(statearr_24970_24998[1] = 7);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 5))
{var inst_24948 = (state_24964[2]);var state_24964__$1 = (function (){var statearr_24971 = state_24964;(statearr_24971[9] = inst_24948);
return statearr_24971;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24964__$1,12,dchan);
} else
{if((state_val_24965 === 6))
{var state_24964__$1 = state_24964;var statearr_24972_24999 = state_24964__$1;(statearr_24972_24999[2] = null);
(statearr_24972_24999[1] = 11);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 7))
{var state_24964__$1 = state_24964;var statearr_24973_25000 = state_24964__$1;(statearr_24973_25000[2] = null);
(statearr_24973_25000[1] = 8);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 8))
{var inst_24946 = (state_24964[2]);var state_24964__$1 = state_24964;var statearr_24974_25001 = state_24964__$1;(statearr_24974_25001[2] = inst_24946);
(statearr_24974_25001[1] = 5);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 9))
{var inst_24928 = (state_24964[8]);var inst_24941 = (state_24964[2]);var inst_24942 = (inst_24928 + 1);var inst_24928__$1 = inst_24942;var state_24964__$1 = (function (){var statearr_24975 = state_24964;(statearr_24975[10] = inst_24941);
(statearr_24975[8] = inst_24928__$1);
return statearr_24975;
})();var statearr_24976_25002 = state_24964__$1;(statearr_24976_25002[2] = null);
(statearr_24976_25002[1] = 4);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 10))
{var inst_24932 = (state_24964[2]);var inst_24933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24964__$1 = (function (){var statearr_24977 = state_24964;(statearr_24977[11] = inst_24932);
return statearr_24977;
})();var statearr_24978_25003 = state_24964__$1;(statearr_24978_25003[2] = inst_24933);
cljs.core.async.impl.ioc_helpers.process_exception(state_24964__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 11))
{var inst_24928 = (state_24964[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24964,10,Object,null,9);var inst_24937 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24928) : chs__$1.call(null,inst_24928));var inst_24938 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24928) : done.call(null,inst_24928));var inst_24939 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24937,inst_24938);var state_24964__$1 = state_24964;var statearr_24979_25004 = state_24964__$1;(statearr_24979_25004[2] = inst_24939);
cljs.core.async.impl.ioc_helpers.process_exception(state_24964__$1);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 12))
{var inst_24950 = (state_24964[12]);var inst_24950__$1 = (state_24964[2]);var inst_24951 = cljs.core.some(cljs.core.nil_QMARK_,inst_24950__$1);var state_24964__$1 = (function (){var statearr_24980 = state_24964;(statearr_24980[12] = inst_24950__$1);
return statearr_24980;
})();if(cljs.core.truth_(inst_24951))
{var statearr_24981_25005 = state_24964__$1;(statearr_24981_25005[1] = 13);
} else
{var statearr_24982_25006 = state_24964__$1;(statearr_24982_25006[1] = 14);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 13))
{var inst_24953 = cljs.core.async.close_BANG_(out);var state_24964__$1 = state_24964;var statearr_24983_25007 = state_24964__$1;(statearr_24983_25007[2] = inst_24953);
(statearr_24983_25007[1] = 15);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 14))
{var inst_24950 = (state_24964[12]);var inst_24955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24950);var state_24964__$1 = state_24964;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24964__$1,16,out,inst_24955);
} else
{if((state_val_24965 === 15))
{var inst_24960 = (state_24964[2]);var state_24964__$1 = state_24964;var statearr_24984_25008 = state_24964__$1;(statearr_24984_25008[2] = inst_24960);
(statearr_24984_25008[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_24965 === 16))
{var inst_24957 = (state_24964[2]);var state_24964__$1 = (function (){var statearr_24985 = state_24964;(statearr_24985[13] = inst_24957);
return statearr_24985;
})();var statearr_24986_25009 = state_24964__$1;(statearr_24986_25009[2] = null);
(statearr_24986_25009[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_24990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24990[0] = state_machine__5507__auto__);
(statearr_24990[1] = 1);
return statearr_24990;
});
var state_machine__5507__auto____1 = (function (state_24964){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24964);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24991){if((e24991 instanceof Object))
{var ex__5510__auto__ = e24991;var statearr_24992_25010 = state_24964;(statearr_24992_25010[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24964);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e24991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25011 = state_24964;
state_24964 = G__25011;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24964){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24993 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24994);
return statearr_24993;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25095){var state_val_25096 = (state_25095[1]);if((state_val_25096 === 1))
{var inst_25066 = cljs.core.vec(chs);var inst_25067 = inst_25066;var state_25095__$1 = (function (){var statearr_25097 = state_25095;(statearr_25097[7] = inst_25067);
return statearr_25097;
})();var statearr_25098_25120 = state_25095__$1;(statearr_25098_25120[2] = null);
(statearr_25098_25120[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 2))
{var inst_25067 = (state_25095[7]);var inst_25069 = cljs.core.count(inst_25067);var inst_25070 = (inst_25069 > 0);var state_25095__$1 = state_25095;if(cljs.core.truth_(inst_25070))
{var statearr_25099_25121 = state_25095__$1;(statearr_25099_25121[1] = 4);
} else
{var statearr_25100_25122 = state_25095__$1;(statearr_25100_25122[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 3))
{var inst_25093 = (state_25095[2]);var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.return_chan(state_25095__$1,inst_25093);
} else
{if((state_val_25096 === 4))
{var inst_25067 = (state_25095[7]);var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25095__$1,7,inst_25067);
} else
{if((state_val_25096 === 5))
{var inst_25089 = cljs.core.async.close_BANG_(out);var state_25095__$1 = state_25095;var statearr_25101_25123 = state_25095__$1;(statearr_25101_25123[2] = inst_25089);
(statearr_25101_25123[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 6))
{var inst_25091 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25102_25124 = state_25095__$1;(statearr_25102_25124[2] = inst_25091);
(statearr_25102_25124[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 7))
{var inst_25074 = (state_25095[8]);var inst_25075 = (state_25095[9]);var inst_25074__$1 = (state_25095[2]);var inst_25075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25074__$1,0,null);var inst_25076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25074__$1,1,null);var inst_25077 = (inst_25075__$1 == null);var state_25095__$1 = (function (){var statearr_25103 = state_25095;(statearr_25103[8] = inst_25074__$1);
(statearr_25103[10] = inst_25076);
(statearr_25103[9] = inst_25075__$1);
return statearr_25103;
})();if(cljs.core.truth_(inst_25077))
{var statearr_25104_25125 = state_25095__$1;(statearr_25104_25125[1] = 8);
} else
{var statearr_25105_25126 = state_25095__$1;(statearr_25105_25126[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 8))
{var inst_25067 = (state_25095[7]);var inst_25074 = (state_25095[8]);var inst_25076 = (state_25095[10]);var inst_25075 = (state_25095[9]);var inst_25079 = (function (){var c = inst_25076;var v = inst_25075;var vec__25072 = inst_25074;var cs = inst_25067;return ((function (c,v,vec__25072,cs,inst_25067,inst_25074,inst_25076,inst_25075,state_val_25096){
return (function (p1__25012_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25012_SHARP_);
});
;})(c,v,vec__25072,cs,inst_25067,inst_25074,inst_25076,inst_25075,state_val_25096))
})();var inst_25080 = cljs.core.filterv(inst_25079,inst_25067);var inst_25067__$1 = inst_25080;var state_25095__$1 = (function (){var statearr_25106 = state_25095;(statearr_25106[7] = inst_25067__$1);
return statearr_25106;
})();var statearr_25107_25127 = state_25095__$1;(statearr_25107_25127[2] = null);
(statearr_25107_25127[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 9))
{var inst_25075 = (state_25095[9]);var state_25095__$1 = state_25095;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25095__$1,11,out,inst_25075);
} else
{if((state_val_25096 === 10))
{var inst_25087 = (state_25095[2]);var state_25095__$1 = state_25095;var statearr_25109_25128 = state_25095__$1;(statearr_25109_25128[2] = inst_25087);
(statearr_25109_25128[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25096 === 11))
{var inst_25067 = (state_25095[7]);var inst_25084 = (state_25095[2]);var tmp25108 = inst_25067;var inst_25067__$1 = tmp25108;var state_25095__$1 = (function (){var statearr_25110 = state_25095;(statearr_25110[7] = inst_25067__$1);
(statearr_25110[11] = inst_25084);
return statearr_25110;
})();var statearr_25111_25129 = state_25095__$1;(statearr_25111_25129[2] = null);
(statearr_25111_25129[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25115 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25115[0] = state_machine__5507__auto__);
(statearr_25115[1] = 1);
return statearr_25115;
});
var state_machine__5507__auto____1 = (function (state_25095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25095);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25116){if((e25116 instanceof Object))
{var ex__5510__auto__ = e25116;var statearr_25117_25130 = state_25095;(statearr_25117_25130[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25095);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25131 = state_25095;
state_25095 = G__25131;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25118 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25119);
return statearr_25118;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25201){var state_val_25202 = (state_25201[1]);if((state_val_25202 === 1))
{var inst_25178 = 0;var state_25201__$1 = (function (){var statearr_25203 = state_25201;(statearr_25203[7] = inst_25178);
return statearr_25203;
})();var statearr_25204_25225 = state_25201__$1;(statearr_25204_25225[2] = null);
(statearr_25204_25225[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 2))
{var inst_25178 = (state_25201[7]);var inst_25180 = (inst_25178 < n);var state_25201__$1 = state_25201;if(cljs.core.truth_(inst_25180))
{var statearr_25205_25226 = state_25201__$1;(statearr_25205_25226[1] = 4);
} else
{var statearr_25206_25227 = state_25201__$1;(statearr_25206_25227[1] = 5);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 3))
{var inst_25198 = (state_25201[2]);var inst_25199 = cljs.core.async.close_BANG_(out);var state_25201__$1 = (function (){var statearr_25207 = state_25201;(statearr_25207[8] = inst_25198);
return statearr_25207;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25201__$1,inst_25199);
} else
{if((state_val_25202 === 4))
{var state_25201__$1 = state_25201;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25201__$1,7,ch);
} else
{if((state_val_25202 === 5))
{var state_25201__$1 = state_25201;var statearr_25208_25228 = state_25201__$1;(statearr_25208_25228[2] = null);
(statearr_25208_25228[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 6))
{var inst_25196 = (state_25201[2]);var state_25201__$1 = state_25201;var statearr_25209_25229 = state_25201__$1;(statearr_25209_25229[2] = inst_25196);
(statearr_25209_25229[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 7))
{var inst_25183 = (state_25201[9]);var inst_25183__$1 = (state_25201[2]);var inst_25184 = (inst_25183__$1 == null);var inst_25185 = cljs.core.not(inst_25184);var state_25201__$1 = (function (){var statearr_25210 = state_25201;(statearr_25210[9] = inst_25183__$1);
return statearr_25210;
})();if(inst_25185)
{var statearr_25211_25230 = state_25201__$1;(statearr_25211_25230[1] = 8);
} else
{var statearr_25212_25231 = state_25201__$1;(statearr_25212_25231[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 8))
{var inst_25183 = (state_25201[9]);var state_25201__$1 = state_25201;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25201__$1,11,out,inst_25183);
} else
{if((state_val_25202 === 9))
{var state_25201__$1 = state_25201;var statearr_25213_25232 = state_25201__$1;(statearr_25213_25232[2] = null);
(statearr_25213_25232[1] = 10);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 10))
{var inst_25193 = (state_25201[2]);var state_25201__$1 = state_25201;var statearr_25214_25233 = state_25201__$1;(statearr_25214_25233[2] = inst_25193);
(statearr_25214_25233[1] = 6);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25202 === 11))
{var inst_25178 = (state_25201[7]);var inst_25188 = (state_25201[2]);var inst_25189 = (inst_25178 + 1);var inst_25178__$1 = inst_25189;var state_25201__$1 = (function (){var statearr_25215 = state_25201;(statearr_25215[7] = inst_25178__$1);
(statearr_25215[10] = inst_25188);
return statearr_25215;
})();var statearr_25216_25234 = state_25201__$1;(statearr_25216_25234[2] = null);
(statearr_25216_25234[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25220 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25220[0] = state_machine__5507__auto__);
(statearr_25220[1] = 1);
return statearr_25220;
});
var state_machine__5507__auto____1 = (function (state_25201){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25201);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25221){if((e25221 instanceof Object))
{var ex__5510__auto__ = e25221;var statearr_25222_25235 = state_25201;(statearr_25222_25235[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25201);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25236 = state_25201;
state_25201 = G__25236;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25201){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25223 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25224);
return statearr_25223;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25308){var state_val_25309 = (state_25308[1]);if((state_val_25309 === 1))
{var inst_25285 = null;var state_25308__$1 = (function (){var statearr_25310 = state_25308;(statearr_25310[7] = inst_25285);
return statearr_25310;
})();var statearr_25311_25334 = state_25308__$1;(statearr_25311_25334[2] = null);
(statearr_25311_25334[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 2))
{var state_25308__$1 = state_25308;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25308__$1,4,ch);
} else
{if((state_val_25309 === 3))
{var inst_25305 = (state_25308[2]);var inst_25306 = cljs.core.async.close_BANG_(out);var state_25308__$1 = (function (){var statearr_25312 = state_25308;(statearr_25312[8] = inst_25305);
return statearr_25312;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25308__$1,inst_25306);
} else
{if((state_val_25309 === 4))
{var inst_25288 = (state_25308[9]);var inst_25288__$1 = (state_25308[2]);var inst_25289 = (inst_25288__$1 == null);var inst_25290 = cljs.core.not(inst_25289);var state_25308__$1 = (function (){var statearr_25313 = state_25308;(statearr_25313[9] = inst_25288__$1);
return statearr_25313;
})();if(inst_25290)
{var statearr_25314_25335 = state_25308__$1;(statearr_25314_25335[1] = 5);
} else
{var statearr_25315_25336 = state_25308__$1;(statearr_25315_25336[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 5))
{var inst_25288 = (state_25308[9]);var inst_25285 = (state_25308[7]);var inst_25292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25288,inst_25285);var state_25308__$1 = state_25308;if(inst_25292)
{var statearr_25316_25337 = state_25308__$1;(statearr_25316_25337[1] = 8);
} else
{var statearr_25317_25338 = state_25308__$1;(statearr_25317_25338[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 6))
{var state_25308__$1 = state_25308;var statearr_25319_25339 = state_25308__$1;(statearr_25319_25339[2] = null);
(statearr_25319_25339[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 7))
{var inst_25303 = (state_25308[2]);var state_25308__$1 = state_25308;var statearr_25320_25340 = state_25308__$1;(statearr_25320_25340[2] = inst_25303);
(statearr_25320_25340[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 8))
{var inst_25285 = (state_25308[7]);var tmp25318 = inst_25285;var inst_25285__$1 = tmp25318;var state_25308__$1 = (function (){var statearr_25321 = state_25308;(statearr_25321[7] = inst_25285__$1);
return statearr_25321;
})();var statearr_25322_25341 = state_25308__$1;(statearr_25322_25341[2] = null);
(statearr_25322_25341[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 9))
{var inst_25288 = (state_25308[9]);var state_25308__$1 = state_25308;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25308__$1,11,out,inst_25288);
} else
{if((state_val_25309 === 10))
{var inst_25300 = (state_25308[2]);var state_25308__$1 = state_25308;var statearr_25323_25342 = state_25308__$1;(statearr_25323_25342[2] = inst_25300);
(statearr_25323_25342[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25309 === 11))
{var inst_25288 = (state_25308[9]);var inst_25297 = (state_25308[2]);var inst_25285 = inst_25288;var state_25308__$1 = (function (){var statearr_25324 = state_25308;(statearr_25324[10] = inst_25297);
(statearr_25324[7] = inst_25285);
return statearr_25324;
})();var statearr_25325_25343 = state_25308__$1;(statearr_25325_25343[2] = null);
(statearr_25325_25343[1] = 2);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25329 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25329[0] = state_machine__5507__auto__);
(statearr_25329[1] = 1);
return statearr_25329;
});
var state_machine__5507__auto____1 = (function (state_25308){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25308);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25330){if((e25330 instanceof Object))
{var ex__5510__auto__ = e25330;var statearr_25331_25344 = state_25308;(statearr_25331_25344[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25308);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25345 = state_25308;
state_25308 = G__25345;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25308){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25332 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25333);
return statearr_25332;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25450){var state_val_25451 = (state_25450[1]);if((state_val_25451 === 1))
{var inst_25413 = (new Array(n));var inst_25414 = inst_25413;var inst_25415 = 0;var state_25450__$1 = (function (){var statearr_25452 = state_25450;(statearr_25452[7] = inst_25415);
(statearr_25452[8] = inst_25414);
return statearr_25452;
})();var statearr_25453_25481 = state_25450__$1;(statearr_25453_25481[2] = null);
(statearr_25453_25481[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 2))
{var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25450__$1,4,ch);
} else
{if((state_val_25451 === 3))
{var inst_25448 = (state_25450[2]);var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.return_chan(state_25450__$1,inst_25448);
} else
{if((state_val_25451 === 4))
{var inst_25418 = (state_25450[9]);var inst_25418__$1 = (state_25450[2]);var inst_25419 = (inst_25418__$1 == null);var inst_25420 = cljs.core.not(inst_25419);var state_25450__$1 = (function (){var statearr_25454 = state_25450;(statearr_25454[9] = inst_25418__$1);
return statearr_25454;
})();if(inst_25420)
{var statearr_25455_25482 = state_25450__$1;(statearr_25455_25482[1] = 5);
} else
{var statearr_25456_25483 = state_25450__$1;(statearr_25456_25483[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 5))
{var inst_25415 = (state_25450[7]);var inst_25423 = (state_25450[10]);var inst_25418 = (state_25450[9]);var inst_25414 = (state_25450[8]);var inst_25422 = (inst_25414[inst_25415] = inst_25418);var inst_25423__$1 = (inst_25415 + 1);var inst_25424 = (inst_25423__$1 < n);var state_25450__$1 = (function (){var statearr_25457 = state_25450;(statearr_25457[10] = inst_25423__$1);
(statearr_25457[11] = inst_25422);
return statearr_25457;
})();if(cljs.core.truth_(inst_25424))
{var statearr_25458_25484 = state_25450__$1;(statearr_25458_25484[1] = 8);
} else
{var statearr_25459_25485 = state_25450__$1;(statearr_25459_25485[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 6))
{var inst_25415 = (state_25450[7]);var inst_25436 = (inst_25415 > 0);var state_25450__$1 = state_25450;if(cljs.core.truth_(inst_25436))
{var statearr_25461_25486 = state_25450__$1;(statearr_25461_25486[1] = 12);
} else
{var statearr_25462_25487 = state_25450__$1;(statearr_25462_25487[1] = 13);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 7))
{var inst_25446 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25463_25488 = state_25450__$1;(statearr_25463_25488[2] = inst_25446);
(statearr_25463_25488[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 8))
{var inst_25423 = (state_25450[10]);var inst_25414 = (state_25450[8]);var tmp25460 = inst_25414;var inst_25414__$1 = tmp25460;var inst_25415 = inst_25423;var state_25450__$1 = (function (){var statearr_25464 = state_25450;(statearr_25464[7] = inst_25415);
(statearr_25464[8] = inst_25414__$1);
return statearr_25464;
})();var statearr_25465_25489 = state_25450__$1;(statearr_25465_25489[2] = null);
(statearr_25465_25489[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 9))
{var inst_25414 = (state_25450[8]);var inst_25428 = cljs.core.vec(inst_25414);var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25450__$1,11,out,inst_25428);
} else
{if((state_val_25451 === 10))
{var inst_25434 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25466_25490 = state_25450__$1;(statearr_25466_25490[2] = inst_25434);
(statearr_25466_25490[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 11))
{var inst_25430 = (state_25450[2]);var inst_25431 = (new Array(n));var inst_25414 = inst_25431;var inst_25415 = 0;var state_25450__$1 = (function (){var statearr_25467 = state_25450;(statearr_25467[7] = inst_25415);
(statearr_25467[8] = inst_25414);
(statearr_25467[12] = inst_25430);
return statearr_25467;
})();var statearr_25468_25491 = state_25450__$1;(statearr_25468_25491[2] = null);
(statearr_25468_25491[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 12))
{var inst_25414 = (state_25450[8]);var inst_25438 = cljs.core.vec(inst_25414);var state_25450__$1 = state_25450;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25450__$1,15,out,inst_25438);
} else
{if((state_val_25451 === 13))
{var state_25450__$1 = state_25450;var statearr_25469_25492 = state_25450__$1;(statearr_25469_25492[2] = null);
(statearr_25469_25492[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 14))
{var inst_25443 = (state_25450[2]);var inst_25444 = cljs.core.async.close_BANG_(out);var state_25450__$1 = (function (){var statearr_25470 = state_25450;(statearr_25470[13] = inst_25443);
return statearr_25470;
})();var statearr_25471_25493 = state_25450__$1;(statearr_25471_25493[2] = inst_25444);
(statearr_25471_25493[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25451 === 15))
{var inst_25440 = (state_25450[2]);var state_25450__$1 = state_25450;var statearr_25472_25494 = state_25450__$1;(statearr_25472_25494[2] = inst_25440);
(statearr_25472_25494[1] = 14);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25476[0] = state_machine__5507__auto__);
(statearr_25476[1] = 1);
return statearr_25476;
});
var state_machine__5507__auto____1 = (function (state_25450){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25450);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25477){if((e25477 instanceof Object))
{var ex__5510__auto__ = e25477;var statearr_25478_25495 = state_25450;(statearr_25478_25495[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25450);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25496 = state_25450;
state_25450 = G__25496;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25450){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25479 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25480);
return statearr_25479;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25609){var state_val_25610 = (state_25609[1]);if((state_val_25610 === 1))
{var inst_25568 = [];var inst_25569 = inst_25568;var inst_25570 = cljs.core.constant$keyword$213;var state_25609__$1 = (function (){var statearr_25611 = state_25609;(statearr_25611[7] = inst_25570);
(statearr_25611[8] = inst_25569);
return statearr_25611;
})();var statearr_25612_25640 = state_25609__$1;(statearr_25612_25640[2] = null);
(statearr_25612_25640[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 2))
{var state_25609__$1 = state_25609;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25609__$1,4,ch);
} else
{if((state_val_25610 === 3))
{var inst_25607 = (state_25609[2]);var state_25609__$1 = state_25609;return cljs.core.async.impl.ioc_helpers.return_chan(state_25609__$1,inst_25607);
} else
{if((state_val_25610 === 4))
{var inst_25573 = (state_25609[9]);var inst_25573__$1 = (state_25609[2]);var inst_25574 = (inst_25573__$1 == null);var inst_25575 = cljs.core.not(inst_25574);var state_25609__$1 = (function (){var statearr_25613 = state_25609;(statearr_25613[9] = inst_25573__$1);
return statearr_25613;
})();if(inst_25575)
{var statearr_25614_25641 = state_25609__$1;(statearr_25614_25641[1] = 5);
} else
{var statearr_25615_25642 = state_25609__$1;(statearr_25615_25642[1] = 6);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 5))
{var inst_25573 = (state_25609[9]);var inst_25570 = (state_25609[7]);var inst_25577 = (state_25609[10]);var inst_25577__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25573) : f.call(null,inst_25573));var inst_25578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25577__$1,inst_25570);var inst_25579 = cljs.core.keyword_identical_QMARK_(inst_25570,cljs.core.constant$keyword$213);var inst_25580 = (inst_25578) || (inst_25579);var state_25609__$1 = (function (){var statearr_25616 = state_25609;(statearr_25616[10] = inst_25577__$1);
return statearr_25616;
})();if(cljs.core.truth_(inst_25580))
{var statearr_25617_25643 = state_25609__$1;(statearr_25617_25643[1] = 8);
} else
{var statearr_25618_25644 = state_25609__$1;(statearr_25618_25644[1] = 9);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 6))
{var inst_25569 = (state_25609[8]);var inst_25594 = inst_25569.length;var inst_25595 = (inst_25594 > 0);var state_25609__$1 = state_25609;if(cljs.core.truth_(inst_25595))
{var statearr_25620_25645 = state_25609__$1;(statearr_25620_25645[1] = 12);
} else
{var statearr_25621_25646 = state_25609__$1;(statearr_25621_25646[1] = 13);
}
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 7))
{var inst_25605 = (state_25609[2]);var state_25609__$1 = state_25609;var statearr_25622_25647 = state_25609__$1;(statearr_25622_25647[2] = inst_25605);
(statearr_25622_25647[1] = 3);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 8))
{var inst_25573 = (state_25609[9]);var inst_25569 = (state_25609[8]);var inst_25577 = (state_25609[10]);var inst_25582 = inst_25569.push(inst_25573);var tmp25619 = inst_25569;var inst_25569__$1 = tmp25619;var inst_25570 = inst_25577;var state_25609__$1 = (function (){var statearr_25623 = state_25609;(statearr_25623[7] = inst_25570);
(statearr_25623[8] = inst_25569__$1);
(statearr_25623[11] = inst_25582);
return statearr_25623;
})();var statearr_25624_25648 = state_25609__$1;(statearr_25624_25648[2] = null);
(statearr_25624_25648[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 9))
{var inst_25569 = (state_25609[8]);var inst_25585 = cljs.core.vec(inst_25569);var state_25609__$1 = state_25609;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25609__$1,11,out,inst_25585);
} else
{if((state_val_25610 === 10))
{var inst_25592 = (state_25609[2]);var state_25609__$1 = state_25609;var statearr_25625_25649 = state_25609__$1;(statearr_25625_25649[2] = inst_25592);
(statearr_25625_25649[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 11))
{var inst_25573 = (state_25609[9]);var inst_25577 = (state_25609[10]);var inst_25587 = (state_25609[2]);var inst_25588 = [];var inst_25589 = inst_25588.push(inst_25573);var inst_25569 = inst_25588;var inst_25570 = inst_25577;var state_25609__$1 = (function (){var statearr_25626 = state_25609;(statearr_25626[12] = inst_25589);
(statearr_25626[7] = inst_25570);
(statearr_25626[13] = inst_25587);
(statearr_25626[8] = inst_25569);
return statearr_25626;
})();var statearr_25627_25650 = state_25609__$1;(statearr_25627_25650[2] = null);
(statearr_25627_25650[1] = 2);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 12))
{var inst_25569 = (state_25609[8]);var inst_25597 = cljs.core.vec(inst_25569);var state_25609__$1 = state_25609;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25609__$1,15,out,inst_25597);
} else
{if((state_val_25610 === 13))
{var state_25609__$1 = state_25609;var statearr_25628_25651 = state_25609__$1;(statearr_25628_25651[2] = null);
(statearr_25628_25651[1] = 14);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 14))
{var inst_25602 = (state_25609[2]);var inst_25603 = cljs.core.async.close_BANG_(out);var state_25609__$1 = (function (){var statearr_25629 = state_25609;(statearr_25629[14] = inst_25602);
return statearr_25629;
})();var statearr_25630_25652 = state_25609__$1;(statearr_25630_25652[2] = inst_25603);
(statearr_25630_25652[1] = 7);
return cljs.core.constant$keyword$200;
} else
{if((state_val_25610 === 15))
{var inst_25599 = (state_25609[2]);var state_25609__$1 = state_25609;var statearr_25631_25653 = state_25609__$1;(statearr_25631_25653[2] = inst_25599);
(statearr_25631_25653[1] = 14);
return cljs.core.constant$keyword$200;
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
var state_machine__5507__auto____0 = (function (){var statearr_25635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25635[0] = state_machine__5507__auto__);
(statearr_25635[1] = 1);
return statearr_25635;
});
var state_machine__5507__auto____1 = (function (state_25609){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25609);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$200))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25636){if((e25636 instanceof Object))
{var ex__5510__auto__ = e25636;var statearr_25637_25654 = state_25609;(statearr_25637_25654[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25609);
return cljs.core.constant$keyword$200;
} else
{if(cljs.core.constant$keyword$189)
{throw e25636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$200))
{{
var G__25655 = state_25609;
state_25609 = G__25655;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25609){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25638 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25639);
return statearr_25638;
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
