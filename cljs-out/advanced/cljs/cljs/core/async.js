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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21191 = (function (f,fn_handler,meta21192){
this.f = f;
this.fn_handler = fn_handler;
this.meta21192 = meta21192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21191.cljs$lang$type = true;
cljs.core.async.t21191.cljs$lang$ctorStr = "cljs.core.async/t21191";
cljs.core.async.t21191.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21191");
});
cljs.core.async.t21191.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21193){var self__ = this;
var _21193__$1 = this;return self__.meta21192;
});
cljs.core.async.t21191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21193,meta21192__$1){var self__ = this;
var _21193__$1 = this;return (new cljs.core.async.t21191(self__.f,self__.fn_handler,meta21192__$1));
});
cljs.core.async.__GT_t21191 = (function __GT_t21191(f__$1,fn_handler__$1,meta21192){return (new cljs.core.async.t21191(f__$1,fn_handler__$1,meta21192));
});
}
return (new cljs.core.async.t21191(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21195 = buff;if(G__21195)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__21195.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21195.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21195);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21195);
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
{var val_21196 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21196) : fn1.call(null,val_21196));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21196) : fn1.call(null,val_21196));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___21197 = n;var x_21198 = 0;while(true){
if((x_21198 < n__4248__auto___21197))
{(a[x_21198] = 0);
{
var G__21199 = (x_21198 + 1);
x_21198 = G__21199;
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
var G__21200 = (i + 1);
i = G__21200;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t21204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21204 = (function (flag,alt_flag,meta21205){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21205 = meta21205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21204.cljs$lang$type = true;
cljs.core.async.t21204.cljs$lang$ctorStr = "cljs.core.async/t21204";
cljs.core.async.t21204.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21204");
});
cljs.core.async.t21204.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t21204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t21204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21206){var self__ = this;
var _21206__$1 = this;return self__.meta21205;
});
cljs.core.async.t21204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21206,meta21205__$1){var self__ = this;
var _21206__$1 = this;return (new cljs.core.async.t21204(self__.flag,self__.alt_flag,meta21205__$1));
});
cljs.core.async.__GT_t21204 = (function __GT_t21204(flag__$1,alt_flag__$1,meta21205){return (new cljs.core.async.t21204(flag__$1,alt_flag__$1,meta21205));
});
}
return (new cljs.core.async.t21204(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21210 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21210 = (function (cb,flag,alt_handler,meta21211){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21211 = meta21211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21210.cljs$lang$type = true;
cljs.core.async.t21210.cljs$lang$ctorStr = "cljs.core.async/t21210";
cljs.core.async.t21210.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21210");
});
cljs.core.async.t21210.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t21210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t21210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21212){var self__ = this;
var _21212__$1 = this;return self__.meta21211;
});
cljs.core.async.t21210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21212,meta21211__$1){var self__ = this;
var _21212__$1 = this;return (new cljs.core.async.t21210(self__.cb,self__.flag,self__.alt_handler,meta21211__$1));
});
cljs.core.async.__GT_t21210 = (function __GT_t21210(cb__$1,flag__$1,alt_handler__$1,meta21211){return (new cljs.core.async.t21210(cb__$1,flag__$1,alt_handler__$1,meta21211));
});
}
return (new cljs.core.async.t21210(cb,flag,alt_handler,null));
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
return (function (p1__21213_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21213_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21213_SHARP_,port], null)));
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
var G__21214 = (i + 1);
i = G__21214;
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
var alts_BANG___delegate = function (ports,p__21215){var map__21217 = p__21215;var map__21217__$1 = ((cljs.core.seq_QMARK_(map__21217))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21217):map__21217);var opts = map__21217__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21215 = null;if (arguments.length > 1) {
  p__21215 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21215);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21218){
var ports = cljs.core.first(arglist__21218);
var p__21215 = cljs.core.rest(arglist__21218);
return alts_BANG___delegate(ports,p__21215);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21226 = (function (ch,f,map_LT_,meta21227){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21227 = meta21227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21226.cljs$lang$type = true;
cljs.core.async.t21226.cljs$lang$ctorStr = "cljs.core.async/t21226";
cljs.core.async.t21226.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21226");
});
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t21229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21229 = (function (fn1,_,meta21227,ch,f,map_LT_,meta21230){
this.fn1 = fn1;
this._ = _;
this.meta21227 = meta21227;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21230 = meta21230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21229.cljs$lang$type = true;
cljs.core.async.t21229.cljs$lang$ctorStr = "cljs.core.async/t21229";
cljs.core.async.t21229.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21229");
});
cljs.core.async.t21229.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t21229.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t21229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__21219_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__21219_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21219_SHARP_) : self__.f.call(null,p1__21219_SHARP_)))) : f1.call(null,(((p1__21219_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__21219_SHARP_) : self__.f.call(null,p1__21219_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t21229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21231){var self__ = this;
var _21231__$1 = this;return self__.meta21230;
});
cljs.core.async.t21229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21231,meta21230__$1){var self__ = this;
var _21231__$1 = this;return (new cljs.core.async.t21229(self__.fn1,self__._,self__.meta21227,self__.ch,self__.f,self__.map_LT_,meta21230__$1));
});
cljs.core.async.__GT_t21229 = (function __GT_t21229(fn1__$1,___$2,meta21227__$1,ch__$2,f__$2,map_LT___$2,meta21230){return (new cljs.core.async.t21229(fn1__$1,___$2,meta21227__$1,ch__$2,f__$2,map_LT___$2,meta21230));
});
}
return (new cljs.core.async.t21229(fn1,___$1,self__.meta21227,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21228){var self__ = this;
var _21228__$1 = this;return self__.meta21227;
});
cljs.core.async.t21226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21228,meta21227__$1){var self__ = this;
var _21228__$1 = this;return (new cljs.core.async.t21226(self__.ch,self__.f,self__.map_LT_,meta21227__$1));
});
cljs.core.async.__GT_t21226 = (function __GT_t21226(ch__$1,f__$1,map_LT___$1,meta21227){return (new cljs.core.async.t21226(ch__$1,f__$1,map_LT___$1,meta21227));
});
}
return (new cljs.core.async.t21226(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21235 = (function (ch,f,map_GT_,meta21236){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21236 = meta21236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21235.cljs$lang$type = true;
cljs.core.async.t21235.cljs$lang$ctorStr = "cljs.core.async/t21235";
cljs.core.async.t21235.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21235");
});
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21237){var self__ = this;
var _21237__$1 = this;return self__.meta21236;
});
cljs.core.async.t21235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21237,meta21236__$1){var self__ = this;
var _21237__$1 = this;return (new cljs.core.async.t21235(self__.ch,self__.f,self__.map_GT_,meta21236__$1));
});
cljs.core.async.__GT_t21235 = (function __GT_t21235(ch__$1,f__$1,map_GT___$1,meta21236){return (new cljs.core.async.t21235(ch__$1,f__$1,map_GT___$1,meta21236));
});
}
return (new cljs.core.async.t21235(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21241 = (function (ch,p,filter_GT_,meta21242){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21242 = meta21242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21241.cljs$lang$type = true;
cljs.core.async.t21241.cljs$lang$ctorStr = "cljs.core.async/t21241";
cljs.core.async.t21241.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t21241");
});
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t21241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21243){var self__ = this;
var _21243__$1 = this;return self__.meta21242;
});
cljs.core.async.t21241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21243,meta21242__$1){var self__ = this;
var _21243__$1 = this;return (new cljs.core.async.t21241(self__.ch,self__.p,self__.filter_GT_,meta21242__$1));
});
cljs.core.async.__GT_t21241 = (function __GT_t21241(ch__$1,p__$1,filter_GT___$1,meta21242){return (new cljs.core.async.t21241(ch__$1,p__$1,filter_GT___$1,meta21242));
});
}
return (new cljs.core.async.t21241(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___21326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21305){var state_val_21306 = (state_21305[1]);if((state_val_21306 === 1))
{var state_21305__$1 = state_21305;var statearr_21307_21327 = state_21305__$1;(statearr_21307_21327[2] = null);
(statearr_21307_21327[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 2))
{var state_21305__$1 = state_21305;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21305__$1,4,ch);
} else
{if((state_val_21306 === 3))
{var inst_21303 = (state_21305[2]);var state_21305__$1 = state_21305;return cljs.core.async.impl.ioc_helpers.return_chan(state_21305__$1,inst_21303);
} else
{if((state_val_21306 === 4))
{var inst_21287 = (state_21305[7]);var inst_21287__$1 = (state_21305[2]);var inst_21288 = (inst_21287__$1 == null);var state_21305__$1 = (function (){var statearr_21308 = state_21305;(statearr_21308[7] = inst_21287__$1);
return statearr_21308;
})();if(cljs.core.truth_(inst_21288))
{var statearr_21309_21328 = state_21305__$1;(statearr_21309_21328[1] = 5);
} else
{var statearr_21310_21329 = state_21305__$1;(statearr_21310_21329[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 5))
{var inst_21290 = cljs.core.async.close_BANG_(out);var state_21305__$1 = state_21305;var statearr_21311_21330 = state_21305__$1;(statearr_21311_21330[2] = inst_21290);
(statearr_21311_21330[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 6))
{var inst_21287 = (state_21305[7]);var inst_21292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21287) : p.call(null,inst_21287));var state_21305__$1 = state_21305;if(cljs.core.truth_(inst_21292))
{var statearr_21312_21331 = state_21305__$1;(statearr_21312_21331[1] = 8);
} else
{var statearr_21313_21332 = state_21305__$1;(statearr_21313_21332[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 7))
{var inst_21301 = (state_21305[2]);var state_21305__$1 = state_21305;var statearr_21314_21333 = state_21305__$1;(statearr_21314_21333[2] = inst_21301);
(statearr_21314_21333[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 8))
{var inst_21287 = (state_21305[7]);var state_21305__$1 = state_21305;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21305__$1,11,out,inst_21287);
} else
{if((state_val_21306 === 9))
{var state_21305__$1 = state_21305;var statearr_21315_21334 = state_21305__$1;(statearr_21315_21334[2] = null);
(statearr_21315_21334[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 10))
{var inst_21298 = (state_21305[2]);var state_21305__$1 = (function (){var statearr_21316 = state_21305;(statearr_21316[8] = inst_21298);
return statearr_21316;
})();var statearr_21317_21335 = state_21305__$1;(statearr_21317_21335[2] = null);
(statearr_21317_21335[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21306 === 11))
{var inst_21295 = (state_21305[2]);var state_21305__$1 = state_21305;var statearr_21318_21336 = state_21305__$1;(statearr_21318_21336[2] = inst_21295);
(statearr_21318_21336[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_21322 = [null,null,null,null,null,null,null,null,null];(statearr_21322[0] = state_machine__5507__auto__);
(statearr_21322[1] = 1);
return statearr_21322;
});
var state_machine__5507__auto____1 = (function (state_21305){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21305);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21323){if((e21323 instanceof Object))
{var ex__5510__auto__ = e21323;var statearr_21324_21337 = state_21305;(statearr_21324_21337[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21305);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21338 = state_21305;
state_21305 = G__21338;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21305){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21325 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21326);
return statearr_21325;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21490){var state_val_21491 = (state_21490[1]);if((state_val_21491 === 1))
{var state_21490__$1 = state_21490;var statearr_21492_21529 = state_21490__$1;(statearr_21492_21529[2] = null);
(statearr_21492_21529[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 2))
{var state_21490__$1 = state_21490;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21490__$1,4,in$);
} else
{if((state_val_21491 === 3))
{var inst_21488 = (state_21490[2]);var state_21490__$1 = state_21490;return cljs.core.async.impl.ioc_helpers.return_chan(state_21490__$1,inst_21488);
} else
{if((state_val_21491 === 4))
{var inst_21436 = (state_21490[7]);var inst_21436__$1 = (state_21490[2]);var inst_21437 = (inst_21436__$1 == null);var state_21490__$1 = (function (){var statearr_21493 = state_21490;(statearr_21493[7] = inst_21436__$1);
return statearr_21493;
})();if(cljs.core.truth_(inst_21437))
{var statearr_21494_21530 = state_21490__$1;(statearr_21494_21530[1] = 5);
} else
{var statearr_21495_21531 = state_21490__$1;(statearr_21495_21531[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 5))
{var inst_21439 = cljs.core.async.close_BANG_(out);var state_21490__$1 = state_21490;var statearr_21496_21532 = state_21490__$1;(statearr_21496_21532[2] = inst_21439);
(statearr_21496_21532[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 6))
{var inst_21436 = (state_21490[7]);var inst_21441 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21436) : f.call(null,inst_21436));var inst_21446 = cljs.core.seq(inst_21441);var inst_21447 = inst_21446;var inst_21448 = null;var inst_21449 = 0;var inst_21450 = 0;var state_21490__$1 = (function (){var statearr_21497 = state_21490;(statearr_21497[8] = inst_21450);
(statearr_21497[9] = inst_21447);
(statearr_21497[10] = inst_21449);
(statearr_21497[11] = inst_21448);
return statearr_21497;
})();var statearr_21498_21533 = state_21490__$1;(statearr_21498_21533[2] = null);
(statearr_21498_21533[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 7))
{var inst_21486 = (state_21490[2]);var state_21490__$1 = state_21490;var statearr_21499_21534 = state_21490__$1;(statearr_21499_21534[2] = inst_21486);
(statearr_21499_21534[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 8))
{var inst_21450 = (state_21490[8]);var inst_21449 = (state_21490[10]);var inst_21452 = (inst_21450 < inst_21449);var inst_21453 = inst_21452;var state_21490__$1 = state_21490;if(cljs.core.truth_(inst_21453))
{var statearr_21500_21535 = state_21490__$1;(statearr_21500_21535[1] = 10);
} else
{var statearr_21501_21536 = state_21490__$1;(statearr_21501_21536[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 9))
{var inst_21483 = (state_21490[2]);var state_21490__$1 = (function (){var statearr_21502 = state_21490;(statearr_21502[12] = inst_21483);
return statearr_21502;
})();var statearr_21503_21537 = state_21490__$1;(statearr_21503_21537[2] = null);
(statearr_21503_21537[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 10))
{var inst_21450 = (state_21490[8]);var inst_21448 = (state_21490[11]);var inst_21455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21448,inst_21450);var state_21490__$1 = state_21490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21490__$1,13,out,inst_21455);
} else
{if((state_val_21491 === 11))
{var inst_21461 = (state_21490[13]);var inst_21447 = (state_21490[9]);var inst_21461__$1 = cljs.core.seq(inst_21447);var state_21490__$1 = (function (){var statearr_21507 = state_21490;(statearr_21507[13] = inst_21461__$1);
return statearr_21507;
})();if(inst_21461__$1)
{var statearr_21508_21538 = state_21490__$1;(statearr_21508_21538[1] = 14);
} else
{var statearr_21509_21539 = state_21490__$1;(statearr_21509_21539[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 12))
{var inst_21481 = (state_21490[2]);var state_21490__$1 = state_21490;var statearr_21510_21540 = state_21490__$1;(statearr_21510_21540[2] = inst_21481);
(statearr_21510_21540[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 13))
{var inst_21450 = (state_21490[8]);var inst_21447 = (state_21490[9]);var inst_21449 = (state_21490[10]);var inst_21448 = (state_21490[11]);var inst_21457 = (state_21490[2]);var inst_21458 = (inst_21450 + 1);var tmp21504 = inst_21447;var tmp21505 = inst_21449;var tmp21506 = inst_21448;var inst_21447__$1 = tmp21504;var inst_21448__$1 = tmp21506;var inst_21449__$1 = tmp21505;var inst_21450__$1 = inst_21458;var state_21490__$1 = (function (){var statearr_21511 = state_21490;(statearr_21511[8] = inst_21450__$1);
(statearr_21511[14] = inst_21457);
(statearr_21511[9] = inst_21447__$1);
(statearr_21511[10] = inst_21449__$1);
(statearr_21511[11] = inst_21448__$1);
return statearr_21511;
})();var statearr_21512_21541 = state_21490__$1;(statearr_21512_21541[2] = null);
(statearr_21512_21541[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 14))
{var inst_21461 = (state_21490[13]);var inst_21463 = cljs.core.chunked_seq_QMARK_(inst_21461);var state_21490__$1 = state_21490;if(inst_21463)
{var statearr_21513_21542 = state_21490__$1;(statearr_21513_21542[1] = 17);
} else
{var statearr_21514_21543 = state_21490__$1;(statearr_21514_21543[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 15))
{var state_21490__$1 = state_21490;var statearr_21515_21544 = state_21490__$1;(statearr_21515_21544[2] = null);
(statearr_21515_21544[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 16))
{var inst_21479 = (state_21490[2]);var state_21490__$1 = state_21490;var statearr_21516_21545 = state_21490__$1;(statearr_21516_21545[2] = inst_21479);
(statearr_21516_21545[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 17))
{var inst_21461 = (state_21490[13]);var inst_21465 = cljs.core.chunk_first(inst_21461);var inst_21466 = cljs.core.chunk_rest(inst_21461);var inst_21467 = cljs.core.count(inst_21465);var inst_21447 = inst_21466;var inst_21448 = inst_21465;var inst_21449 = inst_21467;var inst_21450 = 0;var state_21490__$1 = (function (){var statearr_21517 = state_21490;(statearr_21517[8] = inst_21450);
(statearr_21517[9] = inst_21447);
(statearr_21517[10] = inst_21449);
(statearr_21517[11] = inst_21448);
return statearr_21517;
})();var statearr_21518_21546 = state_21490__$1;(statearr_21518_21546[2] = null);
(statearr_21518_21546[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 18))
{var inst_21461 = (state_21490[13]);var inst_21470 = cljs.core.first(inst_21461);var state_21490__$1 = state_21490;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21490__$1,20,out,inst_21470);
} else
{if((state_val_21491 === 19))
{var inst_21476 = (state_21490[2]);var state_21490__$1 = state_21490;var statearr_21519_21547 = state_21490__$1;(statearr_21519_21547[2] = inst_21476);
(statearr_21519_21547[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21491 === 20))
{var inst_21461 = (state_21490[13]);var inst_21472 = (state_21490[2]);var inst_21473 = cljs.core.next(inst_21461);var inst_21447 = inst_21473;var inst_21448 = null;var inst_21449 = 0;var inst_21450 = 0;var state_21490__$1 = (function (){var statearr_21520 = state_21490;(statearr_21520[8] = inst_21450);
(statearr_21520[9] = inst_21447);
(statearr_21520[10] = inst_21449);
(statearr_21520[15] = inst_21472);
(statearr_21520[11] = inst_21448);
return statearr_21520;
})();var statearr_21521_21548 = state_21490__$1;(statearr_21521_21548[2] = null);
(statearr_21521_21548[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_21525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21525[0] = state_machine__5507__auto__);
(statearr_21525[1] = 1);
return statearr_21525;
});
var state_machine__5507__auto____1 = (function (state_21490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21490);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21526){if((e21526 instanceof Object))
{var ex__5510__auto__ = e21526;var statearr_21527_21549 = state_21490;(statearr_21527_21549[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21490);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21550 = state_21490;
state_21490 = G__21550;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21528 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21528;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___21631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21610){var state_val_21611 = (state_21610[1]);if((state_val_21611 === 1))
{var state_21610__$1 = state_21610;var statearr_21612_21632 = state_21610__$1;(statearr_21612_21632[2] = null);
(statearr_21612_21632[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 2))
{var state_21610__$1 = state_21610;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21610__$1,4,from);
} else
{if((state_val_21611 === 3))
{var inst_21608 = (state_21610[2]);var state_21610__$1 = state_21610;return cljs.core.async.impl.ioc_helpers.return_chan(state_21610__$1,inst_21608);
} else
{if((state_val_21611 === 4))
{var inst_21593 = (state_21610[7]);var inst_21593__$1 = (state_21610[2]);var inst_21594 = (inst_21593__$1 == null);var state_21610__$1 = (function (){var statearr_21613 = state_21610;(statearr_21613[7] = inst_21593__$1);
return statearr_21613;
})();if(cljs.core.truth_(inst_21594))
{var statearr_21614_21633 = state_21610__$1;(statearr_21614_21633[1] = 5);
} else
{var statearr_21615_21634 = state_21610__$1;(statearr_21615_21634[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 5))
{var state_21610__$1 = state_21610;if(cljs.core.truth_(close_QMARK_))
{var statearr_21616_21635 = state_21610__$1;(statearr_21616_21635[1] = 8);
} else
{var statearr_21617_21636 = state_21610__$1;(statearr_21617_21636[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 6))
{var inst_21593 = (state_21610[7]);var state_21610__$1 = state_21610;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21610__$1,11,to,inst_21593);
} else
{if((state_val_21611 === 7))
{var inst_21606 = (state_21610[2]);var state_21610__$1 = state_21610;var statearr_21618_21637 = state_21610__$1;(statearr_21618_21637[2] = inst_21606);
(statearr_21618_21637[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 8))
{var inst_21597 = cljs.core.async.close_BANG_(to);var state_21610__$1 = state_21610;var statearr_21619_21638 = state_21610__$1;(statearr_21619_21638[2] = inst_21597);
(statearr_21619_21638[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 9))
{var state_21610__$1 = state_21610;var statearr_21620_21639 = state_21610__$1;(statearr_21620_21639[2] = null);
(statearr_21620_21639[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 10))
{var inst_21600 = (state_21610[2]);var state_21610__$1 = state_21610;var statearr_21621_21640 = state_21610__$1;(statearr_21621_21640[2] = inst_21600);
(statearr_21621_21640[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21611 === 11))
{var inst_21603 = (state_21610[2]);var state_21610__$1 = (function (){var statearr_21622 = state_21610;(statearr_21622[8] = inst_21603);
return statearr_21622;
})();var statearr_21623_21641 = state_21610__$1;(statearr_21623_21641[2] = null);
(statearr_21623_21641[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_21627 = [null,null,null,null,null,null,null,null,null];(statearr_21627[0] = state_machine__5507__auto__);
(statearr_21627[1] = 1);
return statearr_21627;
});
var state_machine__5507__auto____1 = (function (state_21610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21610);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21628){if((e21628 instanceof Object))
{var ex__5510__auto__ = e21628;var statearr_21629_21642 = state_21610;(statearr_21629_21642[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21610);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21643 = state_21610;
state_21610 = G__21643;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21630 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21631);
return statearr_21630;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___21730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21708){var state_val_21709 = (state_21708[1]);if((state_val_21709 === 1))
{var state_21708__$1 = state_21708;var statearr_21710_21731 = state_21708__$1;(statearr_21710_21731[2] = null);
(statearr_21710_21731[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 2))
{var state_21708__$1 = state_21708;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21708__$1,4,ch);
} else
{if((state_val_21709 === 3))
{var inst_21706 = (state_21708[2]);var state_21708__$1 = state_21708;return cljs.core.async.impl.ioc_helpers.return_chan(state_21708__$1,inst_21706);
} else
{if((state_val_21709 === 4))
{var inst_21689 = (state_21708[7]);var inst_21689__$1 = (state_21708[2]);var inst_21690 = (inst_21689__$1 == null);var state_21708__$1 = (function (){var statearr_21711 = state_21708;(statearr_21711[7] = inst_21689__$1);
return statearr_21711;
})();if(cljs.core.truth_(inst_21690))
{var statearr_21712_21732 = state_21708__$1;(statearr_21712_21732[1] = 5);
} else
{var statearr_21713_21733 = state_21708__$1;(statearr_21713_21733[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 5))
{var inst_21692 = cljs.core.async.close_BANG_(tc);var inst_21693 = cljs.core.async.close_BANG_(fc);var state_21708__$1 = (function (){var statearr_21714 = state_21708;(statearr_21714[8] = inst_21692);
return statearr_21714;
})();var statearr_21715_21734 = state_21708__$1;(statearr_21715_21734[2] = inst_21693);
(statearr_21715_21734[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 6))
{var inst_21689 = (state_21708[7]);var inst_21695 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21689) : p.call(null,inst_21689));var state_21708__$1 = state_21708;if(cljs.core.truth_(inst_21695))
{var statearr_21716_21735 = state_21708__$1;(statearr_21716_21735[1] = 9);
} else
{var statearr_21717_21736 = state_21708__$1;(statearr_21717_21736[1] = 10);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 7))
{var inst_21704 = (state_21708[2]);var state_21708__$1 = state_21708;var statearr_21718_21737 = state_21708__$1;(statearr_21718_21737[2] = inst_21704);
(statearr_21718_21737[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 8))
{var inst_21701 = (state_21708[2]);var state_21708__$1 = (function (){var statearr_21719 = state_21708;(statearr_21719[9] = inst_21701);
return statearr_21719;
})();var statearr_21720_21738 = state_21708__$1;(statearr_21720_21738[2] = null);
(statearr_21720_21738[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 9))
{var state_21708__$1 = state_21708;var statearr_21721_21739 = state_21708__$1;(statearr_21721_21739[2] = tc);
(statearr_21721_21739[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 10))
{var state_21708__$1 = state_21708;var statearr_21722_21740 = state_21708__$1;(statearr_21722_21740[2] = fc);
(statearr_21722_21740[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21709 === 11))
{var inst_21689 = (state_21708[7]);var inst_21699 = (state_21708[2]);var state_21708__$1 = state_21708;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21708__$1,8,inst_21699,inst_21689);
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
var state_machine__5507__auto____0 = (function (){var statearr_21726 = [null,null,null,null,null,null,null,null,null,null];(statearr_21726[0] = state_machine__5507__auto__);
(statearr_21726[1] = 1);
return statearr_21726;
});
var state_machine__5507__auto____1 = (function (state_21708){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21708);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21727){if((e21727 instanceof Object))
{var ex__5510__auto__ = e21727;var statearr_21728_21741 = state_21708;(statearr_21728_21741[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21708);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21742 = state_21708;
state_21708 = G__21742;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21708){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21729 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___21730);
return statearr_21729;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21789){var state_val_21790 = (state_21789[1]);if((state_val_21790 === 7))
{var inst_21785 = (state_21789[2]);var state_21789__$1 = state_21789;var statearr_21791_21807 = state_21789__$1;(statearr_21791_21807[2] = inst_21785);
(statearr_21791_21807[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21790 === 6))
{var inst_21775 = (state_21789[7]);var inst_21778 = (state_21789[8]);var inst_21782 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21775,inst_21778) : f.call(null,inst_21775,inst_21778));var inst_21775__$1 = inst_21782;var state_21789__$1 = (function (){var statearr_21792 = state_21789;(statearr_21792[7] = inst_21775__$1);
return statearr_21792;
})();var statearr_21793_21808 = state_21789__$1;(statearr_21793_21808[2] = null);
(statearr_21793_21808[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21790 === 5))
{var inst_21775 = (state_21789[7]);var state_21789__$1 = state_21789;var statearr_21794_21809 = state_21789__$1;(statearr_21794_21809[2] = inst_21775);
(statearr_21794_21809[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21790 === 4))
{var inst_21778 = (state_21789[8]);var inst_21778__$1 = (state_21789[2]);var inst_21779 = (inst_21778__$1 == null);var state_21789__$1 = (function (){var statearr_21795 = state_21789;(statearr_21795[8] = inst_21778__$1);
return statearr_21795;
})();if(cljs.core.truth_(inst_21779))
{var statearr_21796_21810 = state_21789__$1;(statearr_21796_21810[1] = 5);
} else
{var statearr_21797_21811 = state_21789__$1;(statearr_21797_21811[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21790 === 3))
{var inst_21787 = (state_21789[2]);var state_21789__$1 = state_21789;return cljs.core.async.impl.ioc_helpers.return_chan(state_21789__$1,inst_21787);
} else
{if((state_val_21790 === 2))
{var state_21789__$1 = state_21789;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21789__$1,4,ch);
} else
{if((state_val_21790 === 1))
{var inst_21775 = init;var state_21789__$1 = (function (){var statearr_21798 = state_21789;(statearr_21798[7] = inst_21775);
return statearr_21798;
})();var statearr_21799_21812 = state_21789__$1;(statearr_21799_21812[2] = null);
(statearr_21799_21812[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_21803 = [null,null,null,null,null,null,null,null,null];(statearr_21803[0] = state_machine__5507__auto__);
(statearr_21803[1] = 1);
return statearr_21803;
});
var state_machine__5507__auto____1 = (function (state_21789){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21789);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21804){if((e21804 instanceof Object))
{var ex__5510__auto__ = e21804;var statearr_21805_21813 = state_21789;(statearr_21805_21813[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21789);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21814 = state_21789;
state_21789 = G__21814;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21789){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21806 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21806;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_21876){var state_val_21877 = (state_21876[1]);if((state_val_21877 === 1))
{var inst_21856 = cljs.core.seq(coll);var inst_21857 = inst_21856;var state_21876__$1 = (function (){var statearr_21878 = state_21876;(statearr_21878[7] = inst_21857);
return statearr_21878;
})();var statearr_21879_21897 = state_21876__$1;(statearr_21879_21897[2] = null);
(statearr_21879_21897[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 2))
{var inst_21857 = (state_21876[7]);var state_21876__$1 = state_21876;if(cljs.core.truth_(inst_21857))
{var statearr_21880_21898 = state_21876__$1;(statearr_21880_21898[1] = 4);
} else
{var statearr_21881_21899 = state_21876__$1;(statearr_21881_21899[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 3))
{var inst_21874 = (state_21876[2]);var state_21876__$1 = state_21876;return cljs.core.async.impl.ioc_helpers.return_chan(state_21876__$1,inst_21874);
} else
{if((state_val_21877 === 4))
{var inst_21857 = (state_21876[7]);var inst_21860 = cljs.core.first(inst_21857);var state_21876__$1 = state_21876;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21876__$1,7,ch,inst_21860);
} else
{if((state_val_21877 === 5))
{var state_21876__$1 = state_21876;if(cljs.core.truth_(close_QMARK_))
{var statearr_21882_21900 = state_21876__$1;(statearr_21882_21900[1] = 8);
} else
{var statearr_21883_21901 = state_21876__$1;(statearr_21883_21901[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 6))
{var inst_21872 = (state_21876[2]);var state_21876__$1 = state_21876;var statearr_21884_21902 = state_21876__$1;(statearr_21884_21902[2] = inst_21872);
(statearr_21884_21902[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 7))
{var inst_21857 = (state_21876[7]);var inst_21862 = (state_21876[2]);var inst_21863 = cljs.core.next(inst_21857);var inst_21857__$1 = inst_21863;var state_21876__$1 = (function (){var statearr_21885 = state_21876;(statearr_21885[7] = inst_21857__$1);
(statearr_21885[8] = inst_21862);
return statearr_21885;
})();var statearr_21886_21903 = state_21876__$1;(statearr_21886_21903[2] = null);
(statearr_21886_21903[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 8))
{var inst_21867 = cljs.core.async.close_BANG_(ch);var state_21876__$1 = state_21876;var statearr_21887_21904 = state_21876__$1;(statearr_21887_21904[2] = inst_21867);
(statearr_21887_21904[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 9))
{var state_21876__$1 = state_21876;var statearr_21888_21905 = state_21876__$1;(statearr_21888_21905[2] = null);
(statearr_21888_21905[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_21877 === 10))
{var inst_21870 = (state_21876[2]);var state_21876__$1 = state_21876;var statearr_21889_21906 = state_21876__$1;(statearr_21889_21906[2] = inst_21870);
(statearr_21889_21906[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_21893 = [null,null,null,null,null,null,null,null,null];(statearr_21893[0] = state_machine__5507__auto__);
(statearr_21893[1] = 1);
return statearr_21893;
});
var state_machine__5507__auto____1 = (function (state_21876){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_21876);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e21894){if((e21894 instanceof Object))
{var ex__5510__auto__ = e21894;var statearr_21895_21907 = state_21876;(statearr_21895_21907[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21876);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e21894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__21908 = state_21876;
state_21876 = G__21908;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_21876){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_21876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_21896 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_21896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_21896;
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
cljs.core.async.Mux = (function (){var obj21910 = {};return obj21910;
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
cljs.core.async.Mult = (function (){var obj21912 = {};return obj21912;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22136 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22136 = (function (cs,ch,mult,meta22137){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22137 = meta22137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22136.cljs$lang$type = true;
cljs.core.async.t22136.cljs$lang$ctorStr = "cljs.core.async/t22136";
cljs.core.async.t22136.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22136");
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22136.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22136.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22138){var self__ = this;
var _22138__$1 = this;return self__.meta22137;
});})(cs))
;
cljs.core.async.t22136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22138,meta22137__$1){var self__ = this;
var _22138__$1 = this;return (new cljs.core.async.t22136(self__.cs,self__.ch,self__.mult,meta22137__$1));
});})(cs))
;
cljs.core.async.__GT_t22136 = ((function (cs){
return (function __GT_t22136(cs__$1,ch__$1,mult__$1,meta22137){return (new cljs.core.async.t22136(cs__$1,ch__$1,mult__$1,meta22137));
});})(cs))
;
}
return (new cljs.core.async.t22136(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___22359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22273){var state_val_22274 = (state_22273[1]);if((state_val_22274 === 32))
{var inst_22141 = (state_22273[7]);var inst_22217 = (state_22273[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22273,31,Object,null,30);var inst_22224 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22217,inst_22141,done);var state_22273__$1 = state_22273;var statearr_22275_22360 = state_22273__$1;(statearr_22275_22360[2] = inst_22224);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 1))
{var state_22273__$1 = state_22273;var statearr_22276_22361 = state_22273__$1;(statearr_22276_22361[2] = null);
(statearr_22276_22361[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 33))
{var inst_22230 = (state_22273[9]);var inst_22232 = cljs.core.chunked_seq_QMARK_(inst_22230);var state_22273__$1 = state_22273;if(inst_22232)
{var statearr_22277_22362 = state_22273__$1;(statearr_22277_22362[1] = 36);
} else
{var statearr_22278_22363 = state_22273__$1;(statearr_22278_22363[1] = 37);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 2))
{var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22273__$1,4,ch);
} else
{if((state_val_22274 === 34))
{var state_22273__$1 = state_22273;var statearr_22279_22364 = state_22273__$1;(statearr_22279_22364[2] = null);
(statearr_22279_22364[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 3))
{var inst_22271 = (state_22273[2]);var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.return_chan(state_22273__$1,inst_22271);
} else
{if((state_val_22274 === 35))
{var inst_22255 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22280_22365 = state_22273__$1;(statearr_22280_22365[2] = inst_22255);
(statearr_22280_22365[1] = 29);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 4))
{var inst_22141 = (state_22273[7]);var inst_22141__$1 = (state_22273[2]);var inst_22142 = (inst_22141__$1 == null);var state_22273__$1 = (function (){var statearr_22281 = state_22273;(statearr_22281[7] = inst_22141__$1);
return statearr_22281;
})();if(cljs.core.truth_(inst_22142))
{var statearr_22282_22366 = state_22273__$1;(statearr_22282_22366[1] = 5);
} else
{var statearr_22283_22367 = state_22273__$1;(statearr_22283_22367[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 36))
{var inst_22230 = (state_22273[9]);var inst_22234 = cljs.core.chunk_first(inst_22230);var inst_22235 = cljs.core.chunk_rest(inst_22230);var inst_22236 = cljs.core.count(inst_22234);var inst_22209 = inst_22235;var inst_22210 = inst_22234;var inst_22211 = inst_22236;var inst_22212 = 0;var state_22273__$1 = (function (){var statearr_22284 = state_22273;(statearr_22284[10] = inst_22209);
(statearr_22284[11] = inst_22212);
(statearr_22284[12] = inst_22211);
(statearr_22284[13] = inst_22210);
return statearr_22284;
})();var statearr_22285_22368 = state_22273__$1;(statearr_22285_22368[2] = null);
(statearr_22285_22368[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 5))
{var inst_22148 = cljs.core.deref(cs);var inst_22149 = cljs.core.seq(inst_22148);var inst_22150 = inst_22149;var inst_22151 = null;var inst_22152 = 0;var inst_22153 = 0;var state_22273__$1 = (function (){var statearr_22286 = state_22273;(statearr_22286[14] = inst_22153);
(statearr_22286[15] = inst_22151);
(statearr_22286[16] = inst_22152);
(statearr_22286[17] = inst_22150);
return statearr_22286;
})();var statearr_22287_22369 = state_22273__$1;(statearr_22287_22369[2] = null);
(statearr_22287_22369[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 37))
{var inst_22230 = (state_22273[9]);var inst_22239 = cljs.core.first(inst_22230);var state_22273__$1 = (function (){var statearr_22288 = state_22273;(statearr_22288[18] = inst_22239);
return statearr_22288;
})();var statearr_22289_22370 = state_22273__$1;(statearr_22289_22370[2] = null);
(statearr_22289_22370[1] = 41);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 6))
{var inst_22201 = (state_22273[19]);var inst_22200 = cljs.core.deref(cs);var inst_22201__$1 = cljs.core.keys(inst_22200);var inst_22202 = cljs.core.count(inst_22201__$1);var inst_22203 = cljs.core.reset_BANG_(dctr,inst_22202);var inst_22208 = cljs.core.seq(inst_22201__$1);var inst_22209 = inst_22208;var inst_22210 = null;var inst_22211 = 0;var inst_22212 = 0;var state_22273__$1 = (function (){var statearr_22290 = state_22273;(statearr_22290[10] = inst_22209);
(statearr_22290[20] = inst_22203);
(statearr_22290[11] = inst_22212);
(statearr_22290[12] = inst_22211);
(statearr_22290[13] = inst_22210);
(statearr_22290[19] = inst_22201__$1);
return statearr_22290;
})();var statearr_22291_22371 = state_22273__$1;(statearr_22291_22371[2] = null);
(statearr_22291_22371[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 38))
{var inst_22252 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22292_22372 = state_22273__$1;(statearr_22292_22372[2] = inst_22252);
(statearr_22292_22372[1] = 35);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 7))
{var inst_22269 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22293_22373 = state_22273__$1;(statearr_22293_22373[2] = inst_22269);
(statearr_22293_22373[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 39))
{var inst_22230 = (state_22273[9]);var inst_22248 = (state_22273[2]);var inst_22249 = cljs.core.next(inst_22230);var inst_22209 = inst_22249;var inst_22210 = null;var inst_22211 = 0;var inst_22212 = 0;var state_22273__$1 = (function (){var statearr_22294 = state_22273;(statearr_22294[10] = inst_22209);
(statearr_22294[11] = inst_22212);
(statearr_22294[21] = inst_22248);
(statearr_22294[12] = inst_22211);
(statearr_22294[13] = inst_22210);
return statearr_22294;
})();var statearr_22295_22374 = state_22273__$1;(statearr_22295_22374[2] = null);
(statearr_22295_22374[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 8))
{var inst_22153 = (state_22273[14]);var inst_22152 = (state_22273[16]);var inst_22155 = (inst_22153 < inst_22152);var inst_22156 = inst_22155;var state_22273__$1 = state_22273;if(cljs.core.truth_(inst_22156))
{var statearr_22296_22375 = state_22273__$1;(statearr_22296_22375[1] = 10);
} else
{var statearr_22297_22376 = state_22273__$1;(statearr_22297_22376[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 40))
{var inst_22239 = (state_22273[18]);var inst_22240 = (state_22273[2]);var inst_22241 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22242 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22239);var state_22273__$1 = (function (){var statearr_22298 = state_22273;(statearr_22298[22] = inst_22241);
(statearr_22298[23] = inst_22240);
return statearr_22298;
})();var statearr_22299_22377 = state_22273__$1;(statearr_22299_22377[2] = inst_22242);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 9))
{var inst_22198 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22300_22378 = state_22273__$1;(statearr_22300_22378[2] = inst_22198);
(statearr_22300_22378[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 41))
{var inst_22141 = (state_22273[7]);var inst_22239 = (state_22273[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22273,40,Object,null,39);var inst_22246 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22239,inst_22141,done);var state_22273__$1 = state_22273;var statearr_22301_22379 = state_22273__$1;(statearr_22301_22379[2] = inst_22246);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 10))
{var inst_22153 = (state_22273[14]);var inst_22151 = (state_22273[15]);var inst_22159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22151,inst_22153);var inst_22160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22159,0,null);var inst_22161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22159,1,null);var state_22273__$1 = (function (){var statearr_22302 = state_22273;(statearr_22302[24] = inst_22160);
return statearr_22302;
})();if(cljs.core.truth_(inst_22161))
{var statearr_22303_22380 = state_22273__$1;(statearr_22303_22380[1] = 13);
} else
{var statearr_22304_22381 = state_22273__$1;(statearr_22304_22381[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 42))
{var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22273__$1,45,dchan);
} else
{if((state_val_22274 === 11))
{var inst_22150 = (state_22273[17]);var inst_22170 = (state_22273[25]);var inst_22170__$1 = cljs.core.seq(inst_22150);var state_22273__$1 = (function (){var statearr_22305 = state_22273;(statearr_22305[25] = inst_22170__$1);
return statearr_22305;
})();if(inst_22170__$1)
{var statearr_22306_22382 = state_22273__$1;(statearr_22306_22382[1] = 16);
} else
{var statearr_22307_22383 = state_22273__$1;(statearr_22307_22383[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 43))
{var state_22273__$1 = state_22273;var statearr_22308_22384 = state_22273__$1;(statearr_22308_22384[2] = null);
(statearr_22308_22384[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 12))
{var inst_22196 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22309_22385 = state_22273__$1;(statearr_22309_22385[2] = inst_22196);
(statearr_22309_22385[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 44))
{var inst_22266 = (state_22273[2]);var state_22273__$1 = (function (){var statearr_22310 = state_22273;(statearr_22310[26] = inst_22266);
return statearr_22310;
})();var statearr_22311_22386 = state_22273__$1;(statearr_22311_22386[2] = null);
(statearr_22311_22386[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 13))
{var inst_22160 = (state_22273[24]);var inst_22163 = cljs.core.async.close_BANG_(inst_22160);var state_22273__$1 = state_22273;var statearr_22312_22387 = state_22273__$1;(statearr_22312_22387[2] = inst_22163);
(statearr_22312_22387[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 45))
{var inst_22263 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22316_22388 = state_22273__$1;(statearr_22316_22388[2] = inst_22263);
(statearr_22316_22388[1] = 44);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 14))
{var state_22273__$1 = state_22273;var statearr_22317_22389 = state_22273__$1;(statearr_22317_22389[2] = null);
(statearr_22317_22389[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 15))
{var inst_22153 = (state_22273[14]);var inst_22151 = (state_22273[15]);var inst_22152 = (state_22273[16]);var inst_22150 = (state_22273[17]);var inst_22166 = (state_22273[2]);var inst_22167 = (inst_22153 + 1);var tmp22313 = inst_22151;var tmp22314 = inst_22152;var tmp22315 = inst_22150;var inst_22150__$1 = tmp22315;var inst_22151__$1 = tmp22313;var inst_22152__$1 = tmp22314;var inst_22153__$1 = inst_22167;var state_22273__$1 = (function (){var statearr_22318 = state_22273;(statearr_22318[14] = inst_22153__$1);
(statearr_22318[15] = inst_22151__$1);
(statearr_22318[16] = inst_22152__$1);
(statearr_22318[17] = inst_22150__$1);
(statearr_22318[27] = inst_22166);
return statearr_22318;
})();var statearr_22319_22390 = state_22273__$1;(statearr_22319_22390[2] = null);
(statearr_22319_22390[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 16))
{var inst_22170 = (state_22273[25]);var inst_22172 = cljs.core.chunked_seq_QMARK_(inst_22170);var state_22273__$1 = state_22273;if(inst_22172)
{var statearr_22320_22391 = state_22273__$1;(statearr_22320_22391[1] = 19);
} else
{var statearr_22321_22392 = state_22273__$1;(statearr_22321_22392[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 17))
{var state_22273__$1 = state_22273;var statearr_22322_22393 = state_22273__$1;(statearr_22322_22393[2] = null);
(statearr_22322_22393[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 18))
{var inst_22194 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22323_22394 = state_22273__$1;(statearr_22323_22394[2] = inst_22194);
(statearr_22323_22394[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 19))
{var inst_22170 = (state_22273[25]);var inst_22174 = cljs.core.chunk_first(inst_22170);var inst_22175 = cljs.core.chunk_rest(inst_22170);var inst_22176 = cljs.core.count(inst_22174);var inst_22150 = inst_22175;var inst_22151 = inst_22174;var inst_22152 = inst_22176;var inst_22153 = 0;var state_22273__$1 = (function (){var statearr_22324 = state_22273;(statearr_22324[14] = inst_22153);
(statearr_22324[15] = inst_22151);
(statearr_22324[16] = inst_22152);
(statearr_22324[17] = inst_22150);
return statearr_22324;
})();var statearr_22325_22395 = state_22273__$1;(statearr_22325_22395[2] = null);
(statearr_22325_22395[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 20))
{var inst_22170 = (state_22273[25]);var inst_22180 = cljs.core.first(inst_22170);var inst_22181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22180,0,null);var inst_22182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22180,1,null);var state_22273__$1 = (function (){var statearr_22326 = state_22273;(statearr_22326[28] = inst_22181);
return statearr_22326;
})();if(cljs.core.truth_(inst_22182))
{var statearr_22327_22396 = state_22273__$1;(statearr_22327_22396[1] = 22);
} else
{var statearr_22328_22397 = state_22273__$1;(statearr_22328_22397[1] = 23);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 21))
{var inst_22191 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22329_22398 = state_22273__$1;(statearr_22329_22398[2] = inst_22191);
(statearr_22329_22398[1] = 18);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 22))
{var inst_22181 = (state_22273[28]);var inst_22184 = cljs.core.async.close_BANG_(inst_22181);var state_22273__$1 = state_22273;var statearr_22330_22399 = state_22273__$1;(statearr_22330_22399[2] = inst_22184);
(statearr_22330_22399[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 23))
{var state_22273__$1 = state_22273;var statearr_22331_22400 = state_22273__$1;(statearr_22331_22400[2] = null);
(statearr_22331_22400[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 24))
{var inst_22170 = (state_22273[25]);var inst_22187 = (state_22273[2]);var inst_22188 = cljs.core.next(inst_22170);var inst_22150 = inst_22188;var inst_22151 = null;var inst_22152 = 0;var inst_22153 = 0;var state_22273__$1 = (function (){var statearr_22332 = state_22273;(statearr_22332[29] = inst_22187);
(statearr_22332[14] = inst_22153);
(statearr_22332[15] = inst_22151);
(statearr_22332[16] = inst_22152);
(statearr_22332[17] = inst_22150);
return statearr_22332;
})();var statearr_22333_22401 = state_22273__$1;(statearr_22333_22401[2] = null);
(statearr_22333_22401[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 25))
{var inst_22212 = (state_22273[11]);var inst_22211 = (state_22273[12]);var inst_22214 = (inst_22212 < inst_22211);var inst_22215 = inst_22214;var state_22273__$1 = state_22273;if(cljs.core.truth_(inst_22215))
{var statearr_22334_22402 = state_22273__$1;(statearr_22334_22402[1] = 27);
} else
{var statearr_22335_22403 = state_22273__$1;(statearr_22335_22403[1] = 28);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 26))
{var inst_22201 = (state_22273[19]);var inst_22259 = (state_22273[2]);var inst_22260 = cljs.core.seq(inst_22201);var state_22273__$1 = (function (){var statearr_22336 = state_22273;(statearr_22336[30] = inst_22259);
return statearr_22336;
})();if(inst_22260)
{var statearr_22337_22404 = state_22273__$1;(statearr_22337_22404[1] = 42);
} else
{var statearr_22338_22405 = state_22273__$1;(statearr_22338_22405[1] = 43);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 27))
{var inst_22212 = (state_22273[11]);var inst_22210 = (state_22273[13]);var inst_22217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22210,inst_22212);var state_22273__$1 = (function (){var statearr_22339 = state_22273;(statearr_22339[8] = inst_22217);
return statearr_22339;
})();var statearr_22340_22406 = state_22273__$1;(statearr_22340_22406[2] = null);
(statearr_22340_22406[1] = 32);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 28))
{var inst_22230 = (state_22273[9]);var inst_22209 = (state_22273[10]);var inst_22230__$1 = cljs.core.seq(inst_22209);var state_22273__$1 = (function (){var statearr_22344 = state_22273;(statearr_22344[9] = inst_22230__$1);
return statearr_22344;
})();if(inst_22230__$1)
{var statearr_22345_22407 = state_22273__$1;(statearr_22345_22407[1] = 33);
} else
{var statearr_22346_22408 = state_22273__$1;(statearr_22346_22408[1] = 34);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 29))
{var inst_22257 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22347_22409 = state_22273__$1;(statearr_22347_22409[2] = inst_22257);
(statearr_22347_22409[1] = 26);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 30))
{var inst_22209 = (state_22273[10]);var inst_22212 = (state_22273[11]);var inst_22211 = (state_22273[12]);var inst_22210 = (state_22273[13]);var inst_22226 = (state_22273[2]);var inst_22227 = (inst_22212 + 1);var tmp22341 = inst_22209;var tmp22342 = inst_22211;var tmp22343 = inst_22210;var inst_22209__$1 = tmp22341;var inst_22210__$1 = tmp22343;var inst_22211__$1 = tmp22342;var inst_22212__$1 = inst_22227;var state_22273__$1 = (function (){var statearr_22348 = state_22273;(statearr_22348[31] = inst_22226);
(statearr_22348[10] = inst_22209__$1);
(statearr_22348[11] = inst_22212__$1);
(statearr_22348[12] = inst_22211__$1);
(statearr_22348[13] = inst_22210__$1);
return statearr_22348;
})();var statearr_22349_22410 = state_22273__$1;(statearr_22349_22410[2] = null);
(statearr_22349_22410[1] = 25);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22274 === 31))
{var inst_22217 = (state_22273[8]);var inst_22218 = (state_22273[2]);var inst_22219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_22220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22217);var state_22273__$1 = (function (){var statearr_22350 = state_22273;(statearr_22350[32] = inst_22219);
(statearr_22350[33] = inst_22218);
return statearr_22350;
})();var statearr_22351_22411 = state_22273__$1;(statearr_22351_22411[2] = inst_22220);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_22355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22355[0] = state_machine__5507__auto__);
(statearr_22355[1] = 1);
return statearr_22355;
});
var state_machine__5507__auto____1 = (function (state_22273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22273);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22356){if((e22356 instanceof Object))
{var ex__5510__auto__ = e22356;var statearr_22357_22412 = state_22273;(statearr_22357_22412[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22413 = state_22273;
state_22273 = G__22413;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22273){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22358 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22359);
return statearr_22358;
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
cljs.core.async.Mix = (function (){var obj22415 = {};return obj22415;
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
;var m = (function (){if(typeof cljs.core.async.t22525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22525 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22526){
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
this.meta22526 = meta22526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22525.cljs$lang$type = true;
cljs.core.async.t22525.cljs$lang$ctorStr = "cljs.core.async/t22525";
cljs.core.async.t22525.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22525");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22527){var self__ = this;
var _22527__$1 = this;return self__.meta22526;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22527,meta22526__$1){var self__ = this;
var _22527__$1 = this;return (new cljs.core.async.t22525(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22526__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22525 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22525(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22526){return (new cljs.core.async.t22525(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22526));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22525(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___22634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22592){var state_val_22593 = (state_22592[1]);if((state_val_22593 === 1))
{var inst_22531 = (state_22592[7]);var inst_22531__$1 = calc_state();var inst_22532 = cljs.core.seq_QMARK_(inst_22531__$1);var state_22592__$1 = (function (){var statearr_22594 = state_22592;(statearr_22594[7] = inst_22531__$1);
return statearr_22594;
})();if(inst_22532)
{var statearr_22595_22635 = state_22592__$1;(statearr_22595_22635[1] = 2);
} else
{var statearr_22596_22636 = state_22592__$1;(statearr_22596_22636[1] = 3);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 2))
{var inst_22531 = (state_22592[7]);var inst_22534 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22531);var state_22592__$1 = state_22592;var statearr_22597_22637 = state_22592__$1;(statearr_22597_22637[2] = inst_22534);
(statearr_22597_22637[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 3))
{var inst_22531 = (state_22592[7]);var state_22592__$1 = state_22592;var statearr_22598_22638 = state_22592__$1;(statearr_22598_22638[2] = inst_22531);
(statearr_22598_22638[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 4))
{var inst_22531 = (state_22592[7]);var inst_22537 = (state_22592[2]);var inst_22538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22537,cljs.core.constant$keyword$138);var inst_22539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22537,cljs.core.constant$keyword$137);var inst_22540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22537,cljs.core.constant$keyword$136);var inst_22541 = inst_22531;var state_22592__$1 = (function (){var statearr_22599 = state_22592;(statearr_22599[8] = inst_22541);
(statearr_22599[9] = inst_22540);
(statearr_22599[10] = inst_22538);
(statearr_22599[11] = inst_22539);
return statearr_22599;
})();var statearr_22600_22639 = state_22592__$1;(statearr_22600_22639[2] = null);
(statearr_22600_22639[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 5))
{var inst_22541 = (state_22592[8]);var inst_22544 = cljs.core.seq_QMARK_(inst_22541);var state_22592__$1 = state_22592;if(inst_22544)
{var statearr_22601_22640 = state_22592__$1;(statearr_22601_22640[1] = 7);
} else
{var statearr_22602_22641 = state_22592__$1;(statearr_22602_22641[1] = 8);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 6))
{var inst_22590 = (state_22592[2]);var state_22592__$1 = state_22592;return cljs.core.async.impl.ioc_helpers.return_chan(state_22592__$1,inst_22590);
} else
{if((state_val_22593 === 7))
{var inst_22541 = (state_22592[8]);var inst_22546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22541);var state_22592__$1 = state_22592;var statearr_22603_22642 = state_22592__$1;(statearr_22603_22642[2] = inst_22546);
(statearr_22603_22642[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 8))
{var inst_22541 = (state_22592[8]);var state_22592__$1 = state_22592;var statearr_22604_22643 = state_22592__$1;(statearr_22604_22643[2] = inst_22541);
(statearr_22604_22643[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 9))
{var inst_22549 = (state_22592[12]);var inst_22549__$1 = (state_22592[2]);var inst_22550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22549__$1,cljs.core.constant$keyword$138);var inst_22551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22549__$1,cljs.core.constant$keyword$137);var inst_22552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22549__$1,cljs.core.constant$keyword$136);var state_22592__$1 = (function (){var statearr_22605 = state_22592;(statearr_22605[13] = inst_22552);
(statearr_22605[14] = inst_22551);
(statearr_22605[12] = inst_22549__$1);
return statearr_22605;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22592__$1,10,inst_22550);
} else
{if((state_val_22593 === 10))
{var inst_22556 = (state_22592[15]);var inst_22557 = (state_22592[16]);var inst_22555 = (state_22592[2]);var inst_22556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22555,0,null);var inst_22557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22555,1,null);var inst_22558 = (inst_22556__$1 == null);var inst_22559 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22557__$1,change);var inst_22560 = (inst_22558) || (inst_22559);var state_22592__$1 = (function (){var statearr_22606 = state_22592;(statearr_22606[15] = inst_22556__$1);
(statearr_22606[16] = inst_22557__$1);
return statearr_22606;
})();if(cljs.core.truth_(inst_22560))
{var statearr_22607_22644 = state_22592__$1;(statearr_22607_22644[1] = 11);
} else
{var statearr_22608_22645 = state_22592__$1;(statearr_22608_22645[1] = 12);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 11))
{var inst_22556 = (state_22592[15]);var inst_22562 = (inst_22556 == null);var state_22592__$1 = state_22592;if(cljs.core.truth_(inst_22562))
{var statearr_22609_22646 = state_22592__$1;(statearr_22609_22646[1] = 14);
} else
{var statearr_22610_22647 = state_22592__$1;(statearr_22610_22647[1] = 15);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 12))
{var inst_22552 = (state_22592[13]);var inst_22571 = (state_22592[17]);var inst_22557 = (state_22592[16]);var inst_22571__$1 = (inst_22552.cljs$core$IFn$_invoke$arity$1 ? inst_22552.cljs$core$IFn$_invoke$arity$1(inst_22557) : inst_22552.call(null,inst_22557));var state_22592__$1 = (function (){var statearr_22611 = state_22592;(statearr_22611[17] = inst_22571__$1);
return statearr_22611;
})();if(cljs.core.truth_(inst_22571__$1))
{var statearr_22612_22648 = state_22592__$1;(statearr_22612_22648[1] = 17);
} else
{var statearr_22613_22649 = state_22592__$1;(statearr_22613_22649[1] = 18);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 13))
{var inst_22588 = (state_22592[2]);var state_22592__$1 = state_22592;var statearr_22614_22650 = state_22592__$1;(statearr_22614_22650[2] = inst_22588);
(statearr_22614_22650[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 14))
{var inst_22557 = (state_22592[16]);var inst_22564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22557);var state_22592__$1 = state_22592;var statearr_22615_22651 = state_22592__$1;(statearr_22615_22651[2] = inst_22564);
(statearr_22615_22651[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 15))
{var state_22592__$1 = state_22592;var statearr_22616_22652 = state_22592__$1;(statearr_22616_22652[2] = null);
(statearr_22616_22652[1] = 16);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 16))
{var inst_22567 = (state_22592[2]);var inst_22568 = calc_state();var inst_22541 = inst_22568;var state_22592__$1 = (function (){var statearr_22617 = state_22592;(statearr_22617[8] = inst_22541);
(statearr_22617[18] = inst_22567);
return statearr_22617;
})();var statearr_22618_22653 = state_22592__$1;(statearr_22618_22653[2] = null);
(statearr_22618_22653[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 17))
{var inst_22571 = (state_22592[17]);var state_22592__$1 = state_22592;var statearr_22619_22654 = state_22592__$1;(statearr_22619_22654[2] = inst_22571);
(statearr_22619_22654[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 18))
{var inst_22552 = (state_22592[13]);var inst_22551 = (state_22592[14]);var inst_22557 = (state_22592[16]);var inst_22574 = cljs.core.empty_QMARK_(inst_22552);var inst_22575 = (inst_22551.cljs$core$IFn$_invoke$arity$1 ? inst_22551.cljs$core$IFn$_invoke$arity$1(inst_22557) : inst_22551.call(null,inst_22557));var inst_22576 = cljs.core.not(inst_22575);var inst_22577 = (inst_22574) && (inst_22576);var state_22592__$1 = state_22592;var statearr_22620_22655 = state_22592__$1;(statearr_22620_22655[2] = inst_22577);
(statearr_22620_22655[1] = 19);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 19))
{var inst_22579 = (state_22592[2]);var state_22592__$1 = state_22592;if(cljs.core.truth_(inst_22579))
{var statearr_22621_22656 = state_22592__$1;(statearr_22621_22656[1] = 20);
} else
{var statearr_22622_22657 = state_22592__$1;(statearr_22622_22657[1] = 21);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 20))
{var inst_22556 = (state_22592[15]);var state_22592__$1 = state_22592;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22592__$1,23,out,inst_22556);
} else
{if((state_val_22593 === 21))
{var state_22592__$1 = state_22592;var statearr_22623_22658 = state_22592__$1;(statearr_22623_22658[2] = null);
(statearr_22623_22658[1] = 22);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 22))
{var inst_22549 = (state_22592[12]);var inst_22585 = (state_22592[2]);var inst_22541 = inst_22549;var state_22592__$1 = (function (){var statearr_22624 = state_22592;(statearr_22624[8] = inst_22541);
(statearr_22624[19] = inst_22585);
return statearr_22624;
})();var statearr_22625_22659 = state_22592__$1;(statearr_22625_22659[2] = null);
(statearr_22625_22659[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22593 === 23))
{var inst_22582 = (state_22592[2]);var state_22592__$1 = state_22592;var statearr_22626_22660 = state_22592__$1;(statearr_22626_22660[2] = inst_22582);
(statearr_22626_22660[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_22630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22630[0] = state_machine__5507__auto__);
(statearr_22630[1] = 1);
return statearr_22630;
});
var state_machine__5507__auto____1 = (function (state_22592){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22592);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22631){if((e22631 instanceof Object))
{var ex__5510__auto__ = e22631;var statearr_22632_22661 = state_22592;(statearr_22632_22661[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22592);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22662 = state_22592;
state_22592 = G__22662;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22592){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22633 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22634);
return statearr_22633;
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
cljs.core.async.Pub = (function (){var obj22664 = {};return obj22664;
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
return (function (p1__22665_SHARP_){if(cljs.core.truth_((p1__22665_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22665_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22665_SHARP_.call(null,topic))))
{return p1__22665_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22665_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22790 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22791){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22791 = meta22791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22790.cljs$lang$type = true;
cljs.core.async.t22790.cljs$lang$ctorStr = "cljs.core.async/t22790";
cljs.core.async.t22790.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22790");
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22790.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22792){var self__ = this;
var _22792__$1 = this;return self__.meta22791;
});})(mults,ensure_mult))
;
cljs.core.async.t22790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22792,meta22791__$1){var self__ = this;
var _22792__$1 = this;return (new cljs.core.async.t22790(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22791__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22790 = ((function (mults,ensure_mult){
return (function __GT_t22790(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22791){return (new cljs.core.async.t22790(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22791));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22790(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___22914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22866){var state_val_22867 = (state_22866[1]);if((state_val_22867 === 1))
{var state_22866__$1 = state_22866;var statearr_22868_22915 = state_22866__$1;(statearr_22868_22915[2] = null);
(statearr_22868_22915[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 2))
{var state_22866__$1 = state_22866;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22866__$1,4,ch);
} else
{if((state_val_22867 === 3))
{var inst_22864 = (state_22866[2]);var state_22866__$1 = state_22866;return cljs.core.async.impl.ioc_helpers.return_chan(state_22866__$1,inst_22864);
} else
{if((state_val_22867 === 4))
{var inst_22795 = (state_22866[7]);var inst_22795__$1 = (state_22866[2]);var inst_22796 = (inst_22795__$1 == null);var state_22866__$1 = (function (){var statearr_22869 = state_22866;(statearr_22869[7] = inst_22795__$1);
return statearr_22869;
})();if(cljs.core.truth_(inst_22796))
{var statearr_22870_22916 = state_22866__$1;(statearr_22870_22916[1] = 5);
} else
{var statearr_22871_22917 = state_22866__$1;(statearr_22871_22917[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 5))
{var inst_22802 = cljs.core.deref(mults);var inst_22803 = cljs.core.vals(inst_22802);var inst_22804 = cljs.core.seq(inst_22803);var inst_22805 = inst_22804;var inst_22806 = null;var inst_22807 = 0;var inst_22808 = 0;var state_22866__$1 = (function (){var statearr_22872 = state_22866;(statearr_22872[8] = inst_22807);
(statearr_22872[9] = inst_22808);
(statearr_22872[10] = inst_22805);
(statearr_22872[11] = inst_22806);
return statearr_22872;
})();var statearr_22873_22918 = state_22866__$1;(statearr_22873_22918[2] = null);
(statearr_22873_22918[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 6))
{var inst_22795 = (state_22866[7]);var inst_22845 = (state_22866[12]);var inst_22843 = (state_22866[13]);var inst_22843__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22795) : topic_fn.call(null,inst_22795));var inst_22844 = cljs.core.deref(mults);var inst_22845__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22844,inst_22843__$1);var state_22866__$1 = (function (){var statearr_22874 = state_22866;(statearr_22874[12] = inst_22845__$1);
(statearr_22874[13] = inst_22843__$1);
return statearr_22874;
})();if(cljs.core.truth_(inst_22845__$1))
{var statearr_22875_22919 = state_22866__$1;(statearr_22875_22919[1] = 19);
} else
{var statearr_22876_22920 = state_22866__$1;(statearr_22876_22920[1] = 20);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 7))
{var inst_22862 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22877_22921 = state_22866__$1;(statearr_22877_22921[2] = inst_22862);
(statearr_22877_22921[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 8))
{var inst_22807 = (state_22866[8]);var inst_22808 = (state_22866[9]);var inst_22810 = (inst_22808 < inst_22807);var inst_22811 = inst_22810;var state_22866__$1 = state_22866;if(cljs.core.truth_(inst_22811))
{var statearr_22881_22922 = state_22866__$1;(statearr_22881_22922[1] = 10);
} else
{var statearr_22882_22923 = state_22866__$1;(statearr_22882_22923[1] = 11);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 9))
{var inst_22841 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22883_22924 = state_22866__$1;(statearr_22883_22924[2] = inst_22841);
(statearr_22883_22924[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 10))
{var inst_22807 = (state_22866[8]);var inst_22808 = (state_22866[9]);var inst_22805 = (state_22866[10]);var inst_22806 = (state_22866[11]);var inst_22813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22806,inst_22808);var inst_22814 = cljs.core.async.muxch_STAR_(inst_22813);var inst_22815 = cljs.core.async.close_BANG_(inst_22814);var inst_22816 = (inst_22808 + 1);var tmp22878 = inst_22807;var tmp22879 = inst_22805;var tmp22880 = inst_22806;var inst_22805__$1 = tmp22879;var inst_22806__$1 = tmp22880;var inst_22807__$1 = tmp22878;var inst_22808__$1 = inst_22816;var state_22866__$1 = (function (){var statearr_22884 = state_22866;(statearr_22884[8] = inst_22807__$1);
(statearr_22884[9] = inst_22808__$1);
(statearr_22884[10] = inst_22805__$1);
(statearr_22884[11] = inst_22806__$1);
(statearr_22884[14] = inst_22815);
return statearr_22884;
})();var statearr_22885_22925 = state_22866__$1;(statearr_22885_22925[2] = null);
(statearr_22885_22925[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 11))
{var inst_22805 = (state_22866[10]);var inst_22819 = (state_22866[15]);var inst_22819__$1 = cljs.core.seq(inst_22805);var state_22866__$1 = (function (){var statearr_22886 = state_22866;(statearr_22886[15] = inst_22819__$1);
return statearr_22886;
})();if(inst_22819__$1)
{var statearr_22887_22926 = state_22866__$1;(statearr_22887_22926[1] = 13);
} else
{var statearr_22888_22927 = state_22866__$1;(statearr_22888_22927[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 12))
{var inst_22839 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22889_22928 = state_22866__$1;(statearr_22889_22928[2] = inst_22839);
(statearr_22889_22928[1] = 9);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 13))
{var inst_22819 = (state_22866[15]);var inst_22821 = cljs.core.chunked_seq_QMARK_(inst_22819);var state_22866__$1 = state_22866;if(inst_22821)
{var statearr_22890_22929 = state_22866__$1;(statearr_22890_22929[1] = 16);
} else
{var statearr_22891_22930 = state_22866__$1;(statearr_22891_22930[1] = 17);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 14))
{var state_22866__$1 = state_22866;var statearr_22892_22931 = state_22866__$1;(statearr_22892_22931[2] = null);
(statearr_22892_22931[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 15))
{var inst_22837 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22893_22932 = state_22866__$1;(statearr_22893_22932[2] = inst_22837);
(statearr_22893_22932[1] = 12);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 16))
{var inst_22819 = (state_22866[15]);var inst_22823 = cljs.core.chunk_first(inst_22819);var inst_22824 = cljs.core.chunk_rest(inst_22819);var inst_22825 = cljs.core.count(inst_22823);var inst_22805 = inst_22824;var inst_22806 = inst_22823;var inst_22807 = inst_22825;var inst_22808 = 0;var state_22866__$1 = (function (){var statearr_22894 = state_22866;(statearr_22894[8] = inst_22807);
(statearr_22894[9] = inst_22808);
(statearr_22894[10] = inst_22805);
(statearr_22894[11] = inst_22806);
return statearr_22894;
})();var statearr_22895_22933 = state_22866__$1;(statearr_22895_22933[2] = null);
(statearr_22895_22933[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 17))
{var inst_22819 = (state_22866[15]);var inst_22828 = cljs.core.first(inst_22819);var inst_22829 = cljs.core.async.muxch_STAR_(inst_22828);var inst_22830 = cljs.core.async.close_BANG_(inst_22829);var inst_22831 = cljs.core.next(inst_22819);var inst_22805 = inst_22831;var inst_22806 = null;var inst_22807 = 0;var inst_22808 = 0;var state_22866__$1 = (function (){var statearr_22896 = state_22866;(statearr_22896[8] = inst_22807);
(statearr_22896[9] = inst_22808);
(statearr_22896[10] = inst_22805);
(statearr_22896[11] = inst_22806);
(statearr_22896[16] = inst_22830);
return statearr_22896;
})();var statearr_22897_22934 = state_22866__$1;(statearr_22897_22934[2] = null);
(statearr_22897_22934[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 18))
{var inst_22834 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22898_22935 = state_22866__$1;(statearr_22898_22935[2] = inst_22834);
(statearr_22898_22935[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 19))
{var state_22866__$1 = state_22866;var statearr_22899_22936 = state_22866__$1;(statearr_22899_22936[2] = null);
(statearr_22899_22936[1] = 24);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 20))
{var state_22866__$1 = state_22866;var statearr_22900_22937 = state_22866__$1;(statearr_22900_22937[2] = null);
(statearr_22900_22937[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 21))
{var inst_22859 = (state_22866[2]);var state_22866__$1 = (function (){var statearr_22901 = state_22866;(statearr_22901[17] = inst_22859);
return statearr_22901;
})();var statearr_22902_22938 = state_22866__$1;(statearr_22902_22938[2] = null);
(statearr_22902_22938[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 22))
{var inst_22856 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22903_22939 = state_22866__$1;(statearr_22903_22939[2] = inst_22856);
(statearr_22903_22939[1] = 21);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 23))
{var inst_22843 = (state_22866[13]);var inst_22847 = (state_22866[2]);var inst_22848 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22843);var state_22866__$1 = (function (){var statearr_22904 = state_22866;(statearr_22904[18] = inst_22847);
return statearr_22904;
})();var statearr_22905_22940 = state_22866__$1;(statearr_22905_22940[2] = inst_22848);
cljs.core.async.impl.ioc_helpers.process_exception(state_22866__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_22867 === 24))
{var inst_22795 = (state_22866[7]);var inst_22845 = (state_22866[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22866,23,Object,null,22);var inst_22852 = cljs.core.async.muxch_STAR_(inst_22845);var state_22866__$1 = state_22866;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22866__$1,25,inst_22852,inst_22795);
} else
{if((state_val_22867 === 25))
{var inst_22854 = (state_22866[2]);var state_22866__$1 = state_22866;var statearr_22906_22941 = state_22866__$1;(statearr_22906_22941[2] = inst_22854);
cljs.core.async.impl.ioc_helpers.process_exception(state_22866__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_22910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22910[0] = state_machine__5507__auto__);
(statearr_22910[1] = 1);
return statearr_22910;
});
var state_machine__5507__auto____1 = (function (state_22866){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22866);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22911){if((e22911 instanceof Object))
{var ex__5510__auto__ = e22911;var statearr_22912_22942 = state_22866;(statearr_22912_22942[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22866);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e22911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__22943 = state_22866;
state_22866 = G__22943;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22866){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22913 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22914);
return statearr_22913;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___23080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23050){var state_val_23051 = (state_23050[1]);if((state_val_23051 === 1))
{var state_23050__$1 = state_23050;var statearr_23052_23081 = state_23050__$1;(statearr_23052_23081[2] = null);
(statearr_23052_23081[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 2))
{var inst_23013 = cljs.core.reset_BANG_(dctr,cnt);var inst_23014 = 0;var state_23050__$1 = (function (){var statearr_23053 = state_23050;(statearr_23053[7] = inst_23014);
(statearr_23053[8] = inst_23013);
return statearr_23053;
})();var statearr_23054_23082 = state_23050__$1;(statearr_23054_23082[2] = null);
(statearr_23054_23082[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 3))
{var inst_23048 = (state_23050[2]);var state_23050__$1 = state_23050;return cljs.core.async.impl.ioc_helpers.return_chan(state_23050__$1,inst_23048);
} else
{if((state_val_23051 === 4))
{var inst_23014 = (state_23050[7]);var inst_23016 = (inst_23014 < cnt);var state_23050__$1 = state_23050;if(cljs.core.truth_(inst_23016))
{var statearr_23055_23083 = state_23050__$1;(statearr_23055_23083[1] = 6);
} else
{var statearr_23056_23084 = state_23050__$1;(statearr_23056_23084[1] = 7);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 5))
{var inst_23034 = (state_23050[2]);var state_23050__$1 = (function (){var statearr_23057 = state_23050;(statearr_23057[9] = inst_23034);
return statearr_23057;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23050__$1,12,dchan);
} else
{if((state_val_23051 === 6))
{var state_23050__$1 = state_23050;var statearr_23058_23085 = state_23050__$1;(statearr_23058_23085[2] = null);
(statearr_23058_23085[1] = 11);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 7))
{var state_23050__$1 = state_23050;var statearr_23059_23086 = state_23050__$1;(statearr_23059_23086[2] = null);
(statearr_23059_23086[1] = 8);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 8))
{var inst_23032 = (state_23050[2]);var state_23050__$1 = state_23050;var statearr_23060_23087 = state_23050__$1;(statearr_23060_23087[2] = inst_23032);
(statearr_23060_23087[1] = 5);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 9))
{var inst_23014 = (state_23050[7]);var inst_23027 = (state_23050[2]);var inst_23028 = (inst_23014 + 1);var inst_23014__$1 = inst_23028;var state_23050__$1 = (function (){var statearr_23061 = state_23050;(statearr_23061[10] = inst_23027);
(statearr_23061[7] = inst_23014__$1);
return statearr_23061;
})();var statearr_23062_23088 = state_23050__$1;(statearr_23062_23088[2] = null);
(statearr_23062_23088[1] = 4);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 10))
{var inst_23018 = (state_23050[2]);var inst_23019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23050__$1 = (function (){var statearr_23063 = state_23050;(statearr_23063[11] = inst_23018);
return statearr_23063;
})();var statearr_23064_23089 = state_23050__$1;(statearr_23064_23089[2] = inst_23019);
cljs.core.async.impl.ioc_helpers.process_exception(state_23050__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 11))
{var inst_23014 = (state_23050[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23050,10,Object,null,9);var inst_23023 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23014) : chs__$1.call(null,inst_23014));var inst_23024 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23014) : done.call(null,inst_23014));var inst_23025 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23023,inst_23024);var state_23050__$1 = state_23050;var statearr_23065_23090 = state_23050__$1;(statearr_23065_23090[2] = inst_23025);
cljs.core.async.impl.ioc_helpers.process_exception(state_23050__$1);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 12))
{var inst_23036 = (state_23050[12]);var inst_23036__$1 = (state_23050[2]);var inst_23037 = cljs.core.some(cljs.core.nil_QMARK_,inst_23036__$1);var state_23050__$1 = (function (){var statearr_23066 = state_23050;(statearr_23066[12] = inst_23036__$1);
return statearr_23066;
})();if(cljs.core.truth_(inst_23037))
{var statearr_23067_23091 = state_23050__$1;(statearr_23067_23091[1] = 13);
} else
{var statearr_23068_23092 = state_23050__$1;(statearr_23068_23092[1] = 14);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 13))
{var inst_23039 = cljs.core.async.close_BANG_(out);var state_23050__$1 = state_23050;var statearr_23069_23093 = state_23050__$1;(statearr_23069_23093[2] = inst_23039);
(statearr_23069_23093[1] = 15);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 14))
{var inst_23036 = (state_23050[12]);var inst_23041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23036);var state_23050__$1 = state_23050;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23050__$1,16,out,inst_23041);
} else
{if((state_val_23051 === 15))
{var inst_23046 = (state_23050[2]);var state_23050__$1 = state_23050;var statearr_23070_23094 = state_23050__$1;(statearr_23070_23094[2] = inst_23046);
(statearr_23070_23094[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23051 === 16))
{var inst_23043 = (state_23050[2]);var state_23050__$1 = (function (){var statearr_23071 = state_23050;(statearr_23071[13] = inst_23043);
return statearr_23071;
})();var statearr_23072_23095 = state_23050__$1;(statearr_23072_23095[2] = null);
(statearr_23072_23095[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_23076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23076[0] = state_machine__5507__auto__);
(statearr_23076[1] = 1);
return statearr_23076;
});
var state_machine__5507__auto____1 = (function (state_23050){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23050);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23077){if((e23077 instanceof Object))
{var ex__5510__auto__ = e23077;var statearr_23078_23096 = state_23050;(statearr_23078_23096[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23050);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23097 = state_23050;
state_23050 = G__23097;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23050){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23079 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23080);
return statearr_23079;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23181){var state_val_23182 = (state_23181[1]);if((state_val_23182 === 1))
{var inst_23152 = cljs.core.vec(chs);var inst_23153 = inst_23152;var state_23181__$1 = (function (){var statearr_23183 = state_23181;(statearr_23183[7] = inst_23153);
return statearr_23183;
})();var statearr_23184_23206 = state_23181__$1;(statearr_23184_23206[2] = null);
(statearr_23184_23206[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 2))
{var inst_23153 = (state_23181[7]);var inst_23155 = cljs.core.count(inst_23153);var inst_23156 = (inst_23155 > 0);var state_23181__$1 = state_23181;if(cljs.core.truth_(inst_23156))
{var statearr_23185_23207 = state_23181__$1;(statearr_23185_23207[1] = 4);
} else
{var statearr_23186_23208 = state_23181__$1;(statearr_23186_23208[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 3))
{var inst_23179 = (state_23181[2]);var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.return_chan(state_23181__$1,inst_23179);
} else
{if((state_val_23182 === 4))
{var inst_23153 = (state_23181[7]);var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23181__$1,7,inst_23153);
} else
{if((state_val_23182 === 5))
{var inst_23175 = cljs.core.async.close_BANG_(out);var state_23181__$1 = state_23181;var statearr_23187_23209 = state_23181__$1;(statearr_23187_23209[2] = inst_23175);
(statearr_23187_23209[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 6))
{var inst_23177 = (state_23181[2]);var state_23181__$1 = state_23181;var statearr_23188_23210 = state_23181__$1;(statearr_23188_23210[2] = inst_23177);
(statearr_23188_23210[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 7))
{var inst_23160 = (state_23181[8]);var inst_23161 = (state_23181[9]);var inst_23160__$1 = (state_23181[2]);var inst_23161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23160__$1,0,null);var inst_23162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23160__$1,1,null);var inst_23163 = (inst_23161__$1 == null);var state_23181__$1 = (function (){var statearr_23189 = state_23181;(statearr_23189[8] = inst_23160__$1);
(statearr_23189[10] = inst_23162);
(statearr_23189[9] = inst_23161__$1);
return statearr_23189;
})();if(cljs.core.truth_(inst_23163))
{var statearr_23190_23211 = state_23181__$1;(statearr_23190_23211[1] = 8);
} else
{var statearr_23191_23212 = state_23181__$1;(statearr_23191_23212[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 8))
{var inst_23153 = (state_23181[7]);var inst_23160 = (state_23181[8]);var inst_23162 = (state_23181[10]);var inst_23161 = (state_23181[9]);var inst_23165 = (function (){var c = inst_23162;var v = inst_23161;var vec__23158 = inst_23160;var cs = inst_23153;return ((function (c,v,vec__23158,cs,inst_23153,inst_23160,inst_23162,inst_23161,state_val_23182){
return (function (p1__23098_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23098_SHARP_);
});
;})(c,v,vec__23158,cs,inst_23153,inst_23160,inst_23162,inst_23161,state_val_23182))
})();var inst_23166 = cljs.core.filterv(inst_23165,inst_23153);var inst_23153__$1 = inst_23166;var state_23181__$1 = (function (){var statearr_23192 = state_23181;(statearr_23192[7] = inst_23153__$1);
return statearr_23192;
})();var statearr_23193_23213 = state_23181__$1;(statearr_23193_23213[2] = null);
(statearr_23193_23213[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 9))
{var inst_23161 = (state_23181[9]);var state_23181__$1 = state_23181;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23181__$1,11,out,inst_23161);
} else
{if((state_val_23182 === 10))
{var inst_23173 = (state_23181[2]);var state_23181__$1 = state_23181;var statearr_23195_23214 = state_23181__$1;(statearr_23195_23214[2] = inst_23173);
(statearr_23195_23214[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23182 === 11))
{var inst_23153 = (state_23181[7]);var inst_23170 = (state_23181[2]);var tmp23194 = inst_23153;var inst_23153__$1 = tmp23194;var state_23181__$1 = (function (){var statearr_23196 = state_23181;(statearr_23196[7] = inst_23153__$1);
(statearr_23196[11] = inst_23170);
return statearr_23196;
})();var statearr_23197_23215 = state_23181__$1;(statearr_23197_23215[2] = null);
(statearr_23197_23215[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_23201 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23201[0] = state_machine__5507__auto__);
(statearr_23201[1] = 1);
return statearr_23201;
});
var state_machine__5507__auto____1 = (function (state_23181){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23181);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23202){if((e23202 instanceof Object))
{var ex__5510__auto__ = e23202;var statearr_23203_23216 = state_23181;(statearr_23203_23216[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23181);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23217 = state_23181;
state_23181 = G__23217;
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
})();var state__5523__auto__ = (function (){var statearr_23204 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23205);
return statearr_23204;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23287){var state_val_23288 = (state_23287[1]);if((state_val_23288 === 1))
{var inst_23264 = 0;var state_23287__$1 = (function (){var statearr_23289 = state_23287;(statearr_23289[7] = inst_23264);
return statearr_23289;
})();var statearr_23290_23311 = state_23287__$1;(statearr_23290_23311[2] = null);
(statearr_23290_23311[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 2))
{var inst_23264 = (state_23287[7]);var inst_23266 = (inst_23264 < n);var state_23287__$1 = state_23287;if(cljs.core.truth_(inst_23266))
{var statearr_23291_23312 = state_23287__$1;(statearr_23291_23312[1] = 4);
} else
{var statearr_23292_23313 = state_23287__$1;(statearr_23292_23313[1] = 5);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 3))
{var inst_23284 = (state_23287[2]);var inst_23285 = cljs.core.async.close_BANG_(out);var state_23287__$1 = (function (){var statearr_23293 = state_23287;(statearr_23293[8] = inst_23284);
return statearr_23293;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23287__$1,inst_23285);
} else
{if((state_val_23288 === 4))
{var state_23287__$1 = state_23287;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23287__$1,7,ch);
} else
{if((state_val_23288 === 5))
{var state_23287__$1 = state_23287;var statearr_23294_23314 = state_23287__$1;(statearr_23294_23314[2] = null);
(statearr_23294_23314[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 6))
{var inst_23282 = (state_23287[2]);var state_23287__$1 = state_23287;var statearr_23295_23315 = state_23287__$1;(statearr_23295_23315[2] = inst_23282);
(statearr_23295_23315[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 7))
{var inst_23269 = (state_23287[9]);var inst_23269__$1 = (state_23287[2]);var inst_23270 = (inst_23269__$1 == null);var inst_23271 = cljs.core.not(inst_23270);var state_23287__$1 = (function (){var statearr_23296 = state_23287;(statearr_23296[9] = inst_23269__$1);
return statearr_23296;
})();if(inst_23271)
{var statearr_23297_23316 = state_23287__$1;(statearr_23297_23316[1] = 8);
} else
{var statearr_23298_23317 = state_23287__$1;(statearr_23298_23317[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 8))
{var inst_23269 = (state_23287[9]);var state_23287__$1 = state_23287;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23287__$1,11,out,inst_23269);
} else
{if((state_val_23288 === 9))
{var state_23287__$1 = state_23287;var statearr_23299_23318 = state_23287__$1;(statearr_23299_23318[2] = null);
(statearr_23299_23318[1] = 10);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 10))
{var inst_23279 = (state_23287[2]);var state_23287__$1 = state_23287;var statearr_23300_23319 = state_23287__$1;(statearr_23300_23319[2] = inst_23279);
(statearr_23300_23319[1] = 6);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23288 === 11))
{var inst_23264 = (state_23287[7]);var inst_23274 = (state_23287[2]);var inst_23275 = (inst_23264 + 1);var inst_23264__$1 = inst_23275;var state_23287__$1 = (function (){var statearr_23301 = state_23287;(statearr_23301[10] = inst_23274);
(statearr_23301[7] = inst_23264__$1);
return statearr_23301;
})();var statearr_23302_23320 = state_23287__$1;(statearr_23302_23320[2] = null);
(statearr_23302_23320[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_23306 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23306[0] = state_machine__5507__auto__);
(statearr_23306[1] = 1);
return statearr_23306;
});
var state_machine__5507__auto____1 = (function (state_23287){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23287);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23307){if((e23307 instanceof Object))
{var ex__5510__auto__ = e23307;var statearr_23308_23321 = state_23287;(statearr_23308_23321[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23287);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23322 = state_23287;
state_23287 = G__23322;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23287){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23309 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23310);
return statearr_23309;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23394){var state_val_23395 = (state_23394[1]);if((state_val_23395 === 1))
{var inst_23371 = null;var state_23394__$1 = (function (){var statearr_23396 = state_23394;(statearr_23396[7] = inst_23371);
return statearr_23396;
})();var statearr_23397_23420 = state_23394__$1;(statearr_23397_23420[2] = null);
(statearr_23397_23420[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 2))
{var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23394__$1,4,ch);
} else
{if((state_val_23395 === 3))
{var inst_23391 = (state_23394[2]);var inst_23392 = cljs.core.async.close_BANG_(out);var state_23394__$1 = (function (){var statearr_23398 = state_23394;(statearr_23398[8] = inst_23391);
return statearr_23398;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23394__$1,inst_23392);
} else
{if((state_val_23395 === 4))
{var inst_23374 = (state_23394[9]);var inst_23374__$1 = (state_23394[2]);var inst_23375 = (inst_23374__$1 == null);var inst_23376 = cljs.core.not(inst_23375);var state_23394__$1 = (function (){var statearr_23399 = state_23394;(statearr_23399[9] = inst_23374__$1);
return statearr_23399;
})();if(inst_23376)
{var statearr_23400_23421 = state_23394__$1;(statearr_23400_23421[1] = 5);
} else
{var statearr_23401_23422 = state_23394__$1;(statearr_23401_23422[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 5))
{var inst_23374 = (state_23394[9]);var inst_23371 = (state_23394[7]);var inst_23378 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23374,inst_23371);var state_23394__$1 = state_23394;if(inst_23378)
{var statearr_23402_23423 = state_23394__$1;(statearr_23402_23423[1] = 8);
} else
{var statearr_23403_23424 = state_23394__$1;(statearr_23403_23424[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 6))
{var state_23394__$1 = state_23394;var statearr_23405_23425 = state_23394__$1;(statearr_23405_23425[2] = null);
(statearr_23405_23425[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 7))
{var inst_23389 = (state_23394[2]);var state_23394__$1 = state_23394;var statearr_23406_23426 = state_23394__$1;(statearr_23406_23426[2] = inst_23389);
(statearr_23406_23426[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 8))
{var inst_23371 = (state_23394[7]);var tmp23404 = inst_23371;var inst_23371__$1 = tmp23404;var state_23394__$1 = (function (){var statearr_23407 = state_23394;(statearr_23407[7] = inst_23371__$1);
return statearr_23407;
})();var statearr_23408_23427 = state_23394__$1;(statearr_23408_23427[2] = null);
(statearr_23408_23427[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 9))
{var inst_23374 = (state_23394[9]);var state_23394__$1 = state_23394;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23394__$1,11,out,inst_23374);
} else
{if((state_val_23395 === 10))
{var inst_23386 = (state_23394[2]);var state_23394__$1 = state_23394;var statearr_23409_23428 = state_23394__$1;(statearr_23409_23428[2] = inst_23386);
(statearr_23409_23428[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23395 === 11))
{var inst_23374 = (state_23394[9]);var inst_23383 = (state_23394[2]);var inst_23371 = inst_23374;var state_23394__$1 = (function (){var statearr_23410 = state_23394;(statearr_23410[7] = inst_23371);
(statearr_23410[10] = inst_23383);
return statearr_23410;
})();var statearr_23411_23429 = state_23394__$1;(statearr_23411_23429[2] = null);
(statearr_23411_23429[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_23415 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23415[0] = state_machine__5507__auto__);
(statearr_23415[1] = 1);
return statearr_23415;
});
var state_machine__5507__auto____1 = (function (state_23394){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23394);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23416){if((e23416 instanceof Object))
{var ex__5510__auto__ = e23416;var statearr_23417_23430 = state_23394;(statearr_23417_23430[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23394);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23431 = state_23394;
state_23394 = G__23431;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23394){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23418 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23419);
return statearr_23418;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23536){var state_val_23537 = (state_23536[1]);if((state_val_23537 === 1))
{var inst_23499 = (new Array(n));var inst_23500 = inst_23499;var inst_23501 = 0;var state_23536__$1 = (function (){var statearr_23538 = state_23536;(statearr_23538[7] = inst_23501);
(statearr_23538[8] = inst_23500);
return statearr_23538;
})();var statearr_23539_23567 = state_23536__$1;(statearr_23539_23567[2] = null);
(statearr_23539_23567[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 2))
{var state_23536__$1 = state_23536;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23536__$1,4,ch);
} else
{if((state_val_23537 === 3))
{var inst_23534 = (state_23536[2]);var state_23536__$1 = state_23536;return cljs.core.async.impl.ioc_helpers.return_chan(state_23536__$1,inst_23534);
} else
{if((state_val_23537 === 4))
{var inst_23504 = (state_23536[9]);var inst_23504__$1 = (state_23536[2]);var inst_23505 = (inst_23504__$1 == null);var inst_23506 = cljs.core.not(inst_23505);var state_23536__$1 = (function (){var statearr_23540 = state_23536;(statearr_23540[9] = inst_23504__$1);
return statearr_23540;
})();if(inst_23506)
{var statearr_23541_23568 = state_23536__$1;(statearr_23541_23568[1] = 5);
} else
{var statearr_23542_23569 = state_23536__$1;(statearr_23542_23569[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 5))
{var inst_23501 = (state_23536[7]);var inst_23504 = (state_23536[9]);var inst_23500 = (state_23536[8]);var inst_23509 = (state_23536[10]);var inst_23508 = (inst_23500[inst_23501] = inst_23504);var inst_23509__$1 = (inst_23501 + 1);var inst_23510 = (inst_23509__$1 < n);var state_23536__$1 = (function (){var statearr_23543 = state_23536;(statearr_23543[11] = inst_23508);
(statearr_23543[10] = inst_23509__$1);
return statearr_23543;
})();if(cljs.core.truth_(inst_23510))
{var statearr_23544_23570 = state_23536__$1;(statearr_23544_23570[1] = 8);
} else
{var statearr_23545_23571 = state_23536__$1;(statearr_23545_23571[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 6))
{var inst_23501 = (state_23536[7]);var inst_23522 = (inst_23501 > 0);var state_23536__$1 = state_23536;if(cljs.core.truth_(inst_23522))
{var statearr_23547_23572 = state_23536__$1;(statearr_23547_23572[1] = 12);
} else
{var statearr_23548_23573 = state_23536__$1;(statearr_23548_23573[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 7))
{var inst_23532 = (state_23536[2]);var state_23536__$1 = state_23536;var statearr_23549_23574 = state_23536__$1;(statearr_23549_23574[2] = inst_23532);
(statearr_23549_23574[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 8))
{var inst_23500 = (state_23536[8]);var inst_23509 = (state_23536[10]);var tmp23546 = inst_23500;var inst_23500__$1 = tmp23546;var inst_23501 = inst_23509;var state_23536__$1 = (function (){var statearr_23550 = state_23536;(statearr_23550[7] = inst_23501);
(statearr_23550[8] = inst_23500__$1);
return statearr_23550;
})();var statearr_23551_23575 = state_23536__$1;(statearr_23551_23575[2] = null);
(statearr_23551_23575[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 9))
{var inst_23500 = (state_23536[8]);var inst_23514 = cljs.core.vec(inst_23500);var state_23536__$1 = state_23536;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23536__$1,11,out,inst_23514);
} else
{if((state_val_23537 === 10))
{var inst_23520 = (state_23536[2]);var state_23536__$1 = state_23536;var statearr_23552_23576 = state_23536__$1;(statearr_23552_23576[2] = inst_23520);
(statearr_23552_23576[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 11))
{var inst_23516 = (state_23536[2]);var inst_23517 = (new Array(n));var inst_23500 = inst_23517;var inst_23501 = 0;var state_23536__$1 = (function (){var statearr_23553 = state_23536;(statearr_23553[7] = inst_23501);
(statearr_23553[8] = inst_23500);
(statearr_23553[12] = inst_23516);
return statearr_23553;
})();var statearr_23554_23577 = state_23536__$1;(statearr_23554_23577[2] = null);
(statearr_23554_23577[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 12))
{var inst_23500 = (state_23536[8]);var inst_23524 = cljs.core.vec(inst_23500);var state_23536__$1 = state_23536;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23536__$1,15,out,inst_23524);
} else
{if((state_val_23537 === 13))
{var state_23536__$1 = state_23536;var statearr_23555_23578 = state_23536__$1;(statearr_23555_23578[2] = null);
(statearr_23555_23578[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 14))
{var inst_23529 = (state_23536[2]);var inst_23530 = cljs.core.async.close_BANG_(out);var state_23536__$1 = (function (){var statearr_23556 = state_23536;(statearr_23556[13] = inst_23529);
return statearr_23556;
})();var statearr_23557_23579 = state_23536__$1;(statearr_23557_23579[2] = inst_23530);
(statearr_23557_23579[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23537 === 15))
{var inst_23526 = (state_23536[2]);var state_23536__$1 = state_23536;var statearr_23558_23580 = state_23536__$1;(statearr_23558_23580[2] = inst_23526);
(statearr_23558_23580[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_23562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23562[0] = state_machine__5507__auto__);
(statearr_23562[1] = 1);
return statearr_23562;
});
var state_machine__5507__auto____1 = (function (state_23536){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23536);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23563){if((e23563 instanceof Object))
{var ex__5510__auto__ = e23563;var statearr_23564_23581 = state_23536;(statearr_23564_23581[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23536);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23582 = state_23536;
state_23536 = G__23582;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23536){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23565 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23566);
return statearr_23565;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___23725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23695){var state_val_23696 = (state_23695[1]);if((state_val_23696 === 1))
{var inst_23654 = [];var inst_23655 = inst_23654;var inst_23656 = cljs.core.constant$keyword$139;var state_23695__$1 = (function (){var statearr_23697 = state_23695;(statearr_23697[7] = inst_23655);
(statearr_23697[8] = inst_23656);
return statearr_23697;
})();var statearr_23698_23726 = state_23695__$1;(statearr_23698_23726[2] = null);
(statearr_23698_23726[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 2))
{var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23695__$1,4,ch);
} else
{if((state_val_23696 === 3))
{var inst_23693 = (state_23695[2]);var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.return_chan(state_23695__$1,inst_23693);
} else
{if((state_val_23696 === 4))
{var inst_23659 = (state_23695[9]);var inst_23659__$1 = (state_23695[2]);var inst_23660 = (inst_23659__$1 == null);var inst_23661 = cljs.core.not(inst_23660);var state_23695__$1 = (function (){var statearr_23699 = state_23695;(statearr_23699[9] = inst_23659__$1);
return statearr_23699;
})();if(inst_23661)
{var statearr_23700_23727 = state_23695__$1;(statearr_23700_23727[1] = 5);
} else
{var statearr_23701_23728 = state_23695__$1;(statearr_23701_23728[1] = 6);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 5))
{var inst_23659 = (state_23695[9]);var inst_23656 = (state_23695[8]);var inst_23663 = (state_23695[10]);var inst_23663__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23659) : f.call(null,inst_23659));var inst_23664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23663__$1,inst_23656);var inst_23665 = cljs.core.keyword_identical_QMARK_(inst_23656,cljs.core.constant$keyword$139);var inst_23666 = (inst_23664) || (inst_23665);var state_23695__$1 = (function (){var statearr_23702 = state_23695;(statearr_23702[10] = inst_23663__$1);
return statearr_23702;
})();if(cljs.core.truth_(inst_23666))
{var statearr_23703_23729 = state_23695__$1;(statearr_23703_23729[1] = 8);
} else
{var statearr_23704_23730 = state_23695__$1;(statearr_23704_23730[1] = 9);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 6))
{var inst_23655 = (state_23695[7]);var inst_23680 = inst_23655.length;var inst_23681 = (inst_23680 > 0);var state_23695__$1 = state_23695;if(cljs.core.truth_(inst_23681))
{var statearr_23706_23731 = state_23695__$1;(statearr_23706_23731[1] = 12);
} else
{var statearr_23707_23732 = state_23695__$1;(statearr_23707_23732[1] = 13);
}
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 7))
{var inst_23691 = (state_23695[2]);var state_23695__$1 = state_23695;var statearr_23708_23733 = state_23695__$1;(statearr_23708_23733[2] = inst_23691);
(statearr_23708_23733[1] = 3);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 8))
{var inst_23659 = (state_23695[9]);var inst_23655 = (state_23695[7]);var inst_23663 = (state_23695[10]);var inst_23668 = inst_23655.push(inst_23659);var tmp23705 = inst_23655;var inst_23655__$1 = tmp23705;var inst_23656 = inst_23663;var state_23695__$1 = (function (){var statearr_23709 = state_23695;(statearr_23709[11] = inst_23668);
(statearr_23709[7] = inst_23655__$1);
(statearr_23709[8] = inst_23656);
return statearr_23709;
})();var statearr_23710_23734 = state_23695__$1;(statearr_23710_23734[2] = null);
(statearr_23710_23734[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 9))
{var inst_23655 = (state_23695[7]);var inst_23671 = cljs.core.vec(inst_23655);var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23695__$1,11,out,inst_23671);
} else
{if((state_val_23696 === 10))
{var inst_23678 = (state_23695[2]);var state_23695__$1 = state_23695;var statearr_23711_23735 = state_23695__$1;(statearr_23711_23735[2] = inst_23678);
(statearr_23711_23735[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 11))
{var inst_23659 = (state_23695[9]);var inst_23663 = (state_23695[10]);var inst_23673 = (state_23695[2]);var inst_23674 = [];var inst_23675 = inst_23674.push(inst_23659);var inst_23655 = inst_23674;var inst_23656 = inst_23663;var state_23695__$1 = (function (){var statearr_23712 = state_23695;(statearr_23712[12] = inst_23675);
(statearr_23712[13] = inst_23673);
(statearr_23712[7] = inst_23655);
(statearr_23712[8] = inst_23656);
return statearr_23712;
})();var statearr_23713_23736 = state_23695__$1;(statearr_23713_23736[2] = null);
(statearr_23713_23736[1] = 2);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 12))
{var inst_23655 = (state_23695[7]);var inst_23683 = cljs.core.vec(inst_23655);var state_23695__$1 = state_23695;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23695__$1,15,out,inst_23683);
} else
{if((state_val_23696 === 13))
{var state_23695__$1 = state_23695;var statearr_23714_23737 = state_23695__$1;(statearr_23714_23737[2] = null);
(statearr_23714_23737[1] = 14);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 14))
{var inst_23688 = (state_23695[2]);var inst_23689 = cljs.core.async.close_BANG_(out);var state_23695__$1 = (function (){var statearr_23715 = state_23695;(statearr_23715[14] = inst_23688);
return statearr_23715;
})();var statearr_23716_23738 = state_23695__$1;(statearr_23716_23738[2] = inst_23689);
(statearr_23716_23738[1] = 7);
return cljs.core.constant$keyword$126;
} else
{if((state_val_23696 === 15))
{var inst_23685 = (state_23695[2]);var state_23695__$1 = state_23695;var statearr_23717_23739 = state_23695__$1;(statearr_23717_23739[2] = inst_23685);
(statearr_23717_23739[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_23721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23721[0] = state_machine__5507__auto__);
(statearr_23721[1] = 1);
return statearr_23721;
});
var state_machine__5507__auto____1 = (function (state_23695){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23695);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$126))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object))
{var ex__5510__auto__ = e23722;var statearr_23723_23740 = state_23695;(statearr_23723_23740[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23695);
return cljs.core.constant$keyword$126;
} else
{if(cljs.core.constant$keyword$115)
{throw e23722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$126))
{{
var G__23741 = state_23695;
state_23695 = G__23741;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23724 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23725);
return statearr_23724;
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
