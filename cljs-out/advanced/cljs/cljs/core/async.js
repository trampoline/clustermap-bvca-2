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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23085 = (function (f,fn_handler,meta23086){
this.f = f;
this.fn_handler = fn_handler;
this.meta23086 = meta23086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23085.cljs$lang$type = true;
cljs.core.async.t23085.cljs$lang$ctorStr = "cljs.core.async/t23085";
cljs.core.async.t23085.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23085");
});
cljs.core.async.t23085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23087){var self__ = this;
var _23087__$1 = this;return self__.meta23086;
});
cljs.core.async.t23085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23087,meta23086__$1){var self__ = this;
var _23087__$1 = this;return (new cljs.core.async.t23085(self__.f,self__.fn_handler,meta23086__$1));
});
cljs.core.async.__GT_t23085 = (function __GT_t23085(f__$1,fn_handler__$1,meta23086){return (new cljs.core.async.t23085(f__$1,fn_handler__$1,meta23086));
});
}
return (new cljs.core.async.t23085(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23089 = buff;if(G__23089)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23089.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23089.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23089);
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
{var val_23090 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23090) : fn1.call(null,val_23090));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23090) : fn1.call(null,val_23090));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23091 = n;var x_23092 = 0;while(true){
if((x_23092 < n__4248__auto___23091))
{(a[x_23092] = 0);
{
var G__23093 = (x_23092 + 1);
x_23092 = G__23093;
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
var G__23094 = (i + 1);
i = G__23094;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23098 = (function (flag,alt_flag,meta23099){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23099 = meta23099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23098.cljs$lang$type = true;
cljs.core.async.t23098.cljs$lang$ctorStr = "cljs.core.async/t23098";
cljs.core.async.t23098.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23098");
});
cljs.core.async.t23098.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23100){var self__ = this;
var _23100__$1 = this;return self__.meta23099;
});
cljs.core.async.t23098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23100,meta23099__$1){var self__ = this;
var _23100__$1 = this;return (new cljs.core.async.t23098(self__.flag,self__.alt_flag,meta23099__$1));
});
cljs.core.async.__GT_t23098 = (function __GT_t23098(flag__$1,alt_flag__$1,meta23099){return (new cljs.core.async.t23098(flag__$1,alt_flag__$1,meta23099));
});
}
return (new cljs.core.async.t23098(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23104 = (function (cb,flag,alt_handler,meta23105){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23105 = meta23105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23104.cljs$lang$type = true;
cljs.core.async.t23104.cljs$lang$ctorStr = "cljs.core.async/t23104";
cljs.core.async.t23104.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23104");
});
cljs.core.async.t23104.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23106){var self__ = this;
var _23106__$1 = this;return self__.meta23105;
});
cljs.core.async.t23104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23106,meta23105__$1){var self__ = this;
var _23106__$1 = this;return (new cljs.core.async.t23104(self__.cb,self__.flag,self__.alt_handler,meta23105__$1));
});
cljs.core.async.__GT_t23104 = (function __GT_t23104(cb__$1,flag__$1,alt_handler__$1,meta23105){return (new cljs.core.async.t23104(cb__$1,flag__$1,alt_handler__$1,meta23105));
});
}
return (new cljs.core.async.t23104(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$207.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23107_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23107_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23107_SHARP_,port], null)));
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
var G__23108 = (i + 1);
i = G__23108;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$191))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$191], null));
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
var alts_BANG___delegate = function (ports,p__23109){var map__23111 = p__23109;var map__23111__$1 = ((cljs.core.seq_QMARK_(map__23111))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23111):map__23111);var opts = map__23111__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23109 = null;if (arguments.length > 1) {
  p__23109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23109);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23112){
var ports = cljs.core.first(arglist__23112);
var p__23109 = cljs.core.rest(arglist__23112);
return alts_BANG___delegate(ports,p__23109);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23120 = (function (ch,f,map_LT_,meta23121){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23121 = meta23121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23120.cljs$lang$type = true;
cljs.core.async.t23120.cljs$lang$ctorStr = "cljs.core.async/t23120";
cljs.core.async.t23120.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23120");
});
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23123 = (function (fn1,_,meta23121,ch,f,map_LT_,meta23124){
this.fn1 = fn1;
this._ = _;
this.meta23121 = meta23121;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23124 = meta23124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23123.cljs$lang$type = true;
cljs.core.async.t23123.cljs$lang$ctorStr = "cljs.core.async/t23123";
cljs.core.async.t23123.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23123");
});
cljs.core.async.t23123.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23123.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23113_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23113_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23113_SHARP_) : self__.f.call(null,p1__23113_SHARP_)))) : f1.call(null,(((p1__23113_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23113_SHARP_) : self__.f.call(null,p1__23113_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23125){var self__ = this;
var _23125__$1 = this;return self__.meta23124;
});
cljs.core.async.t23123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23125,meta23124__$1){var self__ = this;
var _23125__$1 = this;return (new cljs.core.async.t23123(self__.fn1,self__._,self__.meta23121,self__.ch,self__.f,self__.map_LT_,meta23124__$1));
});
cljs.core.async.__GT_t23123 = (function __GT_t23123(fn1__$1,___$2,meta23121__$1,ch__$2,f__$2,map_LT___$2,meta23124){return (new cljs.core.async.t23123(fn1__$1,___$2,meta23121__$1,ch__$2,f__$2,map_LT___$2,meta23124));
});
}
return (new cljs.core.async.t23123(fn1,___$1,self__.meta23121,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23122){var self__ = this;
var _23122__$1 = this;return self__.meta23121;
});
cljs.core.async.t23120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23122,meta23121__$1){var self__ = this;
var _23122__$1 = this;return (new cljs.core.async.t23120(self__.ch,self__.f,self__.map_LT_,meta23121__$1));
});
cljs.core.async.__GT_t23120 = (function __GT_t23120(ch__$1,f__$1,map_LT___$1,meta23121){return (new cljs.core.async.t23120(ch__$1,f__$1,map_LT___$1,meta23121));
});
}
return (new cljs.core.async.t23120(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23129 = (function (ch,f,map_GT_,meta23130){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23130 = meta23130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23129.cljs$lang$type = true;
cljs.core.async.t23129.cljs$lang$ctorStr = "cljs.core.async/t23129";
cljs.core.async.t23129.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23129");
});
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23131){var self__ = this;
var _23131__$1 = this;return self__.meta23130;
});
cljs.core.async.t23129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23131,meta23130__$1){var self__ = this;
var _23131__$1 = this;return (new cljs.core.async.t23129(self__.ch,self__.f,self__.map_GT_,meta23130__$1));
});
cljs.core.async.__GT_t23129 = (function __GT_t23129(ch__$1,f__$1,map_GT___$1,meta23130){return (new cljs.core.async.t23129(ch__$1,f__$1,map_GT___$1,meta23130));
});
}
return (new cljs.core.async.t23129(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23135 = (function (ch,p,filter_GT_,meta23136){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23136 = meta23136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23135.cljs$lang$type = true;
cljs.core.async.t23135.cljs$lang$ctorStr = "cljs.core.async/t23135";
cljs.core.async.t23135.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23135");
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23137){var self__ = this;
var _23137__$1 = this;return self__.meta23136;
});
cljs.core.async.t23135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23137,meta23136__$1){var self__ = this;
var _23137__$1 = this;return (new cljs.core.async.t23135(self__.ch,self__.p,self__.filter_GT_,meta23136__$1));
});
cljs.core.async.__GT_t23135 = (function __GT_t23135(ch__$1,p__$1,filter_GT___$1,meta23136){return (new cljs.core.async.t23135(ch__$1,p__$1,filter_GT___$1,meta23136));
});
}
return (new cljs.core.async.t23135(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23199){var state_val_23200 = (state_23199[1]);if((state_val_23200 === 1))
{var state_23199__$1 = state_23199;var statearr_23201_23221 = state_23199__$1;(statearr_23201_23221[2] = null);
(statearr_23201_23221[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 2))
{var state_23199__$1 = state_23199;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23199__$1,4,ch);
} else
{if((state_val_23200 === 3))
{var inst_23197 = (state_23199[2]);var state_23199__$1 = state_23199;return cljs.core.async.impl.ioc_helpers.return_chan(state_23199__$1,inst_23197);
} else
{if((state_val_23200 === 4))
{var inst_23181 = (state_23199[7]);var inst_23181__$1 = (state_23199[2]);var inst_23182 = (inst_23181__$1 == null);var state_23199__$1 = (function (){var statearr_23202 = state_23199;(statearr_23202[7] = inst_23181__$1);
return statearr_23202;
})();if(cljs.core.truth_(inst_23182))
{var statearr_23203_23222 = state_23199__$1;(statearr_23203_23222[1] = 5);
} else
{var statearr_23204_23223 = state_23199__$1;(statearr_23204_23223[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 5))
{var inst_23184 = cljs.core.async.close_BANG_(out);var state_23199__$1 = state_23199;var statearr_23205_23224 = state_23199__$1;(statearr_23205_23224[2] = inst_23184);
(statearr_23205_23224[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 6))
{var inst_23181 = (state_23199[7]);var inst_23186 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23181) : p.call(null,inst_23181));var state_23199__$1 = state_23199;if(cljs.core.truth_(inst_23186))
{var statearr_23206_23225 = state_23199__$1;(statearr_23206_23225[1] = 8);
} else
{var statearr_23207_23226 = state_23199__$1;(statearr_23207_23226[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 7))
{var inst_23195 = (state_23199[2]);var state_23199__$1 = state_23199;var statearr_23208_23227 = state_23199__$1;(statearr_23208_23227[2] = inst_23195);
(statearr_23208_23227[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 8))
{var inst_23181 = (state_23199[7]);var state_23199__$1 = state_23199;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23199__$1,11,out,inst_23181);
} else
{if((state_val_23200 === 9))
{var state_23199__$1 = state_23199;var statearr_23209_23228 = state_23199__$1;(statearr_23209_23228[2] = null);
(statearr_23209_23228[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 10))
{var inst_23192 = (state_23199[2]);var state_23199__$1 = (function (){var statearr_23210 = state_23199;(statearr_23210[8] = inst_23192);
return statearr_23210;
})();var statearr_23211_23229 = state_23199__$1;(statearr_23211_23229[2] = null);
(statearr_23211_23229[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23200 === 11))
{var inst_23189 = (state_23199[2]);var state_23199__$1 = state_23199;var statearr_23212_23230 = state_23199__$1;(statearr_23212_23230[2] = inst_23189);
(statearr_23212_23230[1] = 10);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_23216 = [null,null,null,null,null,null,null,null,null];(statearr_23216[0] = state_machine__5507__auto__);
(statearr_23216[1] = 1);
return statearr_23216;
});
var state_machine__5507__auto____1 = (function (state_23199){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23199);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23217){if((e23217 instanceof Object))
{var ex__5510__auto__ = e23217;var statearr_23218_23231 = state_23199;(statearr_23218_23231[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23199);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23232 = state_23199;
state_23199 = G__23232;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23199){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23219 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23220);
return statearr_23219;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23384){var state_val_23385 = (state_23384[1]);if((state_val_23385 === 1))
{var state_23384__$1 = state_23384;var statearr_23386_23423 = state_23384__$1;(statearr_23386_23423[2] = null);
(statearr_23386_23423[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 2))
{var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23384__$1,4,in$);
} else
{if((state_val_23385 === 3))
{var inst_23382 = (state_23384[2]);var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.return_chan(state_23384__$1,inst_23382);
} else
{if((state_val_23385 === 4))
{var inst_23330 = (state_23384[7]);var inst_23330__$1 = (state_23384[2]);var inst_23331 = (inst_23330__$1 == null);var state_23384__$1 = (function (){var statearr_23387 = state_23384;(statearr_23387[7] = inst_23330__$1);
return statearr_23387;
})();if(cljs.core.truth_(inst_23331))
{var statearr_23388_23424 = state_23384__$1;(statearr_23388_23424[1] = 5);
} else
{var statearr_23389_23425 = state_23384__$1;(statearr_23389_23425[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 5))
{var inst_23333 = cljs.core.async.close_BANG_(out);var state_23384__$1 = state_23384;var statearr_23390_23426 = state_23384__$1;(statearr_23390_23426[2] = inst_23333);
(statearr_23390_23426[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 6))
{var inst_23330 = (state_23384[7]);var inst_23335 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23330) : f.call(null,inst_23330));var inst_23340 = cljs.core.seq(inst_23335);var inst_23341 = inst_23340;var inst_23342 = null;var inst_23343 = 0;var inst_23344 = 0;var state_23384__$1 = (function (){var statearr_23391 = state_23384;(statearr_23391[8] = inst_23344);
(statearr_23391[9] = inst_23343);
(statearr_23391[10] = inst_23341);
(statearr_23391[11] = inst_23342);
return statearr_23391;
})();var statearr_23392_23427 = state_23384__$1;(statearr_23392_23427[2] = null);
(statearr_23392_23427[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 7))
{var inst_23380 = (state_23384[2]);var state_23384__$1 = state_23384;var statearr_23393_23428 = state_23384__$1;(statearr_23393_23428[2] = inst_23380);
(statearr_23393_23428[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 8))
{var inst_23344 = (state_23384[8]);var inst_23343 = (state_23384[9]);var inst_23346 = (inst_23344 < inst_23343);var inst_23347 = inst_23346;var state_23384__$1 = state_23384;if(cljs.core.truth_(inst_23347))
{var statearr_23394_23429 = state_23384__$1;(statearr_23394_23429[1] = 10);
} else
{var statearr_23395_23430 = state_23384__$1;(statearr_23395_23430[1] = 11);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 9))
{var inst_23377 = (state_23384[2]);var state_23384__$1 = (function (){var statearr_23396 = state_23384;(statearr_23396[12] = inst_23377);
return statearr_23396;
})();var statearr_23397_23431 = state_23384__$1;(statearr_23397_23431[2] = null);
(statearr_23397_23431[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 10))
{var inst_23344 = (state_23384[8]);var inst_23342 = (state_23384[11]);var inst_23349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23342,inst_23344);var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23384__$1,13,out,inst_23349);
} else
{if((state_val_23385 === 11))
{var inst_23355 = (state_23384[13]);var inst_23341 = (state_23384[10]);var inst_23355__$1 = cljs.core.seq(inst_23341);var state_23384__$1 = (function (){var statearr_23401 = state_23384;(statearr_23401[13] = inst_23355__$1);
return statearr_23401;
})();if(inst_23355__$1)
{var statearr_23402_23432 = state_23384__$1;(statearr_23402_23432[1] = 14);
} else
{var statearr_23403_23433 = state_23384__$1;(statearr_23403_23433[1] = 15);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 12))
{var inst_23375 = (state_23384[2]);var state_23384__$1 = state_23384;var statearr_23404_23434 = state_23384__$1;(statearr_23404_23434[2] = inst_23375);
(statearr_23404_23434[1] = 9);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 13))
{var inst_23344 = (state_23384[8]);var inst_23343 = (state_23384[9]);var inst_23341 = (state_23384[10]);var inst_23342 = (state_23384[11]);var inst_23351 = (state_23384[2]);var inst_23352 = (inst_23344 + 1);var tmp23398 = inst_23343;var tmp23399 = inst_23341;var tmp23400 = inst_23342;var inst_23341__$1 = tmp23399;var inst_23342__$1 = tmp23400;var inst_23343__$1 = tmp23398;var inst_23344__$1 = inst_23352;var state_23384__$1 = (function (){var statearr_23405 = state_23384;(statearr_23405[14] = inst_23351);
(statearr_23405[8] = inst_23344__$1);
(statearr_23405[9] = inst_23343__$1);
(statearr_23405[10] = inst_23341__$1);
(statearr_23405[11] = inst_23342__$1);
return statearr_23405;
})();var statearr_23406_23435 = state_23384__$1;(statearr_23406_23435[2] = null);
(statearr_23406_23435[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 14))
{var inst_23355 = (state_23384[13]);var inst_23357 = cljs.core.chunked_seq_QMARK_(inst_23355);var state_23384__$1 = state_23384;if(inst_23357)
{var statearr_23407_23436 = state_23384__$1;(statearr_23407_23436[1] = 17);
} else
{var statearr_23408_23437 = state_23384__$1;(statearr_23408_23437[1] = 18);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 15))
{var state_23384__$1 = state_23384;var statearr_23409_23438 = state_23384__$1;(statearr_23409_23438[2] = null);
(statearr_23409_23438[1] = 16);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 16))
{var inst_23373 = (state_23384[2]);var state_23384__$1 = state_23384;var statearr_23410_23439 = state_23384__$1;(statearr_23410_23439[2] = inst_23373);
(statearr_23410_23439[1] = 12);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 17))
{var inst_23355 = (state_23384[13]);var inst_23359 = cljs.core.chunk_first(inst_23355);var inst_23360 = cljs.core.chunk_rest(inst_23355);var inst_23361 = cljs.core.count(inst_23359);var inst_23341 = inst_23360;var inst_23342 = inst_23359;var inst_23343 = inst_23361;var inst_23344 = 0;var state_23384__$1 = (function (){var statearr_23411 = state_23384;(statearr_23411[8] = inst_23344);
(statearr_23411[9] = inst_23343);
(statearr_23411[10] = inst_23341);
(statearr_23411[11] = inst_23342);
return statearr_23411;
})();var statearr_23412_23440 = state_23384__$1;(statearr_23412_23440[2] = null);
(statearr_23412_23440[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 18))
{var inst_23355 = (state_23384[13]);var inst_23364 = cljs.core.first(inst_23355);var state_23384__$1 = state_23384;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23384__$1,20,out,inst_23364);
} else
{if((state_val_23385 === 19))
{var inst_23370 = (state_23384[2]);var state_23384__$1 = state_23384;var statearr_23413_23441 = state_23384__$1;(statearr_23413_23441[2] = inst_23370);
(statearr_23413_23441[1] = 16);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23385 === 20))
{var inst_23355 = (state_23384[13]);var inst_23366 = (state_23384[2]);var inst_23367 = cljs.core.next(inst_23355);var inst_23341 = inst_23367;var inst_23342 = null;var inst_23343 = 0;var inst_23344 = 0;var state_23384__$1 = (function (){var statearr_23414 = state_23384;(statearr_23414[15] = inst_23366);
(statearr_23414[8] = inst_23344);
(statearr_23414[9] = inst_23343);
(statearr_23414[10] = inst_23341);
(statearr_23414[11] = inst_23342);
return statearr_23414;
})();var statearr_23415_23442 = state_23384__$1;(statearr_23415_23442[2] = null);
(statearr_23415_23442[1] = 8);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_23419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23419[0] = state_machine__5507__auto__);
(statearr_23419[1] = 1);
return statearr_23419;
});
var state_machine__5507__auto____1 = (function (state_23384){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23384);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23420){if((e23420 instanceof Object))
{var ex__5510__auto__ = e23420;var statearr_23421_23443 = state_23384;(statearr_23421_23443[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23384);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23444 = state_23384;
state_23384 = G__23444;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23384){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23422 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23422;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23504){var state_val_23505 = (state_23504[1]);if((state_val_23505 === 1))
{var state_23504__$1 = state_23504;var statearr_23506_23526 = state_23504__$1;(statearr_23506_23526[2] = null);
(statearr_23506_23526[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 2))
{var state_23504__$1 = state_23504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23504__$1,4,from);
} else
{if((state_val_23505 === 3))
{var inst_23502 = (state_23504[2]);var state_23504__$1 = state_23504;return cljs.core.async.impl.ioc_helpers.return_chan(state_23504__$1,inst_23502);
} else
{if((state_val_23505 === 4))
{var inst_23487 = (state_23504[7]);var inst_23487__$1 = (state_23504[2]);var inst_23488 = (inst_23487__$1 == null);var state_23504__$1 = (function (){var statearr_23507 = state_23504;(statearr_23507[7] = inst_23487__$1);
return statearr_23507;
})();if(cljs.core.truth_(inst_23488))
{var statearr_23508_23527 = state_23504__$1;(statearr_23508_23527[1] = 5);
} else
{var statearr_23509_23528 = state_23504__$1;(statearr_23509_23528[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 5))
{var state_23504__$1 = state_23504;if(cljs.core.truth_(close_QMARK_))
{var statearr_23510_23529 = state_23504__$1;(statearr_23510_23529[1] = 8);
} else
{var statearr_23511_23530 = state_23504__$1;(statearr_23511_23530[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 6))
{var inst_23487 = (state_23504[7]);var state_23504__$1 = state_23504;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23504__$1,11,to,inst_23487);
} else
{if((state_val_23505 === 7))
{var inst_23500 = (state_23504[2]);var state_23504__$1 = state_23504;var statearr_23512_23531 = state_23504__$1;(statearr_23512_23531[2] = inst_23500);
(statearr_23512_23531[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 8))
{var inst_23491 = cljs.core.async.close_BANG_(to);var state_23504__$1 = state_23504;var statearr_23513_23532 = state_23504__$1;(statearr_23513_23532[2] = inst_23491);
(statearr_23513_23532[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 9))
{var state_23504__$1 = state_23504;var statearr_23514_23533 = state_23504__$1;(statearr_23514_23533[2] = null);
(statearr_23514_23533[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 10))
{var inst_23494 = (state_23504[2]);var state_23504__$1 = state_23504;var statearr_23515_23534 = state_23504__$1;(statearr_23515_23534[2] = inst_23494);
(statearr_23515_23534[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23505 === 11))
{var inst_23497 = (state_23504[2]);var state_23504__$1 = (function (){var statearr_23516 = state_23504;(statearr_23516[8] = inst_23497);
return statearr_23516;
})();var statearr_23517_23535 = state_23504__$1;(statearr_23517_23535[2] = null);
(statearr_23517_23535[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_23521 = [null,null,null,null,null,null,null,null,null];(statearr_23521[0] = state_machine__5507__auto__);
(statearr_23521[1] = 1);
return statearr_23521;
});
var state_machine__5507__auto____1 = (function (state_23504){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23504);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object))
{var ex__5510__auto__ = e23522;var statearr_23523_23536 = state_23504;(statearr_23523_23536[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23504);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23537 = state_23504;
state_23504 = G__23537;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23504){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23524 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23525);
return statearr_23524;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23602){var state_val_23603 = (state_23602[1]);if((state_val_23603 === 1))
{var state_23602__$1 = state_23602;var statearr_23604_23625 = state_23602__$1;(statearr_23604_23625[2] = null);
(statearr_23604_23625[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 2))
{var state_23602__$1 = state_23602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23602__$1,4,ch);
} else
{if((state_val_23603 === 3))
{var inst_23600 = (state_23602[2]);var state_23602__$1 = state_23602;return cljs.core.async.impl.ioc_helpers.return_chan(state_23602__$1,inst_23600);
} else
{if((state_val_23603 === 4))
{var inst_23583 = (state_23602[7]);var inst_23583__$1 = (state_23602[2]);var inst_23584 = (inst_23583__$1 == null);var state_23602__$1 = (function (){var statearr_23605 = state_23602;(statearr_23605[7] = inst_23583__$1);
return statearr_23605;
})();if(cljs.core.truth_(inst_23584))
{var statearr_23606_23626 = state_23602__$1;(statearr_23606_23626[1] = 5);
} else
{var statearr_23607_23627 = state_23602__$1;(statearr_23607_23627[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 5))
{var inst_23586 = cljs.core.async.close_BANG_(tc);var inst_23587 = cljs.core.async.close_BANG_(fc);var state_23602__$1 = (function (){var statearr_23608 = state_23602;(statearr_23608[8] = inst_23586);
return statearr_23608;
})();var statearr_23609_23628 = state_23602__$1;(statearr_23609_23628[2] = inst_23587);
(statearr_23609_23628[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 6))
{var inst_23583 = (state_23602[7]);var inst_23589 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23583) : p.call(null,inst_23583));var state_23602__$1 = state_23602;if(cljs.core.truth_(inst_23589))
{var statearr_23610_23629 = state_23602__$1;(statearr_23610_23629[1] = 9);
} else
{var statearr_23611_23630 = state_23602__$1;(statearr_23611_23630[1] = 10);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 7))
{var inst_23598 = (state_23602[2]);var state_23602__$1 = state_23602;var statearr_23612_23631 = state_23602__$1;(statearr_23612_23631[2] = inst_23598);
(statearr_23612_23631[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 8))
{var inst_23595 = (state_23602[2]);var state_23602__$1 = (function (){var statearr_23613 = state_23602;(statearr_23613[9] = inst_23595);
return statearr_23613;
})();var statearr_23614_23632 = state_23602__$1;(statearr_23614_23632[2] = null);
(statearr_23614_23632[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 9))
{var state_23602__$1 = state_23602;var statearr_23615_23633 = state_23602__$1;(statearr_23615_23633[2] = tc);
(statearr_23615_23633[1] = 11);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 10))
{var state_23602__$1 = state_23602;var statearr_23616_23634 = state_23602__$1;(statearr_23616_23634[2] = fc);
(statearr_23616_23634[1] = 11);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23603 === 11))
{var inst_23583 = (state_23602[7]);var inst_23593 = (state_23602[2]);var state_23602__$1 = state_23602;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23602__$1,8,inst_23593,inst_23583);
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
var state_machine__5507__auto____0 = (function (){var statearr_23620 = [null,null,null,null,null,null,null,null,null,null];(statearr_23620[0] = state_machine__5507__auto__);
(statearr_23620[1] = 1);
return statearr_23620;
});
var state_machine__5507__auto____1 = (function (state_23602){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23602);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23621){if((e23621 instanceof Object))
{var ex__5510__auto__ = e23621;var statearr_23622_23635 = state_23602;(statearr_23622_23635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23602);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23636 = state_23602;
state_23602 = G__23636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23602){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23623 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23624);
return statearr_23623;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23683){var state_val_23684 = (state_23683[1]);if((state_val_23684 === 7))
{var inst_23679 = (state_23683[2]);var state_23683__$1 = state_23683;var statearr_23685_23701 = state_23683__$1;(statearr_23685_23701[2] = inst_23679);
(statearr_23685_23701[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23684 === 6))
{var inst_23672 = (state_23683[7]);var inst_23669 = (state_23683[8]);var inst_23676 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23669,inst_23672) : f.call(null,inst_23669,inst_23672));var inst_23669__$1 = inst_23676;var state_23683__$1 = (function (){var statearr_23686 = state_23683;(statearr_23686[8] = inst_23669__$1);
return statearr_23686;
})();var statearr_23687_23702 = state_23683__$1;(statearr_23687_23702[2] = null);
(statearr_23687_23702[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23684 === 5))
{var inst_23669 = (state_23683[8]);var state_23683__$1 = state_23683;var statearr_23688_23703 = state_23683__$1;(statearr_23688_23703[2] = inst_23669);
(statearr_23688_23703[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23684 === 4))
{var inst_23672 = (state_23683[7]);var inst_23672__$1 = (state_23683[2]);var inst_23673 = (inst_23672__$1 == null);var state_23683__$1 = (function (){var statearr_23689 = state_23683;(statearr_23689[7] = inst_23672__$1);
return statearr_23689;
})();if(cljs.core.truth_(inst_23673))
{var statearr_23690_23704 = state_23683__$1;(statearr_23690_23704[1] = 5);
} else
{var statearr_23691_23705 = state_23683__$1;(statearr_23691_23705[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23684 === 3))
{var inst_23681 = (state_23683[2]);var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.return_chan(state_23683__$1,inst_23681);
} else
{if((state_val_23684 === 2))
{var state_23683__$1 = state_23683;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23683__$1,4,ch);
} else
{if((state_val_23684 === 1))
{var inst_23669 = init;var state_23683__$1 = (function (){var statearr_23692 = state_23683;(statearr_23692[8] = inst_23669);
return statearr_23692;
})();var statearr_23693_23706 = state_23683__$1;(statearr_23693_23706[2] = null);
(statearr_23693_23706[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_23697 = [null,null,null,null,null,null,null,null,null];(statearr_23697[0] = state_machine__5507__auto__);
(statearr_23697[1] = 1);
return statearr_23697;
});
var state_machine__5507__auto____1 = (function (state_23683){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23683);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23698){if((e23698 instanceof Object))
{var ex__5510__auto__ = e23698;var statearr_23699_23707 = state_23683;(statearr_23699_23707[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23683);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23708 = state_23683;
state_23683 = G__23708;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23683){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23700 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23700;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23770){var state_val_23771 = (state_23770[1]);if((state_val_23771 === 1))
{var inst_23750 = cljs.core.seq(coll);var inst_23751 = inst_23750;var state_23770__$1 = (function (){var statearr_23772 = state_23770;(statearr_23772[7] = inst_23751);
return statearr_23772;
})();var statearr_23773_23791 = state_23770__$1;(statearr_23773_23791[2] = null);
(statearr_23773_23791[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 2))
{var inst_23751 = (state_23770[7]);var state_23770__$1 = state_23770;if(cljs.core.truth_(inst_23751))
{var statearr_23774_23792 = state_23770__$1;(statearr_23774_23792[1] = 4);
} else
{var statearr_23775_23793 = state_23770__$1;(statearr_23775_23793[1] = 5);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 3))
{var inst_23768 = (state_23770[2]);var state_23770__$1 = state_23770;return cljs.core.async.impl.ioc_helpers.return_chan(state_23770__$1,inst_23768);
} else
{if((state_val_23771 === 4))
{var inst_23751 = (state_23770[7]);var inst_23754 = cljs.core.first(inst_23751);var state_23770__$1 = state_23770;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23770__$1,7,ch,inst_23754);
} else
{if((state_val_23771 === 5))
{var state_23770__$1 = state_23770;if(cljs.core.truth_(close_QMARK_))
{var statearr_23776_23794 = state_23770__$1;(statearr_23776_23794[1] = 8);
} else
{var statearr_23777_23795 = state_23770__$1;(statearr_23777_23795[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 6))
{var inst_23766 = (state_23770[2]);var state_23770__$1 = state_23770;var statearr_23778_23796 = state_23770__$1;(statearr_23778_23796[2] = inst_23766);
(statearr_23778_23796[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 7))
{var inst_23751 = (state_23770[7]);var inst_23756 = (state_23770[2]);var inst_23757 = cljs.core.next(inst_23751);var inst_23751__$1 = inst_23757;var state_23770__$1 = (function (){var statearr_23779 = state_23770;(statearr_23779[8] = inst_23756);
(statearr_23779[7] = inst_23751__$1);
return statearr_23779;
})();var statearr_23780_23797 = state_23770__$1;(statearr_23780_23797[2] = null);
(statearr_23780_23797[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 8))
{var inst_23761 = cljs.core.async.close_BANG_(ch);var state_23770__$1 = state_23770;var statearr_23781_23798 = state_23770__$1;(statearr_23781_23798[2] = inst_23761);
(statearr_23781_23798[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 9))
{var state_23770__$1 = state_23770;var statearr_23782_23799 = state_23770__$1;(statearr_23782_23799[2] = null);
(statearr_23782_23799[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_23771 === 10))
{var inst_23764 = (state_23770[2]);var state_23770__$1 = state_23770;var statearr_23783_23800 = state_23770__$1;(statearr_23783_23800[2] = inst_23764);
(statearr_23783_23800[1] = 6);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_23787 = [null,null,null,null,null,null,null,null,null];(statearr_23787[0] = state_machine__5507__auto__);
(statearr_23787[1] = 1);
return statearr_23787;
});
var state_machine__5507__auto____1 = (function (state_23770){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23770);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23788){if((e23788 instanceof Object))
{var ex__5510__auto__ = e23788;var statearr_23789_23801 = state_23770;(statearr_23789_23801[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23770);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e23788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__23802 = state_23770;
state_23770 = G__23802;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23770){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23790 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23790;
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
cljs.core.async.Mux = (function (){var obj23804 = {};return obj23804;
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
cljs.core.async.Mult = (function (){var obj23806 = {};return obj23806;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24030 = (function (cs,ch,mult,meta24031){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24030.cljs$lang$type = true;
cljs.core.async.t24030.cljs$lang$ctorStr = "cljs.core.async/t24030";
cljs.core.async.t24030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24030");
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24032){var self__ = this;
var _24032__$1 = this;return self__.meta24031;
});})(cs))
;
cljs.core.async.t24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24032,meta24031__$1){var self__ = this;
var _24032__$1 = this;return (new cljs.core.async.t24030(self__.cs,self__.ch,self__.mult,meta24031__$1));
});})(cs))
;
cljs.core.async.__GT_t24030 = ((function (cs){
return (function __GT_t24030(cs__$1,ch__$1,mult__$1,meta24031){return (new cljs.core.async.t24030(cs__$1,ch__$1,mult__$1,meta24031));
});})(cs))
;
}
return (new cljs.core.async.t24030(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24167){var state_val_24168 = (state_24167[1]);if((state_val_24168 === 32))
{var inst_24111 = (state_24167[7]);var inst_24035 = (state_24167[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24167,31,Object,null,30);var inst_24118 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24111,inst_24035,done);var state_24167__$1 = state_24167;var statearr_24169_24254 = state_24167__$1;(statearr_24169_24254[2] = inst_24118);
cljs.core.async.impl.ioc_helpers.process_exception(state_24167__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 1))
{var state_24167__$1 = state_24167;var statearr_24170_24255 = state_24167__$1;(statearr_24170_24255[2] = null);
(statearr_24170_24255[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 33))
{var inst_24124 = (state_24167[9]);var inst_24126 = cljs.core.chunked_seq_QMARK_(inst_24124);var state_24167__$1 = state_24167;if(inst_24126)
{var statearr_24171_24256 = state_24167__$1;(statearr_24171_24256[1] = 36);
} else
{var statearr_24172_24257 = state_24167__$1;(statearr_24172_24257[1] = 37);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 2))
{var state_24167__$1 = state_24167;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24167__$1,4,ch);
} else
{if((state_val_24168 === 34))
{var state_24167__$1 = state_24167;var statearr_24173_24258 = state_24167__$1;(statearr_24173_24258[2] = null);
(statearr_24173_24258[1] = 35);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 3))
{var inst_24165 = (state_24167[2]);var state_24167__$1 = state_24167;return cljs.core.async.impl.ioc_helpers.return_chan(state_24167__$1,inst_24165);
} else
{if((state_val_24168 === 35))
{var inst_24149 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24174_24259 = state_24167__$1;(statearr_24174_24259[2] = inst_24149);
(statearr_24174_24259[1] = 29);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 4))
{var inst_24035 = (state_24167[8]);var inst_24035__$1 = (state_24167[2]);var inst_24036 = (inst_24035__$1 == null);var state_24167__$1 = (function (){var statearr_24175 = state_24167;(statearr_24175[8] = inst_24035__$1);
return statearr_24175;
})();if(cljs.core.truth_(inst_24036))
{var statearr_24176_24260 = state_24167__$1;(statearr_24176_24260[1] = 5);
} else
{var statearr_24177_24261 = state_24167__$1;(statearr_24177_24261[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 36))
{var inst_24124 = (state_24167[9]);var inst_24128 = cljs.core.chunk_first(inst_24124);var inst_24129 = cljs.core.chunk_rest(inst_24124);var inst_24130 = cljs.core.count(inst_24128);var inst_24103 = inst_24129;var inst_24104 = inst_24128;var inst_24105 = inst_24130;var inst_24106 = 0;var state_24167__$1 = (function (){var statearr_24178 = state_24167;(statearr_24178[10] = inst_24106);
(statearr_24178[11] = inst_24105);
(statearr_24178[12] = inst_24104);
(statearr_24178[13] = inst_24103);
return statearr_24178;
})();var statearr_24179_24262 = state_24167__$1;(statearr_24179_24262[2] = null);
(statearr_24179_24262[1] = 25);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 5))
{var inst_24042 = cljs.core.deref(cs);var inst_24043 = cljs.core.seq(inst_24042);var inst_24044 = inst_24043;var inst_24045 = null;var inst_24046 = 0;var inst_24047 = 0;var state_24167__$1 = (function (){var statearr_24180 = state_24167;(statearr_24180[14] = inst_24045);
(statearr_24180[15] = inst_24046);
(statearr_24180[16] = inst_24044);
(statearr_24180[17] = inst_24047);
return statearr_24180;
})();var statearr_24181_24263 = state_24167__$1;(statearr_24181_24263[2] = null);
(statearr_24181_24263[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 37))
{var inst_24124 = (state_24167[9]);var inst_24133 = cljs.core.first(inst_24124);var state_24167__$1 = (function (){var statearr_24182 = state_24167;(statearr_24182[18] = inst_24133);
return statearr_24182;
})();var statearr_24183_24264 = state_24167__$1;(statearr_24183_24264[2] = null);
(statearr_24183_24264[1] = 41);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 6))
{var inst_24095 = (state_24167[19]);var inst_24094 = cljs.core.deref(cs);var inst_24095__$1 = cljs.core.keys(inst_24094);var inst_24096 = cljs.core.count(inst_24095__$1);var inst_24097 = cljs.core.reset_BANG_(dctr,inst_24096);var inst_24102 = cljs.core.seq(inst_24095__$1);var inst_24103 = inst_24102;var inst_24104 = null;var inst_24105 = 0;var inst_24106 = 0;var state_24167__$1 = (function (){var statearr_24184 = state_24167;(statearr_24184[19] = inst_24095__$1);
(statearr_24184[20] = inst_24097);
(statearr_24184[10] = inst_24106);
(statearr_24184[11] = inst_24105);
(statearr_24184[12] = inst_24104);
(statearr_24184[13] = inst_24103);
return statearr_24184;
})();var statearr_24185_24265 = state_24167__$1;(statearr_24185_24265[2] = null);
(statearr_24185_24265[1] = 25);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 38))
{var inst_24146 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24186_24266 = state_24167__$1;(statearr_24186_24266[2] = inst_24146);
(statearr_24186_24266[1] = 35);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 7))
{var inst_24163 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24187_24267 = state_24167__$1;(statearr_24187_24267[2] = inst_24163);
(statearr_24187_24267[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 39))
{var inst_24124 = (state_24167[9]);var inst_24142 = (state_24167[2]);var inst_24143 = cljs.core.next(inst_24124);var inst_24103 = inst_24143;var inst_24104 = null;var inst_24105 = 0;var inst_24106 = 0;var state_24167__$1 = (function (){var statearr_24188 = state_24167;(statearr_24188[21] = inst_24142);
(statearr_24188[10] = inst_24106);
(statearr_24188[11] = inst_24105);
(statearr_24188[12] = inst_24104);
(statearr_24188[13] = inst_24103);
return statearr_24188;
})();var statearr_24189_24268 = state_24167__$1;(statearr_24189_24268[2] = null);
(statearr_24189_24268[1] = 25);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 8))
{var inst_24046 = (state_24167[15]);var inst_24047 = (state_24167[17]);var inst_24049 = (inst_24047 < inst_24046);var inst_24050 = inst_24049;var state_24167__$1 = state_24167;if(cljs.core.truth_(inst_24050))
{var statearr_24190_24269 = state_24167__$1;(statearr_24190_24269[1] = 10);
} else
{var statearr_24191_24270 = state_24167__$1;(statearr_24191_24270[1] = 11);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 40))
{var inst_24133 = (state_24167[18]);var inst_24134 = (state_24167[2]);var inst_24135 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24136 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24133);var state_24167__$1 = (function (){var statearr_24192 = state_24167;(statearr_24192[22] = inst_24135);
(statearr_24192[23] = inst_24134);
return statearr_24192;
})();var statearr_24193_24271 = state_24167__$1;(statearr_24193_24271[2] = inst_24136);
cljs.core.async.impl.ioc_helpers.process_exception(state_24167__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 9))
{var inst_24092 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24194_24272 = state_24167__$1;(statearr_24194_24272[2] = inst_24092);
(statearr_24194_24272[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 41))
{var inst_24133 = (state_24167[18]);var inst_24035 = (state_24167[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24167,40,Object,null,39);var inst_24140 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24133,inst_24035,done);var state_24167__$1 = state_24167;var statearr_24195_24273 = state_24167__$1;(statearr_24195_24273[2] = inst_24140);
cljs.core.async.impl.ioc_helpers.process_exception(state_24167__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 10))
{var inst_24045 = (state_24167[14]);var inst_24047 = (state_24167[17]);var inst_24053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24045,inst_24047);var inst_24054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24053,0,null);var inst_24055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24053,1,null);var state_24167__$1 = (function (){var statearr_24196 = state_24167;(statearr_24196[24] = inst_24054);
return statearr_24196;
})();if(cljs.core.truth_(inst_24055))
{var statearr_24197_24274 = state_24167__$1;(statearr_24197_24274[1] = 13);
} else
{var statearr_24198_24275 = state_24167__$1;(statearr_24198_24275[1] = 14);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 42))
{var state_24167__$1 = state_24167;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24167__$1,45,dchan);
} else
{if((state_val_24168 === 11))
{var inst_24044 = (state_24167[16]);var inst_24064 = (state_24167[25]);var inst_24064__$1 = cljs.core.seq(inst_24044);var state_24167__$1 = (function (){var statearr_24199 = state_24167;(statearr_24199[25] = inst_24064__$1);
return statearr_24199;
})();if(inst_24064__$1)
{var statearr_24200_24276 = state_24167__$1;(statearr_24200_24276[1] = 16);
} else
{var statearr_24201_24277 = state_24167__$1;(statearr_24201_24277[1] = 17);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 43))
{var state_24167__$1 = state_24167;var statearr_24202_24278 = state_24167__$1;(statearr_24202_24278[2] = null);
(statearr_24202_24278[1] = 44);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 12))
{var inst_24090 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24203_24279 = state_24167__$1;(statearr_24203_24279[2] = inst_24090);
(statearr_24203_24279[1] = 9);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 44))
{var inst_24160 = (state_24167[2]);var state_24167__$1 = (function (){var statearr_24204 = state_24167;(statearr_24204[26] = inst_24160);
return statearr_24204;
})();var statearr_24205_24280 = state_24167__$1;(statearr_24205_24280[2] = null);
(statearr_24205_24280[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 13))
{var inst_24054 = (state_24167[24]);var inst_24057 = cljs.core.async.close_BANG_(inst_24054);var state_24167__$1 = state_24167;var statearr_24206_24281 = state_24167__$1;(statearr_24206_24281[2] = inst_24057);
(statearr_24206_24281[1] = 15);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 45))
{var inst_24157 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24210_24282 = state_24167__$1;(statearr_24210_24282[2] = inst_24157);
(statearr_24210_24282[1] = 44);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 14))
{var state_24167__$1 = state_24167;var statearr_24211_24283 = state_24167__$1;(statearr_24211_24283[2] = null);
(statearr_24211_24283[1] = 15);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 15))
{var inst_24045 = (state_24167[14]);var inst_24046 = (state_24167[15]);var inst_24044 = (state_24167[16]);var inst_24047 = (state_24167[17]);var inst_24060 = (state_24167[2]);var inst_24061 = (inst_24047 + 1);var tmp24207 = inst_24045;var tmp24208 = inst_24046;var tmp24209 = inst_24044;var inst_24044__$1 = tmp24209;var inst_24045__$1 = tmp24207;var inst_24046__$1 = tmp24208;var inst_24047__$1 = inst_24061;var state_24167__$1 = (function (){var statearr_24212 = state_24167;(statearr_24212[14] = inst_24045__$1);
(statearr_24212[15] = inst_24046__$1);
(statearr_24212[16] = inst_24044__$1);
(statearr_24212[27] = inst_24060);
(statearr_24212[17] = inst_24047__$1);
return statearr_24212;
})();var statearr_24213_24284 = state_24167__$1;(statearr_24213_24284[2] = null);
(statearr_24213_24284[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 16))
{var inst_24064 = (state_24167[25]);var inst_24066 = cljs.core.chunked_seq_QMARK_(inst_24064);var state_24167__$1 = state_24167;if(inst_24066)
{var statearr_24214_24285 = state_24167__$1;(statearr_24214_24285[1] = 19);
} else
{var statearr_24215_24286 = state_24167__$1;(statearr_24215_24286[1] = 20);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 17))
{var state_24167__$1 = state_24167;var statearr_24216_24287 = state_24167__$1;(statearr_24216_24287[2] = null);
(statearr_24216_24287[1] = 18);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 18))
{var inst_24088 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24217_24288 = state_24167__$1;(statearr_24217_24288[2] = inst_24088);
(statearr_24217_24288[1] = 12);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 19))
{var inst_24064 = (state_24167[25]);var inst_24068 = cljs.core.chunk_first(inst_24064);var inst_24069 = cljs.core.chunk_rest(inst_24064);var inst_24070 = cljs.core.count(inst_24068);var inst_24044 = inst_24069;var inst_24045 = inst_24068;var inst_24046 = inst_24070;var inst_24047 = 0;var state_24167__$1 = (function (){var statearr_24218 = state_24167;(statearr_24218[14] = inst_24045);
(statearr_24218[15] = inst_24046);
(statearr_24218[16] = inst_24044);
(statearr_24218[17] = inst_24047);
return statearr_24218;
})();var statearr_24219_24289 = state_24167__$1;(statearr_24219_24289[2] = null);
(statearr_24219_24289[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 20))
{var inst_24064 = (state_24167[25]);var inst_24074 = cljs.core.first(inst_24064);var inst_24075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24074,0,null);var inst_24076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24074,1,null);var state_24167__$1 = (function (){var statearr_24220 = state_24167;(statearr_24220[28] = inst_24075);
return statearr_24220;
})();if(cljs.core.truth_(inst_24076))
{var statearr_24221_24290 = state_24167__$1;(statearr_24221_24290[1] = 22);
} else
{var statearr_24222_24291 = state_24167__$1;(statearr_24222_24291[1] = 23);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 21))
{var inst_24085 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24223_24292 = state_24167__$1;(statearr_24223_24292[2] = inst_24085);
(statearr_24223_24292[1] = 18);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 22))
{var inst_24075 = (state_24167[28]);var inst_24078 = cljs.core.async.close_BANG_(inst_24075);var state_24167__$1 = state_24167;var statearr_24224_24293 = state_24167__$1;(statearr_24224_24293[2] = inst_24078);
(statearr_24224_24293[1] = 24);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 23))
{var state_24167__$1 = state_24167;var statearr_24225_24294 = state_24167__$1;(statearr_24225_24294[2] = null);
(statearr_24225_24294[1] = 24);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 24))
{var inst_24064 = (state_24167[25]);var inst_24081 = (state_24167[2]);var inst_24082 = cljs.core.next(inst_24064);var inst_24044 = inst_24082;var inst_24045 = null;var inst_24046 = 0;var inst_24047 = 0;var state_24167__$1 = (function (){var statearr_24226 = state_24167;(statearr_24226[14] = inst_24045);
(statearr_24226[15] = inst_24046);
(statearr_24226[16] = inst_24044);
(statearr_24226[17] = inst_24047);
(statearr_24226[29] = inst_24081);
return statearr_24226;
})();var statearr_24227_24295 = state_24167__$1;(statearr_24227_24295[2] = null);
(statearr_24227_24295[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 25))
{var inst_24106 = (state_24167[10]);var inst_24105 = (state_24167[11]);var inst_24108 = (inst_24106 < inst_24105);var inst_24109 = inst_24108;var state_24167__$1 = state_24167;if(cljs.core.truth_(inst_24109))
{var statearr_24228_24296 = state_24167__$1;(statearr_24228_24296[1] = 27);
} else
{var statearr_24229_24297 = state_24167__$1;(statearr_24229_24297[1] = 28);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 26))
{var inst_24095 = (state_24167[19]);var inst_24153 = (state_24167[2]);var inst_24154 = cljs.core.seq(inst_24095);var state_24167__$1 = (function (){var statearr_24230 = state_24167;(statearr_24230[30] = inst_24153);
return statearr_24230;
})();if(inst_24154)
{var statearr_24231_24298 = state_24167__$1;(statearr_24231_24298[1] = 42);
} else
{var statearr_24232_24299 = state_24167__$1;(statearr_24232_24299[1] = 43);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 27))
{var inst_24106 = (state_24167[10]);var inst_24104 = (state_24167[12]);var inst_24111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24104,inst_24106);var state_24167__$1 = (function (){var statearr_24233 = state_24167;(statearr_24233[7] = inst_24111);
return statearr_24233;
})();var statearr_24234_24300 = state_24167__$1;(statearr_24234_24300[2] = null);
(statearr_24234_24300[1] = 32);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 28))
{var inst_24124 = (state_24167[9]);var inst_24103 = (state_24167[13]);var inst_24124__$1 = cljs.core.seq(inst_24103);var state_24167__$1 = (function (){var statearr_24238 = state_24167;(statearr_24238[9] = inst_24124__$1);
return statearr_24238;
})();if(inst_24124__$1)
{var statearr_24239_24301 = state_24167__$1;(statearr_24239_24301[1] = 33);
} else
{var statearr_24240_24302 = state_24167__$1;(statearr_24240_24302[1] = 34);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 29))
{var inst_24151 = (state_24167[2]);var state_24167__$1 = state_24167;var statearr_24241_24303 = state_24167__$1;(statearr_24241_24303[2] = inst_24151);
(statearr_24241_24303[1] = 26);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 30))
{var inst_24106 = (state_24167[10]);var inst_24105 = (state_24167[11]);var inst_24104 = (state_24167[12]);var inst_24103 = (state_24167[13]);var inst_24120 = (state_24167[2]);var inst_24121 = (inst_24106 + 1);var tmp24235 = inst_24105;var tmp24236 = inst_24104;var tmp24237 = inst_24103;var inst_24103__$1 = tmp24237;var inst_24104__$1 = tmp24236;var inst_24105__$1 = tmp24235;var inst_24106__$1 = inst_24121;var state_24167__$1 = (function (){var statearr_24242 = state_24167;(statearr_24242[31] = inst_24120);
(statearr_24242[10] = inst_24106__$1);
(statearr_24242[11] = inst_24105__$1);
(statearr_24242[12] = inst_24104__$1);
(statearr_24242[13] = inst_24103__$1);
return statearr_24242;
})();var statearr_24243_24304 = state_24167__$1;(statearr_24243_24304[2] = null);
(statearr_24243_24304[1] = 25);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24168 === 31))
{var inst_24111 = (state_24167[7]);var inst_24112 = (state_24167[2]);var inst_24113 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24114 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24111);var state_24167__$1 = (function (){var statearr_24244 = state_24167;(statearr_24244[32] = inst_24113);
(statearr_24244[33] = inst_24112);
return statearr_24244;
})();var statearr_24245_24305 = state_24167__$1;(statearr_24245_24305[2] = inst_24114);
cljs.core.async.impl.ioc_helpers.process_exception(state_24167__$1);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_24249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24249[0] = state_machine__5507__auto__);
(statearr_24249[1] = 1);
return statearr_24249;
});
var state_machine__5507__auto____1 = (function (state_24167){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24167);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24250){if((e24250 instanceof Object))
{var ex__5510__auto__ = e24250;var statearr_24251_24306 = state_24167;(statearr_24251_24306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24167);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e24250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__24307 = state_24167;
state_24167 = G__24307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24167){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24252 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24253);
return statearr_24252;
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
cljs.core.async.Mix = (function (){var obj24309 = {};return obj24309;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$208,null,cljs.core.constant$keyword$209,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$210);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$209);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$210,chs);var pauses = pick(cljs.core.constant$keyword$208,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$211,solos,cljs.core.constant$keyword$212,pick(cljs.core.constant$keyword$209,chs),cljs.core.constant$keyword$213,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$208)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24419 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24420){
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
this.meta24420 = meta24420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24419.cljs$lang$type = true;
cljs.core.async.t24419.cljs$lang$ctorStr = "cljs.core.async/t24419";
cljs.core.async.t24419.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24419");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24421){var self__ = this;
var _24421__$1 = this;return self__.meta24420;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24421,meta24420__$1){var self__ = this;
var _24421__$1 = this;return (new cljs.core.async.t24419(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24420__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24419 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24419(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24420){return (new cljs.core.async.t24419(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24420));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24419(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24486){var state_val_24487 = (state_24486[1]);if((state_val_24487 === 1))
{var inst_24425 = (state_24486[7]);var inst_24425__$1 = calc_state();var inst_24426 = cljs.core.seq_QMARK_(inst_24425__$1);var state_24486__$1 = (function (){var statearr_24488 = state_24486;(statearr_24488[7] = inst_24425__$1);
return statearr_24488;
})();if(inst_24426)
{var statearr_24489_24529 = state_24486__$1;(statearr_24489_24529[1] = 2);
} else
{var statearr_24490_24530 = state_24486__$1;(statearr_24490_24530[1] = 3);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 2))
{var inst_24425 = (state_24486[7]);var inst_24428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24425);var state_24486__$1 = state_24486;var statearr_24491_24531 = state_24486__$1;(statearr_24491_24531[2] = inst_24428);
(statearr_24491_24531[1] = 4);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 3))
{var inst_24425 = (state_24486[7]);var state_24486__$1 = state_24486;var statearr_24492_24532 = state_24486__$1;(statearr_24492_24532[2] = inst_24425);
(statearr_24492_24532[1] = 4);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 4))
{var inst_24425 = (state_24486[7]);var inst_24431 = (state_24486[2]);var inst_24432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24431,cljs.core.constant$keyword$213);var inst_24433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24431,cljs.core.constant$keyword$212);var inst_24434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24431,cljs.core.constant$keyword$211);var inst_24435 = inst_24425;var state_24486__$1 = (function (){var statearr_24493 = state_24486;(statearr_24493[8] = inst_24435);
(statearr_24493[9] = inst_24434);
(statearr_24493[10] = inst_24433);
(statearr_24493[11] = inst_24432);
return statearr_24493;
})();var statearr_24494_24533 = state_24486__$1;(statearr_24494_24533[2] = null);
(statearr_24494_24533[1] = 5);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 5))
{var inst_24435 = (state_24486[8]);var inst_24438 = cljs.core.seq_QMARK_(inst_24435);var state_24486__$1 = state_24486;if(inst_24438)
{var statearr_24495_24534 = state_24486__$1;(statearr_24495_24534[1] = 7);
} else
{var statearr_24496_24535 = state_24486__$1;(statearr_24496_24535[1] = 8);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 6))
{var inst_24484 = (state_24486[2]);var state_24486__$1 = state_24486;return cljs.core.async.impl.ioc_helpers.return_chan(state_24486__$1,inst_24484);
} else
{if((state_val_24487 === 7))
{var inst_24435 = (state_24486[8]);var inst_24440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24435);var state_24486__$1 = state_24486;var statearr_24497_24536 = state_24486__$1;(statearr_24497_24536[2] = inst_24440);
(statearr_24497_24536[1] = 9);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 8))
{var inst_24435 = (state_24486[8]);var state_24486__$1 = state_24486;var statearr_24498_24537 = state_24486__$1;(statearr_24498_24537[2] = inst_24435);
(statearr_24498_24537[1] = 9);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 9))
{var inst_24443 = (state_24486[12]);var inst_24443__$1 = (state_24486[2]);var inst_24444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443__$1,cljs.core.constant$keyword$213);var inst_24445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443__$1,cljs.core.constant$keyword$212);var inst_24446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24443__$1,cljs.core.constant$keyword$211);var state_24486__$1 = (function (){var statearr_24499 = state_24486;(statearr_24499[13] = inst_24446);
(statearr_24499[14] = inst_24445);
(statearr_24499[12] = inst_24443__$1);
return statearr_24499;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24486__$1,10,inst_24444);
} else
{if((state_val_24487 === 10))
{var inst_24450 = (state_24486[15]);var inst_24451 = (state_24486[16]);var inst_24449 = (state_24486[2]);var inst_24450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24449,0,null);var inst_24451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24449,1,null);var inst_24452 = (inst_24450__$1 == null);var inst_24453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24451__$1,change);var inst_24454 = (inst_24452) || (inst_24453);var state_24486__$1 = (function (){var statearr_24500 = state_24486;(statearr_24500[15] = inst_24450__$1);
(statearr_24500[16] = inst_24451__$1);
return statearr_24500;
})();if(cljs.core.truth_(inst_24454))
{var statearr_24501_24538 = state_24486__$1;(statearr_24501_24538[1] = 11);
} else
{var statearr_24502_24539 = state_24486__$1;(statearr_24502_24539[1] = 12);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 11))
{var inst_24450 = (state_24486[15]);var inst_24456 = (inst_24450 == null);var state_24486__$1 = state_24486;if(cljs.core.truth_(inst_24456))
{var statearr_24503_24540 = state_24486__$1;(statearr_24503_24540[1] = 14);
} else
{var statearr_24504_24541 = state_24486__$1;(statearr_24504_24541[1] = 15);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 12))
{var inst_24451 = (state_24486[16]);var inst_24446 = (state_24486[13]);var inst_24465 = (state_24486[17]);var inst_24465__$1 = (inst_24446.cljs$core$IFn$_invoke$arity$1 ? inst_24446.cljs$core$IFn$_invoke$arity$1(inst_24451) : inst_24446.call(null,inst_24451));var state_24486__$1 = (function (){var statearr_24505 = state_24486;(statearr_24505[17] = inst_24465__$1);
return statearr_24505;
})();if(cljs.core.truth_(inst_24465__$1))
{var statearr_24506_24542 = state_24486__$1;(statearr_24506_24542[1] = 17);
} else
{var statearr_24507_24543 = state_24486__$1;(statearr_24507_24543[1] = 18);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 13))
{var inst_24482 = (state_24486[2]);var state_24486__$1 = state_24486;var statearr_24508_24544 = state_24486__$1;(statearr_24508_24544[2] = inst_24482);
(statearr_24508_24544[1] = 6);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 14))
{var inst_24451 = (state_24486[16]);var inst_24458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24451);var state_24486__$1 = state_24486;var statearr_24509_24545 = state_24486__$1;(statearr_24509_24545[2] = inst_24458);
(statearr_24509_24545[1] = 16);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 15))
{var state_24486__$1 = state_24486;var statearr_24510_24546 = state_24486__$1;(statearr_24510_24546[2] = null);
(statearr_24510_24546[1] = 16);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 16))
{var inst_24461 = (state_24486[2]);var inst_24462 = calc_state();var inst_24435 = inst_24462;var state_24486__$1 = (function (){var statearr_24511 = state_24486;(statearr_24511[18] = inst_24461);
(statearr_24511[8] = inst_24435);
return statearr_24511;
})();var statearr_24512_24547 = state_24486__$1;(statearr_24512_24547[2] = null);
(statearr_24512_24547[1] = 5);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 17))
{var inst_24465 = (state_24486[17]);var state_24486__$1 = state_24486;var statearr_24513_24548 = state_24486__$1;(statearr_24513_24548[2] = inst_24465);
(statearr_24513_24548[1] = 19);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 18))
{var inst_24451 = (state_24486[16]);var inst_24446 = (state_24486[13]);var inst_24445 = (state_24486[14]);var inst_24468 = cljs.core.empty_QMARK_(inst_24446);var inst_24469 = (inst_24445.cljs$core$IFn$_invoke$arity$1 ? inst_24445.cljs$core$IFn$_invoke$arity$1(inst_24451) : inst_24445.call(null,inst_24451));var inst_24470 = cljs.core.not(inst_24469);var inst_24471 = (inst_24468) && (inst_24470);var state_24486__$1 = state_24486;var statearr_24514_24549 = state_24486__$1;(statearr_24514_24549[2] = inst_24471);
(statearr_24514_24549[1] = 19);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 19))
{var inst_24473 = (state_24486[2]);var state_24486__$1 = state_24486;if(cljs.core.truth_(inst_24473))
{var statearr_24515_24550 = state_24486__$1;(statearr_24515_24550[1] = 20);
} else
{var statearr_24516_24551 = state_24486__$1;(statearr_24516_24551[1] = 21);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 20))
{var inst_24450 = (state_24486[15]);var state_24486__$1 = state_24486;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24486__$1,23,out,inst_24450);
} else
{if((state_val_24487 === 21))
{var state_24486__$1 = state_24486;var statearr_24517_24552 = state_24486__$1;(statearr_24517_24552[2] = null);
(statearr_24517_24552[1] = 22);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 22))
{var inst_24443 = (state_24486[12]);var inst_24479 = (state_24486[2]);var inst_24435 = inst_24443;var state_24486__$1 = (function (){var statearr_24518 = state_24486;(statearr_24518[8] = inst_24435);
(statearr_24518[19] = inst_24479);
return statearr_24518;
})();var statearr_24519_24553 = state_24486__$1;(statearr_24519_24553[2] = null);
(statearr_24519_24553[1] = 5);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24487 === 23))
{var inst_24476 = (state_24486[2]);var state_24486__$1 = state_24486;var statearr_24520_24554 = state_24486__$1;(statearr_24520_24554[2] = inst_24476);
(statearr_24520_24554[1] = 22);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_24524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24524[0] = state_machine__5507__auto__);
(statearr_24524[1] = 1);
return statearr_24524;
});
var state_machine__5507__auto____1 = (function (state_24486){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24486);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24525){if((e24525 instanceof Object))
{var ex__5510__auto__ = e24525;var statearr_24526_24555 = state_24486;(statearr_24526_24555[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24486);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e24525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__24556 = state_24486;
state_24486 = G__24556;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24486){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24527 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24528);
return statearr_24527;
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
cljs.core.async.Pub = (function (){var obj24558 = {};return obj24558;
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
return (function (p1__24559_SHARP_){if(cljs.core.truth_((p1__24559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24559_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24559_SHARP_.call(null,topic))))
{return p1__24559_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24559_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24685 = meta24685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24684.cljs$lang$type = true;
cljs.core.async.t24684.cljs$lang$ctorStr = "cljs.core.async/t24684";
cljs.core.async.t24684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24684");
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24686){var self__ = this;
var _24686__$1 = this;return self__.meta24685;
});})(mults,ensure_mult))
;
cljs.core.async.t24684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24686,meta24685__$1){var self__ = this;
var _24686__$1 = this;return (new cljs.core.async.t24684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24684 = ((function (mults,ensure_mult){
return (function __GT_t24684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24685){return (new cljs.core.async.t24684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24760){var state_val_24761 = (state_24760[1]);if((state_val_24761 === 1))
{var state_24760__$1 = state_24760;var statearr_24762_24809 = state_24760__$1;(statearr_24762_24809[2] = null);
(statearr_24762_24809[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 2))
{var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24760__$1,4,ch);
} else
{if((state_val_24761 === 3))
{var inst_24758 = (state_24760[2]);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.return_chan(state_24760__$1,inst_24758);
} else
{if((state_val_24761 === 4))
{var inst_24689 = (state_24760[7]);var inst_24689__$1 = (state_24760[2]);var inst_24690 = (inst_24689__$1 == null);var state_24760__$1 = (function (){var statearr_24763 = state_24760;(statearr_24763[7] = inst_24689__$1);
return statearr_24763;
})();if(cljs.core.truth_(inst_24690))
{var statearr_24764_24810 = state_24760__$1;(statearr_24764_24810[1] = 5);
} else
{var statearr_24765_24811 = state_24760__$1;(statearr_24765_24811[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 5))
{var inst_24696 = cljs.core.deref(mults);var inst_24697 = cljs.core.vals(inst_24696);var inst_24698 = cljs.core.seq(inst_24697);var inst_24699 = inst_24698;var inst_24700 = null;var inst_24701 = 0;var inst_24702 = 0;var state_24760__$1 = (function (){var statearr_24766 = state_24760;(statearr_24766[8] = inst_24699);
(statearr_24766[9] = inst_24700);
(statearr_24766[10] = inst_24701);
(statearr_24766[11] = inst_24702);
return statearr_24766;
})();var statearr_24767_24812 = state_24760__$1;(statearr_24767_24812[2] = null);
(statearr_24767_24812[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 6))
{var inst_24737 = (state_24760[12]);var inst_24739 = (state_24760[13]);var inst_24689 = (state_24760[7]);var inst_24737__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24689) : topic_fn.call(null,inst_24689));var inst_24738 = cljs.core.deref(mults);var inst_24739__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24738,inst_24737__$1);var state_24760__$1 = (function (){var statearr_24768 = state_24760;(statearr_24768[12] = inst_24737__$1);
(statearr_24768[13] = inst_24739__$1);
return statearr_24768;
})();if(cljs.core.truth_(inst_24739__$1))
{var statearr_24769_24813 = state_24760__$1;(statearr_24769_24813[1] = 19);
} else
{var statearr_24770_24814 = state_24760__$1;(statearr_24770_24814[1] = 20);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 7))
{var inst_24756 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24771_24815 = state_24760__$1;(statearr_24771_24815[2] = inst_24756);
(statearr_24771_24815[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 8))
{var inst_24701 = (state_24760[10]);var inst_24702 = (state_24760[11]);var inst_24704 = (inst_24702 < inst_24701);var inst_24705 = inst_24704;var state_24760__$1 = state_24760;if(cljs.core.truth_(inst_24705))
{var statearr_24775_24816 = state_24760__$1;(statearr_24775_24816[1] = 10);
} else
{var statearr_24776_24817 = state_24760__$1;(statearr_24776_24817[1] = 11);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 9))
{var inst_24735 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24777_24818 = state_24760__$1;(statearr_24777_24818[2] = inst_24735);
(statearr_24777_24818[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 10))
{var inst_24699 = (state_24760[8]);var inst_24700 = (state_24760[9]);var inst_24701 = (state_24760[10]);var inst_24702 = (state_24760[11]);var inst_24707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24700,inst_24702);var inst_24708 = cljs.core.async.muxch_STAR_(inst_24707);var inst_24709 = cljs.core.async.close_BANG_(inst_24708);var inst_24710 = (inst_24702 + 1);var tmp24772 = inst_24699;var tmp24773 = inst_24700;var tmp24774 = inst_24701;var inst_24699__$1 = tmp24772;var inst_24700__$1 = tmp24773;var inst_24701__$1 = tmp24774;var inst_24702__$1 = inst_24710;var state_24760__$1 = (function (){var statearr_24778 = state_24760;(statearr_24778[8] = inst_24699__$1);
(statearr_24778[14] = inst_24709);
(statearr_24778[9] = inst_24700__$1);
(statearr_24778[10] = inst_24701__$1);
(statearr_24778[11] = inst_24702__$1);
return statearr_24778;
})();var statearr_24779_24819 = state_24760__$1;(statearr_24779_24819[2] = null);
(statearr_24779_24819[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 11))
{var inst_24699 = (state_24760[8]);var inst_24713 = (state_24760[15]);var inst_24713__$1 = cljs.core.seq(inst_24699);var state_24760__$1 = (function (){var statearr_24780 = state_24760;(statearr_24780[15] = inst_24713__$1);
return statearr_24780;
})();if(inst_24713__$1)
{var statearr_24781_24820 = state_24760__$1;(statearr_24781_24820[1] = 13);
} else
{var statearr_24782_24821 = state_24760__$1;(statearr_24782_24821[1] = 14);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 12))
{var inst_24733 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24783_24822 = state_24760__$1;(statearr_24783_24822[2] = inst_24733);
(statearr_24783_24822[1] = 9);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 13))
{var inst_24713 = (state_24760[15]);var inst_24715 = cljs.core.chunked_seq_QMARK_(inst_24713);var state_24760__$1 = state_24760;if(inst_24715)
{var statearr_24784_24823 = state_24760__$1;(statearr_24784_24823[1] = 16);
} else
{var statearr_24785_24824 = state_24760__$1;(statearr_24785_24824[1] = 17);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 14))
{var state_24760__$1 = state_24760;var statearr_24786_24825 = state_24760__$1;(statearr_24786_24825[2] = null);
(statearr_24786_24825[1] = 15);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 15))
{var inst_24731 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24787_24826 = state_24760__$1;(statearr_24787_24826[2] = inst_24731);
(statearr_24787_24826[1] = 12);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 16))
{var inst_24713 = (state_24760[15]);var inst_24717 = cljs.core.chunk_first(inst_24713);var inst_24718 = cljs.core.chunk_rest(inst_24713);var inst_24719 = cljs.core.count(inst_24717);var inst_24699 = inst_24718;var inst_24700 = inst_24717;var inst_24701 = inst_24719;var inst_24702 = 0;var state_24760__$1 = (function (){var statearr_24788 = state_24760;(statearr_24788[8] = inst_24699);
(statearr_24788[9] = inst_24700);
(statearr_24788[10] = inst_24701);
(statearr_24788[11] = inst_24702);
return statearr_24788;
})();var statearr_24789_24827 = state_24760__$1;(statearr_24789_24827[2] = null);
(statearr_24789_24827[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 17))
{var inst_24713 = (state_24760[15]);var inst_24722 = cljs.core.first(inst_24713);var inst_24723 = cljs.core.async.muxch_STAR_(inst_24722);var inst_24724 = cljs.core.async.close_BANG_(inst_24723);var inst_24725 = cljs.core.next(inst_24713);var inst_24699 = inst_24725;var inst_24700 = null;var inst_24701 = 0;var inst_24702 = 0;var state_24760__$1 = (function (){var statearr_24790 = state_24760;(statearr_24790[8] = inst_24699);
(statearr_24790[16] = inst_24724);
(statearr_24790[9] = inst_24700);
(statearr_24790[10] = inst_24701);
(statearr_24790[11] = inst_24702);
return statearr_24790;
})();var statearr_24791_24828 = state_24760__$1;(statearr_24791_24828[2] = null);
(statearr_24791_24828[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 18))
{var inst_24728 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24792_24829 = state_24760__$1;(statearr_24792_24829[2] = inst_24728);
(statearr_24792_24829[1] = 15);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 19))
{var state_24760__$1 = state_24760;var statearr_24793_24830 = state_24760__$1;(statearr_24793_24830[2] = null);
(statearr_24793_24830[1] = 24);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 20))
{var state_24760__$1 = state_24760;var statearr_24794_24831 = state_24760__$1;(statearr_24794_24831[2] = null);
(statearr_24794_24831[1] = 21);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 21))
{var inst_24753 = (state_24760[2]);var state_24760__$1 = (function (){var statearr_24795 = state_24760;(statearr_24795[17] = inst_24753);
return statearr_24795;
})();var statearr_24796_24832 = state_24760__$1;(statearr_24796_24832[2] = null);
(statearr_24796_24832[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 22))
{var inst_24750 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24797_24833 = state_24760__$1;(statearr_24797_24833[2] = inst_24750);
(statearr_24797_24833[1] = 21);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 23))
{var inst_24737 = (state_24760[12]);var inst_24741 = (state_24760[2]);var inst_24742 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24737);var state_24760__$1 = (function (){var statearr_24798 = state_24760;(statearr_24798[18] = inst_24741);
return statearr_24798;
})();var statearr_24799_24834 = state_24760__$1;(statearr_24799_24834[2] = inst_24742);
cljs.core.async.impl.ioc_helpers.process_exception(state_24760__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24761 === 24))
{var inst_24739 = (state_24760[13]);var inst_24689 = (state_24760[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24760,23,Object,null,22);var inst_24746 = cljs.core.async.muxch_STAR_(inst_24739);var state_24760__$1 = state_24760;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24760__$1,25,inst_24746,inst_24689);
} else
{if((state_val_24761 === 25))
{var inst_24748 = (state_24760[2]);var state_24760__$1 = state_24760;var statearr_24800_24835 = state_24760__$1;(statearr_24800_24835[2] = inst_24748);
cljs.core.async.impl.ioc_helpers.process_exception(state_24760__$1);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_24804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24804[0] = state_machine__5507__auto__);
(statearr_24804[1] = 1);
return statearr_24804;
});
var state_machine__5507__auto____1 = (function (state_24760){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24760);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object))
{var ex__5510__auto__ = e24805;var statearr_24806_24836 = state_24760;(statearr_24806_24836[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24760);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e24805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__24837 = state_24760;
state_24760 = G__24837;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24760){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24807 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24808);
return statearr_24807;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24944){var state_val_24945 = (state_24944[1]);if((state_val_24945 === 1))
{var state_24944__$1 = state_24944;var statearr_24946_24975 = state_24944__$1;(statearr_24946_24975[2] = null);
(statearr_24946_24975[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 2))
{var inst_24907 = cljs.core.reset_BANG_(dctr,cnt);var inst_24908 = 0;var state_24944__$1 = (function (){var statearr_24947 = state_24944;(statearr_24947[7] = inst_24908);
(statearr_24947[8] = inst_24907);
return statearr_24947;
})();var statearr_24948_24976 = state_24944__$1;(statearr_24948_24976[2] = null);
(statearr_24948_24976[1] = 4);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 3))
{var inst_24942 = (state_24944[2]);var state_24944__$1 = state_24944;return cljs.core.async.impl.ioc_helpers.return_chan(state_24944__$1,inst_24942);
} else
{if((state_val_24945 === 4))
{var inst_24908 = (state_24944[7]);var inst_24910 = (inst_24908 < cnt);var state_24944__$1 = state_24944;if(cljs.core.truth_(inst_24910))
{var statearr_24949_24977 = state_24944__$1;(statearr_24949_24977[1] = 6);
} else
{var statearr_24950_24978 = state_24944__$1;(statearr_24950_24978[1] = 7);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 5))
{var inst_24928 = (state_24944[2]);var state_24944__$1 = (function (){var statearr_24951 = state_24944;(statearr_24951[9] = inst_24928);
return statearr_24951;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24944__$1,12,dchan);
} else
{if((state_val_24945 === 6))
{var state_24944__$1 = state_24944;var statearr_24952_24979 = state_24944__$1;(statearr_24952_24979[2] = null);
(statearr_24952_24979[1] = 11);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 7))
{var state_24944__$1 = state_24944;var statearr_24953_24980 = state_24944__$1;(statearr_24953_24980[2] = null);
(statearr_24953_24980[1] = 8);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 8))
{var inst_24926 = (state_24944[2]);var state_24944__$1 = state_24944;var statearr_24954_24981 = state_24944__$1;(statearr_24954_24981[2] = inst_24926);
(statearr_24954_24981[1] = 5);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 9))
{var inst_24908 = (state_24944[7]);var inst_24921 = (state_24944[2]);var inst_24922 = (inst_24908 + 1);var inst_24908__$1 = inst_24922;var state_24944__$1 = (function (){var statearr_24955 = state_24944;(statearr_24955[10] = inst_24921);
(statearr_24955[7] = inst_24908__$1);
return statearr_24955;
})();var statearr_24956_24982 = state_24944__$1;(statearr_24956_24982[2] = null);
(statearr_24956_24982[1] = 4);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 10))
{var inst_24912 = (state_24944[2]);var inst_24913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24944__$1 = (function (){var statearr_24957 = state_24944;(statearr_24957[11] = inst_24912);
return statearr_24957;
})();var statearr_24958_24983 = state_24944__$1;(statearr_24958_24983[2] = inst_24913);
cljs.core.async.impl.ioc_helpers.process_exception(state_24944__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 11))
{var inst_24908 = (state_24944[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24944,10,Object,null,9);var inst_24917 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24908) : chs__$1.call(null,inst_24908));var inst_24918 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24908) : done.call(null,inst_24908));var inst_24919 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24917,inst_24918);var state_24944__$1 = state_24944;var statearr_24959_24984 = state_24944__$1;(statearr_24959_24984[2] = inst_24919);
cljs.core.async.impl.ioc_helpers.process_exception(state_24944__$1);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 12))
{var inst_24930 = (state_24944[12]);var inst_24930__$1 = (state_24944[2]);var inst_24931 = cljs.core.some(cljs.core.nil_QMARK_,inst_24930__$1);var state_24944__$1 = (function (){var statearr_24960 = state_24944;(statearr_24960[12] = inst_24930__$1);
return statearr_24960;
})();if(cljs.core.truth_(inst_24931))
{var statearr_24961_24985 = state_24944__$1;(statearr_24961_24985[1] = 13);
} else
{var statearr_24962_24986 = state_24944__$1;(statearr_24962_24986[1] = 14);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 13))
{var inst_24933 = cljs.core.async.close_BANG_(out);var state_24944__$1 = state_24944;var statearr_24963_24987 = state_24944__$1;(statearr_24963_24987[2] = inst_24933);
(statearr_24963_24987[1] = 15);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 14))
{var inst_24930 = (state_24944[12]);var inst_24935 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24930);var state_24944__$1 = state_24944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24944__$1,16,out,inst_24935);
} else
{if((state_val_24945 === 15))
{var inst_24940 = (state_24944[2]);var state_24944__$1 = state_24944;var statearr_24964_24988 = state_24944__$1;(statearr_24964_24988[2] = inst_24940);
(statearr_24964_24988[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_24945 === 16))
{var inst_24937 = (state_24944[2]);var state_24944__$1 = (function (){var statearr_24965 = state_24944;(statearr_24965[13] = inst_24937);
return statearr_24965;
})();var statearr_24966_24989 = state_24944__$1;(statearr_24966_24989[2] = null);
(statearr_24966_24989[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_24970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24970[0] = state_machine__5507__auto__);
(statearr_24970[1] = 1);
return statearr_24970;
});
var state_machine__5507__auto____1 = (function (state_24944){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24944);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24971){if((e24971 instanceof Object))
{var ex__5510__auto__ = e24971;var statearr_24972_24990 = state_24944;(statearr_24972_24990[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24944);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e24971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__24991 = state_24944;
state_24944 = G__24991;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24944){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24973 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24974);
return statearr_24973;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25075){var state_val_25076 = (state_25075[1]);if((state_val_25076 === 1))
{var inst_25046 = cljs.core.vec(chs);var inst_25047 = inst_25046;var state_25075__$1 = (function (){var statearr_25077 = state_25075;(statearr_25077[7] = inst_25047);
return statearr_25077;
})();var statearr_25078_25100 = state_25075__$1;(statearr_25078_25100[2] = null);
(statearr_25078_25100[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 2))
{var inst_25047 = (state_25075[7]);var inst_25049 = cljs.core.count(inst_25047);var inst_25050 = (inst_25049 > 0);var state_25075__$1 = state_25075;if(cljs.core.truth_(inst_25050))
{var statearr_25079_25101 = state_25075__$1;(statearr_25079_25101[1] = 4);
} else
{var statearr_25080_25102 = state_25075__$1;(statearr_25080_25102[1] = 5);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 3))
{var inst_25073 = (state_25075[2]);var state_25075__$1 = state_25075;return cljs.core.async.impl.ioc_helpers.return_chan(state_25075__$1,inst_25073);
} else
{if((state_val_25076 === 4))
{var inst_25047 = (state_25075[7]);var state_25075__$1 = state_25075;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25075__$1,7,inst_25047);
} else
{if((state_val_25076 === 5))
{var inst_25069 = cljs.core.async.close_BANG_(out);var state_25075__$1 = state_25075;var statearr_25081_25103 = state_25075__$1;(statearr_25081_25103[2] = inst_25069);
(statearr_25081_25103[1] = 6);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 6))
{var inst_25071 = (state_25075[2]);var state_25075__$1 = state_25075;var statearr_25082_25104 = state_25075__$1;(statearr_25082_25104[2] = inst_25071);
(statearr_25082_25104[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 7))
{var inst_25055 = (state_25075[8]);var inst_25054 = (state_25075[9]);var inst_25054__$1 = (state_25075[2]);var inst_25055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25054__$1,0,null);var inst_25056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25054__$1,1,null);var inst_25057 = (inst_25055__$1 == null);var state_25075__$1 = (function (){var statearr_25083 = state_25075;(statearr_25083[8] = inst_25055__$1);
(statearr_25083[10] = inst_25056);
(statearr_25083[9] = inst_25054__$1);
return statearr_25083;
})();if(cljs.core.truth_(inst_25057))
{var statearr_25084_25105 = state_25075__$1;(statearr_25084_25105[1] = 8);
} else
{var statearr_25085_25106 = state_25075__$1;(statearr_25085_25106[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 8))
{var inst_25055 = (state_25075[8]);var inst_25056 = (state_25075[10]);var inst_25054 = (state_25075[9]);var inst_25047 = (state_25075[7]);var inst_25059 = (function (){var c = inst_25056;var v = inst_25055;var vec__25052 = inst_25054;var cs = inst_25047;return ((function (c,v,vec__25052,cs,inst_25055,inst_25056,inst_25054,inst_25047,state_val_25076){
return (function (p1__24992_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24992_SHARP_);
});
;})(c,v,vec__25052,cs,inst_25055,inst_25056,inst_25054,inst_25047,state_val_25076))
})();var inst_25060 = cljs.core.filterv(inst_25059,inst_25047);var inst_25047__$1 = inst_25060;var state_25075__$1 = (function (){var statearr_25086 = state_25075;(statearr_25086[7] = inst_25047__$1);
return statearr_25086;
})();var statearr_25087_25107 = state_25075__$1;(statearr_25087_25107[2] = null);
(statearr_25087_25107[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 9))
{var inst_25055 = (state_25075[8]);var state_25075__$1 = state_25075;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25075__$1,11,out,inst_25055);
} else
{if((state_val_25076 === 10))
{var inst_25067 = (state_25075[2]);var state_25075__$1 = state_25075;var statearr_25089_25108 = state_25075__$1;(statearr_25089_25108[2] = inst_25067);
(statearr_25089_25108[1] = 6);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25076 === 11))
{var inst_25047 = (state_25075[7]);var inst_25064 = (state_25075[2]);var tmp25088 = inst_25047;var inst_25047__$1 = tmp25088;var state_25075__$1 = (function (){var statearr_25090 = state_25075;(statearr_25090[11] = inst_25064);
(statearr_25090[7] = inst_25047__$1);
return statearr_25090;
})();var statearr_25091_25109 = state_25075__$1;(statearr_25091_25109[2] = null);
(statearr_25091_25109[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_25095 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25095[0] = state_machine__5507__auto__);
(statearr_25095[1] = 1);
return statearr_25095;
});
var state_machine__5507__auto____1 = (function (state_25075){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25075);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25096){if((e25096 instanceof Object))
{var ex__5510__auto__ = e25096;var statearr_25097_25110 = state_25075;(statearr_25097_25110[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25075);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e25096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__25111 = state_25075;
state_25075 = G__25111;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25075){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25098 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25099);
return statearr_25098;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25181){var state_val_25182 = (state_25181[1]);if((state_val_25182 === 1))
{var inst_25158 = 0;var state_25181__$1 = (function (){var statearr_25183 = state_25181;(statearr_25183[7] = inst_25158);
return statearr_25183;
})();var statearr_25184_25205 = state_25181__$1;(statearr_25184_25205[2] = null);
(statearr_25184_25205[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 2))
{var inst_25158 = (state_25181[7]);var inst_25160 = (inst_25158 < n);var state_25181__$1 = state_25181;if(cljs.core.truth_(inst_25160))
{var statearr_25185_25206 = state_25181__$1;(statearr_25185_25206[1] = 4);
} else
{var statearr_25186_25207 = state_25181__$1;(statearr_25186_25207[1] = 5);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 3))
{var inst_25178 = (state_25181[2]);var inst_25179 = cljs.core.async.close_BANG_(out);var state_25181__$1 = (function (){var statearr_25187 = state_25181;(statearr_25187[8] = inst_25178);
return statearr_25187;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25181__$1,inst_25179);
} else
{if((state_val_25182 === 4))
{var state_25181__$1 = state_25181;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25181__$1,7,ch);
} else
{if((state_val_25182 === 5))
{var state_25181__$1 = state_25181;var statearr_25188_25208 = state_25181__$1;(statearr_25188_25208[2] = null);
(statearr_25188_25208[1] = 6);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 6))
{var inst_25176 = (state_25181[2]);var state_25181__$1 = state_25181;var statearr_25189_25209 = state_25181__$1;(statearr_25189_25209[2] = inst_25176);
(statearr_25189_25209[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 7))
{var inst_25163 = (state_25181[9]);var inst_25163__$1 = (state_25181[2]);var inst_25164 = (inst_25163__$1 == null);var inst_25165 = cljs.core.not(inst_25164);var state_25181__$1 = (function (){var statearr_25190 = state_25181;(statearr_25190[9] = inst_25163__$1);
return statearr_25190;
})();if(inst_25165)
{var statearr_25191_25210 = state_25181__$1;(statearr_25191_25210[1] = 8);
} else
{var statearr_25192_25211 = state_25181__$1;(statearr_25192_25211[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 8))
{var inst_25163 = (state_25181[9]);var state_25181__$1 = state_25181;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25181__$1,11,out,inst_25163);
} else
{if((state_val_25182 === 9))
{var state_25181__$1 = state_25181;var statearr_25193_25212 = state_25181__$1;(statearr_25193_25212[2] = null);
(statearr_25193_25212[1] = 10);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 10))
{var inst_25173 = (state_25181[2]);var state_25181__$1 = state_25181;var statearr_25194_25213 = state_25181__$1;(statearr_25194_25213[2] = inst_25173);
(statearr_25194_25213[1] = 6);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25182 === 11))
{var inst_25158 = (state_25181[7]);var inst_25168 = (state_25181[2]);var inst_25169 = (inst_25158 + 1);var inst_25158__$1 = inst_25169;var state_25181__$1 = (function (){var statearr_25195 = state_25181;(statearr_25195[10] = inst_25168);
(statearr_25195[7] = inst_25158__$1);
return statearr_25195;
})();var statearr_25196_25214 = state_25181__$1;(statearr_25196_25214[2] = null);
(statearr_25196_25214[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_25200 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25200[0] = state_machine__5507__auto__);
(statearr_25200[1] = 1);
return statearr_25200;
});
var state_machine__5507__auto____1 = (function (state_25181){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25181);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object))
{var ex__5510__auto__ = e25201;var statearr_25202_25215 = state_25181;(statearr_25202_25215[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25181);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e25201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__25216 = state_25181;
state_25181 = G__25216;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25181){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25203 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25204);
return statearr_25203;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25288){var state_val_25289 = (state_25288[1]);if((state_val_25289 === 1))
{var inst_25265 = null;var state_25288__$1 = (function (){var statearr_25290 = state_25288;(statearr_25290[7] = inst_25265);
return statearr_25290;
})();var statearr_25291_25314 = state_25288__$1;(statearr_25291_25314[2] = null);
(statearr_25291_25314[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 2))
{var state_25288__$1 = state_25288;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25288__$1,4,ch);
} else
{if((state_val_25289 === 3))
{var inst_25285 = (state_25288[2]);var inst_25286 = cljs.core.async.close_BANG_(out);var state_25288__$1 = (function (){var statearr_25292 = state_25288;(statearr_25292[8] = inst_25285);
return statearr_25292;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25288__$1,inst_25286);
} else
{if((state_val_25289 === 4))
{var inst_25268 = (state_25288[9]);var inst_25268__$1 = (state_25288[2]);var inst_25269 = (inst_25268__$1 == null);var inst_25270 = cljs.core.not(inst_25269);var state_25288__$1 = (function (){var statearr_25293 = state_25288;(statearr_25293[9] = inst_25268__$1);
return statearr_25293;
})();if(inst_25270)
{var statearr_25294_25315 = state_25288__$1;(statearr_25294_25315[1] = 5);
} else
{var statearr_25295_25316 = state_25288__$1;(statearr_25295_25316[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 5))
{var inst_25268 = (state_25288[9]);var inst_25265 = (state_25288[7]);var inst_25272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25268,inst_25265);var state_25288__$1 = state_25288;if(inst_25272)
{var statearr_25296_25317 = state_25288__$1;(statearr_25296_25317[1] = 8);
} else
{var statearr_25297_25318 = state_25288__$1;(statearr_25297_25318[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 6))
{var state_25288__$1 = state_25288;var statearr_25299_25319 = state_25288__$1;(statearr_25299_25319[2] = null);
(statearr_25299_25319[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 7))
{var inst_25283 = (state_25288[2]);var state_25288__$1 = state_25288;var statearr_25300_25320 = state_25288__$1;(statearr_25300_25320[2] = inst_25283);
(statearr_25300_25320[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 8))
{var inst_25265 = (state_25288[7]);var tmp25298 = inst_25265;var inst_25265__$1 = tmp25298;var state_25288__$1 = (function (){var statearr_25301 = state_25288;(statearr_25301[7] = inst_25265__$1);
return statearr_25301;
})();var statearr_25302_25321 = state_25288__$1;(statearr_25302_25321[2] = null);
(statearr_25302_25321[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 9))
{var inst_25268 = (state_25288[9]);var state_25288__$1 = state_25288;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25288__$1,11,out,inst_25268);
} else
{if((state_val_25289 === 10))
{var inst_25280 = (state_25288[2]);var state_25288__$1 = state_25288;var statearr_25303_25322 = state_25288__$1;(statearr_25303_25322[2] = inst_25280);
(statearr_25303_25322[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25289 === 11))
{var inst_25268 = (state_25288[9]);var inst_25277 = (state_25288[2]);var inst_25265 = inst_25268;var state_25288__$1 = (function (){var statearr_25304 = state_25288;(statearr_25304[7] = inst_25265);
(statearr_25304[10] = inst_25277);
return statearr_25304;
})();var statearr_25305_25323 = state_25288__$1;(statearr_25305_25323[2] = null);
(statearr_25305_25323[1] = 2);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_25309 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25309[0] = state_machine__5507__auto__);
(statearr_25309[1] = 1);
return statearr_25309;
});
var state_machine__5507__auto____1 = (function (state_25288){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25288);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object))
{var ex__5510__auto__ = e25310;var statearr_25311_25324 = state_25288;(statearr_25311_25324[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25288);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e25310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__25325 = state_25288;
state_25288 = G__25325;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25288){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25312 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25313);
return statearr_25312;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25430){var state_val_25431 = (state_25430[1]);if((state_val_25431 === 1))
{var inst_25393 = (new Array(n));var inst_25394 = inst_25393;var inst_25395 = 0;var state_25430__$1 = (function (){var statearr_25432 = state_25430;(statearr_25432[7] = inst_25395);
(statearr_25432[8] = inst_25394);
return statearr_25432;
})();var statearr_25433_25461 = state_25430__$1;(statearr_25433_25461[2] = null);
(statearr_25433_25461[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 2))
{var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25430__$1,4,ch);
} else
{if((state_val_25431 === 3))
{var inst_25428 = (state_25430[2]);var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.return_chan(state_25430__$1,inst_25428);
} else
{if((state_val_25431 === 4))
{var inst_25398 = (state_25430[9]);var inst_25398__$1 = (state_25430[2]);var inst_25399 = (inst_25398__$1 == null);var inst_25400 = cljs.core.not(inst_25399);var state_25430__$1 = (function (){var statearr_25434 = state_25430;(statearr_25434[9] = inst_25398__$1);
return statearr_25434;
})();if(inst_25400)
{var statearr_25435_25462 = state_25430__$1;(statearr_25435_25462[1] = 5);
} else
{var statearr_25436_25463 = state_25430__$1;(statearr_25436_25463[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 5))
{var inst_25398 = (state_25430[9]);var inst_25403 = (state_25430[10]);var inst_25395 = (state_25430[7]);var inst_25394 = (state_25430[8]);var inst_25402 = (inst_25394[inst_25395] = inst_25398);var inst_25403__$1 = (inst_25395 + 1);var inst_25404 = (inst_25403__$1 < n);var state_25430__$1 = (function (){var statearr_25437 = state_25430;(statearr_25437[10] = inst_25403__$1);
(statearr_25437[11] = inst_25402);
return statearr_25437;
})();if(cljs.core.truth_(inst_25404))
{var statearr_25438_25464 = state_25430__$1;(statearr_25438_25464[1] = 8);
} else
{var statearr_25439_25465 = state_25430__$1;(statearr_25439_25465[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 6))
{var inst_25395 = (state_25430[7]);var inst_25416 = (inst_25395 > 0);var state_25430__$1 = state_25430;if(cljs.core.truth_(inst_25416))
{var statearr_25441_25466 = state_25430__$1;(statearr_25441_25466[1] = 12);
} else
{var statearr_25442_25467 = state_25430__$1;(statearr_25442_25467[1] = 13);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 7))
{var inst_25426 = (state_25430[2]);var state_25430__$1 = state_25430;var statearr_25443_25468 = state_25430__$1;(statearr_25443_25468[2] = inst_25426);
(statearr_25443_25468[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 8))
{var inst_25403 = (state_25430[10]);var inst_25394 = (state_25430[8]);var tmp25440 = inst_25394;var inst_25394__$1 = tmp25440;var inst_25395 = inst_25403;var state_25430__$1 = (function (){var statearr_25444 = state_25430;(statearr_25444[7] = inst_25395);
(statearr_25444[8] = inst_25394__$1);
return statearr_25444;
})();var statearr_25445_25469 = state_25430__$1;(statearr_25445_25469[2] = null);
(statearr_25445_25469[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 9))
{var inst_25394 = (state_25430[8]);var inst_25408 = cljs.core.vec(inst_25394);var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25430__$1,11,out,inst_25408);
} else
{if((state_val_25431 === 10))
{var inst_25414 = (state_25430[2]);var state_25430__$1 = state_25430;var statearr_25446_25470 = state_25430__$1;(statearr_25446_25470[2] = inst_25414);
(statearr_25446_25470[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 11))
{var inst_25410 = (state_25430[2]);var inst_25411 = (new Array(n));var inst_25394 = inst_25411;var inst_25395 = 0;var state_25430__$1 = (function (){var statearr_25447 = state_25430;(statearr_25447[12] = inst_25410);
(statearr_25447[7] = inst_25395);
(statearr_25447[8] = inst_25394);
return statearr_25447;
})();var statearr_25448_25471 = state_25430__$1;(statearr_25448_25471[2] = null);
(statearr_25448_25471[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 12))
{var inst_25394 = (state_25430[8]);var inst_25418 = cljs.core.vec(inst_25394);var state_25430__$1 = state_25430;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25430__$1,15,out,inst_25418);
} else
{if((state_val_25431 === 13))
{var state_25430__$1 = state_25430;var statearr_25449_25472 = state_25430__$1;(statearr_25449_25472[2] = null);
(statearr_25449_25472[1] = 14);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 14))
{var inst_25423 = (state_25430[2]);var inst_25424 = cljs.core.async.close_BANG_(out);var state_25430__$1 = (function (){var statearr_25450 = state_25430;(statearr_25450[13] = inst_25423);
return statearr_25450;
})();var statearr_25451_25473 = state_25430__$1;(statearr_25451_25473[2] = inst_25424);
(statearr_25451_25473[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25431 === 15))
{var inst_25420 = (state_25430[2]);var state_25430__$1 = state_25430;var statearr_25452_25474 = state_25430__$1;(statearr_25452_25474[2] = inst_25420);
(statearr_25452_25474[1] = 14);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_25456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25456[0] = state_machine__5507__auto__);
(statearr_25456[1] = 1);
return statearr_25456;
});
var state_machine__5507__auto____1 = (function (state_25430){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25430);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25457){if((e25457 instanceof Object))
{var ex__5510__auto__ = e25457;var statearr_25458_25475 = state_25430;(statearr_25458_25475[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25430);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e25457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__25476 = state_25430;
state_25430 = G__25476;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25459 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25460);
return statearr_25459;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25589){var state_val_25590 = (state_25589[1]);if((state_val_25590 === 1))
{var inst_25548 = [];var inst_25549 = inst_25548;var inst_25550 = cljs.core.constant$keyword$214;var state_25589__$1 = (function (){var statearr_25591 = state_25589;(statearr_25591[7] = inst_25550);
(statearr_25591[8] = inst_25549);
return statearr_25591;
})();var statearr_25592_25620 = state_25589__$1;(statearr_25592_25620[2] = null);
(statearr_25592_25620[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 2))
{var state_25589__$1 = state_25589;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25589__$1,4,ch);
} else
{if((state_val_25590 === 3))
{var inst_25587 = (state_25589[2]);var state_25589__$1 = state_25589;return cljs.core.async.impl.ioc_helpers.return_chan(state_25589__$1,inst_25587);
} else
{if((state_val_25590 === 4))
{var inst_25553 = (state_25589[9]);var inst_25553__$1 = (state_25589[2]);var inst_25554 = (inst_25553__$1 == null);var inst_25555 = cljs.core.not(inst_25554);var state_25589__$1 = (function (){var statearr_25593 = state_25589;(statearr_25593[9] = inst_25553__$1);
return statearr_25593;
})();if(inst_25555)
{var statearr_25594_25621 = state_25589__$1;(statearr_25594_25621[1] = 5);
} else
{var statearr_25595_25622 = state_25589__$1;(statearr_25595_25622[1] = 6);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 5))
{var inst_25553 = (state_25589[9]);var inst_25550 = (state_25589[7]);var inst_25557 = (state_25589[10]);var inst_25557__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25553) : f.call(null,inst_25553));var inst_25558 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25557__$1,inst_25550);var inst_25559 = cljs.core.keyword_identical_QMARK_(inst_25550,cljs.core.constant$keyword$214);var inst_25560 = (inst_25558) || (inst_25559);var state_25589__$1 = (function (){var statearr_25596 = state_25589;(statearr_25596[10] = inst_25557__$1);
return statearr_25596;
})();if(cljs.core.truth_(inst_25560))
{var statearr_25597_25623 = state_25589__$1;(statearr_25597_25623[1] = 8);
} else
{var statearr_25598_25624 = state_25589__$1;(statearr_25598_25624[1] = 9);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 6))
{var inst_25549 = (state_25589[8]);var inst_25574 = inst_25549.length;var inst_25575 = (inst_25574 > 0);var state_25589__$1 = state_25589;if(cljs.core.truth_(inst_25575))
{var statearr_25600_25625 = state_25589__$1;(statearr_25600_25625[1] = 12);
} else
{var statearr_25601_25626 = state_25589__$1;(statearr_25601_25626[1] = 13);
}
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 7))
{var inst_25585 = (state_25589[2]);var state_25589__$1 = state_25589;var statearr_25602_25627 = state_25589__$1;(statearr_25602_25627[2] = inst_25585);
(statearr_25602_25627[1] = 3);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 8))
{var inst_25553 = (state_25589[9]);var inst_25557 = (state_25589[10]);var inst_25549 = (state_25589[8]);var inst_25562 = inst_25549.push(inst_25553);var tmp25599 = inst_25549;var inst_25549__$1 = tmp25599;var inst_25550 = inst_25557;var state_25589__$1 = (function (){var statearr_25603 = state_25589;(statearr_25603[7] = inst_25550);
(statearr_25603[11] = inst_25562);
(statearr_25603[8] = inst_25549__$1);
return statearr_25603;
})();var statearr_25604_25628 = state_25589__$1;(statearr_25604_25628[2] = null);
(statearr_25604_25628[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 9))
{var inst_25549 = (state_25589[8]);var inst_25565 = cljs.core.vec(inst_25549);var state_25589__$1 = state_25589;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25589__$1,11,out,inst_25565);
} else
{if((state_val_25590 === 10))
{var inst_25572 = (state_25589[2]);var state_25589__$1 = state_25589;var statearr_25605_25629 = state_25589__$1;(statearr_25605_25629[2] = inst_25572);
(statearr_25605_25629[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 11))
{var inst_25553 = (state_25589[9]);var inst_25557 = (state_25589[10]);var inst_25567 = (state_25589[2]);var inst_25568 = [];var inst_25569 = inst_25568.push(inst_25553);var inst_25549 = inst_25568;var inst_25550 = inst_25557;var state_25589__$1 = (function (){var statearr_25606 = state_25589;(statearr_25606[12] = inst_25569);
(statearr_25606[7] = inst_25550);
(statearr_25606[13] = inst_25567);
(statearr_25606[8] = inst_25549);
return statearr_25606;
})();var statearr_25607_25630 = state_25589__$1;(statearr_25607_25630[2] = null);
(statearr_25607_25630[1] = 2);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 12))
{var inst_25549 = (state_25589[8]);var inst_25577 = cljs.core.vec(inst_25549);var state_25589__$1 = state_25589;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25589__$1,15,out,inst_25577);
} else
{if((state_val_25590 === 13))
{var state_25589__$1 = state_25589;var statearr_25608_25631 = state_25589__$1;(statearr_25608_25631[2] = null);
(statearr_25608_25631[1] = 14);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 14))
{var inst_25582 = (state_25589[2]);var inst_25583 = cljs.core.async.close_BANG_(out);var state_25589__$1 = (function (){var statearr_25609 = state_25589;(statearr_25609[14] = inst_25582);
return statearr_25609;
})();var statearr_25610_25632 = state_25589__$1;(statearr_25610_25632[2] = inst_25583);
(statearr_25610_25632[1] = 7);
return cljs.core.constant$keyword$201;
} else
{if((state_val_25590 === 15))
{var inst_25579 = (state_25589[2]);var state_25589__$1 = state_25589;var statearr_25611_25633 = state_25589__$1;(statearr_25611_25633[2] = inst_25579);
(statearr_25611_25633[1] = 14);
return cljs.core.constant$keyword$201;
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
var state_machine__5507__auto____0 = (function (){var statearr_25615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25615[0] = state_machine__5507__auto__);
(statearr_25615[1] = 1);
return statearr_25615;
});
var state_machine__5507__auto____1 = (function (state_25589){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25589);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$201))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25616){if((e25616 instanceof Object))
{var ex__5510__auto__ = e25616;var statearr_25617_25634 = state_25589;(statearr_25617_25634[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25589);
return cljs.core.constant$keyword$201;
} else
{if(cljs.core.constant$keyword$190)
{throw e25616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$201))
{{
var G__25635 = state_25589;
state_25589 = G__25635;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25589){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25618 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25619);
return statearr_25618;
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
