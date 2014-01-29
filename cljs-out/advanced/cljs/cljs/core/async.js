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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23045 = (function (f,fn_handler,meta23046){
this.f = f;
this.fn_handler = fn_handler;
this.meta23046 = meta23046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23045.cljs$lang$type = true;
cljs.core.async.t23045.cljs$lang$ctorStr = "cljs.core.async/t23045";
cljs.core.async.t23045.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23045");
});
cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23047){var self__ = this;
var _23047__$1 = this;return self__.meta23046;
});
cljs.core.async.t23045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23047,meta23046__$1){var self__ = this;
var _23047__$1 = this;return (new cljs.core.async.t23045(self__.f,self__.fn_handler,meta23046__$1));
});
cljs.core.async.__GT_t23045 = (function __GT_t23045(f__$1,fn_handler__$1,meta23046){return (new cljs.core.async.t23045(f__$1,fn_handler__$1,meta23046));
});
}
return (new cljs.core.async.t23045(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23049 = buff;if(G__23049)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23049.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23049.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23049);
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
{var val_23050 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23050) : fn1.call(null,val_23050));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23050) : fn1.call(null,val_23050));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23051 = n;var x_23052 = 0;while(true){
if((x_23052 < n__4248__auto___23051))
{(a[x_23052] = 0);
{
var G__23053 = (x_23052 + 1);
x_23052 = G__23053;
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
var G__23054 = (i + 1);
i = G__23054;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23058 = (function (flag,alt_flag,meta23059){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23059 = meta23059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23058.cljs$lang$type = true;
cljs.core.async.t23058.cljs$lang$ctorStr = "cljs.core.async/t23058";
cljs.core.async.t23058.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23058");
});
cljs.core.async.t23058.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23060){var self__ = this;
var _23060__$1 = this;return self__.meta23059;
});
cljs.core.async.t23058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23060,meta23059__$1){var self__ = this;
var _23060__$1 = this;return (new cljs.core.async.t23058(self__.flag,self__.alt_flag,meta23059__$1));
});
cljs.core.async.__GT_t23058 = (function __GT_t23058(flag__$1,alt_flag__$1,meta23059){return (new cljs.core.async.t23058(flag__$1,alt_flag__$1,meta23059));
});
}
return (new cljs.core.async.t23058(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23064 = (function (cb,flag,alt_handler,meta23065){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23065 = meta23065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23064.cljs$lang$type = true;
cljs.core.async.t23064.cljs$lang$ctorStr = "cljs.core.async/t23064";
cljs.core.async.t23064.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23064");
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23066){var self__ = this;
var _23066__$1 = this;return self__.meta23065;
});
cljs.core.async.t23064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23066,meta23065__$1){var self__ = this;
var _23066__$1 = this;return (new cljs.core.async.t23064(self__.cb,self__.flag,self__.alt_handler,meta23065__$1));
});
cljs.core.async.__GT_t23064 = (function __GT_t23064(cb__$1,flag__$1,alt_handler__$1,meta23065){return (new cljs.core.async.t23064(cb__$1,flag__$1,alt_handler__$1,meta23065));
});
}
return (new cljs.core.async.t23064(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23067_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23067_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23067_SHARP_,port], null)));
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
var G__23068 = (i + 1);
i = G__23068;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$188))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$188], null));
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
var alts_BANG___delegate = function (ports,p__23069){var map__23071 = p__23069;var map__23071__$1 = ((cljs.core.seq_QMARK_(map__23071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23071):map__23071);var opts = map__23071__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23069 = null;if (arguments.length > 1) {
  p__23069 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23069);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23072){
var ports = cljs.core.first(arglist__23072);
var p__23069 = cljs.core.rest(arglist__23072);
return alts_BANG___delegate(ports,p__23069);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23080 = (function (ch,f,map_LT_,meta23081){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23081 = meta23081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23080.cljs$lang$type = true;
cljs.core.async.t23080.cljs$lang$ctorStr = "cljs.core.async/t23080";
cljs.core.async.t23080.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23080");
});
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23083 = (function (fn1,_,meta23081,ch,f,map_LT_,meta23084){
this.fn1 = fn1;
this._ = _;
this.meta23081 = meta23081;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23084 = meta23084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23083.cljs$lang$type = true;
cljs.core.async.t23083.cljs$lang$ctorStr = "cljs.core.async/t23083";
cljs.core.async.t23083.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23083");
});
cljs.core.async.t23083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23083.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23073_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23073_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23073_SHARP_) : self__.f.call(null,p1__23073_SHARP_)))) : f1.call(null,(((p1__23073_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23073_SHARP_) : self__.f.call(null,p1__23073_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23085){var self__ = this;
var _23085__$1 = this;return self__.meta23084;
});
cljs.core.async.t23083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23085,meta23084__$1){var self__ = this;
var _23085__$1 = this;return (new cljs.core.async.t23083(self__.fn1,self__._,self__.meta23081,self__.ch,self__.f,self__.map_LT_,meta23084__$1));
});
cljs.core.async.__GT_t23083 = (function __GT_t23083(fn1__$1,___$2,meta23081__$1,ch__$2,f__$2,map_LT___$2,meta23084){return (new cljs.core.async.t23083(fn1__$1,___$2,meta23081__$1,ch__$2,f__$2,map_LT___$2,meta23084));
});
}
return (new cljs.core.async.t23083(fn1,___$1,self__.meta23081,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23082){var self__ = this;
var _23082__$1 = this;return self__.meta23081;
});
cljs.core.async.t23080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23082,meta23081__$1){var self__ = this;
var _23082__$1 = this;return (new cljs.core.async.t23080(self__.ch,self__.f,self__.map_LT_,meta23081__$1));
});
cljs.core.async.__GT_t23080 = (function __GT_t23080(ch__$1,f__$1,map_LT___$1,meta23081){return (new cljs.core.async.t23080(ch__$1,f__$1,map_LT___$1,meta23081));
});
}
return (new cljs.core.async.t23080(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23089 = (function (ch,f,map_GT_,meta23090){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23090 = meta23090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23089.cljs$lang$type = true;
cljs.core.async.t23089.cljs$lang$ctorStr = "cljs.core.async/t23089";
cljs.core.async.t23089.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23089");
});
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23091){var self__ = this;
var _23091__$1 = this;return self__.meta23090;
});
cljs.core.async.t23089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23091,meta23090__$1){var self__ = this;
var _23091__$1 = this;return (new cljs.core.async.t23089(self__.ch,self__.f,self__.map_GT_,meta23090__$1));
});
cljs.core.async.__GT_t23089 = (function __GT_t23089(ch__$1,f__$1,map_GT___$1,meta23090){return (new cljs.core.async.t23089(ch__$1,f__$1,map_GT___$1,meta23090));
});
}
return (new cljs.core.async.t23089(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23095 = (function (ch,p,filter_GT_,meta23096){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23096 = meta23096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23095.cljs$lang$type = true;
cljs.core.async.t23095.cljs$lang$ctorStr = "cljs.core.async/t23095";
cljs.core.async.t23095.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23095");
});
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23097){var self__ = this;
var _23097__$1 = this;return self__.meta23096;
});
cljs.core.async.t23095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23097,meta23096__$1){var self__ = this;
var _23097__$1 = this;return (new cljs.core.async.t23095(self__.ch,self__.p,self__.filter_GT_,meta23096__$1));
});
cljs.core.async.__GT_t23095 = (function __GT_t23095(ch__$1,p__$1,filter_GT___$1,meta23096){return (new cljs.core.async.t23095(ch__$1,p__$1,filter_GT___$1,meta23096));
});
}
return (new cljs.core.async.t23095(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23159){var state_val_23160 = (state_23159[1]);if((state_val_23160 === 1))
{var state_23159__$1 = state_23159;var statearr_23161_23181 = state_23159__$1;(statearr_23161_23181[2] = null);
(statearr_23161_23181[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 2))
{var state_23159__$1 = state_23159;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23159__$1,4,ch);
} else
{if((state_val_23160 === 3))
{var inst_23157 = (state_23159[2]);var state_23159__$1 = state_23159;return cljs.core.async.impl.ioc_helpers.return_chan(state_23159__$1,inst_23157);
} else
{if((state_val_23160 === 4))
{var inst_23141 = (state_23159[7]);var inst_23141__$1 = (state_23159[2]);var inst_23142 = (inst_23141__$1 == null);var state_23159__$1 = (function (){var statearr_23162 = state_23159;(statearr_23162[7] = inst_23141__$1);
return statearr_23162;
})();if(cljs.core.truth_(inst_23142))
{var statearr_23163_23182 = state_23159__$1;(statearr_23163_23182[1] = 5);
} else
{var statearr_23164_23183 = state_23159__$1;(statearr_23164_23183[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 5))
{var inst_23144 = cljs.core.async.close_BANG_(out);var state_23159__$1 = state_23159;var statearr_23165_23184 = state_23159__$1;(statearr_23165_23184[2] = inst_23144);
(statearr_23165_23184[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 6))
{var inst_23141 = (state_23159[7]);var inst_23146 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23141) : p.call(null,inst_23141));var state_23159__$1 = state_23159;if(cljs.core.truth_(inst_23146))
{var statearr_23166_23185 = state_23159__$1;(statearr_23166_23185[1] = 8);
} else
{var statearr_23167_23186 = state_23159__$1;(statearr_23167_23186[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 7))
{var inst_23155 = (state_23159[2]);var state_23159__$1 = state_23159;var statearr_23168_23187 = state_23159__$1;(statearr_23168_23187[2] = inst_23155);
(statearr_23168_23187[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 8))
{var inst_23141 = (state_23159[7]);var state_23159__$1 = state_23159;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23159__$1,11,out,inst_23141);
} else
{if((state_val_23160 === 9))
{var state_23159__$1 = state_23159;var statearr_23169_23188 = state_23159__$1;(statearr_23169_23188[2] = null);
(statearr_23169_23188[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 10))
{var inst_23152 = (state_23159[2]);var state_23159__$1 = (function (){var statearr_23170 = state_23159;(statearr_23170[8] = inst_23152);
return statearr_23170;
})();var statearr_23171_23189 = state_23159__$1;(statearr_23171_23189[2] = null);
(statearr_23171_23189[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23160 === 11))
{var inst_23149 = (state_23159[2]);var state_23159__$1 = state_23159;var statearr_23172_23190 = state_23159__$1;(statearr_23172_23190[2] = inst_23149);
(statearr_23172_23190[1] = 10);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_23176 = [null,null,null,null,null,null,null,null,null];(statearr_23176[0] = state_machine__5507__auto__);
(statearr_23176[1] = 1);
return statearr_23176;
});
var state_machine__5507__auto____1 = (function (state_23159){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23159);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23177){if((e23177 instanceof Object))
{var ex__5510__auto__ = e23177;var statearr_23178_23191 = state_23159;(statearr_23178_23191[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23159);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23192 = state_23159;
state_23159 = G__23192;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23159){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23179 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23180);
return statearr_23179;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23344){var state_val_23345 = (state_23344[1]);if((state_val_23345 === 1))
{var state_23344__$1 = state_23344;var statearr_23346_23383 = state_23344__$1;(statearr_23346_23383[2] = null);
(statearr_23346_23383[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 2))
{var state_23344__$1 = state_23344;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23344__$1,4,in$);
} else
{if((state_val_23345 === 3))
{var inst_23342 = (state_23344[2]);var state_23344__$1 = state_23344;return cljs.core.async.impl.ioc_helpers.return_chan(state_23344__$1,inst_23342);
} else
{if((state_val_23345 === 4))
{var inst_23290 = (state_23344[7]);var inst_23290__$1 = (state_23344[2]);var inst_23291 = (inst_23290__$1 == null);var state_23344__$1 = (function (){var statearr_23347 = state_23344;(statearr_23347[7] = inst_23290__$1);
return statearr_23347;
})();if(cljs.core.truth_(inst_23291))
{var statearr_23348_23384 = state_23344__$1;(statearr_23348_23384[1] = 5);
} else
{var statearr_23349_23385 = state_23344__$1;(statearr_23349_23385[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 5))
{var inst_23293 = cljs.core.async.close_BANG_(out);var state_23344__$1 = state_23344;var statearr_23350_23386 = state_23344__$1;(statearr_23350_23386[2] = inst_23293);
(statearr_23350_23386[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 6))
{var inst_23290 = (state_23344[7]);var inst_23295 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23290) : f.call(null,inst_23290));var inst_23300 = cljs.core.seq(inst_23295);var inst_23301 = inst_23300;var inst_23302 = null;var inst_23303 = 0;var inst_23304 = 0;var state_23344__$1 = (function (){var statearr_23351 = state_23344;(statearr_23351[8] = inst_23303);
(statearr_23351[9] = inst_23304);
(statearr_23351[10] = inst_23302);
(statearr_23351[11] = inst_23301);
return statearr_23351;
})();var statearr_23352_23387 = state_23344__$1;(statearr_23352_23387[2] = null);
(statearr_23352_23387[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 7))
{var inst_23340 = (state_23344[2]);var state_23344__$1 = state_23344;var statearr_23353_23388 = state_23344__$1;(statearr_23353_23388[2] = inst_23340);
(statearr_23353_23388[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 8))
{var inst_23303 = (state_23344[8]);var inst_23304 = (state_23344[9]);var inst_23306 = (inst_23304 < inst_23303);var inst_23307 = inst_23306;var state_23344__$1 = state_23344;if(cljs.core.truth_(inst_23307))
{var statearr_23354_23389 = state_23344__$1;(statearr_23354_23389[1] = 10);
} else
{var statearr_23355_23390 = state_23344__$1;(statearr_23355_23390[1] = 11);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 9))
{var inst_23337 = (state_23344[2]);var state_23344__$1 = (function (){var statearr_23356 = state_23344;(statearr_23356[12] = inst_23337);
return statearr_23356;
})();var statearr_23357_23391 = state_23344__$1;(statearr_23357_23391[2] = null);
(statearr_23357_23391[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 10))
{var inst_23304 = (state_23344[9]);var inst_23302 = (state_23344[10]);var inst_23309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23302,inst_23304);var state_23344__$1 = state_23344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23344__$1,13,out,inst_23309);
} else
{if((state_val_23345 === 11))
{var inst_23315 = (state_23344[13]);var inst_23301 = (state_23344[11]);var inst_23315__$1 = cljs.core.seq(inst_23301);var state_23344__$1 = (function (){var statearr_23361 = state_23344;(statearr_23361[13] = inst_23315__$1);
return statearr_23361;
})();if(inst_23315__$1)
{var statearr_23362_23392 = state_23344__$1;(statearr_23362_23392[1] = 14);
} else
{var statearr_23363_23393 = state_23344__$1;(statearr_23363_23393[1] = 15);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 12))
{var inst_23335 = (state_23344[2]);var state_23344__$1 = state_23344;var statearr_23364_23394 = state_23344__$1;(statearr_23364_23394[2] = inst_23335);
(statearr_23364_23394[1] = 9);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 13))
{var inst_23303 = (state_23344[8]);var inst_23304 = (state_23344[9]);var inst_23302 = (state_23344[10]);var inst_23301 = (state_23344[11]);var inst_23311 = (state_23344[2]);var inst_23312 = (inst_23304 + 1);var tmp23358 = inst_23303;var tmp23359 = inst_23302;var tmp23360 = inst_23301;var inst_23301__$1 = tmp23360;var inst_23302__$1 = tmp23359;var inst_23303__$1 = tmp23358;var inst_23304__$1 = inst_23312;var state_23344__$1 = (function (){var statearr_23365 = state_23344;(statearr_23365[8] = inst_23303__$1);
(statearr_23365[9] = inst_23304__$1);
(statearr_23365[14] = inst_23311);
(statearr_23365[10] = inst_23302__$1);
(statearr_23365[11] = inst_23301__$1);
return statearr_23365;
})();var statearr_23366_23395 = state_23344__$1;(statearr_23366_23395[2] = null);
(statearr_23366_23395[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 14))
{var inst_23315 = (state_23344[13]);var inst_23317 = cljs.core.chunked_seq_QMARK_(inst_23315);var state_23344__$1 = state_23344;if(inst_23317)
{var statearr_23367_23396 = state_23344__$1;(statearr_23367_23396[1] = 17);
} else
{var statearr_23368_23397 = state_23344__$1;(statearr_23368_23397[1] = 18);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 15))
{var state_23344__$1 = state_23344;var statearr_23369_23398 = state_23344__$1;(statearr_23369_23398[2] = null);
(statearr_23369_23398[1] = 16);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 16))
{var inst_23333 = (state_23344[2]);var state_23344__$1 = state_23344;var statearr_23370_23399 = state_23344__$1;(statearr_23370_23399[2] = inst_23333);
(statearr_23370_23399[1] = 12);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 17))
{var inst_23315 = (state_23344[13]);var inst_23319 = cljs.core.chunk_first(inst_23315);var inst_23320 = cljs.core.chunk_rest(inst_23315);var inst_23321 = cljs.core.count(inst_23319);var inst_23301 = inst_23320;var inst_23302 = inst_23319;var inst_23303 = inst_23321;var inst_23304 = 0;var state_23344__$1 = (function (){var statearr_23371 = state_23344;(statearr_23371[8] = inst_23303);
(statearr_23371[9] = inst_23304);
(statearr_23371[10] = inst_23302);
(statearr_23371[11] = inst_23301);
return statearr_23371;
})();var statearr_23372_23400 = state_23344__$1;(statearr_23372_23400[2] = null);
(statearr_23372_23400[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 18))
{var inst_23315 = (state_23344[13]);var inst_23324 = cljs.core.first(inst_23315);var state_23344__$1 = state_23344;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23344__$1,20,out,inst_23324);
} else
{if((state_val_23345 === 19))
{var inst_23330 = (state_23344[2]);var state_23344__$1 = state_23344;var statearr_23373_23401 = state_23344__$1;(statearr_23373_23401[2] = inst_23330);
(statearr_23373_23401[1] = 16);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23345 === 20))
{var inst_23315 = (state_23344[13]);var inst_23326 = (state_23344[2]);var inst_23327 = cljs.core.next(inst_23315);var inst_23301 = inst_23327;var inst_23302 = null;var inst_23303 = 0;var inst_23304 = 0;var state_23344__$1 = (function (){var statearr_23374 = state_23344;(statearr_23374[8] = inst_23303);
(statearr_23374[9] = inst_23304);
(statearr_23374[10] = inst_23302);
(statearr_23374[11] = inst_23301);
(statearr_23374[15] = inst_23326);
return statearr_23374;
})();var statearr_23375_23402 = state_23344__$1;(statearr_23375_23402[2] = null);
(statearr_23375_23402[1] = 8);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_23379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23379[0] = state_machine__5507__auto__);
(statearr_23379[1] = 1);
return statearr_23379;
});
var state_machine__5507__auto____1 = (function (state_23344){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23344);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object))
{var ex__5510__auto__ = e23380;var statearr_23381_23403 = state_23344;(statearr_23381_23403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23344);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23404 = state_23344;
state_23344 = G__23404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23344){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23382 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23382;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23464){var state_val_23465 = (state_23464[1]);if((state_val_23465 === 1))
{var state_23464__$1 = state_23464;var statearr_23466_23486 = state_23464__$1;(statearr_23466_23486[2] = null);
(statearr_23466_23486[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 2))
{var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23464__$1,4,from);
} else
{if((state_val_23465 === 3))
{var inst_23462 = (state_23464[2]);var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.return_chan(state_23464__$1,inst_23462);
} else
{if((state_val_23465 === 4))
{var inst_23447 = (state_23464[7]);var inst_23447__$1 = (state_23464[2]);var inst_23448 = (inst_23447__$1 == null);var state_23464__$1 = (function (){var statearr_23467 = state_23464;(statearr_23467[7] = inst_23447__$1);
return statearr_23467;
})();if(cljs.core.truth_(inst_23448))
{var statearr_23468_23487 = state_23464__$1;(statearr_23468_23487[1] = 5);
} else
{var statearr_23469_23488 = state_23464__$1;(statearr_23469_23488[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 5))
{var state_23464__$1 = state_23464;if(cljs.core.truth_(close_QMARK_))
{var statearr_23470_23489 = state_23464__$1;(statearr_23470_23489[1] = 8);
} else
{var statearr_23471_23490 = state_23464__$1;(statearr_23471_23490[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 6))
{var inst_23447 = (state_23464[7]);var state_23464__$1 = state_23464;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23464__$1,11,to,inst_23447);
} else
{if((state_val_23465 === 7))
{var inst_23460 = (state_23464[2]);var state_23464__$1 = state_23464;var statearr_23472_23491 = state_23464__$1;(statearr_23472_23491[2] = inst_23460);
(statearr_23472_23491[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 8))
{var inst_23451 = cljs.core.async.close_BANG_(to);var state_23464__$1 = state_23464;var statearr_23473_23492 = state_23464__$1;(statearr_23473_23492[2] = inst_23451);
(statearr_23473_23492[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 9))
{var state_23464__$1 = state_23464;var statearr_23474_23493 = state_23464__$1;(statearr_23474_23493[2] = null);
(statearr_23474_23493[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 10))
{var inst_23454 = (state_23464[2]);var state_23464__$1 = state_23464;var statearr_23475_23494 = state_23464__$1;(statearr_23475_23494[2] = inst_23454);
(statearr_23475_23494[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23465 === 11))
{var inst_23457 = (state_23464[2]);var state_23464__$1 = (function (){var statearr_23476 = state_23464;(statearr_23476[8] = inst_23457);
return statearr_23476;
})();var statearr_23477_23495 = state_23464__$1;(statearr_23477_23495[2] = null);
(statearr_23477_23495[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_23481 = [null,null,null,null,null,null,null,null,null];(statearr_23481[0] = state_machine__5507__auto__);
(statearr_23481[1] = 1);
return statearr_23481;
});
var state_machine__5507__auto____1 = (function (state_23464){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23464);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23482){if((e23482 instanceof Object))
{var ex__5510__auto__ = e23482;var statearr_23483_23496 = state_23464;(statearr_23483_23496[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23464);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23497 = state_23464;
state_23464 = G__23497;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23464){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23484 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23485);
return statearr_23484;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23562){var state_val_23563 = (state_23562[1]);if((state_val_23563 === 1))
{var state_23562__$1 = state_23562;var statearr_23564_23585 = state_23562__$1;(statearr_23564_23585[2] = null);
(statearr_23564_23585[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 2))
{var state_23562__$1 = state_23562;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23562__$1,4,ch);
} else
{if((state_val_23563 === 3))
{var inst_23560 = (state_23562[2]);var state_23562__$1 = state_23562;return cljs.core.async.impl.ioc_helpers.return_chan(state_23562__$1,inst_23560);
} else
{if((state_val_23563 === 4))
{var inst_23543 = (state_23562[7]);var inst_23543__$1 = (state_23562[2]);var inst_23544 = (inst_23543__$1 == null);var state_23562__$1 = (function (){var statearr_23565 = state_23562;(statearr_23565[7] = inst_23543__$1);
return statearr_23565;
})();if(cljs.core.truth_(inst_23544))
{var statearr_23566_23586 = state_23562__$1;(statearr_23566_23586[1] = 5);
} else
{var statearr_23567_23587 = state_23562__$1;(statearr_23567_23587[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 5))
{var inst_23546 = cljs.core.async.close_BANG_(tc);var inst_23547 = cljs.core.async.close_BANG_(fc);var state_23562__$1 = (function (){var statearr_23568 = state_23562;(statearr_23568[8] = inst_23546);
return statearr_23568;
})();var statearr_23569_23588 = state_23562__$1;(statearr_23569_23588[2] = inst_23547);
(statearr_23569_23588[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 6))
{var inst_23543 = (state_23562[7]);var inst_23549 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23543) : p.call(null,inst_23543));var state_23562__$1 = state_23562;if(cljs.core.truth_(inst_23549))
{var statearr_23570_23589 = state_23562__$1;(statearr_23570_23589[1] = 9);
} else
{var statearr_23571_23590 = state_23562__$1;(statearr_23571_23590[1] = 10);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 7))
{var inst_23558 = (state_23562[2]);var state_23562__$1 = state_23562;var statearr_23572_23591 = state_23562__$1;(statearr_23572_23591[2] = inst_23558);
(statearr_23572_23591[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 8))
{var inst_23555 = (state_23562[2]);var state_23562__$1 = (function (){var statearr_23573 = state_23562;(statearr_23573[9] = inst_23555);
return statearr_23573;
})();var statearr_23574_23592 = state_23562__$1;(statearr_23574_23592[2] = null);
(statearr_23574_23592[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 9))
{var state_23562__$1 = state_23562;var statearr_23575_23593 = state_23562__$1;(statearr_23575_23593[2] = tc);
(statearr_23575_23593[1] = 11);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 10))
{var state_23562__$1 = state_23562;var statearr_23576_23594 = state_23562__$1;(statearr_23576_23594[2] = fc);
(statearr_23576_23594[1] = 11);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23563 === 11))
{var inst_23543 = (state_23562[7]);var inst_23553 = (state_23562[2]);var state_23562__$1 = state_23562;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23562__$1,8,inst_23553,inst_23543);
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
var state_machine__5507__auto____0 = (function (){var statearr_23580 = [null,null,null,null,null,null,null,null,null,null];(statearr_23580[0] = state_machine__5507__auto__);
(statearr_23580[1] = 1);
return statearr_23580;
});
var state_machine__5507__auto____1 = (function (state_23562){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23562);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23581){if((e23581 instanceof Object))
{var ex__5510__auto__ = e23581;var statearr_23582_23595 = state_23562;(statearr_23582_23595[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23562);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23596 = state_23562;
state_23562 = G__23596;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23562){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23583 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23584);
return statearr_23583;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23643){var state_val_23644 = (state_23643[1]);if((state_val_23644 === 7))
{var inst_23639 = (state_23643[2]);var state_23643__$1 = state_23643;var statearr_23645_23661 = state_23643__$1;(statearr_23645_23661[2] = inst_23639);
(statearr_23645_23661[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23644 === 6))
{var inst_23632 = (state_23643[7]);var inst_23629 = (state_23643[8]);var inst_23636 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23629,inst_23632) : f.call(null,inst_23629,inst_23632));var inst_23629__$1 = inst_23636;var state_23643__$1 = (function (){var statearr_23646 = state_23643;(statearr_23646[8] = inst_23629__$1);
return statearr_23646;
})();var statearr_23647_23662 = state_23643__$1;(statearr_23647_23662[2] = null);
(statearr_23647_23662[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23644 === 5))
{var inst_23629 = (state_23643[8]);var state_23643__$1 = state_23643;var statearr_23648_23663 = state_23643__$1;(statearr_23648_23663[2] = inst_23629);
(statearr_23648_23663[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23644 === 4))
{var inst_23632 = (state_23643[7]);var inst_23632__$1 = (state_23643[2]);var inst_23633 = (inst_23632__$1 == null);var state_23643__$1 = (function (){var statearr_23649 = state_23643;(statearr_23649[7] = inst_23632__$1);
return statearr_23649;
})();if(cljs.core.truth_(inst_23633))
{var statearr_23650_23664 = state_23643__$1;(statearr_23650_23664[1] = 5);
} else
{var statearr_23651_23665 = state_23643__$1;(statearr_23651_23665[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23644 === 3))
{var inst_23641 = (state_23643[2]);var state_23643__$1 = state_23643;return cljs.core.async.impl.ioc_helpers.return_chan(state_23643__$1,inst_23641);
} else
{if((state_val_23644 === 2))
{var state_23643__$1 = state_23643;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23643__$1,4,ch);
} else
{if((state_val_23644 === 1))
{var inst_23629 = init;var state_23643__$1 = (function (){var statearr_23652 = state_23643;(statearr_23652[8] = inst_23629);
return statearr_23652;
})();var statearr_23653_23666 = state_23643__$1;(statearr_23653_23666[2] = null);
(statearr_23653_23666[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_23657 = [null,null,null,null,null,null,null,null,null];(statearr_23657[0] = state_machine__5507__auto__);
(statearr_23657[1] = 1);
return statearr_23657;
});
var state_machine__5507__auto____1 = (function (state_23643){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23643);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23658){if((e23658 instanceof Object))
{var ex__5510__auto__ = e23658;var statearr_23659_23667 = state_23643;(statearr_23659_23667[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23643);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23668 = state_23643;
state_23643 = G__23668;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23643){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23660 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23660;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23730){var state_val_23731 = (state_23730[1]);if((state_val_23731 === 1))
{var inst_23710 = cljs.core.seq(coll);var inst_23711 = inst_23710;var state_23730__$1 = (function (){var statearr_23732 = state_23730;(statearr_23732[7] = inst_23711);
return statearr_23732;
})();var statearr_23733_23751 = state_23730__$1;(statearr_23733_23751[2] = null);
(statearr_23733_23751[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 2))
{var inst_23711 = (state_23730[7]);var state_23730__$1 = state_23730;if(cljs.core.truth_(inst_23711))
{var statearr_23734_23752 = state_23730__$1;(statearr_23734_23752[1] = 4);
} else
{var statearr_23735_23753 = state_23730__$1;(statearr_23735_23753[1] = 5);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 3))
{var inst_23728 = (state_23730[2]);var state_23730__$1 = state_23730;return cljs.core.async.impl.ioc_helpers.return_chan(state_23730__$1,inst_23728);
} else
{if((state_val_23731 === 4))
{var inst_23711 = (state_23730[7]);var inst_23714 = cljs.core.first(inst_23711);var state_23730__$1 = state_23730;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23730__$1,7,ch,inst_23714);
} else
{if((state_val_23731 === 5))
{var state_23730__$1 = state_23730;if(cljs.core.truth_(close_QMARK_))
{var statearr_23736_23754 = state_23730__$1;(statearr_23736_23754[1] = 8);
} else
{var statearr_23737_23755 = state_23730__$1;(statearr_23737_23755[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 6))
{var inst_23726 = (state_23730[2]);var state_23730__$1 = state_23730;var statearr_23738_23756 = state_23730__$1;(statearr_23738_23756[2] = inst_23726);
(statearr_23738_23756[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 7))
{var inst_23711 = (state_23730[7]);var inst_23716 = (state_23730[2]);var inst_23717 = cljs.core.next(inst_23711);var inst_23711__$1 = inst_23717;var state_23730__$1 = (function (){var statearr_23739 = state_23730;(statearr_23739[7] = inst_23711__$1);
(statearr_23739[8] = inst_23716);
return statearr_23739;
})();var statearr_23740_23757 = state_23730__$1;(statearr_23740_23757[2] = null);
(statearr_23740_23757[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 8))
{var inst_23721 = cljs.core.async.close_BANG_(ch);var state_23730__$1 = state_23730;var statearr_23741_23758 = state_23730__$1;(statearr_23741_23758[2] = inst_23721);
(statearr_23741_23758[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 9))
{var state_23730__$1 = state_23730;var statearr_23742_23759 = state_23730__$1;(statearr_23742_23759[2] = null);
(statearr_23742_23759[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_23731 === 10))
{var inst_23724 = (state_23730[2]);var state_23730__$1 = state_23730;var statearr_23743_23760 = state_23730__$1;(statearr_23743_23760[2] = inst_23724);
(statearr_23743_23760[1] = 6);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_23747 = [null,null,null,null,null,null,null,null,null];(statearr_23747[0] = state_machine__5507__auto__);
(statearr_23747[1] = 1);
return statearr_23747;
});
var state_machine__5507__auto____1 = (function (state_23730){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23730);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object))
{var ex__5510__auto__ = e23748;var statearr_23749_23761 = state_23730;(statearr_23749_23761[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23730);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e23748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__23762 = state_23730;
state_23730 = G__23762;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23730){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23750 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23750;
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
cljs.core.async.Mux = (function (){var obj23764 = {};return obj23764;
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
cljs.core.async.Mult = (function (){var obj23766 = {};return obj23766;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23990 = (function (cs,ch,mult,meta23991){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23991 = meta23991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23990.cljs$lang$type = true;
cljs.core.async.t23990.cljs$lang$ctorStr = "cljs.core.async/t23990";
cljs.core.async.t23990.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23990");
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23992){var self__ = this;
var _23992__$1 = this;return self__.meta23991;
});})(cs))
;
cljs.core.async.t23990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23992,meta23991__$1){var self__ = this;
var _23992__$1 = this;return (new cljs.core.async.t23990(self__.cs,self__.ch,self__.mult,meta23991__$1));
});})(cs))
;
cljs.core.async.__GT_t23990 = ((function (cs){
return (function __GT_t23990(cs__$1,ch__$1,mult__$1,meta23991){return (new cljs.core.async.t23990(cs__$1,ch__$1,mult__$1,meta23991));
});})(cs))
;
}
return (new cljs.core.async.t23990(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24127){var state_val_24128 = (state_24127[1]);if((state_val_24128 === 32))
{var inst_24071 = (state_24127[7]);var inst_23995 = (state_24127[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24127,31,Object,null,30);var inst_24078 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24071,inst_23995,done);var state_24127__$1 = state_24127;var statearr_24129_24214 = state_24127__$1;(statearr_24129_24214[2] = inst_24078);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 1))
{var state_24127__$1 = state_24127;var statearr_24130_24215 = state_24127__$1;(statearr_24130_24215[2] = null);
(statearr_24130_24215[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 33))
{var inst_24084 = (state_24127[9]);var inst_24086 = cljs.core.chunked_seq_QMARK_(inst_24084);var state_24127__$1 = state_24127;if(inst_24086)
{var statearr_24131_24216 = state_24127__$1;(statearr_24131_24216[1] = 36);
} else
{var statearr_24132_24217 = state_24127__$1;(statearr_24132_24217[1] = 37);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 2))
{var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24127__$1,4,ch);
} else
{if((state_val_24128 === 34))
{var state_24127__$1 = state_24127;var statearr_24133_24218 = state_24127__$1;(statearr_24133_24218[2] = null);
(statearr_24133_24218[1] = 35);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 3))
{var inst_24125 = (state_24127[2]);var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.return_chan(state_24127__$1,inst_24125);
} else
{if((state_val_24128 === 35))
{var inst_24109 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24134_24219 = state_24127__$1;(statearr_24134_24219[2] = inst_24109);
(statearr_24134_24219[1] = 29);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 4))
{var inst_23995 = (state_24127[8]);var inst_23995__$1 = (state_24127[2]);var inst_23996 = (inst_23995__$1 == null);var state_24127__$1 = (function (){var statearr_24135 = state_24127;(statearr_24135[8] = inst_23995__$1);
return statearr_24135;
})();if(cljs.core.truth_(inst_23996))
{var statearr_24136_24220 = state_24127__$1;(statearr_24136_24220[1] = 5);
} else
{var statearr_24137_24221 = state_24127__$1;(statearr_24137_24221[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 36))
{var inst_24084 = (state_24127[9]);var inst_24088 = cljs.core.chunk_first(inst_24084);var inst_24089 = cljs.core.chunk_rest(inst_24084);var inst_24090 = cljs.core.count(inst_24088);var inst_24063 = inst_24089;var inst_24064 = inst_24088;var inst_24065 = inst_24090;var inst_24066 = 0;var state_24127__$1 = (function (){var statearr_24138 = state_24127;(statearr_24138[10] = inst_24065);
(statearr_24138[11] = inst_24066);
(statearr_24138[12] = inst_24064);
(statearr_24138[13] = inst_24063);
return statearr_24138;
})();var statearr_24139_24222 = state_24127__$1;(statearr_24139_24222[2] = null);
(statearr_24139_24222[1] = 25);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 5))
{var inst_24002 = cljs.core.deref(cs);var inst_24003 = cljs.core.seq(inst_24002);var inst_24004 = inst_24003;var inst_24005 = null;var inst_24006 = 0;var inst_24007 = 0;var state_24127__$1 = (function (){var statearr_24140 = state_24127;(statearr_24140[14] = inst_24007);
(statearr_24140[15] = inst_24006);
(statearr_24140[16] = inst_24005);
(statearr_24140[17] = inst_24004);
return statearr_24140;
})();var statearr_24141_24223 = state_24127__$1;(statearr_24141_24223[2] = null);
(statearr_24141_24223[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 37))
{var inst_24084 = (state_24127[9]);var inst_24093 = cljs.core.first(inst_24084);var state_24127__$1 = (function (){var statearr_24142 = state_24127;(statearr_24142[18] = inst_24093);
return statearr_24142;
})();var statearr_24143_24224 = state_24127__$1;(statearr_24143_24224[2] = null);
(statearr_24143_24224[1] = 41);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 6))
{var inst_24055 = (state_24127[19]);var inst_24054 = cljs.core.deref(cs);var inst_24055__$1 = cljs.core.keys(inst_24054);var inst_24056 = cljs.core.count(inst_24055__$1);var inst_24057 = cljs.core.reset_BANG_(dctr,inst_24056);var inst_24062 = cljs.core.seq(inst_24055__$1);var inst_24063 = inst_24062;var inst_24064 = null;var inst_24065 = 0;var inst_24066 = 0;var state_24127__$1 = (function (){var statearr_24144 = state_24127;(statearr_24144[20] = inst_24057);
(statearr_24144[19] = inst_24055__$1);
(statearr_24144[10] = inst_24065);
(statearr_24144[11] = inst_24066);
(statearr_24144[12] = inst_24064);
(statearr_24144[13] = inst_24063);
return statearr_24144;
})();var statearr_24145_24225 = state_24127__$1;(statearr_24145_24225[2] = null);
(statearr_24145_24225[1] = 25);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 38))
{var inst_24106 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24146_24226 = state_24127__$1;(statearr_24146_24226[2] = inst_24106);
(statearr_24146_24226[1] = 35);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 7))
{var inst_24123 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24147_24227 = state_24127__$1;(statearr_24147_24227[2] = inst_24123);
(statearr_24147_24227[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 39))
{var inst_24084 = (state_24127[9]);var inst_24102 = (state_24127[2]);var inst_24103 = cljs.core.next(inst_24084);var inst_24063 = inst_24103;var inst_24064 = null;var inst_24065 = 0;var inst_24066 = 0;var state_24127__$1 = (function (){var statearr_24148 = state_24127;(statearr_24148[10] = inst_24065);
(statearr_24148[11] = inst_24066);
(statearr_24148[12] = inst_24064);
(statearr_24148[13] = inst_24063);
(statearr_24148[21] = inst_24102);
return statearr_24148;
})();var statearr_24149_24228 = state_24127__$1;(statearr_24149_24228[2] = null);
(statearr_24149_24228[1] = 25);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 8))
{var inst_24007 = (state_24127[14]);var inst_24006 = (state_24127[15]);var inst_24009 = (inst_24007 < inst_24006);var inst_24010 = inst_24009;var state_24127__$1 = state_24127;if(cljs.core.truth_(inst_24010))
{var statearr_24150_24229 = state_24127__$1;(statearr_24150_24229[1] = 10);
} else
{var statearr_24151_24230 = state_24127__$1;(statearr_24151_24230[1] = 11);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 40))
{var inst_24093 = (state_24127[18]);var inst_24094 = (state_24127[2]);var inst_24095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24096 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24093);var state_24127__$1 = (function (){var statearr_24152 = state_24127;(statearr_24152[22] = inst_24095);
(statearr_24152[23] = inst_24094);
return statearr_24152;
})();var statearr_24153_24231 = state_24127__$1;(statearr_24153_24231[2] = inst_24096);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 9))
{var inst_24052 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24154_24232 = state_24127__$1;(statearr_24154_24232[2] = inst_24052);
(statearr_24154_24232[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 41))
{var inst_23995 = (state_24127[8]);var inst_24093 = (state_24127[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24127,40,Object,null,39);var inst_24100 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24093,inst_23995,done);var state_24127__$1 = state_24127;var statearr_24155_24233 = state_24127__$1;(statearr_24155_24233[2] = inst_24100);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 10))
{var inst_24007 = (state_24127[14]);var inst_24005 = (state_24127[16]);var inst_24013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24005,inst_24007);var inst_24014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24013,0,null);var inst_24015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24013,1,null);var state_24127__$1 = (function (){var statearr_24156 = state_24127;(statearr_24156[24] = inst_24014);
return statearr_24156;
})();if(cljs.core.truth_(inst_24015))
{var statearr_24157_24234 = state_24127__$1;(statearr_24157_24234[1] = 13);
} else
{var statearr_24158_24235 = state_24127__$1;(statearr_24158_24235[1] = 14);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 42))
{var state_24127__$1 = state_24127;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24127__$1,45,dchan);
} else
{if((state_val_24128 === 11))
{var inst_24004 = (state_24127[17]);var inst_24024 = (state_24127[25]);var inst_24024__$1 = cljs.core.seq(inst_24004);var state_24127__$1 = (function (){var statearr_24159 = state_24127;(statearr_24159[25] = inst_24024__$1);
return statearr_24159;
})();if(inst_24024__$1)
{var statearr_24160_24236 = state_24127__$1;(statearr_24160_24236[1] = 16);
} else
{var statearr_24161_24237 = state_24127__$1;(statearr_24161_24237[1] = 17);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 43))
{var state_24127__$1 = state_24127;var statearr_24162_24238 = state_24127__$1;(statearr_24162_24238[2] = null);
(statearr_24162_24238[1] = 44);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 12))
{var inst_24050 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24163_24239 = state_24127__$1;(statearr_24163_24239[2] = inst_24050);
(statearr_24163_24239[1] = 9);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 44))
{var inst_24120 = (state_24127[2]);var state_24127__$1 = (function (){var statearr_24164 = state_24127;(statearr_24164[26] = inst_24120);
return statearr_24164;
})();var statearr_24165_24240 = state_24127__$1;(statearr_24165_24240[2] = null);
(statearr_24165_24240[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 13))
{var inst_24014 = (state_24127[24]);var inst_24017 = cljs.core.async.close_BANG_(inst_24014);var state_24127__$1 = state_24127;var statearr_24166_24241 = state_24127__$1;(statearr_24166_24241[2] = inst_24017);
(statearr_24166_24241[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 45))
{var inst_24117 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24170_24242 = state_24127__$1;(statearr_24170_24242[2] = inst_24117);
(statearr_24170_24242[1] = 44);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 14))
{var state_24127__$1 = state_24127;var statearr_24171_24243 = state_24127__$1;(statearr_24171_24243[2] = null);
(statearr_24171_24243[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 15))
{var inst_24007 = (state_24127[14]);var inst_24006 = (state_24127[15]);var inst_24005 = (state_24127[16]);var inst_24004 = (state_24127[17]);var inst_24020 = (state_24127[2]);var inst_24021 = (inst_24007 + 1);var tmp24167 = inst_24006;var tmp24168 = inst_24005;var tmp24169 = inst_24004;var inst_24004__$1 = tmp24169;var inst_24005__$1 = tmp24168;var inst_24006__$1 = tmp24167;var inst_24007__$1 = inst_24021;var state_24127__$1 = (function (){var statearr_24172 = state_24127;(statearr_24172[14] = inst_24007__$1);
(statearr_24172[15] = inst_24006__$1);
(statearr_24172[16] = inst_24005__$1);
(statearr_24172[17] = inst_24004__$1);
(statearr_24172[27] = inst_24020);
return statearr_24172;
})();var statearr_24173_24244 = state_24127__$1;(statearr_24173_24244[2] = null);
(statearr_24173_24244[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 16))
{var inst_24024 = (state_24127[25]);var inst_24026 = cljs.core.chunked_seq_QMARK_(inst_24024);var state_24127__$1 = state_24127;if(inst_24026)
{var statearr_24174_24245 = state_24127__$1;(statearr_24174_24245[1] = 19);
} else
{var statearr_24175_24246 = state_24127__$1;(statearr_24175_24246[1] = 20);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 17))
{var state_24127__$1 = state_24127;var statearr_24176_24247 = state_24127__$1;(statearr_24176_24247[2] = null);
(statearr_24176_24247[1] = 18);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 18))
{var inst_24048 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24177_24248 = state_24127__$1;(statearr_24177_24248[2] = inst_24048);
(statearr_24177_24248[1] = 12);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 19))
{var inst_24024 = (state_24127[25]);var inst_24028 = cljs.core.chunk_first(inst_24024);var inst_24029 = cljs.core.chunk_rest(inst_24024);var inst_24030 = cljs.core.count(inst_24028);var inst_24004 = inst_24029;var inst_24005 = inst_24028;var inst_24006 = inst_24030;var inst_24007 = 0;var state_24127__$1 = (function (){var statearr_24178 = state_24127;(statearr_24178[14] = inst_24007);
(statearr_24178[15] = inst_24006);
(statearr_24178[16] = inst_24005);
(statearr_24178[17] = inst_24004);
return statearr_24178;
})();var statearr_24179_24249 = state_24127__$1;(statearr_24179_24249[2] = null);
(statearr_24179_24249[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 20))
{var inst_24024 = (state_24127[25]);var inst_24034 = cljs.core.first(inst_24024);var inst_24035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24034,0,null);var inst_24036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24034,1,null);var state_24127__$1 = (function (){var statearr_24180 = state_24127;(statearr_24180[28] = inst_24035);
return statearr_24180;
})();if(cljs.core.truth_(inst_24036))
{var statearr_24181_24250 = state_24127__$1;(statearr_24181_24250[1] = 22);
} else
{var statearr_24182_24251 = state_24127__$1;(statearr_24182_24251[1] = 23);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 21))
{var inst_24045 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24183_24252 = state_24127__$1;(statearr_24183_24252[2] = inst_24045);
(statearr_24183_24252[1] = 18);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 22))
{var inst_24035 = (state_24127[28]);var inst_24038 = cljs.core.async.close_BANG_(inst_24035);var state_24127__$1 = state_24127;var statearr_24184_24253 = state_24127__$1;(statearr_24184_24253[2] = inst_24038);
(statearr_24184_24253[1] = 24);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 23))
{var state_24127__$1 = state_24127;var statearr_24185_24254 = state_24127__$1;(statearr_24185_24254[2] = null);
(statearr_24185_24254[1] = 24);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 24))
{var inst_24024 = (state_24127[25]);var inst_24041 = (state_24127[2]);var inst_24042 = cljs.core.next(inst_24024);var inst_24004 = inst_24042;var inst_24005 = null;var inst_24006 = 0;var inst_24007 = 0;var state_24127__$1 = (function (){var statearr_24186 = state_24127;(statearr_24186[14] = inst_24007);
(statearr_24186[29] = inst_24041);
(statearr_24186[15] = inst_24006);
(statearr_24186[16] = inst_24005);
(statearr_24186[17] = inst_24004);
return statearr_24186;
})();var statearr_24187_24255 = state_24127__$1;(statearr_24187_24255[2] = null);
(statearr_24187_24255[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 25))
{var inst_24065 = (state_24127[10]);var inst_24066 = (state_24127[11]);var inst_24068 = (inst_24066 < inst_24065);var inst_24069 = inst_24068;var state_24127__$1 = state_24127;if(cljs.core.truth_(inst_24069))
{var statearr_24188_24256 = state_24127__$1;(statearr_24188_24256[1] = 27);
} else
{var statearr_24189_24257 = state_24127__$1;(statearr_24189_24257[1] = 28);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 26))
{var inst_24055 = (state_24127[19]);var inst_24113 = (state_24127[2]);var inst_24114 = cljs.core.seq(inst_24055);var state_24127__$1 = (function (){var statearr_24190 = state_24127;(statearr_24190[30] = inst_24113);
return statearr_24190;
})();if(inst_24114)
{var statearr_24191_24258 = state_24127__$1;(statearr_24191_24258[1] = 42);
} else
{var statearr_24192_24259 = state_24127__$1;(statearr_24192_24259[1] = 43);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 27))
{var inst_24066 = (state_24127[11]);var inst_24064 = (state_24127[12]);var inst_24071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24064,inst_24066);var state_24127__$1 = (function (){var statearr_24193 = state_24127;(statearr_24193[7] = inst_24071);
return statearr_24193;
})();var statearr_24194_24260 = state_24127__$1;(statearr_24194_24260[2] = null);
(statearr_24194_24260[1] = 32);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 28))
{var inst_24084 = (state_24127[9]);var inst_24063 = (state_24127[13]);var inst_24084__$1 = cljs.core.seq(inst_24063);var state_24127__$1 = (function (){var statearr_24198 = state_24127;(statearr_24198[9] = inst_24084__$1);
return statearr_24198;
})();if(inst_24084__$1)
{var statearr_24199_24261 = state_24127__$1;(statearr_24199_24261[1] = 33);
} else
{var statearr_24200_24262 = state_24127__$1;(statearr_24200_24262[1] = 34);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 29))
{var inst_24111 = (state_24127[2]);var state_24127__$1 = state_24127;var statearr_24201_24263 = state_24127__$1;(statearr_24201_24263[2] = inst_24111);
(statearr_24201_24263[1] = 26);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 30))
{var inst_24065 = (state_24127[10]);var inst_24066 = (state_24127[11]);var inst_24064 = (state_24127[12]);var inst_24063 = (state_24127[13]);var inst_24080 = (state_24127[2]);var inst_24081 = (inst_24066 + 1);var tmp24195 = inst_24065;var tmp24196 = inst_24064;var tmp24197 = inst_24063;var inst_24063__$1 = tmp24197;var inst_24064__$1 = tmp24196;var inst_24065__$1 = tmp24195;var inst_24066__$1 = inst_24081;var state_24127__$1 = (function (){var statearr_24202 = state_24127;(statearr_24202[10] = inst_24065__$1);
(statearr_24202[11] = inst_24066__$1);
(statearr_24202[12] = inst_24064__$1);
(statearr_24202[13] = inst_24063__$1);
(statearr_24202[31] = inst_24080);
return statearr_24202;
})();var statearr_24203_24264 = state_24127__$1;(statearr_24203_24264[2] = null);
(statearr_24203_24264[1] = 25);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24128 === 31))
{var inst_24071 = (state_24127[7]);var inst_24072 = (state_24127[2]);var inst_24073 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24074 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24071);var state_24127__$1 = (function (){var statearr_24204 = state_24127;(statearr_24204[32] = inst_24073);
(statearr_24204[33] = inst_24072);
return statearr_24204;
})();var statearr_24205_24265 = state_24127__$1;(statearr_24205_24265[2] = inst_24074);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127__$1);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_24209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24209[0] = state_machine__5507__auto__);
(statearr_24209[1] = 1);
return statearr_24209;
});
var state_machine__5507__auto____1 = (function (state_24127){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24127);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24210){if((e24210 instanceof Object))
{var ex__5510__auto__ = e24210;var statearr_24211_24266 = state_24127;(statearr_24211_24266[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24127);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e24210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__24267 = state_24127;
state_24127 = G__24267;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24127){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24212 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24213);
return statearr_24212;
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
cljs.core.async.Mix = (function (){var obj24269 = {};return obj24269;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,null,cljs.core.constant$keyword$206,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$207);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$206);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$207,chs);var pauses = pick(cljs.core.constant$keyword$205,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$208,solos,cljs.core.constant$keyword$209,pick(cljs.core.constant$keyword$206,chs),cljs.core.constant$keyword$210,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$205)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24379 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24379 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24380){
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
this.meta24380 = meta24380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24379.cljs$lang$type = true;
cljs.core.async.t24379.cljs$lang$ctorStr = "cljs.core.async/t24379";
cljs.core.async.t24379.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24379");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24379.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24381){var self__ = this;
var _24381__$1 = this;return self__.meta24380;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24381,meta24380__$1){var self__ = this;
var _24381__$1 = this;return (new cljs.core.async.t24379(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24380__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24379 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24379(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24380){return (new cljs.core.async.t24379(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24380));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24379(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24446){var state_val_24447 = (state_24446[1]);if((state_val_24447 === 1))
{var inst_24385 = (state_24446[7]);var inst_24385__$1 = calc_state();var inst_24386 = cljs.core.seq_QMARK_(inst_24385__$1);var state_24446__$1 = (function (){var statearr_24448 = state_24446;(statearr_24448[7] = inst_24385__$1);
return statearr_24448;
})();if(inst_24386)
{var statearr_24449_24489 = state_24446__$1;(statearr_24449_24489[1] = 2);
} else
{var statearr_24450_24490 = state_24446__$1;(statearr_24450_24490[1] = 3);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 2))
{var inst_24385 = (state_24446[7]);var inst_24388 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24385);var state_24446__$1 = state_24446;var statearr_24451_24491 = state_24446__$1;(statearr_24451_24491[2] = inst_24388);
(statearr_24451_24491[1] = 4);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 3))
{var inst_24385 = (state_24446[7]);var state_24446__$1 = state_24446;var statearr_24452_24492 = state_24446__$1;(statearr_24452_24492[2] = inst_24385);
(statearr_24452_24492[1] = 4);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 4))
{var inst_24385 = (state_24446[7]);var inst_24391 = (state_24446[2]);var inst_24392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24391,cljs.core.constant$keyword$210);var inst_24393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24391,cljs.core.constant$keyword$209);var inst_24394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24391,cljs.core.constant$keyword$208);var inst_24395 = inst_24385;var state_24446__$1 = (function (){var statearr_24453 = state_24446;(statearr_24453[8] = inst_24395);
(statearr_24453[9] = inst_24392);
(statearr_24453[10] = inst_24394);
(statearr_24453[11] = inst_24393);
return statearr_24453;
})();var statearr_24454_24493 = state_24446__$1;(statearr_24454_24493[2] = null);
(statearr_24454_24493[1] = 5);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 5))
{var inst_24395 = (state_24446[8]);var inst_24398 = cljs.core.seq_QMARK_(inst_24395);var state_24446__$1 = state_24446;if(inst_24398)
{var statearr_24455_24494 = state_24446__$1;(statearr_24455_24494[1] = 7);
} else
{var statearr_24456_24495 = state_24446__$1;(statearr_24456_24495[1] = 8);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 6))
{var inst_24444 = (state_24446[2]);var state_24446__$1 = state_24446;return cljs.core.async.impl.ioc_helpers.return_chan(state_24446__$1,inst_24444);
} else
{if((state_val_24447 === 7))
{var inst_24395 = (state_24446[8]);var inst_24400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24395);var state_24446__$1 = state_24446;var statearr_24457_24496 = state_24446__$1;(statearr_24457_24496[2] = inst_24400);
(statearr_24457_24496[1] = 9);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 8))
{var inst_24395 = (state_24446[8]);var state_24446__$1 = state_24446;var statearr_24458_24497 = state_24446__$1;(statearr_24458_24497[2] = inst_24395);
(statearr_24458_24497[1] = 9);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 9))
{var inst_24403 = (state_24446[12]);var inst_24403__$1 = (state_24446[2]);var inst_24404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24403__$1,cljs.core.constant$keyword$210);var inst_24405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24403__$1,cljs.core.constant$keyword$209);var inst_24406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24403__$1,cljs.core.constant$keyword$208);var state_24446__$1 = (function (){var statearr_24459 = state_24446;(statearr_24459[12] = inst_24403__$1);
(statearr_24459[13] = inst_24405);
(statearr_24459[14] = inst_24406);
return statearr_24459;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24446__$1,10,inst_24404);
} else
{if((state_val_24447 === 10))
{var inst_24411 = (state_24446[15]);var inst_24410 = (state_24446[16]);var inst_24409 = (state_24446[2]);var inst_24410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24409,0,null);var inst_24411__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24409,1,null);var inst_24412 = (inst_24410__$1 == null);var inst_24413 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24411__$1,change);var inst_24414 = (inst_24412) || (inst_24413);var state_24446__$1 = (function (){var statearr_24460 = state_24446;(statearr_24460[15] = inst_24411__$1);
(statearr_24460[16] = inst_24410__$1);
return statearr_24460;
})();if(cljs.core.truth_(inst_24414))
{var statearr_24461_24498 = state_24446__$1;(statearr_24461_24498[1] = 11);
} else
{var statearr_24462_24499 = state_24446__$1;(statearr_24462_24499[1] = 12);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 11))
{var inst_24410 = (state_24446[16]);var inst_24416 = (inst_24410 == null);var state_24446__$1 = state_24446;if(cljs.core.truth_(inst_24416))
{var statearr_24463_24500 = state_24446__$1;(statearr_24463_24500[1] = 14);
} else
{var statearr_24464_24501 = state_24446__$1;(statearr_24464_24501[1] = 15);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 12))
{var inst_24411 = (state_24446[15]);var inst_24406 = (state_24446[14]);var inst_24425 = (state_24446[17]);var inst_24425__$1 = (inst_24406.cljs$core$IFn$_invoke$arity$1 ? inst_24406.cljs$core$IFn$_invoke$arity$1(inst_24411) : inst_24406.call(null,inst_24411));var state_24446__$1 = (function (){var statearr_24465 = state_24446;(statearr_24465[17] = inst_24425__$1);
return statearr_24465;
})();if(cljs.core.truth_(inst_24425__$1))
{var statearr_24466_24502 = state_24446__$1;(statearr_24466_24502[1] = 17);
} else
{var statearr_24467_24503 = state_24446__$1;(statearr_24467_24503[1] = 18);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 13))
{var inst_24442 = (state_24446[2]);var state_24446__$1 = state_24446;var statearr_24468_24504 = state_24446__$1;(statearr_24468_24504[2] = inst_24442);
(statearr_24468_24504[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 14))
{var inst_24411 = (state_24446[15]);var inst_24418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24411);var state_24446__$1 = state_24446;var statearr_24469_24505 = state_24446__$1;(statearr_24469_24505[2] = inst_24418);
(statearr_24469_24505[1] = 16);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 15))
{var state_24446__$1 = state_24446;var statearr_24470_24506 = state_24446__$1;(statearr_24470_24506[2] = null);
(statearr_24470_24506[1] = 16);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 16))
{var inst_24421 = (state_24446[2]);var inst_24422 = calc_state();var inst_24395 = inst_24422;var state_24446__$1 = (function (){var statearr_24471 = state_24446;(statearr_24471[8] = inst_24395);
(statearr_24471[18] = inst_24421);
return statearr_24471;
})();var statearr_24472_24507 = state_24446__$1;(statearr_24472_24507[2] = null);
(statearr_24472_24507[1] = 5);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 17))
{var inst_24425 = (state_24446[17]);var state_24446__$1 = state_24446;var statearr_24473_24508 = state_24446__$1;(statearr_24473_24508[2] = inst_24425);
(statearr_24473_24508[1] = 19);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 18))
{var inst_24411 = (state_24446[15]);var inst_24405 = (state_24446[13]);var inst_24406 = (state_24446[14]);var inst_24428 = cljs.core.empty_QMARK_(inst_24406);var inst_24429 = (inst_24405.cljs$core$IFn$_invoke$arity$1 ? inst_24405.cljs$core$IFn$_invoke$arity$1(inst_24411) : inst_24405.call(null,inst_24411));var inst_24430 = cljs.core.not(inst_24429);var inst_24431 = (inst_24428) && (inst_24430);var state_24446__$1 = state_24446;var statearr_24474_24509 = state_24446__$1;(statearr_24474_24509[2] = inst_24431);
(statearr_24474_24509[1] = 19);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 19))
{var inst_24433 = (state_24446[2]);var state_24446__$1 = state_24446;if(cljs.core.truth_(inst_24433))
{var statearr_24475_24510 = state_24446__$1;(statearr_24475_24510[1] = 20);
} else
{var statearr_24476_24511 = state_24446__$1;(statearr_24476_24511[1] = 21);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 20))
{var inst_24410 = (state_24446[16]);var state_24446__$1 = state_24446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24446__$1,23,out,inst_24410);
} else
{if((state_val_24447 === 21))
{var state_24446__$1 = state_24446;var statearr_24477_24512 = state_24446__$1;(statearr_24477_24512[2] = null);
(statearr_24477_24512[1] = 22);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 22))
{var inst_24403 = (state_24446[12]);var inst_24439 = (state_24446[2]);var inst_24395 = inst_24403;var state_24446__$1 = (function (){var statearr_24478 = state_24446;(statearr_24478[19] = inst_24439);
(statearr_24478[8] = inst_24395);
return statearr_24478;
})();var statearr_24479_24513 = state_24446__$1;(statearr_24479_24513[2] = null);
(statearr_24479_24513[1] = 5);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24447 === 23))
{var inst_24436 = (state_24446[2]);var state_24446__$1 = state_24446;var statearr_24480_24514 = state_24446__$1;(statearr_24480_24514[2] = inst_24436);
(statearr_24480_24514[1] = 22);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_24484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24484[0] = state_machine__5507__auto__);
(statearr_24484[1] = 1);
return statearr_24484;
});
var state_machine__5507__auto____1 = (function (state_24446){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24446);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object))
{var ex__5510__auto__ = e24485;var statearr_24486_24515 = state_24446;(statearr_24486_24515[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24446);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e24485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__24516 = state_24446;
state_24446 = G__24516;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24446){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24487 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24488);
return statearr_24487;
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
cljs.core.async.Pub = (function (){var obj24518 = {};return obj24518;
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
return (function (p1__24519_SHARP_){if(cljs.core.truth_((p1__24519_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24519_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24519_SHARP_.call(null,topic))))
{return p1__24519_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24519_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24644 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24645){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24644.cljs$lang$type = true;
cljs.core.async.t24644.cljs$lang$ctorStr = "cljs.core.async/t24644";
cljs.core.async.t24644.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24644");
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24646){var self__ = this;
var _24646__$1 = this;return self__.meta24645;
});})(mults,ensure_mult))
;
cljs.core.async.t24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24646,meta24645__$1){var self__ = this;
var _24646__$1 = this;return (new cljs.core.async.t24644(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24645__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24644 = ((function (mults,ensure_mult){
return (function __GT_t24644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24645){return (new cljs.core.async.t24644(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24645));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24644(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24720){var state_val_24721 = (state_24720[1]);if((state_val_24721 === 1))
{var state_24720__$1 = state_24720;var statearr_24722_24769 = state_24720__$1;(statearr_24722_24769[2] = null);
(statearr_24722_24769[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 2))
{var state_24720__$1 = state_24720;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24720__$1,4,ch);
} else
{if((state_val_24721 === 3))
{var inst_24718 = (state_24720[2]);var state_24720__$1 = state_24720;return cljs.core.async.impl.ioc_helpers.return_chan(state_24720__$1,inst_24718);
} else
{if((state_val_24721 === 4))
{var inst_24649 = (state_24720[7]);var inst_24649__$1 = (state_24720[2]);var inst_24650 = (inst_24649__$1 == null);var state_24720__$1 = (function (){var statearr_24723 = state_24720;(statearr_24723[7] = inst_24649__$1);
return statearr_24723;
})();if(cljs.core.truth_(inst_24650))
{var statearr_24724_24770 = state_24720__$1;(statearr_24724_24770[1] = 5);
} else
{var statearr_24725_24771 = state_24720__$1;(statearr_24725_24771[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 5))
{var inst_24656 = cljs.core.deref(mults);var inst_24657 = cljs.core.vals(inst_24656);var inst_24658 = cljs.core.seq(inst_24657);var inst_24659 = inst_24658;var inst_24660 = null;var inst_24661 = 0;var inst_24662 = 0;var state_24720__$1 = (function (){var statearr_24726 = state_24720;(statearr_24726[8] = inst_24661);
(statearr_24726[9] = inst_24662);
(statearr_24726[10] = inst_24660);
(statearr_24726[11] = inst_24659);
return statearr_24726;
})();var statearr_24727_24772 = state_24720__$1;(statearr_24727_24772[2] = null);
(statearr_24727_24772[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 6))
{var inst_24699 = (state_24720[12]);var inst_24697 = (state_24720[13]);var inst_24649 = (state_24720[7]);var inst_24697__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24649) : topic_fn.call(null,inst_24649));var inst_24698 = cljs.core.deref(mults);var inst_24699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24698,inst_24697__$1);var state_24720__$1 = (function (){var statearr_24728 = state_24720;(statearr_24728[12] = inst_24699__$1);
(statearr_24728[13] = inst_24697__$1);
return statearr_24728;
})();if(cljs.core.truth_(inst_24699__$1))
{var statearr_24729_24773 = state_24720__$1;(statearr_24729_24773[1] = 19);
} else
{var statearr_24730_24774 = state_24720__$1;(statearr_24730_24774[1] = 20);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 7))
{var inst_24716 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24731_24775 = state_24720__$1;(statearr_24731_24775[2] = inst_24716);
(statearr_24731_24775[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 8))
{var inst_24661 = (state_24720[8]);var inst_24662 = (state_24720[9]);var inst_24664 = (inst_24662 < inst_24661);var inst_24665 = inst_24664;var state_24720__$1 = state_24720;if(cljs.core.truth_(inst_24665))
{var statearr_24735_24776 = state_24720__$1;(statearr_24735_24776[1] = 10);
} else
{var statearr_24736_24777 = state_24720__$1;(statearr_24736_24777[1] = 11);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 9))
{var inst_24695 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24737_24778 = state_24720__$1;(statearr_24737_24778[2] = inst_24695);
(statearr_24737_24778[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 10))
{var inst_24661 = (state_24720[8]);var inst_24662 = (state_24720[9]);var inst_24660 = (state_24720[10]);var inst_24659 = (state_24720[11]);var inst_24667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24660,inst_24662);var inst_24668 = cljs.core.async.muxch_STAR_(inst_24667);var inst_24669 = cljs.core.async.close_BANG_(inst_24668);var inst_24670 = (inst_24662 + 1);var tmp24732 = inst_24661;var tmp24733 = inst_24660;var tmp24734 = inst_24659;var inst_24659__$1 = tmp24734;var inst_24660__$1 = tmp24733;var inst_24661__$1 = tmp24732;var inst_24662__$1 = inst_24670;var state_24720__$1 = (function (){var statearr_24738 = state_24720;(statearr_24738[8] = inst_24661__$1);
(statearr_24738[9] = inst_24662__$1);
(statearr_24738[10] = inst_24660__$1);
(statearr_24738[14] = inst_24669);
(statearr_24738[11] = inst_24659__$1);
return statearr_24738;
})();var statearr_24739_24779 = state_24720__$1;(statearr_24739_24779[2] = null);
(statearr_24739_24779[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 11))
{var inst_24673 = (state_24720[15]);var inst_24659 = (state_24720[11]);var inst_24673__$1 = cljs.core.seq(inst_24659);var state_24720__$1 = (function (){var statearr_24740 = state_24720;(statearr_24740[15] = inst_24673__$1);
return statearr_24740;
})();if(inst_24673__$1)
{var statearr_24741_24780 = state_24720__$1;(statearr_24741_24780[1] = 13);
} else
{var statearr_24742_24781 = state_24720__$1;(statearr_24742_24781[1] = 14);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 12))
{var inst_24693 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24743_24782 = state_24720__$1;(statearr_24743_24782[2] = inst_24693);
(statearr_24743_24782[1] = 9);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 13))
{var inst_24673 = (state_24720[15]);var inst_24675 = cljs.core.chunked_seq_QMARK_(inst_24673);var state_24720__$1 = state_24720;if(inst_24675)
{var statearr_24744_24783 = state_24720__$1;(statearr_24744_24783[1] = 16);
} else
{var statearr_24745_24784 = state_24720__$1;(statearr_24745_24784[1] = 17);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 14))
{var state_24720__$1 = state_24720;var statearr_24746_24785 = state_24720__$1;(statearr_24746_24785[2] = null);
(statearr_24746_24785[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 15))
{var inst_24691 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24747_24786 = state_24720__$1;(statearr_24747_24786[2] = inst_24691);
(statearr_24747_24786[1] = 12);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 16))
{var inst_24673 = (state_24720[15]);var inst_24677 = cljs.core.chunk_first(inst_24673);var inst_24678 = cljs.core.chunk_rest(inst_24673);var inst_24679 = cljs.core.count(inst_24677);var inst_24659 = inst_24678;var inst_24660 = inst_24677;var inst_24661 = inst_24679;var inst_24662 = 0;var state_24720__$1 = (function (){var statearr_24748 = state_24720;(statearr_24748[8] = inst_24661);
(statearr_24748[9] = inst_24662);
(statearr_24748[10] = inst_24660);
(statearr_24748[11] = inst_24659);
return statearr_24748;
})();var statearr_24749_24787 = state_24720__$1;(statearr_24749_24787[2] = null);
(statearr_24749_24787[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 17))
{var inst_24673 = (state_24720[15]);var inst_24682 = cljs.core.first(inst_24673);var inst_24683 = cljs.core.async.muxch_STAR_(inst_24682);var inst_24684 = cljs.core.async.close_BANG_(inst_24683);var inst_24685 = cljs.core.next(inst_24673);var inst_24659 = inst_24685;var inst_24660 = null;var inst_24661 = 0;var inst_24662 = 0;var state_24720__$1 = (function (){var statearr_24750 = state_24720;(statearr_24750[16] = inst_24684);
(statearr_24750[8] = inst_24661);
(statearr_24750[9] = inst_24662);
(statearr_24750[10] = inst_24660);
(statearr_24750[11] = inst_24659);
return statearr_24750;
})();var statearr_24751_24788 = state_24720__$1;(statearr_24751_24788[2] = null);
(statearr_24751_24788[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 18))
{var inst_24688 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24752_24789 = state_24720__$1;(statearr_24752_24789[2] = inst_24688);
(statearr_24752_24789[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 19))
{var state_24720__$1 = state_24720;var statearr_24753_24790 = state_24720__$1;(statearr_24753_24790[2] = null);
(statearr_24753_24790[1] = 24);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 20))
{var state_24720__$1 = state_24720;var statearr_24754_24791 = state_24720__$1;(statearr_24754_24791[2] = null);
(statearr_24754_24791[1] = 21);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 21))
{var inst_24713 = (state_24720[2]);var state_24720__$1 = (function (){var statearr_24755 = state_24720;(statearr_24755[17] = inst_24713);
return statearr_24755;
})();var statearr_24756_24792 = state_24720__$1;(statearr_24756_24792[2] = null);
(statearr_24756_24792[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 22))
{var inst_24710 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24757_24793 = state_24720__$1;(statearr_24757_24793[2] = inst_24710);
(statearr_24757_24793[1] = 21);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 23))
{var inst_24697 = (state_24720[13]);var inst_24701 = (state_24720[2]);var inst_24702 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24697);var state_24720__$1 = (function (){var statearr_24758 = state_24720;(statearr_24758[18] = inst_24701);
return statearr_24758;
})();var statearr_24759_24794 = state_24720__$1;(statearr_24759_24794[2] = inst_24702);
cljs.core.async.impl.ioc_helpers.process_exception(state_24720__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24721 === 24))
{var inst_24699 = (state_24720[12]);var inst_24649 = (state_24720[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24720,23,Object,null,22);var inst_24706 = cljs.core.async.muxch_STAR_(inst_24699);var state_24720__$1 = state_24720;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24720__$1,25,inst_24706,inst_24649);
} else
{if((state_val_24721 === 25))
{var inst_24708 = (state_24720[2]);var state_24720__$1 = state_24720;var statearr_24760_24795 = state_24720__$1;(statearr_24760_24795[2] = inst_24708);
cljs.core.async.impl.ioc_helpers.process_exception(state_24720__$1);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_24764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24764[0] = state_machine__5507__auto__);
(statearr_24764[1] = 1);
return statearr_24764;
});
var state_machine__5507__auto____1 = (function (state_24720){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24720);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24765){if((e24765 instanceof Object))
{var ex__5510__auto__ = e24765;var statearr_24766_24796 = state_24720;(statearr_24766_24796[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24720);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e24765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__24797 = state_24720;
state_24720 = G__24797;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24720){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24767 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24768);
return statearr_24767;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24904){var state_val_24905 = (state_24904[1]);if((state_val_24905 === 1))
{var state_24904__$1 = state_24904;var statearr_24906_24935 = state_24904__$1;(statearr_24906_24935[2] = null);
(statearr_24906_24935[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 2))
{var inst_24867 = cljs.core.reset_BANG_(dctr,cnt);var inst_24868 = 0;var state_24904__$1 = (function (){var statearr_24907 = state_24904;(statearr_24907[7] = inst_24867);
(statearr_24907[8] = inst_24868);
return statearr_24907;
})();var statearr_24908_24936 = state_24904__$1;(statearr_24908_24936[2] = null);
(statearr_24908_24936[1] = 4);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 3))
{var inst_24902 = (state_24904[2]);var state_24904__$1 = state_24904;return cljs.core.async.impl.ioc_helpers.return_chan(state_24904__$1,inst_24902);
} else
{if((state_val_24905 === 4))
{var inst_24868 = (state_24904[8]);var inst_24870 = (inst_24868 < cnt);var state_24904__$1 = state_24904;if(cljs.core.truth_(inst_24870))
{var statearr_24909_24937 = state_24904__$1;(statearr_24909_24937[1] = 6);
} else
{var statearr_24910_24938 = state_24904__$1;(statearr_24910_24938[1] = 7);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 5))
{var inst_24888 = (state_24904[2]);var state_24904__$1 = (function (){var statearr_24911 = state_24904;(statearr_24911[9] = inst_24888);
return statearr_24911;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24904__$1,12,dchan);
} else
{if((state_val_24905 === 6))
{var state_24904__$1 = state_24904;var statearr_24912_24939 = state_24904__$1;(statearr_24912_24939[2] = null);
(statearr_24912_24939[1] = 11);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 7))
{var state_24904__$1 = state_24904;var statearr_24913_24940 = state_24904__$1;(statearr_24913_24940[2] = null);
(statearr_24913_24940[1] = 8);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 8))
{var inst_24886 = (state_24904[2]);var state_24904__$1 = state_24904;var statearr_24914_24941 = state_24904__$1;(statearr_24914_24941[2] = inst_24886);
(statearr_24914_24941[1] = 5);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 9))
{var inst_24868 = (state_24904[8]);var inst_24881 = (state_24904[2]);var inst_24882 = (inst_24868 + 1);var inst_24868__$1 = inst_24882;var state_24904__$1 = (function (){var statearr_24915 = state_24904;(statearr_24915[10] = inst_24881);
(statearr_24915[8] = inst_24868__$1);
return statearr_24915;
})();var statearr_24916_24942 = state_24904__$1;(statearr_24916_24942[2] = null);
(statearr_24916_24942[1] = 4);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 10))
{var inst_24872 = (state_24904[2]);var inst_24873 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24904__$1 = (function (){var statearr_24917 = state_24904;(statearr_24917[11] = inst_24872);
return statearr_24917;
})();var statearr_24918_24943 = state_24904__$1;(statearr_24918_24943[2] = inst_24873);
cljs.core.async.impl.ioc_helpers.process_exception(state_24904__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 11))
{var inst_24868 = (state_24904[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24904,10,Object,null,9);var inst_24877 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24868) : chs__$1.call(null,inst_24868));var inst_24878 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24868) : done.call(null,inst_24868));var inst_24879 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24877,inst_24878);var state_24904__$1 = state_24904;var statearr_24919_24944 = state_24904__$1;(statearr_24919_24944[2] = inst_24879);
cljs.core.async.impl.ioc_helpers.process_exception(state_24904__$1);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 12))
{var inst_24890 = (state_24904[12]);var inst_24890__$1 = (state_24904[2]);var inst_24891 = cljs.core.some(cljs.core.nil_QMARK_,inst_24890__$1);var state_24904__$1 = (function (){var statearr_24920 = state_24904;(statearr_24920[12] = inst_24890__$1);
return statearr_24920;
})();if(cljs.core.truth_(inst_24891))
{var statearr_24921_24945 = state_24904__$1;(statearr_24921_24945[1] = 13);
} else
{var statearr_24922_24946 = state_24904__$1;(statearr_24922_24946[1] = 14);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 13))
{var inst_24893 = cljs.core.async.close_BANG_(out);var state_24904__$1 = state_24904;var statearr_24923_24947 = state_24904__$1;(statearr_24923_24947[2] = inst_24893);
(statearr_24923_24947[1] = 15);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 14))
{var inst_24890 = (state_24904[12]);var inst_24895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24890);var state_24904__$1 = state_24904;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24904__$1,16,out,inst_24895);
} else
{if((state_val_24905 === 15))
{var inst_24900 = (state_24904[2]);var state_24904__$1 = state_24904;var statearr_24924_24948 = state_24904__$1;(statearr_24924_24948[2] = inst_24900);
(statearr_24924_24948[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_24905 === 16))
{var inst_24897 = (state_24904[2]);var state_24904__$1 = (function (){var statearr_24925 = state_24904;(statearr_24925[13] = inst_24897);
return statearr_24925;
})();var statearr_24926_24949 = state_24904__$1;(statearr_24926_24949[2] = null);
(statearr_24926_24949[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_24930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24930[0] = state_machine__5507__auto__);
(statearr_24930[1] = 1);
return statearr_24930;
});
var state_machine__5507__auto____1 = (function (state_24904){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24904);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object))
{var ex__5510__auto__ = e24931;var statearr_24932_24950 = state_24904;(statearr_24932_24950[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24904);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e24931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__24951 = state_24904;
state_24904 = G__24951;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24904){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24933 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24934);
return statearr_24933;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25035){var state_val_25036 = (state_25035[1]);if((state_val_25036 === 1))
{var inst_25006 = cljs.core.vec(chs);var inst_25007 = inst_25006;var state_25035__$1 = (function (){var statearr_25037 = state_25035;(statearr_25037[7] = inst_25007);
return statearr_25037;
})();var statearr_25038_25060 = state_25035__$1;(statearr_25038_25060[2] = null);
(statearr_25038_25060[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 2))
{var inst_25007 = (state_25035[7]);var inst_25009 = cljs.core.count(inst_25007);var inst_25010 = (inst_25009 > 0);var state_25035__$1 = state_25035;if(cljs.core.truth_(inst_25010))
{var statearr_25039_25061 = state_25035__$1;(statearr_25039_25061[1] = 4);
} else
{var statearr_25040_25062 = state_25035__$1;(statearr_25040_25062[1] = 5);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 3))
{var inst_25033 = (state_25035[2]);var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.return_chan(state_25035__$1,inst_25033);
} else
{if((state_val_25036 === 4))
{var inst_25007 = (state_25035[7]);var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25035__$1,7,inst_25007);
} else
{if((state_val_25036 === 5))
{var inst_25029 = cljs.core.async.close_BANG_(out);var state_25035__$1 = state_25035;var statearr_25041_25063 = state_25035__$1;(statearr_25041_25063[2] = inst_25029);
(statearr_25041_25063[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 6))
{var inst_25031 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25042_25064 = state_25035__$1;(statearr_25042_25064[2] = inst_25031);
(statearr_25042_25064[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 7))
{var inst_25014 = (state_25035[8]);var inst_25015 = (state_25035[9]);var inst_25014__$1 = (state_25035[2]);var inst_25015__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25014__$1,0,null);var inst_25016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25014__$1,1,null);var inst_25017 = (inst_25015__$1 == null);var state_25035__$1 = (function (){var statearr_25043 = state_25035;(statearr_25043[8] = inst_25014__$1);
(statearr_25043[10] = inst_25016);
(statearr_25043[9] = inst_25015__$1);
return statearr_25043;
})();if(cljs.core.truth_(inst_25017))
{var statearr_25044_25065 = state_25035__$1;(statearr_25044_25065[1] = 8);
} else
{var statearr_25045_25066 = state_25035__$1;(statearr_25045_25066[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 8))
{var inst_25014 = (state_25035[8]);var inst_25016 = (state_25035[10]);var inst_25015 = (state_25035[9]);var inst_25007 = (state_25035[7]);var inst_25019 = (function (){var c = inst_25016;var v = inst_25015;var vec__25012 = inst_25014;var cs = inst_25007;return ((function (c,v,vec__25012,cs,inst_25014,inst_25016,inst_25015,inst_25007,state_val_25036){
return (function (p1__24952_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24952_SHARP_);
});
;})(c,v,vec__25012,cs,inst_25014,inst_25016,inst_25015,inst_25007,state_val_25036))
})();var inst_25020 = cljs.core.filterv(inst_25019,inst_25007);var inst_25007__$1 = inst_25020;var state_25035__$1 = (function (){var statearr_25046 = state_25035;(statearr_25046[7] = inst_25007__$1);
return statearr_25046;
})();var statearr_25047_25067 = state_25035__$1;(statearr_25047_25067[2] = null);
(statearr_25047_25067[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 9))
{var inst_25015 = (state_25035[9]);var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25035__$1,11,out,inst_25015);
} else
{if((state_val_25036 === 10))
{var inst_25027 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25049_25068 = state_25035__$1;(statearr_25049_25068[2] = inst_25027);
(statearr_25049_25068[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25036 === 11))
{var inst_25007 = (state_25035[7]);var inst_25024 = (state_25035[2]);var tmp25048 = inst_25007;var inst_25007__$1 = tmp25048;var state_25035__$1 = (function (){var statearr_25050 = state_25035;(statearr_25050[11] = inst_25024);
(statearr_25050[7] = inst_25007__$1);
return statearr_25050;
})();var statearr_25051_25069 = state_25035__$1;(statearr_25051_25069[2] = null);
(statearr_25051_25069[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_25055 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25055[0] = state_machine__5507__auto__);
(statearr_25055[1] = 1);
return statearr_25055;
});
var state_machine__5507__auto____1 = (function (state_25035){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25035);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object))
{var ex__5510__auto__ = e25056;var statearr_25057_25070 = state_25035;(statearr_25057_25070[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25035);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e25056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__25071 = state_25035;
state_25035 = G__25071;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25035){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25058 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25059);
return statearr_25058;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25141){var state_val_25142 = (state_25141[1]);if((state_val_25142 === 1))
{var inst_25118 = 0;var state_25141__$1 = (function (){var statearr_25143 = state_25141;(statearr_25143[7] = inst_25118);
return statearr_25143;
})();var statearr_25144_25165 = state_25141__$1;(statearr_25144_25165[2] = null);
(statearr_25144_25165[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 2))
{var inst_25118 = (state_25141[7]);var inst_25120 = (inst_25118 < n);var state_25141__$1 = state_25141;if(cljs.core.truth_(inst_25120))
{var statearr_25145_25166 = state_25141__$1;(statearr_25145_25166[1] = 4);
} else
{var statearr_25146_25167 = state_25141__$1;(statearr_25146_25167[1] = 5);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 3))
{var inst_25138 = (state_25141[2]);var inst_25139 = cljs.core.async.close_BANG_(out);var state_25141__$1 = (function (){var statearr_25147 = state_25141;(statearr_25147[8] = inst_25138);
return statearr_25147;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25141__$1,inst_25139);
} else
{if((state_val_25142 === 4))
{var state_25141__$1 = state_25141;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25141__$1,7,ch);
} else
{if((state_val_25142 === 5))
{var state_25141__$1 = state_25141;var statearr_25148_25168 = state_25141__$1;(statearr_25148_25168[2] = null);
(statearr_25148_25168[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 6))
{var inst_25136 = (state_25141[2]);var state_25141__$1 = state_25141;var statearr_25149_25169 = state_25141__$1;(statearr_25149_25169[2] = inst_25136);
(statearr_25149_25169[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 7))
{var inst_25123 = (state_25141[9]);var inst_25123__$1 = (state_25141[2]);var inst_25124 = (inst_25123__$1 == null);var inst_25125 = cljs.core.not(inst_25124);var state_25141__$1 = (function (){var statearr_25150 = state_25141;(statearr_25150[9] = inst_25123__$1);
return statearr_25150;
})();if(inst_25125)
{var statearr_25151_25170 = state_25141__$1;(statearr_25151_25170[1] = 8);
} else
{var statearr_25152_25171 = state_25141__$1;(statearr_25152_25171[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 8))
{var inst_25123 = (state_25141[9]);var state_25141__$1 = state_25141;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25141__$1,11,out,inst_25123);
} else
{if((state_val_25142 === 9))
{var state_25141__$1 = state_25141;var statearr_25153_25172 = state_25141__$1;(statearr_25153_25172[2] = null);
(statearr_25153_25172[1] = 10);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 10))
{var inst_25133 = (state_25141[2]);var state_25141__$1 = state_25141;var statearr_25154_25173 = state_25141__$1;(statearr_25154_25173[2] = inst_25133);
(statearr_25154_25173[1] = 6);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25142 === 11))
{var inst_25118 = (state_25141[7]);var inst_25128 = (state_25141[2]);var inst_25129 = (inst_25118 + 1);var inst_25118__$1 = inst_25129;var state_25141__$1 = (function (){var statearr_25155 = state_25141;(statearr_25155[7] = inst_25118__$1);
(statearr_25155[10] = inst_25128);
return statearr_25155;
})();var statearr_25156_25174 = state_25141__$1;(statearr_25156_25174[2] = null);
(statearr_25156_25174[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_25160 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25160[0] = state_machine__5507__auto__);
(statearr_25160[1] = 1);
return statearr_25160;
});
var state_machine__5507__auto____1 = (function (state_25141){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25141);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25161){if((e25161 instanceof Object))
{var ex__5510__auto__ = e25161;var statearr_25162_25175 = state_25141;(statearr_25162_25175[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25141);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e25161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__25176 = state_25141;
state_25141 = G__25176;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25141){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25163 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25164);
return statearr_25163;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25248){var state_val_25249 = (state_25248[1]);if((state_val_25249 === 1))
{var inst_25225 = null;var state_25248__$1 = (function (){var statearr_25250 = state_25248;(statearr_25250[7] = inst_25225);
return statearr_25250;
})();var statearr_25251_25274 = state_25248__$1;(statearr_25251_25274[2] = null);
(statearr_25251_25274[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 2))
{var state_25248__$1 = state_25248;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25248__$1,4,ch);
} else
{if((state_val_25249 === 3))
{var inst_25245 = (state_25248[2]);var inst_25246 = cljs.core.async.close_BANG_(out);var state_25248__$1 = (function (){var statearr_25252 = state_25248;(statearr_25252[8] = inst_25245);
return statearr_25252;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25248__$1,inst_25246);
} else
{if((state_val_25249 === 4))
{var inst_25228 = (state_25248[9]);var inst_25228__$1 = (state_25248[2]);var inst_25229 = (inst_25228__$1 == null);var inst_25230 = cljs.core.not(inst_25229);var state_25248__$1 = (function (){var statearr_25253 = state_25248;(statearr_25253[9] = inst_25228__$1);
return statearr_25253;
})();if(inst_25230)
{var statearr_25254_25275 = state_25248__$1;(statearr_25254_25275[1] = 5);
} else
{var statearr_25255_25276 = state_25248__$1;(statearr_25255_25276[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 5))
{var inst_25225 = (state_25248[7]);var inst_25228 = (state_25248[9]);var inst_25232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25228,inst_25225);var state_25248__$1 = state_25248;if(inst_25232)
{var statearr_25256_25277 = state_25248__$1;(statearr_25256_25277[1] = 8);
} else
{var statearr_25257_25278 = state_25248__$1;(statearr_25257_25278[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 6))
{var state_25248__$1 = state_25248;var statearr_25259_25279 = state_25248__$1;(statearr_25259_25279[2] = null);
(statearr_25259_25279[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 7))
{var inst_25243 = (state_25248[2]);var state_25248__$1 = state_25248;var statearr_25260_25280 = state_25248__$1;(statearr_25260_25280[2] = inst_25243);
(statearr_25260_25280[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 8))
{var inst_25225 = (state_25248[7]);var tmp25258 = inst_25225;var inst_25225__$1 = tmp25258;var state_25248__$1 = (function (){var statearr_25261 = state_25248;(statearr_25261[7] = inst_25225__$1);
return statearr_25261;
})();var statearr_25262_25281 = state_25248__$1;(statearr_25262_25281[2] = null);
(statearr_25262_25281[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 9))
{var inst_25228 = (state_25248[9]);var state_25248__$1 = state_25248;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25248__$1,11,out,inst_25228);
} else
{if((state_val_25249 === 10))
{var inst_25240 = (state_25248[2]);var state_25248__$1 = state_25248;var statearr_25263_25282 = state_25248__$1;(statearr_25263_25282[2] = inst_25240);
(statearr_25263_25282[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25249 === 11))
{var inst_25228 = (state_25248[9]);var inst_25237 = (state_25248[2]);var inst_25225 = inst_25228;var state_25248__$1 = (function (){var statearr_25264 = state_25248;(statearr_25264[7] = inst_25225);
(statearr_25264[10] = inst_25237);
return statearr_25264;
})();var statearr_25265_25283 = state_25248__$1;(statearr_25265_25283[2] = null);
(statearr_25265_25283[1] = 2);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_25269 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25269[0] = state_machine__5507__auto__);
(statearr_25269[1] = 1);
return statearr_25269;
});
var state_machine__5507__auto____1 = (function (state_25248){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25248);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object))
{var ex__5510__auto__ = e25270;var statearr_25271_25284 = state_25248;(statearr_25271_25284[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25248);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e25270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__25285 = state_25248;
state_25248 = G__25285;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25248){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25272 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25273);
return statearr_25272;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25390){var state_val_25391 = (state_25390[1]);if((state_val_25391 === 1))
{var inst_25353 = (new Array(n));var inst_25354 = inst_25353;var inst_25355 = 0;var state_25390__$1 = (function (){var statearr_25392 = state_25390;(statearr_25392[7] = inst_25354);
(statearr_25392[8] = inst_25355);
return statearr_25392;
})();var statearr_25393_25421 = state_25390__$1;(statearr_25393_25421[2] = null);
(statearr_25393_25421[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 2))
{var state_25390__$1 = state_25390;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25390__$1,4,ch);
} else
{if((state_val_25391 === 3))
{var inst_25388 = (state_25390[2]);var state_25390__$1 = state_25390;return cljs.core.async.impl.ioc_helpers.return_chan(state_25390__$1,inst_25388);
} else
{if((state_val_25391 === 4))
{var inst_25358 = (state_25390[9]);var inst_25358__$1 = (state_25390[2]);var inst_25359 = (inst_25358__$1 == null);var inst_25360 = cljs.core.not(inst_25359);var state_25390__$1 = (function (){var statearr_25394 = state_25390;(statearr_25394[9] = inst_25358__$1);
return statearr_25394;
})();if(inst_25360)
{var statearr_25395_25422 = state_25390__$1;(statearr_25395_25422[1] = 5);
} else
{var statearr_25396_25423 = state_25390__$1;(statearr_25396_25423[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 5))
{var inst_25354 = (state_25390[7]);var inst_25355 = (state_25390[8]);var inst_25363 = (state_25390[10]);var inst_25358 = (state_25390[9]);var inst_25362 = (inst_25354[inst_25355] = inst_25358);var inst_25363__$1 = (inst_25355 + 1);var inst_25364 = (inst_25363__$1 < n);var state_25390__$1 = (function (){var statearr_25397 = state_25390;(statearr_25397[10] = inst_25363__$1);
(statearr_25397[11] = inst_25362);
return statearr_25397;
})();if(cljs.core.truth_(inst_25364))
{var statearr_25398_25424 = state_25390__$1;(statearr_25398_25424[1] = 8);
} else
{var statearr_25399_25425 = state_25390__$1;(statearr_25399_25425[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 6))
{var inst_25355 = (state_25390[8]);var inst_25376 = (inst_25355 > 0);var state_25390__$1 = state_25390;if(cljs.core.truth_(inst_25376))
{var statearr_25401_25426 = state_25390__$1;(statearr_25401_25426[1] = 12);
} else
{var statearr_25402_25427 = state_25390__$1;(statearr_25402_25427[1] = 13);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 7))
{var inst_25386 = (state_25390[2]);var state_25390__$1 = state_25390;var statearr_25403_25428 = state_25390__$1;(statearr_25403_25428[2] = inst_25386);
(statearr_25403_25428[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 8))
{var inst_25354 = (state_25390[7]);var inst_25363 = (state_25390[10]);var tmp25400 = inst_25354;var inst_25354__$1 = tmp25400;var inst_25355 = inst_25363;var state_25390__$1 = (function (){var statearr_25404 = state_25390;(statearr_25404[7] = inst_25354__$1);
(statearr_25404[8] = inst_25355);
return statearr_25404;
})();var statearr_25405_25429 = state_25390__$1;(statearr_25405_25429[2] = null);
(statearr_25405_25429[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 9))
{var inst_25354 = (state_25390[7]);var inst_25368 = cljs.core.vec(inst_25354);var state_25390__$1 = state_25390;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25390__$1,11,out,inst_25368);
} else
{if((state_val_25391 === 10))
{var inst_25374 = (state_25390[2]);var state_25390__$1 = state_25390;var statearr_25406_25430 = state_25390__$1;(statearr_25406_25430[2] = inst_25374);
(statearr_25406_25430[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 11))
{var inst_25370 = (state_25390[2]);var inst_25371 = (new Array(n));var inst_25354 = inst_25371;var inst_25355 = 0;var state_25390__$1 = (function (){var statearr_25407 = state_25390;(statearr_25407[12] = inst_25370);
(statearr_25407[7] = inst_25354);
(statearr_25407[8] = inst_25355);
return statearr_25407;
})();var statearr_25408_25431 = state_25390__$1;(statearr_25408_25431[2] = null);
(statearr_25408_25431[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 12))
{var inst_25354 = (state_25390[7]);var inst_25378 = cljs.core.vec(inst_25354);var state_25390__$1 = state_25390;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25390__$1,15,out,inst_25378);
} else
{if((state_val_25391 === 13))
{var state_25390__$1 = state_25390;var statearr_25409_25432 = state_25390__$1;(statearr_25409_25432[2] = null);
(statearr_25409_25432[1] = 14);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 14))
{var inst_25383 = (state_25390[2]);var inst_25384 = cljs.core.async.close_BANG_(out);var state_25390__$1 = (function (){var statearr_25410 = state_25390;(statearr_25410[13] = inst_25383);
return statearr_25410;
})();var statearr_25411_25433 = state_25390__$1;(statearr_25411_25433[2] = inst_25384);
(statearr_25411_25433[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25391 === 15))
{var inst_25380 = (state_25390[2]);var state_25390__$1 = state_25390;var statearr_25412_25434 = state_25390__$1;(statearr_25412_25434[2] = inst_25380);
(statearr_25412_25434[1] = 14);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_25416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25416[0] = state_machine__5507__auto__);
(statearr_25416[1] = 1);
return statearr_25416;
});
var state_machine__5507__auto____1 = (function (state_25390){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25390);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25417){if((e25417 instanceof Object))
{var ex__5510__auto__ = e25417;var statearr_25418_25435 = state_25390;(statearr_25418_25435[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25390);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e25417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__25436 = state_25390;
state_25390 = G__25436;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25390){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25419 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25420);
return statearr_25419;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25549){var state_val_25550 = (state_25549[1]);if((state_val_25550 === 1))
{var inst_25508 = [];var inst_25509 = inst_25508;var inst_25510 = cljs.core.constant$keyword$211;var state_25549__$1 = (function (){var statearr_25551 = state_25549;(statearr_25551[7] = inst_25509);
(statearr_25551[8] = inst_25510);
return statearr_25551;
})();var statearr_25552_25580 = state_25549__$1;(statearr_25552_25580[2] = null);
(statearr_25552_25580[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 2))
{var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25549__$1,4,ch);
} else
{if((state_val_25550 === 3))
{var inst_25547 = (state_25549[2]);var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.return_chan(state_25549__$1,inst_25547);
} else
{if((state_val_25550 === 4))
{var inst_25513 = (state_25549[9]);var inst_25513__$1 = (state_25549[2]);var inst_25514 = (inst_25513__$1 == null);var inst_25515 = cljs.core.not(inst_25514);var state_25549__$1 = (function (){var statearr_25553 = state_25549;(statearr_25553[9] = inst_25513__$1);
return statearr_25553;
})();if(inst_25515)
{var statearr_25554_25581 = state_25549__$1;(statearr_25554_25581[1] = 5);
} else
{var statearr_25555_25582 = state_25549__$1;(statearr_25555_25582[1] = 6);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 5))
{var inst_25517 = (state_25549[10]);var inst_25513 = (state_25549[9]);var inst_25510 = (state_25549[8]);var inst_25517__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25513) : f.call(null,inst_25513));var inst_25518 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25517__$1,inst_25510);var inst_25519 = cljs.core.keyword_identical_QMARK_(inst_25510,cljs.core.constant$keyword$211);var inst_25520 = (inst_25518) || (inst_25519);var state_25549__$1 = (function (){var statearr_25556 = state_25549;(statearr_25556[10] = inst_25517__$1);
return statearr_25556;
})();if(cljs.core.truth_(inst_25520))
{var statearr_25557_25583 = state_25549__$1;(statearr_25557_25583[1] = 8);
} else
{var statearr_25558_25584 = state_25549__$1;(statearr_25558_25584[1] = 9);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 6))
{var inst_25509 = (state_25549[7]);var inst_25534 = inst_25509.length;var inst_25535 = (inst_25534 > 0);var state_25549__$1 = state_25549;if(cljs.core.truth_(inst_25535))
{var statearr_25560_25585 = state_25549__$1;(statearr_25560_25585[1] = 12);
} else
{var statearr_25561_25586 = state_25549__$1;(statearr_25561_25586[1] = 13);
}
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 7))
{var inst_25545 = (state_25549[2]);var state_25549__$1 = state_25549;var statearr_25562_25587 = state_25549__$1;(statearr_25562_25587[2] = inst_25545);
(statearr_25562_25587[1] = 3);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 8))
{var inst_25509 = (state_25549[7]);var inst_25517 = (state_25549[10]);var inst_25513 = (state_25549[9]);var inst_25522 = inst_25509.push(inst_25513);var tmp25559 = inst_25509;var inst_25509__$1 = tmp25559;var inst_25510 = inst_25517;var state_25549__$1 = (function (){var statearr_25563 = state_25549;(statearr_25563[7] = inst_25509__$1);
(statearr_25563[11] = inst_25522);
(statearr_25563[8] = inst_25510);
return statearr_25563;
})();var statearr_25564_25588 = state_25549__$1;(statearr_25564_25588[2] = null);
(statearr_25564_25588[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 9))
{var inst_25509 = (state_25549[7]);var inst_25525 = cljs.core.vec(inst_25509);var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25549__$1,11,out,inst_25525);
} else
{if((state_val_25550 === 10))
{var inst_25532 = (state_25549[2]);var state_25549__$1 = state_25549;var statearr_25565_25589 = state_25549__$1;(statearr_25565_25589[2] = inst_25532);
(statearr_25565_25589[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 11))
{var inst_25517 = (state_25549[10]);var inst_25513 = (state_25549[9]);var inst_25527 = (state_25549[2]);var inst_25528 = [];var inst_25529 = inst_25528.push(inst_25513);var inst_25509 = inst_25528;var inst_25510 = inst_25517;var state_25549__$1 = (function (){var statearr_25566 = state_25549;(statearr_25566[7] = inst_25509);
(statearr_25566[12] = inst_25527);
(statearr_25566[13] = inst_25529);
(statearr_25566[8] = inst_25510);
return statearr_25566;
})();var statearr_25567_25590 = state_25549__$1;(statearr_25567_25590[2] = null);
(statearr_25567_25590[1] = 2);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 12))
{var inst_25509 = (state_25549[7]);var inst_25537 = cljs.core.vec(inst_25509);var state_25549__$1 = state_25549;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25549__$1,15,out,inst_25537);
} else
{if((state_val_25550 === 13))
{var state_25549__$1 = state_25549;var statearr_25568_25591 = state_25549__$1;(statearr_25568_25591[2] = null);
(statearr_25568_25591[1] = 14);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 14))
{var inst_25542 = (state_25549[2]);var inst_25543 = cljs.core.async.close_BANG_(out);var state_25549__$1 = (function (){var statearr_25569 = state_25549;(statearr_25569[14] = inst_25542);
return statearr_25569;
})();var statearr_25570_25592 = state_25549__$1;(statearr_25570_25592[2] = inst_25543);
(statearr_25570_25592[1] = 7);
return cljs.core.constant$keyword$198;
} else
{if((state_val_25550 === 15))
{var inst_25539 = (state_25549[2]);var state_25549__$1 = state_25549;var statearr_25571_25593 = state_25549__$1;(statearr_25571_25593[2] = inst_25539);
(statearr_25571_25593[1] = 14);
return cljs.core.constant$keyword$198;
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
var state_machine__5507__auto____0 = (function (){var statearr_25575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25575[0] = state_machine__5507__auto__);
(statearr_25575[1] = 1);
return statearr_25575;
});
var state_machine__5507__auto____1 = (function (state_25549){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25549);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$198))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25576){if((e25576 instanceof Object))
{var ex__5510__auto__ = e25576;var statearr_25577_25594 = state_25549;(statearr_25577_25594[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25549);
return cljs.core.constant$keyword$198;
} else
{if(cljs.core.constant$keyword$187)
{throw e25576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$198))
{{
var G__25595 = state_25549;
state_25549 = G__25595;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25549){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25578 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25579);
return statearr_25578;
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
