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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13536 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13536 = (function (f,fn_handler,meta13537){
this.f = f;
this.fn_handler = fn_handler;
this.meta13537 = meta13537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13536.cljs$lang$type = true;
cljs.core.async.t13536.cljs$lang$ctorStr = "cljs.core.async/t13536";
cljs.core.async.t13536.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13536");
});
cljs.core.async.t13536.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13538){var self__ = this;
var _13538__$1 = this;return self__.meta13537;
});
cljs.core.async.t13536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13538,meta13537__$1){var self__ = this;
var _13538__$1 = this;return (new cljs.core.async.t13536(self__.f,self__.fn_handler,meta13537__$1));
});
cljs.core.async.__GT_t13536 = (function __GT_t13536(f__$1,fn_handler__$1,meta13537){return (new cljs.core.async.t13536(f__$1,fn_handler__$1,meta13537));
});
}
return (new cljs.core.async.t13536(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13540 = buff;if(G__13540)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13540.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13540.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__13540);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__13540);
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
{var val_13541 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13541) : fn1.call(null,val_13541));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13541) : fn1.call(null,val_13541));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13542 = n;var x_13543 = 0;while(true){
if((x_13543 < n__4248__auto___13542))
{(a[x_13543] = 0);
{
var G__13544 = (x_13543 + 1);
x_13543 = G__13544;
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
var G__13545 = (i + 1);
i = G__13545;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t13549 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13549 = (function (flag,alt_flag,meta13550){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13550 = meta13550;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13549.cljs$lang$type = true;
cljs.core.async.t13549.cljs$lang$ctorStr = "cljs.core.async/t13549";
cljs.core.async.t13549.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13549");
});
cljs.core.async.t13549.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t13549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t13549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13551){var self__ = this;
var _13551__$1 = this;return self__.meta13550;
});
cljs.core.async.t13549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13551,meta13550__$1){var self__ = this;
var _13551__$1 = this;return (new cljs.core.async.t13549(self__.flag,self__.alt_flag,meta13550__$1));
});
cljs.core.async.__GT_t13549 = (function __GT_t13549(flag__$1,alt_flag__$1,meta13550){return (new cljs.core.async.t13549(flag__$1,alt_flag__$1,meta13550));
});
}
return (new cljs.core.async.t13549(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13555 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13555 = (function (cb,flag,alt_handler,meta13556){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13556 = meta13556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13555.cljs$lang$type = true;
cljs.core.async.t13555.cljs$lang$ctorStr = "cljs.core.async/t13555";
cljs.core.async.t13555.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13555");
});
cljs.core.async.t13555.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t13555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t13555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13557){var self__ = this;
var _13557__$1 = this;return self__.meta13556;
});
cljs.core.async.t13555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13557,meta13556__$1){var self__ = this;
var _13557__$1 = this;return (new cljs.core.async.t13555(self__.cb,self__.flag,self__.alt_handler,meta13556__$1));
});
cljs.core.async.__GT_t13555 = (function __GT_t13555(cb__$1,flag__$1,alt_handler__$1,meta13556){return (new cljs.core.async.t13555(cb__$1,flag__$1,alt_handler__$1,meta13556));
});
}
return (new cljs.core.async.t13555(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13558_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13558_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13558_SHARP_,port], null)));
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
var G__13559 = (i + 1);
i = G__13559;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
var alts_BANG___delegate = function (ports,p__13560){var map__13562 = p__13560;var map__13562__$1 = ((cljs.core.seq_QMARK_(map__13562))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13562):map__13562);var opts = map__13562__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13560 = null;if (arguments.length > 1) {
  p__13560 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13560);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13563){
var ports = cljs.core.first(arglist__13563);
var p__13560 = cljs.core.rest(arglist__13563);
return alts_BANG___delegate(ports,p__13560);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13571 = (function (ch,f,map_LT_,meta13572){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13572 = meta13572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13571.cljs$lang$type = true;
cljs.core.async.t13571.cljs$lang$ctorStr = "cljs.core.async/t13571";
cljs.core.async.t13571.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13571");
});
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t13574 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13574 = (function (fn1,_,meta13572,ch,f,map_LT_,meta13575){
this.fn1 = fn1;
this._ = _;
this.meta13572 = meta13572;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13575 = meta13575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13574.cljs$lang$type = true;
cljs.core.async.t13574.cljs$lang$ctorStr = "cljs.core.async/t13574";
cljs.core.async.t13574.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13574");
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t13574.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__13564_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__13564_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13564_SHARP_) : self__.f.call(null,p1__13564_SHARP_)))) : f1.call(null,(((p1__13564_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13564_SHARP_) : self__.f.call(null,p1__13564_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t13574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13576){var self__ = this;
var _13576__$1 = this;return self__.meta13575;
});
cljs.core.async.t13574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13576,meta13575__$1){var self__ = this;
var _13576__$1 = this;return (new cljs.core.async.t13574(self__.fn1,self__._,self__.meta13572,self__.ch,self__.f,self__.map_LT_,meta13575__$1));
});
cljs.core.async.__GT_t13574 = (function __GT_t13574(fn1__$1,___$2,meta13572__$1,ch__$2,f__$2,map_LT___$2,meta13575){return (new cljs.core.async.t13574(fn1__$1,___$2,meta13572__$1,ch__$2,f__$2,map_LT___$2,meta13575));
});
}
return (new cljs.core.async.t13574(fn1,___$1,self__.meta13572,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t13571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13573){var self__ = this;
var _13573__$1 = this;return self__.meta13572;
});
cljs.core.async.t13571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13573,meta13572__$1){var self__ = this;
var _13573__$1 = this;return (new cljs.core.async.t13571(self__.ch,self__.f,self__.map_LT_,meta13572__$1));
});
cljs.core.async.__GT_t13571 = (function __GT_t13571(ch__$1,f__$1,map_LT___$1,meta13572){return (new cljs.core.async.t13571(ch__$1,f__$1,map_LT___$1,meta13572));
});
}
return (new cljs.core.async.t13571(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13580 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13580 = (function (ch,f,map_GT_,meta13581){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13581 = meta13581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13580.cljs$lang$type = true;
cljs.core.async.t13580.cljs$lang$ctorStr = "cljs.core.async/t13580";
cljs.core.async.t13580.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13580");
});
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t13580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13582){var self__ = this;
var _13582__$1 = this;return self__.meta13581;
});
cljs.core.async.t13580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13582,meta13581__$1){var self__ = this;
var _13582__$1 = this;return (new cljs.core.async.t13580(self__.ch,self__.f,self__.map_GT_,meta13581__$1));
});
cljs.core.async.__GT_t13580 = (function __GT_t13580(ch__$1,f__$1,map_GT___$1,meta13581){return (new cljs.core.async.t13580(ch__$1,f__$1,map_GT___$1,meta13581));
});
}
return (new cljs.core.async.t13580(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13586 = (function (ch,p,filter_GT_,meta13587){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13587 = meta13587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13586.cljs$lang$type = true;
cljs.core.async.t13586.cljs$lang$ctorStr = "cljs.core.async/t13586";
cljs.core.async.t13586.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t13586");
});
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t13586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13588){var self__ = this;
var _13588__$1 = this;return self__.meta13587;
});
cljs.core.async.t13586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13588,meta13587__$1){var self__ = this;
var _13588__$1 = this;return (new cljs.core.async.t13586(self__.ch,self__.p,self__.filter_GT_,meta13587__$1));
});
cljs.core.async.__GT_t13586 = (function __GT_t13586(ch__$1,p__$1,filter_GT___$1,meta13587){return (new cljs.core.async.t13586(ch__$1,p__$1,filter_GT___$1,meta13587));
});
}
return (new cljs.core.async.t13586(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___13671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13650){var state_val_13651 = (state_13650[1]);if((state_val_13651 === 1))
{var state_13650__$1 = state_13650;var statearr_13652_13672 = state_13650__$1;(statearr_13652_13672[2] = null);
(statearr_13652_13672[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 2))
{var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13650__$1,4,ch);
} else
{if((state_val_13651 === 3))
{var inst_13648 = (state_13650[2]);var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.return_chan(state_13650__$1,inst_13648);
} else
{if((state_val_13651 === 4))
{var inst_13632 = (state_13650[7]);var inst_13632__$1 = (state_13650[2]);var inst_13633 = (inst_13632__$1 == null);var state_13650__$1 = (function (){var statearr_13653 = state_13650;(statearr_13653[7] = inst_13632__$1);
return statearr_13653;
})();if(cljs.core.truth_(inst_13633))
{var statearr_13654_13673 = state_13650__$1;(statearr_13654_13673[1] = 5);
} else
{var statearr_13655_13674 = state_13650__$1;(statearr_13655_13674[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 5))
{var inst_13635 = cljs.core.async.close_BANG_(out);var state_13650__$1 = state_13650;var statearr_13656_13675 = state_13650__$1;(statearr_13656_13675[2] = inst_13635);
(statearr_13656_13675[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 6))
{var inst_13632 = (state_13650[7]);var inst_13637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13632) : p.call(null,inst_13632));var state_13650__$1 = state_13650;if(cljs.core.truth_(inst_13637))
{var statearr_13657_13676 = state_13650__$1;(statearr_13657_13676[1] = 8);
} else
{var statearr_13658_13677 = state_13650__$1;(statearr_13658_13677[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 7))
{var inst_13646 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13659_13678 = state_13650__$1;(statearr_13659_13678[2] = inst_13646);
(statearr_13659_13678[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 8))
{var inst_13632 = (state_13650[7]);var state_13650__$1 = state_13650;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13650__$1,11,out,inst_13632);
} else
{if((state_val_13651 === 9))
{var state_13650__$1 = state_13650;var statearr_13660_13679 = state_13650__$1;(statearr_13660_13679[2] = null);
(statearr_13660_13679[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 10))
{var inst_13643 = (state_13650[2]);var state_13650__$1 = (function (){var statearr_13661 = state_13650;(statearr_13661[8] = inst_13643);
return statearr_13661;
})();var statearr_13662_13680 = state_13650__$1;(statearr_13662_13680[2] = null);
(statearr_13662_13680[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13651 === 11))
{var inst_13640 = (state_13650[2]);var state_13650__$1 = state_13650;var statearr_13663_13681 = state_13650__$1;(statearr_13663_13681[2] = inst_13640);
(statearr_13663_13681[1] = 10);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_13667 = [null,null,null,null,null,null,null,null,null];(statearr_13667[0] = state_machine__5507__auto__);
(statearr_13667[1] = 1);
return statearr_13667;
});
var state_machine__5507__auto____1 = (function (state_13650){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_13650);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13668){if((e13668 instanceof Object))
{var ex__5510__auto__ = e13668;var statearr_13669_13682 = state_13650;(statearr_13669_13682[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13650);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__13683 = state_13650;
state_13650 = G__13683;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13650){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13670 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_13670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13671);
return statearr_13670;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13835){var state_val_13836 = (state_13835[1]);if((state_val_13836 === 1))
{var state_13835__$1 = state_13835;var statearr_13837_13874 = state_13835__$1;(statearr_13837_13874[2] = null);
(statearr_13837_13874[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 2))
{var state_13835__$1 = state_13835;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13835__$1,4,in$);
} else
{if((state_val_13836 === 3))
{var inst_13833 = (state_13835[2]);var state_13835__$1 = state_13835;return cljs.core.async.impl.ioc_helpers.return_chan(state_13835__$1,inst_13833);
} else
{if((state_val_13836 === 4))
{var inst_13781 = (state_13835[7]);var inst_13781__$1 = (state_13835[2]);var inst_13782 = (inst_13781__$1 == null);var state_13835__$1 = (function (){var statearr_13838 = state_13835;(statearr_13838[7] = inst_13781__$1);
return statearr_13838;
})();if(cljs.core.truth_(inst_13782))
{var statearr_13839_13875 = state_13835__$1;(statearr_13839_13875[1] = 5);
} else
{var statearr_13840_13876 = state_13835__$1;(statearr_13840_13876[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 5))
{var inst_13784 = cljs.core.async.close_BANG_(out);var state_13835__$1 = state_13835;var statearr_13841_13877 = state_13835__$1;(statearr_13841_13877[2] = inst_13784);
(statearr_13841_13877[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 6))
{var inst_13781 = (state_13835[7]);var inst_13786 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13781) : f.call(null,inst_13781));var inst_13791 = cljs.core.seq(inst_13786);var inst_13792 = inst_13791;var inst_13793 = null;var inst_13794 = 0;var inst_13795 = 0;var state_13835__$1 = (function (){var statearr_13842 = state_13835;(statearr_13842[8] = inst_13793);
(statearr_13842[9] = inst_13794);
(statearr_13842[10] = inst_13792);
(statearr_13842[11] = inst_13795);
return statearr_13842;
})();var statearr_13843_13878 = state_13835__$1;(statearr_13843_13878[2] = null);
(statearr_13843_13878[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 7))
{var inst_13831 = (state_13835[2]);var state_13835__$1 = state_13835;var statearr_13844_13879 = state_13835__$1;(statearr_13844_13879[2] = inst_13831);
(statearr_13844_13879[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 8))
{var inst_13794 = (state_13835[9]);var inst_13795 = (state_13835[11]);var inst_13797 = (inst_13795 < inst_13794);var inst_13798 = inst_13797;var state_13835__$1 = state_13835;if(cljs.core.truth_(inst_13798))
{var statearr_13845_13880 = state_13835__$1;(statearr_13845_13880[1] = 10);
} else
{var statearr_13846_13881 = state_13835__$1;(statearr_13846_13881[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 9))
{var inst_13828 = (state_13835[2]);var state_13835__$1 = (function (){var statearr_13847 = state_13835;(statearr_13847[12] = inst_13828);
return statearr_13847;
})();var statearr_13848_13882 = state_13835__$1;(statearr_13848_13882[2] = null);
(statearr_13848_13882[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 10))
{var inst_13793 = (state_13835[8]);var inst_13795 = (state_13835[11]);var inst_13800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13793,inst_13795);var state_13835__$1 = state_13835;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13835__$1,13,out,inst_13800);
} else
{if((state_val_13836 === 11))
{var inst_13806 = (state_13835[13]);var inst_13792 = (state_13835[10]);var inst_13806__$1 = cljs.core.seq(inst_13792);var state_13835__$1 = (function (){var statearr_13852 = state_13835;(statearr_13852[13] = inst_13806__$1);
return statearr_13852;
})();if(inst_13806__$1)
{var statearr_13853_13883 = state_13835__$1;(statearr_13853_13883[1] = 14);
} else
{var statearr_13854_13884 = state_13835__$1;(statearr_13854_13884[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 12))
{var inst_13826 = (state_13835[2]);var state_13835__$1 = state_13835;var statearr_13855_13885 = state_13835__$1;(statearr_13855_13885[2] = inst_13826);
(statearr_13855_13885[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 13))
{var inst_13793 = (state_13835[8]);var inst_13794 = (state_13835[9]);var inst_13792 = (state_13835[10]);var inst_13795 = (state_13835[11]);var inst_13802 = (state_13835[2]);var inst_13803 = (inst_13795 + 1);var tmp13849 = inst_13793;var tmp13850 = inst_13794;var tmp13851 = inst_13792;var inst_13792__$1 = tmp13851;var inst_13793__$1 = tmp13849;var inst_13794__$1 = tmp13850;var inst_13795__$1 = inst_13803;var state_13835__$1 = (function (){var statearr_13856 = state_13835;(statearr_13856[8] = inst_13793__$1);
(statearr_13856[9] = inst_13794__$1);
(statearr_13856[10] = inst_13792__$1);
(statearr_13856[11] = inst_13795__$1);
(statearr_13856[14] = inst_13802);
return statearr_13856;
})();var statearr_13857_13886 = state_13835__$1;(statearr_13857_13886[2] = null);
(statearr_13857_13886[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 14))
{var inst_13806 = (state_13835[13]);var inst_13808 = cljs.core.chunked_seq_QMARK_(inst_13806);var state_13835__$1 = state_13835;if(inst_13808)
{var statearr_13858_13887 = state_13835__$1;(statearr_13858_13887[1] = 17);
} else
{var statearr_13859_13888 = state_13835__$1;(statearr_13859_13888[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 15))
{var state_13835__$1 = state_13835;var statearr_13860_13889 = state_13835__$1;(statearr_13860_13889[2] = null);
(statearr_13860_13889[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 16))
{var inst_13824 = (state_13835[2]);var state_13835__$1 = state_13835;var statearr_13861_13890 = state_13835__$1;(statearr_13861_13890[2] = inst_13824);
(statearr_13861_13890[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 17))
{var inst_13806 = (state_13835[13]);var inst_13810 = cljs.core.chunk_first(inst_13806);var inst_13811 = cljs.core.chunk_rest(inst_13806);var inst_13812 = cljs.core.count(inst_13810);var inst_13792 = inst_13811;var inst_13793 = inst_13810;var inst_13794 = inst_13812;var inst_13795 = 0;var state_13835__$1 = (function (){var statearr_13862 = state_13835;(statearr_13862[8] = inst_13793);
(statearr_13862[9] = inst_13794);
(statearr_13862[10] = inst_13792);
(statearr_13862[11] = inst_13795);
return statearr_13862;
})();var statearr_13863_13891 = state_13835__$1;(statearr_13863_13891[2] = null);
(statearr_13863_13891[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 18))
{var inst_13806 = (state_13835[13]);var inst_13815 = cljs.core.first(inst_13806);var state_13835__$1 = state_13835;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13835__$1,20,out,inst_13815);
} else
{if((state_val_13836 === 19))
{var inst_13821 = (state_13835[2]);var state_13835__$1 = state_13835;var statearr_13864_13892 = state_13835__$1;(statearr_13864_13892[2] = inst_13821);
(statearr_13864_13892[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13836 === 20))
{var inst_13806 = (state_13835[13]);var inst_13817 = (state_13835[2]);var inst_13818 = cljs.core.next(inst_13806);var inst_13792 = inst_13818;var inst_13793 = null;var inst_13794 = 0;var inst_13795 = 0;var state_13835__$1 = (function (){var statearr_13865 = state_13835;(statearr_13865[8] = inst_13793);
(statearr_13865[9] = inst_13794);
(statearr_13865[10] = inst_13792);
(statearr_13865[15] = inst_13817);
(statearr_13865[11] = inst_13795);
return statearr_13865;
})();var statearr_13866_13893 = state_13835__$1;(statearr_13866_13893[2] = null);
(statearr_13866_13893[1] = 8);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_13870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13870[0] = state_machine__5507__auto__);
(statearr_13870[1] = 1);
return statearr_13870;
});
var state_machine__5507__auto____1 = (function (state_13835){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_13835);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13871){if((e13871 instanceof Object))
{var ex__5510__auto__ = e13871;var statearr_13872_13894 = state_13835;(statearr_13872_13894[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13835);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13871;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__13895 = state_13835;
state_13835 = G__13895;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13835){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13873 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_13873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13873;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13955){var state_val_13956 = (state_13955[1]);if((state_val_13956 === 1))
{var state_13955__$1 = state_13955;var statearr_13957_13977 = state_13955__$1;(statearr_13957_13977[2] = null);
(statearr_13957_13977[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 2))
{var state_13955__$1 = state_13955;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13955__$1,4,from);
} else
{if((state_val_13956 === 3))
{var inst_13953 = (state_13955[2]);var state_13955__$1 = state_13955;return cljs.core.async.impl.ioc_helpers.return_chan(state_13955__$1,inst_13953);
} else
{if((state_val_13956 === 4))
{var inst_13938 = (state_13955[7]);var inst_13938__$1 = (state_13955[2]);var inst_13939 = (inst_13938__$1 == null);var state_13955__$1 = (function (){var statearr_13958 = state_13955;(statearr_13958[7] = inst_13938__$1);
return statearr_13958;
})();if(cljs.core.truth_(inst_13939))
{var statearr_13959_13978 = state_13955__$1;(statearr_13959_13978[1] = 5);
} else
{var statearr_13960_13979 = state_13955__$1;(statearr_13960_13979[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 5))
{var state_13955__$1 = state_13955;if(cljs.core.truth_(close_QMARK_))
{var statearr_13961_13980 = state_13955__$1;(statearr_13961_13980[1] = 8);
} else
{var statearr_13962_13981 = state_13955__$1;(statearr_13962_13981[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 6))
{var inst_13938 = (state_13955[7]);var state_13955__$1 = state_13955;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13955__$1,11,to,inst_13938);
} else
{if((state_val_13956 === 7))
{var inst_13951 = (state_13955[2]);var state_13955__$1 = state_13955;var statearr_13963_13982 = state_13955__$1;(statearr_13963_13982[2] = inst_13951);
(statearr_13963_13982[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 8))
{var inst_13942 = cljs.core.async.close_BANG_(to);var state_13955__$1 = state_13955;var statearr_13964_13983 = state_13955__$1;(statearr_13964_13983[2] = inst_13942);
(statearr_13964_13983[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 9))
{var state_13955__$1 = state_13955;var statearr_13965_13984 = state_13955__$1;(statearr_13965_13984[2] = null);
(statearr_13965_13984[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 10))
{var inst_13945 = (state_13955[2]);var state_13955__$1 = state_13955;var statearr_13966_13985 = state_13955__$1;(statearr_13966_13985[2] = inst_13945);
(statearr_13966_13985[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_13956 === 11))
{var inst_13948 = (state_13955[2]);var state_13955__$1 = (function (){var statearr_13967 = state_13955;(statearr_13967[8] = inst_13948);
return statearr_13967;
})();var statearr_13968_13986 = state_13955__$1;(statearr_13968_13986[2] = null);
(statearr_13968_13986[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_13972 = [null,null,null,null,null,null,null,null,null];(statearr_13972[0] = state_machine__5507__auto__);
(statearr_13972[1] = 1);
return statearr_13972;
});
var state_machine__5507__auto____1 = (function (state_13955){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_13955);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13973){if((e13973 instanceof Object))
{var ex__5510__auto__ = e13973;var statearr_13974_13987 = state_13955;(statearr_13974_13987[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13955);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e13973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__13988 = state_13955;
state_13955 = G__13988;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13955){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13975 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_13975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13976);
return statearr_13975;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___14075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14053){var state_val_14054 = (state_14053[1]);if((state_val_14054 === 1))
{var state_14053__$1 = state_14053;var statearr_14055_14076 = state_14053__$1;(statearr_14055_14076[2] = null);
(statearr_14055_14076[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 2))
{var state_14053__$1 = state_14053;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14053__$1,4,ch);
} else
{if((state_val_14054 === 3))
{var inst_14051 = (state_14053[2]);var state_14053__$1 = state_14053;return cljs.core.async.impl.ioc_helpers.return_chan(state_14053__$1,inst_14051);
} else
{if((state_val_14054 === 4))
{var inst_14034 = (state_14053[7]);var inst_14034__$1 = (state_14053[2]);var inst_14035 = (inst_14034__$1 == null);var state_14053__$1 = (function (){var statearr_14056 = state_14053;(statearr_14056[7] = inst_14034__$1);
return statearr_14056;
})();if(cljs.core.truth_(inst_14035))
{var statearr_14057_14077 = state_14053__$1;(statearr_14057_14077[1] = 5);
} else
{var statearr_14058_14078 = state_14053__$1;(statearr_14058_14078[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 5))
{var inst_14037 = cljs.core.async.close_BANG_(tc);var inst_14038 = cljs.core.async.close_BANG_(fc);var state_14053__$1 = (function (){var statearr_14059 = state_14053;(statearr_14059[8] = inst_14037);
return statearr_14059;
})();var statearr_14060_14079 = state_14053__$1;(statearr_14060_14079[2] = inst_14038);
(statearr_14060_14079[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 6))
{var inst_14034 = (state_14053[7]);var inst_14040 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14034) : p.call(null,inst_14034));var state_14053__$1 = state_14053;if(cljs.core.truth_(inst_14040))
{var statearr_14061_14080 = state_14053__$1;(statearr_14061_14080[1] = 9);
} else
{var statearr_14062_14081 = state_14053__$1;(statearr_14062_14081[1] = 10);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 7))
{var inst_14049 = (state_14053[2]);var state_14053__$1 = state_14053;var statearr_14063_14082 = state_14053__$1;(statearr_14063_14082[2] = inst_14049);
(statearr_14063_14082[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 8))
{var inst_14046 = (state_14053[2]);var state_14053__$1 = (function (){var statearr_14064 = state_14053;(statearr_14064[9] = inst_14046);
return statearr_14064;
})();var statearr_14065_14083 = state_14053__$1;(statearr_14065_14083[2] = null);
(statearr_14065_14083[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 9))
{var state_14053__$1 = state_14053;var statearr_14066_14084 = state_14053__$1;(statearr_14066_14084[2] = tc);
(statearr_14066_14084[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 10))
{var state_14053__$1 = state_14053;var statearr_14067_14085 = state_14053__$1;(statearr_14067_14085[2] = fc);
(statearr_14067_14085[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14054 === 11))
{var inst_14034 = (state_14053[7]);var inst_14044 = (state_14053[2]);var state_14053__$1 = state_14053;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14053__$1,8,inst_14044,inst_14034);
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
var state_machine__5507__auto____0 = (function (){var statearr_14071 = [null,null,null,null,null,null,null,null,null,null];(statearr_14071[0] = state_machine__5507__auto__);
(statearr_14071[1] = 1);
return statearr_14071;
});
var state_machine__5507__auto____1 = (function (state_14053){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_14053);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14072){if((e14072 instanceof Object))
{var ex__5510__auto__ = e14072;var statearr_14073_14086 = state_14053;(statearr_14073_14086[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14053);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__14087 = state_14053;
state_14053 = G__14087;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14053){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14074 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_14074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14075);
return statearr_14074;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14134){var state_val_14135 = (state_14134[1]);if((state_val_14135 === 7))
{var inst_14130 = (state_14134[2]);var state_14134__$1 = state_14134;var statearr_14136_14152 = state_14134__$1;(statearr_14136_14152[2] = inst_14130);
(statearr_14136_14152[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14135 === 6))
{var inst_14123 = (state_14134[7]);var inst_14120 = (state_14134[8]);var inst_14127 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14120,inst_14123) : f.call(null,inst_14120,inst_14123));var inst_14120__$1 = inst_14127;var state_14134__$1 = (function (){var statearr_14137 = state_14134;(statearr_14137[8] = inst_14120__$1);
return statearr_14137;
})();var statearr_14138_14153 = state_14134__$1;(statearr_14138_14153[2] = null);
(statearr_14138_14153[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14135 === 5))
{var inst_14120 = (state_14134[8]);var state_14134__$1 = state_14134;var statearr_14139_14154 = state_14134__$1;(statearr_14139_14154[2] = inst_14120);
(statearr_14139_14154[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14135 === 4))
{var inst_14123 = (state_14134[7]);var inst_14123__$1 = (state_14134[2]);var inst_14124 = (inst_14123__$1 == null);var state_14134__$1 = (function (){var statearr_14140 = state_14134;(statearr_14140[7] = inst_14123__$1);
return statearr_14140;
})();if(cljs.core.truth_(inst_14124))
{var statearr_14141_14155 = state_14134__$1;(statearr_14141_14155[1] = 5);
} else
{var statearr_14142_14156 = state_14134__$1;(statearr_14142_14156[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14135 === 3))
{var inst_14132 = (state_14134[2]);var state_14134__$1 = state_14134;return cljs.core.async.impl.ioc_helpers.return_chan(state_14134__$1,inst_14132);
} else
{if((state_val_14135 === 2))
{var state_14134__$1 = state_14134;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14134__$1,4,ch);
} else
{if((state_val_14135 === 1))
{var inst_14120 = init;var state_14134__$1 = (function (){var statearr_14143 = state_14134;(statearr_14143[8] = inst_14120);
return statearr_14143;
})();var statearr_14144_14157 = state_14134__$1;(statearr_14144_14157[2] = null);
(statearr_14144_14157[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_14148 = [null,null,null,null,null,null,null,null,null];(statearr_14148[0] = state_machine__5507__auto__);
(statearr_14148[1] = 1);
return statearr_14148;
});
var state_machine__5507__auto____1 = (function (state_14134){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_14134);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14149){if((e14149 instanceof Object))
{var ex__5510__auto__ = e14149;var statearr_14150_14158 = state_14134;(statearr_14150_14158[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14134);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__14159 = state_14134;
state_14134 = G__14159;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14134){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14151 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_14151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14151;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14221){var state_val_14222 = (state_14221[1]);if((state_val_14222 === 1))
{var inst_14201 = cljs.core.seq(coll);var inst_14202 = inst_14201;var state_14221__$1 = (function (){var statearr_14223 = state_14221;(statearr_14223[7] = inst_14202);
return statearr_14223;
})();var statearr_14224_14242 = state_14221__$1;(statearr_14224_14242[2] = null);
(statearr_14224_14242[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 2))
{var inst_14202 = (state_14221[7]);var state_14221__$1 = state_14221;if(cljs.core.truth_(inst_14202))
{var statearr_14225_14243 = state_14221__$1;(statearr_14225_14243[1] = 4);
} else
{var statearr_14226_14244 = state_14221__$1;(statearr_14226_14244[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 3))
{var inst_14219 = (state_14221[2]);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.return_chan(state_14221__$1,inst_14219);
} else
{if((state_val_14222 === 4))
{var inst_14202 = (state_14221[7]);var inst_14205 = cljs.core.first(inst_14202);var state_14221__$1 = state_14221;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14221__$1,7,ch,inst_14205);
} else
{if((state_val_14222 === 5))
{var state_14221__$1 = state_14221;if(cljs.core.truth_(close_QMARK_))
{var statearr_14227_14245 = state_14221__$1;(statearr_14227_14245[1] = 8);
} else
{var statearr_14228_14246 = state_14221__$1;(statearr_14228_14246[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 6))
{var inst_14217 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14229_14247 = state_14221__$1;(statearr_14229_14247[2] = inst_14217);
(statearr_14229_14247[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 7))
{var inst_14202 = (state_14221[7]);var inst_14207 = (state_14221[2]);var inst_14208 = cljs.core.next(inst_14202);var inst_14202__$1 = inst_14208;var state_14221__$1 = (function (){var statearr_14230 = state_14221;(statearr_14230[8] = inst_14207);
(statearr_14230[7] = inst_14202__$1);
return statearr_14230;
})();var statearr_14231_14248 = state_14221__$1;(statearr_14231_14248[2] = null);
(statearr_14231_14248[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 8))
{var inst_14212 = cljs.core.async.close_BANG_(ch);var state_14221__$1 = state_14221;var statearr_14232_14249 = state_14221__$1;(statearr_14232_14249[2] = inst_14212);
(statearr_14232_14249[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 9))
{var state_14221__$1 = state_14221;var statearr_14233_14250 = state_14221__$1;(statearr_14233_14250[2] = null);
(statearr_14233_14250[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14222 === 10))
{var inst_14215 = (state_14221[2]);var state_14221__$1 = state_14221;var statearr_14234_14251 = state_14221__$1;(statearr_14234_14251[2] = inst_14215);
(statearr_14234_14251[1] = 6);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_14238 = [null,null,null,null,null,null,null,null,null];(statearr_14238[0] = state_machine__5507__auto__);
(statearr_14238[1] = 1);
return statearr_14238;
});
var state_machine__5507__auto____1 = (function (state_14221){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_14221);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14239){if((e14239 instanceof Object))
{var ex__5510__auto__ = e14239;var statearr_14240_14252 = state_14221;(statearr_14240_14252[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14221);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__14253 = state_14221;
state_14221 = G__14253;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14221){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14241 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_14241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14241;
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
cljs.core.async.Mux = (function (){var obj14255 = {};return obj14255;
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
cljs.core.async.Mult = (function (){var obj14257 = {};return obj14257;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14481 = (function (cs,ch,mult,meta14482){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14482 = meta14482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14481.cljs$lang$type = true;
cljs.core.async.t14481.cljs$lang$ctorStr = "cljs.core.async/t14481";
cljs.core.async.t14481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t14481");
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14483){var self__ = this;
var _14483__$1 = this;return self__.meta14482;
});})(cs))
;
cljs.core.async.t14481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14483,meta14482__$1){var self__ = this;
var _14483__$1 = this;return (new cljs.core.async.t14481(self__.cs,self__.ch,self__.mult,meta14482__$1));
});})(cs))
;
cljs.core.async.__GT_t14481 = ((function (cs){
return (function __GT_t14481(cs__$1,ch__$1,mult__$1,meta14482){return (new cljs.core.async.t14481(cs__$1,ch__$1,mult__$1,meta14482));
});})(cs))
;
}
return (new cljs.core.async.t14481(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14618){var state_val_14619 = (state_14618[1]);if((state_val_14619 === 32))
{var inst_14486 = (state_14618[7]);var inst_14562 = (state_14618[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14618,31,Object,null,30);var inst_14569 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14562,inst_14486,done);var state_14618__$1 = state_14618;var statearr_14620_14705 = state_14618__$1;(statearr_14620_14705[2] = inst_14569);
cljs.core.async.impl.ioc_helpers.process_exception(state_14618__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 1))
{var state_14618__$1 = state_14618;var statearr_14621_14706 = state_14618__$1;(statearr_14621_14706[2] = null);
(statearr_14621_14706[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 33))
{var inst_14575 = (state_14618[9]);var inst_14577 = cljs.core.chunked_seq_QMARK_(inst_14575);var state_14618__$1 = state_14618;if(inst_14577)
{var statearr_14622_14707 = state_14618__$1;(statearr_14622_14707[1] = 36);
} else
{var statearr_14623_14708 = state_14618__$1;(statearr_14623_14708[1] = 37);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 2))
{var state_14618__$1 = state_14618;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14618__$1,4,ch);
} else
{if((state_val_14619 === 34))
{var state_14618__$1 = state_14618;var statearr_14624_14709 = state_14618__$1;(statearr_14624_14709[2] = null);
(statearr_14624_14709[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 3))
{var inst_14616 = (state_14618[2]);var state_14618__$1 = state_14618;return cljs.core.async.impl.ioc_helpers.return_chan(state_14618__$1,inst_14616);
} else
{if((state_val_14619 === 35))
{var inst_14600 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14625_14710 = state_14618__$1;(statearr_14625_14710[2] = inst_14600);
(statearr_14625_14710[1] = 29);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 4))
{var inst_14486 = (state_14618[7]);var inst_14486__$1 = (state_14618[2]);var inst_14487 = (inst_14486__$1 == null);var state_14618__$1 = (function (){var statearr_14626 = state_14618;(statearr_14626[7] = inst_14486__$1);
return statearr_14626;
})();if(cljs.core.truth_(inst_14487))
{var statearr_14627_14711 = state_14618__$1;(statearr_14627_14711[1] = 5);
} else
{var statearr_14628_14712 = state_14618__$1;(statearr_14628_14712[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 36))
{var inst_14575 = (state_14618[9]);var inst_14579 = cljs.core.chunk_first(inst_14575);var inst_14580 = cljs.core.chunk_rest(inst_14575);var inst_14581 = cljs.core.count(inst_14579);var inst_14554 = inst_14580;var inst_14555 = inst_14579;var inst_14556 = inst_14581;var inst_14557 = 0;var state_14618__$1 = (function (){var statearr_14629 = state_14618;(statearr_14629[10] = inst_14557);
(statearr_14629[11] = inst_14556);
(statearr_14629[12] = inst_14555);
(statearr_14629[13] = inst_14554);
return statearr_14629;
})();var statearr_14630_14713 = state_14618__$1;(statearr_14630_14713[2] = null);
(statearr_14630_14713[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 5))
{var inst_14493 = cljs.core.deref(cs);var inst_14494 = cljs.core.seq(inst_14493);var inst_14495 = inst_14494;var inst_14496 = null;var inst_14497 = 0;var inst_14498 = 0;var state_14618__$1 = (function (){var statearr_14631 = state_14618;(statearr_14631[14] = inst_14497);
(statearr_14631[15] = inst_14498);
(statearr_14631[16] = inst_14495);
(statearr_14631[17] = inst_14496);
return statearr_14631;
})();var statearr_14632_14714 = state_14618__$1;(statearr_14632_14714[2] = null);
(statearr_14632_14714[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 37))
{var inst_14575 = (state_14618[9]);var inst_14584 = cljs.core.first(inst_14575);var state_14618__$1 = (function (){var statearr_14633 = state_14618;(statearr_14633[18] = inst_14584);
return statearr_14633;
})();var statearr_14634_14715 = state_14618__$1;(statearr_14634_14715[2] = null);
(statearr_14634_14715[1] = 41);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 6))
{var inst_14546 = (state_14618[19]);var inst_14545 = cljs.core.deref(cs);var inst_14546__$1 = cljs.core.keys(inst_14545);var inst_14547 = cljs.core.count(inst_14546__$1);var inst_14548 = cljs.core.reset_BANG_(dctr,inst_14547);var inst_14553 = cljs.core.seq(inst_14546__$1);var inst_14554 = inst_14553;var inst_14555 = null;var inst_14556 = 0;var inst_14557 = 0;var state_14618__$1 = (function (){var statearr_14635 = state_14618;(statearr_14635[10] = inst_14557);
(statearr_14635[20] = inst_14548);
(statearr_14635[11] = inst_14556);
(statearr_14635[12] = inst_14555);
(statearr_14635[13] = inst_14554);
(statearr_14635[19] = inst_14546__$1);
return statearr_14635;
})();var statearr_14636_14716 = state_14618__$1;(statearr_14636_14716[2] = null);
(statearr_14636_14716[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 38))
{var inst_14597 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14637_14717 = state_14618__$1;(statearr_14637_14717[2] = inst_14597);
(statearr_14637_14717[1] = 35);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 7))
{var inst_14614 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14638_14718 = state_14618__$1;(statearr_14638_14718[2] = inst_14614);
(statearr_14638_14718[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 39))
{var inst_14575 = (state_14618[9]);var inst_14593 = (state_14618[2]);var inst_14594 = cljs.core.next(inst_14575);var inst_14554 = inst_14594;var inst_14555 = null;var inst_14556 = 0;var inst_14557 = 0;var state_14618__$1 = (function (){var statearr_14639 = state_14618;(statearr_14639[10] = inst_14557);
(statearr_14639[11] = inst_14556);
(statearr_14639[12] = inst_14555);
(statearr_14639[13] = inst_14554);
(statearr_14639[21] = inst_14593);
return statearr_14639;
})();var statearr_14640_14719 = state_14618__$1;(statearr_14640_14719[2] = null);
(statearr_14640_14719[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 8))
{var inst_14497 = (state_14618[14]);var inst_14498 = (state_14618[15]);var inst_14500 = (inst_14498 < inst_14497);var inst_14501 = inst_14500;var state_14618__$1 = state_14618;if(cljs.core.truth_(inst_14501))
{var statearr_14641_14720 = state_14618__$1;(statearr_14641_14720[1] = 10);
} else
{var statearr_14642_14721 = state_14618__$1;(statearr_14642_14721[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 40))
{var inst_14584 = (state_14618[18]);var inst_14585 = (state_14618[2]);var inst_14586 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_14587 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14584);var state_14618__$1 = (function (){var statearr_14643 = state_14618;(statearr_14643[22] = inst_14585);
(statearr_14643[23] = inst_14586);
return statearr_14643;
})();var statearr_14644_14722 = state_14618__$1;(statearr_14644_14722[2] = inst_14587);
cljs.core.async.impl.ioc_helpers.process_exception(state_14618__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 9))
{var inst_14543 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14645_14723 = state_14618__$1;(statearr_14645_14723[2] = inst_14543);
(statearr_14645_14723[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 41))
{var inst_14486 = (state_14618[7]);var inst_14584 = (state_14618[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14618,40,Object,null,39);var inst_14591 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14584,inst_14486,done);var state_14618__$1 = state_14618;var statearr_14646_14724 = state_14618__$1;(statearr_14646_14724[2] = inst_14591);
cljs.core.async.impl.ioc_helpers.process_exception(state_14618__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 10))
{var inst_14498 = (state_14618[15]);var inst_14496 = (state_14618[17]);var inst_14504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14496,inst_14498);var inst_14505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14504,0,null);var inst_14506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14504,1,null);var state_14618__$1 = (function (){var statearr_14647 = state_14618;(statearr_14647[24] = inst_14505);
return statearr_14647;
})();if(cljs.core.truth_(inst_14506))
{var statearr_14648_14725 = state_14618__$1;(statearr_14648_14725[1] = 13);
} else
{var statearr_14649_14726 = state_14618__$1;(statearr_14649_14726[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 42))
{var state_14618__$1 = state_14618;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14618__$1,45,dchan);
} else
{if((state_val_14619 === 11))
{var inst_14495 = (state_14618[16]);var inst_14515 = (state_14618[25]);var inst_14515__$1 = cljs.core.seq(inst_14495);var state_14618__$1 = (function (){var statearr_14650 = state_14618;(statearr_14650[25] = inst_14515__$1);
return statearr_14650;
})();if(inst_14515__$1)
{var statearr_14651_14727 = state_14618__$1;(statearr_14651_14727[1] = 16);
} else
{var statearr_14652_14728 = state_14618__$1;(statearr_14652_14728[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 43))
{var state_14618__$1 = state_14618;var statearr_14653_14729 = state_14618__$1;(statearr_14653_14729[2] = null);
(statearr_14653_14729[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 12))
{var inst_14541 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14654_14730 = state_14618__$1;(statearr_14654_14730[2] = inst_14541);
(statearr_14654_14730[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 44))
{var inst_14611 = (state_14618[2]);var state_14618__$1 = (function (){var statearr_14655 = state_14618;(statearr_14655[26] = inst_14611);
return statearr_14655;
})();var statearr_14656_14731 = state_14618__$1;(statearr_14656_14731[2] = null);
(statearr_14656_14731[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 13))
{var inst_14505 = (state_14618[24]);var inst_14508 = cljs.core.async.close_BANG_(inst_14505);var state_14618__$1 = state_14618;var statearr_14657_14732 = state_14618__$1;(statearr_14657_14732[2] = inst_14508);
(statearr_14657_14732[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 45))
{var inst_14608 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14661_14733 = state_14618__$1;(statearr_14661_14733[2] = inst_14608);
(statearr_14661_14733[1] = 44);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 14))
{var state_14618__$1 = state_14618;var statearr_14662_14734 = state_14618__$1;(statearr_14662_14734[2] = null);
(statearr_14662_14734[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 15))
{var inst_14497 = (state_14618[14]);var inst_14498 = (state_14618[15]);var inst_14495 = (state_14618[16]);var inst_14496 = (state_14618[17]);var inst_14511 = (state_14618[2]);var inst_14512 = (inst_14498 + 1);var tmp14658 = inst_14497;var tmp14659 = inst_14495;var tmp14660 = inst_14496;var inst_14495__$1 = tmp14659;var inst_14496__$1 = tmp14660;var inst_14497__$1 = tmp14658;var inst_14498__$1 = inst_14512;var state_14618__$1 = (function (){var statearr_14663 = state_14618;(statearr_14663[14] = inst_14497__$1);
(statearr_14663[15] = inst_14498__$1);
(statearr_14663[16] = inst_14495__$1);
(statearr_14663[17] = inst_14496__$1);
(statearr_14663[27] = inst_14511);
return statearr_14663;
})();var statearr_14664_14735 = state_14618__$1;(statearr_14664_14735[2] = null);
(statearr_14664_14735[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 16))
{var inst_14515 = (state_14618[25]);var inst_14517 = cljs.core.chunked_seq_QMARK_(inst_14515);var state_14618__$1 = state_14618;if(inst_14517)
{var statearr_14665_14736 = state_14618__$1;(statearr_14665_14736[1] = 19);
} else
{var statearr_14666_14737 = state_14618__$1;(statearr_14666_14737[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 17))
{var state_14618__$1 = state_14618;var statearr_14667_14738 = state_14618__$1;(statearr_14667_14738[2] = null);
(statearr_14667_14738[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 18))
{var inst_14539 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14668_14739 = state_14618__$1;(statearr_14668_14739[2] = inst_14539);
(statearr_14668_14739[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 19))
{var inst_14515 = (state_14618[25]);var inst_14519 = cljs.core.chunk_first(inst_14515);var inst_14520 = cljs.core.chunk_rest(inst_14515);var inst_14521 = cljs.core.count(inst_14519);var inst_14495 = inst_14520;var inst_14496 = inst_14519;var inst_14497 = inst_14521;var inst_14498 = 0;var state_14618__$1 = (function (){var statearr_14669 = state_14618;(statearr_14669[14] = inst_14497);
(statearr_14669[15] = inst_14498);
(statearr_14669[16] = inst_14495);
(statearr_14669[17] = inst_14496);
return statearr_14669;
})();var statearr_14670_14740 = state_14618__$1;(statearr_14670_14740[2] = null);
(statearr_14670_14740[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 20))
{var inst_14515 = (state_14618[25]);var inst_14525 = cljs.core.first(inst_14515);var inst_14526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14525,0,null);var inst_14527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14525,1,null);var state_14618__$1 = (function (){var statearr_14671 = state_14618;(statearr_14671[28] = inst_14526);
return statearr_14671;
})();if(cljs.core.truth_(inst_14527))
{var statearr_14672_14741 = state_14618__$1;(statearr_14672_14741[1] = 22);
} else
{var statearr_14673_14742 = state_14618__$1;(statearr_14673_14742[1] = 23);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 21))
{var inst_14536 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14674_14743 = state_14618__$1;(statearr_14674_14743[2] = inst_14536);
(statearr_14674_14743[1] = 18);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 22))
{var inst_14526 = (state_14618[28]);var inst_14529 = cljs.core.async.close_BANG_(inst_14526);var state_14618__$1 = state_14618;var statearr_14675_14744 = state_14618__$1;(statearr_14675_14744[2] = inst_14529);
(statearr_14675_14744[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 23))
{var state_14618__$1 = state_14618;var statearr_14676_14745 = state_14618__$1;(statearr_14676_14745[2] = null);
(statearr_14676_14745[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 24))
{var inst_14515 = (state_14618[25]);var inst_14532 = (state_14618[2]);var inst_14533 = cljs.core.next(inst_14515);var inst_14495 = inst_14533;var inst_14496 = null;var inst_14497 = 0;var inst_14498 = 0;var state_14618__$1 = (function (){var statearr_14677 = state_14618;(statearr_14677[29] = inst_14532);
(statearr_14677[14] = inst_14497);
(statearr_14677[15] = inst_14498);
(statearr_14677[16] = inst_14495);
(statearr_14677[17] = inst_14496);
return statearr_14677;
})();var statearr_14678_14746 = state_14618__$1;(statearr_14678_14746[2] = null);
(statearr_14678_14746[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 25))
{var inst_14557 = (state_14618[10]);var inst_14556 = (state_14618[11]);var inst_14559 = (inst_14557 < inst_14556);var inst_14560 = inst_14559;var state_14618__$1 = state_14618;if(cljs.core.truth_(inst_14560))
{var statearr_14679_14747 = state_14618__$1;(statearr_14679_14747[1] = 27);
} else
{var statearr_14680_14748 = state_14618__$1;(statearr_14680_14748[1] = 28);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 26))
{var inst_14546 = (state_14618[19]);var inst_14604 = (state_14618[2]);var inst_14605 = cljs.core.seq(inst_14546);var state_14618__$1 = (function (){var statearr_14681 = state_14618;(statearr_14681[30] = inst_14604);
return statearr_14681;
})();if(inst_14605)
{var statearr_14682_14749 = state_14618__$1;(statearr_14682_14749[1] = 42);
} else
{var statearr_14683_14750 = state_14618__$1;(statearr_14683_14750[1] = 43);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 27))
{var inst_14557 = (state_14618[10]);var inst_14555 = (state_14618[12]);var inst_14562 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14555,inst_14557);var state_14618__$1 = (function (){var statearr_14684 = state_14618;(statearr_14684[8] = inst_14562);
return statearr_14684;
})();var statearr_14685_14751 = state_14618__$1;(statearr_14685_14751[2] = null);
(statearr_14685_14751[1] = 32);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 28))
{var inst_14575 = (state_14618[9]);var inst_14554 = (state_14618[13]);var inst_14575__$1 = cljs.core.seq(inst_14554);var state_14618__$1 = (function (){var statearr_14689 = state_14618;(statearr_14689[9] = inst_14575__$1);
return statearr_14689;
})();if(inst_14575__$1)
{var statearr_14690_14752 = state_14618__$1;(statearr_14690_14752[1] = 33);
} else
{var statearr_14691_14753 = state_14618__$1;(statearr_14691_14753[1] = 34);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 29))
{var inst_14602 = (state_14618[2]);var state_14618__$1 = state_14618;var statearr_14692_14754 = state_14618__$1;(statearr_14692_14754[2] = inst_14602);
(statearr_14692_14754[1] = 26);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 30))
{var inst_14557 = (state_14618[10]);var inst_14556 = (state_14618[11]);var inst_14555 = (state_14618[12]);var inst_14554 = (state_14618[13]);var inst_14571 = (state_14618[2]);var inst_14572 = (inst_14557 + 1);var tmp14686 = inst_14556;var tmp14687 = inst_14555;var tmp14688 = inst_14554;var inst_14554__$1 = tmp14688;var inst_14555__$1 = tmp14687;var inst_14556__$1 = tmp14686;var inst_14557__$1 = inst_14572;var state_14618__$1 = (function (){var statearr_14693 = state_14618;(statearr_14693[31] = inst_14571);
(statearr_14693[10] = inst_14557__$1);
(statearr_14693[11] = inst_14556__$1);
(statearr_14693[12] = inst_14555__$1);
(statearr_14693[13] = inst_14554__$1);
return statearr_14693;
})();var statearr_14694_14755 = state_14618__$1;(statearr_14694_14755[2] = null);
(statearr_14694_14755[1] = 25);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14619 === 31))
{var inst_14562 = (state_14618[8]);var inst_14563 = (state_14618[2]);var inst_14564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_14565 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14562);var state_14618__$1 = (function (){var statearr_14695 = state_14618;(statearr_14695[32] = inst_14563);
(statearr_14695[33] = inst_14564);
return statearr_14695;
})();var statearr_14696_14756 = state_14618__$1;(statearr_14696_14756[2] = inst_14565);
cljs.core.async.impl.ioc_helpers.process_exception(state_14618__$1);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_14700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14700[0] = state_machine__5507__auto__);
(statearr_14700[1] = 1);
return statearr_14700;
});
var state_machine__5507__auto____1 = (function (state_14618){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_14618);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14701){if((e14701 instanceof Object))
{var ex__5510__auto__ = e14701;var statearr_14702_14757 = state_14618;(statearr_14702_14757[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14618);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__14758 = state_14618;
state_14618 = G__14758;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14618){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14703 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_14703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14704);
return statearr_14703;
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
cljs.core.async.Mix = (function (){var obj14760 = {};return obj14760;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$26);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$25);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$26,chs);var pauses = pick(cljs.core.constant$keyword$24,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,solos,cljs.core.constant$keyword$28,pick(cljs.core.constant$keyword$25,chs),cljs.core.constant$keyword$29,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$24)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14870 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14871){
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
this.meta14871 = meta14871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14870.cljs$lang$type = true;
cljs.core.async.t14870.cljs$lang$ctorStr = "cljs.core.async/t14870";
cljs.core.async.t14870.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t14870");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14872){var self__ = this;
var _14872__$1 = this;return self__.meta14871;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14872,meta14871__$1){var self__ = this;
var _14872__$1 = this;return (new cljs.core.async.t14870(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14871__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14870 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14870(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14871){return (new cljs.core.async.t14870(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14871));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14870(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14937){var state_val_14938 = (state_14937[1]);if((state_val_14938 === 1))
{var inst_14876 = (state_14937[7]);var inst_14876__$1 = calc_state();var inst_14877 = cljs.core.seq_QMARK_(inst_14876__$1);var state_14937__$1 = (function (){var statearr_14939 = state_14937;(statearr_14939[7] = inst_14876__$1);
return statearr_14939;
})();if(inst_14877)
{var statearr_14940_14980 = state_14937__$1;(statearr_14940_14980[1] = 2);
} else
{var statearr_14941_14981 = state_14937__$1;(statearr_14941_14981[1] = 3);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 2))
{var inst_14876 = (state_14937[7]);var inst_14879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14876);var state_14937__$1 = state_14937;var statearr_14942_14982 = state_14937__$1;(statearr_14942_14982[2] = inst_14879);
(statearr_14942_14982[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 3))
{var inst_14876 = (state_14937[7]);var state_14937__$1 = state_14937;var statearr_14943_14983 = state_14937__$1;(statearr_14943_14983[2] = inst_14876);
(statearr_14943_14983[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 4))
{var inst_14876 = (state_14937[7]);var inst_14882 = (state_14937[2]);var inst_14883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14882,cljs.core.constant$keyword$29);var inst_14884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14882,cljs.core.constant$keyword$28);var inst_14885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14882,cljs.core.constant$keyword$27);var inst_14886 = inst_14876;var state_14937__$1 = (function (){var statearr_14944 = state_14937;(statearr_14944[8] = inst_14883);
(statearr_14944[9] = inst_14886);
(statearr_14944[10] = inst_14885);
(statearr_14944[11] = inst_14884);
return statearr_14944;
})();var statearr_14945_14984 = state_14937__$1;(statearr_14945_14984[2] = null);
(statearr_14945_14984[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 5))
{var inst_14886 = (state_14937[9]);var inst_14889 = cljs.core.seq_QMARK_(inst_14886);var state_14937__$1 = state_14937;if(inst_14889)
{var statearr_14946_14985 = state_14937__$1;(statearr_14946_14985[1] = 7);
} else
{var statearr_14947_14986 = state_14937__$1;(statearr_14947_14986[1] = 8);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 6))
{var inst_14935 = (state_14937[2]);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.return_chan(state_14937__$1,inst_14935);
} else
{if((state_val_14938 === 7))
{var inst_14886 = (state_14937[9]);var inst_14891 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14886);var state_14937__$1 = state_14937;var statearr_14948_14987 = state_14937__$1;(statearr_14948_14987[2] = inst_14891);
(statearr_14948_14987[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 8))
{var inst_14886 = (state_14937[9]);var state_14937__$1 = state_14937;var statearr_14949_14988 = state_14937__$1;(statearr_14949_14988[2] = inst_14886);
(statearr_14949_14988[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 9))
{var inst_14894 = (state_14937[12]);var inst_14894__$1 = (state_14937[2]);var inst_14895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14894__$1,cljs.core.constant$keyword$29);var inst_14896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14894__$1,cljs.core.constant$keyword$28);var inst_14897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14894__$1,cljs.core.constant$keyword$27);var state_14937__$1 = (function (){var statearr_14950 = state_14937;(statearr_14950[13] = inst_14897);
(statearr_14950[14] = inst_14896);
(statearr_14950[12] = inst_14894__$1);
return statearr_14950;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_14937__$1,10,inst_14895);
} else
{if((state_val_14938 === 10))
{var inst_14901 = (state_14937[15]);var inst_14902 = (state_14937[16]);var inst_14900 = (state_14937[2]);var inst_14901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14900,0,null);var inst_14902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14900,1,null);var inst_14903 = (inst_14901__$1 == null);var inst_14904 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14902__$1,change);var inst_14905 = (inst_14903) || (inst_14904);var state_14937__$1 = (function (){var statearr_14951 = state_14937;(statearr_14951[15] = inst_14901__$1);
(statearr_14951[16] = inst_14902__$1);
return statearr_14951;
})();if(cljs.core.truth_(inst_14905))
{var statearr_14952_14989 = state_14937__$1;(statearr_14952_14989[1] = 11);
} else
{var statearr_14953_14990 = state_14937__$1;(statearr_14953_14990[1] = 12);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 11))
{var inst_14901 = (state_14937[15]);var inst_14907 = (inst_14901 == null);var state_14937__$1 = state_14937;if(cljs.core.truth_(inst_14907))
{var statearr_14954_14991 = state_14937__$1;(statearr_14954_14991[1] = 14);
} else
{var statearr_14955_14992 = state_14937__$1;(statearr_14955_14992[1] = 15);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 12))
{var inst_14897 = (state_14937[13]);var inst_14916 = (state_14937[17]);var inst_14902 = (state_14937[16]);var inst_14916__$1 = (inst_14897.cljs$core$IFn$_invoke$arity$1 ? inst_14897.cljs$core$IFn$_invoke$arity$1(inst_14902) : inst_14897.call(null,inst_14902));var state_14937__$1 = (function (){var statearr_14956 = state_14937;(statearr_14956[17] = inst_14916__$1);
return statearr_14956;
})();if(cljs.core.truth_(inst_14916__$1))
{var statearr_14957_14993 = state_14937__$1;(statearr_14957_14993[1] = 17);
} else
{var statearr_14958_14994 = state_14937__$1;(statearr_14958_14994[1] = 18);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 13))
{var inst_14933 = (state_14937[2]);var state_14937__$1 = state_14937;var statearr_14959_14995 = state_14937__$1;(statearr_14959_14995[2] = inst_14933);
(statearr_14959_14995[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 14))
{var inst_14902 = (state_14937[16]);var inst_14909 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14902);var state_14937__$1 = state_14937;var statearr_14960_14996 = state_14937__$1;(statearr_14960_14996[2] = inst_14909);
(statearr_14960_14996[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 15))
{var state_14937__$1 = state_14937;var statearr_14961_14997 = state_14937__$1;(statearr_14961_14997[2] = null);
(statearr_14961_14997[1] = 16);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 16))
{var inst_14912 = (state_14937[2]);var inst_14913 = calc_state();var inst_14886 = inst_14913;var state_14937__$1 = (function (){var statearr_14962 = state_14937;(statearr_14962[9] = inst_14886);
(statearr_14962[18] = inst_14912);
return statearr_14962;
})();var statearr_14963_14998 = state_14937__$1;(statearr_14963_14998[2] = null);
(statearr_14963_14998[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 17))
{var inst_14916 = (state_14937[17]);var state_14937__$1 = state_14937;var statearr_14964_14999 = state_14937__$1;(statearr_14964_14999[2] = inst_14916);
(statearr_14964_14999[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 18))
{var inst_14897 = (state_14937[13]);var inst_14896 = (state_14937[14]);var inst_14902 = (state_14937[16]);var inst_14919 = cljs.core.empty_QMARK_(inst_14897);var inst_14920 = (inst_14896.cljs$core$IFn$_invoke$arity$1 ? inst_14896.cljs$core$IFn$_invoke$arity$1(inst_14902) : inst_14896.call(null,inst_14902));var inst_14921 = cljs.core.not(inst_14920);var inst_14922 = (inst_14919) && (inst_14921);var state_14937__$1 = state_14937;var statearr_14965_15000 = state_14937__$1;(statearr_14965_15000[2] = inst_14922);
(statearr_14965_15000[1] = 19);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 19))
{var inst_14924 = (state_14937[2]);var state_14937__$1 = state_14937;if(cljs.core.truth_(inst_14924))
{var statearr_14966_15001 = state_14937__$1;(statearr_14966_15001[1] = 20);
} else
{var statearr_14967_15002 = state_14937__$1;(statearr_14967_15002[1] = 21);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 20))
{var inst_14901 = (state_14937[15]);var state_14937__$1 = state_14937;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14937__$1,23,out,inst_14901);
} else
{if((state_val_14938 === 21))
{var state_14937__$1 = state_14937;var statearr_14968_15003 = state_14937__$1;(statearr_14968_15003[2] = null);
(statearr_14968_15003[1] = 22);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 22))
{var inst_14894 = (state_14937[12]);var inst_14930 = (state_14937[2]);var inst_14886 = inst_14894;var state_14937__$1 = (function (){var statearr_14969 = state_14937;(statearr_14969[19] = inst_14930);
(statearr_14969[9] = inst_14886);
return statearr_14969;
})();var statearr_14970_15004 = state_14937__$1;(statearr_14970_15004[2] = null);
(statearr_14970_15004[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_14938 === 23))
{var inst_14927 = (state_14937[2]);var state_14937__$1 = state_14937;var statearr_14971_15005 = state_14937__$1;(statearr_14971_15005[2] = inst_14927);
(statearr_14971_15005[1] = 22);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_14975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14975[0] = state_machine__5507__auto__);
(statearr_14975[1] = 1);
return statearr_14975;
});
var state_machine__5507__auto____1 = (function (state_14937){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_14937);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object))
{var ex__5510__auto__ = e14976;var statearr_14977_15006 = state_14937;(statearr_14977_15006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14937);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e14976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15007 = state_14937;
state_14937 = G__15007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14937){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14978 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_14978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14979);
return statearr_14978;
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
cljs.core.async.Pub = (function (){var obj15009 = {};return obj15009;
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
return (function (p1__15010_SHARP_){if(cljs.core.truth_((p1__15010_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15010_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15010_SHARP_.call(null,topic))))
{return p1__15010_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15010_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15135 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15136){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15136 = meta15136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15135.cljs$lang$type = true;
cljs.core.async.t15135.cljs$lang$ctorStr = "cljs.core.async/t15135";
cljs.core.async.t15135.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t15135");
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15135.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15137){var self__ = this;
var _15137__$1 = this;return self__.meta15136;
});})(mults,ensure_mult))
;
cljs.core.async.t15135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15137,meta15136__$1){var self__ = this;
var _15137__$1 = this;return (new cljs.core.async.t15135(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15136__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15135 = ((function (mults,ensure_mult){
return (function __GT_t15135(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15136){return (new cljs.core.async.t15135(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15136));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15135(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15211){var state_val_15212 = (state_15211[1]);if((state_val_15212 === 1))
{var state_15211__$1 = state_15211;var statearr_15213_15260 = state_15211__$1;(statearr_15213_15260[2] = null);
(statearr_15213_15260[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 2))
{var state_15211__$1 = state_15211;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15211__$1,4,ch);
} else
{if((state_val_15212 === 3))
{var inst_15209 = (state_15211[2]);var state_15211__$1 = state_15211;return cljs.core.async.impl.ioc_helpers.return_chan(state_15211__$1,inst_15209);
} else
{if((state_val_15212 === 4))
{var inst_15140 = (state_15211[7]);var inst_15140__$1 = (state_15211[2]);var inst_15141 = (inst_15140__$1 == null);var state_15211__$1 = (function (){var statearr_15214 = state_15211;(statearr_15214[7] = inst_15140__$1);
return statearr_15214;
})();if(cljs.core.truth_(inst_15141))
{var statearr_15215_15261 = state_15211__$1;(statearr_15215_15261[1] = 5);
} else
{var statearr_15216_15262 = state_15211__$1;(statearr_15216_15262[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 5))
{var inst_15147 = cljs.core.deref(mults);var inst_15148 = cljs.core.vals(inst_15147);var inst_15149 = cljs.core.seq(inst_15148);var inst_15150 = inst_15149;var inst_15151 = null;var inst_15152 = 0;var inst_15153 = 0;var state_15211__$1 = (function (){var statearr_15217 = state_15211;(statearr_15217[8] = inst_15150);
(statearr_15217[9] = inst_15152);
(statearr_15217[10] = inst_15151);
(statearr_15217[11] = inst_15153);
return statearr_15217;
})();var statearr_15218_15263 = state_15211__$1;(statearr_15218_15263[2] = null);
(statearr_15218_15263[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 6))
{var inst_15190 = (state_15211[12]);var inst_15188 = (state_15211[13]);var inst_15140 = (state_15211[7]);var inst_15188__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15140) : topic_fn.call(null,inst_15140));var inst_15189 = cljs.core.deref(mults);var inst_15190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15189,inst_15188__$1);var state_15211__$1 = (function (){var statearr_15219 = state_15211;(statearr_15219[12] = inst_15190__$1);
(statearr_15219[13] = inst_15188__$1);
return statearr_15219;
})();if(cljs.core.truth_(inst_15190__$1))
{var statearr_15220_15264 = state_15211__$1;(statearr_15220_15264[1] = 19);
} else
{var statearr_15221_15265 = state_15211__$1;(statearr_15221_15265[1] = 20);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 7))
{var inst_15207 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15222_15266 = state_15211__$1;(statearr_15222_15266[2] = inst_15207);
(statearr_15222_15266[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 8))
{var inst_15152 = (state_15211[9]);var inst_15153 = (state_15211[11]);var inst_15155 = (inst_15153 < inst_15152);var inst_15156 = inst_15155;var state_15211__$1 = state_15211;if(cljs.core.truth_(inst_15156))
{var statearr_15226_15267 = state_15211__$1;(statearr_15226_15267[1] = 10);
} else
{var statearr_15227_15268 = state_15211__$1;(statearr_15227_15268[1] = 11);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 9))
{var inst_15186 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15228_15269 = state_15211__$1;(statearr_15228_15269[2] = inst_15186);
(statearr_15228_15269[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 10))
{var inst_15150 = (state_15211[8]);var inst_15152 = (state_15211[9]);var inst_15151 = (state_15211[10]);var inst_15153 = (state_15211[11]);var inst_15158 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15151,inst_15153);var inst_15159 = cljs.core.async.muxch_STAR_(inst_15158);var inst_15160 = cljs.core.async.close_BANG_(inst_15159);var inst_15161 = (inst_15153 + 1);var tmp15223 = inst_15150;var tmp15224 = inst_15152;var tmp15225 = inst_15151;var inst_15150__$1 = tmp15223;var inst_15151__$1 = tmp15225;var inst_15152__$1 = tmp15224;var inst_15153__$1 = inst_15161;var state_15211__$1 = (function (){var statearr_15229 = state_15211;(statearr_15229[14] = inst_15160);
(statearr_15229[8] = inst_15150__$1);
(statearr_15229[9] = inst_15152__$1);
(statearr_15229[10] = inst_15151__$1);
(statearr_15229[11] = inst_15153__$1);
return statearr_15229;
})();var statearr_15230_15270 = state_15211__$1;(statearr_15230_15270[2] = null);
(statearr_15230_15270[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 11))
{var inst_15150 = (state_15211[8]);var inst_15164 = (state_15211[15]);var inst_15164__$1 = cljs.core.seq(inst_15150);var state_15211__$1 = (function (){var statearr_15231 = state_15211;(statearr_15231[15] = inst_15164__$1);
return statearr_15231;
})();if(inst_15164__$1)
{var statearr_15232_15271 = state_15211__$1;(statearr_15232_15271[1] = 13);
} else
{var statearr_15233_15272 = state_15211__$1;(statearr_15233_15272[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 12))
{var inst_15184 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15234_15273 = state_15211__$1;(statearr_15234_15273[2] = inst_15184);
(statearr_15234_15273[1] = 9);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 13))
{var inst_15164 = (state_15211[15]);var inst_15166 = cljs.core.chunked_seq_QMARK_(inst_15164);var state_15211__$1 = state_15211;if(inst_15166)
{var statearr_15235_15274 = state_15211__$1;(statearr_15235_15274[1] = 16);
} else
{var statearr_15236_15275 = state_15211__$1;(statearr_15236_15275[1] = 17);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 14))
{var state_15211__$1 = state_15211;var statearr_15237_15276 = state_15211__$1;(statearr_15237_15276[2] = null);
(statearr_15237_15276[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 15))
{var inst_15182 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15238_15277 = state_15211__$1;(statearr_15238_15277[2] = inst_15182);
(statearr_15238_15277[1] = 12);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 16))
{var inst_15164 = (state_15211[15]);var inst_15168 = cljs.core.chunk_first(inst_15164);var inst_15169 = cljs.core.chunk_rest(inst_15164);var inst_15170 = cljs.core.count(inst_15168);var inst_15150 = inst_15169;var inst_15151 = inst_15168;var inst_15152 = inst_15170;var inst_15153 = 0;var state_15211__$1 = (function (){var statearr_15239 = state_15211;(statearr_15239[8] = inst_15150);
(statearr_15239[9] = inst_15152);
(statearr_15239[10] = inst_15151);
(statearr_15239[11] = inst_15153);
return statearr_15239;
})();var statearr_15240_15278 = state_15211__$1;(statearr_15240_15278[2] = null);
(statearr_15240_15278[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 17))
{var inst_15164 = (state_15211[15]);var inst_15173 = cljs.core.first(inst_15164);var inst_15174 = cljs.core.async.muxch_STAR_(inst_15173);var inst_15175 = cljs.core.async.close_BANG_(inst_15174);var inst_15176 = cljs.core.next(inst_15164);var inst_15150 = inst_15176;var inst_15151 = null;var inst_15152 = 0;var inst_15153 = 0;var state_15211__$1 = (function (){var statearr_15241 = state_15211;(statearr_15241[16] = inst_15175);
(statearr_15241[8] = inst_15150);
(statearr_15241[9] = inst_15152);
(statearr_15241[10] = inst_15151);
(statearr_15241[11] = inst_15153);
return statearr_15241;
})();var statearr_15242_15279 = state_15211__$1;(statearr_15242_15279[2] = null);
(statearr_15242_15279[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 18))
{var inst_15179 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15243_15280 = state_15211__$1;(statearr_15243_15280[2] = inst_15179);
(statearr_15243_15280[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 19))
{var state_15211__$1 = state_15211;var statearr_15244_15281 = state_15211__$1;(statearr_15244_15281[2] = null);
(statearr_15244_15281[1] = 24);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 20))
{var state_15211__$1 = state_15211;var statearr_15245_15282 = state_15211__$1;(statearr_15245_15282[2] = null);
(statearr_15245_15282[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 21))
{var inst_15204 = (state_15211[2]);var state_15211__$1 = (function (){var statearr_15246 = state_15211;(statearr_15246[17] = inst_15204);
return statearr_15246;
})();var statearr_15247_15283 = state_15211__$1;(statearr_15247_15283[2] = null);
(statearr_15247_15283[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 22))
{var inst_15201 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15248_15284 = state_15211__$1;(statearr_15248_15284[2] = inst_15201);
(statearr_15248_15284[1] = 21);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 23))
{var inst_15188 = (state_15211[13]);var inst_15192 = (state_15211[2]);var inst_15193 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15188);var state_15211__$1 = (function (){var statearr_15249 = state_15211;(statearr_15249[18] = inst_15192);
return statearr_15249;
})();var statearr_15250_15285 = state_15211__$1;(statearr_15250_15285[2] = inst_15193);
cljs.core.async.impl.ioc_helpers.process_exception(state_15211__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15212 === 24))
{var inst_15190 = (state_15211[12]);var inst_15140 = (state_15211[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15211,23,Object,null,22);var inst_15197 = cljs.core.async.muxch_STAR_(inst_15190);var state_15211__$1 = state_15211;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15211__$1,25,inst_15197,inst_15140);
} else
{if((state_val_15212 === 25))
{var inst_15199 = (state_15211[2]);var state_15211__$1 = state_15211;var statearr_15251_15286 = state_15211__$1;(statearr_15251_15286[2] = inst_15199);
cljs.core.async.impl.ioc_helpers.process_exception(state_15211__$1);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15255[0] = state_machine__5507__auto__);
(statearr_15255[1] = 1);
return statearr_15255;
});
var state_machine__5507__auto____1 = (function (state_15211){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15211);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15256){if((e15256 instanceof Object))
{var ex__5510__auto__ = e15256;var statearr_15257_15287 = state_15211;(statearr_15257_15287[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15211);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15288 = state_15211;
state_15211 = G__15288;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15211){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15258 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15259);
return statearr_15258;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___15425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15395){var state_val_15396 = (state_15395[1]);if((state_val_15396 === 1))
{var state_15395__$1 = state_15395;var statearr_15397_15426 = state_15395__$1;(statearr_15397_15426[2] = null);
(statearr_15397_15426[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 2))
{var inst_15358 = cljs.core.reset_BANG_(dctr,cnt);var inst_15359 = 0;var state_15395__$1 = (function (){var statearr_15398 = state_15395;(statearr_15398[7] = inst_15359);
(statearr_15398[8] = inst_15358);
return statearr_15398;
})();var statearr_15399_15427 = state_15395__$1;(statearr_15399_15427[2] = null);
(statearr_15399_15427[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 3))
{var inst_15393 = (state_15395[2]);var state_15395__$1 = state_15395;return cljs.core.async.impl.ioc_helpers.return_chan(state_15395__$1,inst_15393);
} else
{if((state_val_15396 === 4))
{var inst_15359 = (state_15395[7]);var inst_15361 = (inst_15359 < cnt);var state_15395__$1 = state_15395;if(cljs.core.truth_(inst_15361))
{var statearr_15400_15428 = state_15395__$1;(statearr_15400_15428[1] = 6);
} else
{var statearr_15401_15429 = state_15395__$1;(statearr_15401_15429[1] = 7);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 5))
{var inst_15379 = (state_15395[2]);var state_15395__$1 = (function (){var statearr_15402 = state_15395;(statearr_15402[9] = inst_15379);
return statearr_15402;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15395__$1,12,dchan);
} else
{if((state_val_15396 === 6))
{var state_15395__$1 = state_15395;var statearr_15403_15430 = state_15395__$1;(statearr_15403_15430[2] = null);
(statearr_15403_15430[1] = 11);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 7))
{var state_15395__$1 = state_15395;var statearr_15404_15431 = state_15395__$1;(statearr_15404_15431[2] = null);
(statearr_15404_15431[1] = 8);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 8))
{var inst_15377 = (state_15395[2]);var state_15395__$1 = state_15395;var statearr_15405_15432 = state_15395__$1;(statearr_15405_15432[2] = inst_15377);
(statearr_15405_15432[1] = 5);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 9))
{var inst_15359 = (state_15395[7]);var inst_15372 = (state_15395[2]);var inst_15373 = (inst_15359 + 1);var inst_15359__$1 = inst_15373;var state_15395__$1 = (function (){var statearr_15406 = state_15395;(statearr_15406[10] = inst_15372);
(statearr_15406[7] = inst_15359__$1);
return statearr_15406;
})();var statearr_15407_15433 = state_15395__$1;(statearr_15407_15433[2] = null);
(statearr_15407_15433[1] = 4);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 10))
{var inst_15363 = (state_15395[2]);var inst_15364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_15395__$1 = (function (){var statearr_15408 = state_15395;(statearr_15408[11] = inst_15363);
return statearr_15408;
})();var statearr_15409_15434 = state_15395__$1;(statearr_15409_15434[2] = inst_15364);
cljs.core.async.impl.ioc_helpers.process_exception(state_15395__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 11))
{var inst_15359 = (state_15395[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15395,10,Object,null,9);var inst_15368 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15359) : chs__$1.call(null,inst_15359));var inst_15369 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15359) : done.call(null,inst_15359));var inst_15370 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15368,inst_15369);var state_15395__$1 = state_15395;var statearr_15410_15435 = state_15395__$1;(statearr_15410_15435[2] = inst_15370);
cljs.core.async.impl.ioc_helpers.process_exception(state_15395__$1);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 12))
{var inst_15381 = (state_15395[12]);var inst_15381__$1 = (state_15395[2]);var inst_15382 = cljs.core.some(cljs.core.nil_QMARK_,inst_15381__$1);var state_15395__$1 = (function (){var statearr_15411 = state_15395;(statearr_15411[12] = inst_15381__$1);
return statearr_15411;
})();if(cljs.core.truth_(inst_15382))
{var statearr_15412_15436 = state_15395__$1;(statearr_15412_15436[1] = 13);
} else
{var statearr_15413_15437 = state_15395__$1;(statearr_15413_15437[1] = 14);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 13))
{var inst_15384 = cljs.core.async.close_BANG_(out);var state_15395__$1 = state_15395;var statearr_15414_15438 = state_15395__$1;(statearr_15414_15438[2] = inst_15384);
(statearr_15414_15438[1] = 15);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 14))
{var inst_15381 = (state_15395[12]);var inst_15386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15381);var state_15395__$1 = state_15395;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15395__$1,16,out,inst_15386);
} else
{if((state_val_15396 === 15))
{var inst_15391 = (state_15395[2]);var state_15395__$1 = state_15395;var statearr_15415_15439 = state_15395__$1;(statearr_15415_15439[2] = inst_15391);
(statearr_15415_15439[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15396 === 16))
{var inst_15388 = (state_15395[2]);var state_15395__$1 = (function (){var statearr_15416 = state_15395;(statearr_15416[13] = inst_15388);
return statearr_15416;
})();var statearr_15417_15440 = state_15395__$1;(statearr_15417_15440[2] = null);
(statearr_15417_15440[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15421[0] = state_machine__5507__auto__);
(statearr_15421[1] = 1);
return statearr_15421;
});
var state_machine__5507__auto____1 = (function (state_15395){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15395);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15422){if((e15422 instanceof Object))
{var ex__5510__auto__ = e15422;var statearr_15423_15441 = state_15395;(statearr_15423_15441[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15395);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15442 = state_15395;
state_15395 = G__15442;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15395){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15424 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15425);
return statearr_15424;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___15550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15526){var state_val_15527 = (state_15526[1]);if((state_val_15527 === 1))
{var inst_15497 = cljs.core.vec(chs);var inst_15498 = inst_15497;var state_15526__$1 = (function (){var statearr_15528 = state_15526;(statearr_15528[7] = inst_15498);
return statearr_15528;
})();var statearr_15529_15551 = state_15526__$1;(statearr_15529_15551[2] = null);
(statearr_15529_15551[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 2))
{var inst_15498 = (state_15526[7]);var inst_15500 = cljs.core.count(inst_15498);var inst_15501 = (inst_15500 > 0);var state_15526__$1 = state_15526;if(cljs.core.truth_(inst_15501))
{var statearr_15530_15552 = state_15526__$1;(statearr_15530_15552[1] = 4);
} else
{var statearr_15531_15553 = state_15526__$1;(statearr_15531_15553[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 3))
{var inst_15524 = (state_15526[2]);var state_15526__$1 = state_15526;return cljs.core.async.impl.ioc_helpers.return_chan(state_15526__$1,inst_15524);
} else
{if((state_val_15527 === 4))
{var inst_15498 = (state_15526[7]);var state_15526__$1 = state_15526;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_15526__$1,7,inst_15498);
} else
{if((state_val_15527 === 5))
{var inst_15520 = cljs.core.async.close_BANG_(out);var state_15526__$1 = state_15526;var statearr_15532_15554 = state_15526__$1;(statearr_15532_15554[2] = inst_15520);
(statearr_15532_15554[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 6))
{var inst_15522 = (state_15526[2]);var state_15526__$1 = state_15526;var statearr_15533_15555 = state_15526__$1;(statearr_15533_15555[2] = inst_15522);
(statearr_15533_15555[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 7))
{var inst_15505 = (state_15526[8]);var inst_15506 = (state_15526[9]);var inst_15505__$1 = (state_15526[2]);var inst_15506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15505__$1,0,null);var inst_15507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15505__$1,1,null);var inst_15508 = (inst_15506__$1 == null);var state_15526__$1 = (function (){var statearr_15534 = state_15526;(statearr_15534[8] = inst_15505__$1);
(statearr_15534[9] = inst_15506__$1);
(statearr_15534[10] = inst_15507);
return statearr_15534;
})();if(cljs.core.truth_(inst_15508))
{var statearr_15535_15556 = state_15526__$1;(statearr_15535_15556[1] = 8);
} else
{var statearr_15536_15557 = state_15526__$1;(statearr_15536_15557[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 8))
{var inst_15498 = (state_15526[7]);var inst_15505 = (state_15526[8]);var inst_15506 = (state_15526[9]);var inst_15507 = (state_15526[10]);var inst_15510 = (function (){var c = inst_15507;var v = inst_15506;var vec__15503 = inst_15505;var cs = inst_15498;return ((function (c,v,vec__15503,cs,inst_15498,inst_15505,inst_15506,inst_15507,state_val_15527){
return (function (p1__15443_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15443_SHARP_);
});
;})(c,v,vec__15503,cs,inst_15498,inst_15505,inst_15506,inst_15507,state_val_15527))
})();var inst_15511 = cljs.core.filterv(inst_15510,inst_15498);var inst_15498__$1 = inst_15511;var state_15526__$1 = (function (){var statearr_15537 = state_15526;(statearr_15537[7] = inst_15498__$1);
return statearr_15537;
})();var statearr_15538_15558 = state_15526__$1;(statearr_15538_15558[2] = null);
(statearr_15538_15558[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 9))
{var inst_15506 = (state_15526[9]);var state_15526__$1 = state_15526;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15526__$1,11,out,inst_15506);
} else
{if((state_val_15527 === 10))
{var inst_15518 = (state_15526[2]);var state_15526__$1 = state_15526;var statearr_15540_15559 = state_15526__$1;(statearr_15540_15559[2] = inst_15518);
(statearr_15540_15559[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15527 === 11))
{var inst_15498 = (state_15526[7]);var inst_15515 = (state_15526[2]);var tmp15539 = inst_15498;var inst_15498__$1 = tmp15539;var state_15526__$1 = (function (){var statearr_15541 = state_15526;(statearr_15541[7] = inst_15498__$1);
(statearr_15541[11] = inst_15515);
return statearr_15541;
})();var statearr_15542_15560 = state_15526__$1;(statearr_15542_15560[2] = null);
(statearr_15542_15560[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15546 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15546[0] = state_machine__5507__auto__);
(statearr_15546[1] = 1);
return statearr_15546;
});
var state_machine__5507__auto____1 = (function (state_15526){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15526);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15547){if((e15547 instanceof Object))
{var ex__5510__auto__ = e15547;var statearr_15548_15561 = state_15526;(statearr_15548_15561[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15526);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15562 = state_15526;
state_15526 = G__15562;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15526){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15549 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15550);
return statearr_15549;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___15655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15632){var state_val_15633 = (state_15632[1]);if((state_val_15633 === 1))
{var inst_15609 = 0;var state_15632__$1 = (function (){var statearr_15634 = state_15632;(statearr_15634[7] = inst_15609);
return statearr_15634;
})();var statearr_15635_15656 = state_15632__$1;(statearr_15635_15656[2] = null);
(statearr_15635_15656[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 2))
{var inst_15609 = (state_15632[7]);var inst_15611 = (inst_15609 < n);var state_15632__$1 = state_15632;if(cljs.core.truth_(inst_15611))
{var statearr_15636_15657 = state_15632__$1;(statearr_15636_15657[1] = 4);
} else
{var statearr_15637_15658 = state_15632__$1;(statearr_15637_15658[1] = 5);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 3))
{var inst_15629 = (state_15632[2]);var inst_15630 = cljs.core.async.close_BANG_(out);var state_15632__$1 = (function (){var statearr_15638 = state_15632;(statearr_15638[8] = inst_15629);
return statearr_15638;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_15632__$1,inst_15630);
} else
{if((state_val_15633 === 4))
{var state_15632__$1 = state_15632;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15632__$1,7,ch);
} else
{if((state_val_15633 === 5))
{var state_15632__$1 = state_15632;var statearr_15639_15659 = state_15632__$1;(statearr_15639_15659[2] = null);
(statearr_15639_15659[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 6))
{var inst_15627 = (state_15632[2]);var state_15632__$1 = state_15632;var statearr_15640_15660 = state_15632__$1;(statearr_15640_15660[2] = inst_15627);
(statearr_15640_15660[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 7))
{var inst_15614 = (state_15632[9]);var inst_15614__$1 = (state_15632[2]);var inst_15615 = (inst_15614__$1 == null);var inst_15616 = cljs.core.not(inst_15615);var state_15632__$1 = (function (){var statearr_15641 = state_15632;(statearr_15641[9] = inst_15614__$1);
return statearr_15641;
})();if(inst_15616)
{var statearr_15642_15661 = state_15632__$1;(statearr_15642_15661[1] = 8);
} else
{var statearr_15643_15662 = state_15632__$1;(statearr_15643_15662[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 8))
{var inst_15614 = (state_15632[9]);var state_15632__$1 = state_15632;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15632__$1,11,out,inst_15614);
} else
{if((state_val_15633 === 9))
{var state_15632__$1 = state_15632;var statearr_15644_15663 = state_15632__$1;(statearr_15644_15663[2] = null);
(statearr_15644_15663[1] = 10);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 10))
{var inst_15624 = (state_15632[2]);var state_15632__$1 = state_15632;var statearr_15645_15664 = state_15632__$1;(statearr_15645_15664[2] = inst_15624);
(statearr_15645_15664[1] = 6);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15633 === 11))
{var inst_15609 = (state_15632[7]);var inst_15619 = (state_15632[2]);var inst_15620 = (inst_15609 + 1);var inst_15609__$1 = inst_15620;var state_15632__$1 = (function (){var statearr_15646 = state_15632;(statearr_15646[7] = inst_15609__$1);
(statearr_15646[10] = inst_15619);
return statearr_15646;
})();var statearr_15647_15665 = state_15632__$1;(statearr_15647_15665[2] = null);
(statearr_15647_15665[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15651 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15651[0] = state_machine__5507__auto__);
(statearr_15651[1] = 1);
return statearr_15651;
});
var state_machine__5507__auto____1 = (function (state_15632){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15632);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15652){if((e15652 instanceof Object))
{var ex__5510__auto__ = e15652;var statearr_15653_15666 = state_15632;(statearr_15653_15666[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15632);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15667 = state_15632;
state_15632 = G__15667;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15632){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15654 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15655);
return statearr_15654;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___15764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15739){var state_val_15740 = (state_15739[1]);if((state_val_15740 === 1))
{var inst_15716 = null;var state_15739__$1 = (function (){var statearr_15741 = state_15739;(statearr_15741[7] = inst_15716);
return statearr_15741;
})();var statearr_15742_15765 = state_15739__$1;(statearr_15742_15765[2] = null);
(statearr_15742_15765[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 2))
{var state_15739__$1 = state_15739;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,4,ch);
} else
{if((state_val_15740 === 3))
{var inst_15736 = (state_15739[2]);var inst_15737 = cljs.core.async.close_BANG_(out);var state_15739__$1 = (function (){var statearr_15743 = state_15739;(statearr_15743[8] = inst_15736);
return statearr_15743;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_15739__$1,inst_15737);
} else
{if((state_val_15740 === 4))
{var inst_15719 = (state_15739[9]);var inst_15719__$1 = (state_15739[2]);var inst_15720 = (inst_15719__$1 == null);var inst_15721 = cljs.core.not(inst_15720);var state_15739__$1 = (function (){var statearr_15744 = state_15739;(statearr_15744[9] = inst_15719__$1);
return statearr_15744;
})();if(inst_15721)
{var statearr_15745_15766 = state_15739__$1;(statearr_15745_15766[1] = 5);
} else
{var statearr_15746_15767 = state_15739__$1;(statearr_15746_15767[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 5))
{var inst_15719 = (state_15739[9]);var inst_15716 = (state_15739[7]);var inst_15723 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15719,inst_15716);var state_15739__$1 = state_15739;if(inst_15723)
{var statearr_15747_15768 = state_15739__$1;(statearr_15747_15768[1] = 8);
} else
{var statearr_15748_15769 = state_15739__$1;(statearr_15748_15769[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 6))
{var state_15739__$1 = state_15739;var statearr_15750_15770 = state_15739__$1;(statearr_15750_15770[2] = null);
(statearr_15750_15770[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 7))
{var inst_15734 = (state_15739[2]);var state_15739__$1 = state_15739;var statearr_15751_15771 = state_15739__$1;(statearr_15751_15771[2] = inst_15734);
(statearr_15751_15771[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 8))
{var inst_15716 = (state_15739[7]);var tmp15749 = inst_15716;var inst_15716__$1 = tmp15749;var state_15739__$1 = (function (){var statearr_15752 = state_15739;(statearr_15752[7] = inst_15716__$1);
return statearr_15752;
})();var statearr_15753_15772 = state_15739__$1;(statearr_15753_15772[2] = null);
(statearr_15753_15772[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 9))
{var inst_15719 = (state_15739[9]);var state_15739__$1 = state_15739;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15739__$1,11,out,inst_15719);
} else
{if((state_val_15740 === 10))
{var inst_15731 = (state_15739[2]);var state_15739__$1 = state_15739;var statearr_15754_15773 = state_15739__$1;(statearr_15754_15773[2] = inst_15731);
(statearr_15754_15773[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15740 === 11))
{var inst_15719 = (state_15739[9]);var inst_15728 = (state_15739[2]);var inst_15716 = inst_15719;var state_15739__$1 = (function (){var statearr_15755 = state_15739;(statearr_15755[10] = inst_15728);
(statearr_15755[7] = inst_15716);
return statearr_15755;
})();var statearr_15756_15774 = state_15739__$1;(statearr_15756_15774[2] = null);
(statearr_15756_15774[1] = 2);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15760 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15760[0] = state_machine__5507__auto__);
(statearr_15760[1] = 1);
return statearr_15760;
});
var state_machine__5507__auto____1 = (function (state_15739){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15739);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15761){if((e15761 instanceof Object))
{var ex__5510__auto__ = e15761;var statearr_15762_15775 = state_15739;(statearr_15762_15775[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15739);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15776 = state_15739;
state_15739 = G__15776;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15739){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15763 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15764);
return statearr_15763;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___15911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15881){var state_val_15882 = (state_15881[1]);if((state_val_15882 === 1))
{var inst_15844 = (new Array(n));var inst_15845 = inst_15844;var inst_15846 = 0;var state_15881__$1 = (function (){var statearr_15883 = state_15881;(statearr_15883[7] = inst_15845);
(statearr_15883[8] = inst_15846);
return statearr_15883;
})();var statearr_15884_15912 = state_15881__$1;(statearr_15884_15912[2] = null);
(statearr_15884_15912[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 2))
{var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15881__$1,4,ch);
} else
{if((state_val_15882 === 3))
{var inst_15879 = (state_15881[2]);var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.return_chan(state_15881__$1,inst_15879);
} else
{if((state_val_15882 === 4))
{var inst_15849 = (state_15881[9]);var inst_15849__$1 = (state_15881[2]);var inst_15850 = (inst_15849__$1 == null);var inst_15851 = cljs.core.not(inst_15850);var state_15881__$1 = (function (){var statearr_15885 = state_15881;(statearr_15885[9] = inst_15849__$1);
return statearr_15885;
})();if(inst_15851)
{var statearr_15886_15913 = state_15881__$1;(statearr_15886_15913[1] = 5);
} else
{var statearr_15887_15914 = state_15881__$1;(statearr_15887_15914[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 5))
{var inst_15845 = (state_15881[7]);var inst_15846 = (state_15881[8]);var inst_15854 = (state_15881[10]);var inst_15849 = (state_15881[9]);var inst_15853 = (inst_15845[inst_15846] = inst_15849);var inst_15854__$1 = (inst_15846 + 1);var inst_15855 = (inst_15854__$1 < n);var state_15881__$1 = (function (){var statearr_15888 = state_15881;(statearr_15888[10] = inst_15854__$1);
(statearr_15888[11] = inst_15853);
return statearr_15888;
})();if(cljs.core.truth_(inst_15855))
{var statearr_15889_15915 = state_15881__$1;(statearr_15889_15915[1] = 8);
} else
{var statearr_15890_15916 = state_15881__$1;(statearr_15890_15916[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 6))
{var inst_15846 = (state_15881[8]);var inst_15867 = (inst_15846 > 0);var state_15881__$1 = state_15881;if(cljs.core.truth_(inst_15867))
{var statearr_15892_15917 = state_15881__$1;(statearr_15892_15917[1] = 12);
} else
{var statearr_15893_15918 = state_15881__$1;(statearr_15893_15918[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 7))
{var inst_15877 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15894_15919 = state_15881__$1;(statearr_15894_15919[2] = inst_15877);
(statearr_15894_15919[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 8))
{var inst_15845 = (state_15881[7]);var inst_15854 = (state_15881[10]);var tmp15891 = inst_15845;var inst_15845__$1 = tmp15891;var inst_15846 = inst_15854;var state_15881__$1 = (function (){var statearr_15895 = state_15881;(statearr_15895[7] = inst_15845__$1);
(statearr_15895[8] = inst_15846);
return statearr_15895;
})();var statearr_15896_15920 = state_15881__$1;(statearr_15896_15920[2] = null);
(statearr_15896_15920[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 9))
{var inst_15845 = (state_15881[7]);var inst_15859 = cljs.core.vec(inst_15845);var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15881__$1,11,out,inst_15859);
} else
{if((state_val_15882 === 10))
{var inst_15865 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15897_15921 = state_15881__$1;(statearr_15897_15921[2] = inst_15865);
(statearr_15897_15921[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 11))
{var inst_15861 = (state_15881[2]);var inst_15862 = (new Array(n));var inst_15845 = inst_15862;var inst_15846 = 0;var state_15881__$1 = (function (){var statearr_15898 = state_15881;(statearr_15898[12] = inst_15861);
(statearr_15898[7] = inst_15845);
(statearr_15898[8] = inst_15846);
return statearr_15898;
})();var statearr_15899_15922 = state_15881__$1;(statearr_15899_15922[2] = null);
(statearr_15899_15922[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 12))
{var inst_15845 = (state_15881[7]);var inst_15869 = cljs.core.vec(inst_15845);var state_15881__$1 = state_15881;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15881__$1,15,out,inst_15869);
} else
{if((state_val_15882 === 13))
{var state_15881__$1 = state_15881;var statearr_15900_15923 = state_15881__$1;(statearr_15900_15923[2] = null);
(statearr_15900_15923[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 14))
{var inst_15874 = (state_15881[2]);var inst_15875 = cljs.core.async.close_BANG_(out);var state_15881__$1 = (function (){var statearr_15901 = state_15881;(statearr_15901[13] = inst_15874);
return statearr_15901;
})();var statearr_15902_15924 = state_15881__$1;(statearr_15902_15924[2] = inst_15875);
(statearr_15902_15924[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_15882 === 15))
{var inst_15871 = (state_15881[2]);var state_15881__$1 = state_15881;var statearr_15903_15925 = state_15881__$1;(statearr_15903_15925[2] = inst_15871);
(statearr_15903_15925[1] = 14);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_15907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15907[0] = state_machine__5507__auto__);
(statearr_15907[1] = 1);
return statearr_15907;
});
var state_machine__5507__auto____1 = (function (state_15881){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_15881);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15908){if((e15908 instanceof Object))
{var ex__5510__auto__ = e15908;var statearr_15909_15926 = state_15881;(statearr_15909_15926[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15881);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e15908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__15927 = state_15881;
state_15881 = G__15927;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15881){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15910 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_15910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15911);
return statearr_15910;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___16070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16040){var state_val_16041 = (state_16040[1]);if((state_val_16041 === 1))
{var inst_15999 = [];var inst_16000 = inst_15999;var inst_16001 = cljs.core.constant$keyword$30;var state_16040__$1 = (function (){var statearr_16042 = state_16040;(statearr_16042[7] = inst_16001);
(statearr_16042[8] = inst_16000);
return statearr_16042;
})();var statearr_16043_16071 = state_16040__$1;(statearr_16043_16071[2] = null);
(statearr_16043_16071[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 2))
{var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16040__$1,4,ch);
} else
{if((state_val_16041 === 3))
{var inst_16038 = (state_16040[2]);var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.return_chan(state_16040__$1,inst_16038);
} else
{if((state_val_16041 === 4))
{var inst_16004 = (state_16040[9]);var inst_16004__$1 = (state_16040[2]);var inst_16005 = (inst_16004__$1 == null);var inst_16006 = cljs.core.not(inst_16005);var state_16040__$1 = (function (){var statearr_16044 = state_16040;(statearr_16044[9] = inst_16004__$1);
return statearr_16044;
})();if(inst_16006)
{var statearr_16045_16072 = state_16040__$1;(statearr_16045_16072[1] = 5);
} else
{var statearr_16046_16073 = state_16040__$1;(statearr_16046_16073[1] = 6);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 5))
{var inst_16004 = (state_16040[9]);var inst_16001 = (state_16040[7]);var inst_16008 = (state_16040[10]);var inst_16008__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16004) : f.call(null,inst_16004));var inst_16009 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16008__$1,inst_16001);var inst_16010 = cljs.core.keyword_identical_QMARK_(inst_16001,cljs.core.constant$keyword$30);var inst_16011 = (inst_16009) || (inst_16010);var state_16040__$1 = (function (){var statearr_16047 = state_16040;(statearr_16047[10] = inst_16008__$1);
return statearr_16047;
})();if(cljs.core.truth_(inst_16011))
{var statearr_16048_16074 = state_16040__$1;(statearr_16048_16074[1] = 8);
} else
{var statearr_16049_16075 = state_16040__$1;(statearr_16049_16075[1] = 9);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 6))
{var inst_16000 = (state_16040[8]);var inst_16025 = inst_16000.length;var inst_16026 = (inst_16025 > 0);var state_16040__$1 = state_16040;if(cljs.core.truth_(inst_16026))
{var statearr_16051_16076 = state_16040__$1;(statearr_16051_16076[1] = 12);
} else
{var statearr_16052_16077 = state_16040__$1;(statearr_16052_16077[1] = 13);
}
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 7))
{var inst_16036 = (state_16040[2]);var state_16040__$1 = state_16040;var statearr_16053_16078 = state_16040__$1;(statearr_16053_16078[2] = inst_16036);
(statearr_16053_16078[1] = 3);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 8))
{var inst_16004 = (state_16040[9]);var inst_16000 = (state_16040[8]);var inst_16008 = (state_16040[10]);var inst_16013 = inst_16000.push(inst_16004);var tmp16050 = inst_16000;var inst_16000__$1 = tmp16050;var inst_16001 = inst_16008;var state_16040__$1 = (function (){var statearr_16054 = state_16040;(statearr_16054[7] = inst_16001);
(statearr_16054[8] = inst_16000__$1);
(statearr_16054[11] = inst_16013);
return statearr_16054;
})();var statearr_16055_16079 = state_16040__$1;(statearr_16055_16079[2] = null);
(statearr_16055_16079[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 9))
{var inst_16000 = (state_16040[8]);var inst_16016 = cljs.core.vec(inst_16000);var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16040__$1,11,out,inst_16016);
} else
{if((state_val_16041 === 10))
{var inst_16023 = (state_16040[2]);var state_16040__$1 = state_16040;var statearr_16056_16080 = state_16040__$1;(statearr_16056_16080[2] = inst_16023);
(statearr_16056_16080[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 11))
{var inst_16004 = (state_16040[9]);var inst_16008 = (state_16040[10]);var inst_16018 = (state_16040[2]);var inst_16019 = [];var inst_16020 = inst_16019.push(inst_16004);var inst_16000 = inst_16019;var inst_16001 = inst_16008;var state_16040__$1 = (function (){var statearr_16057 = state_16040;(statearr_16057[12] = inst_16020);
(statearr_16057[7] = inst_16001);
(statearr_16057[13] = inst_16018);
(statearr_16057[8] = inst_16000);
return statearr_16057;
})();var statearr_16058_16081 = state_16040__$1;(statearr_16058_16081[2] = null);
(statearr_16058_16081[1] = 2);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 12))
{var inst_16000 = (state_16040[8]);var inst_16028 = cljs.core.vec(inst_16000);var state_16040__$1 = state_16040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16040__$1,15,out,inst_16028);
} else
{if((state_val_16041 === 13))
{var state_16040__$1 = state_16040;var statearr_16059_16082 = state_16040__$1;(statearr_16059_16082[2] = null);
(statearr_16059_16082[1] = 14);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 14))
{var inst_16033 = (state_16040[2]);var inst_16034 = cljs.core.async.close_BANG_(out);var state_16040__$1 = (function (){var statearr_16060 = state_16040;(statearr_16060[14] = inst_16033);
return statearr_16060;
})();var statearr_16061_16083 = state_16040__$1;(statearr_16061_16083[2] = inst_16034);
(statearr_16061_16083[1] = 7);
return cljs.core.constant$keyword$17;
} else
{if((state_val_16041 === 15))
{var inst_16030 = (state_16040[2]);var state_16040__$1 = state_16040;var statearr_16062_16084 = state_16040__$1;(statearr_16062_16084[2] = inst_16030);
(statearr_16062_16084[1] = 14);
return cljs.core.constant$keyword$17;
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
var state_machine__5507__auto____0 = (function (){var statearr_16066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16066[0] = state_machine__5507__auto__);
(statearr_16066[1] = 1);
return statearr_16066;
});
var state_machine__5507__auto____1 = (function (state_16040){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_16040);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$17))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16067){if((e16067 instanceof Object))
{var ex__5510__auto__ = e16067;var statearr_16068_16085 = state_16040;(statearr_16068_16085[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16040);
return cljs.core.constant$keyword$17;
} else
{if(cljs.core.constant$keyword$6)
{throw e16067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$17))
{{
var G__16086 = state_16040;
state_16040 = G__16086;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16040){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16069 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_16069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16070);
return statearr_16069;
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
