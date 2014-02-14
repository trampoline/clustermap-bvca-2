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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23929 = (function (f,fn_handler,meta23930){
this.f = f;
this.fn_handler = fn_handler;
this.meta23930 = meta23930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23929.cljs$lang$type = true;
cljs.core.async.t23929.cljs$lang$ctorStr = "cljs.core.async/t23929";
cljs.core.async.t23929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23929");
});
cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23931){var self__ = this;
var _23931__$1 = this;return self__.meta23930;
});
cljs.core.async.t23929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23931,meta23930__$1){var self__ = this;
var _23931__$1 = this;return (new cljs.core.async.t23929(self__.f,self__.fn_handler,meta23930__$1));
});
cljs.core.async.__GT_t23929 = (function __GT_t23929(f__$1,fn_handler__$1,meta23930){return (new cljs.core.async.t23929(f__$1,fn_handler__$1,meta23930));
});
}
return (new cljs.core.async.t23929(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23933 = buff;if(G__23933)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23933.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23933);
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
{var val_23934 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23934) : fn1.call(null,val_23934));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23934) : fn1.call(null,val_23934));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23935 = n;var x_23936 = 0;while(true){
if((x_23936 < n__4248__auto___23935))
{(a[x_23936] = 0);
{
var G__23937 = (x_23936 + 1);
x_23936 = G__23937;
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
var G__23938 = (i + 1);
i = G__23938;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23942 = (function (flag,alt_flag,meta23943){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23943 = meta23943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23942.cljs$lang$type = true;
cljs.core.async.t23942.cljs$lang$ctorStr = "cljs.core.async/t23942";
cljs.core.async.t23942.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23942");
});
cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23944){var self__ = this;
var _23944__$1 = this;return self__.meta23943;
});
cljs.core.async.t23942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23944,meta23943__$1){var self__ = this;
var _23944__$1 = this;return (new cljs.core.async.t23942(self__.flag,self__.alt_flag,meta23943__$1));
});
cljs.core.async.__GT_t23942 = (function __GT_t23942(flag__$1,alt_flag__$1,meta23943){return (new cljs.core.async.t23942(flag__$1,alt_flag__$1,meta23943));
});
}
return (new cljs.core.async.t23942(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23948 = (function (cb,flag,alt_handler,meta23949){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23949 = meta23949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23948.cljs$lang$type = true;
cljs.core.async.t23948.cljs$lang$ctorStr = "cljs.core.async/t23948";
cljs.core.async.t23948.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23948");
});
cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23950){var self__ = this;
var _23950__$1 = this;return self__.meta23949;
});
cljs.core.async.t23948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23950,meta23949__$1){var self__ = this;
var _23950__$1 = this;return (new cljs.core.async.t23948(self__.cb,self__.flag,self__.alt_handler,meta23949__$1));
});
cljs.core.async.__GT_t23948 = (function __GT_t23948(cb__$1,flag__$1,alt_handler__$1,meta23949){return (new cljs.core.async.t23948(cb__$1,flag__$1,alt_handler__$1,meta23949));
});
}
return (new cljs.core.async.t23948(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23951_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23951_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23951_SHARP_,port], null)));
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
var G__23952 = (i + 1);
i = G__23952;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$222))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$222], null));
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
var alts_BANG___delegate = function (ports,p__23953){var map__23955 = p__23953;var map__23955__$1 = ((cljs.core.seq_QMARK_(map__23955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23955):map__23955);var opts = map__23955__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23953 = null;if (arguments.length > 1) {
  p__23953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23953);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23956){
var ports = cljs.core.first(arglist__23956);
var p__23953 = cljs.core.rest(arglist__23956);
return alts_BANG___delegate(ports,p__23953);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23964 = (function (ch,f,map_LT_,meta23965){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23965 = meta23965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23964.cljs$lang$type = true;
cljs.core.async.t23964.cljs$lang$ctorStr = "cljs.core.async/t23964";
cljs.core.async.t23964.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23964");
});
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23967 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23967 = (function (fn1,_,meta23965,ch,f,map_LT_,meta23968){
this.fn1 = fn1;
this._ = _;
this.meta23965 = meta23965;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23968 = meta23968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23967.cljs$lang$type = true;
cljs.core.async.t23967.cljs$lang$ctorStr = "cljs.core.async/t23967";
cljs.core.async.t23967.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23967");
});
cljs.core.async.t23967.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23967.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23957_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23957_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23957_SHARP_) : self__.f.call(null,p1__23957_SHARP_)))) : f1.call(null,(((p1__23957_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23957_SHARP_) : self__.f.call(null,p1__23957_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23969){var self__ = this;
var _23969__$1 = this;return self__.meta23968;
});
cljs.core.async.t23967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23969,meta23968__$1){var self__ = this;
var _23969__$1 = this;return (new cljs.core.async.t23967(self__.fn1,self__._,self__.meta23965,self__.ch,self__.f,self__.map_LT_,meta23968__$1));
});
cljs.core.async.__GT_t23967 = (function __GT_t23967(fn1__$1,___$2,meta23965__$1,ch__$2,f__$2,map_LT___$2,meta23968){return (new cljs.core.async.t23967(fn1__$1,___$2,meta23965__$1,ch__$2,f__$2,map_LT___$2,meta23968));
});
}
return (new cljs.core.async.t23967(fn1,___$1,self__.meta23965,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23966){var self__ = this;
var _23966__$1 = this;return self__.meta23965;
});
cljs.core.async.t23964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23966,meta23965__$1){var self__ = this;
var _23966__$1 = this;return (new cljs.core.async.t23964(self__.ch,self__.f,self__.map_LT_,meta23965__$1));
});
cljs.core.async.__GT_t23964 = (function __GT_t23964(ch__$1,f__$1,map_LT___$1,meta23965){return (new cljs.core.async.t23964(ch__$1,f__$1,map_LT___$1,meta23965));
});
}
return (new cljs.core.async.t23964(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23973 = (function (ch,f,map_GT_,meta23974){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23974 = meta23974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23973.cljs$lang$type = true;
cljs.core.async.t23973.cljs$lang$ctorStr = "cljs.core.async/t23973";
cljs.core.async.t23973.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23973");
});
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23975){var self__ = this;
var _23975__$1 = this;return self__.meta23974;
});
cljs.core.async.t23973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23975,meta23974__$1){var self__ = this;
var _23975__$1 = this;return (new cljs.core.async.t23973(self__.ch,self__.f,self__.map_GT_,meta23974__$1));
});
cljs.core.async.__GT_t23973 = (function __GT_t23973(ch__$1,f__$1,map_GT___$1,meta23974){return (new cljs.core.async.t23973(ch__$1,f__$1,map_GT___$1,meta23974));
});
}
return (new cljs.core.async.t23973(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23979 = (function (ch,p,filter_GT_,meta23980){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23980 = meta23980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23979.cljs$lang$type = true;
cljs.core.async.t23979.cljs$lang$ctorStr = "cljs.core.async/t23979";
cljs.core.async.t23979.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23979");
});
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23981){var self__ = this;
var _23981__$1 = this;return self__.meta23980;
});
cljs.core.async.t23979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23981,meta23980__$1){var self__ = this;
var _23981__$1 = this;return (new cljs.core.async.t23979(self__.ch,self__.p,self__.filter_GT_,meta23980__$1));
});
cljs.core.async.__GT_t23979 = (function __GT_t23979(ch__$1,p__$1,filter_GT___$1,meta23980){return (new cljs.core.async.t23979(ch__$1,p__$1,filter_GT___$1,meta23980));
});
}
return (new cljs.core.async.t23979(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24043){var state_val_24044 = (state_24043[1]);if((state_val_24044 === 1))
{var state_24043__$1 = state_24043;var statearr_24045_24065 = state_24043__$1;(statearr_24045_24065[2] = null);
(statearr_24045_24065[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 2))
{var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24043__$1,4,ch);
} else
{if((state_val_24044 === 3))
{var inst_24041 = (state_24043[2]);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.return_chan(state_24043__$1,inst_24041);
} else
{if((state_val_24044 === 4))
{var inst_24025 = (state_24043[7]);var inst_24025__$1 = (state_24043[2]);var inst_24026 = (inst_24025__$1 == null);var state_24043__$1 = (function (){var statearr_24046 = state_24043;(statearr_24046[7] = inst_24025__$1);
return statearr_24046;
})();if(cljs.core.truth_(inst_24026))
{var statearr_24047_24066 = state_24043__$1;(statearr_24047_24066[1] = 5);
} else
{var statearr_24048_24067 = state_24043__$1;(statearr_24048_24067[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 5))
{var inst_24028 = cljs.core.async.close_BANG_(out);var state_24043__$1 = state_24043;var statearr_24049_24068 = state_24043__$1;(statearr_24049_24068[2] = inst_24028);
(statearr_24049_24068[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 6))
{var inst_24025 = (state_24043[7]);var inst_24030 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24025) : p.call(null,inst_24025));var state_24043__$1 = state_24043;if(cljs.core.truth_(inst_24030))
{var statearr_24050_24069 = state_24043__$1;(statearr_24050_24069[1] = 8);
} else
{var statearr_24051_24070 = state_24043__$1;(statearr_24051_24070[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 7))
{var inst_24039 = (state_24043[2]);var state_24043__$1 = state_24043;var statearr_24052_24071 = state_24043__$1;(statearr_24052_24071[2] = inst_24039);
(statearr_24052_24071[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 8))
{var inst_24025 = (state_24043[7]);var state_24043__$1 = state_24043;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24043__$1,11,out,inst_24025);
} else
{if((state_val_24044 === 9))
{var state_24043__$1 = state_24043;var statearr_24053_24072 = state_24043__$1;(statearr_24053_24072[2] = null);
(statearr_24053_24072[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 10))
{var inst_24036 = (state_24043[2]);var state_24043__$1 = (function (){var statearr_24054 = state_24043;(statearr_24054[8] = inst_24036);
return statearr_24054;
})();var statearr_24055_24073 = state_24043__$1;(statearr_24055_24073[2] = null);
(statearr_24055_24073[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24044 === 11))
{var inst_24033 = (state_24043[2]);var state_24043__$1 = state_24043;var statearr_24056_24074 = state_24043__$1;(statearr_24056_24074[2] = inst_24033);
(statearr_24056_24074[1] = 10);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_24060 = [null,null,null,null,null,null,null,null,null];(statearr_24060[0] = state_machine__5507__auto__);
(statearr_24060[1] = 1);
return statearr_24060;
});
var state_machine__5507__auto____1 = (function (state_24043){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24043);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object))
{var ex__5510__auto__ = e24061;var statearr_24062_24075 = state_24043;(statearr_24062_24075[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24043);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24076 = state_24043;
state_24043 = G__24076;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24043){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24063 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24064);
return statearr_24063;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24228){var state_val_24229 = (state_24228[1]);if((state_val_24229 === 1))
{var state_24228__$1 = state_24228;var statearr_24230_24267 = state_24228__$1;(statearr_24230_24267[2] = null);
(statearr_24230_24267[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 2))
{var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24228__$1,4,in$);
} else
{if((state_val_24229 === 3))
{var inst_24226 = (state_24228[2]);var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.return_chan(state_24228__$1,inst_24226);
} else
{if((state_val_24229 === 4))
{var inst_24174 = (state_24228[7]);var inst_24174__$1 = (state_24228[2]);var inst_24175 = (inst_24174__$1 == null);var state_24228__$1 = (function (){var statearr_24231 = state_24228;(statearr_24231[7] = inst_24174__$1);
return statearr_24231;
})();if(cljs.core.truth_(inst_24175))
{var statearr_24232_24268 = state_24228__$1;(statearr_24232_24268[1] = 5);
} else
{var statearr_24233_24269 = state_24228__$1;(statearr_24233_24269[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 5))
{var inst_24177 = cljs.core.async.close_BANG_(out);var state_24228__$1 = state_24228;var statearr_24234_24270 = state_24228__$1;(statearr_24234_24270[2] = inst_24177);
(statearr_24234_24270[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 6))
{var inst_24174 = (state_24228[7]);var inst_24179 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24174) : f.call(null,inst_24174));var inst_24184 = cljs.core.seq(inst_24179);var inst_24185 = inst_24184;var inst_24186 = null;var inst_24187 = 0;var inst_24188 = 0;var state_24228__$1 = (function (){var statearr_24235 = state_24228;(statearr_24235[8] = inst_24188);
(statearr_24235[9] = inst_24186);
(statearr_24235[10] = inst_24187);
(statearr_24235[11] = inst_24185);
return statearr_24235;
})();var statearr_24236_24271 = state_24228__$1;(statearr_24236_24271[2] = null);
(statearr_24236_24271[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 7))
{var inst_24224 = (state_24228[2]);var state_24228__$1 = state_24228;var statearr_24237_24272 = state_24228__$1;(statearr_24237_24272[2] = inst_24224);
(statearr_24237_24272[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 8))
{var inst_24188 = (state_24228[8]);var inst_24187 = (state_24228[10]);var inst_24190 = (inst_24188 < inst_24187);var inst_24191 = inst_24190;var state_24228__$1 = state_24228;if(cljs.core.truth_(inst_24191))
{var statearr_24238_24273 = state_24228__$1;(statearr_24238_24273[1] = 10);
} else
{var statearr_24239_24274 = state_24228__$1;(statearr_24239_24274[1] = 11);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 9))
{var inst_24221 = (state_24228[2]);var state_24228__$1 = (function (){var statearr_24240 = state_24228;(statearr_24240[12] = inst_24221);
return statearr_24240;
})();var statearr_24241_24275 = state_24228__$1;(statearr_24241_24275[2] = null);
(statearr_24241_24275[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 10))
{var inst_24188 = (state_24228[8]);var inst_24186 = (state_24228[9]);var inst_24193 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24186,inst_24188);var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24228__$1,13,out,inst_24193);
} else
{if((state_val_24229 === 11))
{var inst_24185 = (state_24228[11]);var inst_24199 = (state_24228[13]);var inst_24199__$1 = cljs.core.seq(inst_24185);var state_24228__$1 = (function (){var statearr_24245 = state_24228;(statearr_24245[13] = inst_24199__$1);
return statearr_24245;
})();if(inst_24199__$1)
{var statearr_24246_24276 = state_24228__$1;(statearr_24246_24276[1] = 14);
} else
{var statearr_24247_24277 = state_24228__$1;(statearr_24247_24277[1] = 15);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 12))
{var inst_24219 = (state_24228[2]);var state_24228__$1 = state_24228;var statearr_24248_24278 = state_24228__$1;(statearr_24248_24278[2] = inst_24219);
(statearr_24248_24278[1] = 9);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 13))
{var inst_24188 = (state_24228[8]);var inst_24186 = (state_24228[9]);var inst_24187 = (state_24228[10]);var inst_24185 = (state_24228[11]);var inst_24195 = (state_24228[2]);var inst_24196 = (inst_24188 + 1);var tmp24242 = inst_24186;var tmp24243 = inst_24187;var tmp24244 = inst_24185;var inst_24185__$1 = tmp24244;var inst_24186__$1 = tmp24242;var inst_24187__$1 = tmp24243;var inst_24188__$1 = inst_24196;var state_24228__$1 = (function (){var statearr_24249 = state_24228;(statearr_24249[8] = inst_24188__$1);
(statearr_24249[9] = inst_24186__$1);
(statearr_24249[10] = inst_24187__$1);
(statearr_24249[11] = inst_24185__$1);
(statearr_24249[14] = inst_24195);
return statearr_24249;
})();var statearr_24250_24279 = state_24228__$1;(statearr_24250_24279[2] = null);
(statearr_24250_24279[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 14))
{var inst_24199 = (state_24228[13]);var inst_24201 = cljs.core.chunked_seq_QMARK_(inst_24199);var state_24228__$1 = state_24228;if(inst_24201)
{var statearr_24251_24280 = state_24228__$1;(statearr_24251_24280[1] = 17);
} else
{var statearr_24252_24281 = state_24228__$1;(statearr_24252_24281[1] = 18);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 15))
{var state_24228__$1 = state_24228;var statearr_24253_24282 = state_24228__$1;(statearr_24253_24282[2] = null);
(statearr_24253_24282[1] = 16);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 16))
{var inst_24217 = (state_24228[2]);var state_24228__$1 = state_24228;var statearr_24254_24283 = state_24228__$1;(statearr_24254_24283[2] = inst_24217);
(statearr_24254_24283[1] = 12);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 17))
{var inst_24199 = (state_24228[13]);var inst_24203 = cljs.core.chunk_first(inst_24199);var inst_24204 = cljs.core.chunk_rest(inst_24199);var inst_24205 = cljs.core.count(inst_24203);var inst_24185 = inst_24204;var inst_24186 = inst_24203;var inst_24187 = inst_24205;var inst_24188 = 0;var state_24228__$1 = (function (){var statearr_24255 = state_24228;(statearr_24255[8] = inst_24188);
(statearr_24255[9] = inst_24186);
(statearr_24255[10] = inst_24187);
(statearr_24255[11] = inst_24185);
return statearr_24255;
})();var statearr_24256_24284 = state_24228__$1;(statearr_24256_24284[2] = null);
(statearr_24256_24284[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 18))
{var inst_24199 = (state_24228[13]);var inst_24208 = cljs.core.first(inst_24199);var state_24228__$1 = state_24228;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24228__$1,20,out,inst_24208);
} else
{if((state_val_24229 === 19))
{var inst_24214 = (state_24228[2]);var state_24228__$1 = state_24228;var statearr_24257_24285 = state_24228__$1;(statearr_24257_24285[2] = inst_24214);
(statearr_24257_24285[1] = 16);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24229 === 20))
{var inst_24199 = (state_24228[13]);var inst_24210 = (state_24228[2]);var inst_24211 = cljs.core.next(inst_24199);var inst_24185 = inst_24211;var inst_24186 = null;var inst_24187 = 0;var inst_24188 = 0;var state_24228__$1 = (function (){var statearr_24258 = state_24228;(statearr_24258[15] = inst_24210);
(statearr_24258[8] = inst_24188);
(statearr_24258[9] = inst_24186);
(statearr_24258[10] = inst_24187);
(statearr_24258[11] = inst_24185);
return statearr_24258;
})();var statearr_24259_24286 = state_24228__$1;(statearr_24259_24286[2] = null);
(statearr_24259_24286[1] = 8);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_24263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24263[0] = state_machine__5507__auto__);
(statearr_24263[1] = 1);
return statearr_24263;
});
var state_machine__5507__auto____1 = (function (state_24228){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24228);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24264){if((e24264 instanceof Object))
{var ex__5510__auto__ = e24264;var statearr_24265_24287 = state_24228;(statearr_24265_24287[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24228);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24288 = state_24228;
state_24228 = G__24288;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24228){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24266 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24266;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24348){var state_val_24349 = (state_24348[1]);if((state_val_24349 === 1))
{var state_24348__$1 = state_24348;var statearr_24350_24370 = state_24348__$1;(statearr_24350_24370[2] = null);
(statearr_24350_24370[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 2))
{var state_24348__$1 = state_24348;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24348__$1,4,from);
} else
{if((state_val_24349 === 3))
{var inst_24346 = (state_24348[2]);var state_24348__$1 = state_24348;return cljs.core.async.impl.ioc_helpers.return_chan(state_24348__$1,inst_24346);
} else
{if((state_val_24349 === 4))
{var inst_24331 = (state_24348[7]);var inst_24331__$1 = (state_24348[2]);var inst_24332 = (inst_24331__$1 == null);var state_24348__$1 = (function (){var statearr_24351 = state_24348;(statearr_24351[7] = inst_24331__$1);
return statearr_24351;
})();if(cljs.core.truth_(inst_24332))
{var statearr_24352_24371 = state_24348__$1;(statearr_24352_24371[1] = 5);
} else
{var statearr_24353_24372 = state_24348__$1;(statearr_24353_24372[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 5))
{var state_24348__$1 = state_24348;if(cljs.core.truth_(close_QMARK_))
{var statearr_24354_24373 = state_24348__$1;(statearr_24354_24373[1] = 8);
} else
{var statearr_24355_24374 = state_24348__$1;(statearr_24355_24374[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 6))
{var inst_24331 = (state_24348[7]);var state_24348__$1 = state_24348;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24348__$1,11,to,inst_24331);
} else
{if((state_val_24349 === 7))
{var inst_24344 = (state_24348[2]);var state_24348__$1 = state_24348;var statearr_24356_24375 = state_24348__$1;(statearr_24356_24375[2] = inst_24344);
(statearr_24356_24375[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 8))
{var inst_24335 = cljs.core.async.close_BANG_(to);var state_24348__$1 = state_24348;var statearr_24357_24376 = state_24348__$1;(statearr_24357_24376[2] = inst_24335);
(statearr_24357_24376[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 9))
{var state_24348__$1 = state_24348;var statearr_24358_24377 = state_24348__$1;(statearr_24358_24377[2] = null);
(statearr_24358_24377[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 10))
{var inst_24338 = (state_24348[2]);var state_24348__$1 = state_24348;var statearr_24359_24378 = state_24348__$1;(statearr_24359_24378[2] = inst_24338);
(statearr_24359_24378[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24349 === 11))
{var inst_24341 = (state_24348[2]);var state_24348__$1 = (function (){var statearr_24360 = state_24348;(statearr_24360[8] = inst_24341);
return statearr_24360;
})();var statearr_24361_24379 = state_24348__$1;(statearr_24361_24379[2] = null);
(statearr_24361_24379[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_24365 = [null,null,null,null,null,null,null,null,null];(statearr_24365[0] = state_machine__5507__auto__);
(statearr_24365[1] = 1);
return statearr_24365;
});
var state_machine__5507__auto____1 = (function (state_24348){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24348);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24366){if((e24366 instanceof Object))
{var ex__5510__auto__ = e24366;var statearr_24367_24380 = state_24348;(statearr_24367_24380[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24348);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24381 = state_24348;
state_24348 = G__24381;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24348){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24368 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24369);
return statearr_24368;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24446){var state_val_24447 = (state_24446[1]);if((state_val_24447 === 1))
{var state_24446__$1 = state_24446;var statearr_24448_24469 = state_24446__$1;(statearr_24448_24469[2] = null);
(statearr_24448_24469[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 2))
{var state_24446__$1 = state_24446;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24446__$1,4,ch);
} else
{if((state_val_24447 === 3))
{var inst_24444 = (state_24446[2]);var state_24446__$1 = state_24446;return cljs.core.async.impl.ioc_helpers.return_chan(state_24446__$1,inst_24444);
} else
{if((state_val_24447 === 4))
{var inst_24427 = (state_24446[7]);var inst_24427__$1 = (state_24446[2]);var inst_24428 = (inst_24427__$1 == null);var state_24446__$1 = (function (){var statearr_24449 = state_24446;(statearr_24449[7] = inst_24427__$1);
return statearr_24449;
})();if(cljs.core.truth_(inst_24428))
{var statearr_24450_24470 = state_24446__$1;(statearr_24450_24470[1] = 5);
} else
{var statearr_24451_24471 = state_24446__$1;(statearr_24451_24471[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 5))
{var inst_24430 = cljs.core.async.close_BANG_(tc);var inst_24431 = cljs.core.async.close_BANG_(fc);var state_24446__$1 = (function (){var statearr_24452 = state_24446;(statearr_24452[8] = inst_24430);
return statearr_24452;
})();var statearr_24453_24472 = state_24446__$1;(statearr_24453_24472[2] = inst_24431);
(statearr_24453_24472[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 6))
{var inst_24427 = (state_24446[7]);var inst_24433 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24427) : p.call(null,inst_24427));var state_24446__$1 = state_24446;if(cljs.core.truth_(inst_24433))
{var statearr_24454_24473 = state_24446__$1;(statearr_24454_24473[1] = 9);
} else
{var statearr_24455_24474 = state_24446__$1;(statearr_24455_24474[1] = 10);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 7))
{var inst_24442 = (state_24446[2]);var state_24446__$1 = state_24446;var statearr_24456_24475 = state_24446__$1;(statearr_24456_24475[2] = inst_24442);
(statearr_24456_24475[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 8))
{var inst_24439 = (state_24446[2]);var state_24446__$1 = (function (){var statearr_24457 = state_24446;(statearr_24457[9] = inst_24439);
return statearr_24457;
})();var statearr_24458_24476 = state_24446__$1;(statearr_24458_24476[2] = null);
(statearr_24458_24476[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 9))
{var state_24446__$1 = state_24446;var statearr_24459_24477 = state_24446__$1;(statearr_24459_24477[2] = tc);
(statearr_24459_24477[1] = 11);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 10))
{var state_24446__$1 = state_24446;var statearr_24460_24478 = state_24446__$1;(statearr_24460_24478[2] = fc);
(statearr_24460_24478[1] = 11);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24447 === 11))
{var inst_24427 = (state_24446[7]);var inst_24437 = (state_24446[2]);var state_24446__$1 = state_24446;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24446__$1,8,inst_24437,inst_24427);
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
var state_machine__5507__auto____0 = (function (){var statearr_24464 = [null,null,null,null,null,null,null,null,null,null];(statearr_24464[0] = state_machine__5507__auto__);
(statearr_24464[1] = 1);
return statearr_24464;
});
var state_machine__5507__auto____1 = (function (state_24446){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24446);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24465){if((e24465 instanceof Object))
{var ex__5510__auto__ = e24465;var statearr_24466_24479 = state_24446;(statearr_24466_24479[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24446);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24480 = state_24446;
state_24446 = G__24480;
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
})();var state__5523__auto__ = (function (){var statearr_24467 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24468);
return statearr_24467;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24527){var state_val_24528 = (state_24527[1]);if((state_val_24528 === 7))
{var inst_24523 = (state_24527[2]);var state_24527__$1 = state_24527;var statearr_24529_24545 = state_24527__$1;(statearr_24529_24545[2] = inst_24523);
(statearr_24529_24545[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24528 === 6))
{var inst_24513 = (state_24527[7]);var inst_24516 = (state_24527[8]);var inst_24520 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24513,inst_24516) : f.call(null,inst_24513,inst_24516));var inst_24513__$1 = inst_24520;var state_24527__$1 = (function (){var statearr_24530 = state_24527;(statearr_24530[7] = inst_24513__$1);
return statearr_24530;
})();var statearr_24531_24546 = state_24527__$1;(statearr_24531_24546[2] = null);
(statearr_24531_24546[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24528 === 5))
{var inst_24513 = (state_24527[7]);var state_24527__$1 = state_24527;var statearr_24532_24547 = state_24527__$1;(statearr_24532_24547[2] = inst_24513);
(statearr_24532_24547[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24528 === 4))
{var inst_24516 = (state_24527[8]);var inst_24516__$1 = (state_24527[2]);var inst_24517 = (inst_24516__$1 == null);var state_24527__$1 = (function (){var statearr_24533 = state_24527;(statearr_24533[8] = inst_24516__$1);
return statearr_24533;
})();if(cljs.core.truth_(inst_24517))
{var statearr_24534_24548 = state_24527__$1;(statearr_24534_24548[1] = 5);
} else
{var statearr_24535_24549 = state_24527__$1;(statearr_24535_24549[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24528 === 3))
{var inst_24525 = (state_24527[2]);var state_24527__$1 = state_24527;return cljs.core.async.impl.ioc_helpers.return_chan(state_24527__$1,inst_24525);
} else
{if((state_val_24528 === 2))
{var state_24527__$1 = state_24527;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24527__$1,4,ch);
} else
{if((state_val_24528 === 1))
{var inst_24513 = init;var state_24527__$1 = (function (){var statearr_24536 = state_24527;(statearr_24536[7] = inst_24513);
return statearr_24536;
})();var statearr_24537_24550 = state_24527__$1;(statearr_24537_24550[2] = null);
(statearr_24537_24550[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_24541 = [null,null,null,null,null,null,null,null,null];(statearr_24541[0] = state_machine__5507__auto__);
(statearr_24541[1] = 1);
return statearr_24541;
});
var state_machine__5507__auto____1 = (function (state_24527){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24527);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24542){if((e24542 instanceof Object))
{var ex__5510__auto__ = e24542;var statearr_24543_24551 = state_24527;(statearr_24543_24551[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24527);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24552 = state_24527;
state_24527 = G__24552;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24527){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24544 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24544;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24614){var state_val_24615 = (state_24614[1]);if((state_val_24615 === 1))
{var inst_24594 = cljs.core.seq(coll);var inst_24595 = inst_24594;var state_24614__$1 = (function (){var statearr_24616 = state_24614;(statearr_24616[7] = inst_24595);
return statearr_24616;
})();var statearr_24617_24635 = state_24614__$1;(statearr_24617_24635[2] = null);
(statearr_24617_24635[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 2))
{var inst_24595 = (state_24614[7]);var state_24614__$1 = state_24614;if(cljs.core.truth_(inst_24595))
{var statearr_24618_24636 = state_24614__$1;(statearr_24618_24636[1] = 4);
} else
{var statearr_24619_24637 = state_24614__$1;(statearr_24619_24637[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 3))
{var inst_24612 = (state_24614[2]);var state_24614__$1 = state_24614;return cljs.core.async.impl.ioc_helpers.return_chan(state_24614__$1,inst_24612);
} else
{if((state_val_24615 === 4))
{var inst_24595 = (state_24614[7]);var inst_24598 = cljs.core.first(inst_24595);var state_24614__$1 = state_24614;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24614__$1,7,ch,inst_24598);
} else
{if((state_val_24615 === 5))
{var state_24614__$1 = state_24614;if(cljs.core.truth_(close_QMARK_))
{var statearr_24620_24638 = state_24614__$1;(statearr_24620_24638[1] = 8);
} else
{var statearr_24621_24639 = state_24614__$1;(statearr_24621_24639[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 6))
{var inst_24610 = (state_24614[2]);var state_24614__$1 = state_24614;var statearr_24622_24640 = state_24614__$1;(statearr_24622_24640[2] = inst_24610);
(statearr_24622_24640[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 7))
{var inst_24595 = (state_24614[7]);var inst_24600 = (state_24614[2]);var inst_24601 = cljs.core.next(inst_24595);var inst_24595__$1 = inst_24601;var state_24614__$1 = (function (){var statearr_24623 = state_24614;(statearr_24623[8] = inst_24600);
(statearr_24623[7] = inst_24595__$1);
return statearr_24623;
})();var statearr_24624_24641 = state_24614__$1;(statearr_24624_24641[2] = null);
(statearr_24624_24641[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 8))
{var inst_24605 = cljs.core.async.close_BANG_(ch);var state_24614__$1 = state_24614;var statearr_24625_24642 = state_24614__$1;(statearr_24625_24642[2] = inst_24605);
(statearr_24625_24642[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 9))
{var state_24614__$1 = state_24614;var statearr_24626_24643 = state_24614__$1;(statearr_24626_24643[2] = null);
(statearr_24626_24643[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_24615 === 10))
{var inst_24608 = (state_24614[2]);var state_24614__$1 = state_24614;var statearr_24627_24644 = state_24614__$1;(statearr_24627_24644[2] = inst_24608);
(statearr_24627_24644[1] = 6);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_24631 = [null,null,null,null,null,null,null,null,null];(statearr_24631[0] = state_machine__5507__auto__);
(statearr_24631[1] = 1);
return statearr_24631;
});
var state_machine__5507__auto____1 = (function (state_24614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24614);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24632){if((e24632 instanceof Object))
{var ex__5510__auto__ = e24632;var statearr_24633_24645 = state_24614;(statearr_24633_24645[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24614);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e24632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__24646 = state_24614;
state_24614 = G__24646;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24634 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24634;
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
cljs.core.async.Mux = (function (){var obj24648 = {};return obj24648;
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
cljs.core.async.Mult = (function (){var obj24650 = {};return obj24650;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24874 = (function (cs,ch,mult,meta24875){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24875 = meta24875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24874.cljs$lang$type = true;
cljs.core.async.t24874.cljs$lang$ctorStr = "cljs.core.async/t24874";
cljs.core.async.t24874.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24874");
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24874.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24876){var self__ = this;
var _24876__$1 = this;return self__.meta24875;
});})(cs))
;
cljs.core.async.t24874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24876,meta24875__$1){var self__ = this;
var _24876__$1 = this;return (new cljs.core.async.t24874(self__.cs,self__.ch,self__.mult,meta24875__$1));
});})(cs))
;
cljs.core.async.__GT_t24874 = ((function (cs){
return (function __GT_t24874(cs__$1,ch__$1,mult__$1,meta24875){return (new cljs.core.async.t24874(cs__$1,ch__$1,mult__$1,meta24875));
});})(cs))
;
}
return (new cljs.core.async.t24874(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25011){var state_val_25012 = (state_25011[1]);if((state_val_25012 === 32))
{var inst_24955 = (state_25011[7]);var inst_24879 = (state_25011[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25011,31,Object,null,30);var inst_24962 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24955,inst_24879,done);var state_25011__$1 = state_25011;var statearr_25013_25098 = state_25011__$1;(statearr_25013_25098[2] = inst_24962);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 1))
{var state_25011__$1 = state_25011;var statearr_25014_25099 = state_25011__$1;(statearr_25014_25099[2] = null);
(statearr_25014_25099[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 33))
{var inst_24968 = (state_25011[9]);var inst_24970 = cljs.core.chunked_seq_QMARK_(inst_24968);var state_25011__$1 = state_25011;if(inst_24970)
{var statearr_25015_25100 = state_25011__$1;(statearr_25015_25100[1] = 36);
} else
{var statearr_25016_25101 = state_25011__$1;(statearr_25016_25101[1] = 37);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 2))
{var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25011__$1,4,ch);
} else
{if((state_val_25012 === 34))
{var state_25011__$1 = state_25011;var statearr_25017_25102 = state_25011__$1;(statearr_25017_25102[2] = null);
(statearr_25017_25102[1] = 35);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 3))
{var inst_25009 = (state_25011[2]);var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.return_chan(state_25011__$1,inst_25009);
} else
{if((state_val_25012 === 35))
{var inst_24993 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25018_25103 = state_25011__$1;(statearr_25018_25103[2] = inst_24993);
(statearr_25018_25103[1] = 29);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 4))
{var inst_24879 = (state_25011[8]);var inst_24879__$1 = (state_25011[2]);var inst_24880 = (inst_24879__$1 == null);var state_25011__$1 = (function (){var statearr_25019 = state_25011;(statearr_25019[8] = inst_24879__$1);
return statearr_25019;
})();if(cljs.core.truth_(inst_24880))
{var statearr_25020_25104 = state_25011__$1;(statearr_25020_25104[1] = 5);
} else
{var statearr_25021_25105 = state_25011__$1;(statearr_25021_25105[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 36))
{var inst_24968 = (state_25011[9]);var inst_24972 = cljs.core.chunk_first(inst_24968);var inst_24973 = cljs.core.chunk_rest(inst_24968);var inst_24974 = cljs.core.count(inst_24972);var inst_24947 = inst_24973;var inst_24948 = inst_24972;var inst_24949 = inst_24974;var inst_24950 = 0;var state_25011__$1 = (function (){var statearr_25022 = state_25011;(statearr_25022[10] = inst_24947);
(statearr_25022[11] = inst_24949);
(statearr_25022[12] = inst_24948);
(statearr_25022[13] = inst_24950);
return statearr_25022;
})();var statearr_25023_25106 = state_25011__$1;(statearr_25023_25106[2] = null);
(statearr_25023_25106[1] = 25);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 5))
{var inst_24886 = cljs.core.deref(cs);var inst_24887 = cljs.core.seq(inst_24886);var inst_24888 = inst_24887;var inst_24889 = null;var inst_24890 = 0;var inst_24891 = 0;var state_25011__$1 = (function (){var statearr_25024 = state_25011;(statearr_25024[14] = inst_24888);
(statearr_25024[15] = inst_24889);
(statearr_25024[16] = inst_24890);
(statearr_25024[17] = inst_24891);
return statearr_25024;
})();var statearr_25025_25107 = state_25011__$1;(statearr_25025_25107[2] = null);
(statearr_25025_25107[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 37))
{var inst_24968 = (state_25011[9]);var inst_24977 = cljs.core.first(inst_24968);var state_25011__$1 = (function (){var statearr_25026 = state_25011;(statearr_25026[18] = inst_24977);
return statearr_25026;
})();var statearr_25027_25108 = state_25011__$1;(statearr_25027_25108[2] = null);
(statearr_25027_25108[1] = 41);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 6))
{var inst_24939 = (state_25011[19]);var inst_24938 = cljs.core.deref(cs);var inst_24939__$1 = cljs.core.keys(inst_24938);var inst_24940 = cljs.core.count(inst_24939__$1);var inst_24941 = cljs.core.reset_BANG_(dctr,inst_24940);var inst_24946 = cljs.core.seq(inst_24939__$1);var inst_24947 = inst_24946;var inst_24948 = null;var inst_24949 = 0;var inst_24950 = 0;var state_25011__$1 = (function (){var statearr_25028 = state_25011;(statearr_25028[19] = inst_24939__$1);
(statearr_25028[10] = inst_24947);
(statearr_25028[11] = inst_24949);
(statearr_25028[12] = inst_24948);
(statearr_25028[13] = inst_24950);
(statearr_25028[20] = inst_24941);
return statearr_25028;
})();var statearr_25029_25109 = state_25011__$1;(statearr_25029_25109[2] = null);
(statearr_25029_25109[1] = 25);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 38))
{var inst_24990 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25030_25110 = state_25011__$1;(statearr_25030_25110[2] = inst_24990);
(statearr_25030_25110[1] = 35);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 7))
{var inst_25007 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25031_25111 = state_25011__$1;(statearr_25031_25111[2] = inst_25007);
(statearr_25031_25111[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 39))
{var inst_24968 = (state_25011[9]);var inst_24986 = (state_25011[2]);var inst_24987 = cljs.core.next(inst_24968);var inst_24947 = inst_24987;var inst_24948 = null;var inst_24949 = 0;var inst_24950 = 0;var state_25011__$1 = (function (){var statearr_25032 = state_25011;(statearr_25032[10] = inst_24947);
(statearr_25032[11] = inst_24949);
(statearr_25032[12] = inst_24948);
(statearr_25032[21] = inst_24986);
(statearr_25032[13] = inst_24950);
return statearr_25032;
})();var statearr_25033_25112 = state_25011__$1;(statearr_25033_25112[2] = null);
(statearr_25033_25112[1] = 25);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 8))
{var inst_24890 = (state_25011[16]);var inst_24891 = (state_25011[17]);var inst_24893 = (inst_24891 < inst_24890);var inst_24894 = inst_24893;var state_25011__$1 = state_25011;if(cljs.core.truth_(inst_24894))
{var statearr_25034_25113 = state_25011__$1;(statearr_25034_25113[1] = 10);
} else
{var statearr_25035_25114 = state_25011__$1;(statearr_25035_25114[1] = 11);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 40))
{var inst_24977 = (state_25011[18]);var inst_24978 = (state_25011[2]);var inst_24979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24977);var state_25011__$1 = (function (){var statearr_25036 = state_25011;(statearr_25036[22] = inst_24979);
(statearr_25036[23] = inst_24978);
return statearr_25036;
})();var statearr_25037_25115 = state_25011__$1;(statearr_25037_25115[2] = inst_24980);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 9))
{var inst_24936 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25038_25116 = state_25011__$1;(statearr_25038_25116[2] = inst_24936);
(statearr_25038_25116[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 41))
{var inst_24879 = (state_25011[8]);var inst_24977 = (state_25011[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25011,40,Object,null,39);var inst_24984 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24977,inst_24879,done);var state_25011__$1 = state_25011;var statearr_25039_25117 = state_25011__$1;(statearr_25039_25117[2] = inst_24984);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 10))
{var inst_24889 = (state_25011[15]);var inst_24891 = (state_25011[17]);var inst_24897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24889,inst_24891);var inst_24898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24897,0,null);var inst_24899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24897,1,null);var state_25011__$1 = (function (){var statearr_25040 = state_25011;(statearr_25040[24] = inst_24898);
return statearr_25040;
})();if(cljs.core.truth_(inst_24899))
{var statearr_25041_25118 = state_25011__$1;(statearr_25041_25118[1] = 13);
} else
{var statearr_25042_25119 = state_25011__$1;(statearr_25042_25119[1] = 14);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 42))
{var state_25011__$1 = state_25011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25011__$1,45,dchan);
} else
{if((state_val_25012 === 11))
{var inst_24888 = (state_25011[14]);var inst_24908 = (state_25011[25]);var inst_24908__$1 = cljs.core.seq(inst_24888);var state_25011__$1 = (function (){var statearr_25043 = state_25011;(statearr_25043[25] = inst_24908__$1);
return statearr_25043;
})();if(inst_24908__$1)
{var statearr_25044_25120 = state_25011__$1;(statearr_25044_25120[1] = 16);
} else
{var statearr_25045_25121 = state_25011__$1;(statearr_25045_25121[1] = 17);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 43))
{var state_25011__$1 = state_25011;var statearr_25046_25122 = state_25011__$1;(statearr_25046_25122[2] = null);
(statearr_25046_25122[1] = 44);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 12))
{var inst_24934 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25047_25123 = state_25011__$1;(statearr_25047_25123[2] = inst_24934);
(statearr_25047_25123[1] = 9);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 44))
{var inst_25004 = (state_25011[2]);var state_25011__$1 = (function (){var statearr_25048 = state_25011;(statearr_25048[26] = inst_25004);
return statearr_25048;
})();var statearr_25049_25124 = state_25011__$1;(statearr_25049_25124[2] = null);
(statearr_25049_25124[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 13))
{var inst_24898 = (state_25011[24]);var inst_24901 = cljs.core.async.close_BANG_(inst_24898);var state_25011__$1 = state_25011;var statearr_25050_25125 = state_25011__$1;(statearr_25050_25125[2] = inst_24901);
(statearr_25050_25125[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 45))
{var inst_25001 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25054_25126 = state_25011__$1;(statearr_25054_25126[2] = inst_25001);
(statearr_25054_25126[1] = 44);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 14))
{var state_25011__$1 = state_25011;var statearr_25055_25127 = state_25011__$1;(statearr_25055_25127[2] = null);
(statearr_25055_25127[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 15))
{var inst_24888 = (state_25011[14]);var inst_24889 = (state_25011[15]);var inst_24890 = (state_25011[16]);var inst_24891 = (state_25011[17]);var inst_24904 = (state_25011[2]);var inst_24905 = (inst_24891 + 1);var tmp25051 = inst_24888;var tmp25052 = inst_24889;var tmp25053 = inst_24890;var inst_24888__$1 = tmp25051;var inst_24889__$1 = tmp25052;var inst_24890__$1 = tmp25053;var inst_24891__$1 = inst_24905;var state_25011__$1 = (function (){var statearr_25056 = state_25011;(statearr_25056[14] = inst_24888__$1);
(statearr_25056[15] = inst_24889__$1);
(statearr_25056[16] = inst_24890__$1);
(statearr_25056[27] = inst_24904);
(statearr_25056[17] = inst_24891__$1);
return statearr_25056;
})();var statearr_25057_25128 = state_25011__$1;(statearr_25057_25128[2] = null);
(statearr_25057_25128[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 16))
{var inst_24908 = (state_25011[25]);var inst_24910 = cljs.core.chunked_seq_QMARK_(inst_24908);var state_25011__$1 = state_25011;if(inst_24910)
{var statearr_25058_25129 = state_25011__$1;(statearr_25058_25129[1] = 19);
} else
{var statearr_25059_25130 = state_25011__$1;(statearr_25059_25130[1] = 20);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 17))
{var state_25011__$1 = state_25011;var statearr_25060_25131 = state_25011__$1;(statearr_25060_25131[2] = null);
(statearr_25060_25131[1] = 18);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 18))
{var inst_24932 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25061_25132 = state_25011__$1;(statearr_25061_25132[2] = inst_24932);
(statearr_25061_25132[1] = 12);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 19))
{var inst_24908 = (state_25011[25]);var inst_24912 = cljs.core.chunk_first(inst_24908);var inst_24913 = cljs.core.chunk_rest(inst_24908);var inst_24914 = cljs.core.count(inst_24912);var inst_24888 = inst_24913;var inst_24889 = inst_24912;var inst_24890 = inst_24914;var inst_24891 = 0;var state_25011__$1 = (function (){var statearr_25062 = state_25011;(statearr_25062[14] = inst_24888);
(statearr_25062[15] = inst_24889);
(statearr_25062[16] = inst_24890);
(statearr_25062[17] = inst_24891);
return statearr_25062;
})();var statearr_25063_25133 = state_25011__$1;(statearr_25063_25133[2] = null);
(statearr_25063_25133[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 20))
{var inst_24908 = (state_25011[25]);var inst_24918 = cljs.core.first(inst_24908);var inst_24919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24918,0,null);var inst_24920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24918,1,null);var state_25011__$1 = (function (){var statearr_25064 = state_25011;(statearr_25064[28] = inst_24919);
return statearr_25064;
})();if(cljs.core.truth_(inst_24920))
{var statearr_25065_25134 = state_25011__$1;(statearr_25065_25134[1] = 22);
} else
{var statearr_25066_25135 = state_25011__$1;(statearr_25066_25135[1] = 23);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 21))
{var inst_24929 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25067_25136 = state_25011__$1;(statearr_25067_25136[2] = inst_24929);
(statearr_25067_25136[1] = 18);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 22))
{var inst_24919 = (state_25011[28]);var inst_24922 = cljs.core.async.close_BANG_(inst_24919);var state_25011__$1 = state_25011;var statearr_25068_25137 = state_25011__$1;(statearr_25068_25137[2] = inst_24922);
(statearr_25068_25137[1] = 24);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 23))
{var state_25011__$1 = state_25011;var statearr_25069_25138 = state_25011__$1;(statearr_25069_25138[2] = null);
(statearr_25069_25138[1] = 24);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 24))
{var inst_24908 = (state_25011[25]);var inst_24925 = (state_25011[2]);var inst_24926 = cljs.core.next(inst_24908);var inst_24888 = inst_24926;var inst_24889 = null;var inst_24890 = 0;var inst_24891 = 0;var state_25011__$1 = (function (){var statearr_25070 = state_25011;(statearr_25070[14] = inst_24888);
(statearr_25070[15] = inst_24889);
(statearr_25070[16] = inst_24890);
(statearr_25070[17] = inst_24891);
(statearr_25070[29] = inst_24925);
return statearr_25070;
})();var statearr_25071_25139 = state_25011__$1;(statearr_25071_25139[2] = null);
(statearr_25071_25139[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 25))
{var inst_24949 = (state_25011[11]);var inst_24950 = (state_25011[13]);var inst_24952 = (inst_24950 < inst_24949);var inst_24953 = inst_24952;var state_25011__$1 = state_25011;if(cljs.core.truth_(inst_24953))
{var statearr_25072_25140 = state_25011__$1;(statearr_25072_25140[1] = 27);
} else
{var statearr_25073_25141 = state_25011__$1;(statearr_25073_25141[1] = 28);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 26))
{var inst_24939 = (state_25011[19]);var inst_24997 = (state_25011[2]);var inst_24998 = cljs.core.seq(inst_24939);var state_25011__$1 = (function (){var statearr_25074 = state_25011;(statearr_25074[30] = inst_24997);
return statearr_25074;
})();if(inst_24998)
{var statearr_25075_25142 = state_25011__$1;(statearr_25075_25142[1] = 42);
} else
{var statearr_25076_25143 = state_25011__$1;(statearr_25076_25143[1] = 43);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 27))
{var inst_24948 = (state_25011[12]);var inst_24950 = (state_25011[13]);var inst_24955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24948,inst_24950);var state_25011__$1 = (function (){var statearr_25077 = state_25011;(statearr_25077[7] = inst_24955);
return statearr_25077;
})();var statearr_25078_25144 = state_25011__$1;(statearr_25078_25144[2] = null);
(statearr_25078_25144[1] = 32);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 28))
{var inst_24947 = (state_25011[10]);var inst_24968 = (state_25011[9]);var inst_24968__$1 = cljs.core.seq(inst_24947);var state_25011__$1 = (function (){var statearr_25082 = state_25011;(statearr_25082[9] = inst_24968__$1);
return statearr_25082;
})();if(inst_24968__$1)
{var statearr_25083_25145 = state_25011__$1;(statearr_25083_25145[1] = 33);
} else
{var statearr_25084_25146 = state_25011__$1;(statearr_25084_25146[1] = 34);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 29))
{var inst_24995 = (state_25011[2]);var state_25011__$1 = state_25011;var statearr_25085_25147 = state_25011__$1;(statearr_25085_25147[2] = inst_24995);
(statearr_25085_25147[1] = 26);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 30))
{var inst_24947 = (state_25011[10]);var inst_24949 = (state_25011[11]);var inst_24948 = (state_25011[12]);var inst_24950 = (state_25011[13]);var inst_24964 = (state_25011[2]);var inst_24965 = (inst_24950 + 1);var tmp25079 = inst_24947;var tmp25080 = inst_24949;var tmp25081 = inst_24948;var inst_24947__$1 = tmp25079;var inst_24948__$1 = tmp25081;var inst_24949__$1 = tmp25080;var inst_24950__$1 = inst_24965;var state_25011__$1 = (function (){var statearr_25086 = state_25011;(statearr_25086[31] = inst_24964);
(statearr_25086[10] = inst_24947__$1);
(statearr_25086[11] = inst_24949__$1);
(statearr_25086[12] = inst_24948__$1);
(statearr_25086[13] = inst_24950__$1);
return statearr_25086;
})();var statearr_25087_25148 = state_25011__$1;(statearr_25087_25148[2] = null);
(statearr_25087_25148[1] = 25);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25012 === 31))
{var inst_24955 = (state_25011[7]);var inst_24956 = (state_25011[2]);var inst_24957 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24955);var state_25011__$1 = (function (){var statearr_25088 = state_25011;(statearr_25088[32] = inst_24956);
(statearr_25088[33] = inst_24957);
return statearr_25088;
})();var statearr_25089_25149 = state_25011__$1;(statearr_25089_25149[2] = inst_24958);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011__$1);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_25093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25093[0] = state_machine__5507__auto__);
(statearr_25093[1] = 1);
return statearr_25093;
});
var state_machine__5507__auto____1 = (function (state_25011){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25011);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object))
{var ex__5510__auto__ = e25094;var statearr_25095_25150 = state_25011;(statearr_25095_25150[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25011);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e25094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__25151 = state_25011;
state_25011 = G__25151;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25096 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25097);
return statearr_25096;
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
cljs.core.async.Mix = (function (){var obj25153 = {};return obj25153;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,null,cljs.core.constant$keyword$240,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$241);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$240);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$241,chs);var pauses = pick(cljs.core.constant$keyword$239,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$242,solos,cljs.core.constant$keyword$243,pick(cljs.core.constant$keyword$240,chs),cljs.core.constant$keyword$244,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$239)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25263 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25264){
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
this.meta25264 = meta25264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25263.cljs$lang$type = true;
cljs.core.async.t25263.cljs$lang$ctorStr = "cljs.core.async/t25263";
cljs.core.async.t25263.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25263");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25263.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25265){var self__ = this;
var _25265__$1 = this;return self__.meta25264;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25265,meta25264__$1){var self__ = this;
var _25265__$1 = this;return (new cljs.core.async.t25263(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25264__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25263 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25263(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25264){return (new cljs.core.async.t25263(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25264));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25263(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25330){var state_val_25331 = (state_25330[1]);if((state_val_25331 === 1))
{var inst_25269 = (state_25330[7]);var inst_25269__$1 = calc_state();var inst_25270 = cljs.core.seq_QMARK_(inst_25269__$1);var state_25330__$1 = (function (){var statearr_25332 = state_25330;(statearr_25332[7] = inst_25269__$1);
return statearr_25332;
})();if(inst_25270)
{var statearr_25333_25373 = state_25330__$1;(statearr_25333_25373[1] = 2);
} else
{var statearr_25334_25374 = state_25330__$1;(statearr_25334_25374[1] = 3);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 2))
{var inst_25269 = (state_25330[7]);var inst_25272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25269);var state_25330__$1 = state_25330;var statearr_25335_25375 = state_25330__$1;(statearr_25335_25375[2] = inst_25272);
(statearr_25335_25375[1] = 4);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 3))
{var inst_25269 = (state_25330[7]);var state_25330__$1 = state_25330;var statearr_25336_25376 = state_25330__$1;(statearr_25336_25376[2] = inst_25269);
(statearr_25336_25376[1] = 4);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 4))
{var inst_25269 = (state_25330[7]);var inst_25275 = (state_25330[2]);var inst_25276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25275,cljs.core.constant$keyword$244);var inst_25277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25275,cljs.core.constant$keyword$243);var inst_25278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25275,cljs.core.constant$keyword$242);var inst_25279 = inst_25269;var state_25330__$1 = (function (){var statearr_25337 = state_25330;(statearr_25337[8] = inst_25277);
(statearr_25337[9] = inst_25278);
(statearr_25337[10] = inst_25276);
(statearr_25337[11] = inst_25279);
return statearr_25337;
})();var statearr_25338_25377 = state_25330__$1;(statearr_25338_25377[2] = null);
(statearr_25338_25377[1] = 5);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 5))
{var inst_25279 = (state_25330[11]);var inst_25282 = cljs.core.seq_QMARK_(inst_25279);var state_25330__$1 = state_25330;if(inst_25282)
{var statearr_25339_25378 = state_25330__$1;(statearr_25339_25378[1] = 7);
} else
{var statearr_25340_25379 = state_25330__$1;(statearr_25340_25379[1] = 8);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 6))
{var inst_25328 = (state_25330[2]);var state_25330__$1 = state_25330;return cljs.core.async.impl.ioc_helpers.return_chan(state_25330__$1,inst_25328);
} else
{if((state_val_25331 === 7))
{var inst_25279 = (state_25330[11]);var inst_25284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25279);var state_25330__$1 = state_25330;var statearr_25341_25380 = state_25330__$1;(statearr_25341_25380[2] = inst_25284);
(statearr_25341_25380[1] = 9);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 8))
{var inst_25279 = (state_25330[11]);var state_25330__$1 = state_25330;var statearr_25342_25381 = state_25330__$1;(statearr_25342_25381[2] = inst_25279);
(statearr_25342_25381[1] = 9);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 9))
{var inst_25287 = (state_25330[12]);var inst_25287__$1 = (state_25330[2]);var inst_25288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25287__$1,cljs.core.constant$keyword$244);var inst_25289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25287__$1,cljs.core.constant$keyword$243);var inst_25290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25287__$1,cljs.core.constant$keyword$242);var state_25330__$1 = (function (){var statearr_25343 = state_25330;(statearr_25343[13] = inst_25289);
(statearr_25343[14] = inst_25290);
(statearr_25343[12] = inst_25287__$1);
return statearr_25343;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25330__$1,10,inst_25288);
} else
{if((state_val_25331 === 10))
{var inst_25294 = (state_25330[15]);var inst_25295 = (state_25330[16]);var inst_25293 = (state_25330[2]);var inst_25294__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25293,0,null);var inst_25295__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25293,1,null);var inst_25296 = (inst_25294__$1 == null);var inst_25297 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25295__$1,change);var inst_25298 = (inst_25296) || (inst_25297);var state_25330__$1 = (function (){var statearr_25344 = state_25330;(statearr_25344[15] = inst_25294__$1);
(statearr_25344[16] = inst_25295__$1);
return statearr_25344;
})();if(cljs.core.truth_(inst_25298))
{var statearr_25345_25382 = state_25330__$1;(statearr_25345_25382[1] = 11);
} else
{var statearr_25346_25383 = state_25330__$1;(statearr_25346_25383[1] = 12);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 11))
{var inst_25294 = (state_25330[15]);var inst_25300 = (inst_25294 == null);var state_25330__$1 = state_25330;if(cljs.core.truth_(inst_25300))
{var statearr_25347_25384 = state_25330__$1;(statearr_25347_25384[1] = 14);
} else
{var statearr_25348_25385 = state_25330__$1;(statearr_25348_25385[1] = 15);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 12))
{var inst_25309 = (state_25330[17]);var inst_25295 = (state_25330[16]);var inst_25290 = (state_25330[14]);var inst_25309__$1 = (inst_25290.cljs$core$IFn$_invoke$arity$1 ? inst_25290.cljs$core$IFn$_invoke$arity$1(inst_25295) : inst_25290.call(null,inst_25295));var state_25330__$1 = (function (){var statearr_25349 = state_25330;(statearr_25349[17] = inst_25309__$1);
return statearr_25349;
})();if(cljs.core.truth_(inst_25309__$1))
{var statearr_25350_25386 = state_25330__$1;(statearr_25350_25386[1] = 17);
} else
{var statearr_25351_25387 = state_25330__$1;(statearr_25351_25387[1] = 18);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 13))
{var inst_25326 = (state_25330[2]);var state_25330__$1 = state_25330;var statearr_25352_25388 = state_25330__$1;(statearr_25352_25388[2] = inst_25326);
(statearr_25352_25388[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 14))
{var inst_25295 = (state_25330[16]);var inst_25302 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25295);var state_25330__$1 = state_25330;var statearr_25353_25389 = state_25330__$1;(statearr_25353_25389[2] = inst_25302);
(statearr_25353_25389[1] = 16);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 15))
{var state_25330__$1 = state_25330;var statearr_25354_25390 = state_25330__$1;(statearr_25354_25390[2] = null);
(statearr_25354_25390[1] = 16);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 16))
{var inst_25305 = (state_25330[2]);var inst_25306 = calc_state();var inst_25279 = inst_25306;var state_25330__$1 = (function (){var statearr_25355 = state_25330;(statearr_25355[18] = inst_25305);
(statearr_25355[11] = inst_25279);
return statearr_25355;
})();var statearr_25356_25391 = state_25330__$1;(statearr_25356_25391[2] = null);
(statearr_25356_25391[1] = 5);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 17))
{var inst_25309 = (state_25330[17]);var state_25330__$1 = state_25330;var statearr_25357_25392 = state_25330__$1;(statearr_25357_25392[2] = inst_25309);
(statearr_25357_25392[1] = 19);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 18))
{var inst_25295 = (state_25330[16]);var inst_25289 = (state_25330[13]);var inst_25290 = (state_25330[14]);var inst_25312 = cljs.core.empty_QMARK_(inst_25290);var inst_25313 = (inst_25289.cljs$core$IFn$_invoke$arity$1 ? inst_25289.cljs$core$IFn$_invoke$arity$1(inst_25295) : inst_25289.call(null,inst_25295));var inst_25314 = cljs.core.not(inst_25313);var inst_25315 = (inst_25312) && (inst_25314);var state_25330__$1 = state_25330;var statearr_25358_25393 = state_25330__$1;(statearr_25358_25393[2] = inst_25315);
(statearr_25358_25393[1] = 19);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 19))
{var inst_25317 = (state_25330[2]);var state_25330__$1 = state_25330;if(cljs.core.truth_(inst_25317))
{var statearr_25359_25394 = state_25330__$1;(statearr_25359_25394[1] = 20);
} else
{var statearr_25360_25395 = state_25330__$1;(statearr_25360_25395[1] = 21);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 20))
{var inst_25294 = (state_25330[15]);var state_25330__$1 = state_25330;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25330__$1,23,out,inst_25294);
} else
{if((state_val_25331 === 21))
{var state_25330__$1 = state_25330;var statearr_25361_25396 = state_25330__$1;(statearr_25361_25396[2] = null);
(statearr_25361_25396[1] = 22);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 22))
{var inst_25287 = (state_25330[12]);var inst_25323 = (state_25330[2]);var inst_25279 = inst_25287;var state_25330__$1 = (function (){var statearr_25362 = state_25330;(statearr_25362[19] = inst_25323);
(statearr_25362[11] = inst_25279);
return statearr_25362;
})();var statearr_25363_25397 = state_25330__$1;(statearr_25363_25397[2] = null);
(statearr_25363_25397[1] = 5);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25331 === 23))
{var inst_25320 = (state_25330[2]);var state_25330__$1 = state_25330;var statearr_25364_25398 = state_25330__$1;(statearr_25364_25398[2] = inst_25320);
(statearr_25364_25398[1] = 22);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_25368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25368[0] = state_machine__5507__auto__);
(statearr_25368[1] = 1);
return statearr_25368;
});
var state_machine__5507__auto____1 = (function (state_25330){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25330);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25369){if((e25369 instanceof Object))
{var ex__5510__auto__ = e25369;var statearr_25370_25399 = state_25330;(statearr_25370_25399[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25330);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e25369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__25400 = state_25330;
state_25330 = G__25400;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25330){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25371 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25372);
return statearr_25371;
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
cljs.core.async.Pub = (function (){var obj25402 = {};return obj25402;
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
return (function (p1__25403_SHARP_){if(cljs.core.truth_((p1__25403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25403_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25403_SHARP_.call(null,topic))))
{return p1__25403_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25403_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25528 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25529){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25529 = meta25529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25528.cljs$lang$type = true;
cljs.core.async.t25528.cljs$lang$ctorStr = "cljs.core.async/t25528";
cljs.core.async.t25528.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25528");
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25528.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25530){var self__ = this;
var _25530__$1 = this;return self__.meta25529;
});})(mults,ensure_mult))
;
cljs.core.async.t25528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25530,meta25529__$1){var self__ = this;
var _25530__$1 = this;return (new cljs.core.async.t25528(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25529__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25528 = ((function (mults,ensure_mult){
return (function __GT_t25528(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25529){return (new cljs.core.async.t25528(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25529));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25528(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25604){var state_val_25605 = (state_25604[1]);if((state_val_25605 === 1))
{var state_25604__$1 = state_25604;var statearr_25606_25653 = state_25604__$1;(statearr_25606_25653[2] = null);
(statearr_25606_25653[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 2))
{var state_25604__$1 = state_25604;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25604__$1,4,ch);
} else
{if((state_val_25605 === 3))
{var inst_25602 = (state_25604[2]);var state_25604__$1 = state_25604;return cljs.core.async.impl.ioc_helpers.return_chan(state_25604__$1,inst_25602);
} else
{if((state_val_25605 === 4))
{var inst_25533 = (state_25604[7]);var inst_25533__$1 = (state_25604[2]);var inst_25534 = (inst_25533__$1 == null);var state_25604__$1 = (function (){var statearr_25607 = state_25604;(statearr_25607[7] = inst_25533__$1);
return statearr_25607;
})();if(cljs.core.truth_(inst_25534))
{var statearr_25608_25654 = state_25604__$1;(statearr_25608_25654[1] = 5);
} else
{var statearr_25609_25655 = state_25604__$1;(statearr_25609_25655[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 5))
{var inst_25540 = cljs.core.deref(mults);var inst_25541 = cljs.core.vals(inst_25540);var inst_25542 = cljs.core.seq(inst_25541);var inst_25543 = inst_25542;var inst_25544 = null;var inst_25545 = 0;var inst_25546 = 0;var state_25604__$1 = (function (){var statearr_25610 = state_25604;(statearr_25610[8] = inst_25546);
(statearr_25610[9] = inst_25545);
(statearr_25610[10] = inst_25544);
(statearr_25610[11] = inst_25543);
return statearr_25610;
})();var statearr_25611_25656 = state_25604__$1;(statearr_25611_25656[2] = null);
(statearr_25611_25656[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 6))
{var inst_25583 = (state_25604[12]);var inst_25533 = (state_25604[7]);var inst_25581 = (state_25604[13]);var inst_25581__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25533) : topic_fn.call(null,inst_25533));var inst_25582 = cljs.core.deref(mults);var inst_25583__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25582,inst_25581__$1);var state_25604__$1 = (function (){var statearr_25612 = state_25604;(statearr_25612[12] = inst_25583__$1);
(statearr_25612[13] = inst_25581__$1);
return statearr_25612;
})();if(cljs.core.truth_(inst_25583__$1))
{var statearr_25613_25657 = state_25604__$1;(statearr_25613_25657[1] = 19);
} else
{var statearr_25614_25658 = state_25604__$1;(statearr_25614_25658[1] = 20);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 7))
{var inst_25600 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25615_25659 = state_25604__$1;(statearr_25615_25659[2] = inst_25600);
(statearr_25615_25659[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 8))
{var inst_25546 = (state_25604[8]);var inst_25545 = (state_25604[9]);var inst_25548 = (inst_25546 < inst_25545);var inst_25549 = inst_25548;var state_25604__$1 = state_25604;if(cljs.core.truth_(inst_25549))
{var statearr_25619_25660 = state_25604__$1;(statearr_25619_25660[1] = 10);
} else
{var statearr_25620_25661 = state_25604__$1;(statearr_25620_25661[1] = 11);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 9))
{var inst_25579 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25621_25662 = state_25604__$1;(statearr_25621_25662[2] = inst_25579);
(statearr_25621_25662[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 10))
{var inst_25546 = (state_25604[8]);var inst_25545 = (state_25604[9]);var inst_25544 = (state_25604[10]);var inst_25543 = (state_25604[11]);var inst_25551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25544,inst_25546);var inst_25552 = cljs.core.async.muxch_STAR_(inst_25551);var inst_25553 = cljs.core.async.close_BANG_(inst_25552);var inst_25554 = (inst_25546 + 1);var tmp25616 = inst_25545;var tmp25617 = inst_25544;var tmp25618 = inst_25543;var inst_25543__$1 = tmp25618;var inst_25544__$1 = tmp25617;var inst_25545__$1 = tmp25616;var inst_25546__$1 = inst_25554;var state_25604__$1 = (function (){var statearr_25622 = state_25604;(statearr_25622[8] = inst_25546__$1);
(statearr_25622[9] = inst_25545__$1);
(statearr_25622[10] = inst_25544__$1);
(statearr_25622[11] = inst_25543__$1);
(statearr_25622[14] = inst_25553);
return statearr_25622;
})();var statearr_25623_25663 = state_25604__$1;(statearr_25623_25663[2] = null);
(statearr_25623_25663[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 11))
{var inst_25543 = (state_25604[11]);var inst_25557 = (state_25604[15]);var inst_25557__$1 = cljs.core.seq(inst_25543);var state_25604__$1 = (function (){var statearr_25624 = state_25604;(statearr_25624[15] = inst_25557__$1);
return statearr_25624;
})();if(inst_25557__$1)
{var statearr_25625_25664 = state_25604__$1;(statearr_25625_25664[1] = 13);
} else
{var statearr_25626_25665 = state_25604__$1;(statearr_25626_25665[1] = 14);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 12))
{var inst_25577 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25627_25666 = state_25604__$1;(statearr_25627_25666[2] = inst_25577);
(statearr_25627_25666[1] = 9);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 13))
{var inst_25557 = (state_25604[15]);var inst_25559 = cljs.core.chunked_seq_QMARK_(inst_25557);var state_25604__$1 = state_25604;if(inst_25559)
{var statearr_25628_25667 = state_25604__$1;(statearr_25628_25667[1] = 16);
} else
{var statearr_25629_25668 = state_25604__$1;(statearr_25629_25668[1] = 17);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 14))
{var state_25604__$1 = state_25604;var statearr_25630_25669 = state_25604__$1;(statearr_25630_25669[2] = null);
(statearr_25630_25669[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 15))
{var inst_25575 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25631_25670 = state_25604__$1;(statearr_25631_25670[2] = inst_25575);
(statearr_25631_25670[1] = 12);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 16))
{var inst_25557 = (state_25604[15]);var inst_25561 = cljs.core.chunk_first(inst_25557);var inst_25562 = cljs.core.chunk_rest(inst_25557);var inst_25563 = cljs.core.count(inst_25561);var inst_25543 = inst_25562;var inst_25544 = inst_25561;var inst_25545 = inst_25563;var inst_25546 = 0;var state_25604__$1 = (function (){var statearr_25632 = state_25604;(statearr_25632[8] = inst_25546);
(statearr_25632[9] = inst_25545);
(statearr_25632[10] = inst_25544);
(statearr_25632[11] = inst_25543);
return statearr_25632;
})();var statearr_25633_25671 = state_25604__$1;(statearr_25633_25671[2] = null);
(statearr_25633_25671[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 17))
{var inst_25557 = (state_25604[15]);var inst_25566 = cljs.core.first(inst_25557);var inst_25567 = cljs.core.async.muxch_STAR_(inst_25566);var inst_25568 = cljs.core.async.close_BANG_(inst_25567);var inst_25569 = cljs.core.next(inst_25557);var inst_25543 = inst_25569;var inst_25544 = null;var inst_25545 = 0;var inst_25546 = 0;var state_25604__$1 = (function (){var statearr_25634 = state_25604;(statearr_25634[8] = inst_25546);
(statearr_25634[9] = inst_25545);
(statearr_25634[10] = inst_25544);
(statearr_25634[11] = inst_25543);
(statearr_25634[16] = inst_25568);
return statearr_25634;
})();var statearr_25635_25672 = state_25604__$1;(statearr_25635_25672[2] = null);
(statearr_25635_25672[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 18))
{var inst_25572 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25636_25673 = state_25604__$1;(statearr_25636_25673[2] = inst_25572);
(statearr_25636_25673[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 19))
{var state_25604__$1 = state_25604;var statearr_25637_25674 = state_25604__$1;(statearr_25637_25674[2] = null);
(statearr_25637_25674[1] = 24);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 20))
{var state_25604__$1 = state_25604;var statearr_25638_25675 = state_25604__$1;(statearr_25638_25675[2] = null);
(statearr_25638_25675[1] = 21);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 21))
{var inst_25597 = (state_25604[2]);var state_25604__$1 = (function (){var statearr_25639 = state_25604;(statearr_25639[17] = inst_25597);
return statearr_25639;
})();var statearr_25640_25676 = state_25604__$1;(statearr_25640_25676[2] = null);
(statearr_25640_25676[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 22))
{var inst_25594 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25641_25677 = state_25604__$1;(statearr_25641_25677[2] = inst_25594);
(statearr_25641_25677[1] = 21);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 23))
{var inst_25581 = (state_25604[13]);var inst_25585 = (state_25604[2]);var inst_25586 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25581);var state_25604__$1 = (function (){var statearr_25642 = state_25604;(statearr_25642[18] = inst_25585);
return statearr_25642;
})();var statearr_25643_25678 = state_25604__$1;(statearr_25643_25678[2] = inst_25586);
cljs.core.async.impl.ioc_helpers.process_exception(state_25604__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25605 === 24))
{var inst_25583 = (state_25604[12]);var inst_25533 = (state_25604[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25604,23,Object,null,22);var inst_25590 = cljs.core.async.muxch_STAR_(inst_25583);var state_25604__$1 = state_25604;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25604__$1,25,inst_25590,inst_25533);
} else
{if((state_val_25605 === 25))
{var inst_25592 = (state_25604[2]);var state_25604__$1 = state_25604;var statearr_25644_25679 = state_25604__$1;(statearr_25644_25679[2] = inst_25592);
cljs.core.async.impl.ioc_helpers.process_exception(state_25604__$1);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_25648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25648[0] = state_machine__5507__auto__);
(statearr_25648[1] = 1);
return statearr_25648;
});
var state_machine__5507__auto____1 = (function (state_25604){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25604);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25649){if((e25649 instanceof Object))
{var ex__5510__auto__ = e25649;var statearr_25650_25680 = state_25604;(statearr_25650_25680[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25604);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e25649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__25681 = state_25604;
state_25604 = G__25681;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25651 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25652);
return statearr_25651;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25788){var state_val_25789 = (state_25788[1]);if((state_val_25789 === 1))
{var state_25788__$1 = state_25788;var statearr_25790_25819 = state_25788__$1;(statearr_25790_25819[2] = null);
(statearr_25790_25819[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 2))
{var inst_25751 = cljs.core.reset_BANG_(dctr,cnt);var inst_25752 = 0;var state_25788__$1 = (function (){var statearr_25791 = state_25788;(statearr_25791[7] = inst_25751);
(statearr_25791[8] = inst_25752);
return statearr_25791;
})();var statearr_25792_25820 = state_25788__$1;(statearr_25792_25820[2] = null);
(statearr_25792_25820[1] = 4);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 3))
{var inst_25786 = (state_25788[2]);var state_25788__$1 = state_25788;return cljs.core.async.impl.ioc_helpers.return_chan(state_25788__$1,inst_25786);
} else
{if((state_val_25789 === 4))
{var inst_25752 = (state_25788[8]);var inst_25754 = (inst_25752 < cnt);var state_25788__$1 = state_25788;if(cljs.core.truth_(inst_25754))
{var statearr_25793_25821 = state_25788__$1;(statearr_25793_25821[1] = 6);
} else
{var statearr_25794_25822 = state_25788__$1;(statearr_25794_25822[1] = 7);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 5))
{var inst_25772 = (state_25788[2]);var state_25788__$1 = (function (){var statearr_25795 = state_25788;(statearr_25795[9] = inst_25772);
return statearr_25795;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25788__$1,12,dchan);
} else
{if((state_val_25789 === 6))
{var state_25788__$1 = state_25788;var statearr_25796_25823 = state_25788__$1;(statearr_25796_25823[2] = null);
(statearr_25796_25823[1] = 11);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 7))
{var state_25788__$1 = state_25788;var statearr_25797_25824 = state_25788__$1;(statearr_25797_25824[2] = null);
(statearr_25797_25824[1] = 8);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 8))
{var inst_25770 = (state_25788[2]);var state_25788__$1 = state_25788;var statearr_25798_25825 = state_25788__$1;(statearr_25798_25825[2] = inst_25770);
(statearr_25798_25825[1] = 5);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 9))
{var inst_25752 = (state_25788[8]);var inst_25765 = (state_25788[2]);var inst_25766 = (inst_25752 + 1);var inst_25752__$1 = inst_25766;var state_25788__$1 = (function (){var statearr_25799 = state_25788;(statearr_25799[10] = inst_25765);
(statearr_25799[8] = inst_25752__$1);
return statearr_25799;
})();var statearr_25800_25826 = state_25788__$1;(statearr_25800_25826[2] = null);
(statearr_25800_25826[1] = 4);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 10))
{var inst_25756 = (state_25788[2]);var inst_25757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25788__$1 = (function (){var statearr_25801 = state_25788;(statearr_25801[11] = inst_25756);
return statearr_25801;
})();var statearr_25802_25827 = state_25788__$1;(statearr_25802_25827[2] = inst_25757);
cljs.core.async.impl.ioc_helpers.process_exception(state_25788__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 11))
{var inst_25752 = (state_25788[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25788,10,Object,null,9);var inst_25761 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25752) : chs__$1.call(null,inst_25752));var inst_25762 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25752) : done.call(null,inst_25752));var inst_25763 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25761,inst_25762);var state_25788__$1 = state_25788;var statearr_25803_25828 = state_25788__$1;(statearr_25803_25828[2] = inst_25763);
cljs.core.async.impl.ioc_helpers.process_exception(state_25788__$1);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 12))
{var inst_25774 = (state_25788[12]);var inst_25774__$1 = (state_25788[2]);var inst_25775 = cljs.core.some(cljs.core.nil_QMARK_,inst_25774__$1);var state_25788__$1 = (function (){var statearr_25804 = state_25788;(statearr_25804[12] = inst_25774__$1);
return statearr_25804;
})();if(cljs.core.truth_(inst_25775))
{var statearr_25805_25829 = state_25788__$1;(statearr_25805_25829[1] = 13);
} else
{var statearr_25806_25830 = state_25788__$1;(statearr_25806_25830[1] = 14);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 13))
{var inst_25777 = cljs.core.async.close_BANG_(out);var state_25788__$1 = state_25788;var statearr_25807_25831 = state_25788__$1;(statearr_25807_25831[2] = inst_25777);
(statearr_25807_25831[1] = 15);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 14))
{var inst_25774 = (state_25788[12]);var inst_25779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25774);var state_25788__$1 = state_25788;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25788__$1,16,out,inst_25779);
} else
{if((state_val_25789 === 15))
{var inst_25784 = (state_25788[2]);var state_25788__$1 = state_25788;var statearr_25808_25832 = state_25788__$1;(statearr_25808_25832[2] = inst_25784);
(statearr_25808_25832[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25789 === 16))
{var inst_25781 = (state_25788[2]);var state_25788__$1 = (function (){var statearr_25809 = state_25788;(statearr_25809[13] = inst_25781);
return statearr_25809;
})();var statearr_25810_25833 = state_25788__$1;(statearr_25810_25833[2] = null);
(statearr_25810_25833[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_25814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25814[0] = state_machine__5507__auto__);
(statearr_25814[1] = 1);
return statearr_25814;
});
var state_machine__5507__auto____1 = (function (state_25788){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25788);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25815){if((e25815 instanceof Object))
{var ex__5510__auto__ = e25815;var statearr_25816_25834 = state_25788;(statearr_25816_25834[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25788);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e25815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__25835 = state_25788;
state_25788 = G__25835;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25788){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25817 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25818);
return statearr_25817;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25919){var state_val_25920 = (state_25919[1]);if((state_val_25920 === 1))
{var inst_25890 = cljs.core.vec(chs);var inst_25891 = inst_25890;var state_25919__$1 = (function (){var statearr_25921 = state_25919;(statearr_25921[7] = inst_25891);
return statearr_25921;
})();var statearr_25922_25944 = state_25919__$1;(statearr_25922_25944[2] = null);
(statearr_25922_25944[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 2))
{var inst_25891 = (state_25919[7]);var inst_25893 = cljs.core.count(inst_25891);var inst_25894 = (inst_25893 > 0);var state_25919__$1 = state_25919;if(cljs.core.truth_(inst_25894))
{var statearr_25923_25945 = state_25919__$1;(statearr_25923_25945[1] = 4);
} else
{var statearr_25924_25946 = state_25919__$1;(statearr_25924_25946[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 3))
{var inst_25917 = (state_25919[2]);var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.return_chan(state_25919__$1,inst_25917);
} else
{if((state_val_25920 === 4))
{var inst_25891 = (state_25919[7]);var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25919__$1,7,inst_25891);
} else
{if((state_val_25920 === 5))
{var inst_25913 = cljs.core.async.close_BANG_(out);var state_25919__$1 = state_25919;var statearr_25925_25947 = state_25919__$1;(statearr_25925_25947[2] = inst_25913);
(statearr_25925_25947[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 6))
{var inst_25915 = (state_25919[2]);var state_25919__$1 = state_25919;var statearr_25926_25948 = state_25919__$1;(statearr_25926_25948[2] = inst_25915);
(statearr_25926_25948[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 7))
{var inst_25899 = (state_25919[8]);var inst_25898 = (state_25919[9]);var inst_25898__$1 = (state_25919[2]);var inst_25899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25898__$1,0,null);var inst_25900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25898__$1,1,null);var inst_25901 = (inst_25899__$1 == null);var state_25919__$1 = (function (){var statearr_25927 = state_25919;(statearr_25927[8] = inst_25899__$1);
(statearr_25927[9] = inst_25898__$1);
(statearr_25927[10] = inst_25900);
return statearr_25927;
})();if(cljs.core.truth_(inst_25901))
{var statearr_25928_25949 = state_25919__$1;(statearr_25928_25949[1] = 8);
} else
{var statearr_25929_25950 = state_25919__$1;(statearr_25929_25950[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 8))
{var inst_25891 = (state_25919[7]);var inst_25899 = (state_25919[8]);var inst_25898 = (state_25919[9]);var inst_25900 = (state_25919[10]);var inst_25903 = (function (){var c = inst_25900;var v = inst_25899;var vec__25896 = inst_25898;var cs = inst_25891;return ((function (c,v,vec__25896,cs,inst_25891,inst_25899,inst_25898,inst_25900,state_val_25920){
return (function (p1__25836_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25836_SHARP_);
});
;})(c,v,vec__25896,cs,inst_25891,inst_25899,inst_25898,inst_25900,state_val_25920))
})();var inst_25904 = cljs.core.filterv(inst_25903,inst_25891);var inst_25891__$1 = inst_25904;var state_25919__$1 = (function (){var statearr_25930 = state_25919;(statearr_25930[7] = inst_25891__$1);
return statearr_25930;
})();var statearr_25931_25951 = state_25919__$1;(statearr_25931_25951[2] = null);
(statearr_25931_25951[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 9))
{var inst_25899 = (state_25919[8]);var state_25919__$1 = state_25919;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25919__$1,11,out,inst_25899);
} else
{if((state_val_25920 === 10))
{var inst_25911 = (state_25919[2]);var state_25919__$1 = state_25919;var statearr_25933_25952 = state_25919__$1;(statearr_25933_25952[2] = inst_25911);
(statearr_25933_25952[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_25920 === 11))
{var inst_25891 = (state_25919[7]);var inst_25908 = (state_25919[2]);var tmp25932 = inst_25891;var inst_25891__$1 = tmp25932;var state_25919__$1 = (function (){var statearr_25934 = state_25919;(statearr_25934[7] = inst_25891__$1);
(statearr_25934[11] = inst_25908);
return statearr_25934;
})();var statearr_25935_25953 = state_25919__$1;(statearr_25935_25953[2] = null);
(statearr_25935_25953[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_25939 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25939[0] = state_machine__5507__auto__);
(statearr_25939[1] = 1);
return statearr_25939;
});
var state_machine__5507__auto____1 = (function (state_25919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25919);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object))
{var ex__5510__auto__ = e25940;var statearr_25941_25954 = state_25919;(statearr_25941_25954[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25919);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e25940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__25955 = state_25919;
state_25919 = G__25955;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25942 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25943);
return statearr_25942;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26025){var state_val_26026 = (state_26025[1]);if((state_val_26026 === 1))
{var inst_26002 = 0;var state_26025__$1 = (function (){var statearr_26027 = state_26025;(statearr_26027[7] = inst_26002);
return statearr_26027;
})();var statearr_26028_26049 = state_26025__$1;(statearr_26028_26049[2] = null);
(statearr_26028_26049[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 2))
{var inst_26002 = (state_26025[7]);var inst_26004 = (inst_26002 < n);var state_26025__$1 = state_26025;if(cljs.core.truth_(inst_26004))
{var statearr_26029_26050 = state_26025__$1;(statearr_26029_26050[1] = 4);
} else
{var statearr_26030_26051 = state_26025__$1;(statearr_26030_26051[1] = 5);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 3))
{var inst_26022 = (state_26025[2]);var inst_26023 = cljs.core.async.close_BANG_(out);var state_26025__$1 = (function (){var statearr_26031 = state_26025;(statearr_26031[8] = inst_26022);
return statearr_26031;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26025__$1,inst_26023);
} else
{if((state_val_26026 === 4))
{var state_26025__$1 = state_26025;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26025__$1,7,ch);
} else
{if((state_val_26026 === 5))
{var state_26025__$1 = state_26025;var statearr_26032_26052 = state_26025__$1;(statearr_26032_26052[2] = null);
(statearr_26032_26052[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 6))
{var inst_26020 = (state_26025[2]);var state_26025__$1 = state_26025;var statearr_26033_26053 = state_26025__$1;(statearr_26033_26053[2] = inst_26020);
(statearr_26033_26053[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 7))
{var inst_26007 = (state_26025[9]);var inst_26007__$1 = (state_26025[2]);var inst_26008 = (inst_26007__$1 == null);var inst_26009 = cljs.core.not(inst_26008);var state_26025__$1 = (function (){var statearr_26034 = state_26025;(statearr_26034[9] = inst_26007__$1);
return statearr_26034;
})();if(inst_26009)
{var statearr_26035_26054 = state_26025__$1;(statearr_26035_26054[1] = 8);
} else
{var statearr_26036_26055 = state_26025__$1;(statearr_26036_26055[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 8))
{var inst_26007 = (state_26025[9]);var state_26025__$1 = state_26025;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26025__$1,11,out,inst_26007);
} else
{if((state_val_26026 === 9))
{var state_26025__$1 = state_26025;var statearr_26037_26056 = state_26025__$1;(statearr_26037_26056[2] = null);
(statearr_26037_26056[1] = 10);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 10))
{var inst_26017 = (state_26025[2]);var state_26025__$1 = state_26025;var statearr_26038_26057 = state_26025__$1;(statearr_26038_26057[2] = inst_26017);
(statearr_26038_26057[1] = 6);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26026 === 11))
{var inst_26002 = (state_26025[7]);var inst_26012 = (state_26025[2]);var inst_26013 = (inst_26002 + 1);var inst_26002__$1 = inst_26013;var state_26025__$1 = (function (){var statearr_26039 = state_26025;(statearr_26039[7] = inst_26002__$1);
(statearr_26039[10] = inst_26012);
return statearr_26039;
})();var statearr_26040_26058 = state_26025__$1;(statearr_26040_26058[2] = null);
(statearr_26040_26058[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_26044 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26044[0] = state_machine__5507__auto__);
(statearr_26044[1] = 1);
return statearr_26044;
});
var state_machine__5507__auto____1 = (function (state_26025){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26025);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26045){if((e26045 instanceof Object))
{var ex__5510__auto__ = e26045;var statearr_26046_26059 = state_26025;(statearr_26046_26059[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26025);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e26045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__26060 = state_26025;
state_26025 = G__26060;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26025){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26047 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26048);
return statearr_26047;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26132){var state_val_26133 = (state_26132[1]);if((state_val_26133 === 1))
{var inst_26109 = null;var state_26132__$1 = (function (){var statearr_26134 = state_26132;(statearr_26134[7] = inst_26109);
return statearr_26134;
})();var statearr_26135_26158 = state_26132__$1;(statearr_26135_26158[2] = null);
(statearr_26135_26158[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 2))
{var state_26132__$1 = state_26132;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26132__$1,4,ch);
} else
{if((state_val_26133 === 3))
{var inst_26129 = (state_26132[2]);var inst_26130 = cljs.core.async.close_BANG_(out);var state_26132__$1 = (function (){var statearr_26136 = state_26132;(statearr_26136[8] = inst_26129);
return statearr_26136;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26132__$1,inst_26130);
} else
{if((state_val_26133 === 4))
{var inst_26112 = (state_26132[9]);var inst_26112__$1 = (state_26132[2]);var inst_26113 = (inst_26112__$1 == null);var inst_26114 = cljs.core.not(inst_26113);var state_26132__$1 = (function (){var statearr_26137 = state_26132;(statearr_26137[9] = inst_26112__$1);
return statearr_26137;
})();if(inst_26114)
{var statearr_26138_26159 = state_26132__$1;(statearr_26138_26159[1] = 5);
} else
{var statearr_26139_26160 = state_26132__$1;(statearr_26139_26160[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 5))
{var inst_26109 = (state_26132[7]);var inst_26112 = (state_26132[9]);var inst_26116 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26112,inst_26109);var state_26132__$1 = state_26132;if(inst_26116)
{var statearr_26140_26161 = state_26132__$1;(statearr_26140_26161[1] = 8);
} else
{var statearr_26141_26162 = state_26132__$1;(statearr_26141_26162[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 6))
{var state_26132__$1 = state_26132;var statearr_26143_26163 = state_26132__$1;(statearr_26143_26163[2] = null);
(statearr_26143_26163[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 7))
{var inst_26127 = (state_26132[2]);var state_26132__$1 = state_26132;var statearr_26144_26164 = state_26132__$1;(statearr_26144_26164[2] = inst_26127);
(statearr_26144_26164[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 8))
{var inst_26109 = (state_26132[7]);var tmp26142 = inst_26109;var inst_26109__$1 = tmp26142;var state_26132__$1 = (function (){var statearr_26145 = state_26132;(statearr_26145[7] = inst_26109__$1);
return statearr_26145;
})();var statearr_26146_26165 = state_26132__$1;(statearr_26146_26165[2] = null);
(statearr_26146_26165[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 9))
{var inst_26112 = (state_26132[9]);var state_26132__$1 = state_26132;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26132__$1,11,out,inst_26112);
} else
{if((state_val_26133 === 10))
{var inst_26124 = (state_26132[2]);var state_26132__$1 = state_26132;var statearr_26147_26166 = state_26132__$1;(statearr_26147_26166[2] = inst_26124);
(statearr_26147_26166[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26133 === 11))
{var inst_26112 = (state_26132[9]);var inst_26121 = (state_26132[2]);var inst_26109 = inst_26112;var state_26132__$1 = (function (){var statearr_26148 = state_26132;(statearr_26148[7] = inst_26109);
(statearr_26148[10] = inst_26121);
return statearr_26148;
})();var statearr_26149_26167 = state_26132__$1;(statearr_26149_26167[2] = null);
(statearr_26149_26167[1] = 2);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_26153 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26153[0] = state_machine__5507__auto__);
(statearr_26153[1] = 1);
return statearr_26153;
});
var state_machine__5507__auto____1 = (function (state_26132){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26132);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26154){if((e26154 instanceof Object))
{var ex__5510__auto__ = e26154;var statearr_26155_26168 = state_26132;(statearr_26155_26168[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26132);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e26154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__26169 = state_26132;
state_26132 = G__26169;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26132){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26156 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26157);
return statearr_26156;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26274){var state_val_26275 = (state_26274[1]);if((state_val_26275 === 1))
{var inst_26237 = (new Array(n));var inst_26238 = inst_26237;var inst_26239 = 0;var state_26274__$1 = (function (){var statearr_26276 = state_26274;(statearr_26276[7] = inst_26239);
(statearr_26276[8] = inst_26238);
return statearr_26276;
})();var statearr_26277_26305 = state_26274__$1;(statearr_26277_26305[2] = null);
(statearr_26277_26305[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 2))
{var state_26274__$1 = state_26274;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26274__$1,4,ch);
} else
{if((state_val_26275 === 3))
{var inst_26272 = (state_26274[2]);var state_26274__$1 = state_26274;return cljs.core.async.impl.ioc_helpers.return_chan(state_26274__$1,inst_26272);
} else
{if((state_val_26275 === 4))
{var inst_26242 = (state_26274[9]);var inst_26242__$1 = (state_26274[2]);var inst_26243 = (inst_26242__$1 == null);var inst_26244 = cljs.core.not(inst_26243);var state_26274__$1 = (function (){var statearr_26278 = state_26274;(statearr_26278[9] = inst_26242__$1);
return statearr_26278;
})();if(inst_26244)
{var statearr_26279_26306 = state_26274__$1;(statearr_26279_26306[1] = 5);
} else
{var statearr_26280_26307 = state_26274__$1;(statearr_26280_26307[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 5))
{var inst_26239 = (state_26274[7]);var inst_26238 = (state_26274[8]);var inst_26242 = (state_26274[9]);var inst_26247 = (state_26274[10]);var inst_26246 = (inst_26238[inst_26239] = inst_26242);var inst_26247__$1 = (inst_26239 + 1);var inst_26248 = (inst_26247__$1 < n);var state_26274__$1 = (function (){var statearr_26281 = state_26274;(statearr_26281[11] = inst_26246);
(statearr_26281[10] = inst_26247__$1);
return statearr_26281;
})();if(cljs.core.truth_(inst_26248))
{var statearr_26282_26308 = state_26274__$1;(statearr_26282_26308[1] = 8);
} else
{var statearr_26283_26309 = state_26274__$1;(statearr_26283_26309[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 6))
{var inst_26239 = (state_26274[7]);var inst_26260 = (inst_26239 > 0);var state_26274__$1 = state_26274;if(cljs.core.truth_(inst_26260))
{var statearr_26285_26310 = state_26274__$1;(statearr_26285_26310[1] = 12);
} else
{var statearr_26286_26311 = state_26274__$1;(statearr_26286_26311[1] = 13);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 7))
{var inst_26270 = (state_26274[2]);var state_26274__$1 = state_26274;var statearr_26287_26312 = state_26274__$1;(statearr_26287_26312[2] = inst_26270);
(statearr_26287_26312[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 8))
{var inst_26238 = (state_26274[8]);var inst_26247 = (state_26274[10]);var tmp26284 = inst_26238;var inst_26238__$1 = tmp26284;var inst_26239 = inst_26247;var state_26274__$1 = (function (){var statearr_26288 = state_26274;(statearr_26288[7] = inst_26239);
(statearr_26288[8] = inst_26238__$1);
return statearr_26288;
})();var statearr_26289_26313 = state_26274__$1;(statearr_26289_26313[2] = null);
(statearr_26289_26313[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 9))
{var inst_26238 = (state_26274[8]);var inst_26252 = cljs.core.vec(inst_26238);var state_26274__$1 = state_26274;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26274__$1,11,out,inst_26252);
} else
{if((state_val_26275 === 10))
{var inst_26258 = (state_26274[2]);var state_26274__$1 = state_26274;var statearr_26290_26314 = state_26274__$1;(statearr_26290_26314[2] = inst_26258);
(statearr_26290_26314[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 11))
{var inst_26254 = (state_26274[2]);var inst_26255 = (new Array(n));var inst_26238 = inst_26255;var inst_26239 = 0;var state_26274__$1 = (function (){var statearr_26291 = state_26274;(statearr_26291[7] = inst_26239);
(statearr_26291[8] = inst_26238);
(statearr_26291[12] = inst_26254);
return statearr_26291;
})();var statearr_26292_26315 = state_26274__$1;(statearr_26292_26315[2] = null);
(statearr_26292_26315[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 12))
{var inst_26238 = (state_26274[8]);var inst_26262 = cljs.core.vec(inst_26238);var state_26274__$1 = state_26274;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26274__$1,15,out,inst_26262);
} else
{if((state_val_26275 === 13))
{var state_26274__$1 = state_26274;var statearr_26293_26316 = state_26274__$1;(statearr_26293_26316[2] = null);
(statearr_26293_26316[1] = 14);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 14))
{var inst_26267 = (state_26274[2]);var inst_26268 = cljs.core.async.close_BANG_(out);var state_26274__$1 = (function (){var statearr_26294 = state_26274;(statearr_26294[13] = inst_26267);
return statearr_26294;
})();var statearr_26295_26317 = state_26274__$1;(statearr_26295_26317[2] = inst_26268);
(statearr_26295_26317[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26275 === 15))
{var inst_26264 = (state_26274[2]);var state_26274__$1 = state_26274;var statearr_26296_26318 = state_26274__$1;(statearr_26296_26318[2] = inst_26264);
(statearr_26296_26318[1] = 14);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_26300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26300[0] = state_machine__5507__auto__);
(statearr_26300[1] = 1);
return statearr_26300;
});
var state_machine__5507__auto____1 = (function (state_26274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26274);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object))
{var ex__5510__auto__ = e26301;var statearr_26302_26319 = state_26274;(statearr_26302_26319[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26274);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e26301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__26320 = state_26274;
state_26274 = G__26320;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26303 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26304);
return statearr_26303;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26433){var state_val_26434 = (state_26433[1]);if((state_val_26434 === 1))
{var inst_26392 = [];var inst_26393 = inst_26392;var inst_26394 = cljs.core.constant$keyword$245;var state_26433__$1 = (function (){var statearr_26435 = state_26433;(statearr_26435[7] = inst_26394);
(statearr_26435[8] = inst_26393);
return statearr_26435;
})();var statearr_26436_26464 = state_26433__$1;(statearr_26436_26464[2] = null);
(statearr_26436_26464[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 2))
{var state_26433__$1 = state_26433;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26433__$1,4,ch);
} else
{if((state_val_26434 === 3))
{var inst_26431 = (state_26433[2]);var state_26433__$1 = state_26433;return cljs.core.async.impl.ioc_helpers.return_chan(state_26433__$1,inst_26431);
} else
{if((state_val_26434 === 4))
{var inst_26397 = (state_26433[9]);var inst_26397__$1 = (state_26433[2]);var inst_26398 = (inst_26397__$1 == null);var inst_26399 = cljs.core.not(inst_26398);var state_26433__$1 = (function (){var statearr_26437 = state_26433;(statearr_26437[9] = inst_26397__$1);
return statearr_26437;
})();if(inst_26399)
{var statearr_26438_26465 = state_26433__$1;(statearr_26438_26465[1] = 5);
} else
{var statearr_26439_26466 = state_26433__$1;(statearr_26439_26466[1] = 6);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 5))
{var inst_26397 = (state_26433[9]);var inst_26394 = (state_26433[7]);var inst_26401 = (state_26433[10]);var inst_26401__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26397) : f.call(null,inst_26397));var inst_26402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26401__$1,inst_26394);var inst_26403 = cljs.core.keyword_identical_QMARK_(inst_26394,cljs.core.constant$keyword$245);var inst_26404 = (inst_26402) || (inst_26403);var state_26433__$1 = (function (){var statearr_26440 = state_26433;(statearr_26440[10] = inst_26401__$1);
return statearr_26440;
})();if(cljs.core.truth_(inst_26404))
{var statearr_26441_26467 = state_26433__$1;(statearr_26441_26467[1] = 8);
} else
{var statearr_26442_26468 = state_26433__$1;(statearr_26442_26468[1] = 9);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 6))
{var inst_26393 = (state_26433[8]);var inst_26418 = inst_26393.length;var inst_26419 = (inst_26418 > 0);var state_26433__$1 = state_26433;if(cljs.core.truth_(inst_26419))
{var statearr_26444_26469 = state_26433__$1;(statearr_26444_26469[1] = 12);
} else
{var statearr_26445_26470 = state_26433__$1;(statearr_26445_26470[1] = 13);
}
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 7))
{var inst_26429 = (state_26433[2]);var state_26433__$1 = state_26433;var statearr_26446_26471 = state_26433__$1;(statearr_26446_26471[2] = inst_26429);
(statearr_26446_26471[1] = 3);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 8))
{var inst_26397 = (state_26433[9]);var inst_26393 = (state_26433[8]);var inst_26401 = (state_26433[10]);var inst_26406 = inst_26393.push(inst_26397);var tmp26443 = inst_26393;var inst_26393__$1 = tmp26443;var inst_26394 = inst_26401;var state_26433__$1 = (function (){var statearr_26447 = state_26433;(statearr_26447[7] = inst_26394);
(statearr_26447[8] = inst_26393__$1);
(statearr_26447[11] = inst_26406);
return statearr_26447;
})();var statearr_26448_26472 = state_26433__$1;(statearr_26448_26472[2] = null);
(statearr_26448_26472[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 9))
{var inst_26393 = (state_26433[8]);var inst_26409 = cljs.core.vec(inst_26393);var state_26433__$1 = state_26433;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26433__$1,11,out,inst_26409);
} else
{if((state_val_26434 === 10))
{var inst_26416 = (state_26433[2]);var state_26433__$1 = state_26433;var statearr_26449_26473 = state_26433__$1;(statearr_26449_26473[2] = inst_26416);
(statearr_26449_26473[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 11))
{var inst_26397 = (state_26433[9]);var inst_26401 = (state_26433[10]);var inst_26411 = (state_26433[2]);var inst_26412 = [];var inst_26413 = inst_26412.push(inst_26397);var inst_26393 = inst_26412;var inst_26394 = inst_26401;var state_26433__$1 = (function (){var statearr_26450 = state_26433;(statearr_26450[7] = inst_26394);
(statearr_26450[8] = inst_26393);
(statearr_26450[12] = inst_26413);
(statearr_26450[13] = inst_26411);
return statearr_26450;
})();var statearr_26451_26474 = state_26433__$1;(statearr_26451_26474[2] = null);
(statearr_26451_26474[1] = 2);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 12))
{var inst_26393 = (state_26433[8]);var inst_26421 = cljs.core.vec(inst_26393);var state_26433__$1 = state_26433;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26433__$1,15,out,inst_26421);
} else
{if((state_val_26434 === 13))
{var state_26433__$1 = state_26433;var statearr_26452_26475 = state_26433__$1;(statearr_26452_26475[2] = null);
(statearr_26452_26475[1] = 14);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 14))
{var inst_26426 = (state_26433[2]);var inst_26427 = cljs.core.async.close_BANG_(out);var state_26433__$1 = (function (){var statearr_26453 = state_26433;(statearr_26453[14] = inst_26426);
return statearr_26453;
})();var statearr_26454_26476 = state_26433__$1;(statearr_26454_26476[2] = inst_26427);
(statearr_26454_26476[1] = 7);
return cljs.core.constant$keyword$232;
} else
{if((state_val_26434 === 15))
{var inst_26423 = (state_26433[2]);var state_26433__$1 = state_26433;var statearr_26455_26477 = state_26433__$1;(statearr_26455_26477[2] = inst_26423);
(statearr_26455_26477[1] = 14);
return cljs.core.constant$keyword$232;
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
var state_machine__5507__auto____0 = (function (){var statearr_26459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26459[0] = state_machine__5507__auto__);
(statearr_26459[1] = 1);
return statearr_26459;
});
var state_machine__5507__auto____1 = (function (state_26433){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26433);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$232))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26460){if((e26460 instanceof Object))
{var ex__5510__auto__ = e26460;var statearr_26461_26478 = state_26433;(statearr_26461_26478[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26433);
return cljs.core.constant$keyword$232;
} else
{if(cljs.core.constant$keyword$221)
{throw e26460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$232))
{{
var G__26479 = state_26433;
state_26433 = G__26479;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26433){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26462 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26463);
return statearr_26462;
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
