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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21695 = (function (f,fn_handler,meta21696){
this.f = f;
this.fn_handler = fn_handler;
this.meta21696 = meta21696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21695.cljs$lang$type = true;
cljs.core.async.t21695.cljs$lang$ctorStr = "cljs.core.async/t21695";
cljs.core.async.t21695.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21695");
});
cljs.core.async.t21695.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21697){var self__ = this;
var _21697__$1 = this;return self__.meta21696;
});
cljs.core.async.t21695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21697,meta21696__$1){var self__ = this;
var _21697__$1 = this;return (new cljs.core.async.t21695(self__.f,self__.fn_handler,meta21696__$1));
});
cljs.core.async.__GT_t21695 = (function __GT_t21695(f__$1,fn_handler__$1,meta21696){return (new cljs.core.async.t21695(f__$1,fn_handler__$1,meta21696));
});
}
return (new cljs.core.async.t21695(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21699 = buff;if(G__21699)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__21699.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21699.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21699);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21699);
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
{var val_21700 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21700) : fn1.call(null,val_21700));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21700) : fn1.call(null,val_21700));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___21701 = n;var x_21702 = 0;while(true){
if((x_21702 < n__4248__auto___21701))
{(a[x_21702] = 0);
{
var G__21703 = (x_21702 + 1);
x_21702 = G__21703;
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
var G__21704 = (i + 1);
i = G__21704;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t21708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21708 = (function (flag,alt_flag,meta21709){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21709 = meta21709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21708.cljs$lang$type = true;
cljs.core.async.t21708.cljs$lang$ctorStr = "cljs.core.async/t21708";
cljs.core.async.t21708.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21708");
});
cljs.core.async.t21708.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t21708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t21708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21710){var self__ = this;
var _21710__$1 = this;return self__.meta21709;
});
cljs.core.async.t21708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21710,meta21709__$1){var self__ = this;
var _21710__$1 = this;return (new cljs.core.async.t21708(self__.flag,self__.alt_flag,meta21709__$1));
});
cljs.core.async.__GT_t21708 = (function __GT_t21708(flag__$1,alt_flag__$1,meta21709){return (new cljs.core.async.t21708(flag__$1,alt_flag__$1,meta21709));
});
}
return (new cljs.core.async.t21708(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21714 = (function (cb,flag,alt_handler,meta21715){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21715 = meta21715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21714.cljs$lang$type = true;
cljs.core.async.t21714.cljs$lang$ctorStr = "cljs.core.async/t21714";
cljs.core.async.t21714.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21714");
});
cljs.core.async.t21714.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t21714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t21714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21716){var self__ = this;
var _21716__$1 = this;return self__.meta21715;
});
cljs.core.async.t21714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21716,meta21715__$1){var self__ = this;
var _21716__$1 = this;return (new cljs.core.async.t21714(self__.cb,self__.flag,self__.alt_handler,meta21715__$1));
});
cljs.core.async.__GT_t21714 = (function __GT_t21714(cb__$1,flag__$1,alt_handler__$1,meta21715){return (new cljs.core.async.t21714(cb__$1,flag__$1,alt_handler__$1,meta21715));
});
}
return (new cljs.core.async.t21714(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21717_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21717_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21717_SHARP_,port], null)));
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
var G__21718 = (i + 1);
i = G__21718;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$116))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$116], null));
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
var alts_BANG___delegate = function (ports,p__21719){var map__21721 = p__21719;var map__21721__$1 = ((cljs.core.seq_QMARK_(map__21721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21721):map__21721);var opts = map__21721__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21719 = null;if (arguments.length > 1) {
  p__21719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21719);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21722){
var ports = cljs.core.first(arglist__21722);
var p__21719 = cljs.core.rest(arglist__21722);
return alts_BANG___delegate(ports,p__21719);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21730 = (function (ch,f,map_LT_,meta21731){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21731 = meta21731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21730.cljs$lang$type = true;
cljs.core.async.t21730.cljs$lang$ctorStr = "cljs.core.async/t21730";
cljs.core.async.t21730.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21730");
});
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t21733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21733 = (function (fn1,_,meta21731,ch,f,map_LT_,meta21734){
this.fn1 = fn1;
this._ = _;
this.meta21731 = meta21731;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21734 = meta21734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21733.cljs$lang$type = true;
cljs.core.async.t21733.cljs$lang$ctorStr = "cljs.core.async/t21733";
cljs.core.async.t21733.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21733");
});
cljs.core.async.t21733.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t21733.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t21733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__21723_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__21723_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21723_SHARP_) : self__.f.call(null,p1__21723_SHARP_)))) : f1.call(null,(((p1__21723_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21723_SHARP_) : self__.f.call(null,p1__21723_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t21733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21735){var self__ = this;
var _21735__$1 = this;return self__.meta21734;
});
cljs.core.async.t21733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21735,meta21734__$1){var self__ = this;
var _21735__$1 = this;return (new cljs.core.async.t21733(self__.fn1,self__._,self__.meta21731,self__.ch,self__.f,self__.map_LT_,meta21734__$1));
});
cljs.core.async.__GT_t21733 = (function __GT_t21733(fn1__$1,___$2,meta21731__$1,ch__$2,f__$2,map_LT___$2,meta21734){return (new cljs.core.async.t21733(fn1__$1,___$2,meta21731__$1,ch__$2,f__$2,map_LT___$2,meta21734));
});
}
return (new cljs.core.async.t21733(fn1,___$1,self__.meta21731,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21732){var self__ = this;
var _21732__$1 = this;return self__.meta21731;
});
cljs.core.async.t21730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21732,meta21731__$1){var self__ = this;
var _21732__$1 = this;return (new cljs.core.async.t21730(self__.ch,self__.f,self__.map_LT_,meta21731__$1));
});
cljs.core.async.__GT_t21730 = (function __GT_t21730(ch__$1,f__$1,map_LT___$1,meta21731){return (new cljs.core.async.t21730(ch__$1,f__$1,map_LT___$1,meta21731));
});
}
return (new cljs.core.async.t21730(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21739 = (function (ch,f,map_GT_,meta21740){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21740 = meta21740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21739.cljs$lang$type = true;
cljs.core.async.t21739.cljs$lang$ctorStr = "cljs.core.async/t21739";
cljs.core.async.t21739.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21739");
});
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21739.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21741){var self__ = this;
var _21741__$1 = this;return self__.meta21740;
});
cljs.core.async.t21739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21741,meta21740__$1){var self__ = this;
var _21741__$1 = this;return (new cljs.core.async.t21739(self__.ch,self__.f,self__.map_GT_,meta21740__$1));
});
cljs.core.async.__GT_t21739 = (function __GT_t21739(ch__$1,f__$1,map_GT___$1,meta21740){return (new cljs.core.async.t21739(ch__$1,f__$1,map_GT___$1,meta21740));
});
}
return (new cljs.core.async.t21739(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21745 = (function (ch,p,filter_GT_,meta21746){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21746 = meta21746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21745.cljs$lang$type = true;
cljs.core.async.t21745.cljs$lang$ctorStr = "cljs.core.async/t21745";
cljs.core.async.t21745.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21745");
});
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21747){var self__ = this;
var _21747__$1 = this;return self__.meta21746;
});
cljs.core.async.t21745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21747,meta21746__$1){var self__ = this;
var _21747__$1 = this;return (new cljs.core.async.t21745(self__.ch,self__.p,self__.filter_GT_,meta21746__$1));
});
cljs.core.async.__GT_t21745 = (function __GT_t21745(ch__$1,p__$1,filter_GT___$1,meta21746){return (new cljs.core.async.t21745(ch__$1,p__$1,filter_GT___$1,meta21746));
});
}
return (new cljs.core.async.t21745(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___21830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21809){var state_val_21810 = (state_21809[1]);if((state_val_21810 === 1))
{var state_21809__$1 = state_21809;var statearr_21811_21831 = state_21809__$1;(statearr_21811_21831[2] = null);
(statearr_21811_21831[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 2))
{var state_21809__$1 = state_21809;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21809__$1,4,ch);
} else
{if((state_val_21810 === 3))
{var inst_21807 = (state_21809[2]);var state_21809__$1 = state_21809;return cljs.core.async.impl.ioc_helpers.return_chan(state_21809__$1,inst_21807);
} else
{if((state_val_21810 === 4))
{var inst_21791 = (state_21809[7]);var inst_21791__$1 = (state_21809[2]);var inst_21792 = (inst_21791__$1 == null);var state_21809__$1 = (function (){var statearr_21812 = state_21809;(statearr_21812[7] = inst_21791__$1);
return statearr_21812;
})();if(cljs.core.truth_(inst_21792))
{var statearr_21813_21832 = state_21809__$1;(statearr_21813_21832[1] = 5);
} else
{var statearr_21814_21833 = state_21809__$1;(statearr_21814_21833[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 5))
{var inst_21794 = cljs.core.async.close_BANG_(out);var state_21809__$1 = state_21809;var statearr_21815_21834 = state_21809__$1;(statearr_21815_21834[2] = inst_21794);
(statearr_21815_21834[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 6))
{var inst_21791 = (state_21809[7]);var inst_21796 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21791) : p.call(null,inst_21791));var state_21809__$1 = state_21809;if(cljs.core.truth_(inst_21796))
{var statearr_21816_21835 = state_21809__$1;(statearr_21816_21835[1] = 8);
} else
{var statearr_21817_21836 = state_21809__$1;(statearr_21817_21836[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 7))
{var inst_21805 = (state_21809[2]);var state_21809__$1 = state_21809;var statearr_21818_21837 = state_21809__$1;(statearr_21818_21837[2] = inst_21805);
(statearr_21818_21837[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 8))
{var inst_21791 = (state_21809[7]);var state_21809__$1 = state_21809;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21809__$1,11,out,inst_21791);
} else
{if((state_val_21810 === 9))
{var state_21809__$1 = state_21809;var statearr_21819_21838 = state_21809__$1;(statearr_21819_21838[2] = null);
(statearr_21819_21838[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 10))
{var inst_21802 = (state_21809[2]);var state_21809__$1 = (function (){var statearr_21820 = state_21809;(statearr_21820[8] = inst_21802);
return statearr_21820;
})();var statearr_21821_21839 = state_21809__$1;(statearr_21821_21839[2] = null);
(statearr_21821_21839[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21810 === 11))
{var inst_21799 = (state_21809[2]);var state_21809__$1 = state_21809;var statearr_21822_21840 = state_21809__$1;(statearr_21822_21840[2] = inst_21799);
(statearr_21822_21840[1] = 10);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_21826 = [null,null,null,null,null,null,null,null,null];(statearr_21826[0] = state_machine__5507__auto__);
(statearr_21826[1] = 1);
return statearr_21826;
});
var state_machine__5507__auto____1 = (function (state_21809){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21809);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21827){if((e21827 instanceof Object))
{var ex__5510__auto__ = e21827;var statearr_21828_21841 = state_21809;(statearr_21828_21841[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21809);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21827;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21842 = state_21809;
state_21809 = G__21842;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21809){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21829 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21830);
return statearr_21829;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21994){var state_val_21995 = (state_21994[1]);if((state_val_21995 === 1))
{var state_21994__$1 = state_21994;var statearr_21996_22033 = state_21994__$1;(statearr_21996_22033[2] = null);
(statearr_21996_22033[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 2))
{var state_21994__$1 = state_21994;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21994__$1,4,in$);
} else
{if((state_val_21995 === 3))
{var inst_21992 = (state_21994[2]);var state_21994__$1 = state_21994;return cljs.core.async.impl.ioc_helpers.return_chan(state_21994__$1,inst_21992);
} else
{if((state_val_21995 === 4))
{var inst_21940 = (state_21994[7]);var inst_21940__$1 = (state_21994[2]);var inst_21941 = (inst_21940__$1 == null);var state_21994__$1 = (function (){var statearr_21997 = state_21994;(statearr_21997[7] = inst_21940__$1);
return statearr_21997;
})();if(cljs.core.truth_(inst_21941))
{var statearr_21998_22034 = state_21994__$1;(statearr_21998_22034[1] = 5);
} else
{var statearr_21999_22035 = state_21994__$1;(statearr_21999_22035[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 5))
{var inst_21943 = cljs.core.async.close_BANG_(out);var state_21994__$1 = state_21994;var statearr_22000_22036 = state_21994__$1;(statearr_22000_22036[2] = inst_21943);
(statearr_22000_22036[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 6))
{var inst_21940 = (state_21994[7]);var inst_21945 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21940) : f.call(null,inst_21940));var inst_21950 = cljs.core.seq(inst_21945);var inst_21951 = inst_21950;var inst_21952 = null;var inst_21953 = 0;var inst_21954 = 0;var state_21994__$1 = (function (){var statearr_22001 = state_21994;(statearr_22001[8] = inst_21954);
(statearr_22001[9] = inst_21951);
(statearr_22001[10] = inst_21952);
(statearr_22001[11] = inst_21953);
return statearr_22001;
})();var statearr_22002_22037 = state_21994__$1;(statearr_22002_22037[2] = null);
(statearr_22002_22037[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 7))
{var inst_21990 = (state_21994[2]);var state_21994__$1 = state_21994;var statearr_22003_22038 = state_21994__$1;(statearr_22003_22038[2] = inst_21990);
(statearr_22003_22038[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 8))
{var inst_21954 = (state_21994[8]);var inst_21953 = (state_21994[11]);var inst_21956 = (inst_21954 < inst_21953);var inst_21957 = inst_21956;var state_21994__$1 = state_21994;if(cljs.core.truth_(inst_21957))
{var statearr_22004_22039 = state_21994__$1;(statearr_22004_22039[1] = 10);
} else
{var statearr_22005_22040 = state_21994__$1;(statearr_22005_22040[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 9))
{var inst_21987 = (state_21994[2]);var state_21994__$1 = (function (){var statearr_22006 = state_21994;(statearr_22006[12] = inst_21987);
return statearr_22006;
})();var statearr_22007_22041 = state_21994__$1;(statearr_22007_22041[2] = null);
(statearr_22007_22041[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 10))
{var inst_21954 = (state_21994[8]);var inst_21952 = (state_21994[10]);var inst_21959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21952,inst_21954);var state_21994__$1 = state_21994;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21994__$1,13,out,inst_21959);
} else
{if((state_val_21995 === 11))
{var inst_21965 = (state_21994[13]);var inst_21951 = (state_21994[9]);var inst_21965__$1 = cljs.core.seq(inst_21951);var state_21994__$1 = (function (){var statearr_22011 = state_21994;(statearr_22011[13] = inst_21965__$1);
return statearr_22011;
})();if(inst_21965__$1)
{var statearr_22012_22042 = state_21994__$1;(statearr_22012_22042[1] = 14);
} else
{var statearr_22013_22043 = state_21994__$1;(statearr_22013_22043[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 12))
{var inst_21985 = (state_21994[2]);var state_21994__$1 = state_21994;var statearr_22014_22044 = state_21994__$1;(statearr_22014_22044[2] = inst_21985);
(statearr_22014_22044[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 13))
{var inst_21954 = (state_21994[8]);var inst_21951 = (state_21994[9]);var inst_21952 = (state_21994[10]);var inst_21953 = (state_21994[11]);var inst_21961 = (state_21994[2]);var inst_21962 = (inst_21954 + 1);var tmp22008 = inst_21951;var tmp22009 = inst_21952;var tmp22010 = inst_21953;var inst_21951__$1 = tmp22008;var inst_21952__$1 = tmp22009;var inst_21953__$1 = tmp22010;var inst_21954__$1 = inst_21962;var state_21994__$1 = (function (){var statearr_22015 = state_21994;(statearr_22015[8] = inst_21954__$1);
(statearr_22015[14] = inst_21961);
(statearr_22015[9] = inst_21951__$1);
(statearr_22015[10] = inst_21952__$1);
(statearr_22015[11] = inst_21953__$1);
return statearr_22015;
})();var statearr_22016_22045 = state_21994__$1;(statearr_22016_22045[2] = null);
(statearr_22016_22045[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 14))
{var inst_21965 = (state_21994[13]);var inst_21967 = cljs.core.chunked_seq_QMARK_(inst_21965);var state_21994__$1 = state_21994;if(inst_21967)
{var statearr_22017_22046 = state_21994__$1;(statearr_22017_22046[1] = 17);
} else
{var statearr_22018_22047 = state_21994__$1;(statearr_22018_22047[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 15))
{var state_21994__$1 = state_21994;var statearr_22019_22048 = state_21994__$1;(statearr_22019_22048[2] = null);
(statearr_22019_22048[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 16))
{var inst_21983 = (state_21994[2]);var state_21994__$1 = state_21994;var statearr_22020_22049 = state_21994__$1;(statearr_22020_22049[2] = inst_21983);
(statearr_22020_22049[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 17))
{var inst_21965 = (state_21994[13]);var inst_21969 = cljs.core.chunk_first(inst_21965);var inst_21970 = cljs.core.chunk_rest(inst_21965);var inst_21971 = cljs.core.count(inst_21969);var inst_21951 = inst_21970;var inst_21952 = inst_21969;var inst_21953 = inst_21971;var inst_21954 = 0;var state_21994__$1 = (function (){var statearr_22021 = state_21994;(statearr_22021[8] = inst_21954);
(statearr_22021[9] = inst_21951);
(statearr_22021[10] = inst_21952);
(statearr_22021[11] = inst_21953);
return statearr_22021;
})();var statearr_22022_22050 = state_21994__$1;(statearr_22022_22050[2] = null);
(statearr_22022_22050[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 18))
{var inst_21965 = (state_21994[13]);var inst_21974 = cljs.core.first(inst_21965);var state_21994__$1 = state_21994;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21994__$1,20,out,inst_21974);
} else
{if((state_val_21995 === 19))
{var inst_21980 = (state_21994[2]);var state_21994__$1 = state_21994;var statearr_22023_22051 = state_21994__$1;(statearr_22023_22051[2] = inst_21980);
(statearr_22023_22051[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21995 === 20))
{var inst_21965 = (state_21994[13]);var inst_21976 = (state_21994[2]);var inst_21977 = cljs.core.next(inst_21965);var inst_21951 = inst_21977;var inst_21952 = null;var inst_21953 = 0;var inst_21954 = 0;var state_21994__$1 = (function (){var statearr_22024 = state_21994;(statearr_22024[8] = inst_21954);
(statearr_22024[9] = inst_21951);
(statearr_22024[10] = inst_21952);
(statearr_22024[11] = inst_21953);
(statearr_22024[15] = inst_21976);
return statearr_22024;
})();var statearr_22025_22052 = state_21994__$1;(statearr_22025_22052[2] = null);
(statearr_22025_22052[1] = 8);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22029[0] = state_machine__5507__auto__);
(statearr_22029[1] = 1);
return statearr_22029;
});
var state_machine__5507__auto____1 = (function (state_21994){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21994);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22030){if((e22030 instanceof Object))
{var ex__5510__auto__ = e22030;var statearr_22031_22053 = state_21994;(statearr_22031_22053[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21994);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22054 = state_21994;
state_21994 = G__22054;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21994){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22032 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22032;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___22135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22114){var state_val_22115 = (state_22114[1]);if((state_val_22115 === 1))
{var state_22114__$1 = state_22114;var statearr_22116_22136 = state_22114__$1;(statearr_22116_22136[2] = null);
(statearr_22116_22136[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 2))
{var state_22114__$1 = state_22114;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22114__$1,4,from);
} else
{if((state_val_22115 === 3))
{var inst_22112 = (state_22114[2]);var state_22114__$1 = state_22114;return cljs.core.async.impl.ioc_helpers.return_chan(state_22114__$1,inst_22112);
} else
{if((state_val_22115 === 4))
{var inst_22097 = (state_22114[7]);var inst_22097__$1 = (state_22114[2]);var inst_22098 = (inst_22097__$1 == null);var state_22114__$1 = (function (){var statearr_22117 = state_22114;(statearr_22117[7] = inst_22097__$1);
return statearr_22117;
})();if(cljs.core.truth_(inst_22098))
{var statearr_22118_22137 = state_22114__$1;(statearr_22118_22137[1] = 5);
} else
{var statearr_22119_22138 = state_22114__$1;(statearr_22119_22138[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 5))
{var state_22114__$1 = state_22114;if(cljs.core.truth_(close_QMARK_))
{var statearr_22120_22139 = state_22114__$1;(statearr_22120_22139[1] = 8);
} else
{var statearr_22121_22140 = state_22114__$1;(statearr_22121_22140[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 6))
{var inst_22097 = (state_22114[7]);var state_22114__$1 = state_22114;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22114__$1,11,to,inst_22097);
} else
{if((state_val_22115 === 7))
{var inst_22110 = (state_22114[2]);var state_22114__$1 = state_22114;var statearr_22122_22141 = state_22114__$1;(statearr_22122_22141[2] = inst_22110);
(statearr_22122_22141[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 8))
{var inst_22101 = cljs.core.async.close_BANG_(to);var state_22114__$1 = state_22114;var statearr_22123_22142 = state_22114__$1;(statearr_22123_22142[2] = inst_22101);
(statearr_22123_22142[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 9))
{var state_22114__$1 = state_22114;var statearr_22124_22143 = state_22114__$1;(statearr_22124_22143[2] = null);
(statearr_22124_22143[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 10))
{var inst_22104 = (state_22114[2]);var state_22114__$1 = state_22114;var statearr_22125_22144 = state_22114__$1;(statearr_22125_22144[2] = inst_22104);
(statearr_22125_22144[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22115 === 11))
{var inst_22107 = (state_22114[2]);var state_22114__$1 = (function (){var statearr_22126 = state_22114;(statearr_22126[8] = inst_22107);
return statearr_22126;
})();var statearr_22127_22145 = state_22114__$1;(statearr_22127_22145[2] = null);
(statearr_22127_22145[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22131 = [null,null,null,null,null,null,null,null,null];(statearr_22131[0] = state_machine__5507__auto__);
(statearr_22131[1] = 1);
return statearr_22131;
});
var state_machine__5507__auto____1 = (function (state_22114){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22114);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22132){if((e22132 instanceof Object))
{var ex__5510__auto__ = e22132;var statearr_22133_22146 = state_22114;(statearr_22133_22146[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22114);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22147 = state_22114;
state_22114 = G__22147;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22114){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22134 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22135);
return statearr_22134;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___22234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22212){var state_val_22213 = (state_22212[1]);if((state_val_22213 === 1))
{var state_22212__$1 = state_22212;var statearr_22214_22235 = state_22212__$1;(statearr_22214_22235[2] = null);
(statearr_22214_22235[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 2))
{var state_22212__$1 = state_22212;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22212__$1,4,ch);
} else
{if((state_val_22213 === 3))
{var inst_22210 = (state_22212[2]);var state_22212__$1 = state_22212;return cljs.core.async.impl.ioc_helpers.return_chan(state_22212__$1,inst_22210);
} else
{if((state_val_22213 === 4))
{var inst_22193 = (state_22212[7]);var inst_22193__$1 = (state_22212[2]);var inst_22194 = (inst_22193__$1 == null);var state_22212__$1 = (function (){var statearr_22215 = state_22212;(statearr_22215[7] = inst_22193__$1);
return statearr_22215;
})();if(cljs.core.truth_(inst_22194))
{var statearr_22216_22236 = state_22212__$1;(statearr_22216_22236[1] = 5);
} else
{var statearr_22217_22237 = state_22212__$1;(statearr_22217_22237[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 5))
{var inst_22196 = cljs.core.async.close_BANG_(tc);var inst_22197 = cljs.core.async.close_BANG_(fc);var state_22212__$1 = (function (){var statearr_22218 = state_22212;(statearr_22218[8] = inst_22196);
return statearr_22218;
})();var statearr_22219_22238 = state_22212__$1;(statearr_22219_22238[2] = inst_22197);
(statearr_22219_22238[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 6))
{var inst_22193 = (state_22212[7]);var inst_22199 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22193) : p.call(null,inst_22193));var state_22212__$1 = state_22212;if(cljs.core.truth_(inst_22199))
{var statearr_22220_22239 = state_22212__$1;(statearr_22220_22239[1] = 9);
} else
{var statearr_22221_22240 = state_22212__$1;(statearr_22221_22240[1] = 10);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 7))
{var inst_22208 = (state_22212[2]);var state_22212__$1 = state_22212;var statearr_22222_22241 = state_22212__$1;(statearr_22222_22241[2] = inst_22208);
(statearr_22222_22241[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 8))
{var inst_22205 = (state_22212[2]);var state_22212__$1 = (function (){var statearr_22223 = state_22212;(statearr_22223[9] = inst_22205);
return statearr_22223;
})();var statearr_22224_22242 = state_22212__$1;(statearr_22224_22242[2] = null);
(statearr_22224_22242[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 9))
{var state_22212__$1 = state_22212;var statearr_22225_22243 = state_22212__$1;(statearr_22225_22243[2] = tc);
(statearr_22225_22243[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 10))
{var state_22212__$1 = state_22212;var statearr_22226_22244 = state_22212__$1;(statearr_22226_22244[2] = fc);
(statearr_22226_22244[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22213 === 11))
{var inst_22193 = (state_22212[7]);var inst_22203 = (state_22212[2]);var state_22212__$1 = state_22212;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22212__$1,8,inst_22203,inst_22193);
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
var state_machine__5507__auto____0 = (function (){var statearr_22230 = [null,null,null,null,null,null,null,null,null,null];(statearr_22230[0] = state_machine__5507__auto__);
(statearr_22230[1] = 1);
return statearr_22230;
});
var state_machine__5507__auto____1 = (function (state_22212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22212);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22231){if((e22231 instanceof Object))
{var ex__5510__auto__ = e22231;var statearr_22232_22245 = state_22212;(statearr_22232_22245[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22212);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22246 = state_22212;
state_22212 = G__22246;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22233 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22234);
return statearr_22233;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22293){var state_val_22294 = (state_22293[1]);if((state_val_22294 === 7))
{var inst_22289 = (state_22293[2]);var state_22293__$1 = state_22293;var statearr_22295_22311 = state_22293__$1;(statearr_22295_22311[2] = inst_22289);
(statearr_22295_22311[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22294 === 6))
{var inst_22279 = (state_22293[7]);var inst_22282 = (state_22293[8]);var inst_22286 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22279,inst_22282) : f.call(null,inst_22279,inst_22282));var inst_22279__$1 = inst_22286;var state_22293__$1 = (function (){var statearr_22296 = state_22293;(statearr_22296[7] = inst_22279__$1);
return statearr_22296;
})();var statearr_22297_22312 = state_22293__$1;(statearr_22297_22312[2] = null);
(statearr_22297_22312[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22294 === 5))
{var inst_22279 = (state_22293[7]);var state_22293__$1 = state_22293;var statearr_22298_22313 = state_22293__$1;(statearr_22298_22313[2] = inst_22279);
(statearr_22298_22313[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22294 === 4))
{var inst_22282 = (state_22293[8]);var inst_22282__$1 = (state_22293[2]);var inst_22283 = (inst_22282__$1 == null);var state_22293__$1 = (function (){var statearr_22299 = state_22293;(statearr_22299[8] = inst_22282__$1);
return statearr_22299;
})();if(cljs.core.truth_(inst_22283))
{var statearr_22300_22314 = state_22293__$1;(statearr_22300_22314[1] = 5);
} else
{var statearr_22301_22315 = state_22293__$1;(statearr_22301_22315[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22294 === 3))
{var inst_22291 = (state_22293[2]);var state_22293__$1 = state_22293;return cljs.core.async.impl.ioc_helpers.return_chan(state_22293__$1,inst_22291);
} else
{if((state_val_22294 === 2))
{var state_22293__$1 = state_22293;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22293__$1,4,ch);
} else
{if((state_val_22294 === 1))
{var inst_22279 = init;var state_22293__$1 = (function (){var statearr_22302 = state_22293;(statearr_22302[7] = inst_22279);
return statearr_22302;
})();var statearr_22303_22316 = state_22293__$1;(statearr_22303_22316[2] = null);
(statearr_22303_22316[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22307 = [null,null,null,null,null,null,null,null,null];(statearr_22307[0] = state_machine__5507__auto__);
(statearr_22307[1] = 1);
return statearr_22307;
});
var state_machine__5507__auto____1 = (function (state_22293){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22293);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object))
{var ex__5510__auto__ = e22308;var statearr_22309_22317 = state_22293;(statearr_22309_22317[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22293);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22318 = state_22293;
state_22293 = G__22318;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22293){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22310 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22310;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22380){var state_val_22381 = (state_22380[1]);if((state_val_22381 === 1))
{var inst_22360 = cljs.core.seq(coll);var inst_22361 = inst_22360;var state_22380__$1 = (function (){var statearr_22382 = state_22380;(statearr_22382[7] = inst_22361);
return statearr_22382;
})();var statearr_22383_22401 = state_22380__$1;(statearr_22383_22401[2] = null);
(statearr_22383_22401[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 2))
{var inst_22361 = (state_22380[7]);var state_22380__$1 = state_22380;if(cljs.core.truth_(inst_22361))
{var statearr_22384_22402 = state_22380__$1;(statearr_22384_22402[1] = 4);
} else
{var statearr_22385_22403 = state_22380__$1;(statearr_22385_22403[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 3))
{var inst_22378 = (state_22380[2]);var state_22380__$1 = state_22380;return cljs.core.async.impl.ioc_helpers.return_chan(state_22380__$1,inst_22378);
} else
{if((state_val_22381 === 4))
{var inst_22361 = (state_22380[7]);var inst_22364 = cljs.core.first(inst_22361);var state_22380__$1 = state_22380;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22380__$1,7,ch,inst_22364);
} else
{if((state_val_22381 === 5))
{var state_22380__$1 = state_22380;if(cljs.core.truth_(close_QMARK_))
{var statearr_22386_22404 = state_22380__$1;(statearr_22386_22404[1] = 8);
} else
{var statearr_22387_22405 = state_22380__$1;(statearr_22387_22405[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 6))
{var inst_22376 = (state_22380[2]);var state_22380__$1 = state_22380;var statearr_22388_22406 = state_22380__$1;(statearr_22388_22406[2] = inst_22376);
(statearr_22388_22406[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 7))
{var inst_22361 = (state_22380[7]);var inst_22366 = (state_22380[2]);var inst_22367 = cljs.core.next(inst_22361);var inst_22361__$1 = inst_22367;var state_22380__$1 = (function (){var statearr_22389 = state_22380;(statearr_22389[7] = inst_22361__$1);
(statearr_22389[8] = inst_22366);
return statearr_22389;
})();var statearr_22390_22407 = state_22380__$1;(statearr_22390_22407[2] = null);
(statearr_22390_22407[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 8))
{var inst_22371 = cljs.core.async.close_BANG_(ch);var state_22380__$1 = state_22380;var statearr_22391_22408 = state_22380__$1;(statearr_22391_22408[2] = inst_22371);
(statearr_22391_22408[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 9))
{var state_22380__$1 = state_22380;var statearr_22392_22409 = state_22380__$1;(statearr_22392_22409[2] = null);
(statearr_22392_22409[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22381 === 10))
{var inst_22374 = (state_22380[2]);var state_22380__$1 = state_22380;var statearr_22393_22410 = state_22380__$1;(statearr_22393_22410[2] = inst_22374);
(statearr_22393_22410[1] = 6);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22397 = [null,null,null,null,null,null,null,null,null];(statearr_22397[0] = state_machine__5507__auto__);
(statearr_22397[1] = 1);
return statearr_22397;
});
var state_machine__5507__auto____1 = (function (state_22380){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22380);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22398){if((e22398 instanceof Object))
{var ex__5510__auto__ = e22398;var statearr_22399_22411 = state_22380;(statearr_22399_22411[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22380);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22412 = state_22380;
state_22380 = G__22412;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22380){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22400 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22400;
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
cljs.core.async.Mux = (function (){var obj22414 = {};return obj22414;
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
cljs.core.async.Mult = (function (){var obj22416 = {};return obj22416;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22640 = (function (cs,ch,mult,meta22641){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22641 = meta22641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22640.cljs$lang$type = true;
cljs.core.async.t22640.cljs$lang$ctorStr = "cljs.core.async/t22640";
cljs.core.async.t22640.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22640");
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22640.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22642){var self__ = this;
var _22642__$1 = this;return self__.meta22641;
});})(cs))
;
cljs.core.async.t22640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22642,meta22641__$1){var self__ = this;
var _22642__$1 = this;return (new cljs.core.async.t22640(self__.cs,self__.ch,self__.mult,meta22641__$1));
});})(cs))
;
cljs.core.async.__GT_t22640 = ((function (cs){
return (function __GT_t22640(cs__$1,ch__$1,mult__$1,meta22641){return (new cljs.core.async.t22640(cs__$1,ch__$1,mult__$1,meta22641));
});})(cs))
;
}
return (new cljs.core.async.t22640(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___22863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22777){var state_val_22778 = (state_22777[1]);if((state_val_22778 === 32))
{var inst_22721 = (state_22777[7]);var inst_22645 = (state_22777[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22777,31,Object,null,30);var inst_22728 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22721,inst_22645,done);var state_22777__$1 = state_22777;var statearr_22779_22864 = state_22777__$1;(statearr_22779_22864[2] = inst_22728);
cljs.core.async.impl.ioc_helpers.process_exception(state_22777__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 1))
{var state_22777__$1 = state_22777;var statearr_22780_22865 = state_22777__$1;(statearr_22780_22865[2] = null);
(statearr_22780_22865[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 33))
{var inst_22734 = (state_22777[9]);var inst_22736 = cljs.core.chunked_seq_QMARK_(inst_22734);var state_22777__$1 = state_22777;if(inst_22736)
{var statearr_22781_22866 = state_22777__$1;(statearr_22781_22866[1] = 36);
} else
{var statearr_22782_22867 = state_22777__$1;(statearr_22782_22867[1] = 37);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 2))
{var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22777__$1,4,ch);
} else
{if((state_val_22778 === 34))
{var state_22777__$1 = state_22777;var statearr_22783_22868 = state_22777__$1;(statearr_22783_22868[2] = null);
(statearr_22783_22868[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 3))
{var inst_22775 = (state_22777[2]);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.return_chan(state_22777__$1,inst_22775);
} else
{if((state_val_22778 === 35))
{var inst_22759 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22784_22869 = state_22777__$1;(statearr_22784_22869[2] = inst_22759);
(statearr_22784_22869[1] = 29);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 4))
{var inst_22645 = (state_22777[8]);var inst_22645__$1 = (state_22777[2]);var inst_22646 = (inst_22645__$1 == null);var state_22777__$1 = (function (){var statearr_22785 = state_22777;(statearr_22785[8] = inst_22645__$1);
return statearr_22785;
})();if(cljs.core.truth_(inst_22646))
{var statearr_22786_22870 = state_22777__$1;(statearr_22786_22870[1] = 5);
} else
{var statearr_22787_22871 = state_22777__$1;(statearr_22787_22871[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 36))
{var inst_22734 = (state_22777[9]);var inst_22738 = cljs.core.chunk_first(inst_22734);var inst_22739 = cljs.core.chunk_rest(inst_22734);var inst_22740 = cljs.core.count(inst_22738);var inst_22713 = inst_22739;var inst_22714 = inst_22738;var inst_22715 = inst_22740;var inst_22716 = 0;var state_22777__$1 = (function (){var statearr_22788 = state_22777;(statearr_22788[10] = inst_22714);
(statearr_22788[11] = inst_22713);
(statearr_22788[12] = inst_22716);
(statearr_22788[13] = inst_22715);
return statearr_22788;
})();var statearr_22789_22872 = state_22777__$1;(statearr_22789_22872[2] = null);
(statearr_22789_22872[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 5))
{var inst_22652 = cljs.core.deref(cs);var inst_22653 = cljs.core.seq(inst_22652);var inst_22654 = inst_22653;var inst_22655 = null;var inst_22656 = 0;var inst_22657 = 0;var state_22777__$1 = (function (){var statearr_22790 = state_22777;(statearr_22790[14] = inst_22654);
(statearr_22790[15] = inst_22655);
(statearr_22790[16] = inst_22656);
(statearr_22790[17] = inst_22657);
return statearr_22790;
})();var statearr_22791_22873 = state_22777__$1;(statearr_22791_22873[2] = null);
(statearr_22791_22873[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 37))
{var inst_22734 = (state_22777[9]);var inst_22743 = cljs.core.first(inst_22734);var state_22777__$1 = (function (){var statearr_22792 = state_22777;(statearr_22792[18] = inst_22743);
return statearr_22792;
})();var statearr_22793_22874 = state_22777__$1;(statearr_22793_22874[2] = null);
(statearr_22793_22874[1] = 41);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 6))
{var inst_22705 = (state_22777[19]);var inst_22704 = cljs.core.deref(cs);var inst_22705__$1 = cljs.core.keys(inst_22704);var inst_22706 = cljs.core.count(inst_22705__$1);var inst_22707 = cljs.core.reset_BANG_(dctr,inst_22706);var inst_22712 = cljs.core.seq(inst_22705__$1);var inst_22713 = inst_22712;var inst_22714 = null;var inst_22715 = 0;var inst_22716 = 0;var state_22777__$1 = (function (){var statearr_22794 = state_22777;(statearr_22794[10] = inst_22714);
(statearr_22794[11] = inst_22713);
(statearr_22794[12] = inst_22716);
(statearr_22794[13] = inst_22715);
(statearr_22794[19] = inst_22705__$1);
(statearr_22794[20] = inst_22707);
return statearr_22794;
})();var statearr_22795_22875 = state_22777__$1;(statearr_22795_22875[2] = null);
(statearr_22795_22875[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 38))
{var inst_22756 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22796_22876 = state_22777__$1;(statearr_22796_22876[2] = inst_22756);
(statearr_22796_22876[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 7))
{var inst_22773 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22797_22877 = state_22777__$1;(statearr_22797_22877[2] = inst_22773);
(statearr_22797_22877[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 39))
{var inst_22734 = (state_22777[9]);var inst_22752 = (state_22777[2]);var inst_22753 = cljs.core.next(inst_22734);var inst_22713 = inst_22753;var inst_22714 = null;var inst_22715 = 0;var inst_22716 = 0;var state_22777__$1 = (function (){var statearr_22798 = state_22777;(statearr_22798[10] = inst_22714);
(statearr_22798[11] = inst_22713);
(statearr_22798[12] = inst_22716);
(statearr_22798[13] = inst_22715);
(statearr_22798[21] = inst_22752);
return statearr_22798;
})();var statearr_22799_22878 = state_22777__$1;(statearr_22799_22878[2] = null);
(statearr_22799_22878[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 8))
{var inst_22656 = (state_22777[16]);var inst_22657 = (state_22777[17]);var inst_22659 = (inst_22657 < inst_22656);var inst_22660 = inst_22659;var state_22777__$1 = state_22777;if(cljs.core.truth_(inst_22660))
{var statearr_22800_22879 = state_22777__$1;(statearr_22800_22879[1] = 10);
} else
{var statearr_22801_22880 = state_22777__$1;(statearr_22801_22880[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 40))
{var inst_22743 = (state_22777[18]);var inst_22744 = (state_22777[2]);var inst_22745 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22746 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22743);var state_22777__$1 = (function (){var statearr_22802 = state_22777;(statearr_22802[22] = inst_22744);
(statearr_22802[23] = inst_22745);
return statearr_22802;
})();var statearr_22803_22881 = state_22777__$1;(statearr_22803_22881[2] = inst_22746);
cljs.core.async.impl.ioc_helpers.process_exception(state_22777__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 9))
{var inst_22702 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22804_22882 = state_22777__$1;(statearr_22804_22882[2] = inst_22702);
(statearr_22804_22882[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 41))
{var inst_22743 = (state_22777[18]);var inst_22645 = (state_22777[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22777,40,Object,null,39);var inst_22750 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22743,inst_22645,done);var state_22777__$1 = state_22777;var statearr_22805_22883 = state_22777__$1;(statearr_22805_22883[2] = inst_22750);
cljs.core.async.impl.ioc_helpers.process_exception(state_22777__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 10))
{var inst_22655 = (state_22777[15]);var inst_22657 = (state_22777[17]);var inst_22663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22655,inst_22657);var inst_22664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22663,0,null);var inst_22665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22663,1,null);var state_22777__$1 = (function (){var statearr_22806 = state_22777;(statearr_22806[24] = inst_22664);
return statearr_22806;
})();if(cljs.core.truth_(inst_22665))
{var statearr_22807_22884 = state_22777__$1;(statearr_22807_22884[1] = 13);
} else
{var statearr_22808_22885 = state_22777__$1;(statearr_22808_22885[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 42))
{var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22777__$1,45,dchan);
} else
{if((state_val_22778 === 11))
{var inst_22674 = (state_22777[25]);var inst_22654 = (state_22777[14]);var inst_22674__$1 = cljs.core.seq(inst_22654);var state_22777__$1 = (function (){var statearr_22809 = state_22777;(statearr_22809[25] = inst_22674__$1);
return statearr_22809;
})();if(inst_22674__$1)
{var statearr_22810_22886 = state_22777__$1;(statearr_22810_22886[1] = 16);
} else
{var statearr_22811_22887 = state_22777__$1;(statearr_22811_22887[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 43))
{var state_22777__$1 = state_22777;var statearr_22812_22888 = state_22777__$1;(statearr_22812_22888[2] = null);
(statearr_22812_22888[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 12))
{var inst_22700 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22813_22889 = state_22777__$1;(statearr_22813_22889[2] = inst_22700);
(statearr_22813_22889[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 44))
{var inst_22770 = (state_22777[2]);var state_22777__$1 = (function (){var statearr_22814 = state_22777;(statearr_22814[26] = inst_22770);
return statearr_22814;
})();var statearr_22815_22890 = state_22777__$1;(statearr_22815_22890[2] = null);
(statearr_22815_22890[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 13))
{var inst_22664 = (state_22777[24]);var inst_22667 = cljs.core.async.close_BANG_(inst_22664);var state_22777__$1 = state_22777;var statearr_22816_22891 = state_22777__$1;(statearr_22816_22891[2] = inst_22667);
(statearr_22816_22891[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 45))
{var inst_22767 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22820_22892 = state_22777__$1;(statearr_22820_22892[2] = inst_22767);
(statearr_22820_22892[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 14))
{var state_22777__$1 = state_22777;var statearr_22821_22893 = state_22777__$1;(statearr_22821_22893[2] = null);
(statearr_22821_22893[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 15))
{var inst_22654 = (state_22777[14]);var inst_22655 = (state_22777[15]);var inst_22656 = (state_22777[16]);var inst_22657 = (state_22777[17]);var inst_22670 = (state_22777[2]);var inst_22671 = (inst_22657 + 1);var tmp22817 = inst_22654;var tmp22818 = inst_22655;var tmp22819 = inst_22656;var inst_22654__$1 = tmp22817;var inst_22655__$1 = tmp22818;var inst_22656__$1 = tmp22819;var inst_22657__$1 = inst_22671;var state_22777__$1 = (function (){var statearr_22822 = state_22777;(statearr_22822[27] = inst_22670);
(statearr_22822[14] = inst_22654__$1);
(statearr_22822[15] = inst_22655__$1);
(statearr_22822[16] = inst_22656__$1);
(statearr_22822[17] = inst_22657__$1);
return statearr_22822;
})();var statearr_22823_22894 = state_22777__$1;(statearr_22823_22894[2] = null);
(statearr_22823_22894[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 16))
{var inst_22674 = (state_22777[25]);var inst_22676 = cljs.core.chunked_seq_QMARK_(inst_22674);var state_22777__$1 = state_22777;if(inst_22676)
{var statearr_22824_22895 = state_22777__$1;(statearr_22824_22895[1] = 19);
} else
{var statearr_22825_22896 = state_22777__$1;(statearr_22825_22896[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 17))
{var state_22777__$1 = state_22777;var statearr_22826_22897 = state_22777__$1;(statearr_22826_22897[2] = null);
(statearr_22826_22897[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 18))
{var inst_22698 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22827_22898 = state_22777__$1;(statearr_22827_22898[2] = inst_22698);
(statearr_22827_22898[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 19))
{var inst_22674 = (state_22777[25]);var inst_22678 = cljs.core.chunk_first(inst_22674);var inst_22679 = cljs.core.chunk_rest(inst_22674);var inst_22680 = cljs.core.count(inst_22678);var inst_22654 = inst_22679;var inst_22655 = inst_22678;var inst_22656 = inst_22680;var inst_22657 = 0;var state_22777__$1 = (function (){var statearr_22828 = state_22777;(statearr_22828[14] = inst_22654);
(statearr_22828[15] = inst_22655);
(statearr_22828[16] = inst_22656);
(statearr_22828[17] = inst_22657);
return statearr_22828;
})();var statearr_22829_22899 = state_22777__$1;(statearr_22829_22899[2] = null);
(statearr_22829_22899[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 20))
{var inst_22674 = (state_22777[25]);var inst_22684 = cljs.core.first(inst_22674);var inst_22685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22684,0,null);var inst_22686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22684,1,null);var state_22777__$1 = (function (){var statearr_22830 = state_22777;(statearr_22830[28] = inst_22685);
return statearr_22830;
})();if(cljs.core.truth_(inst_22686))
{var statearr_22831_22900 = state_22777__$1;(statearr_22831_22900[1] = 22);
} else
{var statearr_22832_22901 = state_22777__$1;(statearr_22832_22901[1] = 23);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 21))
{var inst_22695 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22833_22902 = state_22777__$1;(statearr_22833_22902[2] = inst_22695);
(statearr_22833_22902[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 22))
{var inst_22685 = (state_22777[28]);var inst_22688 = cljs.core.async.close_BANG_(inst_22685);var state_22777__$1 = state_22777;var statearr_22834_22903 = state_22777__$1;(statearr_22834_22903[2] = inst_22688);
(statearr_22834_22903[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 23))
{var state_22777__$1 = state_22777;var statearr_22835_22904 = state_22777__$1;(statearr_22835_22904[2] = null);
(statearr_22835_22904[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 24))
{var inst_22674 = (state_22777[25]);var inst_22691 = (state_22777[2]);var inst_22692 = cljs.core.next(inst_22674);var inst_22654 = inst_22692;var inst_22655 = null;var inst_22656 = 0;var inst_22657 = 0;var state_22777__$1 = (function (){var statearr_22836 = state_22777;(statearr_22836[14] = inst_22654);
(statearr_22836[15] = inst_22655);
(statearr_22836[16] = inst_22656);
(statearr_22836[17] = inst_22657);
(statearr_22836[29] = inst_22691);
return statearr_22836;
})();var statearr_22837_22905 = state_22777__$1;(statearr_22837_22905[2] = null);
(statearr_22837_22905[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 25))
{var inst_22716 = (state_22777[12]);var inst_22715 = (state_22777[13]);var inst_22718 = (inst_22716 < inst_22715);var inst_22719 = inst_22718;var state_22777__$1 = state_22777;if(cljs.core.truth_(inst_22719))
{var statearr_22838_22906 = state_22777__$1;(statearr_22838_22906[1] = 27);
} else
{var statearr_22839_22907 = state_22777__$1;(statearr_22839_22907[1] = 28);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 26))
{var inst_22705 = (state_22777[19]);var inst_22763 = (state_22777[2]);var inst_22764 = cljs.core.seq(inst_22705);var state_22777__$1 = (function (){var statearr_22840 = state_22777;(statearr_22840[30] = inst_22763);
return statearr_22840;
})();if(inst_22764)
{var statearr_22841_22908 = state_22777__$1;(statearr_22841_22908[1] = 42);
} else
{var statearr_22842_22909 = state_22777__$1;(statearr_22842_22909[1] = 43);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 27))
{var inst_22714 = (state_22777[10]);var inst_22716 = (state_22777[12]);var inst_22721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22714,inst_22716);var state_22777__$1 = (function (){var statearr_22843 = state_22777;(statearr_22843[7] = inst_22721);
return statearr_22843;
})();var statearr_22844_22910 = state_22777__$1;(statearr_22844_22910[2] = null);
(statearr_22844_22910[1] = 32);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 28))
{var inst_22713 = (state_22777[11]);var inst_22734 = (state_22777[9]);var inst_22734__$1 = cljs.core.seq(inst_22713);var state_22777__$1 = (function (){var statearr_22848 = state_22777;(statearr_22848[9] = inst_22734__$1);
return statearr_22848;
})();if(inst_22734__$1)
{var statearr_22849_22911 = state_22777__$1;(statearr_22849_22911[1] = 33);
} else
{var statearr_22850_22912 = state_22777__$1;(statearr_22850_22912[1] = 34);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 29))
{var inst_22761 = (state_22777[2]);var state_22777__$1 = state_22777;var statearr_22851_22913 = state_22777__$1;(statearr_22851_22913[2] = inst_22761);
(statearr_22851_22913[1] = 26);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 30))
{var inst_22714 = (state_22777[10]);var inst_22713 = (state_22777[11]);var inst_22716 = (state_22777[12]);var inst_22715 = (state_22777[13]);var inst_22730 = (state_22777[2]);var inst_22731 = (inst_22716 + 1);var tmp22845 = inst_22714;var tmp22846 = inst_22713;var tmp22847 = inst_22715;var inst_22713__$1 = tmp22846;var inst_22714__$1 = tmp22845;var inst_22715__$1 = tmp22847;var inst_22716__$1 = inst_22731;var state_22777__$1 = (function (){var statearr_22852 = state_22777;(statearr_22852[10] = inst_22714__$1);
(statearr_22852[11] = inst_22713__$1);
(statearr_22852[12] = inst_22716__$1);
(statearr_22852[13] = inst_22715__$1);
(statearr_22852[31] = inst_22730);
return statearr_22852;
})();var statearr_22853_22914 = state_22777__$1;(statearr_22853_22914[2] = null);
(statearr_22853_22914[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22778 === 31))
{var inst_22721 = (state_22777[7]);var inst_22722 = (state_22777[2]);var inst_22723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22721);var state_22777__$1 = (function (){var statearr_22854 = state_22777;(statearr_22854[32] = inst_22722);
(statearr_22854[33] = inst_22723);
return statearr_22854;
})();var statearr_22855_22915 = state_22777__$1;(statearr_22855_22915[2] = inst_22724);
cljs.core.async.impl.ioc_helpers.process_exception(state_22777__$1);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_22859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22859[0] = state_machine__5507__auto__);
(statearr_22859[1] = 1);
return statearr_22859;
});
var state_machine__5507__auto____1 = (function (state_22777){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22777);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22860){if((e22860 instanceof Object))
{var ex__5510__auto__ = e22860;var statearr_22861_22916 = state_22777;(statearr_22861_22916[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22777);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22917 = state_22777;
state_22777 = G__22917;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22862 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22863);
return statearr_22862;
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
cljs.core.async.Mix = (function (){var obj22919 = {};return obj22919;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,null,cljs.core.constant$keyword$134,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$135);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$134);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$135,chs);var pauses = pick(cljs.core.constant$keyword$133,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,solos,cljs.core.constant$keyword$137,pick(cljs.core.constant$keyword$134,chs),cljs.core.constant$keyword$138,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$133)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23029 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23030){
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
this.meta23030 = meta23030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23029.cljs$lang$type = true;
cljs.core.async.t23029.cljs$lang$ctorStr = "cljs.core.async/t23029";
cljs.core.async.t23029.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23029");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23031){var self__ = this;
var _23031__$1 = this;return self__.meta23030;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23031,meta23030__$1){var self__ = this;
var _23031__$1 = this;return (new cljs.core.async.t23029(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23030__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23029 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23029(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23030){return (new cljs.core.async.t23029(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23030));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23029(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___23138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23096){var state_val_23097 = (state_23096[1]);if((state_val_23097 === 1))
{var inst_23035 = (state_23096[7]);var inst_23035__$1 = calc_state();var inst_23036 = cljs.core.seq_QMARK_(inst_23035__$1);var state_23096__$1 = (function (){var statearr_23098 = state_23096;(statearr_23098[7] = inst_23035__$1);
return statearr_23098;
})();if(inst_23036)
{var statearr_23099_23139 = state_23096__$1;(statearr_23099_23139[1] = 2);
} else
{var statearr_23100_23140 = state_23096__$1;(statearr_23100_23140[1] = 3);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 2))
{var inst_23035 = (state_23096[7]);var inst_23038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23035);var state_23096__$1 = state_23096;var statearr_23101_23141 = state_23096__$1;(statearr_23101_23141[2] = inst_23038);
(statearr_23101_23141[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 3))
{var inst_23035 = (state_23096[7]);var state_23096__$1 = state_23096;var statearr_23102_23142 = state_23096__$1;(statearr_23102_23142[2] = inst_23035);
(statearr_23102_23142[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 4))
{var inst_23035 = (state_23096[7]);var inst_23041 = (state_23096[2]);var inst_23042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23041,cljs.core.constant$keyword$138);var inst_23043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23041,cljs.core.constant$keyword$137);var inst_23044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23041,cljs.core.constant$keyword$136);var inst_23045 = inst_23035;var state_23096__$1 = (function (){var statearr_23103 = state_23096;(statearr_23103[8] = inst_23044);
(statearr_23103[9] = inst_23045);
(statearr_23103[10] = inst_23042);
(statearr_23103[11] = inst_23043);
return statearr_23103;
})();var statearr_23104_23143 = state_23096__$1;(statearr_23104_23143[2] = null);
(statearr_23104_23143[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 5))
{var inst_23045 = (state_23096[9]);var inst_23048 = cljs.core.seq_QMARK_(inst_23045);var state_23096__$1 = state_23096;if(inst_23048)
{var statearr_23105_23144 = state_23096__$1;(statearr_23105_23144[1] = 7);
} else
{var statearr_23106_23145 = state_23096__$1;(statearr_23106_23145[1] = 8);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 6))
{var inst_23094 = (state_23096[2]);var state_23096__$1 = state_23096;return cljs.core.async.impl.ioc_helpers.return_chan(state_23096__$1,inst_23094);
} else
{if((state_val_23097 === 7))
{var inst_23045 = (state_23096[9]);var inst_23050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23045);var state_23096__$1 = state_23096;var statearr_23107_23146 = state_23096__$1;(statearr_23107_23146[2] = inst_23050);
(statearr_23107_23146[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 8))
{var inst_23045 = (state_23096[9]);var state_23096__$1 = state_23096;var statearr_23108_23147 = state_23096__$1;(statearr_23108_23147[2] = inst_23045);
(statearr_23108_23147[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 9))
{var inst_23053 = (state_23096[12]);var inst_23053__$1 = (state_23096[2]);var inst_23054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23053__$1,cljs.core.constant$keyword$138);var inst_23055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23053__$1,cljs.core.constant$keyword$137);var inst_23056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23053__$1,cljs.core.constant$keyword$136);var state_23096__$1 = (function (){var statearr_23109 = state_23096;(statearr_23109[13] = inst_23055);
(statearr_23109[14] = inst_23056);
(statearr_23109[12] = inst_23053__$1);
return statearr_23109;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23096__$1,10,inst_23054);
} else
{if((state_val_23097 === 10))
{var inst_23061 = (state_23096[15]);var inst_23060 = (state_23096[16]);var inst_23059 = (state_23096[2]);var inst_23060__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23059,0,null);var inst_23061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23059,1,null);var inst_23062 = (inst_23060__$1 == null);var inst_23063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23061__$1,change);var inst_23064 = (inst_23062) || (inst_23063);var state_23096__$1 = (function (){var statearr_23110 = state_23096;(statearr_23110[15] = inst_23061__$1);
(statearr_23110[16] = inst_23060__$1);
return statearr_23110;
})();if(cljs.core.truth_(inst_23064))
{var statearr_23111_23148 = state_23096__$1;(statearr_23111_23148[1] = 11);
} else
{var statearr_23112_23149 = state_23096__$1;(statearr_23112_23149[1] = 12);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 11))
{var inst_23060 = (state_23096[16]);var inst_23066 = (inst_23060 == null);var state_23096__$1 = state_23096;if(cljs.core.truth_(inst_23066))
{var statearr_23113_23150 = state_23096__$1;(statearr_23113_23150[1] = 14);
} else
{var statearr_23114_23151 = state_23096__$1;(statearr_23114_23151[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 12))
{var inst_23075 = (state_23096[17]);var inst_23056 = (state_23096[14]);var inst_23061 = (state_23096[15]);var inst_23075__$1 = (inst_23056.cljs$core$IFn$_invoke$arity$1 ? inst_23056.cljs$core$IFn$_invoke$arity$1(inst_23061) : inst_23056.call(null,inst_23061));var state_23096__$1 = (function (){var statearr_23115 = state_23096;(statearr_23115[17] = inst_23075__$1);
return statearr_23115;
})();if(cljs.core.truth_(inst_23075__$1))
{var statearr_23116_23152 = state_23096__$1;(statearr_23116_23152[1] = 17);
} else
{var statearr_23117_23153 = state_23096__$1;(statearr_23117_23153[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 13))
{var inst_23092 = (state_23096[2]);var state_23096__$1 = state_23096;var statearr_23118_23154 = state_23096__$1;(statearr_23118_23154[2] = inst_23092);
(statearr_23118_23154[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 14))
{var inst_23061 = (state_23096[15]);var inst_23068 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23061);var state_23096__$1 = state_23096;var statearr_23119_23155 = state_23096__$1;(statearr_23119_23155[2] = inst_23068);
(statearr_23119_23155[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 15))
{var state_23096__$1 = state_23096;var statearr_23120_23156 = state_23096__$1;(statearr_23120_23156[2] = null);
(statearr_23120_23156[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 16))
{var inst_23071 = (state_23096[2]);var inst_23072 = calc_state();var inst_23045 = inst_23072;var state_23096__$1 = (function (){var statearr_23121 = state_23096;(statearr_23121[18] = inst_23071);
(statearr_23121[9] = inst_23045);
return statearr_23121;
})();var statearr_23122_23157 = state_23096__$1;(statearr_23122_23157[2] = null);
(statearr_23122_23157[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 17))
{var inst_23075 = (state_23096[17]);var state_23096__$1 = state_23096;var statearr_23123_23158 = state_23096__$1;(statearr_23123_23158[2] = inst_23075);
(statearr_23123_23158[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 18))
{var inst_23055 = (state_23096[13]);var inst_23056 = (state_23096[14]);var inst_23061 = (state_23096[15]);var inst_23078 = cljs.core.empty_QMARK_(inst_23056);var inst_23079 = (inst_23055.cljs$core$IFn$_invoke$arity$1 ? inst_23055.cljs$core$IFn$_invoke$arity$1(inst_23061) : inst_23055.call(null,inst_23061));var inst_23080 = cljs.core.not(inst_23079);var inst_23081 = (inst_23078) && (inst_23080);var state_23096__$1 = state_23096;var statearr_23124_23159 = state_23096__$1;(statearr_23124_23159[2] = inst_23081);
(statearr_23124_23159[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 19))
{var inst_23083 = (state_23096[2]);var state_23096__$1 = state_23096;if(cljs.core.truth_(inst_23083))
{var statearr_23125_23160 = state_23096__$1;(statearr_23125_23160[1] = 20);
} else
{var statearr_23126_23161 = state_23096__$1;(statearr_23126_23161[1] = 21);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 20))
{var inst_23060 = (state_23096[16]);var state_23096__$1 = state_23096;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23096__$1,23,out,inst_23060);
} else
{if((state_val_23097 === 21))
{var state_23096__$1 = state_23096;var statearr_23127_23162 = state_23096__$1;(statearr_23127_23162[2] = null);
(statearr_23127_23162[1] = 22);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 22))
{var inst_23053 = (state_23096[12]);var inst_23089 = (state_23096[2]);var inst_23045 = inst_23053;var state_23096__$1 = (function (){var statearr_23128 = state_23096;(statearr_23128[19] = inst_23089);
(statearr_23128[9] = inst_23045);
return statearr_23128;
})();var statearr_23129_23163 = state_23096__$1;(statearr_23129_23163[2] = null);
(statearr_23129_23163[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23097 === 23))
{var inst_23086 = (state_23096[2]);var state_23096__$1 = state_23096;var statearr_23130_23164 = state_23096__$1;(statearr_23130_23164[2] = inst_23086);
(statearr_23130_23164[1] = 22);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23134[0] = state_machine__5507__auto__);
(statearr_23134[1] = 1);
return statearr_23134;
});
var state_machine__5507__auto____1 = (function (state_23096){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23096);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23135){if((e23135 instanceof Object))
{var ex__5510__auto__ = e23135;var statearr_23136_23165 = state_23096;(statearr_23136_23165[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23096);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23166 = state_23096;
state_23096 = G__23166;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23096){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23137 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23138);
return statearr_23137;
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
cljs.core.async.Pub = (function (){var obj23168 = {};return obj23168;
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
return (function (p1__23169_SHARP_){if(cljs.core.truth_((p1__23169_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23169_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23169_SHARP_.call(null,topic))))
{return p1__23169_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23169_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23294 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23295){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23295 = meta23295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23294.cljs$lang$type = true;
cljs.core.async.t23294.cljs$lang$ctorStr = "cljs.core.async/t23294";
cljs.core.async.t23294.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23294");
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23294.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23296){var self__ = this;
var _23296__$1 = this;return self__.meta23295;
});})(mults,ensure_mult))
;
cljs.core.async.t23294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23296,meta23295__$1){var self__ = this;
var _23296__$1 = this;return (new cljs.core.async.t23294(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23295__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23294 = ((function (mults,ensure_mult){
return (function __GT_t23294(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23295){return (new cljs.core.async.t23294(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23295));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23294(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___23418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23370){var state_val_23371 = (state_23370[1]);if((state_val_23371 === 1))
{var state_23370__$1 = state_23370;var statearr_23372_23419 = state_23370__$1;(statearr_23372_23419[2] = null);
(statearr_23372_23419[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 2))
{var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23370__$1,4,ch);
} else
{if((state_val_23371 === 3))
{var inst_23368 = (state_23370[2]);var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.return_chan(state_23370__$1,inst_23368);
} else
{if((state_val_23371 === 4))
{var inst_23299 = (state_23370[7]);var inst_23299__$1 = (state_23370[2]);var inst_23300 = (inst_23299__$1 == null);var state_23370__$1 = (function (){var statearr_23373 = state_23370;(statearr_23373[7] = inst_23299__$1);
return statearr_23373;
})();if(cljs.core.truth_(inst_23300))
{var statearr_23374_23420 = state_23370__$1;(statearr_23374_23420[1] = 5);
} else
{var statearr_23375_23421 = state_23370__$1;(statearr_23375_23421[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 5))
{var inst_23306 = cljs.core.deref(mults);var inst_23307 = cljs.core.vals(inst_23306);var inst_23308 = cljs.core.seq(inst_23307);var inst_23309 = inst_23308;var inst_23310 = null;var inst_23311 = 0;var inst_23312 = 0;var state_23370__$1 = (function (){var statearr_23376 = state_23370;(statearr_23376[8] = inst_23312);
(statearr_23376[9] = inst_23311);
(statearr_23376[10] = inst_23310);
(statearr_23376[11] = inst_23309);
return statearr_23376;
})();var statearr_23377_23422 = state_23370__$1;(statearr_23377_23422[2] = null);
(statearr_23377_23422[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 6))
{var inst_23347 = (state_23370[12]);var inst_23349 = (state_23370[13]);var inst_23299 = (state_23370[7]);var inst_23347__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23299) : topic_fn.call(null,inst_23299));var inst_23348 = cljs.core.deref(mults);var inst_23349__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23348,inst_23347__$1);var state_23370__$1 = (function (){var statearr_23378 = state_23370;(statearr_23378[12] = inst_23347__$1);
(statearr_23378[13] = inst_23349__$1);
return statearr_23378;
})();if(cljs.core.truth_(inst_23349__$1))
{var statearr_23379_23423 = state_23370__$1;(statearr_23379_23423[1] = 19);
} else
{var statearr_23380_23424 = state_23370__$1;(statearr_23380_23424[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 7))
{var inst_23366 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23381_23425 = state_23370__$1;(statearr_23381_23425[2] = inst_23366);
(statearr_23381_23425[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 8))
{var inst_23312 = (state_23370[8]);var inst_23311 = (state_23370[9]);var inst_23314 = (inst_23312 < inst_23311);var inst_23315 = inst_23314;var state_23370__$1 = state_23370;if(cljs.core.truth_(inst_23315))
{var statearr_23385_23426 = state_23370__$1;(statearr_23385_23426[1] = 10);
} else
{var statearr_23386_23427 = state_23370__$1;(statearr_23386_23427[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 9))
{var inst_23345 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23387_23428 = state_23370__$1;(statearr_23387_23428[2] = inst_23345);
(statearr_23387_23428[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 10))
{var inst_23312 = (state_23370[8]);var inst_23311 = (state_23370[9]);var inst_23310 = (state_23370[10]);var inst_23309 = (state_23370[11]);var inst_23317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23310,inst_23312);var inst_23318 = cljs.core.async.muxch_STAR_(inst_23317);var inst_23319 = cljs.core.async.close_BANG_(inst_23318);var inst_23320 = (inst_23312 + 1);var tmp23382 = inst_23311;var tmp23383 = inst_23310;var tmp23384 = inst_23309;var inst_23309__$1 = tmp23384;var inst_23310__$1 = tmp23383;var inst_23311__$1 = tmp23382;var inst_23312__$1 = inst_23320;var state_23370__$1 = (function (){var statearr_23388 = state_23370;(statearr_23388[8] = inst_23312__$1);
(statearr_23388[9] = inst_23311__$1);
(statearr_23388[10] = inst_23310__$1);
(statearr_23388[11] = inst_23309__$1);
(statearr_23388[14] = inst_23319);
return statearr_23388;
})();var statearr_23389_23429 = state_23370__$1;(statearr_23389_23429[2] = null);
(statearr_23389_23429[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 11))
{var inst_23323 = (state_23370[15]);var inst_23309 = (state_23370[11]);var inst_23323__$1 = cljs.core.seq(inst_23309);var state_23370__$1 = (function (){var statearr_23390 = state_23370;(statearr_23390[15] = inst_23323__$1);
return statearr_23390;
})();if(inst_23323__$1)
{var statearr_23391_23430 = state_23370__$1;(statearr_23391_23430[1] = 13);
} else
{var statearr_23392_23431 = state_23370__$1;(statearr_23392_23431[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 12))
{var inst_23343 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23393_23432 = state_23370__$1;(statearr_23393_23432[2] = inst_23343);
(statearr_23393_23432[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 13))
{var inst_23323 = (state_23370[15]);var inst_23325 = cljs.core.chunked_seq_QMARK_(inst_23323);var state_23370__$1 = state_23370;if(inst_23325)
{var statearr_23394_23433 = state_23370__$1;(statearr_23394_23433[1] = 16);
} else
{var statearr_23395_23434 = state_23370__$1;(statearr_23395_23434[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 14))
{var state_23370__$1 = state_23370;var statearr_23396_23435 = state_23370__$1;(statearr_23396_23435[2] = null);
(statearr_23396_23435[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 15))
{var inst_23341 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23397_23436 = state_23370__$1;(statearr_23397_23436[2] = inst_23341);
(statearr_23397_23436[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 16))
{var inst_23323 = (state_23370[15]);var inst_23327 = cljs.core.chunk_first(inst_23323);var inst_23328 = cljs.core.chunk_rest(inst_23323);var inst_23329 = cljs.core.count(inst_23327);var inst_23309 = inst_23328;var inst_23310 = inst_23327;var inst_23311 = inst_23329;var inst_23312 = 0;var state_23370__$1 = (function (){var statearr_23398 = state_23370;(statearr_23398[8] = inst_23312);
(statearr_23398[9] = inst_23311);
(statearr_23398[10] = inst_23310);
(statearr_23398[11] = inst_23309);
return statearr_23398;
})();var statearr_23399_23437 = state_23370__$1;(statearr_23399_23437[2] = null);
(statearr_23399_23437[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 17))
{var inst_23323 = (state_23370[15]);var inst_23332 = cljs.core.first(inst_23323);var inst_23333 = cljs.core.async.muxch_STAR_(inst_23332);var inst_23334 = cljs.core.async.close_BANG_(inst_23333);var inst_23335 = cljs.core.next(inst_23323);var inst_23309 = inst_23335;var inst_23310 = null;var inst_23311 = 0;var inst_23312 = 0;var state_23370__$1 = (function (){var statearr_23400 = state_23370;(statearr_23400[8] = inst_23312);
(statearr_23400[9] = inst_23311);
(statearr_23400[10] = inst_23310);
(statearr_23400[11] = inst_23309);
(statearr_23400[16] = inst_23334);
return statearr_23400;
})();var statearr_23401_23438 = state_23370__$1;(statearr_23401_23438[2] = null);
(statearr_23401_23438[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 18))
{var inst_23338 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23402_23439 = state_23370__$1;(statearr_23402_23439[2] = inst_23338);
(statearr_23402_23439[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 19))
{var state_23370__$1 = state_23370;var statearr_23403_23440 = state_23370__$1;(statearr_23403_23440[2] = null);
(statearr_23403_23440[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 20))
{var state_23370__$1 = state_23370;var statearr_23404_23441 = state_23370__$1;(statearr_23404_23441[2] = null);
(statearr_23404_23441[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 21))
{var inst_23363 = (state_23370[2]);var state_23370__$1 = (function (){var statearr_23405 = state_23370;(statearr_23405[17] = inst_23363);
return statearr_23405;
})();var statearr_23406_23442 = state_23370__$1;(statearr_23406_23442[2] = null);
(statearr_23406_23442[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 22))
{var inst_23360 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23407_23443 = state_23370__$1;(statearr_23407_23443[2] = inst_23360);
(statearr_23407_23443[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 23))
{var inst_23347 = (state_23370[12]);var inst_23351 = (state_23370[2]);var inst_23352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23347);var state_23370__$1 = (function (){var statearr_23408 = state_23370;(statearr_23408[18] = inst_23351);
return statearr_23408;
})();var statearr_23409_23444 = state_23370__$1;(statearr_23409_23444[2] = inst_23352);
cljs.core.async.impl.ioc_helpers.process_exception(state_23370__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23371 === 24))
{var inst_23349 = (state_23370[13]);var inst_23299 = (state_23370[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23370,23,Object,null,22);var inst_23356 = cljs.core.async.muxch_STAR_(inst_23349);var state_23370__$1 = state_23370;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23370__$1,25,inst_23356,inst_23299);
} else
{if((state_val_23371 === 25))
{var inst_23358 = (state_23370[2]);var state_23370__$1 = state_23370;var statearr_23410_23445 = state_23370__$1;(statearr_23410_23445[2] = inst_23358);
cljs.core.async.impl.ioc_helpers.process_exception(state_23370__$1);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23414[0] = state_machine__5507__auto__);
(statearr_23414[1] = 1);
return statearr_23414;
});
var state_machine__5507__auto____1 = (function (state_23370){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23370);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23415){if((e23415 instanceof Object))
{var ex__5510__auto__ = e23415;var statearr_23416_23446 = state_23370;(statearr_23416_23446[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23370);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23447 = state_23370;
state_23370 = G__23447;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23370){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23417 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23418);
return statearr_23417;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___23584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23554){var state_val_23555 = (state_23554[1]);if((state_val_23555 === 1))
{var state_23554__$1 = state_23554;var statearr_23556_23585 = state_23554__$1;(statearr_23556_23585[2] = null);
(statearr_23556_23585[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 2))
{var inst_23517 = cljs.core.reset_BANG_(dctr,cnt);var inst_23518 = 0;var state_23554__$1 = (function (){var statearr_23557 = state_23554;(statearr_23557[7] = inst_23517);
(statearr_23557[8] = inst_23518);
return statearr_23557;
})();var statearr_23558_23586 = state_23554__$1;(statearr_23558_23586[2] = null);
(statearr_23558_23586[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 3))
{var inst_23552 = (state_23554[2]);var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.return_chan(state_23554__$1,inst_23552);
} else
{if((state_val_23555 === 4))
{var inst_23518 = (state_23554[8]);var inst_23520 = (inst_23518 < cnt);var state_23554__$1 = state_23554;if(cljs.core.truth_(inst_23520))
{var statearr_23559_23587 = state_23554__$1;(statearr_23559_23587[1] = 6);
} else
{var statearr_23560_23588 = state_23554__$1;(statearr_23560_23588[1] = 7);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 5))
{var inst_23538 = (state_23554[2]);var state_23554__$1 = (function (){var statearr_23561 = state_23554;(statearr_23561[9] = inst_23538);
return statearr_23561;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23554__$1,12,dchan);
} else
{if((state_val_23555 === 6))
{var state_23554__$1 = state_23554;var statearr_23562_23589 = state_23554__$1;(statearr_23562_23589[2] = null);
(statearr_23562_23589[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 7))
{var state_23554__$1 = state_23554;var statearr_23563_23590 = state_23554__$1;(statearr_23563_23590[2] = null);
(statearr_23563_23590[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 8))
{var inst_23536 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23564_23591 = state_23554__$1;(statearr_23564_23591[2] = inst_23536);
(statearr_23564_23591[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 9))
{var inst_23518 = (state_23554[8]);var inst_23531 = (state_23554[2]);var inst_23532 = (inst_23518 + 1);var inst_23518__$1 = inst_23532;var state_23554__$1 = (function (){var statearr_23565 = state_23554;(statearr_23565[8] = inst_23518__$1);
(statearr_23565[10] = inst_23531);
return statearr_23565;
})();var statearr_23566_23592 = state_23554__$1;(statearr_23566_23592[2] = null);
(statearr_23566_23592[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 10))
{var inst_23522 = (state_23554[2]);var inst_23523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23554__$1 = (function (){var statearr_23567 = state_23554;(statearr_23567[11] = inst_23522);
return statearr_23567;
})();var statearr_23568_23593 = state_23554__$1;(statearr_23568_23593[2] = inst_23523);
cljs.core.async.impl.ioc_helpers.process_exception(state_23554__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 11))
{var inst_23518 = (state_23554[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23554,10,Object,null,9);var inst_23527 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23518) : chs__$1.call(null,inst_23518));var inst_23528 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23518) : done.call(null,inst_23518));var inst_23529 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23527,inst_23528);var state_23554__$1 = state_23554;var statearr_23569_23594 = state_23554__$1;(statearr_23569_23594[2] = inst_23529);
cljs.core.async.impl.ioc_helpers.process_exception(state_23554__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 12))
{var inst_23540 = (state_23554[12]);var inst_23540__$1 = (state_23554[2]);var inst_23541 = cljs.core.some(cljs.core.nil_QMARK_,inst_23540__$1);var state_23554__$1 = (function (){var statearr_23570 = state_23554;(statearr_23570[12] = inst_23540__$1);
return statearr_23570;
})();if(cljs.core.truth_(inst_23541))
{var statearr_23571_23595 = state_23554__$1;(statearr_23571_23595[1] = 13);
} else
{var statearr_23572_23596 = state_23554__$1;(statearr_23572_23596[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 13))
{var inst_23543 = cljs.core.async.close_BANG_(out);var state_23554__$1 = state_23554;var statearr_23573_23597 = state_23554__$1;(statearr_23573_23597[2] = inst_23543);
(statearr_23573_23597[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 14))
{var inst_23540 = (state_23554[12]);var inst_23545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23540);var state_23554__$1 = state_23554;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23554__$1,16,out,inst_23545);
} else
{if((state_val_23555 === 15))
{var inst_23550 = (state_23554[2]);var state_23554__$1 = state_23554;var statearr_23574_23598 = state_23554__$1;(statearr_23574_23598[2] = inst_23550);
(statearr_23574_23598[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23555 === 16))
{var inst_23547 = (state_23554[2]);var state_23554__$1 = (function (){var statearr_23575 = state_23554;(statearr_23575[13] = inst_23547);
return statearr_23575;
})();var statearr_23576_23599 = state_23554__$1;(statearr_23576_23599[2] = null);
(statearr_23576_23599[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23580[0] = state_machine__5507__auto__);
(statearr_23580[1] = 1);
return statearr_23580;
});
var state_machine__5507__auto____1 = (function (state_23554){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23554);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23581){if((e23581 instanceof Object))
{var ex__5510__auto__ = e23581;var statearr_23582_23600 = state_23554;(statearr_23582_23600[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23554);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23601 = state_23554;
state_23554 = G__23601;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23554){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23554);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23685){var state_val_23686 = (state_23685[1]);if((state_val_23686 === 1))
{var inst_23656 = cljs.core.vec(chs);var inst_23657 = inst_23656;var state_23685__$1 = (function (){var statearr_23687 = state_23685;(statearr_23687[7] = inst_23657);
return statearr_23687;
})();var statearr_23688_23710 = state_23685__$1;(statearr_23688_23710[2] = null);
(statearr_23688_23710[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 2))
{var inst_23657 = (state_23685[7]);var inst_23659 = cljs.core.count(inst_23657);var inst_23660 = (inst_23659 > 0);var state_23685__$1 = state_23685;if(cljs.core.truth_(inst_23660))
{var statearr_23689_23711 = state_23685__$1;(statearr_23689_23711[1] = 4);
} else
{var statearr_23690_23712 = state_23685__$1;(statearr_23690_23712[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 3))
{var inst_23683 = (state_23685[2]);var state_23685__$1 = state_23685;return cljs.core.async.impl.ioc_helpers.return_chan(state_23685__$1,inst_23683);
} else
{if((state_val_23686 === 4))
{var inst_23657 = (state_23685[7]);var state_23685__$1 = state_23685;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23685__$1,7,inst_23657);
} else
{if((state_val_23686 === 5))
{var inst_23679 = cljs.core.async.close_BANG_(out);var state_23685__$1 = state_23685;var statearr_23691_23713 = state_23685__$1;(statearr_23691_23713[2] = inst_23679);
(statearr_23691_23713[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 6))
{var inst_23681 = (state_23685[2]);var state_23685__$1 = state_23685;var statearr_23692_23714 = state_23685__$1;(statearr_23692_23714[2] = inst_23681);
(statearr_23692_23714[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 7))
{var inst_23665 = (state_23685[8]);var inst_23664 = (state_23685[9]);var inst_23664__$1 = (state_23685[2]);var inst_23665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664__$1,0,null);var inst_23666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23664__$1,1,null);var inst_23667 = (inst_23665__$1 == null);var state_23685__$1 = (function (){var statearr_23693 = state_23685;(statearr_23693[10] = inst_23666);
(statearr_23693[8] = inst_23665__$1);
(statearr_23693[9] = inst_23664__$1);
return statearr_23693;
})();if(cljs.core.truth_(inst_23667))
{var statearr_23694_23715 = state_23685__$1;(statearr_23694_23715[1] = 8);
} else
{var statearr_23695_23716 = state_23685__$1;(statearr_23695_23716[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 8))
{var inst_23666 = (state_23685[10]);var inst_23665 = (state_23685[8]);var inst_23664 = (state_23685[9]);var inst_23657 = (state_23685[7]);var inst_23669 = (function (){var c = inst_23666;var v = inst_23665;var vec__23662 = inst_23664;var cs = inst_23657;return ((function (c,v,vec__23662,cs,inst_23666,inst_23665,inst_23664,inst_23657,state_val_23686){
return (function (p1__23602_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23602_SHARP_);
});
;})(c,v,vec__23662,cs,inst_23666,inst_23665,inst_23664,inst_23657,state_val_23686))
})();var inst_23670 = cljs.core.filterv(inst_23669,inst_23657);var inst_23657__$1 = inst_23670;var state_23685__$1 = (function (){var statearr_23696 = state_23685;(statearr_23696[7] = inst_23657__$1);
return statearr_23696;
})();var statearr_23697_23717 = state_23685__$1;(statearr_23697_23717[2] = null);
(statearr_23697_23717[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 9))
{var inst_23665 = (state_23685[8]);var state_23685__$1 = state_23685;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23685__$1,11,out,inst_23665);
} else
{if((state_val_23686 === 10))
{var inst_23677 = (state_23685[2]);var state_23685__$1 = state_23685;var statearr_23699_23718 = state_23685__$1;(statearr_23699_23718[2] = inst_23677);
(statearr_23699_23718[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23686 === 11))
{var inst_23657 = (state_23685[7]);var inst_23674 = (state_23685[2]);var tmp23698 = inst_23657;var inst_23657__$1 = tmp23698;var state_23685__$1 = (function (){var statearr_23700 = state_23685;(statearr_23700[11] = inst_23674);
(statearr_23700[7] = inst_23657__$1);
return statearr_23700;
})();var statearr_23701_23719 = state_23685__$1;(statearr_23701_23719[2] = null);
(statearr_23701_23719[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23705 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23705[0] = state_machine__5507__auto__);
(statearr_23705[1] = 1);
return statearr_23705;
});
var state_machine__5507__auto____1 = (function (state_23685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23685);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23706){if((e23706 instanceof Object))
{var ex__5510__auto__ = e23706;var statearr_23707_23720 = state_23685;(statearr_23707_23720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23685);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23721 = state_23685;
state_23685 = G__23721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23708 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23709);
return statearr_23708;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23791){var state_val_23792 = (state_23791[1]);if((state_val_23792 === 1))
{var inst_23768 = 0;var state_23791__$1 = (function (){var statearr_23793 = state_23791;(statearr_23793[7] = inst_23768);
return statearr_23793;
})();var statearr_23794_23815 = state_23791__$1;(statearr_23794_23815[2] = null);
(statearr_23794_23815[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 2))
{var inst_23768 = (state_23791[7]);var inst_23770 = (inst_23768 < n);var state_23791__$1 = state_23791;if(cljs.core.truth_(inst_23770))
{var statearr_23795_23816 = state_23791__$1;(statearr_23795_23816[1] = 4);
} else
{var statearr_23796_23817 = state_23791__$1;(statearr_23796_23817[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 3))
{var inst_23788 = (state_23791[2]);var inst_23789 = cljs.core.async.close_BANG_(out);var state_23791__$1 = (function (){var statearr_23797 = state_23791;(statearr_23797[8] = inst_23788);
return statearr_23797;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23791__$1,inst_23789);
} else
{if((state_val_23792 === 4))
{var state_23791__$1 = state_23791;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23791__$1,7,ch);
} else
{if((state_val_23792 === 5))
{var state_23791__$1 = state_23791;var statearr_23798_23818 = state_23791__$1;(statearr_23798_23818[2] = null);
(statearr_23798_23818[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 6))
{var inst_23786 = (state_23791[2]);var state_23791__$1 = state_23791;var statearr_23799_23819 = state_23791__$1;(statearr_23799_23819[2] = inst_23786);
(statearr_23799_23819[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 7))
{var inst_23773 = (state_23791[9]);var inst_23773__$1 = (state_23791[2]);var inst_23774 = (inst_23773__$1 == null);var inst_23775 = cljs.core.not(inst_23774);var state_23791__$1 = (function (){var statearr_23800 = state_23791;(statearr_23800[9] = inst_23773__$1);
return statearr_23800;
})();if(inst_23775)
{var statearr_23801_23820 = state_23791__$1;(statearr_23801_23820[1] = 8);
} else
{var statearr_23802_23821 = state_23791__$1;(statearr_23802_23821[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 8))
{var inst_23773 = (state_23791[9]);var state_23791__$1 = state_23791;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23791__$1,11,out,inst_23773);
} else
{if((state_val_23792 === 9))
{var state_23791__$1 = state_23791;var statearr_23803_23822 = state_23791__$1;(statearr_23803_23822[2] = null);
(statearr_23803_23822[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 10))
{var inst_23783 = (state_23791[2]);var state_23791__$1 = state_23791;var statearr_23804_23823 = state_23791__$1;(statearr_23804_23823[2] = inst_23783);
(statearr_23804_23823[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23792 === 11))
{var inst_23768 = (state_23791[7]);var inst_23778 = (state_23791[2]);var inst_23779 = (inst_23768 + 1);var inst_23768__$1 = inst_23779;var state_23791__$1 = (function (){var statearr_23805 = state_23791;(statearr_23805[10] = inst_23778);
(statearr_23805[7] = inst_23768__$1);
return statearr_23805;
})();var statearr_23806_23824 = state_23791__$1;(statearr_23806_23824[2] = null);
(statearr_23806_23824[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23810 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23810[0] = state_machine__5507__auto__);
(statearr_23810[1] = 1);
return statearr_23810;
});
var state_machine__5507__auto____1 = (function (state_23791){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23791);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23811){if((e23811 instanceof Object))
{var ex__5510__auto__ = e23811;var statearr_23812_23825 = state_23791;(statearr_23812_23825[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23791);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23826 = state_23791;
state_23791 = G__23826;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23791){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23813 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23814);
return statearr_23813;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23898){var state_val_23899 = (state_23898[1]);if((state_val_23899 === 1))
{var inst_23875 = null;var state_23898__$1 = (function (){var statearr_23900 = state_23898;(statearr_23900[7] = inst_23875);
return statearr_23900;
})();var statearr_23901_23924 = state_23898__$1;(statearr_23901_23924[2] = null);
(statearr_23901_23924[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 2))
{var state_23898__$1 = state_23898;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23898__$1,4,ch);
} else
{if((state_val_23899 === 3))
{var inst_23895 = (state_23898[2]);var inst_23896 = cljs.core.async.close_BANG_(out);var state_23898__$1 = (function (){var statearr_23902 = state_23898;(statearr_23902[8] = inst_23895);
return statearr_23902;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23898__$1,inst_23896);
} else
{if((state_val_23899 === 4))
{var inst_23878 = (state_23898[9]);var inst_23878__$1 = (state_23898[2]);var inst_23879 = (inst_23878__$1 == null);var inst_23880 = cljs.core.not(inst_23879);var state_23898__$1 = (function (){var statearr_23903 = state_23898;(statearr_23903[9] = inst_23878__$1);
return statearr_23903;
})();if(inst_23880)
{var statearr_23904_23925 = state_23898__$1;(statearr_23904_23925[1] = 5);
} else
{var statearr_23905_23926 = state_23898__$1;(statearr_23905_23926[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 5))
{var inst_23875 = (state_23898[7]);var inst_23878 = (state_23898[9]);var inst_23882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23878,inst_23875);var state_23898__$1 = state_23898;if(inst_23882)
{var statearr_23906_23927 = state_23898__$1;(statearr_23906_23927[1] = 8);
} else
{var statearr_23907_23928 = state_23898__$1;(statearr_23907_23928[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 6))
{var state_23898__$1 = state_23898;var statearr_23909_23929 = state_23898__$1;(statearr_23909_23929[2] = null);
(statearr_23909_23929[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 7))
{var inst_23893 = (state_23898[2]);var state_23898__$1 = state_23898;var statearr_23910_23930 = state_23898__$1;(statearr_23910_23930[2] = inst_23893);
(statearr_23910_23930[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 8))
{var inst_23875 = (state_23898[7]);var tmp23908 = inst_23875;var inst_23875__$1 = tmp23908;var state_23898__$1 = (function (){var statearr_23911 = state_23898;(statearr_23911[7] = inst_23875__$1);
return statearr_23911;
})();var statearr_23912_23931 = state_23898__$1;(statearr_23912_23931[2] = null);
(statearr_23912_23931[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 9))
{var inst_23878 = (state_23898[9]);var state_23898__$1 = state_23898;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23898__$1,11,out,inst_23878);
} else
{if((state_val_23899 === 10))
{var inst_23890 = (state_23898[2]);var state_23898__$1 = state_23898;var statearr_23913_23932 = state_23898__$1;(statearr_23913_23932[2] = inst_23890);
(statearr_23913_23932[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23899 === 11))
{var inst_23878 = (state_23898[9]);var inst_23887 = (state_23898[2]);var inst_23875 = inst_23878;var state_23898__$1 = (function (){var statearr_23914 = state_23898;(statearr_23914[7] = inst_23875);
(statearr_23914[10] = inst_23887);
return statearr_23914;
})();var statearr_23915_23933 = state_23898__$1;(statearr_23915_23933[2] = null);
(statearr_23915_23933[1] = 2);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_23919 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23919[0] = state_machine__5507__auto__);
(statearr_23919[1] = 1);
return statearr_23919;
});
var state_machine__5507__auto____1 = (function (state_23898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23898);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23920){if((e23920 instanceof Object))
{var ex__5510__auto__ = e23920;var statearr_23921_23934 = state_23898;(statearr_23921_23934[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23898);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23935 = state_23898;
state_23898 = G__23935;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23922 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23923);
return statearr_23922;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24040){var state_val_24041 = (state_24040[1]);if((state_val_24041 === 1))
{var inst_24003 = (new Array(n));var inst_24004 = inst_24003;var inst_24005 = 0;var state_24040__$1 = (function (){var statearr_24042 = state_24040;(statearr_24042[7] = inst_24005);
(statearr_24042[8] = inst_24004);
return statearr_24042;
})();var statearr_24043_24071 = state_24040__$1;(statearr_24043_24071[2] = null);
(statearr_24043_24071[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 2))
{var state_24040__$1 = state_24040;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24040__$1,4,ch);
} else
{if((state_val_24041 === 3))
{var inst_24038 = (state_24040[2]);var state_24040__$1 = state_24040;return cljs.core.async.impl.ioc_helpers.return_chan(state_24040__$1,inst_24038);
} else
{if((state_val_24041 === 4))
{var inst_24008 = (state_24040[9]);var inst_24008__$1 = (state_24040[2]);var inst_24009 = (inst_24008__$1 == null);var inst_24010 = cljs.core.not(inst_24009);var state_24040__$1 = (function (){var statearr_24044 = state_24040;(statearr_24044[9] = inst_24008__$1);
return statearr_24044;
})();if(inst_24010)
{var statearr_24045_24072 = state_24040__$1;(statearr_24045_24072[1] = 5);
} else
{var statearr_24046_24073 = state_24040__$1;(statearr_24046_24073[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 5))
{var inst_24008 = (state_24040[9]);var inst_24013 = (state_24040[10]);var inst_24005 = (state_24040[7]);var inst_24004 = (state_24040[8]);var inst_24012 = (inst_24004[inst_24005] = inst_24008);var inst_24013__$1 = (inst_24005 + 1);var inst_24014 = (inst_24013__$1 < n);var state_24040__$1 = (function (){var statearr_24047 = state_24040;(statearr_24047[11] = inst_24012);
(statearr_24047[10] = inst_24013__$1);
return statearr_24047;
})();if(cljs.core.truth_(inst_24014))
{var statearr_24048_24074 = state_24040__$1;(statearr_24048_24074[1] = 8);
} else
{var statearr_24049_24075 = state_24040__$1;(statearr_24049_24075[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 6))
{var inst_24005 = (state_24040[7]);var inst_24026 = (inst_24005 > 0);var state_24040__$1 = state_24040;if(cljs.core.truth_(inst_24026))
{var statearr_24051_24076 = state_24040__$1;(statearr_24051_24076[1] = 12);
} else
{var statearr_24052_24077 = state_24040__$1;(statearr_24052_24077[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 7))
{var inst_24036 = (state_24040[2]);var state_24040__$1 = state_24040;var statearr_24053_24078 = state_24040__$1;(statearr_24053_24078[2] = inst_24036);
(statearr_24053_24078[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 8))
{var inst_24013 = (state_24040[10]);var inst_24004 = (state_24040[8]);var tmp24050 = inst_24004;var inst_24004__$1 = tmp24050;var inst_24005 = inst_24013;var state_24040__$1 = (function (){var statearr_24054 = state_24040;(statearr_24054[7] = inst_24005);
(statearr_24054[8] = inst_24004__$1);
return statearr_24054;
})();var statearr_24055_24079 = state_24040__$1;(statearr_24055_24079[2] = null);
(statearr_24055_24079[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 9))
{var inst_24004 = (state_24040[8]);var inst_24018 = cljs.core.vec(inst_24004);var state_24040__$1 = state_24040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24040__$1,11,out,inst_24018);
} else
{if((state_val_24041 === 10))
{var inst_24024 = (state_24040[2]);var state_24040__$1 = state_24040;var statearr_24056_24080 = state_24040__$1;(statearr_24056_24080[2] = inst_24024);
(statearr_24056_24080[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 11))
{var inst_24020 = (state_24040[2]);var inst_24021 = (new Array(n));var inst_24004 = inst_24021;var inst_24005 = 0;var state_24040__$1 = (function (){var statearr_24057 = state_24040;(statearr_24057[7] = inst_24005);
(statearr_24057[8] = inst_24004);
(statearr_24057[12] = inst_24020);
return statearr_24057;
})();var statearr_24058_24081 = state_24040__$1;(statearr_24058_24081[2] = null);
(statearr_24058_24081[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 12))
{var inst_24004 = (state_24040[8]);var inst_24028 = cljs.core.vec(inst_24004);var state_24040__$1 = state_24040;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24040__$1,15,out,inst_24028);
} else
{if((state_val_24041 === 13))
{var state_24040__$1 = state_24040;var statearr_24059_24082 = state_24040__$1;(statearr_24059_24082[2] = null);
(statearr_24059_24082[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 14))
{var inst_24033 = (state_24040[2]);var inst_24034 = cljs.core.async.close_BANG_(out);var state_24040__$1 = (function (){var statearr_24060 = state_24040;(statearr_24060[13] = inst_24033);
return statearr_24060;
})();var statearr_24061_24083 = state_24040__$1;(statearr_24061_24083[2] = inst_24034);
(statearr_24061_24083[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24041 === 15))
{var inst_24030 = (state_24040[2]);var state_24040__$1 = state_24040;var statearr_24062_24084 = state_24040__$1;(statearr_24062_24084[2] = inst_24030);
(statearr_24062_24084[1] = 14);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24066[0] = state_machine__5507__auto__);
(statearr_24066[1] = 1);
return statearr_24066;
});
var state_machine__5507__auto____1 = (function (state_24040){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24040);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24067){if((e24067 instanceof Object))
{var ex__5510__auto__ = e24067;var statearr_24068_24085 = state_24040;(statearr_24068_24085[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24040);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24086 = state_24040;
state_24040 = G__24086;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24040){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24069 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24070);
return statearr_24069;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24199){var state_val_24200 = (state_24199[1]);if((state_val_24200 === 1))
{var inst_24158 = [];var inst_24159 = inst_24158;var inst_24160 = cljs.core.constant$keyword$139;var state_24199__$1 = (function (){var statearr_24201 = state_24199;(statearr_24201[7] = inst_24160);
(statearr_24201[8] = inst_24159);
return statearr_24201;
})();var statearr_24202_24230 = state_24199__$1;(statearr_24202_24230[2] = null);
(statearr_24202_24230[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 2))
{var state_24199__$1 = state_24199;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24199__$1,4,ch);
} else
{if((state_val_24200 === 3))
{var inst_24197 = (state_24199[2]);var state_24199__$1 = state_24199;return cljs.core.async.impl.ioc_helpers.return_chan(state_24199__$1,inst_24197);
} else
{if((state_val_24200 === 4))
{var inst_24163 = (state_24199[9]);var inst_24163__$1 = (state_24199[2]);var inst_24164 = (inst_24163__$1 == null);var inst_24165 = cljs.core.not(inst_24164);var state_24199__$1 = (function (){var statearr_24203 = state_24199;(statearr_24203[9] = inst_24163__$1);
return statearr_24203;
})();if(inst_24165)
{var statearr_24204_24231 = state_24199__$1;(statearr_24204_24231[1] = 5);
} else
{var statearr_24205_24232 = state_24199__$1;(statearr_24205_24232[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 5))
{var inst_24167 = (state_24199[10]);var inst_24160 = (state_24199[7]);var inst_24163 = (state_24199[9]);var inst_24167__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24163) : f.call(null,inst_24163));var inst_24168 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24167__$1,inst_24160);var inst_24169 = cljs.core.keyword_identical_QMARK_(inst_24160,cljs.core.constant$keyword$139);var inst_24170 = (inst_24168) || (inst_24169);var state_24199__$1 = (function (){var statearr_24206 = state_24199;(statearr_24206[10] = inst_24167__$1);
return statearr_24206;
})();if(cljs.core.truth_(inst_24170))
{var statearr_24207_24233 = state_24199__$1;(statearr_24207_24233[1] = 8);
} else
{var statearr_24208_24234 = state_24199__$1;(statearr_24208_24234[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 6))
{var inst_24159 = (state_24199[8]);var inst_24184 = inst_24159.length;var inst_24185 = (inst_24184 > 0);var state_24199__$1 = state_24199;if(cljs.core.truth_(inst_24185))
{var statearr_24210_24235 = state_24199__$1;(statearr_24210_24235[1] = 12);
} else
{var statearr_24211_24236 = state_24199__$1;(statearr_24211_24236[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 7))
{var inst_24195 = (state_24199[2]);var state_24199__$1 = state_24199;var statearr_24212_24237 = state_24199__$1;(statearr_24212_24237[2] = inst_24195);
(statearr_24212_24237[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 8))
{var inst_24167 = (state_24199[10]);var inst_24163 = (state_24199[9]);var inst_24159 = (state_24199[8]);var inst_24172 = inst_24159.push(inst_24163);var tmp24209 = inst_24159;var inst_24159__$1 = tmp24209;var inst_24160 = inst_24167;var state_24199__$1 = (function (){var statearr_24213 = state_24199;(statearr_24213[7] = inst_24160);
(statearr_24213[11] = inst_24172);
(statearr_24213[8] = inst_24159__$1);
return statearr_24213;
})();var statearr_24214_24238 = state_24199__$1;(statearr_24214_24238[2] = null);
(statearr_24214_24238[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 9))
{var inst_24159 = (state_24199[8]);var inst_24175 = cljs.core.vec(inst_24159);var state_24199__$1 = state_24199;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24199__$1,11,out,inst_24175);
} else
{if((state_val_24200 === 10))
{var inst_24182 = (state_24199[2]);var state_24199__$1 = state_24199;var statearr_24215_24239 = state_24199__$1;(statearr_24215_24239[2] = inst_24182);
(statearr_24215_24239[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 11))
{var inst_24167 = (state_24199[10]);var inst_24163 = (state_24199[9]);var inst_24177 = (state_24199[2]);var inst_24178 = [];var inst_24179 = inst_24178.push(inst_24163);var inst_24159 = inst_24178;var inst_24160 = inst_24167;var state_24199__$1 = (function (){var statearr_24216 = state_24199;(statearr_24216[7] = inst_24160);
(statearr_24216[12] = inst_24179);
(statearr_24216[13] = inst_24177);
(statearr_24216[8] = inst_24159);
return statearr_24216;
})();var statearr_24217_24240 = state_24199__$1;(statearr_24217_24240[2] = null);
(statearr_24217_24240[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 12))
{var inst_24159 = (state_24199[8]);var inst_24187 = cljs.core.vec(inst_24159);var state_24199__$1 = state_24199;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24199__$1,15,out,inst_24187);
} else
{if((state_val_24200 === 13))
{var state_24199__$1 = state_24199;var statearr_24218_24241 = state_24199__$1;(statearr_24218_24241[2] = null);
(statearr_24218_24241[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 14))
{var inst_24192 = (state_24199[2]);var inst_24193 = cljs.core.async.close_BANG_(out);var state_24199__$1 = (function (){var statearr_24219 = state_24199;(statearr_24219[14] = inst_24192);
return statearr_24219;
})();var statearr_24220_24242 = state_24199__$1;(statearr_24220_24242[2] = inst_24193);
(statearr_24220_24242[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_24200 === 15))
{var inst_24189 = (state_24199[2]);var state_24199__$1 = state_24199;var statearr_24221_24243 = state_24199__$1;(statearr_24221_24243[2] = inst_24189);
(statearr_24221_24243[1] = 14);
return cljs.core.constant$keyword$126;
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
var state_machine__5507__auto____0 = (function (){var statearr_24225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24225[0] = state_machine__5507__auto__);
(statearr_24225[1] = 1);
return statearr_24225;
});
var state_machine__5507__auto____1 = (function (state_24199){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24199);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24226){if((e24226 instanceof Object))
{var ex__5510__auto__ = e24226;var statearr_24227_24244 = state_24199;(statearr_24227_24244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24199);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e24226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__24245 = state_24199;
state_24199 = G__24245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24199){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24228 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24229);
return statearr_24228;
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
