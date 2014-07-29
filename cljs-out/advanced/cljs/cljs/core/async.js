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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t39792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39792 = (function (f,fn_handler,meta39793){
this.f = f;
this.fn_handler = fn_handler;
this.meta39793 = meta39793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39792.cljs$lang$type = true;
cljs.core.async.t39792.cljs$lang$ctorStr = "cljs.core.async/t39792";
cljs.core.async.t39792.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39792");
});
cljs.core.async.t39792.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t39792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t39792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39794){var self__ = this;
var _39794__$1 = this;return self__.meta39793;
});
cljs.core.async.t39792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39794,meta39793__$1){var self__ = this;
var _39794__$1 = this;return (new cljs.core.async.t39792(self__.f,self__.fn_handler,meta39793__$1));
});
cljs.core.async.__GT_t39792 = (function __GT_t39792(f__$1,fn_handler__$1,meta39793){return (new cljs.core.async.t39792(f__$1,fn_handler__$1,meta39793));
});
}
return (new cljs.core.async.t39792(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__39796 = buff;if(G__39796)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__39796.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__39796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__39796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__39796);
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
{var val_39797 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39797) : fn1.call(null,val_39797));
} else
{cljs.core.async.impl.dispatch.run(((function (val_39797,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39797) : fn1.call(null,val_39797));
});})(val_39797,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___39798 = n;var x_39799 = (0);while(true){
if((x_39799 < n__4399__auto___39798))
{(a[x_39799] = (0));
{
var G__39800 = (x_39799 + (1));
x_39799 = G__39800;
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
var G__39801 = (i + (1));
i = G__39801;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t39805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39805 = (function (flag,alt_flag,meta39806){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta39806 = meta39806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39805.cljs$lang$type = true;
cljs.core.async.t39805.cljs$lang$ctorStr = "cljs.core.async/t39805";
cljs.core.async.t39805.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39805");
});})(flag))
;
cljs.core.async.t39805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t39805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t39805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39807){var self__ = this;
var _39807__$1 = this;return self__.meta39806;
});})(flag))
;
cljs.core.async.t39805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39807,meta39806__$1){var self__ = this;
var _39807__$1 = this;return (new cljs.core.async.t39805(self__.flag,self__.alt_flag,meta39806__$1));
});})(flag))
;
cljs.core.async.__GT_t39805 = ((function (flag){
return (function __GT_t39805(flag__$1,alt_flag__$1,meta39806){return (new cljs.core.async.t39805(flag__$1,alt_flag__$1,meta39806));
});})(flag))
;
}
return (new cljs.core.async.t39805(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t39811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39811 = (function (cb,flag,alt_handler,meta39812){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta39812 = meta39812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39811.cljs$lang$type = true;
cljs.core.async.t39811.cljs$lang$ctorStr = "cljs.core.async/t39811";
cljs.core.async.t39811.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39811");
});
cljs.core.async.t39811.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t39811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t39811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39813){var self__ = this;
var _39813__$1 = this;return self__.meta39812;
});
cljs.core.async.t39811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39813,meta39812__$1){var self__ = this;
var _39813__$1 = this;return (new cljs.core.async.t39811(self__.cb,self__.flag,self__.alt_handler,meta39812__$1));
});
cljs.core.async.__GT_t39811 = (function __GT_t39811(cb__$1,flag__$1,alt_handler__$1,meta39812){return (new cljs.core.async.t39811(cb__$1,flag__$1,alt_handler__$1,meta39812));
});
}
return (new cljs.core.async.t39811(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$783.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39814_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39814_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39814_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__39815 = (i + (1));
i = G__39815;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$769))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$769.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$769], null));
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
var alts_BANG___delegate = function (ports,p__39816){var map__39818 = p__39816;var map__39818__$1 = ((cljs.core.seq_QMARK_(map__39818))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39818):map__39818);var opts = map__39818__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__39816 = null;if (arguments.length > 1) {
  p__39816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__39816);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__39819){
var ports = cljs.core.first(arglist__39819);
var p__39816 = cljs.core.rest(arglist__39819);
return alts_BANG___delegate(ports,p__39816);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t39827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39827 = (function (ch,f,map_LT_,meta39828){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39828 = meta39828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39827.cljs$lang$type = true;
cljs.core.async.t39827.cljs$lang$ctorStr = "cljs.core.async/t39827";
cljs.core.async.t39827.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39827");
});
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t39830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39830 = (function (fn1,_,meta39828,ch,f,map_LT_,meta39831){
this.fn1 = fn1;
this._ = _;
this.meta39828 = meta39828;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39831 = meta39831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39830.cljs$lang$type = true;
cljs.core.async.t39830.cljs$lang$ctorStr = "cljs.core.async/t39830";
cljs.core.async.t39830.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39830");
});})(___$1))
;
cljs.core.async.t39830.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t39830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t39830.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t39830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__39820_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__39820_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39820_SHARP_) : self__.f.call(null,p1__39820_SHARP_)))) : f1.call(null,(((p1__39820_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39820_SHARP_) : self__.f.call(null,p1__39820_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t39830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39832){var self__ = this;
var _39832__$1 = this;return self__.meta39831;
});})(___$1))
;
cljs.core.async.t39830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39832,meta39831__$1){var self__ = this;
var _39832__$1 = this;return (new cljs.core.async.t39830(self__.fn1,self__._,self__.meta39828,self__.ch,self__.f,self__.map_LT_,meta39831__$1));
});})(___$1))
;
cljs.core.async.__GT_t39830 = ((function (___$1){
return (function __GT_t39830(fn1__$1,___$2,meta39828__$1,ch__$2,f__$2,map_LT___$2,meta39831){return (new cljs.core.async.t39830(fn1__$1,___$2,meta39828__$1,ch__$2,f__$2,map_LT___$2,meta39831));
});})(___$1))
;
}
return (new cljs.core.async.t39830(fn1,___$1,self__.meta39828,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39829){var self__ = this;
var _39829__$1 = this;return self__.meta39828;
});
cljs.core.async.t39827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39829,meta39828__$1){var self__ = this;
var _39829__$1 = this;return (new cljs.core.async.t39827(self__.ch,self__.f,self__.map_LT_,meta39828__$1));
});
cljs.core.async.__GT_t39827 = (function __GT_t39827(ch__$1,f__$1,map_LT___$1,meta39828){return (new cljs.core.async.t39827(ch__$1,f__$1,map_LT___$1,meta39828));
});
}
return (new cljs.core.async.t39827(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t39836 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39836 = (function (ch,f,map_GT_,meta39837){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39837 = meta39837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39836.cljs$lang$type = true;
cljs.core.async.t39836.cljs$lang$ctorStr = "cljs.core.async/t39836";
cljs.core.async.t39836.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39836");
});
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39838){var self__ = this;
var _39838__$1 = this;return self__.meta39837;
});
cljs.core.async.t39836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39838,meta39837__$1){var self__ = this;
var _39838__$1 = this;return (new cljs.core.async.t39836(self__.ch,self__.f,self__.map_GT_,meta39837__$1));
});
cljs.core.async.__GT_t39836 = (function __GT_t39836(ch__$1,f__$1,map_GT___$1,meta39837){return (new cljs.core.async.t39836(ch__$1,f__$1,map_GT___$1,meta39837));
});
}
return (new cljs.core.async.t39836(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t39842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39842 = (function (ch,p,filter_GT_,meta39843){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39843 = meta39843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39842.cljs$lang$type = true;
cljs.core.async.t39842.cljs$lang$ctorStr = "cljs.core.async/t39842";
cljs.core.async.t39842.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39842");
});
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t39842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t39842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39844){var self__ = this;
var _39844__$1 = this;return self__.meta39843;
});
cljs.core.async.t39842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39844,meta39843__$1){var self__ = this;
var _39844__$1 = this;return (new cljs.core.async.t39842(self__.ch,self__.p,self__.filter_GT_,meta39843__$1));
});
cljs.core.async.__GT_t39842 = (function __GT_t39842(ch__$1,p__$1,filter_GT___$1,meta39843){return (new cljs.core.async.t39842(ch__$1,p__$1,filter_GT___$1,meta39843));
});
}
return (new cljs.core.async.t39842(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___39927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39927,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39927,out){
return (function (state_39906){var state_val_39907 = (state_39906[(1)]);if((state_val_39907 === (7)))
{var inst_39902 = (state_39906[(2)]);var state_39906__$1 = state_39906;var statearr_39908_39928 = state_39906__$1;(statearr_39908_39928[(2)] = inst_39902);
(statearr_39908_39928[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (1)))
{var state_39906__$1 = state_39906;var statearr_39909_39929 = state_39906__$1;(statearr_39909_39929[(2)] = null);
(statearr_39909_39929[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (4)))
{var inst_39888 = (state_39906[(7)]);var inst_39888__$1 = (state_39906[(2)]);var inst_39889 = (inst_39888__$1 == null);var state_39906__$1 = (function (){var statearr_39910 = state_39906;(statearr_39910[(7)] = inst_39888__$1);
return statearr_39910;
})();if(cljs.core.truth_(inst_39889))
{var statearr_39911_39930 = state_39906__$1;(statearr_39911_39930[(1)] = (5));
} else
{var statearr_39912_39931 = state_39906__$1;(statearr_39912_39931[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (6)))
{var inst_39888 = (state_39906[(7)]);var inst_39893 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39888) : p.call(null,inst_39888));var state_39906__$1 = state_39906;if(cljs.core.truth_(inst_39893))
{var statearr_39913_39932 = state_39906__$1;(statearr_39913_39932[(1)] = (8));
} else
{var statearr_39914_39933 = state_39906__$1;(statearr_39914_39933[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (3)))
{var inst_39904 = (state_39906[(2)]);var state_39906__$1 = state_39906;return cljs.core.async.impl.ioc_helpers.return_chan(state_39906__$1,inst_39904);
} else
{if((state_val_39907 === (2)))
{var state_39906__$1 = state_39906;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39906__$1,(4),ch);
} else
{if((state_val_39907 === (11)))
{var inst_39896 = (state_39906[(2)]);var state_39906__$1 = state_39906;var statearr_39915_39934 = state_39906__$1;(statearr_39915_39934[(2)] = inst_39896);
(statearr_39915_39934[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (9)))
{var state_39906__$1 = state_39906;var statearr_39916_39935 = state_39906__$1;(statearr_39916_39935[(2)] = null);
(statearr_39916_39935[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (5)))
{var inst_39891 = cljs.core.async.close_BANG_(out);var state_39906__$1 = state_39906;var statearr_39917_39936 = state_39906__$1;(statearr_39917_39936[(2)] = inst_39891);
(statearr_39917_39936[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (10)))
{var inst_39899 = (state_39906[(2)]);var state_39906__$1 = (function (){var statearr_39918 = state_39906;(statearr_39918[(8)] = inst_39899);
return statearr_39918;
})();var statearr_39919_39937 = state_39906__$1;(statearr_39919_39937[(2)] = null);
(statearr_39919_39937[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_39907 === (8)))
{var inst_39888 = (state_39906[(7)]);var state_39906__$1 = state_39906;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39906__$1,(11),out,inst_39888);
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
});})(c__5693__auto___39927,out))
;return ((function (switch__5678__auto__,c__5693__auto___39927,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39923 = [null,null,null,null,null,null,null,null,null];(statearr_39923[(0)] = state_machine__5679__auto__);
(statearr_39923[(1)] = (1));
return statearr_39923;
});
var state_machine__5679__auto____1 = (function (state_39906){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39906);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39924){if((e39924 instanceof Object))
{var ex__5682__auto__ = e39924;var statearr_39925_39938 = state_39906;(statearr_39925_39938[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39906);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e39924;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__39939 = state_39906;
state_39906 = G__39939;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39906){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39927,out))
})();var state__5695__auto__ = (function (){var statearr_39926 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39927);
return statearr_39926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39927,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_40091){var state_val_40092 = (state_40091[(1)]);if((state_val_40092 === (7)))
{var inst_40087 = (state_40091[(2)]);var state_40091__$1 = state_40091;var statearr_40093_40130 = state_40091__$1;(statearr_40093_40130[(2)] = inst_40087);
(statearr_40093_40130[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (20)))
{var inst_40062 = (state_40091[(7)]);var inst_40073 = (state_40091[(2)]);var inst_40074 = cljs.core.next(inst_40062);var inst_40048 = inst_40074;var inst_40049 = null;var inst_40050 = (0);var inst_40051 = (0);var state_40091__$1 = (function (){var statearr_40094 = state_40091;(statearr_40094[(8)] = inst_40048);
(statearr_40094[(9)] = inst_40073);
(statearr_40094[(10)] = inst_40049);
(statearr_40094[(11)] = inst_40050);
(statearr_40094[(12)] = inst_40051);
return statearr_40094;
})();var statearr_40095_40131 = state_40091__$1;(statearr_40095_40131[(2)] = null);
(statearr_40095_40131[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (1)))
{var state_40091__$1 = state_40091;var statearr_40096_40132 = state_40091__$1;(statearr_40096_40132[(2)] = null);
(statearr_40096_40132[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (4)))
{var inst_40037 = (state_40091[(13)]);var inst_40037__$1 = (state_40091[(2)]);var inst_40038 = (inst_40037__$1 == null);var state_40091__$1 = (function (){var statearr_40100 = state_40091;(statearr_40100[(13)] = inst_40037__$1);
return statearr_40100;
})();if(cljs.core.truth_(inst_40038))
{var statearr_40101_40133 = state_40091__$1;(statearr_40101_40133[(1)] = (5));
} else
{var statearr_40102_40134 = state_40091__$1;(statearr_40102_40134[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (15)))
{var state_40091__$1 = state_40091;var statearr_40103_40135 = state_40091__$1;(statearr_40103_40135[(2)] = null);
(statearr_40103_40135[(1)] = (16));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (13)))
{var inst_40048 = (state_40091[(8)]);var inst_40049 = (state_40091[(10)]);var inst_40050 = (state_40091[(11)]);var inst_40051 = (state_40091[(12)]);var inst_40058 = (state_40091[(2)]);var inst_40059 = (inst_40051 + (1));var tmp40097 = inst_40048;var tmp40098 = inst_40049;var tmp40099 = inst_40050;var inst_40048__$1 = tmp40097;var inst_40049__$1 = tmp40098;var inst_40050__$1 = tmp40099;var inst_40051__$1 = inst_40059;var state_40091__$1 = (function (){var statearr_40104 = state_40091;(statearr_40104[(8)] = inst_40048__$1);
(statearr_40104[(14)] = inst_40058);
(statearr_40104[(10)] = inst_40049__$1);
(statearr_40104[(11)] = inst_40050__$1);
(statearr_40104[(12)] = inst_40051__$1);
return statearr_40104;
})();var statearr_40105_40136 = state_40091__$1;(statearr_40105_40136[(2)] = null);
(statearr_40105_40136[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (6)))
{var inst_40037 = (state_40091[(13)]);var inst_40042 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40037) : f.call(null,inst_40037));var inst_40047 = cljs.core.seq(inst_40042);var inst_40048 = inst_40047;var inst_40049 = null;var inst_40050 = (0);var inst_40051 = (0);var state_40091__$1 = (function (){var statearr_40106 = state_40091;(statearr_40106[(8)] = inst_40048);
(statearr_40106[(10)] = inst_40049);
(statearr_40106[(11)] = inst_40050);
(statearr_40106[(12)] = inst_40051);
return statearr_40106;
})();var statearr_40107_40137 = state_40091__$1;(statearr_40107_40137[(2)] = null);
(statearr_40107_40137[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (17)))
{var inst_40062 = (state_40091[(7)]);var inst_40066 = cljs.core.chunk_first(inst_40062);var inst_40067 = cljs.core.chunk_rest(inst_40062);var inst_40068 = cljs.core.count(inst_40066);var inst_40048 = inst_40067;var inst_40049 = inst_40066;var inst_40050 = inst_40068;var inst_40051 = (0);var state_40091__$1 = (function (){var statearr_40108 = state_40091;(statearr_40108[(8)] = inst_40048);
(statearr_40108[(10)] = inst_40049);
(statearr_40108[(11)] = inst_40050);
(statearr_40108[(12)] = inst_40051);
return statearr_40108;
})();var statearr_40109_40138 = state_40091__$1;(statearr_40109_40138[(2)] = null);
(statearr_40109_40138[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (3)))
{var inst_40089 = (state_40091[(2)]);var state_40091__$1 = state_40091;return cljs.core.async.impl.ioc_helpers.return_chan(state_40091__$1,inst_40089);
} else
{if((state_val_40092 === (12)))
{var inst_40082 = (state_40091[(2)]);var state_40091__$1 = state_40091;var statearr_40110_40139 = state_40091__$1;(statearr_40110_40139[(2)] = inst_40082);
(statearr_40110_40139[(1)] = (9));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (2)))
{var state_40091__$1 = state_40091;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40091__$1,(4),in$);
} else
{if((state_val_40092 === (19)))
{var inst_40077 = (state_40091[(2)]);var state_40091__$1 = state_40091;var statearr_40111_40140 = state_40091__$1;(statearr_40111_40140[(2)] = inst_40077);
(statearr_40111_40140[(1)] = (16));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (11)))
{var inst_40048 = (state_40091[(8)]);var inst_40062 = (state_40091[(7)]);var inst_40062__$1 = cljs.core.seq(inst_40048);var state_40091__$1 = (function (){var statearr_40112 = state_40091;(statearr_40112[(7)] = inst_40062__$1);
return statearr_40112;
})();if(inst_40062__$1)
{var statearr_40113_40141 = state_40091__$1;(statearr_40113_40141[(1)] = (14));
} else
{var statearr_40114_40142 = state_40091__$1;(statearr_40114_40142[(1)] = (15));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (9)))
{var inst_40084 = (state_40091[(2)]);var state_40091__$1 = (function (){var statearr_40115 = state_40091;(statearr_40115[(15)] = inst_40084);
return statearr_40115;
})();var statearr_40116_40143 = state_40091__$1;(statearr_40116_40143[(2)] = null);
(statearr_40116_40143[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (5)))
{var inst_40040 = cljs.core.async.close_BANG_(out);var state_40091__$1 = state_40091;var statearr_40117_40144 = state_40091__$1;(statearr_40117_40144[(2)] = inst_40040);
(statearr_40117_40144[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (14)))
{var inst_40062 = (state_40091[(7)]);var inst_40064 = cljs.core.chunked_seq_QMARK_(inst_40062);var state_40091__$1 = state_40091;if(inst_40064)
{var statearr_40118_40145 = state_40091__$1;(statearr_40118_40145[(1)] = (17));
} else
{var statearr_40119_40146 = state_40091__$1;(statearr_40119_40146[(1)] = (18));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (16)))
{var inst_40080 = (state_40091[(2)]);var state_40091__$1 = state_40091;var statearr_40120_40147 = state_40091__$1;(statearr_40120_40147[(2)] = inst_40080);
(statearr_40120_40147[(1)] = (12));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40092 === (10)))
{var inst_40049 = (state_40091[(10)]);var inst_40051 = (state_40091[(12)]);var inst_40056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40049,inst_40051);var state_40091__$1 = state_40091;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40091__$1,(13),out,inst_40056);
} else
{if((state_val_40092 === (18)))
{var inst_40062 = (state_40091[(7)]);var inst_40071 = cljs.core.first(inst_40062);var state_40091__$1 = state_40091;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40091__$1,(20),out,inst_40071);
} else
{if((state_val_40092 === (8)))
{var inst_40050 = (state_40091[(11)]);var inst_40051 = (state_40091[(12)]);var inst_40053 = (inst_40051 < inst_40050);var inst_40054 = inst_40053;var state_40091__$1 = state_40091;if(cljs.core.truth_(inst_40054))
{var statearr_40121_40148 = state_40091__$1;(statearr_40121_40148[(1)] = (10));
} else
{var statearr_40122_40149 = state_40091__$1;(statearr_40122_40149[(1)] = (11));
}
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40126[(0)] = state_machine__5679__auto__);
(statearr_40126[(1)] = (1));
return statearr_40126;
});
var state_machine__5679__auto____1 = (function (state_40091){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40091);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40127){if((e40127 instanceof Object))
{var ex__5682__auto__ = e40127;var statearr_40128_40150 = state_40091;(statearr_40128_40150[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40091);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__40151 = state_40091;
state_40091 = G__40151;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40091){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40129 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___40232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40232){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40232){
return (function (state_40211){var state_val_40212 = (state_40211[(1)]);if((state_val_40212 === (7)))
{var inst_40207 = (state_40211[(2)]);var state_40211__$1 = state_40211;var statearr_40213_40233 = state_40211__$1;(statearr_40213_40233[(2)] = inst_40207);
(statearr_40213_40233[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (1)))
{var state_40211__$1 = state_40211;var statearr_40214_40234 = state_40211__$1;(statearr_40214_40234[(2)] = null);
(statearr_40214_40234[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (4)))
{var inst_40194 = (state_40211[(7)]);var inst_40194__$1 = (state_40211[(2)]);var inst_40195 = (inst_40194__$1 == null);var state_40211__$1 = (function (){var statearr_40215 = state_40211;(statearr_40215[(7)] = inst_40194__$1);
return statearr_40215;
})();if(cljs.core.truth_(inst_40195))
{var statearr_40216_40235 = state_40211__$1;(statearr_40216_40235[(1)] = (5));
} else
{var statearr_40217_40236 = state_40211__$1;(statearr_40217_40236[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (6)))
{var inst_40194 = (state_40211[(7)]);var state_40211__$1 = state_40211;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40211__$1,(11),to,inst_40194);
} else
{if((state_val_40212 === (3)))
{var inst_40209 = (state_40211[(2)]);var state_40211__$1 = state_40211;return cljs.core.async.impl.ioc_helpers.return_chan(state_40211__$1,inst_40209);
} else
{if((state_val_40212 === (2)))
{var state_40211__$1 = state_40211;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40211__$1,(4),from);
} else
{if((state_val_40212 === (11)))
{var inst_40204 = (state_40211[(2)]);var state_40211__$1 = (function (){var statearr_40218 = state_40211;(statearr_40218[(8)] = inst_40204);
return statearr_40218;
})();var statearr_40219_40237 = state_40211__$1;(statearr_40219_40237[(2)] = null);
(statearr_40219_40237[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (9)))
{var state_40211__$1 = state_40211;var statearr_40220_40238 = state_40211__$1;(statearr_40220_40238[(2)] = null);
(statearr_40220_40238[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (5)))
{var state_40211__$1 = state_40211;if(cljs.core.truth_(close_QMARK_))
{var statearr_40221_40239 = state_40211__$1;(statearr_40221_40239[(1)] = (8));
} else
{var statearr_40222_40240 = state_40211__$1;(statearr_40222_40240[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (10)))
{var inst_40201 = (state_40211[(2)]);var state_40211__$1 = state_40211;var statearr_40223_40241 = state_40211__$1;(statearr_40223_40241[(2)] = inst_40201);
(statearr_40223_40241[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40212 === (8)))
{var inst_40198 = cljs.core.async.close_BANG_(to);var state_40211__$1 = state_40211;var statearr_40224_40242 = state_40211__$1;(statearr_40224_40242[(2)] = inst_40198);
(statearr_40224_40242[(1)] = (10));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___40232))
;return ((function (switch__5678__auto__,c__5693__auto___40232){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40228 = [null,null,null,null,null,null,null,null,null];(statearr_40228[(0)] = state_machine__5679__auto__);
(statearr_40228[(1)] = (1));
return statearr_40228;
});
var state_machine__5679__auto____1 = (function (state_40211){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40211);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40229){if((e40229 instanceof Object))
{var ex__5682__auto__ = e40229;var statearr_40230_40243 = state_40211;(statearr_40230_40243[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40211);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__40244 = state_40211;
state_40211 = G__40244;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40211){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40232))
})();var state__5695__auto__ = (function (){var statearr_40231 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40232);
return statearr_40231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40232))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___40331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40331,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40331,tc,fc){
return (function (state_40309){var state_val_40310 = (state_40309[(1)]);if((state_val_40310 === (7)))
{var inst_40305 = (state_40309[(2)]);var state_40309__$1 = state_40309;var statearr_40311_40332 = state_40309__$1;(statearr_40311_40332[(2)] = inst_40305);
(statearr_40311_40332[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (1)))
{var state_40309__$1 = state_40309;var statearr_40312_40333 = state_40309__$1;(statearr_40312_40333[(2)] = null);
(statearr_40312_40333[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (4)))
{var inst_40290 = (state_40309[(7)]);var inst_40290__$1 = (state_40309[(2)]);var inst_40291 = (inst_40290__$1 == null);var state_40309__$1 = (function (){var statearr_40313 = state_40309;(statearr_40313[(7)] = inst_40290__$1);
return statearr_40313;
})();if(cljs.core.truth_(inst_40291))
{var statearr_40314_40334 = state_40309__$1;(statearr_40314_40334[(1)] = (5));
} else
{var statearr_40315_40335 = state_40309__$1;(statearr_40315_40335[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (6)))
{var inst_40290 = (state_40309[(7)]);var inst_40296 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40290) : p.call(null,inst_40290));var state_40309__$1 = state_40309;if(cljs.core.truth_(inst_40296))
{var statearr_40316_40336 = state_40309__$1;(statearr_40316_40336[(1)] = (9));
} else
{var statearr_40317_40337 = state_40309__$1;(statearr_40317_40337[(1)] = (10));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (3)))
{var inst_40307 = (state_40309[(2)]);var state_40309__$1 = state_40309;return cljs.core.async.impl.ioc_helpers.return_chan(state_40309__$1,inst_40307);
} else
{if((state_val_40310 === (2)))
{var state_40309__$1 = state_40309;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40309__$1,(4),ch);
} else
{if((state_val_40310 === (11)))
{var inst_40290 = (state_40309[(7)]);var inst_40300 = (state_40309[(2)]);var state_40309__$1 = state_40309;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40309__$1,(8),inst_40300,inst_40290);
} else
{if((state_val_40310 === (9)))
{var state_40309__$1 = state_40309;var statearr_40318_40338 = state_40309__$1;(statearr_40318_40338[(2)] = tc);
(statearr_40318_40338[(1)] = (11));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (5)))
{var inst_40293 = cljs.core.async.close_BANG_(tc);var inst_40294 = cljs.core.async.close_BANG_(fc);var state_40309__$1 = (function (){var statearr_40319 = state_40309;(statearr_40319[(8)] = inst_40293);
return statearr_40319;
})();var statearr_40320_40339 = state_40309__$1;(statearr_40320_40339[(2)] = inst_40294);
(statearr_40320_40339[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (10)))
{var state_40309__$1 = state_40309;var statearr_40321_40340 = state_40309__$1;(statearr_40321_40340[(2)] = fc);
(statearr_40321_40340[(1)] = (11));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40310 === (8)))
{var inst_40302 = (state_40309[(2)]);var state_40309__$1 = (function (){var statearr_40322 = state_40309;(statearr_40322[(9)] = inst_40302);
return statearr_40322;
})();var statearr_40323_40341 = state_40309__$1;(statearr_40323_40341[(2)] = null);
(statearr_40323_40341[(1)] = (2));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___40331,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___40331,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40327 = [null,null,null,null,null,null,null,null,null,null];(statearr_40327[(0)] = state_machine__5679__auto__);
(statearr_40327[(1)] = (1));
return statearr_40327;
});
var state_machine__5679__auto____1 = (function (state_40309){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40309);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40328){if((e40328 instanceof Object))
{var ex__5682__auto__ = e40328;var statearr_40329_40342 = state_40309;(statearr_40329_40342[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40309);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__40343 = state_40309;
state_40309 = G__40343;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40309){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40331,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_40330 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40331);
return statearr_40330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40331,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_40390){var state_val_40391 = (state_40390[(1)]);if((state_val_40391 === (7)))
{var inst_40386 = (state_40390[(2)]);var state_40390__$1 = state_40390;var statearr_40392_40408 = state_40390__$1;(statearr_40392_40408[(2)] = inst_40386);
(statearr_40392_40408[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40391 === (6)))
{var inst_40379 = (state_40390[(7)]);var inst_40376 = (state_40390[(8)]);var inst_40383 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40376,inst_40379) : f.call(null,inst_40376,inst_40379));var inst_40376__$1 = inst_40383;var state_40390__$1 = (function (){var statearr_40393 = state_40390;(statearr_40393[(8)] = inst_40376__$1);
return statearr_40393;
})();var statearr_40394_40409 = state_40390__$1;(statearr_40394_40409[(2)] = null);
(statearr_40394_40409[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40391 === (5)))
{var inst_40376 = (state_40390[(8)]);var state_40390__$1 = state_40390;var statearr_40395_40410 = state_40390__$1;(statearr_40395_40410[(2)] = inst_40376);
(statearr_40395_40410[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40391 === (4)))
{var inst_40379 = (state_40390[(7)]);var inst_40379__$1 = (state_40390[(2)]);var inst_40380 = (inst_40379__$1 == null);var state_40390__$1 = (function (){var statearr_40396 = state_40390;(statearr_40396[(7)] = inst_40379__$1);
return statearr_40396;
})();if(cljs.core.truth_(inst_40380))
{var statearr_40397_40411 = state_40390__$1;(statearr_40397_40411[(1)] = (5));
} else
{var statearr_40398_40412 = state_40390__$1;(statearr_40398_40412[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40391 === (3)))
{var inst_40388 = (state_40390[(2)]);var state_40390__$1 = state_40390;return cljs.core.async.impl.ioc_helpers.return_chan(state_40390__$1,inst_40388);
} else
{if((state_val_40391 === (2)))
{var state_40390__$1 = state_40390;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40390__$1,(4),ch);
} else
{if((state_val_40391 === (1)))
{var inst_40376 = init;var state_40390__$1 = (function (){var statearr_40399 = state_40390;(statearr_40399[(8)] = inst_40376);
return statearr_40399;
})();var statearr_40400_40413 = state_40390__$1;(statearr_40400_40413[(2)] = null);
(statearr_40400_40413[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40404 = [null,null,null,null,null,null,null,null,null];(statearr_40404[(0)] = state_machine__5679__auto__);
(statearr_40404[(1)] = (1));
return statearr_40404;
});
var state_machine__5679__auto____1 = (function (state_40390){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40390);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40405){if((e40405 instanceof Object))
{var ex__5682__auto__ = e40405;var statearr_40406_40414 = state_40390;(statearr_40406_40414[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40390);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__40415 = state_40390;
state_40390 = G__40415;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40390){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40407 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_40477){var state_val_40478 = (state_40477[(1)]);if((state_val_40478 === (7)))
{var inst_40458 = (state_40477[(7)]);var inst_40463 = (state_40477[(2)]);var inst_40464 = cljs.core.next(inst_40458);var inst_40458__$1 = inst_40464;var state_40477__$1 = (function (){var statearr_40479 = state_40477;(statearr_40479[(7)] = inst_40458__$1);
(statearr_40479[(8)] = inst_40463);
return statearr_40479;
})();var statearr_40480_40498 = state_40477__$1;(statearr_40480_40498[(2)] = null);
(statearr_40480_40498[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (1)))
{var inst_40457 = cljs.core.seq(coll);var inst_40458 = inst_40457;var state_40477__$1 = (function (){var statearr_40481 = state_40477;(statearr_40481[(7)] = inst_40458);
return statearr_40481;
})();var statearr_40482_40499 = state_40477__$1;(statearr_40482_40499[(2)] = null);
(statearr_40482_40499[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (4)))
{var inst_40458 = (state_40477[(7)]);var inst_40461 = cljs.core.first(inst_40458);var state_40477__$1 = state_40477;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40477__$1,(7),ch,inst_40461);
} else
{if((state_val_40478 === (6)))
{var inst_40473 = (state_40477[(2)]);var state_40477__$1 = state_40477;var statearr_40483_40500 = state_40477__$1;(statearr_40483_40500[(2)] = inst_40473);
(statearr_40483_40500[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (3)))
{var inst_40475 = (state_40477[(2)]);var state_40477__$1 = state_40477;return cljs.core.async.impl.ioc_helpers.return_chan(state_40477__$1,inst_40475);
} else
{if((state_val_40478 === (2)))
{var inst_40458 = (state_40477[(7)]);var state_40477__$1 = state_40477;if(cljs.core.truth_(inst_40458))
{var statearr_40484_40501 = state_40477__$1;(statearr_40484_40501[(1)] = (4));
} else
{var statearr_40485_40502 = state_40477__$1;(statearr_40485_40502[(1)] = (5));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (9)))
{var state_40477__$1 = state_40477;var statearr_40486_40503 = state_40477__$1;(statearr_40486_40503[(2)] = null);
(statearr_40486_40503[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (5)))
{var state_40477__$1 = state_40477;if(cljs.core.truth_(close_QMARK_))
{var statearr_40487_40504 = state_40477__$1;(statearr_40487_40504[(1)] = (8));
} else
{var statearr_40488_40505 = state_40477__$1;(statearr_40488_40505[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (10)))
{var inst_40471 = (state_40477[(2)]);var state_40477__$1 = state_40477;var statearr_40489_40506 = state_40477__$1;(statearr_40489_40506[(2)] = inst_40471);
(statearr_40489_40506[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40478 === (8)))
{var inst_40468 = cljs.core.async.close_BANG_(ch);var state_40477__$1 = state_40477;var statearr_40490_40507 = state_40477__$1;(statearr_40490_40507[(2)] = inst_40468);
(statearr_40490_40507[(1)] = (10));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40494 = [null,null,null,null,null,null,null,null,null];(statearr_40494[(0)] = state_machine__5679__auto__);
(statearr_40494[(1)] = (1));
return statearr_40494;
});
var state_machine__5679__auto____1 = (function (state_40477){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40477);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40495){if((e40495 instanceof Object))
{var ex__5682__auto__ = e40495;var statearr_40496_40508 = state_40477;(statearr_40496_40508[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40477);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__40509 = state_40477;
state_40477 = G__40509;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40477){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_40497 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_40497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.Mux = (function (){var obj40511 = {};return obj40511;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj40513 = {};return obj40513;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t40737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40737 = (function (cs,ch,mult,meta40738){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta40738 = meta40738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40737.cljs$lang$type = true;
cljs.core.async.t40737.cljs$lang$ctorStr = "cljs.core.async/t40737";
cljs.core.async.t40737.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40737");
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t40737.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40739){var self__ = this;
var _40739__$1 = this;return self__.meta40738;
});})(cs))
;
cljs.core.async.t40737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40739,meta40738__$1){var self__ = this;
var _40739__$1 = this;return (new cljs.core.async.t40737(self__.cs,self__.ch,self__.mult,meta40738__$1));
});})(cs))
;
cljs.core.async.__GT_t40737 = ((function (cs){
return (function __GT_t40737(cs__$1,ch__$1,mult__$1,meta40738){return (new cljs.core.async.t40737(cs__$1,ch__$1,mult__$1,meta40738));
});})(cs))
;
}
return (new cljs.core.async.t40737(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___40960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40960,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40960,cs,m,dchan,dctr,done){
return (function (state_40874){var state_val_40875 = (state_40874[(1)]);if((state_val_40875 === (7)))
{var inst_40870 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40876_40961 = state_40874__$1;(statearr_40876_40961[(2)] = inst_40870);
(statearr_40876_40961[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (20)))
{var inst_40771 = (state_40874[(7)]);var inst_40781 = cljs.core.first(inst_40771);var inst_40782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40781,(0),null);var inst_40783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40781,(1),null);var state_40874__$1 = (function (){var statearr_40877 = state_40874;(statearr_40877[(8)] = inst_40782);
return statearr_40877;
})();if(cljs.core.truth_(inst_40783))
{var statearr_40878_40962 = state_40874__$1;(statearr_40878_40962[(1)] = (22));
} else
{var statearr_40879_40963 = state_40874__$1;(statearr_40879_40963[(1)] = (23));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (27)))
{var inst_40811 = (state_40874[(9)]);var inst_40813 = (state_40874[(10)]);var inst_40818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40811,inst_40813);var state_40874__$1 = (function (){var statearr_40880 = state_40874;(statearr_40880[(11)] = inst_40818);
return statearr_40880;
})();var statearr_40881_40964 = state_40874__$1;(statearr_40881_40964[(2)] = null);
(statearr_40881_40964[(1)] = (32));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (1)))
{var state_40874__$1 = state_40874;var statearr_40882_40965 = state_40874__$1;(statearr_40882_40965[(2)] = null);
(statearr_40882_40965[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (24)))
{var inst_40771 = (state_40874[(7)]);var inst_40788 = (state_40874[(2)]);var inst_40789 = cljs.core.next(inst_40771);var inst_40751 = inst_40789;var inst_40752 = null;var inst_40753 = (0);var inst_40754 = (0);var state_40874__$1 = (function (){var statearr_40883 = state_40874;(statearr_40883[(12)] = inst_40788);
(statearr_40883[(13)] = inst_40752);
(statearr_40883[(14)] = inst_40753);
(statearr_40883[(15)] = inst_40751);
(statearr_40883[(16)] = inst_40754);
return statearr_40883;
})();var statearr_40884_40966 = state_40874__$1;(statearr_40884_40966[(2)] = null);
(statearr_40884_40966[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (39)))
{var inst_40831 = (state_40874[(17)]);var inst_40849 = (state_40874[(2)]);var inst_40850 = cljs.core.next(inst_40831);var inst_40810 = inst_40850;var inst_40811 = null;var inst_40812 = (0);var inst_40813 = (0);var state_40874__$1 = (function (){var statearr_40888 = state_40874;(statearr_40888[(9)] = inst_40811);
(statearr_40888[(18)] = inst_40810);
(statearr_40888[(19)] = inst_40812);
(statearr_40888[(20)] = inst_40849);
(statearr_40888[(10)] = inst_40813);
return statearr_40888;
})();var statearr_40889_40967 = state_40874__$1;(statearr_40889_40967[(2)] = null);
(statearr_40889_40967[(1)] = (25));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (4)))
{var inst_40742 = (state_40874[(21)]);var inst_40742__$1 = (state_40874[(2)]);var inst_40743 = (inst_40742__$1 == null);var state_40874__$1 = (function (){var statearr_40890 = state_40874;(statearr_40890[(21)] = inst_40742__$1);
return statearr_40890;
})();if(cljs.core.truth_(inst_40743))
{var statearr_40891_40968 = state_40874__$1;(statearr_40891_40968[(1)] = (5));
} else
{var statearr_40892_40969 = state_40874__$1;(statearr_40892_40969[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (15)))
{var inst_40752 = (state_40874[(13)]);var inst_40753 = (state_40874[(14)]);var inst_40751 = (state_40874[(15)]);var inst_40754 = (state_40874[(16)]);var inst_40767 = (state_40874[(2)]);var inst_40768 = (inst_40754 + (1));var tmp40885 = inst_40752;var tmp40886 = inst_40753;var tmp40887 = inst_40751;var inst_40751__$1 = tmp40887;var inst_40752__$1 = tmp40885;var inst_40753__$1 = tmp40886;var inst_40754__$1 = inst_40768;var state_40874__$1 = (function (){var statearr_40893 = state_40874;(statearr_40893[(13)] = inst_40752__$1);
(statearr_40893[(14)] = inst_40753__$1);
(statearr_40893[(15)] = inst_40751__$1);
(statearr_40893[(22)] = inst_40767);
(statearr_40893[(16)] = inst_40754__$1);
return statearr_40893;
})();var statearr_40894_40970 = state_40874__$1;(statearr_40894_40970[(2)] = null);
(statearr_40894_40970[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (21)))
{var inst_40792 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40895_40971 = state_40874__$1;(statearr_40895_40971[(2)] = inst_40792);
(statearr_40895_40971[(1)] = (18));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (31)))
{var inst_40818 = (state_40874[(11)]);var inst_40819 = (state_40874[(2)]);var inst_40820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_40821 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40818);var state_40874__$1 = (function (){var statearr_40896 = state_40874;(statearr_40896[(23)] = inst_40820);
(statearr_40896[(24)] = inst_40819);
return statearr_40896;
})();var statearr_40897_40972 = state_40874__$1;(statearr_40897_40972[(2)] = inst_40821);
cljs.core.async.impl.ioc_helpers.process_exception(state_40874__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (32)))
{var inst_40742 = (state_40874[(21)]);var inst_40818 = (state_40874[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40874,(31),Object,null,(30));var inst_40825 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40818,inst_40742,done);var state_40874__$1 = state_40874;var statearr_40898_40973 = state_40874__$1;(statearr_40898_40973[(2)] = inst_40825);
cljs.core.async.impl.ioc_helpers.process_exception(state_40874__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (40)))
{var inst_40840 = (state_40874[(25)]);var inst_40841 = (state_40874[(2)]);var inst_40842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_40843 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40840);var state_40874__$1 = (function (){var statearr_40899 = state_40874;(statearr_40899[(26)] = inst_40841);
(statearr_40899[(27)] = inst_40842);
return statearr_40899;
})();var statearr_40900_40974 = state_40874__$1;(statearr_40900_40974[(2)] = inst_40843);
cljs.core.async.impl.ioc_helpers.process_exception(state_40874__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (33)))
{var inst_40831 = (state_40874[(17)]);var inst_40833 = cljs.core.chunked_seq_QMARK_(inst_40831);var state_40874__$1 = state_40874;if(inst_40833)
{var statearr_40901_40975 = state_40874__$1;(statearr_40901_40975[(1)] = (36));
} else
{var statearr_40902_40976 = state_40874__$1;(statearr_40902_40976[(1)] = (37));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (13)))
{var inst_40761 = (state_40874[(28)]);var inst_40764 = cljs.core.async.close_BANG_(inst_40761);var state_40874__$1 = state_40874;var statearr_40903_40977 = state_40874__$1;(statearr_40903_40977[(2)] = inst_40764);
(statearr_40903_40977[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (22)))
{var inst_40782 = (state_40874[(8)]);var inst_40785 = cljs.core.async.close_BANG_(inst_40782);var state_40874__$1 = state_40874;var statearr_40904_40978 = state_40874__$1;(statearr_40904_40978[(2)] = inst_40785);
(statearr_40904_40978[(1)] = (24));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (36)))
{var inst_40831 = (state_40874[(17)]);var inst_40835 = cljs.core.chunk_first(inst_40831);var inst_40836 = cljs.core.chunk_rest(inst_40831);var inst_40837 = cljs.core.count(inst_40835);var inst_40810 = inst_40836;var inst_40811 = inst_40835;var inst_40812 = inst_40837;var inst_40813 = (0);var state_40874__$1 = (function (){var statearr_40905 = state_40874;(statearr_40905[(9)] = inst_40811);
(statearr_40905[(18)] = inst_40810);
(statearr_40905[(19)] = inst_40812);
(statearr_40905[(10)] = inst_40813);
return statearr_40905;
})();var statearr_40906_40979 = state_40874__$1;(statearr_40906_40979[(2)] = null);
(statearr_40906_40979[(1)] = (25));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (41)))
{var inst_40742 = (state_40874[(21)]);var inst_40840 = (state_40874[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40874,(40),Object,null,(39));var inst_40847 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40840,inst_40742,done);var state_40874__$1 = state_40874;var statearr_40907_40980 = state_40874__$1;(statearr_40907_40980[(2)] = inst_40847);
cljs.core.async.impl.ioc_helpers.process_exception(state_40874__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (43)))
{var state_40874__$1 = state_40874;var statearr_40908_40981 = state_40874__$1;(statearr_40908_40981[(2)] = null);
(statearr_40908_40981[(1)] = (44));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (29)))
{var inst_40858 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40909_40982 = state_40874__$1;(statearr_40909_40982[(2)] = inst_40858);
(statearr_40909_40982[(1)] = (26));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (44)))
{var inst_40867 = (state_40874[(2)]);var state_40874__$1 = (function (){var statearr_40910 = state_40874;(statearr_40910[(29)] = inst_40867);
return statearr_40910;
})();var statearr_40911_40983 = state_40874__$1;(statearr_40911_40983[(2)] = null);
(statearr_40911_40983[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (6)))
{var inst_40802 = (state_40874[(30)]);var inst_40801 = cljs.core.deref(cs);var inst_40802__$1 = cljs.core.keys(inst_40801);var inst_40803 = cljs.core.count(inst_40802__$1);var inst_40804 = cljs.core.reset_BANG_(dctr,inst_40803);var inst_40809 = cljs.core.seq(inst_40802__$1);var inst_40810 = inst_40809;var inst_40811 = null;var inst_40812 = (0);var inst_40813 = (0);var state_40874__$1 = (function (){var statearr_40912 = state_40874;(statearr_40912[(9)] = inst_40811);
(statearr_40912[(18)] = inst_40810);
(statearr_40912[(19)] = inst_40812);
(statearr_40912[(30)] = inst_40802__$1);
(statearr_40912[(31)] = inst_40804);
(statearr_40912[(10)] = inst_40813);
return statearr_40912;
})();var statearr_40913_40984 = state_40874__$1;(statearr_40913_40984[(2)] = null);
(statearr_40913_40984[(1)] = (25));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (28)))
{var inst_40810 = (state_40874[(18)]);var inst_40831 = (state_40874[(17)]);var inst_40831__$1 = cljs.core.seq(inst_40810);var state_40874__$1 = (function (){var statearr_40914 = state_40874;(statearr_40914[(17)] = inst_40831__$1);
return statearr_40914;
})();if(inst_40831__$1)
{var statearr_40915_40985 = state_40874__$1;(statearr_40915_40985[(1)] = (33));
} else
{var statearr_40916_40986 = state_40874__$1;(statearr_40916_40986[(1)] = (34));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (25)))
{var inst_40812 = (state_40874[(19)]);var inst_40813 = (state_40874[(10)]);var inst_40815 = (inst_40813 < inst_40812);var inst_40816 = inst_40815;var state_40874__$1 = state_40874;if(cljs.core.truth_(inst_40816))
{var statearr_40917_40987 = state_40874__$1;(statearr_40917_40987[(1)] = (27));
} else
{var statearr_40918_40988 = state_40874__$1;(statearr_40918_40988[(1)] = (28));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (34)))
{var state_40874__$1 = state_40874;var statearr_40919_40989 = state_40874__$1;(statearr_40919_40989[(2)] = null);
(statearr_40919_40989[(1)] = (35));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (17)))
{var state_40874__$1 = state_40874;var statearr_40920_40990 = state_40874__$1;(statearr_40920_40990[(2)] = null);
(statearr_40920_40990[(1)] = (18));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (3)))
{var inst_40872 = (state_40874[(2)]);var state_40874__$1 = state_40874;return cljs.core.async.impl.ioc_helpers.return_chan(state_40874__$1,inst_40872);
} else
{if((state_val_40875 === (12)))
{var inst_40797 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40921_40991 = state_40874__$1;(statearr_40921_40991[(2)] = inst_40797);
(statearr_40921_40991[(1)] = (9));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (2)))
{var state_40874__$1 = state_40874;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40874__$1,(4),ch);
} else
{if((state_val_40875 === (23)))
{var state_40874__$1 = state_40874;var statearr_40922_40992 = state_40874__$1;(statearr_40922_40992[(2)] = null);
(statearr_40922_40992[(1)] = (24));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (35)))
{var inst_40856 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40923_40993 = state_40874__$1;(statearr_40923_40993[(2)] = inst_40856);
(statearr_40923_40993[(1)] = (29));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (19)))
{var inst_40771 = (state_40874[(7)]);var inst_40775 = cljs.core.chunk_first(inst_40771);var inst_40776 = cljs.core.chunk_rest(inst_40771);var inst_40777 = cljs.core.count(inst_40775);var inst_40751 = inst_40776;var inst_40752 = inst_40775;var inst_40753 = inst_40777;var inst_40754 = (0);var state_40874__$1 = (function (){var statearr_40924 = state_40874;(statearr_40924[(13)] = inst_40752);
(statearr_40924[(14)] = inst_40753);
(statearr_40924[(15)] = inst_40751);
(statearr_40924[(16)] = inst_40754);
return statearr_40924;
})();var statearr_40925_40994 = state_40874__$1;(statearr_40925_40994[(2)] = null);
(statearr_40925_40994[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (11)))
{var inst_40771 = (state_40874[(7)]);var inst_40751 = (state_40874[(15)]);var inst_40771__$1 = cljs.core.seq(inst_40751);var state_40874__$1 = (function (){var statearr_40926 = state_40874;(statearr_40926[(7)] = inst_40771__$1);
return statearr_40926;
})();if(inst_40771__$1)
{var statearr_40927_40995 = state_40874__$1;(statearr_40927_40995[(1)] = (16));
} else
{var statearr_40928_40996 = state_40874__$1;(statearr_40928_40996[(1)] = (17));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (9)))
{var inst_40799 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40929_40997 = state_40874__$1;(statearr_40929_40997[(2)] = inst_40799);
(statearr_40929_40997[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (5)))
{var inst_40749 = cljs.core.deref(cs);var inst_40750 = cljs.core.seq(inst_40749);var inst_40751 = inst_40750;var inst_40752 = null;var inst_40753 = (0);var inst_40754 = (0);var state_40874__$1 = (function (){var statearr_40930 = state_40874;(statearr_40930[(13)] = inst_40752);
(statearr_40930[(14)] = inst_40753);
(statearr_40930[(15)] = inst_40751);
(statearr_40930[(16)] = inst_40754);
return statearr_40930;
})();var statearr_40931_40998 = state_40874__$1;(statearr_40931_40998[(2)] = null);
(statearr_40931_40998[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (14)))
{var state_40874__$1 = state_40874;var statearr_40932_40999 = state_40874__$1;(statearr_40932_40999[(2)] = null);
(statearr_40932_40999[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (45)))
{var inst_40864 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40933_41000 = state_40874__$1;(statearr_40933_41000[(2)] = inst_40864);
(statearr_40933_41000[(1)] = (44));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (26)))
{var inst_40802 = (state_40874[(30)]);var inst_40860 = (state_40874[(2)]);var inst_40861 = cljs.core.seq(inst_40802);var state_40874__$1 = (function (){var statearr_40934 = state_40874;(statearr_40934[(32)] = inst_40860);
return statearr_40934;
})();if(inst_40861)
{var statearr_40935_41001 = state_40874__$1;(statearr_40935_41001[(1)] = (42));
} else
{var statearr_40936_41002 = state_40874__$1;(statearr_40936_41002[(1)] = (43));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (16)))
{var inst_40771 = (state_40874[(7)]);var inst_40773 = cljs.core.chunked_seq_QMARK_(inst_40771);var state_40874__$1 = state_40874;if(inst_40773)
{var statearr_40940_41003 = state_40874__$1;(statearr_40940_41003[(1)] = (19));
} else
{var statearr_40941_41004 = state_40874__$1;(statearr_40941_41004[(1)] = (20));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (38)))
{var inst_40853 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40942_41005 = state_40874__$1;(statearr_40942_41005[(2)] = inst_40853);
(statearr_40942_41005[(1)] = (35));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (30)))
{var inst_40811 = (state_40874[(9)]);var inst_40810 = (state_40874[(18)]);var inst_40812 = (state_40874[(19)]);var inst_40813 = (state_40874[(10)]);var inst_40827 = (state_40874[(2)]);var inst_40828 = (inst_40813 + (1));var tmp40937 = inst_40811;var tmp40938 = inst_40810;var tmp40939 = inst_40812;var inst_40810__$1 = tmp40938;var inst_40811__$1 = tmp40937;var inst_40812__$1 = tmp40939;var inst_40813__$1 = inst_40828;var state_40874__$1 = (function (){var statearr_40943 = state_40874;(statearr_40943[(9)] = inst_40811__$1);
(statearr_40943[(18)] = inst_40810__$1);
(statearr_40943[(19)] = inst_40812__$1);
(statearr_40943[(33)] = inst_40827);
(statearr_40943[(10)] = inst_40813__$1);
return statearr_40943;
})();var statearr_40944_41006 = state_40874__$1;(statearr_40944_41006[(2)] = null);
(statearr_40944_41006[(1)] = (25));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (10)))
{var inst_40752 = (state_40874[(13)]);var inst_40754 = (state_40874[(16)]);var inst_40760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40752,inst_40754);var inst_40761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40760,(0),null);var inst_40762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40760,(1),null);var state_40874__$1 = (function (){var statearr_40945 = state_40874;(statearr_40945[(28)] = inst_40761);
return statearr_40945;
})();if(cljs.core.truth_(inst_40762))
{var statearr_40946_41007 = state_40874__$1;(statearr_40946_41007[(1)] = (13));
} else
{var statearr_40947_41008 = state_40874__$1;(statearr_40947_41008[(1)] = (14));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (18)))
{var inst_40795 = (state_40874[(2)]);var state_40874__$1 = state_40874;var statearr_40948_41009 = state_40874__$1;(statearr_40948_41009[(2)] = inst_40795);
(statearr_40948_41009[(1)] = (12));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (42)))
{var state_40874__$1 = state_40874;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40874__$1,(45),dchan);
} else
{if((state_val_40875 === (37)))
{var inst_40831 = (state_40874[(17)]);var inst_40840 = cljs.core.first(inst_40831);var state_40874__$1 = (function (){var statearr_40949 = state_40874;(statearr_40949[(25)] = inst_40840);
return statearr_40949;
})();var statearr_40950_41010 = state_40874__$1;(statearr_40950_41010[(2)] = null);
(statearr_40950_41010[(1)] = (41));
return cljs.core.constant$keyword$777;
} else
{if((state_val_40875 === (8)))
{var inst_40753 = (state_40874[(14)]);var inst_40754 = (state_40874[(16)]);var inst_40756 = (inst_40754 < inst_40753);var inst_40757 = inst_40756;var state_40874__$1 = state_40874;if(cljs.core.truth_(inst_40757))
{var statearr_40951_41011 = state_40874__$1;(statearr_40951_41011[(1)] = (10));
} else
{var statearr_40952_41012 = state_40874__$1;(statearr_40952_41012[(1)] = (11));
}
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___40960,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40960,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40956[(0)] = state_machine__5679__auto__);
(statearr_40956[(1)] = (1));
return statearr_40956;
});
var state_machine__5679__auto____1 = (function (state_40874){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40874);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40957){if((e40957 instanceof Object))
{var ex__5682__auto__ = e40957;var statearr_40958_41013 = state_40874;(statearr_40958_41013[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40874);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e40957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41014 = state_40874;
state_40874 = G__41014;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40874){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40960,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40959 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40960);
return statearr_40959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40960,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj41016 = {};return obj41016;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$784,null,cljs.core.constant$keyword$785,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$786);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$785);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$786,chs);var pauses = pick(cljs.core.constant$keyword$784,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$787,solos,cljs.core.constant$keyword$788,pick(cljs.core.constant$keyword$785,chs),cljs.core.constant$keyword$789,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$784)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t41126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41126 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41127){
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
this.meta41127 = meta41127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41126.cljs$lang$type = true;
cljs.core.async.t41126.cljs$lang$ctorStr = "cljs.core.async/t41126";
cljs.core.async.t41126.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41126");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41126.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41128){var self__ = this;
var _41128__$1 = this;return self__.meta41127;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t41126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41128,meta41127__$1){var self__ = this;
var _41128__$1 = this;return (new cljs.core.async.t41126(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41127__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t41126 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t41126(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41127){return (new cljs.core.async.t41126(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41127));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t41126(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___41235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41193){var state_val_41194 = (state_41193[(1)]);if((state_val_41194 === (7)))
{var inst_41142 = (state_41193[(7)]);var inst_41147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41142);var state_41193__$1 = state_41193;var statearr_41195_41236 = state_41193__$1;(statearr_41195_41236[(2)] = inst_41147);
(statearr_41195_41236[(1)] = (9));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (20)))
{var inst_41157 = (state_41193[(8)]);var state_41193__$1 = state_41193;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41193__$1,(23),out,inst_41157);
} else
{if((state_val_41194 === (1)))
{var inst_41132 = (state_41193[(9)]);var inst_41132__$1 = calc_state();var inst_41133 = cljs.core.seq_QMARK_(inst_41132__$1);var state_41193__$1 = (function (){var statearr_41196 = state_41193;(statearr_41196[(9)] = inst_41132__$1);
return statearr_41196;
})();if(inst_41133)
{var statearr_41197_41237 = state_41193__$1;(statearr_41197_41237[(1)] = (2));
} else
{var statearr_41198_41238 = state_41193__$1;(statearr_41198_41238[(1)] = (3));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (4)))
{var inst_41132 = (state_41193[(9)]);var inst_41138 = (state_41193[(2)]);var inst_41139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41138,cljs.core.constant$keyword$789);var inst_41140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41138,cljs.core.constant$keyword$788);var inst_41141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41138,cljs.core.constant$keyword$787);var inst_41142 = inst_41132;var state_41193__$1 = (function (){var statearr_41199 = state_41193;(statearr_41199[(7)] = inst_41142);
(statearr_41199[(10)] = inst_41139);
(statearr_41199[(11)] = inst_41140);
(statearr_41199[(12)] = inst_41141);
return statearr_41199;
})();var statearr_41200_41239 = state_41193__$1;(statearr_41200_41239[(2)] = null);
(statearr_41200_41239[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (15)))
{var state_41193__$1 = state_41193;var statearr_41201_41240 = state_41193__$1;(statearr_41201_41240[(2)] = null);
(statearr_41201_41240[(1)] = (16));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (21)))
{var state_41193__$1 = state_41193;var statearr_41202_41241 = state_41193__$1;(statearr_41202_41241[(2)] = null);
(statearr_41202_41241[(1)] = (22));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (13)))
{var inst_41189 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41203_41242 = state_41193__$1;(statearr_41203_41242[(2)] = inst_41189);
(statearr_41203_41242[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (22)))
{var inst_41150 = (state_41193[(13)]);var inst_41186 = (state_41193[(2)]);var inst_41142 = inst_41150;var state_41193__$1 = (function (){var statearr_41204 = state_41193;(statearr_41204[(14)] = inst_41186);
(statearr_41204[(7)] = inst_41142);
return statearr_41204;
})();var statearr_41205_41243 = state_41193__$1;(statearr_41205_41243[(2)] = null);
(statearr_41205_41243[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (6)))
{var inst_41191 = (state_41193[(2)]);var state_41193__$1 = state_41193;return cljs.core.async.impl.ioc_helpers.return_chan(state_41193__$1,inst_41191);
} else
{if((state_val_41194 === (17)))
{var inst_41172 = (state_41193[(15)]);var state_41193__$1 = state_41193;var statearr_41206_41244 = state_41193__$1;(statearr_41206_41244[(2)] = inst_41172);
(statearr_41206_41244[(1)] = (19));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (3)))
{var inst_41132 = (state_41193[(9)]);var state_41193__$1 = state_41193;var statearr_41207_41245 = state_41193__$1;(statearr_41207_41245[(2)] = inst_41132);
(statearr_41207_41245[(1)] = (4));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (12)))
{var inst_41158 = (state_41193[(16)]);var inst_41153 = (state_41193[(17)]);var inst_41172 = (state_41193[(15)]);var inst_41172__$1 = (inst_41153.cljs$core$IFn$_invoke$arity$1 ? inst_41153.cljs$core$IFn$_invoke$arity$1(inst_41158) : inst_41153.call(null,inst_41158));var state_41193__$1 = (function (){var statearr_41208 = state_41193;(statearr_41208[(15)] = inst_41172__$1);
return statearr_41208;
})();if(cljs.core.truth_(inst_41172__$1))
{var statearr_41209_41246 = state_41193__$1;(statearr_41209_41246[(1)] = (17));
} else
{var statearr_41210_41247 = state_41193__$1;(statearr_41210_41247[(1)] = (18));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (2)))
{var inst_41132 = (state_41193[(9)]);var inst_41135 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41132);var state_41193__$1 = state_41193;var statearr_41211_41248 = state_41193__$1;(statearr_41211_41248[(2)] = inst_41135);
(statearr_41211_41248[(1)] = (4));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (23)))
{var inst_41183 = (state_41193[(2)]);var state_41193__$1 = state_41193;var statearr_41212_41249 = state_41193__$1;(statearr_41212_41249[(2)] = inst_41183);
(statearr_41212_41249[(1)] = (22));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (19)))
{var inst_41180 = (state_41193[(2)]);var state_41193__$1 = state_41193;if(cljs.core.truth_(inst_41180))
{var statearr_41213_41250 = state_41193__$1;(statearr_41213_41250[(1)] = (20));
} else
{var statearr_41214_41251 = state_41193__$1;(statearr_41214_41251[(1)] = (21));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (11)))
{var inst_41157 = (state_41193[(8)]);var inst_41163 = (inst_41157 == null);var state_41193__$1 = state_41193;if(cljs.core.truth_(inst_41163))
{var statearr_41215_41252 = state_41193__$1;(statearr_41215_41252[(1)] = (14));
} else
{var statearr_41216_41253 = state_41193__$1;(statearr_41216_41253[(1)] = (15));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (9)))
{var inst_41150 = (state_41193[(13)]);var inst_41150__$1 = (state_41193[(2)]);var inst_41151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41150__$1,cljs.core.constant$keyword$789);var inst_41152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41150__$1,cljs.core.constant$keyword$788);var inst_41153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41150__$1,cljs.core.constant$keyword$787);var state_41193__$1 = (function (){var statearr_41217 = state_41193;(statearr_41217[(13)] = inst_41150__$1);
(statearr_41217[(17)] = inst_41153);
(statearr_41217[(18)] = inst_41152);
return statearr_41217;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41193__$1,(10),inst_41151);
} else
{if((state_val_41194 === (5)))
{var inst_41142 = (state_41193[(7)]);var inst_41145 = cljs.core.seq_QMARK_(inst_41142);var state_41193__$1 = state_41193;if(inst_41145)
{var statearr_41218_41254 = state_41193__$1;(statearr_41218_41254[(1)] = (7));
} else
{var statearr_41219_41255 = state_41193__$1;(statearr_41219_41255[(1)] = (8));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (14)))
{var inst_41158 = (state_41193[(16)]);var inst_41165 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41158);var state_41193__$1 = state_41193;var statearr_41220_41256 = state_41193__$1;(statearr_41220_41256[(2)] = inst_41165);
(statearr_41220_41256[(1)] = (16));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (16)))
{var inst_41168 = (state_41193[(2)]);var inst_41169 = calc_state();var inst_41142 = inst_41169;var state_41193__$1 = (function (){var statearr_41221 = state_41193;(statearr_41221[(19)] = inst_41168);
(statearr_41221[(7)] = inst_41142);
return statearr_41221;
})();var statearr_41222_41257 = state_41193__$1;(statearr_41222_41257[(2)] = null);
(statearr_41222_41257[(1)] = (5));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (10)))
{var inst_41158 = (state_41193[(16)]);var inst_41157 = (state_41193[(8)]);var inst_41156 = (state_41193[(2)]);var inst_41157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41156,(0),null);var inst_41158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41156,(1),null);var inst_41159 = (inst_41157__$1 == null);var inst_41160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41158__$1,change);var inst_41161 = (inst_41159) || (inst_41160);var state_41193__$1 = (function (){var statearr_41223 = state_41193;(statearr_41223[(16)] = inst_41158__$1);
(statearr_41223[(8)] = inst_41157__$1);
return statearr_41223;
})();if(cljs.core.truth_(inst_41161))
{var statearr_41224_41258 = state_41193__$1;(statearr_41224_41258[(1)] = (11));
} else
{var statearr_41225_41259 = state_41193__$1;(statearr_41225_41259[(1)] = (12));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (18)))
{var inst_41158 = (state_41193[(16)]);var inst_41153 = (state_41193[(17)]);var inst_41152 = (state_41193[(18)]);var inst_41175 = cljs.core.empty_QMARK_(inst_41153);var inst_41176 = (inst_41152.cljs$core$IFn$_invoke$arity$1 ? inst_41152.cljs$core$IFn$_invoke$arity$1(inst_41158) : inst_41152.call(null,inst_41158));var inst_41177 = cljs.core.not(inst_41176);var inst_41178 = (inst_41175) && (inst_41177);var state_41193__$1 = state_41193;var statearr_41226_41260 = state_41193__$1;(statearr_41226_41260[(2)] = inst_41178);
(statearr_41226_41260[(1)] = (19));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41194 === (8)))
{var inst_41142 = (state_41193[(7)]);var state_41193__$1 = state_41193;var statearr_41227_41261 = state_41193__$1;(statearr_41227_41261[(2)] = inst_41142);
(statearr_41227_41261[(1)] = (9));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41231[(0)] = state_machine__5679__auto__);
(statearr_41231[(1)] = (1));
return statearr_41231;
});
var state_machine__5679__auto____1 = (function (state_41193){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41193);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41232){if((e41232 instanceof Object))
{var ex__5682__auto__ = e41232;var statearr_41233_41262 = state_41193;(statearr_41233_41262[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41193);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e41232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41263 = state_41193;
state_41193 = G__41263;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41193){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_41234 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41235);
return statearr_41234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41235,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj41265 = {};return obj41265;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3543__auto__,mults){
return (function (p1__41266_SHARP_){if(cljs.core.truth_((p1__41266_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41266_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41266_SHARP_.call(null,topic))))
{return p1__41266_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41266_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t41391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41391 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta41392){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta41392 = meta41392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41391.cljs$lang$type = true;
cljs.core.async.t41391.cljs$lang$ctorStr = "cljs.core.async/t41391";
cljs.core.async.t41391.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t41391");
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t41391.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t41391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41393){var self__ = this;
var _41393__$1 = this;return self__.meta41392;
});})(mults,ensure_mult))
;
cljs.core.async.t41391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41393,meta41392__$1){var self__ = this;
var _41393__$1 = this;return (new cljs.core.async.t41391(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta41392__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t41391 = ((function (mults,ensure_mult){
return (function __GT_t41391(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41392){return (new cljs.core.async.t41391(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41392));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t41391(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___41515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41515,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41515,mults,ensure_mult,p){
return (function (state_41467){var state_val_41468 = (state_41467[(1)]);if((state_val_41468 === (7)))
{var inst_41463 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41469_41516 = state_41467__$1;(statearr_41469_41516[(2)] = inst_41463);
(statearr_41469_41516[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (20)))
{var state_41467__$1 = state_41467;var statearr_41470_41517 = state_41467__$1;(statearr_41470_41517[(2)] = null);
(statearr_41470_41517[(1)] = (21));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (1)))
{var state_41467__$1 = state_41467;var statearr_41471_41518 = state_41467__$1;(statearr_41471_41518[(2)] = null);
(statearr_41471_41518[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (24)))
{var inst_41396 = (state_41467[(7)]);var inst_41446 = (state_41467[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41467,(23),Object,null,(22));var inst_41453 = cljs.core.async.muxch_STAR_(inst_41446);var state_41467__$1 = state_41467;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41467__$1,(25),inst_41453,inst_41396);
} else
{if((state_val_41468 === (4)))
{var inst_41396 = (state_41467[(7)]);var inst_41396__$1 = (state_41467[(2)]);var inst_41397 = (inst_41396__$1 == null);var state_41467__$1 = (function (){var statearr_41472 = state_41467;(statearr_41472[(7)] = inst_41396__$1);
return statearr_41472;
})();if(cljs.core.truth_(inst_41397))
{var statearr_41473_41519 = state_41467__$1;(statearr_41473_41519[(1)] = (5));
} else
{var statearr_41474_41520 = state_41467__$1;(statearr_41474_41520[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (15)))
{var inst_41438 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41475_41521 = state_41467__$1;(statearr_41475_41521[(2)] = inst_41438);
(statearr_41475_41521[(1)] = (12));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (21)))
{var inst_41460 = (state_41467[(2)]);var state_41467__$1 = (function (){var statearr_41476 = state_41467;(statearr_41476[(9)] = inst_41460);
return statearr_41476;
})();var statearr_41477_41522 = state_41467__$1;(statearr_41477_41522[(2)] = null);
(statearr_41477_41522[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (13)))
{var inst_41420 = (state_41467[(10)]);var inst_41422 = cljs.core.chunked_seq_QMARK_(inst_41420);var state_41467__$1 = state_41467;if(inst_41422)
{var statearr_41478_41523 = state_41467__$1;(statearr_41478_41523[(1)] = (16));
} else
{var statearr_41479_41524 = state_41467__$1;(statearr_41479_41524[(1)] = (17));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (22)))
{var inst_41457 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41480_41525 = state_41467__$1;(statearr_41480_41525[(2)] = inst_41457);
(statearr_41480_41525[(1)] = (21));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (6)))
{var inst_41444 = (state_41467[(11)]);var inst_41396 = (state_41467[(7)]);var inst_41446 = (state_41467[(8)]);var inst_41444__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41396) : topic_fn.call(null,inst_41396));var inst_41445 = cljs.core.deref(mults);var inst_41446__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41445,inst_41444__$1);var state_41467__$1 = (function (){var statearr_41481 = state_41467;(statearr_41481[(11)] = inst_41444__$1);
(statearr_41481[(8)] = inst_41446__$1);
return statearr_41481;
})();if(cljs.core.truth_(inst_41446__$1))
{var statearr_41482_41526 = state_41467__$1;(statearr_41482_41526[(1)] = (19));
} else
{var statearr_41483_41527 = state_41467__$1;(statearr_41483_41527[(1)] = (20));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (25)))
{var inst_41455 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41484_41528 = state_41467__$1;(statearr_41484_41528[(2)] = inst_41455);
cljs.core.async.impl.ioc_helpers.process_exception(state_41467__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (17)))
{var inst_41420 = (state_41467[(10)]);var inst_41429 = cljs.core.first(inst_41420);var inst_41430 = cljs.core.async.muxch_STAR_(inst_41429);var inst_41431 = cljs.core.async.close_BANG_(inst_41430);var inst_41432 = cljs.core.next(inst_41420);var inst_41406 = inst_41432;var inst_41407 = null;var inst_41408 = (0);var inst_41409 = (0);var state_41467__$1 = (function (){var statearr_41485 = state_41467;(statearr_41485[(12)] = inst_41407);
(statearr_41485[(13)] = inst_41408);
(statearr_41485[(14)] = inst_41409);
(statearr_41485[(15)] = inst_41431);
(statearr_41485[(16)] = inst_41406);
return statearr_41485;
})();var statearr_41486_41529 = state_41467__$1;(statearr_41486_41529[(2)] = null);
(statearr_41486_41529[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (3)))
{var inst_41465 = (state_41467[(2)]);var state_41467__$1 = state_41467;return cljs.core.async.impl.ioc_helpers.return_chan(state_41467__$1,inst_41465);
} else
{if((state_val_41468 === (12)))
{var inst_41440 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41487_41530 = state_41467__$1;(statearr_41487_41530[(2)] = inst_41440);
(statearr_41487_41530[(1)] = (9));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (2)))
{var state_41467__$1 = state_41467;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41467__$1,(4),ch);
} else
{if((state_val_41468 === (23)))
{var inst_41444 = (state_41467[(11)]);var inst_41448 = (state_41467[(2)]);var inst_41449 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41444);var state_41467__$1 = (function (){var statearr_41488 = state_41467;(statearr_41488[(17)] = inst_41448);
return statearr_41488;
})();var statearr_41489_41531 = state_41467__$1;(statearr_41489_41531[(2)] = inst_41449);
cljs.core.async.impl.ioc_helpers.process_exception(state_41467__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (19)))
{var state_41467__$1 = state_41467;var statearr_41490_41532 = state_41467__$1;(statearr_41490_41532[(2)] = null);
(statearr_41490_41532[(1)] = (24));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (11)))
{var inst_41420 = (state_41467[(10)]);var inst_41406 = (state_41467[(16)]);var inst_41420__$1 = cljs.core.seq(inst_41406);var state_41467__$1 = (function (){var statearr_41491 = state_41467;(statearr_41491[(10)] = inst_41420__$1);
return statearr_41491;
})();if(inst_41420__$1)
{var statearr_41492_41533 = state_41467__$1;(statearr_41492_41533[(1)] = (13));
} else
{var statearr_41493_41534 = state_41467__$1;(statearr_41493_41534[(1)] = (14));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (9)))
{var inst_41442 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41494_41535 = state_41467__$1;(statearr_41494_41535[(2)] = inst_41442);
(statearr_41494_41535[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (5)))
{var inst_41403 = cljs.core.deref(mults);var inst_41404 = cljs.core.vals(inst_41403);var inst_41405 = cljs.core.seq(inst_41404);var inst_41406 = inst_41405;var inst_41407 = null;var inst_41408 = (0);var inst_41409 = (0);var state_41467__$1 = (function (){var statearr_41495 = state_41467;(statearr_41495[(12)] = inst_41407);
(statearr_41495[(13)] = inst_41408);
(statearr_41495[(14)] = inst_41409);
(statearr_41495[(16)] = inst_41406);
return statearr_41495;
})();var statearr_41496_41536 = state_41467__$1;(statearr_41496_41536[(2)] = null);
(statearr_41496_41536[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (14)))
{var state_41467__$1 = state_41467;var statearr_41500_41537 = state_41467__$1;(statearr_41500_41537[(2)] = null);
(statearr_41500_41537[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (16)))
{var inst_41420 = (state_41467[(10)]);var inst_41424 = cljs.core.chunk_first(inst_41420);var inst_41425 = cljs.core.chunk_rest(inst_41420);var inst_41426 = cljs.core.count(inst_41424);var inst_41406 = inst_41425;var inst_41407 = inst_41424;var inst_41408 = inst_41426;var inst_41409 = (0);var state_41467__$1 = (function (){var statearr_41501 = state_41467;(statearr_41501[(12)] = inst_41407);
(statearr_41501[(13)] = inst_41408);
(statearr_41501[(14)] = inst_41409);
(statearr_41501[(16)] = inst_41406);
return statearr_41501;
})();var statearr_41502_41538 = state_41467__$1;(statearr_41502_41538[(2)] = null);
(statearr_41502_41538[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (10)))
{var inst_41407 = (state_41467[(12)]);var inst_41408 = (state_41467[(13)]);var inst_41409 = (state_41467[(14)]);var inst_41406 = (state_41467[(16)]);var inst_41414 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41407,inst_41409);var inst_41415 = cljs.core.async.muxch_STAR_(inst_41414);var inst_41416 = cljs.core.async.close_BANG_(inst_41415);var inst_41417 = (inst_41409 + (1));var tmp41497 = inst_41407;var tmp41498 = inst_41408;var tmp41499 = inst_41406;var inst_41406__$1 = tmp41499;var inst_41407__$1 = tmp41497;var inst_41408__$1 = tmp41498;var inst_41409__$1 = inst_41417;var state_41467__$1 = (function (){var statearr_41503 = state_41467;(statearr_41503[(12)] = inst_41407__$1);
(statearr_41503[(13)] = inst_41408__$1);
(statearr_41503[(14)] = inst_41409__$1);
(statearr_41503[(18)] = inst_41416);
(statearr_41503[(16)] = inst_41406__$1);
return statearr_41503;
})();var statearr_41504_41539 = state_41467__$1;(statearr_41504_41539[(2)] = null);
(statearr_41504_41539[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (18)))
{var inst_41435 = (state_41467[(2)]);var state_41467__$1 = state_41467;var statearr_41505_41540 = state_41467__$1;(statearr_41505_41540[(2)] = inst_41435);
(statearr_41505_41540[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41468 === (8)))
{var inst_41408 = (state_41467[(13)]);var inst_41409 = (state_41467[(14)]);var inst_41411 = (inst_41409 < inst_41408);var inst_41412 = inst_41411;var state_41467__$1 = state_41467;if(cljs.core.truth_(inst_41412))
{var statearr_41506_41541 = state_41467__$1;(statearr_41506_41541[(1)] = (10));
} else
{var statearr_41507_41542 = state_41467__$1;(statearr_41507_41542[(1)] = (11));
}
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___41515,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___41515,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41511[(0)] = state_machine__5679__auto__);
(statearr_41511[(1)] = (1));
return statearr_41511;
});
var state_machine__5679__auto____1 = (function (state_41467){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41467);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41512){if((e41512 instanceof Object))
{var ex__5682__auto__ = e41512;var statearr_41513_41543 = state_41467;(statearr_41513_41543[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41467);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e41512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41544 = state_41467;
state_41467 = G__41544;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41467){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41515,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_41514 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41515);
return statearr_41514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41515,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___41681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41651){var state_val_41652 = (state_41651[(1)]);if((state_val_41652 === (7)))
{var state_41651__$1 = state_41651;var statearr_41653_41682 = state_41651__$1;(statearr_41653_41682[(2)] = null);
(statearr_41653_41682[(1)] = (8));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (1)))
{var state_41651__$1 = state_41651;var statearr_41654_41683 = state_41651__$1;(statearr_41654_41683[(2)] = null);
(statearr_41654_41683[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (4)))
{var inst_41615 = (state_41651[(7)]);var inst_41617 = (inst_41615 < cnt);var state_41651__$1 = state_41651;if(cljs.core.truth_(inst_41617))
{var statearr_41655_41684 = state_41651__$1;(statearr_41655_41684[(1)] = (6));
} else
{var statearr_41656_41685 = state_41651__$1;(statearr_41656_41685[(1)] = (7));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (15)))
{var inst_41647 = (state_41651[(2)]);var state_41651__$1 = state_41651;var statearr_41657_41686 = state_41651__$1;(statearr_41657_41686[(2)] = inst_41647);
(statearr_41657_41686[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (13)))
{var inst_41640 = cljs.core.async.close_BANG_(out);var state_41651__$1 = state_41651;var statearr_41658_41687 = state_41651__$1;(statearr_41658_41687[(2)] = inst_41640);
(statearr_41658_41687[(1)] = (15));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (6)))
{var state_41651__$1 = state_41651;var statearr_41659_41688 = state_41651__$1;(statearr_41659_41688[(2)] = null);
(statearr_41659_41688[(1)] = (11));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (3)))
{var inst_41649 = (state_41651[(2)]);var state_41651__$1 = state_41651;return cljs.core.async.impl.ioc_helpers.return_chan(state_41651__$1,inst_41649);
} else
{if((state_val_41652 === (12)))
{var inst_41637 = (state_41651[(8)]);var inst_41637__$1 = (state_41651[(2)]);var inst_41638 = cljs.core.some(cljs.core.nil_QMARK_,inst_41637__$1);var state_41651__$1 = (function (){var statearr_41660 = state_41651;(statearr_41660[(8)] = inst_41637__$1);
return statearr_41660;
})();if(cljs.core.truth_(inst_41638))
{var statearr_41661_41689 = state_41651__$1;(statearr_41661_41689[(1)] = (13));
} else
{var statearr_41662_41690 = state_41651__$1;(statearr_41662_41690[(1)] = (14));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (2)))
{var inst_41614 = cljs.core.reset_BANG_(dctr,cnt);var inst_41615 = (0);var state_41651__$1 = (function (){var statearr_41663 = state_41651;(statearr_41663[(7)] = inst_41615);
(statearr_41663[(9)] = inst_41614);
return statearr_41663;
})();var statearr_41664_41691 = state_41651__$1;(statearr_41664_41691[(2)] = null);
(statearr_41664_41691[(1)] = (4));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (11)))
{var inst_41615 = (state_41651[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41651,(10),Object,null,(9));var inst_41624 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41615) : chs__$1.call(null,inst_41615));var inst_41625 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41615) : done.call(null,inst_41615));var inst_41626 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41624,inst_41625);var state_41651__$1 = state_41651;var statearr_41665_41692 = state_41651__$1;(statearr_41665_41692[(2)] = inst_41626);
cljs.core.async.impl.ioc_helpers.process_exception(state_41651__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (9)))
{var inst_41615 = (state_41651[(7)]);var inst_41628 = (state_41651[(2)]);var inst_41629 = (inst_41615 + (1));var inst_41615__$1 = inst_41629;var state_41651__$1 = (function (){var statearr_41666 = state_41651;(statearr_41666[(10)] = inst_41628);
(statearr_41666[(7)] = inst_41615__$1);
return statearr_41666;
})();var statearr_41667_41693 = state_41651__$1;(statearr_41667_41693[(2)] = null);
(statearr_41667_41693[(1)] = (4));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (5)))
{var inst_41635 = (state_41651[(2)]);var state_41651__$1 = (function (){var statearr_41668 = state_41651;(statearr_41668[(11)] = inst_41635);
return statearr_41668;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41651__$1,(12),dchan);
} else
{if((state_val_41652 === (14)))
{var inst_41637 = (state_41651[(8)]);var inst_41642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41637);var state_41651__$1 = state_41651;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41651__$1,(16),out,inst_41642);
} else
{if((state_val_41652 === (16)))
{var inst_41644 = (state_41651[(2)]);var state_41651__$1 = (function (){var statearr_41669 = state_41651;(statearr_41669[(12)] = inst_41644);
return statearr_41669;
})();var statearr_41670_41694 = state_41651__$1;(statearr_41670_41694[(2)] = null);
(statearr_41670_41694[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (10)))
{var inst_41619 = (state_41651[(2)]);var inst_41620 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_41651__$1 = (function (){var statearr_41671 = state_41651;(statearr_41671[(13)] = inst_41619);
return statearr_41671;
})();var statearr_41672_41695 = state_41651__$1;(statearr_41672_41695[(2)] = inst_41620);
cljs.core.async.impl.ioc_helpers.process_exception(state_41651__$1);
return cljs.core.constant$keyword$777;
} else
{if((state_val_41652 === (8)))
{var inst_41633 = (state_41651[(2)]);var state_41651__$1 = state_41651;var statearr_41673_41696 = state_41651__$1;(statearr_41673_41696[(2)] = inst_41633);
(statearr_41673_41696[(1)] = (5));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41677[(0)] = state_machine__5679__auto__);
(statearr_41677[(1)] = (1));
return statearr_41677;
});
var state_machine__5679__auto____1 = (function (state_41651){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41651);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41678){if((e41678 instanceof Object))
{var ex__5682__auto__ = e41678;var statearr_41679_41697 = state_41651;(statearr_41679_41697[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41651);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e41678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41698 = state_41651;
state_41651 = G__41698;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41651){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_41680 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41681);
return statearr_41680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41681,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41806,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41806,out){
return (function (state_41782){var state_val_41783 = (state_41782[(1)]);if((state_val_41783 === (7)))
{var inst_41761 = (state_41782[(7)]);var inst_41762 = (state_41782[(8)]);var inst_41761__$1 = (state_41782[(2)]);var inst_41762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41761__$1,(0),null);var inst_41763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41761__$1,(1),null);var inst_41764 = (inst_41762__$1 == null);var state_41782__$1 = (function (){var statearr_41784 = state_41782;(statearr_41784[(7)] = inst_41761__$1);
(statearr_41784[(8)] = inst_41762__$1);
(statearr_41784[(9)] = inst_41763);
return statearr_41784;
})();if(cljs.core.truth_(inst_41764))
{var statearr_41785_41807 = state_41782__$1;(statearr_41785_41807[(1)] = (8));
} else
{var statearr_41786_41808 = state_41782__$1;(statearr_41786_41808[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (1)))
{var inst_41753 = cljs.core.vec(chs);var inst_41754 = inst_41753;var state_41782__$1 = (function (){var statearr_41787 = state_41782;(statearr_41787[(10)] = inst_41754);
return statearr_41787;
})();var statearr_41788_41809 = state_41782__$1;(statearr_41788_41809[(2)] = null);
(statearr_41788_41809[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (4)))
{var inst_41754 = (state_41782[(10)]);var state_41782__$1 = state_41782;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_41782__$1,(7),inst_41754);
} else
{if((state_val_41783 === (6)))
{var inst_41778 = (state_41782[(2)]);var state_41782__$1 = state_41782;var statearr_41789_41810 = state_41782__$1;(statearr_41789_41810[(2)] = inst_41778);
(statearr_41789_41810[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (3)))
{var inst_41780 = (state_41782[(2)]);var state_41782__$1 = state_41782;return cljs.core.async.impl.ioc_helpers.return_chan(state_41782__$1,inst_41780);
} else
{if((state_val_41783 === (2)))
{var inst_41754 = (state_41782[(10)]);var inst_41756 = cljs.core.count(inst_41754);var inst_41757 = (inst_41756 > (0));var state_41782__$1 = state_41782;if(cljs.core.truth_(inst_41757))
{var statearr_41791_41811 = state_41782__$1;(statearr_41791_41811[(1)] = (4));
} else
{var statearr_41792_41812 = state_41782__$1;(statearr_41792_41812[(1)] = (5));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (11)))
{var inst_41754 = (state_41782[(10)]);var inst_41771 = (state_41782[(2)]);var tmp41790 = inst_41754;var inst_41754__$1 = tmp41790;var state_41782__$1 = (function (){var statearr_41793 = state_41782;(statearr_41793[(11)] = inst_41771);
(statearr_41793[(10)] = inst_41754__$1);
return statearr_41793;
})();var statearr_41794_41813 = state_41782__$1;(statearr_41794_41813[(2)] = null);
(statearr_41794_41813[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (9)))
{var inst_41762 = (state_41782[(8)]);var state_41782__$1 = state_41782;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41782__$1,(11),out,inst_41762);
} else
{if((state_val_41783 === (5)))
{var inst_41776 = cljs.core.async.close_BANG_(out);var state_41782__$1 = state_41782;var statearr_41795_41814 = state_41782__$1;(statearr_41795_41814[(2)] = inst_41776);
(statearr_41795_41814[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (10)))
{var inst_41774 = (state_41782[(2)]);var state_41782__$1 = state_41782;var statearr_41796_41815 = state_41782__$1;(statearr_41796_41815[(2)] = inst_41774);
(statearr_41796_41815[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41783 === (8)))
{var inst_41761 = (state_41782[(7)]);var inst_41754 = (state_41782[(10)]);var inst_41762 = (state_41782[(8)]);var inst_41763 = (state_41782[(9)]);var inst_41766 = (function (){var c = inst_41763;var v = inst_41762;var vec__41759 = inst_41761;var cs = inst_41754;return ((function (c,v,vec__41759,cs,inst_41761,inst_41754,inst_41762,inst_41763,state_val_41783,c__5693__auto___41806,out){
return (function (p1__41699_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41699_SHARP_);
});
;})(c,v,vec__41759,cs,inst_41761,inst_41754,inst_41762,inst_41763,state_val_41783,c__5693__auto___41806,out))
})();var inst_41767 = cljs.core.filterv(inst_41766,inst_41754);var inst_41754__$1 = inst_41767;var state_41782__$1 = (function (){var statearr_41797 = state_41782;(statearr_41797[(10)] = inst_41754__$1);
return statearr_41797;
})();var statearr_41798_41816 = state_41782__$1;(statearr_41798_41816[(2)] = null);
(statearr_41798_41816[(1)] = (2));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___41806,out))
;return ((function (switch__5678__auto__,c__5693__auto___41806,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41802 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41802[(0)] = state_machine__5679__auto__);
(statearr_41802[(1)] = (1));
return statearr_41802;
});
var state_machine__5679__auto____1 = (function (state_41782){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41782);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41803){if((e41803 instanceof Object))
{var ex__5682__auto__ = e41803;var statearr_41804_41817 = state_41782;(statearr_41804_41817[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41782);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e41803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41818 = state_41782;
state_41782 = G__41818;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41782){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41806,out))
})();var state__5695__auto__ = (function (){var statearr_41805 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41806);
return statearr_41805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41806,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41911,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41911,out){
return (function (state_41888){var state_val_41889 = (state_41888[(1)]);if((state_val_41889 === (7)))
{var inst_41870 = (state_41888[(7)]);var inst_41870__$1 = (state_41888[(2)]);var inst_41871 = (inst_41870__$1 == null);var inst_41872 = cljs.core.not(inst_41871);var state_41888__$1 = (function (){var statearr_41890 = state_41888;(statearr_41890[(7)] = inst_41870__$1);
return statearr_41890;
})();if(inst_41872)
{var statearr_41891_41912 = state_41888__$1;(statearr_41891_41912[(1)] = (8));
} else
{var statearr_41892_41913 = state_41888__$1;(statearr_41892_41913[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (1)))
{var inst_41865 = (0);var state_41888__$1 = (function (){var statearr_41893 = state_41888;(statearr_41893[(8)] = inst_41865);
return statearr_41893;
})();var statearr_41894_41914 = state_41888__$1;(statearr_41894_41914[(2)] = null);
(statearr_41894_41914[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (4)))
{var state_41888__$1 = state_41888;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41888__$1,(7),ch);
} else
{if((state_val_41889 === (6)))
{var inst_41883 = (state_41888[(2)]);var state_41888__$1 = state_41888;var statearr_41895_41915 = state_41888__$1;(statearr_41895_41915[(2)] = inst_41883);
(statearr_41895_41915[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (3)))
{var inst_41885 = (state_41888[(2)]);var inst_41886 = cljs.core.async.close_BANG_(out);var state_41888__$1 = (function (){var statearr_41896 = state_41888;(statearr_41896[(9)] = inst_41885);
return statearr_41896;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41888__$1,inst_41886);
} else
{if((state_val_41889 === (2)))
{var inst_41865 = (state_41888[(8)]);var inst_41867 = (inst_41865 < n);var state_41888__$1 = state_41888;if(cljs.core.truth_(inst_41867))
{var statearr_41897_41916 = state_41888__$1;(statearr_41897_41916[(1)] = (4));
} else
{var statearr_41898_41917 = state_41888__$1;(statearr_41898_41917[(1)] = (5));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (11)))
{var inst_41865 = (state_41888[(8)]);var inst_41875 = (state_41888[(2)]);var inst_41876 = (inst_41865 + (1));var inst_41865__$1 = inst_41876;var state_41888__$1 = (function (){var statearr_41899 = state_41888;(statearr_41899[(8)] = inst_41865__$1);
(statearr_41899[(10)] = inst_41875);
return statearr_41899;
})();var statearr_41900_41918 = state_41888__$1;(statearr_41900_41918[(2)] = null);
(statearr_41900_41918[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (9)))
{var state_41888__$1 = state_41888;var statearr_41901_41919 = state_41888__$1;(statearr_41901_41919[(2)] = null);
(statearr_41901_41919[(1)] = (10));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (5)))
{var state_41888__$1 = state_41888;var statearr_41902_41920 = state_41888__$1;(statearr_41902_41920[(2)] = null);
(statearr_41902_41920[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (10)))
{var inst_41880 = (state_41888[(2)]);var state_41888__$1 = state_41888;var statearr_41903_41921 = state_41888__$1;(statearr_41903_41921[(2)] = inst_41880);
(statearr_41903_41921[(1)] = (6));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41889 === (8)))
{var inst_41870 = (state_41888[(7)]);var state_41888__$1 = state_41888;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41888__$1,(11),out,inst_41870);
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
});})(c__5693__auto___41911,out))
;return ((function (switch__5678__auto__,c__5693__auto___41911,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41907 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_41907[(0)] = state_machine__5679__auto__);
(statearr_41907[(1)] = (1));
return statearr_41907;
});
var state_machine__5679__auto____1 = (function (state_41888){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41888);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41908){if((e41908 instanceof Object))
{var ex__5682__auto__ = e41908;var statearr_41909_41922 = state_41888;(statearr_41909_41922[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41888);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e41908;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__41923 = state_41888;
state_41888 = G__41923;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41888){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41911,out))
})();var state__5695__auto__ = (function (){var statearr_41910 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41911);
return statearr_41910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41911,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42020,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42020,out){
return (function (state_41995){var state_val_41996 = (state_41995[(1)]);if((state_val_41996 === (7)))
{var inst_41990 = (state_41995[(2)]);var state_41995__$1 = state_41995;var statearr_41997_42021 = state_41995__$1;(statearr_41997_42021[(2)] = inst_41990);
(statearr_41997_42021[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (1)))
{var inst_41972 = null;var state_41995__$1 = (function (){var statearr_41998 = state_41995;(statearr_41998[(7)] = inst_41972);
return statearr_41998;
})();var statearr_41999_42022 = state_41995__$1;(statearr_41999_42022[(2)] = null);
(statearr_41999_42022[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (4)))
{var inst_41975 = (state_41995[(8)]);var inst_41975__$1 = (state_41995[(2)]);var inst_41976 = (inst_41975__$1 == null);var inst_41977 = cljs.core.not(inst_41976);var state_41995__$1 = (function (){var statearr_42000 = state_41995;(statearr_42000[(8)] = inst_41975__$1);
return statearr_42000;
})();if(inst_41977)
{var statearr_42001_42023 = state_41995__$1;(statearr_42001_42023[(1)] = (5));
} else
{var statearr_42002_42024 = state_41995__$1;(statearr_42002_42024[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (6)))
{var state_41995__$1 = state_41995;var statearr_42003_42025 = state_41995__$1;(statearr_42003_42025[(2)] = null);
(statearr_42003_42025[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (3)))
{var inst_41992 = (state_41995[(2)]);var inst_41993 = cljs.core.async.close_BANG_(out);var state_41995__$1 = (function (){var statearr_42004 = state_41995;(statearr_42004[(9)] = inst_41992);
return statearr_42004;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_41995__$1,inst_41993);
} else
{if((state_val_41996 === (2)))
{var state_41995__$1 = state_41995;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41995__$1,(4),ch);
} else
{if((state_val_41996 === (11)))
{var inst_41975 = (state_41995[(8)]);var inst_41984 = (state_41995[(2)]);var inst_41972 = inst_41975;var state_41995__$1 = (function (){var statearr_42005 = state_41995;(statearr_42005[(7)] = inst_41972);
(statearr_42005[(10)] = inst_41984);
return statearr_42005;
})();var statearr_42006_42026 = state_41995__$1;(statearr_42006_42026[(2)] = null);
(statearr_42006_42026[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (9)))
{var inst_41975 = (state_41995[(8)]);var state_41995__$1 = state_41995;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41995__$1,(11),out,inst_41975);
} else
{if((state_val_41996 === (5)))
{var inst_41975 = (state_41995[(8)]);var inst_41972 = (state_41995[(7)]);var inst_41979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41975,inst_41972);var state_41995__$1 = state_41995;if(inst_41979)
{var statearr_42008_42027 = state_41995__$1;(statearr_42008_42027[(1)] = (8));
} else
{var statearr_42009_42028 = state_41995__$1;(statearr_42009_42028[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (10)))
{var inst_41987 = (state_41995[(2)]);var state_41995__$1 = state_41995;var statearr_42010_42029 = state_41995__$1;(statearr_42010_42029[(2)] = inst_41987);
(statearr_42010_42029[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_41996 === (8)))
{var inst_41972 = (state_41995[(7)]);var tmp42007 = inst_41972;var inst_41972__$1 = tmp42007;var state_41995__$1 = (function (){var statearr_42011 = state_41995;(statearr_42011[(7)] = inst_41972__$1);
return statearr_42011;
})();var statearr_42012_42030 = state_41995__$1;(statearr_42012_42030[(2)] = null);
(statearr_42012_42030[(1)] = (2));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___42020,out))
;return ((function (switch__5678__auto__,c__5693__auto___42020,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42016 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_42016[(0)] = state_machine__5679__auto__);
(statearr_42016[(1)] = (1));
return statearr_42016;
});
var state_machine__5679__auto____1 = (function (state_41995){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41995);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42017){if((e42017 instanceof Object))
{var ex__5682__auto__ = e42017;var statearr_42018_42031 = state_41995;(statearr_42018_42031[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41995);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e42017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__42032 = state_41995;
state_41995 = G__42032;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41995){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42020,out))
})();var state__5695__auto__ = (function (){var statearr_42019 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42020);
return statearr_42019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42020,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42167,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42167,out){
return (function (state_42137){var state_val_42138 = (state_42137[(1)]);if((state_val_42138 === (7)))
{var inst_42133 = (state_42137[(2)]);var state_42137__$1 = state_42137;var statearr_42139_42168 = state_42137__$1;(statearr_42139_42168[(2)] = inst_42133);
(statearr_42139_42168[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (1)))
{var inst_42100 = (new Array(n));var inst_42101 = inst_42100;var inst_42102 = (0);var state_42137__$1 = (function (){var statearr_42140 = state_42137;(statearr_42140[(7)] = inst_42101);
(statearr_42140[(8)] = inst_42102);
return statearr_42140;
})();var statearr_42141_42169 = state_42137__$1;(statearr_42141_42169[(2)] = null);
(statearr_42141_42169[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (4)))
{var inst_42105 = (state_42137[(9)]);var inst_42105__$1 = (state_42137[(2)]);var inst_42106 = (inst_42105__$1 == null);var inst_42107 = cljs.core.not(inst_42106);var state_42137__$1 = (function (){var statearr_42142 = state_42137;(statearr_42142[(9)] = inst_42105__$1);
return statearr_42142;
})();if(inst_42107)
{var statearr_42143_42170 = state_42137__$1;(statearr_42143_42170[(1)] = (5));
} else
{var statearr_42144_42171 = state_42137__$1;(statearr_42144_42171[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (15)))
{var inst_42127 = (state_42137[(2)]);var state_42137__$1 = state_42137;var statearr_42145_42172 = state_42137__$1;(statearr_42145_42172[(2)] = inst_42127);
(statearr_42145_42172[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (13)))
{var state_42137__$1 = state_42137;var statearr_42146_42173 = state_42137__$1;(statearr_42146_42173[(2)] = null);
(statearr_42146_42173[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (6)))
{var inst_42102 = (state_42137[(8)]);var inst_42123 = (inst_42102 > (0));var state_42137__$1 = state_42137;if(cljs.core.truth_(inst_42123))
{var statearr_42147_42174 = state_42137__$1;(statearr_42147_42174[(1)] = (12));
} else
{var statearr_42148_42175 = state_42137__$1;(statearr_42148_42175[(1)] = (13));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (3)))
{var inst_42135 = (state_42137[(2)]);var state_42137__$1 = state_42137;return cljs.core.async.impl.ioc_helpers.return_chan(state_42137__$1,inst_42135);
} else
{if((state_val_42138 === (12)))
{var inst_42101 = (state_42137[(7)]);var inst_42125 = cljs.core.vec(inst_42101);var state_42137__$1 = state_42137;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42137__$1,(15),out,inst_42125);
} else
{if((state_val_42138 === (2)))
{var state_42137__$1 = state_42137;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42137__$1,(4),ch);
} else
{if((state_val_42138 === (11)))
{var inst_42117 = (state_42137[(2)]);var inst_42118 = (new Array(n));var inst_42101 = inst_42118;var inst_42102 = (0);var state_42137__$1 = (function (){var statearr_42149 = state_42137;(statearr_42149[(7)] = inst_42101);
(statearr_42149[(8)] = inst_42102);
(statearr_42149[(10)] = inst_42117);
return statearr_42149;
})();var statearr_42150_42176 = state_42137__$1;(statearr_42150_42176[(2)] = null);
(statearr_42150_42176[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (9)))
{var inst_42101 = (state_42137[(7)]);var inst_42115 = cljs.core.vec(inst_42101);var state_42137__$1 = state_42137;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42137__$1,(11),out,inst_42115);
} else
{if((state_val_42138 === (5)))
{var inst_42110 = (state_42137[(11)]);var inst_42101 = (state_42137[(7)]);var inst_42105 = (state_42137[(9)]);var inst_42102 = (state_42137[(8)]);var inst_42109 = (inst_42101[inst_42102] = inst_42105);var inst_42110__$1 = (inst_42102 + (1));var inst_42111 = (inst_42110__$1 < n);var state_42137__$1 = (function (){var statearr_42151 = state_42137;(statearr_42151[(12)] = inst_42109);
(statearr_42151[(11)] = inst_42110__$1);
return statearr_42151;
})();if(cljs.core.truth_(inst_42111))
{var statearr_42152_42177 = state_42137__$1;(statearr_42152_42177[(1)] = (8));
} else
{var statearr_42153_42178 = state_42137__$1;(statearr_42153_42178[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (14)))
{var inst_42130 = (state_42137[(2)]);var inst_42131 = cljs.core.async.close_BANG_(out);var state_42137__$1 = (function (){var statearr_42155 = state_42137;(statearr_42155[(13)] = inst_42130);
return statearr_42155;
})();var statearr_42156_42179 = state_42137__$1;(statearr_42156_42179[(2)] = inst_42131);
(statearr_42156_42179[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (10)))
{var inst_42121 = (state_42137[(2)]);var state_42137__$1 = state_42137;var statearr_42157_42180 = state_42137__$1;(statearr_42157_42180[(2)] = inst_42121);
(statearr_42157_42180[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42138 === (8)))
{var inst_42110 = (state_42137[(11)]);var inst_42101 = (state_42137[(7)]);var tmp42154 = inst_42101;var inst_42101__$1 = tmp42154;var inst_42102 = inst_42110;var state_42137__$1 = (function (){var statearr_42158 = state_42137;(statearr_42158[(7)] = inst_42101__$1);
(statearr_42158[(8)] = inst_42102);
return statearr_42158;
})();var statearr_42159_42181 = state_42137__$1;(statearr_42159_42181[(2)] = null);
(statearr_42159_42181[(1)] = (2));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___42167,out))
;return ((function (switch__5678__auto__,c__5693__auto___42167,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42163[(0)] = state_machine__5679__auto__);
(statearr_42163[(1)] = (1));
return statearr_42163;
});
var state_machine__5679__auto____1 = (function (state_42137){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42137);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42164){if((e42164 instanceof Object))
{var ex__5682__auto__ = e42164;var statearr_42165_42182 = state_42137;(statearr_42165_42182[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42137);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e42164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__42183 = state_42137;
state_42137 = G__42183;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42137){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42167,out))
})();var state__5695__auto__ = (function (){var statearr_42166 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42167);
return statearr_42166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42167,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___42326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___42326,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___42326,out){
return (function (state_42296){var state_val_42297 = (state_42296[(1)]);if((state_val_42297 === (7)))
{var inst_42292 = (state_42296[(2)]);var state_42296__$1 = state_42296;var statearr_42298_42327 = state_42296__$1;(statearr_42298_42327[(2)] = inst_42292);
(statearr_42298_42327[(1)] = (3));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (1)))
{var inst_42255 = [];var inst_42256 = inst_42255;var inst_42257 = cljs.core.constant$keyword$790;var state_42296__$1 = (function (){var statearr_42299 = state_42296;(statearr_42299[(7)] = inst_42257);
(statearr_42299[(8)] = inst_42256);
return statearr_42299;
})();var statearr_42300_42328 = state_42296__$1;(statearr_42300_42328[(2)] = null);
(statearr_42300_42328[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (4)))
{var inst_42260 = (state_42296[(9)]);var inst_42260__$1 = (state_42296[(2)]);var inst_42261 = (inst_42260__$1 == null);var inst_42262 = cljs.core.not(inst_42261);var state_42296__$1 = (function (){var statearr_42301 = state_42296;(statearr_42301[(9)] = inst_42260__$1);
return statearr_42301;
})();if(inst_42262)
{var statearr_42302_42329 = state_42296__$1;(statearr_42302_42329[(1)] = (5));
} else
{var statearr_42303_42330 = state_42296__$1;(statearr_42303_42330[(1)] = (6));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (15)))
{var inst_42286 = (state_42296[(2)]);var state_42296__$1 = state_42296;var statearr_42304_42331 = state_42296__$1;(statearr_42304_42331[(2)] = inst_42286);
(statearr_42304_42331[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (13)))
{var state_42296__$1 = state_42296;var statearr_42305_42332 = state_42296__$1;(statearr_42305_42332[(2)] = null);
(statearr_42305_42332[(1)] = (14));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (6)))
{var inst_42256 = (state_42296[(8)]);var inst_42281 = inst_42256.length;var inst_42282 = (inst_42281 > (0));var state_42296__$1 = state_42296;if(cljs.core.truth_(inst_42282))
{var statearr_42306_42333 = state_42296__$1;(statearr_42306_42333[(1)] = (12));
} else
{var statearr_42307_42334 = state_42296__$1;(statearr_42307_42334[(1)] = (13));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (3)))
{var inst_42294 = (state_42296[(2)]);var state_42296__$1 = state_42296;return cljs.core.async.impl.ioc_helpers.return_chan(state_42296__$1,inst_42294);
} else
{if((state_val_42297 === (12)))
{var inst_42256 = (state_42296[(8)]);var inst_42284 = cljs.core.vec(inst_42256);var state_42296__$1 = state_42296;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42296__$1,(15),out,inst_42284);
} else
{if((state_val_42297 === (2)))
{var state_42296__$1 = state_42296;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42296__$1,(4),ch);
} else
{if((state_val_42297 === (11)))
{var inst_42264 = (state_42296[(10)]);var inst_42260 = (state_42296[(9)]);var inst_42274 = (state_42296[(2)]);var inst_42275 = [];var inst_42276 = inst_42275.push(inst_42260);var inst_42256 = inst_42275;var inst_42257 = inst_42264;var state_42296__$1 = (function (){var statearr_42308 = state_42296;(statearr_42308[(11)] = inst_42276);
(statearr_42308[(7)] = inst_42257);
(statearr_42308[(12)] = inst_42274);
(statearr_42308[(8)] = inst_42256);
return statearr_42308;
})();var statearr_42309_42335 = state_42296__$1;(statearr_42309_42335[(2)] = null);
(statearr_42309_42335[(1)] = (2));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (9)))
{var inst_42256 = (state_42296[(8)]);var inst_42272 = cljs.core.vec(inst_42256);var state_42296__$1 = state_42296;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42296__$1,(11),out,inst_42272);
} else
{if((state_val_42297 === (5)))
{var inst_42257 = (state_42296[(7)]);var inst_42264 = (state_42296[(10)]);var inst_42260 = (state_42296[(9)]);var inst_42264__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42260) : f.call(null,inst_42260));var inst_42265 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42264__$1,inst_42257);var inst_42266 = cljs.core.keyword_identical_QMARK_(inst_42257,cljs.core.constant$keyword$790);var inst_42267 = (inst_42265) || (inst_42266);var state_42296__$1 = (function (){var statearr_42310 = state_42296;(statearr_42310[(10)] = inst_42264__$1);
return statearr_42310;
})();if(cljs.core.truth_(inst_42267))
{var statearr_42311_42336 = state_42296__$1;(statearr_42311_42336[(1)] = (8));
} else
{var statearr_42312_42337 = state_42296__$1;(statearr_42312_42337[(1)] = (9));
}
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (14)))
{var inst_42289 = (state_42296[(2)]);var inst_42290 = cljs.core.async.close_BANG_(out);var state_42296__$1 = (function (){var statearr_42314 = state_42296;(statearr_42314[(13)] = inst_42289);
return statearr_42314;
})();var statearr_42315_42338 = state_42296__$1;(statearr_42315_42338[(2)] = inst_42290);
(statearr_42315_42338[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (10)))
{var inst_42279 = (state_42296[(2)]);var state_42296__$1 = state_42296;var statearr_42316_42339 = state_42296__$1;(statearr_42316_42339[(2)] = inst_42279);
(statearr_42316_42339[(1)] = (7));
return cljs.core.constant$keyword$777;
} else
{if((state_val_42297 === (8)))
{var inst_42264 = (state_42296[(10)]);var inst_42260 = (state_42296[(9)]);var inst_42256 = (state_42296[(8)]);var inst_42269 = inst_42256.push(inst_42260);var tmp42313 = inst_42256;var inst_42256__$1 = tmp42313;var inst_42257 = inst_42264;var state_42296__$1 = (function (){var statearr_42317 = state_42296;(statearr_42317[(7)] = inst_42257);
(statearr_42317[(14)] = inst_42269);
(statearr_42317[(8)] = inst_42256__$1);
return statearr_42317;
})();var statearr_42318_42340 = state_42296__$1;(statearr_42318_42340[(2)] = null);
(statearr_42318_42340[(1)] = (2));
return cljs.core.constant$keyword$777;
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
});})(c__5693__auto___42326,out))
;return ((function (switch__5678__auto__,c__5693__auto___42326,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_42322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42322[(0)] = state_machine__5679__auto__);
(statearr_42322[(1)] = (1));
return statearr_42322;
});
var state_machine__5679__auto____1 = (function (state_42296){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_42296);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$777))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e42323){if((e42323 instanceof Object))
{var ex__5682__auto__ = e42323;var statearr_42324_42341 = state_42296;(statearr_42324_42341[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_42296);
return cljs.core.constant$keyword$777;
} else
{if(cljs.core.constant$keyword$768)
{throw e42323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$777))
{{
var G__42342 = state_42296;
state_42296 = G__42342;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_42296){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_42296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___42326,out))
})();var state__5695__auto__ = (function (){var statearr_42325 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_42325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___42326);
return statearr_42325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___42326,out))
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
