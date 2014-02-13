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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23413 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23413 = (function (f,fn_handler,meta23414){
this.f = f;
this.fn_handler = fn_handler;
this.meta23414 = meta23414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23413.cljs$lang$type = true;
cljs.core.async.t23413.cljs$lang$ctorStr = "cljs.core.async/t23413";
cljs.core.async.t23413.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23413");
});
cljs.core.async.t23413.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23415){var self__ = this;
var _23415__$1 = this;return self__.meta23414;
});
cljs.core.async.t23413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23415,meta23414__$1){var self__ = this;
var _23415__$1 = this;return (new cljs.core.async.t23413(self__.f,self__.fn_handler,meta23414__$1));
});
cljs.core.async.__GT_t23413 = (function __GT_t23413(f__$1,fn_handler__$1,meta23414){return (new cljs.core.async.t23413(f__$1,fn_handler__$1,meta23414));
});
}
return (new cljs.core.async.t23413(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23417 = buff;if(G__23417)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23417.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23417.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23417);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23417);
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
{var val_23418 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23418) : fn1.call(null,val_23418));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23418) : fn1.call(null,val_23418));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23419 = n;var x_23420 = 0;while(true){
if((x_23420 < n__4248__auto___23419))
{(a[x_23420] = 0);
{
var G__23421 = (x_23420 + 1);
x_23420 = G__23421;
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
var G__23422 = (i + 1);
i = G__23422;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23426 = (function (flag,alt_flag,meta23427){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23427 = meta23427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23426.cljs$lang$type = true;
cljs.core.async.t23426.cljs$lang$ctorStr = "cljs.core.async/t23426";
cljs.core.async.t23426.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23426");
});
cljs.core.async.t23426.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23428){var self__ = this;
var _23428__$1 = this;return self__.meta23427;
});
cljs.core.async.t23426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23428,meta23427__$1){var self__ = this;
var _23428__$1 = this;return (new cljs.core.async.t23426(self__.flag,self__.alt_flag,meta23427__$1));
});
cljs.core.async.__GT_t23426 = (function __GT_t23426(flag__$1,alt_flag__$1,meta23427){return (new cljs.core.async.t23426(flag__$1,alt_flag__$1,meta23427));
});
}
return (new cljs.core.async.t23426(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23432 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23432 = (function (cb,flag,alt_handler,meta23433){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23433 = meta23433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23432.cljs$lang$type = true;
cljs.core.async.t23432.cljs$lang$ctorStr = "cljs.core.async/t23432";
cljs.core.async.t23432.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23432");
});
cljs.core.async.t23432.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23434){var self__ = this;
var _23434__$1 = this;return self__.meta23433;
});
cljs.core.async.t23432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23434,meta23433__$1){var self__ = this;
var _23434__$1 = this;return (new cljs.core.async.t23432(self__.cb,self__.flag,self__.alt_handler,meta23433__$1));
});
cljs.core.async.__GT_t23432 = (function __GT_t23432(cb__$1,flag__$1,alt_handler__$1,meta23433){return (new cljs.core.async.t23432(cb__$1,flag__$1,alt_handler__$1,meta23433));
});
}
return (new cljs.core.async.t23432(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$222.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23435_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23435_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23435_SHARP_,port], null)));
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
var G__23436 = (i + 1);
i = G__23436;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$206))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$206], null));
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
var alts_BANG___delegate = function (ports,p__23437){var map__23439 = p__23437;var map__23439__$1 = ((cljs.core.seq_QMARK_(map__23439))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23439):map__23439);var opts = map__23439__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23437 = null;if (arguments.length > 1) {
  p__23437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23437);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23440){
var ports = cljs.core.first(arglist__23440);
var p__23437 = cljs.core.rest(arglist__23440);
return alts_BANG___delegate(ports,p__23437);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23448 = (function (ch,f,map_LT_,meta23449){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23449 = meta23449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23448.cljs$lang$type = true;
cljs.core.async.t23448.cljs$lang$ctorStr = "cljs.core.async/t23448";
cljs.core.async.t23448.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23448");
});
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23451 = (function (fn1,_,meta23449,ch,f,map_LT_,meta23452){
this.fn1 = fn1;
this._ = _;
this.meta23449 = meta23449;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23452 = meta23452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23451.cljs$lang$type = true;
cljs.core.async.t23451.cljs$lang$ctorStr = "cljs.core.async/t23451";
cljs.core.async.t23451.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23451");
});
cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23441_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23441_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23441_SHARP_) : self__.f.call(null,p1__23441_SHARP_)))) : f1.call(null,(((p1__23441_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23441_SHARP_) : self__.f.call(null,p1__23441_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23453){var self__ = this;
var _23453__$1 = this;return self__.meta23452;
});
cljs.core.async.t23451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23453,meta23452__$1){var self__ = this;
var _23453__$1 = this;return (new cljs.core.async.t23451(self__.fn1,self__._,self__.meta23449,self__.ch,self__.f,self__.map_LT_,meta23452__$1));
});
cljs.core.async.__GT_t23451 = (function __GT_t23451(fn1__$1,___$2,meta23449__$1,ch__$2,f__$2,map_LT___$2,meta23452){return (new cljs.core.async.t23451(fn1__$1,___$2,meta23449__$1,ch__$2,f__$2,map_LT___$2,meta23452));
});
}
return (new cljs.core.async.t23451(fn1,___$1,self__.meta23449,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23450){var self__ = this;
var _23450__$1 = this;return self__.meta23449;
});
cljs.core.async.t23448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23450,meta23449__$1){var self__ = this;
var _23450__$1 = this;return (new cljs.core.async.t23448(self__.ch,self__.f,self__.map_LT_,meta23449__$1));
});
cljs.core.async.__GT_t23448 = (function __GT_t23448(ch__$1,f__$1,map_LT___$1,meta23449){return (new cljs.core.async.t23448(ch__$1,f__$1,map_LT___$1,meta23449));
});
}
return (new cljs.core.async.t23448(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23457 = (function (ch,f,map_GT_,meta23458){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23458 = meta23458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23457.cljs$lang$type = true;
cljs.core.async.t23457.cljs$lang$ctorStr = "cljs.core.async/t23457";
cljs.core.async.t23457.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23457");
});
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23459){var self__ = this;
var _23459__$1 = this;return self__.meta23458;
});
cljs.core.async.t23457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23459,meta23458__$1){var self__ = this;
var _23459__$1 = this;return (new cljs.core.async.t23457(self__.ch,self__.f,self__.map_GT_,meta23458__$1));
});
cljs.core.async.__GT_t23457 = (function __GT_t23457(ch__$1,f__$1,map_GT___$1,meta23458){return (new cljs.core.async.t23457(ch__$1,f__$1,map_GT___$1,meta23458));
});
}
return (new cljs.core.async.t23457(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23463 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23463 = (function (ch,p,filter_GT_,meta23464){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23464 = meta23464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23463.cljs$lang$type = true;
cljs.core.async.t23463.cljs$lang$ctorStr = "cljs.core.async/t23463";
cljs.core.async.t23463.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23463");
});
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23465){var self__ = this;
var _23465__$1 = this;return self__.meta23464;
});
cljs.core.async.t23463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23465,meta23464__$1){var self__ = this;
var _23465__$1 = this;return (new cljs.core.async.t23463(self__.ch,self__.p,self__.filter_GT_,meta23464__$1));
});
cljs.core.async.__GT_t23463 = (function __GT_t23463(ch__$1,p__$1,filter_GT___$1,meta23464){return (new cljs.core.async.t23463(ch__$1,p__$1,filter_GT___$1,meta23464));
});
}
return (new cljs.core.async.t23463(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23527){var state_val_23528 = (state_23527[1]);if((state_val_23528 === 1))
{var state_23527__$1 = state_23527;var statearr_23529_23549 = state_23527__$1;(statearr_23529_23549[2] = null);
(statearr_23529_23549[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 2))
{var state_23527__$1 = state_23527;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23527__$1,4,ch);
} else
{if((state_val_23528 === 3))
{var inst_23525 = (state_23527[2]);var state_23527__$1 = state_23527;return cljs.core.async.impl.ioc_helpers.return_chan(state_23527__$1,inst_23525);
} else
{if((state_val_23528 === 4))
{var inst_23509 = (state_23527[7]);var inst_23509__$1 = (state_23527[2]);var inst_23510 = (inst_23509__$1 == null);var state_23527__$1 = (function (){var statearr_23530 = state_23527;(statearr_23530[7] = inst_23509__$1);
return statearr_23530;
})();if(cljs.core.truth_(inst_23510))
{var statearr_23531_23550 = state_23527__$1;(statearr_23531_23550[1] = 5);
} else
{var statearr_23532_23551 = state_23527__$1;(statearr_23532_23551[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 5))
{var inst_23512 = cljs.core.async.close_BANG_(out);var state_23527__$1 = state_23527;var statearr_23533_23552 = state_23527__$1;(statearr_23533_23552[2] = inst_23512);
(statearr_23533_23552[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 6))
{var inst_23509 = (state_23527[7]);var inst_23514 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23509) : p.call(null,inst_23509));var state_23527__$1 = state_23527;if(cljs.core.truth_(inst_23514))
{var statearr_23534_23553 = state_23527__$1;(statearr_23534_23553[1] = 8);
} else
{var statearr_23535_23554 = state_23527__$1;(statearr_23535_23554[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 7))
{var inst_23523 = (state_23527[2]);var state_23527__$1 = state_23527;var statearr_23536_23555 = state_23527__$1;(statearr_23536_23555[2] = inst_23523);
(statearr_23536_23555[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 8))
{var inst_23509 = (state_23527[7]);var state_23527__$1 = state_23527;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23527__$1,11,out,inst_23509);
} else
{if((state_val_23528 === 9))
{var state_23527__$1 = state_23527;var statearr_23537_23556 = state_23527__$1;(statearr_23537_23556[2] = null);
(statearr_23537_23556[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 10))
{var inst_23520 = (state_23527[2]);var state_23527__$1 = (function (){var statearr_23538 = state_23527;(statearr_23538[8] = inst_23520);
return statearr_23538;
})();var statearr_23539_23557 = state_23527__$1;(statearr_23539_23557[2] = null);
(statearr_23539_23557[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23528 === 11))
{var inst_23517 = (state_23527[2]);var state_23527__$1 = state_23527;var statearr_23540_23558 = state_23527__$1;(statearr_23540_23558[2] = inst_23517);
(statearr_23540_23558[1] = 10);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23544 = [null,null,null,null,null,null,null,null,null];(statearr_23544[0] = state_machine__5507__auto__);
(statearr_23544[1] = 1);
return statearr_23544;
});
var state_machine__5507__auto____1 = (function (state_23527){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23527);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23545){if((e23545 instanceof Object))
{var ex__5510__auto__ = e23545;var statearr_23546_23559 = state_23527;(statearr_23546_23559[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23527);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23560 = state_23527;
state_23527 = G__23560;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23527){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23547 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23548);
return statearr_23547;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23712){var state_val_23713 = (state_23712[1]);if((state_val_23713 === 1))
{var state_23712__$1 = state_23712;var statearr_23714_23751 = state_23712__$1;(statearr_23714_23751[2] = null);
(statearr_23714_23751[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 2))
{var state_23712__$1 = state_23712;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23712__$1,4,in$);
} else
{if((state_val_23713 === 3))
{var inst_23710 = (state_23712[2]);var state_23712__$1 = state_23712;return cljs.core.async.impl.ioc_helpers.return_chan(state_23712__$1,inst_23710);
} else
{if((state_val_23713 === 4))
{var inst_23658 = (state_23712[7]);var inst_23658__$1 = (state_23712[2]);var inst_23659 = (inst_23658__$1 == null);var state_23712__$1 = (function (){var statearr_23715 = state_23712;(statearr_23715[7] = inst_23658__$1);
return statearr_23715;
})();if(cljs.core.truth_(inst_23659))
{var statearr_23716_23752 = state_23712__$1;(statearr_23716_23752[1] = 5);
} else
{var statearr_23717_23753 = state_23712__$1;(statearr_23717_23753[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 5))
{var inst_23661 = cljs.core.async.close_BANG_(out);var state_23712__$1 = state_23712;var statearr_23718_23754 = state_23712__$1;(statearr_23718_23754[2] = inst_23661);
(statearr_23718_23754[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 6))
{var inst_23658 = (state_23712[7]);var inst_23663 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23658) : f.call(null,inst_23658));var inst_23668 = cljs.core.seq(inst_23663);var inst_23669 = inst_23668;var inst_23670 = null;var inst_23671 = 0;var inst_23672 = 0;var state_23712__$1 = (function (){var statearr_23719 = state_23712;(statearr_23719[8] = inst_23671);
(statearr_23719[9] = inst_23672);
(statearr_23719[10] = inst_23670);
(statearr_23719[11] = inst_23669);
return statearr_23719;
})();var statearr_23720_23755 = state_23712__$1;(statearr_23720_23755[2] = null);
(statearr_23720_23755[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 7))
{var inst_23708 = (state_23712[2]);var state_23712__$1 = state_23712;var statearr_23721_23756 = state_23712__$1;(statearr_23721_23756[2] = inst_23708);
(statearr_23721_23756[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 8))
{var inst_23671 = (state_23712[8]);var inst_23672 = (state_23712[9]);var inst_23674 = (inst_23672 < inst_23671);var inst_23675 = inst_23674;var state_23712__$1 = state_23712;if(cljs.core.truth_(inst_23675))
{var statearr_23722_23757 = state_23712__$1;(statearr_23722_23757[1] = 10);
} else
{var statearr_23723_23758 = state_23712__$1;(statearr_23723_23758[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 9))
{var inst_23705 = (state_23712[2]);var state_23712__$1 = (function (){var statearr_23724 = state_23712;(statearr_23724[12] = inst_23705);
return statearr_23724;
})();var statearr_23725_23759 = state_23712__$1;(statearr_23725_23759[2] = null);
(statearr_23725_23759[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 10))
{var inst_23672 = (state_23712[9]);var inst_23670 = (state_23712[10]);var inst_23677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23670,inst_23672);var state_23712__$1 = state_23712;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23712__$1,13,out,inst_23677);
} else
{if((state_val_23713 === 11))
{var inst_23683 = (state_23712[13]);var inst_23669 = (state_23712[11]);var inst_23683__$1 = cljs.core.seq(inst_23669);var state_23712__$1 = (function (){var statearr_23729 = state_23712;(statearr_23729[13] = inst_23683__$1);
return statearr_23729;
})();if(inst_23683__$1)
{var statearr_23730_23760 = state_23712__$1;(statearr_23730_23760[1] = 14);
} else
{var statearr_23731_23761 = state_23712__$1;(statearr_23731_23761[1] = 15);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 12))
{var inst_23703 = (state_23712[2]);var state_23712__$1 = state_23712;var statearr_23732_23762 = state_23712__$1;(statearr_23732_23762[2] = inst_23703);
(statearr_23732_23762[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 13))
{var inst_23671 = (state_23712[8]);var inst_23672 = (state_23712[9]);var inst_23670 = (state_23712[10]);var inst_23669 = (state_23712[11]);var inst_23679 = (state_23712[2]);var inst_23680 = (inst_23672 + 1);var tmp23726 = inst_23671;var tmp23727 = inst_23670;var tmp23728 = inst_23669;var inst_23669__$1 = tmp23728;var inst_23670__$1 = tmp23727;var inst_23671__$1 = tmp23726;var inst_23672__$1 = inst_23680;var state_23712__$1 = (function (){var statearr_23733 = state_23712;(statearr_23733[8] = inst_23671__$1);
(statearr_23733[9] = inst_23672__$1);
(statearr_23733[10] = inst_23670__$1);
(statearr_23733[14] = inst_23679);
(statearr_23733[11] = inst_23669__$1);
return statearr_23733;
})();var statearr_23734_23763 = state_23712__$1;(statearr_23734_23763[2] = null);
(statearr_23734_23763[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 14))
{var inst_23683 = (state_23712[13]);var inst_23685 = cljs.core.chunked_seq_QMARK_(inst_23683);var state_23712__$1 = state_23712;if(inst_23685)
{var statearr_23735_23764 = state_23712__$1;(statearr_23735_23764[1] = 17);
} else
{var statearr_23736_23765 = state_23712__$1;(statearr_23736_23765[1] = 18);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 15))
{var state_23712__$1 = state_23712;var statearr_23737_23766 = state_23712__$1;(statearr_23737_23766[2] = null);
(statearr_23737_23766[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 16))
{var inst_23701 = (state_23712[2]);var state_23712__$1 = state_23712;var statearr_23738_23767 = state_23712__$1;(statearr_23738_23767[2] = inst_23701);
(statearr_23738_23767[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 17))
{var inst_23683 = (state_23712[13]);var inst_23687 = cljs.core.chunk_first(inst_23683);var inst_23688 = cljs.core.chunk_rest(inst_23683);var inst_23689 = cljs.core.count(inst_23687);var inst_23669 = inst_23688;var inst_23670 = inst_23687;var inst_23671 = inst_23689;var inst_23672 = 0;var state_23712__$1 = (function (){var statearr_23739 = state_23712;(statearr_23739[8] = inst_23671);
(statearr_23739[9] = inst_23672);
(statearr_23739[10] = inst_23670);
(statearr_23739[11] = inst_23669);
return statearr_23739;
})();var statearr_23740_23768 = state_23712__$1;(statearr_23740_23768[2] = null);
(statearr_23740_23768[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 18))
{var inst_23683 = (state_23712[13]);var inst_23692 = cljs.core.first(inst_23683);var state_23712__$1 = state_23712;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23712__$1,20,out,inst_23692);
} else
{if((state_val_23713 === 19))
{var inst_23698 = (state_23712[2]);var state_23712__$1 = state_23712;var statearr_23741_23769 = state_23712__$1;(statearr_23741_23769[2] = inst_23698);
(statearr_23741_23769[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23713 === 20))
{var inst_23683 = (state_23712[13]);var inst_23694 = (state_23712[2]);var inst_23695 = cljs.core.next(inst_23683);var inst_23669 = inst_23695;var inst_23670 = null;var inst_23671 = 0;var inst_23672 = 0;var state_23712__$1 = (function (){var statearr_23742 = state_23712;(statearr_23742[8] = inst_23671);
(statearr_23742[9] = inst_23672);
(statearr_23742[10] = inst_23670);
(statearr_23742[11] = inst_23669);
(statearr_23742[15] = inst_23694);
return statearr_23742;
})();var statearr_23743_23770 = state_23712__$1;(statearr_23743_23770[2] = null);
(statearr_23743_23770[1] = 8);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23747[0] = state_machine__5507__auto__);
(statearr_23747[1] = 1);
return statearr_23747;
});
var state_machine__5507__auto____1 = (function (state_23712){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23712);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23748){if((e23748 instanceof Object))
{var ex__5510__auto__ = e23748;var statearr_23749_23771 = state_23712;(statearr_23749_23771[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23712);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23772 = state_23712;
state_23712 = G__23772;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23712){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23712);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23832){var state_val_23833 = (state_23832[1]);if((state_val_23833 === 1))
{var state_23832__$1 = state_23832;var statearr_23834_23854 = state_23832__$1;(statearr_23834_23854[2] = null);
(statearr_23834_23854[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 2))
{var state_23832__$1 = state_23832;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23832__$1,4,from);
} else
{if((state_val_23833 === 3))
{var inst_23830 = (state_23832[2]);var state_23832__$1 = state_23832;return cljs.core.async.impl.ioc_helpers.return_chan(state_23832__$1,inst_23830);
} else
{if((state_val_23833 === 4))
{var inst_23815 = (state_23832[7]);var inst_23815__$1 = (state_23832[2]);var inst_23816 = (inst_23815__$1 == null);var state_23832__$1 = (function (){var statearr_23835 = state_23832;(statearr_23835[7] = inst_23815__$1);
return statearr_23835;
})();if(cljs.core.truth_(inst_23816))
{var statearr_23836_23855 = state_23832__$1;(statearr_23836_23855[1] = 5);
} else
{var statearr_23837_23856 = state_23832__$1;(statearr_23837_23856[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 5))
{var state_23832__$1 = state_23832;if(cljs.core.truth_(close_QMARK_))
{var statearr_23838_23857 = state_23832__$1;(statearr_23838_23857[1] = 8);
} else
{var statearr_23839_23858 = state_23832__$1;(statearr_23839_23858[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 6))
{var inst_23815 = (state_23832[7]);var state_23832__$1 = state_23832;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23832__$1,11,to,inst_23815);
} else
{if((state_val_23833 === 7))
{var inst_23828 = (state_23832[2]);var state_23832__$1 = state_23832;var statearr_23840_23859 = state_23832__$1;(statearr_23840_23859[2] = inst_23828);
(statearr_23840_23859[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 8))
{var inst_23819 = cljs.core.async.close_BANG_(to);var state_23832__$1 = state_23832;var statearr_23841_23860 = state_23832__$1;(statearr_23841_23860[2] = inst_23819);
(statearr_23841_23860[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 9))
{var state_23832__$1 = state_23832;var statearr_23842_23861 = state_23832__$1;(statearr_23842_23861[2] = null);
(statearr_23842_23861[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 10))
{var inst_23822 = (state_23832[2]);var state_23832__$1 = state_23832;var statearr_23843_23862 = state_23832__$1;(statearr_23843_23862[2] = inst_23822);
(statearr_23843_23862[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23833 === 11))
{var inst_23825 = (state_23832[2]);var state_23832__$1 = (function (){var statearr_23844 = state_23832;(statearr_23844[8] = inst_23825);
return statearr_23844;
})();var statearr_23845_23863 = state_23832__$1;(statearr_23845_23863[2] = null);
(statearr_23845_23863[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_23849 = [null,null,null,null,null,null,null,null,null];(statearr_23849[0] = state_machine__5507__auto__);
(statearr_23849[1] = 1);
return statearr_23849;
});
var state_machine__5507__auto____1 = (function (state_23832){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23832);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23850){if((e23850 instanceof Object))
{var ex__5510__auto__ = e23850;var statearr_23851_23864 = state_23832;(statearr_23851_23864[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23832);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23865 = state_23832;
state_23832 = G__23865;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23832){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23852 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23853);
return statearr_23852;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23930){var state_val_23931 = (state_23930[1]);if((state_val_23931 === 1))
{var state_23930__$1 = state_23930;var statearr_23932_23953 = state_23930__$1;(statearr_23932_23953[2] = null);
(statearr_23932_23953[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 2))
{var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23930__$1,4,ch);
} else
{if((state_val_23931 === 3))
{var inst_23928 = (state_23930[2]);var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.return_chan(state_23930__$1,inst_23928);
} else
{if((state_val_23931 === 4))
{var inst_23911 = (state_23930[7]);var inst_23911__$1 = (state_23930[2]);var inst_23912 = (inst_23911__$1 == null);var state_23930__$1 = (function (){var statearr_23933 = state_23930;(statearr_23933[7] = inst_23911__$1);
return statearr_23933;
})();if(cljs.core.truth_(inst_23912))
{var statearr_23934_23954 = state_23930__$1;(statearr_23934_23954[1] = 5);
} else
{var statearr_23935_23955 = state_23930__$1;(statearr_23935_23955[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 5))
{var inst_23914 = cljs.core.async.close_BANG_(tc);var inst_23915 = cljs.core.async.close_BANG_(fc);var state_23930__$1 = (function (){var statearr_23936 = state_23930;(statearr_23936[8] = inst_23914);
return statearr_23936;
})();var statearr_23937_23956 = state_23930__$1;(statearr_23937_23956[2] = inst_23915);
(statearr_23937_23956[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 6))
{var inst_23911 = (state_23930[7]);var inst_23917 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23911) : p.call(null,inst_23911));var state_23930__$1 = state_23930;if(cljs.core.truth_(inst_23917))
{var statearr_23938_23957 = state_23930__$1;(statearr_23938_23957[1] = 9);
} else
{var statearr_23939_23958 = state_23930__$1;(statearr_23939_23958[1] = 10);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 7))
{var inst_23926 = (state_23930[2]);var state_23930__$1 = state_23930;var statearr_23940_23959 = state_23930__$1;(statearr_23940_23959[2] = inst_23926);
(statearr_23940_23959[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 8))
{var inst_23923 = (state_23930[2]);var state_23930__$1 = (function (){var statearr_23941 = state_23930;(statearr_23941[9] = inst_23923);
return statearr_23941;
})();var statearr_23942_23960 = state_23930__$1;(statearr_23942_23960[2] = null);
(statearr_23942_23960[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 9))
{var state_23930__$1 = state_23930;var statearr_23943_23961 = state_23930__$1;(statearr_23943_23961[2] = tc);
(statearr_23943_23961[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 10))
{var state_23930__$1 = state_23930;var statearr_23944_23962 = state_23930__$1;(statearr_23944_23962[2] = fc);
(statearr_23944_23962[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_23931 === 11))
{var inst_23911 = (state_23930[7]);var inst_23921 = (state_23930[2]);var state_23930__$1 = state_23930;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23930__$1,8,inst_23921,inst_23911);
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
var state_machine__5507__auto____0 = (function (){var statearr_23948 = [null,null,null,null,null,null,null,null,null,null];(statearr_23948[0] = state_machine__5507__auto__);
(statearr_23948[1] = 1);
return statearr_23948;
});
var state_machine__5507__auto____1 = (function (state_23930){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23930);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23949){if((e23949 instanceof Object))
{var ex__5510__auto__ = e23949;var statearr_23950_23963 = state_23930;(statearr_23950_23963[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23930);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e23949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__23964 = state_23930;
state_23930 = G__23964;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23951 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23952);
return statearr_23951;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24011){var state_val_24012 = (state_24011[1]);if((state_val_24012 === 7))
{var inst_24007 = (state_24011[2]);var state_24011__$1 = state_24011;var statearr_24013_24029 = state_24011__$1;(statearr_24013_24029[2] = inst_24007);
(statearr_24013_24029[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24012 === 6))
{var inst_24000 = (state_24011[7]);var inst_23997 = (state_24011[8]);var inst_24004 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23997,inst_24000) : f.call(null,inst_23997,inst_24000));var inst_23997__$1 = inst_24004;var state_24011__$1 = (function (){var statearr_24014 = state_24011;(statearr_24014[8] = inst_23997__$1);
return statearr_24014;
})();var statearr_24015_24030 = state_24011__$1;(statearr_24015_24030[2] = null);
(statearr_24015_24030[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24012 === 5))
{var inst_23997 = (state_24011[8]);var state_24011__$1 = state_24011;var statearr_24016_24031 = state_24011__$1;(statearr_24016_24031[2] = inst_23997);
(statearr_24016_24031[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24012 === 4))
{var inst_24000 = (state_24011[7]);var inst_24000__$1 = (state_24011[2]);var inst_24001 = (inst_24000__$1 == null);var state_24011__$1 = (function (){var statearr_24017 = state_24011;(statearr_24017[7] = inst_24000__$1);
return statearr_24017;
})();if(cljs.core.truth_(inst_24001))
{var statearr_24018_24032 = state_24011__$1;(statearr_24018_24032[1] = 5);
} else
{var statearr_24019_24033 = state_24011__$1;(statearr_24019_24033[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24012 === 3))
{var inst_24009 = (state_24011[2]);var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.return_chan(state_24011__$1,inst_24009);
} else
{if((state_val_24012 === 2))
{var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24011__$1,4,ch);
} else
{if((state_val_24012 === 1))
{var inst_23997 = init;var state_24011__$1 = (function (){var statearr_24020 = state_24011;(statearr_24020[8] = inst_23997);
return statearr_24020;
})();var statearr_24021_24034 = state_24011__$1;(statearr_24021_24034[2] = null);
(statearr_24021_24034[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24025 = [null,null,null,null,null,null,null,null,null];(statearr_24025[0] = state_machine__5507__auto__);
(statearr_24025[1] = 1);
return statearr_24025;
});
var state_machine__5507__auto____1 = (function (state_24011){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24011);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24026){if((e24026 instanceof Object))
{var ex__5510__auto__ = e24026;var statearr_24027_24035 = state_24011;(statearr_24027_24035[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24011);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24036 = state_24011;
state_24011 = G__24036;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24011){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24028 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24028;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24098){var state_val_24099 = (state_24098[1]);if((state_val_24099 === 1))
{var inst_24078 = cljs.core.seq(coll);var inst_24079 = inst_24078;var state_24098__$1 = (function (){var statearr_24100 = state_24098;(statearr_24100[7] = inst_24079);
return statearr_24100;
})();var statearr_24101_24119 = state_24098__$1;(statearr_24101_24119[2] = null);
(statearr_24101_24119[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 2))
{var inst_24079 = (state_24098[7]);var state_24098__$1 = state_24098;if(cljs.core.truth_(inst_24079))
{var statearr_24102_24120 = state_24098__$1;(statearr_24102_24120[1] = 4);
} else
{var statearr_24103_24121 = state_24098__$1;(statearr_24103_24121[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 3))
{var inst_24096 = (state_24098[2]);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.return_chan(state_24098__$1,inst_24096);
} else
{if((state_val_24099 === 4))
{var inst_24079 = (state_24098[7]);var inst_24082 = cljs.core.first(inst_24079);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24098__$1,7,ch,inst_24082);
} else
{if((state_val_24099 === 5))
{var state_24098__$1 = state_24098;if(cljs.core.truth_(close_QMARK_))
{var statearr_24104_24122 = state_24098__$1;(statearr_24104_24122[1] = 8);
} else
{var statearr_24105_24123 = state_24098__$1;(statearr_24105_24123[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 6))
{var inst_24094 = (state_24098[2]);var state_24098__$1 = state_24098;var statearr_24106_24124 = state_24098__$1;(statearr_24106_24124[2] = inst_24094);
(statearr_24106_24124[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 7))
{var inst_24079 = (state_24098[7]);var inst_24084 = (state_24098[2]);var inst_24085 = cljs.core.next(inst_24079);var inst_24079__$1 = inst_24085;var state_24098__$1 = (function (){var statearr_24107 = state_24098;(statearr_24107[8] = inst_24084);
(statearr_24107[7] = inst_24079__$1);
return statearr_24107;
})();var statearr_24108_24125 = state_24098__$1;(statearr_24108_24125[2] = null);
(statearr_24108_24125[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 8))
{var inst_24089 = cljs.core.async.close_BANG_(ch);var state_24098__$1 = state_24098;var statearr_24109_24126 = state_24098__$1;(statearr_24109_24126[2] = inst_24089);
(statearr_24109_24126[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 9))
{var state_24098__$1 = state_24098;var statearr_24110_24127 = state_24098__$1;(statearr_24110_24127[2] = null);
(statearr_24110_24127[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24099 === 10))
{var inst_24092 = (state_24098[2]);var state_24098__$1 = state_24098;var statearr_24111_24128 = state_24098__$1;(statearr_24111_24128[2] = inst_24092);
(statearr_24111_24128[1] = 6);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24115 = [null,null,null,null,null,null,null,null,null];(statearr_24115[0] = state_machine__5507__auto__);
(statearr_24115[1] = 1);
return statearr_24115;
});
var state_machine__5507__auto____1 = (function (state_24098){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24098);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24116){if((e24116 instanceof Object))
{var ex__5510__auto__ = e24116;var statearr_24117_24129 = state_24098;(statearr_24117_24129[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24098);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24130 = state_24098;
state_24098 = G__24130;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24098){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24118 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24118;
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
cljs.core.async.Mux = (function (){var obj24132 = {};return obj24132;
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
cljs.core.async.Mult = (function (){var obj24134 = {};return obj24134;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24358 = (function (cs,ch,mult,meta24359){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24359 = meta24359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24358.cljs$lang$type = true;
cljs.core.async.t24358.cljs$lang$ctorStr = "cljs.core.async/t24358";
cljs.core.async.t24358.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24358");
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24358.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24360){var self__ = this;
var _24360__$1 = this;return self__.meta24359;
});})(cs))
;
cljs.core.async.t24358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24360,meta24359__$1){var self__ = this;
var _24360__$1 = this;return (new cljs.core.async.t24358(self__.cs,self__.ch,self__.mult,meta24359__$1));
});})(cs))
;
cljs.core.async.__GT_t24358 = ((function (cs){
return (function __GT_t24358(cs__$1,ch__$1,mult__$1,meta24359){return (new cljs.core.async.t24358(cs__$1,ch__$1,mult__$1,meta24359));
});})(cs))
;
}
return (new cljs.core.async.t24358(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___24581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24495){var state_val_24496 = (state_24495[1]);if((state_val_24496 === 32))
{var inst_24363 = (state_24495[7]);var inst_24439 = (state_24495[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24495,31,Object,null,30);var inst_24446 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24439,inst_24363,done);var state_24495__$1 = state_24495;var statearr_24497_24582 = state_24495__$1;(statearr_24497_24582[2] = inst_24446);
cljs.core.async.impl.ioc_helpers.process_exception(state_24495__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 1))
{var state_24495__$1 = state_24495;var statearr_24498_24583 = state_24495__$1;(statearr_24498_24583[2] = null);
(statearr_24498_24583[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 33))
{var inst_24452 = (state_24495[9]);var inst_24454 = cljs.core.chunked_seq_QMARK_(inst_24452);var state_24495__$1 = state_24495;if(inst_24454)
{var statearr_24499_24584 = state_24495__$1;(statearr_24499_24584[1] = 36);
} else
{var statearr_24500_24585 = state_24495__$1;(statearr_24500_24585[1] = 37);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 2))
{var state_24495__$1 = state_24495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24495__$1,4,ch);
} else
{if((state_val_24496 === 34))
{var state_24495__$1 = state_24495;var statearr_24501_24586 = state_24495__$1;(statearr_24501_24586[2] = null);
(statearr_24501_24586[1] = 35);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 3))
{var inst_24493 = (state_24495[2]);var state_24495__$1 = state_24495;return cljs.core.async.impl.ioc_helpers.return_chan(state_24495__$1,inst_24493);
} else
{if((state_val_24496 === 35))
{var inst_24477 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24502_24587 = state_24495__$1;(statearr_24502_24587[2] = inst_24477);
(statearr_24502_24587[1] = 29);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 4))
{var inst_24363 = (state_24495[7]);var inst_24363__$1 = (state_24495[2]);var inst_24364 = (inst_24363__$1 == null);var state_24495__$1 = (function (){var statearr_24503 = state_24495;(statearr_24503[7] = inst_24363__$1);
return statearr_24503;
})();if(cljs.core.truth_(inst_24364))
{var statearr_24504_24588 = state_24495__$1;(statearr_24504_24588[1] = 5);
} else
{var statearr_24505_24589 = state_24495__$1;(statearr_24505_24589[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 36))
{var inst_24452 = (state_24495[9]);var inst_24456 = cljs.core.chunk_first(inst_24452);var inst_24457 = cljs.core.chunk_rest(inst_24452);var inst_24458 = cljs.core.count(inst_24456);var inst_24431 = inst_24457;var inst_24432 = inst_24456;var inst_24433 = inst_24458;var inst_24434 = 0;var state_24495__$1 = (function (){var statearr_24506 = state_24495;(statearr_24506[10] = inst_24434);
(statearr_24506[11] = inst_24433);
(statearr_24506[12] = inst_24432);
(statearr_24506[13] = inst_24431);
return statearr_24506;
})();var statearr_24507_24590 = state_24495__$1;(statearr_24507_24590[2] = null);
(statearr_24507_24590[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 5))
{var inst_24370 = cljs.core.deref(cs);var inst_24371 = cljs.core.seq(inst_24370);var inst_24372 = inst_24371;var inst_24373 = null;var inst_24374 = 0;var inst_24375 = 0;var state_24495__$1 = (function (){var statearr_24508 = state_24495;(statearr_24508[14] = inst_24375);
(statearr_24508[15] = inst_24373);
(statearr_24508[16] = inst_24374);
(statearr_24508[17] = inst_24372);
return statearr_24508;
})();var statearr_24509_24591 = state_24495__$1;(statearr_24509_24591[2] = null);
(statearr_24509_24591[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 37))
{var inst_24452 = (state_24495[9]);var inst_24461 = cljs.core.first(inst_24452);var state_24495__$1 = (function (){var statearr_24510 = state_24495;(statearr_24510[18] = inst_24461);
return statearr_24510;
})();var statearr_24511_24592 = state_24495__$1;(statearr_24511_24592[2] = null);
(statearr_24511_24592[1] = 41);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 6))
{var inst_24423 = (state_24495[19]);var inst_24422 = cljs.core.deref(cs);var inst_24423__$1 = cljs.core.keys(inst_24422);var inst_24424 = cljs.core.count(inst_24423__$1);var inst_24425 = cljs.core.reset_BANG_(dctr,inst_24424);var inst_24430 = cljs.core.seq(inst_24423__$1);var inst_24431 = inst_24430;var inst_24432 = null;var inst_24433 = 0;var inst_24434 = 0;var state_24495__$1 = (function (){var statearr_24512 = state_24495;(statearr_24512[20] = inst_24425);
(statearr_24512[10] = inst_24434);
(statearr_24512[11] = inst_24433);
(statearr_24512[12] = inst_24432);
(statearr_24512[13] = inst_24431);
(statearr_24512[19] = inst_24423__$1);
return statearr_24512;
})();var statearr_24513_24593 = state_24495__$1;(statearr_24513_24593[2] = null);
(statearr_24513_24593[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 38))
{var inst_24474 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24514_24594 = state_24495__$1;(statearr_24514_24594[2] = inst_24474);
(statearr_24514_24594[1] = 35);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 7))
{var inst_24491 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24515_24595 = state_24495__$1;(statearr_24515_24595[2] = inst_24491);
(statearr_24515_24595[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 39))
{var inst_24452 = (state_24495[9]);var inst_24470 = (state_24495[2]);var inst_24471 = cljs.core.next(inst_24452);var inst_24431 = inst_24471;var inst_24432 = null;var inst_24433 = 0;var inst_24434 = 0;var state_24495__$1 = (function (){var statearr_24516 = state_24495;(statearr_24516[10] = inst_24434);
(statearr_24516[11] = inst_24433);
(statearr_24516[12] = inst_24432);
(statearr_24516[13] = inst_24431);
(statearr_24516[21] = inst_24470);
return statearr_24516;
})();var statearr_24517_24596 = state_24495__$1;(statearr_24517_24596[2] = null);
(statearr_24517_24596[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 8))
{var inst_24375 = (state_24495[14]);var inst_24374 = (state_24495[16]);var inst_24377 = (inst_24375 < inst_24374);var inst_24378 = inst_24377;var state_24495__$1 = state_24495;if(cljs.core.truth_(inst_24378))
{var statearr_24518_24597 = state_24495__$1;(statearr_24518_24597[1] = 10);
} else
{var statearr_24519_24598 = state_24495__$1;(statearr_24519_24598[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 40))
{var inst_24461 = (state_24495[18]);var inst_24462 = (state_24495[2]);var inst_24463 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24461);var state_24495__$1 = (function (){var statearr_24520 = state_24495;(statearr_24520[22] = inst_24463);
(statearr_24520[23] = inst_24462);
return statearr_24520;
})();var statearr_24521_24599 = state_24495__$1;(statearr_24521_24599[2] = inst_24464);
cljs.core.async.impl.ioc_helpers.process_exception(state_24495__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 9))
{var inst_24420 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24522_24600 = state_24495__$1;(statearr_24522_24600[2] = inst_24420);
(statearr_24522_24600[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 41))
{var inst_24363 = (state_24495[7]);var inst_24461 = (state_24495[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24495,40,Object,null,39);var inst_24468 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24461,inst_24363,done);var state_24495__$1 = state_24495;var statearr_24523_24601 = state_24495__$1;(statearr_24523_24601[2] = inst_24468);
cljs.core.async.impl.ioc_helpers.process_exception(state_24495__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 10))
{var inst_24375 = (state_24495[14]);var inst_24373 = (state_24495[15]);var inst_24381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24373,inst_24375);var inst_24382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24381,0,null);var inst_24383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24381,1,null);var state_24495__$1 = (function (){var statearr_24524 = state_24495;(statearr_24524[24] = inst_24382);
return statearr_24524;
})();if(cljs.core.truth_(inst_24383))
{var statearr_24525_24602 = state_24495__$1;(statearr_24525_24602[1] = 13);
} else
{var statearr_24526_24603 = state_24495__$1;(statearr_24526_24603[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 42))
{var state_24495__$1 = state_24495;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24495__$1,45,dchan);
} else
{if((state_val_24496 === 11))
{var inst_24372 = (state_24495[17]);var inst_24392 = (state_24495[25]);var inst_24392__$1 = cljs.core.seq(inst_24372);var state_24495__$1 = (function (){var statearr_24527 = state_24495;(statearr_24527[25] = inst_24392__$1);
return statearr_24527;
})();if(inst_24392__$1)
{var statearr_24528_24604 = state_24495__$1;(statearr_24528_24604[1] = 16);
} else
{var statearr_24529_24605 = state_24495__$1;(statearr_24529_24605[1] = 17);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 43))
{var state_24495__$1 = state_24495;var statearr_24530_24606 = state_24495__$1;(statearr_24530_24606[2] = null);
(statearr_24530_24606[1] = 44);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 12))
{var inst_24418 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24531_24607 = state_24495__$1;(statearr_24531_24607[2] = inst_24418);
(statearr_24531_24607[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 44))
{var inst_24488 = (state_24495[2]);var state_24495__$1 = (function (){var statearr_24532 = state_24495;(statearr_24532[26] = inst_24488);
return statearr_24532;
})();var statearr_24533_24608 = state_24495__$1;(statearr_24533_24608[2] = null);
(statearr_24533_24608[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 13))
{var inst_24382 = (state_24495[24]);var inst_24385 = cljs.core.async.close_BANG_(inst_24382);var state_24495__$1 = state_24495;var statearr_24534_24609 = state_24495__$1;(statearr_24534_24609[2] = inst_24385);
(statearr_24534_24609[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 45))
{var inst_24485 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24538_24610 = state_24495__$1;(statearr_24538_24610[2] = inst_24485);
(statearr_24538_24610[1] = 44);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 14))
{var state_24495__$1 = state_24495;var statearr_24539_24611 = state_24495__$1;(statearr_24539_24611[2] = null);
(statearr_24539_24611[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 15))
{var inst_24375 = (state_24495[14]);var inst_24373 = (state_24495[15]);var inst_24374 = (state_24495[16]);var inst_24372 = (state_24495[17]);var inst_24388 = (state_24495[2]);var inst_24389 = (inst_24375 + 1);var tmp24535 = inst_24373;var tmp24536 = inst_24374;var tmp24537 = inst_24372;var inst_24372__$1 = tmp24537;var inst_24373__$1 = tmp24535;var inst_24374__$1 = tmp24536;var inst_24375__$1 = inst_24389;var state_24495__$1 = (function (){var statearr_24540 = state_24495;(statearr_24540[14] = inst_24375__$1);
(statearr_24540[15] = inst_24373__$1);
(statearr_24540[16] = inst_24374__$1);
(statearr_24540[17] = inst_24372__$1);
(statearr_24540[27] = inst_24388);
return statearr_24540;
})();var statearr_24541_24612 = state_24495__$1;(statearr_24541_24612[2] = null);
(statearr_24541_24612[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 16))
{var inst_24392 = (state_24495[25]);var inst_24394 = cljs.core.chunked_seq_QMARK_(inst_24392);var state_24495__$1 = state_24495;if(inst_24394)
{var statearr_24542_24613 = state_24495__$1;(statearr_24542_24613[1] = 19);
} else
{var statearr_24543_24614 = state_24495__$1;(statearr_24543_24614[1] = 20);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 17))
{var state_24495__$1 = state_24495;var statearr_24544_24615 = state_24495__$1;(statearr_24544_24615[2] = null);
(statearr_24544_24615[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 18))
{var inst_24416 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24545_24616 = state_24495__$1;(statearr_24545_24616[2] = inst_24416);
(statearr_24545_24616[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 19))
{var inst_24392 = (state_24495[25]);var inst_24396 = cljs.core.chunk_first(inst_24392);var inst_24397 = cljs.core.chunk_rest(inst_24392);var inst_24398 = cljs.core.count(inst_24396);var inst_24372 = inst_24397;var inst_24373 = inst_24396;var inst_24374 = inst_24398;var inst_24375 = 0;var state_24495__$1 = (function (){var statearr_24546 = state_24495;(statearr_24546[14] = inst_24375);
(statearr_24546[15] = inst_24373);
(statearr_24546[16] = inst_24374);
(statearr_24546[17] = inst_24372);
return statearr_24546;
})();var statearr_24547_24617 = state_24495__$1;(statearr_24547_24617[2] = null);
(statearr_24547_24617[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 20))
{var inst_24392 = (state_24495[25]);var inst_24402 = cljs.core.first(inst_24392);var inst_24403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24402,0,null);var inst_24404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24402,1,null);var state_24495__$1 = (function (){var statearr_24548 = state_24495;(statearr_24548[28] = inst_24403);
return statearr_24548;
})();if(cljs.core.truth_(inst_24404))
{var statearr_24549_24618 = state_24495__$1;(statearr_24549_24618[1] = 22);
} else
{var statearr_24550_24619 = state_24495__$1;(statearr_24550_24619[1] = 23);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 21))
{var inst_24413 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24551_24620 = state_24495__$1;(statearr_24551_24620[2] = inst_24413);
(statearr_24551_24620[1] = 18);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 22))
{var inst_24403 = (state_24495[28]);var inst_24406 = cljs.core.async.close_BANG_(inst_24403);var state_24495__$1 = state_24495;var statearr_24552_24621 = state_24495__$1;(statearr_24552_24621[2] = inst_24406);
(statearr_24552_24621[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 23))
{var state_24495__$1 = state_24495;var statearr_24553_24622 = state_24495__$1;(statearr_24553_24622[2] = null);
(statearr_24553_24622[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 24))
{var inst_24392 = (state_24495[25]);var inst_24409 = (state_24495[2]);var inst_24410 = cljs.core.next(inst_24392);var inst_24372 = inst_24410;var inst_24373 = null;var inst_24374 = 0;var inst_24375 = 0;var state_24495__$1 = (function (){var statearr_24554 = state_24495;(statearr_24554[14] = inst_24375);
(statearr_24554[15] = inst_24373);
(statearr_24554[16] = inst_24374);
(statearr_24554[17] = inst_24372);
(statearr_24554[29] = inst_24409);
return statearr_24554;
})();var statearr_24555_24623 = state_24495__$1;(statearr_24555_24623[2] = null);
(statearr_24555_24623[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 25))
{var inst_24434 = (state_24495[10]);var inst_24433 = (state_24495[11]);var inst_24436 = (inst_24434 < inst_24433);var inst_24437 = inst_24436;var state_24495__$1 = state_24495;if(cljs.core.truth_(inst_24437))
{var statearr_24556_24624 = state_24495__$1;(statearr_24556_24624[1] = 27);
} else
{var statearr_24557_24625 = state_24495__$1;(statearr_24557_24625[1] = 28);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 26))
{var inst_24423 = (state_24495[19]);var inst_24481 = (state_24495[2]);var inst_24482 = cljs.core.seq(inst_24423);var state_24495__$1 = (function (){var statearr_24558 = state_24495;(statearr_24558[30] = inst_24481);
return statearr_24558;
})();if(inst_24482)
{var statearr_24559_24626 = state_24495__$1;(statearr_24559_24626[1] = 42);
} else
{var statearr_24560_24627 = state_24495__$1;(statearr_24560_24627[1] = 43);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 27))
{var inst_24434 = (state_24495[10]);var inst_24432 = (state_24495[12]);var inst_24439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24432,inst_24434);var state_24495__$1 = (function (){var statearr_24561 = state_24495;(statearr_24561[8] = inst_24439);
return statearr_24561;
})();var statearr_24562_24628 = state_24495__$1;(statearr_24562_24628[2] = null);
(statearr_24562_24628[1] = 32);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 28))
{var inst_24452 = (state_24495[9]);var inst_24431 = (state_24495[13]);var inst_24452__$1 = cljs.core.seq(inst_24431);var state_24495__$1 = (function (){var statearr_24566 = state_24495;(statearr_24566[9] = inst_24452__$1);
return statearr_24566;
})();if(inst_24452__$1)
{var statearr_24567_24629 = state_24495__$1;(statearr_24567_24629[1] = 33);
} else
{var statearr_24568_24630 = state_24495__$1;(statearr_24568_24630[1] = 34);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 29))
{var inst_24479 = (state_24495[2]);var state_24495__$1 = state_24495;var statearr_24569_24631 = state_24495__$1;(statearr_24569_24631[2] = inst_24479);
(statearr_24569_24631[1] = 26);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 30))
{var inst_24434 = (state_24495[10]);var inst_24433 = (state_24495[11]);var inst_24432 = (state_24495[12]);var inst_24431 = (state_24495[13]);var inst_24448 = (state_24495[2]);var inst_24449 = (inst_24434 + 1);var tmp24563 = inst_24433;var tmp24564 = inst_24432;var tmp24565 = inst_24431;var inst_24431__$1 = tmp24565;var inst_24432__$1 = tmp24564;var inst_24433__$1 = tmp24563;var inst_24434__$1 = inst_24449;var state_24495__$1 = (function (){var statearr_24570 = state_24495;(statearr_24570[31] = inst_24448);
(statearr_24570[10] = inst_24434__$1);
(statearr_24570[11] = inst_24433__$1);
(statearr_24570[12] = inst_24432__$1);
(statearr_24570[13] = inst_24431__$1);
return statearr_24570;
})();var statearr_24571_24632 = state_24495__$1;(statearr_24571_24632[2] = null);
(statearr_24571_24632[1] = 25);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24496 === 31))
{var inst_24439 = (state_24495[8]);var inst_24440 = (state_24495[2]);var inst_24441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24442 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24439);var state_24495__$1 = (function (){var statearr_24572 = state_24495;(statearr_24572[32] = inst_24441);
(statearr_24572[33] = inst_24440);
return statearr_24572;
})();var statearr_24573_24633 = state_24495__$1;(statearr_24573_24633[2] = inst_24442);
cljs.core.async.impl.ioc_helpers.process_exception(state_24495__$1);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24577[0] = state_machine__5507__auto__);
(statearr_24577[1] = 1);
return statearr_24577;
});
var state_machine__5507__auto____1 = (function (state_24495){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24495);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24578){if((e24578 instanceof Object))
{var ex__5510__auto__ = e24578;var statearr_24579_24634 = state_24495;(statearr_24579_24634[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24495);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24635 = state_24495;
state_24495 = G__24635;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24495){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24580 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24581);
return statearr_24580;
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
cljs.core.async.Mix = (function (){var obj24637 = {};return obj24637;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,null,cljs.core.constant$keyword$224,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$225);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$224);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$225,chs);var pauses = pick(cljs.core.constant$keyword$223,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$226,solos,cljs.core.constant$keyword$227,pick(cljs.core.constant$keyword$224,chs),cljs.core.constant$keyword$228,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$223)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24747 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24747 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24748){
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
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24747.cljs$lang$type = true;
cljs.core.async.t24747.cljs$lang$ctorStr = "cljs.core.async/t24747";
cljs.core.async.t24747.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24747");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24747.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24749){var self__ = this;
var _24749__$1 = this;return self__.meta24748;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24749,meta24748__$1){var self__ = this;
var _24749__$1 = this;return (new cljs.core.async.t24747(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24748__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24747 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24747(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24748){return (new cljs.core.async.t24747(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24748));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24747(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24814){var state_val_24815 = (state_24814[1]);if((state_val_24815 === 1))
{var inst_24753 = (state_24814[7]);var inst_24753__$1 = calc_state();var inst_24754 = cljs.core.seq_QMARK_(inst_24753__$1);var state_24814__$1 = (function (){var statearr_24816 = state_24814;(statearr_24816[7] = inst_24753__$1);
return statearr_24816;
})();if(inst_24754)
{var statearr_24817_24857 = state_24814__$1;(statearr_24817_24857[1] = 2);
} else
{var statearr_24818_24858 = state_24814__$1;(statearr_24818_24858[1] = 3);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 2))
{var inst_24753 = (state_24814[7]);var inst_24756 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24753);var state_24814__$1 = state_24814;var statearr_24819_24859 = state_24814__$1;(statearr_24819_24859[2] = inst_24756);
(statearr_24819_24859[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 3))
{var inst_24753 = (state_24814[7]);var state_24814__$1 = state_24814;var statearr_24820_24860 = state_24814__$1;(statearr_24820_24860[2] = inst_24753);
(statearr_24820_24860[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 4))
{var inst_24753 = (state_24814[7]);var inst_24759 = (state_24814[2]);var inst_24760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24759,cljs.core.constant$keyword$228);var inst_24761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24759,cljs.core.constant$keyword$227);var inst_24762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24759,cljs.core.constant$keyword$226);var inst_24763 = inst_24753;var state_24814__$1 = (function (){var statearr_24821 = state_24814;(statearr_24821[8] = inst_24760);
(statearr_24821[9] = inst_24761);
(statearr_24821[10] = inst_24763);
(statearr_24821[11] = inst_24762);
return statearr_24821;
})();var statearr_24822_24861 = state_24814__$1;(statearr_24822_24861[2] = null);
(statearr_24822_24861[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 5))
{var inst_24763 = (state_24814[10]);var inst_24766 = cljs.core.seq_QMARK_(inst_24763);var state_24814__$1 = state_24814;if(inst_24766)
{var statearr_24823_24862 = state_24814__$1;(statearr_24823_24862[1] = 7);
} else
{var statearr_24824_24863 = state_24814__$1;(statearr_24824_24863[1] = 8);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 6))
{var inst_24812 = (state_24814[2]);var state_24814__$1 = state_24814;return cljs.core.async.impl.ioc_helpers.return_chan(state_24814__$1,inst_24812);
} else
{if((state_val_24815 === 7))
{var inst_24763 = (state_24814[10]);var inst_24768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24763);var state_24814__$1 = state_24814;var statearr_24825_24864 = state_24814__$1;(statearr_24825_24864[2] = inst_24768);
(statearr_24825_24864[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 8))
{var inst_24763 = (state_24814[10]);var state_24814__$1 = state_24814;var statearr_24826_24865 = state_24814__$1;(statearr_24826_24865[2] = inst_24763);
(statearr_24826_24865[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 9))
{var inst_24771 = (state_24814[12]);var inst_24771__$1 = (state_24814[2]);var inst_24772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24771__$1,cljs.core.constant$keyword$228);var inst_24773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24771__$1,cljs.core.constant$keyword$227);var inst_24774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24771__$1,cljs.core.constant$keyword$226);var state_24814__$1 = (function (){var statearr_24827 = state_24814;(statearr_24827[13] = inst_24774);
(statearr_24827[14] = inst_24773);
(statearr_24827[12] = inst_24771__$1);
return statearr_24827;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24814__$1,10,inst_24772);
} else
{if((state_val_24815 === 10))
{var inst_24778 = (state_24814[15]);var inst_24779 = (state_24814[16]);var inst_24777 = (state_24814[2]);var inst_24778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24777,0,null);var inst_24779__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24777,1,null);var inst_24780 = (inst_24778__$1 == null);var inst_24781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24779__$1,change);var inst_24782 = (inst_24780) || (inst_24781);var state_24814__$1 = (function (){var statearr_24828 = state_24814;(statearr_24828[15] = inst_24778__$1);
(statearr_24828[16] = inst_24779__$1);
return statearr_24828;
})();if(cljs.core.truth_(inst_24782))
{var statearr_24829_24866 = state_24814__$1;(statearr_24829_24866[1] = 11);
} else
{var statearr_24830_24867 = state_24814__$1;(statearr_24830_24867[1] = 12);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 11))
{var inst_24778 = (state_24814[15]);var inst_24784 = (inst_24778 == null);var state_24814__$1 = state_24814;if(cljs.core.truth_(inst_24784))
{var statearr_24831_24868 = state_24814__$1;(statearr_24831_24868[1] = 14);
} else
{var statearr_24832_24869 = state_24814__$1;(statearr_24832_24869[1] = 15);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 12))
{var inst_24774 = (state_24814[13]);var inst_24793 = (state_24814[17]);var inst_24779 = (state_24814[16]);var inst_24793__$1 = (inst_24774.cljs$core$IFn$_invoke$arity$1 ? inst_24774.cljs$core$IFn$_invoke$arity$1(inst_24779) : inst_24774.call(null,inst_24779));var state_24814__$1 = (function (){var statearr_24833 = state_24814;(statearr_24833[17] = inst_24793__$1);
return statearr_24833;
})();if(cljs.core.truth_(inst_24793__$1))
{var statearr_24834_24870 = state_24814__$1;(statearr_24834_24870[1] = 17);
} else
{var statearr_24835_24871 = state_24814__$1;(statearr_24835_24871[1] = 18);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 13))
{var inst_24810 = (state_24814[2]);var state_24814__$1 = state_24814;var statearr_24836_24872 = state_24814__$1;(statearr_24836_24872[2] = inst_24810);
(statearr_24836_24872[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 14))
{var inst_24779 = (state_24814[16]);var inst_24786 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24779);var state_24814__$1 = state_24814;var statearr_24837_24873 = state_24814__$1;(statearr_24837_24873[2] = inst_24786);
(statearr_24837_24873[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 15))
{var state_24814__$1 = state_24814;var statearr_24838_24874 = state_24814__$1;(statearr_24838_24874[2] = null);
(statearr_24838_24874[1] = 16);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 16))
{var inst_24789 = (state_24814[2]);var inst_24790 = calc_state();var inst_24763 = inst_24790;var state_24814__$1 = (function (){var statearr_24839 = state_24814;(statearr_24839[10] = inst_24763);
(statearr_24839[18] = inst_24789);
return statearr_24839;
})();var statearr_24840_24875 = state_24814__$1;(statearr_24840_24875[2] = null);
(statearr_24840_24875[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 17))
{var inst_24793 = (state_24814[17]);var state_24814__$1 = state_24814;var statearr_24841_24876 = state_24814__$1;(statearr_24841_24876[2] = inst_24793);
(statearr_24841_24876[1] = 19);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 18))
{var inst_24774 = (state_24814[13]);var inst_24773 = (state_24814[14]);var inst_24779 = (state_24814[16]);var inst_24796 = cljs.core.empty_QMARK_(inst_24774);var inst_24797 = (inst_24773.cljs$core$IFn$_invoke$arity$1 ? inst_24773.cljs$core$IFn$_invoke$arity$1(inst_24779) : inst_24773.call(null,inst_24779));var inst_24798 = cljs.core.not(inst_24797);var inst_24799 = (inst_24796) && (inst_24798);var state_24814__$1 = state_24814;var statearr_24842_24877 = state_24814__$1;(statearr_24842_24877[2] = inst_24799);
(statearr_24842_24877[1] = 19);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 19))
{var inst_24801 = (state_24814[2]);var state_24814__$1 = state_24814;if(cljs.core.truth_(inst_24801))
{var statearr_24843_24878 = state_24814__$1;(statearr_24843_24878[1] = 20);
} else
{var statearr_24844_24879 = state_24814__$1;(statearr_24844_24879[1] = 21);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 20))
{var inst_24778 = (state_24814[15]);var state_24814__$1 = state_24814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24814__$1,23,out,inst_24778);
} else
{if((state_val_24815 === 21))
{var state_24814__$1 = state_24814;var statearr_24845_24880 = state_24814__$1;(statearr_24845_24880[2] = null);
(statearr_24845_24880[1] = 22);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 22))
{var inst_24771 = (state_24814[12]);var inst_24807 = (state_24814[2]);var inst_24763 = inst_24771;var state_24814__$1 = (function (){var statearr_24846 = state_24814;(statearr_24846[10] = inst_24763);
(statearr_24846[19] = inst_24807);
return statearr_24846;
})();var statearr_24847_24881 = state_24814__$1;(statearr_24847_24881[2] = null);
(statearr_24847_24881[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_24815 === 23))
{var inst_24804 = (state_24814[2]);var state_24814__$1 = state_24814;var statearr_24848_24882 = state_24814__$1;(statearr_24848_24882[2] = inst_24804);
(statearr_24848_24882[1] = 22);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_24852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24852[0] = state_machine__5507__auto__);
(statearr_24852[1] = 1);
return statearr_24852;
});
var state_machine__5507__auto____1 = (function (state_24814){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24814);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object))
{var ex__5510__auto__ = e24853;var statearr_24854_24883 = state_24814;(statearr_24854_24883[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24814);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e24853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__24884 = state_24814;
state_24814 = G__24884;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24814){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24855 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24856);
return statearr_24855;
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
cljs.core.async.Pub = (function (){var obj24886 = {};return obj24886;
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
return (function (p1__24887_SHARP_){if(cljs.core.truth_((p1__24887_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24887_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24887_SHARP_.call(null,topic))))
{return p1__24887_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24887_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25012 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25013){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25013 = meta25013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25012.cljs$lang$type = true;
cljs.core.async.t25012.cljs$lang$ctorStr = "cljs.core.async/t25012";
cljs.core.async.t25012.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25012");
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25014){var self__ = this;
var _25014__$1 = this;return self__.meta25013;
});})(mults,ensure_mult))
;
cljs.core.async.t25012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25014,meta25013__$1){var self__ = this;
var _25014__$1 = this;return (new cljs.core.async.t25012(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25013__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25012 = ((function (mults,ensure_mult){
return (function __GT_t25012(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25013){return (new cljs.core.async.t25012(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25013));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25012(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25088){var state_val_25089 = (state_25088[1]);if((state_val_25089 === 1))
{var state_25088__$1 = state_25088;var statearr_25090_25137 = state_25088__$1;(statearr_25090_25137[2] = null);
(statearr_25090_25137[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 2))
{var state_25088__$1 = state_25088;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25088__$1,4,ch);
} else
{if((state_val_25089 === 3))
{var inst_25086 = (state_25088[2]);var state_25088__$1 = state_25088;return cljs.core.async.impl.ioc_helpers.return_chan(state_25088__$1,inst_25086);
} else
{if((state_val_25089 === 4))
{var inst_25017 = (state_25088[7]);var inst_25017__$1 = (state_25088[2]);var inst_25018 = (inst_25017__$1 == null);var state_25088__$1 = (function (){var statearr_25091 = state_25088;(statearr_25091[7] = inst_25017__$1);
return statearr_25091;
})();if(cljs.core.truth_(inst_25018))
{var statearr_25092_25138 = state_25088__$1;(statearr_25092_25138[1] = 5);
} else
{var statearr_25093_25139 = state_25088__$1;(statearr_25093_25139[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 5))
{var inst_25024 = cljs.core.deref(mults);var inst_25025 = cljs.core.vals(inst_25024);var inst_25026 = cljs.core.seq(inst_25025);var inst_25027 = inst_25026;var inst_25028 = null;var inst_25029 = 0;var inst_25030 = 0;var state_25088__$1 = (function (){var statearr_25094 = state_25088;(statearr_25094[8] = inst_25029);
(statearr_25094[9] = inst_25028);
(statearr_25094[10] = inst_25027);
(statearr_25094[11] = inst_25030);
return statearr_25094;
})();var statearr_25095_25140 = state_25088__$1;(statearr_25095_25140[2] = null);
(statearr_25095_25140[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 6))
{var inst_25067 = (state_25088[12]);var inst_25017 = (state_25088[7]);var inst_25065 = (state_25088[13]);var inst_25065__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25017) : topic_fn.call(null,inst_25017));var inst_25066 = cljs.core.deref(mults);var inst_25067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25066,inst_25065__$1);var state_25088__$1 = (function (){var statearr_25096 = state_25088;(statearr_25096[12] = inst_25067__$1);
(statearr_25096[13] = inst_25065__$1);
return statearr_25096;
})();if(cljs.core.truth_(inst_25067__$1))
{var statearr_25097_25141 = state_25088__$1;(statearr_25097_25141[1] = 19);
} else
{var statearr_25098_25142 = state_25088__$1;(statearr_25098_25142[1] = 20);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 7))
{var inst_25084 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25099_25143 = state_25088__$1;(statearr_25099_25143[2] = inst_25084);
(statearr_25099_25143[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 8))
{var inst_25029 = (state_25088[8]);var inst_25030 = (state_25088[11]);var inst_25032 = (inst_25030 < inst_25029);var inst_25033 = inst_25032;var state_25088__$1 = state_25088;if(cljs.core.truth_(inst_25033))
{var statearr_25103_25144 = state_25088__$1;(statearr_25103_25144[1] = 10);
} else
{var statearr_25104_25145 = state_25088__$1;(statearr_25104_25145[1] = 11);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 9))
{var inst_25063 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25105_25146 = state_25088__$1;(statearr_25105_25146[2] = inst_25063);
(statearr_25105_25146[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 10))
{var inst_25029 = (state_25088[8]);var inst_25028 = (state_25088[9]);var inst_25027 = (state_25088[10]);var inst_25030 = (state_25088[11]);var inst_25035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25028,inst_25030);var inst_25036 = cljs.core.async.muxch_STAR_(inst_25035);var inst_25037 = cljs.core.async.close_BANG_(inst_25036);var inst_25038 = (inst_25030 + 1);var tmp25100 = inst_25029;var tmp25101 = inst_25028;var tmp25102 = inst_25027;var inst_25027__$1 = tmp25102;var inst_25028__$1 = tmp25101;var inst_25029__$1 = tmp25100;var inst_25030__$1 = inst_25038;var state_25088__$1 = (function (){var statearr_25106 = state_25088;(statearr_25106[8] = inst_25029__$1);
(statearr_25106[9] = inst_25028__$1);
(statearr_25106[10] = inst_25027__$1);
(statearr_25106[11] = inst_25030__$1);
(statearr_25106[14] = inst_25037);
return statearr_25106;
})();var statearr_25107_25147 = state_25088__$1;(statearr_25107_25147[2] = null);
(statearr_25107_25147[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 11))
{var inst_25027 = (state_25088[10]);var inst_25041 = (state_25088[15]);var inst_25041__$1 = cljs.core.seq(inst_25027);var state_25088__$1 = (function (){var statearr_25108 = state_25088;(statearr_25108[15] = inst_25041__$1);
return statearr_25108;
})();if(inst_25041__$1)
{var statearr_25109_25148 = state_25088__$1;(statearr_25109_25148[1] = 13);
} else
{var statearr_25110_25149 = state_25088__$1;(statearr_25110_25149[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 12))
{var inst_25061 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25111_25150 = state_25088__$1;(statearr_25111_25150[2] = inst_25061);
(statearr_25111_25150[1] = 9);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 13))
{var inst_25041 = (state_25088[15]);var inst_25043 = cljs.core.chunked_seq_QMARK_(inst_25041);var state_25088__$1 = state_25088;if(inst_25043)
{var statearr_25112_25151 = state_25088__$1;(statearr_25112_25151[1] = 16);
} else
{var statearr_25113_25152 = state_25088__$1;(statearr_25113_25152[1] = 17);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 14))
{var state_25088__$1 = state_25088;var statearr_25114_25153 = state_25088__$1;(statearr_25114_25153[2] = null);
(statearr_25114_25153[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 15))
{var inst_25059 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25115_25154 = state_25088__$1;(statearr_25115_25154[2] = inst_25059);
(statearr_25115_25154[1] = 12);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 16))
{var inst_25041 = (state_25088[15]);var inst_25045 = cljs.core.chunk_first(inst_25041);var inst_25046 = cljs.core.chunk_rest(inst_25041);var inst_25047 = cljs.core.count(inst_25045);var inst_25027 = inst_25046;var inst_25028 = inst_25045;var inst_25029 = inst_25047;var inst_25030 = 0;var state_25088__$1 = (function (){var statearr_25116 = state_25088;(statearr_25116[8] = inst_25029);
(statearr_25116[9] = inst_25028);
(statearr_25116[10] = inst_25027);
(statearr_25116[11] = inst_25030);
return statearr_25116;
})();var statearr_25117_25155 = state_25088__$1;(statearr_25117_25155[2] = null);
(statearr_25117_25155[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 17))
{var inst_25041 = (state_25088[15]);var inst_25050 = cljs.core.first(inst_25041);var inst_25051 = cljs.core.async.muxch_STAR_(inst_25050);var inst_25052 = cljs.core.async.close_BANG_(inst_25051);var inst_25053 = cljs.core.next(inst_25041);var inst_25027 = inst_25053;var inst_25028 = null;var inst_25029 = 0;var inst_25030 = 0;var state_25088__$1 = (function (){var statearr_25118 = state_25088;(statearr_25118[16] = inst_25052);
(statearr_25118[8] = inst_25029);
(statearr_25118[9] = inst_25028);
(statearr_25118[10] = inst_25027);
(statearr_25118[11] = inst_25030);
return statearr_25118;
})();var statearr_25119_25156 = state_25088__$1;(statearr_25119_25156[2] = null);
(statearr_25119_25156[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 18))
{var inst_25056 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25120_25157 = state_25088__$1;(statearr_25120_25157[2] = inst_25056);
(statearr_25120_25157[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 19))
{var state_25088__$1 = state_25088;var statearr_25121_25158 = state_25088__$1;(statearr_25121_25158[2] = null);
(statearr_25121_25158[1] = 24);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 20))
{var state_25088__$1 = state_25088;var statearr_25122_25159 = state_25088__$1;(statearr_25122_25159[2] = null);
(statearr_25122_25159[1] = 21);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 21))
{var inst_25081 = (state_25088[2]);var state_25088__$1 = (function (){var statearr_25123 = state_25088;(statearr_25123[17] = inst_25081);
return statearr_25123;
})();var statearr_25124_25160 = state_25088__$1;(statearr_25124_25160[2] = null);
(statearr_25124_25160[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 22))
{var inst_25078 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25125_25161 = state_25088__$1;(statearr_25125_25161[2] = inst_25078);
(statearr_25125_25161[1] = 21);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 23))
{var inst_25065 = (state_25088[13]);var inst_25069 = (state_25088[2]);var inst_25070 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25065);var state_25088__$1 = (function (){var statearr_25126 = state_25088;(statearr_25126[18] = inst_25069);
return statearr_25126;
})();var statearr_25127_25162 = state_25088__$1;(statearr_25127_25162[2] = inst_25070);
cljs.core.async.impl.ioc_helpers.process_exception(state_25088__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25089 === 24))
{var inst_25067 = (state_25088[12]);var inst_25017 = (state_25088[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25088,23,Object,null,22);var inst_25074 = cljs.core.async.muxch_STAR_(inst_25067);var state_25088__$1 = state_25088;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25088__$1,25,inst_25074,inst_25017);
} else
{if((state_val_25089 === 25))
{var inst_25076 = (state_25088[2]);var state_25088__$1 = state_25088;var statearr_25128_25163 = state_25088__$1;(statearr_25128_25163[2] = inst_25076);
cljs.core.async.impl.ioc_helpers.process_exception(state_25088__$1);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25132[0] = state_machine__5507__auto__);
(statearr_25132[1] = 1);
return statearr_25132;
});
var state_machine__5507__auto____1 = (function (state_25088){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25088);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25133){if((e25133 instanceof Object))
{var ex__5510__auto__ = e25133;var statearr_25134_25164 = state_25088;(statearr_25134_25164[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25088);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25165 = state_25088;
state_25088 = G__25165;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25088){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25135 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25136);
return statearr_25135;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___25302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25272){var state_val_25273 = (state_25272[1]);if((state_val_25273 === 1))
{var state_25272__$1 = state_25272;var statearr_25274_25303 = state_25272__$1;(statearr_25274_25303[2] = null);
(statearr_25274_25303[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 2))
{var inst_25235 = cljs.core.reset_BANG_(dctr,cnt);var inst_25236 = 0;var state_25272__$1 = (function (){var statearr_25275 = state_25272;(statearr_25275[7] = inst_25236);
(statearr_25275[8] = inst_25235);
return statearr_25275;
})();var statearr_25276_25304 = state_25272__$1;(statearr_25276_25304[2] = null);
(statearr_25276_25304[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 3))
{var inst_25270 = (state_25272[2]);var state_25272__$1 = state_25272;return cljs.core.async.impl.ioc_helpers.return_chan(state_25272__$1,inst_25270);
} else
{if((state_val_25273 === 4))
{var inst_25236 = (state_25272[7]);var inst_25238 = (inst_25236 < cnt);var state_25272__$1 = state_25272;if(cljs.core.truth_(inst_25238))
{var statearr_25277_25305 = state_25272__$1;(statearr_25277_25305[1] = 6);
} else
{var statearr_25278_25306 = state_25272__$1;(statearr_25278_25306[1] = 7);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 5))
{var inst_25256 = (state_25272[2]);var state_25272__$1 = (function (){var statearr_25279 = state_25272;(statearr_25279[9] = inst_25256);
return statearr_25279;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25272__$1,12,dchan);
} else
{if((state_val_25273 === 6))
{var state_25272__$1 = state_25272;var statearr_25280_25307 = state_25272__$1;(statearr_25280_25307[2] = null);
(statearr_25280_25307[1] = 11);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 7))
{var state_25272__$1 = state_25272;var statearr_25281_25308 = state_25272__$1;(statearr_25281_25308[2] = null);
(statearr_25281_25308[1] = 8);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 8))
{var inst_25254 = (state_25272[2]);var state_25272__$1 = state_25272;var statearr_25282_25309 = state_25272__$1;(statearr_25282_25309[2] = inst_25254);
(statearr_25282_25309[1] = 5);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 9))
{var inst_25236 = (state_25272[7]);var inst_25249 = (state_25272[2]);var inst_25250 = (inst_25236 + 1);var inst_25236__$1 = inst_25250;var state_25272__$1 = (function (){var statearr_25283 = state_25272;(statearr_25283[10] = inst_25249);
(statearr_25283[7] = inst_25236__$1);
return statearr_25283;
})();var statearr_25284_25310 = state_25272__$1;(statearr_25284_25310[2] = null);
(statearr_25284_25310[1] = 4);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 10))
{var inst_25240 = (state_25272[2]);var inst_25241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25272__$1 = (function (){var statearr_25285 = state_25272;(statearr_25285[11] = inst_25240);
return statearr_25285;
})();var statearr_25286_25311 = state_25272__$1;(statearr_25286_25311[2] = inst_25241);
cljs.core.async.impl.ioc_helpers.process_exception(state_25272__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 11))
{var inst_25236 = (state_25272[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25272,10,Object,null,9);var inst_25245 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25236) : chs__$1.call(null,inst_25236));var inst_25246 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25236) : done.call(null,inst_25236));var inst_25247 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25245,inst_25246);var state_25272__$1 = state_25272;var statearr_25287_25312 = state_25272__$1;(statearr_25287_25312[2] = inst_25247);
cljs.core.async.impl.ioc_helpers.process_exception(state_25272__$1);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 12))
{var inst_25258 = (state_25272[12]);var inst_25258__$1 = (state_25272[2]);var inst_25259 = cljs.core.some(cljs.core.nil_QMARK_,inst_25258__$1);var state_25272__$1 = (function (){var statearr_25288 = state_25272;(statearr_25288[12] = inst_25258__$1);
return statearr_25288;
})();if(cljs.core.truth_(inst_25259))
{var statearr_25289_25313 = state_25272__$1;(statearr_25289_25313[1] = 13);
} else
{var statearr_25290_25314 = state_25272__$1;(statearr_25290_25314[1] = 14);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 13))
{var inst_25261 = cljs.core.async.close_BANG_(out);var state_25272__$1 = state_25272;var statearr_25291_25315 = state_25272__$1;(statearr_25291_25315[2] = inst_25261);
(statearr_25291_25315[1] = 15);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 14))
{var inst_25258 = (state_25272[12]);var inst_25263 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25258);var state_25272__$1 = state_25272;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25272__$1,16,out,inst_25263);
} else
{if((state_val_25273 === 15))
{var inst_25268 = (state_25272[2]);var state_25272__$1 = state_25272;var statearr_25292_25316 = state_25272__$1;(statearr_25292_25316[2] = inst_25268);
(statearr_25292_25316[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25273 === 16))
{var inst_25265 = (state_25272[2]);var state_25272__$1 = (function (){var statearr_25293 = state_25272;(statearr_25293[13] = inst_25265);
return statearr_25293;
})();var statearr_25294_25317 = state_25272__$1;(statearr_25294_25317[2] = null);
(statearr_25294_25317[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25298[0] = state_machine__5507__auto__);
(statearr_25298[1] = 1);
return statearr_25298;
});
var state_machine__5507__auto____1 = (function (state_25272){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25272);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25299){if((e25299 instanceof Object))
{var ex__5510__auto__ = e25299;var statearr_25300_25318 = state_25272;(statearr_25300_25318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25272);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25319 = state_25272;
state_25272 = G__25319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25272){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25301 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25302);
return statearr_25301;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25403){var state_val_25404 = (state_25403[1]);if((state_val_25404 === 1))
{var inst_25374 = cljs.core.vec(chs);var inst_25375 = inst_25374;var state_25403__$1 = (function (){var statearr_25405 = state_25403;(statearr_25405[7] = inst_25375);
return statearr_25405;
})();var statearr_25406_25428 = state_25403__$1;(statearr_25406_25428[2] = null);
(statearr_25406_25428[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 2))
{var inst_25375 = (state_25403[7]);var inst_25377 = cljs.core.count(inst_25375);var inst_25378 = (inst_25377 > 0);var state_25403__$1 = state_25403;if(cljs.core.truth_(inst_25378))
{var statearr_25407_25429 = state_25403__$1;(statearr_25407_25429[1] = 4);
} else
{var statearr_25408_25430 = state_25403__$1;(statearr_25408_25430[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 3))
{var inst_25401 = (state_25403[2]);var state_25403__$1 = state_25403;return cljs.core.async.impl.ioc_helpers.return_chan(state_25403__$1,inst_25401);
} else
{if((state_val_25404 === 4))
{var inst_25375 = (state_25403[7]);var state_25403__$1 = state_25403;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25403__$1,7,inst_25375);
} else
{if((state_val_25404 === 5))
{var inst_25397 = cljs.core.async.close_BANG_(out);var state_25403__$1 = state_25403;var statearr_25409_25431 = state_25403__$1;(statearr_25409_25431[2] = inst_25397);
(statearr_25409_25431[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 6))
{var inst_25399 = (state_25403[2]);var state_25403__$1 = state_25403;var statearr_25410_25432 = state_25403__$1;(statearr_25410_25432[2] = inst_25399);
(statearr_25410_25432[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 7))
{var inst_25382 = (state_25403[8]);var inst_25383 = (state_25403[9]);var inst_25382__$1 = (state_25403[2]);var inst_25383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25382__$1,0,null);var inst_25384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25382__$1,1,null);var inst_25385 = (inst_25383__$1 == null);var state_25403__$1 = (function (){var statearr_25411 = state_25403;(statearr_25411[8] = inst_25382__$1);
(statearr_25411[10] = inst_25384);
(statearr_25411[9] = inst_25383__$1);
return statearr_25411;
})();if(cljs.core.truth_(inst_25385))
{var statearr_25412_25433 = state_25403__$1;(statearr_25412_25433[1] = 8);
} else
{var statearr_25413_25434 = state_25403__$1;(statearr_25413_25434[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 8))
{var inst_25375 = (state_25403[7]);var inst_25382 = (state_25403[8]);var inst_25384 = (state_25403[10]);var inst_25383 = (state_25403[9]);var inst_25387 = (function (){var c = inst_25384;var v = inst_25383;var vec__25380 = inst_25382;var cs = inst_25375;return ((function (c,v,vec__25380,cs,inst_25375,inst_25382,inst_25384,inst_25383,state_val_25404){
return (function (p1__25320_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25320_SHARP_);
});
;})(c,v,vec__25380,cs,inst_25375,inst_25382,inst_25384,inst_25383,state_val_25404))
})();var inst_25388 = cljs.core.filterv(inst_25387,inst_25375);var inst_25375__$1 = inst_25388;var state_25403__$1 = (function (){var statearr_25414 = state_25403;(statearr_25414[7] = inst_25375__$1);
return statearr_25414;
})();var statearr_25415_25435 = state_25403__$1;(statearr_25415_25435[2] = null);
(statearr_25415_25435[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 9))
{var inst_25383 = (state_25403[9]);var state_25403__$1 = state_25403;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25403__$1,11,out,inst_25383);
} else
{if((state_val_25404 === 10))
{var inst_25395 = (state_25403[2]);var state_25403__$1 = state_25403;var statearr_25417_25436 = state_25403__$1;(statearr_25417_25436[2] = inst_25395);
(statearr_25417_25436[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25404 === 11))
{var inst_25375 = (state_25403[7]);var inst_25392 = (state_25403[2]);var tmp25416 = inst_25375;var inst_25375__$1 = tmp25416;var state_25403__$1 = (function (){var statearr_25418 = state_25403;(statearr_25418[7] = inst_25375__$1);
(statearr_25418[11] = inst_25392);
return statearr_25418;
})();var statearr_25419_25437 = state_25403__$1;(statearr_25419_25437[2] = null);
(statearr_25419_25437[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25423 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25423[0] = state_machine__5507__auto__);
(statearr_25423[1] = 1);
return statearr_25423;
});
var state_machine__5507__auto____1 = (function (state_25403){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25403);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25424){if((e25424 instanceof Object))
{var ex__5510__auto__ = e25424;var statearr_25425_25438 = state_25403;(statearr_25425_25438[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25403);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25439 = state_25403;
state_25403 = G__25439;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25403){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25426 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25427);
return statearr_25426;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25509){var state_val_25510 = (state_25509[1]);if((state_val_25510 === 1))
{var inst_25486 = 0;var state_25509__$1 = (function (){var statearr_25511 = state_25509;(statearr_25511[7] = inst_25486);
return statearr_25511;
})();var statearr_25512_25533 = state_25509__$1;(statearr_25512_25533[2] = null);
(statearr_25512_25533[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 2))
{var inst_25486 = (state_25509[7]);var inst_25488 = (inst_25486 < n);var state_25509__$1 = state_25509;if(cljs.core.truth_(inst_25488))
{var statearr_25513_25534 = state_25509__$1;(statearr_25513_25534[1] = 4);
} else
{var statearr_25514_25535 = state_25509__$1;(statearr_25514_25535[1] = 5);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 3))
{var inst_25506 = (state_25509[2]);var inst_25507 = cljs.core.async.close_BANG_(out);var state_25509__$1 = (function (){var statearr_25515 = state_25509;(statearr_25515[8] = inst_25506);
return statearr_25515;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25509__$1,inst_25507);
} else
{if((state_val_25510 === 4))
{var state_25509__$1 = state_25509;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25509__$1,7,ch);
} else
{if((state_val_25510 === 5))
{var state_25509__$1 = state_25509;var statearr_25516_25536 = state_25509__$1;(statearr_25516_25536[2] = null);
(statearr_25516_25536[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 6))
{var inst_25504 = (state_25509[2]);var state_25509__$1 = state_25509;var statearr_25517_25537 = state_25509__$1;(statearr_25517_25537[2] = inst_25504);
(statearr_25517_25537[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 7))
{var inst_25491 = (state_25509[9]);var inst_25491__$1 = (state_25509[2]);var inst_25492 = (inst_25491__$1 == null);var inst_25493 = cljs.core.not(inst_25492);var state_25509__$1 = (function (){var statearr_25518 = state_25509;(statearr_25518[9] = inst_25491__$1);
return statearr_25518;
})();if(inst_25493)
{var statearr_25519_25538 = state_25509__$1;(statearr_25519_25538[1] = 8);
} else
{var statearr_25520_25539 = state_25509__$1;(statearr_25520_25539[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 8))
{var inst_25491 = (state_25509[9]);var state_25509__$1 = state_25509;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25509__$1,11,out,inst_25491);
} else
{if((state_val_25510 === 9))
{var state_25509__$1 = state_25509;var statearr_25521_25540 = state_25509__$1;(statearr_25521_25540[2] = null);
(statearr_25521_25540[1] = 10);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 10))
{var inst_25501 = (state_25509[2]);var state_25509__$1 = state_25509;var statearr_25522_25541 = state_25509__$1;(statearr_25522_25541[2] = inst_25501);
(statearr_25522_25541[1] = 6);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25510 === 11))
{var inst_25486 = (state_25509[7]);var inst_25496 = (state_25509[2]);var inst_25497 = (inst_25486 + 1);var inst_25486__$1 = inst_25497;var state_25509__$1 = (function (){var statearr_25523 = state_25509;(statearr_25523[10] = inst_25496);
(statearr_25523[7] = inst_25486__$1);
return statearr_25523;
})();var statearr_25524_25542 = state_25509__$1;(statearr_25524_25542[2] = null);
(statearr_25524_25542[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25528 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25528[0] = state_machine__5507__auto__);
(statearr_25528[1] = 1);
return statearr_25528;
});
var state_machine__5507__auto____1 = (function (state_25509){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25509);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object))
{var ex__5510__auto__ = e25529;var statearr_25530_25543 = state_25509;(statearr_25530_25543[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25509);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25544 = state_25509;
state_25509 = G__25544;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25509){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25531 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25532);
return statearr_25531;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25616){var state_val_25617 = (state_25616[1]);if((state_val_25617 === 1))
{var inst_25593 = null;var state_25616__$1 = (function (){var statearr_25618 = state_25616;(statearr_25618[7] = inst_25593);
return statearr_25618;
})();var statearr_25619_25642 = state_25616__$1;(statearr_25619_25642[2] = null);
(statearr_25619_25642[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 2))
{var state_25616__$1 = state_25616;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25616__$1,4,ch);
} else
{if((state_val_25617 === 3))
{var inst_25613 = (state_25616[2]);var inst_25614 = cljs.core.async.close_BANG_(out);var state_25616__$1 = (function (){var statearr_25620 = state_25616;(statearr_25620[8] = inst_25613);
return statearr_25620;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25616__$1,inst_25614);
} else
{if((state_val_25617 === 4))
{var inst_25596 = (state_25616[9]);var inst_25596__$1 = (state_25616[2]);var inst_25597 = (inst_25596__$1 == null);var inst_25598 = cljs.core.not(inst_25597);var state_25616__$1 = (function (){var statearr_25621 = state_25616;(statearr_25621[9] = inst_25596__$1);
return statearr_25621;
})();if(inst_25598)
{var statearr_25622_25643 = state_25616__$1;(statearr_25622_25643[1] = 5);
} else
{var statearr_25623_25644 = state_25616__$1;(statearr_25623_25644[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 5))
{var inst_25596 = (state_25616[9]);var inst_25593 = (state_25616[7]);var inst_25600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25596,inst_25593);var state_25616__$1 = state_25616;if(inst_25600)
{var statearr_25624_25645 = state_25616__$1;(statearr_25624_25645[1] = 8);
} else
{var statearr_25625_25646 = state_25616__$1;(statearr_25625_25646[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 6))
{var state_25616__$1 = state_25616;var statearr_25627_25647 = state_25616__$1;(statearr_25627_25647[2] = null);
(statearr_25627_25647[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 7))
{var inst_25611 = (state_25616[2]);var state_25616__$1 = state_25616;var statearr_25628_25648 = state_25616__$1;(statearr_25628_25648[2] = inst_25611);
(statearr_25628_25648[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 8))
{var inst_25593 = (state_25616[7]);var tmp25626 = inst_25593;var inst_25593__$1 = tmp25626;var state_25616__$1 = (function (){var statearr_25629 = state_25616;(statearr_25629[7] = inst_25593__$1);
return statearr_25629;
})();var statearr_25630_25649 = state_25616__$1;(statearr_25630_25649[2] = null);
(statearr_25630_25649[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 9))
{var inst_25596 = (state_25616[9]);var state_25616__$1 = state_25616;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25616__$1,11,out,inst_25596);
} else
{if((state_val_25617 === 10))
{var inst_25608 = (state_25616[2]);var state_25616__$1 = state_25616;var statearr_25631_25650 = state_25616__$1;(statearr_25631_25650[2] = inst_25608);
(statearr_25631_25650[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25617 === 11))
{var inst_25596 = (state_25616[9]);var inst_25605 = (state_25616[2]);var inst_25593 = inst_25596;var state_25616__$1 = (function (){var statearr_25632 = state_25616;(statearr_25632[10] = inst_25605);
(statearr_25632[7] = inst_25593);
return statearr_25632;
})();var statearr_25633_25651 = state_25616__$1;(statearr_25633_25651[2] = null);
(statearr_25633_25651[1] = 2);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25637 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25637[0] = state_machine__5507__auto__);
(statearr_25637[1] = 1);
return statearr_25637;
});
var state_machine__5507__auto____1 = (function (state_25616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25616);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25638){if((e25638 instanceof Object))
{var ex__5510__auto__ = e25638;var statearr_25639_25652 = state_25616;(statearr_25639_25652[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25616);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25653 = state_25616;
state_25616 = G__25653;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25640 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25641);
return statearr_25640;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25758){var state_val_25759 = (state_25758[1]);if((state_val_25759 === 1))
{var inst_25721 = (new Array(n));var inst_25722 = inst_25721;var inst_25723 = 0;var state_25758__$1 = (function (){var statearr_25760 = state_25758;(statearr_25760[7] = inst_25723);
(statearr_25760[8] = inst_25722);
return statearr_25760;
})();var statearr_25761_25789 = state_25758__$1;(statearr_25761_25789[2] = null);
(statearr_25761_25789[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 2))
{var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25758__$1,4,ch);
} else
{if((state_val_25759 === 3))
{var inst_25756 = (state_25758[2]);var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.return_chan(state_25758__$1,inst_25756);
} else
{if((state_val_25759 === 4))
{var inst_25726 = (state_25758[9]);var inst_25726__$1 = (state_25758[2]);var inst_25727 = (inst_25726__$1 == null);var inst_25728 = cljs.core.not(inst_25727);var state_25758__$1 = (function (){var statearr_25762 = state_25758;(statearr_25762[9] = inst_25726__$1);
return statearr_25762;
})();if(inst_25728)
{var statearr_25763_25790 = state_25758__$1;(statearr_25763_25790[1] = 5);
} else
{var statearr_25764_25791 = state_25758__$1;(statearr_25764_25791[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 5))
{var inst_25723 = (state_25758[7]);var inst_25731 = (state_25758[10]);var inst_25726 = (state_25758[9]);var inst_25722 = (state_25758[8]);var inst_25730 = (inst_25722[inst_25723] = inst_25726);var inst_25731__$1 = (inst_25723 + 1);var inst_25732 = (inst_25731__$1 < n);var state_25758__$1 = (function (){var statearr_25765 = state_25758;(statearr_25765[10] = inst_25731__$1);
(statearr_25765[11] = inst_25730);
return statearr_25765;
})();if(cljs.core.truth_(inst_25732))
{var statearr_25766_25792 = state_25758__$1;(statearr_25766_25792[1] = 8);
} else
{var statearr_25767_25793 = state_25758__$1;(statearr_25767_25793[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 6))
{var inst_25723 = (state_25758[7]);var inst_25744 = (inst_25723 > 0);var state_25758__$1 = state_25758;if(cljs.core.truth_(inst_25744))
{var statearr_25769_25794 = state_25758__$1;(statearr_25769_25794[1] = 12);
} else
{var statearr_25770_25795 = state_25758__$1;(statearr_25770_25795[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 7))
{var inst_25754 = (state_25758[2]);var state_25758__$1 = state_25758;var statearr_25771_25796 = state_25758__$1;(statearr_25771_25796[2] = inst_25754);
(statearr_25771_25796[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 8))
{var inst_25731 = (state_25758[10]);var inst_25722 = (state_25758[8]);var tmp25768 = inst_25722;var inst_25722__$1 = tmp25768;var inst_25723 = inst_25731;var state_25758__$1 = (function (){var statearr_25772 = state_25758;(statearr_25772[7] = inst_25723);
(statearr_25772[8] = inst_25722__$1);
return statearr_25772;
})();var statearr_25773_25797 = state_25758__$1;(statearr_25773_25797[2] = null);
(statearr_25773_25797[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 9))
{var inst_25722 = (state_25758[8]);var inst_25736 = cljs.core.vec(inst_25722);var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25758__$1,11,out,inst_25736);
} else
{if((state_val_25759 === 10))
{var inst_25742 = (state_25758[2]);var state_25758__$1 = state_25758;var statearr_25774_25798 = state_25758__$1;(statearr_25774_25798[2] = inst_25742);
(statearr_25774_25798[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 11))
{var inst_25738 = (state_25758[2]);var inst_25739 = (new Array(n));var inst_25722 = inst_25739;var inst_25723 = 0;var state_25758__$1 = (function (){var statearr_25775 = state_25758;(statearr_25775[7] = inst_25723);
(statearr_25775[8] = inst_25722);
(statearr_25775[12] = inst_25738);
return statearr_25775;
})();var statearr_25776_25799 = state_25758__$1;(statearr_25776_25799[2] = null);
(statearr_25776_25799[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 12))
{var inst_25722 = (state_25758[8]);var inst_25746 = cljs.core.vec(inst_25722);var state_25758__$1 = state_25758;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25758__$1,15,out,inst_25746);
} else
{if((state_val_25759 === 13))
{var state_25758__$1 = state_25758;var statearr_25777_25800 = state_25758__$1;(statearr_25777_25800[2] = null);
(statearr_25777_25800[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 14))
{var inst_25751 = (state_25758[2]);var inst_25752 = cljs.core.async.close_BANG_(out);var state_25758__$1 = (function (){var statearr_25778 = state_25758;(statearr_25778[13] = inst_25751);
return statearr_25778;
})();var statearr_25779_25801 = state_25758__$1;(statearr_25779_25801[2] = inst_25752);
(statearr_25779_25801[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25759 === 15))
{var inst_25748 = (state_25758[2]);var state_25758__$1 = state_25758;var statearr_25780_25802 = state_25758__$1;(statearr_25780_25802[2] = inst_25748);
(statearr_25780_25802[1] = 14);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25784[0] = state_machine__5507__auto__);
(statearr_25784[1] = 1);
return statearr_25784;
});
var state_machine__5507__auto____1 = (function (state_25758){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25758);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25785){if((e25785 instanceof Object))
{var ex__5510__auto__ = e25785;var statearr_25786_25803 = state_25758;(statearr_25786_25803[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25758);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25804 = state_25758;
state_25758 = G__25804;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25758){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25787 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25788);
return statearr_25787;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25917){var state_val_25918 = (state_25917[1]);if((state_val_25918 === 1))
{var inst_25876 = [];var inst_25877 = inst_25876;var inst_25878 = cljs.core.constant$keyword$229;var state_25917__$1 = (function (){var statearr_25919 = state_25917;(statearr_25919[7] = inst_25877);
(statearr_25919[8] = inst_25878);
return statearr_25919;
})();var statearr_25920_25948 = state_25917__$1;(statearr_25920_25948[2] = null);
(statearr_25920_25948[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 2))
{var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25917__$1,4,ch);
} else
{if((state_val_25918 === 3))
{var inst_25915 = (state_25917[2]);var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.return_chan(state_25917__$1,inst_25915);
} else
{if((state_val_25918 === 4))
{var inst_25881 = (state_25917[9]);var inst_25881__$1 = (state_25917[2]);var inst_25882 = (inst_25881__$1 == null);var inst_25883 = cljs.core.not(inst_25882);var state_25917__$1 = (function (){var statearr_25921 = state_25917;(statearr_25921[9] = inst_25881__$1);
return statearr_25921;
})();if(inst_25883)
{var statearr_25922_25949 = state_25917__$1;(statearr_25922_25949[1] = 5);
} else
{var statearr_25923_25950 = state_25917__$1;(statearr_25923_25950[1] = 6);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 5))
{var inst_25878 = (state_25917[8]);var inst_25885 = (state_25917[10]);var inst_25881 = (state_25917[9]);var inst_25885__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25881) : f.call(null,inst_25881));var inst_25886 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25885__$1,inst_25878);var inst_25887 = cljs.core.keyword_identical_QMARK_(inst_25878,cljs.core.constant$keyword$229);var inst_25888 = (inst_25886) || (inst_25887);var state_25917__$1 = (function (){var statearr_25924 = state_25917;(statearr_25924[10] = inst_25885__$1);
return statearr_25924;
})();if(cljs.core.truth_(inst_25888))
{var statearr_25925_25951 = state_25917__$1;(statearr_25925_25951[1] = 8);
} else
{var statearr_25926_25952 = state_25917__$1;(statearr_25926_25952[1] = 9);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 6))
{var inst_25877 = (state_25917[7]);var inst_25902 = inst_25877.length;var inst_25903 = (inst_25902 > 0);var state_25917__$1 = state_25917;if(cljs.core.truth_(inst_25903))
{var statearr_25928_25953 = state_25917__$1;(statearr_25928_25953[1] = 12);
} else
{var statearr_25929_25954 = state_25917__$1;(statearr_25929_25954[1] = 13);
}
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 7))
{var inst_25913 = (state_25917[2]);var state_25917__$1 = state_25917;var statearr_25930_25955 = state_25917__$1;(statearr_25930_25955[2] = inst_25913);
(statearr_25930_25955[1] = 3);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 8))
{var inst_25877 = (state_25917[7]);var inst_25885 = (state_25917[10]);var inst_25881 = (state_25917[9]);var inst_25890 = inst_25877.push(inst_25881);var tmp25927 = inst_25877;var inst_25877__$1 = tmp25927;var inst_25878 = inst_25885;var state_25917__$1 = (function (){var statearr_25931 = state_25917;(statearr_25931[11] = inst_25890);
(statearr_25931[7] = inst_25877__$1);
(statearr_25931[8] = inst_25878);
return statearr_25931;
})();var statearr_25932_25956 = state_25917__$1;(statearr_25932_25956[2] = null);
(statearr_25932_25956[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 9))
{var inst_25877 = (state_25917[7]);var inst_25893 = cljs.core.vec(inst_25877);var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25917__$1,11,out,inst_25893);
} else
{if((state_val_25918 === 10))
{var inst_25900 = (state_25917[2]);var state_25917__$1 = state_25917;var statearr_25933_25957 = state_25917__$1;(statearr_25933_25957[2] = inst_25900);
(statearr_25933_25957[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 11))
{var inst_25885 = (state_25917[10]);var inst_25881 = (state_25917[9]);var inst_25895 = (state_25917[2]);var inst_25896 = [];var inst_25897 = inst_25896.push(inst_25881);var inst_25877 = inst_25896;var inst_25878 = inst_25885;var state_25917__$1 = (function (){var statearr_25934 = state_25917;(statearr_25934[12] = inst_25897);
(statearr_25934[13] = inst_25895);
(statearr_25934[7] = inst_25877);
(statearr_25934[8] = inst_25878);
return statearr_25934;
})();var statearr_25935_25958 = state_25917__$1;(statearr_25935_25958[2] = null);
(statearr_25935_25958[1] = 2);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 12))
{var inst_25877 = (state_25917[7]);var inst_25905 = cljs.core.vec(inst_25877);var state_25917__$1 = state_25917;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25917__$1,15,out,inst_25905);
} else
{if((state_val_25918 === 13))
{var state_25917__$1 = state_25917;var statearr_25936_25959 = state_25917__$1;(statearr_25936_25959[2] = null);
(statearr_25936_25959[1] = 14);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 14))
{var inst_25910 = (state_25917[2]);var inst_25911 = cljs.core.async.close_BANG_(out);var state_25917__$1 = (function (){var statearr_25937 = state_25917;(statearr_25937[14] = inst_25910);
return statearr_25937;
})();var statearr_25938_25960 = state_25917__$1;(statearr_25938_25960[2] = inst_25911);
(statearr_25938_25960[1] = 7);
return cljs.core.constant$keyword$216;
} else
{if((state_val_25918 === 15))
{var inst_25907 = (state_25917[2]);var state_25917__$1 = state_25917;var statearr_25939_25961 = state_25917__$1;(statearr_25939_25961[2] = inst_25907);
(statearr_25939_25961[1] = 14);
return cljs.core.constant$keyword$216;
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
var state_machine__5507__auto____0 = (function (){var statearr_25943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25943[0] = state_machine__5507__auto__);
(statearr_25943[1] = 1);
return statearr_25943;
});
var state_machine__5507__auto____1 = (function (state_25917){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25917);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$216))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25944){if((e25944 instanceof Object))
{var ex__5510__auto__ = e25944;var statearr_25945_25962 = state_25917;(statearr_25945_25962[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25917);
return cljs.core.constant$keyword$216;
} else
{if(cljs.core.constant$keyword$205)
{throw e25944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$216))
{{
var G__25963 = state_25917;
state_25917 = G__25963;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25917){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25946 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25947);
return statearr_25946;
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
