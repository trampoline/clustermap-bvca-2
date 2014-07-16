// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t38622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38622 = (function (f,fn_handler,meta38623){
this.f = f;
this.fn_handler = fn_handler;
this.meta38623 = meta38623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38622.cljs$lang$type = true;
cljs.core.async.t38622.cljs$lang$ctorStr = "cljs.core.async/t38622";
cljs.core.async.t38622.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38622");
});
cljs.core.async.t38622.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t38622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t38622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38624){var self__ = this;
var _38624__$1 = this;return self__.meta38623;
});
cljs.core.async.t38622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38624,meta38623__$1){var self__ = this;
var _38624__$1 = this;return (new cljs.core.async.t38622(self__.f,self__.fn_handler,meta38623__$1));
});
cljs.core.async.__GT_t38622 = (function __GT_t38622(f__$1,fn_handler__$1,meta38623){return (new cljs.core.async.t38622(f__$1,fn_handler__$1,meta38623));
});
}
return (new cljs.core.async.t38622(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__38626 = buff;if(G__38626)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__38626.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__38626.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38626);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__38626);
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
{var val_38627 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38627) : fn1.call(null,val_38627));
} else
{cljs.core.async.impl.dispatch.run(((function (val_38627,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38627) : fn1.call(null,val_38627));
});})(val_38627,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___38628 = n;var x_38629 = (0);while(true){
if((x_38629 < n__4399__auto___38628))
{(a[x_38629] = (0));
{
var G__38630 = (x_38629 + (1));
x_38629 = G__38630;
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
var G__38631 = (i + (1));
i = G__38631;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t38635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38635 = (function (flag,alt_flag,meta38636){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38636 = meta38636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38635.cljs$lang$type = true;
cljs.core.async.t38635.cljs$lang$ctorStr = "cljs.core.async/t38635";
cljs.core.async.t38635.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38635");
});})(flag))
;
cljs.core.async.t38635.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t38635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t38635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38637){var self__ = this;
var _38637__$1 = this;return self__.meta38636;
});})(flag))
;
cljs.core.async.t38635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38637,meta38636__$1){var self__ = this;
var _38637__$1 = this;return (new cljs.core.async.t38635(self__.flag,self__.alt_flag,meta38636__$1));
});})(flag))
;
cljs.core.async.__GT_t38635 = ((function (flag){
return (function __GT_t38635(flag__$1,alt_flag__$1,meta38636){return (new cljs.core.async.t38635(flag__$1,alt_flag__$1,meta38636));
});})(flag))
;
}
return (new cljs.core.async.t38635(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t38641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38641 = (function (cb,flag,alt_handler,meta38642){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38642 = meta38642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38641.cljs$lang$type = true;
cljs.core.async.t38641.cljs$lang$ctorStr = "cljs.core.async/t38641";
cljs.core.async.t38641.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38641");
});
cljs.core.async.t38641.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t38641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t38641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38643){var self__ = this;
var _38643__$1 = this;return self__.meta38642;
});
cljs.core.async.t38641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38643,meta38642__$1){var self__ = this;
var _38643__$1 = this;return (new cljs.core.async.t38641(self__.cb,self__.flag,self__.alt_handler,meta38642__$1));
});
cljs.core.async.__GT_t38641 = (function __GT_t38641(cb__$1,flag__$1,alt_handler__$1,meta38642){return (new cljs.core.async.t38641(cb__$1,flag__$1,alt_handler__$1,meta38642));
});
}
return (new cljs.core.async.t38641(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$771.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38644_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38644_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38644_SHARP_,port], null)));
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
var G__38645 = (i + (1));
i = G__38645;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$757))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3531__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$757.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$757], null));
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
var alts_BANG___delegate = function (ports,p__38646){var map__38648 = p__38646;var map__38648__$1 = ((cljs.core.seq_QMARK_(map__38648))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38648):map__38648);var opts = map__38648__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0))))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__38646 = null;if (arguments.length > 1) {
  p__38646 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__38646);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__38649){
var ports = cljs.core.first(arglist__38649);
var p__38646 = cljs.core.rest(arglist__38649);
return alts_BANG___delegate(ports,p__38646);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t38657 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38657 = (function (ch,f,map_LT_,meta38658){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38658 = meta38658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38657.cljs$lang$type = true;
cljs.core.async.t38657.cljs$lang$ctorStr = "cljs.core.async/t38657";
cljs.core.async.t38657.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38657");
});
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t38660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38660 = (function (fn1,_,meta38658,ch,f,map_LT_,meta38661){
this.fn1 = fn1;
this._ = _;
this.meta38658 = meta38658;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta38661 = meta38661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38660.cljs$lang$type = true;
cljs.core.async.t38660.cljs$lang$ctorStr = "cljs.core.async/t38660";
cljs.core.async.t38660.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38660");
});})(___$1))
;
cljs.core.async.t38660.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t38660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t38660.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t38660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__38650_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__38650_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38650_SHARP_) : self__.f.call(null,p1__38650_SHARP_)))) : f1.call(null,(((p1__38650_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38650_SHARP_) : self__.f.call(null,p1__38650_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t38660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38662){var self__ = this;
var _38662__$1 = this;return self__.meta38661;
});})(___$1))
;
cljs.core.async.t38660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38662,meta38661__$1){var self__ = this;
var _38662__$1 = this;return (new cljs.core.async.t38660(self__.fn1,self__._,self__.meta38658,self__.ch,self__.f,self__.map_LT_,meta38661__$1));
});})(___$1))
;
cljs.core.async.__GT_t38660 = ((function (___$1){
return (function __GT_t38660(fn1__$1,___$2,meta38658__$1,ch__$2,f__$2,map_LT___$2,meta38661){return (new cljs.core.async.t38660(fn1__$1,___$2,meta38658__$1,ch__$2,f__$2,map_LT___$2,meta38661));
});})(___$1))
;
}
return (new cljs.core.async.t38660(fn1,___$1,self__.meta38658,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38659){var self__ = this;
var _38659__$1 = this;return self__.meta38658;
});
cljs.core.async.t38657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38659,meta38658__$1){var self__ = this;
var _38659__$1 = this;return (new cljs.core.async.t38657(self__.ch,self__.f,self__.map_LT_,meta38658__$1));
});
cljs.core.async.__GT_t38657 = (function __GT_t38657(ch__$1,f__$1,map_LT___$1,meta38658){return (new cljs.core.async.t38657(ch__$1,f__$1,map_LT___$1,meta38658));
});
}
return (new cljs.core.async.t38657(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t38666 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38666 = (function (ch,f,map_GT_,meta38667){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta38667 = meta38667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38666.cljs$lang$type = true;
cljs.core.async.t38666.cljs$lang$ctorStr = "cljs.core.async/t38666";
cljs.core.async.t38666.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38666");
});
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38668){var self__ = this;
var _38668__$1 = this;return self__.meta38667;
});
cljs.core.async.t38666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38668,meta38667__$1){var self__ = this;
var _38668__$1 = this;return (new cljs.core.async.t38666(self__.ch,self__.f,self__.map_GT_,meta38667__$1));
});
cljs.core.async.__GT_t38666 = (function __GT_t38666(ch__$1,f__$1,map_GT___$1,meta38667){return (new cljs.core.async.t38666(ch__$1,f__$1,map_GT___$1,meta38667));
});
}
return (new cljs.core.async.t38666(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t38672 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38672 = (function (ch,p,filter_GT_,meta38673){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta38673 = meta38673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38672.cljs$lang$type = true;
cljs.core.async.t38672.cljs$lang$ctorStr = "cljs.core.async/t38672";
cljs.core.async.t38672.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t38672");
});
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t38672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t38672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38674){var self__ = this;
var _38674__$1 = this;return self__.meta38673;
});
cljs.core.async.t38672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38674,meta38673__$1){var self__ = this;
var _38674__$1 = this;return (new cljs.core.async.t38672(self__.ch,self__.p,self__.filter_GT_,meta38673__$1));
});
cljs.core.async.__GT_t38672 = (function __GT_t38672(ch__$1,p__$1,filter_GT___$1,meta38673){return (new cljs.core.async.t38672(ch__$1,p__$1,filter_GT___$1,meta38673));
});
}
return (new cljs.core.async.t38672(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___38757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___38757,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___38757,out){
return (function (state_38736){var state_val_38737 = (state_38736[(1)]);if((state_val_38737 === (7)))
{var inst_38732 = (state_38736[(2)]);var state_38736__$1 = state_38736;var statearr_38738_38758 = state_38736__$1;(statearr_38738_38758[(2)] = inst_38732);
(statearr_38738_38758[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (1)))
{var state_38736__$1 = state_38736;var statearr_38739_38759 = state_38736__$1;(statearr_38739_38759[(2)] = null);
(statearr_38739_38759[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (4)))
{var inst_38718 = (state_38736[(7)]);var inst_38718__$1 = (state_38736[(2)]);var inst_38719 = (inst_38718__$1 == null);var state_38736__$1 = (function (){var statearr_38740 = state_38736;(statearr_38740[(7)] = inst_38718__$1);
return statearr_38740;
})();if(cljs.core.truth_(inst_38719))
{var statearr_38741_38760 = state_38736__$1;(statearr_38741_38760[(1)] = (5));
} else
{var statearr_38742_38761 = state_38736__$1;(statearr_38742_38761[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (6)))
{var inst_38718 = (state_38736[(7)]);var inst_38723 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38718) : p.call(null,inst_38718));var state_38736__$1 = state_38736;if(cljs.core.truth_(inst_38723))
{var statearr_38743_38762 = state_38736__$1;(statearr_38743_38762[(1)] = (8));
} else
{var statearr_38744_38763 = state_38736__$1;(statearr_38744_38763[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (3)))
{var inst_38734 = (state_38736[(2)]);var state_38736__$1 = state_38736;return cljs.core.async.impl.ioc_helpers.return_chan(state_38736__$1,inst_38734);
} else
{if((state_val_38737 === (2)))
{var state_38736__$1 = state_38736;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38736__$1,(4),ch);
} else
{if((state_val_38737 === (11)))
{var inst_38726 = (state_38736[(2)]);var state_38736__$1 = state_38736;var statearr_38745_38764 = state_38736__$1;(statearr_38745_38764[(2)] = inst_38726);
(statearr_38745_38764[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (9)))
{var state_38736__$1 = state_38736;var statearr_38746_38765 = state_38736__$1;(statearr_38746_38765[(2)] = null);
(statearr_38746_38765[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (5)))
{var inst_38721 = cljs.core.async.close_BANG_(out);var state_38736__$1 = state_38736;var statearr_38747_38766 = state_38736__$1;(statearr_38747_38766[(2)] = inst_38721);
(statearr_38747_38766[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (10)))
{var inst_38729 = (state_38736[(2)]);var state_38736__$1 = (function (){var statearr_38748 = state_38736;(statearr_38748[(8)] = inst_38729);
return statearr_38748;
})();var statearr_38749_38767 = state_38736__$1;(statearr_38749_38767[(2)] = null);
(statearr_38749_38767[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38737 === (8)))
{var inst_38718 = (state_38736[(7)]);var state_38736__$1 = state_38736;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38736__$1,(11),out,inst_38718);
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
});})(c__5693__auto___38757,out))
;return ((function (switch__5678__auto__,c__5693__auto___38757,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_38753 = [null,null,null,null,null,null,null,null,null];(statearr_38753[(0)] = state_machine__5679__auto__);
(statearr_38753[(1)] = (1));
return statearr_38753;
});
var state_machine__5679__auto____1 = (function (state_38736){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38736);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38754){if((e38754 instanceof Object))
{var ex__5682__auto__ = e38754;var statearr_38755_38768 = state_38736;(statearr_38755_38768[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38736);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e38754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__38769 = state_38736;
state_38736 = G__38769;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38736){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___38757,out))
})();var state__5695__auto__ = (function (){var statearr_38756 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___38757);
return statearr_38756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___38757,out))
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
return (function (state_38921){var state_val_38922 = (state_38921[(1)]);if((state_val_38922 === (7)))
{var inst_38917 = (state_38921[(2)]);var state_38921__$1 = state_38921;var statearr_38923_38960 = state_38921__$1;(statearr_38923_38960[(2)] = inst_38917);
(statearr_38923_38960[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (20)))
{var inst_38892 = (state_38921[(7)]);var inst_38903 = (state_38921[(2)]);var inst_38904 = cljs.core.next(inst_38892);var inst_38878 = inst_38904;var inst_38879 = null;var inst_38880 = (0);var inst_38881 = (0);var state_38921__$1 = (function (){var statearr_38924 = state_38921;(statearr_38924[(8)] = inst_38881);
(statearr_38924[(9)] = inst_38878);
(statearr_38924[(10)] = inst_38880);
(statearr_38924[(11)] = inst_38879);
(statearr_38924[(12)] = inst_38903);
return statearr_38924;
})();var statearr_38925_38961 = state_38921__$1;(statearr_38925_38961[(2)] = null);
(statearr_38925_38961[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (1)))
{var state_38921__$1 = state_38921;var statearr_38926_38962 = state_38921__$1;(statearr_38926_38962[(2)] = null);
(statearr_38926_38962[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (4)))
{var inst_38867 = (state_38921[(13)]);var inst_38867__$1 = (state_38921[(2)]);var inst_38868 = (inst_38867__$1 == null);var state_38921__$1 = (function (){var statearr_38930 = state_38921;(statearr_38930[(13)] = inst_38867__$1);
return statearr_38930;
})();if(cljs.core.truth_(inst_38868))
{var statearr_38931_38963 = state_38921__$1;(statearr_38931_38963[(1)] = (5));
} else
{var statearr_38932_38964 = state_38921__$1;(statearr_38932_38964[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (15)))
{var state_38921__$1 = state_38921;var statearr_38933_38965 = state_38921__$1;(statearr_38933_38965[(2)] = null);
(statearr_38933_38965[(1)] = (16));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (13)))
{var inst_38881 = (state_38921[(8)]);var inst_38878 = (state_38921[(9)]);var inst_38880 = (state_38921[(10)]);var inst_38879 = (state_38921[(11)]);var inst_38888 = (state_38921[(2)]);var inst_38889 = (inst_38881 + (1));var tmp38927 = inst_38878;var tmp38928 = inst_38880;var tmp38929 = inst_38879;var inst_38878__$1 = tmp38927;var inst_38879__$1 = tmp38929;var inst_38880__$1 = tmp38928;var inst_38881__$1 = inst_38889;var state_38921__$1 = (function (){var statearr_38934 = state_38921;(statearr_38934[(8)] = inst_38881__$1);
(statearr_38934[(14)] = inst_38888);
(statearr_38934[(9)] = inst_38878__$1);
(statearr_38934[(10)] = inst_38880__$1);
(statearr_38934[(11)] = inst_38879__$1);
return statearr_38934;
})();var statearr_38935_38966 = state_38921__$1;(statearr_38935_38966[(2)] = null);
(statearr_38935_38966[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (6)))
{var inst_38867 = (state_38921[(13)]);var inst_38872 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38867) : f.call(null,inst_38867));var inst_38877 = cljs.core.seq(inst_38872);var inst_38878 = inst_38877;var inst_38879 = null;var inst_38880 = (0);var inst_38881 = (0);var state_38921__$1 = (function (){var statearr_38936 = state_38921;(statearr_38936[(8)] = inst_38881);
(statearr_38936[(9)] = inst_38878);
(statearr_38936[(10)] = inst_38880);
(statearr_38936[(11)] = inst_38879);
return statearr_38936;
})();var statearr_38937_38967 = state_38921__$1;(statearr_38937_38967[(2)] = null);
(statearr_38937_38967[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (17)))
{var inst_38892 = (state_38921[(7)]);var inst_38896 = cljs.core.chunk_first(inst_38892);var inst_38897 = cljs.core.chunk_rest(inst_38892);var inst_38898 = cljs.core.count(inst_38896);var inst_38878 = inst_38897;var inst_38879 = inst_38896;var inst_38880 = inst_38898;var inst_38881 = (0);var state_38921__$1 = (function (){var statearr_38938 = state_38921;(statearr_38938[(8)] = inst_38881);
(statearr_38938[(9)] = inst_38878);
(statearr_38938[(10)] = inst_38880);
(statearr_38938[(11)] = inst_38879);
return statearr_38938;
})();var statearr_38939_38968 = state_38921__$1;(statearr_38939_38968[(2)] = null);
(statearr_38939_38968[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (3)))
{var inst_38919 = (state_38921[(2)]);var state_38921__$1 = state_38921;return cljs.core.async.impl.ioc_helpers.return_chan(state_38921__$1,inst_38919);
} else
{if((state_val_38922 === (12)))
{var inst_38912 = (state_38921[(2)]);var state_38921__$1 = state_38921;var statearr_38940_38969 = state_38921__$1;(statearr_38940_38969[(2)] = inst_38912);
(statearr_38940_38969[(1)] = (9));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (2)))
{var state_38921__$1 = state_38921;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38921__$1,(4),in$);
} else
{if((state_val_38922 === (19)))
{var inst_38907 = (state_38921[(2)]);var state_38921__$1 = state_38921;var statearr_38941_38970 = state_38921__$1;(statearr_38941_38970[(2)] = inst_38907);
(statearr_38941_38970[(1)] = (16));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (11)))
{var inst_38878 = (state_38921[(9)]);var inst_38892 = (state_38921[(7)]);var inst_38892__$1 = cljs.core.seq(inst_38878);var state_38921__$1 = (function (){var statearr_38942 = state_38921;(statearr_38942[(7)] = inst_38892__$1);
return statearr_38942;
})();if(inst_38892__$1)
{var statearr_38943_38971 = state_38921__$1;(statearr_38943_38971[(1)] = (14));
} else
{var statearr_38944_38972 = state_38921__$1;(statearr_38944_38972[(1)] = (15));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (9)))
{var inst_38914 = (state_38921[(2)]);var state_38921__$1 = (function (){var statearr_38945 = state_38921;(statearr_38945[(15)] = inst_38914);
return statearr_38945;
})();var statearr_38946_38973 = state_38921__$1;(statearr_38946_38973[(2)] = null);
(statearr_38946_38973[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (5)))
{var inst_38870 = cljs.core.async.close_BANG_(out);var state_38921__$1 = state_38921;var statearr_38947_38974 = state_38921__$1;(statearr_38947_38974[(2)] = inst_38870);
(statearr_38947_38974[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (14)))
{var inst_38892 = (state_38921[(7)]);var inst_38894 = cljs.core.chunked_seq_QMARK_(inst_38892);var state_38921__$1 = state_38921;if(inst_38894)
{var statearr_38948_38975 = state_38921__$1;(statearr_38948_38975[(1)] = (17));
} else
{var statearr_38949_38976 = state_38921__$1;(statearr_38949_38976[(1)] = (18));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (16)))
{var inst_38910 = (state_38921[(2)]);var state_38921__$1 = state_38921;var statearr_38950_38977 = state_38921__$1;(statearr_38950_38977[(2)] = inst_38910);
(statearr_38950_38977[(1)] = (12));
return cljs.core.constant$keyword$765;
} else
{if((state_val_38922 === (10)))
{var inst_38881 = (state_38921[(8)]);var inst_38879 = (state_38921[(11)]);var inst_38886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38879,inst_38881);var state_38921__$1 = state_38921;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38921__$1,(13),out,inst_38886);
} else
{if((state_val_38922 === (18)))
{var inst_38892 = (state_38921[(7)]);var inst_38901 = cljs.core.first(inst_38892);var state_38921__$1 = state_38921;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38921__$1,(20),out,inst_38901);
} else
{if((state_val_38922 === (8)))
{var inst_38881 = (state_38921[(8)]);var inst_38880 = (state_38921[(10)]);var inst_38883 = (inst_38881 < inst_38880);var inst_38884 = inst_38883;var state_38921__$1 = state_38921;if(cljs.core.truth_(inst_38884))
{var statearr_38951_38978 = state_38921__$1;(statearr_38951_38978[(1)] = (10));
} else
{var statearr_38952_38979 = state_38921__$1;(statearr_38952_38979[(1)] = (11));
}
return cljs.core.constant$keyword$765;
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
var state_machine__5679__auto____0 = (function (){var statearr_38956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38956[(0)] = state_machine__5679__auto__);
(statearr_38956[(1)] = (1));
return statearr_38956;
});
var state_machine__5679__auto____1 = (function (state_38921){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_38921);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e38957){if((e38957 instanceof Object))
{var ex__5682__auto__ = e38957;var statearr_38958_38980 = state_38921;(statearr_38958_38980[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38921);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e38957;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__38981 = state_38921;
state_38921 = G__38981;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_38921){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_38921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_38959 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_38959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_38959;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___39062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39062){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39062){
return (function (state_39041){var state_val_39042 = (state_39041[(1)]);if((state_val_39042 === (7)))
{var inst_39037 = (state_39041[(2)]);var state_39041__$1 = state_39041;var statearr_39043_39063 = state_39041__$1;(statearr_39043_39063[(2)] = inst_39037);
(statearr_39043_39063[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (1)))
{var state_39041__$1 = state_39041;var statearr_39044_39064 = state_39041__$1;(statearr_39044_39064[(2)] = null);
(statearr_39044_39064[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (4)))
{var inst_39024 = (state_39041[(7)]);var inst_39024__$1 = (state_39041[(2)]);var inst_39025 = (inst_39024__$1 == null);var state_39041__$1 = (function (){var statearr_39045 = state_39041;(statearr_39045[(7)] = inst_39024__$1);
return statearr_39045;
})();if(cljs.core.truth_(inst_39025))
{var statearr_39046_39065 = state_39041__$1;(statearr_39046_39065[(1)] = (5));
} else
{var statearr_39047_39066 = state_39041__$1;(statearr_39047_39066[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (6)))
{var inst_39024 = (state_39041[(7)]);var state_39041__$1 = state_39041;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39041__$1,(11),to,inst_39024);
} else
{if((state_val_39042 === (3)))
{var inst_39039 = (state_39041[(2)]);var state_39041__$1 = state_39041;return cljs.core.async.impl.ioc_helpers.return_chan(state_39041__$1,inst_39039);
} else
{if((state_val_39042 === (2)))
{var state_39041__$1 = state_39041;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39041__$1,(4),from);
} else
{if((state_val_39042 === (11)))
{var inst_39034 = (state_39041[(2)]);var state_39041__$1 = (function (){var statearr_39048 = state_39041;(statearr_39048[(8)] = inst_39034);
return statearr_39048;
})();var statearr_39049_39067 = state_39041__$1;(statearr_39049_39067[(2)] = null);
(statearr_39049_39067[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (9)))
{var state_39041__$1 = state_39041;var statearr_39050_39068 = state_39041__$1;(statearr_39050_39068[(2)] = null);
(statearr_39050_39068[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (5)))
{var state_39041__$1 = state_39041;if(cljs.core.truth_(close_QMARK_))
{var statearr_39051_39069 = state_39041__$1;(statearr_39051_39069[(1)] = (8));
} else
{var statearr_39052_39070 = state_39041__$1;(statearr_39052_39070[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (10)))
{var inst_39031 = (state_39041[(2)]);var state_39041__$1 = state_39041;var statearr_39053_39071 = state_39041__$1;(statearr_39053_39071[(2)] = inst_39031);
(statearr_39053_39071[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39042 === (8)))
{var inst_39028 = cljs.core.async.close_BANG_(to);var state_39041__$1 = state_39041;var statearr_39054_39072 = state_39041__$1;(statearr_39054_39072[(2)] = inst_39028);
(statearr_39054_39072[(1)] = (10));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___39062))
;return ((function (switch__5678__auto__,c__5693__auto___39062){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39058 = [null,null,null,null,null,null,null,null,null];(statearr_39058[(0)] = state_machine__5679__auto__);
(statearr_39058[(1)] = (1));
return statearr_39058;
});
var state_machine__5679__auto____1 = (function (state_39041){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39041);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39059){if((e39059 instanceof Object))
{var ex__5682__auto__ = e39059;var statearr_39060_39073 = state_39041;(statearr_39060_39073[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39041);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e39059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__39074 = state_39041;
state_39041 = G__39074;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39041){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39062))
})();var state__5695__auto__ = (function (){var statearr_39061 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39062);
return statearr_39061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39062))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5693__auto___39161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39161,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39161,tc,fc){
return (function (state_39139){var state_val_39140 = (state_39139[(1)]);if((state_val_39140 === (7)))
{var inst_39135 = (state_39139[(2)]);var state_39139__$1 = state_39139;var statearr_39141_39162 = state_39139__$1;(statearr_39141_39162[(2)] = inst_39135);
(statearr_39141_39162[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (1)))
{var state_39139__$1 = state_39139;var statearr_39142_39163 = state_39139__$1;(statearr_39142_39163[(2)] = null);
(statearr_39142_39163[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (4)))
{var inst_39120 = (state_39139[(7)]);var inst_39120__$1 = (state_39139[(2)]);var inst_39121 = (inst_39120__$1 == null);var state_39139__$1 = (function (){var statearr_39143 = state_39139;(statearr_39143[(7)] = inst_39120__$1);
return statearr_39143;
})();if(cljs.core.truth_(inst_39121))
{var statearr_39144_39164 = state_39139__$1;(statearr_39144_39164[(1)] = (5));
} else
{var statearr_39145_39165 = state_39139__$1;(statearr_39145_39165[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (6)))
{var inst_39120 = (state_39139[(7)]);var inst_39126 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39120) : p.call(null,inst_39120));var state_39139__$1 = state_39139;if(cljs.core.truth_(inst_39126))
{var statearr_39146_39166 = state_39139__$1;(statearr_39146_39166[(1)] = (9));
} else
{var statearr_39147_39167 = state_39139__$1;(statearr_39147_39167[(1)] = (10));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (3)))
{var inst_39137 = (state_39139[(2)]);var state_39139__$1 = state_39139;return cljs.core.async.impl.ioc_helpers.return_chan(state_39139__$1,inst_39137);
} else
{if((state_val_39140 === (2)))
{var state_39139__$1 = state_39139;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39139__$1,(4),ch);
} else
{if((state_val_39140 === (11)))
{var inst_39120 = (state_39139[(7)]);var inst_39130 = (state_39139[(2)]);var state_39139__$1 = state_39139;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39139__$1,(8),inst_39130,inst_39120);
} else
{if((state_val_39140 === (9)))
{var state_39139__$1 = state_39139;var statearr_39148_39168 = state_39139__$1;(statearr_39148_39168[(2)] = tc);
(statearr_39148_39168[(1)] = (11));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (5)))
{var inst_39123 = cljs.core.async.close_BANG_(tc);var inst_39124 = cljs.core.async.close_BANG_(fc);var state_39139__$1 = (function (){var statearr_39149 = state_39139;(statearr_39149[(8)] = inst_39123);
return statearr_39149;
})();var statearr_39150_39169 = state_39139__$1;(statearr_39150_39169[(2)] = inst_39124);
(statearr_39150_39169[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (10)))
{var state_39139__$1 = state_39139;var statearr_39151_39170 = state_39139__$1;(statearr_39151_39170[(2)] = fc);
(statearr_39151_39170[(1)] = (11));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39140 === (8)))
{var inst_39132 = (state_39139[(2)]);var state_39139__$1 = (function (){var statearr_39152 = state_39139;(statearr_39152[(9)] = inst_39132);
return statearr_39152;
})();var statearr_39153_39171 = state_39139__$1;(statearr_39153_39171[(2)] = null);
(statearr_39153_39171[(1)] = (2));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___39161,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___39161,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39157 = [null,null,null,null,null,null,null,null,null,null];(statearr_39157[(0)] = state_machine__5679__auto__);
(statearr_39157[(1)] = (1));
return statearr_39157;
});
var state_machine__5679__auto____1 = (function (state_39139){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39139);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39158){if((e39158 instanceof Object))
{var ex__5682__auto__ = e39158;var statearr_39159_39172 = state_39139;(statearr_39159_39172[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39139);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e39158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__39173 = state_39139;
state_39139 = G__39173;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39139){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39161,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_39160 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39161);
return statearr_39160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39161,tc,fc))
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
return (function (state_39220){var state_val_39221 = (state_39220[(1)]);if((state_val_39221 === (7)))
{var inst_39216 = (state_39220[(2)]);var state_39220__$1 = state_39220;var statearr_39222_39238 = state_39220__$1;(statearr_39222_39238[(2)] = inst_39216);
(statearr_39222_39238[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39221 === (6)))
{var inst_39206 = (state_39220[(7)]);var inst_39209 = (state_39220[(8)]);var inst_39213 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39206,inst_39209) : f.call(null,inst_39206,inst_39209));var inst_39206__$1 = inst_39213;var state_39220__$1 = (function (){var statearr_39223 = state_39220;(statearr_39223[(7)] = inst_39206__$1);
return statearr_39223;
})();var statearr_39224_39239 = state_39220__$1;(statearr_39224_39239[(2)] = null);
(statearr_39224_39239[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39221 === (5)))
{var inst_39206 = (state_39220[(7)]);var state_39220__$1 = state_39220;var statearr_39225_39240 = state_39220__$1;(statearr_39225_39240[(2)] = inst_39206);
(statearr_39225_39240[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39221 === (4)))
{var inst_39209 = (state_39220[(8)]);var inst_39209__$1 = (state_39220[(2)]);var inst_39210 = (inst_39209__$1 == null);var state_39220__$1 = (function (){var statearr_39226 = state_39220;(statearr_39226[(8)] = inst_39209__$1);
return statearr_39226;
})();if(cljs.core.truth_(inst_39210))
{var statearr_39227_39241 = state_39220__$1;(statearr_39227_39241[(1)] = (5));
} else
{var statearr_39228_39242 = state_39220__$1;(statearr_39228_39242[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39221 === (3)))
{var inst_39218 = (state_39220[(2)]);var state_39220__$1 = state_39220;return cljs.core.async.impl.ioc_helpers.return_chan(state_39220__$1,inst_39218);
} else
{if((state_val_39221 === (2)))
{var state_39220__$1 = state_39220;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39220__$1,(4),ch);
} else
{if((state_val_39221 === (1)))
{var inst_39206 = init;var state_39220__$1 = (function (){var statearr_39229 = state_39220;(statearr_39229[(7)] = inst_39206);
return statearr_39229;
})();var statearr_39230_39243 = state_39220__$1;(statearr_39230_39243[(2)] = null);
(statearr_39230_39243[(1)] = (2));
return cljs.core.constant$keyword$765;
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
var state_machine__5679__auto____0 = (function (){var statearr_39234 = [null,null,null,null,null,null,null,null,null];(statearr_39234[(0)] = state_machine__5679__auto__);
(statearr_39234[(1)] = (1));
return statearr_39234;
});
var state_machine__5679__auto____1 = (function (state_39220){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39220);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39235){if((e39235 instanceof Object))
{var ex__5682__auto__ = e39235;var statearr_39236_39244 = state_39220;(statearr_39236_39244[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39220);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e39235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__39245 = state_39220;
state_39220 = G__39245;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39220){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39237 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39237;
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
return (function (state_39307){var state_val_39308 = (state_39307[(1)]);if((state_val_39308 === (7)))
{var inst_39288 = (state_39307[(7)]);var inst_39293 = (state_39307[(2)]);var inst_39294 = cljs.core.next(inst_39288);var inst_39288__$1 = inst_39294;var state_39307__$1 = (function (){var statearr_39309 = state_39307;(statearr_39309[(7)] = inst_39288__$1);
(statearr_39309[(8)] = inst_39293);
return statearr_39309;
})();var statearr_39310_39328 = state_39307__$1;(statearr_39310_39328[(2)] = null);
(statearr_39310_39328[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (1)))
{var inst_39287 = cljs.core.seq(coll);var inst_39288 = inst_39287;var state_39307__$1 = (function (){var statearr_39311 = state_39307;(statearr_39311[(7)] = inst_39288);
return statearr_39311;
})();var statearr_39312_39329 = state_39307__$1;(statearr_39312_39329[(2)] = null);
(statearr_39312_39329[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (4)))
{var inst_39288 = (state_39307[(7)]);var inst_39291 = cljs.core.first(inst_39288);var state_39307__$1 = state_39307;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39307__$1,(7),ch,inst_39291);
} else
{if((state_val_39308 === (6)))
{var inst_39303 = (state_39307[(2)]);var state_39307__$1 = state_39307;var statearr_39313_39330 = state_39307__$1;(statearr_39313_39330[(2)] = inst_39303);
(statearr_39313_39330[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (3)))
{var inst_39305 = (state_39307[(2)]);var state_39307__$1 = state_39307;return cljs.core.async.impl.ioc_helpers.return_chan(state_39307__$1,inst_39305);
} else
{if((state_val_39308 === (2)))
{var inst_39288 = (state_39307[(7)]);var state_39307__$1 = state_39307;if(cljs.core.truth_(inst_39288))
{var statearr_39314_39331 = state_39307__$1;(statearr_39314_39331[(1)] = (4));
} else
{var statearr_39315_39332 = state_39307__$1;(statearr_39315_39332[(1)] = (5));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (9)))
{var state_39307__$1 = state_39307;var statearr_39316_39333 = state_39307__$1;(statearr_39316_39333[(2)] = null);
(statearr_39316_39333[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (5)))
{var state_39307__$1 = state_39307;if(cljs.core.truth_(close_QMARK_))
{var statearr_39317_39334 = state_39307__$1;(statearr_39317_39334[(1)] = (8));
} else
{var statearr_39318_39335 = state_39307__$1;(statearr_39318_39335[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (10)))
{var inst_39301 = (state_39307[(2)]);var state_39307__$1 = state_39307;var statearr_39319_39336 = state_39307__$1;(statearr_39319_39336[(2)] = inst_39301);
(statearr_39319_39336[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39308 === (8)))
{var inst_39298 = cljs.core.async.close_BANG_(ch);var state_39307__$1 = state_39307;var statearr_39320_39337 = state_39307__$1;(statearr_39320_39337[(2)] = inst_39298);
(statearr_39320_39337[(1)] = (10));
return cljs.core.constant$keyword$765;
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
var state_machine__5679__auto____0 = (function (){var statearr_39324 = [null,null,null,null,null,null,null,null,null];(statearr_39324[(0)] = state_machine__5679__auto__);
(statearr_39324[(1)] = (1));
return statearr_39324;
});
var state_machine__5679__auto____1 = (function (state_39307){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39307);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39325){if((e39325 instanceof Object))
{var ex__5682__auto__ = e39325;var statearr_39326_39338 = state_39307;(statearr_39326_39338[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39307);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e39325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__39339 = state_39307;
state_39307 = G__39339;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39307){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_39327 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_39327;
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
cljs.core.async.Mux = (function (){var obj39341 = {};return obj39341;
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
cljs.core.async.Mult = (function (){var obj39343 = {};return obj39343;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t39567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39567 = (function (cs,ch,mult,meta39568){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39568 = meta39568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39567.cljs$lang$type = true;
cljs.core.async.t39567.cljs$lang$ctorStr = "cljs.core.async/t39567";
cljs.core.async.t39567.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39567");
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t39567.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39569){var self__ = this;
var _39569__$1 = this;return self__.meta39568;
});})(cs))
;
cljs.core.async.t39567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39569,meta39568__$1){var self__ = this;
var _39569__$1 = this;return (new cljs.core.async.t39567(self__.cs,self__.ch,self__.mult,meta39568__$1));
});})(cs))
;
cljs.core.async.__GT_t39567 = ((function (cs){
return (function __GT_t39567(cs__$1,ch__$1,mult__$1,meta39568){return (new cljs.core.async.t39567(cs__$1,ch__$1,mult__$1,meta39568));
});})(cs))
;
}
return (new cljs.core.async.t39567(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___39790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___39790,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___39790,cs,m,dchan,dctr,done){
return (function (state_39704){var state_val_39705 = (state_39704[(1)]);if((state_val_39705 === (7)))
{var inst_39700 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39706_39791 = state_39704__$1;(statearr_39706_39791[(2)] = inst_39700);
(statearr_39706_39791[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (20)))
{var inst_39601 = (state_39704[(7)]);var inst_39611 = cljs.core.first(inst_39601);var inst_39612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39611,(0),null);var inst_39613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39611,(1),null);var state_39704__$1 = (function (){var statearr_39707 = state_39704;(statearr_39707[(8)] = inst_39612);
return statearr_39707;
})();if(cljs.core.truth_(inst_39613))
{var statearr_39708_39792 = state_39704__$1;(statearr_39708_39792[(1)] = (22));
} else
{var statearr_39709_39793 = state_39704__$1;(statearr_39709_39793[(1)] = (23));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (27)))
{var inst_39643 = (state_39704[(9)]);var inst_39641 = (state_39704[(10)]);var inst_39648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39641,inst_39643);var state_39704__$1 = (function (){var statearr_39710 = state_39704;(statearr_39710[(11)] = inst_39648);
return statearr_39710;
})();var statearr_39711_39794 = state_39704__$1;(statearr_39711_39794[(2)] = null);
(statearr_39711_39794[(1)] = (32));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (1)))
{var state_39704__$1 = state_39704;var statearr_39712_39795 = state_39704__$1;(statearr_39712_39795[(2)] = null);
(statearr_39712_39795[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (24)))
{var inst_39601 = (state_39704[(7)]);var inst_39618 = (state_39704[(2)]);var inst_39619 = cljs.core.next(inst_39601);var inst_39581 = inst_39619;var inst_39582 = null;var inst_39583 = (0);var inst_39584 = (0);var state_39704__$1 = (function (){var statearr_39713 = state_39704;(statearr_39713[(12)] = inst_39584);
(statearr_39713[(13)] = inst_39618);
(statearr_39713[(14)] = inst_39581);
(statearr_39713[(15)] = inst_39583);
(statearr_39713[(16)] = inst_39582);
return statearr_39713;
})();var statearr_39714_39796 = state_39704__$1;(statearr_39714_39796[(2)] = null);
(statearr_39714_39796[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (39)))
{var inst_39661 = (state_39704[(17)]);var inst_39679 = (state_39704[(2)]);var inst_39680 = cljs.core.next(inst_39661);var inst_39640 = inst_39680;var inst_39641 = null;var inst_39642 = (0);var inst_39643 = (0);var state_39704__$1 = (function (){var statearr_39718 = state_39704;(statearr_39718[(9)] = inst_39643);
(statearr_39718[(18)] = inst_39679);
(statearr_39718[(10)] = inst_39641);
(statearr_39718[(19)] = inst_39642);
(statearr_39718[(20)] = inst_39640);
return statearr_39718;
})();var statearr_39719_39797 = state_39704__$1;(statearr_39719_39797[(2)] = null);
(statearr_39719_39797[(1)] = (25));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (4)))
{var inst_39572 = (state_39704[(21)]);var inst_39572__$1 = (state_39704[(2)]);var inst_39573 = (inst_39572__$1 == null);var state_39704__$1 = (function (){var statearr_39720 = state_39704;(statearr_39720[(21)] = inst_39572__$1);
return statearr_39720;
})();if(cljs.core.truth_(inst_39573))
{var statearr_39721_39798 = state_39704__$1;(statearr_39721_39798[(1)] = (5));
} else
{var statearr_39722_39799 = state_39704__$1;(statearr_39722_39799[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (15)))
{var inst_39584 = (state_39704[(12)]);var inst_39581 = (state_39704[(14)]);var inst_39583 = (state_39704[(15)]);var inst_39582 = (state_39704[(16)]);var inst_39597 = (state_39704[(2)]);var inst_39598 = (inst_39584 + (1));var tmp39715 = inst_39581;var tmp39716 = inst_39583;var tmp39717 = inst_39582;var inst_39581__$1 = tmp39715;var inst_39582__$1 = tmp39717;var inst_39583__$1 = tmp39716;var inst_39584__$1 = inst_39598;var state_39704__$1 = (function (){var statearr_39723 = state_39704;(statearr_39723[(12)] = inst_39584__$1);
(statearr_39723[(22)] = inst_39597);
(statearr_39723[(14)] = inst_39581__$1);
(statearr_39723[(15)] = inst_39583__$1);
(statearr_39723[(16)] = inst_39582__$1);
return statearr_39723;
})();var statearr_39724_39800 = state_39704__$1;(statearr_39724_39800[(2)] = null);
(statearr_39724_39800[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (21)))
{var inst_39622 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39725_39801 = state_39704__$1;(statearr_39725_39801[(2)] = inst_39622);
(statearr_39725_39801[(1)] = (18));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (31)))
{var inst_39648 = (state_39704[(11)]);var inst_39649 = (state_39704[(2)]);var inst_39650 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39651 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39648);var state_39704__$1 = (function (){var statearr_39726 = state_39704;(statearr_39726[(23)] = inst_39650);
(statearr_39726[(24)] = inst_39649);
return statearr_39726;
})();var statearr_39727_39802 = state_39704__$1;(statearr_39727_39802[(2)] = inst_39651);
cljs.core.async.impl.ioc_helpers.process_exception(state_39704__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (32)))
{var inst_39572 = (state_39704[(21)]);var inst_39648 = (state_39704[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39704,(31),Object,null,(30));var inst_39655 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39648,inst_39572,done);var state_39704__$1 = state_39704;var statearr_39728_39803 = state_39704__$1;(statearr_39728_39803[(2)] = inst_39655);
cljs.core.async.impl.ioc_helpers.process_exception(state_39704__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (40)))
{var inst_39670 = (state_39704[(25)]);var inst_39671 = (state_39704[(2)]);var inst_39672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_39673 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39670);var state_39704__$1 = (function (){var statearr_39729 = state_39704;(statearr_39729[(26)] = inst_39671);
(statearr_39729[(27)] = inst_39672);
return statearr_39729;
})();var statearr_39730_39804 = state_39704__$1;(statearr_39730_39804[(2)] = inst_39673);
cljs.core.async.impl.ioc_helpers.process_exception(state_39704__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (33)))
{var inst_39661 = (state_39704[(17)]);var inst_39663 = cljs.core.chunked_seq_QMARK_(inst_39661);var state_39704__$1 = state_39704;if(inst_39663)
{var statearr_39731_39805 = state_39704__$1;(statearr_39731_39805[(1)] = (36));
} else
{var statearr_39732_39806 = state_39704__$1;(statearr_39732_39806[(1)] = (37));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (13)))
{var inst_39591 = (state_39704[(28)]);var inst_39594 = cljs.core.async.close_BANG_(inst_39591);var state_39704__$1 = state_39704;var statearr_39733_39807 = state_39704__$1;(statearr_39733_39807[(2)] = inst_39594);
(statearr_39733_39807[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (22)))
{var inst_39612 = (state_39704[(8)]);var inst_39615 = cljs.core.async.close_BANG_(inst_39612);var state_39704__$1 = state_39704;var statearr_39734_39808 = state_39704__$1;(statearr_39734_39808[(2)] = inst_39615);
(statearr_39734_39808[(1)] = (24));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (36)))
{var inst_39661 = (state_39704[(17)]);var inst_39665 = cljs.core.chunk_first(inst_39661);var inst_39666 = cljs.core.chunk_rest(inst_39661);var inst_39667 = cljs.core.count(inst_39665);var inst_39640 = inst_39666;var inst_39641 = inst_39665;var inst_39642 = inst_39667;var inst_39643 = (0);var state_39704__$1 = (function (){var statearr_39735 = state_39704;(statearr_39735[(9)] = inst_39643);
(statearr_39735[(10)] = inst_39641);
(statearr_39735[(19)] = inst_39642);
(statearr_39735[(20)] = inst_39640);
return statearr_39735;
})();var statearr_39736_39809 = state_39704__$1;(statearr_39736_39809[(2)] = null);
(statearr_39736_39809[(1)] = (25));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (41)))
{var inst_39572 = (state_39704[(21)]);var inst_39670 = (state_39704[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39704,(40),Object,null,(39));var inst_39677 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39670,inst_39572,done);var state_39704__$1 = state_39704;var statearr_39737_39810 = state_39704__$1;(statearr_39737_39810[(2)] = inst_39677);
cljs.core.async.impl.ioc_helpers.process_exception(state_39704__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (43)))
{var state_39704__$1 = state_39704;var statearr_39738_39811 = state_39704__$1;(statearr_39738_39811[(2)] = null);
(statearr_39738_39811[(1)] = (44));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (29)))
{var inst_39688 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39739_39812 = state_39704__$1;(statearr_39739_39812[(2)] = inst_39688);
(statearr_39739_39812[(1)] = (26));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (44)))
{var inst_39697 = (state_39704[(2)]);var state_39704__$1 = (function (){var statearr_39740 = state_39704;(statearr_39740[(29)] = inst_39697);
return statearr_39740;
})();var statearr_39741_39813 = state_39704__$1;(statearr_39741_39813[(2)] = null);
(statearr_39741_39813[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (6)))
{var inst_39632 = (state_39704[(30)]);var inst_39631 = cljs.core.deref(cs);var inst_39632__$1 = cljs.core.keys(inst_39631);var inst_39633 = cljs.core.count(inst_39632__$1);var inst_39634 = cljs.core.reset_BANG_(dctr,inst_39633);var inst_39639 = cljs.core.seq(inst_39632__$1);var inst_39640 = inst_39639;var inst_39641 = null;var inst_39642 = (0);var inst_39643 = (0);var state_39704__$1 = (function (){var statearr_39742 = state_39704;(statearr_39742[(9)] = inst_39643);
(statearr_39742[(10)] = inst_39641);
(statearr_39742[(19)] = inst_39642);
(statearr_39742[(20)] = inst_39640);
(statearr_39742[(30)] = inst_39632__$1);
(statearr_39742[(31)] = inst_39634);
return statearr_39742;
})();var statearr_39743_39814 = state_39704__$1;(statearr_39743_39814[(2)] = null);
(statearr_39743_39814[(1)] = (25));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (28)))
{var inst_39661 = (state_39704[(17)]);var inst_39640 = (state_39704[(20)]);var inst_39661__$1 = cljs.core.seq(inst_39640);var state_39704__$1 = (function (){var statearr_39744 = state_39704;(statearr_39744[(17)] = inst_39661__$1);
return statearr_39744;
})();if(inst_39661__$1)
{var statearr_39745_39815 = state_39704__$1;(statearr_39745_39815[(1)] = (33));
} else
{var statearr_39746_39816 = state_39704__$1;(statearr_39746_39816[(1)] = (34));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (25)))
{var inst_39643 = (state_39704[(9)]);var inst_39642 = (state_39704[(19)]);var inst_39645 = (inst_39643 < inst_39642);var inst_39646 = inst_39645;var state_39704__$1 = state_39704;if(cljs.core.truth_(inst_39646))
{var statearr_39747_39817 = state_39704__$1;(statearr_39747_39817[(1)] = (27));
} else
{var statearr_39748_39818 = state_39704__$1;(statearr_39748_39818[(1)] = (28));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (34)))
{var state_39704__$1 = state_39704;var statearr_39749_39819 = state_39704__$1;(statearr_39749_39819[(2)] = null);
(statearr_39749_39819[(1)] = (35));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (17)))
{var state_39704__$1 = state_39704;var statearr_39750_39820 = state_39704__$1;(statearr_39750_39820[(2)] = null);
(statearr_39750_39820[(1)] = (18));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (3)))
{var inst_39702 = (state_39704[(2)]);var state_39704__$1 = state_39704;return cljs.core.async.impl.ioc_helpers.return_chan(state_39704__$1,inst_39702);
} else
{if((state_val_39705 === (12)))
{var inst_39627 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39751_39821 = state_39704__$1;(statearr_39751_39821[(2)] = inst_39627);
(statearr_39751_39821[(1)] = (9));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (2)))
{var state_39704__$1 = state_39704;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39704__$1,(4),ch);
} else
{if((state_val_39705 === (23)))
{var state_39704__$1 = state_39704;var statearr_39752_39822 = state_39704__$1;(statearr_39752_39822[(2)] = null);
(statearr_39752_39822[(1)] = (24));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (35)))
{var inst_39686 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39753_39823 = state_39704__$1;(statearr_39753_39823[(2)] = inst_39686);
(statearr_39753_39823[(1)] = (29));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (19)))
{var inst_39601 = (state_39704[(7)]);var inst_39605 = cljs.core.chunk_first(inst_39601);var inst_39606 = cljs.core.chunk_rest(inst_39601);var inst_39607 = cljs.core.count(inst_39605);var inst_39581 = inst_39606;var inst_39582 = inst_39605;var inst_39583 = inst_39607;var inst_39584 = (0);var state_39704__$1 = (function (){var statearr_39754 = state_39704;(statearr_39754[(12)] = inst_39584);
(statearr_39754[(14)] = inst_39581);
(statearr_39754[(15)] = inst_39583);
(statearr_39754[(16)] = inst_39582);
return statearr_39754;
})();var statearr_39755_39824 = state_39704__$1;(statearr_39755_39824[(2)] = null);
(statearr_39755_39824[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (11)))
{var inst_39581 = (state_39704[(14)]);var inst_39601 = (state_39704[(7)]);var inst_39601__$1 = cljs.core.seq(inst_39581);var state_39704__$1 = (function (){var statearr_39756 = state_39704;(statearr_39756[(7)] = inst_39601__$1);
return statearr_39756;
})();if(inst_39601__$1)
{var statearr_39757_39825 = state_39704__$1;(statearr_39757_39825[(1)] = (16));
} else
{var statearr_39758_39826 = state_39704__$1;(statearr_39758_39826[(1)] = (17));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (9)))
{var inst_39629 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39759_39827 = state_39704__$1;(statearr_39759_39827[(2)] = inst_39629);
(statearr_39759_39827[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (5)))
{var inst_39579 = cljs.core.deref(cs);var inst_39580 = cljs.core.seq(inst_39579);var inst_39581 = inst_39580;var inst_39582 = null;var inst_39583 = (0);var inst_39584 = (0);var state_39704__$1 = (function (){var statearr_39760 = state_39704;(statearr_39760[(12)] = inst_39584);
(statearr_39760[(14)] = inst_39581);
(statearr_39760[(15)] = inst_39583);
(statearr_39760[(16)] = inst_39582);
return statearr_39760;
})();var statearr_39761_39828 = state_39704__$1;(statearr_39761_39828[(2)] = null);
(statearr_39761_39828[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (14)))
{var state_39704__$1 = state_39704;var statearr_39762_39829 = state_39704__$1;(statearr_39762_39829[(2)] = null);
(statearr_39762_39829[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (45)))
{var inst_39694 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39763_39830 = state_39704__$1;(statearr_39763_39830[(2)] = inst_39694);
(statearr_39763_39830[(1)] = (44));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (26)))
{var inst_39632 = (state_39704[(30)]);var inst_39690 = (state_39704[(2)]);var inst_39691 = cljs.core.seq(inst_39632);var state_39704__$1 = (function (){var statearr_39764 = state_39704;(statearr_39764[(32)] = inst_39690);
return statearr_39764;
})();if(inst_39691)
{var statearr_39765_39831 = state_39704__$1;(statearr_39765_39831[(1)] = (42));
} else
{var statearr_39766_39832 = state_39704__$1;(statearr_39766_39832[(1)] = (43));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (16)))
{var inst_39601 = (state_39704[(7)]);var inst_39603 = cljs.core.chunked_seq_QMARK_(inst_39601);var state_39704__$1 = state_39704;if(inst_39603)
{var statearr_39770_39833 = state_39704__$1;(statearr_39770_39833[(1)] = (19));
} else
{var statearr_39771_39834 = state_39704__$1;(statearr_39771_39834[(1)] = (20));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (38)))
{var inst_39683 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39772_39835 = state_39704__$1;(statearr_39772_39835[(2)] = inst_39683);
(statearr_39772_39835[(1)] = (35));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (30)))
{var inst_39643 = (state_39704[(9)]);var inst_39641 = (state_39704[(10)]);var inst_39642 = (state_39704[(19)]);var inst_39640 = (state_39704[(20)]);var inst_39657 = (state_39704[(2)]);var inst_39658 = (inst_39643 + (1));var tmp39767 = inst_39641;var tmp39768 = inst_39642;var tmp39769 = inst_39640;var inst_39640__$1 = tmp39769;var inst_39641__$1 = tmp39767;var inst_39642__$1 = tmp39768;var inst_39643__$1 = inst_39658;var state_39704__$1 = (function (){var statearr_39773 = state_39704;(statearr_39773[(9)] = inst_39643__$1);
(statearr_39773[(33)] = inst_39657);
(statearr_39773[(10)] = inst_39641__$1);
(statearr_39773[(19)] = inst_39642__$1);
(statearr_39773[(20)] = inst_39640__$1);
return statearr_39773;
})();var statearr_39774_39836 = state_39704__$1;(statearr_39774_39836[(2)] = null);
(statearr_39774_39836[(1)] = (25));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (10)))
{var inst_39584 = (state_39704[(12)]);var inst_39582 = (state_39704[(16)]);var inst_39590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39582,inst_39584);var inst_39591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39590,(0),null);var inst_39592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39590,(1),null);var state_39704__$1 = (function (){var statearr_39775 = state_39704;(statearr_39775[(28)] = inst_39591);
return statearr_39775;
})();if(cljs.core.truth_(inst_39592))
{var statearr_39776_39837 = state_39704__$1;(statearr_39776_39837[(1)] = (13));
} else
{var statearr_39777_39838 = state_39704__$1;(statearr_39777_39838[(1)] = (14));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (18)))
{var inst_39625 = (state_39704[(2)]);var state_39704__$1 = state_39704;var statearr_39778_39839 = state_39704__$1;(statearr_39778_39839[(2)] = inst_39625);
(statearr_39778_39839[(1)] = (12));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (42)))
{var state_39704__$1 = state_39704;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39704__$1,(45),dchan);
} else
{if((state_val_39705 === (37)))
{var inst_39661 = (state_39704[(17)]);var inst_39670 = cljs.core.first(inst_39661);var state_39704__$1 = (function (){var statearr_39779 = state_39704;(statearr_39779[(25)] = inst_39670);
return statearr_39779;
})();var statearr_39780_39840 = state_39704__$1;(statearr_39780_39840[(2)] = null);
(statearr_39780_39840[(1)] = (41));
return cljs.core.constant$keyword$765;
} else
{if((state_val_39705 === (8)))
{var inst_39584 = (state_39704[(12)]);var inst_39583 = (state_39704[(15)]);var inst_39586 = (inst_39584 < inst_39583);var inst_39587 = inst_39586;var state_39704__$1 = state_39704;if(cljs.core.truth_(inst_39587))
{var statearr_39781_39841 = state_39704__$1;(statearr_39781_39841[(1)] = (10));
} else
{var statearr_39782_39842 = state_39704__$1;(statearr_39782_39842[(1)] = (11));
}
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___39790,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___39790,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_39786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39786[(0)] = state_machine__5679__auto__);
(statearr_39786[(1)] = (1));
return statearr_39786;
});
var state_machine__5679__auto____1 = (function (state_39704){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_39704);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e39787){if((e39787 instanceof Object))
{var ex__5682__auto__ = e39787;var statearr_39788_39843 = state_39704;(statearr_39788_39843[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39704);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e39787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__39844 = state_39704;
state_39704 = G__39844;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_39704){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_39704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___39790,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_39789 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_39789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___39790);
return statearr_39789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___39790,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj39846 = {};return obj39846;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$772,null,cljs.core.constant$keyword$773,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$774);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$773);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$774,chs);var pauses = pick(cljs.core.constant$keyword$772,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$775,solos,cljs.core.constant$keyword$776,pick(cljs.core.constant$keyword$773,chs),cljs.core.constant$keyword$777,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$772)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t39956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39956 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39957){
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
this.meta39957 = meta39957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39956.cljs$lang$type = true;
cljs.core.async.t39956.cljs$lang$ctorStr = "cljs.core.async/t39956";
cljs.core.async.t39956.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t39956");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39956.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39958){var self__ = this;
var _39958__$1 = this;return self__.meta39957;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39958,meta39957__$1){var self__ = this;
var _39958__$1 = this;return (new cljs.core.async.t39956(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39957__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t39956 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39956(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39957){return (new cljs.core.async.t39956(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39957));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t39956(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___40065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40023){var state_val_40024 = (state_40023[(1)]);if((state_val_40024 === (7)))
{var inst_39972 = (state_40023[(7)]);var inst_39977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39972);var state_40023__$1 = state_40023;var statearr_40025_40066 = state_40023__$1;(statearr_40025_40066[(2)] = inst_39977);
(statearr_40025_40066[(1)] = (9));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (20)))
{var inst_39987 = (state_40023[(8)]);var state_40023__$1 = state_40023;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40023__$1,(23),out,inst_39987);
} else
{if((state_val_40024 === (1)))
{var inst_39962 = (state_40023[(9)]);var inst_39962__$1 = calc_state();var inst_39963 = cljs.core.seq_QMARK_(inst_39962__$1);var state_40023__$1 = (function (){var statearr_40026 = state_40023;(statearr_40026[(9)] = inst_39962__$1);
return statearr_40026;
})();if(inst_39963)
{var statearr_40027_40067 = state_40023__$1;(statearr_40027_40067[(1)] = (2));
} else
{var statearr_40028_40068 = state_40023__$1;(statearr_40028_40068[(1)] = (3));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (4)))
{var inst_39962 = (state_40023[(9)]);var inst_39968 = (state_40023[(2)]);var inst_39969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39968,cljs.core.constant$keyword$777);var inst_39970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39968,cljs.core.constant$keyword$776);var inst_39971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39968,cljs.core.constant$keyword$775);var inst_39972 = inst_39962;var state_40023__$1 = (function (){var statearr_40029 = state_40023;(statearr_40029[(10)] = inst_39971);
(statearr_40029[(7)] = inst_39972);
(statearr_40029[(11)] = inst_39970);
(statearr_40029[(12)] = inst_39969);
return statearr_40029;
})();var statearr_40030_40069 = state_40023__$1;(statearr_40030_40069[(2)] = null);
(statearr_40030_40069[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (15)))
{var state_40023__$1 = state_40023;var statearr_40031_40070 = state_40023__$1;(statearr_40031_40070[(2)] = null);
(statearr_40031_40070[(1)] = (16));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (21)))
{var state_40023__$1 = state_40023;var statearr_40032_40071 = state_40023__$1;(statearr_40032_40071[(2)] = null);
(statearr_40032_40071[(1)] = (22));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (13)))
{var inst_40019 = (state_40023[(2)]);var state_40023__$1 = state_40023;var statearr_40033_40072 = state_40023__$1;(statearr_40033_40072[(2)] = inst_40019);
(statearr_40033_40072[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (22)))
{var inst_39980 = (state_40023[(13)]);var inst_40016 = (state_40023[(2)]);var inst_39972 = inst_39980;var state_40023__$1 = (function (){var statearr_40034 = state_40023;(statearr_40034[(7)] = inst_39972);
(statearr_40034[(14)] = inst_40016);
return statearr_40034;
})();var statearr_40035_40073 = state_40023__$1;(statearr_40035_40073[(2)] = null);
(statearr_40035_40073[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (6)))
{var inst_40021 = (state_40023[(2)]);var state_40023__$1 = state_40023;return cljs.core.async.impl.ioc_helpers.return_chan(state_40023__$1,inst_40021);
} else
{if((state_val_40024 === (17)))
{var inst_40002 = (state_40023[(15)]);var state_40023__$1 = state_40023;var statearr_40036_40074 = state_40023__$1;(statearr_40036_40074[(2)] = inst_40002);
(statearr_40036_40074[(1)] = (19));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (3)))
{var inst_39962 = (state_40023[(9)]);var state_40023__$1 = state_40023;var statearr_40037_40075 = state_40023__$1;(statearr_40037_40075[(2)] = inst_39962);
(statearr_40037_40075[(1)] = (4));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (12)))
{var inst_39988 = (state_40023[(16)]);var inst_39983 = (state_40023[(17)]);var inst_40002 = (state_40023[(15)]);var inst_40002__$1 = (inst_39983.cljs$core$IFn$_invoke$arity$1 ? inst_39983.cljs$core$IFn$_invoke$arity$1(inst_39988) : inst_39983.call(null,inst_39988));var state_40023__$1 = (function (){var statearr_40038 = state_40023;(statearr_40038[(15)] = inst_40002__$1);
return statearr_40038;
})();if(cljs.core.truth_(inst_40002__$1))
{var statearr_40039_40076 = state_40023__$1;(statearr_40039_40076[(1)] = (17));
} else
{var statearr_40040_40077 = state_40023__$1;(statearr_40040_40077[(1)] = (18));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (2)))
{var inst_39962 = (state_40023[(9)]);var inst_39965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39962);var state_40023__$1 = state_40023;var statearr_40041_40078 = state_40023__$1;(statearr_40041_40078[(2)] = inst_39965);
(statearr_40041_40078[(1)] = (4));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (23)))
{var inst_40013 = (state_40023[(2)]);var state_40023__$1 = state_40023;var statearr_40042_40079 = state_40023__$1;(statearr_40042_40079[(2)] = inst_40013);
(statearr_40042_40079[(1)] = (22));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (19)))
{var inst_40010 = (state_40023[(2)]);var state_40023__$1 = state_40023;if(cljs.core.truth_(inst_40010))
{var statearr_40043_40080 = state_40023__$1;(statearr_40043_40080[(1)] = (20));
} else
{var statearr_40044_40081 = state_40023__$1;(statearr_40044_40081[(1)] = (21));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (11)))
{var inst_39987 = (state_40023[(8)]);var inst_39993 = (inst_39987 == null);var state_40023__$1 = state_40023;if(cljs.core.truth_(inst_39993))
{var statearr_40045_40082 = state_40023__$1;(statearr_40045_40082[(1)] = (14));
} else
{var statearr_40046_40083 = state_40023__$1;(statearr_40046_40083[(1)] = (15));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (9)))
{var inst_39980 = (state_40023[(13)]);var inst_39980__$1 = (state_40023[(2)]);var inst_39981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39980__$1,cljs.core.constant$keyword$777);var inst_39982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39980__$1,cljs.core.constant$keyword$776);var inst_39983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39980__$1,cljs.core.constant$keyword$775);var state_40023__$1 = (function (){var statearr_40047 = state_40023;(statearr_40047[(17)] = inst_39983);
(statearr_40047[(13)] = inst_39980__$1);
(statearr_40047[(18)] = inst_39982);
return statearr_40047;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40023__$1,(10),inst_39981);
} else
{if((state_val_40024 === (5)))
{var inst_39972 = (state_40023[(7)]);var inst_39975 = cljs.core.seq_QMARK_(inst_39972);var state_40023__$1 = state_40023;if(inst_39975)
{var statearr_40048_40084 = state_40023__$1;(statearr_40048_40084[(1)] = (7));
} else
{var statearr_40049_40085 = state_40023__$1;(statearr_40049_40085[(1)] = (8));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (14)))
{var inst_39988 = (state_40023[(16)]);var inst_39995 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39988);var state_40023__$1 = state_40023;var statearr_40050_40086 = state_40023__$1;(statearr_40050_40086[(2)] = inst_39995);
(statearr_40050_40086[(1)] = (16));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (16)))
{var inst_39998 = (state_40023[(2)]);var inst_39999 = calc_state();var inst_39972 = inst_39999;var state_40023__$1 = (function (){var statearr_40051 = state_40023;(statearr_40051[(7)] = inst_39972);
(statearr_40051[(19)] = inst_39998);
return statearr_40051;
})();var statearr_40052_40087 = state_40023__$1;(statearr_40052_40087[(2)] = null);
(statearr_40052_40087[(1)] = (5));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (10)))
{var inst_39988 = (state_40023[(16)]);var inst_39987 = (state_40023[(8)]);var inst_39986 = (state_40023[(2)]);var inst_39987__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39986,(0),null);var inst_39988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39986,(1),null);var inst_39989 = (inst_39987__$1 == null);var inst_39990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39988__$1,change);var inst_39991 = (inst_39989) || (inst_39990);var state_40023__$1 = (function (){var statearr_40053 = state_40023;(statearr_40053[(16)] = inst_39988__$1);
(statearr_40053[(8)] = inst_39987__$1);
return statearr_40053;
})();if(cljs.core.truth_(inst_39991))
{var statearr_40054_40088 = state_40023__$1;(statearr_40054_40088[(1)] = (11));
} else
{var statearr_40055_40089 = state_40023__$1;(statearr_40055_40089[(1)] = (12));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (18)))
{var inst_39988 = (state_40023[(16)]);var inst_39983 = (state_40023[(17)]);var inst_39982 = (state_40023[(18)]);var inst_40005 = cljs.core.empty_QMARK_(inst_39983);var inst_40006 = (inst_39982.cljs$core$IFn$_invoke$arity$1 ? inst_39982.cljs$core$IFn$_invoke$arity$1(inst_39988) : inst_39982.call(null,inst_39988));var inst_40007 = cljs.core.not(inst_40006);var inst_40008 = (inst_40005) && (inst_40007);var state_40023__$1 = state_40023;var statearr_40056_40090 = state_40023__$1;(statearr_40056_40090[(2)] = inst_40008);
(statearr_40056_40090[(1)] = (19));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40024 === (8)))
{var inst_39972 = (state_40023[(7)]);var state_40023__$1 = state_40023;var statearr_40057_40091 = state_40023__$1;(statearr_40057_40091[(2)] = inst_39972);
(statearr_40057_40091[(1)] = (9));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40061[(0)] = state_machine__5679__auto__);
(statearr_40061[(1)] = (1));
return statearr_40061;
});
var state_machine__5679__auto____1 = (function (state_40023){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40023);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40062){if((e40062 instanceof Object))
{var ex__5682__auto__ = e40062;var statearr_40063_40092 = state_40023;(statearr_40063_40092[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40023);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40093 = state_40023;
state_40023 = G__40093;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40023){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_40064 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40065);
return statearr_40064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40065,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj40095 = {};return obj40095;
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
return (function (p1__40096_SHARP_){if(cljs.core.truth_((p1__40096_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40096_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40096_SHARP_.call(null,topic))))
{return p1__40096_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40096_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t40221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t40221 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta40222){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta40222 = meta40222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40221.cljs$lang$type = true;
cljs.core.async.t40221.cljs$lang$ctorStr = "cljs.core.async/t40221";
cljs.core.async.t40221.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"cljs.core.async/t40221");
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t40221.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t40221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40223){var self__ = this;
var _40223__$1 = this;return self__.meta40222;
});})(mults,ensure_mult))
;
cljs.core.async.t40221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40223,meta40222__$1){var self__ = this;
var _40223__$1 = this;return (new cljs.core.async.t40221(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta40222__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t40221 = ((function (mults,ensure_mult){
return (function __GT_t40221(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40222){return (new cljs.core.async.t40221(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta40222));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t40221(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___40345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40345,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40345,mults,ensure_mult,p){
return (function (state_40297){var state_val_40298 = (state_40297[(1)]);if((state_val_40298 === (7)))
{var inst_40293 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40299_40346 = state_40297__$1;(statearr_40299_40346[(2)] = inst_40293);
(statearr_40299_40346[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (20)))
{var state_40297__$1 = state_40297;var statearr_40300_40347 = state_40297__$1;(statearr_40300_40347[(2)] = null);
(statearr_40300_40347[(1)] = (21));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (1)))
{var state_40297__$1 = state_40297;var statearr_40301_40348 = state_40297__$1;(statearr_40301_40348[(2)] = null);
(statearr_40301_40348[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (24)))
{var inst_40276 = (state_40297[(7)]);var inst_40226 = (state_40297[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40297,(23),Object,null,(22));var inst_40283 = cljs.core.async.muxch_STAR_(inst_40276);var state_40297__$1 = state_40297;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40297__$1,(25),inst_40283,inst_40226);
} else
{if((state_val_40298 === (4)))
{var inst_40226 = (state_40297[(8)]);var inst_40226__$1 = (state_40297[(2)]);var inst_40227 = (inst_40226__$1 == null);var state_40297__$1 = (function (){var statearr_40302 = state_40297;(statearr_40302[(8)] = inst_40226__$1);
return statearr_40302;
})();if(cljs.core.truth_(inst_40227))
{var statearr_40303_40349 = state_40297__$1;(statearr_40303_40349[(1)] = (5));
} else
{var statearr_40304_40350 = state_40297__$1;(statearr_40304_40350[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (15)))
{var inst_40268 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40305_40351 = state_40297__$1;(statearr_40305_40351[(2)] = inst_40268);
(statearr_40305_40351[(1)] = (12));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (21)))
{var inst_40290 = (state_40297[(2)]);var state_40297__$1 = (function (){var statearr_40306 = state_40297;(statearr_40306[(9)] = inst_40290);
return statearr_40306;
})();var statearr_40307_40352 = state_40297__$1;(statearr_40307_40352[(2)] = null);
(statearr_40307_40352[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (13)))
{var inst_40250 = (state_40297[(10)]);var inst_40252 = cljs.core.chunked_seq_QMARK_(inst_40250);var state_40297__$1 = state_40297;if(inst_40252)
{var statearr_40308_40353 = state_40297__$1;(statearr_40308_40353[(1)] = (16));
} else
{var statearr_40309_40354 = state_40297__$1;(statearr_40309_40354[(1)] = (17));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (22)))
{var inst_40287 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40310_40355 = state_40297__$1;(statearr_40310_40355[(2)] = inst_40287);
(statearr_40310_40355[(1)] = (21));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (6)))
{var inst_40274 = (state_40297[(11)]);var inst_40276 = (state_40297[(7)]);var inst_40226 = (state_40297[(8)]);var inst_40274__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40226) : topic_fn.call(null,inst_40226));var inst_40275 = cljs.core.deref(mults);var inst_40276__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40275,inst_40274__$1);var state_40297__$1 = (function (){var statearr_40311 = state_40297;(statearr_40311[(11)] = inst_40274__$1);
(statearr_40311[(7)] = inst_40276__$1);
return statearr_40311;
})();if(cljs.core.truth_(inst_40276__$1))
{var statearr_40312_40356 = state_40297__$1;(statearr_40312_40356[(1)] = (19));
} else
{var statearr_40313_40357 = state_40297__$1;(statearr_40313_40357[(1)] = (20));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (25)))
{var inst_40285 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40314_40358 = state_40297__$1;(statearr_40314_40358[(2)] = inst_40285);
cljs.core.async.impl.ioc_helpers.process_exception(state_40297__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (17)))
{var inst_40250 = (state_40297[(10)]);var inst_40259 = cljs.core.first(inst_40250);var inst_40260 = cljs.core.async.muxch_STAR_(inst_40259);var inst_40261 = cljs.core.async.close_BANG_(inst_40260);var inst_40262 = cljs.core.next(inst_40250);var inst_40236 = inst_40262;var inst_40237 = null;var inst_40238 = (0);var inst_40239 = (0);var state_40297__$1 = (function (){var statearr_40315 = state_40297;(statearr_40315[(12)] = inst_40236);
(statearr_40315[(13)] = inst_40239);
(statearr_40315[(14)] = inst_40261);
(statearr_40315[(15)] = inst_40238);
(statearr_40315[(16)] = inst_40237);
return statearr_40315;
})();var statearr_40316_40359 = state_40297__$1;(statearr_40316_40359[(2)] = null);
(statearr_40316_40359[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (3)))
{var inst_40295 = (state_40297[(2)]);var state_40297__$1 = state_40297;return cljs.core.async.impl.ioc_helpers.return_chan(state_40297__$1,inst_40295);
} else
{if((state_val_40298 === (12)))
{var inst_40270 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40317_40360 = state_40297__$1;(statearr_40317_40360[(2)] = inst_40270);
(statearr_40317_40360[(1)] = (9));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (2)))
{var state_40297__$1 = state_40297;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40297__$1,(4),ch);
} else
{if((state_val_40298 === (23)))
{var inst_40274 = (state_40297[(11)]);var inst_40278 = (state_40297[(2)]);var inst_40279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40274);var state_40297__$1 = (function (){var statearr_40318 = state_40297;(statearr_40318[(17)] = inst_40278);
return statearr_40318;
})();var statearr_40319_40361 = state_40297__$1;(statearr_40319_40361[(2)] = inst_40279);
cljs.core.async.impl.ioc_helpers.process_exception(state_40297__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (19)))
{var state_40297__$1 = state_40297;var statearr_40320_40362 = state_40297__$1;(statearr_40320_40362[(2)] = null);
(statearr_40320_40362[(1)] = (24));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (11)))
{var inst_40250 = (state_40297[(10)]);var inst_40236 = (state_40297[(12)]);var inst_40250__$1 = cljs.core.seq(inst_40236);var state_40297__$1 = (function (){var statearr_40321 = state_40297;(statearr_40321[(10)] = inst_40250__$1);
return statearr_40321;
})();if(inst_40250__$1)
{var statearr_40322_40363 = state_40297__$1;(statearr_40322_40363[(1)] = (13));
} else
{var statearr_40323_40364 = state_40297__$1;(statearr_40323_40364[(1)] = (14));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (9)))
{var inst_40272 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40324_40365 = state_40297__$1;(statearr_40324_40365[(2)] = inst_40272);
(statearr_40324_40365[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (5)))
{var inst_40233 = cljs.core.deref(mults);var inst_40234 = cljs.core.vals(inst_40233);var inst_40235 = cljs.core.seq(inst_40234);var inst_40236 = inst_40235;var inst_40237 = null;var inst_40238 = (0);var inst_40239 = (0);var state_40297__$1 = (function (){var statearr_40325 = state_40297;(statearr_40325[(12)] = inst_40236);
(statearr_40325[(13)] = inst_40239);
(statearr_40325[(15)] = inst_40238);
(statearr_40325[(16)] = inst_40237);
return statearr_40325;
})();var statearr_40326_40366 = state_40297__$1;(statearr_40326_40366[(2)] = null);
(statearr_40326_40366[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (14)))
{var state_40297__$1 = state_40297;var statearr_40330_40367 = state_40297__$1;(statearr_40330_40367[(2)] = null);
(statearr_40330_40367[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (16)))
{var inst_40250 = (state_40297[(10)]);var inst_40254 = cljs.core.chunk_first(inst_40250);var inst_40255 = cljs.core.chunk_rest(inst_40250);var inst_40256 = cljs.core.count(inst_40254);var inst_40236 = inst_40255;var inst_40237 = inst_40254;var inst_40238 = inst_40256;var inst_40239 = (0);var state_40297__$1 = (function (){var statearr_40331 = state_40297;(statearr_40331[(12)] = inst_40236);
(statearr_40331[(13)] = inst_40239);
(statearr_40331[(15)] = inst_40238);
(statearr_40331[(16)] = inst_40237);
return statearr_40331;
})();var statearr_40332_40368 = state_40297__$1;(statearr_40332_40368[(2)] = null);
(statearr_40332_40368[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (10)))
{var inst_40236 = (state_40297[(12)]);var inst_40239 = (state_40297[(13)]);var inst_40238 = (state_40297[(15)]);var inst_40237 = (state_40297[(16)]);var inst_40244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40237,inst_40239);var inst_40245 = cljs.core.async.muxch_STAR_(inst_40244);var inst_40246 = cljs.core.async.close_BANG_(inst_40245);var inst_40247 = (inst_40239 + (1));var tmp40327 = inst_40236;var tmp40328 = inst_40238;var tmp40329 = inst_40237;var inst_40236__$1 = tmp40327;var inst_40237__$1 = tmp40329;var inst_40238__$1 = tmp40328;var inst_40239__$1 = inst_40247;var state_40297__$1 = (function (){var statearr_40333 = state_40297;(statearr_40333[(12)] = inst_40236__$1);
(statearr_40333[(13)] = inst_40239__$1);
(statearr_40333[(15)] = inst_40238__$1);
(statearr_40333[(18)] = inst_40246);
(statearr_40333[(16)] = inst_40237__$1);
return statearr_40333;
})();var statearr_40334_40369 = state_40297__$1;(statearr_40334_40369[(2)] = null);
(statearr_40334_40369[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (18)))
{var inst_40265 = (state_40297[(2)]);var state_40297__$1 = state_40297;var statearr_40335_40370 = state_40297__$1;(statearr_40335_40370[(2)] = inst_40265);
(statearr_40335_40370[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40298 === (8)))
{var inst_40239 = (state_40297[(13)]);var inst_40238 = (state_40297[(15)]);var inst_40241 = (inst_40239 < inst_40238);var inst_40242 = inst_40241;var state_40297__$1 = state_40297;if(cljs.core.truth_(inst_40242))
{var statearr_40336_40371 = state_40297__$1;(statearr_40336_40371[(1)] = (10));
} else
{var statearr_40337_40372 = state_40297__$1;(statearr_40337_40372[(1)] = (11));
}
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40345,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___40345,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40341[(0)] = state_machine__5679__auto__);
(statearr_40341[(1)] = (1));
return statearr_40341;
});
var state_machine__5679__auto____1 = (function (state_40297){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40297);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40342){if((e40342 instanceof Object))
{var ex__5682__auto__ = e40342;var statearr_40343_40373 = state_40297;(statearr_40343_40373[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40297);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40374 = state_40297;
state_40297 = G__40374;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40297){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40345,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_40344 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40345);
return statearr_40344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40345,mults,ensure_mult,p))
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5693__auto___40511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40481){var state_val_40482 = (state_40481[(1)]);if((state_val_40482 === (7)))
{var state_40481__$1 = state_40481;var statearr_40483_40512 = state_40481__$1;(statearr_40483_40512[(2)] = null);
(statearr_40483_40512[(1)] = (8));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (1)))
{var state_40481__$1 = state_40481;var statearr_40484_40513 = state_40481__$1;(statearr_40484_40513[(2)] = null);
(statearr_40484_40513[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (4)))
{var inst_40445 = (state_40481[(7)]);var inst_40447 = (inst_40445 < cnt);var state_40481__$1 = state_40481;if(cljs.core.truth_(inst_40447))
{var statearr_40485_40514 = state_40481__$1;(statearr_40485_40514[(1)] = (6));
} else
{var statearr_40486_40515 = state_40481__$1;(statearr_40486_40515[(1)] = (7));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (15)))
{var inst_40477 = (state_40481[(2)]);var state_40481__$1 = state_40481;var statearr_40487_40516 = state_40481__$1;(statearr_40487_40516[(2)] = inst_40477);
(statearr_40487_40516[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (13)))
{var inst_40470 = cljs.core.async.close_BANG_(out);var state_40481__$1 = state_40481;var statearr_40488_40517 = state_40481__$1;(statearr_40488_40517[(2)] = inst_40470);
(statearr_40488_40517[(1)] = (15));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (6)))
{var state_40481__$1 = state_40481;var statearr_40489_40518 = state_40481__$1;(statearr_40489_40518[(2)] = null);
(statearr_40489_40518[(1)] = (11));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (3)))
{var inst_40479 = (state_40481[(2)]);var state_40481__$1 = state_40481;return cljs.core.async.impl.ioc_helpers.return_chan(state_40481__$1,inst_40479);
} else
{if((state_val_40482 === (12)))
{var inst_40467 = (state_40481[(8)]);var inst_40467__$1 = (state_40481[(2)]);var inst_40468 = cljs.core.some(cljs.core.nil_QMARK_,inst_40467__$1);var state_40481__$1 = (function (){var statearr_40490 = state_40481;(statearr_40490[(8)] = inst_40467__$1);
return statearr_40490;
})();if(cljs.core.truth_(inst_40468))
{var statearr_40491_40519 = state_40481__$1;(statearr_40491_40519[(1)] = (13));
} else
{var statearr_40492_40520 = state_40481__$1;(statearr_40492_40520[(1)] = (14));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (2)))
{var inst_40444 = cljs.core.reset_BANG_(dctr,cnt);var inst_40445 = (0);var state_40481__$1 = (function (){var statearr_40493 = state_40481;(statearr_40493[(7)] = inst_40445);
(statearr_40493[(9)] = inst_40444);
return statearr_40493;
})();var statearr_40494_40521 = state_40481__$1;(statearr_40494_40521[(2)] = null);
(statearr_40494_40521[(1)] = (4));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (11)))
{var inst_40445 = (state_40481[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_40481,(10),Object,null,(9));var inst_40454 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40445) : chs__$1.call(null,inst_40445));var inst_40455 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40445) : done.call(null,inst_40445));var inst_40456 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40454,inst_40455);var state_40481__$1 = state_40481;var statearr_40495_40522 = state_40481__$1;(statearr_40495_40522[(2)] = inst_40456);
cljs.core.async.impl.ioc_helpers.process_exception(state_40481__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (9)))
{var inst_40445 = (state_40481[(7)]);var inst_40458 = (state_40481[(2)]);var inst_40459 = (inst_40445 + (1));var inst_40445__$1 = inst_40459;var state_40481__$1 = (function (){var statearr_40496 = state_40481;(statearr_40496[(10)] = inst_40458);
(statearr_40496[(7)] = inst_40445__$1);
return statearr_40496;
})();var statearr_40497_40523 = state_40481__$1;(statearr_40497_40523[(2)] = null);
(statearr_40497_40523[(1)] = (4));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (5)))
{var inst_40465 = (state_40481[(2)]);var state_40481__$1 = (function (){var statearr_40498 = state_40481;(statearr_40498[(11)] = inst_40465);
return statearr_40498;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40481__$1,(12),dchan);
} else
{if((state_val_40482 === (14)))
{var inst_40467 = (state_40481[(8)]);var inst_40472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40467);var state_40481__$1 = state_40481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40481__$1,(16),out,inst_40472);
} else
{if((state_val_40482 === (16)))
{var inst_40474 = (state_40481[(2)]);var state_40481__$1 = (function (){var statearr_40499 = state_40481;(statearr_40499[(12)] = inst_40474);
return statearr_40499;
})();var statearr_40500_40524 = state_40481__$1;(statearr_40500_40524[(2)] = null);
(statearr_40500_40524[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (10)))
{var inst_40449 = (state_40481[(2)]);var inst_40450 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_40481__$1 = (function (){var statearr_40501 = state_40481;(statearr_40501[(13)] = inst_40449);
return statearr_40501;
})();var statearr_40502_40525 = state_40481__$1;(statearr_40502_40525[(2)] = inst_40450);
cljs.core.async.impl.ioc_helpers.process_exception(state_40481__$1);
return cljs.core.constant$keyword$765;
} else
{if((state_val_40482 === (8)))
{var inst_40463 = (state_40481[(2)]);var state_40481__$1 = state_40481;var statearr_40503_40526 = state_40481__$1;(statearr_40503_40526[(2)] = inst_40463);
(statearr_40503_40526[(1)] = (5));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40507[(0)] = state_machine__5679__auto__);
(statearr_40507[(1)] = (1));
return statearr_40507;
});
var state_machine__5679__auto____1 = (function (state_40481){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40481);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40508){if((e40508 instanceof Object))
{var ex__5682__auto__ = e40508;var statearr_40509_40527 = state_40481;(statearr_40509_40527[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40481);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40528 = state_40481;
state_40481 = G__40528;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40481){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_40510 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40511);
return statearr_40510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40511,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40636,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40636,out){
return (function (state_40612){var state_val_40613 = (state_40612[(1)]);if((state_val_40613 === (7)))
{var inst_40591 = (state_40612[(7)]);var inst_40592 = (state_40612[(8)]);var inst_40591__$1 = (state_40612[(2)]);var inst_40592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40591__$1,(0),null);var inst_40593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40591__$1,(1),null);var inst_40594 = (inst_40592__$1 == null);var state_40612__$1 = (function (){var statearr_40614 = state_40612;(statearr_40614[(7)] = inst_40591__$1);
(statearr_40614[(8)] = inst_40592__$1);
(statearr_40614[(9)] = inst_40593);
return statearr_40614;
})();if(cljs.core.truth_(inst_40594))
{var statearr_40615_40637 = state_40612__$1;(statearr_40615_40637[(1)] = (8));
} else
{var statearr_40616_40638 = state_40612__$1;(statearr_40616_40638[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (1)))
{var inst_40583 = cljs.core.vec(chs);var inst_40584 = inst_40583;var state_40612__$1 = (function (){var statearr_40617 = state_40612;(statearr_40617[(10)] = inst_40584);
return statearr_40617;
})();var statearr_40618_40639 = state_40612__$1;(statearr_40618_40639[(2)] = null);
(statearr_40618_40639[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (4)))
{var inst_40584 = (state_40612[(10)]);var state_40612__$1 = state_40612;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_40612__$1,(7),inst_40584);
} else
{if((state_val_40613 === (6)))
{var inst_40608 = (state_40612[(2)]);var state_40612__$1 = state_40612;var statearr_40619_40640 = state_40612__$1;(statearr_40619_40640[(2)] = inst_40608);
(statearr_40619_40640[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (3)))
{var inst_40610 = (state_40612[(2)]);var state_40612__$1 = state_40612;return cljs.core.async.impl.ioc_helpers.return_chan(state_40612__$1,inst_40610);
} else
{if((state_val_40613 === (2)))
{var inst_40584 = (state_40612[(10)]);var inst_40586 = cljs.core.count(inst_40584);var inst_40587 = (inst_40586 > (0));var state_40612__$1 = state_40612;if(cljs.core.truth_(inst_40587))
{var statearr_40621_40641 = state_40612__$1;(statearr_40621_40641[(1)] = (4));
} else
{var statearr_40622_40642 = state_40612__$1;(statearr_40622_40642[(1)] = (5));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (11)))
{var inst_40584 = (state_40612[(10)]);var inst_40601 = (state_40612[(2)]);var tmp40620 = inst_40584;var inst_40584__$1 = tmp40620;var state_40612__$1 = (function (){var statearr_40623 = state_40612;(statearr_40623[(11)] = inst_40601);
(statearr_40623[(10)] = inst_40584__$1);
return statearr_40623;
})();var statearr_40624_40643 = state_40612__$1;(statearr_40624_40643[(2)] = null);
(statearr_40624_40643[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (9)))
{var inst_40592 = (state_40612[(8)]);var state_40612__$1 = state_40612;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40612__$1,(11),out,inst_40592);
} else
{if((state_val_40613 === (5)))
{var inst_40606 = cljs.core.async.close_BANG_(out);var state_40612__$1 = state_40612;var statearr_40625_40644 = state_40612__$1;(statearr_40625_40644[(2)] = inst_40606);
(statearr_40625_40644[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (10)))
{var inst_40604 = (state_40612[(2)]);var state_40612__$1 = state_40612;var statearr_40626_40645 = state_40612__$1;(statearr_40626_40645[(2)] = inst_40604);
(statearr_40626_40645[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40613 === (8)))
{var inst_40591 = (state_40612[(7)]);var inst_40592 = (state_40612[(8)]);var inst_40584 = (state_40612[(10)]);var inst_40593 = (state_40612[(9)]);var inst_40596 = (function (){var c = inst_40593;var v = inst_40592;var vec__40589 = inst_40591;var cs = inst_40584;return ((function (c,v,vec__40589,cs,inst_40591,inst_40592,inst_40584,inst_40593,state_val_40613,c__5693__auto___40636,out){
return (function (p1__40529_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40529_SHARP_);
});
;})(c,v,vec__40589,cs,inst_40591,inst_40592,inst_40584,inst_40593,state_val_40613,c__5693__auto___40636,out))
})();var inst_40597 = cljs.core.filterv(inst_40596,inst_40584);var inst_40584__$1 = inst_40597;var state_40612__$1 = (function (){var statearr_40627 = state_40612;(statearr_40627[(10)] = inst_40584__$1);
return statearr_40627;
})();var statearr_40628_40646 = state_40612__$1;(statearr_40628_40646[(2)] = null);
(statearr_40628_40646[(1)] = (2));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40636,out))
;return ((function (switch__5678__auto__,c__5693__auto___40636,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40632 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40632[(0)] = state_machine__5679__auto__);
(statearr_40632[(1)] = (1));
return statearr_40632;
});
var state_machine__5679__auto____1 = (function (state_40612){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40612);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40633){if((e40633 instanceof Object))
{var ex__5682__auto__ = e40633;var statearr_40634_40647 = state_40612;(statearr_40634_40647[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40612);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40648 = state_40612;
state_40612 = G__40648;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40612){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40636,out))
})();var state__5695__auto__ = (function (){var statearr_40635 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40636);
return statearr_40635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40636,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40741,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40741,out){
return (function (state_40718){var state_val_40719 = (state_40718[(1)]);if((state_val_40719 === (7)))
{var inst_40700 = (state_40718[(7)]);var inst_40700__$1 = (state_40718[(2)]);var inst_40701 = (inst_40700__$1 == null);var inst_40702 = cljs.core.not(inst_40701);var state_40718__$1 = (function (){var statearr_40720 = state_40718;(statearr_40720[(7)] = inst_40700__$1);
return statearr_40720;
})();if(inst_40702)
{var statearr_40721_40742 = state_40718__$1;(statearr_40721_40742[(1)] = (8));
} else
{var statearr_40722_40743 = state_40718__$1;(statearr_40722_40743[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (1)))
{var inst_40695 = (0);var state_40718__$1 = (function (){var statearr_40723 = state_40718;(statearr_40723[(8)] = inst_40695);
return statearr_40723;
})();var statearr_40724_40744 = state_40718__$1;(statearr_40724_40744[(2)] = null);
(statearr_40724_40744[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (4)))
{var state_40718__$1 = state_40718;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40718__$1,(7),ch);
} else
{if((state_val_40719 === (6)))
{var inst_40713 = (state_40718[(2)]);var state_40718__$1 = state_40718;var statearr_40725_40745 = state_40718__$1;(statearr_40725_40745[(2)] = inst_40713);
(statearr_40725_40745[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (3)))
{var inst_40715 = (state_40718[(2)]);var inst_40716 = cljs.core.async.close_BANG_(out);var state_40718__$1 = (function (){var statearr_40726 = state_40718;(statearr_40726[(9)] = inst_40715);
return statearr_40726;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_40718__$1,inst_40716);
} else
{if((state_val_40719 === (2)))
{var inst_40695 = (state_40718[(8)]);var inst_40697 = (inst_40695 < n);var state_40718__$1 = state_40718;if(cljs.core.truth_(inst_40697))
{var statearr_40727_40746 = state_40718__$1;(statearr_40727_40746[(1)] = (4));
} else
{var statearr_40728_40747 = state_40718__$1;(statearr_40728_40747[(1)] = (5));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (11)))
{var inst_40695 = (state_40718[(8)]);var inst_40705 = (state_40718[(2)]);var inst_40706 = (inst_40695 + (1));var inst_40695__$1 = inst_40706;var state_40718__$1 = (function (){var statearr_40729 = state_40718;(statearr_40729[(8)] = inst_40695__$1);
(statearr_40729[(10)] = inst_40705);
return statearr_40729;
})();var statearr_40730_40748 = state_40718__$1;(statearr_40730_40748[(2)] = null);
(statearr_40730_40748[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (9)))
{var state_40718__$1 = state_40718;var statearr_40731_40749 = state_40718__$1;(statearr_40731_40749[(2)] = null);
(statearr_40731_40749[(1)] = (10));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (5)))
{var state_40718__$1 = state_40718;var statearr_40732_40750 = state_40718__$1;(statearr_40732_40750[(2)] = null);
(statearr_40732_40750[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (10)))
{var inst_40710 = (state_40718[(2)]);var state_40718__$1 = state_40718;var statearr_40733_40751 = state_40718__$1;(statearr_40733_40751[(2)] = inst_40710);
(statearr_40733_40751[(1)] = (6));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40719 === (8)))
{var inst_40700 = (state_40718[(7)]);var state_40718__$1 = state_40718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40718__$1,(11),out,inst_40700);
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
});})(c__5693__auto___40741,out))
;return ((function (switch__5678__auto__,c__5693__auto___40741,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40737 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40737[(0)] = state_machine__5679__auto__);
(statearr_40737[(1)] = (1));
return statearr_40737;
});
var state_machine__5679__auto____1 = (function (state_40718){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40718);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40738){if((e40738 instanceof Object))
{var ex__5682__auto__ = e40738;var statearr_40739_40752 = state_40718;(statearr_40739_40752[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40718);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40753 = state_40718;
state_40718 = G__40753;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40718){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40741,out))
})();var state__5695__auto__ = (function (){var statearr_40740 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40741);
return statearr_40740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40741,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40850,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40850,out){
return (function (state_40825){var state_val_40826 = (state_40825[(1)]);if((state_val_40826 === (7)))
{var inst_40820 = (state_40825[(2)]);var state_40825__$1 = state_40825;var statearr_40827_40851 = state_40825__$1;(statearr_40827_40851[(2)] = inst_40820);
(statearr_40827_40851[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (1)))
{var inst_40802 = null;var state_40825__$1 = (function (){var statearr_40828 = state_40825;(statearr_40828[(7)] = inst_40802);
return statearr_40828;
})();var statearr_40829_40852 = state_40825__$1;(statearr_40829_40852[(2)] = null);
(statearr_40829_40852[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (4)))
{var inst_40805 = (state_40825[(8)]);var inst_40805__$1 = (state_40825[(2)]);var inst_40806 = (inst_40805__$1 == null);var inst_40807 = cljs.core.not(inst_40806);var state_40825__$1 = (function (){var statearr_40830 = state_40825;(statearr_40830[(8)] = inst_40805__$1);
return statearr_40830;
})();if(inst_40807)
{var statearr_40831_40853 = state_40825__$1;(statearr_40831_40853[(1)] = (5));
} else
{var statearr_40832_40854 = state_40825__$1;(statearr_40832_40854[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (6)))
{var state_40825__$1 = state_40825;var statearr_40833_40855 = state_40825__$1;(statearr_40833_40855[(2)] = null);
(statearr_40833_40855[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (3)))
{var inst_40822 = (state_40825[(2)]);var inst_40823 = cljs.core.async.close_BANG_(out);var state_40825__$1 = (function (){var statearr_40834 = state_40825;(statearr_40834[(9)] = inst_40822);
return statearr_40834;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_40825__$1,inst_40823);
} else
{if((state_val_40826 === (2)))
{var state_40825__$1 = state_40825;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40825__$1,(4),ch);
} else
{if((state_val_40826 === (11)))
{var inst_40805 = (state_40825[(8)]);var inst_40814 = (state_40825[(2)]);var inst_40802 = inst_40805;var state_40825__$1 = (function (){var statearr_40835 = state_40825;(statearr_40835[(10)] = inst_40814);
(statearr_40835[(7)] = inst_40802);
return statearr_40835;
})();var statearr_40836_40856 = state_40825__$1;(statearr_40836_40856[(2)] = null);
(statearr_40836_40856[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (9)))
{var inst_40805 = (state_40825[(8)]);var state_40825__$1 = state_40825;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40825__$1,(11),out,inst_40805);
} else
{if((state_val_40826 === (5)))
{var inst_40802 = (state_40825[(7)]);var inst_40805 = (state_40825[(8)]);var inst_40809 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40805,inst_40802);var state_40825__$1 = state_40825;if(inst_40809)
{var statearr_40838_40857 = state_40825__$1;(statearr_40838_40857[(1)] = (8));
} else
{var statearr_40839_40858 = state_40825__$1;(statearr_40839_40858[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (10)))
{var inst_40817 = (state_40825[(2)]);var state_40825__$1 = state_40825;var statearr_40840_40859 = state_40825__$1;(statearr_40840_40859[(2)] = inst_40817);
(statearr_40840_40859[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40826 === (8)))
{var inst_40802 = (state_40825[(7)]);var tmp40837 = inst_40802;var inst_40802__$1 = tmp40837;var state_40825__$1 = (function (){var statearr_40841 = state_40825;(statearr_40841[(7)] = inst_40802__$1);
return statearr_40841;
})();var statearr_40842_40860 = state_40825__$1;(statearr_40842_40860[(2)] = null);
(statearr_40842_40860[(1)] = (2));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40850,out))
;return ((function (switch__5678__auto__,c__5693__auto___40850,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40846 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40846[(0)] = state_machine__5679__auto__);
(statearr_40846[(1)] = (1));
return statearr_40846;
});
var state_machine__5679__auto____1 = (function (state_40825){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40825);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40847){if((e40847 instanceof Object))
{var ex__5682__auto__ = e40847;var statearr_40848_40861 = state_40825;(statearr_40848_40861[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40825);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__40862 = state_40825;
state_40825 = G__40862;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40825){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40850,out))
})();var state__5695__auto__ = (function (){var statearr_40849 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40850);
return statearr_40849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40850,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___40997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___40997,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___40997,out){
return (function (state_40967){var state_val_40968 = (state_40967[(1)]);if((state_val_40968 === (7)))
{var inst_40963 = (state_40967[(2)]);var state_40967__$1 = state_40967;var statearr_40969_40998 = state_40967__$1;(statearr_40969_40998[(2)] = inst_40963);
(statearr_40969_40998[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (1)))
{var inst_40930 = (new Array(n));var inst_40931 = inst_40930;var inst_40932 = (0);var state_40967__$1 = (function (){var statearr_40970 = state_40967;(statearr_40970[(7)] = inst_40932);
(statearr_40970[(8)] = inst_40931);
return statearr_40970;
})();var statearr_40971_40999 = state_40967__$1;(statearr_40971_40999[(2)] = null);
(statearr_40971_40999[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (4)))
{var inst_40935 = (state_40967[(9)]);var inst_40935__$1 = (state_40967[(2)]);var inst_40936 = (inst_40935__$1 == null);var inst_40937 = cljs.core.not(inst_40936);var state_40967__$1 = (function (){var statearr_40972 = state_40967;(statearr_40972[(9)] = inst_40935__$1);
return statearr_40972;
})();if(inst_40937)
{var statearr_40973_41000 = state_40967__$1;(statearr_40973_41000[(1)] = (5));
} else
{var statearr_40974_41001 = state_40967__$1;(statearr_40974_41001[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (15)))
{var inst_40957 = (state_40967[(2)]);var state_40967__$1 = state_40967;var statearr_40975_41002 = state_40967__$1;(statearr_40975_41002[(2)] = inst_40957);
(statearr_40975_41002[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (13)))
{var state_40967__$1 = state_40967;var statearr_40976_41003 = state_40967__$1;(statearr_40976_41003[(2)] = null);
(statearr_40976_41003[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (6)))
{var inst_40932 = (state_40967[(7)]);var inst_40953 = (inst_40932 > (0));var state_40967__$1 = state_40967;if(cljs.core.truth_(inst_40953))
{var statearr_40977_41004 = state_40967__$1;(statearr_40977_41004[(1)] = (12));
} else
{var statearr_40978_41005 = state_40967__$1;(statearr_40978_41005[(1)] = (13));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (3)))
{var inst_40965 = (state_40967[(2)]);var state_40967__$1 = state_40967;return cljs.core.async.impl.ioc_helpers.return_chan(state_40967__$1,inst_40965);
} else
{if((state_val_40968 === (12)))
{var inst_40931 = (state_40967[(8)]);var inst_40955 = cljs.core.vec(inst_40931);var state_40967__$1 = state_40967;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40967__$1,(15),out,inst_40955);
} else
{if((state_val_40968 === (2)))
{var state_40967__$1 = state_40967;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40967__$1,(4),ch);
} else
{if((state_val_40968 === (11)))
{var inst_40947 = (state_40967[(2)]);var inst_40948 = (new Array(n));var inst_40931 = inst_40948;var inst_40932 = (0);var state_40967__$1 = (function (){var statearr_40979 = state_40967;(statearr_40979[(7)] = inst_40932);
(statearr_40979[(8)] = inst_40931);
(statearr_40979[(10)] = inst_40947);
return statearr_40979;
})();var statearr_40980_41006 = state_40967__$1;(statearr_40980_41006[(2)] = null);
(statearr_40980_41006[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (9)))
{var inst_40931 = (state_40967[(8)]);var inst_40945 = cljs.core.vec(inst_40931);var state_40967__$1 = state_40967;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40967__$1,(11),out,inst_40945);
} else
{if((state_val_40968 === (5)))
{var inst_40935 = (state_40967[(9)]);var inst_40940 = (state_40967[(11)]);var inst_40932 = (state_40967[(7)]);var inst_40931 = (state_40967[(8)]);var inst_40939 = (inst_40931[inst_40932] = inst_40935);var inst_40940__$1 = (inst_40932 + (1));var inst_40941 = (inst_40940__$1 < n);var state_40967__$1 = (function (){var statearr_40981 = state_40967;(statearr_40981[(11)] = inst_40940__$1);
(statearr_40981[(12)] = inst_40939);
return statearr_40981;
})();if(cljs.core.truth_(inst_40941))
{var statearr_40982_41007 = state_40967__$1;(statearr_40982_41007[(1)] = (8));
} else
{var statearr_40983_41008 = state_40967__$1;(statearr_40983_41008[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (14)))
{var inst_40960 = (state_40967[(2)]);var inst_40961 = cljs.core.async.close_BANG_(out);var state_40967__$1 = (function (){var statearr_40985 = state_40967;(statearr_40985[(13)] = inst_40960);
return statearr_40985;
})();var statearr_40986_41009 = state_40967__$1;(statearr_40986_41009[(2)] = inst_40961);
(statearr_40986_41009[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (10)))
{var inst_40951 = (state_40967[(2)]);var state_40967__$1 = state_40967;var statearr_40987_41010 = state_40967__$1;(statearr_40987_41010[(2)] = inst_40951);
(statearr_40987_41010[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_40968 === (8)))
{var inst_40940 = (state_40967[(11)]);var inst_40931 = (state_40967[(8)]);var tmp40984 = inst_40931;var inst_40931__$1 = tmp40984;var inst_40932 = inst_40940;var state_40967__$1 = (function (){var statearr_40988 = state_40967;(statearr_40988[(7)] = inst_40932);
(statearr_40988[(8)] = inst_40931__$1);
return statearr_40988;
})();var statearr_40989_41011 = state_40967__$1;(statearr_40989_41011[(2)] = null);
(statearr_40989_41011[(1)] = (2));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___40997,out))
;return ((function (switch__5678__auto__,c__5693__auto___40997,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_40993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40993[(0)] = state_machine__5679__auto__);
(statearr_40993[(1)] = (1));
return statearr_40993;
});
var state_machine__5679__auto____1 = (function (state_40967){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_40967);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e40994){if((e40994 instanceof Object))
{var ex__5682__auto__ = e40994;var statearr_40995_41012 = state_40967;(statearr_40995_41012[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40967);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e40994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__41013 = state_40967;
state_40967 = G__41013;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_40967){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_40967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___40997,out))
})();var state__5695__auto__ = (function (){var statearr_40996 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_40996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___40997);
return statearr_40996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___40997,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5693__auto___41156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5693__auto___41156,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___41156,out){
return (function (state_41126){var state_val_41127 = (state_41126[(1)]);if((state_val_41127 === (7)))
{var inst_41122 = (state_41126[(2)]);var state_41126__$1 = state_41126;var statearr_41128_41157 = state_41126__$1;(statearr_41128_41157[(2)] = inst_41122);
(statearr_41128_41157[(1)] = (3));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (1)))
{var inst_41085 = [];var inst_41086 = inst_41085;var inst_41087 = cljs.core.constant$keyword$778;var state_41126__$1 = (function (){var statearr_41129 = state_41126;(statearr_41129[(7)] = inst_41087);
(statearr_41129[(8)] = inst_41086);
return statearr_41129;
})();var statearr_41130_41158 = state_41126__$1;(statearr_41130_41158[(2)] = null);
(statearr_41130_41158[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (4)))
{var inst_41090 = (state_41126[(9)]);var inst_41090__$1 = (state_41126[(2)]);var inst_41091 = (inst_41090__$1 == null);var inst_41092 = cljs.core.not(inst_41091);var state_41126__$1 = (function (){var statearr_41131 = state_41126;(statearr_41131[(9)] = inst_41090__$1);
return statearr_41131;
})();if(inst_41092)
{var statearr_41132_41159 = state_41126__$1;(statearr_41132_41159[(1)] = (5));
} else
{var statearr_41133_41160 = state_41126__$1;(statearr_41133_41160[(1)] = (6));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (15)))
{var inst_41116 = (state_41126[(2)]);var state_41126__$1 = state_41126;var statearr_41134_41161 = state_41126__$1;(statearr_41134_41161[(2)] = inst_41116);
(statearr_41134_41161[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (13)))
{var state_41126__$1 = state_41126;var statearr_41135_41162 = state_41126__$1;(statearr_41135_41162[(2)] = null);
(statearr_41135_41162[(1)] = (14));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (6)))
{var inst_41086 = (state_41126[(8)]);var inst_41111 = inst_41086.length;var inst_41112 = (inst_41111 > (0));var state_41126__$1 = state_41126;if(cljs.core.truth_(inst_41112))
{var statearr_41136_41163 = state_41126__$1;(statearr_41136_41163[(1)] = (12));
} else
{var statearr_41137_41164 = state_41126__$1;(statearr_41137_41164[(1)] = (13));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (3)))
{var inst_41124 = (state_41126[(2)]);var state_41126__$1 = state_41126;return cljs.core.async.impl.ioc_helpers.return_chan(state_41126__$1,inst_41124);
} else
{if((state_val_41127 === (12)))
{var inst_41086 = (state_41126[(8)]);var inst_41114 = cljs.core.vec(inst_41086);var state_41126__$1 = state_41126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41126__$1,(15),out,inst_41114);
} else
{if((state_val_41127 === (2)))
{var state_41126__$1 = state_41126;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41126__$1,(4),ch);
} else
{if((state_val_41127 === (11)))
{var inst_41094 = (state_41126[(10)]);var inst_41090 = (state_41126[(9)]);var inst_41104 = (state_41126[(2)]);var inst_41105 = [];var inst_41106 = inst_41105.push(inst_41090);var inst_41086 = inst_41105;var inst_41087 = inst_41094;var state_41126__$1 = (function (){var statearr_41138 = state_41126;(statearr_41138[(11)] = inst_41104);
(statearr_41138[(7)] = inst_41087);
(statearr_41138[(12)] = inst_41106);
(statearr_41138[(8)] = inst_41086);
return statearr_41138;
})();var statearr_41139_41165 = state_41126__$1;(statearr_41139_41165[(2)] = null);
(statearr_41139_41165[(1)] = (2));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (9)))
{var inst_41086 = (state_41126[(8)]);var inst_41102 = cljs.core.vec(inst_41086);var state_41126__$1 = state_41126;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41126__$1,(11),out,inst_41102);
} else
{if((state_val_41127 === (5)))
{var inst_41094 = (state_41126[(10)]);var inst_41087 = (state_41126[(7)]);var inst_41090 = (state_41126[(9)]);var inst_41094__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41090) : f.call(null,inst_41090));var inst_41095 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41094__$1,inst_41087);var inst_41096 = cljs.core.keyword_identical_QMARK_(inst_41087,cljs.core.constant$keyword$778);var inst_41097 = (inst_41095) || (inst_41096);var state_41126__$1 = (function (){var statearr_41140 = state_41126;(statearr_41140[(10)] = inst_41094__$1);
return statearr_41140;
})();if(cljs.core.truth_(inst_41097))
{var statearr_41141_41166 = state_41126__$1;(statearr_41141_41166[(1)] = (8));
} else
{var statearr_41142_41167 = state_41126__$1;(statearr_41142_41167[(1)] = (9));
}
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (14)))
{var inst_41119 = (state_41126[(2)]);var inst_41120 = cljs.core.async.close_BANG_(out);var state_41126__$1 = (function (){var statearr_41144 = state_41126;(statearr_41144[(13)] = inst_41119);
return statearr_41144;
})();var statearr_41145_41168 = state_41126__$1;(statearr_41145_41168[(2)] = inst_41120);
(statearr_41145_41168[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (10)))
{var inst_41109 = (state_41126[(2)]);var state_41126__$1 = state_41126;var statearr_41146_41169 = state_41126__$1;(statearr_41146_41169[(2)] = inst_41109);
(statearr_41146_41169[(1)] = (7));
return cljs.core.constant$keyword$765;
} else
{if((state_val_41127 === (8)))
{var inst_41094 = (state_41126[(10)]);var inst_41086 = (state_41126[(8)]);var inst_41090 = (state_41126[(9)]);var inst_41099 = inst_41086.push(inst_41090);var tmp41143 = inst_41086;var inst_41086__$1 = tmp41143;var inst_41087 = inst_41094;var state_41126__$1 = (function (){var statearr_41147 = state_41126;(statearr_41147[(7)] = inst_41087);
(statearr_41147[(14)] = inst_41099);
(statearr_41147[(8)] = inst_41086__$1);
return statearr_41147;
})();var statearr_41148_41170 = state_41126__$1;(statearr_41148_41170[(2)] = null);
(statearr_41148_41170[(1)] = (2));
return cljs.core.constant$keyword$765;
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
});})(c__5693__auto___41156,out))
;return ((function (switch__5678__auto__,c__5693__auto___41156,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_41152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41152[(0)] = state_machine__5679__auto__);
(statearr_41152[(1)] = (1));
return statearr_41152;
});
var state_machine__5679__auto____1 = (function (state_41126){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__(state_41126);if(cljs.core.keyword_identical_QMARK_(result__5681__auto__,cljs.core.constant$keyword$765))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e41153){if((e41153 instanceof Object))
{var ex__5682__auto__ = e41153;var statearr_41154_41171 = state_41126;(statearr_41154_41171[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_41126);
return cljs.core.constant$keyword$765;
} else
{if(cljs.core.constant$keyword$756)
{throw e41153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5680__auto__,cljs.core.constant$keyword$765))
{{
var G__41172 = state_41126;
state_41126 = G__41172;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_41126){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_41126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___41156,out))
})();var state__5695__auto__ = (function (){var statearr_41155 = (f__5694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5694__auto__.cljs$core$IFn$_invoke$arity$0() : f__5694__auto__.call(null));(statearr_41155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___41156);
return statearr_41155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5695__auto__);
});})(c__5693__auto___41156,out))
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
