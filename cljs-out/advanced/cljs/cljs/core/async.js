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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22159 = (function (f,fn_handler,meta22160){
this.f = f;
this.fn_handler = fn_handler;
this.meta22160 = meta22160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22159.cljs$lang$type = true;
cljs.core.async.t22159.cljs$lang$ctorStr = "cljs.core.async/t22159";
cljs.core.async.t22159.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22159");
});
cljs.core.async.t22159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22161){var self__ = this;
var _22161__$1 = this;return self__.meta22160;
});
cljs.core.async.t22159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22161,meta22160__$1){var self__ = this;
var _22161__$1 = this;return (new cljs.core.async.t22159(self__.f,self__.fn_handler,meta22160__$1));
});
cljs.core.async.__GT_t22159 = (function __GT_t22159(f__$1,fn_handler__$1,meta22160){return (new cljs.core.async.t22159(f__$1,fn_handler__$1,meta22160));
});
}
return (new cljs.core.async.t22159(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22163 = buff;if(G__22163)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22163.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22163.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22163);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22163);
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
{var val_22164 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22164) : fn1.call(null,val_22164));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22164) : fn1.call(null,val_22164));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22165 = n;var x_22166 = 0;while(true){
if((x_22166 < n__4248__auto___22165))
{(a[x_22166] = 0);
{
var G__22167 = (x_22166 + 1);
x_22166 = G__22167;
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
var G__22168 = (i + 1);
i = G__22168;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22172 = (function (flag,alt_flag,meta22173){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22173 = meta22173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22172.cljs$lang$type = true;
cljs.core.async.t22172.cljs$lang$ctorStr = "cljs.core.async/t22172";
cljs.core.async.t22172.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22172");
});
cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22174){var self__ = this;
var _22174__$1 = this;return self__.meta22173;
});
cljs.core.async.t22172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22174,meta22173__$1){var self__ = this;
var _22174__$1 = this;return (new cljs.core.async.t22172(self__.flag,self__.alt_flag,meta22173__$1));
});
cljs.core.async.__GT_t22172 = (function __GT_t22172(flag__$1,alt_flag__$1,meta22173){return (new cljs.core.async.t22172(flag__$1,alt_flag__$1,meta22173));
});
}
return (new cljs.core.async.t22172(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22178 = (function (cb,flag,alt_handler,meta22179){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22179 = meta22179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22178.cljs$lang$type = true;
cljs.core.async.t22178.cljs$lang$ctorStr = "cljs.core.async/t22178";
cljs.core.async.t22178.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22178");
});
cljs.core.async.t22178.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22180){var self__ = this;
var _22180__$1 = this;return self__.meta22179;
});
cljs.core.async.t22178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22180,meta22179__$1){var self__ = this;
var _22180__$1 = this;return (new cljs.core.async.t22178(self__.cb,self__.flag,self__.alt_handler,meta22179__$1));
});
cljs.core.async.__GT_t22178 = (function __GT_t22178(cb__$1,flag__$1,alt_handler__$1,meta22179){return (new cljs.core.async.t22178(cb__$1,flag__$1,alt_handler__$1,meta22179));
});
}
return (new cljs.core.async.t22178(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22181_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22181_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22181_SHARP_,port], null)));
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
var G__22182 = (i + 1);
i = G__22182;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$149))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$149], null));
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
var alts_BANG___delegate = function (ports,p__22183){var map__22185 = p__22183;var map__22185__$1 = ((cljs.core.seq_QMARK_(map__22185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22185):map__22185);var opts = map__22185__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22183 = null;if (arguments.length > 1) {
  p__22183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22183);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22186){
var ports = cljs.core.first(arglist__22186);
var p__22183 = cljs.core.rest(arglist__22186);
return alts_BANG___delegate(ports,p__22183);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22194 = (function (ch,f,map_LT_,meta22195){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22195 = meta22195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22194.cljs$lang$type = true;
cljs.core.async.t22194.cljs$lang$ctorStr = "cljs.core.async/t22194";
cljs.core.async.t22194.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22194");
});
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22197 = (function (fn1,_,meta22195,ch,f,map_LT_,meta22198){
this.fn1 = fn1;
this._ = _;
this.meta22195 = meta22195;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22198 = meta22198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22197.cljs$lang$type = true;
cljs.core.async.t22197.cljs$lang$ctorStr = "cljs.core.async/t22197";
cljs.core.async.t22197.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22197");
});
cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22187_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22187_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22187_SHARP_) : self__.f.call(null,p1__22187_SHARP_)))) : f1.call(null,(((p1__22187_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22187_SHARP_) : self__.f.call(null,p1__22187_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22199){var self__ = this;
var _22199__$1 = this;return self__.meta22198;
});
cljs.core.async.t22197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22199,meta22198__$1){var self__ = this;
var _22199__$1 = this;return (new cljs.core.async.t22197(self__.fn1,self__._,self__.meta22195,self__.ch,self__.f,self__.map_LT_,meta22198__$1));
});
cljs.core.async.__GT_t22197 = (function __GT_t22197(fn1__$1,___$2,meta22195__$1,ch__$2,f__$2,map_LT___$2,meta22198){return (new cljs.core.async.t22197(fn1__$1,___$2,meta22195__$1,ch__$2,f__$2,map_LT___$2,meta22198));
});
}
return (new cljs.core.async.t22197(fn1,___$1,self__.meta22195,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22196){var self__ = this;
var _22196__$1 = this;return self__.meta22195;
});
cljs.core.async.t22194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22196,meta22195__$1){var self__ = this;
var _22196__$1 = this;return (new cljs.core.async.t22194(self__.ch,self__.f,self__.map_LT_,meta22195__$1));
});
cljs.core.async.__GT_t22194 = (function __GT_t22194(ch__$1,f__$1,map_LT___$1,meta22195){return (new cljs.core.async.t22194(ch__$1,f__$1,map_LT___$1,meta22195));
});
}
return (new cljs.core.async.t22194(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22203 = (function (ch,f,map_GT_,meta22204){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22204 = meta22204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22203.cljs$lang$type = true;
cljs.core.async.t22203.cljs$lang$ctorStr = "cljs.core.async/t22203";
cljs.core.async.t22203.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22203");
});
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22205){var self__ = this;
var _22205__$1 = this;return self__.meta22204;
});
cljs.core.async.t22203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22205,meta22204__$1){var self__ = this;
var _22205__$1 = this;return (new cljs.core.async.t22203(self__.ch,self__.f,self__.map_GT_,meta22204__$1));
});
cljs.core.async.__GT_t22203 = (function __GT_t22203(ch__$1,f__$1,map_GT___$1,meta22204){return (new cljs.core.async.t22203(ch__$1,f__$1,map_GT___$1,meta22204));
});
}
return (new cljs.core.async.t22203(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22209 = (function (ch,p,filter_GT_,meta22210){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22210 = meta22210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22209.cljs$lang$type = true;
cljs.core.async.t22209.cljs$lang$ctorStr = "cljs.core.async/t22209";
cljs.core.async.t22209.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22209");
});
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22211){var self__ = this;
var _22211__$1 = this;return self__.meta22210;
});
cljs.core.async.t22209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22211,meta22210__$1){var self__ = this;
var _22211__$1 = this;return (new cljs.core.async.t22209(self__.ch,self__.p,self__.filter_GT_,meta22210__$1));
});
cljs.core.async.__GT_t22209 = (function __GT_t22209(ch__$1,p__$1,filter_GT___$1,meta22210){return (new cljs.core.async.t22209(ch__$1,p__$1,filter_GT___$1,meta22210));
});
}
return (new cljs.core.async.t22209(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22273){var state_val_22274 = (state_22273[1]);if((state_val_22274 === 1))
{var state_22273__$1 = state_22273;var statearr_22275_22295 = state_22273__$1;(statearr_22275_22295[2] = null);
(statearr_22275_22295[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 2))
{var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22273__$1,4,ch);
} else
{if((state_val_22274 === 3))
{var inst_22271 = (state_22273[2]);var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.return_chan(state_22273__$1,inst_22271);
} else
{if((state_val_22274 === 4))
{var inst_22255 = (state_22273[7]);var inst_22255__$1 = (state_22273[2]);var inst_22256 = (inst_22255__$1 == null);var state_22273__$1 = (function (){var statearr_22276 = state_22273;(statearr_22276[7] = inst_22255__$1);
return statearr_22276;
})();if(cljs.core.truth_(inst_22256))
{var statearr_22277_22296 = state_22273__$1;(statearr_22277_22296[1] = 5);
} else
{var statearr_22278_22297 = state_22273__$1;(statearr_22278_22297[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 5))
{var inst_22258 = cljs.core.async.close_BANG_(out);var state_22273__$1 = state_22273;var statearr_22279_22298 = state_22273__$1;(statearr_22279_22298[2] = inst_22258);
(statearr_22279_22298[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 6))
{var inst_22255 = (state_22273[7]);var inst_22260 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22255) : p.call(null,inst_22255));var state_22273__$1 = state_22273;if(cljs.core.truth_(inst_22260))
{var statearr_22280_22299 = state_22273__$1;(statearr_22280_22299[1] = 8);
} else
{var statearr_22281_22300 = state_22273__$1;(statearr_22281_22300[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 7))
{var inst_22269 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22282_22301 = state_22273__$1;(statearr_22282_22301[2] = inst_22269);
(statearr_22282_22301[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 8))
{var inst_22255 = (state_22273[7]);var state_22273__$1 = state_22273;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22273__$1,11,out,inst_22255);
} else
{if((state_val_22274 === 9))
{var state_22273__$1 = state_22273;var statearr_22283_22302 = state_22273__$1;(statearr_22283_22302[2] = null);
(statearr_22283_22302[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 10))
{var inst_22266 = (state_22273[2]);var state_22273__$1 = (function (){var statearr_22284 = state_22273;(statearr_22284[8] = inst_22266);
return statearr_22284;
})();var statearr_22285_22303 = state_22273__$1;(statearr_22285_22303[2] = null);
(statearr_22285_22303[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22274 === 11))
{var inst_22263 = (state_22273[2]);var state_22273__$1 = state_22273;var statearr_22286_22304 = state_22273__$1;(statearr_22286_22304[2] = inst_22263);
(statearr_22286_22304[1] = 10);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_22290 = [null,null,null,null,null,null,null,null,null];(statearr_22290[0] = state_machine__5507__auto__);
(statearr_22290[1] = 1);
return statearr_22290;
});
var state_machine__5507__auto____1 = (function (state_22273){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22273);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22291){if((e22291 instanceof Object))
{var ex__5510__auto__ = e22291;var statearr_22292_22305 = state_22273;(statearr_22292_22305[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22273);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22306 = state_22273;
state_22273 = G__22306;
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
})();var state__5523__auto__ = (function (){var statearr_22293 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22294);
return statearr_22293;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22458){var state_val_22459 = (state_22458[1]);if((state_val_22459 === 1))
{var state_22458__$1 = state_22458;var statearr_22460_22497 = state_22458__$1;(statearr_22460_22497[2] = null);
(statearr_22460_22497[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 2))
{var state_22458__$1 = state_22458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22458__$1,4,in$);
} else
{if((state_val_22459 === 3))
{var inst_22456 = (state_22458[2]);var state_22458__$1 = state_22458;return cljs.core.async.impl.ioc_helpers.return_chan(state_22458__$1,inst_22456);
} else
{if((state_val_22459 === 4))
{var inst_22404 = (state_22458[7]);var inst_22404__$1 = (state_22458[2]);var inst_22405 = (inst_22404__$1 == null);var state_22458__$1 = (function (){var statearr_22461 = state_22458;(statearr_22461[7] = inst_22404__$1);
return statearr_22461;
})();if(cljs.core.truth_(inst_22405))
{var statearr_22462_22498 = state_22458__$1;(statearr_22462_22498[1] = 5);
} else
{var statearr_22463_22499 = state_22458__$1;(statearr_22463_22499[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 5))
{var inst_22407 = cljs.core.async.close_BANG_(out);var state_22458__$1 = state_22458;var statearr_22464_22500 = state_22458__$1;(statearr_22464_22500[2] = inst_22407);
(statearr_22464_22500[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 6))
{var inst_22404 = (state_22458[7]);var inst_22409 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22404) : f.call(null,inst_22404));var inst_22414 = cljs.core.seq(inst_22409);var inst_22415 = inst_22414;var inst_22416 = null;var inst_22417 = 0;var inst_22418 = 0;var state_22458__$1 = (function (){var statearr_22465 = state_22458;(statearr_22465[8] = inst_22415);
(statearr_22465[9] = inst_22417);
(statearr_22465[10] = inst_22416);
(statearr_22465[11] = inst_22418);
return statearr_22465;
})();var statearr_22466_22501 = state_22458__$1;(statearr_22466_22501[2] = null);
(statearr_22466_22501[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 7))
{var inst_22454 = (state_22458[2]);var state_22458__$1 = state_22458;var statearr_22467_22502 = state_22458__$1;(statearr_22467_22502[2] = inst_22454);
(statearr_22467_22502[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 8))
{var inst_22417 = (state_22458[9]);var inst_22418 = (state_22458[11]);var inst_22420 = (inst_22418 < inst_22417);var inst_22421 = inst_22420;var state_22458__$1 = state_22458;if(cljs.core.truth_(inst_22421))
{var statearr_22468_22503 = state_22458__$1;(statearr_22468_22503[1] = 10);
} else
{var statearr_22469_22504 = state_22458__$1;(statearr_22469_22504[1] = 11);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 9))
{var inst_22451 = (state_22458[2]);var state_22458__$1 = (function (){var statearr_22470 = state_22458;(statearr_22470[12] = inst_22451);
return statearr_22470;
})();var statearr_22471_22505 = state_22458__$1;(statearr_22471_22505[2] = null);
(statearr_22471_22505[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 10))
{var inst_22416 = (state_22458[10]);var inst_22418 = (state_22458[11]);var inst_22423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22416,inst_22418);var state_22458__$1 = state_22458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22458__$1,13,out,inst_22423);
} else
{if((state_val_22459 === 11))
{var inst_22415 = (state_22458[8]);var inst_22429 = (state_22458[13]);var inst_22429__$1 = cljs.core.seq(inst_22415);var state_22458__$1 = (function (){var statearr_22475 = state_22458;(statearr_22475[13] = inst_22429__$1);
return statearr_22475;
})();if(inst_22429__$1)
{var statearr_22476_22506 = state_22458__$1;(statearr_22476_22506[1] = 14);
} else
{var statearr_22477_22507 = state_22458__$1;(statearr_22477_22507[1] = 15);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 12))
{var inst_22449 = (state_22458[2]);var state_22458__$1 = state_22458;var statearr_22478_22508 = state_22458__$1;(statearr_22478_22508[2] = inst_22449);
(statearr_22478_22508[1] = 9);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 13))
{var inst_22415 = (state_22458[8]);var inst_22417 = (state_22458[9]);var inst_22416 = (state_22458[10]);var inst_22418 = (state_22458[11]);var inst_22425 = (state_22458[2]);var inst_22426 = (inst_22418 + 1);var tmp22472 = inst_22415;var tmp22473 = inst_22417;var tmp22474 = inst_22416;var inst_22415__$1 = tmp22472;var inst_22416__$1 = tmp22474;var inst_22417__$1 = tmp22473;var inst_22418__$1 = inst_22426;var state_22458__$1 = (function (){var statearr_22479 = state_22458;(statearr_22479[14] = inst_22425);
(statearr_22479[8] = inst_22415__$1);
(statearr_22479[9] = inst_22417__$1);
(statearr_22479[10] = inst_22416__$1);
(statearr_22479[11] = inst_22418__$1);
return statearr_22479;
})();var statearr_22480_22509 = state_22458__$1;(statearr_22480_22509[2] = null);
(statearr_22480_22509[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 14))
{var inst_22429 = (state_22458[13]);var inst_22431 = cljs.core.chunked_seq_QMARK_(inst_22429);var state_22458__$1 = state_22458;if(inst_22431)
{var statearr_22481_22510 = state_22458__$1;(statearr_22481_22510[1] = 17);
} else
{var statearr_22482_22511 = state_22458__$1;(statearr_22482_22511[1] = 18);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 15))
{var state_22458__$1 = state_22458;var statearr_22483_22512 = state_22458__$1;(statearr_22483_22512[2] = null);
(statearr_22483_22512[1] = 16);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 16))
{var inst_22447 = (state_22458[2]);var state_22458__$1 = state_22458;var statearr_22484_22513 = state_22458__$1;(statearr_22484_22513[2] = inst_22447);
(statearr_22484_22513[1] = 12);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 17))
{var inst_22429 = (state_22458[13]);var inst_22433 = cljs.core.chunk_first(inst_22429);var inst_22434 = cljs.core.chunk_rest(inst_22429);var inst_22435 = cljs.core.count(inst_22433);var inst_22415 = inst_22434;var inst_22416 = inst_22433;var inst_22417 = inst_22435;var inst_22418 = 0;var state_22458__$1 = (function (){var statearr_22485 = state_22458;(statearr_22485[8] = inst_22415);
(statearr_22485[9] = inst_22417);
(statearr_22485[10] = inst_22416);
(statearr_22485[11] = inst_22418);
return statearr_22485;
})();var statearr_22486_22514 = state_22458__$1;(statearr_22486_22514[2] = null);
(statearr_22486_22514[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 18))
{var inst_22429 = (state_22458[13]);var inst_22438 = cljs.core.first(inst_22429);var state_22458__$1 = state_22458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22458__$1,20,out,inst_22438);
} else
{if((state_val_22459 === 19))
{var inst_22444 = (state_22458[2]);var state_22458__$1 = state_22458;var statearr_22487_22515 = state_22458__$1;(statearr_22487_22515[2] = inst_22444);
(statearr_22487_22515[1] = 16);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22459 === 20))
{var inst_22429 = (state_22458[13]);var inst_22440 = (state_22458[2]);var inst_22441 = cljs.core.next(inst_22429);var inst_22415 = inst_22441;var inst_22416 = null;var inst_22417 = 0;var inst_22418 = 0;var state_22458__$1 = (function (){var statearr_22488 = state_22458;(statearr_22488[8] = inst_22415);
(statearr_22488[9] = inst_22417);
(statearr_22488[10] = inst_22416);
(statearr_22488[15] = inst_22440);
(statearr_22488[11] = inst_22418);
return statearr_22488;
})();var statearr_22489_22516 = state_22458__$1;(statearr_22489_22516[2] = null);
(statearr_22489_22516[1] = 8);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_22493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22493[0] = state_machine__5507__auto__);
(statearr_22493[1] = 1);
return statearr_22493;
});
var state_machine__5507__auto____1 = (function (state_22458){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22458);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22494){if((e22494 instanceof Object))
{var ex__5510__auto__ = e22494;var statearr_22495_22517 = state_22458;(statearr_22495_22517[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22458);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22518 = state_22458;
state_22458 = G__22518;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22496 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22496;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___22599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22578){var state_val_22579 = (state_22578[1]);if((state_val_22579 === 1))
{var state_22578__$1 = state_22578;var statearr_22580_22600 = state_22578__$1;(statearr_22580_22600[2] = null);
(statearr_22580_22600[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 2))
{var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22578__$1,4,from);
} else
{if((state_val_22579 === 3))
{var inst_22576 = (state_22578[2]);var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.return_chan(state_22578__$1,inst_22576);
} else
{if((state_val_22579 === 4))
{var inst_22561 = (state_22578[7]);var inst_22561__$1 = (state_22578[2]);var inst_22562 = (inst_22561__$1 == null);var state_22578__$1 = (function (){var statearr_22581 = state_22578;(statearr_22581[7] = inst_22561__$1);
return statearr_22581;
})();if(cljs.core.truth_(inst_22562))
{var statearr_22582_22601 = state_22578__$1;(statearr_22582_22601[1] = 5);
} else
{var statearr_22583_22602 = state_22578__$1;(statearr_22583_22602[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 5))
{var state_22578__$1 = state_22578;if(cljs.core.truth_(close_QMARK_))
{var statearr_22584_22603 = state_22578__$1;(statearr_22584_22603[1] = 8);
} else
{var statearr_22585_22604 = state_22578__$1;(statearr_22585_22604[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 6))
{var inst_22561 = (state_22578[7]);var state_22578__$1 = state_22578;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22578__$1,11,to,inst_22561);
} else
{if((state_val_22579 === 7))
{var inst_22574 = (state_22578[2]);var state_22578__$1 = state_22578;var statearr_22586_22605 = state_22578__$1;(statearr_22586_22605[2] = inst_22574);
(statearr_22586_22605[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 8))
{var inst_22565 = cljs.core.async.close_BANG_(to);var state_22578__$1 = state_22578;var statearr_22587_22606 = state_22578__$1;(statearr_22587_22606[2] = inst_22565);
(statearr_22587_22606[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 9))
{var state_22578__$1 = state_22578;var statearr_22588_22607 = state_22578__$1;(statearr_22588_22607[2] = null);
(statearr_22588_22607[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 10))
{var inst_22568 = (state_22578[2]);var state_22578__$1 = state_22578;var statearr_22589_22608 = state_22578__$1;(statearr_22589_22608[2] = inst_22568);
(statearr_22589_22608[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22579 === 11))
{var inst_22571 = (state_22578[2]);var state_22578__$1 = (function (){var statearr_22590 = state_22578;(statearr_22590[8] = inst_22571);
return statearr_22590;
})();var statearr_22591_22609 = state_22578__$1;(statearr_22591_22609[2] = null);
(statearr_22591_22609[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_22595 = [null,null,null,null,null,null,null,null,null];(statearr_22595[0] = state_machine__5507__auto__);
(statearr_22595[1] = 1);
return statearr_22595;
});
var state_machine__5507__auto____1 = (function (state_22578){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22578);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22596){if((e22596 instanceof Object))
{var ex__5510__auto__ = e22596;var statearr_22597_22610 = state_22578;(statearr_22597_22610[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22578);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22611 = state_22578;
state_22578 = G__22611;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22598 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22599);
return statearr_22598;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___22698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22676){var state_val_22677 = (state_22676[1]);if((state_val_22677 === 1))
{var state_22676__$1 = state_22676;var statearr_22678_22699 = state_22676__$1;(statearr_22678_22699[2] = null);
(statearr_22678_22699[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 2))
{var state_22676__$1 = state_22676;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22676__$1,4,ch);
} else
{if((state_val_22677 === 3))
{var inst_22674 = (state_22676[2]);var state_22676__$1 = state_22676;return cljs.core.async.impl.ioc_helpers.return_chan(state_22676__$1,inst_22674);
} else
{if((state_val_22677 === 4))
{var inst_22657 = (state_22676[7]);var inst_22657__$1 = (state_22676[2]);var inst_22658 = (inst_22657__$1 == null);var state_22676__$1 = (function (){var statearr_22679 = state_22676;(statearr_22679[7] = inst_22657__$1);
return statearr_22679;
})();if(cljs.core.truth_(inst_22658))
{var statearr_22680_22700 = state_22676__$1;(statearr_22680_22700[1] = 5);
} else
{var statearr_22681_22701 = state_22676__$1;(statearr_22681_22701[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 5))
{var inst_22660 = cljs.core.async.close_BANG_(tc);var inst_22661 = cljs.core.async.close_BANG_(fc);var state_22676__$1 = (function (){var statearr_22682 = state_22676;(statearr_22682[8] = inst_22660);
return statearr_22682;
})();var statearr_22683_22702 = state_22676__$1;(statearr_22683_22702[2] = inst_22661);
(statearr_22683_22702[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 6))
{var inst_22657 = (state_22676[7]);var inst_22663 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22657) : p.call(null,inst_22657));var state_22676__$1 = state_22676;if(cljs.core.truth_(inst_22663))
{var statearr_22684_22703 = state_22676__$1;(statearr_22684_22703[1] = 9);
} else
{var statearr_22685_22704 = state_22676__$1;(statearr_22685_22704[1] = 10);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 7))
{var inst_22672 = (state_22676[2]);var state_22676__$1 = state_22676;var statearr_22686_22705 = state_22676__$1;(statearr_22686_22705[2] = inst_22672);
(statearr_22686_22705[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 8))
{var inst_22669 = (state_22676[2]);var state_22676__$1 = (function (){var statearr_22687 = state_22676;(statearr_22687[9] = inst_22669);
return statearr_22687;
})();var statearr_22688_22706 = state_22676__$1;(statearr_22688_22706[2] = null);
(statearr_22688_22706[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 9))
{var state_22676__$1 = state_22676;var statearr_22689_22707 = state_22676__$1;(statearr_22689_22707[2] = tc);
(statearr_22689_22707[1] = 11);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 10))
{var state_22676__$1 = state_22676;var statearr_22690_22708 = state_22676__$1;(statearr_22690_22708[2] = fc);
(statearr_22690_22708[1] = 11);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22677 === 11))
{var inst_22657 = (state_22676[7]);var inst_22667 = (state_22676[2]);var state_22676__$1 = state_22676;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22676__$1,8,inst_22667,inst_22657);
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
var state_machine__5507__auto____0 = (function (){var statearr_22694 = [null,null,null,null,null,null,null,null,null,null];(statearr_22694[0] = state_machine__5507__auto__);
(statearr_22694[1] = 1);
return statearr_22694;
});
var state_machine__5507__auto____1 = (function (state_22676){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22676);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22695){if((e22695 instanceof Object))
{var ex__5510__auto__ = e22695;var statearr_22696_22709 = state_22676;(statearr_22696_22709[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22676);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22710 = state_22676;
state_22676 = G__22710;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22697 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22698);
return statearr_22697;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22757){var state_val_22758 = (state_22757[1]);if((state_val_22758 === 7))
{var inst_22753 = (state_22757[2]);var state_22757__$1 = state_22757;var statearr_22759_22775 = state_22757__$1;(statearr_22759_22775[2] = inst_22753);
(statearr_22759_22775[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22758 === 6))
{var inst_22743 = (state_22757[7]);var inst_22746 = (state_22757[8]);var inst_22750 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_22743,inst_22746) : f.call(null,inst_22743,inst_22746));var inst_22743__$1 = inst_22750;var state_22757__$1 = (function (){var statearr_22760 = state_22757;(statearr_22760[7] = inst_22743__$1);
return statearr_22760;
})();var statearr_22761_22776 = state_22757__$1;(statearr_22761_22776[2] = null);
(statearr_22761_22776[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22758 === 5))
{var inst_22743 = (state_22757[7]);var state_22757__$1 = state_22757;var statearr_22762_22777 = state_22757__$1;(statearr_22762_22777[2] = inst_22743);
(statearr_22762_22777[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22758 === 4))
{var inst_22746 = (state_22757[8]);var inst_22746__$1 = (state_22757[2]);var inst_22747 = (inst_22746__$1 == null);var state_22757__$1 = (function (){var statearr_22763 = state_22757;(statearr_22763[8] = inst_22746__$1);
return statearr_22763;
})();if(cljs.core.truth_(inst_22747))
{var statearr_22764_22778 = state_22757__$1;(statearr_22764_22778[1] = 5);
} else
{var statearr_22765_22779 = state_22757__$1;(statearr_22765_22779[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22758 === 3))
{var inst_22755 = (state_22757[2]);var state_22757__$1 = state_22757;return cljs.core.async.impl.ioc_helpers.return_chan(state_22757__$1,inst_22755);
} else
{if((state_val_22758 === 2))
{var state_22757__$1 = state_22757;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22757__$1,4,ch);
} else
{if((state_val_22758 === 1))
{var inst_22743 = init;var state_22757__$1 = (function (){var statearr_22766 = state_22757;(statearr_22766[7] = inst_22743);
return statearr_22766;
})();var statearr_22767_22780 = state_22757__$1;(statearr_22767_22780[2] = null);
(statearr_22767_22780[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_22771 = [null,null,null,null,null,null,null,null,null];(statearr_22771[0] = state_machine__5507__auto__);
(statearr_22771[1] = 1);
return statearr_22771;
});
var state_machine__5507__auto____1 = (function (state_22757){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22757);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22772){if((e22772 instanceof Object))
{var ex__5510__auto__ = e22772;var statearr_22773_22781 = state_22757;(statearr_22773_22781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22757);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22782 = state_22757;
state_22757 = G__22782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22757){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22774 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22774;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22844){var state_val_22845 = (state_22844[1]);if((state_val_22845 === 1))
{var inst_22824 = cljs.core.seq(coll);var inst_22825 = inst_22824;var state_22844__$1 = (function (){var statearr_22846 = state_22844;(statearr_22846[7] = inst_22825);
return statearr_22846;
})();var statearr_22847_22865 = state_22844__$1;(statearr_22847_22865[2] = null);
(statearr_22847_22865[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 2))
{var inst_22825 = (state_22844[7]);var state_22844__$1 = state_22844;if(cljs.core.truth_(inst_22825))
{var statearr_22848_22866 = state_22844__$1;(statearr_22848_22866[1] = 4);
} else
{var statearr_22849_22867 = state_22844__$1;(statearr_22849_22867[1] = 5);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 3))
{var inst_22842 = (state_22844[2]);var state_22844__$1 = state_22844;return cljs.core.async.impl.ioc_helpers.return_chan(state_22844__$1,inst_22842);
} else
{if((state_val_22845 === 4))
{var inst_22825 = (state_22844[7]);var inst_22828 = cljs.core.first(inst_22825);var state_22844__$1 = state_22844;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22844__$1,7,ch,inst_22828);
} else
{if((state_val_22845 === 5))
{var state_22844__$1 = state_22844;if(cljs.core.truth_(close_QMARK_))
{var statearr_22850_22868 = state_22844__$1;(statearr_22850_22868[1] = 8);
} else
{var statearr_22851_22869 = state_22844__$1;(statearr_22851_22869[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 6))
{var inst_22840 = (state_22844[2]);var state_22844__$1 = state_22844;var statearr_22852_22870 = state_22844__$1;(statearr_22852_22870[2] = inst_22840);
(statearr_22852_22870[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 7))
{var inst_22825 = (state_22844[7]);var inst_22830 = (state_22844[2]);var inst_22831 = cljs.core.next(inst_22825);var inst_22825__$1 = inst_22831;var state_22844__$1 = (function (){var statearr_22853 = state_22844;(statearr_22853[7] = inst_22825__$1);
(statearr_22853[8] = inst_22830);
return statearr_22853;
})();var statearr_22854_22871 = state_22844__$1;(statearr_22854_22871[2] = null);
(statearr_22854_22871[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 8))
{var inst_22835 = cljs.core.async.close_BANG_(ch);var state_22844__$1 = state_22844;var statearr_22855_22872 = state_22844__$1;(statearr_22855_22872[2] = inst_22835);
(statearr_22855_22872[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 9))
{var state_22844__$1 = state_22844;var statearr_22856_22873 = state_22844__$1;(statearr_22856_22873[2] = null);
(statearr_22856_22873[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_22845 === 10))
{var inst_22838 = (state_22844[2]);var state_22844__$1 = state_22844;var statearr_22857_22874 = state_22844__$1;(statearr_22857_22874[2] = inst_22838);
(statearr_22857_22874[1] = 6);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_22861 = [null,null,null,null,null,null,null,null,null];(statearr_22861[0] = state_machine__5507__auto__);
(statearr_22861[1] = 1);
return statearr_22861;
});
var state_machine__5507__auto____1 = (function (state_22844){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22844);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22862){if((e22862 instanceof Object))
{var ex__5510__auto__ = e22862;var statearr_22863_22875 = state_22844;(statearr_22863_22875[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22844);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e22862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__22876 = state_22844;
state_22844 = G__22876;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22844){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22864 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22864;
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
cljs.core.async.Mux = (function (){var obj22878 = {};return obj22878;
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
cljs.core.async.Mult = (function (){var obj22880 = {};return obj22880;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23104 = (function (cs,ch,mult,meta23105){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23105 = meta23105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23104.cljs$lang$type = true;
cljs.core.async.t23104.cljs$lang$ctorStr = "cljs.core.async/t23104";
cljs.core.async.t23104.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23104");
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23104.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23106){var self__ = this;
var _23106__$1 = this;return self__.meta23105;
});})(cs))
;
cljs.core.async.t23104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23106,meta23105__$1){var self__ = this;
var _23106__$1 = this;return (new cljs.core.async.t23104(self__.cs,self__.ch,self__.mult,meta23105__$1));
});})(cs))
;
cljs.core.async.__GT_t23104 = ((function (cs){
return (function __GT_t23104(cs__$1,ch__$1,mult__$1,meta23105){return (new cljs.core.async.t23104(cs__$1,ch__$1,mult__$1,meta23105));
});})(cs))
;
}
return (new cljs.core.async.t23104(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23241){var state_val_23242 = (state_23241[1]);if((state_val_23242 === 32))
{var inst_23109 = (state_23241[7]);var inst_23185 = (state_23241[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23241,31,Object,null,30);var inst_23192 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23185,inst_23109,done);var state_23241__$1 = state_23241;var statearr_23243_23328 = state_23241__$1;(statearr_23243_23328[2] = inst_23192);
cljs.core.async.impl.ioc_helpers.process_exception(state_23241__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 1))
{var state_23241__$1 = state_23241;var statearr_23244_23329 = state_23241__$1;(statearr_23244_23329[2] = null);
(statearr_23244_23329[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 33))
{var inst_23198 = (state_23241[9]);var inst_23200 = cljs.core.chunked_seq_QMARK_(inst_23198);var state_23241__$1 = state_23241;if(inst_23200)
{var statearr_23245_23330 = state_23241__$1;(statearr_23245_23330[1] = 36);
} else
{var statearr_23246_23331 = state_23241__$1;(statearr_23246_23331[1] = 37);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 2))
{var state_23241__$1 = state_23241;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23241__$1,4,ch);
} else
{if((state_val_23242 === 34))
{var state_23241__$1 = state_23241;var statearr_23247_23332 = state_23241__$1;(statearr_23247_23332[2] = null);
(statearr_23247_23332[1] = 35);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 3))
{var inst_23239 = (state_23241[2]);var state_23241__$1 = state_23241;return cljs.core.async.impl.ioc_helpers.return_chan(state_23241__$1,inst_23239);
} else
{if((state_val_23242 === 35))
{var inst_23223 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23248_23333 = state_23241__$1;(statearr_23248_23333[2] = inst_23223);
(statearr_23248_23333[1] = 29);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 4))
{var inst_23109 = (state_23241[7]);var inst_23109__$1 = (state_23241[2]);var inst_23110 = (inst_23109__$1 == null);var state_23241__$1 = (function (){var statearr_23249 = state_23241;(statearr_23249[7] = inst_23109__$1);
return statearr_23249;
})();if(cljs.core.truth_(inst_23110))
{var statearr_23250_23334 = state_23241__$1;(statearr_23250_23334[1] = 5);
} else
{var statearr_23251_23335 = state_23241__$1;(statearr_23251_23335[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 36))
{var inst_23198 = (state_23241[9]);var inst_23202 = cljs.core.chunk_first(inst_23198);var inst_23203 = cljs.core.chunk_rest(inst_23198);var inst_23204 = cljs.core.count(inst_23202);var inst_23177 = inst_23203;var inst_23178 = inst_23202;var inst_23179 = inst_23204;var inst_23180 = 0;var state_23241__$1 = (function (){var statearr_23252 = state_23241;(statearr_23252[10] = inst_23180);
(statearr_23252[11] = inst_23177);
(statearr_23252[12] = inst_23179);
(statearr_23252[13] = inst_23178);
return statearr_23252;
})();var statearr_23253_23336 = state_23241__$1;(statearr_23253_23336[2] = null);
(statearr_23253_23336[1] = 25);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 5))
{var inst_23116 = cljs.core.deref(cs);var inst_23117 = cljs.core.seq(inst_23116);var inst_23118 = inst_23117;var inst_23119 = null;var inst_23120 = 0;var inst_23121 = 0;var state_23241__$1 = (function (){var statearr_23254 = state_23241;(statearr_23254[14] = inst_23118);
(statearr_23254[15] = inst_23119);
(statearr_23254[16] = inst_23121);
(statearr_23254[17] = inst_23120);
return statearr_23254;
})();var statearr_23255_23337 = state_23241__$1;(statearr_23255_23337[2] = null);
(statearr_23255_23337[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 37))
{var inst_23198 = (state_23241[9]);var inst_23207 = cljs.core.first(inst_23198);var state_23241__$1 = (function (){var statearr_23256 = state_23241;(statearr_23256[18] = inst_23207);
return statearr_23256;
})();var statearr_23257_23338 = state_23241__$1;(statearr_23257_23338[2] = null);
(statearr_23257_23338[1] = 41);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 6))
{var inst_23169 = (state_23241[19]);var inst_23168 = cljs.core.deref(cs);var inst_23169__$1 = cljs.core.keys(inst_23168);var inst_23170 = cljs.core.count(inst_23169__$1);var inst_23171 = cljs.core.reset_BANG_(dctr,inst_23170);var inst_23176 = cljs.core.seq(inst_23169__$1);var inst_23177 = inst_23176;var inst_23178 = null;var inst_23179 = 0;var inst_23180 = 0;var state_23241__$1 = (function (){var statearr_23258 = state_23241;(statearr_23258[10] = inst_23180);
(statearr_23258[19] = inst_23169__$1);
(statearr_23258[11] = inst_23177);
(statearr_23258[20] = inst_23171);
(statearr_23258[12] = inst_23179);
(statearr_23258[13] = inst_23178);
return statearr_23258;
})();var statearr_23259_23339 = state_23241__$1;(statearr_23259_23339[2] = null);
(statearr_23259_23339[1] = 25);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 38))
{var inst_23220 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23260_23340 = state_23241__$1;(statearr_23260_23340[2] = inst_23220);
(statearr_23260_23340[1] = 35);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 7))
{var inst_23237 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23261_23341 = state_23241__$1;(statearr_23261_23341[2] = inst_23237);
(statearr_23261_23341[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 39))
{var inst_23198 = (state_23241[9]);var inst_23216 = (state_23241[2]);var inst_23217 = cljs.core.next(inst_23198);var inst_23177 = inst_23217;var inst_23178 = null;var inst_23179 = 0;var inst_23180 = 0;var state_23241__$1 = (function (){var statearr_23262 = state_23241;(statearr_23262[10] = inst_23180);
(statearr_23262[11] = inst_23177);
(statearr_23262[21] = inst_23216);
(statearr_23262[12] = inst_23179);
(statearr_23262[13] = inst_23178);
return statearr_23262;
})();var statearr_23263_23342 = state_23241__$1;(statearr_23263_23342[2] = null);
(statearr_23263_23342[1] = 25);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 8))
{var inst_23121 = (state_23241[16]);var inst_23120 = (state_23241[17]);var inst_23123 = (inst_23121 < inst_23120);var inst_23124 = inst_23123;var state_23241__$1 = state_23241;if(cljs.core.truth_(inst_23124))
{var statearr_23264_23343 = state_23241__$1;(statearr_23264_23343[1] = 10);
} else
{var statearr_23265_23344 = state_23241__$1;(statearr_23265_23344[1] = 11);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 40))
{var inst_23207 = (state_23241[18]);var inst_23208 = (state_23241[2]);var inst_23209 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23210 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23207);var state_23241__$1 = (function (){var statearr_23266 = state_23241;(statearr_23266[22] = inst_23209);
(statearr_23266[23] = inst_23208);
return statearr_23266;
})();var statearr_23267_23345 = state_23241__$1;(statearr_23267_23345[2] = inst_23210);
cljs.core.async.impl.ioc_helpers.process_exception(state_23241__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 9))
{var inst_23166 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23268_23346 = state_23241__$1;(statearr_23268_23346[2] = inst_23166);
(statearr_23268_23346[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 41))
{var inst_23109 = (state_23241[7]);var inst_23207 = (state_23241[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23241,40,Object,null,39);var inst_23214 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23207,inst_23109,done);var state_23241__$1 = state_23241;var statearr_23269_23347 = state_23241__$1;(statearr_23269_23347[2] = inst_23214);
cljs.core.async.impl.ioc_helpers.process_exception(state_23241__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 10))
{var inst_23119 = (state_23241[15]);var inst_23121 = (state_23241[16]);var inst_23127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23119,inst_23121);var inst_23128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23127,0,null);var inst_23129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23127,1,null);var state_23241__$1 = (function (){var statearr_23270 = state_23241;(statearr_23270[24] = inst_23128);
return statearr_23270;
})();if(cljs.core.truth_(inst_23129))
{var statearr_23271_23348 = state_23241__$1;(statearr_23271_23348[1] = 13);
} else
{var statearr_23272_23349 = state_23241__$1;(statearr_23272_23349[1] = 14);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 42))
{var state_23241__$1 = state_23241;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23241__$1,45,dchan);
} else
{if((state_val_23242 === 11))
{var inst_23118 = (state_23241[14]);var inst_23138 = (state_23241[25]);var inst_23138__$1 = cljs.core.seq(inst_23118);var state_23241__$1 = (function (){var statearr_23273 = state_23241;(statearr_23273[25] = inst_23138__$1);
return statearr_23273;
})();if(inst_23138__$1)
{var statearr_23274_23350 = state_23241__$1;(statearr_23274_23350[1] = 16);
} else
{var statearr_23275_23351 = state_23241__$1;(statearr_23275_23351[1] = 17);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 43))
{var state_23241__$1 = state_23241;var statearr_23276_23352 = state_23241__$1;(statearr_23276_23352[2] = null);
(statearr_23276_23352[1] = 44);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 12))
{var inst_23164 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23277_23353 = state_23241__$1;(statearr_23277_23353[2] = inst_23164);
(statearr_23277_23353[1] = 9);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 44))
{var inst_23234 = (state_23241[2]);var state_23241__$1 = (function (){var statearr_23278 = state_23241;(statearr_23278[26] = inst_23234);
return statearr_23278;
})();var statearr_23279_23354 = state_23241__$1;(statearr_23279_23354[2] = null);
(statearr_23279_23354[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 13))
{var inst_23128 = (state_23241[24]);var inst_23131 = cljs.core.async.close_BANG_(inst_23128);var state_23241__$1 = state_23241;var statearr_23280_23355 = state_23241__$1;(statearr_23280_23355[2] = inst_23131);
(statearr_23280_23355[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 45))
{var inst_23231 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23284_23356 = state_23241__$1;(statearr_23284_23356[2] = inst_23231);
(statearr_23284_23356[1] = 44);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 14))
{var state_23241__$1 = state_23241;var statearr_23285_23357 = state_23241__$1;(statearr_23285_23357[2] = null);
(statearr_23285_23357[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 15))
{var inst_23118 = (state_23241[14]);var inst_23119 = (state_23241[15]);var inst_23121 = (state_23241[16]);var inst_23120 = (state_23241[17]);var inst_23134 = (state_23241[2]);var inst_23135 = (inst_23121 + 1);var tmp23281 = inst_23118;var tmp23282 = inst_23119;var tmp23283 = inst_23120;var inst_23118__$1 = tmp23281;var inst_23119__$1 = tmp23282;var inst_23120__$1 = tmp23283;var inst_23121__$1 = inst_23135;var state_23241__$1 = (function (){var statearr_23286 = state_23241;(statearr_23286[14] = inst_23118__$1);
(statearr_23286[15] = inst_23119__$1);
(statearr_23286[16] = inst_23121__$1);
(statearr_23286[17] = inst_23120__$1);
(statearr_23286[27] = inst_23134);
return statearr_23286;
})();var statearr_23287_23358 = state_23241__$1;(statearr_23287_23358[2] = null);
(statearr_23287_23358[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 16))
{var inst_23138 = (state_23241[25]);var inst_23140 = cljs.core.chunked_seq_QMARK_(inst_23138);var state_23241__$1 = state_23241;if(inst_23140)
{var statearr_23288_23359 = state_23241__$1;(statearr_23288_23359[1] = 19);
} else
{var statearr_23289_23360 = state_23241__$1;(statearr_23289_23360[1] = 20);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 17))
{var state_23241__$1 = state_23241;var statearr_23290_23361 = state_23241__$1;(statearr_23290_23361[2] = null);
(statearr_23290_23361[1] = 18);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 18))
{var inst_23162 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23291_23362 = state_23241__$1;(statearr_23291_23362[2] = inst_23162);
(statearr_23291_23362[1] = 12);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 19))
{var inst_23138 = (state_23241[25]);var inst_23142 = cljs.core.chunk_first(inst_23138);var inst_23143 = cljs.core.chunk_rest(inst_23138);var inst_23144 = cljs.core.count(inst_23142);var inst_23118 = inst_23143;var inst_23119 = inst_23142;var inst_23120 = inst_23144;var inst_23121 = 0;var state_23241__$1 = (function (){var statearr_23292 = state_23241;(statearr_23292[14] = inst_23118);
(statearr_23292[15] = inst_23119);
(statearr_23292[16] = inst_23121);
(statearr_23292[17] = inst_23120);
return statearr_23292;
})();var statearr_23293_23363 = state_23241__$1;(statearr_23293_23363[2] = null);
(statearr_23293_23363[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 20))
{var inst_23138 = (state_23241[25]);var inst_23148 = cljs.core.first(inst_23138);var inst_23149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23148,0,null);var inst_23150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23148,1,null);var state_23241__$1 = (function (){var statearr_23294 = state_23241;(statearr_23294[28] = inst_23149);
return statearr_23294;
})();if(cljs.core.truth_(inst_23150))
{var statearr_23295_23364 = state_23241__$1;(statearr_23295_23364[1] = 22);
} else
{var statearr_23296_23365 = state_23241__$1;(statearr_23296_23365[1] = 23);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 21))
{var inst_23159 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23297_23366 = state_23241__$1;(statearr_23297_23366[2] = inst_23159);
(statearr_23297_23366[1] = 18);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 22))
{var inst_23149 = (state_23241[28]);var inst_23152 = cljs.core.async.close_BANG_(inst_23149);var state_23241__$1 = state_23241;var statearr_23298_23367 = state_23241__$1;(statearr_23298_23367[2] = inst_23152);
(statearr_23298_23367[1] = 24);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 23))
{var state_23241__$1 = state_23241;var statearr_23299_23368 = state_23241__$1;(statearr_23299_23368[2] = null);
(statearr_23299_23368[1] = 24);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 24))
{var inst_23138 = (state_23241[25]);var inst_23155 = (state_23241[2]);var inst_23156 = cljs.core.next(inst_23138);var inst_23118 = inst_23156;var inst_23119 = null;var inst_23120 = 0;var inst_23121 = 0;var state_23241__$1 = (function (){var statearr_23300 = state_23241;(statearr_23300[29] = inst_23155);
(statearr_23300[14] = inst_23118);
(statearr_23300[15] = inst_23119);
(statearr_23300[16] = inst_23121);
(statearr_23300[17] = inst_23120);
return statearr_23300;
})();var statearr_23301_23369 = state_23241__$1;(statearr_23301_23369[2] = null);
(statearr_23301_23369[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 25))
{var inst_23180 = (state_23241[10]);var inst_23179 = (state_23241[12]);var inst_23182 = (inst_23180 < inst_23179);var inst_23183 = inst_23182;var state_23241__$1 = state_23241;if(cljs.core.truth_(inst_23183))
{var statearr_23302_23370 = state_23241__$1;(statearr_23302_23370[1] = 27);
} else
{var statearr_23303_23371 = state_23241__$1;(statearr_23303_23371[1] = 28);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 26))
{var inst_23169 = (state_23241[19]);var inst_23227 = (state_23241[2]);var inst_23228 = cljs.core.seq(inst_23169);var state_23241__$1 = (function (){var statearr_23304 = state_23241;(statearr_23304[30] = inst_23227);
return statearr_23304;
})();if(inst_23228)
{var statearr_23305_23372 = state_23241__$1;(statearr_23305_23372[1] = 42);
} else
{var statearr_23306_23373 = state_23241__$1;(statearr_23306_23373[1] = 43);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 27))
{var inst_23180 = (state_23241[10]);var inst_23178 = (state_23241[13]);var inst_23185 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23178,inst_23180);var state_23241__$1 = (function (){var statearr_23307 = state_23241;(statearr_23307[8] = inst_23185);
return statearr_23307;
})();var statearr_23308_23374 = state_23241__$1;(statearr_23308_23374[2] = null);
(statearr_23308_23374[1] = 32);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 28))
{var inst_23198 = (state_23241[9]);var inst_23177 = (state_23241[11]);var inst_23198__$1 = cljs.core.seq(inst_23177);var state_23241__$1 = (function (){var statearr_23312 = state_23241;(statearr_23312[9] = inst_23198__$1);
return statearr_23312;
})();if(inst_23198__$1)
{var statearr_23313_23375 = state_23241__$1;(statearr_23313_23375[1] = 33);
} else
{var statearr_23314_23376 = state_23241__$1;(statearr_23314_23376[1] = 34);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 29))
{var inst_23225 = (state_23241[2]);var state_23241__$1 = state_23241;var statearr_23315_23377 = state_23241__$1;(statearr_23315_23377[2] = inst_23225);
(statearr_23315_23377[1] = 26);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 30))
{var inst_23180 = (state_23241[10]);var inst_23177 = (state_23241[11]);var inst_23179 = (state_23241[12]);var inst_23178 = (state_23241[13]);var inst_23194 = (state_23241[2]);var inst_23195 = (inst_23180 + 1);var tmp23309 = inst_23177;var tmp23310 = inst_23179;var tmp23311 = inst_23178;var inst_23177__$1 = tmp23309;var inst_23178__$1 = tmp23311;var inst_23179__$1 = tmp23310;var inst_23180__$1 = inst_23195;var state_23241__$1 = (function (){var statearr_23316 = state_23241;(statearr_23316[10] = inst_23180__$1);
(statearr_23316[31] = inst_23194);
(statearr_23316[11] = inst_23177__$1);
(statearr_23316[12] = inst_23179__$1);
(statearr_23316[13] = inst_23178__$1);
return statearr_23316;
})();var statearr_23317_23378 = state_23241__$1;(statearr_23317_23378[2] = null);
(statearr_23317_23378[1] = 25);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23242 === 31))
{var inst_23185 = (state_23241[8]);var inst_23186 = (state_23241[2]);var inst_23187 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23188 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23185);var state_23241__$1 = (function (){var statearr_23318 = state_23241;(statearr_23318[32] = inst_23187);
(statearr_23318[33] = inst_23186);
return statearr_23318;
})();var statearr_23319_23379 = state_23241__$1;(statearr_23319_23379[2] = inst_23188);
cljs.core.async.impl.ioc_helpers.process_exception(state_23241__$1);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_23323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23323[0] = state_machine__5507__auto__);
(statearr_23323[1] = 1);
return statearr_23323;
});
var state_machine__5507__auto____1 = (function (state_23241){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23241);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23324){if((e23324 instanceof Object))
{var ex__5510__auto__ = e23324;var statearr_23325_23380 = state_23241;(statearr_23325_23380[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23241);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e23324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__23381 = state_23241;
state_23241 = G__23381;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23241){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23326 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23327);
return statearr_23326;
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
cljs.core.async.Mix = (function (){var obj23383 = {};return obj23383;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,null,cljs.core.constant$keyword$167,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$168);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$167);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$168,chs);var pauses = pick(cljs.core.constant$keyword$166,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$169,solos,cljs.core.constant$keyword$170,pick(cljs.core.constant$keyword$167,chs),cljs.core.constant$keyword$171,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$166)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23493 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23494){
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
this.meta23494 = meta23494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23493.cljs$lang$type = true;
cljs.core.async.t23493.cljs$lang$ctorStr = "cljs.core.async/t23493";
cljs.core.async.t23493.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23493");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23495){var self__ = this;
var _23495__$1 = this;return self__.meta23494;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23495,meta23494__$1){var self__ = this;
var _23495__$1 = this;return (new cljs.core.async.t23493(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23494__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23493 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23493(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23494){return (new cljs.core.async.t23493(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23494));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23493(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___23602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23560){var state_val_23561 = (state_23560[1]);if((state_val_23561 === 1))
{var inst_23499 = (state_23560[7]);var inst_23499__$1 = calc_state();var inst_23500 = cljs.core.seq_QMARK_(inst_23499__$1);var state_23560__$1 = (function (){var statearr_23562 = state_23560;(statearr_23562[7] = inst_23499__$1);
return statearr_23562;
})();if(inst_23500)
{var statearr_23563_23603 = state_23560__$1;(statearr_23563_23603[1] = 2);
} else
{var statearr_23564_23604 = state_23560__$1;(statearr_23564_23604[1] = 3);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 2))
{var inst_23499 = (state_23560[7]);var inst_23502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23499);var state_23560__$1 = state_23560;var statearr_23565_23605 = state_23560__$1;(statearr_23565_23605[2] = inst_23502);
(statearr_23565_23605[1] = 4);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 3))
{var inst_23499 = (state_23560[7]);var state_23560__$1 = state_23560;var statearr_23566_23606 = state_23560__$1;(statearr_23566_23606[2] = inst_23499);
(statearr_23566_23606[1] = 4);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 4))
{var inst_23499 = (state_23560[7]);var inst_23505 = (state_23560[2]);var inst_23506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23505,cljs.core.constant$keyword$171);var inst_23507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23505,cljs.core.constant$keyword$170);var inst_23508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23505,cljs.core.constant$keyword$169);var inst_23509 = inst_23499;var state_23560__$1 = (function (){var statearr_23567 = state_23560;(statearr_23567[8] = inst_23506);
(statearr_23567[9] = inst_23508);
(statearr_23567[10] = inst_23507);
(statearr_23567[11] = inst_23509);
return statearr_23567;
})();var statearr_23568_23607 = state_23560__$1;(statearr_23568_23607[2] = null);
(statearr_23568_23607[1] = 5);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 5))
{var inst_23509 = (state_23560[11]);var inst_23512 = cljs.core.seq_QMARK_(inst_23509);var state_23560__$1 = state_23560;if(inst_23512)
{var statearr_23569_23608 = state_23560__$1;(statearr_23569_23608[1] = 7);
} else
{var statearr_23570_23609 = state_23560__$1;(statearr_23570_23609[1] = 8);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 6))
{var inst_23558 = (state_23560[2]);var state_23560__$1 = state_23560;return cljs.core.async.impl.ioc_helpers.return_chan(state_23560__$1,inst_23558);
} else
{if((state_val_23561 === 7))
{var inst_23509 = (state_23560[11]);var inst_23514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23509);var state_23560__$1 = state_23560;var statearr_23571_23610 = state_23560__$1;(statearr_23571_23610[2] = inst_23514);
(statearr_23571_23610[1] = 9);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 8))
{var inst_23509 = (state_23560[11]);var state_23560__$1 = state_23560;var statearr_23572_23611 = state_23560__$1;(statearr_23572_23611[2] = inst_23509);
(statearr_23572_23611[1] = 9);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 9))
{var inst_23517 = (state_23560[12]);var inst_23517__$1 = (state_23560[2]);var inst_23518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23517__$1,cljs.core.constant$keyword$171);var inst_23519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23517__$1,cljs.core.constant$keyword$170);var inst_23520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23517__$1,cljs.core.constant$keyword$169);var state_23560__$1 = (function (){var statearr_23573 = state_23560;(statearr_23573[13] = inst_23520);
(statearr_23573[12] = inst_23517__$1);
(statearr_23573[14] = inst_23519);
return statearr_23573;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_23560__$1,10,inst_23518);
} else
{if((state_val_23561 === 10))
{var inst_23524 = (state_23560[15]);var inst_23525 = (state_23560[16]);var inst_23523 = (state_23560[2]);var inst_23524__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23523,0,null);var inst_23525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23523,1,null);var inst_23526 = (inst_23524__$1 == null);var inst_23527 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23525__$1,change);var inst_23528 = (inst_23526) || (inst_23527);var state_23560__$1 = (function (){var statearr_23574 = state_23560;(statearr_23574[15] = inst_23524__$1);
(statearr_23574[16] = inst_23525__$1);
return statearr_23574;
})();if(cljs.core.truth_(inst_23528))
{var statearr_23575_23612 = state_23560__$1;(statearr_23575_23612[1] = 11);
} else
{var statearr_23576_23613 = state_23560__$1;(statearr_23576_23613[1] = 12);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 11))
{var inst_23524 = (state_23560[15]);var inst_23530 = (inst_23524 == null);var state_23560__$1 = state_23560;if(cljs.core.truth_(inst_23530))
{var statearr_23577_23614 = state_23560__$1;(statearr_23577_23614[1] = 14);
} else
{var statearr_23578_23615 = state_23560__$1;(statearr_23578_23615[1] = 15);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 12))
{var inst_23520 = (state_23560[13]);var inst_23539 = (state_23560[17]);var inst_23525 = (state_23560[16]);var inst_23539__$1 = (inst_23520.cljs$core$IFn$_invoke$arity$1 ? inst_23520.cljs$core$IFn$_invoke$arity$1(inst_23525) : inst_23520.call(null,inst_23525));var state_23560__$1 = (function (){var statearr_23579 = state_23560;(statearr_23579[17] = inst_23539__$1);
return statearr_23579;
})();if(cljs.core.truth_(inst_23539__$1))
{var statearr_23580_23616 = state_23560__$1;(statearr_23580_23616[1] = 17);
} else
{var statearr_23581_23617 = state_23560__$1;(statearr_23581_23617[1] = 18);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 13))
{var inst_23556 = (state_23560[2]);var state_23560__$1 = state_23560;var statearr_23582_23618 = state_23560__$1;(statearr_23582_23618[2] = inst_23556);
(statearr_23582_23618[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 14))
{var inst_23525 = (state_23560[16]);var inst_23532 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23525);var state_23560__$1 = state_23560;var statearr_23583_23619 = state_23560__$1;(statearr_23583_23619[2] = inst_23532);
(statearr_23583_23619[1] = 16);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 15))
{var state_23560__$1 = state_23560;var statearr_23584_23620 = state_23560__$1;(statearr_23584_23620[2] = null);
(statearr_23584_23620[1] = 16);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 16))
{var inst_23535 = (state_23560[2]);var inst_23536 = calc_state();var inst_23509 = inst_23536;var state_23560__$1 = (function (){var statearr_23585 = state_23560;(statearr_23585[18] = inst_23535);
(statearr_23585[11] = inst_23509);
return statearr_23585;
})();var statearr_23586_23621 = state_23560__$1;(statearr_23586_23621[2] = null);
(statearr_23586_23621[1] = 5);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 17))
{var inst_23539 = (state_23560[17]);var state_23560__$1 = state_23560;var statearr_23587_23622 = state_23560__$1;(statearr_23587_23622[2] = inst_23539);
(statearr_23587_23622[1] = 19);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 18))
{var inst_23520 = (state_23560[13]);var inst_23519 = (state_23560[14]);var inst_23525 = (state_23560[16]);var inst_23542 = cljs.core.empty_QMARK_(inst_23520);var inst_23543 = (inst_23519.cljs$core$IFn$_invoke$arity$1 ? inst_23519.cljs$core$IFn$_invoke$arity$1(inst_23525) : inst_23519.call(null,inst_23525));var inst_23544 = cljs.core.not(inst_23543);var inst_23545 = (inst_23542) && (inst_23544);var state_23560__$1 = state_23560;var statearr_23588_23623 = state_23560__$1;(statearr_23588_23623[2] = inst_23545);
(statearr_23588_23623[1] = 19);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 19))
{var inst_23547 = (state_23560[2]);var state_23560__$1 = state_23560;if(cljs.core.truth_(inst_23547))
{var statearr_23589_23624 = state_23560__$1;(statearr_23589_23624[1] = 20);
} else
{var statearr_23590_23625 = state_23560__$1;(statearr_23590_23625[1] = 21);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 20))
{var inst_23524 = (state_23560[15]);var state_23560__$1 = state_23560;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23560__$1,23,out,inst_23524);
} else
{if((state_val_23561 === 21))
{var state_23560__$1 = state_23560;var statearr_23591_23626 = state_23560__$1;(statearr_23591_23626[2] = null);
(statearr_23591_23626[1] = 22);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 22))
{var inst_23517 = (state_23560[12]);var inst_23553 = (state_23560[2]);var inst_23509 = inst_23517;var state_23560__$1 = (function (){var statearr_23592 = state_23560;(statearr_23592[19] = inst_23553);
(statearr_23592[11] = inst_23509);
return statearr_23592;
})();var statearr_23593_23627 = state_23560__$1;(statearr_23593_23627[2] = null);
(statearr_23593_23627[1] = 5);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23561 === 23))
{var inst_23550 = (state_23560[2]);var state_23560__$1 = state_23560;var statearr_23594_23628 = state_23560__$1;(statearr_23594_23628[2] = inst_23550);
(statearr_23594_23628[1] = 22);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_23598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23598[0] = state_machine__5507__auto__);
(statearr_23598[1] = 1);
return statearr_23598;
});
var state_machine__5507__auto____1 = (function (state_23560){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23560);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23599){if((e23599 instanceof Object))
{var ex__5510__auto__ = e23599;var statearr_23600_23629 = state_23560;(statearr_23600_23629[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23560);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e23599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__23630 = state_23560;
state_23560 = G__23630;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23560){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23601 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23602);
return statearr_23601;
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
cljs.core.async.Pub = (function (){var obj23632 = {};return obj23632;
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
return (function (p1__23633_SHARP_){if(cljs.core.truth_((p1__23633_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23633_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__23633_SHARP_.call(null,topic))))
{return p1__23633_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23633_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23758 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23759){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23759 = meta23759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23758.cljs$lang$type = true;
cljs.core.async.t23758.cljs$lang$ctorStr = "cljs.core.async/t23758";
cljs.core.async.t23758.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23758");
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23758.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23760){var self__ = this;
var _23760__$1 = this;return self__.meta23759;
});})(mults,ensure_mult))
;
cljs.core.async.t23758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23760,meta23759__$1){var self__ = this;
var _23760__$1 = this;return (new cljs.core.async.t23758(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23759__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23758 = ((function (mults,ensure_mult){
return (function __GT_t23758(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23759){return (new cljs.core.async.t23758(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23759));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23758(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___23882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23834){var state_val_23835 = (state_23834[1]);if((state_val_23835 === 1))
{var state_23834__$1 = state_23834;var statearr_23836_23883 = state_23834__$1;(statearr_23836_23883[2] = null);
(statearr_23836_23883[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 2))
{var state_23834__$1 = state_23834;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23834__$1,4,ch);
} else
{if((state_val_23835 === 3))
{var inst_23832 = (state_23834[2]);var state_23834__$1 = state_23834;return cljs.core.async.impl.ioc_helpers.return_chan(state_23834__$1,inst_23832);
} else
{if((state_val_23835 === 4))
{var inst_23763 = (state_23834[7]);var inst_23763__$1 = (state_23834[2]);var inst_23764 = (inst_23763__$1 == null);var state_23834__$1 = (function (){var statearr_23837 = state_23834;(statearr_23837[7] = inst_23763__$1);
return statearr_23837;
})();if(cljs.core.truth_(inst_23764))
{var statearr_23838_23884 = state_23834__$1;(statearr_23838_23884[1] = 5);
} else
{var statearr_23839_23885 = state_23834__$1;(statearr_23839_23885[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 5))
{var inst_23770 = cljs.core.deref(mults);var inst_23771 = cljs.core.vals(inst_23770);var inst_23772 = cljs.core.seq(inst_23771);var inst_23773 = inst_23772;var inst_23774 = null;var inst_23775 = 0;var inst_23776 = 0;var state_23834__$1 = (function (){var statearr_23840 = state_23834;(statearr_23840[8] = inst_23776);
(statearr_23840[9] = inst_23775);
(statearr_23840[10] = inst_23774);
(statearr_23840[11] = inst_23773);
return statearr_23840;
})();var statearr_23841_23886 = state_23834__$1;(statearr_23841_23886[2] = null);
(statearr_23841_23886[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 6))
{var inst_23763 = (state_23834[7]);var inst_23813 = (state_23834[12]);var inst_23811 = (state_23834[13]);var inst_23811__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_23763) : topic_fn.call(null,inst_23763));var inst_23812 = cljs.core.deref(mults);var inst_23813__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23812,inst_23811__$1);var state_23834__$1 = (function (){var statearr_23842 = state_23834;(statearr_23842[12] = inst_23813__$1);
(statearr_23842[13] = inst_23811__$1);
return statearr_23842;
})();if(cljs.core.truth_(inst_23813__$1))
{var statearr_23843_23887 = state_23834__$1;(statearr_23843_23887[1] = 19);
} else
{var statearr_23844_23888 = state_23834__$1;(statearr_23844_23888[1] = 20);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 7))
{var inst_23830 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23845_23889 = state_23834__$1;(statearr_23845_23889[2] = inst_23830);
(statearr_23845_23889[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 8))
{var inst_23776 = (state_23834[8]);var inst_23775 = (state_23834[9]);var inst_23778 = (inst_23776 < inst_23775);var inst_23779 = inst_23778;var state_23834__$1 = state_23834;if(cljs.core.truth_(inst_23779))
{var statearr_23849_23890 = state_23834__$1;(statearr_23849_23890[1] = 10);
} else
{var statearr_23850_23891 = state_23834__$1;(statearr_23850_23891[1] = 11);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 9))
{var inst_23809 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23851_23892 = state_23834__$1;(statearr_23851_23892[2] = inst_23809);
(statearr_23851_23892[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 10))
{var inst_23776 = (state_23834[8]);var inst_23775 = (state_23834[9]);var inst_23774 = (state_23834[10]);var inst_23773 = (state_23834[11]);var inst_23781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23774,inst_23776);var inst_23782 = cljs.core.async.muxch_STAR_(inst_23781);var inst_23783 = cljs.core.async.close_BANG_(inst_23782);var inst_23784 = (inst_23776 + 1);var tmp23846 = inst_23775;var tmp23847 = inst_23774;var tmp23848 = inst_23773;var inst_23773__$1 = tmp23848;var inst_23774__$1 = tmp23847;var inst_23775__$1 = tmp23846;var inst_23776__$1 = inst_23784;var state_23834__$1 = (function (){var statearr_23852 = state_23834;(statearr_23852[8] = inst_23776__$1);
(statearr_23852[14] = inst_23783);
(statearr_23852[9] = inst_23775__$1);
(statearr_23852[10] = inst_23774__$1);
(statearr_23852[11] = inst_23773__$1);
return statearr_23852;
})();var statearr_23853_23893 = state_23834__$1;(statearr_23853_23893[2] = null);
(statearr_23853_23893[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 11))
{var inst_23787 = (state_23834[15]);var inst_23773 = (state_23834[11]);var inst_23787__$1 = cljs.core.seq(inst_23773);var state_23834__$1 = (function (){var statearr_23854 = state_23834;(statearr_23854[15] = inst_23787__$1);
return statearr_23854;
})();if(inst_23787__$1)
{var statearr_23855_23894 = state_23834__$1;(statearr_23855_23894[1] = 13);
} else
{var statearr_23856_23895 = state_23834__$1;(statearr_23856_23895[1] = 14);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 12))
{var inst_23807 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23857_23896 = state_23834__$1;(statearr_23857_23896[2] = inst_23807);
(statearr_23857_23896[1] = 9);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 13))
{var inst_23787 = (state_23834[15]);var inst_23789 = cljs.core.chunked_seq_QMARK_(inst_23787);var state_23834__$1 = state_23834;if(inst_23789)
{var statearr_23858_23897 = state_23834__$1;(statearr_23858_23897[1] = 16);
} else
{var statearr_23859_23898 = state_23834__$1;(statearr_23859_23898[1] = 17);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 14))
{var state_23834__$1 = state_23834;var statearr_23860_23899 = state_23834__$1;(statearr_23860_23899[2] = null);
(statearr_23860_23899[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 15))
{var inst_23805 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23861_23900 = state_23834__$1;(statearr_23861_23900[2] = inst_23805);
(statearr_23861_23900[1] = 12);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 16))
{var inst_23787 = (state_23834[15]);var inst_23791 = cljs.core.chunk_first(inst_23787);var inst_23792 = cljs.core.chunk_rest(inst_23787);var inst_23793 = cljs.core.count(inst_23791);var inst_23773 = inst_23792;var inst_23774 = inst_23791;var inst_23775 = inst_23793;var inst_23776 = 0;var state_23834__$1 = (function (){var statearr_23862 = state_23834;(statearr_23862[8] = inst_23776);
(statearr_23862[9] = inst_23775);
(statearr_23862[10] = inst_23774);
(statearr_23862[11] = inst_23773);
return statearr_23862;
})();var statearr_23863_23901 = state_23834__$1;(statearr_23863_23901[2] = null);
(statearr_23863_23901[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 17))
{var inst_23787 = (state_23834[15]);var inst_23796 = cljs.core.first(inst_23787);var inst_23797 = cljs.core.async.muxch_STAR_(inst_23796);var inst_23798 = cljs.core.async.close_BANG_(inst_23797);var inst_23799 = cljs.core.next(inst_23787);var inst_23773 = inst_23799;var inst_23774 = null;var inst_23775 = 0;var inst_23776 = 0;var state_23834__$1 = (function (){var statearr_23864 = state_23834;(statearr_23864[16] = inst_23798);
(statearr_23864[8] = inst_23776);
(statearr_23864[9] = inst_23775);
(statearr_23864[10] = inst_23774);
(statearr_23864[11] = inst_23773);
return statearr_23864;
})();var statearr_23865_23902 = state_23834__$1;(statearr_23865_23902[2] = null);
(statearr_23865_23902[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 18))
{var inst_23802 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23866_23903 = state_23834__$1;(statearr_23866_23903[2] = inst_23802);
(statearr_23866_23903[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 19))
{var state_23834__$1 = state_23834;var statearr_23867_23904 = state_23834__$1;(statearr_23867_23904[2] = null);
(statearr_23867_23904[1] = 24);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 20))
{var state_23834__$1 = state_23834;var statearr_23868_23905 = state_23834__$1;(statearr_23868_23905[2] = null);
(statearr_23868_23905[1] = 21);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 21))
{var inst_23827 = (state_23834[2]);var state_23834__$1 = (function (){var statearr_23869 = state_23834;(statearr_23869[17] = inst_23827);
return statearr_23869;
})();var statearr_23870_23906 = state_23834__$1;(statearr_23870_23906[2] = null);
(statearr_23870_23906[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 22))
{var inst_23824 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23871_23907 = state_23834__$1;(statearr_23871_23907[2] = inst_23824);
(statearr_23871_23907[1] = 21);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 23))
{var inst_23811 = (state_23834[13]);var inst_23815 = (state_23834[2]);var inst_23816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23811);var state_23834__$1 = (function (){var statearr_23872 = state_23834;(statearr_23872[18] = inst_23815);
return statearr_23872;
})();var statearr_23873_23908 = state_23834__$1;(statearr_23873_23908[2] = inst_23816);
cljs.core.async.impl.ioc_helpers.process_exception(state_23834__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_23835 === 24))
{var inst_23763 = (state_23834[7]);var inst_23813 = (state_23834[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23834,23,Object,null,22);var inst_23820 = cljs.core.async.muxch_STAR_(inst_23813);var state_23834__$1 = state_23834;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23834__$1,25,inst_23820,inst_23763);
} else
{if((state_val_23835 === 25))
{var inst_23822 = (state_23834[2]);var state_23834__$1 = state_23834;var statearr_23874_23909 = state_23834__$1;(statearr_23874_23909[2] = inst_23822);
cljs.core.async.impl.ioc_helpers.process_exception(state_23834__$1);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_23878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23878[0] = state_machine__5507__auto__);
(statearr_23878[1] = 1);
return statearr_23878;
});
var state_machine__5507__auto____1 = (function (state_23834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23834);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23879){if((e23879 instanceof Object))
{var ex__5510__auto__ = e23879;var statearr_23880_23910 = state_23834;(statearr_23880_23910[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23834);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e23879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__23911 = state_23834;
state_23834 = G__23911;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23881 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23882);
return statearr_23881;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24018){var state_val_24019 = (state_24018[1]);if((state_val_24019 === 1))
{var state_24018__$1 = state_24018;var statearr_24020_24049 = state_24018__$1;(statearr_24020_24049[2] = null);
(statearr_24020_24049[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 2))
{var inst_23981 = cljs.core.reset_BANG_(dctr,cnt);var inst_23982 = 0;var state_24018__$1 = (function (){var statearr_24021 = state_24018;(statearr_24021[7] = inst_23982);
(statearr_24021[8] = inst_23981);
return statearr_24021;
})();var statearr_24022_24050 = state_24018__$1;(statearr_24022_24050[2] = null);
(statearr_24022_24050[1] = 4);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 3))
{var inst_24016 = (state_24018[2]);var state_24018__$1 = state_24018;return cljs.core.async.impl.ioc_helpers.return_chan(state_24018__$1,inst_24016);
} else
{if((state_val_24019 === 4))
{var inst_23982 = (state_24018[7]);var inst_23984 = (inst_23982 < cnt);var state_24018__$1 = state_24018;if(cljs.core.truth_(inst_23984))
{var statearr_24023_24051 = state_24018__$1;(statearr_24023_24051[1] = 6);
} else
{var statearr_24024_24052 = state_24018__$1;(statearr_24024_24052[1] = 7);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 5))
{var inst_24002 = (state_24018[2]);var state_24018__$1 = (function (){var statearr_24025 = state_24018;(statearr_24025[9] = inst_24002);
return statearr_24025;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24018__$1,12,dchan);
} else
{if((state_val_24019 === 6))
{var state_24018__$1 = state_24018;var statearr_24026_24053 = state_24018__$1;(statearr_24026_24053[2] = null);
(statearr_24026_24053[1] = 11);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 7))
{var state_24018__$1 = state_24018;var statearr_24027_24054 = state_24018__$1;(statearr_24027_24054[2] = null);
(statearr_24027_24054[1] = 8);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 8))
{var inst_24000 = (state_24018[2]);var state_24018__$1 = state_24018;var statearr_24028_24055 = state_24018__$1;(statearr_24028_24055[2] = inst_24000);
(statearr_24028_24055[1] = 5);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 9))
{var inst_23982 = (state_24018[7]);var inst_23995 = (state_24018[2]);var inst_23996 = (inst_23982 + 1);var inst_23982__$1 = inst_23996;var state_24018__$1 = (function (){var statearr_24029 = state_24018;(statearr_24029[10] = inst_23995);
(statearr_24029[7] = inst_23982__$1);
return statearr_24029;
})();var statearr_24030_24056 = state_24018__$1;(statearr_24030_24056[2] = null);
(statearr_24030_24056[1] = 4);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 10))
{var inst_23986 = (state_24018[2]);var inst_23987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24018__$1 = (function (){var statearr_24031 = state_24018;(statearr_24031[11] = inst_23986);
return statearr_24031;
})();var statearr_24032_24057 = state_24018__$1;(statearr_24032_24057[2] = inst_23987);
cljs.core.async.impl.ioc_helpers.process_exception(state_24018__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 11))
{var inst_23982 = (state_24018[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24018,10,Object,null,9);var inst_23991 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_23982) : chs__$1.call(null,inst_23982));var inst_23992 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_23982) : done.call(null,inst_23982));var inst_23993 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23991,inst_23992);var state_24018__$1 = state_24018;var statearr_24033_24058 = state_24018__$1;(statearr_24033_24058[2] = inst_23993);
cljs.core.async.impl.ioc_helpers.process_exception(state_24018__$1);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 12))
{var inst_24004 = (state_24018[12]);var inst_24004__$1 = (state_24018[2]);var inst_24005 = cljs.core.some(cljs.core.nil_QMARK_,inst_24004__$1);var state_24018__$1 = (function (){var statearr_24034 = state_24018;(statearr_24034[12] = inst_24004__$1);
return statearr_24034;
})();if(cljs.core.truth_(inst_24005))
{var statearr_24035_24059 = state_24018__$1;(statearr_24035_24059[1] = 13);
} else
{var statearr_24036_24060 = state_24018__$1;(statearr_24036_24060[1] = 14);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 13))
{var inst_24007 = cljs.core.async.close_BANG_(out);var state_24018__$1 = state_24018;var statearr_24037_24061 = state_24018__$1;(statearr_24037_24061[2] = inst_24007);
(statearr_24037_24061[1] = 15);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 14))
{var inst_24004 = (state_24018[12]);var inst_24009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24004);var state_24018__$1 = state_24018;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24018__$1,16,out,inst_24009);
} else
{if((state_val_24019 === 15))
{var inst_24014 = (state_24018[2]);var state_24018__$1 = state_24018;var statearr_24038_24062 = state_24018__$1;(statearr_24038_24062[2] = inst_24014);
(statearr_24038_24062[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24019 === 16))
{var inst_24011 = (state_24018[2]);var state_24018__$1 = (function (){var statearr_24039 = state_24018;(statearr_24039[13] = inst_24011);
return statearr_24039;
})();var statearr_24040_24063 = state_24018__$1;(statearr_24040_24063[2] = null);
(statearr_24040_24063[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24044[0] = state_machine__5507__auto__);
(statearr_24044[1] = 1);
return statearr_24044;
});
var state_machine__5507__auto____1 = (function (state_24018){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24018);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24045){if((e24045 instanceof Object))
{var ex__5510__auto__ = e24045;var statearr_24046_24064 = state_24018;(statearr_24046_24064[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24018);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24045;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24065 = state_24018;
state_24018 = G__24065;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24018){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24047 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24048);
return statearr_24047;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24149){var state_val_24150 = (state_24149[1]);if((state_val_24150 === 1))
{var inst_24120 = cljs.core.vec(chs);var inst_24121 = inst_24120;var state_24149__$1 = (function (){var statearr_24151 = state_24149;(statearr_24151[7] = inst_24121);
return statearr_24151;
})();var statearr_24152_24174 = state_24149__$1;(statearr_24152_24174[2] = null);
(statearr_24152_24174[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 2))
{var inst_24121 = (state_24149[7]);var inst_24123 = cljs.core.count(inst_24121);var inst_24124 = (inst_24123 > 0);var state_24149__$1 = state_24149;if(cljs.core.truth_(inst_24124))
{var statearr_24153_24175 = state_24149__$1;(statearr_24153_24175[1] = 4);
} else
{var statearr_24154_24176 = state_24149__$1;(statearr_24154_24176[1] = 5);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 3))
{var inst_24147 = (state_24149[2]);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.return_chan(state_24149__$1,inst_24147);
} else
{if((state_val_24150 === 4))
{var inst_24121 = (state_24149[7]);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24149__$1,7,inst_24121);
} else
{if((state_val_24150 === 5))
{var inst_24143 = cljs.core.async.close_BANG_(out);var state_24149__$1 = state_24149;var statearr_24155_24177 = state_24149__$1;(statearr_24155_24177[2] = inst_24143);
(statearr_24155_24177[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 6))
{var inst_24145 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24156_24178 = state_24149__$1;(statearr_24156_24178[2] = inst_24145);
(statearr_24156_24178[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 7))
{var inst_24128 = (state_24149[8]);var inst_24129 = (state_24149[9]);var inst_24128__$1 = (state_24149[2]);var inst_24129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24128__$1,0,null);var inst_24130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24128__$1,1,null);var inst_24131 = (inst_24129__$1 == null);var state_24149__$1 = (function (){var statearr_24157 = state_24149;(statearr_24157[8] = inst_24128__$1);
(statearr_24157[9] = inst_24129__$1);
(statearr_24157[10] = inst_24130);
return statearr_24157;
})();if(cljs.core.truth_(inst_24131))
{var statearr_24158_24179 = state_24149__$1;(statearr_24158_24179[1] = 8);
} else
{var statearr_24159_24180 = state_24149__$1;(statearr_24159_24180[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 8))
{var inst_24121 = (state_24149[7]);var inst_24128 = (state_24149[8]);var inst_24129 = (state_24149[9]);var inst_24130 = (state_24149[10]);var inst_24133 = (function (){var c = inst_24130;var v = inst_24129;var vec__24126 = inst_24128;var cs = inst_24121;return ((function (c,v,vec__24126,cs,inst_24121,inst_24128,inst_24129,inst_24130,state_val_24150){
return (function (p1__24066_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24066_SHARP_);
});
;})(c,v,vec__24126,cs,inst_24121,inst_24128,inst_24129,inst_24130,state_val_24150))
})();var inst_24134 = cljs.core.filterv(inst_24133,inst_24121);var inst_24121__$1 = inst_24134;var state_24149__$1 = (function (){var statearr_24160 = state_24149;(statearr_24160[7] = inst_24121__$1);
return statearr_24160;
})();var statearr_24161_24181 = state_24149__$1;(statearr_24161_24181[2] = null);
(statearr_24161_24181[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 9))
{var inst_24129 = (state_24149[9]);var state_24149__$1 = state_24149;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24149__$1,11,out,inst_24129);
} else
{if((state_val_24150 === 10))
{var inst_24141 = (state_24149[2]);var state_24149__$1 = state_24149;var statearr_24163_24182 = state_24149__$1;(statearr_24163_24182[2] = inst_24141);
(statearr_24163_24182[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24150 === 11))
{var inst_24121 = (state_24149[7]);var inst_24138 = (state_24149[2]);var tmp24162 = inst_24121;var inst_24121__$1 = tmp24162;var state_24149__$1 = (function (){var statearr_24164 = state_24149;(statearr_24164[7] = inst_24121__$1);
(statearr_24164[11] = inst_24138);
return statearr_24164;
})();var statearr_24165_24183 = state_24149__$1;(statearr_24165_24183[2] = null);
(statearr_24165_24183[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24169 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24169[0] = state_machine__5507__auto__);
(statearr_24169[1] = 1);
return statearr_24169;
});
var state_machine__5507__auto____1 = (function (state_24149){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24149);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24170){if((e24170 instanceof Object))
{var ex__5510__auto__ = e24170;var statearr_24171_24184 = state_24149;(statearr_24171_24184[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24149);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24185 = state_24149;
state_24149 = G__24185;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24149){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24172 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24173);
return statearr_24172;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24255){var state_val_24256 = (state_24255[1]);if((state_val_24256 === 1))
{var inst_24232 = 0;var state_24255__$1 = (function (){var statearr_24257 = state_24255;(statearr_24257[7] = inst_24232);
return statearr_24257;
})();var statearr_24258_24279 = state_24255__$1;(statearr_24258_24279[2] = null);
(statearr_24258_24279[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 2))
{var inst_24232 = (state_24255[7]);var inst_24234 = (inst_24232 < n);var state_24255__$1 = state_24255;if(cljs.core.truth_(inst_24234))
{var statearr_24259_24280 = state_24255__$1;(statearr_24259_24280[1] = 4);
} else
{var statearr_24260_24281 = state_24255__$1;(statearr_24260_24281[1] = 5);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 3))
{var inst_24252 = (state_24255[2]);var inst_24253 = cljs.core.async.close_BANG_(out);var state_24255__$1 = (function (){var statearr_24261 = state_24255;(statearr_24261[8] = inst_24252);
return statearr_24261;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24255__$1,inst_24253);
} else
{if((state_val_24256 === 4))
{var state_24255__$1 = state_24255;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24255__$1,7,ch);
} else
{if((state_val_24256 === 5))
{var state_24255__$1 = state_24255;var statearr_24262_24282 = state_24255__$1;(statearr_24262_24282[2] = null);
(statearr_24262_24282[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 6))
{var inst_24250 = (state_24255[2]);var state_24255__$1 = state_24255;var statearr_24263_24283 = state_24255__$1;(statearr_24263_24283[2] = inst_24250);
(statearr_24263_24283[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 7))
{var inst_24237 = (state_24255[9]);var inst_24237__$1 = (state_24255[2]);var inst_24238 = (inst_24237__$1 == null);var inst_24239 = cljs.core.not(inst_24238);var state_24255__$1 = (function (){var statearr_24264 = state_24255;(statearr_24264[9] = inst_24237__$1);
return statearr_24264;
})();if(inst_24239)
{var statearr_24265_24284 = state_24255__$1;(statearr_24265_24284[1] = 8);
} else
{var statearr_24266_24285 = state_24255__$1;(statearr_24266_24285[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 8))
{var inst_24237 = (state_24255[9]);var state_24255__$1 = state_24255;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24255__$1,11,out,inst_24237);
} else
{if((state_val_24256 === 9))
{var state_24255__$1 = state_24255;var statearr_24267_24286 = state_24255__$1;(statearr_24267_24286[2] = null);
(statearr_24267_24286[1] = 10);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 10))
{var inst_24247 = (state_24255[2]);var state_24255__$1 = state_24255;var statearr_24268_24287 = state_24255__$1;(statearr_24268_24287[2] = inst_24247);
(statearr_24268_24287[1] = 6);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24256 === 11))
{var inst_24232 = (state_24255[7]);var inst_24242 = (state_24255[2]);var inst_24243 = (inst_24232 + 1);var inst_24232__$1 = inst_24243;var state_24255__$1 = (function (){var statearr_24269 = state_24255;(statearr_24269[10] = inst_24242);
(statearr_24269[7] = inst_24232__$1);
return statearr_24269;
})();var statearr_24270_24288 = state_24255__$1;(statearr_24270_24288[2] = null);
(statearr_24270_24288[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24274 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24274[0] = state_machine__5507__auto__);
(statearr_24274[1] = 1);
return statearr_24274;
});
var state_machine__5507__auto____1 = (function (state_24255){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24255);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24275){if((e24275 instanceof Object))
{var ex__5510__auto__ = e24275;var statearr_24276_24289 = state_24255;(statearr_24276_24289[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24255);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24290 = state_24255;
state_24255 = G__24290;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24255){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24277 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24278);
return statearr_24277;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24362){var state_val_24363 = (state_24362[1]);if((state_val_24363 === 1))
{var inst_24339 = null;var state_24362__$1 = (function (){var statearr_24364 = state_24362;(statearr_24364[7] = inst_24339);
return statearr_24364;
})();var statearr_24365_24388 = state_24362__$1;(statearr_24365_24388[2] = null);
(statearr_24365_24388[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 2))
{var state_24362__$1 = state_24362;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24362__$1,4,ch);
} else
{if((state_val_24363 === 3))
{var inst_24359 = (state_24362[2]);var inst_24360 = cljs.core.async.close_BANG_(out);var state_24362__$1 = (function (){var statearr_24366 = state_24362;(statearr_24366[8] = inst_24359);
return statearr_24366;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24362__$1,inst_24360);
} else
{if((state_val_24363 === 4))
{var inst_24342 = (state_24362[9]);var inst_24342__$1 = (state_24362[2]);var inst_24343 = (inst_24342__$1 == null);var inst_24344 = cljs.core.not(inst_24343);var state_24362__$1 = (function (){var statearr_24367 = state_24362;(statearr_24367[9] = inst_24342__$1);
return statearr_24367;
})();if(inst_24344)
{var statearr_24368_24389 = state_24362__$1;(statearr_24368_24389[1] = 5);
} else
{var statearr_24369_24390 = state_24362__$1;(statearr_24369_24390[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 5))
{var inst_24342 = (state_24362[9]);var inst_24339 = (state_24362[7]);var inst_24346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24342,inst_24339);var state_24362__$1 = state_24362;if(inst_24346)
{var statearr_24370_24391 = state_24362__$1;(statearr_24370_24391[1] = 8);
} else
{var statearr_24371_24392 = state_24362__$1;(statearr_24371_24392[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 6))
{var state_24362__$1 = state_24362;var statearr_24373_24393 = state_24362__$1;(statearr_24373_24393[2] = null);
(statearr_24373_24393[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 7))
{var inst_24357 = (state_24362[2]);var state_24362__$1 = state_24362;var statearr_24374_24394 = state_24362__$1;(statearr_24374_24394[2] = inst_24357);
(statearr_24374_24394[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 8))
{var inst_24339 = (state_24362[7]);var tmp24372 = inst_24339;var inst_24339__$1 = tmp24372;var state_24362__$1 = (function (){var statearr_24375 = state_24362;(statearr_24375[7] = inst_24339__$1);
return statearr_24375;
})();var statearr_24376_24395 = state_24362__$1;(statearr_24376_24395[2] = null);
(statearr_24376_24395[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 9))
{var inst_24342 = (state_24362[9]);var state_24362__$1 = state_24362;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24362__$1,11,out,inst_24342);
} else
{if((state_val_24363 === 10))
{var inst_24354 = (state_24362[2]);var state_24362__$1 = state_24362;var statearr_24377_24396 = state_24362__$1;(statearr_24377_24396[2] = inst_24354);
(statearr_24377_24396[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24363 === 11))
{var inst_24342 = (state_24362[9]);var inst_24351 = (state_24362[2]);var inst_24339 = inst_24342;var state_24362__$1 = (function (){var statearr_24378 = state_24362;(statearr_24378[10] = inst_24351);
(statearr_24378[7] = inst_24339);
return statearr_24378;
})();var statearr_24379_24397 = state_24362__$1;(statearr_24379_24397[2] = null);
(statearr_24379_24397[1] = 2);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24383 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24383[0] = state_machine__5507__auto__);
(statearr_24383[1] = 1);
return statearr_24383;
});
var state_machine__5507__auto____1 = (function (state_24362){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24362);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24384){if((e24384 instanceof Object))
{var ex__5510__auto__ = e24384;var statearr_24385_24398 = state_24362;(statearr_24385_24398[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24362);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24399 = state_24362;
state_24362 = G__24399;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24362){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24386 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24387);
return statearr_24386;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24504){var state_val_24505 = (state_24504[1]);if((state_val_24505 === 1))
{var inst_24467 = (new Array(n));var inst_24468 = inst_24467;var inst_24469 = 0;var state_24504__$1 = (function (){var statearr_24506 = state_24504;(statearr_24506[7] = inst_24469);
(statearr_24506[8] = inst_24468);
return statearr_24506;
})();var statearr_24507_24535 = state_24504__$1;(statearr_24507_24535[2] = null);
(statearr_24507_24535[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 2))
{var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24504__$1,4,ch);
} else
{if((state_val_24505 === 3))
{var inst_24502 = (state_24504[2]);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.return_chan(state_24504__$1,inst_24502);
} else
{if((state_val_24505 === 4))
{var inst_24472 = (state_24504[9]);var inst_24472__$1 = (state_24504[2]);var inst_24473 = (inst_24472__$1 == null);var inst_24474 = cljs.core.not(inst_24473);var state_24504__$1 = (function (){var statearr_24508 = state_24504;(statearr_24508[9] = inst_24472__$1);
return statearr_24508;
})();if(inst_24474)
{var statearr_24509_24536 = state_24504__$1;(statearr_24509_24536[1] = 5);
} else
{var statearr_24510_24537 = state_24504__$1;(statearr_24510_24537[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 5))
{var inst_24469 = (state_24504[7]);var inst_24477 = (state_24504[10]);var inst_24472 = (state_24504[9]);var inst_24468 = (state_24504[8]);var inst_24476 = (inst_24468[inst_24469] = inst_24472);var inst_24477__$1 = (inst_24469 + 1);var inst_24478 = (inst_24477__$1 < n);var state_24504__$1 = (function (){var statearr_24511 = state_24504;(statearr_24511[10] = inst_24477__$1);
(statearr_24511[11] = inst_24476);
return statearr_24511;
})();if(cljs.core.truth_(inst_24478))
{var statearr_24512_24538 = state_24504__$1;(statearr_24512_24538[1] = 8);
} else
{var statearr_24513_24539 = state_24504__$1;(statearr_24513_24539[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 6))
{var inst_24469 = (state_24504[7]);var inst_24490 = (inst_24469 > 0);var state_24504__$1 = state_24504;if(cljs.core.truth_(inst_24490))
{var statearr_24515_24540 = state_24504__$1;(statearr_24515_24540[1] = 12);
} else
{var statearr_24516_24541 = state_24504__$1;(statearr_24516_24541[1] = 13);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 7))
{var inst_24500 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24517_24542 = state_24504__$1;(statearr_24517_24542[2] = inst_24500);
(statearr_24517_24542[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 8))
{var inst_24477 = (state_24504[10]);var inst_24468 = (state_24504[8]);var tmp24514 = inst_24468;var inst_24468__$1 = tmp24514;var inst_24469 = inst_24477;var state_24504__$1 = (function (){var statearr_24518 = state_24504;(statearr_24518[7] = inst_24469);
(statearr_24518[8] = inst_24468__$1);
return statearr_24518;
})();var statearr_24519_24543 = state_24504__$1;(statearr_24519_24543[2] = null);
(statearr_24519_24543[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 9))
{var inst_24468 = (state_24504[8]);var inst_24482 = cljs.core.vec(inst_24468);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24504__$1,11,out,inst_24482);
} else
{if((state_val_24505 === 10))
{var inst_24488 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24520_24544 = state_24504__$1;(statearr_24520_24544[2] = inst_24488);
(statearr_24520_24544[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 11))
{var inst_24484 = (state_24504[2]);var inst_24485 = (new Array(n));var inst_24468 = inst_24485;var inst_24469 = 0;var state_24504__$1 = (function (){var statearr_24521 = state_24504;(statearr_24521[12] = inst_24484);
(statearr_24521[7] = inst_24469);
(statearr_24521[8] = inst_24468);
return statearr_24521;
})();var statearr_24522_24545 = state_24504__$1;(statearr_24522_24545[2] = null);
(statearr_24522_24545[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 12))
{var inst_24468 = (state_24504[8]);var inst_24492 = cljs.core.vec(inst_24468);var state_24504__$1 = state_24504;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24504__$1,15,out,inst_24492);
} else
{if((state_val_24505 === 13))
{var state_24504__$1 = state_24504;var statearr_24523_24546 = state_24504__$1;(statearr_24523_24546[2] = null);
(statearr_24523_24546[1] = 14);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 14))
{var inst_24497 = (state_24504[2]);var inst_24498 = cljs.core.async.close_BANG_(out);var state_24504__$1 = (function (){var statearr_24524 = state_24504;(statearr_24524[13] = inst_24497);
return statearr_24524;
})();var statearr_24525_24547 = state_24504__$1;(statearr_24525_24547[2] = inst_24498);
(statearr_24525_24547[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24505 === 15))
{var inst_24494 = (state_24504[2]);var state_24504__$1 = state_24504;var statearr_24526_24548 = state_24504__$1;(statearr_24526_24548[2] = inst_24494);
(statearr_24526_24548[1] = 14);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24530[0] = state_machine__5507__auto__);
(statearr_24530[1] = 1);
return statearr_24530;
});
var state_machine__5507__auto____1 = (function (state_24504){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24504);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24531){if((e24531 instanceof Object))
{var ex__5510__auto__ = e24531;var statearr_24532_24549 = state_24504;(statearr_24532_24549[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24504);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24550 = state_24504;
state_24504 = G__24550;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24504){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24533 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24534);
return statearr_24533;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24663){var state_val_24664 = (state_24663[1]);if((state_val_24664 === 1))
{var inst_24622 = [];var inst_24623 = inst_24622;var inst_24624 = cljs.core.constant$keyword$172;var state_24663__$1 = (function (){var statearr_24665 = state_24663;(statearr_24665[7] = inst_24623);
(statearr_24665[8] = inst_24624);
return statearr_24665;
})();var statearr_24666_24694 = state_24663__$1;(statearr_24666_24694[2] = null);
(statearr_24666_24694[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 2))
{var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24663__$1,4,ch);
} else
{if((state_val_24664 === 3))
{var inst_24661 = (state_24663[2]);var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.return_chan(state_24663__$1,inst_24661);
} else
{if((state_val_24664 === 4))
{var inst_24627 = (state_24663[9]);var inst_24627__$1 = (state_24663[2]);var inst_24628 = (inst_24627__$1 == null);var inst_24629 = cljs.core.not(inst_24628);var state_24663__$1 = (function (){var statearr_24667 = state_24663;(statearr_24667[9] = inst_24627__$1);
return statearr_24667;
})();if(inst_24629)
{var statearr_24668_24695 = state_24663__$1;(statearr_24668_24695[1] = 5);
} else
{var statearr_24669_24696 = state_24663__$1;(statearr_24669_24696[1] = 6);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 5))
{var inst_24627 = (state_24663[9]);var inst_24624 = (state_24663[8]);var inst_24631 = (state_24663[10]);var inst_24631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24627) : f.call(null,inst_24627));var inst_24632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24631__$1,inst_24624);var inst_24633 = cljs.core.keyword_identical_QMARK_(inst_24624,cljs.core.constant$keyword$172);var inst_24634 = (inst_24632) || (inst_24633);var state_24663__$1 = (function (){var statearr_24670 = state_24663;(statearr_24670[10] = inst_24631__$1);
return statearr_24670;
})();if(cljs.core.truth_(inst_24634))
{var statearr_24671_24697 = state_24663__$1;(statearr_24671_24697[1] = 8);
} else
{var statearr_24672_24698 = state_24663__$1;(statearr_24672_24698[1] = 9);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 6))
{var inst_24623 = (state_24663[7]);var inst_24648 = inst_24623.length;var inst_24649 = (inst_24648 > 0);var state_24663__$1 = state_24663;if(cljs.core.truth_(inst_24649))
{var statearr_24674_24699 = state_24663__$1;(statearr_24674_24699[1] = 12);
} else
{var statearr_24675_24700 = state_24663__$1;(statearr_24675_24700[1] = 13);
}
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 7))
{var inst_24659 = (state_24663[2]);var state_24663__$1 = state_24663;var statearr_24676_24701 = state_24663__$1;(statearr_24676_24701[2] = inst_24659);
(statearr_24676_24701[1] = 3);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 8))
{var inst_24627 = (state_24663[9]);var inst_24623 = (state_24663[7]);var inst_24631 = (state_24663[10]);var inst_24636 = inst_24623.push(inst_24627);var tmp24673 = inst_24623;var inst_24623__$1 = tmp24673;var inst_24624 = inst_24631;var state_24663__$1 = (function (){var statearr_24677 = state_24663;(statearr_24677[11] = inst_24636);
(statearr_24677[7] = inst_24623__$1);
(statearr_24677[8] = inst_24624);
return statearr_24677;
})();var statearr_24678_24702 = state_24663__$1;(statearr_24678_24702[2] = null);
(statearr_24678_24702[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 9))
{var inst_24623 = (state_24663[7]);var inst_24639 = cljs.core.vec(inst_24623);var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24663__$1,11,out,inst_24639);
} else
{if((state_val_24664 === 10))
{var inst_24646 = (state_24663[2]);var state_24663__$1 = state_24663;var statearr_24679_24703 = state_24663__$1;(statearr_24679_24703[2] = inst_24646);
(statearr_24679_24703[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 11))
{var inst_24627 = (state_24663[9]);var inst_24631 = (state_24663[10]);var inst_24641 = (state_24663[2]);var inst_24642 = [];var inst_24643 = inst_24642.push(inst_24627);var inst_24623 = inst_24642;var inst_24624 = inst_24631;var state_24663__$1 = (function (){var statearr_24680 = state_24663;(statearr_24680[12] = inst_24643);
(statearr_24680[13] = inst_24641);
(statearr_24680[7] = inst_24623);
(statearr_24680[8] = inst_24624);
return statearr_24680;
})();var statearr_24681_24704 = state_24663__$1;(statearr_24681_24704[2] = null);
(statearr_24681_24704[1] = 2);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 12))
{var inst_24623 = (state_24663[7]);var inst_24651 = cljs.core.vec(inst_24623);var state_24663__$1 = state_24663;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24663__$1,15,out,inst_24651);
} else
{if((state_val_24664 === 13))
{var state_24663__$1 = state_24663;var statearr_24682_24705 = state_24663__$1;(statearr_24682_24705[2] = null);
(statearr_24682_24705[1] = 14);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 14))
{var inst_24656 = (state_24663[2]);var inst_24657 = cljs.core.async.close_BANG_(out);var state_24663__$1 = (function (){var statearr_24683 = state_24663;(statearr_24683[14] = inst_24656);
return statearr_24683;
})();var statearr_24684_24706 = state_24663__$1;(statearr_24684_24706[2] = inst_24657);
(statearr_24684_24706[1] = 7);
return cljs.core.constant$keyword$159;
} else
{if((state_val_24664 === 15))
{var inst_24653 = (state_24663[2]);var state_24663__$1 = state_24663;var statearr_24685_24707 = state_24663__$1;(statearr_24685_24707[2] = inst_24653);
(statearr_24685_24707[1] = 14);
return cljs.core.constant$keyword$159;
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
var state_machine__5507__auto____0 = (function (){var statearr_24689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24689[0] = state_machine__5507__auto__);
(statearr_24689[1] = 1);
return statearr_24689;
});
var state_machine__5507__auto____1 = (function (state_24663){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24663);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$159))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24690){if((e24690 instanceof Object))
{var ex__5510__auto__ = e24690;var statearr_24691_24708 = state_24663;(statearr_24691_24708[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24663);
return cljs.core.constant$keyword$159;
} else
{if(cljs.core.constant$keyword$148)
{throw e24690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$159))
{{
var G__24709 = state_24663;
state_24663 = G__24709;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24663){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24692 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24693);
return statearr_24692;
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
